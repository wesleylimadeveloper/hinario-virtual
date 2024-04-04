import api from "@/services/api";

export async function getRepertoires() {
  const response = await api.get("repertoires");

  return response;
}
