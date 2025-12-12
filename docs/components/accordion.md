# Accordion

Accordion animato senza Javacript utilizzando solo CSS pienamente accessibile.

<script setup>
import Accordion from "../vue/Accordion.vue"
</script>

<Accordion />

::: warning SUPPORTO
Attualmente, questa animazione avanzata funzionerà **solo sui browser basati su Chromium (Chrome, Edge, Brave, Opera)**.\
Negli altri browser le tendine si aprono ma non c'è l'animazione.
:::

## Utilizzo

Di seguito l'esempio della struttura html:

```php
<?php
$accordion = $this->getModulo('Accordion');

foreach ($accordion as $list) { ?>
  <details class="accordion-details" name="accordion">
    <summary class="accordion__summary" role="button">
      <span class="accordion__title"><?= $list['titolo'] ?></span>
      <i class="fa-thin fa-chevron-down accordion__icon" aria-hidden="true"></i>
    </summary>
    <div class="accordion-content">
      <div class="accordion-content__text"><?= $list['testo'] ?></div>
    </div>
  </details>
<?php } ?>
```

Nel nostro foglio di stile bisogna inserire il seguente codice:

```css
::details-content {
  transition: all 0.5s ease, content-visibility 0.5s allow-discrete;
  height: 0;
  overflow: clip;
}

@supports (interpolate-size: allow-keywords) {
  :root {
    interpolate-size: allow-keywords;
  }

  [open]::details-content {
    height: auto;
  }
}

/* Fallback per browser che non supportano interpolate-size ma supportano details-content */
@supports not (interpolate-size: allow-keywords) {
  [open]::details-content {
    height: 200px; /* Fallback semplice con scroll attivo */
    overflow-y: scroll;
  }
}
```

Lo stile dell'accordion dipende dalla grafica del vostro progetto ma potete usare lo stile di questa versione.

```css
.accordion-details {
  border-bottom: 1px solid var(--your-color);
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
}

.accordion__summary:hover .accordion__title {
  text-decoration: underline;
}

/* Rotazione Icona */
.accordion__icon {
  transition: transform 0.2s ease;
  width: 16px;
  height: 16px;
}

.accordion-details[open] .accordion__icon {
  transform: rotate(180deg);
}

/* Stili interni del contenuto */
.accordion-content {
  padding-bottom: 1rem;
}

.accordion-content__text {
  font-size: 0.95rem;
  line-height: 1.6;
}
```

## Criteri di Accessibilità (WCAG)

L'Accordion è stato sviluppato per aderire pienamente alle linee guida WCAG, sfruttando la semantica nativa di **HTML5** per garantire un'ottima accessibilità.

L'uso degli elementi `<details>` e `<summary>` permette al browser di gestire automaticamente i ruoli e gli stati ARIA necessari. L'attributo esplicito `role="button"` sulla `<summary>` rafforza la compatibilità, assicurando che l'elemento sia correttamente riconosciuto come un controllo interattivo per i **lettori di schermo**. Viene garantito un **focus visibile** sulla `<summary>` per gli utenti che navigano con la tastiera. Infine, l'icona a freccia è marcata come puramente decorativa (`aria-hidden="true"`), mentre il titolo della `<summary>` funge da etichetta chiara e descrittiva per il contenuto espandibile.
