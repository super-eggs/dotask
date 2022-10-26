(self["webpackChunkDooTask"] = self["webpackChunkDooTask"] || []).push([["resources_assets_js_components_MDEditor_preview_js"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/components/preview/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/components/preview/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_marked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/marked */ "./resources/assets/js/components/MDEditor/config/marked.js");
/* harmony import */ var _assets_js_marked_createToc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/js/marked/createToc */ "./resources/assets/js/components/MDEditor/assets/js/marked/createToc.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'markdown-preview',
  props: {
    initialValue: {
      // 初始化内容
      type: String,
      "default": ''
    },
    markedOptions: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    theme: {
      type: String,
      "default": 'light'
    },
    copyCode: {
      // 复制代码
      type: Boolean,
      "default": true
    },
    copyBtnText: {
      // 复制代码按钮文字
      type: String,
      "default": '复制代码'
    }
  },
  data: function data() {
    return {
      html: '',
      previewImgModal: false,
      previewImgSrc: '',
      previewImgMode: ''
    };
  },
  mounted: function mounted() {
    this.translateMarkdown();
  },
  methods: {
    tocLevel: function tocLevel(l, lists) {
      var minLevel = 9999;
      lists.forEach(function (_ref) {
        var level = _ref.level;
        minLevel = Math.min(minLevel, level);
      });

      if (minLevel === 9999) {
        return l;
      }

      return l - (minLevel - 1);
    },
    translateMarkdown: function translateMarkdown() {
      var _this = this;

      var html = (0,_config_marked__WEBPACK_IMPORTED_MODULE_0__["default"])(this.initialValue, _objectSpread({
        sanitize: false
      }, this.markedOptions)).replace(/href="/gi, 'target="_blank" href="');

      if (this.copyCode) {
        html = html.replace(/<pre>/g, '<div class="code-block"><span class="copy-code">' + this.copyBtnText + '</span><pre>').replace(/<\/pre>/g, '</pre></div>');
      }

      if (/\[\[TOC\]\]/.test(html)) {
        var string = '';
        _assets_js_marked_createToc__WEBPACK_IMPORTED_MODULE_1__["default"].tocItems.forEach(function (item) {
          string += "<li class=\"toc-anchor-item\" onclick=\"_goTocAction(this, '".concat(item.level, "', '").concat(item.anchor, "')\"><span class=\"toc-link-").concat(_this.tocLevel(item.level, _assets_js_marked_createToc__WEBPACK_IMPORTED_MODULE_1__["default"].tocItems), "\" title=\"").concat(item.text, "\">").concat(item.text, "</span></li>");
        });
        html = html.replace(/\[\[TOC\]\]/g, "<ul class=\"toc-anchor\">".concat(string, "</ul>"));
      }

      this.html = html;
      this.addCopyListener();
      this.addImageClickListener();
    },
    addCopyListener: function addCopyListener() {
      var _this2 = this;

      // 监听复制操作
      setTimeout(function () {
        var btns = document.querySelectorAll('.code-block .copy-code');
        _this2.btns = btns;

        var _loop = function _loop(i, len) {
          btns[i].onclick = function () {
            var code = btns[i].parentNode.querySelectorAll('pre')[0].innerText;
            var aux = document.createElement('input');
            aux.setAttribute('value', code);
            document.body.appendChild(aux);
            aux.select();
            document.execCommand('copy');
            document.body.removeChild(aux);

            _this2.$emit('on-copy', code);
          };
        };

        for (var i = 0, len = btns.length; i < len; i++) {
          _loop(i, len);
        }
      }, 600);
    },
    addImageClickListener: function addImageClickListener() {
      var _this3 = this;

      // 监听查看大图
      var _this$imgs = this.imgs,
          imgs = _this$imgs === void 0 ? [] : _this$imgs;

      if (imgs.length > 0) {
        for (var i = 0, len = imgs.length; i < len; i++) {
          imgs[i].onclick = null;
        }
      }

      setTimeout(function () {
        if (!_this3.$refs.preview) {
          return;
        }

        _this3.imgs = _this3.$refs.preview.querySelectorAll('img');

        var _loop2 = function _loop2(_i, _len) {
          _this3.imgs[_i].onclick = function () {
            var src = _this3.imgs[_i].getAttribute('src');

            _this3.previewImage(src);
          };
        };

        for (var _i = 0, _len = _this3.imgs.length; _i < _len; _i++) {
          _loop2(_i, _len);
        }
      }, 600);
    },
    previewImage: function previewImage(src) {
      var _this4 = this;

      // 预览图片
      var img = new Image();
      img.src = src;

      img.onload = function () {
        var width = img.naturalWidth;
        var height = img.naturalHeight;

        if (height / width > 1.4) {
          _this4.previewImgMode = 'horizontal';
        } else {
          _this4.previewImgMode = 'vertical';
        }

        _this4.previewImgSrc = src;
        _this4.previewImgModal = true;
      };
    }
  },
  watch: {
    initialValue: function initialValue() {
      this.translateMarkdown();
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/components/MDEditor/assets/js/hightlight/highlight.js":
/*!***********************************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/assets/js/hightlight/highlight.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var hljs = {}; // Convenience variables for build-in objects

var ArrayProto = [],
    objectKeys = Object.keys; // Global internal variables used within the highlight.js library.

var languages = {},
    aliases = {}; // Regular expressions used throughout the highlight.js library.

var noHighlightRe = /^(no-?highlight|plain|text)$/i,
    languagePrefixRe = /\blang(?:uage)?-([\w-]+)\b/i,
    fixMarkupRe = /((^(<[^>]+>|\t|)+|(?:\n)))/gm; // The object will be assigned by the build tool. It used to synchronize API
// of external language files with minified version of the highlight.js library.

var API_REPLACES;
var spanEndTag = '</span>'; // Global options used when within external APIs. This is modified when
// calling the `hljs.configure` function.

var options = {
  classPrefix: 'hljs-',
  tabReplace: null,
  useBR: false,
  languages: undefined
};
/* Utility functions */

function escape(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function tag(node) {
  return node.nodeName.toLowerCase();
}

function testRe(re, lexeme) {
  var match = re && re.exec(lexeme);
  return match && match.index === 0;
}

function isNotHighlighted(language) {
  return noHighlightRe.test(language);
}

function blockLanguage(block) {
  var i, match, length, _class;

  var classes = block.className + ' ';
  classes += block.parentNode ? block.parentNode.className : ''; // language-* takes precedence over non-prefixed class names.

  match = languagePrefixRe.exec(classes);

  if (match) {
    return getLanguage(match[1]) ? match[1] : 'no-highlight';
  }

  classes = classes.split(/\s+/);

  for (i = 0, length = classes.length; i < length; i++) {
    _class = classes[i];

    if (isNotHighlighted(_class) || getLanguage(_class)) {
      return _class;
    }
  }
}

function inherit(parent) {
  // inherit(parent, override_obj, override_obj, ...)
  var key;
  var result = {};
  var objects = Array.prototype.slice.call(arguments, 1);

  for (key in parent) {
    result[key] = parent[key];
  }

  objects.forEach(function (obj) {
    for (key in obj) {
      result[key] = obj[key];
    }
  });
  return result;
}
/* Stream merging */


function nodeStream(node) {
  var result = [];

  (function _nodeStream(node, offset) {
    for (var child = node.firstChild; child; child = child.nextSibling) {
      if (child.nodeType === 3) offset += child.nodeValue.length;else if (child.nodeType === 1) {
        result.push({
          event: 'start',
          offset: offset,
          node: child
        });
        offset = _nodeStream(child, offset); // Prevent void elements from having an end tag that would actually
        // double them in the output. There are more void elements in HTML
        // but we list only those realistically expected in code display.

        if (!tag(child).match(/br|hr|img|input/)) {
          result.push({
            event: 'stop',
            offset: offset,
            node: child
          });
        }
      }
    }

    return offset;
  })(node, 0);

  return result;
}

function mergeStreams(original, highlighted, value) {
  var processed = 0;
  var result = '';
  var nodeStack = [];

  function selectStream() {
    if (!original.length || !highlighted.length) {
      return original.length ? original : highlighted;
    }

    if (original[0].offset !== highlighted[0].offset) {
      return original[0].offset < highlighted[0].offset ? original : highlighted;
    }
    /*
    To avoid starting the stream just before it should stop the order is
    ensured that original always starts first and closes last:
     if (event1 == 'start' && event2 == 'start')
      return original;
    if (event1 == 'start' && event2 == 'stop')
      return highlighted;
    if (event1 == 'stop' && event2 == 'start')
      return original;
    if (event1 == 'stop' && event2 == 'stop')
      return highlighted;
     ... which is collapsed to:
    */


    return highlighted[0].event === 'start' ? original : highlighted;
  }

  function open(node) {
    function attr_str(a) {
      return ' ' + a.nodeName + '="' + escape(a.value).replace('"', '&quot;') + '"';
    }

    result += '<' + tag(node) + ArrayProto.map.call(node.attributes, attr_str).join('') + '>';
  }

  function close(node) {
    result += '</' + tag(node) + '>';
  }

  function render(event) {
    (event.event === 'start' ? open : close)(event.node);
  }

  while (original.length || highlighted.length) {
    var stream = selectStream();
    result += escape(value.substring(processed, stream[0].offset));
    processed = stream[0].offset;

    if (stream === original) {
      /*
      On any opening or closing tag of the original markup we first close
      the entire highlighted node stack, then render the original tag along
      with all the following original tags at the same offset and then
      reopen all the tags on the highlighted stack.
      */
      nodeStack.reverse().forEach(close);

      do {
        render(stream.splice(0, 1)[0]);
        stream = selectStream();
      } while (stream === original && stream.length && stream[0].offset === processed);

      nodeStack.reverse().forEach(open);
    } else {
      if (stream[0].event === 'start') {
        nodeStack.push(stream[0].node);
      } else {
        nodeStack.pop();
      }

      render(stream.splice(0, 1)[0]);
    }
  }

  return result + escape(value.substr(processed));
}
/* Initialization */


function expand_mode(mode) {
  if (mode.variants && !mode.cached_variants) {
    mode.cached_variants = mode.variants.map(function (variant) {
      return inherit(mode, {
        variants: null
      }, variant);
    });
  }

  return mode.cached_variants || mode.endsWithParent && [inherit(mode)] || [mode];
}

function restoreLanguageApi(obj) {
  if (API_REPLACES && !obj.langApiRestored) {
    obj.langApiRestored = true;

    for (var key in API_REPLACES) {
      obj[key] && (obj[API_REPLACES[key]] = obj[key]);
    }

    (obj.contains || []).concat(obj.variants || []).forEach(restoreLanguageApi);
  }
}

function compileLanguage(language) {
  function reStr(re) {
    return re && re.source || re;
  }

  function langRe(value, global) {
    return new RegExp(reStr(value), 'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : ''));
  } // joinRe logically computes regexps.join(separator), but fixes the
  // backreferences so they continue to match.


  function joinRe(regexps, separator) {
    // backreferenceRe matches an open parenthesis or backreference. To avoid
    // an incorrect parse, it additionally matches the following:
    // - [...] elements, where the meaning of parentheses and escapes change
    // - other escape sequences, so we do not misparse escape sequences as
    //   interesting elements
    // - non-matching or lookahead parentheses, which do not capture. These
    //   follow the '(' with a '?'.
    var backreferenceRe = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
    var numCaptures = 0;
    var ret = '';

    for (var i = 0; i < regexps.length; i++) {
      var offset = numCaptures;
      var re = reStr(regexps[i]);

      if (i > 0) {
        ret += separator;
      }

      while (re.length > 0) {
        var match = backreferenceRe.exec(re);

        if (match == null) {
          ret += re;
          break;
        }

        ret += re.substring(0, match.index);
        re = re.substring(match.index + match[0].length);

        if (match[0][0] == '\\' && match[1]) {
          // Adjust the backreference.
          ret += '\\' + String(Number(match[1]) + offset);
        } else {
          ret += match[0];

          if (match[0] == '(') {
            numCaptures++;
          }
        }
      }
    }

    return ret;
  }

  function compileMode(mode, parent) {
    if (mode.compiled) return;
    mode.compiled = true;
    mode.keywords = mode.keywords || mode.beginKeywords;

    if (mode.keywords) {
      var compiled_keywords = {};

      var flatten = function flatten(className, str) {
        if (language.case_insensitive) {
          str = str.toLowerCase();
        }

        str.split(' ').forEach(function (kw) {
          var pair = kw.split('|');
          compiled_keywords[pair[0]] = [className, pair[1] ? Number(pair[1]) : 1];
        });
      };

      if (typeof mode.keywords === 'string') {
        // string
        flatten('keyword', mode.keywords);
      } else {
        objectKeys(mode.keywords).forEach(function (className) {
          flatten(className, mode.keywords[className]);
        });
      }

      mode.keywords = compiled_keywords;
    }

    mode.lexemesRe = langRe(mode.lexemes || /\w+/, true);

    if (parent) {
      if (mode.beginKeywords) {
        mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')\\b';
      }

      if (!mode.begin) mode.begin = /\B|\b/;
      mode.beginRe = langRe(mode.begin);
      if (mode.endSameAsBegin) mode.end = mode.begin;
      if (!mode.end && !mode.endsWithParent) mode.end = /\B|\b/;
      if (mode.end) mode.endRe = langRe(mode.end);
      mode.terminator_end = reStr(mode.end) || '';
      if (mode.endsWithParent && parent.terminator_end) mode.terminator_end += (mode.end ? '|' : '') + parent.terminator_end;
    }

    if (mode.illegal) mode.illegalRe = langRe(mode.illegal);
    if (mode.relevance == null) mode.relevance = 1;

    if (!mode.contains) {
      mode.contains = [];
    }

    mode.contains = Array.prototype.concat.apply([], mode.contains.map(function (c) {
      return expand_mode(c === 'self' ? mode : c);
    }));
    mode.contains.forEach(function (c) {
      compileMode(c, mode);
    });

    if (mode.starts) {
      compileMode(mode.starts, parent);
    }

    var terminators = mode.contains.map(function (c) {
      return c.beginKeywords ? '\\.?(?:' + c.begin + ')\\.?' : c.begin;
    }).concat([mode.terminator_end, mode.illegal]).map(reStr).filter(Boolean);
    mode.terminators = terminators.length ? langRe(joinRe(terminators, '|'), true) : {
      exec: function
        /*s*/
      exec() {
        return null;
      }
    };
  }

  compileMode(language);
}
/*
Core highlighting function. Accepts a language name, or an alias, and a
string with the code to highlight. Returns an object with the following
properties:

- relevance (int)
- value (an HTML string with highlighting markup)

*/


function highlight(name, value, ignore_illegals, continuation) {
  function escapeRe(value) {
    return new RegExp(value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'm');
  }

  function subMode(lexeme, mode) {
    var i, length;

    for (i = 0, length = mode.contains.length; i < length; i++) {
      if (testRe(mode.contains[i].beginRe, lexeme)) {
        if (mode.contains[i].endSameAsBegin) {
          mode.contains[i].endRe = escapeRe(mode.contains[i].beginRe.exec(lexeme)[0]);
        }

        return mode.contains[i];
      }
    }
  }

  function endOfMode(mode, lexeme) {
    if (testRe(mode.endRe, lexeme)) {
      while (mode.endsParent && mode.parent) {
        mode = mode.parent;
      }

      return mode;
    }

    if (mode.endsWithParent) {
      return endOfMode(mode.parent, lexeme);
    }
  }

  function isIllegal(lexeme, mode) {
    return !ignore_illegals && testRe(mode.illegalRe, lexeme);
  }

  function keywordMatch(mode, match) {
    var match_str = language.case_insensitive ? match[0].toLowerCase() : match[0];
    return mode.keywords.hasOwnProperty(match_str) && mode.keywords[match_str];
  }

  function buildSpan(classname, insideSpan, leaveOpen, noPrefix) {
    var classPrefix = noPrefix ? '' : options.classPrefix,
        openSpan = '<span class="' + classPrefix,
        closeSpan = leaveOpen ? '' : spanEndTag;
    openSpan += classname + '">';
    if (!classname) return insideSpan;
    return openSpan + insideSpan + closeSpan;
  }

  function processKeywords() {
    var keyword_match, last_index, match, result;
    if (!top.keywords) return escape(mode_buffer);
    result = '';
    last_index = 0;
    top.lexemesRe.lastIndex = 0;
    match = top.lexemesRe.exec(mode_buffer);

    while (match) {
      result += escape(mode_buffer.substring(last_index, match.index));
      keyword_match = keywordMatch(top, match);

      if (keyword_match) {
        relevance += keyword_match[1];
        result += buildSpan(keyword_match[0], escape(match[0]));
      } else {
        result += escape(match[0]);
      }

      last_index = top.lexemesRe.lastIndex;
      match = top.lexemesRe.exec(mode_buffer);
    }

    return result + escape(mode_buffer.substr(last_index));
  }

  function processSubLanguage() {
    var explicit = typeof top.subLanguage === 'string';

    if (explicit && !languages[top.subLanguage]) {
      return escape(mode_buffer);
    }

    var result = explicit ? highlight(top.subLanguage, mode_buffer, true, continuations[top.subLanguage]) : highlightAuto(mode_buffer, top.subLanguage.length ? top.subLanguage : undefined); // Counting embedded language score towards the host language may be disabled
    // with zeroing the containing mode relevance. Usecase in point is Markdown that
    // allows XML everywhere and makes every XML snippet to have a much larger Markdown
    // score.

    if (top.relevance > 0) {
      relevance += result.relevance;
    }

    if (explicit) {
      continuations[top.subLanguage] = result.top;
    }

    return buildSpan(result.language, result.value, false, true);
  }

  function processBuffer() {
    result += top.subLanguage != null ? processSubLanguage() : processKeywords();
    mode_buffer = '';
  }

  function startNewMode(mode) {
    result += mode.className ? buildSpan(mode.className, '', true) : '';
    top = Object.create(mode, {
      parent: {
        value: top
      }
    });
  }

  function processLexeme(buffer, lexeme) {
    mode_buffer += buffer;

    if (lexeme == null) {
      processBuffer();
      return 0;
    }

    var new_mode = subMode(lexeme, top);

    if (new_mode) {
      if (new_mode.skip) {
        mode_buffer += lexeme;
      } else {
        if (new_mode.excludeBegin) {
          mode_buffer += lexeme;
        }

        processBuffer();

        if (!new_mode.returnBegin && !new_mode.excludeBegin) {
          mode_buffer = lexeme;
        }
      }

      startNewMode(new_mode, lexeme);
      return new_mode.returnBegin ? 0 : lexeme.length;
    }

    var end_mode = endOfMode(top, lexeme);

    if (end_mode) {
      var origin = top;

      if (origin.skip) {
        mode_buffer += lexeme;
      } else {
        if (!(origin.returnEnd || origin.excludeEnd)) {
          mode_buffer += lexeme;
        }

        processBuffer();

        if (origin.excludeEnd) {
          mode_buffer = lexeme;
        }
      }

      do {
        if (top.className) {
          result += spanEndTag;
        }

        if (!top.skip && !top.subLanguage) {
          relevance += top.relevance;
        }

        top = top.parent;
      } while (top !== end_mode.parent);

      if (end_mode.starts) {
        if (end_mode.endSameAsBegin) {
          end_mode.starts.endRe = end_mode.endRe;
        }

        startNewMode(end_mode.starts, '');
      }

      return origin.returnEnd ? 0 : lexeme.length;
    }

    if (isIllegal(lexeme, top)) throw new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');
    /*
    Parser should not reach this point as all types of lexemes should be caught
    earlier, but if it does due to some bug make sure it advances at least one
    character forward to prevent infinite looping.
    */

    mode_buffer += lexeme;
    return lexeme.length || 1;
  }

  var language = getLanguage(name);

  if (!language) {
    throw new Error('Unknown language: "' + name + '"');
  }

  compileLanguage(language);
  var top = continuation || language;
  var continuations = {}; // keep continuations for sub-languages

  var result = '',
      current;

  for (current = top; current !== language; current = current.parent) {
    if (current.className) {
      result = buildSpan(current.className, '', true) + result;
    }
  }

  var mode_buffer = '';
  var relevance = 0;

  try {
    var match,
        count,
        index = 0;

    while (true) {
      top.terminators.lastIndex = index;
      match = top.terminators.exec(value);
      if (!match) break;
      count = processLexeme(value.substring(index, match.index), match[0]);
      index = match.index + count;
    }

    processLexeme(value.substr(index));

    for (current = top; current.parent; current = current.parent) {
      // close dangling modes
      if (current.className) {
        result += spanEndTag;
      }
    }

    return {
      relevance: relevance,
      value: result,
      language: name,
      top: top
    };
  } catch (e) {
    if (e.message && e.message.indexOf('Illegal') !== -1) {
      return {
        relevance: 0,
        value: escape(value)
      };
    } else {
      throw e;
    }
  }
}
/*
Highlighting with language detection. Accepts a string with the code to
highlight. Returns an object with the following properties:

- language (detected language)
- relevance (int)
- value (an HTML string with highlighting markup)
- second_best (object with the same structure for second-best heuristically
  detected language, may be absent)

*/


function highlightAuto(text, languageSubset) {
  languageSubset = languageSubset || options.languages || objectKeys(languages);
  var result = {
    relevance: 0,
    value: escape(text)
  };
  var second_best = result;
  languageSubset.filter(getLanguage).filter(autoDetection).forEach(function (name) {
    var current = highlight(name, text, false);
    current.language = name;

    if (current.relevance > second_best.relevance) {
      second_best = current;
    }

    if (current.relevance > result.relevance) {
      second_best = result;
      result = current;
    }
  });

  if (second_best.language) {
    result.second_best = second_best;
  }

  return result;
}
/*
Post-processing of the highlighted markup:

- replace TABs with something more useful
- replace real line-breaks with '<br>' for non-pre containers

*/


function fixMarkup(value) {
  return !(options.tabReplace || options.useBR) ? value : value.replace(fixMarkupRe, function (match, p1) {
    if (options.useBR && match === '\n') {
      return '<br>';
    } else if (options.tabReplace) {
      return p1.replace(/\t/g, options.tabReplace);
    }

    return '';
  });
}

function buildClassName(prevClassName, currentLang, resultLang) {
  var language = currentLang ? aliases[currentLang] : resultLang,
      result = [prevClassName.trim()];

  if (!prevClassName.match(/\bhljs\b/)) {
    result.push('hljs');
  }

  if (prevClassName.indexOf(language) === -1) {
    result.push(language);
  }

  return result.join(' ').trim();
}
/*
Applies highlighting to a DOM node containing code. Accepts a DOM node and
two optional parameters for fixMarkup.
*/


function highlightBlock(block) {
  var node, originalStream, result, resultNode, text;
  var language = blockLanguage(block);
  if (isNotHighlighted(language)) return;

  if (options.useBR) {
    node = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
    node.innerHTML = block.innerHTML.replace(/\n/g, '').replace(/<br[ \/]*>/g, '\n');
  } else {
    node = block;
  }

  text = node.textContent;
  result = language ? highlight(language, text, true) : highlightAuto(text);
  originalStream = nodeStream(node);

  if (originalStream.length) {
    resultNode = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
    resultNode.innerHTML = result.value;
    result.value = mergeStreams(originalStream, nodeStream(resultNode), text);
  }

  result.value = fixMarkup(result.value);
  block.innerHTML = result.value;
  block.className = buildClassName(block.className, language, result.language);
  block.result = {
    language: result.language,
    re: result.relevance
  };

  if (result.second_best) {
    block.second_best = {
      language: result.second_best.language,
      re: result.second_best.relevance
    };
  }
}
/*
Updates highlight.js global options with values passed in the form of an object.
*/


function configure(user_options) {
  options = inherit(options, user_options);
}
/*
Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
*/


function initHighlighting() {
  if (initHighlighting.called) return;
  initHighlighting.called = true;
  var blocks = document.querySelectorAll('pre code');
  ArrayProto.forEach.call(blocks, highlightBlock);
}
/*
Attaches highlighting to the page load event.
*/


function initHighlightingOnLoad() {
  addEventListener('DOMContentLoaded', initHighlighting, false);
  addEventListener('load', initHighlighting, false);
}

function registerLanguage(name, language) {
  var lang = languages[name] = language(hljs);
  restoreLanguageApi(lang);

  if (lang.aliases) {
    lang.aliases.forEach(function (alias) {
      aliases[alias] = name;
    });
  }
}

function listLanguages() {
  return objectKeys(languages);
}

function getLanguage(name) {
  name = (name || '').toLowerCase();
  return languages[name] || languages[aliases[name]];
}

function autoDetection(name) {
  var lang = getLanguage(name);
  return lang && !lang.disableAutodetect;
}
/* Interface definition */


hljs.highlight = highlight;
hljs.highlightAuto = highlightAuto;
hljs.fixMarkup = fixMarkup;
hljs.highlightBlock = highlightBlock;
hljs.configure = configure;
hljs.initHighlighting = initHighlighting;
hljs.initHighlightingOnLoad = initHighlightingOnLoad;
hljs.registerLanguage = registerLanguage;
hljs.listLanguages = listLanguages;
hljs.getLanguage = getLanguage;
hljs.autoDetection = autoDetection;
hljs.inherit = inherit; // Common regexps

hljs.IDENT_RE = '[a-zA-Z]\\w*';
hljs.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
hljs.NUMBER_RE = '\\b\\d+(\\.\\d+)?';
hljs.C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float

hljs.BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...

hljs.RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~'; // Common modes

hljs.BACKSLASH_ESCAPE = {
  begin: '\\\\[\\s\\S]',
  relevance: 0
};
hljs.APOS_STRING_MODE = {
  className: 'string',
  begin: '\'',
  end: '\'',
  illegal: '\\n',
  contains: [hljs.BACKSLASH_ESCAPE]
};
hljs.QUOTE_STRING_MODE = {
  className: 'string',
  begin: '"',
  end: '"',
  illegal: '\\n',
  contains: [hljs.BACKSLASH_ESCAPE]
};
hljs.PHRASAL_WORDS_MODE = {
  begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
};

hljs.COMMENT = function (begin, end, inherits) {
  var mode = hljs.inherit({
    className: 'comment',
    begin: begin,
    end: end,
    contains: []
  }, inherits || {});
  mode.contains.push(hljs.PHRASAL_WORDS_MODE);
  mode.contains.push({
    className: 'doctag',
    begin: '(?:TODO|FIXME|NOTE|BUG|XXX):',
    relevance: 0
  });
  return mode;
};

hljs.C_LINE_COMMENT_MODE = hljs.COMMENT('//', '$');
hljs.C_BLOCK_COMMENT_MODE = hljs.COMMENT('/\\*', '\\*/');
hljs.HASH_COMMENT_MODE = hljs.COMMENT('#', '$');
hljs.NUMBER_MODE = {
  className: 'number',
  begin: hljs.NUMBER_RE,
  relevance: 0
};
hljs.C_NUMBER_MODE = {
  className: 'number',
  begin: hljs.C_NUMBER_RE,
  relevance: 0
};
hljs.BINARY_NUMBER_MODE = {
  className: 'number',
  begin: hljs.BINARY_NUMBER_RE,
  relevance: 0
};
hljs.CSS_NUMBER_MODE = {
  className: 'number',
  begin: hljs.NUMBER_RE + '(' + '%|em|ex|ch|rem' + '|vw|vh|vmin|vmax' + '|cm|mm|in|pt|pc|px' + '|deg|grad|rad|turn' + '|s|ms' + '|Hz|kHz' + '|dpi|dpcm|dppx' + ')?',
  relevance: 0
};
hljs.REGEXP_MODE = {
  className: 'regexp',
  begin: /\//,
  end: /\/[gimuy]*/,
  illegal: /\n/,
  contains: [hljs.BACKSLASH_ESCAPE, {
    begin: /\[/,
    end: /\]/,
    relevance: 0,
    contains: [hljs.BACKSLASH_ESCAPE]
  }]
};
hljs.TITLE_MODE = {
  className: 'title',
  begin: hljs.IDENT_RE,
  relevance: 0
};
hljs.UNDERSCORE_TITLE_MODE = {
  className: 'title',
  begin: hljs.UNDERSCORE_IDENT_RE,
  relevance: 0
};
hljs.METHOD_GUARD = {
  // excludes method names from keyword processing
  begin: '\\.\\s*' + hljs.UNDERSCORE_IDENT_RE,
  relevance: 0
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hljs);

/***/ }),

/***/ "./resources/assets/js/components/MDEditor/assets/js/hightlight/index.js":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/assets/js/hightlight/index.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./highlight */ "./resources/assets/js/components/MDEditor/assets/js/hightlight/highlight.js");
/* harmony import */ var _languages_javascript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./languages/javascript */ "./resources/assets/js/components/MDEditor/assets/js/hightlight/languages/javascript.js");
/* harmony import */ var _languages_javascript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_languages_javascript__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _languages_java__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./languages/java */ "./resources/assets/js/components/MDEditor/assets/js/hightlight/languages/java.js");
/* harmony import */ var _languages_java__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_languages_java__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _languages_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./languages/css */ "./resources/assets/js/components/MDEditor/assets/js/hightlight/languages/css.js");
/* harmony import */ var _languages_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_languages_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _languages_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./languages/less */ "./resources/assets/js/components/MDEditor/assets/js/hightlight/languages/less.js");
/* harmony import */ var _languages_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_languages_less__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _languages_go__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./languages/go */ "./resources/assets/js/components/MDEditor/assets/js/hightlight/languages/go.js");
/* harmony import */ var _languages_go__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_languages_go__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _languages_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./languages/markdown */ "./resources/assets/js/components/MDEditor/assets/js/hightlight/languages/markdown.js");
/* harmony import */ var _languages_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_languages_markdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _languages_php__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./languages/php */ "./resources/assets/js/components/MDEditor/assets/js/hightlight/languages/php.js");
/* harmony import */ var _languages_php__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_languages_php__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _languages_python__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./languages/python */ "./resources/assets/js/components/MDEditor/assets/js/hightlight/languages/python.js");
/* harmony import */ var _languages_python__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_languages_python__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _languages_typescript__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./languages/typescript */ "./resources/assets/js/components/MDEditor/assets/js/hightlight/languages/typescript.js");
/* harmony import */ var _languages_typescript__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_languages_typescript__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _languages_xml__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./languages/xml */ "./resources/assets/js/components/MDEditor/assets/js/hightlight/languages/xml.js");
/* harmony import */ var _languages_xml__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_languages_xml__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _languages_autohotkey__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./languages/autohotkey */ "./resources/assets/js/components/MDEditor/assets/js/hightlight/languages/autohotkey.js");
/* harmony import */ var _languages_autohotkey__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_languages_autohotkey__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _languages_autoit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./languages/autoit */ "./resources/assets/js/components/MDEditor/assets/js/hightlight/languages/autoit.js");
/* harmony import */ var _languages_autoit__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_languages_autoit__WEBPACK_IMPORTED_MODULE_12__);
//hljs体积过大，多数为解决代码高亮显示的问题,所以只引入部分语言，如果需要可自行加载













