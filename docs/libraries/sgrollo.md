# Sgrollo

Sgrollo è una classe JavaScript senza dipendenze per creare animazioni CSS controllate dalla posizione dello scroll della pagina.

L'animazione viene calcolata tra due punti:

- una posizione dell'elemento `trigger`;
- una posizione del viewport.

Il progresso risultante va da `0` a `1`:

- `0`: animazione all'inizio;
- `0.5`: animazione a metà;
- `1`: animazione completata.

## Requisiti

- Browser con supporto per classi JavaScript, proprietà private di classe e `requestAnimationFrame`.
- Un elemento DOM da usare come trigger.
- Un punto `start` e almeno un'animazione. Il punto `end` è necessario quando
  si usa `scrub: true` oppure `pin: true`.

La classe usa le API globali del browser (`window`, `document`, `Element`, `NodeList`) e non è pensata per l'esecuzione in Node.js.

## Installazione

Non è necessaria una procedura di build. È sufficiente includere il file in una pagina HTML:

```html
<script src="sgrollo.js"></script>
<script>
  const animation = new Sgrollo({
    trigger: ".hero",
    start: "top center",
    end: "bottom top",
    scrub: true,
    animate: [
      {
        element: ".hero-title",
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
    ],
  });
</script>
```

## Configurazione base

```js
const animation = new Sgrollo({
  trigger: ".section",
  start: "top center",
  end: "bottom top",
  scrub: true,
  animate: [
    {
      element: ".title",
      from: {
        opacity: 0,
        transform: {
          translate3d: [0, 40, 0],
          scale: 0.8,
        },
      },
      to: {
        opacity: 1,
        transform: {
          translate3d: [0, 0, 0],
          scale: 1,
        },
      },
    },
  ],
});
```

## Opzioni

| Opzione         | Tipo                 | Default      | Descrizione                                                                                                    |
| --------------- | -------------------- | ------------ | -------------------------------------------------------------------------------------------------------------- |
| `trigger`       | `string \| Element`  | obbligatorio | Elemento usato per calcolare il percorso dello scroll. Una stringa viene passata a `document.querySelector()`. |
| `animate`       | `SgrolloAnimation[]` | obbligatorio | Lista delle animazioni da applicare.                                                                           |
| `start`         | `string`             | obbligatorio | Punto iniziale, ad esempio `top center`.                                                                       |
| `end`           | `string`             | opzionale    | Punto finale, ad esempio `bottom top`. È obbligatorio con `scrub: true` o `pin: true`.                         |
| `startOffset`   | `number \| string`   | `0`          | Offset del punto iniziale. Supporta numeri, `px`, `em`, `rem`, `vh` e `vw`.                                    |
| `scrub`         | `boolean`            | `false`      | Se `true`, aggiorna l'animazione continuamente mentre si scorre.                                               |
| `markers`       | `boolean`            | `false`      | Se `true`, mostra marker visivi per i punti di inizio e fine.                                                  |
| `duration`      | `number`             | `0`          | Durata globale della transizione CSS, in secondi, quando `scrub` è `false`.                                    |
| `ease`          | `string`             | `none`       | Funzione di easing CSS della transizione globale.                                                              |
| `pin`           | `boolean`            | `false`      | Se `true`, mantiene il trigger fissato nel viewport durante il percorso.                                       |
| `endMultiplier` | `number`             | `1`          | Moltiplica l'altezza del trigger quando `pin` è `true`. Deve essere maggiore o uguale a `1`.                   |

Le opzioni `start` e `animate` sono necessarie per un'istanza funzionante. `end` è opzionale per le animazioni one-shot (`scrub: false` e `pin: false`), che vengono completate quando il trigger raggiunge il punto `start`. Se `scrub` o `pin` sono attivi, `end` è obbligatorio; in sua assenza Sgrollo registra un errore nella console e non completa l'inizializzazione dell'istanza.

## Posizioni di start ed end

Il formato è:

```text
posizioneElemento posizioneViewport
```

### Posizioni dell'elemento

- `top`
- `center`
- `bottom`

### Posizioni del viewport

Sono disponibili le stesse tre posizioni oppure una percentuale dell'altezza del viewport:

- `top`
- `center`
- `bottom`
- una percentuale come `25%` o `75%`

Esempi:

```js
start: "top center";
start: "center 30%";
end: "bottom top";
end: "top 75%";
```

La posizione `start` può avere un offset:

```js
const animation = new Sgrollo({
  trigger: ".panel",
  start: "top top",
  startOffset: "2rem",
  end: "bottom bottom",
  animate: [
    /* ... */
  ],
});
```

## Animazioni

Ogni voce di `animate` contiene:

```js
{
  element: '.selector',
  from: { /* valori iniziali */ },
  to: { /* valori finali */ }
}
```

`element` può essere:

- un selettore CSS;
- un singolo `Element`;
- un `NodeList`.

Le proprietà presenti in `from` e `to` devono essere uguali. Per i valori con unità, l'unità iniziale e quella finale devono coincidere.

### Proprietà CSS supportate

- `transform`
- `filter`
- `opacity`
- `width`
- `height`
- `top`
- `left`
- `right`
- `bottom`

### Funzioni `transform`

```js
transform: {
  translate3d: [x, y, z],
  scale: value,
  rotate: value
}
```

