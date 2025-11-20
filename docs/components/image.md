# Image

```php [Image.php]
<?php $classList = explode(' ', $class ?? 'image'); ?>

<figure class="<?= implode(' ', $classList) ?>" <?= $attr ?? '' ?>>
  <?= $this->getPicture($img['files'],
    [
      'class' => 'lazy',
      'priority' => false,
      'lazy' => false,
      'classImg' => $classList[0].'__img',
      'title' => $img['title'],
      'data' => isset($data[0]) ? [$data[0] => $data[1]] : null,
      'type' => $type ?? 'medium',
      'mediaQuery' => [
        '(max-width:769px)' => 'thumbnail_mobile',
      ]
    ])
  ?>
</figure>
```

Nella seguente tabella sono riportati i parametri che è possibile configurare:

| Parametro | Tipo   | Default  | Valori ammessi o breve descrizione                                                                                                                                                                                                                                                 |
| --------- | ------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $img      | array  | array    | Fa riferimento all'array dell'immagine che gli viene passata da Cube.                                                                                                                                                                                                              |
| $class    | string | `image`  | È la classe principale del componente associata all'elemento `figure`. Sull'elemento `img` viene costruita la classe dalla classe principlate. Se si passano più di due classi, dalla seconda in poi sono associate solo all'elemento `figure`, utile per aggiungere modificatori. |
| $attr     | string | `null`   | Consente di assegnare attributi all'elemento figure. Risulta utile per l'attributo `data-caos`.                                                                                                                                                                                    |
| $data     | array  | `null`   | Con questa proprietà è possibile assegnare data-attribute al tag `picture` del componente.                                                                                                                                                                                         |
| $type     | string | `medium` | Serve per indicare il formato dell'immagine di default per il desktop. I valori ammessi sono: `'medium'` `'full'`                                                                                                                                                                  |

## Esempio completo

```php
foreach ($this->getModulo('immagini') as $img) {
  $this->cube_parts('component_folder.Image', [
    'img' => $img,
    'class' => 'image-class image-class--modificatore',
    'attr' => 'data-caos="fade-up"',
    'data' => ['index' => 1],
    'type' => 'full'
  ]);
}
```

### Risultato finale

```html
<figure class="image-class image-class--modificatore" data-caos="fade-up">
  <picture class="lazy" data-index="1">
    <source
      data-src="https://cdn.blastness/thumbnail_mobile/image.webp"
      srcset=""
      media="(max-width:769px)"
      type="image/webp" />
    <source
      data-src="https://cdn.blastness/thumbnail_mobile/image.jpg"
      srcset=""
      media="(max-width:769px)"
      type="image/jpg" />
    <source data-src="https://cdn.blastness/full/image.webp" srcset="" type="image/webp" />
    <img
      class="image-class__img"
      alt="alt"
      title="title"
      data-src="https://cdn.blastness/full/image.jpg"
      src="" />
  </picture>
</figure>
```

## Image con lazy loading nativo

Dalla configurazione del componente è possible integrare l'attributo `loading="lazy"` all'interno delle immagini. E' sufficiente rimuovere queste proprietà:

```diff
- 'priority' => false,
- 'class' => 'lazy',
- 'lazy' => false,
```

Il componente finale diventa in questo modo:

```php [Image.php]
<?php $classList = explode(' ', $class ?? 'image'); ?>

<figure class="<?= implode(' ', $classList) ?>" <?= $attr ?? '' ?>>
  <?= $this->getPicture($img['files'],
    [
      'classImg' => $classList[0].'__img',
      'title' => $img['title'],
      'data' => isset($data[0]) ? [$data[0] => $data[1]] : null,
      'type' => $type ?? 'medium',
      'mediaQuery' => [
        '(max-width:769px)' => 'thumbnail_mobile',
      ]
    ])
  ?>
</figure>
```

### Risultato finale

È più pulito e ottimizzato per i browser.

```html
<figure class="image-class image-class--modificatore" data-caos="fade-up">
  <picture data-index="1">
    <source
      srcset="https://cdn.blastness/thumbnail_mobile/image.webp"
      media="(max-width:769px)"
      type="image/webp" />
    <source
      srcset="https://cdn.blastness/thumbnail_mobile/image.jpg"
      media="(max-width:769px)"
      type="image/jpg" />
    <source srcset="https://cdn.blastness/full/image.webp" type="image/webp" />
    <img
      loading="lazy"
      class="image-class__img"
      alt="alt"
      title="title"
      src="https://cdn.blastness/full/image.jpg" />
  </picture>
</figure>
```
