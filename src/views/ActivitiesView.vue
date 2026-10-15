
<script setup>
import { ref, onMounted } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase.js'

import ActivityCard from '../components/ActivityCard.vue'
import SiteSection from '../components/SiteSection.vue'
import LoadingMessage from '../components/LoadingMessage.vue'

const activities = ref([])
const loading = ref(true)
const error = ref('')

async function loadActivities() {
  loading.value = true
  error.value = ''

  try {
    const snapshot = await getDocs(collection(db, 'activities'))

    activities.value = snapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }))
  } catch (err) {
    console.error('Error carregant les activitats:', err)
    error.value = 'No s’han pogut carregar les activitats. Torna-ho a provar més tard.'
  } finally {
    loading.value = false
  }
}

onMounted(loadActivities)
</script>

<template>
  <main class="page">
    <p class="eyebrow">LA NOSTRA AGENDA</p>
    <h1>Activitats</h1>
    <p class="intro">
      Descobreix experiències per aprendre, crear i gaudir del teu temps lliure.
    </p>

    <SiteSection
      title="Properes experiències"
      subtitle="Una selecció d'activitats que podràs descobrir."
    >
      <LoadingMessage
        v-if="loading"
        message="Carregant les activitats..."
      />

      <div v-else-if="error" class="status error" role="alert">
        <p>{{ error }}</p>
        <button class="retry-button" @click="loadActivities">
          Tornar-ho a provar
        </button>
      </div>

      <p v-else-if="activities.length === 0" class="status">
        Encara no hi ha activitats disponibles.
      </p>

      <div v-else class="activity-grid">
        <ActivityCard
          v-for="activity in activities"
          :key="activity.id"
          :title="activity.title"
          :category="activity.category"
          :description="activity.description"
          :date="activity.date"
        />
      </div>
    </SiteSection>
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
  margin-bottom: 12px;
  color: #183d2b;
  font-size: 3rem;
}

.intro {
  color: #526458;
  line-height: 1.7;
}

.activity-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
  gap: 20px;
}

.status {
  padding: 20px;
  border-radius: 12px;
  background: #f7fbf8;
  color: #526458;
  line-height: 1.6;
}

.error {
  background: #fff2f0;
  color: #9c3025;
}

.retry-button {
  padding: 10px 16px;
  border: 0;
  border-radius: 8px;
  background: #26734d;
  color: white;
  cursor: pointer;
}

@media (max-width: 600px) {
  .page {
    padding: 32px 18px;
  }
}
</style>
