---
title: Utili da sapere
description: API utili di Cube.
---

# Utili da sapere

## Impostazione sito

- **`getImpostazione()`**

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

## Impostazione template

- **`getImpostazioneTemplate()`**

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

## Path

- **`getPath()`**

Restituisce un tipo di **percorso** in base al parametro impostato.

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

| Parametro | Tipo   | Default | Valori ammessi o breve descrizione                                                                                                                                                                               |
| --------- | ------ | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $opz      | string | `root`  | `'img'` `'menu'` `'absolute'` `'preview'` `'libraries'` `'video'` `'public'`                                                                                                                                     |
| $id_sito  | string | `null`  | Se `$id_sito` non è impostato, viene utilizzato automaticamente l'ID della struttura attuale.                                                                                                                    |
| $forceCDN | number | `0`     | Utilizza il percorso della CDN. Funziona solo per il parametro `img \| video` e se il sito non ha una CDN attiva, altrimenti di default userà questo percorso anche quando il parametro rimane impostato su `0`. |

```php [Risultati in base al parametro $opz]
$cube->getPath('img'); // -> /images/
$cube->getPath('img', $cube->id_sito, 1); // -> https://cdn.blastness.biz/media/id_sito/
$cube->getPath('menu'); // -> /
$cube->getPath('absolute'); // -> http://dominiohotel.com/templates/nome_template
$cube->getPath('preview'); // -> http://dominiohotel.com/
$cube->getPath('libraries'); // -> https://cdn.blastness.biz/assets/libraries/
$cube->getPath('video'); // -> /video/
$cube->getPath('video', $cube->id_sito, 1); // -> https://cdn.blastness.biz/video/id_sito/
$cube->getPath('public'); // -> /templates/nome_template/public
$cube->getPath(); // -> /templates/nome_template
```
