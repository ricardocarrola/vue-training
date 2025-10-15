<template>
  <div class="counter-button">
    <h3>{{ label }}</h3>
    <div class="controls">
      <button @click="decrement">-</button>
      <span class="count">{{ count }}</span>
      <button @click="increment">+</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// COMPLETAR:
// 1. Definir props: label
// 2. Definir emit: 'countChange'
// 3. Criar ref count = 0
// 4. Criar funções increment e decrement
// 5. Emitir evento 'countChange' com o novo valor quando count muda
</script>

<style scoped>
.counter-button {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.controls {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
}

button {
  width: 40px;
  height: 40px;
  border: none;
  background: #42b983;
  color: white;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
}

.count {
  font-size: 2rem;
  font-weight: bold;
  min-width: 50px;
  text-align: center;
}
</style>
