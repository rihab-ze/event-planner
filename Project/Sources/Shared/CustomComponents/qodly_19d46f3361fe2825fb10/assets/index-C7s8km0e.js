import { g as getDefaultExportFromCjs } from './_commonjsHelpers-BFTU3MAI.js';
import { w as _MapCache, m as _Symbol, e as eq_1, l as _Uint8Array, u as _getAllKeys, o as _getTag, r as isBufferExports, t as _Stack, x as isTypedArray_1, v as isArray_1, n as isObjectLike_1 } from './_getTag-CIEMAker.js';
import { R as React, q as qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__ } from './qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__-3DhkBDxl.js';
import { i as invariant } from './tiny-invariant-w-EUxzzv.js';
import { R as ReactDOM } from './qodly_19d46f3361fe2825fb10__loadShare__react_mf_2_dom__loadShare__-BImKXKQ2.js';
import './qodly_19d46f3361fe2825fb10__mf_v__runtimeInit__mf_v__-BHz-fcBO.js';

function n(n2) {
  for (var r2 = arguments.length, t2 = Array(r2 > 1 ? r2 - 1 : 0), e2 = 1; e2 < r2; e2++) t2[e2 - 1] = arguments[e2];
  throw Error("[Immer] minified error nr: " + n2 + (t2.length ? " " + t2.map((function(n3) {
    return "'" + n3 + "'";
  })).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function r(n2) {
  return !!n2 && !!n2[Q$1];
}
function t(n2) {
  var r2;
  return !!n2 && ((function(n3) {
    if (!n3 || "object" != typeof n3) return false;
    var r3 = Object.getPrototypeOf(n3);
    if (null === r3) return true;
    var t2 = Object.hasOwnProperty.call(r3, "constructor") && r3.constructor;
    return t2 === Object || "function" == typeof t2 && Function.toString.call(t2) === Z$1;
  })(n2) || Array.isArray(n2) || !!n2[L$1] || !!(null === (r2 = n2.constructor) || void 0 === r2 ? void 0 : r2[L$1]) || s$1(n2) || v$1(n2));
}
function i(n2, r2, t2) {
  void 0 === t2 && (t2 = false), 0 === o(n2) ? (t2 ? Object.keys : nn)(n2).forEach((function(e2) {
    t2 && "symbol" == typeof e2 || r2(e2, n2[e2], n2);
  })) : n2.forEach((function(t3, e2) {
    return r2(e2, t3, n2);
  }));
}
function o(n2) {
  var r2 = n2[Q$1];
  return r2 ? r2.i > 3 ? r2.i - 4 : r2.i : Array.isArray(n2) ? 1 : s$1(n2) ? 2 : v$1(n2) ? 3 : 0;
}
function u(n2, r2) {
  return 2 === o(n2) ? n2.has(r2) : Object.prototype.hasOwnProperty.call(n2, r2);
}
function a(n2, r2) {
  return 2 === o(n2) ? n2.get(r2) : n2[r2];
}
function f(n2, r2, t2) {
  var e2 = o(n2);
  2 === e2 ? n2.set(r2, t2) : 3 === e2 ? n2.add(t2) : n2[r2] = t2;
}
function c(n2, r2) {
  return n2 === r2 ? 0 !== n2 || 1 / n2 == 1 / r2 : n2 != n2 && r2 != r2;
}
function s$1(n2) {
  return X$1 && n2 instanceof Map;
}
function v$1(n2) {
  return q$1 && n2 instanceof Set;
}
function p$1(n2) {
  return n2.o || n2.t;
}
function l(n2) {
  if (Array.isArray(n2)) return Array.prototype.slice.call(n2);
  var r2 = rn(n2);
  delete r2[Q$1];
  for (var t2 = nn(r2), e2 = 0; e2 < t2.length; e2++) {
    var i2 = t2[e2], o2 = r2[i2];
    false === o2.writable && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (r2[i2] = { configurable: true, writable: true, enumerable: o2.enumerable, value: n2[i2] });
  }
  return Object.create(Object.getPrototypeOf(n2), r2);
}
function d(n2, e2) {
  return void 0 === e2 && (e2 = false), y$1(n2) || r(n2) || !t(n2) || (o(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h), Object.freeze(n2), e2 && i(n2, (function(n3, r2) {
    return d(r2, true);
  }), true)), n2;
}
function h() {
  n(2);
}
function y$1(n2) {
  return null == n2 || "object" != typeof n2 || Object.isFrozen(n2);
}
function b(r2) {
  var t2 = tn[r2];
  return t2 || n(18, r2), t2;
}
function m(n2, r2) {
  tn[n2] || (tn[n2] = r2);
}
function _$1() {
  return U$1;
}
function j$1(n2, r2) {
  r2 && (b("Patches"), n2.u = [], n2.s = [], n2.v = r2);
}
function g(n2) {
  O$1(n2), n2.p.forEach(S$1), n2.p = null;
}
function O$1(n2) {
  n2 === U$1 && (U$1 = n2.l);
}
function w$1(n2) {
  return U$1 = { p: [], l: U$1, h: n2, m: true, _: 0 };
}
function S$1(n2) {
  var r2 = n2[Q$1];
  0 === r2.i || 1 === r2.i ? r2.j() : r2.g = true;
}
function P$1(r2, e2) {
  e2._ = e2.p.length;
  var i2 = e2.p[0], o2 = void 0 !== r2 && r2 !== i2;
  return e2.h.O || b("ES5").S(e2, r2, o2), o2 ? (i2[Q$1].P && (g(e2), n(4)), t(r2) && (r2 = M$1(e2, r2), e2.l || x$1(e2, r2)), e2.u && b("Patches").M(i2[Q$1].t, r2, e2.u, e2.s)) : r2 = M$1(e2, i2, []), g(e2), e2.u && e2.v(e2.u, e2.s), r2 !== H$1 ? r2 : void 0;
}
function M$1(n2, r2, t2) {
  if (y$1(r2)) return r2;
  var e2 = r2[Q$1];
  if (!e2) return i(r2, (function(i2, o3) {
    return A$1(n2, e2, r2, i2, o3, t2);
  }), true), r2;
  if (e2.A !== n2) return r2;
  if (!e2.P) return x$1(n2, e2.t, true), e2.t;
  if (!e2.I) {
    e2.I = true, e2.A._--;
    var o2 = 4 === e2.i || 5 === e2.i ? e2.o = l(e2.k) : e2.o, u2 = o2, a2 = false;
    3 === e2.i && (u2 = new Set(o2), o2.clear(), a2 = true), i(u2, (function(r3, i2) {
      return A$1(n2, e2, o2, r3, i2, t2, a2);
    })), x$1(n2, o2, false), t2 && n2.u && b("Patches").N(e2, t2, n2.u, n2.s);
  }
  return e2.o;
}
function A$1(e2, i2, o2, a2, c2, s2, v2) {
  if (r(c2)) {
    var p2 = M$1(e2, c2, s2 && i2 && 3 !== i2.i && !u(i2.R, a2) ? s2.concat(a2) : void 0);
    if (f(o2, a2, p2), !r(p2)) return;
    e2.m = false;
  } else v2 && o2.add(c2);
  if (t(c2) && !y$1(c2)) {
    if (!e2.h.D && e2._ < 1) return;
    M$1(e2, c2), i2 && i2.A.l || x$1(e2, c2);
  }
}
function x$1(n2, r2, t2) {
  void 0 === t2 && (t2 = false), !n2.l && n2.h.D && n2.m && d(r2, t2);
}
function z$1(n2, r2) {
  var t2 = n2[Q$1];
  return (t2 ? p$1(t2) : n2)[r2];
}
function I$1(n2, r2) {
  if (r2 in n2) for (var t2 = Object.getPrototypeOf(n2); t2; ) {
    var e2 = Object.getOwnPropertyDescriptor(t2, r2);
    if (e2) return e2;
    t2 = Object.getPrototypeOf(t2);
  }
}
function k$1(n2) {
  n2.P || (n2.P = true, n2.l && k$1(n2.l));
}
function E$1(n2) {
  n2.o || (n2.o = l(n2.t));
}
function N$1(n2, r2, t2) {
  var e2 = s$1(r2) ? b("MapSet").F(r2, t2) : v$1(r2) ? b("MapSet").T(r2, t2) : n2.O ? (function(n3, r3) {
    var t3 = Array.isArray(n3), e3 = { i: t3 ? 1 : 0, A: r3 ? r3.A : _$1(), P: false, I: false, R: {}, l: r3, t: n3, k: null, o: null, j: null, C: false }, i2 = e3, o2 = en;
    t3 && (i2 = [e3], o2 = on);
    var u2 = Proxy.revocable(i2, o2), a2 = u2.revoke, f2 = u2.proxy;
    return e3.k = f2, e3.j = a2, f2;
  })(r2, t2) : b("ES5").J(r2, t2);
  return (t2 ? t2.A : _$1()).p.push(e2), e2;
}
function R$1(e2) {
  return r(e2) || n(22, e2), (function n2(r2) {
    if (!t(r2)) return r2;
    var e3, u2 = r2[Q$1], c2 = o(r2);
    if (u2) {
      if (!u2.P && (u2.i < 4 || !b("ES5").K(u2))) return u2.t;
      u2.I = true, e3 = D$1(r2, c2), u2.I = false;
    } else e3 = D$1(r2, c2);
    return i(e3, (function(r3, t2) {
      u2 && a(u2.t, r3) === t2 || f(e3, r3, n2(t2));
    })), 3 === c2 ? new Set(e3) : e3;
  })(e2);
}
function D$1(n2, r2) {
  switch (r2) {
    case 2:
      return new Map(n2);
    case 3:
      return Array.from(n2);
  }
  return l(n2);
}
function T$1() {
  function e2(n2) {
    if (!t(n2)) return n2;
    if (Array.isArray(n2)) return n2.map(e2);
    if (s$1(n2)) return new Map(Array.from(n2.entries()).map((function(n3) {
      return [n3[0], e2(n3[1])];
    })));
    if (v$1(n2)) return new Set(Array.from(n2).map(e2));
    var r2 = Object.create(Object.getPrototypeOf(n2));
    for (var i2 in n2) r2[i2] = e2(n2[i2]);
    return u(n2, L$1) && (r2[L$1] = n2[L$1]), r2;
  }
  function f2(n2) {
    return r(n2) ? e2(n2) : n2;
  }
  var c2 = "add";
  m("Patches", { $: function(r2, t2) {
    return t2.forEach((function(t3) {
      for (var i2 = t3.path, u2 = t3.op, f3 = r2, s2 = 0; s2 < i2.length - 1; s2++) {
        var v2 = o(f3), p2 = i2[s2];
        "string" != typeof p2 && "number" != typeof p2 && (p2 = "" + p2), 0 !== v2 && 1 !== v2 || "__proto__" !== p2 && "constructor" !== p2 || n(24), "function" == typeof f3 && "prototype" === p2 && n(24), "object" != typeof (f3 = a(f3, p2)) && n(15, i2.join("/"));
      }
      var l2 = o(f3), d2 = e2(t3.value), h2 = i2[i2.length - 1];
      switch (u2) {
        case "replace":
          switch (l2) {
            case 2:
              return f3.set(h2, d2);
            case 3:
              n(16);
            default:
              return f3[h2] = d2;
          }
        case c2:
          switch (l2) {
            case 1:
              return "-" === h2 ? f3.push(d2) : f3.splice(h2, 0, d2);
            case 2:
              return f3.set(h2, d2);
            case 3:
              return f3.add(d2);
            default:
              return f3[h2] = d2;
          }
        case "remove":
          switch (l2) {
            case 1:
              return f3.splice(h2, 1);
            case 2:
              return f3.delete(h2);
            case 3:
              return f3.delete(t3.value);
            default:
              return delete f3[h2];
          }
        default:
          n(17, u2);
      }
    })), r2;
  }, N: function(n2, r2, t2, e3) {
    switch (n2.i) {
      case 0:
      case 4:
      case 2:
        return (function(n3, r3, t3, e4) {
          var o2 = n3.t, s2 = n3.o;
          i(n3.R, (function(n4, i2) {
            var v2 = a(o2, n4), p2 = a(s2, n4), l2 = i2 ? u(o2, n4) ? "replace" : c2 : "remove";
            if (v2 !== p2 || "replace" !== l2) {
              var d2 = r3.concat(n4);
              t3.push("remove" === l2 ? { op: l2, path: d2 } : { op: l2, path: d2, value: p2 }), e4.push(l2 === c2 ? { op: "remove", path: d2 } : "remove" === l2 ? { op: c2, path: d2, value: f2(v2) } : { op: "replace", path: d2, value: f2(v2) });
            }
          }));
        })(n2, r2, t2, e3);
      case 5:
      case 1:
        return (function(n3, r3, t3, e4) {
          var i2 = n3.t, o2 = n3.R, u2 = n3.o;
          if (u2.length < i2.length) {
            var a2 = [u2, i2];
            i2 = a2[0], u2 = a2[1];
            var s2 = [e4, t3];
            t3 = s2[0], e4 = s2[1];
          }
          for (var v2 = 0; v2 < i2.length; v2++) if (o2[v2] && u2[v2] !== i2[v2]) {
            var p2 = r3.concat([v2]);
            t3.push({ op: "replace", path: p2, value: f2(u2[v2]) }), e4.push({ op: "replace", path: p2, value: f2(i2[v2]) });
          }
          for (var l2 = i2.length; l2 < u2.length; l2++) {
            var d2 = r3.concat([l2]);
            t3.push({ op: c2, path: d2, value: f2(u2[l2]) });
          }
          i2.length < u2.length && e4.push({ op: "replace", path: r3.concat(["length"]), value: i2.length });
        })(n2, r2, t2, e3);
      case 3:
        return (function(n3, r3, t3, e4) {
          var i2 = n3.t, o2 = n3.o, u2 = 0;
          i2.forEach((function(n4) {
            if (!o2.has(n4)) {
              var i3 = r3.concat([u2]);
              t3.push({ op: "remove", path: i3, value: n4 }), e4.unshift({ op: c2, path: i3, value: n4 });
            }
            u2++;
          })), u2 = 0, o2.forEach((function(n4) {
            if (!i2.has(n4)) {
              var o3 = r3.concat([u2]);
              t3.push({ op: c2, path: o3, value: n4 }), e4.unshift({ op: "remove", path: o3, value: n4 });
            }
            u2++;
          }));
        })(n2, r2, t2, e3);
    }
  }, M: function(n2, r2, t2, e3) {
    t2.push({ op: "replace", path: [], value: r2 === H$1 ? void 0 : r2 }), e3.push({ op: "replace", path: [], value: n2 });
  } });
}
function C$1() {
  function r2(n2, r3) {
    function t2() {
      this.constructor = n2;
    }
    a2(n2, r3), n2.prototype = (t2.prototype = r3.prototype, new t2());
  }
  function e2(n2) {
    n2.o || (n2.R = /* @__PURE__ */ new Map(), n2.o = new Map(n2.t));
  }
  function o2(n2) {
    n2.o || (n2.o = /* @__PURE__ */ new Set(), n2.t.forEach((function(r3) {
      if (t(r3)) {
        var e3 = N$1(n2.A.h, r3, n2);
        n2.p.set(r3, e3), n2.o.add(e3);
      } else n2.o.add(r3);
    })));
  }
  function u2(r3) {
    r3.g && n(3, JSON.stringify(p$1(r3)));
  }
  var a2 = function(n2, r3) {
    return (a2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n3, r4) {
      n3.__proto__ = r4;
    } || function(n3, r4) {
      for (var t2 in r4) r4.hasOwnProperty(t2) && (n3[t2] = r4[t2]);
    })(n2, r3);
  }, f2 = (function() {
    function n2(n3, r3) {
      return this[Q$1] = { i: 2, l: r3, A: r3 ? r3.A : _$1(), P: false, I: false, o: void 0, R: void 0, t: n3, k: this, C: false, g: false }, this;
    }
    r2(n2, Map);
    var o3 = n2.prototype;
    return Object.defineProperty(o3, "size", { get: function() {
      return p$1(this[Q$1]).size;
    } }), o3.has = function(n3) {
      return p$1(this[Q$1]).has(n3);
    }, o3.set = function(n3, r3) {
      var t2 = this[Q$1];
      return u2(t2), p$1(t2).has(n3) && p$1(t2).get(n3) === r3 || (e2(t2), k$1(t2), t2.R.set(n3, true), t2.o.set(n3, r3), t2.R.set(n3, true)), this;
    }, o3.delete = function(n3) {
      if (!this.has(n3)) return false;
      var r3 = this[Q$1];
      return u2(r3), e2(r3), k$1(r3), r3.t.has(n3) ? r3.R.set(n3, false) : r3.R.delete(n3), r3.o.delete(n3), true;
    }, o3.clear = function() {
      var n3 = this[Q$1];
      u2(n3), p$1(n3).size && (e2(n3), k$1(n3), n3.R = /* @__PURE__ */ new Map(), i(n3.t, (function(r3) {
        n3.R.set(r3, false);
      })), n3.o.clear());
    }, o3.forEach = function(n3, r3) {
      var t2 = this;
      p$1(this[Q$1]).forEach((function(e3, i2) {
        n3.call(r3, t2.get(i2), i2, t2);
      }));
    }, o3.get = function(n3) {
      var r3 = this[Q$1];
      u2(r3);
      var i2 = p$1(r3).get(n3);
      if (r3.I || !t(i2)) return i2;
      if (i2 !== r3.t.get(n3)) return i2;
      var o4 = N$1(r3.A.h, i2, r3);
      return e2(r3), r3.o.set(n3, o4), o4;
    }, o3.keys = function() {
      return p$1(this[Q$1]).keys();
    }, o3.values = function() {
      var n3, r3 = this, t2 = this.keys();
      return (n3 = {})[V$1] = function() {
        return r3.values();
      }, n3.next = function() {
        var n4 = t2.next();
        return n4.done ? n4 : { done: false, value: r3.get(n4.value) };
      }, n3;
    }, o3.entries = function() {
      var n3, r3 = this, t2 = this.keys();
      return (n3 = {})[V$1] = function() {
        return r3.entries();
      }, n3.next = function() {
        var n4 = t2.next();
        if (n4.done) return n4;
        var e3 = r3.get(n4.value);
        return { done: false, value: [n4.value, e3] };
      }, n3;
    }, o3[V$1] = function() {
      return this.entries();
    }, n2;
  })(), c2 = (function() {
    function n2(n3, r3) {
      return this[Q$1] = { i: 3, l: r3, A: r3 ? r3.A : _$1(), P: false, I: false, o: void 0, t: n3, k: this, p: /* @__PURE__ */ new Map(), g: false, C: false }, this;
    }
    r2(n2, Set);
    var t2 = n2.prototype;
    return Object.defineProperty(t2, "size", { get: function() {
      return p$1(this[Q$1]).size;
    } }), t2.has = function(n3) {
      var r3 = this[Q$1];
      return u2(r3), r3.o ? !!r3.o.has(n3) || !(!r3.p.has(n3) || !r3.o.has(r3.p.get(n3))) : r3.t.has(n3);
    }, t2.add = function(n3) {
      var r3 = this[Q$1];
      return u2(r3), this.has(n3) || (o2(r3), k$1(r3), r3.o.add(n3)), this;
    }, t2.delete = function(n3) {
      if (!this.has(n3)) return false;
      var r3 = this[Q$1];
      return u2(r3), o2(r3), k$1(r3), r3.o.delete(n3) || !!r3.p.has(n3) && r3.o.delete(r3.p.get(n3));
    }, t2.clear = function() {
      var n3 = this[Q$1];
      u2(n3), p$1(n3).size && (o2(n3), k$1(n3), n3.o.clear());
    }, t2.values = function() {
      var n3 = this[Q$1];
      return u2(n3), o2(n3), n3.o.values();
    }, t2.entries = function() {
      var n3 = this[Q$1];
      return u2(n3), o2(n3), n3.o.entries();
    }, t2.keys = function() {
      return this.values();
    }, t2[V$1] = function() {
      return this.values();
    }, t2.forEach = function(n3, r3) {
      for (var t3 = this.values(), e3 = t3.next(); !e3.done; ) n3.call(r3, e3.value, e3.value, this), e3 = t3.next();
    }, n2;
  })();
  m("MapSet", { F: function(n2, r3) {
    return new f2(n2, r3);
  }, T: function(n2, r3) {
    return new c2(n2, r3);
  } });
}
var G$1, U$1, W$1 = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"), X$1 = "undefined" != typeof Map, q$1 = "undefined" != typeof Set, B$1 = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect, H$1 = W$1 ? Symbol.for("immer-nothing") : ((G$1 = {})["immer-nothing"] = true, G$1), L$1 = W$1 ? Symbol.for("immer-draftable") : "__$immer_draftable", Q$1 = W$1 ? Symbol.for("immer-state") : "__$immer_state", V$1 = "undefined" != typeof Symbol && Symbol.iterator || "@@iterator", Z$1 = "" + Object.prototype.constructor, nn = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(n2) {
  return Object.getOwnPropertyNames(n2).concat(Object.getOwnPropertySymbols(n2));
} : Object.getOwnPropertyNames, rn = Object.getOwnPropertyDescriptors || function(n2) {
  var r2 = {};
  return nn(n2).forEach((function(t2) {
    r2[t2] = Object.getOwnPropertyDescriptor(n2, t2);
  })), r2;
}, tn = {}, en = { get: function(n2, r2) {
  if (r2 === Q$1) return n2;
  var e2 = p$1(n2);
  if (!u(e2, r2)) return (function(n3, r3, t2) {
    var e3, i3 = I$1(r3, t2);
    return i3 ? "value" in i3 ? i3.value : null === (e3 = i3.get) || void 0 === e3 ? void 0 : e3.call(n3.k) : void 0;
  })(n2, e2, r2);
  var i2 = e2[r2];
  return n2.I || !t(i2) ? i2 : i2 === z$1(n2.t, r2) ? (E$1(n2), n2.o[r2] = N$1(n2.A.h, i2, n2)) : i2;
}, has: function(n2, r2) {
  return r2 in p$1(n2);
}, ownKeys: function(n2) {
  return Reflect.ownKeys(p$1(n2));
}, set: function(n2, r2, t2) {
  var e2 = I$1(p$1(n2), r2);
  if (null == e2 ? void 0 : e2.set) return e2.set.call(n2.k, t2), true;
  if (!n2.P) {
    var i2 = z$1(p$1(n2), r2), o2 = null == i2 ? void 0 : i2[Q$1];
    if (o2 && o2.t === t2) return n2.o[r2] = t2, n2.R[r2] = false, true;
    if (c(t2, i2) && (void 0 !== t2 || u(n2.t, r2))) return true;
    E$1(n2), k$1(n2);
  }
  return n2.o[r2] === t2 && (void 0 !== t2 || r2 in n2.o) || Number.isNaN(t2) && Number.isNaN(n2.o[r2]) || (n2.o[r2] = t2, n2.R[r2] = true), true;
}, deleteProperty: function(n2, r2) {
  return void 0 !== z$1(n2.t, r2) || r2 in n2.t ? (n2.R[r2] = false, E$1(n2), k$1(n2)) : delete n2.R[r2], n2.o && delete n2.o[r2], true;
}, getOwnPropertyDescriptor: function(n2, r2) {
  var t2 = p$1(n2), e2 = Reflect.getOwnPropertyDescriptor(t2, r2);
  return e2 ? { writable: true, configurable: 1 !== n2.i || "length" !== r2, enumerable: e2.enumerable, value: t2[r2] } : e2;
}, defineProperty: function() {
  n(11);
}, getPrototypeOf: function(n2) {
  return Object.getPrototypeOf(n2.t);
}, setPrototypeOf: function() {
  n(12);
} }, on = {};
i(en, (function(n2, r2) {
  on[n2] = function() {
    return arguments[0] = arguments[0][0], r2.apply(this, arguments);
  };
})), on.deleteProperty = function(r2, t2) {
  return on.set.call(this, r2, t2, void 0);
}, on.set = function(r2, t2, e2) {
  return en.set.call(this, r2[0], t2, e2, r2[0]);
};
var un = (function() {
  function e2(r2) {
    var e3 = this;
    this.O = B$1, this.D = true, this.produce = function(r3, i3, o2) {
      if ("function" == typeof r3 && "function" != typeof i3) {
        var u2 = i3;
        i3 = r3;
        var a2 = e3;
        return function(n2) {
          var r4 = this;
          void 0 === n2 && (n2 = u2);
          for (var t2 = arguments.length, e4 = Array(t2 > 1 ? t2 - 1 : 0), o3 = 1; o3 < t2; o3++) e4[o3 - 1] = arguments[o3];
          return a2.produce(n2, (function(n3) {
            var t3;
            return (t3 = i3).call.apply(t3, [r4, n3].concat(e4));
          }));
        };
      }
      var f2;
      if ("function" != typeof i3 && n(6), void 0 !== o2 && "function" != typeof o2 && n(7), t(r3)) {
        var c2 = w$1(e3), s2 = N$1(e3, r3, void 0), v2 = true;
        try {
          f2 = i3(s2), v2 = false;
        } finally {
          v2 ? g(c2) : O$1(c2);
        }
        return "undefined" != typeof Promise && f2 instanceof Promise ? f2.then((function(n2) {
          return j$1(c2, o2), P$1(n2, c2);
        }), (function(n2) {
          throw g(c2), n2;
        })) : (j$1(c2, o2), P$1(f2, c2));
      }
      if (!r3 || "object" != typeof r3) {
        if (void 0 === (f2 = i3(r3)) && (f2 = r3), f2 === H$1 && (f2 = void 0), e3.D && d(f2, true), o2) {
          var p2 = [], l2 = [];
          b("Patches").M(r3, f2, p2, l2), o2(p2, l2);
        }
        return f2;
      }
      n(21, r3);
    }, this.produceWithPatches = function(n2, r3) {
      if ("function" == typeof n2) return function(r4) {
        for (var t3 = arguments.length, i4 = Array(t3 > 1 ? t3 - 1 : 0), o3 = 1; o3 < t3; o3++) i4[o3 - 1] = arguments[o3];
        return e3.produceWithPatches(r4, (function(r5) {
          return n2.apply(void 0, [r5].concat(i4));
        }));
      };
      var t2, i3, o2 = e3.produce(n2, r3, (function(n3, r4) {
        t2 = n3, i3 = r4;
      }));
      return "undefined" != typeof Promise && o2 instanceof Promise ? o2.then((function(n3) {
        return [n3, t2, i3];
      })) : [o2, t2, i3];
    }, "boolean" == typeof (null == r2 ? void 0 : r2.useProxies) && this.setUseProxies(r2.useProxies), "boolean" == typeof (null == r2 ? void 0 : r2.autoFreeze) && this.setAutoFreeze(r2.autoFreeze);
  }
  var i2 = e2.prototype;
  return i2.createDraft = function(e3) {
    t(e3) || n(8), r(e3) && (e3 = R$1(e3));
    var i3 = w$1(this), o2 = N$1(this, e3, void 0);
    return o2[Q$1].C = true, O$1(i3), o2;
  }, i2.finishDraft = function(r2, t2) {
    var e3 = r2 && r2[Q$1];
    var i3 = e3.A;
    return j$1(i3, t2), P$1(void 0, i3);
  }, i2.setAutoFreeze = function(n2) {
    this.D = n2;
  }, i2.setUseProxies = function(r2) {
    r2 && !B$1 && n(20), this.O = r2;
  }, i2.applyPatches = function(n2, t2) {
    var e3;
    for (e3 = t2.length - 1; e3 >= 0; e3--) {
      var i3 = t2[e3];
      if (0 === i3.path.length && "replace" === i3.op) {
        n2 = i3.value;
        break;
      }
    }
    e3 > -1 && (t2 = t2.slice(e3 + 1));
    var o2 = b("Patches").$;
    return r(n2) ? o2(n2, t2) : this.produce(n2, (function(n3) {
      return o2(n3, t2);
    }));
  }, e2;
})(), an = new un(), fn = an.produce, cn = an.produceWithPatches.bind(an); an.setAutoFreeze.bind(an); an.setUseProxies.bind(an); var pn = an.applyPatches.bind(an); an.createDraft.bind(an); an.finishDraft.bind(an);

/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd$1(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

var _setCacheAdd = setCacheAdd$1;

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */

function setCacheHas$1(value) {
  return this.__data__.has(value);
}

var _setCacheHas = setCacheHas$1;

var MapCache = _MapCache,
    setCacheAdd = _setCacheAdd,
    setCacheHas = _setCacheHas;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache$1(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
SetCache$1.prototype.has = setCacheHas;

var _SetCache = SetCache$1;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */

function arraySome$1(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

var _arraySome = arraySome$1;

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function cacheHas$1(cache, key) {
  return cache.has(key);
}

var _cacheHas = cacheHas$1;

var SetCache = _SetCache,
    arraySome = _arraySome,
    cacheHas = _cacheHas;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$3 = 1,
    COMPARE_UNORDERED_FLAG$1 = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays$2(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG$1) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

var _equalArrays = equalArrays$2;

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */

function mapToArray$1(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

var _mapToArray = mapToArray$1;

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */

function setToArray$1(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

var _setToArray = setToArray$1;

var Symbol$1 = _Symbol,
    Uint8Array$1 = _Uint8Array,
    eq = eq_1,
    equalArrays$1 = _equalArrays,
    mapToArray = _mapToArray,
    setToArray = _setToArray;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$2 = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag$1(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays$1(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

var _equalByTag = equalByTag$1;

var getAllKeys = _getAllKeys;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$1 = 1;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

var _equalObjects = equalObjects$1;

var Stack = _Stack,
    equalArrays = _equalArrays,
    equalByTag = _equalByTag,
    equalObjects = _equalObjects,
    getTag = _getTag,
    isArray = isArray_1,
    isBuffer = isBufferExports,
    isTypedArray = isTypedArray_1;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

var _baseIsEqualDeep = baseIsEqualDeep$1;

var baseIsEqualDeep = _baseIsEqualDeep,
    isObjectLike = isObjectLike_1;

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual$1(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$1, stack);
}

var _baseIsEqual = baseIsEqual$1;

var baseIsEqual = _baseIsEqual;

/**
 * This method is like `_.isEqual` except that it accepts `customizer` which
 * is invoked to compare values. If `customizer` returns `undefined`, comparisons
 * are handled by the method instead. The `customizer` is invoked with up to
 * six arguments: (objValue, othValue [, index|key, object, other, stack]).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * function isGreeting(value) {
 *   return /^h(?:i|ello)$/.test(value);
 * }
 *
 * function customizer(objValue, othValue) {
 *   if (isGreeting(objValue) && isGreeting(othValue)) {
 *     return true;
 *   }
 * }
 *
 * var array = ['hello', 'goodbye'];
 * var other = ['hi', 'goodbye'];
 *
 * _.isEqualWith(array, other, customizer);
 * // => true
 */
function isEqualWith(value, other, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined;
  var result = customizer ? customizer(value, other) : undefined;
  return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
}

var isEqualWith_1 = isEqualWith;

const s = /*@__PURE__*/getDefaultExportFromCjs(isEqualWith_1);

//

var shallowequal = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};

const p = /*@__PURE__*/getDefaultExportFromCjs(shallowequal);

let nanoid = (size = 21) =>
  crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
    byte &= 63;
    if (byte < 36) {
      id += byte.toString(36);
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase();
    } else if (byte > 62) {
      id += '-';
    } else {
      id += '_';
    }
    return id
  }, '');

"undefined"!=typeof window&&(window.__CRAFTJS__||(window.__CRAFTJS__={}),window.__CRAFTJS__["@ws-ui/craftjs-utils"]="0.2.3");const y="ROOT",v="canvas-ROOT",E="Parent id cannot be ommited",w="Attempting to add a node with duplicated id",O="Node does not exist, it may have been removed",R='A <Element /> that is used inside a User Component must specify an `id` prop, eg: <Element id="text_element">...</Element> ',T="Placeholder required placement info (parent, index, or where) is missing",C="Node cannot be dropped into target parent",P="Target parent rejects incoming node",I="Current parent rejects outgoing node",D="Cannot move node that is not a direct child of a Canvas node",H="Cannot move node into a non-Canvas parent",j="A top-level Node cannot be moved",A="Root Node cannot be moved",x="Cannot move node into a descendant",N="The component type specified for this node (%node_type%) does not exist in the resolver",S="The component specified in the <Canvas> `is` prop has additional Canvas specified in it's render template.",_="The node has specified a canDrag() rule that prevents it from being dragged",k="Invalid parameter Node Id specified",L="Attempting to delete a top-level Node",M="Resolver in <Editor /> has to be an object. For (de)serialization Craft.js needs a list of all the User Components. \n    \nMore info: https://craft.js.org/r/docs/api/editor#props",U="An Error occurred while deserializing components: Cannot find component <%displayName% /> in resolver map. Please check your resolver in <Editor />\n\nAvailable components in resolver: %availableComponents%\n\nMore info: https://craft.js.org/r/docs/api/editor#props",q="You can only use useEditor in the context of <Editor />. \n\nPlease only use useEditor in components that are children of the <Editor /> component.",G="You can only use useNode in the context of <Editor />. \n\nPlease only use useNode in components that are children of the <Editor /> component.";function Y(e,t,n){return (t=function(e){var t=function(e){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true}):e[t]=n,e}function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),true).forEach((function(t){Y(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}const W={UNDO:"HISTORY_UNDO",REDO:"HISTORY_REDO",THROTTLE:"HISTORY_THROTTLE",IGNORE:"HISTORY_IGNORE",MERGE:"HISTORY_MERGE",CLEAR:"HISTORY_CLEAR"};class ${constructor(){Y(this,"timeline",[]),Y(this,"pointer",-1);}add(e,t){0===e.length&&0===t.length||(this.pointer=this.pointer+1,this.timeline.length=this.pointer,this.timeline[this.pointer]={patches:e,inversePatches:t,timestamp:Date.now()});}throttleAdd(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500;if(0!==e.length||0!==t.length){if(this.timeline.length&&this.pointer>=0){const{patches:r,inversePatches:i,timestamp:s}=this.timeline[this.pointer];if((new Date).getTime()-s<n)return void(this.timeline[this.pointer]={timestamp:s,patches:[...r,...e],inversePatches:[...t,...i]})}this.add(e,t);}}merge(e,t){if(0!==e.length||0!==t.length)if(this.timeline.length&&this.pointer>=0){const{patches:n,inversePatches:r,timestamp:i}=this.timeline[this.pointer];this.timeline[this.pointer]={timestamp:i,patches:[...n,...e],inversePatches:[...t,...r]};}else this.add(e,t);}clear(){this.timeline=[],this.pointer=-1;}canUndo(){return this.pointer>=0}canRedo(){return this.pointer<this.timeline.length-1}undo(e){if(!this.canUndo())return;const{inversePatches:n}=this.timeline[this.pointer];return this.pointer=this.pointer-1,pn(e,n)}redo(e){if(!this.canRedo())return;this.pointer=this.pointer+1;const{patches:n}=this.timeline[this.pointer];return pn(e,n)}}function z(t,n,r,s){const o=qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useMemo((()=>new $),[]);let h,u=qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef([]),p=qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef();"function"==typeof t?h=t:(h=t.methods,u.current=t.ignoreHistoryForActions,p.current=t.normalizeHistory);const f=qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(s);f.current=s;const m=qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(n),g=qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useMemo((()=>{const{current:t}=p,{current:n}=u,{current:s}=f;return (a,c)=>{const l=r&&J(r,(()=>a),o);let d,[u,p,f]=cn(a,(e=>{switch(c.type){case W.UNDO:return o.undo(e);case W.REDO:return o.redo(e);case W.CLEAR:return o.clear(),F({},e);case W.IGNORE:case W.MERGE:case W.THROTTLE:{const[t,...n]=c.payload;h(e,l)[t](...n);break}default:h(e,l)[c.type](...c.payload);}}));return d=u,s&&s(u,a,{type:c.type,params:c.payload,patches:p},l,(e=>{let t=cn(u,e);d=t[0],p=[...p,...t[1]],f=[...t[2],...f];})),[W.UNDO,W.REDO].includes(c.type)&&t&&(d=fn(d,t)),[...n,W.UNDO,W.REDO,W.IGNORE,W.CLEAR].includes(c.type)||(c.type===W.THROTTLE?o.throttleAdd(p,f,c.config&&c.config.rate):c.type===W.MERGE?o.merge(p,f):o.add(p,f)),d}}),[o,h,r]),b=qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useCallback((()=>m.current),[]),y=qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useMemo((()=>new K(b)),[b]),v=qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useCallback((e=>{const t=g(m.current,e);m.current=t,y.notify();}),[g,y]);qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect((()=>{y.notify();}),[y]);const E=qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useMemo((()=>r?J(r,(()=>m.current),o):[]),[o,r]),w=qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useMemo((()=>{const e=Object.keys(h(null,null)),{current:t}=u;return F(F({},e.reduce(((e,t)=>(e[t]=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return v({type:t,payload:n})},e)),{})),{},{history:{undo:()=>v({type:W.UNDO}),redo:()=>v({type:W.REDO}),clear:()=>v({type:W.CLEAR}),throttle:n=>F({},e.filter((e=>!t.includes(e))).reduce(((e,t)=>(e[t]=function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return v({type:W.THROTTLE,payload:[t,...r],config:{rate:n}})},e)),{})),ignore:()=>F({},e.filter((e=>!t.includes(e))).reduce(((e,t)=>(e[t]=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return v({type:W.IGNORE,payload:[t,...n]})},e)),{})),merge:()=>F({},e.filter((e=>!t.includes(e))).reduce(((e,t)=>(e[t]=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return v({type:W.MERGE,payload:[t,...n]})},e)),{}))}})}),[v,h]);return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useMemo((()=>({getState:b,subscribe:(e,t,n)=>y.subscribe(e,t,n),actions:w,query:E,history:o})),[w,E,y,b,o])}function J(e,t,n){const r=Object.keys(e()).reduce(((n,r)=>F(F({},n),{},{[r]:function(){return e(t())[r](...arguments)}})),{});return F(F({},r),{},{history:{canUndo:()=>n.canUndo(),canRedo:()=>n.canRedo()}})}C$1(),T$1();class K{constructor(e){Y(this,"getState",void 0),Y(this,"subscribers",[]),this.getState=e;}subscribe(e,t,n){const r=new Q((()=>e(this.getState())),t,n);return this.subscribers.push(r),this.unsubscribe.bind(this,r)}unsubscribe(e){if(this.subscribers.length){const t=this.subscribers.indexOf(e);if(t>-1)return this.subscribers.splice(t,1)}}notify(){this.subscribers.forEach((e=>e.collect()));}}class Q{constructor(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Y(this,"collected",void 0),Y(this,"collector",void 0),Y(this,"onChange",void 0),Y(this,"id",void 0),this.collector=e,this.onChange=t,n&&this.collect();}collect(){try{const e=this.collector();s(e,this.collected)||(this.collected=e,this.onChange&&this.onChange(this.collected));}catch(e){console.warn(e);}}}const V=e=>{const{x:t,y:n,top:r,left:i,bottom:s,right:o,width:a,height:c}=e.getBoundingClientRect(),l=window.getComputedStyle(e),d={left:parseInt(l.marginLeft),right:parseInt(l.marginRight),bottom:parseInt(l.marginBottom),top:parseInt(l.marginTop)},h={left:parseInt(l.paddingLeft),right:parseInt(l.paddingRight),bottom:parseInt(l.paddingBottom),top:parseInt(l.paddingTop)};return {x:t,y:n,top:r,left:i,bottom:s,right:o,width:a,height:c,outerWidth:Math.round(a+d.left+d.right),outerHeight:Math.round(c+d.top+d.bottom),margin:d,padding:h,inFlow:e.parentElement&&!!(t=>{const n=getComputedStyle(t);if(!(l.overflow&&"visible"!==l.overflow||"none"!==n.float||"grid"===n.display||"flex"===n.display&&"column"!==n["flex-direction"])){switch(l.position){case "static":case "relative":break;default:return}switch(e.tagName){case "TR":case "TBODY":case "THEAD":case "TFOOT":return  true}switch(l.display){case "block":case "list-item":case "table":case "flex":case "grid":return  true}}})(e.parentElement)}};function X(e,t){const{subscribe:n,getState:r,actions:i,query:s}=e,o=qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(true),a=qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(null),u=qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useRef(t);u.current=t;const p=qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useCallback((e=>({...e,actions:i,query:s})),[i,s]);o.current&&t&&(a.current=t(r(),s),o.current=false);const[f,m]=qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useState(p(a.current));return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect((()=>{let e;return u.current&&(e=n((e=>u.current(e,s)),(e=>{m(p(e));}))),()=>{e&&e();}}),[p,s,n]),f}const Z=function(){return nanoid(arguments.length>0&&void 0!==arguments[0]?arguments[0]:10)};class ee{constructor(){Y(this,"isEnabled",true),Y(this,"elementIdMap",new WeakMap),Y(this,"registry",new Map);}getElementId(e){const t=this.elementIdMap.get(e);if(t)return t;const n=Z();return this.elementIdMap.set(e,n),n}getConnectorId(e,t){return `${t}--${this.getElementId(e)}`}register(e,t){const n=this.getByElement(e,t.name);if(n){if(p(t.required,n.required))return n;this.getByElement(e,t.name).disable();}let r=null;const i=this.getConnectorId(e,t.name);return this.registry.set(i,{id:i,required:t.required,enable:()=>{r&&r(),r=t.connector(e,t.required,t.options);},disable:()=>{r&&r();},remove:()=>this.remove(i)}),this.isEnabled&&this.registry.get(i).enable(),this.registry.get(i)}get(e){return this.registry.get(e)}remove(e){const t=this.get(e);t&&(t.disable(),this.registry.delete(t.id));}enable(){this.isEnabled=true,this.registry.forEach((e=>{e.enable();}));}disable(){this.isEnabled=false,this.registry.forEach((e=>{e.disable();}));}getByElement(e,t){return this.get(this.getConnectorId(e,t))}removeByElement(e,t){return this.remove(this.getConnectorId(e,t))}clear(){this.disable(),this.elementIdMap=new WeakMap,this.registry=new Map;}}var te;!function(e){e[e.HandlerDisabled=0]="HandlerDisabled",e[e.HandlerEnabled=1]="HandlerEnabled";}(te||(te={}));class ne{constructor(e){Y(this,"options",void 0),Y(this,"registry",new ee),Y(this,"subscribers",new Set),this.options=e;}listen(e){return this.subscribers.add(e),()=>this.subscribers.delete(e)}disable(){this.onDisable&&this.onDisable(),this.registry.disable(),this.subscribers.forEach((e=>{e(te.HandlerDisabled);}));}enable(){this.onEnable&&this.onEnable(),this.registry.enable(),this.subscribers.forEach((e=>{e(te.HandlerEnabled);}));}cleanup(){this.disable(),this.subscribers.clear(),this.registry.clear();}addCraftEventListener(e,t,n,r){const i=r=>{(function(e,t,n){e.craft||(e.craft={stopPropagation:()=>{},blockedEvents:{}});const r=e.craft&&e.craft.blockedEvents[t]||[];for(let e=0;e<r.length;e++){const t=r[e];if(n!==t&&n.contains(t))return  true}return  false})(r,t,e)||(r.craft.stopPropagation=()=>{r.craft.blockedEvents[t]||(r.craft.blockedEvents[t]=[]),r.craft.blockedEvents[t].push(e);},n(r));};return e.addEventListener(t,i,r),()=>e.removeEventListener(t,i,r)}createConnectorsUsage(){const e=this.handlers(),t=new Set;let n=false;const r=new Map;return {connectors:Object.entries(e).reduce(((e,i)=>{let[s,o]=i;return F(F({},e),{},{[s]:(e,i,a)=>{const c=()=>{const n=this.registry.register(e,{required:i,name:s,options:a,connector:o});return t.add(n.id),n};return r.set(this.registry.getConnectorId(e,s),c),n&&c(),e}})}),{}),register:()=>{n=true,r.forEach((e=>{e();}));},cleanup:()=>{n=false,t.forEach((e=>this.registry.remove(e)));}}}derive(e,t){return new e(this,t)}createProxyHandlers(e,t){const n=[],r=e.handlers(),i=new Proxy(r,{get:(e,t,i)=>t in r==0?Reflect.get(e,t,i):function(e){for(var i=arguments.length,s=new Array(i>1?i-1:0),o=1;o<i;o++)s[o-1]=arguments[o];const a=r[t](e,...s);a&&n.push(a);}});return t(i),()=>{n.forEach((e=>{e();}));}}reflect(e){return this.createProxyHandlers(this,e)}}class re extends ne{constructor(e,t){super(t),Y(this,"derived",void 0),Y(this,"unsubscribeParentHandlerListener",void 0),this.derived=e,this.options=t,this.unsubscribeParentHandlerListener=this.derived.listen((e=>{switch(e){case te.HandlerEnabled:return this.enable();case te.HandlerDisabled:return this.disable();default:return}}));}inherit(e){return this.createProxyHandlers(this.derived,e)}cleanup(){super.cleanup(),this.unsubscribeParentHandlerListener();}}function ie(e,t){t&&("function"==typeof e?e(t):e.current=t);}function se(e,t){const n=e.ref;return invariant("string"!=typeof n),qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.cloneElement(e,n?{ref:e=>{ie(n,e),ie(t,e);}}:{ref:t})}function oe(e){return (t=null,...n)=>{if(!qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.isValidElement(t)){if(!t)return;const r=t;return r&&e(r,...n),r}const r=t;return function(e){if("string"!=typeof e.type)throw new Error}(r),se(r,e)}}function ae(e){return Object.keys(e).reduce(((t,n)=>(t[n]=oe(((...t)=>e[n](...t))),t)),{})}const ce=({style:e,className:t,parentDom:n})=>{const r=React.createElement("div",{className:t,style:{position:"fixed",display:"block",opacity:1,borderStyle:"solid",borderWidth:"1px",borderColor:"transparent",zIndex:99999,...e}});return n&&n.ownerDocument!==document?ReactDOM.createPortal(r,n.ownerDocument.body):r},le=e=>{qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect(e,[]);},de=(e,t)=>{let n=`Deprecation warning: ${e} will be deprecated in future relases.`;const{suggest:r,doc:i}=t;r&&(n+=` Please use ${r} instead.`),i&&(n+=`(${i})`),console.warn(n);},he=()=>"undefined"!=typeof window,ue=()=>he()&&/Linux/i.test(window.navigator.userAgent),pe=()=>he()&&/Chrome/i.test(window.navigator.userAgent);

export { v as DEPRECATED_ROOT_NODE, re as DerivedEventHandlers, _ as ERROR_CANNOT_DRAG, L as ERROR_DELETE_TOP_LEVEL_NODE, U as ERROR_DESERIALIZE_COMPONENT_NOT_IN_RESOLVER, w as ERROR_DUPLICATE_NODEID, S as ERROR_INFINITE_CANVAS, O as ERROR_INVALID_NODEID, k as ERROR_INVALID_NODE_ID, T as ERROR_MISSING_PLACEHOLDER_PLACEMENT, C as ERROR_MOVE_CANNOT_DROP, P as ERROR_MOVE_INCOMING_PARENT, D as ERROR_MOVE_NONCANVAS_CHILD, I as ERROR_MOVE_OUTGOING_PARENT, A as ERROR_MOVE_ROOT_NODE, j as ERROR_MOVE_TOP_LEVEL_NODE, x as ERROR_MOVE_TO_DESCENDANT, H as ERROR_MOVE_TO_NONCANVAS_PARENT, E as ERROR_NOPARENT, N as ERROR_NOT_IN_RESOLVER, M as ERROR_RESOLVER_NOT_AN_OBJECT, R as ERROR_TOP_LEVEL_ELEMENT_NO_ID, q as ERROR_USE_EDITOR_OUTSIDE_OF_EDITOR_CONTEXT, G as ERROR_USE_NODE_OUTSIDE_OF_EDITOR_CONTEXT, te as EventHandlerUpdates, ne as EventHandlers, W as HISTORY_ACTIONS, $ as History, y as ROOT_NODE, ce as RenderIndicator, se as cloneWithRef, J as createQuery, de as deprecationWarning, V as getDOMInfo, Z as getRandomId, pe as isChromium, he as isClientSide, ue as isLinux, X as useCollector, le as useEffectOnce, z as useMethods, ae as wrapConnectorHooks, oe as wrapHookToRecognizeElement };
