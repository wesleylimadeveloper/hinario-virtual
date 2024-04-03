import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { sessions } from "@/services/sessions";
import {
  SessionsRequest,
  SessionsResponse,
  User,
} from "@/services/sessions/types";

import { AuthProviderProps, FormData, IAuthContextData } from "./types";

const AuthContext = createContext({} as IAuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [isAppLoading, setIsAppLoading] = useState(true);

  const AUTH_TOKEN_STORAGE_KEY = "@hinario_virtual:auth_token";
  const REFRESH_TOKEN_STORAGE_KEY = "@hinario_virtual:refresh_token";
  const USER_STORAGE_KEY = "@hinario_virtual:user";

  async function loadApp() {
    const authToken = await AsyncStorage.getItem(AUTH_TOKEN_STORAGE_KEY);
    const user = await AsyncStorage.getItem(USER_STORAGE_KEY);

    if (authToken && user) setUser(JSON.parse(user));

    setIsAppLoading(false);
  }

  async function login(form: FormData) {
    const { email, password } = form;

    const request: SessionsRequest = {
      email,
      password,
    };

    const response = await sessions(request);

    if (response.status === 200) {
      const data: SessionsResponse = response.data;
      const { refreshToken, token, user } = data;

      await AsyncStorage.setItem(AUTH_TOKEN_STORAGE_KEY, JSON.stringify(token));
      await AsyncStorage.setItem(
        REFRESH_TOKEN_STORAGE_KEY,
        JSON.stringify(refreshToken)
      );
      await AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));

      setUser(user);
    }

    return response;
  }

  async function logout() {
    await AsyncStorage.clear();
    setUser({} as User);
  }

  useEffect(() => {
    loadApp();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAppLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
