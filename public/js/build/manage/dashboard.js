"use strict";
(self["webpackChunkDooTask"] = self["webpackChunkDooTask"] || []).push([["resources_assets_js_pages_manage_dashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/components/TaskMenu.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/components/TaskMenu.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "TaskMenu",
  props: {
    task: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    loadStatus: {
      type: Boolean,
      "default": false
    },
    colorShow: {
      type: Boolean,
      "default": true
    },
    updateBefore: {
      type: Boolean,
      "default": false
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    size: {
      type: String,
      "default": 'small'
    },
    icon: {
      type: String,
      "default": 'md-radio-button-off'
    },
    completedIcon: {
      type: String,
      "default": 'md-checkmark-circle'
    }
  },
  data: function data() {
    return {};
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(['taskColorList', 'taskLoading', 'taskFlows', 'taskFlowItems'])), {}, {
    loadIng: function loadIng() {
      var _this = this;

      if (this.loadStatus) {
        return true;
      }

      var load = this.taskLoading.find(function (_ref) {
        var id = _ref.id;
        return id == _this.task.id;
      });
      return load && load.num > 0;
    },
    flow: function flow() {
      var _this2 = this;

      return this.taskFlows.find(function (_ref2) {
        var task_id = _ref2.task_id;
        return task_id == _this2.task.id;
      });
    },
    turns: function turns() {
      var _this3 = this;

      if (!this.flow) {
        return [];
      }

      var item = this.taskFlowItems.find(function (_ref3) {
        var id = _ref3.id;
        return id == _this3.flow.flow_item_id;
      });

      if (!item) {
        return [];
      }

      return this.taskFlowItems.filter(function (_ref4) {
        var id = _ref4.id;
        return item.turns.includes(id);
      });
    }
  }),
  methods: {
    show: function show() {
      this.$refs.dropdown.show();
    },
    hide: function hide() {
      this.$refs.dropdown.hide();
    },
    handleClick: function handleClick() {
      this.$refs.dropdown.handleClick();
    },
    dropTask: function dropTask(command) {
      var _this4 = this;

      var cacheTask = this.task;

      var completeTemp = function completeTemp(save) {
        if (save) {
          _this4.$store.dispatch("saveTaskCompleteTemp", cacheTask.id);
        } else {
          _this4.$store.dispatch("forgetTaskCompleteTemp", cacheTask.id);
        }
      }; // 修改背景色


      if ($A.isJson(command)) {
        if (command.name) {
          this.updateTask({
            color: command.color
          })["catch"](function () {});
        }

        return;
      } // 修改工作流状态


      if ($A.leftExists(command, 'turn::')) {
        var flow_item_id = $A.leftDelete(command, 'turn::');
        if (flow_item_id == this.task.flow_item_id) return; //

        var currentFlow = this.taskFlowItems.find(function (_ref5) {
          var id = _ref5.id;
          return id == _this4.flow.flow_item_id;
        }) || {};
        var updateFlow = this.taskFlowItems.find(function (_ref6) {
          var id = _ref6.id;
          return id == flow_item_id;
        }) || {};
        var isComplete = currentFlow.status !== 'end' && updateFlow.status === 'end';
        var isUnComplete = currentFlow.status === 'end' && updateFlow.status !== 'end';

        if (this.updateBefore) {
          if (isComplete) {
            completeTemp(true);
          } else if (isUnComplete) {
            completeTemp(false);
          }
        }

        this.updateTask({
          flow_item_id: flow_item_id
        }).then(function () {
          if (isComplete) {
            completeTemp(true);
          } else if (isUnComplete) {
            completeTemp(false);
          }
        })["catch"](function () {
          if (isComplete) {
            completeTemp(false);
          } else if (isUnComplete) {
            completeTemp(true);
          }
        });
        return;
      } // 其他操作


      switch (command) {
        case 'complete':
          if (this.task.complete_at) {
            return;
          }

          if (this.updateBefore) {
            completeTemp(true);
          }

          this.updateTask({
            complete_at: $A.formatDate("Y-m-d H:i:s")
          }).then(function () {
            completeTemp(true);
          })["catch"](function () {
            completeTemp(false);
          });
          break;

        case 'uncomplete':
          if (!this.task.complete_at) {
            return;
          }

          if (this.updateBefore) {
            completeTemp(false);
          }

          this.updateTask({
            complete_at: false
          }).then(function () {
            completeTemp(false);
          })["catch"](function () {
            completeTemp(true);
          });
          break;

        case 'archived':
        case 'remove':
          this.archivedOrRemoveTask(command);
          break;
      }
    },
    visibleChange: function visibleChange(visible) {
      if (visible) {
        this.$store.dispatch("getTaskFlow", this.task.id).then(this.$refs.dropdownMenu.updatePopper)["catch"](this.$refs.dropdownMenu.updatePopper);
      }
    },
    updateTask: function updateTask(updata) {
      var _this5 = this;

      return new Promise(function (resolve, reject) {
        if (_this5.loadIng) {
          reject();
          return;
        } //


        Object.keys(updata).forEach(function (key) {
          return _this5.$set(_this5.task, key, updata[key]);
        }); //

        _this5.$store.dispatch("taskUpdate", Object.assign(updata, {
          task_id: _this5.task.id
        })).then(function (_ref7) {
          var data = _ref7.data,
              msg = _ref7.msg;
          $A.messageSuccess(msg);
          resolve();

          _this5.$emit("on-update", data);
        })["catch"](function (_ref8) {
          var msg = _ref8.msg;
          $A.modalError(msg);

          _this5.$store.dispatch("getTaskOne", _this5.task.id)["catch"](function () {});

          reject();
        });
      });
    },
    archivedOrRemoveTask: function archivedOrRemoveTask(type) {
      var _this6 = this;

      var typeDispatch = 'removeTask';
      var typeName = '删除';
      var typeData = {
        task_id: this.task.id
      };
      var typeTask = this.task.parent_id > 0 ? '子任务' : '任务';

      if (type == 'archived') {
        typeDispatch = 'archivedTask';
        typeName = '归档';

        if (this.task.archived_at) {
          typeName = '还原归档';
          typeData = {
            task_id: this.task.id,
            type: 'recovery'
          };
        }
      }

      $A.modalConfirm({
        title: typeName + typeTask,
        content: '你确定要' + typeName + typeTask + '【' + this.task.name + '】吗？',
        loading: true,
        onOk: function onOk() {
          if (_this6.loadIng) {
            _this6.$Modal.remove();

            return;
          }

          _this6.$store.dispatch(typeDispatch, typeData).then(function (_ref9) {
            var msg = _ref9.msg;
            $A.messageSuccess(msg);

            _this6.$Modal.remove();
          })["catch"](function (_ref10) {
            var msg = _ref10.msg;
            $A.modalError(msg, 301);

            _this6.$Modal.remove();
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/dashboard.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/dashboard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_TaskMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/TaskMenu */ "./resources/assets/js/pages/manage/components/TaskMenu.vue");
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    TaskMenu: _components_TaskMenu__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      nowTime: $A.Time(),
      nowInterval: null,
      loadIng: 0,
      dashboard: 'today'
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.nowInterval = setInterval(function () {
      _this.nowTime = $A.Time();
    }, 1000);
  },
  destroyed: function destroyed() {
    clearInterval(this.nowInterval);
  },
  activated: function activated() {
    this.$store.dispatch("getTaskForDashboard");
  },
  deactivated: function deactivated() {
    this.$store.dispatch("forgetTaskCompleteTemp", true);
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(['userInfo'])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(['dashboardTask', 'transforTasks'])), {}, {
    columns: function columns() {
      var _this2 = this;

      var list = [];
      ['today', 'overdue', 'all'].some(function (type) {
        var data = _this2.transforTasks(_this2.dashboardTask[type]);

        list.push({
          type: type,
          title: _this2.getTitle(type),
          list: data.sort(function (a, b) {
            return $A.Date(a.end_at || "2099-12-31 23:59:59") - $A.Date(b.end_at || "2099-12-31 23:59:59");
          })
        });
      });
      return list;
    },
    total: function total() {
      var dashboardTask = this.dashboardTask;
      return dashboardTask.today.length + dashboardTask.overdue.length + dashboardTask.all.length;
    }
  }),
  methods: {
    getTitle: function getTitle(type) {
      switch (type) {
        case 'today':
          return this.$L('今日任务');

        case 'overdue':
          return this.$L('超期任务');

        case 'all':
          return this.$L('待完成任务');

        default:
          return '';
      }
    },
    scrollTo: function scrollTo(type) {
      $A.scrollToView(this.$refs["type_".concat(type)][0], {
        behavior: 'smooth',
        inline: 'end'
      });
    },
    openTask: function openTask(task) {
      this.$store.dispatch("openTask", task);
    },
    openMenu: function openMenu(type, task) {
      var el = this.$refs["taskMenu_".concat(type, "_").concat(task.id)];

      if (el) {
        el[0].handleClick();
      }
    },
    expiresFormat: function expiresFormat(date) {
      return $A.countDownFormat(date, this.nowTime);
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/pages/manage/components/TaskMenu.vue":
/*!******************************************************************!*\
  !*** ./resources/assets/js/pages/manage/components/TaskMenu.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TaskMenu_vue_vue_type_template_id_fafe23a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskMenu.vue?vue&type=template&id=fafe23a0& */ "./resources/assets/js/pages/manage/components/TaskMenu.vue?vue&type=template&id=fafe23a0&");
/* harmony import */ var _TaskMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskMenu.vue?vue&type=script&lang=js& */ "./resources/assets/js/pages/manage/components/TaskMenu.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TaskMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaskMenu_vue_vue_type_template_id_fafe23a0___WEBPACK_IMPORTED_MODULE_0__.render,
  _TaskMenu_vue_vue_type_template_id_fafe23a0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/pages/manage/components/TaskMenu.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/pages/manage/dashboard.vue":
/*!********************************************************!*\
  !*** ./resources/assets/js/pages/manage/dashboard.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dashboard_vue_vue_type_template_id_2b2d1b87___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.vue?vue&type=template&id=2b2d1b87& */ "./resources/assets/js/pages/manage/dashboard.vue?vue&type=template&id=2b2d1b87&");
/* harmony import */ var _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.vue?vue&type=script&lang=js& */ "./resources/assets/js/pages/manage/dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dashboard_vue_vue_type_template_id_2b2d1b87___WEBPACK_IMPORTED_MODULE_0__.render,
  _dashboard_vue_vue_type_template_id_2b2d1b87___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/pages/manage/dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/pages/manage/components/TaskMenu.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/pages/manage/components/TaskMenu.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TaskMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/components/TaskMenu.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/pages/manage/dashboard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/pages/manage/dashboard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/dashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/pages/manage/components/TaskMenu.vue?vue&type=template&id=fafe23a0&":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/pages/manage/components/TaskMenu.vue?vue&type=template&id=fafe23a0& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskMenu_vue_vue_type_template_id_fafe23a0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskMenu_vue_vue_type_template_id_fafe23a0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskMenu_vue_vue_type_template_id_fafe23a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TaskMenu.vue?vue&type=template&id=fafe23a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/components/TaskMenu.vue?vue&type=template&id=fafe23a0&");


/***/ }),

/***/ "./resources/assets/js/pages/manage/dashboard.vue?vue&type=template&id=2b2d1b87&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/pages/manage/dashboard.vue?vue&type=template&id=2b2d1b87& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_2b2d1b87___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_2b2d1b87___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_2b2d1b87___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard.vue?vue&type=template&id=2b2d1b87& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/dashboard.vue?vue&type=template&id=2b2d1b87&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/components/TaskMenu.vue?vue&type=template&id=fafe23a0&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/components/TaskMenu.vue?vue&type=template&id=fafe23a0& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    "EDropdown",
    {
      ref: "dropdown",
      attrs: {
        trigger: "click",
        disabled: _vm.disabled,
        size: _vm.size,
        placement: "bottom",
      },
      on: { command: _vm.dropTask, "visible-change": _vm.visibleChange },
    },
    [
      _vm._t("icon", function () {
        return [
          _c(
            "div",
            { staticClass: "task-menu-icon" },
            [
              _vm.loadIng
                ? _c("div", { staticClass: "loading" }, [_c("Loading")], 1)
                : [
                    _vm.task.complete_at
                      ? _c("Icon", {
                          staticClass: "completed",
                          attrs: { type: _vm.completedIcon },
                        })
                      : _c("Icon", {
                          staticClass: "uncomplete",
                          attrs: { type: _vm.icon },
                        }),
                  ],
            ],
            2
          ),
        ]
      }),
      _vm._v(" "),
      _c(
        "EDropdownMenu",
        {
          ref: "dropdownMenu",
          staticClass: "task-menu-more-dropdown",
          attrs: { slot: "dropdown" },
          slot: "dropdown",
        },
        [
          _c("li", { staticClass: "task-menu-more-warp", class: _vm.size }, [
            _c(
              "ul",
              [
                !_vm.flow
                  ? _c(
                      "EDropdownItem",
                      { staticClass: "load-flow", attrs: { disabled: "" } },
                      [
                        _c(
                          "div",
                          { staticClass: "load-flow-warp" },
                          [_c("Loading")],
                          1
                        ),
                      ]
                    )
                  : _vm.turns.length > 0
                  ? _vm._l(_vm.turns, function (item) {
                      return _c(
                        "EDropdownItem",
                        {
                          key: item.id,
                          attrs: { command: "turn::" + item.id },
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "item flow" },
                            [
                              item.id == _vm.task.flow_item_id &&
                              _vm.flow.auto_assign !== true
                                ? _c("Icon", {
                                    staticClass: "check",
                                    attrs: {
                                      type: "md-checkmark-circle-outline",
                                    },
                                  })
                                : _c("Icon", {
                                    attrs: { type: "md-radio-button-off" },
                                  }),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "flow-name",
                                  class: item.status,
                                },
                                [_vm._v(_vm._s(item.name))]
                              ),
                            ],
                            1
                          ),
                        ]
                      )
                    })
                  : [
                      _vm.task.complete_at
                        ? _c(
                            "EDropdownItem",
                            { attrs: { command: "uncomplete" } },
                            [
                              _c(
                                "div",
                                { staticClass: "item red" },
                                [
                                  _c("Icon", {
                                    attrs: {
                                      type: "md-checkmark-circle-outline",
                                    },
                                  }),
                                  _vm._v(
                                    _vm._s(_vm.$L("标记未完成")) +
                                      "\n                        "
                                  ),
                                ],
                                1
                              ),
                            ]
                          )
                        : _c(
                            "EDropdownItem",
                            { attrs: { command: "complete" } },
                            [
                              _c(
                                "div",
                                { staticClass: "item" },
                                [
                                  _c("Icon", {
                                    attrs: { type: "md-radio-button-off" },
                                  }),
                                  _vm._v(
                                    _vm._s(_vm.$L("完成")) +
                                      "\n                        "
                                  ),
                                ],
                                1
                              ),
                            ]
                          ),
                    ],
                _vm._v(" "),
                _vm.task.parent_id === 0
                  ? [
                      _c(
                        "EDropdownItem",
                        {
                          attrs: {
                            divided: _vm.turns.length > 0,
                            command: "archived",
                          },
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "item" },
                            [
                              _c("Icon", { attrs: { type: "ios-filing" } }),
                              _vm._v(
                                _vm._s(
                                  _vm.$L(
                                    _vm.task.archived_at ? "还原归档" : "归档"
                                  )
                                ) + "\n                        "
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c("EDropdownItem", { attrs: { command: "remove" } }, [
                        _c(
                          "div",
                          { staticClass: "item hover-del" },
                          [
                            _c("Icon", { attrs: { type: "md-trash" } }),
                            _vm._v(
                              _vm._s(_vm.$L("删除")) +
                                "\n                        "
                            ),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _vm.colorShow
                        ? _vm._l(_vm.taskColorList, function (c, k) {
                            return _c(
                              "EDropdownItem",
                              {
                                key: "c_" + k,
                                attrs: { divided: k == 0, command: c },
                              },
                              [
                                _c("div", { staticClass: "item" }, [
                                  _c("i", {
                                    staticClass: "taskfont",
                                    style: { color: c.color || "#f9f9f9" },
                                    domProps: {
                                      innerHTML: _vm._s(
                                        c.color == _vm.task.color
                                          ? "&#xe61d;"
                                          : "&#xe61c;"
                                      ),
                                    },
                                  }),
                                  _vm._v(
                                    _vm._s(_vm.$L(c.name)) +
                                      "\n                            "
                                  ),
                                ]),
                              ]
                            )
                          })
                        : _vm._e(),
                    ]
                  : _c(
                      "EDropdownItem",
                      {
                        attrs: {
                          command: "remove",
                          divided: _vm.turns.length > 0,
                        },
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "item" },
                          [
                            _c("Icon", { attrs: { type: "md-trash" } }),
                            _vm._v(
                              _vm._s(_vm.$L("删除")) + "\n                    "
                            ),
                          ],
                          1
                        ),
                      ]
                    ),
              ],
              2
            ),
          ]),
        ]
      ),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/dashboard.vue?vue&type=template&id=2b2d1b87&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/pages/manage/dashboard.vue?vue&type=template&id=2b2d1b87& ***!
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
    { staticClass: "page-dashboard" },
    [
      _c("PageTitle", { attrs: { title: _vm.$L("仪表盘") } }),
      _vm._v(" "),
      _c("div", { staticClass: "dashboard-wrapper" }, [
        _c("div", { staticClass: "dashboard-hello" }, [
          _vm._v(_vm._s(_vm.$L("欢迎您，" + _vm.userInfo.nickname))),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "dashboard-desc" }, [
          _vm._v(_vm._s(_vm.$L("以下是你当前的任务统计数据"))),
        ]),
        _vm._v(" "),
        _c("ul", { staticClass: "dashboard-block" }, [
          _c(
            "li",
            {
              on: {
                click: function ($event) {
                  return _vm.scrollTo("today")
                },
              },
            },
            [
              _c("div", { staticClass: "block-title" }, [
                _vm._v(_vm._s(_vm.getTitle("today"))),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "block-data" }, [
                _c("div", { staticClass: "block-num" }, [
                  _vm._v(_vm._s(_vm.dashboardTask.today.length)),
                ]),
                _vm._v(" "),
                _c("i", { staticClass: "taskfont" }, [_vm._v("")]),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              on: {
                click: function ($event) {
                  return _vm.scrollTo("overdue")
                },
              },
            },
            [
              _c("div", { staticClass: "block-title" }, [
                _vm._v(_vm._s(_vm.getTitle("overdue"))),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "block-data" }, [
                _c("div", { staticClass: "block-num" }, [
                  _vm._v(_vm._s(_vm.dashboardTask.overdue.length)),
                ]),
                _vm._v(" "),
                _c("i", { staticClass: "taskfont" }, [_vm._v("")]),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              on: {
                click: function ($event) {
                  return _vm.scrollTo("all")
                },
              },
            },
            [
              _c("div", { staticClass: "block-title" }, [
                _vm._v(_vm._s(_vm.getTitle("all"))),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "block-data" }, [
                _c("div", { staticClass: "block-num" }, [
                  _vm._v(_vm._s(_vm.dashboardTask.all.length)),
                ]),
                _vm._v(" "),
                _c("i", { staticClass: "taskfont" }, [_vm._v("")]),
              ]),
            ]
          ),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "dashboard-list overlay-y" },
          [
            _vm._l(_vm.columns, function (column) {
              return column.list.length > 0
                ? [
                    _c("div", {
                      ref: "type_" + column.type,
                      refInFor: true,
                      staticClass: "dashboard-ref",
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "dashboard-title" }, [
                      _vm._v(_vm._s(column.title)),
                    ]),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "dashboard-ul" },
                      _vm._l(column.list, function (item, index) {
                        return _c(
                          "li",
                          {
                            key: index,
                            class: { complete: item.complete_at },
                            style: item.color
                              ? { backgroundColor: item.color }
                              : {},
                            on: {
                              click: function ($event) {
                                return _vm.openTask(item)
                              },
                            },
                          },
                          [
                            item.p_name
                              ? _c("em", {
                                  staticClass: "priority-color",
                                  style: { backgroundColor: item.p_color },
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "TaskMenu",
                              {
                                ref: "taskMenu_" + column.type + "_" + item.id,
                                refInFor: true,
                                attrs: { task: item },
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass: "drop-icon",
                                    attrs: { slot: "icon" },
                                    on: {
                                      click: function ($event) {
                                        $event.stopPropagation()
                                      },
                                    },
                                    slot: "icon",
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "taskfont",
                                      domProps: {
                                        innerHTML: _vm._s(
                                          item.complete_at
                                            ? "&#xe627;"
                                            : "&#xe625;"
                                        ),
                                      },
                                    }),
                                  ]
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "item-title" }, [
                              item.flow_item_name
                                ? _c(
                                    "span",
                                    {
                                      class: item.flow_item_status,
                                      on: {
                                        click: function ($event) {
                                          $event.stopPropagation()
                                          return _vm.openMenu(column.type, item)
                                        },
                                      },
                                    },
                                    [_vm._v(_vm._s(item.flow_item_name))]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              item.sub_top === true
                                ? _c("span", [_vm._v(_vm._s(_vm.$L("子任务")))])
                                : _vm._e(),
                              _vm._v(" "),
                              item.sub_my && item.sub_my.length > 0
                                ? _c("span", [
                                    _vm._v("+" + _vm._s(item.sub_my.length)),
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm._v(
                                "\n                            " +
                                  _vm._s(item.name) +
                                  "\n                        "
                              ),
                            ]),
                            _vm._v(" "),
                            item.desc
                              ? _c("div", { staticClass: "item-icon" }, [
                                  _c("i", { staticClass: "taskfont" }, [
                                    _vm._v(""),
                                  ]),
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            item.sub_num > 0
                              ? _c("div", { staticClass: "item-icon" }, [
                                  _c("i", { staticClass: "taskfont" }, [
                                    _vm._v(""),
                                  ]),
                                  _vm._v(" "),
                                  _c("em", [
                                    _vm._v(
                                      _vm._s(item.sub_complete) +
                                        "/" +
                                        _vm._s(item.sub_num)
                                    ),
                                  ]),
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            item.end_at
                              ? _c(
                                  "ETooltip",
                                  {
                                    attrs: {
                                      content: item.end_at,
                                      placement: "right",
                                    },
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        class: [
                                          "item-icon",
                                          item.today ? "today" : "",
                                          item.overdue ? "overdue" : "",
                                        ],
                                      },
                                      [
                                        _c("i", { staticClass: "taskfont" }, [
                                          _vm._v(""),
                                        ]),
                                        _vm._v(" "),
                                        _c("em", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.expiresFormat(item.end_at)
                                            )
                                          ),
                                        ]),
                                      ]
                                    ),
                                  ]
                                )
                              : _vm._e(),
                          ],
                          1
                        )
                      }),
                      0
                    ),
                  ]
                : _vm._e()
            }),
          ],
          2
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