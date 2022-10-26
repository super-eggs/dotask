"use strict";
(self["webpackChunkDooTask"] = self["webpackChunkDooTask"] || []).push([["resources_assets_js_pages_manage_messenger_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/DragInput.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/DragInput.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var view_design_hi_src_utils_assist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! view-design-hi/src/utils/assist */ "./node_modules/view-design-hi/src/utils/assist.js");
/* harmony import */ var view_design_hi_src_utils_calcTextareaHeight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! view-design-hi/src/utils/calcTextareaHeight */ "./node_modules/view-design-hi/src/utils/calcTextareaHeight.js");
/* harmony import */ var view_design_hi_src_mixins_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! view-design-hi/src/mixins/emitter */ "./node_modules/view-design-hi/src/mixins/emitter.js");
/* harmony import */ var view_design_hi_src_mixins_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! view-design-hi/src/mixins/form */ "./node_modules/view-design-hi/src/mixins/form.js");
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




var prefixCls = 'ivu-input';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'DragInput',
  mixins: [view_design_hi_src_mixins_emitter__WEBPACK_IMPORTED_MODULE_2__["default"], view_design_hi_src_mixins_form__WEBPACK_IMPORTED_MODULE_3__["default"]],
  props: {
    type: {
      validator: function validator(value) {
        return (0,view_design_hi_src_utils_assist__WEBPACK_IMPORTED_MODULE_0__.oneOf)(value, ['text', 'textarea', 'password', 'url', 'email', 'date', 'number', 'tel']);
      },
      "default": 'text'
    },
    value: {
      type: [String, Number],
      "default": ''
    },
    size: {
      validator: function validator(value) {
        return (0,view_design_hi_src_utils_assist__WEBPACK_IMPORTED_MODULE_0__.oneOf)(value, ['small', 'large', 'default']);
      },
      "default": function _default() {
        return !this.$IVIEW || this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size;
      }
    },
    placeholder: {
      type: String,
      "default": ''
    },
    maxlength: {
      type: [String, Number]
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    icon: String,
    autosize: {
      type: [Boolean, Object],
      "default": false
    },
    rows: {
      type: Number,
      "default": 2
    },
    readonly: {
      type: Boolean,
      "default": false
    },
    name: {
      type: String
    },
    number: {
      type: Boolean,
      "default": false
    },
    autofocus: {
      type: Boolean,
      "default": false
    },
    spellcheck: {
      type: Boolean,
      "default": false
    },
    autocomplete: {
      type: String,
      "default": 'off'
    },
    clearable: {
      type: Boolean,
      "default": false
    },
    elementId: {
      type: String
    },
    wrap: {
      validator: function validator(value) {
        return (0,view_design_hi_src_utils_assist__WEBPACK_IMPORTED_MODULE_0__.oneOf)(value, ['hard', 'soft']);
      },
      "default": 'soft'
    },
    prefix: {
      type: String,
      "default": ''
    },
    suffix: {
      type: String,
      "default": ''
    },
    search: {
      type: Boolean,
      "default": false
    },
    enterButton: {
      type: [Boolean, String],
      "default": false
    },
    // 4.0.0
    showWordLimit: {
      type: Boolean,
      "default": false
    },
    // 4.0.0
    password: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      currentValue: this.value,
      prefixCls: prefixCls,
      slotReady: false,
      textareaStyles: {},
      isOnComposition: false,
      showPassword: false
    };
  },
  computed: {
    currentType: function currentType() {
      var type = this.type;
      if (type === 'password' && this.password && this.showPassword) type = 'text';
      return type;
    },
    prepend: function prepend() {
      var state = false;
      if (this.type !== 'textarea') state = this.$slots.prepend !== undefined;
      return state;
    },
    append: function append() {
      var state = false;
      if (this.type !== 'textarea') state = this.$slots.append !== undefined;
      return state;
    },
    showPrefix: function showPrefix() {
      var state = false;
      if (this.type !== 'textarea') state = this.prefix !== '' || this.$slots.prefix !== undefined;
      return state;
    },
    showSuffix: function showSuffix() {
      var state = false;
      if (this.type !== 'textarea') state = this.suffix !== '' || this.$slots.suffix !== undefined;
      return state;
    },
    wrapClasses: function wrapClasses() {
      var _ref;

      return ["".concat(prefixCls, "-wrapper"), (_ref = {}, _defineProperty(_ref, "".concat(prefixCls, "-wrapper-").concat(this.size), !!this.size), _defineProperty(_ref, "".concat(prefixCls, "-type-").concat(this.type), this.type), _defineProperty(_ref, "".concat(prefixCls, "-group"), this.prepend || this.append || this.search && this.enterButton), _defineProperty(_ref, "".concat(prefixCls, "-group-").concat(this.size), (this.prepend || this.append || this.search && this.enterButton) && !!this.size), _defineProperty(_ref, "".concat(prefixCls, "-group-with-prepend"), this.prepend), _defineProperty(_ref, "".concat(prefixCls, "-group-with-append"), this.append || this.search && this.enterButton), _defineProperty(_ref, "".concat(prefixCls, "-hide-icon"), this.append), _defineProperty(_ref, "".concat(prefixCls, "-with-search"), this.search && this.enterButton), _ref)];
    },
    inputClasses: function inputClasses() {
      var _ref2;

      return ["".concat(prefixCls), (_ref2 = {}, _defineProperty(_ref2, "".concat(prefixCls, "-").concat(this.size), !!this.size), _defineProperty(_ref2, "".concat(prefixCls, "-disabled"), this.itemDisabled), _defineProperty(_ref2, "".concat(prefixCls, "-with-prefix"), this.showPrefix), _defineProperty(_ref2, "".concat(prefixCls, "-with-suffix"), this.showSuffix || this.search && this.enterButton === false), _ref2)];
    },
    textareaClasses: function textareaClasses() {
      return ["".concat(prefixCls), _defineProperty({}, "".concat(prefixCls, "-disabled"), this.itemDisabled)];
    },
    upperLimit: function upperLimit() {
      return this.maxlength;
    },
    textLength: function textLength() {
      if (typeof this.value === 'number') {
        return String(this.value).length;
      }

      return (this.value || '').length;
    }
  },
  methods: {
    handleEnter: function handleEnter(event) {
      this.$emit('on-enter', event);
      if (this.search) this.$emit('on-search', this.currentValue);
    },
    handleKeydown: function handleKeydown(event) {
      this.$emit('on-keydown', event);
    },
    handleKeypress: function handleKeypress(event) {
      this.$emit('on-keypress', event);
    },
    handleKeyup: function handleKeyup(event) {
      this.$emit('on-keyup', event);
    },
    handleIconClick: function handleIconClick(event) {
      this.$emit('on-click', event);
    },
    handleFocus: function handleFocus(event) {
      this.$emit('on-focus', event);
    },
    handleBlur: function handleBlur(event) {
      this.$emit('on-blur', event);

      if (!(0,view_design_hi_src_utils_assist__WEBPACK_IMPORTED_MODULE_0__.findComponentUpward)(this, ['DatePicker', 'TimePicker', 'Cascader', 'Search'])) {
        this.dispatch('FormItem', 'on-form-blur', this.currentValue);
      }
    },
    handleComposition: function handleComposition(event) {
      if (event.type === 'compositionstart') {
        this.isOnComposition = true;
      }

      if (event.type === 'compositionend') {
        this.isOnComposition = false;
        this.handleInput(event);
      }
    },
    handleInput: function handleInput(event) {
      if (this.isOnComposition) return;
      var value = event.target.value;
      if (this.number && value !== '') value = Number.isNaN(Number(value)) ? value : Number(value);
      this.$emit('input', value);
      this.setCurrentValue(value);
      this.$emit('on-change', event);
    },
    handleChange: function handleChange(event) {
      this.$emit('on-input-change', event);
    },
    handlePaste: function handlePaste(event) {
      this.$emit('on-input-paste', event);
    },
    setCurrentValue: function setCurrentValue(value) {
      var _this = this;

      if (value === this.currentValue) return;
      this.$nextTick(function () {
        _this.resizeTextarea();
      });
      this.currentValue = value;

      if (!(0,view_design_hi_src_utils_assist__WEBPACK_IMPORTED_MODULE_0__.findComponentUpward)(this, ['DatePicker', 'TimePicker', 'Cascader', 'Search'])) {
        this.dispatch('FormItem', 'on-form-change', value);
      }
    },
    resizeTextarea: function resizeTextarea() {
      var autosize = this.autosize;

      if (!autosize || this.type !== 'textarea') {
        return false;
      }

      var minRows = autosize.minRows;
      var maxRows = autosize.maxRows;
      this.textareaStyles = (0,view_design_hi_src_utils_calcTextareaHeight__WEBPACK_IMPORTED_MODULE_1__["default"])(this.$refs.textarea, minRows, maxRows);
    },
    focus: function focus() {
      if (this.type === 'textarea') {
        this.$refs.textarea.focus();
      } else {
        this.$refs.input.focus();
      }
    },
    blur: function blur() {
      if (this.type === 'textarea') {
        this.$refs.textarea.blur();
      } else {
        this.$refs.input.blur();
      }
    },
    handleClear: function handleClear() {
      var e = {
        target: {
          value: ''
        }
      };
      this.$emit('input', '');
      this.setCurrentValue('');
      this.$emit('on-change', e);
      this.$emit('on-clear');
    },
    handleSearch: function handleSearch() {
      if (this.itemDisabled) return false;
      this.$refs.input.focus();
      this.$emit('on-search', this.currentValue);
    },
    handleToggleShowPassword: function handleToggleShowPassword() {
      var _this2 = this;

      if (this.itemDisabled) return false;
      this.showPassword = !this.showPassword;
      this.focus();
      var len = this.currentValue.length;
      setTimeout(function () {
        _this2.$refs.input.setSelectionRange(len, len);
      }, 0);
    }
  },
  watch: {
    value: function value(val) {
      this.setCurrentValue(val);
    }
  },
  mounted: function mounted() {
    this.slotReady = true;
    this.resizeTextarea();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/ScrollerY.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/ScrollerY.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ScrollerY',
  props: {
    "static": {
      type: Boolean,
      "default": false
    },
    autoBottom: {
      type: Boolean,
      "default": false
    },
    autoRecovery: {
      type: Boolean,
      "default": true
    },
    autoRecoveryAnimate: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      scrollY: 0,
      scrollDiff: 0,
      autoInterval: null
    };
  },
  mounted: function mounted() {
    this.openInterval();
    this.$nextTick(this.initScroll);
  },
  activated: function activated() {
    this.openInterval();
    this.recoveryScroll();
  },
  destroyed: function destroyed() {
    this.closeInterval();
  },
  deactivated: function deactivated() {
    this.closeInterval();
  },
  methods: {
    initScroll: function initScroll() {
      var _this = this;

      this.autoToBottom();
      var scrollListener = typeof this.$listeners['on-scroll'] === "function";
      var scrollerView = $A(this.$refs.scrollerView);
      scrollerView.scroll(function () {
        var wInnerH = Math.round(scrollerView.innerHeight());
        var wScrollY = scrollerView.scrollTop();
        var bScrollH = _this.$refs.scrollerView.scrollHeight;
        _this.scrollY = wScrollY;

        if (scrollListener) {
          var direction = 'static';
          var directionreal = 'static';

          if (_this.scrollDiff - wScrollY > 50) {
            _this.scrollDiff = wScrollY;
            direction = 'down';
          } else if (_this.scrollDiff - wScrollY < -100) {
            _this.scrollDiff = wScrollY;
            direction = 'up';
          }

          if (_this.scrollDiff - wScrollY > 1) {
            _this.scrollDiff = wScrollY;
            directionreal = 'down';
          } else if (_this.scrollDiff - wScrollY < -1) {
            _this.scrollDiff = wScrollY;
            directionreal = 'up';
          }

          _this.$emit('on-scroll', {
            scale: wScrollY / (bScrollH - wInnerH),
            //已滚动比例
            scrollY: wScrollY,
            //滚动的距离
            scrollE: bScrollH - wInnerH - wScrollY,
            //与底部距离
            direction: direction,
            //滚动方向
            directionreal: directionreal //滚动方向（即时）

          });
        }
      });
    },
    recoveryScroll: function recoveryScroll() {
      var _this2 = this;

      if (this.autoRecovery && (this.scrollY > 0 || this.autoBottom)) {
        this.$nextTick(function () {
          if (_this2.autoBottom) {
            _this2.autoToBottom();
          } else {
            _this2.scrollTo(_this2.scrollY, _this2.autoRecoveryAnimate);
          }
        });
      }
    },
    openInterval: function openInterval() {
      this.autoToBottom();
      this.autoInterval && clearInterval(this.autoInterval);
      this.autoInterval = setInterval(this.autoToBottom, 300);
    },
    closeInterval: function closeInterval() {
      clearInterval(this.autoInterval);
      this.autoInterval = null;
    },
    scrollTo: function scrollTo(top, animate) {
      if (animate === false) {
        $A(this.$refs.scrollerView).stop().scrollTop(top);
      } else {
        $A(this.$refs.scrollerView).stop().animate({
          "scrollTop": top
        });
      }
    },
    autoToBottom: function autoToBottom() {
      if (this.autoBottom) {
        $A.scrollToView(this.$refs.bottom, {
          behavior: 'instant',
          inline: 'end'
        });
      }
    },
    scrollInfo: function scrollInfo() {
      var scrollerView = $A(this.$refs.scrollerView);
      var wInnerH = Math.round(scrollerView.innerHeight());
      var wScrollY = scrollerView.scrollTop();
      var bScrollH = this.$refs.scrollerView.scrollHeight;
      this.scrollY = wScrollY;
      return {
        scale: wScrollY / (bScrollH - wInnerH),
        //已滚动比例
        scrollY: wScrollY,
        //滚动的距离
        scrollE: bScrollH - wInnerH - wScrollY //与底部距离

      };
    },
    querySelector: function querySelector(el) {
      return this.$refs.scrollerView && this.$refs.scrollerView.querySelector(el);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/WCircle.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/WCircle.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  name: 'WCircle',
  props: {
    percent: {
      type: Number,
      "default": 0
    },
    size: {
      type: Number,
      "default": 120
    }
  },
  computed: {
    style: function style() {
      var size = this.size;

      if (this.isNumeric(size)) {
        size += 'px';
      }

      return {
        width: size,
        height: size
      };
    },
    args: function args() {
      var percent = this.percent;
      var end = Math.min(360, 360 / 100 * percent);

      if (end == 360) {
        end = 0;
      } else if (end == 0) {
        end = 360;
      }

      return {
        x: 14,
        y: 14,
        r: 14,
        start: 360,
        end: end
      };
    }
  },
  methods: {
    isNumeric: function isNumeric(n) {
      return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
    },
    point: function point(x, y, r, angel) {
      return [(x + Math.sin(angel) * r).toFixed(2), (y - Math.cos(angel) * r).toFixed(2)];
    },
    full: function full(x, y, R, r) {
      if (r <= 0) {
        return "M ".concat(x - R, " ").concat(y, " A ").concat(R, " ").concat(R, " 0 1 1 ").concat(x + R, " ").concat(y, " A ").concat(R, " ").concat(R, " 1 1 1 ").concat(x - R, " ").concat(y, " Z");
      }

      return "M ".concat(x - R, " ").concat(y, " A ").concat(R, " ").concat(R, " 0 1 1 ").concat(x + R, " ").concat(y, " A ").concat(R, " ").concat(R, " 1 1 1 ").concat(x - R, " ").concat(y, " M ").concat(x - r, " ").concat(y, " A ").concat(r, " ").concat(r, " 0 1 1 ").concat(x + r, " ").concat(y, " A ").concat(r, " ").concat(r, " 1 1 1 ").concat(x - r, " ").concat(y, " Z");
    },
    part: function part(x, y, R, r, start, end) {
      var s = start / 360 * 2 * Math.PI,
          e = end / 360 * 2 * Math.PI;
      var P = [this.point(x, y, r, s), this.point(x, y, R, s), this.point(x, y, R, e), this.point(x, y, r, e)];
      var flag = e - s > Math.PI ? '1' : '0';
      return "M ".concat(P[0][0], " ").concat(P[0][1], " L ").concat(P[1][0], " ").concat(P[1][1], " A ").concat(R, " ").concat(R, " 0 ").concat(flag, " 1 ").concat(P[2][0], " ").concat(P[2][1], " L ").concat(P[3][0], " ").concat(P[3][1], " A ").concat(r, " ").concat(r, "  0 ").concat(flag, " 0 ").concat(P[0][0], " ").concat(P[0][1], " Z");
    },
    arc: function arc(opts) {
      var _opts$x = opts.x,
          x = _opts$x === void 0 ? 0 : _opts$x,
          _opts$y = opts.y,
          y = _opts$y === void 0 ? 0 : _opts$y;
      var _opts$R = opts.R,
          R = _opts$R === void 0 ? 0 : _opts$R,
          _opts$r = opts.r,
          r = _opts$r === void 0 ? 0 : _opts$r,
          start = opts.start,
          end = opts.end;
      var _ref = [Math.max(R, r), Math.min(R, r)];
      R = _ref[0];
      r = _ref[1];
      if (R <= 0) return '';
      if (start !== +start || end !== +end) return this.full(x, y, R, r);
      if (Math.abs(start - end) < 0.000001) return '';
      if (Math.abs(start - end) % 360 < 0.000001) return this.full(x, y, R, r);
      var _ref2 = [start % 360, end % 360];
      start = _ref2[0];
      end = _ref2[1];
      if (start > end) end += 360;
      return this.part(x, y, R, r, start, end);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/components/DialogUpload.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/components/DialogUpload.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'DialogUpload',
  props: {
    dialogId: {
      type: Number,
      "default": 0
    },
    maxSize: {
      type: Number,
      "default": 204800
    }
  },
  data: function data() {
    return {
      uploadFormat: ['text', 'md', 'markdown', 'drawio', 'mind', 'docx', 'wps', 'doc', 'xls', 'xlsx', 'ppt', 'pptx', 'jpg', 'jpeg', 'png', 'gif', 'bmp', 'ico', 'raw', 'rar', 'zip', 'jar', '7-zip', 'tar', 'gzip', '7z', 'tif', 'tiff', 'dwg', 'dxf', 'ofd', 'pdf', 'txt', 'htaccess', 'htgroups', 'htpasswd', 'conf', 'bat', 'cmd', 'cpp', 'c', 'cc', 'cxx', 'h', 'hh', 'hpp', 'ino', 'cs', 'css', 'dockerfile', 'go', 'golang', 'html', 'htm', 'xhtml', 'vue', 'we', 'wpy', 'java', 'js', 'jsm', 'jsx', 'json', 'jsp', 'less', 'lua', 'makefile', 'gnumakefile', 'ocamlmakefile', 'make', 'mysql', 'nginx', 'ini', 'cfg', 'prefs', 'm', 'mm', 'pl', 'pm', 'p6', 'pl6', 'pm6', 'pgsql', 'php', 'inc', 'phtml', 'shtml', 'php3', 'php4', 'php5', 'phps', 'phpt', 'aw', 'ctp', 'module', 'ps1', 'py', 'r', 'rb', 'ru', 'gemspec', 'rake', 'guardfile', 'rakefile', 'gemfile', 'rs', 'sass', 'scss', 'sh', 'bash', 'bashrc', 'sql', 'sqlserver', 'swift', 'ts', 'typescript', 'str', 'vbs', 'vb', 'v', 'vh', 'sv', 'svh', 'xml', 'rdf', 'rss', 'wsdl', 'xslt', 'atom', 'mathml', 'mml', 'xul', 'xbl', 'xaml', 'yaml', 'yml', 'asp', 'properties', 'gitignore', 'log', 'bas', 'prg', 'python', 'ftl', 'aspx', 'mp3', 'wav', 'mp4', 'flv', 'avi', 'mov', 'wmv', 'mkv', '3gp', 'rm', 'xmind', 'rp'],
      actionUrl: $A.apiUrl('dialog/msg/sendfile')
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(['userToken'])), {}, {
    headers: function headers() {
      return {
        fd: $A.getStorageString("userWsFd"),
        token: this.userToken
      };
    },
    params: function params() {
      return {
        dialog_id: this.dialogId
      };
    }
  }),
  methods: {
    handleProgress: function handleProgress(event, file) {
      //上传时
      if (file.tempId === undefined) {
        file.tempId = $A.randomString(8);
        this.$emit('on-progress', file);
      }
    },
    handleSuccess: function handleSuccess(res, file) {
      //上传完成
      if (res.ret === 1) {
        file.data = res.data;
        this.$emit('on-success', file);

        if (res.data.task_id) {
          this.$store.dispatch("getTaskFiles", res.data.task_id);
        }
      } else {
        $A.modalWarning({
          title: '发送失败',
          content: '文件 ' + file.name + ' 发送失败，' + res.msg
        });
        this.$emit('on-error', file);
        this.$refs.upload.fileList.pop();
      }
    },
    handleFormatError: function handleFormatError(file) {
      //上传类型错误
      $A.modalWarning({
        title: '文件格式不正确',
        content: '文件 ' + file.name + ' 格式不正确，仅支持发送：' + this.uploadFormat.join(',')
      });
    },
    handleMaxSize: function handleMaxSize(file) {
      //上传大小错误
      $A.modalWarning({
        title: '超出文件大小限制',
        content: '文件 ' + file.name + ' 太大，不能发送超过' + $A.bytesToSize(this.maxSize * 1024) + '。'
      });
    },
    handleClick: function handleClick() {
      //手动上传
      this.$refs.upload.handleClick();
    },
    upload: function upload(file) {
      //手动传file
      this.$refs.upload.upload(file);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/components/DialogView.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/components/DialogView.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_WCircle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/WCircle */ "./resources/assets/js/components/WCircle.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
  name: "DialogView",
  components: {
    WCircle: _components_WCircle__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    msgData: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    dialogType: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      popperShow: false,
      allList: []
    };
  },
  activated: function activated() {
    this.msgRead();
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(['userToken', 'userId', 'dialogMsgs'])), {}, {
    readList: function readList() {
      return this.allList.filter(function (_ref) {
        var read_at = _ref.read_at;
        return read_at;
      });
    },
    unreadList: function unreadList() {
      return this.allList.filter(function (_ref2) {
        var read_at = _ref2.read_at;
        return !read_at;
      });
    },
    showMenu: function showMenu() {
      return this.msgData.userid == this.userId || this.msgData.type === 'file';
    }
  }),
  watch: {
    msgData: {
      handler: function handler() {
        this.msgRead();
      },
      immediate: true
    },
    popperShow: function popperShow(val) {
      var _this = this;

      if (val) {
        this.$store.dispatch("call", {
          url: 'dialog/msg/readlist',
          data: {
            msg_id: this.msgData.id
          }
        }).then(function (_ref3) {
          var data = _ref3.data;
          _this.allList = data;
          setTimeout(_this.$refs.percent.updatePopper, 10);
        })["catch"](function () {
          _this.allList = [];
          setTimeout(_this.$refs.percent.updatePopper, 10);
        });
      }
    }
  },
  methods: {
    msgRead: function msgRead() {
      var _this2 = this;

      if (this.msgData._r === true) {
        return;
      }

      this.msgData._r = true; //

      setTimeout(function () {
        if (!_this2.$el.offsetParent) {
          _this2.msgData._r = false;
          return;
        }

        _this2.$store.dispatch("dialogMsgRead", _this2.msgData);
      }, 50);
    },
    textMsg: function textMsg(text) {
      if (!text) {
        return "";
      }

      text = text.trim().replace(/(\n\x20*){3,}/g, "\n\n");
      return text;
    },
    imageStyle: function imageStyle(info) {
      var width = info.width,
          height = info.height;

      if (width && height) {
        var maxW = 180,
            maxH = 180,
            tempW = width,
            tempH = height;

        if (width > maxW || height > maxH) {
          if (width > height) {
            tempW = maxW;
            tempH = height * (maxW / width);
          } else {
            tempW = width * (maxH / height);
            tempH = maxH;
          }
        }

        return {
          width: tempW + 'px',
          height: tempH + 'px'
        };
      }

      return {};
    },
    withdraw: function withdraw() {
      var _this3 = this;

      $A.modalConfirm({
        content: "\u786E\u5B9A\u64A4\u56DE\u6B64\u4FE1\u606F\u5417\uFF1F",
        okText: '撤回',
        loading: true,
        onOk: function onOk() {
          _this3.$store.dispatch("call", {
            url: 'dialog/msg/withdraw',
            data: {
              msg_id: _this3.msgData.id
            }
          }).then(function () {
            $A.messageSuccess("消息已撤回");

            _this3.$store.dispatch("forgetDialogMsg", _this3.msgData.id);

            _this3.$Modal.remove();
          })["catch"](function (_ref4) {
            var msg = _ref4.msg;
            $A.messageError(msg, 301);

            _this3.$Modal.remove();
          });
        }
      });
    },
    viewFile: function viewFile() {
      var _this$msgData = this.msgData,
          id = _this$msgData.id,
          dialog_id = _this$msgData.dialog_id,
          msg = _this$msgData.msg;

      if (['jpg', 'jpeg', 'gif', 'png'].includes(msg.ext)) {
        var list = $A.cloneJSON(this.dialogMsgs.filter(function (item) {
          return item.dialog_id === dialog_id && item.type === 'file' && ['jpg', 'jpeg', 'gif', 'png'].includes(item.msg.ext);
        })).sort(function (a, b) {
          return a.id - b.id;
        });
        var index = list.findIndex(function (item) {
          return item.id === id;
        });

        if (index > -1) {
          this.$store.state.previewImageIndex = index;
          this.$store.state.previewImageList = list.map(function (_ref5) {
            var msg = _ref5.msg;
            return msg.path;
          });
        } else {
          this.$store.state.previewImageIndex = 0;
          this.$store.state.previewImageList = [msg.path];
        }

        return;
      }

      if (this.$Electron) {
        this.$Electron.sendMessage('windowRouter', {
          name: 'file-msg-' + this.msgData.id,
          path: "/single/file/msg/" + this.msgData.id,
          userAgent: "/hideenOfficeTitle/",
          force: false,
          config: {
            title: "".concat(this.msgData.msg.name, " (").concat($A.bytesToSize(this.msgData.msg.size), ")"),
            titleFixed: true,
            parent: null,
            width: Math.min(window.screen.availWidth, 1440),
            height: Math.min(window.screen.availHeight, 900)
          }
        });
      } else {
        window.open($A.apiUrl("../single/file/msg/".concat(this.msgData.id)));
      }
    },
    downFile: function downFile() {
      var _this4 = this;

      $A.modalConfirm({
        title: '下载文件',
        content: "".concat(this.msgData.msg.name, " (").concat($A.bytesToSize(this.msgData.msg.size), ")"),
        okText: '立即下载',
        onOk: function onOk() {
          _this4.$store.dispatch('downUrl', $A.apiUrl("dialog/msg/download?msg_id=".concat(_this4.msgData.id)));
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/components/DialogWrapper.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/components/DialogWrapper.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_DragInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/DragInput */ "./resources/assets/js/components/DragInput.vue");
/* harmony import */ var _components_ScrollerY__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/ScrollerY */ "./resources/assets/js/components/ScrollerY.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _DialogView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DialogView */ "./resources/assets/js/pages/manage/components/DialogView.vue");
/* harmony import */ var _DialogUpload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DialogUpload */ "./resources/assets/js/pages/manage/components/DialogUpload.vue");
/* harmony import */ var le5le_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! le5le-store */ "./node_modules/le5le-store/index.js");
/* harmony import */ var le5le_store__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(le5le_store__WEBPACK_IMPORTED_MODULE_4__);
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
//
//
//
//






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "DialogWrapper",
  components: {
    DialogUpload: _DialogUpload__WEBPACK_IMPORTED_MODULE_3__["default"],
    DialogView: _DialogView__WEBPACK_IMPORTED_MODULE_2__["default"],
    ScrollerY: _components_ScrollerY__WEBPACK_IMPORTED_MODULE_1__["default"],
    DragInput: _components_DragInput__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    dialogId: {
      type: Number,
      "default": 0
    }
  },
  data: function data() {
    return {
      visible: true,
      autoBottom: true,
      autoInterval: null,
      dialogDrag: false,
      inputFocus: false,
      msgText: '',
      msgNew: 0,
      topId: 0,
      tempMsgs: [],
      dialogMsgSubscribe: null,
      pasteShow: false,
      pasteFile: [],
      pasteItem: []
    };
  },
  mounted: function mounted() {
    this.dialogMsgSubscribe = le5le_store__WEBPACK_IMPORTED_MODULE_4__.Store.subscribe('dialogMsgPush', this.addDialogMsg);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.dialogMsgSubscribe) {
      this.dialogMsgSubscribe.unsubscribe();
      this.dialogMsgSubscribe = null;
    }
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapState)(['isDesktop', 'userId', 'cacheDialogs', 'dialogMsgs', 'wsOpenNum'])), {}, {
    dialogData: function dialogData() {
      var _this = this;

      return this.cacheDialogs.find(function (_ref) {
        var id = _ref.id;
        return id == _this.dialogId;
      }) || {};
    },
    dialogMsgList: function dialogMsgList() {
      var _this2 = this;

      if (!this.dialogId) {
        return [];
      }

      return $A.cloneJSON(this.dialogMsgs.filter(function (_ref2) {
        var dialog_id = _ref2.dialog_id;
        return dialog_id == _this2.dialogId;
      })).sort(function (a, b) {
        return a.id - b.id;
      });
    },
    isAutoBottom: function isAutoBottom() {
      if (this.inputFocus && !this.isDesktop) {
        return false;
      }

      return this.autoBottom;
    },
    tempMsgList: function tempMsgList() {
      var _this3 = this;

      if (!this.dialogId) {
        return [];
      }

      return $A.cloneJSON(this.tempMsgs.filter(function (_ref3) {
        var dialog_id = _ref3.dialog_id;
        return dialog_id == _this3.dialogId;
      }));
    },
    peopleNum: function peopleNum() {
      return this.dialogData.type === 'group' ? $A.runNum(this.dialogData.people) : 0;
    },
    pasteTitle: function pasteTitle() {
      var pasteItem = this.pasteItem;
      var hasImage = pasteItem.find(function (_ref4) {
        var type = _ref4.type;
        return type == 'image';
      });
      var hasFile = pasteItem.find(function (_ref5) {
        var type = _ref5.type;
        return type != 'image';
      });

      if (hasImage && hasFile) {
        return '发送文件/图片';
      } else if (hasImage) {
        return '发送图片';
      }

      return '发送文件';
    }
  }),
  watch: {
    '$route': {
      handler: function handler(route) {
        var _this4 = this;

        if ($A.isJson(window.__sendDialogMsg) && window.__sendDialogMsg.time > $A.Time()) {
          var _window$__sendDialogM = window.__sendDialogMsg,
              msgFile = _window$__sendDialogM.msgFile,
              msgText = _window$__sendDialogM.msgText;
          window.__sendDialogMsg = null;
          this.$nextTick(function () {
            if ($A.isArray(msgFile) && msgFile.length > 0) {
              _this4.sendFileMsg(msgFile);
            } else if (msgText) {
              _this4.sendMsg(msgText);
            }
          });
        }

        if (route.query && route.query._) {
          var query = $A.cloneJSON(route.query);
          delete query._;
          this.goForward({
            query: query
          }, true);
        }
      },
      immediate: true
    },
    dialogId: {
      handler: function handler(id) {
        var _this5 = this;

        if (id) {
          this.msgNew = 0;
          this.topId = -1;
          this.visible = false;
          this.$store.dispatch("getDialogMsgs", id).then(function (_) {
            _this5.onToBottom();

            _this5.visible = true;
          });
        }
      },
      immediate: true
    },
    wsOpenNum: function wsOpenNum(num) {
      if (num <= 1) return;
      this.$store.dispatch("getDialogMsgs", this.dialogId);
    }
  },
  methods: {
    sendMsg: function sendMsg(text) {
      var _this6 = this;

      if (typeof text === "string" && text) {
        this.msgText = text;
        this.$refs.input.focus();
      }

      if (this.msgText == '') {
        return;
      }

      var tempId = $A.randomString(16);
      this.tempMsgs.push({
        id: tempId,
        dialog_id: this.dialogData.id,
        type: 'text',
        userid: this.userId,
        msg: {
          text: this.msgText
        }
      });

      if (!this.isDesktop) {
        this.$refs.input.blur();
      }

      this.onToBottom();
      this.onActive(); //

      this.$store.dispatch("call", {
        url: 'dialog/msg/sendtext',
        data: {
          dialog_id: this.dialogId,
          text: this.msgText
        },
        method: 'post'
      }).then(function (_ref6) {
        var data = _ref6.data;
        _this6.tempMsgs = _this6.tempMsgs.filter(function (_ref7) {
          var id = _ref7.id;
          return id != tempId;
        });

        _this6.sendSuccess(data);
      })["catch"](function (_ref8) {
        var msg = _ref8.msg;
        $A.modalError(msg);
        _this6.tempMsgs = _this6.tempMsgs.filter(function (_ref9) {
          var id = _ref9.id;
          return id != tempId;
        });
      }); //

      this.msgText = '';
    },
    sendFileMsg: function sendFileMsg(files) {
      var _this7 = this;

      if (files.length > 0) {
        this.pasteFile = [];
        this.pasteItem = [];
        files.some(function (file) {
          var reader = new FileReader();
          reader.readAsDataURL(file);

          reader.onload = function (_ref10) {
            var target = _ref10.target;

            _this7.pasteFile.push(file);

            _this7.pasteItem.push({
              type: $A.getMiddle(file.type, null, '/'),
              name: file.name,
              size: file.size,
              result: target.result
            });

            _this7.pasteShow = true;
          };
        });
      }
    },
    chatKeydown: function chatKeydown(e) {
      if (e.keyCode === 13) {
        if (e.shiftKey) {
          return;
        }

        e.preventDefault();
        this.sendMsg();
      }
    },
    pasteDrag: function pasteDrag(e, type) {
      var files = type === 'drag' ? e.dataTransfer.files : e.clipboardData.files;
      var postFiles = Array.prototype.slice.call(files);

      if (postFiles.length > 0) {
        e.preventDefault();
        this.sendFileMsg(postFiles);
      }
    },
    chatPasteDrag: function chatPasteDrag(e, type) {
      this.dialogDrag = false;
      this.pasteDrag(e, type);
    },
    chatDragOver: function chatDragOver(show, e) {
      var _this8 = this;

      var random = this.__dialogDrag = $A.randomString(8);

      if (!show) {
        setTimeout(function () {
          if (random === _this8.__dialogDrag) {
            _this8.dialogDrag = show;
          }
        }, 150);
      } else {
        if (e.dataTransfer.effectAllowed === 'move') {
          return;
        }

        this.dialogDrag = true;
      }
    },
    pasteSend: function pasteSend() {
      var _this9 = this;

      this.pasteFile.some(function (file) {
        _this9.$refs.chatUpload.upload(file);
      });
    },
    chatFile: function chatFile(type, file) {
      switch (type) {
        case 'progress':
          this.tempMsgs.push({
            id: file.tempId,
            dialog_id: this.dialogData.id,
            type: 'loading',
            userid: this.userId,
            msg: {}
          });

          if (!this.isDesktop) {
            this.$refs.input.blur();
          }

          this.onToBottom();
          this.onActive();
          break;

        case 'error':
          this.tempMsgs = this.tempMsgs.filter(function (_ref11) {
            var id = _ref11.id;
            return id != file.tempId;
          });
          break;

        case 'success':
          this.tempMsgs = this.tempMsgs.filter(function (_ref12) {
            var id = _ref12.id;
            return id != file.tempId;
          });
          this.sendSuccess(file.data);
          break;
      }
    },
    sendSuccess: function sendSuccess(data) {
      var _this10 = this;

      if ($A.isArray(data)) {
        data.some(function (item) {
          _this10.sendSuccess(item);
        });
        return;
      }

      this.$store.dispatch("saveDialogMsg", data);
      this.$store.dispatch("increaseTaskMsgNum", this.dialogId);
      this.$store.dispatch("updateDialogLastMsg", data);
      this.onActive();
    },
    chatScroll: function chatScroll(res) {
      switch (res.directionreal) {
        case 'up':
          if (res.scrollE < 10) {
            this.msgNew = 0;
            this.autoBottom = true;
          }

          break;

        case 'down':
          this.autoBottom = false;
          break;
      }

      if (res.scale >= 1) {
        this.msgNew = 0;
        this.autoBottom = true;
      }
    },
    onEventFocus: function onEventFocus(e) {
      this.inputFocus = true;
      this.$emit("on-focus", e);
    },
    onEventblur: function onEventblur(e) {
      this.inputFocus = false;
      this.$emit("on-blur", e);
    },
    onActive: function onActive() {
      this.$emit("on-active");
    },
    onToBottom: function onToBottom() {
      this.autoBottom = true;
      this.$refs.scroller && this.$refs.scroller.autoToBottom();
    },
    openProject: function openProject() {
      if (!this.dialogData.group_info) {
        return;
      }

      this.goForward({
        path: '/manage/project/' + this.dialogData.group_info.id
      });
    },
    openTask: function openTask() {
      if (!this.dialogData.group_info) {
        return;
      }

      this.$store.dispatch("openTask", this.dialogData.group_info.id);
    },
    loadNextPage: function loadNextPage() {
      var _this11 = this;

      var topId = this.dialogMsgList[0].id;
      this.$store.dispatch('getDialogMoreMsgs', this.dialogId).then(function () {
        _this11.$nextTick(function () {
          _this11.topId = topId;
          $A.scrollToView(document.getElementById("view_" + topId), {
            behavior: 'instant',
            inline: 'start'
          });
        });
      })["catch"](function () {});
    },
    addDialogMsg: function addDialogMsg() {
      var _this12 = this;

      if (this.isAutoBottom) {
        this.$nextTick(this.onToBottom);
      } else {
        this.$nextTick(function () {
          if (_this12.$refs.scroller && _this12.$refs.scroller.scrollInfo().scrollE > 10) {
            _this12.msgNew++;
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/messenger.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/messenger.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_DialogWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/DialogWrapper */ "./resources/assets/js/pages/manage/components/DialogWrapper.vue");
/* harmony import */ var _components_ScrollerY__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ScrollerY */ "./resources/assets/js/components/ScrollerY.vue");
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
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ScrollerY: _components_ScrollerY__WEBPACK_IMPORTED_MODULE_1__["default"],
    DialogWrapper: _components_DialogWrapper__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      tabActive: 'dialog',
      dialogType: [{
        type: '',
        name: '全部'
      }, {
        type: 'project',
        name: '项目'
      }, {
        type: 'task',
        name: '任务'
      }, {
        type: 'user',
        name: '个人'
      }],
      dialogActive: '',
      dialogKey: '',
      dialogId: 0,
      contactsKey: '',
      contactsLoad: 0,
      contactsList: [],
      contactsData: null,
      contactsCurrentPage: 1,
      contactsHasMorePages: false,
      topOperateStyles: {},
      topOperateVisible: false,
      topOperateItem: {}
    };
  },
  activated: function activated() {
    this.openDialogStorage();
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapState)(['userId', 'cacheDialogs', 'dialogOpenId'])), {}, {
    dialogList: function dialogList() {
      var _this = this;

      var dialogActive = this.dialogActive,
          dialogKey = this.dialogKey;

      if (dialogActive == '' && dialogKey == '') {
        return this.cacheDialogs.filter(function (dialog) {
          return _this.filterDialog(dialog);
        }).sort(function (a, b) {
          if (a.top_at || b.top_at) {
            return $A.Date(b.top_at) - $A.Date(a.top_at);
          }

          return $A.Date(b.last_at) - $A.Date(a.last_at);
        });
      }

      return this.cacheDialogs.filter(function (dialog) {
        if (!_this.filterDialog(dialog)) {
          return false;
        }

        if (dialogActive) {
          switch (dialogActive) {
            case 'project':
            case 'task':
              if (dialog.group_type != dialogActive) {
                return false;
              }

              break;

            case 'user':
              if (dialog.type != 'user') {
                return false;
              }

              break;

            default:
              return false;
          }
        }

        if (dialogKey) {
          var existName = $A.strExists(dialog.name, dialogKey);
          var existMsg = dialog.last_msg && dialog.last_msg.type === 'text' && $A.strExists(dialog.last_msg.msg.text, dialogKey);

          if (!existName && !existMsg) {
            return false;
          }
        }

        return true;
      }).sort(function (a, b) {
        if (a.top_at || b.top_at) {
          return $A.Date(b.top_at) - $A.Date(a.top_at);
        }

        return $A.Date(b.last_at) - $A.Date(a.last_at);
      });
    },
    msgUnread: function msgUnread() {
      return function (type) {
        var num = 0;
        this.cacheDialogs.some(function (dialog) {
          var unread = $A.getDialogUnread(dialog);

          if (unread) {
            switch (type) {
              case 'project':
              case 'task':
                if (type == dialog.group_type) {
                  num += unread;
                }

                break;

              case 'user':
                if (type == dialog.type) {
                  num += unread;
                }

                break;

              default:
                num += unread;
                break;
            }
          }
        });
        return num;
      };
    },
    overlayClass: function overlayClass() {
      return {
        'overlay-y': true,
        'overlay-none': this.topOperateVisible === true
      };
    }
  }),
  watch: {
    tabActive: function tabActive(val) {
      if (val && this.contactsData === null) {
        this.getContactsList(1);
      }
    },
    dialogId: function dialogId(id) {
      $A.setStorage("messenger::dialogId", id);
      this.$store.state.dialogOpenId = id;
    },
    dialogOpenId: function dialogOpenId(id) {
      if (id > 0) this.dialogId = id;
    },
    contactsKey: function contactsKey(val) {
      var _this2 = this;

      setTimeout(function () {
        if (_this2.contactsKey == val) {
          _this2.contactsData = null;

          _this2.getContactsList(1);
        }
      }, 600);
    }
  },
  methods: {
    listScroll: function listScroll(res) {
      switch (res.directionreal) {
        case 'up':
          if (res.scrollE < 10) {
            if (this.tabActive === 'contacts' && this.contactsLoad == 0 && this.contactsHasMorePages) {
              this.getContactsList(this.contactsCurrentPage + 1);
            }
          }

          break;
      }

      this.topOperateVisible = false;
    },
    onActive: function onActive(type) {
      if (this.dialogActive == type) {
        // 再次点击滚动到未读条目
        var dialog = this.dialogList.find(function (dialog) {
          return $A.getDialogUnread(dialog) > 0;
        });

        if (dialog) {
          $A.scrollToView(this.$refs["dialog_".concat(dialog.id)][0], {
            behavior: 'smooth',
            scrollMode: 'if-needed'
          });
        }
      }

      this.dialogActive = type;
    },
    closeDialog: function closeDialog() {
      this.dialogId = 0;
    },
    openDialog: function openDialog(dialog, smooth) {
      this.dialogId = dialog.id;
      this.scrollIntoActive(smooth);
    },
    openDialogStorage: function openDialogStorage() {
      var _this3 = this;

      this.dialogId = $A.getStorageInt("messenger::dialogId");

      if (this.dialogId > 0) {
        var dialog = this.cacheDialogs.find(function (_ref) {
          var id = _ref.id;
          return id === _this3.dialogId;
        });
        dialog && this.openDialog(dialog, false);
      }
    },
    openContacts: function openContacts(user) {
      var _this4 = this;

      this.tabActive = 'dialog';
      this.$store.dispatch("openDialogUserid", user.userid).then(function () {
        _this4.scrollIntoActive();
      });
    },
    filterDialog: function filterDialog(dialog) {
      if ($A.getDialogUnread(dialog) > 0 || dialog.id == this.dialogId || dialog.top_at) {
        return true;
      }

      if (dialog.name === undefined) {
        return false;
      }

      if (!dialog.last_at) {
        return false;
      }

      if (dialog.type == 'group') {
        if (['project', 'task'].includes(dialog.group_type) && $A.isJson(dialog.group_info)) {
          if (dialog.group_type == 'task' && dialog.group_info.complete_at) {
            // 已完成5天后隐藏对话
            var time = Math.max($A.Date(dialog.last_at, true), $A.Date(dialog.group_info.complete_at, true));

            if (5 * 86400 + time < $A.Time()) {
              return false;
            }
          }

          if (dialog.group_info.deleted_at) {
            // 已删除2天后隐藏对话
            var _time = Math.max($A.Date(dialog.last_at, true), $A.Date(dialog.group_info.deleted_at, true));

            if (2 * 86400 + _time < $A.Time()) {
              return false;
            }
          }

          if (dialog.group_info.archived_at) {
            // 已归档3天后隐藏对话
            var _time2 = Math.max($A.Date(dialog.last_at, true), $A.Date(dialog.group_info.archived_at, true));

            if (3 * 86400 + _time2 < $A.Time()) {
              return false;
            }
          }
        }
      }

      return true;
    },
    getContactsList: function getContactsList(page) {
      var _this5 = this;

      if (this.contactsData === null) {
        this.contactsData = {};
      }

      this.contactsLoad++;
      this.$store.dispatch("call", {
        url: 'users/search',
        data: {
          keys: {
            key: this.contactsKey
          },
          sorts: {
            az: 'asc'
          },
          page: page,
          pagesize: 50
        }
      }).then(function (_ref2) {
        var data = _ref2.data;
        _this5.contactsLoad--;
        data.data.some(function (user) {
          if (user.userid === _this5.userId) {
            return false;
          }

          var az = user.az ? user.az.toUpperCase() : "#";
          if (typeof _this5.contactsData[az] === "undefined") _this5.contactsData[az] = []; //

          var index = _this5.contactsData[az].findIndex(function (_ref3) {
            var userid = _ref3.userid;
            return userid === user.userid;
          });

          if (index > -1) {
            _this5.contactsData[az].splice(index, 1, user);
          } else {
            _this5.contactsData[az].push(user);

            _this5.contactsList.push(user);
          }
        });
        _this5.contactsCurrentPage = data.current_page;
        _this5.contactsHasMorePages = data.current_page < data.last_page;
      })["catch"](function () {
        _this5.contactsLoad--;
        _this5.contactsHasMorePages = false;
      });
    },
    formatLastMsg: function formatLastMsg(data) {
      if ($A.isJson(data)) {
        switch (data.type) {
          case 'text':
            return data.msg.text;

          case 'file':
            if (data.msg.type == 'img') {
              return '[' + this.$L('图片') + ']';
            }

            return '[' + this.$L('文件') + '] ' + data.msg.name;

          default:
            return '[' + this.$L('未知的消息') + ']';
        }
      }

      return '';
    },
    lastMsgReadDone: function lastMsgReadDone(data) {
      if ($A.isJson(data)) {
        var userid = data.userid,
            percentage = data.percentage;

        if (userid === this.userId) {
          return percentage === 100 ? 'md-done-all' : 'md-checkmark';
        }
      }

      return null;
    },
    scrollIntoActive: function scrollIntoActive(smooth) {
      var _this6 = this;

      this.$nextTick(function () {
        if (_this6.$refs.list) {
          var active = _this6.$refs.list.querySelector(".active");

          if (active) {
            $A.scrollToView(active, {
              behavior: smooth === true ? 'smooth' : 'instant',
              scrollMode: 'if-needed'
            });
          } else {
            var dialog = _this6.cacheDialogs.find(function (_ref4) {
              var id = _ref4.id;
              return id == _this6.dialogId;
            });

            if (dialog && _this6.dialogActive) {
              _this6.dialogActive = '';

              _this6.$nextTick(function () {
                var active = _this6.$refs.list.querySelector(".active");

                if (active) {
                  $A.scrollToView(active, {
                    behavior: smooth === true ? 'smooth' : 'instant',
                    scrollMode: 'if-needed'
                  });
                }
              });
            }
          }
        }
      });
    },
    handleRightClick: function handleRightClick(event, item) {
      var _this7 = this;

      this.handleClickTopOperateOutside();
      this.topOperateItem = $A.isJson(item) ? item : {};
      this.$nextTick(function () {
        var dialogWrap = _this7.$refs.dialogWrapper;
        var dialogBounding = dialogWrap.getBoundingClientRect();
        _this7.topOperateStyles = {
          left: "".concat(event.clientX - dialogBounding.left, "px"),
          top: "".concat(event.clientY - dialogBounding.top + 100 - _this7.$refs.list.scrollInfo().scrollY, "px")
        };
        _this7.topOperateVisible = true;
      });
    },
    handleClickTopOperateOutside: function handleClickTopOperateOutside() {
      this.topOperateVisible = false;
    },
    handleTopClick: function handleTopClick() {
      var _this8 = this;

      this.$store.dispatch("call", {
        url: 'dialog/top',
        data: {
          dialog_id: this.topOperateItem.id
        }
      }).then(function (_ref5) {
        var data = _ref5.data;

        _this8.$store.dispatch("saveDialog", data);

        _this8.$nextTick(function () {
          _this8.scrollIntoActive(false);
        });
      })["catch"](function (_ref6) {
        var msg = _ref6.msg;
        $A.modalError(msg);
      });
    },
    updateRead: function updateRead(type) {
      var _this9 = this;

      this.$store.dispatch("call", {
        url: 'dialog/msg/mark',
        data: {
          dialog_id: this.topOperateItem.id,
          type: type
        }
      }).then(function (_ref7) {
        var data = _ref7.data;

        _this9.$store.dispatch("saveDialog", data);
      })["catch"](function (_ref8) {
        var msg = _ref8.msg;
        $A.modalError(msg);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/view-design-hi/src/mixins/emitter.js":
/*!***********************************************************!*\
  !*** ./node_modules/view-design-hi/src/mixins/emitter.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function broadcast(componentName, eventName, params) {
    this.$children.forEach(child => {
        const name = child.$options.name;

        if (name === componentName) {
            child.$emit.apply(child, [eventName].concat(params));
        } else {
            // todo 如果 params 是空数组，接收到的会是 undefined
            broadcast.apply(child, [componentName, eventName].concat([params]));
        }
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    methods: {
        dispatch(componentName, eventName, params) {
            let parent = this.$parent || this.$root;
            let name = parent.$options.name;

            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent;

                if (parent) {
                    name = parent.$options.name;
                }
            }
            if (parent) {
                parent.$emit.apply(parent, [eventName].concat(params));
            }
        },
        broadcast(componentName, eventName, params) {
            broadcast.call(this, componentName, eventName, params);
        }
    }
});

/***/ }),

/***/ "./node_modules/view-design-hi/src/mixins/form.js":
/*!********************************************************!*\
  !*** ./node_modules/view-design-hi/src/mixins/form.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    inject: {
        FormInstance: {
            default: ''
        }
    },
    computed: {
        itemDisabled () {
            let state = this.disabled;
            if (!state && this.FormInstance) state = this.FormInstance.disabled;
            return state;
        }
    }
});


/***/ }),

/***/ "./node_modules/view-design-hi/src/utils/assist.js":
/*!*********************************************************!*\
  !*** ./node_modules/view-design-hi/src/utils/assist.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MutationObserver": () => (/* binding */ MutationObserver),
/* harmony export */   "addClass": () => (/* binding */ addClass),
/* harmony export */   "camelcaseToHyphen": () => (/* binding */ camelcaseToHyphen),
/* harmony export */   "deepCopy": () => (/* binding */ deepCopy),
/* harmony export */   "dimensionMap": () => (/* binding */ dimensionMap),
/* harmony export */   "findBrothersComponents": () => (/* binding */ findBrothersComponents),
/* harmony export */   "findComponentDownward": () => (/* binding */ findComponentDownward),
/* harmony export */   "findComponentUpward": () => (/* binding */ findComponentUpward),
/* harmony export */   "findComponentsDownward": () => (/* binding */ findComponentsDownward),
/* harmony export */   "findComponentsUpward": () => (/* binding */ findComponentsUpward),
/* harmony export */   "firstUpperCase": () => (/* binding */ firstUpperCase),
/* harmony export */   "getScrollBarSize": () => (/* binding */ getScrollBarSize),
/* harmony export */   "getStyle": () => (/* binding */ getStyle),
/* harmony export */   "hasClass": () => (/* binding */ hasClass),
/* harmony export */   "oneOf": () => (/* binding */ oneOf),
/* harmony export */   "removeClass": () => (/* binding */ removeClass),
/* harmony export */   "scrollTop": () => (/* binding */ scrollTop),
/* harmony export */   "setMatchMedia": () => (/* binding */ setMatchMedia),
/* harmony export */   "sharpMatcherRegx": () => (/* binding */ sharpMatcherRegx),
/* harmony export */   "warnProp": () => (/* binding */ warnProp)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");

const isServer = vue__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.$isServer;
// 判断参数是否是其中之一
function oneOf (value, validList) {
    for (let i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true;
        }
    }
    return false;
}

function camelcaseToHyphen (str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

// For Modal scrollBar hidden
let cached;
function getScrollBarSize (fresh) {
    if (isServer) return 0;
    if (fresh || cached === undefined) {
        const inner = document.createElement('div');
        inner.style.width = '100%';
        inner.style.height = '200px';

        const outer = document.createElement('div');
        const outerStyle = outer.style;

        outerStyle.position = 'absolute';
        outerStyle.top = 0;
        outerStyle.left = 0;
        outerStyle.pointerEvents = 'none';
        outerStyle.visibility = 'hidden';
        outerStyle.width = '200px';
        outerStyle.height = '150px';
        outerStyle.overflow = 'hidden';

        outer.appendChild(inner);

        document.body.appendChild(outer);

        const widthContained = inner.offsetWidth;
        outer.style.overflow = 'scroll';
        let widthScroll = inner.offsetWidth;

        if (widthContained === widthScroll) {
            widthScroll = outer.clientWidth;
        }

        document.body.removeChild(outer);

        cached = widthContained - widthScroll;
    }
    return cached;
}

// watch DOM change
const MutationObserver = isServer ? false : window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || false;

const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;

function camelCase(name) {
    return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
        return offset ? letter.toUpperCase() : letter;
    }).replace(MOZ_HACK_REGEXP, 'Moz$1');
}
// getStyle
function getStyle (element, styleName) {
    if (!element || !styleName) return null;
    styleName = camelCase(styleName);
    if (styleName === 'float') {
        styleName = 'cssFloat';
    }
    try {
        const computed = document.defaultView.getComputedStyle(element, '');
        return element.style[styleName] || computed ? computed[styleName] : null;
    } catch(e) {
        return element.style[styleName];
    }
}

