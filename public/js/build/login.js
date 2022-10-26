"use strict";
(self["webpackChunkDooTask"] = self["webpackChunkDooTask"] || []).push([["resources_assets_js_pages_login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/login.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/login.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      codeNeed: false,
      codeUrl: $A.apiUrl('users/login/codeimg?_=' + Math.random()),
      loginType: 'login',
      loginJump: false,
      email: $A.getStorageString("cacheLoginEmail") || '',
      password: '',
      password2: '',
      code: '',
      invite: '',
      needStartHome: false,
      needInvite: false,
      subscribe: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.getDemoAccount();
    this.getNeedStartHome(); //

    if (this.$Electron) {
      this.chackServerUrl()["catch"](function (_) {});
    } else {
      this.clearServerUrl();
    } //


    this.subscribe = le5le_store__WEBPACK_IMPORTED_MODULE_0__.Store.subscribe('useSSOLogin', function () {
      _this.inputServerUrl();
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (this.subscribe) {
      this.subscribe.unsubscribe();
      this.subscribe = null;
    }
  },
  activated: function activated() {
    this.loginType = 'login'; //

    if (this.$Electron) {
      this.$Electron.sendMessage('subWindowDestroyAll');
    }
  },
  deactivated: function deactivated() {
    this.loginJump = false;
    this.password = "";
    this.password2 = "";
    this.code = "";
    this.invite = "";
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(['cacheServerUrl', 'themeMode', 'themeList'])), {}, {
    currentLanguage: function currentLanguage() {
      return this.languageList[this.languageType] || 'Language';
    },
    welcomeTitle: function welcomeTitle() {
      var title = window.systemInfo.title || "DooTask";

      if (title == "PublicDooTask") {
        return "Public DooTask";
      } else {
        return "Welcome " + title;
      }
    },
    loginText: function loginText() {
      var text = this.loginType == 'login' ? '登录' : '注册';

      if (this.loginJump) {
        text += "成功...";
      }

      return text;
    }
  }),
  watch: {
    '$route': function $route(_ref) {
      var _this2 = this;

      var query = _ref.query;

      if (query.type == 'reg') {
        this.$nextTick(function () {
          _this2.loginType = "reg";
        });
      }
    },
    loginType: function loginType(val) {
      if (val == 'reg') {
        this.getNeedInvite();
      }
    }
  },
  methods: {
    goHome: function goHome() {
      if (this.needStartHome) {
        this.goForward({
          name: 'index'
        });
      }
    },
    setTheme: function setTheme(mode) {
      this.$store.dispatch("setTheme", mode);
    },
    getDemoAccount: function getDemoAccount() {
      var _this3 = this;

      if (this.isNotServer()) {
        return;
      }

      this.$store.dispatch("call", {
        url: 'system/demo'
      }).then(function (_ref2) {
        var data = _ref2.data;

        if (data.account) {
          _this3.email = data.account;
          _this3.password = data.password;
        }
      })["catch"](function (_) {//
      });
    },
    getNeedStartHome: function getNeedStartHome() {
      var _this4 = this;

      if (this.isNotServer()) {
        return;
      }

      this.$store.dispatch("call", {
        url: "system/get/starthome"
      }).then(function (_ref3) {
        var data = _ref3.data;
        _this4.needStartHome = !!data.need_start;
      })["catch"](function (_) {
        _this4.needStartHome = false;
      });
    },
    getNeedInvite: function getNeedInvite() {
      var _this5 = this;

      this.$store.dispatch("call", {
        url: 'users/reg/needinvite'
      }).then(function (_ref4) {
        var data = _ref4.data;
        _this5.needInvite = !!data.need;
      })["catch"](function (_) {
        _this5.needInvite = false;
      });
    },
    forgotPassword: function forgotPassword() {
      $A.modalWarning("请联系管理员！");
    },
    reCode: function reCode() {
      this.codeUrl = $A.apiUrl('users/login/codeimg?_=' + Math.random());
    },
    inputServerUrl: function inputServerUrl() {
      var _this6 = this;

      $A.modalInput({
        title: "使用 SSO 登录",
        value: this.cacheServerUrl,
        placeholder: "请输入服务器地址",
        onOk: function onOk(value, cb) {
          if (value) {
            if (!$A.leftExists(value, "http://") && !$A.leftExists(value, "https://")) {
              value = "http://" + value;
            }

            if (!$A.rightExists(value, "/api/")) {
              value = value + ($A.rightExists(value, "/") ? "api/" : "/api/");
            }

            _this6.$store.dispatch("call", {
              url: value + 'system/setting'
            }).then(function () {
              _this6.setServerUrl(value);

              cb();
            })["catch"](function (_ref5) {
              var msg = _ref5.msg;
              $A.modalError(msg || "服务器地址无效", 301);
              cb();
            });

            return;
          }

          _this6.clearServerUrl();
        }
      });
    },
    chackServerUrl: function chackServerUrl(tip) {
      var _this7 = this;

      return new Promise(function (resolve, reject) {
        if (_this7.isNotServer()) {
          if (tip === true) {
            $A.messageWarning("请设置服务器");
          }

          _this7.inputServerUrl();

          reject();
        } else {
          resolve();
        }
      });
    },
    setServerUrl: function setServerUrl(value) {
      if (value != this.cacheServerUrl) {
        $A.setStorage("cacheServerUrl", value);
        window.location.reload();
      }
    },
    clearServerUrl: function clearServerUrl() {
      this.setServerUrl("");
    },
    isNotServer: function isNotServer() {
      var apiHome = $A.getDomain(window.systemInfo.apiUrl);
      return this.$Electron && (apiHome == "" || apiHome == "public");
    },
    onBlur: function onBlur() {
      var _this8 = this;

      if (this.loginType != 'login' || !this.email) {
        this.codeNeed = false;
        return;
      }

      this.loadIng++;
      this.$store.dispatch("call", {
        url: 'users/login/needcode',
        data: {
          email: this.email
        }
      }).then(function () {
        _this8.loadIng--;

        _this8.reCode();

        _this8.codeNeed = true;
      })["catch"](function (_) {
        _this8.loadIng--;
        _this8.codeNeed = false;
      });
    },
    onLogin: function onLogin() {
      var _this9 = this;

      this.chackServerUrl(true).then(function () {
        _this9.email = $A.trim(_this9.email);
        _this9.password = $A.trim(_this9.password);
        _this9.password2 = $A.trim(_this9.password2);
        _this9.code = $A.trim(_this9.code);
        _this9.invite = $A.trim(_this9.invite); //

        if (!$A.isEmail(_this9.email)) {
          $A.messageWarning("请输入正确的邮箱地址");
          return;
        }

        if (!_this9.password) {
          $A.messageWarning("请输入密码");
          return;
        }

        if (_this9.loginType == 'reg') {
          if (_this9.password != _this9.password2) {
            $A.messageWarning("确认密码输入不一致");
            return;
          }
        }

        _this9.loadIng++;

        _this9.$store.dispatch("call", {
          url: 'users/login',
          data: {
            type: _this9.loginType,
            email: _this9.email,
            password: _this9.password,
            code: _this9.code,
            invite: _this9.invite
          }
        }).then(function (_ref6) {
          var data = _ref6.data;
          _this9.loadIng--;
          _this9.codeNeed = false;
          $A.setStorage("cacheLoginEmail", _this9.email);

          _this9.$store.dispatch("handleClearCache", data).then(function () {
            _this9.goNext1();
          })["catch"](function (_) {
            _this9.goNext1();
          });
        })["catch"](function (_ref7) {
          var data = _ref7.data,
              msg = _ref7.msg;
          _this9.loadIng--;

          if (data.code === 'email') {
            $A.modalWarning(msg);
          } else {
            $A.modalError(msg);
          }

          if (data.code === 'need') {
            _this9.reCode();

            _this9.codeNeed = true;
          }
        });
      });
    },
    goNext1: function goNext1() {
      var _this10 = this;

      this.loginJump = true;

      if (this.loginType == 'login') {
        this.goNext2();
      } else {
        // 新注册自动创建项目
        this.$store.dispatch("call", {
          url: 'project/add',
          data: {
            name: this.$L('个人项目'),
            desc: this.$L('注册时系统自动创建项目，你可以自由删除。')
          }
        }).then(function () {
          _this10.goNext2();
        })["catch"](function (_) {
          _this10.goNext2();
        });
      }
    },
    goNext2: function goNext2() {
      var fromUrl = decodeURIComponent($A.getObject(this.$route.query, 'from'));

      if (fromUrl) {
        window.location.replace(fromUrl);
      } else {
        this.goForward({
          name: 'manage-dashboard'
        }, true);
      }
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/pages/login.vue":
/*!*********************************************!*\
  !*** ./resources/assets/js/pages/login.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _login_vue_vue_type_template_id_37b6a9c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=37b6a9c8& */ "./resources/assets/js/pages/login.vue?vue&type=template&id=37b6a9c8&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/assets/js/pages/login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_37b6a9c8___WEBPACK_IMPORTED_MODULE_0__.render,
  _login_vue_vue_type_template_id_37b6a9c8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/pages/login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/pages/login.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/pages/login.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/pages/login.vue?vue&type=template&id=37b6a9c8&":
/*!****************************************************************************!*\
  !*** ./resources/assets/js/pages/login.vue?vue&type=template&id=37b6a9c8& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_37b6a9c8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_37b6a9c8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_37b6a9c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=template&id=37b6a9c8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/login.vue?vue&type=template&id=37b6a9c8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/login.vue?vue&type=template&id=37b6a9c8&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/login.vue?vue&type=template&id=37b6a9c8& ***!
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
  return _c(
    "div",
    { staticClass: "page-login" },
    [
      _c("PageTitle", { attrs: { title: _vm.$L("登录") } }),
      _vm._v(" "),
      _c("div", { staticClass: "login-body" }, [
        _c("div", {
          staticClass: "login-logo no-dark-mode",
          class: { "can-click": _vm.needStartHome },
          on: { click: _vm.goHome },
        }),
        _vm._v(" "),
        _c("div", { staticClass: "login-box" }, [
          _c("div", { staticClass: "login-title" }, [
            _vm._v(_vm._s(_vm.welcomeTitle)),
          ]),
          _vm._v(" "),
          _vm.loginType == "reg"
            ? _c("div", { staticClass: "login-subtitle" }, [
                _vm._v(_vm._s(_vm.$L("输入您的信息以创建帐户。"))),
              ])
            : _c("div", { staticClass: "login-subtitle" }, [
                _vm._v(_vm._s(_vm.$L("输入您的凭证以访问您的帐户。"))),
              ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "login-input" },
            [
              _vm.$Electron && _vm.cacheServerUrl
                ? _c("Input", {
                    attrs: {
                      value: _vm.$A.getDomain(_vm.cacheServerUrl),
                      prefix: "ios-globe-outline",
                      size: "large",
                      readonly: "",
                      clearable: "",
                    },
                    on: { "on-clear": _vm.clearServerUrl },
                  })
                : _vm._e(),
              _vm._v(" "),
              _c("Input", {
                attrs: {
                  prefix: "ios-mail-outline",
                  placeholder: _vm.$L("输入您的电子邮件"),
                  size: "large",
                },
                on: { "on-enter": _vm.onLogin, "on-blur": _vm.onBlur },
                model: {
                  value: _vm.email,
                  callback: function ($$v) {
                    _vm.email = $$v
                  },
                  expression: "email",
                },
              }),
              _vm._v(" "),
              _c("Input", {
                attrs: {
                  prefix: "ios-lock-outline",
                  placeholder: _vm.$L("输入您的密码"),
                  type: "password",
                  size: "large",
                },
                on: { "on-enter": _vm.onLogin },
                model: {
                  value: _vm.password,
                  callback: function ($$v) {
                    _vm.password = $$v
                  },
                  expression: "password",
                },
              }),
              _vm._v(" "),
              _vm.loginType == "reg"
                ? _c("Input", {
                    attrs: {
                      prefix: "ios-lock-outline",
                      placeholder: _vm.$L("输入确认密码"),
                      type: "password",
                      size: "large",
                    },
                    on: { "on-enter": _vm.onLogin },
                    model: {
                      value: _vm.password2,
                      callback: function ($$v) {
                        _vm.password2 = $$v
                      },
                      expression: "password2",
                    },
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.loginType == "reg" && _vm.needInvite
                ? _c(
                    "Input",
                    {
                      staticClass: "login-code",
                      attrs: {
                        placeholder: _vm.$L("请输入注册邀请码"),
                        type: "text",
                        size: "large",
                      },
                      on: { "on-enter": _vm.onLogin },
                      model: {
                        value: _vm.invite,
                        callback: function ($$v) {
                          _vm.invite = $$v
                        },
                        expression: "invite",
                      },
                    },
                    [
                      _c(
                        "span",
                        { attrs: { slot: "prepend" }, slot: "prepend" },
                        [_vm._v(" " + _vm._s(_vm.$L("邀请码")) + " ")]
                      ),
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.loginType == "login" && _vm.codeNeed
                ? _c(
                    "Input",
                    {
                      staticClass: "login-code",
                      attrs: {
                        placeholder: _vm.$L("输入图形验证码"),
                        size: "large",
                      },
                      on: { "on-enter": _vm.onLogin },
                      model: {
                        value: _vm.code,
                        callback: function ($$v) {
                          _vm.code = $$v
                        },
                        expression: "code",
                      },
                    },
                    [
                      _c("Icon", {
                        staticClass: "login-icon",
                        attrs: {
                          slot: "prepend",
                          type: "ios-checkmark-circle-outline",
                        },
                        slot: "prepend",
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "login-code-end",
                          attrs: { slot: "append" },
                          on: { click: _vm.reCode },
                          slot: "append",
                        },
                        [_c("img", { attrs: { src: _vm.codeUrl } })]
                      ),
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "Button",
                {
                  attrs: {
                    type: "primary",
                    loading: _vm.loadIng > 0 || _vm.loginJump,
                    size: "large",
                    long: "",
                  },
                  on: { click: _vm.onLogin },
                },
                [_vm._v(_vm._s(_vm.$L(_vm.loginText)))]
              ),
              _vm._v(" "),
              _vm.loginType == "reg"
                ? _c("div", { staticClass: "login-switch" }, [
                    _vm._v(_vm._s(_vm.$L("已经有帐号？"))),
                    _c(
                      "a",
                      {
                        attrs: { href: "javascript:void(0)" },
                        on: {
                          click: function ($event) {
                            _vm.loginType = "login"
                          },
                        },
                      },
                      [_vm._v(_vm._s(_vm.$L("登录帐号")))]
                    ),
                  ])
                : _c("div", { staticClass: "login-switch" }, [
                    _vm._v(_vm._s(_vm.$L("还没有帐号？"))),
                    _c(
                      "a",
                      {
                        attrs: { href: "javascript:void(0)" },
                        on: {
                          click: function ($event) {
                            _vm.loginType = "reg"
                          },
                        },
                      },
                      [_vm._v(_vm._s(_vm.$L("注册帐号")))]
                    ),
                  ]),
            ],
            1
          ),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "login-bottom" },
          [
            _c(
              "Dropdown",
              { attrs: { trigger: "click", placement: "bottom-start" } },
              [
                _c("div", { staticClass: "login-setting" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.$L("设置")) +
                      "\n                    "
                  ),
                  _c("i", { staticClass: "taskfont" }, [_vm._v("")]),
                ]),
                _vm._v(" "),
                _c(
                  "DropdownMenu",
                  {
                    staticClass: "login-setting-menu",
                    attrs: { slot: "list" },
                    slot: "list",
                  },
                  [
                    _c(
                      "Dropdown",
                      {
                        attrs: { placement: "right-start", transfer: "" },
                        on: { "on-click": _vm.setTheme },
                      },
                      [
                        _c("DropdownItem", [
                          _c(
                            "div",
                            { staticClass: "login-setting-item" },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.$L("主题皮肤")) +
                                  "\n                                "
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
                    _vm._v(" "),
                    _c(
                      "Dropdown",
                      {
                        attrs: { placement: "right-start", transfer: "" },
                        on: { "on-click": _vm.setLanguage },
                      },
                      [
                        _c("DropdownItem", { attrs: { divided: "" } }, [
                          _c(
                            "div",
                            { staticClass: "login-setting-item" },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.currentLanguage) +
                                  "\n                                "
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
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "login-forgot" }, [
              _vm._v(_vm._s(_vm.$L("忘记密码了？"))),
              _c(
                "a",
                {
                  attrs: { href: "javascript:void(0)" },
                  on: { click: _vm.forgotPassword },
                },
                [_vm._v(_vm._s(_vm.$L("重置密码")))]
              ),
            ]),
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