var languages = {
  javascript: (_languages_javascript__WEBPACK_IMPORTED_MODULE_1___default()),
  java: (_languages_java__WEBPACK_IMPORTED_MODULE_2___default()),
  css: (_languages_css__WEBPACK_IMPORTED_MODULE_3___default()),
  less: (_languages_less__WEBPACK_IMPORTED_MODULE_4___default()),
  markdown: (_languages_markdown__WEBPACK_IMPORTED_MODULE_6___default()),
  go: (_languages_go__WEBPACK_IMPORTED_MODULE_5___default()),
  php: (_languages_php__WEBPACK_IMPORTED_MODULE_7___default()),
  python: (_languages_python__WEBPACK_IMPORTED_MODULE_8___default()),
  typescript: (_languages_typescript__WEBPACK_IMPORTED_MODULE_9___default()),
  xml: (_languages_xml__WEBPACK_IMPORTED_MODULE_10___default()),
  autohotkey: (_languages_autohotkey__WEBPACK_IMPORTED_MODULE_11___default()),
  auto: (_languages_autoit__WEBPACK_IMPORTED_MODULE_12___default())
};
Object.keys(languages).forEach(function (key) {
  _highlight__WEBPACK_IMPORTED_MODULE_0__["default"].registerLanguage(key, languages[key]);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_highlight__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/assets/js/components/MDEditor/assets/js/hightlight/languages/autohotkey.js":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/assets/js/hightlight/languages/autohotkey.js ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = function (hljs) {
  var BACKTICK_ESCAPE = {
    begin: '`[\\s\\S]'
  };
  return {
    case_insensitive: true,
    aliases: ['ahk'],
    keywords: {
      keyword: 'Break Continue Critical Exit ExitApp Gosub Goto New OnExit Pause return SetBatchLines SetTimer Suspend Thread Throw Until ahk_id ahk_class ahk_pid ahk_exe ahk_group',
      literal: 'true false NOT AND OR',
      built_in: 'ComSpec Clipboard ClipboardAll ErrorLevel'
    },
    contains: [BACKTICK_ESCAPE, hljs.inherit(hljs.QUOTE_STRING_MODE, {
      contains: [BACKTICK_ESCAPE]
    }), hljs.COMMENT(';', '$', {
      relevance: 0
    }), hljs.C_BLOCK_COMMENT_MODE, {
      className: 'number',
      begin: hljs.NUMBER_RE,
      relevance: 0
    }, {
      className: 'variable',
      //subst would be the most accurate however fails the point of highlighting. variable is comparably the most accurate that actually has some effect
      begin: '%[a-zA-Z0-9#_$@]+%'
    }, {
      className: 'built_in',
      begin: '^\\s*\\w+\\s*(,|%)' //I don't really know if this is totally relevant

    }, {
      className: 'title',
      //symbol would be most accurate however is higlighted just like built_in and that makes up a lot of AutoHotkey code
      //meaning that it would fail to highlight anything
      variants: [{
        begin: '^[^\\n";]+::(?!=)'
      }, {
        begin: '^[^\\n";]+:(?!=)',
        relevance: 0
      } // zero relevance as it catches a lot of things
      // followed by a single ':' in many languages
      ]
    }, {
      className: 'meta',
      begin: '^\\s*#\\w+',
      end: '$',
      relevance: 0
    }, {
      className: 'built_in',
      begin: 'A_[a-zA-Z0-9]+'
    }, {
      // consecutive commas, not for highlighting but just for relevance
      begin: ',\\s*,'
    }]
  };
};

/***/ }),

/***/ "./resources/assets/js/components/MDEditor/assets/js/hightlight/languages/autoit.js":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/assets/js/hightlight/languages/autoit.js ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = function (hljs) {
  var KEYWORDS = 'ByRef Case Const ContinueCase ContinueLoop ' + 'Default Dim Do Else ElseIf EndFunc EndIf EndSelect ' + 'EndSwitch EndWith Enum Exit ExitLoop For Func ' + 'Global If In Local Next ReDim Return Select Static ' + 'Step Switch Then To Until Volatile WEnd While With',
      LITERAL = 'True False And Null Not Or',
      BUILT_IN = 'Abs ACos AdlibRegister AdlibUnRegister Asc AscW ASin Assign ATan AutoItSetOption AutoItWinGetTitle AutoItWinSetTitle Beep Binary BinaryLen BinaryMid BinaryToString BitAND BitNOT BitOR BitRotate BitShift BitXOR BlockInput Break Call CDTray Ceiling Chr ChrW ClipGet ClipPut ConsoleRead ConsoleWrite ConsoleWriteError ControlClick ControlCommand ControlDisable ControlEnable ControlFocus ControlGetFocus ControlGetHandle ControlGetPos ControlGetText ControlHide ControlListView ControlMove ControlSend ControlSetText ControlShow ControlTreeView Cos Dec DirCopy DirCreate DirGetSize DirMove DirRemove DllCall DllCallAddress DllCallbackFree DllCallbackGetPtr DllCallbackRegister DllClose DllOpen DllStructCreate DllStructGetData DllStructGetPtr DllStructGetSize DllStructSetData DriveGetDrive DriveGetFileSystem DriveGetLabel DriveGetSerial DriveGetType DriveMapAdd DriveMapDel DriveMapGet DriveSetLabel DriveSpaceFree DriveSpaceTotal DriveStatus EnvGet EnvSet EnvUpdate Eval Execute Exp FileChangeDir FileClose FileCopy FileCreateNTFSLink FileCreateShortcut FileDelete FileExists FileFindFirstFile FileFindNextFile FileFlush FileGetAttrib FileGetEncoding FileGetLongName FileGetPos FileGetShortcut FileGetShortName FileGetSize FileGetTime FileGetVersion FileInstall FileMove FileOpen FileOpenDialog FileRead FileReadLine FileReadToArray FileRecycle FileRecycleEmpty FileSaveDialog FileSelectFolder FileSetAttrib FileSetEnd FileSetPos FileSetTime FileWrite FileWriteLine Floor FtpSetProxy FuncName GUICreate GUICtrlCreateAvi GUICtrlCreateButton GUICtrlCreateCheckbox GUICtrlCreateCombo GUICtrlCreateContextMenu GUICtrlCreateDate GUICtrlCreateDummy GUICtrlCreateEdit GUICtrlCreateGraphic GUICtrlCreateGroup GUICtrlCreateIcon GUICtrlCreateInput GUICtrlCreateLabel GUICtrlCreateList GUICtrlCreateListView GUICtrlCreateListViewItem GUICtrlCreateMenu GUICtrlCreateMenuItem GUICtrlCreateMonthCal GUICtrlCreateObj GUICtrlCreatePic GUICtrlCreateProgress GUICtrlCreateRadio GUICtrlCreateSlider GUICtrlCreateTab GUICtrlCreateTabItem GUICtrlCreateTreeView GUICtrlCreateTreeViewItem GUICtrlCreateUpdown GUICtrlDelete GUICtrlGetHandle GUICtrlGetState GUICtrlRead GUICtrlRecvMsg GUICtrlRegisterListViewSort GUICtrlSendMsg GUICtrlSendToDummy GUICtrlSetBkColor GUICtrlSetColor GUICtrlSetCursor GUICtrlSetData GUICtrlSetDefBkColor GUICtrlSetDefColor GUICtrlSetFont GUICtrlSetGraphic GUICtrlSetImage GUICtrlSetLimit GUICtrlSetOnEvent GUICtrlSetPos GUICtrlSetResizing GUICtrlSetState GUICtrlSetStyle GUICtrlSetTip GUIDelete GUIGetCursorInfo GUIGetMsg GUIGetStyle GUIRegisterMsg GUISetAccelerators GUISetBkColor GUISetCoord GUISetCursor GUISetFont GUISetHelp GUISetIcon GUISetOnEvent GUISetState GUISetStyle GUIStartGroup GUISwitch Hex HotKeySet HttpSetProxy HttpSetUserAgent HWnd InetClose InetGet InetGetInfo InetGetSize InetRead IniDelete IniRead IniReadSection IniReadSectionNames IniRenameSection IniWrite IniWriteSection InputBox Int IsAdmin IsArray IsBinary IsBool IsDeclared IsDllStruct IsFloat IsFunc IsHWnd IsInt IsKeyword IsNumber IsObj IsPtr IsString Log MemGetStats Mod MouseClick MouseClickDrag MouseDown MouseGetCursor MouseGetPos MouseMove MouseUp MouseWheel MsgBox Number ObjCreate ObjCreateInterface ObjEvent ObjGet ObjName OnAutoItExitRegister OnAutoItExitUnRegister Ping PixelChecksum PixelGetColor PixelSearch ProcessClose ProcessExists ProcessGetStats ProcessList ProcessSetPriority ProcessWait ProcessWaitClose ProgressOff ProgressOn ProgressSet Ptr Random RegDelete RegEnumKey RegEnumVal RegRead RegWrite Round Run RunAs RunAsWait RunWait Send SendKeepActive SetError SetExtended ShellExecute ShellExecuteWait Shutdown Sin Sleep SoundPlay SoundSetWaveVolume SplashImageOn SplashOff SplashTextOn Sqrt SRandom StatusbarGetText StderrRead StdinWrite StdioClose StdoutRead String StringAddCR StringCompare StringFormat StringFromASCIIArray StringInStr StringIsAlNum StringIsAlpha StringIsASCII StringIsDigit StringIsFloat StringIsInt StringIsLower StringIsSpace StringIsUpper StringIsXDigit StringLeft StringLen StringLower StringMid StringRegExp StringRegExpReplace StringReplace StringReverse StringRight StringSplit StringStripCR StringStripWS StringToASCIIArray StringToBinary StringTrimLeft StringTrimRight StringUpper Tan TCPAccept TCPCloseSocket TCPConnect TCPListen TCPNameToIP TCPRecv TCPSend TCPShutdown, UDPShutdown TCPStartup, UDPStartup TimerDiff TimerInit ToolTip TrayCreateItem TrayCreateMenu TrayGetMsg TrayItemDelete TrayItemGetHandle TrayItemGetState TrayItemGetText TrayItemSetOnEvent TrayItemSetState TrayItemSetText TraySetClick TraySetIcon TraySetOnEvent TraySetPauseIcon TraySetState TraySetToolTip TrayTip UBound UDPBind UDPCloseSocket UDPOpen UDPRecv UDPSend VarGetType WinActivate WinActive WinClose WinExists WinFlash WinGetCaretPos WinGetClassList WinGetClientSize WinGetHandle WinGetPos WinGetProcess WinGetState WinGetText WinGetTitle WinKill WinList WinMenuSelectItem WinMinimizeAll WinMinimizeAllUndo WinMove WinSetOnTop WinSetState WinSetTitle WinSetTrans WinWait',
      COMMENT = {
    variants: [hljs.COMMENT(';', '$', {
      relevance: 0
    }), hljs.COMMENT('#cs', '#ce'), hljs.COMMENT('#comments-start', '#comments-end')]
  },
      VARIABLE = {
    begin: '\\$[A-z0-9_]+'
  },
      STRING = {
    className: 'string',
    variants: [{
      begin: /"/,
      end: /"/,
      contains: [{
        begin: /""/,
        relevance: 0
      }]
    }, {
      begin: /'/,
      end: /'/,
      contains: [{
        begin: /''/,
        relevance: 0
      }]
    }]
  },
      NUMBER = {
    variants: [hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE]
  },
      PREPROCESSOR = {
    className: 'meta',
    begin: '#',
    end: '$',
    keywords: {
      'meta-keyword': 'comments include include-once NoTrayIcon OnAutoItStartRegister pragma compile RequireAdmin'
    },
    contains: [{
      begin: /\\\n/,
      relevance: 0
    }, {
      beginKeywords: 'include',
      keywords: {
        'meta-keyword': 'include'
      },
      end: '$',
      contains: [STRING, {
        className: 'meta-string',
        variants: [{
          begin: '<',
          end: '>'
        }, {
          begin: /"/,
          end: /"/,
          contains: [{
            begin: /""/,
            relevance: 0
          }]
        }, {
          begin: /'/,
          end: /'/,
          contains: [{
            begin: /''/,
            relevance: 0
          }]
        }]
      }]
    }, STRING, COMMENT]
  },
      CONSTANT = {
    className: 'symbol',
    // begin: '@',
    // end: '$',
    // keywords: 'AppDataCommonDir AppDataDir AutoItExe AutoItPID AutoItVersion AutoItX64 COM_EventObj CommonFilesDir Compiled ComputerName ComSpec CPUArch CR CRLF DesktopCommonDir DesktopDepth DesktopDir DesktopHeight DesktopRefresh DesktopWidth DocumentsCommonDir error exitCode exitMethod extended FavoritesCommonDir FavoritesDir GUI_CtrlHandle GUI_CtrlId GUI_DragFile GUI_DragId GUI_DropId GUI_WinHandle HomeDrive HomePath HomeShare HotKeyPressed HOUR IPAddress1 IPAddress2 IPAddress3 IPAddress4 KBLayout LF LocalAppDataDir LogonDNSDomain LogonDomain LogonServer MDAY MIN MON MSEC MUILang MyDocumentsDir NumParams OSArch OSBuild OSLang OSServicePack OSType OSVersion ProgramFilesDir ProgramsCommonDir ProgramsDir ScriptDir ScriptFullPath ScriptLineNumber ScriptName SEC StartMenuCommonDir StartMenuDir StartupCommonDir StartupDir SW_DISABLE SW_ENABLE SW_HIDE SW_LOCK SW_MAXIMIZE SW_MINIMIZE SW_RESTORE SW_SHOW SW_SHOWDEFAULT SW_SHOWMAXIMIZED SW_SHOWMINIMIZED SW_SHOWMINNOACTIVE SW_SHOWNA SW_SHOWNOACTIVATE SW_SHOWNORMAL SW_UNLOCK SystemDir TAB TempDir TRAY_ID TrayIconFlashing TrayIconVisible UserName UserProfileDir WDAY WindowsDir WorkingDir YDAY YEAR',
    // relevance: 5
    begin: '@[A-z0-9_]+'
  },
      FUNCTION = {
    className: 'function',
    beginKeywords: 'Func',
    end: '$',
    illegal: '\\$|\\[|%',
    contains: [hljs.UNDERSCORE_TITLE_MODE, {
      className: 'params',
      begin: '\\(',
      end: '\\)',
      contains: [VARIABLE, STRING, NUMBER]
    }]
  };
  return {
    case_insensitive: true,
    illegal: /\/\*/,
    keywords: {
      keyword: KEYWORDS,
      built_in: BUILT_IN,
      literal: LITERAL
    },
    contains: [COMMENT, VARIABLE, STRING, NUMBER, PREPROCESSOR, CONSTANT, FUNCTION]
  };
};

