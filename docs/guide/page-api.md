---
title: API Pagina
description: API per le pagine di Cube.
---

# API Pagina

## `getIdModulo()`

Tramite la chiave `$modulo` consente di verificare l'`id_modulo` del modulo desiderato.

```php
/**
* @param string $modulo
* @return mixed
**/
public function getIdModulo($modulo) {
  ...
}
```

## `getInfoPadre()`

Se la pagina corrente è una pagina figlia restituisce il `testo_link`, `url` e `titolo` della pagina padre sotto forma di array.

```php
/**
* @param string $id_lingua
* @return array
**/
public function getInfoPadre($id_lingua="") {
  ...
}
```

## `getLinkPadre()`

Se la pagina corrente è una pagina figlia restituisce il link della pagina padre.

```php
/**
* @return string
**/
public function getLinkPadre() {
  ...
}
```

## `getLinkPaginaGallery()`

Di default restituisce il link della pagina gallery del sito.

```php
/**
* @param string $modello
* @return array|string
**/
public function getLinkPaginaGallery($modello = 'Gallery') {
  ...
}
```

## `getLinkPaginaModello()`

Restituisce un array delle pagine in base al modello inserito. Nel caso ci sia un solo valore nell'array restiusce una stringa. Se `$modello` non viene valorizzato di default restuisce la pagina delle offerte.

```php
/**
* @param string $modello
* @return array|string
**/
public function getLinkPaginaModello($modello = 'Offerte') {
  ...
}
```

## `getLinkPaginaOfferte()`

Di default restituisce il link della pagina offerte del sito.

```php
/**
* @param string $modello
* @return array|string
**/
public function getLinkPaginaOfferte($modello = 'Offerte') {
  ...
}
```

## `getModello()`

Restituisce l'`id_modello` del modello desiderato.

```php
/**
* @param $modello
* @return int
**/
public function getModello($modello) {
  ...
}
```

## `getPagineModello()`

Questa funzione restituisce un array contenente l'elenco delle pagine che utilizzano il modello specificato. Utilizzando il parametro `$link`, è possibile ottenere gli URL di tutte le pagine che utilizzano tale modello altrimenti l'array conterrà l'`id_pagina` come valore. Il parametro `$onlyActive` consente di filtrare solo le pagine attive.

```php
/**
* @param string $modello
* @param boolean $link
* @param boolean $onlyActive
* @return array
**/
public function getPagineModello($modello, $link=false, $onlyActive=false) {
  ...
}
```

## `info_modello()`

In base al parametro `$campo` permette di accedere alle informazioni del modello.

```php
/**
* @param $campo
* @param $id_modello
* @return mixed
**/
public function info_modello($campo, $id_modello) {
  ...
}
```

<h3><code>$campo</code></h3>

- Tipo: `String`
- Default: `null`

Valori ammessi:

- `id_duplica`
- `id_modello`
- `id_sito`
- `modello`
- `nascondi_info`
- `ordine`
- `sub_classe`
- `visibile`

## `getPagineFigli()`

Se sono presenti pagine di livello inferiore restituisce un array con l'elenco delle pagine.

```php
/**
* @param $id_menu
* @param string $id_pagina
* @return array|bool
**/
public function getPagineFigli($id_menu, $id_pagina='') {
  ...
}
```

## `getVar()`

Restituisce il valore impostato alla pagina o alla struttura di Cube.

```php
/**
* @param string $slug
* @param string $pagina_o_struttura
* @return string
**/
public function getVar($slug, $pagina_o_struttura='') {
  ...
}
```

## `get_page_url()`

Restituisce l'url della pagina corrente.

```php
/**
* @return string
**/
public function get_page_url() {
  ...
}
```

## `lg_testo()`

Restituisce un `div` con all'interno la stringa `|*testo*|` per poter stampare il contenuti settato da Landing Generator.

```php
/**
* @return html
**/
public function lg_testo() {
  ...
}
```

La funzione stampa il seguente codice html:

```html
<div class="div_lista_landing">|*testo*|</div>
```
