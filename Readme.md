
# format

An easy way for formatting in content editable.

## Installation

Install with [component(1)](http://component.io):

    $ component install lepture/format

## API

```js
var format = require('format')
```

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

### .is.bold()

### .is.italic()

### .is.strike()

### .is.sub()

### .is.sup()

### .is.underline()

### .is.p()

### .is.h1()

### .is.h2()

### .is.h3()

### .is.h4()

### .is.h5()

### .is.h6()

### .is.blockquote()

### .is.div()

### .is.ol()

### .is.ul()

### .is.hr()

### .is.a()

### .is.img()

## ._.command
## ._.formatblock
## ._.query
## ._.hasParent

## Future

The default behavior of `document.execCommand` is weird, we will use other
machanism to replace it in the future.

## License

MIT