/***/ }),

/***/ "./resources/assets/js/components/MDEditor/assets/js/hightlight/languages/css.js":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/assets/js/hightlight/languages/css.js ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = function (hljs) {
  var IDENT_RE = '[a-zA-Z-][a-zA-Z0-9_-]*';
  var RULE = {
    begin: /(?:[A-Z\_\.\-]+|--[a-zA-Z0-9_-]+)\s*:/,
    returnBegin: true,
    end: ';',
    endsWithParent: true,
    contains: [{
      className: 'attribute',
      begin: /\S/,
      end: ':',
      excludeEnd: true,
      starts: {
        endsWithParent: true,
        excludeEnd: true,
        contains: [{
          begin: /[\w-]+\(/,
          returnBegin: true,
          contains: [{
            className: 'built_in',
            begin: /[\w-]+/
          }, {
            begin: /\(/,
            end: /\)/,
            contains: [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE]
          }]
        }, hljs.CSS_NUMBER_MODE, hljs.QUOTE_STRING_MODE, hljs.APOS_STRING_MODE, hljs.C_BLOCK_COMMENT_MODE, {
          className: 'number',
          begin: '#[0-9A-Fa-f]+'
        }, {
          className: 'meta',
          begin: '!important'
        }]
      }
    }]
  };
  return {
    case_insensitive: true,
    illegal: /[=\/|'\$]/,
    contains: [hljs.C_BLOCK_COMMENT_MODE, {
      className: 'selector-id',
      begin: /#[A-Za-z0-9_-]+/
    }, {
      className: 'selector-class',
      begin: /\.[A-Za-z0-9_-]+/
    }, {
      className: 'selector-attr',
      begin: /\[/,
      end: /\]/,
      illegal: '$'
    }, {
      className: 'selector-pseudo',
      begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
    }, {
      begin: '@(font-face|page)',
      lexemes: '[a-z-]+',
      keywords: 'font-face page'
    }, {
      begin: '@',
      end: '[{;]',
      // at_rule eating first "{" is a good thing
      // because it doesn’t let it to be parsed as
      // a rule set but instead drops parser into
      // the default mode which is how it should be.
      illegal: /:/,
      // break on Less variables @var: ...
      contains: [{
        className: 'keyword',
        begin: /\w+/
      }, {
        begin: /\s/,
        endsWithParent: true,
        excludeEnd: true,
        relevance: 0,
        contains: [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, hljs.CSS_NUMBER_MODE]
      }]
    }, {
      className: 'selector-tag',
      begin: IDENT_RE,
      relevance: 0
    }, {
      begin: '{',
      end: '}',
      illegal: /\S/,
      contains: [hljs.C_BLOCK_COMMENT_MODE, RULE]
    }]
  };
};

/***/ }),

/***/ "./resources/assets/js/components/MDEditor/assets/js/hightlight/languages/go.js":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/assets/js/hightlight/languages/go.js ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = function (hljs) {
  var GO_KEYWORDS = {
    keyword: 'break default func interface select case map struct chan else goto package switch ' + 'const fallthrough if range type continue for import return var go defer ' + 'bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 ' + 'uint16 uint32 uint64 int uint uintptr rune',
    literal: 'true false iota nil',
    built_in: 'append cap close complex copy imag len make new panic print println real recover delete'
  };
  return {
    aliases: ['golang'],
    keywords: GO_KEYWORDS,
    illegal: '</',
    contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, {
      className: 'string',
      variants: [hljs.QUOTE_STRING_MODE, {
        begin: '\'',
        end: '[^\\\\]\''
      }, {
        begin: '`',
        end: '`'
      }]
    }, {
      className: 'number',
      variants: [{
        begin: hljs.C_NUMBER_RE + '[i]',
        relevance: 1
      }, hljs.C_NUMBER_MODE]
    }, {
      begin: /:=/ // relevance booster

    }, {
      className: 'function',
      beginKeywords: 'func',
      end: /\s*\{/,
      excludeEnd: true,
      contains: [hljs.TITLE_MODE, {
        className: 'params',
        begin: /\(/,
        end: /\)/,
        keywords: GO_KEYWORDS,
        illegal: /["']/
      }]
    }]
  };
};

/***/ }),

/***/ "./resources/assets/js/components/MDEditor/assets/js/hightlight/languages/java.js":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/assets/js/hightlight/languages/java.js ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = function (hljs) {
  var JAVA_IDENT_RE = "[\xC0-\u02B8a-zA-Z_$][\xC0-\u02B8a-zA-Z_$0-9]*";
  var GENERIC_IDENT_RE = JAVA_IDENT_RE + '(<' + JAVA_IDENT_RE + '(\\s*,\\s*' + JAVA_IDENT_RE + ')*>)?';
  var KEYWORDS = 'false synchronized int abstract float private char boolean var static null if const ' + 'for true while long strictfp finally protected import native final void ' + 'enum else break transient catch instanceof byte super volatile case assert short ' + 'package default double public try this switch continue throws protected public private ' + 'module requires exports do'; // https://docs.oracle.com/javase/7/docs/technotes/guides/language/underscores-literals.html

  var JAVA_NUMBER_RE = '\\b' + '(' + '0[bB]([01]+[01_]+[01]+|[01]+)' + // 0b...
  '|' + '0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)' + // 0x...
  '|' + '(' + '([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?' + '|' + '\\.([\\d]+[\\d_]+[\\d]+|[\\d]+)' + ')' + '([eE][-+]?\\d+)?' + // octal, decimal, float
  ')' + '[lLfF]?';
  var JAVA_NUMBER_MODE = {
    className: 'number',
    begin: JAVA_NUMBER_RE,
    relevance: 0
  };
  return {
    aliases: ['jsp'],
    keywords: KEYWORDS,
    illegal: /<\/|#/,
    contains: [hljs.COMMENT('/\\*\\*', '\\*/', {
      relevance: 0,
      contains: [{
        // eat up @'s in emails to prevent them to be recognized as doctags
        begin: /\w+@/,
        relevance: 0
      }, {
        className: 'doctag',
        begin: '@[A-Za-z]+'
      }]
    }), hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, {
      className: 'class',
      beginKeywords: 'class interface',
      end: /[{;=]/,
      excludeEnd: true,
      keywords: 'class interface',
      illegal: /[:"\[\]]/,
      contains: [{
        beginKeywords: 'extends implements'
      }, hljs.UNDERSCORE_TITLE_MODE]
    }, {
      // Expression keywords prevent 'keyword Name(...)' from being
      // recognized as a function definition
      beginKeywords: 'new throw return else',
      relevance: 0
    }, {
      className: 'function',
      begin: '(' + GENERIC_IDENT_RE + '\\s+)+' + hljs.UNDERSCORE_IDENT_RE + '\\s*\\(',
      returnBegin: true,
      end: /[{;=]/,
      excludeEnd: true,
      keywords: KEYWORDS,
      contains: [{
        begin: hljs.UNDERSCORE_IDENT_RE + '\\s*\\(',
        returnBegin: true,
        relevance: 0,
        contains: [hljs.UNDERSCORE_TITLE_MODE]
      }, {
        className: 'params',
        begin: /\(/,
        end: /\)/,
        keywords: KEYWORDS,
        relevance: 0,
        contains: [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, hljs.C_NUMBER_MODE, hljs.C_BLOCK_COMMENT_MODE]
      }, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE]
    }, JAVA_NUMBER_MODE, {
      className: 'meta',
      begin: '@[A-Za-z]+'
    }]
  };
};

/***/ }),

/***/ "./resources/assets/js/components/MDEditor/assets/js/hightlight/languages/javascript.js":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/assets/js/hightlight/languages/javascript.js ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = function (hljs) {
  var IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
  var KEYWORDS = {
    keyword: 'in of if for while finally var new function do return void else break catch ' + 'instanceof with throw case default try this switch continue typeof delete ' + 'let yield const export super debugger as async await static ' + // ECMAScript 6 modules import
    'import from as',
    literal: 'true false null undefined NaN Infinity',
    built_in: 'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' + 'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' + 'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' + 'TypeError URIError Number Math Date String RegExp Array Float32Array ' + 'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' + 'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' + 'module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect ' + 'Promise'
  };
  var NUMBER = {
    className: 'number',
    variants: [{
      begin: '\\b(0[bB][01]+)'
    }, {
      begin: '\\b(0[oO][0-7]+)'
    }, {
      begin: hljs.C_NUMBER_RE
    }],
    relevance: 0
  };
  var SUBST = {
    className: 'subst',
    begin: '\\$\\{',
    end: '\\}',
    keywords: KEYWORDS,
    contains: [] // defined later

  };
  var HTML_TEMPLATE = {
    begin: 'html`',
    end: '',
    starts: {
      end: '`',
      returnEnd: false,
      contains: [hljs.BACKSLASH_ESCAPE, SUBST],
      subLanguage: 'xml'
    }
  };
  var CSS_TEMPLATE = {
    begin: 'css`',
    end: '',
    starts: {
      end: '`',
      returnEnd: false,
      contains: [hljs.BACKSLASH_ESCAPE, SUBST],
      subLanguage: 'css'
    }
  };
  var TEMPLATE_STRING = {
    className: 'string',
    begin: '`',
    end: '`',
    contains: [hljs.BACKSLASH_ESCAPE, SUBST]
  };
  SUBST.contains = [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, HTML_TEMPLATE, CSS_TEMPLATE, TEMPLATE_STRING, NUMBER, hljs.REGEXP_MODE];
  var PARAMS_CONTAINS = SUBST.contains.concat([hljs.C_BLOCK_COMMENT_MODE, hljs.C_LINE_COMMENT_MODE]);
  return {
    aliases: ['js', 'jsx'],
    keywords: KEYWORDS,
    contains: [{
      className: 'meta',
      relevance: 10,
      begin: /^\s*['"]use (strict|asm)['"]/
    }, {
      className: 'meta',
      begin: /^#!/,
      end: /$/
    }, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, HTML_TEMPLATE, CSS_TEMPLATE, TEMPLATE_STRING, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, NUMBER, {
      // object attr container
      begin: /[{,]\s*/,
      relevance: 0,
      contains: [{
        begin: IDENT_RE + '\\s*:',
        returnBegin: true,
        relevance: 0,
        contains: [{
          className: 'attr',
          begin: IDENT_RE,
          relevance: 0
        }]
      }]
    }, {
      // "value" container
      begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
      keywords: 'return throw case',
      contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.REGEXP_MODE, {
        className: 'function',
        begin: '(\\(.*?\\)|' + IDENT_RE + ')\\s*=>',
        returnBegin: true,
        end: '\\s*=>',
        contains: [{
          className: 'params',
          variants: [{
            begin: IDENT_RE
          }, {
            begin: /\(\s*\)/
          }, {
            begin: /\(/,
            end: /\)/,
            excludeBegin: true,
            excludeEnd: true,
            keywords: KEYWORDS,
            contains: PARAMS_CONTAINS
          }]
        }]
      }, {
        className: '',
        begin: /\s/,
        end: /\s*/,
        skip: true
      }, {
        // E4X / JSX
        begin: /</,
        end: /(\/[A-Za-z0-9\\._:-]+|[A-Za-z0-9\\._:-]+\/)>/,
        subLanguage: 'xml',
        contains: [{
          begin: /<[A-Za-z0-9\\._:-]+\s*\/>/,
          skip: true
        }, {
          begin: /<[A-Za-z0-9\\._:-]+/,
          end: /(\/[A-Za-z0-9\\._:-]+|[A-Za-z0-9\\._:-]+\/)>/,
          skip: true,
          contains: [{
            begin: /<[A-Za-z0-9\\._:-]+\s*\/>/,
            skip: true
          }, 'self']
        }]
      }],
      relevance: 0
    }, {
      className: 'function',
      beginKeywords: 'function',
      end: /\{/,
      excludeEnd: true,
      contains: [hljs.inherit(hljs.TITLE_MODE, {
        begin: IDENT_RE
      }), {
        className: 'params',
        begin: /\(/,
        end: /\)/,
        excludeBegin: true,
        excludeEnd: true,
        contains: PARAMS_CONTAINS
      }],
      illegal: /\[|%/
    }, {
      begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`

    }, hljs.METHOD_GUARD, {
      // ES6 class
      className: 'class',
      beginKeywords: 'class',
      end: /[{;=]/,
      excludeEnd: true,
      illegal: /[:"\[\]]/,
      contains: [{
        beginKeywords: 'extends'
      }, hljs.UNDERSCORE_TITLE_MODE]
    }, {
      beginKeywords: 'constructor get set',
      end: /\{/,
      excludeEnd: true
    }],
    illegal: /#(?!!)/
  };
};

/***/ }),

/***/ "./resources/assets/js/components/MDEditor/assets/js/hightlight/languages/less.js":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/assets/js/hightlight/languages/less.js ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = function (hljs) {
  var IDENT_RE = '[\\w-]+'; // yes, Less identifiers may begin with a digit

  var INTERP_IDENT_RE = '(' + IDENT_RE + '|@{' + IDENT_RE + '})';
  /* Generic Modes */

  var RULES = [],
      VALUE = []; // forward def. for recursive modes

  var STRING_MODE = function STRING_MODE(c) {
    return {
      // Less strings are not multiline (also include '~' for more consistent coloring of "escaped" strings)
      className: 'string',
      begin: '~?' + c + '.*?' + c
    };
  };

  var IDENT_MODE = function IDENT_MODE(name, begin, relevance) {
    return {
      className: name,
      begin: begin,
      relevance: relevance
    };
  };

  var PARENS_MODE = {
    // used only to properly balance nested parens inside mixin call, def. arg list
    begin: '\\(',
    end: '\\)',
    contains: VALUE,
    relevance: 0
  }; // generic Less highlighter (used almost everywhere except selectors):

  VALUE.push(hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, STRING_MODE("'"), STRING_MODE('"'), hljs.CSS_NUMBER_MODE, // fixme: it does not include dot for numbers like .5em :(
  {
    begin: '(url|data-uri)\\(',
    starts: {
      className: 'string',
      end: '[\\)\\n]',
      excludeEnd: true
    }
  }, IDENT_MODE('number', '#[0-9A-Fa-f]+\\b'), PARENS_MODE, IDENT_MODE('variable', '@@?' + IDENT_RE, 10), IDENT_MODE('variable', '@{' + IDENT_RE + '}'), IDENT_MODE('built_in', '~?`[^`]*?`'), // inline javascript (or whatever host language) *multiline* string
  {
    // @media features (it’s here to not duplicate things in AT_RULE_MODE with extra PARENS_MODE overriding):
    className: 'attribute',
    begin: IDENT_RE + '\\s*:',
    end: ':',
    returnBegin: true,
    excludeEnd: true
  }, {
    className: 'meta',
    begin: '!important'
  });
  var VALUE_WITH_RULESETS = VALUE.concat({
    begin: '{',
    end: '}',
    contains: RULES
  });
  var MIXIN_GUARD_MODE = {
    beginKeywords: 'when',
    endsWithParent: true,
    contains: [{
      beginKeywords: 'and not'
    }].concat(VALUE) // using this form to override VALUE’s 'function' match

  };
  /* Rule-Level Modes */

  var RULE_MODE = {
    begin: INTERP_IDENT_RE + '\\s*:',
    returnBegin: true,
    end: '[;}]',
    relevance: 0,
    contains: [{
      className: 'attribute',
      begin: INTERP_IDENT_RE,
      end: ':',
      excludeEnd: true,
      starts: {
        endsWithParent: true,
        illegal: '[<=$]',
        relevance: 0,
        contains: VALUE
      }
    }]
  };
  var AT_RULE_MODE = {
    className: 'keyword',
    begin: '@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b',
    starts: {
      end: '[;{}]',
      returnEnd: true,
      contains: VALUE,
      relevance: 0
    }
  }; // variable definitions and calls

  var VAR_RULE_MODE = {
    className: 'variable',
    variants: [// using more strict pattern for higher relevance to increase chances of Less detection.
    // this is *the only* Less specific statement used in most of the sources, so...
    // (we’ll still often loose to the css-parser unless there's '//' comment,
    // simply because 1 variable just can't beat 99 properties :)
    {
      begin: '@' + IDENT_RE + '\\s*:',
      relevance: 15
    }, {
      begin: '@' + IDENT_RE
    }],
    starts: {
      end: '[;}]',
      returnEnd: true,
      contains: VALUE_WITH_RULESETS
    }
  };
  var SELECTOR_MODE = {
    // first parse unambiguous selectors (i.e. those not starting with tag)
    // then fall into the scary lookahead-discriminator variant.
    // this mode also handles mixin definitions and calls
    variants: [{
      begin: '[\\.#:&\\[>]',
      end: '[;{}]' // mixin calls end with ';'

    }, {
      begin: INTERP_IDENT_RE,
      end: '{'
    }],
    returnBegin: true,
    returnEnd: true,
    illegal: '[<=\'$"]',
    relevance: 0,
    contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, MIXIN_GUARD_MODE, IDENT_MODE('keyword', 'all\\b'), IDENT_MODE('variable', '@{' + IDENT_RE + '}'), // otherwise it’s identified as tag
    IDENT_MODE('selector-tag', INTERP_IDENT_RE + '%?', 0), // '%' for more consistent coloring of @keyframes "tags"
    IDENT_MODE('selector-id', '#' + INTERP_IDENT_RE), IDENT_MODE('selector-class', '\\.' + INTERP_IDENT_RE, 0), IDENT_MODE('selector-tag', '&', 0), {
      className: 'selector-attr',
      begin: '\\[',
      end: '\\]'
    }, {
      className: 'selector-pseudo',
      begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
    }, {
      begin: '\\(',
      end: '\\)',
      contains: VALUE_WITH_RULESETS
    }, // argument list of parametric mixins
    {
      begin: '!important'
    } // eat !important after mixin call or it will be colored as tag
    ]
  };
  RULES.push(hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, AT_RULE_MODE, VAR_RULE_MODE, RULE_MODE, SELECTOR_MODE);
  return {
    case_insensitive: true,
    illegal: '[=>\'/<($"]',
    contains: RULES
  };
};

/***/ }),

/***/ "./resources/assets/js/components/MDEditor/assets/js/hightlight/languages/markdown.js":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/assets/js/hightlight/languages/markdown.js ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = function (hljs) {
  return {
    aliases: ['md', 'mkdown', 'mkd'],
    contains: [// highlight headers
    {
      className: 'section',
      variants: [{
        begin: '^#{1,6}',
        end: '$'
      }, {
        begin: '^.+?\\n[=-]{2,}$'
      }]
    }, // inline html
    {
      begin: '<',
      end: '>',
      subLanguage: 'xml',
      relevance: 0
    }, // lists (indicators only)
    {
      className: 'bullet',
      begin: '^\\s*([*+-]|(\\d+\\.))\\s+'
    }, // strong segments
    {
      className: 'strong',
      begin: '[*_]{2}.+?[*_]{2}'
    }, // emphasis segments
    {
      className: 'emphasis',
      variants: [{
        begin: '\\*.+?\\*'
      }, {
        begin: '_.+?_',
        relevance: 0
      }]
    }, // blockquotes
    {
      className: 'quote',
      begin: '^>\\s+',
      end: '$'
    }, // code snippets
    {
      className: 'code',
      variants: [{
        begin: '^```\w*\s*$',
        end: '^```\s*$'
      }, {
        begin: '`.+?`'
      }, {
        begin: '^( {4}|\t)',
        end: '$',
        relevance: 0
      }]
    }, // horizontal rules
    {
      begin: '^[-\\*]{3,}',
      end: '$'
    }, // using links - title and link
    {
      begin: '\\[.+?\\][\\(\\[].*?[\\)\\]]',
      returnBegin: true,
      contains: [{
        className: 'string',
        begin: '\\[',
        end: '\\]',
        excludeBegin: true,
        returnEnd: true,
        relevance: 0
      }, {
        className: 'link',
        begin: '\\]\\(',
        end: '\\)',
        excludeBegin: true,
        excludeEnd: true
      }, {
        className: 'symbol',
        begin: '\\]\\[',
        end: '\\]',
        excludeBegin: true,
        excludeEnd: true
      }],
      relevance: 10
    }, {
      begin: /^\[[^\n]+\]:/,
      returnBegin: true,
      contains: [{
        className: 'symbol',
        begin: /\[/,
        end: /\]/,
        excludeBegin: true,
        excludeEnd: true
      }, {
        className: 'link',
        begin: /:\s*/,
        end: /$/,
        excludeBegin: true
      }]
    }]
  };
};

/***/ }),

/***/ "./resources/assets/js/components/MDEditor/assets/js/hightlight/languages/php.js":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/assets/js/hightlight/languages/php.js ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = function (hljs) {
  var VARIABLE = {
    begin: '\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*'
  };
  var PREPROCESSOR = {
    className: 'meta',
    begin: /<\?(php)?|\?>/
  };
  var STRING = {
    className: 'string',
    contains: [hljs.BACKSLASH_ESCAPE, PREPROCESSOR],
    variants: [{
      begin: 'b"',
      end: '"'
    }, {
      begin: 'b\'',
      end: '\''
    }, hljs.inherit(hljs.APOS_STRING_MODE, {
      illegal: null
    }), hljs.inherit(hljs.QUOTE_STRING_MODE, {
      illegal: null
    })]
  };
  var NUMBER = {
    variants: [hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE]
  };
  return {
    aliases: ['php', 'php3', 'php4', 'php5', 'php6', 'php7'],
    case_insensitive: true,
    keywords: 'and include_once list abstract global private echo interface as static endswitch ' + 'array null if endwhile or const for endforeach self var while isset public ' + 'protected exit foreach throw elseif include __FILE__ empty require_once do xor ' + 'return parent clone use __CLASS__ __LINE__ else break print eval new ' + 'catch __METHOD__ case exception default die require __FUNCTION__ ' + 'enddeclare final try switch continue endfor endif declare unset true false ' + 'trait goto instanceof insteadof __DIR__ __NAMESPACE__ ' + 'yield finally',
    contains: [hljs.HASH_COMMENT_MODE, hljs.COMMENT('//', '$', {
      contains: [PREPROCESSOR]
    }), hljs.COMMENT('/\\*', '\\*/', {
      contains: [{
        className: 'doctag',
        begin: '@[A-Za-z]+'
      }]
    }), hljs.COMMENT('__halt_compiler.+?;', false, {
      endsWithParent: true,
      keywords: '__halt_compiler',
      lexemes: hljs.UNDERSCORE_IDENT_RE
    }), {
      className: 'string',
      begin: /<<<['"]?\w+['"]?$/,
      end: /^\w+;?$/,
      contains: [hljs.BACKSLASH_ESCAPE, {
        className: 'subst',
        variants: [{
          begin: /\$\w+/
        }, {
          begin: /\{\$/,
          end: /\}/
        }]
      }]
    }, PREPROCESSOR, {
      className: 'keyword',
      begin: /\$this\b/
    }, VARIABLE, {
      // swallow composed identifiers to avoid parsing them as keywords
      begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
    }, {
      className: 'function',
      beginKeywords: 'function',
      end: /[;{]/,
      excludeEnd: true,
      illegal: '\\$|\\[|%',
      contains: [hljs.UNDERSCORE_TITLE_MODE, {
        className: 'params',
        begin: '\\(',
        end: '\\)',
        contains: ['self', VARIABLE, hljs.C_BLOCK_COMMENT_MODE, STRING, NUMBER]
      }]
    }, {
      className: 'class',
      beginKeywords: 'class interface',
      end: '{',
      excludeEnd: true,
      illegal: /[:\(\$"]/,
      contains: [{
        beginKeywords: 'extends implements'
      }, hljs.UNDERSCORE_TITLE_MODE]
    }, {
      beginKeywords: 'namespace',
      end: ';',
      illegal: /[\.']/,
      contains: [hljs.UNDERSCORE_TITLE_MODE]
    }, {
      beginKeywords: 'use',
      end: ';',
      contains: [hljs.UNDERSCORE_TITLE_MODE]
    }, {
      begin: '=>' // No markup, just a relevance booster

    }, STRING, NUMBER]
  };
};

/***/ }),

/***/ "./resources/assets/js/components/MDEditor/assets/js/hightlight/languages/python.js":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/assets/js/hightlight/languages/python.js ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = function (hljs) {
  var KEYWORDS = {
    keyword: 'and elif is global as in if from raise for except finally print import pass return ' + 'exec else break not with class assert yield try while continue del or def lambda ' + 'async await nonlocal|10',
    built_in: 'Ellipsis NotImplemented',
    literal: 'False None True'
  };
  var PROMPT = {
    className: 'meta',
    begin: /^(>>>|\.\.\.) /
  };
  var SUBST = {
    className: 'subst',
    begin: /\{/,
    end: /\}/,
    keywords: KEYWORDS,
    illegal: /#/
  };
  var STRING = {
    className: 'string',
    contains: [hljs.BACKSLASH_ESCAPE],
    variants: [{
      begin: /(u|b)?r?'''/,
      end: /'''/,
      contains: [hljs.BACKSLASH_ESCAPE, PROMPT],
      relevance: 10
    }, {
      begin: /(u|b)?r?"""/,
      end: /"""/,
      contains: [hljs.BACKSLASH_ESCAPE, PROMPT],
      relevance: 10
    }, {
      begin: /(fr|rf|f)'''/,
      end: /'''/,
      contains: [hljs.BACKSLASH_ESCAPE, PROMPT, SUBST]
    }, {
      begin: /(fr|rf|f)"""/,
      end: /"""/,
      contains: [hljs.BACKSLASH_ESCAPE, PROMPT, SUBST]
    }, {
      begin: /(u|r|ur)'/,
      end: /'/,
      relevance: 10
    }, {
      begin: /(u|r|ur)"/,
      end: /"/,
      relevance: 10
    }, {
      begin: /(b|br)'/,
      end: /'/
    }, {
      begin: /(b|br)"/,
      end: /"/
    }, {
      begin: /(fr|rf|f)'/,
      end: /'/,
      contains: [hljs.BACKSLASH_ESCAPE, SUBST]
    }, {
      begin: /(fr|rf|f)"/,
      end: /"/,
      contains: [hljs.BACKSLASH_ESCAPE, SUBST]
    }, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE]
  };
  var NUMBER = {
    className: 'number',
    relevance: 0,
    variants: [{
      begin: hljs.BINARY_NUMBER_RE + '[lLjJ]?'
    }, {
      begin: '\\b(0o[0-7]+)[lLjJ]?'
    }, {
      begin: hljs.C_NUMBER_RE + '[lLjJ]?'
    }]
  };
  var PARAMS = {
    className: 'params',
    begin: /\(/,
    end: /\)/,
    contains: ['self', PROMPT, NUMBER, STRING]
  };
  SUBST.contains = [STRING, NUMBER, PROMPT];
  return {
    aliases: ['py', 'gyp', 'ipython'],
    keywords: KEYWORDS,
    illegal: /(<\/|->|\?)|=>/,
    contains: [PROMPT, NUMBER, STRING, hljs.HASH_COMMENT_MODE, {
      variants: [{
        className: 'function',
        beginKeywords: 'def'
      }, {
        className: 'class',
        beginKeywords: 'class'
      }],
      end: /:/,
      illegal: /[${=;\n,]/,
      contains: [hljs.UNDERSCORE_TITLE_MODE, PARAMS, {
        begin: /->/,
        endsWithParent: true,
        keywords: 'None'
      }]
    }, {
      className: 'meta',
      begin: /^[\t ]*@/,
      end: /$/
    }, {
      begin: /\b(print|exec)\(/ // don’t highlight keywords-turned-functions in Python 3

    }]
  };
};

/***/ }),

/***/ "./resources/assets/js/components/MDEditor/assets/js/hightlight/languages/typescript.js":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/assets/js/hightlight/languages/typescript.js ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = function (hljs) {
  var JS_IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
  var KEYWORDS = {
    keyword: 'in if for while finally var new function do return void else break catch ' + 'instanceof with throw case default try this switch continue typeof delete ' + 'let yield const class public private protected get set super ' + 'static implements enum export import declare type namespace abstract ' + 'as from extends async await',
    literal: 'true false null undefined NaN Infinity',
    built_in: 'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' + 'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' + 'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' + 'TypeError URIError Number Math Date String RegExp Array Float32Array ' + 'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' + 'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' + 'module console window document any number boolean string void Promise'
  };
  var DECORATOR = {
    className: 'meta',
    begin: '@' + JS_IDENT_RE
  };
  var ARGS = {
    begin: '\\(',
    end: /\)/,
    keywords: KEYWORDS,
    contains: ['self', hljs.QUOTE_STRING_MODE, hljs.APOS_STRING_MODE, hljs.NUMBER_MODE]
  };
  var PARAMS = {
    className: 'params',
    begin: /\(/,
    end: /\)/,
    excludeBegin: true,
    excludeEnd: true,
    keywords: KEYWORDS,
    contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, DECORATOR, ARGS]
  };
  var NUMBER = {
    className: 'number',
    variants: [{
      begin: '\\b(0[bB][01]+)'
    }, {
      begin: '\\b(0[oO][0-7]+)'
    }, {
      begin: hljs.C_NUMBER_RE
    }],
    relevance: 0
  };
  var SUBST = {
    className: 'subst',
    begin: '\\$\\{',
    end: '\\}',
    keywords: KEYWORDS,
    contains: [] // defined later

  };
  var HTML_TEMPLATE = {
    begin: 'html`',
    end: '',
    starts: {
      end: '`',
      returnEnd: false,
      contains: [hljs.BACKSLASH_ESCAPE, SUBST],
      subLanguage: 'xml'
    }
  };
  var CSS_TEMPLATE = {
    begin: 'css`',
    end: '',
    starts: {
      end: '`',
      returnEnd: false,
      contains: [hljs.BACKSLASH_ESCAPE, SUBST],
      subLanguage: 'css'
    }
  };
  var TEMPLATE_STRING = {
    className: 'string',
    begin: '`',
    end: '`',
    contains: [hljs.BACKSLASH_ESCAPE, SUBST]
  };
  SUBST.contains = [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, HTML_TEMPLATE, CSS_TEMPLATE, TEMPLATE_STRING, NUMBER, hljs.REGEXP_MODE];
  return {
    aliases: ['ts'],
    keywords: KEYWORDS,
    contains: [{
      className: 'meta',
      begin: /^\s*['"]use strict['"]/
    }, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, HTML_TEMPLATE, CSS_TEMPLATE, TEMPLATE_STRING, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, NUMBER, {
      // "value" container
      begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
      keywords: 'return throw case',
      contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.REGEXP_MODE, {
        className: 'function',
        begin: '(\\(.*?\\)|' + hljs.IDENT_RE + ')\\s*=>',
        returnBegin: true,
        end: '\\s*=>',
        contains: [{
          className: 'params',
          variants: [{
            begin: hljs.IDENT_RE
          }, {
            begin: /\(\s*\)/
          }, {
            begin: /\(/,
            end: /\)/,
            excludeBegin: true,
            excludeEnd: true,
            keywords: KEYWORDS,
            contains: ['self', hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE]
          }]
        }]
      }],
      relevance: 0
    }, {
      className: 'function',
      begin: 'function',
      end: /[\{;]/,
      excludeEnd: true,
      keywords: KEYWORDS,
      contains: ['self', hljs.inherit(hljs.TITLE_MODE, {
        begin: JS_IDENT_RE
      }), PARAMS],
      illegal: /%/,
      relevance: 0 // () => {} is more typical in TypeScript

    }, {
      beginKeywords: 'constructor',
      end: /\{/,
      excludeEnd: true,
      contains: ['self', PARAMS]
    }, {
      // prevent references like module.id from being higlighted as module definitions
      begin: /module\./,
      keywords: {
        built_in: 'module'
      },
      relevance: 0
    }, {
      beginKeywords: 'module',
      end: /\{/,
      excludeEnd: true
    }, {
      beginKeywords: 'interface',
      end: /\{/,
      excludeEnd: true,
      keywords: 'interface extends'
    }, {
      begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`

    }, {
      begin: '\\.' + hljs.IDENT_RE,
      relevance: 0 // hack: prevents detection of keywords after dots

    }, DECORATOR, ARGS]
  };
};

/***/ }),

/***/ "./resources/assets/js/components/MDEditor/assets/js/hightlight/languages/xml.js":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/assets/js/hightlight/languages/xml.js ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = function (hljs) {
  var XML_IDENT_RE = '[A-Za-z0-9\\._:-]+';
  var TAG_INTERNALS = {
    endsWithParent: true,
    illegal: /</,
    relevance: 0,
    contains: [{
      className: 'attr',
      begin: XML_IDENT_RE,
      relevance: 0
    }, {
      begin: /=\s*/,
      relevance: 0,
      contains: [{
        className: 'string',
        endsParent: true,
        variants: [{
          begin: /"/,
          end: /"/
        }, {
          begin: /'/,
          end: /'/
        }, {
          begin: /[^\s"'=<>`]+/
        }]
      }]
    }]
  };
  return {
    aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist', 'wsf'],
    case_insensitive: true,
    contains: [{
      className: 'meta',
      begin: '<!DOCTYPE',
      end: '>',
      relevance: 10,
      contains: [{
        begin: '\\[',
        end: '\\]'
      }]
    }, hljs.COMMENT('<!--', '-->', {
      relevance: 10
    }), {
      begin: '<\\!\\[CDATA\\[',
      end: '\\]\\]>',
      relevance: 10
    }, {
      className: 'meta',
      begin: /<\?xml/,
      end: /\?>/,
      relevance: 10
    }, {
      begin: /<\?(php)?/,
      end: /\?>/,
      subLanguage: 'php',
      contains: [// We don't want the php closing tag ?> to close the PHP block when
      // inside any of the following blocks:
      {
        begin: '/\\*',
        end: '\\*/',
        skip: true
      }, {
        begin: 'b"',
        end: '"',
        skip: true
      }, {
        begin: 'b\'',
        end: '\'',
        skip: true
      }, hljs.inherit(hljs.APOS_STRING_MODE, {
        illegal: null,
        className: null,
        contains: null,
        skip: true
      }), hljs.inherit(hljs.QUOTE_STRING_MODE, {
        illegal: null,
        className: null,
        contains: null,
        skip: true
      })]
    }, {
      className: 'tag',

      /*
      The lookahead pattern (?=...) ensures that 'begin' only matches
      '<style' as a single word, followed by a whitespace or an
      ending braket. The '$' is needed for the lexeme to be recognized
      by hljs.subMode() that tests lexemes outside the stream.
      */
      begin: '<style(?=\\s|>|$)',
      end: '>',
      keywords: {
        name: 'style'
      },
      contains: [TAG_INTERNALS],
      starts: {
        end: '</style>',
        returnEnd: true,
        subLanguage: ['css', 'xml']
      }
    }, {
      className: 'tag',
      // See the comment in the <style tag about the lookahead pattern
      begin: '<script(?=\\s|>|$)',
      end: '>',
      keywords: {
        name: 'script'
      },
      contains: [TAG_INTERNALS],
      starts: {
        end: '\<\/script\>',
        returnEnd: true,
        subLanguage: ['actionscript', 'javascript', 'handlebars', 'xml', 'vbscript']
      }
    }, {
      className: 'tag',
      begin: '</?',
      end: '/?>',
      contains: [{
        className: 'name',
        begin: /[^\/><\s]+/,
        relevance: 0
      }, TAG_INTERNALS]
    }]
  };
};

/***/ }),

