---
title: API Immagini
description: Include metodi per ottenere URL di immagini, loghi e anteprime, con opzioni per formati e configurazioni diverse.
---

# API Immagini

Questa documentazione descrive le funzioni disponibili per gestire le immagini su Cube. Include metodi per ottenere URL di immagini, loghi e anteprime, con opzioni per formati e configurazioni diverse.

## Immagine

- **`getImg()`**

Restituisce l'url dell'immagine richiesta.

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
<?php
// Utilizzando il modulo immagini di Cube.
$images = $cube->getModulo('Immagine');

foreach ($images as $image) :
?>
  <img class="immagine" src="<= $cube->getImg($image['files'], 'full', true); ?>">
<?php endforeach; ?>
```

## Immagine anteprima

- **`getImgAnteprima()`**

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
Non è possibile utilizzare questa funzione separatamente ma deve essere incorporata all'interno di `getImg()` o `getPicture()`. Ad esempio:

```php
$cube->getImg($cube->getImgAnteprima($img['files']));

// oppure

$cube->getPicture($cube->getImgAnteprima($img['files']), [...]);
```

:::

Esempio:

```php
<img
class="immagine"
src="<?= $cube->getImg($cube->getImgAnteprima($cube->id_pagina)); ?>"
>
```

## Immagine offerta

- **`getImgOfferta()`**

Questa funzione recupera l'URL dell'immagine associata a una specifica offerta, identificata tramite `$id_albergo` e `$id_prodotto`. Il parametro opzionale `$main` consente di specificare se deve essere restituita l'immagine principale dell'offerta. La funzione restituisce l'URL dell'immagine richiesta.

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

Esempio:

```php
<?php
// Utilizzando il modulo offerte di Cube.
$offers = $cms->getModulo("Offerte");

foreach ($offers as $offer) :
  $id_albergo = $offer['offerta_id_albergo'];
  $id_prodotto = $offer['offerta_id_prodotto'];
  $imgOfferta = $cube->getImgOfferta($id_albergo, $id_prodotto, 'main');
?>
  <img class="immagine-offerta" src="<?= $imgOfferta; ?>">
<?php endforeach; ?>
```

## Logo

- **`getLogo()`**

Questa funzione restituisce l'URL del logo in base al parametro `$file`.

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

Esempio:

```php
<img
class="logo"
src="<?= $cube->getLogo('logo', $cube->id_struttura, true); ?>"
>
```

## Logo picture

- **`getLogoP()`**

Restituisce il logo del sito strutturato nel tag HTML `picture`.

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
  'id_struttura' => '', // Se non impostato, il valore della struttura coincide con quello della struttura corrente
  'title' => '',
  'class' => '',
  'classImg' => '',
  'priority' => '', //default true
  'lazy' => '', //default true
  'width' => '',
  'height' => ''
]
```

I valori ammessi per `'file'` sono elencati nella tabella [Logo](#logo).

Esempio:

```php
<a href="#home" class="link-logo">
  <?= $cube->getLogoP([
    'file' => 'logo',
    'title' => 'Titolo logo',
    'class' => 'logo',
    'classImg' => 'logo-img',
    'priority' => true,
    'lazy' => true,
    'width' => 200,
    'height' => 200
  ]);
  ?>
</a>
```

Output html:

```html
<a href="#home" class="link-logo">
  <picture class="logo">
    <source
      srcset="https://cdn.blastness.biz/media/loghi/id_struttura/logo.webp"
      type="image/webp" />
    <img
      class="logo-img"
      width="200"
      height="200"
      src="https://cdn.blastness.biz/media/loghi/id_struttura/logo.png"
      title="Titolo logo" />
  </picture>
</a>
```

## Logo Webp

- **`getLogoWebp()`**

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
È possibile ottenere lo stesso formato direttamente dalla funzione [`getLogo()`](#logo).
:::

Esempio:

```php
<img
class="logo"
src="<?= $cube->getLogoWebp('logo', $cube->id_struttura); ?>"
>
```

## Picture

- **`getPicture()`**

Restituisce l'immagine strutturata nel tag HTML `picture`.

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

<h3><code>$opz</code></h3>

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

I valori ammessi per `'type'` sono elencati nella tabella [Immagine](#immagine).

Esempio:

```php
<?php
// Utilizzando il modulo immagini di Cube.
$images = $cube->getModulo('Immagine');

foreach ($images as $image) :
?>
<figure class="figure">
  <?= $cms->getPicture(
    $image['files'],
    [
      'type' => 'medium',
      'title' => 'Titolo immagine',
      'class' => 'picture',
      'classImg' => 'immagine',
      'priority' => true,
      'lazy' => true,
      'htmlToAppend' => '<p>Testo sotto immagine</p>',
      'data' => ['test' => 'ciao'],
      'mediaQuery' => [
        '(max-width:769px)' => 'vertical_mobile',
      ]
    ]
  );
  ?>
</figure>
<?php endforeach; ?>
```

Output html:

```html
<figure class="figure">
  <picture class="picture" data-test="ciao">
    <source
      srcset="https://cdn.blastness.biz/media/id_struttura/vertical_mobile/immagine.webp"
      media="(max-width:769px)"
      type="image/webp" />
    <img
      class="immagine"
      alt="Titolo immagine"
      title="Titolo immagine"
      src="https://cdn.blastness.biz/media/id_struttura/medium/immagine.jpg" />
    <p>Testo sotto immagine</p>
  </picture>
</figure>
```
