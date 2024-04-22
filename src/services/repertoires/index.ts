import api from "@/services/api";

import { CreateRepertoireRequest } from "./types";

export async function createRepertoire(request: CreateRepertoireRequest) {
  const response = await api.post("repertoires", request);

  return response;
}

export async function deleteRepertoire(id: string) {
  const response = await api.delete(`repertoires/${id}`);

  return response;
}

export async function getRepertoires() {
  const response = await api.get("repertoires");

  return response;
}

export async function getRepertoireByID(id: string) {
  const response = await api.get(`repertoires/${id}`);

  return response;
}
