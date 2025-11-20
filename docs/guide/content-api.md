---
title: API Contenuti
description: API per i contenuti di Cube.
---

# API Contenuti

Esplora le funzioni essenziali di Cube con questa pratica guida! Scopri le varie opzioni disponibili per ogni parametro e semplifica il tuo codice.

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
<div class="testo"><?= $this->getDescrizioneAnteprima(); ?></div>
```

## Testo

- **`getTesto()`**

Restituisce il testo principale associato pagina.

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
<div class="testo"><?= $this->getTesto(); ?></div>
```

## Titolo

- **`getTitolo()`**

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

Esempio:

```php
<h1 class="titolo"><?= $this->getTitolo(); ?></h1>
```

## Titolo anteprima

- **`getTitoloAnteprima()`**

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

Esempio:

```php
<h3 class="titolo"><?= $this->getTitoloAnteprima(); ?></h3>
```

## Sottotitolo

- **`getSottotitolo()`**

Restituisce il sottotitolo principale della pagina.

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

Esempio:

```php
<h2 class="sottotitolo"><?= $this->getSottotitolo(); ?></h2>
```
