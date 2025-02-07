---
title: Template API
description: API per le configurazioni del template di Cube.
---

# Template API

## Banner cookie v1 <Badge type="danger" text="deprecata" />

- **`banner_cookie_v1()`**

Restitusci la prima versione del banner cookies di Cube.

```php
/**
* @param string $style
* @param string $link_txt
* @param string $tipo
* @param string $pulsante
* @return html
**/
public function banner_cookie_v1($style="divascookies_style_dark_top", $link_txt="", $tipo="esteso", $pulsante="") {
  ...
}
```

## Banner cookie v2

- **`banner_cookie_v2()`**

Restitusci la seconda versione del banner cookies di Cube.

```php
/**
* @return html:script
**/
public function banner_cookie_v2() {
  ...
}
```

## Banner cookie v3 <Badge type="info" text="default" />

- **`banner_cookie_new_v3()`**

Restitusci la terza versione del banner cookies di Cube.

```php
/**
* @return html:script
**/
public function banner_cookie_new_v3() {
  ...
}
```

## ID struttura

- **`getIDStruttura()`**

Restituisce l'id_struttura corrispondente al valore del parametro `$id_sito`.<br>
Se `$id_sito` non è impostato, viene utilizzato automaticamente l'ID della struttura attuale.

```php
/**
* @param string $id_sito
* @return mixed
**/
public function getIDStruttura($id_sito="") {
  ...
}
```

## Lista strutture

- **`getListaStrutture()`**

Questa funzione permette di recuperare l'elenco delle strutture in base al parametro `$id_sito` fornito. È possibile specificare i campi da recuperare utilizzando l'array `$campi`, applicare filtri utilizzando gli array `$filtro` e `$valorefiltro`, specificare un raggruppamento con `$groupBy`, e ordinare i risultati con `$orderBy`.

```php
/**
* @param array $campi
* @param array $filtro
* @param array $valorefiltro
* @param string $groupBy
* @param string $orderBy
* @param string $id_sito
* @return mixed
**/
public function getListaStrutture($campi = [], $filtro = [], $valorefiltro = [], $groupBy="", $orderBy="", $id_sito="") {
  ...
}
```

| Parametro     | Tipo   | Default | Valori ammessi o breve descrizione                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------- | ------ | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $campi        | array  | `[]`    | `'id_struttura'` `'nome_struttura'` `'indirizzo'` `'telefono'` `'attivo'` `'mobile'` `'fax'` `'email'` `'partita_iva'` `'mostra_nel_qr'` `'google_map'` `'localita'` `'caratteristica'` `'social_fb'` `'social_twitter'` `'social_google'` `'social_istagram'` `'social_youtube'` `'social_tripadvisor'` `'social_whatsapp'` `'social_linkedin'` `'booking_domain'` `'id_gruppo'` `'id_albergo'` `'id_stile'` `'dc_gruppo'` `'dc'` `'id_albergo_servizi'` `'id_stile_servizi'` `'dc_servizi'` `'id_mailing'` `'tabella_mailing'` `'action_mailing'` `'club_id_mailing'` `'club_tabella_mailing'` `'club_action_mailing'` `'club_codice_sconto'` `'shop_id'` |
| $filtro       | array  | `[]`    | Array usato per filtrare il risultato della query. `$filtro` deve contenere valori corrispondenti a `$campi` (esempio: `['caratteristica', 'attivo', 'id_gruppo']`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| $valorefiltro | array  | `[]`    | Array usato per filtrare il risultato della query. `$valorefiltro` deve contenere valori corrispondenti alle colonne specificate in `$filtro`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| $groupBy      | string | `null`  | Specifica il valore per raggruppare i risultati. Quando trova un gruppo restituisce sempre il primo valore, mentre gli altri valori del gruppo vengono esclusi dalla query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| $orderBy      | string | `null`  | Specifica l'ordinamento dei risultati. Puoi includere la direzione `ASC`/`DESC` (es: `'nome_struttura ASC'`, `'id_struttura DESC'`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| $id_sito      | string | `null`  | Se `$id_sito` non è impostato, viene utilizzato automaticamente l'ID della struttura attuale.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

## Info sito

- **`info_sito()`**

In base al parametro `$campo` permette di accedere alle impostazioni del sito.

```php
/**
* @param $campo
* @param string $id_sito
* @return mixed
**/
public function info_sito($campo, $id_sito="") {
  ...
}
```

| Parametro | Tipo   | Default | Valori ammessi o breve descrizione                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --------- | ------ | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $campo    | string | `null`  | `'id_sito'` `'id_progetto'` `'maintenance'` `'cache'` `'migrate'` `'tipo'` `'sito'` `'brand'` `'dominio'` `'google_analytics'` `'allowlinker'` `'templates'` `'estensione'` `'tipo_booking'` `'recaptcha_site_key'` `'recaptcha_secret_key'` `'online'` `'composer'` `'assistente_prenotazione'` `'formati_img'` `'var_routing'` `'solo_pressroom'` `'mostra_ricerca'` `'multidomain'` `'impostazioni_template'` `'preset_notti'` `'preset_camere'` `'preset_adulti'` `'preset_bambini'` `'cookie_banner'` `'script_head'` `'google_map_key'` `'auto_include'` `'aws_cdn'` `'genera_altri_formati'` `'sito_offline'` `'data_analisi_mobile'` `'data_analisi_desktop'` `'analisi_mobile'` `'analisi_desktop'` `'disable_style_text_direction'` `'funzionalita'` `'id_duplica'` |
| $id_sito  | string | `null`  | Se `$id_sito` non è impostato, viene utilizzato automaticamente l'ID della struttura attuale.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

## `is_group()`

Consente di capire se la struttura è un gruppo o no.

```php
/**
* @return boolean
**/
public function is_group() {
  ...
}
```

## `link_group()`

Restituisce l'url della home page del gruppo.

```php
/**
* @return string
**/
public function link_group() {
  ...
}
```

## `link_to()`

Consente tramite il paramentro `$struttura` di ottenere il link della home page di una determinata struttura.

```php
/**
* @param $struttura
* @return string
**/
public function link_to($struttura) {
  ...
}
```

## `numero_strutture()`

Tramite il paramentro `$id_sito` permette capire quante strutture sono presente all'interno del gruppo.

```php
/**
* @param $id_sito
* @return mixed
**/
public function numero_strutture($id_sito) {
  ...
}
```
