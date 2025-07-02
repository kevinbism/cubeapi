# Booking Engine API

## Link Booking

- **`getLinkBooking()`**

Questa funzione genera l'URL del Booking Engine per una specifica struttura. Se non viene specificato l'`$id_struttura`, verrà utilizzata automaticamente la struttura corrente.
Tramite il parametro `$opz` è possibile personalizzare il comportamento:

- `'cancella_modifica'`: genera un link per cancellare o modificare una prenotazione esistente
- `'benvenuto'`: indirizza alla pagina di benvenuto del Booking Engine

La funzione supporta anche la pre-selezione di prodotti/offerte e configurazioni personalizzate come data di arrivo e lingua dell'interfaccia.

```php
/**
* @param string $opz
* @param int $id_struttura
* @param int $id_prodotto_sel
* @param int $id_struttura_offerta
* @param array $configurazioni
* @return string
**/
public function getLinkBooking($opz="", $id_struttura="", $id_prodotto_sel="", $id_struttura_offerta="", $configurazioni = []) {
  ...
}
```

| Parametro             | Tipo   | Default               | Valori ammessi o breve descrizione                                                                                                                                 |
| --------------------- | ------ | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| $opz                  | string | `null`                | `'singolo'` `'cancella_modifica'` `'benvenuto'` `'domani'`                                                                                                         |
| $id_struttura         | string | `$this->id_struttura` | Se non impostato, il valore della struttura coincide con quello della struttura corrente. È possibile specificare una struttura diversa modificando questo valore. |
| $id_prodotto_sel      | string | `null`                | Consente di generare il link del BE con una specifica offerta.                                                                                                     |
| $id_struttura_offerta | string | `null`                | ...                                                                                                                                                                |

<h3><code>$configurazioni</code></h3>

- Tipo: `Array`
- Default: `[]`

Opzioni configurabili:

```php
[
  'data' => '', // è possibile impostare la data specifica per il BE
  'id_lingua' => $this->id_lingua,
  'tipo_booking' => $this->tipo_booking,
]
```

## Link offerte <Badge type="warning" text="Da completare" />

- **`getLinkOfferte()`**

```php
/**
* @param int $id_prodotto_sel
* @param int $id_struttura_offerta
* @param array $configurazioni
* @return string
**/
public function getLinkOfferte($id_prodotto_sel, $id_struttura_offerta="", $configurazioni = []) {
  ...
}
```
