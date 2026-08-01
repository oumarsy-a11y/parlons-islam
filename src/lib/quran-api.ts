const API_URL = "https://api.alquran.cloud/v1";

export async function getSourate(id: number) {
  const response = await fetch(
    `${API_URL}/surah/${id}/quran-uthmani`
  );

  if (!response.ok) {
    throw new Error("Impossible de récupérer la sourate");
  }

  const data = await response.json();

  return data.data;
}