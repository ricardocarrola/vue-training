<!-- UserProfile.vue - Completar -->
<template>
  <div class="profile">
    <button @click="voltar">← Voltar</button>

    <h1>Perfil de {{ username }}</h1>

    <div class="info">
      <!-- Mostrar informações do utilizador -->
      <p>Nome: {{ userData.name }}</p>
      <p>Email: {{ userData.email }}</p>
      <p>Cargo: {{ userData.role }}</p>
    </div>

    <div class="actions">
      <button @click="editarPerfil">Editar Perfil</button>
      <button @click="verProximoUser">Próximo Utilizador</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

// Base de dados simulada
const users = {
  joao: { name: "João Silva", email: "joao@email.com", role: "Developer" },
  maria: { name: "Maria Santos", email: "maria@email.com", role: "Designer" },
  pedro: { name: "Pedro Costa", email: "pedro@email.com", role: "Manager" },
};

// Completar implementação:
// 1. Obter username dos parâmetros da rota
// 2. Buscar dados do utilizador
// 3. Implementar função voltar
// 4. Implementar função editarPerfil (navegar para /user/:username/edit)
// 5. Implementar função verProximoUser (navegar para próximo user)
// 6. Watch para reagir quando username muda
</script>

<style scoped>
.profile {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.info {
  margin: 2rem 0;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 4px;
}

.actions {
  display: flex;
  gap: 1rem;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background: #42b983;
  color: white;
  cursor: pointer;
}

button:hover {
  background: #359268;
}
</style>
