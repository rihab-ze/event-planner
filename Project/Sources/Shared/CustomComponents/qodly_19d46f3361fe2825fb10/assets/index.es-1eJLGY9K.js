import { q as qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ } from './qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__-DVabGkeu.js';
import { R as React, q as qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__, d as de } from './qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__-3DhkBDxl.js';
import { q as qodly_19d46f3361fe2825fb10__loadShare__react_mf_2_dom__loadShare__, R as ReactDOM } from './qodly_19d46f3361fe2825fb10__loadShare__react_mf_2_dom__loadShare__-BImKXKQ2.js';
import { k as keyframes, w as withEmotionCache, T as ThemeContext } from './emotion-react.browser.esm-C4qPlxCP.js';
import './qodly_19d46f3361fe2825fb10__mf_v__runtimeInit__mf_v__-BHz-fcBO.js';
import './_commonjsHelpers-BFTU3MAI.js';

var $ = { exports: {} }, b = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var K, R1;
function D1() {
  if (R1)
    return K;
  R1 = 1;
  var l = Object.getOwnPropertySymbols, F = Object.prototype.hasOwnProperty, C = Object.prototype.propertyIsEnumerable;
  function R(m) {
    if (m == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(m);
  }
  function L() {
    try {
      if (!Object.assign)
        return false;
      var m = new String("abc");
      if (m[5] = "de", Object.getOwnPropertyNames(m)[0] === "5")
        return false;
      for (var j = {}, n = 0; n < 10; n++)
        j["_" + String.fromCharCode(n)] = n;
      var u = Object.getOwnPropertyNames(j).map(function(o) {
        return j[o];
      });
      if (u.join("") !== "0123456789")
        return false;
      var x = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(o) {
        x[o] = o;
      }), Object.keys(Object.assign({}, x)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return false;
    }
  }
  return K = L() ? Object.assign : function(m, j) {
    for (var n, u = R(m), x, o = 1; o < arguments.length; o++) {
      n = Object(arguments[o]);
      for (var M in n)
        F.call(n, M) && (u[M] = n[M]);
      if (l) {
        x = l(n);
        for (var g = 0; g < x.length; g++)
          C.call(n, x[g]) && (u[x[g]] = n[x[g]]);
      }
    }
    return u;
  }, K;
}
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var V1;
function t0$1() {
  if (V1)
    return b;
  V1 = 1, D1();
  var l = React, F = 60103;
  if (b.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var C = Symbol.for;
    F = C("react.element"), b.Fragment = C("react.fragment");
  }
  var R = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, L = Object.prototype.hasOwnProperty, m = { key: true, ref: true, __self: true, __source: true };
  function j(n, u, x) {
    var o, M = {}, g = null, V = null;
    x !== void 0 && (g = "" + x), u.key !== void 0 && (g = "" + u.key), u.ref !== void 0 && (V = u.ref);
    for (o in u)
      L.call(u, o) && !m.hasOwnProperty(o) && (M[o] = u[o]);
    if (n && n.defaultProps)
      for (o in u = n.defaultProps, u)
        M[o] === void 0 && (M[o] = u[o]);
    return { $$typeof: F, type: n, key: g, ref: V, props: M, _owner: R.current };
  }
  return b.jsx = j, b.jsxs = j, b;
}
$.exports = t0$1() ;
var e = $.exports;
const e5 = (l) => /* @__PURE__ */ e.jsx("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", ...l, children: /* @__PURE__ */ e.jsx(
  "path",
  {
    d: "M8.82 19.748c.001.245.075.486.214.69l.38 1.004c.117.172.573.312.758.41.185.097.391.148.601.148h2.454c.21 0 .417-.05.601-.148.185-.098.621-.238.737-.41l.402-1.003c.138-.205.213-.445.213-.691l.001-1.498H8.82l.002 1.498ZM5 8.875c0 1.733.654 3.314 1.732 4.522.658.737 1.685 2.275 2.077 3.573l.004.03h6.374l.004-.03c.392-1.298 1.42-2.836 2.076-3.573A6.766 6.766 0 0 0 19 8.875C19 5.07 15.854 1.988 11.978 2 7.921 2.012 5 5.241 5 8.875Z",
    fill: "currentColor"
  }
) }), x5 = (l) => /* @__PURE__ */ e.jsx("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", ...l, children: /* @__PURE__ */ e.jsx(
  "path",
  {
    d: "M4.497 5.361a.5.5 0 0 0 0 .707L10.429 12l-5.932 5.932a.5.5 0 0 0 0 .707l.864.864a.5.5 0 0 0 .707 0L12 13.571l5.932 5.932a.5.5 0 0 0 .707 0l.864-.864a.5.5 0 0 0 0-.707L13.571 12l5.932-5.932a.5.5 0 0 0 0-.707l-.864-.864a.5.5 0 0 0-.707 0L12 10.429 6.068 4.497a.5.5 0 0 0-.707 0l-.864.864Z",
    fill: "currentColor"
  }
) }), n2$1 = (l) => /* @__PURE__ */ e.jsxs("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", ...l, children: [
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M7.105 12.87a.47.47 0 0 0 .003.689l3.713 3.491.027.027.768.722a.528.528 0 0 0 .407.14.523.523 0 0 0 .32-.143l.762-.73a.565.565 0 0 0 .024-.024l3.682-3.529a.47.47 0 0 0-.003-.688l-.768-.722a.533.533 0 0 0-.725.003l-3.347 3.206-3.377-3.174a.533.533 0 0 0-.725.003l-.761.73Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M7.105 6.87a.47.47 0 0 0 .003.689l3.713 3.491.027.027.768.722a.528.528 0 0 0 .407.14.523.523 0 0 0 .32-.143l.762-.73a.565.565 0 0 0 .024-.025l3.682-3.528a.47.47 0 0 0-.003-.688l-.768-.722a.533.533 0 0 0-.725.003l-3.347 3.206-3.377-3.174a.533.533 0 0 0-.725.003l-.761.73Z",
      fill: "currentColor"
    }
  )
] }), A2$1 = (l) => /* @__PURE__ */ e.jsxs("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", ...l, children: [
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M16.811 11.031a.47.47 0 0 0-.003-.688l-3.713-3.491a.568.568 0 0 0-.027-.027l-.768-.722a.528.528 0 0 0-.408-.14.523.523 0 0 0-.32.143l-.76.73a.518.518 0 0 0-.025.025l-3.682 3.528a.47.47 0 0 0 .003.688l.768.722c.201.19.526.188.725-.003l3.347-3.206 3.377 3.174c.2.19.526.188.725-.003l.761-.73Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M16.811 17.032a.47.47 0 0 0-.003-.689l-3.713-3.491a.608.608 0 0 0-.027-.027l-.768-.722a.528.528 0 0 0-.408-.139.523.523 0 0 0-.32.142l-.76.73a.563.563 0 0 0-.025.025l-3.682 3.528a.47.47 0 0 0 .003.688l.768.722c.201.19.526.188.725-.003l3.347-3.206 3.377 3.174c.2.19.526.188.725-.003l.761-.73Z",
      fill: "currentColor"
    }
  )
] }), f2$1 = (l) => /* @__PURE__ */ e.jsx("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", ...l, children: /* @__PURE__ */ e.jsx(
  "path",
  {
    d: "M11.701 18.797c.206.195.52.195.726 0l2.487-2.349-.008-.007 6.973-6.585a.58.58 0 0 0 0-.835l-2.045-1.932a.524.524 0 0 0-.726 0l-7.052 6.66-7.051-6.66a.524.524 0 0 0-.726 0L2.234 9.021a.58.58 0 0 0 0 .835l9.467 8.941Z",
    fill: "currentColor"
  }
) }), c4 = (l) => /* @__PURE__ */ e.jsx("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", ...l, children: /* @__PURE__ */ e.jsx(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11 21c5.523 0 10-4.477 10-10S16.523 1 11 1 1 5.477 1 11s4.477 10 10 10Zm0-14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 1.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.5v4h-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H12V8.5Z",
    fill: "currentColor"
  }
) }), i4 = (l) => /* @__PURE__ */ e.jsxs("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", ...l, children: [
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M13 17.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v8ZM12 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z",
      fill: "currentColor"
    }
  )
] }), Y4 = (l) => /* @__PURE__ */ e.jsx("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", ...l, children: /* @__PURE__ */ e.jsx(
  "path",
  {
    d: "M21.5 10.889a.5.5 0 0 1 .5.5v1.222a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V11.39a.5.5 0 0 1 .5-.5h19Z",
    fill: "currentColor"
  }
) }), i3 = (l) => /* @__PURE__ */ e.jsxs("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", ...l, children: [
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.7 6.7v13.6h13.6v-8.925c0-.235.19-.425.425-.425h.85c.235 0 .425.19.425.425v9.775c0 .47-.38.85-.85.85H2.85a.85.85 0 0 1-.85-.85V5.85c0-.47.38-.85.85-.85h9.775c.235 0 .425.19.425.425v.85c0 .235-.19.425-.425.425H3.7Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M21.435 2.01a.468.468 0 0 1 .554.555L20.42 9.757a.454.454 0 0 1-.77.215l-1.555-1.555-3.453 3.453a.444.444 0 0 1-.628 0L12.13 9.986a.444.444 0 0 1 0-.628l3.453-3.453-1.555-1.555a.454.454 0 0 1 .215-.77l7.192-1.57Z",
      fill: "currentColor"
    }
  )
] }), p3 = (l) => /* @__PURE__ */ e.jsx("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", ...l, children: /* @__PURE__ */ e.jsx(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.389 2a.5.5 0 0 0-.5.5v8.389H2.5a.5.5 0 0 0-.5.5v1.222a.5.5 0 0 0 .5.5h8.389V21.5a.5.5 0 0 0 .5.5h1.222a.5.5 0 0 0 .5-.5v-8.389H21.5a.5.5 0 0 0 .5-.5V11.39a.5.5 0 0 0-.5-.5h-8.389V2.5a.5.5 0 0 0-.5-.5H11.39Z",
    fill: "currentColor"
  }
) }), y3 = (l) => /* @__PURE__ */ e.jsx("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", ...l, children: /* @__PURE__ */ e.jsx(
  "path",
  {
    d: "M18.797 12.299a.524.524 0 0 0 0-.726l-2.349-2.487-.007.008L9.856 2.12a.58.58 0 0 0-.835 0L7.089 4.166a.524.524 0 0 0 0 .726l6.66 7.051-6.66 7.053a.524.524 0 0 0 0 .725l1.932 2.045a.58.58 0 0 0 .835 0l8.941-9.467Z",
    fill: "currentColor"
  }
) }), N3 = (l) => /* @__PURE__ */ e.jsxs("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", ...l, children: [
  /* @__PURE__ */ e.jsx("path", { d: "M10 18h4V5h-4v13Z", fill: "#fff" }),
  /* @__PURE__ */ e.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm1-15.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-7ZM11 17a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z",
      fill: "currentColor"
    }
  )
] }), G3 = (l) => /* @__PURE__ */ e.jsx("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", ...l, children: /* @__PURE__ */ e.jsx(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.076 2.203a.5.5 0 0 0-.354-.146H3.001a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V8.335a.5.5 0 0 0-.147-.354l-5.778-5.778ZM12 19.057a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-8-14.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-4Z",
    fill: "currentColor"
  }
) }), a6 = (l) => /* @__PURE__ */ e.jsx("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", ...l, children: /* @__PURE__ */ e.jsx(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.953 3.53c-.393-.707-1.513-.707-1.906 0L2.114 19.612c-.354.638.16 1.388.953 1.388h17.866c.792 0 1.307-.75.953-1.388L12.953 3.53ZM11.508 8a.504.504 0 0 0-.507.531l.491 8A.505.505 0 0 0 12 17c.269 0 .49-.205.508-.469l.492-8A.504.504 0 0 0 12.492 8h-.984ZM12 20c.561 0 1.016-.448 1.016-1s-.455-1-1.016-1c-.561 0-1.016.448-1.016 1s.455 1 1.016 1Z",
    fill: "currentColor"
  }
) });

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign$1 = (undefined && undefined.__assign) || function () {
    __assign$1 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};
var rowSizeBase = {
    width: '100%',
    height: '10px',
    top: '0px',
    left: '0px',
    cursor: 'row-resize',
};
var colSizeBase = {
    width: '10px',
    height: '100%',
    top: '0px',
    left: '0px',
    cursor: 'col-resize',
};
var edgeBase = {
    width: '20px',
    height: '20px',
    position: 'absolute',
};
var styles = {
    top: __assign$1(__assign$1({}, rowSizeBase), { top: '-5px' }),
    right: __assign$1(__assign$1({}, colSizeBase), { left: undefined, right: '-5px' }),
    bottom: __assign$1(__assign$1({}, rowSizeBase), { top: undefined, bottom: '-5px' }),
    left: __assign$1(__assign$1({}, colSizeBase), { left: '-5px' }),
    topRight: __assign$1(__assign$1({}, edgeBase), { right: '-10px', top: '-10px', cursor: 'ne-resize' }),
    bottomRight: __assign$1(__assign$1({}, edgeBase), { right: '-10px', bottom: '-10px', cursor: 'se-resize' }),
    bottomLeft: __assign$1(__assign$1({}, edgeBase), { left: '-10px', bottom: '-10px', cursor: 'sw-resize' }),
    topLeft: __assign$1(__assign$1({}, edgeBase), { left: '-10px', top: '-10px', cursor: 'nw-resize' }),
};
var Resizer = /** @class */ (function (_super) {
    __extends$1(Resizer, _super);
    function Resizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onMouseDown = function (e) {
            _this.props.onResizeStart(e, _this.props.direction);
        };
        _this.onTouchStart = function (e) {
            _this.props.onResizeStart(e, _this.props.direction);
        };
        return _this;
    }
    Resizer.prototype.render = function () {
        return (qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement("div", { className: this.props.className || '', style: __assign$1(__assign$1({ position: 'absolute', userSelect: 'none' }, styles[this.props.direction]), (this.props.replaceStyles || {})), onMouseDown: this.onMouseDown, onTouchStart: this.onTouchStart }, this.props.children));
    };
    return Resizer;
}(qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.PureComponent));

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var DEFAULT_SIZE = {
    width: 'auto',
    height: 'auto',
};
var clamp = function (n, min, max) { return Math.max(Math.min(n, max), min); };
var snap = function (n, size, gridGap) {
    var v = Math.round(n / size);
    return v * size + gridGap * (v - 1);
};
var hasDirection = function (dir, target) {
    return new RegExp(dir, 'i').test(target);
};
// INFO: In case of window is a Proxy and does not porxy Events correctly, use isTouchEvent & isMouseEvent to distinguish event type instead of `instanceof`.
var isTouchEvent = function (event) {
    return Boolean(event.touches && event.touches.length);
};
var isMouseEvent = function (event) {
    return Boolean((event.clientX || event.clientX === 0) &&
        (event.clientY || event.clientY === 0));
};
var findClosestSnap = function (n, snapArray, snapGap) {
    if (snapGap === void 0) { snapGap = 0; }
    var closestGapIndex = snapArray.reduce(function (prev, curr, index) { return (Math.abs(curr - n) < Math.abs(snapArray[prev] - n) ? index : prev); }, 0);
    var gap = Math.abs(snapArray[closestGapIndex] - n);
    return snapGap === 0 || gap < snapGap ? snapArray[closestGapIndex] : n;
};
var getStringSize = function (n) {
    n = n.toString();
    if (n === 'auto') {
        return n;
    }
    if (n.endsWith('px')) {
        return n;
    }
    if (n.endsWith('%')) {
        return n;
    }
    if (n.endsWith('vh')) {
        return n;
    }
    if (n.endsWith('vw')) {
        return n;
    }
    if (n.endsWith('vmax')) {
        return n;
    }
    if (n.endsWith('vmin')) {
        return n;
    }
    return n + "px";
};
var getPixelSize = function (size, parentSize, innerWidth, innerHeight) {
    if (size && typeof size === 'string') {
        if (size.endsWith('px')) {
            return Number(size.replace('px', ''));
        }
        if (size.endsWith('%')) {
            var ratio = Number(size.replace('%', '')) / 100;
            return parentSize * ratio;
        }
        if (size.endsWith('vw')) {
            var ratio = Number(size.replace('vw', '')) / 100;
            return innerWidth * ratio;
        }
        if (size.endsWith('vh')) {
            var ratio = Number(size.replace('vh', '')) / 100;
            return innerHeight * ratio;
        }
    }
    return size;
};
var calculateNewMax = function (parentSize, innerWidth, innerHeight, maxWidth, maxHeight, minWidth, minHeight) {
    maxWidth = getPixelSize(maxWidth, parentSize.width, innerWidth, innerHeight);
    maxHeight = getPixelSize(maxHeight, parentSize.height, innerWidth, innerHeight);
    minWidth = getPixelSize(minWidth, parentSize.width, innerWidth, innerHeight);
    minHeight = getPixelSize(minHeight, parentSize.height, innerWidth, innerHeight);
    return {
        maxWidth: typeof maxWidth === 'undefined' ? undefined : Number(maxWidth),
        maxHeight: typeof maxHeight === 'undefined' ? undefined : Number(maxHeight),
        minWidth: typeof minWidth === 'undefined' ? undefined : Number(minWidth),
        minHeight: typeof minHeight === 'undefined' ? undefined : Number(minHeight),
    };
};
/**
 * transform T | [T, T] to [T, T]
 * @param val
 * @returns
 */
// tslint:disable-next-line
var normalizeToPair = function (val) { return (Array.isArray(val) ? val : [val, val]); };
var definedProps = [
    'as',
    'ref',
    'style',
    'className',
    'grid',
    'gridGap',
    'snap',
    'bounds',
    'boundsByDirection',
    'size',
    'defaultSize',
    'minWidth',
    'minHeight',
    'maxWidth',
    'maxHeight',
    'lockAspectRatio',
    'lockAspectRatioExtraWidth',
    'lockAspectRatioExtraHeight',
    'enable',
    'handleStyles',
    'handleClasses',
    'handleWrapperStyle',
    'handleWrapperClass',
    'children',
    'onResizeStart',
    'onResize',
    'onResizeStop',
    'handleComponent',
    'scale',
    'resizeRatio',
    'snapGap',
];
// HACK: This class is used to calculate % size.
var baseClassName = '__resizable_base__';
var Resizable = /** @class */ (function (_super) {
    __extends(Resizable, _super);
    function Resizable(props) {
        var _a, _b, _c, _d;
        var _this = _super.call(this, props) || this;
        _this.ratio = 1;
        _this.resizable = null;
        // For parent boundary
        _this.parentLeft = 0;
        _this.parentTop = 0;
        // For boundary
        _this.resizableLeft = 0;
        _this.resizableRight = 0;
        _this.resizableTop = 0;
        _this.resizableBottom = 0;
        // For target boundary
        _this.targetLeft = 0;
        _this.targetTop = 0;
        _this.appendBase = function () {
            if (!_this.resizable || !_this.window) {
                return null;
            }
            var parent = _this.parentNode;
            if (!parent) {
                return null;
            }
            var element = _this.window.document.createElement('div');
            element.style.width = '100%';
            element.style.height = '100%';
            element.style.position = 'absolute';
            element.style.transform = 'scale(0, 0)';
            element.style.left = '0';
            element.style.flex = '0 0 100%';
            if (element.classList) {
                element.classList.add(baseClassName);
            }
            else {
                element.className += baseClassName;
            }
            parent.appendChild(element);
            return element;
        };
        _this.removeBase = function (base) {
            var parent = _this.parentNode;
            if (!parent) {
                return;
            }
            parent.removeChild(base);
        };
        _this.state = {
            isResizing: false,
            width: (_b = (_a = _this.propsSize) === null || _a === void 0 ? void 0 : _a.width) !== null && _b !== void 0 ? _b : 'auto',
            height: (_d = (_c = _this.propsSize) === null || _c === void 0 ? void 0 : _c.height) !== null && _d !== void 0 ? _d : 'auto',
            direction: 'right',
            original: {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
            },
            backgroundStyle: {
                height: '100%',
                width: '100%',
                backgroundColor: 'rgba(0,0,0,0)',
                cursor: 'auto',
                opacity: 0,
                position: 'fixed',
                zIndex: 9999,
                top: '0',
                left: '0',
                bottom: '0',
                right: '0',
            },
            flexBasis: undefined,
        };
        _this.onResizeStart = _this.onResizeStart.bind(_this);
        _this.onMouseMove = _this.onMouseMove.bind(_this);
        _this.onMouseUp = _this.onMouseUp.bind(_this);
        return _this;
    }
    Object.defineProperty(Resizable.prototype, "parentNode", {
        get: function () {
            if (!this.resizable) {
                return null;
            }
            return this.resizable.parentNode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Resizable.prototype, "window", {
        get: function () {
            if (!this.resizable) {
                return null;
            }
            if (!this.resizable.ownerDocument) {
                return null;
            }
            return this.resizable.ownerDocument.defaultView;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Resizable.prototype, "propsSize", {
        get: function () {
            return this.props.size || this.props.defaultSize || DEFAULT_SIZE;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Resizable.prototype, "size", {
        get: function () {
            var width = 0;
            var height = 0;
            if (this.resizable && this.window) {
                var orgWidth = this.resizable.offsetWidth;
                var orgHeight = this.resizable.offsetHeight;
                // HACK: Set position `relative` to get parent size.
                //       This is because when re-resizable set `absolute`, I can not get base width correctly.
                var orgPosition = this.resizable.style.position;
                if (orgPosition !== 'relative') {
                    this.resizable.style.position = 'relative';
                }
                // INFO: Use original width or height if set auto.
                width = this.resizable.style.width !== 'auto' ? this.resizable.offsetWidth : orgWidth;
                height = this.resizable.style.height !== 'auto' ? this.resizable.offsetHeight : orgHeight;
                // Restore original position
                this.resizable.style.position = orgPosition;
            }
            return { width: width, height: height };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Resizable.prototype, "sizeStyle", {
        get: function () {
            var _this = this;
            var size = this.props.size;
            var getSize = function (key) {
                var _a;
                if (typeof _this.state[key] === 'undefined' || _this.state[key] === 'auto') {
                    return 'auto';
                }
                if (_this.propsSize && _this.propsSize[key] && ((_a = _this.propsSize[key]) === null || _a === void 0 ? void 0 : _a.toString().endsWith('%'))) {
                    if (_this.state[key].toString().endsWith('%')) {
                        return _this.state[key].toString();
                    }
                    var parentSize = _this.getParentSize();
                    var value = Number(_this.state[key].toString().replace('px', ''));
                    var percent = (value / parentSize[key]) * 100;
                    return percent + "%";
                }
                return getStringSize(_this.state[key]);
            };
            var width = size && typeof size.width !== 'undefined' && !this.state.isResizing
                ? getStringSize(size.width)
                : getSize('width');
            var height = size && typeof size.height !== 'undefined' && !this.state.isResizing
                ? getStringSize(size.height)
                : getSize('height');
            return { width: width, height: height };
        },
        enumerable: false,
        configurable: true
    });
    Resizable.prototype.getParentSize = function () {
        if (!this.parentNode) {
            if (!this.window) {
                return { width: 0, height: 0 };
            }
            return { width: this.window.innerWidth, height: this.window.innerHeight };
        }
        var base = this.appendBase();
        if (!base) {
            return { width: 0, height: 0 };
        }
        // INFO: To calculate parent width with flex layout
        var wrapChanged = false;
        var wrap = this.parentNode.style.flexWrap;
        if (wrap !== 'wrap') {
            wrapChanged = true;
            this.parentNode.style.flexWrap = 'wrap';
            // HACK: Use relative to get parent padding size
        }
        base.style.position = 'relative';
        base.style.minWidth = '100%';
        base.style.minHeight = '100%';
        var size = {
            width: base.offsetWidth,
            height: base.offsetHeight,
        };
        if (wrapChanged) {
            this.parentNode.style.flexWrap = wrap;
        }
        this.removeBase(base);
        return size;
    };
    Resizable.prototype.bindEvents = function () {
        if (this.window) {
            this.window.addEventListener('mouseup', this.onMouseUp);
            this.window.addEventListener('mousemove', this.onMouseMove);
            this.window.addEventListener('mouseleave', this.onMouseUp);
            this.window.addEventListener('touchmove', this.onMouseMove, {
                capture: true,
                passive: false,
            });
            this.window.addEventListener('touchend', this.onMouseUp);
        }
    };
    Resizable.prototype.unbindEvents = function () {
        if (this.window) {
            this.window.removeEventListener('mouseup', this.onMouseUp);
            this.window.removeEventListener('mousemove', this.onMouseMove);
            this.window.removeEventListener('mouseleave', this.onMouseUp);
            this.window.removeEventListener('touchmove', this.onMouseMove, true);
            this.window.removeEventListener('touchend', this.onMouseUp);
        }
    };
    Resizable.prototype.componentDidMount = function () {
        if (!this.resizable || !this.window) {
            return;
        }
        var computedStyle = this.window.getComputedStyle(this.resizable);
        this.setState({
            width: this.state.width || this.size.width,
            height: this.state.height || this.size.height,
            flexBasis: computedStyle.flexBasis !== 'auto' ? computedStyle.flexBasis : undefined,
        });
    };
    Resizable.prototype.componentWillUnmount = function () {
        if (this.window) {
            this.unbindEvents();
        }
    };
    Resizable.prototype.createSizeForCssProperty = function (newSize, kind) {
        var propsSize = this.propsSize && this.propsSize[kind];
        return this.state[kind] === 'auto' &&
            this.state.original[kind] === newSize &&
            (typeof propsSize === 'undefined' || propsSize === 'auto')
            ? 'auto'
            : newSize;
    };
    Resizable.prototype.calculateNewMaxFromBoundary = function (maxWidth, maxHeight) {
        var boundsByDirection = this.props.boundsByDirection;
        var direction = this.state.direction;
        var widthByDirection = boundsByDirection && hasDirection('left', direction);
        var heightByDirection = boundsByDirection && hasDirection('top', direction);
        var boundWidth;
        var boundHeight;
        if (this.props.bounds === 'parent') {
            var parent_1 = this.parentNode;
            if (parent_1) {
                boundWidth = widthByDirection
                    ? this.resizableRight - this.parentLeft
                    : parent_1.offsetWidth + (this.parentLeft - this.resizableLeft);
                boundHeight = heightByDirection
                    ? this.resizableBottom - this.parentTop
                    : parent_1.offsetHeight + (this.parentTop - this.resizableTop);
            }
        }
        else if (this.props.bounds === 'window') {
            if (this.window) {
                boundWidth = widthByDirection ? this.resizableRight : this.window.innerWidth - this.resizableLeft;
                boundHeight = heightByDirection ? this.resizableBottom : this.window.innerHeight - this.resizableTop;
            }
        }
        else if (this.props.bounds) {
            boundWidth = widthByDirection
                ? this.resizableRight - this.targetLeft
                : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft);
            boundHeight = heightByDirection
                ? this.resizableBottom - this.targetTop
                : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop);
        }
        if (boundWidth && Number.isFinite(boundWidth)) {
            maxWidth = maxWidth && maxWidth < boundWidth ? maxWidth : boundWidth;
        }
        if (boundHeight && Number.isFinite(boundHeight)) {
            maxHeight = maxHeight && maxHeight < boundHeight ? maxHeight : boundHeight;
        }
        return { maxWidth: maxWidth, maxHeight: maxHeight };
    };
    Resizable.prototype.calculateNewSizeFromDirection = function (clientX, clientY) {
        var scale = this.props.scale || 1;
        var _a = normalizeToPair(this.props.resizeRatio || 1), resizeRatioX = _a[0], resizeRatioY = _a[1];
        var _b = this.state, direction = _b.direction, original = _b.original;
        var _c = this.props, lockAspectRatio = _c.lockAspectRatio, lockAspectRatioExtraHeight = _c.lockAspectRatioExtraHeight, lockAspectRatioExtraWidth = _c.lockAspectRatioExtraWidth;
        var newWidth = original.width;
        var newHeight = original.height;
        var extraHeight = lockAspectRatioExtraHeight || 0;
        var extraWidth = lockAspectRatioExtraWidth || 0;
        if (hasDirection('right', direction)) {
            newWidth = original.width + ((clientX - original.x) * resizeRatioX) / scale;
            if (lockAspectRatio) {
                newHeight = (newWidth - extraWidth) / this.ratio + extraHeight;
            }
        }
        if (hasDirection('left', direction)) {
            newWidth = original.width - ((clientX - original.x) * resizeRatioX) / scale;
            if (lockAspectRatio) {
                newHeight = (newWidth - extraWidth) / this.ratio + extraHeight;
            }
        }
        if (hasDirection('bottom', direction)) {
            newHeight = original.height + ((clientY - original.y) * resizeRatioY) / scale;
            if (lockAspectRatio) {
                newWidth = (newHeight - extraHeight) * this.ratio + extraWidth;
            }
        }
        if (hasDirection('top', direction)) {
            newHeight = original.height - ((clientY - original.y) * resizeRatioY) / scale;
            if (lockAspectRatio) {
                newWidth = (newHeight - extraHeight) * this.ratio + extraWidth;
            }
        }
        return { newWidth: newWidth, newHeight: newHeight };
    };
    Resizable.prototype.calculateNewSizeFromAspectRatio = function (newWidth, newHeight, max, min) {
        var _a = this.props, lockAspectRatio = _a.lockAspectRatio, lockAspectRatioExtraHeight = _a.lockAspectRatioExtraHeight, lockAspectRatioExtraWidth = _a.lockAspectRatioExtraWidth;
        var computedMinWidth = typeof min.width === 'undefined' ? 10 : min.width;
        var computedMaxWidth = typeof max.width === 'undefined' || max.width < 0 ? newWidth : max.width;
        var computedMinHeight = typeof min.height === 'undefined' ? 10 : min.height;
        var computedMaxHeight = typeof max.height === 'undefined' || max.height < 0 ? newHeight : max.height;
        var extraHeight = lockAspectRatioExtraHeight || 0;
        var extraWidth = lockAspectRatioExtraWidth || 0;
        if (lockAspectRatio) {
            var extraMinWidth = (computedMinHeight - extraHeight) * this.ratio + extraWidth;
            var extraMaxWidth = (computedMaxHeight - extraHeight) * this.ratio + extraWidth;
            var extraMinHeight = (computedMinWidth - extraWidth) / this.ratio + extraHeight;
            var extraMaxHeight = (computedMaxWidth - extraWidth) / this.ratio + extraHeight;
            var lockedMinWidth = Math.max(computedMinWidth, extraMinWidth);
            var lockedMaxWidth = Math.min(computedMaxWidth, extraMaxWidth);
            var lockedMinHeight = Math.max(computedMinHeight, extraMinHeight);
            var lockedMaxHeight = Math.min(computedMaxHeight, extraMaxHeight);
            newWidth = clamp(newWidth, lockedMinWidth, lockedMaxWidth);
            newHeight = clamp(newHeight, lockedMinHeight, lockedMaxHeight);
        }
        else {
            newWidth = clamp(newWidth, computedMinWidth, computedMaxWidth);
            newHeight = clamp(newHeight, computedMinHeight, computedMaxHeight);
        }
        return { newWidth: newWidth, newHeight: newHeight };
    };
    Resizable.prototype.setBoundingClientRect = function () {
        var adjustedScale = 1 / (this.props.scale || 1);
        // For parent boundary
        if (this.props.bounds === 'parent') {
            var parent_2 = this.parentNode;
            if (parent_2) {
                var parentRect = parent_2.getBoundingClientRect();
                this.parentLeft = parentRect.left * adjustedScale;
                this.parentTop = parentRect.top * adjustedScale;
            }
        }
        // For target(html element) boundary
        if (this.props.bounds && typeof this.props.bounds !== 'string') {
            var targetRect = this.props.bounds.getBoundingClientRect();
            this.targetLeft = targetRect.left * adjustedScale;
            this.targetTop = targetRect.top * adjustedScale;
        }
        // For boundary
        if (this.resizable) {
            var _a = this.resizable.getBoundingClientRect(), left = _a.left, top_1 = _a.top, right = _a.right, bottom = _a.bottom;
            this.resizableLeft = left * adjustedScale;
            this.resizableRight = right * adjustedScale;
            this.resizableTop = top_1 * adjustedScale;
            this.resizableBottom = bottom * adjustedScale;
        }
    };
    Resizable.prototype.onResizeStart = function (event, direction) {
        if (!this.resizable || !this.window) {
            return;
        }
        var clientX = 0;
        var clientY = 0;
        if (event.nativeEvent && isMouseEvent(event.nativeEvent)) {
            clientX = event.nativeEvent.clientX;
            clientY = event.nativeEvent.clientY;
        }
        else if (event.nativeEvent && isTouchEvent(event.nativeEvent)) {
            clientX = event.nativeEvent.touches[0].clientX;
            clientY = event.nativeEvent.touches[0].clientY;
        }
        if (this.props.onResizeStart) {
            if (this.resizable) {
                var startResize = this.props.onResizeStart(event, direction, this.resizable);
                if (startResize === false) {
                    return;
                }
            }
        }
        // Fix #168
        if (this.props.size) {
            if (typeof this.props.size.height !== 'undefined' && this.props.size.height !== this.state.height) {
                this.setState({ height: this.props.size.height });
            }
            if (typeof this.props.size.width !== 'undefined' && this.props.size.width !== this.state.width) {
                this.setState({ width: this.props.size.width });
            }
        }
        // For lockAspectRatio case
        this.ratio =
            typeof this.props.lockAspectRatio === 'number' ? this.props.lockAspectRatio : this.size.width / this.size.height;
        var flexBasis;
        var computedStyle = this.window.getComputedStyle(this.resizable);
        if (computedStyle.flexBasis !== 'auto') {
            var parent_3 = this.parentNode;
            if (parent_3) {
                var dir = this.window.getComputedStyle(parent_3).flexDirection;
                this.flexDir = dir.startsWith('row') ? 'row' : 'column';
                flexBasis = computedStyle.flexBasis;
            }
        }
        // For boundary
        this.setBoundingClientRect();
        this.bindEvents();
        var state = {
            original: {
                x: clientX,
                y: clientY,
                width: this.size.width,
                height: this.size.height,
            },
            isResizing: true,
            backgroundStyle: __assign(__assign({}, this.state.backgroundStyle), { cursor: this.window.getComputedStyle(event.target).cursor || 'auto' }),
            direction: direction,
            flexBasis: flexBasis,
        };
        this.setState(state);
    };
    Resizable.prototype.onMouseMove = function (event) {
        var _this = this;
        if (!this.state.isResizing || !this.resizable || !this.window) {
            return;
        }
        if (this.window.TouchEvent && isTouchEvent(event)) {
            try {
                event.preventDefault();
                event.stopPropagation();
            }
            catch (e) {
                // Ignore on fail
            }
        }
        var _a = this.props, maxWidth = _a.maxWidth, maxHeight = _a.maxHeight, minWidth = _a.minWidth, minHeight = _a.minHeight;
        var clientX = isTouchEvent(event) ? event.touches[0].clientX : event.clientX;
        var clientY = isTouchEvent(event) ? event.touches[0].clientY : event.clientY;
        var _b = this.state, direction = _b.direction, original = _b.original, width = _b.width, height = _b.height;
        var parentSize = this.getParentSize();
        var max = calculateNewMax(parentSize, this.window.innerWidth, this.window.innerHeight, maxWidth, maxHeight, minWidth, minHeight);
        maxWidth = max.maxWidth;
        maxHeight = max.maxHeight;
        minWidth = max.minWidth;
        minHeight = max.minHeight;
        // Calculate new size
        var _c = this.calculateNewSizeFromDirection(clientX, clientY), newHeight = _c.newHeight, newWidth = _c.newWidth;
        // Calculate max size from boundary settings
        var boundaryMax = this.calculateNewMaxFromBoundary(maxWidth, maxHeight);
        if (this.props.snap && this.props.snap.x) {
            newWidth = findClosestSnap(newWidth, this.props.snap.x, this.props.snapGap);
        }
        if (this.props.snap && this.props.snap.y) {
            newHeight = findClosestSnap(newHeight, this.props.snap.y, this.props.snapGap);
        }
        // Calculate new size from aspect ratio
        var newSize = this.calculateNewSizeFromAspectRatio(newWidth, newHeight, { width: boundaryMax.maxWidth, height: boundaryMax.maxHeight }, { width: minWidth, height: minHeight });
        newWidth = newSize.newWidth;
        newHeight = newSize.newHeight;
        if (this.props.grid) {
            var newGridWidth = snap(newWidth, this.props.grid[0], this.props.gridGap ? this.props.gridGap[0] : 0);
            var newGridHeight = snap(newHeight, this.props.grid[1], this.props.gridGap ? this.props.gridGap[1] : 0);
            var gap = this.props.snapGap || 0;
            var w = gap === 0 || Math.abs(newGridWidth - newWidth) <= gap ? newGridWidth : newWidth;
            var h = gap === 0 || Math.abs(newGridHeight - newHeight) <= gap ? newGridHeight : newHeight;
            newWidth = w;
            newHeight = h;
        }
        var delta = {
            width: newWidth - original.width,
            height: newHeight - original.height,
        };
        if (width && typeof width === 'string') {
            if (width.endsWith('%')) {
                var percent = (newWidth / parentSize.width) * 100;
                newWidth = percent + "%";
            }
            else if (width.endsWith('vw')) {
                var vw = (newWidth / this.window.innerWidth) * 100;
                newWidth = vw + "vw";
            }
            else if (width.endsWith('vh')) {
                var vh = (newWidth / this.window.innerHeight) * 100;
                newWidth = vh + "vh";
            }
        }
        if (height && typeof height === 'string') {
            if (height.endsWith('%')) {
                var percent = (newHeight / parentSize.height) * 100;
                newHeight = percent + "%";
            }
            else if (height.endsWith('vw')) {
                var vw = (newHeight / this.window.innerWidth) * 100;
                newHeight = vw + "vw";
            }
            else if (height.endsWith('vh')) {
                var vh = (newHeight / this.window.innerHeight) * 100;
                newHeight = vh + "vh";
            }
        }
        var newState = {
            width: this.createSizeForCssProperty(newWidth, 'width'),
            height: this.createSizeForCssProperty(newHeight, 'height'),
        };
        if (this.flexDir === 'row') {
            newState.flexBasis = newState.width;
        }
        else if (this.flexDir === 'column') {
            newState.flexBasis = newState.height;
        }
        var widthChanged = this.state.width !== newState.width;
        var heightChanged = this.state.height !== newState.height;
        var flexBaseChanged = this.state.flexBasis !== newState.flexBasis;
        var changed = widthChanged || heightChanged || flexBaseChanged;
        if (changed) {
            // For v18, update state sync
            qodly_19d46f3361fe2825fb10__loadShare__react_mf_2_dom__loadShare__.flushSync(function () {
                _this.setState(newState);
            });
        }
        if (this.props.onResize) {
            if (changed) {
                this.props.onResize(event, direction, this.resizable, delta);
            }
        }
    };
    Resizable.prototype.onMouseUp = function (event) {
        var _a, _b;
        var _c = this.state, isResizing = _c.isResizing, direction = _c.direction, original = _c.original;
        if (!isResizing || !this.resizable) {
            return;
        }
        var delta = {
            width: this.size.width - original.width,
            height: this.size.height - original.height,
        };
        if (this.props.onResizeStop) {
            this.props.onResizeStop(event, direction, this.resizable, delta);
        }
        if (this.props.size) {
            this.setState({ width: (_a = this.props.size.width) !== null && _a !== void 0 ? _a : 'auto', height: (_b = this.props.size.height) !== null && _b !== void 0 ? _b : 'auto' });
        }
        this.unbindEvents();
        this.setState({
            isResizing: false,
            backgroundStyle: __assign(__assign({}, this.state.backgroundStyle), { cursor: 'auto' }),
        });
    };
    Resizable.prototype.updateSize = function (size) {
        var _a, _b;
        this.setState({ width: (_a = size.width) !== null && _a !== void 0 ? _a : 'auto', height: (_b = size.height) !== null && _b !== void 0 ? _b : 'auto' });
    };
    Resizable.prototype.renderResizer = function (directions) {
        var _this = this;
        var _a = this.props, enable = _a.enable, handleStyles = _a.handleStyles, handleClasses = _a.handleClasses, handleWrapperStyle = _a.handleWrapperStyle, handleWrapperClass = _a.handleWrapperClass, handleComponent = _a.handleComponent;
        if (!enable) {
            return null;
        }
        var resizers = directions
            .filter(function (dir) { return enable[dir] !== false; })
            .map(function (dir) {
            if (enable[dir] !== false) {
                return (qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(Resizer, { key: dir, direction: dir, onResizeStart: _this.onResizeStart, replaceStyles: handleStyles && handleStyles[dir], className: handleClasses && handleClasses[dir] }, handleComponent && handleComponent[dir] ? handleComponent[dir] : null));
            }
            return null;
        });
        // #93 Wrap the resize box in span (will not break 100% width/height)
        return (qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement("div", { className: handleWrapperClass, style: handleWrapperStyle }, resizers));
    };
    Resizable.prototype.render = function () {
        var _this = this;
        var extendsProps = Object.keys(this.props).reduce(function (acc, key) {
            if (definedProps.indexOf(key) !== -1) {
                return acc;
            }
            acc[key] = _this.props[key];
            return acc;
        }, {});
        var style = __assign(__assign(__assign({ position: 'relative', userSelect: this.state.isResizing ? 'none' : 'auto' }, this.props.style), this.sizeStyle), { maxWidth: this.props.maxWidth, maxHeight: this.props.maxHeight, minWidth: this.props.minWidth, minHeight: this.props.minHeight, boxSizing: 'border-box', flexShrink: 0 });
        if (this.state.flexBasis) {
            style.flexBasis = this.state.flexBasis;
        }
        var Wrapper = this.props.as || 'div';
        return (qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(Wrapper, __assign({ style: style, className: this.props.className }, extendsProps, { 
            // `ref` is after `extendsProps` to ensure this one wins over a version
            // passed in
            ref: function (c) {
                if (c) {
                    _this.resizable = c;
                }
            } }),
            this.state.isResizing && qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement("div", { style: this.state.backgroundStyle }),
            this.renderResizer(['topLeft', 'top', 'topRight', 'left']),
            this.props.children,
            this.renderResizer(['right', 'bottomLeft', 'bottom', 'bottomRight'])));
    };
    Resizable.defaultProps = {
        as: 'div',
        onResizeStart: function () { },
        onResize: function () { },
        onResizeStop: function () { },
        enable: {
            top: true,
            right: true,
            bottom: true,
            left: true,
            topRight: true,
            bottomRight: true,
            bottomLeft: true,
            topLeft: true,
        },
        style: {},
        grid: [1, 1],
        gridGap: [0, 0],
        lockAspectRatio: false,
        lockAspectRatioExtraWidth: 0,
        lockAspectRatioExtraHeight: 0,
        scale: 1,
        resizeRatio: 1,
        snapGap: 0,
    };
    return Resizable;
}(qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.PureComponent));

var define_process_env_default = {};
var DE = Object.defineProperty;
var ah = (e3) => {
  throw TypeError(e3);
};
var zE = (e3, t, r) => t in e3 ? DE(e3, t, { enumerable: true, configurable: true, writable: true, value: r }) : e3[t] = r;
var ge = (e3, t, r) => zE(e3, typeof t != "symbol" ? t + "" : t, r), yl = (e3, t, r) => t.has(e3) || ah("Cannot " + r);
var te = (e3, t, r) => (yl(e3, t, "read from private field"), r ? r.call(e3) : t.get(e3)), Et = (e3, t, r) => t.has(e3) ? ah("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e3) : t.set(e3, r), Qe = (e3, t, r, i) => (yl(e3, t, "write to private field"), t.set(e3, r), r), Ie = (e3, t, r) => (yl(e3, t, "access private method"), r);
const iO = ({
  children: e3,
  container: t = document.body
}) => qodly_19d46f3361fe2825fb10__loadShare__react_mf_2_dom__loadShare__.createPortal(e3, t);
var sh = function(t) {
  return t.reduce(function(r, i) {
    var a = i[0], s = i[1];
    return r[a] = s, r;
  }, {});
}, uh = typeof window < "u" && window.document && window.document.createElement ? qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useLayoutEffect : qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect, Nt = "top", fr = "bottom", dr = "right", Ft = "left", Bc = "auto", Uo = [Nt, fr, dr, Ft], Oi = "start", Lo = "end", oO = "clippingParents", qg = "viewport", Yi = "popper", aO = "reference", lh = /* @__PURE__ */ Uo.reduce(function(e3, t) {
  return e3.concat([t + "-" + Oi, t + "-" + Lo]);
}, []), Zg = /* @__PURE__ */ [].concat(Uo, [Bc]).reduce(function(e3, t) {
  return e3.concat([t, t + "-" + Oi, t + "-" + Lo]);
}, []), sO = "beforeRead", uO = "read", lO = "afterRead", cO = "beforeMain", fO = "main", dO = "afterMain", pO = "beforeWrite", hO = "write", vO = "afterWrite", gO = [sO, uO, lO, cO, fO, dO, pO, hO, vO];
function Nr(e3) {
  return e3 ? (e3.nodeName || "").toLowerCase() : null;
}
function Vt(e3) {
  if (e3 == null)
    return window;
  if (e3.toString() !== "[object Window]") {
    var t = e3.ownerDocument;
    return t && t.defaultView || window;
  }
  return e3;
}
function Gn(e3) {
  var t = Vt(e3).Element;
  return e3 instanceof t || e3 instanceof Element;
}
function lr(e3) {
  var t = Vt(e3).HTMLElement;
  return e3 instanceof t || e3 instanceof HTMLElement;
}
function Uc(e3) {
  if (typeof ShadowRoot > "u")
    return false;
  var t = Vt(e3).ShadowRoot;
  return e3 instanceof t || e3 instanceof ShadowRoot;
}
function mO(e3) {
  var t = e3.state;
  Object.keys(t.elements).forEach(function(r) {
    var i = t.styles[r] || {}, a = t.attributes[r] || {}, s = t.elements[r];
    !lr(s) || !Nr(s) || (Object.assign(s.style, i), Object.keys(a).forEach(function(l) {
      var c = a[l];
      c === false ? s.removeAttribute(l) : s.setAttribute(l, c === true ? "" : c);
    }));
  });
}
function yO(e3) {
  var t = e3.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(i) {
      var a = t.elements[i], s = t.attributes[i] || {}, l = Object.keys(t.styles.hasOwnProperty(i) ? t.styles[i] : r[i]), c = l.reduce(function(f, m) {
        return f[m] = "", f;
      }, {});
      !lr(a) || !Nr(a) || (Object.assign(a.style, c), Object.keys(s).forEach(function(f) {
        a.removeAttribute(f);
      }));
    });
  };
}
const wO = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: mO,
  effect: yO,
  requires: ["computeStyles"]
};
function Lr(e3) {
  return e3.split("-")[0];
}
var Zn = Math.max, vs = Math.min, Ai = Math.round;
function pc() {
  var e3 = navigator.userAgentData;
  return e3 != null && e3.brands && Array.isArray(e3.brands) ? e3.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Gg() {
  return !/^((?!chrome|android).)*safari/i.test(pc());
}
function Ti(e3, t, r) {
  t === void 0 && (t = false), r === void 0 && (r = false);
  var i = e3.getBoundingClientRect(), a = 1, s = 1;
  t && lr(e3) && (a = e3.offsetWidth > 0 && Ai(i.width) / e3.offsetWidth || 1, s = e3.offsetHeight > 0 && Ai(i.height) / e3.offsetHeight || 1);
  var l = Gn(e3) ? Vt(e3) : window, c = l.visualViewport, f = !Gg() && r, m = (i.left + (f && c ? c.offsetLeft : 0)) / a, g = (i.top + (f && c ? c.offsetTop : 0)) / s, v = i.width / a, p = i.height / s;
  return {
    width: v,
    height: p,
    top: g,
    right: m + v,
    bottom: g + p,
    left: m,
    x: m,
    y: g
  };
}
function jc(e3) {
  var t = Ti(e3), r = e3.offsetWidth, i = e3.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - i) <= 1 && (i = t.height), {
    x: e3.offsetLeft,
    y: e3.offsetTop,
    width: r,
    height: i
  };
}
function Kg(e3, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e3.contains(t))
    return true;
  if (r && Uc(r)) {
    var i = t;
    do {
      if (i && e3.isSameNode(i))
        return true;
      i = i.parentNode || i.host;
    } while (i);
  }
  return false;
}
function en(e3) {
  return Vt(e3).getComputedStyle(e3);
}
function bO(e3) {
  return ["table", "td", "th"].indexOf(Nr(e3)) >= 0;
}
function En(e3) {
  return ((Gn(e3) ? e3.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e3.document
  )) || window.document).documentElement;
}
function $s(e3) {
  return Nr(e3) === "html" ? e3 : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e3.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e3.parentNode || // DOM Element detected
    (Uc(e3) ? e3.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    En(e3)
  );
}
function ch(e3) {
  return !lr(e3) || // https://github.com/popperjs/popper-core/issues/837
  en(e3).position === "fixed" ? null : e3.offsetParent;
}
function SO(e3) {
  var t = /firefox/i.test(pc()), r = /Trident/i.test(pc());
  if (r && lr(e3)) {
    var i = en(e3);
    if (i.position === "fixed")
      return null;
  }
  var a = $s(e3);
  for (Uc(a) && (a = a.host); lr(a) && ["html", "body"].indexOf(Nr(a)) < 0; ) {
    var s = en(a);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function jo(e3) {
  for (var t = Vt(e3), r = ch(e3); r && bO(r) && en(r).position === "static"; )
    r = ch(r);
  return r && (Nr(r) === "html" || Nr(r) === "body" && en(r).position === "static") ? t : r || SO(e3) || t;
}
function Hc(e3) {
  return ["top", "bottom"].indexOf(e3) >= 0 ? "x" : "y";
}
function Po(e3, t, r) {
  return Zn(e3, vs(t, r));
}
function xO(e3, t, r) {
  var i = Po(e3, t, r);
  return i > r ? r : i;
}
function Vg() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Yg(e3) {
  return Object.assign({}, Vg(), e3);
}
function Xg(e3, t) {
  return t.reduce(function(r, i) {
    return r[i] = e3, r;
  }, {});
}
var _O = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, Yg(typeof t != "number" ? t : Xg(t, Uo));
};
function EO(e3) {
  var t, r = e3.state, i = e3.name, a = e3.options, s = r.elements.arrow, l = r.modifiersData.popperOffsets, c = Lr(r.placement), f = Hc(c), m = [Ft, dr].indexOf(c) >= 0, g = m ? "height" : "width";
  if (!(!s || !l)) {
    var v = _O(a.padding, r), p = jc(s), w = f === "y" ? Nt : Ft, S = f === "y" ? fr : dr, d = r.rects.reference[g] + r.rects.reference[f] - l[f] - r.rects.popper[g], b = l[f] - r.rects.reference[f], h = jo(s), x = h ? f === "y" ? h.clientHeight || 0 : h.clientWidth || 0 : 0, _ = d / 2 - b / 2, R = v[w], O = x - p[g] - v[S], C = x / 2 - p[g] / 2 + _, W = Po(R, C, O), M = f;
    r.modifiersData[i] = (t = {}, t[M] = W, t.centerOffset = W - C, t);
  }
}
function OO(e3) {
  var t = e3.state, r = e3.options, i = r.element, a = i === void 0 ? "[data-popper-arrow]" : i;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || Kg(t.elements.popper, a) && (t.elements.arrow = a));
}
const AO = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: EO,
  effect: OO,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ri(e3) {
  return e3.split("-")[1];
}
var TO = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function RO(e3, t) {
  var r = e3.x, i = e3.y, a = t.devicePixelRatio || 1;
  return {
    x: Ai(r * a) / a || 0,
    y: Ai(i * a) / a || 0
  };
}
function fh(e3) {
  var t, r = e3.popper, i = e3.popperRect, a = e3.placement, s = e3.variation, l = e3.offsets, c = e3.position, f = e3.gpuAcceleration, m = e3.adaptive, g = e3.roundOffsets, v = e3.isFixed, p = l.x, w = p === void 0 ? 0 : p, S = l.y, d = S === void 0 ? 0 : S, b = typeof g == "function" ? g({
    x: w,
    y: d
  }) : {
    x: w,
    y: d
  };
  w = b.x, d = b.y;
  var h = l.hasOwnProperty("x"), x = l.hasOwnProperty("y"), _ = Ft, R = Nt, O = window;
  if (m) {
    var C = jo(r), W = "clientHeight", M = "clientWidth";
    if (C === Vt(r) && (C = En(r), en(C).position !== "static" && c === "absolute" && (W = "scrollHeight", M = "scrollWidth")), C = C, a === Nt || (a === Ft || a === dr) && s === Lo) {
      R = fr;
      var N = v && C === O && O.visualViewport ? O.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        C[W]
      );
      d -= N - i.height, d *= f ? 1 : -1;
    }
    if (a === Ft || (a === Nt || a === fr) && s === Lo) {
      _ = dr;
      var Z = v && C === O && O.visualViewport ? O.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        C[M]
      );
      w -= Z - i.width, w *= f ? 1 : -1;
    }
  }
  var D = Object.assign({
    position: c
  }, m && TO), L = g === true ? RO({
    x: w,
    y: d
  }, Vt(r)) : {
    x: w,
    y: d
  };
  if (w = L.x, d = L.y, f) {
    var B;
    return Object.assign({}, D, (B = {}, B[R] = x ? "0" : "", B[_] = h ? "0" : "", B.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + w + "px, " + d + "px)" : "translate3d(" + w + "px, " + d + "px, 0)", B));
  }
  return Object.assign({}, D, (t = {}, t[R] = x ? d + "px" : "", t[_] = h ? w + "px" : "", t.transform = "", t));
}
function PO(e3) {
  var t = e3.state, r = e3.options, i = r.gpuAcceleration, a = i === void 0 ? true : i, s = r.adaptive, l = s === void 0 ? true : s, c = r.roundOffsets, f = c === void 0 ? true : c, m = {
    placement: Lr(t.placement),
    variation: Ri(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, fh(Object.assign({}, m, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: f
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, fh(Object.assign({}, m, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: false,
    roundOffsets: f
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const kO = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: PO,
  data: {}
};
var za = {
  passive: true
};
function CO(e3) {
  var t = e3.state, r = e3.instance, i = e3.options, a = i.scroll, s = a === void 0 ? true : a, l = i.resize, c = l === void 0 ? true : l, f = Vt(t.elements.popper), m = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && m.forEach(function(g) {
    g.addEventListener("scroll", r.update, za);
  }), c && f.addEventListener("resize", r.update, za), function() {
    s && m.forEach(function(g) {
      g.removeEventListener("scroll", r.update, za);
    }), c && f.removeEventListener("resize", r.update, za);
  };
}
const $O = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function() {
  },
  effect: CO,
  data: {}
};
var IO = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ss(e3) {
  return e3.replace(/left|right|bottom|top/g, function(t) {
    return IO[t];
  });
}
var LO = {
  start: "end",
  end: "start"
};
function dh(e3) {
  return e3.replace(/start|end/g, function(t) {
    return LO[t];
  });
}
function qc(e3) {
  var t = Vt(e3), r = t.pageXOffset, i = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: i
  };
}
function Zc(e3) {
  return Ti(En(e3)).left + qc(e3).scrollLeft;
}
function MO(e3, t) {
  var r = Vt(e3), i = En(e3), a = r.visualViewport, s = i.clientWidth, l = i.clientHeight, c = 0, f = 0;
  if (a) {
    s = a.width, l = a.height;
    var m = Gg();
    (m || !m && t === "fixed") && (c = a.offsetLeft, f = a.offsetTop);
  }
  return {
    width: s,
    height: l,
    x: c + Zc(e3),
    y: f
  };
}
function NO(e3) {
  var t, r = En(e3), i = qc(e3), a = (t = e3.ownerDocument) == null ? void 0 : t.body, s = Zn(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), l = Zn(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), c = -i.scrollLeft + Zc(e3), f = -i.scrollTop;
  return en(a || r).direction === "rtl" && (c += Zn(r.clientWidth, a ? a.clientWidth : 0) - s), {
    width: s,
    height: l,
    x: c,
    y: f
  };
}
function Gc(e3) {
  var t = en(e3), r = t.overflow, i = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + i);
}
function Jg(e3) {
  return ["html", "body", "#document"].indexOf(Nr(e3)) >= 0 ? e3.ownerDocument.body : lr(e3) && Gc(e3) ? e3 : Jg($s(e3));
}
function ko(e3, t) {
  var r;
  t === void 0 && (t = []);
  var i = Jg(e3), a = i === ((r = e3.ownerDocument) == null ? void 0 : r.body), s = Vt(i), l = a ? [s].concat(s.visualViewport || [], Gc(i) ? i : []) : i, c = t.concat(l);
  return a ? c : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    c.concat(ko($s(l)))
  );
}
function hc(e3) {
  return Object.assign({}, e3, {
    left: e3.x,
    top: e3.y,
    right: e3.x + e3.width,
    bottom: e3.y + e3.height
  });
}
function FO(e3, t) {
  var r = Ti(e3, false, t === "fixed");
  return r.top = r.top + e3.clientTop, r.left = r.left + e3.clientLeft, r.bottom = r.top + e3.clientHeight, r.right = r.left + e3.clientWidth, r.width = e3.clientWidth, r.height = e3.clientHeight, r.x = r.left, r.y = r.top, r;
}
function ph(e3, t, r) {
  return t === qg ? hc(MO(e3, r)) : Gn(t) ? FO(t, r) : hc(NO(En(e3)));
}
function DO(e3) {
  var t = ko($s(e3)), r = ["absolute", "fixed"].indexOf(en(e3).position) >= 0, i = r && lr(e3) ? jo(e3) : e3;
  return Gn(i) ? t.filter(function(a) {
    return Gn(a) && Kg(a, i) && Nr(a) !== "body";
  }) : [];
}
function zO(e3, t, r, i) {
  var a = t === "clippingParents" ? DO(e3) : [].concat(t), s = [].concat(a, [r]), l = s[0], c = s.reduce(function(f, m) {
    var g = ph(e3, m, i);
    return f.top = Zn(g.top, f.top), f.right = vs(g.right, f.right), f.bottom = vs(g.bottom, f.bottom), f.left = Zn(g.left, f.left), f;
  }, ph(e3, l, i));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Qg(e3) {
  var t = e3.reference, r = e3.element, i = e3.placement, a = i ? Lr(i) : null, s = i ? Ri(i) : null, l = t.x + t.width / 2 - r.width / 2, c = t.y + t.height / 2 - r.height / 2, f;
  switch (a) {
    case Nt:
      f = {
        x: l,
        y: t.y - r.height
      };
      break;
    case fr:
      f = {
        x: l,
        y: t.y + t.height
      };
      break;
    case dr:
      f = {
        x: t.x + t.width,
        y: c
      };
      break;
    case Ft:
      f = {
        x: t.x - r.width,
        y: c
      };
      break;
    default:
      f = {
        x: t.x,
        y: t.y
      };
  }
  var m = a ? Hc(a) : null;
  if (m != null) {
    var g = m === "y" ? "height" : "width";
    switch (s) {
      case Oi:
        f[m] = f[m] - (t[g] / 2 - r[g] / 2);
        break;
      case Lo:
        f[m] = f[m] + (t[g] / 2 - r[g] / 2);
        break;
    }
  }
  return f;
}
function Mo(e3, t) {
  t === void 0 && (t = {});
  var r = t, i = r.placement, a = i === void 0 ? e3.placement : i, s = r.strategy, l = s === void 0 ? e3.strategy : s, c = r.boundary, f = c === void 0 ? oO : c, m = r.rootBoundary, g = m === void 0 ? qg : m, v = r.elementContext, p = v === void 0 ? Yi : v, w = r.altBoundary, S = w === void 0 ? false : w, d = r.padding, b = d === void 0 ? 0 : d, h = Yg(typeof b != "number" ? b : Xg(b, Uo)), x = p === Yi ? aO : Yi, _ = e3.rects.popper, R = e3.elements[S ? x : p], O = zO(Gn(R) ? R : R.contextElement || En(e3.elements.popper), f, g, l), C = Ti(e3.elements.reference), W = Qg({
    reference: C,
    element: _,
    placement: a
  }), M = hc(Object.assign({}, _, W)), N = p === Yi ? M : C, Z = {
    top: O.top - N.top + h.top,
    bottom: N.bottom - O.bottom + h.bottom,
    left: O.left - N.left + h.left,
    right: N.right - O.right + h.right
  }, D = e3.modifiersData.offset;
  if (p === Yi && D) {
    var L = D[a];
    Object.keys(Z).forEach(function(B) {
      var H = [dr, fr].indexOf(B) >= 0 ? 1 : -1, k = [Nt, fr].indexOf(B) >= 0 ? "y" : "x";
      Z[B] += L[k] * H;
    });
  }
  return Z;
}
function WO(e3, t) {
  t === void 0 && (t = {});
  var r = t, i = r.placement, a = r.boundary, s = r.rootBoundary, l = r.padding, c = r.flipVariations, f = r.allowedAutoPlacements, m = f === void 0 ? Zg : f, g = Ri(i), v = g ? c ? lh : lh.filter(function(S) {
    return Ri(S) === g;
  }) : Uo, p = v.filter(function(S) {
    return m.indexOf(S) >= 0;
  });
  p.length === 0 && (p = v);
  var w = p.reduce(function(S, d) {
    return S[d] = Mo(e3, {
      placement: d,
      boundary: a,
      rootBoundary: s,
      padding: l
    })[Lr(d)], S;
  }, {});
  return Object.keys(w).sort(function(S, d) {
    return w[S] - w[d];
  });
}
function BO(e3) {
  if (Lr(e3) === Bc)
    return [];
  var t = ss(e3);
  return [dh(e3), t, dh(t)];
}
function UO(e3) {
  var t = e3.state, r = e3.options, i = e3.name;
  if (!t.modifiersData[i]._skip) {
    for (var a = r.mainAxis, s = a === void 0 ? true : a, l = r.altAxis, c = l === void 0 ? true : l, f = r.fallbackPlacements, m = r.padding, g = r.boundary, v = r.rootBoundary, p = r.altBoundary, w = r.flipVariations, S = w === void 0 ? true : w, d = r.allowedAutoPlacements, b = t.options.placement, h = Lr(b), x = h === b, _ = f || (x || !S ? [ss(b)] : BO(b)), R = [b].concat(_).reduce(function(re, le) {
      return re.concat(Lr(le) === Bc ? WO(t, {
        placement: le,
        boundary: g,
        rootBoundary: v,
        padding: m,
        flipVariations: S,
        allowedAutoPlacements: d
      }) : le);
    }, []), O = t.rects.reference, C = t.rects.popper, W = /* @__PURE__ */ new Map(), M = true, N = R[0], Z = 0; Z < R.length; Z++) {
      var D = R[Z], L = Lr(D), B = Ri(D) === Oi, H = [Nt, fr].indexOf(L) >= 0, k = H ? "width" : "height", X = Mo(t, {
        placement: D,
        boundary: g,
        rootBoundary: v,
        altBoundary: p,
        padding: m
      }), V = H ? B ? dr : Ft : B ? fr : Nt;
      O[k] > C[k] && (V = ss(V));
      var ee = ss(V), fe = [];
      if (s && fe.push(X[L] <= 0), c && fe.push(X[V] <= 0, X[ee] <= 0), fe.every(function(re) {
        return re;
      })) {
        N = D, M = false;
        break;
      }
      W.set(D, fe);
    }
    if (M)
      for (var q = S ? 3 : 1, J = function(le) {
        var ce = R.find(function(me) {
          var ve = W.get(me);
          if (ve)
            return ve.slice(0, le).every(function(xe) {
              return xe;
            });
        });
        if (ce)
          return N = ce, "break";
      }, oe = q; oe > 0; oe--) {
        var se = J(oe);
        if (se === "break") break;
      }
    t.placement !== N && (t.modifiersData[i]._skip = true, t.placement = N, t.reset = true);
  }
}
const jO = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: UO,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function hh(e3, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e3.top - t.height - r.y,
    right: e3.right - t.width + r.x,
    bottom: e3.bottom - t.height + r.y,
    left: e3.left - t.width - r.x
  };
}
function vh(e3) {
  return [Nt, dr, fr, Ft].some(function(t) {
    return e3[t] >= 0;
  });
}
function HO(e3) {
  var t = e3.state, r = e3.name, i = t.rects.reference, a = t.rects.popper, s = t.modifiersData.preventOverflow, l = Mo(t, {
    elementContext: "reference"
  }), c = Mo(t, {
    altBoundary: true
  }), f = hh(l, i), m = hh(c, a, s), g = vh(f), v = vh(m);
  t.modifiersData[r] = {
    referenceClippingOffsets: f,
    popperEscapeOffsets: m,
    isReferenceHidden: g,
    hasPopperEscaped: v
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": g,
    "data-popper-escaped": v
  });
}
const qO = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: HO
};
function ZO(e3, t, r) {
  var i = Lr(e3), a = [Ft, Nt].indexOf(i) >= 0 ? -1 : 1, s = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e3
  })) : r, l = s[0], c = s[1];
  return l = l || 0, c = (c || 0) * a, [Ft, dr].indexOf(i) >= 0 ? {
    x: c,
    y: l
  } : {
    x: l,
    y: c
  };
}
function GO(e3) {
  var t = e3.state, r = e3.options, i = e3.name, a = r.offset, s = a === void 0 ? [0, 0] : a, l = Zg.reduce(function(g, v) {
    return g[v] = ZO(v, t.rects, s), g;
  }, {}), c = l[t.placement], f = c.x, m = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += m), t.modifiersData[i] = l;
}
const KO = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: GO
};
function VO(e3) {
  var t = e3.state, r = e3.name;
  t.modifiersData[r] = Qg({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const YO = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: VO,
  data: {}
};
function XO(e3) {
  return e3 === "x" ? "y" : "x";
}
function JO(e3) {
  var t = e3.state, r = e3.options, i = e3.name, a = r.mainAxis, s = a === void 0 ? true : a, l = r.altAxis, c = l === void 0 ? false : l, f = r.boundary, m = r.rootBoundary, g = r.altBoundary, v = r.padding, p = r.tether, w = p === void 0 ? true : p, S = r.tetherOffset, d = S === void 0 ? 0 : S, b = Mo(t, {
    boundary: f,
    rootBoundary: m,
    padding: v,
    altBoundary: g
  }), h = Lr(t.placement), x = Ri(t.placement), _ = !x, R = Hc(h), O = XO(R), C = t.modifiersData.popperOffsets, W = t.rects.reference, M = t.rects.popper, N = typeof d == "function" ? d(Object.assign({}, t.rects, {
    placement: t.placement
  })) : d, Z = typeof N == "number" ? {
    mainAxis: N,
    altAxis: N
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, N), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, L = {
    x: 0,
    y: 0
  };
  if (C) {
    if (s) {
      var B, H = R === "y" ? Nt : Ft, k = R === "y" ? fr : dr, X = R === "y" ? "height" : "width", V = C[R], ee = V + b[H], fe = V - b[k], q = w ? -M[X] / 2 : 0, J = x === Oi ? W[X] : M[X], oe = x === Oi ? -M[X] : -W[X], se = t.elements.arrow, re = w && se ? jc(se) : {
        width: 0,
        height: 0
      }, le = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Vg(), ce = le[H], me = le[k], ve = Po(0, W[X], re[X]), xe = _ ? W[X] / 2 - q - ve - ce - Z.mainAxis : J - ve - ce - Z.mainAxis, Oe = _ ? -W[X] / 2 + q + ve + me + Z.mainAxis : oe + ve + me + Z.mainAxis, Ke = t.elements.arrow && jo(t.elements.arrow), ne = Ke ? R === "y" ? Ke.clientTop || 0 : Ke.clientLeft || 0 : 0, bt = (B = D == null ? void 0 : D[R]) != null ? B : 0, ft = V + xe - bt - ne, _r = V + Oe - bt, Ko = Po(w ? vs(ee, ft) : ee, V, w ? Zn(fe, _r) : fe);
      C[R] = Ko, L[R] = Ko - V;
    }
    if (c) {
      var Jt, Vo = R === "x" ? Nt : Ft, Ys = R === "x" ? fr : dr, Dt = C[O], St = O === "y" ? "height" : "width", rn = Dt + b[Vo], Tn = Dt - b[Ys], Li = [Nt, Ft].indexOf(h) !== -1, nn = (Jt = D == null ? void 0 : D[O]) != null ? Jt : 0, Yo = Li ? rn : Dt - W[St] - M[St] - nn + Z.altAxis, on = Li ? Dt + W[St] + M[St] - nn - Z.altAxis : Tn, zr = w && Li ? xO(Yo, Dt, on) : Po(w ? Yo : rn, Dt, w ? on : Tn);
      C[O] = zr, L[O] = zr - Dt;
    }
    t.modifiersData[i] = L;
  }
}
const QO = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: JO,
  requiresIfExists: ["offset"]
};
function eA(e3) {
  return {
    scrollLeft: e3.scrollLeft,
    scrollTop: e3.scrollTop
  };
}
function tA(e3) {
  return e3 === Vt(e3) || !lr(e3) ? qc(e3) : eA(e3);
}
function rA(e3) {
  var t = e3.getBoundingClientRect(), r = Ai(t.width) / e3.offsetWidth || 1, i = Ai(t.height) / e3.offsetHeight || 1;
  return r !== 1 || i !== 1;
}
function nA(e3, t, r) {
  r === void 0 && (r = false);
  var i = lr(t), a = lr(t) && rA(t), s = En(t), l = Ti(e3, a, r), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (i || !i && !r) && ((Nr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Gc(s)) && (c = tA(t)), lr(t) ? (f = Ti(t, true), f.x += t.clientLeft, f.y += t.clientTop) : s && (f.x = Zc(s))), {
    x: l.left + c.scrollLeft - f.x,
    y: l.top + c.scrollTop - f.y,
    width: l.width,
    height: l.height
  };
}
function iA(e3) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), i = [];
  e3.forEach(function(s) {
    t.set(s.name, s);
  });
  function a(s) {
    r.add(s.name);
    var l = [].concat(s.requires || [], s.requiresIfExists || []);
    l.forEach(function(c) {
      if (!r.has(c)) {
        var f = t.get(c);
        f && a(f);
      }
    }), i.push(s);
  }
  return e3.forEach(function(s) {
    r.has(s.name) || a(s);
  }), i;
}
function oA(e3) {
  var t = iA(e3);
  return gO.reduce(function(r, i) {
    return r.concat(t.filter(function(a) {
      return a.phase === i;
    }));
  }, []);
}
function aA(e3) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e3());
      });
    })), t;
  };
}
function sA(e3) {
  var t = e3.reduce(function(r, i) {
    var a = r[i.name];
    return r[i.name] = a ? Object.assign({}, a, i, {
      options: Object.assign({}, a.options, i.options),
      data: Object.assign({}, a.data, i.data)
    }) : i, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var gh = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function mh() {
  for (var e3 = arguments.length, t = new Array(e3), r = 0; r < e3; r++)
    t[r] = arguments[r];
  return !t.some(function(i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
function uA(e3) {
  e3 === void 0 && (e3 = {});
  var t = e3, r = t.defaultModifiers, i = r === void 0 ? [] : r, a = t.defaultOptions, s = a === void 0 ? gh : a;
  return function(c, f, m) {
    m === void 0 && (m = s);
    var g = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, gh, s),
      modifiersData: {},
      elements: {
        reference: c,
        popper: f
      },
      attributes: {},
      styles: {}
    }, v = [], p = false, w = {
      state: g,
      setOptions: function(h) {
        var x = typeof h == "function" ? h(g.options) : h;
        d(), g.options = Object.assign({}, s, g.options, x), g.scrollParents = {
          reference: Gn(c) ? ko(c) : c.contextElement ? ko(c.contextElement) : [],
          popper: ko(f)
        };
        var _ = oA(sA([].concat(i, g.options.modifiers)));
        return g.orderedModifiers = _.filter(function(R) {
          return R.enabled;
        }), S(), w.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!p) {
          var h = g.elements, x = h.reference, _ = h.popper;
          if (mh(x, _)) {
            g.rects = {
              reference: nA(x, jo(_), g.options.strategy === "fixed"),
              popper: jc(_)
            }, g.reset = false, g.placement = g.options.placement, g.orderedModifiers.forEach(function(Z) {
              return g.modifiersData[Z.name] = Object.assign({}, Z.data);
            });
            for (var R = 0; R < g.orderedModifiers.length; R++) {
              if (g.reset === true) {
                g.reset = false, R = -1;
                continue;
              }
              var O = g.orderedModifiers[R], C = O.fn, W = O.options, M = W === void 0 ? {} : W, N = O.name;
              typeof C == "function" && (g = C({
                state: g,
                options: M,
                name: N,
                instance: w
              }) || g);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: aA(function() {
        return new Promise(function(b) {
          w.forceUpdate(), b(g);
        });
      }),
      destroy: function() {
        d(), p = true;
      }
    };
    if (!mh(c, f))
      return w;
    w.setOptions(m).then(function(b) {
      !p && m.onFirstUpdate && m.onFirstUpdate(b);
    });
    function S() {
      g.orderedModifiers.forEach(function(b) {
        var h = b.name, x = b.options, _ = x === void 0 ? {} : x, R = b.effect;
        if (typeof R == "function") {
          var O = R({
            state: g,
            name: h,
            instance: w,
            options: _
          }), C = function() {
          };
          v.push(O || C);
        }
      });
    }
    function d() {
      v.forEach(function(b) {
        return b();
      }), v = [];
    }
    return w;
  };
}
var lA = [$O, YO, kO, wO, KO, jO, QO, AO, qO], cA = /* @__PURE__ */ uA({
  defaultModifiers: lA
}), Wa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function em(e3) {
  return e3 && e3.__esModule && Object.prototype.hasOwnProperty.call(e3, "default") ? e3.default : e3;
}
var bl, yh;
function fA() {
  if (yh) return bl;
  yh = 1;
  var e3 = typeof Element < "u", t = typeof Map == "function", r = typeof Set == "function", i = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function a(s, l) {
    if (s === l) return true;
    if (s && l && typeof s == "object" && typeof l == "object") {
      if (s.constructor !== l.constructor) return false;
      var c, f, m;
      if (Array.isArray(s)) {
        if (c = s.length, c != l.length) return false;
        for (f = c; f-- !== 0; )
          if (!a(s[f], l[f])) return false;
        return true;
      }
      var g;
      if (t && s instanceof Map && l instanceof Map) {
        if (s.size !== l.size) return false;
        for (g = s.entries(); !(f = g.next()).done; )
          if (!l.has(f.value[0])) return false;
        for (g = s.entries(); !(f = g.next()).done; )
          if (!a(f.value[1], l.get(f.value[0]))) return false;
        return true;
      }
      if (r && s instanceof Set && l instanceof Set) {
        if (s.size !== l.size) return false;
        for (g = s.entries(); !(f = g.next()).done; )
          if (!l.has(f.value[0])) return false;
        return true;
      }
      if (i && ArrayBuffer.isView(s) && ArrayBuffer.isView(l)) {
        if (c = s.length, c != l.length) return false;
        for (f = c; f-- !== 0; )
          if (s[f] !== l[f]) return false;
        return true;
      }
      if (s.constructor === RegExp) return s.source === l.source && s.flags === l.flags;
      if (s.valueOf !== Object.prototype.valueOf && typeof s.valueOf == "function" && typeof l.valueOf == "function") return s.valueOf() === l.valueOf();
      if (s.toString !== Object.prototype.toString && typeof s.toString == "function" && typeof l.toString == "function") return s.toString() === l.toString();
      if (m = Object.keys(s), c = m.length, c !== Object.keys(l).length) return false;
      for (f = c; f-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(l, m[f])) return false;
      if (e3 && s instanceof Element) return false;
      for (f = c; f-- !== 0; )
        if (!((m[f] === "_owner" || m[f] === "__v" || m[f] === "__o") && s.$$typeof) && !a(s[m[f]], l[m[f]]))
          return false;
      return true;
    }
    return s !== s && l !== l;
  }
  return bl = function(l, c) {
    try {
      return a(l, c);
    } catch (f) {
      if ((f.message || "").match(/stack|recursion/i))
        return console.warn("react-fast-compare cannot handle circular refs"), false;
      throw f;
    }
  }, bl;
}
var dA = fA();
const pA = /* @__PURE__ */ em(dA);
var hA = [], tm = function(t, r, i) {
  i === void 0 && (i = {});
  var a = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(null), s = {
    onFirstUpdate: i.onFirstUpdate,
    placement: i.placement || "bottom",
    strategy: i.strategy || "absolute",
    modifiers: i.modifiers || hA
  }, l = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState({
    styles: {
      popper: {
        position: s.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), c = l[0], f = l[1], m = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useMemo(function() {
    return {
      name: "updateState",
      enabled: true,
      phase: "write",
      fn: function(w) {
        var S = w.state, d = Object.keys(S.elements);
        qodly_19d46f3361fe2825fb10__loadShare__react_mf_2_dom__loadShare__.flushSync(function() {
          f({
            styles: sh(d.map(function(b) {
              return [b, S.styles[b] || {}];
            })),
            attributes: sh(d.map(function(b) {
              return [b, S.attributes[b]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []), g = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useMemo(function() {
    var p = {
      onFirstUpdate: s.onFirstUpdate,
      placement: s.placement,
      strategy: s.strategy,
      modifiers: [].concat(s.modifiers, [m, {
        name: "applyStyles",
        enabled: false
      }])
    };
    return pA(a.current, p) ? a.current || p : (a.current = p, p);
  }, [s.onFirstUpdate, s.placement, s.strategy, s.modifiers, m]), v = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef();
  return uh(function() {
    v.current && v.current.setOptions(g);
  }, [g]), uh(function() {
    if (!(t == null || r == null)) {
      var p = i.createPopper || cA, w = p(t, r, g);
      return v.current = w, function() {
        w.destroy(), v.current = null;
      };
    }
  }, [t, r, i.createPopper]), {
    state: v.current ? v.current.state : null,
    styles: c.styles,
    attributes: c.attributes,
    update: v.current ? v.current.update : null,
    forceUpdate: v.current ? v.current.forceUpdate : null
  };
};
const vA = (e3) => /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "absolute inset-0 z-[1999]", onClick: e3.onClick }), gA = React.forwardRef(({ children: e3, style: t, attributes: r }, i) => /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  "div",
  {
    style: {
      ...t,
      zIndex: 2e3
    },
    ...r,
    ref: i,
    className: "w-60 rounded border rounded border border-grey-50 bg-grey-900 shadow-2xl",
    "data-cy": "dialogBody",
    children: e3
  }
)), U2 = ({
  referenceElement: e3,
  placement: t,
  isOpen: r,
  children: i,
  onClose: a
}) => {
  const [s, l] = React.useState(null), { styles: c, attributes: f } = tm(e3, s, {
    placement: t || "bottom-start"
  }), m = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useCallback(() => {
    a && a();
  }, [a]);
  return r ? /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(iO, { children: [
    /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(vA, { onClick: () => m() }),
    /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      gA,
      {
        ref: l,
        style: c.popper,
        attributes: f.popper,
        children: i
      }
    )
  ] }) : null;
};
var Sl = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var wh;
function rm() {
  return wh || (wh = 1, (function(e3) {
    (function() {
      var t = {}.hasOwnProperty;
      function r() {
        for (var s = "", l = 0; l < arguments.length; l++) {
          var c = arguments[l];
          c && (s = a(s, i(c)));
        }
        return s;
      }
      function i(s) {
        if (typeof s == "string" || typeof s == "number")
          return s;
        if (typeof s != "object")
          return "";
        if (Array.isArray(s))
          return r.apply(null, s);
        if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]"))
          return s.toString();
        var l = "";
        for (var c in s)
          t.call(s, c) && s[c] && (l = a(l, c));
        return l;
      }
      function a(s, l) {
        return l ? s ? s + " " + l : s + l : s;
      }
      e3.exports ? (r.default = r, e3.exports = r) : window.classNames = r;
    })();
  })(Sl)), Sl.exports;
}
var mA = rm();
const je = /* @__PURE__ */ em(mA);
function Bn() {
  return Bn = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e3[i] = r[i]);
    }
    return e3;
  }, Bn.apply(this, arguments);
}
const yA = ["children", "options"], bh = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e3, t) => (e3[t.toLowerCase()] = t, e3), { class: "className", for: "htmlFor" }), Sh = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" }, wA = ["style", "script", "pre"], bA = ["src", "href", "data", "formAction", "srcDoc", "action"], SA = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi, xA = /\n{2,}$/, xh = /^(\s*>[\s\S]*?)(?=\n\n|$)/, _A = /^ *> ?/gm, EA = /^(?:\[!([^\]]*)\]\n)?([\s\S]*)/, OA = /^ {2,}\n/, AA = /^(?:([-*_])( *\1){2,}) *(?:\n *)+\n/, _h = /^(?: {1,3})?(`{3,}|~{3,}) *(\S+)? *([^\n]*?)?\n([\s\S]*?)(?:\1\n?|$)/, Eh = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/, TA = /^(`+)((?:\\`|(?!\1)`|[^`])+)\1/, RA = /^(?:\n *)*\n/, PA = /\r\n?/g, kA = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/, CA = /^\[\^([^\]]+)]/, $A = /\f/g, IA = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/, LA = /^\s*?\[(x|\s)\]/, Oh = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, Ah = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, Th = /^([^\n]+)\n *(=|-)\2{2,} *\n/, xl = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i, MA = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, Rh = /^<!--[\s\S]*?(?:-->)/, NA = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/, _l = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i, FA = /^\{.*\}$/, DA = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, zA = /^<([^ >]+[:@\/][^ >]+)>/, WA = /-([a-z])?/gi, Ph = /^(\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/, BA = /^[^\n]+(?:  \n|\n{2,})/, UA = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/, jA = /^!\[([^\]]*)\] ?\[([^\]]*)\]/, HA = /^\[([^\]]*)\] ?\[([^\]]*)\]/, qA = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/, ZA = /\t/g, GA = /(^ *\||\| *$)/g, KA = /^ *:-+: *$/, VA = /^ *:-+ *$/, YA = /^ *-+: *$/, Is = (e3) => `(?=[\\s\\S]+?\\1${e3 ? "\\1" : ""})`, Ls = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|\\\\\\1|[\\s\\S])+?)", XA = RegExp(`^([*_])\\1${Is(1)}${Ls}\\1\\1(?!\\1)`), JA = RegExp(`^([*_])${Is(0)}${Ls}\\1(?!\\1)`), QA = RegExp(`^(==)${Is(0)}${Ls}\\1`), eT = RegExp(`^(~~)${Is(0)}${Ls}\\1`), tT = /^(:[a-zA-Z0-9-_]+:)/, rT = /^\\([^0-9A-Za-z\s])/, nT = /\\([^0-9A-Za-z\s])/g, iT = /^[\s\S](?:(?!  \n|[0-9]\.|http)[^=*_~\-\n:<`\\\[!])*/, oT = /^\n+/, aT = /^([ \t]*)/, sT = /(?:^|\n)( *)$/, Kc = "(?:\\d+\\.)", Vc = "(?:[*+-])";
function nm(e3) {
  return "( *)(" + (e3 === 1 ? Kc : Vc) + ") +";
}
const im = nm(1), om = nm(2);
function am(e3) {
  return RegExp("^" + (e3 === 1 ? im : om));
}
const uT = am(1), lT = am(2);
function sm(e3) {
  return RegExp("^" + (e3 === 1 ? im : om) + "[^\\n]*(?:\\n(?!\\1" + (e3 === 1 ? Kc : Vc) + " )[^\\n]*)*(\\n|$)", "gm");
}
const cT = sm(1), fT = sm(2);
function um(e3) {
  const t = e3 === 1 ? Kc : Vc;
  return RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)");
}
const lm = um(1), cm = um(2);
function kh(e3, t) {
  const r = t === 1, i = r ? lm : cm, a = r ? cT : fT, s = r ? uT : lT;
  return { t: (l) => s.test(l), o: Pi(function(l, c) {
    const f = sT.exec(c.prevCapture);
    return f && (c.list || !c.inline && !c.simple) ? i.exec(l = f[1] + l) : null;
  }), i: 1, u(l, c, f) {
    const m = r ? +l[2] : void 0, g = l[0].replace(xA, `
`).match(a);
    let v = false;
    return { items: g.map(function(p, w) {
      const S = s.exec(p)[0].length, d = RegExp("^ {1," + S + "}", "gm"), b = p.replace(d, "").replace(s, ""), h = w === g.length - 1, x = b.indexOf(`

`) !== -1 || h && v;
      v = x;
      const _ = f.inline, R = f.list;
      let O;
      f.list = true, x ? (f.inline = false, O = Co(b) + `

`) : (f.inline = true, O = Co(b));
      const C = c(O, f);
      return f.inline = _, f.list = R, C;
    }), ordered: r, start: m };
  }, l: (l, c, f) => e3(l.ordered ? "ol" : "ul", { key: f.key, start: l.type === "20" ? l.start : void 0 }, l.items.map(function(m, g) {
    return e3("li", { key: g }, c(m, f));
  })) };
}
const dT = RegExp(`^\\[((?:\\[[^\\[\\]]*(?:\\[[^\\[\\]]*\\][^\\[\\]]*)*\\]|[^\\[\\]])*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`), pT = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/;
function Ch(e3) {
  return typeof e3 == "string";
}
function Co(e3) {
  let t = e3.length;
  for (; t > 0 && e3[t - 1] <= " "; ) t--;
  return e3.slice(0, t);
}
function us(e3, t) {
  return e3.startsWith(t);
}
function hT(e3, t, r) {
  if (Array.isArray(r)) {
    for (let i = 0; i < r.length; i++) if (us(e3, r[i])) return true;
    return false;
  }
  return r(e3, t);
}
function Xi(e3) {
  return e3.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase();
}
function vT(e3) {
  return YA.test(e3) ? "right" : KA.test(e3) ? "center" : VA.test(e3) ? "left" : null;
}
function $h(e3, t, r, i) {
  const a = r.inTable;
  r.inTable = true;
  let s = [[]], l = "";
  function c() {
    if (!l) return;
    const f = s[s.length - 1];
    f.push.apply(f, t(l, r)), l = "";
  }
  return e3.trim().split(/(`[^`]*`|\\\||\|)/).filter(Boolean).forEach((f, m, g) => {
    f.trim() === "|" && (c(), i) ? m !== 0 && m !== g.length - 1 && s.push([]) : l += f;
  }), c(), r.inTable = a, s;
}
function gT(e3, t, r) {
  r.inline = true;
  const i = e3[2] ? e3[2].replace(GA, "").split("|").map(vT) : [], a = e3[3] ? (function(l, c, f) {
    return l.trim().split(`
`).map(function(m) {
      return $h(m, c, f, true);
    });
  })(e3[3], t, r) : [], s = $h(e3[1], t, r, !!a.length);
  return r.inline = false, a.length ? { align: i, cells: a, header: s, type: "25" } : { children: s, type: "21" };
}
function Ih(e3, t) {
  return e3.align[t] == null ? {} : { textAlign: e3.align[t] };
}
function Pi(e3) {
  return e3.inline = 1, e3;
}
function Fn(e3) {
  return Pi(function(t, r) {
    return r.inline ? e3.exec(t) : null;
  });
}
function vn(e3) {
  return Pi(function(t, r) {
    return r.inline || r.simple ? e3.exec(t) : null;
  });
}
function Vr(e3) {
  return function(t, r) {
    return r.inline || r.simple ? null : e3.exec(t);
  };
}
function Ba(e3) {
  return Pi(function(t) {
    return e3.exec(t);
  });
}
const mT = /(javascript|vbscript|data(?!:image)):/i;
function yT(e3) {
  try {
    const t = decodeURIComponent(e3).replace(/[^A-Za-z0-9/:]/g, "");
    if (mT.test(t)) return null;
  } catch {
    return null;
  }
  return e3;
}
function Tr(e3) {
  return e3 && e3.replace(nT, "$1");
}
function ls(e3, t, r) {
  const i = r.inline || false, a = r.simple || false;
  r.inline = true, r.simple = true;
  const s = e3(t, r);
  return r.inline = i, r.simple = a, s;
}
function wT(e3, t, r) {
  const i = r.inline || false, a = r.simple || false;
  r.inline = false, r.simple = true;
  const s = e3(t, r);
  return r.inline = i, r.simple = a, s;
}
function bT(e3, t, r) {
  const i = r.inline || false;
  r.inline = false;
  const a = e3(t, r);
  return r.inline = i, a;
}
const El = (e3, t, r) => ({ children: ls(t, e3[2], r) });
function Ol() {
  return {};
}
function Al() {
  return null;
}
function ST(...e3) {
  return e3.filter(Boolean).join(" ");
}
function Tl(e3, t, r) {
  let i = e3;
  const a = t.split(".");
  for (; a.length && (i = i[a[0]], i !== void 0); ) a.shift();
  return i || r;
}
function xT(e3 = "", t = {}) {
  t.overrides = t.overrides || {}, t.namedCodesToUnicode = t.namedCodesToUnicode ? Bn({}, Sh, t.namedCodesToUnicode) : Sh;
  const r = t.slugify || Xi, i = t.sanitizer || yT, a = t.createElement || qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement, s = [xh, _h, Eh, t.enforceAtxHeadings ? Ah : Oh, Th, Ph, lm, cm], l = [...s, BA, xl, Rh, _l];
  function c(h, x) {
    for (let _ = 0; _ < h.length; _++) if (h[_].test(x)) return true;
    return false;
  }
  function f(h, x, ..._) {
    const R = Tl(t.overrides, h + ".props", {});
    return a((function(O, C) {
      const W = Tl(C, O);
      return W ? typeof W == "function" || typeof W == "object" && "render" in W ? W : Tl(C, O + ".component", O) : O;
    })(h, t.overrides), Bn({}, x, R, { className: ST(x == null ? void 0 : x.className, R.className) || void 0 }), ..._);
  }
  function m(h) {
    h = h.replace(IA, "");
    let x = false;
    t.forceInline ? x = true : t.forceBlock || (x = qA.test(h) === false);
    const _ = d(S(x ? h : Co(h).replace(oT, "") + `

`, { inline: x }));
    for (; Ch(_[_.length - 1]) && !_[_.length - 1].trim(); ) _.pop();
    if (t.wrapper === null) return _;
    const R = t.wrapper || (x ? "span" : "div");
    let O;
    if (_.length > 1 || t.forceWrapper) O = _;
    else {
      if (_.length === 1) return O = _[0], typeof O == "string" ? f("span", { key: "outer" }, O) : O;
      O = null;
    }
    return a(R, { key: "outer" }, O);
  }
  function g(h, x) {
    if (!x || !x.trim()) return null;
    const _ = x.match(SA);
    return _ ? _.reduce(function(R, O) {
      const C = O.indexOf("=");
      if (C !== -1) {
        const W = (function(D) {
          return D.indexOf("-") !== -1 && D.match(NA) === null && (D = D.replace(WA, function(L, B) {
            return B.toUpperCase();
          })), D;
        })(O.slice(0, C)).trim(), M = (function(D) {
          const L = D[0];
          return (L === '"' || L === "'") && D.length >= 2 && D[D.length - 1] === L ? D.slice(1, -1) : D;
        })(O.slice(C + 1).trim()), N = bh[W] || W;
        if (N === "ref") return R;
        const Z = R[N] = (function(D, L, B, H) {
          return L === "style" ? (function(k) {
            const X = [];
            let V = "", ee = false, fe = false, q = "";
            if (!k) return X;
            for (let oe = 0; oe < k.length; oe++) {
              const se = k[oe];
              if (se !== '"' && se !== "'" || ee || (fe ? se === q && (fe = false, q = "") : (fe = true, q = se)), se === "(" && V.endsWith("url") ? ee = true : se === ")" && ee && (ee = false), se !== ";" || fe || ee) V += se;
              else {
                const re = V.trim();
                if (re) {
                  const le = re.indexOf(":");
                  if (le > 0) {
                    const ce = re.slice(0, le).trim(), me = re.slice(le + 1).trim();
                    X.push([ce, me]);
                  }
                }
                V = "";
              }
            }
            const J = V.trim();
            if (J) {
              const oe = J.indexOf(":");
              if (oe > 0) {
                const se = J.slice(0, oe).trim(), re = J.slice(oe + 1).trim();
                X.push([se, re]);
              }
            }
            return X;
          })(B).reduce(function(k, [X, V]) {
            return k[X.replace(/(-[a-z])/g, (ee) => ee[1].toUpperCase())] = H(V, D, X), k;
          }, {}) : bA.indexOf(L) !== -1 ? H(Tr(B), D, L) : (B.match(FA) && (B = Tr(B.slice(1, B.length - 1))), B === "true" || B !== "false" && B);
        })(h, W, M, i);
        typeof Z == "string" && (xl.test(Z) || _l.test(Z)) && (R[N] = m(Z.trim()));
      } else O !== "style" && (R[bh[O] || O] = true);
      return R;
    }, {}) : null;
  }
  const v = [], p = {}, w = { 0: { t: [">"], o: Vr(xh), i: 1, u(h, x, _) {
    const [, R, O] = h[0].replace(_A, "").match(EA);
    return { alert: R, children: x(O, _) };
  }, l(h, x, _) {
    const R = { key: _.key };
    return h.alert && (R.className = "markdown-alert-" + r(h.alert.toLowerCase(), Xi), h.children.unshift({ attrs: {}, children: [{ type: "27", text: h.alert }], noInnerParse: true, type: "11", tag: "header" })), f("blockquote", R, x(h.children, _));
  } }, 1: { t: ["  "], o: Ba(OA), i: 1, u: Ol, l: (h, x, _) => f("br", { key: _.key }) }, 2: { t: ["--", "__", "**", "- ", "* ", "_ "], o: Vr(AA), i: 1, u: Ol, l: (h, x, _) => f("hr", { key: _.key }) }, 3: { t: ["    "], o: Vr(Eh), i: 0, u: (h) => ({ lang: void 0, text: Tr(Co(h[0].replace(/^ {4}/gm, ""))) }), l: (h, x, _) => f("pre", { key: _.key }, f("code", Bn({}, h.attrs, { className: h.lang ? "lang-" + h.lang : "" }), h.text)) }, 4: { t: ["```", "~~~"], o: Vr(_h), i: 0, u: (h) => ({ attrs: g("code", h[3] || ""), lang: h[2] || void 0, text: h[4], type: "3" }) }, 5: { t: ["`"], o: vn(TA), i: 3, u: (h) => ({ text: Tr(h[2]) }), l: (h, x, _) => f("code", { key: _.key }, h.text) }, 6: { t: ["[^"], o: Vr(kA), i: 0, u: (h) => (v.push({ footnote: h[2], identifier: h[1] }), {}), l: Al }, 7: { t: ["[^"], o: Fn(CA), i: 1, u: (h) => ({ target: "#" + r(h[1], Xi), text: h[1] }), l: (h, x, _) => f("a", { key: _.key, href: i(h.target, "a", "href") }, f("sup", { key: _.key }, h.text)) }, 8: { t: ["[ ]", "[x]"], o: Fn(LA), i: 1, u: (h) => ({ completed: h[1].toLowerCase() === "x" }), l: (h, x, _) => f("input", { checked: h.completed, key: _.key, readOnly: true, type: "checkbox" }) }, 9: { t: ["#"], o: Vr(t.enforceAtxHeadings ? Ah : Oh), i: 1, u: (h, x, _) => ({ children: ls(x, h[2], _), id: r(h[2], Xi), level: h[1].length }), l: (h, x, _) => f("h" + h.level, { id: h.id, key: _.key }, x(h.children, _)) }, 10: { t: (h) => {
    const x = h.indexOf(`
`);
    return x > 0 && x < h.length - 1 && (h[x + 1] === "=" || h[x + 1] === "-");
  }, o: Vr(Th), i: 0, u: (h, x, _) => ({ children: ls(x, h[1], _), level: h[2] === "=" ? 1 : 2, type: "9" }) }, 11: { t: ["<"], o: Ba(xl), i: 1, u(h, x, _) {
    const [, R] = h[3].match(aT), O = RegExp("^" + R, "gm"), C = h[3].replace(O, ""), W = c(l, C) ? bT : ls, M = h[1].toLowerCase(), N = wA.indexOf(M) !== -1, Z = (N ? M : h[1]).trim(), D = { attrs: g(Z, h[2]), noInnerParse: N, tag: Z };
    if (_.inAnchor = _.inAnchor || M === "a", N) D.text = h[3];
    else {
      const L = _.inHTML;
      _.inHTML = true, D.children = W(x, C, _), _.inHTML = L;
    }
    return _.inAnchor = false, D;
  }, l: (h, x, _) => f(h.tag, Bn({ key: _.key }, h.attrs), h.text || (h.children ? x(h.children, _) : "")) }, 13: { t: ["<"], o: Ba(_l), i: 1, u(h) {
    const x = h[1].trim();
    return { attrs: g(x, h[2] || ""), tag: x };
  }, l: (h, x, _) => f(h.tag, Bn({}, h.attrs, { key: _.key })) }, 12: { t: ["<!--"], o: Ba(Rh), i: 1, u: () => ({}), l: Al }, 14: { t: ["!["], o: vn(pT), i: 1, u: (h) => ({ alt: Tr(h[1]), target: Tr(h[2]), title: Tr(h[3]) }), l: (h, x, _) => f("img", { key: _.key, alt: h.alt || void 0, title: h.title || void 0, src: i(h.target, "img", "src") }) }, 15: { t: ["["], o: Fn(dT), i: 3, u: (h, x, _) => ({ children: wT(x, h[1], _), target: Tr(h[2]), title: Tr(h[3]) }), l: (h, x, _) => f("a", { key: _.key, href: i(h.target, "a", "href"), title: h.title }, x(h.children, _)) }, 16: { t: ["<"], o: Fn(zA), i: 0, u(h) {
    let x = h[1], _ = false;
    return x.indexOf("@") !== -1 && x.indexOf("//") === -1 && (_ = true, x = x.replace("mailto:", "")), { children: [{ text: x, type: "27" }], target: _ ? "mailto:" + x : x, type: "15" };
  } }, 17: { t: (h, x) => !x.inAnchor && !t.disableAutoLink && (us(h, "http://") || us(h, "https://")), o: Fn(DA), i: 0, u: (h) => ({ children: [{ text: h[1], type: "27" }], target: h[1], title: void 0, type: "15" }) }, 20: kh(f, 1), 33: kh(f, 2), 19: { t: [`
`], o: Vr(RA), i: 3, u: Ol, l: () => `
` }, 21: { o: Pi(function(h, x) {
    if (x.inline || x.simple || x.inHTML && h.indexOf(`

`) === -1 && x.prevCapture.indexOf(`

`) === -1) return null;
    let _ = "", R = 0;
    for (; ; ) {
      const C = h.indexOf(`
`, R), W = h.slice(R, C === -1 ? void 0 : C + 1);
      if (c(s, W) || (_ += W, C === -1 || !W.trim())) break;
      R = C + 1;
    }
    const O = Co(_);
    return O === "" ? null : [_, , O];
  }), i: 3, u: El, l: (h, x, _) => f("p", { key: _.key }, x(h.children, _)) }, 22: { t: ["["], o: Fn(UA), i: 0, u: (h) => (p[h[1]] = { target: h[2], title: h[4] }, {}), l: Al }, 23: { t: ["!["], o: vn(jA), i: 0, u: (h) => ({ alt: h[1] ? Tr(h[1]) : void 0, ref: h[2] }), l: (h, x, _) => p[h.ref] ? f("img", { key: _.key, alt: h.alt, src: i(p[h.ref].target, "img", "src"), title: p[h.ref].title }) : null }, 24: { t: (h) => h[0] === "[" && h.indexOf("](") === -1, o: Fn(HA), i: 0, u: (h, x, _) => ({ children: x(h[1], _), fallbackChildren: h[0], ref: h[2] }), l: (h, x, _) => p[h.ref] ? f("a", { key: _.key, href: i(p[h.ref].target, "a", "href"), title: p[h.ref].title }, x(h.children, _)) : f("span", { key: _.key }, h.fallbackChildren) }, 25: { t: ["|"], o: Vr(Ph), i: 1, u: gT, l(h, x, _) {
    const R = h;
    return f("table", { key: _.key }, f("thead", null, f("tr", null, R.header.map(function(O, C) {
      return f("th", { key: C, style: Ih(R, C) }, x(O, _));
    }))), f("tbody", null, R.cells.map(function(O, C) {
      return f("tr", { key: C }, O.map(function(W, M) {
        return f("td", { key: M, style: Ih(R, M) }, x(W, _));
      }));
    })));
  } }, 27: { o: Pi(function(h, x) {
    let _;
    return us(h, ":") && (_ = tT.exec(h)), _ || iT.exec(h);
  }), i: 4, u(h) {
    const x = h[0];
    return { text: x.indexOf("&") === -1 ? x : x.replace(MA, (_, R) => t.namedCodesToUnicode[R] || _) };
  }, l: (h) => h.text }, 28: { t: ["**", "__"], o: vn(XA), i: 2, u: (h, x, _) => ({ children: x(h[2], _) }), l: (h, x, _) => f("strong", { key: _.key }, x(h.children, _)) }, 29: { t: (h) => {
    const x = h[0];
    return (x === "*" || x === "_") && h[1] !== x;
  }, o: vn(JA), i: 3, u: (h, x, _) => ({ children: x(h[2], _) }), l: (h, x, _) => f("em", { key: _.key }, x(h.children, _)) }, 30: { t: ["\\"], o: vn(rT), i: 1, u: (h) => ({ text: h[1], type: "27" }) }, 31: { t: ["=="], o: vn(QA), i: 3, u: El, l: (h, x, _) => f("mark", { key: _.key }, x(h.children, _)) }, 32: { t: ["~~"], o: vn(eT), i: 3, u: El, l: (h, x, _) => f("del", { key: _.key }, x(h.children, _)) } };
  t.disableParsingRawHTML === true && (delete w[11], delete w[13]);
  const S = (function(h) {
    var x = Object.keys(h);
    function _(R, O) {
      var C = [];
      if (O.prevCapture = O.prevCapture || "", R.trim()) for (; R; ) for (var W = 0; W < x.length; ) {
        var M = x[W], N = h[M];
        if (!N.t || hT(R, O, N.t)) {
          var Z = N.o(R, O);
          if (Z && Z[0]) {
            R = R.substring(Z[0].length);
            var D = N.u(Z, _, O);
            O.prevCapture += Z[0], D.type || (D.type = M), C.push(D);
            break;
          }
          W++;
        } else W++;
      }
      return O.prevCapture = "", C;
    }
    return x.sort(function(R, O) {
      return h[R].i - h[O].i || (R < O ? -1 : 1);
    }), function(R, O) {
      return _((function(C) {
        return C.replace(PA, `
`).replace($A, "").replace(ZA, "    ");
      })(R), O);
    };
  })(w), d = /* @__PURE__ */ (function(h, x) {
    return function _(R, O = {}) {
      if (Array.isArray(R)) {
        const C = O.key, W = [];
        let M = false;
        for (let N = 0; N < R.length; N++) {
          O.key = N;
          const Z = _(R[N], O), D = Ch(Z);
          D && M ? W[W.length - 1] += Z : Z !== null && W.push(Z), M = D;
        }
        return O.key = C, W;
      }
      return (function(C, W, M) {
        const N = h[C.type].l;
        return x ? x(() => N(C, W, M), C, W, M) : N(C, W, M);
      })(R, _, O);
    };
  })(w, t.renderRule), b = m(e3);
  return v.length ? f("div", null, b, f("footer", { key: "footer" }, v.map(function(h) {
    return f("div", { id: r(h.identifier, Xi), key: h.identifier }, h.identifier, d(S(h.footnote, { inline: true })));
  }))) : b;
}
const gs = (e3) => {
  let { children: t = "", options: r } = e3, i = (function(a, s) {
    if (a == null) return {};
    var l, c, f = {}, m = Object.keys(a);
    for (c = 0; c < m.length; c++) s.indexOf(l = m[c]) >= 0 || (f[l] = a[l]);
    return f;
  })(e3, yA);
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.cloneElement(xT(t, r), i);
}, Lh = ({ kind: e3, customIcon: t }) => {
  const r = {
    "text-yellow-400": e3 === "warning",
    "text-red-500": e3 === "danger" || e3 === "error",
    "text-primary": e3 === "info",
    "text-green-500": e3 === "message"
  };
  if (t)
    return /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(t, { className: je("flex-none size-6", r) });
  switch (e3) {
    case "error":
    case "danger":
      return /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(N3, { className: je("flex-none size-6", r) });
    case "info":
      return /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(c4, { className: je("flex-none size-6", r) }) });
    case "warning":
      return /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(a6, { className: je("flex-none size-6", r) }) });
    case "message":
      return /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(c4, { className: je("flex-none size-6", r) }) });
    default:
      return null;
  }
}, j2 = ({
  id: e3,
  onClose: t,
  kind: r,
  message: i,
  markdown: a,
  customIcon: s
}) => {
  const l = ({ className: c } = {}) => /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    "button",
    {
      onClick: t,
      className: je("flex justify-center p-1", c),
      children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(x5, { className: "size-4 font-thin stroke-current" })
    }
  );
  return /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    "div",
    {
      className: je(
        "relative flex items-center rounded-lg py-2 px-4 text-sm text-slate-500 bg-white shadow-md"
      ),
      children: typeof i == "string" ? /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "w-full flex justify-between gap-x-3", children: [
        /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "pt-1", children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Lh, { kind: r, customIcon: s }) }),
        /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex items-center gap-1 prose", children: a ? /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(gs, { children: i }) : /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: i }) }),
        l()
      ] }) : /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex items-start", children: [
        /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex flex-col gap-2 justify-between", children: i.filter((c) => c.messages.length > 0).map((c) => /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: [
          c.title && /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("span", { className: "flex items-center gap-1 font-bold capitalize", children: [
            /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Lh, { kind: r, customIcon: s }),
            /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("span", { children: [
              c.title,
              " :"
            ] })
          ] }),
          /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            "ul",
            {
              className: je("list-disc", {
                "px-12": c.title,
                "px-6": !c.title
              }),
              children: c.messages.map((f) => /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("li", { children: a ? /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(gs, { children: f }) : /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: f }) }))
            }
          )
        ] })) }),
        l({
          className: "absolute top-1 right-1"
        })
      ] })
    },
    e3
  );
}, _T = ({
  children: e3,
  size: t,
  className: r,
  ...i
}) => /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  "div",
  {
    style: { "--width": `${t || 24}px` },
    className: je("h-6 flex items-center pr-1 w-[--width]", r),
    ...i,
    children: e3
  }
);
var Rl = {}, Ji = {}, Ua = {}, Mh;
function fm() {
  if (Mh) return Ua;
  Mh = 1, Object.defineProperty(Ua, "__esModule", {
    value: true
  }), Ua.default = r;
  let e3;
  const t = new Uint8Array(16);
  function r() {
    if (!e3 && (e3 = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !e3))
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return e3(t);
  }
  return Ua;
}
var gi = {}, Qi = {}, eo = {}, Nh;
function ET() {
  if (Nh) return eo;
  Nh = 1, Object.defineProperty(eo, "__esModule", {
    value: true
  }), eo.default = void 0;
  var e3 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return eo.default = e3, eo;
}
var Fh;
function Ms() {
  if (Fh) return Qi;
  Fh = 1, Object.defineProperty(Qi, "__esModule", {
    value: true
  }), Qi.default = void 0;
  var e3 = t(/* @__PURE__ */ ET());
  function t(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function r(a) {
    return typeof a == "string" && e3.default.test(a);
  }
  var i = r;
  return Qi.default = i, Qi;
}
var Dh;
function Ns() {
  if (Dh) return gi;
  Dh = 1, Object.defineProperty(gi, "__esModule", {
    value: true
  }), gi.default = void 0, gi.unsafeStringify = i;
  var e3 = t(/* @__PURE__ */ Ms());
  function t(l) {
    return l && l.__esModule ? l : { default: l };
  }
  const r = [];
  for (let l = 0; l < 256; ++l)
    r.push((l + 256).toString(16).slice(1));
  function i(l, c = 0) {
    return r[l[c + 0]] + r[l[c + 1]] + r[l[c + 2]] + r[l[c + 3]] + "-" + r[l[c + 4]] + r[l[c + 5]] + "-" + r[l[c + 6]] + r[l[c + 7]] + "-" + r[l[c + 8]] + r[l[c + 9]] + "-" + r[l[c + 10]] + r[l[c + 11]] + r[l[c + 12]] + r[l[c + 13]] + r[l[c + 14]] + r[l[c + 15]];
  }
  function a(l, c = 0) {
    const f = i(l, c);
    if (!(0, e3.default)(f))
      throw TypeError("Stringified UUID is invalid");
    return f;
  }
  var s = a;
  return gi.default = s, gi;
}
var zh;
function OT() {
  if (zh) return Ji;
  zh = 1, Object.defineProperty(Ji, "__esModule", {
    value: true
  }), Ji.default = void 0;
  var e3 = r(/* @__PURE__ */ fm()), t = /* @__PURE__ */ Ns();
  function r(m) {
    return m && m.__esModule ? m : { default: m };
  }
  let i, a, s = 0, l = 0;
  function c(m, g, v) {
    let p = g && v || 0;
    const w = g || new Array(16);
    m = m || {};
    let S = m.node || i, d = m.clockseq !== void 0 ? m.clockseq : a;
    if (S == null || d == null) {
      const O = m.random || (m.rng || e3.default)();
      S == null && (S = i = [O[0] | 1, O[1], O[2], O[3], O[4], O[5]]), d == null && (d = a = (O[6] << 8 | O[7]) & 16383);
    }
    let b = m.msecs !== void 0 ? m.msecs : Date.now(), h = m.nsecs !== void 0 ? m.nsecs : l + 1;
    const x = b - s + (h - l) / 1e4;
    if (x < 0 && m.clockseq === void 0 && (d = d + 1 & 16383), (x < 0 || b > s) && m.nsecs === void 0 && (h = 0), h >= 1e4)
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    s = b, l = h, a = d, b += 122192928e5;
    const _ = ((b & 268435455) * 1e4 + h) % 4294967296;
    w[p++] = _ >>> 24 & 255, w[p++] = _ >>> 16 & 255, w[p++] = _ >>> 8 & 255, w[p++] = _ & 255;
    const R = b / 4294967296 * 1e4 & 268435455;
    w[p++] = R >>> 8 & 255, w[p++] = R & 255, w[p++] = R >>> 24 & 15 | 16, w[p++] = R >>> 16 & 255, w[p++] = d >>> 8 | 128, w[p++] = d & 255;
    for (let O = 0; O < 6; ++O)
      w[p + O] = S[O];
    return g || (0, t.unsafeStringify)(w);
  }
  var f = c;
  return Ji.default = f, Ji;
}
var to = {}, gn = {}, ro = {}, Wh;
function dm() {
  if (Wh) return ro;
  Wh = 1, Object.defineProperty(ro, "__esModule", {
    value: true
  }), ro.default = void 0;
  var e3 = t(/* @__PURE__ */ Ms());
  function t(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function r(a) {
    if (!(0, e3.default)(a))
      throw TypeError("Invalid UUID");
    let s;
    const l = new Uint8Array(16);
    return l[0] = (s = parseInt(a.slice(0, 8), 16)) >>> 24, l[1] = s >>> 16 & 255, l[2] = s >>> 8 & 255, l[3] = s & 255, l[4] = (s = parseInt(a.slice(9, 13), 16)) >>> 8, l[5] = s & 255, l[6] = (s = parseInt(a.slice(14, 18), 16)) >>> 8, l[7] = s & 255, l[8] = (s = parseInt(a.slice(19, 23), 16)) >>> 8, l[9] = s & 255, l[10] = (s = parseInt(a.slice(24, 36), 16)) / 1099511627776 & 255, l[11] = s / 4294967296 & 255, l[12] = s >>> 24 & 255, l[13] = s >>> 16 & 255, l[14] = s >>> 8 & 255, l[15] = s & 255, l;
  }
  var i = r;
  return ro.default = i, ro;
}
var Bh;
function pm() {
  if (Bh) return gn;
  Bh = 1, Object.defineProperty(gn, "__esModule", {
    value: true
  }), gn.URL = gn.DNS = void 0, gn.default = l;
  var e3 = /* @__PURE__ */ Ns(), t = r(/* @__PURE__ */ dm());
  function r(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function i(c) {
    c = unescape(encodeURIComponent(c));
    const f = [];
    for (let m = 0; m < c.length; ++m)
      f.push(c.charCodeAt(m));
    return f;
  }
  const a = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  gn.DNS = a;
  const s = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  gn.URL = s;
  function l(c, f, m) {
    function g(v, p, w, S) {
      var d;
      if (typeof v == "string" && (v = i(v)), typeof p == "string" && (p = (0, t.default)(p)), ((d = p) === null || d === void 0 ? void 0 : d.length) !== 16)
        throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      let b = new Uint8Array(16 + v.length);
      if (b.set(p), b.set(v, p.length), b = m(b), b[6] = b[6] & 15 | f, b[8] = b[8] & 63 | 128, w) {
        S = S || 0;
        for (let h = 0; h < 16; ++h)
          w[S + h] = b[h];
        return w;
      }
      return (0, e3.unsafeStringify)(b);
    }
    try {
      g.name = c;
    } catch {
    }
    return g.DNS = a, g.URL = s, g;
  }
  return gn;
}
var no = {}, Uh;
function AT() {
  if (Uh) return no;
  Uh = 1, Object.defineProperty(no, "__esModule", {
    value: true
  }), no.default = void 0;
  function e3(w) {
    if (typeof w == "string") {
      const S = unescape(encodeURIComponent(w));
      w = new Uint8Array(S.length);
      for (let d = 0; d < S.length; ++d)
        w[d] = S.charCodeAt(d);
    }
    return t(i(a(w), w.length * 8));
  }
  function t(w) {
    const S = [], d = w.length * 32, b = "0123456789abcdef";
    for (let h = 0; h < d; h += 8) {
      const x = w[h >> 5] >>> h % 32 & 255, _ = parseInt(b.charAt(x >>> 4 & 15) + b.charAt(x & 15), 16);
      S.push(_);
    }
    return S;
  }
  function r(w) {
    return (w + 64 >>> 9 << 4) + 14 + 1;
  }
  function i(w, S) {
    w[S >> 5] |= 128 << S % 32, w[r(S) - 1] = S;
    let d = 1732584193, b = -271733879, h = -1732584194, x = 271733878;
    for (let _ = 0; _ < w.length; _ += 16) {
      const R = d, O = b, C = h, W = x;
      d = f(d, b, h, x, w[_], 7, -680876936), x = f(x, d, b, h, w[_ + 1], 12, -389564586), h = f(h, x, d, b, w[_ + 2], 17, 606105819), b = f(b, h, x, d, w[_ + 3], 22, -1044525330), d = f(d, b, h, x, w[_ + 4], 7, -176418897), x = f(x, d, b, h, w[_ + 5], 12, 1200080426), h = f(h, x, d, b, w[_ + 6], 17, -1473231341), b = f(b, h, x, d, w[_ + 7], 22, -45705983), d = f(d, b, h, x, w[_ + 8], 7, 1770035416), x = f(x, d, b, h, w[_ + 9], 12, -1958414417), h = f(h, x, d, b, w[_ + 10], 17, -42063), b = f(b, h, x, d, w[_ + 11], 22, -1990404162), d = f(d, b, h, x, w[_ + 12], 7, 1804603682), x = f(x, d, b, h, w[_ + 13], 12, -40341101), h = f(h, x, d, b, w[_ + 14], 17, -1502002290), b = f(b, h, x, d, w[_ + 15], 22, 1236535329), d = m(d, b, h, x, w[_ + 1], 5, -165796510), x = m(x, d, b, h, w[_ + 6], 9, -1069501632), h = m(h, x, d, b, w[_ + 11], 14, 643717713), b = m(b, h, x, d, w[_], 20, -373897302), d = m(d, b, h, x, w[_ + 5], 5, -701558691), x = m(x, d, b, h, w[_ + 10], 9, 38016083), h = m(h, x, d, b, w[_ + 15], 14, -660478335), b = m(b, h, x, d, w[_ + 4], 20, -405537848), d = m(d, b, h, x, w[_ + 9], 5, 568446438), x = m(x, d, b, h, w[_ + 14], 9, -1019803690), h = m(h, x, d, b, w[_ + 3], 14, -187363961), b = m(b, h, x, d, w[_ + 8], 20, 1163531501), d = m(d, b, h, x, w[_ + 13], 5, -1444681467), x = m(x, d, b, h, w[_ + 2], 9, -51403784), h = m(h, x, d, b, w[_ + 7], 14, 1735328473), b = m(b, h, x, d, w[_ + 12], 20, -1926607734), d = g(d, b, h, x, w[_ + 5], 4, -378558), x = g(x, d, b, h, w[_ + 8], 11, -2022574463), h = g(h, x, d, b, w[_ + 11], 16, 1839030562), b = g(b, h, x, d, w[_ + 14], 23, -35309556), d = g(d, b, h, x, w[_ + 1], 4, -1530992060), x = g(x, d, b, h, w[_ + 4], 11, 1272893353), h = g(h, x, d, b, w[_ + 7], 16, -155497632), b = g(b, h, x, d, w[_ + 10], 23, -1094730640), d = g(d, b, h, x, w[_ + 13], 4, 681279174), x = g(x, d, b, h, w[_], 11, -358537222), h = g(h, x, d, b, w[_ + 3], 16, -722521979), b = g(b, h, x, d, w[_ + 6], 23, 76029189), d = g(d, b, h, x, w[_ + 9], 4, -640364487), x = g(x, d, b, h, w[_ + 12], 11, -421815835), h = g(h, x, d, b, w[_ + 15], 16, 530742520), b = g(b, h, x, d, w[_ + 2], 23, -995338651), d = v(d, b, h, x, w[_], 6, -198630844), x = v(x, d, b, h, w[_ + 7], 10, 1126891415), h = v(h, x, d, b, w[_ + 14], 15, -1416354905), b = v(b, h, x, d, w[_ + 5], 21, -57434055), d = v(d, b, h, x, w[_ + 12], 6, 1700485571), x = v(x, d, b, h, w[_ + 3], 10, -1894986606), h = v(h, x, d, b, w[_ + 10], 15, -1051523), b = v(b, h, x, d, w[_ + 1], 21, -2054922799), d = v(d, b, h, x, w[_ + 8], 6, 1873313359), x = v(x, d, b, h, w[_ + 15], 10, -30611744), h = v(h, x, d, b, w[_ + 6], 15, -1560198380), b = v(b, h, x, d, w[_ + 13], 21, 1309151649), d = v(d, b, h, x, w[_ + 4], 6, -145523070), x = v(x, d, b, h, w[_ + 11], 10, -1120210379), h = v(h, x, d, b, w[_ + 2], 15, 718787259), b = v(b, h, x, d, w[_ + 9], 21, -343485551), d = s(d, R), b = s(b, O), h = s(h, C), x = s(x, W);
    }
    return [d, b, h, x];
  }
  function a(w) {
    if (w.length === 0)
      return [];
    const S = w.length * 8, d = new Uint32Array(r(S));
    for (let b = 0; b < S; b += 8)
      d[b >> 5] |= (w[b / 8] & 255) << b % 32;
    return d;
  }
  function s(w, S) {
    const d = (w & 65535) + (S & 65535);
    return (w >> 16) + (S >> 16) + (d >> 16) << 16 | d & 65535;
  }
  function l(w, S) {
    return w << S | w >>> 32 - S;
  }
  function c(w, S, d, b, h, x) {
    return s(l(s(s(S, w), s(b, x)), h), d);
  }
  function f(w, S, d, b, h, x, _) {
    return c(S & d | ~S & b, w, S, h, x, _);
  }
  function m(w, S, d, b, h, x, _) {
    return c(S & b | d & ~b, w, S, h, x, _);
  }
  function g(w, S, d, b, h, x, _) {
    return c(S ^ d ^ b, w, S, h, x, _);
  }
  function v(w, S, d, b, h, x, _) {
    return c(d ^ (S | ~b), w, S, h, x, _);
  }
  var p = e3;
  return no.default = p, no;
}
var jh;
function TT() {
  if (jh) return to;
  jh = 1, Object.defineProperty(to, "__esModule", {
    value: true
  }), to.default = void 0;
  var e3 = r(/* @__PURE__ */ pm()), t = r(/* @__PURE__ */ AT());
  function r(s) {
    return s && s.__esModule ? s : { default: s };
  }
  var a = (0, e3.default)("v3", 48, t.default);
  return to.default = a, to;
}
var io = {}, oo = {}, Hh;
function RT() {
  if (Hh) return oo;
  Hh = 1, Object.defineProperty(oo, "__esModule", {
    value: true
  }), oo.default = void 0;
  var t = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto)
  };
  return oo.default = t, oo;
}
var qh;
function PT() {
  if (qh) return io;
  qh = 1, Object.defineProperty(io, "__esModule", {
    value: true
  }), io.default = void 0;
  var e3 = i(/* @__PURE__ */ RT()), t = i(/* @__PURE__ */ fm()), r = /* @__PURE__ */ Ns();
  function i(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function a(l, c, f) {
    if (e3.default.randomUUID && !c && !l)
      return e3.default.randomUUID();
    l = l || {};
    const m = l.random || (l.rng || t.default)();
    if (m[6] = m[6] & 15 | 64, m[8] = m[8] & 63 | 128, c) {
      f = f || 0;
      for (let g = 0; g < 16; ++g)
        c[f + g] = m[g];
      return c;
    }
    return (0, r.unsafeStringify)(m);
  }
  var s = a;
  return io.default = s, io;
}
var ao = {}, so = {}, Zh;
function kT() {
  if (Zh) return so;
  Zh = 1, Object.defineProperty(so, "__esModule", {
    value: true
  }), so.default = void 0;
  function e3(a, s, l, c) {
    switch (a) {
      case 0:
        return s & l ^ ~s & c;
      case 1:
        return s ^ l ^ c;
      case 2:
        return s & l ^ s & c ^ l & c;
      case 3:
        return s ^ l ^ c;
    }
  }
  function t(a, s) {
    return a << s | a >>> 32 - s;
  }
  function r(a) {
    const s = [1518500249, 1859775393, 2400959708, 3395469782], l = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if (typeof a == "string") {
      const g = unescape(encodeURIComponent(a));
      a = [];
      for (let v = 0; v < g.length; ++v)
        a.push(g.charCodeAt(v));
    } else Array.isArray(a) || (a = Array.prototype.slice.call(a));
    a.push(128);
    const c = a.length / 4 + 2, f = Math.ceil(c / 16), m = new Array(f);
    for (let g = 0; g < f; ++g) {
      const v = new Uint32Array(16);
      for (let p = 0; p < 16; ++p)
        v[p] = a[g * 64 + p * 4] << 24 | a[g * 64 + p * 4 + 1] << 16 | a[g * 64 + p * 4 + 2] << 8 | a[g * 64 + p * 4 + 3];
      m[g] = v;
    }
    m[f - 1][14] = (a.length - 1) * 8 / Math.pow(2, 32), m[f - 1][14] = Math.floor(m[f - 1][14]), m[f - 1][15] = (a.length - 1) * 8 & 4294967295;
    for (let g = 0; g < f; ++g) {
      const v = new Uint32Array(80);
      for (let h = 0; h < 16; ++h)
        v[h] = m[g][h];
      for (let h = 16; h < 80; ++h)
        v[h] = t(v[h - 3] ^ v[h - 8] ^ v[h - 14] ^ v[h - 16], 1);
      let p = l[0], w = l[1], S = l[2], d = l[3], b = l[4];
      for (let h = 0; h < 80; ++h) {
        const x = Math.floor(h / 20), _ = t(p, 5) + e3(x, w, S, d) + b + s[x] + v[h] >>> 0;
        b = d, d = S, S = t(w, 30) >>> 0, w = p, p = _;
      }
      l[0] = l[0] + p >>> 0, l[1] = l[1] + w >>> 0, l[2] = l[2] + S >>> 0, l[3] = l[3] + d >>> 0, l[4] = l[4] + b >>> 0;
    }
    return [l[0] >> 24 & 255, l[0] >> 16 & 255, l[0] >> 8 & 255, l[0] & 255, l[1] >> 24 & 255, l[1] >> 16 & 255, l[1] >> 8 & 255, l[1] & 255, l[2] >> 24 & 255, l[2] >> 16 & 255, l[2] >> 8 & 255, l[2] & 255, l[3] >> 24 & 255, l[3] >> 16 & 255, l[3] >> 8 & 255, l[3] & 255, l[4] >> 24 & 255, l[4] >> 16 & 255, l[4] >> 8 & 255, l[4] & 255];
  }
  var i = r;
  return so.default = i, so;
}
var Gh;
function CT() {
  if (Gh) return ao;
  Gh = 1, Object.defineProperty(ao, "__esModule", {
    value: true
  }), ao.default = void 0;
  var e3 = r(/* @__PURE__ */ pm()), t = r(/* @__PURE__ */ kT());
  function r(s) {
    return s && s.__esModule ? s : { default: s };
  }
  var a = (0, e3.default)("v5", 80, t.default);
  return ao.default = a, ao;
}
var uo = {}, Kh;
function $T() {
  if (Kh) return uo;
  Kh = 1, Object.defineProperty(uo, "__esModule", {
    value: true
  }), uo.default = void 0;
  var e3 = "00000000-0000-0000-0000-000000000000";
  return uo.default = e3, uo;
}
var lo = {}, Vh;
function IT() {
  if (Vh) return lo;
  Vh = 1, Object.defineProperty(lo, "__esModule", {
    value: true
  }), lo.default = void 0;
  var e3 = t(/* @__PURE__ */ Ms());
  function t(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function r(a) {
    if (!(0, e3.default)(a))
      throw TypeError("Invalid UUID");
    return parseInt(a.slice(14, 15), 16);
  }
  var i = r;
  return lo.default = i, lo;
}
var Yh;
function LT() {
  return Yh || (Yh = 1, (function(e3) {
    Object.defineProperty(e3, "__esModule", {
      value: true
    }), Object.defineProperty(e3, "NIL", {
      enumerable: true,
      get: function() {
        return s.default;
      }
    }), Object.defineProperty(e3, "parse", {
      enumerable: true,
      get: function() {
        return m.default;
      }
    }), Object.defineProperty(e3, "stringify", {
      enumerable: true,
      get: function() {
        return f.default;
      }
    }), Object.defineProperty(e3, "v1", {
      enumerable: true,
      get: function() {
        return t.default;
      }
    }), Object.defineProperty(e3, "v3", {
      enumerable: true,
      get: function() {
        return r.default;
      }
    }), Object.defineProperty(e3, "v4", {
      enumerable: true,
      get: function() {
        return i.default;
      }
    }), Object.defineProperty(e3, "v5", {
      enumerable: true,
      get: function() {
        return a.default;
      }
    }), Object.defineProperty(e3, "validate", {
      enumerable: true,
      get: function() {
        return c.default;
      }
    }), Object.defineProperty(e3, "version", {
      enumerable: true,
      get: function() {
        return l.default;
      }
    });
    var t = g(/* @__PURE__ */ OT()), r = g(/* @__PURE__ */ TT()), i = g(/* @__PURE__ */ PT()), a = g(/* @__PURE__ */ CT()), s = g(/* @__PURE__ */ $T()), l = g(/* @__PURE__ */ IT()), c = g(/* @__PURE__ */ Ms()), f = g(/* @__PURE__ */ Ns()), m = g(/* @__PURE__ */ dm());
    function g(v) {
      return v && v.__esModule ? v : { default: v };
    }
  })(Rl)), Rl;
}
var Pl, Xh;
function MT() {
  if (Xh) return Pl;
  Xh = 1;
  function e3(t, r) {
    if (!t || !r || !t.length || !r.length)
      throw new Error("Bad alphabet");
    this.srcAlphabet = t, this.dstAlphabet = r;
  }
  return e3.prototype.convert = function(t) {
    var r, i, a, s = {}, l = this.srcAlphabet.length, c = this.dstAlphabet.length, f = t.length, m = typeof t == "string" ? "" : [];
    if (!this.isValid(t))
      throw new Error('Number "' + t + '" contains of non-alphabetic digits (' + this.srcAlphabet + ")");
    if (this.srcAlphabet === this.dstAlphabet)
      return t;
    for (r = 0; r < f; r++)
      s[r] = this.srcAlphabet.indexOf(t[r]);
    do {
      for (i = 0, a = 0, r = 0; r < f; r++)
        i = i * l + s[r], i >= c ? (s[a++] = parseInt(i / c, 10), i = i % c) : a > 0 && (s[a++] = 0);
      f = a, m = this.dstAlphabet.slice(i, i + 1).concat(m);
    } while (a !== 0);
    return m;
  }, e3.prototype.isValid = function(t) {
    for (var r = 0; r < t.length; ++r)
      if (this.srcAlphabet.indexOf(t[r]) === -1)
        return false;
    return true;
  }, Pl = e3, Pl;
}
var kl, Jh;
function NT() {
  if (Jh) return kl;
  Jh = 1;
  var e3 = MT();
  function t(r, i) {
    var a = new e3(r, i);
    return function(s) {
      return a.convert(s);
    };
  }
  return t.BIN = "01", t.OCT = "01234567", t.DEC = "0123456789", t.HEX = "0123456789abcdef", kl = t, kl;
}
var Cl, Qh;
function FT() {
  if (Qh) return Cl;
  Qh = 1;
  const { v4: e3, validate: t } = /* @__PURE__ */ LT(), r = NT(), i = {
    cookieBase90: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+-./:<=>?@[]^_`{|}~",
    flickrBase58: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
    uuid25Base36: "0123456789abcdefghijklmnopqrstuvwxyz"
  }, a = {
    consistentLength: true
  };
  let s;
  const l = (m, g, v) => {
    const p = g(m.toLowerCase().replace(/-/g, ""));
    return !v || !v.consistentLength ? p : p.padStart(
      v.shortIdLength,
      v.paddingChar
    );
  }, c = (m, g) => {
    const p = g(m).padStart(32, "0").match(/(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})/);
    return [p[1], p[2], p[3], p[4], p[5]].join("-");
  }, f = (m) => Math.ceil(Math.log(2 ** 128) / Math.log(m));
  return Cl = (() => {
    const m = (g, v) => {
      const p = g || i.flickrBase58, w = { ...a, ...v };
      if ([...new Set(Array.from(p))].length !== p.length)
        throw new Error("The provided Alphabet has duplicate characters resulting in unreliable results");
      const S = f(p.length), d = {
        shortIdLength: S,
        consistentLength: w.consistentLength,
        paddingChar: p[0]
      }, b = r(r.HEX, p), h = r(p, r.HEX), x = () => l(e3(), b, d), R = {
        alphabet: p,
        fromUUID: (O) => l(O, b, d),
        maxLength: S,
        generate: x,
        new: x,
        toUUID: (O) => c(O, h),
        uuid: e3,
        validate: (O, C = false) => {
          if (!O || typeof O != "string") return false;
          const W = w.consistentLength ? O.length === S : O.length <= S, M = O.split("").every((N) => p.includes(N));
          return C === false ? W && M : W && M && t(c(O, h));
        }
      };
      return Object.freeze(R), R;
    };
    return m.constants = i, m.uuid = e3, m.generate = () => (s || (s = m(i.flickrBase58).generate), s()), m;
  })(), Cl;
}
var Yc = FT();
const DT = ({
  depth: e3,
  height: t = 24,
  width: r = 11,
  showLines: i = true,
  stroke: a = "rgb(241, 245, 249)"
}) => {
  const s = `indent_line_${Yc.generate()}`;
  return /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
    "svg",
    {
      viewBox: `0 0 ${11 * e3} ${t}`,
      width: `${11 * e3}`,
      height: t,
      children: [
        /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("defs", { children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
          "pattern",
          {
            id: s,
            x: "0",
            y: "0",
            width: r,
            height: t,
            patternUnits: "userSpaceOnUse",
            children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
              "line",
              {
                x1: r / 2,
                y1: "0",
                x2: r / 2,
                y2: t,
                stroke: a
              }
            )
          }
        ) }),
        i ? /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
          "rect",
          {
            fill: `url(#${s})`,
            x: "0",
            y: "0",
            width: `${11 * e3}`,
            height: t
          }
        ) : /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
          "rect",
          {
            fill: i ? `url(#${s})` : "",
            x: "0",
            y: "0",
            width: 0,
            height: t
          }
        )
      ]
    }
  );
}, zT = ({ show: e3, expanded: t, onClick: r, variant: i = "arrow" }) => e3 ? /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  "div",
  {
    className: "flex h-6 w-5 items-center",
    onClick: (a) => r && r(a),
    children: (() => {
      switch (i) {
        case "arrow":
          return /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            f2$1,
            {
              className: je([
                "h-3 w-3 transform text-grey-50 transition ease-in-out",
                {
                  "rotate-0": t,
                  "-rotate-90": !t
                }
              ])
            }
          );
        case "caret":
          return t ? /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(f2$1, {}) : /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(y3, {});
        default:
          return /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(f2$1, { className: "h-3 w-3 transform text-grey-50 transition ease-in-out" });
      }
    })()
  }
) : /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex h-6 w-3 items-center" }), hm = ({
  node: e3,
  depth: t,
  expandedKeys: r,
  selectedKeys: i,
  actions: a,
  searchQuery: s,
  renderNode: l,
  onNodeClick: c
}) => {
  var w;
  const { key: f, children: m } = e3, g = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useMemo(
    () => ({
      expanded: r.includes(e3.key),
      selected: i.includes(e3.key)
    }),
    [r, e3.key, i]
  ), v = l && typeof l == "function" ? l(e3, t, g, a, s) : UT(e3, t, g, c);
  return !((w = e3.options) != null && w.filterable) || !s || e3.title.toLowerCase().includes(s.toLowerCase()) ? /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: [
    /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex items-center space-x-2", children: v }, f),
    BT(
      m || [],
      t,
      s,
      r,
      i,
      g.expanded,
      a,
      c,
      l
    )
  ] }) : null;
}, WT = function(e3, t) {
  var l;
  const { title: r, icon: i, subtitle: a } = e3;
  let s = null;
  return i && (s = /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(_T, { children: i })), /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
    "div",
    {
      className: "flex flex-1 select-none items-center overflow-hidden text-ellipsis whitespace-nowrap",
      draggable: (l = e3.options) == null ? void 0 : l.draggable,
      onClick: () => {
        t && t(e3);
      },
      children: [
        s,
        /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
          "div",
          {
            style: {
              lineHeight: "24px",
              fontSize: 11
            },
            children: r
          }
        ),
        a && /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "mx-1 min-w-0 text-xxs italic text-fd-gray-mild", children: a })
      ]
    }
  );
}, BT = function(e3, t, r, i, a, s, l, c, f) {
  return e3.length && s ? e3.map((m) => /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    hm,
    {
      actions: l,
      node: m,
      searchQuery: r,
      depth: t + 1,
      expandedKeys: i,
      selectedKeys: a,
      onNodeClick: c,
      renderNode: f
    },
    m.key
  )) : null;
}, UT = function(e3, t, r, i) {
  return /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: [
    /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(DT, { showLines: true, depth: t }),
    /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      zT,
      {
        show: e3.children && e3.children.length > 0 || false,
        expanded: r.expanded
      }
    ),
    WT(e3, i)
  ] });
}, ja = (e3) => (t) => e3 === t, H2 = function({
  treeData: t,
  renderNode: r,
  onNodeClick: i,
  onExpandNode: a,
  searchQuery: s,
  expandedKeys: l,
  expandCondition: c = "always",
  encapsulated: f,
  className: m
}) {
  const [g, v] = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState(() => ({
    expandedKeys: l || [],
    selectedKeys: []
  }));
  qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect(() => {
    c === "when-collapsed" && g.expandedKeys.length > 0 || v({
      ...g,
      expandedKeys: l || g.expandedKeys
    });
  }, [l]);
  const p = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useCallback(
    (h) => {
      if (!h) return;
      const x = g.expandedKeys.findIndex(ja(h.key));
      let _ = [];
      x === -1 ? (_ = [...g.expandedKeys, h.key], v(() => ({
        ...g,
        expandedKeys: _
      })), a && a(_)) : (_ = g.expandedKeys.filter((R) => R !== h.key), v(() => ({
        ...g,
        expandedKeys: _
      })), a && a(_));
    },
    [g]
  ), w = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useCallback(
    (h) => {
      var _;
      if (!((_ = h == null ? void 0 : h.options) != null && _.selectable)) return;
      g.selectedKeys.findIndex(ja(h.key)) === -1 && v({
        ...g,
        selectedKeys: [...g.selectedKeys, h.key]
      });
    },
    [g]
  ), S = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useCallback(
    (h) => {
      var _;
      if (!((_ = h == null ? void 0 : h.options) != null && _.selectable)) return;
      g.selectedKeys.findIndex(ja(h.key)) === -1 && v({ ...g, selectedKeys: [h.key] });
    },
    [g]
  ), d = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useCallback(
    (h) => {
      var _;
      if (!((_ = h == null ? void 0 : h.options) != null && _.selectable)) {
        v({ ...g, selectedKeys: [] });
        return;
      }
      g.selectedKeys.findIndex(ja(h.key)) !== -1 && v({
        ...g,
        selectedKeys: g.selectedKeys.filter((R) => R !== h.key)
      });
    },
    [g]
  ), b = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useMemo(
    () => ({
      expand: p,
      select: w,
      selectSingle: S,
      deselect: d
    }),
    [d, p, w, S]
  );
  return /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    "div",
    {
      className: je("fd-tree", m, {
        "pl-2 mb-1 rounded border bg-grey-900 p-1": f
      }),
      children: t.map((h) => /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        hm,
        {
          node: h,
          searchQuery: s || "",
          depth: 0,
          expandedKeys: g.expandedKeys,
          selectedKeys: g.selectedKeys,
          actions: b,
          renderNode: r,
          onNodeClick: i
        },
        h.key
      ))
    }
  );
};
function $l(e3) {
  return e3.of && e3.children ? /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: e3.children }) : null;
}
function Xe() {
  return Xe = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r) ({}).hasOwnProperty.call(r, i) && (e3[i] = r[i]);
    }
    return e3;
  }, Xe.apply(null, arguments);
}
function jT(e3) {
  for (var t = 0, r, i = 0, a = e3.length; a >= 4; ++i, a -= 4)
    r = e3.charCodeAt(i) & 255 | (e3.charCodeAt(++i) & 255) << 8 | (e3.charCodeAt(++i) & 255) << 16 | (e3.charCodeAt(++i) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      t ^= (e3.charCodeAt(i + 2) & 255) << 16;
    case 2:
      t ^= (e3.charCodeAt(i + 1) & 255) << 8;
    case 1:
      t ^= e3.charCodeAt(i) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var HT = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function vm(e3) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e3(r)), t[r];
  };
}
var qT = /[A-Z]|^ms/g, ZT = /_EMO_([^_]+?)_([^]*?)_EMO_/g, gm = function(t) {
  return t.charCodeAt(1) === 45;
}, ev = function(t) {
  return t != null && typeof t != "boolean";
}, Il = /* @__PURE__ */ vm(function(e3) {
  return gm(e3) ? e3 : e3.replace(qT, "-$&").toLowerCase();
}), tv = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(ZT, function(i, a, s) {
          return Cr = {
            name: a,
            styles: s,
            next: Cr
          }, a;
        });
  }
  return HT[t] !== 1 && !gm(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function No(e3, t, r) {
  if (r == null)
    return "";
  var i = r;
  if (i.__emotion_styles !== void 0)
    return i;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var a = r;
      if (a.anim === 1)
        return Cr = {
          name: a.name,
          styles: a.styles,
          next: Cr
        }, a.name;
      var s = r;
      if (s.styles !== void 0) {
        var l = s.next;
        if (l !== void 0)
          for (; l !== void 0; )
            Cr = {
              name: l.name,
              styles: l.styles,
              next: Cr
            }, l = l.next;
        var c = s.styles + ";";
        return c;
      }
      return GT(e3, t, r);
    }
    case "function": {
      if (e3 !== void 0) {
        var f = Cr, m = r(e3);
        return Cr = f, No(e3, t, m);
      }
      break;
    }
  }
  var g = r;
  if (t == null)
    return g;
  var v = t[g];
  return v !== void 0 ? v : g;
}
function GT(e3, t, r) {
  var i = "";
  if (Array.isArray(r))
    for (var a = 0; a < r.length; a++)
      i += No(e3, t, r[a]) + ";";
  else
    for (var s in r) {
      var l = r[s];
      if (typeof l != "object") {
        var c = l;
        t != null && t[c] !== void 0 ? i += s + "{" + t[c] + "}" : ev(c) && (i += Il(s) + ":" + tv(s, c) + ";");
      } else if (Array.isArray(l) && typeof l[0] == "string" && (t == null || t[l[0]] === void 0))
        for (var f = 0; f < l.length; f++)
          ev(l[f]) && (i += Il(s) + ":" + tv(s, l[f]) + ";");
      else {
        var m = No(e3, t, l);
        switch (s) {
          case "animation":
          case "animationName": {
            i += Il(s) + ":" + m + ";";
            break;
          }
          default:
            i += s + "{" + m + "}";
        }
      }
    }
  return i;
}
var rv = /label:\s*([^\s;{]+)\s*(;|$)/g, Cr;
function KT(e3, t, r) {
  if (e3.length === 1 && typeof e3[0] == "object" && e3[0] !== null && e3[0].styles !== void 0)
    return e3[0];
  var i = true, a = "";
  Cr = void 0;
  var s = e3[0];
  if (s == null || s.raw === void 0)
    i = false, a += No(r, t, s);
  else {
    var l = s;
    a += l[0];
  }
  for (var c = 1; c < e3.length; c++)
    if (a += No(r, t, e3[c]), i) {
      var f = s;
      a += f[c];
    }
  rv.lastIndex = 0;
  for (var m = "", g; (g = rv.exec(a)) !== null; )
    m += "-" + g[1];
  var v = jT(a) + m;
  return {
    name: v,
    styles: a,
    next: Cr
  };
}
var VT = function(t) {
  return t();
}, YT = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useInsertionEffect ? qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useInsertionEffect : false, XT = YT || VT, JT = true;
function QT(e3, t, r) {
  var i = "";
  return r.split(" ").forEach(function(a) {
    e3[a] !== void 0 ? t.push(e3[a] + ";") : a && (i += a + " ");
  }), i;
}
var mm = function(t, r, i) {
  var a = t.key + "-" + r.name;
  (i === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  JT === false) && t.registered[a] === void 0 && (t.registered[a] = r.styles);
}, eR = function(t, r, i) {
  mm(t, r, i);
  var a = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var s = r;
    do
      t.insert(r === s ? "." + a : "", s, t.sheet, true), s = s.next;
    while (s !== void 0);
  }
}, tR = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, rR = /* @__PURE__ */ vm(
  function(e3) {
    return tR.test(e3) || e3.charCodeAt(0) === 111 && e3.charCodeAt(1) === 110 && e3.charCodeAt(2) < 91;
  }
  /* Z+1 */
), nR = rR, iR = function(t) {
  return t !== "theme";
}, nv = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? nR : iR;
}, iv = function(t, r, i) {
  var a;
  if (r) {
    var s = r.shouldForwardProp;
    a = t.__emotion_forwardProp && s ? function(l) {
      return t.__emotion_forwardProp(l) && s(l);
    } : s;
  }
  return typeof a != "function" && i && (a = t.__emotion_forwardProp), a;
}, oR = function(t) {
  var r = t.cache, i = t.serialized, a = t.isStringTag;
  return mm(r, i, a), XT(function() {
    return eR(r, i, a);
  }), null;
}, aR = function e(t, r) {
  var i = t.__emotion_real === t, a = i && t.__emotion_base || t, s, l;
  r !== void 0 && (s = r.label, l = r.target);
  var c = iv(t, r, i), f = c || nv(a), m = !f("as");
  return function() {
    var g = arguments, v = i && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (s !== void 0 && v.push("label:" + s + ";"), g[0] == null || g[0].raw === void 0)
      v.push.apply(v, g);
    else {
      var p = g[0];
      v.push(p[0]);
      for (var w = g.length, S = 1; S < w; S++)
        v.push(g[S], p[S]);
    }
    var d = withEmotionCache(function(b, h, x) {
      var _ = m && b.as || a, R = "", O = [], C = b;
      if (b.theme == null) {
        C = {};
        for (var W in b)
          C[W] = b[W];
        C.theme = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useContext(ThemeContext);
      }
      typeof b.className == "string" ? R = QT(h.registered, O, b.className) : b.className != null && (R = b.className + " ");
      var M = KT(v.concat(O), h.registered, C);
      R += h.key + "-" + M.name, l !== void 0 && (R += " " + l);
      var N = m && c === void 0 ? nv(_) : f, Z = {};
      for (var D in b)
        m && D === "as" || N(D) && (Z[D] = b[D]);
      return Z.className = R, x && (Z.ref = x), /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.Fragment, null, /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(oR, {
        cache: h,
        serialized: M,
        isStringTag: typeof _ == "string"
      }), /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(_, Z));
    });
    return d.displayName = s !== void 0 ? s : "Styled(" + (typeof a == "string" ? a : a.displayName || a.name || "Component") + ")", d.defaultProps = t.defaultProps, d.__emotion_real = d, d.__emotion_base = a, d.__emotion_styles = v, d.__emotion_forwardProp = c, Object.defineProperty(d, "toString", {
      value: function() {
        return "." + l;
      }
    }), d.withComponent = function(b, h) {
      var x = e(b, Xe({}, r, h, {
        shouldForwardProp: iv(d, h, true)
      }));
      return x.apply(void 0, v);
    }, d;
  };
}, sR = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], ms = aR.bind(null);
sR.forEach(function(e3) {
  ms[e3] = ms(e3);
});
var uR = function(e3) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e3) ? e3[0] : e3;
  return t.ownerDocument.body;
}, mi = /* @__PURE__ */ new WeakMap(), Ha = /* @__PURE__ */ new WeakMap(), qa = {}, Ll = 0, ym = function(e3) {
  return e3 && (e3.host || ym(e3.parentNode));
}, lR = function(e3, t) {
  return t.map(function(r) {
    if (e3.contains(r))
      return r;
    var i = ym(r);
    return i && e3.contains(i) ? i : (console.error("aria-hidden", r, "in not contained inside", e3, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, cR = function(e3, t, r, i) {
  var a = lR(t, Array.isArray(e3) ? e3 : [e3]);
  qa[r] || (qa[r] = /* @__PURE__ */ new WeakMap());
  var s = qa[r], l = [], c = /* @__PURE__ */ new Set(), f = new Set(a), m = function(v) {
    !v || c.has(v) || (c.add(v), m(v.parentNode));
  };
  a.forEach(m);
  var g = function(v) {
    !v || f.has(v) || Array.prototype.forEach.call(v.children, function(p) {
      if (c.has(p))
        g(p);
      else
        try {
          var w = p.getAttribute(i), S = w !== null && w !== "false", d = (mi.get(p) || 0) + 1, b = (s.get(p) || 0) + 1;
          mi.set(p, d), s.set(p, b), l.push(p), d === 1 && S && Ha.set(p, true), b === 1 && p.setAttribute(r, "true"), S || p.setAttribute(i, "true");
        } catch (h) {
          console.error("aria-hidden: cannot operate on ", p, h);
        }
    });
  };
  return g(t), c.clear(), Ll++, function() {
    l.forEach(function(v) {
      var p = mi.get(v) - 1, w = s.get(v) - 1;
      mi.set(v, p), s.set(v, w), p || (Ha.has(v) || v.removeAttribute(i), Ha.delete(v)), w || v.removeAttribute(r);
    }), Ll--, Ll || (mi = /* @__PURE__ */ new WeakMap(), mi = /* @__PURE__ */ new WeakMap(), Ha = /* @__PURE__ */ new WeakMap(), qa = {});
  };
}, fR = function(e3, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var i = Array.from(Array.isArray(e3) ? e3 : [e3]), a = uR(e3);
  return a ? (i.push.apply(i, Array.from(a.querySelectorAll("[aria-live], script"))), cR(i, a, r, "aria-hidden")) : function() {
    return null;
  };
}, vc = function(e3, t) {
  return vc = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
    r.__proto__ = i;
  } || function(r, i) {
    for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a]);
  }, vc(e3, t);
};
function Fs(e3, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  vc(e3, t);
  function r() {
    this.constructor = e3;
  }
  e3.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var $r = function() {
  return $r = Object.assign || function(t) {
    for (var r, i = 1, a = arguments.length; i < a; i++) {
      r = arguments[i];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, $r.apply(this, arguments);
};
function wm(e3, t) {
  var r = {};
  for (var i in e3) Object.prototype.hasOwnProperty.call(e3, i) && t.indexOf(i) < 0 && (r[i] = e3[i]);
  if (e3 != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, i = Object.getOwnPropertySymbols(e3); a < i.length; a++)
      t.indexOf(i[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e3, i[a]) && (r[i[a]] = e3[i[a]]);
  return r;
}
function gc(e3) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e3[t], i = 0;
  if (r) return r.call(e3);
  if (e3 && typeof e3.length == "number") return {
    next: function() {
      return e3 && i >= e3.length && (e3 = void 0), { value: e3 && e3[i++], done: !e3 };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function mc(e3, t) {
  var r = typeof Symbol == "function" && e3[Symbol.iterator];
  if (!r) return e3;
  var i = r.call(e3), a, s = [], l;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = i.next()).done; ) s.push(a.value);
  } catch (c) {
    l = { error: c };
  } finally {
    try {
      a && !a.done && (r = i.return) && r.call(i);
    } finally {
      if (l) throw l.error;
    }
  }
  return s;
}
function ys(e3, t, r) {
  if (r || arguments.length === 2) for (var i = 0, a = t.length, s; i < a; i++)
    (s || !(i in t)) && (s || (s = Array.prototype.slice.call(t, 0, i)), s[i] = t[i]);
  return e3.concat(s || Array.prototype.slice.call(t));
}
var cs = "right-scroll-bar-position", fs = "width-before-scroll-bar", dR = "with-scroll-bars-hidden", pR = "--removed-body-scroll-bar-size";
function Ml(e3, t) {
  return typeof e3 == "function" ? e3(t) : e3 && (e3.current = t), e3;
}
function hR(e3, t) {
  var r = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState(function() {
    return {
      // value
      value: e3,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(i) {
          var a = r.value;
          a !== i && (r.value = i, r.callback(i, a));
        }
      }
    };
  })[0];
  return r.callback = t, r.facade;
}
var vR = typeof window < "u" ? qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useLayoutEffect : qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect, ov = /* @__PURE__ */ new WeakMap();
function gR(e3, t) {
  var r = hR(null, function(i) {
    return e3.forEach(function(a) {
      return Ml(a, i);
    });
  });
  return vR(function() {
    var i = ov.get(r);
    if (i) {
      var a = new Set(i), s = new Set(e3), l = r.current;
      a.forEach(function(c) {
        s.has(c) || Ml(c, null);
      }), s.forEach(function(c) {
        a.has(c) || Ml(c, l);
      });
    }
    ov.set(r, e3);
  }, [e3]), r;
}
function mR(e3) {
  return e3;
}
function yR(e3, t) {
  t === void 0 && (t = mR);
  var r = [], i = false, a = {
    read: function() {
      if (i)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e3;
    },
    useMedium: function(s) {
      var l = t(s, i);
      return r.push(l), function() {
        r = r.filter(function(c) {
          return c !== l;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (i = true; r.length; ) {
        var l = r;
        r = [], l.forEach(s);
      }
      r = {
        push: function(c) {
          return s(c);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(s) {
      i = true;
      var l = [];
      if (r.length) {
        var c = r;
        r = [], c.forEach(s), l = r;
      }
      var f = function() {
        var g = l;
        l = [], g.forEach(s);
      }, m = function() {
        return Promise.resolve().then(f);
      };
      m(), r = {
        push: function(g) {
          l.push(g), m();
        },
        filter: function(g) {
          return l = l.filter(g), r;
        }
      };
    }
  };
  return a;
}
function wR(e3) {
  e3 === void 0 && (e3 = {});
  var t = yR(null);
  return t.options = $r({ async: true, ssr: false }, e3), t;
}
var bm = function(e3) {
  var t = e3.sideCar, r = wm(e3, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var i = t.read();
  if (!i)
    throw new Error("Sidecar medium not found");
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(i, $r({}, r));
};
bm.isSideCarExport = true;
function bR(e3, t) {
  return e3.useMedium(t), bm;
}
var Sm = wR(), Nl = function() {
}, Ds = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.forwardRef(function(e3, t) {
  var r = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(null), i = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState({
    onScrollCapture: Nl,
    onWheelCapture: Nl,
    onTouchMoveCapture: Nl
  }), a = i[0], s = i[1], l = e3.forwardProps, c = e3.children, f = e3.className, m = e3.removeScrollBar, g = e3.enabled, v = e3.shards, p = e3.sideCar, w = e3.noRelative, S = e3.noIsolation, d = e3.inert, b = e3.allowPinchZoom, h = e3.as, x = h === void 0 ? "div" : h, _ = e3.gapMode, R = wm(e3, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), O = p, C = gR([r, t]), W = $r($r({}, R), a);
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(
    qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.Fragment,
    null,
    g && qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(O, { sideCar: Sm, removeScrollBar: m, shards: v, noRelative: w, noIsolation: S, inert: d, setCallbacks: s, allowPinchZoom: !!b, lockRef: r, gapMode: _ }),
    l ? qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.cloneElement(qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.Children.only(c), $r($r({}, W), { ref: C })) : qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(x, $r({}, W, { className: f, ref: C }), c)
  );
});
Ds.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
Ds.classNames = {
  fullWidth: fs,
  zeroRight: cs
};
var SR = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function xR() {
  if (!document)
    return null;
  var e3 = document.createElement("style");
  e3.type = "text/css";
  var t = SR();
  return t && e3.setAttribute("nonce", t), e3;
}
function _R(e3, t) {
  e3.styleSheet ? e3.styleSheet.cssText = t : e3.appendChild(document.createTextNode(t));
}
function ER(e3) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e3);
}
var OR = function() {
  var e3 = 0, t = null;
  return {
    add: function(r) {
      e3 == 0 && (t = xR()) && (_R(t, r), ER(t)), e3++;
    },
    remove: function() {
      e3--, !e3 && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, AR = function() {
  var e3 = OR();
  return function(t, r) {
    qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect(function() {
      return e3.add(t), function() {
        e3.remove();
      };
    }, [t && r]);
  };
}, xm = function() {
  var e3 = AR(), t = function(r) {
    var i = r.styles, a = r.dynamic;
    return e3(i, a), null;
  };
  return t;
}, TR = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Fl = function(e3) {
  return parseInt(e3 || "", 10) || 0;
}, RR = function(e3) {
  var t = window.getComputedStyle(document.body), r = t[e3 === "padding" ? "paddingLeft" : "marginLeft"], i = t[e3 === "padding" ? "paddingTop" : "marginTop"], a = t[e3 === "padding" ? "paddingRight" : "marginRight"];
  return [Fl(r), Fl(i), Fl(a)];
}, PR = function(e3) {
  if (e3 === void 0 && (e3 = "margin"), typeof window > "u")
    return TR;
  var t = RR(e3), r = document.documentElement.clientWidth, i = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, i - r + t[2] - t[0])
  };
}, kR = xm(), Si = "data-scroll-locked", CR = function(e3, t, r, i) {
  var a = e3.left, s = e3.top, l = e3.right, c = e3.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(dR, ` {
   overflow: hidden `).concat(i, `;
   padding-right: `).concat(c, "px ").concat(i, `;
  }
  body[`).concat(Si, `] {
    overflow: hidden `).concat(i, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(i, ";"),
    r === "margin" && `
    padding-left: `.concat(a, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(l, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c, "px ").concat(i, `;
    `),
    r === "padding" && "padding-right: ".concat(c, "px ").concat(i, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(cs, ` {
    right: `).concat(c, "px ").concat(i, `;
  }
  
  .`).concat(fs, ` {
    margin-right: `).concat(c, "px ").concat(i, `;
  }
  
  .`).concat(cs, " .").concat(cs, ` {
    right: 0 `).concat(i, `;
  }
  
  .`).concat(fs, " .").concat(fs, ` {
    margin-right: 0 `).concat(i, `;
  }
  
  body[`).concat(Si, `] {
    `).concat(pR, ": ").concat(c, `px;
  }
`);
}, av = function() {
  var e3 = parseInt(document.body.getAttribute(Si) || "0", 10);
  return isFinite(e3) ? e3 : 0;
}, $R = function() {
  qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect(function() {
    return document.body.setAttribute(Si, (av() + 1).toString()), function() {
      var e3 = av() - 1;
      e3 <= 0 ? document.body.removeAttribute(Si) : document.body.setAttribute(Si, e3.toString());
    };
  }, []);
}, IR = function(e3) {
  var t = e3.noRelative, r = e3.noImportant, i = e3.gapMode, a = i === void 0 ? "margin" : i;
  $R();
  var s = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useMemo(function() {
    return PR(a);
  }, [a]);
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(kR, { styles: CR(s, !t, a, r ? "" : "!important") });
}, yc = false;
if (typeof window < "u")
  try {
    var Za = Object.defineProperty({}, "passive", {
      get: function() {
        return yc = true, true;
      }
    });
    window.addEventListener("test", Za, Za), window.removeEventListener("test", Za, Za);
  } catch {
    yc = false;
  }
var yi = yc ? { passive: false } : false, LR = function(e3) {
  return e3.tagName === "TEXTAREA";
}, _m = function(e3, t) {
  if (!(e3 instanceof Element))
    return false;
  var r = window.getComputedStyle(e3);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !LR(e3) && r[t] === "visible")
  );
}, MR = function(e3) {
  return _m(e3, "overflowY");
}, NR = function(e3) {
  return _m(e3, "overflowX");
}, sv = function(e3, t) {
  var r = t.ownerDocument, i = t;
  do {
    typeof ShadowRoot < "u" && i instanceof ShadowRoot && (i = i.host);
    var a = Em(e3, i);
    if (a) {
      var s = Om(e3, i), l = s[1], c = s[2];
      if (l > c)
        return true;
    }
    i = i.parentNode;
  } while (i && i !== r.body);
  return false;
}, FR = function(e3) {
  var t = e3.scrollTop, r = e3.scrollHeight, i = e3.clientHeight;
  return [
    t,
    r,
    i
  ];
}, DR = function(e3) {
  var t = e3.scrollLeft, r = e3.scrollWidth, i = e3.clientWidth;
  return [
    t,
    r,
    i
  ];
}, Em = function(e3, t) {
  return e3 === "v" ? MR(t) : NR(t);
}, Om = function(e3, t) {
  return e3 === "v" ? FR(t) : DR(t);
}, zR = function(e3, t) {
  return e3 === "h" && t === "rtl" ? -1 : 1;
}, WR = function(e3, t, r, i, a) {
  var s = zR(e3, window.getComputedStyle(t).direction), l = s * i, c = r.target, f = t.contains(c), m = false, g = l > 0, v = 0, p = 0;
  do {
    if (!c)
      break;
    var w = Om(e3, c), S = w[0], d = w[1], b = w[2], h = d - b - s * S;
    (S || h) && Em(e3, c) && (v += h, p += S);
    var x = c.parentNode;
    c = x && x.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? x.host : x;
  } while (
    // portaled content
    !f && c !== document.body || // self content
    f && (t.contains(c) || t === c)
  );
  return (g && Math.abs(v) < 1 || !g && Math.abs(p) < 1) && (m = true), m;
}, Ga = function(e3) {
  return "changedTouches" in e3 ? [e3.changedTouches[0].clientX, e3.changedTouches[0].clientY] : [0, 0];
}, uv = function(e3) {
  return [e3.deltaX, e3.deltaY];
}, lv = function(e3) {
  return e3 && "current" in e3 ? e3.current : e3;
}, BR = function(e3, t) {
  return e3[0] === t[0] && e3[1] === t[1];
}, UR = function(e3) {
  return `
  .block-interactivity-`.concat(e3, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e3, ` {pointer-events: all;}
`);
}, jR = 0, wi = [];
function HR(e3) {
  var t = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef([]), r = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef([0, 0]), i = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(), a = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState(jR++)[0], s = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState(xm)[0], l = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(e3);
  qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect(function() {
    l.current = e3;
  }, [e3]), qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect(function() {
    if (e3.inert) {
      document.body.classList.add("block-interactivity-".concat(a));
      var d = ys([e3.lockRef.current], (e3.shards || []).map(lv), true).filter(Boolean);
      return d.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(a));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(a)), d.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(a));
        });
      };
    }
  }, [e3.inert, e3.lockRef.current, e3.shards]);
  var c = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useCallback(function(d, b) {
    if ("touches" in d && d.touches.length === 2 || d.type === "wheel" && d.ctrlKey)
      return !l.current.allowPinchZoom;
    var h = Ga(d), x = r.current, _ = "deltaX" in d ? d.deltaX : x[0] - h[0], R = "deltaY" in d ? d.deltaY : x[1] - h[1], O, C = d.target, W = Math.abs(_) > Math.abs(R) ? "h" : "v";
    if ("touches" in d && W === "h" && C.type === "range")
      return false;
    var M = sv(W, C);
    if (!M)
      return true;
    if (M ? O = W : (O = W === "v" ? "h" : "v", M = sv(W, C)), !M)
      return false;
    if (!i.current && "changedTouches" in d && (_ || R) && (i.current = O), !O)
      return true;
    var N = i.current || O;
    return WR(N, b, d, N === "h" ? _ : R);
  }, []), f = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useCallback(function(d) {
    var b = d;
    if (!(!wi.length || wi[wi.length - 1] !== s)) {
      var h = "deltaY" in b ? uv(b) : Ga(b), x = t.current.filter(function(O) {
        return O.name === b.type && (O.target === b.target || b.target === O.shadowParent) && BR(O.delta, h);
      })[0];
      if (x && x.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!x) {
        var _ = (l.current.shards || []).map(lv).filter(Boolean).filter(function(O) {
          return O.contains(b.target);
        }), R = _.length > 0 ? c(b, _[0]) : !l.current.noIsolation;
        R && b.cancelable && b.preventDefault();
      }
    }
  }, []), m = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useCallback(function(d, b, h, x) {
    var _ = { name: d, delta: b, target: h, should: x, shadowParent: qR(h) };
    t.current.push(_), setTimeout(function() {
      t.current = t.current.filter(function(R) {
        return R !== _;
      });
    }, 1);
  }, []), g = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useCallback(function(d) {
    r.current = Ga(d), i.current = void 0;
  }, []), v = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useCallback(function(d) {
    m(d.type, uv(d), d.target, c(d, e3.lockRef.current));
  }, []), p = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useCallback(function(d) {
    m(d.type, Ga(d), d.target, c(d, e3.lockRef.current));
  }, []);
  qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect(function() {
    return wi.push(s), e3.setCallbacks({
      onScrollCapture: v,
      onWheelCapture: v,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", f, yi), document.addEventListener("touchmove", f, yi), document.addEventListener("touchstart", g, yi), function() {
      wi = wi.filter(function(d) {
        return d !== s;
      }), document.removeEventListener("wheel", f, yi), document.removeEventListener("touchmove", f, yi), document.removeEventListener("touchstart", g, yi);
    };
  }, []);
  var w = e3.removeScrollBar, S = e3.inert;
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(
    qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.Fragment,
    null,
    S ? qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(s, { styles: UR(a) }) : null,
    w ? qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(IR, { noRelative: e3.noRelative, gapMode: e3.gapMode }) : null
  );
}
function qR(e3) {
  for (var t = null; e3 !== null; )
    e3 instanceof ShadowRoot && (t = e3.host, e3 = e3.host), e3 = e3.parentNode;
  return t;
}
const ZR = bR(Sm, HR);
var Am = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.forwardRef(function(e3, t) {
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(Ds, $r({}, e3, { ref: t, sideCar: ZR }));
});
Am.classNames = Ds.classNames;
const GR = globalThis != null && globalThis.document ? qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useLayoutEffect : () => {
}, KR = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useId || (() => {
});
let VR = 0;
function Tm(e3) {
  const [t, r] = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState(KR());
  return GR((() => {
    r(((i) => i ?? String(VR++)));
  }), [e3]), (t ? `radix-${t}` : "");
}
function Rm(...e3) {
  return (t) => e3.forEach(((r) => (function(i, a) {
    typeof i == "function" ? i(a) : i != null && (i.current = a);
  })(r, t)));
}
function On(...e3) {
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useCallback(Rm(...e3), e3);
}
const Pm = /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.forwardRef(((e3, t) => {
  const { children: r, ...i } = e3;
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.Children.toArray(r).some(cv) ? /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.Fragment, null, qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.Children.map(r, ((a) => cv(a) ? /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(wc, Xe({}, i, { ref: t }), a.props.children) : a))) : /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(wc, Xe({}, i, { ref: t }), r);
}));
Pm.displayName = "Slot";
const wc = /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.forwardRef(((e3, t) => {
  const { children: r, ...i } = e3;
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.isValidElement(r) ? /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.cloneElement(r, { ...YR(i, r.props), ref: Rm(t, r.ref) }) : qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.Children.count(r) > 1 ? qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.Children.only(null) : null;
}));
wc.displayName = "SlotClone";
const km = ({ children: e3 }) => /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.Fragment, null, e3);
function cv(e3) {
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.isValidElement(e3) && e3.type === km;
}
function YR(e3, t) {
  const r = { ...t };
  for (const i in t) {
    const a = e3[i], s = t[i];
    /^on[A-Z]/.test(i) ? r[i] = (...l) => {
      s == null || s(...l), a == null || a(...l);
    } : i === "style" ? r[i] = { ...a, ...s } : i === "className" && (r[i] = [a, s].filter(Boolean).join(" "));
  }
  return { ...e3, ...r };
}
const An = ["a", "button", "div", "h2", "h3", "img", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e3, t) => ({ ...e3, [t]: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.forwardRef(((r, i) => {
  const { asChild: a, ...s } = r, l = a ? Pm : t;
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect((() => {
    window[Symbol.for("radix-ui")] = true;
  }), []), /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(l, Xe({}, s, { ref: i }));
})) })), {}), fv = globalThis != null && globalThis.document ? qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useLayoutEffect : () => {
}, Xc = (e3) => {
  const { present: t, children: r } = e3, i = (function(l) {
    const [c, f] = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState(), m = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef({}), g = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(l), v = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef("none"), p = l ? "mounted" : "unmounted", [w, S] = (function(d, b) {
      return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useReducer(((h, x) => {
        const _ = b[h][x];
        return _ ?? h;
      }), d);
    })(p, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
    return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect((() => {
      const d = Ka(m.current);
      v.current = w === "mounted" ? d : "none";
    }), [w]), fv((() => {
      const d = m.current, b = g.current;
      if (b !== l) {
        const h = v.current, x = Ka(d);
        l ? S("MOUNT") : x === "none" || (d == null ? void 0 : d.display) === "none" ? S("UNMOUNT") : S(b && h !== x ? "ANIMATION_OUT" : "UNMOUNT"), g.current = l;
      }
    }), [l, S]), fv((() => {
      if (c) {
        const d = (h) => {
          const x = Ka(m.current).includes(h.animationName);
          h.target === c && x && S("ANIMATION_END");
        }, b = (h) => {
          h.target === c && (v.current = Ka(m.current));
        };
        return c.addEventListener("animationstart", b), c.addEventListener("animationcancel", d), c.addEventListener("animationend", d), () => {
          c.removeEventListener("animationstart", b), c.removeEventListener("animationcancel", d), c.removeEventListener("animationend", d);
        };
      }
      S("ANIMATION_END");
    }), [c, S]), { isPresent: ["mounted", "unmountSuspended"].includes(w), ref: qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useCallback(((d) => {
      d && (m.current = getComputedStyle(d)), f(d);
    }), []) };
  })(t), a = typeof r == "function" ? r({ present: i.isPresent }) : qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.Children.only(r), s = On(i.ref, a.ref);
  return typeof r == "function" || i.isPresent ? /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.cloneElement(a, { ref: s }) : null;
};
function Ka(e3) {
  return (e3 == null ? void 0 : e3.animationName) || "none";
}
Xc.displayName = "Presence";
let Dl = 0;
function XR() {
  qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect((() => {
    var e3, t;
    const r = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e3 = r[0]) !== null && e3 !== void 0 ? e3 : dv()), document.body.insertAdjacentElement("beforeend", (t = r[1]) !== null && t !== void 0 ? t : dv()), Dl++, () => {
      Dl === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(((i) => i.remove())), Dl--;
    };
  }), []);
}
function dv() {
  const e3 = document.createElement("span");
  return e3.setAttribute("data-radix-focus-guard", ""), e3.tabIndex = 0, e3.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e3;
}
const JR = globalThis != null && globalThis.document ? qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useLayoutEffect : () => {
}, Jc = /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.forwardRef(((e3, t) => {
  var r, i;
  const { containerRef: a, style: s, ...l } = e3, c = (r = a == null ? void 0 : a.current) !== null && r !== void 0 ? r : globalThis == null || (i = globalThis.document) === null || i === void 0 ? void 0 : i.body, [, f] = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState({});
  return JR((() => {
    f({});
  }), []), c ? /* @__PURE__ */ ReactDOM.createPortal(/* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(An.div, Xe({ "data-radix-portal": "" }, l, { ref: t, style: c === document.body ? { position: "absolute", top: 0, left: 0, zIndex: 2147483647, ...s } : void 0 })), c) : null;
}));
function Kn(e3) {
  const t = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(e3);
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect((() => {
    t.current = e3;
  })), qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useMemo((() => (...r) => {
    var i;
    return (i = t.current) === null || i === void 0 ? void 0 : i.call(t, ...r);
  }), []);
}
const pv = { bubbles: false, cancelable: true }, QR = /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.forwardRef(((e3, t) => {
  const { loop: r = false, trapped: i = false, onMountAutoFocus: a, onUnmountAutoFocus: s, ...l } = e3, [c, f] = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState(null), m = Kn(a), g = Kn(s), v = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(null), p = On(t, ((d) => f(d))), w = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef({ paused: false, pause() {
    this.paused = true;
  }, resume() {
    this.paused = false;
  } }).current;
  qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect((() => {
    if (i) {
      let d = function(h) {
        if (w.paused || !c) return;
        const x = h.target;
        c.contains(x) ? v.current = x : Dn(v.current, { select: true });
      }, b = function(h) {
        !w.paused && c && (c.contains(h.relatedTarget) || Dn(v.current, { select: true }));
      };
      return document.addEventListener("focusin", d), document.addEventListener("focusout", b), () => {
        document.removeEventListener("focusin", d), document.removeEventListener("focusout", b);
      };
    }
  }), [i, c, w.paused]), qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect((() => {
    if (c) {
      gv.add(w);
      const b = document.activeElement;
      if (!c.contains(b)) {
        const h = new Event("focusScope.autoFocusOnMount", pv);
        c.addEventListener("focusScope.autoFocusOnMount", m), c.dispatchEvent(h), h.defaultPrevented || ((function(x, { select: _ = false } = {}) {
          const R = document.activeElement;
          for (const O of x) if (Dn(O, { select: _ }), document.activeElement !== R) return;
        })((d = hv(c), d.filter(((x) => x.tagName !== "A"))), { select: true }), document.activeElement === b && Dn(c));
      }
      return () => {
        c.removeEventListener("focusScope.autoFocusOnMount", m), setTimeout((() => {
          const h = new Event("focusScope.autoFocusOnUnmount", pv);
          c.addEventListener("focusScope.autoFocusOnUnmount", g), c.dispatchEvent(h), h.defaultPrevented || Dn(b ?? document.body, { select: true }), c.removeEventListener("focusScope.autoFocusOnUnmount", g), gv.remove(w);
        }), 0);
      };
    }
    var d;
  }), [c, m, g, w]);
  const S = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useCallback(((d) => {
    if (!r && !i || w.paused) return;
    const b = d.key === "Tab" && !d.altKey && !d.ctrlKey && !d.metaKey, h = document.activeElement;
    if (b && h) {
      const x = d.currentTarget, [_, R] = (function(O) {
        const C = hv(O), W = vv(C, O), M = vv(C.reverse(), O);
        return [W, M];
      })(x);
      _ && R ? d.shiftKey || h !== R ? d.shiftKey && h === _ && (d.preventDefault(), r && Dn(R, { select: true })) : (d.preventDefault(), r && Dn(_, { select: true })) : h === x && d.preventDefault();
    }
  }), [r, i, w.paused]);
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(An.div, Xe({ tabIndex: -1 }, l, { ref: p, onKeyDown: S }));
}));
function hv(e3) {
  const t = [], r = document.createTreeWalker(e3, NodeFilter.SHOW_ELEMENT, { acceptNode: (i) => {
    const a = i.tagName === "INPUT" && i.type === "hidden";
    return i.disabled || i.hidden || a ? NodeFilter.FILTER_SKIP : i.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function vv(e3, t) {
  for (const r of e3) if (!eP(r, { upTo: t })) return r;
}
function eP(e3, { upTo: t }) {
  if (getComputedStyle(e3).visibility === "hidden") return true;
  for (; e3; ) {
    if (t !== void 0 && e3 === t) return false;
    if (getComputedStyle(e3).display === "none") return true;
    e3 = e3.parentElement;
  }
  return false;
}
function Dn(e3, { select: t = false } = {}) {
  if (e3 && e3.focus) {
    const r = document.activeElement;
    e3.focus({ preventScroll: true }), e3 !== r && (function(i) {
      return i instanceof HTMLInputElement && "select" in i;
    })(e3) && t && e3.select();
  }
}
const gv = /* @__PURE__ */ (function() {
  let e3 = [];
  return { add(t) {
    const r = e3[0];
    t !== r && (r == null || r.pause()), e3 = mv(e3, t), e3.unshift(t);
  }, remove(t) {
    var r;
    e3 = mv(e3, t), (r = e3[0]) === null || r === void 0 || r.resume();
  } };
})();
function mv(e3, t) {
  const r = [...e3], i = r.indexOf(t);
  return i !== -1 && r.splice(i, 1), r;
}
function Cm(e3) {
  const t = Kn(e3);
  qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect((() => {
    const r = (i) => {
      i.key === "Escape" && t(i);
    };
    return document.addEventListener("keydown", r), () => document.removeEventListener("keydown", r);
  }), [t]);
}
const tP = globalThis != null && globalThis.document ? qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useLayoutEffect : () => {
};
let yv, Va = 0;
function rP({ disabled: e3 }) {
  const t = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(false);
  tP((() => {
    if (e3) {
      let r = function() {
        Va--, Va === 0 && (document.body.style.pointerEvents = yv);
      }, i = function(a) {
        t.current = a.pointerType !== "mouse";
      };
      return Va === 0 && (yv = document.body.style.pointerEvents), document.body.style.pointerEvents = "none", Va++, document.addEventListener("pointerup", i), () => {
        t.current ? document.addEventListener("click", r, { once: true }) : r(), document.removeEventListener("pointerup", i);
      };
    }
  }), [e3]);
}
function Zt(e3, t, { checkForDefaultPrevented: r = true } = {}) {
  return function(i) {
    if (e3 == null || e3(i), r === false || !i.defaultPrevented) return t == null ? void 0 : t(i);
  };
}
const nP = /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createContext({ layers: /* @__PURE__ */ new Set(), layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(), branches: /* @__PURE__ */ new Set() }), iP = /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.forwardRef(((e3, t) => {
  const { disableOutsidePointerEvents: r = false, onEscapeKeyDown: i, onPointerDownOutside: a, onFocusOutside: s, onInteractOutside: l, onDismiss: c, ...f } = e3, m = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useContext(nP), [g, v] = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState(null), [, p] = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState({}), w = On(t, ((C) => v(C))), S = Array.from(m.layers), [d] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1), b = S.indexOf(d), h = g ? S.indexOf(g) : -1, x = m.layersWithOutsidePointerEventsDisabled.size > 0, _ = h >= b, R = (function(C) {
    const W = Kn(C), M = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(false);
    return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect((() => {
      const N = (D) => {
        D.target && !M.current && bv("dismissableLayer.pointerDownOutside", W, { originalEvent: D }), M.current = false;
      }, Z = window.setTimeout((() => {
        document.addEventListener("pointerdown", N);
      }), 0);
      return () => {
        window.clearTimeout(Z), document.removeEventListener("pointerdown", N);
      };
    }), [W]), { onPointerDownCapture: () => M.current = true };
  })(((C) => {
    const W = C.target, M = [...m.branches].some(((N) => N.contains(W)));
    _ && !M && (a == null || a(C), l == null || l(C), C.defaultPrevented || c == null || c());
  })), O = (function(C) {
    const W = Kn(C), M = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(false);
    return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect((() => {
      const N = (Z) => {
        Z.target && !M.current && bv("dismissableLayer.focusOutside", W, { originalEvent: Z });
      };
      return document.addEventListener("focusin", N), () => document.removeEventListener("focusin", N);
    }), [W]), { onFocusCapture: () => M.current = true, onBlurCapture: () => M.current = false };
  })(((C) => {
    const W = C.target;
    [...m.branches].some(((M) => M.contains(W))) || (s == null || s(C), l == null || l(C), C.defaultPrevented || c == null || c());
  }));
  return Cm(((C) => {
    h === m.layers.size - 1 && (i == null || i(C), C.defaultPrevented || c == null || c());
  })), rP({ disabled: r }), qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect((() => {
    g && (r && m.layersWithOutsidePointerEventsDisabled.add(g), m.layers.add(g), wv());
  }), [g, r, m]), qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect((() => () => {
    g && (m.layers.delete(g), m.layersWithOutsidePointerEventsDisabled.delete(g), wv());
  }), [g, m]), qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect((() => {
    const C = () => p({});
    return document.addEventListener("dismissableLayer.update", C), () => document.removeEventListener("dismissableLayer.update", C);
  }), []), /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(An.div, Xe({}, f, { ref: w, style: { pointerEvents: x ? _ ? "auto" : "none" : void 0, ...e3.style }, onFocusCapture: Zt(e3.onFocusCapture, O.onFocusCapture), onBlurCapture: Zt(e3.onBlurCapture, O.onBlurCapture), onPointerDownCapture: Zt(e3.onPointerDownCapture, R.onPointerDownCapture) }));
}));
function wv() {
  const e3 = new Event("dismissableLayer.update");
  document.dispatchEvent(e3);
}
function bv(e3, t, r) {
  const i = r.originalEvent.target, a = new CustomEvent(e3, { bubbles: false, cancelable: true, detail: r });
  return t && i.addEventListener(e3, t, { once: true }), !i.dispatchEvent(a);
}
function Sv(e3) {
  const [t, r] = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState(void 0);
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect((() => {
    if (e3) {
      const i = new ResizeObserver(((a) => {
        if (!Array.isArray(a) || !a.length) return;
        const s = a[0];
        let l, c;
        if ("borderBoxSize" in s) {
          const f = s.borderBoxSize, m = Array.isArray(f) ? f[0] : f;
          l = m.inlineSize, c = m.blockSize;
        } else {
          const f = e3.getBoundingClientRect();
          l = f.width, c = f.height;
        }
        r({ width: l, height: c });
      }));
      return i.observe(e3, { box: "border-box" }), () => i.unobserve(e3);
    }
    r(void 0);
  }), [e3]), t;
}
function oP(e3, t) {
  const r = zn.get(e3);
  return r === void 0 ? (zn.set(e3, { rect: {}, callbacks: [t] }), zn.size === 1 && (bc = requestAnimationFrame($m))) : (r.callbacks.push(t), t(e3.getBoundingClientRect())), () => {
    const i = zn.get(e3);
    if (i === void 0) return;
    const a = i.callbacks.indexOf(t);
    a > -1 && i.callbacks.splice(a, 1), i.callbacks.length === 0 && (zn.delete(e3), zn.size === 0 && cancelAnimationFrame(bc));
  };
}
let bc;
const zn = /* @__PURE__ */ new Map();
function $m() {
  const e3 = [];
  zn.forEach(((t, r) => {
    const i = r.getBoundingClientRect();
    var a, s;
    a = t.rect, s = i, (a.width !== s.width || a.height !== s.height || a.top !== s.top || a.right !== s.right || a.bottom !== s.bottom || a.left !== s.left) && (t.rect = i, e3.push(t));
  })), e3.forEach(((t) => {
    t.callbacks.forEach(((r) => r(t.rect)));
  })), bc = requestAnimationFrame($m);
}
function Im(e3) {
  const [t, r] = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState();
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect((() => {
    if (e3) {
      const i = oP(e3, r);
      return () => {
        r(void 0), i();
      };
    }
  }), [e3]), t;
}
function Qc(e3, t = []) {
  let r = [];
  const i = () => {
    const a = r.map(((s) => /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createContext(s)));
    return function(s) {
      const l = (s == null ? void 0 : s[e3]) || a;
      return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useMemo((() => ({ [`__scope${e3}`]: { ...s, [e3]: l } })), [s, l]);
    };
  };
  return i.scopeName = e3, [function(a, s) {
    const l = /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createContext(s), c = r.length;
    function f(m) {
      const { scope: g, children: v, ...p } = m, w = (g == null ? void 0 : g[e3][c]) || l, S = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useMemo((() => p), Object.values(p));
      return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(w.Provider, { value: S }, v);
    }
    return r = [...r, s], f.displayName = a + "Provider", [f, function(m, g) {
      const v = (g == null ? void 0 : g[e3][c]) || l, p = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useContext(v);
      if (p) return p;
      if (s !== void 0) return s;
      throw new Error(`\`${m}\` must be used within \`${a}\``);
    }];
  }, aP(i, ...t)];
}
function aP(...e3) {
  const t = e3[0];
  if (e3.length === 1) return t;
  const r = () => {
    const i = e3.map(((a) => ({ useScope: a(), scopeName: a.scopeName })));
    return function(a) {
      const s = i.reduce(((l, { useScope: c, scopeName: f }) => ({ ...l, ...c(a)[`__scope${f}`] })), {});
      return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useMemo((() => ({ [`__scope${t.scopeName}`]: s })), [s]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
function sP({ anchorRect: e3, popperSize: t, arrowSize: r, arrowOffset: i = 0, side: a, sideOffset: s = 0, align: l, alignOffset: c = 0, shouldAvoidCollisions: f = true, collisionBoundariesRect: m, collisionTolerance: g = 0 }) {
  if (!e3 || !t || !m) return { popperStyles: uP, arrowStyles: zl };
  const v = (function(W, M, N = 0, Z = 0, D) {
    const L = D ? D.height : 0, B = xv(M, W, "x"), H = xv(M, W, "y"), k = H.before - N - L, X = H.after + N + L, V = B.before - N - L, ee = B.after + N + L;
    return { top: { start: { x: B.start + Z, y: k }, center: { x: B.center, y: k }, end: { x: B.end - Z, y: k } }, right: { start: { x: ee, y: H.start + Z }, center: { x: ee, y: H.center }, end: { x: ee, y: H.end - Z } }, bottom: { start: { x: B.start + Z, y: X }, center: { x: B.center, y: X }, end: { x: B.end - Z, y: X } }, left: { start: { x: V, y: H.start + Z }, center: { x: V, y: H.center }, end: { x: V, y: H.end - Z } } };
  })(t, e3, s, c, r), p = v[a][l];
  if (f === false) {
    const W = _v(p);
    let M = zl;
    return r && (M = Ov({ popperSize: t, arrowSize: r, arrowOffset: i, side: a, align: l })), { popperStyles: { ...W, "--radix-popper-transform-origin": Ev(t, a, l, i, r) }, arrowStyles: M, placedSide: a, placedAlign: l };
  }
  const w = DOMRect.fromRect({ ...t, ...p }), S = (d = m, b = g, DOMRect.fromRect({ width: d.width - 2 * b, height: d.height - 2 * b, x: d.left + b, y: d.top + b }));
  var d, b;
  const h = Tv(w, S), x = v[Av(a)][l], _ = (function(W, M, N) {
    const Z = Av(W);
    return M[W] && !N[Z] ? Z : W;
  })(a, h, Tv(DOMRect.fromRect({ ...t, ...x }), S)), R = (function(W, M, N, Z, D) {
    const L = N === "top" || N === "bottom", B = L ? "left" : "top", H = L ? "right" : "bottom", k = L ? "width" : "height", X = M[k] > W[k];
    return (Z === "start" || Z === "center") && (D[B] && X || D[H] && !X) ? "end" : (Z === "end" || Z === "center") && (D[H] && X || D[B] && !X) ? "start" : Z;
  })(t, e3, a, l, h), O = _v(v[_][R]);
  let C = zl;
  return r && (C = Ov({ popperSize: t, arrowSize: r, arrowOffset: i, side: _, align: R })), { popperStyles: { ...O, "--radix-popper-transform-origin": Ev(t, _, R, i, r) }, arrowStyles: C, placedSide: _, placedAlign: R };
}
function xv(e3, t, r) {
  const i = e3[r === "x" ? "left" : "top"], a = r === "x" ? "width" : "height", s = e3[a], l = t[a];
  return { before: i - l, start: i, center: i + (s - l) / 2, end: i + s - l, after: i + s };
}
function _v(e3) {
  return { position: "absolute", top: 0, left: 0, minWidth: "max-content", willChange: "transform", transform: `translate3d(${Math.round(e3.x + window.scrollX)}px, ${Math.round(e3.y + window.scrollY)}px, 0)` };
}
function Ev(e3, t, r, i, a) {
  const s = t === "top" || t === "bottom", l = a ? a.width : 0, c = a ? a.height : 0, f = l / 2 + i;
  let m = "", g = "";
  return s ? (m = { start: `${f}px`, center: "center", end: e3.width - f + "px" }[r], g = t === "top" ? `${e3.height + c}px` : -c + "px") : (m = t === "left" ? `${e3.width + c}px` : -c + "px", g = { start: `${f}px`, center: "center", end: e3.height - f + "px" }[r]), `${m} ${g}`;
}
const uP = { position: "fixed", top: 0, left: 0, opacity: 0, transform: "translate3d(0, -200%, 0)" }, zl = { position: "absolute", opacity: 0 };
function Ov({ popperSize: e3, arrowSize: t, arrowOffset: r, side: i, align: a }) {
  const s = (e3.width - t.width) / 2, l = (e3.height - t.width) / 2, c = { top: 0, right: 90, bottom: 180, left: -90 }[i], f = Math.max(t.width, t.height), m = { width: `${f}px`, height: `${f}px`, transform: `rotate(${c}deg)`, willChange: "transform", position: "absolute", [i]: "100%", direction: lP(i, a) };
  return i !== "top" && i !== "bottom" || (a === "start" && (m.left = `${r}px`), a === "center" && (m.left = `${s}px`), a === "end" && (m.right = `${r}px`)), i !== "left" && i !== "right" || (a === "start" && (m.top = `${r}px`), a === "center" && (m.top = `${l}px`), a === "end" && (m.bottom = `${r}px`)), m;
}
function lP(e3, t) {
  return (e3 !== "top" && e3 !== "right" || t !== "end") && (e3 !== "bottom" && e3 !== "left" || t === "end") ? "ltr" : "rtl";
}
function Av(e3) {
  return { top: "bottom", right: "left", bottom: "top", left: "right" }[e3];
}
function Tv(e3, t) {
  return { top: e3.top < t.top, right: e3.right > t.right, bottom: e3.bottom > t.bottom, left: e3.left < t.left };
}
const [Lm, zs] = Qc("Popper"), [cP, Mm] = Lm("Popper"), fP = (e3) => {
  const { __scopePopper: t, children: r } = e3, [i, a] = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState(null);
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(cP, { scope: t, anchor: i, onAnchorChange: a }, r);
}, dP = /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.forwardRef(((e3, t) => {
  const { __scopePopper: r, virtualRef: i, ...a } = e3, s = Mm("PopperAnchor", r), l = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(null), c = On(t, l);
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect((() => {
    s.onAnchorChange((i == null ? void 0 : i.current) || l.current);
  })), i ? null : /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(An.div, Xe({}, a, { ref: c }));
})), [pP, q2] = Lm("PopperContent"), hP = /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.forwardRef(((e3, t) => {
  const { __scopePopper: r, side: i = "bottom", sideOffset: a, align: s = "center", alignOffset: l, collisionTolerance: c, avoidCollisions: f = true, ...m } = e3, g = Mm("PopperContent", r), [v, p] = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState(), w = Im(g.anchor), [S, d] = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState(null), b = Sv(S), [h, x] = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState(null), _ = Sv(h), R = On(t, ((L) => d(L))), O = (function() {
    const [L, B] = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState(void 0);
    return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect((() => {
      let H;
      function k() {
        B({ width: window.innerWidth, height: window.innerHeight });
      }
      function X() {
        window.clearTimeout(H), H = window.setTimeout(k, 100);
      }
      return k(), window.addEventListener("resize", X), () => window.removeEventListener("resize", X);
    }), []), L;
  })(), C = O ? DOMRect.fromRect({ ...O, x: 0, y: 0 }) : void 0, { popperStyles: W, arrowStyles: M, placedSide: N, placedAlign: Z } = sP({ anchorRect: w, popperSize: b, arrowSize: _, arrowOffset: v, side: i, sideOffset: a, align: s, alignOffset: l, shouldAvoidCollisions: f, collisionBoundariesRect: C, collisionTolerance: c }), D = N !== void 0;
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement("div", { style: W, "data-radix-popper-content-wrapper": "" }, /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(pP, { scope: r, arrowStyles: M, onArrowChange: x, onArrowOffsetChange: p }, /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(An.div, Xe({ "data-side": N, "data-align": Z }, m, { style: { ...m.style, animation: D ? void 0 : "none" }, ref: R }))));
})), Nm = fP, Fm = dP, Dm = hP;
function zm({ prop: e3, defaultProp: t, onChange: r = (() => {
}) }) {
  const [i, a] = (function({ defaultProp: f, onChange: m }) {
    const g = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState(f), [v] = g, p = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(v), w = Kn(m);
    return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect((() => {
      p.current !== v && (w(v), p.current = v);
    }), [v, p, w]), g;
  })({ defaultProp: t, onChange: r }), s = e3 !== void 0, l = s ? e3 : i, c = Kn(r);
  return [l, qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useCallback(((f) => {
    if (s) {
      const m = f, g = typeof f == "function" ? m(e3) : f;
      g !== e3 && c(g);
    } else a(f);
  }), [s, e3, a, c])];
}
const [vP] = Qc("Popover", [zs]), ef = zs(), [gP, Ho] = vP("Popover"), mP = (e3) => {
  const { __scopePopover: t, children: r, open: i, defaultOpen: a, onOpenChange: s, modal: l = false } = e3, c = ef(t), f = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(null), [m, g] = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState(false), [v = false, p] = zm({ prop: i, defaultProp: a, onChange: s });
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(Nm, c, /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(gP, { scope: t, contentId: Tm(), triggerRef: f, open: v, onOpenChange: p, onOpenToggle: qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useCallback((() => p(((w) => !w))), [p]), hasCustomAnchor: m, onCustomAnchorAdd: qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useCallback((() => g(true)), []), onCustomAnchorRemove: qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useCallback((() => g(false)), []), modal: l }, r));
}, yP = /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.forwardRef(((e3, t) => {
  const { __scopePopover: r, ...i } = e3, a = Ho("PopoverTrigger", r), s = ef(r), l = On(t, a.triggerRef), c = /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(An.button, Xe({ type: "button", "aria-haspopup": "dialog", "aria-expanded": a.open, "aria-controls": a.contentId, "data-state": Bm(a.open) }, i, { ref: l, onClick: Zt(e3.onClick, a.onOpenToggle) }));
  return a.hasCustomAnchor ? c : /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(Fm, Xe({ asChild: true }, s), c);
})), wP = /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.forwardRef(((e3, t) => {
  const { forceMount: r, ...i } = e3, a = Ho("PopoverContent", e3.__scopePopover);
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(Xc, { present: r || a.open }, a.modal ? /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(bP, Xe({}, i, { ref: t })) : /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(SP, Xe({}, i, { ref: t })));
})), bP = /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.forwardRef(((e3, t) => {
  const { allowPinchZoom: r, portalled: i = true, ...a } = e3, s = Ho("PopoverContent", e3.__scopePopover), l = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(null), c = On(t, l), f = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(false);
  qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect((() => {
    const g = l.current;
    if (g) return fR(g);
  }), []);
  const m = i ? Jc : qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.Fragment;
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(m, null, /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(Am, { allowPinchZoom: r }, /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(Wm, Xe({}, a, { ref: c, trapFocus: s.open, disableOutsidePointerEvents: true, onCloseAutoFocus: Zt(e3.onCloseAutoFocus, ((g) => {
    var v;
    g.preventDefault(), f.current || (v = s.triggerRef.current) === null || v === void 0 || v.focus();
  })), onPointerDownOutside: Zt(e3.onPointerDownOutside, ((g) => {
    const v = g.detail.originalEvent, p = v.button === 0 && v.ctrlKey === true, w = v.button === 2 || p;
    f.current = w;
  }), { checkForDefaultPrevented: false }), onFocusOutside: Zt(e3.onFocusOutside, ((g) => g.preventDefault()), { checkForDefaultPrevented: false }) }))));
})), SP = /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.forwardRef(((e3, t) => {
  const { portalled: r = true, ...i } = e3, a = Ho("PopoverContent", e3.__scopePopover), s = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(false), l = r ? Jc : qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.Fragment;
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(l, null, /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(Wm, Xe({}, i, { ref: t, trapFocus: false, disableOutsidePointerEvents: false, onCloseAutoFocus: (c) => {
    var f, m;
    (f = e3.onCloseAutoFocus) === null || f === void 0 || f.call(e3, c), c.defaultPrevented || (s.current || (m = a.triggerRef.current) === null || m === void 0 || m.focus(), c.preventDefault()), s.current = false;
  }, onInteractOutside: (c) => {
    var f, m;
    (f = e3.onInteractOutside) === null || f === void 0 || f.call(e3, c), c.defaultPrevented || (s.current = true);
    const g = c.target;
    !((m = a.triggerRef.current) === null || m === void 0) && m.contains(g) && c.preventDefault();
  } })));
})), Wm = /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.forwardRef(((e3, t) => {
  const { __scopePopover: r, trapFocus: i, onOpenAutoFocus: a, onCloseAutoFocus: s, disableOutsidePointerEvents: l, onEscapeKeyDown: c, onPointerDownOutside: f, onFocusOutside: m, onInteractOutside: g, ...v } = e3, p = Ho("PopoverContent", r), w = ef(r);
  return XR(), /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(QR, { asChild: true, loop: true, trapped: i, onMountAutoFocus: a, onUnmountAutoFocus: s }, /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(iP, { asChild: true, disableOutsidePointerEvents: l, onInteractOutside: g, onEscapeKeyDown: c, onPointerDownOutside: f, onFocusOutside: m, onDismiss: () => p.onOpenChange(false) }, /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(Dm, Xe({ "data-state": Bm(p.open), role: "dialog", id: p.contentId }, w, v, { ref: t, style: { ...v.style, "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)" } }))));
}));
function Bm(e3) {
  return e3 ? "open" : "closed";
}
const xP = mP, _P = yP, EP = wP;
var ds = /* @__PURE__ */ ((e3) => (e3.VIDEO = "video", e3.CAROUSEL = "carousel", e3.TEXT = "text", e3))(ds || {}), Wl = {}, co = {}, Ya = {}, Xa = {}, Ja = { exports: {} };
var Ul, $v;
function tf() {
  if ($v) return Ul;
  $v = 1;
  var e3 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ul = e3, Ul;
}
var Zl, Nv;
function kP() {
  if (Nv) return Zl;
  Nv = 1;
  var e3 = /* @__PURE__ */ tf();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Zl = function() {
    function i(l, c, f, m, g, v) {
      if (v !== e3) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    i.isRequired = i;
    function a() {
      return i;
    }
    var s = {
      array: i,
      bigint: i,
      bool: i,
      func: i,
      number: i,
      object: i,
      string: i,
      symbol: i,
      any: i,
      arrayOf: a,
      element: i,
      elementType: i,
      instanceOf: a,
      node: i,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, Zl;
}
var Fv;
function CP() {
  if (Fv) return Ja.exports;
  if (Fv = 1, false) ; else
    Ja.exports = /* @__PURE__ */ kP()();
  return Ja.exports;
}
var Dv;
function $P() {
  return Dv || (Dv = 1, (function(e3) {
    (function(t, r) {
      r(e3, React, /* @__PURE__ */ CP());
    })(Xa, function(t, r, i) {
      Object.defineProperty(t, "__esModule", {
        value: true
      }), t.setHasSupportToCaptureOption = S;
      var a = l(r), s = l(i);
      function l(x) {
        return x && x.__esModule ? x : {
          default: x
        };
      }
      var c = Object.assign || function(x) {
        for (var _ = 1; _ < arguments.length; _++) {
          var R = arguments[_];
          for (var O in R)
            Object.prototype.hasOwnProperty.call(R, O) && (x[O] = R[O]);
        }
        return x;
      };
      function f(x, _) {
        var R = {};
        for (var O in x)
          _.indexOf(O) >= 0 || Object.prototype.hasOwnProperty.call(x, O) && (R[O] = x[O]);
        return R;
      }
      function m(x, _) {
        if (!(x instanceof _))
          throw new TypeError("Cannot call a class as a function");
      }
      var g = /* @__PURE__ */ (function() {
        function x(_, R) {
          for (var O = 0; O < R.length; O++) {
            var C = R[O];
            C.enumerable = C.enumerable || false, C.configurable = true, "value" in C && (C.writable = true), Object.defineProperty(_, C.key, C);
          }
        }
        return function(_, R, O) {
          return R && x(_.prototype, R), O && x(_, O), _;
        };
      })();
      function v(x, _) {
        if (!x)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return _ && (typeof _ == "object" || typeof _ == "function") ? _ : x;
      }
      function p(x, _) {
        if (typeof _ != "function" && _ !== null)
          throw new TypeError("Super expression must either be null or a function, not " + typeof _);
        x.prototype = Object.create(_ && _.prototype, {
          constructor: {
            value: x,
            enumerable: false,
            writable: true,
            configurable: true
          }
        }), _ && (Object.setPrototypeOf ? Object.setPrototypeOf(x, _) : x.__proto__ = _);
      }
      var w = false;
      function S(x) {
        w = x;
      }
      try {
        addEventListener("test", null, Object.defineProperty({}, "capture", { get: function() {
          S(true);
        } }));
      } catch {
      }
      function d() {
        var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { capture: true };
        return w ? x : x.capture;
      }
      function b(x) {
        if ("touches" in x) {
          var _ = x.touches[0], R = _.pageX, O = _.pageY;
          return { x: R, y: O };
        }
        var C = x.screenX, W = x.screenY;
        return { x: C, y: W };
      }
      var h = (function(x) {
        p(_, x);
        function _() {
          var R;
          m(this, _);
          for (var O = arguments.length, C = Array(O), W = 0; W < O; W++)
            C[W] = arguments[W];
          var M = v(this, (R = _.__proto__ || Object.getPrototypeOf(_)).call.apply(R, [this].concat(C)));
          return M._handleSwipeStart = M._handleSwipeStart.bind(M), M._handleSwipeMove = M._handleSwipeMove.bind(M), M._handleSwipeEnd = M._handleSwipeEnd.bind(M), M._onMouseDown = M._onMouseDown.bind(M), M._onMouseMove = M._onMouseMove.bind(M), M._onMouseUp = M._onMouseUp.bind(M), M._setSwiperRef = M._setSwiperRef.bind(M), M;
        }
        return g(_, [{
          key: "componentDidMount",
          value: function() {
            this.swiper && this.swiper.addEventListener("touchmove", this._handleSwipeMove, d({
              capture: true,
              passive: false
            }));
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.swiper && this.swiper.removeEventListener("touchmove", this._handleSwipeMove, d({
              capture: true,
              passive: false
            }));
          }
        }, {
          key: "_onMouseDown",
          value: function(O) {
            this.props.allowMouseEvents && (this.mouseDown = true, document.addEventListener("mouseup", this._onMouseUp), document.addEventListener("mousemove", this._onMouseMove), this._handleSwipeStart(O));
          }
        }, {
          key: "_onMouseMove",
          value: function(O) {
            this.mouseDown && this._handleSwipeMove(O);
          }
        }, {
          key: "_onMouseUp",
          value: function(O) {
            this.mouseDown = false, document.removeEventListener("mouseup", this._onMouseUp), document.removeEventListener("mousemove", this._onMouseMove), this._handleSwipeEnd(O);
          }
        }, {
          key: "_handleSwipeStart",
          value: function(O) {
            var C = b(O), W = C.x, M = C.y;
            this.moveStart = { x: W, y: M }, this.props.onSwipeStart(O);
          }
        }, {
          key: "_handleSwipeMove",
          value: function(O) {
            if (this.moveStart) {
              var C = b(O), W = C.x, M = C.y, N = W - this.moveStart.x, Z = M - this.moveStart.y;
              this.moving = true;
              var D = this.props.onSwipeMove({
                x: N,
                y: Z
              }, O);
              D && O.cancelable && O.preventDefault(), this.movePosition = { deltaX: N, deltaY: Z };
            }
          }
        }, {
          key: "_handleSwipeEnd",
          value: function(O) {
            this.props.onSwipeEnd(O);
            var C = this.props.tolerance;
            this.moving && this.movePosition && (this.movePosition.deltaX < -C ? this.props.onSwipeLeft(1, O) : this.movePosition.deltaX > C && this.props.onSwipeRight(1, O), this.movePosition.deltaY < -C ? this.props.onSwipeUp(1, O) : this.movePosition.deltaY > C && this.props.onSwipeDown(1, O)), this.moveStart = null, this.moving = false, this.movePosition = null;
          }
        }, {
          key: "_setSwiperRef",
          value: function(O) {
            this.swiper = O, this.props.innerRef(O);
          }
        }, {
          key: "render",
          value: function() {
            var O = this.props;
            O.tagName;
            var C = O.className, W = O.style, M = O.children;
            O.allowMouseEvents, O.onSwipeUp, O.onSwipeDown, O.onSwipeLeft, O.onSwipeRight, O.onSwipeStart, O.onSwipeMove, O.onSwipeEnd, O.innerRef, O.tolerance;
            var N = f(O, ["tagName", "className", "style", "children", "allowMouseEvents", "onSwipeUp", "onSwipeDown", "onSwipeLeft", "onSwipeRight", "onSwipeStart", "onSwipeMove", "onSwipeEnd", "innerRef", "tolerance"]);
            return a.default.createElement(
              this.props.tagName,
              c({
                ref: this._setSwiperRef,
                onMouseDown: this._onMouseDown,
                onTouchStart: this._handleSwipeStart,
                onTouchEnd: this._handleSwipeEnd,
                className: C,
                style: W
              }, N),
              M
            );
          }
        }]), _;
      })(r.Component);
      h.displayName = "ReactSwipe", h.propTypes = {
        tagName: s.default.string,
        className: s.default.string,
        style: s.default.object,
        children: s.default.node,
        allowMouseEvents: s.default.bool,
        onSwipeUp: s.default.func,
        onSwipeDown: s.default.func,
        onSwipeLeft: s.default.func,
        onSwipeRight: s.default.func,
        onSwipeStart: s.default.func,
        onSwipeMove: s.default.func,
        onSwipeEnd: s.default.func,
        innerRef: s.default.func,
        tolerance: s.default.number.isRequired
      }, h.defaultProps = {
        tagName: "div",
        allowMouseEvents: false,
        onSwipeUp: function() {
        },
        onSwipeDown: function() {
        },
        onSwipeLeft: function() {
        },
        onSwipeRight: function() {
        },
        onSwipeStart: function() {
        },
        onSwipeMove: function() {
        },
        onSwipeEnd: function() {
        },
        innerRef: function() {
        },
        tolerance: 0
      }, t.default = h;
    });
  })(Xa)), Xa;
}
var zv;
function Hm() {
  return zv || (zv = 1, (function(e3) {
    (function(t, r) {
      r(e3, $P());
    })(Ya, function(t, r) {
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var i = a(r);
      function a(s) {
        return s && s.__esModule ? s : {
          default: s
        };
      }
      t.default = i.default;
    });
  })(Ya)), Ya;
}
var fo = {}, Wv;
function qm() {
  if (Wv) return fo;
  Wv = 1, Object.defineProperty(fo, "__esModule", {
    value: true
  }), fo.default = void 0;
  var e3 = t(rm());
  function t(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function r(a, s, l) {
    return s in a ? Object.defineProperty(a, s, { value: l, enumerable: true, configurable: true, writable: true }) : a[s] = l, a;
  }
  var i = {
    ROOT: function(s) {
      return (0, e3.default)(r({
        "carousel-root": true
      }, s || "", !!s));
    },
    CAROUSEL: function(s) {
      return (0, e3.default)({
        carousel: true,
        "carousel-slider": s
      });
    },
    WRAPPER: function(s, l) {
      return (0, e3.default)({
        "thumbs-wrapper": !s,
        "slider-wrapper": s,
        "axis-horizontal": l === "horizontal",
        "axis-vertical": l !== "horizontal"
      });
    },
    SLIDER: function(s, l) {
      return (0, e3.default)({
        thumbs: !s,
        slider: s,
        animated: !l
      });
    },
    ITEM: function(s, l, c) {
      return (0, e3.default)({
        thumb: !s,
        slide: s,
        selected: l,
        previous: c
      });
    },
    ARROW_PREV: function(s) {
      return (0, e3.default)({
        "control-arrow control-prev": true,
        "control-disabled": s
      });
    },
    ARROW_NEXT: function(s) {
      return (0, e3.default)({
        "control-arrow control-next": true,
        "control-disabled": s
      });
    },
    DOT: function(s) {
      return (0, e3.default)({
        dot: true,
        selected: s
      });
    }
  };
  return fo.default = i, fo;
}
var po = {}, ho = {}, Bv;
function IP() {
  if (Bv) return ho;
  Bv = 1, Object.defineProperty(ho, "__esModule", {
    value: true
  }), ho.outerWidth = void 0;
  var e3 = function(r) {
    var i = r.offsetWidth, a = getComputedStyle(r);
    return i += parseInt(a.marginLeft) + parseInt(a.marginRight), i;
  };
  return ho.outerWidth = e3, ho;
}
var vo = {}, Uv;
function rf() {
  if (Uv) return vo;
  Uv = 1, Object.defineProperty(vo, "__esModule", {
    value: true
  }), vo.default = void 0;
  var e3 = function(r, i, a) {
    var s = r === 0 ? r : r + i, l = a === "horizontal" ? [s, 0, 0] : [0, s, 0], c = "translate3d", f = "(" + l.join(",") + ")";
    return c + f;
  };
  return vo.default = e3, vo;
}
var go = {}, jv;
function Zm() {
  if (jv) return go;
  jv = 1, Object.defineProperty(go, "__esModule", {
    value: true
  }), go.default = void 0;
  var e3 = function() {
    return window;
  };
  return go.default = e3, go;
}
var Hv;
function Gm() {
  if (Hv) return po;
  Hv = 1, Object.defineProperty(po, "__esModule", {
    value: true
  }), po.default = void 0;
  var e3 = f(React), t = l(qm()), r = IP(), i = l(rf()), a = l(Hm()), s = l(Zm());
  function l(M) {
    return M && M.__esModule ? M : { default: M };
  }
  function c() {
    if (typeof WeakMap != "function") return null;
    var M = /* @__PURE__ */ new WeakMap();
    return c = function() {
      return M;
    }, M;
  }
  function f(M) {
    if (M && M.__esModule)
      return M;
    if (M === null || m(M) !== "object" && typeof M != "function")
      return { default: M };
    var N = c();
    if (N && N.has(M))
      return N.get(M);
    var Z = {}, D = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var L in M)
      if (Object.prototype.hasOwnProperty.call(M, L)) {
        var B = D ? Object.getOwnPropertyDescriptor(M, L) : null;
        B && (B.get || B.set) ? Object.defineProperty(Z, L, B) : Z[L] = M[L];
      }
    return Z.default = M, N && N.set(M, Z), Z;
  }
  function m(M) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? m = function(Z) {
      return typeof Z;
    } : m = function(Z) {
      return Z && typeof Symbol == "function" && Z.constructor === Symbol && Z !== Symbol.prototype ? "symbol" : typeof Z;
    }, m(M);
  }
  function g() {
    return g = Object.assign || function(M) {
      for (var N = 1; N < arguments.length; N++) {
        var Z = arguments[N];
        for (var D in Z)
          Object.prototype.hasOwnProperty.call(Z, D) && (M[D] = Z[D]);
      }
      return M;
    }, g.apply(this, arguments);
  }
  function v(M, N) {
    if (!(M instanceof N))
      throw new TypeError("Cannot call a class as a function");
  }
  function p(M, N) {
    for (var Z = 0; Z < N.length; Z++) {
      var D = N[Z];
      D.enumerable = D.enumerable || false, D.configurable = true, "value" in D && (D.writable = true), Object.defineProperty(M, D.key, D);
    }
  }
  function w(M, N, Z) {
    return N && p(M.prototype, N), M;
  }
  function S(M, N) {
    if (typeof N != "function" && N !== null)
      throw new TypeError("Super expression must either be null or a function");
    M.prototype = Object.create(N && N.prototype, { constructor: { value: M, writable: true, configurable: true } }), N && d(M, N);
  }
  function d(M, N) {
    return d = Object.setPrototypeOf || function(D, L) {
      return D.__proto__ = L, D;
    }, d(M, N);
  }
  function b(M) {
    var N = _();
    return function() {
      var D = R(M), L;
      if (N) {
        var B = R(this).constructor;
        L = Reflect.construct(D, arguments, B);
      } else
        L = D.apply(this, arguments);
      return h(this, L);
    };
  }
  function h(M, N) {
    return N && (m(N) === "object" || typeof N == "function") ? N : x(M);
  }
  function x(M) {
    if (M === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return M;
  }
  function _() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return false;
    if (typeof Proxy == "function") return true;
    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      })), true;
    } catch {
      return false;
    }
  }
  function R(M) {
    return R = Object.setPrototypeOf ? Object.getPrototypeOf : function(Z) {
      return Z.__proto__ || Object.getPrototypeOf(Z);
    }, R(M);
  }
  function O(M, N, Z) {
    return N in M ? Object.defineProperty(M, N, { value: Z, enumerable: true, configurable: true, writable: true }) : M[N] = Z, M;
  }
  var C = function(N) {
    return N.hasOwnProperty("key");
  }, W = /* @__PURE__ */ (function(M) {
    S(Z, M);
    var N = b(Z);
    function Z(D) {
      var L;
      return v(this, Z), L = N.call(this, D), O(x(L), "itemsWrapperRef", void 0), O(x(L), "itemsListRef", void 0), O(x(L), "thumbsRef", void 0), O(x(L), "setItemsWrapperRef", function(B) {
        L.itemsWrapperRef = B;
      }), O(x(L), "setItemsListRef", function(B) {
        L.itemsListRef = B;
      }), O(x(L), "setThumbsRef", function(B, H) {
        L.thumbsRef || (L.thumbsRef = []), L.thumbsRef[H] = B;
      }), O(x(L), "updateSizes", function() {
        if (!(!L.props.children || !L.itemsWrapperRef || !L.thumbsRef)) {
          var B = e3.Children.count(L.props.children), H = L.itemsWrapperRef.clientWidth, k = L.props.thumbWidth ? L.props.thumbWidth : (0, r.outerWidth)(L.thumbsRef[0]), X = Math.floor(H / k), V = X < B, ee = V ? B - X : 0;
          L.setState(function(fe, q) {
            return {
              itemSize: k,
              visibleItems: X,
              firstItem: V ? L.getFirstItem(q.selectedItem) : 0,
              lastPosition: ee,
              showArrows: V
            };
          });
        }
      }), O(x(L), "handleClickItem", function(B, H, k) {
        if (!C(k) || k.key === "Enter") {
          var X = L.props.onSelectItem;
          typeof X == "function" && X(B, H);
        }
      }), O(x(L), "onSwipeStart", function() {
        L.setState({
          swiping: true
        });
      }), O(x(L), "onSwipeEnd", function() {
        L.setState({
          swiping: false
        });
      }), O(x(L), "onSwipeMove", function(B) {
        var H = B.x;
        if (!L.state.itemSize || !L.itemsWrapperRef || !L.state.visibleItems)
          return false;
        var k = 0, X = e3.Children.count(L.props.children), V = -(L.state.firstItem * 100) / L.state.visibleItems, ee = Math.max(X - L.state.visibleItems, 0), fe = -ee * 100 / L.state.visibleItems;
        V === k && H > 0 && (H = 0), V === fe && H < 0 && (H = 0);
        var q = L.itemsWrapperRef.clientWidth, J = V + 100 / (q / H);
        return L.itemsListRef && ["WebkitTransform", "MozTransform", "MsTransform", "OTransform", "transform", "msTransform"].forEach(function(oe) {
          L.itemsListRef.style[oe] = (0, i.default)(J, "%", L.props.axis);
        }), true;
      }), O(x(L), "slideRight", function(B) {
        L.moveTo(L.state.firstItem - (typeof B == "number" ? B : 1));
      }), O(x(L), "slideLeft", function(B) {
        L.moveTo(L.state.firstItem + (typeof B == "number" ? B : 1));
      }), O(x(L), "moveTo", function(B) {
        B = B < 0 ? 0 : B, B = B >= L.state.lastPosition ? L.state.lastPosition : B, L.setState({
          firstItem: B
        });
      }), L.state = {
        selectedItem: D.selectedItem,
        swiping: false,
        showArrows: false,
        firstItem: 0,
        visibleItems: 0,
        lastPosition: 0
      }, L;
    }
    return w(Z, [{
      key: "componentDidMount",
      value: function() {
        this.setupThumbs();
      }
    }, {
      key: "componentDidUpdate",
      value: function(L) {
        this.props.selectedItem !== this.state.selectedItem && this.setState({
          selectedItem: this.props.selectedItem,
          firstItem: this.getFirstItem(this.props.selectedItem)
        }), this.props.children !== L.children && this.updateSizes();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.destroyThumbs();
      }
    }, {
      key: "setupThumbs",
      value: function() {
        (0, s.default)().addEventListener("resize", this.updateSizes), (0, s.default)().addEventListener("DOMContentLoaded", this.updateSizes), this.updateSizes();
      }
    }, {
      key: "destroyThumbs",
      value: function() {
        (0, s.default)().removeEventListener("resize", this.updateSizes), (0, s.default)().removeEventListener("DOMContentLoaded", this.updateSizes);
      }
    }, {
      key: "getFirstItem",
      value: function(L) {
        var B = L;
        return L >= this.state.lastPosition && (B = this.state.lastPosition), L < this.state.firstItem + this.state.visibleItems && (B = this.state.firstItem), L < this.state.firstItem && (B = L), B;
      }
    }, {
      key: "renderItems",
      value: function() {
        var L = this;
        return this.props.children.map(function(B, H) {
          var k = t.default.ITEM(false, H === L.state.selectedItem), X = {
            key: H,
            ref: function(ee) {
              return L.setThumbsRef(ee, H);
            },
            className: k,
            onClick: L.handleClickItem.bind(L, H, L.props.children[H]),
            onKeyDown: L.handleClickItem.bind(L, H, L.props.children[H]),
            "aria-label": "".concat(L.props.labels.item, " ").concat(H + 1),
            style: {
              width: L.props.thumbWidth
            }
          };
          return /* @__PURE__ */ e3.default.createElement("li", g({}, X, {
            role: "button",
            tabIndex: 0
          }), B);
        });
      }
    }, {
      key: "render",
      value: function() {
        var L = this;
        if (!this.props.children)
          return null;
        var B = e3.Children.count(this.props.children) > 1, H = this.state.showArrows && this.state.firstItem > 0, k = this.state.showArrows && this.state.firstItem < this.state.lastPosition, X = {}, V = -this.state.firstItem * (this.state.itemSize || 0), ee = (0, i.default)(V, "px", this.props.axis), fe = this.props.transitionTime + "ms";
        return X = {
          WebkitTransform: ee,
          MozTransform: ee,
          MsTransform: ee,
          OTransform: ee,
          transform: ee,
          msTransform: ee,
          WebkitTransitionDuration: fe,
          MozTransitionDuration: fe,
          MsTransitionDuration: fe,
          OTransitionDuration: fe,
          transitionDuration: fe,
          msTransitionDuration: fe
        }, /* @__PURE__ */ e3.default.createElement("div", {
          className: t.default.CAROUSEL(false)
        }, /* @__PURE__ */ e3.default.createElement("div", {
          className: t.default.WRAPPER(false),
          ref: this.setItemsWrapperRef
        }, /* @__PURE__ */ e3.default.createElement("button", {
          type: "button",
          className: t.default.ARROW_PREV(!H),
          onClick: function() {
            return L.slideRight();
          },
          "aria-label": this.props.labels.leftArrow
        }), B ? /* @__PURE__ */ e3.default.createElement(a.default, {
          tagName: "ul",
          className: t.default.SLIDER(false, this.state.swiping),
          onSwipeLeft: this.slideLeft,
          onSwipeRight: this.slideRight,
          onSwipeMove: this.onSwipeMove,
          onSwipeStart: this.onSwipeStart,
          onSwipeEnd: this.onSwipeEnd,
          style: X,
          innerRef: this.setItemsListRef,
          allowMouseEvents: this.props.emulateTouch
        }, this.renderItems()) : /* @__PURE__ */ e3.default.createElement("ul", {
          className: t.default.SLIDER(false, this.state.swiping),
          ref: function(J) {
            return L.setItemsListRef(J);
          },
          style: X
        }, this.renderItems()), /* @__PURE__ */ e3.default.createElement("button", {
          type: "button",
          className: t.default.ARROW_NEXT(!k),
          onClick: function() {
            return L.slideLeft();
          },
          "aria-label": this.props.labels.rightArrow
        })));
      }
    }]), Z;
  })(e3.Component);
  return po.default = W, O(W, "displayName", "Thumbs"), O(W, "defaultProps", {
    axis: "horizontal",
    labels: {
      leftArrow: "previous slide / item",
      rightArrow: "next slide / item",
      item: "slide item"
    },
    selectedItem: 0,
    thumbWidth: 80,
    transitionTime: 350
  }), po;
}
var mo = {}, qv;
function LP() {
  if (qv) return mo;
  qv = 1, Object.defineProperty(mo, "__esModule", {
    value: true
  }), mo.default = void 0;
  var e3 = function() {
    return document;
  };
  return mo.default = e3, mo;
}
var qt = {}, Zv;
function Km() {
  if (Zv) return qt;
  Zv = 1, Object.defineProperty(qt, "__esModule", {
    value: true
  }), qt.setPosition = qt.getPosition = qt.isKeyboardEvent = qt.defaultStatusFormatter = qt.noop = void 0;
  var e3 = React, t = r(rf());
  function r(f) {
    return f && f.__esModule ? f : { default: f };
  }
  var i = function() {
  };
  qt.noop = i;
  var a = function(m, g) {
    return "".concat(m, " of ").concat(g);
  };
  qt.defaultStatusFormatter = a;
  var s = function(m) {
    return m ? m.hasOwnProperty("key") : false;
  };
  qt.isKeyboardEvent = s;
  var l = function(m, g) {
    if (g.infiniteLoop && ++m, m === 0)
      return 0;
    var v = e3.Children.count(g.children);
    if (g.centerMode && g.axis === "horizontal") {
      var p = -m * g.centerSlidePercentage, w = v - 1;
      return m && (m !== w || g.infiniteLoop) ? p += (100 - g.centerSlidePercentage) / 2 : m === w && (p += 100 - g.centerSlidePercentage), p;
    }
    return -m * 100;
  };
  qt.getPosition = l;
  var c = function(m, g) {
    var v = {};
    return ["WebkitTransform", "MozTransform", "MsTransform", "OTransform", "transform", "msTransform"].forEach(function(p) {
      v[p] = (0, t.default)(m, "%", g);
    }), v;
  };
  return qt.setPosition = c, qt;
}
var mr = {}, Gv;
function MP() {
  if (Gv) return mr;
  Gv = 1, Object.defineProperty(mr, "__esModule", {
    value: true
  }), mr.fadeAnimationHandler = mr.slideStopSwipingHandler = mr.slideSwipeAnimationHandler = mr.slideAnimationHandler = void 0;
  var e3 = React, t = i(rf()), r = Km();
  function i(v) {
    return v && v.__esModule ? v : { default: v };
  }
  function a(v, p) {
    var w = Object.keys(v);
    if (Object.getOwnPropertySymbols) {
      var S = Object.getOwnPropertySymbols(v);
      p && (S = S.filter(function(d) {
        return Object.getOwnPropertyDescriptor(v, d).enumerable;
      })), w.push.apply(w, S);
    }
    return w;
  }
  function s(v) {
    for (var p = 1; p < arguments.length; p++) {
      var w = arguments[p] != null ? arguments[p] : {};
      p % 2 ? a(Object(w), true).forEach(function(S) {
        l(v, S, w[S]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(w)) : a(Object(w)).forEach(function(S) {
        Object.defineProperty(v, S, Object.getOwnPropertyDescriptor(w, S));
      });
    }
    return v;
  }
  function l(v, p, w) {
    return p in v ? Object.defineProperty(v, p, { value: w, enumerable: true, configurable: true, writable: true }) : v[p] = w, v;
  }
  var c = function(p, w) {
    var S = {}, d = w.selectedItem, b = d, h = e3.Children.count(p.children) - 1, x = p.infiniteLoop && (d < 0 || d > h);
    if (x)
      return b < 0 ? p.centerMode && p.centerSlidePercentage && p.axis === "horizontal" ? S.itemListStyle = (0, r.setPosition)(-(h + 2) * p.centerSlidePercentage - (100 - p.centerSlidePercentage) / 2, p.axis) : S.itemListStyle = (0, r.setPosition)(-(h + 2) * 100, p.axis) : b > h && (S.itemListStyle = (0, r.setPosition)(0, p.axis)), S;
    var _ = (0, r.getPosition)(d, p), R = (0, t.default)(_, "%", p.axis), O = p.transitionTime + "ms";
    return S.itemListStyle = {
      WebkitTransform: R,
      msTransform: R,
      OTransform: R,
      transform: R
    }, w.swiping || (S.itemListStyle = s(s({}, S.itemListStyle), {}, {
      WebkitTransitionDuration: O,
      MozTransitionDuration: O,
      OTransitionDuration: O,
      transitionDuration: O,
      msTransitionDuration: O
    })), S;
  };
  mr.slideAnimationHandler = c;
  var f = function(p, w, S, d) {
    var b = {}, h = w.axis === "horizontal", x = e3.Children.count(w.children), _ = 0, R = (0, r.getPosition)(S.selectedItem, w), O = w.infiniteLoop ? (0, r.getPosition)(x - 1, w) - 100 : (0, r.getPosition)(x - 1, w), C = h ? p.x : p.y, W = C;
    R === _ && C > 0 && (W = 0), R === O && C < 0 && (W = 0);
    var M = R + 100 / (S.itemSize / W), N = Math.abs(C) > w.swipeScrollTolerance;
    return w.infiniteLoop && N && (S.selectedItem === 0 && M > -100 ? M -= x * 100 : S.selectedItem === x - 1 && M < -x * 100 && (M += x * 100)), (!w.preventMovementUntilSwipeScrollTolerance || N || S.swipeMovementStarted) && (S.swipeMovementStarted || d({
      swipeMovementStarted: true
    }), b.itemListStyle = (0, r.setPosition)(M, w.axis)), N && !S.cancelClick && d({
      cancelClick: true
    }), b;
  };
  mr.slideSwipeAnimationHandler = f;
  var m = function(p, w) {
    var S = (0, r.getPosition)(w.selectedItem, p), d = (0, r.setPosition)(S, p.axis);
    return {
      itemListStyle: d
    };
  };
  mr.slideStopSwipingHandler = m;
  var g = function(p, w) {
    var S = p.transitionTime + "ms", d = "ease-in-out", b = {
      position: "absolute",
      display: "block",
      zIndex: -2,
      minHeight: "100%",
      opacity: 0,
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      transitionTimingFunction: d,
      msTransitionTimingFunction: d,
      MozTransitionTimingFunction: d,
      WebkitTransitionTimingFunction: d,
      OTransitionTimingFunction: d
    };
    return w.swiping || (b = s(s({}, b), {}, {
      WebkitTransitionDuration: S,
      MozTransitionDuration: S,
      OTransitionDuration: S,
      transitionDuration: S,
      msTransitionDuration: S
    })), {
      slideStyle: b,
      selectedStyle: s(s({}, b), {}, {
        opacity: 1,
        position: "relative"
      }),
      prevStyle: s({}, b)
    };
  };
  return mr.fadeAnimationHandler = g, mr;
}
var Kv;
function NP() {
  if (Kv) return co;
  Kv = 1, Object.defineProperty(co, "__esModule", {
    value: true
  }), co.default = void 0;
  var e3 = g(React), t = f(Hm()), r = f(qm()), i = f(Gm()), a = f(LP()), s = f(Zm()), l = Km(), c = MP();
  function f(D) {
    return D && D.__esModule ? D : { default: D };
  }
  function m() {
    if (typeof WeakMap != "function") return null;
    var D = /* @__PURE__ */ new WeakMap();
    return m = function() {
      return D;
    }, D;
  }
  function g(D) {
    if (D && D.__esModule)
      return D;
    if (D === null || v(D) !== "object" && typeof D != "function")
      return { default: D };
    var L = m();
    if (L && L.has(D))
      return L.get(D);
    var B = {}, H = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var k in D)
      if (Object.prototype.hasOwnProperty.call(D, k)) {
        var X = H ? Object.getOwnPropertyDescriptor(D, k) : null;
        X && (X.get || X.set) ? Object.defineProperty(B, k, X) : B[k] = D[k];
      }
    return B.default = D, L && L.set(D, B), B;
  }
  function v(D) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? v = function(B) {
      return typeof B;
    } : v = function(B) {
      return B && typeof Symbol == "function" && B.constructor === Symbol && B !== Symbol.prototype ? "symbol" : typeof B;
    }, v(D);
  }
  function p() {
    return p = Object.assign || function(D) {
      for (var L = 1; L < arguments.length; L++) {
        var B = arguments[L];
        for (var H in B)
          Object.prototype.hasOwnProperty.call(B, H) && (D[H] = B[H]);
      }
      return D;
    }, p.apply(this, arguments);
  }
  function w(D, L) {
    var B = Object.keys(D);
    if (Object.getOwnPropertySymbols) {
      var H = Object.getOwnPropertySymbols(D);
      L && (H = H.filter(function(k) {
        return Object.getOwnPropertyDescriptor(D, k).enumerable;
      })), B.push.apply(B, H);
    }
    return B;
  }
  function S(D) {
    for (var L = 1; L < arguments.length; L++) {
      var B = arguments[L] != null ? arguments[L] : {};
      L % 2 ? w(Object(B), true).forEach(function(H) {
        N(D, H, B[H]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(D, Object.getOwnPropertyDescriptors(B)) : w(Object(B)).forEach(function(H) {
        Object.defineProperty(D, H, Object.getOwnPropertyDescriptor(B, H));
      });
    }
    return D;
  }
  function d(D, L) {
    if (!(D instanceof L))
      throw new TypeError("Cannot call a class as a function");
  }
  function b(D, L) {
    for (var B = 0; B < L.length; B++) {
      var H = L[B];
      H.enumerable = H.enumerable || false, H.configurable = true, "value" in H && (H.writable = true), Object.defineProperty(D, H.key, H);
    }
  }
  function h(D, L, B) {
    return L && b(D.prototype, L), D;
  }
  function x(D, L) {
    if (typeof L != "function" && L !== null)
      throw new TypeError("Super expression must either be null or a function");
    D.prototype = Object.create(L && L.prototype, { constructor: { value: D, writable: true, configurable: true } }), L && _(D, L);
  }
  function _(D, L) {
    return _ = Object.setPrototypeOf || function(H, k) {
      return H.__proto__ = k, H;
    }, _(D, L);
  }
  function R(D) {
    var L = W();
    return function() {
      var H = M(D), k;
      if (L) {
        var X = M(this).constructor;
        k = Reflect.construct(H, arguments, X);
      } else
        k = H.apply(this, arguments);
      return O(this, k);
    };
  }
  function O(D, L) {
    return L && (v(L) === "object" || typeof L == "function") ? L : C(D);
  }
  function C(D) {
    if (D === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return D;
  }
  function W() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return false;
    if (typeof Proxy == "function") return true;
    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      })), true;
    } catch {
      return false;
    }
  }
  function M(D) {
    return M = Object.setPrototypeOf ? Object.getPrototypeOf : function(B) {
      return B.__proto__ || Object.getPrototypeOf(B);
    }, M(D);
  }
  function N(D, L, B) {
    return L in D ? Object.defineProperty(D, L, { value: B, enumerable: true, configurable: true, writable: true }) : D[L] = B, D;
  }
  var Z = /* @__PURE__ */ (function(D) {
    x(B, D);
    var L = R(B);
    function B(H) {
      var k;
      d(this, B), k = L.call(this, H), N(C(k), "thumbsRef", void 0), N(C(k), "carouselWrapperRef", void 0), N(C(k), "listRef", void 0), N(C(k), "itemsRef", void 0), N(C(k), "timer", void 0), N(C(k), "animationHandler", void 0), N(C(k), "setThumbsRef", function(V) {
        k.thumbsRef = V;
      }), N(C(k), "setCarouselWrapperRef", function(V) {
        k.carouselWrapperRef = V;
      }), N(C(k), "setListRef", function(V) {
        k.listRef = V;
      }), N(C(k), "setItemsRef", function(V, ee) {
        k.itemsRef || (k.itemsRef = []), k.itemsRef[ee] = V;
      }), N(C(k), "autoPlay", function() {
        e3.Children.count(k.props.children) <= 1 || (k.clearAutoPlay(), k.props.autoPlay && (k.timer = setTimeout(function() {
          k.increment();
        }, k.props.interval)));
      }), N(C(k), "clearAutoPlay", function() {
        k.timer && clearTimeout(k.timer);
      }), N(C(k), "resetAutoPlay", function() {
        k.clearAutoPlay(), k.autoPlay();
      }), N(C(k), "stopOnHover", function() {
        k.setState({
          isMouseEntered: true
        }, k.clearAutoPlay);
      }), N(C(k), "startOnLeave", function() {
        k.setState({
          isMouseEntered: false
        }, k.autoPlay);
      }), N(C(k), "isFocusWithinTheCarousel", function() {
        return k.carouselWrapperRef ? !!((0, a.default)().activeElement === k.carouselWrapperRef || k.carouselWrapperRef.contains((0, a.default)().activeElement)) : false;
      }), N(C(k), "navigateWithKeyboard", function(V) {
        if (k.isFocusWithinTheCarousel()) {
          var ee = k.props.axis, fe = ee === "horizontal", q = {
            ArrowUp: 38,
            ArrowRight: 39,
            ArrowDown: 40,
            ArrowLeft: 37
          }, J = fe ? q.ArrowRight : q.ArrowDown, oe = fe ? q.ArrowLeft : q.ArrowUp;
          J === V.keyCode ? k.increment() : oe === V.keyCode && k.decrement();
        }
      }), N(C(k), "updateSizes", function() {
        if (!(!k.state.initialized || !k.itemsRef || k.itemsRef.length === 0)) {
          var V = k.props.axis === "horizontal", ee = k.itemsRef[0];
          if (ee) {
            var fe = V ? ee.clientWidth : ee.clientHeight;
            k.setState({
              itemSize: fe
            }), k.thumbsRef && k.thumbsRef.updateSizes();
          }
        }
      }), N(C(k), "setMountState", function() {
        k.setState({
          hasMount: true
        }), k.updateSizes();
      }), N(C(k), "handleClickItem", function(V, ee) {
        if (e3.Children.count(k.props.children) !== 0) {
          if (k.state.cancelClick) {
            k.setState({
              cancelClick: false
            });
            return;
          }
          k.props.onClickItem(V, ee), V !== k.state.selectedItem && k.setState({
            selectedItem: V
          });
        }
      }), N(C(k), "handleOnChange", function(V, ee) {
        e3.Children.count(k.props.children) <= 1 || k.props.onChange(V, ee);
      }), N(C(k), "handleClickThumb", function(V, ee) {
        k.props.onClickThumb(V, ee), k.moveTo(V);
      }), N(C(k), "onSwipeStart", function(V) {
        k.setState({
          swiping: true
        }), k.props.onSwipeStart(V);
      }), N(C(k), "onSwipeEnd", function(V) {
        k.setState({
          swiping: false,
          cancelClick: false,
          swipeMovementStarted: false
        }), k.props.onSwipeEnd(V), k.clearAutoPlay(), k.state.autoPlay && k.autoPlay();
      }), N(C(k), "onSwipeMove", function(V, ee) {
        k.props.onSwipeMove(ee);
        var fe = k.props.swipeAnimationHandler(V, k.props, k.state, k.setState.bind(C(k)));
        return k.setState(S({}, fe)), !!Object.keys(fe).length;
      }), N(C(k), "decrement", function() {
        var V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
        k.moveTo(k.state.selectedItem - (typeof V == "number" ? V : 1));
      }), N(C(k), "increment", function() {
        var V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
        k.moveTo(k.state.selectedItem + (typeof V == "number" ? V : 1));
      }), N(C(k), "moveTo", function(V) {
        if (typeof V == "number") {
          var ee = e3.Children.count(k.props.children) - 1;
          V < 0 && (V = k.props.infiniteLoop ? ee : 0), V > ee && (V = k.props.infiniteLoop ? 0 : ee), k.selectItem({
            // if it's not a slider, we don't need to set position here
            selectedItem: V
          }), k.state.autoPlay && k.state.isMouseEntered === false && k.resetAutoPlay();
        }
      }), N(C(k), "onClickNext", function() {
        k.increment(1);
      }), N(C(k), "onClickPrev", function() {
        k.decrement(1);
      }), N(C(k), "onSwipeForward", function() {
        k.increment(1), k.props.emulateTouch && k.setState({
          cancelClick: true
        });
      }), N(C(k), "onSwipeBackwards", function() {
        k.decrement(1), k.props.emulateTouch && k.setState({
          cancelClick: true
        });
      }), N(C(k), "changeItem", function(V) {
        return function(ee) {
          (!(0, l.isKeyboardEvent)(ee) || ee.key === "Enter") && k.moveTo(V);
        };
      }), N(C(k), "selectItem", function(V) {
        k.setState(S({
          previousItem: k.state.selectedItem
        }, V), function() {
          k.setState(k.animationHandler(k.props, k.state));
        }), k.handleOnChange(V.selectedItem, e3.Children.toArray(k.props.children)[V.selectedItem]);
      }), N(C(k), "getInitialImage", function() {
        var V = k.props.selectedItem, ee = k.itemsRef && k.itemsRef[V], fe = ee && ee.getElementsByTagName("img") || [];
        return fe[0];
      }), N(C(k), "getVariableItemHeight", function(V) {
        var ee = k.itemsRef && k.itemsRef[V];
        if (k.state.hasMount && ee && ee.children.length) {
          var fe = ee.children[0].getElementsByTagName("img") || [];
          if (fe.length > 0) {
            var q = fe[0];
            if (!q.complete) {
              var J = function re() {
                k.forceUpdate(), q.removeEventListener("load", re);
              };
              q.addEventListener("load", J);
            }
          }
          var oe = fe[0] || ee.children[0], se = oe.clientHeight;
          return se > 0 ? se : null;
        }
        return null;
      });
      var X = {
        initialized: false,
        previousItem: H.selectedItem,
        selectedItem: H.selectedItem,
        hasMount: false,
        isMouseEntered: false,
        autoPlay: H.autoPlay,
        swiping: false,
        swipeMovementStarted: false,
        cancelClick: false,
        itemSize: 1,
        itemListStyle: {},
        slideStyle: {},
        selectedStyle: {},
        prevStyle: {}
      };
      return k.animationHandler = typeof H.animationHandler == "function" && H.animationHandler || H.animationHandler === "fade" && c.fadeAnimationHandler || c.slideAnimationHandler, k.state = S(S({}, X), k.animationHandler(H, X)), k;
    }
    return h(B, [{
      key: "componentDidMount",
      value: function() {
        this.props.children && this.setupCarousel();
      }
    }, {
      key: "componentDidUpdate",
      value: function(k, X) {
        !k.children && this.props.children && !this.state.initialized && this.setupCarousel(), !k.autoFocus && this.props.autoFocus && this.forceFocus(), X.swiping && !this.state.swiping && this.setState(S({}, this.props.stopSwipingHandler(this.props, this.state))), (k.selectedItem !== this.props.selectedItem || k.centerMode !== this.props.centerMode) && (this.updateSizes(), this.moveTo(this.props.selectedItem)), k.autoPlay !== this.props.autoPlay && (this.props.autoPlay ? this.setupAutoPlay() : this.destroyAutoPlay(), this.setState({
          autoPlay: this.props.autoPlay
        }));
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.destroyCarousel();
      }
    }, {
      key: "setupCarousel",
      value: function() {
        var k = this;
        this.bindEvents(), this.state.autoPlay && e3.Children.count(this.props.children) > 1 && this.setupAutoPlay(), this.props.autoFocus && this.forceFocus(), this.setState({
          initialized: true
        }, function() {
          var X = k.getInitialImage();
          X && !X.complete ? X.addEventListener("load", k.setMountState) : k.setMountState();
        });
      }
    }, {
      key: "destroyCarousel",
      value: function() {
        this.state.initialized && (this.unbindEvents(), this.destroyAutoPlay());
      }
    }, {
      key: "setupAutoPlay",
      value: function() {
        this.autoPlay();
        var k = this.carouselWrapperRef;
        this.props.stopOnHover && k && (k.addEventListener("mouseenter", this.stopOnHover), k.addEventListener("mouseleave", this.startOnLeave));
      }
    }, {
      key: "destroyAutoPlay",
      value: function() {
        this.clearAutoPlay();
        var k = this.carouselWrapperRef;
        this.props.stopOnHover && k && (k.removeEventListener("mouseenter", this.stopOnHover), k.removeEventListener("mouseleave", this.startOnLeave));
      }
    }, {
      key: "bindEvents",
      value: function() {
        (0, s.default)().addEventListener("resize", this.updateSizes), (0, s.default)().addEventListener("DOMContentLoaded", this.updateSizes), this.props.useKeyboardArrows && (0, a.default)().addEventListener("keydown", this.navigateWithKeyboard);
      }
    }, {
      key: "unbindEvents",
      value: function() {
        (0, s.default)().removeEventListener("resize", this.updateSizes), (0, s.default)().removeEventListener("DOMContentLoaded", this.updateSizes);
        var k = this.getInitialImage();
        k && k.removeEventListener("load", this.setMountState), this.props.useKeyboardArrows && (0, a.default)().removeEventListener("keydown", this.navigateWithKeyboard);
      }
    }, {
      key: "forceFocus",
      value: function() {
        var k;
        (k = this.carouselWrapperRef) === null || k === void 0 || k.focus();
      }
    }, {
      key: "renderItems",
      value: function(k) {
        var X = this;
        return this.props.children ? e3.Children.map(this.props.children, function(V, ee) {
          var fe = ee === X.state.selectedItem, q = ee === X.state.previousItem, J = fe && X.state.selectedStyle || q && X.state.prevStyle || X.state.slideStyle || {};
          X.props.centerMode && X.props.axis === "horizontal" && (J = S(S({}, J), {}, {
            minWidth: X.props.centerSlidePercentage + "%"
          })), X.state.swiping && X.state.swipeMovementStarted && (J = S(S({}, J), {}, {
            pointerEvents: "none"
          }));
          var oe = {
            ref: function(re) {
              return X.setItemsRef(re, ee);
            },
            key: "itemKey" + ee + (k ? "clone" : ""),
            className: r.default.ITEM(true, ee === X.state.selectedItem, ee === X.state.previousItem),
            onClick: X.handleClickItem.bind(X, ee, V),
            style: J
          };
          return /* @__PURE__ */ e3.default.createElement("li", oe, X.props.renderItem(V, {
            isSelected: ee === X.state.selectedItem,
            isPrevious: ee === X.state.previousItem
          }));
        }) : [];
      }
    }, {
      key: "renderControls",
      value: function() {
        var k = this, X = this.props, V = X.showIndicators, ee = X.labels, fe = X.renderIndicator, q = X.children;
        return V ? /* @__PURE__ */ e3.default.createElement("ul", {
          className: "control-dots"
        }, e3.Children.map(q, function(J, oe) {
          return fe && fe(k.changeItem(oe), oe === k.state.selectedItem, oe, ee.item);
        })) : null;
      }
    }, {
      key: "renderStatus",
      value: function() {
        return this.props.showStatus ? /* @__PURE__ */ e3.default.createElement("p", {
          className: "carousel-status"
        }, this.props.statusFormatter(this.state.selectedItem + 1, e3.Children.count(this.props.children))) : null;
      }
    }, {
      key: "renderThumbs",
      value: function() {
        return !this.props.showThumbs || !this.props.children || e3.Children.count(this.props.children) === 0 ? null : /* @__PURE__ */ e3.default.createElement(i.default, {
          ref: this.setThumbsRef,
          onSelectItem: this.handleClickThumb,
          selectedItem: this.state.selectedItem,
          transitionTime: this.props.transitionTime,
          thumbWidth: this.props.thumbWidth,
          labels: this.props.labels,
          emulateTouch: this.props.emulateTouch
        }, this.props.renderThumbs(this.props.children));
      }
    }, {
      key: "render",
      value: function() {
        var k = this;
        if (!this.props.children || e3.Children.count(this.props.children) === 0)
          return null;
        var X = this.props.swipeable && e3.Children.count(this.props.children) > 1, V = this.props.axis === "horizontal", ee = this.props.showArrows && e3.Children.count(this.props.children) > 1, fe = ee && (this.state.selectedItem > 0 || this.props.infiniteLoop) || false, q = ee && (this.state.selectedItem < e3.Children.count(this.props.children) - 1 || this.props.infiniteLoop) || false, J = this.renderItems(true), oe = J.shift(), se = J.pop(), re = {
          className: r.default.SLIDER(true, this.state.swiping),
          onSwipeMove: this.onSwipeMove,
          onSwipeStart: this.onSwipeStart,
          onSwipeEnd: this.onSwipeEnd,
          style: this.state.itemListStyle,
          tolerance: this.props.swipeScrollTolerance
        }, le = {};
        if (V) {
          if (re.onSwipeLeft = this.onSwipeForward, re.onSwipeRight = this.onSwipeBackwards, this.props.dynamicHeight) {
            var ce = this.getVariableItemHeight(this.state.selectedItem);
            le.height = ce || "auto";
          }
        } else
          re.onSwipeUp = this.props.verticalSwipe === "natural" ? this.onSwipeBackwards : this.onSwipeForward, re.onSwipeDown = this.props.verticalSwipe === "natural" ? this.onSwipeForward : this.onSwipeBackwards, re.style = S(S({}, re.style), {}, {
            height: this.state.itemSize
          }), le.height = this.state.itemSize;
        return /* @__PURE__ */ e3.default.createElement("div", {
          "aria-label": this.props.ariaLabel,
          className: r.default.ROOT(this.props.className),
          ref: this.setCarouselWrapperRef,
          tabIndex: this.props.useKeyboardArrows ? 0 : void 0
        }, /* @__PURE__ */ e3.default.createElement("div", {
          className: r.default.CAROUSEL(true),
          style: {
            width: this.props.width
          }
        }, this.renderControls(), this.props.renderArrowPrev(this.onClickPrev, fe, this.props.labels.leftArrow), /* @__PURE__ */ e3.default.createElement("div", {
          className: r.default.WRAPPER(true, this.props.axis),
          style: le
        }, X ? /* @__PURE__ */ e3.default.createElement(t.default, p({
          tagName: "ul",
          innerRef: this.setListRef
        }, re, {
          allowMouseEvents: this.props.emulateTouch
        }), this.props.infiniteLoop && se, this.renderItems(), this.props.infiniteLoop && oe) : /* @__PURE__ */ e3.default.createElement("ul", {
          className: r.default.SLIDER(true, this.state.swiping),
          ref: function(ve) {
            return k.setListRef(ve);
          },
          style: this.state.itemListStyle || {}
        }, this.props.infiniteLoop && se, this.renderItems(), this.props.infiniteLoop && oe)), this.props.renderArrowNext(this.onClickNext, q, this.props.labels.rightArrow), this.renderStatus()), this.renderThumbs());
      }
    }]), B;
  })(e3.default.Component);
  return co.default = Z, N(Z, "displayName", "Carousel"), N(Z, "defaultProps", {
    ariaLabel: void 0,
    axis: "horizontal",
    centerSlidePercentage: 80,
    interval: 3e3,
    labels: {
      leftArrow: "previous slide / item",
      rightArrow: "next slide / item",
      item: "slide item"
    },
    onClickItem: l.noop,
    onClickThumb: l.noop,
    onChange: l.noop,
    onSwipeStart: function() {
    },
    onSwipeEnd: function() {
    },
    onSwipeMove: function() {
      return false;
    },
    preventMovementUntilSwipeScrollTolerance: false,
    renderArrowPrev: function(L, B, H) {
      return /* @__PURE__ */ e3.default.createElement("button", {
        type: "button",
        "aria-label": H,
        className: r.default.ARROW_PREV(!B),
        onClick: L
      });
    },
    renderArrowNext: function(L, B, H) {
      return /* @__PURE__ */ e3.default.createElement("button", {
        type: "button",
        "aria-label": H,
        className: r.default.ARROW_NEXT(!B),
        onClick: L
      });
    },
    renderIndicator: function(L, B, H, k) {
      return /* @__PURE__ */ e3.default.createElement("li", {
        className: r.default.DOT(B),
        onClick: L,
        onKeyDown: L,
        value: H,
        key: H,
        role: "button",
        tabIndex: 0,
        "aria-label": "".concat(k, " ").concat(H + 1)
      });
    },
    renderItem: function(L) {
      return L;
    },
    renderThumbs: function(L) {
      var B = e3.Children.map(L, function(H) {
        var k = H;
        if (H.type !== "img" && (k = e3.Children.toArray(H.props.children).find(function(X) {
          return X.type === "img";
        })), !!k)
          return k;
      });
      return B.filter(function(H) {
        return H;
      }).length === 0 ? (console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"), []) : B;
    },
    statusFormatter: l.defaultStatusFormatter,
    selectedItem: 0,
    showArrows: true,
    showIndicators: true,
    showStatus: true,
    showThumbs: true,
    stopOnHover: true,
    swipeScrollTolerance: 5,
    swipeable: true,
    transitionTime: 350,
    verticalSwipe: "standard",
    width: "100%",
    animationHandler: "slide",
    swipeAnimationHandler: c.slideSwipeAnimationHandler,
    stopSwipingHandler: c.slideStopSwipingHandler
  }), co;
}
var Vv = {};
function FP() {
  return Vv;
}
var Xv;
function DP() {
  return Xv || (Xv = 1, (function(e3) {
    Object.defineProperty(e3, "__esModule", {
      value: true
    }), Object.defineProperty(e3, "Carousel", {
      enumerable: true,
      get: function() {
        return t.default;
      }
    }), Object.defineProperty(e3, "CarouselProps", {
      enumerable: true,
      get: function() {
        return r.CarouselProps;
      }
    }), Object.defineProperty(e3, "Thumbs", {
      enumerable: true,
      get: function() {
        return i.default;
      }
    });
    var t = a(NP()), r = FP(), i = a(Gm());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
  })(Wl)), Wl;
}
var zP = DP();
const WP = ({ tip: e3 }) => /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "h-full grid pb-8 px-8 place-content-center", children: Vm(e3, true) }), BP = ({ pages: e3 }) => /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "min-h-[10rem] w-96", children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  zP.Carousel,
  {
    autoPlay: false,
    infiniteLoop: true,
    showThumbs: false,
    showArrows: true,
    showStatus: false,
    children: e3 && e3.map((t) => /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(WP, { tip: t }, t.key))
  }
) }), UP = ({ body: e3, isInsideCarousel: t }) => /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  "article",
  {
    className: je([
      "prose prose-sm max-h-[10rem] overflow-auto p-1  px-2 text-left text-[12px] text-grey-100 ",
      {
        "w-60": !t
      }
    ]),
    children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      gs,
      {
        children: e3,
        options: {
          overrides: {
            a: {
              component: ({ children: r, ...i }) => /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
                "a",
                {
                  ...i,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-start text-primary-dark",
                  children: [
                    r,
                    /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(i3, { className: "ml-1 mt-px h-4 w-4" })
                  ]
                }
              )
            }
          }
        }
      }
    )
  }
), jP = ({
  video: e3,
  body: t,
  title: r,
  isInsideCarousel: i
}) => /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
  "div",
  {
    className: je([
      {
        "flex flex-row": !i,
        "flex max-h-[10rem] flex-col overflow-y-auto": i
      }
    ]),
    children: [
      /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "div",
        {
          className: je([
            {
              "mr-1": !i,
              "mb-1": i
            }
          ]),
          children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            "iframe",
            {
              height: i ? "auto" : 90,
              width: i ? "100%" : 160,
              src: e3 == null ? void 0 : e3.link,
              title: r,
              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
              allowFullScreen: true
            }
          )
        }
      ),
      /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "article",
        {
          className: je([
            "prose prose-sm p-1 text-left text-xs text-grey-100",
            {
              "w-60 overflow-auto": !i,
              "-mt-6": i
            }
          ]),
          children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            gs,
            {
              children: t || "",
              options: {
                overrides: {
                  a: {
                    component: ({ children: a, ...s }) => /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
                      "a",
                      {
                        ...s,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex items-start",
                        children: [
                          a,
                          /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(i3, { className: "ml-1 mt-px h-4 w-4" })
                        ]
                      }
                    )
                  }
                }
              }
            }
          )
        }
      )
    ]
  }
), Vm = (e3, t) => {
  switch (e3.type) {
    case ds.TEXT:
      return /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(UP, { body: e3.body, isInsideCarousel: t });
    case ds.VIDEO:
      return /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        jP,
        {
          video: e3.video,
          body: e3.body,
          title: e3.title,
          isInsideCarousel: t
        }
      );
    case ds.CAROUSEL:
      return /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(BP, { pages: e3.pages });
  }
}, Ym = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createContext(void 0);
function Jv(e3, t) {
  const r = [];
  return e3.forEach((i) => {
    i.key === t && r.push(i);
  }), r;
}
const Z2 = ({
  children: e3,
  enabled: t,
  baseUrl: r = "https://raw.githubusercontent.com/4d/Web-studio-TIPS/main"
}) => {
  const [{ tips: i, show: a }, s] = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState({
    tips: {},
    show: true
  });
  qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect(() => {
    const c = new AbortController();
    try {
      fetch(
        `${r}/tips.json`,
        // 'tips.json',
        { signal: c.signal }
      ).then((f) => f.json()).then((f) => {
        const m = f.reduce((g, v) => Jv(f, v.key).length > 1 ? {
          ...g,
          [v.key]: {
            type: "carousel",
            pages: Jv(f, v.key)
          }
        } : {
          ...g,
          [v.key]: v
        }, {});
        s((g) => ({ ...g, tips: m }));
      });
    } catch {
    }
    return () => {
      c.abort();
    };
  }, []);
  const l = () => {
    s((c) => ({ ...c, show: !a }));
  };
  return /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Ym.Provider, { value: { tips: i, toggleTips: l, show: a, enabled: t }, children: e3 });
}, HP = (e3) => {
  const t = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useContext(Ym);
  if (t === void 0)
    throw new Error("useTip must be used within a TipsContext");
  return {
    tip: e3 ? t.tips[e3] : null,
    toggleTips: t.toggleTips,
    show: t.show,
    enabled: t.enabled
  };
}, qP = ms(_P)`
  &[data-state='open'] > * {
    display: block !important;
  }
`, ZP = ({ tipKey: e3, side: t = "right", alwaysOn: r, asButton: i = false }) => {
  const { tip: a, enabled: s } = HP(e3), [l, c] = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState(false), f = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(null);
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect(() => {
    if (f.current) {
      const m = new IntersectionObserver((g) => {
        g[0].isIntersecting || c(false);
      });
      return m.observe(f.current), () => {
        f.current && m.unobserve(f.current);
      };
    }
  }, []), a && s ? /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(xP, { open: l, onOpenChange: c, children: [
    /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      qP,
      {
        ref: f,
        className: je("focus:outline-none", {
          "rounded p-1 text-gray-100 hover:bg-primary-hover": i
        }),
        onClick: (m) => m.stopPropagation(),
        children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("span", { className: je("group-hover:block", { hidden: !r }), children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(e5, { className: "h-4 w-4 text-yellow-300" }) })
      }
    ),
    /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      EP,
      {
        side: t,
        sideOffset: 5,
        onClick: (m) => m.stopPropagation(),
        children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "relative rounded border border-grey-50 bg-grey-900 p-2 text-xs text-white shadow-2xl", children: Vm(a) })
      }
    )
  ] }) : null;
};
var GP = Object.defineProperty, KP = (e3, t, r) => t in e3 ? GP(e3, t, { enumerable: true, configurable: true, writable: true, value: r }) : e3[t] = r, Gl = (e3, t, r) => (KP(e3, typeof t != "symbol" ? t + "" : t, r), r);
let VP = class {
  constructor() {
    Gl(this, "current", this.detect()), Gl(this, "handoffState", "pending"), Gl(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.handoffState = "pending", this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
}, xi = new VP(), Fr = (e3, t) => {
  xi.isServer ? qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect(e3, t) : qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useLayoutEffect(e3, t);
};
function _i(e3) {
  let t = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(e3);
  return Fr(() => {
    t.current = e3;
  }, [e3]), t;
}
let Ot = function(e3) {
  let t = _i(e3);
  return React.useCallback((...r) => t.current(...r), [t]);
};
function YP(e3, t, r) {
  let [i, a] = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState(r), s = e3 !== void 0, l = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(s), c = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(false), f = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(false);
  return s && !l.current && !c.current ? (c.current = true, l.current = s, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !s && l.current && !f.current && (f.current = true, l.current = s, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [s ? e3 : i, Ot((m) => (s || a(m), t == null ? void 0 : t(m)))];
}
function XP(e3) {
  typeof queueMicrotask == "function" ? queueMicrotask(e3) : Promise.resolve().then(e3).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function qo() {
  let e3 = [], t = { addEventListener(r, i, a, s) {
    return r.addEventListener(i, a, s), t.add(() => r.removeEventListener(i, a, s));
  }, requestAnimationFrame(...r) {
    let i = requestAnimationFrame(...r);
    return t.add(() => cancelAnimationFrame(i));
  }, nextFrame(...r) {
    return t.requestAnimationFrame(() => t.requestAnimationFrame(...r));
  }, setTimeout(...r) {
    let i = setTimeout(...r);
    return t.add(() => clearTimeout(i));
  }, microTask(...r) {
    let i = { current: true };
    return XP(() => {
      i.current && r[0]();
    }), t.add(() => {
      i.current = false;
    });
  }, style(r, i, a) {
    let s = r.style.getPropertyValue(i);
    return Object.assign(r.style, { [i]: a }), this.add(() => {
      Object.assign(r.style, { [i]: s });
    });
  }, group(r) {
    let i = qo();
    return r(i), this.add(() => i.dispose());
  }, add(r) {
    return e3.push(r), () => {
      let i = e3.indexOf(r);
      if (i >= 0) for (let a of e3.splice(i, 1)) a();
    };
  }, dispose() {
    for (let r of e3.splice(0)) r();
  } };
  return t;
}
function nf() {
  let [e3] = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState(qo);
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect(() => () => e3.dispose(), [e3]), e3;
}
function JP() {
  let e3 = typeof document > "u";
  return "useSyncExternalStore" in de ? ((t) => t.useSyncExternalStore)(de)(() => () => {
  }, () => false, () => !e3) : false;
}
function of() {
  let e3 = JP(), [t, r] = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState(xi.isHandoffComplete);
  return t && xi.isHandoffComplete === false && r(false), qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect(() => {
    t !== true && r(true);
  }, [t]), qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect(() => xi.handoff(), []), e3 ? false : t;
}
var Qv;
let af = (Qv = React.useId) != null ? Qv : function() {
  let e3 = of(), [t, r] = React.useState(e3 ? () => xi.nextId() : null);
  return Fr(() => {
    t === null && r(xi.nextId());
  }, [t]), t != null ? "" + t : void 0;
};
function Ir(e3, t, ...r) {
  if (e3 in t) {
    let a = t[e3];
    return typeof a == "function" ? a(...r) : a;
  }
  let i = new Error(`Tried to handle "${e3}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((a) => `"${a}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(i, Ir), i;
}
function eg(e3) {
  var t;
  if (e3.type) return e3.type;
  let r = (t = e3.as) != null ? t : "button";
  if (typeof r == "string" && r.toLowerCase() === "button") return "button";
}
function QP(e3, t) {
  let [r, i] = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState(() => eg(e3));
  return Fr(() => {
    i(eg(e3));
  }, [e3.type, e3.as]), Fr(() => {
    r || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && i("button");
  }, [r, t]), r;
}
let ek = Symbol();
function Zo(...e3) {
  let t = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(e3);
  qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect(() => {
    t.current = e3;
  }, [e3]);
  let r = Ot((i) => {
    for (let a of t.current) a != null && (typeof a == "function" ? a(i) : a.current = i);
  });
  return e3.every((i) => i == null || (i == null ? void 0 : i[ek])) ? void 0 : r;
}
function ws(...e3) {
  return Array.from(new Set(e3.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
}
var Xm = ((e3) => (e3[e3.None = 0] = "None", e3[e3.RenderStrategy = 1] = "RenderStrategy", e3[e3.Static = 2] = "Static", e3))(Xm || {}), Sn = ((e3) => (e3[e3.Unmount = 0] = "Unmount", e3[e3.Hidden = 1] = "Hidden", e3))(Sn || {});
function Jn({ ourProps: e3, theirProps: t, slot: r, defaultTag: i, features: a, visible: s = true, name: l, mergeRefs: c }) {
  c = c ?? tk;
  let f = Jm(t, e3);
  if (s) return es(f, r, i, l, c);
  let m = a ?? 0;
  if (m & 2) {
    let { static: g = false, ...v } = f;
    if (g) return es(v, r, i, l, c);
  }
  if (m & 1) {
    let { unmount: g = true, ...v } = f;
    return Ir(g ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return es({ ...v, hidden: true, style: { display: "none" } }, r, i, l, c);
    } });
  }
  return es(f, r, i, l, c);
}
function es(e3, t = {}, r, i, a) {
  let { as: s = r, children: l, refName: c = "ref", ...f } = Kl(e3, ["unmount", "static"]), m = e3.ref !== void 0 ? { [c]: e3.ref } : {}, g = typeof l == "function" ? l(t) : l;
  "className" in f && f.className && typeof f.className == "function" && (f.className = f.className(t));
  let v = {};
  if (t) {
    let p = false, w = [];
    for (let [S, d] of Object.entries(t)) typeof d == "boolean" && (p = true), d === true && w.push(S);
    p && (v["data-headlessui-state"] = w.join(" "));
  }
  if (s === qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.Fragment && Object.keys(Sc(f)).length > 0) {
    if (!qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.isValidElement(g) || Array.isArray(g) && g.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${i} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(f).map((d) => `  - ${d}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d) => `  - ${d}`).join(`
`)].join(`
`));
    let p = g.props, w = typeof (p == null ? void 0 : p.className) == "function" ? (...d) => ws(p == null ? void 0 : p.className(...d), f.className) : ws(p == null ? void 0 : p.className, f.className), S = w ? { className: w } : {};
    return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.cloneElement(g, Object.assign({}, Jm(g.props, Sc(Kl(f, ["ref"]))), v, m, { ref: a(g.ref, m.ref) }, S));
  }
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(s, Object.assign({}, Kl(f, ["ref"]), s !== qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.Fragment && m, s !== qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.Fragment && v), g);
}
function tk(...e3) {
  return e3.every((t) => t == null) ? void 0 : (t) => {
    for (let r of e3) r != null && (typeof r == "function" ? r(t) : r.current = t);
  };
}
function Jm(...e3) {
  if (e3.length === 0) return {};
  if (e3.length === 1) return e3[0];
  let t = {}, r = {};
  for (let i of e3) for (let a in i) a.startsWith("on") && typeof i[a] == "function" ? (r[a] != null || (r[a] = []), r[a].push(i[a])) : t[a] = i[a];
  if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(r).map((i) => [i, void 0])));
  for (let i in r) Object.assign(t, { [i](a, ...s) {
    let l = r[i];
    for (let c of l) {
      if ((a instanceof Event || (a == null ? void 0 : a.nativeEvent) instanceof Event) && a.defaultPrevented) return;
      c(a, ...s);
    }
  } });
  return t;
}
function Qn(e3) {
  var t;
  return Object.assign(qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.forwardRef(e3), { displayName: (t = e3.displayName) != null ? t : e3.name });
}
function Sc(e3) {
  let t = Object.assign({}, e3);
  for (let r in t) t[r] === void 0 && delete t[r];
  return t;
}
function Kl(e3, t = []) {
  let r = Object.assign({}, e3);
  for (let i of t) i in r && delete r[i];
  return r;
}
let rk = "div";
var Qm = ((e3) => (e3[e3.None = 1] = "None", e3[e3.Focusable = 2] = "Focusable", e3[e3.Hidden = 4] = "Hidden", e3))(Qm || {});
function nk(e3, t) {
  var r;
  let { features: i = 1, ...a } = e3, s = { ref: t, "aria-hidden": (i & 2) === 2 ? true : (r = a["aria-hidden"]) != null ? r : void 0, hidden: (i & 4) === 4 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(i & 4) === 4 && (i & 2) !== 2 && { display: "none" } } };
  return Jn({ ourProps: s, theirProps: a, slot: {}, defaultTag: rk, name: "Hidden" });
}
let ik = Qn(nk), sf = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createContext(null);
sf.displayName = "OpenClosedContext";
var Xr = ((e3) => (e3[e3.Open = 1] = "Open", e3[e3.Closed = 2] = "Closed", e3[e3.Closing = 4] = "Closing", e3[e3.Opening = 8] = "Opening", e3))(Xr || {});
function ey() {
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useContext(sf);
}
function ok({ value: e3, children: t }) {
  return React.createElement(sf.Provider, { value: e3 }, t);
}
function ak(e3) {
  let t = e3.parentElement, r = null;
  for (; t && !(t instanceof HTMLFieldSetElement); ) t instanceof HTMLLegendElement && (r = t), t = t.parentElement;
  let i = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return i && sk(r) ? false : i;
}
function sk(e3) {
  if (!e3) return false;
  let t = e3.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return false;
    t = t.previousElementSibling;
  }
  return true;
}
function uk(e3) {
  var t, r;
  let i = (t = e3 == null ? void 0 : e3.form) != null ? t : e3.closest("form");
  if (i) {
    for (let a of i.elements) if (a !== e3 && (a.tagName === "INPUT" && a.type === "submit" || a.tagName === "BUTTON" && a.type === "submit" || a.nodeName === "INPUT" && a.type === "image")) {
      a.click();
      return;
    }
    (r = i.requestSubmit) == null || r.call(i);
  }
}
var xc = ((e3) => (e3.Space = " ", e3.Enter = "Enter", e3.Escape = "Escape", e3.Backspace = "Backspace", e3.Delete = "Delete", e3.ArrowLeft = "ArrowLeft", e3.ArrowUp = "ArrowUp", e3.ArrowRight = "ArrowRight", e3.ArrowDown = "ArrowDown", e3.Home = "Home", e3.End = "End", e3.PageUp = "PageUp", e3.PageDown = "PageDown", e3.Tab = "Tab", e3))(xc || {});
function uf() {
  let e3 = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(false);
  return Fr(() => (e3.current = true, () => {
    e3.current = false;
  }), []), e3;
}
let ty = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createContext(null);
function ry() {
  let e3 = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useContext(ty);
  if (e3 === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, ry), t;
  }
  return e3;
}
function lk() {
  let [e3, t] = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState([]);
  return [e3.length > 0 ? e3.join(" ") : void 0, qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useMemo(() => function(r) {
    let i = Ot((s) => (t((l) => [...l, s]), () => t((l) => {
      let c = l.slice(), f = c.indexOf(s);
      return f !== -1 && c.splice(f, 1), c;
    }))), a = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useMemo(() => ({ register: i, slot: r.slot, name: r.name, props: r.props }), [i, r.slot, r.name, r.props]);
    return React.createElement(ty.Provider, { value: a }, r.children);
  }, [t])];
}
let ck = "p";
function fk(e3, t) {
  let r = af(), { id: i = `headlessui-description-${r}`, ...a } = e3, s = ry(), l = Zo(t);
  Fr(() => s.register(i), [i, s.register]);
  let c = { ref: l, ...s.props, id: i };
  return Jn({ ourProps: c, theirProps: a, slot: s.slot || {}, defaultTag: ck, name: s.name || "Description" });
}
let dk = Qn(fk), pk = Object.assign(dk, {}), ny = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createContext(null);
function iy() {
  let e3 = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useContext(ny);
  if (e3 === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, iy), t;
  }
  return e3;
}
function hk() {
  let [e3, t] = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState([]);
  return [e3.length > 0 ? e3.join(" ") : void 0, qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useMemo(() => function(r) {
    let i = Ot((s) => (t((l) => [...l, s]), () => t((l) => {
      let c = l.slice(), f = c.indexOf(s);
      return f !== -1 && c.splice(f, 1), c;
    }))), a = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useMemo(() => ({ register: i, slot: r.slot, name: r.name, props: r.props }), [i, r.slot, r.name, r.props]);
    return React.createElement(ny.Provider, { value: a }, r.children);
  }, [t])];
}
let vk = "label";
function gk(e3, t) {
  let r = af(), { id: i = `headlessui-label-${r}`, passive: a = false, ...s } = e3, l = iy(), c = Zo(t);
  Fr(() => l.register(i), [i, l.register]);
  let f = { ref: c, ...l.props, id: i };
  return a && ("onClick" in f && (delete f.htmlFor, delete f.onClick), "onClick" in s && delete s.onClick), Jn({ ourProps: f, theirProps: s, slot: l.slot || {}, defaultTag: vk, name: l.name || "Label" });
}
let mk = Qn(gk), yk = Object.assign(mk, {});
function wk(e3 = 0) {
  let [t, r] = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState(e3), i = uf(), a = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useCallback((f) => {
    i.current && r((m) => m | f);
  }, [t, i]), s = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useCallback((f) => !!(t & f), [t]), l = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useCallback((f) => {
    i.current && r((m) => m & ~f);
  }, [r, i]), c = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useCallback((f) => {
    i.current && r((m) => m ^ f);
  }, [r]);
  return { flags: t, addFlag: a, hasFlag: s, removeFlag: l, toggleFlag: c };
}
let lf = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createContext(null);
lf.displayName = "GroupContext";
let bk = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.Fragment;
function Sk(e3) {
  var t;
  let [r, i] = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState(null), [a, s] = hk(), [l, c] = lk(), f = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useMemo(() => ({ switch: r, setSwitch: i, labelledby: a, describedby: l }), [r, i, a, l]), m = {}, g = e3;
  return React.createElement(c, { name: "Switch.Description" }, React.createElement(s, { name: "Switch.Label", props: { htmlFor: (t = f.switch) == null ? void 0 : t.id, onClick(v) {
    r && (v.currentTarget.tagName === "LABEL" && v.preventDefault(), r.click(), r.focus({ preventScroll: true }));
  } } }, React.createElement(lf.Provider, { value: f }, Jn({ ourProps: m, theirProps: g, defaultTag: bk, name: "Switch.Group" }))));
}
let xk = "button";
function _k(e3, t) {
  var r;
  let i = af(), { id: a = `headlessui-switch-${i}`, checked: s, defaultChecked: l = false, onChange: c, disabled: f = false, name: m, value: g, form: v, ...p } = e3, w = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useContext(lf), S = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(null), d = Zo(S, t, w === null ? null : w.setSwitch), [b, h] = YP(s, c, l), x = Ot(() => h == null ? void 0 : h(!b)), _ = Ot((N) => {
    if (ak(N.currentTarget)) return N.preventDefault();
    N.preventDefault(), x();
  }), R = Ot((N) => {
    N.key === xc.Space ? (N.preventDefault(), x()) : N.key === xc.Enter && uk(N.currentTarget);
  }), O = Ot((N) => N.preventDefault()), C = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useMemo(() => ({ checked: b }), [b]), W = { id: a, ref: d, role: "switch", type: QP(e3, S), tabIndex: e3.tabIndex === -1 ? 0 : (r = e3.tabIndex) != null ? r : 0, "aria-checked": b, "aria-labelledby": w == null ? void 0 : w.labelledby, "aria-describedby": w == null ? void 0 : w.describedby, disabled: f, onClick: _, onKeyUp: R, onKeyPress: O }, M = nf();
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect(() => {
    var N;
    let Z = (N = S.current) == null ? void 0 : N.closest("form");
    Z && l !== void 0 && M.addEventListener(Z, "reset", () => {
      h(l);
    });
  }, [S, h]), React.createElement(React.Fragment, null, m != null && b && React.createElement(ik, { features: Qm.Hidden, ...Sc({ as: "input", type: "checkbox", hidden: true, readOnly: true, disabled: f, form: v, checked: b, name: m, value: g }) }), Jn({ ourProps: W, theirProps: p, slot: C, defaultTag: xk, name: "Switch" }));
}
let Ek = Qn(_k), Ok = Sk, Ak = Object.assign(Ek, { Group: Ok, Label: yk, Description: pk });
function Tk(e3) {
  let t = { called: false };
  return (...r) => {
    if (!t.called) return t.called = true, e3(...r);
  };
}
function Vl(e3, ...t) {
  e3 && t.length > 0 && e3.classList.add(...t);
}
function Yl(e3, ...t) {
  e3 && t.length > 0 && e3.classList.remove(...t);
}
function Rk(e3, t) {
  let r = qo();
  if (!e3) return r.dispose;
  let { transitionDuration: i, transitionDelay: a } = getComputedStyle(e3), [s, l] = [i, a].map((f) => {
    let [m = 0] = f.split(",").filter(Boolean).map((g) => g.includes("ms") ? parseFloat(g) : parseFloat(g) * 1e3).sort((g, v) => v - g);
    return m;
  }), c = s + l;
  if (c !== 0) {
    r.group((m) => {
      m.setTimeout(() => {
        t(), m.dispose();
      }, c), m.addEventListener(e3, "transitionrun", (g) => {
        g.target === g.currentTarget && m.dispose();
      });
    });
    let f = r.addEventListener(e3, "transitionend", (m) => {
      m.target === m.currentTarget && (t(), f());
    });
  } else t();
  return r.add(() => t()), r.dispose;
}
function Pk(e3, t, r, i) {
  let a = r ? "enter" : "leave", s = qo(), l = i !== void 0 ? Tk(i) : () => {
  };
  a === "enter" && (e3.removeAttribute("hidden"), e3.style.display = "");
  let c = Ir(a, { enter: () => t.enter, leave: () => t.leave }), f = Ir(a, { enter: () => t.enterTo, leave: () => t.leaveTo }), m = Ir(a, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return Yl(e3, ...t.base, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), Vl(e3, ...t.base, ...c, ...m), s.nextFrame(() => {
    Yl(e3, ...t.base, ...c, ...m), Vl(e3, ...t.base, ...c, ...f), Rk(e3, () => (Yl(e3, ...t.base, ...c), Vl(e3, ...t.base, ...t.entered), l()));
  }), s.dispose;
}
function kk({ immediate: e3, container: t, direction: r, classes: i, onStart: a, onStop: s }) {
  let l = uf(), c = nf(), f = _i(r);
  Fr(() => {
    e3 && (f.current = "enter");
  }, [e3]), Fr(() => {
    let m = qo();
    c.add(m.dispose);
    let g = t.current;
    if (g && f.current !== "idle" && l.current) return m.dispose(), a.current(f.current), m.add(Pk(g, i.current, f.current === "enter", () => {
      m.dispose(), s.current(f.current);
    })), m.dispose;
  }, [r]);
}
function mn(e3 = "") {
  return e3.split(/\s+/).filter((t) => t.length > 1);
}
let Ws = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createContext(null);
Ws.displayName = "TransitionContext";
var Ck = ((e3) => (e3.Visible = "visible", e3.Hidden = "hidden", e3))(Ck || {});
function $k() {
  let e3 = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useContext(Ws);
  if (e3 === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e3;
}
function Ik() {
  let e3 = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useContext(Bs);
  if (e3 === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e3;
}
let Bs = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createContext(null);
Bs.displayName = "NestingContext";
function Us(e3) {
  return "children" in e3 ? Us(e3.children) : e3.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function oy(e3, t) {
  let r = _i(e3), i = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef([]), a = uf(), s = nf(), l = Ot((w, S = Sn.Hidden) => {
    let d = i.current.findIndex(({ el: b }) => b === w);
    d !== -1 && (Ir(S, { [Sn.Unmount]() {
      i.current.splice(d, 1);
    }, [Sn.Hidden]() {
      i.current[d].state = "hidden";
    } }), s.microTask(() => {
      var b;
      !Us(i) && a.current && ((b = r.current) == null || b.call(r));
    }));
  }), c = Ot((w) => {
    let S = i.current.find(({ el: d }) => d === w);
    return S ? S.state !== "visible" && (S.state = "visible") : i.current.push({ el: w, state: "visible" }), () => l(w, Sn.Unmount);
  }), f = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef([]), m = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(Promise.resolve()), g = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef({ enter: [], leave: [], idle: [] }), v = Ot((w, S, d) => {
    f.current.splice(0), t && (t.chains.current[S] = t.chains.current[S].filter(([b]) => b !== w)), t == null || t.chains.current[S].push([w, new Promise((b) => {
      f.current.push(b);
    })]), t == null || t.chains.current[S].push([w, new Promise((b) => {
      Promise.all(g.current[S].map(([h, x]) => x)).then(() => b());
    })]), S === "enter" ? m.current = m.current.then(() => t == null ? void 0 : t.wait.current).then(() => d(S)) : d(S);
  }), p = Ot((w, S, d) => {
    Promise.all(g.current[S].splice(0).map(([b, h]) => h)).then(() => {
      var b;
      (b = f.current.shift()) == null || b();
    }).then(() => d(S));
  });
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useMemo(() => ({ children: i, register: c, unregister: l, onStart: v, onStop: p, wait: m, chains: g }), [c, l, i, v, p, g, m]);
}
function Lk() {
}
let Mk = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function tg(e3) {
  var t;
  let r = {};
  for (let i of Mk) r[i] = (t = e3[i]) != null ? t : Lk;
  return r;
}
function Nk(e3) {
  let t = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(tg(e3));
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect(() => {
    t.current = tg(e3);
  }, [e3]), t;
}
let Fk = "div", ay = Xm.RenderStrategy;
function Dk(e3, t) {
  var r, i;
  let { beforeEnter: a, afterEnter: s, beforeLeave: l, afterLeave: c, enter: f, enterFrom: m, enterTo: g, entered: v, leave: p, leaveFrom: w, leaveTo: S, ...d } = e3, b = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(null), h = Zo(b, t), x = (r = d.unmount) == null || r ? Sn.Unmount : Sn.Hidden, { show: _, appear: R, initial: O } = $k(), [C, W] = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState(_ ? "visible" : "hidden"), M = Ik(), { register: N, unregister: Z } = M;
  qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect(() => N(b), [N, b]), qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect(() => {
    if (x === Sn.Hidden && b.current) {
      if (_ && C !== "visible") {
        W("visible");
        return;
      }
      return Ir(C, { hidden: () => Z(b), visible: () => N(b) });
    }
  }, [C, b, N, Z, _, x]);
  let D = _i({ base: mn(d.className), enter: mn(f), enterFrom: mn(m), enterTo: mn(g), entered: mn(v), leave: mn(p), leaveFrom: mn(w), leaveTo: mn(S) }), L = Nk({ beforeEnter: a, afterEnter: s, beforeLeave: l, afterLeave: c }), B = of();
  qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect(() => {
    if (B && C === "visible" && b.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [b, C, B]);
  let H = O && !R, k = R && _ && O, X = !B || H ? "idle" : _ ? "enter" : "leave", V = wk(0), ee = Ot((re) => Ir(re, { enter: () => {
    V.addFlag(Xr.Opening), L.current.beforeEnter();
  }, leave: () => {
    V.addFlag(Xr.Closing), L.current.beforeLeave();
  }, idle: () => {
  } })), fe = Ot((re) => Ir(re, { enter: () => {
    V.removeFlag(Xr.Opening), L.current.afterEnter();
  }, leave: () => {
    V.removeFlag(Xr.Closing), L.current.afterLeave();
  }, idle: () => {
  } })), q = oy(() => {
    W("hidden"), Z(b);
  }, M), J = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(false);
  kk({ immediate: k, container: b, classes: D, direction: X, onStart: _i((re) => {
    J.current = true, q.onStart(b, re, ee);
  }), onStop: _i((re) => {
    J.current = false, q.onStop(b, re, fe), re === "leave" && !Us(q) && (W("hidden"), Z(b));
  }) });
  let oe = d, se = { ref: h };
  return k ? oe = { ...oe, className: ws(d.className, ...D.current.enter, ...D.current.enterFrom) } : J.current && (oe.className = ws(d.className, (i = b.current) == null ? void 0 : i.className), oe.className === "" && delete oe.className), React.createElement(Bs.Provider, { value: q }, React.createElement(ok, { value: Ir(C, { visible: Xr.Open, hidden: Xr.Closed }) | V.flags }, Jn({ ourProps: se, theirProps: oe, defaultTag: Fk, features: ay, visible: C === "visible", name: "Transition.Child" })));
}
function zk(e3, t) {
  let { show: r, appear: i = false, unmount: a = true, ...s } = e3, l = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(null), c = Zo(l, t);
  of();
  let f = ey();
  if (r === void 0 && f !== null && (r = (f & Xr.Open) === Xr.Open), ![true, false].includes(r)) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [m, g] = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState(r ? "visible" : "hidden"), v = oy(() => {
    g("hidden");
  }), [p, w] = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState(true), S = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef([r]);
  Fr(() => {
    p !== false && S.current[S.current.length - 1] !== r && (S.current.push(r), w(false));
  }, [S, r]);
  let d = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useMemo(() => ({ show: r, appear: i, initial: p }), [r, i, p]);
  qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect(() => {
    if (r) g("visible");
    else if (!Us(v)) g("hidden");
    else {
      let _ = l.current;
      if (!_) return;
      let R = _.getBoundingClientRect();
      R.x === 0 && R.y === 0 && R.width === 0 && R.height === 0 && g("hidden");
    }
  }, [r, v]);
  let b = { unmount: a }, h = Ot(() => {
    var _;
    p && w(false), (_ = e3.beforeEnter) == null || _.call(e3);
  }), x = Ot(() => {
    var _;
    p && w(false), (_ = e3.beforeLeave) == null || _.call(e3);
  });
  return React.createElement(Bs.Provider, { value: v }, React.createElement(Ws.Provider, { value: d }, Jn({ ourProps: { ...b, as: qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.Fragment, children: React.createElement(sy, { ref: c, ...b, ...s, beforeEnter: h, beforeLeave: x }) }, theirProps: {}, defaultTag: qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.Fragment, features: ay, visible: m === "visible", name: "Transition" })));
}
function Wk(e3, t) {
  let r = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useContext(Ws) !== null, i = ey() !== null;
  return React.createElement(React.Fragment, null, !r && i ? React.createElement(_c, { ref: t, ...e3 }) : React.createElement(sy, { ref: t, ...e3 }));
}
let _c = Qn(zk), sy = Qn(Dk), Bk = Qn(Wk), bs = Object.assign(_c, { Child: Bk, Root: _c });
const Xl = {
  xs: {
    switch: "h-2.5 w-2.5",
    translate: "translate-x-2.5",
    container: "w-6 h-3.5"
  },
  sm: {
    switch: "h-3.5 w-3.5",
    translate: "translate-x-[0.85rem]",
    container: "h-4.5 w-8"
  },
  md: {
    switch: "h-4 w-4",
    translate: "translate-x-3",
    container: "h-5 w-8"
  },
  lg: {
    switch: "h-4 w-4",
    translate: "translate-x-3",
    container: "h-5 w-8"
  }
}, Uk = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.forwardRef(({ onChange: e3, value: t, size: r = "md", className: i = "ml-auto" }, a) => {
  const s = (l) => {
    e3(l);
  };
  return /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: je("flex items-center", i), children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    Ak,
    {
      as: "span",
      ref: a,
      checked: t,
      onChange: s,
      onKeyDown: (l) => {
        l.key === "Enter" && s(!t);
      },
      className: `${t ? "bg-primary-dark" : "bg-grey-200"}
relative inline-flex shrink-0 ${Xl[r].container} cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`,
      children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "span",
        {
          "aria-hidden": "true",
          className: `${t ? Xl[r].translate : "translate-x-0"}
pointer-events-none inline-block ${Xl[r].switch} transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`
        }
      )
    }
  ) });
});
function cf() {
  return { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
}
var ei = cf();
function uy(e3) {
  ei = e3;
}
var $o = { exec: () => null };
function Ce(e3, t = "") {
  let r = typeof e3 == "string" ? e3 : e3.source, i = { replace: (a, s) => {
    let l = typeof s == "string" ? s : s.source;
    return l = l.replace(Ct.caret, "$1"), r = r.replace(a, l), i;
  }, getRegex: () => new RegExp(r, t) };
  return i;
}
var Ct = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] /, listReplaceTask: /^\[[ xX]\] +/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e3) => new RegExp(`^( {0,3}${e3})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e3) => new RegExp(`^ {0,${Math.min(3, e3 - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e3) => new RegExp(`^ {0,${Math.min(3, e3 - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e3) => new RegExp(`^ {0,${Math.min(3, e3 - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e3) => new RegExp(`^ {0,${Math.min(3, e3 - 1)}}#`), htmlBeginRegex: (e3) => new RegExp(`^ {0,${Math.min(3, e3 - 1)}}<(?:[a-z].*>|!--)`, "i") }, jk = /^(?:[ \t]*(?:\n|$))+/, Hk = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, qk = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Go = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Zk = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, ff = /(?:[*+-]|\d{1,9}[.)])/, ly = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, cy = Ce(ly).replace(/bull/g, ff).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Gk = Ce(ly).replace(/bull/g, ff).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), df = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Kk = /^[^\n]+/, pf = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, Vk = Ce(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", pf).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Yk = Ce(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, ff).getRegex(), js = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", hf = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Xk = Ce("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", hf).replace("tag", js).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), fy = Ce(df).replace("hr", Go).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", js).getRegex(), Jk = Ce(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", fy).getRegex(), vf = { blockquote: Jk, code: Hk, def: Vk, fences: qk, heading: Zk, hr: Go, html: Xk, lheading: cy, list: Yk, newline: jk, paragraph: fy, table: $o, text: Kk }, rg = Ce("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Go).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", js).getRegex(), Qk = { ...vf, lheading: Gk, table: rg, paragraph: Ce(df).replace("hr", Go).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", rg).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", js).getRegex() }, eC = { ...vf, html: Ce(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", hf).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: $o, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: Ce(df).replace("hr", Go).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", cy).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, tC = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, rC = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, dy = /^( {2,}|\\)\n(?!\s*$)/, nC = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Hs = /[\p{P}\p{S}]/u, gf = /[\s\p{P}\p{S}]/u, py = /[^\s\p{P}\p{S}]/u, iC = Ce(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, gf).getRegex(), hy = /(?!~)[\p{P}\p{S}]/u, oC = /(?!~)[\s\p{P}\p{S}]/u, aC = /(?:[^\s\p{P}\p{S}]|~)/u, sC = /\[(?:[^\[\]`]|`[^`]*?`)*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)|`[^`]*?`|<(?! )[^<>]*?>/g, vy = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, uC = Ce(vy, "u").replace(/punct/g, Hs).getRegex(), lC = Ce(vy, "u").replace(/punct/g, hy).getRegex(), gy = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", cC = Ce(gy, "gu").replace(/notPunctSpace/g, py).replace(/punctSpace/g, gf).replace(/punct/g, Hs).getRegex(), fC = Ce(gy, "gu").replace(/notPunctSpace/g, aC).replace(/punctSpace/g, oC).replace(/punct/g, hy).getRegex(), dC = Ce("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, py).replace(/punctSpace/g, gf).replace(/punct/g, Hs).getRegex(), pC = Ce(/\\(punct)/, "gu").replace(/punct/g, Hs).getRegex(), hC = Ce(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), vC = Ce(hf).replace("(?:-->|$)", "-->").getRegex(), gC = Ce("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", vC).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Ss = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, mC = Ce(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", Ss).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), my = Ce(/^!?\[(label)\]\[(ref)\]/).replace("label", Ss).replace("ref", pf).getRegex(), yy = Ce(/^!?\[(ref)\](?:\[\])?/).replace("ref", pf).getRegex(), yC = Ce("reflink|nolink(?!\\()", "g").replace("reflink", my).replace("nolink", yy).getRegex(), ng = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, mf = { _backpedal: $o, anyPunctuation: pC, autolink: hC, blockSkip: sC, br: dy, code: rC, del: $o, emStrongLDelim: uC, emStrongRDelimAst: cC, emStrongRDelimUnd: dC, escape: tC, link: mC, nolink: yy, punctuation: iC, reflink: my, reflinkSearch: yC, tag: gC, text: nC, url: $o }, wC = { ...mf, link: Ce(/^!?\[(label)\]\((.*?)\)/).replace("label", Ss).getRegex(), reflink: Ce(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Ss).getRegex() }, Ec = { ...mf, emStrongRDelimAst: fC, emStrongLDelim: lC, url: Ce(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", ng).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: Ce(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", ng).getRegex() }, bC = { ...Ec, br: Ce(dy).replace("{2,}", "*").getRegex(), text: Ce(Ec.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, ts = { normal: vf, gfm: Qk, pedantic: eC }, yo = { normal: mf, gfm: Ec, breaks: bC, pedantic: wC }, SC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, ig = (e3) => SC[e3];
function Pr(e3, t) {
  if (t) {
    if (Ct.escapeTest.test(e3)) return e3.replace(Ct.escapeReplace, ig);
  } else if (Ct.escapeTestNoEncode.test(e3)) return e3.replace(Ct.escapeReplaceNoEncode, ig);
  return e3;
}
function og(e3) {
  try {
    e3 = encodeURI(e3).replace(Ct.percentDecode, "%");
  } catch {
    return null;
  }
  return e3;
}
function ag(e3, t) {
  var s;
  let r = e3.replace(Ct.findPipe, (l, c, f) => {
    let m = false, g = c;
    for (; --g >= 0 && f[g] === "\\"; ) m = !m;
    return m ? "|" : " |";
  }), i = r.split(Ct.splitPipe), a = 0;
  if (i[0].trim() || i.shift(), i.length > 0 && !((s = i.at(-1)) != null && s.trim()) && i.pop(), t) if (i.length > t) i.splice(t);
  else for (; i.length < t; ) i.push("");
  for (; a < i.length; a++) i[a] = i[a].trim().replace(Ct.slashPipe, "|");
  return i;
}
function wo(e3, t, r) {
  let i = e3.length;
  if (i === 0) return "";
  let a = 0;
  for (; a < i && e3.charAt(i - a - 1) === t; )
    a++;
  return e3.slice(0, i - a);
}
function xC(e3, t) {
  if (e3.indexOf(t[1]) === -1) return -1;
  let r = 0;
  for (let i = 0; i < e3.length; i++) if (e3[i] === "\\") i++;
  else if (e3[i] === t[0]) r++;
  else if (e3[i] === t[1] && (r--, r < 0)) return i;
  return r > 0 ? -2 : -1;
}
function sg(e3, t, r, i, a) {
  let s = t.href, l = t.title || null, c = e3[1].replace(a.other.outputLinkReplace, "$1");
  i.state.inLink = true;
  let f = { type: e3[0].charAt(0) === "!" ? "image" : "link", raw: r, href: s, title: l, text: c, tokens: i.inlineTokens(c) };
  return i.state.inLink = false, f;
}
function _C(e3, t, r) {
  let i = e3.match(r.other.indentCodeCompensation);
  if (i === null) return t;
  let a = i[1];
  return t.split(`
`).map((s) => {
    let l = s.match(r.other.beginningSpace);
    if (l === null) return s;
    let [c] = l;
    return c.length >= a.length ? s.slice(a.length) : s;
  }).join(`
`);
}
var xs = class {
  constructor(t) {
    ge(this, "options");
    ge(this, "rules");
    ge(this, "lexer");
    this.options = t || ei;
  }
  space(t) {
    let r = this.rules.block.newline.exec(t);
    if (r && r[0].length > 0) return { type: "space", raw: r[0] };
  }
  code(t) {
    let r = this.rules.block.code.exec(t);
    if (r) {
      let i = r[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: r[0], codeBlockStyle: "indented", text: this.options.pedantic ? i : wo(i, `
`) };
    }
  }
  fences(t) {
    let r = this.rules.block.fences.exec(t);
    if (r) {
      let i = r[0], a = _C(i, r[3] || "", this.rules);
      return { type: "code", raw: i, lang: r[2] ? r[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : r[2], text: a };
    }
  }
  heading(t) {
    let r = this.rules.block.heading.exec(t);
    if (r) {
      let i = r[2].trim();
      if (this.rules.other.endingHash.test(i)) {
        let a = wo(i, "#");
        (this.options.pedantic || !a || this.rules.other.endingSpaceChar.test(a)) && (i = a.trim());
      }
      return { type: "heading", raw: r[0], depth: r[1].length, text: i, tokens: this.lexer.inline(i) };
    }
  }
  hr(t) {
    let r = this.rules.block.hr.exec(t);
    if (r) return { type: "hr", raw: wo(r[0], `
`) };
  }
  blockquote(t) {
    let r = this.rules.block.blockquote.exec(t);
    if (r) {
      let i = wo(r[0], `
`).split(`
`), a = "", s = "", l = [];
      for (; i.length > 0; ) {
        let c = false, f = [], m;
        for (m = 0; m < i.length; m++) if (this.rules.other.blockquoteStart.test(i[m])) f.push(i[m]), c = true;
        else if (!c) f.push(i[m]);
        else break;
        i = i.slice(m);
        let g = f.join(`
`), v = g.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        a = a ? `${a}
${g}` : g, s = s ? `${s}
${v}` : v;
        let p = this.lexer.state.top;
        if (this.lexer.state.top = true, this.lexer.blockTokens(v, l, true), this.lexer.state.top = p, i.length === 0) break;
        let w = l.at(-1);
        if ((w == null ? void 0 : w.type) === "code") break;
        if ((w == null ? void 0 : w.type) === "blockquote") {
          let S = w, d = S.raw + `
` + i.join(`
`), b = this.blockquote(d);
          l[l.length - 1] = b, a = a.substring(0, a.length - S.raw.length) + b.raw, s = s.substring(0, s.length - S.text.length) + b.text;
          break;
        } else if ((w == null ? void 0 : w.type) === "list") {
          let S = w, d = S.raw + `
` + i.join(`
`), b = this.list(d);
          l[l.length - 1] = b, a = a.substring(0, a.length - w.raw.length) + b.raw, s = s.substring(0, s.length - S.raw.length) + b.raw, i = d.substring(l.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: a, tokens: l, text: s };
    }
  }
  list(t) {
    let r = this.rules.block.list.exec(t);
    if (r) {
      let i = r[1].trim(), a = i.length > 1, s = { type: "list", raw: "", ordered: a, start: a ? +i.slice(0, -1) : "", loose: false, items: [] };
      i = a ? `\\d{1,9}\\${i.slice(-1)}` : `\\${i}`, this.options.pedantic && (i = a ? i : "[*+-]");
      let l = this.rules.other.listItemRegex(i), c = false;
      for (; t; ) {
        let m = false, g = "", v = "";
        if (!(r = l.exec(t)) || this.rules.block.hr.test(t)) break;
        g = r[0], t = t.substring(g.length);
        let p = r[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (x) => " ".repeat(3 * x.length)), w = t.split(`
`, 1)[0], S = !p.trim(), d = 0;
        if (this.options.pedantic ? (d = 2, v = p.trimStart()) : S ? d = r[1].length + 1 : (d = r[2].search(this.rules.other.nonSpaceChar), d = d > 4 ? 1 : d, v = p.slice(d), d += r[1].length), S && this.rules.other.blankLine.test(w) && (g += w + `
`, t = t.substring(w.length + 1), m = true), !m) {
          let x = this.rules.other.nextBulletRegex(d), _ = this.rules.other.hrRegex(d), R = this.rules.other.fencesBeginRegex(d), O = this.rules.other.headingBeginRegex(d), C = this.rules.other.htmlBeginRegex(d);
          for (; t; ) {
            let W = t.split(`
`, 1)[0], M;
            if (w = W, this.options.pedantic ? (w = w.replace(this.rules.other.listReplaceNesting, "  "), M = w) : M = w.replace(this.rules.other.tabCharGlobal, "    "), R.test(w) || O.test(w) || C.test(w) || x.test(w) || _.test(w)) break;
            if (M.search(this.rules.other.nonSpaceChar) >= d || !w.trim()) v += `
` + M.slice(d);
            else {
              if (S || p.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || R.test(p) || O.test(p) || _.test(p)) break;
              v += `
` + w;
            }
            !S && !w.trim() && (S = true), g += W + `
`, t = t.substring(W.length + 1), p = M.slice(d);
          }
        }
        s.loose || (c ? s.loose = true : this.rules.other.doubleBlankLine.test(g) && (c = true));
        let b = null, h;
        this.options.gfm && (b = this.rules.other.listIsTask.exec(v), b && (h = b[0] !== "[ ] ", v = v.replace(this.rules.other.listReplaceTask, ""))), s.items.push({ type: "list_item", raw: g, task: !!b, checked: h, loose: false, text: v, tokens: [] }), s.raw += g;
      }
      let f = s.items.at(-1);
      if (f) f.raw = f.raw.trimEnd(), f.text = f.text.trimEnd();
      else return;
      s.raw = s.raw.trimEnd();
      for (let m = 0; m < s.items.length; m++) if (this.lexer.state.top = false, s.items[m].tokens = this.lexer.blockTokens(s.items[m].text, []), !s.loose) {
        let g = s.items[m].tokens.filter((p) => p.type === "space"), v = g.length > 0 && g.some((p) => this.rules.other.anyLine.test(p.raw));
        s.loose = v;
      }
      if (s.loose) for (let m = 0; m < s.items.length; m++) s.items[m].loose = true;
      return s;
    }
  }
  html(t) {
    let r = this.rules.block.html.exec(t);
    if (r) return { type: "html", block: true, raw: r[0], pre: r[1] === "pre" || r[1] === "script" || r[1] === "style", text: r[0] };
  }
  def(t) {
    let r = this.rules.block.def.exec(t);
    if (r) {
      let i = r[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), a = r[2] ? r[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", s = r[3] ? r[3].substring(1, r[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : r[3];
      return { type: "def", tag: i, raw: r[0], href: a, title: s };
    }
  }
  table(t) {
    var c;
    let r = this.rules.block.table.exec(t);
    if (!r || !this.rules.other.tableDelimiter.test(r[2])) return;
    let i = ag(r[1]), a = r[2].replace(this.rules.other.tableAlignChars, "").split("|"), s = (c = r[3]) != null && c.trim() ? r[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], l = { type: "table", raw: r[0], header: [], align: [], rows: [] };
    if (i.length === a.length) {
      for (let f of a) this.rules.other.tableAlignRight.test(f) ? l.align.push("right") : this.rules.other.tableAlignCenter.test(f) ? l.align.push("center") : this.rules.other.tableAlignLeft.test(f) ? l.align.push("left") : l.align.push(null);
      for (let f = 0; f < i.length; f++) l.header.push({ text: i[f], tokens: this.lexer.inline(i[f]), header: true, align: l.align[f] });
      for (let f of s) l.rows.push(ag(f, l.header.length).map((m, g) => ({ text: m, tokens: this.lexer.inline(m), header: false, align: l.align[g] })));
      return l;
    }
  }
  lheading(t) {
    let r = this.rules.block.lheading.exec(t);
    if (r) return { type: "heading", raw: r[0], depth: r[2].charAt(0) === "=" ? 1 : 2, text: r[1], tokens: this.lexer.inline(r[1]) };
  }
  paragraph(t) {
    let r = this.rules.block.paragraph.exec(t);
    if (r) {
      let i = r[1].charAt(r[1].length - 1) === `
` ? r[1].slice(0, -1) : r[1];
      return { type: "paragraph", raw: r[0], text: i, tokens: this.lexer.inline(i) };
    }
  }
  text(t) {
    let r = this.rules.block.text.exec(t);
    if (r) return { type: "text", raw: r[0], text: r[0], tokens: this.lexer.inline(r[0]) };
  }
  escape(t) {
    let r = this.rules.inline.escape.exec(t);
    if (r) return { type: "escape", raw: r[0], text: r[1] };
  }
  tag(t) {
    let r = this.rules.inline.tag.exec(t);
    if (r) return !this.lexer.state.inLink && this.rules.other.startATag.test(r[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && this.rules.other.endATag.test(r[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(r[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(r[0]) && (this.lexer.state.inRawBlock = false), { type: "html", raw: r[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: false, text: r[0] };
  }
  link(t) {
    let r = this.rules.inline.link.exec(t);
    if (r) {
      let i = r[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(i)) {
        if (!this.rules.other.endAngleBracket.test(i)) return;
        let l = wo(i.slice(0, -1), "\\");
        if ((i.length - l.length) % 2 === 0) return;
      } else {
        let l = xC(r[2], "()");
        if (l === -2) return;
        if (l > -1) {
          let c = (r[0].indexOf("!") === 0 ? 5 : 4) + r[1].length + l;
          r[2] = r[2].substring(0, l), r[0] = r[0].substring(0, c).trim(), r[3] = "";
        }
      }
      let a = r[2], s = "";
      if (this.options.pedantic) {
        let l = this.rules.other.pedanticHrefTitle.exec(a);
        l && (a = l[1], s = l[3]);
      } else s = r[3] ? r[3].slice(1, -1) : "";
      return a = a.trim(), this.rules.other.startAngleBracket.test(a) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(i) ? a = a.slice(1) : a = a.slice(1, -1)), sg(r, { href: a && a.replace(this.rules.inline.anyPunctuation, "$1"), title: s && s.replace(this.rules.inline.anyPunctuation, "$1") }, r[0], this.lexer, this.rules);
    }
  }
  reflink(t, r) {
    let i;
    if ((i = this.rules.inline.reflink.exec(t)) || (i = this.rules.inline.nolink.exec(t))) {
      let a = (i[2] || i[1]).replace(this.rules.other.multipleSpaceGlobal, " "), s = r[a.toLowerCase()];
      if (!s) {
        let l = i[0].charAt(0);
        return { type: "text", raw: l, text: l };
      }
      return sg(i, s, i[0], this.lexer, this.rules);
    }
  }
  emStrong(t, r, i = "") {
    let a = this.rules.inline.emStrongLDelim.exec(t);
    if (!(!a || a[3] && i.match(this.rules.other.unicodeAlphaNumeric)) && (!(a[1] || a[2]) || !i || this.rules.inline.punctuation.exec(i))) {
      let s = [...a[0]].length - 1, l, c, f = s, m = 0, g = a[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (g.lastIndex = 0, r = r.slice(-1 * t.length + s); (a = g.exec(r)) != null; ) {
        if (l = a[1] || a[2] || a[3] || a[4] || a[5] || a[6], !l) continue;
        if (c = [...l].length, a[3] || a[4]) {
          f += c;
          continue;
        } else if ((a[5] || a[6]) && s % 3 && !((s + c) % 3)) {
          m += c;
          continue;
        }
        if (f -= c, f > 0) continue;
        c = Math.min(c, c + f + m);
        let v = [...a[0]][0].length, p = t.slice(0, s + a.index + v + c);
        if (Math.min(s, c) % 2) {
          let S = p.slice(1, -1);
          return { type: "em", raw: p, text: S, tokens: this.lexer.inlineTokens(S) };
        }
        let w = p.slice(2, -2);
        return { type: "strong", raw: p, text: w, tokens: this.lexer.inlineTokens(w) };
      }
    }
  }
  codespan(t) {
    let r = this.rules.inline.code.exec(t);
    if (r) {
      let i = r[2].replace(this.rules.other.newLineCharGlobal, " "), a = this.rules.other.nonSpaceChar.test(i), s = this.rules.other.startingSpaceChar.test(i) && this.rules.other.endingSpaceChar.test(i);
      return a && s && (i = i.substring(1, i.length - 1)), { type: "codespan", raw: r[0], text: i };
    }
  }
  br(t) {
    let r = this.rules.inline.br.exec(t);
    if (r) return { type: "br", raw: r[0] };
  }
  del(t) {
    let r = this.rules.inline.del.exec(t);
    if (r) return { type: "del", raw: r[0], text: r[2], tokens: this.lexer.inlineTokens(r[2]) };
  }
  autolink(t) {
    let r = this.rules.inline.autolink.exec(t);
    if (r) {
      let i, a;
      return r[2] === "@" ? (i = r[1], a = "mailto:" + i) : (i = r[1], a = i), { type: "link", raw: r[0], text: i, href: a, tokens: [{ type: "text", raw: i, text: i }] };
    }
  }
  url(t) {
    var i;
    let r;
    if (r = this.rules.inline.url.exec(t)) {
      let a, s;
      if (r[2] === "@") a = r[0], s = "mailto:" + a;
      else {
        let l;
        do
          l = r[0], r[0] = ((i = this.rules.inline._backpedal.exec(r[0])) == null ? void 0 : i[0]) ?? "";
        while (l !== r[0]);
        a = r[0], r[1] === "www." ? s = "http://" + r[0] : s = r[0];
      }
      return { type: "link", raw: r[0], text: a, href: s, tokens: [{ type: "text", raw: a, text: a }] };
    }
  }
  inlineText(t) {
    let r = this.rules.inline.text.exec(t);
    if (r) {
      let i = this.lexer.state.inRawBlock;
      return { type: "text", raw: r[0], text: r[0], escaped: i };
    }
  }
}, yr = class Oc {
  constructor(t) {
    ge(this, "tokens");
    ge(this, "options");
    ge(this, "state");
    ge(this, "tokenizer");
    ge(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || ei, this.options.tokenizer = this.options.tokenizer || new xs(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
    let r = { other: Ct, block: ts.normal, inline: yo.normal };
    this.options.pedantic ? (r.block = ts.pedantic, r.inline = yo.pedantic) : this.options.gfm && (r.block = ts.gfm, this.options.breaks ? r.inline = yo.breaks : r.inline = yo.gfm), this.tokenizer.rules = r;
  }
  static get rules() {
    return { block: ts, inline: yo };
  }
  static lex(t, r) {
    return new Oc(r).lex(t);
  }
  static lexInline(t, r) {
    return new Oc(r).inlineTokens(t);
  }
  lex(t) {
    t = t.replace(Ct.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let r = 0; r < this.inlineQueue.length; r++) {
      let i = this.inlineQueue[r];
      this.inlineTokens(i.src, i.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, r = [], i = false) {
    var a, s, l;
    for (this.options.pedantic && (t = t.replace(Ct.tabCharGlobal, "    ").replace(Ct.spaceLine, "")); t; ) {
      let c;
      if ((s = (a = this.options.extensions) == null ? void 0 : a.block) != null && s.some((m) => (c = m.call({ lexer: this }, t, r)) ? (t = t.substring(c.raw.length), r.push(c), true) : false)) continue;
      if (c = this.tokenizer.space(t)) {
        t = t.substring(c.raw.length);
        let m = r.at(-1);
        c.raw.length === 1 && m !== void 0 ? m.raw += `
` : r.push(c);
        continue;
      }
      if (c = this.tokenizer.code(t)) {
        t = t.substring(c.raw.length);
        let m = r.at(-1);
        (m == null ? void 0 : m.type) === "paragraph" || (m == null ? void 0 : m.type) === "text" ? (m.raw += (m.raw.endsWith(`
`) ? "" : `
`) + c.raw, m.text += `
` + c.text, this.inlineQueue.at(-1).src = m.text) : r.push(c);
        continue;
      }
      if (c = this.tokenizer.fences(t)) {
        t = t.substring(c.raw.length), r.push(c);
        continue;
      }
      if (c = this.tokenizer.heading(t)) {
        t = t.substring(c.raw.length), r.push(c);
        continue;
      }
      if (c = this.tokenizer.hr(t)) {
        t = t.substring(c.raw.length), r.push(c);
        continue;
      }
      if (c = this.tokenizer.blockquote(t)) {
        t = t.substring(c.raw.length), r.push(c);
        continue;
      }
      if (c = this.tokenizer.list(t)) {
        t = t.substring(c.raw.length), r.push(c);
        continue;
      }
      if (c = this.tokenizer.html(t)) {
        t = t.substring(c.raw.length), r.push(c);
        continue;
      }
      if (c = this.tokenizer.def(t)) {
        t = t.substring(c.raw.length);
        let m = r.at(-1);
        (m == null ? void 0 : m.type) === "paragraph" || (m == null ? void 0 : m.type) === "text" ? (m.raw += (m.raw.endsWith(`
`) ? "" : `
`) + c.raw, m.text += `
` + c.raw, this.inlineQueue.at(-1).src = m.text) : this.tokens.links[c.tag] || (this.tokens.links[c.tag] = { href: c.href, title: c.title }, r.push(c));
        continue;
      }
      if (c = this.tokenizer.table(t)) {
        t = t.substring(c.raw.length), r.push(c);
        continue;
      }
      if (c = this.tokenizer.lheading(t)) {
        t = t.substring(c.raw.length), r.push(c);
        continue;
      }
      let f = t;
      if ((l = this.options.extensions) != null && l.startBlock) {
        let m = 1 / 0, g = t.slice(1), v;
        this.options.extensions.startBlock.forEach((p) => {
          v = p.call({ lexer: this }, g), typeof v == "number" && v >= 0 && (m = Math.min(m, v));
        }), m < 1 / 0 && m >= 0 && (f = t.substring(0, m + 1));
      }
      if (this.state.top && (c = this.tokenizer.paragraph(f))) {
        let m = r.at(-1);
        i && (m == null ? void 0 : m.type) === "paragraph" ? (m.raw += (m.raw.endsWith(`
`) ? "" : `
`) + c.raw, m.text += `
` + c.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = m.text) : r.push(c), i = f.length !== t.length, t = t.substring(c.raw.length);
        continue;
      }
      if (c = this.tokenizer.text(t)) {
        t = t.substring(c.raw.length);
        let m = r.at(-1);
        (m == null ? void 0 : m.type) === "text" ? (m.raw += (m.raw.endsWith(`
`) ? "" : `
`) + c.raw, m.text += `
` + c.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = m.text) : r.push(c);
        continue;
      }
      if (t) {
        let m = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(m);
          break;
        } else throw new Error(m);
      }
    }
    return this.state.top = true, r;
  }
  inline(t, r = []) {
    return this.inlineQueue.push({ src: t, tokens: r }), r;
  }
  inlineTokens(t, r = []) {
    var c, f, m, g, v;
    let i = t, a = null;
    if (this.tokens.links) {
      let p = Object.keys(this.tokens.links);
      if (p.length > 0) for (; (a = this.tokenizer.rules.inline.reflinkSearch.exec(i)) != null; ) p.includes(a[0].slice(a[0].lastIndexOf("[") + 1, -1)) && (i = i.slice(0, a.index) + "[" + "a".repeat(a[0].length - 2) + "]" + i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (a = this.tokenizer.rules.inline.anyPunctuation.exec(i)) != null; ) i = i.slice(0, a.index) + "++" + i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; (a = this.tokenizer.rules.inline.blockSkip.exec(i)) != null; ) i = i.slice(0, a.index) + "[" + "a".repeat(a[0].length - 2) + "]" + i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    i = ((f = (c = this.options.hooks) == null ? void 0 : c.emStrongMask) == null ? void 0 : f.call({ lexer: this }, i)) ?? i;
    let s = false, l = "";
    for (; t; ) {
      s || (l = ""), s = false;
      let p;
      if ((g = (m = this.options.extensions) == null ? void 0 : m.inline) != null && g.some((S) => (p = S.call({ lexer: this }, t, r)) ? (t = t.substring(p.raw.length), r.push(p), true) : false)) continue;
      if (p = this.tokenizer.escape(t)) {
        t = t.substring(p.raw.length), r.push(p);
        continue;
      }
      if (p = this.tokenizer.tag(t)) {
        t = t.substring(p.raw.length), r.push(p);
        continue;
      }
      if (p = this.tokenizer.link(t)) {
        t = t.substring(p.raw.length), r.push(p);
        continue;
      }
      if (p = this.tokenizer.reflink(t, this.tokens.links)) {
        t = t.substring(p.raw.length);
        let S = r.at(-1);
        p.type === "text" && (S == null ? void 0 : S.type) === "text" ? (S.raw += p.raw, S.text += p.text) : r.push(p);
        continue;
      }
      if (p = this.tokenizer.emStrong(t, i, l)) {
        t = t.substring(p.raw.length), r.push(p);
        continue;
      }
      if (p = this.tokenizer.codespan(t)) {
        t = t.substring(p.raw.length), r.push(p);
        continue;
      }
      if (p = this.tokenizer.br(t)) {
        t = t.substring(p.raw.length), r.push(p);
        continue;
      }
      if (p = this.tokenizer.del(t)) {
        t = t.substring(p.raw.length), r.push(p);
        continue;
      }
      if (p = this.tokenizer.autolink(t)) {
        t = t.substring(p.raw.length), r.push(p);
        continue;
      }
      if (!this.state.inLink && (p = this.tokenizer.url(t))) {
        t = t.substring(p.raw.length), r.push(p);
        continue;
      }
      let w = t;
      if ((v = this.options.extensions) != null && v.startInline) {
        let S = 1 / 0, d = t.slice(1), b;
        this.options.extensions.startInline.forEach((h) => {
          b = h.call({ lexer: this }, d), typeof b == "number" && b >= 0 && (S = Math.min(S, b));
        }), S < 1 / 0 && S >= 0 && (w = t.substring(0, S + 1));
      }
      if (p = this.tokenizer.inlineText(w)) {
        t = t.substring(p.raw.length), p.raw.slice(-1) !== "_" && (l = p.raw.slice(-1)), s = true;
        let S = r.at(-1);
        (S == null ? void 0 : S.type) === "text" ? (S.raw += p.raw, S.text += p.text) : r.push(p);
        continue;
      }
      if (t) {
        let S = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(S);
          break;
        } else throw new Error(S);
      }
    }
    return r;
  }
}, _s = class {
  constructor(t) {
    ge(this, "options");
    ge(this, "parser");
    this.options = t || ei;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: r, escaped: i }) {
    var l;
    let a = (l = (r || "").match(Ct.notSpaceStart)) == null ? void 0 : l[0], s = t.replace(Ct.endingNewline, "") + `
`;
    return a ? '<pre><code class="language-' + Pr(a) + '">' + (i ? s : Pr(s, true)) + `</code></pre>
` : "<pre><code>" + (i ? s : Pr(s, true)) + `</code></pre>
`;
  }
  blockquote({ tokens: t }) {
    return `<blockquote>
${this.parser.parse(t)}</blockquote>
`;
  }
  html({ text: t }) {
    return t;
  }
  def(t) {
    return "";
  }
  heading({ tokens: t, depth: r }) {
    return `<h${r}>${this.parser.parseInline(t)}</h${r}>
`;
  }
  hr(t) {
    return `<hr>
`;
  }
  list(t) {
    let r = t.ordered, i = t.start, a = "";
    for (let c = 0; c < t.items.length; c++) {
      let f = t.items[c];
      a += this.listitem(f);
    }
    let s = r ? "ol" : "ul", l = r && i !== 1 ? ' start="' + i + '"' : "";
    return "<" + s + l + `>
` + a + "</" + s + `>
`;
  }
  listitem(t) {
    var i;
    let r = "";
    if (t.task) {
      let a = this.checkbox({ checked: !!t.checked });
      t.loose ? ((i = t.tokens[0]) == null ? void 0 : i.type) === "paragraph" ? (t.tokens[0].text = a + " " + t.tokens[0].text, t.tokens[0].tokens && t.tokens[0].tokens.length > 0 && t.tokens[0].tokens[0].type === "text" && (t.tokens[0].tokens[0].text = a + " " + Pr(t.tokens[0].tokens[0].text), t.tokens[0].tokens[0].escaped = true)) : t.tokens.unshift({ type: "text", raw: a + " ", text: a + " ", escaped: true }) : r += a + " ";
    }
    return r += this.parser.parse(t.tokens, !!t.loose), `<li>${r}</li>
`;
  }
  checkbox({ checked: t }) {
    return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: t }) {
    return `<p>${this.parser.parseInline(t)}</p>
`;
  }
  table(t) {
    let r = "", i = "";
    for (let s = 0; s < t.header.length; s++) i += this.tablecell(t.header[s]);
    r += this.tablerow({ text: i });
    let a = "";
    for (let s = 0; s < t.rows.length; s++) {
      let l = t.rows[s];
      i = "";
      for (let c = 0; c < l.length; c++) i += this.tablecell(l[c]);
      a += this.tablerow({ text: i });
    }
    return a && (a = `<tbody>${a}</tbody>`), `<table>
<thead>
` + r + `</thead>
` + a + `</table>
`;
  }
  tablerow({ text: t }) {
    return `<tr>
${t}</tr>
`;
  }
  tablecell(t) {
    let r = this.parser.parseInline(t.tokens), i = t.header ? "th" : "td";
    return (t.align ? `<${i} align="${t.align}">` : `<${i}>`) + r + `</${i}>
`;
  }
  strong({ tokens: t }) {
    return `<strong>${this.parser.parseInline(t)}</strong>`;
  }
  em({ tokens: t }) {
    return `<em>${this.parser.parseInline(t)}</em>`;
  }
  codespan({ text: t }) {
    return `<code>${Pr(t, true)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: r, tokens: i }) {
    let a = this.parser.parseInline(i), s = og(t);
    if (s === null) return a;
    t = s;
    let l = '<a href="' + t + '"';
    return r && (l += ' title="' + Pr(r) + '"'), l += ">" + a + "</a>", l;
  }
  image({ href: t, title: r, text: i, tokens: a }) {
    a && (i = this.parser.parseInline(a, this.parser.textRenderer));
    let s = og(t);
    if (s === null) return Pr(i);
    t = s;
    let l = `<img src="${t}" alt="${i}"`;
    return r && (l += ` title="${Pr(r)}"`), l += ">", l;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : Pr(t.text);
  }
}, yf = class {
  strong({ text: e3 }) {
    return e3;
  }
  em({ text: e3 }) {
    return e3;
  }
  codespan({ text: e3 }) {
    return e3;
  }
  del({ text: e3 }) {
    return e3;
  }
  html({ text: e3 }) {
    return e3;
  }
  text({ text: e3 }) {
    return e3;
  }
  link({ text: e3 }) {
    return "" + e3;
  }
  image({ text: e3 }) {
    return "" + e3;
  }
  br() {
    return "";
  }
}, wr = class Ac {
  constructor(t) {
    ge(this, "options");
    ge(this, "renderer");
    ge(this, "textRenderer");
    this.options = t || ei, this.options.renderer = this.options.renderer || new _s(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new yf();
  }
  static parse(t, r) {
    return new Ac(r).parse(t);
  }
  static parseInline(t, r) {
    return new Ac(r).parseInline(t);
  }
  parse(t, r = true) {
    var a, s;
    let i = "";
    for (let l = 0; l < t.length; l++) {
      let c = t[l];
      if ((s = (a = this.options.extensions) == null ? void 0 : a.renderers) != null && s[c.type]) {
        let m = c, g = this.options.extensions.renderers[m.type].call({ parser: this }, m);
        if (g !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(m.type)) {
          i += g || "";
          continue;
        }
      }
      let f = c;
      switch (f.type) {
        case "space": {
          i += this.renderer.space(f);
          continue;
        }
        case "hr": {
          i += this.renderer.hr(f);
          continue;
        }
        case "heading": {
          i += this.renderer.heading(f);
          continue;
        }
        case "code": {
          i += this.renderer.code(f);
          continue;
        }
        case "table": {
          i += this.renderer.table(f);
          continue;
        }
        case "blockquote": {
          i += this.renderer.blockquote(f);
          continue;
        }
        case "list": {
          i += this.renderer.list(f);
          continue;
        }
        case "html": {
          i += this.renderer.html(f);
          continue;
        }
        case "def": {
          i += this.renderer.def(f);
          continue;
        }
        case "paragraph": {
          i += this.renderer.paragraph(f);
          continue;
        }
        case "text": {
          let m = f, g = this.renderer.text(m);
          for (; l + 1 < t.length && t[l + 1].type === "text"; ) m = t[++l], g += `
` + this.renderer.text(m);
          r ? i += this.renderer.paragraph({ type: "paragraph", raw: g, text: g, tokens: [{ type: "text", raw: g, text: g, escaped: true }] }) : i += g;
          continue;
        }
        default: {
          let m = 'Token with "' + f.type + '" type was not found.';
          if (this.options.silent) return console.error(m), "";
          throw new Error(m);
        }
      }
    }
    return i;
  }
  parseInline(t, r = this.renderer) {
    var a, s;
    let i = "";
    for (let l = 0; l < t.length; l++) {
      let c = t[l];
      if ((s = (a = this.options.extensions) == null ? void 0 : a.renderers) != null && s[c.type]) {
        let m = this.options.extensions.renderers[c.type].call({ parser: this }, c);
        if (m !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(c.type)) {
          i += m || "";
          continue;
        }
      }
      let f = c;
      switch (f.type) {
        case "escape": {
          i += r.text(f);
          break;
        }
        case "html": {
          i += r.html(f);
          break;
        }
        case "link": {
          i += r.link(f);
          break;
        }
        case "image": {
          i += r.image(f);
          break;
        }
        case "strong": {
          i += r.strong(f);
          break;
        }
        case "em": {
          i += r.em(f);
          break;
        }
        case "codespan": {
          i += r.codespan(f);
          break;
        }
        case "br": {
          i += r.br(f);
          break;
        }
        case "del": {
          i += r.del(f);
          break;
        }
        case "text": {
          i += r.text(f);
          break;
        }
        default: {
          let m = 'Token with "' + f.type + '" type was not found.';
          if (this.options.silent) return console.error(m), "";
          throw new Error(m);
        }
      }
    }
    return i;
  }
}, as, xo = (as = class {
  constructor(t) {
    ge(this, "options");
    ge(this, "block");
    this.options = t || ei;
  }
  preprocess(t) {
    return t;
  }
  postprocess(t) {
    return t;
  }
  processAllTokens(t) {
    return t;
  }
  emStrongMask(t) {
    return t;
  }
  provideLexer() {
    return this.block ? yr.lex : yr.lexInline;
  }
  provideParser() {
    return this.block ? wr.parse : wr.parseInline;
  }
}, ge(as, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), ge(as, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), as), wy = class {
  constructor(...t) {
    ge(this, "defaults", cf());
    ge(this, "options", this.setOptions);
    ge(this, "parse", this.parseMarkdown(true));
    ge(this, "parseInline", this.parseMarkdown(false));
    ge(this, "Parser", wr);
    ge(this, "Renderer", _s);
    ge(this, "TextRenderer", yf);
    ge(this, "Lexer", yr);
    ge(this, "Tokenizer", xs);
    ge(this, "Hooks", xo);
    this.use(...t);
  }
  walkTokens(t, r) {
    var a, s;
    let i = [];
    for (let l of t) switch (i = i.concat(r.call(this, l)), l.type) {
      case "table": {
        let c = l;
        for (let f of c.header) i = i.concat(this.walkTokens(f.tokens, r));
        for (let f of c.rows) for (let m of f) i = i.concat(this.walkTokens(m.tokens, r));
        break;
      }
      case "list": {
        let c = l;
        i = i.concat(this.walkTokens(c.items, r));
        break;
      }
      default: {
        let c = l;
        (s = (a = this.defaults.extensions) == null ? void 0 : a.childTokens) != null && s[c.type] ? this.defaults.extensions.childTokens[c.type].forEach((f) => {
          let m = c[f].flat(1 / 0);
          i = i.concat(this.walkTokens(m, r));
        }) : c.tokens && (i = i.concat(this.walkTokens(c.tokens, r)));
      }
    }
    return i;
  }
  use(...t) {
    let r = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return t.forEach((i) => {
      let a = { ...i };
      if (a.async = this.defaults.async || a.async || false, i.extensions && (i.extensions.forEach((s) => {
        if (!s.name) throw new Error("extension name required");
        if ("renderer" in s) {
          let l = r.renderers[s.name];
          l ? r.renderers[s.name] = function(...c) {
            let f = s.renderer.apply(this, c);
            return f === false && (f = l.apply(this, c)), f;
          } : r.renderers[s.name] = s.renderer;
        }
        if ("tokenizer" in s) {
          if (!s.level || s.level !== "block" && s.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let l = r[s.level];
          l ? l.unshift(s.tokenizer) : r[s.level] = [s.tokenizer], s.start && (s.level === "block" ? r.startBlock ? r.startBlock.push(s.start) : r.startBlock = [s.start] : s.level === "inline" && (r.startInline ? r.startInline.push(s.start) : r.startInline = [s.start]));
        }
        "childTokens" in s && s.childTokens && (r.childTokens[s.name] = s.childTokens);
      }), a.extensions = r), i.renderer) {
        let s = this.defaults.renderer || new _s(this.defaults);
        for (let l in i.renderer) {
          if (!(l in s)) throw new Error(`renderer '${l}' does not exist`);
          if (["options", "parser"].includes(l)) continue;
          let c = l, f = i.renderer[c], m = s[c];
          s[c] = (...g) => {
            let v = f.apply(s, g);
            return v === false && (v = m.apply(s, g)), v || "";
          };
        }
        a.renderer = s;
      }
      if (i.tokenizer) {
        let s = this.defaults.tokenizer || new xs(this.defaults);
        for (let l in i.tokenizer) {
          if (!(l in s)) throw new Error(`tokenizer '${l}' does not exist`);
          if (["options", "rules", "lexer"].includes(l)) continue;
          let c = l, f = i.tokenizer[c], m = s[c];
          s[c] = (...g) => {
            let v = f.apply(s, g);
            return v === false && (v = m.apply(s, g)), v;
          };
        }
        a.tokenizer = s;
      }
      if (i.hooks) {
        let s = this.defaults.hooks || new xo();
        for (let l in i.hooks) {
          if (!(l in s)) throw new Error(`hook '${l}' does not exist`);
          if (["options", "block"].includes(l)) continue;
          let c = l, f = i.hooks[c], m = s[c];
          xo.passThroughHooks.has(l) ? s[c] = (g) => {
            if (this.defaults.async && xo.passThroughHooksRespectAsync.has(l)) return (async () => {
              let p = await f.call(s, g);
              return m.call(s, p);
            })();
            let v = f.call(s, g);
            return m.call(s, v);
          } : s[c] = (...g) => {
            if (this.defaults.async) return (async () => {
              let p = await f.apply(s, g);
              return p === false && (p = await m.apply(s, g)), p;
            })();
            let v = f.apply(s, g);
            return v === false && (v = m.apply(s, g)), v;
          };
        }
        a.hooks = s;
      }
      if (i.walkTokens) {
        let s = this.defaults.walkTokens, l = i.walkTokens;
        a.walkTokens = function(c) {
          let f = [];
          return f.push(l.call(this, c)), s && (f = f.concat(s.call(this, c))), f;
        };
      }
      this.defaults = { ...this.defaults, ...a };
    }), this;
  }
  setOptions(t) {
    return this.defaults = { ...this.defaults, ...t }, this;
  }
  lexer(t, r) {
    return yr.lex(t, r ?? this.defaults);
  }
  parser(t, r) {
    return wr.parse(t, r ?? this.defaults);
  }
  parseMarkdown(t) {
    return (r, i) => {
      let a = { ...i }, s = { ...this.defaults, ...a }, l = this.onError(!!s.silent, !!s.async);
      if (this.defaults.async === true && a.async === false) return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof r > "u" || r === null) return l(new Error("marked(): input parameter is undefined or null"));
      if (typeof r != "string") return l(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(r) + ", string expected"));
      if (s.hooks && (s.hooks.options = s, s.hooks.block = t), s.async) return (async () => {
        let c = s.hooks ? await s.hooks.preprocess(r) : r, f = await (s.hooks ? await s.hooks.provideLexer() : t ? yr.lex : yr.lexInline)(c, s), m = s.hooks ? await s.hooks.processAllTokens(f) : f;
        s.walkTokens && await Promise.all(this.walkTokens(m, s.walkTokens));
        let g = await (s.hooks ? await s.hooks.provideParser() : t ? wr.parse : wr.parseInline)(m, s);
        return s.hooks ? await s.hooks.postprocess(g) : g;
      })().catch(l);
      try {
        s.hooks && (r = s.hooks.preprocess(r));
        let c = (s.hooks ? s.hooks.provideLexer() : t ? yr.lex : yr.lexInline)(r, s);
        s.hooks && (c = s.hooks.processAllTokens(c)), s.walkTokens && this.walkTokens(c, s.walkTokens);
        let f = (s.hooks ? s.hooks.provideParser() : t ? wr.parse : wr.parseInline)(c, s);
        return s.hooks && (f = s.hooks.postprocess(f)), f;
      } catch (c) {
        return l(c);
      }
    };
  }
  onError(t, r) {
    return (i) => {
      if (i.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
        let a = "<p>An error occurred:</p><pre>" + Pr(i.message + "", true) + "</pre>";
        return r ? Promise.resolve(a) : a;
      }
      if (r) return Promise.reject(i);
      throw i;
    };
  }
}, Vn = new wy();
function De(e3, t) {
  return Vn.parse(e3, t);
}
De.options = De.setOptions = function(e3) {
  return Vn.setOptions(e3), De.defaults = Vn.defaults, uy(De.defaults), De;
};
De.getDefaults = cf;
De.defaults = ei;
De.use = function(...e3) {
  return Vn.use(...e3), De.defaults = Vn.defaults, uy(De.defaults), De;
};
De.walkTokens = function(e3, t) {
  return Vn.walkTokens(e3, t);
};
De.parseInline = Vn.parseInline;
De.Parser = wr;
De.parser = wr.parse;
De.Renderer = _s;
De.TextRenderer = yf;
De.Lexer = yr;
De.lexer = yr.lex;
De.Tokenizer = xs;
De.Hooks = xo;
De.parse = De;
De.options;
De.setOptions;
De.use;
De.walkTokens;
De.parseInline;
wr.parse;
yr.lex;
const EC = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'"
}, by = /&(?:amp|lt|gt|quot|#(?:0+)?39);/g, OC = RegExp(by.source), ug = (e3 = "") => OC.test(e3) ? e3.replace(by, (t) => EC[t] || "'") : e3, lg = (e3, t) => {
  if (!t) return e3;
  try {
    return new URL(e3, t).href;
  } catch {
    return e3;
  }
};
var AC = class {
  constructor(e3) {
    ge(this, "renderer");
    this.renderer = e3.renderer;
  }
  parse(e3) {
    this.renderer.elIdList.push(0);
    const t = e3.map((r) => {
      switch (r.type) {
        case "space":
          return null;
        case "heading": {
          const i = r.depth;
          return this.renderer.heading(this.parseInline(r.tokens), i);
        }
        case "paragraph":
          return this.renderer.paragraph(this.parseInline(r.tokens));
        case "text": {
          const i = r;
          return i.tokens ? this.parseInline(i.tokens) : r.text;
        }
        case "blockquote": {
          const i = r, a = this.parse(i.tokens);
          return this.renderer.blockquote(a);
        }
        case "list": {
          const i = r;
          this.renderer.elIdList.push(0);
          const a = i.items.map((s) => {
            const l = [];
            return s.task && l.push(this.renderer.checkbox(s.checked ?? false)), l.push(this.parse(s.tokens)), this.renderer.listItem(l);
          });
          return this.renderer.elIdList.pop(), this.renderer.list(a, r.ordered, r.ordered ? r.start : void 0);
        }
        case "code":
          return this.renderer.code(r.text, r.lang);
        case "html":
          return this.renderer.html(r.text);
        case "table": {
          const i = r;
          this.renderer.elIdList.push(0);
          const a = i.header.map((m, g) => this.renderer.tableCell(this.parseInline(m.tokens), {
            header: true,
            align: r.align[g]
          }));
          this.renderer.elIdList.pop();
          const s = this.renderer.tableRow(a), l = this.renderer.tableHeader(s);
          this.renderer.elIdList.push(0);
          const c = i.rows.map((m) => {
            this.renderer.elIdList.push(0);
            const g = m.map((v, p) => this.renderer.tableCell(this.parseInline(v.tokens), {
              header: false,
              align: r.align[p]
            }));
            return this.renderer.elIdList.pop(), this.renderer.tableRow(g);
          });
          this.renderer.elIdList.pop();
          const f = this.renderer.tableBody(c);
          return this.renderer.table([l, f]);
        }
        case "hr":
          return this.renderer.hr();
        default:
          return console.warn(`Token with "${r.type}" type was not found`), null;
      }
    });
    return this.renderer.elIdList.pop(), t;
  }
  parseInline(e3 = []) {
    this.renderer.elIdList.push(0);
    const t = e3.map((r) => {
      switch (r.type) {
        case "text":
          return this.renderer.text(ug(r.text));
        case "strong":
          return this.renderer.strong(this.parseInline(r.tokens));
        case "em":
          return this.renderer.em(this.parseInline(r.tokens));
        case "del":
          return this.renderer.del(this.parseInline(r.tokens));
        case "codespan":
          return this.renderer.codespan(ug(r.text));
        case "link":
          return this.renderer.link(r.href, this.parseInline(r.tokens));
        case "image":
          return this.renderer.image(r.href, r.text, r.title);
        case "html":
          return this.renderer.html(r.text);
        case "br":
          return this.renderer.br();
        case "escape":
          return this.renderer.text(r.text);
        default:
          return console.warn(`Token with "${r.type}" type was not found`), null;
      }
    });
    return this.renderer.elIdList.pop(), t;
  }
}, TC = AC, yn, Ue, nt, Tc, Bg, RC = (Bg = class {
  constructor(e3 = {}) {
    Et(this, Ue);
    ge(this, "elIdList", []);
    Et(this, yn);
    const { renderer: t } = e3;
    Qe(this, yn, e3), t && typeof t == "object" && Object.entries(t).forEach(([r, i]) => {
      const a = r, s = i;
      !this[a] || a === "elementId" || a === "elIdList" || typeof s != "function" || Object.defineProperty(this, a, {
        value(...l) {
          return Ie(this, Ue, Tc).call(this), s.apply(this, l);
        },
        writable: true,
        enumerable: true,
        configurable: true
      });
    });
  }
  get elementId() {
    return this.elIdList.join("-");
  }
  heading(e3, t) {
    return Ie(this, Ue, nt).call(this, `h${t}`, e3);
  }
  paragraph(e3) {
    return Ie(this, Ue, nt).call(this, "p", e3);
  }
  link(e3, t) {
    const r = lg(e3, te(this, yn).baseURL), i = te(this, yn).openLinksInNewTab ? "_blank" : null;
    return Ie(this, Ue, nt).call(this, "a", t, {
      href: r,
      target: i
    });
  }
  image(e3, t, r = null) {
    const i = lg(e3, te(this, yn).baseURL);
    return Ie(this, Ue, nt).call(this, "img", null, {
      src: i,
      alt: t,
      title: r
    });
  }
  codespan(e3, t = null) {
    const r = t ? `${te(this, yn).langPrefix}${t}` : null;
    return Ie(this, Ue, nt).call(this, "code", e3, { className: r });
  }
  code(e3, t) {
    return Ie(this, Ue, nt).call(this, "pre", this.codespan(e3, t));
  }
  blockquote(e3) {
    return Ie(this, Ue, nt).call(this, "blockquote", e3);
  }
  list(e3, t, r) {
    return Ie(this, Ue, nt).call(this, t ? "ol" : "ul", e3, t && r !== 1 ? { start: r } : {});
  }
  listItem(e3) {
    return Ie(this, Ue, nt).call(this, "li", e3);
  }
  checkbox(e3) {
    return Ie(this, Ue, nt).call(this, "input", null, {
      type: "checkbox",
      disabled: true,
      checked: e3
    });
  }
  table(e3) {
    return Ie(this, Ue, nt).call(this, "table", e3);
  }
  tableHeader(e3) {
    return Ie(this, Ue, nt).call(this, "thead", e3);
  }
  tableBody(e3) {
    return Ie(this, Ue, nt).call(this, "tbody", e3);
  }
  tableRow(e3) {
    return Ie(this, Ue, nt).call(this, "tr", e3);
  }
  tableCell(e3, t) {
    const r = t.header ? "th" : "td";
    return Ie(this, Ue, nt).call(this, r, e3, { align: t.align });
  }
  strong(e3) {
    return Ie(this, Ue, nt).call(this, "strong", e3);
  }
  em(e3) {
    return Ie(this, Ue, nt).call(this, "em", e3);
  }
  del(e3) {
    return Ie(this, Ue, nt).call(this, "del", e3);
  }
  text(e3) {
    return e3;
  }
  html(e3) {
    return e3;
  }
  hr() {
    return Ie(this, Ue, nt).call(this, "hr");
  }
  br() {
    return Ie(this, Ue, nt).call(this, "br");
  }
}, yn = /* @__PURE__ */ new WeakMap(), Ue = /* @__PURE__ */ new WeakSet(), nt = function(e3, t = null, r = {}) {
  const i = {
    key: `marked-react-${this.elementId}`,
    suppressHydrationWarning: true
  };
  return Ie(this, Ue, Tc).call(this), qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(e3, {
    ...r,
    ...i
  }, t);
}, Tc = function() {
  this.elIdList[this.elIdList.length - 1] += 1;
}, Bg), PC = RC;
const kC = (e3) => {
  if (e3.value && typeof e3.value != "string") throw new TypeError(`[marked-react]: Expected value to be of type string but got ${typeof e3.value}`);
  if (e3.children && typeof e3.children != "string") throw new TypeError(`[marked-react]: Expected children to be of type string but got ${typeof e3.children}`);
}, CC = {
  isInline: false,
  breaks: false,
  gfm: true,
  baseURL: void 0,
  openLinksInNewTab: true,
  langPrefix: "language-",
  renderer: void 0
}, $C = new wy(), IC = (e3) => {
  kC(e3);
  const t = {
    ...CC,
    ...e3
  }, r = t.instance ?? $C, i = {
    breaks: t.breaks,
    gfm: t.gfm,
    tokenizer: r.defaults.tokenizer
  }, a = t.value ?? t.children ?? "", s = t.isInline ? r.Lexer.lexInline(a, i) : r.lexer(a, i), l = { renderer: new PC({
    renderer: t.renderer,
    baseURL: t.baseURL,
    openLinksInNewTab: t.openLinksInNewTab,
    langPrefix: t.langPrefix
  }) }, c = new TC(l), f = t.isInline ? c.parseInline(s) : c.parse(s);
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.Fragment, null, f);
};
var LC = IC, MC = LC;
const J2 = ({
  children: e3,
  label: t,
  placement: r = "top",
  className: i,
  isDisabled: a,
  container: s
}) => {
  const [l, c] = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState(
    null
  ), f = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(null), [m, g] = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState(null), [v, p] = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState(false), { styles: w, attributes: S } = tm(l, m, {
    placement: r,
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 8]
        }
      },
      {
        name: "preventOverflow",
        options: {
          rootBoundary: "viewport",
          padding: 8
        }
      }
    ]
  }), d = React.Children.map(e3, (b) => React.isValidElement(b) ? React.cloneElement(b, {
    ref: c,
    onMouseEnter: () => p(true),
    onMouseLeave: () => {
      f.current = setTimeout(() => p(false), 50);
    }
  }) : b);
  return a ? /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: d }) : /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: [
    d,
    v && t && ReactDOM.createPortal(
      /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "div",
        {
          ref: g,
          style: w.popper,
          ...S.popper,
          className: je(
            "z-10 select-none rounded bg-purple-200 font-poppins font-medium text-s px-2 py-0.5 text-purple-900 shadow-md",
            i
          ),
          onMouseEnter: () => {
            f.current && clearTimeout(f.current), p(true);
          },
          onMouseLeave: () => p(false),
          children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(MC, { openLinksInNewTab: true, children: t })
        }
      ),
      s || document.body
    )
  ] });
}, NC = keyframes`
  to {
    fill: url(#d);
    stroke-dashoffset: 0;
  }
`, FC = ms.svg`
  & .e {
    fill: url(#d);
  }

  & #tail {
    stroke: url(#d);
    stroke-width: 2;
    fill: transparent;
    stroke-dasharray: 700;
    stroke-dashoffset: 700;
    animation: ${NC} 1.5s ease-in-out infinite alternate-reverse;
  }

  & #circle {
    stroke: #fff;
    stroke-width: 2;
    fill: #fff;
    stroke-dasharray: 700;
    stroke-dashoffset: 700;
  }
`, Q2 = ({
  message: e3,
  version: t
}) => /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "absolute inset-0 flex h-screen w-screen flex-col items-center justify-center bg-fd-gray-default text-white", children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex flex-col text-center", children: [
  /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "relative mr-4 self-center", children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex items-center justify-center rounded", children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(FC, { className: "h-60 w-60", viewBox: "0 0 143.14 136.27", children: [
    /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("defs", { children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("linearGradient", { id: "d", x1: "50%", y1: "0%", x2: "50%", y2: "100%", children: [
      /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("stop", { offset: "0%", stopColor: "#2743a6", children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "animate",
        {
          attributeName: "stop-color",
          values: "#ffa4c0; #2743a6;",
          dur: "6s",
          repeatCount: "indefinite"
        }
      ) }),
      /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("stop", { offset: "100%", stopColor: "#ffa4c0", children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "animate",
        {
          attributeName: "stop-color",
          values: "#2743a6; #ffa4c0;",
          dur: "2ds",
          repeatCount: "indefinite"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("g", { id: "a" }),
    /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("g", { id: "b", children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("g", { id: "c", children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("g", { children: [
      /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "path",
        {
          id: "tail",
          className: "e",
          d: "M134.13,79.9l.25-1.2h-21.87l-.21,.7c-.03,.08-2.41,7.72-7.11,14.56-5.87,8.54-12.57,12.63-12.63,12.67l-1,.6,24.25,28.96h27.33l-22.61-26.46c2.2-2.67,10.06-13.09,13.6-29.83Z"
        }
      ),
      /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "path",
        {
          id: "circle",
          className: "f",
          d: "M83.08,113.64l18.93,22.6-33.68,.03-11.17-.03c-9.38,.01-18.55-2.45-26.56-7.11-2.94-1.71-5.72-3.71-8.29-6-8.79-7.8-17.6-19.72-20.92-37.37-.01-.02-.02-.03-.03-.05v-.09c-1.68-9.04-1.93-19.58,0-31.84C8.57,21.67,36.68-.66,69.93,.02c12.81,.27,25.06,4.28,35.59,11.48,.31,.2,.62,.41,.92,.62,.25,.18,.5,.35,.74,.53,8.82,6.31,16.06,14.69,21.02,24.42,.17,.33,.34,.65,.5,.98,.1,.21,.2,.41,.3,.61,4.35,8.92,6.63,18.54,6.54,28.06,0,.36,.02,.71,.02,1.06,0,.82-.03,1.62-.06,2.43h-22c.04-.81,.06-1.61,.06-2.43,0-1.52-.08-3.02-.23-4.5-2.68-22.17-21.26-39.86-43.98-40.63-4.43-.15-8.75,.29-12.88,1.28-.02,0-.04,.01-.05,.01-.48,.12-.95,.24-1.42,.38-.97,.26-1.94,.56-2.89,.9-.23,.07-.46,.15-.69,.24-6.2,2.27-11.84,5.87-16.59,10.67-8.99,9.09-13.84,21.44-13.3,33.9,0,19.98,17.86,39.48,35.59,42.56,6.4,1.37,24.04,1.24,25.96,1.05Z"
        }
      )
    ] }) }) })
  ] }) }) }),
  /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { children: [
    /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("span", { className: "text-xs text-grey-200", children: t }),
    /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("h2", { className: "text-lg text-grey-100", children: e3 })
  ] })
] }) });
var _o = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var DC = _o.exports, cg;
function zC() {
  return cg || (cg = 1, (function(e3, t) {
    (function() {
      var r, i = "4.17.21", a = 200, s = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", c = "Invalid `variable` option passed into `_.template`", f = "__lodash_hash_undefined__", m = 500, g = "__lodash_placeholder__", v = 1, p = 2, w = 4, S = 1, d = 2, b = 1, h = 2, x = 4, _ = 8, R = 16, O = 32, C = 64, W = 128, M = 256, N = 512, Z = 30, D = "...", L = 800, B = 16, H = 1, k = 2, X = 3, V = 1 / 0, ee = 9007199254740991, fe = 17976931348623157e292, q = NaN, J = 4294967295, oe = J - 1, se = J >>> 1, re = [
        ["ary", W],
        ["bind", b],
        ["bindKey", h],
        ["curry", _],
        ["curryRight", R],
        ["flip", N],
        ["partial", O],
        ["partialRight", C],
        ["rearg", M]
      ], le = "[object Arguments]", ce = "[object Array]", me = "[object AsyncFunction]", ve = "[object Boolean]", xe = "[object Date]", Oe = "[object DOMException]", Ke = "[object Error]", ne = "[object Function]", bt = "[object GeneratorFunction]", ft = "[object Map]", _r = "[object Number]", Ko = "[object Null]", Jt = "[object Object]", Vo = "[object Promise]", Ys = "[object Proxy]", Dt = "[object RegExp]", St = "[object Set]", rn = "[object String]", Tn = "[object Symbol]", Li = "[object Undefined]", nn = "[object WeakMap]", Yo = "[object WeakSet]", on = "[object ArrayBuffer]", zr = "[object DataView]", Xs = "[object Float32Array]", Js = "[object Float64Array]", Qs = "[object Int8Array]", eu = "[object Int16Array]", tu = "[object Int32Array]", ru = "[object Uint8Array]", nu = "[object Uint8ClampedArray]", iu = "[object Uint16Array]", ou = "[object Uint32Array]", o0 = /\b__p \+= '';/g, a0 = /\b(__p \+=) '' \+/g, s0 = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Cf = /&(?:amp|lt|gt|quot|#39);/g, $f = /[&<>"']/g, u0 = RegExp(Cf.source), l0 = RegExp($f.source), c0 = /<%-([\s\S]+?)%>/g, f0 = /<%([\s\S]+?)%>/g, If = /<%=([\s\S]+?)%>/g, d0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, p0 = /^\w*$/, h0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, au = /[\\^$.*+?()[\]{}|]/g, v0 = RegExp(au.source), su = /^\s+/, g0 = /\s/, m0 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, y0 = /\{\n\/\* \[wrapped with (.+)\] \*/, w0 = /,? & /, b0 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, S0 = /[()=,{}\[\]\/\s]/, x0 = /\\(\\)?/g, _0 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Lf = /\w*$/, E0 = /^[-+]0x[0-9a-f]+$/i, O0 = /^0b[01]+$/i, A0 = /^\[object .+?Constructor\]$/, T0 = /^0o[0-7]+$/i, R0 = /^(?:0|[1-9]\d*)$/, P0 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Xo = /($^)/, k0 = /['\n\r\u2028\u2029\\]/g, Jo = "\\ud800-\\udfff", C0 = "\\u0300-\\u036f", $0 = "\\ufe20-\\ufe2f", I0 = "\\u20d0-\\u20ff", Mf = C0 + $0 + I0, Nf = "\\u2700-\\u27bf", Ff = "a-z\\xdf-\\xf6\\xf8-\\xff", L0 = "\\xac\\xb1\\xd7\\xf7", M0 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", N0 = "\\u2000-\\u206f", F0 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Df = "A-Z\\xc0-\\xd6\\xd8-\\xde", zf = "\\ufe0e\\ufe0f", Wf = L0 + M0 + N0 + F0, uu = "['’]", D0 = "[" + Jo + "]", Bf = "[" + Wf + "]", Qo = "[" + Mf + "]", Uf = "\\d+", z0 = "[" + Nf + "]", jf = "[" + Ff + "]", Hf = "[^" + Jo + Wf + Uf + Nf + Ff + Df + "]", lu = "\\ud83c[\\udffb-\\udfff]", W0 = "(?:" + Qo + "|" + lu + ")", qf = "[^" + Jo + "]", cu = "(?:\\ud83c[\\udde6-\\uddff]){2}", fu = "[\\ud800-\\udbff][\\udc00-\\udfff]", ri = "[" + Df + "]", Zf = "\\u200d", Gf = "(?:" + jf + "|" + Hf + ")", B0 = "(?:" + ri + "|" + Hf + ")", Kf = "(?:" + uu + "(?:d|ll|m|re|s|t|ve))?", Vf = "(?:" + uu + "(?:D|LL|M|RE|S|T|VE))?", Yf = W0 + "?", Xf = "[" + zf + "]?", U0 = "(?:" + Zf + "(?:" + [qf, cu, fu].join("|") + ")" + Xf + Yf + ")*", j0 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", H0 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Jf = Xf + Yf + U0, q0 = "(?:" + [z0, cu, fu].join("|") + ")" + Jf, Z0 = "(?:" + [qf + Qo + "?", Qo, cu, fu, D0].join("|") + ")", G0 = RegExp(uu, "g"), K0 = RegExp(Qo, "g"), du = RegExp(lu + "(?=" + lu + ")|" + Z0 + Jf, "g"), V0 = RegExp([
        ri + "?" + jf + "+" + Kf + "(?=" + [Bf, ri, "$"].join("|") + ")",
        B0 + "+" + Vf + "(?=" + [Bf, ri + Gf, "$"].join("|") + ")",
        ri + "?" + Gf + "+" + Kf,
        ri + "+" + Vf,
        H0,
        j0,
        Uf,
        q0
      ].join("|"), "g"), Y0 = RegExp("[" + Zf + Jo + Mf + zf + "]"), X0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, J0 = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ], Q0 = -1, He = {};
      He[Xs] = He[Js] = He[Qs] = He[eu] = He[tu] = He[ru] = He[nu] = He[iu] = He[ou] = true, He[le] = He[ce] = He[on] = He[ve] = He[zr] = He[xe] = He[Ke] = He[ne] = He[ft] = He[_r] = He[Jt] = He[Dt] = He[St] = He[rn] = He[nn] = false;
      var Be = {};
      Be[le] = Be[ce] = Be[on] = Be[zr] = Be[ve] = Be[xe] = Be[Xs] = Be[Js] = Be[Qs] = Be[eu] = Be[tu] = Be[ft] = Be[_r] = Be[Jt] = Be[Dt] = Be[St] = Be[rn] = Be[Tn] = Be[ru] = Be[nu] = Be[iu] = Be[ou] = true, Be[Ke] = Be[ne] = Be[nn] = false;
      var ew = {
        // Latin-1 Supplement block.
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        // Latin Extended-A block.
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s"
      }, tw = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, rw = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, nw = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, iw = parseFloat, ow = parseInt, Qf = typeof Wa == "object" && Wa && Wa.Object === Object && Wa, aw = typeof self == "object" && self && self.Object === Object && self, ht = Qf || aw || Function("return this")(), pu = t && !t.nodeType && t, Rn = pu && true && e3 && !e3.nodeType && e3, ed = Rn && Rn.exports === pu, hu = ed && Qf.process, Qt = (function() {
        try {
          var F = Rn && Rn.require && Rn.require("util").types;
          return F || hu && hu.binding && hu.binding("util");
        } catch {
        }
      })(), td = Qt && Qt.isArrayBuffer, rd = Qt && Qt.isDate, nd = Qt && Qt.isMap, id = Qt && Qt.isRegExp, od = Qt && Qt.isSet, ad = Qt && Qt.isTypedArray;
      function zt(F, G, U) {
        switch (U.length) {
          case 0:
            return F.call(G);
          case 1:
            return F.call(G, U[0]);
          case 2:
            return F.call(G, U[0], U[1]);
          case 3:
            return F.call(G, U[0], U[1], U[2]);
        }
        return F.apply(G, U);
      }
      function sw(F, G, U, ae) {
        for (var ye = -1, Pe = F == null ? 0 : F.length; ++ye < Pe; ) {
          var st = F[ye];
          G(ae, st, U(st), F);
        }
        return ae;
      }
      function er(F, G) {
        for (var U = -1, ae = F == null ? 0 : F.length; ++U < ae && G(F[U], U, F) !== false; )
          ;
        return F;
      }
      function uw(F, G) {
        for (var U = F == null ? 0 : F.length; U-- && G(F[U], U, F) !== false; )
          ;
        return F;
      }
      function sd(F, G) {
        for (var U = -1, ae = F == null ? 0 : F.length; ++U < ae; )
          if (!G(F[U], U, F))
            return false;
        return true;
      }
      function an(F, G) {
        for (var U = -1, ae = F == null ? 0 : F.length, ye = 0, Pe = []; ++U < ae; ) {
          var st = F[U];
          G(st, U, F) && (Pe[ye++] = st);
        }
        return Pe;
      }
      function ea(F, G) {
        var U = F == null ? 0 : F.length;
        return !!U && ni(F, G, 0) > -1;
      }
      function vu(F, G, U) {
        for (var ae = -1, ye = F == null ? 0 : F.length; ++ae < ye; )
          if (U(G, F[ae]))
            return true;
        return false;
      }
      function qe(F, G) {
        for (var U = -1, ae = F == null ? 0 : F.length, ye = Array(ae); ++U < ae; )
          ye[U] = G(F[U], U, F);
        return ye;
      }
      function sn(F, G) {
        for (var U = -1, ae = G.length, ye = F.length; ++U < ae; )
          F[ye + U] = G[U];
        return F;
      }
      function gu(F, G, U, ae) {
        var ye = -1, Pe = F == null ? 0 : F.length;
        for (ae && Pe && (U = F[++ye]); ++ye < Pe; )
          U = G(U, F[ye], ye, F);
        return U;
      }
      function lw(F, G, U, ae) {
        var ye = F == null ? 0 : F.length;
        for (ae && ye && (U = F[--ye]); ye--; )
          U = G(U, F[ye], ye, F);
        return U;
      }
      function mu(F, G) {
        for (var U = -1, ae = F == null ? 0 : F.length; ++U < ae; )
          if (G(F[U], U, F))
            return true;
        return false;
      }
      var cw = yu("length");
      function fw(F) {
        return F.split("");
      }
      function dw(F) {
        return F.match(b0) || [];
      }
      function ud(F, G, U) {
        var ae;
        return U(F, function(ye, Pe, st) {
          if (G(ye, Pe, st))
            return ae = Pe, false;
        }), ae;
      }
      function ta(F, G, U, ae) {
        for (var ye = F.length, Pe = U + (ae ? 1 : -1); ae ? Pe-- : ++Pe < ye; )
          if (G(F[Pe], Pe, F))
            return Pe;
        return -1;
      }
      function ni(F, G, U) {
        return G === G ? Ew(F, G, U) : ta(F, ld, U);
      }
      function pw(F, G, U, ae) {
        for (var ye = U - 1, Pe = F.length; ++ye < Pe; )
          if (ae(F[ye], G))
            return ye;
        return -1;
      }
      function ld(F) {
        return F !== F;
      }
      function cd(F, G) {
        var U = F == null ? 0 : F.length;
        return U ? bu(F, G) / U : q;
      }
      function yu(F) {
        return function(G) {
          return G == null ? r : G[F];
        };
      }
      function wu(F) {
        return function(G) {
          return F == null ? r : F[G];
        };
      }
      function fd(F, G, U, ae, ye) {
        return ye(F, function(Pe, st, We) {
          U = ae ? (ae = false, Pe) : G(U, Pe, st, We);
        }), U;
      }
      function hw(F, G) {
        var U = F.length;
        for (F.sort(G); U--; )
          F[U] = F[U].value;
        return F;
      }
      function bu(F, G) {
        for (var U, ae = -1, ye = F.length; ++ae < ye; ) {
          var Pe = G(F[ae]);
          Pe !== r && (U = U === r ? Pe : U + Pe);
        }
        return U;
      }
      function Su(F, G) {
        for (var U = -1, ae = Array(F); ++U < F; )
          ae[U] = G(U);
        return ae;
      }
      function vw(F, G) {
        return qe(G, function(U) {
          return [U, F[U]];
        });
      }
      function dd(F) {
        return F && F.slice(0, gd(F) + 1).replace(su, "");
      }
      function Wt(F) {
        return function(G) {
          return F(G);
        };
      }
      function xu(F, G) {
        return qe(G, function(U) {
          return F[U];
        });
      }
      function Mi(F, G) {
        return F.has(G);
      }
      function pd(F, G) {
        for (var U = -1, ae = F.length; ++U < ae && ni(G, F[U], 0) > -1; )
          ;
        return U;
      }
      function hd(F, G) {
        for (var U = F.length; U-- && ni(G, F[U], 0) > -1; )
          ;
        return U;
      }
      function gw(F, G) {
        for (var U = F.length, ae = 0; U--; )
          F[U] === G && ++ae;
        return ae;
      }
      var mw = wu(ew), yw = wu(tw);
      function ww(F) {
        return "\\" + nw[F];
      }
      function bw(F, G) {
        return F == null ? r : F[G];
      }
      function ii(F) {
        return Y0.test(F);
      }
      function Sw(F) {
        return X0.test(F);
      }
      function xw(F) {
        for (var G, U = []; !(G = F.next()).done; )
          U.push(G.value);
        return U;
      }
      function _u(F) {
        var G = -1, U = Array(F.size);
        return F.forEach(function(ae, ye) {
          U[++G] = [ye, ae];
        }), U;
      }
      function vd(F, G) {
        return function(U) {
          return F(G(U));
        };
      }
      function un(F, G) {
        for (var U = -1, ae = F.length, ye = 0, Pe = []; ++U < ae; ) {
          var st = F[U];
          (st === G || st === g) && (F[U] = g, Pe[ye++] = U);
        }
        return Pe;
      }
      function ra(F) {
        var G = -1, U = Array(F.size);
        return F.forEach(function(ae) {
          U[++G] = ae;
        }), U;
      }
      function _w(F) {
        var G = -1, U = Array(F.size);
        return F.forEach(function(ae) {
          U[++G] = [ae, ae];
        }), U;
      }
      function Ew(F, G, U) {
        for (var ae = U - 1, ye = F.length; ++ae < ye; )
          if (F[ae] === G)
            return ae;
        return -1;
      }
      function Ow(F, G, U) {
        for (var ae = U + 1; ae--; )
          if (F[ae] === G)
            return ae;
        return ae;
      }
      function oi(F) {
        return ii(F) ? Tw(F) : cw(F);
      }
      function pr(F) {
        return ii(F) ? Rw(F) : fw(F);
      }
      function gd(F) {
        for (var G = F.length; G-- && g0.test(F.charAt(G)); )
          ;
        return G;
      }
      var Aw = wu(rw);
      function Tw(F) {
        for (var G = du.lastIndex = 0; du.test(F); )
          ++G;
        return G;
      }
      function Rw(F) {
        return F.match(du) || [];
      }
      function Pw(F) {
        return F.match(V0) || [];
      }
      var kw = (function F(G) {
        G = G == null ? ht : ai.defaults(ht.Object(), G, ai.pick(ht, J0));
        var U = G.Array, ae = G.Date, ye = G.Error, Pe = G.Function, st = G.Math, We = G.Object, Eu = G.RegExp, Cw = G.String, tr = G.TypeError, na = U.prototype, $w = Pe.prototype, si = We.prototype, ia = G["__core-js_shared__"], oa = $w.toString, Ne = si.hasOwnProperty, Iw = 0, md = (function() {
          var n = /[^.]+$/.exec(ia && ia.keys && ia.keys.IE_PROTO || "");
          return n ? "Symbol(src)_1." + n : "";
        })(), aa = si.toString, Lw = oa.call(We), Mw = ht._, Nw = Eu(
          "^" + oa.call(Ne).replace(au, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), sa = ed ? G.Buffer : r, ln = G.Symbol, ua = G.Uint8Array, yd = sa ? sa.allocUnsafe : r, la = vd(We.getPrototypeOf, We), wd = We.create, bd = si.propertyIsEnumerable, ca = na.splice, Sd = ln ? ln.isConcatSpreadable : r, Ni = ln ? ln.iterator : r, Pn = ln ? ln.toStringTag : r, fa = (function() {
          try {
            var n = Ln(We, "defineProperty");
            return n({}, "", {}), n;
          } catch {
          }
        })(), Fw = G.clearTimeout !== ht.clearTimeout && G.clearTimeout, Dw = ae && ae.now !== ht.Date.now && ae.now, zw = G.setTimeout !== ht.setTimeout && G.setTimeout, da = st.ceil, pa = st.floor, Ou = We.getOwnPropertySymbols, Ww = sa ? sa.isBuffer : r, xd = G.isFinite, Bw = na.join, Uw = vd(We.keys, We), ut = st.max, xt = st.min, jw = ae.now, Hw = G.parseInt, _d = st.random, qw = na.reverse, Au = Ln(G, "DataView"), Fi = Ln(G, "Map"), Tu = Ln(G, "Promise"), ui = Ln(G, "Set"), Di = Ln(G, "WeakMap"), zi = Ln(We, "create"), ha = Di && new Di(), li = {}, Zw = Mn(Au), Gw = Mn(Fi), Kw = Mn(Tu), Vw = Mn(ui), Yw = Mn(Di), va = ln ? ln.prototype : r, Wi = va ? va.valueOf : r, Ed = va ? va.toString : r;
        function A(n) {
          if (Je(n) && !we(n) && !(n instanceof Ae)) {
            if (n instanceof rr)
              return n;
            if (Ne.call(n, "__wrapped__"))
              return Op(n);
          }
          return new rr(n);
        }
        var ci = /* @__PURE__ */ (function() {
          function n() {
          }
          return function(o) {
            if (!Ve(o))
              return {};
            if (wd)
              return wd(o);
            n.prototype = o;
            var u = new n();
            return n.prototype = r, u;
          };
        })();
        function ga() {
        }
        function rr(n, o) {
          this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!o, this.__index__ = 0, this.__values__ = r;
        }
        A.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: c0,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: f0,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: If,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          variable: "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          imports: {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            _: A
          }
        }, A.prototype = ga.prototype, A.prototype.constructor = A, rr.prototype = ci(ga.prototype), rr.prototype.constructor = rr;
        function Ae(n) {
          this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = J, this.__views__ = [];
        }
        function Xw() {
          var n = new Ae(this.__wrapped__);
          return n.__actions__ = $t(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = $t(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = $t(this.__views__), n;
        }
        function Jw() {
          if (this.__filtered__) {
            var n = new Ae(this);
            n.__dir__ = -1, n.__filtered__ = true;
          } else
            n = this.clone(), n.__dir__ *= -1;
          return n;
        }
        function Qw() {
          var n = this.__wrapped__.value(), o = this.__dir__, u = we(n), y = o < 0, E = u ? n.length : 0, T = fb(0, E, this.__views__), P = T.start, I = T.end, z = I - P, K = y ? I : P - 1, Y = this.__iteratees__, Q = Y.length, ie = 0, ue = xt(z, this.__takeCount__);
          if (!u || !y && E == z && ue == z)
            return Kd(n, this.__actions__);
          var pe = [];
          e:
            for (; z-- && ie < ue; ) {
              K += o;
              for (var Se = -1, he = n[K]; ++Se < Q; ) {
                var Ee = Y[Se], Te = Ee.iteratee, jt = Ee.type, Pt = Te(he);
                if (jt == k)
                  he = Pt;
                else if (!Pt) {
                  if (jt == H)
                    continue e;
                  break e;
                }
              }
              pe[ie++] = he;
            }
          return pe;
        }
        Ae.prototype = ci(ga.prototype), Ae.prototype.constructor = Ae;
        function kn(n) {
          var o = -1, u = n == null ? 0 : n.length;
          for (this.clear(); ++o < u; ) {
            var y = n[o];
            this.set(y[0], y[1]);
          }
        }
        function e1() {
          this.__data__ = zi ? zi(null) : {}, this.size = 0;
        }
        function t1(n) {
          var o = this.has(n) && delete this.__data__[n];
          return this.size -= o ? 1 : 0, o;
        }
        function r1(n) {
          var o = this.__data__;
          if (zi) {
            var u = o[n];
            return u === f ? r : u;
          }
          return Ne.call(o, n) ? o[n] : r;
        }
        function n1(n) {
          var o = this.__data__;
          return zi ? o[n] !== r : Ne.call(o, n);
        }
        function i1(n, o) {
          var u = this.__data__;
          return this.size += this.has(n) ? 0 : 1, u[n] = zi && o === r ? f : o, this;
        }
        kn.prototype.clear = e1, kn.prototype.delete = t1, kn.prototype.get = r1, kn.prototype.has = n1, kn.prototype.set = i1;
        function Wr(n) {
          var o = -1, u = n == null ? 0 : n.length;
          for (this.clear(); ++o < u; ) {
            var y = n[o];
            this.set(y[0], y[1]);
          }
        }
        function o1() {
          this.__data__ = [], this.size = 0;
        }
        function a1(n) {
          var o = this.__data__, u = ma(o, n);
          if (u < 0)
            return false;
          var y = o.length - 1;
          return u == y ? o.pop() : ca.call(o, u, 1), --this.size, true;
        }
        function s1(n) {
          var o = this.__data__, u = ma(o, n);
          return u < 0 ? r : o[u][1];
        }
        function u1(n) {
          return ma(this.__data__, n) > -1;
        }
        function l1(n, o) {
          var u = this.__data__, y = ma(u, n);
          return y < 0 ? (++this.size, u.push([n, o])) : u[y][1] = o, this;
        }
        Wr.prototype.clear = o1, Wr.prototype.delete = a1, Wr.prototype.get = s1, Wr.prototype.has = u1, Wr.prototype.set = l1;
        function Br(n) {
          var o = -1, u = n == null ? 0 : n.length;
          for (this.clear(); ++o < u; ) {
            var y = n[o];
            this.set(y[0], y[1]);
          }
        }
        function c1() {
          this.size = 0, this.__data__ = {
            hash: new kn(),
            map: new (Fi || Wr)(),
            string: new kn()
          };
        }
        function f1(n) {
          var o = Pa(this, n).delete(n);
          return this.size -= o ? 1 : 0, o;
        }
        function d1(n) {
          return Pa(this, n).get(n);
        }
        function p1(n) {
          return Pa(this, n).has(n);
        }
        function h1(n, o) {
          var u = Pa(this, n), y = u.size;
          return u.set(n, o), this.size += u.size == y ? 0 : 1, this;
        }
        Br.prototype.clear = c1, Br.prototype.delete = f1, Br.prototype.get = d1, Br.prototype.has = p1, Br.prototype.set = h1;
        function Cn(n) {
          var o = -1, u = n == null ? 0 : n.length;
          for (this.__data__ = new Br(); ++o < u; )
            this.add(n[o]);
        }
        function v1(n) {
          return this.__data__.set(n, f), this;
        }
        function g1(n) {
          return this.__data__.has(n);
        }
        Cn.prototype.add = Cn.prototype.push = v1, Cn.prototype.has = g1;
        function hr(n) {
          var o = this.__data__ = new Wr(n);
          this.size = o.size;
        }
        function m1() {
          this.__data__ = new Wr(), this.size = 0;
        }
        function y1(n) {
          var o = this.__data__, u = o.delete(n);
          return this.size = o.size, u;
        }
        function w1(n) {
          return this.__data__.get(n);
        }
        function b1(n) {
          return this.__data__.has(n);
        }
        function S1(n, o) {
          var u = this.__data__;
          if (u instanceof Wr) {
            var y = u.__data__;
            if (!Fi || y.length < a - 1)
              return y.push([n, o]), this.size = ++u.size, this;
            u = this.__data__ = new Br(y);
          }
          return u.set(n, o), this.size = u.size, this;
        }
        hr.prototype.clear = m1, hr.prototype.delete = y1, hr.prototype.get = w1, hr.prototype.has = b1, hr.prototype.set = S1;
        function Od(n, o) {
          var u = we(n), y = !u && Nn(n), E = !u && !y && hn(n), T = !u && !y && !E && hi(n), P = u || y || E || T, I = P ? Su(n.length, Cw) : [], z = I.length;
          for (var K in n)
            (o || Ne.call(n, K)) && !(P && // Safari 9 has enumerable `arguments.length` in strict mode.
            (K == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            E && (K == "offset" || K == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            T && (K == "buffer" || K == "byteLength" || K == "byteOffset") || // Skip index properties.
            qr(K, z))) && I.push(K);
          return I;
        }
        function Ad(n) {
          var o = n.length;
          return o ? n[Du(0, o - 1)] : r;
        }
        function x1(n, o) {
          return ka($t(n), $n(o, 0, n.length));
        }
        function _1(n) {
          return ka($t(n));
        }
        function Ru(n, o, u) {
          (u !== r && !vr(n[o], u) || u === r && !(o in n)) && Ur(n, o, u);
        }
        function Bi(n, o, u) {
          var y = n[o];
          (!(Ne.call(n, o) && vr(y, u)) || u === r && !(o in n)) && Ur(n, o, u);
        }
        function ma(n, o) {
          for (var u = n.length; u--; )
            if (vr(n[u][0], o))
              return u;
          return -1;
        }
        function E1(n, o, u, y) {
          return cn(n, function(E, T, P) {
            o(y, E, u(E), P);
          }), y;
        }
        function Td(n, o) {
          return n && Or(o, dt(o), n);
        }
        function O1(n, o) {
          return n && Or(o, Lt(o), n);
        }
        function Ur(n, o, u) {
          o == "__proto__" && fa ? fa(n, o, {
            configurable: true,
            enumerable: true,
            value: u,
            writable: true
          }) : n[o] = u;
        }
        function Pu(n, o) {
          for (var u = -1, y = o.length, E = U(y), T = n == null; ++u < y; )
            E[u] = T ? r : ll(n, o[u]);
          return E;
        }
        function $n(n, o, u) {
          return n === n && (u !== r && (n = n <= u ? n : u), o !== r && (n = n >= o ? n : o)), n;
        }
        function nr(n, o, u, y, E, T) {
          var P, I = o & v, z = o & p, K = o & w;
          if (u && (P = E ? u(n, y, E, T) : u(n)), P !== r)
            return P;
          if (!Ve(n))
            return n;
          var Y = we(n);
          if (Y) {
            if (P = pb(n), !I)
              return $t(n, P);
          } else {
            var Q = _t(n), ie = Q == ne || Q == bt;
            if (hn(n))
              return Xd(n, I);
            if (Q == Jt || Q == le || ie && !E) {
              if (P = z || ie ? {} : gp(n), !I)
                return z ? rb(n, O1(P, n)) : tb(n, Td(P, n));
            } else {
              if (!Be[Q])
                return E ? n : {};
              P = hb(n, Q, I);
            }
          }
          T || (T = new hr());
          var ue = T.get(n);
          if (ue)
            return ue;
          T.set(n, P), qp(n) ? n.forEach(function(he) {
            P.add(nr(he, o, u, he, n, T));
          }) : jp(n) && n.forEach(function(he, Ee) {
            P.set(Ee, nr(he, o, u, Ee, n, T));
          });
          var pe = K ? z ? Vu : Ku : z ? Lt : dt, Se = Y ? r : pe(n);
          return er(Se || n, function(he, Ee) {
            Se && (Ee = he, he = n[Ee]), Bi(P, Ee, nr(he, o, u, Ee, n, T));
          }), P;
        }
        function A1(n) {
          var o = dt(n);
          return function(u) {
            return Rd(u, n, o);
          };
        }
        function Rd(n, o, u) {
          var y = u.length;
          if (n == null)
            return !y;
          for (n = We(n); y--; ) {
            var E = u[y], T = o[E], P = n[E];
            if (P === r && !(E in n) || !T(P))
              return false;
          }
          return true;
        }
        function Pd(n, o, u) {
          if (typeof n != "function")
            throw new tr(l);
          return Ki(function() {
            n.apply(r, u);
          }, o);
        }
        function Ui(n, o, u, y) {
          var E = -1, T = ea, P = true, I = n.length, z = [], K = o.length;
          if (!I)
            return z;
          u && (o = qe(o, Wt(u))), y ? (T = vu, P = false) : o.length >= a && (T = Mi, P = false, o = new Cn(o));
          e:
            for (; ++E < I; ) {
              var Y = n[E], Q = u == null ? Y : u(Y);
              if (Y = y || Y !== 0 ? Y : 0, P && Q === Q) {
                for (var ie = K; ie--; )
                  if (o[ie] === Q)
                    continue e;
                z.push(Y);
              } else T(o, Q, y) || z.push(Y);
            }
          return z;
        }
        var cn = rp(Er), kd = rp(Cu, true);
        function T1(n, o) {
          var u = true;
          return cn(n, function(y, E, T) {
            return u = !!o(y, E, T), u;
          }), u;
        }
        function ya(n, o, u) {
          for (var y = -1, E = n.length; ++y < E; ) {
            var T = n[y], P = o(T);
            if (P != null && (I === r ? P === P && !Ut(P) : u(P, I)))
              var I = P, z = T;
          }
          return z;
        }
        function R1(n, o, u, y) {
          var E = n.length;
          for (u = be(u), u < 0 && (u = -u > E ? 0 : E + u), y = y === r || y > E ? E : be(y), y < 0 && (y += E), y = u > y ? 0 : Gp(y); u < y; )
            n[u++] = o;
          return n;
        }
        function Cd(n, o) {
          var u = [];
          return cn(n, function(y, E, T) {
            o(y, E, T) && u.push(y);
          }), u;
        }
        function vt(n, o, u, y, E) {
          var T = -1, P = n.length;
          for (u || (u = gb), E || (E = []); ++T < P; ) {
            var I = n[T];
            o > 0 && u(I) ? o > 1 ? vt(I, o - 1, u, y, E) : sn(E, I) : y || (E[E.length] = I);
          }
          return E;
        }
        var ku = np(), $d = np(true);
        function Er(n, o) {
          return n && ku(n, o, dt);
        }
        function Cu(n, o) {
          return n && $d(n, o, dt);
        }
        function wa(n, o) {
          return an(o, function(u) {
            return Zr(n[u]);
          });
        }
        function In(n, o) {
          o = dn(o, n);
          for (var u = 0, y = o.length; n != null && u < y; )
            n = n[Ar(o[u++])];
          return u && u == y ? n : r;
        }
        function Id(n, o, u) {
          var y = o(n);
          return we(n) ? y : sn(y, u(n));
        }
        function Tt(n) {
          return n == null ? n === r ? Li : Ko : Pn && Pn in We(n) ? cb(n) : _b(n);
        }
        function $u(n, o) {
          return n > o;
        }
        function P1(n, o) {
          return n != null && Ne.call(n, o);
        }
        function k1(n, o) {
          return n != null && o in We(n);
        }
        function C1(n, o, u) {
          return n >= xt(o, u) && n < ut(o, u);
        }
        function Iu(n, o, u) {
          for (var y = u ? vu : ea, E = n[0].length, T = n.length, P = T, I = U(T), z = 1 / 0, K = []; P--; ) {
            var Y = n[P];
            P && o && (Y = qe(Y, Wt(o))), z = xt(Y.length, z), I[P] = !u && (o || E >= 120 && Y.length >= 120) ? new Cn(P && Y) : r;
          }
          Y = n[0];
          var Q = -1, ie = I[0];
          e:
            for (; ++Q < E && K.length < z; ) {
              var ue = Y[Q], pe = o ? o(ue) : ue;
              if (ue = u || ue !== 0 ? ue : 0, !(ie ? Mi(ie, pe) : y(K, pe, u))) {
                for (P = T; --P; ) {
                  var Se = I[P];
                  if (!(Se ? Mi(Se, pe) : y(n[P], pe, u)))
                    continue e;
                }
                ie && ie.push(pe), K.push(ue);
              }
            }
          return K;
        }
        function $1(n, o, u, y) {
          return Er(n, function(E, T, P) {
            o(y, u(E), T, P);
          }), y;
        }
        function ji(n, o, u) {
          o = dn(o, n), n = bp(n, o);
          var y = n == null ? n : n[Ar(or(o))];
          return y == null ? r : zt(y, n, u);
        }
        function Ld(n) {
          return Je(n) && Tt(n) == le;
        }
        function I1(n) {
          return Je(n) && Tt(n) == on;
        }
        function L1(n) {
          return Je(n) && Tt(n) == xe;
        }
        function Hi(n, o, u, y, E) {
          return n === o ? true : n == null || o == null || !Je(n) && !Je(o) ? n !== n && o !== o : M1(n, o, u, y, Hi, E);
        }
        function M1(n, o, u, y, E, T) {
          var P = we(n), I = we(o), z = P ? ce : _t(n), K = I ? ce : _t(o);
          z = z == le ? Jt : z, K = K == le ? Jt : K;
          var Y = z == Jt, Q = K == Jt, ie = z == K;
          if (ie && hn(n)) {
            if (!hn(o))
              return false;
            P = true, Y = false;
          }
          if (ie && !Y)
            return T || (T = new hr()), P || hi(n) ? pp(n, o, u, y, E, T) : ub(n, o, z, u, y, E, T);
          if (!(u & S)) {
            var ue = Y && Ne.call(n, "__wrapped__"), pe = Q && Ne.call(o, "__wrapped__");
            if (ue || pe) {
              var Se = ue ? n.value() : n, he = pe ? o.value() : o;
              return T || (T = new hr()), E(Se, he, u, y, T);
            }
          }
          return ie ? (T || (T = new hr()), lb(n, o, u, y, E, T)) : false;
        }
        function N1(n) {
          return Je(n) && _t(n) == ft;
        }
        function Lu(n, o, u, y) {
          var E = u.length, T = E, P = !y;
          if (n == null)
            return !T;
          for (n = We(n); E--; ) {
            var I = u[E];
            if (P && I[2] ? I[1] !== n[I[0]] : !(I[0] in n))
              return false;
          }
          for (; ++E < T; ) {
            I = u[E];
            var z = I[0], K = n[z], Y = I[1];
            if (P && I[2]) {
              if (K === r && !(z in n))
                return false;
            } else {
              var Q = new hr();
              if (y)
                var ie = y(K, Y, z, n, o, Q);
              if (!(ie === r ? Hi(Y, K, S | d, y, Q) : ie))
                return false;
            }
          }
          return true;
        }
        function Md(n) {
          if (!Ve(n) || yb(n))
            return false;
          var o = Zr(n) ? Nw : A0;
          return o.test(Mn(n));
        }
        function F1(n) {
          return Je(n) && Tt(n) == Dt;
        }
        function D1(n) {
          return Je(n) && _t(n) == St;
        }
        function z1(n) {
          return Je(n) && Na(n.length) && !!He[Tt(n)];
        }
        function Nd(n) {
          return typeof n == "function" ? n : n == null ? Mt : typeof n == "object" ? we(n) ? zd(n[0], n[1]) : Dd(n) : ih(n);
        }
        function Mu(n) {
          if (!Gi(n))
            return Uw(n);
          var o = [];
          for (var u in We(n))
            Ne.call(n, u) && u != "constructor" && o.push(u);
          return o;
        }
        function W1(n) {
          if (!Ve(n))
            return xb(n);
          var o = Gi(n), u = [];
          for (var y in n)
            y == "constructor" && (o || !Ne.call(n, y)) || u.push(y);
          return u;
        }
        function Nu(n, o) {
          return n < o;
        }
        function Fd(n, o) {
          var u = -1, y = It(n) ? U(n.length) : [];
          return cn(n, function(E, T, P) {
            y[++u] = o(E, T, P);
          }), y;
        }
        function Dd(n) {
          var o = Xu(n);
          return o.length == 1 && o[0][2] ? yp(o[0][0], o[0][1]) : function(u) {
            return u === n || Lu(u, n, o);
          };
        }
        function zd(n, o) {
          return Qu(n) && mp(o) ? yp(Ar(n), o) : function(u) {
            var y = ll(u, n);
            return y === r && y === o ? cl(u, n) : Hi(o, y, S | d);
          };
        }
        function ba(n, o, u, y, E) {
          n !== o && ku(o, function(T, P) {
            if (E || (E = new hr()), Ve(T))
              B1(n, o, P, u, ba, y, E);
            else {
              var I = y ? y(tl(n, P), T, P + "", n, o, E) : r;
              I === r && (I = T), Ru(n, P, I);
            }
          }, Lt);
        }
        function B1(n, o, u, y, E, T, P) {
          var I = tl(n, u), z = tl(o, u), K = P.get(z);
          if (K) {
            Ru(n, u, K);
            return;
          }
          var Y = T ? T(I, z, u + "", n, o, P) : r, Q = Y === r;
          if (Q) {
            var ie = we(z), ue = !ie && hn(z), pe = !ie && !ue && hi(z);
            Y = z, ie || ue || pe ? we(I) ? Y = I : tt(I) ? Y = $t(I) : ue ? (Q = false, Y = Xd(z, true)) : pe ? (Q = false, Y = Jd(z, true)) : Y = [] : Vi(z) || Nn(z) ? (Y = I, Nn(I) ? Y = Kp(I) : (!Ve(I) || Zr(I)) && (Y = gp(z))) : Q = false;
          }
          Q && (P.set(z, Y), E(Y, z, y, T, P), P.delete(z)), Ru(n, u, Y);
        }
        function Wd(n, o) {
          var u = n.length;
          if (u)
            return o += o < 0 ? u : 0, qr(o, u) ? n[o] : r;
        }
        function Bd(n, o, u) {
          o.length ? o = qe(o, function(T) {
            return we(T) ? function(P) {
              return In(P, T.length === 1 ? T[0] : T);
            } : T;
          }) : o = [Mt];
          var y = -1;
          o = qe(o, Wt(de()));
          var E = Fd(n, function(T, P, I) {
            var z = qe(o, function(K) {
              return K(T);
            });
            return { criteria: z, index: ++y, value: T };
          });
          return hw(E, function(T, P) {
            return eb(T, P, u);
          });
        }
        function U1(n, o) {
          return Ud(n, o, function(u, y) {
            return cl(n, y);
          });
        }
        function Ud(n, o, u) {
          for (var y = -1, E = o.length, T = {}; ++y < E; ) {
            var P = o[y], I = In(n, P);
            u(I, P) && qi(T, dn(P, n), I);
          }
          return T;
        }
        function j1(n) {
          return function(o) {
            return In(o, n);
          };
        }
        function Fu(n, o, u, y) {
          var E = y ? pw : ni, T = -1, P = o.length, I = n;
          for (n === o && (o = $t(o)), u && (I = qe(n, Wt(u))); ++T < P; )
            for (var z = 0, K = o[T], Y = u ? u(K) : K; (z = E(I, Y, z, y)) > -1; )
              I !== n && ca.call(I, z, 1), ca.call(n, z, 1);
          return n;
        }
        function jd(n, o) {
          for (var u = n ? o.length : 0, y = u - 1; u--; ) {
            var E = o[u];
            if (u == y || E !== T) {
              var T = E;
              qr(E) ? ca.call(n, E, 1) : Bu(n, E);
            }
          }
          return n;
        }
        function Du(n, o) {
          return n + pa(_d() * (o - n + 1));
        }
        function H1(n, o, u, y) {
          for (var E = -1, T = ut(da((o - n) / (u || 1)), 0), P = U(T); T--; )
            P[y ? T : ++E] = n, n += u;
          return P;
        }
        function zu(n, o) {
          var u = "";
          if (!n || o < 1 || o > ee)
            return u;
          do
            o % 2 && (u += n), o = pa(o / 2), o && (n += n);
          while (o);
          return u;
        }
        function _e(n, o) {
          return rl(wp(n, o, Mt), n + "");
        }
        function q1(n) {
          return Ad(vi(n));
        }
        function Z1(n, o) {
          var u = vi(n);
          return ka(u, $n(o, 0, u.length));
        }
        function qi(n, o, u, y) {
          if (!Ve(n))
            return n;
          o = dn(o, n);
          for (var E = -1, T = o.length, P = T - 1, I = n; I != null && ++E < T; ) {
            var z = Ar(o[E]), K = u;
            if (z === "__proto__" || z === "constructor" || z === "prototype")
              return n;
            if (E != P) {
              var Y = I[z];
              K = y ? y(Y, z, I) : r, K === r && (K = Ve(Y) ? Y : qr(o[E + 1]) ? [] : {});
            }
            Bi(I, z, K), I = I[z];
          }
          return n;
        }
        var Hd = ha ? function(n, o) {
          return ha.set(n, o), n;
        } : Mt, G1 = fa ? function(n, o) {
          return fa(n, "toString", {
            configurable: true,
            enumerable: false,
            value: dl(o),
            writable: true
          });
        } : Mt;
        function K1(n) {
          return ka(vi(n));
        }
        function ir(n, o, u) {
          var y = -1, E = n.length;
          o < 0 && (o = -o > E ? 0 : E + o), u = u > E ? E : u, u < 0 && (u += E), E = o > u ? 0 : u - o >>> 0, o >>>= 0;
          for (var T = U(E); ++y < E; )
            T[y] = n[y + o];
          return T;
        }
        function V1(n, o) {
          var u;
          return cn(n, function(y, E, T) {
            return u = o(y, E, T), !u;
          }), !!u;
        }
        function Sa(n, o, u) {
          var y = 0, E = n == null ? y : n.length;
          if (typeof o == "number" && o === o && E <= se) {
            for (; y < E; ) {
              var T = y + E >>> 1, P = n[T];
              P !== null && !Ut(P) && (u ? P <= o : P < o) ? y = T + 1 : E = T;
            }
            return E;
          }
          return Wu(n, o, Mt, u);
        }
        function Wu(n, o, u, y) {
          var E = 0, T = n == null ? 0 : n.length;
          if (T === 0)
            return 0;
          o = u(o);
          for (var P = o !== o, I = o === null, z = Ut(o), K = o === r; E < T; ) {
            var Y = pa((E + T) / 2), Q = u(n[Y]), ie = Q !== r, ue = Q === null, pe = Q === Q, Se = Ut(Q);
            if (P)
              var he = y || pe;
            else K ? he = pe && (y || ie) : I ? he = pe && ie && (y || !ue) : z ? he = pe && ie && !ue && (y || !Se) : ue || Se ? he = false : he = y ? Q <= o : Q < o;
            he ? E = Y + 1 : T = Y;
          }
          return xt(T, oe);
        }
        function qd(n, o) {
          for (var u = -1, y = n.length, E = 0, T = []; ++u < y; ) {
            var P = n[u], I = o ? o(P) : P;
            if (!u || !vr(I, z)) {
              var z = I;
              T[E++] = P === 0 ? 0 : P;
            }
          }
          return T;
        }
        function Zd(n) {
          return typeof n == "number" ? n : Ut(n) ? q : +n;
        }
        function Bt(n) {
          if (typeof n == "string")
            return n;
          if (we(n))
            return qe(n, Bt) + "";
          if (Ut(n))
            return Ed ? Ed.call(n) : "";
          var o = n + "";
          return o == "0" && 1 / n == -V ? "-0" : o;
        }
        function fn(n, o, u) {
          var y = -1, E = ea, T = n.length, P = true, I = [], z = I;
          if (u)
            P = false, E = vu;
          else if (T >= a) {
            var K = o ? null : ab(n);
            if (K)
              return ra(K);
            P = false, E = Mi, z = new Cn();
          } else
            z = o ? [] : I;
          e:
            for (; ++y < T; ) {
              var Y = n[y], Q = o ? o(Y) : Y;
              if (Y = u || Y !== 0 ? Y : 0, P && Q === Q) {
                for (var ie = z.length; ie--; )
                  if (z[ie] === Q)
                    continue e;
                o && z.push(Q), I.push(Y);
              } else E(z, Q, u) || (z !== I && z.push(Q), I.push(Y));
            }
          return I;
        }
        function Bu(n, o) {
          return o = dn(o, n), n = bp(n, o), n == null || delete n[Ar(or(o))];
        }
        function Gd(n, o, u, y) {
          return qi(n, o, u(In(n, o)), y);
        }
        function xa(n, o, u, y) {
          for (var E = n.length, T = y ? E : -1; (y ? T-- : ++T < E) && o(n[T], T, n); )
            ;
          return u ? ir(n, y ? 0 : T, y ? T + 1 : E) : ir(n, y ? T + 1 : 0, y ? E : T);
        }
        function Kd(n, o) {
          var u = n;
          return u instanceof Ae && (u = u.value()), gu(o, function(y, E) {
            return E.func.apply(E.thisArg, sn([y], E.args));
          }, u);
        }
        function Uu(n, o, u) {
          var y = n.length;
          if (y < 2)
            return y ? fn(n[0]) : [];
          for (var E = -1, T = U(y); ++E < y; )
            for (var P = n[E], I = -1; ++I < y; )
              I != E && (T[E] = Ui(T[E] || P, n[I], o, u));
          return fn(vt(T, 1), o, u);
        }
        function Vd(n, o, u) {
          for (var y = -1, E = n.length, T = o.length, P = {}; ++y < E; ) {
            var I = y < T ? o[y] : r;
            u(P, n[y], I);
          }
          return P;
        }
        function ju(n) {
          return tt(n) ? n : [];
        }
        function Hu(n) {
          return typeof n == "function" ? n : Mt;
        }
        function dn(n, o) {
          return we(n) ? n : Qu(n, o) ? [n] : Ep($e(n));
        }
        var Y1 = _e;
        function pn(n, o, u) {
          var y = n.length;
          return u = u === r ? y : u, !o && u >= y ? n : ir(n, o, u);
        }
        var Yd = Fw || function(n) {
          return ht.clearTimeout(n);
        };
        function Xd(n, o) {
          if (o)
            return n.slice();
          var u = n.length, y = yd ? yd(u) : new n.constructor(u);
          return n.copy(y), y;
        }
        function qu(n) {
          var o = new n.constructor(n.byteLength);
          return new ua(o).set(new ua(n)), o;
        }
        function X1(n, o) {
          var u = o ? qu(n.buffer) : n.buffer;
          return new n.constructor(u, n.byteOffset, n.byteLength);
        }
        function J1(n) {
          var o = new n.constructor(n.source, Lf.exec(n));
          return o.lastIndex = n.lastIndex, o;
        }
        function Q1(n) {
          return Wi ? We(Wi.call(n)) : {};
        }
        function Jd(n, o) {
          var u = o ? qu(n.buffer) : n.buffer;
          return new n.constructor(u, n.byteOffset, n.length);
        }
        function Qd(n, o) {
          if (n !== o) {
            var u = n !== r, y = n === null, E = n === n, T = Ut(n), P = o !== r, I = o === null, z = o === o, K = Ut(o);
            if (!I && !K && !T && n > o || T && P && z && !I && !K || y && P && z || !u && z || !E)
              return 1;
            if (!y && !T && !K && n < o || K && u && E && !y && !T || I && u && E || !P && E || !z)
              return -1;
          }
          return 0;
        }
        function eb(n, o, u) {
          for (var y = -1, E = n.criteria, T = o.criteria, P = E.length, I = u.length; ++y < P; ) {
            var z = Qd(E[y], T[y]);
            if (z) {
              if (y >= I)
                return z;
              var K = u[y];
              return z * (K == "desc" ? -1 : 1);
            }
          }
          return n.index - o.index;
        }
        function ep(n, o, u, y) {
          for (var E = -1, T = n.length, P = u.length, I = -1, z = o.length, K = ut(T - P, 0), Y = U(z + K), Q = !y; ++I < z; )
            Y[I] = o[I];
          for (; ++E < P; )
            (Q || E < T) && (Y[u[E]] = n[E]);
          for (; K--; )
            Y[I++] = n[E++];
          return Y;
        }
        function tp(n, o, u, y) {
          for (var E = -1, T = n.length, P = -1, I = u.length, z = -1, K = o.length, Y = ut(T - I, 0), Q = U(Y + K), ie = !y; ++E < Y; )
            Q[E] = n[E];
          for (var ue = E; ++z < K; )
            Q[ue + z] = o[z];
          for (; ++P < I; )
            (ie || E < T) && (Q[ue + u[P]] = n[E++]);
          return Q;
        }
        function $t(n, o) {
          var u = -1, y = n.length;
          for (o || (o = U(y)); ++u < y; )
            o[u] = n[u];
          return o;
        }
        function Or(n, o, u, y) {
          var E = !u;
          u || (u = {});
          for (var T = -1, P = o.length; ++T < P; ) {
            var I = o[T], z = y ? y(u[I], n[I], I, u, n) : r;
            z === r && (z = n[I]), E ? Ur(u, I, z) : Bi(u, I, z);
          }
          return u;
        }
        function tb(n, o) {
          return Or(n, Ju(n), o);
        }
        function rb(n, o) {
          return Or(n, hp(n), o);
        }
        function _a(n, o) {
          return function(u, y) {
            var E = we(u) ? sw : E1, T = o ? o() : {};
            return E(u, n, de(y, 2), T);
          };
        }
        function fi(n) {
          return _e(function(o, u) {
            var y = -1, E = u.length, T = E > 1 ? u[E - 1] : r, P = E > 2 ? u[2] : r;
            for (T = n.length > 3 && typeof T == "function" ? (E--, T) : r, P && Rt(u[0], u[1], P) && (T = E < 3 ? r : T, E = 1), o = We(o); ++y < E; ) {
              var I = u[y];
              I && n(o, I, y, T);
            }
            return o;
          });
        }
        function rp(n, o) {
          return function(u, y) {
            if (u == null)
              return u;
            if (!It(u))
              return n(u, y);
            for (var E = u.length, T = o ? E : -1, P = We(u); (o ? T-- : ++T < E) && y(P[T], T, P) !== false; )
              ;
            return u;
          };
        }
        function np(n) {
          return function(o, u, y) {
            for (var E = -1, T = We(o), P = y(o), I = P.length; I--; ) {
              var z = P[n ? I : ++E];
              if (u(T[z], z, T) === false)
                break;
            }
            return o;
          };
        }
        function nb(n, o, u) {
          var y = o & b, E = Zi(n);
          function T() {
            var P = this && this !== ht && this instanceof T ? E : n;
            return P.apply(y ? u : this, arguments);
          }
          return T;
        }
        function ip(n) {
          return function(o) {
            o = $e(o);
            var u = ii(o) ? pr(o) : r, y = u ? u[0] : o.charAt(0), E = u ? pn(u, 1).join("") : o.slice(1);
            return y[n]() + E;
          };
        }
        function di(n) {
          return function(o) {
            return gu(rh(th(o).replace(G0, "")), n, "");
          };
        }
        function Zi(n) {
          return function() {
            var o = arguments;
            switch (o.length) {
              case 0:
                return new n();
              case 1:
                return new n(o[0]);
              case 2:
                return new n(o[0], o[1]);
              case 3:
                return new n(o[0], o[1], o[2]);
              case 4:
                return new n(o[0], o[1], o[2], o[3]);
              case 5:
                return new n(o[0], o[1], o[2], o[3], o[4]);
              case 6:
                return new n(o[0], o[1], o[2], o[3], o[4], o[5]);
              case 7:
                return new n(o[0], o[1], o[2], o[3], o[4], o[5], o[6]);
            }
            var u = ci(n.prototype), y = n.apply(u, o);
            return Ve(y) ? y : u;
          };
        }
        function ib(n, o, u) {
          var y = Zi(n);
          function E() {
            for (var T = arguments.length, P = U(T), I = T, z = pi(E); I--; )
              P[I] = arguments[I];
            var K = T < 3 && P[0] !== z && P[T - 1] !== z ? [] : un(P, z);
            if (T -= K.length, T < u)
              return lp(
                n,
                o,
                Ea,
                E.placeholder,
                r,
                P,
                K,
                r,
                r,
                u - T
              );
            var Y = this && this !== ht && this instanceof E ? y : n;
            return zt(Y, this, P);
          }
          return E;
        }
        function op(n) {
          return function(o, u, y) {
            var E = We(o);
            if (!It(o)) {
              var T = de(u, 3);
              o = dt(o), u = function(I) {
                return T(E[I], I, E);
              };
            }
            var P = n(o, u, y);
            return P > -1 ? E[T ? o[P] : P] : r;
          };
        }
        function ap(n) {
          return Hr(function(o) {
            var u = o.length, y = u, E = rr.prototype.thru;
            for (n && o.reverse(); y--; ) {
              var T = o[y];
              if (typeof T != "function")
                throw new tr(l);
              if (E && !P && Ra(T) == "wrapper")
                var P = new rr([], true);
            }
            for (y = P ? y : u; ++y < u; ) {
              T = o[y];
              var I = Ra(T), z = I == "wrapper" ? Yu(T) : r;
              z && el(z[0]) && z[1] == (W | _ | O | M) && !z[4].length && z[9] == 1 ? P = P[Ra(z[0])].apply(P, z[3]) : P = T.length == 1 && el(T) ? P[I]() : P.thru(T);
            }
            return function() {
              var K = arguments, Y = K[0];
              if (P && K.length == 1 && we(Y))
                return P.plant(Y).value();
              for (var Q = 0, ie = u ? o[Q].apply(this, K) : Y; ++Q < u; )
                ie = o[Q].call(this, ie);
              return ie;
            };
          });
        }
        function Ea(n, o, u, y, E, T, P, I, z, K) {
          var Y = o & W, Q = o & b, ie = o & h, ue = o & (_ | R), pe = o & N, Se = ie ? r : Zi(n);
          function he() {
            for (var Ee = arguments.length, Te = U(Ee), jt = Ee; jt--; )
              Te[jt] = arguments[jt];
            if (ue)
              var Pt = pi(he), Ht = gw(Te, Pt);
            if (y && (Te = ep(Te, y, E, ue)), T && (Te = tp(Te, T, P, ue)), Ee -= Ht, ue && Ee < K) {
              var rt = un(Te, Pt);
              return lp(
                n,
                o,
                Ea,
                he.placeholder,
                u,
                Te,
                rt,
                I,
                z,
                K - Ee
              );
            }
            var gr = Q ? u : this, Kr = ie ? gr[n] : n;
            return Ee = Te.length, I ? Te = Eb(Te, I) : pe && Ee > 1 && Te.reverse(), Y && z < Ee && (Te.length = z), this && this !== ht && this instanceof he && (Kr = Se || Zi(Kr)), Kr.apply(gr, Te);
          }
          return he;
        }
        function sp(n, o) {
          return function(u, y) {
            return $1(u, n, o(y), {});
          };
        }
        function Oa(n, o) {
          return function(u, y) {
            var E;
            if (u === r && y === r)
              return o;
            if (u !== r && (E = u), y !== r) {
              if (E === r)
                return y;
              typeof u == "string" || typeof y == "string" ? (u = Bt(u), y = Bt(y)) : (u = Zd(u), y = Zd(y)), E = n(u, y);
            }
            return E;
          };
        }
        function Zu(n) {
          return Hr(function(o) {
            return o = qe(o, Wt(de())), _e(function(u) {
              var y = this;
              return n(o, function(E) {
                return zt(E, y, u);
              });
            });
          });
        }
        function Aa(n, o) {
          o = o === r ? " " : Bt(o);
          var u = o.length;
          if (u < 2)
            return u ? zu(o, n) : o;
          var y = zu(o, da(n / oi(o)));
          return ii(o) ? pn(pr(y), 0, n).join("") : y.slice(0, n);
        }
        function ob(n, o, u, y) {
          var E = o & b, T = Zi(n);
          function P() {
            for (var I = -1, z = arguments.length, K = -1, Y = y.length, Q = U(Y + z), ie = this && this !== ht && this instanceof P ? T : n; ++K < Y; )
              Q[K] = y[K];
            for (; z--; )
              Q[K++] = arguments[++I];
            return zt(ie, E ? u : this, Q);
          }
          return P;
        }
        function up(n) {
          return function(o, u, y) {
            return y && typeof y != "number" && Rt(o, u, y) && (u = y = r), o = Gr(o), u === r ? (u = o, o = 0) : u = Gr(u), y = y === r ? o < u ? 1 : -1 : Gr(y), H1(o, u, y, n);
          };
        }
        function Ta(n) {
          return function(o, u) {
            return typeof o == "string" && typeof u == "string" || (o = ar(o), u = ar(u)), n(o, u);
          };
        }
        function lp(n, o, u, y, E, T, P, I, z, K) {
          var Y = o & _, Q = Y ? P : r, ie = Y ? r : P, ue = Y ? T : r, pe = Y ? r : T;
          o |= Y ? O : C, o &= ~(Y ? C : O), o & x || (o &= -4);
          var Se = [
            n,
            o,
            E,
            ue,
            Q,
            pe,
            ie,
            I,
            z,
            K
          ], he = u.apply(r, Se);
          return el(n) && Sp(he, Se), he.placeholder = y, xp(he, n, o);
        }
        function Gu(n) {
          var o = st[n];
          return function(u, y) {
            if (u = ar(u), y = y == null ? 0 : xt(be(y), 292), y && xd(u)) {
              var E = ($e(u) + "e").split("e"), T = o(E[0] + "e" + (+E[1] + y));
              return E = ($e(T) + "e").split("e"), +(E[0] + "e" + (+E[1] - y));
            }
            return o(u);
          };
        }
        var ab = ui && 1 / ra(new ui([, -0]))[1] == V ? function(n) {
          return new ui(n);
        } : vl;
        function cp(n) {
          return function(o) {
            var u = _t(o);
            return u == ft ? _u(o) : u == St ? _w(o) : vw(o, n(o));
          };
        }
        function jr(n, o, u, y, E, T, P, I) {
          var z = o & h;
          if (!z && typeof n != "function")
            throw new tr(l);
          var K = y ? y.length : 0;
          if (K || (o &= -97, y = E = r), P = P === r ? P : ut(be(P), 0), I = I === r ? I : be(I), K -= E ? E.length : 0, o & C) {
            var Y = y, Q = E;
            y = E = r;
          }
          var ie = z ? r : Yu(n), ue = [
            n,
            o,
            u,
            y,
            E,
            Y,
            Q,
            T,
            P,
            I
          ];
          if (ie && Sb(ue, ie), n = ue[0], o = ue[1], u = ue[2], y = ue[3], E = ue[4], I = ue[9] = ue[9] === r ? z ? 0 : n.length : ut(ue[9] - K, 0), !I && o & (_ | R) && (o &= -25), !o || o == b)
            var pe = nb(n, o, u);
          else o == _ || o == R ? pe = ib(n, o, I) : (o == O || o == (b | O)) && !E.length ? pe = ob(n, o, u, y) : pe = Ea.apply(r, ue);
          var Se = ie ? Hd : Sp;
          return xp(Se(pe, ue), n, o);
        }
        function fp(n, o, u, y) {
          return n === r || vr(n, si[u]) && !Ne.call(y, u) ? o : n;
        }
        function dp(n, o, u, y, E, T) {
          return Ve(n) && Ve(o) && (T.set(o, n), ba(n, o, r, dp, T), T.delete(o)), n;
        }
        function sb(n) {
          return Vi(n) ? r : n;
        }
        function pp(n, o, u, y, E, T) {
          var P = u & S, I = n.length, z = o.length;
          if (I != z && !(P && z > I))
            return false;
          var K = T.get(n), Y = T.get(o);
          if (K && Y)
            return K == o && Y == n;
          var Q = -1, ie = true, ue = u & d ? new Cn() : r;
          for (T.set(n, o), T.set(o, n); ++Q < I; ) {
            var pe = n[Q], Se = o[Q];
            if (y)
              var he = P ? y(Se, pe, Q, o, n, T) : y(pe, Se, Q, n, o, T);
            if (he !== r) {
              if (he)
                continue;
              ie = false;
              break;
            }
            if (ue) {
              if (!mu(o, function(Ee, Te) {
                if (!Mi(ue, Te) && (pe === Ee || E(pe, Ee, u, y, T)))
                  return ue.push(Te);
              })) {
                ie = false;
                break;
              }
            } else if (!(pe === Se || E(pe, Se, u, y, T))) {
              ie = false;
              break;
            }
          }
          return T.delete(n), T.delete(o), ie;
        }
        function ub(n, o, u, y, E, T, P) {
          switch (u) {
            case zr:
              if (n.byteLength != o.byteLength || n.byteOffset != o.byteOffset)
                return false;
              n = n.buffer, o = o.buffer;
            case on:
              return !(n.byteLength != o.byteLength || !T(new ua(n), new ua(o)));
            case ve:
            case xe:
            case _r:
              return vr(+n, +o);
            case Ke:
              return n.name == o.name && n.message == o.message;
            case Dt:
            case rn:
              return n == o + "";
            case ft:
              var I = _u;
            case St:
              var z = y & S;
              if (I || (I = ra), n.size != o.size && !z)
                return false;
              var K = P.get(n);
              if (K)
                return K == o;
              y |= d, P.set(n, o);
              var Y = pp(I(n), I(o), y, E, T, P);
              return P.delete(n), Y;
            case Tn:
              if (Wi)
                return Wi.call(n) == Wi.call(o);
          }
          return false;
        }
        function lb(n, o, u, y, E, T) {
          var P = u & S, I = Ku(n), z = I.length, K = Ku(o), Y = K.length;
          if (z != Y && !P)
            return false;
          for (var Q = z; Q--; ) {
            var ie = I[Q];
            if (!(P ? ie in o : Ne.call(o, ie)))
              return false;
          }
          var ue = T.get(n), pe = T.get(o);
          if (ue && pe)
            return ue == o && pe == n;
          var Se = true;
          T.set(n, o), T.set(o, n);
          for (var he = P; ++Q < z; ) {
            ie = I[Q];
            var Ee = n[ie], Te = o[ie];
            if (y)
              var jt = P ? y(Te, Ee, ie, o, n, T) : y(Ee, Te, ie, n, o, T);
            if (!(jt === r ? Ee === Te || E(Ee, Te, u, y, T) : jt)) {
              Se = false;
              break;
            }
            he || (he = ie == "constructor");
          }
          if (Se && !he) {
            var Pt = n.constructor, Ht = o.constructor;
            Pt != Ht && "constructor" in n && "constructor" in o && !(typeof Pt == "function" && Pt instanceof Pt && typeof Ht == "function" && Ht instanceof Ht) && (Se = false);
          }
          return T.delete(n), T.delete(o), Se;
        }
        function Hr(n) {
          return rl(wp(n, r, Rp), n + "");
        }
        function Ku(n) {
          return Id(n, dt, Ju);
        }
        function Vu(n) {
          return Id(n, Lt, hp);
        }
        var Yu = ha ? function(n) {
          return ha.get(n);
        } : vl;
        function Ra(n) {
          for (var o = n.name + "", u = li[o], y = Ne.call(li, o) ? u.length : 0; y--; ) {
            var E = u[y], T = E.func;
            if (T == null || T == n)
              return E.name;
          }
          return o;
        }
        function pi(n) {
          var o = Ne.call(A, "placeholder") ? A : n;
          return o.placeholder;
        }
        function de() {
          var n = A.iteratee || pl;
          return n = n === pl ? Nd : n, arguments.length ? n(arguments[0], arguments[1]) : n;
        }
        function Pa(n, o) {
          var u = n.__data__;
          return mb(o) ? u[typeof o == "string" ? "string" : "hash"] : u.map;
        }
        function Xu(n) {
          for (var o = dt(n), u = o.length; u--; ) {
            var y = o[u], E = n[y];
            o[u] = [y, E, mp(E)];
          }
          return o;
        }
        function Ln(n, o) {
          var u = bw(n, o);
          return Md(u) ? u : r;
        }
        function cb(n) {
          var o = Ne.call(n, Pn), u = n[Pn];
          try {
            n[Pn] = r;
            var y = true;
          } catch {
          }
          var E = aa.call(n);
          return y && (o ? n[Pn] = u : delete n[Pn]), E;
        }
        var Ju = Ou ? function(n) {
          return n == null ? [] : (n = We(n), an(Ou(n), function(o) {
            return bd.call(n, o);
          }));
        } : gl, hp = Ou ? function(n) {
          for (var o = []; n; )
            sn(o, Ju(n)), n = la(n);
          return o;
        } : gl, _t = Tt;
        (Au && _t(new Au(new ArrayBuffer(1))) != zr || Fi && _t(new Fi()) != ft || Tu && _t(Tu.resolve()) != Vo || ui && _t(new ui()) != St || Di && _t(new Di()) != nn) && (_t = function(n) {
          var o = Tt(n), u = o == Jt ? n.constructor : r, y = u ? Mn(u) : "";
          if (y)
            switch (y) {
              case Zw:
                return zr;
              case Gw:
                return ft;
              case Kw:
                return Vo;
              case Vw:
                return St;
              case Yw:
                return nn;
            }
          return o;
        });
        function fb(n, o, u) {
          for (var y = -1, E = u.length; ++y < E; ) {
            var T = u[y], P = T.size;
            switch (T.type) {
              case "drop":
                n += P;
                break;
              case "dropRight":
                o -= P;
                break;
              case "take":
                o = xt(o, n + P);
                break;
              case "takeRight":
                n = ut(n, o - P);
                break;
            }
          }
          return { start: n, end: o };
        }
        function db(n) {
          var o = n.match(y0);
          return o ? o[1].split(w0) : [];
        }
        function vp(n, o, u) {
          o = dn(o, n);
          for (var y = -1, E = o.length, T = false; ++y < E; ) {
            var P = Ar(o[y]);
            if (!(T = n != null && u(n, P)))
              break;
            n = n[P];
          }
          return T || ++y != E ? T : (E = n == null ? 0 : n.length, !!E && Na(E) && qr(P, E) && (we(n) || Nn(n)));
        }
        function pb(n) {
          var o = n.length, u = new n.constructor(o);
          return o && typeof n[0] == "string" && Ne.call(n, "index") && (u.index = n.index, u.input = n.input), u;
        }
        function gp(n) {
          return typeof n.constructor == "function" && !Gi(n) ? ci(la(n)) : {};
        }
        function hb(n, o, u) {
          var y = n.constructor;
          switch (o) {
            case on:
              return qu(n);
            case ve:
            case xe:
              return new y(+n);
            case zr:
              return X1(n, u);
            case Xs:
            case Js:
            case Qs:
            case eu:
            case tu:
            case ru:
            case nu:
            case iu:
            case ou:
              return Jd(n, u);
            case ft:
              return new y();
            case _r:
            case rn:
              return new y(n);
            case Dt:
              return J1(n);
            case St:
              return new y();
            case Tn:
              return Q1(n);
          }
        }
        function vb(n, o) {
          var u = o.length;
          if (!u)
            return n;
          var y = u - 1;
          return o[y] = (u > 1 ? "& " : "") + o[y], o = o.join(u > 2 ? ", " : " "), n.replace(m0, `{
/* [wrapped with ` + o + `] */
`);
        }
        function gb(n) {
          return we(n) || Nn(n) || !!(Sd && n && n[Sd]);
        }
        function qr(n, o) {
          var u = typeof n;
          return o = o ?? ee, !!o && (u == "number" || u != "symbol" && R0.test(n)) && n > -1 && n % 1 == 0 && n < o;
        }
        function Rt(n, o, u) {
          if (!Ve(u))
            return false;
          var y = typeof o;
          return (y == "number" ? It(u) && qr(o, u.length) : y == "string" && o in u) ? vr(u[o], n) : false;
        }
        function Qu(n, o) {
          if (we(n))
            return false;
          var u = typeof n;
          return u == "number" || u == "symbol" || u == "boolean" || n == null || Ut(n) ? true : p0.test(n) || !d0.test(n) || o != null && n in We(o);
        }
        function mb(n) {
          var o = typeof n;
          return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? n !== "__proto__" : n === null;
        }
        function el(n) {
          var o = Ra(n), u = A[o];
          if (typeof u != "function" || !(o in Ae.prototype))
            return false;
          if (n === u)
            return true;
          var y = Yu(u);
          return !!y && n === y[0];
        }
        function yb(n) {
          return !!md && md in n;
        }
        var wb = ia ? Zr : ml;
        function Gi(n) {
          var o = n && n.constructor, u = typeof o == "function" && o.prototype || si;
          return n === u;
        }
        function mp(n) {
          return n === n && !Ve(n);
        }
        function yp(n, o) {
          return function(u) {
            return u == null ? false : u[n] === o && (o !== r || n in We(u));
          };
        }
        function bb(n) {
          var o = La(n, function(y) {
            return u.size === m && u.clear(), y;
          }), u = o.cache;
          return o;
        }
        function Sb(n, o) {
          var u = n[1], y = o[1], E = u | y, T = E < (b | h | W), P = y == W && u == _ || y == W && u == M && n[7].length <= o[8] || y == (W | M) && o[7].length <= o[8] && u == _;
          if (!(T || P))
            return n;
          y & b && (n[2] = o[2], E |= u & b ? 0 : x);
          var I = o[3];
          if (I) {
            var z = n[3];
            n[3] = z ? ep(z, I, o[4]) : I, n[4] = z ? un(n[3], g) : o[4];
          }
          return I = o[5], I && (z = n[5], n[5] = z ? tp(z, I, o[6]) : I, n[6] = z ? un(n[5], g) : o[6]), I = o[7], I && (n[7] = I), y & W && (n[8] = n[8] == null ? o[8] : xt(n[8], o[8])), n[9] == null && (n[9] = o[9]), n[0] = o[0], n[1] = E, n;
        }
        function xb(n) {
          var o = [];
          if (n != null)
            for (var u in We(n))
              o.push(u);
          return o;
        }
        function _b(n) {
          return aa.call(n);
        }
        function wp(n, o, u) {
          return o = ut(o === r ? n.length - 1 : o, 0), function() {
            for (var y = arguments, E = -1, T = ut(y.length - o, 0), P = U(T); ++E < T; )
              P[E] = y[o + E];
            E = -1;
            for (var I = U(o + 1); ++E < o; )
              I[E] = y[E];
            return I[o] = u(P), zt(n, this, I);
          };
        }
        function bp(n, o) {
          return o.length < 2 ? n : In(n, ir(o, 0, -1));
        }
        function Eb(n, o) {
          for (var u = n.length, y = xt(o.length, u), E = $t(n); y--; ) {
            var T = o[y];
            n[y] = qr(T, u) ? E[T] : r;
          }
          return n;
        }
        function tl(n, o) {
          if (!(o === "constructor" && typeof n[o] == "function") && o != "__proto__")
            return n[o];
        }
        var Sp = _p(Hd), Ki = zw || function(n, o) {
          return ht.setTimeout(n, o);
        }, rl = _p(G1);
        function xp(n, o, u) {
          var y = o + "";
          return rl(n, vb(y, Ob(db(y), u)));
        }
        function _p(n) {
          var o = 0, u = 0;
          return function() {
            var y = jw(), E = B - (y - u);
            if (u = y, E > 0) {
              if (++o >= L)
                return arguments[0];
            } else
              o = 0;
            return n.apply(r, arguments);
          };
        }
        function ka(n, o) {
          var u = -1, y = n.length, E = y - 1;
          for (o = o === r ? y : o; ++u < o; ) {
            var T = Du(u, E), P = n[T];
            n[T] = n[u], n[u] = P;
          }
          return n.length = o, n;
        }
        var Ep = bb(function(n) {
          var o = [];
          return n.charCodeAt(0) === 46 && o.push(""), n.replace(h0, function(u, y, E, T) {
            o.push(E ? T.replace(x0, "$1") : y || u);
          }), o;
        });
        function Ar(n) {
          if (typeof n == "string" || Ut(n))
            return n;
          var o = n + "";
          return o == "0" && 1 / n == -V ? "-0" : o;
        }
        function Mn(n) {
          if (n != null) {
            try {
              return oa.call(n);
            } catch {
            }
            try {
              return n + "";
            } catch {
            }
          }
          return "";
        }
        function Ob(n, o) {
          return er(re, function(u) {
            var y = "_." + u[0];
            o & u[1] && !ea(n, y) && n.push(y);
          }), n.sort();
        }
        function Op(n) {
          if (n instanceof Ae)
            return n.clone();
          var o = new rr(n.__wrapped__, n.__chain__);
          return o.__actions__ = $t(n.__actions__), o.__index__ = n.__index__, o.__values__ = n.__values__, o;
        }
        function Ab(n, o, u) {
          (u ? Rt(n, o, u) : o === r) ? o = 1 : o = ut(be(o), 0);
          var y = n == null ? 0 : n.length;
          if (!y || o < 1)
            return [];
          for (var E = 0, T = 0, P = U(da(y / o)); E < y; )
            P[T++] = ir(n, E, E += o);
          return P;
        }
        function Tb(n) {
          for (var o = -1, u = n == null ? 0 : n.length, y = 0, E = []; ++o < u; ) {
            var T = n[o];
            T && (E[y++] = T);
          }
          return E;
        }
        function Rb() {
          var n = arguments.length;
          if (!n)
            return [];
          for (var o = U(n - 1), u = arguments[0], y = n; y--; )
            o[y - 1] = arguments[y];
          return sn(we(u) ? $t(u) : [u], vt(o, 1));
        }
        var Pb = _e(function(n, o) {
          return tt(n) ? Ui(n, vt(o, 1, tt, true)) : [];
        }), kb = _e(function(n, o) {
          var u = or(o);
          return tt(u) && (u = r), tt(n) ? Ui(n, vt(o, 1, tt, true), de(u, 2)) : [];
        }), Cb = _e(function(n, o) {
          var u = or(o);
          return tt(u) && (u = r), tt(n) ? Ui(n, vt(o, 1, tt, true), r, u) : [];
        });
        function $b(n, o, u) {
          var y = n == null ? 0 : n.length;
          return y ? (o = u || o === r ? 1 : be(o), ir(n, o < 0 ? 0 : o, y)) : [];
        }
        function Ib(n, o, u) {
          var y = n == null ? 0 : n.length;
          return y ? (o = u || o === r ? 1 : be(o), o = y - o, ir(n, 0, o < 0 ? 0 : o)) : [];
        }
        function Lb(n, o) {
          return n && n.length ? xa(n, de(o, 3), true, true) : [];
        }
        function Mb(n, o) {
          return n && n.length ? xa(n, de(o, 3), true) : [];
        }
        function Nb(n, o, u, y) {
          var E = n == null ? 0 : n.length;
          return E ? (u && typeof u != "number" && Rt(n, o, u) && (u = 0, y = E), R1(n, o, u, y)) : [];
        }
        function Ap(n, o, u) {
          var y = n == null ? 0 : n.length;
          if (!y)
            return -1;
          var E = u == null ? 0 : be(u);
          return E < 0 && (E = ut(y + E, 0)), ta(n, de(o, 3), E);
        }
        function Tp(n, o, u) {
          var y = n == null ? 0 : n.length;
          if (!y)
            return -1;
          var E = y - 1;
          return u !== r && (E = be(u), E = u < 0 ? ut(y + E, 0) : xt(E, y - 1)), ta(n, de(o, 3), E, true);
        }
        function Rp(n) {
          var o = n == null ? 0 : n.length;
          return o ? vt(n, 1) : [];
        }
        function Fb(n) {
          var o = n == null ? 0 : n.length;
          return o ? vt(n, V) : [];
        }
        function Db(n, o) {
          var u = n == null ? 0 : n.length;
          return u ? (o = o === r ? 1 : be(o), vt(n, o)) : [];
        }
        function zb(n) {
          for (var o = -1, u = n == null ? 0 : n.length, y = {}; ++o < u; ) {
            var E = n[o];
            y[E[0]] = E[1];
          }
          return y;
        }
        function Pp(n) {
          return n && n.length ? n[0] : r;
        }
        function Wb(n, o, u) {
          var y = n == null ? 0 : n.length;
          if (!y)
            return -1;
          var E = u == null ? 0 : be(u);
          return E < 0 && (E = ut(y + E, 0)), ni(n, o, E);
        }
        function Bb(n) {
          var o = n == null ? 0 : n.length;
          return o ? ir(n, 0, -1) : [];
        }
        var Ub = _e(function(n) {
          var o = qe(n, ju);
          return o.length && o[0] === n[0] ? Iu(o) : [];
        }), jb = _e(function(n) {
          var o = or(n), u = qe(n, ju);
          return o === or(u) ? o = r : u.pop(), u.length && u[0] === n[0] ? Iu(u, de(o, 2)) : [];
        }), Hb = _e(function(n) {
          var o = or(n), u = qe(n, ju);
          return o = typeof o == "function" ? o : r, o && u.pop(), u.length && u[0] === n[0] ? Iu(u, r, o) : [];
        });
        function qb(n, o) {
          return n == null ? "" : Bw.call(n, o);
        }
        function or(n) {
          var o = n == null ? 0 : n.length;
          return o ? n[o - 1] : r;
        }
        function Zb(n, o, u) {
          var y = n == null ? 0 : n.length;
          if (!y)
            return -1;
          var E = y;
          return u !== r && (E = be(u), E = E < 0 ? ut(y + E, 0) : xt(E, y - 1)), o === o ? Ow(n, o, E) : ta(n, ld, E, true);
        }
        function Gb(n, o) {
          return n && n.length ? Wd(n, be(o)) : r;
        }
        var Kb = _e(kp);
        function kp(n, o) {
          return n && n.length && o && o.length ? Fu(n, o) : n;
        }
        function Vb(n, o, u) {
          return n && n.length && o && o.length ? Fu(n, o, de(u, 2)) : n;
        }
        function Yb(n, o, u) {
          return n && n.length && o && o.length ? Fu(n, o, r, u) : n;
        }
        var Xb = Hr(function(n, o) {
          var u = n == null ? 0 : n.length, y = Pu(n, o);
          return jd(n, qe(o, function(E) {
            return qr(E, u) ? +E : E;
          }).sort(Qd)), y;
        });
        function Jb(n, o) {
          var u = [];
          if (!(n && n.length))
            return u;
          var y = -1, E = [], T = n.length;
          for (o = de(o, 3); ++y < T; ) {
            var P = n[y];
            o(P, y, n) && (u.push(P), E.push(y));
          }
          return jd(n, E), u;
        }
        function nl(n) {
          return n == null ? n : qw.call(n);
        }
        function Qb(n, o, u) {
          var y = n == null ? 0 : n.length;
          return y ? (u && typeof u != "number" && Rt(n, o, u) ? (o = 0, u = y) : (o = o == null ? 0 : be(o), u = u === r ? y : be(u)), ir(n, o, u)) : [];
        }
        function eS(n, o) {
          return Sa(n, o);
        }
        function tS(n, o, u) {
          return Wu(n, o, de(u, 2));
        }
        function rS(n, o) {
          var u = n == null ? 0 : n.length;
          if (u) {
            var y = Sa(n, o);
            if (y < u && vr(n[y], o))
              return y;
          }
          return -1;
        }
        function nS(n, o) {
          return Sa(n, o, true);
        }
        function iS(n, o, u) {
          return Wu(n, o, de(u, 2), true);
        }
        function oS(n, o) {
          var u = n == null ? 0 : n.length;
          if (u) {
            var y = Sa(n, o, true) - 1;
            if (vr(n[y], o))
              return y;
          }
          return -1;
        }
        function aS(n) {
          return n && n.length ? qd(n) : [];
        }
        function sS(n, o) {
          return n && n.length ? qd(n, de(o, 2)) : [];
        }
        function uS(n) {
          var o = n == null ? 0 : n.length;
          return o ? ir(n, 1, o) : [];
        }
        function lS(n, o, u) {
          return n && n.length ? (o = u || o === r ? 1 : be(o), ir(n, 0, o < 0 ? 0 : o)) : [];
        }
        function cS(n, o, u) {
          var y = n == null ? 0 : n.length;
          return y ? (o = u || o === r ? 1 : be(o), o = y - o, ir(n, o < 0 ? 0 : o, y)) : [];
        }
        function fS(n, o) {
          return n && n.length ? xa(n, de(o, 3), false, true) : [];
        }
        function dS(n, o) {
          return n && n.length ? xa(n, de(o, 3)) : [];
        }
        var pS = _e(function(n) {
          return fn(vt(n, 1, tt, true));
        }), hS = _e(function(n) {
          var o = or(n);
          return tt(o) && (o = r), fn(vt(n, 1, tt, true), de(o, 2));
        }), vS = _e(function(n) {
          var o = or(n);
          return o = typeof o == "function" ? o : r, fn(vt(n, 1, tt, true), r, o);
        });
        function gS(n) {
          return n && n.length ? fn(n) : [];
        }
        function mS(n, o) {
          return n && n.length ? fn(n, de(o, 2)) : [];
        }
        function yS(n, o) {
          return o = typeof o == "function" ? o : r, n && n.length ? fn(n, r, o) : [];
        }
        function il(n) {
          if (!(n && n.length))
            return [];
          var o = 0;
          return n = an(n, function(u) {
            if (tt(u))
              return o = ut(u.length, o), true;
          }), Su(o, function(u) {
            return qe(n, yu(u));
          });
        }
        function Cp(n, o) {
          if (!(n && n.length))
            return [];
          var u = il(n);
          return o == null ? u : qe(u, function(y) {
            return zt(o, r, y);
          });
        }
        var wS = _e(function(n, o) {
          return tt(n) ? Ui(n, o) : [];
        }), bS = _e(function(n) {
          return Uu(an(n, tt));
        }), SS = _e(function(n) {
          var o = or(n);
          return tt(o) && (o = r), Uu(an(n, tt), de(o, 2));
        }), xS = _e(function(n) {
          var o = or(n);
          return o = typeof o == "function" ? o : r, Uu(an(n, tt), r, o);
        }), _S = _e(il);
        function ES(n, o) {
          return Vd(n || [], o || [], Bi);
        }
        function OS(n, o) {
          return Vd(n || [], o || [], qi);
        }
        var AS = _e(function(n) {
          var o = n.length, u = o > 1 ? n[o - 1] : r;
          return u = typeof u == "function" ? (n.pop(), u) : r, Cp(n, u);
        });
        function $p(n) {
          var o = A(n);
          return o.__chain__ = true, o;
        }
        function TS(n, o) {
          return o(n), n;
        }
        function Ca(n, o) {
          return o(n);
        }
        var RS = Hr(function(n) {
          var o = n.length, u = o ? n[0] : 0, y = this.__wrapped__, E = function(T) {
            return Pu(T, n);
          };
          return o > 1 || this.__actions__.length || !(y instanceof Ae) || !qr(u) ? this.thru(E) : (y = y.slice(u, +u + (o ? 1 : 0)), y.__actions__.push({
            func: Ca,
            args: [E],
            thisArg: r
          }), new rr(y, this.__chain__).thru(function(T) {
            return o && !T.length && T.push(r), T;
          }));
        });
        function PS() {
          return $p(this);
        }
        function kS() {
          return new rr(this.value(), this.__chain__);
        }
        function CS() {
          this.__values__ === r && (this.__values__ = Zp(this.value()));
          var n = this.__index__ >= this.__values__.length, o = n ? r : this.__values__[this.__index__++];
          return { done: n, value: o };
        }
        function $S() {
          return this;
        }
        function IS(n) {
          for (var o, u = this; u instanceof ga; ) {
            var y = Op(u);
            y.__index__ = 0, y.__values__ = r, o ? E.__wrapped__ = y : o = y;
            var E = y;
            u = u.__wrapped__;
          }
          return E.__wrapped__ = n, o;
        }
        function LS() {
          var n = this.__wrapped__;
          if (n instanceof Ae) {
            var o = n;
            return this.__actions__.length && (o = new Ae(this)), o = o.reverse(), o.__actions__.push({
              func: Ca,
              args: [nl],
              thisArg: r
            }), new rr(o, this.__chain__);
          }
          return this.thru(nl);
        }
        function MS() {
          return Kd(this.__wrapped__, this.__actions__);
        }
        var NS = _a(function(n, o, u) {
          Ne.call(n, u) ? ++n[u] : Ur(n, u, 1);
        });
        function FS(n, o, u) {
          var y = we(n) ? sd : T1;
          return u && Rt(n, o, u) && (o = r), y(n, de(o, 3));
        }
        function DS(n, o) {
          var u = we(n) ? an : Cd;
          return u(n, de(o, 3));
        }
        var zS = op(Ap), WS = op(Tp);
        function BS(n, o) {
          return vt($a(n, o), 1);
        }
        function US(n, o) {
          return vt($a(n, o), V);
        }
        function jS(n, o, u) {
          return u = u === r ? 1 : be(u), vt($a(n, o), u);
        }
        function Ip(n, o) {
          var u = we(n) ? er : cn;
          return u(n, de(o, 3));
        }
        function Lp(n, o) {
          var u = we(n) ? uw : kd;
          return u(n, de(o, 3));
        }
        var HS = _a(function(n, o, u) {
          Ne.call(n, u) ? n[u].push(o) : Ur(n, u, [o]);
        });
        function qS(n, o, u, y) {
          n = It(n) ? n : vi(n), u = u && !y ? be(u) : 0;
          var E = n.length;
          return u < 0 && (u = ut(E + u, 0)), Fa(n) ? u <= E && n.indexOf(o, u) > -1 : !!E && ni(n, o, u) > -1;
        }
        var ZS = _e(function(n, o, u) {
          var y = -1, E = typeof o == "function", T = It(n) ? U(n.length) : [];
          return cn(n, function(P) {
            T[++y] = E ? zt(o, P, u) : ji(P, o, u);
          }), T;
        }), GS = _a(function(n, o, u) {
          Ur(n, u, o);
        });
        function $a(n, o) {
          var u = we(n) ? qe : Fd;
          return u(n, de(o, 3));
        }
        function KS(n, o, u, y) {
          return n == null ? [] : (we(o) || (o = o == null ? [] : [o]), u = y ? r : u, we(u) || (u = u == null ? [] : [u]), Bd(n, o, u));
        }
        var VS = _a(function(n, o, u) {
          n[u ? 0 : 1].push(o);
        }, function() {
          return [[], []];
        });
        function YS(n, o, u) {
          var y = we(n) ? gu : fd, E = arguments.length < 3;
          return y(n, de(o, 4), u, E, cn);
        }
        function XS(n, o, u) {
          var y = we(n) ? lw : fd, E = arguments.length < 3;
          return y(n, de(o, 4), u, E, kd);
        }
        function JS(n, o) {
          var u = we(n) ? an : Cd;
          return u(n, Ma(de(o, 3)));
        }
        function QS(n) {
          var o = we(n) ? Ad : q1;
          return o(n);
        }
        function ex(n, o, u) {
          (u ? Rt(n, o, u) : o === r) ? o = 1 : o = be(o);
          var y = we(n) ? x1 : Z1;
          return y(n, o);
        }
        function tx(n) {
          var o = we(n) ? _1 : K1;
          return o(n);
        }
        function rx(n) {
          if (n == null)
            return 0;
          if (It(n))
            return Fa(n) ? oi(n) : n.length;
          var o = _t(n);
          return o == ft || o == St ? n.size : Mu(n).length;
        }
        function nx(n, o, u) {
          var y = we(n) ? mu : V1;
          return u && Rt(n, o, u) && (o = r), y(n, de(o, 3));
        }
        var ix = _e(function(n, o) {
          if (n == null)
            return [];
          var u = o.length;
          return u > 1 && Rt(n, o[0], o[1]) ? o = [] : u > 2 && Rt(o[0], o[1], o[2]) && (o = [o[0]]), Bd(n, vt(o, 1), []);
        }), Ia = Dw || function() {
          return ht.Date.now();
        };
        function ox(n, o) {
          if (typeof o != "function")
            throw new tr(l);
          return n = be(n), function() {
            if (--n < 1)
              return o.apply(this, arguments);
          };
        }
        function Mp(n, o, u) {
          return o = u ? r : o, o = n && o == null ? n.length : o, jr(n, W, r, r, r, r, o);
        }
        function Np(n, o) {
          var u;
          if (typeof o != "function")
            throw new tr(l);
          return n = be(n), function() {
            return --n > 0 && (u = o.apply(this, arguments)), n <= 1 && (o = r), u;
          };
        }
        var ol = _e(function(n, o, u) {
          var y = b;
          if (u.length) {
            var E = un(u, pi(ol));
            y |= O;
          }
          return jr(n, y, o, u, E);
        }), Fp = _e(function(n, o, u) {
          var y = b | h;
          if (u.length) {
            var E = un(u, pi(Fp));
            y |= O;
          }
          return jr(o, y, n, u, E);
        });
        function Dp(n, o, u) {
          o = u ? r : o;
          var y = jr(n, _, r, r, r, r, r, o);
          return y.placeholder = Dp.placeholder, y;
        }
        function zp(n, o, u) {
          o = u ? r : o;
          var y = jr(n, R, r, r, r, r, r, o);
          return y.placeholder = zp.placeholder, y;
        }
        function Wp(n, o, u) {
          var y, E, T, P, I, z, K = 0, Y = false, Q = false, ie = true;
          if (typeof n != "function")
            throw new tr(l);
          o = ar(o) || 0, Ve(u) && (Y = !!u.leading, Q = "maxWait" in u, T = Q ? ut(ar(u.maxWait) || 0, o) : T, ie = "trailing" in u ? !!u.trailing : ie);
          function ue(rt) {
            var gr = y, Kr = E;
            return y = E = r, K = rt, P = n.apply(Kr, gr), P;
          }
          function pe(rt) {
            return K = rt, I = Ki(Ee, o), Y ? ue(rt) : P;
          }
          function Se(rt) {
            var gr = rt - z, Kr = rt - K, oh = o - gr;
            return Q ? xt(oh, T - Kr) : oh;
          }
          function he(rt) {
            var gr = rt - z, Kr = rt - K;
            return z === r || gr >= o || gr < 0 || Q && Kr >= T;
          }
          function Ee() {
            var rt = Ia();
            if (he(rt))
              return Te(rt);
            I = Ki(Ee, Se(rt));
          }
          function Te(rt) {
            return I = r, ie && y ? ue(rt) : (y = E = r, P);
          }
          function jt() {
            I !== r && Yd(I), K = 0, y = z = E = I = r;
          }
          function Pt() {
            return I === r ? P : Te(Ia());
          }
          function Ht() {
            var rt = Ia(), gr = he(rt);
            if (y = arguments, E = this, z = rt, gr) {
              if (I === r)
                return pe(z);
              if (Q)
                return Yd(I), I = Ki(Ee, o), ue(z);
            }
            return I === r && (I = Ki(Ee, o)), P;
          }
          return Ht.cancel = jt, Ht.flush = Pt, Ht;
        }
        var ax = _e(function(n, o) {
          return Pd(n, 1, o);
        }), sx = _e(function(n, o, u) {
          return Pd(n, ar(o) || 0, u);
        });
        function ux(n) {
          return jr(n, N);
        }
        function La(n, o) {
          if (typeof n != "function" || o != null && typeof o != "function")
            throw new tr(l);
          var u = function() {
            var y = arguments, E = o ? o.apply(this, y) : y[0], T = u.cache;
            if (T.has(E))
              return T.get(E);
            var P = n.apply(this, y);
            return u.cache = T.set(E, P) || T, P;
          };
          return u.cache = new (La.Cache || Br)(), u;
        }
        La.Cache = Br;
        function Ma(n) {
          if (typeof n != "function")
            throw new tr(l);
          return function() {
            var o = arguments;
            switch (o.length) {
              case 0:
                return !n.call(this);
              case 1:
                return !n.call(this, o[0]);
              case 2:
                return !n.call(this, o[0], o[1]);
              case 3:
                return !n.call(this, o[0], o[1], o[2]);
            }
            return !n.apply(this, o);
          };
        }
        function lx(n) {
          return Np(2, n);
        }
        var cx = Y1(function(n, o) {
          o = o.length == 1 && we(o[0]) ? qe(o[0], Wt(de())) : qe(vt(o, 1), Wt(de()));
          var u = o.length;
          return _e(function(y) {
            for (var E = -1, T = xt(y.length, u); ++E < T; )
              y[E] = o[E].call(this, y[E]);
            return zt(n, this, y);
          });
        }), al = _e(function(n, o) {
          var u = un(o, pi(al));
          return jr(n, O, r, o, u);
        }), Bp = _e(function(n, o) {
          var u = un(o, pi(Bp));
          return jr(n, C, r, o, u);
        }), fx = Hr(function(n, o) {
          return jr(n, M, r, r, r, o);
        });
        function dx(n, o) {
          if (typeof n != "function")
            throw new tr(l);
          return o = o === r ? o : be(o), _e(n, o);
        }
        function px(n, o) {
          if (typeof n != "function")
            throw new tr(l);
          return o = o == null ? 0 : ut(be(o), 0), _e(function(u) {
            var y = u[o], E = pn(u, 0, o);
            return y && sn(E, y), zt(n, this, E);
          });
        }
        function hx(n, o, u) {
          var y = true, E = true;
          if (typeof n != "function")
            throw new tr(l);
          return Ve(u) && (y = "leading" in u ? !!u.leading : y, E = "trailing" in u ? !!u.trailing : E), Wp(n, o, {
            leading: y,
            maxWait: o,
            trailing: E
          });
        }
        function vx(n) {
          return Mp(n, 1);
        }
        function gx(n, o) {
          return al(Hu(o), n);
        }
        function mx() {
          if (!arguments.length)
            return [];
          var n = arguments[0];
          return we(n) ? n : [n];
        }
        function yx(n) {
          return nr(n, w);
        }
        function wx(n, o) {
          return o = typeof o == "function" ? o : r, nr(n, w, o);
        }
        function bx(n) {
          return nr(n, v | w);
        }
        function Sx(n, o) {
          return o = typeof o == "function" ? o : r, nr(n, v | w, o);
        }
        function xx(n, o) {
          return o == null || Rd(n, o, dt(o));
        }
        function vr(n, o) {
          return n === o || n !== n && o !== o;
        }
        var _x = Ta($u), Ex = Ta(function(n, o) {
          return n >= o;
        }), Nn = Ld(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? Ld : function(n) {
          return Je(n) && Ne.call(n, "callee") && !bd.call(n, "callee");
        }, we = U.isArray, Ox = td ? Wt(td) : I1;
        function It(n) {
          return n != null && Na(n.length) && !Zr(n);
        }
        function tt(n) {
          return Je(n) && It(n);
        }
        function Ax(n) {
          return n === true || n === false || Je(n) && Tt(n) == ve;
        }
        var hn = Ww || ml, Tx = rd ? Wt(rd) : L1;
        function Rx(n) {
          return Je(n) && n.nodeType === 1 && !Vi(n);
        }
        function Px(n) {
          if (n == null)
            return true;
          if (It(n) && (we(n) || typeof n == "string" || typeof n.splice == "function" || hn(n) || hi(n) || Nn(n)))
            return !n.length;
          var o = _t(n);
          if (o == ft || o == St)
            return !n.size;
          if (Gi(n))
            return !Mu(n).length;
          for (var u in n)
            if (Ne.call(n, u))
              return false;
          return true;
        }
        function kx(n, o) {
          return Hi(n, o);
        }
        function Cx(n, o, u) {
          u = typeof u == "function" ? u : r;
          var y = u ? u(n, o) : r;
          return y === r ? Hi(n, o, r, u) : !!y;
        }
        function sl(n) {
          if (!Je(n))
            return false;
          var o = Tt(n);
          return o == Ke || o == Oe || typeof n.message == "string" && typeof n.name == "string" && !Vi(n);
        }
        function $x(n) {
          return typeof n == "number" && xd(n);
        }
        function Zr(n) {
          if (!Ve(n))
            return false;
          var o = Tt(n);
          return o == ne || o == bt || o == me || o == Ys;
        }
        function Up(n) {
          return typeof n == "number" && n == be(n);
        }
        function Na(n) {
          return typeof n == "number" && n > -1 && n % 1 == 0 && n <= ee;
        }
        function Ve(n) {
          var o = typeof n;
          return n != null && (o == "object" || o == "function");
        }
        function Je(n) {
          return n != null && typeof n == "object";
        }
        var jp = nd ? Wt(nd) : N1;
        function Ix(n, o) {
          return n === o || Lu(n, o, Xu(o));
        }
        function Lx(n, o, u) {
          return u = typeof u == "function" ? u : r, Lu(n, o, Xu(o), u);
        }
        function Mx(n) {
          return Hp(n) && n != +n;
        }
        function Nx(n) {
          if (wb(n))
            throw new ye(s);
          return Md(n);
        }
        function Fx(n) {
          return n === null;
        }
        function Dx(n) {
          return n == null;
        }
        function Hp(n) {
          return typeof n == "number" || Je(n) && Tt(n) == _r;
        }
        function Vi(n) {
          if (!Je(n) || Tt(n) != Jt)
            return false;
          var o = la(n);
          if (o === null)
            return true;
          var u = Ne.call(o, "constructor") && o.constructor;
          return typeof u == "function" && u instanceof u && oa.call(u) == Lw;
        }
        var ul = id ? Wt(id) : F1;
        function zx(n) {
          return Up(n) && n >= -ee && n <= ee;
        }
        var qp = od ? Wt(od) : D1;
        function Fa(n) {
          return typeof n == "string" || !we(n) && Je(n) && Tt(n) == rn;
        }
        function Ut(n) {
          return typeof n == "symbol" || Je(n) && Tt(n) == Tn;
        }
        var hi = ad ? Wt(ad) : z1;
        function Wx(n) {
          return n === r;
        }
        function Bx(n) {
          return Je(n) && _t(n) == nn;
        }
        function Ux(n) {
          return Je(n) && Tt(n) == Yo;
        }
        var jx = Ta(Nu), Hx = Ta(function(n, o) {
          return n <= o;
        });
        function Zp(n) {
          if (!n)
            return [];
          if (It(n))
            return Fa(n) ? pr(n) : $t(n);
          if (Ni && n[Ni])
            return xw(n[Ni]());
          var o = _t(n), u = o == ft ? _u : o == St ? ra : vi;
          return u(n);
        }
        function Gr(n) {
          if (!n)
            return n === 0 ? n : 0;
          if (n = ar(n), n === V || n === -V) {
            var o = n < 0 ? -1 : 1;
            return o * fe;
          }
          return n === n ? n : 0;
        }
        function be(n) {
          var o = Gr(n), u = o % 1;
          return o === o ? u ? o - u : o : 0;
        }
        function Gp(n) {
          return n ? $n(be(n), 0, J) : 0;
        }
        function ar(n) {
          if (typeof n == "number")
            return n;
          if (Ut(n))
            return q;
          if (Ve(n)) {
            var o = typeof n.valueOf == "function" ? n.valueOf() : n;
            n = Ve(o) ? o + "" : o;
          }
          if (typeof n != "string")
            return n === 0 ? n : +n;
          n = dd(n);
          var u = O0.test(n);
          return u || T0.test(n) ? ow(n.slice(2), u ? 2 : 8) : E0.test(n) ? q : +n;
        }
        function Kp(n) {
          return Or(n, Lt(n));
        }
        function qx(n) {
          return n ? $n(be(n), -ee, ee) : n === 0 ? n : 0;
        }
        function $e(n) {
          return n == null ? "" : Bt(n);
        }
        var Zx = fi(function(n, o) {
          if (Gi(o) || It(o)) {
            Or(o, dt(o), n);
            return;
          }
          for (var u in o)
            Ne.call(o, u) && Bi(n, u, o[u]);
        }), Vp = fi(function(n, o) {
          Or(o, Lt(o), n);
        }), Da = fi(function(n, o, u, y) {
          Or(o, Lt(o), n, y);
        }), Gx = fi(function(n, o, u, y) {
          Or(o, dt(o), n, y);
        }), Kx = Hr(Pu);
        function Vx(n, o) {
          var u = ci(n);
          return o == null ? u : Td(u, o);
        }
        var Yx = _e(function(n, o) {
          n = We(n);
          var u = -1, y = o.length, E = y > 2 ? o[2] : r;
          for (E && Rt(o[0], o[1], E) && (y = 1); ++u < y; )
            for (var T = o[u], P = Lt(T), I = -1, z = P.length; ++I < z; ) {
              var K = P[I], Y = n[K];
              (Y === r || vr(Y, si[K]) && !Ne.call(n, K)) && (n[K] = T[K]);
            }
          return n;
        }), Xx = _e(function(n) {
          return n.push(r, dp), zt(Yp, r, n);
        });
        function Jx(n, o) {
          return ud(n, de(o, 3), Er);
        }
        function Qx(n, o) {
          return ud(n, de(o, 3), Cu);
        }
        function e_(n, o) {
          return n == null ? n : ku(n, de(o, 3), Lt);
        }
        function t_(n, o) {
          return n == null ? n : $d(n, de(o, 3), Lt);
        }
        function r_(n, o) {
          return n && Er(n, de(o, 3));
        }
        function n_(n, o) {
          return n && Cu(n, de(o, 3));
        }
        function i_(n) {
          return n == null ? [] : wa(n, dt(n));
        }
        function o_(n) {
          return n == null ? [] : wa(n, Lt(n));
        }
        function ll(n, o, u) {
          var y = n == null ? r : In(n, o);
          return y === r ? u : y;
        }
        function a_(n, o) {
          return n != null && vp(n, o, P1);
        }
        function cl(n, o) {
          return n != null && vp(n, o, k1);
        }
        var s_ = sp(function(n, o, u) {
          o != null && typeof o.toString != "function" && (o = aa.call(o)), n[o] = u;
        }, dl(Mt)), u_ = sp(function(n, o, u) {
          o != null && typeof o.toString != "function" && (o = aa.call(o)), Ne.call(n, o) ? n[o].push(u) : n[o] = [u];
        }, de), l_ = _e(ji);
        function dt(n) {
          return It(n) ? Od(n) : Mu(n);
        }
        function Lt(n) {
          return It(n) ? Od(n, true) : W1(n);
        }
        function c_(n, o) {
          var u = {};
          return o = de(o, 3), Er(n, function(y, E, T) {
            Ur(u, o(y, E, T), y);
          }), u;
        }
        function f_(n, o) {
          var u = {};
          return o = de(o, 3), Er(n, function(y, E, T) {
            Ur(u, E, o(y, E, T));
          }), u;
        }
        var d_ = fi(function(n, o, u) {
          ba(n, o, u);
        }), Yp = fi(function(n, o, u, y) {
          ba(n, o, u, y);
        }), p_ = Hr(function(n, o) {
          var u = {};
          if (n == null)
            return u;
          var y = false;
          o = qe(o, function(T) {
            return T = dn(T, n), y || (y = T.length > 1), T;
          }), Or(n, Vu(n), u), y && (u = nr(u, v | p | w, sb));
          for (var E = o.length; E--; )
            Bu(u, o[E]);
          return u;
        });
        function h_(n, o) {
          return Xp(n, Ma(de(o)));
        }
        var v_ = Hr(function(n, o) {
          return n == null ? {} : U1(n, o);
        });
        function Xp(n, o) {
          if (n == null)
            return {};
          var u = qe(Vu(n), function(y) {
            return [y];
          });
          return o = de(o), Ud(n, u, function(y, E) {
            return o(y, E[0]);
          });
        }
        function g_(n, o, u) {
          o = dn(o, n);
          var y = -1, E = o.length;
          for (E || (E = 1, n = r); ++y < E; ) {
            var T = n == null ? r : n[Ar(o[y])];
            T === r && (y = E, T = u), n = Zr(T) ? T.call(n) : T;
          }
          return n;
        }
        function m_(n, o, u) {
          return n == null ? n : qi(n, o, u);
        }
        function y_(n, o, u, y) {
          return y = typeof y == "function" ? y : r, n == null ? n : qi(n, o, u, y);
        }
        var Jp = cp(dt), Qp = cp(Lt);
        function w_(n, o, u) {
          var y = we(n), E = y || hn(n) || hi(n);
          if (o = de(o, 4), u == null) {
            var T = n && n.constructor;
            E ? u = y ? new T() : [] : Ve(n) ? u = Zr(T) ? ci(la(n)) : {} : u = {};
          }
          return (E ? er : Er)(n, function(P, I, z) {
            return o(u, P, I, z);
          }), u;
        }
        function b_(n, o) {
          return n == null ? true : Bu(n, o);
        }
        function S_(n, o, u) {
          return n == null ? n : Gd(n, o, Hu(u));
        }
        function x_(n, o, u, y) {
          return y = typeof y == "function" ? y : r, n == null ? n : Gd(n, o, Hu(u), y);
        }
        function vi(n) {
          return n == null ? [] : xu(n, dt(n));
        }
        function __(n) {
          return n == null ? [] : xu(n, Lt(n));
        }
        function E_(n, o, u) {
          return u === r && (u = o, o = r), u !== r && (u = ar(u), u = u === u ? u : 0), o !== r && (o = ar(o), o = o === o ? o : 0), $n(ar(n), o, u);
        }
        function O_(n, o, u) {
          return o = Gr(o), u === r ? (u = o, o = 0) : u = Gr(u), n = ar(n), C1(n, o, u);
        }
        function A_(n, o, u) {
          if (u && typeof u != "boolean" && Rt(n, o, u) && (o = u = r), u === r && (typeof o == "boolean" ? (u = o, o = r) : typeof n == "boolean" && (u = n, n = r)), n === r && o === r ? (n = 0, o = 1) : (n = Gr(n), o === r ? (o = n, n = 0) : o = Gr(o)), n > o) {
            var y = n;
            n = o, o = y;
          }
          if (u || n % 1 || o % 1) {
            var E = _d();
            return xt(n + E * (o - n + iw("1e-" + ((E + "").length - 1))), o);
          }
          return Du(n, o);
        }
        var T_ = di(function(n, o, u) {
          return o = o.toLowerCase(), n + (u ? eh(o) : o);
        });
        function eh(n) {
          return fl($e(n).toLowerCase());
        }
        function th(n) {
          return n = $e(n), n && n.replace(P0, mw).replace(K0, "");
        }
        function R_(n, o, u) {
          n = $e(n), o = Bt(o);
          var y = n.length;
          u = u === r ? y : $n(be(u), 0, y);
          var E = u;
          return u -= o.length, u >= 0 && n.slice(u, E) == o;
        }
        function P_(n) {
          return n = $e(n), n && l0.test(n) ? n.replace($f, yw) : n;
        }
        function k_(n) {
          return n = $e(n), n && v0.test(n) ? n.replace(au, "\\$&") : n;
        }
        var C_ = di(function(n, o, u) {
          return n + (u ? "-" : "") + o.toLowerCase();
        }), $_ = di(function(n, o, u) {
          return n + (u ? " " : "") + o.toLowerCase();
        }), I_ = ip("toLowerCase");
        function L_(n, o, u) {
          n = $e(n), o = be(o);
          var y = o ? oi(n) : 0;
          if (!o || y >= o)
            return n;
          var E = (o - y) / 2;
          return Aa(pa(E), u) + n + Aa(da(E), u);
        }
        function M_(n, o, u) {
          n = $e(n), o = be(o);
          var y = o ? oi(n) : 0;
          return o && y < o ? n + Aa(o - y, u) : n;
        }
        function N_(n, o, u) {
          n = $e(n), o = be(o);
          var y = o ? oi(n) : 0;
          return o && y < o ? Aa(o - y, u) + n : n;
        }
        function F_(n, o, u) {
          return u || o == null ? o = 0 : o && (o = +o), Hw($e(n).replace(su, ""), o || 0);
        }
        function D_(n, o, u) {
          return (u ? Rt(n, o, u) : o === r) ? o = 1 : o = be(o), zu($e(n), o);
        }
        function z_() {
          var n = arguments, o = $e(n[0]);
          return n.length < 3 ? o : o.replace(n[1], n[2]);
        }
        var W_ = di(function(n, o, u) {
          return n + (u ? "_" : "") + o.toLowerCase();
        });
        function B_(n, o, u) {
          return u && typeof u != "number" && Rt(n, o, u) && (o = u = r), u = u === r ? J : u >>> 0, u ? (n = $e(n), n && (typeof o == "string" || o != null && !ul(o)) && (o = Bt(o), !o && ii(n)) ? pn(pr(n), 0, u) : n.split(o, u)) : [];
        }
        var U_ = di(function(n, o, u) {
          return n + (u ? " " : "") + fl(o);
        });
        function j_(n, o, u) {
          return n = $e(n), u = u == null ? 0 : $n(be(u), 0, n.length), o = Bt(o), n.slice(u, u + o.length) == o;
        }
        function H_(n, o, u) {
          var y = A.templateSettings;
          u && Rt(n, o, u) && (o = r), n = $e(n), o = Da({}, o, y, fp);
          var E = Da({}, o.imports, y.imports, fp), T = dt(E), P = xu(E, T), I, z, K = 0, Y = o.interpolate || Xo, Q = "__p += '", ie = Eu(
            (o.escape || Xo).source + "|" + Y.source + "|" + (Y === If ? _0 : Xo).source + "|" + (o.evaluate || Xo).source + "|$",
            "g"
          ), ue = "//# sourceURL=" + (Ne.call(o, "sourceURL") ? (o.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Q0 + "]") + `
`;
          n.replace(ie, function(he, Ee, Te, jt, Pt, Ht) {
            return Te || (Te = jt), Q += n.slice(K, Ht).replace(k0, ww), Ee && (I = true, Q += `' +
__e(` + Ee + `) +
'`), Pt && (z = true, Q += `';
` + Pt + `;
__p += '`), Te && (Q += `' +
((__t = (` + Te + `)) == null ? '' : __t) +
'`), K = Ht + he.length, he;
          }), Q += `';
`;
          var pe = Ne.call(o, "variable") && o.variable;
          if (!pe)
            Q = `with (obj) {
` + Q + `
}
`;
          else if (S0.test(pe))
            throw new ye(c);
          Q = (z ? Q.replace(o0, "") : Q).replace(a0, "$1").replace(s0, "$1;"), Q = "function(" + (pe || "obj") + `) {
` + (pe ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (I ? ", __e = _.escape" : "") + (z ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + Q + `return __p
}`;
          var Se = nh(function() {
            return Pe(T, ue + "return " + Q).apply(r, P);
          });
          if (Se.source = Q, sl(Se))
            throw Se;
          return Se;
        }
        function q_(n) {
          return $e(n).toLowerCase();
        }
        function Z_(n) {
          return $e(n).toUpperCase();
        }
        function G_(n, o, u) {
          if (n = $e(n), n && (u || o === r))
            return dd(n);
          if (!n || !(o = Bt(o)))
            return n;
          var y = pr(n), E = pr(o), T = pd(y, E), P = hd(y, E) + 1;
          return pn(y, T, P).join("");
        }
        function K_(n, o, u) {
          if (n = $e(n), n && (u || o === r))
            return n.slice(0, gd(n) + 1);
          if (!n || !(o = Bt(o)))
            return n;
          var y = pr(n), E = hd(y, pr(o)) + 1;
          return pn(y, 0, E).join("");
        }
        function V_(n, o, u) {
          if (n = $e(n), n && (u || o === r))
            return n.replace(su, "");
          if (!n || !(o = Bt(o)))
            return n;
          var y = pr(n), E = pd(y, pr(o));
          return pn(y, E).join("");
        }
        function Y_(n, o) {
          var u = Z, y = D;
          if (Ve(o)) {
            var E = "separator" in o ? o.separator : E;
            u = "length" in o ? be(o.length) : u, y = "omission" in o ? Bt(o.omission) : y;
          }
          n = $e(n);
          var T = n.length;
          if (ii(n)) {
            var P = pr(n);
            T = P.length;
          }
          if (u >= T)
            return n;
          var I = u - oi(y);
          if (I < 1)
            return y;
          var z = P ? pn(P, 0, I).join("") : n.slice(0, I);
          if (E === r)
            return z + y;
          if (P && (I += z.length - I), ul(E)) {
            if (n.slice(I).search(E)) {
              var K, Y = z;
              for (E.global || (E = Eu(E.source, $e(Lf.exec(E)) + "g")), E.lastIndex = 0; K = E.exec(Y); )
                var Q = K.index;
              z = z.slice(0, Q === r ? I : Q);
            }
          } else if (n.indexOf(Bt(E), I) != I) {
            var ie = z.lastIndexOf(E);
            ie > -1 && (z = z.slice(0, ie));
          }
          return z + y;
        }
        function X_(n) {
          return n = $e(n), n && u0.test(n) ? n.replace(Cf, Aw) : n;
        }
        var J_ = di(function(n, o, u) {
          return n + (u ? " " : "") + o.toUpperCase();
        }), fl = ip("toUpperCase");
        function rh(n, o, u) {
          return n = $e(n), o = u ? r : o, o === r ? Sw(n) ? Pw(n) : dw(n) : n.match(o) || [];
        }
        var nh = _e(function(n, o) {
          try {
            return zt(n, r, o);
          } catch (u) {
            return sl(u) ? u : new ye(u);
          }
        }), Q_ = Hr(function(n, o) {
          return er(o, function(u) {
            u = Ar(u), Ur(n, u, ol(n[u], n));
          }), n;
        });
        function eE(n) {
          var o = n == null ? 0 : n.length, u = de();
          return n = o ? qe(n, function(y) {
            if (typeof y[1] != "function")
              throw new tr(l);
            return [u(y[0]), y[1]];
          }) : [], _e(function(y) {
            for (var E = -1; ++E < o; ) {
              var T = n[E];
              if (zt(T[0], this, y))
                return zt(T[1], this, y);
            }
          });
        }
        function tE(n) {
          return A1(nr(n, v));
        }
        function dl(n) {
          return function() {
            return n;
          };
        }
        function rE(n, o) {
          return n == null || n !== n ? o : n;
        }
        var nE = ap(), iE = ap(true);
        function Mt(n) {
          return n;
        }
        function pl(n) {
          return Nd(typeof n == "function" ? n : nr(n, v));
        }
        function oE(n) {
          return Dd(nr(n, v));
        }
        function aE(n, o) {
          return zd(n, nr(o, v));
        }
        var sE = _e(function(n, o) {
          return function(u) {
            return ji(u, n, o);
          };
        }), uE = _e(function(n, o) {
          return function(u) {
            return ji(n, u, o);
          };
        });
        function hl(n, o, u) {
          var y = dt(o), E = wa(o, y);
          u == null && !(Ve(o) && (E.length || !y.length)) && (u = o, o = n, n = this, E = wa(o, dt(o)));
          var T = !(Ve(u) && "chain" in u) || !!u.chain, P = Zr(n);
          return er(E, function(I) {
            var z = o[I];
            n[I] = z, P && (n.prototype[I] = function() {
              var K = this.__chain__;
              if (T || K) {
                var Y = n(this.__wrapped__), Q = Y.__actions__ = $t(this.__actions__);
                return Q.push({ func: z, args: arguments, thisArg: n }), Y.__chain__ = K, Y;
              }
              return z.apply(n, sn([this.value()], arguments));
            });
          }), n;
        }
        function lE() {
          return ht._ === this && (ht._ = Mw), this;
        }
        function vl() {
        }
        function cE(n) {
          return n = be(n), _e(function(o) {
            return Wd(o, n);
          });
        }
        var fE = Zu(qe), dE = Zu(sd), pE = Zu(mu);
        function ih(n) {
          return Qu(n) ? yu(Ar(n)) : j1(n);
        }
        function hE(n) {
          return function(o) {
            return n == null ? r : In(n, o);
          };
        }
        var vE = up(), gE = up(true);
        function gl() {
          return [];
        }
        function ml() {
          return false;
        }
        function mE() {
          return {};
        }
        function yE() {
          return "";
        }
        function wE() {
          return true;
        }
        function bE(n, o) {
          if (n = be(n), n < 1 || n > ee)
            return [];
          var u = J, y = xt(n, J);
          o = de(o), n -= J;
          for (var E = Su(y, o); ++u < n; )
            o(u);
          return E;
        }
        function SE(n) {
          return we(n) ? qe(n, Ar) : Ut(n) ? [n] : $t(Ep($e(n)));
        }
        function xE(n) {
          var o = ++Iw;
          return $e(n) + o;
        }
        var _E = Oa(function(n, o) {
          return n + o;
        }, 0), EE = Gu("ceil"), OE = Oa(function(n, o) {
          return n / o;
        }, 1), AE = Gu("floor");
        function TE(n) {
          return n && n.length ? ya(n, Mt, $u) : r;
        }
        function RE(n, o) {
          return n && n.length ? ya(n, de(o, 2), $u) : r;
        }
        function PE(n) {
          return cd(n, Mt);
        }
        function kE(n, o) {
          return cd(n, de(o, 2));
        }
        function CE(n) {
          return n && n.length ? ya(n, Mt, Nu) : r;
        }
        function $E(n, o) {
          return n && n.length ? ya(n, de(o, 2), Nu) : r;
        }
        var IE = Oa(function(n, o) {
          return n * o;
        }, 1), LE = Gu("round"), ME = Oa(function(n, o) {
          return n - o;
        }, 0);
        function NE(n) {
          return n && n.length ? bu(n, Mt) : 0;
        }
        function FE(n, o) {
          return n && n.length ? bu(n, de(o, 2)) : 0;
        }
        return A.after = ox, A.ary = Mp, A.assign = Zx, A.assignIn = Vp, A.assignInWith = Da, A.assignWith = Gx, A.at = Kx, A.before = Np, A.bind = ol, A.bindAll = Q_, A.bindKey = Fp, A.castArray = mx, A.chain = $p, A.chunk = Ab, A.compact = Tb, A.concat = Rb, A.cond = eE, A.conforms = tE, A.constant = dl, A.countBy = NS, A.create = Vx, A.curry = Dp, A.curryRight = zp, A.debounce = Wp, A.defaults = Yx, A.defaultsDeep = Xx, A.defer = ax, A.delay = sx, A.difference = Pb, A.differenceBy = kb, A.differenceWith = Cb, A.drop = $b, A.dropRight = Ib, A.dropRightWhile = Lb, A.dropWhile = Mb, A.fill = Nb, A.filter = DS, A.flatMap = BS, A.flatMapDeep = US, A.flatMapDepth = jS, A.flatten = Rp, A.flattenDeep = Fb, A.flattenDepth = Db, A.flip = ux, A.flow = nE, A.flowRight = iE, A.fromPairs = zb, A.functions = i_, A.functionsIn = o_, A.groupBy = HS, A.initial = Bb, A.intersection = Ub, A.intersectionBy = jb, A.intersectionWith = Hb, A.invert = s_, A.invertBy = u_, A.invokeMap = ZS, A.iteratee = pl, A.keyBy = GS, A.keys = dt, A.keysIn = Lt, A.map = $a, A.mapKeys = c_, A.mapValues = f_, A.matches = oE, A.matchesProperty = aE, A.memoize = La, A.merge = d_, A.mergeWith = Yp, A.method = sE, A.methodOf = uE, A.mixin = hl, A.negate = Ma, A.nthArg = cE, A.omit = p_, A.omitBy = h_, A.once = lx, A.orderBy = KS, A.over = fE, A.overArgs = cx, A.overEvery = dE, A.overSome = pE, A.partial = al, A.partialRight = Bp, A.partition = VS, A.pick = v_, A.pickBy = Xp, A.property = ih, A.propertyOf = hE, A.pull = Kb, A.pullAll = kp, A.pullAllBy = Vb, A.pullAllWith = Yb, A.pullAt = Xb, A.range = vE, A.rangeRight = gE, A.rearg = fx, A.reject = JS, A.remove = Jb, A.rest = dx, A.reverse = nl, A.sampleSize = ex, A.set = m_, A.setWith = y_, A.shuffle = tx, A.slice = Qb, A.sortBy = ix, A.sortedUniq = aS, A.sortedUniqBy = sS, A.split = B_, A.spread = px, A.tail = uS, A.take = lS, A.takeRight = cS, A.takeRightWhile = fS, A.takeWhile = dS, A.tap = TS, A.throttle = hx, A.thru = Ca, A.toArray = Zp, A.toPairs = Jp, A.toPairsIn = Qp, A.toPath = SE, A.toPlainObject = Kp, A.transform = w_, A.unary = vx, A.union = pS, A.unionBy = hS, A.unionWith = vS, A.uniq = gS, A.uniqBy = mS, A.uniqWith = yS, A.unset = b_, A.unzip = il, A.unzipWith = Cp, A.update = S_, A.updateWith = x_, A.values = vi, A.valuesIn = __, A.without = wS, A.words = rh, A.wrap = gx, A.xor = bS, A.xorBy = SS, A.xorWith = xS, A.zip = _S, A.zipObject = ES, A.zipObjectDeep = OS, A.zipWith = AS, A.entries = Jp, A.entriesIn = Qp, A.extend = Vp, A.extendWith = Da, hl(A, A), A.add = _E, A.attempt = nh, A.camelCase = T_, A.capitalize = eh, A.ceil = EE, A.clamp = E_, A.clone = yx, A.cloneDeep = bx, A.cloneDeepWith = Sx, A.cloneWith = wx, A.conformsTo = xx, A.deburr = th, A.defaultTo = rE, A.divide = OE, A.endsWith = R_, A.eq = vr, A.escape = P_, A.escapeRegExp = k_, A.every = FS, A.find = zS, A.findIndex = Ap, A.findKey = Jx, A.findLast = WS, A.findLastIndex = Tp, A.findLastKey = Qx, A.floor = AE, A.forEach = Ip, A.forEachRight = Lp, A.forIn = e_, A.forInRight = t_, A.forOwn = r_, A.forOwnRight = n_, A.get = ll, A.gt = _x, A.gte = Ex, A.has = a_, A.hasIn = cl, A.head = Pp, A.identity = Mt, A.includes = qS, A.indexOf = Wb, A.inRange = O_, A.invoke = l_, A.isArguments = Nn, A.isArray = we, A.isArrayBuffer = Ox, A.isArrayLike = It, A.isArrayLikeObject = tt, A.isBoolean = Ax, A.isBuffer = hn, A.isDate = Tx, A.isElement = Rx, A.isEmpty = Px, A.isEqual = kx, A.isEqualWith = Cx, A.isError = sl, A.isFinite = $x, A.isFunction = Zr, A.isInteger = Up, A.isLength = Na, A.isMap = jp, A.isMatch = Ix, A.isMatchWith = Lx, A.isNaN = Mx, A.isNative = Nx, A.isNil = Dx, A.isNull = Fx, A.isNumber = Hp, A.isObject = Ve, A.isObjectLike = Je, A.isPlainObject = Vi, A.isRegExp = ul, A.isSafeInteger = zx, A.isSet = qp, A.isString = Fa, A.isSymbol = Ut, A.isTypedArray = hi, A.isUndefined = Wx, A.isWeakMap = Bx, A.isWeakSet = Ux, A.join = qb, A.kebabCase = C_, A.last = or, A.lastIndexOf = Zb, A.lowerCase = $_, A.lowerFirst = I_, A.lt = jx, A.lte = Hx, A.max = TE, A.maxBy = RE, A.mean = PE, A.meanBy = kE, A.min = CE, A.minBy = $E, A.stubArray = gl, A.stubFalse = ml, A.stubObject = mE, A.stubString = yE, A.stubTrue = wE, A.multiply = IE, A.nth = Gb, A.noConflict = lE, A.noop = vl, A.now = Ia, A.pad = L_, A.padEnd = M_, A.padStart = N_, A.parseInt = F_, A.random = A_, A.reduce = YS, A.reduceRight = XS, A.repeat = D_, A.replace = z_, A.result = g_, A.round = LE, A.runInContext = F, A.sample = QS, A.size = rx, A.snakeCase = W_, A.some = nx, A.sortedIndex = eS, A.sortedIndexBy = tS, A.sortedIndexOf = rS, A.sortedLastIndex = nS, A.sortedLastIndexBy = iS, A.sortedLastIndexOf = oS, A.startCase = U_, A.startsWith = j_, A.subtract = ME, A.sum = NE, A.sumBy = FE, A.template = H_, A.times = bE, A.toFinite = Gr, A.toInteger = be, A.toLength = Gp, A.toLower = q_, A.toNumber = ar, A.toSafeInteger = qx, A.toString = $e, A.toUpper = Z_, A.trim = G_, A.trimEnd = K_, A.trimStart = V_, A.truncate = Y_, A.unescape = X_, A.uniqueId = xE, A.upperCase = J_, A.upperFirst = fl, A.each = Ip, A.eachRight = Lp, A.first = Pp, hl(A, (function() {
          var n = {};
          return Er(A, function(o, u) {
            Ne.call(A.prototype, u) || (n[u] = o);
          }), n;
        })(), { chain: false }), A.VERSION = i, er(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
          A[n].placeholder = A;
        }), er(["drop", "take"], function(n, o) {
          Ae.prototype[n] = function(u) {
            u = u === r ? 1 : ut(be(u), 0);
            var y = this.__filtered__ && !o ? new Ae(this) : this.clone();
            return y.__filtered__ ? y.__takeCount__ = xt(u, y.__takeCount__) : y.__views__.push({
              size: xt(u, J),
              type: n + (y.__dir__ < 0 ? "Right" : "")
            }), y;
          }, Ae.prototype[n + "Right"] = function(u) {
            return this.reverse()[n](u).reverse();
          };
        }), er(["filter", "map", "takeWhile"], function(n, o) {
          var u = o + 1, y = u == H || u == X;
          Ae.prototype[n] = function(E) {
            var T = this.clone();
            return T.__iteratees__.push({
              iteratee: de(E, 3),
              type: u
            }), T.__filtered__ = T.__filtered__ || y, T;
          };
        }), er(["head", "last"], function(n, o) {
          var u = "take" + (o ? "Right" : "");
          Ae.prototype[n] = function() {
            return this[u](1).value()[0];
          };
        }), er(["initial", "tail"], function(n, o) {
          var u = "drop" + (o ? "" : "Right");
          Ae.prototype[n] = function() {
            return this.__filtered__ ? new Ae(this) : this[u](1);
          };
        }), Ae.prototype.compact = function() {
          return this.filter(Mt);
        }, Ae.prototype.find = function(n) {
          return this.filter(n).head();
        }, Ae.prototype.findLast = function(n) {
          return this.reverse().find(n);
        }, Ae.prototype.invokeMap = _e(function(n, o) {
          return typeof n == "function" ? new Ae(this) : this.map(function(u) {
            return ji(u, n, o);
          });
        }), Ae.prototype.reject = function(n) {
          return this.filter(Ma(de(n)));
        }, Ae.prototype.slice = function(n, o) {
          n = be(n);
          var u = this;
          return u.__filtered__ && (n > 0 || o < 0) ? new Ae(u) : (n < 0 ? u = u.takeRight(-n) : n && (u = u.drop(n)), o !== r && (o = be(o), u = o < 0 ? u.dropRight(-o) : u.take(o - n)), u);
        }, Ae.prototype.takeRightWhile = function(n) {
          return this.reverse().takeWhile(n).reverse();
        }, Ae.prototype.toArray = function() {
          return this.take(J);
        }, Er(Ae.prototype, function(n, o) {
          var u = /^(?:filter|find|map|reject)|While$/.test(o), y = /^(?:head|last)$/.test(o), E = A[y ? "take" + (o == "last" ? "Right" : "") : o], T = y || /^find/.test(o);
          E && (A.prototype[o] = function() {
            var P = this.__wrapped__, I = y ? [1] : arguments, z = P instanceof Ae, K = I[0], Y = z || we(P), Q = function(Ee) {
              var Te = E.apply(A, sn([Ee], I));
              return y && ie ? Te[0] : Te;
            };
            Y && u && typeof K == "function" && K.length != 1 && (z = Y = false);
            var ie = this.__chain__, ue = !!this.__actions__.length, pe = T && !ie, Se = z && !ue;
            if (!T && Y) {
              P = Se ? P : new Ae(this);
              var he = n.apply(P, I);
              return he.__actions__.push({ func: Ca, args: [Q], thisArg: r }), new rr(he, ie);
            }
            return pe && Se ? n.apply(this, I) : (he = this.thru(Q), pe ? y ? he.value()[0] : he.value() : he);
          });
        }), er(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
          var o = na[n], u = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", y = /^(?:pop|shift)$/.test(n);
          A.prototype[n] = function() {
            var E = arguments;
            if (y && !this.__chain__) {
              var T = this.value();
              return o.apply(we(T) ? T : [], E);
            }
            return this[u](function(P) {
              return o.apply(we(P) ? P : [], E);
            });
          };
        }), Er(Ae.prototype, function(n, o) {
          var u = A[o];
          if (u) {
            var y = u.name + "";
            Ne.call(li, y) || (li[y] = []), li[y].push({ name: o, func: u });
          }
        }), li[Ea(r, h).name] = [{
          name: "wrapper",
          func: r
        }], Ae.prototype.clone = Xw, Ae.prototype.reverse = Jw, Ae.prototype.value = Qw, A.prototype.at = RS, A.prototype.chain = PS, A.prototype.commit = kS, A.prototype.next = CS, A.prototype.plant = IS, A.prototype.reverse = LS, A.prototype.toJSON = A.prototype.valueOf = A.prototype.value = MS, A.prototype.first = A.prototype.head, Ni && (A.prototype[Ni] = $S), A;
      }), ai = kw();
      Rn ? ((Rn.exports = ai)._ = ai, pu._ = ai) : ht._ = ai;
    }).call(DC);
  })(_o, _o.exports)), _o.exports;
}
var it = zC();
const fg = {
  FdSave: G3,
  FdWarningDanger: a6,
  FdInfoCircle: i4,
  FdInfoBold: c4
};
var Sy = /* @__PURE__ */ ((e3) => (e3.ALERT = "alert", e3.CONFIRM = "confirm", e3))(Sy || {}), Ei = /* @__PURE__ */ ((e3) => (e3.PRIMARY = "primary", e3.WARNING = "warning", e3.DANGER = "danger", e3))(Ei || {}), Eo = /* @__PURE__ */ ((e3) => (e3.CONFIRMED = "confirmed", e3.CANCELED = "canceled", e3))(Eo || {});
const xy = {
  [Ei.PRIMARY]: {
    icon: "blue-500",
    button: "primary-dark"
  },
  [Ei.DANGER]: {
    icon: "red-500",
    button: "primary-dark"
  },
  [Ei.WARNING]: {
    icon: "yellow-400",
    button: "primary-dark"
  }
}, Jl = ({
  color: e3 = Ei.PRIMARY,
  variant: t = "solid",
  children: r,
  autoFocus: i,
  ...a
}) => {
  const s = xy[e3].button, l = t === "outlined" ? `bg-transparent text-white border border-white hover:border-white hover:bg-white hover:text-${s}` : `text-white bg-${s} border border-${s} hover:border-white hover:bg-primary-hover hover:text-white`;
  return /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    "button",
    {
      autoFocus: i,
      className: je(
        "w-16 rounded px-2 py-1 text-xs font-medium hover:font-bold focus:outline-none",
        l
      ),
      ...a,
      children: r
    }
  );
}, WC = ({
  name: e3,
  color: t = Ei.PRIMARY,
  className: r = "w-8 h-8"
}) => {
  const i = fg[e3] || fg.FdInfoCircle, a = `text-${xy[t].icon}`;
  return /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(i, { className: je(r, a) });
}, eL = ({
  id: e3,
  title: t,
  message: r,
  icon: i,
  type: a,
  color: s,
  zIndex: l = 3e3,
  views: c,
  width: f = 520,
  hasOverlay: m = true,
  container: g,
  onClose: v,
  onEdit: p
}) => {
  const w = (b) => {
    v({
      id: e3,
      reason: b
    });
  };
  qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect(() => {
    function b(h) {
      h.key === "Escape" && w(Eo.CANCELED);
    }
    return window.addEventListener("keyup", b), () => {
      window.removeEventListener("keyup", b);
    };
  }, []);
  const S = it.merge(
    it.values(c == null ? void 0 : c.toggles).flatMap((b) => b.value ? b.warnings || [] : []),
    c == null ? void 0 : c.tips
  ), d = (b, h) => {
    var _;
    if (!(c != null && c.toggles)) return;
    const x = it.cloneDeep(c);
    (_ = x.toggles) != null && _[b] && (x.toggles[b].value = h), p({
      id: e3,
      views: x
    });
  };
  return ReactDOM.createPortal(
    /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(bs, { appear: true, show: true, as: qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.Fragment, children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      "div",
      {
        className: je(
          "absolute inset-0 flex h-full w-full items-center justify-center overflow-y-auto",
          { "bg-black bg-opacity-80": m }
        ),
        style: { zIndex: l },
        onClick: () => w(Eo.CANCELED),
        children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
          bs.Child,
          {
            as: qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 scale-95",
            enterTo: "opacity-100 scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 scale-100",
            leaveTo: "opacity-0 scale-95",
            children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
              "div",
              {
                "data-cy": "confirmation-modal-cy",
                className: "relative rounded-md border border-grey-50 bg-grey-900",
                style: { width: f },
                onClick: (b) => b.stopPropagation(),
                children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex flex-col items-center gap-3 p-6 px-12", children: [
                  i ? /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(WC, { name: i, color: s, className: "w-6 h-6" }) }) : null,
                  /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(BC, { condition: t, children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("h4", { className: "w-full text-wrap text-lg font-bold leading-6 text-white text-center", children: t }) }),
                  /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("p", { className: "w-full text-wrap text-center text-sm font-medium text-white", children: r }),
                  /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "text-xs text-white", children: it.values(c == null ? void 0 : c.toggles).map((b) => /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("label", { htmlFor: b.key, className: "flex items-center", children: [
                    /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                      Uk,
                      {
                        size: "xs",
                        value: b.value,
                        onChange: (h) => d(b.key, h)
                      }
                    ),
                    /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("span", { className: "ml-1", children: b.title })
                  ] }) }, b.key)) }),
                  /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(UC, { warnings: S }),
                  /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex items-center gap-4", children: a === Sy.CONFIRM ? /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: [
                    /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                      Jl,
                      {
                        autoFocus: true,
                        color: s,
                        onClick: () => w(Eo.CONFIRMED),
                        children: "Confirm"
                      }
                    ),
                    /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                      Jl,
                      {
                        color: s,
                        variant: "outlined",
                        onClick: () => w(Eo.CANCELED),
                        children: "Cancel"
                      }
                    )
                  ] }) : /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Jl, { autoFocus: true, onClick: () => w(), children: "OK" }) })
                ] })
              }
            )
          }
        )
      }
    ) }),
    g || document.body
  );
}, BC = (e3) => e3.condition ? /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: e3.children }) : null, UC = (e3) => e3.warnings ? /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(bs, { appear: true, show: !!e3.warnings.length, as: qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.Fragment, children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex flex-col gap-1 rounded-sm bg-grey-600 p-2 text-xs text-white", children: e3.warnings.map((t, r) => /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  bs.Child,
  {
    as: qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.Fragment,
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 scale-95",
    enterTo: "opacity-100 scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 scale-100",
    leaveTo: "opacity-0 scale-95",
    children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex flex-1 items-center gap-1 rounded-sm px-2 py-1", children: [
      /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        a6,
        {
          className: je(
            {
              "h-3 w-3": true,
              "text-yellow-500": t.type === "warning",
              "text-red-400": t.type === "error",
              "text-primary-dark": t.type === "info"
            },
            "mr-3"
          )
        }
      ),
      /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex-1", children: t.message })
    ] })
  },
  `modal-warnings-${r}`
)) }) }) : null;
var jC = /* @__PURE__ */ ((e3) => (e3[e3.MIN = 0.5] = "MIN", e3[e3.MAX = 10] = "MAX", e3[e3.STEP = 0.5] = "STEP", e3[e3.INIT = 1] = "INIT", e3[e3.TRANSITION = 200] = "TRANSITION", e3))(jC || {});
const tL = ({
  zoom: e3,
  minZoom: t = 0.5,
  maxZoom: r = 10,
  handleZoomIn: i,
  handleZoomOut: a
}) => /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex items-center rounded bg-grey-300 p-1", children: [
  /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    Y4,
    {
      onClick: a,
      className: je("h-5 w-5 p-1", {
        "text-grey-200": e3 <= t,
        "cursor-pointer rounded hover:bg-purple-800": e3 > t
      })
    }
  ),
  /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("span", { className: "mx-1 w-10 select-none text-center text-xs", children: [
    (e3 * 100).toFixed(0),
    "%"
  ] }),
  /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    p3,
    {
      onClick: i,
      className: je("h-5 w-5 p-1", {
        "text-grey-200": e3 >= r,
        "cursor-pointer rounded hover:bg-purple-800": e3 < r
      })
    }
  )
] }), HC = /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.forwardRef(((e3, t) => /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(An.span, Xe({}, e3, { ref: t, style: { position: "absolute", border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", wordWrap: "normal", ...e3.style } })))), qC = HC;
function dg(e3) {
  const t = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef({ value: e3, previous: e3 });
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useMemo((() => (t.current.value !== e3 && (t.current.previous = t.current.value, t.current.value = e3), t.current.previous)), [e3]);
}
const [_y] = Qc("Tooltip", [zs]), wf = zs(), ZC = 700, [rL, GC] = _y("TooltipProvider", { isOpenDelayed: true, delayDuration: ZC, onOpen: () => {
}, onClose: () => {
} }), [KC, qs] = _y("Tooltip"), VC = (e3) => {
  const { __scopeTooltip: t, children: r, open: i, defaultOpen: a = false, onOpenChange: s, delayDuration: l } = e3, c = GC("Tooltip", t), f = wf(t), [m, g] = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState(null), v = Tm(), p = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(0), w = l ?? c.delayDuration, S = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(false), { onOpen: d, onClose: b } = c, [h = false, x] = zm({ prop: i, defaultProp: a, onChange: (C) => {
    C && (document.dispatchEvent(new CustomEvent("tooltip.open")), d()), s == null || s(C);
  } }), _ = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useMemo((() => h ? S.current ? "delayed-open" : "instant-open" : "closed"), [h]), R = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useCallback((() => {
    window.clearTimeout(p.current), S.current = false, x(true);
  }), [x]), O = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useCallback((() => {
    window.clearTimeout(p.current), p.current = window.setTimeout((() => {
      S.current = true, x(true);
    }), w);
  }), [w, x]);
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect((() => () => window.clearTimeout(p.current)), []), /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(Nm, f, /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(KC, { scope: t, contentId: v, open: h, stateAttribute: _, trigger: m, onTriggerChange: g, onTriggerEnter: qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useCallback((() => {
    c.isOpenDelayed ? O() : R();
  }), [c.isOpenDelayed, O, R]), onOpen: qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useCallback(R, [R]), onClose: qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useCallback((() => {
    window.clearTimeout(p.current), x(false), b();
  }), [x, b]) }, r));
}, YC = /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.forwardRef(((e3, t) => {
  const { __scopeTooltip: r, ...i } = e3, a = qs("TooltipTrigger", r), s = wf(r), l = On(t, a.onTriggerChange), c = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(false), f = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useCallback((() => c.current = false), []);
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect((() => () => document.removeEventListener("mouseup", f)), [f]), /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(Fm, Xe({ asChild: true }, s), /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(An.button, Xe({ "aria-describedby": a.open ? a.contentId : void 0, "data-state": a.stateAttribute }, i, { ref: l, onMouseEnter: Zt(e3.onMouseEnter, a.onTriggerEnter), onMouseLeave: Zt(e3.onMouseLeave, a.onClose), onMouseDown: Zt(e3.onMouseDown, (() => {
    a.onClose(), c.current = true, document.addEventListener("mouseup", f, { once: true });
  })), onFocus: Zt(e3.onFocus, (() => {
    c.current || a.onOpen();
  })), onBlur: Zt(e3.onBlur, a.onClose), onClick: Zt(e3.onClick, ((m) => {
    m.detail === 0 && a.onClose();
  })) })));
})), XC = /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.forwardRef(((e3, t) => {
  const { forceMount: r, ...i } = e3, a = qs("TooltipContent", e3.__scopeTooltip);
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(Xc, { present: r || a.open }, /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(JC, Xe({ ref: t }, i)));
})), JC = /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.forwardRef(((e3, t) => {
  const { __scopeTooltip: r, children: i, "aria-label": a, portalled: s = true, ...l } = e3, c = qs("TooltipContent", r), f = wf(r), m = s ? Jc : qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.Fragment, { onClose: g } = c;
  return Cm((() => g())), qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect((() => (document.addEventListener("tooltip.open", g), () => document.removeEventListener("tooltip.open", g))), [g]), /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(m, null, /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(QC, { __scopeTooltip: r }), /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(Dm, Xe({ "data-state": c.stateAttribute }, f, l, { ref: t, style: { ...l.style, "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)" } }), /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(km, null, i), /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createElement(qC, { id: c.contentId, role: "tooltip" }, a || i)));
}));
function QC(e3) {
  const { __scopeTooltip: t } = e3, r = qs("CheckTriggerMoved", t), i = Im(r.trigger), a = i == null ? void 0 : i.left, s = dg(a), l = i == null ? void 0 : i.top, c = dg(l), f = r.onClose;
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect((() => {
    (s !== void 0 && s !== a || c !== void 0 && c !== l) && f();
  }), [f, s, c, a, l]), null;
}
const e$ = VC, t$ = YC, r$ = XC;
function nL(e3) {
  return /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(e$, { delayDuration: e3.delayDuration, open: e3.open, children: [
    /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(t$, { tabIndex: -1, asChild: true, children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("span", { children: e3.children }) }),
    /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
      r$,
      {
        side: e3.side,
        sideOffset: e3.sideOffset,
        alignOffset: e3.alignOffset,
        children: [
          typeof e3.message == "string" && /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("p", { className: "max-w-[240px] rounded-md bg-primary-light px-1 py-2 text-s font-semibold text-primary-dark", children: e3.message }),
          typeof e3.message != "string" && e3.message
        ]
      }
    )
  ] });
}
const bi = 30, Ql = 500, n$ = () => /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "h-2 w-full bg-opacity-40 hover:bg-primary-hover" }), iL = (e3) => {
  const [t, r] = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState(bi), i = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(), a = t > bi, s = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(null);
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect(() => {
    e3.isOpen && !a && r(Ql), !e3.isOpen && a && r(bi);
  }, [e3.isOpen]), /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "relative w-full select-none isolate", style: { zIndex: 49 }, children: [
    /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      Resizable,
      {
        enable: {
          top: true,
          right: false,
          bottom: false,
          left: false,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false
        },
        className: "w-full select-none border-t border-grey-900 bg-grey-800",
        size: { height: t, width: "100%" },
        maxHeight: 700,
        minHeight: bi,
        onResizeStart: () => {
          i.current && Date.now() - i.current < 200 ? r(a ? bi : Ql) : i.current = Date.now();
        },
        onResize: (l, c, f) => {
          s.current && cancelAnimationFrame(s.current), s.current = requestAnimationFrame(() => {
            var m;
            (m = e3.onResize) == null || m.call(e3), s.current = null;
          });
        },
        onResizeStop: (l, c, f, m) => {
          r(t + m.height);
        },
        handleComponent: {
          top: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(n$, {})
        }
      }
    ),
    /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
      "div",
      {
        "data-cy": "contextualPanel",
        className: "absolute inset-0 flex flex-col overflow-hidden",
        id: `__cp-${it.kebabCase(e3.path)}`,
        children: [
          /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
            "div",
            {
              className: je("flex justify-between items-center px-3 py-0.5", {
                "flex-1": !a
              }),
              children: [
                /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "group flex items-center justify-start", children: [
                  /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("span", { className: "mr-2 text-sm text-fd-gray-lighter", children: "Contextual panel" }),
                  /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("span", {}),
                  e3.tipKey ? /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(ZP, { tipKey: e3.tipKey, alwaysOn: true, asButton: true }) : null,
                  /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                    "button",
                    {
                      className: "rounded p-1 text-white hover:bg-primary-hover focus:outline-none",
                      onClick: () => {
                        a ? (r(bi), e3.onClose()) : (r(Ql), e3.onOpen());
                      },
                      children: a ? /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(n2$1, { className: "h-4 w-4 text-white" }) : /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(A2$1, { className: "h-4 w-4 text-white" })
                    }
                  )
                ] }),
                e3.headerRightSide
              ]
            }
          ),
          /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs($l, { of: a, children: [
            /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx($l, { of: e3.render, children: e3.render }),
            /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx($l, { of: !e3.render, children: e3.children })
          ] })
        ]
      }
    )
  ] });
};
function i$({
  children: e3,
  viewBox: t = "0 0 24 24",
  ...r
}) {
  return /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    "svg",
    {
      viewBox: t,
      width: "1em",
      height: "1em",
      fill: "none",
      className: "base-icon",
      ...r,
      children: e3
    }
  );
}
function o$(e3) {
  const t = e3.isIndeterminate ? "M2 12h20" : "M4 11.5L9 17L20 6";
  return /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(i$, { viewBox: "0 0 24 24", ...e3, children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    "path",
    {
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 3,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: t
    }
  ) });
}
function oL({
  isChecked: e3,
  isIndeterminate: t,
  isInvalid: r,
  icon: i,
  label: a,
  className: s = "",
  style: l,
  ...c
}) {
  const f = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(null), m = i || /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(o$, {}), g = c.checked ?? e3;
  qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect(() => {
    f.current && (f.current.indeterminate = !!t);
  }, [t]);
  const v = g || t, p = ["base-checkbox-container", s].join(" ");
  return /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("label", { className: p, style: l, "data-invalid": r, children: [
    /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      "input",
      {
        ref: f,
        type: "checkbox",
        className: "base-checkbox-input",
        checked: g,
        ...c,
        "aria-invalid": r || void 0
      }
    ),
    /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("span", { className: "base-checkbox-control", children: v && m && // Use cloneElement to inject necessary props
    qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.cloneElement(m, {
      isChecked: g,
      isIndeterminate: t,
      className: "base-checkbox-icon"
    }) }),
    a && /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("span", { className: "base-checkbox-label", children: a })
  ] });
}
function aL(e3, t) {
  const r = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(false);
  qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect(() => {
    if (r.current) return e3();
    r.current = true;
  }, t);
}
const ec = typeof navigator < "u" ? navigator.userAgent.toLowerCase().indexOf("firefox") > 0 : false;
function tc(e3, t, r, i) {
  e3.addEventListener ? e3.addEventListener(t, r, i) : e3.attachEvent && e3.attachEvent("on".concat(t), r);
}
function bo(e3, t, r, i) {
  e3.removeEventListener ? e3.removeEventListener(t, r, i) : e3.detachEvent && e3.detachEvent("on".concat(t), r);
}
function Ey(e3, t) {
  const r = t.slice(0, t.length - 1);
  for (let i = 0; i < r.length; i++) r[i] = e3[r[i].toLowerCase()];
  return r;
}
function Oy(e3) {
  typeof e3 != "string" && (e3 = ""), e3 = e3.replace(/\s/g, "");
  const t = e3.split(",");
  let r = t.lastIndexOf("");
  for (; r >= 0; )
    t[r - 1] += ",", t.splice(r, 1), r = t.lastIndexOf("");
  return t;
}
function a$(e3, t) {
  const r = e3.length >= t.length ? e3 : t, i = e3.length >= t.length ? t : e3;
  let a = true;
  for (let s = 0; s < r.length; s++)
    i.indexOf(r[s]) === -1 && (a = false);
  return a;
}
const Fo = {
  backspace: 8,
  "⌫": 8,
  tab: 9,
  clear: 12,
  enter: 13,
  "↩": 13,
  return: 13,
  esc: 27,
  escape: 27,
  space: 32,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  /// https://w3c.github.io/uievents/#events-keyboard-key-location
  arrowup: 38,
  arrowdown: 40,
  arrowleft: 37,
  arrowright: 39,
  del: 46,
  delete: 46,
  ins: 45,
  insert: 45,
  home: 36,
  end: 35,
  pageup: 33,
  pagedown: 34,
  capslock: 20,
  num_0: 96,
  num_1: 97,
  num_2: 98,
  num_3: 99,
  num_4: 100,
  num_5: 101,
  num_6: 102,
  num_7: 103,
  num_8: 104,
  num_9: 105,
  num_multiply: 106,
  num_add: 107,
  num_enter: 108,
  num_subtract: 109,
  num_decimal: 110,
  num_divide: 111,
  "⇪": 20,
  ",": 188,
  ".": 190,
  "/": 191,
  "`": 192,
  "-": ec ? 173 : 189,
  "=": ec ? 61 : 187,
  ";": ec ? 59 : 186,
  "'": 222,
  "{": 219,
  "}": 221,
  "[": 219,
  "]": 221,
  "\\": 220
}, xr = {
  // shiftKey
  "⇧": 16,
  shift: 16,
  // altKey
  "⌥": 18,
  alt: 18,
  option: 18,
  // ctrlKey
  "⌃": 17,
  ctrl: 17,
  control: 17,
  // metaKey
  "⌘": 91,
  cmd: 91,
  meta: 91,
  command: 91
}, Oo = {
  16: "shiftKey",
  18: "altKey",
  17: "ctrlKey",
  91: "metaKey",
  shiftKey: 16,
  ctrlKey: 17,
  altKey: 18,
  metaKey: 91
}, yt = {
  16: false,
  18: false,
  17: false,
  91: false
}, Ye = {};
for (let e3 = 1; e3 < 20; e3++)
  Fo["f".concat(e3)] = 111 + e3;
let Ge = [], Io = null, Ay = "all";
const Yr = /* @__PURE__ */ new Map(), $i = (e3) => Fo[e3.toLowerCase()] || xr[e3.toLowerCase()] || e3.toUpperCase().charCodeAt(0), s$ = (e3) => Object.keys(Fo).find((t) => Fo[t] === e3), u$ = (e3) => Object.keys(xr).find((t) => xr[t] === e3);
function Ty(e3) {
  Ay = e3 || "all";
}
function Do() {
  return Ay || "all";
}
function l$() {
  return Ge.slice(0);
}
function c$() {
  return Ge.map((e3) => s$(e3) || u$(e3) || String.fromCharCode(e3));
}
function f$() {
  const e3 = [];
  return Object.keys(Ye).forEach((t) => {
    Ye[t].forEach((r) => {
      let {
        key: i,
        scope: a,
        mods: s,
        shortcut: l
      } = r;
      e3.push({
        scope: a,
        shortcut: l,
        mods: s,
        keys: i.split("+").map((c) => $i(c))
      });
    });
  }), e3;
}
function d$(e3) {
  const t = e3.target || e3.srcElement, {
    tagName: r
  } = t;
  let i = true;
  const a = r === "INPUT" && !["checkbox", "radio", "range", "button", "file", "reset", "submit", "color"].includes(t.type);
  return (t.isContentEditable || (a || r === "TEXTAREA" || r === "SELECT") && !t.readOnly) && (i = false), i;
}
function p$(e3) {
  return typeof e3 == "string" && (e3 = $i(e3)), Ge.indexOf(e3) !== -1;
}
function h$(e3, t) {
  let r, i;
  e3 || (e3 = Do());
  for (const a in Ye)
    if (Object.prototype.hasOwnProperty.call(Ye, a))
      for (r = Ye[a], i = 0; i < r.length; )
        r[i].scope === e3 ? r.splice(i, 1).forEach((l) => {
          let {
            element: c
          } = l;
          return bf(c);
        }) : i++;
  Do() === e3 && Ty(t || "all");
}
function v$(e3) {
  let t = e3.keyCode || e3.which || e3.charCode;
  e3.key && e3.key.toLowerCase() === "capslock" && (t = $i(e3.key));
  const r = Ge.indexOf(t);
  if (r >= 0 && Ge.splice(r, 1), e3.key && e3.key.toLowerCase() === "meta" && Ge.splice(0, Ge.length), (t === 93 || t === 224) && (t = 91), t in yt) {
    yt[t] = false;
    for (const i in xr) xr[i] === t && (br[i] = false);
  }
}
function Ry(e3) {
  if (typeof e3 > "u")
    Object.keys(Ye).forEach((a) => {
      Array.isArray(Ye[a]) && Ye[a].forEach((s) => rs(s)), delete Ye[a];
    }), bf(null);
  else if (Array.isArray(e3))
    e3.forEach((a) => {
      a.key && rs(a);
    });
  else if (typeof e3 == "object")
    e3.key && rs(e3);
  else if (typeof e3 == "string") {
    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
      r[i - 1] = arguments[i];
    let [a, s] = r;
    typeof a == "function" && (s = a, a = ""), rs({
      key: e3,
      scope: a,
      method: s,
      splitKey: "+"
    });
  }
}
const rs = (e3) => {
  let {
    key: t,
    scope: r,
    method: i,
    splitKey: a = "+"
  } = e3;
  Oy(t).forEach((l) => {
    const c = l.split(a), f = c.length, m = c[f - 1], g = m === "*" ? "*" : $i(m);
    if (!Ye[g]) return;
    r || (r = Do());
    const v = f > 1 ? Ey(xr, c) : [], p = [];
    Ye[g] = Ye[g].filter((w) => {
      const d = (i ? w.method === i : true) && w.scope === r && a$(w.mods, v);
      return d && p.push(w.element), !d;
    }), p.forEach((w) => bf(w));
  });
};
function pg(e3, t, r, i) {
  if (t.element !== i)
    return;
  let a;
  if (t.scope === r || t.scope === "all") {
    a = t.mods.length > 0;
    for (const s in yt)
      Object.prototype.hasOwnProperty.call(yt, s) && (!yt[s] && t.mods.indexOf(+s) > -1 || yt[s] && t.mods.indexOf(+s) === -1) && (a = false);
    (t.mods.length === 0 && !yt[16] && !yt[18] && !yt[17] && !yt[91] || a || t.shortcut === "*") && (t.keys = [], t.keys = t.keys.concat(Ge), t.method(e3, t) === false && (e3.preventDefault ? e3.preventDefault() : e3.returnValue = false, e3.stopPropagation && e3.stopPropagation(), e3.cancelBubble && (e3.cancelBubble = true)));
  }
}
function hg(e3, t) {
  const r = Ye["*"];
  let i = e3.keyCode || e3.which || e3.charCode;
  if (e3.key && e3.key.toLowerCase() === "capslock" || !br.filter.call(this, e3)) return;
  if ((i === 93 || i === 224) && (i = 91), Ge.indexOf(i) === -1 && i !== 229 && Ge.push(i), ["metaKey", "ctrlKey", "altKey", "shiftKey"].forEach((c) => {
    const f = Oo[c];
    e3[c] && Ge.indexOf(f) === -1 ? Ge.push(f) : !e3[c] && Ge.indexOf(f) > -1 ? Ge.splice(Ge.indexOf(f), 1) : c === "metaKey" && e3[c] && (Ge = Ge.filter((m) => m in Oo || m === i));
  }), i in yt) {
    yt[i] = true;
    for (const c in xr)
      if (Object.prototype.hasOwnProperty.call(xr, c)) {
        const f = Oo[xr[c]];
        br[c] = e3[f];
      }
    if (!r) return;
  }
  for (const c in yt)
    Object.prototype.hasOwnProperty.call(yt, c) && (yt[c] = e3[Oo[c]]);
  e3.getModifierState && !(e3.altKey && !e3.ctrlKey) && e3.getModifierState("AltGraph") && (Ge.indexOf(17) === -1 && Ge.push(17), Ge.indexOf(18) === -1 && Ge.push(18), yt[17] = true, yt[18] = true);
  const a = Do();
  if (r)
    for (let c = 0; c < r.length; c++)
      r[c].scope === a && (e3.type === "keydown" && r[c].keydown || e3.type === "keyup" && r[c].keyup) && pg(e3, r[c], a, t);
  if (!(i in Ye)) return;
  const s = Ye[i], l = s.length;
  for (let c = 0; c < l; c++)
    if ((e3.type === "keydown" && s[c].keydown || e3.type === "keyup" && s[c].keyup) && s[c].key) {
      const f = s[c], {
        splitKey: m
      } = f, g = f.key.split(m), v = [];
      for (let p = 0; p < g.length; p++)
        v.push($i(g[p]));
      v.sort().join("") === Ge.sort().join("") && pg(e3, f, a, t);
    }
}
function br(e3, t, r) {
  Ge = [];
  const i = Oy(e3);
  let a = [], s = "all", l = document, c = 0, f = false, m = true, g = "+", v = false, p = false;
  for (r === void 0 && typeof t == "function" && (r = t), Object.prototype.toString.call(t) === "[object Object]" && (t.scope && (s = t.scope), t.element && (l = t.element), t.keyup && (f = t.keyup), t.keydown !== void 0 && (m = t.keydown), t.capture !== void 0 && (v = t.capture), typeof t.splitKey == "string" && (g = t.splitKey), t.single === true && (p = true)), typeof t == "string" && (s = t), p && Ry(e3, s); c < i.length; c++)
    e3 = i[c].split(g), a = [], e3.length > 1 && (a = Ey(xr, e3)), e3 = e3[e3.length - 1], e3 = e3 === "*" ? "*" : $i(e3), e3 in Ye || (Ye[e3] = []), Ye[e3].push({
      keyup: f,
      keydown: m,
      scope: s,
      mods: a,
      shortcut: i[c],
      method: r,
      key: i[c],
      splitKey: g,
      element: l
    });
  if (typeof l < "u" && window) {
    if (!Yr.has(l)) {
      const w = function() {
        let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.event;
        return hg(d, l);
      }, S = function() {
        let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.event;
        hg(d, l), v$(d);
      };
      Yr.set(l, {
        keydownListener: w,
        keyupListenr: S,
        capture: v
      }), tc(l, "keydown", w, v), tc(l, "keyup", S, v);
    }
    if (!Io) {
      const w = () => {
        Ge = [];
      };
      Io = {
        listener: w,
        capture: v
      }, tc(window, "focus", w, v);
    }
  }
}
function g$(e3) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "all";
  Object.keys(Ye).forEach((r) => {
    Ye[r].filter((a) => a.scope === t && a.shortcut === e3).forEach((a) => {
      a && a.method && a.method();
    });
  });
}
function bf(e3) {
  const t = Object.values(Ye).flat();
  if (t.findIndex((i) => {
    let {
      element: a
    } = i;
    return a === e3;
  }) < 0) {
    const {
      keydownListener: i,
      keyupListenr: a,
      capture: s
    } = Yr.get(e3) || {};
    i && a && (bo(e3, "keyup", a, s), bo(e3, "keydown", i, s), Yr.delete(e3));
  }
  if ((t.length <= 0 || Yr.size <= 0) && (Object.keys(Yr).forEach((a) => {
    const {
      keydownListener: s,
      keyupListenr: l,
      capture: c
    } = Yr.get(a) || {};
    s && l && (bo(a, "keyup", l, c), bo(a, "keydown", s, c), Yr.delete(a));
  }), Yr.clear(), Object.keys(Ye).forEach((a) => delete Ye[a]), Io)) {
    const {
      listener: a,
      capture: s
    } = Io;
    bo(window, "focus", a, s), Io = null;
  }
}
const rc = {
  getPressedKeyString: c$,
  setScope: Ty,
  getScope: Do,
  deleteScope: h$,
  getPressedKeyCodes: l$,
  getAllKeyCodes: f$,
  isPressed: p$,
  filter: d$,
  trigger: g$,
  unbind: Ry,
  keyMap: Fo,
  modifier: xr,
  modifierMap: Oo
};
for (const e3 in rc)
  Object.prototype.hasOwnProperty.call(rc, e3) && (br[e3] = rc[e3]);
if (typeof window < "u") {
  const e3 = window.hotkeys;
  br.noConflict = (t) => (t && window.hotkeys === br && (window.hotkeys = e3), br), window.hotkeys = br;
}
br.filter = () => true;
function sL(e3, t, r, i) {
  r instanceof Array && (i = r, r = void 0), i = i || [], r = r || {};
  const { preventDefault: a = true } = r, s = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useCallback(
    (c, f) => {
      a && c.preventDefault(), setTimeout(() => t(c, f));
    },
    i
  ), l = () => {
    br.unbind(e3, s);
  };
  qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect(() => (br(e3, r, s), l), [e3, r, s]);
}
const uL = (e3) => {
  const t = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(null);
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect(() => {
    const r = (i) => {
      t.current && !t.current.contains(i.target) && e3(i);
    };
    return document.addEventListener("click", r, true), () => {
      document.removeEventListener("click", r, true);
    };
  }, [e3]), t;
};
function lL(e3) {
  const t = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef();
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect(() => {
    t.current = e3;
  }, [e3]), t.current;
}
function cL(e3) {
  const t = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(e3);
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect(() => {
    t.current = e3;
  }, [e3]), t;
}
function fL(e3) {
  const t = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(null);
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect(() => {
    e3 && (typeof e3 == "function" ? e3(t.current) : e3.current = t.current);
  }), t;
}
function dL(e3) {
  const [t, r] = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState(e3), i = (s, l) => {
    r((c) => ({
      ...c,
      features: {
        ...c.features,
        [s]: {
          enabled: l
        }
      }
    }));
  }, a = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useCallback(
    (...s) => s.every((l) => {
      var c;
      return (c = t.features[l]) == null ? void 0 : c.enabled;
    }),
    [t.features]
  );
  return {
    setFeature: i,
    isFeatureEnabled: a
  };
}
const Py = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.createContext(""), pL = (e3) => /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Py.Provider, { value: e3.value, children: e3.children }), hL = () => {
  const e3 = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useContext(Py);
  if (typeof e3 != "string")
    throw new Error(
      "Error while calling useIdentity! Context has incorrect type (expected string)"
    );
  return e3;
};
function vL(e3) {
  const [t, r] = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState(e3), i = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useMemo(() => m$(t, r), []);
  return {
    state: t,
    actions: {
      ...i,
      set: (a) => {
        r(
          typeof a == "function" ? a : (s) => ({
            ...s,
            ...a
          })
        );
      }
    }
  };
}
function m$(e3, t = () => {
}) {
  return Object.keys(e3).reduce(
    (i, a) => ({
      ...i,
      [`set${it.upperFirst(a)}`]: (s) => t((l) => ({
        ...l,
        [a]: s
      }))
    }),
    {}
  );
}
const gL = (e3, t, r = {}) => {
  r = {
    timeout: 200,
    ...r
  };
  const i = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(), a = () => {
    i.current && (clearTimeout(i.current), i.current = null);
  };
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useCallback(
    (s, ...l) => {
      a(), t && s.detail === 1 && (i.current = setTimeout(() => {
        t(s, ...l);
      }, r.timeout)), s.detail % 2 === 0 && e3(s, ...l);
    },
    [t, e3, r.timeout]
  );
};
function wt(e3) {
  for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
  throw Error("[Immer] minified error nr: " + e3 + (r.length ? " " + r.map((function(l) {
    return "'" + l + "'";
  })).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function ki(e3) {
  return !!e3 && !!e3[Yt];
}
function Yn(e3) {
  var t;
  return !!e3 && ((function(r) {
    if (!r || typeof r != "object") return false;
    var i = Object.getPrototypeOf(r);
    if (i === null) return true;
    var a = Object.hasOwnProperty.call(i, "constructor") && i.constructor;
    return a === Object || typeof a == "function" && Function.toString.call(a) === O$;
  })(e3) || Array.isArray(e3) || !!e3[xg] || !!(!((t = e3.constructor) === null || t === void 0) && t[xg]) || Sf(e3) || xf(e3));
}
function zo(e3, t, r) {
  r === void 0 && (r = false), Ii(e3) === 0 ? (r ? Object.keys : Af)(e3).forEach((function(i) {
    r && typeof i == "symbol" || t(i, e3[i], e3);
  })) : e3.forEach((function(i, a) {
    return t(a, i, e3);
  }));
}
function Ii(e3) {
  var t = e3[Yt];
  return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e3) ? 1 : Sf(e3) ? 2 : xf(e3) ? 3 : 0;
}
function Rc(e3, t) {
  return Ii(e3) === 2 ? e3.has(t) : Object.prototype.hasOwnProperty.call(e3, t);
}
function y$(e3, t) {
  return Ii(e3) === 2 ? e3.get(t) : e3[t];
}
function ky(e3, t, r) {
  var i = Ii(e3);
  i === 2 ? e3.set(t, r) : i === 3 ? e3.add(r) : e3[t] = r;
}
function w$(e3, t) {
  return e3 === t ? e3 !== 0 || 1 / e3 == 1 / t : e3 != e3 && t != t;
}
function Sf(e3) {
  return x$ && e3 instanceof Map;
}
function xf(e3) {
  return _$ && e3 instanceof Set;
}
function Wn(e3) {
  return e3.o || e3.t;
}
function _f(e3) {
  if (Array.isArray(e3)) return Array.prototype.slice.call(e3);
  var t = A$(e3);
  delete t[Yt];
  for (var r = Af(t), i = 0; i < r.length; i++) {
    var a = r[i], s = t[a];
    s.writable === false && (s.writable = true, s.configurable = true), (s.get || s.set) && (t[a] = { configurable: true, writable: true, enumerable: s.enumerable, value: e3[a] });
  }
  return Object.create(Object.getPrototypeOf(e3), t);
}
function Wo(e3, t) {
  return t === void 0 && (t = false), Ef(e3) || ki(e3) || !Yn(e3) || (Ii(e3) > 1 && (e3.set = e3.add = e3.clear = e3.delete = b$), Object.freeze(e3), t && zo(e3, (function(r, i) {
    return Wo(i, true);
  }), true)), e3;
}
function b$() {
  wt(2);
}
function Ef(e3) {
  return e3 == null || typeof e3 != "object" || Object.isFrozen(e3);
}
function Mr(e3) {
  var t = T$[e3];
  return t || wt(18, e3), t;
}
function vg() {
  return Ci;
}
function nc(e3, t) {
  t && (Mr("Patches"), e3.u = [], e3.s = [], e3.v = t);
}
function Es(e3) {
  Pc(e3), e3.p.forEach(S$), e3.p = null;
}
function Pc(e3) {
  e3 === Ci && (Ci = e3.l);
}
function gg(e3) {
  return Ci = { p: [], l: Ci, h: e3, m: true, _: 0 };
}
function S$(e3) {
  var t = e3[Yt];
  t.i === 0 || t.i === 1 ? t.j() : t.g = true;
}
function ic(e3, t) {
  t._ = t.p.length;
  var r = t.p[0], i = e3 !== void 0 && e3 !== r;
  return t.h.O || Mr("ES5").S(t, e3, i), i ? (r[Yt].P && (Es(t), wt(4)), Yn(e3) && (e3 = Os(t, e3), t.l || As(t, e3)), t.u && Mr("Patches").M(r[Yt].t, e3, t.u, t.s)) : e3 = Os(t, r, []), Es(t), t.u && t.v(t.u, t.s), e3 !== $y ? e3 : void 0;
}
function Os(e3, t, r) {
  if (Ef(t)) return t;
  var i = t[Yt];
  if (!i) return zo(t, (function(c, f) {
    return mg(e3, i, t, c, f, r);
  }), true), t;
  if (i.A !== e3) return t;
  if (!i.P) return As(e3, i.t, true), i.t;
  if (!i.I) {
    i.I = true, i.A._--;
    var a = i.i === 4 || i.i === 5 ? i.o = _f(i.k) : i.o, s = a, l = false;
    i.i === 3 && (s = new Set(a), a.clear(), l = true), zo(s, (function(c, f) {
      return mg(e3, i, a, c, f, r, l);
    })), As(e3, a, false), r && e3.u && Mr("Patches").N(i, r, e3.u, e3.s);
  }
  return i.o;
}
function mg(e3, t, r, i, a, s, l) {
  if (ki(a)) {
    var c = Os(e3, a, s && t && t.i !== 3 && !Rc(t.R, i) ? s.concat(i) : void 0);
    if (ky(r, i, c), !ki(c)) return;
    e3.m = false;
  } else l && r.add(a);
  if (Yn(a) && !Ef(a)) {
    if (!e3.h.D && e3._ < 1) return;
    Os(e3, a), t && t.A.l || As(e3, a);
  }
}
function As(e3, t, r) {
  r === void 0 && (r = false), !e3.l && e3.h.D && e3.m && Wo(t, r);
}
function oc(e3, t) {
  var r = e3[Yt];
  return (r ? Wn(r) : e3)[t];
}
function yg(e3, t) {
  if (t in e3) for (var r = Object.getPrototypeOf(e3); r; ) {
    var i = Object.getOwnPropertyDescriptor(r, t);
    if (i) return i;
    r = Object.getPrototypeOf(r);
  }
}
function kc(e3) {
  e3.P || (e3.P = true, e3.l && kc(e3.l));
}
function ac(e3) {
  e3.o || (e3.o = _f(e3.t));
}
function Cc(e3, t, r) {
  var i = Sf(t) ? Mr("MapSet").F(t, r) : xf(t) ? Mr("MapSet").T(t, r) : e3.O ? (function(a, s) {
    var l = Array.isArray(a), c = { i: l ? 1 : 0, A: s ? s.A : vg(), P: false, I: false, R: {}, l: s, t: a, k: null, o: null, j: null, C: false }, f = c, m = $c;
    l && (f = [c], m = Ao);
    var g = Proxy.revocable(f, m), v = g.revoke, p = g.proxy;
    return c.k = p, c.j = v, p;
  })(t, r) : Mr("ES5").J(t, r);
  return (r ? r.A : vg()).p.push(i), i;
}
function Cy(e3) {
  return ki(e3) || wt(22, e3), (function t(r) {
    if (!Yn(r)) return r;
    var i, a = r[Yt], s = Ii(r);
    if (a) {
      if (!a.P && (a.i < 4 || !Mr("ES5").K(a))) return a.t;
      a.I = true, i = wg(r, s), a.I = false;
    } else i = wg(r, s);
    return zo(i, (function(l, c) {
      a && y$(a.t, l) === c || ky(i, l, t(c));
    })), s === 3 ? new Set(i) : i;
  })(e3);
}
function wg(e3, t) {
  switch (t) {
    case 2:
      return new Map(e3);
    case 3:
      return Array.from(e3);
  }
  return _f(e3);
}
var bg, Ci, Of = typeof Symbol < "u" && typeof Symbol("x") == "symbol", x$ = typeof Map < "u", _$ = typeof Set < "u", Sg = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", $y = Of ? Symbol.for("immer-nothing") : ((bg = {})["immer-nothing"] = true, bg), xg = Of ? Symbol.for("immer-draftable") : "__$immer_draftable", Yt = Of ? Symbol.for("immer-state") : "__$immer_state", O$ = "" + Object.prototype.constructor, Af = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(e3) {
  return Object.getOwnPropertyNames(e3).concat(Object.getOwnPropertySymbols(e3));
} : Object.getOwnPropertyNames, A$ = Object.getOwnPropertyDescriptors || function(e3) {
  var t = {};
  return Af(e3).forEach((function(r) {
    t[r] = Object.getOwnPropertyDescriptor(e3, r);
  })), t;
}, T$ = {}, $c = { get: function(e3, t) {
  if (t === Yt) return e3;
  var r = Wn(e3);
  if (!Rc(r, t)) return (function(a, s, l) {
    var c, f = yg(s, l);
    return f ? "value" in f ? f.value : (c = f.get) === null || c === void 0 ? void 0 : c.call(a.k) : void 0;
  })(e3, r, t);
  var i = r[t];
  return e3.I || !Yn(i) ? i : i === oc(e3.t, t) ? (ac(e3), e3.o[t] = Cc(e3.A.h, i, e3)) : i;
}, has: function(e3, t) {
  return t in Wn(e3);
}, ownKeys: function(e3) {
  return Reflect.ownKeys(Wn(e3));
}, set: function(e3, t, r) {
  var i = yg(Wn(e3), t);
  if (i != null && i.set) return i.set.call(e3.k, r), true;
  if (!e3.P) {
    var a = oc(Wn(e3), t), s = a == null ? void 0 : a[Yt];
    if (s && s.t === r) return e3.o[t] = r, e3.R[t] = false, true;
    if (w$(r, a) && (r !== void 0 || Rc(e3.t, t))) return true;
    ac(e3), kc(e3);
  }
  return e3.o[t] === r && (r !== void 0 || t in e3.o) || Number.isNaN(r) && Number.isNaN(e3.o[t]) || (e3.o[t] = r, e3.R[t] = true), true;
}, deleteProperty: function(e3, t) {
  return oc(e3.t, t) !== void 0 || t in e3.t ? (e3.R[t] = false, ac(e3), kc(e3)) : delete e3.R[t], e3.o && delete e3.o[t], true;
}, getOwnPropertyDescriptor: function(e3, t) {
  var r = Wn(e3), i = Reflect.getOwnPropertyDescriptor(r, t);
  return i && { writable: true, configurable: e3.i !== 1 || t !== "length", enumerable: i.enumerable, value: r[t] };
}, defineProperty: function() {
  wt(11);
}, getPrototypeOf: function(e3) {
  return Object.getPrototypeOf(e3.t);
}, setPrototypeOf: function() {
  wt(12);
} }, Ao = {};
zo($c, (function(e3, t) {
  Ao[e3] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
})), Ao.deleteProperty = function(e3, t) {
  return Ao.set.call(this, e3, t, void 0);
}, Ao.set = function(e3, t, r) {
  return $c.set.call(this, e3[0], t, r, e3[0]);
};
var R$ = (function() {
  function e3(r) {
    var i = this;
    this.O = Sg, this.D = true, this.produce = function(a, s, l) {
      if (typeof a == "function" && typeof s != "function") {
        var c = s;
        s = a;
        var f = i;
        return function(d) {
          var b = this;
          d === void 0 && (d = c);
          for (var h = arguments.length, x = Array(h > 1 ? h - 1 : 0), _ = 1; _ < h; _++) x[_ - 1] = arguments[_];
          return f.produce(d, (function(R) {
            var O;
            return (O = s).call.apply(O, [b, R].concat(x));
          }));
        };
      }
      var m;
      if (typeof s != "function" && wt(6), l !== void 0 && typeof l != "function" && wt(7), Yn(a)) {
        var g = gg(i), v = Cc(i, a, void 0), p = true;
        try {
          m = s(v), p = false;
        } finally {
          p ? Es(g) : Pc(g);
        }
        return typeof Promise < "u" && m instanceof Promise ? m.then((function(d) {
          return nc(g, l), ic(d, g);
        }), (function(d) {
          throw Es(g), d;
        })) : (nc(g, l), ic(m, g));
      }
      if (!a || typeof a != "object") {
        if ((m = s(a)) === void 0 && (m = a), m === $y && (m = void 0), i.D && Wo(m, true), l) {
          var w = [], S = [];
          Mr("Patches").M(a, m, w, S), l(w, S);
        }
        return m;
      }
      wt(21, a);
    }, this.produceWithPatches = function(a, s) {
      if (typeof a == "function") return function(m) {
        for (var g = arguments.length, v = Array(g > 1 ? g - 1 : 0), p = 1; p < g; p++) v[p - 1] = arguments[p];
        return i.produceWithPatches(m, (function(w) {
          return a.apply(void 0, [w].concat(v));
        }));
      };
      var l, c, f = i.produce(a, s, (function(m, g) {
        l = m, c = g;
      }));
      return typeof Promise < "u" && f instanceof Promise ? f.then((function(m) {
        return [m, l, c];
      })) : [f, l, c];
    }, typeof (r == null ? void 0 : r.useProxies) == "boolean" && this.setUseProxies(r.useProxies), typeof (r == null ? void 0 : r.autoFreeze) == "boolean" && this.setAutoFreeze(r.autoFreeze);
  }
  var t = e3.prototype;
  return t.createDraft = function(r) {
    Yn(r) || wt(8), ki(r) && (r = Cy(r));
    var i = gg(this), a = Cc(this, r, void 0);
    return a[Yt].C = true, Pc(i), a;
  }, t.finishDraft = function(r, i) {
    var a = r && r[Yt];
    var s = a.A;
    return nc(s, i), ic(void 0, s);
  }, t.setAutoFreeze = function(r) {
    this.D = r;
  }, t.setUseProxies = function(r) {
    r && !Sg && wt(20), this.O = r;
  }, t.applyPatches = function(r, i) {
    var a;
    for (a = i.length - 1; a >= 0; a--) {
      var s = i[a];
      if (s.path.length === 0 && s.op === "replace") {
        r = s.value;
        break;
      }
    }
    a > -1 && (i = i.slice(a + 1));
    var l = Mr("Patches").$;
    return ki(r) ? l(r, i) : this.produce(r, (function(c) {
      return l(c, i);
    }));
  }, e3;
})(), Xt = new R$(), P$ = Xt.produce;
Xt.produceWithPatches.bind(Xt);
Xt.setAutoFreeze.bind(Xt);
Xt.setUseProxies.bind(Xt);
Xt.applyPatches.bind(Xt);
Xt.createDraft.bind(Xt);
Xt.finishDraft.bind(Xt);
function k$(e3) {
  var t = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState(function() {
    return Wo(typeof e3 == "function" ? e3() : e3, true);
  }), r = t[1];
  return [t[0], qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useCallback(function(i) {
    r(typeof i == "function" ? P$(i) : Wo(i));
  }, [])];
}
const mL = (e3, t, r) => {
  const [i, a] = k$(e3), s = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(null);
  qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect(() => {
    var f;
    return r && (s.current = void 0 , (f = s.current) == null || f.init(e3)), () => {
      var m, g;
      (g = (m = s.current) == null ? void 0 : m.disconnect) == null || g.call(m);
    };
  }, []);
  const l = t && typeof t == "object" ? t : {}, c = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useMemo(
    () => Object.keys(l).reduce((f, m) => ({
      ...f,
      [m]: (g) => (a((v) => {
        var p;
        l[m](v, g), (p = s.current) == null || p.send(
          {
            type: l[m].name
          },
          Cy(v)
        );
      }), c)
    }), {}),
    [a]
  );
  return { state: i, dispatch: c };
};
function Qr(e3) {
  return typeof e3 == "function";
}
function Iy(e3) {
  var t = function(i) {
    Error.call(i), i.stack = new Error().stack;
  }, r = e3(t);
  return r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r;
}
var uc = Iy(function(e3) {
  return function(r) {
    e3(this), this.message = r ? r.length + ` errors occurred during unsubscription:
` + r.map(function(i, a) {
      return a + 1 + ") " + i.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = r;
  };
});
function Ic(e3, t) {
  if (e3) {
    var r = e3.indexOf(t);
    0 <= r && e3.splice(r, 1);
  }
}
var Zs = (function() {
  function e3(t) {
    this.initialTeardown = t, this.closed = false, this._parentage = null, this._finalizers = null;
  }
  return e3.prototype.unsubscribe = function() {
    var t, r, i, a, s;
    if (!this.closed) {
      this.closed = true;
      var l = this._parentage;
      if (l)
        if (this._parentage = null, Array.isArray(l))
          try {
            for (var c = gc(l), f = c.next(); !f.done; f = c.next()) {
              var m = f.value;
              m.remove(this);
            }
          } catch (d) {
            t = { error: d };
          } finally {
            try {
              f && !f.done && (r = c.return) && r.call(c);
            } finally {
              if (t) throw t.error;
            }
          }
        else
          l.remove(this);
      var g = this.initialTeardown;
      if (Qr(g))
        try {
          g();
        } catch (d) {
          s = d instanceof uc ? d.errors : [d];
        }
      var v = this._finalizers;
      if (v) {
        this._finalizers = null;
        try {
          for (var p = gc(v), w = p.next(); !w.done; w = p.next()) {
            var S = w.value;
            try {
              _g(S);
            } catch (d) {
              s = s ?? [], d instanceof uc ? s = ys(ys([], mc(s)), mc(d.errors)) : s.push(d);
            }
          }
        } catch (d) {
          i = { error: d };
        } finally {
          try {
            w && !w.done && (a = p.return) && a.call(p);
          } finally {
            if (i) throw i.error;
          }
        }
      }
      if (s)
        throw new uc(s);
    }
  }, e3.prototype.add = function(t) {
    var r;
    if (t && t !== this)
      if (this.closed)
        _g(t);
      else {
        if (t instanceof e3) {
          if (t.closed || t._hasParent(this))
            return;
          t._addParent(this);
        }
        (this._finalizers = (r = this._finalizers) !== null && r !== void 0 ? r : []).push(t);
      }
  }, e3.prototype._hasParent = function(t) {
    var r = this._parentage;
    return r === t || Array.isArray(r) && r.includes(t);
  }, e3.prototype._addParent = function(t) {
    var r = this._parentage;
    this._parentage = Array.isArray(r) ? (r.push(t), r) : r ? [r, t] : t;
  }, e3.prototype._removeParent = function(t) {
    var r = this._parentage;
    r === t ? this._parentage = null : Array.isArray(r) && Ic(r, t);
  }, e3.prototype.remove = function(t) {
    var r = this._finalizers;
    r && Ic(r, t), t instanceof e3 && t._removeParent(this);
  }, e3.EMPTY = (function() {
    var t = new e3();
    return t.closed = true, t;
  })(), e3;
})(), Ly = Zs.EMPTY;
function My(e3) {
  return e3 instanceof Zs || e3 && "closed" in e3 && Qr(e3.remove) && Qr(e3.add) && Qr(e3.unsubscribe);
}
function _g(e3) {
  Qr(e3) ? e3() : e3.unsubscribe();
}
var $$ = {
  Promise: void 0
}, I$ = {
  setTimeout: function(e3, t) {
    for (var r = [], i = 2; i < arguments.length; i++)
      r[i - 2] = arguments[i];
    return setTimeout.apply(void 0, ys([e3, t], mc(r)));
  },
  clearTimeout: function(e3) {
    return clearTimeout(e3);
  },
  delegate: void 0
};
function L$(e3) {
  I$.setTimeout(function() {
    throw e3;
  });
}
function Eg() {
}
function ps(e3) {
  e3();
}
var Ny = (function(e3) {
  Fs(t, e3);
  function t(r) {
    var i = e3.call(this) || this;
    return i.isStopped = false, r ? (i.destination = r, My(r) && r.add(i)) : i.destination = F$, i;
  }
  return t.create = function(r, i, a) {
    return new Lc(r, i, a);
  }, t.prototype.next = function(r) {
    this.isStopped || this._next(r);
  }, t.prototype.error = function(r) {
    this.isStopped || (this.isStopped = true, this._error(r));
  }, t.prototype.complete = function() {
    this.isStopped || (this.isStopped = true, this._complete());
  }, t.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = true, e3.prototype.unsubscribe.call(this), this.destination = null);
  }, t.prototype._next = function(r) {
    this.destination.next(r);
  }, t.prototype._error = function(r) {
    try {
      this.destination.error(r);
    } finally {
      this.unsubscribe();
    }
  }, t.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, t;
})(Zs), M$ = (function() {
  function e3(t) {
    this.partialObserver = t;
  }
  return e3.prototype.next = function(t) {
    var r = this.partialObserver;
    if (r.next)
      try {
        r.next(t);
      } catch (i) {
        ns(i);
      }
  }, e3.prototype.error = function(t) {
    var r = this.partialObserver;
    if (r.error)
      try {
        r.error(t);
      } catch (i) {
        ns(i);
      }
    else
      ns(t);
  }, e3.prototype.complete = function() {
    var t = this.partialObserver;
    if (t.complete)
      try {
        t.complete();
      } catch (r) {
        ns(r);
      }
  }, e3;
})(), Lc = (function(e3) {
  Fs(t, e3);
  function t(r, i, a) {
    var s = e3.call(this) || this, l;
    return Qr(r) || !r ? l = {
      next: r ?? void 0,
      error: i ?? void 0,
      complete: a ?? void 0
    } : l = r, s.destination = new M$(l), s;
  }
  return t;
})(Ny);
function ns(e3) {
  L$(e3);
}
function N$(e3) {
  throw e3;
}
var F$ = {
  closed: true,
  next: Eg,
  error: N$,
  complete: Eg
}, D$ = (function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
})();
function z$(e3) {
  return e3;
}
function W$(e3) {
  return e3.length === 0 ? z$ : e3.length === 1 ? e3[0] : function(r) {
    return e3.reduce(function(i, a) {
      return a(i);
    }, r);
  };
}
var Og = (function() {
  function e3(t) {
    t && (this._subscribe = t);
  }
  return e3.prototype.lift = function(t) {
    var r = new e3();
    return r.source = this, r.operator = t, r;
  }, e3.prototype.subscribe = function(t, r, i) {
    var a = this, s = U$(t) ? t : new Lc(t, r, i);
    return ps(function() {
      var l = a, c = l.operator, f = l.source;
      s.add(c ? c.call(s, f) : f ? a._subscribe(s) : a._trySubscribe(s));
    }), s;
  }, e3.prototype._trySubscribe = function(t) {
    try {
      return this._subscribe(t);
    } catch (r) {
      t.error(r);
    }
  }, e3.prototype.forEach = function(t, r) {
    var i = this;
    return r = Ag(r), new r(function(a, s) {
      var l = new Lc({
        next: function(c) {
          try {
            t(c);
          } catch (f) {
            s(f), l.unsubscribe();
          }
        },
        error: s,
        complete: a
      });
      i.subscribe(l);
    });
  }, e3.prototype._subscribe = function(t) {
    var r;
    return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(t);
  }, e3.prototype[D$] = function() {
    return this;
  }, e3.prototype.pipe = function() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    return W$(t)(this);
  }, e3.prototype.toPromise = function(t) {
    var r = this;
    return t = Ag(t), new t(function(i, a) {
      var s;
      r.subscribe(function(l) {
        return s = l;
      }, function(l) {
        return a(l);
      }, function() {
        return i(s);
      });
    });
  }, e3.create = function(t) {
    return new e3(t);
  }, e3;
})();
function Ag(e3) {
  var t;
  return (t = e3 ?? $$.Promise) !== null && t !== void 0 ? t : Promise;
}
function B$(e3) {
  return e3 && Qr(e3.next) && Qr(e3.error) && Qr(e3.complete);
}
function U$(e3) {
  return e3 && e3 instanceof Ny || B$(e3) && My(e3);
}
var j$ = Iy(function(e3) {
  return function() {
    e3(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), Dr = (function(e3) {
  Fs(t, e3);
  function t() {
    var r = e3.call(this) || this;
    return r.closed = false, r.currentObservers = null, r.observers = [], r.isStopped = false, r.hasError = false, r.thrownError = null, r;
  }
  return t.prototype.lift = function(r) {
    var i = new Tg(this, this);
    return i.operator = r, i;
  }, t.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new j$();
  }, t.prototype.next = function(r) {
    var i = this;
    ps(function() {
      var a, s;
      if (i._throwIfClosed(), !i.isStopped) {
        i.currentObservers || (i.currentObservers = Array.from(i.observers));
        try {
          for (var l = gc(i.currentObservers), c = l.next(); !c.done; c = l.next()) {
            var f = c.value;
            f.next(r);
          }
        } catch (m) {
          a = { error: m };
        } finally {
          try {
            c && !c.done && (s = l.return) && s.call(l);
          } finally {
            if (a) throw a.error;
          }
        }
      }
    });
  }, t.prototype.error = function(r) {
    var i = this;
    ps(function() {
      if (i._throwIfClosed(), !i.isStopped) {
        i.hasError = i.isStopped = true, i.thrownError = r;
        for (var a = i.observers; a.length; )
          a.shift().error(r);
      }
    });
  }, t.prototype.complete = function() {
    var r = this;
    ps(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.isStopped = true;
        for (var i = r.observers; i.length; )
          i.shift().complete();
      }
    });
  }, t.prototype.unsubscribe = function() {
    this.isStopped = this.closed = true, this.observers = this.currentObservers = null;
  }, Object.defineProperty(t.prototype, "observed", {
    get: function() {
      var r;
      return ((r = this.observers) === null || r === void 0 ? void 0 : r.length) > 0;
    },
    enumerable: false,
    configurable: true
  }), t.prototype._trySubscribe = function(r) {
    return this._throwIfClosed(), e3.prototype._trySubscribe.call(this, r);
  }, t.prototype._subscribe = function(r) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(r), this._innerSubscribe(r);
  }, t.prototype._innerSubscribe = function(r) {
    var i = this, a = this, s = a.hasError, l = a.isStopped, c = a.observers;
    return s || l ? Ly : (this.currentObservers = null, c.push(r), new Zs(function() {
      i.currentObservers = null, Ic(c, r);
    }));
  }, t.prototype._checkFinalizedStatuses = function(r) {
    var i = this, a = i.hasError, s = i.thrownError, l = i.isStopped;
    a ? r.error(s) : l && r.complete();
  }, t.prototype.asObservable = function() {
    var r = new Og();
    return r.source = this, r;
  }, t.create = function(r, i) {
    return new Tg(r, i);
  }, t;
})(Og), Tg = (function(e3) {
  Fs(t, e3);
  function t(r, i) {
    var a = e3.call(this) || this;
    return a.destination = r, a.source = i, a;
  }
  return t.prototype.next = function(r) {
    var i, a;
    (a = (i = this.destination) === null || i === void 0 ? void 0 : i.next) === null || a === void 0 || a.call(i, r);
  }, t.prototype.error = function(r) {
    var i, a;
    (a = (i = this.destination) === null || i === void 0 ? void 0 : i.error) === null || a === void 0 || a.call(i, r);
  }, t.prototype.complete = function() {
    var r, i;
    (i = (r = this.destination) === null || r === void 0 ? void 0 : r.complete) === null || i === void 0 || i.call(r);
  }, t.prototype._subscribe = function(r) {
    var i, a;
    return (a = (i = this.source) === null || i === void 0 ? void 0 : i.subscribe(r)) !== null && a !== void 0 ? a : Ly;
  }, t;
})(Dr), H$ = /* @__PURE__ */ ((e3) => (e3.RELOAD = "reload", e3.RECOMPUTE = "recompute", e3))(H$ || {}), q$ = /* @__PURE__ */ ((e3) => (e3.RENAME = "rename", e3.TYPE_CHANGE = "type-change", e3))(q$ || {});
const yL = new Dr(), wL = new Dr(), Z$ = new Dr();
var G$ = /* @__PURE__ */ ((e3) => (e3.SAVE_ALL = "save-all", e3))(G$ || {});
const bL = new Dr();
var K$ = /* @__PURE__ */ ((e3) => (e3.WILL_SAVE = "will-save", e3.DID_SAVE = "did-save", e3.WILL_CREATE = "will-create", e3.WILL_RENAME = "will-rename", e3.WILL_DELETE = "will-delete", e3.DID_CREATE = "did-create", e3.DID_RENAME = "did-rename", e3.DID_DELETE = "did-delete", e3.DIAGNOSTIC_REFRESH = "diagnostic-refresh", e3))(K$ || {});
const SL = new Dr();
var V$ = /* @__PURE__ */ ((e3) => (e3.RESEND_BREAKPOINTS = "resend-breakpoints", e3))(V$ || {});
const xL = new Dr(), _L = new Dr();
var Ts = /* @__PURE__ */ ((e3) => (e3.EVENT_STARTED = "event-started", e3.EVENT_ENDED = "event-ended", e3.EVENT_EMITED = "event-emited", e3.REQUEST_SENT = "request-sent", e3))(Ts || {});
const Mc = new Dr(), EL = new Dr(), Fy = 31;
var Dy = ((e3) => (e3.EMPTY = "Please enter a valid name", e3.LENGTH_EXCEEDED = `The name is too long, it should not exceed ${Fy} characters`, e3.SHOULD_START_WITH_LETTER = "The name can only start with a letter or a Japanese character", e3.INVALID = "Invalid name", e3))(Dy || {});
function Y$(e3) {
  if (e3 === "")
    throw new Error(
      "Please enter a valid name"
      /* EMPTY */
    );
  if (e3.length > Fy)
    throw new Error(Dy.LENGTH_EXCEEDED);
  if (!/^[a-zA-Z\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FAF]/.test(e3))
    throw new Error(
      "The name can only start with a letter or a Japanese character"
      /* SHOULD_START_WITH_LETTER */
    );
  if (!/^[\w\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FAF-]+$/i.test(e3))
    throw new Error(
      "Invalid name"
      /* INVALID */
    );
  return true;
}
function OL(e3) {
  if (!e3) return null;
  if (typeof e3 == "string")
    try {
      Y$(e3);
    } catch (t) {
      return t.message;
    }
}
function AL(e3, t) {
  let r = "";
  if (["array", "object"].includes(t))
    try {
      const i = JSON.parse(e3);
      t === "array" && (!Array.isArray(i) || !it.isObject(i)) && (r = `Invalid value for type ${t}`), t === "object" && (!it.isObject(i) || Array.isArray(i)) && (r = `Invalid value for type ${t}`);
    } catch {
      r = `Invalid value for type ${t}`;
    }
  return t === "date" && (new RegExp(
    /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/
  ).test(e3) || (r = `Invalid value for type ${t}`)), t === "number" && isNaN(+e3) && (r = `Invalid value for type ${t}`), ["boolean", "bool"].includes(t) && typeof e3 != "boolean" && !["true", "false"].includes(e3) && (r = `Invalid value for type ${t}`), r;
}
function X$() {
  return {
    PLACEHOLDER_PREFIX: `@!MASK_${Date.now().toString(36) + Math.random().toString(36).substring(2, 8)}_`,
    counter: 0
  };
}
function Tf(e3) {
  const { PLACEHOLDER_PREFIX: t, counter: r } = X$();
  let i = r;
  const a = [], s = "@!", l = (g) => (a.push(g), `${t}${i++}${s}`);
  let c = e3.replace(
    /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g,
    l
  );
  c = c.replace(
    /([\{\s]\s*\w+\s*)(:\s*\d+)/g,
    (g, v, p) => v + l(p)
  ), c = c.replace(/:\d{2}:\d{2}/g, l);
  const f = new RegExp(":(?!4D\\.\\w+)[CPK]?\\d+", "g");
  let m = c.replace(f, "");
  for (let g = 0; g < a.length; g++) {
    const p = `${t}${g}${s}`.replace(
      /([.*+?^${}()|[\]\\])/g,
      "\\$1"
    ), w = new RegExp(p, "g");
    m = m.replace(w, a[g]);
  }
  return m;
}
var zy = /* @__PURE__ */ ((e3) => (e3.METHODS = "method", e3.WEBFORMS = "webform", e3.CLASSES = "class", e3.WELCOME = "welcome", e3.SETTINGS = "settings", e3.ROOT = "root", e3.REPORTS = "report", e3))(zy || {});
const Un = {
  CLASSES: "Classes",
  METHODS: "Methods",
  SHARED: "Shared",
  WEBFORMS: "WebForms",
  CLASSES_FOLDER: "ClassesFolder",
  REPORTS: "Reports",
  DEBUGGER: "Debugger"
};
var mt = /* @__PURE__ */ ((e3) => (e3.FOLDER = "folder", e3.WEBFORM = "webform", e3.REPORT = "report", e3.METHOD = "method", e3.CLASS = "class", e3.CLASS_FOLDER = "classfolder", e3.DEBUGGER = "debugger", e3.WELCOME = "welcome", e3.SETTINGS = "settings", e3.METHODS = "method", e3.WEBFORMS = "webform", e3.CLASSES = "class", e3.DEBUGGERS = "debugger", e3.MODELS = "models", e3.ROLES = "roles", e3.HTTP_HANDLERS = "http-handlers", e3.LOCALIZATION = "localization", e3.MODEL = "model", e3.DATA_EXPLORER = "dataexplorer", e3.MOBILE = "mobile", e3.MOBILEFORM = "mform", e3.FILE = "file", e3.TEXT = "text", e3))(mt || {}), ti = /* @__PURE__ */ ((e3) => (e3.GET_FOLDER = "getFolder", e3.GET = "get", e3.SAVE = "save", e3.RENAME = "rename", e3.DROP = "drop", e3.ADD_FOLDER = "addFolder", e3.CREATE_FOLDER = "mkdir", e3.RENAME_FOLDER = "renameFolder", e3.DROP_FOLDER = "dropFolder", e3.REMOVE_ITEM = "removeItem", e3.MOVE_ITEM = "moveItem", e3.GET_INFO = "getInfo", e3.SAVE_CONTENT = "save", e3.UPDATE_CHECK = "update:check", e3.UPDATE_INSTALL = "update:install", e3.GET_APP_SETTINGS = "getWebServerInfo", e3.GET_FILE_CONTENT = "getFileContent", e3.SET_FILE_CONTENT = "setFileContent", e3.GET_FILES_INFO = "getFilesInfo", e3))(ti || {}), Wy = /* @__PURE__ */ ((e3) => (e3[e3.DISABLED = 0] = "DISABLED", e3[e3.ENABLED = 1] = "ENABLED", e3))(Wy || {});
const J$ = "roles.json", Q$ = "qodlyApp.json", TL = "model.4DModel", eI = "HTTPHandlers.json", tI = "Shared/i18n.json";
function RL(e3) {
  const t = By(e3);
  switch (t) {
    case mt.SETTINGS:
      return {
        filename: "Settings",
        type: t
      };
    case mt.HTTP_HANDLERS:
      return {
        filename: "HTTP Handlers",
        type: t
      };
    case mt.ROLES:
      return {
        filename: "Roles & Privileges",
        type: t
      };
    case mt.LOCALIZATION:
      return {
        filename: "Localization",
        type: t
      };
    case mt.MODEL:
      return {
        filename: "Model",
        type: t
      };
    default: {
      const r = e3.split("/"), [i] = r[1].split(".");
      return {
        filename: i,
        type: t
      };
    }
  }
}
function By(e3) {
  const t = e3.split("."), r = t.pop(), i = t.join(".").split("/")[0];
  switch (true) {
    case r === "4DModel":
      return mt.MODEL;
    case r === "WebForm":
      return mt.WEBFORM;
    case (["4dm", "4qs", "4qm"].includes(r) && i === Un.METHODS):
      return mt.METHOD;
    case (["4dm", "4qs", "4qm"].includes(r) && i === Un.CLASSES):
      return mt.CLASS;
    case e3 === J$:
      return mt.ROLES;
    case e3 === eI:
      return mt.HTTP_HANDLERS;
    case e3 === Q$:
      return mt.SETTINGS;
    case e3 === tI:
      return mt.LOCALIZATION;
    default:
      return mt.TEXT;
  }
}
function PL(e3, t = false) {
  switch (e3) {
    case Un.REPORTS:
    case "report":
      return "QoDoc";
    case Un.WEBFORMS:
    case "webform":
      return "WebForm";
    case "Mobile":
    case "mform":
      return "MForm";
    case "class":
    case "method":
    case Un.CLASSES:
    case Un.METHODS:
      return t ? "4qs" : "4dm";
    default:
      return "";
  }
}
function kL(e3, t = "") {
  const r = new RegExp("(?<=\\/)(\\w+)(?=\\.)").exec(e3);
  return r ? r[1] : t;
}
class rI {
  constructor() {
    this.current = Promise.resolve();
  }
  lock() {
    let t;
    const r = new Promise((a) => {
      t = a;
    }), i = this.current.then(() => t);
    return this.current = r, i;
  }
}
function Uy() {
  const e3 = new rI();
  return async (t) => {
    const r = await e3.lock();
    try {
      const i = await t();
      return r(), i;
    } catch (i) {
      console.error(i), r();
      return;
    }
  };
}
const nI = it.curry(
  (e3, t, r) => e3 && it.get(r, e3) === t
), CL = it.curry((e3, t, r) => it.get(r, e3) !== t), $L = it.curry((e3, t) => it.get(t, "id") !== e3), IL = it.curry((e3, t) => it.get(t, "id") === e3), LL = it.curry((e3, t) => it.get(t, "path") === e3);
function ML(e3 = "id", t, r) {
  return r.findIndex(nI(e3, t)) !== -1;
}
function NL(e3) {
  if (!e3) return "";
  const { id: t, namespace: r } = e3;
  return r && t ? `${r}:${t}` : t;
}
function iI(e3) {
  return [
    "bool",
    "word",
    "string",
    "text",
    "uuid",
    "short",
    "long",
    "number",
    "long64",
    "duration",
    "object",
    "date",
    "image",
    "blob"
  ].includes(e3.type || "");
}
function FL(e3) {
  return e3.type === "object";
}
function oI(e3) {
  var t;
  return e3.kind === "relatedEntities" || ((t = e3.type) == null ? void 0 : t.includes("Selection")) || e3.behavior === "relatedEntities";
}
function aI(e3) {
  return e3.kind === "relatedEntity" || e3.behavior === "relatedEntity" || !iI(e3);
}
function DL(e3) {
  return oI(e3) || aI(e3);
}
function zL(e3) {
  return e3.applyTo === "dataStore";
}
function WL(e3) {
  return e3.applyTo === "dataClass";
}
function BL(e3) {
  return e3.applyTo === "entity";
}
function UL(e3) {
  return e3.applyTo === "entityCollection";
}
function jL(e3) {
  return e3.type === "entity";
}
function HL(e3) {
  return e3.type === "entitysel";
}
function sI(e3) {
  return e3.dataType === "array";
}
function uI(e3) {
  return e3.dataType === "object";
}
function lI(e3) {
  return e3.type === "scalar";
}
function qL(e3) {
  return sI(e3) || uI(e3) || lI(e3);
}
const ZL = (e3) => e3 != null && e3.type === "entity", GL = (e3) => e3.type === "entitysel", KL = (e3) => e3.type === "array" || e3.type === "scalar" && e3.dataType === "array", VL = (e3) => e3.type === "object" || e3.type === "scalar" && e3.dataType === "object", YL = (e3) => e3.type === "scalar" && e3.dataType === "date";
function XL() {
  return new Promise((e3, t) => {
    window.addEventListener("bundle:ready", (r) => r.data ? e3() : t(r.caughtErr));
  });
}
function JL() {
  return new Promise((e3) => {
    window.addEventListener("i18n:ready", () => e3());
  });
}
var Rs = /* @__PURE__ */ ((e3) => (e3.capable = "capable", e3.incapable = "incapable", e3.indifferent = "indifferent", e3))(Rs || {}), cI = /* @__PURE__ */ ((e3) => (e3.soap = "soap", e3.web = "web", e3.sql = "sql", e3.rest = "rest", e3))(cI || {}), jy = /* @__PURE__ */ ((e3) => (e3.table = "table", e3.catalog = "catalog", e3.currentRecord = "currentRecord", e3.currentSelection = "currentSelection", e3))(jy || {});
const QL = {
  publishedSoap: "soap",
  publishedWeb: "web",
  publishedSql: "sql",
  publishedRest: "rest"
  /* rest */
};
function eM(e3) {
  var s;
  let t = {};
  try {
    const l = ((s = e3.match(/\/\/%attributes = (.*)/)) == null ? void 0 : s[1]) || "";
    t = JSON.parse(l);
  } catch {
  }
  const { published4DMobile: r, ...i } = t;
  return {
    ...{
      invisible: false,
      shared: false,
      executedOnServer: false,
      preemptive: Rs.indifferent,
      publishedSoap: false,
      publishedWsdl: false,
      publishedWeb: false,
      publishedSql: false,
      publishedRest: !!r,
      publishedRestOptions: r || {
        table: "",
        scope: jy.table
      }
    },
    ...i
  };
}
function fI(e3) {
  const t = {};
  return e3.invisible && (t.invisible = true), e3.shared && (t.shared = true), e3.executedOnServer && (t.executedOnServer = true), e3.preemptive && [Rs.capable, Rs.incapable].includes(e3.preemptive) && (t.preemptive = e3.preemptive), e3.publishedSoap && (t.publishedSoap = true, e3.publishedWsdl && (t.publishedWsdl = true)), e3.publishedWeb && (t.publishedWeb = true), e3.publishedSql && (t.publishedSql = true), e3.publishedRest && e3.publishedRestOptions && (t.published4DMobile = e3.publishedRestOptions), JSON.stringify(t).replace(/"(true|false)"/g, "$1");
}
function tM(e3, t, r = false) {
  const i = it.isString(t) ? t : fI(t);
  if (!r && dI(e3))
    return e3;
  const a = pI(e3);
  return `//%attributes = ${i}\r
${a}`;
}
function dI(e3) {
  return /^\/\/%attributes.*(?:\r\n|\n)?/g.test(e3);
}
function pI(e3) {
  return e3.replace(/^\/\/%attributes.*(?:\r\n|\n)?/g, "");
}
const rM = () => Yc.uuid().replaceAll("-", "").toUpperCase(), ct = "/rest/$designer", Gs = "/rest/$designer-ext";
function nM(...e3) {
  return (t) => {
    if (e3.length === 0)
      return t;
    const r = { ...t };
    return e3.forEach((i) => {
      typeof r[i] == "string" && (r[i] = new Date(r[i]));
    }), r;
  };
}
class Rg extends Error {
  constructor(t, r, i) {
    super(), this.url = t, this.response = r, this.data = i;
  }
  log() {
    console.error("Error while sending the request", this);
  }
}
async function Fe(e3, t) {
  var a;
  Mc.next({ action: Ts.REQUEST_SENT });
  const r = await window.fetch(e3, t);
  if (/401/.test(r.status.toString()) && (window.location.href = "/login.html?redirect=studio"), /^[45]/.test(r.status.toString())) {
    let s;
    try {
      const l = await r.json();
      ((a = l == null ? void 0 : l.__ERROR) == null ? void 0 : a.some(
        (f) => f.errCode === 1651
      )) && Mc.next({
        action: Ts.EVENT_EMITED,
        payload: {
          eventName: "onsessionexpired"
        }
      }), s = new Rg(e3, r, l);
    } catch {
      s = new Rg(e3, r);
    }
    throw s.log(), s;
  }
  return await r.json();
}
function iM(e3) {
  return Mc.next({ action: Ts.REQUEST_SENT }), e3;
}
var Rr = {}, gt = {}, Pg;
function jn() {
  if (Pg) return gt;
  Pg = 1;
  var e3 = gt.ValidationError = function(d, b, h, x, _, R) {
    if (Array.isArray(x) ? (this.path = x, this.property = x.reduce(function(C, W) {
      return C + c(W);
    }, "instance")) : x !== void 0 && (this.property = x), d && (this.message = d), h) {
      var O = h.$id || h.id;
      this.schema = O || h;
    }
    b !== void 0 && (this.instance = b), this.name = _, this.argument = R, this.stack = this.toString();
  };
  e3.prototype.toString = function() {
    return this.property + " " + this.message;
  };
  var t = gt.ValidatorResult = function(d, b, h, x) {
    this.instance = d, this.schema = b, this.options = h, this.path = x.path, this.propertyPath = x.propertyPath, this.errors = [], this.throwError = h && h.throwError, this.throwFirst = h && h.throwFirst, this.throwAll = h && h.throwAll, this.disableFormat = h && h.disableFormat === true;
  };
  t.prototype.addError = function(d) {
    var b;
    if (typeof d == "string")
      b = new e3(d, this.instance, this.schema, this.path);
    else {
      if (!d) throw new Error("Missing error detail");
      if (!d.message) throw new Error("Missing error message");
      if (!d.name) throw new Error("Missing validator type");
      b = new e3(d.message, this.instance, this.schema, this.path, d.name, d.argument);
    }
    if (this.errors.push(b), this.throwFirst)
      throw new i(this);
    if (this.throwError)
      throw b;
    return b;
  }, t.prototype.importErrors = function(d) {
    typeof d == "string" || d && d.validatorType ? this.addError(d) : d && d.errors && (this.errors = this.errors.concat(d.errors));
  };
  function r(S, d) {
    return d + ": " + S.toString() + `
`;
  }
  t.prototype.toString = function(d) {
    return this.errors.map(r).join("");
  }, Object.defineProperty(t.prototype, "valid", { get: function() {
    return !this.errors.length;
  } }), gt.ValidatorResultError = i;
  function i(S) {
    typeof Error.captureStackTrace == "function" && Error.captureStackTrace(this, i), this.instance = S.instance, this.schema = S.schema, this.options = S.options, this.errors = S.errors;
  }
  i.prototype = new Error(), i.prototype.constructor = i, i.prototype.name = "Validation Error";
  var a = gt.SchemaError = function S(d, b) {
    this.message = d, this.schema = b, Error.call(this, d), typeof Error.captureStackTrace == "function" && Error.captureStackTrace(this, S);
  };
  a.prototype = Object.create(
    Error.prototype,
    {
      constructor: { value: a, enumerable: false },
      name: { value: "SchemaError", enumerable: false }
    }
  );
  var s = gt.SchemaContext = function(d, b, h, x, _) {
    this.schema = d, this.options = b, Array.isArray(h) ? (this.path = h, this.propertyPath = h.reduce(function(R, O) {
      return R + c(O);
    }, "instance")) : this.propertyPath = h, this.base = x, this.schemas = _;
  };
  s.prototype.resolve = function(d) {
    return w(this.base, d);
  }, s.prototype.makeChild = function(d, b) {
    var h = b === void 0 ? this.path : this.path.concat([b]), x = d.$id || d.id;
    let _ = w(this.base, x || "");
    var R = new s(d, this.options, h, _, Object.create(this.schemas));
    return x && !R.schemas[_] && (R.schemas[_] = d), R;
  };
  var l = gt.FORMAT_REGEXPS = {
    // 7.3.1. Dates, Times, and Duration
    "date-time": /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])[tT ](2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])(\.\d+)?([zZ]|[+-]([0-5][0-9]):(60|[0-5][0-9]))$/,
    date: /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])$/,
    time: /^(2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])$/,
    duration: /P(T\d+(H(\d+M(\d+S)?)?|M(\d+S)?|S)|\d+(D|M(\d+D)?|Y(\d+M(\d+D)?)?)(T\d+(H(\d+M(\d+S)?)?|M(\d+S)?|S))?|\d+W)/i,
    // 7.3.2. Email Addresses
    // TODO: fix the email production
    email: /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/,
    "idn-email": /^("(?:[!#-\[\]-\u{10FFFF}]|\\[\t -\u{10FFFF}])*"|[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*)@([!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*|\[[!-Z\^-\u{10FFFF}]*\])$/u,
    // 7.3.3. Hostnames
    // 7.3.4. IP Addresses
    "ip-address": /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    // FIXME whitespace is invalid
    ipv6: /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
    // 7.3.5. Resource Identifiers
    // TODO: A more accurate regular expression for "uri" goes:
    // [A-Za-z][+\-.0-9A-Za-z]*:((/(/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?)?)?#(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|(/(/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~])|/?%[0-9A-Fa-f]{2}|[!$&-.0-;=?-Z_a-z~])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*(#(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*)?|/(/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+(:\d*)?|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?:\d*|\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)?)?
    uri: /^[a-zA-Z][a-zA-Z0-9+.-]*:[^\s]*$/,
    "uri-reference": /^(((([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|([A-Za-z][+\-.0-9A-Za-z]*:?)?)|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|(\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?)?))#(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|(([A-Za-z][+\-.0-9A-Za-z]*)?%[0-9A-Fa-f]{2}|[!$&-.0-9;=@_~]|[A-Za-z][+\-.0-9A-Za-z]*[!$&-*,;=@_~])(%[0-9A-Fa-f]{2}|[!$&-.0-9;=@-Z_a-z~])*((([/?](%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*)?#|[/?])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*)?|([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+(:\d*)?|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?:\d*|\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)?|[A-Za-z][+\-.0-9A-Za-z]*:?)?$/,
    iri: /^[a-zA-Z][a-zA-Z0-9+.-]*:[^\s]*$/,
    "iri-reference": /^(((([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~-\u{10FFFF}]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|([A-Za-z][+\-.0-9A-Za-z]*:?)?)|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~-\u{10FFFF}])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|(\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?)?))#(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|(([A-Za-z][+\-.0-9A-Za-z]*)?%[0-9A-Fa-f]{2}|[!$&-.0-9;=@_~-\u{10FFFF}]|[A-Za-z][+\-.0-9A-Za-z]*[!$&-*,;=@_~-\u{10FFFF}])(%[0-9A-Fa-f]{2}|[!$&-.0-9;=@-Z_a-z~-\u{10FFFF}])*((([/?](%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*)?#|[/?])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*)?|([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~-\u{10FFFF}]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~-\u{10FFFF}])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+(:\d*)?|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?:\d*|\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)?|[A-Za-z][+\-.0-9A-Za-z]*:?)?$/u,
    uuid: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    // 7.3.6. uri-template
    "uri-template": /(%[0-9a-f]{2}|[!#$&(-;=?@\[\]_a-z~]|\{[!#&+,./;=?@|]?(%[0-9a-f]{2}|[0-9_a-z])(\.?(%[0-9a-f]{2}|[0-9_a-z]))*(:[1-9]\d{0,3}|\*)?(,(%[0-9a-f]{2}|[0-9_a-z])(\.?(%[0-9a-f]{2}|[0-9_a-z]))*(:[1-9]\d{0,3}|\*)?)*\})*/iu,
    // 7.3.7. JSON Pointers
    "json-pointer": /^(\/([\x00-\x2e0-@\[-}\x7f]|~[01])*)*$/iu,
    "relative-json-pointer": /^\d+(#|(\/([\x00-\x2e0-@\[-}\x7f]|~[01])*)*)$/iu,
    // hostname regex from: http://stackoverflow.com/a/1420225/5628
    hostname: /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,
    "host-name": /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,
    "utc-millisec": function(S) {
      return typeof S == "string" && parseFloat(S) === parseInt(S, 10) && !isNaN(S);
    },
    // 7.3.8. regex
    regex: function(S) {
      var d = true;
      try {
        new RegExp(S);
      } catch {
        d = false;
      }
      return d;
    },
    // Other definitions
    // "style" was removed from JSON Schema in draft-4 and is deprecated
    style: /[\r\n\t ]*[^\r\n\t ][^:]*:[\r\n\t ]*[^\r\n\t ;]*[\r\n\t ]*;?/,
    // "color" was removed from JSON Schema in draft-4 and is deprecated
    color: /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/,
    phone: /^\+(?:[0-9] ?){6,14}[0-9]$/,
    alpha: /^[a-zA-Z]+$/,
    alphanumeric: /^[a-zA-Z0-9]+$/
  };
  l.regexp = l.regex, l.pattern = l.regex, l.ipv4 = l["ip-address"], gt.isFormat = function(d, b, h) {
    if (typeof d == "string" && l[b] !== void 0) {
      if (l[b] instanceof RegExp)
        return l[b].test(d);
      if (typeof l[b] == "function")
        return l[b](d);
    } else if (h && h.customFormats && typeof h.customFormats[b] == "function")
      return h.customFormats[b](d);
    return true;
  };
  var c = gt.makeSuffix = function(d) {
    return d = d.toString(), !d.match(/[.\s\[\]]/) && !d.match(/^[\d]/) ? "." + d : d.match(/^\d+$/) ? "[" + d + "]" : "[" + JSON.stringify(d) + "]";
  };
  gt.deepCompareStrict = function S(d, b) {
    if (typeof d != typeof b)
      return false;
    if (Array.isArray(d))
      return !Array.isArray(b) || d.length !== b.length ? false : d.every(function(_, R) {
        return S(d[R], b[R]);
      });
    if (typeof d == "object") {
      if (!d || !b)
        return d === b;
      var h = Object.keys(d), x = Object.keys(b);
      return h.length !== x.length ? false : h.every(function(_) {
        return S(d[_], b[_]);
      });
    }
    return d === b;
  };
  function f(S, d, b, h) {
    typeof b == "object" ? d[h] = v(S[h], b) : S.indexOf(b) === -1 && d.push(b);
  }
  function m(S, d, b) {
    d[b] = S[b];
  }
  function g(S, d, b, h) {
    typeof d[h] != "object" || !d[h] ? b[h] = d[h] : S[h] ? b[h] = v(S[h], d[h]) : b[h] = d[h];
  }
  function v(S, d) {
    var b = Array.isArray(d), h = b && [] || {};
    return b ? (S = S || [], h = h.concat(S), d.forEach(f.bind(null, S, h))) : (S && typeof S == "object" && Object.keys(S).forEach(m.bind(null, S, h)), Object.keys(d).forEach(g.bind(null, S, d, h))), h;
  }
  gt.deepMerge = v, gt.objectGetPath = function(d, b) {
    for (var h = b.split("/").slice(1), x; typeof (x = h.shift()) == "string"; ) {
      var _ = decodeURIComponent(x.replace(/~0/, "~").replace(/~1/g, "/"));
      if (!(_ in d)) return;
      d = d[_];
    }
    return d;
  };
  function p(S) {
    return "/" + encodeURIComponent(S).replace(/~/g, "%7E");
  }
  gt.encodePath = function(d) {
    return d.map(p).join("");
  }, gt.getDecimalPlaces = function(d) {
    var b = 0;
    if (isNaN(d)) return b;
    typeof d != "number" && (d = Number(d));
    var h = d.toString().split("e");
    if (h.length === 2) {
      if (h[1][0] !== "-")
        return b;
      b = Number(h[1].slice(1));
    }
    var x = h[0].split(".");
    return x.length === 2 && (b += x[1].length), b;
  }, gt.isSchema = function(d) {
    return typeof d == "object" && d || typeof d == "boolean";
  };
  var w = gt.resolveUrl = function(d, b) {
    const h = new URL(b, new URL(d, "resolve://"));
    if (h.protocol === "resolve:") {
      const { pathname: x, search: _, hash: R } = h;
      return x + _ + R;
    }
    return h.toString();
  };
  return gt;
}
var lc, kg;
function hI() {
  if (kg) return lc;
  kg = 1;
  var e3 = jn(), t = e3.ValidatorResult, r = e3.SchemaError, i = {};
  i.ignoreProperties = {
    // informative properties
    id: true,
    default: true,
    description: true,
    title: true,
    // arguments to other properties
    additionalItems: true,
    then: true,
    else: true,
    // special-handled properties
    $schema: true,
    $ref: true,
    extends: true
  };
  var a = i.validators = {};
  a.type = function(v, p, w, S) {
    if (v === void 0)
      return null;
    var d = new t(v, p, w, S), b = Array.isArray(p.type) ? p.type : [p.type];
    if (!b.some(this.testType.bind(this, v, p, w, S))) {
      var h = b.map(function(x) {
        if (x) {
          var _ = x.$id || x.id;
          return _ ? "<" + _ + ">" : x + "";
        }
      });
      d.addError({
        name: "type",
        argument: h,
        message: "is not of a type(s) " + h
      });
    }
    return d;
  };
  function s(g, v, p, w, S) {
    var d = v.throwError, b = v.throwAll;
    v.throwError = false, v.throwAll = false;
    var h = this.validateSchema(g, S, v, p);
    return v.throwError = d, v.throwAll = b, !h.valid && w instanceof Function && w(h), h.valid;
  }
  a.anyOf = function(v, p, w, S) {
    if (v === void 0)
      return null;
    var d = new t(v, p, w, S), b = new t(v, p, w, S);
    if (!Array.isArray(p.anyOf))
      throw new r("anyOf must be an array");
    if (!p.anyOf.some(
      s.bind(
        this,
        v,
        w,
        S,
        function(x) {
          b.importErrors(x);
        }
      )
    )) {
      var h = p.anyOf.map(function(x, _) {
        var R = x.$id || x.id;
        return R ? "<" + R + ">" : x.title && JSON.stringify(x.title) || x.$ref && "<" + x.$ref + ">" || "[subschema " + _ + "]";
      });
      w.nestedErrors && d.importErrors(b), d.addError({
        name: "anyOf",
        argument: h,
        message: "is not any of " + h.join(",")
      });
    }
    return d;
  }, a.allOf = function(v, p, w, S) {
    if (v === void 0)
      return null;
    if (!Array.isArray(p.allOf))
      throw new r("allOf must be an array");
    var d = new t(v, p, w, S), b = this;
    return p.allOf.forEach(function(h, x) {
      var _ = b.validateSchema(v, h, w, S);
      if (!_.valid) {
        var R = h.$id || h.id, O = R || h.title && JSON.stringify(h.title) || h.$ref && "<" + h.$ref + ">" || "[subschema " + x + "]";
        d.addError({
          name: "allOf",
          argument: { id: O, length: _.errors.length, valid: _ },
          message: "does not match allOf schema " + O + " with " + _.errors.length + " error[s]:"
        }), d.importErrors(_);
      }
    }), d;
  }, a.oneOf = function(v, p, w, S) {
    if (v === void 0)
      return null;
    if (!Array.isArray(p.oneOf))
      throw new r("oneOf must be an array");
    var d = new t(v, p, w, S), b = new t(v, p, w, S), h = p.oneOf.filter(
      s.bind(
        this,
        v,
        w,
        S,
        function(_) {
          b.importErrors(_);
        }
      )
    ).length, x = p.oneOf.map(function(_, R) {
      var O = _.$id || _.id;
      return O || _.title && JSON.stringify(_.title) || _.$ref && "<" + _.$ref + ">" || "[subschema " + R + "]";
    });
    return h !== 1 && (w.nestedErrors && d.importErrors(b), d.addError({
      name: "oneOf",
      argument: x,
      message: "is not exactly one from " + x.join(",")
    })), d;
  }, a.if = function(v, p, w, S) {
    if (v === void 0) return null;
    if (!e3.isSchema(p.if)) throw new Error('Expected "if" keyword to be a schema');
    var d = s.call(this, v, w, S, null, p.if), b = new t(v, p, w, S), h;
    if (d) {
      if (p.then === void 0) return;
      if (!e3.isSchema(p.then)) throw new Error('Expected "then" keyword to be a schema');
      h = this.validateSchema(v, p.then, w, S.makeChild(p.then)), b.importErrors(h);
    } else {
      if (p.else === void 0) return;
      if (!e3.isSchema(p.else)) throw new Error('Expected "else" keyword to be a schema');
      h = this.validateSchema(v, p.else, w, S.makeChild(p.else)), b.importErrors(h);
    }
    return b;
  };
  function l(g, v) {
    if (Object.hasOwnProperty.call(g, v)) return g[v];
    if (v in g) {
      for (; g = Object.getPrototypeOf(g); )
        if (Object.propertyIsEnumerable.call(g, v)) return g[v];
    }
  }
  a.propertyNames = function(v, p, w, S) {
    if (this.types.object(v)) {
      var d = new t(v, p, w, S), b = p.propertyNames !== void 0 ? p.propertyNames : {};
      if (!e3.isSchema(b)) throw new r('Expected "propertyNames" to be a schema (object or boolean)');
      for (var h in v)
        if (l(v, h) !== void 0) {
          var x = this.validateSchema(h, b, w, S.makeChild(b));
          d.importErrors(x);
        }
      return d;
    }
  }, a.properties = function(v, p, w, S) {
    if (this.types.object(v)) {
      var d = new t(v, p, w, S), b = p.properties || {};
      for (var h in b) {
        var x = b[h];
        if (x !== void 0) {
          if (x === null)
            throw new r('Unexpected null, expected schema in "properties"');
          typeof w.preValidateProperty == "function" && w.preValidateProperty(v, h, x, w, S);
          var _ = l(v, h), R = this.validateSchema(_, x, w, S.makeChild(x, h));
          R.instance !== d.instance[h] && (d.instance[h] = R.instance), d.importErrors(R);
        }
      }
      return d;
    }
  };
  function c(g, v, p, w, S, d) {
    if (this.types.object(g) && !(v.properties && v.properties[S] !== void 0))
      if (v.additionalProperties === false)
        d.addError({
          name: "additionalProperties",
          argument: S,
          message: "is not allowed to have the additional property " + JSON.stringify(S)
        });
      else {
        var b = v.additionalProperties || {};
        typeof p.preValidateProperty == "function" && p.preValidateProperty(g, S, b, p, w);
        var h = this.validateSchema(g[S], b, p, w.makeChild(b, S));
        h.instance !== d.instance[S] && (d.instance[S] = h.instance), d.importErrors(h);
      }
  }
  a.patternProperties = function(v, p, w, S) {
    if (this.types.object(v)) {
      var d = new t(v, p, w, S), b = p.patternProperties || {};
      for (var h in v) {
        var x = true;
        for (var _ in b) {
          var R = b[_];
          if (R !== void 0) {
            if (R === null)
              throw new r('Unexpected null, expected schema in "patternProperties"');
            try {
              var O = new RegExp(_, "u");
            } catch {
              O = new RegExp(_);
            }
            if (O.test(h)) {
              x = false, typeof w.preValidateProperty == "function" && w.preValidateProperty(v, h, R, w, S);
              var C = this.validateSchema(v[h], R, w, S.makeChild(R, h));
              C.instance !== d.instance[h] && (d.instance[h] = C.instance), d.importErrors(C);
            }
          }
        }
        x && c.call(this, v, p, w, S, h, d);
      }
      return d;
    }
  }, a.additionalProperties = function(v, p, w, S) {
    if (this.types.object(v)) {
      if (p.patternProperties)
        return null;
      var d = new t(v, p, w, S);
      for (var b in v)
        c.call(this, v, p, w, S, b, d);
      return d;
    }
  }, a.minProperties = function(v, p, w, S) {
    if (this.types.object(v)) {
      var d = new t(v, p, w, S), b = Object.keys(v);
      return b.length >= p.minProperties || d.addError({
        name: "minProperties",
        argument: p.minProperties,
        message: "does not meet minimum property length of " + p.minProperties
      }), d;
    }
  }, a.maxProperties = function(v, p, w, S) {
    if (this.types.object(v)) {
      var d = new t(v, p, w, S), b = Object.keys(v);
      return b.length <= p.maxProperties || d.addError({
        name: "maxProperties",
        argument: p.maxProperties,
        message: "does not meet maximum property length of " + p.maxProperties
      }), d;
    }
  }, a.items = function(v, p, w, S) {
    var d = this;
    if (this.types.array(v) && p.items !== void 0) {
      var b = new t(v, p, w, S);
      return v.every(function(h, x) {
        if (Array.isArray(p.items))
          var _ = p.items[x] === void 0 ? p.additionalItems : p.items[x];
        else
          var _ = p.items;
        if (_ === void 0)
          return true;
        if (_ === false)
          return b.addError({
            name: "items",
            message: "additionalItems not permitted"
          }), false;
        var R = d.validateSchema(h, _, w, S.makeChild(_, x));
        return R.instance !== b.instance[x] && (b.instance[x] = R.instance), b.importErrors(R), true;
      }), b;
    }
  }, a.contains = function(v, p, w, S) {
    var d = this;
    if (this.types.array(v) && p.contains !== void 0) {
      if (!e3.isSchema(p.contains)) throw new Error('Expected "contains" keyword to be a schema');
      var b = new t(v, p, w, S), h = v.some(function(x, _) {
        var R = d.validateSchema(x, p.contains, w, S.makeChild(p.contains, _));
        return R.errors.length === 0;
      });
      return h === false && b.addError({
        name: "contains",
        argument: p.contains,
        message: "must contain an item matching given schema"
      }), b;
    }
  }, a.minimum = function(v, p, w, S) {
    if (this.types.number(v)) {
      var d = new t(v, p, w, S);
      return p.exclusiveMinimum && p.exclusiveMinimum === true ? v > p.minimum || d.addError({
        name: "minimum",
        argument: p.minimum,
        message: "must be greater than " + p.minimum
      }) : v >= p.minimum || d.addError({
        name: "minimum",
        argument: p.minimum,
        message: "must be greater than or equal to " + p.minimum
      }), d;
    }
  }, a.maximum = function(v, p, w, S) {
    if (this.types.number(v)) {
      var d = new t(v, p, w, S);
      return p.exclusiveMaximum && p.exclusiveMaximum === true ? v < p.maximum || d.addError({
        name: "maximum",
        argument: p.maximum,
        message: "must be less than " + p.maximum
      }) : v <= p.maximum || d.addError({
        name: "maximum",
        argument: p.maximum,
        message: "must be less than or equal to " + p.maximum
      }), d;
    }
  }, a.exclusiveMinimum = function(v, p, w, S) {
    if (typeof p.exclusiveMinimum != "boolean" && this.types.number(v)) {
      var d = new t(v, p, w, S), b = v > p.exclusiveMinimum;
      return b || d.addError({
        name: "exclusiveMinimum",
        argument: p.exclusiveMinimum,
        message: "must be strictly greater than " + p.exclusiveMinimum
      }), d;
    }
  }, a.exclusiveMaximum = function(v, p, w, S) {
    if (typeof p.exclusiveMaximum != "boolean" && this.types.number(v)) {
      var d = new t(v, p, w, S), b = v < p.exclusiveMaximum;
      return b || d.addError({
        name: "exclusiveMaximum",
        argument: p.exclusiveMaximum,
        message: "must be strictly less than " + p.exclusiveMaximum
      }), d;
    }
  };
  var f = function(v, p, w, S, d, b) {
    if (this.types.number(v)) {
      var h = p[d];
      if (h == 0)
        throw new r(d + " cannot be zero");
      var x = new t(v, p, w, S), _ = e3.getDecimalPlaces(v), R = e3.getDecimalPlaces(h), O = Math.max(_, R), C = Math.pow(10, O);
      return Math.round(v * C) % Math.round(h * C) !== 0 && x.addError({
        name: d,
        argument: h,
        message: b + JSON.stringify(h)
      }), x;
    }
  };
  a.multipleOf = function(v, p, w, S) {
    return f.call(this, v, p, w, S, "multipleOf", "is not a multiple of (divisible by) ");
  }, a.divisibleBy = function(v, p, w, S) {
    return f.call(this, v, p, w, S, "divisibleBy", "is not divisible by (multiple of) ");
  }, a.required = function(v, p, w, S) {
    var d = new t(v, p, w, S);
    return v === void 0 && p.required === true ? d.addError({
      name: "required",
      message: "is required"
    }) : this.types.object(v) && Array.isArray(p.required) && p.required.forEach(function(b) {
      l(v, b) === void 0 && d.addError({
        name: "required",
        argument: b,
        message: "requires property " + JSON.stringify(b)
      });
    }), d;
  }, a.pattern = function(v, p, w, S) {
    if (this.types.string(v)) {
      var d = new t(v, p, w, S), b = p.pattern;
      try {
        var h = new RegExp(b, "u");
      } catch {
        h = new RegExp(b);
      }
      return v.match(h) || d.addError({
        name: "pattern",
        argument: p.pattern,
        message: "does not match pattern " + JSON.stringify(p.pattern.toString())
      }), d;
    }
  }, a.format = function(v, p, w, S) {
    if (v !== void 0) {
      var d = new t(v, p, w, S);
      return !d.disableFormat && !e3.isFormat(v, p.format, this) && d.addError({
        name: "format",
        argument: p.format,
        message: "does not conform to the " + JSON.stringify(p.format) + " format"
      }), d;
    }
  }, a.minLength = function(v, p, w, S) {
    if (this.types.string(v)) {
      var d = new t(v, p, w, S), b = v.match(/[\uDC00-\uDFFF]/g), h = v.length - (b ? b.length : 0);
      return h >= p.minLength || d.addError({
        name: "minLength",
        argument: p.minLength,
        message: "does not meet minimum length of " + p.minLength
      }), d;
    }
  }, a.maxLength = function(v, p, w, S) {
    if (this.types.string(v)) {
      var d = new t(v, p, w, S), b = v.match(/[\uDC00-\uDFFF]/g), h = v.length - (b ? b.length : 0);
      return h <= p.maxLength || d.addError({
        name: "maxLength",
        argument: p.maxLength,
        message: "does not meet maximum length of " + p.maxLength
      }), d;
    }
  }, a.minItems = function(v, p, w, S) {
    if (this.types.array(v)) {
      var d = new t(v, p, w, S);
      return v.length >= p.minItems || d.addError({
        name: "minItems",
        argument: p.minItems,
        message: "does not meet minimum length of " + p.minItems
      }), d;
    }
  }, a.maxItems = function(v, p, w, S) {
    if (this.types.array(v)) {
      var d = new t(v, p, w, S);
      return v.length <= p.maxItems || d.addError({
        name: "maxItems",
        argument: p.maxItems,
        message: "does not meet maximum length of " + p.maxItems
      }), d;
    }
  };
  function m(g, v, p) {
    var w, S = p.length;
    for (w = v + 1, S; w < S; w++)
      if (e3.deepCompareStrict(g, p[w]))
        return false;
    return true;
  }
  return a.uniqueItems = function(v, p, w, S) {
    if (p.uniqueItems === true && this.types.array(v)) {
      var d = new t(v, p, w, S);
      return v.every(m) || d.addError({
        name: "uniqueItems",
        message: "contains duplicate item"
      }), d;
    }
  }, a.dependencies = function(v, p, w, S) {
    if (this.types.object(v)) {
      var d = new t(v, p, w, S);
      for (var b in p.dependencies)
        if (v[b] !== void 0) {
          var h = p.dependencies[b], x = S.makeChild(h, b);
          if (typeof h == "string" && (h = [h]), Array.isArray(h))
            h.forEach(function(R) {
              v[R] === void 0 && d.addError({
                // FIXME there's two different "dependencies" errors here with slightly different outputs
                // Can we make these the same? Or should we create different error types?
                name: "dependencies",
                argument: x.propertyPath,
                message: "property " + R + " not found, required by " + x.propertyPath
              });
            });
          else {
            var _ = this.validateSchema(v, h, w, x);
            d.instance !== _.instance && (d.instance = _.instance), _ && _.errors.length && (d.addError({
              name: "dependencies",
              argument: x.propertyPath,
              message: "does not meet dependency required by " + x.propertyPath
            }), d.importErrors(_));
          }
        }
      return d;
    }
  }, a.enum = function(v, p, w, S) {
    if (v === void 0)
      return null;
    if (!Array.isArray(p.enum))
      throw new r("enum expects an array", p);
    var d = new t(v, p, w, S);
    return p.enum.some(e3.deepCompareStrict.bind(null, v)) || d.addError({
      name: "enum",
      argument: p.enum,
      message: "is not one of enum values: " + p.enum.map(String).join(",")
    }), d;
  }, a.const = function(v, p, w, S) {
    if (v === void 0)
      return null;
    var d = new t(v, p, w, S);
    return e3.deepCompareStrict(p.const, v) || d.addError({
      name: "const",
      argument: p.const,
      message: "does not exactly match expected constant: " + p.const
    }), d;
  }, a.not = a.disallow = function(v, p, w, S) {
    var d = this;
    if (v === void 0) return null;
    var b = new t(v, p, w, S), h = p.not || p.disallow;
    return h ? (Array.isArray(h) || (h = [h]), h.forEach(function(x) {
      if (d.testType(v, p, w, S, x)) {
        var _ = x && (x.$id || x.id), R = _ || x;
        b.addError({
          name: "not",
          argument: R,
          message: "is of prohibited type " + R
        });
      }
    }), b) : null;
  }, lc = i, lc;
}
var is = {}, Cg;
function Nc() {
  if (Cg) return is;
  Cg = 1;
  var e3 = jn();
  is.SchemaScanResult = t;
  function t(r, i) {
    this.id = r, this.ref = i;
  }
  return is.scan = function(i, a) {
    function s(g, v) {
      if (!v || typeof v != "object") return;
      if (v.$ref) {
        let d = e3.resolveUrl(g, v.$ref);
        m[d] = m[d] ? m[d] + 1 : 0;
        return;
      }
      var p = v.$id || v.id;
      let w = e3.resolveUrl(g, p);
      var S = p ? w : g;
      if (S) {
        if (S.indexOf("#") < 0 && (S += "#"), f[S]) {
          if (!e3.deepCompareStrict(f[S], v))
            throw new Error("Schema <" + S + "> already exists with different definition");
          return f[S];
        }
        f[S] = v, S[S.length - 1] == "#" && (f[S.substring(0, S.length - 1)] = v);
      }
      l(S + "/items", Array.isArray(v.items) ? v.items : [v.items]), l(S + "/extends", Array.isArray(v.extends) ? v.extends : [v.extends]), s(S + "/additionalItems", v.additionalItems), c(S + "/properties", v.properties), s(S + "/additionalProperties", v.additionalProperties), c(S + "/definitions", v.definitions), c(S + "/patternProperties", v.patternProperties), c(S + "/dependencies", v.dependencies), l(S + "/disallow", v.disallow), l(S + "/allOf", v.allOf), l(S + "/anyOf", v.anyOf), l(S + "/oneOf", v.oneOf), s(S + "/not", v.not);
    }
    function l(g, v) {
      if (Array.isArray(v))
        for (var p = 0; p < v.length; p++)
          s(g + "/" + p, v[p]);
    }
    function c(g, v) {
      if (!(!v || typeof v != "object"))
        for (var p in v)
          s(g + "/" + p, v[p]);
    }
    var f = {}, m = {};
    return s(i, a), new t(f, m);
  }, is;
}
var cc, $g;
function vI() {
  if ($g) return cc;
  $g = 1;
  var e3 = hI(), t = jn(), r = Nc().scan, i = t.ValidatorResult, a = t.ValidatorResultError, s = t.SchemaError, l = t.SchemaContext, c = "/", f = function v() {
    this.customFormats = Object.create(v.prototype.customFormats), this.schemas = {}, this.unresolvedRefs = [], this.types = Object.create(g), this.attributes = Object.create(e3.validators);
  };
  f.prototype.customFormats = {}, f.prototype.schemas = null, f.prototype.types = null, f.prototype.attributes = null, f.prototype.unresolvedRefs = null, f.prototype.addSchema = function(p, w) {
    var S = this;
    if (!p)
      return null;
    var d = r(w || c, p), b = w || p.$id || p.id;
    for (var h in d.id)
      this.schemas[h] = d.id[h];
    for (var h in d.ref)
      this.unresolvedRefs.push(h);
    return this.unresolvedRefs = this.unresolvedRefs.filter(function(x) {
      return typeof S.schemas[x] > "u";
    }), this.schemas[b];
  }, f.prototype.addSubSchemaArray = function(p, w) {
    if (Array.isArray(w))
      for (var S = 0; S < w.length; S++)
        this.addSubSchema(p, w[S]);
  }, f.prototype.addSubSchemaObject = function(p, w) {
    if (!(!w || typeof w != "object"))
      for (var S in w)
        this.addSubSchema(p, w[S]);
  }, f.prototype.setSchemas = function(p) {
    this.schemas = p;
  }, f.prototype.getSchema = function(p) {
    return this.schemas[p];
  }, f.prototype.validate = function(p, w, S, d) {
    if (typeof w != "boolean" && typeof w != "object" || w === null)
      throw new s("Expected `schema` to be an object or boolean");
    S || (S = {});
    var b = w.$id || w.id;
    let h = t.resolveUrl(S.base, b || "");
    if (!d) {
      d = new l(w, S, [], h, Object.create(this.schemas)), d.schemas[h] || (d.schemas[h] = w);
      var x = r(h, w);
      for (var _ in x.id) {
        var R = x.id[_];
        d.schemas[_] = R;
      }
    }
    if (S.required && p === void 0) {
      var O = new i(p, w, S, d);
      return O.addError("is required, but is undefined"), O;
    }
    var O = this.validateSchema(p, w, S, d);
    if (O) {
      if (S.throwAll && O.errors.length)
        throw new a(O);
    } else throw new Error("Result undefined");
    return O;
  };
  function m(v) {
    var p = typeof v == "string" ? v : v.$ref;
    return typeof p == "string" ? p : false;
  }
  f.prototype.validateSchema = function(p, w, S, d) {
    var b = new i(p, w, S, d);
    if (typeof w == "boolean")
      w === true ? w = {} : w === false && (w = { type: [] });
    else if (!w)
      throw new Error("schema is undefined");
    if (w.extends)
      if (Array.isArray(w.extends)) {
        var h = { schema: w, ctx: d };
        w.extends.forEach(this.schemaTraverser.bind(this, h)), w = h.schema, h.schema = null, h.ctx = null, h = null;
      } else
        w = t.deepMerge(w, this.superResolve(w.extends, d));
    var x = m(w);
    if (x) {
      var _ = this.resolve(w, x, d), R = new l(_.subschema, S, d.path, _.switchSchema, d.schemas);
      return this.validateSchema(p, _.subschema, S, R);
    }
    var O = S && S.skipAttributes || [];
    for (var C in w)
      if (!e3.ignoreProperties[C] && O.indexOf(C) < 0) {
        var W = null, M = this.attributes[C];
        if (M)
          W = M.call(this, p, w, S, d);
        else if (S.allowUnknownAttributes === false)
          throw new s("Unsupported attribute: " + C, w);
        W && b.importErrors(W);
      }
    if (typeof S.rewrite == "function") {
      var N = S.rewrite.call(this, p, w, S, d);
      b.instance = N;
    }
    return b;
  }, f.prototype.schemaTraverser = function(p, w) {
    p.schema = t.deepMerge(p.schema, this.superResolve(w, p.ctx));
  }, f.prototype.superResolve = function(p, w) {
    var S = m(p);
    return S ? this.resolve(p, S, w).subschema : p;
  }, f.prototype.resolve = function(p, w, S) {
    if (w = S.resolve(w), S.schemas[w])
      return { subschema: S.schemas[w], switchSchema: w };
    let b = new URL(w, "thismessage::/").hash;
    var h = b && b.length && w.substr(0, w.length - b.length);
    if (!h || !S.schemas[h])
      throw new s("no such schema <" + w + ">", p);
    var x = t.objectGetPath(S.schemas[h], b.substr(1));
    if (x === void 0)
      throw new s("no such schema " + b + " located in <" + h + ">", p);
    return { subschema: x, switchSchema: w };
  }, f.prototype.testType = function(p, w, S, d, b) {
    if (b !== void 0) {
      if (b === null)
        throw new s('Unexpected null in "type" keyword');
      if (typeof this.types[b] == "function")
        return this.types[b].call(this, p);
      if (b && typeof b == "object") {
        var h = this.validateSchema(p, b, S, d);
        return h === void 0 || !(h && h.errors.length);
      }
      return true;
    }
  };
  var g = f.prototype.types = {};
  return g.string = function(p) {
    return typeof p == "string";
  }, g.number = function(p) {
    return typeof p == "number" && isFinite(p);
  }, g.integer = function(p) {
    return typeof p == "number" && p % 1 === 0;
  }, g.boolean = function(p) {
    return typeof p == "boolean";
  }, g.array = function(p) {
    return Array.isArray(p);
  }, g.null = function(p) {
    return p === null;
  }, g.date = function(p) {
    return p instanceof Date;
  }, g.any = function(p) {
    return true;
  }, g.object = function(p) {
    return p && typeof p == "object" && !Array.isArray(p) && !(p instanceof Date);
  }, cc = f, cc;
}
var Ig;
function gI() {
  if (Ig) return Rr;
  Ig = 1;
  var e3 = Rr.Validator = vI();
  return Rr.ValidatorResult = jn().ValidatorResult, Rr.ValidatorResultError = jn().ValidatorResultError, Rr.ValidationError = jn().ValidationError, Rr.SchemaError = jn().SchemaError, Rr.SchemaScanResult = Nc().SchemaScanResult, Rr.scan = Nc().scan, Rr.validate = function(t, r, i) {
    var a = new e3();
    return a.validate(t, r, i);
  }, Rr;
}
var mI = gI();
const Hy = (e3, t, r) => {
  const i = e3 instanceof RegExp ? Lg(e3, r) : e3, a = t instanceof RegExp ? Lg(t, r) : t, s = i !== null && a != null && yI(i, a, r);
  return s && {
    start: s[0],
    end: s[1],
    pre: r.slice(0, s[0]),
    body: r.slice(s[0] + i.length, s[1]),
    post: r.slice(s[1] + a.length)
  };
}, Lg = (e3, t) => {
  const r = t.match(e3);
  return r ? r[0] : null;
}, yI = (e3, t, r) => {
  let i, a, s, l, c, f = r.indexOf(e3), m = r.indexOf(t, f + 1), g = f;
  if (f >= 0 && m > 0) {
    if (e3 === t)
      return [f, m];
    for (i = [], s = r.length; g >= 0 && !c; ) {
      if (g === f)
        i.push(g), f = r.indexOf(e3, g + 1);
      else if (i.length === 1) {
        const v = i.pop();
        v !== void 0 && (c = [v, m]);
      } else
        a = i.pop(), a !== void 0 && a < s && (s = a, l = m), m = r.indexOf(t, g + 1);
      g = f < m && f >= 0 ? f : m;
    }
    i.length && l !== void 0 && (c = [s, l]);
  }
  return c;
}, qy = "\0SLASH" + Math.random() + "\0", Zy = "\0OPEN" + Math.random() + "\0", Rf = "\0CLOSE" + Math.random() + "\0", Gy = "\0COMMA" + Math.random() + "\0", Ky = "\0PERIOD" + Math.random() + "\0", wI = new RegExp(qy, "g"), bI = new RegExp(Zy, "g"), SI = new RegExp(Rf, "g"), xI = new RegExp(Gy, "g"), _I = new RegExp(Ky, "g"), EI = /\\\\/g, OI = /\\{/g, AI = /\\}/g, TI = /\\,/g, RI = /\\./g;
function fc(e3) {
  return isNaN(e3) ? e3.charCodeAt(0) : parseInt(e3, 10);
}
function PI(e3) {
  return e3.replace(EI, qy).replace(OI, Zy).replace(AI, Rf).replace(TI, Gy).replace(RI, Ky);
}
function kI(e3) {
  return e3.replace(wI, "\\").replace(bI, "{").replace(SI, "}").replace(xI, ",").replace(_I, ".");
}
function Vy(e3) {
  if (!e3)
    return [""];
  const t = [], r = Hy("{", "}", e3);
  if (!r)
    return e3.split(",");
  const { pre: i, body: a, post: s } = r, l = i.split(",");
  l[l.length - 1] += "{" + a + "}";
  const c = Vy(s);
  return s.length && (l[l.length - 1] += c.shift(), l.push.apply(l, c)), t.push.apply(t, l), t;
}
function CI(e3) {
  return e3 ? (e3.slice(0, 2) === "{}" && (e3 = "\\{\\}" + e3.slice(2)), To(PI(e3), true).map(kI)) : [];
}
function $I(e3) {
  return "{" + e3 + "}";
}
function II(e3) {
  return /^-?0\d/.test(e3);
}
function LI(e3, t) {
  return e3 <= t;
}
function MI(e3, t) {
  return e3 >= t;
}
function To(e3, t) {
  const r = [], i = Hy("{", "}", e3);
  if (!i)
    return [e3];
  const a = i.pre, s = i.post.length ? To(i.post, false) : [""];
  if (/\$$/.test(i.pre))
    for (let l = 0; l < s.length; l++) {
      const c = a + "{" + i.body + "}" + s[l];
      r.push(c);
    }
  else {
    const l = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(i.body), c = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(i.body), f = l || c, m = i.body.indexOf(",") >= 0;
    if (!f && !m)
      return i.post.match(/,(?!,).*\}/) ? (e3 = i.pre + "{" + i.body + Rf + i.post, To(e3)) : [e3];
    let g;
    if (f)
      g = i.body.split(/\.\./);
    else if (g = Vy(i.body), g.length === 1 && g[0] !== void 0 && (g = To(g[0], false).map($I), g.length === 1))
      return s.map((p) => i.pre + g[0] + p);
    let v;
    if (f && g[0] !== void 0 && g[1] !== void 0) {
      const p = fc(g[0]), w = fc(g[1]), S = Math.max(g[0].length, g[1].length);
      let d = g.length === 3 && g[2] !== void 0 ? Math.abs(fc(g[2])) : 1, b = LI;
      w < p && (d *= -1, b = MI);
      const x = g.some(II);
      v = [];
      for (let _ = p; b(_, w); _ += d) {
        let R;
        if (c)
          R = String.fromCharCode(_), R === "\\" && (R = "");
        else if (R = String(_), x) {
          const O = S - R.length;
          if (O > 0) {
            const C = new Array(O + 1).join("0");
            _ < 0 ? R = "-" + C + R.slice(1) : R = C + R;
          }
        }
        v.push(R);
      }
    } else {
      v = [];
      for (let p = 0; p < g.length; p++)
        v.push.apply(v, To(g[p], false));
    }
    for (let p = 0; p < v.length; p++)
      for (let w = 0; w < s.length; w++) {
        const S = a + v[p] + s[w];
        (!t || f || S) && r.push(S);
      }
  }
  return r;
}
const NI = 1024 * 64, Ps = (e3) => {
  if (typeof e3 != "string")
    throw new TypeError("invalid pattern");
  if (e3.length > NI)
    throw new TypeError("pattern is too long");
}, FI = {
  "[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", true],
  "[:alpha:]": ["\\p{L}\\p{Nl}", true],
  "[:ascii:]": ["\\x00-\\x7f", false],
  "[:blank:]": ["\\p{Zs}\\t", true],
  "[:cntrl:]": ["\\p{Cc}", true],
  "[:digit:]": ["\\p{Nd}", true],
  "[:graph:]": ["\\p{Z}\\p{C}", true, true],
  "[:lower:]": ["\\p{Ll}", true],
  "[:print:]": ["\\p{C}", true],
  "[:punct:]": ["\\p{P}", true],
  "[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", true],
  "[:upper:]": ["\\p{Lu}", true],
  "[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", true],
  "[:xdigit:]": ["A-Fa-f0-9", false]
}, So = (e3) => e3.replace(/[[\]\\-]/g, "\\$&"), DI = (e3) => e3.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), Mg = (e3) => e3.join(""), zI = (e3, t) => {
  const r = t;
  if (e3.charAt(r) !== "[")
    throw new Error("not in a brace expression");
  const i = [], a = [];
  let s = r + 1, l = false, c = false, f = false, m = false, g = r, v = "";
  e: for (; s < e3.length; ) {
    const d = e3.charAt(s);
    if ((d === "!" || d === "^") && s === r + 1) {
      m = true, s++;
      continue;
    }
    if (d === "]" && l && !f) {
      g = s + 1;
      break;
    }
    if (l = true, d === "\\" && !f) {
      f = true, s++;
      continue;
    }
    if (d === "[" && !f) {
      for (const [b, [h, x, _]] of Object.entries(FI))
        if (e3.startsWith(b, s)) {
          if (v)
            return ["$.", false, e3.length - r, true];
          s += b.length, _ ? a.push(h) : i.push(h), c = c || x;
          continue e;
        }
    }
    if (f = false, v) {
      d > v ? i.push(So(v) + "-" + So(d)) : d === v && i.push(So(d)), v = "", s++;
      continue;
    }
    if (e3.startsWith("-]", s + 1)) {
      i.push(So(d + "-")), s += 2;
      continue;
    }
    if (e3.startsWith("-", s + 1)) {
      v = d, s += 2;
      continue;
    }
    i.push(So(d)), s++;
  }
  if (g < s)
    return ["", false, 0, false];
  if (!i.length && !a.length)
    return ["$.", false, e3.length - r, true];
  if (a.length === 0 && i.length === 1 && /^\\?.$/.test(i[0]) && !m) {
    const d = i[0].length === 2 ? i[0].slice(-1) : i[0];
    return [DI(d), false, g - r, false];
  }
  const p = "[" + (m ? "^" : "") + Mg(i) + "]", w = "[" + (m ? "" : "^") + Mg(a) + "]";
  return [i.length && a.length ? "(" + p + "|" + w + ")" : i.length ? p : w, c, g - r, true];
}, Ro = (e3, { windowsPathsNoEscape: t = false } = {}) => t ? e3.replace(/\[([^\/\\])\]/g, "$1") : e3.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1"), WI = /* @__PURE__ */ new Set(["!", "?", "+", "*", "@"]), Ng = (e3) => WI.has(e3), BI = "(?!(?:^|/)\\.\\.?(?:$|/))", os = "(?!\\.)", UI = /* @__PURE__ */ new Set(["[", "."]), jI = /* @__PURE__ */ new Set(["..", "."]), HI = new Set("().*{}+?[]^$\\!"), qI = (e3) => e3.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), Pf = "[^/]", Fg = Pf + "*?", Dg = Pf + "+?";
var lt, pt, Jr, Ze, at, wn, Hn, bn, kr, qn, Bo, Xn, Yy, xn, hs, Fc, Xy;
const kt = class kt2 {
  constructor(t, r, i = {}) {
    Et(this, Xn);
    ge(this, "type");
    Et(this, lt);
    Et(this, pt);
    Et(this, Jr, false);
    Et(this, Ze, []);
    Et(this, at);
    Et(this, wn);
    Et(this, Hn);
    Et(this, bn, false);
    Et(this, kr);
    Et(this, qn);
    Et(this, Bo, false);
    this.type = t, t && Qe(this, pt, true), Qe(this, at, r), Qe(this, lt, te(this, at) ? te(te(this, at), lt) : this), Qe(this, kr, te(this, lt) === this ? i : te(te(this, lt), kr)), Qe(this, Hn, te(this, lt) === this ? [] : te(te(this, lt), Hn)), t === "!" && !te(te(this, lt), bn) && te(this, Hn).push(this), Qe(this, wn, te(this, at) ? te(te(this, at), Ze).length : 0);
  }
  get hasMagic() {
    if (te(this, pt) !== void 0)
      return te(this, pt);
    for (const t of te(this, Ze))
      if (typeof t != "string" && (t.type || t.hasMagic))
        return Qe(this, pt, true);
    return te(this, pt);
  }
  // reconstructs the pattern
  toString() {
    return te(this, qn) !== void 0 ? te(this, qn) : this.type ? Qe(this, qn, this.type + "(" + te(this, Ze).map((t) => String(t)).join("|") + ")") : Qe(this, qn, te(this, Ze).map((t) => String(t)).join(""));
  }
  push(...t) {
    for (const r of t)
      if (r !== "") {
        if (typeof r != "string" && !(r instanceof kt2 && te(r, at) === this))
          throw new Error("invalid part: " + r);
        te(this, Ze).push(r);
      }
  }
  toJSON() {
    var r;
    const t = this.type === null ? te(this, Ze).slice().map((i) => typeof i == "string" ? i : i.toJSON()) : [this.type, ...te(this, Ze).map((i) => i.toJSON())];
    return this.isStart() && !this.type && t.unshift([]), this.isEnd() && (this === te(this, lt) || te(te(this, lt), bn) && ((r = te(this, at)) == null ? void 0 : r.type) === "!") && t.push({}), t;
  }
  isStart() {
    var r;
    if (te(this, lt) === this)
      return true;
    if (!((r = te(this, at)) != null && r.isStart()))
      return false;
    if (te(this, wn) === 0)
      return true;
    const t = te(this, at);
    for (let i = 0; i < te(this, wn); i++) {
      const a = te(t, Ze)[i];
      if (!(a instanceof kt2 && a.type === "!"))
        return false;
    }
    return true;
  }
  isEnd() {
    var r, i, a;
    if (te(this, lt) === this || ((r = te(this, at)) == null ? void 0 : r.type) === "!")
      return true;
    if (!((i = te(this, at)) != null && i.isEnd()))
      return false;
    if (!this.type)
      return (a = te(this, at)) == null ? void 0 : a.isEnd();
    const t = te(this, at) ? te(te(this, at), Ze).length : 0;
    return te(this, wn) === t - 1;
  }
  copyIn(t) {
    typeof t == "string" ? this.push(t) : this.push(t.clone(this));
  }
  clone(t) {
    const r = new kt2(this.type, t);
    for (const i of te(this, Ze))
      r.copyIn(i);
    return r;
  }
  static fromGlob(t, r = {}) {
    var a;
    const i = new kt2(null, void 0, r);
    return Ie(a = kt2, xn, hs).call(a, t, i, 0, r), i;
  }
  // returns the regular expression if there's magic, or the unescaped
  // string if not.
  toMMPattern() {
    if (this !== te(this, lt))
      return te(this, lt).toMMPattern();
    const t = this.toString(), [r, i, a, s] = this.toRegExpSource();
    if (!(a || te(this, pt) || te(this, kr).nocase && !te(this, kr).nocaseMagicOnly && t.toUpperCase() !== t.toLowerCase()))
      return i;
    const c = (te(this, kr).nocase ? "i" : "") + (s ? "u" : "");
    return Object.assign(new RegExp(`^${r}$`, c), {
      _src: r,
      _glob: t
    });
  }
  get options() {
    return te(this, kr);
  }
  // returns the string match, the regexp source, whether there's magic
  // in the regexp (so a regular expression is required) and whether or
  // not the uflag is needed for the regular expression (for posix classes)
  // TODO: instead of injecting the start/end at this point, just return
  // the BODY of the regexp, along with the start/end portions suitable
  // for binding the start/end in either a joined full-path makeRe context
  // (where we bind to (^|/), or a standalone matchPart context (where
  // we bind to ^, and not /).  Otherwise slashes get duped!
  //
  // In part-matching mode, the start is:
  // - if not isStart: nothing
  // - if traversal possible, but not allowed: ^(?!\.\.?$)
  // - if dots allowed or not possible: ^
  // - if dots possible and not allowed: ^(?!\.)
  // end is:
  // - if not isEnd(): nothing
  // - else: $
  //
  // In full-path matching mode, we put the slash at the START of the
  // pattern, so start is:
  // - if first pattern: same as part-matching mode
  // - if not isStart(): nothing
  // - if traversal possible, but not allowed: /(?!\.\.?(?:$|/))
  // - if dots allowed or not possible: /
  // - if dots possible and not allowed: /(?!\.)
  // end is:
  // - if last pattern, same as part-matching mode
  // - else nothing
  //
  // Always put the (?:$|/) on negated tails, though, because that has to be
  // there to bind the end of the negated pattern portion, and it's easier to
  // just stick it in now rather than try to inject it later in the middle of
  // the pattern.
  //
  // We can just always return the same end, and leave it up to the caller
  // to know whether it's going to be used joined or in parts.
  // And, if the start is adjusted slightly, can do the same there:
  // - if not isStart: nothing
  // - if traversal possible, but not allowed: (?:/|^)(?!\.\.?$)
  // - if dots allowed or not possible: (?:/|^)
  // - if dots possible and not allowed: (?:/|^)(?!\.)
  //
  // But it's better to have a simpler binding without a conditional, for
  // performance, so probably better to return both start options.
  //
  // Then the caller just ignores the end if it's not the first pattern,
  // and the start always gets applied.
  //
  // But that's always going to be $ if it's the ending pattern, or nothing,
  // so the caller can just attach $ at the end of the pattern when building.
  //
  // So the todo is:
  // - better detect what kind of start is needed
  // - return both flavors of starting pattern
  // - attach $ at the end of the pattern when creating the actual RegExp
  //
  // Ah, but wait, no, that all only applies to the root when the first pattern
  // is not an extglob. If the first pattern IS an extglob, then we need all
  // that dot prevention biz to live in the extglob portions, because eg
  // +(*|.x*) can match .xy but not .yx.
  //
  // So, return the two flavors if it's #root and the first child is not an
  // AST, otherwise leave it to the child AST to handle it, and there,
  // use the (?:^|/) style of start binding.
  //
  // Even simplified further:
  // - Since the start for a join is eg /(?!\.) and the start for a part
  // is ^(?!\.), we can just prepend (?!\.) to the pattern (either root
  // or start or whatever) and prepend ^ or / at the Regexp construction.
  toRegExpSource(t) {
    var f;
    const r = t ?? !!te(this, kr).dot;
    if (te(this, lt) === this && Ie(this, Xn, Yy).call(this), !this.type) {
      const m = this.isStart() && this.isEnd(), g = te(this, Ze).map((S) => {
        var _;
        const [d, b, h, x] = typeof S == "string" ? Ie(_ = kt2, xn, Xy).call(_, S, te(this, pt), m) : S.toRegExpSource(t);
        return Qe(this, pt, te(this, pt) || h), Qe(this, Jr, te(this, Jr) || x), d;
      }).join("");
      let v = "";
      if (this.isStart() && typeof te(this, Ze)[0] == "string" && !(te(this, Ze).length === 1 && jI.has(te(this, Ze)[0]))) {
        const d = UI, b = (
          // dots are allowed, and the pattern starts with [ or .
          r && d.has(g.charAt(0)) || // the pattern starts with \., and then [ or .
          g.startsWith("\\.") && d.has(g.charAt(2)) || // the pattern starts with \.\., and then [ or .
          g.startsWith("\\.\\.") && d.has(g.charAt(4))
        ), h = !r && !t && d.has(g.charAt(0));
        v = b ? BI : h ? os : "";
      }
      let p = "";
      return this.isEnd() && te(te(this, lt), bn) && ((f = te(this, at)) == null ? void 0 : f.type) === "!" && (p = "(?:$|\\/)"), [
        v + g + p,
        Ro(g),
        Qe(this, pt, !!te(this, pt)),
        te(this, Jr)
      ];
    }
    const i = this.type === "*" || this.type === "+", a = this.type === "!" ? "(?:(?!(?:" : "(?:";
    let s = Ie(this, Xn, Fc).call(this, r);
    if (this.isStart() && this.isEnd() && !s && this.type !== "!") {
      const m = this.toString();
      return Qe(this, Ze, [m]), this.type = null, Qe(this, pt, void 0), [m, Ro(this.toString()), false, false];
    }
    let l = !i || t || r || !os ? "" : Ie(this, Xn, Fc).call(this, true);
    l === s && (l = ""), l && (s = `(?:${s})(?:${l})*?`);
    let c = "";
    if (this.type === "!" && te(this, Bo))
      c = (this.isStart() && !r ? os : "") + Dg;
    else {
      const m = this.type === "!" ? (
        // !() must match something,but !(x) can match ''
        "))" + (this.isStart() && !r && !t ? os : "") + Fg + ")"
      ) : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && l ? ")" : this.type === "*" && l ? ")?" : `)${this.type}`;
      c = a + s + m;
    }
    return [
      c,
      Ro(s),
      Qe(this, pt, !!te(this, pt)),
      te(this, Jr)
    ];
  }
};
lt = /* @__PURE__ */ new WeakMap(), pt = /* @__PURE__ */ new WeakMap(), Jr = /* @__PURE__ */ new WeakMap(), Ze = /* @__PURE__ */ new WeakMap(), at = /* @__PURE__ */ new WeakMap(), wn = /* @__PURE__ */ new WeakMap(), Hn = /* @__PURE__ */ new WeakMap(), bn = /* @__PURE__ */ new WeakMap(), kr = /* @__PURE__ */ new WeakMap(), qn = /* @__PURE__ */ new WeakMap(), Bo = /* @__PURE__ */ new WeakMap(), Xn = /* @__PURE__ */ new WeakSet(), Yy = function() {
  if (this !== te(this, lt))
    throw new Error("should only call on root");
  if (te(this, bn))
    return this;
  this.toString(), Qe(this, bn, true);
  let t;
  for (; t = te(this, Hn).pop(); ) {
    if (t.type !== "!")
      continue;
    let r = t, i = te(r, at);
    for (; i; ) {
      for (let a = te(r, wn) + 1; !i.type && a < te(i, Ze).length; a++)
        for (const s of te(t, Ze)) {
          if (typeof s == "string")
            throw new Error("string part in extglob AST??");
          s.copyIn(te(i, Ze)[a]);
        }
      r = i, i = te(r, at);
    }
  }
  return this;
}, xn = /* @__PURE__ */ new WeakSet(), hs = function(t, r, i, a) {
  var w, S;
  let s = false, l = false, c = -1, f = false;
  if (r.type === null) {
    let d = i, b = "";
    for (; d < t.length; ) {
      const h = t.charAt(d++);
      if (s || h === "\\") {
        s = !s, b += h;
        continue;
      }
      if (l) {
        d === c + 1 ? (h === "^" || h === "!") && (f = true) : h === "]" && !(d === c + 2 && f) && (l = false), b += h;
        continue;
      } else if (h === "[") {
        l = true, c = d, f = false, b += h;
        continue;
      }
      if (!a.noext && Ng(h) && t.charAt(d) === "(") {
        r.push(b), b = "";
        const x = new kt(h, r);
        d = Ie(w = kt, xn, hs).call(w, t, x, d, a), r.push(x);
        continue;
      }
      b += h;
    }
    return r.push(b), d;
  }
  let m = i + 1, g = new kt(null, r);
  const v = [];
  let p = "";
  for (; m < t.length; ) {
    const d = t.charAt(m++);
    if (s || d === "\\") {
      s = !s, p += d;
      continue;
    }
    if (l) {
      m === c + 1 ? (d === "^" || d === "!") && (f = true) : d === "]" && !(m === c + 2 && f) && (l = false), p += d;
      continue;
    } else if (d === "[") {
      l = true, c = m, f = false, p += d;
      continue;
    }
    if (Ng(d) && t.charAt(m) === "(") {
      g.push(p), p = "";
      const b = new kt(d, g);
      g.push(b), m = Ie(S = kt, xn, hs).call(S, t, b, m, a);
      continue;
    }
    if (d === "|") {
      g.push(p), p = "", v.push(g), g = new kt(null, r);
      continue;
    }
    if (d === ")")
      return p === "" && te(r, Ze).length === 0 && Qe(r, Bo, true), g.push(p), p = "", r.push(...v, g), m;
    p += d;
  }
  return r.type = null, Qe(r, pt, void 0), Qe(r, Ze, [t.substring(i - 1)]), m;
}, Fc = function(t) {
  return te(this, Ze).map((r) => {
    if (typeof r == "string")
      throw new Error("string type in extglob ast??");
    const [i, a, s, l] = r.toRegExpSource(t);
    return Qe(this, Jr, te(this, Jr) || l), i;
  }).filter((r) => !(this.isStart() && this.isEnd()) || !!r).join("|");
}, Xy = function(t, r, i = false) {
  let a = false, s = "", l = false;
  for (let c = 0; c < t.length; c++) {
    const f = t.charAt(c);
    if (a) {
      a = false, s += (HI.has(f) ? "\\" : "") + f;
      continue;
    }
    if (f === "\\") {
      c === t.length - 1 ? s += "\\\\" : a = true;
      continue;
    }
    if (f === "[") {
      const [m, g, v, p] = zI(t, c);
      if (v) {
        s += m, l = l || g, c += v - 1, r = r || p;
        continue;
      }
    }
    if (f === "*") {
      i && t === "*" ? s += Dg : s += Fg, r = true;
      continue;
    }
    if (f === "?") {
      s += Pf, r = true;
      continue;
    }
    s += qI(f);
  }
  return [s, Ro(t), !!r, l];
}, Et(kt, xn);
let ks = kt;
const ZI = (e3, { windowsPathsNoEscape: t = false } = {}) => t ? e3.replace(/[?*()[\]]/g, "[$&]") : e3.replace(/[?*()[\]\\]/g, "\\$&"), At = (e3, t, r = {}) => (Ps(t), !r.nocomment && t.charAt(0) === "#" ? false : new Ks(t, r).match(e3)), GI = /^\*+([^+@!?\*\[\(]*)$/, KI = (e3) => (t) => !t.startsWith(".") && t.endsWith(e3), VI = (e3) => (t) => t.endsWith(e3), YI = (e3) => (e3 = e3.toLowerCase(), (t) => !t.startsWith(".") && t.toLowerCase().endsWith(e3)), XI = (e3) => (e3 = e3.toLowerCase(), (t) => t.toLowerCase().endsWith(e3)), JI = /^\*+\.\*+$/, QI = (e3) => !e3.startsWith(".") && e3.includes("."), e2 = (e3) => e3 !== "." && e3 !== ".." && e3.includes("."), t2 = /^\.\*+$/, r2 = (e3) => e3 !== "." && e3 !== ".." && e3.startsWith("."), n2 = /^\*+$/, i2 = (e3) => e3.length !== 0 && !e3.startsWith("."), o2 = (e3) => e3.length !== 0 && e3 !== "." && e3 !== "..", a2 = /^\?+([^+@!?\*\[\(]*)?$/, s2 = ([e3, t = ""]) => {
  const r = Jy([e3]);
  return t ? (t = t.toLowerCase(), (i) => r(i) && i.toLowerCase().endsWith(t)) : r;
}, u2 = ([e3, t = ""]) => {
  const r = Qy([e3]);
  return t ? (t = t.toLowerCase(), (i) => r(i) && i.toLowerCase().endsWith(t)) : r;
}, l2 = ([e3, t = ""]) => {
  const r = Qy([e3]);
  return t ? (i) => r(i) && i.endsWith(t) : r;
}, c2 = ([e3, t = ""]) => {
  const r = Jy([e3]);
  return t ? (i) => r(i) && i.endsWith(t) : r;
}, Jy = ([e3]) => {
  const t = e3.length;
  return (r) => r.length === t && !r.startsWith(".");
}, Qy = ([e3]) => {
  const t = e3.length;
  return (r) => r.length === t && r !== "." && r !== "..";
}, e0 = typeof process == "object" && process ? typeof define_process_env_default == "object" && define_process_env_default && define_process_env_default.__MINIMATCH_TESTING_PLATFORM__ || process.platform : "posix", zg = {
  win32: { sep: "\\" },
  posix: { sep: "/" }
}, f2 = e0 === "win32" ? zg.win32.sep : zg.posix.sep;
At.sep = f2;
const ur = Symbol("globstar **");
At.GLOBSTAR = ur;
const d2 = "[^/]", p2 = d2 + "*?", h2 = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?", v2 = "(?:(?!(?:\\/|^)\\.).)*?", g2 = (e3, t = {}) => (r) => At(r, e3, t);
At.filter = g2;
const sr = (e3, t = {}) => Object.assign({}, e3, t), m2 = (e3) => {
  if (!e3 || typeof e3 != "object" || !Object.keys(e3).length)
    return At;
  const t = At;
  return Object.assign((i, a, s = {}) => t(i, a, sr(e3, s)), {
    Minimatch: class extends t.Minimatch {
      constructor(a, s = {}) {
        super(a, sr(e3, s));
      }
      static defaults(a) {
        return t.defaults(sr(e3, a)).Minimatch;
      }
    },
    AST: class extends t.AST {
      /* c8 ignore start */
      constructor(a, s, l = {}) {
        super(a, s, sr(e3, l));
      }
      /* c8 ignore stop */
      static fromGlob(a, s = {}) {
        return t.AST.fromGlob(a, sr(e3, s));
      }
    },
    unescape: (i, a = {}) => t.unescape(i, sr(e3, a)),
    escape: (i, a = {}) => t.escape(i, sr(e3, a)),
    filter: (i, a = {}) => t.filter(i, sr(e3, a)),
    defaults: (i) => t.defaults(sr(e3, i)),
    makeRe: (i, a = {}) => t.makeRe(i, sr(e3, a)),
    braceExpand: (i, a = {}) => t.braceExpand(i, sr(e3, a)),
    match: (i, a, s = {}) => t.match(i, a, sr(e3, s)),
    sep: t.sep,
    GLOBSTAR: ur
  });
};
At.defaults = m2;
const t0 = (e3, t = {}) => (Ps(e3), t.nobrace || !/\{(?:(?!\{).)*\}/.test(e3) ? [e3] : CI(e3));
At.braceExpand = t0;
const y2 = (e3, t = {}) => new Ks(e3, t).makeRe();
At.makeRe = y2;
const w2 = (e3, t, r = {}) => {
  const i = new Ks(t, r);
  return e3 = e3.filter((a) => i.match(a)), i.options.nonull && !e3.length && e3.push(t), e3;
};
At.match = w2;
const Wg = /[?*]|[+@!]\(.*?\)|\[|\]/, b2 = (e3) => e3.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
class Ks {
  constructor(t, r = {}) {
    ge(this, "options");
    ge(this, "set");
    ge(this, "pattern");
    ge(this, "windowsPathsNoEscape");
    ge(this, "nonegate");
    ge(this, "negate");
    ge(this, "comment");
    ge(this, "empty");
    ge(this, "preserveMultipleSlashes");
    ge(this, "partial");
    ge(this, "globSet");
    ge(this, "globParts");
    ge(this, "nocase");
    ge(this, "isWindows");
    ge(this, "platform");
    ge(this, "windowsNoMagicRoot");
    ge(this, "regexp");
    Ps(t), r = r || {}, this.options = r, this.pattern = t, this.platform = r.platform || e0, this.isWindows = this.platform === "win32", this.windowsPathsNoEscape = !!r.windowsPathsNoEscape || r.allowWindowsEscape === false, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")), this.preserveMultipleSlashes = !!r.preserveMultipleSlashes, this.regexp = null, this.negate = false, this.nonegate = !!r.nonegate, this.comment = false, this.empty = false, this.partial = !!r.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot = r.windowsNoMagicRoot !== void 0 ? r.windowsNoMagicRoot : !!(this.isWindows && this.nocase), this.globSet = [], this.globParts = [], this.set = [], this.make();
  }
  hasMagic() {
    if (this.options.magicalBraces && this.set.length > 1)
      return true;
    for (const t of this.set)
      for (const r of t)
        if (typeof r != "string")
          return true;
    return false;
  }
  debug(...t) {
  }
  make() {
    const t = this.pattern, r = this.options;
    if (!r.nocomment && t.charAt(0) === "#") {
      this.comment = true;
      return;
    }
    if (!t) {
      this.empty = true;
      return;
    }
    this.parseNegate(), this.globSet = [...new Set(this.braceExpand())], r.debug && (this.debug = (...s) => console.error(...s)), this.debug(this.pattern, this.globSet);
    const i = this.globSet.map((s) => this.slashSplit(s));
    this.globParts = this.preprocess(i), this.debug(this.pattern, this.globParts);
    let a = this.globParts.map((s, l, c) => {
      if (this.isWindows && this.windowsNoMagicRoot) {
        const f = s[0] === "" && s[1] === "" && (s[2] === "?" || !Wg.test(s[2])) && !Wg.test(s[3]), m = /^[a-z]:/i.test(s[0]);
        if (f)
          return [...s.slice(0, 4), ...s.slice(4).map((g) => this.parse(g))];
        if (m)
          return [s[0], ...s.slice(1).map((g) => this.parse(g))];
      }
      return s.map((f) => this.parse(f));
    });
    if (this.debug(this.pattern, a), this.set = a.filter((s) => s.indexOf(false) === -1), this.isWindows)
      for (let s = 0; s < this.set.length; s++) {
        const l = this.set[s];
        l[0] === "" && l[1] === "" && this.globParts[s][2] === "?" && typeof l[3] == "string" && /^[a-z]:$/i.test(l[3]) && (l[2] = "?");
      }
    this.debug(this.pattern, this.set);
  }
  // various transforms to equivalent pattern sets that are
  // faster to process in a filesystem walk.  The goal is to
  // eliminate what we can, and push all ** patterns as far
  // to the right as possible, even if it increases the number
  // of patterns that we have to process.
  preprocess(t) {
    if (this.options.noglobstar)
      for (let i = 0; i < t.length; i++)
        for (let a = 0; a < t[i].length; a++)
          t[i][a] === "**" && (t[i][a] = "*");
    const { optimizationLevel: r = 1 } = this.options;
    return r >= 2 ? (t = this.firstPhasePreProcess(t), t = this.secondPhasePreProcess(t)) : r >= 1 ? t = this.levelOneOptimize(t) : t = this.adjascentGlobstarOptimize(t), t;
  }
  // just get rid of adjascent ** portions
  adjascentGlobstarOptimize(t) {
    return t.map((r) => {
      let i = -1;
      for (; (i = r.indexOf("**", i + 1)) !== -1; ) {
        let a = i;
        for (; r[a + 1] === "**"; )
          a++;
        a !== i && r.splice(i, a - i);
      }
      return r;
    });
  }
  // get rid of adjascent ** and resolve .. portions
  levelOneOptimize(t) {
    return t.map((r) => (r = r.reduce((i, a) => {
      const s = i[i.length - 1];
      return a === "**" && s === "**" ? i : a === ".." && s && s !== ".." && s !== "." && s !== "**" ? (i.pop(), i) : (i.push(a), i);
    }, []), r.length === 0 ? [""] : r));
  }
  levelTwoFileOptimize(t) {
    Array.isArray(t) || (t = this.slashSplit(t));
    let r = false;
    do {
      if (r = false, !this.preserveMultipleSlashes) {
        for (let a = 1; a < t.length - 1; a++) {
          const s = t[a];
          a === 1 && s === "" && t[0] === "" || (s === "." || s === "") && (r = true, t.splice(a, 1), a--);
        }
        t[0] === "." && t.length === 2 && (t[1] === "." || t[1] === "") && (r = true, t.pop());
      }
      let i = 0;
      for (; (i = t.indexOf("..", i + 1)) !== -1; ) {
        const a = t[i - 1];
        a && a !== "." && a !== ".." && a !== "**" && (r = true, t.splice(i - 1, 2), i -= 2);
      }
    } while (r);
    return t.length === 0 ? [""] : t;
  }
  // First phase: single-pattern processing
  // <pre> is 1 or more portions
  // <rest> is 1 or more portions
  // <p> is any portion other than ., .., '', or **
  // <e> is . or ''
  //
  // **/.. is *brutal* for filesystem walking performance, because
  // it effectively resets the recursive walk each time it occurs,
  // and ** cannot be reduced out by a .. pattern part like a regexp
  // or most strings (other than .., ., and '') can be.
  //
  // <pre>/**/../<p>/<p>/<rest> -> {<pre>/../<p>/<p>/<rest>,<pre>/**/<p>/<p>/<rest>}
  // <pre>/<e>/<rest> -> <pre>/<rest>
  // <pre>/<p>/../<rest> -> <pre>/<rest>
  // **/**/<rest> -> **/<rest>
  //
  // **/*/<rest> -> */**/<rest> <== not valid because ** doesn't follow
  // this WOULD be allowed if ** did follow symlinks, or * didn't
  firstPhasePreProcess(t) {
    let r = false;
    do {
      r = false;
      for (let i of t) {
        let a = -1;
        for (; (a = i.indexOf("**", a + 1)) !== -1; ) {
          let l = a;
          for (; i[l + 1] === "**"; )
            l++;
          l > a && i.splice(a + 1, l - a);
          let c = i[a + 1];
          const f = i[a + 2], m = i[a + 3];
          if (c !== ".." || !f || f === "." || f === ".." || !m || m === "." || m === "..")
            continue;
          r = true, i.splice(a, 1);
          const g = i.slice(0);
          g[a] = "**", t.push(g), a--;
        }
        if (!this.preserveMultipleSlashes) {
          for (let l = 1; l < i.length - 1; l++) {
            const c = i[l];
            l === 1 && c === "" && i[0] === "" || (c === "." || c === "") && (r = true, i.splice(l, 1), l--);
          }
          i[0] === "." && i.length === 2 && (i[1] === "." || i[1] === "") && (r = true, i.pop());
        }
        let s = 0;
        for (; (s = i.indexOf("..", s + 1)) !== -1; ) {
          const l = i[s - 1];
          if (l && l !== "." && l !== ".." && l !== "**") {
            r = true;
            const f = s === 1 && i[s + 1] === "**" ? ["."] : [];
            i.splice(s - 1, 2, ...f), i.length === 0 && i.push(""), s -= 2;
          }
        }
      }
    } while (r);
    return t;
  }
  // second phase: multi-pattern dedupes
  // {<pre>/*/<rest>,<pre>/<p>/<rest>} -> <pre>/*/<rest>
  // {<pre>/<rest>,<pre>/<rest>} -> <pre>/<rest>
  // {<pre>/**/<rest>,<pre>/<rest>} -> <pre>/**/<rest>
  //
  // {<pre>/**/<rest>,<pre>/**/<p>/<rest>} -> <pre>/**/<rest>
  // ^-- not valid because ** doens't follow symlinks
  secondPhasePreProcess(t) {
    for (let r = 0; r < t.length - 1; r++)
      for (let i = r + 1; i < t.length; i++) {
        const a = this.partsMatch(t[r], t[i], !this.preserveMultipleSlashes);
        if (a) {
          t[r] = [], t[i] = a;
          break;
        }
      }
    return t.filter((r) => r.length);
  }
  partsMatch(t, r, i = false) {
    let a = 0, s = 0, l = [], c = "";
    for (; a < t.length && s < r.length; )
      if (t[a] === r[s])
        l.push(c === "b" ? r[s] : t[a]), a++, s++;
      else if (i && t[a] === "**" && r[s] === t[a + 1])
        l.push(t[a]), a++;
      else if (i && r[s] === "**" && t[a] === r[s + 1])
        l.push(r[s]), s++;
      else if (t[a] === "*" && r[s] && (this.options.dot || !r[s].startsWith(".")) && r[s] !== "**") {
        if (c === "b")
          return false;
        c = "a", l.push(t[a]), a++, s++;
      } else if (r[s] === "*" && t[a] && (this.options.dot || !t[a].startsWith(".")) && t[a] !== "**") {
        if (c === "a")
          return false;
        c = "b", l.push(r[s]), a++, s++;
      } else
        return false;
    return t.length === r.length && l;
  }
  parseNegate() {
    if (this.nonegate)
      return;
    const t = this.pattern;
    let r = false, i = 0;
    for (let a = 0; a < t.length && t.charAt(a) === "!"; a++)
      r = !r, i++;
    i && (this.pattern = t.slice(i)), this.negate = r;
  }
  // set partial to true to test if, for example,
  // "/a/b" matches the start of "/*/b/*/d"
  // Partial means, if you run out of file before you run
  // out of pattern, then that's fine, as long as all
  // the parts match.
  matchOne(t, r, i = false) {
    const a = this.options;
    if (this.isWindows) {
      const d = typeof t[0] == "string" && /^[a-z]:$/i.test(t[0]), b = !d && t[0] === "" && t[1] === "" && t[2] === "?" && /^[a-z]:$/i.test(t[3]), h = typeof r[0] == "string" && /^[a-z]:$/i.test(r[0]), x = !h && r[0] === "" && r[1] === "" && r[2] === "?" && typeof r[3] == "string" && /^[a-z]:$/i.test(r[3]), _ = b ? 3 : d ? 0 : void 0, R = x ? 3 : h ? 0 : void 0;
      if (typeof _ == "number" && typeof R == "number") {
        const [O, C] = [t[_], r[R]];
        O.toLowerCase() === C.toLowerCase() && (r[R] = O, R > _ ? r = r.slice(R) : _ > R && (t = t.slice(_)));
      }
    }
    const { optimizationLevel: s = 1 } = this.options;
    s >= 2 && (t = this.levelTwoFileOptimize(t)), this.debug("matchOne", this, { file: t, pattern: r }), this.debug("matchOne", t.length, r.length);
    for (var l = 0, c = 0, f = t.length, m = r.length; l < f && c < m; l++, c++) {
      this.debug("matchOne loop");
      var g = r[c], v = t[l];
      if (this.debug(r, g, v), g === false)
        return false;
      if (g === ur) {
        this.debug("GLOBSTAR", [r, g, v]);
        var p = l, w = c + 1;
        if (w === m) {
          for (this.debug("** at the end"); l < f; l++)
            if (t[l] === "." || t[l] === ".." || !a.dot && t[l].charAt(0) === ".")
              return false;
          return true;
        }
        for (; p < f; ) {
          var S = t[p];
          if (this.debug(`
globstar while`, t, p, r, w, S), this.matchOne(t.slice(p), r.slice(w), i))
            return this.debug("globstar found match!", p, f, S), true;
          if (S === "." || S === ".." || !a.dot && S.charAt(0) === ".") {
            this.debug("dot detected!", t, p, r, w);
            break;
          }
          this.debug("globstar swallow a segment, and continue"), p++;
        }
        return !!(i && (this.debug(`
>>> no match, partial?`, t, p, r, w), p === f));
      }
      let d;
      if (typeof g == "string" ? (d = v === g, this.debug("string match", g, v, d)) : (d = g.test(v), this.debug("pattern match", g, v, d)), !d)
        return false;
    }
    if (l === f && c === m)
      return true;
    if (l === f)
      return i;
    if (c === m)
      return l === f - 1 && t[l] === "";
    throw new Error("wtf?");
  }
  braceExpand() {
    return t0(this.pattern, this.options);
  }
  parse(t) {
    Ps(t);
    const r = this.options;
    if (t === "**")
      return ur;
    if (t === "")
      return "";
    let i, a = null;
    (i = t.match(n2)) ? a = r.dot ? o2 : i2 : (i = t.match(GI)) ? a = (r.nocase ? r.dot ? XI : YI : r.dot ? VI : KI)(i[1]) : (i = t.match(a2)) ? a = (r.nocase ? r.dot ? u2 : s2 : r.dot ? l2 : c2)(i) : (i = t.match(JI)) ? a = r.dot ? e2 : QI : (i = t.match(t2)) && (a = r2);
    const s = ks.fromGlob(t, this.options).toMMPattern();
    return a && typeof s == "object" && Reflect.defineProperty(s, "test", { value: a }), s;
  }
  makeRe() {
    if (this.regexp || this.regexp === false)
      return this.regexp;
    const t = this.set;
    if (!t.length)
      return this.regexp = false, this.regexp;
    const r = this.options, i = r.noglobstar ? p2 : r.dot ? h2 : v2, a = new Set(r.nocase ? ["i"] : []);
    let s = t.map((f) => {
      const m = f.map((g) => {
        if (g instanceof RegExp)
          for (const v of g.flags.split(""))
            a.add(v);
        return typeof g == "string" ? b2(g) : g === ur ? ur : g._src;
      });
      return m.forEach((g, v) => {
        const p = m[v + 1], w = m[v - 1];
        g !== ur || w === ur || (w === void 0 ? p !== void 0 && p !== ur ? m[v + 1] = "(?:\\/|" + i + "\\/)?" + p : m[v] = i : p === void 0 ? m[v - 1] = w + "(?:\\/|" + i + ")?" : p !== ur && (m[v - 1] = w + "(?:\\/|\\/" + i + "\\/)" + p, m[v + 1] = ur));
      }), m.filter((g) => g !== ur).join("/");
    }).join("|");
    const [l, c] = t.length > 1 ? ["(?:", ")"] : ["", ""];
    s = "^" + l + s + c + "$", this.negate && (s = "^(?!" + s + ").+$");
    try {
      this.regexp = new RegExp(s, [...a].join(""));
    } catch {
      this.regexp = false;
    }
    return this.regexp;
  }
  slashSplit(t) {
    return this.preserveMultipleSlashes ? t.split("/") : this.isWindows && /^\/\/[^\/]+/.test(t) ? ["", ...t.split(/\/+/)] : t.split(/\/+/);
  }
  match(t, r = this.partial) {
    if (this.debug("match", t, this.pattern), this.comment)
      return false;
    if (this.empty)
      return t === "";
    if (t === "/" && r)
      return true;
    const i = this.options;
    this.isWindows && (t = t.split("\\").join("/"));
    const a = this.slashSplit(t);
    this.debug(this.pattern, "split", a);
    const s = this.set;
    this.debug(this.pattern, "set", s);
    let l = a[a.length - 1];
    if (!l)
      for (let c = a.length - 2; !l && c >= 0; c--)
        l = a[c];
    for (let c = 0; c < s.length; c++) {
      const f = s[c];
      let m = a;
      if (i.matchBase && f.length === 1 && (m = [l]), this.matchOne(m, f, r))
        return i.flipNegate ? true : !this.negate;
    }
    return i.flipNegate ? false : this.negate;
  }
  static defaults(t) {
    return At.defaults(t).Minimatch;
  }
}
At.AST = ks;
At.Minimatch = Ks;
At.escape = ZI;
At.unescape = Ro;
const Cs = "/$shared", S2 = {
  "**/saved_conditions.json": {
    parser: "json",
    content: {
      conditions: []
    },
    schema: {
      type: "object",
      properties: {
        conditions: {
          type: "array",
          items: {
            type: "object"
          }
        }
      },
      required: ["conditions"]
    }
  },
  "**/shared_datasources.json": {
    parser: "json",
    content: {},
    schema: {
      type: "object",
      additionalProperties: true,
      patternProperties: {
        "^.*$": {
          type: "array"
        }
      }
    }
  },
  "**/shared_css.json": {
    parser: "json",
    content: {
      classes: []
    },
    schema: {
      type: "object",
      properties: {
        classes: {
          type: "array",
          items: {
            type: "object"
          }
        }
      },
      required: ["classes"]
    }
  },
  "**/shared_app_events.json": {
    parser: "json",
    content: []
  },
  "**/CustomComponents/manifest.json": {
    parser: "json",
    content: [],
    schema: {
      type: "array",
      items: {
        type: "object"
      }
    }
  },
  "**/crafted_components.json": {
    parser: "json",
    content: [],
    schema: { type: "array" }
  },
  "**/HTTPHandlers.json": {
    parser: "json",
    content: [],
    schema: { type: "array" }
  },
  "**/i18n.json": {
    parser: "json",
    content: {
      keys: {},
      userLang: {
        primary: "",
        supported: []
      }
    },
    schema: {
      type: "object",
      properties: {
        keys: {
          type: "object"
        },
        userLang: {
          type: "object",
          properties: {
            primary: { type: "string" },
            supported: {
              type: "array",
              items: { type: "string" }
            }
          },
          required: ["primary", "supported"]
        }
      },
      required: ["keys", "userLang"]
    }
  },
  "**/*.json": {
    parser: "json",
    content: {}
  }
};
function r0(e3) {
  const t = Object.entries(S2).find(
    ([r]) => At(e3, r)
  );
  return t == null ? void 0 : t[1];
}
function kf(e3) {
  var i;
  const t = (i = r0(e3)) == null ? void 0 : i.content;
  if (!t) return;
  const r = e3.replace(`${Cs}/`, "Shared/");
  i0({
    name: r,
    content: t,
    asText: typeof t == "string"
  });
}
async function sM() {
  const e3 = [
    "CustomComponents/manifest.json",
    "shared_app_events.json",
    "shared_css.json",
    "saved_conditions.json",
    "i18n.json"
  ];
  for (const t of e3)
    try {
      await Fe(`${Cs}/${t}?t=${Date.now()}`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json"
        })
      });
    } catch (r) {
      n0(r) && kf(`${Cs}/${t}`);
    }
}
function Vs({
  path: e3,
  createIfNotExists: t = false
}) {
  const r = `${Cs}/${e3}`;
  return Fe(`${r}?t=${Date.now()}`, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }).then((i) => {
    const a = r0(e3);
    let s = i;
    if (!a) return s;
    if (typeof s == "string")
      try {
        switch (a.parser) {
          case "json":
            s = JSON.parse(s);
            break;
          default:
            break;
        }
      } catch {
        throw new Error("Cannot parse");
      }
    if (a.schema && !new mI.Validator().validate(s, a.schema).valid)
      throw new Error("Invalid Schema");
    return s;
  }).catch((i) => {
    if (n0(i) && t) {
      const a = x2(i, e3);
      Z$.next({
        message: a,
        kind: "warning"
      }), kf(r);
    }
    throw i;
  });
}
function n0(e3) {
  var t;
  return ((t = e3 == null ? void 0 : e3.response) == null ? void 0 : t.status) === 404 || (e3 == null ? void 0 : e3.message) === "Invalid Schema" || (e3 == null ? void 0 : e3.message) === "Cannot parse" || (e3 == null ? void 0 : e3.name) === "SyntaxError";
}
function x2(e3, t) {
  var r;
  switch (true) {
    case ((e3 == null ? void 0 : e3.message) === "Cannot parse " || (e3 == null ? void 0 : e3.name) === "SyntaxError"):
      return `Cannot parse file '${t}', resetting...`;
    case (e3 == null ? void 0 : e3.message) === "Invalid Schema":
      return `File '${t}' is corrupt, resetting...`;
    case ((r = e3 == null ? void 0 : e3.response) == null ? void 0 : r.status) === 404:
      return `File '${t}' not found, creating...`;
    default:
      return e3 == null ? void 0 : e3.message;
  }
}
function uM(e3) {
  return Fe(Gs, {
    method: "POST",
    body: JSON.stringify(e3),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
function lM(e3) {
  return Fe(Gs, {
    method: "POST",
    body: JSON.stringify(e3),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
const _2 = () => {
  const { host: e3, protocol: t } = window.location, r = t === "https:";
  return {
    projectOpened: false,
    remoteDebuggerMode: Wy.DISABLED,
    baseUrl: "",
    qodly: true,
    urls: {
      renderer: "/$lib/renderer/",
      debugger: `ws${r ? "s" : ""}://${e3}/remoteDebugger`,
      lsp: `ws${r ? "s" : ""}://${e3}/LSP`
    },
    isRestActive: true
  };
};
async function cM() {
  const { hostname: e3, host: t, protocol: r } = window.location, i = r === "https:";
  try {
    const a = await Fe(ct, {
      method: "POST",
      body: JSON.stringify({
        verb: ti.GET_APP_SETTINGS
      }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }), s = (() => {
      if (a.rendererPath)
        return a.rendererPath;
      const l = `http://${e3}:${a.webServerHTTPPort}`, c = `https://${e3}:${a.webServerHTTPSPort}`;
      return a.webServerHTTPPort && a.webServerHTTPSPort ? i ? c : l : a.webServerHTTPPort ? l : c;
    })();
    return {
      projectOpened: a.webServerHTTPSPort > 0 || a.webServerHTTPPort > 0,
      remoteDebuggerMode: a.remoteDebuggerMode,
      baseUrl: s,
      qodly: typeof a.qodly > "u" ? true : a.qodly,
      urls: {
        renderer: a.rendererPath || `${s}/$lib/renderer/`,
        debugger: `ws${i ? "s" : ""}://${t}/remoteDebugger`,
        lsp: `ws${i ? "s" : ""}://${t}/LSP`
      },
      isRestActive: a.isRESTActive
    };
  } catch (a) {
    return console.error(a), _2();
  }
}
async function E2(e3) {
  return await Fe(ct, {
    method: "POST",
    body: JSON.stringify(e3),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
async function fM(...e3) {
  return (await Promise.all(
    e3.map(
      (i) => E2({
        root: i,
        verb: ti.GET_FOLDER
      })
    )
  )).map(
    ({ children: i }) => i.map(({ name: a, date: s, type: l }) => ({
      name: a,
      type: l,
      date: s,
      path: `${l}/${a}`
    }))
  ).flat();
}
function dM(e3, t = {}) {
  const { sanitize: r = true } = t;
  return Fe(`/rest/$getWebForm/${e3}`, {
    method: "GET"
  }).then((i) => {
    if (!(i != null && i.components) || !r)
      return i;
    const a = /* @__PURE__ */ new Map();
    return {
      ...i,
      // generate a unique id for webform loaders (fixes qs#397)
      // since the same webform loader might be used inside another webform loader
      components: it.entries(i.components).map(([s, l]) => {
        const c = s, { resolvedName: f } = l.type;
        if (f === "WebformLoader") {
          const m = Yc.generate();
          a.set(s, m), s = m;
        }
        return [s, l, c];
      }).reduce((s, [l, c, f]) => {
        var m;
        return c.nodes && (c.nodes = c.nodes.map((g) => a.get(g) || g)), c.linkedNodes && (c.linkedNodes = it.entries(c.linkedNodes).reduce(
          (g, [v, p]) => ({
            ...g,
            [v]: a.get(p) || p
          }),
          {}
        )), (m = c.props) != null && m.events && (c.props.events = c.props.events.map(
          (g) => (g.type === "navigation" && g.loader && (g.loader = a.get(g.loader) || g.loader), g)
        )), {
          ...s,
          [l]: {
            ...c,
            props: {
              ...c.props,
              __originalID: f
            }
          }
        };
      }, {})
    };
  });
}
function pM(e3) {
  return Fe(ct, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify(e3)
  }).then((t) => ({
    ...t,
    content: [mt.METHOD, mt.CLASS].includes(
      t.type
    ) ? Tf(t.content) : t.content
  }));
}
function hM(e3) {
  return e3.type === "folder" ? Fe(Gs, {
    method: "POST",
    body: JSON.stringify(e3),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }) : Fe(ct, {
    method: "POST",
    body: JSON.stringify(e3),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
async function vM(e3) {
  return e3.type === "folder" ? (await Fe(Gs, {
    method: "POST",
    body: JSON.stringify(e3),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })).deleted : (await Fe(ct, {
    method: "POST",
    body: JSON.stringify(e3),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })).deleted;
}
function gM(e3) {
  return Fe(ct, {
    method: "POST",
    body: JSON.stringify(e3),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
function mM(e3) {
  return Fe(ct, {
    method: "POST",
    body: JSON.stringify(e3),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
async function yM(e3) {
  return (await Fe(ct, {
    method: "POST",
    body: JSON.stringify(e3),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })).deleted;
}
async function wM(...e3) {
  return await Fe(ct, {
    method: "POST",
    body: JSON.stringify({
      verb: ti.GET_FILES_INFO,
      files: e3
    }),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
async function bM(e3) {
  const t = await Fe("/api/login", {
    method: "POST",
    body: JSON.stringify({
      accessKey: e3
    }),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
  return t.isLogged && t.success;
}
async function SM() {
  return await Fe(
    "/rest/$catalog/$all?$metadata=full",
    {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }
  );
}
async function xM(e3) {
  try {
    const t = false ? "/i18n/languages.json" : `/$lib/${e3 ? "studio" : "renderer"}/i18n/languages.json`, i = await (await fetch(t)).text(), { supported: a } = JSON.parse(i);
    return a;
  } catch {
    return [];
  }
}
async function _M({
  name: e3,
  path: t = "",
  root: r = "root",
  asText: i = false
}) {
  return Fe(ct, {
    method: "POST",
    body: JSON.stringify({
      verb: "getFileContent",
      root: r,
      path: t,
      name: e3,
      asText: i
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  });
}
async function EM(e3 = {}) {
  try {
    return await Vs({
      path: "shared_datasources.json",
      ...e3
    });
  } catch {
    return {};
  }
}
async function OM(e3 = {}) {
  try {
    return await Vs({
      path: "shared_app_events.json",
      ...e3
    });
  } catch {
    return [];
  }
}
async function AM(e3 = {}) {
  try {
    return await Vs({
      path: "shared_css.json",
      ...e3
    });
  } catch {
    return { classes: [] };
  }
}
async function TM(e3 = {}) {
  try {
    return await Vs({
      path: "saved_conditions.json",
      ...e3
    });
  } catch {
    return { conditions: [] };
  }
}
async function RM() {
  try {
    return await Fe(
      "/rest/$info/privileges",
      {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json"
        })
      }
    );
  } catch {
    return { privileges: [] };
  }
}
async function PM() {
  try {
    return await (await fetch(`monaco_theme.json?t=${Date.now()}`)).json();
  } catch {
    return null;
  }
}
const O2 = Uy(), kM = async (e3) => {
  const t = {
    verb: ti.SET_FILE_CONTENT,
    asText: false,
    name: "shared_datasources.json",
    path: "",
    root: "shared",
    content: e3
  };
  return O2(async () => (await Fe(ct, {
    method: "POST",
    body: JSON.stringify(t),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }), e3));
}, A2 = Uy(), CM = async (e3) => {
  const t = {
    verb: ti.SET_FILE_CONTENT,
    asText: false,
    name: "shared_app_events.json",
    path: "",
    root: "shared",
    content: e3
  };
  return A2(async () => (await Fe(ct, {
    method: "POST",
    body: JSON.stringify(t),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }), e3));
}, i0 = async (e3) => {
  const t = await Fe(ct, {
    method: "POST",
    body: JSON.stringify({
      ...e3,
      verb: ti.SET_FILE_CONTENT,
      root: zy.ROOT
    }),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }), r = By(
    `${e3.path || "Sources"}/${e3.name}`
  );
  return {
    ...t,
    type: r,
    size: 0
  };
}, $M = async (e3) => await i0({
  name: "crafted_components.json",
  path: Un.WEBFORMS,
  content: e3
});
function IM(e3) {
  return Fe(ct, {
    method: "POST",
    body: JSON.stringify(e3),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
function LM(e3) {
  return Fe(ct, {
    method: "POST",
    body: JSON.stringify(e3),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
function MM(e3) {
  return Fe(ct, {
    method: "POST",
    body: JSON.stringify(e3),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
function NM(e3) {
  return Fe(ct, {
    method: "POST",
    body: JSON.stringify(e3),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }).then((t) => Array.isArray(t) ? t : {
    ...t,
    content: ["4dm", "4qm", "4qs"].includes(t.ext) ? Tf(t.content) : t.content
  }).catch((t) => {
    var r, i;
    throw ((i = (r = t.data) == null ? void 0 : r.__ERROR[0]) == null ? void 0 : i.errCode) === 1839 && kf(e3.path), t;
  });
}
function FM(e3) {
  return Fe(ct, {
    method: "POST",
    body: JSON.stringify(e3),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
function T2(e3) {
  const t = new RegExp(/^\((.+)(?=\))/gi).exec(e3);
  return t !== null ? t[1] : "";
}
function R2(e3) {
  const t = new RegExp(/(->)(.*)/gi).exec(e3);
  if (t !== null)
    return t[0].replace("->", "");
  const r = /:([^)]*)$/.exec(e3);
  return r !== null ? `result : ${r[1].trim()}` : "";
}
function P2(e3) {
  const t = T2(e3).split(/[;,]/g).filter(Boolean).map((a) => {
    const s = a.split(":")[0].trim(), l = a.split(":")[1].trim();
    return {
      name: s,
      type: l
    };
  }), r = R2(e3), i = r ? {
    name: r.split(":")[0].trim(),
    type: r.split(":")[1].trim()
  } : {
    name: "result",
    type: "Variable"
  };
  return {
    params: t,
    result: i
  };
}
async function DM(e3, t) {
  const i = e3.split(".").pop();
  try {
    const a = await Fe(ct, {
      method: "POST",
      body: JSON.stringify({
        verb: "getFunctionContent",
        className: t,
        functionName: i
      }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    a.content = Tf(a.content);
    const { params: s, result: l } = P2(a.parameters);
    return {
      ...a,
      params: s,
      returns: l
    };
  } catch (a) {
    return console.error(a), {
      className: t,
      functionName: i,
      filePath: e3,
      content: "",
      params: []
    };
  }
}
var k2 = /* @__PURE__ */ ((e3) => (e3.STUDIO_LOADED = "UA-1-0", e3.WELCOME_TOUR_INIT = "UA-1-3", e3.WELCOME_TOUR_END = "UA-1-4", e3))(k2 || {});
function zM(e3, t) {
  fetch("/api/v1/activity", {
    body: JSON.stringify({
      AID: e3,
      ...t
    }),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  }).catch((r) => {
  });
}
function WM(e3) {
  window.pagesense = window.pagesense || [], window.pagesense.push(["trackEvent", e3]);
}
var C2 = /* @__PURE__ */ ((e3) => (e3.LOCAL = "local", e3.SHARED = "shared", e3.THEME = "theme", e3))(C2 || {}), $2 = /* @__PURE__ */ ((e3) => (e3[e3.METHOD = 1] = "METHOD", e3[e3.CLASS = 10] = "CLASS", e3))($2 || {}), I2 = /* @__PURE__ */ ((e3) => (e3.WelCome = "WelCome", e3.ActionPanel = "ActionPanel", e3.SideBar = "SideBar", e3.Settings = "Settings", e3.Main = "Main", e3.Explorer = "Explorer", e3.Header = "Header", e3.ComponentList = "ComponentList", e3))(I2 || {}), L2 = /* @__PURE__ */ ((e3) => (e3[e3.FILE_NOT_FOUND = 1839] = "FILE_NOT_FOUND", e3[e3.JSON_MALFORMED = 554] = "JSON_MALFORMED", e3[e3.JSON_MALFORMED_AT_LINE = 550] = "JSON_MALFORMED_AT_LINE", e3))(L2 || {});
const BM = {
  transparent: {
    backgroundColor: "transparent"
  },
  black: {
    backgroundColor: "#4a4a4a",
    color: "white",
    padding: "3px 5px",
    borderRadius: 5
  },
  grey: {
    backgroundColor: "#e8e8e8",
    color: "#262626",
    padding: "3px 5px",
    borderRadius: 5
  }
}, UM = {
  Code: {
    key: "editors:code",
    config: { language: "4d", theme: "fd-dark" }
  },
  WebForm: {
    key: "editors:webforms"
  }
};

export { ct as API_PREFIX, Q2 as AppLoader, i$ as BaseCheckboxIcon, oL as Checkbox, Uk as ControlledSwitch, BM as DATASOURCE_THEMES, q$ as DatasourcesActions, V$ as DebuggerActions, o$ as DefaultCheckboxIcon, ti as DesignerRequestVerb, U2 as Dialog, gA as DialogBody, k2 as EActivity, UM as EDITOR, I2 as EIDENTIFIERS, L2 as ERROR_CODES, C2 as EWebFormStyleClassScope, Gs as EXT_API_PREFIX, mt as FileFolderType, nL as FloatingTooltip, Un as FolderRootPath, zy as FolderRootType, Rg as HTTPError, eI as HTTP_HANDLERS_TAB_PATH, Rs as IPreemptive, cI as IPublished, jy as IPublishedRestScope, pL as IdentityProvider, $l as Incase, DT as IndentLines, tI as LOCALIZATION_TAB_PATH, FC as LogoSVG, K$ as LspActions, Fy as MAX_FILE_NAME_LENGTH, TL as MODEL_TAB_PATH, eL as Modal, Eo as ModalCloseReason, Ei as ModalColor, fg as ModalIcons, Sy as ModalType, rI as Mutex, Dy as NameError, vA as Overlay, Ql as PANEL_EXPANDED_HEIGHT, bi as PANEL_INITIAL_HEIGHT, iL as Panel, iO as Portal, QL as PublishOptions, J$ as ROLES_TAB_PATH, Wy as RemoteDebuggerMode, Q$ as SETTINGS_TAB_PATH, Cs as SHARED_API_PREFIX, $2 as SourceCodeDescriptor, zT as Switcher, G$ as TabEventsActions, ZP as Tip, Z2 as TipsProvider, j2 as Toast, J2 as Tooltip, H2 as Tree, _T as TreeIcon, hm as TreeNode, H$ as WebformActions, Ts as WebformEventsActions, tL as ZoomComponent, jC as ZoomLevel, KL as _isArrayDatasource, VL as _isObjectDatasource, tM as addAttributesToContent, gM as addFolder, nI as by, IL as byId, LL as byPath, iM as callServerSideParser, uM as checkUpdates, IM as createFolder, yL as datasourcesSubject, xL as debuggerSubject, vM as dropFile, yM as dropFolder, ML as exists, kL as extractWebformName, rM as generateUUID, cM as getAppSettings, SM as getCatalog, NL as getDatasourceId, _2 as getDefaultAppSettings, pM as getFile, _M as getFileContent, PL as getFileExtentionFromType, RL as getFilenameAndTypeFromPath, wM as getFilesInfo, E2 as getFolder, fM as getFolders, DM as getFunctionContent, PM as getMonacoTheme, NM as getNodeInfo, TM as getSavedConditions, OM as getSharedAppEvents, AM as getSharedCSS, EM as getSharedDatasources, Vs as getSharedResource, xM as getSupportedLanguages, By as getTypeFromExtension, RM as getUserPrivileges, dM as getWebForm, dI as hasAttributesString, Fe as http, EL as i18nSubject, sM as initializeDefaultProjectFiles, lM as installUpdates, sI as isArrayDatasource, WL as isDataClassMethod, zL as isDataStoreMethod, YL as isDateDatasource, ZL as isEntity, jL as isEntityDatasource, BL as isEntityMethod, GL as isEntitySelection, HL as isEntitySelectionDatasource, UL as isEntitySelectionMethod, FL as isObjectAttribute, uI as isObjectDatasource, DL as isRelatedAttribute, oI as isRelatedEntitiesAttribute, aI as isRelatedEntityAttribute, lI as isScalarDatasource, iI as isSimpleAttribute, qL as isSimpleDatasource, XL as loadDS, JL as loadI18n, zM as log, bM as login, SL as lspSubject, MM as moveItem, CL as outBy, $L as outById, eM as parseAttributes, Uy as queue, pI as removeAttributesString, LM as removeItem, hM as renameFile, mM as renameFolder, Tf as sanitizeContent, FM as saveContent, $M as setCraftedComponents, i0 as setFileContent, CM as setSharedAppEvents, kM as setSharedSources, fI as stringifyAttributes, bL as tabEventsSubject, _L as tasksManagerSubject, Z$ as toastSubject, WM as trackEvent, nM as transformDates, kf as tryCreateSharedResource, aL as useDidMountEffect, gL as useDoubleClick, mL as useEnhancedState, dL as useFeatureFlags, fL as useForwardedRef, sL as useHotkeys, hL as useIdentity, uL as useOutsideClick, lL as usePrevious, vL as useStateObject, cL as useStateRef, HP as useTip, Y$ as validateName, OL as validateServerSide, AL as validateValue, Mc as webformEventsSubject, wL as webformSubject };
