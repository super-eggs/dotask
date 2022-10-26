"use strict";
(self["webpackChunkDooTask"] = self["webpackChunkDooTask"] || []).push([["resources_assets_js_pages_manage_setting_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var le5le_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! le5le-store */ "./node_modules/le5le-store/index.js");
/* harmony import */ var le5le_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(le5le_store__WEBPACK_IMPORTED_MODULE_0__);
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      curPath: this.$route.path,
      show768Menu: true,
      version: window.systemInfo.version
    };
  },
  mounted: function mounted() {},
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(['userInfo', 'userIsAdmin', 'clientNewVersion'])), {}, {
    menu: function menu() {
      var menu = [{
        path: 'personal',
        name: '个人设置'
      }, {
        path: 'password',
        name: '密码设置'
      }];

      if (this.userIsAdmin) {
        menu.push.apply(menu, [{
          path: 'system',
          name: '系统设置',
          divided: true
        }]);
      }

      return menu;
    },
    titleNameRoute: function titleNameRoute() {
      var curPath = this.curPath,
          menu = this.menu;
      var name = '';
      menu.some(function (item) {
        if ($A.leftExists(curPath, '/manage/setting/' + item.path)) {
          name = item.name;
          return true;
        }
      });
      return name || '设置';
    }
  }),
  watch: {
    '$route': function $route(route) {
      this.curPath = route.path;
    }
  },
  methods: {
    toggleRoute: function toggleRoute(path) {
      if (path == 'version') {
        le5le_store__WEBPACK_IMPORTED_MODULE_0__.Store.set('updateNotification', null);
        return;
      }

      this.show768Menu = false;
      this.goForward({
        path: '/manage/setting/' + path
      });
    },
    classNameRoute: function classNameRoute(path, divided) {
      return {
        "active": $A.leftExists(this.curPath, '/manage/setting/' + path),
        "divided": !!divided
      };
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/pages/manage/setting/index.vue":
/*!************************************************************!*\
  !*** ./resources/assets/js/pages/manage/setting/index.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_cf40d774___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=cf40d774& */ "./resources/assets/js/pages/manage/setting/index.vue?vue&type=template&id=cf40d774&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/assets/js/pages/manage/setting/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_cf40d774___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_cf40d774___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/pages/manage/setting/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/pages/manage/setting/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/pages/manage/setting/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/pages/manage/setting/index.vue?vue&type=template&id=cf40d774&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/pages/manage/setting/index.vue?vue&type=template&id=cf40d774& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_cf40d774___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_cf40d774___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_cf40d774___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=cf40d774& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/index.vue?vue&type=template&id=cf40d774&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/index.vue?vue&type=template&id=cf40d774&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/index.vue?vue&type=template&id=cf40d774& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "page-setting" },
    [
      _c("PageTitle", { attrs: { title: _vm.$L(_vm.titleNameRoute) } }),
      _vm._v(" "),
      _c("div", { staticClass: "setting-head" }, [
        _c("div", { staticClass: "setting-titbox" }, [
          _c("div", { staticClass: "setting-title" }, [
            _c("h1", [_vm._v(_vm._s(_vm.$L("设置")))]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "setting-more",
                on: {
                  click: function ($event) {
                    _vm.show768Menu = !_vm.show768Menu
                  },
                },
              },
              [
                _c("Icon", {
                  attrs: { type: _vm.show768Menu ? "md-close" : "md-more" },
                }),
              ],
              1
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "setting-box" }, [
        _c(
          "div",
          {
            staticClass: "setting-menu",
            class: { "show768-menu": _vm.show768Menu },
          },
          [
            _c(
              "ul",
              [
                _vm._l(_vm.menu, function (item, key) {
                  return _c(
                    "li",
                    {
                      key: key,
                      class: _vm.classNameRoute(item.path, item.divided),
                      on: {
                        click: function ($event) {
                          return _vm.toggleRoute(item.path)
                        },
                      },
                    },
                    [_vm._v(_vm._s(_vm.$L(item.name)))]
                  )
                }),
                _vm._v(" "),
                !!_vm.clientNewVersion
                  ? _c(
                      "li",
                      {
                        class: _vm.classNameRoute("version", true),
                        on: {
                          click: function ($event) {
                            return _vm.toggleRoute("version")
                          },
                        },
                      },
                      [
                        _c("AutoTip", { attrs: { disabled: "" } }, [
                          _vm._v(
                            _vm._s(_vm.$L("版本")) + ": " + _vm._s(_vm.version)
                          ),
                        ]),
                        _vm._v(" "),
                        _c("Badge", { attrs: { text: _vm.clientNewVersion } }),
                      ],
                      1
                    )
                  : _c(
                      "li",
                      { staticClass: "version divided" },
                      [
                        _c("AutoTip", [
                          _vm._v(
                            _vm._s(_vm.$L("版本")) + ": " + _vm._s(_vm.version)
                          ),
                        ]),
                      ],
                      1
                    ),
              ],
              2
            ),
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "setting-content" }, [
          _c("div", { staticClass: "setting-content-title" }, [
            _vm._v(_vm._s(_vm.$L(_vm.titleNameRoute))),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "setting-content-view" },
            [_c("router-view", { staticClass: "setting-router-view" })],
            1
          ),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);