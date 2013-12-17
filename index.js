var Caret = require('caret');
var caret = new Caret();

function format(name) {
  var fn = format[name];
  if (fn) {
    return fn();
  }
  return null;
}

format.bold = command('bold');
format.italic = command('italic');
format.strike = command('strikethrough');
format.sub = command('subscript');
format.sup = command('superscript');
format.underline = command('underline');

format.p = command('formatblock', '<p>');

format.h1 = formatblock('h1');
format.h2 = formatblock('h2');
format.h3 = formatblock('h3');
format.h4 = formatblock('h4');
format.h5 = formatblock('h5');
format.h6 = formatblock('h6');
format.blockquote = formatblock('blockquote');
format.div = formatblock('div');

format.ol = command('insertOrderedList');
format.ul = command('insertUnorderedList');

format.indent = command('indent');
format.outdent = command('outdent');
format.clear = command('removeformat');

format.hr = command('inserthorizontalrule');
format.a = command('createLink');
format.img = command('insertimage');
format.br = command('inserthtml', '<br>');

format.html = command('inserthtml');

/**
 * Check formatting of current caret.
 */
format.is = function(name) {
  var fn = format.is[name];
  if (fn) {
    return fn();
  }
  return null;
};
format.is.bold = function() {
  return hasParent('b', true)() || hasParent('strong', true)();
};
format.is.italic = function() {
  return query('italic')() || hasParent('i', true)() || hasParent('em', true)();
};
format.is.strike = query('strikethrough');
format.is.sub = query('subscript');
format.is.sup = query('superscript');
format.is.underline = query('underline');

format.is.p = hasParent('p');
format.is.h1 = hasParent('h1');
format.is.h2 = hasParent('h2');
format.is.h3 = hasParent('h3');
format.is.h4 = hasParent('h4');
format.is.h5 = hasParent('h5');
format.is.h6 = hasParent('h6');
format.is.blockquote = hasParent('blockquote');
format.is.div = hasParent('div');

format.is.ul = hasParent('ul');
format.is.ol = hasParent('ol');

format.is.a = hasParent('a', true);
format.is.img = hasParent('img', true);


/**
 * Function factory for execCommand.
 */
function command(name, param) {
  return function(args) {
    return document.execCommand(name, false, param || args);
  };
}

/**
 * Function factory for creating format block.
 */
function formatblock(name) {
  return function() {
    var el = caret.blockParent();
    name = name.replace(/^</, '').replace(/>$/, '');
    if (format.is(name) || el.nodeName.toLowerCase() === name.toLowerCase()) {
      // toggle off this block format
      format.p();
      return format.outdent();
    } else {
      if (format.is('ul')) {
        // toggle off ul
        format.ul();
      } else if (format.is('ol')) {
        // toggle off ol
        format.ol();
      }
      // compatible for IE
      name = '<' + name + '>';
      return command('formatblock', name)();
    }
  };
}

/**
 * Function factory for queryCommandValue
 */
function query(name) {
  return function() {
    var value = document.queryCommandValue(name);
    // Webkit/Firefox return values are strings: "true", "false"
    // IE returns booleans. IE rocks.
    return value === "true" || value === true;
  };
}

function hasParent(name, spanlevel) {
  return function() {
    var el;
    if (spanlevel) {
      el = caret.parent();
    } else {
      el = caret.blockParent();
    }
    if (el) {
      return el.nodeName.toLowerCase() === name.toLowerCase();
    }
    return null;
  };
}

// extends format with utilities.
format._ = {
  command: command,
  formatblock: formatblock,
  query: query,
  hasParent: hasParent
};

// Reset default paragraph separator.
command('defaultParagraphSeparator', 'p')();

module.exports = format;
