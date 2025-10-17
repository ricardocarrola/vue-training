// stores/todos.ts
import { defineStore } from "pinia";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodosState {
  todos: Todo[];
}

const STORAGE_KEY = "app.todos"; // TODO: usar para persistência

export const useTodosStore = defineStore("todos", {
  state: (): TodosState => ({
    todos: [], // TODO: iniciar vazio
  }),

  getters: {
    // TODO: devolver só concluídas
    completedTodos: (state): Todo[] => state.todos,

    // TODO: devolver só pendentes
    pendingTodos: (state): Todo[] => state.todos,

    // TODO: devolver length
    totalCount: (state): number => state.todos.length,
  },

  actions: {
    // TODO: carregar do localStorage (JSON.parse)
    init(): void {
      // dica: localStorage.getItem(STORAGE_KEY)
    },

    // TODO: guardar no localStorage (JSON.stringify)
    persist(): void {
      // dica: localStorage.setItem(STORAGE_KEY, ...)
    },

    // TODO: criar id (crypto.randomUUID() ou Date.now) e push
    addTodo(text: string): void {
      // dica: text.trim()
    },

    // TODO: inverter completed do todo com id
    toggleTodo(id: string): void {},

    // TODO: remover pelo id (filter)
    deleteTodo(id: string): void {},
  },
});
