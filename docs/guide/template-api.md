---
title: Template API
description: API per le configurazioni del template di Cube.
---

# Template API

## `ajax_set()`

Permette di risettare i parametri della struttura.

```php
/**
* @param $id_sito
* @param $id_pagina
* @param $id_lingua
* @param $id_sito_
* @param $sigla_lingua
* @param $tipo_booking
* @param $id_struttura
**/
public function ajax_set($id_sito, $id_pagina, $id_lingua, $id_sito_, $sigla_lingua, $tipo_booking, $id_struttura) {
  ...
}
```

## `banner_cookie_v1()` <Badge type="danger" text="deprecata" />

Restitusci la prima versione del banner cookies idel sito.

```php
/**
* @param string $style
* @param string $link_txt
* @param string $tipo
* @param string $pulsante
* @return html
**/
public function banner_cookie_v1($style="divascookies_style_dark_top", $link_txt="", $tipo="esteso", $pulsante="") {
  ...
}
```

## `banner_cookie_v2()`

Restitusci la seconda versione del banner cookies del sito.

```php
/**
* @return html:script
**/
public function banner_cookie_v2() {
  ...
}
```

## `banner_cookie_new_v3()` <Badge type="tip" text="default" />

Restitusci la terza versione del banner cookies del sito.

```php
/**
* @return html:script
**/
public function banner_cookie_new_v3() {
  ...
}
```

## `fnBannerCookie()`

Restitusci la prima o la seconda versione del banner cookies in base alle impostazioni del sito.

```php
/**
* @return function
**/
public function fnBannerCookie() {
  ...
}
```

## `getIDStruttura()`

In base al parametro `$id_sito` restiusce l'`id_struttura` desiderata.

```php
/**
* @param string $id_sito
* @return mixed
**/
public function getIDStruttura($id_sito="") {
  ...
}
```

## `getListaStrutture()`

Questa funzione permette di recuperare un elenco di strutture in base al parametro `$id_sito` fornito. È possibile specificare i campi da recuperare utilizzando l'array `$campi`, applicare filtri utilizzando gli array `$filtro` e `$valorefiltro`, specificare un raggruppamento con `$groupBy`, e ordinare i risultati con `$orderBy`.

```php
/**
* @param array $campi
* @param array $filtro
* @param array $valorefiltro
* @param string $groupBy
* @param string $orderBy
* @param string $id_sito
* @return mixed
**/
public function getListaStrutture($campi = [], $filtro = [], $valorefiltro = [], $groupBy="", $orderBy="", $id_sito="") {
  ...
}
```

## `info_sito()`

In base al parametro `$campo` permette di accedere alle impostazioni del sito.

```php
/**
* @param $campo
* @param string $id_sito
* @return mixed
**/
public function info_sito($campo, $id_sito="") {
  ...
}
```

### `$campo`

- Tipo: `String`
- Default: `null`

Valori ammessi:

- `allowlinker`
- `brand`
- `cache`
- `composer`
- `cookie_banner`
- `dominio`
- `estensione`
- `google_analytics`
- `id_progetto`
- `id_sito`
- `maintenance`
- `migrate`
- `mostra_ricerca`
- `multidomain`
- `online`
- `preset_adulti`
- `preset_bambini`
- `preset_camere`
- `preset_notti`
- `recaptcha_secret_key`
- `recaptcha_site_key`
- `sito`
- `solo_pressroom`
- `templates`
- `tipo`
- `tipo_booking`

## `is_group()`

Consente di capire se la struttura è un gruppo o no.

```php
/**
* @return boolean
**/
public function is_group() {
  ...
}
```

## `link_group()`

Restituisce l'url della home page del gruppo.

```php
/**
* @return string
**/
public function link_group() {
  ...
}
```

## `link_to()`

Consente tramite il paramentro `$struttura` di ottenere il link della home page di una determinata struttura.

```php
/**
* @param $struttura
* @return string
**/
public function link_to($struttura) {
  ...
}
```

## `numero_strutture()`

Tramite il paramentro `$id_sito` permette capire quante strutture sono presente all'interno del gruppo.

```php
/**
* @param $id_sito
* @return mixed
**/
public function numero_strutture($id_sito) {
  ...
}
```
