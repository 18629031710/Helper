(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/lodash/_baseEach.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseEach.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    createBaseEach = __webpack_require__(/*! ./_createBaseEach */ "./node_modules/lodash/_createBaseEach.js");

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ "./node_modules/lodash/_baseMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),

/***/ "./node_modules/lodash/_baseRange.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseRange.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */
function baseRange(start, end, step, fromRight) {
  var index = -1,
      length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
      result = Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
}

module.exports = baseRange;


/***/ }),

/***/ "./node_modules/lodash/_createBaseEach.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createBaseEach.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ "./node_modules/lodash/_createRange.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_createRange.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseRange = __webpack_require__(/*! ./_baseRange */ "./node_modules/lodash/_baseRange.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js"),
    toFinite = __webpack_require__(/*! ./toFinite */ "./node_modules/lodash/toFinite.js");

/**
 * Creates a `_.range` or `_.rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */
function createRange(fromRight) {
  return function(start, end, step) {
    if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
      end = step = undefined;
    }
    // Ensure the sign of `-0` is preserved.
    start = toFinite(start);
    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = toFinite(end);
    }
    step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
    return baseRange(start, end, step, fromRight);
  };
}

module.exports = createRange;


/***/ }),

/***/ "./node_modules/lodash/_isIterateeCall.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_isIterateeCall.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ "./node_modules/lodash/map.js":
/*!************************************!*\
  !*** ./node_modules/lodash/map.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    baseMap = __webpack_require__(/*! ./_baseMap */ "./node_modules/lodash/_baseMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;


/***/ }),

/***/ "./node_modules/lodash/range.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/range.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createRange = __webpack_require__(/*! ./_createRange */ "./node_modules/lodash/_createRange.js");

/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @see _.inRange, _.rangeRight
 * @example
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(-4);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * _.range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * _.range(0);
 * // => []
 */
var range = createRange();

module.exports = range;


/***/ }),

/***/ "./src/scripts/containers/RemarkContainer/RemarkContainer.js":
/*!*******************************************************************!*\
  !*** ./src/scripts/containers/RemarkContainer/RemarkContainer.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RemarkContainer; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _RemarkComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./RemarkComponent */ "./src/scripts/containers/RemarkContainer/RemarkComponent.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components */ "./src/scripts/components/index.js");
/* harmony import */ var components_Icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Icons */ "./src/scripts/components/Icons/index.js");







var _jsxFileName = "/Users/xiwz/ynote/mindmap/src/scripts/containers/RemarkContainer/RemarkContainer.js";






var RemarkContainer =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(RemarkContainer, _Component);

  function RemarkContainer() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, RemarkContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(RemarkContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "state", {
      open: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "anchorRef", react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "saveRemark", function (idAndRemark) {
      mindmapEditor.saveRemark(idAndRemark);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleBlur", function () {
      _this.setState({
        open: false
      });

      mindmapEditor.__uistatus__.focus = '';
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleOpen", function (event) {
      event.preventDefault();
      event.stopPropagation();
      if (_this.isDisable()) return;
      mindmapEditor.__uistatus__.focus = 'remark';

      _this.setState({
        open: true
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "isDisable", function () {
      return _this.props.disabled;
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(RemarkContainer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$data = _this$props.data,
          id = _this$props$data.id,
          _this$props$data$rema = _this$props$data.remark,
          value = _this$props$data$rema === void 0 ? '' : _this$props$data$rema,
          rootClasses = _this$props.rootClasses;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_10__["Tooltip"], {
        title: "\u5907\u6CE8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "".concat(rootClasses.toolbarItem, " ").concat(value ? rootClasses.toolbarItemActive : ''),
        ref: this.anchorRef,
        onClick: this.handleOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components_Icons__WEBPACK_IMPORTED_MODULE_11__["Remark"], {
        disabled: this.isDisable(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_10__["Popper"], {
        open: this.state.open,
        anchorEl: this.anchorRef.current,
        style: {
          zIndex: 1000
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_RemarkComponent__WEBPACK_IMPORTED_MODULE_9__["default"], {
        saveRemark: this.saveRemark,
        id: id,
        value: value,
        autoFocus: true,
        onBlur: this.handleBlur,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      })));
    }
  }]);

  return RemarkContainer;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(RemarkContainer, "propTypes", {
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  data: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  rootClasses: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object
});



/***/ }),

/***/ "./src/scripts/containers/RemarkContainer/index.js":
/*!*********************************************************!*\
  !*** ./src/scripts/containers/RemarkContainer/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RemarkContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RemarkContainer */ "./src/scripts/containers/RemarkContainer/RemarkContainer.js");
 // todo: 需要区分备注到底是以脑图为标准还是以节点为标准
// 如果是以节点为标准，那需要注意多选，
// 或者同时选中的几个节点都使用相同的备注内容

/* harmony default export */ __webpack_exports__["default"] = (_RemarkContainer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/scripts/containers/ToolbarContainer/ColorPicker/index.js":
/*!**********************************************************************!*\
  !*** ./src/scripts/containers/ToolbarContainer/ColorPicker/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var common_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! common/constants */ "./src/scripts/common/constants.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components */ "./src/scripts/components/index.js");
/* harmony import */ var components_Icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Icons */ "./src/scripts/components/Icons/index.js");
/* harmony import */ var common_events__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! common/events */ "./src/scripts/common/events/index.js");
/* harmony import */ var react_document_events__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-document-events */ "./node_modules/react-document-events/index.js");
/* harmony import */ var react_document_events__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_document_events__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_14__);







var _jsxFileName = "/Users/xiwz/ynote/mindmap/src/scripts/containers/ToolbarContainer/ColorPicker/index.js";







 // const LazyColorPicker = React.lazy(() => import(/* webpackChunkName: "color-picker" */ '../../../components/LazyColorPicker/'));

var LazyColorPicker = next_dynamic__WEBPACK_IMPORTED_MODULE_14___default()(function () {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../../../components/LazyColorPicker */ "./src/scripts/components/LazyColorPicker/index.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../../components/LazyColorPicker */ "./src/scripts/components/LazyColorPicker/index.js")];
    },
    modules: ['../../../components/LazyColorPicker']
  }
});

var emptyFunc = function emptyFunc() {};

var ColorPicker =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ColorPicker, _PureComponent);

  function ColorPicker(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ColorPicker);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ColorPicker).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "domRef", react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "toggleShowColorPicker", function (e) {
      e.stopPropagation();

      _this.toggleShow();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "toggleShow", function () {
      _this.setState(function (_ref) {
        var show = _ref.show;
        return {
          show: !show
        };
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleChange", function (color, event) {
      event.stopPropagation();

      _this.setState({
        selectedItem: color.hex
      });

      _this.cacheColor = color.hex;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleOutSideClick", function (event) {
      if (!_this.domRef.current.contains(event.target)) {
        _this.reset();

        if (_this.cacheColor) {
          _this.props.onChange(_this.cacheColor);

          _this.cacheColor = null;
        }
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "reset", function () {
      _this.setState({
        show: false
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "checkColor", function () {
      return _this.state.selectedItem.startsWith('#') ? _this.state.selectedItem : 'red';
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleClick", function () {
      _this.props.onChange(_this.checkColor());
    });

    _this.state = {
      show: false,
      selectedItem: props.color || 'red'
    };
    _this.firstInit = true;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ColorPicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      common_events__WEBPACK_IMPORTED_MODULE_12__["default"].on(common_constants__WEBPACK_IMPORTED_MODULE_9__["RESET_TOOLBAR"], this.reset);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      common_events__WEBPACK_IMPORTED_MODULE_12__["default"].removeListener(common_constants__WEBPACK_IMPORTED_MODULE_9__["RESET_TOOLBAR"], this.reset);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          disabled = _this$props.disabled,
          rootClasses = _this$props.rootClasses;
      var colorLineStyle = {
        width: 15,
        height: 2,
        position: 'absolute',
        top: 20,
        left: 8,
        backgroundColor: this.checkColor()
      };
      var containerStyle = {
        position: 'relative'
      };
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_10__["Tooltip"], {
        title: "\u6587\u5B57\u989C\u8272",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: rootClasses.toolbarItem,
        ref: this.domRef,
        style: containerStyle,
        onClick: disabled ? emptyFunc : this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        style: colorLineStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components_Icons__WEBPACK_IMPORTED_MODULE_11__["TextColor"], {
        disabled: disabled,
        style: {
          width: 18,
          height: 18,
          marginLeft: '3px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components_Icons__WEBPACK_IMPORTED_MODULE_11__["Arrow"], {
        disabled: disabled,
        onClick: disabled ? emptyFunc : this.toggleShowColorPicker,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }), this.state.show ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LazyColorPicker, {
        color: this.state.selectedItem,
        onChangeComplete: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }) : null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_document_events__WEBPACK_IMPORTED_MODULE_13___default.a, {
        onMouseDown: this.handleOutSideClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      })));
    }
  }]);

  return ColorPicker;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(ColorPicker, "propTypes", {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  color: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  rootClasses: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object
});

