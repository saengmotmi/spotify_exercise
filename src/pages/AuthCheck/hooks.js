import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import qs from "qs";
import { token } from "utils/auth";

export function useAuthCheck() {
  const location = useLocation();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hash = location.hash.substr(1);
    const { token_type, access_token, refresh_token } = qs.parse(hash);
    console.log(hash);

    token.set("refresh_token", refresh_token);

    if (access_token) {
      token.set(`${token_type} ${access_token}`);
      setIsLoading(false);
    } else {
      alert("Access token is required");
      history.push("/login");
    }
  }, []);

  return { isLoading };
}
