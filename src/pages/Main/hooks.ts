import { useEffect } from "react";
import { useRecoilState } from "recoil";

import { userState } from "globalState/user";
import { getUserInfo } from "./api";

export function useGetUserInfo() {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    (async () => {
      const userInfo = await getUserInfo();
      setUser(userInfo);
    })();
  }, [setUser]);

  return { user };
}
