# Picture

```php [picture.php]
$props = isset($props) ? $props : [];
$image = isset($props['image']) ? $props['image'] : [];
$files = isset($image['files']) ? $image['files'] : '';
$video = isset($image['video']) ? $image['video'] : '';
$title = isset($props['title']) ? $props['title'] : '';
$nativeLazy = isset($props['nativeLazy']) ? $props['nativeLazy'] : false;
$pictureClass = isset($props['pictureClass']) ? $props['pictureClass'] : '';
$priority = isset($props['priority']) ? $props['priority'] : false;
$desktop = isset($props['desktop']) ? $props['desktop'] : 'medium';
$tablet = isset($props['tablet']) ? $props['tablet'] : 'medium';
$mobile = isset($props['mobile']) ? $props['mobile'] : 'thumbnail_mobile';

if (is_array($image) && count($image) > 0 && $files != '') {
    $code = '';
    if ($video != '') {
        $data = [
            'id' => 'video',
            'class' => 'img-cover',
            'poster' => $this->getImg($files, 'thumbnail_mobile', true)
        ];
        $params = [
            'autoplay',
            'loop',
            'muted',
            'playsinline',
            'disableRemotePlayback'
        ];
        $code = $this->getVideo($video, $data, $params);
    } else {
        $mediaQuery = [];
        if ($mobile != '') {
            $mediaQuery['(max-width:640px)'] = $mobile;
        }
        if ($tablet != '') {
            $mediaQuery['(max-width:1024px)'] = $tablet;
        }
        $data = array(
            'lazy' => $nativeLazy,
            'priority' => $nativeLazy ? true : $priority,
            'class' => !$priority && !$nativeLazy ? 'lazy ' .$pictureClass : $pictureClass,
            'type' => $desktop,
            'mediaQuery' => $mediaQuery
        );
        if ($title != '') {
            $data['title'] = $title;
        }
        $code = $this->getPicture($files, $data);
    }
    if ($code != '') echo $code;
}
```

Nella seguente tabella sono riportati i parametri che è possibile configurare:

| Parametro       | Tipo    | Default              | Descrizione                                              |
| --------------- | ------- | -------------------- | -------------------------------------------------------- |
| `$image`        | array   | `[]`                 | Array dell'immagine passato da Cube.                     |
| `$title`        | string  | `''`                 | Titolo dell'immagine.                                    |
| `$nativeLazy`   | boolean | `false`              | Abilita il lazy loading nativo.                          |
| `$pictureClass` | string  | `''`                 | Classe CSS aggiuntiva per il componente.                 |
| `$priority`     | boolean | `false`              | Indica se l'immagine deve avere priorità di caricamento. |
| `$desktop`      | string  | `'medium'`           | Formato dell'immagine desktop.                           |
| `$tablet`       | string  | `'medium'`           | Formato dell'immagine tablet.                            |
| `$mobile`       | string  | `'thumbnail_mobile'` | Formato dell'immagine mobile.                            |

## Classe .img-cover

Ai video viene applicata la classe .img-cover per garantire che il video riempia completamente il contenitore in tutte le casistiche.
Di conseguenza bisogna assicurarsi che il contenitore del video abbia una posizione relativa o assoluta per permettere alla classe .img-cover di funzionare correttamente.
Di seguito la classe css .img-cover:

```css
.img-cover {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0rem;
  left: 0rem;
  object-fit: cover;
}
```

## Gestione Lazy

Il parametro `$nativeLazy` stabilisce quale modalità di lazy loading utilizzare, mentre `$priority` consente di indicare che l'immagine deve essere caricata con priorità.

Entrambi i parametri sono impostati a `false` per impostazione predefinita.

Il comportamento dipende dalla combinazione dei due parametri:

| `$nativeLazy` | `$priority` | Comportamento                                                                                                                                                                                                                         |
| ------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `false`       | `false`     | Viene utilizzato il lazy loading personalizzato tramite JavaScript.                                                                                                                                                                   |
| `true`        | `false`     | <span style="color: #c00"><strong>Attenzione:</strong> viene utilizzato il lazy loading nativo del browser, ma Cube imposta l'attributo `data-src`; di conseguenza, l'immagine potrebbe non essere visualizzata correttamente.</span> |
| `false`       | `true`      | L'immagine viene caricata con priorità e non utilizza nessun tipo di lazy loading.                                                                                                                                                    |
| `true`        | `true`      | Viene utilizzato il lazy loading nativo del browser.                                                                                                                                                                                  |

In sintesi, per utilizzare `$nativeLazy` è necessario impostare `$priority` a `true`, altrimenti `$priority` a `false` farà si che l'immagine venga trattata per il lazy loading personalizzato tramite JavaScript.

## Esempi di Utilizzo del Lazy Loading

Lazy loading personalizzato tramite JavaScript:

```php
<div class="img">
  <?php 
  $img = [
    'image' => $item['immagine'][0],
    'desktop' => 'full'
  ];
  echo $this->getComponente('picture', $img);
  ?>
</div>
```

Lazy loading nativo del browser:

```php
<div class="img">
  <?php 
  $img = [
    'image' => $item['immagine'][0],
    'priority' => true,
    'nativeLazy' => true,
    'desktop' => 'full'
  ];
  echo $this->getComponente('picture', $img);
  ?>
</div>
```

Nessun lazy loading (immagine caricata immediatamente):

```php
<div class="img">
  <?php 
  $img = [
    'image' => $item['immagine'][0],
    'priority' => true,
    'desktop' => 'full'
  ];
  echo $this->getComponente('picture', $img);
  ?>
</div>
```

## Formati Media Query

I formati utilizzabili per le media query sono definiti tramite l'attributo `desktop`, `tablet` e `mobile` all'interno dell'array di configurazione dell'immagine.
Di seguito la lista dei formati disponibili: 

- `full`
- `medium`
- `thumbnail`
- `thumbnail_mobile`
- `thumbnail_quad`
- `full_mobile`
- `vertical_mobile`
