import { LOCAL_STORAGE_KEYS } from "@/types";

export function getUserLocalStorage() {
  if (typeof window === "undefined") {
    return {
      username: null,
      desktop: null,
    };
  }

  return {
    username: localStorage.getItem(LOCAL_STORAGE_KEYS.username),
    desktop: localStorage.getItem(LOCAL_STORAGE_KEYS.desktop),
  };
}