/* harmony default export */ __webpack_exports__["default"] = (ColorPicker);

/***/ }),

/***/ "./src/scripts/containers/ToolbarContainer/FontFamily/index.js":
/*!*********************************************************************!*\
  !*** ./src/scripts/containers/ToolbarContainer/FontFamily/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/constants */ "./src/scripts/common/constants.js");
/* harmony import */ var components_Icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Icons */ "./src/scripts/components/Icons/index.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components */ "./src/scripts/components/index.js");
/* harmony import */ var react_document_events__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-document-events */ "./node_modules/react-document-events/index.js");
/* harmony import */ var react_document_events__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_document_events__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var common_events__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! common/events */ "./src/scripts/common/events/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");







var _jsxFileName = "/Users/xiwz/ynote/mindmap/src/scripts/containers/ToolbarContainer/FontFamily/index.js";










var FontFamily =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(FontFamily, _PureComponent);

  function FontFamily() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FontFamily);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(FontFamily)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "domRef", react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "state", {
      show: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleClick", function () {
      _this.toggleShow();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "toggleShow", function () {
      _this.setState(function (_ref) {
        var show = _ref.show;
        return {
          show: !show
        };
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleChange", function (item) {
      return function (event) {
        event.stopPropagation();

        _this.toggleShow();

        _this.props.onChange(item);
      };
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleOutSideClick", function (event) {
      if (!_this.domRef.current.contains(event.target)) {
        _this.reset();
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "reset", function () {
      _this.setState({
        show: false
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(FontFamily, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      common_events__WEBPACK_IMPORTED_MODULE_14__["default"].on(_common_constants__WEBPACK_IMPORTED_MODULE_10__["RESET_TOOLBAR"], this.reset);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      common_events__WEBPACK_IMPORTED_MODULE_14__["default"].removeListener(_common_constants__WEBPACK_IMPORTED_MODULE_10__["RESET_TOOLBAR"], this.reset);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          rootClasses = _this$props.rootClasses;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: rootClasses.toolbarItem,
        ref: this.domRef,
        onClick: this.toggleShow,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], {
        title: "\u5B57\u4F53",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: classes.fontItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, this.props.fontFamily)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components_Icons__WEBPACK_IMPORTED_MODULE_11__["Arrow"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), this.state.show ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: classes.dropdown,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, Object.keys(_common_constants__WEBPACK_IMPORTED_MODULE_10__["FONT_FAMILY"]).map(function (item) {
        var className = classnames__WEBPACK_IMPORTED_MODULE_9___default()("".concat(classes.dropdownItem), {
          selected: item === _this2.props.fontFamily
        });
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          key: item,
          className: className,
          onClick: _this2.handleChange(item),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, item);
      })) : null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_document_events__WEBPACK_IMPORTED_MODULE_13___default.a, {
        onClick: this.handleOutSideClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }));
    }
  }]);

  return FontFamily;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

FontFamily.propTypes = {
  fontFamily: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array]),
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  rootClasses: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object
};
var styles = {
  dropdown: {
    position: 'absolute',
    top: '25px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    boxShadow: '0 0 4px 0 rgba(0,0,0,.1)',
    borderRadius: '2px',
    border: '1px solid #e0e1e5',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '12px',
    minWidth: '140px',
    maxWidth: '200px',
    zIndex: '10'
  },
  dropdownItem: {
    width: '100%',
    lineHeight: '2.5',
    textAlign: 'left',
    textIndent: '1em',
    '&.selected': {
      backgroundColor: '#f1f3f6'
    },
    '&:hover': {
      backgroundColor: '#f1f3f6',
      transition: 'background-color .3s ease'
    }
  },
  fontItem: {
    fontSize: '12px',
    height: '20px',
    width: '60px',
    textAlign: 'center',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_15__["withStyles"])(styles)(FontFamily));

/***/ }),

/***/ "./src/scripts/containers/ToolbarContainer/FontSizePicker/index.js":
/*!*************************************************************************!*\
  !*** ./src/scripts/containers/ToolbarContainer/FontSizePicker/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_range__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/range */ "./node_modules/lodash/range.js");
/* harmony import */ var lodash_range__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_range__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var common_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! common/constants */ "./src/scripts/common/constants.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components */ "./src/scripts/components/index.js");
/* harmony import */ var components_Icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/Icons */ "./src/scripts/components/Icons/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_document_events__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-document-events */ "./node_modules/react-document-events/index.js");
/* harmony import */ var react_document_events__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_document_events__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var common_events__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! common/events */ "./src/scripts/common/events/index.js");









var _jsxFileName = "/Users/xiwz/ynote/mindmap/src/scripts/containers/ToolbarContainer/FontSizePicker/index.js";









var fontSizeList = lodash_map__WEBPACK_IMPORTED_MODULE_7___default()(lodash_range__WEBPACK_IMPORTED_MODULE_8___default()(6, 21), function (item) {
  return item * 2;
});

var fontSizeStyle = {
  fontSize: '12px',
  width: 20
};

var FontSizePicker =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(FontSizePicker, _PureComponent);

  function FontSizePicker(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FontSizePicker);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(FontSizePicker).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "containerRef", react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleChange", function (item) {
      return function (event) {
        event.stopPropagation();

        _this.toggleShow();

        _this.props.onChange(item);
      };
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "toggleShow", function () {
      _this.setState(function (_ref) {
        var show = _ref.show;
        return {
          show: !show
        };
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleOutSideClick", function (e) {
      if (!_this.containerRef.current.contains(e.target)) {
        _this.reset();
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "reset", function () {
      _this.setState({
        show: false
      });
    });

    _this.state = {
      show: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(FontSizePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      common_events__WEBPACK_IMPORTED_MODULE_16__["default"].on(common_constants__WEBPACK_IMPORTED_MODULE_11__["RESET_TOOLBAR"], this.reset);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      common_events__WEBPACK_IMPORTED_MODULE_16__["default"].removeListener(common_constants__WEBPACK_IMPORTED_MODULE_11__["RESET_TOOLBAR"], this.reset);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          fontSize = _this$props.fontSize,
          rootClasses = _this$props.rootClasses;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: rootClasses.toolbarItem,
        ref: this.containerRef,
        onClick: this.toggleShow,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], {
        title: "\u5B57\u53F7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: fontSizeStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, parseInt(fontSize, 10))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(components_Icons__WEBPACK_IMPORTED_MODULE_13__["Arrow"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), this.state.show ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: rootClasses.dropdown,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, fontSizeList.map(function (item) {
        var className = classnames__WEBPACK_IMPORTED_MODULE_14___default()(rootClasses.dropdownItem, {
          selected: item === parseInt(_this2.props.fontSize, 10)
        });
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          key: item,
          className: className,
          onClick: _this2.handleChange(item),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, item);
      })) : null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_document_events__WEBPACK_IMPORTED_MODULE_15___default.a, {
        onClick: this.handleOutSideClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }));
    }
  }]);

  return FontSizePicker;
}(react__WEBPACK_IMPORTED_MODULE_9__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(FontSizePicker, "propTypes", {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  fontSize: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string]),
  rootClasses: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object
});

/* harmony default export */ __webpack_exports__["default"] = (FontSizePicker);

/***/ }),

/***/ "./src/scripts/containers/ToolbarContainer/InnerLinkComponent/index.js":
/*!*****************************************************************************!*\
  !*** ./src/scripts/containers/ToolbarContainer/InnerLinkComponent/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InnerLinkComponent; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components */ "./src/scripts/components/index.js");
/* harmony import */ var components_Icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Icons */ "./src/scripts/components/Icons/index.js");







var _jsxFileName = "/Users/xiwz/ynote/mindmap/src/scripts/containers/ToolbarContainer/InnerLinkComponent/index.js";





