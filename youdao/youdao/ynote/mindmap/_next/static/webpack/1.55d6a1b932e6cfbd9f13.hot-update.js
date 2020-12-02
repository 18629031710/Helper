webpackHotUpdate(1,{

/***/ "./src/scripts/containers/App/SvgLine/SvgLine.js":
/*!*******************************************************!*\
  !*** ./src/scripts/containers/App/SvgLine/SvgLine.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _theme_getTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/getTheme */ "./src/scripts/theme/getTheme.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");



var _jsxFileName = "/Users/xiwz/ynote/mindmap/src/scripts/containers/App/SvgLine/SvgLine.js";





var SvgLine = function SvgLine(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("svg", {
    width: "100%",
    height: "100%",
    id: "mind-canvas",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.lines.map(function (line) {
    return line && line.index && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Line, {
      key: line.d,
      line: line,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    });
  }));
};

SvgLine.propTypes = {
  lines: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array
};
var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    rootLine: Object(_theme_getTheme__WEBPACK_IMPORTED_MODULE_5__["getStroke"])(1, theme),
    mainLine: Object(_theme_getTheme__WEBPACK_IMPORTED_MODULE_5__["getStroke"])(2, theme)
  };
});

var areEqual = function areEqual(prevProps, nextProps) {
  return lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default()(prevProps.line, nextProps.line);
};

var Line = react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(function (props) {
  // eslint-disable-next-line no-unused-vars
  var _props$line = props.line,
      d = _props$line.d,
      index = _props$line.index,
      color = _props$line.color,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_props$line, ["d", "index", "color"]);

  var classes = useStyles(props);
  var className = index === 1 ? classes.rootLine : classes.mainLine;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("path", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    fill: "none",
    strokeLinecap: "square",
    d: d,
    className: className,
    stroke: color
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }));
}, areEqual);
Line.displayName = 'Line';
Line.propTypes = {
  line: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (SvgLine);

/***/ })

})
//# sourceMappingURL=1.55d6a1b932e6cfbd9f13.hot-update.js.map