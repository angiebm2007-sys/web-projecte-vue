```vue
<template>
  <main class="page">
    <p class="eyebrow">EL PROJECTE</p>
    <h1>Sobre nosaltres</h1>

    <section class="card">
      <h2>Connectem persones i experiències</h2>
      <p>
        Aquest projecte vol facilitar el descobriment d'activitats
        culturals, educatives i de lleure.
      </p>
      <p>
        La web es desenvolupa amb Vue i consultarà les seves dades
        mitjançant Firebase Firestore.
      </p>
    </section>
  </main>
</template>

<style scoped>
.page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 48px 24px;
}

.eyebrow {
  color: #26734d;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 2px;
}

h1 {
  color: #183d2b;
  font-size: 3rem;
}

.card {
  padding: 28px;
  border: 1px solid #d9e7dd;
  border-radius: 16px;
  background: #f7fbf8;
  line-height: 1.8;
}
</style>
```