var InnerLinkComponent =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(InnerLinkComponent, _PureComponent);

  function InnerLinkComponent() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, InnerLinkComponent);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(InnerLinkComponent).call(this));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleOutSideClick", function (event) {
      if (_this.anchorElRef.current.contains(event.target) || _this.innerLink.current && _this.innerLink.current.contains(event.target) || _this.state.open === false) {
        return;
      }

      _this.setState({
        open: false
      });

      mindmapEditor.__uistatus__.focus = '';
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleClick", function (e, link) {
      if (_this.getDisable()) return;

      _this.props.onClick(e, link);

      _this.setState({
        open: false
      });

      mindmapEditor.__uistatus__.focus = '';
      e.stopPropagation();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleOpen", function () {
      if (_this.getDisable()) return;

      _this.setState({
        open: true
      });

      mindmapEditor.__uistatus__.focus = 'link';
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "getDisable", function () {
      var _this$props = _this.props,
          id = _this$props.id,
          link = _this$props.link,
          disabled = _this$props.disabled;
      if (disabled) return true; // 如果是笔记内链，那么禁止编辑

      if (link && link.name) return true;
      return id === 'root' || id == null;
    });

    _this.innerLink = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    _this.anchorElRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    _this.state = {
      open: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(InnerLinkComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('click', this.handleOutSideClick);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.handleOutSideClick);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          id = _this$props2.id,
          link = _this$props2.link,
          rootClasses = _this$props2.rootClasses;
      var value = link ? link.value : undefined;
      var isSelected = false;

      if (link && !link.isInnerLink && value) {
        isSelected = true;
      }

      var disable = this.getDisable();
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        ref: this.anchorElRef,
        onClick: this.handleOpen,
        className: "".concat(rootClasses.toolbarItem, " ").concat(isSelected ? rootClasses.toolbarItemActive : ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_9__["Tooltip"], {
        title: "\u94FE\u63A5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components_Icons__WEBPACK_IMPORTED_MODULE_10__["HyperLink"], {
        disabled: disable,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_9__["Popper"], {
        open: !disable && this.state.open,
        anchorEl: this.anchorElRef.current,
        placement: "bottom",
        style: {
          zIndex: 1000
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_9__["InnerLink"], {
        ref: this.innerLink,
        id: id,
        value: value,
        onClick: function onClick(event, val) {
          return _this2.handleClick(event, val);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }))));
    }
  }]);

  return InnerLinkComponent;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(InnerLinkComponent, "propTypes", {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  link: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  id: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  rootClasses: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object
});

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(InnerLinkComponent, "defaultProps", {
  disabled: false
});



/***/ }),

/***/ "./src/scripts/containers/ToolbarContainer/LayoutLogic/LayoutLogic.js":
/*!****************************************************************************!*\
  !*** ./src/scripts/containers/ToolbarContainer/LayoutLogic/LayoutLogic.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LayoutLogic; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var common_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! common/constants */ "./src/scripts/common/constants.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components */ "./src/scripts/components/index.js");
/* harmony import */ var components_Icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/Icons */ "./src/scripts/components/Icons/index.js");
/* harmony import */ var common_events__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! common/events */ "./src/scripts/common/events/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _bridges__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../bridges */ "./src/scripts/bridges/index.js");
/* harmony import */ var _common_client__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../common/client */ "./src/scripts/common/client.js");
/* harmony import */ var _images_default_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../images/default.png */ "./src/scripts/images/default.png");
/* harmony import */ var _images_default_png__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_images_default_png__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _images_simple_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../images/simple.png */ "./src/scripts/images/simple.png");
/* harmony import */ var _images_simple_png__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_images_simple_png__WEBPACK_IMPORTED_MODULE_21__);











var _jsxFileName = "/Users/xiwz/ynote/mindmap/src/scripts/containers/ToolbarContainer/LayoutLogic/LayoutLogic.js";

