"use strict";
(self["webpackChunkDooTask"] = self["webpackChunkDooTask"] || []).push([["resources_assets_js_pages_manage_setting_system_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/components/SystemColumnTemplate.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/components/SystemColumnTemplate.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SystemColumnTemplate',
  data: function data() {
    return {
      loadIng: 0,
      formDatum: [],
      nullDatum: {
        'name': '',
        'columns': ''
      }
    };
  },
  mounted: function mounted() {
    this.systemSetting();
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(['columnTemplate'])),
  watch: {
    columnTemplate: {
      handler: function handler(data) {
        this.formDatum = $A.cloneJSON(data);

        if (this.formDatum.length === 0) {
          this.addDatum();
        }
      },
      immediate: true
    }
  },
  methods: {
    submitForm: function submitForm() {
      var _this = this;

      this.$refs.formDatum.validate(function (valid) {
        if (valid) {
          _this.systemSetting(true);
        }
      });
    },
    resetForm: function resetForm() {
      this.formDatum = $A.cloneJSON(this.columnTemplate);
    },
    addDatum: function addDatum() {
      this.formDatum.push($A.cloneJSON(this.nullDatum));
    },
    delDatum: function delDatum(key) {
      this.formDatum.splice(key, 1);

      if (this.formDatum.length === 0) {
        this.addDatum();
      }
    },
    systemSetting: function systemSetting(save) {
      var _this2 = this;

      this.loadIng++;
      this.$store.dispatch("call", {
        url: 'system/column/template?type=' + (save ? 'save' : 'get'),
        method: 'post',
        data: {
          list: this.formDatum
        }
      }).then(function (_ref) {
        var data = _ref.data;

        if (save) {
          $A.messageSuccess('修改成功');
        }

        _this2.loadIng--;
        _this2.$store.state.columnTemplate = $A.cloneJSON(data).map(function (item) {
          if ($A.isArray(item.columns)) {
            item.columns = item.columns.join(",");
          }

          return item;
        });
      })["catch"](function (_ref2) {
        var msg = _ref2.msg;

        if (save) {
          $A.modalError(msg);
        }

        _this2.loadIng--;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/components/SystemEmailSetting.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/components/SystemEmailSetting.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "SystemEmailSetting",
  data: function data() {
    return {
      loadIng: 0,
      formData: {
        smtp_server: '',
        port: '',
        account: '',
        password: '',
        reg_verify: 'colse',
        notice: 'open',
        task_remind_hours: 0,
        task_remind_hours2: 0
      },
      ruleData: {}
    };
  },
  mounted: function mounted() {
    this.systemSetting();
  },
  methods: {
    submitForm: function submitForm() {
      var _this = this;

      this.$refs.formData.validate(function (valid) {
        if (valid) {
          _this.systemSetting(true);
        }
      });
    },
    resetForm: function resetForm() {
      this.formData = $A.cloneJSON(this.formDatum_bak);
    },
    systemSetting: function systemSetting(save) {
      var _this2 = this;

      this.loadIng++;
      this.$store.dispatch("call", {
        url: 'system/setting/email?type=' + (save ? 'save' : 'all'),
        data: this.formData
      }).then(function (_ref) {
        var data = _ref.data;

        if (save) {
          $A.messageSuccess('修改成功');
        }

        _this2.loadIng--;
        _this2.formData = data;
        _this2.formDatum_bak = $A.cloneJSON(_this2.formData);
      })["catch"](function (_ref2) {
        var msg = _ref2.msg;

        if (save) {
          $A.modalError(msg);
        }

        _this2.loadIng--;
      });
    },
    hoursChange: function hoursChange(e) {
      var _this3 = this;

      var newNum = e * 10;

      if (newNum % 5 !== 0) {
        setTimeout(function () {
          _this3.formData.task_remind_hours = 1;
        });
        $A.messageError('任务提醒只能是0.5的倍数');
      }
    },
    hours2Change: function hours2Change(e) {
      var _this4 = this;

      var newNum = e * 10;

      if (newNum % 5 !== 0) {
        setTimeout(function () {
          _this4.formData.task_remind_hours2 = 1;
        });
        $A.messageError('第二次任务提醒只能是0.5的倍数');
      }
    },
    checkEmailSend: function checkEmailSend() {
      var _this5 = this;

      $A.modalInput({
        title: "测试邮件",
        placeholder: "请输入收件人地址",
        onOk: function onOk(value, cb) {
          if (!value) {
            cb();
            return;
          }

          if (!$A.isEmail(value)) {
            $A.modalError("请输入正确的收件人地址", 301);
            cb();
            return;
          }

          _this5.$store.dispatch("call", {
            url: 'system/email/check',
            data: Object.assign(_this5.formData, {
              to: value
            })
          }).then(function (_ref3) {
            var msg = _ref3.msg;
            $A.messageSuccess(msg);
            cb();
          })["catch"](function (_ref4) {
            var msg = _ref4.msg;
            $A.modalError(msg, 301);
            cb();
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/components/SystemSetting.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/components/SystemSetting.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SystemSetting',
  data: function data() {
    return {
      loadIng: 0,
      formDatum: {}
    };
  },
  mounted: function mounted() {
    this.systemSetting();
  },
  methods: {
    submitForm: function submitForm() {
      var _this = this;

      this.$refs.formDatum.validate(function (valid) {
        if (valid) {
          _this.systemSetting(true);
        }
      });
    },
    resetForm: function resetForm() {
      this.formDatum = $A.cloneJSON(this.formDatum_bak);
    },
    formArchived: function formArchived(value) {
      this.formDatum = _objectSpread(_objectSpread({}, this.formDatum), {}, {
        auto_archived: value
      });
    },
    systemSetting: function systemSetting(save) {
      var _this2 = this;

      this.loadIng++;
      this.$store.dispatch("call", {
        url: 'system/setting?type=' + (save ? 'save' : 'all'),
        data: this.formDatum
      }).then(function (_ref) {
        var data = _ref.data;

        if (save) {
          $A.messageSuccess('修改成功');
        }

        _this2.loadIng--;
        _this2.formDatum = data;
        _this2.formDatum_bak = $A.cloneJSON(_this2.formDatum);
      })["catch"](function (_ref2) {
        var msg = _ref2.msg;

        if (save) {
          $A.modalError(msg);
        }

        _this2.loadIng--;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/components/SystemTaskPriority.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/components/SystemTaskPriority.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SystemTaskPriority',
  data: function data() {
    return {
      loadIng: 0,
      formDatum: [],
      nullDatum: {
        'name': '',
        'priority': 1,
        'days': 1,
        'color': '#8bcf70'
      }
    };
  },
  mounted: function mounted() {
    this.systemSetting();
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(['taskPriority'])),
  watch: {
    taskPriority: {
      handler: function handler(data) {
        this.formDatum = $A.cloneJSON(data);

        if (this.formDatum.length === 0) {
          this.addDatum();
        }
      },
      immediate: true
    }
  },
  methods: {
    submitForm: function submitForm() {
      var _this = this;

      this.$refs.formDatum.validate(function (valid) {
        if (valid) {
          _this.systemSetting(true);
        }
      });
    },
    resetForm: function resetForm() {
      this.formDatum = $A.cloneJSON(this.taskPriority);
    },
    addDatum: function addDatum() {
      this.formDatum.push($A.cloneJSON(this.nullDatum));
    },
    delDatum: function delDatum(key) {
      this.formDatum.splice(key, 1);

      if (this.formDatum.length === 0) {
        this.addDatum();
      }
    },
    systemSetting: function systemSetting(save) {
      var _this2 = this;

      this.loadIng++;
      this.$store.dispatch("call", {
        url: 'system/priority?type=' + (save ? 'save' : 'get'),
        method: 'post',
        data: {
          list: this.formDatum
        }
      }).then(function (_ref) {
        var data = _ref.data;

        if (save) {
          $A.messageSuccess('修改成功');
        }

        _this2.loadIng--;
        _this2.$store.state.taskPriority = $A.cloneJSON(data);
      })["catch"](function (_ref2) {
        var msg = _ref2.msg;

        if (save) {
          $A.modalError(msg);
        }

        _this2.loadIng--;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/system.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/system.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_SystemSetting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/SystemSetting */ "./resources/assets/js/pages/manage/setting/components/SystemSetting.vue");
/* harmony import */ var _components_SystemTaskPriority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/SystemTaskPriority */ "./resources/assets/js/pages/manage/setting/components/SystemTaskPriority.vue");
/* harmony import */ var _components_SystemColumnTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/SystemColumnTemplate */ "./resources/assets/js/pages/manage/setting/components/SystemColumnTemplate.vue");
/* harmony import */ var _components_SystemEmailSetting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/SystemEmailSetting */ "./resources/assets/js/pages/manage/setting/components/SystemEmailSetting.vue");
//
//
//
//
//
//
//
//
//
//
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
    SystemColumnTemplate: _components_SystemColumnTemplate__WEBPACK_IMPORTED_MODULE_2__["default"],
    SystemTaskPriority: _components_SystemTaskPriority__WEBPACK_IMPORTED_MODULE_1__["default"],
    SystemSetting: _components_SystemSetting__WEBPACK_IMPORTED_MODULE_0__["default"],
    SystemEmailSetting: _components_SystemEmailSetting__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      tabAction: 'setting'
    };
  }
});

/***/ }),

/***/ "./resources/assets/js/pages/manage/setting/components/SystemColumnTemplate.vue":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/pages/manage/setting/components/SystemColumnTemplate.vue ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SystemColumnTemplate_vue_vue_type_template_id_000c08ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SystemColumnTemplate.vue?vue&type=template&id=000c08ec& */ "./resources/assets/js/pages/manage/setting/components/SystemColumnTemplate.vue?vue&type=template&id=000c08ec&");
/* harmony import */ var _SystemColumnTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SystemColumnTemplate.vue?vue&type=script&lang=js& */ "./resources/assets/js/pages/manage/setting/components/SystemColumnTemplate.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SystemColumnTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SystemColumnTemplate_vue_vue_type_template_id_000c08ec___WEBPACK_IMPORTED_MODULE_0__.render,
  _SystemColumnTemplate_vue_vue_type_template_id_000c08ec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/pages/manage/setting/components/SystemColumnTemplate.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/pages/manage/setting/components/SystemEmailSetting.vue":
/*!************************************************************************************!*\
  !*** ./resources/assets/js/pages/manage/setting/components/SystemEmailSetting.vue ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SystemEmailSetting_vue_vue_type_template_id_52e4b5e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SystemEmailSetting.vue?vue&type=template&id=52e4b5e0& */ "./resources/assets/js/pages/manage/setting/components/SystemEmailSetting.vue?vue&type=template&id=52e4b5e0&");
/* harmony import */ var _SystemEmailSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SystemEmailSetting.vue?vue&type=script&lang=js& */ "./resources/assets/js/pages/manage/setting/components/SystemEmailSetting.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SystemEmailSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SystemEmailSetting_vue_vue_type_template_id_52e4b5e0___WEBPACK_IMPORTED_MODULE_0__.render,
  _SystemEmailSetting_vue_vue_type_template_id_52e4b5e0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/pages/manage/setting/components/SystemEmailSetting.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/pages/manage/setting/components/SystemSetting.vue":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/pages/manage/setting/components/SystemSetting.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SystemSetting_vue_vue_type_template_id_47bafdf8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SystemSetting.vue?vue&type=template&id=47bafdf8& */ "./resources/assets/js/pages/manage/setting/components/SystemSetting.vue?vue&type=template&id=47bafdf8&");
/* harmony import */ var _SystemSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SystemSetting.vue?vue&type=script&lang=js& */ "./resources/assets/js/pages/manage/setting/components/SystemSetting.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SystemSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SystemSetting_vue_vue_type_template_id_47bafdf8___WEBPACK_IMPORTED_MODULE_0__.render,
  _SystemSetting_vue_vue_type_template_id_47bafdf8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/pages/manage/setting/components/SystemSetting.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/pages/manage/setting/components/SystemTaskPriority.vue":
/*!************************************************************************************!*\
  !*** ./resources/assets/js/pages/manage/setting/components/SystemTaskPriority.vue ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SystemTaskPriority_vue_vue_type_template_id_240b2476___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SystemTaskPriority.vue?vue&type=template&id=240b2476& */ "./resources/assets/js/pages/manage/setting/components/SystemTaskPriority.vue?vue&type=template&id=240b2476&");
/* harmony import */ var _SystemTaskPriority_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SystemTaskPriority.vue?vue&type=script&lang=js& */ "./resources/assets/js/pages/manage/setting/components/SystemTaskPriority.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SystemTaskPriority_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SystemTaskPriority_vue_vue_type_template_id_240b2476___WEBPACK_IMPORTED_MODULE_0__.render,
  _SystemTaskPriority_vue_vue_type_template_id_240b2476___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/pages/manage/setting/components/SystemTaskPriority.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/pages/manage/setting/system.vue":
/*!*************************************************************!*\
  !*** ./resources/assets/js/pages/manage/setting/system.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _system_vue_vue_type_template_id_6ffc3eeb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./system.vue?vue&type=template&id=6ffc3eeb& */ "./resources/assets/js/pages/manage/setting/system.vue?vue&type=template&id=6ffc3eeb&");
/* harmony import */ var _system_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./system.vue?vue&type=script&lang=js& */ "./resources/assets/js/pages/manage/setting/system.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _system_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _system_vue_vue_type_template_id_6ffc3eeb___WEBPACK_IMPORTED_MODULE_0__.render,
  _system_vue_vue_type_template_id_6ffc3eeb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/pages/manage/setting/system.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/pages/manage/setting/components/SystemColumnTemplate.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/assets/js/pages/manage/setting/components/SystemColumnTemplate.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemColumnTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SystemColumnTemplate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/components/SystemColumnTemplate.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemColumnTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/pages/manage/setting/components/SystemEmailSetting.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/assets/js/pages/manage/setting/components/SystemEmailSetting.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemEmailSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SystemEmailSetting.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/components/SystemEmailSetting.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemEmailSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/pages/manage/setting/components/SystemSetting.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/assets/js/pages/manage/setting/components/SystemSetting.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SystemSetting.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/components/SystemSetting.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/pages/manage/setting/components/SystemTaskPriority.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/assets/js/pages/manage/setting/components/SystemTaskPriority.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemTaskPriority_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SystemTaskPriority.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/components/SystemTaskPriority.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemTaskPriority_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/pages/manage/setting/system.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/pages/manage/setting/system.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_system_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./system.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/system.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_system_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/pages/manage/setting/components/SystemColumnTemplate.vue?vue&type=template&id=000c08ec&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/assets/js/pages/manage/setting/components/SystemColumnTemplate.vue?vue&type=template&id=000c08ec& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemColumnTemplate_vue_vue_type_template_id_000c08ec___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemColumnTemplate_vue_vue_type_template_id_000c08ec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemColumnTemplate_vue_vue_type_template_id_000c08ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SystemColumnTemplate.vue?vue&type=template&id=000c08ec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/components/SystemColumnTemplate.vue?vue&type=template&id=000c08ec&");


/***/ }),

/***/ "./resources/assets/js/pages/manage/setting/components/SystemEmailSetting.vue?vue&type=template&id=52e4b5e0&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/assets/js/pages/manage/setting/components/SystemEmailSetting.vue?vue&type=template&id=52e4b5e0& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemEmailSetting_vue_vue_type_template_id_52e4b5e0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemEmailSetting_vue_vue_type_template_id_52e4b5e0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemEmailSetting_vue_vue_type_template_id_52e4b5e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SystemEmailSetting.vue?vue&type=template&id=52e4b5e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/components/SystemEmailSetting.vue?vue&type=template&id=52e4b5e0&");


/***/ }),

/***/ "./resources/assets/js/pages/manage/setting/components/SystemSetting.vue?vue&type=template&id=47bafdf8&":
/*!**************************************************************************************************************!*\
  !*** ./resources/assets/js/pages/manage/setting/components/SystemSetting.vue?vue&type=template&id=47bafdf8& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetting_vue_vue_type_template_id_47bafdf8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetting_vue_vue_type_template_id_47bafdf8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemSetting_vue_vue_type_template_id_47bafdf8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SystemSetting.vue?vue&type=template&id=47bafdf8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/components/SystemSetting.vue?vue&type=template&id=47bafdf8&");


/***/ }),

/***/ "./resources/assets/js/pages/manage/setting/components/SystemTaskPriority.vue?vue&type=template&id=240b2476&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/assets/js/pages/manage/setting/components/SystemTaskPriority.vue?vue&type=template&id=240b2476& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemTaskPriority_vue_vue_type_template_id_240b2476___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemTaskPriority_vue_vue_type_template_id_240b2476___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemTaskPriority_vue_vue_type_template_id_240b2476___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SystemTaskPriority.vue?vue&type=template&id=240b2476& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/components/SystemTaskPriority.vue?vue&type=template&id=240b2476&");


