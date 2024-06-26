import api from "@/services/api";

export async function getYears() {
  const response = await api.get("admins/years");

  return response;
}

export async function getCycles(yearID: string, dioceseID: string) {
  const response = await api.get(
    `masterData/cycles?yearId=${yearID}&dioceseId=${dioceseID}`
  );

  return response;
}

export async function getCelebrations(
  yearID: string,
  cycleID: string,
  dioceseID: string
) {
  const response = await api.get(
    `masterData/celebrations?yearId=${yearID}&cycleId=${cycleID}&dioceseId=${dioceseID}`
  );

  return response;
}
