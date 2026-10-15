```vue
<script setup>
defineProps({
  message: {
    type: String,
    default: 'Carregant dades...',
  },
})
</script>

<template>
  <div class="loading-message" role="status" aria-live="polite">
    <span class="spinner" aria-hidden="true"></span>
    <p>{{ message }}</p>
  </div>
</template>

<style scoped>
.loading-message {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 24px;
  border-radius: 12px;
  background: #f7fbf8;
  color: #526458;
}

.loading-message p {
  margin: 0;
}

.spinner {
  width: 22px;
  height: 22px;
  border: 3px solid #d9e7dd;
  border-top-color: #26734d;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
```