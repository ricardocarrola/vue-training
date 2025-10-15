<template>
  <div class="form-input">
    <label :for="id">
      {{ label }}
      <span v-if="required" class="required">*</span>
    </label>

    <!-- COMPLETAR:
         Input com:
         - v-model que atualiza o valor no pai
         - :type dinâmico
         - :placeholder dinâmico
         - :required dinâmico
         - classe 'error' se hasError for true
    -->

    <!-- COMPLETAR: Mostrar mensagem de erro com v-if -->
  </div>
</template>

<script setup>
// COMPLETAR:
// Props necessárias:
// - modelValue (String)
// - label (String)
// - type (String, default 'text')
// - placeholder (String)
// - required (Boolean, default false)
// - errorMessage (String)
// - id (String)

// Emit necessário:
// - 'update:modelValue'

// Computed:
// - hasError: true se errorMessage existir
</script>

<style scoped>
.form-input {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #333;
}

.required {
  color: #e74c3c;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input:focus {
  outline: none;
  border-color: #42b983;
}

input.error {
  border-color: #e74c3c;
}

.error-message {
  color: #e74c3c;
  font-size: 0.85rem;
  margin-top: 0.25rem;
}
</style>
