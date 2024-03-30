import api from "@/services/api";

import { SessionsRequest } from "./types";

export async function Sessions(request: SessionsRequest) {
  const response = await api.post("sessions", request);

  return response;
}
