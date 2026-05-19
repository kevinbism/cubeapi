---
title: News
description: Aggiornamenti e novità del progetto
---

# News

Benvenuto nella sezione **News**. Qui pubblichiamo aggiornamenti generici su sviluppo, miglioramenti e attività recenti.

## Maggio 2026

- ### Aggiornamento Swalle versione 5

**Swalle** è stato trasformato in classe per permetterci di utilizzarne esternamente metodi e funzioni, in modo da poterlo gestire anche dopo la dichiarazione.

**Inclusione della libreria**

Per non compromettere il comportamento dei siti che utilizzano una versione precedente di Swalle, la versione di **default** su cube è rimasta la **uno**.<br />
Per includere la libreria aggiornata utilizzare questo script dove è specificata la versione da utilizzare (5).

```php
<script src="<?=$this->getLibreria("swalle", 5)['js'] ?>" defer></script>
```

**Dichiarazione**

Essendo diventato un oggetto ora Swalle ha una nuova dichiarazione.

```javascript
var swalle = new Swalle({
  img: ".swalle-image",
  prev: ".swalle-prev",
  next: ".swalle-next",
  paginationEl: ".swalle-pagination",
  setTime: 3000,
});
```

### Parametri

- `img` (string): Selettore CSS per gli elementi immagine.
- `prev` (string): Selettore CSS per il pulsante "precedente".
- `next` (string): Selettore CSS per il pulsante "successivo".
- `paginationEl` (string): Selettore CSS per l'elemento di paginazione.
- `setTime` (number): Intervallo di tempo (in millisecondi) per l'autoplay. Predefinito: 5000 ms.

### Esempio Completo

```javascript
document.addEventListener("DOMContentLoaded", function () {
  var swalle = new Swalle({
    img: ".swalle-image",
    prev: ".swalle-prev",
    next: ".swalle-next",
    paginationEl: ".swalle-pagination",
    setTime: 3000,
  });
});
```

Per maggiori informazioni su Swalle consultare il seguente link <a href="https://github.com/Blastness-Spa/cube-sites-libs-swalle">swalle-git</a>

---

### Flex al posto della dimensione in percentuale

Abbiamo introdotto ottimizzazioni generali per rendere l'esperienza più fluida e stabile.