function _templateObject8() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2___default()(["\n  width: 87px;\n  height: 62px;\n  border: 1px solid;\n  border-color: ", ";\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2___default()(["\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  padding: 19px 12px;\n  border: 1px solid #e0e1e5;\n  font-size: 12px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2___default()(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2___default()(["\n  color: #666666;\n  font-size: 12px;\n  font-weight: 400;\n  margin-bottom: 8px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2___default()(["\n  margin-bottom: 29px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2___default()(["\n  display: flex;\n  justify-content: space-between;\n  width: 186px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2___default()(["\n  display: flex;\n  flex-direction: column;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2___default()(["\n  display: flex;\n  justify-content: space-evently;\n  align-items: center;\n  width: 42px;\n  font-size: 12px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}














var Strategy = [['右侧布局', 'logic_right'], ['左侧布局', 'logic_left'], // ['组织结构朝下', 'logic_bottom'],
// ['组织结构朝上', 'logic_top'],
['平衡布局', 'logic_left_right']];

var LayoutLogic =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(LayoutLogic, _PureComponent);

  function LayoutLogic(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, LayoutLogic);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(LayoutLogic).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this), "iconRef", react__WEBPACK_IMPORTED_MODULE_11___default.a.createRef());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this), "handleChange", function (item) {
      return function (event) {
        event.stopPropagation();

        _this.toggleShow();

        _this.props.onChange(item, _this.props.lineType);
      };
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this), "handleChangeCanvas", function (lineType) {
      if (_common_client__WEBPACK_IMPORTED_MODULE_19__["default"].isPC()) {
        if (lineType === 'simple') {
          var isVip = _bridges__WEBPACK_IMPORTED_MODULE_18__["pcBridge"].IsVip();

          if (isVip) {
            _this.props.onChange(_this.props.strategy, lineType);
          }

          return;
        }

        _this.props.onChange(_this.props.strategy, lineType);

        return;
      }

      if (lineType === 'simple' && !common_constants__WEBPACK_IMPORTED_MODULE_13__["__DEV__"]) {
        mindmapEditor.emit('controller:check:vip', function (isVip) {
          if (isVip) {
            _this.props.onChange(_this.props.strategy, lineType);
          }
        });
        return;
      }

      _this.props.onChange(_this.props.strategy, lineType);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this), "toggleShow", function () {
      _this.setState(function (_ref) {
        var show = _ref.show;
        return {
          show: !show
        };
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this), "reset", function () {
      _this.setState({
        show: false
      });
    });

    _this.state = {
      show: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(LayoutLogic, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      common_events__WEBPACK_IMPORTED_MODULE_16__["default"].on(common_constants__WEBPACK_IMPORTED_MODULE_13__["RESET_TOOLBAR"], this.reset);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      common_events__WEBPACK_IMPORTED_MODULE_16__["default"].removeListener(common_constants__WEBPACK_IMPORTED_MODULE_13__["RESET_TOOLBAR"], this.reset);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          rootClasses = _this$props.rootClasses,
          lineType = _this$props.lineType,
          strategy = _this$props.strategy;
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: rootClasses.toolbarItem,
        onClick: this.toggleShow,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_14__["Tooltip"], {
        title: "\u6837\u5F0F",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(WrapperSelect, {
        ref: this.iconRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(components_Icons__WEBPACK_IMPORTED_MODULE_15__["Style"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), "\u6837\u5F0F")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(components_Icons__WEBPACK_IMPORTED_MODULE_15__["Arrow"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_14__["Popper"], {
        open: this.state.show,
        anchorEl: this.iconRef.current,
        style: {
          zIndex: 1000
        },
        forceUpdate: this.state.show,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_14__["ClickAwayListener"], {
        onClickAway: this.reset,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(StyledDropDown, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(CanvasSelect, {
        selectedValue: lineType,
        onChange: this.handleChangeCanvas,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(StyledTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "\u5E03\u5C40\u65B9\u5F0F"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(WrapperLayout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, Strategy.map(function (_ref2) {
        var _ref3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_ref2, 2),
            item = _ref3[0],
            name = _ref3[1];

        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_14__["CheckBox"], {
          label: item,
          checked: strategy === name,
          key: item,
          onClick: _this2.handleChange(name),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        });
      }))))));
    }
  }]);

  return LayoutLogic;
}(react__WEBPACK_IMPORTED_MODULE_11__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(LayoutLogic, "propTypes", {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func.isRequired,
  strategy: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
  rootClasses: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.object,
  lineType: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string
});


var WrapperSelect = styled_components__WEBPACK_IMPORTED_MODULE_17__["default"].div(_templateObject());
var WrapperLayout = styled_components__WEBPACK_IMPORTED_MODULE_17__["default"].div(_templateObject2());
var WrapperPanel = styled_components__WEBPACK_IMPORTED_MODULE_17__["default"].div(_templateObject3());
var CanvasSelectWrapper = styled_components__WEBPACK_IMPORTED_MODULE_17__["default"].div(_templateObject4());

var CanvasSelect = function CanvasSelect(props) {
  var selectedValue = props.selectedValue,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(props, ["selectedValue"]);

  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(CanvasSelectWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(StyledTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "\u8BF7\u9009\u62E9\u753B\u5E03"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(WrapperPanel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(ImagePanel, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    src: _images_default_png__WEBPACK_IMPORTED_MODULE_20___default.a,
    content: "\u7ECF\u5178"
  }, rest, {
    selected: selectedValue === 'default',
    value: "default",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(ImagePanel, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    src: _images_simple_png__WEBPACK_IMPORTED_MODULE_21___default.a,
    content: "\u7B80\u6D01"
  }, rest, {
    selected: selectedValue === 'simple',
    value: "simple",
    Icon: components_Icons__WEBPACK_IMPORTED_MODULE_15__["Vip"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }))));
};

CanvasSelect.propTypes = {
  selectedValue: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func
};
var StyledTitle = styled_components__WEBPACK_IMPORTED_MODULE_17__["default"].h3(_templateObject5());
var StyledPanel = styled_components__WEBPACK_IMPORTED_MODULE_17__["default"].div(_templateObject6(), function (props) {
  return props.selected ? '#4C94FF' : '#666666';
});
var StyledDropDown = styled_components__WEBPACK_IMPORTED_MODULE_17__["default"].div(_templateObject7());
var StyledImg = styled_components__WEBPACK_IMPORTED_MODULE_17__["default"].img(_templateObject8(), function (props) {
  return props.selected ? '#4C94FF' : '#E0E1E5';
});

var ImagePanel = function ImagePanel(_ref4) {
  var content = _ref4.content,
      src = _ref4.src,
      value = _ref4.value,
      onChange = _ref4.onChange,
      selected = _ref4.selected,
      Icon = _ref4.Icon;
  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(StyledPanel, {
    selected: selected,
    onClick: function onClick() {
      return onChange(value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(StyledImg, {
    selected: selected,
    src: src,
    alt: content,
    width: "87",
    height: "62",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, content, Icon && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Icon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  })));
};

ImagePanel.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
  content: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool,
  Icon: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func
};

/***/ }),

/***/ "./src/scripts/containers/ToolbarContainer/LayoutLogic/index.js":
/*!**********************************************************************!*\
  !*** ./src/scripts/containers/ToolbarContainer/LayoutLogic/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LayoutLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutLogic */ "./src/scripts/containers/ToolbarContainer/LayoutLogic/LayoutLogic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _LayoutLogic__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/scripts/containers/ToolbarContainer/StyleEditor/index.js":
/*!**********************************************************************!*\
  !*** ./src/scripts/containers/ToolbarContainer/StyleEditor/index.js ***!
  \**********************************************************************/
/*! exports provided: Bold, Italic, UnderLine, DeleteLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bold", function() { return Bold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Italic", function() { return Italic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnderLine", function() { return UnderLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteLine", function() { return DeleteLine; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components */ "./src/scripts/components/index.js");
/* harmony import */ var components_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Icons */ "./src/scripts/components/Icons/index.js");
var _jsxFileName = "/Users/xiwz/ynote/mindmap/src/scripts/containers/ToolbarContainer/StyleEditor/index.js";





var emptyFunc = function emptyFunc() {};

var Bold = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (_ref) {
  var hotKey = _ref.hotKey,
      fontWeight = _ref.fontWeight,
      onClick = _ref.onClick,
      disabled = _ref.disabled,
      rootClasses = _ref.rootClasses;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: "\u52A0\u7C97 | ".concat(hotKey, "+B"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(rootClasses.toolbarItem, " ").concat(fontWeight === 'bold' ? rootClasses.toolbarItemActive : ''),
    onClick: disabled ? emptyFunc : onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Icons__WEBPACK_IMPORTED_MODULE_3__["Bold"], {
    disabled: disabled,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })));
});
Bold.displayName = Blob;
Bold.propTypes = {
  hotKey: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  fontWeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  rootClasses: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
var Italic = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (_ref2) {
  var hotKey = _ref2.hotKey,
      fontStyle = _ref2.fontStyle,
      onClick = _ref2.onClick,
      disabled = _ref2.disabled,
      rootClasses = _ref2.rootClasses;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: "\u659C\u4F53 | ".concat(hotKey, "+I"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(rootClasses.toolbarItem, " ").concat(fontStyle === 'italic' ? rootClasses.toolbarItemActive : ''),
    onClick: disabled ? emptyFunc : onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Icons__WEBPACK_IMPORTED_MODULE_3__["Italic"], {
    disabled: disabled,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })));
});
Italic.displayName = Italic;
Italic.propTypes = {
  hotKey: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  fontStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  rootClasses: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
var UnderLine = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (_ref3) {
  var textDecoration = _ref3.textDecoration,
      onClick = _ref3.onClick,
      disabled = _ref3.disabled,
      hotKey = _ref3.hotKey,
      rootClasses = _ref3.rootClasses;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: "\u4E0B\u5212\u7EBF | ".concat(hotKey, "+U"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(rootClasses.toolbarItem, " ").concat(textDecoration && textDecoration.includes('underline') ? rootClasses.toolbarItemActive : ''),
    onClick: disabled ? emptyFunc : onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Icons__WEBPACK_IMPORTED_MODULE_3__["UnderLine"], {
    disabled: disabled,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })));
});
UnderLine.displayName = UnderLine;
UnderLine.propTypes = {
  hotKey: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  textDecoration: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  rootClasses: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
var DeleteLine = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (_ref4) {
  var textDecoration = _ref4.textDecoration,
      onClick = _ref4.onClick,
      disabled = _ref4.disabled,
      hotKey = _ref4.hotKey,
      rootClasses = _ref4.rootClasses;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: "\u5220\u9664\u7EBF | ".concat(hotKey, "+E"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(rootClasses.toolbarItem, " ").concat(textDecoration && textDecoration.includes('line-through') ? rootClasses.toolbarItemActive : ''),
    onClick: disabled ? emptyFunc : onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Icons__WEBPACK_IMPORTED_MODULE_3__["Strike"], {
    iconName: "strike",
    iconClass: rootClasses.styleEditor,
    disabled: disabled,
    disabledName: "strike_disable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  })));
});
DeleteLine.displayName = DeleteLine;
DeleteLine.propTypes = {
  hotKey: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  textDecoration: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  rootClasses: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

/***/ }),

/***/ "./src/scripts/containers/ToolbarContainer/UndoRedo/index.js":
/*!*******************************************************************!*\
  !*** ./src/scripts/containers/ToolbarContainer/UndoRedo/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UndoRedo; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var common_undoStack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! common/undoStack */ "./src/scripts/common/undoStack.js");
/* harmony import */ var common_redoStack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! common/redoStack */ "./src/scripts/common/redoStack.js");
/* harmony import */ var common_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! common/constants */ "./src/scripts/common/constants.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components */ "./src/scripts/components/index.js");
/* harmony import */ var components_Icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/Icons */ "./src/scripts/components/Icons/index.js");
/* harmony import */ var common_events__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! common/events */ "./src/scripts/common/events/index.js");







var _jsxFileName = "/Users/xiwz/ynote/mindmap/src/scripts/containers/ToolbarContainer/UndoRedo/index.js";









var UndoRedo =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(UndoRedo, _Component);

  function UndoRedo() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UndoRedo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(UndoRedo)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "undo", function () {
      if (!common_undoStack__WEBPACK_IMPORTED_MODULE_9__["undoStack"].canUndo()) return;
      mindmapEditor.handleUndo();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "redo", function () {
      if (!common_redoStack__WEBPACK_IMPORTED_MODULE_10__["redoStack"].canRedo()) return;
      mindmapEditor.handleRedo();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "reset", function () {
      common_undoStack__WEBPACK_IMPORTED_MODULE_9__["undoStack"].reset();
      common_redoStack__WEBPACK_IMPORTED_MODULE_10__["redoStack"].reset();

      _this.forceUpdate();
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(UndoRedo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      common_events__WEBPACK_IMPORTED_MODULE_14__["default"].on(common_constants__WEBPACK_IMPORTED_MODULE_11__["RESET_TOOLBAR"], this.reset);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      common_events__WEBPACK_IMPORTED_MODULE_14__["default"].removeListener(common_constants__WEBPACK_IMPORTED_MODULE_11__["RESET_TOOLBAR"], this.reset);
    }
  }, {
    key: "render",
    value: function render() {
      var rootClasses = this.props.rootClasses;
      var canUndo = common_undoStack__WEBPACK_IMPORTED_MODULE_9__["undoStack"].canUndo();
      var canRedo = common_redoStack__WEBPACK_IMPORTED_MODULE_10__["redoStack"].canRedo();
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          display: 'flex'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: rootClasses.toolbarItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], {
        title: "\u64A4\u9500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components_Icons__WEBPACK_IMPORTED_MODULE_13__["Undo"], {
        onClick: this.undo,
        disabled: !canUndo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: rootClasses.toolbarItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], {
        title: "\u91CD\u505A",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components_Icons__WEBPACK_IMPORTED_MODULE_13__["Redo"], {
        onClick: this.redo,
        disabled: !canRedo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }))));
    }
  }]);

  return UndoRedo;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(UndoRedo, "propTypes", {
  rootClasses: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object
});



