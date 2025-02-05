---
title: API Immagini
description: Include metodi per ottenere URL di immagini, loghi e anteprime, con opzioni per formati e configurazioni diverse.
---

# API Immagini

Questa documentazione descrive le funzioni disponibili per gestire le immagini su Cube. Include metodi per ottenere URL di immagini, loghi e anteprime, con opzioni per formati e configurazioni diverse.

## Immagine

- **`getImg()`**

Restituisce l'url dell'immagine desiderata.

```php
/**
* @param string $file
* @param string $type
* @param boolean $returnWebP
* @return string
**/
function getImg($file, $type, $returnWebP = false) {
  ...
}
```

| Parametro   | Tipo    | Default | Valori ammessi o breve descrizione                                                                           |
| ----------- | ------- | ------- | ------------------------------------------------------------------------------------------------------------ |
| $file       | string  | `null`  | Specifica il modulo dal quale estrarre l'immagine.                                                           |
| $type       | string  | `full`  | `'thumbnail'` `'thumbnail_quad'` `'thumbnail_mobile'` `'full_moble'` `'vertical_mobile'` `'medium'` `'full'` |
| $returnWebP | boolean | `false` | Consente di generare l'immagine in formato `.webp` per un caricamento più rapido.                            |

Esempio:

```php
// Utilizzando un modulo immagini di Cube.
$images = $cube->getModulo('Immagine');

<?php foreach ($images as $image) : ?>
  <img class="immagine" src="<= $cube->getImg($image['files'], 'full', true); ?>">
<?php endforeach; ?>
```

## `getImgAnteprima()`

Restituisce l'url dell'immagine anteprima impostata.

```php
/**
* @param string $id_pagina
* @return string
**/
function getImgAnteprima($id_pagina) {
  ...
}
```

::: details Nota sull'utilizzo
Non è possibile utilizzare questa funzione separatamente; deve essere incorporata all'interno di `getImg()` o `getPicture()`. Ad esempio:

```php
$cube->getImg($cube->getImgAnteprima($img['files']));

// oppure

$cube->getPicture($cube->getImgAnteprima($img['files']), [...]);
```

:::

## `getImgOfferta()`

Questa funzione recupera l'URL dell'immagine associata a una specifica offerta, identificata tramite `$id_albergo` e $`id_prodotto`. Il parametro opzionale `$main` consente di specificare se deve essere restituita l'immagine principale dell'offerta. La funzione restituisce l'URL dell'immagine richiesta.

```php
/**
* @param $id_albergo
* @param $id_prodotto
* @param string $main
* @return string
**/
function getImgOfferta($id_albergo, $id_prodotto, $main) {
  ...
}
```

## `getLogo()`

Questa funzione restituisce l'URL del logo specificato dal parametro `$file`.

```php
/**
* @param string $file
* @param string $id_struttura
* @param boolean $forceWebp
* @return string
**/
function getLogo($file, $id_struttura, $forceWebp = false) {
  ...
}
```

| Parametro     | Tipo    | Default               | Valori ammessi o breve descrizione                                                                                                                                 |
| ------------- | ------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| $file         | string  | `logo`                | `'logo'` `'altlogo'` `'logofooter'` `'logowhite'` `'media'`                                                                                                        |
| $id_struttura | string  | `$this->id_struttura` | Se non impostato, il valore della struttura coincide con quello della struttura corrente. È possibile specificare una struttura diversa modificando questo valore. |
| $forceWebp    | boolean | `false`               | Consente di generare il logo in formato `.webp`.                                                                                                                   |

## `getLogoP()`

Restituisce il logo del sito all'interno della struttura HTML `picture`.

```php
/**
* @param array $opz
* @return html
**/
function getLogoP($opz=[]) {
  ...
}
```

<h3><code>$opz</code></h3>

- Tipo: `Array`
- Default: `[]`

Opzioni configurabili:

```php
[
  'file' => '',
  'id_struttura' => '',
  'title' => '',
  'class' => '',
  'classImg' => '',
  'priority' => '', //default true
  'lazy' => '', //default true
  'width' => '',
  'height' => ''
]
```

I valori ammessi per `file` sono elencati su [`$file`](#getlogo).

## `getLogoWebp()`

Restituisce l'url del logo in formato `.webp`.

```php
/**
* @param string $file
* @param string $id_struttura
* @return string
**/
function getLogoWebp($file="", $id_struttura="") {
  ...
}
```

:::tip INFO
È possibile ottenere lo stesso formato dalla funzione [`getLogo()`](#getlogo).
:::

## `getPicture()`

Restituisce l'immagine desiderata all'interno della struttura HTML `picture`.

```php
/**
* @param string $file
* @param array $opz
* @return html
**/
function getPicture($file, $opz=[]) {
  ...
}
```

### `$opz`

- Tipo: `Array`
- Default: `[]`

Opzioni configurabili:

```php
[
  'type' => '',
  'title' => '',
  'class' => '',
  'classImg' => '',
  'priority' => '', //default true
  'lazy' => '', //default true
  'htmlToAppend' => '',
  'data' => [],
  'mediaQuery' => []
]
```

I valori ammessi per `'type'` sono elencati su [`'$type'`](#getpicture).
