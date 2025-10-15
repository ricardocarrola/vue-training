<template>
  <div>
    <h2>Cadastro de Utilizador</h2>
    <form @submit.prevent="submeter">
      <div>
        <label>Nome:</label>
        <input v-model="formulario.nome" required />
      </div>

      <div>
        <label>Email:</label>
        <input v-model="formulario.email" type="email" required />
        <span v-if="!emailValido" style="color: red">Email inválido</span>
      </div>

      <div>
        <label>Idade:</label>
        <input v-model.number="formulario.idade" type="number" required />
      </div>

      <button type="submit" :disabled="!formularioValido">Enviar</button>
    </form>

    <div v-if="formulario.nome">
      <h3>Resumo:</h3>
      <p>{{ resumo }}</p>
    </div>
  </div>
</template>

<script setup>
// Completar com Composition API
// Dicas:
// - Use reactive para o formulário
// - Use computed para emailValido, formularioValido e resumo
// - Use watch para avisar sobre idade < 18
</script>
