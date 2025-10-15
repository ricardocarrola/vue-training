<template>
  <div class="app">
    <h1>Loja Online</h1>
    <div class="products-grid">
      <!-- COMPLETAR: 
           Importar e usar ProductCard 3 vezes com dados diferentes
           Produtos sugeridos:
           1. Portátil - €899 - disponível
           2. Rato - €25 - disponível
           3. Teclado - €75 - esgotado
      -->
    </div>
  </div>
</template>

<script setup>
// COMPLETAR: Importar o componente ProductCard
</script>

<style scoped>
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}
</style>
