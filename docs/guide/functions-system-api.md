---
title: Funzioni di sistema
description: API utili di Cube.
---

# Funzioni di sistema

## `cube_favico()`

Restiusce la favicon preimpostata nel sito. Di default la funzione viene utilizzata all'interno di <a href="#cube-head">`cube_head()`</a>.

```php
/**
* @return html
**/
function cube_favico() {
  ...
}
```

## `cube_footer()`

Include il banner dei cookie e tutti gli script necessari e funzionali, come Google Tag Manager o altri script personalizzati. È essenziale posizionare questa funzione alla fine di ogni progetto per garantire il corretto funzionamento dei componenti.

```php
/**
* @return html
**/
function cube_footer() {
  ...
}
```

## `cube_head()`

Stampa i metadati fondamentali per l'indicizzazione del sito. È essenziale inserire questa funzione all'interno del tag `<head>` del documento HTML.

```php
/**
* @return html
**/
function cube_head() {
  ...
}
```

## `cube_global_parts()`

Consente di definire componenti globali per l'uso su più progetti. Per definire componenti locali, consulta <a href="#cube-parts">`cube_parts()`</a>.

```php
/**
* @param $file
* @param array $variables
* @param boolean $print
* @return false|component
**/
function cube_global_parts($file, $variables = array(), $print = true) {
  ...
}
```

## `cube_parts()`

Stampa il contenuto di un file `.php` come componente.

```php
/**
* @param $file
* @param array $variables
* @param boolean $print
* @return false|component
**/
function cube_parts($file, $variables = array(), $print = true) {
  ...
}
```

Il parametro predefinito `$print` è impostato su `true`, quindi non è necessario utilizzare `echo` o `<?= ?>` per visualizzare il componente. E' sufficiente definire il componente nel seguente modo:

```php
// Metodo corretto
<?php $this->cube_parts('components.my-component'); ?> // [!code ++]

// Metodo sbagliato
<?= $this->cube_parts('components.my-component'); ?> // [!code error]
```

## `cube_theme_roller()`

Questa funzione consente di includere le impostazioni di stile per il tuo progetto tramite un file `settings.json`.

```php
/**
* @param bool $opz
* @param string $id_sito
* @return string[]
**/
function cube_parts($opz = false, $id_sito) {
  ...
}
```
