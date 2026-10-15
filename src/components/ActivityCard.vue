```vue
<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: 'Data per confirmar',
  },
})
</script>

<template>
  <article class="activity-card">
    <div class="card-top">
      <span class="category">{{ category }}</span>
      <span class="date">{{ date }}</span>
    </div>

    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </article>
</template>

<style scoped>
.activity-card {
  padding: 24px;
  border: 1px solid #d9e7dd;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 6px 20px rgb(24 61 43 / 6%);
}

.card-top {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 18px;
}

.category {
  padding: 6px 10px;
  border-radius: 20px;
  background: #e9f5ee;
  color: #26734d;
  font-size: 0.8rem;
  font-weight: bold;
}

.date {
  color: #647469;
  font-size: 0.85rem;
}

h3 {
  margin: 0 0 10px;
  color: #183d2b;
  font-size: 1.3rem;
}

p {
  margin: 0;
  color: #526458;
  line-height: 1.7;
}
</style>
```