/***/ }),

/***/ "./resources/assets/js/pages/manage/setting/system.vue?vue&type=template&id=6ffc3eeb&":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/pages/manage/setting/system.vue?vue&type=template&id=6ffc3eeb& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_system_vue_vue_type_template_id_6ffc3eeb___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_system_vue_vue_type_template_id_6ffc3eeb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_system_vue_vue_type_template_id_6ffc3eeb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./system.vue?vue&type=template&id=6ffc3eeb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/system.vue?vue&type=template&id=6ffc3eeb&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/components/SystemColumnTemplate.vue?vue&type=template&id=000c08ec&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/components/SystemColumnTemplate.vue?vue&type=template&id=000c08ec& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "setting-component-item" },
    [
      _c(
        "Form",
        {
          ref: "formDatum",
          attrs: { "label-width": "auto" },
          nativeOn: {
            submit: function ($event) {
              $event.preventDefault()
            },
          },
        },
        [
          _c(
            "Row",
            { staticClass: "setting-template" },
            [
              _c("Col", { attrs: { span: "8" } }, [
                _vm._v(_vm._s(_vm.$L("名称"))),
              ]),
              _vm._v(" "),
              _c("Col", { attrs: { span: "16" } }, [
                _vm._v(_vm._s(_vm.$L("项目模板"))),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _vm._l(_vm.formDatum, function (item, key) {
            return _c(
              "Row",
              { key: key, staticClass: "setting-template" },
              [
                _c(
                  "Col",
                  { attrs: { span: "8" } },
                  [
                    _c("Input", {
                      attrs: {
                        maxlength: 20,
                        placeholder: _vm.$L("请输入名称"),
                        clearable: "",
                      },
                      on: {
                        "on-clear": function ($event) {
                          return _vm.delDatum(key)
                        },
                      },
                      model: {
                        value: item.name,
                        callback: function ($$v) {
                          _vm.$set(item, "name", $$v)
                        },
                        expression: "item.name",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "Col",
                  { attrs: { span: "16" } },
                  [
                    _c("TagInput", {
                      model: {
                        value: item.columns,
                        callback: function ($$v) {
                          _vm.$set(item, "columns", $$v)
                        },
                        expression: "item.columns",
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            )
          }),
          _vm._v(" "),
          _c(
            "Button",
            {
              attrs: { type: "default", icon: "md-add" },
              on: { click: _vm.addDatum },
            },
            [_vm._v(_vm._s(_vm.$L("添加模板")))]
          ),
        ],
        2
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/components/SystemEmailSetting.vue?vue&type=template&id=52e4b5e0&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/components/SystemEmailSetting.vue?vue&type=template&id=52e4b5e0& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "setting-component-item" },
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
            "div",
            { staticClass: "email-setting-box" },
            [
              _c("h3", [_vm._v(_vm._s(_vm.$L("邮箱服务器设置")))]),
              _vm._v(" "),
              _c(
                "FormItem",
                { attrs: { label: _vm.$L("SMTP服务器"), prop: "smtp_server" } },
                [
                  _c("Input", {
                    model: {
                      value: _vm.formData.smtp_server,
                      callback: function ($$v) {
                        _vm.$set(_vm.formData, "smtp_server", $$v)
                      },
                      expression: "formData.smtp_server",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                { attrs: { label: _vm.$L("端口"), prop: "port" } },
                [
                  _c("Input", {
                    attrs: { maxlength: 20 },
                    model: {
                      value: _vm.formData.port,
                      callback: function ($$v) {
                        _vm.$set(_vm.formData, "port", $$v)
                      },
                      expression: "formData.port",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                { attrs: { label: _vm.$L("账号"), prop: "account" } },
                [
                  _c("Input", {
                    attrs: { maxlength: 128 },
                    model: {
                      value: _vm.formData.account,
                      callback: function ($$v) {
                        _vm.$set(_vm.formData, "account", $$v)
                      },
                      expression: "formData.account",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                { attrs: { label: _vm.$L("密码"), prop: "password" } },
                [
                  _c("Input", {
                    attrs: { maxlength: 128, type: "password" },
                    model: {
                      value: _vm.formData.password,
                      callback: function ($$v) {
                        _vm.$set(_vm.formData, "password", $$v)
                      },
                      expression: "formData.password",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                [
                  _c("Button", { on: { click: _vm.checkEmailSend } }, [
                    _vm._v(_vm._s(_vm.$L("邮件发送测试"))),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "email-setting-placeholder" }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "email-setting-box" },
            [
              _c("h3", [_vm._v(_vm._s(_vm.$L("邮件通知设置")))]),
              _vm._v(" "),
              _c(
                "FormItem",
                {
                  attrs: { label: _vm.$L("开启注册验证"), prop: "reg_verify" },
                },
                [
                  _c(
                    "RadioGroup",
                    {
                      model: {
                        value: _vm.formData.reg_verify,
                        callback: function ($$v) {
                          _vm.$set(_vm.formData, "reg_verify", $$v)
                        },
                        expression: "formData.reg_verify",
                      },
                    },
                    [
                      _c("Radio", { attrs: { label: "open" } }, [
                        _vm._v(_vm._s(_vm.$L("开启"))),
                      ]),
                      _vm._v(" "),
                      _c("Radio", { attrs: { label: "close" } }, [
                        _vm._v(_vm._s(_vm.$L("关闭"))),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.formData.reg_verify == "open"
                    ? _c("div", { staticClass: "form-tip" }, [
                        _vm._v(_vm._s(_vm.$L("开启后账号需验证通过才可登录"))),
                      ])
                    : _vm._e(),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                { attrs: { label: _vm.$L("开启通知"), prop: "notice" } },
                [
                  _c(
                    "RadioGroup",
                    {
                      model: {
                        value: _vm.formData.notice,
                        callback: function ($$v) {
                          _vm.$set(_vm.formData, "notice", $$v)
                        },
                        expression: "formData.notice",
                      },
                    },
                    [
                      _c("Radio", { attrs: { label: "open" } }, [
                        _vm._v(_vm._s(_vm.$L("开启"))),
                      ]),
                      _vm._v(" "),
                      _c("Radio", { attrs: { label: "close" } }, [
                        _vm._v(_vm._s(_vm.$L("关闭"))),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _vm.formData.notice == "open"
                ? [
                    _c(
                      "FormItem",
                      {
                        attrs: {
                          label: _vm.$L("任务提醒:"),
                          prop: "task_remind_hours",
                        },
                      },
                      [
                        _c("label", [_vm._v(_vm._s(_vm.$L("到期前")))]),
                        _vm._v(" "),
                        _c("InputNumber", {
                          attrs: { min: 0.5, step: 0.5 },
                          on: { "on-change": _vm.hoursChange },
                          model: {
                            value: _vm.formData.task_remind_hours,
                            callback: function ($$v) {
                              _vm.$set(_vm.formData, "task_remind_hours", $$v)
                            },
                            expression: "formData.task_remind_hours",
                          },
                        }),
                        _vm._v(" "),
                        _c("label", [_vm._v(_vm._s(_vm.$L("小时")))]),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "FormItem",
                      {
                        attrs: {
                          label: _vm.$L("第二次任务提醒:"),
                          prop: "task_remind_hours2",
                        },
                      },
                      [
                        _c("label", [_vm._v(_vm._s(_vm.$L("到期后")))]),
                        _vm._v(" "),
                        _c("InputNumber", {
                          attrs: { min: 0.5, step: 0.5 },
                          on: { "on-change": _vm.hours2Change },
                          model: {
                            value: _vm.formData.task_remind_hours2,
                            callback: function ($$v) {
                              _vm.$set(_vm.formData, "task_remind_hours2", $$v)
                            },
                            expression: "formData.task_remind_hours2",
                          },
                        }),
                        _vm._v(" "),
                        _c("label", [_vm._v(_vm._s(_vm.$L("小时")))]),
                      ],
                      1
                    ),
                  ]
                : _vm._e(),
            ],
            2
          ),
        ]
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/components/SystemSetting.vue?vue&type=template&id=47bafdf8&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/components/SystemSetting.vue?vue&type=template&id=47bafdf8& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "setting-component-item" },
    [
      _c(
        "Form",
        {
          ref: "formDatum",
          attrs: { model: _vm.formDatum, "label-width": "auto" },
          nativeOn: {
            submit: function ($event) {
              $event.preventDefault()
            },
          },
        },
        [
          _c(
            "FormItem",
            { attrs: { label: _vm.$L("允许注册"), prop: "reg" } },
            [
              _c(
                "RadioGroup",
                {
                  model: {
                    value: _vm.formDatum.reg,
                    callback: function ($$v) {
                      _vm.$set(_vm.formDatum, "reg", $$v)
                    },
                    expression: "formDatum.reg",
                  },
                },
                [
                  _c("Radio", { attrs: { label: "open" } }, [
                    _vm._v(_vm._s(_vm.$L("允许"))),
                  ]),
                  _vm._v(" "),
                  _c("Radio", { attrs: { label: "invite" } }, [
                    _vm._v(_vm._s(_vm.$L("邀请码"))),
                  ]),
                  _vm._v(" "),
                  _c("Radio", { attrs: { label: "close" } }, [
                    _vm._v(_vm._s(_vm.$L("禁止"))),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _vm.formDatum.reg == "open"
                ? _c("div", { staticClass: "form-tip" }, [
                    _vm._v(_vm._s(_vm.$L("允许：开放注册功能。"))),
                  ])
                : _vm.formDatum.reg == "invite"
                ? [
                    _c("div", { staticClass: "form-tip" }, [
                      _vm._v(
                        _vm._s(_vm.$L("邀请码：注册时需填写下方邀请码。"))
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "Input",
                      {
                        staticStyle: { width: "200px", "margin-top": "6px" },
                        model: {
                          value: _vm.formDatum.reg_invite,
                          callback: function ($$v) {
                            _vm.$set(_vm.formDatum, "reg_invite", $$v)
                          },
                          expression: "formDatum.reg_invite",
                        },
                      },
                      [
                        _c(
                          "span",
                          { attrs: { slot: "prepend" }, slot: "prepend" },
                          [_vm._v(_vm._s(_vm.$L("邀请码")))]
                        ),
                      ]
                    ),
                  ]
                : _vm._e(),
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "FormItem",
            { attrs: { label: _vm.$L("登录验证码"), prop: "loginCode" } },
            [
              _c(
                "RadioGroup",
                {
                  model: {
                    value: _vm.formDatum.login_code,
                    callback: function ($$v) {
                      _vm.$set(_vm.formDatum, "login_code", $$v)
                    },
                    expression: "formDatum.login_code",
                  },
                },
                [
                  _c("Radio", { attrs: { label: "auto" } }, [
                    _vm._v(_vm._s(_vm.$L("自动"))),
                  ]),
                  _vm._v(" "),
                  _c("Radio", { attrs: { label: "open" } }, [
                    _vm._v(_vm._s(_vm.$L("开启"))),
                  ]),
                  _vm._v(" "),
                  _c("Radio", { attrs: { label: "close" } }, [
                    _vm._v(_vm._s(_vm.$L("关闭"))),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _vm.formDatum.login_code == "auto"
                ? _c("div", { staticClass: "form-tip" }, [
                    _vm._v(
                      _vm._s(_vm.$L("自动：密码输入错误后必须添加验证码。"))
                    ),
                  ])
                : _vm._e(),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "FormItem",
            { attrs: { label: _vm.$L("密码策略"), prop: "passwordPolicy" } },
            [
              _c(
                "RadioGroup",
                {
                  model: {
                    value: _vm.formDatum.password_policy,
                    callback: function ($$v) {
                      _vm.$set(_vm.formDatum, "password_policy", $$v)
                    },
                    expression: "formDatum.password_policy",
                  },
                },
                [
                  _c("Radio", { attrs: { label: "simple" } }, [
                    _vm._v(_vm._s(_vm.$L("简单"))),
                  ]),
                  _vm._v(" "),
                  _c("Radio", { attrs: { label: "complex" } }, [
                    _vm._v(_vm._s(_vm.$L("复杂"))),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _vm.formDatum.password_policy == "simple"
                ? _c("div", { staticClass: "form-tip" }, [
                    _vm._v(_vm._s(_vm.$L("简单：大于或等于6个字符。"))),
                  ])
                : _vm.formDatum.password_policy == "complex"
                ? _c("div", { staticClass: "form-tip" }, [
                    _vm._v(
                      _vm._s(
                        _vm.$L(
                          "复杂：大于或等于6个字符，包含数字、字母大小写或者特殊字符。"
                        )
                      )
                    ),
                  ])
                : _vm._e(),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "FormItem",
            { attrs: { label: _vm.$L("邀请项目"), prop: "projectInvite" } },
            [
              _c(
                "RadioGroup",
                {
                  model: {
                    value: _vm.formDatum.project_invite,
                    callback: function ($$v) {
                      _vm.$set(_vm.formDatum, "project_invite", $$v)
                    },
                    expression: "formDatum.project_invite",
                  },
                },
                [
                  _c("Radio", { attrs: { label: "open" } }, [
                    _vm._v(_vm._s(_vm.$L("开启"))),
                  ]),
                  _vm._v(" "),
                  _c("Radio", { attrs: { label: "close" } }, [
                    _vm._v(_vm._s(_vm.$L("关闭"))),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _vm.formDatum.project_invite == "open"
                ? _c("div", { staticClass: "form-tip" }, [
                    _vm._v(
                      _vm._s(
                        _vm.$L("开启：项目管理员可生成链接邀请成员加入项目。")
                      )
                    ),
                  ])
                : _vm._e(),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "FormItem",
            { attrs: { label: _vm.$L("聊天昵称"), prop: "chatNickname" } },
            [
              _c(
                "RadioGroup",
                {
                  model: {
                    value: _vm.formDatum.chat_nickname,
                    callback: function ($$v) {
                      _vm.$set(_vm.formDatum, "chat_nickname", $$v)
                    },
                    expression: "formDatum.chat_nickname",
                  },
                },
                [
                  _c("Radio", { attrs: { label: "optional" } }, [
                    _vm._v(_vm._s(_vm.$L("可选"))),
                  ]),
                  _vm._v(" "),
                  _c("Radio", { attrs: { label: "required" } }, [
                    _vm._v(_vm._s(_vm.$L("必填"))),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _vm.formDatum.chat_nickname == "required"
                ? _c("div", { staticClass: "form-tip" }, [
                    _vm._v(
                      _vm._s(_vm.$L("必填：发送聊天内容前必须设置昵称。"))
                    ),
                  ])
                : _c("div", { staticClass: "form-tip" }, [
                    _vm._v(
                      _vm._s(_vm.$L("如果必填，发送聊天前必须设置昵称。"))
                    ),
                  ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "FormItem",
            { attrs: { label: _vm.$L("自动归档任务"), prop: "autoArchived" } },
            [
              _c(
                "RadioGroup",
                {
                  attrs: { value: _vm.formDatum.auto_archived },
                  on: { "on-change": _vm.formArchived },
                },
                [
                  _c("Radio", { attrs: { label: "open" } }, [
                    _vm._v(_vm._s(_vm.$L("开启"))),
                  ]),
                  _vm._v(" "),
                  _c("Radio", { attrs: { label: "close" } }, [
                    _vm._v(_vm._s(_vm.$L("关闭"))),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "form-tip" }, [
                _vm._v(_vm._s(_vm.$L("任务完成后自动归档。"))),
              ]),
              _vm._v(" "),
              _vm.formDatum.auto_archived == "open"
                ? _c("ETooltip", { attrs: { placement: "right" } }, [
                    _c(
                      "div",
                      { staticClass: "setting-auto-day" },
                      [
                        _c(
                          "Input",
                          {
                            attrs: { type: "number" },
                            model: {
                              value: _vm.formDatum.archived_day,
                              callback: function ($$v) {
                                _vm.$set(_vm.formDatum, "archived_day", $$v)
                              },
                              expression: "formDatum.archived_day",
                            },
                          },
                          [
                            _c(
                              "span",
                              { attrs: { slot: "append" }, slot: "append" },
                              [_vm._v(_vm._s(_vm.$L("天")))]
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { attrs: { slot: "content" }, slot: "content" }, [
                      _vm._v(
                        _vm._s(
                          _vm.$L(
                            "任务完成 % 天后自动归档。",
                            _vm.formDatum.archived_day
                          )
                        )
                      ),
                    ]),
                  ])
                : _vm._e(),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "FormItem",
            { attrs: { label: _vm.$L("是否启动首页"), prop: "startHome" } },
            [
              _c(
                "RadioGroup",
                {
                  model: {
                    value: _vm.formDatum.start_home,
                    callback: function ($$v) {
                      _vm.$set(_vm.formDatum, "start_home", $$v)
                    },
                    expression: "formDatum.start_home",
                  },
                },
                [
                  _c("Radio", { attrs: { label: "open" } }, [
                    _vm._v(_vm._s(_vm.$L("开启"))),
                  ]),
                  _vm._v(" "),
                  _c("Radio", { attrs: { label: "close" } }, [
                    _vm._v(_vm._s(_vm.$L("关闭"))),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "form-tip" }, [
                _vm._v(_vm._s(_vm.$L("仅支持网页版。"))),
              ]),
              _vm._v(" "),
              _vm.formDatum.start_home == "open"
                ? _c("Input", {
                    staticStyle: { margin: "8px 0 -8px" },
                    attrs: {
                      type: "textarea",
                      rows: 2,
                      autosize: { minRows: 2, maxRows: 8 },
                      placeholder: _vm.$L("首页底部：首页底部网站备案号等信息"),
                    },
                    model: {
                      value: _vm.formDatum.home_footer,
                      callback: function ($$v) {
                        _vm.$set(_vm.formDatum, "home_footer", $$v)
                      },
                      expression: "formDatum.home_footer",
                    },
                  })
                : _vm._e(),
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/components/SystemTaskPriority.vue?vue&type=template&id=240b2476&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/components/SystemTaskPriority.vue?vue&type=template&id=240b2476& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "setting-component-item" },
    [
      _c(
        "Form",
        {
          ref: "formDatum",
          attrs: { "label-width": "auto" },
          nativeOn: {
            submit: function ($event) {
              $event.preventDefault()
            },
          },
        },
        [
          _c(
            "Row",
            { staticClass: "setting-color" },
            [
              _c("Col", { attrs: { span: "12" } }, [
                _vm._v(_vm._s(_vm.$L("名称"))),
              ]),
              _vm._v(" "),
              _c(
                "Col",
                { attrs: { span: "4" } },
                [
                  _c(
                    "ETooltip",
                    {
                      attrs: {
                        content: _vm.$L("数值越小级别越高"),
                        "max-width": "auto",
                        placement: "top",
                        transfer: "",
                      },
                    },
                    [
                      _c(
                        "div",
                        [
                          _c("Icon", {
                            staticClass: "information",
                            attrs: { type: "ios-information-circle-outline" },
                          }),
                          _vm._v(" " + _vm._s(_vm.$L("级别"))),
                        ],
                        1
                      ),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "Col",
                { attrs: { span: "4" } },
                [
                  _c(
                    "ETooltip",
                    {
                      attrs: {
                        content: _vm.$L("任务完成时间"),
                        "max-width": "auto",
                        placement: "top",
                        transfer: "",
                      },
                    },
                    [
                      _c(
                        "div",
                        [
                          _c("Icon", {
                            staticClass: "information",
                            attrs: { type: "ios-information-circle-outline" },
                          }),
                          _vm._v(" " + _vm._s(_vm.$L("天数"))),
                        ],
                        1
                      ),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("Col", { attrs: { span: "4" } }, [
                _vm._v(_vm._s(_vm.$L("颜色"))),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _vm._l(_vm.formDatum, function (item, key) {
            return _c(
              "Row",
              { key: key, staticClass: "setting-color" },
              [
                _c(
                  "Col",
                  { attrs: { span: "12" } },
                  [
                    _c("Input", {
                      attrs: {
                        maxlength: 20,
                        placeholder: _vm.$L("请输入名称"),
                        clearable: "",
                      },
                      on: {
                        "on-clear": function ($event) {
                          return _vm.delDatum(key)
                        },
                      },
                      model: {
                        value: item.name,
                        callback: function ($$v) {
                          _vm.$set(item, "name", $$v)
                        },
                        expression: "item.name",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "Col",
                  { attrs: { span: "4" } },
                  [
                    _c("Input", {
                      attrs: { type: "number" },
                      model: {
                        value: item.priority,
                        callback: function ($$v) {
                          _vm.$set(item, "priority", $$v)
                        },
                        expression: "item.priority",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "Col",
                  { attrs: { span: "4" } },
                  [
                    _c("Input", {
                      attrs: { type: "number" },
                      model: {
                        value: item.days,
                        callback: function ($$v) {
                          _vm.$set(item, "days", $$v)
                        },
                        expression: "item.days",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "Col",
                  { attrs: { span: "4" } },
                  [
                    _c("ColorPicker", {
                      attrs: { recommend: "", transfer: "" },
                      model: {
                        value: item.color,
                        callback: function ($$v) {
                          _vm.$set(item, "color", $$v)
                        },
                        expression: "item.color",
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            )
          }),
          _vm._v(" "),
          _c(
            "Button",
            {
              attrs: { type: "default", icon: "md-add" },
              on: { click: _vm.addDatum },
            },
            [_vm._v(_vm._s(_vm.$L("添加优先级")))]
          ),
        ],
        2
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/system.vue?vue&type=template&id=6ffc3eeb&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/setting/system.vue?vue&type=template&id=6ffc3eeb& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
        "Tabs",
        {
          model: {
            value: _vm.tabAction,
            callback: function ($$v) {
              _vm.tabAction = $$v
            },
            expression: "tabAction",
          },
        },
        [
          _c(
            "TabPane",
            { attrs: { label: _vm.$L("系统设置"), name: "setting" } },
            [_c("SystemSetting")],
            1
          ),
          _vm._v(" "),
          _c(
            "TabPane",
            { attrs: { label: _vm.$L("任务优先级"), name: "taskPriority" } },
            [_c("SystemTaskPriority")],
            1
          ),
          _vm._v(" "),
          _c(
            "TabPane",
            { attrs: { label: _vm.$L("项目模板"), name: "columnTemplate" } },
            [_c("SystemColumnTemplate")],
            1
          ),
          _vm._v(" "),
          _c(
            "TabPane",
            { attrs: { label: _vm.$L("邮件设置"), name: "emailSetting" } },
            [_c("SystemEmailSetting")],
            1
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