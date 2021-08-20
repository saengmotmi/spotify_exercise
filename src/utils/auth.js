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
  set(token) {
    localStorage.setItem(AUTH_TOKEN, token);
  },
};
