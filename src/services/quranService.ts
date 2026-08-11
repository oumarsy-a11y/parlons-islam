import axios from "axios";

const API_URL = "https://api.alquran.cloud/v1";


export async function getSourates() {

  const response = await axios.get(
    `${API_URL}/surah`
  );

  return response.data.data || [];

}


export async function getSourate(id: number) {

  const response = await axios.get(
    `${API_URL}/surah/${id}/quran-uthmani`
  );

  return response.data.data;

}


export async function getSourateWithTranslation(id: number) {

  const response = await axios.get(
    `${API_URL}/surah/${id}/fr.hamidullah`
  );

  return response.data.data;

}