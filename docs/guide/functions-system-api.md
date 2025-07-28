---
title: Funzioni di sistema
description: API utili di Cube.
---

# Funzioni di sistema

## Cube favico

- **`cube_favico()`**

Restiusce una struttura HTML con la favicon preimpostata nel sito. Di default la funzione viene utilizzata all'interno di [`cube_head()`](#cube-head).

```php
/**
* @return html
**/
function cube_favico() {
  ...
}
```

## Cube footer

- **`cube_footer()`**

Include il banner dei cookie e tutti gli script necessari e funzionali, come Google Tag Manager o altri script personalizzati. È essenziale posizionare questa funzione alla fine di ogni progetto e prima della chiusura del tag `body` per garantire il corretto funzionamento.

```php
/**
* @return html
**/
function cube_footer() {
  ...
}
```

## Cube head

- **`cube_head()`**

Stampa tutti i metadati fondamentali per l'indicizzazione del sito. È essenziale inserire questa funzione all'interno del tag `<head>` del documento HTML.

```php
/**
* @return html
**/
function cube_head() {
  ...
}
```

## Cube global parts

- **`cube_global_parts()`**

Consente di definire componenti globali per l'uso su più progetti. Per definire componenti locali, consulta [`cube_parts()`](#cube-parts).

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

## Cube parts

- **`cube_parts()`**

Permette di includere un file PHP, selezionando dinamicamente il percorso in base alle impostazioni del sito e del template. Inoltre, permette di passare variabili, facilitando la creazione e la gestione di componenti.

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
$this->cube_parts('components.my-component'); // [!code ++]

// Metodo sbagliato
echo $this->cube_parts('components.my-component'); // [!code error]
```

Per qualche esempio pratico consulta la pagina [Componenti](/guide/components)