/***/ "./resources/assets/js/components/MDEditor/assets/js/marked/createToc.js":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/assets/js/marked/createToc.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  add: function add(text, level) {
    var anchor = "toc".concat(level).concat(++this.index);
    var item = {
      anchor: anchor,
      level: level,
      text: text
    };
    var items = this.tocItems;

    if (item.level <= 5) {
      items.push(item);
    }

    return anchor;
  },
  reset: function reset() {
    this.tocItems = [];
    this.index = 0;
  },
  tocItems: [],
  index: 0
});

/***/ }),

/***/ "./resources/assets/js/components/MDEditor/assets/js/marked/index.js":
/*!***************************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/assets/js/marked/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createToc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createToc */ "./resources/assets/js/components/MDEditor/assets/js/marked/createToc.js");


if (typeof window._goTocAction === "undefined") {
  window._goTocAction = function (e, level, anchor) {
    var container = $A(e).parents(".markdown-preview");

    if (container) {
      var inner = container.find("h" + level + '[toc-id="' + anchor + '"]');

      if (inner) {
        container.animate({
          scrollTop: inner.offset().top - container.offset().top + container.scrollTop()
        });
      }
    }
  };
}

var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: /^ {0,3}(`{3,}|~{3,})([^`~\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
  hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: '^ {0,3}(?:' // optional indentation
  + '<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
  + '|comment[^\\n]*(\\n+|$)' // (2)
  + '|<\\?[\\s\\S]*?\\?>\\n*' // (3)
  + '|<![A-Z][\\s\\S]*?>\\n*' // (4)
  + '|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*' // (5)
  + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)' // (6)
  + '|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) open tag
  + '|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) closing tag
  + ')',
  def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
  nptable: noop,
  table: noop,
  lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original src spec:
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
  text: /^[^\n]+/
};
block._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def).replace('label', block._label).replace('title', block._title).getRegex();
block.bullet = /(?:[*+-]|\d{1,9}\.)/;
block.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/;
block.item = edit(block.item, 'gm').replace(/bull/g, block.bullet).getRegex();
block.list = edit(block.list).replace(/bull/g, block.bullet).replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))').replace('def', '\\n+(?=' + block.def.source + ')').getRegex();
block._tag = 'address|article|aside|base|basefont|blockquote|body|caption' + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption' + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe' + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option' + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr' + '|track|ul';
block._comment = /<!--(?!-?>)[\s\S]*?-->/;
block.html = edit(block.html, 'i').replace('comment', block._comment).replace('tag', block._tag).replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
block.paragraph = edit(block._paragraph).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} +').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
.replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}|~{3,})[^`\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
.getRegex();
block.blockquote = edit(block.blockquote).replace('paragraph', block.paragraph).getRegex();
/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);
/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
  table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/
});
/**
 * Pedantic grammar (original John Gruber's loose src specification)
 */

block.pedantic = merge({}, block.normal, {
  html: edit('^ *(?:comment *(?:\\n|\\s*$)' + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
  + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))').replace('comment', block._comment).replace(/tag/g, '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub' + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)' + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b').getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
  fences: noop,
  // fences not supported
  paragraph: edit(block.normal._paragraph).replace('hr', block.hr).replace('heading', ' *#{1,6} *[^\n]').replace('lheading', block.lheading).replace('blockquote', ' {0,3}>').replace('|fences', '').replace('|list', '').replace('|html', '').getRegex()
});
/**
 * Block Lexer
 */

function Lexer(options) {
  this.tokens = [];
  this.tokens.links = Object.create(null);
  this.options = options || index.defaults;
  this.rules = block.normal;

  if (this.options.pedantic) {
    this.rules = block.pedantic;
  } else if (this.options.gfm) {
    this.rules = block.gfm;
  }
}
/**
 * Expose Block Rules
 */


Lexer.rules = block;
/**
 * Static Lex Method
 */

Lexer.lex = function (src, options) {
  var lexer = new Lexer(options);
  return lexer.lex(src);
};
/**
 * Preprocessing
 */


Lexer.prototype.lex = function (src) {
  src = src.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ').replace(/\u00a0/g, ' ').replace(/\u2424/g, '\n');
  return this.token(src, true);
};
/**
 * Lexing
 */


Lexer.prototype.token = function (src, top) {
  src = src.replace(/^ +$/gm, '');
  var next, loose, cap, bull, b, item, listStart, listItems, t, space, i, tag, l, isordered, istask, ischecked;

  while (src) {
    // newline
    if (cap = this.rules.newline.exec(src)) {
      src = src.substring(cap[0].length);

      if (cap[0].length > 1) {
        this.tokens.push({
          type: 'space'
        });
      }
    } // code


    if (cap = this.rules.code.exec(src)) {
      var lastToken = this.tokens[this.tokens.length - 1];
      src = src.substring(cap[0].length); // An indented code block cannot interrupt a paragraph.

      if (lastToken && lastToken.type === 'paragraph') {
        lastToken.text += '\n' + cap[0].trimRight();
      } else {
        cap = cap[0].replace(/^ {4}/gm, '');
        this.tokens.push({
          type: 'code',
          codeBlockStyle: 'indented',
          text: !this.options.pedantic ? rtrim(cap, '\n') : cap
        });
      }

      continue;
    } // fences


    if (cap = this.rules.fences.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'code',
        lang: cap[2] ? cap[2].trim() : cap[2],
        text: cap[3] || ''
      });
      continue;
    } // heading


    if (cap = this.rules.heading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[1].length,
        text: cap[2]
      });
      continue;
    } // table no leading pipe (gfm)


    if (cap = this.rules.nptable.exec(src)) {
      item = {
        type: 'table',
        header: splitCells(cap[1].replace(/^ *| *\| *$/g, '')),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
      };

      if (item.header.length === item.align.length) {
        src = src.substring(cap[0].length);

        for (i = 0; i < item.align.length; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = 'right';
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = 'center';
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = 'left';
          } else {
            item.align[i] = null;
          }
        }

        for (i = 0; i < item.cells.length; i++) {
          item.cells[i] = splitCells(item.cells[i], item.header.length);
        }

        this.tokens.push(item);
        continue;
      }
    } // hr


    if (cap = this.rules.hr.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'hr'
      });
      continue;
    } // blockquote


    if (cap = this.rules.blockquote.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'blockquote_start'
      });
      cap = cap[0].replace(/^ *> ?/gm, ''); // Pass `top` to keep the current
      // "toplevel" state. This is exactly
      // how src.pl works.

      this.token(cap, top);
      this.tokens.push({
        type: 'blockquote_end'
      });
      continue;
    } // list


    if (cap = this.rules.list.exec(src)) {
      src = src.substring(cap[0].length);
      bull = cap[2];
      isordered = bull.length > 1;
      listStart = {
        type: 'list_start',
        ordered: isordered,
        start: isordered ? +bull : '',
        loose: false
      };
      this.tokens.push(listStart); // Get each top-level item.

      cap = cap[0].match(this.rules.item);
      listItems = [];
      next = false;
      l = cap.length;
      i = 0;

      for (; i < l; i++) {
        item = cap[i]; // Remove the list item's bullet
        // so it is seen as the next token.

        space = item.length;
        item = item.replace(/^ *([*+-]|\d+\.) */, ''); // Outdent whatever the
        // list item contains. Hacky.

        if (~item.indexOf('\n ')) {
          space -= item.length;
          item = !this.options.pedantic ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '') : item.replace(/^ {1,4}/gm, '');
        } // Determine whether the next list item belongs here.
        // Backpedal if it does not belong in this list.


        if (i !== l - 1) {
          b = block.bullet.exec(cap[i + 1])[0];

          if (bull.length > 1 ? b.length === 1 : b.length > 1 || this.options.smartLists && b !== bull) {
            src = cap.slice(i + 1).join('\n') + src;
            i = l - 1;
          }
        } // Determine whether item is loose or not.
        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
        // for discount behavior.


        loose = next || /\n\n(?!\s*$)/.test(item);

        if (i !== l - 1) {
          next = item.charAt(item.length - 1) === '\n';
          if (!loose) loose = next;
        }

        if (loose) {
          listStart.loose = true;
        } // Check for task list items


        istask = /^\[[ xX]\] /.test(item);
        ischecked = undefined;

        if (istask) {
          ischecked = item[1] !== ' ';
          item = item.replace(/^\[[ xX]\] +/, '');
        }

        t = {
          type: 'list_item_start',
          task: istask,
          checked: ischecked,
          loose: loose
        };
        listItems.push(t);
        this.tokens.push(t); // Recurse.

        this.token(item, false);
        this.tokens.push({
          type: 'list_item_end'
        });
      }

      if (listStart.loose) {
        l = listItems.length;
        i = 0;

        for (; i < l; i++) {
          listItems[i].loose = true;
        }
      }

      this.tokens.push({
        type: 'list_end'
      });
      continue;
    } // html


    if (cap = this.rules.html.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: this.options.sanitize ? 'paragraph' : 'html',
        pre: !this.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0]
      });
      continue;
    } // def


    if (top && (cap = this.rules.def.exec(src))) {
      src = src.substring(cap[0].length);
      if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
      tag = cap[1].toLowerCase().replace(/\s+/g, ' ');

      if (!this.tokens.links[tag]) {
        this.tokens.links[tag] = {
          href: cap[2],
          title: cap[3]
        };
      }

      continue;
    } // table (gfm)


    if (cap = this.rules.table.exec(src)) {
      item = {
        type: 'table',
        header: splitCells(cap[1].replace(/^ *| *\| *$/g, '')),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
      };

      if (item.header.length === item.align.length) {
        src = src.substring(cap[0].length);

        for (i = 0; i < item.align.length; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = 'right';
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = 'center';
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = 'left';
          } else {
            item.align[i] = null;
          }
        }

        for (i = 0; i < item.cells.length; i++) {
          item.cells[i] = splitCells(item.cells[i].replace(/^ *\| *| *\| *$/g, ''), item.header.length);
        }

        this.tokens.push(item);
        continue;
      }
    } // lheading


    if (cap = this.rules.lheading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[2].charAt(0) === '=' ? 1 : 2,
        text: cap[1]
      });
      continue;
    } // top-level paragraph


    if (top && (cap = this.rules.paragraph.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'paragraph',
        text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1]
      });
      continue;
    }

    if (cap = this.rules.text.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'text',
        text: cap[0]
      });
      continue;
    }

    if (src) {
      throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return this.tokens;
};
/**
 * Inline-Level Grammar
 */


var inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noop,
  tag: '^comment' + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
  + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
  + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
  + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
  + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
  // CDATA section
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
  nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
  strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
  em: /^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noop,
  text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/
}; // list of punctuation marks from common mark spec
// without ` and ] to workaround Rule 17 (inline code blocks/links)

