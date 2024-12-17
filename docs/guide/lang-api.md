---
title: Language
description: API per le impostazioni delle lingue di Cube.
---

# API per le lingue

## `diciture __()`

Con il parametro `$slug` è possibile definire la dicitura da utilizzare per le varie traduzioni del sito.

```php
/**
* @param $slug
* @param string $id_lingua
* @return string
**/
public function __($slug, $id_lingua="") {
  ...
}
```

## `lingua_default()`

Restituisce l'`id_lingua` della lingua di default del sito.

```php
/**
* @param string $id_sito
* @param string $id_struttura
* @return mixed
**/
public function lingua_default($id_sito="", $id_struttura="") {
  ...
}
```

## `trova_lingua()`

Tramite `$id_lingua` e `$tipo_lingua` è possibile cercare la lingua del sito.

```php
/**
* @param $id_lingua
* @param string $tipo_lingua
* @return mixed
**/
public function trova_lingua($id_lingua, $tipo_lingua="") {
  ...
}
```

I valori ammessi per $tipo_lingua sono elencati su `$tipo_lingua`.