// firstUpperCase
function firstUpperCase(str) {
    return str.toString()[0].toUpperCase() + str.toString().slice(1);
}


// Warn
function warnProp(component, prop, correctType, wrongType) {
    correctType = firstUpperCase(correctType);
    wrongType = firstUpperCase(wrongType);
    console.error(`[iView warn]: Invalid prop: type check failed for prop ${prop}. Expected ${correctType}, got ${wrongType}. (found in component: ${component})`);    // eslint-disable-line
}

function typeOf(obj) {
    const toString = Object.prototype.toString;
    const map = {
        '[object Boolean]'  : 'boolean',
        '[object Number]'   : 'number',
        '[object String]'   : 'string',
        '[object Function]' : 'function',
        '[object Array]'    : 'array',
        '[object Date]'     : 'date',
        '[object RegExp]'   : 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]'     : 'null',
        '[object Object]'   : 'object'
    };
    return map[toString.call(obj)];
}

// deepCopy
function deepCopy(data) {
    const t = typeOf(data);
    let o;

    if (t === 'array') {
        o = [];
    } else if ( t === 'object') {
        o = {};
    } else {
        return data;
    }

    if (t === 'array') {
        for (let i = 0; i < data.length; i++) {
            o.push(deepCopy(data[i]));
        }
    } else if ( t === 'object') {
        for (let i in data) {
            o[i] = deepCopy(data[i]);
        }
    }
    return o;
}



