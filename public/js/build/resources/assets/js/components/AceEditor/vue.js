"use strict";
(self["webpackChunkDooTask"] = self["webpackChunkDooTask"] || []).push([["resources_assets_js_components_AceEditor_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/AceEditor.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/AceEditor.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AceEditor',
  props: {
    value: {
      "default": ''
    },
    options: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    theme: {
      type: String,
      "default": 'auto'
    },
    ext: {
      type: String,
      "default": 'txt'
    },
    height: {
      type: Number || null,
      "default": null
    },
    width: {
      type: Number || null,
      "default": null
    },
    wrap: {
      type: Boolean,
      "default": false
    },
    readOnly: {
      type: Boolean,
      "default": false
    }
  },
  render: function render(createElement) {
    return createElement('div', {
      "class": "no-dark-mode"
    });
  },
  data: function data() {
    return {
      code: '',
      editor: null,
      cursorPosition: {
        row: 0,
        column: 0
      },
      supportedModes: {
        "Apache_Conf": ["^htaccess|^htgroups|^htpasswd|^conf|htaccess|htgroups|htpasswd"],
        "BatchFile": ["bat|cmd"],
        "C_Cpp": ["cpp|c|cc|cxx|h|hh|hpp|ino"],
        "CSharp": ["cs"],
        "CSS": ["css"],
        "Dockerfile": ["^Dockerfile"],
        "golang": ["go|golang"],
        "HTML": ["html|htm|xhtml|vue|we|wpy"],
        "Java": ["java"],
        "JavaScript": ["js|jsm|jsx"],
        "JSON": ["json"],
        "JSP": ["jsp"],
        "LESS": ["less"],
        "Lua": ["lua"],
        "Makefile": ["^Makefile|^GNUmakefile|^makefile|^OCamlMakefile|make"],
        "Markdown": ["md|markdown"],
        "MySQL": ["mysql"],
        "Nginx": ["nginx|conf"],
        "INI": ["ini|conf|cfg|prefs"],
        "ObjectiveC": ["m|mm"],
        "Perl": ["pl|pm"],
        "Perl6": ["p6|pl6|pm6"],
        "pgSQL": ["pgsql"],
        "PHP_Laravel_blade": ["blade.php"],
        "PHP": ["php|inc|phtml|shtml|php3|php4|php5|phps|phpt|aw|ctp|module"],
        "Powershell": ["ps1"],
        "Python": ["py"],
        "R": ["r"],
        "Ruby": ["rb|ru|gemspec|rake|^Guardfile|^Rakefile|^Gemfile"],
        "Rust": ["rs"],
        "SASS": ["sass"],
        "SCSS": ["scss"],
        "SH": ["sh|bash|^.bashrc"],
        "SQL": ["sql"],
        "SQLServer": ["sqlserver"],
        "Swift": ["swift"],
        "Text": ["txt"],
        "Typescript": ["ts|typescript|str"],
        "VBScript": ["vbs|vb"],
        "Verilog": ["v|vh|sv|svh"],
        "XML": ["xml|rdf|rss|wsdl|xslt|atom|mathml|mml|xul|xbl|xaml"],
        "YAML": ["yaml|yml"],
        "Compress": ["tar|zip|7z|rar|gz|arj|z"],
        "images": ["icon|jpg|jpeg|png|bmp|gif|tif|emf"]
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    $A.loadScriptS(['js/ace/ace.js', 'js/ace/mode-json.js'], function () {
      // set init editor size
      _this.setSize(_this.$el, {
        height: _this.height,
        width: _this.width
      }); // init ace editor


      _this.editor = window.ace.edit(_this.$el, {
        wrap: _this.wrap,
        showPrintMargin: false,
        readOnly: _this.readOnly,
        keyboardHandler: 'vscode'
      });

      _this.editor.session.setMode("ace/mode/".concat(_this.getFileMode())); // emit 'mounted' event


      _this.$emit('mounted', _this.editor); // official syntax validation workers include 'coffee', 'css', 'html'
      // 'javascript', 'json', 'lua', 'php', 'xml' and 'xquery'


      if (_this.editor.session.$worker) {
        _this.editor.session.$worker.addEventListener('annotate', _this.workerMessage, false);
      } // set value and clear selection


      _this.editor.setValue(_this.value);

      _this.editor.clearSelection(); // set ace editor options and theme


      _this.editor.setOptions(_this.options);

      _this.editTheme && _this.editor.setTheme("ace/theme/".concat(_this.editTheme)); // 设置快捷键

      _this.editor.commands.addCommand({
        name: '保存文件',
        bindKey: {
          win: 'Ctrl-S',
          mac: 'Command-S'
        },
        exec: function exec() {
          _this.$emit("saveData");
        },
        readOnly: false
      }); // 触发修改内容


      _this.editor.getSession().on('change', function () {
        _this.code = _this.editor.getValue();

        _this.$emit('input', _this.code);
      });
    });
  },
  methods: {
    /**
     * listening lint events from worker
     * @param data
     */
    workerMessage: function workerMessage(_ref) {
      var data = _ref.data;
      // record current cursor position
      this.cursorPosition = this.editor.selection.getCursor();

      var _data = _slicedToArray(data, 1),
          validationInfo = _data[0];

      if (validationInfo && validationInfo.type === 'error') {
        this.$emit('validationFailed', validationInfo);
      } else {
        this.$emit('change', this.editor.getValue());
      }
    },

    /**
     * set editor size
     * @param dom
     * @param width
     * @param height
     */
    setSize: function setSize(dom, _ref2) {
      var _this2 = this;

      var _ref2$width = _ref2.width,
          width = _ref2$width === void 0 ? this.width : _ref2$width,
          _ref2$height = _ref2.height,
          height = _ref2$height === void 0 ? this.height : _ref2$height;
      dom.style.width = width && typeof width === 'number' ? "".concat(width, "px") : '100%';
      dom.style.height = height && typeof height === 'number' ? "".concat(height, "px") : '100%';
      this.$nextTick(function () {
        return _this2.editor && _this2.editor.resize();
      });
    },

    /**
     * 获取文件类型
     * @returns {string}
     */
    getFileMode: function getFileMode() {
      var ext = this.ext || "text";

      for (var name in this.supportedModes) {
        var data = this.supportedModes[name],
            suffixs = data[0].split('|'),
            mode = name.toLowerCase();

        for (var i = 0; i < suffixs.length; i++) {
          if (ext == suffixs[i]) {
            return mode;
          }
        }
      }

      return 'text';
    }
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(['themeIsDark'])), {}, {
    editTheme: function editTheme() {
      if (this.theme == 'auto') {
        if (this.themeIsDark) {
          return "dracula-dark";
        } else {
          return "chrome";
        }
      }

      return this.theme;
    }
  }),
  watch: {
    /**
     * watching and set options
     * @param newOptions ace editor options
     */
    options: function options(newOptions) {
      if (newOptions && _typeof(newOptions) === 'object') {
        this.editor && this.editor.setOptions(newOptions);
      }
    },

    /**
     * watching and set theme
     * @param newTheme
     */
    editTheme: function editTheme(newTheme) {
      if (newTheme && typeof newTheme === 'string') {
        this.editor && this.editor.setTheme("ace/theme/".concat(newTheme));
      }
    },

    /**
     * watching and set ext
     * @param newExt
     */
    ext: function ext(newExt) {
      if (newExt && typeof newExt === 'string') {
        this.editor && this.editor.session.setMode("ace/mode/".concat(this.getFileMode()));
      }
    },

    /**
     * watching and set width
     * @param newWidth
     */
    width: function width(newWidth) {
      this.setSize(this.el, {
        width: newWidth
      });
    },

    /**
     * watching and set height
     * @param newHeight
     */
    height: function height(newHeight) {
      this.setSize(this.el, {
        height: newHeight
      });
    },

    /**
     * watching and set readOnly
     * @param only
     */
    readOnly: function readOnly(only) {
      if (typeof only === 'boolean') {
        this.editor && this.editor.setReadOnly(only);
      }
    },

    /**
     * watching and set code
     * @param newCode
     */
    value: function value(newCode) {
      if (!this.editor) {
        return;
      }

      if (newCode == this.code) {
        return;
      }

      this.editor.setValue(newCode);
      this.editor.clearSelection();
      var _this$cursorPosition = this.cursorPosition,
          row = _this$cursorPosition.row,
          column = _this$cursorPosition.column; // move cursor to current position

      this.editor.selection.moveCursorTo(row, column);
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.editor) {
      if (this.editor.session.$worker) {
        this.editor.session.$worker.removeEventListener('message', this.workerMessage, false);
      }

      this.editor.destroy();
      this.editor.container.remove();
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/components/AceEditor.vue":
/*!******************************************************!*\
  !*** ./resources/assets/js/components/AceEditor.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AceEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AceEditor.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/AceEditor.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;



/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _AceEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/AceEditor.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/AceEditor.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/components/AceEditor.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AceEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AceEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/AceEditor.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AceEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);