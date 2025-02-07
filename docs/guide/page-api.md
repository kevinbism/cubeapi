---
title: API Pagina
description: API per le pagine di Cube.
---

# API Pagina

Questa sezione descrive le funzioni disponibili per gestire le pagine su Cube. Include metodi per ottenere informazioni sui moduli, link delle pagine, modelli e variabili di pagina.

## ID modulo

- **`getIdModulo()`**

Tramite il parametro `$modulo`, che in questo caso corrisponde al nome di un modulo su Cube, è possibile richiedere l'`id_modulo`.

```php
/**
* @param string $modulo
* @return mixed
**/
public function getIdModulo($modulo) {
  ...
}
```

Esempio:

```php
$idModuloCamere = $cube->getIdModulo('Modulo camere');
// return -> '12345' corrispondente all'id_modulo camere
```

## Info padre

- **`getInfoPadre()`**

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

Esempio:

```text
Home
Camere/
├── Monolocale
├── Suite
└── Junior suite
Offerte
Gallery
```

```php{5-9} [Dentro la pagina Suite eseguo la funzione]
$infoPadre = $cube->getIndoPadre();

// $infoPadre conterrà le seguenti informazioni
$infoPadre = [
  "testo_link" => "Camere",
  "url" => "https://cube.blastdemo.com/camere",
  "titolo" => "Camere"
]
```

## Link padre

- **`getLinkPadre()`**

Se la pagina corrente è una pagina figlia restituisce il link della pagina padre.

```php
/**
* @return string
**/
public function getLinkPadre() {
  ...
}
```

## Link pagina gallery

- **`getLinkPaginaGallery()`**

Restituisce il link della pagina **gallery** del sito.

```php
/**
* @param string $modello
* @return array|string
**/
public function getLinkPaginaGallery($modello = 'Gallery') {
  ...
}
```

## Link pagina modello

- **`getLinkPaginaModello()`**

Questa funzione restituisce gli URL delle pagine in base al modello scelto. Se vengono trovate più pagine, riceverai un array di URL, mentre se viene trovata una sola pagina riceverai direttamente l'URL come stringa. Nel caso in cui non specifichi un modello, riceverai automaticamente l'URL della pagina delle offerte.

```php
/**
* @param string $modello
* @return array|string
**/
public function getLinkPaginaModello($modello = 'Offerte') {
  ...
}
```

## Link pagina offerte

- **`getLinkPaginaOfferte()`**

Restituisce il link della pagina **offerte** del sito.

```php
/**
* @param string $modello
* @return array|string
**/
public function getLinkPaginaOfferte($modello = 'Offerte') {
  ...
}
```

## Modello

- **`getModello()`**

Restituisce l'`id_modello` richiesto.

```php
/**
* @param $modello
* @return mixed
**/
public function getModello($modello) {
  ...
}
```

## Pagine modello

- **`getPagineModello()`**

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

## Info modello

- **`info_modello()`**

In base al parametro `$campo` e `$id_modello` permette di accedere alle informazioni del modello.

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

| Parametro | Tipo   | Default | Valori ammessi o breve descrizione                                                                             |
| --------- | ------ | ------- | -------------------------------------------------------------------------------------------------------------- |
| $campo    | string | `null`  | `'id_duplica'` `'id_modello'` `'id_sito'` `'modello'` `'nascondi_info'` `'ordine'` `'sub_classe'` `'visibile'` |

## Pagine figli

- **`getPagineFigli()`**

Se sono presenti pagine di secondo livello restituisce un array con l'elenco delle pagine e altre informazioni.
:::info NOTA BENE
È indispensabile inserire l'`$id_menu` altrimenti non verrà resituito nulla e il sito andrà in errore.
:::

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

Esempio:

```text
Home
Camere/
├── Monolocale
└── Junior suite
Offerte
Gallery
```

```php [Dentro la pagina Camere eseguo la funzione]
// In questo caso l'$id_menu specificato è il 'Menu Top'
$pagineFigli = $cube->getPagineFigli('Menu Top');
print_r($pagineFigli);

// Esempio output:
Array(
  [67482] => Array(
    [id_menu_voci] => 67482
    [testo_link] => Monolocale
    [icona] =>
    [link] => /monolocale
    [id_pagina] => 91546
    [tipo] => 0
    [active] =>
    [mostra_menu] =>
    [parent_id] => 67471
    [depth] => 1
    [target] => _self
    [id_struttura] => 2307
    [figli] => Array()
  )

  [67488] => Array(
    [id_menu_voci] => 67488
    [testo_link] => Junior suite
    [icona] =>
    [link] => /junior-suite
    [id_pagina] => 91563
    [tipo] => 0
    [active] =>
    [mostra_menu] =>
    [parent_id] => 67471
    [depth] => 1
    [target] => _self
    [id_struttura] => 2307
    [figli] => Array()
  )
)
```

## Variabili

- **`getVar()`**

Nella sezione _Aspetto -> Variabili_ su Cube puoi impostare variabili specifiche per la pagina o per la struttura. Per ottenere il valore di una variabile, utilizza la funzione `getVar()` passando come parametro lo `$slug` corrispondente alla variabile desiderata.

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

## Page URL

- **`get_page_url()`**

Restituisce l'url della pagina corrente.

```php
/**
* @return string
**/
public function get_page_url() {
  ...
}
```

## Landing testo

- **`lg_testo()`**

Restituisce un `div` con all'interno la stringa `|*testo*|` per poter stampare i contenuti inseriti su Landing Generator.

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
