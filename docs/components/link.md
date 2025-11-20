# Link

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
foreach ($cube->getModulo('link') as $link) {
  $cube->cube_parts('component_folder.Link', [
    'link' => $link,
    'class' => 'link-class',
    'attr' => 'data-caos="fade-up"'
  ]);
}
```
