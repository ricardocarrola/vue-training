<template>
  <div class="todo-list">
    <h2>Lista de Tarefas</h2>

    <!-- Formulário para adicionar tarefa -->
    <form @submit.prevent="addTodo">
      <!-- COMPLETAR: Input com v-model ligado a newTodoText -->
      <button type="submit">Adicionar</button>
    </form>

    <!-- Filtros -->
    <div class="filters">
      <button @click="filter = 'all'" :class="{ active: filter === 'all' }">
        Todas ({{ todos.length }})
      </button>
      <button
        @click="filter = 'active'"
        :class="{ active: filter === 'active' }"
      >
        Ativas ({{ activeTodosCount }})
      </button>
      <button
        @click="filter = 'completed'"
        :class="{ active: filter === 'completed' }"
      >
        Concluídas ({{ completedTodosCount }})
      </button>
    </div>

    <!-- Lista de tarefas -->
    <!-- COMPLETAR:
         1. Usar v-for para iterar sobre filteredTodos
         2. Usar v-if para mostrar mensagem se lista vazia
         3. Cada tarefa deve ter:
            - Checkbox com v-model ligado a todo.completed
            - Texto da tarefa (riscado se concluída)
            - Botão para remover
    -->
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const newTodoText = ref("");
const filter = ref("all"); // 'all', 'active', 'completed'
const todos = ref([
  { id: 1, text: "Aprender Vue 3", completed: false },
  { id: 2, text: "Fazer exercícios", completed: true },
  { id: 3, text: "Criar projeto", completed: false },
]);

// COMPLETAR:
// 1. Função addTodo - adicionar nova tarefa
// 2. Função removeTodo - remover tarefa por id
// 3. Computed filteredTodos - filtrar tarefas baseado em filter
// 4. Computed activeTodosCount - contar tarefas ativas
// 5. Computed completedTodosCount - contar tarefas concluídas
</script>

<style scoped>
.todo-list {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

input[type="text"] {
  flex: 1;
  padding: 0.75rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
}

button {
  padding: 0.75rem 1.5rem;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.filters {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.filters button {
  background: #f0f0f0;
  color: #333;
  font-size: 0.9rem;
}

.filters button.active {
  background: #42b983;
  color: white;
}

/* Adiciona estilos para a lista de tarefas */
</style>