inline._punctuation = '!"#$%&\'()*+,\\-./:;<=>?@\\[^_{|}~';
inline.em = edit(inline.em).replace(/punctuation/g, inline._punctuation).getRegex();
inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink).replace('scheme', inline._scheme).replace('email', inline._email).getRegex();
inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
inline.tag = edit(inline.tag).replace('comment', block._comment).replace('attribute', inline._attribute).getRegex();
inline._label = /(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
inline.link = edit(inline.link).replace('label', inline._label).replace('href', inline._href).replace('title', inline._title).getRegex();
inline.reflink = edit(inline.reflink).replace('label', inline._label).getRegex();
/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);
/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace('label', inline._label).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace('label', inline._label).getRegex()
});
/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: edit(inline.escape).replace('])', '~|])').getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
  del: /^~+(?=\S)([\s\S]*?\S)~+/,
  text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
});
inline.gfm.url = edit(inline.gfm.url, 'i').replace('email', inline.gfm._extended_email).getRegex();
/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: edit(inline.br).replace('{2,}', '*').getRegex(),
  text: edit(inline.gfm.text).replace('\\b_', '\\b_| {2,}\\n').replace(/\{2,\}/g, '*').getRegex()
});
/**
 * Inline Lexer & Compiler
 */

function InlineLexer(links, options) {
  this.options = options || index.defaults;
  this.links = links;
  this.rules = inline.normal;
  this.renderer = this.options.renderer || new Renderer();
  this.renderer.options = this.options;

  if (!this.links) {
    throw new Error('Tokens array requires a `links` property.');
  }

  if (this.options.pedantic) {
    this.rules = inline.pedantic;
  } else if (this.options.gfm) {
    if (this.options.breaks) {
      this.rules = inline.breaks;
    } else {
      this.rules = inline.gfm;
    }
  }
}
/**
 * Expose Inline Rules
 */


InlineLexer.rules = inline;
/**
 * Static Lexing/Compiling Method
 */

InlineLexer.output = function (src, links, options) {
  var inline = new InlineLexer(links, options);
  return inline.output(src);
};
/**
 * Lexing/Compiling
 */


InlineLexer.prototype.output = function (src) {
  var out = '',
      link,
      text,
      href,
      title,
      cap,
      prevCapZero;

  while (src) {
    // escape
    if (cap = this.rules.escape.exec(src)) {
      src = src.substring(cap[0].length);
      out += escape(cap[1]);
      continue;
    } // tag


    if (cap = this.rules.tag.exec(src)) {
      if (!this.inLink && /^<a /i.test(cap[0])) {
        this.inLink = true;
      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
        this.inLink = false;
      }

      if (!this.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.inRawBlock = true;
      } else if (this.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.inRawBlock = false;
      }

      src = src.substring(cap[0].length);
      out += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
      continue;
    } // link


    if (cap = this.rules.link.exec(src)) {
      var lastParenIndex = findClosingBracket(cap[2], '()');

      if (lastParenIndex > -1) {
        var linkLen = 4 + cap[1].length + lastParenIndex;
        cap[2] = cap[2].substring(0, lastParenIndex);
        cap[0] = cap[0].substring(0, linkLen).trim();
        cap[3] = '';
      }

      src = src.substring(cap[0].length);
      this.inLink = true;
      href = cap[2];

      if (this.options.pedantic) {
        link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

        if (link) {
          href = link[1];
          title = link[3];
        } else {
          title = '';
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : '';
      }

      href = href.trim().replace(/^<([\s\S]*)>$/, '$1');
      out += this.outputLink(cap, {
        href: InlineLexer.escapes(href),
        title: InlineLexer.escapes(title)
      });
      this.inLink = false;
      continue;
    } // reflink, nolink


    if ((cap = this.rules.reflink.exec(src)) || (cap = this.rules.nolink.exec(src))) {
      src = src.substring(cap[0].length);
      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = this.links[link.toLowerCase()];

      if (!link || !link.href) {
        out += cap[0].charAt(0);
        src = cap[0].substring(1) + src;
        continue;
      }

      this.inLink = true;
      out += this.outputLink(cap, link);
      this.inLink = false;
      continue;
    } // strong


    if (cap = this.rules.strong.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.strong(this.output(cap[4] || cap[3] || cap[2] || cap[1]));
      continue;
    } // em


    if (cap = this.rules.em.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.em(this.output(cap[6] || cap[5] || cap[4] || cap[3] || cap[2] || cap[1]));
      continue;
    } // code


    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.codespan(escape(cap[2].trim(), true));
      continue;
    } // br


    if (cap = this.rules.br.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.br();
      continue;
    } // del (gfm)


    if (cap = this.rules.del.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.del(this.output(cap[1]));
      continue;
    } // autolink


    if (cap = this.rules.autolink.exec(src)) {
      src = src.substring(cap[0].length);

      if (cap[2] === '@') {
        text = escape(this.mangle(cap[1]));
        href = 'mailto:' + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }

      out += this.renderer.link(href, null, text);
      continue;
    } // url (gfm)


    if (!this.inLink && (cap = this.rules.url.exec(src))) {
      if (cap[2] === '@') {
        text = escape(cap[0]);
        href = 'mailto:' + text;
      } else {
        // do extended autolink path validation
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules._backpedal.exec(cap[0])[0];
        } while (prevCapZero !== cap[0]);

        text = escape(cap[0]);

        if (cap[1] === 'www.') {
          href = 'http://' + text;
        } else {
          href = text;
        }
      }

      src = src.substring(cap[0].length);
      out += this.renderer.link(href, null, text);
      continue;
    } // text


    if (cap = this.rules.text.exec(src)) {
      src = src.substring(cap[0].length);

      if (this.inRawBlock) {
        out += this.renderer.text(this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0]);
      } else {
        out += this.renderer.text(escape(this.smartypants(cap[0])));
      }

      continue;
    }

    if (src) {
      throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return out;
};

InlineLexer.escapes = function (text) {
  return text ? text.replace(InlineLexer.rules._escapes, '$1') : text;
};
/**
 * Compile Link
 */


InlineLexer.prototype.outputLink = function (cap, link) {
  var href = link.href,
      title = link.title ? escape(link.title) : null;
  return cap[0].charAt(0) !== '!' ? this.renderer.link(href, title, this.output(cap[1])) : this.renderer.image(href, title, escape(cap[1]));
};
/**
 * Smartypants Transformations
 */


InlineLexer.prototype.smartypants = function (text) {
  if (!this.options.smartypants) return text;
  return text // em-dashes
  .replace(/---/g, "\u2014") // en-dashes
  .replace(/--/g, "\u2013") // opening singles
  .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018") // closing singles & apostrophes
  .replace(/'/g, "\u2019") // opening doubles
  .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C") // closing doubles
  .replace(/"/g, "\u201D") // ellipses
  .replace(/\.{3}/g, "\u2026");
};
/**
 * Mangle Links
 */


InlineLexer.prototype.mangle = function (text) {
  if (!this.options.mangle) return text;
  var out = '',
      l = text.length,
      i = 0,
      ch;

  for (; i < l; i++) {
    ch = text.charCodeAt(i);

    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }

    out += '&#' + ch + ';';
  }

  return out;
};
/**
 * Renderer
 */


function Renderer(options) {
  this.options = options || index.defaults;
}

Renderer.prototype.code = function (code, infostring, escaped) {
  var lang = (infostring || '').match(/\S*/)[0];

  if (this.options.highlight) {
    var out = this.options.highlight(code, lang);

    if (out != null && out !== code) {
      escaped = true;
      code = out;
    }
  }

  if (!lang) {
    return '<pre><code>' + (escaped ? code : escape(code, true)) + '</code></pre>';
  }

  return '<pre><code class="' + this.options.langPrefix + escape(lang, true) + '">' + (escaped ? code : escape(code, true)) + '</code></pre>\n';
};

Renderer.prototype.blockquote = function (quote) {
  return '<blockquote>\n' + quote + '</blockquote>\n';
};

Renderer.prototype.html = function (html) {
  return html;
};

Renderer.prototype.heading = function (text, level, raw, slugger) {
  var toc = _createToc__WEBPACK_IMPORTED_MODULE_0__["default"].add(text, level);

  if (this.options.headerIds) {
    return '<h' + level + ' id="' + this.options.headerPrefix + slugger.slug(raw) + '"' + ' toc-id="' + toc + '">' + text + '</h' + level + '>\n';
  } // ignore IDs


  return '<h' + level + ' toc-id="' + toc + '">' + text + '</h' + level + '>\n';
};

Renderer.prototype.hr = function () {
  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
};

Renderer.prototype.list = function (body, ordered, start) {
  var type = ordered ? 'ol' : 'ul',
      startatt = ordered && start !== 1 ? ' start="' + start + '"' : '';
  return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
};

Renderer.prototype.listitem = function (text) {
  var reg = /\<input.+\>/;
  var className = '';

  if (reg.test(text)) {
    className = 'list-item-checkbox';

    if (/checked/.test(text)) {
      className += ' list-item-checkbox-checked';
    }
  }

  return "<li class=\"".concat(className, " \">").concat(text, "</li>\n");
};

Renderer.prototype.checkbox = function (checked) {
  return '<input ' + (checked ? 'checked ' : '') + 'disabled type="checkbox"' + (this.options.xhtml ? ' /' : '') + '> ';
};

Renderer.prototype.paragraph = function (text) {
  return '<p>' + text + '</p>\n';
};

Renderer.prototype.table = function (header, body) {
  if (body) body = '<tbody>' + body + '</tbody>';
  return '<table>\n' + '<thead>\n' + header + '</thead>\n' + body + '</table>\n';
};

Renderer.prototype.tablerow = function (content) {
  return '<tr>\n' + content + '</tr>\n';
};

Renderer.prototype.tablecell = function (content, flags) {
  var type = flags.header ? 'th' : 'td';
  var tag = flags.align ? '<' + type + ' align="' + flags.align + '">' : '<' + type + '>';
  return tag + content + '</' + type + '>\n';
}; // span level renderer


Renderer.prototype.strong = function (text) {
  return '<strong>' + text + '</strong>';
};

Renderer.prototype.em = function (text) {
  return '<em>' + text + '</em>';
};

Renderer.prototype.codespan = function (text) {
  return '<code>' + text + '</code>';
};

Renderer.prototype.br = function () {
  return this.options.xhtml ? '<br/>' : '<br>';
};

Renderer.prototype.del = function (text) {
  return '<del>' + text + '</del>';
};

Renderer.prototype.link = function (href, title, text) {
  href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);

  if (href === null) {
    return text;
  }

  var out = '<a href="' + escape(href) + '"';

  if (title) {
    out += ' title="' + title + '"';
  }

  out += '>' + text + '</a>';
  return out;
};

Renderer.prototype.image = function (href, title, text) {
  href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);

  if (href === null) {
    return text;
  }

  var out = '<img src="' + href + '" alt="' + text + '"';

  if (title) {
    out += ' title="' + title + '"';
  }

  out += this.options.xhtml ? '/>' : '>';
  return out;
};

Renderer.prototype.text = function (text) {
  return text;
};
/**
 * TextRenderer
 * returns only the textual part of the token
 */


function TextRenderer() {} // no need for block level renderers


TextRenderer.prototype.strong = TextRenderer.prototype.em = TextRenderer.prototype.codespan = TextRenderer.prototype.del = TextRenderer.prototype.text = function (text) {
  return text;
};

TextRenderer.prototype.link = TextRenderer.prototype.image = function (href, title, text) {
  return '' + text;
};

TextRenderer.prototype.br = function () {
  return '';
};
/**
 * Parsing & Compiling
 */


function Parser(options) {
  this.tokens = [];
  this.token = null;
  this.options = options || index.defaults;
  this.options.renderer = this.options.renderer || new Renderer();
  this.renderer = this.options.renderer;
  this.renderer.options = this.options;
  this.slugger = new Slugger();
}
/**
 * Static Parse Method
 */


Parser.parse = function (src, options) {
  var parser = new Parser(options);
  return parser.parse(src);
};
/**
 * Parse Loop
 */


Parser.prototype.parse = function (src) {
  this.inline = new InlineLexer(src.links, this.options); // use an InlineLexer with a TextRenderer to extract pure text

  this.inlineText = new InlineLexer(src.links, merge({}, this.options, {
    renderer: new TextRenderer()
  }));
  this.tokens = src.reverse();
  var out = '';

  while (this.next()) {
    out += this.tok();
  }

  return out;
};
/**
 * Next Token
 */


Parser.prototype.next = function () {
  this.token = this.tokens.pop();
  return this.token;
};
/**
 * Preview Next Token
 */


Parser.prototype.peek = function () {
  return this.tokens[this.tokens.length - 1] || 0;
};
/**
 * Parse Text Tokens
 */


Parser.prototype.parseText = function () {
  var body = this.token.text;

  while (this.peek().type === 'text') {
    body += '\n' + this.next().text;
  }

  return this.inline.output(body);
};
/**
 * Parse Current Token
 */


Parser.prototype.tok = function () {
  switch (this.token.type) {
    case 'space':
      {
        return '';
      }

    case 'hr':
      {
        return this.renderer.hr();
      }

    case 'heading':
      {
        return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, unescape(this.inlineText.output(this.token.text)), this.slugger);
      }

    case 'code':
      {
        return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
      }

    case 'table':
      {
        var header = '',
            body = '',
            i,
            row,
            cell,
            j; // header

        cell = '';

        for (i = 0; i < this.token.header.length; i++) {
          cell += this.renderer.tablecell(this.inline.output(this.token.header[i]), {
            header: true,
            align: this.token.align[i]
          });
        }

        header += this.renderer.tablerow(cell);

        for (i = 0; i < this.token.cells.length; i++) {
          row = this.token.cells[i];
          cell = '';

          for (j = 0; j < row.length; j++) {
            cell += this.renderer.tablecell(this.inline.output(row[j]), {
              header: false,
              align: this.token.align[j]
            });
          }

          body += this.renderer.tablerow(cell);
        }

        return this.renderer.table(header, body);
      }

    case 'blockquote_start':
      {
        body = '';

        while (this.next().type !== 'blockquote_end') {
          body += this.tok();
        }

        return this.renderer.blockquote(body);
      }

    case 'list_start':
      {
        body = '';
        var ordered = this.token.ordered,
            start = this.token.start;

        while (this.next().type !== 'list_end') {
          body += this.tok();
        }

        return this.renderer.list(body, ordered, start);
      }

    case 'list_item_start':
      {
        body = '';
        var loose = this.token.loose;
        var checked = this.token.checked;
        var task = this.token.task;

        if (this.token.task) {
          body += this.renderer.checkbox(checked);
        }

        while (this.next().type !== 'list_item_end') {
          body += !loose && this.token.type === 'text' ? this.parseText() : this.tok();
        }

        return this.renderer.listitem(body, task, checked);
      }

    case 'html':
      {
        // TODO parse inline content if parameter src=1
        return this.renderer.html(this.token.text);
      }

    case 'paragraph':
      {
        return this.renderer.paragraph(this.inline.output(this.token.text));
      }

    case 'text':
      {
        return this.renderer.paragraph(this.parseText());
      }

    default:
      {
        var errMsg = 'Token with "' + this.token.type + '" type was not found.';

        if (this.options.silent) {
          console.log(errMsg);
        } else {
          throw new Error(errMsg);
        }
      }
  }
};
/**
 * Slugger generates header id
 */


function Slugger() {
  this.seen = {};
}
/**
 * Convert string to unique id
 */


Slugger.prototype.slug = function (value) {
  var slug = value.toLowerCase().trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '').replace(/\s/g, '-');

  if (this.seen.hasOwnProperty(slug)) {
    var originalSlug = slug;

    do {
      this.seen[originalSlug]++;
      slug = originalSlug + '-' + this.seen[originalSlug];
    } while (this.seen.hasOwnProperty(slug));
  }

  this.seen[slug] = 0;
  return slug;
};
/**
 * Helpers
 */


function escape(html, encode) {
  if (encode) {
    if (escape.escapeTest.test(html)) {
      return html.replace(escape.escapeReplace, function (ch) {
        return escape.replacements[ch];
      });
    }
  } else {
    if (escape.escapeTestNoEncode.test(html)) {
      return html.replace(escape.escapeReplaceNoEncode, function (ch) {
        return escape.replacements[ch];
      });
    }
  }

  return html;
}

escape.escapeTest = /[&<>"']/;
escape.escapeReplace = /[&<>"']/g;
escape.replacements = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};
escape.escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
escape.escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;

function unescape(html) {
  // explicitly match decimal, hex, and named HTML entities
  return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, function (_, n) {
    n = n.toLowerCase();
    if (n === 'colon') return ':';

    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
    }

    return '';
  });
}

function edit(regex, opt) {
  regex = regex.source || regex;
  opt = opt || '';
  return {
    replace: function replace(name, val) {
      val = val.source || val;
      val = val.replace(/(^|[^\[])\^/g, '$1');
      regex = regex.replace(name, val);
      return this;
    },
    getRegex: function getRegex() {
      return new RegExp(regex, opt);
    }
  };
}

function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    try {
      var prot = decodeURIComponent(unescape(href)).replace(/[^\w:]/g, '').toLowerCase();
    } catch (e) {
      return null;
    }

    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
      return null;
    }
  }

  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
  }

  try {
    href = encodeURI(href).replace(/%25/g, '%');
  } catch (e) {
    return null;
  }

  return href;
}

function resolveUrl(base, href) {
  if (!baseUrls[' ' + base]) {
    // we can ignore everything in base after the last slash of its path component,
    // but we might need to add _that_
    // https://tools.ietf.org/html/rfc3986#section-3
    if (/^[^:]+:\/*[^/]*$/.test(base)) {
      baseUrls[' ' + base] = base + '/';
    } else {
      baseUrls[' ' + base] = rtrim(base, '/', true);
    }
  }

  base = baseUrls[' ' + base];

  if (href.slice(0, 2) === '//') {
    return base.replace(/:[\s\S]*/, ':') + href;
  } else if (href.charAt(0) === '/') {
    return base.replace(/(:\/*[^/]*)[\s\S]*/, '$1') + href;
  } else {
    return base + href;
  }
}

var baseUrls = {};
var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

function noop() {}

noop.exec = noop;

function merge(obj) {
  var i = 1,
      target,
      key;

  for (; i < arguments.length; i++) {
    target = arguments[i];

    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}

function splitCells(tableRow, count) {
  // ensure that every cell-delimiting pipe has a space
  // before it to distinguish it from an escaped pipe
  var row = tableRow.replace(/\|/g, function (match, offset, str) {
    var escaped = false,
        curr = offset;

    while (--curr >= 0 && str[curr] === '\\') {
      escaped = !escaped;
    }

    if (escaped) {
      // odd number of slashes means | is escaped
      // so we leave it alone
      return '|';
    } else {
      // add space before unescaped |
      return ' |';
    }
  }),
      cells = row.split(/ \|/),
      i = 0;

  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count) {
      cells.push('');
    }
  }

  for (; i < cells.length; i++) {
    // leading or trailing whitespace is ignored per the gfm spec
    cells[i] = cells[i].trim().replace(/\\\|/g, '|');
  }

  return cells;
} // Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
// /c*$/ is vulnerable to REDOS.
// invert: Remove suffix of non-c chars instead. Default falsey.


function rtrim(str, c, invert) {
  if (str.length === 0) {
    return '';
  } // Length of suffix matching the invert condition.


  var suffLen = 0; // Step left until we fail to match the invert condition.

  while (suffLen < str.length) {
    var currChar = str.charAt(str.length - suffLen - 1);

    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }

  return str.substr(0, str.length - suffLen);
}

function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }

  var level = 0;

  for (var i = 0; i < str.length; i++) {
    if (str[i] === '\\') {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;

      if (level < 0) {
        return i;
      }
    }
  }

  return -1;
}

