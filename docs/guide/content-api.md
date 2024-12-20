---
title: API Contenuti
description: API per i contenuti di Cube.
---

# API per i contenuti Contenuti

Esplora le funzioni essenziali di Cube con questa pratica guida! Scopri le varie opzioni disponibili per ogni parametro e semplifica il tuo utilizzo del sistema.

## `getDescrizioneAnteprima()`

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

## `getTesto()`

Restituisce il contenuto testuale della pagina.

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

## `getTitolo()`

Restituisce il titolo principale della pagina.

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
