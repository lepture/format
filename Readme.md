# format

An easy way for formatting in content editable.

## Installation

Install with [component(1)](http://component.io):

    $ component install lepture/format

## API

```js
var format = require('format')
```

### format(name)

Format to the given style.

### .bold()

Toggle bold style of current caret selection.

### .italic()

Toggle italic style of current caret selection.

### .strike()

Toggle strikethrough style of current caret selection.

### .sub()

Toggle subscript style of current caret selection.

### .sup()

Toggle superscript style of current caret selection.

### .underline()

Toggle underline style of current caret selection.

### .p()

Toggle tag name p.

### .h1()

Toggle tag name h1.

### .h2()

Toggle tag name h2.

### .h3()

Toggle tag name h3.

### .h4()

Toggle tag name h4.

### .h5()

Toggle tag name h5.

### .h6()

Toggle tag name h6.

### .blockquote()

Toggle tag name blockquote.

### .div()

Toggle tag name div.

### .ol()

Toggle tag name ol.

### .ul()

Toggle tag name ul.

### .indent()

### .outdent()

### .clear()

Remove format of current caret selection.

### .hr()

Add tag hr.

### .a()

Add tag a (link).

### .img()

Add tag img (image).

### .br()

Add tag br.

### .html()

Insert html snippet.

### .unlink()

Remove the selected link.

### .is(name)

Is the given name status?

### .is.bold()

Is bold status of current caret selection?

### .is.italic()

Is italic status of current caret selection?

### .is.strike()

Is strike status of current caret selection?

### .is.sub()

Is subscript status of current caret selection?

### .is.sup()

Is superscript status of current caret selection?

### .is.underline()

Is underline status of current caret selection?

### .is.p()

Is p tag?

### .is.h1()

Is h1 tag?

### .is.h2()

Is h2 tag?

### .is.h3()

Is h3 tag?

### .is.h4()

Is h4 tag?

### .is.h5()

Is h5 tag?

### .is.h6()

Is h6 tag?

### .is.blockquote()

Is blockquote tag?

### .is.div()

Is div tag?

### .is.ol()

Is ol tag?

### .is.ul()

Is ul tag?

### .is.hr()

Is hr tag?

### .is.a()

Is a tag?

### .is.img()

Is img tag?

### ._.command

### ._.formatblock

### ._.query

### ._.hasParent

## Future

The default behavior of `document.execCommand` is weird, we will use other
machanism to replace it in the future.

## License

MIT
