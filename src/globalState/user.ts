import { atom } from "recoil";

import { UserInfo } from "types/spotify";

export const userState = atom<UserInfo | null>({
  key: "userState",
  default: null,
});