function checkSanitizeDeprecation(opt) {
  if (opt && opt.sanitize && !opt.silent) {
    console.warn('index(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
  }
}
/**
 * Marked
 */


function index(src, opt, callback) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('index(): input parameter is undefined or null');
  }

  if (typeof src !== 'string') {
    throw new Error('index(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
  }

  if (callback || typeof opt === 'function') {
    if (!callback) {
      callback = opt;
      opt = null;
    }

    opt = merge({}, index.defaults, opt || {});
    checkSanitizeDeprecation(opt);
    var highlight = opt.highlight,
        tokens,
        pending,
        i = 0;

    try {
      tokens = Lexer.lex(src, opt);
    } catch (e) {
      return callback(e);
    }

    pending = tokens.length;

    var done = function done(err) {
      if (err) {
        opt.highlight = highlight;
        return callback(err);
      }

      var out;

      try {
        out = Parser.parse(tokens, opt);
      } catch (e) {
        err = e;
      }

      opt.highlight = highlight;
      return err ? callback(err) : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;
    if (!pending) return done();

    for (; i < tokens.length; i++) {
      (function (token) {
        if (token.type !== 'code') {
          return --pending || done();
        }

        return highlight(token.text, token.lang, function (err, code) {
          if (err) return done(err);

          if (code == null || code === token.text) {
            return --pending || done();
          }

          token.text = code;
          token.escaped = true;
          --pending || done();
        });
      })(tokens[i]);
    }

    return;
  }

  try {
    if (opt) opt = merge({}, index.defaults, opt);
    checkSanitizeDeprecation(opt);
    return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';

    if ((opt || index.defaults).silent) {
      return '<p>An error occurred:</p><pre>' + escape(e.message + '', true) + '</pre>';
    }

    throw e;
  }
}
/**
 * Options
 */


index.options = index.setOptions = function (opt) {
  merge(index.defaults, opt);
  return index;
};

index.getDefaults = function () {
  return {
    baseUrl: null,
    breaks: false,
    gfm: true,
    headerIds: true,
    headerPrefix: '',
    highlight: null,
    langPrefix: 'language-',
    mangle: true,
    pedantic: false,
    renderer: new Renderer(),
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    xhtml: false
  };
};

index.defaults = index.getDefaults();
/**
 * Expose
 */

index.Parser = Parser;
index.parser = Parser.parse;
index.Renderer = Renderer;
index.TextRenderer = TextRenderer;
index.Lexer = Lexer;
index.lexer = Lexer.lex;
index.InlineLexer = InlineLexer;
index.inlineLexer = InlineLexer.output;
index.Slugger = Slugger;
index.parse = index;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);

/***/ }),

/***/ "./resources/assets/js/components/MDEditor/config/marked.js":
/*!******************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/config/marked.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_js_hightlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/js/hightlight */ "./resources/assets/js/components/MDEditor/assets/js/hightlight/index.js");
/* harmony import */ var _assets_js_marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/js/marked */ "./resources/assets/js/components/MDEditor/assets/js/marked/index.js");


_assets_js_hightlight__WEBPACK_IMPORTED_MODULE_0__["default"].initHighlightingOnLoad();
var renderer = new _assets_js_marked__WEBPACK_IMPORTED_MODULE_1__["default"].Renderer();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_assets_js_marked__WEBPACK_IMPORTED_MODULE_1__["default"].setOptions({
  renderer: renderer,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  highlight: function highlight(code) {
    return _assets_js_hightlight__WEBPACK_IMPORTED_MODULE_0__["default"].highlightAuto(code).value;
  }
}));

/***/ }),