/***/ }),

/***/ "./src/scripts/containers/ToolbarContainer/baseComponent.js":
/*!******************************************************************!*\
  !*** ./src/scripts/containers/ToolbarContainer/baseComponent.js ***!
  \******************************************************************/
/*! exports provided: More, InsertBrotherComponent, InsertChildComponent, InsertParentComponent, BackTocenterComponent, GapLine, getDisabledStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "More", function() { return More; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertBrotherComponent", function() { return InsertBrotherComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertChildComponent", function() { return InsertChildComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertParentComponent", function() { return InsertParentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackTocenterComponent", function() { return BackTocenterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GapLine", function() { return GapLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDisabledStatus", function() { return getDisabledStatus; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components */ "./src/scripts/components/index.js");
/* harmony import */ var components_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Icons */ "./src/scripts/components/Icons/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/xiwz/ynote/mindmap/src/scripts/containers/ToolbarContainer/baseComponent.js";





var emptyFunc = function emptyFunc() {};

var More = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (_ref, ref) {
  var onClick = _ref.onClick,
      rootClasses = _ref.rootClasses;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: rootClasses.toolbarItem,
    onClick: onClick,
    ref: ref,
    id: "toolbar-more",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    title: "\u66F4\u591A",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      fontSize: 12,
      wordBreak: 'keep-all'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "\u66F4\u591A")));
});
More.displayName = 'More';
More.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  rootClasses: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
var InsertBrotherComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: props.rootClasses.toolbarItem,
    onClick: props.disabled ? emptyFunc : props.onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    title: "\u63D2\u5165\u540C\u7EA7\u4E3B\u9898 | Enter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Icons__WEBPACK_IMPORTED_MODULE_2__["InsertSibling"], {
    disabled: props.disabled,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })));
});
InsertBrotherComponent.displayName = 'InsertBrotherComponent';
InsertBrotherComponent.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  rootClasses: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
var InsertChildComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: props.rootClasses.toolbarItem,
    onClick: props.disabled ? emptyFunc : props.onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    title: "\u63D2\u5165\u4E0B\u7EA7\u4E3B\u9898 | Tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Icons__WEBPACK_IMPORTED_MODULE_2__["InsertChild"], {
    disabled: props.disabled,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })));
});
InsertChildComponent.displayName = 'InsertChildComponent';
InsertChildComponent.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  rootClasses: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
var InsertParentComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: props.rootClasses.toolbarItem,
    onClick: props.disabled ? emptyFunc : props.onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    title: "\u63D2\u5165\u4E0A\u7EA7\u4E3B\u9898",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Icons__WEBPACK_IMPORTED_MODULE_2__["InsertParent"], {
    disabled: props.disabled,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })));
});
InsertParentComponent.displayName = 'InsertParent';
InsertParentComponent.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  rootClasses: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
var BackTocenterComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: props.rootClasses.toolbarItem,
    key: "\u56DE\u5230\u4E2D\u5FC3",
    onClick: props.onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    title: "\u56DE\u5230\u4E2D\u5FC3 | ".concat(props.hotKey, "+0"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Icons__WEBPACK_IMPORTED_MODULE_2__["Location"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  })));
});
BackTocenterComponent.displayName = 'BackTocenterComponent';
BackTocenterComponent.propTypes = {
  hotKey: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  rootClasses: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
var GapLine = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (_ref2) {
  var rootClasses = _ref2.rootClasses;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(rootClasses.toolbarItem, " ").concat(rootClasses.toolbarSplit),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  });
});
GapLine.displayName = 'GapLine';
GapLine.propTypes = {
  rootClasses: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
var getDisabledStatus = function getDisabledStatus(selectedNodes, disbaledType) {
  if (!disbaledType) return false;
  var isSelected = selectedNodes.size !== 0;
  var isMultSelected = selectedNodes.size > 1;
  var isRoot = selectedNodes.has('root');

  switch (disbaledType) {
    case 1:
      return !isSelected;

    case 2:
      return isMultSelected;

    case 3:
      return !isSelected || isMultSelected;

    case 7:
      return !isSelected || isMultSelected || isRoot;

    default:
      return false;
  }
};

/***/ }),

/***/ "./src/scripts/containers/ToolbarContainer/index.js":
/*!**********************************************************!*\
  !*** ./src/scripts/containers/ToolbarContainer/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toolbar */ "./src/scripts/containers/ToolbarContainer/toolbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toolbar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/scripts/containers/ToolbarContainer/toolbar.js":
/*!************************************************************!*\
  !*** ./src/scripts/containers/ToolbarContainer/toolbar.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prop_types_exact__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types-exact */ "./node_modules/prop-types-exact/build/index.js");
/* harmony import */ var prop_types_exact__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types_exact__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_document_events__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-document-events */ "./node_modules/react-document-events/index.js");
/* harmony import */ var react_document_events__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_document_events__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _UndoRedo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./UndoRedo */ "./src/scripts/containers/ToolbarContainer/UndoRedo/index.js");
/* harmony import */ var _StyleEditor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./StyleEditor */ "./src/scripts/containers/ToolbarContainer/StyleEditor/index.js");
/* harmony import */ var _ColorPicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ColorPicker */ "./src/scripts/containers/ToolbarContainer/ColorPicker/index.js");
/* harmony import */ var _FontSizePicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./FontSizePicker */ "./src/scripts/containers/ToolbarContainer/FontSizePicker/index.js");
/* harmony import */ var _FontFamily__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./FontFamily */ "./src/scripts/containers/ToolbarContainer/FontFamily/index.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! components */ "./src/scripts/components/index.js");
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./baseComponent */ "./src/scripts/containers/ToolbarContainer/baseComponent.js");
/* harmony import */ var _RemarkContainer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../RemarkContainer */ "./src/scripts/containers/RemarkContainer/index.js");
/* harmony import */ var common_client__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! common/client */ "./src/scripts/common/client.js");
/* harmony import */ var _InnerLinkComponent__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./InnerLinkComponent */ "./src/scripts/containers/ToolbarContainer/InnerLinkComponent/index.js");
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../common/util */ "./src/scripts/common/util.js");
/* harmony import */ var _LayoutLogic__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./LayoutLogic */ "./src/scripts/containers/ToolbarContainer/LayoutLogic/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../common/constants */ "./src/scripts/common/constants.js");










var _jsxFileName = "/Users/xiwz/ynote/mindmap/src/scripts/containers/ToolbarContainer/toolbar.js";













// import FileUploadComponent from './FileUploadComponent';






function _getSelectNode(set, nodes) {
  var selectNode = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_8___default()(set)[0];

  return nodes.find(function (item) {
    return item.id === selectNode;
  }) || {};
}

var getSelecteNode = Object(_common_util__WEBPACK_IMPORTED_MODULE_24__["immutableTransFromCache"])(_getSelectNode);
var PaddingHelper = 60;

