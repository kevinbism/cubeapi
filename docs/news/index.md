---
title: News
description: Aggiornamenti e novità del progetto
---

# News

Benvenuto nella sezione **News**. Qui pubblichiamo aggiornamenti generici su sviluppo, miglioramenti e attività recenti.

## Giugno 2026

### Controlli animazioni e accessibilità

Per rispettare le **impostazioni del browser** che gestiscono la disattivazione delle animazioni bisogna effettuare due controlli, uno lato **CSS** ed uno lato **JS** (a seconda della tipologia di animazioni che andremo ad utilizzare nel nostro sito).

#### CSS
```css
@media (prefers-reduced-motion: reduce) {
  ...animazioni da disattivare...
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
swalleInteractions({ instance: swalle, swalleEl: '.swalle-container', ppButton: '.swalle-pause' });
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