// scrollTop animation
function scrollTop(el, from = 0, to, duration = 500, endCallback) {
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = (
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                return window.setTimeout(callback, 1000/60);
            }
        );
    }
    const difference = Math.abs(from - to);
    const step = Math.ceil(difference / duration * 50);

    function scroll(start, end, step) {
        if (start === end) {
            endCallback && endCallback();
            return;
        }

        let d = (start + step > end) ? end : start + step;
        if (start > end) {
            d = (start - step < end) ? end : start - step;
        }

        if (el === window) {
            window.scrollTo(d, d);
        } else {
            el.scrollTop = d;
        }
        window.requestAnimationFrame(() => scroll(d, end, step));
    }
    scroll(from, to, step);
}

// Find components upward
function findComponentUpward (context, componentName, componentNames) {
    if (typeof componentName === 'string') {
        componentNames = [componentName];
    } else {
        componentNames = componentName;
    }

    let parent = context.$parent;
    let name = parent.$options.name;
    while (parent && (!name || componentNames.indexOf(name) < 0)) {
        parent = parent.$parent;
        if (parent) name = parent.$options.name;
    }
    return parent;
}


// Find component downward
function findComponentDownward (context, componentName) {
    const $children = context.$children;
    let children = null;

    if ($children.length) {
        for (const child of $children) {
            const name = child.$options.name;
            if (name === componentName) {
                children = child;
                break;
            } else {
                children = findComponentDownward(child, componentName);
                if (children) break;
            }
        }
    }
    return children;
}