var Toolbar =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Toolbar, _Component);

  function Toolbar(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Toolbar);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Toolbar).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "renderItemList", function (toolbar, classes, _ref) {
      var selectedNodes = _ref.selectedNodes,
          nodes = _ref.nodes;

      if (!_this.cacheIconListMap.length) {
        _this.cacheIconListMap = [{
          Component: _UndoRedo__WEBPACK_IMPORTED_MODULE_14__["default"],
          data: function data() {
            return {
              key: 'UndoRedo'
            };
          }
        }, {
          Component: _baseComponent__WEBPACK_IMPORTED_MODULE_20__["InsertBrotherComponent"],
          data: function data() {
            return {
              disbaledType: 7,
              onClick: mindmapEditor.insertBrotherNode,
              key: 'InsertBrotherComponent'
            };
          }
        }, {
          Component: _baseComponent__WEBPACK_IMPORTED_MODULE_20__["InsertChildComponent"],
          data: function data() {
            return {
              disbaledType: 3,
              onClick: mindmapEditor.insertChildNode,
              key: 'InsertChildComponent'
            };
          }
        }, {
          Component: _baseComponent__WEBPACK_IMPORTED_MODULE_20__["InsertParentComponent"],
          data: function data() {
            return {
              disbaledType: 7,
              onClick: mindmapEditor.insertParentNode,
              key: 'InsertParentComponent'
            };
          }
        }, {
          Component: _baseComponent__WEBPACK_IMPORTED_MODULE_20__["BackTocenterComponent"],
          data: function data() {
            return {
              hotKey: _this.HotKey,
              onClick: mindmapEditor.scrollToCenter,
              key: 'BackTocenterComponent'
            };
          }
        }, {
          Component: _baseComponent__WEBPACK_IMPORTED_MODULE_20__["GapLine"],
          data: function data() {
            return {
              key: 'GapLine'
            };
          }
        }, {
          Component: _FontSizePicker__WEBPACK_IMPORTED_MODULE_17__["default"],
          data: function data(_ref2) {
            var fontSize = _ref2.fontSize;
            return {
              onChange: mindmapEditor.handleFontSize,
              key: 'FontSizePicker',
              fontSize: fontSize
            };
          }
        }, {
          Component: _FontFamily__WEBPACK_IMPORTED_MODULE_18__["default"],
          data: function data(_ref3) {
            var fontFamily = _ref3.fontFamily;
            return {
              onChange: mindmapEditor.handleFontFamily,
              key: 'FontFamily',
              fontFamily: fontFamily
            };
          }
        }, {
          Component: _StyleEditor__WEBPACK_IMPORTED_MODULE_15__["Bold"],
          data: function data(_ref4) {
            var fontWeight = _ref4.fontWeight;
            return {
              onClick: mindmapEditor.toggleBold,
              disbaledType: 1,
              hotKey: _this.HotKey,
              key: 'Bold',
              fontWeight: fontWeight
            };
          }
        }, {
          Component: _StyleEditor__WEBPACK_IMPORTED_MODULE_15__["Italic"],
          data: function data(_ref5) {
            var fontStyle = _ref5.fontStyle;
            return {
              onClick: mindmapEditor.toggleItalic,
              disbaledType: 1,
              hotKey: _this.HotKey,
              key: 'Italic',
              fontStyle: fontStyle
            };
          }
        }, {
          Component: _StyleEditor__WEBPACK_IMPORTED_MODULE_15__["UnderLine"],
          data: function data(_ref6) {
            var textDecoration = _ref6.textDecoration;
            return {
              onClick: mindmapEditor.toggleUnderline,
              disbaledType: 1,
              hotKey: _this.HotKey,
              key: 'UnderLine',
              textDecoration: textDecoration
            };
          }
        }, {
          Component: _StyleEditor__WEBPACK_IMPORTED_MODULE_15__["DeleteLine"],
          data: function data(_ref7) {
            var textDecoration = _ref7.textDecoration;
            return {
              onClick: mindmapEditor.toggleDeleteline,
              disbaledType: 1,
              hotKey: _this.HotKey,
              key: 'DeleteLine',
              textDecoration: textDecoration
            };
          }
        }, {
          Component: _baseComponent__WEBPACK_IMPORTED_MODULE_20__["GapLine"],
          data: function data() {
            return {
              key: 'GapLine1'
            };
          }
        }, {
          Component: _ColorPicker__WEBPACK_IMPORTED_MODULE_16__["default"],
          data: function data(_ref8) {
            var color = _ref8.color;
            return {
              onChange: _this.handleColor,
              disbaledType: 1,
              key: 'ColorPicker',
              color: color
            };
          }
        }, {
          Component: _baseComponent__WEBPACK_IMPORTED_MODULE_20__["GapLine"],
          data: function data() {
            return {
              key: 'GapLine2'
            };
          }
        }, {
          Component: _RemarkContainer__WEBPACK_IMPORTED_MODULE_21__["default"],
          data: function data(_ref9) {
            var selectNode = _ref9.selectNode;
            return {
              key: 'RemarkContainer',
              disbaledType: 7,
              data: selectNode
            };
          }
        }, {
          Component: _baseComponent__WEBPACK_IMPORTED_MODULE_20__["GapLine"],
          data: function data() {
            return {
              key: 'GapLine3'
            };
          }
        }, {
          Component: _InnerLinkComponent__WEBPACK_IMPORTED_MODULE_23__["default"],
          data: function data(_ref10) {
            var link = _ref10.link,
                selectNode = _ref10.selectNode;
            return {
              onClick: _this.handleSubmitLink,
              disbaledType: 7,
              key: 'InnerLinkComponent',
              id: selectNode ? selectNode.id : null,
              link: link
            };
          }
        }, {
          Component: _LayoutLogic__WEBPACK_IMPORTED_MODULE_25__["default"],
          data: function data(_ref11) {
            var strategy = _ref11.strategy,
                lineType = _ref11.lineType;
            return {
              onChange: _this.handleLayoutChange,
              key: 'LayoutLogic',
              strategy: strategy,
              lineType: lineType
            };
          }
        }];
        _this.iconListMap = _this.cacheIconListMap.slice();
      }

      var copyToolbar = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, toolbar);

      var selectNode = getSelecteNode(selectedNodes, nodes);
      var link = selectNode && selectNode.link ? selectNode.link : null;
      copyToolbar.link = link;
      copyToolbar.selectNode = selectNode;
      return _this.iconListMap.map(function (config) {
        var configResult = config.data(copyToolbar);
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(config.Component, _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, configResult, {
          disabled: Object(_baseComponent__WEBPACK_IMPORTED_MODULE_20__["getDisabledStatus"])(selectedNodes, configResult.disbaledType) || mindmapEditor.isEditing,
          rootClasses: classes
        }));
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "recordMoreIconWidth", function () {
      if (_this.cacheToolbarMoreIconWidth) return;
      var moreIcon = document.getElementById('toolbar-more');
      _this.cacheToolbarMoreIconWidth = moreIcon ? moreIcon.offsetWidth : 0;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "handleLayoutChange", function () {
      var _mindmapEditor;

      (_mindmapEditor = mindmapEditor).handleLayoutStrategy.apply(_mindmapEditor, arguments);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "handleResize", function () {
      var SumWidth = 0;

      if (!document.getElementById('toolbar') || document.getElementById('toolbar').offsetWidth === 0) {
        _common_constants__WEBPACK_IMPORTED_MODULE_27__["__DEV__"] && console.log('not found toolbar');
        return;
      }

      var cacheToolbarWidth = parseInt(document.getElementById('toolbar').offsetWidth, 10) - PaddingHelper;
      _common_constants__WEBPACK_IMPORTED_MODULE_27__["__DEV__"] && console.log('cacheToolbarWidth', cacheToolbarWidth);
      _this.cacheToolbarWidth = cacheToolbarWidth;
      var cacheIconListMap = _this.cacheIconListMap;
      var cacheToolbarMoreIconWidth = _this.cacheToolbarMoreIconWidth; // eslint-disable-next-line no-unused-vars

      var iconListMap;
      var remainIconList = [];

      _this.cacheItemWidth.every(function (item, index) {
        SumWidth += item;

        if (SumWidth + cacheToolbarMoreIconWidth > cacheToolbarWidth) {
          iconListMap = cacheIconListMap.slice(0, index);
          remainIconList = cacheIconListMap.slice(index) || [];
          return false;
        }

        return true;
      });

      if (!iconListMap) {
        iconListMap = cacheIconListMap.slice();
      }

      if (!remainIconList.length) {
        _this.setState({
          showMore: false
        });
      }

      _this.iconListMap = iconListMap;
      _this.remainIconList = remainIconList;

      _this.forceUpdate();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "gapComponent", function (index) {
      var classes = _this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "".concat(classes.toolbarItem, " ").concat(classes.toolbarSplit),
        key: "split-".concat(index),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "_canToggle", function () {
      return !mindmapEditor.isEditing && _this.props.nodeContainer.state.selectedNodes.size !== 0;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "handleSubmitLink", function (e, link) {
      if (!link.id || !link.value) {
        mindmapEditor.removeLink(link);
        return;
      }

      mindmapEditor.insertLink(link);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "handleColor", function (color) {
      if (!_this.state.cacheSelectedNode.size) return;
      mindmapEditor.handleColor(_this.state.cacheSelectedNode, color);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "handleShowMore", function () {
      _this.setState({
        showMore: true
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "renderRemainList", function (toolbar, classes, _ref12) {
      var selectedNodes = _ref12.selectedNodes,
          nodes = _ref12.nodes;
      var selectNode = getSelecteNode(selectedNodes, nodes);
      var link = selectNode && selectNode.link ? selectNode.link : null;

      var copyToolbar = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, toolbar);

      copyToolbar.link = link;
      copyToolbar.selectNode = selectNode;
      return _this.remainIconList.map(function (config) {
        var configResult = config.data(copyToolbar);
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(config.Component, _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, configResult, {
          disabled: Object(_baseComponent__WEBPACK_IMPORTED_MODULE_20__["getDisabledStatus"])(selectedNodes, configResult.disbaledType),
          rootClasses: classes
        }));
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "handleClickOutside", function (event) {
      var moreContainer = document.getElementById('more-container');

      if (_this.moreIconRef.current && _this.moreIconRef.current.contains(event.target) || moreContainer && moreContainer.contains(event.target) || mindmapEditor.__uistatus__.focus) {
        return;
      }

      if (_this.state.showMore === true) {
        // 注意这里加setTimeout 是优先触发弹窗里的事件，然后再隐藏弹窗
        setTimeout(function () {
          _this.setState({
            showMore: false
          });
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "handleReadOnly", function () {
      _this.props.toolbarContainer.handleReadOnly();
    });

    _this.HotKey = common_client__WEBPACK_IMPORTED_MODULE_22__["default"].isMac() ? 'Command' : 'Ctrl';
    _this.handleResize = lodash_debounce__WEBPACK_IMPORTED_MODULE_9___default()(_this.handleResize, 300);
    _this.state = {
      showMore: false
    };
    _this.toolbarRef = react__WEBPACK_IMPORTED_MODULE_10___default.a.createRef();
    _this.cacheIconListMap = []; // 完整的 toolbar 组件

    _this.iconListMap = []; // 显示的 toolbar 组件

    _this.remainIconList = []; // 未直接显示的 toolbar 组件，在更多种

    _this.cacheItemWidth = [];
    _this.moreIconRef = react__WEBPACK_IMPORTED_MODULE_10___default.a.createRef();
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Toolbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener('resize', this.handleResize);
      this.recordMoreIconWidth();
      var htmlCollection = this.toolbarRef.current.children; // didmount 后不一定马上能获得宽高

      setTimeout(function () {
        [].forEach.call(htmlCollection, function (item) {
          var outerWidth = Object(_common_util__WEBPACK_IMPORTED_MODULE_24__["getOuterWidth"])(item);

          _this2.cacheItemWidth.push(outerWidth);
        });

        _this2.handleResize();
      }); // 编辑状态下 触发更新

      mindmapEditor.on('controller:update:toolbar', this.handleResize);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.recordMoreIconWidth();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
      mindmapEditor.removeListener('controller:update:toolbar', this.handleResize);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          nodeContainer = _this$props.nodeContainer,
          toolbar = _this$props.toolbarContainer.state.toolbar,
          classes = _this$props.classes;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: classes.root,
        id: "toolbar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: classes.toolbar,
        ref: this.toolbarRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        },
        __self: this
      }, this.renderItemList(toolbar, classes, nodeContainer.state), this.remainIconList.length > 0 && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_baseComponent__WEBPACK_IMPORTED_MODULE_20__["More"], {
        onClick: this.handleShowMore,
        ref: this.moreIconRef,
        rootClasses: classes,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_19__["Popper"], {
        open: this.state.showMore,
        anchorEl: this.moreIconRef.current,
        style: {
          zIndex: 1000
        },
        forceUpdate: this.state.showMore // 强制更新使得当resize 时弹窗重新计算位移
        ,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: classes.more,
        id: "more-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        },
        __self: this
      }, this.renderRemainList(toolbar, classes, nodeContainer.state))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_document_events__WEBPACK_IMPORTED_MODULE_13___default.a, {
        onClick: this.handleClickOutside,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        },
        __self: this
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      return {
        cacheSelectedNode: nextProps.nodeContainer.state.selectedNodes
      };
    }
  }]);

  return Toolbar;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

Toolbar.propTypes = prop_types_exact__WEBPACK_IMPORTED_MODULE_12___default()({
  nodeContainer: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object,
  toolbarContainer: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object
});
var styles = {
  root: {
    transform: 'translateZ(0)',
    position: 'fixed',
    top: '0',
    zIndex: '255',
    width: '100%',
    borderTop: '1px solid rgba(0,0,0,.05)',
    borderBottom: '1px solid rgba(0,0,0,.05)',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    WebkitUserSelect: 'none',
    userSelect: 'none',
    '&:after': {
      content: ' ',
      display: 'block',
      height: '0',
      clear: 'both'
    },
    '&:hover': {
      cursor: 'pointer'
    }
  },
  toolbar: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    padding: '8px 0 8px 29px'
  },
  more: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    background: '#fff',
    boxShadow: '0 1px 16px rgba(90,109,122,.4)',
    padding: '8px'
  },
  toolbarSplit: {
    width: '1px',
    height: '18px',
    backgroundColor: 'rgba(0,0,0,.05)',
    cursor: 'none',
    padding: '0 !important'
  },
  toolbarItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '5px',
    margin: '0 15px 0 0',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#f1f3f6',
      borderRadius: '1px',
      borderColor: '#f1f3f6'
    }
  },
  toolbarItemActive: {
    backgroundColor: '#f1f3f6',
    borderRadius: '1px',
    borderColor: '#f1f3f6'
  },
  arrow: {
    width: 7,
    height: 5
  },
  arrowWrapper: {
    width: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dropdown: {
    position: 'absolute',
    top: '25px',
    display: 'flex',
    flexDirection: 'column',
    width: '80px',
    backgroundColor: 'white',
    boxShadow: '0 0 4px 0 rgba(0,0,0,.1)',
    borderRadius: '2px',
    border: '1px solid #e0e1e5',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '12px',
    zIndex: '10'
  },
  dropdownItem: {
    width: '100%',
    lineHeight: '2.5',
    textAlign: 'center',
    '&.selected': {
      backgroundColor: '#f1f3f6'
    },
    '&:hover': {
      backgroundColor: '#f1f3f6',
      transition: 'background-color .3s ease'
    }
  },
  styleEditor: {
    borderColor: 'transparent',
    cursor: 'pointer',
    width: '18px',
    height: '18px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_26__["withStyles"])(styles)(Toolbar));

/***/ }),

/***/ "./src/scripts/images/default.png":
/*!****************************************!*\
  !*** ./src/scripts/images/default.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAB8CAMAAADHJHv4AAAAb1BMVEVHcEyozP976Obh4uJFkP/5+vvb6f////9MlP/E3P+Wlpbu7u6jo6PU1NSvrq6Xwf9Jkv/Hx8bs9v9sp/95eXmKiYnZ+fi11P+7u7pbnf/R4//E9fVhYWGHuP+S7Oti4+HH2PKs8fBDjv9AjP89iv+v5FavAAAAAXRSTlMAQObYZgAABqdJREFUeNrtWouWojgQHQzFI08SEhMw6NGZ///GreCrZ3Z6VnRbcZd7NKDE05fqetyk+PZtwYIFCxYsWLBgwYIFCxbMHOUMsdBd6C50/y3owMqSy0BKiSgF0VzPli7TkguhY4wELOeWWaelhrnSBc651NxFx5mT0oGN3PLZ0i0Dlxy0i5xDoksc0qezpUu4tVRrq9FtkzOARvrJm2fqu4IQQQQDzUrCGCnxTWaZGQqvPkU2N7qglC/Mp5gZXVB1Gt+lTPjsraraYN6JbqHeSjPUfl50iSRSME1CIEJqJhjRQWD2h2N0Zf1F4aCuwWwrCWDq1XiKmgeeTjdEGy0LQsggopSc8BgpK4GIsWKp4pwhHLU0COcoZVLSQDjFic+3Lo02EEcoFdxSKYWL0YqSEEYgpTH4SFdrJzlO1M7i7UUank5XoHEpBB1KFmJIdBEE6ZJE11wiLdF1Wmu8D9S7NBJmY2TPpystp4RarqmmIKhGE1uCzkASF++v85gMgY8EnWVOoMIRr1BkGGWAygVDDfAcX+i35zR2zboMlQ1G4vEcrV+C0OWzQg1MX3ufZSpL8NlvMQzdcD5Xv5+S+a+niwprUJmv6x5R9EUxDgmnQ3H8qq6H4XTa9+eLfXH9SRq+mm6vVF3AjZMveexVZSK7mcF4b9lr6WZ+0nSj/gW6pr4XakjjBPsq8zDdvsub/E6MP6xuN/GtrvMHul1TPYamvV2d15f0rAUm5hIzL2gtNANyI91H2U6he401omlarUceSLQuosJwt9F9lG2Vt9NjDYuY1YRhlSZIF3UOyGfRnWDdi/MyjrpCoLykgljHUQUFC7OzbtkP130cfBNkqyOq3sCpu4Nuc/TkZjzLf3LrHL/LTxfvtm7pT/aFtD0a0sYeSnkckiKaSLfJD217SKmpRZO1h6HLr9e6IT90w+HQVG1TdV3V3WXdsWqjlPG+Tu+E8TB+rifRbVo1FP2g1ND1vq2Ngqxt/FGJtAf8lHmT+bYrsiGJmSG/x7op3vpPqk4/zbqD780oAKuuzrLeeN/mXdslVEjS+EIZ1X3v6vSdV/ld1n20THz0zqJIwvTQtW2HerD26BIndKqt8R9WtLnKxpu40m1eRLeqMRKU7/O2N22BvtQ3vu8B5Wlfo+mzdDNtM/RZk8Tp8GLrIrcaLdrXGPr9iW6Vd6atBswTqq5NUfuh+qGypm+ra954lXXbytdo3RNdJJ7o1tmhSpbEFUOBt9N3B5V1PQqN4Sw2XuW7Ve4xxJBu3ppRGvq8UQWGVWY69GVfYFpQ6rsyiXRVtM0j1mUMzkNaJgMwxqbSrYcfLfpuZzI0LjIfOmNwFVUXGTrqd19gKlPfs75FZ+6L7gHfBSY5YSSiuCkd5w64DLdti3ysT0Obt37Iu/RKm+9thTmhQ0JDM1YKBB7S5/biC3dZl0nJQwg2WjH21cBaSSVMLMIYPs0hT8UWK1yS3xhjTXWpvkmOj0V4lObVI5kh9aUId5a6sa/GLMoyOTtFdnEGTalkKMY0L10IDn0D+bO5KbLr1h9CS8moKLmUFOW6lgzmaF2z3uw3n+AJi59p1l2vdqvtZ9g/YWk5ie5+t4GHykTd3b1sPy74Jyzcy80OHqxqZfHYrsiUbZFytXndptN6NfUXZvfKPbLdeuIPNttX0t3/3byYOwHSO73YOHzw1kvol0nRJHlz7GEd5c5X04Xdr64IjgspnLRRyEgjZVxzJ07S64PrAk2dH8Yj17gmppwQ4eyXPzq03v2ypeico1xYHmNqP9lAONNUl0yI1PkpL9PHzk/AS8EJ1GJUUB7d1/fV9r+4r+Y0ULSWtWiuaAMWWXp6ICQ1qnbXvho/9tWkZlJbBwLvkHx9K2Wz25qfGlUycBGptQLVIeUMDVeG0bpp8sXXGQ1OBjkSpE5HLSjlz2gDmu1uu75EE3FoXfzTeGCMcsd4cC6kyPo56woNmuujYpQcAoRAITylr2b2SQagalknbNab4+E8nLHZrHbrz3Gc+5w2oNnst9vVn7FD/MOU1XZGzzPAZndja2Imj19st29F92aRMQ+6sIN3oluu1m9Fd7t5L7r7D9XaAhOUpNU7xRro9Pzofog1QOUjpJWaRIt0dbDzowvnzEuoi6h9gpUC6UouUMvNj+418zJCGQChgpGI2lcQEWF+dM3u5L3AeRI3FnWYtZZKPkffRb6r1WadntQVzJj0vBZhMA4ABuZHNy0vV59one0c6R594XcoZ0v3PcrE/4/uggULFixYsGDBggULFixY8B/HX5fdkKxtU+TTAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/scripts/images/simple.png":
/*!***************************************!*\
  !*** ./src/scripts/images/simple.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAB8CAMAAADHJHv4AAAAYFBMVEVHcExER1lETFhJkv9DS1RCS1RCSE1DS1RCTFNGSldHc7FDS1RDTVhDS1VDS1RDS1RDSlNDS1RDSlFDS1RDS1RDS1RLjfBIlP9EW3xJk/9IhN1Jd7tHbKJKjPBFXX5GTlhY7AdzAAAAH3RSTlMAB7lp5HHHZyoPtjgdgMJdj0TaUJyrqzMu8HOX7szOO97NRwAABLFJREFUeNrtmw1v2zgMhkXPEqWJ1Lc7HNpd/v+/PMlpu6JIhzjZxRamt3GcGEbzmKZIiZKFGBoaGhoaGhoaGhoaOryAT9dL6b1xQ5J4tcq8M6+e7ZbTF7Uvrp1hy+l4Grh/By58eD/vYP07JK725AXYyD5qIC2JIDNjwXqC1kfDJSbhc8UNMmryuKA3yEEGCYIC7oxL1nOZnEtvuH4Nv0YHllIIU+mNyPWzr7jC+h1xTQxuTq6w9J7fncEEjfWeo85ZQPaLzyIH9Ox3xYVYUiqozVuaeGta0QukemAJ1L5WEwu5ZMy4Iy54l0qEC75rUUsEQE8as5bVZ6XNGSVK03xjF1yvkjRfBjLzK369X17VXoHMTgmhmzTBczDdZDWaUrwYd82mS34Qrk3LRS5IgczVirN8CG2e+asOr5o3iB8TEU74dWzT14seY9tT7mj0GE++I1o9Y0e0JoWeCgnLBB3Rypm6ctzYU0nJdeW4Mu3kuD++3aKX5/b+4+G0356ev2/Xy8u6e3p6bHODH08lqdv1/PRY4/58TreXKiG4p8f6wz9TuSeapd/gapRXK8O1uPcEJPoNrp/ddLWSM/vi0rylt2bUsi/uxqGlPHWFizfiGv9e8HpvM+dZBrKWtLXWHAcXwCpzrq/AtHa+wZjs6lgVxFLFLhV9GFypnJqdU7ZZWadm1eycO9XNi6ksi5xc2WpdS5YEECFRPRTb1XqfvbTrHbsHNzBFRTRlEbMTVrNu1iWlV+uWKuZpo3WJgSRoj4tHsjKUGmTrv+FSnc2y9PfgSqFdHSdkUe0I63ehdVRRV24uRRYuy0fc08u/7rLUa5fNhGwtepGxeNuczQMAs8R6TFij+Q5cToubp2WO4KIDAXYCU5apHirGlMnJat5CH4PrT/5iHvK9HG1yiAzVkMRWEHJBa2TwNZO1Vsx0B65H7ZW1rONEFdfLqYUHc045RSqMqgTY6LvVqK2i5Jf1vtvc+hrBSmzOUN6q17cGsuYMtYF5qj5cDaENkVaayJiUFlvQbI0MGZsvEGJEpOw5eG8lo/SVPq7Q9+G+zoKV6oCVLNRdqlvIIU/LVINZ3tjUBOnXMnm9ZmoyNVB8KjTdnCbeZ55bNFjjrlk3aD9Sf0WbI2W1zpLwX9rF6awD+X91z7sa/HQ2tOxr4A59lUW6KzrdKFaiJ5nEXfHabcva9neHZHrCBbd0ZV560LTzH3PfrqZYWy8mdsUru+P92h+Ot0CgDlq+nMY+4vKLtlwkwOW0d8TFLc2KTl/MeodcOtSqYLOEB42E/4iiUrkjXGHk7D4Nt469mNtwUqwv4pLRazno3INbi0DW6vpaa0T74LZy+zQrjvQZF5isb8PiCSVpz+zjWo5eYquXctwJt9kRl5TUwjJHi6+4hrMh9GBjiVoYyq3mH7gtj67XpK3cD3dNZZmXyak0v1bPwWLBtvycLWdBWYasjQwoMa9RJe+K+0YN8ddUSj6Xo5s5gSISAAcr21RKJMNHwP24Opp1lMJEyTIabZFrIyvFy+j39t3LuGC9ETqaikw2VtkaK2LMdr0L4mC4h4y7A/eh6uzxus4eXuzt0dChoaGhoaGhoaGhoaGhq/QfEP1lQOtjqpIAAAAASUVORK5CYII="

/***/ })

}]);
//# sourceMappingURL=3.js.map