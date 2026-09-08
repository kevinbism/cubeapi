---
title: News
description: Aggiornamenti e novità del progetto
---

# News

Benvenuto nella sezione **News**. Qui pubblichiamo aggiornamenti generici su sviluppo, miglioramenti e attività recenti.

## Settembre 2026

### Agile JSON Builder

A grande richiesta, senza che nessuno l'abbia chiesto, è stato sviluppato [Agile JSON Builder](https://agilejsonbuilder.vercel.app/) il tool per permettere al 25% dei capi reparto di costruire in maniera visiva e più facilmente il file config dei componenti di Agile.

Per smanettare o per dare il proprio contributo ecco la repo su Github: [https://github.com/kevinbism/agilejsonbuilder](https://github.com/kevinbism/agilejsonbuilder)

## Agosto 2026

### Barra di avanzamento con Scroll-Driven Animations (CSS Nativo)

Sfruttando le nuove proprietà CSS **`animation-timeline`**, **`scroll()`** e **`view-timeline`**, è possibile creare barre di scorrimento ed effetti visivi guidati dallo scroll **sia in orizzontale che in verticale**, senza usare listener JavaScript e garantendo prestazioni ottimali a 60fps.

Di seguito analizziamo i due casi d'uso principali.

---

#### Caso 1: Barra di avanzamento globale della pagina (`scroll()`)

Da utilizzare quando si vuole mostrare un indicatore legato allo scorrimento dell'intero documento (`viewport`). Può essere posizionato **in orizzontale** (in alto o in basso) oppure **in verticale** lungo il bordo dello schermo.

```html
<div class="scroll-progress"></div>
```

#### CSS

```css
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #007bff;
  transform-origin: left;
  animation: scroll-progress-anim linear;
  animation-timeline: scroll(root);
  z-index: 9999;
}

@keyframes scroll-progress-anim {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}
```

#### Caso 2: Indicatore legato a una specifica sezione (`view-timeline`)

Da utilizzare quando l'animazione deve attivarsi e avanzare solo mentre uno specifico componente (es. una gallery o timeline) attraversa lo schermo (`viewport`).

Nel seguente esempio l'altezza dell'elemento è stata regolata al 130% per permettere alla barra di scorrere interamente anche senza l'uscita del blocco stesso dallo schermo. Molto utile quando si ha poco contenuto sotto la sezione.

#### CSS

```css
@keyframes growBar {
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
}

.gallery-container {
  ul {
    position: relative;
    // 1. Definizione della timeline legata allo scorrimento dell'elemento
    view-timeline-name: --gallery-timeline;
    view-timeline-axis: block;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 8px;
      width: rem(8px);
      height: 130%; // Altezza regolabile in base al contenuto
      transform-origin: top;
      background: linear-gradient(
        to bottom,
        #000000 30%,
        #d20000 60%,
        #ff6161 70%,
        #e99000 80%,
        #d5d5d5 90%
      );

      // 2. Collegamento dell'animazione al range di visibilità
      animation: growBar linear auto;
      animation-timeline: --gallery-timeline;
      animation-range: cover 0% cover 100%;
    }
  }
}
```

## Giugno 2026

### Controlli animazioni e accessibilità

Per rispettare le **impostazioni del browser** che gestiscono la disattivazione delle animazioni bisogna effettuare due controlli, uno lato **CSS** ed uno lato **JS** (a seconda della tipologia di animazioni che andremo ad utilizzare nel nostro sito).

#### CSS

```css
@media (prefers-reduced-motion: reduce) {
  ... animazioni da disattivare...
}
```

#### JS

```js
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  ...animazioni da attivare...
}
```

#### Testing

Queste impostazioni si possono testare direttamente dal browser nel seguente modo:

- `F12` per aprire i DevTools.
- `Ctrl + Shift + P`
- `Digita Show Rendering`
- `Apri il pannello Rendering` in basso a destra
- `Cerca: Emulate CSS media feature prefers-reduced-motion.`
- `Seleziona: reduce`

L'effetto CSS si applica immediatamente, per il JS invece è necessario aggiornare la pagina.

## Maggio 2026

### Aggiornamento Moose

A **Moose** è stata aggiunta una nuova funzione per gestire il **pause/play di Swalle**.

```js
swalleInteractions({ instance: swalle, swalleEl: ".swalle-container", ppButton: ".swalle-pause" });
```

#### Parametri

- `instance` (object): Oggetto di tipo Swalle.
- `swalleEl` (string): Selettore CSS per contenitore di swalle.
- `ppButton` (string): Selettore CSS per il pulsante "play/pause".

<br />
Per maggiori informazioni su questo update consultare il seguente link <a href="https://github.com/Blastness-Spa/cube-sites-libs-alce">moose-git</a>

---

### Aggiornamento Swalle versione 5

**Swalle** è stato trasformato in classe per permetterci di utilizzarne esternamente metodi e funzioni, in modo da poterlo gestire anche dopo la dichiarazione.

#### **Inclusione della libreria**

Per non compromettere il comportamento dei siti che utilizzano una versione precedente di Swalle, la versione di **default** su Cube è rimasta la **uno**.<br>
Per includere la libreria aggiornata utilizzare questo script dove è specificata la versione da utilizzare (5).

```html
<script src="<?=$this->getLibreria("swalle", 5)['js'] ?>" defer></script>
```

#### **Dichiarazione**

Essendo diventato un oggetto ora Swalle ha una nuova dichiarazione.

```javascript
const swalle = new Swalle({
  img: ".swalle-image",
  prev: ".swalle-prev",
  next: ".swalle-next",
  paginationEl: ".swalle-pagination",
  setTime: 3000,
});
```

#### Parametri

- `img` (string): Selettore CSS per gli elementi immagine.
- `prev` (string): Selettore CSS per il pulsante "precedente".
- `next` (string): Selettore CSS per il pulsante "successivo".
- `paginationEl` (string): Selettore CSS per l'elemento di paginazione.
- `setTime` (number): Intervallo di tempo (in millisecondi) per l'autoplay. Predefinito: 5000 ms.

#### Esempio completo

```javascript
document.addEventListener("DOMContentLoaded", function () {
  const swalle = new Swalle({
    img: ".swalle-image",
    prev: ".swalle-prev",
    next: ".swalle-next",
    paginationEl: ".swalle-pagination",
    setTime: 3000,
  });
});
```

<br />
Per maggiori informazioni su Swalle consultare il seguente link <a href="https://github.com/Blastness-Spa/cube-sites-libs-swalle">swalle-git</a>

---

### Flex al posto della dimensione in percentuale

Abbiamo sostituito le classiche dimensioni in percentuale o pixel con la proprietà `flex`, rendendo la gestione dei layout molto più flessibile e reattiva. Utilizzando `flex` puoi ottenere la stessa suddivisione degli spazi (sia in proporzione che in valore assoluto) ma con maggiore semplicità e adattabilità, senza dover calcolare manualmente le larghezze o modificare il CSS per ogni breakpoint.

```css
.container {
  display: flex;
}

.item-sx {
  flex: 40; /* Valore corrispondente a width: 40% */
}

.item-dx {
  flex: 60; /* Valore corrispondente a width: 60% */
}
```

Lo stesso approccio può essere usato per le dimensioni in `px`. Ad esempio se l'elemento `.item-sx` è largo `650px` mentre `.item-dx` sono `350px` posso impostare gli elementi in questo modo:

```css
.container {
  display: flex;
}

.item-sx {
  flex: 650; /* Valore corrispondente a width: 650px */
}

.item-dx {
  flex: 350; /* Valore corrispondente a width: 350px */
}
```
