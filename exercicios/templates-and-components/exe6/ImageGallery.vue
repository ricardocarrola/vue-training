<template>
  <div class="image-gallery">
    <h2>Galeria de Imagens</h2>

    <!-- Filtros por categoria -->
    <div class="categories">
      <button
        v-for="category in categories"
        :key="category"
        @click="selectedCategory = category"
        :class="{ active: selectedCategory === category }"
      >
        {{ category }}
      </button>
    </div>

    <!-- Grid de imagens -->
    <!-- COMPLETAR:
         1. Usar v-for para iterar sobre filteredImages
         2. Cada imagem deve:
            - Mostrar a imagem com v-bind:src
            - Ter v-bind:alt com título
            - Ter @click para abrir modal
            - Mostrar título abaixo da imagem
    -->

    <!-- Modal para imagem ampliada -->
    <!-- COMPLETAR:
         Criar modal que:
         - Aparece com v-if quando selectedImage existe
         - Mostra imagem ampliada
         - Mostra título e categoria
         - Fecha ao clicar fora ou no botão fechar
    -->
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const images = ref([
  {
    id: 1,
    title: "Montanha ao Pôr do Sol",
    category: "Natureza",
    url: "https://picsum.photos/400/300?random=1",
  },
  {
    id: 2,
    title: "Cidade Noturna",
    category: "Urbano",
    url: "https://picsum.photos/400/300?random=2",
  },
  {
    id: 3,
    title: "Floresta Tropical",
    category: "Natureza",
    url: "https://picsum.photos/400/300?random=3",
  },
  {
    id: 4,
    title: "Arranha-céus",
    category: "Urbano",
    url: "https://picsum.photos/400/300?random=4",
  },
  {
    id: 5,
    title: "Praia Paradisíaca",
    category: "Natureza",
    url: "https://picsum.photos/400/300?random=5",
  },
  {
    id: 6,
    title: "Gato Fofo",
    category: "Animais",
    url: "https://picsum.photos/400/300?random=6",
  },
]);

const selectedCategory = ref("Todas");
const selectedImage = ref(null);

// COMPLETAR:
// 1. Computed categories - extrair categorias únicas + "Todas"
// 2. Computed filteredImages - filtrar por categoria selecionada
// 3. Função openImage - definir selectedImage
// 4. Função closeImage - limpar selectedImage
</script>

<style scoped>
.image-gallery {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.categories {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.categories button {
  padding: 0.5rem 1rem;
  border: 2px solid #ddd;
  background: white;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
}

.categories button.active {
  background: #42b983;
  color: white;
  border-color: #42b983;
}

/* COMPLETAR: Estilos para o grid de imagens e modal */
</style>
