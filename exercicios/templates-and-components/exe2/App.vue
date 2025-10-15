<template>
  <div class="app">
    <h1>Contadores Múltiplos</h1>
    <h2>Total: {{ total }}</h2>

    <div class="counters">
      <!-- COMPLETAR:
           Criar 3 CounterButton com labels diferentes
           Escutar evento @countChange e atualizar o total
      -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
// COMPLETAR: Importar CounterButton

const total = ref(0);

// COMPLETAR: Criar função para atualizar o total
// Dica: Precisas de guardar os valores individuais de cada contador
</script>

<style scoped>
.counters {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

h2 {
  color: #42b983;
  text-align: center;
}
</style>
