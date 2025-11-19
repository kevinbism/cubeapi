# Cos'è un componente?

Un **componente** è come un piccolo mattoncino del tuo sito su _Cube_: ha tutto quello che serve per funzionare da solo e puoi metterlo ovunque senza rifare il lavoro.

Nei nostri progetti, un componente può avere fino a **3 parti**:

- **PHP** → la logica e i dati
- **JS** → l’interattività e i comportamenti dinamici
- **SCSS** → lo stile e il look

> ⚡ Non tutti i componenti hanno tutte e tre le parti: usiamo solo quello che serve.

## Perché usare i componenti?

- Riutilizzabili: li scrivi una volta e li metti dove vuoi
- Modulari: separano **logica, interattività e stile**
- Facili da mantenere: modifiche locali senza rompere tutto il progetto
- Semplici da integrare: richiamali e passa i parametri necessari

---

### Come si integra un componente

1. Richiami il componente nel codice
2. Passi i parametri che servono
3. Voilà, pronto da usare

Esempio rapido:

```php
$cube->cube_parts('component_folder.Image', [
  'img' => $img,
  'class' => 'image-class',
  'type' => 'full'
]);
```

In pochi secondi hai inserito un’immagine già pronta con tutte le classi, lazy loading e attributi giusti.
