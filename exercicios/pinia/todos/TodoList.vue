<script setup lang="ts">
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useTodosStore } from "@/stores/todos";

const store = useTodosStore();
const { pendingTodos, completedTodos, totalCount } = storeToRefs(store);

const newTodo = ref<string>("");

// TODO: chamar store.addTodo e limpar input
const add = () => {};

// TODO: wrappers simples
const toggle = (id: string) => store.toggleTodo(id);
const remove = (id: string) => store.deleteTodo(id);

onMounted(() => {
  // TODO: carregar do localStorage
  store.init();
});
</script>

<template>
  <section>
    <h2>Todos ({{ totalCount }})</h2>

    <form @submit.prevent="add">
      <input v-model="newTodo" placeholder="Nova tarefa..." />
      <button type="submit">Adicionar</button>
    </form>

    <h3>Pendentes</h3>
    <ul>
      <!-- TODO: v-for em pendingTodos -->
      <li v-for="t in pendingTodos" :key="t.id">
        <label>
          <input
            type="checkbox"
            :checked="t.completed"
            @change="toggle(t.id)"
          />
          {{ t.text }}
        </label>
        <button @click="remove(t.id)">🗑️</button>
      </li>
    </ul>

    <h3>Concluídas</h3>
    <ul>
      <!-- TODO: v-for em completedTodos -->
      <li v-for="t in completedTodos" :key="t.id">
        <label style="text-decoration: line-through">
          <input
            type="checkbox"
            :checked="t.completed"
            @change="toggle(t.id)"
          />
          {{ t.text }}
        </label>
        <button @click="remove(t.id)">🗑️</button>
      </li>
    </ul>
  </section>
</template>

<style scoped>
section {
  max-width: 520px;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 12px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.25rem 0;
}
input {
  padding: 0.5rem;
}
button {
  padding: 0.4rem 0.7rem;
  cursor: pointer;
}
</style>
