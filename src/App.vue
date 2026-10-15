<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <header class="site-header">
      <RouterLink to="/" class="brand">
        <span class="brand-icon">✳</span>
        <span>ViuExperiències</span>
      </RouterLink>

      <nav class="navigation" aria-label="Navegació principal">
        <RouterLink to="/" class="nav-link">Inici</RouterLink>
        <RouterLink to="/activitats" class="nav-link">
          Activitats
        </RouterLink>
        <RouterLink to="/sobre-nosaltres" class="nav-link">
          Sobre nosaltres
        </RouterLink>
      </nav>
    </header>

    <RouterView />

    <footer class="site-footer">
      <p>ViuExperiències · Descobreix, participa i gaudeix.</p>
    </footer>
  </div>
</template>

<style>
:root {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", sans-serif;
  color: #24382b;
  background: #ffffff;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
}

a {
  color: inherit;
}

.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 20px 5%;
  border-bottom: 1px solid #e3ebe5;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #183d2b;
  font-size: 1.2rem;
  font-weight: 800;
  text-decoration: none;
}

.brand-icon {
  color: #26734d;
  font-size: 1.7rem;
}

.navigation {
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
}

.nav-link {
  color: #526458;
  font-size: 0.95rem;
  text-decoration: none;
}

.nav-link:hover,
.nav-link.router-link-exact-active {
  color: #26734d;
  font-weight: 700;
}

.site-footer {
  padding: 24px;
  border-top: 1px solid #e3ebe5;
  color: #647469;
  text-align: center;
  font-size: 0.9rem;
}

@media (max-width: 650px) {
  .site-header {
    align-items: flex-start;
    flex-direction: column;
  }

  .navigation {
    gap: 14px;
  }
}
</style>