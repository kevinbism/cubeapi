---
title: API Pagina
description: API per le pagine di Cube.
---

# API Pagina

Questa sezione descrive le funzioni disponibili per gestire le pagine su Cube. Include metodi per ottenere informazioni sui moduli, link delle pagine, modelli e variabili di pagina.

## Breadcrumb

- **`getBreadCrumb()`**

Genera e restituisce il breadcrumb (percorso di navigazione) della pagina corrente sotto forma di lista HTML non ordinata. La funzione ricostruisce il percorso completo dalla pagina corrente fino alla home page, basandosi sulla struttura del menu di navigazione. Il breadcrumb viene visualizzato solo se il percorso ha più di un livello di profondità.

```php
/**
* @param string $classe
* @param string $classe_li
* @param boolean $aos
* @param string $classe_a
* @return array
**/
public function getBreadCrumb($classe="breadcrumb", $classe_li="", $aos=false, $classe_a="") {
  ...
}
```

| Parametro  | Tipo    | Default      | Valori ammessi o breve descrizione                                   |
| ---------- | ------- | ------------ | -------------------------------------------------------------------- |
| $classe    | string  | `breadcrumb` | Classe CSS da applicare all'elemento `<ul>` contenitore.             |
| $classe_li | string  | `""`         | Classe CSS da applicare agli elementi `<li>` del breadcrumb.         |
| $aos       | boolean | `false`      | Se `true` aggiunge attributi AOS (Animate On Scroll) al contenitore. |
| $classe_a  | string  | `""`         | Classe CSS da applicare agli elementi `<a>` (link) del breadcrumb.   |

La funzione analizza la struttura del menu per ricostruire il percorso:

- Recupera tutti i livelli padre della pagina corrente
- Inverte l'ordine per mostrare il percorso dalla home alla pagina corrente
- Genera automaticamente i link per ogni livello del percorso
- Gestisce diversi tipi di voci di menu (pagine, link esterni, pagine con testo personalizzato)
- Supporta hook personalizzati per modificare il comportamento

La funzione restituisce HTML nel seguente formato:

```html
<ul class="breadcrumb" data-aos="fade-up" data-aos-duration="1500">
  <li><a href="/home">Home</a></li>
  <li><a href="/camere">Camere</a></li>
  <li><a href="/suite">Suite</a></li>
</ul>
```

Esempio:

```php
// Breadcrumb base con classi predefinite
echo $cube->getBreadCrumb();

// Breadcrumb con classi personalizzate
echo $cube->getBreadCrumb('my-breadcrumb', 'breadcrumb-item', false, 'breadcrumb-link');

// Breadcrumb con animazione AOS
echo $cube->getBreadCrumb('breadcrumb', 'nav-item', true, 'nav-link');
```

## ID Home

- **`getIdHome()`**

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

## ID modulo

- **`getIdModulo()`**

Tramite il parametro `$modulo`, che in questo caso corrisponde al nome di un modulo su Cube, è possibile accedere all'`id_modulo`.

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

## Info pagina

- **`getInfoPagina()`**

Questa funzione restituisce informazione della pagina in base al parametro `$campo` e all'`$id_pagina` passato.

```php
/**
* @param string $campo
* @param string $id_pagina
* @return string
**/
public function getInfoPagina($campo, $id_pagina="") {
  ...
}
```

| Parametro  | Tipo   | Default            | Valori ammessi o breve descrizione                                                                                                                                                                                                                                                                                                                          |
| ---------- | ------ | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $campo     | string | `null`             | `'id_sito'` `'id_pagina'` `'id_lingua'` `'sigla_lingua'` `'locale'` `'lingua'` `'strutturaAttiva'` `'is404'` `'lingua_2'` `'id_struttura'` `'id_modello'` `'id_composizione'` `'sub_classe'` `'id_categoria'` `'nome_struttura'` `'padre'` `'modello'` `'tipo_booking'` `'struttura'` `'id_menu_voci'` `'parent_id'` `'depth'` `'menu_top'` `'menu_bottom'` |
| $id_pagina | string | `$cube->id_pagina` | ID della pagina. Se vuoto utilizza l'ID della pagina corrente.                                                                                                                                                                                                                                                                                              |

## Link Home

- **`getLinkHome()`**

Restituisce l'URL della home page del sito. La funzione cerca automaticamente la pagina con URL "index" e ne restituisce il link completo. Se non viene specificata una lingua, utilizza quella di default del sito. Il parametro `$absolute` permette di ottenere l'URL completo comprensivo di dominio.

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

| Parametro     | Tipo   | Default               | Valori ammessi o breve descrizione                                        |
| ------------- | ------ | --------------------- | ------------------------------------------------------------------------- |
| $id_lingua    | string | `$this->id_lingua`    | ID della lingua desiderata. Se vuoto utilizza l'ID della lingua corrente. |
| $id_struttura | string | `$this->id_struttura` | ID della struttura. Se vuoto utilizza l'ID della struttura corrente.      |
| $id_sito      | string | `$this->id_sito`      | ID del sito. Se vuoto utilizza l'ID del sito corrente.                    |
| $absolute     | int    | `0`                   | `0` per URL relativo, `1` per URL assoluto con dominio completo.          |

Esempio:

```php
// URL relativo della home page
$linkHome = $cube->getLinkHome();
// return -> "/index" o "/"

// URL assoluto della home page
$linkHomeAssoluto = $cube->getLinkHome("", "", "", 1);
// return -> "https://esempio.com/" o "https://esempio.com/index"

// Home page in lingua specifica
$linkHomeEn = $cube->getLinkHome("2"); // dove 2 è l'ID della lingua inglese
// return -> "/en" o "/en/index"
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

## Link pagina <Badge type="warning" text="Da completare" />

- **`getLinkPagina()`**

Restituisce il link in base all'`$id_pagina` passato.

```php
/**
* @param int $id_pagina
* @param string $id_lingua
* @return string
**/
public function getLinkPagina($id_pagina="", $id_lingua="") {
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

## Modulo <Badge type="warning" text="Da completare" />

- **`getModulo()`**

```php
/**
* @param string $label_modulo
* @param string $id_rel
* @param int $id_lingua
* @return array
**/
public function getModulo($label_modulo="", $id_rel="", $id_lingua="") {
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

## Trova ancora <Badge type="warning" text="Da completare" />

- **`trovaAncora()`**

```php
/**
* @param string $nome ancora
* @param int $id_lingua
* @param int $id_struttura
* @return string
**/
public function trovaAncora($nome_ancora, $id_lingua="", $id_struttura="") {
  ...
}
```

## Trova ancora ID pagina <Badge type="warning" text="Da completare" />

- **`trovaAncoraIdPagina()`**

```php
/**
* @param string $nome ancora
* @param int $id_lingua
* @param int $id_struttura
* @return int
**/
public function trovaAncoraIdPagina($nome_ancora, $id_lingua="", $id_struttura="") {
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
