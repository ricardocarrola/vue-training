<template>
  <div v-if="isOpen" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <!-- COMPLETAR: Slot para o título -->
        <button @click="closeModal" class="close-btn">×</button>
      </div>

      <div class="modal-body">
        <!-- COMPLETAR: Slot default para o conteúdo -->
      </div>

      <div class="modal-footer">
        <!-- COMPLETAR: Slot para o rodapé -->
      </div>
    </div>
  </div>
</template>

<script setup>
// COMPLETAR:
// 1. Definir props: isOpen (Boolean)
// 2. Definir emit: 'close'
// 3. Criar função closeModal que emite 'close'
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow: auto;
}

.modal-header {
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-body {
  padding: 1.5rem;
}

.modal-footer {
  padding: 1.5rem;
  border-top: 1px solid #eee;
}

.close-btn {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #999;
  line-height: 1;
}

.close-btn:hover {
  color: #333;
}
</style>
