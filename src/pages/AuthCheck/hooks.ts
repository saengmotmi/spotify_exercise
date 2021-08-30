import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import qs from "qs";

import { sendRefreshToken } from "./api";
import { token } from "utils/auth";

export function useAuthCheck() {
  const location = useLocation();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    function parseQuery() {
      return qs.parse(location.search.substr(1));
    }

    function getAuthFormData() {
      return new URLSearchParams({
        client_id: process.env.REACT_APP_CLIENT_ID as string,
        grant_type: "authorization_code",
        code: parseQuery().code as string,
        redirect_uri: process.env.REACT_APP_REDIRECT_URI as string,
        code_verifier: localStorage.getItem("code_verifier") as string,
      });
    }

    (async () => {
      const formData = getAuthFormData();

      const { refresh_token, access_token, token_type } =
        await sendRefreshToken(formData);

      if (access_token) {
        localStorage.removeItem("code_verifier");

        token.set(`${token_type} ${access_token}`);
        localStorage.setItem("refresh_token", refresh_token);

        setIsLoading(false);
      } else {
        alert("Access token is required");
        history.push("/login");
      }
    })();
  }, []);

  return { isLoading };
}
