---
title: Snippets Componenti
description: Snippets di codice utile da poter riutilizzare.
---

# Componenti PHP

Di seguito ci sono diversi esempi di componenti che è possibile utilizzare all'interno dei propri progetti.

## Image

```php [Image.php]
<?php
global $cms;
$classList = explode(' ', $class);
?>

<figure class="<?= implode(' ', $classList) ?>" <?= $attr ?>>
  <?= $cms->getPicture($img['files'],
    [
      'priority' => false,
      'class' => 'lazy',
      'lazy' => false,
      'classImg' => $classList[0].'__img',
      'title' => $img['title'],
      'data' => isset($data[0]) ? [$data[0] => $data[1]] : null,
      'mediaQuery' => [
        '(max-width:769px)' => 'thumbnail_mobile',
        '(max-width:1024px)' => 'medium',
      ]
    ])
  ?>
</figure>
```

Esempio integrazione:

```php
foreach ($cms->getModulo('immagini') as $img) {
  $cms->cube_parts('component_folder.Image', [
    'img' => $img,
    'class' => 'image-class'
  ]);
}
```

## Link

```php [Link.php]
<a href="<?= $link['link'] ?>" target="<?= $link['target'] ?>" class="<?= $class ?>">
  <?= $link['label'] ?>
</a>
```

Esempio integrazione:

```php
foreach ($cms->getModulo('link') as $link) {
  $cms->cube_parts('component_folder.Link', [
    'link' => $link,
    'class' => 'link-class'
  ]);
}
```
