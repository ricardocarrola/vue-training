<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useNotificationsStore } from "@/stores/notifications";

const notif = useNotificationsStore();
const { recentNotifications } = storeToRefs(notif);

const mark = (id: string) => notif.markAsRead(id);
const clear = () => notif.clearAll();
</script>

<template>
  <section>
    <header
      style="display: flex; justify-content: space-between; align-items: center"
    >
      <h3>Notificações</h3>
      <button @click="clear">Limpar todas</button>
    </header>

    <ul>
      <!-- TODO: v-for em recentNotifications -->
      <li v-for="n in recentNotifications" :key="n.id">
        <strong>[{{ n.type }}]</strong>
        <span :style="{ opacity: n.read ? 0.6 : 1 }">{{ n.message }}</span>
        <button v-if="!n.read" @click="mark(n.id)">Marcar como lida</button>
      </li>
    </ul>
  </section>
</template>
