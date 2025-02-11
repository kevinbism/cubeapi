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

## Menu <Badge type="warning" text="Da completare" />

- **`getMenu()`**

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
