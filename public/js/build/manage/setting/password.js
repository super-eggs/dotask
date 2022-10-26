"use strict";
(self["webpackChunkDooTask"] = self["webpackChunkDooTask"] || []).push([["resources_assets_js_pages_manage_setting_password_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/password.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/password.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      loadIng: 0,
      formDatum: {
        oldpass: '',
        newpass: '',
        checkpass: ''
      },
      ruleDatum: {}
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(['userInfo'])),
  methods: {
    initLanguage: function initLanguage() {
      var _this = this;

      this.ruleDatum = {
        oldpass: [{
          required: true,
          message: this.$L('请输入旧密码！'),
          trigger: 'change'
        }, {
          type: 'string',
          min: 6,
          message: this.$L('密码长度至少6位！'),
          trigger: 'change'
        }],
        newpass: [{
          validator: function validator(rule, value, callback) {
            if (value === '') {
              callback(new Error(_this.$L('请输入新密码！')));
            } else {
              if (_this.formDatum.checkpass !== '') {
                _this.$refs.formDatum.validateField('checkpass');
              }

              callback();
            }
          },
          required: true,
          trigger: 'change'
        }, {
          type: 'string',
          min: 6,
          message: this.$L('密码长度至少6位！'),
          trigger: 'change'
        }],
        checkpass: [{
          validator: function validator(rule, value, callback) {
            if (value === '') {
              callback(new Error(_this.$L('请重新输入新密码！')));
            } else if (value !== _this.formDatum.newpass) {
              callback(new Error(_this.$L('两次密码输入不一致！')));
            } else {
              callback();
            }
          },
          required: true,
          trigger: 'change'
        }]
      };
    },
    submitForm: function submitForm() {
      var _this2 = this;

      this.$refs.formDatum.validate(function (valid) {
        if (valid) {
          _this2.loadIng++;

          _this2.$store.dispatch("call", {
            url: 'users/editpass',
            data: _this2.formDatum
          }).then(function (_ref) {
            var data = _ref.data;
            $A.messageSuccess('修改成功');
            _this2.loadIng--;

            _this2.$store.dispatch("saveUserInfo", data);

            _this2.$refs.formDatum.resetFields();
          })["catch"](function (_ref2) {
            var msg = _ref2.msg;
            $A.modalError(msg);
            _this2.loadIng--;
          });
        }
      });
    },
    resetForm: function resetForm() {
      this.$refs.formDatum.resetFields();
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/pages/manage/setting/password.vue":
/*!***************************************************************!*\
  !*** ./resources/assets/js/pages/manage/setting/password.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _password_vue_vue_type_template_id_28a8cf52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password.vue?vue&type=template&id=28a8cf52& */ "./resources/assets/js/pages/manage/setting/password.vue?vue&type=template&id=28a8cf52&");
/* harmony import */ var _password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password.vue?vue&type=script&lang=js& */ "./resources/assets/js/pages/manage/setting/password.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _password_vue_vue_type_template_id_28a8cf52___WEBPACK_IMPORTED_MODULE_0__.render,
  _password_vue_vue_type_template_id_28a8cf52___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/pages/manage/setting/password.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/pages/manage/setting/password.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/pages/manage/setting/password.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./password.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/password.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/pages/manage/setting/password.vue?vue&type=template&id=28a8cf52&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/pages/manage/setting/password.vue?vue&type=template&id=28a8cf52& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_password_vue_vue_type_template_id_28a8cf52___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_password_vue_vue_type_template_id_28a8cf52___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_password_vue_vue_type_template_id_28a8cf52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./password.vue?vue&type=template&id=28a8cf52& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/password.vue?vue&type=template&id=28a8cf52&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/password.vue?vue&type=template&id=28a8cf52&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/password.vue?vue&type=template&id=28a8cf52& ***!
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
          ref: "formDatum",
          attrs: {
            model: _vm.formDatum,
            rules: _vm.ruleDatum,
            "label-width": "auto",
          },
          nativeOn: {
            submit: function ($event) {
              $event.preventDefault()
            },
          },
        },
        [
          _vm.userInfo.changepass
            ? _c(
                "Alert",
                {
                  staticStyle: { "margin-bottom": "32px" },
                  attrs: { type: "warning", showIcon: "" },
                },
                [_vm._v(_vm._s(_vm.$L("请先修改登录密码！")))]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "FormItem",
            { attrs: { label: _vm.$L("旧密码"), prop: "oldpass" } },
            [
              _c("Input", {
                attrs: { type: "password" },
                model: {
                  value: _vm.formDatum.oldpass,
                  callback: function ($$v) {
                    _vm.$set(_vm.formDatum, "oldpass", $$v)
                  },
                  expression: "formDatum.oldpass",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "FormItem",
            { attrs: { label: _vm.$L("新密码"), prop: "newpass" } },
            [
              _c("Input", {
                attrs: { type: "password" },
                model: {
                  value: _vm.formDatum.newpass,
                  callback: function ($$v) {
                    _vm.$set(_vm.formDatum, "newpass", $$v)
                  },
                  expression: "formDatum.newpass",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "FormItem",
            { attrs: { label: _vm.$L("确认新密码"), prop: "checkpass" } },
            [
              _c("Input", {
                attrs: { type: "password" },
                model: {
                  value: _vm.formDatum.checkpass,
                  callback: function ($$v) {
                    _vm.$set(_vm.formDatum, "checkpass", $$v)
                  },
                  expression: "formDatum.checkpass",
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