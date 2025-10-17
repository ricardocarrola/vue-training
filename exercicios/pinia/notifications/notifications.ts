// stores/notifications.ts
import { defineStore } from "pinia";
import { useUserStore } from "./user";

export type NotificationType = "info" | "success" | "warning" | "error";

export interface AppNotification {
  id: string;
  message: string;
  type: NotificationType;
  read: boolean;
  timestamp: number;
}

interface NotificationsState {
  notifications: AppNotification[];
}

export const useNotificationsStore = defineStore("notifications", {
  state: (): NotificationsState => ({
    notifications: [],
  }),

  getters: {
    // TODO: devolver número de não lidas
    unreadCount: (s): number => 0,

    // TODO: devolver as 5 mais recentes (ordenar por timestamp desc e slice(0,5))
    recentNotifications: (s): AppNotification[] => s.notifications,
  },

  actions: {
    /** Chamar uma vez no arranque (ex.: main.ts) para integrar com user.logout */
    init(): void {
      const user = useUserStore();
      // TODO: escutar a action logout e depois limpar as notificações
      // user.$onAction(({ name, after }) => { if (name === 'logout') after(() => this.clearAll()) })
    },

    // Dica: só permitir se o utilizador estiver autenticado
    addNotification(message: string, type: NotificationType = "info"): void {
      const user = useUserStore();
      if (!user.isAuthenticated) return;
      e;
      // TODO: criar objeto { id, message, type, read:false, timestamp: Date.now() }
      // dica id: crypto.randomUUID?.() ?? String(Date.now())
      // TODO: adicionar no topo (unshift)
    },

    markAsRead(id: string): void {
      const user = useUserStore();
      if (!user.isAuthenticated) return;
      // TODO: encontrar notificação por id e setar read = true
    },

    clearAll(): void {
      // TODO: esvaziar o array de notificações
      this.notifications = [];
    },
  },
});
e;
