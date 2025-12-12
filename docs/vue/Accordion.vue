<script setup>
// Importa i dati dal JSON creato prima
import items from "../.vitepress/data/cards.json";
</script>

<template>
  <div class="accordion-container">
    <details v-for="item in items" :key="item.id" class="accordion-details" name="accordion">
      <summary class="accordion__summary" role="button">
        <span class="accordion__title">{{ item.titolo }}</span>

        <svg
          class="accordion__icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
          focusable="false">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </summary>

      <div class="accordion-content">
        <div class="accordion-content__body">
          <p>{{ item.testo }}</p>
        </div>
      </div>
    </details>
  </div>
</template>

<style scoped>
.accordion-container {
  width: 100%;
  margin-top: 60px;
  border: 1px solid var(--vp-c-divider); /* Colore bordo di Vitepress */
  border-radius: 10px;
  padding: 60px 80px;
}

.accordion-details {
  border-bottom: 1px solid var(--vp-c-divider);
}

.accordion__summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  cursor: pointer;
  list-style: none; /* Rimuove il triangolino di default */
}

/* Nasconde il marker di default su alcuni browser */
.accordion__summary::-webkit-details-marker {
  display: none;
}

.accordion__title {
  font-weight: 500;
  font-size: 1rem;
  /* Qui puoi mettere la tua classe .cormorant se importata globalmente */
}

.accordion__summary:hover .accordion__title {
  text-decoration: underline; /* Effetto hover stile Shadcn */
}

/* Rotazione Icona */
.accordion__icon {
  transition: transform 0.2s ease;
  width: 16px;
  height: 16px;
  color: var(--vp-c-text-2);
}

.accordion-details[open] .accordion__icon {
  transform: rotate(180deg);
}

/* Stili interni del contenuto */
.accordion-content__body {
  padding-bottom: 1rem;
}

.accordion-content__body p {
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  line-height: 1.6;
}

.accordion-content__subtitle {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
}
</style>
