import { LOCAL_STORAGE_KEYS } from "@/types";

export function getUserLocalStorage() {
  return {
    username: localStorage.getItem(LOCAL_STORAGE_KEYS.username),
    desktop: localStorage.getItem(LOCAL_STORAGE_KEYS.desktop),
  };
}
