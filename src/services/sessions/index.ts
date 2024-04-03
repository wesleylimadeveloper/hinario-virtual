import api from "@/services/api";

import { SessionsRequest } from "./types";

export async function sessions(request: SessionsRequest) {
  const response = await api.post("sessions", request);

  return response;
}
