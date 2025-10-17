<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useNotificationsStore } from "@/stores/notifications";

const store = useNotificationsStore();
const { unreadCount } = storeToRefs(store);
// TODO: chamar store.init() em main.ts (uma vez)
</script>

<template>
  <button class="notif-btn" aria-label="Notificações">
    🔔
    <span v-if="unreadCount > 0" class="badge">{{ unreadCount }}</span>
  </button>
</template>

<style scoped>
.notif-btn {
  position: relative;
  background: transparent;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
}
.badge {
  position: absolute;
  top: -6px;
  right: -6px;
  min-width: 18px;
  height: 18px;
  padding: 0 6px;
  border-radius: 999px;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  background: #e11d48;
  color: #fff;
  font-weight: 700;
  box-shadow: 0 0 0 2px #fff;
}
</style>