// Find components downward
function findComponentsDownward (context, componentName) {
    return context.$children.reduce((components, child) => {
        if (child.$options.name === componentName) components.push(child);
        const foundChilds = findComponentsDownward(child, componentName);
        return components.concat(foundChilds);
    }, []);
}

// Find components upward
function findComponentsUpward (context, componentName) {
    let parents = [];
    const parent = context.$parent;
    if (parent) {
        if (parent.$options.name === componentName) parents.push(parent);
        return parents.concat(findComponentsUpward(parent, componentName));
    } else {
        return [];
    }
}

// Find brothers components
function findBrothersComponents (context, componentName, exceptMe = true) {
    let res = context.$parent.$children.filter(item => {
        return item.$options.name === componentName;
    });
    let index = res.findIndex(item => item._uid === context._uid);
    if (exceptMe) res.splice(index, 1);
    return res;
}

/* istanbul ignore next */
const trim = function(string) {
    return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};

/* istanbul ignore next */
function hasClass(el, cls) {
    if (!el || !cls) return false;
    if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
    if (el.classList) {
        return el.classList.contains(cls);
    } else {
        return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }
}

/* istanbul ignore next */
function addClass(el, cls) {
    if (!el) return;
    let curClass = el.className;
    const classes = (cls || '').split(' ');

    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.add(clsName);
        } else {
            if (!hasClass(el, clsName)) {
                curClass += ' ' + clsName;
            }
        }
    }
    if (!el.classList) {
        el.className = curClass;
    }
}

