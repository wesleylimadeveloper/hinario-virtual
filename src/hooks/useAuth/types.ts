import { ReactNode } from "react";
import { AxiosResponse } from "axios";

import { User } from "@/services/sessions/types";

export type AuthProviderProps = {
  children: ReactNode;
};

export type FormData = {
  email: string;
  password: string;
};

export type IAuthContextData = {
  user: User;
  isAppLoading: boolean;
  login(form: FormData): Promise<AxiosResponse<any, any>>;
  logout(): Promise<void>;
};
