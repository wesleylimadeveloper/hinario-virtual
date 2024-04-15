import api from "@/services/api";

export async function getRepertoires() {
  const response = await api.get("repertoires");

  return response;
}

export async function getRepertoireByID(id: string) {
  const response = await api.get(`repertoires/${id}`);

  return response;
}
