```vue
<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <section class="site-section">
    <header class="section-header">
      <h2>{{ title }}</h2>
      <p v-if="subtitle">{{ subtitle }}</p>
    </header>

    <div class="section-content">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.site-section {
  margin: 36px 0;
}

.section-header {
  margin-bottom: 22px;
}

h2 {
  margin-bottom: 8px;
  color: #183d2b;
  font-size: 1.8rem;
}

.section-header p {
  color: #647469;
  line-height: 1.6;
}

.section-content {
  min-width: 0;
}
</style>
```