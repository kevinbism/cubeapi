# Booking Engine API

## Link Booking <Badge type="warning" text="Da completare" />

- **`getLinkBooking()`**

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
