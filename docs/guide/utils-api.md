---
title: Utili da sapere
description: API utili di Cube.
---

# Utili da sapere

## `getIdHome()`

Restituisce l'`id_pagina` della home page.

```php
/**
* @param string $id_struttura
* @param string $id_lingua
* @return string
**/
public function getIdHome($id_struttura="", $id_lingua="") {
  ...
}
```

## `getImpostazione()`

Consente di recuperare il valore delle impostazioni relative al sito utilizzando il parametro `$impostazione`. È possibile specificare ulteriori criteri di ricerca per il sito e la struttura utilizzando i parametri `$id_sito` e `$id_struttura`.

```php
/**
* @param string $impostazione
* @param string $id_sito
* @param string $id_struttura
* @return mixed
**/
public function getImpostazione($impostazione, $id_sito="", $id_struttura="") {
  ...
}
```

## `getImpostazioneTemplate()`

Consente di recuperare il valore delle impostazioni relative al template mediante il parametro `$impostazione`.

```php
/**
* @param string $impostazione
* @return mixed
**/
public function getImpostazioneTemplate($impostazione) {
  ...
}
```

## `getLinkHome()`

Restituisce il link della home page del sito.

```php
/**
* @param string $id_lingua
* @param string $id_struttura
* @param string $id_sito
* @param int $absolute
* @return string
**/
public function getLinkHome($id_lingua="", $id_struttura="", $id_sito="", $absolute=0) {
  ...
}
```

## `getLinkHomeCS()`

:::warning
Chiedere riguardo il funzionamento.
:::

```php
/**
* @param string $id_sito
* @param string $id_lingua
* @return string
**/
public function getLinkHomeCS($id_sito, $id_lingua="") {
  ...
}
```

## `getPath()`

Restituisce il percorso in base al parametro impostato.

```php
/**
* @param string $opz
* @param string $id_sito
* @param int $forceCDN
* @return string
**/
public function getPath($opz="", $id_sito="", $forceCDN=0) {
  ...
}
```

<h3><code>$opz</code></h3>

- Type: `String`
- Default: `null`

Valori ammessi:

- `img`
- `menu`
- `preview`
- `absolute`
- `libraries`
- `video`
- `public`

## `grouppiStrutture()`

Restituisce un `array` delle strutture in base al parametro `$campo`. Il parametro `$campo` corrisponde all'`id_sito` del progetto.

:::danger ATTENZIONE
Se il parametro `$campo` non viene fornito la funzione non restituisce nulla.
:::

```php
/**
* @param string $campo
* @return array|void
**/
public function grouppiStrutture($campo) {
  ...
}
```

## `get_client_ip()`

Fornisce il client ip del sito.

```php
/**
* @return string
**/
public function get_client_ip() {
  ...
}
```
