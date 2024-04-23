import api from "@/services/api";

import { CreateUserRequest } from "./types";

export async function createUser(request: CreateUserRequest) {
  const response = await api.post("users", request);

  return response;
}
