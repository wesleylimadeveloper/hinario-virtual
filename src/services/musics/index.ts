import api from "@/services/api";

export async function getParts(
  yearID: string,
  cycleID: string,
  dioceseID: string,
  celebrationID: string
) {
  const response = await api.get(
    `musics/parts?yearId=${yearID}&cycleId=${cycleID}&dioceseId=${dioceseID}&celebrationId=${celebrationID}`
  );

  return response;
}
