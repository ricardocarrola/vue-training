<template>
  <div class="app">
    <h1>Modal com Slots</h1>

    <button @click="openModal">Abrir Modal</button>

    <!-- COMPLETAR:
         Usar componente Modal com:
         - Slot de título: "Confirmar Ação"
         - Slot default: "Tens a certeza que queres continuar?"
         - Slot de rodapé: 2 botões (Cancelar e Confirmar)
    -->
  </div>
</template>

<script setup>
import { ref } from "vue";
// COMPLETAR: Importar Modal

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const confirm = () => {
  alert("Ação confirmada!");
  closeModal();
};
</script>

<style scoped>
.app {
  padding: 2rem;
}

button {
  padding: 0.75rem 1.5rem;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background: #359268;
}
</style>
