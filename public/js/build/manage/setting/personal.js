"use strict";
(self["webpackChunkDooTask"] = self["webpackChunkDooTask"] || []).push([["resources_assets_js_pages_manage_setting_personal_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/ImgUpload.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/ImgUpload.vue?vue&type=script&lang=js& ***!
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

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/personal.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/personal.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_ImgUpload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/ImgUpload */ "./resources/assets/js/components/ImgUpload.vue");
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ImgUpload: _components_ImgUpload__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      loadIng: 0,
      formData: {
        userimg: '',
        nickname: '',
        profession: ''
      },
      ruleData: {}
    };
  },
  mounted: function mounted() {
    this.initData();
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(['userInfo'])),
  watch: {
    userInfo: function userInfo() {
      this.initData();
    }
  },
  methods: {
    initLanguage: function initLanguage() {
      this.ruleData = {
        nickname: [{
          required: true,
          message: this.$L('请输入昵称！'),
          trigger: 'change'
        }, {
          type: 'string',
          min: 2,
          message: this.$L('昵称长度至少2位！'),
          trigger: 'change'
        }]
      };
    },
    initData: function initData() {
      if (!$A.strExists(this.userInfo.userimg, '/avatar/default_')) {
        this.$set(this.formData, 'userimg', this.userInfo.userimg);
      }

      this.$set(this.formData, 'nickname', this.userInfo.nickname);
      this.$set(this.formData, 'profession', this.userInfo.profession);
      this.formData_bak = $A.cloneJSON(this.formData);
    },
    submitForm: function submitForm() {
      var _this = this;

      this.$refs.formData.validate(function (valid) {
        if (valid) {
          var data = $A.cloneJSON(_this.formData);
          if ($A.count(data.userimg) == 0) data.userimg = "";
          _this.loadIng++;

          _this.$store.dispatch("call", {
            url: 'users/editdata',
            data: data
          }).then(function () {
            $A.messageSuccess('修改成功');
            _this.loadIng--;

            _this.$store.dispatch('getUserInfo')["catch"](function () {});
          })["catch"](function (_ref) {
            var msg = _ref.msg;
            $A.modalError(msg);
            _this.loadIng--;
          });
        }
      });
    },
    resetForm: function resetForm() {
      this.formData = $A.cloneJSON(this.formData_bak);
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/components/ImgUpload.vue":
/*!******************************************************!*\
  !*** ./resources/assets/js/components/ImgUpload.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./resources/assets/js/pages/manage/setting/personal.vue":
/*!***************************************************************!*\
  !*** ./resources/assets/js/pages/manage/setting/personal.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _personal_vue_vue_type_template_id_8b18ad08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personal.vue?vue&type=template&id=8b18ad08& */ "./resources/assets/js/pages/manage/setting/personal.vue?vue&type=template&id=8b18ad08&");
/* harmony import */ var _personal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personal.vue?vue&type=script&lang=js& */ "./resources/assets/js/pages/manage/setting/personal.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _personal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _personal_vue_vue_type_template_id_8b18ad08___WEBPACK_IMPORTED_MODULE_0__.render,
  _personal_vue_vue_type_template_id_8b18ad08___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/pages/manage/setting/personal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/ImgUpload.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/components/ImgUpload.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImgUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ImgUpload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/ImgUpload.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImgUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/pages/manage/setting/personal.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/pages/manage/setting/personal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_personal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./personal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/personal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_personal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/ImgUpload.vue?vue&type=template&id=98687d06&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/components/ImgUpload.vue?vue&type=template&id=98687d06& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImgUpload_vue_vue_type_template_id_98687d06___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImgUpload_vue_vue_type_template_id_98687d06___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImgUpload_vue_vue_type_template_id_98687d06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ImgUpload.vue?vue&type=template&id=98687d06& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/ImgUpload.vue?vue&type=template&id=98687d06&");


/***/ }),

/***/ "./resources/assets/js/pages/manage/setting/personal.vue?vue&type=template&id=8b18ad08&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/pages/manage/setting/personal.vue?vue&type=template&id=8b18ad08& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_personal_vue_vue_type_template_id_8b18ad08___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_personal_vue_vue_type_template_id_8b18ad08___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_personal_vue_vue_type_template_id_8b18ad08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./personal.vue?vue&type=template&id=8b18ad08& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/personal.vue?vue&type=template&id=8b18ad08&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/ImgUpload.vue?vue&type=template&id=98687d06&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/ImgUpload.vue?vue&type=template&id=98687d06& ***!
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/personal.vue?vue&type=template&id=8b18ad08&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/personal.vue?vue&type=template&id=8b18ad08& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "setting-item submit" },
    [
      _c(
        "Form",
        {
          ref: "formData",
          attrs: {
            model: _vm.formData,
            rules: _vm.ruleData,
            "label-width": "auto",
          },
          nativeOn: {
            submit: function ($event) {
              $event.preventDefault()
            },
          },
        },
        [
          _c(
            "FormItem",
            { attrs: { label: _vm.$L("头像"), prop: "userimg" } },
            [
              _c("ImgUpload", {
                attrs: { num: 1 },
                model: {
                  value: _vm.formData.userimg,
                  callback: function ($$v) {
                    _vm.$set(_vm.formData, "userimg", $$v)
                  },
                  expression: "formData.userimg",
                },
              }),
              _vm._v(" "),
              _c("span", { staticClass: "form-tip" }, [
                _vm._v(_vm._s(_vm.$L("建议尺寸：200x200"))),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "FormItem",
            { attrs: { label: _vm.$L("邮箱") } },
            [
              _c("Input", {
                attrs: { disabled: "" },
                model: {
                  value: _vm.userInfo.email,
                  callback: function ($$v) {
                    _vm.$set(_vm.userInfo, "email", $$v)
                  },
                  expression: "userInfo.email",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "FormItem",
            { attrs: { label: _vm.$L("昵称"), prop: "nickname" } },
            [
              _c("Input", {
                attrs: { maxlength: 20 },
                model: {
                  value: _vm.formData.nickname,
                  callback: function ($$v) {
                    _vm.$set(_vm.formData, "nickname", $$v)
                  },
                  expression: "formData.nickname",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "FormItem",
            { attrs: { label: _vm.$L("职位/职称"), prop: "profession" } },
            [
              _c("Input", {
                attrs: { maxlength: 20 },
                model: {
                  value: _vm.formData.profession,
                  callback: function ($$v) {
                    _vm.$set(_vm.formData, "profession", $$v)
                  },
                  expression: "formData.profession",
                },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "setting-footer" },
        [
          _c(
            "Button",
            {
              attrs: { loading: _vm.loadIng > 0, type: "primary" },
              on: { click: _vm.submitForm },
            },
            [_vm._v(_vm._s(_vm.$L("提交")))]
          ),
          _vm._v(" "),
          _c(
            "Button",
            {
              staticStyle: { "margin-left": "8px" },
              attrs: { loading: _vm.loadIng > 0 },
              on: { click: _vm.resetForm },
            },
            [_vm._v(_vm._s(_vm.$L("重置")))]
          ),
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