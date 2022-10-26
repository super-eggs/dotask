(self["webpackChunkDooTask"] = self["webpackChunkDooTask"] || []).push([["resources_assets_js_components_MDEditor_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/ImgUpload.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/ImgUpload.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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
  name: 'ImgUpload',
  props: {
    value: {},
    num: {},
    width: {},
    height: {},
    type: {},
    http: {
      type: Boolean,
      "default": false
    },
    otherParams: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    uploadIng: {
      type: Number,
      "default": 0
    }
  },
  data: function data() {
    return {
      actionUrl: $A.apiUrl('system/imgupload'),
      params: {
        width: this.width,
        height: this.height
      },
      multiple: this.num > 1,
      visible: false,
      browseVisible: false,
      isLoading: false,
      browseList: [],
      browseListNext: [],
      imgVisible: '',
      defaultList: this.initItems(this.value),
      uploadList: [],
      maxNum: Math.min(Math.max($A.runNum(this.num), 1), 99),
      httpValue: '',
      httpType: '',
      maxSize: 2048
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.uploadList = this.$refs.upload.fileList;
    this.$emit('input', this.uploadList); //

    var browseBox = $A(this.$refs.browselistbox);
    browseBox.scroll(function () {
      var nHight = browseBox[0].scrollHeight;
      var nTop = browseBox[0].scrollTop;
      var boxHight = browseBox.height();

      if (nTop + boxHight >= nHight) {
        //到底了
        if (_this.browseListNext.length > 0) {
          var tmpNext = _this.browseListNext;
          _this.browseListNext = [];

          _this.browsePictureFor(tmpNext);
        }
      }
    });
  },
  watch: {
    value: function value(val) {
      if (typeof val === 'string') {
        this.$emit('input', this.initItems(val));
        return;
      }

      if (val === this.$refs.upload.fileList) {
        return;
      }

      this.$refs.upload.fileList = this.initItems(val);
      this.uploadList = this.$refs.upload.fileList;
    },
    browseVisible: function browseVisible() {
      this.httpType = '';
      this.httpValue = '';
    }
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(['userToken'])), {}, {
    uploadHeaders: function uploadHeaders() {
      return {
        fd: $A.getStorageString("userWsFd"),
        token: this.userToken
      };
    },
    uploadParams: function uploadParams() {
      if (Object.keys(this.otherParams).length > 0) {
        return Object.assign(this.params, this.otherParams);
      } else {
        return this.params;
      }
    }
  }),
  methods: {
    handleCallback: function handleCallback(file) {
      if (this.type === 'callback') {
        if (file === true) {
          this.$emit('on-callback', this.uploadList);
          this.$refs.upload.fileList = [];
          this.uploadList = this.$refs.upload.fileList;
        } else if (_typeof(file) === "object") {
          this.$emit('on-callback', [file]);
        }
      }

      this.browseVisible = false;
    },
    initItems: function initItems(items) {
      //数据初始化
      if (typeof items === 'string') {
        items = [{
          'url': items
        }];
      }

      var list = [];
      $A.each(items, function (index, item) {
        if (typeof item === 'string') item = {
          'url': item
        };

        if (item.url) {
          item.active = true;
          item.status = 'finished';
          if (typeof item.path === 'undefined') item.path = item.url;
          if (typeof item.thumb === 'undefined') item.thumb = item.url;
          list.push(item);
        }
      });
      return list;
    },
    handleView: function handleView(item) {
      //查看
      this.visible = true;
      this.imgVisible = item.url;
    },
    handleRemove: function handleRemove(item) {
      //删除
      var fileList = this.$refs.upload.fileList;
      this.$refs.upload.fileList.splice(fileList.indexOf(item), 1);
      this.$emit('input', this.$refs.upload.fileList);
    },
    handleProgress: function handleProgress(event, file) {
      //开始上传
      if (file._uploadIng === undefined) {
        file._uploadIng = true;
        this.$emit('update:uploadIng', this.uploadIng + 1);
      }
    },
    handleSuccess: function handleSuccess(res, file) {
      //上传完成
      this.$emit('update:uploadIng', this.uploadIng - 1);

      if (res.ret === 1) {
        file.url = res.data.url;
        file.path = res.data.path;
        file.thumb = res.data.thumb;
        this.handleCallback(file);
      } else {
        $A.noticeWarning({
          title: this.$L('上传失败'),
          desc: this.$L('文件 ' + file.name + ' 上传失败 ' + res.msg)
        });
        this.$refs.upload.fileList.pop();
      }

      this.$emit('input', this.$refs.upload.fileList);
    },
    handleError: function handleError() {
      //上传错误
      this.$emit('update:uploadIng', this.uploadIng - 1);
    },
    handleFormatError: function handleFormatError(file) {
      //上传类型错误
      $A.noticeWarning({
        title: this.$L('文件格式不正确'),
        desc: this.$L('文件 ' + file.name + ' 格式不正确，请上传 jpg、jpeg、gif、png 格式的图片。')
      });
    },
    handleMaxSize: function handleMaxSize(file) {
      //上传大小错误
      $A.noticeWarning({
        title: this.$L('超出文件大小限制'),
        desc: this.$L('文件 ' + file.name + ' 太大，不能超过：' + $A.bytesToSize(this.maxSize * 1024))
      });
    },
    handleBeforeUpload: function handleBeforeUpload() {
      //上传前判断
      var check = this.uploadList.length < this.maxNum;

      if (!check && this.uploadList.length == 1) {
        this.handleRemove(this.uploadList[0]);
        check = this.uploadList.length < this.maxNum;
      }

      if (!check) {
        $A.noticeWarning(this.$L('最多只能上传 ' + this.maxNum + ' 张图片。'));
      }

      this.params = {
        width: this.width,
        height: this.height
      };
      return check;
    },
    handleClick: function handleClick() {
      //手动上传
      if (this.handleBeforeUpload()) {
        this.$refs.upload.handleClick();
      }
    },
    handleManual: function handleManual(file) {
      //手动传file
      if (this.handleBeforeUpload()) {
        this.$refs.upload.upload(file);
      }
    },
    browsePicture: function browsePicture(path) {
      var _this2 = this;

      //获取图片空间
      this.browseVisible = true;
      this.browseList = [];
      this.browseListNext = [];
      this.isLoading = true;
      this.$store.dispatch("call", {
        url: 'system/imgview',
        data: {
          path: path ? path : ''
        }
      }).then(function (_ref) {
        var data = _ref.data;
        _this2.isLoading = false;
        var dirs = data['dirs'];

        for (var i = 0; i < dirs.length; i++) {
          _this2.browseList.push(dirs[i]);
        }

        _this2.browsePictureFor(data['files']);
      })["catch"](function (_ref2) {
        var msg = _ref2.msg;
        _this2.isLoading = false;
        _this2.browseVisible = false;
        $A.noticeWarning(msg);
      });
    },
    browsePictureFor: function browsePictureFor(files) {
      for (var o = 0; o < files.length; o++) {
        for (var j = 0; j < this.uploadList.length; j++) {
          if (this.uploadList[j]['url'] === files[o]['url'] || this.uploadList[j]['url'] === files[o]['path']) {
            files[o]['active'] = true;
            break;
          }
        }

        if (o < 100) {
          this.browseList.push(files[o]);
        } else {
          this.browseListNext.push(files[o]);
        }
      }
    },
    browseItem: function browseItem(item) {
      //点击选择图片
      if (item.type === 'dir') {
        //文件夹
        this.browsePicture(item.path);
      } else if (item.type === 'file') {
        //文件
        if (item.active) {
          var fileList = this.$refs.upload.fileList;
          this.$refs.upload.fileList.splice(fileList.indexOf(item), 1);
          item.active = false;
        } else {
          if (this.maxNum === 1) {
            for (var i = 0; i < this.browseList.length; i++) {
              this.browseList[i].active = false;
            }

            this.$refs.upload.fileList = [];
            this.uploadList = this.$refs.upload.fileList;
          }

          var check = this.uploadList.length < this.maxNum;

          if (!check) {
            $A.noticeWarning(this.$L('最多只能选择 ' + this.maxNum + ' 张图片。'));
            return;
          }

          item.active = true;
          item.status = 'finished';
          this.$refs.upload.fileList.push(item);
          this.uploadList = this.$refs.upload.fileList;
        }

        this.$emit('input', this.$refs.upload.fileList);
      }
    },
    __thumb: function __thumb(url) {
      if ($A.strExists(url, "?", false)) {
        return url + "&__thumb=true";
      } else {
        return url + "?__thumb=true";
      }
    },
    httpEnter: function httpEnter() {
      this.$emit('input', this.initItems(this.httpValue));
      this.browseVisible = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/components/pro/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/components/pro/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pro */ "./resources/assets/js/components/MDEditor/components/pro/pro.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_pro__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pro */ "./resources/assets/js/components/MDEditor/pro.js");
/* harmony import */ var _ImgUpload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ImgUpload */ "./resources/assets/js/components/ImgUpload.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'MDEditor',
  components: {
    ImgUpload: _ImgUpload__WEBPACK_IMPORTED_MODULE_1__["default"],
    MarkdownPro: _pro__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    value: {
      "default": ''
    },
    height: {
      "default": 380
    },
    toolbars: {
      type: Object,
      "default": function _default() {
        return {
          strong: true,
          italic: true,
          overline: true,
          h1: true,
          h2: true,
          h3: true,
          h4: false,
          h5: false,
          h6: false,
          hr: true,
          quote: true,
          ul: true,
          ol: true,
          code: true,
          link: true,
          image: false,
          uploadImage: false,
          table: true,
          checked: true,
          notChecked: true,
          split: true,
          preview: true,
          fullscreen: false,
          theme: false,
          exportmd: false,
          importmd: false,
          save: false,
          clear: false,
          custom_image: true,
          custom_uploadImage: true,
          custom_uploadFile: true,
          custom_fullscreen: true
        };
      }
    }
  },
  data: function data() {
    return {
      content: '',
      transfer: false,
      html2md: false,
      htmlValue: '',
      uploadIng: 0,
      uploadFormat: ['jpg', 'jpeg', 'png', 'gif', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'txt', 'esp', 'pdf', 'rar', 'zip', 'gz', 'ai', 'avi', 'bmp', 'cdr', 'eps', 'mov', 'mp3', 'mp4', 'pr', 'psd', 'svg', 'tif'],
      actionUrl: $A.apiUrl('system/fileupload'),
      maxSize: 204800
    };
  },
  mounted: function mounted() {
    this.content = this.value;
  },
  activated: function activated() {
    this.content = this.value;
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapState)(['userToken'])), {}, {
    headers: function headers() {
      return {
        fd: $A.getStorageString("userWsFd"),
        token: this.userToken
      };
    }
  }),
  watch: {
    value: function value(newValue) {
      if (newValue == null) {
        newValue = "";
      }

      this.content = newValue;
    },
    content: function content(val) {
      this.$emit('input', val);
    }
  },
  methods: {
    editorImage: function editorImage(lists) {
      for (var i = 0; i < lists.length; i++) {
        var item = lists[i];

        if (_typeof(item) === 'object' && typeof item.url === "string") {
          if (this.transfer) {
            this.$refs.md2.insertContent('\n![image](' + item.url + ')');
          } else {
            this.$refs.md1.insertContent('\n![image](' + item.url + ')');
          }
        }
      }
    },
    customClick: function customClick(act) {
      switch (act) {
        case "image-browse":
          {
            this.$refs.myUpload.browsePicture();
            break;
          }

        case "image-upload":
          {
            this.$refs.myUpload.handleClick();
            break;
          }

        case "file-upload":
          {
            this.$refs.fileUpload.handleClick();
            break;
          }

        case "fullscreen":
          {
            this.transfer = !this.transfer;
            break;
          }

        case "html2md":
          {
            this.html2md = true;
            break;
          }
      }
    },
    htmlOk: function htmlOk() {
      var _this = this;

      $A.loadScript('js/html2md.js', function (e) {
        if (e !== null || typeof toMarkdown !== 'function') {
          $A.modalAlert("组件加载失败！");
          return;
        }

        if (_this.transfer) {
          _this.$refs.md2.insertContent('\n' + toMarkdown(_this.htmlValue, {
            gfm: true
          }));
        } else {
          _this.$refs.md1.insertContent('\n' + toMarkdown(_this.htmlValue, {
            gfm: true
          }));
        }

        _this.htmlValue = "";
      });
    },
    handleUploadImageUpload: function handleUploadImageUpload(file) {
      //手动传图片
      this.$refs.myUpload.handleManual(file);
    },

    /********************文件上传部分************************/
    handleProgress: function handleProgress(event, file) {
      //开始上传
      if (file._uploadIng === undefined) {
        file._uploadIng = true;
        this.uploadIng++;
      }
    },
    handleSuccess: function handleSuccess(res, file) {
      //上传完成
      this.uploadIng--;

      if (res.ret === 1) {
        var con = "[".concat(res.data.name, " (").concat($A.bytesToSize(res.data.size * 1024), ")](").concat(res.data.url, ")");

        if (this.transfer) {
          this.$refs.md2.insertContent(con);
        } else {
          this.$refs.md1.insertContent(con);
        }
      } else {
        $A.modalWarning({
          title: '上传失败',
          content: '文件 ' + file.name + ' 上传失败，' + res.msg
        });
      }
    },
    handleError: function handleError() {
      //上传错误
      this.uploadIng--;
    },
    handleFormatError: function handleFormatError(file) {
      //上传类型错误
      $A.modalWarning({
        title: '文件格式不正确',
        content: '文件 ' + file.name + ' 格式不正确，仅支持上传：' + this.uploadFormat.join(',')
      });
    },
    handleMaxSize: function handleMaxSize(file) {
      //上传大小错误
      $A.modalWarning({
        title: '超出文件大小限制',
        content: '文件 ' + file.name + ' 太大，不能超过：' + $A.bytesToSize(this.maxSize * 1024) + '。'
      });
    },
    handleBeforeUpload: function handleBeforeUpload() {
      //上传前判断
      return true;
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/components/MDEditor/assets/js/codemirror/config.js":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/assets/js/codemirror/config.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  tabSize: 4,
  styleActiveLine: true,
  lineNumbers: true,
  lineWrapping: false,
  line: true,
  mode: 'text/x-src',
  theme: 'default',
  cursorHeight: 0.8,
  lineWiseCopyCut: true
});

/***/ }),

/***/ "./resources/assets/js/components/MDEditor/assets/js/codemirror/index.js":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/assets/js/codemirror/index.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Kludges for bugs and behavior differences that can't be feature
// detected are enabled based on userAgent etc sniffing.
var userAgent = navigator.userAgent;
var platform = navigator.platform;
var gecko = /gecko\/\d/i.test(userAgent);
var ie_upto10 = /MSIE \d/.test(userAgent);
var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent);
var edge = /Edge\/(\d+)/.exec(userAgent);
var ie = ie_upto10 || ie_11up || edge;
var ie_version = ie && (ie_upto10 ? document.documentMode || 6 : +(edge || ie_11up)[1]);
var webkit = !edge && /WebKit\//.test(userAgent);
var qtwebkit = webkit && /Qt\/\d+\.\d+/.test(userAgent);
var chrome = !edge && /Chrome\//.test(userAgent);
var presto = /Opera\//.test(userAgent);
var safari = /Apple Computer/.test(navigator.vendor);
var mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent);
var phantom = /PhantomJS/.test(userAgent);
var ios = !edge && /AppleWebKit/.test(userAgent) && /Mobile\/\w+/.test(userAgent);
var android = /Android/.test(userAgent); // This is woefully incomplete. Suggestions for alternative methods welcome.

var mobile = ios || android || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent);
var mac = ios || /Mac/.test(platform);
var chromeOS = /\bCrOS\b/.test(userAgent);
var windows = /win/i.test(platform);
var presto_version = presto && userAgent.match(/Version\/(\d*\.\d*)/);

if (presto_version) {
  presto_version = Number(presto_version[1]);
}

if (presto_version && presto_version >= 15) {
  presto = false;
  webkit = true;
} // Some browsers use the wrong event properties to signal cmd/ctrl on OS X


var flipCtrlCmd = mac && (qtwebkit || presto && (presto_version == null || presto_version < 12.11));
var captureRightClick = gecko || ie && ie_version >= 9;

function classTest(cls) {
  return new RegExp("(^|\\s)" + cls + "(?:$|\\s)\\s*");
}

var rmClass = function rmClass(node, cls) {
  var current = node.className;
  var match = classTest(cls).exec(current);

  if (match) {
    var after = current.slice(match.index + match[0].length);
    node.className = current.slice(0, match.index) + (after ? match[1] + after : "");
  }
};

function removeChildren(e) {
  for (var count = e.childNodes.length; count > 0; --count) {
    e.removeChild(e.firstChild);
  }

  return e;
}

function removeChildrenAndAdd(parent, e) {
  return removeChildren(parent).appendChild(e);
}

function elt(tag, content, className, style) {
  var e = document.createElement(tag);

  if (className) {
    e.className = className;
  }

  if (style) {
    e.style.cssText = style;
  }

  if (typeof content == "string") {
    e.appendChild(document.createTextNode(content));
  } else if (content) {
    for (var i = 0; i < content.length; ++i) {
      e.appendChild(content[i]);
    }
  }

  return e;
} // wrapper for elt, which removes the elt from the accessibility tree


function eltP(tag, content, className, style) {
  var e = elt(tag, content, className, style);
  e.setAttribute("role", "presentation");
  return e;
}

var range;

if (document.createRange) {
  range = function range(node, start, end, endNode) {
    var r = document.createRange();
    r.setEnd(endNode || node, end);
    r.setStart(node, start);
    return r;
  };
} else {
  range = function range(node, start, end) {
    var r = document.body.createTextRange();

    try {
      r.moveToElementText(node.parentNode);
    } catch (e) {
      return r;
    }

    r.collapse(true);
    r.moveEnd("character", end);
    r.moveStart("character", start);
    return r;
  };
}

function contains(parent, child) {
  if (child.nodeType == 3) // Android browser always returns false when child is a textnode
    {
      child = child.parentNode;
    }

  if (parent.contains) {
    return parent.contains(child);
  }

  do {
    if (child.nodeType == 11) {
      child = child.host;
    }

    if (child == parent) {
      return true;
    }
  } while (child = child.parentNode);
}

function activeElt() {
  // IE and Edge may throw an "Unspecified Error" when accessing document.activeElement.
  // IE < 10 will throw when accessed while the page is loading or in an iframe.
  // IE > 9 and Edge will throw when accessed in an iframe if document.body is unavailable.
  var activeElement;

  try {
    activeElement = document.activeElement;
  } catch (e) {
    activeElement = document.body || null;
  }

  while (activeElement && activeElement.shadowRoot && activeElement.shadowRoot.activeElement) {
    activeElement = activeElement.shadowRoot.activeElement;
  }

  return activeElement;
}

function addClass(node, cls) {
  var current = node.className;

  if (!classTest(cls).test(current)) {
    node.className += (current ? " " : "") + cls;
  }
}

function joinClasses(a, b) {
  var as = a.split(" ");

  for (var i = 0; i < as.length; i++) {
    if (as[i] && !classTest(as[i]).test(b)) {
      b += " " + as[i];
    }
  }

  return b;
}

var selectInput = function selectInput(node) {
  node.select();
};

if (ios) // Mobile Safari apparently has a bug where select() is broken.
  {
    selectInput = function selectInput(node) {
      node.selectionStart = 0;
      node.selectionEnd = node.value.length;
    };
  } else if (ie) // Suppress mysterious IE10 errors
  {
    selectInput = function selectInput(node) {
      try {
        node.select();
      } catch (_e) {}
    };
  }

function bind(f) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function () {
    return f.apply(null, args);
  };
}

function copyObj(obj, target, overwrite) {
  if (!target) {
    target = {};
  }

  for (var prop in obj) {
    if (obj.hasOwnProperty(prop) && (overwrite !== false || !target.hasOwnProperty(prop))) {
      target[prop] = obj[prop];
    }
  }

  return target;
} // Counts the column offset in a string, taking tabs into account.
// Used mostly to find indentation.


function countColumn(string, end, tabSize, startIndex, startValue) {
  if (end == null) {
    end = string.search(/[^\s\u00a0]/);

    if (end == -1) {
      end = string.length;
    }
  }

  for (var i = startIndex || 0, n = startValue || 0;;) {
    var nextTab = string.indexOf("\t", i);

    if (nextTab < 0 || nextTab >= end) {
      return n + (end - i);
    }

    n += nextTab - i;
    n += tabSize - n % tabSize;
    i = nextTab + 1;
  }
}

var Delayed = function Delayed() {
  this.id = null;
  this.f = null;
  this.time = 0;
  this.handler = bind(this.onTimeout, this);
};

Delayed.prototype.onTimeout = function (self) {
  self.id = 0;

  if (self.time <= +new Date()) {
    self.f();
  } else {
    setTimeout(self.handler, self.time - +new Date());
  }
};

Delayed.prototype.set = function (ms, f) {
  this.f = f;
  var time = +new Date() + ms;

  if (!this.id || time < this.time) {
    clearTimeout(this.id);
    this.id = setTimeout(this.handler, ms);
    this.time = time;
  }
};

function indexOf(array, elt) {
  for (var i = 0; i < array.length; ++i) {
    if (array[i] == elt) {
      return i;
    }
  }

  return -1;
} // Number of pixels added to scroller and sizer to hide scrollbar


var scrollerGap = 30; // Returned or thrown by various protocols to signal 'I'm not
// handling this'.

var Pass = {
  toString: function toString() {
    return "CodeMirror.Pass";
  }
}; // Reused option objects for setSelection & friends

var sel_dontScroll = {
  scroll: false
},
    sel_mouse = {
  origin: "*mouse"
},
    sel_move = {
  origin: "+move"
}; // The inverse of countColumn -- find the offset that corresponds to
// a particular column.

function findColumn(string, goal, tabSize) {
  for (var pos = 0, col = 0;;) {
    var nextTab = string.indexOf("\t", pos);

    if (nextTab == -1) {
      nextTab = string.length;
    }

    var skipped = nextTab - pos;

    if (nextTab == string.length || col + skipped >= goal) {
      return pos + Math.min(skipped, goal - col);
    }

    col += nextTab - pos;
    col += tabSize - col % tabSize;
    pos = nextTab + 1;

    if (col >= goal) {
      return pos;
    }
  }
}

var spaceStrs = [""];

function spaceStr(n) {
  while (spaceStrs.length <= n) {
    spaceStrs.push(lst(spaceStrs) + " ");
  }

  return spaceStrs[n];
}

function lst(arr) {
  return arr[arr.length - 1];
}

function map(array, f) {
  var out = [];

  for (var i = 0; i < array.length; i++) {
    out[i] = f(array[i], i);
  }

  return out;
}

function insertSorted(array, value, score) {
  var pos = 0,
      priority = score(value);

  while (pos < array.length && score(array[pos]) <= priority) {
    pos++;
  }

  array.splice(pos, 0, value);
}

function nothing() {}

function createObj(base, props) {
  var inst;

  if (Object.create) {
    inst = Object.create(base);
  } else {
    nothing.prototype = base;
    inst = new nothing();
  }

  if (props) {
    copyObj(props, inst);
  }

  return inst;
}

var nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;

function isWordCharBasic(ch) {
  return /\w/.test(ch) || ch > "\x80" && (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch));
}

function isWordChar(ch, helper) {
  if (!helper) {
    return isWordCharBasic(ch);
  }

  if (helper.source.indexOf("\\w") > -1 && isWordCharBasic(ch)) {
    return true;
  }

  return helper.test(ch);
}

function isEmpty(obj) {
  for (var n in obj) {
    if (obj.hasOwnProperty(n) && obj[n]) {
      return false;
    }
  }

  return true;
} // Extending unicode characters. A series of a non-extending char +
// any number of extending chars is treated as a single unit as far
// as editing and measuring is concerned. This is not fully correct,
// since some scripts/fonts/browsers also treat other configurations
// of code points as a group.


var extendingChars = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;

function isExtendingChar(ch) {
  return ch.charCodeAt(0) >= 768 && extendingChars.test(ch);
} // Returns a number from the range [`0`; `str.length`] unless `pos` is outside that range.


function skipExtendingChars(str, pos, dir) {
  while ((dir < 0 ? pos > 0 : pos < str.length) && isExtendingChar(str.charAt(pos))) {
    pos += dir;
  }

  return pos;
} // Returns the value from the range [`from`; `to`] that satisfies
// `pred` and is closest to `from`. Assumes that at least `to`
// satisfies `pred`. Supports `from` being greater than `to`.


function findFirst(pred, from, to) {
  // At any point we are certain `to` satisfies `pred`, don't know
  // whether `from` does.
  var dir = from > to ? -1 : 1;

  for (;;) {
    if (from == to) {
      return from;
    }

    var midF = (from + to) / 2,
        mid = dir < 0 ? Math.ceil(midF) : Math.floor(midF);

    if (mid == from) {
      return pred(mid) ? from : to;
    }

    if (pred(mid)) {
      to = mid;
    } else {
      from = mid + dir;
    }
  }
} // BIDI HELPERS


function iterateBidiSections(order, from, to, f) {
  if (!order) {
    return f(from, to, "ltr", 0);
  }

  var found = false;

  for (var i = 0; i < order.length; ++i) {
    var part = order[i];

    if (part.from < to && part.to > from || from == to && part.to == from) {
      f(Math.max(part.from, from), Math.min(part.to, to), part.level == 1 ? "rtl" : "ltr", i);
      found = true;
    }
  }

  if (!found) {
    f(from, to, "ltr");
  }
}

var bidiOther = null;

function getBidiPartAt(order, ch, sticky) {
  var found;
  bidiOther = null;

  for (var i = 0; i < order.length; ++i) {
    var cur = order[i];

    if (cur.from < ch && cur.to > ch) {
      return i;
    }

    if (cur.to == ch) {
      if (cur.from != cur.to && sticky == "before") {
        found = i;
      } else {
        bidiOther = i;
      }
    }

    if (cur.from == ch) {
      if (cur.from != cur.to && sticky != "before") {
        found = i;
      } else {
        bidiOther = i;
      }
    }
  }

  return found != null ? found : bidiOther;
} // Bidirectional ordering algorithm
// See http://unicode.org/reports/tr9/tr9-13.html for the algorithm
// that this (partially) implements.
// One-char codes used for character types:
// L (L):   Left-to-Right
// R (R):   Right-to-Left
// r (AL):  Right-to-Left Arabic
// 1 (EN):  European Number
// + (ES):  European Number Separator
// % (ET):  European Number Terminator
// n (AN):  Arabic Number
// , (CS):  Common Number Separator
// m (NSM): Non-Spacing Mark
// b (BN):  Boundary Neutral
// s (B):   Paragraph Separator
// t (S):   Segment Separator
// w (WS):  Whitespace
// N (ON):  Other Neutrals
// Returns null if characters are ordered as they appear
// (left-to-right), or an array of sections ({from, to, level}
// objects) in the order in which they occur visually.


var bidiOrdering = function () {
  // Character types for codepoints 0 to 0xff
  var lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN"; // Character types for codepoints 0x600 to 0x6f9

  var arabicTypes = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";

  function charType(code) {
    if (code <= 0xf7) {
      return lowTypes.charAt(code);
    } else if (0x590 <= code && code <= 0x5f4) {
      return "R";
    } else if (0x600 <= code && code <= 0x6f9) {
      return arabicTypes.charAt(code - 0x600);
    } else if (0x6ee <= code && code <= 0x8ac) {
      return "r";
    } else if (0x2000 <= code && code <= 0x200b) {
      return "w";
    } else if (code == 0x200c) {
      return "b";
    } else {
      return "L";
    }
  }

  var bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
  var isNeutral = /[stwN]/,
      isStrong = /[LRr]/,
      countsAsLeft = /[Lb1n]/,
      countsAsNum = /[1n]/;

  function BidiSpan(level, from, to) {
    this.level = level;
    this.from = from;
    this.to = to;
  }

  return function (str, direction) {
    var outerType = direction == "ltr" ? "L" : "R";

    if (str.length == 0 || direction == "ltr" && !bidiRE.test(str)) {
      return false;
    }

    var len = str.length,
        types = [];

    for (var i = 0; i < len; ++i) {
      types.push(charType(str.charCodeAt(i)));
    } // W1. Examine each non-spacing mark (NSM) in the level run, and
    // change the type of the NSM to the type of the previous
    // character. If the NSM is at the start of the level run, it will
    // get the type of sor.


    for (var i$1 = 0, prev = outerType; i$1 < len; ++i$1) {
      var type = types[i$1];

      if (type == "m") {
        types[i$1] = prev;
      } else {
        prev = type;
      }
    } // W2. Search backwards from each instance of a European number
    // until the first strong type (R, L, AL, or sor) is found. If an
    // AL is found, change the type of the European number to Arabic
    // number.
    // W3. Change all ALs to R.


    for (var i$2 = 0, cur = outerType; i$2 < len; ++i$2) {
      var type$1 = types[i$2];

      if (type$1 == "1" && cur == "r") {
        types[i$2] = "n";
      } else if (isStrong.test(type$1)) {
        cur = type$1;

        if (type$1 == "r") {
          types[i$2] = "R";
        }
      }
    } // W4. A single European separator between two European numbers
    // changes to a European number. A single common separator between
    // two numbers of the same type changes to that type.


    for (var i$3 = 1, prev$1 = types[0]; i$3 < len - 1; ++i$3) {
      var type$2 = types[i$3];

      if (type$2 == "+" && prev$1 == "1" && types[i$3 + 1] == "1") {
        types[i$3] = "1";
      } else if (type$2 == "," && prev$1 == types[i$3 + 1] && (prev$1 == "1" || prev$1 == "n")) {
        types[i$3] = prev$1;
      }

      prev$1 = type$2;
    } // W5. A sequence of European terminators adjacent to European
    // numbers changes to all European numbers.
    // W6. Otherwise, separators and terminators change to Other
    // Neutral.


    for (var i$4 = 0; i$4 < len; ++i$4) {
      var type$3 = types[i$4];

      if (type$3 == ",") {
        types[i$4] = "N";
      } else if (type$3 == "%") {
        var end = void 0;

        for (end = i$4 + 1; end < len && types[end] == "%"; ++end) {}

        var replace = i$4 && types[i$4 - 1] == "!" || end < len && types[end] == "1" ? "1" : "N";

        for (var j = i$4; j < end; ++j) {
          types[j] = replace;
        }

        i$4 = end - 1;
      }
    } // W7. Search backwards from each instance of a European number
    // until the first strong type (R, L, or sor) is found. If an L is
    // found, then change the type of the European number to L.


    for (var i$5 = 0, cur$1 = outerType; i$5 < len; ++i$5) {
      var type$4 = types[i$5];

      if (cur$1 == "L" && type$4 == "1") {
        types[i$5] = "L";
      } else if (isStrong.test(type$4)) {
        cur$1 = type$4;
      }
    } // N1. A sequence of neutrals takes the direction of the
    // surrounding strong text if the text on both sides has the same
    // direction. European and Arabic numbers act as if they were R in
    // terms of their influence on neutrals. Start-of-level-run (sor)
    // and end-of-level-run (eor) are used at level run boundaries.
    // N2. Any remaining neutrals take the embedding direction.


    for (var i$6 = 0; i$6 < len; ++i$6) {
      if (isNeutral.test(types[i$6])) {
        var end$1 = void 0;

        for (end$1 = i$6 + 1; end$1 < len && isNeutral.test(types[end$1]); ++end$1) {}

        var before = (i$6 ? types[i$6 - 1] : outerType) == "L";
        var after = (end$1 < len ? types[end$1] : outerType) == "L";
        var replace$1 = before == after ? before ? "L" : "R" : outerType;

        for (var j$1 = i$6; j$1 < end$1; ++j$1) {
          types[j$1] = replace$1;
        }

        i$6 = end$1 - 1;
      }
    } // Here we depart from the documented algorithm, in order to avoid
    // building up an actual levels array. Since there are only three
    // levels (0, 1, 2) in an implementation that doesn't take
    // explicit embedding into account, we can build up the order on
    // the fly, without following the level-based algorithm.


    var order = [],
        m;

    for (var i$7 = 0; i$7 < len;) {
      if (countsAsLeft.test(types[i$7])) {
        var start = i$7;

        for (++i$7; i$7 < len && countsAsLeft.test(types[i$7]); ++i$7) {}

        order.push(new BidiSpan(0, start, i$7));
      } else {
        var pos = i$7,
            at = order.length;

        for (++i$7; i$7 < len && types[i$7] != "L"; ++i$7) {}

        for (var j$2 = pos; j$2 < i$7;) {
          if (countsAsNum.test(types[j$2])) {
            if (pos < j$2) {
              order.splice(at, 0, new BidiSpan(1, pos, j$2));
            }

            var nstart = j$2;

            for (++j$2; j$2 < i$7 && countsAsNum.test(types[j$2]); ++j$2) {}

            order.splice(at, 0, new BidiSpan(2, nstart, j$2));
            pos = j$2;
          } else {
            ++j$2;
          }
        }

        if (pos < i$7) {
          order.splice(at, 0, new BidiSpan(1, pos, i$7));
        }
      }
    }

    if (direction == "ltr") {
      if (order[0].level == 1 && (m = str.match(/^\s+/))) {
        order[0].from = m[0].length;
        order.unshift(new BidiSpan(0, 0, m[0].length));
      }

      if (lst(order).level == 1 && (m = str.match(/\s+$/))) {
        lst(order).to -= m[0].length;
        order.push(new BidiSpan(0, len - m[0].length, len));
      }
    }

    return direction == "rtl" ? order.reverse() : order;
  };
}(); // Get the bidi ordering for the given line (and cache it). Returns
// false for lines that are fully left-to-right, and an array of
// BidiSpan objects otherwise.


function getOrder(line, direction) {
  var order = line.order;

  if (order == null) {
    order = line.order = bidiOrdering(line.text, direction);
  }

  return order;
}

var noHandlers = [];

var on = function on(emitter, type, f) {
  if (emitter.addEventListener) {
    emitter.addEventListener(type, f, false);
  } else if (emitter.attachEvent) {
    emitter.attachEvent("on" + type, f);
  } else {
    var map$$1 = emitter._handlers || (emitter._handlers = {});
    map$$1[type] = (map$$1[type] || noHandlers).concat(f);
  }
};

function getHandlers(emitter, type) {
  return emitter._handlers && emitter._handlers[type] || noHandlers;
}

function off(emitter, type, f) {
  if (emitter.removeEventListener) {
    emitter.removeEventListener(type, f, false);
  } else if (emitter.detachEvent) {
    emitter.detachEvent("on" + type, f);
  } else {
    var map$$1 = emitter._handlers,
        arr = map$$1 && map$$1[type];

    if (arr) {
      var index = indexOf(arr, f);

      if (index > -1) {
        map$$1[type] = arr.slice(0, index).concat(arr.slice(index + 1));
      }
    }
  }
}

function signal(emitter, type
/*, values...*/
) {
  var handlers = getHandlers(emitter, type);

  if (!handlers.length) {
    return;
  }

  var args = Array.prototype.slice.call(arguments, 2);

  for (var i = 0; i < handlers.length; ++i) {
    handlers[i].apply(null, args);
  }
} // The DOM events that CodeMirror handles can be overridden by
// registering a (non-DOM) handler on the src for the event name,
// and preventDefault-ing the event in that handler.


function signalDOMEvent(cm, e, override) {
  if (typeof e == "string") {
    e = {
      type: e,
      preventDefault: function preventDefault() {
        this.defaultPrevented = true;
      }
    };
  }

  signal(cm, override || e.type, cm, e);
  return e_defaultPrevented(e) || e.codemirrorIgnore;
}

function signalCursorActivity(cm) {
  var arr = cm._handlers && cm._handlers.cursorActivity;

  if (!arr) {
    return;
  }

  var set = cm.curOp.cursorActivityHandlers || (cm.curOp.cursorActivityHandlers = []);

  for (var i = 0; i < arr.length; ++i) {
    if (indexOf(set, arr[i]) == -1) {
      set.push(arr[i]);
    }
  }
}

function hasHandler(emitter, type) {
  return getHandlers(emitter, type).length > 0;
} // Add on and off methods to a constructor's prototype, to make
// registering events on such objects more convenient.


function eventMixin(ctor) {
  ctor.prototype.on = function (type, f) {
    on(this, type, f);
  };

  ctor.prototype.off = function (type, f) {
    off(this, type, f);
  };
} // Due to the fact that we still support jurassic IE versions, some
// compatibility wrappers are needed.


function e_preventDefault(e) {
  if (e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }
}

function e_stopPropagation(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  } else {
    e.cancelBubble = true;
  }
}

function e_defaultPrevented(e) {
  return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false;
}

function e_stop(e) {
  e_preventDefault(e);
  e_stopPropagation(e);
}

function e_target(e) {
  return e.target || e.srcElement;
}

function e_button(e) {
  var b = e.which;

  if (b == null) {
    if (e.button & 1) {
      b = 1;
    } else if (e.button & 2) {
      b = 3;
    } else if (e.button & 4) {
      b = 2;
    }
  }

  if (mac && e.ctrlKey && b == 1) {
    b = 3;
  }

  return b;
} // Detect drag-and-drop


var dragAndDrop = function () {
  // There is *some* kind of drag-and-drop support in IE6-8, but I
  // couldn't get it to work yet.
  if (ie && ie_version < 9) {
    return false;
  }

  var div = elt('div');
  return "draggable" in div || "dragDrop" in div;
}();

var zwspSupported;

function zeroWidthElement(measure) {
  if (zwspSupported == null) {
    var test = elt("span", "\u200B");
    removeChildrenAndAdd(measure, elt("span", [test, document.createTextNode("x")]));

    if (measure.firstChild.offsetHeight != 0) {
      zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !(ie && ie_version < 8);
    }
  }

  var node = zwspSupported ? elt("span", "\u200B") : elt("span", "\xA0", null, "display: inline-block; width: 1px; margin-right: -1px");
  node.setAttribute("cm-text", "");
  return node;
} // Feature-detect IE's crummy client rect reporting for bidi text


var badBidiRects;

function hasBadBidiRects(measure) {
  if (badBidiRects != null) {
    return badBidiRects;
  }

  var txt = removeChildrenAndAdd(measure, document.createTextNode("A\u062EA"));
  var r0 = range(txt, 0, 1).getBoundingClientRect();
  var r1 = range(txt, 1, 2).getBoundingClientRect();
  removeChildren(measure);

  if (!r0 || r0.left == r0.right) {
    return false;
  } // Safari returns null in some cases (#2780)


  return badBidiRects = r1.right - r0.right < 3;
} // See if "".split is the broken IE version, if so, provide an
// alternative way to split lines.


var splitLinesAuto = "\n\nb".split(/\n/).length != 3 ? function (string) {
  var pos = 0,
      result = [],
      l = string.length;

  while (pos <= l) {
    var nl = string.indexOf("\n", pos);

    if (nl == -1) {
      nl = string.length;
    }

    var line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl);
    var rt = line.indexOf("\r");

    if (rt != -1) {
      result.push(line.slice(0, rt));
      pos += rt + 1;
    } else {
      result.push(line);
      pos = nl + 1;
    }
  }

  return result;
} : function (string) {
  return string.split(/\r\n?|\n/);
};
var hasSelection = window.getSelection ? function (te) {
  try {
    return te.selectionStart != te.selectionEnd;
  } catch (e) {
    return false;
  }
} : function (te) {
  var range$$1;

  try {
    range$$1 = te.ownerDocument.selection.createRange();
  } catch (e) {}

  if (!range$$1 || range$$1.parentElement() != te) {
    return false;
  }

  return range$$1.compareEndPoints("StartToEnd", range$$1) != 0;
};

var hasCopyEvent = function () {
  var e = elt("div");

  if ("oncopy" in e) {
    return true;
  }

  e.setAttribute("oncopy", "return;");
  return typeof e.oncopy == "function";
}();

var badZoomedRects = null;

function hasBadZoomedRects(measure) {
  if (badZoomedRects != null) {
    return badZoomedRects;
  }

  var node = removeChildrenAndAdd(measure, elt("span", "x"));
  var normal = node.getBoundingClientRect();
  var fromRange = range(node, 0, 1).getBoundingClientRect();
  return badZoomedRects = Math.abs(normal.left - fromRange.left) > 1;
} // Known modes, by name and by MIME


var modes = {},
    mimeModes = {}; // Extra arguments are stored as the mode's dependencies, which is
// used by (legacy) mechanisms like loadmode.js to automatically
// load a mode. (Preferred mechanism is the require/define calls.)

function defineMode(name, mode) {
  if (arguments.length > 2) {
    mode.dependencies = Array.prototype.slice.call(arguments, 2);
  }

  modes[name] = mode;
}

function defineMIME(mime, spec) {
  mimeModes[mime] = spec;
} // Given a MIME type, a {name, ...options} config object, or a name
// string, return a mode config object.


function resolveMode(spec) {
  if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
    spec = mimeModes[spec];
  } else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
    var found = mimeModes[spec.name];

    if (typeof found == "string") {
      found = {
        name: found
      };
    }

    spec = createObj(found, spec);
    spec.name = found.name;
  } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
    return resolveMode("application/xml");
  } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(spec)) {
    return resolveMode("application/json");
  }

  if (typeof spec == "string") {
    return {
      name: spec
    };
  } else {
    return spec || {
      name: "null"
    };
  }
} // Given a mode spec (anything that resolveMode accepts), find and
// initialize an actual mode object.


function getMode(options, spec) {
  spec = resolveMode(spec);
  var mfactory = modes[spec.name];

  if (!mfactory) {
    return getMode(options, "text/plain");
  }

  var modeObj = mfactory(options, spec);

  if (modeExtensions.hasOwnProperty(spec.name)) {
    var exts = modeExtensions[spec.name];

    for (var prop in exts) {
      if (!exts.hasOwnProperty(prop)) {
        continue;
      }

      if (modeObj.hasOwnProperty(prop)) {
        modeObj["_" + prop] = modeObj[prop];
      }

      modeObj[prop] = exts[prop];
    }
  }

  modeObj.name = spec.name;

  if (spec.helperType) {
    modeObj.helperType = spec.helperType;
  }

  if (spec.modeProps) {
    for (var prop$1 in spec.modeProps) {
      modeObj[prop$1] = spec.modeProps[prop$1];
    }
  }

  return modeObj;
} // This can be used to attach properties to mode objects from
// outside the actual mode definition.


var modeExtensions = {};

function extendMode(mode, properties) {
  var exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : modeExtensions[mode] = {};
  copyObj(properties, exts);
}

function copyState(mode, state) {
  if (state === true) {
    return state;
  }

  if (mode.copyState) {
    return mode.copyState(state);
  }

  var nstate = {};

  for (var n in state) {
    var val = state[n];

    if (val instanceof Array) {
      val = val.concat([]);
    }

    nstate[n] = val;
  }

  return nstate;
} // Given a mode and a state (for that mode), find the inner mode and
// state at the position that the state refers to.


function innerMode(mode, state) {
  var info;

  while (mode.innerMode) {
    info = mode.innerMode(state);

    if (!info || info.mode == mode) {
      break;
    }

    state = info.state;
    mode = info.mode;
  }

  return info || {
    mode: mode,
    state: state
  };
}

function startState(mode, a1, a2) {
  return mode.startState ? mode.startState(a1, a2) : true;
} // STRING STREAM
// Fed to the mode parsers, provides helper functions to make
// parsers more succinct.


var StringStream = function StringStream(string, tabSize, lineOracle) {
  this.pos = this.start = 0;
  this.string = string;
  this.tabSize = tabSize || 8;
  this.lastColumnPos = this.lastColumnValue = 0;
  this.lineStart = 0;
  this.lineOracle = lineOracle;
};

StringStream.prototype.eol = function () {
  return this.pos >= this.string.length;
};

StringStream.prototype.sol = function () {
  return this.pos == this.lineStart;
};

StringStream.prototype.peek = function () {
  return this.string.charAt(this.pos) || undefined;
};

StringStream.prototype.next = function () {
  if (this.pos < this.string.length) {
    return this.string.charAt(this.pos++);
  }
};

StringStream.prototype.eat = function (match) {
  var ch = this.string.charAt(this.pos);
  var ok;

  if (typeof match == "string") {
    ok = ch == match;
  } else {
    ok = ch && (match.test ? match.test(ch) : match(ch));
  }

  if (ok) {
    ++this.pos;
    return ch;
  }
};

StringStream.prototype.eatWhile = function (match) {
  var start = this.pos;

  while (this.eat(match)) {}

  return this.pos > start;
};

StringStream.prototype.eatSpace = function () {
  var this$1 = this;
  var start = this.pos;

  while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) {
    ++this$1.pos;
  }

  return this.pos > start;
};

StringStream.prototype.skipToEnd = function () {
  this.pos = this.string.length;
};

StringStream.prototype.skipTo = function (ch) {
  var found = this.string.indexOf(ch, this.pos);

  if (found > -1) {
    this.pos = found;
    return true;
  }
};

StringStream.prototype.backUp = function (n) {
  this.pos -= n;
};

StringStream.prototype.column = function () {
  if (this.lastColumnPos < this.start) {
    this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue);
    this.lastColumnPos = this.start;
  }

  return this.lastColumnValue - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0);
};

StringStream.prototype.indentation = function () {
  return countColumn(this.string, null, this.tabSize) - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0);
};

StringStream.prototype.match = function (pattern, consume, caseInsensitive) {
  if (typeof pattern == "string") {
    var cased = function cased(str) {
      return caseInsensitive ? str.toLowerCase() : str;
    };

    var substr = this.string.substr(this.pos, pattern.length);

    if (cased(substr) == cased(pattern)) {
      if (consume !== false) {
        this.pos += pattern.length;
      }

      return true;
    }
  } else {
    var match = this.string.slice(this.pos).match(pattern);

    if (match && match.index > 0) {
      return null;
    }

    if (match && consume !== false) {
      this.pos += match[0].length;
    }

    return match;
  }
};

StringStream.prototype.current = function () {
  return this.string.slice(this.start, this.pos);
};

StringStream.prototype.hideFirstChars = function (n, inner) {
  this.lineStart += n;

  try {
    return inner();
  } finally {
    this.lineStart -= n;
  }
};

StringStream.prototype.lookAhead = function (n) {
  var oracle = this.lineOracle;
  return oracle && oracle.lookAhead(n);
};

StringStream.prototype.baseToken = function () {
  var oracle = this.lineOracle;
  return oracle && oracle.baseToken(this.pos);
}; // Find the line object corresponding to the given line number.


function getLine(doc, n) {
  n -= doc.first;

  if (n < 0 || n >= doc.size) {
    throw new Error("There is no line " + (n + doc.first) + " in the document.");
  }

  var chunk = doc;

  while (!chunk.lines) {
    for (var i = 0;; ++i) {
      var child = chunk.children[i],
          sz = child.chunkSize();

      if (n < sz) {
        chunk = child;
        break;
      }

      n -= sz;
    }
  }

  return chunk.lines[n];
} // Get the part of a document between two positions, as an array of
// strings.


function getBetween(doc, start, end) {
  var out = [],
      n = start.line;
  doc.iter(start.line, end.line + 1, function (line) {
    var text = line.text;

    if (n == end.line) {
      text = text.slice(0, end.ch);
    }

    if (n == start.line) {
      text = text.slice(start.ch);
    }

    out.push(text);
    ++n;
  });
  return out;
} // Get the lines between from and to, as array of strings.


function getLines(doc, from, to) {
  var out = [];
  doc.iter(from, to, function (line) {
    out.push(line.text);
  }); // iter aborts when callback returns truthy value

  return out;
} // Update the height of a line, propagating the height change
// upwards to parent nodes.


function updateLineHeight(line, height) {
  var diff = height - line.height;

  if (diff) {
    for (var n = line; n; n = n.parent) {
      n.height += diff;
    }
  }
} // Given a line object, find its line number by walking up through
// its parent links.


function lineNo(line) {
  if (line.parent == null) {
    return null;
  }

  var cur = line.parent,
      no = indexOf(cur.lines, line);

  for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
    for (var i = 0;; ++i) {
      if (chunk.children[i] == cur) {
        break;
      }

      no += chunk.children[i].chunkSize();
    }
  }

  return no + cur.first;
} // Find the line at the given vertical position, using the height
// information in the document tree.


function _lineAtHeight(chunk, h) {
  var n = chunk.first;

  outer: do {
    for (var i$1 = 0; i$1 < chunk.children.length; ++i$1) {
      var child = chunk.children[i$1],
          ch = child.height;

      if (h < ch) {
        chunk = child;
        continue outer;
      }

      h -= ch;
      n += child.chunkSize();
    }

    return n;
  } while (!chunk.lines);

  var i = 0;

  for (; i < chunk.lines.length; ++i) {
    var line = chunk.lines[i],
        lh = line.height;

    if (h < lh) {
      break;
    }

    h -= lh;
  }

  return n + i;
}

function isLine(doc, l) {
  return l >= doc.first && l < doc.first + doc.size;
}

function lineNumberFor(options, i) {
  return String(options.lineNumberFormatter(i + options.firstLineNumber));
} // A Pos instance represents a position within the text.


function Pos(line, ch, sticky) {
  if (sticky === void 0) sticky = null;

  if (!(this instanceof Pos)) {
    return new Pos(line, ch, sticky);
  }

  this.line = line;
  this.ch = ch;
  this.sticky = sticky;
} // Compare two positions, return 0 if they are the same, a negative
// number when a is less, and a positive number otherwise.


function cmp(a, b) {
  return a.line - b.line || a.ch - b.ch;
}

function equalCursorPos(a, b) {
  return a.sticky == b.sticky && cmp(a, b) == 0;
}

function copyPos(x) {
  return Pos(x.line, x.ch);
}

function maxPos(a, b) {
  return cmp(a, b) < 0 ? b : a;
}

function minPos(a, b) {
  return cmp(a, b) < 0 ? a : b;
} // Most of the external API clips given positions to make sure they
// actually exist within the document.


function clipLine(doc, n) {
  return Math.max(doc.first, Math.min(n, doc.first + doc.size - 1));
}

function _clipPos(doc, pos) {
  if (pos.line < doc.first) {
    return Pos(doc.first, 0);
  }

  var last = doc.first + doc.size - 1;

  if (pos.line > last) {
    return Pos(last, getLine(doc, last).text.length);
  }

  return clipToLen(pos, getLine(doc, pos.line).text.length);
}

function clipToLen(pos, linelen) {
  var ch = pos.ch;

  if (ch == null || ch > linelen) {
    return Pos(pos.line, linelen);
  } else if (ch < 0) {
    return Pos(pos.line, 0);
  } else {
    return pos;
  }
}

function clipPosArray(doc, array) {
  var out = [];

  for (var i = 0; i < array.length; i++) {
    out[i] = _clipPos(doc, array[i]);
  }

  return out;
}

var SavedContext = function SavedContext(state, lookAhead) {
  this.state = state;
  this.lookAhead = lookAhead;
};

var Context = function Context(doc, state, line, lookAhead) {
  this.state = state;
  this.doc = doc;
  this.line = line;
  this.maxLookAhead = lookAhead || 0;
  this.baseTokens = null;
  this.baseTokenPos = 1;
};

Context.prototype.lookAhead = function (n) {
  var line = this.doc.getLine(this.line + n);

  if (line != null && n > this.maxLookAhead) {
    this.maxLookAhead = n;
  }

  return line;
};

Context.prototype.baseToken = function (n) {
  var this$1 = this;

  if (!this.baseTokens) {
    return null;
  }

  while (this.baseTokens[this.baseTokenPos] <= n) {
    this$1.baseTokenPos += 2;
  }

  var type = this.baseTokens[this.baseTokenPos + 1];
  return {
    type: type && type.replace(/( |^)overlay .*/, ""),
    size: this.baseTokens[this.baseTokenPos] - n
  };
};

Context.prototype.nextLine = function () {
  this.line++;

  if (this.maxLookAhead > 0) {
    this.maxLookAhead--;
  }
};

Context.fromSaved = function (doc, saved, line) {
  if (saved instanceof SavedContext) {
    return new Context(doc, copyState(doc.mode, saved.state), line, saved.lookAhead);
  } else {
    return new Context(doc, copyState(doc.mode, saved), line);
  }
};

Context.prototype.save = function (copy) {
  var state = copy !== false ? copyState(this.doc.mode, this.state) : this.state;
  return this.maxLookAhead > 0 ? new SavedContext(state, this.maxLookAhead) : state;
}; // Compute a style array (an array starting with a mode generation
// -- for invalidation -- followed by pairs of end positions and
// style strings), which is used to highlight the tokens on the
// line.


function highlightLine(cm, line, context, forceToEnd) {
  // A styles array always starts with a number identifying the
  // mode/overlays that it is based on (for easy invalidation).
  var st = [cm.state.modeGen],
      lineClasses = {}; // Compute the base array of styles

  runMode(cm, line.text, cm.doc.mode, context, function (end, style) {
    return st.push(end, style);
  }, lineClasses, forceToEnd);
  var state = context.state; // Run overlays, adjust style array.

  var loop = function loop(o) {
    context.baseTokens = st;
    var overlay = cm.state.overlays[o],
        i = 1,
        at = 0;
    context.state = true;
    runMode(cm, line.text, overlay.mode, context, function (end, style) {
      var start = i; // Ensure there's a token end at the current position, and that i points at it

      while (at < end) {
        var i_end = st[i];

        if (i_end > end) {
          st.splice(i, 1, end, st[i + 1], i_end);
        }

        i += 2;
        at = Math.min(end, i_end);
      }

      if (!style) {
        return;
      }

      if (overlay.opaque) {
        st.splice(start, i - start, end, "overlay " + style);
        i = start + 2;
      } else {
        for (; start < i; start += 2) {
          var cur = st[start + 1];
          st[start + 1] = (cur ? cur + " " : "") + "overlay " + style;
        }
      }
    }, lineClasses);
    context.state = state;
    context.baseTokens = null;
    context.baseTokenPos = 1;
  };

  for (var o = 0; o < cm.state.overlays.length; ++o) {
    loop(o);
  }

  return {
    styles: st,
    classes: lineClasses.bgClass || lineClasses.textClass ? lineClasses : null
  };
}

function getLineStyles(cm, line, updateFrontier) {
  if (!line.styles || line.styles[0] != cm.state.modeGen) {
    var context = getContextBefore(cm, lineNo(line));
    var resetState = line.text.length > cm.options.maxHighlightLength && copyState(cm.doc.mode, context.state);
    var result = highlightLine(cm, line, context);

    if (resetState) {
      context.state = resetState;
    }

    line.stateAfter = context.save(!resetState);
    line.styles = result.styles;

    if (result.classes) {
      line.styleClasses = result.classes;
    } else if (line.styleClasses) {
      line.styleClasses = null;
    }

    if (updateFrontier === cm.doc.highlightFrontier) {
      cm.doc.modeFrontier = Math.max(cm.doc.modeFrontier, ++cm.doc.highlightFrontier);
    }
  }

  return line.styles;
}

function getContextBefore(cm, n, precise) {
  var doc = cm.doc,
      display = cm.display;

  if (!doc.mode.startState) {
    return new Context(doc, true, n);
  }

  var start = findStartLine(cm, n, precise);
  var saved = start > doc.first && getLine(doc, start - 1).stateAfter;
  var context = saved ? Context.fromSaved(doc, saved, start) : new Context(doc, startState(doc.mode), start);
  doc.iter(start, n, function (line) {
    processLine(cm, line.text, context);
    var pos = context.line;
    line.stateAfter = pos == n - 1 || pos % 5 == 0 || pos >= display.viewFrom && pos < display.viewTo ? context.save() : null;
    context.nextLine();
  });

  if (precise) {
    doc.modeFrontier = context.line;
  }

  return context;
} // Lightweight form of highlight -- proceed over this line and
// update state, but don't save a style array. Used for lines that
// aren't currently visible.


function processLine(cm, text, context, startAt) {
  var mode = cm.doc.mode;
  var stream = new StringStream(text, cm.options.tabSize, context);
  stream.start = stream.pos = startAt || 0;

  if (text == "") {
    callBlankLine(mode, context.state);
  }

  while (!stream.eol()) {
    readToken(mode, stream, context.state);
    stream.start = stream.pos;
  }
}

function callBlankLine(mode, state) {
  if (mode.blankLine) {
    return mode.blankLine(state);
  }

  if (!mode.innerMode) {
    return;
  }

  var inner = innerMode(mode, state);

  if (inner.mode.blankLine) {
    return inner.mode.blankLine(inner.state);
  }
}

function readToken(mode, stream, state, inner) {
  for (var i = 0; i < 10; i++) {
    if (inner) {
      inner[0] = innerMode(mode, state).mode;
    }

    var style = mode.token(stream, state);

    if (stream.pos > stream.start) {
      return style;
    }
  }

  throw new Error("Mode " + mode.name + " failed to advance stream.");
}

var Token = function Token(stream, type, state) {
  this.start = stream.start;
  this.end = stream.pos;
  this.string = stream.current();
  this.type = type || null;
  this.state = state;
}; // Utility for getTokenAt and getLineTokens


function takeToken(cm, pos, precise, asArray) {
  var doc = cm.doc,
      mode = doc.mode,
      style;
  pos = _clipPos(doc, pos);
  var line = getLine(doc, pos.line),
      context = getContextBefore(cm, pos.line, precise);
  var stream = new StringStream(line.text, cm.options.tabSize, context),
      tokens;

  if (asArray) {
    tokens = [];
  }

  while ((asArray || stream.pos < pos.ch) && !stream.eol()) {
    stream.start = stream.pos;
    style = readToken(mode, stream, context.state);

    if (asArray) {
      tokens.push(new Token(stream, style, copyState(doc.mode, context.state)));
    }
  }

  return asArray ? tokens : new Token(stream, style, context.state);
}

function extractLineClasses(type, output) {
  if (type) {
    for (;;) {
      var lineClass = type.match(/(?:^|\s+)line-(background-)?(\S+)/);

      if (!lineClass) {
        break;
      }

      type = type.slice(0, lineClass.index) + type.slice(lineClass.index + lineClass[0].length);
      var prop = lineClass[1] ? "bgClass" : "textClass";

      if (output[prop] == null) {
        output[prop] = lineClass[2];
      } else if (!new RegExp("(?:^|\s)" + lineClass[2] + "(?:$|\s)").test(output[prop])) {
        output[prop] += " " + lineClass[2];
      }
    }
  }

  return type;
} // Run the given mode's parser over a line, calling f for each token.


function runMode(cm, text, mode, context, f, lineClasses, forceToEnd) {
  var flattenSpans = mode.flattenSpans;

  if (flattenSpans == null) {
    flattenSpans = cm.options.flattenSpans;
  }

  var curStart = 0,
      curStyle = null;
  var stream = new StringStream(text, cm.options.tabSize, context),
      style;
  var inner = cm.options.addModeClass && [null];

  if (text == "") {
    extractLineClasses(callBlankLine(mode, context.state), lineClasses);
  }

  while (!stream.eol()) {
    if (stream.pos > cm.options.maxHighlightLength) {
      flattenSpans = false;

      if (forceToEnd) {
        processLine(cm, text, context, stream.pos);
      }

      stream.pos = text.length;
      style = null;
    } else {
      style = extractLineClasses(readToken(mode, stream, context.state, inner), lineClasses);
    }

    if (inner) {
      var mName = inner[0].name;

      if (mName) {
        style = "m-" + (style ? mName + " " + style : mName);
      }
    }

    if (!flattenSpans || curStyle != style) {
      while (curStart < stream.start) {
        curStart = Math.min(stream.start, curStart + 5000);
        f(curStart, curStyle);
      }

      curStyle = style;
    }

    stream.start = stream.pos;
  }

  while (curStart < stream.pos) {
    // Webkit seems to refuse to render text nodes longer than 57444
    // characters, and returns inaccurate measurements in nodes
    // starting around 5000 chars.
    var pos = Math.min(stream.pos, curStart + 5000);
    f(pos, curStyle);
    curStart = pos;
  }
} // Finds the line to start with when starting a parse. Tries to
// find a line with a stateAfter, so that it can start with a
// valid state. If that fails, it returns the line with the
// smallest indentation, which tends to need the least context to
// parse correctly.


function findStartLine(cm, n, precise) {
  var minindent,
      minline,
      doc = cm.doc;
  var lim = precise ? -1 : n - (cm.doc.mode.innerMode ? 1000 : 100);

  for (var search = n; search > lim; --search) {
    if (search <= doc.first) {
      return doc.first;
    }

    var line = getLine(doc, search - 1),
        after = line.stateAfter;

    if (after && (!precise || search + (after instanceof SavedContext ? after.lookAhead : 0) <= doc.modeFrontier)) {
      return search;
    }

    var indented = countColumn(line.text, null, cm.options.tabSize);

    if (minline == null || minindent > indented) {
      minline = search - 1;
      minindent = indented;
    }
  }

  return minline;
}

function retreatFrontier(doc, n) {
  doc.modeFrontier = Math.min(doc.modeFrontier, n);

  if (doc.highlightFrontier < n - 10) {
    return;
  }

  var start = doc.first;

  for (var line = n - 1; line > start; line--) {
    var saved = getLine(doc, line).stateAfter; // change is on 3
    // state on line 1 looked ahead 2 -- so saw 3
    // test 1 + 2 < 3 should cover this

    if (saved && (!(saved instanceof SavedContext) || line + saved.lookAhead < n)) {
      start = line + 1;
      break;
    }
  }

  doc.highlightFrontier = Math.min(doc.highlightFrontier, start);
} // Optimize some code when these features are not used.


var sawReadOnlySpans = false,
    sawCollapsedSpans = false;

function seeReadOnlySpans() {
  sawReadOnlySpans = true;
}

function seeCollapsedSpans() {
  sawCollapsedSpans = true;
} // TEXTMARKER SPANS


function MarkedSpan(marker, from, to) {
  this.marker = marker;
  this.from = from;
  this.to = to;
} // Search an array of spans for a span matching the given marker.


function getMarkedSpanFor(spans, marker) {
  if (spans) {
    for (var i = 0; i < spans.length; ++i) {
      var span = spans[i];

      if (span.marker == marker) {
        return span;
      }
    }
  }
} // Remove a span from an array, returning undefined if no spans are
// left (we don't store arrays for lines without spans).


function removeMarkedSpan(spans, span) {
  var r;

  for (var i = 0; i < spans.length; ++i) {
    if (spans[i] != span) {
      (r || (r = [])).push(spans[i]);
    }
  }

  return r;
} // Add a span to a line.


function addMarkedSpan(line, span) {
  line.markedSpans = line.markedSpans ? line.markedSpans.concat([span]) : [span];
  span.marker.attachLine(line);
} // Used for the algorithm that adjusts markers for a change in the
// document. These functions cut an array of spans at a given
// character position, returning an array of remaining chunks (or
// undefined if nothing remains).


function markedSpansBefore(old, startCh, isInsert) {
  var nw;

  if (old) {
    for (var i = 0; i < old.length; ++i) {
      var span = old[i],
          marker = span.marker;
      var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh);

      if (startsBefore || span.from == startCh && marker.type == "bookmark" && (!isInsert || !span.marker.insertLeft)) {
        var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh);
        (nw || (nw = [])).push(new MarkedSpan(marker, span.from, endsAfter ? null : span.to));
      }
    }
  }

  return nw;
}

function markedSpansAfter(old, endCh, isInsert) {
  var nw;

  if (old) {
    for (var i = 0; i < old.length; ++i) {
      var span = old[i],
          marker = span.marker;
      var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh);

      if (endsAfter || span.from == endCh && marker.type == "bookmark" && (!isInsert || span.marker.insertLeft)) {
        var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh);
        (nw || (nw = [])).push(new MarkedSpan(marker, startsBefore ? null : span.from - endCh, span.to == null ? null : span.to - endCh));
      }
    }
  }

  return nw;
} // Given a change object, compute the new set of marker spans that
// cover the line in which the change took place. Removes spans
// entirely within the change, reconnects spans belonging to the
// same marker that appear on both sides of the change, and cuts off
// spans partially within the change. Returns an array of span
// arrays with one element for each line in (after) the change.


function stretchSpansOverChange(doc, change) {
  if (change.full) {
    return null;
  }

  var oldFirst = isLine(doc, change.from.line) && getLine(doc, change.from.line).markedSpans;
  var oldLast = isLine(doc, change.to.line) && getLine(doc, change.to.line).markedSpans;

  if (!oldFirst && !oldLast) {
    return null;
  }

  var startCh = change.from.ch,
      endCh = change.to.ch,
      isInsert = cmp(change.from, change.to) == 0; // Get the spans that 'stick out' on both sides

  var first = markedSpansBefore(oldFirst, startCh, isInsert);
  var last = markedSpansAfter(oldLast, endCh, isInsert); // Next, merge those two ends

  var sameLine = change.text.length == 1,
      offset = lst(change.text).length + (sameLine ? startCh : 0);

  if (first) {
    // Fix up .to properties of first
    for (var i = 0; i < first.length; ++i) {
      var span = first[i];

      if (span.to == null) {
        var found = getMarkedSpanFor(last, span.marker);

        if (!found) {
          span.to = startCh;
        } else if (sameLine) {
          span.to = found.to == null ? null : found.to + offset;
        }
      }
    }
  }

  if (last) {
    // Fix up .from in last (or move them into first in case of sameLine)
    for (var i$1 = 0; i$1 < last.length; ++i$1) {
      var span$1 = last[i$1];

      if (span$1.to != null) {
        span$1.to += offset;
      }

      if (span$1.from == null) {
        var found$1 = getMarkedSpanFor(first, span$1.marker);

        if (!found$1) {
          span$1.from = offset;

          if (sameLine) {
            (first || (first = [])).push(span$1);
          }
        }
      } else {
        span$1.from += offset;

        if (sameLine) {
          (first || (first = [])).push(span$1);
        }
      }
    }
  } // Make sure we didn't create any zero-length spans


  if (first) {
    first = clearEmptySpans(first);
  }

  if (last && last != first) {
    last = clearEmptySpans(last);
  }

  var newMarkers = [first];

  if (!sameLine) {
    // Fill gap with whole-line-spans
    var gap = change.text.length - 2,
        gapMarkers;

    if (gap > 0 && first) {
      for (var i$2 = 0; i$2 < first.length; ++i$2) {
        if (first[i$2].to == null) {
          (gapMarkers || (gapMarkers = [])).push(new MarkedSpan(first[i$2].marker, null, null));
        }
      }
    }

    for (var i$3 = 0; i$3 < gap; ++i$3) {
      newMarkers.push(gapMarkers);
    }

    newMarkers.push(last);
  }

  return newMarkers;
} // Remove spans that are empty and don't have a clearWhenEmpty
// option of false.


function clearEmptySpans(spans) {
  for (var i = 0; i < spans.length; ++i) {
    var span = spans[i];

    if (span.from != null && span.from == span.to && span.marker.clearWhenEmpty !== false) {
      spans.splice(i--, 1);
    }
  }

  if (!spans.length) {
    return null;
  }

  return spans;
} // Used to 'clip' out readOnly ranges when making a change.


function removeReadOnlyRanges(doc, from, to) {
  var markers = null;
  doc.iter(from.line, to.line + 1, function (line) {
    if (line.markedSpans) {
      for (var i = 0; i < line.markedSpans.length; ++i) {
        var mark = line.markedSpans[i].marker;

        if (mark.readOnly && (!markers || indexOf(markers, mark) == -1)) {
          (markers || (markers = [])).push(mark);
        }
      }
    }
  });

  if (!markers) {
    return null;
  }

  var parts = [{
    from: from,
    to: to
  }];

  for (var i = 0; i < markers.length; ++i) {
    var mk = markers[i],
        m = mk.find(0);

    for (var j = 0; j < parts.length; ++j) {
      var p = parts[j];

      if (cmp(p.to, m.from) < 0 || cmp(p.from, m.to) > 0) {
        continue;
      }

      var newParts = [j, 1],
          dfrom = cmp(p.from, m.from),
          dto = cmp(p.to, m.to);

      if (dfrom < 0 || !mk.inclusiveLeft && !dfrom) {
        newParts.push({
          from: p.from,
          to: m.from
        });
      }

      if (dto > 0 || !mk.inclusiveRight && !dto) {
        newParts.push({
          from: m.to,
          to: p.to
        });
      }

      parts.splice.apply(parts, newParts);
      j += newParts.length - 3;
    }
  }

  return parts;
} // Connect or disconnect spans from a line.


function detachMarkedSpans(line) {
  var spans = line.markedSpans;

  if (!spans) {
    return;
  }

  for (var i = 0; i < spans.length; ++i) {
    spans[i].marker.detachLine(line);
  }

  line.markedSpans = null;
}

function attachMarkedSpans(line, spans) {
  if (!spans) {
    return;
  }

  for (var i = 0; i < spans.length; ++i) {
    spans[i].marker.attachLine(line);
  }

  line.markedSpans = spans;
} // Helpers used when computing which overlapping collapsed span
// counts as the larger one.


function extraLeft(marker) {
  return marker.inclusiveLeft ? -1 : 0;
}

function extraRight(marker) {
  return marker.inclusiveRight ? 1 : 0;
} // Returns a number indicating which of two overlapping collapsed
// spans is larger (and thus includes the other). Falls back to
// comparing ids when the spans cover exactly the same range.


function compareCollapsedMarkers(a, b) {
  var lenDiff = a.lines.length - b.lines.length;

  if (lenDiff != 0) {
    return lenDiff;
  }

  var aPos = a.find(),
      bPos = b.find();
  var fromCmp = cmp(aPos.from, bPos.from) || extraLeft(a) - extraLeft(b);

  if (fromCmp) {
    return -fromCmp;
  }

  var toCmp = cmp(aPos.to, bPos.to) || extraRight(a) - extraRight(b);

  if (toCmp) {
    return toCmp;
  }

  return b.id - a.id;
} // Find out whether a line ends or starts in a collapsed span. If
// so, return the marker for that span.


function collapsedSpanAtSide(line, start) {
  var sps = sawCollapsedSpans && line.markedSpans,
      found;

  if (sps) {
    for (var sp = void 0, i = 0; i < sps.length; ++i) {
      sp = sps[i];

      if (sp.marker.collapsed && (start ? sp.from : sp.to) == null && (!found || compareCollapsedMarkers(found, sp.marker) < 0)) {
        found = sp.marker;
      }
    }
  }

  return found;
}

function collapsedSpanAtStart(line) {
  return collapsedSpanAtSide(line, true);
}

function collapsedSpanAtEnd(line) {
  return collapsedSpanAtSide(line, false);
}

function collapsedSpanAround(line, ch) {
  var sps = sawCollapsedSpans && line.markedSpans,
      found;

  if (sps) {
    for (var i = 0; i < sps.length; ++i) {
      var sp = sps[i];

      if (sp.marker.collapsed && (sp.from == null || sp.from < ch) && (sp.to == null || sp.to > ch) && (!found || compareCollapsedMarkers(found, sp.marker) < 0)) {
        found = sp.marker;
      }
    }
  }

  return found;
} // Test whether there exists a collapsed span that partially
// overlaps (covers the start or end, but not both) of a new span.
// Such overlap is not allowed.


function conflictingCollapsedRange(doc, lineNo$$1, from, to, marker) {
  var line = getLine(doc, lineNo$$1);
  var sps = sawCollapsedSpans && line.markedSpans;

  if (sps) {
    for (var i = 0; i < sps.length; ++i) {
      var sp = sps[i];

      if (!sp.marker.collapsed) {
        continue;
      }

      var found = sp.marker.find(0);
      var fromCmp = cmp(found.from, from) || extraLeft(sp.marker) - extraLeft(marker);
      var toCmp = cmp(found.to, to) || extraRight(sp.marker) - extraRight(marker);

      if (fromCmp >= 0 && toCmp <= 0 || fromCmp <= 0 && toCmp >= 0) {
        continue;
      }

      if (fromCmp <= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.to, from) >= 0 : cmp(found.to, from) > 0) || fromCmp >= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.from, to) <= 0 : cmp(found.from, to) < 0)) {
        return true;
      }
    }
  }
} // A visual line is a line as drawn on the screen. Folding, for
// example, can cause multiple logical lines to appear on the same
// visual line. This finds the start of the visual line that the
// given line is part of (usually that is the line itself).


function visualLine(line) {
  var merged;

  while (merged = collapsedSpanAtStart(line)) {
    line = merged.find(-1, true).line;
  }

  return line;
}

function visualLineEnd(line) {
  var merged;

  while (merged = collapsedSpanAtEnd(line)) {
    line = merged.find(1, true).line;
  }

  return line;
} // Returns an array of logical lines that continue the visual line
// started by the argument, or undefined if there are no such lines.


function visualLineContinued(line) {
  var merged, lines;

  while (merged = collapsedSpanAtEnd(line)) {
    line = merged.find(1, true).line;
    (lines || (lines = [])).push(line);
  }

  return lines;
} // Get the line number of the start of the visual line that the
// given line number is part of.


function visualLineNo(doc, lineN) {
  var line = getLine(doc, lineN),
      vis = visualLine(line);

  if (line == vis) {
    return lineN;
  }

  return lineNo(vis);
} // Get the line number of the start of the next visual line after
// the given line.


function visualLineEndNo(doc, lineN) {
  if (lineN > doc.lastLine()) {
    return lineN;
  }

  var line = getLine(doc, lineN),
      merged;

  if (!lineIsHidden(doc, line)) {
    return lineN;
  }

  while (merged = collapsedSpanAtEnd(line)) {
    line = merged.find(1, true).line;
  }

  return lineNo(line) + 1;
} // Compute whether a line is hidden. Lines count as hidden when they
// are part of a visual line that starts with another line, or when
// they are entirely covered by collapsed, non-widget span.


function lineIsHidden(doc, line) {
  var sps = sawCollapsedSpans && line.markedSpans;

  if (sps) {
    for (var sp = void 0, i = 0; i < sps.length; ++i) {
      sp = sps[i];

      if (!sp.marker.collapsed) {
        continue;
      }

      if (sp.from == null) {
        return true;
      }

      if (sp.marker.widgetNode) {
        continue;
      }

      if (sp.from == 0 && sp.marker.inclusiveLeft && lineIsHiddenInner(doc, line, sp)) {
        return true;
      }
    }
  }
}

function lineIsHiddenInner(doc, line, span) {
  if (span.to == null) {
    var end = span.marker.find(1, true);
    return lineIsHiddenInner(doc, end.line, getMarkedSpanFor(end.line.markedSpans, span.marker));
  }

  if (span.marker.inclusiveRight && span.to == line.text.length) {
    return true;
  }

  for (var sp = void 0, i = 0; i < line.markedSpans.length; ++i) {
    sp = line.markedSpans[i];

    if (sp.marker.collapsed && !sp.marker.widgetNode && sp.from == span.to && (sp.to == null || sp.to != span.from) && (sp.marker.inclusiveLeft || span.marker.inclusiveRight) && lineIsHiddenInner(doc, line, sp)) {
      return true;
    }
  }
} // Find the height above the given line.


function _heightAtLine(lineObj) {
  lineObj = visualLine(lineObj);
  var h = 0,
      chunk = lineObj.parent;

  for (var i = 0; i < chunk.lines.length; ++i) {
    var line = chunk.lines[i];

    if (line == lineObj) {
      break;
    } else {
      h += line.height;
    }
  }

  for (var p = chunk.parent; p; chunk = p, p = chunk.parent) {
    for (var i$1 = 0; i$1 < p.children.length; ++i$1) {
      var cur = p.children[i$1];

      if (cur == chunk) {
        break;
      } else {
        h += cur.height;
      }
    }
  }

  return h;
} // Compute the character length of a line, taking into account
// collapsed ranges (see markText) that might hide parts, and join
// other lines onto it.


function lineLength(line) {
  if (line.height == 0) {
    return 0;
  }

  var len = line.text.length,
      merged,
      cur = line;

  while (merged = collapsedSpanAtStart(cur)) {
    var found = merged.find(0, true);
    cur = found.from.line;
    len += found.from.ch - found.to.ch;
  }

  cur = line;

  while (merged = collapsedSpanAtEnd(cur)) {
    var found$1 = merged.find(0, true);
    len -= cur.text.length - found$1.from.ch;
    cur = found$1.to.line;
    len += cur.text.length - found$1.to.ch;
  }

  return len;
} // Find the longest line in the document.


function findMaxLine(cm) {
  var d = cm.display,
      doc = cm.doc;
  d.maxLine = getLine(doc, doc.first);
  d.maxLineLength = lineLength(d.maxLine);
  d.maxLineChanged = true;
  doc.iter(function (line) {
    var len = lineLength(line);

    if (len > d.maxLineLength) {
      d.maxLineLength = len;
      d.maxLine = line;
    }
  });
} // LINE DATA STRUCTURE
// Line objects. These hold state related to a line, including
// highlighting info (the styles array).


var Line = function Line(text, markedSpans, estimateHeight) {
  this.text = text;
  attachMarkedSpans(this, markedSpans);
  this.height = estimateHeight ? estimateHeight(this) : 1;
};

Line.prototype.lineNo = function () {
  return lineNo(this);
};

eventMixin(Line); // Change the content (text, markers) of a line. Automatically
// invalidates cached information and tries to re-estimate the
// line's height.

function updateLine(line, text, markedSpans, estimateHeight) {
  line.text = text;

  if (line.stateAfter) {
    line.stateAfter = null;
  }

  if (line.styles) {
    line.styles = null;
  }

  if (line.order != null) {
    line.order = null;
  }

  detachMarkedSpans(line);
  attachMarkedSpans(line, markedSpans);
  var estHeight = estimateHeight ? estimateHeight(line) : 1;

  if (estHeight != line.height) {
    updateLineHeight(line, estHeight);
  }
} // Detach a line from the document tree and its markers.


function cleanUpLine(line) {
  line.parent = null;
  detachMarkedSpans(line);
} // Convert a style as returned by a mode (either null, or a string
// containing one or more styles) to a CSS style. This is cached,
// and also looks for line-wide styles.


var styleToClassCache = {},
    styleToClassCacheWithMode = {};

function interpretTokenStyle(style, options) {
  if (!style || /^\s*$/.test(style)) {
    return null;
  }

  var cache = options.addModeClass ? styleToClassCacheWithMode : styleToClassCache;
  return cache[style] || (cache[style] = style.replace(/\S+/g, "cm-$&"));
} // Render the DOM representation of the text of a line. Also builds
// up a 'line map', which points at the DOM nodes that represent
// specific stretches of text, and is used by the measuring code.
// The returned object contains the DOM node, this map, and
// information about line-wide styles that were set by the mode.


function buildLineContent(cm, lineView) {
  // The padding-right forces the element to have a 'border', which
  // is needed on Webkit to be able to get line-level bounding
  // rectangles for it (in measureChar).
  var content = eltP("span", null, null, webkit ? "padding-right: .1px" : null);
  var builder = {
    pre: eltP("pre", [content], "CodeMirror-line"),
    content: content,
    col: 0,
    pos: 0,
    cm: cm,
    trailingSpace: false,
    splitSpaces: cm.getOption("lineWrapping")
  };
  lineView.measure = {}; // Iterate over the logical lines that make up this visual line.

  for (var i = 0; i <= (lineView.rest ? lineView.rest.length : 0); i++) {
    var line = i ? lineView.rest[i - 1] : lineView.line,
        order = void 0;
    builder.pos = 0;
    builder.addToken = buildToken; // Optionally wire in some hacks into the token-rendering
    // algorithm, to deal with browser quirks.

    if (hasBadBidiRects(cm.display.measure) && (order = getOrder(line, cm.doc.direction))) {
      builder.addToken = buildTokenBadBidi(builder.addToken, order);
    }

    builder.map = [];
    var allowFrontierUpdate = lineView != cm.display.externalMeasured && lineNo(line);
    insertLineContent(line, builder, getLineStyles(cm, line, allowFrontierUpdate));

    if (line.styleClasses) {
      if (line.styleClasses.bgClass) {
        builder.bgClass = joinClasses(line.styleClasses.bgClass, builder.bgClass || "");
      }

      if (line.styleClasses.textClass) {
        builder.textClass = joinClasses(line.styleClasses.textClass, builder.textClass || "");
      }
    } // Ensure at least a single node is present, for measuring.


    if (builder.map.length == 0) {
      builder.map.push(0, 0, builder.content.appendChild(zeroWidthElement(cm.display.measure)));
    } // Store the map and a cache object for the current logical line


    if (i == 0) {
      lineView.measure.map = builder.map;
      lineView.measure.cache = {};
    } else {
      (lineView.measure.maps || (lineView.measure.maps = [])).push(builder.map);
      (lineView.measure.caches || (lineView.measure.caches = [])).push({});
    }
  } // See issue #2901


  if (webkit) {
    var last = builder.content.lastChild;

    if (/\bcm-tab\b/.test(last.className) || last.querySelector && last.querySelector(".cm-tab")) {
      builder.content.className = "cm-tab-wrap-hack";
    }
  }

  signal(cm, "renderLine", cm, lineView.line, builder.pre);

  if (builder.pre.className) {
    builder.textClass = joinClasses(builder.pre.className, builder.textClass || "");
  }

  return builder;
}

function defaultSpecialCharPlaceholder(ch) {
  var token = elt("span", "\u2022", "cm-invalidchar");
  token.title = "\\u" + ch.charCodeAt(0).toString(16);
  token.setAttribute("aria-label", token.title);
  return token;
} // Build up the DOM representation for a single token, and add it to
// the line map. Takes care to render special characters separately.


function buildToken(builder, text, style, startStyle, endStyle, css, attributes) {
  if (!text) {
    return;
  }

  var displayText = builder.splitSpaces ? splitSpaces(text, builder.trailingSpace) : text;
  var special = builder.cm.state.specialChars,
      mustWrap = false;
  var content;

  if (!special.test(text)) {
    builder.col += text.length;
    content = document.createTextNode(displayText);
    builder.map.push(builder.pos, builder.pos + text.length, content);

    if (ie && ie_version < 9) {
      mustWrap = true;
    }

    builder.pos += text.length;
  } else {
    content = document.createDocumentFragment();
    var pos = 0;

    while (true) {
      special.lastIndex = pos;
      var m = special.exec(text);
      var skipped = m ? m.index - pos : text.length - pos;

      if (skipped) {
        var txt = document.createTextNode(displayText.slice(pos, pos + skipped));

        if (ie && ie_version < 9) {
          content.appendChild(elt("span", [txt]));
        } else {
          content.appendChild(txt);
        }

        builder.map.push(builder.pos, builder.pos + skipped, txt);
        builder.col += skipped;
        builder.pos += skipped;
      }

      if (!m) {
        break;
      }

      pos += skipped + 1;
      var txt$1 = void 0;

      if (m[0] == "\t") {
        var tabSize = builder.cm.options.tabSize,
            tabWidth = tabSize - builder.col % tabSize;
        txt$1 = content.appendChild(elt("span", spaceStr(tabWidth), "cm-tab"));
        txt$1.setAttribute("role", "presentation");
        txt$1.setAttribute("cm-text", "\t");
        builder.col += tabWidth;
      } else if (m[0] == "\r" || m[0] == "\n") {
        txt$1 = content.appendChild(elt("span", m[0] == "\r" ? "\u240D" : "\u2424", "cm-invalidchar"));
        txt$1.setAttribute("cm-text", m[0]);
        builder.col += 1;
      } else {
        txt$1 = builder.cm.options.specialCharPlaceholder(m[0]);
        txt$1.setAttribute("cm-text", m[0]);

        if (ie && ie_version < 9) {
          content.appendChild(elt("span", [txt$1]));
        } else {
          content.appendChild(txt$1);
        }

        builder.col += 1;
      }

      builder.map.push(builder.pos, builder.pos + 1, txt$1);
      builder.pos++;
    }
  }

  builder.trailingSpace = displayText.charCodeAt(text.length - 1) == 32;

  if (style || startStyle || endStyle || mustWrap || css) {
    var fullStyle = style || "";

    if (startStyle) {
      fullStyle += startStyle;
    }

    if (endStyle) {
      fullStyle += endStyle;
    }

    var token = elt("span", [content], fullStyle, css);

    if (attributes) {
      for (var attr in attributes) {
        if (attributes.hasOwnProperty(attr) && attr != "style" && attr != "class") {
          token.setAttribute(attr, attributes[attr]);
        }
      }
    }

    return builder.content.appendChild(token);
  }

  builder.content.appendChild(content);
} // Change some spaces to NBSP to prevent the browser from collapsing
// trailing spaces at the end of a line when rendering text (issue #1362).


function splitSpaces(text, trailingBefore) {
  if (text.length > 1 && !/  /.test(text)) {
    return text;
  }

  var spaceBefore = trailingBefore,
      result = "";

  for (var i = 0; i < text.length; i++) {
    var ch = text.charAt(i);

    if (ch == " " && spaceBefore && (i == text.length - 1 || text.charCodeAt(i + 1) == 32)) {
      ch = "\xA0";
    }

    result += ch;
    spaceBefore = ch == " ";
  }

  return result;
} // Work around nonsense dimensions being reported for stretches of
// right-to-left text.


function buildTokenBadBidi(inner, order) {
  return function (builder, text, style, startStyle, endStyle, css, attributes) {
    style = style ? style + " cm-force-border" : "cm-force-border";
    var start = builder.pos,
        end = start + text.length;

    for (;;) {
      // Find the part that overlaps with the start of this text
      var part = void 0;

      for (var i = 0; i < order.length; i++) {
        part = order[i];

        if (part.to > start && part.from <= start) {
          break;
        }
      }

      if (part.to >= end) {
        return inner(builder, text, style, startStyle, endStyle, css, attributes);
      }

      inner(builder, text.slice(0, part.to - start), style, startStyle, null, css, attributes);
      startStyle = null;
      text = text.slice(part.to - start);
      start = part.to;
    }
  };
}

function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
  var widget = !ignoreWidget && marker.widgetNode;

  if (widget) {
    builder.map.push(builder.pos, builder.pos + size, widget);
  }

  if (!ignoreWidget && builder.cm.display.input.needsContentAttribute) {
    if (!widget) {
      widget = builder.content.appendChild(document.createElement("span"));
    }

    widget.setAttribute("cm-marker", marker.id);
  }

  if (widget) {
    builder.cm.display.input.setUneditable(widget);
    builder.content.appendChild(widget);
  }

  builder.pos += size;
  builder.trailingSpace = false;
} // Outputs a number of spans to make up a line, taking highlighting
// and index text into account.


function insertLineContent(line, builder, styles) {
  var spans = line.markedSpans,
      allText = line.text,
      at = 0;

  if (!spans) {
    for (var i$1 = 1; i$1 < styles.length; i$1 += 2) {
      builder.addToken(builder, allText.slice(at, at = styles[i$1]), interpretTokenStyle(styles[i$1 + 1], builder.cm.options));
    }

    return;
  }

  var len = allText.length,
      pos = 0,
      i = 1,
      text = "",
      style,
      css;
  var nextChange = 0,
      spanStyle,
      spanEndStyle,
      spanStartStyle,
      collapsed,
      attributes;

  for (;;) {
    if (nextChange == pos) {
      // Update current marker set
      spanStyle = spanEndStyle = spanStartStyle = css = "";
      attributes = null;
      collapsed = null;
      nextChange = Infinity;
      var foundBookmarks = [],
          endStyles = void 0;

      for (var j = 0; j < spans.length; ++j) {
        var sp = spans[j],
            m = sp.marker;

        if (m.type == "bookmark" && sp.from == pos && m.widgetNode) {
          foundBookmarks.push(m);
        } else if (sp.from <= pos && (sp.to == null || sp.to > pos || m.collapsed && sp.to == pos && sp.from == pos)) {
          if (sp.to != null && sp.to != pos && nextChange > sp.to) {
            nextChange = sp.to;
            spanEndStyle = "";
          }

          if (m.className) {
            spanStyle += " " + m.className;
          }

          if (m.css) {
            css = (css ? css + ";" : "") + m.css;
          }

          if (m.startStyle && sp.from == pos) {
            spanStartStyle += " " + m.startStyle;
          }

          if (m.endStyle && sp.to == nextChange) {
            (endStyles || (endStyles = [])).push(m.endStyle, sp.to);
          } // support for the old title property
          // https://github.com/codemirror/CodeMirror/pull/5673


          if (m.title) {
            (attributes || (attributes = {})).title = m.title;
          }

          if (m.attributes) {
            for (var attr in m.attributes) {
              (attributes || (attributes = {}))[attr] = m.attributes[attr];
            }
          }

          if (m.collapsed && (!collapsed || compareCollapsedMarkers(collapsed.marker, m) < 0)) {
            collapsed = sp;
          }
        } else if (sp.from > pos && nextChange > sp.from) {
          nextChange = sp.from;
        }
      }

      if (endStyles) {
        for (var j$1 = 0; j$1 < endStyles.length; j$1 += 2) {
          if (endStyles[j$1 + 1] == nextChange) {
            spanEndStyle += " " + endStyles[j$1];
          }
        }
      }

      if (!collapsed || collapsed.from == pos) {
        for (var j$2 = 0; j$2 < foundBookmarks.length; ++j$2) {
          buildCollapsedSpan(builder, 0, foundBookmarks[j$2]);
        }
      }

      if (collapsed && (collapsed.from || 0) == pos) {
        buildCollapsedSpan(builder, (collapsed.to == null ? len + 1 : collapsed.to) - pos, collapsed.marker, collapsed.from == null);

        if (collapsed.to == null) {
          return;
        }

        if (collapsed.to == pos) {
          collapsed = false;
        }
      }
    }

    if (pos >= len) {
      break;
    }

    var upto = Math.min(len, nextChange);

    while (true) {
      if (text) {
        var end = pos + text.length;

        if (!collapsed) {
          var tokenText = end > upto ? text.slice(0, upto - pos) : text;
          builder.addToken(builder, tokenText, style ? style + spanStyle : spanStyle, spanStartStyle, pos + tokenText.length == nextChange ? spanEndStyle : "", css, attributes);
        }

        if (end >= upto) {
          text = text.slice(upto - pos);
          pos = upto;
          break;
        }

        pos = end;
        spanStartStyle = "";
      }

      text = allText.slice(at, at = styles[i++]);
      style = interpretTokenStyle(styles[i++], builder.cm.options);
    }
  }
} // These objects are used to represent the visible (currently drawn)
// part of the document. A LineView may correspond to multiple
// logical lines, if those are connected by collapsed ranges.


function LineView(doc, line, lineN) {
  // The starting line
  this.line = line; // Continuing lines, if any

  this.rest = visualLineContinued(line); // Number of logical lines in this visual line

  this.size = this.rest ? lineNo(lst(this.rest)) - lineN + 1 : 1;
  this.node = this.text = null;
  this.hidden = lineIsHidden(doc, line);
} // Create a range of LineView objects for the given lines.


function buildViewArray(cm, from, to) {
  var array = [],
      nextPos;

  for (var pos = from; pos < to; pos = nextPos) {
    var view = new LineView(cm.doc, getLine(cm.doc, pos), pos);
    nextPos = pos + view.size;
    array.push(view);
  }

  return array;
}

var operationGroup = null;

function pushOperation(op) {
  if (operationGroup) {
    operationGroup.ops.push(op);
  } else {
    op.ownsGroup = operationGroup = {
      ops: [op],
      delayedCallbacks: []
    };
  }
}

function fireCallbacksForOps(group) {
  // Calls delayed callbacks and cursorActivity handlers until no
  // new ones appear
  var callbacks = group.delayedCallbacks,
      i = 0;

  do {
    for (; i < callbacks.length; i++) {
      callbacks[i].call(null);
    }

    for (var j = 0; j < group.ops.length; j++) {
      var op = group.ops[j];

      if (op.cursorActivityHandlers) {
        while (op.cursorActivityCalled < op.cursorActivityHandlers.length) {
          op.cursorActivityHandlers[op.cursorActivityCalled++].call(null, op.cm);
        }
      }
    }
  } while (i < callbacks.length);
}

function finishOperation(op, endCb) {
  var group = op.ownsGroup;

  if (!group) {
    return;
  }

  try {
    fireCallbacksForOps(group);
  } finally {
    operationGroup = null;
    endCb(group);
  }
}

var orphanDelayedCallbacks = null; // Often, we want to signal events at a point where we are in the
// middle of some work, but don't want the handler to start calling
// other methods on the src, which might be in an inconsistent
// state or simply not expect any other events to happen.
// signalLater looks whether there are any handlers, and schedules
// them to be executed when the last operation ends, or, if no
// operation is active, when a timeout fires.

function signalLater(emitter, type
/*, values...*/
) {
  var arr = getHandlers(emitter, type);

  if (!arr.length) {
    return;
  }

  var args = Array.prototype.slice.call(arguments, 2),
      list;

  if (operationGroup) {
    list = operationGroup.delayedCallbacks;
  } else if (orphanDelayedCallbacks) {
    list = orphanDelayedCallbacks;
  } else {
    list = orphanDelayedCallbacks = [];
    setTimeout(fireOrphanDelayed, 0);
  }

  var loop = function loop(i) {
    list.push(function () {
      return arr[i].apply(null, args);
    });
  };

  for (var i = 0; i < arr.length; ++i) {
    loop(i);
  }
}

function fireOrphanDelayed() {
  var delayed = orphanDelayedCallbacks;
  orphanDelayedCallbacks = null;

  for (var i = 0; i < delayed.length; ++i) {
    delayed[i]();
  }
} // When an aspect of a line changes, a string is added to
// lineView.changes. This updates the relevant part of the line's
// DOM structure.


function updateLineForChanges(cm, lineView, lineN, dims) {
  for (var j = 0; j < lineView.changes.length; j++) {
    var type = lineView.changes[j];

    if (type == "text") {
      updateLineText(cm, lineView);
    } else if (type == "gutter") {
      updateLineGutter(cm, lineView, lineN, dims);
    } else if (type == "class") {
      updateLineClasses(cm, lineView);
    } else if (type == "widget") {
      updateLineWidgets(cm, lineView, dims);
    }
  }

  lineView.changes = null;
} // Lines with gutter elements, widgets or a background class need to
// be wrapped, and have the extra elements added to the wrapper div


function ensureLineWrapped(lineView) {
  if (lineView.node == lineView.text) {
    lineView.node = elt("div", null, null, "position: relative");

    if (lineView.text.parentNode) {
      lineView.text.parentNode.replaceChild(lineView.node, lineView.text);
    }

    lineView.node.appendChild(lineView.text);

    if (ie && ie_version < 8) {
      lineView.node.style.zIndex = 2;
    }
  }

  return lineView.node;
}

function updateLineBackground(cm, lineView) {
  var cls = lineView.bgClass ? lineView.bgClass + " " + (lineView.line.bgClass || "") : lineView.line.bgClass;

  if (cls) {
    cls += " CodeMirror-linebackground";
  }

  if (lineView.background) {
    if (cls) {
      lineView.background.className = cls;
    } else {
      lineView.background.parentNode.removeChild(lineView.background);
      lineView.background = null;
    }
  } else if (cls) {
    var wrap = ensureLineWrapped(lineView);
    lineView.background = wrap.insertBefore(elt("div", null, cls), wrap.firstChild);
    cm.display.input.setUneditable(lineView.background);
  }
} // Wrapper around buildLineContent which will reuse the structure
// in display.externalMeasured when possible.


function getLineContent(cm, lineView) {
  var ext = cm.display.externalMeasured;

  if (ext && ext.line == lineView.line) {
    cm.display.externalMeasured = null;
    lineView.measure = ext.measure;
    return ext.built;
  }

  return buildLineContent(cm, lineView);
} // Redraw the line's text. Interacts with the background and text
// classes because the mode may output tokens that influence these
// classes.


function updateLineText(cm, lineView) {
  var cls = lineView.text.className;
  var built = getLineContent(cm, lineView);

  if (lineView.text == lineView.node) {
    lineView.node = built.pre;
  }

  lineView.text.parentNode.replaceChild(built.pre, lineView.text);
  lineView.text = built.pre;

  if (built.bgClass != lineView.bgClass || built.textClass != lineView.textClass) {
    lineView.bgClass = built.bgClass;
    lineView.textClass = built.textClass;
    updateLineClasses(cm, lineView);
  } else if (cls) {
    lineView.text.className = cls;
  }
}

function updateLineClasses(cm, lineView) {
  updateLineBackground(cm, lineView);

  if (lineView.line.wrapClass) {
    ensureLineWrapped(lineView).className = lineView.line.wrapClass;
  } else if (lineView.node != lineView.text) {
    lineView.node.className = "";
  }

  var textClass = lineView.textClass ? lineView.textClass + " " + (lineView.line.textClass || "") : lineView.line.textClass;
  lineView.text.className = textClass || "";
}

function updateLineGutter(cm, lineView, lineN, dims) {
  if (lineView.gutter) {
    lineView.node.removeChild(lineView.gutter);
    lineView.gutter = null;
  }

  if (lineView.gutterBackground) {
    lineView.node.removeChild(lineView.gutterBackground);
    lineView.gutterBackground = null;
  }

  if (lineView.line.gutterClass) {
    var wrap = ensureLineWrapped(lineView);
    lineView.gutterBackground = elt("div", null, "CodeMirror-gutter-background " + lineView.line.gutterClass, "left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px; width: " + dims.gutterTotalWidth + "px");
    cm.display.input.setUneditable(lineView.gutterBackground);
    wrap.insertBefore(lineView.gutterBackground, lineView.text);
  }

  var markers = lineView.line.gutterMarkers;

  if (cm.options.lineNumbers || markers) {
    var wrap$1 = ensureLineWrapped(lineView);
    var gutterWrap = lineView.gutter = elt("div", null, "CodeMirror-gutter-wrapper", "left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px");
    cm.display.input.setUneditable(gutterWrap);
    wrap$1.insertBefore(gutterWrap, lineView.text);

    if (lineView.line.gutterClass) {
      gutterWrap.className += " " + lineView.line.gutterClass;
    }

    if (cm.options.lineNumbers && (!markers || !markers["CodeMirror-linenumbers"])) {
      lineView.lineNumber = gutterWrap.appendChild(elt("div", lineNumberFor(cm.options, lineN), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + dims.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + cm.display.lineNumInnerWidth + "px"));
    }

    if (markers) {
      for (var k = 0; k < cm.display.gutterSpecs.length; ++k) {
        var id = cm.display.gutterSpecs[k].className,
            found = markers.hasOwnProperty(id) && markers[id];

        if (found) {
          gutterWrap.appendChild(elt("div", [found], "CodeMirror-gutter-elt", "left: " + dims.gutterLeft[id] + "px; width: " + dims.gutterWidth[id] + "px"));
        }
      }
    }
  }
}

function updateLineWidgets(cm, lineView, dims) {
  if (lineView.alignable) {
    lineView.alignable = null;
  }

  for (var node = lineView.node.firstChild, next = void 0; node; node = next) {
    next = node.nextSibling;

    if (node.className == "CodeMirror-linewidget") {
      lineView.node.removeChild(node);
    }
  }

  insertLineWidgets(cm, lineView, dims);
} // Build a line's DOM representation from scratch


function buildLineElement(cm, lineView, lineN, dims) {
  var built = getLineContent(cm, lineView);
  lineView.text = lineView.node = built.pre;

  if (built.bgClass) {
    lineView.bgClass = built.bgClass;
  }

  if (built.textClass) {
    lineView.textClass = built.textClass;
  }

  updateLineClasses(cm, lineView);
  updateLineGutter(cm, lineView, lineN, dims);
  insertLineWidgets(cm, lineView, dims);
  return lineView.node;
} // A lineView may contain multiple logical lines (when merged by
// collapsed spans). The widgets for all of them need to be drawn.


function insertLineWidgets(cm, lineView, dims) {
  insertLineWidgetsFor(cm, lineView.line, lineView, dims, true);

  if (lineView.rest) {
    for (var i = 0; i < lineView.rest.length; i++) {
      insertLineWidgetsFor(cm, lineView.rest[i], lineView, dims, false);
    }
  }
}

function insertLineWidgetsFor(cm, line, lineView, dims, allowAbove) {
  if (!line.widgets) {
    return;
  }

  var wrap = ensureLineWrapped(lineView);

  for (var i = 0, ws = line.widgets; i < ws.length; ++i) {
    var widget = ws[i],
        node = elt("div", [widget.node], "CodeMirror-linewidget");

    if (!widget.handleMouseEvents) {
      node.setAttribute("cm-ignore-events", "true");
    }

    positionLineWidget(widget, node, lineView, dims);
    cm.display.input.setUneditable(node);

    if (allowAbove && widget.above) {
      wrap.insertBefore(node, lineView.gutter || lineView.text);
    } else {
      wrap.appendChild(node);
    }

    signalLater(widget, "redraw");
  }
}

function positionLineWidget(widget, node, lineView, dims) {
  if (widget.noHScroll) {
    (lineView.alignable || (lineView.alignable = [])).push(node);
    var width = dims.wrapperWidth;
    node.style.left = dims.fixedPos + "px";

    if (!widget.coverGutter) {
      width -= dims.gutterTotalWidth;
      node.style.paddingLeft = dims.gutterTotalWidth + "px";
    }

    node.style.width = width + "px";
  }

  if (widget.coverGutter) {
    node.style.zIndex = 5;
    node.style.position = "relative";

    if (!widget.noHScroll) {
      node.style.marginLeft = -dims.gutterTotalWidth + "px";
    }
  }
}

function widgetHeight(widget) {
  if (widget.height != null) {
    return widget.height;
  }

  var cm = widget.doc.cm;

  if (!cm) {
    return 0;
  }

  if (!contains(document.body, widget.node)) {
    var parentStyle = "position: relative;";

    if (widget.coverGutter) {
      parentStyle += "margin-left: -" + cm.display.gutters.offsetWidth + "px;";
    }

    if (widget.noHScroll) {
      parentStyle += "width: " + cm.display.wrapper.clientWidth + "px;";
    }

    removeChildrenAndAdd(cm.display.measure, elt("div", [widget.node], null, parentStyle));
  }

  return widget.height = widget.node.parentNode.offsetHeight;
} // Return true when the given mouse event happened in a widget


function eventInWidget(display, e) {
  for (var n = e_target(e); n != display.wrapper; n = n.parentNode) {
    if (!n || n.nodeType == 1 && n.getAttribute("cm-ignore-events") == "true" || n.parentNode == display.sizer && n != display.mover) {
      return true;
    }
  }
} // POSITION MEASUREMENT


function paddingTop(display) {
  return display.lineSpace.offsetTop;
}

function paddingVert(display) {
  return display.mover.offsetHeight - display.lineSpace.offsetHeight;
}

function paddingH(display) {
  if (display.cachedPaddingH) {
    return display.cachedPaddingH;
  }

  var e = removeChildrenAndAdd(display.measure, elt("pre", "x", "CodeMirror-line-like"));
  var style = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle;
  var data = {
    left: parseInt(style.paddingLeft),
    right: parseInt(style.paddingRight)
  };

  if (!isNaN(data.left) && !isNaN(data.right)) {
    display.cachedPaddingH = data;
  }

  return data;
}

function scrollGap(cm) {
  return scrollerGap - cm.display.nativeBarWidth;
}

function displayWidth(cm) {
  return cm.display.scroller.clientWidth - scrollGap(cm) - cm.display.barWidth;
}

function displayHeight(cm) {
  return cm.display.scroller.clientHeight - scrollGap(cm) - cm.display.barHeight;
} // Ensure the lineView.wrapping.heights array is populated. This is
// an array of bottom offsets for the lines that make up a drawn
// line. When lineWrapping is on, there might be more than one
// height.


function ensureLineHeights(cm, lineView, rect) {
  var wrapping = cm.options.lineWrapping;
  var curWidth = wrapping && displayWidth(cm);

  if (!lineView.measure.heights || wrapping && lineView.measure.width != curWidth) {
    var heights = lineView.measure.heights = [];

    if (wrapping) {
      lineView.measure.width = curWidth;
      var rects = lineView.text.firstChild.getClientRects();

      for (var i = 0; i < rects.length - 1; i++) {
        var cur = rects[i],
            next = rects[i + 1];

        if (Math.abs(cur.bottom - next.bottom) > 2) {
          heights.push((cur.bottom + next.top) / 2 - rect.top);
        }
      }
    }

    heights.push(rect.bottom - rect.top);
  }
} // Find a line map (mapping character offsets to text nodes) and a
// measurement cache for the given line number. (A line view might
// contain multiple lines when collapsed ranges are present.)


function mapFromLineView(lineView, line, lineN) {
  if (lineView.line == line) {
    return {
      map: lineView.measure.map,
      cache: lineView.measure.cache
    };
  }

  for (var i = 0; i < lineView.rest.length; i++) {
    if (lineView.rest[i] == line) {
      return {
        map: lineView.measure.maps[i],
        cache: lineView.measure.caches[i]
      };
    }
  }

  for (var i$1 = 0; i$1 < lineView.rest.length; i$1++) {
    if (lineNo(lineView.rest[i$1]) > lineN) {
      return {
        map: lineView.measure.maps[i$1],
        cache: lineView.measure.caches[i$1],
        before: true
      };
    }
  }
} // Render a line into the hidden node display.externalMeasured. Used
// when measurement is needed for a line that's not in the viewport.


function updateExternalMeasurement(cm, line) {
  line = visualLine(line);
  var lineN = lineNo(line);
  var view = cm.display.externalMeasured = new LineView(cm.doc, line, lineN);
  view.lineN = lineN;
  var built = view.built = buildLineContent(cm, view);
  view.text = built.pre;
  removeChildrenAndAdd(cm.display.lineMeasure, built.pre);
  return view;
} // Get a {top, bottom, left, right} box (in line-local coordinates)
// for a given character.


function measureChar(cm, line, ch, bias) {
  return measureCharPrepared(cm, prepareMeasureForLine(cm, line), ch, bias);
} // Find a line view that corresponds to the given line number.


function findViewForLine(cm, lineN) {
  if (lineN >= cm.display.viewFrom && lineN < cm.display.viewTo) {
    return cm.display.view[findViewIndex(cm, lineN)];
  }

  var ext = cm.display.externalMeasured;

  if (ext && lineN >= ext.lineN && lineN < ext.lineN + ext.size) {
    return ext;
  }
} // Measurement can be split in two steps, the set-up work that
// applies to the whole line, and the measurement of the actual
// character. Functions like coordsChar, that need to do a lot of
// measurements in a row, can thus ensure that the set-up work is
// only done once.


function prepareMeasureForLine(cm, line) {
  var lineN = lineNo(line);
  var view = findViewForLine(cm, lineN);

  if (view && !view.text) {
    view = null;
  } else if (view && view.changes) {
    updateLineForChanges(cm, view, lineN, getDimensions(cm));
    cm.curOp.forceUpdate = true;
  }

  if (!view) {
    view = updateExternalMeasurement(cm, line);
  }

  var info = mapFromLineView(view, line, lineN);
  return {
    line: line,
    view: view,
    rect: null,
    map: info.map,
    cache: info.cache,
    before: info.before,
    hasHeights: false
  };
} // Given a prepared measurement object, measures the position of an
// actual character (or fetches it from the cache).


function measureCharPrepared(cm, prepared, ch, bias, varHeight) {
  if (prepared.before) {
    ch = -1;
  }

  var key = ch + (bias || ""),
      found;

  if (prepared.cache.hasOwnProperty(key)) {
    found = prepared.cache[key];
  } else {
    if (!prepared.rect) {
      prepared.rect = prepared.view.text.getBoundingClientRect();
    }

    if (!prepared.hasHeights) {
      ensureLineHeights(cm, prepared.view, prepared.rect);
      prepared.hasHeights = true;
    }

    found = measureCharInner(cm, prepared, ch, bias);

    if (!found.bogus) {
      prepared.cache[key] = found;
    }
  }

  return {
    left: found.left,
    right: found.right,
    top: varHeight ? found.rtop : found.top,
    bottom: varHeight ? found.rbottom : found.bottom
  };
}

var nullRect = {
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};

function nodeAndOffsetInLineMap(map$$1, ch, bias) {
  var node, start, end, collapse, mStart, mEnd; // First, search the line map for the text node corresponding to,
  // or closest to, the target character.

  for (var i = 0; i < map$$1.length; i += 3) {
    mStart = map$$1[i];
    mEnd = map$$1[i + 1];

    if (ch < mStart) {
      start = 0;
      end = 1;
      collapse = "left";
    } else if (ch < mEnd) {
      start = ch - mStart;
      end = start + 1;
    } else if (i == map$$1.length - 3 || ch == mEnd && map$$1[i + 3] > ch) {
      end = mEnd - mStart;
      start = end - 1;

      if (ch >= mEnd) {
        collapse = "right";
      }
    }

    if (start != null) {
      node = map$$1[i + 2];

      if (mStart == mEnd && bias == (node.insertLeft ? "left" : "right")) {
        collapse = bias;
      }

      if (bias == "left" && start == 0) {
        while (i && map$$1[i - 2] == map$$1[i - 3] && map$$1[i - 1].insertLeft) {
          node = map$$1[(i -= 3) + 2];
          collapse = "left";
        }
      }

      if (bias == "right" && start == mEnd - mStart) {
        while (i < map$$1.length - 3 && map$$1[i + 3] == map$$1[i + 4] && !map$$1[i + 5].insertLeft) {
          node = map$$1[(i += 3) + 2];
          collapse = "right";
        }
      }

      break;
    }
  }

  return {
    node: node,
    start: start,
    end: end,
    collapse: collapse,
    coverStart: mStart,
    coverEnd: mEnd
  };
}

function getUsefulRect(rects, bias) {
  var rect = nullRect;

  if (bias == "left") {
    for (var i = 0; i < rects.length; i++) {
      if ((rect = rects[i]).left != rect.right) {
        break;
      }
    }
  } else {
    for (var i$1 = rects.length - 1; i$1 >= 0; i$1--) {
      if ((rect = rects[i$1]).left != rect.right) {
        break;
      }
    }
  }

  return rect;
}

function measureCharInner(cm, prepared, ch, bias) {
  var place = nodeAndOffsetInLineMap(prepared.map, ch, bias);
  var node = place.node,
      start = place.start,
      end = place.end,
      collapse = place.collapse;
  var rect;

  if (node.nodeType == 3) {
    // If it is a text node, use a range to retrieve the coordinates.
    for (var i$1 = 0; i$1 < 4; i$1++) {
      // Retry a maximum of 4 times when nonsense rectangles are returned
      while (start && isExtendingChar(prepared.line.text.charAt(place.coverStart + start))) {
        --start;
      }

      while (place.coverStart + end < place.coverEnd && isExtendingChar(prepared.line.text.charAt(place.coverStart + end))) {
        ++end;
      }

      if (ie && ie_version < 9 && start == 0 && end == place.coverEnd - place.coverStart) {
        rect = node.parentNode.getBoundingClientRect();
      } else {
        rect = getUsefulRect(range(node, start, end).getClientRects(), bias);
      }

      if (rect.left || rect.right || start == 0) {
        break;
      }

      end = start;
      start = start - 1;
      collapse = "right";
    }

    if (ie && ie_version < 11) {
      rect = maybeUpdateRectForZooming(cm.display.measure, rect);
    }
  } else {
    // If it is a widget, simply get the box for the whole widget.
    if (start > 0) {
      collapse = bias = "right";
    }

    var rects;

    if (cm.options.lineWrapping && (rects = node.getClientRects()).length > 1) {
      rect = rects[bias == "right" ? rects.length - 1 : 0];
    } else {
      rect = node.getBoundingClientRect();
    }
  }

  if (ie && ie_version < 9 && !start && (!rect || !rect.left && !rect.right)) {
    var rSpan = node.parentNode.getClientRects()[0];

    if (rSpan) {
      rect = {
        left: rSpan.left,
        right: rSpan.left + charWidth(cm.display),
        top: rSpan.top,
        bottom: rSpan.bottom
      };
    } else {
      rect = nullRect;
    }
  }

  var rtop = rect.top - prepared.rect.top,
      rbot = rect.bottom - prepared.rect.top;
  var mid = (rtop + rbot) / 2;
  var heights = prepared.view.measure.heights;
  var i = 0;

  for (; i < heights.length - 1; i++) {
    if (mid < heights[i]) {
      break;
    }
  }

  var top = i ? heights[i - 1] : 0,
      bot = heights[i];
  var result = {
    left: (collapse == "right" ? rect.right : rect.left) - prepared.rect.left,
    right: (collapse == "left" ? rect.left : rect.right) - prepared.rect.left,
    top: top,
    bottom: bot
  };

  if (!rect.left && !rect.right) {
    result.bogus = true;
  }

  if (!cm.options.singleCursorHeightPerLine) {
    result.rtop = rtop;
    result.rbottom = rbot;
  }

  return result;
} // Work around problem with bounding client rects on ranges being
// returned incorrectly when zoomed on IE10 and below.


function maybeUpdateRectForZooming(measure, rect) {
  if (!window.screen || screen.logicalXDPI == null || screen.logicalXDPI == screen.deviceXDPI || !hasBadZoomedRects(measure)) {
    return rect;
  }

  var scaleX = screen.logicalXDPI / screen.deviceXDPI;
  var scaleY = screen.logicalYDPI / screen.deviceYDPI;
  return {
    left: rect.left * scaleX,
    right: rect.right * scaleX,
    top: rect.top * scaleY,
    bottom: rect.bottom * scaleY
  };
}

function clearLineMeasurementCacheFor(lineView) {
  if (lineView.measure) {
    lineView.measure.cache = {};
    lineView.measure.heights = null;

    if (lineView.rest) {
      for (var i = 0; i < lineView.rest.length; i++) {
        lineView.measure.caches[i] = {};
      }
    }
  }
}

function clearLineMeasurementCache(cm) {
  cm.display.externalMeasure = null;
  removeChildren(cm.display.lineMeasure);

  for (var i = 0; i < cm.display.view.length; i++) {
    clearLineMeasurementCacheFor(cm.display.view[i]);
  }
}

function clearCaches(cm) {
  clearLineMeasurementCache(cm);
  cm.display.cachedCharWidth = cm.display.cachedTextHeight = cm.display.cachedPaddingH = null;

  if (!cm.options.lineWrapping) {
    cm.display.maxLineChanged = true;
  }

  cm.display.lineNumChars = null;
}

function pageScrollX() {
  // Work around https://bugs.chromium.org/p/chromium/issues/detail?id=489206
  // which causes page_Offset and bounding client rects to use
  // different reference viewports and invalidate our calculations.
  if (chrome && android) {
    return -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft));
  }

  return window.pageXOffset || (document.documentElement || document.body).scrollLeft;
}

function pageScrollY() {
  if (chrome && android) {
    return -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop));
  }

  return window.pageYOffset || (document.documentElement || document.body).scrollTop;
}

function widgetTopHeight(lineObj) {
  var height = 0;

  if (lineObj.widgets) {
    for (var i = 0; i < lineObj.widgets.length; ++i) {
      if (lineObj.widgets[i].above) {
        height += widgetHeight(lineObj.widgets[i]);
      }
    }
  }

  return height;
} // Converts a {top, bottom, left, right} box from line-local
// coordinates into another coordinate system. Context may be one of
// "line", "div" (display.lineDiv), "local"./null (src), "window",
// or "page".


function intoCoordSystem(cm, lineObj, rect, context, includeWidgets) {
  if (!includeWidgets) {
    var height = widgetTopHeight(lineObj);
    rect.top += height;
    rect.bottom += height;
  }

  if (context == "line") {
    return rect;
  }

  if (!context) {
    context = "local";
  }

  var yOff = _heightAtLine(lineObj);

  if (context == "local") {
    yOff += paddingTop(cm.display);
  } else {
    yOff -= cm.display.viewOffset;
  }

  if (context == "page" || context == "window") {
    var lOff = cm.display.lineSpace.getBoundingClientRect();
    yOff += lOff.top + (context == "window" ? 0 : pageScrollY());
    var xOff = lOff.left + (context == "window" ? 0 : pageScrollX());
    rect.left += xOff;
    rect.right += xOff;
  }

  rect.top += yOff;
  rect.bottom += yOff;
  return rect;
} // Coverts a box from "div" coords to another coordinate system.
// Context may be "window", "page", "div", or "local"./null.


function fromCoordSystem(cm, coords, context) {
  if (context == "div") {
    return coords;
  }

  var left = coords.left,
      top = coords.top; // First move into "page" coordinate system

  if (context == "page") {
    left -= pageScrollX();
    top -= pageScrollY();
  } else if (context == "local" || !context) {
    var localBox = cm.display.sizer.getBoundingClientRect();
    left += localBox.left;
    top += localBox.top;
  }

  var lineSpaceBox = cm.display.lineSpace.getBoundingClientRect();
  return {
    left: left - lineSpaceBox.left,
    top: top - lineSpaceBox.top
  };
}

function _charCoords(cm, pos, context, lineObj, bias) {
  if (!lineObj) {
    lineObj = getLine(cm.doc, pos.line);
  }

  return intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, bias), context);
} // Returns a box for a given cursor position, which may have an
// 'other' property containing the position of the secondary cursor
// on a bidi boundary.
// A cursor Pos(line, char, "before") is on the same visual line as `char - 1`
// and after `char - 1` in writing order of `char - 1`
// A cursor Pos(line, char, "after") is on the same visual line as `char`
// and before `char` in writing order of `char`
// Examples (upper-case letters are RTL, lower-case are LTR):
//     Pos(0, 1, ...)
//     before   after
// ab     a|b     a|b
// aB     a|B     aB|
// Ab     |Ab     A|b
// AB     B|A     B|A
// Every position after the last character on a line is considered to stick
// to the last character on the line.


function _cursorCoords(cm, pos, context, lineObj, preparedMeasure, varHeight) {
  lineObj = lineObj || getLine(cm.doc, pos.line);

  if (!preparedMeasure) {
    preparedMeasure = prepareMeasureForLine(cm, lineObj);
  }

  function get(ch, right) {
    var m = measureCharPrepared(cm, preparedMeasure, ch, right ? "right" : "left", varHeight);

    if (right) {
      m.left = m.right;
    } else {
      m.right = m.left;
    }

    return intoCoordSystem(cm, lineObj, m, context);
  }

  var order = getOrder(lineObj, cm.doc.direction),
      ch = pos.ch,
      sticky = pos.sticky;

  if (ch >= lineObj.text.length) {
    ch = lineObj.text.length;
    sticky = "before";
  } else if (ch <= 0) {
    ch = 0;
    sticky = "after";
  }

  if (!order) {
    return get(sticky == "before" ? ch - 1 : ch, sticky == "before");
  }

  function getBidi(ch, partPos, invert) {
    var part = order[partPos],
        right = part.level == 1;
    return get(invert ? ch - 1 : ch, right != invert);
  }

  var partPos = getBidiPartAt(order, ch, sticky);
  var other = bidiOther;
  var val = getBidi(ch, partPos, sticky == "before");

  if (other != null) {
    val.other = getBidi(ch, other, sticky != "before");
  }

  return val;
} // Used to cheaply estimate the coordinates for a position. Used for
// intermediate scroll updates.


function estimateCoords(cm, pos) {
  var left = 0;
  pos = _clipPos(cm.doc, pos);

  if (!cm.options.lineWrapping) {
    left = charWidth(cm.display) * pos.ch;
  }

  var lineObj = getLine(cm.doc, pos.line);
  var top = _heightAtLine(lineObj) + paddingTop(cm.display);
  return {
    left: left,
    right: left,
    top: top,
    bottom: top + lineObj.height
  };
} // Positions returned by coordsChar contain some extra information.
// xRel is the relative x position of the input coordinates compared
// to the found position (so xRel > 0 means the coordinates are to
// the right of the character position, for example). When outside
// is true, that means the coordinates lie outside the line's
// vertical range.


function PosWithInfo(line, ch, sticky, outside, xRel) {
  var pos = Pos(line, ch, sticky);
  pos.xRel = xRel;

  if (outside) {
    pos.outside = outside;
  }

  return pos;
} // Compute the character position closest to the given coordinates.
// Input must be lineSpace-local ("div" coordinate system).


function _coordsChar(cm, x, y) {
  var doc = cm.doc;
  y += cm.display.viewOffset;

  if (y < 0) {
    return PosWithInfo(doc.first, 0, null, -1, -1);
  }

  var lineN = _lineAtHeight(doc, y),
      last = doc.first + doc.size - 1;

  if (lineN > last) {
    return PosWithInfo(doc.first + doc.size - 1, getLine(doc, last).text.length, null, 1, 1);
  }

  if (x < 0) {
    x = 0;
  }

  var lineObj = getLine(doc, lineN);

  for (;;) {
    var found = coordsCharInner(cm, lineObj, lineN, x, y);
    var collapsed = collapsedSpanAround(lineObj, found.ch + (found.xRel > 0 || found.outside > 0 ? 1 : 0));

    if (!collapsed) {
      return found;
    }

    var rangeEnd = collapsed.find(1);

    if (rangeEnd.line == lineN) {
      return rangeEnd;
    }

    lineObj = getLine(doc, lineN = rangeEnd.line);
  }
}

function wrappedLineExtent(cm, lineObj, preparedMeasure, y) {
  y -= widgetTopHeight(lineObj);
  var end = lineObj.text.length;
  var begin = findFirst(function (ch) {
    return measureCharPrepared(cm, preparedMeasure, ch - 1).bottom <= y;
  }, end, 0);
  end = findFirst(function (ch) {
    return measureCharPrepared(cm, preparedMeasure, ch).top > y;
  }, begin, end);
  return {
    begin: begin,
    end: end
  };
}

function wrappedLineExtentChar(cm, lineObj, preparedMeasure, target) {
  if (!preparedMeasure) {
    preparedMeasure = prepareMeasureForLine(cm, lineObj);
  }

  var targetTop = intoCoordSystem(cm, lineObj, measureCharPrepared(cm, preparedMeasure, target), "line").top;
  return wrappedLineExtent(cm, lineObj, preparedMeasure, targetTop);
} // Returns true if the given side of a box is after the given
// coordinates, in top-to-bottom, left-to-right order.


function boxIsAfter(box, x, y, left) {
  return box.bottom <= y ? false : box.top > y ? true : (left ? box.left : box.right) > x;
}

function coordsCharInner(cm, lineObj, lineNo$$1, x, y) {
  // Move y into line-local coordinate space
  y -= _heightAtLine(lineObj);
  var preparedMeasure = prepareMeasureForLine(cm, lineObj); // When directly calling `measureCharPrepared`, we have to adjust
  // for the widgets at this line.

  var widgetHeight$$1 = widgetTopHeight(lineObj);
  var begin = 0,
      end = lineObj.text.length,
      ltr = true;
  var order = getOrder(lineObj, cm.doc.direction); // If the line isn't plain left-to-right text, first figure out
  // which bidi section the coordinates fall into.

  if (order) {
    var part = (cm.options.lineWrapping ? coordsBidiPartWrapped : coordsBidiPart)(cm, lineObj, lineNo$$1, preparedMeasure, order, x, y);
    ltr = part.level != 1; // The awkward -1 offsets are needed because findFirst (called
    // on these below) will treat its first bound as inclusive,
    // second as exclusive, but we want to actually address the
    // characters in the part's range

    begin = ltr ? part.from : part.to - 1;
    end = ltr ? part.to : part.from - 1;
  } // A binary search to find the first character whose bounding box
  // starts after the coordinates. If we run across any whose box wrap
  // the coordinates, store that.


  var chAround = null,
      boxAround = null;
  var ch = findFirst(function (ch) {
    var box = measureCharPrepared(cm, preparedMeasure, ch);
    box.top += widgetHeight$$1;
    box.bottom += widgetHeight$$1;

    if (!boxIsAfter(box, x, y, false)) {
      return false;
    }

    if (box.top <= y && box.left <= x) {
      chAround = ch;
      boxAround = box;
    }

    return true;
  }, begin, end);
  var baseX,
      sticky,
      outside = false; // If a box around the coordinates was found, use that

  if (boxAround) {
    // Distinguish coordinates nearer to the left or right side of the box
    var atLeft = x - boxAround.left < boxAround.right - x,
        atStart = atLeft == ltr;
    ch = chAround + (atStart ? 0 : 1);
    sticky = atStart ? "after" : "before";
    baseX = atLeft ? boxAround.left : boxAround.right;
  } else {
    // (Adjust for extended bound, if necessary.)
    if (!ltr && (ch == end || ch == begin)) {
      ch++;
    } // To determine which side to associate with, get the box to the
    // left of the character and compare it's vertical position to the
    // coordinates


    sticky = ch == 0 ? "after" : ch == lineObj.text.length ? "before" : measureCharPrepared(cm, preparedMeasure, ch - (ltr ? 1 : 0)).bottom + widgetHeight$$1 <= y == ltr ? "after" : "before"; // Now get accurate coordinates for this place, in order to get a
    // base X position

    var coords = _cursorCoords(cm, Pos(lineNo$$1, ch, sticky), "line", lineObj, preparedMeasure);

    baseX = coords.left;
    outside = y < coords.top ? -1 : y >= coords.bottom ? 1 : 0;
  }

  ch = skipExtendingChars(lineObj.text, ch, 1);
  return PosWithInfo(lineNo$$1, ch, sticky, outside, x - baseX);
}

function coordsBidiPart(cm, lineObj, lineNo$$1, preparedMeasure, order, x, y) {
  // Bidi parts are sorted left-to-right, and in a non-line-wrapping
  // situation, we can take this ordering to correspond to the visual
  // ordering. This finds the first part whose end is after the given
  // coordinates.
  var index = findFirst(function (i) {
    var part = order[i],
        ltr = part.level != 1;
    return boxIsAfter(_cursorCoords(cm, Pos(lineNo$$1, ltr ? part.to : part.from, ltr ? "before" : "after"), "line", lineObj, preparedMeasure), x, y, true);
  }, 0, order.length - 1);
  var part = order[index]; // If this isn't the first part, the part's start is also after
  // the coordinates, and the coordinates aren't on the same line as
  // that start, move one part back.

  if (index > 0) {
    var ltr = part.level != 1;

    var start = _cursorCoords(cm, Pos(lineNo$$1, ltr ? part.from : part.to, ltr ? "after" : "before"), "line", lineObj, preparedMeasure);

    if (boxIsAfter(start, x, y, true) && start.top > y) {
      part = order[index - 1];
    }
  }

  return part;
}

function coordsBidiPartWrapped(cm, lineObj, _lineNo, preparedMeasure, order, x, y) {
  // In a wrapped line, rtl text on wrapping boundaries can do things
  // that don't correspond to the ordering in our `order` array at
  // all, so a binary search doesn't work, and we want to return a
  // part that only spans one line so that the binary search in
  // coordsCharInner is safe. As such, we first find the extent of the
  // wrapped line, and then do a flat search in which we discard any
  // spans that aren't on the line.
  var ref = wrappedLineExtent(cm, lineObj, preparedMeasure, y);
  var begin = ref.begin;
  var end = ref.end;

  if (/\s/.test(lineObj.text.charAt(end - 1))) {
    end--;
  }

  var part = null,
      closestDist = null;

  for (var i = 0; i < order.length; i++) {
    var p = order[i];

    if (p.from >= end || p.to <= begin) {
      continue;
    }

    var ltr = p.level != 1;
    var endX = measureCharPrepared(cm, preparedMeasure, ltr ? Math.min(end, p.to) - 1 : Math.max(begin, p.from)).right; // Weigh against spans ending before this, so that they are only
    // picked if nothing ends after

    var dist = endX < x ? x - endX + 1e9 : endX - x;

    if (!part || closestDist > dist) {
      part = p;
      closestDist = dist;
    }
  }

  if (!part) {
    part = order[order.length - 1];
  } // Clip the part to the wrapped line.


  if (part.from < begin) {
    part = {
      from: begin,
      to: part.to,
      level: part.level
    };
  }

  if (part.to > end) {
    part = {
      from: part.from,
      to: end,
      level: part.level
    };
  }

  return part;
}

var measureText; // Compute the default text height.

function textHeight(display) {
  if (display.cachedTextHeight != null) {
    return display.cachedTextHeight;
  }

  if (measureText == null) {
    measureText = elt("pre", null, "CodeMirror-line-like"); // Measure a bunch of lines, for browsers that compute
    // fractional heights.

    for (var i = 0; i < 49; ++i) {
      measureText.appendChild(document.createTextNode("x"));
      measureText.appendChild(elt("br"));
    }

    measureText.appendChild(document.createTextNode("x"));
  }

  removeChildrenAndAdd(display.measure, measureText);
  var height = measureText.offsetHeight / 50;

  if (height > 3) {
    display.cachedTextHeight = height;
  }

  removeChildren(display.measure);
  return height || 1;
} // Compute the default character width.


function charWidth(display) {
  if (display.cachedCharWidth != null) {
    return display.cachedCharWidth;
  }

  var anchor = elt("span", "xxxxxxxxxx");
  var pre = elt("pre", [anchor], "CodeMirror-line-like");
  removeChildrenAndAdd(display.measure, pre);
  var rect = anchor.getBoundingClientRect(),
      width = (rect.right - rect.left) / 10;

  if (width > 2) {
    display.cachedCharWidth = width;
  }

  return width || 10;
} // Do a bulk-read of the DOM positions and sizes needed to draw the
// view, so that we don't interleave reading and writing to the DOM.


function getDimensions(cm) {
  var d = cm.display,
      left = {},
      width = {};
  var gutterLeft = d.gutters.clientLeft;

  for (var n = d.gutters.firstChild, i = 0; n; n = n.nextSibling, ++i) {
    var id = cm.display.gutterSpecs[i].className;
    left[id] = n.offsetLeft + n.clientLeft + gutterLeft;
    width[id] = n.clientWidth;
  }

  return {
    fixedPos: compensateForHScroll(d),
    gutterTotalWidth: d.gutters.offsetWidth,
    gutterLeft: left,
    gutterWidth: width,
    wrapperWidth: d.wrapper.clientWidth
  };
} // Computes display.scroller.scrollLeft + display.gutters.offsetWidth,
// but using getBoundingClientRect to get a sub-pixel-accurate
// result.


function compensateForHScroll(display) {
  return display.scroller.getBoundingClientRect().left - display.sizer.getBoundingClientRect().left;
} // Returns a function that estimates the height of a line, to use as
// first approximation until the line becomes visible (and is thus
// properly measurable).


function estimateHeight(cm) {
  var th = textHeight(cm.display),
      wrapping = cm.options.lineWrapping;
  var perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3);
  return function (line) {
    if (lineIsHidden(cm.doc, line)) {
      return 0;
    }

    var widgetsHeight = 0;

    if (line.widgets) {
      for (var i = 0; i < line.widgets.length; i++) {
        if (line.widgets[i].height) {
          widgetsHeight += line.widgets[i].height;
        }
      }
    }

    if (wrapping) {
      return widgetsHeight + (Math.ceil(line.text.length / perLine) || 1) * th;
    } else {
      return widgetsHeight + th;
    }
  };
}

function estimateLineHeights(cm) {
  var doc = cm.doc,
      est = estimateHeight(cm);
  doc.iter(function (line) {
    var estHeight = est(line);

    if (estHeight != line.height) {
      updateLineHeight(line, estHeight);
    }
  });
} // Given a mouse event, find the corresponding position. If liberal
// is false, it checks whether a gutter or scrollbar was clicked,
// and returns null if it was. forRect is used by rectangular
// selections, and tries to estimate a character position even for
// coordinates beyond the right of the text.


function posFromMouse(cm, e, liberal, forRect) {
  var display = cm.display;

  if (!liberal && e_target(e).getAttribute("cm-not-content") == "true") {
    return null;
  }

  var x,
      y,
      space = display.lineSpace.getBoundingClientRect(); // Fails unpredictably on IE[67] when mouse is dragged around quickly.

  try {
    x = e.clientX - space.left;
    y = e.clientY - space.top;
  } catch (e) {
    return null;
  }

  var coords = _coordsChar(cm, x, y),
      line;

  if (forRect && coords.xRel == 1 && (line = getLine(cm.doc, coords.line).text).length == coords.ch) {
    var colDiff = countColumn(line, line.length, cm.options.tabSize) - line.length;
    coords = Pos(coords.line, Math.max(0, Math.round((x - paddingH(cm.display).left) / charWidth(cm.display)) - colDiff));
  }

  return coords;
} // Find the view element corresponding to a given line. Return null
// when the line isn't visible.


function findViewIndex(cm, n) {
  if (n >= cm.display.viewTo) {
    return null;
  }

  n -= cm.display.viewFrom;

  if (n < 0) {
    return null;
  }

  var view = cm.display.view;

  for (var i = 0; i < view.length; i++) {
    n -= view[i].size;

    if (n < 0) {
      return i;
    }
  }
} // Updates the display.view data structure for a given change to the
// document. From and to are in pre-change coordinates. Lendiff is
// the amount of lines added or subtracted by the change. This is
// used for changes that span multiple lines, or change the way
// lines are divided into visual lines. regLineChange (below)
// registers single-line changes.


function regChange(cm, from, to, lendiff) {
  if (from == null) {
    from = cm.doc.first;
  }

  if (to == null) {
    to = cm.doc.first + cm.doc.size;
  }

  if (!lendiff) {
    lendiff = 0;
  }

  var display = cm.display;

  if (lendiff && to < display.viewTo && (display.updateLineNumbers == null || display.updateLineNumbers > from)) {
    display.updateLineNumbers = from;
  }

  cm.curOp.viewChanged = true;

  if (from >= display.viewTo) {
    // Change after
    if (sawCollapsedSpans && visualLineNo(cm.doc, from) < display.viewTo) {
      resetView(cm);
    }
  } else if (to <= display.viewFrom) {
    // Change before
    if (sawCollapsedSpans && visualLineEndNo(cm.doc, to + lendiff) > display.viewFrom) {
      resetView(cm);
    } else {
      display.viewFrom += lendiff;
      display.viewTo += lendiff;
    }
  } else if (from <= display.viewFrom && to >= display.viewTo) {
    // Full overlap
    resetView(cm);
  } else if (from <= display.viewFrom) {
    // Top overlap
    var cut = viewCuttingPoint(cm, to, to + lendiff, 1);

    if (cut) {
      display.view = display.view.slice(cut.index);
      display.viewFrom = cut.lineN;
      display.viewTo += lendiff;
    } else {
      resetView(cm);
    }
  } else if (to >= display.viewTo) {
    // Bottom overlap
    var cut$1 = viewCuttingPoint(cm, from, from, -1);

    if (cut$1) {
      display.view = display.view.slice(0, cut$1.index);
      display.viewTo = cut$1.lineN;
    } else {
      resetView(cm);
    }
  } else {
    // Gap in the middle
    var cutTop = viewCuttingPoint(cm, from, from, -1);
    var cutBot = viewCuttingPoint(cm, to, to + lendiff, 1);

    if (cutTop && cutBot) {
      display.view = display.view.slice(0, cutTop.index).concat(buildViewArray(cm, cutTop.lineN, cutBot.lineN)).concat(display.view.slice(cutBot.index));
      display.viewTo += lendiff;
    } else {
      resetView(cm);
    }
  }

  var ext = display.externalMeasured;

  if (ext) {
    if (to < ext.lineN) {
      ext.lineN += lendiff;
    } else if (from < ext.lineN + ext.size) {
      display.externalMeasured = null;
    }
  }
} // Register a change to a single line. Type must be one of "text",
// "gutter", "class", "widget"


function regLineChange(cm, line, type) {
  cm.curOp.viewChanged = true;
  var display = cm.display,
      ext = cm.display.externalMeasured;

  if (ext && line >= ext.lineN && line < ext.lineN + ext.size) {
    display.externalMeasured = null;
  }

  if (line < display.viewFrom || line >= display.viewTo) {
    return;
  }

  var lineView = display.view[findViewIndex(cm, line)];

  if (lineView.node == null) {
    return;
  }

  var arr = lineView.changes || (lineView.changes = []);

  if (indexOf(arr, type) == -1) {
    arr.push(type);
  }
} // Clear the view.


function resetView(cm) {
  cm.display.viewFrom = cm.display.viewTo = cm.doc.first;
  cm.display.view = [];
  cm.display.viewOffset = 0;
}

function viewCuttingPoint(cm, oldN, newN, dir) {
  var index = findViewIndex(cm, oldN),
      diff,
      view = cm.display.view;

  if (!sawCollapsedSpans || newN == cm.doc.first + cm.doc.size) {
    return {
      index: index,
      lineN: newN
    };
  }

  var n = cm.display.viewFrom;

  for (var i = 0; i < index; i++) {
    n += view[i].size;
  }

  if (n != oldN) {
    if (dir > 0) {
      if (index == view.length - 1) {
        return null;
      }

      diff = n + view[index].size - oldN;
      index++;
    } else {
      diff = n - oldN;
    }

    oldN += diff;
    newN += diff;
  }

  while (visualLineNo(cm.doc, newN) != newN) {
    if (index == (dir < 0 ? 0 : view.length - 1)) {
      return null;
    }

    newN += dir * view[index - (dir < 0 ? 1 : 0)].size;
    index += dir;
  }

  return {
    index: index,
    lineN: newN
  };
} // Force the view to cover a given range, adding empty view element
// or clipping off existing ones as needed.


function adjustView(cm, from, to) {
  var display = cm.display,
      view = display.view;

  if (view.length == 0 || from >= display.viewTo || to <= display.viewFrom) {
    display.view = buildViewArray(cm, from, to);
    display.viewFrom = from;
  } else {
    if (display.viewFrom > from) {
      display.view = buildViewArray(cm, from, display.viewFrom).concat(display.view);
    } else if (display.viewFrom < from) {
      display.view = display.view.slice(findViewIndex(cm, from));
    }

    display.viewFrom = from;

    if (display.viewTo < to) {
      display.view = display.view.concat(buildViewArray(cm, display.viewTo, to));
    } else if (display.viewTo > to) {
      display.view = display.view.slice(0, findViewIndex(cm, to));
    }
  }

  display.viewTo = to;
} // Count the number of lines in the view whose DOM representation is
// out of date (or nonexistent).


function countDirtyView(cm) {
  var view = cm.display.view,
      dirty = 0;

  for (var i = 0; i < view.length; i++) {
    var lineView = view[i];

    if (!lineView.hidden && (!lineView.node || lineView.changes)) {
      ++dirty;
    }
  }

  return dirty;
}

function updateSelection(cm) {
  cm.display.input.showSelection(cm.display.input.prepareSelection());
}

function prepareSelection(cm, primary) {
  if (primary === void 0) primary = true;
  var doc = cm.doc,
      result = {};
  var curFragment = result.cursors = document.createDocumentFragment();
  var selFragment = result.selection = document.createDocumentFragment();

  for (var i = 0; i < doc.sel.ranges.length; i++) {
    if (!primary && i == doc.sel.primIndex) {
      continue;
    }

    var range$$1 = doc.sel.ranges[i];

    if (range$$1.from().line >= cm.display.viewTo || range$$1.to().line < cm.display.viewFrom) {
      continue;
    }

    var collapsed = range$$1.empty();

    if (collapsed || cm.options.showCursorWhenSelecting) {
      drawSelectionCursor(cm, range$$1.head, curFragment);
    }

    if (!collapsed) {
      drawSelectionRange(cm, range$$1, selFragment);
    }
  }

  return result;
} // Draws a cursor for the given range


function drawSelectionCursor(cm, head, output) {
  var pos = _cursorCoords(cm, head, "div", null, null, !cm.options.singleCursorHeightPerLine);

  var cursor = output.appendChild(elt("div", "\xA0", "CodeMirror-cursor"));
  cursor.style.left = pos.left + "px";
  cursor.style.top = pos.top + "px";
  cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px";

  if (pos.other) {
    // Secondary cursor, shown when on a 'jump' in bi-directional text
    var otherCursor = output.appendChild(elt("div", "\xA0", "CodeMirror-cursor CodeMirror-secondarycursor"));
    otherCursor.style.display = "";
    otherCursor.style.left = pos.other.left + "px";
    otherCursor.style.top = pos.other.top + "px";
    otherCursor.style.height = (pos.other.bottom - pos.other.top) * .85 + "px";
  }
}

function cmpCoords(a, b) {
  return a.top - b.top || a.left - b.left;
} // Draws the given range as a highlighted selection


function drawSelectionRange(cm, range$$1, output) {
  var display = cm.display,
      doc = cm.doc;
  var fragment = document.createDocumentFragment();
  var padding = paddingH(cm.display),
      leftSide = padding.left;
  var rightSide = Math.max(display.sizerWidth, displayWidth(cm) - display.sizer.offsetLeft) - padding.right;
  var docLTR = doc.direction == "ltr";

  function add(left, top, width, bottom) {
    if (top < 0) {
      top = 0;
    }

    top = Math.round(top);
    bottom = Math.round(bottom);
    fragment.appendChild(elt("div", null, "CodeMirror-selected", "position: absolute; left: " + left + "px;\n                             top: " + top + "px; width: " + (width == null ? rightSide - left : width) + "px;\n                             height: " + (bottom - top) + "px"));
  }

  function drawForLine(line, fromArg, toArg) {
    var lineObj = getLine(doc, line);
    var lineLen = lineObj.text.length;
    var start, end;

    function coords(ch, bias) {
      return _charCoords(cm, Pos(line, ch), "div", lineObj, bias);
    }

    function wrapX(pos, dir, side) {
      var extent = wrappedLineExtentChar(cm, lineObj, null, pos);
      var prop = dir == "ltr" == (side == "after") ? "left" : "right";
      var ch = side == "after" ? extent.begin : extent.end - (/\s/.test(lineObj.text.charAt(extent.end - 1)) ? 2 : 1);
      return coords(ch, prop)[prop];
    }

    var order = getOrder(lineObj, doc.direction);
    iterateBidiSections(order, fromArg || 0, toArg == null ? lineLen : toArg, function (from, to, dir, i) {
      var ltr = dir == "ltr";
      var fromPos = coords(from, ltr ? "left" : "right");
      var toPos = coords(to - 1, ltr ? "right" : "left");
      var openStart = fromArg == null && from == 0,
          openEnd = toArg == null && to == lineLen;
      var first = i == 0,
          last = !order || i == order.length - 1;

      if (toPos.top - fromPos.top <= 3) {
        // Single line
        var openLeft = (docLTR ? openStart : openEnd) && first;
        var openRight = (docLTR ? openEnd : openStart) && last;
        var left = openLeft ? leftSide : (ltr ? fromPos : toPos).left;
        var right = openRight ? rightSide : (ltr ? toPos : fromPos).right;
        add(left, fromPos.top, right - left, fromPos.bottom);
      } else {
        // Multiple lines
        var topLeft, topRight, botLeft, botRight;

        if (ltr) {
          topLeft = docLTR && openStart && first ? leftSide : fromPos.left;
          topRight = docLTR ? rightSide : wrapX(from, dir, "before");
          botLeft = docLTR ? leftSide : wrapX(to, dir, "after");
          botRight = docLTR && openEnd && last ? rightSide : toPos.right;
        } else {
          topLeft = !docLTR ? leftSide : wrapX(from, dir, "before");
          topRight = !docLTR && openStart && first ? rightSide : fromPos.right;
          botLeft = !docLTR && openEnd && last ? leftSide : toPos.left;
          botRight = !docLTR ? rightSide : wrapX(to, dir, "after");
        }

        add(topLeft, fromPos.top, topRight - topLeft, fromPos.bottom);

        if (fromPos.bottom < toPos.top) {
          add(leftSide, fromPos.bottom, null, toPos.top);
        }

        add(botLeft, toPos.top, botRight - botLeft, toPos.bottom);
      }

      if (!start || cmpCoords(fromPos, start) < 0) {
        start = fromPos;
      }

      if (cmpCoords(toPos, start) < 0) {
        start = toPos;
      }

      if (!end || cmpCoords(fromPos, end) < 0) {
        end = fromPos;
      }

      if (cmpCoords(toPos, end) < 0) {
        end = toPos;
      }
    });
    return {
      start: start,
      end: end
    };
  }

  var sFrom = range$$1.from(),
      sTo = range$$1.to();

  if (sFrom.line == sTo.line) {
    drawForLine(sFrom.line, sFrom.ch, sTo.ch);
  } else {
    var fromLine = getLine(doc, sFrom.line),
        toLine = getLine(doc, sTo.line);
    var singleVLine = visualLine(fromLine) == visualLine(toLine);
    var leftEnd = drawForLine(sFrom.line, sFrom.ch, singleVLine ? fromLine.text.length + 1 : null).end;
    var rightStart = drawForLine(sTo.line, singleVLine ? 0 : null, sTo.ch).start;

    if (singleVLine) {
      if (leftEnd.top < rightStart.top - 2) {
        add(leftEnd.right, leftEnd.top, null, leftEnd.bottom);
        add(leftSide, rightStart.top, rightStart.left, rightStart.bottom);
      } else {
        add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom);
      }
    }

    if (leftEnd.bottom < rightStart.top) {
      add(leftSide, leftEnd.bottom, null, rightStart.top);
    }
  }

  output.appendChild(fragment);
} // Cursor-blinking


function restartBlink(cm) {
  if (!cm.state.focused) {
    return;
  }

  var display = cm.display;
  clearInterval(display.blinker);
  var on = true;
  display.cursorDiv.style.visibility = "";

  if (cm.options.cursorBlinkRate > 0) {
    display.blinker = setInterval(function () {
      return display.cursorDiv.style.visibility = (on = !on) ? "" : "hidden";
    }, cm.options.cursorBlinkRate);
  } else if (cm.options.cursorBlinkRate < 0) {
    display.cursorDiv.style.visibility = "hidden";
  }
}

function ensureFocus(cm) {
  if (!cm.state.focused) {
    cm.display.input.focus();
    onFocus(cm);
  }
}

function delayBlurEvent(cm) {
  cm.state.delayingBlurEvent = true;
  setTimeout(function () {
    if (cm.state.delayingBlurEvent) {
      cm.state.delayingBlurEvent = false;
      onBlur(cm);
    }
  }, 100);
}

function onFocus(cm, e) {
  if (cm.state.delayingBlurEvent) {
    cm.state.delayingBlurEvent = false;
  }

  if (cm.options.readOnly == "nocursor") {
    return;
  }

  if (!cm.state.focused) {
    signal(cm, "focus", cm, e);
    cm.state.focused = true;
    addClass(cm.display.wrapper, "CodeMirror-focused"); // This test prevents this from firing when a context
    // menu is closed (since the input reset would kill the
    // select-all detection hack)

    if (!cm.curOp && cm.display.selForContextMenu != cm.doc.sel) {
      cm.display.input.reset();

      if (webkit) {
        setTimeout(function () {
          return cm.display.input.reset(true);
        }, 20);
      } // Issue #1730

    }

    cm.display.input.receivedFocus();
  }

  restartBlink(cm);
}

function onBlur(cm, e) {
  if (cm.state.delayingBlurEvent) {
    return;
  }

  if (cm.state.focused) {
    signal(cm, "blur", cm, e);
    cm.state.focused = false;
    rmClass(cm.display.wrapper, "CodeMirror-focused");
  }

  clearInterval(cm.display.blinker);
  setTimeout(function () {
    if (!cm.state.focused) {
      cm.display.shift = false;
    }
  }, 150);
} // Read the actual heights of the rendered lines, and update their
// stored heights to match.


function updateHeightsInViewport(cm) {
  var display = cm.display;
  var prevBottom = display.lineDiv.offsetTop;

  for (var i = 0; i < display.view.length; i++) {
    var cur = display.view[i],
        wrapping = cm.options.lineWrapping;
    var height = void 0,
        width = 0;

    if (cur.hidden) {
      continue;
    }

    if (ie && ie_version < 8) {
      var bot = cur.node.offsetTop + cur.node.offsetHeight;
      height = bot - prevBottom;
      prevBottom = bot;
    } else {
      var box = cur.node.getBoundingClientRect();
      height = box.bottom - box.top; // Check that lines don't extend past the right of the current
      // src width

      if (!wrapping && cur.text.firstChild) {
        width = cur.text.firstChild.getBoundingClientRect().right - box.left - 1;
      }
    }

    var diff = cur.line.height - height;

    if (diff > .005 || diff < -.005) {
      updateLineHeight(cur.line, height);
      updateWidgetHeight(cur.line);

      if (cur.rest) {
        for (var j = 0; j < cur.rest.length; j++) {
          updateWidgetHeight(cur.rest[j]);
        }
      }
    }

    if (width > cm.display.sizerWidth) {
      var chWidth = Math.ceil(width / charWidth(cm.display));

      if (chWidth > cm.display.maxLineLength) {
        cm.display.maxLineLength = chWidth;
        cm.display.maxLine = cur.line;
        cm.display.maxLineChanged = true;
      }
    }
  }
} // Read and store the height of line widgets associated with the
// given line.


function updateWidgetHeight(line) {
  if (line.widgets) {
    for (var i = 0; i < line.widgets.length; ++i) {
      var w = line.widgets[i],
          parent = w.node.parentNode;

      if (parent) {
        w.height = parent.offsetHeight;
      }
    }
  }
} // Compute the lines that are visible in a given viewport (defaults
// the the current scroll position). viewport may contain top,
// height, and ensure (see op.scrollToPos) properties.


function visibleLines(display, doc, viewport) {
  var top = viewport && viewport.top != null ? Math.max(0, viewport.top) : display.scroller.scrollTop;
  top = Math.floor(top - paddingTop(display));
  var bottom = viewport && viewport.bottom != null ? viewport.bottom : top + display.wrapper.clientHeight;

  var from = _lineAtHeight(doc, top),
      to = _lineAtHeight(doc, bottom); // Ensure is a {from: {line, ch}, to: {line, ch}} object, and
  // forces those lines into the viewport (if possible).


  if (viewport && viewport.ensure) {
    var ensureFrom = viewport.ensure.from.line,
        ensureTo = viewport.ensure.to.line;

    if (ensureFrom < from) {
      from = ensureFrom;
      to = _lineAtHeight(doc, _heightAtLine(getLine(doc, ensureFrom)) + display.wrapper.clientHeight);
    } else if (Math.min(ensureTo, doc.lastLine()) >= to) {
      from = _lineAtHeight(doc, _heightAtLine(getLine(doc, ensureTo)) - display.wrapper.clientHeight);
      to = ensureTo;
    }
  }

  return {
    from: from,
    to: Math.max(to, from + 1)
  };
} // SCROLLING THINGS INTO VIEW
// If an src sits on the top or bottom of the window, partially
// scrolled out of view, this ensures that the cursor is visible.


function maybeScrollWindow(cm, rect) {
  if (signalDOMEvent(cm, "scrollCursorIntoView")) {
    return;
  }

  var display = cm.display,
      box = display.sizer.getBoundingClientRect(),
      doScroll = null;

  if (rect.top + box.top < 0) {
    doScroll = true;
  } else if (rect.bottom + box.top > (window.innerHeight || document.documentElement.clientHeight)) {
    doScroll = false;
  }

  if (doScroll != null && !phantom) {
    var scrollNode = elt("div", "\u200B", null, "position: absolute;\n                         top: " + (rect.top - display.viewOffset - paddingTop(cm.display)) + "px;\n                         height: " + (rect.bottom - rect.top + scrollGap(cm) + display.barHeight) + "px;\n                         left: " + rect.left + "px; width: " + Math.max(2, rect.right - rect.left) + "px;");
    cm.display.lineSpace.appendChild(scrollNode);
    scrollNode.scrollIntoView(doScroll);
    cm.display.lineSpace.removeChild(scrollNode);
  }
} // Scroll a given position into view (immediately), verifying that
// it actually became visible (as line heights are accurately
// measured, the position of something may 'drift' during drawing).


function scrollPosIntoView(cm, pos, end, margin) {
  if (margin == null) {
    margin = 0;
  }

  var rect;

  if (!cm.options.lineWrapping && pos == end) {
    // Set pos and end to the cursor positions around the character pos sticks to
    // If pos.sticky == "before", that is around pos.ch - 1, otherwise around pos.ch
    // If pos == Pos(_, 0, "before"), pos and end are unchanged
    pos = pos.ch ? Pos(pos.line, pos.sticky == "before" ? pos.ch - 1 : pos.ch, "after") : pos;
    end = pos.sticky == "before" ? Pos(pos.line, pos.ch + 1, "before") : pos;
  }

  for (var limit = 0; limit < 5; limit++) {
    var changed = false;

    var coords = _cursorCoords(cm, pos);

    var endCoords = !end || end == pos ? coords : _cursorCoords(cm, end);
    rect = {
      left: Math.min(coords.left, endCoords.left),
      top: Math.min(coords.top, endCoords.top) - margin,
      right: Math.max(coords.left, endCoords.left),
      bottom: Math.max(coords.bottom, endCoords.bottom) + margin
    };
    var scrollPos = calculateScrollPos(cm, rect);
    var startTop = cm.doc.scrollTop,
        startLeft = cm.doc.scrollLeft;

    if (scrollPos.scrollTop != null) {
      updateScrollTop(cm, scrollPos.scrollTop);

      if (Math.abs(cm.doc.scrollTop - startTop) > 1) {
        changed = true;
      }
    }

    if (scrollPos.scrollLeft != null) {
      setScrollLeft(cm, scrollPos.scrollLeft);

      if (Math.abs(cm.doc.scrollLeft - startLeft) > 1) {
        changed = true;
      }
    }

    if (!changed) {
      break;
    }
  }

  return rect;
} // Scroll a given set of coordinates into view (immediately).


function scrollIntoView(cm, rect) {
  var scrollPos = calculateScrollPos(cm, rect);

  if (scrollPos.scrollTop != null) {
    updateScrollTop(cm, scrollPos.scrollTop);
  }

  if (scrollPos.scrollLeft != null) {
    setScrollLeft(cm, scrollPos.scrollLeft);
  }
} // Calculate a new scroll position needed to scroll the given
// rectangle into view. Returns an object with scrollTop and
// scrollLeft properties. When these are undefined, the
// vertical/horizontal position does not need to be adjusted.


function calculateScrollPos(cm, rect) {
  var display = cm.display,
      snapMargin = textHeight(cm.display);

  if (rect.top < 0) {
    rect.top = 0;
  }

  var screentop = cm.curOp && cm.curOp.scrollTop != null ? cm.curOp.scrollTop : display.scroller.scrollTop;
  var screen = displayHeight(cm),
      result = {};

  if (rect.bottom - rect.top > screen) {
    rect.bottom = rect.top + screen;
  }

  var docBottom = cm.doc.height + paddingVert(display);
  var atTop = rect.top < snapMargin,
      atBottom = rect.bottom > docBottom - snapMargin;

  if (rect.top < screentop) {
    result.scrollTop = atTop ? 0 : rect.top;
  } else if (rect.bottom > screentop + screen) {
    var newTop = Math.min(rect.top, (atBottom ? docBottom : rect.bottom) - screen);

    if (newTop != screentop) {
      result.scrollTop = newTop;
    }
  }

  var screenleft = cm.curOp && cm.curOp.scrollLeft != null ? cm.curOp.scrollLeft : display.scroller.scrollLeft;
  var screenw = displayWidth(cm) - (cm.options.fixedGutter ? display.gutters.offsetWidth : 0);
  var tooWide = rect.right - rect.left > screenw;

  if (tooWide) {
    rect.right = rect.left + screenw;
  }

  if (rect.left < 10) {
    result.scrollLeft = 0;
  } else if (rect.left < screenleft) {
    result.scrollLeft = Math.max(0, rect.left - (tooWide ? 0 : 10));
  } else if (rect.right > screenw + screenleft - 3) {
    result.scrollLeft = rect.right + (tooWide ? 0 : 10) - screenw;
  }

  return result;
} // Store a relative adjustment to the scroll position in the current
// operation (to be applied when the operation finishes).


function addToScrollTop(cm, top) {
  if (top == null) {
    return;
  }

  resolveScrollToPos(cm);
  cm.curOp.scrollTop = (cm.curOp.scrollTop == null ? cm.doc.scrollTop : cm.curOp.scrollTop) + top;
} // Make sure that at the end of the operation the current cursor is
// shown.


function ensureCursorVisible(cm) {
  resolveScrollToPos(cm);
  var cur = cm.getCursor();
  cm.curOp.scrollToPos = {
    from: cur,
    to: cur,
    margin: cm.options.cursorScrollMargin
  };
}

function scrollToCoords(cm, x, y) {
  if (x != null || y != null) {
    resolveScrollToPos(cm);
  }

  if (x != null) {
    cm.curOp.scrollLeft = x;
  }

  if (y != null) {
    cm.curOp.scrollTop = y;
  }
}

function scrollToRange(cm, range$$1) {
  resolveScrollToPos(cm);
  cm.curOp.scrollToPos = range$$1;
} // When an operation has its scrollToPos property set, and another
// scroll action is applied before the end of the operation, this
// 'simulates' scrolling that position into view in a cheap way, so
// that the effect of intermediate scroll commands is not ignored.


function resolveScrollToPos(cm) {
  var range$$1 = cm.curOp.scrollToPos;

  if (range$$1) {
    cm.curOp.scrollToPos = null;
    var from = estimateCoords(cm, range$$1.from),
        to = estimateCoords(cm, range$$1.to);
    scrollToCoordsRange(cm, from, to, range$$1.margin);
  }
}

function scrollToCoordsRange(cm, from, to, margin) {
  var sPos = calculateScrollPos(cm, {
    left: Math.min(from.left, to.left),
    top: Math.min(from.top, to.top) - margin,
    right: Math.max(from.right, to.right),
    bottom: Math.max(from.bottom, to.bottom) + margin
  });
  scrollToCoords(cm, sPos.scrollLeft, sPos.scrollTop);
} // Sync the scrollable area and scrollbars, ensure the viewport
// covers the visible area.


function updateScrollTop(cm, val) {
  if (Math.abs(cm.doc.scrollTop - val) < 2) {
    return;
  }

  if (!gecko) {
    updateDisplaySimple(cm, {
      top: val
    });
  }

  setScrollTop(cm, val, true);

  if (gecko) {
    updateDisplaySimple(cm);
  }

  startWorker(cm, 100);
}

function setScrollTop(cm, val, forceScroll) {
  val = Math.min(cm.display.scroller.scrollHeight - cm.display.scroller.clientHeight, val);

  if (cm.display.scroller.scrollTop == val && !forceScroll) {
    return;
  }

  cm.doc.scrollTop = val;
  cm.display.scrollbars.setScrollTop(val);

  if (cm.display.scroller.scrollTop != val) {
    cm.display.scroller.scrollTop = val;
  }
} // Sync scroller and scrollbar, ensure the gutter elements are
// aligned.


function setScrollLeft(cm, val, isScroller, forceScroll) {
  val = Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth);

  if ((isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) && !forceScroll) {
    return;
  }

  cm.doc.scrollLeft = val;
  alignHorizontally(cm);

  if (cm.display.scroller.scrollLeft != val) {
    cm.display.scroller.scrollLeft = val;
  }

  cm.display.scrollbars.setScrollLeft(val);
} // SCROLLBARS
// Prepare DOM reads needed to update the scrollbars. Done in one
// shot to minimize update/measure roundtrips.


function measureForScrollbars(cm) {
  var d = cm.display,
      gutterW = d.gutters.offsetWidth;
  var docH = Math.round(cm.doc.height + paddingVert(cm.display));
  return {
    clientHeight: d.scroller.clientHeight,
    viewHeight: d.wrapper.clientHeight,
    scrollWidth: d.scroller.scrollWidth,
    clientWidth: d.scroller.clientWidth,
    viewWidth: d.wrapper.clientWidth,
    barLeft: cm.options.fixedGutter ? gutterW : 0,
    docHeight: docH,
    scrollHeight: docH + scrollGap(cm) + d.barHeight,
    nativeBarWidth: d.nativeBarWidth,
    gutterWidth: gutterW
  };
}

var NativeScrollbars = function NativeScrollbars(place, scroll, cm) {
  this.cm = cm;
  var vert = this.vert = elt("div", [elt("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar");
  var horiz = this.horiz = elt("div", [elt("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
  vert.tabIndex = horiz.tabIndex = -1;
  place(vert);
  place(horiz);
  on(vert, "scroll", function () {
    if (vert.clientHeight) {
      scroll(vert.scrollTop, "vertical");
    }
  });
  on(horiz, "scroll", function () {
    if (horiz.clientWidth) {
      scroll(horiz.scrollLeft, "horizontal");
    }
  });
  this.checkedZeroWidth = false; // Need to set a minimum width to see the scrollbar on IE7 (but must not set it on IE8).

  if (ie && ie_version < 8) {
    this.horiz.style.minHeight = this.vert.style.minWidth = "18px";
  }
};

NativeScrollbars.prototype.update = function (measure) {
  var needsH = measure.scrollWidth > measure.clientWidth + 1;
  var needsV = measure.scrollHeight > measure.clientHeight + 1;
  var sWidth = measure.nativeBarWidth;

  if (needsV) {
    this.vert.style.display = "block";
    this.vert.style.bottom = needsH ? sWidth + "px" : "0";
    var totalHeight = measure.viewHeight - (needsH ? sWidth : 0); // A bug in IE8 can cause this value to be negative, so guard it.

    this.vert.firstChild.style.height = Math.max(0, measure.scrollHeight - measure.clientHeight + totalHeight) + "px";
  } else {
    this.vert.style.display = "";
    this.vert.firstChild.style.height = "0";
  }

  if (needsH) {
    this.horiz.style.display = "block";
    this.horiz.style.right = needsV ? sWidth + "px" : "0";
    this.horiz.style.left = measure.barLeft + "px";
    var totalWidth = measure.viewWidth - measure.barLeft - (needsV ? sWidth : 0);
    this.horiz.firstChild.style.width = Math.max(0, measure.scrollWidth - measure.clientWidth + totalWidth) + "px";
  } else {
    this.horiz.style.display = "";
    this.horiz.firstChild.style.width = "0";
  }

  if (!this.checkedZeroWidth && measure.clientHeight > 0) {
    if (sWidth == 0) {
      this.zeroWidthHack();
    }

    this.checkedZeroWidth = true;
  }

  return {
    right: needsV ? sWidth : 0,
    bottom: needsH ? sWidth : 0
  };
};

NativeScrollbars.prototype.setScrollLeft = function (pos) {
  if (this.horiz.scrollLeft != pos) {
    this.horiz.scrollLeft = pos;
  }

  if (this.disableHoriz) {
    this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz");
  }
};

NativeScrollbars.prototype.setScrollTop = function (pos) {
  if (this.vert.scrollTop != pos) {
    this.vert.scrollTop = pos;
  }

  if (this.disableVert) {
    this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
  }
};

NativeScrollbars.prototype.zeroWidthHack = function () {
  var w = mac && !mac_geMountainLion ? "12px" : "18px";
  this.horiz.style.height = this.vert.style.width = w;
  this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none";
  this.disableHoriz = new Delayed();
  this.disableVert = new Delayed();
};

NativeScrollbars.prototype.enableZeroWidthBar = function (bar, delay, type) {
  bar.style.pointerEvents = "auto";

  function maybeDisable() {
    // To find out whether the scrollbar is still visible, we
    // check whether the element under the pixel in the bottom
    // right corner of the scrollbar box is the scrollbar box
    // itself (when the bar is still visible) or its filler child
    // (when the bar is hidden). If it is still visible, we keep
    // it enabled, if it's hidden, we disable pointer events.
    var box = bar.getBoundingClientRect();
    var elt$$1 = type == "vert" ? document.elementFromPoint(box.right - 1, (box.top + box.bottom) / 2) : document.elementFromPoint((box.right + box.left) / 2, box.bottom - 1);

    if (elt$$1 != bar) {
      bar.style.pointerEvents = "none";
    } else {
      delay.set(1000, maybeDisable);
    }
  }

  delay.set(1000, maybeDisable);
};

NativeScrollbars.prototype.clear = function () {
  var parent = this.horiz.parentNode;
  parent.removeChild(this.horiz);
  parent.removeChild(this.vert);
};

var NullScrollbars = function NullScrollbars() {};

NullScrollbars.prototype.update = function () {
  return {
    bottom: 0,
    right: 0
  };
};

NullScrollbars.prototype.setScrollLeft = function () {};

NullScrollbars.prototype.setScrollTop = function () {};

NullScrollbars.prototype.clear = function () {};

function updateScrollbars(cm, measure) {
  if (!measure) {
    measure = measureForScrollbars(cm);
  }

  var startWidth = cm.display.barWidth,
      startHeight = cm.display.barHeight;
  updateScrollbarsInner(cm, measure);

  for (var i = 0; i < 4 && startWidth != cm.display.barWidth || startHeight != cm.display.barHeight; i++) {
    if (startWidth != cm.display.barWidth && cm.options.lineWrapping) {
      updateHeightsInViewport(cm);
    }

    updateScrollbarsInner(cm, measureForScrollbars(cm));
    startWidth = cm.display.barWidth;
    startHeight = cm.display.barHeight;
  }
} // Re-synchronize the fake scrollbars with the actual size of the
// content.


function updateScrollbarsInner(cm, measure) {
  var d = cm.display;
  var sizes = d.scrollbars.update(measure);
  d.sizer.style.paddingRight = (d.barWidth = sizes.right) + "px";
  d.sizer.style.paddingBottom = (d.barHeight = sizes.bottom) + "px";
  d.heightForcer.style.borderBottom = sizes.bottom + "px solid transparent";

  if (sizes.right && sizes.bottom) {
    d.scrollbarFiller.style.display = "block";
    d.scrollbarFiller.style.height = sizes.bottom + "px";
    d.scrollbarFiller.style.width = sizes.right + "px";
  } else {
    d.scrollbarFiller.style.display = "";
  }

  if (sizes.bottom && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter) {
    d.gutterFiller.style.display = "block";
    d.gutterFiller.style.height = sizes.bottom + "px";
    d.gutterFiller.style.width = measure.gutterWidth + "px";
  } else {
    d.gutterFiller.style.display = "";
  }
}

var scrollbarModel = {
  "native": NativeScrollbars,
  "null": NullScrollbars
};

function initScrollbars(cm) {
  if (cm.display.scrollbars) {
    cm.display.scrollbars.clear();

    if (cm.display.scrollbars.addClass) {
      rmClass(cm.display.wrapper, cm.display.scrollbars.addClass);
    }
  }

  cm.display.scrollbars = new scrollbarModel[cm.options.scrollbarStyle](function (node) {
    cm.display.wrapper.insertBefore(node, cm.display.scrollbarFiller); // Prevent clicks in the scrollbars from killing focus

    on(node, "mousedown", function () {
      if (cm.state.focused) {
        setTimeout(function () {
          return cm.display.input.focus();
        }, 0);
      }
    });
    node.setAttribute("cm-not-content", "true");
  }, function (pos, axis) {
    if (axis == "horizontal") {
      setScrollLeft(cm, pos);
    } else {
      updateScrollTop(cm, pos);
    }
  }, cm);

  if (cm.display.scrollbars.addClass) {
    addClass(cm.display.wrapper, cm.display.scrollbars.addClass);
  }
} // Operations are used to wrap a series of changes to the src
// state in such a way that each change won't have to update the
// cursor and display (which would be awkward, slow, and
// error-prone). Instead, display updates are batched and then all
// combined and executed at once.


var nextOpId = 0; // Start a new operation.

function _startOperation(cm) {
  cm.curOp = {
    cm: cm,
    viewChanged: false,
    // Flag that indicates that lines might need to be redrawn
    startHeight: cm.doc.height,
    // Used to detect need to update scrollbar
    forceUpdate: false,
    // Used to force a redraw
    updateInput: 0,
    // Whether to reset the input textarea
    typing: false,
    // Whether this reset should be careful to leave existing text (for compositing)
    changeObjs: null,
    // Accumulated changes, for firing change events
    cursorActivityHandlers: null,
    // Set of handlers to fire cursorActivity on
    cursorActivityCalled: 0,
    // Tracks which cursorActivity handlers have been called already
    selectionChanged: false,
    // Whether the selection needs to be redrawn
    updateMaxLine: false,
    // Set when the widest line needs to be determined anew
    scrollLeft: null,
    scrollTop: null,
    // Intermediate scroll position, not pushed to DOM yet
    scrollToPos: null,
    // Used to scroll to a specific position
    focus: false,
    id: ++nextOpId // Unique ID

  };
  pushOperation(cm.curOp);
} // Finish an operation, updating the display and signalling delayed events


function _endOperation(cm) {
  var op = cm.curOp;

  if (op) {
    finishOperation(op, function (group) {
      for (var i = 0; i < group.ops.length; i++) {
        group.ops[i].cm.curOp = null;
      }

      endOperations(group);
    });
  }
} // The DOM updates done when an operation finishes are batched so
// that the minimum number of relayouts are required.


function endOperations(group) {
  var ops = group.ops;

  for (var i = 0; i < ops.length; i++) // Read DOM
  {
    endOperation_R1(ops[i]);
  }

  for (var i$1 = 0; i$1 < ops.length; i$1++) // Write DOM (maybe)
  {
    endOperation_W1(ops[i$1]);
  }

  for (var i$2 = 0; i$2 < ops.length; i$2++) // Read DOM
  {
    endOperation_R2(ops[i$2]);
  }

  for (var i$3 = 0; i$3 < ops.length; i$3++) // Write DOM (maybe)
  {
    endOperation_W2(ops[i$3]);
  }

  for (var i$4 = 0; i$4 < ops.length; i$4++) // Read DOM
  {
    endOperation_finish(ops[i$4]);
  }
}

function endOperation_R1(op) {
  var cm = op.cm,
      display = cm.display;
  maybeClipScrollbars(cm);

  if (op.updateMaxLine) {
    findMaxLine(cm);
  }

  op.mustUpdate = op.viewChanged || op.forceUpdate || op.scrollTop != null || op.scrollToPos && (op.scrollToPos.from.line < display.viewFrom || op.scrollToPos.to.line >= display.viewTo) || display.maxLineChanged && cm.options.lineWrapping;
  op.update = op.mustUpdate && new DisplayUpdate(cm, op.mustUpdate && {
    top: op.scrollTop,
    ensure: op.scrollToPos
  }, op.forceUpdate);
}

function endOperation_W1(op) {
  op.updatedDisplay = op.mustUpdate && updateDisplayIfNeeded(op.cm, op.update);
}

function endOperation_R2(op) {
  var cm = op.cm,
      display = cm.display;

  if (op.updatedDisplay) {
    updateHeightsInViewport(cm);
  }

  op.barMeasure = measureForScrollbars(cm); // If the max line changed since it was last measured, measure it,
  // and ensure the document's width matches it.
  // updateDisplay_W2 will use these properties to do the actual resizing

  if (display.maxLineChanged && !cm.options.lineWrapping) {
    op.adjustWidthTo = measureChar(cm, display.maxLine, display.maxLine.text.length).left + 3;
    cm.display.sizerWidth = op.adjustWidthTo;
    op.barMeasure.scrollWidth = Math.max(display.scroller.clientWidth, display.sizer.offsetLeft + op.adjustWidthTo + scrollGap(cm) + cm.display.barWidth);
    op.maxScrollLeft = Math.max(0, display.sizer.offsetLeft + op.adjustWidthTo - displayWidth(cm));
  }

  if (op.updatedDisplay || op.selectionChanged) {
    op.preparedSelection = display.input.prepareSelection();
  }
}

function endOperation_W2(op) {
  var cm = op.cm;

  if (op.adjustWidthTo != null) {
    cm.display.sizer.style.minWidth = op.adjustWidthTo + "px";

    if (op.maxScrollLeft < cm.doc.scrollLeft) {
      setScrollLeft(cm, Math.min(cm.display.scroller.scrollLeft, op.maxScrollLeft), true);
    }

    cm.display.maxLineChanged = false;
  }

  var takeFocus = op.focus && op.focus == activeElt();

  if (op.preparedSelection) {
    cm.display.input.showSelection(op.preparedSelection, takeFocus);
  }

  if (op.updatedDisplay || op.startHeight != cm.doc.height) {
    updateScrollbars(cm, op.barMeasure);
  }

  if (op.updatedDisplay) {
    setDocumentHeight(cm, op.barMeasure);
  }

  if (op.selectionChanged) {
    restartBlink(cm);
  }

  if (cm.state.focused && op.updateInput) {
    cm.display.input.reset(op.typing);
  }

  if (takeFocus) {
    ensureFocus(op.cm);
  }
}

function endOperation_finish(op) {
  var cm = op.cm,
      display = cm.display,
      doc = cm.doc;

  if (op.updatedDisplay) {
    postUpdateDisplay(cm, op.update);
  } // Abort mouse wheel delta measurement, when scrolling explicitly


  if (display.wheelStartX != null && (op.scrollTop != null || op.scrollLeft != null || op.scrollToPos)) {
    display.wheelStartX = display.wheelStartY = null;
  } // Propagate the scroll position to the actual DOM scroller


  if (op.scrollTop != null) {
    setScrollTop(cm, op.scrollTop, op.forceScroll);
  }

  if (op.scrollLeft != null) {
    setScrollLeft(cm, op.scrollLeft, true, true);
  } // If we need to scroll a specific position into view, do so.


  if (op.scrollToPos) {
    var rect = scrollPosIntoView(cm, _clipPos(doc, op.scrollToPos.from), _clipPos(doc, op.scrollToPos.to), op.scrollToPos.margin);
    maybeScrollWindow(cm, rect);
  } // Fire events for markers that are hidden/unidden by editing or
  // undoing


  var hidden = op.maybeHiddenMarkers,
      unhidden = op.maybeUnhiddenMarkers;

  if (hidden) {
    for (var i = 0; i < hidden.length; ++i) {
      if (!hidden[i].lines.length) {
        signal(hidden[i], "hide");
      }
    }
  }

  if (unhidden) {
    for (var i$1 = 0; i$1 < unhidden.length; ++i$1) {
      if (unhidden[i$1].lines.length) {
        signal(unhidden[i$1], "unhide");
      }
    }
  }

  if (display.wrapper.offsetHeight) {
    doc.scrollTop = cm.display.scroller.scrollTop;
  } // Fire change events, and delayed event handlers


  if (op.changeObjs) {
    signal(cm, "changes", cm, op.changeObjs);
  }

  if (op.update) {
    op.update.finish();
  }
} // Run the given function in an operation


function runInOp(cm, f) {
  if (cm.curOp) {
    return f();
  }

  _startOperation(cm);

  try {
    return f();
  } finally {
    _endOperation(cm);
  }
} // Wraps a function in an operation. Returns the wrapped function.


function operation(cm, f) {
  return function () {
    if (cm.curOp) {
      return f.apply(cm, arguments);
    }

    _startOperation(cm);

    try {
      return f.apply(cm, arguments);
    } finally {
      _endOperation(cm);
    }
  };
} // Used to add methods to src and docs instances, wrapping them in
// operations.


function methodOp(f) {
  return function () {
    if (this.curOp) {
      return f.apply(this, arguments);
    }

    _startOperation(this);

    try {
      return f.apply(this, arguments);
    } finally {
      _endOperation(this);
    }
  };
}

function docMethodOp(f) {
  return function () {
    var cm = this.cm;

    if (!cm || cm.curOp) {
      return f.apply(this, arguments);
    }

    _startOperation(cm);

    try {
      return f.apply(this, arguments);
    } finally {
      _endOperation(cm);
    }
  };
} // HIGHLIGHT WORKER


function startWorker(cm, time) {
  if (cm.doc.highlightFrontier < cm.display.viewTo) {
    cm.state.highlight.set(time, bind(highlightWorker, cm));
  }
}

function highlightWorker(cm) {
  var doc = cm.doc;

  if (doc.highlightFrontier >= cm.display.viewTo) {
    return;
  }

  var end = +new Date() + cm.options.workTime;
  var context = getContextBefore(cm, doc.highlightFrontier);
  var changedLines = [];
  doc.iter(context.line, Math.min(doc.first + doc.size, cm.display.viewTo + 500), function (line) {
    if (context.line >= cm.display.viewFrom) {
      // Visible
      var oldStyles = line.styles;
      var resetState = line.text.length > cm.options.maxHighlightLength ? copyState(doc.mode, context.state) : null;
      var highlighted = highlightLine(cm, line, context, true);

      if (resetState) {
        context.state = resetState;
      }

      line.styles = highlighted.styles;
      var oldCls = line.styleClasses,
          newCls = highlighted.classes;

      if (newCls) {
        line.styleClasses = newCls;
      } else if (oldCls) {
        line.styleClasses = null;
      }

      var ischange = !oldStyles || oldStyles.length != line.styles.length || oldCls != newCls && (!oldCls || !newCls || oldCls.bgClass != newCls.bgClass || oldCls.textClass != newCls.textClass);

      for (var i = 0; !ischange && i < oldStyles.length; ++i) {
        ischange = oldStyles[i] != line.styles[i];
      }

      if (ischange) {
        changedLines.push(context.line);
      }

      line.stateAfter = context.save();
      context.nextLine();
    } else {
      if (line.text.length <= cm.options.maxHighlightLength) {
        processLine(cm, line.text, context);
      }

      line.stateAfter = context.line % 5 == 0 ? context.save() : null;
      context.nextLine();
    }

    if (+new Date() > end) {
      startWorker(cm, cm.options.workDelay);
      return true;
    }
  });
  doc.highlightFrontier = context.line;
  doc.modeFrontier = Math.max(doc.modeFrontier, context.line);

  if (changedLines.length) {
    runInOp(cm, function () {
      for (var i = 0; i < changedLines.length; i++) {
        regLineChange(cm, changedLines[i], "text");
      }
    });
  }
} // DISPLAY DRAWING


var DisplayUpdate = function DisplayUpdate(cm, viewport, force) {
  var display = cm.display;
  this.viewport = viewport; // Store some values that we'll need later (but don't want to force a relayout for)

  this.visible = visibleLines(display, cm.doc, viewport);
  this.editorIsHidden = !display.wrapper.offsetWidth;
  this.wrapperHeight = display.wrapper.clientHeight;
  this.wrapperWidth = display.wrapper.clientWidth;
  this.oldDisplayWidth = displayWidth(cm);
  this.force = force;
  this.dims = getDimensions(cm);
  this.events = [];
};

DisplayUpdate.prototype.signal = function (emitter, type) {
  if (hasHandler(emitter, type)) {
    this.events.push(arguments);
  }
};

DisplayUpdate.prototype.finish = function () {
  var this$1 = this;

  for (var i = 0; i < this.events.length; i++) {
    signal.apply(null, this$1.events[i]);
  }
};

function maybeClipScrollbars(cm) {
  var display = cm.display;

  if (!display.scrollbarsClipped && display.scroller.offsetWidth) {
    display.nativeBarWidth = display.scroller.offsetWidth - display.scroller.clientWidth;
    display.heightForcer.style.height = scrollGap(cm) + "px";
    display.sizer.style.marginBottom = -display.nativeBarWidth + "px";
    display.sizer.style.borderRightWidth = scrollGap(cm) + "px";
    display.scrollbarsClipped = true;
  }
}

function selectionSnapshot(cm) {
  if (cm.hasFocus()) {
    return null;
  }

  var active = activeElt();

  if (!active || !contains(cm.display.lineDiv, active)) {
    return null;
  }

  var result = {
    activeElt: active
  };

  if (window.getSelection) {
    var sel = window.getSelection();

    if (sel.anchorNode && sel.extend && contains(cm.display.lineDiv, sel.anchorNode)) {
      result.anchorNode = sel.anchorNode;
      result.anchorOffset = sel.anchorOffset;
      result.focusNode = sel.focusNode;
      result.focusOffset = sel.focusOffset;
    }
  }

  return result;
}

function restoreSelection(snapshot) {
  if (!snapshot || !snapshot.activeElt || snapshot.activeElt == activeElt()) {
    return;
  }

  snapshot.activeElt.focus();

  if (snapshot.anchorNode && contains(document.body, snapshot.anchorNode) && contains(document.body, snapshot.focusNode)) {
    var sel = window.getSelection(),
        range$$1 = document.createRange();
    range$$1.setEnd(snapshot.anchorNode, snapshot.anchorOffset);
    range$$1.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range$$1);
    sel.extend(snapshot.focusNode, snapshot.focusOffset);
  }
} // Does the actual updating of the line display. Bails out
// (returning false) when there is nothing to be done and forced is
// false.


function updateDisplayIfNeeded(cm, update) {
  var display = cm.display,
      doc = cm.doc;

  if (update.editorIsHidden) {
    resetView(cm);
    return false;
  } // Bail out if the visible area is already rendered and nothing changed.


  if (!update.force && update.visible.from >= display.viewFrom && update.visible.to <= display.viewTo && (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo) && display.renderedView == display.view && countDirtyView(cm) == 0) {
    return false;
  }

  if (maybeUpdateLineNumberWidth(cm)) {
    resetView(cm);
    update.dims = getDimensions(cm);
  } // Compute a suitable new viewport (from & to)


  var end = doc.first + doc.size;
  var from = Math.max(update.visible.from - cm.options.viewportMargin, doc.first);
  var to = Math.min(end, update.visible.to + cm.options.viewportMargin);

  if (display.viewFrom < from && from - display.viewFrom < 20) {
    from = Math.max(doc.first, display.viewFrom);
  }

  if (display.viewTo > to && display.viewTo - to < 20) {
    to = Math.min(end, display.viewTo);
  }

  if (sawCollapsedSpans) {
    from = visualLineNo(cm.doc, from);
    to = visualLineEndNo(cm.doc, to);
  }

  var different = from != display.viewFrom || to != display.viewTo || display.lastWrapHeight != update.wrapperHeight || display.lastWrapWidth != update.wrapperWidth;
  adjustView(cm, from, to);
  display.viewOffset = _heightAtLine(getLine(cm.doc, display.viewFrom)); // Position the mover div to align with the current scroll position

  cm.display.mover.style.top = display.viewOffset + "px";
  var toUpdate = countDirtyView(cm);

  if (!different && toUpdate == 0 && !update.force && display.renderedView == display.view && (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo)) {
    return false;
  } // For big changes, we hide the enclosing element during the
  // update, since that speeds up the operations on most browsers.


  var selSnapshot = selectionSnapshot(cm);

  if (toUpdate > 4) {
    display.lineDiv.style.display = "none";
  }

  patchDisplay(cm, display.updateLineNumbers, update.dims);

  if (toUpdate > 4) {
    display.lineDiv.style.display = "";
  }

  display.renderedView = display.view; // There might have been a widget with a focused element that got
  // hidden or updated, if so re-focus it.

  restoreSelection(selSnapshot); // Prevent selection and cursors from interfering with the scroll
  // width and height.

  removeChildren(display.cursorDiv);
  removeChildren(display.selectionDiv);
  display.gutters.style.height = display.sizer.style.minHeight = 0;

  if (different) {
    display.lastWrapHeight = update.wrapperHeight;
    display.lastWrapWidth = update.wrapperWidth;
    startWorker(cm, 400);
  }

  display.updateLineNumbers = null;
  return true;
}

function postUpdateDisplay(cm, update) {
  var viewport = update.viewport;

  for (var first = true;; first = false) {
    if (!first || !cm.options.lineWrapping || update.oldDisplayWidth == displayWidth(cm)) {
      // Clip forced viewport to actual scrollable area.
      if (viewport && viewport.top != null) {
        viewport = {
          top: Math.min(cm.doc.height + paddingVert(cm.display) - displayHeight(cm), viewport.top)
        };
      } // Updated line heights might result in the drawn area not
      // actually covering the viewport. Keep looping until it does.


      update.visible = visibleLines(cm.display, cm.doc, viewport);

      if (update.visible.from >= cm.display.viewFrom && update.visible.to <= cm.display.viewTo) {
        break;
      }
    }

    if (!updateDisplayIfNeeded(cm, update)) {
      break;
    }

    updateHeightsInViewport(cm);
    var barMeasure = measureForScrollbars(cm);
    updateSelection(cm);
    updateScrollbars(cm, barMeasure);
    setDocumentHeight(cm, barMeasure);
    update.force = false;
  }

  update.signal(cm, "update", cm);

  if (cm.display.viewFrom != cm.display.reportedViewFrom || cm.display.viewTo != cm.display.reportedViewTo) {
    update.signal(cm, "viewportChange", cm, cm.display.viewFrom, cm.display.viewTo);
    cm.display.reportedViewFrom = cm.display.viewFrom;
    cm.display.reportedViewTo = cm.display.viewTo;
  }
}

function updateDisplaySimple(cm, viewport) {
  var update = new DisplayUpdate(cm, viewport);

  if (updateDisplayIfNeeded(cm, update)) {
    updateHeightsInViewport(cm);
    postUpdateDisplay(cm, update);
    var barMeasure = measureForScrollbars(cm);
    updateSelection(cm);
    updateScrollbars(cm, barMeasure);
    setDocumentHeight(cm, barMeasure);
    update.finish();
  }
} // Sync the actual display DOM structure with display.view, removing
// nodes for lines that are no longer in view, and creating the ones
// that are not there yet, and updating the ones that are out of
// date.


function patchDisplay(cm, updateNumbersFrom, dims) {
  var display = cm.display,
      lineNumbers = cm.options.lineNumbers;
  var container = display.lineDiv,
      cur = container.firstChild;

  function rm(node) {
    var next = node.nextSibling; // Works around a throw-scroll bug in OS X Webkit

    if (webkit && mac && cm.display.currentWheelTarget == node) {
      node.style.display = "none";
    } else {
      node.parentNode.removeChild(node);
    }

    return next;
  }

  var view = display.view,
      lineN = display.viewFrom; // Loop over the elements in the view, syncing cur (the DOM nodes
  // in display.lineDiv) with the view as we go.

  for (var i = 0; i < view.length; i++) {
    var lineView = view[i];
    if (lineView.hidden) ;else if (!lineView.node || lineView.node.parentNode != container) {
      // Not drawn yet
      var node = buildLineElement(cm, lineView, lineN, dims);
      container.insertBefore(node, cur);
    } else {
      // Already drawn
      while (cur != lineView.node) {
        cur = rm(cur);
      }

      var updateNumber = lineNumbers && updateNumbersFrom != null && updateNumbersFrom <= lineN && lineView.lineNumber;

      if (lineView.changes) {
        if (indexOf(lineView.changes, "gutter") > -1) {
          updateNumber = false;
        }

        updateLineForChanges(cm, lineView, lineN, dims);
      }

      if (updateNumber) {
        removeChildren(lineView.lineNumber);
        lineView.lineNumber.appendChild(document.createTextNode(lineNumberFor(cm.options, lineN)));
      }

      cur = lineView.node.nextSibling;
    }
    lineN += lineView.size;
  }

  while (cur) {
    cur = rm(cur);
  }
}

function updateGutterSpace(display) {
  var width = display.gutters.offsetWidth;
  display.sizer.style.marginLeft = width + "px";
}

function setDocumentHeight(cm, measure) {
  cm.display.sizer.style.minHeight = measure.docHeight + "px";
  cm.display.heightForcer.style.top = measure.docHeight + "px";
  cm.display.gutters.style.height = measure.docHeight + cm.display.barHeight + scrollGap(cm) + "px";
} // Re-align line numbers and gutter marks to compensate for
// horizontal scrolling.


function alignHorizontally(cm) {
  var display = cm.display,
      view = display.view;

  if (!display.alignWidgets && (!display.gutters.firstChild || !cm.options.fixedGutter)) {
    return;
  }

  var comp = compensateForHScroll(display) - display.scroller.scrollLeft + cm.doc.scrollLeft;
  var gutterW = display.gutters.offsetWidth,
      left = comp + "px";

  for (var i = 0; i < view.length; i++) {
    if (!view[i].hidden) {
      if (cm.options.fixedGutter) {
        if (view[i].gutter) {
          view[i].gutter.style.left = left;
        }

        if (view[i].gutterBackground) {
          view[i].gutterBackground.style.left = left;
        }
      }

      var align = view[i].alignable;

      if (align) {
        for (var j = 0; j < align.length; j++) {
          align[j].style.left = left;
        }
      }
    }
  }

  if (cm.options.fixedGutter) {
    display.gutters.style.left = comp + gutterW + "px";
  }
} // Used to ensure that the line number gutter is still the right
// size for the current document size. Returns true when an update
// is needed.


function maybeUpdateLineNumberWidth(cm) {
  if (!cm.options.lineNumbers) {
    return false;
  }

  var doc = cm.doc,
      last = lineNumberFor(cm.options, doc.first + doc.size - 1),
      display = cm.display;

  if (last.length != display.lineNumChars) {
    var test = display.measure.appendChild(elt("div", [elt("div", last)], "CodeMirror-linenumber CodeMirror-gutter-elt"));
    var innerW = test.firstChild.offsetWidth,
        padding = test.offsetWidth - innerW;
    display.lineGutter.style.width = "";
    display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding) + 1;
    display.lineNumWidth = display.lineNumInnerWidth + padding;
    display.lineNumChars = display.lineNumInnerWidth ? last.length : -1;
    display.lineGutter.style.width = display.lineNumWidth + "px";
    updateGutterSpace(cm.display);
    return true;
  }

  return false;
}

function getGutters(gutters, lineNumbers) {
  var result = [],
      sawLineNumbers = false;

  for (var i = 0; i < gutters.length; i++) {
    var name = gutters[i],
        style = null;

    if (typeof name != "string") {
      style = name.style;
      name = name.className;
    }

    if (name == "CodeMirror-linenumbers") {
      if (!lineNumbers) {
        continue;
      } else {
        sawLineNumbers = true;
      }
    }

    result.push({
      className: name,
      style: style
    });
  }

  if (lineNumbers && !sawLineNumbers) {
    result.push({
      className: "CodeMirror-linenumbers",
      style: null
    });
  }

  return result;
} // Rebuild the gutter elements, ensure the margin to the left of the
// code matches their width.


function renderGutters(display) {
  var gutters = display.gutters,
      specs = display.gutterSpecs;
  removeChildren(gutters);
  display.lineGutter = null;

  for (var i = 0; i < specs.length; ++i) {
    var ref = specs[i];
    var className = ref.className;
    var style = ref.style;
    var gElt = gutters.appendChild(elt("div", null, "CodeMirror-gutter " + className));

    if (style) {
      gElt.style.cssText = style;
    }

    if (className == "CodeMirror-linenumbers") {
      display.lineGutter = gElt;
      gElt.style.width = (display.lineNumWidth || 1) + "px";
    }
  }

  gutters.style.display = specs.length ? "" : "none";
  updateGutterSpace(display);
}

function updateGutters(cm) {
  renderGutters(cm.display);
  regChange(cm);
  alignHorizontally(cm);
} // The display handles the DOM integration, both for input reading
// and content drawing. It holds references to DOM nodes and
// display-related state.


function Display(place, doc, input, options) {
  var d = this;
  this.input = input; // Covers bottom-right square when both scrollbars are present.

  d.scrollbarFiller = elt("div", null, "CodeMirror-scrollbar-filler");
  d.scrollbarFiller.setAttribute("cm-not-content", "true"); // Covers bottom of gutter when coverGutterNextToScrollbar is on
  // and h scrollbar is present.

  d.gutterFiller = elt("div", null, "CodeMirror-gutter-filler");
  d.gutterFiller.setAttribute("cm-not-content", "true"); // Will contain the actual code, positioned to cover the viewport.

  d.lineDiv = eltP("div", null, "CodeMirror-code"); // Elements are added to these to represent selection and cursors.

  d.selectionDiv = elt("div", null, null, "position: relative; z-index: 1");
  d.cursorDiv = elt("div", null, "CodeMirror-cursors"); // A visibility: hidden element used to find the size of things.

  d.measure = elt("div", null, "CodeMirror-measure"); // When lines outside of the viewport are measured, they are drawn in this.

  d.lineMeasure = elt("div", null, "CodeMirror-measure"); // Wraps everything that needs to exist inside the vertically-padded coordinate system

  d.lineSpace = eltP("div", [d.measure, d.lineMeasure, d.selectionDiv, d.cursorDiv, d.lineDiv], null, "position: relative; outline: none");
  var lines = eltP("div", [d.lineSpace], "CodeMirror-lines"); // Moved around its parent to cover visible view.

  d.mover = elt("div", [lines], null, "position: relative"); // Set to the height of the document, allowing scrolling.

  d.sizer = elt("div", [d.mover], "CodeMirror-sizer");
  d.sizerWidth = null; // Behavior of elts with overflow: auto and padding is
  // inconsistent across browsers. This is used to ensure the
  // scrollable area is big enough.

  d.heightForcer = elt("div", null, null, "position: absolute; height: " + scrollerGap + "px; width: 1px;"); // Will contain the gutters, if any.

  d.gutters = elt("div", null, "CodeMirror-gutters");
  d.lineGutter = null; // Actual scrollable element.

  d.scroller = elt("div", [d.sizer, d.heightForcer, d.gutters], "CodeMirror-scroll");
  d.scroller.setAttribute("tabIndex", "-1"); // The element in which the src lives.

  d.wrapper = elt("div", [d.scrollbarFiller, d.gutterFiller, d.scroller], "CodeMirror"); // Work around IE7 z-index bug (not perfect, hence IE7 not really being supported)

  if (ie && ie_version < 8) {
    d.gutters.style.zIndex = -1;
    d.scroller.style.paddingRight = 0;
  }

  if (!webkit && !(gecko && mobile)) {
    d.scroller.draggable = true;
  }

  if (place) {
    if (place.appendChild) {
      place.appendChild(d.wrapper);
    } else {
      place(d.wrapper);
    }
  } // Current rendered range (may be bigger than the view window).


  d.viewFrom = d.viewTo = doc.first;
  d.reportedViewFrom = d.reportedViewTo = doc.first; // Information about the rendered lines.

  d.view = [];
  d.renderedView = null; // Holds info about a single rendered line when it was rendered
  // for measurement, while not in view.

  d.externalMeasured = null; // Empty space (in pixels) above the view

  d.viewOffset = 0;
  d.lastWrapHeight = d.lastWrapWidth = 0;
  d.updateLineNumbers = null;
  d.nativeBarWidth = d.barHeight = d.barWidth = 0;
  d.scrollbarsClipped = false; // Used to only resize the line number gutter when necessary (when
  // the amount of lines crosses a boundary that makes its width change)

  d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null; // Set to true when a non-horizontal-scrolling line widget is
  // added. As an optimization, line widget aligning is skipped when
  // this is false.

  d.alignWidgets = false;
  d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null; // Tracks the maximum line length so that the horizontal scrollbar
  // can be kept static when scrolling.

  d.maxLine = null;
  d.maxLineLength = 0;
  d.maxLineChanged = false; // Used for measuring wheel scrolling granularity

  d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null; // True when shift is held down.

  d.shift = false; // Used to track whether anything happened since the context menu
  // was opened.

  d.selForContextMenu = null;
  d.activeTouch = null;
  d.gutterSpecs = getGutters(options.gutters, options.lineNumbers);
  renderGutters(d);
  input.init(d);
} // Since the delta values reported on mouse wheel events are
// unstandardized between browsers and even browser versions, and
// generally horribly unpredictable, this code starts by measuring
// the scroll effect that the first few mouse wheel events have,
// and, from that, detects the way it can convert deltas to pixel
// offsets afterwards.
//
// The reason we want to know the amount a wheel event will scroll
// is that it gives us a chance to update the display before the
// actual scrolling happens, reducing flickering.


var wheelSamples = 0,
    wheelPixelsPerUnit = null; // Fill in a browser-detected starting value on browsers where we
// know one. These don't have to be accurate -- the result of them
// being wrong would just be a slight flicker on the first wheel
// scroll (if it is large enough).

if (ie) {
  wheelPixelsPerUnit = -.53;
} else if (gecko) {
  wheelPixelsPerUnit = 15;
} else if (chrome) {
  wheelPixelsPerUnit = -.7;
} else if (safari) {
  wheelPixelsPerUnit = -1 / 3;
}

function wheelEventDelta(e) {
  var dx = e.wheelDeltaX,
      dy = e.wheelDeltaY;

  if (dx == null && e.detail && e.axis == e.HORIZONTAL_AXIS) {
    dx = e.detail;
  }

  if (dy == null && e.detail && e.axis == e.VERTICAL_AXIS) {
    dy = e.detail;
  } else if (dy == null) {
    dy = e.wheelDelta;
  }

  return {
    x: dx,
    y: dy
  };
}

function wheelEventPixels(e) {
  var delta = wheelEventDelta(e);
  delta.x *= wheelPixelsPerUnit;
  delta.y *= wheelPixelsPerUnit;
  return delta;
}

function onScrollWheel(cm, e) {
  var delta = wheelEventDelta(e),
      dx = delta.x,
      dy = delta.y;
  var display = cm.display,
      scroll = display.scroller; // Quit if there's nothing to scroll here

  var canScrollX = scroll.scrollWidth > scroll.clientWidth;
  var canScrollY = scroll.scrollHeight > scroll.clientHeight;

  if (!(dx && canScrollX || dy && canScrollY)) {
    return;
  } // Webkit browsers on OS X abort momentum scrolls when the target
  // of the scroll event is removed from the scrollable element.
  // This hack (see related code in patchDisplay) makes sure the
  // element is kept around.


  if (dy && mac && webkit) {
    outer: for (var cur = e.target, view = display.view; cur != scroll; cur = cur.parentNode) {
      for (var i = 0; i < view.length; i++) {
        if (view[i].node == cur) {
          cm.display.currentWheelTarget = cur;
          break outer;
        }
      }
    }
  } // On some browsers, horizontal scrolling will cause redraws to
  // happen before the gutter has been realigned, causing it to
  // wriggle around in a most unseemly way. When we have an
  // estimated pixels/delta value, we just handle horizontal
  // scrolling entirely here. It'll be slightly off from native, but
  // better than glitching out.


  if (dx && !gecko && !presto && wheelPixelsPerUnit != null) {
    if (dy && canScrollY) {
      updateScrollTop(cm, Math.max(0, scroll.scrollTop + dy * wheelPixelsPerUnit));
    }

    setScrollLeft(cm, Math.max(0, scroll.scrollLeft + dx * wheelPixelsPerUnit)); // Only prevent default scrolling if vertical scrolling is
    // actually possible. Otherwise, it causes vertical scroll
    // jitter on OSX trackpads when deltaX is small and deltaY
    // is large (issue #3579)

    if (!dy || dy && canScrollY) {
      e_preventDefault(e);
    }

    display.wheelStartX = null; // Abort measurement, if in progress

    return;
  } // 'Project' the visible viewport to cover the area that is being
  // scrolled into view (if we know enough to estimate it).


  if (dy && wheelPixelsPerUnit != null) {
    var pixels = dy * wheelPixelsPerUnit;
    var top = cm.doc.scrollTop,
        bot = top + display.wrapper.clientHeight;

    if (pixels < 0) {
      top = Math.max(0, top + pixels - 50);
    } else {
      bot = Math.min(cm.doc.height, bot + pixels + 50);
    }

    updateDisplaySimple(cm, {
      top: top,
      bottom: bot
    });
  }

  if (wheelSamples < 20) {
    if (display.wheelStartX == null) {
      display.wheelStartX = scroll.scrollLeft;
      display.wheelStartY = scroll.scrollTop;
      display.wheelDX = dx;
      display.wheelDY = dy;
      setTimeout(function () {
        if (display.wheelStartX == null) {
          return;
        }

        var movedX = scroll.scrollLeft - display.wheelStartX;
        var movedY = scroll.scrollTop - display.wheelStartY;
        var sample = movedY && display.wheelDY && movedY / display.wheelDY || movedX && display.wheelDX && movedX / display.wheelDX;
        display.wheelStartX = display.wheelStartY = null;

        if (!sample) {
          return;
        }

        wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1);
        ++wheelSamples;
      }, 200);
    } else {
      display.wheelDX += dx;
      display.wheelDY += dy;
    }
  }
} // Selection objects are immutable. A new one is created every time
// the selection changes. A selection is one or more non-overlapping
// (and non-touching) ranges, sorted, and an integer that indicates
// which one is the primary selection (the one that's scrolled into
// view, that getCursor returns, etc).


var Selection = function Selection(ranges, primIndex) {
  this.ranges = ranges;
  this.primIndex = primIndex;
};

Selection.prototype.primary = function () {
  return this.ranges[this.primIndex];
};

Selection.prototype.equals = function (other) {
  var this$1 = this;

  if (other == this) {
    return true;
  }

  if (other.primIndex != this.primIndex || other.ranges.length != this.ranges.length) {
    return false;
  }

  for (var i = 0; i < this.ranges.length; i++) {
    var here = this$1.ranges[i],
        there = other.ranges[i];

    if (!equalCursorPos(here.anchor, there.anchor) || !equalCursorPos(here.head, there.head)) {
      return false;
    }
  }

  return true;
};

Selection.prototype.deepCopy = function () {
  var this$1 = this;
  var out = [];

  for (var i = 0; i < this.ranges.length; i++) {
    out[i] = new Range(copyPos(this$1.ranges[i].anchor), copyPos(this$1.ranges[i].head));
  }

  return new Selection(out, this.primIndex);
};

Selection.prototype.somethingSelected = function () {
  var this$1 = this;

  for (var i = 0; i < this.ranges.length; i++) {
    if (!this$1.ranges[i].empty()) {
      return true;
    }
  }

  return false;
};

Selection.prototype.contains = function (pos, end) {
  var this$1 = this;

  if (!end) {
    end = pos;
  }

  for (var i = 0; i < this.ranges.length; i++) {
    var range = this$1.ranges[i];

    if (cmp(end, range.from()) >= 0 && cmp(pos, range.to()) <= 0) {
      return i;
    }
  }

  return -1;
};

var Range = function Range(anchor, head) {
  this.anchor = anchor;
  this.head = head;
};

Range.prototype.from = function () {
  return minPos(this.anchor, this.head);
};

Range.prototype.to = function () {
  return maxPos(this.anchor, this.head);
};

Range.prototype.empty = function () {
  return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
}; // Take an unsorted, potentially overlapping set of ranges, and
// build a selection out of it. 'Consumes' ranges array (modifying
// it).


function normalizeSelection(cm, ranges, primIndex) {
  var mayTouch = cm && cm.options.selectionsMayTouch;
  var prim = ranges[primIndex];
  ranges.sort(function (a, b) {
    return cmp(a.from(), b.from());
  });
  primIndex = indexOf(ranges, prim);

  for (var i = 1; i < ranges.length; i++) {
    var cur = ranges[i],
        prev = ranges[i - 1];
    var diff = cmp(prev.to(), cur.from());

    if (mayTouch && !cur.empty() ? diff > 0 : diff >= 0) {
      var from = minPos(prev.from(), cur.from()),
          to = maxPos(prev.to(), cur.to());
      var inv = prev.empty() ? cur.from() == cur.head : prev.from() == prev.head;

      if (i <= primIndex) {
        --primIndex;
      }

      ranges.splice(--i, 2, new Range(inv ? to : from, inv ? from : to));
    }
  }

  return new Selection(ranges, primIndex);
}

function simpleSelection(anchor, head) {
  return new Selection([new Range(anchor, head || anchor)], 0);
} // Compute the position of the end of a change (its 'to' property
// refers to the pre-change end).


function changeEnd(change) {
  if (!change.text) {
    return change.to;
  }

  return Pos(change.from.line + change.text.length - 1, lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0));
} // Adjust a position to refer to the post-change position of the
// same text, or the end of the change if the change covers it.


function adjustForChange(pos, change) {
  if (cmp(pos, change.from) < 0) {
    return pos;
  }

  if (cmp(pos, change.to) <= 0) {
    return changeEnd(change);
  }

  var line = pos.line + change.text.length - (change.to.line - change.from.line) - 1,
      ch = pos.ch;

  if (pos.line == change.to.line) {
    ch += changeEnd(change).ch - change.to.ch;
  }

  return Pos(line, ch);
}

function computeSelAfterChange(doc, change) {
  var out = [];

  for (var i = 0; i < doc.sel.ranges.length; i++) {
    var range = doc.sel.ranges[i];
    out.push(new Range(adjustForChange(range.anchor, change), adjustForChange(range.head, change)));
  }

  return normalizeSelection(doc.cm, out, doc.sel.primIndex);
}

function offsetPos(pos, old, nw) {
  if (pos.line == old.line) {
    return Pos(nw.line, pos.ch - old.ch + nw.ch);
  } else {
    return Pos(nw.line + (pos.line - old.line), pos.ch);
  }
} // Used by replaceSelections to allow moving the selection to the
// start or around the replaced test. Hint may be "start" or "around".


function computeReplacedSel(doc, changes, hint) {
  var out = [];
  var oldPrev = Pos(doc.first, 0),
      newPrev = oldPrev;

  for (var i = 0; i < changes.length; i++) {
    var change = changes[i];
    var from = offsetPos(change.from, oldPrev, newPrev);
    var to = offsetPos(changeEnd(change), oldPrev, newPrev);
    oldPrev = change.to;
    newPrev = to;

    if (hint == "around") {
      var range = doc.sel.ranges[i],
          inv = cmp(range.head, range.anchor) < 0;
      out[i] = new Range(inv ? to : from, inv ? from : to);
    } else {
      out[i] = new Range(from, from);
    }
  }

  return new Selection(out, doc.sel.primIndex);
} // Used to get the src into a consistent state again when options change.


function loadMode(cm) {
  cm.doc.mode = getMode(cm.options, cm.doc.modeOption);
  resetModeState(cm);
}

function resetModeState(cm) {
  cm.doc.iter(function (line) {
    if (line.stateAfter) {
      line.stateAfter = null;
    }

    if (line.styles) {
      line.styles = null;
    }
  });
  cm.doc.modeFrontier = cm.doc.highlightFrontier = cm.doc.first;
  startWorker(cm, 100);
  cm.state.modeGen++;

  if (cm.curOp) {
    regChange(cm);
  }
} // DOCUMENT DATA STRUCTURE
// By default, updates that start and end at the beginning of a line
// are treated specially, in order to make the association of line
// widgets and marker elements with the text behave more intuitive.


function isWholeLineUpdate(doc, change) {
  return change.from.ch == 0 && change.to.ch == 0 && lst(change.text) == "" && (!doc.cm || doc.cm.options.wholeLineUpdateBefore);
} // Perform a change on the document data structure.


function updateDoc(doc, change, markedSpans, estimateHeight$$1) {
  function spansFor(n) {
    return markedSpans ? markedSpans[n] : null;
  }

  function update(line, text, spans) {
    updateLine(line, text, spans, estimateHeight$$1);
    signalLater(line, "change", line, change);
  }

  function linesFor(start, end) {
    var result = [];

    for (var i = start; i < end; ++i) {
      result.push(new Line(text[i], spansFor(i), estimateHeight$$1));
    }

    return result;
  }

  var from = change.from,
      to = change.to,
      text = change.text;
  var firstLine = getLine(doc, from.line),
      lastLine = getLine(doc, to.line);
  var lastText = lst(text),
      lastSpans = spansFor(text.length - 1),
      nlines = to.line - from.line; // Adjust the line structure

  if (change.full) {
    doc.insert(0, linesFor(0, text.length));
    doc.remove(text.length, doc.size - text.length);
  } else if (isWholeLineUpdate(doc, change)) {
    // This is a whole-line replace. Treated specially to make
    // sure line objects move the way they are supposed to.
    var added = linesFor(0, text.length - 1);
    update(lastLine, lastLine.text, lastSpans);

    if (nlines) {
      doc.remove(from.line, nlines);
    }

    if (added.length) {
      doc.insert(from.line, added);
    }
  } else if (firstLine == lastLine) {
    if (text.length == 1) {
      update(firstLine, firstLine.text.slice(0, from.ch) + lastText + firstLine.text.slice(to.ch), lastSpans);
    } else {
      var added$1 = linesFor(1, text.length - 1);
      added$1.push(new Line(lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight$$1));
      update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
      doc.insert(from.line + 1, added$1);
    }
  } else if (text.length == 1) {
    update(firstLine, firstLine.text.slice(0, from.ch) + text[0] + lastLine.text.slice(to.ch), spansFor(0));
    doc.remove(from.line + 1, nlines);
  } else {
    update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
    update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans);
    var added$2 = linesFor(1, text.length - 1);

    if (nlines > 1) {
      doc.remove(from.line + 1, nlines - 1);
    }

    doc.insert(from.line + 1, added$2);
  }

  signalLater(doc, "change", doc, change);
} // Call f for all linked documents.


function linkedDocs(doc, f, sharedHistOnly) {
  function propagate(doc, skip, sharedHist) {
    if (doc.linked) {
      for (var i = 0; i < doc.linked.length; ++i) {
        var rel = doc.linked[i];

        if (rel.doc == skip) {
          continue;
        }

        var shared = sharedHist && rel.sharedHist;

        if (sharedHistOnly && !shared) {
          continue;
        }

        f(rel.doc, shared);
        propagate(rel.doc, doc, shared);
      }
    }
  }

  propagate(doc, null, true);
} // Attach a document to an src.


function attachDoc(cm, doc) {
  if (doc.cm) {
    throw new Error("This document is already in use.");
  }

  cm.doc = doc;
  doc.cm = cm;
  estimateLineHeights(cm);
  loadMode(cm);
  setDirectionClass(cm);

  if (!cm.options.lineWrapping) {
    findMaxLine(cm);
  }

  cm.options.mode = doc.modeOption;
  regChange(cm);
}

function setDirectionClass(cm) {
  (cm.doc.direction == "rtl" ? addClass : rmClass)(cm.display.lineDiv, "CodeMirror-rtl");
}

function directionChanged(cm) {
  runInOp(cm, function () {
    setDirectionClass(cm);
    regChange(cm);
  });
}

function History(startGen) {
  // Arrays of change events and selections. Doing something adds an
  // event to done and clears undo. Undoing moves events from done
  // to undone, redoing moves them in the other direction.
  this.done = [];
  this.undone = [];
  this.undoDepth = Infinity; // Used to track when changes can be merged into a single undo
  // event

  this.lastModTime = this.lastSelTime = 0;
  this.lastOp = this.lastSelOp = null;
  this.lastOrigin = this.lastSelOrigin = null; // Used by the isClean() method

  this.generation = this.maxGeneration = startGen || 1;
} // Create a history change event from an updateDoc-style change
// object.


function historyChangeFromChange(doc, change) {
  var histChange = {
    from: copyPos(change.from),
    to: changeEnd(change),
    text: getBetween(doc, change.from, change.to)
  };
  attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);
  linkedDocs(doc, function (doc) {
    return attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);
  }, true);
  return histChange;
} // Pop all selection events off the end of a history array. Stop at
// a change event.


function clearSelectionEvents(array) {
  while (array.length) {
    var last = lst(array);

    if (last.ranges) {
      array.pop();
    } else {
      break;
    }
  }
} // Find the top change event in the history. Pop off selection
// events that are in the way.


function lastChangeEvent(hist, force) {
  if (force) {
    clearSelectionEvents(hist.done);
    return lst(hist.done);
  } else if (hist.done.length && !lst(hist.done).ranges) {
    return lst(hist.done);
  } else if (hist.done.length > 1 && !hist.done[hist.done.length - 2].ranges) {
    hist.done.pop();
    return lst(hist.done);
  }
} // Register a change in the history. Merges changes that are within
// a single operation, or are close together with an origin that
// allows merging (starting with "+") into a single event.


function addChangeToHistory(doc, change, selAfter, opId) {
  var hist = doc.history;
  hist.undone.length = 0;
  var time = +new Date(),
      cur;
  var last;

  if ((hist.lastOp == opId || hist.lastOrigin == change.origin && change.origin && (change.origin.charAt(0) == "+" && hist.lastModTime > time - (doc.cm ? doc.cm.options.historyEventDelay : 500) || change.origin.charAt(0) == "*")) && (cur = lastChangeEvent(hist, hist.lastOp == opId))) {
    // Merge this change into the last event
    last = lst(cur.changes);

    if (cmp(change.from, change.to) == 0 && cmp(change.from, last.to) == 0) {
      // Optimized case for simple insertion -- don't want to add
      // new changesets for every character typed
      last.to = changeEnd(change);
    } else {
      // Add new sub-event
      cur.changes.push(historyChangeFromChange(doc, change));
    }
  } else {
    // Can not be merged, start a new event.
    var before = lst(hist.done);

    if (!before || !before.ranges) {
      pushSelectionToHistory(doc.sel, hist.done);
    }

    cur = {
      changes: [historyChangeFromChange(doc, change)],
      generation: hist.generation
    };
    hist.done.push(cur);

    while (hist.done.length > hist.undoDepth) {
      hist.done.shift();

      if (!hist.done[0].ranges) {
        hist.done.shift();
      }
    }
  }

  hist.done.push(selAfter);
  hist.generation = ++hist.maxGeneration;
  hist.lastModTime = hist.lastSelTime = time;
  hist.lastOp = hist.lastSelOp = opId;
  hist.lastOrigin = hist.lastSelOrigin = change.origin;

  if (!last) {
    signal(doc, "historyAdded");
  }
}

function selectionEventCanBeMerged(doc, origin, prev, sel) {
  var ch = origin.charAt(0);
  return ch == "*" || ch == "+" && prev.ranges.length == sel.ranges.length && prev.somethingSelected() == sel.somethingSelected() && new Date() - doc.history.lastSelTime <= (doc.cm ? doc.cm.options.historyEventDelay : 500);
} // Called whenever the selection changes, sets the new selection as
// the pending selection in the history, and pushes the old pending
// selection into the 'done' array when it was significantly
// different (in number of selected ranges, emptiness, or time).


function addSelectionToHistory(doc, sel, opId, options) {
  var hist = doc.history,
      origin = options && options.origin; // A new event is started when the previous origin does not match
  // the current, or the origins don't allow matching. Origins
  // starting with * are always merged, those starting with + are
  // merged when similar and close together in time.

  if (opId == hist.lastSelOp || origin && hist.lastSelOrigin == origin && (hist.lastModTime == hist.lastSelTime && hist.lastOrigin == origin || selectionEventCanBeMerged(doc, origin, lst(hist.done), sel))) {
    hist.done[hist.done.length - 1] = sel;
  } else {
    pushSelectionToHistory(sel, hist.done);
  }

  hist.lastSelTime = +new Date();
  hist.lastSelOrigin = origin;
  hist.lastSelOp = opId;

  if (options && options.clearRedo !== false) {
    clearSelectionEvents(hist.undone);
  }
}

function pushSelectionToHistory(sel, dest) {
  var top = lst(dest);

  if (!(top && top.ranges && top.equals(sel))) {
    dest.push(sel);
  }
} // Used to store index span information in the history.


function attachLocalSpans(doc, change, from, to) {
  var existing = change["spans_" + doc.id],
      n = 0;
  doc.iter(Math.max(doc.first, from), Math.min(doc.first + doc.size, to), function (line) {
    if (line.markedSpans) {
      (existing || (existing = change["spans_" + doc.id] = {}))[n] = line.markedSpans;
    }

    ++n;
  });
} // When un/re-doing restores text containing index spans, those
// that have been explicitly cleared should not be restored.


function removeClearedSpans(spans) {
  if (!spans) {
    return null;
  }

  var out;

  for (var i = 0; i < spans.length; ++i) {
    if (spans[i].marker.explicitlyCleared) {
      if (!out) {
        out = spans.slice(0, i);
      }
    } else if (out) {
      out.push(spans[i]);
    }
  }

  return !out ? spans : out.length ? out : null;
} // Retrieve and filter the old index spans stored in a change event.


function getOldSpans(doc, change) {
  var found = change["spans_" + doc.id];

  if (!found) {
    return null;
  }

  var nw = [];

  for (var i = 0; i < change.text.length; ++i) {
    nw.push(removeClearedSpans(found[i]));
  }

  return nw;
} // Used for un/re-doing changes from the history. Combines the
// result of computing the existing spans with the set of spans that
// existed in the history (so that deleting around a span and then
// undoing brings back the span).


function mergeOldSpans(doc, change) {
  var old = getOldSpans(doc, change);
  var stretched = stretchSpansOverChange(doc, change);

  if (!old) {
    return stretched;
  }

  if (!stretched) {
    return old;
  }

  for (var i = 0; i < old.length; ++i) {
    var oldCur = old[i],
        stretchCur = stretched[i];

    if (oldCur && stretchCur) {
      spans: for (var j = 0; j < stretchCur.length; ++j) {
        var span = stretchCur[j];

        for (var k = 0; k < oldCur.length; ++k) {
          if (oldCur[k].marker == span.marker) {
            continue spans;
          }
        }

        oldCur.push(span);
      }
    } else if (stretchCur) {
      old[i] = stretchCur;
    }
  }

  return old;
} // Used both to provide a JSON-safe object in .getHistory, and, when
// detaching a document, to split the history in two


function copyHistoryArray(events, newGroup, instantiateSel) {
  var copy = [];

  for (var i = 0; i < events.length; ++i) {
    var event = events[i];

    if (event.ranges) {
      copy.push(instantiateSel ? Selection.prototype.deepCopy.call(event) : event);
      continue;
    }

    var changes = event.changes,
        newChanges = [];
    copy.push({
      changes: newChanges
    });

    for (var j = 0; j < changes.length; ++j) {
      var change = changes[j],
          m = void 0;
      newChanges.push({
        from: change.from,
        to: change.to,
        text: change.text
      });

      if (newGroup) {
        for (var prop in change) {
          if (m = prop.match(/^spans_(\d+)$/)) {
            if (indexOf(newGroup, Number(m[1])) > -1) {
              lst(newChanges)[prop] = change[prop];
              delete change[prop];
            }
          }
        }
      }
    }
  }

  return copy;
} // The 'scroll' parameter given to many of these indicated whether
// the new cursor position should be scrolled into view after
// modifying the selection.
// If shift is held or the extend flag is set, extends a range to
// include a given position (and optionally a second position).
// Otherwise, simply returns the range between the given positions.
// Used for cursor motion and such.


function extendRange(range, head, other, extend) {
  if (extend) {
    var anchor = range.anchor;

    if (other) {
      var posBefore = cmp(head, anchor) < 0;

      if (posBefore != cmp(other, anchor) < 0) {
        anchor = head;
        head = other;
      } else if (posBefore != cmp(head, other) < 0) {
        head = other;
      }
    }

    return new Range(anchor, head);
  } else {
    return new Range(other || head, head);
  }
} // Extend the primary selection range, discard the rest.


function extendSelection(doc, head, other, options, extend) {
  if (extend == null) {
    extend = doc.cm && (doc.cm.display.shift || doc.extend);
  }

  setSelection(doc, new Selection([extendRange(doc.sel.primary(), head, other, extend)], 0), options);
} // Extend all selections (pos is an array of selections with length
// equal the number of selections)


function extendSelections(doc, heads, options) {
  var out = [];
  var extend = doc.cm && (doc.cm.display.shift || doc.extend);

  for (var i = 0; i < doc.sel.ranges.length; i++) {
    out[i] = extendRange(doc.sel.ranges[i], heads[i], null, extend);
  }

  var newSel = normalizeSelection(doc.cm, out, doc.sel.primIndex);
  setSelection(doc, newSel, options);
} // Updates a single range in the selection.


function replaceOneSelection(doc, i, range, options) {
  var ranges = doc.sel.ranges.slice(0);
  ranges[i] = range;
  setSelection(doc, normalizeSelection(doc.cm, ranges, doc.sel.primIndex), options);
} // Reset the selection to a single range.


function setSimpleSelection(doc, anchor, head, options) {
  setSelection(doc, simpleSelection(anchor, head), options);
} // Give beforeSelectionChange handlers a change to influence a
// selection update.


function filterSelectionChange(doc, sel, options) {
  var obj = {
    ranges: sel.ranges,
    update: function update(ranges) {
      var this$1 = this;
      this.ranges = [];

      for (var i = 0; i < ranges.length; i++) {
        this$1.ranges[i] = new Range(_clipPos(doc, ranges[i].anchor), _clipPos(doc, ranges[i].head));
      }
    },
    origin: options && options.origin
  };
  signal(doc, "beforeSelectionChange", doc, obj);

  if (doc.cm) {
    signal(doc.cm, "beforeSelectionChange", doc.cm, obj);
  }

  if (obj.ranges != sel.ranges) {
    return normalizeSelection(doc.cm, obj.ranges, obj.ranges.length - 1);
  } else {
    return sel;
  }
}

function setSelectionReplaceHistory(doc, sel, options) {
  var done = doc.history.done,
      last = lst(done);

  if (last && last.ranges) {
    done[done.length - 1] = sel;
    setSelectionNoUndo(doc, sel, options);
  } else {
    setSelection(doc, sel, options);
  }
} // Set a new selection.


function setSelection(doc, sel, options) {
  setSelectionNoUndo(doc, sel, options);
  addSelectionToHistory(doc, doc.sel, doc.cm ? doc.cm.curOp.id : NaN, options);
}

function setSelectionNoUndo(doc, sel, options) {
  if (hasHandler(doc, "beforeSelectionChange") || doc.cm && hasHandler(doc.cm, "beforeSelectionChange")) {
    sel = filterSelectionChange(doc, sel, options);
  }

  var bias = options && options.bias || (cmp(sel.primary().head, doc.sel.primary().head) < 0 ? -1 : 1);
  setSelectionInner(doc, skipAtomicInSelection(doc, sel, bias, true));

  if (!(options && options.scroll === false) && doc.cm) {
    ensureCursorVisible(doc.cm);
  }
}

function setSelectionInner(doc, sel) {
  if (sel.equals(doc.sel)) {
    return;
  }

  doc.sel = sel;

  if (doc.cm) {
    doc.cm.curOp.updateInput = 1;
    doc.cm.curOp.selectionChanged = true;
    signalCursorActivity(doc.cm);
  }

  signalLater(doc, "cursorActivity", doc);
} // Verify that the selection does not partially select any atomic
// index ranges.


function reCheckSelection(doc) {
  setSelectionInner(doc, skipAtomicInSelection(doc, doc.sel, null, false));
} // Return a selection that does not partially select any atomic
// ranges.


function skipAtomicInSelection(doc, sel, bias, mayClear) {
  var out;

  for (var i = 0; i < sel.ranges.length; i++) {
    var range = sel.ranges[i];
    var old = sel.ranges.length == doc.sel.ranges.length && doc.sel.ranges[i];
    var newAnchor = skipAtomic(doc, range.anchor, old && old.anchor, bias, mayClear);
    var newHead = skipAtomic(doc, range.head, old && old.head, bias, mayClear);

    if (out || newAnchor != range.anchor || newHead != range.head) {
      if (!out) {
        out = sel.ranges.slice(0, i);
      }

      out[i] = new Range(newAnchor, newHead);
    }
  }

  return out ? normalizeSelection(doc.cm, out, sel.primIndex) : sel;
}

function skipAtomicInner(doc, pos, oldPos, dir, mayClear) {
  var line = getLine(doc, pos.line);

  if (line.markedSpans) {
    for (var i = 0; i < line.markedSpans.length; ++i) {
      var sp = line.markedSpans[i],
          m = sp.marker; // Determine if we should prevent the cursor being placed to the left/right of an atomic marker
      // Historically this was determined using the inclusiveLeft/Right option, but the new way to control it
      // is with selectLeft/Right

      var preventCursorLeft = "selectLeft" in m ? !m.selectLeft : m.inclusiveLeft;
      var preventCursorRight = "selectRight" in m ? !m.selectRight : m.inclusiveRight;

      if ((sp.from == null || (preventCursorLeft ? sp.from <= pos.ch : sp.from < pos.ch)) && (sp.to == null || (preventCursorRight ? sp.to >= pos.ch : sp.to > pos.ch))) {
        if (mayClear) {
          signal(m, "beforeCursorEnter");

          if (m.explicitlyCleared) {
            if (!line.markedSpans) {
              break;
            } else {
              --i;
              continue;
            }
          }
        }

        if (!m.atomic) {
          continue;
        }

        if (oldPos) {
          var near = m.find(dir < 0 ? 1 : -1),
              diff = void 0;

          if (dir < 0 ? preventCursorRight : preventCursorLeft) {
            near = movePos(doc, near, -dir, near && near.line == pos.line ? line : null);
          }

          if (near && near.line == pos.line && (diff = cmp(near, oldPos)) && (dir < 0 ? diff < 0 : diff > 0)) {
            return skipAtomicInner(doc, near, pos, dir, mayClear);
          }
        }

        var far = m.find(dir < 0 ? -1 : 1);

        if (dir < 0 ? preventCursorLeft : preventCursorRight) {
          far = movePos(doc, far, dir, far.line == pos.line ? line : null);
        }

        return far ? skipAtomicInner(doc, far, pos, dir, mayClear) : null;
      }
    }
  }

  return pos;
} // Ensure a given position is not inside an atomic range.


function skipAtomic(doc, pos, oldPos, bias, mayClear) {
  var dir = bias || 1;
  var found = skipAtomicInner(doc, pos, oldPos, dir, mayClear) || !mayClear && skipAtomicInner(doc, pos, oldPos, dir, true) || skipAtomicInner(doc, pos, oldPos, -dir, mayClear) || !mayClear && skipAtomicInner(doc, pos, oldPos, -dir, true);

  if (!found) {
    doc.cantEdit = true;
    return Pos(doc.first, 0);
  }

  return found;
}

function movePos(doc, pos, dir, line) {
  if (dir < 0 && pos.ch == 0) {
    if (pos.line > doc.first) {
      return _clipPos(doc, Pos(pos.line - 1));
    } else {
      return null;
    }
  } else if (dir > 0 && pos.ch == (line || getLine(doc, pos.line)).text.length) {
    if (pos.line < doc.first + doc.size - 1) {
      return Pos(pos.line + 1, 0);
    } else {
      return null;
    }
  } else {
    return new Pos(pos.line, pos.ch + dir);
  }
}

function selectAll(cm) {
  cm.setSelection(Pos(cm.firstLine(), 0), Pos(cm.lastLine()), sel_dontScroll);
} // UPDATING
// Allow "beforeChange" event handlers to influence a change


function filterChange(doc, change, update) {
  var obj = {
    canceled: false,
    from: change.from,
    to: change.to,
    text: change.text,
    origin: change.origin,
    cancel: function cancel() {
      return obj.canceled = true;
    }
  };

  if (update) {
    obj.update = function (from, to, text, origin) {
      if (from) {
        obj.from = _clipPos(doc, from);
      }

      if (to) {
        obj.to = _clipPos(doc, to);
      }

      if (text) {
        obj.text = text;
      }

      if (origin !== undefined) {
        obj.origin = origin;
      }
    };
  }

  signal(doc, "beforeChange", doc, obj);

  if (doc.cm) {
    signal(doc.cm, "beforeChange", doc.cm, obj);
  }

  if (obj.canceled) {
    if (doc.cm) {
      doc.cm.curOp.updateInput = 2;
    }

    return null;
  }

  return {
    from: obj.from,
    to: obj.to,
    text: obj.text,
    origin: obj.origin
  };
} // Apply a change to a document, and add it to the document's
// history, and propagating it to all linked documents.


function makeChange(doc, change, ignoreReadOnly) {
  if (doc.cm) {
    if (!doc.cm.curOp) {
      return operation(doc.cm, makeChange)(doc, change, ignoreReadOnly);
    }

    if (doc.cm.state.suppressEdits) {
      return;
    }
  }

  if (hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")) {
    change = filterChange(doc, change, true);

    if (!change) {
      return;
    }
  } // Possibly split or suppress the update based on the presence
  // of read-only spans in its range.


  var split = sawReadOnlySpans && !ignoreReadOnly && removeReadOnlyRanges(doc, change.from, change.to);

  if (split) {
    for (var i = split.length - 1; i >= 0; --i) {
      makeChangeInner(doc, {
        from: split[i].from,
        to: split[i].to,
        text: i ? [""] : change.text,
        origin: change.origin
      });
    }
  } else {
    makeChangeInner(doc, change);
  }
}

function makeChangeInner(doc, change) {
  if (change.text.length == 1 && change.text[0] == "" && cmp(change.from, change.to) == 0) {
    return;
  }

  var selAfter = computeSelAfterChange(doc, change);
  addChangeToHistory(doc, change, selAfter, doc.cm ? doc.cm.curOp.id : NaN);
  makeChangeSingleDoc(doc, change, selAfter, stretchSpansOverChange(doc, change));
  var rebased = [];
  linkedDocs(doc, function (doc, sharedHist) {
    if (!sharedHist && indexOf(rebased, doc.history) == -1) {
      rebaseHist(doc.history, change);
      rebased.push(doc.history);
    }

    makeChangeSingleDoc(doc, change, null, stretchSpansOverChange(doc, change));
  });
} // Revert a change stored in a document's history.


function makeChangeFromHistory(doc, type, allowSelectionOnly) {
  var suppress = doc.cm && doc.cm.state.suppressEdits;

  if (suppress && !allowSelectionOnly) {
    return;
  }

  var hist = doc.history,
      event,
      selAfter = doc.sel;
  var source = type == "undo" ? hist.done : hist.undone,
      dest = type == "undo" ? hist.undone : hist.done; // Verify that there is a useable event (so that ctrl-z won't
  // needlessly clear selection events)

  var i = 0;

  for (; i < source.length; i++) {
    event = source[i];

    if (allowSelectionOnly ? event.ranges && !event.equals(doc.sel) : !event.ranges) {
      break;
    }
  }

  if (i == source.length) {
    return;
  }

  hist.lastOrigin = hist.lastSelOrigin = null;

  for (;;) {
    event = source.pop();

    if (event.ranges) {
      pushSelectionToHistory(event, dest);

      if (allowSelectionOnly && !event.equals(doc.sel)) {
        setSelection(doc, event, {
          clearRedo: false
        });
        return;
      }

      selAfter = event;
    } else if (suppress) {
      source.push(event);
      return;
    } else {
      break;
    }
  } // Build up a reverse change object to add to the opposite history
  // stack (redo when undoing, and vice versa).


  var antiChanges = [];
  pushSelectionToHistory(selAfter, dest);
  dest.push({
    changes: antiChanges,
    generation: hist.generation
  });
  hist.generation = event.generation || ++hist.maxGeneration;
  var filter = hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange");

  var loop = function loop(i) {
    var change = event.changes[i];
    change.origin = type;

    if (filter && !filterChange(doc, change, false)) {
      source.length = 0;
      return {};
    }

    antiChanges.push(historyChangeFromChange(doc, change));
    var after = i ? computeSelAfterChange(doc, change) : lst(source);
    makeChangeSingleDoc(doc, change, after, mergeOldSpans(doc, change));

    if (!i && doc.cm) {
      doc.cm.scrollIntoView({
        from: change.from,
        to: changeEnd(change)
      });
    }

    var rebased = []; // Propagate to the linked documents

    linkedDocs(doc, function (doc, sharedHist) {
      if (!sharedHist && indexOf(rebased, doc.history) == -1) {
        rebaseHist(doc.history, change);
        rebased.push(doc.history);
      }

      makeChangeSingleDoc(doc, change, null, mergeOldSpans(doc, change));
    });
  };

  for (var i$1 = event.changes.length - 1; i$1 >= 0; --i$1) {
    var returned = loop(i$1);
    if (returned) return returned.v;
  }
} // Sub-views need their line numbers shifted when text is added
// above or below them in the parent document.


function shiftDoc(doc, distance) {
  if (distance == 0) {
    return;
  }

  doc.first += distance;
  doc.sel = new Selection(map(doc.sel.ranges, function (range) {
    return new Range(Pos(range.anchor.line + distance, range.anchor.ch), Pos(range.head.line + distance, range.head.ch));
  }), doc.sel.primIndex);

  if (doc.cm) {
    regChange(doc.cm, doc.first, doc.first - distance, distance);

    for (var d = doc.cm.display, l = d.viewFrom; l < d.viewTo; l++) {
      regLineChange(doc.cm, l, "gutter");
    }
  }
} // More lower-level change function, handling only a single document
// (not linked ones).


function makeChangeSingleDoc(doc, change, selAfter, spans) {
  if (doc.cm && !doc.cm.curOp) {
    return operation(doc.cm, makeChangeSingleDoc)(doc, change, selAfter, spans);
  }

  if (change.to.line < doc.first) {
    shiftDoc(doc, change.text.length - 1 - (change.to.line - change.from.line));
    return;
  }

  if (change.from.line > doc.lastLine()) {
    return;
  } // Clip the change to the size of this docs


  if (change.from.line < doc.first) {
    var shift = change.text.length - 1 - (doc.first - change.from.line);
    shiftDoc(doc, shift);
    change = {
      from: Pos(doc.first, 0),
      to: Pos(change.to.line + shift, change.to.ch),
      text: [lst(change.text)],
      origin: change.origin
    };
  }

  var last = doc.lastLine();

  if (change.to.line > last) {
    change = {
      from: change.from,
      to: Pos(last, getLine(doc, last).text.length),
      text: [change.text[0]],
      origin: change.origin
    };
  }

  change.removed = getBetween(doc, change.from, change.to);

  if (!selAfter) {
    selAfter = computeSelAfterChange(doc, change);
  }

  if (doc.cm) {
    makeChangeSingleDocInEditor(doc.cm, change, spans);
  } else {
    updateDoc(doc, change, spans);
  }

  setSelectionNoUndo(doc, selAfter, sel_dontScroll);

  if (doc.cantEdit && skipAtomic(doc, Pos(doc.firstLine(), 0))) {
    doc.cantEdit = false;
  }
} // Handle the interaction of a change to a document with the src
// that this document is part of.


function makeChangeSingleDocInEditor(cm, change, spans) {
  var doc = cm.doc,
      display = cm.display,
      from = change.from,
      to = change.to;
  var recomputeMaxLength = false,
      checkWidthStart = from.line;

  if (!cm.options.lineWrapping) {
    checkWidthStart = lineNo(visualLine(getLine(doc, from.line)));
    doc.iter(checkWidthStart, to.line + 1, function (line) {
      if (line == display.maxLine) {
        recomputeMaxLength = true;
        return true;
      }
    });
  }

  if (doc.sel.contains(change.from, change.to) > -1) {
    signalCursorActivity(cm);
  }

  updateDoc(doc, change, spans, estimateHeight(cm));

  if (!cm.options.lineWrapping) {
    doc.iter(checkWidthStart, from.line + change.text.length, function (line) {
      var len = lineLength(line);

      if (len > display.maxLineLength) {
        display.maxLine = line;
        display.maxLineLength = len;
        display.maxLineChanged = true;
        recomputeMaxLength = false;
      }
    });

    if (recomputeMaxLength) {
      cm.curOp.updateMaxLine = true;
    }
  }

  retreatFrontier(doc, from.line);
  startWorker(cm, 400);
  var lendiff = change.text.length - (to.line - from.line) - 1; // Remember that these lines changed, for updating the display

  if (change.full) {
    regChange(cm);
  } else if (from.line == to.line && change.text.length == 1 && !isWholeLineUpdate(cm.doc, change)) {
    regLineChange(cm, from.line, "text");
  } else {
    regChange(cm, from.line, to.line + 1, lendiff);
  }

  var changesHandler = hasHandler(cm, "changes"),
      changeHandler = hasHandler(cm, "change");

  if (changeHandler || changesHandler) {
    var obj = {
      from: from,
      to: to,
      text: change.text,
      removed: change.removed,
      origin: change.origin
    };

    if (changeHandler) {
      signalLater(cm, "change", cm, obj);
    }

    if (changesHandler) {
      (cm.curOp.changeObjs || (cm.curOp.changeObjs = [])).push(obj);
    }
  }

  cm.display.selForContextMenu = null;
}

function _replaceRange(doc, code, from, to, origin) {
  var assign;

  if (!to) {
    to = from;
  }

  if (cmp(to, from) < 0) {
    assign = [to, from], from = assign[0], to = assign[1];
  }

  if (typeof code == "string") {
    code = doc.splitLines(code);
  }

  makeChange(doc, {
    from: from,
    to: to,
    text: code,
    origin: origin
  });
} // Rebasing/resetting history to deal with externally-sourced changes


function rebaseHistSelSingle(pos, from, to, diff) {
  if (to < pos.line) {
    pos.line += diff;
  } else if (from < pos.line) {
    pos.line = from;
    pos.ch = 0;
  }
} // Tries to rebase an array of history events given a change in the
// document. If the change touches the same lines as the event, the
// event, and everything 'behind' it, is discarded. If the change is
// before the event, the event's positions are updated. Uses a
// copy-on-write scheme for the positions, to avoid having to
// reallocate them all on every rebase, but also avoid problems with
// shared position objects being unsafely updated.


function rebaseHistArray(array, from, to, diff) {
  for (var i = 0; i < array.length; ++i) {
    var sub = array[i],
        ok = true;

    if (sub.ranges) {
      if (!sub.copied) {
        sub = array[i] = sub.deepCopy();
        sub.copied = true;
      }

      for (var j = 0; j < sub.ranges.length; j++) {
        rebaseHistSelSingle(sub.ranges[j].anchor, from, to, diff);
        rebaseHistSelSingle(sub.ranges[j].head, from, to, diff);
      }

      continue;
    }

    for (var j$1 = 0; j$1 < sub.changes.length; ++j$1) {
      var cur = sub.changes[j$1];

      if (to < cur.from.line) {
        cur.from = Pos(cur.from.line + diff, cur.from.ch);
        cur.to = Pos(cur.to.line + diff, cur.to.ch);
      } else if (from <= cur.to.line) {
        ok = false;
        break;
      }
    }

    if (!ok) {
      array.splice(0, i + 1);
      i = 0;
    }
  }
}

function rebaseHist(hist, change) {
  var from = change.from.line,
      to = change.to.line,
      diff = change.text.length - (to - from) - 1;
  rebaseHistArray(hist.done, from, to, diff);
  rebaseHistArray(hist.undone, from, to, diff);
} // Utility for applying a change to a line by handle or number,
// returning the number and optionally registering the line as
// changed.


function changeLine(doc, handle, changeType, op) {
  var no = handle,
      line = handle;

  if (typeof handle == "number") {
    line = getLine(doc, clipLine(doc, handle));
  } else {
    no = lineNo(handle);
  }

  if (no == null) {
    return null;
  }

  if (op(line, no) && doc.cm) {
    regLineChange(doc.cm, no, changeType);
  }

  return line;
} // The document is represented as a BTree consisting of leaves, with
// chunk of lines in them, and branches, with up to ten leaves or
// other branch nodes below them. The top node is always a branch
// node, and is the document object itself (meaning it has
// additional methods and properties).
//
// All nodes have parent links. The tree is used both to go from
// line numbers to line objects, and to go from objects to numbers.
// It also indexes by height, and is used to convert between height
// and line object, and to find the total height of the document.
//
// See also http://marijnhaverbeke.nl/blog/codemirror-line-tree.html


function LeafChunk(lines) {
  var this$1 = this;
  this.lines = lines;
  this.parent = null;
  var height = 0;

  for (var i = 0; i < lines.length; ++i) {
    lines[i].parent = this$1;
    height += lines[i].height;
  }

  this.height = height;
}

LeafChunk.prototype = {
  chunkSize: function chunkSize() {
    return this.lines.length;
  },
  // Remove the n lines at offset 'at'.
  removeInner: function removeInner(at, n) {
    var this$1 = this;

    for (var i = at, e = at + n; i < e; ++i) {
      var line = this$1.lines[i];
      this$1.height -= line.height;
      cleanUpLine(line);
      signalLater(line, "delete");
    }

    this.lines.splice(at, n);
  },
  // Helper used to collapse a small branch into a single leaf.
  collapse: function collapse(lines) {
    lines.push.apply(lines, this.lines);
  },
  // Insert the given array of lines at offset 'at', count them as
  // having the given height.
  insertInner: function insertInner(at, lines, height) {
    var this$1 = this;
    this.height += height;
    this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at));

    for (var i = 0; i < lines.length; ++i) {
      lines[i].parent = this$1;
    }
  },
  // Used to iterate over a part of the tree.
  iterN: function iterN(at, n, op) {
    var this$1 = this;

    for (var e = at + n; at < e; ++at) {
      if (op(this$1.lines[at])) {
        return true;
      }
    }
  }
};

function BranchChunk(children) {
  var this$1 = this;
  this.children = children;
  var size = 0,
      height = 0;

  for (var i = 0; i < children.length; ++i) {
    var ch = children[i];
    size += ch.chunkSize();
    height += ch.height;
    ch.parent = this$1;
  }

  this.size = size;
  this.height = height;
  this.parent = null;
}

BranchChunk.prototype = {
  chunkSize: function chunkSize() {
    return this.size;
  },
  removeInner: function removeInner(at, n) {
    var this$1 = this;
    this.size -= n;

    for (var i = 0; i < this.children.length; ++i) {
      var child = this$1.children[i],
          sz = child.chunkSize();

      if (at < sz) {
        var rm = Math.min(n, sz - at),
            oldHeight = child.height;
        child.removeInner(at, rm);
        this$1.height -= oldHeight - child.height;

        if (sz == rm) {
          this$1.children.splice(i--, 1);
          child.parent = null;
        }

        if ((n -= rm) == 0) {
          break;
        }

        at = 0;
      } else {
        at -= sz;
      }
    } // If the result is smaller than 25 lines, ensure that it is a
    // single leaf node.


    if (this.size - n < 25 && (this.children.length > 1 || !(this.children[0] instanceof LeafChunk))) {
      var lines = [];
      this.collapse(lines);
      this.children = [new LeafChunk(lines)];
      this.children[0].parent = this;
    }
  },
  collapse: function collapse(lines) {
    var this$1 = this;

    for (var i = 0; i < this.children.length; ++i) {
      this$1.children[i].collapse(lines);
    }
  },
  insertInner: function insertInner(at, lines, height) {
    var this$1 = this;
    this.size += lines.length;
    this.height += height;

    for (var i = 0; i < this.children.length; ++i) {
      var child = this$1.children[i],
          sz = child.chunkSize();

      if (at <= sz) {
        child.insertInner(at, lines, height);

        if (child.lines && child.lines.length > 50) {
          // To avoid memory thrashing when child.lines is huge (e.g. first view of a large file), it's never spliced.
          // Instead, small slices are taken. They're taken in order because sequential memory accesses are fastest.
          var remaining = child.lines.length % 25 + 25;

          for (var pos = remaining; pos < child.lines.length;) {
            var leaf = new LeafChunk(child.lines.slice(pos, pos += 25));
            child.height -= leaf.height;
            this$1.children.splice(++i, 0, leaf);
            leaf.parent = this$1;
          }

          child.lines = child.lines.slice(0, remaining);
          this$1.maybeSpill();
        }

        break;
      }

      at -= sz;
    }
  },
  // When a node has grown, check whether it should be split.
  maybeSpill: function maybeSpill() {
    if (this.children.length <= 10) {
      return;
    }

    var me = this;

    do {
      var spilled = me.children.splice(me.children.length - 5, 5);
      var sibling = new BranchChunk(spilled);

      if (!me.parent) {
        // Become the parent node
        var copy = new BranchChunk(me.children);
        copy.parent = me;
        me.children = [copy, sibling];
        me = copy;
      } else {
        me.size -= sibling.size;
        me.height -= sibling.height;
        var myIndex = indexOf(me.parent.children, me);
        me.parent.children.splice(myIndex + 1, 0, sibling);
      }

      sibling.parent = me.parent;
    } while (me.children.length > 10);

    me.parent.maybeSpill();
  },
  iterN: function iterN(at, n, op) {
    var this$1 = this;

    for (var i = 0; i < this.children.length; ++i) {
      var child = this$1.children[i],
          sz = child.chunkSize();

      if (at < sz) {
        var used = Math.min(n, sz - at);

        if (child.iterN(at, used, op)) {
          return true;
        }

        if ((n -= used) == 0) {
          break;
        }

        at = 0;
      } else {
        at -= sz;
      }
    }
  }
}; // Line widgets are block elements displayed above or below a line.

var LineWidget = function LineWidget(doc, node, options) {
  var this$1 = this;

  if (options) {
    for (var opt in options) {
      if (options.hasOwnProperty(opt)) {
        this$1[opt] = options[opt];
      }
    }
  }

  this.doc = doc;
  this.node = node;
};

LineWidget.prototype.clear = function () {
  var this$1 = this;
  var cm = this.doc.cm,
      ws = this.line.widgets,
      line = this.line,
      no = lineNo(line);

  if (no == null || !ws) {
    return;
  }

  for (var i = 0; i < ws.length; ++i) {
    if (ws[i] == this$1) {
      ws.splice(i--, 1);
    }
  }

  if (!ws.length) {
    line.widgets = null;
  }

  var height = widgetHeight(this);
  updateLineHeight(line, Math.max(0, line.height - height));

  if (cm) {
    runInOp(cm, function () {
      adjustScrollWhenAboveVisible(cm, line, -height);
      regLineChange(cm, no, "widget");
    });
    signalLater(cm, "lineWidgetCleared", cm, this, no);
  }
};

LineWidget.prototype.changed = function () {
  var this$1 = this;
  var oldH = this.height,
      cm = this.doc.cm,
      line = this.line;
  this.height = null;
  var diff = widgetHeight(this) - oldH;

  if (!diff) {
    return;
  }

  if (!lineIsHidden(this.doc, line)) {
    updateLineHeight(line, line.height + diff);
  }

  if (cm) {
    runInOp(cm, function () {
      cm.curOp.forceUpdate = true;
      adjustScrollWhenAboveVisible(cm, line, diff);
      signalLater(cm, "lineWidgetChanged", cm, this$1, lineNo(line));
    });
  }
};

eventMixin(LineWidget);

function adjustScrollWhenAboveVisible(cm, line, diff) {
  if (_heightAtLine(line) < (cm.curOp && cm.curOp.scrollTop || cm.doc.scrollTop)) {
    addToScrollTop(cm, diff);
  }
}

function addLineWidget(doc, handle, node, options) {
  var widget = new LineWidget(doc, node, options);
  var cm = doc.cm;

  if (cm && widget.noHScroll) {
    cm.display.alignWidgets = true;
  }

  changeLine(doc, handle, "widget", function (line) {
    var widgets = line.widgets || (line.widgets = []);

    if (widget.insertAt == null) {
      widgets.push(widget);
    } else {
      widgets.splice(Math.min(widgets.length - 1, Math.max(0, widget.insertAt)), 0, widget);
    }

    widget.line = line;

    if (cm && !lineIsHidden(doc, line)) {
      var aboveVisible = _heightAtLine(line) < doc.scrollTop;
      updateLineHeight(line, line.height + widgetHeight(widget));

      if (aboveVisible) {
        addToScrollTop(cm, widget.height);
      }

      cm.curOp.forceUpdate = true;
    }

    return true;
  });

  if (cm) {
    signalLater(cm, "lineWidgetAdded", cm, widget, typeof handle == "number" ? handle : lineNo(handle));
  }

  return widget;
}

var nextMarkerId = 0;

var TextMarker = function TextMarker(doc, type) {
  this.lines = [];
  this.type = type;
  this.doc = doc;
  this.id = ++nextMarkerId;
}; // Clear the marker.


TextMarker.prototype.clear = function () {
  var this$1 = this;

  if (this.explicitlyCleared) {
    return;
  }

  var cm = this.doc.cm,
      withOp = cm && !cm.curOp;

  if (withOp) {
    _startOperation(cm);
  }

  if (hasHandler(this, "clear")) {
    var found = this.find();

    if (found) {
      signalLater(this, "clear", found.from, found.to);
    }
  }

  var min = null,
      max = null;

  for (var i = 0; i < this.lines.length; ++i) {
    var line = this$1.lines[i];
    var span = getMarkedSpanFor(line.markedSpans, this$1);

    if (cm && !this$1.collapsed) {
      regLineChange(cm, lineNo(line), "text");
    } else if (cm) {
      if (span.to != null) {
        max = lineNo(line);
      }

      if (span.from != null) {
        min = lineNo(line);
      }
    }

    line.markedSpans = removeMarkedSpan(line.markedSpans, span);

    if (span.from == null && this$1.collapsed && !lineIsHidden(this$1.doc, line) && cm) {
      updateLineHeight(line, textHeight(cm.display));
    }
  }

  if (cm && this.collapsed && !cm.options.lineWrapping) {
    for (var i$1 = 0; i$1 < this.lines.length; ++i$1) {
      var visual = visualLine(this$1.lines[i$1]),
          len = lineLength(visual);

      if (len > cm.display.maxLineLength) {
        cm.display.maxLine = visual;
        cm.display.maxLineLength = len;
        cm.display.maxLineChanged = true;
      }
    }
  }

  if (min != null && cm && this.collapsed) {
    regChange(cm, min, max + 1);
  }

  this.lines.length = 0;
  this.explicitlyCleared = true;

  if (this.atomic && this.doc.cantEdit) {
    this.doc.cantEdit = false;

    if (cm) {
      reCheckSelection(cm.doc);
    }
  }

  if (cm) {
    signalLater(cm, "markerCleared", cm, this, min, max);
  }

  if (withOp) {
    _endOperation(cm);
  }

  if (this.parent) {
    this.parent.clear();
  }
}; // Find the position of the marker in the document. Returns a {from,
// to} object by default. Side can be passed to get a specific side
// -- 0 (both), -1 (left), or 1 (right). When lineObj is true, the
// Pos objects returned contain a line object, rather than a line
// number (used to prevent looking up the same line twice).


TextMarker.prototype.find = function (side, lineObj) {
  var this$1 = this;

  if (side == null && this.type == "bookmark") {
    side = 1;
  }

  var from, to;

  for (var i = 0; i < this.lines.length; ++i) {
    var line = this$1.lines[i];
    var span = getMarkedSpanFor(line.markedSpans, this$1);

    if (span.from != null) {
      from = Pos(lineObj ? line : lineNo(line), span.from);

      if (side == -1) {
        return from;
      }
    }

    if (span.to != null) {
      to = Pos(lineObj ? line : lineNo(line), span.to);

      if (side == 1) {
        return to;
      }
    }
  }

  return from && {
    from: from,
    to: to
  };
}; // Signals that the marker's widget changed, and surrounding layout
// should be recomputed.


TextMarker.prototype.changed = function () {
  var this$1 = this;
  var pos = this.find(-1, true),
      widget = this,
      cm = this.doc.cm;

  if (!pos || !cm) {
    return;
  }

  runInOp(cm, function () {
    var line = pos.line,
        lineN = lineNo(pos.line);
    var view = findViewForLine(cm, lineN);

    if (view) {
      clearLineMeasurementCacheFor(view);
      cm.curOp.selectionChanged = cm.curOp.forceUpdate = true;
    }

    cm.curOp.updateMaxLine = true;

    if (!lineIsHidden(widget.doc, line) && widget.height != null) {
      var oldHeight = widget.height;
      widget.height = null;
      var dHeight = widgetHeight(widget) - oldHeight;

      if (dHeight) {
        updateLineHeight(line, line.height + dHeight);
      }
    }

    signalLater(cm, "markerChanged", cm, this$1);
  });
};

TextMarker.prototype.attachLine = function (line) {
  if (!this.lines.length && this.doc.cm) {
    var op = this.doc.cm.curOp;

    if (!op.maybeHiddenMarkers || indexOf(op.maybeHiddenMarkers, this) == -1) {
      (op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this);
    }
  }

  this.lines.push(line);
};

TextMarker.prototype.detachLine = function (line) {
  this.lines.splice(indexOf(this.lines, line), 1);

  if (!this.lines.length && this.doc.cm) {
    var op = this.doc.cm.curOp;
    (op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this);
  }
};

eventMixin(TextMarker); // Create a marker, wire it up to the right lines, and

function _markText(doc, from, to, options, type) {
  // Shared markers (across linked documents) are handled separately
  // (markTextShared will call out to this again, once per
  // document).
  if (options && options.shared) {
    return markTextShared(doc, from, to, options, type);
  } // Ensure we are in an operation.


  if (doc.cm && !doc.cm.curOp) {
    return operation(doc.cm, _markText)(doc, from, to, options, type);
  }

  var marker = new TextMarker(doc, type),
      diff = cmp(from, to);

  if (options) {
    copyObj(options, marker, false);
  } // Don't connect empty markers unless clearWhenEmpty is false


  if (diff > 0 || diff == 0 && marker.clearWhenEmpty !== false) {
    return marker;
  }

  if (marker.replacedWith) {
    // Showing up as a widget implies collapsed (widget replaces text)
    marker.collapsed = true;
    marker.widgetNode = eltP("span", [marker.replacedWith], "CodeMirror-widget");

    if (!options.handleMouseEvents) {
      marker.widgetNode.setAttribute("cm-ignore-events", "true");
    }

    if (options.insertLeft) {
      marker.widgetNode.insertLeft = true;
    }
  }

  if (marker.collapsed) {
    if (conflictingCollapsedRange(doc, from.line, from, to, marker) || from.line != to.line && conflictingCollapsedRange(doc, to.line, from, to, marker)) {
      throw new Error("Inserting collapsed marker partially overlapping an existing one");
    }

    seeCollapsedSpans();
  }

  if (marker.addToHistory) {
    addChangeToHistory(doc, {
      from: from,
      to: to,
      origin: "markText"
    }, doc.sel, NaN);
  }

  var curLine = from.line,
      cm = doc.cm,
      updateMaxLine;
  doc.iter(curLine, to.line + 1, function (line) {
    if (cm && marker.collapsed && !cm.options.lineWrapping && visualLine(line) == cm.display.maxLine) {
      updateMaxLine = true;
    }

    if (marker.collapsed && curLine != from.line) {
      updateLineHeight(line, 0);
    }

    addMarkedSpan(line, new MarkedSpan(marker, curLine == from.line ? from.ch : null, curLine == to.line ? to.ch : null));
    ++curLine;
  }); // lineIsHidden depends on the presence of the spans, so needs a second pass

  if (marker.collapsed) {
    doc.iter(from.line, to.line + 1, function (line) {
      if (lineIsHidden(doc, line)) {
        updateLineHeight(line, 0);
      }
    });
  }

  if (marker.clearOnEnter) {
    on(marker, "beforeCursorEnter", function () {
      return marker.clear();
    });
  }

  if (marker.readOnly) {
    seeReadOnlySpans();

    if (doc.history.done.length || doc.history.undone.length) {
      doc.clearHistory();
    }
  }

  if (marker.collapsed) {
    marker.id = ++nextMarkerId;
    marker.atomic = true;
  }

  if (cm) {
    // Sync src state
    if (updateMaxLine) {
      cm.curOp.updateMaxLine = true;
    }

    if (marker.collapsed) {
      regChange(cm, from.line, to.line + 1);
    } else if (marker.className || marker.startStyle || marker.endStyle || marker.css || marker.attributes || marker.title) {
      for (var i = from.line; i <= to.line; i++) {
        regLineChange(cm, i, "text");
      }
    }

    if (marker.atomic) {
      reCheckSelection(cm.doc);
    }

    signalLater(cm, "markerAdded", cm, marker);
  }

  return marker;
} // SHARED TEXTMARKERS
// A shared marker spans multiple linked documents. It is
// implemented as a meta-marker-object controlling multiple normal
// markers.


var SharedTextMarker = function SharedTextMarker(markers, primary) {
  var this$1 = this;
  this.markers = markers;
  this.primary = primary;

  for (var i = 0; i < markers.length; ++i) {
    markers[i].parent = this$1;
  }
};

SharedTextMarker.prototype.clear = function () {
  var this$1 = this;

  if (this.explicitlyCleared) {
    return;
  }

  this.explicitlyCleared = true;

  for (var i = 0; i < this.markers.length; ++i) {
    this$1.markers[i].clear();
  }

  signalLater(this, "clear");
};

SharedTextMarker.prototype.find = function (side, lineObj) {
  return this.primary.find(side, lineObj);
};

eventMixin(SharedTextMarker);

function markTextShared(doc, from, to, options, type) {
  options = copyObj(options);
  options.shared = false;
  var markers = [_markText(doc, from, to, options, type)],
      primary = markers[0];
  var widget = options.widgetNode;
  linkedDocs(doc, function (doc) {
    if (widget) {
      options.widgetNode = widget.cloneNode(true);
    }

    markers.push(_markText(doc, _clipPos(doc, from), _clipPos(doc, to), options, type));

    for (var i = 0; i < doc.linked.length; ++i) {
      if (doc.linked[i].isParent) {
        return;
      }
    }

    primary = lst(markers);
  });
  return new SharedTextMarker(markers, primary);
}

function findSharedMarkers(doc) {
  return doc.findMarks(Pos(doc.first, 0), doc.clipPos(Pos(doc.lastLine())), function (m) {
    return m.parent;
  });
}

function copySharedMarkers(doc, markers) {
  for (var i = 0; i < markers.length; i++) {
    var marker = markers[i],
        pos = marker.find();
    var mFrom = doc.clipPos(pos.from),
        mTo = doc.clipPos(pos.to);

    if (cmp(mFrom, mTo)) {
      var subMark = _markText(doc, mFrom, mTo, marker.primary, marker.primary.type);

      marker.markers.push(subMark);
      subMark.parent = marker;
    }
  }
}

function detachSharedMarkers(markers) {
  var loop = function loop(i) {
    var marker = markers[i],
        linked = [marker.primary.doc];
    linkedDocs(marker.primary.doc, function (d) {
      return linked.push(d);
    });

    for (var j = 0; j < marker.markers.length; j++) {
      var subMarker = marker.markers[j];

      if (indexOf(linked, subMarker.doc) == -1) {
        subMarker.parent = null;
        marker.markers.splice(j--, 1);
      }
    }
  };

  for (var i = 0; i < markers.length; i++) {
    loop(i);
  }
}

var nextDocId = 0;

var Doc = function Doc(text, mode, firstLine, lineSep, direction) {
  if (!(this instanceof Doc)) {
    return new Doc(text, mode, firstLine, lineSep, direction);
  }

  if (firstLine == null) {
    firstLine = 0;
  }

  BranchChunk.call(this, [new LeafChunk([new Line("", null)])]);
  this.first = firstLine;
  this.scrollTop = this.scrollLeft = 0;
  this.cantEdit = false;
  this.cleanGeneration = 1;
  this.modeFrontier = this.highlightFrontier = firstLine;
  var start = Pos(firstLine, 0);
  this.sel = simpleSelection(start);
  this.history = new History(null);
  this.id = ++nextDocId;
  this.modeOption = mode;
  this.lineSep = lineSep;
  this.direction = direction == "rtl" ? "rtl" : "ltr";
  this.extend = false;

  if (typeof text == "string") {
    text = this.splitLines(text);
  }

  updateDoc(this, {
    from: start,
    to: start,
    text: text
  });
  setSelection(this, simpleSelection(start), sel_dontScroll);
};

Doc.prototype = createObj(BranchChunk.prototype, {
  constructor: Doc,
  // Iterate over the document. Supports two forms -- with only one
  // argument, it calls that for each line in the document. With
  // three, it iterates over the range given by the first two (with
  // the second being non-inclusive).
  iter: function iter(from, to, op) {
    if (op) {
      this.iterN(from - this.first, to - from, op);
    } else {
      this.iterN(this.first, this.first + this.size, from);
    }
  },
  // Non-public interface for adding and removing lines.
  insert: function insert(at, lines) {
    var height = 0;

    for (var i = 0; i < lines.length; ++i) {
      height += lines[i].height;
    }

    this.insertInner(at - this.first, lines, height);
  },
  remove: function remove(at, n) {
    this.removeInner(at - this.first, n);
  },
  getValue: function getValue(lineSep) {
    var lines = getLines(this, this.first, this.first + this.size);

    if (lineSep === false) {
      return lines;
    }

    return lines.join(lineSep || this.lineSeparator());
  },
  setValue: docMethodOp(function (code) {
    var top = Pos(this.first, 0),
        last = this.first + this.size - 1;
    makeChange(this, {
      from: top,
      to: Pos(last, getLine(this, last).text.length),
      text: this.splitLines(code),
      origin: "setValue",
      full: true
    }, true);

    if (this.cm) {
      scrollToCoords(this.cm, 0, 0);
    }

    setSelection(this, simpleSelection(top), sel_dontScroll);
  }),
  replaceRange: function replaceRange(code, from, to, origin) {
    from = _clipPos(this, from);
    to = to ? _clipPos(this, to) : from;

    _replaceRange(this, code, from, to, origin);
  },
  getRange: function getRange(from, to, lineSep) {
    var lines = getBetween(this, _clipPos(this, from), _clipPos(this, to));

    if (lineSep === false) {
      return lines;
    }

    return lines.join(lineSep || this.lineSeparator());
  },
  getLine: function getLine(line) {
    var l = this.getLineHandle(line);
    return l && l.text;
  },
  getLineHandle: function getLineHandle(line) {
    if (isLine(this, line)) {
      return getLine(this, line);
    }
  },
  getLineNumber: function getLineNumber(line) {
    return lineNo(line);
  },
  getLineHandleVisualStart: function getLineHandleVisualStart(line) {
    if (typeof line == "number") {
      line = getLine(this, line);
    }

    return visualLine(line);
  },
  lineCount: function lineCount() {
    return this.size;
  },
  firstLine: function firstLine() {
    return this.first;
  },
  lastLine: function lastLine() {
    return this.first + this.size - 1;
  },
  clipPos: function clipPos(pos) {
    return _clipPos(this, pos);
  },
  getCursor: function getCursor(start) {
    var range$$1 = this.sel.primary(),
        pos;

    if (start == null || start == "head") {
      pos = range$$1.head;
    } else if (start == "anchor") {
      pos = range$$1.anchor;
    } else if (start == "end" || start == "to" || start === false) {
      pos = range$$1.to();
    } else {
      pos = range$$1.from();
    }

    return pos;
  },
  listSelections: function listSelections() {
    return this.sel.ranges;
  },
  somethingSelected: function somethingSelected() {
    return this.sel.somethingSelected();
  },
  setCursor: docMethodOp(function (line, ch, options) {
    setSimpleSelection(this, _clipPos(this, typeof line == "number" ? Pos(line, ch || 0) : line), null, options);
  }),
  setSelection: docMethodOp(function (anchor, head, options) {
    setSimpleSelection(this, _clipPos(this, anchor), _clipPos(this, head || anchor), options);
  }),
  extendSelection: docMethodOp(function (head, other, options) {
    extendSelection(this, _clipPos(this, head), other && _clipPos(this, other), options);
  }),
  extendSelections: docMethodOp(function (heads, options) {
    extendSelections(this, clipPosArray(this, heads), options);
  }),
  extendSelectionsBy: docMethodOp(function (f, options) {
    var heads = map(this.sel.ranges, f);
    extendSelections(this, clipPosArray(this, heads), options);
  }),
  setSelections: docMethodOp(function (ranges, primary, options) {
    var this$1 = this;

    if (!ranges.length) {
      return;
    }

    var out = [];

    for (var i = 0; i < ranges.length; i++) {
      out[i] = new Range(_clipPos(this$1, ranges[i].anchor), _clipPos(this$1, ranges[i].head));
    }

    if (primary == null) {
      primary = Math.min(ranges.length - 1, this.sel.primIndex);
    }

    setSelection(this, normalizeSelection(this.cm, out, primary), options);
  }),
  addSelection: docMethodOp(function (anchor, head, options) {
    var ranges = this.sel.ranges.slice(0);
    ranges.push(new Range(_clipPos(this, anchor), _clipPos(this, head || anchor)));
    setSelection(this, normalizeSelection(this.cm, ranges, ranges.length - 1), options);
  }),
  getSelection: function getSelection(lineSep) {
    var this$1 = this;
    var ranges = this.sel.ranges,
        lines;

    for (var i = 0; i < ranges.length; i++) {
      var sel = getBetween(this$1, ranges[i].from(), ranges[i].to());
      lines = lines ? lines.concat(sel) : sel;
    }

    if (lineSep === false) {
      return lines;
    } else {
      return lines.join(lineSep || this.lineSeparator());
    }
  },
  getSelections: function getSelections(lineSep) {
    var this$1 = this;
    var parts = [],
        ranges = this.sel.ranges;

    for (var i = 0; i < ranges.length; i++) {
      var sel = getBetween(this$1, ranges[i].from(), ranges[i].to());

      if (lineSep !== false) {
        sel = sel.join(lineSep || this$1.lineSeparator());
      }

      parts[i] = sel;
    }

    return parts;
  },
  replaceSelection: function replaceSelection(code, collapse, origin) {
    var dup = [];

    for (var i = 0; i < this.sel.ranges.length; i++) {
      dup[i] = code;
    }

    this.replaceSelections(dup, collapse, origin || "+input");
  },
  replaceSelections: docMethodOp(function (code, collapse, origin) {
    var this$1 = this;
    var changes = [],
        sel = this.sel;

    for (var i = 0; i < sel.ranges.length; i++) {
      var range$$1 = sel.ranges[i];
      changes[i] = {
        from: range$$1.from(),
        to: range$$1.to(),
        text: this$1.splitLines(code[i]),
        origin: origin
      };
    }

    var newSel = collapse && collapse != "end" && computeReplacedSel(this, changes, collapse);

    for (var i$1 = changes.length - 1; i$1 >= 0; i$1--) {
      makeChange(this$1, changes[i$1]);
    }

    if (newSel) {
      setSelectionReplaceHistory(this, newSel);
    } else if (this.cm) {
      ensureCursorVisible(this.cm);
    }
  }),
  undo: docMethodOp(function () {
    makeChangeFromHistory(this, "undo");
  }),
  redo: docMethodOp(function () {
    makeChangeFromHistory(this, "redo");
  }),
  undoSelection: docMethodOp(function () {
    makeChangeFromHistory(this, "undo", true);
  }),
  redoSelection: docMethodOp(function () {
    makeChangeFromHistory(this, "redo", true);
  }),
  setExtending: function setExtending(val) {
    this.extend = val;
  },
  getExtending: function getExtending() {
    return this.extend;
  },
  historySize: function historySize() {
    var hist = this.history,
        done = 0,
        undone = 0;

    for (var i = 0; i < hist.done.length; i++) {
      if (!hist.done[i].ranges) {
        ++done;
      }
    }

    for (var i$1 = 0; i$1 < hist.undone.length; i$1++) {
      if (!hist.undone[i$1].ranges) {
        ++undone;
      }
    }

    return {
      undo: done,
      redo: undone
    };
  },
  clearHistory: function clearHistory() {
    this.history = new History(this.history.maxGeneration);
  },
  markClean: function markClean() {
    this.cleanGeneration = this.changeGeneration(true);
  },
  changeGeneration: function changeGeneration(forceSplit) {
    if (forceSplit) {
      this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null;
    }

    return this.history.generation;
  },
  isClean: function isClean(gen) {
    return this.history.generation == (gen || this.cleanGeneration);
  },
  getHistory: function getHistory() {
    return {
      done: copyHistoryArray(this.history.done),
      undone: copyHistoryArray(this.history.undone)
    };
  },
  setHistory: function setHistory(histData) {
    var hist = this.history = new History(this.history.maxGeneration);
    hist.done = copyHistoryArray(histData.done.slice(0), null, true);
    hist.undone = copyHistoryArray(histData.undone.slice(0), null, true);
  },
  setGutterMarker: docMethodOp(function (line, gutterID, value) {
    return changeLine(this, line, "gutter", function (line) {
      var markers = line.gutterMarkers || (line.gutterMarkers = {});
      markers[gutterID] = value;

      if (!value && isEmpty(markers)) {
        line.gutterMarkers = null;
      }

      return true;
    });
  }),
  clearGutter: docMethodOp(function (gutterID) {
    var this$1 = this;
    this.iter(function (line) {
      if (line.gutterMarkers && line.gutterMarkers[gutterID]) {
        changeLine(this$1, line, "gutter", function () {
          line.gutterMarkers[gutterID] = null;

          if (isEmpty(line.gutterMarkers)) {
            line.gutterMarkers = null;
          }

          return true;
        });
      }
    });
  }),
  lineInfo: function lineInfo(line) {
    var n;

    if (typeof line == "number") {
      if (!isLine(this, line)) {
        return null;
      }

      n = line;
      line = getLine(this, line);

      if (!line) {
        return null;
      }
    } else {
      n = lineNo(line);

      if (n == null) {
        return null;
      }
    }

    return {
      line: n,
      handle: line,
      text: line.text,
      gutterMarkers: line.gutterMarkers,
      textClass: line.textClass,
      bgClass: line.bgClass,
      wrapClass: line.wrapClass,
      widgets: line.widgets
    };
  },
  addLineClass: docMethodOp(function (handle, where, cls) {
    return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function (line) {
      var prop = where == "text" ? "textClass" : where == "background" ? "bgClass" : where == "gutter" ? "gutterClass" : "wrapClass";

      if (!line[prop]) {
        line[prop] = cls;
      } else if (classTest(cls).test(line[prop])) {
        return false;
      } else {
        line[prop] += " " + cls;
      }

      return true;
    });
  }),
  removeLineClass: docMethodOp(function (handle, where, cls) {
    return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function (line) {
      var prop = where == "text" ? "textClass" : where == "background" ? "bgClass" : where == "gutter" ? "gutterClass" : "wrapClass";
      var cur = line[prop];

      if (!cur) {
        return false;
      } else if (cls == null) {
        line[prop] = null;
      } else {
        var found = cur.match(classTest(cls));

        if (!found) {
          return false;
        }

        var end = found.index + found[0].length;
        line[prop] = cur.slice(0, found.index) + (!found.index || end == cur.length ? "" : " ") + cur.slice(end) || null;
      }

      return true;
    });
  }),
  addLineWidget: docMethodOp(function (handle, node, options) {
    return addLineWidget(this, handle, node, options);
  }),
  removeLineWidget: function removeLineWidget(widget) {
    widget.clear();
  },
  markText: function markText(from, to, options) {
    return _markText(this, _clipPos(this, from), _clipPos(this, to), options, options && options.type || "range");
  },
  setBookmark: function setBookmark(pos, options) {
    var realOpts = {
      replacedWith: options && (options.nodeType == null ? options.widget : options),
      insertLeft: options && options.insertLeft,
      clearWhenEmpty: false,
      shared: options && options.shared,
      handleMouseEvents: options && options.handleMouseEvents
    };
    pos = _clipPos(this, pos);
    return _markText(this, pos, pos, realOpts, "bookmark");
  },
  findMarksAt: function findMarksAt(pos) {
    pos = _clipPos(this, pos);
    var markers = [],
        spans = getLine(this, pos.line).markedSpans;

    if (spans) {
      for (var i = 0; i < spans.length; ++i) {
        var span = spans[i];

        if ((span.from == null || span.from <= pos.ch) && (span.to == null || span.to >= pos.ch)) {
          markers.push(span.marker.parent || span.marker);
        }
      }
    }

    return markers;
  },
  findMarks: function findMarks(from, to, filter) {
    from = _clipPos(this, from);
    to = _clipPos(this, to);
    var found = [],
        lineNo$$1 = from.line;
    this.iter(from.line, to.line + 1, function (line) {
      var spans = line.markedSpans;

      if (spans) {
        for (var i = 0; i < spans.length; i++) {
          var span = spans[i];

          if (!(span.to != null && lineNo$$1 == from.line && from.ch >= span.to || span.from == null && lineNo$$1 != from.line || span.from != null && lineNo$$1 == to.line && span.from >= to.ch) && (!filter || filter(span.marker))) {
            found.push(span.marker.parent || span.marker);
          }
        }
      }

      ++lineNo$$1;
    });
    return found;
  },
  getAllMarks: function getAllMarks() {
    var markers = [];
    this.iter(function (line) {
      var sps = line.markedSpans;

      if (sps) {
        for (var i = 0; i < sps.length; ++i) {
          if (sps[i].from != null) {
            markers.push(sps[i].marker);
          }
        }
      }
    });
    return markers;
  },
  posFromIndex: function posFromIndex(off) {
    var ch,
        lineNo$$1 = this.first,
        sepSize = this.lineSeparator().length;
    this.iter(function (line) {
      var sz = line.text.length + sepSize;

      if (sz > off) {
        ch = off;
        return true;
      }

      off -= sz;
      ++lineNo$$1;
    });
    return _clipPos(this, Pos(lineNo$$1, ch));
  },
  indexFromPos: function indexFromPos(coords) {
    coords = _clipPos(this, coords);
    var index = coords.ch;

    if (coords.line < this.first || coords.ch < 0) {
      return 0;
    }

    var sepSize = this.lineSeparator().length;
    this.iter(this.first, coords.line, function (line) {
      // iter aborts when callback returns a truthy value
      index += line.text.length + sepSize;
    });
    return index;
  },
  copy: function copy(copyHistory) {
    var doc = new Doc(getLines(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction);
    doc.scrollTop = this.scrollTop;
    doc.scrollLeft = this.scrollLeft;
    doc.sel = this.sel;
    doc.extend = false;

    if (copyHistory) {
      doc.history.undoDepth = this.history.undoDepth;
      doc.setHistory(this.getHistory());
    }

    return doc;
  },
  linkedDoc: function linkedDoc(options) {
    if (!options) {
      options = {};
    }

    var from = this.first,
        to = this.first + this.size;

    if (options.from != null && options.from > from) {
      from = options.from;
    }

    if (options.to != null && options.to < to) {
      to = options.to;
    }

    var copy = new Doc(getLines(this, from, to), options.mode || this.modeOption, from, this.lineSep, this.direction);

    if (options.sharedHist) {
      copy.history = this.history;
    }

    (this.linked || (this.linked = [])).push({
      doc: copy,
      sharedHist: options.sharedHist
    });
    copy.linked = [{
      doc: this,
      isParent: true,
      sharedHist: options.sharedHist
    }];
    copySharedMarkers(copy, findSharedMarkers(this));
    return copy;
  },
  unlinkDoc: function unlinkDoc(other) {
    var this$1 = this;

    if (other instanceof CodeMirror) {
      other = other.doc;
    }

    if (this.linked) {
      for (var i = 0; i < this.linked.length; ++i) {
        var link = this$1.linked[i];

        if (link.doc != other) {
          continue;
        }

        this$1.linked.splice(i, 1);
        other.unlinkDoc(this$1);
        detachSharedMarkers(findSharedMarkers(this$1));
        break;
      }
    } // If the histories were shared, split them again


    if (other.history == this.history) {
      var splitIds = [other.id];
      linkedDocs(other, function (doc) {
        return splitIds.push(doc.id);
      }, true);
      other.history = new History(null);
      other.history.done = copyHistoryArray(this.history.done, splitIds);
      other.history.undone = copyHistoryArray(this.history.undone, splitIds);
    }
  },
  iterLinkedDocs: function iterLinkedDocs(f) {
    linkedDocs(this, f);
  },
  getMode: function getMode() {
    return this.mode;
  },
  getEditor: function getEditor() {
    return this.cm;
  },
  splitLines: function splitLines(str) {
    if (this.lineSep) {
      return str.split(this.lineSep);
    }

    return splitLinesAuto(str);
  },
  lineSeparator: function lineSeparator() {
    return this.lineSep || "\n";
  },
  setDirection: docMethodOp(function (dir) {
    if (dir != "rtl") {
      dir = "ltr";
    }

    if (dir == this.direction) {
      return;
    }

    this.direction = dir;
    this.iter(function (line) {
      return line.order = null;
    });

    if (this.cm) {
      directionChanged(this.cm);
    }
  })
}); // Public alias.

Doc.prototype.eachLine = Doc.prototype.iter; // Kludge to work around strange IE behavior where it'll sometimes
// re-fire a series of drag-related events right after the drop (#1551)

var lastDrop = 0;

function onDrop(e) {
  var cm = this;
  clearDragCursor(cm);

  if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) {
    return;
  }

  e_preventDefault(e);

  if (ie) {
    lastDrop = +new Date();
  }

  var pos = posFromMouse(cm, e, true),
      files = e.dataTransfer.files;

  if (!pos || cm.isReadOnly()) {
    return;
  } // Might be a file drop, in which case we simply extract the text
  // and insert it.


  if (files && files.length && window.FileReader && window.File) {
    var n = files.length,
        text = Array(n),
        read = 0;

    var loadFile = function loadFile(file, i) {
      if (cm.options.allowDropFileTypes && indexOf(cm.options.allowDropFileTypes, file.type) == -1) {
        return;
      }

      var reader = new FileReader();
      reader.onload = operation(cm, function () {
        var content = reader.result;

        if (/[\x00-\x08\x0e-\x1f]{2}/.test(content)) {
          content = "";
        }

        text[i] = content;

        if (++read == n) {
          pos = _clipPos(cm.doc, pos);
          var change = {
            from: pos,
            to: pos,
            text: cm.doc.splitLines(text.join(cm.doc.lineSeparator())),
            origin: "paste"
          };
          makeChange(cm.doc, change);
          setSelectionReplaceHistory(cm.doc, simpleSelection(pos, changeEnd(change)));
        }
      });
      reader.readAsText(file);
    };

    for (var i = 0; i < n; ++i) {
      loadFile(files[i], i);
    }
  } else {
    // Normal drop
    // Don't do a replace if the drop happened inside of the selected text.
    if (cm.state.draggingText && cm.doc.sel.contains(pos) > -1) {
      cm.state.draggingText(e); // Ensure the src is re-focused

      setTimeout(function () {
        return cm.display.input.focus();
      }, 20);
      return;
    }

    try {
      var text$1 = e.dataTransfer.getData("Text");

      if (text$1) {
        var selected;

        if (cm.state.draggingText && !cm.state.draggingText.copy) {
          selected = cm.listSelections();
        }

        setSelectionNoUndo(cm.doc, simpleSelection(pos, pos));

        if (selected) {
          for (var i$1 = 0; i$1 < selected.length; ++i$1) {
            _replaceRange(cm.doc, "", selected[i$1].anchor, selected[i$1].head, "drag");
          }
        }

        cm.replaceSelection(text$1, "around", "paste");
        cm.display.input.focus();
      }
    } catch (e) {}
  }
}

function onDragStart(cm, e) {
  if (ie && (!cm.state.draggingText || +new Date() - lastDrop < 100)) {
    e_stop(e);
    return;
  }

  if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) {
    return;
  }

  e.dataTransfer.setData("Text", cm.getSelection());
  e.dataTransfer.effectAllowed = "copyMove"; // Use dummy image instead of default browsers image.
  // Recent Safari (~6.0.2) have a tendency to segfault when this happens, so we don't do it there.

  if (e.dataTransfer.setDragImage && !safari) {
    var img = elt("img", null, null, "position: fixed; left: 0; top: 0;");
    img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

    if (presto) {
      img.width = img.height = 1;
      cm.display.wrapper.appendChild(img); // Force a relayout, or Opera won't use our image for some obscure reason

      img._top = img.offsetTop;
    }

    e.dataTransfer.setDragImage(img, 0, 0);

    if (presto) {
      img.parentNode.removeChild(img);
    }
  }
}

function onDragOver(cm, e) {
  var pos = posFromMouse(cm, e);

  if (!pos) {
    return;
  }

  var frag = document.createDocumentFragment();
  drawSelectionCursor(cm, pos, frag);

  if (!cm.display.dragCursor) {
    cm.display.dragCursor = elt("div", null, "CodeMirror-cursors CodeMirror-dragcursors");
    cm.display.lineSpace.insertBefore(cm.display.dragCursor, cm.display.cursorDiv);
  }

  removeChildrenAndAdd(cm.display.dragCursor, frag);
}

function clearDragCursor(cm) {
  if (cm.display.dragCursor) {
    cm.display.lineSpace.removeChild(cm.display.dragCursor);
    cm.display.dragCursor = null;
  }
} // These must be handled carefully, because naively registering a
// handler for each src will cause the editors to never be
// garbage collected.


function forEachCodeMirror(f) {
  if (!document.getElementsByClassName) {
    return;
  }

  var byClass = document.getElementsByClassName("CodeMirror"),
      editors = [];

  for (var i = 0; i < byClass.length; i++) {
    var cm = byClass[i].CodeMirror;

    if (cm) {
      editors.push(cm);
    }
  }

  if (editors.length) {
    editors[0].operation(function () {
      for (var i = 0; i < editors.length; i++) {
        f(editors[i]);
      }
    });
  }
}

var globalsRegistered = false;

function ensureGlobalHandlers() {
  if (globalsRegistered) {
    return;
  }

  registerGlobalHandlers();
  globalsRegistered = true;
}

function registerGlobalHandlers() {
  // When the window resizes, we need to refresh active editors.
  var resizeTimer;
  on(window, "resize", function () {
    if (resizeTimer == null) {
      resizeTimer = setTimeout(function () {
        resizeTimer = null;
        forEachCodeMirror(onResize);
      }, 100);
    }
  }); // When the window loses focus, we want to show the src as blurred

  on(window, "blur", function () {
    return forEachCodeMirror(onBlur);
  });
} // Called when the window resizes


function onResize(cm) {
  var d = cm.display; // Might be a text scaling operation, clear size caches.

  d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;
  d.scrollbarsClipped = false;
  cm.setSize();
}

var keyNames = {
  3: "Pause",
  8: "Backspace",
  9: "Tab",
  13: "Enter",
  16: "Shift",
  17: "Ctrl",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Esc",
  32: "Space",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "Left",
  38: "Up",
  39: "Right",
  40: "Down",
  44: "PrintScrn",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Mod",
  92: "Mod",
  93: "Mod",
  106: "*",
  107: "=",
  109: "-",
  110: ".",
  111: "/",
  145: "ScrollLock",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'",
  63232: "Up",
  63233: "Down",
  63234: "Left",
  63235: "Right",
  63272: "Delete",
  63273: "Home",
  63275: "End",
  63276: "PageUp",
  63277: "PageDown",
  63302: "Insert"
}; // Number keys

for (var i = 0; i < 10; i++) {
  keyNames[i + 48] = keyNames[i + 96] = String(i);
} // Alphabetic keys


for (var i$1 = 65; i$1 <= 90; i$1++) {
  keyNames[i$1] = String.fromCharCode(i$1);
} // Function keys


for (var i$2 = 1; i$2 <= 12; i$2++) {
  keyNames[i$2 + 111] = keyNames[i$2 + 63235] = "F" + i$2;
}

var keyMap = {};
keyMap.basic = {
  "Left": "goCharLeft",
  "Right": "goCharRight",
  "Up": "goLineUp",
  "Down": "goLineDown",
  "End": "goLineEnd",
  "Home": "goLineStartSmart",
  "PageUp": "goPageUp",
  "PageDown": "goPageDown",
  "Delete": "delCharAfter",
  "Backspace": "delCharBefore",
  "Shift-Backspace": "delCharBefore",
  "Tab": "defaultTab",
  "Shift-Tab": "indentAuto",
  "Enter": "newlineAndIndent",
  "Insert": "toggleOverwrite",
  "Esc": "singleSelection"
}; // Note that the save and find-related commands aren't defined by
// default. User code or addons can define them. Unknown commands
// are simply ignored.

keyMap.pcDefault = {
  "Ctrl-A": "selectAll",
  "Ctrl-D": "deleteLine",
  "Ctrl-Z": "undo",
  "Shift-Ctrl-Z": "redo",
  "Ctrl-Y": "redo",
  "Ctrl-Home": "goDocStart",
  "Ctrl-End": "goDocEnd",
  "Ctrl-Up": "goLineUp",
  "Ctrl-Down": "goLineDown",
  "Ctrl-Left": "goGroupLeft",
  "Ctrl-Right": "goGroupRight",
  "Alt-Left": "goLineStart",
  "Alt-Right": "goLineEnd",
  "Ctrl-Backspace": "delGroupBefore",
  "Ctrl-Delete": "delGroupAfter",
  "Ctrl-S": "save",
  "Ctrl-F": "find",
  "Ctrl-G": "findNext",
  "Shift-Ctrl-G": "findPrev",
  "Shift-Ctrl-F": "replace",
  "Shift-Ctrl-R": "replaceAll",
  "Ctrl-[": "indentLess",
  "Ctrl-]": "indentMore",
  "Ctrl-U": "undoSelection",
  "Shift-Ctrl-U": "redoSelection",
  "Alt-U": "redoSelection",
  "fallthrough": "basic"
}; // Very basic readline/emacs-style bindings, which are standard on Mac.

keyMap.emacsy = {
  "Ctrl-F": "goCharRight",
  "Ctrl-B": "goCharLeft",
  "Ctrl-P": "goLineUp",
  "Ctrl-N": "goLineDown",
  "Alt-F": "goWordRight",
  "Alt-B": "goWordLeft",
  "Ctrl-A": "goLineStart",
  "Ctrl-E": "goLineEnd",
  "Ctrl-V": "goPageDown",
  "Shift-Ctrl-V": "goPageUp",
  "Ctrl-D": "delCharAfter",
  "Ctrl-H": "delCharBefore",
  "Alt-D": "delWordAfter",
  "Alt-Backspace": "delWordBefore",
  "Ctrl-K": "killLine",
  "Ctrl-T": "transposeChars",
  "Ctrl-O": "openLine"
};
keyMap.macDefault = {
  "Cmd-A": "selectAll",
  "Cmd-D": "deleteLine",
  "Cmd-Z": "undo",
  "Shift-Cmd-Z": "redo",
  "Cmd-Y": "redo",
  "Cmd-Home": "goDocStart",
  "Cmd-Up": "goDocStart",
  "Cmd-End": "goDocEnd",
  "Cmd-Down": "goDocEnd",
  "Alt-Left": "goGroupLeft",
  "Alt-Right": "goGroupRight",
  "Cmd-Left": "goLineLeft",
  "Cmd-Right": "goLineRight",
  "Alt-Backspace": "delGroupBefore",
  "Ctrl-Alt-Backspace": "delGroupAfter",
  "Alt-Delete": "delGroupAfter",
  "Cmd-S": "save",
  "Cmd-F": "find",
  "Cmd-G": "findNext",
  "Shift-Cmd-G": "findPrev",
  "Cmd-Alt-F": "replace",
  "Shift-Cmd-Alt-F": "replaceAll",
  "Cmd-[": "indentLess",
  "Cmd-]": "indentMore",
  "Cmd-Backspace": "delWrappedLineLeft",
  "Cmd-Delete": "delWrappedLineRight",
  "Cmd-U": "undoSelection",
  "Shift-Cmd-U": "redoSelection",
  "Ctrl-Up": "goDocStart",
  "Ctrl-Down": "goDocEnd",
  "fallthrough": ["basic", "emacsy"]
};
keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault; // KEYMAP DISPATCH

function normalizeKeyName(name) {
  var parts = name.split(/-(?!$)/);
  name = parts[parts.length - 1];
  var alt, ctrl, shift, cmd;

  for (var i = 0; i < parts.length - 1; i++) {
    var mod = parts[i];

    if (/^(cmd|meta|m)$/i.test(mod)) {
      cmd = true;
    } else if (/^a(lt)?$/i.test(mod)) {
      alt = true;
    } else if (/^(c|ctrl|control)$/i.test(mod)) {
      ctrl = true;
    } else if (/^s(hift)?$/i.test(mod)) {
      shift = true;
    } else {
      throw new Error("Unrecognized modifier name: " + mod);
    }
  }

  if (alt) {
    name = "Alt-" + name;
  }

  if (ctrl) {
    name = "Ctrl-" + name;
  }

  if (cmd) {
    name = "Cmd-" + name;
  }

  if (shift) {
    name = "Shift-" + name;
  }

  return name;
} // This is a kludge to keep keymaps mostly working as raw objects
// (backwards compatibility) while at the same time support features
// like normalization and multi-stroke key bindings. It compiles a
// new normalized keymap, and then updates the old object to reflect
// this.


function normalizeKeyMap(keymap) {
  var copy = {};

  for (var keyname in keymap) {
    if (keymap.hasOwnProperty(keyname)) {
      var value = keymap[keyname];

      if (/^(name|fallthrough|(de|at)tach)$/.test(keyname)) {
        continue;
      }

      if (value == "...") {
        delete keymap[keyname];
        continue;
      }

      var keys = map(keyname.split(" "), normalizeKeyName);

      for (var i = 0; i < keys.length; i++) {
        var val = void 0,
            name = void 0;

        if (i == keys.length - 1) {
          name = keys.join(" ");
          val = value;
        } else {
          name = keys.slice(0, i + 1).join(" ");
          val = "...";
        }

        var prev = copy[name];

        if (!prev) {
          copy[name] = val;
        } else if (prev != val) {
          throw new Error("Inconsistent bindings for " + name);
        }
      }

      delete keymap[keyname];
    }
  }

  for (var prop in copy) {
    keymap[prop] = copy[prop];
  }

  return keymap;
}

function lookupKey(key, map$$1, handle, context) {
  map$$1 = getKeyMap(map$$1);
  var found = map$$1.call ? map$$1.call(key, context) : map$$1[key];

  if (found === false) {
    return "nothing";
  }

  if (found === "...") {
    return "multi";
  }

  if (found != null && handle(found)) {
    return "handled";
  }

  if (map$$1.fallthrough) {
    if (Object.prototype.toString.call(map$$1.fallthrough) != "[object Array]") {
      return lookupKey(key, map$$1.fallthrough, handle, context);
    }

    for (var i = 0; i < map$$1.fallthrough.length; i++) {
      var result = lookupKey(key, map$$1.fallthrough[i], handle, context);

      if (result) {
        return result;
      }
    }
  }
} // Modifier key presses don't count as 'real' key presses for the
// purpose of keymap fallthrough.


function isModifierKey(value) {
  var name = typeof value == "string" ? value : keyNames[value.keyCode];
  return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod";
}

function addModifierNames(name, event, noShift) {
  var base = name;

  if (event.altKey && base != "Alt") {
    name = "Alt-" + name;
  }

  if ((flipCtrlCmd ? event.metaKey : event.ctrlKey) && base != "Ctrl") {
    name = "Ctrl-" + name;
  }

  if ((flipCtrlCmd ? event.ctrlKey : event.metaKey) && base != "Cmd") {
    name = "Cmd-" + name;
  }

  if (!noShift && event.shiftKey && base != "Shift") {
    name = "Shift-" + name;
  }

  return name;
} // Look up the name of a key as indicated by an event object.


function keyName(event, noShift) {
  if (presto && event.keyCode == 34 && event["char"]) {
    return false;
  }

  var name = keyNames[event.keyCode];

  if (name == null || event.altGraphKey) {
    return false;
  } // Ctrl-ScrollLock has keyCode 3, same as Ctrl-Pause,
  // so we'll use event.code when available (Chrome 48+, FF 38+, Safari 10.1+)


  if (event.keyCode == 3 && event.code) {
    name = event.code;
  }

  return addModifierNames(name, event, noShift);
}

function getKeyMap(val) {
  return typeof val == "string" ? keyMap[val] : val;
} // Helper for deleting text near the selection(s), used to implement
// backspace, delete, and similar functionality.


function deleteNearSelection(cm, compute) {
  var ranges = cm.doc.sel.ranges,
      kill = []; // Build up a set of ranges to kill first, merging overlapping
  // ranges.

  for (var i = 0; i < ranges.length; i++) {
    var toKill = compute(ranges[i]);

    while (kill.length && cmp(toKill.from, lst(kill).to) <= 0) {
      var replaced = kill.pop();

      if (cmp(replaced.from, toKill.from) < 0) {
        toKill.from = replaced.from;
        break;
      }
    }

    kill.push(toKill);
  } // Next, remove those actual ranges.


  runInOp(cm, function () {
    for (var i = kill.length - 1; i >= 0; i--) {
      _replaceRange(cm.doc, "", kill[i].from, kill[i].to, "+delete");
    }

    ensureCursorVisible(cm);
  });
}

function moveCharLogically(line, ch, dir) {
  var target = skipExtendingChars(line.text, ch + dir, dir);
  return target < 0 || target > line.text.length ? null : target;
}

function moveLogically(line, start, dir) {
  var ch = moveCharLogically(line, start.ch, dir);
  return ch == null ? null : new Pos(start.line, ch, dir < 0 ? "after" : "before");
}

function endOfLine(visually, cm, lineObj, lineNo, dir) {
  if (visually) {
    var order = getOrder(lineObj, cm.doc.direction);

    if (order) {
      var part = dir < 0 ? lst(order) : order[0];
      var moveInStorageOrder = dir < 0 == (part.level == 1);
      var sticky = moveInStorageOrder ? "after" : "before";
      var ch;

      if (part.level > 0 || cm.doc.direction == "rtl") {
        var prep = prepareMeasureForLine(cm, lineObj);
        ch = dir < 0 ? lineObj.text.length - 1 : 0;
        var targetTop = measureCharPrepared(cm, prep, ch).top;
        ch = findFirst(function (ch) {
          return measureCharPrepared(cm, prep, ch).top == targetTop;
        }, dir < 0 == (part.level == 1) ? part.from : part.to - 1, ch);

        if (sticky == "before") {
          ch = moveCharLogically(lineObj, ch, 1);
        }
      } else {
        ch = dir < 0 ? part.to : part.from;
      }

      return new Pos(lineNo, ch, sticky);
    }
  }

  return new Pos(lineNo, dir < 0 ? lineObj.text.length : 0, dir < 0 ? "before" : "after");
}

function moveVisually(cm, line, start, dir) {
  var bidi = getOrder(line, cm.doc.direction);

  if (!bidi) {
    return moveLogically(line, start, dir);
  }

  if (start.ch >= line.text.length) {
    start.ch = line.text.length;
    start.sticky = "before";
  } else if (start.ch <= 0) {
    start.ch = 0;
    start.sticky = "after";
  }

  var partPos = getBidiPartAt(bidi, start.ch, start.sticky),
      part = bidi[partPos];

  if (cm.doc.direction == "ltr" && part.level % 2 == 0 && (dir > 0 ? part.to > start.ch : part.from < start.ch)) {
    // Case 1: We move within an ltr part in an ltr src. Even with wrapped lines,
    // nothing interesting happens.
    return moveLogically(line, start, dir);
  }

  var mv = function mv(pos, dir) {
    return moveCharLogically(line, pos instanceof Pos ? pos.ch : pos, dir);
  };

  var prep;

  var getWrappedLineExtent = function getWrappedLineExtent(ch) {
    if (!cm.options.lineWrapping) {
      return {
        begin: 0,
        end: line.text.length
      };
    }

    prep = prep || prepareMeasureForLine(cm, line);
    return wrappedLineExtentChar(cm, line, prep, ch);
  };

  var wrappedLineExtent = getWrappedLineExtent(start.sticky == "before" ? mv(start, -1) : start.ch);

  if (cm.doc.direction == "rtl" || part.level == 1) {
    var moveInStorageOrder = part.level == 1 == dir < 0;
    var ch = mv(start, moveInStorageOrder ? 1 : -1);

    if (ch != null && (!moveInStorageOrder ? ch >= part.from && ch >= wrappedLineExtent.begin : ch <= part.to && ch <= wrappedLineExtent.end)) {
      // Case 2: We move within an rtl part or in an rtl src on the same visual line
      var sticky = moveInStorageOrder ? "before" : "after";
      return new Pos(start.line, ch, sticky);
    }
  } // Case 3: Could not move within this bidi part in this visual line, so leave
  // the current bidi part


  var searchInVisualLine = function searchInVisualLine(partPos, dir, wrappedLineExtent) {
    var getRes = function getRes(ch, moveInStorageOrder) {
      return moveInStorageOrder ? new Pos(start.line, mv(ch, 1), "before") : new Pos(start.line, ch, "after");
    };

    for (; partPos >= 0 && partPos < bidi.length; partPos += dir) {
      var part = bidi[partPos];
      var moveInStorageOrder = dir > 0 == (part.level != 1);
      var ch = moveInStorageOrder ? wrappedLineExtent.begin : mv(wrappedLineExtent.end, -1);

      if (part.from <= ch && ch < part.to) {
        return getRes(ch, moveInStorageOrder);
      }

      ch = moveInStorageOrder ? part.from : mv(part.to, -1);

      if (wrappedLineExtent.begin <= ch && ch < wrappedLineExtent.end) {
        return getRes(ch, moveInStorageOrder);
      }
    }
  }; // Case 3a: Look for other bidi parts on the same visual line


  var res = searchInVisualLine(partPos + dir, dir, wrappedLineExtent);

  if (res) {
    return res;
  } // Case 3b: Look for other bidi parts on the next visual line


  var nextCh = dir > 0 ? wrappedLineExtent.end : mv(wrappedLineExtent.begin, -1);

  if (nextCh != null && !(dir > 0 && nextCh == line.text.length)) {
    res = searchInVisualLine(dir > 0 ? 0 : bidi.length - 1, dir, getWrappedLineExtent(nextCh));

    if (res) {
      return res;
    }
  } // Case 4: Nowhere to move


  return null;
} // Commands are parameter-less actions that can be performed on an
// src, mostly used for keybindings.


var commands = {
  selectAll: selectAll,
  singleSelection: function singleSelection(cm) {
    return cm.setSelection(cm.getCursor("anchor"), cm.getCursor("head"), sel_dontScroll);
  },
  killLine: function killLine(cm) {
    return deleteNearSelection(cm, function (range) {
      if (range.empty()) {
        var len = getLine(cm.doc, range.head.line).text.length;

        if (range.head.ch == len && range.head.line < cm.lastLine()) {
          return {
            from: range.head,
            to: Pos(range.head.line + 1, 0)
          };
        } else {
          return {
            from: range.head,
            to: Pos(range.head.line, len)
          };
        }
      } else {
        return {
          from: range.from(),
          to: range.to()
        };
      }
    });
  },
  deleteLine: function deleteLine(cm) {
    return deleteNearSelection(cm, function (range) {
      return {
        from: Pos(range.from().line, 0),
        to: _clipPos(cm.doc, Pos(range.to().line + 1, 0))
      };
    });
  },
  delLineLeft: function delLineLeft(cm) {
    return deleteNearSelection(cm, function (range) {
      return {
        from: Pos(range.from().line, 0),
        to: range.from()
      };
    });
  },
  delWrappedLineLeft: function delWrappedLineLeft(cm) {
    return deleteNearSelection(cm, function (range) {
      var top = cm.charCoords(range.head, "div").top + 5;
      var leftPos = cm.coordsChar({
        left: 0,
        top: top
      }, "div");
      return {
        from: leftPos,
        to: range.from()
      };
    });
  },
  delWrappedLineRight: function delWrappedLineRight(cm) {
    return deleteNearSelection(cm, function (range) {
      var top = cm.charCoords(range.head, "div").top + 5;
      var rightPos = cm.coordsChar({
        left: cm.display.lineDiv.offsetWidth + 100,
        top: top
      }, "div");
      return {
        from: range.from(),
        to: rightPos
      };
    });
  },
  undo: function undo(cm) {
    return cm.undo();
  },
  redo: function redo(cm) {
    return cm.redo();
  },
  undoSelection: function undoSelection(cm) {
    return cm.undoSelection();
  },
  redoSelection: function redoSelection(cm) {
    return cm.redoSelection();
  },
  goDocStart: function goDocStart(cm) {
    return cm.extendSelection(Pos(cm.firstLine(), 0));
  },
  goDocEnd: function goDocEnd(cm) {
    return cm.extendSelection(Pos(cm.lastLine()));
  },
  goLineStart: function goLineStart(cm) {
    return cm.extendSelectionsBy(function (range) {
      return lineStart(cm, range.head.line);
    }, {
      origin: "+move",
      bias: 1
    });
  },
  goLineStartSmart: function goLineStartSmart(cm) {
    return cm.extendSelectionsBy(function (range) {
      return lineStartSmart(cm, range.head);
    }, {
      origin: "+move",
      bias: 1
    });
  },
  goLineEnd: function goLineEnd(cm) {
    return cm.extendSelectionsBy(function (range) {
      return lineEnd(cm, range.head.line);
    }, {
      origin: "+move",
      bias: -1
    });
  },
  goLineRight: function goLineRight(cm) {
    return cm.extendSelectionsBy(function (range) {
      var top = cm.cursorCoords(range.head, "div").top + 5;
      return cm.coordsChar({
        left: cm.display.lineDiv.offsetWidth + 100,
        top: top
      }, "div");
    }, sel_move);
  },
  goLineLeft: function goLineLeft(cm) {
    return cm.extendSelectionsBy(function (range) {
      var top = cm.cursorCoords(range.head, "div").top + 5;
      return cm.coordsChar({
        left: 0,
        top: top
      }, "div");
    }, sel_move);
  },
  goLineLeftSmart: function goLineLeftSmart(cm) {
    return cm.extendSelectionsBy(function (range) {
      var top = cm.cursorCoords(range.head, "div").top + 5;
      var pos = cm.coordsChar({
        left: 0,
        top: top
      }, "div");

      if (pos.ch < cm.getLine(pos.line).search(/\S/)) {
        return lineStartSmart(cm, range.head);
      }

      return pos;
    }, sel_move);
  },
  goLineUp: function goLineUp(cm) {
    return cm.moveV(-1, "line");
  },
  goLineDown: function goLineDown(cm) {
    return cm.moveV(1, "line");
  },
  goPageUp: function goPageUp(cm) {
    return cm.moveV(-1, "page");
  },
  goPageDown: function goPageDown(cm) {
    return cm.moveV(1, "page");
  },
  goCharLeft: function goCharLeft(cm) {
    return cm.moveH(-1, "char");
  },
  goCharRight: function goCharRight(cm) {
    return cm.moveH(1, "char");
  },
  goColumnLeft: function goColumnLeft(cm) {
    return cm.moveH(-1, "column");
  },
  goColumnRight: function goColumnRight(cm) {
    return cm.moveH(1, "column");
  },
  goWordLeft: function goWordLeft(cm) {
    return cm.moveH(-1, "word");
  },
  goGroupRight: function goGroupRight(cm) {
    return cm.moveH(1, "group");
  },
  goGroupLeft: function goGroupLeft(cm) {
    return cm.moveH(-1, "group");
  },
  goWordRight: function goWordRight(cm) {
    return cm.moveH(1, "word");
  },
  delCharBefore: function delCharBefore(cm) {
    return cm.deleteH(-1, "char");
  },
  delCharAfter: function delCharAfter(cm) {
    return cm.deleteH(1, "char");
  },
  delWordBefore: function delWordBefore(cm) {
    return cm.deleteH(-1, "word");
  },
  delWordAfter: function delWordAfter(cm) {
    return cm.deleteH(1, "word");
  },
  delGroupBefore: function delGroupBefore(cm) {
    return cm.deleteH(-1, "group");
  },
  delGroupAfter: function delGroupAfter(cm) {
    return cm.deleteH(1, "group");
  },
  indentAuto: function indentAuto(cm) {
    return cm.indentSelection("smart");
  },
  indentMore: function indentMore(cm) {
    return cm.indentSelection("add");
  },
  indentLess: function indentLess(cm) {
    return cm.indentSelection("subtract");
  },
  insertTab: function insertTab(cm) {
    return cm.replaceSelection("\t");
  },
  insertSoftTab: function insertSoftTab(cm) {
    var spaces = [],
        ranges = cm.listSelections(),
        tabSize = cm.options.tabSize;

    for (var i = 0; i < ranges.length; i++) {
      var pos = ranges[i].from();
      var col = countColumn(cm.getLine(pos.line), pos.ch, tabSize);
      spaces.push(spaceStr(tabSize - col % tabSize));
    }

    cm.replaceSelections(spaces);
  },
  defaultTab: function defaultTab(cm) {
    if (cm.somethingSelected()) {
      cm.indentSelection("add");
    } else {
      cm.execCommand("insertTab");
    }
  },
  // Swap the two chars left and right of each selection's head.
  // Move cursor behind the two swapped characters afterwards.
  //
  // Doesn't consider line feeds a character.
  // Doesn't scan more than one line above to find a character.
  // Doesn't do anything on an empty line.
  // Doesn't do anything with non-empty selections.
  transposeChars: function transposeChars(cm) {
    return runInOp(cm, function () {
      var ranges = cm.listSelections(),
          newSel = [];

      for (var i = 0; i < ranges.length; i++) {
        if (!ranges[i].empty()) {
          continue;
        }

        var cur = ranges[i].head,
            line = getLine(cm.doc, cur.line).text;

        if (line) {
          if (cur.ch == line.length) {
            cur = new Pos(cur.line, cur.ch - 1);
          }

          if (cur.ch > 0) {
            cur = new Pos(cur.line, cur.ch + 1);
            cm.replaceRange(line.charAt(cur.ch - 1) + line.charAt(cur.ch - 2), Pos(cur.line, cur.ch - 2), cur, "+transpose");
          } else if (cur.line > cm.doc.first) {
            var prev = getLine(cm.doc, cur.line - 1).text;

            if (prev) {
              cur = new Pos(cur.line, 1);
              cm.replaceRange(line.charAt(0) + cm.doc.lineSeparator() + prev.charAt(prev.length - 1), Pos(cur.line - 1, prev.length - 1), cur, "+transpose");
            }
          }
        }

        newSel.push(new Range(cur, cur));
      }

      cm.setSelections(newSel);
    });
  },
  newlineAndIndent: function newlineAndIndent(cm) {
    return runInOp(cm, function () {
      var sels = cm.listSelections();

      for (var i = sels.length - 1; i >= 0; i--) {
        cm.replaceRange(cm.doc.lineSeparator(), sels[i].anchor, sels[i].head, "+input");
      }

      sels = cm.listSelections();

      for (var i$1 = 0; i$1 < sels.length; i$1++) {
        cm.indentLine(sels[i$1].from().line, null, true);
      }

      ensureCursorVisible(cm);
    });
  },
  openLine: function openLine(cm) {
    return cm.replaceSelection("\n", "start");
  },
  toggleOverwrite: function toggleOverwrite(cm) {
    return cm.toggleOverwrite();
  }
};

function lineStart(cm, lineN) {
  var line = getLine(cm.doc, lineN);
  var visual = visualLine(line);

  if (visual != line) {
    lineN = lineNo(visual);
  }

  return endOfLine(true, cm, visual, lineN, 1);
}

function lineEnd(cm, lineN) {
  var line = getLine(cm.doc, lineN);
  var visual = visualLineEnd(line);

  if (visual != line) {
    lineN = lineNo(visual);
  }

  return endOfLine(true, cm, line, lineN, -1);
}

function lineStartSmart(cm, pos) {
  var start = lineStart(cm, pos.line);
  var line = getLine(cm.doc, start.line);
  var order = getOrder(line, cm.doc.direction);

  if (!order || order[0].level == 0) {
    var firstNonWS = Math.max(0, line.text.search(/\S/));
    var inWS = pos.line == start.line && pos.ch <= firstNonWS && pos.ch;
    return Pos(start.line, inWS ? 0 : firstNonWS, start.sticky);
  }

  return start;
} // Run a handler that was bound to a key.


function doHandleBinding(cm, bound, dropShift) {
  if (typeof bound == "string") {
    bound = commands[bound];

    if (!bound) {
      return false;
    }
  } // Ensure previous input has been read, so that the handler sees a
  // consistent view of the document


  cm.display.input.ensurePolled();
  var prevShift = cm.display.shift,
      done = false;

  try {
    if (cm.isReadOnly()) {
      cm.state.suppressEdits = true;
    }

    if (dropShift) {
      cm.display.shift = false;
    }

    done = bound(cm) != Pass;
  } finally {
    cm.display.shift = prevShift;
    cm.state.suppressEdits = false;
  }

  return done;
}

function lookupKeyForEditor(cm, name, handle) {
  for (var i = 0; i < cm.state.keyMaps.length; i++) {
    var result = lookupKey(name, cm.state.keyMaps[i], handle, cm);

    if (result) {
      return result;
    }
  }

  return cm.options.extraKeys && lookupKey(name, cm.options.extraKeys, handle, cm) || lookupKey(name, cm.options.keyMap, handle, cm);
} // Note that, despite the name, this function is also used to check
// for bound mouse clicks.


var stopSeq = new Delayed();

function dispatchKey(cm, name, e, handle) {
  var seq = cm.state.keySeq;

  if (seq) {
    if (isModifierKey(name)) {
      return "handled";
    }

    if (/\'$/.test(name)) {
      cm.state.keySeq = null;
    } else {
      stopSeq.set(50, function () {
        if (cm.state.keySeq == seq) {
          cm.state.keySeq = null;
          cm.display.input.reset();
        }
      });
    }

    if (dispatchKeyInner(cm, seq + " " + name, e, handle)) {
      return true;
    }
  }

  return dispatchKeyInner(cm, name, e, handle);
}

function dispatchKeyInner(cm, name, e, handle) {
  var result = lookupKeyForEditor(cm, name, handle);

  if (result == "multi") {
    cm.state.keySeq = name;
  }

  if (result == "handled") {
    signalLater(cm, "keyHandled", cm, name, e);
  }

  if (result == "handled" || result == "multi") {
    e_preventDefault(e);
    restartBlink(cm);
  }

  return !!result;
} // Handle a key from the keydown event.


function handleKeyBinding(cm, e) {
  var name = keyName(e, true);

  if (!name) {
    return false;
  }

  if (e.shiftKey && !cm.state.keySeq) {
    // First try to resolve full name (including 'Shift-'). Failing
    // that, see if there is a cursor-motion command (starting with
    // 'go') bound to the keyname without 'Shift-'.
    return dispatchKey(cm, "Shift-" + name, e, function (b) {
      return doHandleBinding(cm, b, true);
    }) || dispatchKey(cm, name, e, function (b) {
      if (typeof b == "string" ? /^go[A-Z]/.test(b) : b.motion) {
        return doHandleBinding(cm, b);
      }
    });
  } else {
    return dispatchKey(cm, name, e, function (b) {
      return doHandleBinding(cm, b);
    });
  }
} // Handle a key from the keypress event


function handleCharBinding(cm, e, ch) {
  return dispatchKey(cm, "'" + ch + "'", e, function (b) {
    return doHandleBinding(cm, b, true);
  });
}

var lastStoppedKey = null;

function onKeyDown(e) {
  var cm = this;
  cm.curOp.focus = activeElt();

  if (signalDOMEvent(cm, e)) {
    return;
  } // IE does strange things with escape.


  if (ie && ie_version < 11 && e.keyCode == 27) {
    e.returnValue = false;
  }

  var code = e.keyCode;
  cm.display.shift = code == 16 || e.shiftKey;
  var handled = handleKeyBinding(cm, e);

  if (presto) {
    lastStoppedKey = handled ? code : null; // Opera has no cut event... we try to at least catch the key combo

    if (!handled && code == 88 && !hasCopyEvent && (mac ? e.metaKey : e.ctrlKey)) {
      cm.replaceSelection("", null, "cut");
    }
  } // Turn mouse into crosshair when Alt is held on Mac.


  if (code == 18 && !/\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className)) {
    showCrossHair(cm);
  }
}

function showCrossHair(cm) {
  var lineDiv = cm.display.lineDiv;
  addClass(lineDiv, "CodeMirror-crosshair");

  function up(e) {
    if (e.keyCode == 18 || !e.altKey) {
      rmClass(lineDiv, "CodeMirror-crosshair");
      off(document, "keyup", up);
      off(document, "mouseover", up);
    }
  }

  on(document, "keyup", up);
  on(document, "mouseover", up);
}

function onKeyUp(e) {
  if (e.keyCode == 16) {
    this.doc.sel.shift = false;
  }

  signalDOMEvent(this, e);
}

function onKeyPress(e) {
  var cm = this;

  if (eventInWidget(cm.display, e) || signalDOMEvent(cm, e) || e.ctrlKey && !e.altKey || mac && e.metaKey) {
    return;
  }

  var keyCode = e.keyCode,
      charCode = e.charCode;

  if (presto && keyCode == lastStoppedKey) {
    lastStoppedKey = null;
    e_preventDefault(e);
    return;
  }

  if (presto && (!e.which || e.which < 10) && handleKeyBinding(cm, e)) {
    return;
  }

  var ch = String.fromCharCode(charCode == null ? keyCode : charCode); // Some browsers fire keypress events for backspace

  if (ch == "\x08") {
    return;
  }

  if (handleCharBinding(cm, e, ch)) {
    return;
  }

  cm.display.input.onKeyPress(e);
}

var DOUBLECLICK_DELAY = 400;

var PastClick = function PastClick(time, pos, button) {
  this.time = time;
  this.pos = pos;
  this.button = button;
};

PastClick.prototype.compare = function (time, pos, button) {
  return this.time + DOUBLECLICK_DELAY > time && cmp(pos, this.pos) == 0 && button == this.button;
};

var lastClick, lastDoubleClick;

function clickRepeat(pos, button) {
  var now = +new Date();

  if (lastDoubleClick && lastDoubleClick.compare(now, pos, button)) {
    lastClick = lastDoubleClick = null;
    return "triple";
  } else if (lastClick && lastClick.compare(now, pos, button)) {
    lastDoubleClick = new PastClick(now, pos, button);
    lastClick = null;
    return "double";
  } else {
    lastClick = new PastClick(now, pos, button);
    lastDoubleClick = null;
    return "single";
  }
} // A mouse down can be a single click, double click, triple click,
// start of selection drag, start of text drag, new cursor
// (ctrl-click), rectangle drag (alt-drag), or xwin
// middle-click-paste. Or it might be a click on something we should
// not interfere with, such as a scrollbar or widget.


function onMouseDown(e) {
  var cm = this,
      display = cm.display;

  if (signalDOMEvent(cm, e) || display.activeTouch && display.input.supportsTouch()) {
    return;
  }

  display.input.ensurePolled();
  display.shift = e.shiftKey;

  if (eventInWidget(display, e)) {
    if (!webkit) {
      // Briefly turn off draggability, to allow widgets to do
      // normal dragging things.
      display.scroller.draggable = false;
      setTimeout(function () {
        return display.scroller.draggable = true;
      }, 100);
    }

    return;
  }

  if (clickInGutter(cm, e)) {
    return;
  }

  var pos = posFromMouse(cm, e),
      button = e_button(e),
      repeat = pos ? clickRepeat(pos, button) : "single";
  window.focus(); // #3261: make sure, that we're not starting a second selection

  if (button == 1 && cm.state.selectingText) {
    cm.state.selectingText(e);
  }

  if (pos && handleMappedButton(cm, button, pos, repeat, e)) {
    return;
  }

  if (button == 1) {
    if (pos) {
      leftButtonDown(cm, pos, repeat, e);
    } else if (e_target(e) == display.scroller) {
      e_preventDefault(e);
    }
  } else if (button == 2) {
    if (pos) {
      extendSelection(cm.doc, pos);
    }

    setTimeout(function () {
      return display.input.focus();
    }, 20);
  } else if (button == 3) {
    if (captureRightClick) {
      cm.display.input.onContextMenu(e);
    } else {
      delayBlurEvent(cm);
    }
  }
}

function handleMappedButton(cm, button, pos, repeat, event) {
  var name = "Click";

  if (repeat == "double") {
    name = "Double" + name;
  } else if (repeat == "triple") {
    name = "Triple" + name;
  }

  name = (button == 1 ? "Left" : button == 2 ? "Middle" : "Right") + name;
  return dispatchKey(cm, addModifierNames(name, event), event, function (bound) {
    if (typeof bound == "string") {
      bound = commands[bound];
    }

    if (!bound) {
      return false;
    }

    var done = false;

    try {
      if (cm.isReadOnly()) {
        cm.state.suppressEdits = true;
      }

      done = bound(cm, pos) != Pass;
    } finally {
      cm.state.suppressEdits = false;
    }

    return done;
  });
}

function configureMouse(cm, repeat, event) {
  var option = cm.getOption("configureMouse");
  var value = option ? option(cm, repeat, event) : {};

  if (value.unit == null) {
    var rect = chromeOS ? event.shiftKey && event.metaKey : event.altKey;
    value.unit = rect ? "rectangle" : repeat == "single" ? "char" : repeat == "double" ? "word" : "line";
  }

  if (value.extend == null || cm.doc.extend) {
    value.extend = cm.doc.extend || event.shiftKey;
  }

  if (value.addNew == null) {
    value.addNew = mac ? event.metaKey : event.ctrlKey;
  }

  if (value.moveOnDrag == null) {
    value.moveOnDrag = !(mac ? event.altKey : event.ctrlKey);
  }

  return value;
}

function leftButtonDown(cm, pos, repeat, event) {
  if (ie) {
    setTimeout(bind(ensureFocus, cm), 0);
  } else {
    cm.curOp.focus = activeElt();
  }

  var behavior = configureMouse(cm, repeat, event);
  var sel = cm.doc.sel,
      contained;

  if (cm.options.dragDrop && dragAndDrop && !cm.isReadOnly() && repeat == "single" && (contained = sel.contains(pos)) > -1 && (cmp((contained = sel.ranges[contained]).from(), pos) < 0 || pos.xRel > 0) && (cmp(contained.to(), pos) > 0 || pos.xRel < 0)) {
    leftButtonStartDrag(cm, event, pos, behavior);
  } else {
    leftButtonSelect(cm, event, pos, behavior);
  }
} // Start a text drag. When it ends, see if any dragging actually
// happen, and treat as a click if it didn't.


function leftButtonStartDrag(cm, event, pos, behavior) {
  var display = cm.display,
      moved = false;
  var dragEnd = operation(cm, function (e) {
    if (webkit) {
      display.scroller.draggable = false;
    }

    cm.state.draggingText = false;
    off(display.wrapper.ownerDocument, "mouseup", dragEnd);
    off(display.wrapper.ownerDocument, "mousemove", mouseMove);
    off(display.scroller, "dragstart", dragStart);
    off(display.scroller, "drop", dragEnd);

    if (!moved) {
      e_preventDefault(e);

      if (!behavior.addNew) {
        extendSelection(cm.doc, pos, null, null, behavior.extend);
      } // Work around unexplainable focus problem in IE9 (#2127) and Chrome (#3081)


      if (webkit || ie && ie_version == 9) {
        setTimeout(function () {
          display.wrapper.ownerDocument.body.focus();
          display.input.focus();
        }, 20);
      } else {
        display.input.focus();
      }
    }
  });

  var mouseMove = function mouseMove(e2) {
    moved = moved || Math.abs(event.clientX - e2.clientX) + Math.abs(event.clientY - e2.clientY) >= 10;
  };

  var dragStart = function dragStart() {
    return moved = true;
  }; // Let the drag handler handle this.


  if (webkit) {
    display.scroller.draggable = true;
  }

  cm.state.draggingText = dragEnd;
  dragEnd.copy = !behavior.moveOnDrag; // IE's approach to draggable

  if (display.scroller.dragDrop) {
    display.scroller.dragDrop();
  }

  on(display.wrapper.ownerDocument, "mouseup", dragEnd);
  on(display.wrapper.ownerDocument, "mousemove", mouseMove);
  on(display.scroller, "dragstart", dragStart);
  on(display.scroller, "drop", dragEnd);
  delayBlurEvent(cm);
  setTimeout(function () {
    return display.input.focus();
  }, 20);
}

function rangeForUnit(cm, pos, unit) {
  if (unit == "char") {
    return new Range(pos, pos);
  }

  if (unit == "word") {
    return cm.findWordAt(pos);
  }

  if (unit == "line") {
    return new Range(Pos(pos.line, 0), _clipPos(cm.doc, Pos(pos.line + 1, 0)));
  }

  var result = unit(cm, pos);
  return new Range(result.from, result.to);
} // Normal selection, as opposed to text dragging.


function leftButtonSelect(cm, event, start, behavior) {
  var display = cm.display,
      doc = cm.doc;
  e_preventDefault(event);
  var ourRange,
      ourIndex,
      startSel = doc.sel,
      ranges = startSel.ranges;

  if (behavior.addNew && !behavior.extend) {
    ourIndex = doc.sel.contains(start);

    if (ourIndex > -1) {
      ourRange = ranges[ourIndex];
    } else {
      ourRange = new Range(start, start);
    }
  } else {
    ourRange = doc.sel.primary();
    ourIndex = doc.sel.primIndex;
  }

  if (behavior.unit == "rectangle") {
    if (!behavior.addNew) {
      ourRange = new Range(start, start);
    }

    start = posFromMouse(cm, event, true, true);
    ourIndex = -1;
  } else {
    var range$$1 = rangeForUnit(cm, start, behavior.unit);

    if (behavior.extend) {
      ourRange = extendRange(ourRange, range$$1.anchor, range$$1.head, behavior.extend);
    } else {
      ourRange = range$$1;
    }
  }

  if (!behavior.addNew) {
    ourIndex = 0;
    setSelection(doc, new Selection([ourRange], 0), sel_mouse);
    startSel = doc.sel;
  } else if (ourIndex == -1) {
    ourIndex = ranges.length;
    setSelection(doc, normalizeSelection(cm, ranges.concat([ourRange]), ourIndex), {
      scroll: false,
      origin: "*mouse"
    });
  } else if (ranges.length > 1 && ranges[ourIndex].empty() && behavior.unit == "char" && !behavior.extend) {
    setSelection(doc, normalizeSelection(cm, ranges.slice(0, ourIndex).concat(ranges.slice(ourIndex + 1)), 0), {
      scroll: false,
      origin: "*mouse"
    });
    startSel = doc.sel;
  } else {
    replaceOneSelection(doc, ourIndex, ourRange, sel_mouse);
  }

  var lastPos = start;

  function extendTo(pos) {
    if (cmp(lastPos, pos) == 0) {
      return;
    }

    lastPos = pos;

    if (behavior.unit == "rectangle") {
      var ranges = [],
          tabSize = cm.options.tabSize;
      var startCol = countColumn(getLine(doc, start.line).text, start.ch, tabSize);
      var posCol = countColumn(getLine(doc, pos.line).text, pos.ch, tabSize);
      var left = Math.min(startCol, posCol),
          right = Math.max(startCol, posCol);

      for (var line = Math.min(start.line, pos.line), end = Math.min(cm.lastLine(), Math.max(start.line, pos.line)); line <= end; line++) {
        var text = getLine(doc, line).text,
            leftPos = findColumn(text, left, tabSize);

        if (left == right) {
          ranges.push(new Range(Pos(line, leftPos), Pos(line, leftPos)));
        } else if (text.length > leftPos) {
          ranges.push(new Range(Pos(line, leftPos), Pos(line, findColumn(text, right, tabSize))));
        }
      }

      if (!ranges.length) {
        ranges.push(new Range(start, start));
      }

      setSelection(doc, normalizeSelection(cm, startSel.ranges.slice(0, ourIndex).concat(ranges), ourIndex), {
        origin: "*mouse",
        scroll: false
      });
      cm.scrollIntoView(pos);
    } else {
      var oldRange = ourRange;
      var range$$1 = rangeForUnit(cm, pos, behavior.unit);
      var anchor = oldRange.anchor,
          head;

      if (cmp(range$$1.anchor, anchor) > 0) {
        head = range$$1.head;
        anchor = minPos(oldRange.from(), range$$1.anchor);
      } else {
        head = range$$1.anchor;
        anchor = maxPos(oldRange.to(), range$$1.head);
      }

      var ranges$1 = startSel.ranges.slice(0);
      ranges$1[ourIndex] = bidiSimplify(cm, new Range(_clipPos(doc, anchor), head));
      setSelection(doc, normalizeSelection(cm, ranges$1, ourIndex), sel_mouse);
    }
  }

  var editorSize = display.wrapper.getBoundingClientRect(); // Used to ensure timeout re-tries don't fire when another extend
  // happened in the meantime (clearTimeout isn't reliable -- at
  // least on Chrome, the timeouts still happen even when cleared,
  // if the clear happens after their scheduled firing time).

  var counter = 0;

  function extend(e) {
    var curCount = ++counter;
    var cur = posFromMouse(cm, e, true, behavior.unit == "rectangle");

    if (!cur) {
      return;
    }

    if (cmp(cur, lastPos) != 0) {
      cm.curOp.focus = activeElt();
      extendTo(cur);
      var visible = visibleLines(display, doc);

      if (cur.line >= visible.to || cur.line < visible.from) {
        setTimeout(operation(cm, function () {
          if (counter == curCount) {
            extend(e);
          }
        }), 150);
      }
    } else {
      var outside = e.clientY < editorSize.top ? -20 : e.clientY > editorSize.bottom ? 20 : 0;

      if (outside) {
        setTimeout(operation(cm, function () {
          if (counter != curCount) {
            return;
          }

          display.scroller.scrollTop += outside;
          extend(e);
        }), 50);
      }
    }
  }

  function done(e) {
    cm.state.selectingText = false;
    counter = Infinity; // If e is null or undefined we interpret this as someone trying
    // to explicitly cancel the selection rather than the user
    // letting go of the mouse button.

    if (e) {
      e_preventDefault(e);
      display.input.focus();
    }

    off(display.wrapper.ownerDocument, "mousemove", move);
    off(display.wrapper.ownerDocument, "mouseup", up);
    doc.history.lastSelOrigin = null;
  }

  var move = operation(cm, function (e) {
    if (e.buttons === 0 || !e_button(e)) {
      done(e);
    } else {
      extend(e);
    }
  });
  var up = operation(cm, done);
  cm.state.selectingText = up;
  on(display.wrapper.ownerDocument, "mousemove", move);
  on(display.wrapper.ownerDocument, "mouseup", up);
} // Used when mouse-selecting to adjust the anchor to the proper side
// of a bidi jump depending on the visual position of the head.


function bidiSimplify(cm, range$$1) {
  var anchor = range$$1.anchor;
  var head = range$$1.head;
  var anchorLine = getLine(cm.doc, anchor.line);

  if (cmp(anchor, head) == 0 && anchor.sticky == head.sticky) {
    return range$$1;
  }

  var order = getOrder(anchorLine);

  if (!order) {
    return range$$1;
  }

  var index = getBidiPartAt(order, anchor.ch, anchor.sticky),
      part = order[index];

  if (part.from != anchor.ch && part.to != anchor.ch) {
    return range$$1;
  }

  var boundary = index + (part.from == anchor.ch == (part.level != 1) ? 0 : 1);

  if (boundary == 0 || boundary == order.length) {
    return range$$1;
  } // Compute the relative visual position of the head compared to the
  // anchor (<0 is to the left, >0 to the right)


  var leftSide;

  if (head.line != anchor.line) {
    leftSide = (head.line - anchor.line) * (cm.doc.direction == "ltr" ? 1 : -1) > 0;
  } else {
    var headIndex = getBidiPartAt(order, head.ch, head.sticky);
    var dir = headIndex - index || (head.ch - anchor.ch) * (part.level == 1 ? -1 : 1);

    if (headIndex == boundary - 1 || headIndex == boundary) {
      leftSide = dir < 0;
    } else {
      leftSide = dir > 0;
    }
  }

  var usePart = order[boundary + (leftSide ? -1 : 0)];
  var from = leftSide == (usePart.level == 1);
  var ch = from ? usePart.from : usePart.to,
      sticky = from ? "after" : "before";
  return anchor.ch == ch && anchor.sticky == sticky ? range$$1 : new Range(new Pos(anchor.line, ch, sticky), head);
} // Determines whether an event happened in the gutter, and fires the
// handlers for the corresponding event.


function gutterEvent(cm, e, type, prevent) {
  var mX, mY;

  if (e.touches) {
    mX = e.touches[0].clientX;
    mY = e.touches[0].clientY;
  } else {
    try {
      mX = e.clientX;
      mY = e.clientY;
    } catch (e) {
      return false;
    }
  }

  if (mX >= Math.floor(cm.display.gutters.getBoundingClientRect().right)) {
    return false;
  }

  if (prevent) {
    e_preventDefault(e);
  }

  var display = cm.display;
  var lineBox = display.lineDiv.getBoundingClientRect();

  if (mY > lineBox.bottom || !hasHandler(cm, type)) {
    return e_defaultPrevented(e);
  }

  mY -= lineBox.top - display.viewOffset;

  for (var i = 0; i < cm.display.gutterSpecs.length; ++i) {
    var g = display.gutters.childNodes[i];

    if (g && g.getBoundingClientRect().right >= mX) {
      var line = _lineAtHeight(cm.doc, mY);

      var gutter = cm.display.gutterSpecs[i];
      signal(cm, type, cm, line, gutter.className, e);
      return e_defaultPrevented(e);
    }
  }
}

function clickInGutter(cm, e) {
  return gutterEvent(cm, e, "gutterClick", true);
} // CONTEXT MENU HANDLING
// To make the context menu work, we need to briefly unhide the
// textarea (making it as unobtrusive as possible) to let the
// right-click take effect on it.


function onContextMenu(cm, e) {
  if (eventInWidget(cm.display, e) || contextMenuInGutter(cm, e)) {
    return;
  }

  if (signalDOMEvent(cm, e, "contextmenu")) {
    return;
  }

  if (!captureRightClick) {
    cm.display.input.onContextMenu(e);
  }
}

function contextMenuInGutter(cm, e) {
  if (!hasHandler(cm, "gutterContextMenu")) {
    return false;
  }

  return gutterEvent(cm, e, "gutterContextMenu", false);
}

function themeChanged(cm) {
  cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-");
  clearCaches(cm);
}

var Init = {
  toString: function toString() {
    return "CodeMirror.Init";
  }
};
var defaults = {};
var optionHandlers = {};

function defineOptions(CodeMirror) {
  var optionHandlers = CodeMirror.optionHandlers;

  function option(name, deflt, handle, notOnInit) {
    CodeMirror.defaults[name] = deflt;

    if (handle) {
      optionHandlers[name] = notOnInit ? function (cm, val, old) {
        if (old != Init) {
          handle(cm, val, old);
        }
      } : handle;
    }
  }

  CodeMirror.defineOption = option; // Passed to option handlers when there is no old value.

  CodeMirror.Init = Init; // These two are, on init, called from the constructor because they
  // have to be initialized before the src can start at all.

  option("value", "", function (cm, val) {
    return cm.setValue(val);
  }, true);
  option("mode", null, function (cm, val) {
    cm.doc.modeOption = val;
    loadMode(cm);
  }, true);
  option("indentUnit", 2, loadMode, true);
  option("indentWithTabs", false);
  option("smartIndent", true);
  option("tabSize", 4, function (cm) {
    resetModeState(cm);
    clearCaches(cm);
    regChange(cm);
  }, true);
  option("lineSeparator", null, function (cm, val) {
    cm.doc.lineSep = val;

    if (!val) {
      return;
    }

    var newBreaks = [],
        lineNo = cm.doc.first;
    cm.doc.iter(function (line) {
      for (var pos = 0;;) {
        var found = line.text.indexOf(val, pos);

        if (found == -1) {
          break;
        }

        pos = found + val.length;
        newBreaks.push(Pos(lineNo, found));
      }

      lineNo++;
    });

    for (var i = newBreaks.length - 1; i >= 0; i--) {
      _replaceRange(cm.doc, val, newBreaks[i], Pos(newBreaks[i].line, newBreaks[i].ch + val.length));
    }
  });
  option("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g, function (cm, val, old) {
    cm.state.specialChars = new RegExp(val.source + (val.test("\t") ? "" : "|\t"), "g");

    if (old != Init) {
      cm.refresh();
    }
  });
  option("specialCharPlaceholder", defaultSpecialCharPlaceholder, function (cm) {
    return cm.refresh();
  }, true);
  option("electricChars", true);
  option("inputStyle", mobile ? "contenteditable" : "textarea", function () {
    throw new Error("inputStyle can not (yet) be changed in a running src"); // FIXME
  }, true);
  option("spellcheck", false, function (cm, val) {
    return cm.getInputField().spellcheck = val;
  }, true);
  option("autocorrect", false, function (cm, val) {
    return cm.getInputField().autocorrect = val;
  }, true);
  option("autocapitalize", false, function (cm, val) {
    return cm.getInputField().autocapitalize = val;
  }, true);
  option("rtlMoveVisually", !windows);
  option("wholeLineUpdateBefore", true);
  option("theme", "default", function (cm) {
    themeChanged(cm);
    updateGutters(cm);
  }, true);
  option("keyMap", "default", function (cm, val, old) {
    var next = getKeyMap(val);
    var prev = old != Init && getKeyMap(old);

    if (prev && prev.detach) {
      prev.detach(cm, next);
    }

    if (next.attach) {
      next.attach(cm, prev || null);
    }
  });
  option("extraKeys", null);
  option("configureMouse", null);
  option("lineWrapping", false, wrappingChanged, true);
  option("gutters", [], function (cm, val) {
    cm.display.gutterSpecs = getGutters(val, cm.options.lineNumbers);
    updateGutters(cm);
  }, true);
  option("fixedGutter", true, function (cm, val) {
    cm.display.gutters.style.left = val ? compensateForHScroll(cm.display) + "px" : "0";
    cm.refresh();
  }, true);
  option("coverGutterNextToScrollbar", false, function (cm) {
    return updateScrollbars(cm);
  }, true);
  option("scrollbarStyle", "native", function (cm) {
    initScrollbars(cm);
    updateScrollbars(cm);
    cm.display.scrollbars.setScrollTop(cm.doc.scrollTop);
    cm.display.scrollbars.setScrollLeft(cm.doc.scrollLeft);
  }, true);
  option("lineNumbers", false, function (cm, val) {
    cm.display.gutterSpecs = getGutters(cm.options.gutters, val);
    updateGutters(cm);
  }, true);
  option("firstLineNumber", 1, updateGutters, true);
  option("lineNumberFormatter", function (integer) {
    return integer;
  }, updateGutters, true);
  option("showCursorWhenSelecting", false, updateSelection, true);
  option("resetSelectionOnContextMenu", true);
  option("lineWiseCopyCut", true);
  option("pasteLinesPerSelection", true);
  option("selectionsMayTouch", false);
  option("readOnly", false, function (cm, val) {
    if (val == "nocursor") {
      onBlur(cm);
      cm.display.input.blur();
    }

    cm.display.input.readOnlyChanged(val);
  });
  option("disableInput", false, function (cm, val) {
    if (!val) {
      cm.display.input.reset();
    }
  }, true);
  option("dragDrop", true, dragDropChanged);
  option("allowDropFileTypes", null);
  option("cursorBlinkRate", 530);
  option("cursorScrollMargin", 0);
  option("cursorHeight", 1, updateSelection, true);
  option("singleCursorHeightPerLine", true, updateSelection, true);
  option("workTime", 100);
  option("workDelay", 100);
  option("flattenSpans", true, resetModeState, true);
  option("addModeClass", false, resetModeState, true);
  option("pollInterval", 100);
  option("undoDepth", 200, function (cm, val) {
    return cm.doc.history.undoDepth = val;
  });
  option("historyEventDelay", 1250);
  option("viewportMargin", 10, function (cm) {
    return cm.refresh();
  }, true);
  option("maxHighlightLength", 10000, resetModeState, true);
  option("moveInputWithCursor", true, function (cm, val) {
    if (!val) {
      cm.display.input.resetPosition();
    }
  });
  option("tabindex", null, function (cm, val) {
    return cm.display.input.getField().tabIndex = val || "";
  });
  option("autofocus", null);
  option("direction", "ltr", function (cm, val) {
    return cm.doc.setDirection(val);
  }, true);
  option("phrases", null);
}

function dragDropChanged(cm, value, old) {
  var wasOn = old && old != Init;

  if (!value != !wasOn) {
    var funcs = cm.display.dragFunctions;
    var toggle = value ? on : off;
    toggle(cm.display.scroller, "dragstart", funcs.start);
    toggle(cm.display.scroller, "dragenter", funcs.enter);
    toggle(cm.display.scroller, "dragover", funcs.over);
    toggle(cm.display.scroller, "dragleave", funcs.leave);
    toggle(cm.display.scroller, "drop", funcs.drop);
  }
}

function wrappingChanged(cm) {
  if (cm.options.lineWrapping) {
    addClass(cm.display.wrapper, "CodeMirror-wrap");
    cm.display.sizer.style.minWidth = "";
    cm.display.sizerWidth = null;
  } else {
    rmClass(cm.display.wrapper, "CodeMirror-wrap");
    findMaxLine(cm);
  }

  estimateLineHeights(cm);
  regChange(cm);
  clearCaches(cm);
  setTimeout(function () {
    return updateScrollbars(cm);
  }, 100);
} // A CodeMirror instance represents an src. This is the object
// that user code is usually dealing with.


function CodeMirror(place, options) {
  var this$1 = this;

  if (!(this instanceof CodeMirror)) {
    return new CodeMirror(place, options);
  }

  this.options = options = options ? copyObj(options) : {}; // Determine effective options based on given values and defaults.

  copyObj(defaults, options, false);
  var doc = options.value;

  if (typeof doc == "string") {
    doc = new Doc(doc, options.mode, null, options.lineSeparator, options.direction);
  } else if (options.mode) {
    doc.modeOption = options.mode;
  }

  this.doc = doc;
  var input = new CodeMirror.inputStyles[options.inputStyle](this);
  var display = this.display = new Display(place, doc, input, options);
  display.wrapper.CodeMirror = this;
  themeChanged(this);

  if (options.lineWrapping) {
    this.display.wrapper.className += " CodeMirror-wrap";
  }

  initScrollbars(this);
  this.state = {
    keyMaps: [],
    // stores maps added by addKeyMap
    overlays: [],
    // highlighting overlays, as added by addOverlay
    modeGen: 0,
    // bumped when mode/overlay changes, used to invalidate highlighting info
    overwrite: false,
    delayingBlurEvent: false,
    focused: false,
    suppressEdits: false,
    // used to disable editing during key handlers when in readOnly mode
    pasteIncoming: -1,
    cutIncoming: -1,
    // help recognize paste/cut edits in input.poll
    selectingText: false,
    draggingText: false,
    highlight: new Delayed(),
    // stores highlight worker timeout
    keySeq: null,
    // Unfinished key sequence
    specialChars: null
  };

  if (options.autofocus && !mobile) {
    display.input.focus();
  } // Override magic textarea content restore that IE sometimes does
  // on our hidden textarea on reload


  if (ie && ie_version < 11) {
    setTimeout(function () {
      return this$1.display.input.reset(true);
    }, 20);
  }

  registerEventHandlers(this);
  ensureGlobalHandlers();

  _startOperation(this);

  this.curOp.forceUpdate = true;
  attachDoc(this, doc);

  if (options.autofocus && !mobile || this.hasFocus()) {
    setTimeout(bind(onFocus, this), 20);
  } else {
    onBlur(this);
  }

  for (var opt in optionHandlers) {
    if (optionHandlers.hasOwnProperty(opt)) {
      optionHandlers[opt](this$1, options[opt], Init);
    }
  }

  maybeUpdateLineNumberWidth(this);

  if (options.finishInit) {
    options.finishInit(this);
  }

  for (var i = 0; i < initHooks.length; ++i) {
    initHooks[i](this$1);
  }

  _endOperation(this); // Suppress optimizelegibility in Webkit, since it breaks text
  // measuring on line wrapping boundaries.


  if (webkit && options.lineWrapping && getComputedStyle(display.lineDiv).textRendering == "optimizelegibility") {
    display.lineDiv.style.textRendering = "auto";
  }

  if (options.onload) {
    options.onload(this);
  }
} // The default configuration options.


CodeMirror.defaults = defaults; // Functions to run when options are changed.

CodeMirror.optionHandlers = optionHandlers; // Attach the necessary event handlers when initializing the src

function registerEventHandlers(cm) {
  var d = cm.display;
  on(d.scroller, "mousedown", operation(cm, onMouseDown)); // Older IE's will not fire a second mousedown for a double click

  if (ie && ie_version < 11) {
    on(d.scroller, "dblclick", operation(cm, function (e) {
      if (signalDOMEvent(cm, e)) {
        return;
      }

      var pos = posFromMouse(cm, e);

      if (!pos || clickInGutter(cm, e) || eventInWidget(cm.display, e)) {
        return;
      }

      e_preventDefault(e);
      var word = cm.findWordAt(pos);
      extendSelection(cm.doc, word.anchor, word.head);
    }));
  } else {
    on(d.scroller, "dblclick", function (e) {
      return signalDOMEvent(cm, e) || e_preventDefault(e);
    });
  } // Some browsers fire contextmenu *after* opening the menu, at
  // which point we can't mess with it anymore. Context menu is
  // handled in onMouseDown for these browsers.


  on(d.scroller, "contextmenu", function (e) {
    return onContextMenu(cm, e);
  }); // Used to suppress mouse event handling when a touch happens

  var touchFinished,
      prevTouch = {
    end: 0
  };

  function finishTouch() {
    if (d.activeTouch) {
      touchFinished = setTimeout(function () {
        return d.activeTouch = null;
      }, 1000);
      prevTouch = d.activeTouch;
      prevTouch.end = +new Date();
    }
  }

  function isMouseLikeTouchEvent(e) {
    if (e.touches.length != 1) {
      return false;
    }

    var touch = e.touches[0];
    return touch.radiusX <= 1 && touch.radiusY <= 1;
  }

  function farAway(touch, other) {
    if (other.left == null) {
      return true;
    }

    var dx = other.left - touch.left,
        dy = other.top - touch.top;
    return dx * dx + dy * dy > 20 * 20;
  }

  on(d.scroller, "touchstart", function (e) {
    if (!signalDOMEvent(cm, e) && !isMouseLikeTouchEvent(e) && !clickInGutter(cm, e)) {
      d.input.ensurePolled();
      clearTimeout(touchFinished);
      var now = +new Date();
      d.activeTouch = {
        start: now,
        moved: false,
        prev: now - prevTouch.end <= 300 ? prevTouch : null
      };

      if (e.touches.length == 1) {
        d.activeTouch.left = e.touches[0].pageX;
        d.activeTouch.top = e.touches[0].pageY;
      }
    }
  });
  on(d.scroller, "touchmove", function () {
    if (d.activeTouch) {
      d.activeTouch.moved = true;
    }
  });
  on(d.scroller, "touchend", function (e) {
    var touch = d.activeTouch;

    if (touch && !eventInWidget(d, e) && touch.left != null && !touch.moved && new Date() - touch.start < 300) {
      var pos = cm.coordsChar(d.activeTouch, "page"),
          range;

      if (!touch.prev || farAway(touch, touch.prev)) // Single tap
        {
          range = new Range(pos, pos);
        } else if (!touch.prev.prev || farAway(touch, touch.prev.prev)) // Double tap
        {
          range = cm.findWordAt(pos);
        } else // Triple tap
        {
          range = new Range(Pos(pos.line, 0), _clipPos(cm.doc, Pos(pos.line + 1, 0)));
        }

      cm.setSelection(range.anchor, range.head);
      cm.focus();
      e_preventDefault(e);
    }

    finishTouch();
  });
  on(d.scroller, "touchcancel", finishTouch); // Sync scrolling between fake scrollbars and real scrollable
  // area, ensure viewport is updated when scrolling.

  on(d.scroller, "scroll", function () {
    if (d.scroller.clientHeight) {
      updateScrollTop(cm, d.scroller.scrollTop);
      setScrollLeft(cm, d.scroller.scrollLeft, true);
      signal(cm, "scroll", cm);
    }
  }); // Listen to wheel events in order to try and update the viewport on time.

  on(d.scroller, "mousewheel", function (e) {
    return onScrollWheel(cm, e);
  });
  on(d.scroller, "DOMMouseScroll", function (e) {
    return onScrollWheel(cm, e);
  }); // Prevent wrapper from ever scrolling

  on(d.wrapper, "scroll", function () {
    return d.wrapper.scrollTop = d.wrapper.scrollLeft = 0;
  });
  d.dragFunctions = {
    enter: function enter(e) {
      if (!signalDOMEvent(cm, e)) {
        e_stop(e);
      }
    },
    over: function over(e) {
      if (!signalDOMEvent(cm, e)) {
        onDragOver(cm, e);
        e_stop(e);
      }
    },
    start: function start(e) {
      return onDragStart(cm, e);
    },
    drop: operation(cm, onDrop),
    leave: function leave(e) {
      if (!signalDOMEvent(cm, e)) {
        clearDragCursor(cm);
      }
    }
  };
  var inp = d.input.getField();
  on(inp, "keyup", function (e) {
    return onKeyUp.call(cm, e);
  });
  on(inp, "keydown", operation(cm, onKeyDown));
  on(inp, "keypress", operation(cm, onKeyPress));
  on(inp, "focus", function (e) {
    return onFocus(cm, e);
  });
  on(inp, "blur", function (e) {
    return onBlur(cm, e);
  });
}

var initHooks = [];

CodeMirror.defineInitHook = function (f) {
  return initHooks.push(f);
}; // Indent the given line. The how parameter can be "smart",
// "add"/null, "subtract", or "prev". When aggressive is false
// (typically set to true for forced single-line indents), empty
// lines are not indented, and places where the mode returns Pass
// are left alone.


function indentLine(cm, n, how, aggressive) {
  var doc = cm.doc,
      state;

  if (how == null) {
    how = "add";
  }

  if (how == "smart") {
    // Fall back to "prev" when the mode doesn't have an indentation
    // method.
    if (!doc.mode.indent) {
      how = "prev";
    } else {
      state = getContextBefore(cm, n).state;
    }
  }

  var tabSize = cm.options.tabSize;
  var line = getLine(doc, n),
      curSpace = countColumn(line.text, null, tabSize);

  if (line.stateAfter) {
    line.stateAfter = null;
  }

  var curSpaceString = line.text.match(/^\s*/)[0],
      indentation;

  if (!aggressive && !/\S/.test(line.text)) {
    indentation = 0;
    how = "not";
  } else if (how == "smart") {
    indentation = doc.mode.indent(state, line.text.slice(curSpaceString.length), line.text);

    if (indentation == Pass || indentation > 150) {
      if (!aggressive) {
        return;
      }

      how = "prev";
    }
  }

  if (how == "prev") {
    if (n > doc.first) {
      indentation = countColumn(getLine(doc, n - 1).text, null, tabSize);
    } else {
      indentation = 0;
    }
  } else if (how == "add") {
    indentation = curSpace + cm.options.indentUnit;
  } else if (how == "subtract") {
    indentation = curSpace - cm.options.indentUnit;
  } else if (typeof how == "number") {
    indentation = curSpace + how;
  }

  indentation = Math.max(0, indentation);
  var indentString = "",
      pos = 0;

  if (cm.options.indentWithTabs) {
    for (var i = Math.floor(indentation / tabSize); i; --i) {
      pos += tabSize;
      indentString += "\t";
    }
  }

  if (pos < indentation) {
    indentString += spaceStr(indentation - pos);
  }

  if (indentString != curSpaceString) {
    _replaceRange(doc, indentString, Pos(n, 0), Pos(n, curSpaceString.length), "+input");

    line.stateAfter = null;
    return true;
  } else {
    // Ensure that, if the cursor was in the whitespace at the start
    // of the line, it is moved to the end of that space.
    for (var i$1 = 0; i$1 < doc.sel.ranges.length; i$1++) {
      var range = doc.sel.ranges[i$1];

      if (range.head.line == n && range.head.ch < curSpaceString.length) {
        var pos$1 = Pos(n, curSpaceString.length);
        replaceOneSelection(doc, i$1, new Range(pos$1, pos$1));
        break;
      }
    }
  }
} // This will be set to a {lineWise: bool, text: [string]} object, so
// that, when pasting, we know what kind of selections the copied
// text was made out of.


var lastCopied = null;

function setLastCopied(newLastCopied) {
  lastCopied = newLastCopied;
}

function applyTextInput(cm, inserted, deleted, sel, origin) {
  var doc = cm.doc;
  cm.display.shift = false;

  if (!sel) {
    sel = doc.sel;
  }

  var recent = +new Date() - 200;
  var paste = origin == "paste" || cm.state.pasteIncoming > recent;
  var textLines = splitLinesAuto(inserted),
      multiPaste = null; // When pasting N lines into N selections, insert one line per selection

  if (paste && sel.ranges.length > 1) {
    if (lastCopied && lastCopied.text.join("\n") == inserted) {
      if (sel.ranges.length % lastCopied.text.length == 0) {
        multiPaste = [];

        for (var i = 0; i < lastCopied.text.length; i++) {
          multiPaste.push(doc.splitLines(lastCopied.text[i]));
        }
      }
    } else if (textLines.length == sel.ranges.length && cm.options.pasteLinesPerSelection) {
      multiPaste = map(textLines, function (l) {
        return [l];
      });
    }
  }

  var updateInput = cm.curOp.updateInput; // Normal behavior is to insert the new text into every selection

  for (var i$1 = sel.ranges.length - 1; i$1 >= 0; i$1--) {
    var range$$1 = sel.ranges[i$1];
    var from = range$$1.from(),
        to = range$$1.to();

    if (range$$1.empty()) {
      if (deleted && deleted > 0) // Handle deletion
        {
          from = Pos(from.line, from.ch - deleted);
        } else if (cm.state.overwrite && !paste) // Handle overwrite
        {
          to = Pos(to.line, Math.min(getLine(doc, to.line).text.length, to.ch + lst(textLines).length));
        } else if (paste && lastCopied && lastCopied.lineWise && lastCopied.text.join("\n") == inserted) {
        from = to = Pos(from.line, 0);
      }
    }

    var changeEvent = {
      from: from,
      to: to,
      text: multiPaste ? multiPaste[i$1 % multiPaste.length] : textLines,
      origin: origin || (paste ? "paste" : cm.state.cutIncoming > recent ? "cut" : "+input")
    };
    makeChange(cm.doc, changeEvent);
    signalLater(cm, "inputRead", cm, changeEvent);
  }

  if (inserted && !paste) {
    triggerElectric(cm, inserted);
  }

  ensureCursorVisible(cm);

  if (cm.curOp.updateInput < 2) {
    cm.curOp.updateInput = updateInput;
  }

  cm.curOp.typing = true;
  cm.state.pasteIncoming = cm.state.cutIncoming = -1;
}

function handlePaste(e, cm) {
  var pasted = e.clipboardData && e.clipboardData.getData("Text");

  if (pasted) {
    e.preventDefault();

    if (!cm.isReadOnly() && !cm.options.disableInput) {
      runInOp(cm, function () {
        return applyTextInput(cm, pasted, 0, null, "paste");
      });
    }

    return true;
  }
}

function triggerElectric(cm, inserted) {
  // When an 'electric' character is inserted, immediately trigger a reindent
  if (!cm.options.electricChars || !cm.options.smartIndent) {
    return;
  }

  var sel = cm.doc.sel;

  for (var i = sel.ranges.length - 1; i >= 0; i--) {
    var range$$1 = sel.ranges[i];

    if (range$$1.head.ch > 100 || i && sel.ranges[i - 1].head.line == range$$1.head.line) {
      continue;
    }

    var mode = cm.getModeAt(range$$1.head);
    var indented = false;

    if (mode.electricChars) {
      for (var j = 0; j < mode.electricChars.length; j++) {
        if (inserted.indexOf(mode.electricChars.charAt(j)) > -1) {
          indented = indentLine(cm, range$$1.head.line, "smart");
          break;
        }
      }
    } else if (mode.electricInput) {
      if (mode.electricInput.test(getLine(cm.doc, range$$1.head.line).text.slice(0, range$$1.head.ch))) {
        indented = indentLine(cm, range$$1.head.line, "smart");
      }
    }

    if (indented) {
      signalLater(cm, "electricInput", cm, range$$1.head.line);
    }
  }
}

function copyableRanges(cm) {
  var text = [],
      ranges = [];

  for (var i = 0; i < cm.doc.sel.ranges.length; i++) {
    var line = cm.doc.sel.ranges[i].head.line;
    var lineRange = {
      anchor: Pos(line, 0),
      head: Pos(line + 1, 0)
    };
    ranges.push(lineRange);
    text.push(cm.getRange(lineRange.anchor, lineRange.head));
  }

  return {
    text: text,
    ranges: ranges
  };
}

function disableBrowserMagic(field, spellcheck, autocorrect, autocapitalize) {
  field.setAttribute("autocorrect", autocorrect ? "" : "off");
  field.setAttribute("autocapitalize", autocapitalize ? "" : "off");
  field.setAttribute("spellcheck", !!spellcheck);
}

function hiddenTextarea() {
  var te = elt("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none");
  var div = elt("div", [te], null, "overflow: hidden; position: relative; width: 3px; height: 0px;"); // The textarea is kept positioned near the cursor to prevent the
  // fact that it'll be scrolled into view on input from scrolling
  // our fake cursor out of view. On webkit, when wrap=off, paste is
  // very slow. So make the area wide instead.

  if (webkit) {
    te.style.width = "1000px";
  } else {
    te.setAttribute("wrap", "off");
  } // If border: 0; -- iOS fails to open keyboard (issue #1287)


  if (ios) {
    te.style.border = "1px solid black";
  }

  disableBrowserMagic(te);
  return div;
} // The publicly visible API. Note that methodOp(f) means
// 'wrap f in an operation, performed on its `this` parameter'.
// This is not the complete set of src methods. Most of the
// methods defined on the Doc type are also injected into
// CodeMirror.prototype, for backwards compatibility and
// convenience.


function addEditorMethods(CodeMirror) {
  var optionHandlers = CodeMirror.optionHandlers;
  var helpers = CodeMirror.helpers = {};
  CodeMirror.prototype = {
    constructor: CodeMirror,
    focus: function focus() {
      window.focus();
      this.display.input.focus();
    },
    setOption: function setOption(option, value) {
      var options = this.options,
          old = options[option];

      if (options[option] == value && option != "mode") {
        return;
      }

      options[option] = value;

      if (optionHandlers.hasOwnProperty(option)) {
        operation(this, optionHandlers[option])(this, value, old);
      }

      signal(this, "optionChange", this, option);
    },
    getOption: function getOption(option) {
      return this.options[option];
    },
    getDoc: function getDoc() {
      return this.doc;
    },
    addKeyMap: function addKeyMap(map$$1, bottom) {
      this.state.keyMaps[bottom ? "push" : "unshift"](getKeyMap(map$$1));
    },
    removeKeyMap: function removeKeyMap(map$$1) {
      var maps = this.state.keyMaps;

      for (var i = 0; i < maps.length; ++i) {
        if (maps[i] == map$$1 || maps[i].name == map$$1) {
          maps.splice(i, 1);
          return true;
        }
      }
    },
    addOverlay: methodOp(function (spec, options) {
      var mode = spec.token ? spec : CodeMirror.getMode(this.options, spec);

      if (mode.startState) {
        throw new Error("Overlays may not be stateful.");
      }

      insertSorted(this.state.overlays, {
        mode: mode,
        modeSpec: spec,
        opaque: options && options.opaque,
        priority: options && options.priority || 0
      }, function (overlay) {
        return overlay.priority;
      });
      this.state.modeGen++;
      regChange(this);
    }),
    removeOverlay: methodOp(function (spec) {
      var this$1 = this;
      var overlays = this.state.overlays;

      for (var i = 0; i < overlays.length; ++i) {
        var cur = overlays[i].modeSpec;

        if (cur == spec || typeof spec == "string" && cur.name == spec) {
          overlays.splice(i, 1);
          this$1.state.modeGen++;
          regChange(this$1);
          return;
        }
      }
    }),
    indentLine: methodOp(function (n, dir, aggressive) {
      if (typeof dir != "string" && typeof dir != "number") {
        if (dir == null) {
          dir = this.options.smartIndent ? "smart" : "prev";
        } else {
          dir = dir ? "add" : "subtract";
        }
      }

      if (isLine(this.doc, n)) {
        indentLine(this, n, dir, aggressive);
      }
    }),
    indentSelection: methodOp(function (how) {
      var this$1 = this;
      var ranges = this.doc.sel.ranges,
          end = -1;

      for (var i = 0; i < ranges.length; i++) {
        var range$$1 = ranges[i];

        if (!range$$1.empty()) {
          var from = range$$1.from(),
              to = range$$1.to();
          var start = Math.max(end, from.line);
          end = Math.min(this$1.lastLine(), to.line - (to.ch ? 0 : 1)) + 1;

          for (var j = start; j < end; ++j) {
            indentLine(this$1, j, how);
          }

          var newRanges = this$1.doc.sel.ranges;

          if (from.ch == 0 && ranges.length == newRanges.length && newRanges[i].from().ch > 0) {
            replaceOneSelection(this$1.doc, i, new Range(from, newRanges[i].to()), sel_dontScroll);
          }
        } else if (range$$1.head.line > end) {
          indentLine(this$1, range$$1.head.line, how, true);
          end = range$$1.head.line;

          if (i == this$1.doc.sel.primIndex) {
            ensureCursorVisible(this$1);
          }
        }
      }
    }),
    // Fetch the parser token for a given character. Useful for hacks
    // that want to inspect the mode state (say, for completion).
    getTokenAt: function getTokenAt(pos, precise) {
      return takeToken(this, pos, precise);
    },
    getLineTokens: function getLineTokens(line, precise) {
      return takeToken(this, Pos(line), precise, true);
    },
    getTokenTypeAt: function getTokenTypeAt(pos) {
      pos = _clipPos(this.doc, pos);
      var styles = getLineStyles(this, getLine(this.doc, pos.line));
      var before = 0,
          after = (styles.length - 1) / 2,
          ch = pos.ch;
      var type;

      if (ch == 0) {
        type = styles[2];
      } else {
        for (;;) {
          var mid = before + after >> 1;

          if ((mid ? styles[mid * 2 - 1] : 0) >= ch) {
            after = mid;
          } else if (styles[mid * 2 + 1] < ch) {
            before = mid + 1;
          } else {
            type = styles[mid * 2 + 2];
            break;
          }
        }
      }

      var cut = type ? type.indexOf("overlay ") : -1;
      return cut < 0 ? type : cut == 0 ? null : type.slice(0, cut - 1);
    },
    getModeAt: function getModeAt(pos) {
      var mode = this.doc.mode;

      if (!mode.innerMode) {
        return mode;
      }

      return CodeMirror.innerMode(mode, this.getTokenAt(pos).state).mode;
    },
    getHelper: function getHelper(pos, type) {
      return this.getHelpers(pos, type)[0];
    },
    getHelpers: function getHelpers(pos, type) {
      var this$1 = this;
      var found = [];

      if (!helpers.hasOwnProperty(type)) {
        return found;
      }

      var help = helpers[type],
          mode = this.getModeAt(pos);

      if (typeof mode[type] == "string") {
        if (help[mode[type]]) {
          found.push(help[mode[type]]);
        }
      } else if (mode[type]) {
        for (var i = 0; i < mode[type].length; i++) {
          var val = help[mode[type][i]];

          if (val) {
            found.push(val);
          }
        }
      } else if (mode.helperType && help[mode.helperType]) {
        found.push(help[mode.helperType]);
      } else if (help[mode.name]) {
        found.push(help[mode.name]);
      }

      for (var i$1 = 0; i$1 < help._global.length; i$1++) {
        var cur = help._global[i$1];

        if (cur.pred(mode, this$1) && indexOf(found, cur.val) == -1) {
          found.push(cur.val);
        }
      }

      return found;
    },
    getStateAfter: function getStateAfter(line, precise) {
      var doc = this.doc;
      line = clipLine(doc, line == null ? doc.first + doc.size - 1 : line);
      return getContextBefore(this, line + 1, precise).state;
    },
    cursorCoords: function cursorCoords(start, mode) {
      var pos,
          range$$1 = this.doc.sel.primary();

      if (start == null) {
        pos = range$$1.head;
      } else if (_typeof(start) == "object") {
        pos = _clipPos(this.doc, start);
      } else {
        pos = start ? range$$1.from() : range$$1.to();
      }

      return _cursorCoords(this, pos, mode || "page");
    },
    charCoords: function charCoords(pos, mode) {
      return _charCoords(this, _clipPos(this.doc, pos), mode || "page");
    },
    coordsChar: function coordsChar(coords, mode) {
      coords = fromCoordSystem(this, coords, mode || "page");
      return _coordsChar(this, coords.left, coords.top);
    },
    lineAtHeight: function lineAtHeight(height, mode) {
      height = fromCoordSystem(this, {
        top: height,
        left: 0
      }, mode || "page").top;
      return _lineAtHeight(this.doc, height + this.display.viewOffset);
    },
    heightAtLine: function heightAtLine(line, mode, includeWidgets) {
      var end = false,
          lineObj;

      if (typeof line == "number") {
        var last = this.doc.first + this.doc.size - 1;

        if (line < this.doc.first) {
          line = this.doc.first;
        } else if (line > last) {
          line = last;
          end = true;
        }

        lineObj = getLine(this.doc, line);
      } else {
        lineObj = line;
      }

      return intoCoordSystem(this, lineObj, {
        top: 0,
        left: 0
      }, mode || "page", includeWidgets || end).top + (end ? this.doc.height - _heightAtLine(lineObj) : 0);
    },
    defaultTextHeight: function defaultTextHeight() {
      return textHeight(this.display);
    },
    defaultCharWidth: function defaultCharWidth() {
      return charWidth(this.display);
    },
    getViewport: function getViewport() {
      return {
        from: this.display.viewFrom,
        to: this.display.viewTo
      };
    },
    addWidget: function addWidget(pos, node, scroll, vert, horiz) {
      var display = this.display;
      pos = _cursorCoords(this, _clipPos(this.doc, pos));
      var top = pos.bottom,
          left = pos.left;
      node.style.position = "absolute";
      node.setAttribute("cm-ignore-events", "true");
      this.display.input.setUneditable(node);
      display.sizer.appendChild(node);

      if (vert == "over") {
        top = pos.top;
      } else if (vert == "above" || vert == "near") {
        var vspace = Math.max(display.wrapper.clientHeight, this.doc.height),
            hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth); // Default to positioning above (if specified and possible); otherwise default to positioning below

        if ((vert == 'above' || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight) {
          top = pos.top - node.offsetHeight;
        } else if (pos.bottom + node.offsetHeight <= vspace) {
          top = pos.bottom;
        }

        if (left + node.offsetWidth > hspace) {
          left = hspace - node.offsetWidth;
        }
      }

      node.style.top = top + "px";
      node.style.left = node.style.right = "";

      if (horiz == "right") {
        left = display.sizer.clientWidth - node.offsetWidth;
        node.style.right = "0px";
      } else {
        if (horiz == "left") {
          left = 0;
        } else if (horiz == "middle") {
          left = (display.sizer.clientWidth - node.offsetWidth) / 2;
        }

        node.style.left = left + "px";
      }

      if (scroll) {
        scrollIntoView(this, {
          left: left,
          top: top,
          right: left + node.offsetWidth,
          bottom: top + node.offsetHeight
        });
      }
    },
    triggerOnKeyDown: methodOp(onKeyDown),
    triggerOnKeyPress: methodOp(onKeyPress),
    triggerOnKeyUp: onKeyUp,
    triggerOnMouseDown: methodOp(onMouseDown),
    execCommand: function execCommand(cmd) {
      if (commands.hasOwnProperty(cmd)) {
        return commands[cmd].call(null, this);
      }
    },
    triggerElectric: methodOp(function (text) {
      triggerElectric(this, text);
    }),
    findPosH: function findPosH(from, amount, unit, visually) {
      var this$1 = this;
      var dir = 1;

      if (amount < 0) {
        dir = -1;
        amount = -amount;
      }

      var cur = _clipPos(this.doc, from);

      for (var i = 0; i < amount; ++i) {
        cur = _findPosH(this$1.doc, cur, dir, unit, visually);

        if (cur.hitSide) {
          break;
        }
      }

      return cur;
    },
    moveH: methodOp(function (dir, unit) {
      var this$1 = this;
      this.extendSelectionsBy(function (range$$1) {
        if (this$1.display.shift || this$1.doc.extend || range$$1.empty()) {
          return _findPosH(this$1.doc, range$$1.head, dir, unit, this$1.options.rtlMoveVisually);
        } else {
          return dir < 0 ? range$$1.from() : range$$1.to();
        }
      }, sel_move);
    }),
    deleteH: methodOp(function (dir, unit) {
      var sel = this.doc.sel,
          doc = this.doc;

      if (sel.somethingSelected()) {
        doc.replaceSelection("", null, "+delete");
      } else {
        deleteNearSelection(this, function (range$$1) {
          var other = _findPosH(doc, range$$1.head, dir, unit, false);

          return dir < 0 ? {
            from: other,
            to: range$$1.head
          } : {
            from: range$$1.head,
            to: other
          };
        });
      }
    }),
    findPosV: function findPosV(from, amount, unit, goalColumn) {
      var this$1 = this;
      var dir = 1,
          x = goalColumn;

      if (amount < 0) {
        dir = -1;
        amount = -amount;
      }

      var cur = _clipPos(this.doc, from);

      for (var i = 0; i < amount; ++i) {
        var coords = _cursorCoords(this$1, cur, "div");

        if (x == null) {
          x = coords.left;
        } else {
          coords.left = x;
        }

        cur = _findPosV(this$1, coords, dir, unit);

        if (cur.hitSide) {
          break;
        }
      }

      return cur;
    },
    moveV: methodOp(function (dir, unit) {
      var this$1 = this;
      var doc = this.doc,
          goals = [];
      var collapse = !this.display.shift && !doc.extend && doc.sel.somethingSelected();
      doc.extendSelectionsBy(function (range$$1) {
        if (collapse) {
          return dir < 0 ? range$$1.from() : range$$1.to();
        }

        var headPos = _cursorCoords(this$1, range$$1.head, "div");

        if (range$$1.goalColumn != null) {
          headPos.left = range$$1.goalColumn;
        }

        goals.push(headPos.left);

        var pos = _findPosV(this$1, headPos, dir, unit);

        if (unit == "page" && range$$1 == doc.sel.primary()) {
          addToScrollTop(this$1, _charCoords(this$1, pos, "div").top - headPos.top);
        }

        return pos;
      }, sel_move);

      if (goals.length) {
        for (var i = 0; i < doc.sel.ranges.length; i++) {
          doc.sel.ranges[i].goalColumn = goals[i];
        }
      }
    }),
    // Find the word at the given position (as returned by coordsChar).
    findWordAt: function findWordAt(pos) {
      var doc = this.doc,
          line = getLine(doc, pos.line).text;
      var start = pos.ch,
          end = pos.ch;

      if (line) {
        var helper = this.getHelper(pos, "wordChars");

        if ((pos.sticky == "before" || end == line.length) && start) {
          --start;
        } else {
          ++end;
        }

        var startChar = line.charAt(start);
        var check = isWordChar(startChar, helper) ? function (ch) {
          return isWordChar(ch, helper);
        } : /\s/.test(startChar) ? function (ch) {
          return /\s/.test(ch);
        } : function (ch) {
          return !/\s/.test(ch) && !isWordChar(ch);
        };

        while (start > 0 && check(line.charAt(start - 1))) {
          --start;
        }

        while (end < line.length && check(line.charAt(end))) {
          ++end;
        }
      }

      return new Range(Pos(pos.line, start), Pos(pos.line, end));
    },
    toggleOverwrite: function toggleOverwrite(value) {
      if (value != null && value == this.state.overwrite) {
        return;
      }

      if (this.state.overwrite = !this.state.overwrite) {
        addClass(this.display.cursorDiv, "CodeMirror-overwrite");
      } else {
        rmClass(this.display.cursorDiv, "CodeMirror-overwrite");
      }

      signal(this, "overwriteToggle", this, this.state.overwrite);
    },
    hasFocus: function hasFocus() {
      return this.display.input.getField() == activeElt();
    },
    isReadOnly: function isReadOnly() {
      return !!(this.options.readOnly || this.doc.cantEdit);
    },
    scrollTo: methodOp(function (x, y) {
      scrollToCoords(this, x, y);
    }),
    getScrollInfo: function getScrollInfo() {
      var scroller = this.display.scroller;
      return {
        left: scroller.scrollLeft,
        top: scroller.scrollTop,
        height: scroller.scrollHeight - scrollGap(this) - this.display.barHeight,
        width: scroller.scrollWidth - scrollGap(this) - this.display.barWidth,
        clientHeight: displayHeight(this),
        clientWidth: displayWidth(this)
      };
    },
    scrollIntoView: methodOp(function (range$$1, margin) {
      if (range$$1 == null) {
        range$$1 = {
          from: this.doc.sel.primary().head,
          to: null
        };

        if (margin == null) {
          margin = this.options.cursorScrollMargin;
        }
      } else if (typeof range$$1 == "number") {
        range$$1 = {
          from: Pos(range$$1, 0),
          to: null
        };
      } else if (range$$1.from == null) {
        range$$1 = {
          from: range$$1,
          to: null
        };
      }

      if (!range$$1.to) {
        range$$1.to = range$$1.from;
      }

      range$$1.margin = margin || 0;

      if (range$$1.from.line != null) {
        scrollToRange(this, range$$1);
      } else {
        scrollToCoordsRange(this, range$$1.from, range$$1.to, range$$1.margin);
      }
    }),
    setSize: methodOp(function (width, height) {
      var this$1 = this;

      var interpret = function interpret(val) {
        return typeof val == "number" || /^\d+$/.test(String(val)) ? val + "px" : val;
      };

      if (width != null) {
        this.display.wrapper.style.width = interpret(width);
      }

      if (height != null) {
        this.display.wrapper.style.height = interpret(height);
      }

      if (this.options.lineWrapping) {
        clearLineMeasurementCache(this);
      }

      var lineNo$$1 = this.display.viewFrom;
      this.doc.iter(lineNo$$1, this.display.viewTo, function (line) {
        if (line.widgets) {
          for (var i = 0; i < line.widgets.length; i++) {
            if (line.widgets[i].noHScroll) {
              regLineChange(this$1, lineNo$$1, "widget");
              break;
            }
          }
        }

        ++lineNo$$1;
      });
      this.curOp.forceUpdate = true;
      signal(this, "refresh", this);
    }),
    operation: function operation(f) {
      return runInOp(this, f);
    },
    startOperation: function startOperation() {
      return _startOperation(this);
    },
    endOperation: function endOperation() {
      return _endOperation(this);
    },
    refresh: methodOp(function () {
      var oldHeight = this.display.cachedTextHeight;
      regChange(this);
      this.curOp.forceUpdate = true;
      clearCaches(this);
      scrollToCoords(this, this.doc.scrollLeft, this.doc.scrollTop);
      updateGutterSpace(this.display);

      if (oldHeight == null || Math.abs(oldHeight - textHeight(this.display)) > .5) {
        estimateLineHeights(this);
      }

      signal(this, "refresh", this);
    }),
    swapDoc: methodOp(function (doc) {
      var old = this.doc;
      old.cm = null; // Cancel the current text selection if any (#5821)

      if (this.state.selectingText) {
        this.state.selectingText();
      }

      attachDoc(this, doc);
      clearCaches(this);
      this.display.input.reset();
      scrollToCoords(this, doc.scrollLeft, doc.scrollTop);
      this.curOp.forceScroll = true;
      signalLater(this, "swapDoc", this, old);
      return old;
    }),
    phrase: function phrase(phraseText) {
      var phrases = this.options.phrases;
      return phrases && Object.prototype.hasOwnProperty.call(phrases, phraseText) ? phrases[phraseText] : phraseText;
    },
    getInputField: function getInputField() {
      return this.display.input.getField();
    },
    getWrapperElement: function getWrapperElement() {
      return this.display.wrapper;
    },
    getScrollerElement: function getScrollerElement() {
      return this.display.scroller;
    },
    getGutterElement: function getGutterElement() {
      return this.display.gutters;
    }
  };
  eventMixin(CodeMirror);

  CodeMirror.registerHelper = function (type, name, value) {
    if (!helpers.hasOwnProperty(type)) {
      helpers[type] = CodeMirror[type] = {
        _global: []
      };
    }

    helpers[type][name] = value;
  };

  CodeMirror.registerGlobalHelper = function (type, name, predicate, value) {
    CodeMirror.registerHelper(type, name, value);

    helpers[type]._global.push({
      pred: predicate,
      val: value
    });
  };
} // Used for horizontal relative motion. Dir is -1 or 1 (left or
// right), unit can be "char", "column" (like char, but doesn't
// cross line boundaries), "word" (across next word), or "group" (to
// the start of next group of word or non-word-non-whitespace
// chars). The visually param controls whether, in right-to-left
// text, direction 1 means to move towards the next index in the
// string, or towards the character to the right of the current
// position. The resulting position will have a hitSide=true
// property if it reached the end of the document.


function _findPosH(doc, pos, dir, unit, visually) {
  var oldPos = pos;
  var origDir = dir;
  var lineObj = getLine(doc, pos.line);

  function findNextLine() {
    var l = pos.line + dir;

    if (l < doc.first || l >= doc.first + doc.size) {
      return false;
    }

    pos = new Pos(l, pos.ch, pos.sticky);
    return lineObj = getLine(doc, l);
  }

  function moveOnce(boundToLine) {
    var next;

    if (visually) {
      next = moveVisually(doc.cm, lineObj, pos, dir);
    } else {
      next = moveLogically(lineObj, pos, dir);
    }

    if (next == null) {
      if (!boundToLine && findNextLine()) {
        pos = endOfLine(visually, doc.cm, lineObj, pos.line, dir);
      } else {
        return false;
      }
    } else {
      pos = next;
    }

    return true;
  }

  if (unit == "char") {
    moveOnce();
  } else if (unit == "column") {
    moveOnce(true);
  } else if (unit == "word" || unit == "group") {
    var sawType = null,
        group = unit == "group";
    var helper = doc.cm && doc.cm.getHelper(pos, "wordChars");

    for (var first = true;; first = false) {
      if (dir < 0 && !moveOnce(!first)) {
        break;
      }

      var cur = lineObj.text.charAt(pos.ch) || "\n";
      var type = isWordChar(cur, helper) ? "w" : group && cur == "\n" ? "n" : !group || /\s/.test(cur) ? null : "p";

      if (group && !first && !type) {
        type = "s";
      }

      if (sawType && sawType != type) {
        if (dir < 0) {
          dir = 1;
          moveOnce();
          pos.sticky = "after";
        }

        break;
      }

      if (type) {
        sawType = type;
      }

      if (dir > 0 && !moveOnce(!first)) {
        break;
      }
    }
  }

  var result = skipAtomic(doc, pos, oldPos, origDir, true);

  if (equalCursorPos(oldPos, result)) {
    result.hitSide = true;
  }

  return result;
} // For relative vertical movement. Dir may be -1 or 1. Unit can be
// "page" or "line". The resulting position will have a hitSide=true
// property if it reached the end of the document.


function _findPosV(cm, pos, dir, unit) {
  var doc = cm.doc,
      x = pos.left,
      y;

  if (unit == "page") {
    var pageSize = Math.min(cm.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
    var moveAmount = Math.max(pageSize - .5 * textHeight(cm.display), 3);
    y = (dir > 0 ? pos.bottom : pos.top) + dir * moveAmount;
  } else if (unit == "line") {
    y = dir > 0 ? pos.bottom + 3 : pos.top - 3;
  }

  var target;

  for (;;) {
    target = _coordsChar(cm, x, y);

    if (!target.outside) {
      break;
    }

    if (dir < 0 ? y <= 0 : y >= doc.height) {
      target.hitSide = true;
      break;
    }

    y += dir * 5;
  }

  return target;
} // CONTENTEDITABLE INPUT STYLE


var ContentEditableInput = function ContentEditableInput(cm) {
  this.cm = cm;
  this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null;
  this.polling = new Delayed();
  this.composing = null;
  this.gracePeriod = false;
  this.readDOMTimeout = null;
};

ContentEditableInput.prototype.init = function (display) {
  var this$1 = this;
  var input = this,
      cm = input.cm;
  var div = input.div = display.lineDiv;
  disableBrowserMagic(div, cm.options.spellcheck, cm.options.autocorrect, cm.options.autocapitalize);
  on(div, "paste", function (e) {
    if (signalDOMEvent(cm, e) || handlePaste(e, cm)) {
      return;
    } // IE doesn't fire input events, so we schedule a read for the pasted content in this way


    if (ie_version <= 11) {
      setTimeout(operation(cm, function () {
        return this$1.updateFromDOM();
      }), 20);
    }
  });
  on(div, "compositionstart", function (e) {
    this$1.composing = {
      data: e.data,
      done: false
    };
  });
  on(div, "compositionupdate", function (e) {
    if (!this$1.composing) {
      this$1.composing = {
        data: e.data,
        done: false
      };
    }
  });
  on(div, "compositionend", function (e) {
    if (this$1.composing) {
      if (e.data != this$1.composing.data) {
        this$1.readFromDOMSoon();
      }

      this$1.composing.done = true;
    }
  });
  on(div, "touchstart", function () {
    return input.forceCompositionEnd();
  });
  on(div, "input", function () {
    if (!this$1.composing) {
      this$1.readFromDOMSoon();
    }
  });

  function onCopyCut(e) {
    if (signalDOMEvent(cm, e)) {
      return;
    }

    if (cm.somethingSelected()) {
      setLastCopied({
        lineWise: false,
        text: cm.getSelections()
      });

      if (e.type == "cut") {
        cm.replaceSelection("", null, "cut");
      }
    } else if (!cm.options.lineWiseCopyCut) {
      return;
    } else {
      var ranges = copyableRanges(cm);
      setLastCopied({
        lineWise: true,
        text: ranges.text
      });

      if (e.type == "cut") {
        cm.operation(function () {
          cm.setSelections(ranges.ranges, 0, sel_dontScroll);
          cm.replaceSelection("", null, "cut");
        });
      }
    }

    if (e.clipboardData) {
      e.clipboardData.clearData();
      var content = lastCopied.text.join("\n"); // iOS exposes the clipboard API, but seems to discard content inserted into it

      e.clipboardData.setData("Text", content);

      if (e.clipboardData.getData("Text") == content) {
        e.preventDefault();
        return;
      }
    } // Old-fashioned briefly-focus-a-textarea hack


    var kludge = hiddenTextarea(),
        te = kludge.firstChild;
    cm.display.lineSpace.insertBefore(kludge, cm.display.lineSpace.firstChild);
    te.value = lastCopied.text.join("\n");
    var hadFocus = document.activeElement;
    selectInput(te);
    setTimeout(function () {
      cm.display.lineSpace.removeChild(kludge);
      hadFocus.focus();

      if (hadFocus == div) {
        input.showPrimarySelection();
      }
    }, 50);
  }

  on(div, "copy", onCopyCut);
  on(div, "cut", onCopyCut);
};

ContentEditableInput.prototype.prepareSelection = function () {
  var result = prepareSelection(this.cm, false);
  result.focus = this.cm.state.focused;
  return result;
};

ContentEditableInput.prototype.showSelection = function (info, takeFocus) {
  if (!info || !this.cm.display.view.length) {
    return;
  }

  if (info.focus || takeFocus) {
    this.showPrimarySelection();
  }

  this.showMultipleSelections(info);
};

ContentEditableInput.prototype.getSelection = function () {
  return this.cm.display.wrapper.ownerDocument.getSelection();
};

ContentEditableInput.prototype.showPrimarySelection = function () {
  var sel = this.getSelection(),
      cm = this.cm,
      prim = cm.doc.sel.primary();
  var from = prim.from(),
      to = prim.to();

  if (cm.display.viewTo == cm.display.viewFrom || from.line >= cm.display.viewTo || to.line < cm.display.viewFrom) {
    sel.removeAllRanges();
    return;
  }

  var curAnchor = domToPos(cm, sel.anchorNode, sel.anchorOffset);
  var curFocus = domToPos(cm, sel.focusNode, sel.focusOffset);

  if (curAnchor && !curAnchor.bad && curFocus && !curFocus.bad && cmp(minPos(curAnchor, curFocus), from) == 0 && cmp(maxPos(curAnchor, curFocus), to) == 0) {
    return;
  }

  var view = cm.display.view;
  var start = from.line >= cm.display.viewFrom && posToDOM(cm, from) || {
    node: view[0].measure.map[2],
    offset: 0
  };
  var end = to.line < cm.display.viewTo && posToDOM(cm, to);

  if (!end) {
    var measure = view[view.length - 1].measure;
    var map$$1 = measure.maps ? measure.maps[measure.maps.length - 1] : measure.map;
    end = {
      node: map$$1[map$$1.length - 1],
      offset: map$$1[map$$1.length - 2] - map$$1[map$$1.length - 3]
    };
  }

  if (!start || !end) {
    sel.removeAllRanges();
    return;
  }

  var old = sel.rangeCount && sel.getRangeAt(0),
      rng;

  try {
    rng = range(start.node, start.offset, end.offset, end.node);
  } catch (e) {} // Our model of the DOM might be outdated, in which case the range we try to set can be impossible


  if (rng) {
    if (!gecko && cm.state.focused) {
      sel.collapse(start.node, start.offset);

      if (!rng.collapsed) {
        sel.removeAllRanges();
        sel.addRange(rng);
      }
    } else {
      sel.removeAllRanges();
      sel.addRange(rng);
    }

    if (old && sel.anchorNode == null) {
      sel.addRange(old);
    } else if (gecko) {
      this.startGracePeriod();
    }
  }

  this.rememberSelection();
};

ContentEditableInput.prototype.startGracePeriod = function () {
  var this$1 = this;
  clearTimeout(this.gracePeriod);
  this.gracePeriod = setTimeout(function () {
    this$1.gracePeriod = false;

    if (this$1.selectionChanged()) {
      this$1.cm.operation(function () {
        return this$1.cm.curOp.selectionChanged = true;
      });
    }
  }, 20);
};

ContentEditableInput.prototype.showMultipleSelections = function (info) {
  removeChildrenAndAdd(this.cm.display.cursorDiv, info.cursors);
  removeChildrenAndAdd(this.cm.display.selectionDiv, info.selection);
};

ContentEditableInput.prototype.rememberSelection = function () {
  var sel = this.getSelection();
  this.lastAnchorNode = sel.anchorNode;
  this.lastAnchorOffset = sel.anchorOffset;
  this.lastFocusNode = sel.focusNode;
  this.lastFocusOffset = sel.focusOffset;
};

ContentEditableInput.prototype.selectionInEditor = function () {
  var sel = this.getSelection();

  if (!sel.rangeCount) {
    return false;
  }

  var node = sel.getRangeAt(0).commonAncestorContainer;
  return contains(this.div, node);
};

ContentEditableInput.prototype.focus = function () {
  if (this.cm.options.readOnly != "nocursor") {
    if (!this.selectionInEditor()) {
      this.showSelection(this.prepareSelection(), true);
    }

    this.div.focus();
  }
};

ContentEditableInput.prototype.blur = function () {
  this.div.blur();
};

ContentEditableInput.prototype.getField = function () {
  return this.div;
};

ContentEditableInput.prototype.supportsTouch = function () {
  return true;
};

ContentEditableInput.prototype.receivedFocus = function () {
  var input = this;

  if (this.selectionInEditor()) {
    this.pollSelection();
  } else {
    runInOp(this.cm, function () {
      return input.cm.curOp.selectionChanged = true;
    });
  }

  function poll() {
    if (input.cm.state.focused) {
      input.pollSelection();
      input.polling.set(input.cm.options.pollInterval, poll);
    }
  }

  this.polling.set(this.cm.options.pollInterval, poll);
};

ContentEditableInput.prototype.selectionChanged = function () {
  var sel = this.getSelection();
  return sel.anchorNode != this.lastAnchorNode || sel.anchorOffset != this.lastAnchorOffset || sel.focusNode != this.lastFocusNode || sel.focusOffset != this.lastFocusOffset;
};

ContentEditableInput.prototype.pollSelection = function () {
  if (this.readDOMTimeout != null || this.gracePeriod || !this.selectionChanged()) {
    return;
  }

  var sel = this.getSelection(),
      cm = this.cm; // On Android Chrome (version 56, at least), backspacing into an
  // uneditable block element will put the cursor in that element,
  // and then, because it's not editable, hide the virtual keyboard.
  // Because Android doesn't allow us to actually detect backspace
  // presses in a sane way, this code checks for when that happens
  // and simulates a backspace press in this case.

  if (android && chrome && this.cm.display.gutterSpecs.length && isInGutter(sel.anchorNode)) {
    this.cm.triggerOnKeyDown({
      type: "keydown",
      keyCode: 8,
      preventDefault: Math.abs
    });
    this.blur();
    this.focus();
    return;
  }

  if (this.composing) {
    return;
  }

  this.rememberSelection();
  var anchor = domToPos(cm, sel.anchorNode, sel.anchorOffset);
  var head = domToPos(cm, sel.focusNode, sel.focusOffset);

  if (anchor && head) {
    runInOp(cm, function () {
      setSelection(cm.doc, simpleSelection(anchor, head), sel_dontScroll);

      if (anchor.bad || head.bad) {
        cm.curOp.selectionChanged = true;
      }
    });
  }
};

ContentEditableInput.prototype.pollContent = function () {
  if (this.readDOMTimeout != null) {
    clearTimeout(this.readDOMTimeout);
    this.readDOMTimeout = null;
  }

  var cm = this.cm,
      display = cm.display,
      sel = cm.doc.sel.primary();
  var from = sel.from(),
      to = sel.to();

  if (from.ch == 0 && from.line > cm.firstLine()) {
    from = Pos(from.line - 1, getLine(cm.doc, from.line - 1).length);
  }

  if (to.ch == getLine(cm.doc, to.line).text.length && to.line < cm.lastLine()) {
    to = Pos(to.line + 1, 0);
  }

  if (from.line < display.viewFrom || to.line > display.viewTo - 1) {
    return false;
  }

  var fromIndex, fromLine, fromNode;

  if (from.line == display.viewFrom || (fromIndex = findViewIndex(cm, from.line)) == 0) {
    fromLine = lineNo(display.view[0].line);
    fromNode = display.view[0].node;
  } else {
    fromLine = lineNo(display.view[fromIndex].line);
    fromNode = display.view[fromIndex - 1].node.nextSibling;
  }

  var toIndex = findViewIndex(cm, to.line);
  var toLine, toNode;

  if (toIndex == display.view.length - 1) {
    toLine = display.viewTo - 1;
    toNode = display.lineDiv.lastChild;
  } else {
    toLine = lineNo(display.view[toIndex + 1].line) - 1;
    toNode = display.view[toIndex + 1].node.previousSibling;
  }

  if (!fromNode) {
    return false;
  }

  var newText = cm.doc.splitLines(domTextBetween(cm, fromNode, toNode, fromLine, toLine));
  var oldText = getBetween(cm.doc, Pos(fromLine, 0), Pos(toLine, getLine(cm.doc, toLine).text.length));

  while (newText.length > 1 && oldText.length > 1) {
    if (lst(newText) == lst(oldText)) {
      newText.pop();
      oldText.pop();
      toLine--;
    } else if (newText[0] == oldText[0]) {
      newText.shift();
      oldText.shift();
      fromLine++;
    } else {
      break;
    }
  }

  var cutFront = 0,
      cutEnd = 0;
  var newTop = newText[0],
      oldTop = oldText[0],
      maxCutFront = Math.min(newTop.length, oldTop.length);

  while (cutFront < maxCutFront && newTop.charCodeAt(cutFront) == oldTop.charCodeAt(cutFront)) {
    ++cutFront;
  }

  var newBot = lst(newText),
      oldBot = lst(oldText);
  var maxCutEnd = Math.min(newBot.length - (newText.length == 1 ? cutFront : 0), oldBot.length - (oldText.length == 1 ? cutFront : 0));

  while (cutEnd < maxCutEnd && newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1)) {
    ++cutEnd;
  } // Try to move start of change to start of selection if ambiguous


  if (newText.length == 1 && oldText.length == 1 && fromLine == from.line) {
    while (cutFront && cutFront > from.ch && newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1)) {
      cutFront--;
      cutEnd++;
    }
  }

  newText[newText.length - 1] = newBot.slice(0, newBot.length - cutEnd).replace(/^\u200b+/, "");
  newText[0] = newText[0].slice(cutFront).replace(/\u200b+$/, "");
  var chFrom = Pos(fromLine, cutFront);
  var chTo = Pos(toLine, oldText.length ? lst(oldText).length - cutEnd : 0);

  if (newText.length > 1 || newText[0] || cmp(chFrom, chTo)) {
    _replaceRange(cm.doc, newText, chFrom, chTo, "+input");

    return true;
  }
};

ContentEditableInput.prototype.ensurePolled = function () {
  this.forceCompositionEnd();
};

ContentEditableInput.prototype.reset = function () {
  this.forceCompositionEnd();
};

ContentEditableInput.prototype.forceCompositionEnd = function () {
  if (!this.composing) {
    return;
  }

  clearTimeout(this.readDOMTimeout);
  this.composing = null;
  this.updateFromDOM();
  this.div.blur();
  this.div.focus();
};

ContentEditableInput.prototype.readFromDOMSoon = function () {
  var this$1 = this;

  if (this.readDOMTimeout != null) {
    return;
  }

  this.readDOMTimeout = setTimeout(function () {
    this$1.readDOMTimeout = null;

    if (this$1.composing) {
      if (this$1.composing.done) {
        this$1.composing = null;
      } else {
        return;
      }
    }

    this$1.updateFromDOM();
  }, 80);
};

ContentEditableInput.prototype.updateFromDOM = function () {
  var this$1 = this;

  if (this.cm.isReadOnly() || !this.pollContent()) {
    runInOp(this.cm, function () {
      return regChange(this$1.cm);
    });
  }
};

ContentEditableInput.prototype.setUneditable = function (node) {
  node.contentEditable = "false";
};

ContentEditableInput.prototype.onKeyPress = function (e) {
  if (e.charCode == 0 || this.composing) {
    return;
  }

  e.preventDefault();

  if (!this.cm.isReadOnly()) {
    operation(this.cm, applyTextInput)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0);
  }
};

ContentEditableInput.prototype.readOnlyChanged = function (val) {
  this.div.contentEditable = String(val != "nocursor");
};

ContentEditableInput.prototype.onContextMenu = function () {};

ContentEditableInput.prototype.resetPosition = function () {};

ContentEditableInput.prototype.needsContentAttribute = true;

function posToDOM(cm, pos) {
  var view = findViewForLine(cm, pos.line);

  if (!view || view.hidden) {
    return null;
  }

  var line = getLine(cm.doc, pos.line);
  var info = mapFromLineView(view, line, pos.line);
  var order = getOrder(line, cm.doc.direction),
      side = "left";

  if (order) {
    var partPos = getBidiPartAt(order, pos.ch);
    side = partPos % 2 ? "right" : "left";
  }

  var result = nodeAndOffsetInLineMap(info.map, pos.ch, side);
  result.offset = result.collapse == "right" ? result.end : result.start;
  return result;
}

function isInGutter(node) {
  for (var scan = node; scan; scan = scan.parentNode) {
    if (/CodeMirror-gutter-wrapper/.test(scan.className)) {
      return true;
    }
  }

  return false;
}

function badPos(pos, bad) {
  if (bad) {
    pos.bad = true;
  }

  return pos;
}

function domTextBetween(cm, from, to, fromLine, toLine) {
  var text = "",
      closing = false,
      lineSep = cm.doc.lineSeparator(),
      extraLinebreak = false;

  function recognizeMarker(id) {
    return function (marker) {
      return marker.id == id;
    };
  }

  function close() {
    if (closing) {
      text += lineSep;

      if (extraLinebreak) {
        text += lineSep;
      }

      closing = extraLinebreak = false;
    }
  }

  function addText(str) {
    if (str) {
      close();
      text += str;
    }
  }

  function walk(node) {
    if (node.nodeType == 1) {
      var cmText = node.getAttribute("cm-text");

      if (cmText) {
        addText(cmText);
        return;
      }

      var markerID = node.getAttribute("cm-marker"),
          range$$1;

      if (markerID) {
        var found = cm.findMarks(Pos(fromLine, 0), Pos(toLine + 1, 0), recognizeMarker(+markerID));

        if (found.length && (range$$1 = found[0].find(0))) {
          addText(getBetween(cm.doc, range$$1.from, range$$1.to).join(lineSep));
        }

        return;
      }

      if (node.getAttribute("contenteditable") == "false") {
        return;
      }

      var isBlock = /^(pre|div|p|li|table|br)$/i.test(node.nodeName);

      if (!/^br$/i.test(node.nodeName) && node.textContent.length == 0) {
        return;
      }

      if (isBlock) {
        close();
      }

      for (var i = 0; i < node.childNodes.length; i++) {
        walk(node.childNodes[i]);
      }

      if (/^(pre|p)$/i.test(node.nodeName)) {
        extraLinebreak = true;
      }

      if (isBlock) {
        closing = true;
      }
    } else if (node.nodeType == 3) {
      addText(node.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
    }
  }

  for (;;) {
    walk(from);

    if (from == to) {
      break;
    }

    from = from.nextSibling;
    extraLinebreak = false;
  }

  return text;
}

function domToPos(cm, node, offset) {
  var lineNode;

  if (node == cm.display.lineDiv) {
    lineNode = cm.display.lineDiv.childNodes[offset];

    if (!lineNode) {
      return badPos(cm.clipPos(Pos(cm.display.viewTo - 1)), true);
    }

    node = null;
    offset = 0;
  } else {
    for (lineNode = node;; lineNode = lineNode.parentNode) {
      if (!lineNode || lineNode == cm.display.lineDiv) {
        return null;
      }

      if (lineNode.parentNode && lineNode.parentNode == cm.display.lineDiv) {
        break;
      }
    }
  }

  for (var i = 0; i < cm.display.view.length; i++) {
    var lineView = cm.display.view[i];

    if (lineView.node == lineNode) {
      return locateNodeInLineView(lineView, node, offset);
    }
  }
}

function locateNodeInLineView(lineView, node, offset) {
  var wrapper = lineView.text.firstChild,
      bad = false;

  if (!node || !contains(wrapper, node)) {
    return badPos(Pos(lineNo(lineView.line), 0), true);
  }

  if (node == wrapper) {
    bad = true;
    node = wrapper.childNodes[offset];
    offset = 0;

    if (!node) {
      var line = lineView.rest ? lst(lineView.rest) : lineView.line;
      return badPos(Pos(lineNo(line), line.text.length), bad);
    }
  }

  var textNode = node.nodeType == 3 ? node : null,
      topNode = node;

  if (!textNode && node.childNodes.length == 1 && node.firstChild.nodeType == 3) {
    textNode = node.firstChild;

    if (offset) {
      offset = textNode.nodeValue.length;
    }
  }

  while (topNode.parentNode != wrapper) {
    topNode = topNode.parentNode;
  }

  var measure = lineView.measure,
      maps = measure.maps;

  function find(textNode, topNode, offset) {
    for (var i = -1; i < (maps ? maps.length : 0); i++) {
      var map$$1 = i < 0 ? measure.map : maps[i];

      for (var j = 0; j < map$$1.length; j += 3) {
        var curNode = map$$1[j + 2];

        if (curNode == textNode || curNode == topNode) {
          var line = lineNo(i < 0 ? lineView.line : lineView.rest[i]);
          var ch = map$$1[j] + offset;

          if (offset < 0 || curNode != textNode) {
            ch = map$$1[j + (offset ? 1 : 0)];
          }

          return Pos(line, ch);
        }
      }
    }
  }

  var found = find(textNode, topNode, offset);

  if (found) {
    return badPos(found, bad);
  } // FIXME this is all really shaky. might handle the few cases it needs to handle, but likely to cause problems


  for (var after = topNode.nextSibling, dist = textNode ? textNode.nodeValue.length - offset : 0; after; after = after.nextSibling) {
    found = find(after, after.firstChild, 0);

    if (found) {
      return badPos(Pos(found.line, found.ch - dist), bad);
    } else {
      dist += after.textContent.length;
    }
  }

  for (var before = topNode.previousSibling, dist$1 = offset; before; before = before.previousSibling) {
    found = find(before, before.firstChild, -1);

    if (found) {
      return badPos(Pos(found.line, found.ch + dist$1), bad);
    } else {
      dist$1 += before.textContent.length;
    }
  }
} // TEXTAREA INPUT STYLE


var TextareaInput = function TextareaInput(cm) {
  this.cm = cm; // See input.poll and input.reset

  this.prevInput = ""; // Flag that indicates whether we expect input to appear real soon
  // now (after some event like 'keypress' or 'input') and are
  // polling intensively.

  this.pollingFast = false; // Self-resetting timeout for the poller

  this.polling = new Delayed(); // Used to work around IE issue with selection being forgotten when focus moves away from textarea

  this.hasSelection = false;
  this.composing = null;
};

TextareaInput.prototype.init = function (display) {
  var this$1 = this;
  var input = this,
      cm = this.cm;
  this.createField(display);
  var te = this.textarea;
  display.wrapper.insertBefore(this.wrapper, display.wrapper.firstChild); // Needed to hide big blue blinking cursor on Mobile Safari (doesn't seem to work in iOS 8 anymore)

  if (ios) {
    te.style.width = "0px";
  }

  on(te, "input", function () {
    if (ie && ie_version >= 9 && this$1.hasSelection) {
      this$1.hasSelection = null;
    }

    input.poll();
  });
  on(te, "paste", function (e) {
    if (signalDOMEvent(cm, e) || handlePaste(e, cm)) {
      return;
    }

    cm.state.pasteIncoming = +new Date();
    input.fastPoll();
  });

  function prepareCopyCut(e) {
    if (signalDOMEvent(cm, e)) {
      return;
    }

    if (cm.somethingSelected()) {
      setLastCopied({
        lineWise: false,
        text: cm.getSelections()
      });
    } else if (!cm.options.lineWiseCopyCut) {
      return;
    } else {
      var ranges = copyableRanges(cm);
      setLastCopied({
        lineWise: true,
        text: ranges.text
      });

      if (e.type == "cut") {
        cm.setSelections(ranges.ranges, null, sel_dontScroll);
      } else {
        input.prevInput = "";
        te.value = ranges.text.join("\n");
        selectInput(te);
      }
    }

    if (e.type == "cut") {
      cm.state.cutIncoming = +new Date();
    }
  }

  on(te, "cut", prepareCopyCut);
  on(te, "copy", prepareCopyCut);
  on(display.scroller, "paste", function (e) {
    if (eventInWidget(display, e) || signalDOMEvent(cm, e)) {
      return;
    }

    if (!te.dispatchEvent) {
      cm.state.pasteIncoming = +new Date();
      input.focus();
      return;
    } // Pass the `paste` event to the textarea so it's handled by its event listener.


    var event = new Event("paste");
    event.clipboardData = e.clipboardData;
    te.dispatchEvent(event);
  }); // Prevent normal selection in the src (we handle our own)

  on(display.lineSpace, "selectstart", function (e) {
    if (!eventInWidget(display, e)) {
      e_preventDefault(e);
    }
  });
  on(te, "compositionstart", function () {
    var start = cm.getCursor("from");

    if (input.composing) {
      input.composing.range.clear();
    }

    input.composing = {
      start: start,
      range: cm.markText(start, cm.getCursor("to"), {
        className: "CodeMirror-composing"
      })
    };
  });
  on(te, "compositionend", function () {
    if (input.composing) {
      input.poll();
      input.composing.range.clear();
      input.composing = null;
    }
  });
};

TextareaInput.prototype.createField = function (_display) {
  // Wraps and hides input textarea
  this.wrapper = hiddenTextarea(); // The semihidden textarea that is focused when the src is
  // focused, and receives input.

  this.textarea = this.wrapper.firstChild;
};

TextareaInput.prototype.prepareSelection = function () {
  // Redraw the selection and/or cursor
  var cm = this.cm,
      display = cm.display,
      doc = cm.doc;
  var result = prepareSelection(cm); // Move the hidden textarea near the cursor to prevent scrolling artifacts

  if (cm.options.moveInputWithCursor) {
    var headPos = _cursorCoords(cm, doc.sel.primary().head, "div");

    var wrapOff = display.wrapper.getBoundingClientRect(),
        lineOff = display.lineDiv.getBoundingClientRect();
    result.teTop = Math.max(0, Math.min(display.wrapper.clientHeight - 10, headPos.top + lineOff.top - wrapOff.top));
    result.teLeft = Math.max(0, Math.min(display.wrapper.clientWidth - 10, headPos.left + lineOff.left - wrapOff.left));
  }

  return result;
};

TextareaInput.prototype.showSelection = function (drawn) {
  var cm = this.cm,
      display = cm.display;
  removeChildrenAndAdd(display.cursorDiv, drawn.cursors);
  removeChildrenAndAdd(display.selectionDiv, drawn.selection);

  if (drawn.teTop != null) {
    this.wrapper.style.top = drawn.teTop + "px";
    this.wrapper.style.left = drawn.teLeft + "px";
  }
}; // Reset the input to correspond to the selection (or to be empty,
// when not typing and nothing is selected)


TextareaInput.prototype.reset = function (typing) {
  if (this.contextMenuPending || this.composing) {
    return;
  }

  var cm = this.cm;

  if (cm.somethingSelected()) {
    this.prevInput = "";
    var content = cm.getSelection();
    this.textarea.value = content;

    if (cm.state.focused) {
      selectInput(this.textarea);
    }

    if (ie && ie_version >= 9) {
      this.hasSelection = content;
    }
  } else if (!typing) {
    this.prevInput = this.textarea.value = "";

    if (ie && ie_version >= 9) {
      this.hasSelection = null;
    }
  }
};

TextareaInput.prototype.getField = function () {
  return this.textarea;
};

TextareaInput.prototype.supportsTouch = function () {
  return false;
};

TextareaInput.prototype.focus = function () {
  if (this.cm.options.readOnly != "nocursor" && (!mobile || activeElt() != this.textarea)) {
    try {
      this.textarea.focus();
    } catch (e) {} // IE8 will throw if the textarea is display: none or not in DOM

  }
};

TextareaInput.prototype.blur = function () {
  this.textarea.blur();
};

TextareaInput.prototype.resetPosition = function () {
  this.wrapper.style.top = this.wrapper.style.left = 0;
};

TextareaInput.prototype.receivedFocus = function () {
  this.slowPoll();
}; // Poll for input changes, using the normal rate of polling. This
// runs as long as the src is focused.


TextareaInput.prototype.slowPoll = function () {
  var this$1 = this;

  if (this.pollingFast) {
    return;
  }

  this.polling.set(this.cm.options.pollInterval, function () {
    this$1.poll();

    if (this$1.cm.state.focused) {
      this$1.slowPoll();
    }
  });
}; // When an event has just come in that is likely to add or change
// something in the input textarea, we poll faster, to ensure that
// the change appears on the screen quickly.


TextareaInput.prototype.fastPoll = function () {
  var missed = false,
      input = this;
  input.pollingFast = true;

  function p() {
    var changed = input.poll();

    if (!changed && !missed) {
      missed = true;
      input.polling.set(60, p);
    } else {
      input.pollingFast = false;
      input.slowPoll();
    }
  }

  input.polling.set(20, p);
}; // Read input from the textarea, and update the document to match.
// When something is selected, it is present in the textarea, and
// selected (unless it is huge, in which case a placeholder is
// used). When nothing is selected, the cursor sits after previously
// seen text (can be empty), which is stored in prevInput (we must
// not reset the textarea when typing, because that breaks IME).


TextareaInput.prototype.poll = function () {
  var this$1 = this;
  var cm = this.cm,
      input = this.textarea,
      prevInput = this.prevInput; // Since this is called a *lot*, try to bail out as cheaply as
  // possible when it is clear that nothing happened. hasSelection
  // will be the case when there is a lot of text in the textarea,
  // in which case reading its value would be expensive.

  if (this.contextMenuPending || !cm.state.focused || hasSelection(input) && !prevInput && !this.composing || cm.isReadOnly() || cm.options.disableInput || cm.state.keySeq) {
    return false;
  }

  var text = input.value; // If nothing changed, bail.

  if (text == prevInput && !cm.somethingSelected()) {
    return false;
  } // Work around nonsensical selection resetting in IE9/10, and
  // inexplicable appearance of private area unicode characters on
  // some key combos in Mac (#2689).


  if (ie && ie_version >= 9 && this.hasSelection === text || mac && /[\uf700-\uf7ff]/.test(text)) {
    cm.display.input.reset();
    return false;
  }

  if (cm.doc.sel == cm.display.selForContextMenu) {
    var first = text.charCodeAt(0);

    if (first == 0x200b && !prevInput) {
      prevInput = "\u200B";
    }

    if (first == 0x21da) {
      this.reset();
      return this.cm.execCommand("undo");
    }
  } // Find the part of the input that is actually new


  var same = 0,
      l = Math.min(prevInput.length, text.length);

  while (same < l && prevInput.charCodeAt(same) == text.charCodeAt(same)) {
    ++same;
  }

  runInOp(cm, function () {
    applyTextInput(cm, text.slice(same), prevInput.length - same, null, this$1.composing ? "*compose" : null); // Don't leave long text in the textarea, since it makes further polling slow

    if (text.length > 1000 || text.indexOf("\n") > -1) {
      input.value = this$1.prevInput = "";
    } else {
      this$1.prevInput = text;
    }

    if (this$1.composing) {
      this$1.composing.range.clear();
      this$1.composing.range = cm.markText(this$1.composing.start, cm.getCursor("to"), {
        className: "CodeMirror-composing"
      });
    }
  });
  return true;
};

TextareaInput.prototype.ensurePolled = function () {
  if (this.pollingFast && this.poll()) {
    this.pollingFast = false;
  }
};

TextareaInput.prototype.onKeyPress = function () {
  if (ie && ie_version >= 9) {
    this.hasSelection = null;
  }

  this.fastPoll();
};

TextareaInput.prototype.onContextMenu = function (e) {
  var input = this,
      cm = input.cm,
      display = cm.display,
      te = input.textarea;

  if (input.contextMenuPending) {
    input.contextMenuPending();
  }

  var pos = posFromMouse(cm, e),
      scrollPos = display.scroller.scrollTop;

  if (!pos || presto) {
    return;
  } // Opera is difficult.
  // Reset the current text selection only if the click is done outside of the selection
  // and 'resetSelectionOnContextMenu' option is true.


  var reset = cm.options.resetSelectionOnContextMenu;

  if (reset && cm.doc.sel.contains(pos) == -1) {
    operation(cm, setSelection)(cm.doc, simpleSelection(pos), sel_dontScroll);
  }

  var oldCSS = te.style.cssText,
      oldWrapperCSS = input.wrapper.style.cssText;
  var wrapperBox = input.wrapper.offsetParent.getBoundingClientRect();
  input.wrapper.style.cssText = "position: static";
  te.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - wrapperBox.top - 5) + "px; left: " + (e.clientX - wrapperBox.left - 5) + "px;\n      z-index: 1000; background: " + (ie ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
  var oldScrollY;

  if (webkit) {
    oldScrollY = window.scrollY;
  } // Work around Chrome issue (#2712)


  display.input.focus();

  if (webkit) {
    window.scrollTo(null, oldScrollY);
  }

  display.input.reset(); // Adds "Select all" to context menu in FF

  if (!cm.somethingSelected()) {
    te.value = input.prevInput = " ";
  }

  input.contextMenuPending = rehide;
  display.selForContextMenu = cm.doc.sel;
  clearTimeout(display.detectingSelectAll); // Select-all will be greyed out if there's nothing to select, so
  // this adds a zero-width space so that we can later check whether
  // it got selected.

  function prepareSelectAllHack() {
    if (te.selectionStart != null) {
      var selected = cm.somethingSelected();
      var extval = "\u200B" + (selected ? te.value : "");
      te.value = "\u21DA"; // Used to catch context-menu undo

      te.value = extval;
      input.prevInput = selected ? "" : "\u200B";
      te.selectionStart = 1;
      te.selectionEnd = extval.length; // Re-set this, in case some other handler touched the
      // selection in the meantime.

      display.selForContextMenu = cm.doc.sel;
    }
  }

  function rehide() {
    if (input.contextMenuPending != rehide) {
      return;
    }

    input.contextMenuPending = false;
    input.wrapper.style.cssText = oldWrapperCSS;
    te.style.cssText = oldCSS;

    if (ie && ie_version < 9) {
      display.scrollbars.setScrollTop(display.scroller.scrollTop = scrollPos);
    } // Try to detect the user choosing select-all


    if (te.selectionStart != null) {
      if (!ie || ie && ie_version < 9) {
        prepareSelectAllHack();
      }

      var i = 0,
          poll = function poll() {
        if (display.selForContextMenu == cm.doc.sel && te.selectionStart == 0 && te.selectionEnd > 0 && input.prevInput == "\u200B") {
          operation(cm, selectAll)(cm);
        } else if (i++ < 10) {
          display.detectingSelectAll = setTimeout(poll, 500);
        } else {
          display.selForContextMenu = null;
          display.input.reset();
        }
      };

      display.detectingSelectAll = setTimeout(poll, 200);
    }
  }

  if (ie && ie_version >= 9) {
    prepareSelectAllHack();
  }

  if (captureRightClick) {
    e_stop(e);

    var mouseup = function mouseup() {
      off(window, "mouseup", mouseup);
      setTimeout(rehide, 20);
    };

    on(window, "mouseup", mouseup);
  } else {
    setTimeout(rehide, 50);
  }
};

TextareaInput.prototype.readOnlyChanged = function (val) {
  if (!val) {
    this.reset();
  }

  this.textarea.disabled = val == "nocursor";
};

TextareaInput.prototype.setUneditable = function () {};

TextareaInput.prototype.needsContentAttribute = false;

function fromTextArea(textarea, options) {
  options = options ? copyObj(options) : {};
  options.value = textarea.value;

  if (!options.tabindex && textarea.tabIndex) {
    options.tabindex = textarea.tabIndex;
  }

  if (!options.placeholder && textarea.placeholder) {
    options.placeholder = textarea.placeholder;
  } // Set autofocus to true if this textarea is focused, or if it has
  // autofocus and no other element is focused.


  if (options.autofocus == null) {
    var hasFocus = activeElt();
    options.autofocus = hasFocus == textarea || textarea.getAttribute("autofocus") != null && hasFocus == document.body;
  }

  function save() {
    textarea.value = cm.getValue();
  }

  var realSubmit;

  if (textarea.form) {
    on(textarea.form, "submit", save); // Deplorable hack to make the submit method do the right thing.

    if (!options.leaveSubmitMethodAlone) {
      var form = textarea.form;
      realSubmit = form.submit;

      try {
        var wrappedSubmit = form.submit = function () {
          save();
          form.submit = realSubmit;
          form.submit();
          form.submit = wrappedSubmit;
        };
      } catch (e) {}
    }
  }

  options.finishInit = function (cm) {
    cm.save = save;

    cm.getTextArea = function () {
      return textarea;
    };

    cm.toTextArea = function () {
      cm.toTextArea = isNaN; // Prevent this from being ran twice

      save();
      textarea.parentNode.removeChild(cm.getWrapperElement());
      textarea.style.display = "";

      if (textarea.form) {
        off(textarea.form, "submit", save);

        if (!options.leaveSubmitMethodAlone && typeof textarea.form.submit == "function") {
          textarea.form.submit = realSubmit;
        }
      }
    };
  };

  textarea.style.display = "none";
  var cm = CodeMirror(function (node) {
    return textarea.parentNode.insertBefore(node, textarea.nextSibling);
  }, options);
  return cm;
}

function addLegacyProps(CodeMirror) {
  CodeMirror.off = off;
  CodeMirror.on = on;
  CodeMirror.wheelEventPixels = wheelEventPixels;
  CodeMirror.Doc = Doc;
  CodeMirror.splitLines = splitLinesAuto;
  CodeMirror.countColumn = countColumn;
  CodeMirror.findColumn = findColumn;
  CodeMirror.isWordChar = isWordCharBasic;
  CodeMirror.Pass = Pass;
  CodeMirror.signal = signal;
  CodeMirror.Line = Line;
  CodeMirror.changeEnd = changeEnd;
  CodeMirror.scrollbarModel = scrollbarModel;
  CodeMirror.Pos = Pos;
  CodeMirror.cmpPos = cmp;
  CodeMirror.modes = modes;
  CodeMirror.mimeModes = mimeModes;
  CodeMirror.resolveMode = resolveMode;
  CodeMirror.getMode = getMode;
  CodeMirror.modeExtensions = modeExtensions;
  CodeMirror.extendMode = extendMode;
  CodeMirror.copyState = copyState;
  CodeMirror.startState = startState;
  CodeMirror.innerMode = innerMode;
  CodeMirror.commands = commands;
  CodeMirror.keyMap = keyMap;
  CodeMirror.keyName = keyName;
  CodeMirror.isModifierKey = isModifierKey;
  CodeMirror.lookupKey = lookupKey;
  CodeMirror.normalizeKeyMap = normalizeKeyMap;
  CodeMirror.StringStream = StringStream;
  CodeMirror.SharedTextMarker = SharedTextMarker;
  CodeMirror.TextMarker = TextMarker;
  CodeMirror.LineWidget = LineWidget;
  CodeMirror.e_preventDefault = e_preventDefault;
  CodeMirror.e_stopPropagation = e_stopPropagation;
  CodeMirror.e_stop = e_stop;
  CodeMirror.addClass = addClass;
  CodeMirror.contains = contains;
  CodeMirror.rmClass = rmClass; // CodeMirror.keyNames = keyNames;
} // EDITOR CONSTRUCTOR


defineOptions(CodeMirror);
addEditorMethods(CodeMirror); // Set up methods on CodeMirror's prototype to redirect to the src's document.

var dontDelegate = "iter insert remove copy getEditor constructor".split(" ");

for (var prop in Doc.prototype) {
  if (Doc.prototype.hasOwnProperty(prop) && indexOf(dontDelegate, prop) < 0) {
    CodeMirror.prototype[prop] = function (method) {
      return function () {
        return method.apply(this.doc, arguments);
      };
    }(Doc.prototype[prop]);
  }
}

eventMixin(Doc);
CodeMirror.inputStyles = {
  "textarea": TextareaInput,
  "contenteditable": ContentEditableInput
}; // Extra arguments are stored as the mode's dependencies, which is
// used by (legacy) mechanisms like loadmode.js to automatically
// load a mode. (Preferred mechanism is the require/define calls.)

CodeMirror.defineMode = function (name
/*, mode, …*/
) {
  if (!CodeMirror.defaults.mode && name != "null") {
    CodeMirror.defaults.mode = name;
  }

  defineMode.apply(this, arguments);
};

CodeMirror.defineMIME = defineMIME; // Minimal default mode.

CodeMirror.defineMode("null", function () {
  return {
    token: function token(stream) {
      return stream.skipToEnd();
    }
  };
});
CodeMirror.defineMIME("text/plain", "null"); // EXTENSIONS

CodeMirror.defineExtension = function (name, func) {
  CodeMirror.prototype[name] = func;
};

CodeMirror.defineDocExtension = function (name, func) {
  Doc.prototype[name] = func;
};

CodeMirror.fromTextArea = fromTextArea;
addLegacyProps(CodeMirror);
CodeMirror.version = "5.49.2";
window.CodeMirror = CodeMirror;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CodeMirror);

/***/ }),

/***/ "./resources/assets/js/components/MDEditor/assets/js/codemirror/mode/css.js":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/assets/js/codemirror/mode/css.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./resources/assets/js/components/MDEditor/assets/js/codemirror/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


_index__WEBPACK_IMPORTED_MODULE_0__["default"].defineMode('css', function (config, parserConfig) {
  var inline = parserConfig.inline;

  if (!parserConfig.propertyKeywords) {
    parserConfig = _index__WEBPACK_IMPORTED_MODULE_0__["default"].resolveMode('text/css');
  }

  var indentUnit = config.indentUnit,
      tokenHooks = parserConfig.tokenHooks,
      documentTypes = parserConfig.documentTypes || {},
      mediaTypes = parserConfig.mediaTypes || {},
      mediaFeatures = parserConfig.mediaFeatures || {},
      mediaValueKeywords = parserConfig.mediaValueKeywords || {},
      propertyKeywords = parserConfig.propertyKeywords || {},
      nonStandardPropertyKeywords = parserConfig.nonStandardPropertyKeywords || {},
      fontProperties = parserConfig.fontProperties || {},
      counterDescriptors = parserConfig.counterDescriptors || {},
      colorKeywords = parserConfig.colorKeywords || {},
      valueKeywords = parserConfig.valueKeywords || {},
      allowNested = parserConfig.allowNested,
      lineComment = parserConfig.lineComment,
      supportsAtComponent = parserConfig.supportsAtComponent === true;
  var type, override;

  function ret(style, tp) {
    type = tp;
    return style;
  } // Tokenizers


  function tokenBase(stream, state) {
    var ch = stream.next();

    if (tokenHooks[ch]) {
      var result = tokenHooks[ch](stream, state);

      if (result !== false) {
        return result;
      }
    }

    if (ch == '@') {
      stream.eatWhile(/[\w\\\-]/);
      return ret('def', stream.current());
    } else if (ch == '=' || (ch == '~' || ch == '|') && stream.eat('=')) {
      return ret(null, 'compare');
    } else if (ch == '"' || ch == '\'') {
      state.tokenize = tokenString(ch);
      return state.tokenize(stream, state);
    } else if (ch == '#') {
      stream.eatWhile(/[\w\\\-]/);
      return ret('atom', 'hash');
    } else if (ch == '!') {
      stream.match(/^\s*\w*/);
      return ret('keyword', 'important');
    } else if (/\d/.test(ch) || ch == '.' && stream.eat(/\d/)) {
      stream.eatWhile(/[\w.%]/);
      return ret('number', 'unit');
    } else if (ch === '-') {
      if (/[\d.]/.test(stream.peek())) {
        stream.eatWhile(/[\w.%]/);
        return ret('number', 'unit');
      } else if (stream.match(/^-[\w\\\-]*/)) {
        stream.eatWhile(/[\w\\\-]/);

        if (stream.match(/^\s*:/, false)) {
          return ret('variable-2', 'variable-definition');
        }

        return ret('variable-2', 'variable');
      } else if (stream.match(/^\w+-/)) {
        return ret('meta', 'meta');
      }
    } else if (/[,+>*\/]/.test(ch)) {
      return ret(null, 'select-op');
    } else if (ch == '.' && stream.match(/^-?[_a-z][_a-z0-9-]*/i)) {
      return ret('qualifier', 'qualifier');
    } else if (/[:;{}\[\]\(\)]/.test(ch)) {
      return ret(null, ch);
    } else if (stream.match(/[\w-.]+(?=\()/)) {
      if (/^(url(-prefix)?|domain|regexp)$/.test(stream.current().toLowerCase())) {
        state.tokenize = tokenParenthesized;
      }

      return ret('variable callee', 'variable');
    } else if (/[\w\\\-]/.test(ch)) {
      stream.eatWhile(/[\w\\\-]/);
      return ret('property', 'word');
    } else {
      return ret(null, null);
    }
  }

  function tokenString(quote) {
    return function (stream, state) {
      var escaped = false,
          ch;

      while ((ch = stream.next()) != null) {
        if (ch == quote && !escaped) {
          if (quote == ')') {
            stream.backUp(1);
          }

          break;
        }

        escaped = !escaped && ch == '\\';
      }

      if (ch == quote || !escaped && quote != ')') {
        state.tokenize = null;
      }

      return ret('string', 'string');
    };
  }

  function tokenParenthesized(stream, state) {
    stream.next(); // Must be '('

    if (!stream.match(/\s*[\"\')]/, false)) {
      state.tokenize = tokenString(')');
    } else {
      state.tokenize = null;
    }

    return ret(null, '(');
  } // Context management


  function Context(type, indent, prev) {
    this.type = type;
    this.indent = indent;
    this.prev = prev;
  }

  function pushContext(state, stream, type, indent) {
    state.context = new Context(type, stream.indentation() + (indent === false ? 0 : indentUnit), state.context);
    return type;
  }

  function popContext(state) {
    if (state.context.prev) {
      state.context = state.context.prev;
    }

    return state.context.type;
  }

  function pass(type, stream, state) {
    return states[state.context.type](type, stream, state);
  }

  function popAndPass(type, stream, state, n) {
    for (var i = n || 1; i > 0; i--) {
      state.context = state.context.prev;
    }

    return pass(type, stream, state);
  } // Parser


  function wordAsValue(stream) {
    var word = stream.current().toLowerCase();

    if (valueKeywords.hasOwnProperty(word)) {
      override = 'atom';
    } else if (colorKeywords.hasOwnProperty(word)) {
      override = 'keyword';
    } else {
      override = 'variable';
    }
  }

  var states = {};

  states.top = function (type, stream, state) {
    if (type == '{') {
      return pushContext(state, stream, 'block');
    } else if (type == '}' && state.context.prev) {
      return popContext(state);
    } else if (supportsAtComponent && /@component/i.test(type)) {
      return pushContext(state, stream, 'atComponentBlock');
    } else if (/^@(-moz-)?document$/i.test(type)) {
      return pushContext(state, stream, 'documentTypes');
    } else if (/^@(media|supports|(-moz-)?document|import)$/i.test(type)) {
      return pushContext(state, stream, 'atBlock');
    } else if (/^@(font-face|counter-style)/i.test(type)) {
      state.stateArg = type;
      return 'restricted_atBlock_before';
    } else if (/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(type)) {
      return 'keyframes';
    } else if (type && type.charAt(0) == '@') {
      return pushContext(state, stream, 'at');
    } else if (type == 'hash') {
      override = 'builtin';
    } else if (type == 'word') {
      override = 'tag';
    } else if (type == 'variable-definition') {
      return 'maybeprop';
    } else if (type == 'interpolation') {
      return pushContext(state, stream, 'interpolation');
    } else if (type == ':') {
      return 'pseudo';
    } else if (allowNested && type == '(') {
      return pushContext(state, stream, 'parens');
    }

    return state.context.type;
  };

  states.block = function (type, stream, state) {
    if (type == 'word') {
      var word = stream.current().toLowerCase();

      if (propertyKeywords.hasOwnProperty(word)) {
        override = 'property';
        return 'maybeprop';
      } else if (nonStandardPropertyKeywords.hasOwnProperty(word)) {
        override = 'string-2';
        return 'maybeprop';
      } else if (allowNested) {
        override = stream.match(/^\s*:(?:\s|$)/, false) ? 'property' : 'tag';
        return 'block';
      } else {
        override += ' error';
        return 'maybeprop';
      }
    } else if (type == 'meta') {
      return 'block';
    } else if (!allowNested && (type == 'hash' || type == 'qualifier')) {
      override = 'error';
      return 'block';
    } else {
      return states.top(type, stream, state);
    }
  };

  states.maybeprop = function (type, stream, state) {
    if (type == ':') {
      return pushContext(state, stream, 'prop');
    }

    return pass(type, stream, state);
  };

  states.prop = function (type, stream, state) {
    if (type == ';') {
      return popContext(state);
    }

    if (type == '{' && allowNested) {
      return pushContext(state, stream, 'propBlock');
    }

    if (type == '}' || type == '{') {
      return popAndPass(type, stream, state);
    }

    if (type == '(') {
      return pushContext(state, stream, 'parens');
    }

    if (type == 'hash' && !/^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(stream.current())) {
      override += ' error';
    } else if (type == 'word') {
      wordAsValue(stream);
    } else if (type == 'interpolation') {
      return pushContext(state, stream, 'interpolation');
    }

    return 'prop';
  };

  states.propBlock = function (type, _stream, state) {
    if (type == '}') {
      return popContext(state);
    }

    if (type == 'word') {
      override = 'property';
      return 'maybeprop';
    }

    return state.context.type;
  };

  states.parens = function (type, stream, state) {
    if (type == '{' || type == '}') {
      return popAndPass(type, stream, state);
    }

    if (type == ')') {
      return popContext(state);
    }

    if (type == '(') {
      return pushContext(state, stream, 'parens');
    }

    if (type == 'interpolation') {
      return pushContext(state, stream, 'interpolation');
    }

    if (type == 'word') {
      wordAsValue(stream);
    }

    return 'parens';
  };

  states.pseudo = function (type, stream, state) {
    if (type == 'meta') {
      return 'pseudo';
    }

    if (type == 'word') {
      override = 'variable-3';
      return state.context.type;
    }

    return pass(type, stream, state);
  };

  states.documentTypes = function (type, stream, state) {
    if (type == 'word' && documentTypes.hasOwnProperty(stream.current())) {
      override = 'tag';
      return state.context.type;
    } else {
      return states.atBlock(type, stream, state);
    }
  };

  states.atBlock = function (type, stream, state) {
    if (type == '(') {
      return pushContext(state, stream, 'atBlock_parens');
    }

    if (type == '}' || type == ';') {
      return popAndPass(type, stream, state);
    }

    if (type == '{') {
      return popContext(state) && pushContext(state, stream, allowNested ? 'block' : 'top');
    }

    if (type == 'interpolation') {
      return pushContext(state, stream, 'interpolation');
    }

    if (type == 'word') {
      var word = stream.current().toLowerCase();

      if (word == 'only' || word == 'not' || word == 'and' || word == 'or') {
        override = 'keyword';
      } else if (mediaTypes.hasOwnProperty(word)) {
        override = 'attribute';
      } else if (mediaFeatures.hasOwnProperty(word)) {
        override = 'property';
      } else if (mediaValueKeywords.hasOwnProperty(word)) {
        override = 'keyword';
      } else if (propertyKeywords.hasOwnProperty(word)) {
        override = 'property';
      } else if (nonStandardPropertyKeywords.hasOwnProperty(word)) {
        override = 'string-2';
      } else if (valueKeywords.hasOwnProperty(word)) {
        override = 'atom';
      } else if (colorKeywords.hasOwnProperty(word)) {
        override = 'keyword';
      } else {
        override = 'error';
      }
    }

    return state.context.type;
  };

  states.atComponentBlock = function (type, stream, state) {
    if (type == '}') {
      return popAndPass(type, stream, state);
    }

    if (type == '{') {
      return popContext(state) && pushContext(state, stream, allowNested ? 'block' : 'top', false);
    }

    if (type == 'word') {
      override = 'error';
    }

    return state.context.type;
  };

  states.atBlock_parens = function (type, stream, state) {
    if (type == ')') {
      return popContext(state);
    }

    if (type == '{' || type == '}') {
      return popAndPass(type, stream, state, 2);
    }

    return states.atBlock(type, stream, state);
  };

  states.restricted_atBlock_before = function (type, stream, state) {
    if (type == '{') {
      return pushContext(state, stream, 'restricted_atBlock');
    }

    if (type == 'word' && state.stateArg == '@counter-style') {
      override = 'variable';
      return 'restricted_atBlock_before';
    }

    return pass(type, stream, state);
  };

  states.restricted_atBlock = function (type, stream, state) {
    if (type == '}') {
      state.stateArg = null;
      return popContext(state);
    }

    if (type == 'word') {
      if (state.stateArg == '@font-face' && !fontProperties.hasOwnProperty(stream.current().toLowerCase()) || state.stateArg == '@counter-style' && !counterDescriptors.hasOwnProperty(stream.current().toLowerCase())) {
        override = 'error';
      } else {
        override = 'property';
      }

      return 'maybeprop';
    }

    return 'restricted_atBlock';
  };

  states.keyframes = function (type, stream, state) {
    if (type == 'word') {
      override = 'variable';
      return 'keyframes';
    }

    if (type == '{') {
      return pushContext(state, stream, 'top');
    }

    return pass(type, stream, state);
  };

  states.at = function (type, stream, state) {
    if (type == ';') {
      return popContext(state);
    }

    if (type == '{' || type == '}') {
      return popAndPass(type, stream, state);
    }

    if (type == 'word') {
      override = 'tag';
    } else if (type == 'hash') {
      override = 'builtin';
    }

    return 'at';
  };

  states.interpolation = function (type, stream, state) {
    if (type == '}') {
      return popContext(state);
    }

    if (type == '{' || type == ';') {
      return popAndPass(type, stream, state);
    }

    if (type == 'word') {
      override = 'variable';
    } else if (type != 'variable' && type != '(' && type != ')') {
      override = 'error';
    }

    return 'interpolation';
  };

  return {
    startState: function startState(base) {
      return {
        tokenize: null,
        state: inline ? 'block' : 'top',
        stateArg: null,
        context: new Context(inline ? 'block' : 'top', base || 0, null)
      };
    },
    token: function token(stream, state) {
      if (!state.tokenize && stream.eatSpace()) {
        return null;
      }

      var style = (state.tokenize || tokenBase)(stream, state);

      if (style && _typeof(style) === 'object') {
        type = style[1];
        style = style[0];
      }

      override = style;

      if (type != 'comment') {
        state.state = states[state.state](type, stream, state);
      }

      return override;
    },
    indent: function indent(state, textAfter) {
      var cx = state.context,
          ch = textAfter && textAfter.charAt(0);
      var indent = cx.indent;

      if (cx.type == 'prop' && (ch == '}' || ch == ')')) {
        cx = cx.prev;
      }

      if (cx.prev) {
        if (ch == '}' && (cx.type == 'block' || cx.type == 'top' || cx.type == 'interpolation' || cx.type == 'restricted_atBlock')) {
          // Resume indentation from parent context.
          cx = cx.prev;
          indent = cx.indent;
        } else if (ch == ')' && (cx.type == 'parens' || cx.type == 'atBlock_parens') || ch == '{' && (cx.type == 'at' || cx.type == 'atBlock')) {
          // Dedent relative to current context.
          indent = Math.max(0, cx.indent - indentUnit);
        }
      }

      return indent;
    },
    electricChars: '}',
    blockCommentStart: '/*',
    blockCommentEnd: '*/',
    blockCommentContinue: ' * ',
    lineComment: lineComment,
    fold: 'brace'
  };
});

function keySet(array) {
  var keys = {};

  for (var i = 0; i < array.length; ++i) {
    keys[array[i].toLowerCase()] = true;
  }

  return keys;
}

var documentTypes_ = ['domain', 'regexp', 'url', 'url-prefix'],
    documentTypes = keySet(documentTypes_);
var mediaTypes_ = ['all', 'aural', 'braille', 'handheld', 'print', 'projection', 'screen', 'tty', 'tv', 'embossed'],
    mediaTypes = keySet(mediaTypes_);
var mediaFeatures_ = ['width', 'min-width', 'max-width', 'height', 'min-height', 'max-height', 'device-width', 'min-device-width', 'max-device-width', 'device-height', 'min-device-height', 'max-device-height', 'aspect-ratio', 'min-aspect-ratio', 'max-aspect-ratio', 'device-aspect-ratio', 'min-device-aspect-ratio', 'max-device-aspect-ratio', 'color', 'min-color', 'max-color', 'color-index', 'min-color-index', 'max-color-index', 'monochrome', 'min-monochrome', 'max-monochrome', 'resolution', 'min-resolution', 'max-resolution', 'scan', 'grid', 'orientation', 'device-pixel-ratio', 'min-device-pixel-ratio', 'max-device-pixel-ratio', 'pointer', 'any-pointer', 'hover', 'any-hover'],
    mediaFeatures = keySet(mediaFeatures_);
var mediaValueKeywords_ = ['landscape', 'portrait', 'none', 'coarse', 'fine', 'on-demand', 'hover', 'interlace', 'progressive'],
    mediaValueKeywords = keySet(mediaValueKeywords_);
var propertyKeywords_ = ['align-content', 'align-items', 'align-self', 'alignment-adjust', 'alignment-baseline', 'anchor-point', 'animation', 'animation-delay', 'animation-direction', 'animation-duration', 'animation-fill-mode', 'animation-iteration-count', 'animation-name', 'animation-play-state', 'animation-timing-function', 'appearance', 'azimuth', 'backface-visibility', 'background', 'background-attachment', 'background-blend-mode', 'background-clip', 'background-color', 'background-image', 'background-origin', 'background-position', 'background-repeat', 'background-size', 'baseline-shift', 'binding', 'bleed', 'bookmark-label', 'bookmark-level', 'bookmark-state', 'bookmark-target', 'border', 'border-bottom', 'border-bottom-color', 'border-bottom-left-radius', 'border-bottom-right-radius', 'border-bottom-style', 'border-bottom-width', 'border-collapse', 'border-color', 'border-image', 'border-image-outset', 'border-image-repeat', 'border-image-slice', 'border-image-source', 'border-image-width', 'border-left', 'border-left-color', 'border-left-style', 'border-left-width', 'border-radius', 'border-right', 'border-right-color', 'border-right-style', 'border-right-width', 'border-spacing', 'border-style', 'border-top', 'border-top-color', 'border-top-left-radius', 'border-top-right-radius', 'border-top-style', 'border-top-width', 'border-width', 'bottom', 'box-decoration-break', 'box-shadow', 'box-sizing', 'break-after', 'break-before', 'break-inside', 'caption-side', 'caret-color', 'clear', 'clip', 'color', 'color-profile', 'column-count', 'column-fill', 'column-gap', 'column-rule', 'column-rule-color', 'column-rule-style', 'column-rule-width', 'column-span', 'column-width', 'columns', 'content', 'counter-increment', 'counter-reset', 'crop', 'cue', 'cue-after', 'cue-before', 'cursor', 'direction', 'display', 'dominant-baseline', 'drop-initial-after-adjust', 'drop-initial-after-align', 'drop-initial-before-adjust', 'drop-initial-before-align', 'drop-initial-size', 'drop-initial-value', 'elevation', 'empty-cells', 'fit', 'fit-position', 'flex', 'flex-basis', 'flex-direction', 'flex-flow', 'flex-grow', 'flex-shrink', 'flex-wrap', 'float', 'float-offset', 'flow-from', 'flow-into', 'font', 'font-feature-settings', 'font-family', 'font-kerning', 'font-language-override', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-synthesis', 'font-variant', 'font-variant-alternates', 'font-variant-caps', 'font-variant-east-asian', 'font-variant-ligatures', 'font-variant-numeric', 'font-variant-position', 'font-weight', 'grid', 'grid-area', 'grid-auto-columns', 'grid-auto-flow', 'grid-auto-rows', 'grid-column', 'grid-column-end', 'grid-column-gap', 'grid-column-start', 'grid-gap', 'grid-row', 'grid-row-end', 'grid-row-gap', 'grid-row-start', 'grid-template', 'grid-template-areas', 'grid-template-columns', 'grid-template-rows', 'hanging-punctuation', 'height', 'hyphens', 'icon', 'image-orientation', 'image-rendering', 'image-resolution', 'inline-box-align', 'justify-content', 'justify-items', 'justify-self', 'left', 'letter-spacing', 'line-break', 'line-height', 'line-stacking', 'line-stacking-ruby', 'line-stacking-shift', 'line-stacking-strategy', 'list-style', 'list-style-image', 'list-style-position', 'list-style-type', 'margin', 'margin-bottom', 'margin-left', 'margin-right', 'margin-top', 'marks', 'marquee-direction', 'marquee-loop', 'marquee-play-count', 'marquee-speed', 'marquee-style', 'max-height', 'max-width', 'min-height', 'min-width', 'mix-blend-mode', 'move-to', 'nav-down', 'nav-index', 'nav-left', 'nav-right', 'nav-up', 'object-fit', 'object-position', 'opacity', 'order', 'orphans', 'outline', 'outline-color', 'outline-offset', 'outline-style', 'outline-width', 'overflow', 'overflow-style', 'overflow-wrap', 'overflow-x', 'overflow-y', 'padding', 'padding-bottom', 'padding-left', 'padding-right', 'padding-top', 'page', 'page-break-after', 'page-break-before', 'page-break-inside', 'page-policy', 'pause', 'pause-after', 'pause-before', 'perspective', 'perspective-origin', 'pitch', 'pitch-range', 'place-content', 'place-items', 'place-self', 'play-during', 'position', 'presentation-level', 'punctuation-trim', 'quotes', 'region-break-after', 'region-break-before', 'region-break-inside', 'region-fragment', 'rendering-intent', 'resize', 'rest', 'rest-after', 'rest-before', 'richness', 'right', 'rotation', 'rotation-point', 'ruby-align', 'ruby-overhang', 'ruby-position', 'ruby-span', 'shape-image-threshold', 'shape-inside', 'shape-margin', 'shape-outside', 'size', 'speak', 'speak-as', 'speak-header', 'speak-numeral', 'speak-punctuation', 'speech-rate', 'stress', 'string-set', 'tab-size', 'table-layout', 'target', 'target-name', 'target-new', 'target-position', 'text-align', 'text-align-last', 'text-decoration', 'text-decoration-color', 'text-decoration-line', 'text-decoration-skip', 'text-decoration-style', 'text-emphasis', 'text-emphasis-color', 'text-emphasis-position', 'text-emphasis-style', 'text-height', 'text-indent', 'text-justify', 'text-outline', 'text-overflow', 'text-shadow', 'text-size-adjust', 'text-space-collapse', 'text-transform', 'text-underline-position', 'text-wrap', 'top', 'transform', 'transform-origin', 'transform-style', 'transition', 'transition-delay', 'transition-duration', 'transition-property', 'transition-timing-function', 'unicode-bidi', 'user-select', 'vertical-align', 'visibility', 'voice-balance', 'voice-duration', 'voice-family', 'voice-pitch', 'voice-range', 'voice-rate', 'voice-stress', 'voice-volume', 'volume', 'white-space', 'widows', 'width', 'will-change', 'word-break', 'word-spacing', 'word-wrap', 'z-index', // SVG-specific
'clip-path', 'clip-rule', 'mask', 'enable-background', 'filter', 'flood-color', 'flood-opacity', 'lighting-color', 'stop-color', 'stop-opacity', 'pointer-events', 'color-interpolation', 'color-interpolation-filters', 'color-rendering', 'fill', 'fill-opacity', 'fill-rule', 'image-rendering', 'marker', 'marker-end', 'marker-mid', 'marker-start', 'shape-rendering', 'stroke', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-rendering', 'baseline-shift', 'dominant-baseline', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'text-anchor', 'writing-mode'],
    propertyKeywords = keySet(propertyKeywords_);
var nonStandardPropertyKeywords_ = ['scrollbar-arrow-color', 'scrollbar-base-color', 'scrollbar-dark-shadow-color', 'scrollbar-face-color', 'scrollbar-highlight-color', 'scrollbar-shadow-color', 'scrollbar-3d-light-color', 'scrollbar-track-color', 'shape-inside', 'searchfield-cancel-button', 'searchfield-decoration', 'searchfield-results-button', 'searchfield-results-decoration', 'zoom'],
    nonStandardPropertyKeywords = keySet(nonStandardPropertyKeywords_);
var fontProperties_ = ['font-family', 'src', 'unicode-range', 'font-variant', 'font-feature-settings', 'font-stretch', 'font-weight', 'font-style'],
    fontProperties = keySet(fontProperties_);
var counterDescriptors_ = ['additive-symbols', 'fallback', 'negative', 'pad', 'prefix', 'range', 'speak-as', 'suffix', 'symbols', 'system'],
    counterDescriptors = keySet(counterDescriptors_);
var colorKeywords_ = ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'rebeccapurple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'],
    colorKeywords = keySet(colorKeywords_);
var valueKeywords_ = ['above', 'absolute', 'activeborder', 'additive', 'activecaption', 'afar', 'after-white-space', 'ahead', 'alias', 'all', 'all-scroll', 'alphabetic', 'alternate', 'always', 'amharic', 'amharic-abegede', 'antialiased', 'appworkspace', 'arabic-indic', 'armenian', 'asterisks', 'attr', 'auto', 'auto-flow', 'avoid', 'avoid-column', 'avoid-page', 'avoid-region', 'background', 'backwards', 'baseline', 'below', 'bidi-override', 'binary', 'bengali', 'blink', 'block', 'block-axis', 'bold', 'bolder', 'border', 'border-box', 'both', 'bottom', 'break', 'break-all', 'break-word', 'bullets', 'button', 'button-bevel', 'buttonface', 'buttonhighlight', 'buttonshadow', 'buttontext', 'calc', 'cambodian', 'capitalize', 'caps-lock-indicator', 'caption', 'captiontext', 'caret', 'cell', 'center', 'checkbox', 'circle', 'cjk-decimal', 'cjk-earthly-branch', 'cjk-heavenly-stem', 'cjk-ideographic', 'clear', 'clip', 'close-quote', 'col-resize', 'collapse', 'color', 'color-burn', 'color-dodge', 'column', 'column-reverse', 'compact', 'condensed', 'contain', 'content', 'contents', 'content-box', 'context-menu', 'continuous', 'copy', 'counter', 'counters', 'cover', 'crop', 'cross', 'crosshair', 'currentcolor', 'cursive', 'cyclic', 'darken', 'dashed', 'decimal', 'decimal-leading-zero', 'default', 'default-button', 'dense', 'destination-atop', 'destination-in', 'destination-out', 'destination-over', 'devanagari', 'difference', 'disc', 'discard', 'disclosure-closed', 'disclosure-open', 'document', 'dot-dash', 'dot-dot-dash', 'dotted', 'double', 'down', 'e-resize', 'ease', 'ease-in', 'ease-in-out', 'ease-out', 'element', 'ellipse', 'ellipsis', 'embed', 'end', 'ethiopic', 'ethiopic-abegede', 'ethiopic-abegede-am-et', 'ethiopic-abegede-gez', 'ethiopic-abegede-ti-er', 'ethiopic-abegede-ti-et', 'ethiopic-halehame-aa-er', 'ethiopic-halehame-aa-et', 'ethiopic-halehame-am-et', 'ethiopic-halehame-gez', 'ethiopic-halehame-om-et', 'ethiopic-halehame-sid-et', 'ethiopic-halehame-so-et', 'ethiopic-halehame-ti-er', 'ethiopic-halehame-ti-et', 'ethiopic-halehame-tig', 'ethiopic-numeric', 'ew-resize', 'exclusion', 'expanded', 'extends', 'extra-condensed', 'extra-expanded', 'fantasy', 'fast', 'fill', 'fixed', 'flat', 'flex', 'flex-end', 'flex-start', 'footnotes', 'forwards', 'from', 'geometricPrecision', 'georgian', 'graytext', 'grid', 'groove', 'gujarati', 'gurmukhi', 'hand', 'hangul', 'hangul-consonant', 'hard-light', 'hebrew', 'help', 'hidden', 'hide', 'higher', 'highlight', 'highlighttext', 'hiragana', 'hiragana-iroha', 'horizontal', 'hsl', 'hsla', 'hue', 'icon', 'ignore', 'inactiveborder', 'inactivecaption', 'inactivecaptiontext', 'infinite', 'infobackground', 'infotext', 'inherit', 'initial', 'inline', 'inline-axis', 'inline-block', 'inline-flex', 'inline-grid', 'inline-table', 'inset', 'inside', 'intrinsic', 'invert', 'italic', 'japanese-formal', 'japanese-informal', 'justify', 'kannada', 'katakana', 'katakana-iroha', 'keep-all', 'khmer', 'korean-hangul-formal', 'korean-hanja-formal', 'korean-hanja-informal', 'landscape', 'lao', 'large', 'larger', 'left', 'level', 'lighter', 'lighten', 'line-through', 'linear', 'linear-gradient', 'lines', 'list-item', 'listbox', 'listitem', 'local', 'logical', 'loud', 'lower', 'lower-alpha', 'lower-armenian', 'lower-greek', 'lower-hexadecimal', 'lower-latin', 'lower-norwegian', 'lower-roman', 'lowercase', 'ltr', 'luminosity', 'malayalam', 'match', 'matrix', 'matrix3d', 'media-controls-background', 'media-current-time-display', 'media-fullscreen-button', 'media-mute-button', 'media-play-button', 'media-return-to-realtime-button', 'media-rewind-button', 'media-seek-back-button', 'media-seek-forward-button', 'media-slider', 'media-sliderthumb', 'media-time-remaining-display', 'media-volume-slider', 'media-volume-slider-container', 'media-volume-sliderthumb', 'medium', 'menu', 'menulist', 'menulist-button', 'menulist-text', 'menulist-textfield', 'menutext', 'message-box', 'middle', 'min-intrinsic', 'mix', 'mongolian', 'monospace', 'move', 'multiple', 'multiply', 'myanmar', 'n-resize', 'narrower', 'ne-resize', 'nesw-resize', 'no-close-quote', 'no-drop', 'no-open-quote', 'no-repeat', 'none', 'normal', 'not-allowed', 'nowrap', 'ns-resize', 'numbers', 'numeric', 'nw-resize', 'nwse-resize', 'oblique', 'octal', 'opacity', 'open-quote', 'optimizeLegibility', 'optimizeSpeed', 'oriya', 'oromo', 'outset', 'outside', 'outside-shape', 'overlay', 'overline', 'padding', 'padding-box', 'painted', 'page', 'paused', 'persian', 'perspective', 'plus-darker', 'plus-lighter', 'pointer', 'polygon', 'portrait', 'pre', 'pre-line', 'pre-wrap', 'preserve-3d', 'progress', 'push-button', 'radial-gradient', 'radio', 'read-only', 'read-write', 'read-write-plaintext-only', 'rectangle', 'region', 'relative', 'repeat', 'repeating-linear-gradient', 'repeating-radial-gradient', 'repeat-x', 'repeat-y', 'reset', 'reverse', 'rgb', 'rgba', 'ridge', 'right', 'rotate', 'rotate3d', 'rotateX', 'rotateY', 'rotateZ', 'round', 'row', 'row-resize', 'row-reverse', 'rtl', 'run-in', 'running', 's-resize', 'sans-serif', 'saturation', 'scale', 'scale3d', 'scaleX', 'scaleY', 'scaleZ', 'screen', 'scroll', 'scrollbar', 'scroll-position', 'se-resize', 'searchfield', 'searchfield-cancel-button', 'searchfield-decoration', 'searchfield-results-button', 'searchfield-results-decoration', 'self-start', 'self-end', 'semi-condensed', 'semi-expanded', 'separate', 'serif', 'show', 'sidama', 'simp-chinese-formal', 'simp-chinese-informal', 'single', 'skew', 'skewX', 'skewY', 'skip-white-space', 'slide', 'slider-horizontal', 'slider-vertical', 'sliderthumb-horizontal', 'sliderthumb-vertical', 'slow', 'small', 'small-caps', 'small-caption', 'smaller', 'soft-light', 'solid', 'somali', 'source-atop', 'source-in', 'source-out', 'source-over', 'space', 'space-around', 'space-between', 'space-evenly', 'spell-out', 'square', 'square-button', 'start', 'static', 'status-bar', 'stretch', 'stroke', 'sub', 'subpixel-antialiased', 'super', 'sw-resize', 'symbolic', 'symbols', 'system-ui', 'table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row', 'table-row-group', 'tamil', 'telugu', 'text', 'text-bottom', 'text-top', 'textarea', 'textfield', 'thai', 'thick', 'thin', 'threeddarkshadow', 'threedface', 'threedhighlight', 'threedlightshadow', 'threedshadow', 'tibetan', 'tigre', 'tigrinya-er', 'tigrinya-er-abegede', 'tigrinya-et', 'tigrinya-et-abegede', 'to', 'top', 'trad-chinese-formal', 'trad-chinese-informal', 'transform', 'translate', 'translate3d', 'translateX', 'translateY', 'translateZ', 'transparent', 'ultra-condensed', 'ultra-expanded', 'underline', 'unset', 'up', 'upper-alpha', 'upper-armenian', 'upper-greek', 'upper-hexadecimal', 'upper-latin', 'upper-norwegian', 'upper-roman', 'uppercase', 'urdu', 'url', 'var', 'vertical', 'vertical-text', 'visible', 'visibleFill', 'visiblePainted', 'visibleStroke', 'visual', 'w-resize', 'wait', 'wave', 'wider', 'window', 'windowframe', 'windowtext', 'words', 'wrap', 'wrap-reverse', 'x-large', 'x-small', 'xor', 'xx-large', 'xx-small'],
    valueKeywords = keySet(valueKeywords_);
var allWords = documentTypes_.concat(mediaTypes_).concat(mediaFeatures_).concat(mediaValueKeywords_).concat(propertyKeywords_).concat(nonStandardPropertyKeywords_).concat(colorKeywords_).concat(valueKeywords_);
_index__WEBPACK_IMPORTED_MODULE_0__["default"].registerHelper('hintWords', 'css', allWords);

function tokenCComment(stream, state) {
  var maybeEnd = false,
      ch;

  while ((ch = stream.next()) != null) {
    if (maybeEnd && ch == '/') {
      state.tokenize = null;
      break;
    }

    maybeEnd = ch == '*';
  }

  return ['comment', 'comment'];
}

_index__WEBPACK_IMPORTED_MODULE_0__["default"].defineMIME('text/css', {
  documentTypes: documentTypes,
  mediaTypes: mediaTypes,
  mediaFeatures: mediaFeatures,
  mediaValueKeywords: mediaValueKeywords,
  propertyKeywords: propertyKeywords,
  nonStandardPropertyKeywords: nonStandardPropertyKeywords,
  fontProperties: fontProperties,
  counterDescriptors: counterDescriptors,
  colorKeywords: colorKeywords,
  valueKeywords: valueKeywords,
  tokenHooks: {
    '/': function _(stream, state) {
      if (!stream.eat('*')) {
        return false;
      }

      state.tokenize = tokenCComment;
      return tokenCComment(stream, state);
    }
  },
  name: 'css'
});
_index__WEBPACK_IMPORTED_MODULE_0__["default"].defineMIME('text/x-scss', {
  mediaTypes: mediaTypes,
  mediaFeatures: mediaFeatures,
  mediaValueKeywords: mediaValueKeywords,
  propertyKeywords: propertyKeywords,
  nonStandardPropertyKeywords: nonStandardPropertyKeywords,
  colorKeywords: colorKeywords,
  valueKeywords: valueKeywords,
  fontProperties: fontProperties,
  allowNested: true,
  lineComment: '//',
  tokenHooks: {
    '/': function _(stream, state) {
      if (stream.eat('/')) {
        stream.skipToEnd();
        return ['comment', 'comment'];
      } else if (stream.eat('*')) {
        state.tokenize = tokenCComment;
        return tokenCComment(stream, state);
      } else {
        return ['operator', 'operator'];
      }
    },
    ':': function _(stream) {
      if (stream.match(/\s*\{/, false)) {
        return [null, null];
      }

      return false;
    },
    $: function $(stream) {
      stream.match(/^[\w-]+/);

      if (stream.match(/^\s*:/, false)) {
        return ['variable-2', 'variable-definition'];
      }

      return ['variable-2', 'variable'];
    },
    '#': function _(stream) {
      if (!stream.eat('{')) {
        return false;
      }

      return [null, 'interpolation'];
    }
  },
  name: 'css',
  helperType: 'scss'
});
_index__WEBPACK_IMPORTED_MODULE_0__["default"].defineMIME('text/x-less', {
  mediaTypes: mediaTypes,
  mediaFeatures: mediaFeatures,
  mediaValueKeywords: mediaValueKeywords,
  propertyKeywords: propertyKeywords,
  nonStandardPropertyKeywords: nonStandardPropertyKeywords,
  colorKeywords: colorKeywords,
  valueKeywords: valueKeywords,
  fontProperties: fontProperties,
  allowNested: true,
  lineComment: '//',
  tokenHooks: {
    '/': function _(stream, state) {
      if (stream.eat('/')) {
        stream.skipToEnd();
        return ['comment', 'comment'];
      } else if (stream.eat('*')) {
        state.tokenize = tokenCComment;
        return tokenCComment(stream, state);
      } else {
        return ['operator', 'operator'];
      }
    },
    '@': function _(stream) {
      if (stream.eat('{')) {
        return [null, 'interpolation'];
      }

      if (stream.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i, false)) {
        return false;
      }

      stream.eatWhile(/[\w\\\-]/);

      if (stream.match(/^\s*:/, false)) {
        return ['variable-2', 'variable-definition'];
      }

      return ['variable-2', 'variable'];
    },
    '&': function _() {
      return ['atom', 'atom'];
    }
  },
  name: 'css',
  helperType: 'less'
});
_index__WEBPACK_IMPORTED_MODULE_0__["default"].defineMIME('text/x-gss', {
  documentTypes: documentTypes,
  mediaTypes: mediaTypes,
  mediaFeatures: mediaFeatures,
  propertyKeywords: propertyKeywords,
  nonStandardPropertyKeywords: nonStandardPropertyKeywords,
  fontProperties: fontProperties,
  counterDescriptors: counterDescriptors,
  colorKeywords: colorKeywords,
  valueKeywords: valueKeywords,
  supportsAtComponent: true,
  tokenHooks: {
    '/': function _(stream, state) {
      if (!stream.eat('*')) {
        return false;
      }

      state.tokenize = tokenCComment;
      return tokenCComment(stream, state);
    }
  },
  name: 'css',
  helperType: 'gss'
});
_index__WEBPACK_IMPORTED_MODULE_0__["default"].defineMIME('less', 'css');
_index__WEBPACK_IMPORTED_MODULE_0__["default"].defineMIME('scss', 'css');
_index__WEBPACK_IMPORTED_MODULE_0__["default"].defineMIME('sass', 'css');
_index__WEBPACK_IMPORTED_MODULE_0__["default"].defineMIME('style', 'css');

/***/ }),

/***/ "./resources/assets/js/components/MDEditor/assets/js/codemirror/mode/javascript.js":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/assets/js/codemirror/mode/javascript.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./resources/assets/js/components/MDEditor/assets/js/codemirror/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


_index__WEBPACK_IMPORTED_MODULE_0__["default"].defineMode('javascript', defineJSMode);
_index__WEBPACK_IMPORTED_MODULE_0__["default"].defineMode('js', defineJSMode);

function defineJSMode(config, parserConfig) {
  var indentUnit = config.indentUnit;
  var statementIndent = parserConfig.statementIndent;
  var jsonldMode = parserConfig.jsonld;
  var jsonMode = parserConfig.json || jsonldMode;
  var isTS = parserConfig.typescript;
  var wordRE = parserConfig.wordCharacters || /[\w$\xa1-\uffff]/; // Tokenizer

  var keywords = function () {
    function kw(type) {
      return {
        type: type,
        style: 'keyword'
      };
    }

    var A = kw('keyword a'),
        B = kw('keyword b'),
        C = kw('keyword c'),
        D = kw('keyword d');
    var operator = kw('operator'),
        atom = {
      type: 'atom',
      style: 'atom'
    };
    return {
      "if": kw('if'),
      "while": A,
      "with": A,
      "else": B,
      "do": B,
      "try": B,
      "finally": B,
      "return": D,
      "break": D,
      "continue": D,
      "new": kw('new'),
      "delete": C,
      "void": C,
      "throw": C,
      "debugger": kw('debugger'),
      "var": kw('var'),
      "const": kw('var'),
      "let": kw('var'),
      "function": kw('function'),
      "catch": kw('catch'),
      "for": kw('for'),
      "switch": kw('switch'),
      "case": kw('case'),
      "default": kw('default'),
      "in": operator,
      "typeof": operator,
      "instanceof": operator,
      "true": atom,
      "false": atom,
      "null": atom,
      undefined: atom,
      NaN: atom,
      Infinity: atom,
      "this": kw('this'),
      "class": kw('class'),
      "super": kw('atom'),
      "yield": C,
      "export": kw('export'),
      "import": kw('import'),
      "extends": C,
      "await": C
    };
  }();

  var isOperatorChar = /[+\-*&%=<>!?|~^@]/;
  var isJsonldKeyword = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;

  function readRegexp(stream) {
    var escaped = false,
        next,
        inSet = false;

    while ((next = stream.next()) != null) {
      if (!escaped) {
        if (next == '/' && !inSet) {
          return;
        }

        if (next == '[') {
          inSet = true;
        } else if (inSet && next == ']') {
          inSet = false;
        }
      }

      escaped = !escaped && next == '\\';
    }
  } // Used as scratch variables to communicate multiple values without
  // consing up tons of objects.


  var type, content;

  function ret(tp, style, cont) {
    type = tp;
    content = cont;
    return style;
  }

  function tokenBase(stream, state) {
    var ch = stream.next();

    if (ch == '"' || ch == '\'') {
      state.tokenize = tokenString(ch);
      return state.tokenize(stream, state);
    } else if (ch == '.' && stream.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) {
      return ret('number', 'number');
    } else if (ch == '.' && stream.match('..')) {
      return ret('spread', 'meta');
    } else if (/[\[\]{}\(\),;\:\.]/.test(ch)) {
      return ret(ch);
    } else if (ch == '=' && stream.eat('>')) {
      return ret('=>', 'operator');
    } else if (ch == '0' && stream.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/)) {
      return ret('number', 'number');
    } else if (/\d/.test(ch)) {
      stream.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/);
      return ret('number', 'number');
    } else if (ch == '/') {
      if (stream.eat('*')) {
        state.tokenize = tokenComment;
        return tokenComment(stream, state);
      } else if (stream.eat('/')) {
        stream.skipToEnd();
        return ret('comment', 'comment');
      } else if (expressionAllowed(stream, state, 1)) {
        readRegexp(stream);
        stream.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/);
        return ret('regexp', 'string-2');
      } else {
        stream.eat('=');
        return ret('operator', 'operator', stream.current());
      }
    } else if (ch == '`') {
      state.tokenize = tokenQuasi;
      return tokenQuasi(stream, state);
    } else if (ch == '#') {
      stream.skipToEnd();
      return ret('error', 'error');
    } else if (ch == '<' && stream.match('!--') || ch == '-' && stream.match('->')) {
      stream.skipToEnd();
      return ret('comment', 'comment');
    } else if (isOperatorChar.test(ch)) {
      if (ch != '>' || !state.lexical || state.lexical.type != '>') {
        if (stream.eat('=')) {
          if (ch == '!' || ch == '=') {
            stream.eat('=');
          }
        } else if (/[<>*+\-]/.test(ch)) {
          stream.eat(ch);

          if (ch == '>') {
            stream.eat(ch);
          }
        }
      }

      return ret('operator', 'operator', stream.current());
    } else if (wordRE.test(ch)) {
      stream.eatWhile(wordRE);
      var word = stream.current();

      if (state.lastType != '.') {
        if (keywords.propertyIsEnumerable(word)) {
          var kw = keywords[word];
          return ret(kw.type, kw.style, word);
        }

        if (word == 'async' && stream.match(/^(\s|\/\*.*?\*\/)*[\[\(\w]/, false)) {
          return ret('async', 'keyword', word);
        }
      }

      return ret('variable', 'variable', word);
    }
  }

  function tokenString(quote) {
    return function (stream, state) {
      var escaped = false,
          next;

      if (jsonldMode && stream.peek() == '@' && stream.match(isJsonldKeyword)) {
        state.tokenize = tokenBase;
        return ret('jsonld-keyword', 'meta');
      }

      while ((next = stream.next()) != null) {
        if (next == quote && !escaped) {
          break;
        }

        escaped = !escaped && next == '\\';
      }

      if (!escaped) {
        state.tokenize = tokenBase;
      }

      return ret('string', 'string');
    };
  }

  function tokenComment(stream, state) {
    var maybeEnd = false,
        ch;

    while (ch = stream.next()) {
      if (ch == '/' && maybeEnd) {
        state.tokenize = tokenBase;
        break;
      }

      maybeEnd = ch == '*';
    }

    return ret('comment', 'comment');
  }

  function tokenQuasi(stream, state) {
    var escaped = false,
        next;

    while ((next = stream.next()) != null) {
      if (!escaped && (next == '`' || next == '$' && stream.eat('{'))) {
        state.tokenize = tokenBase;
        break;
      }

      escaped = !escaped && next == '\\';
    }

    return ret('quasi', 'string-2', stream.current());
  }

  var brackets = '([{}])'; // This is a crude lookahead trick to try and notice that we're
  // parsing the argument patterns for a fat-arrow function before we
  // actually hit the arrow token. It only works if the arrow is on
  // the same line as the arguments and there's no strange noise
  // (comments) in between. Fallback is to only notice when we hit the
  // arrow, and not declare the arguments as locals for the arrow
  // body.

  function findFatArrow(stream, state) {
    if (state.fatArrowAt) {
      state.fatArrowAt = null;
    }

    var arrow = stream.string.indexOf('=>', stream.start);

    if (arrow < 0) {
      return;
    }

    if (isTS) {
      // Try to skip TypeScript return type declarations after the arguments
      var m = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(stream.string.slice(stream.start, arrow));

      if (m) {
        arrow = m.index;
      }
    }

    var depth = 0,
        sawSomething = false;

    for (var pos = arrow - 1; pos >= 0; --pos) {
      var ch = stream.string.charAt(pos);
      var bracket = brackets.indexOf(ch);

      if (bracket >= 0 && bracket < 3) {
        if (!depth) {
          ++pos;
          break;
        }

        if (--depth == 0) {
          if (ch == '(') {
            sawSomething = true;
          }

          break;
        }
      } else if (bracket >= 3 && bracket < 6) {
        ++depth;
      } else if (wordRE.test(ch)) {
        sawSomething = true;
      } else if (/["'\/`]/.test(ch)) {
        for (;; --pos) {
          if (pos == 0) {
            return;
          }

          var next = stream.string.charAt(pos - 1);

          if (next == ch && stream.string.charAt(pos - 2) != '\\') {
            pos--;
            break;
          }
        }
      } else if (sawSomething && !depth) {
        ++pos;
        break;
      }
    }

    if (sawSomething && !depth) {
      state.fatArrowAt = pos;
    }
  } // Parser


  var atomicTypes = {
    atom: true,
    number: true,
    variable: true,
    string: true,
    regexp: true,
    "this": true,
    'jsonld-keyword': true
  };

  function JSLexical(indented, column, type, align, prev, info) {
    this.indented = indented;
    this.column = column;
    this.type = type;
    this.prev = prev;
    this.info = info;

    if (align != null) {
      this.align = align;
    }
  }

  function inScope(state, varname) {
    for (var v = state.localVars; v; v = v.next) {
      if (v.name == varname) {
        return true;
      }
    }

    for (var cx = state.context; cx; cx = cx.prev) {
      for (var v = cx.vars; v; v = v.next) {
        if (v.name == varname) {
          return true;
        }
      }
    }
  }

  function parseJS(state, style, type, content, stream) {
    var cc = state.cc; // Communicate our context to the combinators.
    // (Less wasteful than consing up a hundred closures on every call.)

    cx.state = state;
    cx.stream = stream;
    cx.marked = null, cx.cc = cc;
    cx.style = style;

    if (!state.lexical.hasOwnProperty('align')) {
      state.lexical.align = true;
    }

    while (true) {
      var combinator = cc.length ? cc.pop() : jsonMode ? expression : statement;

      if (combinator(type, content)) {
        while (cc.length && cc[cc.length - 1].lex) {
          cc.pop()();
        }

        if (cx.marked) {
          return cx.marked;
        }

        if (type == 'variable' && inScope(state, content)) {
          return 'variable-2';
        }

        return style;
      }
    }
  } // Combinator utils


  var cx = {
    state: null,
    column: null,
    marked: null,
    cc: null
  };

  function pass() {
    for (var i = arguments.length - 1; i >= 0; i--) {
      cx.cc.push(arguments[i]);
    }
  }

  function cont() {
    pass.apply(null, arguments);
    return true;
  }

  function inList(name, list) {
    for (var v = list; v; v = v.next) {
      if (v.name == name) {
        return true;
      }
    }

    return false;
  }

  function register(varname) {
    var state = cx.state;
    cx.marked = 'def';

    if (state.context) {
      if (state.lexical.info == 'var' && state.context && state.context.block) {
        // FIXME function decls are also not block scoped
        var newContext = registerVarScoped(varname, state.context);

        if (newContext != null) {
          state.context = newContext;
          return;
        }
      } else if (!inList(varname, state.localVars)) {
        state.localVars = new Var(varname, state.localVars);
        return;
      }
    } // Fall through means this is global


    if (parserConfig.globalVars && !inList(varname, state.globalVars)) {
      state.globalVars = new Var(varname, state.globalVars);
    }
  }

  function registerVarScoped(varname, context) {
    if (!context) {
      return null;
    } else if (context.block) {
      var inner = registerVarScoped(varname, context.prev);

      if (!inner) {
        return null;
      }

      if (inner == context.prev) {
        return context;
      }

      return new Context(inner, context.vars, true);
    } else if (inList(varname, context.vars)) {
      return context;
    } else {
      return new Context(context.prev, new Var(varname, context.vars), false);
    }
  }

  function isModifier(name) {
    return name == 'public' || name == 'private' || name == 'protected' || name == 'abstract' || name == 'readonly';
  } // Combinators


  function Context(prev, vars, block) {
    this.prev = prev;
    this.vars = vars;
    this.block = block;
  }

  function Var(name, next) {
    this.name = name;
    this.next = next;
  }

  var defaultVars = new Var('this', new Var('arguments', null));

  function pushcontext() {
    cx.state.context = new Context(cx.state.context, cx.state.localVars, false);
    cx.state.localVars = defaultVars;
  }

  function pushblockcontext() {
    cx.state.context = new Context(cx.state.context, cx.state.localVars, true);
    cx.state.localVars = null;
  }

  function popcontext() {
    cx.state.localVars = cx.state.context.vars;
    cx.state.context = cx.state.context.prev;
  }

  popcontext.lex = true;

  function pushlex(type, info) {
    var result = function result() {
      var state = cx.state,
          indent = state.indented;

      if (state.lexical.type == 'stat') {
        indent = state.lexical.indented;
      } else {
        for (var outer = state.lexical; outer && outer.type == ')' && outer.align; outer = outer.prev) {
          indent = outer.indented;
        }
      }

      state.lexical = new JSLexical(indent, cx.stream.column(), type, null, state.lexical, info);
    };

    result.lex = true;
    return result;
  }

  function poplex() {
    var state = cx.state;

    if (state.lexical.prev) {
      if (state.lexical.type == ')') {
        state.indented = state.lexical.indented;
      }

      state.lexical = state.lexical.prev;
    }
  }

  poplex.lex = true;

  function expect(wanted) {
    function exp(type) {
      if (type == wanted) {
        return cont();
      } else if (wanted == ';' || type == '}' || type == ')' || type == ']') {
        return pass();
      } else {
        return cont(exp);
      }
    }

    return exp;
  }

  function statement(type, value) {
    if (type == 'var') {
      return cont(pushlex('vardef', value), vardef, expect(';'), poplex);
    }

    if (type == 'keyword a') {
      return cont(pushlex('form'), parenExpr, statement, poplex);
    }

    if (type == 'keyword b') {
      return cont(pushlex('form'), statement, poplex);
    }

    if (type == 'keyword d') {
      return cx.stream.match(/^\s*$/, false) ? cont() : cont(pushlex('stat'), maybeexpression, expect(';'), poplex);
    }

    if (type == 'debugger') {
      return cont(expect(';'));
    }

    if (type == '{') {
      return cont(pushlex('}'), pushblockcontext, block, poplex, popcontext);
    }

    if (type == ';') {
      return cont();
    }

    if (type == 'if') {
      if (cx.state.lexical.info == 'else' && cx.state.cc[cx.state.cc.length - 1] == poplex) {
        cx.state.cc.pop()();
      }

      return cont(pushlex('form'), parenExpr, statement, poplex, maybeelse);
    }

    if (type == 'function') {
      return cont(functiondef);
    }

    if (type == 'for') {
      return cont(pushlex('form'), forspec, statement, poplex);
    }

    if (type == 'class' || isTS && value == 'interface') {
      cx.marked = 'keyword';
      return cont(pushlex('form', type == 'class' ? type : value), className, poplex);
    }

    if (type == 'variable') {
      if (isTS && value == 'declare') {
        cx.marked = 'keyword';
        return cont(statement);
      } else if (isTS && (value == 'module' || value == 'enum' || value == 'type') && cx.stream.match(/^\s*\w/, false)) {
        cx.marked = 'keyword';

        if (value == 'enum') {
          return cont(enumdef);
        } else if (value == 'type') {
          return cont(typename, expect('operator'), typeexpr, expect(';'));
        } else {
          return cont(pushlex('form'), pattern, expect('{'), pushlex('}'), block, poplex, poplex);
        }
      } else if (isTS && value == 'namespace') {
        cx.marked = 'keyword';
        return cont(pushlex('form'), expression, statement, poplex);
      } else if (isTS && value == 'abstract') {
        cx.marked = 'keyword';
        return cont(statement);
      } else {
        return cont(pushlex('stat'), maybelabel);
      }
    }

    if (type == 'switch') {
      return cont(pushlex('form'), parenExpr, expect('{'), pushlex('}', 'switch'), pushblockcontext, block, poplex, poplex, popcontext);
    }

    if (type == 'case') {
      return cont(expression, expect(':'));
    }

    if (type == 'default') {
      return cont(expect(':'));
    }

    if (type == 'catch') {
      return cont(pushlex('form'), pushcontext, maybeCatchBinding, statement, poplex, popcontext);
    }

    if (type == 'export') {
      return cont(pushlex('stat'), afterExport, poplex);
    }

    if (type == 'import') {
      return cont(pushlex('stat'), afterImport, poplex);
    }

    if (type == 'async') {
      return cont(statement);
    }

    if (value == '@') {
      return cont(expression, statement);
    }

    return pass(pushlex('stat'), expression, expect(';'), poplex);
  }

  function maybeCatchBinding(type) {
    if (type == '(') {
      return cont(funarg, expect(')'));
    }
  }

  function expression(type, value) {
    return expressionInner(type, value, false);
  }

  function expressionNoComma(type, value) {
    return expressionInner(type, value, true);
  }

  function parenExpr(type) {
    if (type != '(') {
      return pass();
    }

    return cont(pushlex(')'), expression, expect(')'), poplex);
  }

  function expressionInner(type, value, noComma) {
    if (cx.state.fatArrowAt == cx.stream.start) {
      var body = noComma ? arrowBodyNoComma : arrowBody;

      if (type == '(') {
        return cont(pushcontext, pushlex(')'), commasep(funarg, ')'), poplex, expect('=>'), body, popcontext);
      } else if (type == 'variable') {
        return pass(pushcontext, pattern, expect('=>'), body, popcontext);
      }
    }

    var maybeop = noComma ? maybeoperatorNoComma : maybeoperatorComma;

    if (atomicTypes.hasOwnProperty(type)) {
      return cont(maybeop);
    }

    if (type == 'function') {
      return cont(functiondef, maybeop);
    }

    if (type == 'class' || isTS && value == 'interface') {
      cx.marked = 'keyword';
      return cont(pushlex('form'), classExpression, poplex);
    }

    if (type == 'keyword c' || type == 'async') {
      return cont(noComma ? expressionNoComma : expression);
    }

    if (type == '(') {
      return cont(pushlex(')'), maybeexpression, expect(')'), poplex, maybeop);
    }

    if (type == 'operator' || type == 'spread') {
      return cont(noComma ? expressionNoComma : expression);
    }

    if (type == '[') {
      return cont(pushlex(']'), arrayLiteral, poplex, maybeop);
    }

    if (type == '{') {
      return contCommasep(objprop, '}', null, maybeop);
    }

    if (type == 'quasi') {
      return pass(quasi, maybeop);
    }

    if (type == 'new') {
      return cont(maybeTarget(noComma));
    }

    if (type == 'import') {
      return cont(expression);
    }

    return cont();
  }

  function maybeexpression(type) {
    if (type.match(/[;\}\)\],]/)) {
      return pass();
    }

    return pass(expression);
  }

  function maybeoperatorComma(type, value) {
    if (type == ',') {
      return cont(expression);
    }

    return maybeoperatorNoComma(type, value, false);
  }

  function maybeoperatorNoComma(type, value, noComma) {
    var me = noComma == false ? maybeoperatorComma : maybeoperatorNoComma;
    var expr = noComma == false ? expression : expressionNoComma;

    if (type == '=>') {
      return cont(pushcontext, noComma ? arrowBodyNoComma : arrowBody, popcontext);
    }

    if (type == 'operator') {
      if (/\+\+|--/.test(value) || isTS && value == '!') {
        return cont(me);
      }

      if (isTS && value == '<' && cx.stream.match(/^([^>]|<.*?>)*>\s*\(/, false)) {
        return cont(pushlex('>'), commasep(typeexpr, '>'), poplex, me);
      }

      if (value == '?') {
        return cont(expression, expect(':'), expr);
      }

      return cont(expr);
    }

    if (type == 'quasi') {
      return pass(quasi, me);
    }

    if (type == ';') {
      return;
    }

    if (type == '(') {
      return contCommasep(expressionNoComma, ')', 'call', me);
    }

    if (type == '.') {
      return cont(property, me);
    }

    if (type == '[') {
      return cont(pushlex(']'), maybeexpression, expect(']'), poplex, me);
    }

    if (isTS && value == 'as') {
      cx.marked = 'keyword';
      return cont(typeexpr, me);
    }

    if (type == 'regexp') {
      cx.state.lastType = cx.marked = 'operator';
      cx.stream.backUp(cx.stream.pos - cx.stream.start - 1);
      return cont(expr);
    }
  }

  function quasi(type, value) {
    if (type != 'quasi') {
      return pass();
    }

    if (value.slice(value.length - 2) != '${') {
      return cont(quasi);
    }

    return cont(expression, continueQuasi);
  }

  function continueQuasi(type) {
    if (type == '}') {
      cx.marked = 'string-2';
      cx.state.tokenize = tokenQuasi;
      return cont(quasi);
    }
  }

  function arrowBody(type) {
    findFatArrow(cx.stream, cx.state);
    return pass(type == '{' ? statement : expression);
  }

  function arrowBodyNoComma(type) {
    findFatArrow(cx.stream, cx.state);
    return pass(type == '{' ? statement : expressionNoComma);
  }

  function maybeTarget(noComma) {
    return function (type) {
      if (type == '.') {
        return cont(noComma ? targetNoComma : target);
      } else if (type == 'variable' && isTS) {
        return cont(maybeTypeArgs, noComma ? maybeoperatorNoComma : maybeoperatorComma);
      } else {
        return pass(noComma ? expressionNoComma : expression);
      }
    };
  }

  function target(_, value) {
    if (value == 'target') {
      cx.marked = 'keyword';
      return cont(maybeoperatorComma);
    }
  }

  function targetNoComma(_, value) {
    if (value == 'target') {
      cx.marked = 'keyword';
      return cont(maybeoperatorNoComma);
    }
  }

  function maybelabel(type) {
    if (type == ':') {
      return cont(poplex, statement);
    }

    return pass(maybeoperatorComma, expect(';'), poplex);
  }

  function property(type) {
    if (type == 'variable') {
      cx.marked = 'property';
      return cont();
    }
  }

  function objprop(type, value) {
    if (type == 'async') {
      cx.marked = 'property';
      return cont(objprop);
    } else if (type == 'variable' || cx.style == 'keyword') {
      cx.marked = 'property';

      if (value == 'get' || value == 'set') {
        return cont(getterSetter);
      }

      var m; // Work around fat-arrow-detection complication for detecting typescript typed arrow params

      if (isTS && cx.state.fatArrowAt == cx.stream.start && (m = cx.stream.match(/^\s*:\s*/, false))) {
        cx.state.fatArrowAt = cx.stream.pos + m[0].length;
      }

      return cont(afterprop);
    } else if (type == 'number' || type == 'string') {
      cx.marked = jsonldMode ? 'property' : cx.style + ' property';
      return cont(afterprop);
    } else if (type == 'jsonld-keyword') {
      return cont(afterprop);
    } else if (isTS && isModifier(value)) {
      cx.marked = 'keyword';
      return cont(objprop);
    } else if (type == '[') {
      return cont(expression, maybetype, expect(']'), afterprop);
    } else if (type == 'spread') {
      return cont(expressionNoComma, afterprop);
    } else if (value == '*') {
      cx.marked = 'keyword';
      return cont(objprop);
    } else if (type == ':') {
      return pass(afterprop);
    }
  }

  function getterSetter(type) {
    if (type != 'variable') {
      return pass(afterprop);
    }

    cx.marked = 'property';
    return cont(functiondef);
  }

  function afterprop(type) {
    if (type == ':') {
      return cont(expressionNoComma);
    }

    if (type == '(') {
      return pass(functiondef);
    }
  }

  function commasep(what, end, sep) {
    function proceed(type, value) {
      if (sep ? sep.indexOf(type) > -1 : type == ',') {
        var lex = cx.state.lexical;

        if (lex.info == 'call') {
          lex.pos = (lex.pos || 0) + 1;
        }

        return cont(function (type, value) {
          if (type == end || value == end) {
            return pass();
          }

          return pass(what);
        }, proceed);
      }

      if (type == end || value == end) {
        return cont();
      }

      if (sep && sep.indexOf(';') > -1) {
        return pass(what);
      }

      return cont(expect(end));
    }

    return function (type, value) {
      if (type == end || value == end) {
        return cont();
      }

      return pass(what, proceed);
    };
  }

  function contCommasep(what, end, info) {
    for (var i = 3; i < arguments.length; i++) {
      cx.cc.push(arguments[i]);
    }

    return cont(pushlex(end, info), commasep(what, end), poplex);
  }

  function block(type) {
    if (type == '}') {
      return cont();
    }

    return pass(statement, block);
  }

  function maybetype(type, value) {
    if (isTS) {
      if (type == ':') {
        return cont(typeexpr);
      }

      if (value == '?') {
        return cont(maybetype);
      }
    }
  }

  function maybetypeOrIn(type, value) {
    if (isTS && (type == ':' || value == 'in')) {
      return cont(typeexpr);
    }
  }

  function mayberettype(type) {
    if (isTS && type == ':') {
      if (cx.stream.match(/^\s*\w+\s+is\b/, false)) {
        return cont(expression, isKW, typeexpr);
      } else {
        return cont(typeexpr);
      }
    }
  }

  function isKW(_, value) {
    if (value == 'is') {
      cx.marked = 'keyword';
      return cont();
    }
  }

  function typeexpr(type, value) {
    if (value == 'keyof' || value == 'typeof' || value == 'infer') {
      cx.marked = 'keyword';
      return cont(value == 'typeof' ? expressionNoComma : typeexpr);
    }

    if (type == 'variable' || value == 'void') {
      cx.marked = 'type';
      return cont(afterType);
    }

    if (value == '|' || value == '&') {
      return cont(typeexpr);
    }

    if (type == 'string' || type == 'number' || type == 'atom') {
      return cont(afterType);
    }

    if (type == '[') {
      return cont(pushlex(']'), commasep(typeexpr, ']', ','), poplex, afterType);
    }

    if (type == '{') {
      return cont(pushlex('}'), commasep(typeprop, '}', ',;'), poplex, afterType);
    }

    if (type == '(') {
      return cont(commasep(typearg, ')'), maybeReturnType, afterType);
    }

    if (type == '<') {
      return cont(commasep(typeexpr, '>'), typeexpr);
    }
  }

  function maybeReturnType(type) {
    if (type == '=>') {
      return cont(typeexpr);
    }
  }

  function typeprop(type, value) {
    if (type == 'variable' || cx.style == 'keyword') {
      cx.marked = 'property';
      return cont(typeprop);
    } else if (value == '?' || type == 'number' || type == 'string') {
      return cont(typeprop);
    } else if (type == ':') {
      return cont(typeexpr);
    } else if (type == '[') {
      return cont(expect('variable'), maybetypeOrIn, expect(']'), typeprop);
    } else if (type == '(') {
      return pass(functiondecl, typeprop);
    }
  }

  function typearg(type, value) {
    if (type == 'variable' && cx.stream.match(/^\s*[?:]/, false) || value == '?') {
      return cont(typearg);
    }

    if (type == ':') {
      return cont(typeexpr);
    }

    if (type == 'spread') {
      return cont(typearg);
    }

    return pass(typeexpr);
  }

  function afterType(type, value) {
    if (value == '<') {
      return cont(pushlex('>'), commasep(typeexpr, '>'), poplex, afterType);
    }

    if (value == '|' || type == '.' || value == '&') {
      return cont(typeexpr);
    }

    if (type == '[') {
      return cont(typeexpr, expect(']'), afterType);
    }

    if (value == 'extends' || value == 'implements') {
      cx.marked = 'keyword';
      return cont(typeexpr);
    }

    if (value == '?') {
      return cont(typeexpr, expect(':'), typeexpr);
    }
  }

  function maybeTypeArgs(_, value) {
    if (value == '<') {
      return cont(pushlex('>'), commasep(typeexpr, '>'), poplex, afterType);
    }
  }

  function typeparam() {
    return pass(typeexpr, maybeTypeDefault);
  }

  function maybeTypeDefault(_, value) {
    if (value == '=') {
      return cont(typeexpr);
    }
  }

  function vardef(_, value) {
    if (value == 'enum') {
      cx.marked = 'keyword';
      return cont(enumdef);
    }

    return pass(pattern, maybetype, maybeAssign, vardefCont);
  }

  function pattern(type, value) {
    if (isTS && isModifier(value)) {
      cx.marked = 'keyword';
      return cont(pattern);
    }

    if (type == 'variable') {
      register(value);
      return cont();
    }

    if (type == 'spread') {
      return cont(pattern);
    }

    if (type == '[') {
      return contCommasep(eltpattern, ']');
    }

    if (type == '{') {
      return contCommasep(proppattern, '}');
    }
  }

  function proppattern(type, value) {
    if (type == 'variable' && !cx.stream.match(/^\s*:/, false)) {
      register(value);
      return cont(maybeAssign);
    }

    if (type == 'variable') {
      cx.marked = 'property';
    }

    if (type == 'spread') {
      return cont(pattern);
    }

    if (type == '}') {
      return pass();
    }

    if (type == '[') {
      return cont(expression, expect(']'), expect(':'), proppattern);
    }

    return cont(expect(':'), pattern, maybeAssign);
  }

  function eltpattern() {
    return pass(pattern, maybeAssign);
  }

  function maybeAssign(_type, value) {
    if (value == '=') {
      return cont(expressionNoComma);
    }
  }

  function vardefCont(type) {
    if (type == ',') {
      return cont(vardef);
    }
  }

  function maybeelse(type, value) {
    if (type == 'keyword b' && value == 'else') {
      return cont(pushlex('form', 'else'), statement, poplex);
    }
  }

  function forspec(type, value) {
    if (value == 'await') {
      return cont(forspec);
    }

    if (type == '(') {
      return cont(pushlex(')'), forspec1, poplex);
    }
  }

  function forspec1(type) {
    if (type == 'var') {
      return cont(vardef, forspec2);
    }

    if (type == 'variable') {
      return cont(forspec2);
    }

    return pass(forspec2);
  }

  function forspec2(type, value) {
    if (type == ')') {
      return cont();
    }

    if (type == ';') {
      return cont(forspec2);
    }

    if (value == 'in' || value == 'of') {
      cx.marked = 'keyword';
      return cont(expression, forspec2);
    }

    return pass(expression, forspec2);
  }

  function functiondef(type, value) {
    if (value == '*') {
      cx.marked = 'keyword';
      return cont(functiondef);
    }

    if (type == 'variable') {
      register(value);
      return cont(functiondef);
    }

    if (type == '(') {
      return cont(pushcontext, pushlex(')'), commasep(funarg, ')'), poplex, mayberettype, statement, popcontext);
    }

    if (isTS && value == '<') {
      return cont(pushlex('>'), commasep(typeparam, '>'), poplex, functiondef);
    }
  }

  function functiondecl(type, value) {
    if (value == '*') {
      cx.marked = 'keyword';
      return cont(functiondecl);
    }

    if (type == 'variable') {
      register(value);
      return cont(functiondecl);
    }

    if (type == '(') {
      return cont(pushcontext, pushlex(')'), commasep(funarg, ')'), poplex, mayberettype, popcontext);
    }

    if (isTS && value == '<') {
      return cont(pushlex('>'), commasep(typeparam, '>'), poplex, functiondecl);
    }
  }

  function typename(type, value) {
    if (type == 'keyword' || type == 'variable') {
      cx.marked = 'type';
      return cont(typename);
    } else if (value == '<') {
      return cont(pushlex('>'), commasep(typeparam, '>'), poplex);
    }
  }

  function funarg(type, value) {
    if (value == '@') {
      cont(expression, funarg);
    }

    if (type == 'spread') {
      return cont(funarg);
    }

    if (isTS && isModifier(value)) {
      cx.marked = 'keyword';
      return cont(funarg);
    }

    if (isTS && type == 'this') {
      return cont(maybetype, maybeAssign);
    }

    return pass(pattern, maybetype, maybeAssign);
  }

  function classExpression(type, value) {
    // Class expressions may have an optional name.
    if (type == 'variable') {
      return className(type, value);
    }

    return classNameAfter(type, value);
  }

  function className(type, value) {
    if (type == 'variable') {
      register(value);
      return cont(classNameAfter);
    }
  }

  function classNameAfter(type, value) {
    if (value == '<') {
      return cont(pushlex('>'), commasep(typeparam, '>'), poplex, classNameAfter);
    }

    if (value == 'extends' || value == 'implements' || isTS && type == ',') {
      if (value == 'implements') {
        cx.marked = 'keyword';
      }

      return cont(isTS ? typeexpr : expression, classNameAfter);
    }

    if (type == '{') {
      return cont(pushlex('}'), classBody, poplex);
    }
  }

  function classBody(type, value) {
    if (type == 'async' || type == 'variable' && (value == 'static' || value == 'get' || value == 'set' || isTS && isModifier(value)) && cx.stream.match(/^\s+[\w$\xa1-\uffff]/, false)) {
      cx.marked = 'keyword';
      return cont(classBody);
    }

    if (type == 'variable' || cx.style == 'keyword') {
      cx.marked = 'property';
      return cont(isTS ? classfield : functiondef, classBody);
    }

    if (type == 'number' || type == 'string') {
      return cont(isTS ? classfield : functiondef, classBody);
    }

    if (type == '[') {
      return cont(expression, maybetype, expect(']'), isTS ? classfield : functiondef, classBody);
    }

    if (value == '*') {
      cx.marked = 'keyword';
      return cont(classBody);
    }

    if (isTS && type == '(') {
      return pass(functiondecl, classBody);
    }

    if (type == ';' || type == ',') {
      return cont(classBody);
    }

    if (type == '}') {
      return cont();
    }

    if (value == '@') {
      return cont(expression, classBody);
    }
  }

  function classfield(type, value) {
    if (value == '?') {
      return cont(classfield);
    }

    if (type == ':') {
      return cont(typeexpr, maybeAssign);
    }

    if (value == '=') {
      return cont(expressionNoComma);
    }

    var context = cx.state.lexical.prev,
        isInterface = context && context.info == 'interface';
    return pass(isInterface ? functiondecl : functiondef);
  }

  function afterExport(type, value) {
    if (value == '*') {
      cx.marked = 'keyword';
      return cont(maybeFrom, expect(';'));
    }

    if (value == 'default') {
      cx.marked = 'keyword';
      return cont(expression, expect(';'));
    }

    if (type == '{') {
      return cont(commasep(exportField, '}'), maybeFrom, expect(';'));
    }

    return pass(statement);
  }

  function exportField(type, value) {
    if (value == 'as') {
      cx.marked = 'keyword';
      return cont(expect('variable'));
    }

    if (type == 'variable') {
      return pass(expressionNoComma, exportField);
    }
  }

  function afterImport(type) {
    if (type == 'string') {
      return cont();
    }

    if (type == '(') {
      return pass(expression);
    }

    return pass(importSpec, maybeMoreImports, maybeFrom);
  }

  function importSpec(type, value) {
    if (type == '{') {
      return contCommasep(importSpec, '}');
    }

    if (type == 'variable') {
      register(value);
    }

    if (value == '*') {
      cx.marked = 'keyword';
    }

    return cont(maybeAs);
  }

  function maybeMoreImports(type) {
    if (type == ',') {
      return cont(importSpec, maybeMoreImports);
    }
  }

  function maybeAs(_type, value) {
    if (value == 'as') {
      cx.marked = 'keyword';
      return cont(importSpec);
    }
  }

  function maybeFrom(_type, value) {
    if (value == 'from') {
      cx.marked = 'keyword';
      return cont(expression);
    }
  }

  function arrayLiteral(type) {
    if (type == ']') {
      return cont();
    }

    return pass(commasep(expressionNoComma, ']'));
  }

  function enumdef() {
    return pass(pushlex('form'), pattern, expect('{'), pushlex('}'), commasep(enummember, '}'), poplex, poplex);
  }

  function enummember() {
    return pass(pattern, maybeAssign);
  }

  function isContinuedStatement(state, textAfter) {
    return state.lastType == 'operator' || state.lastType == ',' || isOperatorChar.test(textAfter.charAt(0)) || /[,.]/.test(textAfter.charAt(0));
  }

  function expressionAllowed(stream, state, backUp) {
    return state.tokenize == tokenBase && /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(state.lastType) || state.lastType == 'quasi' && /\{\s*$/.test(stream.string.slice(0, stream.pos - (backUp || 0)));
  } // Interface


  return {
    startState: function startState(basecolumn) {
      var state = {
        tokenize: tokenBase,
        lastType: 'sof',
        cc: [],
        lexical: new JSLexical((basecolumn || 0) - indentUnit, 0, 'block', false),
        localVars: parserConfig.localVars,
        context: parserConfig.localVars && new Context(null, null, false),
        indented: basecolumn || 0
      };

      if (parserConfig.globalVars && _typeof(parserConfig.globalVars) === 'object') {
        state.globalVars = parserConfig.globalVars;
      }

      return state;
    },
    token: function token(stream, state) {
      if (stream.sol()) {
        if (!state.lexical.hasOwnProperty('align')) {
          state.lexical.align = false;
        }

        state.indented = stream.indentation();
        findFatArrow(stream, state);
      }

      if (state.tokenize != tokenComment && stream.eatSpace()) {
        return null;
      }

      var style = state.tokenize(stream, state);

      if (type == 'comment') {
        return style;
      }

      state.lastType = type == 'operator' && (content == '++' || content == '--') ? 'incdec' : type;
      return parseJS(state, style, type, content, stream);
    },
    indent: function indent(state, textAfter) {
      if (state.tokenize == tokenComment) {
        return _index__WEBPACK_IMPORTED_MODULE_0__["default"].Pass;
      }

      if (state.tokenize != tokenBase) {
        return 0;
      }

      var firstChar = textAfter && textAfter.charAt(0),
          lexical = state.lexical,
          top; // Kludge to prevent 'maybelse' from blocking lexical scope pops

      if (!/^\s*else\b/.test(textAfter)) {
        for (var i = state.cc.length - 1; i >= 0; --i) {
          var c = state.cc[i];

          if (c == poplex) {
            lexical = lexical.prev;
          } else if (c != maybeelse) {
            break;
          }
        }
      }

      while ((lexical.type == 'stat' || lexical.type == 'form') && (firstChar == '}' || (top = state.cc[state.cc.length - 1]) && (top == maybeoperatorComma || top == maybeoperatorNoComma) && !/^[,\.=+\-*:?[\(]/.test(textAfter))) {
        lexical = lexical.prev;
      }

      if (statementIndent && lexical.type == ')' && lexical.prev.type == 'stat') {
        lexical = lexical.prev;
      }

      var type = lexical.type,
          closing = firstChar == type;

      if (type == 'vardef') {
        return lexical.indented + (state.lastType == 'operator' || state.lastType == ',' ? lexical.info.length + 1 : 0);
      } else if (type == 'form' && firstChar == '{') {
        return lexical.indented;
      } else if (type == 'form') {
        return lexical.indented + indentUnit;
      } else if (type == 'stat') {
        return lexical.indented + (isContinuedStatement(state, textAfter) ? statementIndent || indentUnit : 0);
      } else if (lexical.info == 'switch' && !closing && parserConfig.doubleIndentSwitch != false) {
        return lexical.indented + (/^(?:case|default)\b/.test(textAfter) ? indentUnit : 2 * indentUnit);
      } else if (lexical.align) {
        return lexical.column + (closing ? 0 : 1);
      } else {
        return lexical.indented + (closing ? 0 : indentUnit);
      }
    },
    electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
    blockCommentStart: jsonMode ? null : '/*',
    blockCommentEnd: jsonMode ? null : '*/',
    blockCommentContinue: jsonMode ? null : ' * ',
    lineComment: jsonMode ? null : '//',
    fold: 'brace',
    closeBrackets: '()[]{}\'\'""``',
    helperType: jsonMode ? 'json' : 'javascript',
    jsonldMode: jsonldMode,
    jsonMode: jsonMode,
    expressionAllowed: expressionAllowed,
    skipExpression: function skipExpression(state) {
      var top = state.cc[state.cc.length - 1];

      if (top == expression || top == expressionNoComma) {
        state.cc.pop();
      }
    }
  };
}

_index__WEBPACK_IMPORTED_MODULE_0__["default"].registerHelper('wordChars', 'javascript', /[\w$]/);
_index__WEBPACK_IMPORTED_MODULE_0__["default"].defineMIME('json', {
  name: 'javascript',
  json: true
});
_index__WEBPACK_IMPORTED_MODULE_0__["default"].defineMIME('typescript', {
  name: 'javascript',
  typescript: true
});
_index__WEBPACK_IMPORTED_MODULE_0__["default"].defineMIME('ts', {
  name: 'javascript',
  typescript: true
});
var languages = ['js', 'json', 'python', 'py', 'react', 'coffeescript', 'dart', 'go', 'jsx'];
languages.forEach(function (item) {
  _index__WEBPACK_IMPORTED_MODULE_0__["default"].defineMIME(item, 'javascript');
});

/***/ }),

/***/ "./resources/assets/js/components/MDEditor/assets/js/codemirror/mode/markdown.js":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/assets/js/codemirror/mode/markdown.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./resources/assets/js/components/MDEditor/assets/js/codemirror/index.js");

_index__WEBPACK_IMPORTED_MODULE_0__["default"].defineMode('markdown', function (cmCfg, modeCfg) {
  var htmlMode = _index__WEBPACK_IMPORTED_MODULE_0__["default"].getMode(cmCfg, 'text/html');
  var htmlModeMissing = htmlMode.name == 'null';

  function getMode(name) {
    if (_index__WEBPACK_IMPORTED_MODULE_0__["default"].findModeByName) {
      var found = _index__WEBPACK_IMPORTED_MODULE_0__["default"].findModeByName(name);

      if (found) {
        name = found.mime || found.mimes[0];
      }
    }

    var mode = _index__WEBPACK_IMPORTED_MODULE_0__["default"].getMode(cmCfg, name);
    return mode.name == 'null' ? null : mode;
  } // Should characters that affect highlighting be highlighted separate?
  // Does not include characters that will be output (such as `1.` and `-` for lists)


  if (modeCfg.highlightFormatting === undefined) {
    modeCfg.highlightFormatting = false;
  } // Maximum number of nested blockquotes. Set to 0 for infinite nesting.
  // Excess `>` will emit `error` token.


  if (modeCfg.maxBlockquoteDepth === undefined) {
    modeCfg.maxBlockquoteDepth = 0;
  } // Turn on task lists? ("- [ ] " and "- [x] ")


  if (modeCfg.taskLists === undefined) {
    modeCfg.taskLists = false;
  } // Turn on strikethrough syntax


  if (modeCfg.strikethrough === undefined) {
    modeCfg.strikethrough = false;
  }

  if (modeCfg.emoji === undefined) {
    modeCfg.emoji = false;
  }

  if (modeCfg.fencedCodeBlockHighlighting === undefined) {
    modeCfg.fencedCodeBlockHighlighting = true;
  }

  if (modeCfg.xml === undefined) {
    modeCfg.xml = true;
  } // Allow token types to be overridden by user-provided token types.


  if (modeCfg.tokenTypeOverrides === undefined) {
    modeCfg.tokenTypeOverrides = {};
  }

  var tokenTypes = {
    header: 'header',
    code: 'comment',
    quote: 'quote',
    list1: 'variable-2',
    list2: 'variable-3',
    list3: 'keyword',
    hr: 'hr',
    image: 'image',
    imageAltText: 'image-alt-text',
    imageMarker: 'image-marker',
    formatting: 'formatting',
    linkInline: 'link',
    linkEmail: 'link',
    linkText: 'link',
    linkHref: 'string',
    em: 'em',
    strong: 'strong',
    strikethrough: 'strikethrough',
    emoji: 'builtin'
  };

  for (var tokenType in tokenTypes) {
    if (tokenTypes.hasOwnProperty(tokenType) && modeCfg.tokenTypeOverrides[tokenType]) {
      tokenTypes[tokenType] = modeCfg.tokenTypeOverrides[tokenType];
    }
  }

  var hrRE = /^([*\-_])(?:\s*\1){2,}\s*$/,
      listRE = /^(?:[*\-+]|^[0-9]+([.)]))\s+/,
      taskListRE = /^\[(x| )\](?=\s)/i,
      // Must follow listRE
  atxHeaderRE = modeCfg.allowAtxHeaderWithoutSpace ? /^(#+)/ : /^(#+)(?: |$)/,
      setextHeaderRE = /^ *(?:\={1,}|-{1,})\s*$/,
      textRE = /^[^#!\[\]*_\\<>` "'(~:]+/,
      fencedCodeRE = /^(~~~+|```+)[ \t]*([\w+#-]*)[^\n`]*$/,
      linkDefRE = /^\s*\[[^\]]+?\]:.*$/,
      // naive link-definition
  punctuation = /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/,
      expandedTab = '    '; // CommonMark specifies tab as 4 spaces

  function switchInline(stream, state, f) {
    state.f = state.inline = f;
    return f(stream, state);
  }

  function switchBlock(stream, state, f) {
    state.f = state.block = f;
    return f(stream, state);
  }

  function lineIsEmpty(line) {
    return !line || !/\S/.test(line.string);
  } // Blocks


  function blankLine(state) {
    // Reset linkTitle state
    state.linkTitle = false;
    state.linkHref = false;
    state.linkText = false; // Reset EM state

    state.em = false; // Reset STRONG state

    state.strong = false; // Reset strikethrough state

    state.strikethrough = false; // Reset state.quote

    state.quote = 0; // Reset state.indentedCode

    state.indentedCode = false;

    if (state.f == htmlBlock) {
      var exit = htmlModeMissing;

      if (!exit) {
        var inner = _index__WEBPACK_IMPORTED_MODULE_0__["default"].innerMode(htmlMode, state.htmlState);
        exit = inner.mode.name == 'xml' && inner.state.tagStart === null && !inner.state.context && inner.state.tokenize.isInText;
      }

      if (exit) {
        state.f = inlineNormal;
        state.block = blockNormal;
        state.htmlState = null;
      }
    } // Reset state.trailingSpace


    state.trailingSpace = 0;
    state.trailingSpaceNewLine = false; // Mark this line as blank

    state.prevLine = state.thisLine;
    state.thisLine = {
      stream: null
    };
    return null;
  }

  function blockNormal(stream, state) {
    var firstTokenOnLine = stream.column() === state.indentation;
    var prevLineLineIsEmpty = lineIsEmpty(state.prevLine.stream);
    var prevLineIsIndentedCode = state.indentedCode;
    var prevLineIsHr = state.prevLine.hr;
    var prevLineIsList = state.list !== false;
    var maxNonCodeIndentation = (state.listStack[state.listStack.length - 1] || 0) + 3;
    state.indentedCode = false;
    var lineIndentation = state.indentation; // compute once per line (on first token)

    if (state.indentationDiff === null) {
      state.indentationDiff = state.indentation;

      if (prevLineIsList) {
        state.list = null; // While this list item's marker's indentation is less than the deepest
        //  list item's content's indentation,pop the deepest list item
        //  indentation off the stack, and update block indentation state

        while (lineIndentation < state.listStack[state.listStack.length - 1]) {
          state.listStack.pop();

          if (state.listStack.length) {
            state.indentation = state.listStack[state.listStack.length - 1]; // less than the first list's indent -> the line is no longer a list
          } else {
            state.list = false;
          }
        }

        if (state.list !== false) {
          state.indentationDiff = lineIndentation - state.listStack[state.listStack.length - 1];
        }
      }
    } // not comprehensive (currently only for setext detection purposes)


    var allowsInlineContinuation = !prevLineLineIsEmpty && !prevLineIsHr && !state.prevLine.header && (!prevLineIsList || !prevLineIsIndentedCode) && !state.prevLine.fencedCodeEnd;
    var isHr = (state.list === false || prevLineIsHr || prevLineLineIsEmpty) && state.indentation <= maxNonCodeIndentation && stream.match(hrRE);
    var match = null;

    if (state.indentationDiff >= 4 && (prevLineIsIndentedCode || state.prevLine.fencedCodeEnd || state.prevLine.header || prevLineLineIsEmpty)) {
      stream.skipToEnd();
      state.indentedCode = true;
      return tokenTypes.code;
    } else if (stream.eatSpace()) {
      return null;
    } else if (firstTokenOnLine && state.indentation <= maxNonCodeIndentation && (match = stream.match(atxHeaderRE)) && match[1].length <= 6) {
      state.quote = 0;
      state.header = match[1].length;
      state.thisLine.header = true;

      if (modeCfg.highlightFormatting) {
        state.formatting = 'header';
      }

      state.f = state.inline;
      return getType(state);
    } else if (state.indentation <= maxNonCodeIndentation && stream.eat('>')) {
      state.quote = firstTokenOnLine ? 1 : state.quote + 1;

      if (modeCfg.highlightFormatting) {
        state.formatting = 'quote';
      }

      stream.eatSpace();
      return getType(state);
    } else if (!isHr && !state.setext && firstTokenOnLine && state.indentation <= maxNonCodeIndentation && (match = stream.match(listRE))) {
      var listType = match[1] ? 'ol' : 'ul';
      state.indentation = lineIndentation + stream.current().length;
      state.list = true;
      state.quote = 0; // Add this list item's content's indentation to the stack

      state.listStack.push(state.indentation); // Reset inline styles which shouldn't propagate aross list items

      state.em = false;
      state.strong = false;
      state.code = false;
      state.strikethrough = false;

      if (modeCfg.taskLists && stream.match(taskListRE, false)) {
        state.taskList = true;
      }

      state.f = state.inline;

      if (modeCfg.highlightFormatting) {
        state.formatting = ['list', 'list-' + listType];
      }

      return getType(state);
    } else if (firstTokenOnLine && state.indentation <= maxNonCodeIndentation && (match = stream.match(fencedCodeRE, true))) {
      state.quote = 0;
      state.fencedEndRE = new RegExp(match[1] + '+ *$'); // try switching mode

      state.localMode = modeCfg.fencedCodeBlockHighlighting && getMode(match[2]);

      if (state.localMode) {
        state.localState = _index__WEBPACK_IMPORTED_MODULE_0__["default"].startState(state.localMode);
      }

      state.f = state.block = local;

      if (modeCfg.highlightFormatting) {
        state.formatting = 'code-block';
      }

      state.code = -1;
      return getType(state); // SETEXT has lowest block-scope precedence after HR, so check it after
      //  the others (code, blockquote, list...)
    } else if ( // if setext set, indicates line after ---/===
    state.setext || // line before ---/===
    (!allowsInlineContinuation || !prevLineIsList) && !state.quote && state.list === false && !state.code && !isHr && !linkDefRE.test(stream.string) && (match = stream.lookAhead(1)) && (match = match.match(setextHeaderRE))) {
      if (!state.setext) {
        state.header = match[0].charAt(0) == '=' ? 1 : 2;
        state.setext = state.header;
      } else {
        state.header = state.setext; // has no effect on type so we can reset it now

        state.setext = 0;
        stream.skipToEnd();

        if (modeCfg.highlightFormatting) {
          state.formatting = 'header';
        }
      }

      state.thisLine.header = true;
      state.f = state.inline;
      return getType(state);
    } else if (isHr) {
      stream.skipToEnd();
      state.hr = true;
      state.thisLine.hr = true;
      return tokenTypes.hr;
    } else if (stream.peek() === '[') {
      return switchInline(stream, state, footnoteLink);
    }

    return switchInline(stream, state, state.inline);
  }

  function htmlBlock(stream, state) {
    var style = htmlMode.token(stream, state.htmlState);

    if (!htmlModeMissing) {
      var inner = _index__WEBPACK_IMPORTED_MODULE_0__["default"].innerMode(htmlMode, state.htmlState);

      if (inner.mode.name == 'xml' && inner.state.tagStart === null && !inner.state.context && inner.state.tokenize.isInText || state.md_inside && stream.current().indexOf('>') > -1) {
        state.f = inlineNormal;
        state.block = blockNormal;
        state.htmlState = null;
      }
    }

    return style;
  }

  function local(stream, state) {
    var currListInd = state.listStack[state.listStack.length - 1] || 0;
    var hasExitedList = state.indentation < currListInd;
    var maxFencedEndInd = currListInd + 3;

    if (state.fencedEndRE && state.indentation <= maxFencedEndInd && (hasExitedList || stream.match(state.fencedEndRE))) {
      if (modeCfg.highlightFormatting) {
        state.formatting = 'code-block';
      }

      var returnType;

      if (!hasExitedList) {
        returnType = getType(state);
      }

      state.localMode = state.localState = null;
      state.block = blockNormal;
      state.f = inlineNormal;
      state.fencedEndRE = null;
      state.code = 0;
      state.thisLine.fencedCodeEnd = true;

      if (hasExitedList) {
        return switchBlock(stream, state, state.block);
      }

      return returnType;
    } else if (state.localMode) {
      return state.localMode.token(stream, state.localState);
    } else {
      stream.skipToEnd();
      return tokenTypes.code;
    }
  } // Inline


  function getType(state) {
    var styles = [];

    if (state.formatting) {
      styles.push(tokenTypes.formatting);

      if (typeof state.formatting === 'string') {
        state.formatting = [state.formatting];
      }

      for (var i = 0; i < state.formatting.length; i++) {
        styles.push(tokenTypes.formatting + '-' + state.formatting[i]);

        if (state.formatting[i] === 'header') {
          styles.push(tokenTypes.formatting + '-' + state.formatting[i] + '-' + state.header);
        } // Add `formatting-quote` and `formatting-quote-#` for blockquotes
        // Add `error` instead if the maximum blockquote nesting depth is passed


        if (state.formatting[i] === 'quote') {
          if (!modeCfg.maxBlockquoteDepth || modeCfg.maxBlockquoteDepth >= state.quote) {
            styles.push(tokenTypes.formatting + '-' + state.formatting[i] + '-' + state.quote);
          } else {
            styles.push('error');
          }
        }
      }
    }

    if (state.taskOpen) {
      styles.push('meta');
      return styles.length ? styles.join(' ') : null;
    }

    if (state.taskClosed) {
      styles.push('property');
      return styles.length ? styles.join(' ') : null;
    }

    if (state.linkHref) {
      styles.push(tokenTypes.linkHref, 'url');
    } else {
      // Only apply inline styles to non-url text
      if (state.strong) {
        styles.push(tokenTypes.strong);
      }

      if (state.em) {
        styles.push(tokenTypes.em);
      }

      if (state.strikethrough) {
        styles.push(tokenTypes.strikethrough);
      }

      if (state.emoji) {
        styles.push(tokenTypes.emoji);
      }

      if (state.linkText) {
        styles.push(tokenTypes.linkText);
      }

      if (state.code) {
        styles.push(tokenTypes.code);
      }

      if (state.image) {
        styles.push(tokenTypes.image);
      }

      if (state.imageAltText) {
        styles.push(tokenTypes.imageAltText, 'link');
      }

      if (state.imageMarker) {
        styles.push(tokenTypes.imageMarker);
      }
    }

    if (state.header) {
      styles.push(tokenTypes.header, tokenTypes.header + '-' + state.header);
    }

    if (state.quote) {
      styles.push(tokenTypes.quote); // Add `quote-#` where the maximum for `#` is modeCfg.maxBlockquoteDepth

      if (!modeCfg.maxBlockquoteDepth || modeCfg.maxBlockquoteDepth >= state.quote) {
        styles.push(tokenTypes.quote + '-' + state.quote);
      } else {
        styles.push(tokenTypes.quote + '-' + modeCfg.maxBlockquoteDepth);
      }
    }

    if (state.list !== false) {
      var listMod = (state.listStack.length - 1) % 3;

      if (!listMod) {
        styles.push(tokenTypes.list1);
      } else if (listMod === 1) {
        styles.push(tokenTypes.list2);
      } else {
        styles.push(tokenTypes.list3);
      }
    }

    if (state.trailingSpaceNewLine) {
      styles.push('trailing-space-new-line');
    } else if (state.trailingSpace) {
      styles.push('trailing-space-' + (state.trailingSpace % 2 ? 'a' : 'b'));
    }

    return styles.length ? styles.join(' ') : null;
  }

  function handleText(stream, state) {
    if (stream.match(textRE, true)) {
      return getType(state);
    }

    return undefined;
  }

  function inlineNormal(stream, state) {
    var style = state.text(stream, state);

    if (typeof style !== 'undefined') {
      return style;
    }

    if (state.list) {
      // List marker (*, +, -, 1., etc)
      state.list = null;
      return getType(state);
    }

    if (state.taskList) {
      var taskOpen = stream.match(taskListRE, true)[1] === ' ';

      if (taskOpen) {
        state.taskOpen = true;
      } else {
        state.taskClosed = true;
      }

      if (modeCfg.highlightFormatting) {
        state.formatting = 'task';
      }

      state.taskList = false;
      return getType(state);
    }

    state.taskOpen = false;
    state.taskClosed = false;

    if (state.header && stream.match(/^#+$/, true)) {
      if (modeCfg.highlightFormatting) {
        state.formatting = 'header';
      }

      return getType(state);
    }

    var ch = stream.next(); // Matches link titles present on next line

    if (state.linkTitle) {
      state.linkTitle = false;
      var matchCh = ch;

      if (ch === '(') {
        matchCh = ')';
      }

      matchCh = String(matchCh).replace(/([.?*+^\[\]\\(){}|-])/g, '\\$1');
      var regex = '^\\s*(?:[^' + matchCh + '\\\\]+|\\\\\\\\|\\\\.)' + matchCh;

      if (stream.match(new RegExp(regex), true)) {
        return tokenTypes.linkHref;
      }
    } // If this block is changed, it may need to be updated in GFM mode


    if (ch === '`') {
      var previousFormatting = state.formatting;

      if (modeCfg.highlightFormatting) {
        state.formatting = 'code';
      }

      stream.eatWhile('`');
      var count = stream.current().length;

      if (state.code == 0 && (!state.quote || count == 1)) {
        state.code = count;
        return getType(state);
      } else if (count == state.code) {
        // Must be exact
        var t = getType(state);
        state.code = 0;
        return t;
      } else {
        state.formatting = previousFormatting;
        return getType(state);
      }
    } else if (state.code) {
      return getType(state);
    }

    if (ch === '\\') {
      stream.next();

      if (modeCfg.highlightFormatting) {
        var type = getType(state);
        var formattingEscape = tokenTypes.formatting + '-escape';
        return type ? type + ' ' + formattingEscape : formattingEscape;
      }
    }

    if (ch === '!' && stream.match(/\[[^\]]*\] ?(?:\(|\[)/, false)) {
      state.imageMarker = true;
      state.image = true;

      if (modeCfg.highlightFormatting) {
        state.formatting = 'image';
      }

      return getType(state);
    }

    if (ch === '[' && state.imageMarker && stream.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/, false)) {
      state.imageMarker = false;
      state.imageAltText = true;

      if (modeCfg.highlightFormatting) {
        state.formatting = 'image';
      }

      return getType(state);
    }

    if (ch === ']' && state.imageAltText) {
      if (modeCfg.highlightFormatting) {
        state.formatting = 'image';
      }

      var type = getType(state);
      state.imageAltText = false;
      state.image = false;
      state.inline = state.f = linkHref;
      return type;
    }

    if (ch === '[' && !state.image) {
      if (state.linkText && stream.match(/^.*?\]/)) {
        return getType(state);
      }

      state.linkText = true;

      if (modeCfg.highlightFormatting) {
        state.formatting = 'link';
      }

      return getType(state);
    }

    if (ch === ']' && state.linkText) {
      if (modeCfg.highlightFormatting) {
        state.formatting = 'link';
      }

      var type = getType(state);
      state.linkText = false;
      state.inline = state.f = stream.match(/\(.*?\)| ?\[.*?\]/, false) ? linkHref : inlineNormal;
      return type;
    }

    if (ch === '<' && stream.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, false)) {
      state.f = state.inline = linkInline;

      if (modeCfg.highlightFormatting) {
        state.formatting = 'link';
      }

      var type = getType(state);

      if (type) {
        type += ' ';
      } else {
        type = '';
      }

      return type + tokenTypes.linkInline;
    }

    if (ch === '<' && stream.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, false)) {
      state.f = state.inline = linkInline;

      if (modeCfg.highlightFormatting) {
        state.formatting = 'link';
      }

      var type = getType(state);

      if (type) {
        type += ' ';
      } else {
        type = '';
      }

      return type + tokenTypes.linkEmail;
    }

    if (modeCfg.xml && ch === '<' && stream.match(/^(!--|\?|!\[CDATA\[|[a-z][a-z0-9-]*(?:\s+[a-z_:.\-]+(?:\s*=\s*[^>]+)?)*\s*(?:>|$))/i, false)) {
      var end = stream.string.indexOf('>', stream.pos);

      if (end != -1) {
        var atts = stream.string.substring(stream.start, end);

        if (/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(atts)) {
          state.md_inside = true;
        }
      }

      stream.backUp(1);
      state.htmlState = _index__WEBPACK_IMPORTED_MODULE_0__["default"].startState(htmlMode);
      return switchBlock(stream, state, htmlBlock);
    }

    if (modeCfg.xml && ch === '<' && stream.match(/^\/\w*?>/)) {
      state.md_inside = false;
      return 'tag';
    } else if (ch === '*' || ch === '_') {
      var len = 1,
          before = stream.pos == 1 ? ' ' : stream.string.charAt(stream.pos - 2);

      while (len < 3 && stream.eat(ch)) {
        len++;
      }

      var after = stream.peek() || ' '; // See http://spec.commonmark.org/0.27/#emphasis-and-strong-emphasis

      var leftFlanking = !/\s/.test(after) && (!punctuation.test(after) || /\s/.test(before) || punctuation.test(before));
      var rightFlanking = !/\s/.test(before) && (!punctuation.test(before) || /\s/.test(after) || punctuation.test(after));
      var setEm = null,
          setStrong = null;

      if (len % 2) {
        // Em
        if (!state.em && leftFlanking && (ch === '*' || !rightFlanking || punctuation.test(before))) {
          setEm = true;
        } else if (state.em == ch && rightFlanking && (ch === '*' || !leftFlanking || punctuation.test(after))) {
          setEm = false;
        }
      }

      if (len > 1) {
        // Strong
        if (!state.strong && leftFlanking && (ch === '*' || !rightFlanking || punctuation.test(before))) {
          setStrong = true;
        } else if (state.strong == ch && rightFlanking && (ch === '*' || !leftFlanking || punctuation.test(after))) {
          setStrong = false;
        }
      }

      if (setStrong != null || setEm != null) {
        if (modeCfg.highlightFormatting) {
          state.formatting = setEm == null ? 'strong' : setStrong == null ? 'em' : 'strong em';
        }

        if (setEm === true) {
          state.em = ch;
        }

        if (setStrong === true) {
          state.strong = ch;
        }

        var t = getType(state);

        if (setEm === false) {
          state.em = false;
        }

        if (setStrong === false) {
          state.strong = false;
        }

        return t;
      }
    } else if (ch === ' ') {
      if (stream.eat('*') || stream.eat('_')) {
        // Probably surrounded by spaces
        if (stream.peek() === ' ') {
          // Surrounded by spaces, ignore
          return getType(state);
        } else {
          // Not surrounded by spaces, back up pointer
          stream.backUp(1);
        }
      }
    }

    if (modeCfg.strikethrough) {
      if (ch === '~' && stream.eatWhile(ch)) {
        if (state.strikethrough) {
          // Remove strikethrough
          if (modeCfg.highlightFormatting) {
            state.formatting = 'strikethrough';
          }

          var t = getType(state);
          state.strikethrough = false;
          return t;
        } else if (stream.match(/^[^\s]/, false)) {
          // Add strikethrough
          state.strikethrough = true;

          if (modeCfg.highlightFormatting) {
            state.formatting = 'strikethrough';
          }

          return getType(state);
        }
      } else if (ch === ' ') {
        if (stream.match(/^~~/, true)) {
          // Probably surrounded by space
          if (stream.peek() === ' ') {
            // Surrounded by spaces, ignore
            return getType(state);
          } else {
            // Not surrounded by spaces, back up pointer
            stream.backUp(2);
          }
        }
      }
    }

    if (modeCfg.emoji && ch === ':' && stream.match(/^(?:[a-z_\d+][a-z_\d+-]*|\-[a-z_\d+][a-z_\d+-]*):/)) {
      state.emoji = true;

      if (modeCfg.highlightFormatting) {
        state.formatting = 'emoji';
      }

      var retType = getType(state);
      state.emoji = false;
      return retType;
    }

    if (ch === ' ') {
      if (stream.match(/^ +$/, false)) {
        state.trailingSpace++;
      } else if (state.trailingSpace) {
        state.trailingSpaceNewLine = true;
      }
    }

    return getType(state);
  }

  function linkInline(stream, state) {
    var ch = stream.next();

    if (ch === '>') {
      state.f = state.inline = inlineNormal;

      if (modeCfg.highlightFormatting) {
        state.formatting = 'link';
      }

      var type = getType(state);

      if (type) {
        type += ' ';
      } else {
        type = '';
      }

      return type + tokenTypes.linkInline;
    }

    stream.match(/^[^>]+/, true);
    return tokenTypes.linkInline;
  }

  function linkHref(stream, state) {
    // Check if space, and return NULL if so (to avoid marking the space)
    if (stream.eatSpace()) {
      return null;
    }

    var ch = stream.next();

    if (ch === '(' || ch === '[') {
      state.f = state.inline = getLinkHrefInside(ch === '(' ? ')' : ']');

      if (modeCfg.highlightFormatting) {
        state.formatting = 'link-string';
      }

      state.linkHref = true;
      return getType(state);
    }

    return 'error';
  }

  var linkRE = {
    ')': /^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,
    ']': /^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/
  };

  function getLinkHrefInside(endChar) {
    return function (stream, state) {
      var ch = stream.next();

      if (ch === endChar) {
        state.f = state.inline = inlineNormal;

        if (modeCfg.highlightFormatting) {
          state.formatting = 'link-string';
        }

        var returnState = getType(state);
        state.linkHref = false;
        return returnState;
      }

      stream.match(linkRE[endChar]);
      state.linkHref = true;
      return getType(state);
    };
  }

  function footnoteLink(stream, state) {
    if (stream.match(/^([^\]\\]|\\.)*\]:/, false)) {
      state.f = footnoteLinkInside;
      stream.next(); // Consume [

      if (modeCfg.highlightFormatting) {
        state.formatting = 'link';
      }

      state.linkText = true;
      return getType(state);
    }

    return switchInline(stream, state, inlineNormal);
  }

  function footnoteLinkInside(stream, state) {
    if (stream.match(/^\]:/, true)) {
      state.f = state.inline = footnoteUrl;

      if (modeCfg.highlightFormatting) {
        state.formatting = 'link';
      }

      var returnType = getType(state);
      state.linkText = false;
      return returnType;
    }

    stream.match(/^([^\]\\]|\\.)+/, true);
    return tokenTypes.linkText;
  }

  function footnoteUrl(stream, state) {
    // Check if space, and return NULL if so (to avoid marking the space)
    if (stream.eatSpace()) {
      return null;
    } // Match URL


    stream.match(/^[^\s]+/, true); // Check for link title

    if (stream.peek() === undefined) {
      // End of line, set flag to check next line
      state.linkTitle = true;
    } else {
      // More content on line, check if link title
      stream.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/, true);
    }

    state.f = state.inline = inlineNormal;
    return tokenTypes.linkHref + ' url';
  }

  var mode = {
    startState: function startState() {
      return {
        f: blockNormal,
        prevLine: {
          stream: null
        },
        thisLine: {
          stream: null
        },
        block: blockNormal,
        htmlState: null,
        indentation: 0,
        inline: inlineNormal,
        text: handleText,
        formatting: false,
        linkText: false,
        linkHref: false,
        linkTitle: false,
        code: 0,
        em: false,
        strong: false,
        header: 0,
        setext: 0,
        hr: false,
        taskList: false,
        list: false,
        listStack: [],
        quote: 0,
        trailingSpace: 0,
        trailingSpaceNewLine: false,
        strikethrough: false,
        emoji: false,
        fencedEndRE: null
      };
    },
    copyState: function copyState(s) {
      return {
        f: s.f,
        prevLine: s.prevLine,
        thisLine: s.thisLine,
        block: s.block,
        htmlState: s.htmlState && _index__WEBPACK_IMPORTED_MODULE_0__["default"].copyState(htmlMode, s.htmlState),
        indentation: s.indentation,
        localMode: s.localMode,
        localState: s.localMode ? _index__WEBPACK_IMPORTED_MODULE_0__["default"].copyState(s.localMode, s.localState) : null,
        inline: s.inline,
        text: s.text,
        formatting: false,
        linkText: s.linkText,
        linkTitle: s.linkTitle,
        linkHref: s.linkHref,
        code: s.code,
        em: s.em,
        strong: s.strong,
        strikethrough: s.strikethrough,
        emoji: s.emoji,
        header: s.header,
        setext: s.setext,
        hr: s.hr,
        taskList: s.taskList,
        list: s.list,
        listStack: s.listStack.slice(0),
        quote: s.quote,
        indentedCode: s.indentedCode,
        trailingSpace: s.trailingSpace,
        trailingSpaceNewLine: s.trailingSpaceNewLine,
        md_inside: s.md_inside,
        fencedEndRE: s.fencedEndRE
      };
    },
    token: function token(stream, state) {
      // Reset state.formatting
      state.formatting = false;

      if (stream != state.thisLine.stream) {
        state.header = 0;
        state.hr = false;

        if (stream.match(/^\s*$/, true)) {
          blankLine(state);
          return null;
        }

        state.prevLine = state.thisLine;
        state.thisLine = {
          stream: stream
        }; // Reset state.taskList

        state.taskList = false; // Reset state.trailingSpace

        state.trailingSpace = 0;
        state.trailingSpaceNewLine = false;

        if (!state.localState) {
          state.f = state.block;

          if (state.f != htmlBlock) {
            var indentation = stream.match(/^\s*/, true)[0].replace(/\t/g, expandedTab).length;
            state.indentation = indentation;
            state.indentationDiff = null;

            if (indentation > 0) {
              return null;
            }
          }
        }
      }

      return state.f(stream, state);
    },
    innerMode: function innerMode(state) {
      if (state.block == htmlBlock) {
        return {
          state: state.htmlState,
          mode: htmlMode
        };
      }

      if (state.localState) {
        return {
          state: state.localState,
          mode: state.localMode
        };
      }

      return {
        state: state,
        mode: mode
      };
    },
    indent: function indent(state, textAfter, line) {
      if (state.block == htmlBlock && htmlMode.indent) {
        return htmlMode.indent(state.htmlState, textAfter, line);
      }

      if (state.localState && state.localMode.indent) {
        return state.localMode.indent(state.localState, textAfter, line);
      }

      return _index__WEBPACK_IMPORTED_MODULE_0__["default"].Pass;
    },
    blankLine: blankLine,
    getType: getType,
    blockCommentStart: '<!--',
    blockCommentEnd: '-->',
    closeBrackets: '()[]{}\'\'""``',
    fold: 'markdown'
  };
  return mode;
}, 'xml');
_index__WEBPACK_IMPORTED_MODULE_0__["default"].defineMIME('text/src', 'markdown');
_index__WEBPACK_IMPORTED_MODULE_0__["default"].defineMIME('text/x-src', 'markdown');

/***/ }),

/***/ "./resources/assets/js/components/MDEditor/assets/js/codemirror/mode/xml.js":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/assets/js/codemirror/mode/xml.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./resources/assets/js/components/MDEditor/assets/js/codemirror/index.js");

var htmlConfig = {
  autoSelfClosers: {
    area: true,
    base: true,
    br: true,
    col: true,
    command: true,
    embed: true,
    frame: true,
    hr: true,
    img: true,
    input: true,
    keygen: true,
    link: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true,
    menuitem: true
  },
  implicitlyClosed: {
    dd: true,
    li: true,
    optgroup: true,
    option: true,
    p: true,
    rp: true,
    rt: true,
    tbody: true,
    td: true,
    tfoot: true,
    th: true,
    tr: true
  },
  contextGrabbers: {
    dd: {
      dd: true,
      dt: true
    },
    dt: {
      dd: true,
      dt: true
    },
    li: {
      li: true
    },
    option: {
      option: true,
      optgroup: true
    },
    optgroup: {
      optgroup: true
    },
    p: {
      address: true,
      article: true,
      aside: true,
      blockquote: true,
      dir: true,
      div: true,
      dl: true,
      fieldset: true,
      footer: true,
      form: true,
      h1: true,
      h2: true,
      h3: true,
      h4: true,
      h5: true,
      h6: true,
      header: true,
      hgroup: true,
      hr: true,
      menu: true,
      nav: true,
      ol: true,
      p: true,
      pre: true,
      section: true,
      table: true,
      ul: true
    },
    rp: {
      rp: true,
      rt: true
    },
    rt: {
      rp: true,
      rt: true
    },
    tbody: {
      tbody: true,
      tfoot: true
    },
    td: {
      td: true,
      th: true
    },
    tfoot: {
      tbody: true
    },
    th: {
      td: true,
      th: true
    },
    thead: {
      tbody: true,
      tfoot: true
    },
    tr: {
      tr: true
    }
  },
  doNotIndent: {
    pre: true
  },
  allowUnquoted: true,
  allowMissing: true,
  caseFold: true
};
var xmlConfig = {
  autoSelfClosers: {},
  implicitlyClosed: {},
  contextGrabbers: {},
  doNotIndent: {},
  allowUnquoted: false,
  allowMissing: false,
  allowMissingTagName: false,
  caseFold: false
};
_index__WEBPACK_IMPORTED_MODULE_0__["default"].defineMode('xml', defineMode);

function defineMode(editorConf, config_) {
  var indentUnit = editorConf.indentUnit;
  var config = {};
  var defaults = config_.htmlMode ? htmlConfig : xmlConfig;

  for (var prop in defaults) {
    config[prop] = defaults[prop];
  }

  for (var prop in config_) {
    config[prop] = config_[prop];
  } // Return variables for tokenizers


  var type, setStyle;

  function inText(stream, state) {
    function chain(parser) {
      state.tokenize = parser;
      return parser(stream, state);
    }

    var ch = stream.next();

    if (ch == '<') {
      if (stream.eat('!')) {
        if (stream.eat('[')) {
          if (stream.match('CDATA[')) {
            return chain(inBlock('atom', ']]>'));
          } else {
            return null;
          }
        } else if (stream.match('--')) {
          return chain(inBlock('comment', '-->'));
        } else if (stream.match('DOCTYPE', true, true)) {
          stream.eatWhile(/[\w\._\-]/);
          return chain(doctype(1));
        } else {
          return null;
        }
      } else if (stream.eat('?')) {
        stream.eatWhile(/[\w\._\-]/);
        state.tokenize = inBlock('meta', '?>');
        return 'meta';
      } else {
        type = stream.eat('/') ? 'closeTag' : 'openTag';
        state.tokenize = inTag;
        return 'tag bracket';
      }
    } else if (ch == '&') {
      var ok;

      if (stream.eat('#')) {
        if (stream.eat('x')) {
          ok = stream.eatWhile(/[a-fA-F\d]/) && stream.eat(';');
        } else {
          ok = stream.eatWhile(/[\d]/) && stream.eat(';');
        }
      } else {
        ok = stream.eatWhile(/[\w\.\-:]/) && stream.eat(';');
      }

      return ok ? 'atom' : 'error';
    } else {
      stream.eatWhile(/[^&<]/);
      return null;
    }
  }

  inText.isInText = true;

  function inTag(stream, state) {
    var ch = stream.next();

    if (ch == '>' || ch == '/' && stream.eat('>')) {
      state.tokenize = inText;
      type = ch == '>' ? 'endTag' : 'selfcloseTag';
      return 'tag bracket';
    } else if (ch == '=') {
      type = 'equals';
      return null;
    } else if (ch == '<') {
      state.tokenize = inText;
      state.state = baseState;
      state.tagName = state.tagStart = null;
      var next = state.tokenize(stream, state);
      return next ? next + ' tag error' : 'tag error';
    } else if (/[\'\"]/.test(ch)) {
      state.tokenize = inAttribute(ch);
      state.stringStartCol = stream.column();
      return state.tokenize(stream, state);
    } else {
      stream.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/);
      return 'word';
    }
  }

  function inAttribute(quote) {
    var closure = function closure(stream, state) {
      while (!stream.eol()) {
        if (stream.next() == quote) {
          state.tokenize = inTag;
          break;
        }
      }

      return 'string';
    };

    closure.isInAttribute = true;
    return closure;
  }

  function inBlock(style, terminator) {
    return function (stream, state) {
      while (!stream.eol()) {
        if (stream.match(terminator)) {
          state.tokenize = inText;
          break;
        }

        stream.next();
      }

      return style;
    };
  }

  function doctype(depth) {
    return function (stream, state) {
      var ch;

      while ((ch = stream.next()) != null) {
        if (ch == '<') {
          state.tokenize = doctype(depth + 1);
          return state.tokenize(stream, state);
        } else if (ch == '>') {
          if (depth == 1) {
            state.tokenize = inText;
            break;
          } else {
            state.tokenize = doctype(depth - 1);
            return state.tokenize(stream, state);
          }
        }
      }

      return 'meta';
    };
  }

  function Context(state, tagName, startOfLine) {
    this.prev = state.context;
    this.tagName = tagName;
    this.indent = state.indented;
    this.startOfLine = startOfLine;

    if (config.doNotIndent.hasOwnProperty(tagName) || state.context && state.context.noIndent) {
      this.noIndent = true;
    }
  }

  function popContext(state) {
    if (state.context) {
      state.context = state.context.prev;
    }
  }

  function maybePopContext(state, nextTagName) {
    var parentTagName;

    while (true) {
      if (!state.context) {
        return;
      }

      parentTagName = state.context.tagName;

      if (!config.contextGrabbers.hasOwnProperty(parentTagName) || !config.contextGrabbers[parentTagName].hasOwnProperty(nextTagName)) {
        return;
      }

      popContext(state);
    }
  }

  function baseState(type, stream, state) {
    if (type == 'openTag') {
      state.tagStart = stream.column();
      return tagNameState;
    } else if (type == 'closeTag') {
      return closeTagNameState;
    } else {
      return baseState;
    }
  }

  function tagNameState(type, stream, state) {
    if (type == 'word') {
      state.tagName = stream.current();
      setStyle = 'tag';
      return attrState;
    } else if (config.allowMissingTagName && type == 'endTag') {
      setStyle = 'tag bracket';
      return attrState(type, stream, state);
    } else {
      setStyle = 'error';
      return tagNameState;
    }
  }

  function closeTagNameState(type, stream, state) {
    if (type == 'word') {
      var tagName = stream.current();

      if (state.context && state.context.tagName != tagName && config.implicitlyClosed.hasOwnProperty(state.context.tagName)) {
        popContext(state);
      }

      if (state.context && state.context.tagName == tagName || config.matchClosing === false) {
        setStyle = 'tag';
        return closeState;
      } else {
        setStyle = 'tag error';
        return closeStateErr;
      }
    } else if (config.allowMissingTagName && type == 'endTag') {
      setStyle = 'tag bracket';
      return closeState(type, stream, state);
    } else {
      setStyle = 'error';
      return closeStateErr;
    }
  }

  function closeState(type, _stream, state) {
    if (type != 'endTag') {
      setStyle = 'error';
      return closeState;
    }

    popContext(state);
    return baseState;
  }

  function closeStateErr(type, stream, state) {
    setStyle = 'error';
    return closeState(type, stream, state);
  }

  function attrState(type, _stream, state) {
    if (type == 'word') {
      setStyle = 'attribute';
      return attrEqState;
    } else if (type == 'endTag' || type == 'selfcloseTag') {
      var tagName = state.tagName,
          tagStart = state.tagStart;
      state.tagName = state.tagStart = null;

      if (type == 'selfcloseTag' || config.autoSelfClosers.hasOwnProperty(tagName)) {
        maybePopContext(state, tagName);
      } else {
        maybePopContext(state, tagName);
        state.context = new Context(state, tagName, tagStart == state.indented);
      }

      return baseState;
    }

    setStyle = 'error';
    return attrState;
  }

  function attrEqState(type, stream, state) {
    if (type == 'equals') {
      return attrValueState;
    }

    if (!config.allowMissing) {
      setStyle = 'error';
    }

    return attrState(type, stream, state);
  }

  function attrValueState(type, stream, state) {
    if (type == 'string') {
      return attrContinuedState;
    }

    if (type == 'word' && config.allowUnquoted) {
      setStyle = 'string';
      return attrState;
    }

    setStyle = 'error';
    return attrState(type, stream, state);
  }

  function attrContinuedState(type, stream, state) {
    if (type == 'string') {
      return attrContinuedState;
    }

    return attrState(type, stream, state);
  }

  return {
    startState: function startState(baseIndent) {
      var state = {
        tokenize: inText,
        state: baseState,
        indented: baseIndent || 0,
        tagName: null,
        tagStart: null,
        context: null
      };

      if (baseIndent != null) {
        state.baseIndent = baseIndent;
      }

      return state;
    },
    token: function token(stream, state) {
      if (!state.tagName && stream.sol()) {
        state.indented = stream.indentation();
      }

      if (stream.eatSpace()) {
        return null;
      }

      type = null;
      var style = state.tokenize(stream, state);

      if ((style || type) && style != 'comment') {
        setStyle = null;
        state.state = state.state(type || style, stream, state);

        if (setStyle) {
          style = setStyle == 'error' ? style + ' error' : setStyle;
        }
      }

      return style;
    },
    indent: function indent(state, textAfter, fullLine) {
      var context = state.context; // Indent multi-line strings (e.g. css).

      if (state.tokenize.isInAttribute) {
        if (state.tagStart == state.indented) {
          return state.stringStartCol + 1;
        } else {
          return state.indented + indentUnit;
        }
      }

      if (context && context.noIndent) {
        return _index__WEBPACK_IMPORTED_MODULE_0__["default"].Pass;
      }

      if (state.tokenize != inTag && state.tokenize != inText) {
        return fullLine ? fullLine.match(/^(\s*)/)[0].length : 0;
      } // Indent the starts of attribute names.


      if (state.tagName) {
        if (config.multilineTagIndentPastTag !== false) {
          return state.tagStart + state.tagName.length + 2;
        } else {
          return state.tagStart + indentUnit * (config.multilineTagIndentFactor || 1);
        }
      }

      if (config.alignCDATA && /<!\[CDATA\[/.test(textAfter)) {
        return 0;
      }

      var tagAfter = textAfter && /^<(\/)?([\w_:\.-]*)/.exec(textAfter);

      if (tagAfter && tagAfter[1]) {
        // Closing tag spotted
        while (context) {
          if (context.tagName == tagAfter[2]) {
            context = context.prev;
            break;
          } else if (config.implicitlyClosed.hasOwnProperty(context.tagName)) {
            context = context.prev;
          } else {
            break;
          }
        }
      } else if (tagAfter) {
        // Opening tag spotted
        while (context) {
          var grabbers = config.contextGrabbers[context.tagName];

          if (grabbers && grabbers.hasOwnProperty(tagAfter[2])) {
            context = context.prev;
          } else {
            break;
          }
        }
      }

      while (context && context.prev && !context.startOfLine) {
        context = context.prev;
      }

      if (context) {
        return context.indent + indentUnit;
      } else {
        return state.baseIndent || 0;
      }
    },
    electricInput: /<\/[\s\w:]+>$/,
    blockCommentStart: '<!--',
    blockCommentEnd: '-->',
    configuration: config.htmlMode ? 'html' : 'xml',
    helperType: config.htmlMode ? 'html' : 'xml',
    skipAttribute: function skipAttribute(state) {
      if (state.state == attrValueState) {
        state.state = attrState;
      }
    },
    xmlCurrentTag: function xmlCurrentTag(state) {
      return state.tagName ? {
        name: state.tagName,
        close: state.type == 'closeTag'
      } : null;
    },
    xmlCurrentContext: function xmlCurrentContext(state) {
      var context = [];

      for (var cx = state.context; cx; cx = cx.prev) {
        if (cx.tagName) {
          context.push(cx.tagName);
        }
      }

      return context.reverse();
    }
  };
}

_index__WEBPACK_IMPORTED_MODULE_0__["default"].defineMIME('text/xml', 'xml');
_index__WEBPACK_IMPORTED_MODULE_0__["default"].defineMIME('php', 'xml');
_index__WEBPACK_IMPORTED_MODULE_0__["default"].defineMIME('vue', 'xml');
_index__WEBPACK_IMPORTED_MODULE_0__["default"].defineMIME('html', 'xml');
_index__WEBPACK_IMPORTED_MODULE_0__["default"].defineMIME('application/xml', 'xml');

if (!_index__WEBPACK_IMPORTED_MODULE_0__["default"].mimeModes.hasOwnProperty('text/html')) {
  _index__WEBPACK_IMPORTED_MODULE_0__["default"].defineMIME('text/html', {
    name: 'xml',
    htmlMode: true
  });
}

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

/***/ "./resources/assets/js/components/MDEditor/components/pro/pro.js":
/*!***********************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/components/pro/pro.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_js_codemirror__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/js/codemirror */ "./resources/assets/js/components/MDEditor/assets/js/codemirror/index.js");
/* harmony import */ var _assets_js_codemirror_mode_xml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/js/codemirror/mode/xml */ "./resources/assets/js/components/MDEditor/assets/js/codemirror/mode/xml.js");
/* harmony import */ var _assets_js_codemirror_mode_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/js/codemirror/mode/css */ "./resources/assets/js/components/MDEditor/assets/js/codemirror/mode/css.js");
/* harmony import */ var _assets_js_codemirror_mode_javascript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/js/codemirror/mode/javascript */ "./resources/assets/js/components/MDEditor/assets/js/codemirror/mode/javascript.js");
/* harmony import */ var _assets_js_codemirror_mode_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/js/codemirror/mode/markdown */ "./resources/assets/js/components/MDEditor/assets/js/codemirror/mode/markdown.js");
/* harmony import */ var _assets_js_codemirror_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/js/codemirror/config */ "./resources/assets/js/components/MDEditor/assets/js/codemirror/config.js");
/* harmony import */ var _assets_js_codemirror_styles_codemirror_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/js/codemirror/styles/codemirror.css */ "./resources/assets/js/components/MDEditor/assets/js/codemirror/styles/codemirror.css");
/* harmony import */ var _mixins_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../mixins/common */ "./resources/assets/js/components/MDEditor/mixins/common.js");
/* harmony import */ var _config_marked__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../config/marked */ "./resources/assets/js/components/MDEditor/config/marked.js");
/* harmony import */ var _assets_js_marked_createToc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/js/marked/createToc */ "./resources/assets/js/components/MDEditor/assets/js/marked/createToc.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'markdown-pro',
  mixins: [_mixins_common__WEBPACK_IMPORTED_MODULE_7__["default"]],
  data: function data() {
    return {
      pro: true,
      editor: null,
      // 编辑器实例
      lastPos: '' // 光标最后所在位置,

    };
  },
  mounted: function mounted() {
    _assets_js_marked_createToc__WEBPACK_IMPORTED_MODULE_9__["default"].reset();
    this.init();
    this.createEditor();
  },
  methods: {
    init: function init() {
      var _this = this;

      // 初始化
      this.currentValue = this.value;
      this.themeName = this.theme;
      this.preview = this.isPreview;
      this.currentValue = this.value;

      if (this.isPreview) {
        return;
      }

      setTimeout(function () {
        if (_this.autoSave) {
          _this.timerId = setInterval(function () {
            _this.handleSave();
          }, _this.interval);
        }
      }, 20);
    },
    createEditor: function createEditor() {
      var _this2 = this;

      // 初始化左侧编辑器
      this.editor = new _assets_js_codemirror__WEBPACK_IMPORTED_MODULE_0__["default"](this.$refs.codemirror, _objectSpread({
        value: this.currentValue,
        onload: function onload(data) {
          var _data$doc$height = data.doc.height,
              height = _data$doc$height === void 0 ? 0 : _data$doc$height;
          _this2.editorScrollHeight = height;
        }
      }, _assets_js_codemirror_config__WEBPACK_IMPORTED_MODULE_5__["default"]));
      this.addEditorLintener();
      this.$emit('on-ready', {
        vm: this,
        insertContent: this.insertContent
      });
    },
    addEditorLintener: function addEditorLintener() {
      var _this3 = this;

      //绑定监听事件
      var editor = this.editor;
      editor.on('change', function (data) {
        _this3.lastPos = editor.getCursor();
        _this3.currentValue = editor.getValue();
        var height = data.doc.height;
        _this3.editorScrollHeight = height;
      });
      editor.on('scroll', this.markdownScroll);
      editor.on('paste', this.handlePaste);
      editor.on('keydown', function (data, e) {
        if (e.keyCode === 83) {
          if (e.metaKey || e.ctrlKey) {
            e.preventDefault();

            _this3.handleSave();
          }
        } else if (e.keyCode === 13) {
          _this3.listerenKeyupEnter(e);
        } else if (e.keyCode === 8) {
          _this3.listerenDelete(data);
        }
      });
      editor.on('focus', function () {
        _this3.lastPos = editor.getCursor();
      });
    },
    insertContent: function insertContent(str) {
      // 插入文本
      this.editor.replaceSelection(str);
      this.lastInsert = str.replace(/\n/g, '');
    },
    setCursor: function setCursor() {
      var line = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var ch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      // 设置焦点
      var editor = this.editor;
      editor.setCursor(line, ch);
      editor.focus();
    },
    insertStrong: function insertStrong() {
      // 粗体
      var editor = this.editor,
          _this$lastPos = this.lastPos,
          lastPos = _this$lastPos === void 0 ? {} : _this$lastPos;
      var _lastPos$line = lastPos.line,
          line = _lastPos$line === void 0 ? 0 : _lastPos$line,
          _lastPos$ch = lastPos.ch,
          ch = _lastPos$ch === void 0 ? 0 : _lastPos$ch;
      var selection = editor.getSelection();

      if (selection) {
        this.insertContent('**' + selection + '**');
      } else {
        this.insertContent('****');
        this.setCursor(line, ch + 2);
      }
    },
    insertItalic: function insertItalic() {
      // 斜体
      var editor = this.editor,
          _this$lastPos2 = this.lastPos,
          lastPos = _this$lastPos2 === void 0 ? {} : _this$lastPos2;
      var _lastPos$line2 = lastPos.line,
          line = _lastPos$line2 === void 0 ? 0 : _lastPos$line2,
          _lastPos$ch2 = lastPos.ch,
          ch = _lastPos$ch2 === void 0 ? 0 : _lastPos$ch2;
      var selection = editor.getSelection();

      if (selection) {
        this.insertContent('*' + selection + '*');
      } else {
        this.insertContent('**');
        this.setCursor(line, ch + 1);
      }
    },
    insertUnderline: function insertUnderline() {
      // 下划线
      var editor = this.editor,
          _this$lastPos3 = this.lastPos,
          lastPos = _this$lastPos3 === void 0 ? {} : _this$lastPos3;
      var _lastPos$line3 = lastPos.line,
          line = _lastPos$line3 === void 0 ? 0 : _lastPos$line3,
          _lastPos$ch3 = lastPos.ch,
          ch = _lastPos$ch3 === void 0 ? 0 : _lastPos$ch3;
      var selection = editor.getSelection();

      if (selection) {
        this.insertContent('<u>' + selection + '</u>');
      } else {
        this.insertContent('<u></u>');
        this.setCursor(line, ch + 3);
      }
    },
    insertOverline: function insertOverline() {
      // 删除线
      var editor = this.editor,
          _this$lastPos4 = this.lastPos,
          lastPos = _this$lastPos4 === void 0 ? {} : _this$lastPos4;
      var _lastPos$line4 = lastPos.line,
          line = _lastPos$line4 === void 0 ? 0 : _lastPos$line4,
          _lastPos$ch4 = lastPos.ch,
          ch = _lastPos$ch4 === void 0 ? 0 : _lastPos$ch4;
      var selection = editor.getSelection();

      if (selection) {
        this.insertContent('~~' + selection + '~~');
      } else {
        this.insertContent('~~~~');
        this.setCursor(line, ch + 2);
      }
    },
    insertTitle: function insertTitle(level) {
      // 插入标题
      var titles = {
        1: '#  ',
        2: '##  ',
        3: '###  ',
        4: '####  ',
        5: '#####  ',
        6: '######  '
      };
      var editor = this.editor,
          _this$lastPos5 = this.lastPos,
          lastPos = _this$lastPos5 === void 0 ? {} : _this$lastPos5;
      var line = lastPos.line;
      var selection = editor.getSelection();

      if (selection) {
        this.insertContent('\n' + titles[level] + selection + '\n');
      } else {
        var title = titles[level];

        if (editor.isClean()) {
          this.insertContent(title);
          this.setCursor(0, title.length);
        } else {
          this.insertContent('\n' + title);
          this.setCursor(line + 1, title.length);
        }
      }
    },
    insertLine: function insertLine() {
      // 插入分割线
      var editor = this.editor;

      if (editor.isClean()) {
        this.insertContent('----\n');
      } else {
        this.insertContent('\n\n----\n');
      }
    },
    insertQuote: function insertQuote() {
      // 引用
      var editor = this.editor,
          _this$lastPos6 = this.lastPos,
          lastPos = _this$lastPos6 === void 0 ? {} : _this$lastPos6;
      var _lastPos$line5 = lastPos.line,
          line = _lastPos$line5 === void 0 ? 0 : _lastPos$line5;
      var selection = editor.getSelection();

      if (selection) {
        this.insertContent('\n>  ' + selection + '\n\n');
      } else {
        if (editor.isClean()) {
          this.insertContent('>  ');
          this.setCursor(0, 3);
        } else {
          this.insertContent('\n>  ');
          this.setCursor(line + 1, 3);
        }
      }
    },
    insertUl: function insertUl() {
      // 无序列表
      var editor = this.editor,
          _this$lastPos7 = this.lastPos,
          lastPos = _this$lastPos7 === void 0 ? {} : _this$lastPos7;
      var _lastPos$line6 = lastPos.line,
          line = _lastPos$line6 === void 0 ? 0 : _lastPos$line6,
          _lastPos$ch5 = lastPos.ch,
          ch = _lastPos$ch5 === void 0 ? 0 : _lastPos$ch5;
      var selection = editor.getSelection();

      if (selection) {
        this.insertContent('\n-  ' + selection + '\n\n');
      } else {
        if (editor.isClean() || ch === 0) {
          this.insertContent('-  ');
          this.setCursor(line, 3);
        } else {
          this.insertContent('\n-  ');
          this.setCursor(line + 1, 3);
        }
      }
    },
    insertOl: function insertOl() {
      // 有序列表
      var editor = this.editor,
          _this$lastPos8 = this.lastPos,
          lastPos = _this$lastPos8 === void 0 ? {} : _this$lastPos8;
      var _lastPos$line7 = lastPos.line,
          line = _lastPos$line7 === void 0 ? 0 : _lastPos$line7,
          _lastPos$ch6 = lastPos.ch,
          ch = _lastPos$ch6 === void 0 ? 0 : _lastPos$ch6;
      var selection = editor.getSelection();

      if (selection) {
        this.insertContent('\n1.  ' + selection + '\n\n');
      } else {
        if (editor.isClean() || ch === 0) {
          this.insertContent('1.  ');
          this.setCursor(line, 4);
        } else {
          this.insertContent('\n1.  ');
          this.setCursor(line + 1, 4);
        }
      }
    },
    insertCode: function insertCode() {
      // 插入code
      var editor = this.editor,
          _this$lastPos9 = this.lastPos,
          lastPos = _this$lastPos9 === void 0 ? {} : _this$lastPos9;
      var line = lastPos.line;
      var selection = editor.getSelection();

      if (selection) {
        this.insertContent('\n```\n' + selection + '\n```\n');
      } else {
        if (editor.isClean()) {
          this.insertContent('```\n\n```');
          this.setCursor(1, 0);
        } else {
          this.insertContent('\n```\n\n```');
          this.setCursor(line + 2, 0);
        }
      }
    },
    insertFinished: function insertFinished() {
      // 已完成列表
      var editor = this.editor,
          _this$lastPos10 = this.lastPos,
          lastPos = _this$lastPos10 === void 0 ? {} : _this$lastPos10;
      var _lastPos$line8 = lastPos.line,
          line = _lastPos$line8 === void 0 ? 0 : _lastPos$line8,
          _lastPos$ch7 = lastPos.ch,
          ch = _lastPos$ch7 === void 0 ? 0 : _lastPos$ch7;
      var selection = editor.getSelection();

      if (selection) {
        this.insertContent('\n- [x] ' + selection + '\n\n');
      } else {
        if (editor.isClean() || ch === 0) {
          this.insertContent('- [x] ');
          this.setCursor(line, 6);
        } else {
          this.insertContent('\n- [x] ');
          this.setCursor(line + 1, 6);
        }
      }
    },
    insertNotFinished: function insertNotFinished() {
      // 未完成列表
      var editor = this.editor,
          _this$lastPos11 = this.lastPos,
          lastPos = _this$lastPos11 === void 0 ? {} : _this$lastPos11;
      var _lastPos$line9 = lastPos.line,
          line = _lastPos$line9 === void 0 ? 0 : _lastPos$line9,
          _lastPos$ch8 = lastPos.ch,
          ch = _lastPos$ch8 === void 0 ? 0 : _lastPos$ch8;
      var selection = editor.getSelection();

      if (selection) {
        this.insertContent('\n- [ ] ' + selection + '\n\n');
      } else {
        if (editor.isClean() || ch === 0) {
          this.insertContent('- [ ] ');
          this.setCursor(line, 6);
        } else {
          this.insertContent('\n- [ ] ');
          this.setCursor(line + 1, 6);
        }
      }
    },
    listerenKeyupEnter: function listerenKeyupEnter(e) {
      // 回车事件
      var lastInsert = this.lastInsert;

      if (lastInsert) {
        var list = ['-', '- [ ]', '- [x]'];

        if (list.includes(lastInsert.trim())) {
          e.preventDefault();
          this.insertContent('\n' + lastInsert);
        } else if (/^\d+\.$/.test(lastInsert.trim())) {
          e.preventDefault();
          this.insertContent('\n' + (parseInt(lastInsert, 0) + 1) + '.  ');
        }
      }
    },
    listerenDelete: function listerenDelete() {
      var _this4 = this;

      // 删除 backup
      setTimeout(function () {
        var editor = _this4.editor;

        if (!editor.isClean()) {
          var value = editor.getValue();

          if (value.split('\n').pop() === '') {
            _this4.lastInsert = '';
          }
        }
      }, 20);
    },
    onDelete: function onDelete() {
      // 删除时,以回车为界分割，如果数组最后一个元素为''时，将行一次插入的共嗯那个置为空，避免回车时再次插入
      var lines = this.currentValue.split('\n');

      if (lines[lines.length - 1] === '') {
        this.lastInsert = '';
      }
    },
    markdownScroll: function markdownScroll() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      //编辑器区域滚动
      if (this.scrolling && this.scrollSide === 'left') {
        var _data$doc = data.doc,
            height = _data$doc.height,
            scrollTop = _data$doc.scrollTop;
        var preview = this.$refs.preview;
        var contentHeight = preview.offsetHeight;
        var previewScrollHeight = preview.scrollHeight;
        preview.scrollTop = parseInt(scrollTop * (previewScrollHeight - contentHeight) / (height - contentHeight), 0);
      }
    },
    previewScroll: function previewScroll() {
      var _this5 = this;

      //预览内容区域滚动
      if (this.scrolling && this.scrollSide === 'right') {
        var preview = this.$refs.preview;
        var contentHeight = preview.offsetHeight;
        var previewScrollHeight = preview.scrollHeight;
        var previewScrollTop = preview.scrollTop;
        var scrollTop = parseInt(previewScrollTop * (this.editorScrollHeight - contentHeight) / (previewScrollHeight - contentHeight), 0);
        this.editor.scrollTo(0, scrollTop); //

        var container = $A(this.$refs.preview);
        var inner, topId;
        container.find("h1,h2,h3,h4,h5").each(function (index, item) {
          inner = $A(item);

          if (inner.offset().top - container.offset().top >= 0 && (topId = inner.attr("toc-id"))) {
            _this5.tocAction = topId;
            return false;
          }
        });
      }
    },
    redo: function redo() {
      var editor = this.editor;
      editor.redo();
      setTimeout(function () {
        editor.refresh();
      }, 20);
    },
    tocLevel: function tocLevel(l, lists) {
      var minLevel = 9999;

      if (typeof lists === "undefined") {
        lists = this.tocLists;
      }

      lists.forEach(function (_ref) {
        var level = _ref.level;
        minLevel = Math.min(minLevel, level);
      });

      if (minLevel === 9999) {
        return l;
      }

      return l - (minLevel - 1);
    },
    tocClick: function tocClick(item) {
      this.tocAction = item.anchor;
      var container = $A(this.$refs.preview);
      var inner = container.find("h" + item.level + '[toc-id="' + this.tocAction + '"]');

      if (inner) {
        container.animate({
          scrollTop: inner.offset().top - container.offset().top + container.scrollTop()
        });
      }
    }
  },
  watch: {
    currentValue: function currentValue() {
      var _this6 = this;

      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(function () {
        var currentValue = _this6.currentValue;
        var html = (0,_config_marked__WEBPACK_IMPORTED_MODULE_8__["default"])(currentValue, _objectSpread({
          sanitize: false
        }, _this6.markedOptions)).replace(/href="/gi, 'target="_blank" href="');

        if (_this6.copyCode && html !== '') {
          html = html.replace(/<pre>/g, '<div class="code-block"><span class="copy-code">' + _this6.copyBtnText + '</span><pre>').replace(/<\/pre>/g, '</pre></div>');
        }

        if (/\[\[TOC\]\]/.test(html)) {
          var string = '';
          _assets_js_marked_createToc__WEBPACK_IMPORTED_MODULE_9__["default"].tocItems.forEach(function (item) {
            string += "<li class=\"toc-anchor-item\" onclick=\"_goTocAction(this, '".concat(item.level, "', '").concat(item.anchor, "')\"><span class=\"toc-link-").concat(_this6.tocLevel(item.level, _assets_js_marked_createToc__WEBPACK_IMPORTED_MODULE_9__["default"].tocItems), "\" title=\"").concat(item.text, "\">").concat(item.text, "</span></li>");
          });
          html = html.replace(/\[\[TOC\]\]/g, "<ul class=\"toc-anchor\">".concat(string, "</ul>"));
        }

        _this6.html = html; //toc

        _this6.tocLists = _assets_js_marked_createToc__WEBPACK_IMPORTED_MODULE_9__["default"].tocItems;

        if (!_this6.tocTrigger) {
          _this6.tocShow = _this6.tocLists.length > 1;
        }

        _assets_js_marked_createToc__WEBPACK_IMPORTED_MODULE_9__["default"].reset();

        _this6.addImageClickListener();

        _this6.addCopyListener();

        _this6.$emit('input', currentValue);
      }, 30);
    },
    value: function value() {
      var value = this.value,
          currentValue = this.currentValue;

      if (currentValue !== value) {
        // 由于用户输入而造成的value变化，不对editor设置值
        this.currentValue = value;
        this.editor.setOption('value', value);
      }
    }
  }
});

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

/***/ "./resources/assets/js/components/MDEditor/config/tools.js":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/config/tools.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
* 默认头部菜单配置
* */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  strong: true,
  italic: true,
  overline: true,
  h1: true,
  h2: true,
  h3: true,
  h4: false,
  h5: false,
  h6: false,
  hr: true,
  quote: true,
  ul: true,
  ol: true,
  code: true,
  link: true,
  image: true,
  uploadImage: false,
  custom_image: false,
  custom_uploadImage: false,
  custom_uploadFile: false,
  table: true,
  checked: true,
  notChecked: true,
  split: true,
  preview: true,
  fullscreen: true,
  theme: true,
  exportmd: true,
  importmd: true,
  save: false,
  clear: false
});

/***/ }),

/***/ "./resources/assets/js/components/MDEditor/mixins/common.js":
/*!******************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/mixins/common.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./resources/assets/js/components/MDEditor/utils/index.js");
/* harmony import */ var _config_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/tools */ "./resources/assets/js/components/MDEditor/config/tools.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'markdown',
  props: {
    value: {
      type: [String, Number],
      "default": ''
    },
    theme: {
      // 默认主题
      type: String,
      "default": 'light'
    },
    width: {
      // 初始化宽度
      type: [Number, String],
      "default": 'auto'
    },
    height: {
      // 初始化高度
      type: [Number, String],
      "default": 600
    },
    toolbars: {
      // 工具栏
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    bordered: {
      //是否有边框
      type: Boolean,
      "default": true
    },
    autoSave: {
      // 是否自动保存
      type: Boolean,
      "default": false
    },
    interval: {
      // 自动保存间隔 mm
      type: Number,
      "default": 10000
    },
    exportFileName: {
      // 默认导出文件名称
      type: String,
      "default": 'unnamed'
    },
    markedOptions: {
      //marked.js配置项
      type: Object,
      "default": function _default() {
        return {};
      }
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
    },
    isPreview: {
      //是否是预览模式
      type: Boolean,
      "default": false
    },
    isCustomFullscreen: {
      //是否全部（自定义参数）
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      currentValue: '',
      // 输入框内容
      timeoutId: null,
      indexLenth: 1,
      html: '',
      // 预览的html
      preview: false,
      // 是否是预览状态
      split: true,
      //分屏显示
      fullscreen: false,
      // 是否是全屏
      scrollSide: '',
      // 哪个半栏在滑动
      lastInsert: '',
      //最后一次插入的内容
      timerId: null,
      // 定时器id
      themeName: '',
      themeSlideDown: false,
      imgSlideDown: false,
      imgs: [],
      scrolling: true,
      // 同步滚动
      editorScrollHeight: 0,
      previewImgModal: false,
      previewImgSrc: '',
      previewImgMode: '',
      tocTrigger: false,
      tocShow: false,
      tocAction: '',
      tocLists: []
    };
  },
  computed: {
    tools: function tools() {
      var _this$toolbars = this.toolbars,
          toolbars = _this$toolbars === void 0 ? {} : _this$toolbars;
      return _objectSpread(_objectSpread({}, _config_tools__WEBPACK_IMPORTED_MODULE_1__["default"]), toolbars);
    }
  },
  methods: {
    insertLink: function insertLink() {
      // 插入链接
      this.insertContent('\n[link](href)');
    },
    insertImage: function insertImage() {
      // 插入图片
      this.insertContent('\n![image](imgUrl)');
    },
    insertTable: function insertTable() {
      // 插入表格
      this.insertContent('\nheader 1 | header 2\n---|---\nrow 1 col 1 | row 1 col 2\nrow 2 col 1 | row 2 col 2\n\n');
    },
    handleSave: function handleSave() {
      // 保存操作
      var currentValue = this.currentValue,
          themeName = this.themeName,
          html = this.html;
      this.$emit('on-save', {
        theme: themeName,
        value: currentValue,
        html: html
      });
    },
    toggleSlideDown: function toggleSlideDown() {
      // 显示主题选项
      this.slideDown = !this.slideDown;
    },
    setThemes: function setThemes(name) {
      // 设置主题
      this.themeName = name;
      this.themeSlideDown = false;
      this.$emit('on-theme-change', name);
    },
    exportFile: function exportFile() {
      // 导出为.md格式
      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.saveFile)(this.currentValue, this.exportFileName + '.md');
    },
    importFile: function importFile(e) {
      var _this = this;

      // 导入本地文件
      var file = e.target.files[0];

      if (!file) {
        return;
      }

      var type = file.type;

      if (!['text/markdown', 'text/src'].includes(type)) {
        return;
      }

      var reader = new FileReader();
      reader.readAsText(file, {
        encoding: 'utf-8'
      });

      reader.onload = function () {
        _this.currentValue = reader.result;
        e.target.value = '';

        if (_this.pro) {
          // 专业版，手动set value
          _this.editor.setOption('value', _this.currentValue);
        }
      };

      reader.onerror = function (err) {
        console.error(err);
      };
    },
    handlePaste: function handlePaste(_, e) {
      // 粘贴图片
      var _e$clipboardData = e.clipboardData,
          clipboardData = _e$clipboardData === void 0 ? {} : _e$clipboardData;
      var _clipboardData$types = clipboardData.types,
          types = _clipboardData$types === void 0 ? [] : _clipboardData$types,
          items = clipboardData.items;
      var item = null;

      for (var i = 0; i < types.length; i++) {
        if (types[i] === 'Files') {
          item = items[i];
          break;
        }
      }

      if (item) {
        var file = item.getAsFile();

        if (/image/gi.test(file.type)) {
          this.$emit('on-upload-image', file);
          e.preventDefault();
        }
      }
    },
    mousescrollSide: function mousescrollSide(side) {
      // 设置究竟是哪个半边在主动滑动
      this.scrollSide = side;
    },
    addImageClickListener: function addImageClickListener() {
      var _this2 = this;

      // 监听查看大图
      var _this$imgs = this.imgs,
          imgs = _this$imgs === void 0 ? [] : _this$imgs;

      if (imgs.length > 0) {
        for (var i = 0, len = imgs.length; i < len; i++) {
          imgs[i].onclick = null;
        }
      }

      setTimeout(function () {
        if (!_this2.$refs.preview) {
          return;
        }

        _this2.imgs = _this2.$refs.preview.querySelectorAll('img');

        var _loop = function _loop(_i, _len) {
          _this2.imgs[_i].onclick = function () {
            var src = _this2.imgs[_i].getAttribute('src');

            _this2.previewImage(src);
          };
        };

        for (var _i = 0, _len = _this2.imgs.length; _i < _len; _i++) {
          _loop(_i, _len);
        }
      }, 600);
    },
    previewImage: function previewImage(src) {
      var _this3 = this;

      // 预览图片
      var img = new Image();
      img.src = src;

      img.onload = function () {
        var width = img.naturalWidth;
        var height = img.naturalHeight;

        if (height / width > 1.4) {
          _this3.previewImgMode = 'horizontal';
        } else {
          _this3.previewImgMode = 'vertical';
        }

        _this3.previewImgSrc = src;
        _this3.previewImgModal = true;
      };
    },
    chooseImage: function chooseImage() {
      var _this4 = this;

      // 选择图片
      var input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';

      input.onchange = function () {
        var files = input.files;

        if (files[0]) {
          _this4.$emit('on-upload-image', files[0]);

          input.value = '';
        }
      };

      input.click();
    },
    addCopyListener: function addCopyListener() {
      var _this5 = this;

      // 监听复制操作
      setTimeout(function () {
        var btns = document.querySelectorAll('.code-block .copy-code');
        _this5.btns = btns;

        var _loop2 = function _loop2(i, len) {
          btns[i].onclick = function () {
            var code = btns[i].parentNode.querySelectorAll('pre')[0].innerText;
            var aux = document.createElement('input');
            aux.setAttribute('value', code);
            document.body.appendChild(aux);
            aux.select();
            document.execCommand('copy');
            document.body.removeChild(aux);

            _this5.$emit('on-copy', code);
          };
        };

        for (var i = 0, len = btns.length; i < len; i++) {
          _loop2(i, len);
        }
      }, 600);
    },

    /**
     * 自定义事件
     * @param act
     */
    onCustom: function onCustom(act) {
      this.$emit('on-custom', act);
    }
  },
  destroyed: function destroyed() {
    // 销毁时清除定时器
    clearInterval(this.timerId);
  }
});

/***/ }),

/***/ "./resources/assets/js/components/MDEditor/pro.js":
/*!********************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/pro.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_pro_index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/pro/index.vue */ "./resources/assets/js/components/MDEditor/components/pro/index.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_pro_index_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/assets/js/components/MDEditor/utils/index.js":
/*!****************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/utils/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveFile": () => (/* binding */ saveFile)
/* harmony export */ });
/*
* 保存文件到本地
* */
function saveFile(fileData, name) {
  var pom = document.createElement('a');
  pom.setAttribute('href', 'data:text/plain;charset=UTF-8,' + encodeURIComponent(fileData));
  pom.setAttribute('download', name);
  pom.style.display = 'none';

  if (document.createEvent) {
    var event = document.createEvent('MouseEvents');
    event.initEvent('click', true, true);
    pom.dispatchEvent(event);
  } else {
    pom.click();
  }
}

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/index.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/index.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".mdeditor-transfer {\n  background-color: #ffffff;\n}\n.mdeditor-transfer .ivu-modal-header {\n  display: none;\n}\n.mdeditor-transfer .ivu-modal-close {\n  top: 7px;\n}\n.mdeditor-transfer .mdeditor-transfer-body {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/index.vue?vue&type=style&index=1&id=c72f0984&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/index.vue?vue&type=style&index=1&id=c72f0984&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".mdeditor-box[data-v-c72f0984] {\n  position: relative;\n}\n.upload-control[data-v-c72f0984] {\n  display: none;\n  width: 0;\n  height: 0;\n  overflow: hidden;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-18[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-18[0].rules[0].use[2]!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/components/pro/index.vue?vue&type=style&index=0&id=743cb2fb&scoped=true&lang=less&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-18[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-18[0].rules[0].use[2]!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/components/pro/index.vue?vue&type=style&index=0&id=743cb2fb&scoped=true&lang=less& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"utf-8\";\n/*\n*Author zhaoxuhui\n*/\n/*\n*Author zhaoxuhui\n*/\n[data-v-743cb2fb] .markdown-theme-light pre {\n  font-size: 14px !important;\n  line-height: 1.6 !important;\n  word-break: break-all;\n  word-wrap: break-word;\n  border: 0 !important;\n  border-radius: 0 !important;\n  background: #f7f8fb !important;\n  padding: 20px 10px!important;\n  border-radius: 4px !important;\n  overflow-y: hidden !important;\n  overflow-x: auto !important;\n  margin: 10px 0 !important;\n}\n[data-v-743cb2fb] .markdown-theme-light pre code {\n  font-family: Consolas !important;\n  font-size: 13px;\n  line-height: 22px !important;\n  color: #444;\n}\n[data-v-743cb2fb] .markdown-theme-light .hljs {\n  display: block;\n  overflow-x: auto;\n  color: #525252;\n  padding: 15px;\n  -webkit-text-size-adjust: none;\n}\n[data-v-743cb2fb] .markdown-theme-light .hljs-doctype {\n  color: #999;\n}\n[data-v-743cb2fb] .markdown-theme-light .hljs-tag {\n  color: #3e76f6;\n}\n[data-v-743cb2fb] .markdown-theme-light .hljs-attribute {\n  color: #e96900;\n}\n[data-v-743cb2fb] .markdown-theme-light .hljs-value {\n  color: #42b983;\n}\n[data-v-743cb2fb] .markdown-theme-light .hljs-keyword {\n  color: #e96900;\n}\n[data-v-743cb2fb] .markdown-theme-light .hljs-string {\n  color: #42b983;\n}\n[data-v-743cb2fb] .markdown-theme-light .hljs-comment {\n  color: #b3b3b3;\n}\n[data-v-743cb2fb] .markdown-theme-light .hljs-operator .hljs-comment {\n  color: #525252;\n}\n[data-v-743cb2fb] .markdown-theme-light .hljs-regexp {\n  color: #af7dff;\n}\n[data-v-743cb2fb] .markdown-theme-light .hljs-built_in {\n  color: #2db7f5;\n}\n[data-v-743cb2fb] .markdown-theme-light .css .hljs-class {\n  color: #e96900;\n}\n[data-v-743cb2fb] .markdown-theme-light .css .hljs-number,[data-v-743cb2fb] .markdown-theme-light .javascript .hljs-number {\n  color: #fc1e70;\n}\n[data-v-743cb2fb] .markdown-theme-light .css .hljs-attribute {\n  color: #af7dff;\n}\n[data-v-743cb2fb] .markdown-theme-light .css .hljs-important {\n  color: red;\n}\n[data-v-743cb2fb] .markdown-theme-light .actionscript .hljs-literal,[data-v-743cb2fb] .markdown-theme-light .javascript .hljs-literal {\n  color: #fc1e70;\n}\n[data-v-743cb2fb] .markdown-theme-light pre {\n  padding: 0;\n  margin: 0;\n  background: #f7f7f7 !important;\n}\n[data-v-743cb2fb] .markdown-theme-light code {\n  display: inline-block;\n  background: #f7f7f7;\n  font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;\n  margin: 0 3px;\n  padding: 1px 5px;\n  border-radius: 3px;\n  color: #666;\n  border: 1px solid #eee;\n}\n[data-v-743cb2fb] .markdown-theme-light pre code {\n  display: inline;\n  margin: 0;\n  padding: 0;\n  border: none;\n  background: transparent;\n}\n[data-v-743cb2fb] .markdown-theme-light pre.bg code {\n  background: #f7f7f7;\n}\n/*\n*Author zhaoxuhui\n*/\n[data-v-743cb2fb] .markdown-theme-dark pre {\n  display: block;\n  padding: 20px 10px!important;\n  border-radius: 4px;\n  margin: 20px 0 !important;\n  background: #1e1e1e;\n  color: #DCDCDC;\n  overflow-y: hidden !important;\n  overflow-x: auto !important;\n  font-family: Menlo, Consolas, \"Courier New\", Courier, FreeMono, monospace !important;\n}\n[data-v-743cb2fb] .markdown-theme-dark pre * {\n  line-height: 1.6 !important;\n  font-size: 14px;\n  font-family: Menlo, Consolas, \"Courier New\", Courier, FreeMono, monospace !important;\n}\n[data-v-743cb2fb] .markdown-theme-dark code {\n  padding: 0 !important;\n  margin: 0 !important;\n}\n[data-v-743cb2fb] .markdown-theme-dark .hljs-literal,[data-v-743cb2fb] .markdown-theme-dark .hljs-name,[data-v-743cb2fb] .markdown-theme-dark .hljs-symbol {\n  color: #659bd1;\n}\n[data-v-743cb2fb] .markdown-theme-dark .hljs-keyword {\n  color: #bc89bd;\n}\n[data-v-743cb2fb] .markdown-theme-dark .hljs-link {\n  color: #569CD6;\n  text-decoration: underline;\n}\n[data-v-743cb2fb] .markdown-theme-dark .hljs-built_in,[data-v-743cb2fb] .markdown-theme-dark .hljs-type {\n  color: #4EC9B0;\n}\n[data-v-743cb2fb] .markdown-theme-dark .hljs-class,[data-v-743cb2fb] .markdown-theme-dark .hljs-number {\n  color: #B8D7A3;\n}\n[data-v-743cb2fb] .markdown-theme-dark .hljs-meta-string,[data-v-743cb2fb] .markdown-theme-dark .hljs-string {\n  color: #D69D85;\n}\n[data-v-743cb2fb] .markdown-theme-dark .hljs-regexp,[data-v-743cb2fb] .markdown-theme-dark .hljs-template-tag {\n  color: #9A5334;\n}\n[data-v-743cb2fb] .markdown-theme-dark .hljs-formula,[data-v-743cb2fb] .markdown-theme-dark .hljs-function,[data-v-743cb2fb] .markdown-theme-dark .hljs-params,[data-v-743cb2fb] .markdown-theme-dark .hljs-subst,[data-v-743cb2fb] .markdown-theme-dark .hljs-title {\n  color: #DCDCDC;\n}\n[data-v-743cb2fb] .markdown-theme-dark .hljs-comment,[data-v-743cb2fb] .markdown-theme-dark .hljs-quote {\n  color: #57A64A;\n  font-style: italic;\n}\n[data-v-743cb2fb] .markdown-theme-dark .hljs-doctag {\n  color: #608B4E;\n}\n[data-v-743cb2fb] .markdown-theme-dark .hljs-meta,[data-v-743cb2fb] .markdown-theme-dark .hljs-meta-keyword,[data-v-743cb2fb] .markdown-theme-dark .hljs-tag {\n  color: #9B9B9B;\n}\n[data-v-743cb2fb] .markdown-theme-dark .hljs-template-variable,[data-v-743cb2fb] .markdown-theme-dark .hljs-variable {\n  color: #BD63C5;\n}\n[data-v-743cb2fb] .markdown-theme-dark .hljs-attr,[data-v-743cb2fb] .markdown-theme-dark .hljs-attribute,[data-v-743cb2fb] .markdown-theme-dark .hljs-builtin-name {\n  color: #9CDCFE;\n}\n[data-v-743cb2fb] .markdown-theme-dark .hljs-section {\n  color: gold;\n}\n[data-v-743cb2fb] .markdown-theme-dark .hljs-emphasis {\n  font-style: italic;\n}\n[data-v-743cb2fb] .markdown-theme-dark .hljs-strong {\n  font-weight: bold;\n}\n[data-v-743cb2fb] .markdown-theme-dark .hljs-bullet,[data-v-743cb2fb] .markdown-theme-dark .hljs-selector-attr,[data-v-743cb2fb] .markdown-theme-dark .hljs-selector-class,[data-v-743cb2fb] .markdown-theme-dark .hljs-selector-id,[data-v-743cb2fb] .markdown-theme-dark .hljs-selector-pseudo,[data-v-743cb2fb] .markdown-theme-dark .hljs-selector-tag {\n  color: #D7BA7D;\n}\n[data-v-743cb2fb] .markdown-theme-dark .hljs-addition {\n  background-color: #144212;\n  display: inline-block;\n  width: 100%;\n}\n[data-v-743cb2fb] .markdown-theme-dark .hljs-deletion {\n  background-color: #600;\n  display: inline-block;\n  width: 100%;\n}\n[data-v-743cb2fb] .markdown-theme-dark .hljs-comment {\n  font-style: normal;\n}\n/*\n*Author zhaoxuhui\n*/\n[data-v-743cb2fb] .markdown-theme-oneDark pre {\n  padding: 20px 10px!important;\n  display: block;\n  color: #abb2bf;\n  font-family: Menlo, Consolas, \"Courier New\", Courier, FreeMono, monospace;\n  background: #292c34;\n  border-radius: 4px;\n  overflow-y: hidden !important;\n  overflow-x: auto !important;\n  margin: 10px 0 !important;\n}\n[data-v-743cb2fb] .markdown-theme-oneDark pre * {\n  line-height: 1.6 !important;\n  font-size: 14px;\n  font-family: Menlo, Consolas, \"Courier New\", Courier, FreeMono, monospace;\n}\n[data-v-743cb2fb] .markdown-theme-oneDark .hljs-comment,[data-v-743cb2fb] .markdown-theme-oneDark .hljs-quote {\n  color: #5c6370;\n  font-style: italic;\n}\n[data-v-743cb2fb] .markdown-theme-oneDark .hljs-doctag,[data-v-743cb2fb] .markdown-theme-oneDark .hljs-formula,[data-v-743cb2fb] .markdown-theme-oneDark .hljs-keyword {\n  color: #c678dd;\n}\n[data-v-743cb2fb] .markdown-theme-oneDark .hljs-deletion,[data-v-743cb2fb] .markdown-theme-oneDark .hljs-name,[data-v-743cb2fb] .markdown-theme-oneDark .hljs-section,[data-v-743cb2fb] .markdown-theme-oneDark .hljs-selector-tag,[data-v-743cb2fb] .markdown-theme-oneDark .hljs-subst {\n  color: #e06c75;\n}\n[data-v-743cb2fb] .markdown-theme-oneDark .hljs-literal {\n  color: #56b6c2;\n}\n[data-v-743cb2fb] .markdown-theme-oneDark .hljs-addition,[data-v-743cb2fb] .markdown-theme-oneDark .hljs-attribute,[data-v-743cb2fb] .markdown-theme-oneDark .hljs-meta-string,[data-v-743cb2fb] .markdown-theme-oneDark .hljs-regexp,[data-v-743cb2fb] .markdown-theme-oneDark .hljs-string {\n  color: #98c379;\n}\n[data-v-743cb2fb] .markdown-theme-oneDark .hljs-built_in,[data-v-743cb2fb] .markdown-theme-oneDark .hljs-class .hljs-title {\n  color: #e6c07b;\n}\n[data-v-743cb2fb] .markdown-theme-oneDark .hljs-attr,[data-v-743cb2fb] .markdown-theme-oneDark .hljs-number,[data-v-743cb2fb] .markdown-theme-oneDark .hljs-selector-attr,[data-v-743cb2fb] .markdown-theme-oneDark .hljs-selector-class,[data-v-743cb2fb] .markdown-theme-oneDark .hljs-selector-pseudo,[data-v-743cb2fb] .markdown-theme-oneDark .hljs-template-variable,[data-v-743cb2fb] .markdown-theme-oneDark .hljs-type,[data-v-743cb2fb] .markdown-theme-oneDark .hljs-variable {\n  color: #d19a66;\n}\n[data-v-743cb2fb] .markdown-theme-oneDark .hljs-bullet,[data-v-743cb2fb] .markdown-theme-oneDark .hljs-link,[data-v-743cb2fb] .markdown-theme-oneDark .hljs-meta,[data-v-743cb2fb] .markdown-theme-oneDark .hljs-selector-id,[data-v-743cb2fb] .markdown-theme-oneDark .hljs-symbol,[data-v-743cb2fb] .markdown-theme-oneDark .hljs-title {\n  color: #61aeee;\n}\n[data-v-743cb2fb] .markdown-theme-oneDark .hljs-emphasis {\n  font-style: italic;\n}\n[data-v-743cb2fb] .markdown-theme-oneDark .hljs-strong {\n  font-weight: bold;\n}\n[data-v-743cb2fb] .markdown-theme-oneDark .hljs-link {\n  text-decoration: underline;\n}\n/*\n*Author zhaoxuhui\n*/\n[data-v-743cb2fb] .markdown-theme-gitHub pre {\n  padding: 20px 10px!important;\n  display: block;\n  overflow-x: auto;\n  color: #333;\n  background: #f7f8fa !important;\n  font-size: 13px;\n  line-height: 20px;\n  border-radius: 4px;\n  margin: 10px 0 !important;\n  overflow-x: auto !important;\n}\n[data-v-743cb2fb] .markdown-theme-gitHub pre * {\n  font-family: Consolas !important;\n}\n[data-v-743cb2fb] .markdown-theme-gitHub .hljs-comment,[data-v-743cb2fb] .markdown-theme-gitHub .hljs-quote {\n  color: #998;\n  font-style: italic;\n}\n[data-v-743cb2fb] .markdown-theme-gitHub .hljs-selector-tag,[data-v-743cb2fb] .markdown-theme-gitHub .hljs-subst {\n  color: #333;\n  font-weight: bold;\n}\n[data-v-743cb2fb] .markdown-theme-gitHub .hljs-keyword {\n  color: #d73a49;\n}\n[data-v-743cb2fb] .markdown-theme-gitHub .hljs-literal,[data-v-743cb2fb] .markdown-theme-gitHub .hljs-number,[data-v-743cb2fb] .markdown-theme-gitHub .hljs-tag .hljs-attr,[data-v-743cb2fb] .markdown-theme-gitHub .hljs-template-variable,[data-v-743cb2fb] .markdown-theme-gitHub .hljs-variable {\n  color: #008080;\n}\n[data-v-743cb2fb] .markdown-theme-gitHub .hljs-doctag,[data-v-743cb2fb] .markdown-theme-gitHub .hljs-string {\n  color: #d73a49;\n}\n[data-v-743cb2fb] .markdown-theme-gitHub .hljs-section,[data-v-743cb2fb] .markdown-theme-gitHub .hljs-selector-id,[data-v-743cb2fb] .markdown-theme-gitHub .hljs-title {\n  color: #900;\n  font-weight: bold;\n}\n[data-v-743cb2fb] .markdown-theme-gitHub .hljs-subst {\n  font-weight: normal;\n}\n[data-v-743cb2fb] .markdown-theme-gitHub .hljs-class .hljs-title,[data-v-743cb2fb] .markdown-theme-gitHub .hljs-type {\n  color: #458;\n  font-weight: bold;\n}\n[data-v-743cb2fb] .markdown-theme-gitHub .hljs-attribute,[data-v-743cb2fb] .markdown-theme-gitHub .hljs-name,[data-v-743cb2fb] .markdown-theme-gitHub .hljs-tag {\n  color: #000080;\n  font-weight: normal;\n}\n[data-v-743cb2fb] .markdown-theme-gitHub .hljs-link,[data-v-743cb2fb] .markdown-theme-gitHub .hljs-regexp {\n  color: #009926;\n}\n[data-v-743cb2fb] .markdown-theme-gitHub .hljs-bullet,[data-v-743cb2fb] .markdown-theme-gitHub .hljs-symbol {\n  color: #990073;\n}\n[data-v-743cb2fb] .markdown-theme-gitHub .hljs-built_in,[data-v-743cb2fb] .markdown-theme-gitHub .hljs-builtin-name {\n  color: #0086b3;\n}\n[data-v-743cb2fb] .markdown-theme-gitHub .hljs-meta {\n  color: #999;\n  font-weight: bold;\n}\n[data-v-743cb2fb] .markdown-theme-gitHub .hljs-deletion {\n  background: #fdd;\n}\n[data-v-743cb2fb] .markdown-theme-gitHub .hljs-addition {\n  background: #dfd;\n}\n[data-v-743cb2fb] .markdown-theme-gitHub .hljs-emphasis {\n  font-style: italic;\n}\n[data-v-743cb2fb] .markdown-theme-gitHub .hljs-strong {\n  font-weight: bold;\n}\n.markdown[data-v-743cb2fb] {\n  overflow: hidden;\n  position: relative;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  background: #f7f7f7;\n}\n.markdown.border[data-v-743cb2fb] {\n  border: 1px solid #d9d9d9;\n}\n.markdown *[data-v-743cb2fb] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.markdown.fullscreen[data-v-743cb2fb] {\n  position: fixed;\n  z-index: 999999;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100% !important;\n  width: 100%;\n  border: none;\n}\n.markdown.fullscreen .markdown-content[data-v-743cb2fb] {\n  padding: 0;\n  padding-top: 10px;\n}\n.markdown .markdown-toolbars[data-v-743cb2fb] {\n  width: 100%;\n  display: block;\n  list-style: none;\n  background: #fff;\n  color: #6a6f7b;\n  cursor: pointer;\n  padding-left: 4px;\n  border-bottom: 1px solid #d9d9d9;\n}\n.markdown .markdown-toolbars > li[data-v-743cb2fb] {\n  float: left;\n  position: relative;\n  cursor: pointer;\n  margin: 0;\n  line-height: normal;\n  min-height: auto;\n}\n.markdown .markdown-toolbars > li[data-v-743cb2fb]:after {\n  display: block;\n  content: attr(name);\n  position: absolute;\n  z-index: 999999999999;\n  top: 32px;\n  left: 20px;\n  background: #000;\n  color: #fff;\n  white-space: nowrap;\n  font-size: 12px;\n  line-height: 28px;\n  padding: 0 6px;\n  transition: all 0.3s 0.1s;\n  transform: scale(0);\n  opacity: 0;\n  transform-origin: top;\n  border-radius: 2px;\n}\n.markdown .markdown-toolbars > li[data-v-743cb2fb]:hover:after {\n  transform: scale(1);\n  opacity: 1;\n}\n.markdown .markdown-toolbars > li[data-v-743cb2fb]:last-child:after {\n  right: 20%;\n  left: auto;\n}\n.markdown .markdown-toolbars > li .title[data-v-743cb2fb] {\n  font-size: 16px !important;\n}\n.markdown .markdown-toolbars > li .icon-svg[data-v-743cb2fb] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.markdown .markdown-toolbars > li.right[data-v-743cb2fb] {\n  float: right;\n}\n.markdown .markdown-toolbars > li.right > ul[data-v-743cb2fb] {\n  list-style: none;\n}\n.markdown .markdown-toolbars > li.right > ul > li[data-v-743cb2fb] {\n  line-height: normal;\n  float: left;\n}\n.markdown .markdown-toolbars span[data-v-743cb2fb] {\n  font-size: 18px;\n  color: #999;\n  cursor: pointer;\n  display: block;\n  width: 30px;\n  height: 30px;\n  border-radius: 3px;\n  line-height: 30px;\n  text-align: center;\n}\n.markdown .markdown-toolbars span[data-v-743cb2fb]:hover {\n  background: #f7f7f7;\n  color: #1890ff;\n}\n.markdown .markdown-toolbars .title[data-v-743cb2fb] {\n  padding-left: 4px;\n  padding-right: 10px;\n}\n.markdown .markdown-toolbars li:last-child span[data-v-743cb2fb] {\n  font-size: 20px !important;\n  margin-right: 4px;\n}\n.markdown .markdown-toolbars .shift-theme[data-v-743cb2fb],\n.markdown .markdown-toolbars .export-file[data-v-743cb2fb] {\n  height: 46px;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.markdown .markdown-toolbars .shift-theme span[data-v-743cb2fb],\n.markdown .markdown-toolbars .export-file span[data-v-743cb2fb] {\n  padding: 0 8px;\n  transition: all 0.3s;\n  font-size: 18px;\n  display: inline-block;\n  line-height: 32px;\n}\n.markdown .markdown-toolbars .shift-theme span[data-v-743cb2fb]:hover,\n.markdown .markdown-toolbars .export-file span[data-v-743cb2fb]:hover {\n  color: #0084ff;\n  background: #f7f7f7;\n  border-radius: 3px;\n}\n.markdown .markdown-toolbars .shift-theme ul[data-v-743cb2fb],\n.markdown .markdown-toolbars .export-file ul[data-v-743cb2fb] {\n  transform: scale(0);\n  transition: all 0.3s;\n  left: -50%;\n  top: 40px;\n  width: 160px;\n  transform-origin: top center;\n  list-style: none;\n  margin: 0;\n  padding: 6px 0;\n  box-sizing: border-box;\n  border: 1px solid #d9d9d9;\n  background: #fff;\n  border-radius: 4px;\n  position: absolute;\n  z-index: 9999999;\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);\n}\n.markdown .markdown-toolbars .shift-theme ul.active[data-v-743cb2fb],\n.markdown .markdown-toolbars .export-file ul.active[data-v-743cb2fb] {\n  opacity: 1;\n  transform: scaleY(1);\n}\n.markdown .markdown-toolbars .shift-theme ul li[data-v-743cb2fb],\n.markdown .markdown-toolbars .export-file ul li[data-v-743cb2fb] {\n  line-height: 30px;\n  padding: 0 12px;\n  padding-left: 12px;\n  font-size: 13px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: flex;\n  align-items: center;\n  color: #262626;\n}\n.markdown .markdown-toolbars .shift-theme ul li .iconfont[data-v-743cb2fb],\n.markdown .markdown-toolbars .export-file ul li .iconfont[data-v-743cb2fb] {\n  font-size: 14px;\n  display: block;\n  height: 30px;\n  width: 30px;\n  line-height: 30px;\n  overflow: hidden;\n}\n.markdown .markdown-toolbars .shift-theme ul li .iconfont[data-v-743cb2fb]:hover,\n.markdown .markdown-toolbars .export-file ul li .iconfont[data-v-743cb2fb]:hover {\n  color: #262626;\n}\n.markdown .markdown-toolbars .shift-theme ul li i[data-v-743cb2fb],\n.markdown .markdown-toolbars .export-file ul li i[data-v-743cb2fb] {\n  font-size: 13px;\n  display: block;\n  font-style: normal;\n  flex: 1;\n  white-space: normal;\n}\n.markdown .markdown-toolbars .shift-theme ul li[data-v-743cb2fb]:last-child,\n.markdown .markdown-toolbars .export-file ul li[data-v-743cb2fb]:last-child {\n  border-bottom: 0;\n}\n.markdown .markdown-toolbars .shift-theme ul li:last-child .iconfont[data-v-743cb2fb],\n.markdown .markdown-toolbars .export-file ul li:last-child .iconfont[data-v-743cb2fb] {\n  font-size: 14px !important;\n  margin: 0 !important;\n}\n.markdown .markdown-toolbars .shift-theme ul li[data-v-743cb2fb]:hover,\n.markdown .markdown-toolbars .export-file ul li[data-v-743cb2fb]:hover {\n  background: #f7f7f7;\n}\n.markdown .markdown-toolbars .shift-theme ul li.disabled[data-v-743cb2fb],\n.markdown .markdown-toolbars .export-file ul li.disabled[data-v-743cb2fb] {\n  cursor: not-allowed;\n  color: #bbbec4;\n}\n.markdown .markdown-toolbars .shift-theme ul li.disabled[data-v-743cb2fb]:hover,\n.markdown .markdown-toolbars .export-file ul li.disabled[data-v-743cb2fb]:hover {\n  background: transparent;\n}\n.markdown .markdown-toolbars .import-file[data-v-743cb2fb] {\n  position: relative;\n}\n.markdown .markdown-toolbars .import-file input[data-v-743cb2fb] {\n  position: absolute;\n  z-index: 9999;\n  left: 0;\n  top: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  cursor: pointer;\n  font-size: 0;\n}\n.markdown .markdown-toolbars .import-file:hover span[data-v-743cb2fb] {\n  background: #f7f7f7;\n  color: #1890ff;\n}\n.markdown .markdown-toolbars .import-file[data-v-743cb2fb]:hover:after {\n  transform: scale(1);\n  opacity: 1;\n}\n.markdown .close-preview[data-v-743cb2fb] {\n  position: absolute;\n  z-index: 999;\n  right: 0;\n  top: 0;\n  height: 40px;\n  width: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  color: #262626;\n}\n.markdown .close-preview span[data-v-743cb2fb] {\n  font-size: 22px;\n}\n.markdown .close-preview span[data-v-743cb2fb]:hover {\n  color: #262626;\n}\n.markdown .markdown-content[data-v-743cb2fb] {\n  flex: 1;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  overflow: hidden;\n  padding-bottom: 0;\n}\n.markdown .markdown-content .markdown-editor[data-v-743cb2fb] {\n  flex: 1;\n  height: 100%;\n  position: relative;\n  margin: 0 !important;\n  overflow: hidden;\n  overflow-y: scroll;\n  display: flex;\n  justify-content: space-between;\n  background: #2d2d2d;\n}\n.markdown .markdown-content .markdown-editor[data-v-743cb2fb]::-webkit-scrollbar {\n  display: none;\n}\n.markdown .markdown-content .markdown-editor .index[data-v-743cb2fb] {\n  background: #272727;\n  min-height: 100%;\n  width: 36px;\n  line-height: 22px;\n  padding: 12px 0;\n}\n.markdown .markdown-content .markdown-editor .index li[data-v-743cb2fb] {\n  background: #272727;\n  color: #ccc;\n  font-size: 14px;\n  text-align: center;\n  font-family: Consolas;\n}\n.markdown .markdown-content .markdown-editor textarea[data-v-743cb2fb] {\n  width: 100%;\n  min-height: 100%;\n  outline: none;\n  border: 0;\n  background: #2d2d2d;\n  line-height: 22px;\n  caret-color: #ccc;\n  color: #669acc;\n  font-size: 14px;\n  font-family: Consolas;\n  resize: none;\n  padding: 12px 8px;\n  overflow: hidden;\n  white-space: nowrap;\n  overflow-x: auto;\n}\n.markdown .markdown-content .markdown-editor textarea[data-v-743cb2fb]::-moz-selection {\n  background: #999;\n  color: #0084ff;\n}\n.markdown .markdown-content .markdown-editor textarea[data-v-743cb2fb]::selection {\n  background: #999;\n  color: #0084ff;\n}\n.markdown .markdown-content .codemirror[data-v-743cb2fb] {\n  flex: 1;\n  width: 0;\n  height: 100%;\n  overflow: auto;\n}\n.markdown .markdown-content .markdown-preview[data-v-743cb2fb] {\n  flex: 1;\n  width: 0;\n  height: 100%;\n}\n.markdown ul.toc-anchor[data-v-743cb2fb] {\n  max-width: 260px;\n  min-width: 150px;\n  background-color: #f6f8fa;\n  border-left: 2px solid #dcdfe6;\n  overflow: auto;\n}\n.markdown ul.toc-anchor li.toc-anchor-item[data-v-743cb2fb] {\n  cursor: pointer;\n  padding: 6px 16px;\n  font-size: 12px;\n  line-height: 1;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.markdown ul.toc-anchor li.toc-anchor-item span[data-v-743cb2fb] {\n  color: #333;\n  opacity: 0.8;\n}\n.markdown ul.toc-anchor li.toc-anchor-item span.toc-link-2[data-v-743cb2fb] {\n  padding-left: 16px;\n}\n.markdown ul.toc-anchor li.toc-anchor-item span.toc-link-3[data-v-743cb2fb] {\n  padding-left: 32px;\n}\n.markdown ul.toc-anchor li.toc-anchor-item span.toc-link-4[data-v-743cb2fb] {\n  padding-left: 48px;\n}\n.markdown ul.toc-anchor li.toc-anchor-item span.toc-link-5[data-v-743cb2fb] {\n  padding-left: 64px;\n}\n.markdown ul.toc-anchor li.toc-anchor-item span.toc-link-action[data-v-743cb2fb] {\n  color: #2b85e4;\n  opacity: 1;\n}\n.markdown ul.toc-anchor li.toc-anchor-item[data-v-743cb2fb]:first-child {\n  padding-top: 16px;\n}\n.markdown ul.toc-anchor li.toc-anchor-item:hover span[data-v-743cb2fb] {\n  opacity: 1;\n}\n.insert-img-model[data-v-743cb2fb] {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 99999;\n  background: rgba(0, 0, 0, 0.3);\n  padding-top: 12%;\n  transition: all 0.3s;\n  opacity: 0;\n  display: none;\n}\n.insert-img-model .model-container[data-v-743cb2fb] {\n  background: #fff;\n  width: 480px;\n  margin: 0 auto;\n  border-radius: 4px;\n  transition: all 0.3s;\n  transform: scale(0);\n  transform-origin: center;\n}\n.insert-img-model .model-container .model-head[data-v-743cb2fb] {\n  line-height: 32px;\n  padding: 0 12px;\n  background: #f7f7f7;\n  border-radius: 4px 4px 0 0;\n  box-shadow: 0 1px 2px #d9d9d9;\n  display: flex;\n  justify-content: space-between;\n}\n.insert-img-model .model-container .model-head span[data-v-743cb2fb]:nth-of-type(2) {\n  font-size: 14px;\n  padding-left: 12px;\n  cursor: pointer;\n}\n.insert-img-model .model-container .model-head span[data-v-743cb2fb]:nth-of-type(2):hover {\n  color: #ed3f14;\n}\n.insert-img-model .model-container .model-content[data-v-743cb2fb] {\n  padding: 20px 12px;\n  padding-top: 0;\n  min-height: 180px;\n}\n.insert-img-model .model-container .model-content .insert-url[data-v-743cb2fb] {\n  padding: 42px 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.insert-img-model .model-container .model-content .insert-url input[data-v-743cb2fb] {\n  display: block;\n  border: 1px solid #ccc;\n  font-size: 14px;\n  padding: 4px 8px;\n  line-height: 24px;\n  color: #333;\n  background: #fff;\n  border-radius: 4px;\n  -ms-writing-mode: lr-tb;\n      writing-mode: horizontal-tb;\n  text-rendering: auto;\n  transition: box-shadow 2s;\n  flex: 1;\n}\n.insert-img-model .model-container .model-content .insert-url input[data-v-743cb2fb]:focus {\n  border-color: #1890ff;\n}\n.insert-img-model .model-container .model-content .insert-url input[data-v-743cb2fb]::-moz-placeholder {\n  color: #c1c1c1;\n}\n.insert-img-model .model-container .model-content .insert-url input[data-v-743cb2fb]:-ms-input-placeholder {\n  color: #c1c1c1;\n}\n.insert-img-model .model-container .model-content .insert-url input[data-v-743cb2fb]::placeholder {\n  color: #c1c1c1;\n}\n.insert-img-model .model-container .model-content .insert-url a[data-v-743cb2fb] {\n  display: block;\n  background: #1890ff;\n  color: #fff;\n  line-height: 32px;\n  height: 32px;\n  font-size: 13px;\n  padding: 0 12px;\n  border-radius: 3px;\n  margin-left: 20px;\n  border: 1px solid #d9d9d9;\n  transition: all 0.3s;\n}\n.insert-img-model .model-container .model-content .insert-url a[data-v-743cb2fb]:hover {\n  background: #0169af;\n}\n.insert-img-model .model-container .model-content .insert-local[data-v-743cb2fb] {\n  height: 120px;\n  border: 1px dashed #d9d9d9;\n  border-radius: 4px;\n  transition: all 0.3s;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  cursor: pointer;\n}\n.insert-img-model .model-container .model-content .insert-local span[data-v-743cb2fb] {\n  font-size: 40px;\n  color: #d9d9d9;\n  line-height: 50px;\n  transition: all 0.3s;\n}\n.insert-img-model .model-container .model-content .insert-local p[data-v-743cb2fb] {\n  font-size: 14px;\n  color: #262626;\n  transition: all 0.3s;\n}\n.insert-img-model .model-container .model-content .insert-local[data-v-743cb2fb]:hover {\n  border-color: #1890ff;\n}\n.insert-img-model .model-container .model-content .insert-local:hover span[data-v-743cb2fb],\n.insert-img-model .model-container .model-content .insert-local:hover p[data-v-743cb2fb] {\n  color: #1890ff;\n}\n.insert-img-model .model-container .model-content .insert-local input[data-v-743cb2fb] {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n}\n.insert-img-model .model-container .model-foot[data-v-743cb2fb] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 10px 12px;\n  display: none;\n}\n.insert-img-model .model-container .model-foot a[data-v-743cb2fb] {\n  display: block;\n  background: #f7f7f7;\n  color: #262626;\n  line-height: 26px;\n  height: 26px;\n  font-size: 13px;\n  padding: 0 12px;\n  border-radius: 3px;\n  margin-left: 12px;\n  border: 1px solid #d9d9d9;\n  transition: all 0.3s;\n}\n.insert-img-model .model-container .model-foot a[data-v-743cb2fb]:hover {\n  background: #d9d9d9;\n}\n.insert-img-model .model-container .model-foot a.ok[data-v-743cb2fb] {\n  background: #1890ff;\n  color: #fff;\n  border-color: #1890ff;\n}\n.insert-img-model .model-container .model-foot a.ok[data-v-743cb2fb]:hover {\n  background: #0169af;\n}\n.insert-img-model.active[data-v-743cb2fb] {\n  opacity: 1;\n  display: block;\n}\n.insert-img-model.active .model-container[data-v-743cb2fb] {\n  transform: scale(1);\n}\nul.shift[data-v-743cb2fb] {\n  padding: 6px 12px;\n  display: flex;\n  align-items: center;\n}\nul.shift span[data-v-743cb2fb] {\n  font-size: 12px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\nul.shift span.iconfont[data-v-743cb2fb] {\n  font-size: 14px;\n}\nul.shift label[data-v-743cb2fb] {\n  font-size: 12px;\n  padding-right: 10px;\n  position: relative;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\nul.shift input[type='radio'][data-v-743cb2fb],\nul.shift label[data-v-743cb2fb] {\n  transition: all 0.6s ease;\n  box-sizing: border-box;\n}\nul.shift input[type=\"radio\"] + label[data-v-743cb2fb]::before {\n  content: \"\\a0\";\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 4px;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  border: 1px solid #292d35;\n  padding: 2px;\n}\nul.shift input[type=\"radio\"]:checked + label[data-v-743cb2fb]::before {\n  background-color: #292d35;\n  background-clip: content-box;\n  padding: 2px;\n}\nul.shift input[type=\"radio\"][data-v-743cb2fb] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n}\nul.shift input[type=\"radio\"]:checked + label[data-v-743cb2fb] {\n  color: #292d35;\n}\n[data-v-743cb2fb] .markdown-preview {\n  flex: 1;\n  overflow: hidden;\n  overflow-y: scroll;\n  background: #fff;\n  padding: 20px 12px !important;\n  font-family: 'Tahoma For Number', 'Chinese Quote', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  /*基本样式*/\n}\n[data-v-743cb2fb] .markdown-preview * {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n[data-v-743cb2fb] .markdown-preview > div {\n  padding: 10px 12px !important;\n  background: #fff;\n}\n[data-v-743cb2fb] .markdown-preview > div::-webkit-scrollbar {\n  display: none;\n}\n[data-v-743cb2fb] .markdown-preview::-webkit-scrollbar {\n  display: none;\n}\n[data-v-743cb2fb] .markdown-preview em {\n  font-style: oblique;\n}\n[data-v-743cb2fb] .markdown-preview ul {\n  list-style: none;\n  padding: 0 20px;\n}\n[data-v-743cb2fb] .markdown-preview ul li {\n  position: relative;\n}\n[data-v-743cb2fb] .markdown-preview ul li:after {\n  display: block;\n  content: \"\";\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  position: absolute;\n  z-index: 99;\n  top: 12px;\n  left: -16px;\n  background: #262626;\n}\n[data-v-743cb2fb] .markdown-preview ol,[data-v-743cb2fb] .markdown-preview ul {\n  margin: 10px 0;\n}\n[data-v-743cb2fb] .markdown-preview ol li,[data-v-743cb2fb] .markdown-preview ul li {\n  font-size: 14px !important;\n  color: #262626;\n  line-height: 22px !important;\n  padding: 4px 0;\n  padding-left: 6px;\n  min-height: 28px;\n}\n[data-v-743cb2fb] .markdown-preview ol li input[type=\"checkbox\"],[data-v-743cb2fb] .markdown-preview ul li input[type=\"checkbox\"] {\n  position: relative;\n  cursor: pointer;\n  overflow: visible;\n  position: absolute;\n  left: -14px;\n  top: 5px;\n}\n[data-v-743cb2fb] .markdown-preview ol li input[type=\"checkbox\"]:before,[data-v-743cb2fb] .markdown-preview ul li input[type=\"checkbox\"]:before {\n  font-family: \"iconfont\" !important;\n  color: #999;\n  display: block;\n  width: 18px;\n  height: 18px;\n  position: absolute;\n  content: \"\\E684\";\n  top: 0px;\n  left: -4px;\n  z-index: 999999;\n  background-position: center;\n  background: #fff;\n  font-size: 18px;\n  text-align: center;\n  line-height: 18px;\n}\n[data-v-743cb2fb] .markdown-preview ol li input[type=\"checkbox\"]:checked:before,[data-v-743cb2fb] .markdown-preview ul li input[type=\"checkbox\"]:checked:before {\n  content: \"\\E683\";\n}\n[data-v-743cb2fb] .markdown-preview ol.toc-anchor,[data-v-743cb2fb] .markdown-preview ul.toc-anchor {\n  margin: 0;\n  padding: 0;\n}\n[data-v-743cb2fb] .markdown-preview ol.toc-anchor li.toc-anchor-item,[data-v-743cb2fb] .markdown-preview ul.toc-anchor li.toc-anchor-item {\n  cursor: pointer;\n  padding: 4px 0;\n  font-size: 13px !important;\n  line-height: 16px !important;\n  min-height: auto;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n[data-v-743cb2fb] .markdown-preview ol.toc-anchor li.toc-anchor-item span,[data-v-743cb2fb] .markdown-preview ul.toc-anchor li.toc-anchor-item span {\n  color: #2b85e4;\n  opacity: 0.9;\n}\n[data-v-743cb2fb] .markdown-preview ol.toc-anchor li.toc-anchor-item span.toc-link-2,[data-v-743cb2fb] .markdown-preview ul.toc-anchor li.toc-anchor-item span.toc-link-2 {\n  padding-left: 16px;\n}\n[data-v-743cb2fb] .markdown-preview ol.toc-anchor li.toc-anchor-item span.toc-link-3,[data-v-743cb2fb] .markdown-preview ul.toc-anchor li.toc-anchor-item span.toc-link-3 {\n  padding-left: 32px;\n}\n[data-v-743cb2fb] .markdown-preview ol.toc-anchor li.toc-anchor-item span.toc-link-4,[data-v-743cb2fb] .markdown-preview ul.toc-anchor li.toc-anchor-item span.toc-link-4 {\n  padding-left: 48px;\n}\n[data-v-743cb2fb] .markdown-preview ol.toc-anchor li.toc-anchor-item span.toc-link-5,[data-v-743cb2fb] .markdown-preview ul.toc-anchor li.toc-anchor-item span.toc-link-5 {\n  padding-left: 64px;\n}\n[data-v-743cb2fb] .markdown-preview ol.toc-anchor li.toc-anchor-item:last-child,[data-v-743cb2fb] .markdown-preview ul.toc-anchor li.toc-anchor-item:last-child {\n  padding-bottom: 6px;\n}\n[data-v-743cb2fb] .markdown-preview ol.toc-anchor li.toc-anchor-item:hover span,[data-v-743cb2fb] .markdown-preview ul.toc-anchor li.toc-anchor-item:hover span {\n  opacity: 1;\n}\n[data-v-743cb2fb] .markdown-preview ol {\n  list-style-type: decimal;\n  padding-left: 20px;\n}\n[data-v-743cb2fb] .markdown-preview ol li {\n  list-style: decimal;\n}\n[data-v-743cb2fb] .markdown-preview hr {\n  color: #d9d9d9;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #d9d9d9;\n  margin: 20px 0;\n  padding: 0;\n}\n[data-v-743cb2fb] .markdown-preview del,[data-v-743cb2fb] .markdown-preview em,[data-v-743cb2fb] .markdown-preview strong {\n  display: inline-block;\n}\n[data-v-743cb2fb] .markdown-preview blockquote {\n  position: relative;\n  background: #f7f7f7;\n  padding: 6px 12px;\n  border-left: 5px solid #d9d9d9;\n  border-radius: 2px;\n  margin: 8px 0;\n}\n[data-v-743cb2fb] .markdown-preview h1,[data-v-743cb2fb] .markdown-preview h2,[data-v-743cb2fb] .markdown-preview h3,[data-v-743cb2fb] .markdown-preview h4,[data-v-743cb2fb] .markdown-preview h5,[data-v-743cb2fb] .markdown-preview h6 {\n  color: #262626;\n}\n[data-v-743cb2fb] .markdown-preview h1 {\n  font-size: 28px;\n  border-bottom: 1px solid #d9d9d9;\n}\n[data-v-743cb2fb] .markdown-preview h2 {\n  font-size: 24px;\n}\n[data-v-743cb2fb] .markdown-preview h3 {\n  font-size: 18px;\n}\n[data-v-743cb2fb] .markdown-preview h4 {\n  font-size: 16px;\n}\n[data-v-743cb2fb] .markdown-preview h5 {\n  font-size: 14px;\n}\n[data-v-743cb2fb] .markdown-preview h6 {\n  font-size: 12px;\n}\n[data-v-743cb2fb] .markdown-preview h1,[data-v-743cb2fb] .markdown-preview h2,[data-v-743cb2fb] .markdown-preview h3,[data-v-743cb2fb] .markdown-preview h4,[data-v-743cb2fb] .markdown-preview h5,[data-v-743cb2fb] .markdown-preview h6 {\n  padding: 8px 0;\n  font-weight: 600;\n}\n[data-v-743cb2fb] .markdown-preview p {\n  font-size: 14px !important;\n  color: #262626;\n  margin-bottom: 8px;\n  line-height: 22px;\n}\n[data-v-743cb2fb] .markdown-preview img {\n  display: block;\n  max-width: 100%;\n  margin: 20px 0;\n  cursor: pointer;\n}\n[data-v-743cb2fb] .markdown-preview table {\n  width: 100%;\n  border: 1px solid #d9d9d9;\n  border-bottom: 0;\n  background: #fff;\n  border-spacing: 0;\n  border-collapse: collapse;\n  margin: 20px 0;\n}\n[data-v-743cb2fb] .markdown-preview table tr {\n  transition: background 0.1s;\n}\n[data-v-743cb2fb] .markdown-preview table tr td,[data-v-743cb2fb] .markdown-preview table tr th {\n  padding: 4px 8px;\n  font-size: 14px;\n  line-height: 24px;\n  color: #333;\n  border-bottom: 1px solid #d9d9d9;\n  cursor: pointer;\n}\n[data-v-743cb2fb] .markdown-preview table th {\n  background: #f8f8f9;\n  text-align: left;\n  font-weight: bold;\n}\n[data-v-743cb2fb] .markdown-preview table tr:nth-of-type(even) td {\n  background: #fafafa;\n}\n[data-v-743cb2fb] .markdown-preview table tr:hover td {\n  background: #f5f5f5;\n}\n[data-v-743cb2fb] .markdown-preview table td,[data-v-743cb2fb] .markdown-preview table th {\n  border: 1px solid #d9d9d9;\n  word-break: break-all;\n}\n[data-v-743cb2fb] .markdown-preview input[type=\"checkbox\"] {\n  display: inline-block;\n  border-radius: 0;\n  margin-right: 8px;\n}\n[data-v-743cb2fb] .markdown-preview a {\n  text-decoration: none;\n  color: #1890ff;\n  font-size: 14px;\n  line-height: 22px;\n}\n[data-v-743cb2fb] .markdown-preview .code-block {\n  position: relative;\n  padding: 0 !important;\n}\n[data-v-743cb2fb] .markdown-preview .code-block .copy-code {\n  position: absolute;\n  z-index: 999;\n  top: 5px;\n  right: 10px;\n  font-size: 12px;\n  color: #d9d9d9;\n  line-height: 20px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: all 0.3s;\n  opacity: 0;\n}\n[data-v-743cb2fb] .markdown-preview .code-block .copy-code:hover {\n  color: #1890ff;\n}\n[data-v-743cb2fb] .markdown-preview .code-block:hover .copy-code {\n  opacity: 1;\n}\n.preview-img[data-v-743cb2fb] {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  z-index: 99999999;\n  left: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: none;\n  opacity: 0;\n  transition: opacity 0.3s 0.1s;\n  justify-content: center;\n  align-items: center;\n}\n.preview-img .close[data-v-743cb2fb] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  color: #fff;\n  padding: 10px;\n  font-size: 20px;\n  cursor: pointer;\n}\n.preview-img img[data-v-743cb2fb] {\n  display: block;\n}\n.preview-img img.vertical[data-v-743cb2fb] {\n  height: 80%;\n  width: auto;\n}\n.preview-img img.horizontal[data-v-743cb2fb] {\n  width: 80%;\n  height: auto;\n}\n.preview-img.active[data-v-743cb2fb] {\n  display: flex;\n  opacity: 1;\n}\n", ""]);
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./resources/assets/js/components/MDEditor/assets/js/codemirror/styles/codemirror.css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./resources/assets/js/components/MDEditor/assets/js/codemirror/styles/codemirror.css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* BASICS */\n\n.CodeMirror {\n    height: 100%;\n    color: black;\n    direction: ltr;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n    padding: 4px 0;\n}\n\n.CodeMirror pre.CodeMirror-line,\n.CodeMirror pre.CodeMirror-line-like {\n    padding: 0 4px;\n    padding-left: 8px;\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n    background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n    border-right: 1px solid #ddd;\n    background-color: #f7f7f7;\n    white-space: nowrap;\n}\n\n.CodeMirror-linenumbers {\n}\n\n.CodeMirror-linenumber {\n    padding: 0 5px!important;\n    min-width: 20px;\n    text-align: right;\n    color: #999;\n    white-space: nowrap;\n}\n\n.CodeMirror-guttermarker {\n    color: black;\n}\n\n.CodeMirror-guttermarker-subtle {\n    color: #999;\n}\n\n/* CURSOR */\n\n.CodeMirror-cursor {\n    border-left: 1px solid black;\n    border-right: none;\n    width: 0;\n}\n\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n    border-left: 1px solid silver;\n}\n\n.cm-fat-cursor .CodeMirror-cursor {\n    width: auto;\n    border: 0 !important;\n    background: #7e7;\n}\n\n.cm-fat-cursor div.CodeMirror-cursors {\n    z-index: 1;\n}\n\n.cm-fat-cursor-mark {\n    background-color: rgba(20, 255, 20, 0.5);\n    -webkit-animation: blink 1.06s steps(1) infinite;\n    animation: blink 1.06s steps(1) infinite;\n}\n\n.cm-animate-fat-cursor {\n    width: auto;\n    border: 0;\n    -webkit-animation: blink 1.06s steps(1) infinite;\n    animation: blink 1.06s steps(1) infinite;\n    background-color: #7e7;\n}\n\n@-webkit-keyframes blink {\n    0% {\n    }\n    50% {\n        background-color: transparent;\n    }\n    100% {\n    }\n}\n\n@keyframes blink {\n    0% {\n    }\n    50% {\n        background-color: transparent;\n    }\n    100% {\n    }\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\n.CodeMirror-overwrite .CodeMirror-cursor {\n}\n\n.cm-tab {\n    display: inline-block;\n    text-decoration: inherit;\n}\n\n.CodeMirror-rulers {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: -50px;\n    bottom: 0;\n    overflow: hidden;\n}\n\n.CodeMirror-ruler {\n    border-left: 1px solid #ccc;\n    top: 0;\n    bottom: 0;\n    position: absolute;\n}\n\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the src. You probably shouldn't touch them. */\n\n.CodeMirror {\n    position: relative;\n    overflow: hidden;\n    background: white;\n}\n\n.CodeMirror-scroll {\n    overflow: scroll !important; /* Things will break if this is overridden */\n    /* 30px is the magic margin used to hide the element's real scrollbars */\n    /* See overflow: hidden in .Index */\n    margin-bottom: -30px;\n    margin-right: -30px;\n    padding-bottom: 30px;\n    height: 100%;\n    outline: none; /* Prevent dragging from highlighting the element */\n    position: relative;\n}\n\n.CodeMirror-sizer {\n    position: relative;\n    border-right: 30px solid transparent;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n    position: absolute;\n    z-index: 6;\n    display: none;\n}\n\n.CodeMirror-vscrollbar {\n    right: 0;\n    top: 0;\n    overflow-x: hidden;\n    overflow-y: scroll;\n}\n\n.CodeMirror-hscrollbar {\n    bottom: 0;\n    left: 0;\n    overflow-y: hidden;\n    overflow-x: scroll;\n}\n\n.CodeMirror-scrollbar-filler {\n    right: 0;\n    bottom: 0;\n}\n\n.CodeMirror-gutter-filler {\n    left: 0;\n    bottom: 0;\n}\n\n.CodeMirror-gutters {\n    position: absolute;\n    left: 0;\n    top: 0;\n    min-height: 100%;\n    z-index: 3;\n}\n\n.CodeMirror-gutter {\n    white-space: normal;\n    height: 100%;\n    display: inline-block;\n    vertical-align: top;\n    margin-bottom: -30px;\n}\n\n.CodeMirror-gutter-wrapper {\n    position: absolute;\n    z-index: 4;\n    background: none !important;\n    border: none !important;\n}\n\n.CodeMirror-gutter-background {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    z-index: 4;\n}\n\n.CodeMirror-gutter-elt {\n    position: absolute;\n    cursor: default;\n    z-index: 4;\n}\n\n.CodeMirror-gutter-wrapper ::-moz-selection {\n    background-color: transparent\n}\n\n.CodeMirror-gutter-wrapper ::selection {\n    background-color: transparent\n}\n\n.CodeMirror-gutter-wrapper ::-moz-selection {\n    background-color: transparent\n}\n\n.CodeMirror-lines {\n    cursor: text;\n    min-height: 1px; /* prevents collapsing before first draw */\n}\n\n.CodeMirror pre.CodeMirror-line,\n.CodeMirror pre.CodeMirror-line-like {\n    /* Reset some styles that the rest of the page might have set */\n    border-radius: 0;\n    border-width: 0;\n    background: transparent;\n    font-family: inherit;\n    font-size: inherit;\n    margin: 0;\n    white-space: pre;\n    word-wrap: normal;\n    line-height: inherit;\n    color: inherit;\n    z-index: 2;\n    position: relative;\n    overflow: visible;\n    -webkit-tap-highlight-color: transparent;\n    font-variant-ligatures: contextual;\n}\n\n.CodeMirror-wrap pre.CodeMirror-line,\n.CodeMirror-wrap pre.CodeMirror-line-like {\n    word-wrap: break-word;\n    white-space: pre-wrap;\n    word-break: normal;\n}\n\n.CodeMirror-linebackground {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: 0;\n}\n\n.CodeMirror-linewidget {\n    position: relative;\n    z-index: 2;\n    padding: 0.1px; /* Force widget margins to stay inside of the container */\n}\n\n.CodeMirror-widget {\n}\n\n.CodeMirror-rtl pre {\n    direction: rtl;\n}\n\n.CodeMirror-code {\n    outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n    box-sizing: content-box;\n}\n\n.CodeMirror-measure {\n    position: absolute;\n    width: 100%;\n    height: 0;\n    overflow: hidden;\n    visibility: hidden;\n}\n\n.CodeMirror-cursor {\n    position: absolute;\n    pointer-events: none;\n}\n\n.CodeMirror-measure pre {\n    position: static;\n}\n\ndiv.CodeMirror-cursors {\n    visibility: hidden;\n    position: relative;\n    z-index: 3;\n}\n\ndiv.CodeMirror-dragcursors {\n    visibility: visible;\n}\n\n.CodeMirror-focused div.CodeMirror-cursors {\n    visibility: visible;\n}\n\n.CodeMirror-selected {\n    background: #d9d9d9;\n}\n\n.CodeMirror-focused .CodeMirror-selected {\n    background: #d7d4f0;\n}\n\n.CodeMirror-crosshair {\n    cursor: crosshair;\n}\n\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection {\n    background: #d7d4f0;\n}\n\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection {\n    background: #d7d4f0;\n}\n\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection {\n    background: #d7d4f0;\n}\n\n.cm-searching {\n    background-color: #ffa;\n    background-color: rgba(255, 255, 0, .4);\n}\n\n/* Used to force a border model for a node */\n.cm-force-border {\n    padding-right: .1px;\n}\n\n@media print {\n    /* Hide the cursor when printing */\n    .CodeMirror div.CodeMirror-cursors {\n        visibility: hidden;\n    }\n}\n\n/* See issue #2901 */\n.cm-tab-wrap-hack:after {\n    content: '';\n}\n\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext {\n    background: none;\n}\n\n\n.cm-negative {\n    color: #d44;\n}\n\n.cm-positive {\n    color: #292;\n}\n\n.cm-header, .cm-strong {\n    font-weight: bold;\n}\n\n.cm-em {\n    font-style: italic;\n}\n\n\n.cm-strikethrough {\n    text-decoration: line-through;\n}\n\n.cm-invalidchar {\n    color: #f00;\n}\n\n.CodeMirror-composing {\n    border-bottom: 2px solid;\n}\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {\n    color: #0b0;\n}\n\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {\n    color: #a22;\n}\n\n.CodeMirror-matchingtag {\n    background: rgba(255, 150, 0, .3);\n}\n\n.CodeMirror-activeline-background {\n    background: #e8f2ff;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default.CodeMirror,\n.cm-s-default .CodeMirror-gutters {\n    background-color: #282a36 !important;\n    color: #f8f8f2 !important;\n    border: none;\n    font-family: Menlo, Consolas, \"Courier New\", Courier, FreeMono, monospace !important;\n\n}\n\n.cm-s-default * {\n    line-height: 1.6 !important;\n    font-size: 14px;\n    font-family: Menlo, Consolas, \"Courier New\", Courier, FreeMono, monospace !important;\n    color: #ccc;\n}\n\n.cm-s-default .CodeMirror-gutters {\n    color: #282a36;\n}\n\n.cm-s-default .CodeMirror-cursor {\n    border-left: solid thin #f8f8f0;\n}\n\n.cm-s-default .CodeMirror-selected {\n    background: rgba(255, 255, 255, 0.10);\n}\n\n.cm-s-default .CodeMirror-line::-moz-selection, .cm-s-default .CodeMirror-line > span::-moz-selection, .cm-s-default .CodeMirror-line > span > span::-moz-selection {\n    background: rgba(255, 255, 255, 0.10);\n}\n\n.cm-s-default .CodeMirror-line::selection,\n.cm-s-default .CodeMirror-line > span::selection,\n.cm-s-default .CodeMirror-line > span > span::selection {\n    background: rgba(255, 255, 255, 0.10);\n}\n\n.cm-s-default .CodeMirror-line::-moz-selection,\n.cm-s-default .CodeMirror-line > span::-moz-selection,\n.cm-s-default .CodeMirror-line > span > span::-moz-selection {\n    background: rgba(255, 255, 255, 0.10);\n}\n\n.cm-s-default span.cm-comment {\n    color: #999;\n}\n\n.cm-s-default span.cm-string,\n.cm-s-default span.cm-string-2 {\n    color: #ce9178;\n}\n\n.cm-s-default span.cm-number {\n    color: #bd93f9;\n}\n\n.cm-s-default span.cm-variable {\n    color: #61afef;\n}\n\n.cm-s-default span.cm-variable-2 {\n    color: #61afef;\n}\n\n.cm-s-default span.cm-def {\n    color: #e0e2e4;\n}\n\n.cm-s-default span.cm-operator {\n    color: #e0e2e4;\n}\n\n.cm-s-default span.cm-keyword {\n    color: #c678dd;\n}\n\n.cm-s-default span.cm-atom {\n    color: #bd93f9;\n}\n\n.cm-s-default span.cm-meta {\n    color: #f8f8f2;\n}\n\n.cm-s-default span.cm-tag {\n    color: #569cd6;\n}\n\n.cm-s-default span.cm-attribute {\n    color: #9cdcfe;\n}\n\n.cm-s-default span.cm-qualifier {\n    color: #9cdcfe;\n}\n\n.cm-s-default span.cm-property {\n    color: #dcdcaa;\n}\n\n.cm-s-default span.cm-builtin {\n    color: #50fa7b;\n}\n\n.cm-s-default span.cm-variable-3,\n.cm-s-default span.cm-type {\n    color: #ffb86c;\n}\n\n.cm-s-default .CodeMirror-activeline-background {\n    background: rgba(255, 255, 255, 0.1);\n}\n\n.cm-s-default .CodeMirror-matchingbracket {\n    text-decoration: underline;\n    color: white !important;\n}\n\n.cm-s-default .cm-header {\n    color: #fff;\n}\n\n.cm-s-default .CodeMirror-gutter {\n    background: #22252b;\n    padding-right: 2px;\n}\n\n.cm-link {\n    text-decoration: underline;\n    color: #569cd6;\n}\n.cm-url{\n    color: #9cdcfe!important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/index.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/index.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/index.vue?vue&type=style&index=0&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/index.vue?vue&type=style&index=1&id=c72f0984&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/index.vue?vue&type=style&index=1&id=c72f0984&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_c72f0984_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=1&id=c72f0984&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/index.vue?vue&type=style&index=1&id=c72f0984&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_c72f0984_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_c72f0984_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-18[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-18[0].rules[0].use[2]!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/components/pro/index.vue?vue&type=style&index=0&id=743cb2fb&scoped=true&lang=less&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-18[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-18[0].rules[0].use[2]!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/components/pro/index.vue?vue&type=style&index=0&id=743cb2fb&scoped=true&lang=less& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_18_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_18_0_rules_0_use_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_743cb2fb_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-18[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-18[0].rules[0].use[2]!../../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=743cb2fb&scoped=true&lang=less& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-18[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-18[0].rules[0].use[2]!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/components/pro/index.vue?vue&type=style&index=0&id=743cb2fb&scoped=true&lang=less&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_18_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_18_0_rules_0_use_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_743cb2fb_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_18_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_18_0_rules_0_use_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_743cb2fb_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/assets/js/components/MDEditor/assets/js/codemirror/styles/codemirror.css":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/assets/js/codemirror/styles/codemirror.css ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_codemirror_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./codemirror.css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./resources/assets/js/components/MDEditor/assets/js/codemirror/styles/codemirror.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_codemirror_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_codemirror_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/assets/js/components/ImgUpload.vue":
/*!******************************************************!*\
  !*** ./resources/assets/js/components/ImgUpload.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ImgUpload_vue_vue_type_template_id_98687d06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImgUpload.vue?vue&type=template&id=98687d06& */ "./resources/assets/js/components/ImgUpload.vue?vue&type=template&id=98687d06&");
/* harmony import */ var _ImgUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImgUpload.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/ImgUpload.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ImgUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImgUpload_vue_vue_type_template_id_98687d06___WEBPACK_IMPORTED_MODULE_0__.render,
  _ImgUpload_vue_vue_type_template_id_98687d06___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/ImgUpload.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/MDEditor/components/pro/index.vue":
/*!**************************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/components/pro/index.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_743cb2fb_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=743cb2fb&scoped=true&lang=html& */ "./resources/assets/js/components/MDEditor/components/pro/index.vue?vue&type=template&id=743cb2fb&scoped=true&lang=html&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/MDEditor/components/pro/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_743cb2fb_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=743cb2fb&scoped=true&lang=less& */ "./resources/assets/js/components/MDEditor/components/pro/index.vue?vue&type=style&index=0&id=743cb2fb&scoped=true&lang=less&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_743cb2fb_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_743cb2fb_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "743cb2fb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/MDEditor/components/pro/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/MDEditor/index.vue":
/*!***********************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/index.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_c72f0984_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=c72f0984&scoped=true& */ "./resources/assets/js/components/MDEditor/index.vue?vue&type=template&id=c72f0984&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/MDEditor/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "./resources/assets/js/components/MDEditor/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _index_vue_vue_type_style_index_1_id_c72f0984_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=1&id=c72f0984&lang=scss&scoped=true& */ "./resources/assets/js/components/MDEditor/index.vue?vue&type=style&index=1&id=c72f0984&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_c72f0984_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_c72f0984_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "c72f0984",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/MDEditor/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/ImgUpload.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/components/ImgUpload.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImgUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ImgUpload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/ImgUpload.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImgUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/MDEditor/components/pro/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/components/pro/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/components/pro/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/MDEditor/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/MDEditor/index.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/index.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./resources/assets/js/components/MDEditor/index.vue?vue&type=style&index=1&id=c72f0984&lang=scss&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/index.vue?vue&type=style&index=1&id=c72f0984&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_c72f0984_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=1&id=c72f0984&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/index.vue?vue&type=style&index=1&id=c72f0984&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/assets/js/components/MDEditor/components/pro/index.vue?vue&type=style&index=0&id=743cb2fb&scoped=true&lang=less&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/components/pro/index.vue?vue&type=style&index=0&id=743cb2fb&scoped=true&lang=less& ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_18_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_18_0_rules_0_use_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_743cb2fb_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-18[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-18[0].rules[0].use[2]!../../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=743cb2fb&scoped=true&lang=less& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-18[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-18[0].rules[0].use[2]!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/components/pro/index.vue?vue&type=style&index=0&id=743cb2fb&scoped=true&lang=less&");


/***/ }),

/***/ "./resources/assets/js/components/ImgUpload.vue?vue&type=template&id=98687d06&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/components/ImgUpload.vue?vue&type=template&id=98687d06& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImgUpload_vue_vue_type_template_id_98687d06___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImgUpload_vue_vue_type_template_id_98687d06___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImgUpload_vue_vue_type_template_id_98687d06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ImgUpload.vue?vue&type=template&id=98687d06& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/ImgUpload.vue?vue&type=template&id=98687d06&");


/***/ }),

/***/ "./resources/assets/js/components/MDEditor/components/pro/index.vue?vue&type=template&id=743cb2fb&scoped=true&lang=html&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/components/pro/index.vue?vue&type=template&id=743cb2fb&scoped=true&lang=html& ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_743cb2fb_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_743cb2fb_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_743cb2fb_scoped_true_lang_html___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=743cb2fb&scoped=true&lang=html& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/components/pro/index.vue?vue&type=template&id=743cb2fb&scoped=true&lang=html&");


/***/ }),

/***/ "./resources/assets/js/components/MDEditor/index.vue?vue&type=template&id=c72f0984&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/assets/js/components/MDEditor/index.vue?vue&type=template&id=c72f0984&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c72f0984_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c72f0984_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c72f0984_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=c72f0984&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/index.vue?vue&type=template&id=c72f0984&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/ImgUpload.vue?vue&type=template&id=98687d06&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/ImgUpload.vue?vue&type=template&id=98687d06& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "common-img-update" },
    [
      _vm._l(_vm.uploadList, function (item) {
        return _vm.type !== "callback"
          ? _c(
              "div",
              { staticClass: "imgcomp-upload-list" },
              [
                item.status === "finished"
                  ? [
                      _c("div", {
                        staticClass: "imgcomp-upload-img",
                        style: {
                          "background-image":
                            "url(" + _vm.__thumb(item.thumb) + ")",
                        },
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "imgcomp-upload-list-cover" },
                        [
                          _c("Icon", {
                            attrs: { type: "ios-eye-outline" },
                            nativeOn: {
                              click: function ($event) {
                                return _vm.handleView(item)
                              },
                            },
                          }),
                          _vm._v(" "),
                          _c("Icon", {
                            attrs: { type: "ios-trash-outline" },
                            nativeOn: {
                              click: function ($event) {
                                return _vm.handleRemove(item)
                              },
                            },
                          }),
                        ],
                        1
                      ),
                    ]
                  : [
                      item.showProgress
                        ? _c("Progress", {
                            attrs: {
                              percent: item.percentage,
                              "hide-info": "",
                            },
                          })
                        : _vm._e(),
                    ],
              ],
              2
            )
          : _vm._e()
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "add-box",
          class: { "callback-add-box": _vm.type === "callback" },
        },
        [
          _c(
            "div",
            { staticClass: "add-box-icon" },
            [_c("Icon", { attrs: { type: "md-add", size: "32" } })],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "add-box-upload" }, [
            _c(
              "div",
              { staticClass: "add-box-item", on: { click: _vm.browsePicture } },
              [
                _c("span", [
                  _vm._v(_vm._s(_vm.$L("浏览"))),
                  _vm.type === "callback"
                    ? _c("em", [_vm._v(_vm._s(_vm.$L("图片")))])
                    : _vm._e(),
                ]),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "add-box-item" },
              [
                _c(
                  "Upload",
                  {
                    ref: "upload",
                    attrs: {
                      name: "image",
                      accept: "image/*",
                      action: _vm.actionUrl,
                      headers: _vm.uploadHeaders,
                      data: _vm.uploadParams,
                      "show-upload-list": false,
                      "max-size": _vm.maxSize,
                      format: ["jpg", "jpeg", "gif", "png"],
                      "default-file-list": _vm.defaultList,
                      "on-progress": _vm.handleProgress,
                      "on-success": _vm.handleSuccess,
                      "on-error": _vm.handleError,
                      "on-format-error": _vm.handleFormatError,
                      "on-exceeded-size": _vm.handleMaxSize,
                      "before-upload": _vm.handleBeforeUpload,
                      multiple: _vm.multiple,
                    },
                  },
                  [
                    _c("span", [
                      _vm._v(_vm._s(_vm.$L("上传"))),
                      _vm.type === "callback"
                        ? _c("em", [_vm._v(_vm._s(_vm.$L("图片")))])
                        : _vm._e(),
                    ]),
                  ]
                ),
              ],
              1
            ),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "Modal",
        {
          staticClass: "img-upload-modal",
          attrs: { title: _vm.$L("浏览图片空间"), width: "710" },
          model: {
            value: _vm.browseVisible,
            callback: function ($$v) {
              _vm.browseVisible = $$v
            },
            expression: "browseVisible",
          },
        },
        [
          _vm.isLoading
            ? _c("div", { staticClass: "browse-load" }, [
                _vm._v(_vm._s(_vm.$L("加载中..."))),
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            {
              ref: "browselistbox",
              staticClass: "browse-list",
              class: _vm.httpType === "input" ? "browse-list-disabled" : "",
            },
            [
              _vm.browseList.length <= 0
                ? _c("div", [_vm._v(_vm._s(_vm.$L("无内容")))])
                : _vm._l(_vm.browseList, function (item) {
                    return _c(
                      "div",
                      {
                        staticClass: "browse-item",
                        on: {
                          click: function ($event) {
                            return _vm.browseItem(item)
                          },
                        },
                      },
                      [
                        item.active
                          ? _c("Icon", {
                              staticClass: "browse-icon",
                              attrs: { type: "ios-checkmark-circle" },
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        _c("div", {
                          staticClass: "browse-img",
                          style: {
                            "background-image": "url(" + item.thumb + ")",
                          },
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "browse-title" }, [
                          _vm._v(_vm._s(item.title)),
                        ]),
                      ],
                      1
                    )
                  }),
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "img-upload-foot",
              attrs: { slot: "footer" },
              slot: "footer",
            },
            [
              _vm.type !== "callback" && _vm.http && _vm.httpType === ""
                ? _c(
                    "div",
                    {
                      staticClass: "img-upload-foot-input",
                      on: {
                        click: function ($event) {
                          _vm.httpType = "input"
                        },
                      },
                    },
                    [
                      _c("Icon", { attrs: { type: "ios-image", size: "22" } }),
                      _vm._v(" "),
                      _c("div", { staticClass: "img-upload-foot-httptitle" }, [
                        _vm._v(_vm._s(_vm.$L("自定义图片地址"))),
                      ]),
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.type !== "callback" && _vm.http && _vm.httpType === "input"
                ? _c(
                    "div",
                    { staticClass: "img-upload-foot-input" },
                    [
                      _c(
                        "Input",
                        {
                          attrs: {
                            placeholder: _vm.$L("以 http:// 或 https:// 开头"),
                            search: "",
                            "enter-button": _vm.$L("确定"),
                          },
                          on: { "on-search": _vm.httpEnter },
                          model: {
                            value: _vm.httpValue,
                            callback: function ($$v) {
                              _vm.httpValue = $$v
                            },
                            expression: "httpValue",
                          },
                        },
                        [
                          _c(
                            "span",
                            {
                              staticStyle: { cursor: "pointer" },
                              attrs: { slot: "prepend" },
                              on: {
                                click: function ($event) {
                                  _vm.httpType = ""
                                },
                              },
                              slot: "prepend",
                            },
                            [_vm._v(_vm._s(_vm.$L("自定义地址")) + ": ")]
                          ),
                        ]
                      ),
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.httpType === ""
                ? _c(
                    "Button",
                    {
                      on: {
                        click: function ($event) {
                          _vm.browseVisible = false
                        },
                      },
                    },
                    [_vm._v(_vm._s(_vm.$L("关闭")))]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.httpType === ""
                ? _c(
                    "Button",
                    {
                      attrs: { type: "primary" },
                      on: {
                        click: function ($event) {
                          return _vm.handleCallback(true)
                        },
                      },
                    },
                    [_vm._v(_vm._s(_vm.$L("完成")))]
                  )
                : _vm._e(),
            ],
            1
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "Modal",
        {
          staticClass: "img-upload-modal",
          attrs: { title: _vm.$L("查看图片"), draggable: "" },
          model: {
            value: _vm.visible,
            callback: function ($$v) {
              _vm.visible = $$v
            },
            expression: "visible",
          },
        },
        [
          _c(
            "div",
            { staticStyle: { "max-height": "480px", overflow: "auto" } },
            [
              _c("a", { attrs: { href: _vm.imgVisible, target: "_blank" } }, [
                _vm.visible
                  ? _c("img", {
                      staticStyle: {
                        "max-width": "100%",
                        "max-height": "900px",
                        display: "block",
                        margin: "0 auto",
                      },
                      attrs: { src: _vm.imgVisible },
                    })
                  : _vm._e(),
              ]),
            ]
          ),
        ]
      ),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/components/pro/index.vue?vue&type=template&id=743cb2fb&scoped=true&lang=html&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/components/pro/index.vue?vue&type=template&id=743cb2fb&scoped=true&lang=html& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      ref: "markdown",
      class:
        "markdown " +
        (_vm.fullscreen ? "fullscreen" : "") +
        " " +
        (_vm.bordered ? "border" : ""),
      style: {
        width: _vm.width + (typeof _vm.width === "string" ? "" : "px"),
        height: _vm.height + (typeof _vm.height === "string" ? "" : "px"),
      },
    },
    [
      _c(
        "ul",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.preview,
              expression: "!preview",
            },
          ],
          staticClass: "markdown-toolbars",
        },
        [
          _c("li", [_vm._t("title")], 2),
          _vm._v(" "),
          _vm.tools.undo
            ? _c("li", { attrs: { name: _vm.$L("撤销") } }, [
                _c("span", {
                  staticClass: "iconfont icon-undo",
                  on: {
                    click: function ($event) {
                      return _vm.editor.undo()
                    },
                  },
                }),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tools.redo
            ? _c(
                "li",
                { attrs: { name: _vm.$L("重做") }, on: { click: _vm.redo } },
                [_c("span", { staticClass: "iconfont icon-redo" })]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.tools.strong
            ? _c("li", { attrs: { name: _vm.$L("粗体") } }, [
                _c("span", {
                  staticClass: "iconfont icon-bold",
                  on: { click: _vm.insertStrong },
                }),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tools.italic
            ? _c("li", { attrs: { name: _vm.$L("斜体") } }, [
                _c("span", {
                  staticClass: "iconfont icon-italic",
                  on: { click: _vm.insertItalic },
                }),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tools.overline
            ? _c("li", { attrs: { name: _vm.$L("删除线") } }, [
                _c("span", {
                  staticClass: "iconfont icon-overline",
                  on: { click: _vm.insertOverline },
                }),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tools.overline
            ? _c("li", { attrs: { name: _vm.$L("下划线") } }, [
                _c("span", {
                  staticClass: "iconfont icon-under-line",
                  on: { click: _vm.insertUnderline },
                }),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tools.h1
            ? _c("li", { attrs: { name: _vm.$L("标题1") } }, [
                _c(
                  "span",
                  {
                    staticStyle: { "font-size": "16px" },
                    on: {
                      click: function ($event) {
                        return _vm.insertTitle(1)
                      },
                    },
                  },
                  [_vm._v("h1")]
                ),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tools.h2
            ? _c("li", { attrs: { name: _vm.$L("标题2") } }, [
                _c(
                  "span",
                  {
                    staticStyle: { "font-size": "16px" },
                    on: {
                      click: function ($event) {
                        return _vm.insertTitle(2)
                      },
                    },
                  },
                  [_vm._v("h2")]
                ),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tools.h3
            ? _c("li", { attrs: { name: _vm.$L("标题3") } }, [
                _c(
                  "span",
                  {
                    staticStyle: { "font-size": "16px" },
                    on: {
                      click: function ($event) {
                        return _vm.insertTitle(3)
                      },
                    },
                  },
                  [_vm._v("h3")]
                ),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tools.h4
            ? _c("li", { attrs: { name: _vm.$L("标题4") } }, [
                _c(
                  "span",
                  {
                    staticStyle: { "font-size": "16px" },
                    on: {
                      click: function ($event) {
                        return _vm.insertTitle(4)
                      },
                    },
                  },
                  [_vm._v("h4")]
                ),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tools.h5
            ? _c("li", { attrs: { name: _vm.$L("标题5") } }, [
                _c(
                  "span",
                  {
                    staticStyle: { "font-size": "16px" },
                    on: {
                      click: function ($event) {
                        return _vm.insertTitle(5)
                      },
                    },
                  },
                  [_vm._v("h5")]
                ),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tools.h6
            ? _c("li", { attrs: { name: _vm.$L("标题6") } }, [
                _c(
                  "span",
                  {
                    staticStyle: { "font-size": "16px" },
                    on: {
                      click: function ($event) {
                        return _vm.insertTitle(6)
                      },
                    },
                  },
                  [_vm._v("h6")]
                ),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tools.hr
            ? _c("li", { attrs: { name: _vm.$L("分割线") } }, [
                _c("span", {
                  staticClass: "iconfont icon-horizontal",
                  on: { click: _vm.insertLine },
                }),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tools.quote
            ? _c("li", { attrs: { name: _vm.$L("引用") } }, [
                _c("span", {
                  staticClass: "iconfont icon-quote",
                  staticStyle: { "font-size": "16px" },
                  on: { click: _vm.insertQuote },
                }),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tools.ul
            ? _c("li", { attrs: { name: _vm.$L("无序列表") } }, [
                _c("span", {
                  staticClass: "iconfont icon-ul",
                  on: { click: _vm.insertUl },
                }),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tools.ol
            ? _c("li", { attrs: { name: _vm.$L("有序列表") } }, [
                _c("span", {
                  staticClass: "iconfont icon-ol",
                  on: { click: _vm.insertOl },
                }),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tools.code
            ? _c("li", { attrs: { name: _vm.$L("代码块") } }, [
                _c("span", {
                  staticClass: "iconfont icon-code",
                  on: { click: _vm.insertCode },
                }),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tools.notChecked
            ? _c("li", { attrs: { name: _vm.$L("未完成列表") } }, [
                _c("span", {
                  staticClass: "iconfont icon-checked-false",
                  on: { click: _vm.insertNotFinished },
                }),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tools.checked
            ? _c("li", { attrs: { name: _vm.$L("已完成列表") } }, [
                _c("span", {
                  staticClass: "iconfont icon-checked",
                  on: { click: _vm.insertFinished },
                }),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tools.link
            ? _c("li", { attrs: { name: _vm.$L("链接") } }, [
                _c("span", {
                  staticClass: "iconfont icon-link",
                  on: { click: _vm.insertLink },
                }),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tools.image
            ? _c("li", { attrs: { name: _vm.$L("图片") } }, [
                _c("span", {
                  staticClass: "iconfont icon-img",
                  on: { click: _vm.insertImage },
                }),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tools.uploadImage
            ? _c("li", { attrs: { name: _vm.$L("本地图片") } }, [
                _c("span", {
                  staticClass: "iconfont icon-upload-img",
                  on: { click: _vm.chooseImage },
                }),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tools.custom_image
            ? _c("li", { attrs: { name: _vm.$L("图片空间") } }, [
                _c("span", {
                  staticClass: "iconfont icon-img",
                  on: {
                    click: function ($event) {
                      return _vm.onCustom("image-browse")
                    },
                  },
                }),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tools.custom_uploadImage
            ? _c("li", { attrs: { name: _vm.$L("上传图片") } }, [
                _c("span", {
                  staticClass: "iconfont icon-upload-img",
                  on: {
                    click: function ($event) {
                      return _vm.onCustom("image-upload")
                    },
                  },
                }),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tools.custom_uploadFile
            ? _c("li", { attrs: { name: _vm.$L("上传文件") } }, [
                _c(
                  "span",
                  {
                    staticClass: "icon-svg",
                    on: {
                      click: function ($event) {
                        return _vm.onCustom("file-upload")
                      },
                    },
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "icon",
                        attrs: {
                          t: "1599285632421",
                          viewBox: "0 0 1024 1024",
                          version: "1.1",
                          xmlns: "http://www.w3.org/2000/svg",
                          "p-id": "45640",
                          width: "16",
                          height: "16",
                        },
                      },
                      [
                        _c("path", {
                          attrs: {
                            d: "M127.519 892.879v-763.34h655.448V514.69h63.612V81.831c0-8.783-7.12-15.903-15.903-15.903H79.81c-8.783 0-15.903 7.12-15.903 15.903v858.757c0 8.783 7.12 15.903 15.903 15.903h493.993v-63.612H127.519z",
                            fill: "#999999",
                            "p-id": "45641",
                          },
                        }),
                        _c("path", {
                          attrs: {
                            d: "M231.608 228.388h447.269V292H231.608zM231.608 384.409h447.269v63.612H231.608zM231.608 540.43h245.141v63.612H231.608zM231.608 696.451h245.141v63.612H231.608zM923.269 762.938L745.315 584.984c-3.545-3.545-8.34-5.074-12.966-4.596a15.931 15.931 0 0 0-9.848 4.616L544.586 762.918c-6.248 6.248-6.248 16.379 0 22.627l22.353 22.353c6.248 6.248 16.379 6.248 22.627 0l112.555-112.555v245.148c0 8.837 7.163 16 16 16h31.612c8.837 0 16-7.163 16-16V695.363l112.555 112.555c6.248 6.248 16.379 6.248 22.627 0l22.353-22.353c6.249-6.248 6.249-16.378 0.001-22.627z",
                            fill: "#999999",
                            "p-id": "45642",
                          },
                        }),
                      ]
                    ),
                  ]
                ),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tools.table
            ? _c("li", { attrs: { name: _vm.$L("表格") } }, [
                _c("span", {
                  staticClass: "iconfont icon-table",
                  on: { click: _vm.insertTable },
                }),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tools.theme
            ? _c(
                "li",
                {
                  staticClass: "shift-theme",
                  attrs: { name: _vm.$L("代码块主题") },
                },
                [
                  _c("div", [
                    _c("span", {
                      staticClass: "iconfont icon-theme",
                      on: {
                        click: function ($event) {
                          _vm.themeSlideDown = !_vm.themeSlideDown
                        },
                      },
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      {
                        class: { active: _vm.themeSlideDown },
                        on: {
                          mouseleave: function ($event) {
                            _vm.themeSlideDown = false
                          },
                        },
                      },
                      [
                        _c(
                          "li",
                          {
                            on: {
                              click: function ($event) {
                                return _vm.setThemes("light")
                              },
                            },
                          },
                          [_vm._v("Light")]
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          {
                            on: {
                              click: function ($event) {
                                return _vm.setThemes("dark")
                              },
                            },
                          },
                          [_vm._v("VS Code")]
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          {
                            on: {
                              click: function ($event) {
                                return _vm.setThemes("oneDark")
                              },
                            },
                          },
                          [_vm._v("Atom OneDark")]
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          {
                            on: {
                              click: function ($event) {
                                return _vm.setThemes("gitHub")
                              },
                            },
                          },
                          [_vm._v("GitHub")]
                        ),
                      ]
                    ),
                  ]),
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "li",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.tools.importmd,
                  expression: "tools.importmd",
                },
              ],
              staticClass: "import-file",
              attrs: { name: _vm.$L("导入文件") },
            },
            [
              _c("span", {
                staticClass: "iconfont icon-daoru",
                on: { click: _vm.importFile },
              }),
              _vm._v(" "),
              _c("input", {
                attrs: { type: "file", accept: "text/markdown" },
                on: {
                  change: function ($event) {
                    return _vm.importFile($event)
                  },
                },
              }),
            ]
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.tools.exportmd,
                  expression: "tools.exportmd",
                },
              ],
              attrs: { name: _vm.$L("保存到本地") },
            },
            [
              _c("span", {
                staticClass: "iconfont icon-download",
                on: { click: _vm.exportFile },
              }),
            ]
          ),
          _vm._v(" "),
          _vm.tools.split && _vm.split
            ? _c("li", { attrs: { name: _vm.$L("全屏编辑") } }, [
                _c("span", {
                  staticClass: "iconfont icon-md",
                  on: {
                    click: function ($event) {
                      _vm.split = false
                    },
                  },
                }),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tools.split && !_vm.split
            ? _c("li", { attrs: { name: _vm.$L("分屏显示") } }, [
                _c("span", {
                  staticClass: "iconfont icon-group",
                  on: {
                    click: function ($event) {
                      _vm.split = true
                    },
                  },
                }),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tools.preview
            ? _c("li", { attrs: { name: _vm.$L("预览") } }, [
                _c("span", {
                  staticClass: "iconfont icon-preview",
                  on: {
                    click: function ($event) {
                      _vm.preview = true
                    },
                  },
                }),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tools.clear
            ? _c(
                "li",
                {
                  attrs: { name: _vm.$L("清空") },
                  on: {
                    click: function ($event) {
                      _vm.value = ""
                    },
                  },
                },
                [_c("span", { staticClass: "iconfont icon-clear" })]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.tools.save
            ? _c(
                "li",
                {
                  attrs: { name: _vm.$L("保存") },
                  on: { click: _vm.handleSave },
                },
                [_c("span", { staticClass: "iconfont icon-save" })]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "li",
            {
              attrs: {
                name: _vm.$L(_vm.scrolling ? "同步滚动:开" : "同步滚动:关"),
              },
            },
            [
              _c("span", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.scrolling,
                    expression: "scrolling",
                  },
                ],
                staticClass: "iconfont icon-on",
                on: {
                  click: function ($event) {
                    _vm.scrolling = !_vm.scrolling
                  },
                },
              }),
              _vm._v(" "),
              _c("span", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.scrolling,
                    expression: "!scrolling",
                  },
                ],
                staticClass: "iconfont icon-off",
                on: {
                  click: function ($event) {
                    _vm.scrolling = !_vm.scrolling
                  },
                },
              }),
            ]
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              attrs: { name: _vm.$L("html转markdown") },
              on: {
                click: function ($event) {
                  return _vm.onCustom("html2md")
                },
              },
            },
            [
              _c(
                "span",
                {
                  staticStyle: {
                    width: "auto",
                    "font-size": "14px",
                    padding: "0 6px",
                  },
                },
                [_vm._v("HTML2MD")]
              ),
            ]
          ),
          _vm._v(" "),
          _c("li", { staticClass: "right" }, [
            _c("ul", [
              _c(
                "li",
                {
                  attrs: { name: _vm.$L("菜单") },
                  on: {
                    click: function ($event) {
                      _vm.tocTrigger = true
                    },
                  },
                },
                [
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.tocShow,
                          expression: "tocShow",
                        },
                      ],
                      staticClass: "icon-svg",
                      on: {
                        click: function ($event) {
                          _vm.tocShow = !_vm.tocShow
                        },
                      },
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "icon",
                          attrs: {
                            t: "1611551476626",
                            viewBox: "0 0 1024 1024",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            "p-id": "4615",
                            width: "22",
                            height: "22",
                          },
                        },
                        [
                          _c("path", {
                            attrs: {
                              d: "M370.1 371.5h-49.6c-3.1 0-5.7-2.5-5.7-5.7v-49.6c0-3.1 2.5-5.7 5.7-5.7h49.6c3.1 0 5.7 2.5 5.7 5.7v49.6c0 3.1-2.6 5.7-5.7 5.7z m333.5-7.6H460.5c-3.1 0-5.7-2.5-5.7-5.7v-34.5c0-3.1 2.5-5.7 5.7-5.7h243.2c3.1 0 5.7 2.5 5.7 5.7v34.5c-0.1 3.2-2.7 5.7-5.8 5.7zM370.1 712.4h-49.6c-3.1 0-5.7-2.5-5.7-5.7v-49.6c0-3.1 2.5-5.7 5.7-5.7h49.6c3.1 0 5.7 2.5 5.7 5.7v49.6c0 3.2-2.6 5.7-5.7 5.7z m333.5-7.5H460.5c-3.1 0-5.7-2.5-5.7-5.7v-34.5c0-3.1 2.5-5.7 5.7-5.7h243.2c3.1 0 5.7 2.5 5.7 5.7v34.5c-0.1 3.1-2.7 5.7-5.8 5.7zM370.1 542.5h-49.6c-3.1 0-5.7-2.5-5.7-5.7v-49.6c0-3.1 2.5-5.7 5.7-5.7h49.6c3.1 0 5.7 2.5 5.7 5.7v49.6c0 3.1-2.6 5.7-5.7 5.7z m333.5-7.6H460.5c-3.1 0-5.7-2.5-5.7-5.7v-34.5c0-3.1 2.5-5.7 5.7-5.7h243.2c3.1 0 5.7 2.5 5.7 5.7v34.5c-0.1 3.2-2.7 5.7-5.8 5.7z",
                              "p-id": "4616",
                              fill: "#1890ff",
                            },
                          }),
                          _c("path", {
                            attrs: {
                              d: "M847.1 560.4V250.1s0-24.7-14-46.4c-10.8-16.8-30-31.8-64.2-31.8h-261c-0.2 0-0.3 0-0.5 0.1H255s-78.1 0-78.1 78.1l0.1 213.4V774s0 24.7 13.9 46.3c10.8 16.8 30 31.8 64.2 31.8h261.1c0.2 0 0.3 0 0.5-0.1H769s78.1 0 78.1-78.1l-0.1-213.4 0.1-0.1z m-39 213.6c-1.3 38.5-38.9 39-38.9 39h-514c-1.3-0.1-2.5-0.2-3.8-0.3-5.4-1.1-15.7-4.1-23.9-11.7-9-9.7-11.2-22.3-11.7-26.1v-0.7l0.1-524.2c1.3-38.5 38.9-39 38.9-39h514c1.3 0.1 2.5 0.2 3.7 0.3 5.4 1.1 15.7 4.1 23.9 11.7 9 9.7 11.2 22.2 11.7 26 0 0.2 0 0.5 0.1 0.7l-0.1 524.3z",
                              "p-id": "4617",
                              fill: "#1890ff",
                            },
                          }),
                        ]
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !_vm.tocShow,
                          expression: "!tocShow",
                        },
                      ],
                      staticClass: "icon-svg",
                      on: {
                        click: function ($event) {
                          _vm.tocShow = !_vm.tocShow
                        },
                      },
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "icon",
                          attrs: {
                            t: "1611551476626",
                            viewBox: "0 0 1024 1024",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            "p-id": "4615",
                            width: "22",
                            height: "22",
                          },
                        },
                        [
                          _c("path", {
                            attrs: {
                              d: "M370.1 371.5h-49.6c-3.1 0-5.7-2.5-5.7-5.7v-49.6c0-3.1 2.5-5.7 5.7-5.7h49.6c3.1 0 5.7 2.5 5.7 5.7v49.6c0 3.1-2.6 5.7-5.7 5.7z m333.5-7.6H460.5c-3.1 0-5.7-2.5-5.7-5.7v-34.5c0-3.1 2.5-5.7 5.7-5.7h243.2c3.1 0 5.7 2.5 5.7 5.7v34.5c-0.1 3.2-2.7 5.7-5.8 5.7zM370.1 712.4h-49.6c-3.1 0-5.7-2.5-5.7-5.7v-49.6c0-3.1 2.5-5.7 5.7-5.7h49.6c3.1 0 5.7 2.5 5.7 5.7v49.6c0 3.2-2.6 5.7-5.7 5.7z m333.5-7.5H460.5c-3.1 0-5.7-2.5-5.7-5.7v-34.5c0-3.1 2.5-5.7 5.7-5.7h243.2c3.1 0 5.7 2.5 5.7 5.7v34.5c-0.1 3.1-2.7 5.7-5.8 5.7zM370.1 542.5h-49.6c-3.1 0-5.7-2.5-5.7-5.7v-49.6c0-3.1 2.5-5.7 5.7-5.7h49.6c3.1 0 5.7 2.5 5.7 5.7v49.6c0 3.1-2.6 5.7-5.7 5.7z m333.5-7.6H460.5c-3.1 0-5.7-2.5-5.7-5.7v-34.5c0-3.1 2.5-5.7 5.7-5.7h243.2c3.1 0 5.7 2.5 5.7 5.7v34.5c-0.1 3.2-2.7 5.7-5.8 5.7z",
                              "p-id": "4616",
                              fill: "#777777",
                            },
                          }),
                          _c("path", {
                            attrs: {
                              d: "M847.1 560.4V250.1s0-24.7-14-46.4c-10.8-16.8-30-31.8-64.2-31.8h-261c-0.2 0-0.3 0-0.5 0.1H255s-78.1 0-78.1 78.1l0.1 213.4V774s0 24.7 13.9 46.3c10.8 16.8 30 31.8 64.2 31.8h261.1c0.2 0 0.3 0 0.5-0.1H769s78.1 0 78.1-78.1l-0.1-213.4 0.1-0.1z m-39 213.6c-1.3 38.5-38.9 39-38.9 39h-514c-1.3-0.1-2.5-0.2-3.8-0.3-5.4-1.1-15.7-4.1-23.9-11.7-9-9.7-11.2-22.3-11.7-26.1v-0.7l0.1-524.2c1.3-38.5 38.9-39 38.9-39h514c1.3 0.1 2.5 0.2 3.7 0.3 5.4 1.1 15.7 4.1 23.9 11.7 9 9.7 11.2 22.2 11.7 26 0 0.2 0 0.5 0.1 0.7l-0.1 524.3z",
                              "p-id": "4617",
                              fill: "#777777",
                            },
                          }),
                        ]
                      ),
                    ]
                  ),
                ]
              ),
              _vm._v(" "),
              _vm.tools.fullscreen && !_vm.fullscreen
                ? _c("li", { attrs: { name: _vm.$L("全屏") } }, [
                    _c("span", {
                      staticClass: "iconfont icon-fullscreen",
                      on: {
                        click: function ($event) {
                          _vm.fullscreen = !_vm.fullscreen
                        },
                      },
                    }),
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.tools.fullscreen && _vm.fullscreen
                ? _c("li", { attrs: { name: _vm.$L("退出全屏") } }, [
                    _c("span", {
                      staticClass: "iconfont icon-quite",
                      on: {
                        click: function ($event) {
                          _vm.fullscreen = !_vm.fullscreen
                        },
                      },
                    }),
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.tools.custom_fullscreen && !_vm.isCustomFullscreen
                ? _c("li", { attrs: { name: _vm.$L("全屏") } }, [
                    _c("span", {
                      staticClass: "iconfont icon-fullscreen",
                      on: {
                        click: function ($event) {
                          return _vm.onCustom("fullscreen")
                        },
                      },
                    }),
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.tools.custom_fullscreen && _vm.isCustomFullscreen
                ? _c("li", { attrs: { name: _vm.$L("退出全屏") } }, [
                    _c("span", {
                      staticClass: "iconfont icon-quite",
                      on: {
                        click: function ($event) {
                          return _vm.onCustom("fullscreen")
                        },
                      },
                    }),
                  ])
                : _vm._e(),
            ]),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.preview && !_vm.isPreview,
              expression: "preview && !isPreview",
            },
          ],
          staticClass: "close-preview",
          on: {
            click: function ($event) {
              _vm.preview = false
            },
          },
        },
        [_c("span", { staticClass: "iconfont icon-close" })]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "markdown-content",
          style: { background: _vm.preview ? "#fff" : "" },
        },
        [
          _c("div", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.preview,
                expression: "!preview",
              },
            ],
            ref: "codemirror",
            staticClass: "codemirror",
            on: {
              mouseenter: function ($event) {
                return _vm.mousescrollSide("left")
              },
            },
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.preview ? _vm.preview : _vm.split,
                  expression: "preview ? preview : split",
                },
              ],
              ref: "preview",
              class: "markdown-preview " + ("markdown-theme-" + _vm.themeName),
              on: {
                scroll: _vm.previewScroll,
                mouseenter: function ($event) {
                  return _vm.mousescrollSide("right")
                },
              },
            },
            [
              _c("div", {
                ref: "previewInner",
                domProps: { innerHTML: _vm._s(_vm.html) },
              }),
            ]
          ),
          _vm._v(" "),
          _c(
            "ul",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.tocShow,
                  expression: "tocShow",
                },
              ],
              staticClass: "toc-anchor",
            },
            _vm._l(_vm.tocLists, function (item) {
              return _c(
                "li",
                {
                  key: item.anchor,
                  staticClass: "toc-anchor-item",
                  on: {
                    click: function ($event) {
                      return _vm.tocClick(item)
                    },
                  },
                },
                [
                  _c(
                    "span",
                    {
                      class:
                        "toc-link-" +
                        _vm.tocLevel(item.level) +
                        (_vm.tocAction == item.anchor
                          ? " toc-link-action"
                          : ""),
                      attrs: { anchor: item.anchor, title: item.text },
                    },
                    [_vm._v(_vm._s(item.text))]
                  ),
                ]
              )
            }),
            0
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { class: ["preview-img", _vm.previewImgModal ? "active" : ""] },
        [
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
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/index.vue?vue&type=template&id=c72f0984&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/MDEditor/index.vue?vue&type=template&id=c72f0984&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "mdeditor-wrapper" },
    [
      _c(
        "div",
        { staticClass: "mdeditor-box" },
        [
          _c("MarkdownPro", {
            ref: "md1",
            attrs: {
              height: _vm.height,
              toolbars: _vm.toolbars,
              copyBtnText: _vm.$L("复制代码"),
              "is-custom-fullscreen": _vm.transfer,
            },
            on: {
              "on-custom": _vm.customClick,
              "on-upload-image": _vm.handleUploadImageUpload,
            },
            model: {
              value: _vm.content,
              callback: function ($$v) {
                _vm.content = $$v
              },
              expression: "content",
            },
          }),
          _vm._v(" "),
          _c("ImgUpload", {
            ref: "myUpload",
            staticClass: "upload-control",
            attrs: { type: "callback", uploadIng: _vm.uploadIng, num: "50" },
            on: {
              "update:uploadIng": function ($event) {
                _vm.uploadIng = $event
              },
              "update:upload-ing": function ($event) {
                _vm.uploadIng = $event
              },
              "on-callback": _vm.editorImage,
            },
          }),
          _vm._v(" "),
          _c("Upload", {
            ref: "fileUpload",
            staticClass: "upload-control",
            attrs: {
              name: "files",
              action: _vm.actionUrl,
              headers: _vm.headers,
              multiple: "",
              format: _vm.uploadFormat,
              "show-upload-list": false,
              "max-size": _vm.maxSize,
              "on-progress": _vm.handleProgress,
              "on-success": _vm.handleSuccess,
              "on-error": _vm.handleError,
              "on-format-error": _vm.handleFormatError,
              "on-exceeded-size": _vm.handleMaxSize,
              "before-upload": _vm.handleBeforeUpload,
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _vm.uploadIng > 0
        ? _c(
            "Spin",
            { attrs: { fix: "" } },
            [
              _c("Icon", {
                staticClass: "icon-loading",
                attrs: { type: "ios-loading" },
              }),
              _vm._v(" "),
              _c("div", [_vm._v(_vm._s(_vm.$L("正在上传文件...")))]),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "Modal",
        {
          staticClass: "mdeditor-transfer",
          attrs: {
            "footer-hide": "",
            fullscreen: "",
            transfer: "",
            closable: false,
          },
          model: {
            value: _vm.transfer,
            callback: function ($$v) {
              _vm.transfer = $$v
            },
            expression: "transfer",
          },
        },
        [
          _c(
            "div",
            { staticClass: "mdeditor-transfer-body" },
            [
              _vm.transfer
                ? _c("MarkdownPro", {
                    ref: "md2",
                    attrs: {
                      toolbars: _vm.toolbars,
                      copyBtnText: _vm.$L("复制代码"),
                      "is-custom-fullscreen": _vm.transfer,
                      height: "100%",
                    },
                    on: {
                      "on-custom": _vm.customClick,
                      "on-upload-image": _vm.handleUploadImageUpload,
                    },
                    model: {
                      value: _vm.content,
                      callback: function ($$v) {
                        _vm.content = $$v
                      },
                      expression: "content",
                    },
                  })
                : _vm._e(),
            ],
            1
          ),
          _vm._v(" "),
          _vm.uploadIng > 0
            ? _c(
                "Spin",
                { attrs: { fix: "" } },
                [
                  _c("Icon", {
                    staticClass: "icon-loading",
                    attrs: { type: "ios-loading" },
                  }),
                  _vm._v(" "),
                  _c("div", [_vm._v(_vm._s(_vm.$L("正在上传文件...")))]),
                ],
                1
              )
            : _vm._e(),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "Modal",
        {
          attrs: {
            title: "html转markdown",
            okText: "转换成markdown",
            width: "680",
            "class-name": "simple-modal",
            transfer: "",
          },
          on: { "on-ok": _vm.htmlOk },
          model: {
            value: _vm.html2md,
            callback: function ($$v) {
              _vm.html2md = $$v
            },
            expression: "html2md",
          },
        },
        [
          _c("Input", {
            attrs: {
              type: "textarea",
              rows: 14,
              placeholder: "请输入html代码...",
            },
            model: {
              value: _vm.htmlValue,
              callback: function ($$v) {
                _vm.htmlValue = $$v
              },
              expression: "htmlValue",
            },
          }),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);