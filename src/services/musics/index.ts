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

export async function getMusics() {
  const response = await api.get(`musics?page=1&limit=10&title=`);

  return response;
}

export async function getMusicByID(id: string) {
  const response = await api.get(`musics/${id}`);

  return response;
}
