---
title: Language
description: API per le impostazioni delle lingue di Cube.
---

# API per le lingue

Questa sezione descrive le funzioni disponibili per gestire le impostazioni delle lingue su Cube. Include metodi per ottenere traduzioni, la lingua di default e cercare lingue specifiche.

## Diciture

- **`__()`**

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

Esempio:

```php
<a class="link" href="#"><?= $cube->__('dicitura-scopri'); ?></a>
```

## Lingua default

- **`lingua_default()`**

Restituisce l'`id_lingua` di default del sito. Utile per recuperari moduli, articoli o press nella lingua di default della struttura.

```php
/**
* @param string $id_sito
* @param string $id_struttura
* @return int
**/
public function lingua_default($id_sito="", $id_struttura="") {
  ...
}
```

Esempio:

```php
// In questo modo verranno caricati solo gli articoli della lingua di default
$articoli = $cube->getModulo('Articoli', $cube->lingua_default());
```

## Menu lingue

- **`getMenuLingue()`**

Restituisce un array contenente tutte le lingue disponibili per il sito, utilizzato tipicamente per generare un menu di selezione lingue. Il parametro `$notForceUrl` permette di controllare se forzare o meno la generazione degli URL per ogni lingua.

```php
/**
* @param boolean $notForceUrl
* @return array
**/
public function getMenuLingue($notForceUrl=false) {
  ...
}
```

| Parametro    | Tipo    | Default | Valori ammessi o breve descrizione                             |
| ------------ | ------- | ------- | -------------------------------------------------------------- |
| $notForceUrl | boolean | `false` | Se `true`, non forza la generazione degli URL per ogni lingua. |

Esempio:

```php
// Recupera tutte le lingue disponibili per creare un menu
$lingue_menu = $cube->getMenuLingue();

// Genera il menu delle lingue
foreach($lingue_menu as $lingua) {
    echo '<a href="'.$lingua['link'].'">'.$lingua['sigla'].'</a>';
}

// Di seguito un esempio dell'array che trovate su $lingue_menu
Array (
  [0] => Array (
    [id_lingua] => 2
    [link] => /
    [lingua] => Italiano
    [sigla] => ita
    [sigla_2_caratteri] => it
    [locale] => it_IT
    [ordine] => 1
    [current] => 1
  )

  [1] => Array (
    [id_lingua] => 3
    [link] => /en/index
    [lingua] => English
    [sigla] => eng
    [sigla_2_caratteri] => en
    [locale] => en_US
    [ordine] => 2
    [current] =>
  )
)
```

## Trova lingua

- **`trova_lingua()`**

Restituisce la lingua di navigazione in base a `$id_lingua` e `$tipo_lingua`.

```php
/**
* @param int $id_lingua
* @param string $tipo_lingua
* @return string
**/
public function trova_lingua($id_lingua, $tipo_lingua="") {
  ...
}
```

| Parametro    | Tipo   | Default            | Valori ammessi o breve descrizione                                               |
| ------------ | ------ | ------------------ | -------------------------------------------------------------------------------- |
| $id_lingua   | number | `$cube->id_lingua` | Cuando non viene impostato usa la lingua di navigazione del sito.                |
| $tipo_lingua | string | `sigla`            | `'sigla'` `'2_caratteri'` `'sigla_2_caratteri'` `'esteso'` `'lingua'` `'locale'` |

Esempio di output per ogni tipologia:

```json
{
  "sigla": "ita",
  "2_caratteri": "it",
  "sigla_2_caratteri": "it",
  "esteso": "Italiano",
  "lingua": "Italiano",
  "locale": "it_IT"
}
```