/* istanbul ignore next */
function removeClass(el, cls) {
    if (!el || !cls) return;
    const classes = cls.split(' ');
    let curClass = ' ' + el.className + ' ';

    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.remove(clsName);
        } else {
            if (hasClass(el, clsName)) {
                curClass = curClass.replace(' ' + clsName + ' ', ' ');
            }
        }
    }
    if (!el.classList) {
        el.className = trim(curClass);
    }
}

const dimensionMap = {
    xs: '480px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1600px',
};

function setMatchMedia () {
    if (typeof window !== 'undefined') {
        const matchMediaPolyfill = mediaQuery => {
            return {
                media: mediaQuery,
                matches: false,
                on() {},
                off() {},
            };
        };
        window.matchMedia = window.matchMedia || matchMediaPolyfill;
    }
}

const sharpMatcherRegx = /#([^#]+)$/;


/***/ }),

/***/ "./node_modules/view-design-hi/src/utils/calcTextareaHeight.js":
/*!*********************************************************************!*\
  !*** ./node_modules/view-design-hi/src/utils/calcTextareaHeight.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ calcTextareaHeight)
/* harmony export */ });
// Thanks to
// https://github.com/andreypopp/react-textarea-autosize/

// let hiddenTextarea;
//
// const HIDDEN_STYLE = `
//     height:0 !important;
//     min-height:0 !important;
//     max-height:none !important;
//     visibility:hidden !important;
//     overflow:hidden !important;
//     position:absolute !important;
//     z-index:-1000 !important;
//     top:0 !important;
//     right:0 !important
// `;
//
// const CONTEXT_STYLE = [
//     'letter-spacing',
//     'line-height',
//     'padding-top',
//     'padding-bottom',
//     'font-family',
//     'font-weight',
//     'font-size',
//     'text-rendering',
//     'text-transform',
//     'width',
//     'text-indent',
//     'padding-left',
//     'padding-right',
//     'border-width',
//     'box-sizing'
// ];
//
// function calculateNodeStyling(node) {
//     const style = window.getComputedStyle(node);
//
//     const boxSizing = style.getPropertyValue('box-sizing');
//
//     const paddingSize = (
//         parseFloat(style.getPropertyValue('padding-bottom')) +
//         parseFloat(style.getPropertyValue('padding-top'))
//     );
//
//     const borderSize = (
//         parseFloat(style.getPropertyValue('border-bottom-width')) +
//         parseFloat(style.getPropertyValue('border-top-width'))
//     );
//
//     const contextStyle = CONTEXT_STYLE
//         .map(name => `${name}:${style.getPropertyValue(name)}`)
//         .join(';');
//
//     return {contextStyle, paddingSize, borderSize, boxSizing};
// }
//
// export default function calcTextareaHeight(targetNode, minRows = null, maxRows = null) {
//     if (!hiddenTextarea) {
//         hiddenTextarea = document.createElement('textarea');
//         document.body.appendChild(hiddenTextarea);
//     }
//
//     let {
//         paddingSize,
//         borderSize,
//         boxSizing,
//         contextStyle
//     } = calculateNodeStyling(targetNode);
//
//     hiddenTextarea.setAttribute('style', `${contextStyle};${HIDDEN_STYLE}`);
//     hiddenTextarea.value = targetNode.value || targetNode.placeholder || '';
//
//     let height = hiddenTextarea.scrollHeight;
//     let minHeight = -Infinity;
//     let maxHeight = Infinity;
//     let overflowY;
//
//     if (boxSizing === 'border-box') {
//         height = height + borderSize;
//     } else if (boxSizing === 'content-box') {
//         height = height - paddingSize;
//     }
//
//     hiddenTextarea.value = '';
//     let singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
//
//     if (minRows !== null) {
//         minHeight = singleRowHeight * minRows;
//         if (boxSizing === 'border-box') {
//             minHeight = minHeight + paddingSize + borderSize;
//         }
//         height = Math.max(minHeight, height);
//     }
//     if (maxRows !== null) {
//         maxHeight = singleRowHeight * maxRows;
//         if (boxSizing === 'border-box') {
//             maxHeight = maxHeight + paddingSize + borderSize;
//         }
//         overflowY = height > maxHeight ? '' : 'hidden';
//         height = Math.min(maxHeight, height);
//     }
//
//     if (!maxRows) {
//         overflowY = 'hidden';
//     }
//
//     return {
//         height: `${height}px`,
//         minHeight: `${minHeight}px`,
//         maxHeight: `${maxHeight}px`,
//         overflowY
//     };
// }