/***/ "./resources/assets/js/components/MDEditor/preview.js":
/*!************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/preview.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_preview_index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/preview/index.vue */ "./resources/assets/js/components/MDEditor/components/preview/index.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_preview_index_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-18[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-18[0].rules[0].use[2]!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/components/preview/index.vue?vue&type=style&index=0&id=af00e654&scoped=true&lang=less&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-18[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-18[0].rules[0].use[2]!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/components/preview/index.vue?vue&type=style&index=0&id=af00e654&scoped=true&lang=less& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_18_0_rules_0_use_1_assets_font_iconfont_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-18[0].rules[0].use[1]!../../assets/font/iconfont.css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-18[0].rules[0].use[1]!./resources/assets/js/components/MDEditor/assets/font/iconfont.css");
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.i(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_18_0_rules_0_use_1_assets_font_iconfont_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"utf-8\";\n/*\n*Author zhaoxuhui\n*/\n.markdown[data-v-af00e654] {\n  overflow: hidden;\n  position: relative;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  background: #f7f7f7;\n}\n.markdown.border[data-v-af00e654] {\n  border: 1px solid #d9d9d9;\n}\n.markdown *[data-v-af00e654] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.markdown.fullscreen[data-v-af00e654] {\n  position: fixed;\n  z-index: 999999;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100% !important;\n  width: 100%;\n  border: none;\n}\n.markdown.fullscreen .markdown-content[data-v-af00e654] {\n  padding: 0;\n  padding-top: 10px;\n}\n.markdown .markdown-toolbars[data-v-af00e654] {\n  width: 100%;\n  display: block;\n  list-style: none;\n  background: #fff;\n  color: #6a6f7b;\n  cursor: pointer;\n  padding-left: 4px;\n  border-bottom: 1px solid #d9d9d9;\n}\n.markdown .markdown-toolbars > li[data-v-af00e654] {\n  float: left;\n  position: relative;\n  cursor: pointer;\n  margin: 0;\n  line-height: normal;\n  min-height: auto;\n}\n.markdown .markdown-toolbars > li[data-v-af00e654]:after {\n  display: block;\n  content: attr(name);\n  position: absolute;\n  z-index: 999999999999;\n  top: 32px;\n  left: 20px;\n  background: #000;\n  color: #fff;\n  white-space: nowrap;\n  font-size: 12px;\n  line-height: 28px;\n  padding: 0 6px;\n  transition: all 0.3s 0.1s;\n  transform: scale(0);\n  opacity: 0;\n  transform-origin: top;\n  border-radius: 2px;\n}\n.markdown .markdown-toolbars > li[data-v-af00e654]:hover:after {\n  transform: scale(1);\n  opacity: 1;\n}\n.markdown .markdown-toolbars > li[data-v-af00e654]:last-child:after {\n  right: 20%;\n  left: auto;\n}\n.markdown .markdown-toolbars > li .title[data-v-af00e654] {\n  font-size: 16px !important;\n}\n.markdown .markdown-toolbars > li .icon-svg[data-v-af00e654] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.markdown .markdown-toolbars > li.right[data-v-af00e654] {\n  float: right;\n}\n.markdown .markdown-toolbars > li.right > ul[data-v-af00e654] {\n  list-style: none;\n}\n.markdown .markdown-toolbars > li.right > ul > li[data-v-af00e654] {\n  line-height: normal;\n  float: left;\n}\n.markdown .markdown-toolbars span[data-v-af00e654] {\n  font-size: 18px;\n  color: #999;\n  cursor: pointer;\n  display: block;\n  width: 30px;\n  height: 30px;\n  border-radius: 3px;\n  line-height: 30px;\n  text-align: center;\n}\n.markdown .markdown-toolbars span[data-v-af00e654]:hover {\n  background: #f7f7f7;\n  color: #1890ff;\n}\n.markdown .markdown-toolbars .title[data-v-af00e654] {\n  padding-left: 4px;\n  padding-right: 10px;\n}\n.markdown .markdown-toolbars li:last-child span[data-v-af00e654] {\n  font-size: 20px !important;\n  margin-right: 4px;\n}\n.markdown .markdown-toolbars .shift-theme[data-v-af00e654],\n.markdown .markdown-toolbars .export-file[data-v-af00e654] {\n  height: 46px;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.markdown .markdown-toolbars .shift-theme span[data-v-af00e654],\n.markdown .markdown-toolbars .export-file span[data-v-af00e654] {\n  padding: 0 8px;\n  transition: all 0.3s;\n  font-size: 18px;\n  display: inline-block;\n  line-height: 32px;\n}\n.markdown .markdown-toolbars .shift-theme span[data-v-af00e654]:hover,\n.markdown .markdown-toolbars .export-file span[data-v-af00e654]:hover {\n  color: #0084ff;\n  background: #f7f7f7;\n  border-radius: 3px;\n}\n.markdown .markdown-toolbars .shift-theme ul[data-v-af00e654],\n.markdown .markdown-toolbars .export-file ul[data-v-af00e654] {\n  transform: scale(0);\n  transition: all 0.3s;\n  left: -50%;\n  top: 40px;\n  width: 160px;\n  transform-origin: top center;\n  list-style: none;\n  margin: 0;\n  padding: 6px 0;\n  box-sizing: border-box;\n  border: 1px solid #d9d9d9;\n  background: #fff;\n  border-radius: 4px;\n  position: absolute;\n  z-index: 9999999;\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);\n}\n.markdown .markdown-toolbars .shift-theme ul.active[data-v-af00e654],\n.markdown .markdown-toolbars .export-file ul.active[data-v-af00e654] {\n  opacity: 1;\n  transform: scaleY(1);\n}\n.markdown .markdown-toolbars .shift-theme ul li[data-v-af00e654],\n.markdown .markdown-toolbars .export-file ul li[data-v-af00e654] {\n  line-height: 30px;\n  padding: 0 12px;\n  padding-left: 12px;\n  font-size: 13px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: flex;\n  align-items: center;\n  color: #262626;\n}\n.markdown .markdown-toolbars .shift-theme ul li .iconfont[data-v-af00e654],\n.markdown .markdown-toolbars .export-file ul li .iconfont[data-v-af00e654] {\n  font-size: 14px;\n  display: block;\n  height: 30px;\n  width: 30px;\n  line-height: 30px;\n  overflow: hidden;\n}\n.markdown .markdown-toolbars .shift-theme ul li .iconfont[data-v-af00e654]:hover,\n.markdown .markdown-toolbars .export-file ul li .iconfont[data-v-af00e654]:hover {\n  color: #262626;\n}\n.markdown .markdown-toolbars .shift-theme ul li i[data-v-af00e654],\n.markdown .markdown-toolbars .export-file ul li i[data-v-af00e654] {\n  font-size: 13px;\n  display: block;\n  font-style: normal;\n  flex: 1;\n  white-space: normal;\n}\n.markdown .markdown-toolbars .shift-theme ul li[data-v-af00e654]:last-child,\n.markdown .markdown-toolbars .export-file ul li[data-v-af00e654]:last-child {\n  border-bottom: 0;\n}\n.markdown .markdown-toolbars .shift-theme ul li:last-child .iconfont[data-v-af00e654],\n.markdown .markdown-toolbars .export-file ul li:last-child .iconfont[data-v-af00e654] {\n  font-size: 14px !important;\n  margin: 0 !important;\n}\n.markdown .markdown-toolbars .shift-theme ul li[data-v-af00e654]:hover,\n.markdown .markdown-toolbars .export-file ul li[data-v-af00e654]:hover {\n  background: #f7f7f7;\n}\n.markdown .markdown-toolbars .shift-theme ul li.disabled[data-v-af00e654],\n.markdown .markdown-toolbars .export-file ul li.disabled[data-v-af00e654] {\n  cursor: not-allowed;\n  color: #bbbec4;\n}\n.markdown .markdown-toolbars .shift-theme ul li.disabled[data-v-af00e654]:hover,\n.markdown .markdown-toolbars .export-file ul li.disabled[data-v-af00e654]:hover {\n  background: transparent;\n}\n.markdown .markdown-toolbars .import-file[data-v-af00e654] {\n  position: relative;\n}\n.markdown .markdown-toolbars .import-file input[data-v-af00e654] {\n  position: absolute;\n  z-index: 9999;\n  left: 0;\n  top: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  cursor: pointer;\n  font-size: 0;\n}\n.markdown .markdown-toolbars .import-file:hover span[data-v-af00e654] {\n  background: #f7f7f7;\n  color: #1890ff;\n}\n.markdown .markdown-toolbars .import-file[data-v-af00e654]:hover:after {\n  transform: scale(1);\n  opacity: 1;\n}\n.markdown .close-preview[data-v-af00e654] {\n  position: absolute;\n  z-index: 999;\n  right: 0;\n  top: 0;\n  height: 40px;\n  width: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  color: #262626;\n}\n.markdown .close-preview span[data-v-af00e654] {\n  font-size: 22px;\n}\n.markdown .close-preview span[data-v-af00e654]:hover {\n  color: #262626;\n}\n.markdown .markdown-content[data-v-af00e654] {\n  flex: 1;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  overflow: hidden;\n  padding-bottom: 0;\n}\n.markdown .markdown-content .markdown-editor[data-v-af00e654] {\n  flex: 1;\n  height: 100%;\n  position: relative;\n  margin: 0 !important;\n  overflow: hidden;\n  overflow-y: scroll;\n  display: flex;\n  justify-content: space-between;\n  background: #2d2d2d;\n}\n.markdown .markdown-content .markdown-editor[data-v-af00e654]::-webkit-scrollbar {\n  display: none;\n}\n.markdown .markdown-content .markdown-editor .index[data-v-af00e654] {\n  background: #272727;\n  min-height: 100%;\n  width: 36px;\n  line-height: 22px;\n  padding: 12px 0;\n}\n.markdown .markdown-content .markdown-editor .index li[data-v-af00e654] {\n  background: #272727;\n  color: #ccc;\n  font-size: 14px;\n  text-align: center;\n  font-family: Consolas;\n}\n.markdown .markdown-content .markdown-editor textarea[data-v-af00e654] {\n  width: 100%;\n  min-height: 100%;\n  outline: none;\n  border: 0;\n  background: #2d2d2d;\n  line-height: 22px;\n  caret-color: #ccc;\n  color: #669acc;\n  font-size: 14px;\n  font-family: Consolas;\n  resize: none;\n  padding: 12px 8px;\n  overflow: hidden;\n  white-space: nowrap;\n  overflow-x: auto;\n}\n.markdown .markdown-content .markdown-editor textarea[data-v-af00e654]::-moz-selection {\n  background: #999;\n  color: #0084ff;\n}\n.markdown .markdown-content .markdown-editor textarea[data-v-af00e654]::selection {\n  background: #999;\n  color: #0084ff;\n}\n.markdown .markdown-content .codemirror[data-v-af00e654] {\n  flex: 1;\n  width: 0;\n  height: 100%;\n  overflow: auto;\n}\n.markdown .markdown-content .markdown-preview[data-v-af00e654] {\n  flex: 1;\n  width: 0;\n  height: 100%;\n}\n.markdown ul.toc-anchor[data-v-af00e654] {\n  max-width: 260px;\n  min-width: 150px;\n  background-color: #f6f8fa;\n  border-left: 2px solid #dcdfe6;\n  overflow: auto;\n}\n.markdown ul.toc-anchor li.toc-anchor-item[data-v-af00e654] {\n  cursor: pointer;\n  padding: 6px 16px;\n  font-size: 12px;\n  line-height: 1;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.markdown ul.toc-anchor li.toc-anchor-item span[data-v-af00e654] {\n  color: #333;\n  opacity: 0.8;\n}\n.markdown ul.toc-anchor li.toc-anchor-item span.toc-link-2[data-v-af00e654] {\n  padding-left: 16px;\n}\n.markdown ul.toc-anchor li.toc-anchor-item span.toc-link-3[data-v-af00e654] {\n  padding-left: 32px;\n}\n.markdown ul.toc-anchor li.toc-anchor-item span.toc-link-4[data-v-af00e654] {\n  padding-left: 48px;\n}\n.markdown ul.toc-anchor li.toc-anchor-item span.toc-link-5[data-v-af00e654] {\n  padding-left: 64px;\n}\n.markdown ul.toc-anchor li.toc-anchor-item span.toc-link-action[data-v-af00e654] {\n  color: #2b85e4;\n  opacity: 1;\n}\n.markdown ul.toc-anchor li.toc-anchor-item[data-v-af00e654]:first-child {\n  padding-top: 16px;\n}\n.markdown ul.toc-anchor li.toc-anchor-item:hover span[data-v-af00e654] {\n  opacity: 1;\n}\n.insert-img-model[data-v-af00e654] {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 99999;\n  background: rgba(0, 0, 0, 0.3);\n  padding-top: 12%;\n  transition: all 0.3s;\n  opacity: 0;\n  display: none;\n}\n.insert-img-model .model-container[data-v-af00e654] {\n  background: #fff;\n  width: 480px;\n  margin: 0 auto;\n  border-radius: 4px;\n  transition: all 0.3s;\n  transform: scale(0);\n  transform-origin: center;\n}\n.insert-img-model .model-container .model-head[data-v-af00e654] {\n  line-height: 32px;\n  padding: 0 12px;\n  background: #f7f7f7;\n  border-radius: 4px 4px 0 0;\n  box-shadow: 0 1px 2px #d9d9d9;\n  display: flex;\n  justify-content: space-between;\n}\n.insert-img-model .model-container .model-head span[data-v-af00e654]:nth-of-type(2) {\n  font-size: 14px;\n  padding-left: 12px;\n  cursor: pointer;\n}\n.insert-img-model .model-container .model-head span[data-v-af00e654]:nth-of-type(2):hover {\n  color: #ed3f14;\n}\n.insert-img-model .model-container .model-content[data-v-af00e654] {\n  padding: 20px 12px;\n  padding-top: 0;\n  min-height: 180px;\n}\n.insert-img-model .model-container .model-content .insert-url[data-v-af00e654] {\n  padding: 42px 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.insert-img-model .model-container .model-content .insert-url input[data-v-af00e654] {\n  display: block;\n  border: 1px solid #ccc;\n  font-size: 14px;\n  padding: 4px 8px;\n  line-height: 24px;\n  color: #333;\n  background: #fff;\n  border-radius: 4px;\n  -ms-writing-mode: lr-tb;\n      writing-mode: horizontal-tb;\n  text-rendering: auto;\n  transition: box-shadow 2s;\n  flex: 1;\n}\n.insert-img-model .model-container .model-content .insert-url input[data-v-af00e654]:focus {\n  border-color: #1890ff;\n}\n.insert-img-model .model-container .model-content .insert-url input[data-v-af00e654]::-moz-placeholder {\n  color: #c1c1c1;\n}\n.insert-img-model .model-container .model-content .insert-url input[data-v-af00e654]:-ms-input-placeholder {\n  color: #c1c1c1;\n}\n.insert-img-model .model-container .model-content .insert-url input[data-v-af00e654]::placeholder {\n  color: #c1c1c1;\n}\n.insert-img-model .model-container .model-content .insert-url a[data-v-af00e654] {\n  display: block;\n  background: #1890ff;\n  color: #fff;\n  line-height: 32px;\n  height: 32px;\n  font-size: 13px;\n  padding: 0 12px;\n  border-radius: 3px;\n  margin-left: 20px;\n  border: 1px solid #d9d9d9;\n  transition: all 0.3s;\n}\n.insert-img-model .model-container .model-content .insert-url a[data-v-af00e654]:hover {\n  background: #0169af;\n}\n.insert-img-model .model-container .model-content .insert-local[data-v-af00e654] {\n  height: 120px;\n  border: 1px dashed #d9d9d9;\n  border-radius: 4px;\n  transition: all 0.3s;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  cursor: pointer;\n}\n.insert-img-model .model-container .model-content .insert-local span[data-v-af00e654] {\n  font-size: 40px;\n  color: #d9d9d9;\n  line-height: 50px;\n  transition: all 0.3s;\n}\n.insert-img-model .model-container .model-content .insert-local p[data-v-af00e654] {\n  font-size: 14px;\n  color: #262626;\n  transition: all 0.3s;\n}\n.insert-img-model .model-container .model-content .insert-local[data-v-af00e654]:hover {\n  border-color: #1890ff;\n}\n.insert-img-model .model-container .model-content .insert-local:hover span[data-v-af00e654],\n.insert-img-model .model-container .model-content .insert-local:hover p[data-v-af00e654] {\n  color: #1890ff;\n}\n.insert-img-model .model-container .model-content .insert-local input[data-v-af00e654] {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n}\n.insert-img-model .model-container .model-foot[data-v-af00e654] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 10px 12px;\n  display: none;\n}\n.insert-img-model .model-container .model-foot a[data-v-af00e654] {\n  display: block;\n  background: #f7f7f7;\n  color: #262626;\n  line-height: 26px;\n  height: 26px;\n  font-size: 13px;\n  padding: 0 12px;\n  border-radius: 3px;\n  margin-left: 12px;\n  border: 1px solid #d9d9d9;\n  transition: all 0.3s;\n}\n.insert-img-model .model-container .model-foot a[data-v-af00e654]:hover {\n  background: #d9d9d9;\n}\n.insert-img-model .model-container .model-foot a.ok[data-v-af00e654] {\n  background: #1890ff;\n  color: #fff;\n  border-color: #1890ff;\n}\n.insert-img-model .model-container .model-foot a.ok[data-v-af00e654]:hover {\n  background: #0169af;\n}\n.insert-img-model.active[data-v-af00e654] {\n  opacity: 1;\n  display: block;\n}\n.insert-img-model.active .model-container[data-v-af00e654] {\n  transform: scale(1);\n}\nul.shift[data-v-af00e654] {\n  padding: 6px 12px;\n  display: flex;\n  align-items: center;\n}\nul.shift span[data-v-af00e654] {\n  font-size: 12px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\nul.shift span.iconfont[data-v-af00e654] {\n  font-size: 14px;\n}\nul.shift label[data-v-af00e654] {\n  font-size: 12px;\n  padding-right: 10px;\n  position: relative;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\nul.shift input[type='radio'][data-v-af00e654],\nul.shift label[data-v-af00e654] {\n  transition: all 0.6s ease;\n  box-sizing: border-box;\n}\nul.shift input[type=\"radio\"] + label[data-v-af00e654]::before {\n  content: \"\\a0\";\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 4px;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  border: 1px solid #292d35;\n  padding: 2px;\n}\nul.shift input[type=\"radio\"]:checked + label[data-v-af00e654]::before {\n  background-color: #292d35;\n  background-clip: content-box;\n  padding: 2px;\n}\nul.shift input[type=\"radio\"][data-v-af00e654] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n}\nul.shift input[type=\"radio\"]:checked + label[data-v-af00e654] {\n  color: #292d35;\n}\n[data-v-af00e654] .markdown-preview {\n  flex: 1;\n  overflow: hidden;\n  overflow-y: scroll;\n  background: #fff;\n  padding: 20px 12px !important;\n  font-family: 'Tahoma For Number', 'Chinese Quote', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  /*基本样式*/\n}\n[data-v-af00e654] .markdown-preview * {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n[data-v-af00e654] .markdown-preview > div {\n  padding: 10px 12px !important;\n  background: #fff;\n}\n[data-v-af00e654] .markdown-preview > div::-webkit-scrollbar {\n  display: none;\n}\n[data-v-af00e654] .markdown-preview::-webkit-scrollbar {\n  display: none;\n}\n[data-v-af00e654] .markdown-preview em {\n  font-style: oblique;\n}\n[data-v-af00e654] .markdown-preview ul {\n  list-style: none;\n  padding: 0 20px;\n}\n[data-v-af00e654] .markdown-preview ul li {\n  position: relative;\n}\n[data-v-af00e654] .markdown-preview ul li:after {\n  display: block;\n  content: \"\";\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  position: absolute;\n  z-index: 99;\n  top: 12px;\n  left: -16px;\n  background: #262626;\n}\n[data-v-af00e654] .markdown-preview ol,[data-v-af00e654] .markdown-preview ul {\n  margin: 10px 0;\n}\n[data-v-af00e654] .markdown-preview ol li,[data-v-af00e654] .markdown-preview ul li {\n  font-size: 14px !important;\n  color: #262626;\n  line-height: 22px !important;\n  padding: 4px 0;\n  padding-left: 6px;\n  min-height: 28px;\n}\n[data-v-af00e654] .markdown-preview ol li input[type=\"checkbox\"],[data-v-af00e654] .markdown-preview ul li input[type=\"checkbox\"] {\n  position: relative;\n  cursor: pointer;\n  overflow: visible;\n  position: absolute;\n  left: -14px;\n  top: 5px;\n}\n[data-v-af00e654] .markdown-preview ol li input[type=\"checkbox\"]:before,[data-v-af00e654] .markdown-preview ul li input[type=\"checkbox\"]:before {\n  font-family: \"iconfont\" !important;\n  color: #999;\n  display: block;\n  width: 18px;\n  height: 18px;\n  position: absolute;\n  content: \"\\E684\";\n  top: 0px;\n  left: -4px;\n  z-index: 999999;\n  background-position: center;\n  background: #fff;\n  font-size: 18px;\n  text-align: center;\n  line-height: 18px;\n}\n[data-v-af00e654] .markdown-preview ol li input[type=\"checkbox\"]:checked:before,[data-v-af00e654] .markdown-preview ul li input[type=\"checkbox\"]:checked:before {\n  content: \"\\E683\";\n}\n[data-v-af00e654] .markdown-preview ol.toc-anchor,[data-v-af00e654] .markdown-preview ul.toc-anchor {\n  margin: 0;\n  padding: 0;\n}\n[data-v-af00e654] .markdown-preview ol.toc-anchor li.toc-anchor-item,[data-v-af00e654] .markdown-preview ul.toc-anchor li.toc-anchor-item {\n  cursor: pointer;\n  padding: 4px 0;\n  font-size: 13px !important;\n  line-height: 16px !important;\n  min-height: auto;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n[data-v-af00e654] .markdown-preview ol.toc-anchor li.toc-anchor-item span,[data-v-af00e654] .markdown-preview ul.toc-anchor li.toc-anchor-item span {\n  color: #2b85e4;\n  opacity: 0.9;\n}\n[data-v-af00e654] .markdown-preview ol.toc-anchor li.toc-anchor-item span.toc-link-2,[data-v-af00e654] .markdown-preview ul.toc-anchor li.toc-anchor-item span.toc-link-2 {\n  padding-left: 16px;\n}\n[data-v-af00e654] .markdown-preview ol.toc-anchor li.toc-anchor-item span.toc-link-3,[data-v-af00e654] .markdown-preview ul.toc-anchor li.toc-anchor-item span.toc-link-3 {\n  padding-left: 32px;\n}\n[data-v-af00e654] .markdown-preview ol.toc-anchor li.toc-anchor-item span.toc-link-4,[data-v-af00e654] .markdown-preview ul.toc-anchor li.toc-anchor-item span.toc-link-4 {\n  padding-left: 48px;\n}\n[data-v-af00e654] .markdown-preview ol.toc-anchor li.toc-anchor-item span.toc-link-5,[data-v-af00e654] .markdown-preview ul.toc-anchor li.toc-anchor-item span.toc-link-5 {\n  padding-left: 64px;\n}\n[data-v-af00e654] .markdown-preview ol.toc-anchor li.toc-anchor-item:last-child,[data-v-af00e654] .markdown-preview ul.toc-anchor li.toc-anchor-item:last-child {\n  padding-bottom: 6px;\n}\n[data-v-af00e654] .markdown-preview ol.toc-anchor li.toc-anchor-item:hover span,[data-v-af00e654] .markdown-preview ul.toc-anchor li.toc-anchor-item:hover span {\n  opacity: 1;\n}\n[data-v-af00e654] .markdown-preview ol {\n  list-style-type: decimal;\n  padding-left: 20px;\n}\n[data-v-af00e654] .markdown-preview ol li {\n  list-style: decimal;\n}\n[data-v-af00e654] .markdown-preview hr {\n  color: #d9d9d9;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #d9d9d9;\n  margin: 20px 0;\n  padding: 0;\n}\n[data-v-af00e654] .markdown-preview del,[data-v-af00e654] .markdown-preview em,[data-v-af00e654] .markdown-preview strong {\n  display: inline-block;\n}\n[data-v-af00e654] .markdown-preview blockquote {\n  position: relative;\n  background: #f7f7f7;\n  padding: 6px 12px;\n  border-left: 5px solid #d9d9d9;\n  border-radius: 2px;\n  margin: 8px 0;\n}\n[data-v-af00e654] .markdown-preview h1,[data-v-af00e654] .markdown-preview h2,[data-v-af00e654] .markdown-preview h3,[data-v-af00e654] .markdown-preview h4,[data-v-af00e654] .markdown-preview h5,[data-v-af00e654] .markdown-preview h6 {\n  color: #262626;\n}\n[data-v-af00e654] .markdown-preview h1 {\n  font-size: 28px;\n  border-bottom: 1px solid #d9d9d9;\n}\n[data-v-af00e654] .markdown-preview h2 {\n  font-size: 24px;\n}\n[data-v-af00e654] .markdown-preview h3 {\n  font-size: 18px;\n}\n[data-v-af00e654] .markdown-preview h4 {\n  font-size: 16px;\n}\n[data-v-af00e654] .markdown-preview h5 {\n  font-size: 14px;\n}\n[data-v-af00e654] .markdown-preview h6 {\n  font-size: 12px;\n}\n[data-v-af00e654] .markdown-preview h1,[data-v-af00e654] .markdown-preview h2,[data-v-af00e654] .markdown-preview h3,[data-v-af00e654] .markdown-preview h4,[data-v-af00e654] .markdown-preview h5,[data-v-af00e654] .markdown-preview h6 {\n  padding: 8px 0;\n  font-weight: 600;\n}\n[data-v-af00e654] .markdown-preview p {\n  font-size: 14px !important;\n  color: #262626;\n  margin-bottom: 8px;\n  line-height: 22px;\n}\n[data-v-af00e654] .markdown-preview img {\n  display: block;\n  max-width: 100%;\n  margin: 20px 0;\n  cursor: pointer;\n}\n[data-v-af00e654] .markdown-preview table {\n  width: 100%;\n  border: 1px solid #d9d9d9;\n  border-bottom: 0;\n  background: #fff;\n  border-spacing: 0;\n  border-collapse: collapse;\n  margin: 20px 0;\n}\n[data-v-af00e654] .markdown-preview table tr {\n  transition: background 0.1s;\n}\n[data-v-af00e654] .markdown-preview table tr td,[data-v-af00e654] .markdown-preview table tr th {\n  padding: 4px 8px;\n  font-size: 14px;\n  line-height: 24px;\n  color: #333;\n  border-bottom: 1px solid #d9d9d9;\n  cursor: pointer;\n}\n[data-v-af00e654] .markdown-preview table th {\n  background: #f8f8f9;\n  text-align: left;\n  font-weight: bold;\n}\n[data-v-af00e654] .markdown-preview table tr:nth-of-type(even) td {\n  background: #fafafa;\n}\n[data-v-af00e654] .markdown-preview table tr:hover td {\n  background: #f5f5f5;\n}\n[data-v-af00e654] .markdown-preview table td,[data-v-af00e654] .markdown-preview table th {\n  border: 1px solid #d9d9d9;\n  word-break: break-all;\n}\n[data-v-af00e654] .markdown-preview input[type=\"checkbox\"] {\n  display: inline-block;\n  border-radius: 0;\n  margin-right: 8px;\n}\n[data-v-af00e654] .markdown-preview a {\n  text-decoration: none;\n  color: #1890ff;\n  font-size: 14px;\n  line-height: 22px;\n}\n[data-v-af00e654] .markdown-preview .code-block {\n  position: relative;\n  padding: 0 !important;\n}\n[data-v-af00e654] .markdown-preview .code-block .copy-code {\n  position: absolute;\n  z-index: 999;\n  top: 5px;\n  right: 10px;\n  font-size: 12px;\n  color: #d9d9d9;\n  line-height: 20px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: all 0.3s;\n  opacity: 0;\n}\n[data-v-af00e654] .markdown-preview .code-block .copy-code:hover {\n  color: #1890ff;\n}\n[data-v-af00e654] .markdown-preview .code-block:hover .copy-code {\n  opacity: 1;\n}\n.preview-img[data-v-af00e654] {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  z-index: 99999999;\n  left: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: none;\n  opacity: 0;\n  transition: opacity 0.3s 0.1s;\n  justify-content: center;\n  align-items: center;\n}\n.preview-img .close[data-v-af00e654] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  color: #fff;\n  padding: 10px;\n  font-size: 20px;\n  cursor: pointer;\n}\n.preview-img img[data-v-af00e654] {\n  display: block;\n}\n.preview-img img.vertical[data-v-af00e654] {\n  height: 80%;\n  width: auto;\n}\n.preview-img img.horizontal[data-v-af00e654] {\n  width: 80%;\n  height: auto;\n}\n.preview-img.active[data-v-af00e654] {\n  display: flex;\n  opacity: 1;\n}\n/*\n*Author zhaoxuhui\n*/\n[data-v-af00e654] .markdown-theme-light pre {\n  font-size: 14px !important;\n  line-height: 1.6 !important;\n  word-break: break-all;\n  word-wrap: break-word;\n  border: 0 !important;\n  border-radius: 0 !important;\n  background: #f7f8fb !important;\n  padding: 20px 10px!important;\n  border-radius: 4px !important;\n  overflow-y: hidden !important;\n  overflow-x: auto !important;\n  margin: 10px 0 !important;\n}\n[data-v-af00e654] .markdown-theme-light pre code {\n  font-family: Consolas !important;\n  font-size: 13px;\n  line-height: 22px !important;\n  color: #444;\n}\n[data-v-af00e654] .markdown-theme-light .hljs {\n  display: block;\n  overflow-x: auto;\n  color: #525252;\n  padding: 15px;\n  -webkit-text-size-adjust: none;\n}\n[data-v-af00e654] .markdown-theme-light .hljs-doctype {\n  color: #999;\n}\n[data-v-af00e654] .markdown-theme-light .hljs-tag {\n  color: #3e76f6;\n}\n[data-v-af00e654] .markdown-theme-light .hljs-attribute {\n  color: #e96900;\n}\n[data-v-af00e654] .markdown-theme-light .hljs-value {\n  color: #42b983;\n}\n[data-v-af00e654] .markdown-theme-light .hljs-keyword {\n  color: #e96900;\n}\n[data-v-af00e654] .markdown-theme-light .hljs-string {\n  color: #42b983;\n}\n[data-v-af00e654] .markdown-theme-light .hljs-comment {\n  color: #b3b3b3;\n}\n[data-v-af00e654] .markdown-theme-light .hljs-operator .hljs-comment {\n  color: #525252;\n}\n[data-v-af00e654] .markdown-theme-light .hljs-regexp {\n  color: #af7dff;\n}\n[data-v-af00e654] .markdown-theme-light .hljs-built_in {\n  color: #2db7f5;\n}\n[data-v-af00e654] .markdown-theme-light .css .hljs-class {\n  color: #e96900;\n}\n[data-v-af00e654] .markdown-theme-light .css .hljs-number,[data-v-af00e654] .markdown-theme-light .javascript .hljs-number {\n  color: #fc1e70;\n}\n[data-v-af00e654] .markdown-theme-light .css .hljs-attribute {\n  color: #af7dff;\n}\n[data-v-af00e654] .markdown-theme-light .css .hljs-important {\n  color: red;\n}\n[data-v-af00e654] .markdown-theme-light .actionscript .hljs-literal,[data-v-af00e654] .markdown-theme-light .javascript .hljs-literal {\n  color: #fc1e70;\n}\n[data-v-af00e654] .markdown-theme-light pre {\n  padding: 0;\n  margin: 0;\n  background: #f7f7f7 !important;\n}\n[data-v-af00e654] .markdown-theme-light code {\n  display: inline-block;\n  background: #f7f7f7;\n  font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;\n  margin: 0 3px;\n  padding: 1px 5px;\n  border-radius: 3px;\n  color: #666;\n  border: 1px solid #eee;\n}\n[data-v-af00e654] .markdown-theme-light pre code {\n  display: inline;\n  margin: 0;\n  padding: 0;\n  border: none;\n  background: transparent;\n}\n[data-v-af00e654] .markdown-theme-light pre.bg code {\n  background: #f7f7f7;\n}\n/*\n*Author zhaoxuhui\n*/\n[data-v-af00e654] .markdown-theme-dark pre {\n  display: block;\n  padding: 20px 10px!important;\n  border-radius: 4px;\n  margin: 20px 0 !important;\n  background: #1e1e1e;\n  color: #DCDCDC;\n  overflow-y: hidden !important;\n  overflow-x: auto !important;\n  font-family: Menlo, Consolas, \"Courier New\", Courier, FreeMono, monospace !important;\n}\n[data-v-af00e654] .markdown-theme-dark pre * {\n  line-height: 1.6 !important;\n  font-size: 14px;\n  font-family: Menlo, Consolas, \"Courier New\", Courier, FreeMono, monospace !important;\n}\n[data-v-af00e654] .markdown-theme-dark code {\n  padding: 0 !important;\n  margin: 0 !important;\n}\n[data-v-af00e654] .markdown-theme-dark .hljs-literal,[data-v-af00e654] .markdown-theme-dark .hljs-name,[data-v-af00e654] .markdown-theme-dark .hljs-symbol {\n  color: #659bd1;\n}\n[data-v-af00e654] .markdown-theme-dark .hljs-keyword {\n  color: #bc89bd;\n}\n[data-v-af00e654] .markdown-theme-dark .hljs-link {\n  color: #569CD6;\n  text-decoration: underline;\n}\n[data-v-af00e654] .markdown-theme-dark .hljs-built_in,[data-v-af00e654] .markdown-theme-dark .hljs-type {\n  color: #4EC9B0;\n}\n[data-v-af00e654] .markdown-theme-dark .hljs-class,[data-v-af00e654] .markdown-theme-dark .hljs-number {\n  color: #B8D7A3;\n}\n[data-v-af00e654] .markdown-theme-dark .hljs-meta-string,[data-v-af00e654] .markdown-theme-dark .hljs-string {\n  color: #D69D85;\n}\n[data-v-af00e654] .markdown-theme-dark .hljs-regexp,[data-v-af00e654] .markdown-theme-dark .hljs-template-tag {\n  color: #9A5334;\n}\n[data-v-af00e654] .markdown-theme-dark .hljs-formula,[data-v-af00e654] .markdown-theme-dark .hljs-function,[data-v-af00e654] .markdown-theme-dark .hljs-params,[data-v-af00e654] .markdown-theme-dark .hljs-subst,[data-v-af00e654] .markdown-theme-dark .hljs-title {\n  color: #DCDCDC;\n}\n[data-v-af00e654] .markdown-theme-dark .hljs-comment,[data-v-af00e654] .markdown-theme-dark .hljs-quote {\n  color: #57A64A;\n  font-style: italic;\n}\n[data-v-af00e654] .markdown-theme-dark .hljs-doctag {\n  color: #608B4E;\n}\n[data-v-af00e654] .markdown-theme-dark .hljs-meta,[data-v-af00e654] .markdown-theme-dark .hljs-meta-keyword,[data-v-af00e654] .markdown-theme-dark .hljs-tag {\n  color: #9B9B9B;\n}\n[data-v-af00e654] .markdown-theme-dark .hljs-template-variable,[data-v-af00e654] .markdown-theme-dark .hljs-variable {\n  color: #BD63C5;\n}\n[data-v-af00e654] .markdown-theme-dark .hljs-attr,[data-v-af00e654] .markdown-theme-dark .hljs-attribute,[data-v-af00e654] .markdown-theme-dark .hljs-builtin-name {\n  color: #9CDCFE;\n}\n[data-v-af00e654] .markdown-theme-dark .hljs-section {\n  color: gold;\n}\n[data-v-af00e654] .markdown-theme-dark .hljs-emphasis {\n  font-style: italic;\n}\n[data-v-af00e654] .markdown-theme-dark .hljs-strong {\n  font-weight: bold;\n}\n[data-v-af00e654] .markdown-theme-dark .hljs-bullet,[data-v-af00e654] .markdown-theme-dark .hljs-selector-attr,[data-v-af00e654] .markdown-theme-dark .hljs-selector-class,[data-v-af00e654] .markdown-theme-dark .hljs-selector-id,[data-v-af00e654] .markdown-theme-dark .hljs-selector-pseudo,[data-v-af00e654] .markdown-theme-dark .hljs-selector-tag {\n  color: #D7BA7D;\n}\n[data-v-af00e654] .markdown-theme-dark .hljs-addition {\n  background-color: #144212;\n  display: inline-block;\n  width: 100%;\n}\n[data-v-af00e654] .markdown-theme-dark .hljs-deletion {\n  background-color: #600;\n  display: inline-block;\n  width: 100%;\n}\n[data-v-af00e654] .markdown-theme-dark .hljs-comment {\n  font-style: normal;\n}\n/*\n*Author zhaoxuhui\n*/\n[data-v-af00e654] .markdown-theme-oneDark pre {\n  padding: 20px 10px!important;\n  display: block;\n  color: #abb2bf;\n  font-family: Menlo, Consolas, \"Courier New\", Courier, FreeMono, monospace;\n  background: #292c34;\n  border-radius: 4px;\n  overflow-y: hidden !important;\n  overflow-x: auto !important;\n  margin: 10px 0 !important;\n}\n[data-v-af00e654] .markdown-theme-oneDark pre * {\n  line-height: 1.6 !important;\n  font-size: 14px;\n  font-family: Menlo, Consolas, \"Courier New\", Courier, FreeMono, monospace;\n}\n[data-v-af00e654] .markdown-theme-oneDark .hljs-comment,[data-v-af00e654] .markdown-theme-oneDark .hljs-quote {\n  color: #5c6370;\n  font-style: italic;\n}\n[data-v-af00e654] .markdown-theme-oneDark .hljs-doctag,[data-v-af00e654] .markdown-theme-oneDark .hljs-formula,[data-v-af00e654] .markdown-theme-oneDark .hljs-keyword {\n  color: #c678dd;\n}\n[data-v-af00e654] .markdown-theme-oneDark .hljs-deletion,[data-v-af00e654] .markdown-theme-oneDark .hljs-name,[data-v-af00e654] .markdown-theme-oneDark .hljs-section,[data-v-af00e654] .markdown-theme-oneDark .hljs-selector-tag,[data-v-af00e654] .markdown-theme-oneDark .hljs-subst {\n  color: #e06c75;\n}\n[data-v-af00e654] .markdown-theme-oneDark .hljs-literal {\n  color: #56b6c2;\n}\n[data-v-af00e654] .markdown-theme-oneDark .hljs-addition,[data-v-af00e654] .markdown-theme-oneDark .hljs-attribute,[data-v-af00e654] .markdown-theme-oneDark .hljs-meta-string,[data-v-af00e654] .markdown-theme-oneDark .hljs-regexp,[data-v-af00e654] .markdown-theme-oneDark .hljs-string {\n  color: #98c379;\n}\n[data-v-af00e654] .markdown-theme-oneDark .hljs-built_in,[data-v-af00e654] .markdown-theme-oneDark .hljs-class .hljs-title {\n  color: #e6c07b;\n}\n[data-v-af00e654] .markdown-theme-oneDark .hljs-attr,[data-v-af00e654] .markdown-theme-oneDark .hljs-number,[data-v-af00e654] .markdown-theme-oneDark .hljs-selector-attr,[data-v-af00e654] .markdown-theme-oneDark .hljs-selector-class,[data-v-af00e654] .markdown-theme-oneDark .hljs-selector-pseudo,[data-v-af00e654] .markdown-theme-oneDark .hljs-template-variable,[data-v-af00e654] .markdown-theme-oneDark .hljs-type,[data-v-af00e654] .markdown-theme-oneDark .hljs-variable {\n  color: #d19a66;\n}\n[data-v-af00e654] .markdown-theme-oneDark .hljs-bullet,[data-v-af00e654] .markdown-theme-oneDark .hljs-link,[data-v-af00e654] .markdown-theme-oneDark .hljs-meta,[data-v-af00e654] .markdown-theme-oneDark .hljs-selector-id,[data-v-af00e654] .markdown-theme-oneDark .hljs-symbol,[data-v-af00e654] .markdown-theme-oneDark .hljs-title {\n  color: #61aeee;\n}\n[data-v-af00e654] .markdown-theme-oneDark .hljs-emphasis {\n  font-style: italic;\n}\n[data-v-af00e654] .markdown-theme-oneDark .hljs-strong {\n  font-weight: bold;\n}\n[data-v-af00e654] .markdown-theme-oneDark .hljs-link {\n  text-decoration: underline;\n}\n/*\n*Author zhaoxuhui\n*/\n[data-v-af00e654] .markdown-theme-gitHub pre {\n  padding: 20px 10px!important;\n  display: block;\n  overflow-x: auto;\n  color: #333;\n  background: #f7f8fa !important;\n  font-size: 13px;\n  line-height: 20px;\n  border-radius: 4px;\n  margin: 10px 0 !important;\n  overflow-x: auto !important;\n}\n[data-v-af00e654] .markdown-theme-gitHub pre * {\n  font-family: Consolas !important;\n}\n[data-v-af00e654] .markdown-theme-gitHub .hljs-comment,[data-v-af00e654] .markdown-theme-gitHub .hljs-quote {\n  color: #998;\n  font-style: italic;\n}\n[data-v-af00e654] .markdown-theme-gitHub .hljs-selector-tag,[data-v-af00e654] .markdown-theme-gitHub .hljs-subst {\n  color: #333;\n  font-weight: bold;\n}\n[data-v-af00e654] .markdown-theme-gitHub .hljs-keyword {\n  color: #d73a49;\n}\n[data-v-af00e654] .markdown-theme-gitHub .hljs-literal,[data-v-af00e654] .markdown-theme-gitHub .hljs-number,[data-v-af00e654] .markdown-theme-gitHub .hljs-tag .hljs-attr,[data-v-af00e654] .markdown-theme-gitHub .hljs-template-variable,[data-v-af00e654] .markdown-theme-gitHub .hljs-variable {\n  color: #008080;\n}\n[data-v-af00e654] .markdown-theme-gitHub .hljs-doctag,[data-v-af00e654] .markdown-theme-gitHub .hljs-string {\n  color: #d73a49;\n}\n[data-v-af00e654] .markdown-theme-gitHub .hljs-section,[data-v-af00e654] .markdown-theme-gitHub .hljs-selector-id,[data-v-af00e654] .markdown-theme-gitHub .hljs-title {\n  color: #900;\n  font-weight: bold;\n}\n[data-v-af00e654] .markdown-theme-gitHub .hljs-subst {\n  font-weight: normal;\n}\n[data-v-af00e654] .markdown-theme-gitHub .hljs-class .hljs-title,[data-v-af00e654] .markdown-theme-gitHub .hljs-type {\n  color: #458;\n  font-weight: bold;\n}\n[data-v-af00e654] .markdown-theme-gitHub .hljs-attribute,[data-v-af00e654] .markdown-theme-gitHub .hljs-name,[data-v-af00e654] .markdown-theme-gitHub .hljs-tag {\n  color: #000080;\n  font-weight: normal;\n}\n[data-v-af00e654] .markdown-theme-gitHub .hljs-link,[data-v-af00e654] .markdown-theme-gitHub .hljs-regexp {\n  color: #009926;\n}\n[data-v-af00e654] .markdown-theme-gitHub .hljs-bullet,[data-v-af00e654] .markdown-theme-gitHub .hljs-symbol {\n  color: #990073;\n}\n[data-v-af00e654] .markdown-theme-gitHub .hljs-built_in,[data-v-af00e654] .markdown-theme-gitHub .hljs-builtin-name {\n  color: #0086b3;\n}\n[data-v-af00e654] .markdown-theme-gitHub .hljs-meta {\n  color: #999;\n  font-weight: bold;\n}\n[data-v-af00e654] .markdown-theme-gitHub .hljs-deletion {\n  background: #fdd;\n}\n[data-v-af00e654] .markdown-theme-gitHub .hljs-addition {\n  background: #dfd;\n}\n[data-v-af00e654] .markdown-theme-gitHub .hljs-emphasis {\n  font-style: italic;\n}\n[data-v-af00e654] .markdown-theme-gitHub .hljs-strong {\n  font-weight: bold;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-18[0].rules[0].use[1]!./resources/assets/js/components/MDEditor/assets/font/iconfont.css":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-18[0].rules[0].use[1]!./resources/assets/js/components/MDEditor/assets/font/iconfont.css ***!
  \******************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {font-family: \"iconfont\";\n  src: url('iconfont.eot?t=1576231776697'); /* IE9 */\n  src: url('iconfont.eot?t=1576231776697#iefix') format('embedded-opentype'), /* IE6-IE8 */\n  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAABBoAAsAAAAAH4gAABAXAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCHNAqrGKENATYCJAOBAAtCAAQgBYRtB4I0G3MZM6M2lLTSTfZfJ3BzyOqYZkDBRZ2HprCitPZ3M8J36RIFoV+G+/sYnCYldv0I8xP3uCYjaM7/PYldjAhiEUzzMA2QIPZTSUVTap7SplSDVS1QFajwRBw61IQgv72KhZq8zPfO2kzlgJkk7T4iPTP9Ao/snqj1ZwI+AR+pnFgdsb1FKrikLeIB0AABBLNBwG3sJrh0YieT5piEFlvapTXhESZVxn7z1XMwlGSPvV8g5XsAQOD//62ldqfIqjJ5W5yyMH0RqkLWyJ0JDl3vH2ZCvMHdEpDKq5AV6vZCeyUCDyhMhanQFUJUSF+D5awMrAmEpUSMBqL+u96FgQDAQCUGYXgvHww+aDBOYL4ZcfI48GNh0DlDCfADXM0JaRCbioNPrl47gI3q6xMPkBAfIMGhwC7KNMk4AXqWejiMsp9gM2WP1KcBvJwIoADEAGiA1GkriShQPotRgtEV0vgv/nw0aIhYmpWyISIlSpGpmC1lR7A2toZtsMlp11jXnb47j+64Hg5zn6UsUfjoZBmKutd1v9rr4fphDQRixHGUMDpJirTuWd1zkP6/4AFKBLx5ISGFJwr+FLjwIISKCGIwCCRHgwMJBOCBjwA+fPmRUQPBBeYVAQDRQBvVwFICgxJYGgMBsFIM3sCGYPACNhwDCbARHF8yEhg8gU3EQAFsMgZ/YFMwKIDNwMAF2EwMHsAWAYSQxQCoIEsBEEGOAEAMaQOAgawBIBCyDgA5ZD0ANGQDABzITQBIIE8DIIC8CgAP8hoAfEgXMATAnT6Aj5IPAfCFfASAH6QLGGTwcNgSUAMAjTyBHsAsgPtJgC8GU++pILhNgQSfWmA0EEeRuu4EY14UN4/qGZcT5UhhGA+RzF1SKhUR4hBC68GmUDSfJxZ70tpH5uMJtAFv8k3IHkwQsbghCBGyO1rAEch8KV/ADNGEcnmltkOGKDqMSyXPTB0/f1gqqQ2GOhqiJgftys1wX+tg4SHhrzbqdj3PXQi/2m47jteF30zc/s3hA4btyn6r4/K6TDjNfkX8BZ51Du7ZDf/91en8caT7+06wdx/477cLWrE5JJ5vTUwUGoNjmfpWYWpMj3EjIa2djJquyNcCw/FkoZLVDe/crk7HlF2v3TZYaEO48Z1w1PX2/IHu2BudBRCCYtWvBRVSHgdpaN+n+n7rv7jBDQ41V3FSplXfmsIQFb4MONEnSxwYa4X9U0G67cNIpow0Wh0SzdewKnxLu1VOxbIVnAhqMHornbxVT0WyjfE9pdbQaK7Z+5oiSasw6tdwT1ABCOUhgLAB18k2I80+hAGCwnOPrbkI9MCNCKLYKXcZ/TjoQr+DKJrnBcZTsnHIVYM2IKHdls8KKdCbGp/gempUeVCNKPsiarRXiao7c1VaTpGsEWMZkK0EtaF+zozL/C5XUN1mc6qluTG8qp3ZRtDym7Tu9lABY77EyYCDOGGbSaX751iDcb86IXmrDLwE0OIqWKdHSLsjDVHThTg6e4hoZ0W1836P0nv3Sb9K9d17BS0TY89uRiqBtW8PD2r+uXx1QRH6ltVfNulEDoj+Tjm1OVOZHyxye8FtRMNx4u4SAx8MTWuMkQ4+KV/0Fm8XcxAikH13HgPEKC3sOv3jJfQPSis/NF8bGI8jOIpL/ZXB2cGcB5Z1ZUiOX1iO6uuYrghzg0A0c+naMI6D9DpkvdhphTJ9kdKwGkirDAkBUR5wsCOzDBCmo0JKjNunC1wOIoTbEZD+VCiMAURVWa4nDe1Uln4k54baR4hyhhCcUo33BZUwOqTO9uGIEu3sckJb9ZOAtBpUQIyUJ2wTFL+KLQjgHRCBXRiiowDDHW0vkLDrou0JF3AhCp2uQNv7oSZ/Zq8HJE+5VVSctLt8fbKj7qvd2K24Qljenm39DVKnTb/V54W3JQ4A16ajoC9ROEBhrRiupOO7TmnIt97OMqPbDs+Wd9Bq3vJckauVDIeTrXR126kpctY2WSpk9c2MHRO6XQ9XNLsrPWmuiIwVEqcdeCff1qG2zYzl3PJa3eWNcJmju/52k6wPlzQPrZSiQcZqLufWSkeANGW5t5zLe9SIPBNL1x4h9GWuIMQC46ZamifvFawQbH8TO9I0rWsNNjFoVxBYXmmJLzzjwApSTHhfP6YHrnT8ys8LlM0drRhLRqdJw6g4b54gcvmn+YmBX04ilmmEBR3wyJmoOKTz/7x2u72tOTTFq0y9YyvkJUtybl4LBb35iRHt5/TO+DOA/KGyNL40uZIiKaYvcjlOuvqIwScG1qSjFgfIfbLP6jMG8vOVPAijNL4AiM50bvAUmVSewIpmDqY1Wgcx0sAJqIgdRzrDwEEq9Ju9VwQ9uMGVQNYXahAuP79e5t78jSnVz8fdegMM8RyCb4a6viUlDgoko9Oi2TvWJofjwsQrQLviVhXtZw2YRlAB6J0fh8Wmho2cPr1dBSM3lCjc80GaD03EtTI11wPiQgXYsgRhNYuWASCFtPZOvTBqoNYTaO53H3b2Pdh5VsbHPrh06uYJD41afQ2dV1Ox53dGN6P3433qG3c4d93jvbLy4orHh6+df55b8kmvfHzFxbpnQKQHfUt5p1ImhA00zzRHfBFBLeQs4K1jFm7S5kVGDh0dNpRzCknDOjKzMjPPMVSR8n9r2tpnHEdHqOcoUjLUuUxWntVRyE92lLRftK3NINwmNLSpJfx/lbqsLqlV/p6q99SoaurrHSJ5YM2MGS5Xdr9M5CiwMO5fmMVsaY6LExZNNJvZtleQvnnPbCGYI7YnO58kSaS3nyzqAk6aunXdMQiaQJ1VPXNKS318EJljpwvbcyZxP/Jv0Rr4FOrVA/O4TJenp8KY3yDiW32/CpT5O37iS7orQBHVrJikbKa+wc0qr6jUKoH+W04U/Z3n357tnitXIiN/Q7Fdxj/Ml9kdl+An30RfEVVTAFNdmYZL2bHO9hmKfVZc6tf3L+8P6r/8ImBfnft2F7nL3MMDLo7qH32ueDL2GHUa2aRRJQNKhxQP9ZPJkM8xKUeYiysMlfqBkp/ph/pRy+0jRhoGjTQpq4hZ44bO3F69flKagSubojZwoN20wblhcHB18Kvjzg3O5OP+L1ofcTviOriSK1+8/OKK5PV60MpWzqjxrNn016KlnTs6ly66lb7Gc1H5VCYxhbvP1I/ireJ9J7JVB8mtyhbdKF2L8jvnaeBIyan0U7fDY5/dzB9VUTl8YMkgS7JbT8fei73VnWtfPndj2ewwaomyxJhzU08hxVQZzxpbVENU33jDJqlaRrSqJj73b1RmFWSnihoHU1Kaigw2kCrfQvKZP1fmGnSnqNpStG3+MwkvOlFHaH2N5LNonqTPzClC0rjV69oe+zxuk2/q2SlVKRGdwivDr3Dzfq+V8Hz69UaykNT1+vA8TprylNt/P/DHqs5x6uHq2Z2r/9z0W6NyK5NXfyAjtTChQd7W0NNW9lPPvJ95TH31jq3zhTSytHavdq9QIWKQFL4XuFKmXeAhtqmUIfXmZL/edJN5/RrdFH4tSuZ9R9n+mKud+WZTu1KKTiubkaps4mydXiG1JEXyOlVO0X5Ml/XXwZpCaadNLBW0byIxTWj2HK+/3it87M0vACmTm4KDSdEzLM2vOmLmOKzRu0UszatqHbUZmmB+rbZF49C2uhjVCfXewBMqZ5bT4VTCcdOhgH9lkX9v79pevmM6JoNaQMMIQ7dyq3Obc3vqX45upCDy6GZ6Ig6QXdu6nm4zu6+YP1OZpvzv0pMnhkC7bN+BIGXS8OHruLxgRZz36JKSRB5x+zYIbLuvd5dwO1jXu4upURy4O30Gb6IUC0Nsiij5ypBVMmWUxvY7RBPlgVYWKmyh2oShK6FuFq50tq/yW/XndFgI3qo/vuDzruKSn3DFJK3mERZHrt9KSxVnwOHtZU/GZQ5b2Jh580+7h2x2UMG86mNW6sZZyrra909Ktg0qqJ6Xk38qJy8/91Re7qsjKfk6kZ/zFM2pzvnEaoeVevADZa2pNg0GzvXCfX1xersSyI88TkzTtyh0ZkrRQtcnPt6wYfDgdqPxbppzrA0bHifW04oWyqxrUejT9K2NRrrCguZml9wbQmq8Ipbt59QVdG1Y/9w3wlRmpPl9twpTRNIjA95esJ+z4Ai04c61zLT1XQV1nHhDFHZWtFTogXRTxQzRtz9NkFyLzs4Jcpt8hkLklSit2CNK5Yv3iPV3tOSnbxMrsnu+XPfVLZvS1v7/Jcd7cjzyCrsH7zeXFzWdQq3gW4x6p7Y447os0tkV5/QyqL0jYac3CGhaWPL+FbdW+v1UNdnsTZHB30c2xBy6utz/Q6tU2Lt/LhtWJgr2rFt2FvvztIxn2/dvIgyhg7T1yrkBOiZtGZgJq0S8pdbfOwN++vWKmnF69YmCJU1Nk7Z8+pM9TuLtsds8fq75P44PWfCzq2O9XYHU8d6P/BL9a/wT/eS5zzoJcbqYlJyRkOJdOd8CRj3aLGcwZNgq3yCfJvmvYqIN0l/NTT6xu9/cX3TiWOjg1cd3nwvkBJsCxf8s0EocXp/zRWrfvk+k8cLJy5t9muvr5swGGRmYkrza/kabNJrZ83aYVu3eNZW/CvhooMuPeEn4WRK5kdxES5RK/TZtmU02Xx4lny97/pdilUIpDMXD00iX8hJNuZZE3lKpZpXikimatkqsFcGXSCuWIuFwdW7uyK1D4kODLl38t+n8gn+x3M0Wcb9U2FOkX2cdhXVfPtNzzxCNB1AXqLQZesgNc7j/U+QZFxm29kHKSY0h6KmQYPiI4auhc4ePG14spLhlhu8c8Qt/JT7rQyHFEG0efoOGNz6kBLRwLbka/jP5YHgXeX64HXHwwuHrvtp9dghG+i2fSCj+nE/bqJ+5y+Q8rGwPN2zq51+V9cLh/2m2uu6bRVW4D9IYRzX4IB9MSDyIFHSrG9HfOSyi2ecGFjuAKIMwBzTWItJAAmDCWW6Uyjn7rDytsx7ZKs/QJMFDoEmBjxBE94wxORAiyeSCj1yTQbSikwuhYAUFghYAiNLomAQ8nDFJSPAjo3Q9OxiNnl0mB14e5XExMIr+Y6cUOEMhwjbXv3wR6AKr2qeKhpNzY2Xpzf8JX0kLyXnq7BeSIyd13B1+mz+QIHWkyDd/KsUpJ9ypd8cHRKx64QtM2QU09ef93r1dxc5w1yybF4EusEr7lNNGw8kdvixTX/4TvpKWnNV+TfsLyfHolaOdgwX6EMlqtX1ZNN/8SSHaKbGscKe8Ew3iDaz0+rYuMGUnlLD7sz3ZnLMVu/ZVd2QUNuIa2EerSSBRaAwWhycQSWRKKmoaWjp6BkYmZhZWNnYOTi5unmLY2bHA8rgmyzMTYK6wG3WXt05TxqwX3CLuQ04jdm5u+Z6ItR23THbihWs/ip1flj53yJZiwsQQZ0xj0RTNnG8QzRTLwBL/OSWalIAOk7/KRVYU3ZK5J7QMK40NW4zfPK9LV4myESBZoZjMapY6ZFrWvnG2bXGOcdY3LPo627blR9MAAAAA') format('woff2'),\n  url('iconfont.woff?t=1576231776697') format('woff'),\n  url('iconfont.ttf?t=1576231776697') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */\n  url('iconfont.svg?t=1576231776697#iconfont') format('svg'); /* iOS 4.1- */\n}\n\n.iconfont {\n  font-family: \"iconfont\" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-md:before {\n  content: \"\\e604\";\n}\n\n.icon-redo:before {\n  content: \"\\e627\";\n}\n\n.icon-undo:before {\n  content: \"\\e633\";\n}\n\n.icon-checked:before {\n  content: \"\\e683\";\n}\n\n.icon-checked-false:before {\n  content: \"\\e684\";\n}\n\n.icon-preview:before {\n  content: \"\\e63a\";\n}\n\n.icon-on:before {\n  content: \"\\e6d8\";\n}\n\n.icon-off:before {\n  content: \"\\e6d9\";\n}\n\n.icon-download:before {\n  content: \"\\e6ae\";\n}\n\n.icon-bold:before {\n  content: \"\\e677\";\n}\n\n.icon-group:before {\n  content: \"\\e647\";\n}\n\n.icon-img:before {\n  content: \"\\e64a\";\n}\n\n.icon-under-line:before {\n  content: \"\\e65a\";\n}\n\n.icon-close:before {\n  content: \"\\e690\";\n}\n\n.icon-italic:before {\n  content: \"\\e628\";\n}\n\n.icon-overline:before {\n  content: \"\\e63b\";\n}\n\n.icon-horizontal:before {\n  content: \"\\e7f0\";\n}\n\n.icon-theme:before {\n  content: \"\\e682\";\n}\n\n.icon-quote:before {\n  content: \"\\e636\";\n}\n\n.icon-table:before {\n  content: \"\\e603\";\n}\n\n.icon-clear:before {\n  content: \"\\e629\";\n}\n\n.icon-ul:before {\n  content: \"\\e624\";\n}\n\n.icon-code:before {\n  content: \"\\e60f\";\n}\n\n.icon-link:before {\n  content: \"\\e7e2\";\n}\n\n.icon-fullscreen:before {\n  content: \"\\e7ec\";\n}\n\n.icon-quite:before {\n  content: \"\\e7ed\";\n}\n\n.icon-daoru:before {\n  content: \"\\e635\";\n}\n\n.icon-ol:before {\n  content: \"\\e6f0\";\n}\n\n.icon-upload-img:before {\n  content: \"\\e679\";\n}\n\n.icon-save:before {\n  content: \"\\e648\";\n}\n\n.icon-check-box:before {\n  content: \"\\ec58\";\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-18[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-18[0].rules[0].use[2]!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/components/preview/index.vue?vue&type=style&index=0&id=af00e654&scoped=true&lang=less&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-18[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-18[0].rules[0].use[2]!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/components/preview/index.vue?vue&type=style&index=0&id=af00e654&scoped=true&lang=less& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_18_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_18_0_rules_0_use_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_af00e654_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-18[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-18[0].rules[0].use[2]!../../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=af00e654&scoped=true&lang=less& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-18[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-18[0].rules[0].use[2]!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/components/preview/index.vue?vue&type=style&index=0&id=af00e654&scoped=true&lang=less&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_18_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_18_0_rules_0_use_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_af00e654_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_18_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_18_0_rules_0_use_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_af00e654_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/assets/js/components/MDEditor/components/preview/index.vue":
/*!******************************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/components/preview/index.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_af00e654_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=af00e654&scoped=true& */ "./resources/assets/js/components/MDEditor/components/preview/index.vue?vue&type=template&id=af00e654&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/MDEditor/components/preview/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_af00e654_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=af00e654&scoped=true&lang=less& */ "./resources/assets/js/components/MDEditor/components/preview/index.vue?vue&type=style&index=0&id=af00e654&scoped=true&lang=less&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_af00e654_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_af00e654_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "af00e654",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/MDEditor/components/preview/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/MDEditor/components/preview/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/components/preview/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/components/preview/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/MDEditor/components/preview/index.vue?vue&type=style&index=0&id=af00e654&scoped=true&lang=less&":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/components/preview/index.vue?vue&type=style&index=0&id=af00e654&scoped=true&lang=less& ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_18_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_18_0_rules_0_use_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_af00e654_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-18[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-18[0].rules[0].use[2]!../../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=af00e654&scoped=true&lang=less& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-18[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-18[0].rules[0].use[2]!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/components/preview/index.vue?vue&type=style&index=0&id=af00e654&scoped=true&lang=less&");


/***/ }),

/***/ "./resources/assets/js/components/MDEditor/components/preview/index.vue?vue&type=template&id=af00e654&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/components/preview/index.vue?vue&type=template&id=af00e654&scoped=true& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_af00e654_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_af00e654_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_af00e654_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=af00e654&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/components/preview/index.vue?vue&type=template&id=af00e654&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/components/preview/index.vue?vue&type=template&id=af00e654&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/components/preview/index.vue?vue&type=template&id=af00e654&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { ref: "preview", staticClass: "markdown-preview-warp" }, [
    _c("div", {
      class: "markdown-preview " + ("markdown-theme-" + _vm.theme),
      domProps: { innerHTML: _vm._s(_vm.html) },
    }),
    _vm._v(" "),
    _c("div", { class: ["preview-img", _vm.previewImgModal ? "active" : ""] }, [
      _c("span", {
        staticClass: "close icon-close iconfont",
        on: {
          click: function ($event) {
            _vm.previewImgModal = false
          },
        },
      }),
      _vm._v(" "),
      _c("img", {
        class: [_vm.previewImgMode],
        attrs: { src: _vm.previewImgSrc, alt: "" },
      }),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);