<template>
  <div>
    <h2>Lista de Tarefas</h2>
    <input
      v-model="novaTarefa"
      @keyup.enter="adicionarTarefa"
      placeholder="Nova tarefa..."
    />
    <button @click="adicionarTarefa">Adicionar</button>

    <p>Pendentes: {{ tarefasPendentes }}</p>

    <ul>
      <li v-for="tarefa in tarefas" :key="tarefa.id">
        <input type="checkbox" v-model="tarefa.concluida" />
        <span
          :style="{
            textDecoration: tarefa.concluida ? 'line-through' : 'none',
          }"
        >
          {{ tarefa.texto }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup>
// Completar com Composition API
// Dicas:
// - Use reactive para o array de tarefas
// - Use ref para novaTarefa
// - Use computed para tarefasPendentes
// - Use onMounted e watch para localStorage
</script>
