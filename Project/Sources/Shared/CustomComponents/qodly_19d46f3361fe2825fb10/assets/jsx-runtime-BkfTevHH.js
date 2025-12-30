import { g as getDefaultExportFromCjs } from './_commonjsHelpers-BFTU3MAI.js';
import './index-DoMkaUYr.js';
import { q as qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__ } from './qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__-3DhkBDxl.js';

function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== 'string' && !Array.isArray(e)) { for (const k in e) {
      if (k !== 'default' && !(k in n)) {
        const d = Object.getOwnPropertyDescriptor(e, k);
        if (d) {
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    } }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }));
}

var jsxRuntime$1 = {exports: {}};

var reactJsxRuntime_production_min = {};

/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__,g=60103;reactJsxRuntime_production_min.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");reactJsxRuntime_production_min.Fragment=h("react.fragment");}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:true,ref:true,__self:true,__source:true};
function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a) void 0===d[b]&&(d[b]=a[b]);return {$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

{
  jsxRuntime$1.exports = reactJsxRuntime_production_min;
}

var jsxRuntimeExports = jsxRuntime$1.exports;
const jsxRuntime_default = /*@__PURE__*/getDefaultExportFromCjs(jsxRuntimeExports);

const jsxRuntime = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  default: jsxRuntime_default
}, [jsxRuntimeExports]);

export { jsxRuntime as j };
