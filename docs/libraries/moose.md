# Alce

Alcessibilità.

## Regole Generiche

- [Button](#button)
- [Skip Button](#skip-button)
- [Gestione visibilità elementi nascosti, tramite CSS](#gestione-visibilità-elementi-nascosti-tramite-css)
- [Gestione Label nei form](#gestione-label-nei-form)
- [Link](#link)

### Button

I button che aprono un elemento nascosto (menu overlay, qr overlay, tendina lingue, tendina strutture, ecc) devono avere l'attributo **aria-expanded** settato a _false_ e l'attributo **aria-controls** settato con _l'id dell'elemento a cui è collegato_.

I button che cambiano stato (tipo i filtri della gallery) devono essere raggruppati dentro ad un contenitore con l'attributo **role="group"** e devono avere l'attributo **aria-pressed** settato a _false_ (tranne quello di default che parte con aria-pressed settato a true).

### Skip Button

Lo skip button (freccina show more) deve essere il **primo** elemento selezionabile navigando da tastiera. Il modo più semplice per fare questa cosa è metterlo come primo elemento dentro l'header del sito. Deve essere un link collegato tramite ancora al prima sezione del contenuto del sito.

```html
<a
  class="header__show"
  href="#main-content"
  id="show-more"
  aria-label="vai al contenuto"
>
  <i class="header__show__icona fa-thin fa-arrow-down-long"></i>
</a>
```

E' buona pratica rendere il primo elemento del contenuto (solitamente l'h1) focussabile (attributo tabindex="-1").
Per gestire lo scroll quando si clicca sullo skip-button si può aggiungere una regola css all'id a cui è collegato per variare l'offset dopo lo scroll usando questa regola css.

```css
scroll-margin-top: 100px;
```

### Gestione visibilità elementi nascosti, tramite CSS

Per rendere visibili gli elementi inizialmente nascosti (menu overlay, qr overlay, tendina lingue, tendina strutture, ecc) anzichè inserire una classe nel body (es. qr-open) possiamo sfruttare l'attributo **aria-expanded** dei button collegati.
**Esempio apertura del qr:**

```css
body:has(.qr-button[aria-expanded='true']) & {
  opacity: 1;
  pointer-events: unset;
}
```

### Gestione Label nei form

Dentro ad un form ogni label deve avere l'attributo **for** collegato all'id dell'input (o select, textarea, ecc) corrispondente.

```html
<label class="form__label" for="adulti">
    <?= $this->__("qr-adulti") ?>
</label>
<select id="adulti" class="form__select" name="tot_adulti" autocomplete="off">
    <?php for ($i=1; $i<=9; $i++){ ?>
        <option <?= ($i==2) ? 'selected="selected"' : '' ?> value="<?= $i ?>"><?= $i ?></option>
    <?php } ?>
</select>
```

### Link

Ogni link deve avere l'attributo **aria-label** più descrittivo possibile.
E' buona norma usare una dicitura apri-il-link seguita da un riferimento all'elemento a cui è collegato il link.

**Esempio di link dentro un modello di box alternati:**

```html
<a class="box-alternati__element__link" href="<?= $elemento['link'] ?>" aria-label="<?= $this->__("apri-il-link") ?> <?= $elemento['titolo']; ?>" target="<?= $elemento['target'] ?>">
    <?= $elemento['label'] ?>
</a>
```

---

## Funzioni

- [keyboardEvents()](#keyboardevents)
- [videoInteractions()](#videointeractions)
- [sliderInteractions()](#sliderinteractions)
- [clickButtonExpanded()](#clickbuttonexpanded)
- [clickButtonFilters()](#clickbuttonfilters)
- [trapFocus()](#trapfocus)

---

### keyboardEvents()

Funzione necessaria per il funzionamento dei comandi per la navigazione da tastiera (enter, esc e tab). Questa funzione va **sempre** richiamata nel Document Ready.

```js
keyboardEvents();
```

---

### videoInteractions()

Funzione per collegare ad un video i controlli play/pause e mute/unmute.

**Inizializzazione con parametri:**

Cerca dentro tutti gli elementi con classe corrispondente al parametro _videoEl_ un video, ed a quel video collega un pulsante con classe corrispondente al parametro _ppButton_ per i controlli di play/pause, ed un pulsante con classe corrispondente al parametro _audioButton_ per i controlli di mute/unmute.

```js
videoInteractions({
  videoEl: '.video-box',
  ppButton: '.video-controls__pause',
  audioButton: '.video-controls__audio',
});
```

**Inizializzazione senza parametri:**
Per effettuare la ricerca e l'associazione utilizza parametri di default.

- _videoEl_ = .video-wrapper
- _ppButton_ = .video-controls
- _audioButton_ = .video-audio

```js
videoInteractions();
```

<br /><strong>Esempio di elemento con i pulsanti da associare ad un video:</strong><br />
I button devono avere <em>aria-label</em> descrittivo e <em>aria-pressed</em> settato a false

```html
<div class="video-actions">
  <button
    class="video-control video-actions__control"
    aria-label="video pause/play"
    aria-pressed="false"
  >
    <i class="video-actions__control--play fa-light fa-circle-play"></i>
    <i class="video-actions__control--stop fa-light fa-circle-pause"></i>
  </button>
  <button
    class="video-audio video-actions__audio"
    aria-label="video mute/unmute"
    aria-pressed="false"
  >
    <i class="video-actions__audio--play fa-light fa-volume"></i>
    <i class="video-actions__audio--stop fa-light fa-volume-slash"></i>
  </button>
</div>
```

---

### sliderInteractions()

Funzione per collegare ad uno slider i controlli play/pause.<br /><br />

<strong>Inizializzazione con parametri:</strong><br />
Cerca gli slider con classe corrispondente al parametro <em>sliderEl</em>, ed a quegli slider collega un pulsante con classe corrispondente al parametro <em>ppButton</em> per i controlli di play/pause

```js
sliderInteractions({ sliderEl: '.slider-box', ppButton: '.slider-controls__pause' });
```

<br /><strong>Inizializzazione senza parametri:</strong><br />
Per effettuare la ricerca e l'associazione utilizza parametri di default.<br />
<em>sliderEl</em> = .slider-container<br />
<em>ppButton</em> = .slider-pause

```js
sliderInteractions();
```

<br /><strong>Esempio di pulsante play/pause da associare ad uno slider:</strong><br />
Il button deve avere <em>aria-label</em> descrittivo e <em>aria-pressed</em> settato a false

```html
<button
  class="slider-pause"
  aria-label="slider pause/play"
  aria-pressed="false"
>
  <i class="slider-pause--play fa-thin fa-circle-play"></i>
  <i class="slider-pause--stop fa-thin fa-circle-pause"></i>
</button>
```

---

### swalleInteractions()

Funzione per collegare a Swalle i controlli play/pause.<br /><br />

<strong>Inizializzazione con parametri:</strong><br />
Cerca dentro all'elemento passato come parametro <em>swalleEl</em> un pulsante con classe uguale al parametro <em>ppButton</em>. A quel pulsante collega degli elementi al click per gestire il pause/play dell'oggetto Swalle passato come parametro <em>instance</em>

```js
swalleInteractions({ instance: swalle, swalleEl: '.swalle-container', ppButton: '.swalle-pause' });
```

<br /><strong>Inizializzazione con solo un parametro:</strong><br />
Per effettuare la ricerca e l'associazione utilizza parametri di default se questi non vengono specificati.<br />
<em>instance</em> <strong>sempre necessario</strong><br />
<em>sliderEl</em> = .slider-container<br />
<em>ppButton</em> = .slider-pause

```js
swalleInteractions({ instance: swalle});
```

<br /><strong>Esempio di pulsante play/pause da associare ad uno swalle:</strong><br />
Il button deve avere <em>aria-label</em> descrittivo e <em>aria-pressed</em> settato a false

```html
<button
  class="swalle-pause"
  aria-label="gallery top pause/play"
  aria-pressed="false"
>
  <i class="swalle-pause--play fa-thin fa-circle-play"></i>
  <i class="swalle-pause--stop fa-thin fa-circle-pause"></i>
</button>
```

---

### clickButtonExpanded()

Funzione per cambiare lo stato di un button (passato come parametro) e degli elementi ad esso associati.<br />
Questa funzione va associata ad ogni button che rende visibile un elemento fino a quel momento nascosto (menu overlay, qr overlay, tendina lingue, tendina strutture, ecc.).<br />
Al button cambia aria-pressed da false a true e viceversa, e all'elemento associato tramite id toglie o mette inert.

<br /><strong>Chiamata della funzione:</strong><br />

```js
document.getElementById('qr-button').addEventListener('click', () => {
  clickButtonExpanded(this);
});
```

<br /><strong>Esempio di button:</strong><br />
Il button deve avere <em>aria-expanded</em> settato a false ed un <em>aria-controls</em> con l'id dell'elemento a cui fa riferimento

```html
<button
  class="prenota-button qr-button"
  id="qr-button"
  aria-expanded="false"
  aria-controls="overlay-qr"
>
  <div class="prenota-button__dicitura prenota-button__dicitura--open">
    <?= $this->__("prenota") ?>
  </div>
  <div class="prenota-button__dicitura prenota-button__dicitura--close">
    <?= $this->__("chiudi") ?>
  </div>
</button>
```

<strong>Esempio di elemento associato:</strong><br />
Deve avere lo stesso <em>id</em> del campo aria-controls del button associato e l'attributo <em>inert</em>

```html
<div
  class="overlay-prenota"
  id="overlay-qr"
  inert
>
  ... ... ...
</div>
```

---

### clickButtonFilters()

Funzione per cambiare lo stato di un button (passato come parametro). Setta l'attributo aria-pressed a true sull'elemento cliccato e lo rimuove dagli altri filtri<br />
Questa funzione va associata ad ogni button di un elenco di filtri.

<br /><strong>Chiamata della funzione:</strong><br />

```js
document.querySelectorAll('.filter').addEventListener('click', () => {
  clickButtonFilters(this);
});
```

<br /><strong>Esempio di lista di filtri (articoli):</strong><br />
Il container dei filtri deve avere role="group". I singoli filtri devono avere aria-pressed settato a false, il primo filtro (quello che parte già selezionato) invece lo avrà settato a true

```html
<div
  class="articoli__filtri"
  role="group"
  aria-label="filtri articoli"
>
  <button
    class="articoli__filtri__categoria filter"
    data-filter="*"
    aria-pressed="true"
  >
    All
  </button>
  <?php foreach($categorie as $elemento){ ?>
  <button
    class="articoli__filtri__categoria filter"
    data-filter="cat_<?= $elemento['id_categoria'] ?>"
    aria-pressed="false"
  >
    <?= $elemento['categoria'] ?>
  </button>
  <?php } ?>
</div>
```

---

### trapFocus()

Funzione che sposta il focus sul primo elemento focussabile collegato al button (passato come parametro) premuto.
Questa funzione va associata ad ogni button che rende visibile un elemento dentro al quale dobbiamo spostare il focus e restarci "intrappolati" dentro (menu overlay, qr overlay ecc).

<br /><strong>Chiamata della funzione:</strong><br />

```js
document.getElementById('qr-button').addEventListener('click', () => {
  trapFocus(this);
});
```

<br /><strong>Esempio di button:</strong><br />
Il button deve avere <em>aria-controls</em> con l'id dell'elemento dentro a cui spostare il focus

```html
<button
  class="prenota-button qr-button"
  id="qr-button"
  aria-expanded="false"
  aria-controls="overlay-qr"
>
  <div class="prenota-button__dicitura prenota-button__dicitura--open">
    <?= $this->__("prenota") ?>
  </div>
  <div class="prenota-button__dicitura prenota-button__dicitura--close">
    <?= $this->__("chiudi") ?>
  </div>
</button>
```

<strong>Esempio di elemento associato:</strong><br />
Deve avere lo stesso <em>id</em> del campo aria-controls del button associato e l'attributo <em>inert</em>

```html
<div
  class="overlay-prenota"
  id="overlay-qr"
  inert
>
  ... ... ...
</div>
```

<br /><strong>Esempio completo:</strong><br />
Spesso questa funzione si usa in combinazione con la funzione clickButtonExpanded(). Una permette di aprire un elemento nascosto, l'altra ci sposta il focus dentro.

```js
document.getElementById('qr-button').addEventListener('click', () => {
  clickButtonExpanded(this);
  trapFocus(this);
});
```