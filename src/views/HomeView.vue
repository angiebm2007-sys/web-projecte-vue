HomeView.vue

vue
<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="page">
    <section class="hero">
      <p class="eyebrow">DESCOBREIX · PARTICIPA · GAUDEIX</p>
      <h1>Troba la teva propera aventura</h1>
      <p class="intro">
        Descobreix activitats, esdeveniments i experiències
        per gaudir del teu temps lliure.
      </p>

      <RouterLink to="/activitats" class="button">
        Explorar activitats
      </RouterLink>
    </section>

    <section class="info">
      <h2>Què t'agradaria fer?</h2>
      <p>
        Consulta les activitats disponibles i troba una experiència
        que s'adapti als teus interessos.
      </p>
      <RouterLink to="/sobre-nosaltres" class="text-link">
        Coneix el projecte →
      </RouterLink>
    </section>
  </main>
</template>

<style scoped>
.page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 48px 24px;
}

.hero {
  padding: 64px 32px;
  border-radius: 24px;
  background: #e9f5ee;
}

.eyebrow {
  color: #26734d;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 2px;
}

h1 {
  max-width: 650px;
  color: #183d2b;
  font-size: clamp(2.3rem, 6vw, 4rem);
  line-height: 1.1;
}

.intro {
  max-width: 580px;
  color: #42584a;
  font-size: 1.1rem;
  line-height: 1.7;
}

.button {
  display: inline-block;
  margin-top: 20px;
  padding: 14px 22px;
  border-radius: 10px;
  background: #26734d;
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.info {
  padding: 40px 8px;
}

.text-link {
  color: #26734d;
  font-weight: bold;
}

@media (max-width: 600px) {
  .hero {
    padding: 36px 22px;
  }
}
</style>

