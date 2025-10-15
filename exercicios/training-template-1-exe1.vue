<!-- Options API - Converter para Composition API -->
<template>
  <div>
    <h2>Contador: {{ contador }}</h2>
    <button @click="incrementar">+</button>
    <button @click="decrementar">-</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contador: 0,
    };
  },
  methods: {
    incrementar() {
      this.contador++;
    },
    decrementar() {
      this.contador--;
    },
    reset() {
      this.contador = 0;
    },
  },
};
</script>