Esempio:

```js
from: {
  transform: {
    translate3d: [0, 30, 0],
    scale: 0.8,
    rotate: '-5deg'
  }
},
to: {
  transform: {
    translate3d: [0, 0, 0],
    scale: 1,
    rotate: '0deg'
  }
}
```

`translate3d` usa di default `px` per tutte le coordinate. Per usare unità diverse, i valori possono essere espressi come stringhe:

```js
translate3d: ["10%", "2rem", "0px"];
```

### Funzioni `filter`

```js
filter: {
  blur: value,
  brightness: value,
  grayscale: value
}
```

Esempio:

```js
from: {
  filter: {
    blur: '8px',
    grayscale: 1
  }
},
to: {
  filter: {
    blur: '0px',
    grayscale: 0
  }
}
```

Per interpolare valori numerici con unità sono supportati, tra gli altri, `px`, `%`, `rem`, `em`, `vh` e `vw`, in base alla proprietà CSS utilizzata.

## Scrub e transizioni

Con `scrub: true`, il valore CSS segue direttamente il progresso dello scroll:

```js
const animation = new Sgrollo({
  trigger: ".image",
  start: "top bottom",
  end: "bottom top",
  scrub: true,
  animate: [
    {
      element: ".image",
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
  ],
});
```

Con `scrub: false`, l'animazione viene applicata una volta quando il trigger raggiunge il punto `start`. La transizione usa le opzioni globali `duration` ed `ease`:

```js
const animation = new Sgrollo({
  trigger: ".card",
  start: "top 80%",
  end: "bottom top",
  duration: 0.6,
  ease: "ease-out",
  animate: [
    {
      element: ".card",
      from: { opacity: 0, left: "-40px" },
      to: { opacity: 1, left: "0px" },
    },
  ],
});
```

Per un'animazione one-shot `end` può essere omesso:

```js
const animation = new Sgrollo({
  trigger: ".card",
  start: "top 80%",
  animate: [
    {
      element: ".card",
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
  ],
});
```

Quando `scrub` o `pin` sono impostati a `true`, invece, è necessario specificare `end` per definire il percorso completo dell'animazione.

## Pin

Con `pin: true`, il trigger viene mantenuto in posizione fixed mentre l'animazione è attiva. Il contenitore spacer viene creato automaticamente per conservare lo spazio nel layout:

```js
const animation = new Sgrollo({
  trigger: ".panel",
  start: "top top",
  end: "bottom top",
  pin: true,
  endMultiplier: 2,
  scrub: true,
  animate: [
    {
      element: ".panel-content",
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
  ],
});
```

Il pin può modificare temporaneamente `position`, `top`, `left`, `width`, `margin`, `bottom`, `z-index` e `transform` del trigger. Evitare di sovrascrivere questi stili mentre l'istanza è attiva.

## Marker di debug

Per visualizzare i punti di riferimento:

```js
const animation = new Sgrollo({
  trigger: ".section",
  start: "top center",
  end: "bottom top",
  markers: true,
  animate: [
    /* ... */
  ],
});
```

I marker vengono aggiunti direttamente a `document.body` e rimossi da `destroy()` o da `update()`.

## Metodi pubblici

### `setProgress(value)`

Imposta il progresso manualmente. Accetta solo numeri compresi tra `0` e `1`.

```js
animation.setProgress(0.5);
```

### `getProgress()`

Restituisce il progresso corrente:

```js
const progress = animation.getProgress();
```

### `update()`

Ricalcola dimensioni, posizioni, marker e limiti. Usarlo dopo aver modificato il layout o il contenuto della pagina:

```js
window.addEventListener("load", () => {
  animation.update();
});
```

La classe esegue già `update()` quando la finestra riceve un evento `resize`.

### `destroy()`

Rimuove i listener di scroll e resize, ferma il ciclo `requestAnimationFrame`, rimuove i marker e ripristina gli stili gestiti:

```js
animation.destroy();
```

## Esempio di utilizzo con destroy

```js
document.addEventListener("sgrolloInitialized", function (event) {
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && window.innerWidth >= 1024) {
    initSgrollo();
  }
});

let sgrolloInstances = [];

window.addEventListener("resize", function () {
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    if (window.innerWidth < 1024) {
      if (sgrolloInstances.length > 0) {
        sgrolloInstances.forEach((instance) => instance.destroy());
        sgrolloInstances = [];
      }
    } else {
      if (sgrolloInstances.length === 0) {
        initSgrollo();
      }
    }
  }
});

function initSgrollo() {
  const boxes = document.querySelectorAll(".box-3-photo-hover__item--fx");
  boxes.forEach((image) => {
    let startPosition = image.classList.contains("box-3-photo-hover__item--fx-right")
      ? "-50%"
      : "50%";
    let sgrolloInstance = new Sgrollo({
      trigger: image,
      start: "top bottom",
      end: "center center",
      markers: false,
      scrub: true,
      animate: [
        {
          element: image,
          from: {
            transform: {
              translate3d: [startPosition, 0, 0],
            },
          },
          to: {
            transform: {
              translate3d: ["0%", 0, 0],
            },
          },
        },
      ],
    });
    sgrolloInstances.push(sgrolloInstance);
  });
}
```
