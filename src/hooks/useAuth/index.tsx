import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Sessions } from "@/services/sessions";
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

  const authTokenStorageKey = "@hinario_virtual:auth_token";
  const userStorageKey = "@hinario_virtual:user";

  async function loadApp() {
    const authToken = await AsyncStorage.getItem(authTokenStorageKey);

    if (authToken) {
      const user = await AsyncStorage.getItem(userStorageKey);

      if (user) setUser(JSON.parse(user));
    }

    setIsAppLoading(false);
  }

  async function login(form: FormData) {
    const { email, password } = form;

    const request: SessionsRequest = {
      email,
      password,
    };

    const response = await Sessions(request);

    if (response.status === 200) {
      const data: SessionsResponse = response.data;
      const { token, user } = data;

      await AsyncStorage.setItem(authTokenStorageKey, JSON.stringify(token));
      await AsyncStorage.setItem(userStorageKey, JSON.stringify(user));

      setUser(user);
    }

    return response;
  }

  async function logout() {
    await AsyncStorage.removeItem(authTokenStorageKey);
    await AsyncStorage.removeItem(userStorageKey);
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
