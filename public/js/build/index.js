"use strict";
(self["webpackChunkDooTask"] = self["webpackChunkDooTask"] || []).push([["resources_assets_js_pages_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      needStartHome: false,
      homeFooter: ''
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(['userId', 'windowWidth', 'themeMode', 'themeIsDark', 'themeList'])), {}, {
    currentLanguage: function currentLanguage() {
      return this.languageList[this.languageType] || "Language";
    },
    appTitle: function appTitle() {
      return window.systemInfo.title || "DooTask";
    }
  }),
  mounted: function mounted() {
    this.getNeedStartHome();
  },
  methods: {
    setTheme: function setTheme(mode) {
      this.$store.dispatch("setTheme", mode);
    },
    login: function login() {
      this.goForward({
        name: 'login'
      });
    },
    register: function register() {
      this.goForward({
        name: 'login',
        query: {
          type: "reg"
        }
      });
    },
    getNeedStartHome: function getNeedStartHome() {
      var _this = this;

      if (this.$Electron) {
        this.needStartHome = false;

        if (this.userId > 0) {
          this.goForward({
            name: 'manage-dashboard'
          }, true);
        } else {
          this.goForward({
            name: 'login'
          }, true);
        }

        return;
      }

      this.$store.dispatch("call", {
        url: "system/get/starthome"
      }).then(function (_ref) {
        var data = _ref.data;
        _this.homeFooter = data.home_footer;

        if (_this.userId > 0) {
          _this.goForward({
            name: 'manage-dashboard'
          }, true);
        } else {
          _this.needStartHome = !!data.need_start;

          if (_this.needStartHome === false) {
            _this.goForward({
              name: 'login'
            }, true);
          }
        }
      })["catch"](function (_) {
        _this.needStartHome = false;

        _this.goForward({
          name: 'login'
        }, true);
      });
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/pages/index.vue":
/*!*********************************************!*\
  !*** ./resources/assets/js/pages/index.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_1a7d0805___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1a7d0805& */ "./resources/assets/js/pages/index.vue?vue&type=template&id=1a7d0805&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/assets/js/pages/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_1a7d0805___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_1a7d0805___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/pages/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/pages/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/pages/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/pages/index.vue?vue&type=template&id=1a7d0805&":
/*!****************************************************************************!*\
  !*** ./resources/assets/js/pages/index.vue?vue&type=template&id=1a7d0805& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1a7d0805___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1a7d0805___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1a7d0805___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=1a7d0805& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/index.vue?vue&type=template&id=1a7d0805&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/index.vue?vue&type=template&id=1a7d0805&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/index.vue?vue&type=template&id=1a7d0805& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _vm.needStartHome
    ? _c("div", { staticClass: "page-index" }, [
        _c("div", { staticClass: "page-warp" }, [
          _c("div", { staticClass: "page-header" }, [
            _c("div", { staticClass: "header-nav" }, [
              _vm._m(0),
              _vm._v(" "),
              _vm.windowWidth > 780
                ? _c("div", { staticClass: "header-nav-box header-nav-boxs" }, [
                    _c(
                      "div",
                      { staticClass: "header-right-one" },
                      [
                        _c(
                          "Dropdown",
                          {
                            attrs: { trigger: "click" },
                            on: { "on-click": _vm.setLanguage },
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "header-right-one-dropdown",
                                attrs: { href: "javascript:void(0)" },
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm.currentLanguage) +
                                    "\n                                "
                                ),
                                _c("Icon", {
                                  attrs: { type: "ios-arrow-down" },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "DropdownMenu",
                              { attrs: { slot: "list" }, slot: "list" },
                              _vm._l(_vm.languageList, function (item, key) {
                                return _c(
                                  "DropdownItem",
                                  {
                                    key: key,
                                    attrs: {
                                      name: key,
                                      selected: _vm.getLanguage() === key,
                                    },
                                  },
                                  [_vm._v(_vm._s(item))]
                                )
                              }),
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "header-right-four" },
                      [
                        _c(
                          "Dropdown",
                          {
                            attrs: { trigger: "click" },
                            on: { "on-click": _vm.setTheme },
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "header-right-one-dropdown",
                                attrs: { href: "javascript:void(0)" },
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm.$L("主题皮肤")) +
                                    "\n                                "
                                ),
                                _c("Icon", {
                                  attrs: { type: "ios-arrow-down" },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "DropdownMenu",
                              { attrs: { slot: "list" }, slot: "list" },
                              _vm._l(_vm.themeList, function (item, key) {
                                return _c(
                                  "DropdownItem",
                                  {
                                    key: key,
                                    attrs: {
                                      name: item.value,
                                      selected: _vm.themeMode === item.value,
                                    },
                                  },
                                  [_vm._v(_vm._s(_vm.$L(item.name)))]
                                )
                              }),
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "header-right-two",
                        on: { click: _vm.register },
                      },
                      [_vm._v(_vm._s(_vm.$L("注册账号")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "header-right-three no-dark-mode",
                        on: { click: _vm.login },
                      },
                      [_vm._v(_vm._s(_vm.$L("登录")))]
                    ),
                  ])
                : _c(
                    "div",
                    { staticClass: "header-nav-box header-nav-boxs" },
                    [
                      _c(
                        "Dropdown",
                        { attrs: { trigger: "click" } },
                        [
                          _c(
                            "a",
                            { attrs: { href: "javascript:void(0)" } },
                            [
                              _c("Icon", {
                                staticClass: "header-nav-more",
                                attrs: { type: "md-menu" },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "DropdownMenu",
                            { attrs: { slot: "list" }, slot: "list" },
                            [
                              _c(
                                "DropdownItem",
                                {
                                  nativeOn: {
                                    click: function ($event) {
                                      return _vm.login.apply(null, arguments)
                                    },
                                  },
                                },
                                [_vm._v(_vm._s(_vm.$L("登录")))]
                              ),
                              _vm._v(" "),
                              _c(
                                "DropdownItem",
                                {
                                  nativeOn: {
                                    click: function ($event) {
                                      return _vm.register.apply(null, arguments)
                                    },
                                  },
                                },
                                [_vm._v(_vm._s(_vm.$L("注册账号")))]
                              ),
                              _vm._v(" "),
                              _c(
                                "Dropdown",
                                {
                                  attrs: { placement: "right-start" },
                                  on: { "on-click": _vm.setLanguage },
                                },
                                [
                                  _c(
                                    "DropdownItem",
                                    [
                                      _c("Icon", {
                                        staticClass:
                                          "header-right-one-language no-dark-mode",
                                        attrs: { type: "md-globe" },
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "header-right-one-dropdown",
                                          attrs: { href: "javascript:void(0)" },
                                        },
                                        [_vm._v(_vm._s(_vm.currentLanguage))]
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "DropdownMenu",
                                    { attrs: { slot: "list" }, slot: "list" },
                                    _vm._l(
                                      _vm.languageList,
                                      function (item, key) {
                                        return _c(
                                          "DropdownItem",
                                          {
                                            key: key,
                                            attrs: {
                                              name: key,
                                              selected:
                                                _vm.getLanguage() === key,
                                            },
                                          },
                                          [_vm._v(_vm._s(item))]
                                        )
                                      }
                                    ),
                                    1
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "Dropdown",
                                {
                                  attrs: {
                                    trigger: "click",
                                    placement: "right-end",
                                  },
                                  on: { "on-click": _vm.setTheme },
                                },
                                [
                                  _c("DropdownItem", [
                                    _c(
                                      "div",
                                      { staticClass: "login-setting-item" },
                                      [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(_vm.$L("主题皮肤")) +
                                            "\n                                        "
                                        ),
                                        _c("Icon", {
                                          attrs: { type: "ios-arrow-forward" },
                                        }),
                                      ],
                                      1
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "DropdownMenu",
                                    { attrs: { slot: "list" }, slot: "list" },
                                    _vm._l(_vm.themeList, function (item, key) {
                                      return _c(
                                        "DropdownItem",
                                        {
                                          key: key,
                                          attrs: {
                                            name: item.value,
                                            selected:
                                              _vm.themeMode === item.value,
                                          },
                                        },
                                        [_vm._v(_vm._s(_vm.$L(item.name)))]
                                      )
                                    }),
                                    1
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
                    ],
                    1
                  ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "header-content" }, [
              _c("div", { staticClass: "header-title header-title-one" }, [
                _vm._v(_vm._s(_vm.appTitle)),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "header-title" }, [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.$L("轻量级任务管理工具")) +
                    "\n                "
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "header-tips" }, [
                _vm._v(
                  "\n                    " +
                    _vm._s(
                      _vm.$L(
                        _vm.appTitle +
                          "是一款轻量级的开源在线项目任务管理工具，提供各类文档协作工具、在线思维导图、在线流程图、项目管理、任务分发、即时IM，文件管理等工具。"
                      )
                    ) +
                    "\n                "
                ),
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "login-buttom no-dark-mode",
                  on: { click: _vm.login },
                },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.$L("登录")) +
                      "\n                "
                  ),
                ]
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "page-header-bottom" }, [
            _c(
              "div",
              { staticClass: "page-header-bottoms" },
              [
                _c("ImgView", {
                  attrs: {
                    src: _vm.themeIsDark
                      ? "images/index/dark/1.png"
                      : "images/index/light/1.png",
                  },
                }),
              ],
              1
            ),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "page-main" },
            [
              _c(
                "Row",
                {
                  class:
                    _vm.windowWidth > 1200 ? "page-main-row" : "page-main-rows",
                },
                [
                  _c(
                    "Col",
                    {
                      class:
                        _vm.windowWidth > 1200
                          ? "page-main-img"
                          : "page-main-imgs",
                      attrs: { xs: 24, sm: 24, xl: 12 },
                    },
                    [
                      _c("ImgView", {
                        attrs: {
                          src: _vm.themeIsDark
                            ? "images/index/dark/2.png"
                            : "images/index/light/2.png",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.windowWidth > 1200
                    ? _c(
                        "Col",
                        {
                          staticClass: "page-main-text",
                          attrs: { xs: 24, sm: 24, xl: 12 },
                        },
                        [
                          _c("ImgView", {
                            attrs: { src: "images/index/square.png" },
                          }),
                          _vm._v(" "),
                          _c("h3", [
                            _vm._v(_vm._s(_vm.$L("高效便捷的团队沟通工具"))),
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              _vm._s(
                                _vm.$L(
                                  "针对项目和任务建立群组，工作问题可及时沟通，促进团队快速协作，提高团队工作效率。"
                                )
                              )
                            ),
                          ]),
                        ],
                        1
                      )
                    : _c(
                        "Col",
                        {
                          staticClass: "page-main-text page-main-texts",
                          attrs: { xs: 24, sm: 24, xl: 12 },
                        },
                        [
                          _c(
                            "h3",
                            [
                              _c("ImgView", {
                                attrs: { src: "images/index/square.png" },
                              }),
                              _vm._v(_vm._s(_vm.$L("高效便捷的团队沟通工具"))),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              _vm._s(
                                _vm.$L(
                                  "针对项目和任务建立群组，工作问题可及时沟通，促进团队快速协作，提高团队工作效率。"
                                )
                              )
                            ),
                          ]),
                        ]
                      ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "Row",
                {
                  class:
                    _vm.windowWidth > 1200 ? "page-main-row" : "page-main-rows",
                },
                [
                  _vm.windowWidth > 1200
                    ? _c(
                        "Col",
                        {
                          staticClass: "page-main-text",
                          attrs: { xs: 24, sm: 24, xl: 12 },
                        },
                        [
                          _c("ImgView", {
                            attrs: { src: "images/index/square.png" },
                          }),
                          _vm._v(" "),
                          _c("h3", [
                            _vm._v(_vm._s(_vm.$L("强大易用的协同创作云文档"))),
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              _vm._s(
                                _vm.$L(
                                  "汇集文档、电子表格、思维笔记等多种在线工具，汇聚企业知识资源于一处，支持多人实时协同编辑，让团队协作更便捷。"
                                )
                              )
                            ),
                          ]),
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "Col",
                    {
                      class:
                        _vm.windowWidth > 1200
                          ? "page-main-img"
                          : "page-main-imgs",
                      attrs: { xs: 24, sm: 24, xl: 12 },
                    },
                    [
                      _c("ImgView", {
                        attrs: {
                          src: _vm.themeIsDark
                            ? "images/index/dark/3.png"
                            : "images/index/light/3.png",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.windowWidth <= 1200
                    ? _c(
                        "Col",
                        {
                          staticClass: "page-main-text page-main-texts",
                          attrs: { xs: 24, sm: 24, xl: 12 },
                        },
                        [
                          _c(
                            "h3",
                            [
                              _c("ImgView", {
                                attrs: { src: "images/index/square.png" },
                              }),
                              _vm._v(
                                _vm._s(_vm.$L("强大易用的协同创作云文档"))
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              _vm._s(
                                _vm.$L(
                                  "汇集文档、电子表格、思维笔记等多种在线工具，汇聚企业知识资源于一处，支持多人实时协同编辑，让团队协作更便捷。"
                                )
                              )
                            ),
                          ]),
                        ]
                      )
                    : _vm._e(),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "Row",
                {
                  class:
                    _vm.windowWidth > 1200 ? "page-main-row" : "page-main-rows",
                },
                [
                  _c(
                    "Col",
                    {
                      class:
                        _vm.windowWidth > 1200
                          ? "page-main-img"
                          : "page-main-imgs",
                      attrs: { xs: 24, sm: 24, xl: 12 },
                    },
                    [
                      _c("ImgView", {
                        attrs: {
                          src: _vm.themeIsDark
                            ? "images/index/dark/4.png"
                            : "images/index/light/4.png",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.windowWidth > 1200
                    ? _c(
                        "Col",
                        {
                          staticClass: "page-main-text",
                          attrs: { xs: 24, sm: 24, xl: 12 },
                        },
                        [
                          _c("ImgView", {
                            attrs: { src: "images/index/square.png" },
                          }),
                          _vm._v(" "),
                          _c("h3", [
                            _vm._v(_vm._s(_vm.$L("便捷易用的项目管理模板"))),
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              _vm._s(
                                _vm.$L(
                                  "模版满足多种团队协作场景，同时支持自定义模版，满足团队个性化场景管理需求，可直观的查看项目的进展情况，团队协作更方便。"
                                )
                              )
                            ),
                          ]),
                        ],
                        1
                      )
                    : _c(
                        "Col",
                        {
                          staticClass: "page-main-text page-main-texts",
                          attrs: { xs: 24, sm: 24, xl: 12 },
                        },
                        [
                          _c(
                            "h3",
                            [
                              _c("ImgView", {
                                attrs: { src: "images/index/square.png" },
                              }),
                              _vm._v(_vm._s(_vm.$L("便捷易用的项目管理模板"))),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              _vm._s(
                                _vm.$L(
                                  "模版满足多种团队协作场景，同时支持自定义模版，满足团队个性化场景管理需求，可直观的查看项目的进展情况，团队协作更方便。"
                                )
                              )
                            ),
                          ]),
                        ]
                      ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "Row",
                {
                  class:
                    _vm.windowWidth > 1200 ? "page-main-row" : "page-main-rows",
                },
                [
                  _vm.windowWidth > 1200
                    ? _c(
                        "Col",
                        {
                          staticClass: "page-main-text",
                          attrs: { xs: 24, sm: 24, xl: 12 },
                        },
                        [
                          _c("ImgView", {
                            attrs: { src: "images/index/square.png" },
                          }),
                          _vm._v(" "),
                          _c("h3", [
                            _vm._v(_vm._s(_vm.$L("清晰直观的任务日历"))),
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              _vm._s(
                                _vm.$L(
                                  "通过灵活的任务日历，轻松安排每一天的日程，把任务拆解到每天，让工作目标更清晰，时间分配更合理。"
                                )
                              )
                            ),
                          ]),
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "Col",
                    {
                      class:
                        _vm.windowWidth > 1200
                          ? "page-main-img"
                          : "page-main-imgs",
                      attrs: { xs: 24, sm: 24, xl: 12 },
                    },
                    [
                      _c("ImgView", {
                        attrs: {
                          src: _vm.themeIsDark
                            ? "images/index/dark/5.png"
                            : "images/index/light/5.png",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.windowWidth <= 1200
                    ? _c(
                        "Col",
                        {
                          staticClass: "page-main-text page-main-texts",
                          attrs: { xs: 24, sm: 24, xl: 12 },
                        },
                        [
                          _c(
                            "h3",
                            [
                              _c("ImgView", {
                                attrs: { src: "images/index/square.png" },
                              }),
                              _vm._v(_vm._s(_vm.$L("清晰直观的任务日历"))),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              _vm._s(
                                _vm.$L(
                                  "通过灵活的任务日历，轻松安排每一天的日程，把任务拆解到每天，让工作目标更清晰，时间分配更合理。"
                                )
                              )
                            ),
                          ]),
                        ]
                      )
                    : _vm._e(),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "page-footer" }, [
            _c("div", { staticClass: "footer-service no-dark-mode" }, [
              _c("div", { staticClass: "footer-bg-box" }, [
                _c("div", { staticClass: "box-title" }, [
                  _vm._v(
                    _vm._s(_vm.$L("开启您的 " + _vm.appTitle + " 团队协作"))
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "buttom-box" }, [
                  _c(
                    "div",
                    { staticClass: "login-btn", on: { click: _vm.login } },
                    [_vm._v(_vm._s(_vm.$L("立即登录")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "reg-btn", on: { click: _vm.register } },
                    [_vm._v(_vm._s(_vm.$L("注册")))]
                  ),
                ]),
              ]),
            ]),
            _vm._v(" "),
            this.homeFooter
              ? _c("div", {
                  staticClass: "footer-copyright",
                  domProps: { innerHTML: _vm._s(this.homeFooter) },
                })
              : _vm._e(),
          ]),
        ]),
      ])
    : _vm._e()
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "header-nav-box" }, [
      _c("div", { staticClass: "logo no-dark-mode" }),
    ])
  },
]
render._withStripped = true



/***/ })

}]);