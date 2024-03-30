import api from "@/services/api";

export async function getYears() {
  const response = await api.get("admins/years");

  return response;
}
