// stores/user.ts
import { defineStore } from "pinia";

interface UserState {
  name: string;
  email: string;
  isAuthenticated: boolean;
}

export const useUserStore = defineStore("user", {
  state: (): UserState => ({
    name: "",
    email: "",
    isAuthenticated: false,
  }),
  actions: {
    // TODO: setar name/email e isAuthenticated = true
    login(name: string, email: string) {
      // ...
    },
    // TODO: limpar state e isAuthenticated = false
    logout() {
      // ...
    },
  },
});
