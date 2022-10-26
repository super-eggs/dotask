"use strict";
(self["webpackChunkDooTask"] = self["webpackChunkDooTask"] || []).push([["resources_assets_js_pages_single_reportEdit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/UserInput.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/UserInput.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var le5le_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! le5le-store */ "./node_modules/le5le-store/index.js");
/* harmony import */ var le5le_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(le5le_store__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'UserInput',
  props: {
    value: {
      type: [String, Number, Array],
      "default": ''
    },
    uncancelable: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    disabledChoice: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    placeholder: {
      "default": ''
    },
    size: {
      "default": 'default'
    },
    transfer: {
      type: Boolean,
      "default": true
    },
    multipleMax: {
      type: Number
    },
    maxHiddenInput: {
      type: Boolean,
      "default": true
    },
    projectId: {
      type: Number,
      "default": 0
    },
    noProjectId: {
      type: Number,
      "default": 0
    }
  },
  data: function data() {
    return {
      loadIng: 0,
      selects: [],
      list: [],
      searchKey: null,
      searchHistory: [],
      subscribe: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.subscribe = le5le_store__WEBPACK_IMPORTED_MODULE_0__.Store.subscribe('cacheUserActive', function (data) {
      var index = _this.list.findIndex(function (_ref) {
        var userid = _ref.userid;
        return userid == data.userid;
      });

      if (index > -1) {
        _this.$set(_this.list, index, Object.assign({}, _this.list[index], data));

        _this.handleSelectData();
      }
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (this.subscribe) {
      this.subscribe.unsubscribe();
      this.subscribe = null;
    }
  },
  computed: {
    maxHiddenClass: function maxHiddenClass() {
      var multipleMax = this.multipleMax,
          maxHiddenInput = this.maxHiddenInput,
          selects = this.selects;

      if (multipleMax && maxHiddenInput) {
        if (selects.length >= multipleMax) {
          return 'hidden-input';
        }
      }

      return '';
    }
  },
  watch: {
    value: {
      handler: function handler() {
        var _this2 = this;

        var tmpId = this._tmpId = $A.randomString(6);
        setTimeout(function () {
          if (tmpId === _this2._tmpId) _this2.valueChange();
        }, 10);
      },
      immediate: true
    },
    selects: function selects(val) {
      this.$emit('input', val);
    }
  },
  methods: {
    searchUser: function searchUser(key) {
      var _this3 = this;

      if (typeof key !== "string") key = "";
      this.searchKey = key; //

      var history = this.searchHistory.find(function (item) {
        return item.key == key;
      });
      if (history) this.list = history.data; //

      if (!history) this.loadIng++;
      setTimeout(function () {
        if (_this3.searchKey != key) {
          if (!history) _this3.loadIng--;
          return;
        }

        _this3.$store.dispatch("call", {
          url: 'users/search',
          data: {
            keys: {
              key: key,
              project_id: _this3.projectId,
              no_project_id: _this3.noProjectId
            },
            take: 30
          }
        }).then(function (_ref2) {
          var data = _ref2.data;
          if (!history) _this3.loadIng--;
          _this3.list = data; //

          var index = _this3.searchHistory.findIndex(function (item) {
            return item.key == key;
          });

          var tmpData = {
            key: key,
            data: data,
            time: $A.Time()
          };

          if (index > -1) {
            _this3.searchHistory.splice(index, 1, tmpData);
          } else {
            _this3.searchHistory.push(tmpData);
          }
        })["catch"](function (_ref3) {
          var msg = _ref3.msg;
          if (!history) _this3.loadIng--;
          _this3.list = [];
          $A.messageWarning(msg);
        });
      }, this.searchHistory.length > 0 ? 300 : 0);
    },
    isDisabled: function isDisabled(userid) {
      if (this.disabledChoice.length === 0) {
        return false;
      }

      return this.disabledChoice.includes(userid);
    },
    openChange: function openChange(show) {
      if (show) {
        this.$nextTick(this.searchUser);
      }
    },
    remoteMethod: function remoteMethod() {//
    },
    valueChange: function valueChange() {
      var _this4 = this;

      if (this.selects == this.value) {
        return;
      }

      if ($A.isArray(this.value)) {
        this.selects = $A.cloneJSON(this.value);
      } else if (this.value) {
        this.selects = [this.value];
      } else {
        this.selects = [];
      }

      this.selects.some(function (userid) {
        if (!_this4.list.find(function (item) {
          return item.userid == userid;
        })) {
          _this4.list.push({
            userid: userid,
            nickname: userid
          });

          _this4.$store.dispatch("getUserBasic", {
            userid: userid
          });
        }
      });
    },
    handleSelectData: function handleSelectData() {
      var _this5 = this;

      this.__handleSelectTimeout && clearTimeout(this.__handleSelectTimeout);
      this.__handleSelectTimeout = setTimeout(function () {
        if (!_this5.$refs.select) {
          return;
        }

        var list = _this5.$refs.select.getValue();

        list && list.some(function (option) {
          var data = _this5.list.find(function (_ref4) {
            var userid = _ref4.userid;
            return userid == option.value;
          });

          if (data) {
            _this5.$set(option, 'label', data.nickname);

            _this5.$set(option, 'avatar', data.userimg);
          }
        });
      }, 100);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/components/ReportEdit.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/components/ReportEdit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_UserInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/UserInput */ "./resources/assets/js/components/UserInput.vue");
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



var TEditor = function TEditor() {
  return __webpack_require__.e(/*! import() */ "resources_assets_js_components_TEditor_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../../components/TEditor */ "./resources/assets/js/components/TEditor.vue"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ReportEdit",
  components: {
    TEditor: TEditor,
    UserInput: _components_UserInput__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    id: {
      "default": 0
    }
  },
  data: function data() {
    return {
      reportData: {
        title: "",
        content: "",
        type: "weekly",
        receive: [],
        id: 0,
        offset: 0 // 以当前日期为基础的周期偏移量。例如选择了上一周那么就是 -1，上一天同理。

      },
      prevCycleText: this.$L("上一周"),
      nextCycleText: this.$L("下一周")
    };
  },
  watch: {
    id: {
      handler: function handler(val) {
        if (val > 0) {
          this.getDetail(val);
        } else {
          this.reportData.offset = 0;
          this.reportData.type = "weekly";
          this.reportData.receive = [];
          this.getTemplate();
        }
      },
      immediate: true
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(["userId"])),
  mounted: function mounted() {//
  },
  methods: {
    handleSubmit: function handleSubmit() {
      var _this = this;

      if (this.reportData.receive.length === 0) {
        $A.messageError(this.$L("请选择接收人"));
        return false;
      }

      if (this.id === 0 && this.reportData.id > 0) {
        $A.modalConfirm({
          title: '覆盖提交',
          content: '你已提交过此日期的报告，是否覆盖提交？',
          loading: true,
          onOk: function onOk() {
            _this.doSubmit(true);
          }
        });
      } else {
        this.doSubmit();
      }
    },
    doSubmit: function doSubmit() {
      var _this2 = this;

      var isModal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.$store.dispatch("call", {
        url: 'report/store',
        data: this.reportData,
        method: 'post'
      }).then(function (_ref) {
        var data = _ref.data,
            msg = _ref.msg;
        isModal && _this2.$Modal.remove(); // data 结果数据

        _this2.reportData.offset = 0;
        _this2.reportData.type = "weekly";
        _this2.reportData.receive = [];

        _this2.getTemplate(); // msg 结果描述


        $A.messageSuccess(msg);

        _this2.$emit("saveSuccess", data);
      })["catch"](function (_ref2) {
        var msg = _ref2.msg;
        isModal && _this2.$Modal.remove(); // msg 错误原因

        $A.messageError(msg);
      });
    },
    getTemplate: function getTemplate() {
      var _this3 = this;

      this.$store.dispatch("call", {
        url: 'report/template',
        data: {
          type: this.reportData.type,
          offset: this.reportData.offset,
          id: this.id
        }
      }).then(function (_ref3) {
        var data = _ref3.data;

        // data 结果数据
        if (data.id) {
          _this3.reportData.id = data.id;

          if (_this3.id > 0) {
            _this3.getDetail(data.id);
          } else {
            _this3.reportData.title = data.title;
            _this3.reportData.content = data.content;
          }
        } else {
          _this3.reportData.id = 0;
          _this3.reportData.title = data.title;
          _this3.reportData.content = data.content;
        }
      })["catch"](function (_ref4) {
        var msg = _ref4.msg;
        // msg 错误原因
        $A.messageError(msg);
      });
    },
    typeChange: function typeChange(value) {
      // 切换汇报类型后偏移量归零
      this.reportData.offset = 0;

      if (value === "weekly") {
        this.prevCycleText = this.$L("上一周");
        this.nextCycleText = this.$L("下一周");
      } else {
        this.prevCycleText = this.$L("上一天");
        this.nextCycleText = this.$L("下一天");
      }

      this.getTemplate();
    },
    getDetail: function getDetail(reportId) {
      var _this4 = this;

      this.$store.dispatch("call", {
        url: 'report/detail',
        data: {
          id: reportId
        }
      }).then(function (_ref5) {
        var data = _ref5.data;
        // data 结果数据
        _this4.reportData.title = data.title;
        _this4.reportData.content = data.content;
        _this4.reportData.receive = data.receives_user.map(function (_ref6) {
          var userid = _ref6.userid;
          return userid;
        });
        _this4.reportData.type = data.type_val;
        _this4.reportData.id = reportId;
      })["catch"](function (_ref7) {
        var msg = _ref7.msg;
        // msg 错误原因
        $A.messageError(msg);
      });
    },
    prevCycle: function prevCycle() {
      this.reportData.offset -= 1;
      this.reReportData();
      this.getTemplate();
    },
    nextCycle: function nextCycle() {
      // 周期偏移量不允许大于0
      if (this.reportData.offset < 0) {
        this.reportData.offset += 1;
      }

      this.reReportData();
      this.getTemplate();
    },
    // 获取上一次接收人
    getLastSubmitter: function getLastSubmitter() {
      var _this5 = this;

      this.$store.dispatch("call", {
        url: 'report/last_submitter'
      }).then(function (_ref8) {
        var data = _ref8.data;
        _this5.reportData.receive = data;
      })["catch"](function (_ref9) {
        var msg = _ref9.msg;
        $A.messageError(msg);
      });
    },
    reReportData: function reReportData() {
      this.reportData.title = "";
      this.reportData.content = "";
      this.reportData.receive = [];
      this.reportData.id = 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/single/reportEdit.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/single/reportEdit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _manage_components_ReportEdit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../manage/components/ReportEdit */ "./resources/assets/js/pages/manage/components/ReportEdit.vue");
//
//
//
//
//
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
    ReportEdit: _manage_components_ReportEdit__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      detail: {}
    };
  },
  computed: {
    id: function id() {
      return $A.runNum(this.detail.id || this.$route.params.id);
    },
    title: function title() {
      return this.$L(this.id > 0 ? '修改报告' : '新增报告');
    }
  },
  methods: {
    saveSuccess: function saveSuccess(data) {
      this.detail = data;

      if (this.$isSubElectron) {
        $A.Electron.sendMessage('sendForwardMain', {
          channel: 'reportSaveSuccess',
          data: data
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/single/reportEdit.vue?vue&type=style&index=0&id=13b0ea90&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/single/reportEdit.vue?vue&type=style&index=0&id=13b0ea90&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".electron-report[data-v-13b0ea90] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/single/reportEdit.vue?vue&type=style&index=0&id=13b0ea90&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/single/reportEdit.vue?vue&type=style&index=0&id=13b0ea90&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_reportEdit_vue_vue_type_style_index_0_id_13b0ea90_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./reportEdit.vue?vue&type=style&index=0&id=13b0ea90&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/single/reportEdit.vue?vue&type=style&index=0&id=13b0ea90&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_reportEdit_vue_vue_type_style_index_0_id_13b0ea90_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_reportEdit_vue_vue_type_style_index_0_id_13b0ea90_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/assets/js/components/UserInput.vue":
/*!******************************************************!*\
  !*** ./resources/assets/js/components/UserInput.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserInput_vue_vue_type_template_id_23e06b18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserInput.vue?vue&type=template&id=23e06b18& */ "./resources/assets/js/components/UserInput.vue?vue&type=template&id=23e06b18&");
/* harmony import */ var _UserInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserInput.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/UserInput.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserInput_vue_vue_type_template_id_23e06b18___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserInput_vue_vue_type_template_id_23e06b18___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/UserInput.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/pages/manage/components/ReportEdit.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/js/pages/manage/components/ReportEdit.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ReportEdit_vue_vue_type_template_id_5584050a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportEdit.vue?vue&type=template&id=5584050a& */ "./resources/assets/js/pages/manage/components/ReportEdit.vue?vue&type=template&id=5584050a&");
/* harmony import */ var _ReportEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportEdit.vue?vue&type=script&lang=js& */ "./resources/assets/js/pages/manage/components/ReportEdit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReportEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReportEdit_vue_vue_type_template_id_5584050a___WEBPACK_IMPORTED_MODULE_0__.render,
  _ReportEdit_vue_vue_type_template_id_5584050a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/pages/manage/components/ReportEdit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/pages/single/reportEdit.vue":
/*!*********************************************************!*\
  !*** ./resources/assets/js/pages/single/reportEdit.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reportEdit_vue_vue_type_template_id_13b0ea90_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reportEdit.vue?vue&type=template&id=13b0ea90&scoped=true& */ "./resources/assets/js/pages/single/reportEdit.vue?vue&type=template&id=13b0ea90&scoped=true&");
/* harmony import */ var _reportEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reportEdit.vue?vue&type=script&lang=js& */ "./resources/assets/js/pages/single/reportEdit.vue?vue&type=script&lang=js&");
/* harmony import */ var _reportEdit_vue_vue_type_style_index_0_id_13b0ea90_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reportEdit.vue?vue&type=style&index=0&id=13b0ea90&lang=scss&scoped=true& */ "./resources/assets/js/pages/single/reportEdit.vue?vue&type=style&index=0&id=13b0ea90&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _reportEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _reportEdit_vue_vue_type_template_id_13b0ea90_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _reportEdit_vue_vue_type_template_id_13b0ea90_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "13b0ea90",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/pages/single/reportEdit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/UserInput.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/components/UserInput.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/UserInput.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/pages/manage/components/ReportEdit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/pages/manage/components/ReportEdit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReportEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/components/ReportEdit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/pages/single/reportEdit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/pages/single/reportEdit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reportEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./reportEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/single/reportEdit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reportEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/pages/single/reportEdit.vue?vue&type=style&index=0&id=13b0ea90&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/assets/js/pages/single/reportEdit.vue?vue&type=style&index=0&id=13b0ea90&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_reportEdit_vue_vue_type_style_index_0_id_13b0ea90_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./reportEdit.vue?vue&type=style&index=0&id=13b0ea90&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/single/reportEdit.vue?vue&type=style&index=0&id=13b0ea90&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/assets/js/components/UserInput.vue?vue&type=template&id=23e06b18&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/components/UserInput.vue?vue&type=template&id=23e06b18& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInput_vue_vue_type_template_id_23e06b18___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInput_vue_vue_type_template_id_23e06b18___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInput_vue_vue_type_template_id_23e06b18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserInput.vue?vue&type=template&id=23e06b18& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/UserInput.vue?vue&type=template&id=23e06b18&");


/***/ }),

/***/ "./resources/assets/js/pages/manage/components/ReportEdit.vue?vue&type=template&id=5584050a&":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/pages/manage/components/ReportEdit.vue?vue&type=template&id=5584050a& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportEdit_vue_vue_type_template_id_5584050a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportEdit_vue_vue_type_template_id_5584050a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportEdit_vue_vue_type_template_id_5584050a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReportEdit.vue?vue&type=template&id=5584050a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/components/ReportEdit.vue?vue&type=template&id=5584050a&");


/***/ }),

/***/ "./resources/assets/js/pages/single/reportEdit.vue?vue&type=template&id=13b0ea90&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/js/pages/single/reportEdit.vue?vue&type=template&id=13b0ea90&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reportEdit_vue_vue_type_template_id_13b0ea90_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reportEdit_vue_vue_type_template_id_13b0ea90_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reportEdit_vue_vue_type_template_id_13b0ea90_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./reportEdit.vue?vue&type=template&id=13b0ea90&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/single/reportEdit.vue?vue&type=template&id=13b0ea90&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/UserInput.vue?vue&type=template&id=23e06b18&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/UserInput.vue?vue&type=template&id=23e06b18& ***!
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
    { class: ["common-user", _vm.maxHiddenClass] },
    [
      _c(
        "Select",
        {
          ref: "select",
          attrs: {
            transfer: _vm.transfer,
            placeholder: _vm.placeholder,
            size: _vm.size,
            loading: _vm.loadIng > 0,
            "loading-text": _vm.$L("加载中..."),
            "default-label": _vm.value,
            "default-event-object": true,
            "multiple-max": _vm.multipleMax,
            "multiple-uncancelable": _vm.uncancelable,
            "remote-method": _vm.remoteMethod,
            multiple: "",
            filterable: "",
            "transfer-class-name": "common-user-transfer",
          },
          on: {
            "on-query-change": _vm.searchUser,
            "on-open-change": _vm.openChange,
          },
          model: {
            value: _vm.selects,
            callback: function ($$v) {
              _vm.selects = $$v
            },
            expression: "selects",
          },
        },
        [
          _vm.multipleMax
            ? _c(
                "div",
                {
                  staticClass: "user-drop-prepend",
                  attrs: { slot: "drop-prepend" },
                  slot: "drop-prepend",
                },
                [
                  _vm._v(
                    _vm._s(_vm.$L("最多只能选择" + _vm.multipleMax + "个"))
                  ),
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm._t("option-prepend"),
          _vm._v(" "),
          _vm._l(_vm.list, function (item, key) {
            return _c(
              "Option",
              {
                key: key,
                attrs: {
                  value: item.userid,
                  "key-value": item.email,
                  label: item.nickname,
                  avatar: item.userimg,
                  disabled: _vm.isDisabled(item.userid),
                },
              },
              [
                _c("div", { staticClass: "user-input-option" }, [
                  _c(
                    "div",
                    { staticClass: "user-input-avatar" },
                    [
                      _c("EAvatar", {
                        staticClass: "avatar",
                        attrs: { src: item.userimg },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "user-input-nickname" }, [
                    _vm._v(_vm._s(item.nickname)),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "user-input-userid" }, [
                    _vm._v("ID: " + _vm._s(item.userid)),
                  ]),
                ]),
              ]
            )
          }),
        ],
        2
      ),
      _vm._v(" "),
      _vm.loadIng > 0
        ? _c("div", { staticClass: "common-user-loading" }, [_c("Loading")], 1)
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/components/ReportEdit.vue?vue&type=template&id=5584050a&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/components/ReportEdit.vue?vue&type=template&id=5584050a& ***!
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
    "Form",
    {
      staticClass: "report-edit",
      attrs: { "label-width": "auto" },
      nativeOn: {
        submit: function ($event) {
          $event.preventDefault()
        },
      },
    },
    [
      _c(
        "FormItem",
        { attrs: { label: _vm.$L("汇报类型") } },
        [
          _c(
            "RadioGroup",
            {
              staticClass: "report-radiogroup",
              attrs: {
                type: "button",
                "button-style": "solid",
                readonly: _vm.id > 0,
              },
              on: { "on-change": _vm.typeChange },
              model: {
                value: _vm.reportData.type,
                callback: function ($$v) {
                  _vm.$set(_vm.reportData, "type", $$v)
                },
                expression: "reportData.type",
              },
            },
            [
              _c(
                "Radio",
                {
                  attrs: {
                    label: "weekly",
                    disabled: _vm.id > 0 && _vm.reportData.type == "daily",
                  },
                },
                [_vm._v(_vm._s(_vm.$L("周报")))]
              ),
              _vm._v(" "),
              _c(
                "Radio",
                {
                  attrs: {
                    label: "daily",
                    disabled: _vm.id > 0 && _vm.reportData.type == "weekly",
                  },
                },
                [_vm._v(_vm._s(_vm.$L("日报")))]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _vm.id === 0
            ? _c(
                "ButtonGroup",
                { staticClass: "report-buttongroup" },
                [
                  _c(
                    "ETooltip",
                    {
                      attrs: {
                        content: _vm.prevCycleText,
                        placement: "bottom",
                      },
                    },
                    [
                      _c(
                        "Button",
                        {
                          attrs: { type: "primary" },
                          on: { click: _vm.prevCycle },
                        },
                        [_c("Icon", { attrs: { type: "ios-arrow-back" } })],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "report-buttongroup-vertical" }),
                  _vm._v(" "),
                  _c(
                    "ETooltip",
                    {
                      attrs: {
                        disabled: _vm.reportData.offset >= 0,
                        content: _vm.nextCycleText,
                        placement: "bottom",
                      },
                    },
                    [
                      _c(
                        "Button",
                        {
                          attrs: {
                            type: "primary",
                            disabled: _vm.reportData.offset >= 0,
                          },
                          on: { click: _vm.nextCycle },
                        },
                        [_c("Icon", { attrs: { type: "ios-arrow-forward" } })],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              )
            : _vm._e(),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "FormItem",
        { attrs: { label: _vm.$L("汇报名称") } },
        [
          _c("Input", {
            attrs: { disabled: "" },
            model: {
              value: _vm.reportData.title,
              callback: function ($$v) {
                _vm.$set(_vm.reportData, "title", $$v)
              },
              expression: "reportData.title",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("FormItem", { attrs: { label: _vm.$L("汇报对象") } }, [
        _c(
          "div",
          { staticClass: "report-users" },
          [
            _c("UserInput", {
              attrs: {
                disabledChoice: [_vm.userId],
                placeholder: _vm.$L("选择接收人"),
                transfer: false,
              },
              model: {
                value: _vm.reportData.receive,
                callback: function ($$v) {
                  _vm.$set(_vm.reportData, "receive", $$v)
                },
                expression: "reportData.receive",
              },
            }),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "report-user-link",
                attrs: { href: "javascript:void(0);" },
                on: { click: _vm.getLastSubmitter },
              },
              [
                _c("Icon", { attrs: { type: "ios-share-outline" } }),
                _vm._v(
                  _vm._s(_vm.$L("使用我上次的汇报对象")) + "\n            "
                ),
              ],
              1
            ),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c(
        "FormItem",
        {
          staticClass: "report-content-editor",
          attrs: { label: _vm.$L("汇报内容") },
        },
        [
          _c("TEditor", {
            attrs: { height: "100%" },
            model: {
              value: _vm.reportData.content,
              callback: function ($$v) {
                _vm.$set(_vm.reportData, "content", $$v)
              },
              expression: "reportData.content",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "FormItem",
        { staticClass: "report-foot" },
        [
          _c(
            "Button",
            {
              staticClass: "report-bottom",
              attrs: { type: "primary" },
              on: { click: _vm.handleSubmit },
            },
            [_vm._v(_vm._s(_vm.$L(_vm.id > 0 ? "修改" : "提交")))]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/single/reportEdit.vue?vue&type=template&id=13b0ea90&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/single/reportEdit.vue?vue&type=template&id=13b0ea90&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "electron-report" },
    [
      _c("PageTitle", { attrs: { title: _vm.title } }),
      _vm._v(" "),
      _c("ReportEdit", {
        attrs: { id: _vm.id },
        on: { saveSuccess: _vm.saveSuccess },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);