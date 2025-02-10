---
title: Template API
description: API per le configurazioni del template di Cube.
---

# Template API

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

## Info struttura

- **`getInfoStruttura()`**

Questa funzione permette di accedere alle informazioni della struttura in base al parametro `$campo`.

```php
/**
* @param string $campo
* @param int $id_struttura
* @param string $opz
* @return string
**/
public function getInfoStruttura($campo, $id_struttura="", $opz="id_struttura") {
  ...
}
```

| Parametro     | Tipo   | Default               | Valori ammessi o breve descrizione                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------- | ------ | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $campo        | string | `null`                | `'id_struttura'` `'id_sito'` `'id_struttura_padre'` `'attivo'` `'nome_struttura'` `'interfaccia'` `'tipo'` `'indirizzo'` `'telefono'` `'mobile'` `'fax'` `'email'` `'partita_iva'` `'sito_web'` `'booking_domain'` `'id_stile'` `'id_albergo'` `'dc'` `'dc_gruppo'` `'id_gruppo'` `'id_mailing'` `'tabella_mailing'` `'action_mailing'` `'club_id_mailing'` `'club_tabella_mailing'` `'club_action_mailing'` `'club_codice_sconto'` `'google_map'` `'localita'` `'caratteristica'` `'id_stile_servizi'` `'id_albergo_servizi'` `'dc_servizi'` `'social_fb'` `'social_twitter'` `'social_google'` `'social_istagram'` `'social_youtube'` `'social_tripadvisor'` `'social_whatsapp'` `'social_linkedin'` `'mostra_nel_qr'` `'ordine'` `'gestione_offerte_gruppo'` `'visibility'` `'script'` `'shop_id'` `'id_duplica'` |
| $id_struttura | string | `$cube->id_struttura` | Quando questo parametro non viene specificato, in automatico imposta l'`id_stuttura` del progetto in cui si sta lavorando.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| $opz          | string | `id_struttura`        | È possibile scegliere l'impostazione dall'`id_struttura` oppure dall'`id_sito`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

## Lista strutture

- **`getListaStrutture()`**

Questa funzione permette di recuperare l'elenco delle strutture in base al parametro `$id_sito` fornito. Inoltre è possibile specificare i campi da recuperare utilizzando l'array `$campi`, applicare filtri utilizzando gli array `$filtro` e `$valorefiltro`, specificare un raggruppamento con `$groupBy`, e ordinare i risultati con `$orderBy`.

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

## Gruppo

- **`is_group()`**

Consente di capire se la struttura è un gruppo. Il valore di ritorno è `true` o `false`.

```php
/**
* @return boolean
**/
public function is_group() {
  ...
}
```

Esempio:

```php
if ($cube->is_group()) {
  // Codice quando la struttura è un gruppo.
}
```

## Link gruppo

- **`link_group()`**

Restituisce l'URL della home page del gruppo.

```php
/**
* @return string
**/
public function link_group() {
  ...
}
```

## Link to

- **`link_to()`**

Consente tramite il paramentro `$struttura` di ottenere il link della home page di una specifica struttura.

```php
/**
* @param $struttura
* @return string
**/
public function link_to($struttura) {
  ...
}
```

## Numero strutture

- **`numero_strutture()`**

Tramite il paramentro `$id_sito` è possibile sapere quante strutture sono presente all'interno del gruppo.

```php
/**
* @param $id_sito
* @return int
**/
public function numero_strutture($id_sito) {
  ...
}
```

In questo caso `$id_sito` non viene impostato automaticamente ma è possibile ottenere questo dato tramite la funzione `info_sito()`. Esempio:

```php
$numeroStrutture = $cube->numero_strutture($cube->info_sito('id_sito'));

// oppure tramite la proprietà $cube->id_sito

$numeroStrutture = $cube->numero_strutture($cube->id_sito);
```

## Strutture <Badge type="warning" text="Da completare" />

- **`getStrutture()`**

Consente di ricevere l'elenco delle strutture di un determinato sito.

```php
/**
* @param string $id_sito
* @return array
**/
public function getStrutture($id_sito="") {
  ...
}
```
