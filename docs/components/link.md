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
foreach ($this->getModulo('link') as $link) {
  $this->cube_parts('component_folder.Link', [
    'link' => $link,
    'class' => 'link-class',
    'attr' => 'data-caos="fade-up"'
  ]);
}
```