const HIDDEN_TEXTAREA_STYLE = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important
`;

const SIZING_STYLE = [
    'letter-spacing',
    'line-height',
    'padding-top',
    'padding-bottom',
    'font-family',
    'font-weight',
    'font-size',
    'text-rendering',
    'text-transform',
    'width',
    'text-indent',
    'padding-left',
    'padding-right',
    'border-width',
    'box-sizing',
];

let computedStyleCache = {};
let hiddenTextarea;

function calculateNodeStyling(node, useCache = false) {
    const nodeRef = (
            node.getAttribute('id') ||
            node.getAttribute('data-reactid') ||
            node.getAttribute('name'));

    if (useCache && computedStyleCache[nodeRef]) {
        return computedStyleCache[nodeRef];
    }

    const style = window.getComputedStyle(node);

    const boxSizing = (
        style.getPropertyValue('box-sizing') ||
        style.getPropertyValue('-moz-box-sizing') ||
        style.getPropertyValue('-webkit-box-sizing')
    );

    const paddingSize = (
        parseFloat(style.getPropertyValue('padding-bottom')) +
        parseFloat(style.getPropertyValue('padding-top'))
    );

    const borderSize = (
        parseFloat(style.getPropertyValue('border-bottom-width')) +
        parseFloat(style.getPropertyValue('border-top-width'))
    );

    const sizingStyle = SIZING_STYLE
        .map(name => `${name}:${style.getPropertyValue(name)}`)
        .join(';');

    const nodeInfo = {
        sizingStyle,
        paddingSize,
        borderSize,
        boxSizing,
    };

    if (useCache && nodeRef) {
        computedStyleCache[nodeRef] = nodeInfo;
    }

    return nodeInfo;
}

function calcTextareaHeight(uiTextNode, minRows = null, maxRows = null, useCache = false) {
    if (!hiddenTextarea) {
        hiddenTextarea = document.createElement('textarea');
        document.body.appendChild(hiddenTextarea);
    }

    // Fix wrap="off" issue
    // https://github.com/ant-design/ant-design/issues/6577
    if (uiTextNode.getAttribute('wrap')) {
        hiddenTextarea.setAttribute('wrap', uiTextNode.getAttribute('wrap'));
    } else {
        hiddenTextarea.removeAttribute('wrap');
    }

    // Copy all CSS properties that have an impact on the height of the content in
    // the textbox
    let {
        paddingSize, borderSize,
        boxSizing, sizingStyle,
    } = calculateNodeStyling(uiTextNode, useCache);

    // Need to have the overflow attribute to hide the scrollbar otherwise
    // text-lines will not calculated properly as the shadow will technically be
    // narrower for content
    hiddenTextarea.setAttribute('style', `${sizingStyle};${HIDDEN_TEXTAREA_STYLE}`);
    hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || '';

    let minHeight = Number.MIN_SAFE_INTEGER;
    let maxHeight = Number.MAX_SAFE_INTEGER;
    let height = hiddenTextarea.scrollHeight;
    let overflowY;

    if (boxSizing === 'border-box') {
        // border-box: add border, since height = content + padding + border
        height = height + borderSize;
    } else if (boxSizing === 'content-box') {
        // remove padding, since height = content
        height = height - paddingSize;
    }

    if (minRows !== null || maxRows !== null) {
        // measure height of a textarea with a single row
        hiddenTextarea.value = ' ';
        let singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
        if (minRows !== null) {
            minHeight = singleRowHeight * minRows;
            if (boxSizing === 'border-box') {
                minHeight = minHeight + paddingSize + borderSize;
            }
            height = Math.max(minHeight, height);
        }
        if (maxRows !== null) {
            maxHeight = singleRowHeight * maxRows;
            if (boxSizing === 'border-box') {
                maxHeight = maxHeight + paddingSize + borderSize;
            }
            overflowY = height > maxHeight ? '' : 'hidden';
            height = Math.min(maxHeight, height);
        }
    }
    // Remove scroll bar flash when autosize without maxRows
    if (!maxRows) {
        overflowY = 'hidden';
    }

    return {
        height: `${height}px`,
        minHeight: `${minHeight}px`,
        maxHeight: `${maxHeight}px`,
        overflowY
    };
}


/***/ }),

/***/ "./resources/assets/js/components/DragInput.vue":
/*!******************************************************!*\
  !*** ./resources/assets/js/components/DragInput.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DragInput_vue_vue_type_template_id_72c0afcf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DragInput.vue?vue&type=template&id=72c0afcf& */ "./resources/assets/js/components/DragInput.vue?vue&type=template&id=72c0afcf&");
/* harmony import */ var _DragInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DragInput.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/DragInput.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DragInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DragInput_vue_vue_type_template_id_72c0afcf___WEBPACK_IMPORTED_MODULE_0__.render,
  _DragInput_vue_vue_type_template_id_72c0afcf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/DragInput.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/ScrollerY.vue":
/*!******************************************************!*\
  !*** ./resources/assets/js/components/ScrollerY.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ScrollerY_vue_vue_type_template_id_b0cbe890___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScrollerY.vue?vue&type=template&id=b0cbe890& */ "./resources/assets/js/components/ScrollerY.vue?vue&type=template&id=b0cbe890&");
/* harmony import */ var _ScrollerY_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScrollerY.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/ScrollerY.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ScrollerY_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ScrollerY_vue_vue_type_template_id_b0cbe890___WEBPACK_IMPORTED_MODULE_0__.render,
  _ScrollerY_vue_vue_type_template_id_b0cbe890___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/ScrollerY.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/WCircle.vue":
/*!****************************************************!*\
  !*** ./resources/assets/js/components/WCircle.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WCircle_vue_vue_type_template_id_a79e3680___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WCircle.vue?vue&type=template&id=a79e3680& */ "./resources/assets/js/components/WCircle.vue?vue&type=template&id=a79e3680&");
/* harmony import */ var _WCircle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WCircle.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/WCircle.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WCircle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WCircle_vue_vue_type_template_id_a79e3680___WEBPACK_IMPORTED_MODULE_0__.render,
  _WCircle_vue_vue_type_template_id_a79e3680___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/WCircle.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/pages/manage/components/DialogUpload.vue":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/pages/manage/components/DialogUpload.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DialogUpload_vue_vue_type_template_id_24aab695___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DialogUpload.vue?vue&type=template&id=24aab695& */ "./resources/assets/js/pages/manage/components/DialogUpload.vue?vue&type=template&id=24aab695&");
/* harmony import */ var _DialogUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DialogUpload.vue?vue&type=script&lang=js& */ "./resources/assets/js/pages/manage/components/DialogUpload.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DialogUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DialogUpload_vue_vue_type_template_id_24aab695___WEBPACK_IMPORTED_MODULE_0__.render,
  _DialogUpload_vue_vue_type_template_id_24aab695___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/pages/manage/components/DialogUpload.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/pages/manage/components/DialogView.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/js/pages/manage/components/DialogView.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DialogView_vue_vue_type_template_id_06cc6039___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DialogView.vue?vue&type=template&id=06cc6039& */ "./resources/assets/js/pages/manage/components/DialogView.vue?vue&type=template&id=06cc6039&");
/* harmony import */ var _DialogView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DialogView.vue?vue&type=script&lang=js& */ "./resources/assets/js/pages/manage/components/DialogView.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DialogView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DialogView_vue_vue_type_template_id_06cc6039___WEBPACK_IMPORTED_MODULE_0__.render,
  _DialogView_vue_vue_type_template_id_06cc6039___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/pages/manage/components/DialogView.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/pages/manage/components/DialogWrapper.vue":
/*!***********************************************************************!*\
  !*** ./resources/assets/js/pages/manage/components/DialogWrapper.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DialogWrapper_vue_vue_type_template_id_aa6eb2a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DialogWrapper.vue?vue&type=template&id=aa6eb2a2& */ "./resources/assets/js/pages/manage/components/DialogWrapper.vue?vue&type=template&id=aa6eb2a2&");
/* harmony import */ var _DialogWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DialogWrapper.vue?vue&type=script&lang=js& */ "./resources/assets/js/pages/manage/components/DialogWrapper.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DialogWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DialogWrapper_vue_vue_type_template_id_aa6eb2a2___WEBPACK_IMPORTED_MODULE_0__.render,
  _DialogWrapper_vue_vue_type_template_id_aa6eb2a2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/pages/manage/components/DialogWrapper.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/pages/manage/messenger.vue":
/*!********************************************************!*\
  !*** ./resources/assets/js/pages/manage/messenger.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _messenger_vue_vue_type_template_id_aec2d6f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messenger.vue?vue&type=template&id=aec2d6f4& */ "./resources/assets/js/pages/manage/messenger.vue?vue&type=template&id=aec2d6f4&");
/* harmony import */ var _messenger_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messenger.vue?vue&type=script&lang=js& */ "./resources/assets/js/pages/manage/messenger.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _messenger_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _messenger_vue_vue_type_template_id_aec2d6f4___WEBPACK_IMPORTED_MODULE_0__.render,
  _messenger_vue_vue_type_template_id_aec2d6f4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/pages/manage/messenger.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/DragInput.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/components/DragInput.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DragInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DragInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/DragInput.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DragInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/ScrollerY.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/components/ScrollerY.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScrollerY_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ScrollerY.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/ScrollerY.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScrollerY_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/WCircle.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/assets/js/components/WCircle.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WCircle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WCircle.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/WCircle.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WCircle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/pages/manage/components/DialogUpload.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/pages/manage/components/DialogUpload.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DialogUpload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/components/DialogUpload.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/pages/manage/components/DialogView.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/pages/manage/components/DialogView.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DialogView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/components/DialogView.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/pages/manage/components/DialogWrapper.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/pages/manage/components/DialogWrapper.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DialogWrapper.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/components/DialogWrapper.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/pages/manage/messenger.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/pages/manage/messenger.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_messenger_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./messenger.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/messenger.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_messenger_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/DragInput.vue?vue&type=template&id=72c0afcf&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/components/DragInput.vue?vue&type=template&id=72c0afcf& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DragInput_vue_vue_type_template_id_72c0afcf___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DragInput_vue_vue_type_template_id_72c0afcf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DragInput_vue_vue_type_template_id_72c0afcf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DragInput.vue?vue&type=template&id=72c0afcf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/DragInput.vue?vue&type=template&id=72c0afcf&");


/***/ }),

/***/ "./resources/assets/js/components/ScrollerY.vue?vue&type=template&id=b0cbe890&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/components/ScrollerY.vue?vue&type=template&id=b0cbe890& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScrollerY_vue_vue_type_template_id_b0cbe890___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScrollerY_vue_vue_type_template_id_b0cbe890___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScrollerY_vue_vue_type_template_id_b0cbe890___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ScrollerY.vue?vue&type=template&id=b0cbe890& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/ScrollerY.vue?vue&type=template&id=b0cbe890&");


/***/ }),

/***/ "./resources/assets/js/components/WCircle.vue?vue&type=template&id=a79e3680&":
/*!***********************************************************************************!*\
  !*** ./resources/assets/js/components/WCircle.vue?vue&type=template&id=a79e3680& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WCircle_vue_vue_type_template_id_a79e3680___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WCircle_vue_vue_type_template_id_a79e3680___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WCircle_vue_vue_type_template_id_a79e3680___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WCircle.vue?vue&type=template&id=a79e3680& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/WCircle.vue?vue&type=template&id=a79e3680&");


/***/ }),

/***/ "./resources/assets/js/pages/manage/components/DialogUpload.vue?vue&type=template&id=24aab695&":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/js/pages/manage/components/DialogUpload.vue?vue&type=template&id=24aab695& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogUpload_vue_vue_type_template_id_24aab695___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogUpload_vue_vue_type_template_id_24aab695___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogUpload_vue_vue_type_template_id_24aab695___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DialogUpload.vue?vue&type=template&id=24aab695& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/components/DialogUpload.vue?vue&type=template&id=24aab695&");


/***/ }),

/***/ "./resources/assets/js/pages/manage/components/DialogView.vue?vue&type=template&id=06cc6039&":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/pages/manage/components/DialogView.vue?vue&type=template&id=06cc6039& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogView_vue_vue_type_template_id_06cc6039___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogView_vue_vue_type_template_id_06cc6039___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogView_vue_vue_type_template_id_06cc6039___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DialogView.vue?vue&type=template&id=06cc6039& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/components/DialogView.vue?vue&type=template&id=06cc6039&");


/***/ }),

/***/ "./resources/assets/js/pages/manage/components/DialogWrapper.vue?vue&type=template&id=aa6eb2a2&":
/*!******************************************************************************************************!*\
  !*** ./resources/assets/js/pages/manage/components/DialogWrapper.vue?vue&type=template&id=aa6eb2a2& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogWrapper_vue_vue_type_template_id_aa6eb2a2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogWrapper_vue_vue_type_template_id_aa6eb2a2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogWrapper_vue_vue_type_template_id_aa6eb2a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DialogWrapper.vue?vue&type=template&id=aa6eb2a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/components/DialogWrapper.vue?vue&type=template&id=aa6eb2a2&");


/***/ }),

/***/ "./resources/assets/js/pages/manage/messenger.vue?vue&type=template&id=aec2d6f4&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/pages/manage/messenger.vue?vue&type=template&id=aec2d6f4& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_messenger_vue_vue_type_template_id_aec2d6f4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_messenger_vue_vue_type_template_id_aec2d6f4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_messenger_vue_vue_type_template_id_aec2d6f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./messenger.vue?vue&type=template&id=aec2d6f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/messenger.vue?vue&type=template&id=aec2d6f4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/DragInput.vue?vue&type=template&id=72c0afcf&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/DragInput.vue?vue&type=template&id=72c0afcf& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: _vm.wrapClasses },
    [
      _vm.type !== "textarea"
        ? [
            _vm.prepend
              ? _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.slotReady,
                        expression: "slotReady",
                      },
                    ],
                    class: [_vm.prefixCls + "-group-prepend"],
                  },
                  [_vm._t("prepend")],
                  2
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.clearable && _vm.currentValue && !_vm.itemDisabled
              ? _c("i", {
                  staticClass: "ivu-icon",
                  class: [
                    "ivu-icon-ios-close-circle",
                    _vm.prefixCls + "-icon",
                    _vm.prefixCls + "-icon-clear",
                    _vm.prefixCls + "-icon-normal",
                  ],
                  on: { click: _vm.handleClear },
                })
              : _vm.icon
              ? _c("i", {
                  staticClass: "ivu-icon",
                  class: [
                    "ivu-icon-" + _vm.icon,
                    _vm.prefixCls + "-icon",
                    _vm.prefixCls + "-icon-normal",
                  ],
                  on: { click: _vm.handleIconClick },
                })
              : _vm.search && _vm.enterButton === false
              ? _c("i", {
                  staticClass: "ivu-icon ivu-icon-ios-search",
                  class: [
                    _vm.prefixCls + "-icon",
                    _vm.prefixCls + "-icon-normal",
                    _vm.prefixCls + "-search-icon",
                  ],
                  on: { click: _vm.handleSearch },
                })
              : _vm.showSuffix
              ? _c(
                  "span",
                  { staticClass: "ivu-input-suffix" },
                  [
                    _vm._t("suffix", function () {
                      return [
                        _vm.suffix
                          ? _c("i", {
                              staticClass: "ivu-icon",
                              class: ["ivu-icon-" + _vm.suffix],
                            })
                          : _vm._e(),
                      ]
                    }),
                  ],
                  2
                )
              : _vm.showWordLimit
              ? _c("span", { staticClass: "ivu-input-word-count" }, [
                  _vm._v(_vm._s(_vm.textLength) + "/" + _vm._s(_vm.upperLimit)),
                ])
              : _vm.password
              ? _c(
                  "span",
                  {
                    staticClass: "ivu-input-suffix",
                    on: { click: _vm.handleToggleShowPassword },
                  },
                  [
                    _vm.showPassword
                      ? _c("i", {
                          staticClass: "ivu-icon ivu-icon-ios-eye-off-outline",
                        })
                      : _c("i", {
                          staticClass: "ivu-icon ivu-icon-ios-eye-outline",
                        }),
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _c("transition", { attrs: { name: "fade" } }, [
              !_vm.icon
                ? _c("i", {
                    staticClass: "ivu-icon ivu-icon-ios-loading ivu-load-loop",
                    class: [
                      _vm.prefixCls + "-icon",
                      _vm.prefixCls + "-icon-validate",
                    ],
                  })
                : _vm._e(),
            ]),
            _vm._v(" "),
            _c("input", {
              ref: "input",
              class: _vm.inputClasses,
              attrs: {
                id: _vm.elementId,
                autocomplete: _vm.autocomplete,
                spellcheck: _vm.spellcheck,
                type: _vm.currentType,
                placeholder: _vm.placeholder,
                disabled: _vm.itemDisabled,
                maxlength: _vm.maxlength,
                readonly: _vm.readonly,
                name: _vm.name,
                number: _vm.number,
                autofocus: _vm.autofocus,
              },
              domProps: { value: _vm.currentValue },
              on: {
                keyup: [
                  function ($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.handleEnter.apply(null, arguments)
                  },
                  _vm.handleKeyup,
                ],
                keypress: _vm.handleKeypress,
                keydown: _vm.handleKeydown,
                focus: _vm.handleFocus,
                blur: _vm.handleBlur,
                compositionstart: _vm.handleComposition,
                compositionupdate: _vm.handleComposition,
                compositionend: _vm.handleComposition,
                input: _vm.handleInput,
                change: _vm.handleChange,
                paste: _vm.handlePaste,
              },
            }),
            _vm._v(" "),
            _vm.append
              ? _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.slotReady,
                        expression: "slotReady",
                      },
                    ],
                    class: [_vm.prefixCls + "-group-append"],
                  },
                  [_vm._t("append")],
                  2
                )
              : _vm.search && _vm.enterButton
              ? _c(
                  "div",
                  {
                    class: [
                      _vm.prefixCls + "-group-append",
                      _vm.prefixCls + "-search",
                    ],
                    on: { click: _vm.handleSearch },
                  },
                  [
                    _vm.enterButton === true
                      ? _c("i", { staticClass: "ivu-icon ivu-icon-ios-search" })
                      : [_vm._v(_vm._s(_vm.enterButton))],
                  ],
                  2
                )
              : _vm.showPrefix
              ? _c(
                  "span",
                  { staticClass: "ivu-input-prefix" },
                  [
                    _vm._t("prefix", function () {
                      return [
                        _vm.prefix
                          ? _c("i", {
                              staticClass: "ivu-icon",
                              class: ["ivu-icon-" + _vm.prefix],
                            })
                          : _vm._e(),
                      ]
                    }),
                  ],
                  2
                )
              : _vm._e(),
          ]
        : [
            _c("textarea", {
              ref: "textarea",
              class: _vm.textareaClasses,
              style: _vm.textareaStyles,
              attrs: {
                id: _vm.elementId,
                wrap: _vm.wrap,
                autocomplete: _vm.autocomplete,
                spellcheck: _vm.spellcheck,
                placeholder: _vm.placeholder,
                disabled: _vm.itemDisabled,
                rows: _vm.rows,
                maxlength: _vm.maxlength,
                readonly: _vm.readonly,
                name: _vm.name,
                autofocus: _vm.autofocus,
              },
              domProps: { value: _vm.currentValue },
              on: {
                keyup: [
                  function ($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.handleEnter.apply(null, arguments)
                  },
                  _vm.handleKeyup,
                ],
                keypress: _vm.handleKeypress,
                keydown: _vm.handleKeydown,
                focus: _vm.handleFocus,
                blur: _vm.handleBlur,
                compositionstart: _vm.handleComposition,
                compositionupdate: _vm.handleComposition,
                compositionend: _vm.handleComposition,
                input: _vm.handleInput,
                paste: _vm.handlePaste,
              },
            }),
            _vm._v(" "),
            _vm.showWordLimit
              ? _c("span", { staticClass: "ivu-input-word-count" }, [
                  _vm._v(_vm._s(_vm.textLength) + "/" + _vm._s(_vm.upperLimit)),
                ])
              : _vm._e(),
          ],
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/ScrollerY.vue?vue&type=template&id=b0cbe890&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/ScrollerY.vue?vue&type=template&id=b0cbe890& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "scrollerView",
      staticClass: "app-scroller-y",
      class: [_vm.static ? "static" : ""],
    },
    [
      _vm._t("default"),
      _vm._v(" "),
      _c("div", { ref: "bottom", staticClass: "app-scroller-bottom" }),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/WCircle.vue?vue&type=template&id=a79e3680&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/WCircle.vue?vue&type=template&id=a79e3680& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "common-circle",
      style: _vm.style,
      attrs: { "data-id": _vm.percent },
    },
    [
      _c("svg", { attrs: { viewBox: "0 0 28 28" } }, [
        _c("g", { attrs: { fill: "none", "fill-rule": "evenodd" } }, [
          _c("path", {
            staticClass: "common-circle-path",
            attrs: { d: "M-500-100h997V48h-997z" },
          }),
          _vm._v(" "),
          _c("g", { attrs: { "fill-rule": "nonzero" } }, [
            _c("path", {
              staticClass: "common-circle-g-path-ring",
              attrs: {
                "stroke-width": "3",
                d: "M14 25.5c6.351 0 11.5-5.149 11.5-11.5S20.351 2.5 14 2.5 2.5 7.649 2.5 14 7.649 25.5 14 25.5z",
              },
            }),
            _vm._v(" "),
            _c("path", {
              staticClass: "common-circle-g-path-core",
              attrs: { d: _vm.arc(_vm.args) },
            }),
          ]),
        ]),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/components/DialogUpload.vue?vue&type=template&id=24aab695&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/components/DialogUpload.vue?vue&type=template&id=24aab695& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("Upload", {
    ref: "upload",
    attrs: {
      name: "files",
      action: _vm.actionUrl,
      headers: _vm.headers,
      data: _vm.params,
      multiple: "",
      format: _vm.uploadFormat,
      "show-upload-list": false,
      "max-size": _vm.maxSize,
      "on-progress": _vm.handleProgress,
      "on-success": _vm.handleSuccess,
      "on-format-error": _vm.handleFormatError,
      "on-exceeded-size": _vm.handleMaxSize,
    },
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/components/DialogView.vue?vue&type=template&id=06cc6039&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/components/DialogView.vue?vue&type=template&id=06cc6039& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: "dialog-view " + _vm.msgData.type,
      attrs: { "data-id": _vm.msgData.id },
    },
    [
      _c("div", { staticClass: "dialog-head" }, [
        _c("div", { staticClass: "dialog-content" }, [
          _vm.msgData.type === "text"
            ? _c("div", { staticClass: "content-text" }, [
                _c("pre", { staticClass: "no-dark-mode" }, [
                  _vm._v(_vm._s(_vm.textMsg(_vm.msgData.msg.text))),
                ]),
              ])
            : _vm.msgData.type === "file"
            ? _c("div", { class: "content-file " + _vm.msgData.msg.type }, [
                _c("div", { staticClass: "dialog-file" }, [
                  _vm.msgData.msg.type === "img"
                    ? _c("img", {
                        staticClass: "file-img",
                        style: _vm.imageStyle(_vm.msgData.msg),
                        attrs: { src: _vm.msgData.msg.thumb },
                        on: { click: _vm.viewFile },
                      })
                    : _c("div", { staticClass: "file-box" }, [
                        _c("img", {
                          staticClass: "file-thumb",
                          attrs: { src: _vm.msgData.msg.thumb },
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "file-info" }, [
                          _c("div", { staticClass: "file-name" }, [
                            _vm._v(_vm._s(_vm.msgData.msg.name)),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "file-size" }, [
                            _vm._v(
                              _vm._s(_vm.$A.bytesToSize(_vm.msgData.msg.size))
                            ),
                          ]),
                        ]),
                      ]),
                ]),
              ])
            : _vm.msgData.type === "loading"
            ? _c("div", { staticClass: "content-loading" }, [_c("Loading")], 1)
            : _c("div", { staticClass: "content-unknown" }, [
                _vm._v(_vm._s(_vm.$L("未知的消息类型"))),
              ]),
        ]),
        _vm._v(" "),
        _vm.showMenu
          ? _c("div", { staticClass: "dialog-menu" }, [
              _c(
                "div",
                { staticClass: "menu-icon" },
                [
                  _vm.msgData.userid == _vm.userId
                    ? _c("Icon", {
                        attrs: { type: "md-undo", title: _vm.$L("撤回") },
                        on: { click: _vm.withdraw },
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.msgData.type === "file"
                    ? [
                        _c("Icon", {
                          attrs: { type: "md-eye", title: _vm.$L("查看") },
                          on: { click: _vm.viewFile },
                        }),
                        _vm._v(" "),
                        _c("Icon", {
                          attrs: {
                            type: "md-arrow-round-down",
                            title: _vm.$L("下载"),
                          },
                          on: { click: _vm.downFile },
                        }),
                      ]
                    : _vm._e(),
                ],
                2
              ),
            ])
          : _vm._e(),
      ]),
      _vm._v(" "),
      _vm.msgData.created_at
        ? _c(
            "div",
            { staticClass: "dialog-foot" },
            [
              _c(
                "div",
                {
                  staticClass: "time",
                  attrs: { title: _vm.msgData.created_at },
                },
                [_vm._v(_vm._s(_vm.$A.formatTime(_vm.msgData.created_at)))]
              ),
              _vm._v(" "),
              _vm.msgData.send > 1 || _vm.dialogType == "group"
                ? _c(
                    "EPopover",
                    {
                      ref: "percent",
                      staticClass: "percent",
                      attrs: { placement: "left-end", width: 360, offset: -8 },
                      model: {
                        value: _vm.popperShow,
                        callback: function ($$v) {
                          _vm.popperShow = $$v
                        },
                        expression: "popperShow",
                      },
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "dialog-wrapper-read-poptip-content" },
                        [
                          _c(
                            "ul",
                            { staticClass: "read overlay-y" },
                            [
                              _c("li", { staticClass: "read-title" }, [
                                _c("em", [_vm._v(_vm._s(_vm.readList.length))]),
                                _vm._v(_vm._s(_vm.$L("已读"))),
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.readList, function (item) {
                                return _c(
                                  "li",
                                  [
                                    _c("UserAvatar", {
                                      attrs: {
                                        userid: item.userid,
                                        size: 26,
                                        showName: "",
                                      },
                                    }),
                                  ],
                                  1
                                )
                              }),
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c(
                            "ul",
                            { staticClass: "unread overlay-y" },
                            [
                              _c("li", { staticClass: "read-title" }, [
                                _c("em", [
                                  _vm._v(_vm._s(_vm.unreadList.length)),
                                ]),
                                _vm._v(_vm._s(_vm.$L("未读"))),
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.unreadList, function (item) {
                                return _c(
                                  "li",
                                  [
                                    _c("UserAvatar", {
                                      attrs: {
                                        userid: item.userid,
                                        size: 26,
                                        showName: "",
                                      },
                                    }),
                                  ],
                                  1
                                )
                              }),
                            ],
                            2
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c("WCircle", {
                        attrs: {
                          slot: "reference",
                          percent: _vm.msgData.percentage,
                          size: 14,
                        },
                        slot: "reference",
                      }),
                    ],
                    1
                  )
                : _vm.msgData.percentage === 100
                ? _c("Icon", {
                    staticClass: "done",
                    attrs: { type: "md-done-all" },
                  })
                : _c("Icon", {
                    staticClass: "done",
                    attrs: { type: "md-checkmark" },
                  }),
            ],
            1
          )
        : _c("div", { staticClass: "dialog-foot" }, [_c("Loading")], 1),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/components/DialogWrapper.vue?vue&type=template&id=aa6eb2a2&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/components/DialogWrapper.vue?vue&type=template&id=aa6eb2a2& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.dialogData && _vm.dialogData.id
    ? _c(
        "div",
        {
          staticClass: "dialog-wrapper",
          on: {
            drop: function ($event) {
              $event.preventDefault()
              return _vm.chatPasteDrag($event, "drag")
            },
            dragover: function ($event) {
              $event.preventDefault()
              return _vm.chatDragOver(true, $event)
            },
            dragleave: function ($event) {
              $event.preventDefault()
              return _vm.chatDragOver(false, $event)
            },
          },
        },
        [
          _vm._t("head", function () {
            return [
              _c(
                "div",
                {
                  staticClass: "dialog-nav",
                  class: { completed: _vm.$A.dialogCompleted(_vm.dialogData) },
                },
                [
                  _c(
                    "div",
                    { staticClass: "dialog-avatar" },
                    [
                      _vm.dialogData.type == "group"
                        ? [
                            _vm.dialogData.group_type == "project"
                              ? _c(
                                  "i",
                                  {
                                    staticClass: "taskfont icon-avatar project",
                                  },
                                  [_vm._v("")]
                                )
                              : _vm.dialogData.group_type == "task"
                              ? _c(
                                  "i",
                                  { staticClass: "taskfont icon-avatar task" },
                                  [_vm._v("")]
                                )
                              : _c("Icon", {
                                  staticClass: "icon-avatar",
                                  attrs: { type: "ios-people" },
                                }),
                          ]
                        : _vm.dialogData.dialog_user
                        ? _c(
                            "div",
                            { staticClass: "user-avatar" },
                            [
                              _c("UserAvatar", {
                                attrs: {
                                  userid: _vm.dialogData.dialog_user.userid,
                                  size: 42,
                                },
                              }),
                            ],
                            1
                          )
                        : _c("Icon", {
                            staticClass: "icon-avatar",
                            attrs: { type: "md-person" },
                          }),
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "dialog-title" },
                    [
                      _c(
                        "div",
                        { staticClass: "main-title" },
                        [
                          _vm._l(
                            _vm.$A.dialogTags(_vm.dialogData),
                            function (tag) {
                              return tag.color != "success"
                                ? [
                                    _c(
                                      "Tag",
                                      {
                                        attrs: {
                                          color: tag.color,
                                          fade: false,
                                        },
                                      },
                                      [_vm._v(_vm._s(_vm.$L(tag.text)))]
                                    ),
                                  ]
                                : _vm._e()
                            }
                          ),
                          _vm._v(" "),
                          _c("h2", [_vm._v(_vm._s(_vm.dialogData.name))]),
                          _vm._v(" "),
                          _vm.peopleNum > 0
                            ? _c("em", [
                                _vm._v("(" + _vm._s(_vm.peopleNum) + ")"),
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.dialogData.top_at
                            ? _c("label", { staticClass: "top-text" }, [
                                _vm._v(_vm._s(_vm.$L("置顶"))),
                              ])
                            : _vm._e(),
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.dialogData.type === "group"
                        ? [
                            _vm.dialogData.group_type === "project"
                              ? _c(
                                  "div",
                                  {
                                    staticClass: "sub-title pointer",
                                    on: { click: _vm.openProject },
                                  },
                                  [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(_vm.$L("项目聊天室")) +
                                        " " +
                                        _vm._s(_vm.$L("打开项目管理")) +
                                        "\n                    "
                                    ),
                                  ]
                                )
                              : _vm.dialogData.group_type === "task"
                              ? _c(
                                  "div",
                                  {
                                    staticClass: "sub-title pointer",
                                    on: { click: _vm.openTask },
                                  },
                                  [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(_vm.$L("任务聊天室")) +
                                        " " +
                                        _vm._s(_vm.$L("查看任务详情")) +
                                        "\n                    "
                                    ),
                                  ]
                                )
                              : _vm._e(),
                          ]
                        : _vm._e(),
                    ],
                    2
                  ),
                ]
              ),
            ]
          }),
          _vm._v(" "),
          _c(
            "ScrollerY",
            {
              ref: "scroller",
              staticClass: "dialog-scroller overlay-y",
              style: { opacity: _vm.visible ? 1 : 0 },
              attrs: { "auto-bottom": _vm.isAutoBottom, static: "" },
              on: { "on-scroll": _vm.chatScroll },
            },
            [
              _c("div", { ref: "manageList", staticClass: "dialog-list" }, [
                _c(
                  "ul",
                  [
                    _vm.dialogData.hasMorePages
                      ? _c(
                          "li",
                          {
                            staticClass: "history",
                            on: { click: _vm.loadNextPage },
                          },
                          [_vm._v(_vm._s(_vm.$L("加载历史消息")))]
                        )
                      : _vm.dialogData.loading > 0 &&
                        _vm.dialogMsgList.length === 0
                      ? _c("li", { staticClass: "loading" }, [_c("Loading")], 1)
                      : _vm.dialogMsgList.length === 0
                      ? _c("li", { staticClass: "nothing" }, [
                          _vm._v(_vm._s(_vm.$L("暂无消息"))),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm._l(_vm.dialogMsgList, function (item) {
                      return _c(
                        "li",
                        {
                          key: item.id,
                          class: {
                            self: item.userid == _vm.userId,
                            "history-tip": _vm.topId == item.id,
                          },
                          attrs: { id: "view_" + item.id },
                        },
                        [
                          _vm.topId == item.id
                            ? _c("em", { staticClass: "history-text" }, [
                                _vm._v(_vm._s(_vm.$L("历史消息"))),
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "dialog-avatar" },
                            [
                              _c("UserAvatar", {
                                attrs: {
                                  userid: item.userid,
                                  tooltipDisabled: item.userid == _vm.userId,
                                  size: 30,
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("DialogView", {
                            attrs: {
                              "msg-data": item,
                              "dialog-type": _vm.dialogData.type,
                            },
                          }),
                        ],
                        1
                      )
                    }),
                    _vm._v(" "),
                    _vm._l(_vm.tempMsgList, function (item) {
                      return _c(
                        "li",
                        {
                          key: "tmp_" + item.id,
                          class: { self: item.userid == _vm.userId },
                          attrs: { id: "tmp_" + item.id },
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "dialog-avatar" },
                            [
                              _c("UserAvatar", {
                                attrs: {
                                  userid: item.userid,
                                  tooltipDisabled: item.userid == _vm.userId,
                                  size: 30,
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("DialogView", {
                            attrs: {
                              "msg-data": item,
                              "dialog-type": _vm.dialogData.type,
                            },
                          }),
                        ],
                        1
                      )
                    }),
                  ],
                  2
                ),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              class: [
                "dialog-footer",
                _vm.msgNew > 0 && _vm.dialogMsgList.length > 0 ? "newmsg" : "",
              ],
              on: { click: _vm.onActive },
            },
            [
              _c(
                "div",
                { staticClass: "dialog-newmsg", on: { click: _vm.onToBottom } },
                [_vm._v(_vm._s(_vm.$L("有" + _vm.msgNew + "条新消息")))]
              ),
              _vm._v(" "),
              _vm._t("inputBefore"),
              _vm._v(" "),
              _c("DragInput", {
                ref: "input",
                staticClass: "dialog-input",
                attrs: {
                  type: "textarea",
                  rows: 1,
                  autosize: { minRows: 1, maxRows: 3 },
                  maxlength: 20000,
                  placeholder: _vm.$L("输入消息..."),
                },
                on: {
                  "on-focus": _vm.onEventFocus,
                  "on-blur": _vm.onEventblur,
                  "on-keydown": _vm.chatKeydown,
                  "on-input-paste": _vm.pasteDrag,
                },
                model: {
                  value: _vm.msgText,
                  callback: function ($$v) {
                    _vm.msgText = $$v
                  },
                  expression: "msgText",
                },
              }),
              _vm._v(" "),
              _vm.msgText != ""
                ? _c(
                    "div",
                    { staticClass: "dialog-send", on: { click: _vm.sendMsg } },
                    [_c("Icon", { attrs: { type: "md-send" } })],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("DialogUpload", {
                ref: "chatUpload",
                staticClass: "chat-upload",
                attrs: { "dialog-id": _vm.dialogId },
                on: {
                  "on-progress": function ($event) {
                    return _vm.chatFile("progress", $event)
                  },
                  "on-success": function ($event) {
                    return _vm.chatFile("success", $event)
                  },
                  "on-error": function ($event) {
                    return _vm.chatFile("error", $event)
                  },
                },
              }),
            ],
            2
          ),
          _vm._v(" "),
          _vm.dialogDrag
            ? _c(
                "div",
                {
                  staticClass: "drag-over",
                  on: {
                    click: function ($event) {
                      _vm.dialogDrag = false
                    },
                  },
                },
                [
                  _c("div", { staticClass: "drag-text" }, [
                    _vm._v(_vm._s(_vm.$L("拖动到这里发送"))),
                  ]),
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "Modal",
            {
              attrs: {
                title: _vm.$L(_vm.pasteTitle),
                "cancel-text": _vm.$L("取消"),
                "ok-text": _vm.$L("发送"),
                "enter-ok": true,
              },
              on: { "on-ok": _vm.pasteSend },
              model: {
                value: _vm.pasteShow,
                callback: function ($$v) {
                  _vm.pasteShow = $$v
                },
                expression: "pasteShow",
              },
            },
            [
              _c(
                "div",
                { staticClass: "dialog-wrapper-paste" },
                [
                  _vm._l(_vm.pasteItem, function (item) {
                    return [
                      item.type == "image"
                        ? _c("img", { attrs: { src: item.result } })
                        : _c("div", [
                            _vm._v(
                              _vm._s(_vm.$L("文件")) +
                                ": " +
                                _vm._s(item.name) +
                                " (" +
                                _vm._s(_vm.$A.bytesToSize(item.size)) +
                                ")"
                            ),
                          ]),
                    ]
                  }),
                ],
                2
              ),
            ]
          ),
        ],
        2
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/messenger.vue?vue&type=template&id=aec2d6f4&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/messenger.vue?vue&type=template&id=aec2d6f4& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "page-messenger" },
    [
      _c("PageTitle", { attrs: { title: _vm.$L("消息") } }),
      _vm._v(" "),
      _c("div", { staticClass: "messenger-wrapper" }, [
        _c(
          "div",
          {
            staticClass: "messenger-select",
            class: { "show768-menu": _vm.dialogId == 0 },
          },
          [
            _c("div", { staticClass: "messenger-search" }, [
              _c(
                "div",
                { staticClass: "search-wrapper" },
                [
                  _vm.tabActive === "dialog"
                    ? _c("Input", {
                        attrs: {
                          prefix: "ios-search",
                          placeholder: _vm.$L("搜索..."),
                          clearable: "",
                        },
                        model: {
                          value: _vm.dialogKey,
                          callback: function ($$v) {
                            _vm.dialogKey = $$v
                          },
                          expression: "dialogKey",
                        },
                      })
                    : _c("Input", {
                        attrs: {
                          prefix: "ios-search",
                          placeholder: _vm.$L("搜索..."),
                          clearable: "",
                        },
                        model: {
                          value: _vm.contactsKey,
                          callback: function ($$v) {
                            _vm.contactsKey = $$v
                          },
                          expression: "contactsKey",
                        },
                      }),
                ],
                1
              ),
            ]),
            _vm._v(" "),
            _vm.tabActive === "dialog"
              ? _c(
                  "div",
                  { staticClass: "messenger-nav" },
                  _vm._l(_vm.dialogType, function (item, key) {
                    return _c(
                      "p",
                      {
                        key: key,
                        class: { active: _vm.dialogActive == item.type },
                        on: {
                          click: function ($event) {
                            return _vm.onActive(item.type)
                          },
                        },
                      },
                      [
                        _c("Badge", {
                          staticClass: "nav-num",
                          attrs: { count: _vm.msgUnread(item.type) },
                        }),
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.$L(item.name)) +
                            "\n                "
                        ),
                      ],
                      1
                    )
                  }),
                  0
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "ScrollerY",
              {
                ref: "list",
                staticClass: "messenger-list",
                class: _vm.overlayClass,
                attrs: { static: "" },
                on: { "on-scroll": _vm.listScroll },
              },
              [
                _vm.tabActive === "dialog"
                  ? _c(
                      "ul",
                      { ref: "dialogWrapper", staticClass: "dialog" },
                      _vm._l(_vm.dialogList, function (dialog, key) {
                        return _c(
                          "li",
                          {
                            key: key,
                            ref: "dialog_" + dialog.id,
                            refInFor: true,
                            class: {
                              top: dialog.top_at,
                              active: dialog.id == _vm.dialogId,
                              operate:
                                dialog.id == _vm.topOperateItem.id &&
                                _vm.topOperateVisible,
                              completed: _vm.$A.dialogCompleted(dialog),
                            },
                            on: {
                              click: function ($event) {
                                return _vm.openDialog(dialog, true)
                              },
                              contextmenu: function ($event) {
                                $event.preventDefault()
                                $event.stopPropagation()
                                return _vm.handleRightClick($event, dialog)
                              },
                            },
                          },
                          [
                            dialog.type == "group"
                              ? [
                                  dialog.group_type == "project"
                                    ? _c(
                                        "i",
                                        {
                                          staticClass:
                                            "taskfont icon-avatar project",
                                        },
                                        [_vm._v("")]
                                      )
                                    : dialog.group_type == "task"
                                    ? _c(
                                        "i",
                                        {
                                          staticClass:
                                            "taskfont icon-avatar task",
                                        },
                                        [_vm._v("")]
                                      )
                                    : _c("Icon", {
                                        staticClass: "icon-avatar",
                                        attrs: { type: "ios-people" },
                                      }),
                                ]
                              : dialog.dialog_user
                              ? _c(
                                  "div",
                                  { staticClass: "user-avatar" },
                                  [
                                    _c("UserAvatar", {
                                      attrs: {
                                        userid: dialog.dialog_user.userid,
                                        size: 42,
                                      },
                                    }),
                                  ],
                                  1
                                )
                              : _c("Icon", {
                                  staticClass: "icon-avatar",
                                  attrs: { type: "md-person" },
                                }),
                            _vm._v(" "),
                            _c("div", { staticClass: "dialog-box" }, [
                              _c(
                                "div",
                                { staticClass: "dialog-title" },
                                [
                                  _vm._l(
                                    _vm.$A.dialogTags(dialog),
                                    function (tag) {
                                      return tag.color != "success"
                                        ? [
                                            _c(
                                              "Tag",
                                              {
                                                attrs: {
                                                  color: tag.color,
                                                  fade: false,
                                                },
                                              },
                                              [_vm._v(_vm._s(_vm.$L(tag.text)))]
                                            ),
                                          ]
                                        : _vm._e()
                                    }
                                  ),
                                  _vm._v(" "),
                                  _c("span", [_vm._v(_vm._s(dialog.name))]),
                                  _vm._v(" "),
                                  dialog.type == "user" &&
                                  _vm.lastMsgReadDone(dialog.last_msg)
                                    ? _c("Icon", {
                                        attrs: {
                                          type: _vm.lastMsgReadDone(
                                            dialog.last_msg
                                          ),
                                        },
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  dialog.last_at
                                    ? _c("em", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$A.formatTime(dialog.last_at)
                                          )
                                        ),
                                      ])
                                    : _vm._e(),
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "dialog-text no-dark-mode" },
                                [
                                  _vm._v(
                                    _vm._s(_vm.formatLastMsg(dialog.last_msg))
                                  ),
                                ]
                              ),
                            ]),
                            _vm._v(" "),
                            _c("Badge", {
                              staticClass: "dialog-num",
                              attrs: { count: _vm.$A.getDialogUnread(dialog) },
                            }),
                          ],
                          2
                        )
                      }),
                      0
                    )
                  : _c(
                      "ul",
                      { staticClass: "contacts" },
                      [
                        _vm._l(_vm.contactsData, function (users, label) {
                          return _c("li", [
                            _c("div", { staticClass: "label" }, [
                              _vm._v(_vm._s(label)),
                            ]),
                            _vm._v(" "),
                            _c(
                              "ul",
                              _vm._l(users, function (user, index) {
                                return _c(
                                  "li",
                                  {
                                    key: index,
                                    on: {
                                      click: function ($event) {
                                        return _vm.openContacts(user)
                                      },
                                    },
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "avatar" },
                                      [
                                        _c("UserAvatar", {
                                          attrs: {
                                            userid: user.userid,
                                            size: 30,
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "nickname" }, [
                                      _vm._v(_vm._s(user.nickname)),
                                    ]),
                                  ]
                                )
                              }),
                              0
                            ),
                          ])
                        }),
                        _vm._v(" "),
                        _vm.contactsLoad > 0
                          ? _c(
                              "li",
                              { staticClass: "loading" },
                              [_c("Loading")],
                              1
                            )
                          : !_vm.contactsHasMorePages
                          ? _c("li", { staticClass: "loaded" }, [
                              _vm._v(
                                _vm._s(
                                  _vm.$L(
                                    "共" + _vm.contactsList.length + "位联系人"
                                  )
                                )
                              ),
                            ])
                          : _vm._e(),
                      ],
                      2
                    ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "top-operate", style: _vm.topOperateStyles },
                  [
                    _c(
                      "Dropdown",
                      {
                        attrs: {
                          trigger: "custom",
                          visible: _vm.topOperateVisible,
                          "transfer-class-name": "page-file-dropdown-menu",
                          transfer: "",
                        },
                        on: {
                          "on-clickoutside": _vm.handleClickTopOperateOutside,
                        },
                      },
                      [
                        _c(
                          "DropdownMenu",
                          { attrs: { slot: "list" }, slot: "list" },
                          [
                            _c(
                              "DropdownItem",
                              {
                                nativeOn: {
                                  click: function ($event) {
                                    return _vm.handleTopClick.apply(
                                      null,
                                      arguments
                                    )
                                  },
                                },
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm.$L(
                                        _vm.topOperateItem.top_at
                                          ? "取消置顶"
                                          : "置顶该聊天"
                                      )
                                    ) +
                                    "\n                            "
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _vm.$A.getDialogUnread(_vm.topOperateItem) > 0
                              ? _c(
                                  "DropdownItem",
                                  {
                                    nativeOn: {
                                      click: function ($event) {
                                        return _vm.updateRead("read")
                                      },
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(_vm.$L("标记已读")) +
                                        "\n                            "
                                    ),
                                  ]
                                )
                              : _c(
                                  "DropdownItem",
                                  {
                                    nativeOn: {
                                      click: function ($event) {
                                        return _vm.updateRead("unread")
                                      },
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(_vm.$L("标记未读")) +
                                        "\n                            "
                                    ),
                                  ]
                                ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "messenger-menu" }, [
              _c(
                "div",
                { staticClass: "menu-icon" },
                [
                  _c("Icon", {
                    class: { active: _vm.tabActive === "dialog" },
                    attrs: { type: "ios-chatbubbles" },
                    on: {
                      click: function ($event) {
                        _vm.tabActive = "dialog"
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c("Badge", {
                    staticClass: "menu-num",
                    attrs: { count: _vm.msgUnread("all") },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "menu-icon" },
                [
                  _c("Icon", {
                    class: { active: _vm.tabActive === "contacts" },
                    attrs: { type: "md-person" },
                    on: {
                      click: function ($event) {
                        _vm.tabActive = "contacts"
                      },
                    },
                  }),
                ],
                1
              ),
            ]),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "messenger-msg" },
          [
            _c("div", { staticClass: "msg-dialog-bg" }, [
              _c(
                "div",
                { staticClass: "msg-dialog-bg-icon" },
                [_c("Icon", { attrs: { type: "ios-chatbubbles" } })],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "msg-dialog-bg-text" }, [
                _vm._v(_vm._s(_vm.$L("选择一个会话开始聊天"))),
              ]),
            ]),
            _vm._v(" "),
            _vm.dialogId > 0
              ? _c(
                  "DialogWrapper",
                  {
                    attrs: { dialogId: _vm.dialogId },
                    on: { "on-active": _vm.scrollIntoActive },
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "dialog-back",
                        attrs: { slot: "inputBefore" },
                        on: { click: _vm.closeDialog },
                        slot: "inputBefore",
                      },
                      [_c("Icon", { attrs: { type: "md-arrow-back" } })],
                      1
                    ),
                  ]
                )
              : _vm._e(),
          ],
          1
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);