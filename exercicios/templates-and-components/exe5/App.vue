<template>
  <div class="app">
    <div class="form-container">
      <h1>Criar Conta</h1>

      <form @submit.prevent="handleSubmit">
        <!-- COMPLETAR:
             Usar FormInput para:
             - Nome (obrigatório)
             - Email (obrigatório, type="email")
             - Password (obrigatório, type="password", min 6 caracteres)
             - Confirmar Password (obrigatório, type="password")
             
             Cada input deve:
             - Usar v-model com formData
             - Mostrar mensagem de erro se existir em errors
        -->

        <button type="submit">Registar</button>
      </form>

      <!-- COMPLETAR: Mostrar mensagem de sucesso com v-if -->
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
// COMPLETAR: Importar FormInput

const formData = reactive({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const errors = reactive({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const successMessage = ref(false);

const validateForm = () => {
  // Limpar erros
  Object.keys(errors).forEach((key) => (errors[key] = ""));

  let isValid = true;

  // COMPLETAR: Validações
  // - Nome: mínimo 3 caracteres
  // - Email: formato válido
  // - Password: mínimo 6 caracteres
  // - Confirmar Password: igual à password

  return isValid;
};

const handleSubmit = () => {
  if (validateForm()) {
    console.log("Formulário válido:", formData);
    successMessage.value = true;

    // Limpar formulário
    setTimeout(() => {
      Object.keys(formData).forEach((key) => (formData[key] = ""));
      successMessage.value = false;
    }, 3000);
  }
};
</script>

<style scoped>
.form-container {
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h1 {
  margin: 0 0 2rem 0;
  text-align: center;
  color: #2c3e50;
}

button[type="submit"] {
  width: 100%;
  padding: 1rem;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

button[type="submit"]:hover {
  background: #359268;
}

.success-message {
  padding: 1rem;
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  border-radius: 8px;
  margin-top: 1rem;
  text-align: center;
}
</style>
