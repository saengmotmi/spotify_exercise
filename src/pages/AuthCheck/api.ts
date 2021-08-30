import axios from "axios";

export async function sendRefreshToken(formData: URLSearchParams) {
  const res = await axios.post(
    "https://accounts.spotify.com/api/token",
    formData
  );

  return res.data;
}
