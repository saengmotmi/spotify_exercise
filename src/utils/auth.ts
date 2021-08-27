import * as CryptoJS from "crypto-js";

export const AUTH_TOKEN = "auth_token";

export function checkAuth() {
  return token.get();
}

export const token = {
  get() {
    const token = localStorage.getItem(AUTH_TOKEN);

    if (token) {
      return token;
    } else {
      alert("Auth token is available");
      return "";
    }
  },
  set(token: string) {
    localStorage.setItem(AUTH_TOKEN, token);
  },
};

export function generateCodeVerifier() {
  return generateRandomString(128);
}

export function generateCodeChallenge(code_verifier: string) {
  return base64URL(CryptoJS.SHA256(code_verifier));
}

export function generateRandomString(length: number) {
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";

  return [...Array(length)].reduce(
    (acc) => acc + possible.charAt(Math.floor(Math.random() * possible.length)),
    ""
  );
}

export function base64URL(string: any) {
  return string
    .toString(CryptoJS.enc.Base64)
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}
