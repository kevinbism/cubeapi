---
title: API Contenuti
description: API per i contenuti di Cube.
---

# API per i contenuti Contenuti

Esplora le funzioni essenziali di Cube con questa pratica guida! Scopri le varie opzioni disponibili per ogni parametro e semplifica il tuo utilizzo del sistema.

## Descrizione anteprima

- **`getDescrizioneAnteprima()`**

Restituisce la descrizione dell'immagine anteprima associata alla pagina.

```php
/**
* @param string $id_pagina
* @param string $id_lingua
* @return string
**/
function getDescrizioneAnteprima($id_pagina, $id_lingua) {
  ...
}
```

Esempio:

```php
<div class="testo"><?= $cube->getDescrizioneAnteprima(); ?></div>
```

## Testo

- **`getTesto()`**

Restituisce il testo associato pagina.

```php
/**
* @param string $id_pagina
* @param string $id_lingua
* @return string
**/
function getTesto($id_pagina, $id_lingua) {
  ...
}
```

Esempio:

```php
<div class="testo"><?= $cube->getTesto(); ?></div>
```

## Titolo

- **`getTitolo()`**

Restituisce il titolo della pagina.

```php
/**
* @param string $id_pagina
* @param string $id_lingua
* @return string
**/
function getTitolo($id_pagina, $id_lingua) {
  ...
}
```

Esempio:

```php
<h1 class="titolo"><?= $cube->getTitolo(); ?></h1>
```

## `getTitoloAnteprima()`

Restituisce il titolo dell'immagine anteprima associata alla pagina.

```php
/**
* @param string $id_pagina
* @param string $id_lingua
* @return string
**/
function getTitoloAnteprima($id_pagina, $id_lingua) {
  ...
}
```

## `getSottotitolo()`

Restituisce il sottotitolo della pagina.

```php
/**
* @param string $id_pagina
* @param string $id_lingua
* @return string
**/
function getSottotitolo($id_pagina, $id_lingua) {
  ...
}
```
