---
title: Menu API
description: API per la gestione dei menu su Cube.
---

# Menu API

## ID menu

- **`getIdMenu()`**

In base al parametro `$menu` è possibile sapere l'`id_menu` tra quelli che sono impostati nel proprio progetto.

```php
/**
* @param $menu
* @param string $id_struttura
* @return int
**/
public function getIdMenu($menu, $id_struttura="") {
  ...
}
```

Esempio:

```php
echo $cube->getIdMenu('Menu Top');
// '123123' -> esempio di id_menu
```

## Info menu

- **`getInfoMenu()`**

Questa funzione permette di conoscere alcune informazione del menu in base all'`$id_menu`. La funzione restiuiscie un valore alla volta che è possibile impostare tramite il paramentro `$campo`.

```php
/**
* @param int $id_menu
* @param string $campo
* @return array
**/
public function getInfoMenu($id_menu, $campo="menu") {
  ...
}
```

## Menu

- **`getMenu()`**

Restituisce la struttura completa di un menu in formato array multidimensionale. La funzione recupera tutte le voci del menu con i relativi sotto-menu (figli) in modo ricorsivo, permettendo di costruire menu di navigazione con più livelli di profondità.

```php
/**
* @param int $id_menu
* @param int $parent_id
* @param string $opz
* @param string $filtro
* @param int $visibile
* @return array
**/
public function getMenu($id_menu, $parent_id=0, $opz="", $filtro="", $visibile=1) {
  ...
}
```

| Parametro  | Tipo          | Default | Valori ammessi o breve descrizione                                        |
| ---------- | ------------- | ------- | ------------------------------------------------------------------------- |
| $id_menu   | int \| string | `null`  | ID del menu da recuperare.                                                |
| $parent_id | int           | `0`     | ID della voce padre per recuperare solo i figli (0 per il primo livello). |
| $opz       | string        | `null`  | Opzioni aggiuntive per la query.                                          |
| $filtro    | string        | `null`  | Condizioni WHERE personalizzate per filtrare le voci.                     |
| $visibile  | int           | `1`     | Se `1` mostra solo voci visibili, se `0` mostra tutte le voci.            |

Ogni voce del menu restituita contiene:

- `id_menu_voci`: ID della voce di menu
- `testo_link`: Testo del link da visualizzare
- `icona`: Icona associata alla voce (se presente)
- `link`: URL della pagina
- `id_pagina`: ID della pagina collegata
- `tipo`: Tipo di voce (0=pagina, 1=link esterno, 2=pagina con testo personalizzato)
- `active`: Indica se la voce è attiva nella navigazione corrente
- `parent_id`: ID della voce padre
- `depth`: Livello di profondità della voce
- `target`: Target del link (\_self, \_blank, etc.)
- `id_struttura`: ID della struttura associata
- `figli`: Array contenente le voci figlie

Esempio:

```php
// Recupera il menu principale
$menu_principale = $cube->getMenu($cube->getIdMenu('Menu Top'));

// Recupera solo le voci figlie di una voce specifica
$sottomenu = $cube->getMenu('Menu Top', 12345);

// Recupera solo voci visibili con filtro personalizzato
$menu_filtrato = $cube->getMenu($id_menu, 0, "", "tipo = 0", 1);
```

## Menu secondario <Badge type="warning" text="Da completare" />

- **`getMenuSecondario()`**

```php
/**
* @param int $id_menu
* @param int $opz
* @param int $visibile
* @return array
**/
public function getMenuSecondario($id_menu="", $opz=1, $visibile=1) {
  ...
}
```

## Menu secondario terzo livello <Badge type="warning" text="Da completare" />

- **`getMenuSecondarioTerzoLivello()`**

```php
/**
* @param int $id_menu
* @param int $id_menu_voci
* @return array
**/
public function getMenuSecondarioTerzoLivello($id_menu="", $id_menu_voci="") {
  ...
}
```

## Menu landing <Badge type="warning" text="Da completare" />

- **`getMenuLanding()`**

```php
/**
* @param int $id_struttura
* @return array
**/
public function getMenuLanding($id_struttura) {
  ...
}
```
