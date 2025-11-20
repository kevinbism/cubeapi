---
title: Snippets Componenti
description: Snippets di codice utile da poter riutilizzare.
---

# Componenti PHP

Di seguito ci sono diversi esempi di componenti che è possibile utilizzare all'interno dei propri progetti.

## Image

```php [Image.php]
<?php $classList = explode(' ', $class ?? 'image'); ?>

<figure class="<?= implode(' ', $classList) ?>" <?= $attr ?? '' ?>>
  <?= $this->getPicture($img['files'],
    [
      'priority' => false,
      'class' => 'lazy',
      'lazy' => false,
      'classImg' => $classList[0].'__img',
      'title' => $img['title'],
      'data' => isset($data[0]) ? [$data[0] => $data[1]] : null,
      'type' => $type ?: 'medium',
      'mediaQuery' => [
        '(max-width:769px)' => 'thumbnail_mobile',
      ]
    ])
  ?>
</figure>
```

Esempio integrazione:

```php
foreach ($this->getModulo('immagini') as $img) {
  $this->cube_parts('component_folder.Image', [
    'img' => $img,
    'class' => 'image-class',
    'type' => 'full'
  ]);
}
```

## Link

```php [Link.php]
<?php
$class = $class ?? "";
$attr = $attr ?? "";
?>
<a href="<?= $link['link'] ?>" target="<?= $link['target'] ?>" class="<?= $class ?>" <?= $attr ?>>
  <?= $link['label'] ?>
</a>
```

Esempio integrazione:

```php
foreach ($this->getModulo('link') as $link) {
  $this->cube_parts('component_folder.Link', [
    'link' => $link,
    'class' => 'link-class',
    'attr' => 'data-caos="fade-up"'
  ]);
}
```

## Logo

```php
<?php
$classList = explode(' ', $class ?? '');
$fileLogo = $fileLogo ?? 'logo';
$w = $w ?? '';
$h = $h ?? '';
$p = $p ?? false;
$lazy = $lazy ?? false;
$id = $cms->isGruppo() ? $id : $cms->id_struttura;
?>

<a href="<?= $cms->getLinkHome('', $id) ?>" class="<?= implode(' ', $classList) ?>">
  <?= $cms->getLogoP([
    'file' => $fileLogo,
    'id_struttura' => $id,
    'priority' => $p,
    'class' => !$p ? 'lazy' : '',
    'lazy' => $lazy,
    'classImg' => $classList[0] . '__img',
    'title' => $cms->getInfoStruttura('nome_struttura', $id) . ' Logo',
    'width' => $w,
    'height' => $h
  ]);
  ?>
</a>
```

Esempio integrazione:

```php
$this->cube_parts('component_folder.Logo', [
  'fileLogo' => 'altlogo',
  'class' => 'header-logo header-logo--alt',
  'p' => true,
  'lazy' => true,
  'w' => 171,
  'h' => 55
])
```
