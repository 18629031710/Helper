webpackHotUpdate(1,{

/***/ "./src/scripts/common/ydmind-new/Layout/lineStrategy/getLinesArray.js":
/*!****************************************************************************!*\
  !*** ./src/scripts/common/ydmind-new/Layout/lineStrategy/getLinesArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getLinesArray; });
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Line */ "./src/scripts/common/ydmind-new/Layout/lineStrategy/Line.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constant */ "./src/scripts/common/ydmind-new/constant.js");


var LineMap = {
  Bezier: _Line__WEBPACK_IMPORTED_MODULE_0__["Bezier"],
  Straight: _Line__WEBPACK_IMPORTED_MODULE_0__["Straight"],
  StraightWithArc: _Line__WEBPACK_IMPORTED_MODULE_0__["StraightWithArc"]
};

var processDirection = function processDirection(direction, node) {
  return node.index === 1 && direction === 'bottom_catalog' ? 'bottom' : direction;
};

var processLineType = function processLineType(lineType, direction, node) {
  var c1 = direction === 'bottom';
  var c2 = direction === 'bottom_catalog' && node.index === 1;
  var c3 = direction === 'top';
  var c4 = direction === 'top_catalog' && node.index === 1;
  var c = c1 || c2 || c3 || c4;

  if (c && _constant__WEBPACK_IMPORTED_MODULE_1__["LineTypeMap"][lineType].line === _Line__WEBPACK_IMPORTED_MODULE_0__["LineType"].StraightWithArc && !node.isFirstOrLast()) {
    return _Line__WEBPACK_IMPORTED_MODULE_0__["LineType"].Straight;
  }

  return _constant__WEBPACK_IMPORTED_MODULE_1__["LineTypeMap"][lineType].line;
};

function getLinesArray(nodesArray, lineType, direction) {
  var linesArray = [];
  nodesArray.forEach(function (node) {
    var directionProcessed = processDirection(direction, node);
    var typeProcessed = processLineType(lineType, direction, node);
    var line = new LineMap[typeProcessed]({
      node: node,
      direction: directionProcessed,
      radius: _constant__WEBPACK_IMPORTED_MODULE_1__["arcRadius"],
      lineType: lineType
    });

    var pushToLinesArray = function pushToLinesArray(linePath) {
      if (linePath && linesArray.indexOf(linePath) === -1) {
        linesArray.push(linePath);
      }
    }; // 获取收起后的小折线


    if (!node.expanded && !node.isHidden()) {
      pushToLinesArray(line.getExpand());
    }

    pushToLinesArray(line.draw());
  });
  return linesArray;
}

/***/ })

})
//# sourceMappingURL=1.55770142c27a647b6d9c.hot-update.js.map