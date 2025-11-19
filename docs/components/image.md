# Image

```php [Image.php]
<?php
global $cube;
$classList = explode(' ', $class ?? 'image');
?>

<figure class="<?= implode(' ', $classList) ?>" <?= $attr ?? '' ?>>
  <?= $cube->getPicture($img['files'],
    [
      'priority' => false,
      'class' => 'lazy',
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

| Parametro | Tipo   | Default | Valori ammessi o breve descrizione                                                                                                                                                                                                                                                 |
| --------- | ------ | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $img      | array  | array   | Fa riferimento all'array dell'immagine che gli viene passata da Cube.                                                                                                                                                                                                              |
| $class    | string | `image` | È la classe principale del componente associata all'elemento `figure`. Sull'elemento `img` viene costruita la classe dalla classe principlate. Se si passano più di due classi, dalla seconda in poi sono associate solo all'elemento `figure`, utile per aggiungere modificatori. |
| $attr     | strnig | `null`  | Consente di assegnare attributi all'elemento figure.                                                                                                                                                                                                                               |

### Esempio:

```php
foreach ($cube->getModulo('immagini') as $img) {
  $cube->cube_parts('component_folder.Image', [
    'img' => $img,
    'class' => 'image-class',
    'type' => 'full'
  ]);
}
```

## Image con lazy loading nativo

Dalla configurazione del componente è possible integrare l'attributo `loading="lazy"` all'interno delle immagini. E' sufficiente rimuovere queste proprietà:

```diff
- 'priority' => false,
- 'class' => 'lazy',
- 'lazy' => false,
```

Il componente finale risulterà in questo modo:

```php [Image.php]
<?php
global $cube;
$classList = explode(' ', $class ?? 'image');
?>

<figure class="<?= implode(' ', $classList) ?>" <?= $attr ?? '' ?>>
  <?= $cube->getPicture($img['files'],
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
