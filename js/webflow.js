/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
! function (t) {
  var e = {};

  function n(r) {
    if (e[r]) return e[r].exports;
    var i = e[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
  }
  n.m = t, n.c = e, n.d = function (t, e, r) {
    n.o(t, e) || Object.defineProperty(t, e, {
      configurable: !1,
      enumerable: !0,
      get: r
    })
  }, n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default
    } : function () {
      return t
    };
    return n.d(e, "a", e), e
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, n.p = "", n(n.s = 84)
}([function (t, e) {
  var n = Array.isArray;
  t.exports = n
}, function (t, e, n) {
  var r = {},
    i = {},
    o = [],
    a = window.Webflow || [],
    u = window.jQuery,
    c = u(window),
    s = u(document),
    f = u.isFunction,
    l = r._ = n(86),
    d = n(47) && u.tram,
    p = !1,
    h = !1;

  function v(t) {
    r.env() && (f(t.design) && c.on("__wf_design", t.design), f(t.preview) && c.on("__wf_preview", t.preview)), f(t.destroy) && c.on("__wf_destroy", t.destroy), t.ready && f(t.ready) && function (t) {
      if (p) return void t.ready();
      if (l.contains(o, t.ready)) return;
      o.push(t.ready)
    }(t)
  }

  function g(t) {
    f(t.design) && c.off("__wf_design", t.design), f(t.preview) && c.off("__wf_preview", t.preview), f(t.destroy) && c.off("__wf_destroy", t.destroy), t.ready && f(t.ready) && function (t) {
      o = l.filter(o, function (e) {
        return e !== t.ready
      })
    }(t)
  }
  d.config.hideBackface = !1, d.config.keepInherited = !0, r.define = function (t, e, n) {
    i[t] && g(i[t]);
    var r = i[t] = e(u, l, n) || {};
    return v(r), r
  }, r.require = function (t) {
    return i[t]
  }, r.push = function (t) {
    p ? f(t) && t() : a.push(t)
  }, r.env = function (t) {
    var e = window.__wf_design,
      n = void 0 !== e;
    return t ? "design" === t ? n && e : "preview" === t ? n && !e : "slug" === t ? n && window.__wf_slug : "editor" === t ? window.WebflowEditor : "test" === t ? window.__wf_test : "frame" === t ? window !== window.top : void 0 : n
  };
  var m, y = navigator.userAgent.toLowerCase(),
    b = r.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
    w = r.env.chrome = /chrome/.test(y) && /Google/.test(navigator.vendor) && parseInt(y.match(/chrome\/(\d+)\./)[1], 10),
    x = r.env.ios = /(ipod|iphone|ipad)/.test(y);
  r.env.safari = /safari/.test(y) && !w && !x, b && s.on("touchstart mousedown", function (t) {
    m = t.target
  }), r.validClick = b ? function (t) {
    return t === m || u.contains(t, m)
  } : function () {
    return !0
  };
  var _, O = "resize.webflow orientationchange.webflow load.webflow";

  function j(t, e) {
    var n = [],
      r = {};
    return r.up = l.throttle(function (t) {
      l.each(n, function (e) {
        e(t)
      })
    }), t && e && t.on(e, r.up), r.on = function (t) {
      "function" == typeof t && (l.contains(n, t) || n.push(t))
    }, r.off = function (t) {
      n = arguments.length ? l.filter(n, function (e) {
        return e !== t
      }) : []
    }, r
  }

  function I(t) {
    f(t) && t()
  }

  function E() {
    _ && (_.reject(), c.off("load", _.resolve)), _ = new u.Deferred, c.on("load", _.resolve)
  }
  r.resize = j(c, O), r.scroll = j(c, "scroll.webflow resize.webflow orientationchange.webflow load.webflow"), r.redraw = j(), r.location = function (t) {
    window.location = t
  }, r.env() && (r.location = function () {}), r.ready = function () {
    p = !0, h ? (h = !1, l.each(i, v)) : l.each(o, I), l.each(a, I), r.resize.up()
  }, r.load = function (t) {
    _.then(t)
  }, r.destroy = function (t) {
    t = t || {}, h = !0, c.triggerHandler("__wf_destroy"), null != t.domready && (p = t.domready), l.each(i, g), r.resize.off(), r.scroll.off(), r.redraw.off(), o = [], a = [], "pending" === _.state() && E()
  }, u(r.ready), E(), t.exports = window.Webflow = r
}, function (t, e, n) {
  var r = n(60),
    i = "object" == typeof self && self && self.Object === Object && self,
    o = r || i || Function("return this")();
  t.exports = o
}, function (t, e) {
  t.exports = function (t) {
    var e = typeof t;
    return null != t && ("object" == e || "function" == e)
  }
}, function (t, e, n) {
  var r = n(129),
    i = n(134);
  t.exports = function (t, e) {
    var n = i(t, e);
    return r(n) ? n : void 0
  }
}, function (t, e) {
  t.exports = function (t) {
    return null != t && "object" == typeof t
  }
}, function (t, e, n) {
  "use strict";
  n.d(e, "l", function () {
    return r
  }), n.d(e, "m", function () {
    return i
  }), n.d(e, "n", function () {
    return o
  }), n.d(e, "o", function () {
    return a
  }), n.d(e, "k", function () {
    return u
  }), n.d(e, "j", function () {
    return c
  }), n.d(e, "p", function () {
    return s
  }), n.d(e, "c", function () {
    return f
  }), n.d(e, "d", function () {
    return l
  }), n.d(e, "e", function () {
    return d
  }), n.d(e, "b", function () {
    return p
  }), n.d(e, "i", function () {
    return h
  }), n.d(e, "f", function () {
    return v
  }), n.d(e, "h", function () {
    return g
  }), n.d(e, "g", function () {
    return m
  }), n.d(e, "a", function () {
    return y
  }), n.d(e, "q", function () {
    return b
  });
  var r = "IX2_RAW_DATA_IMPORTED",
    i = "IX2_SESSION_INITIALIZED",
    o = "IX2_SESSION_STARTED",
    a = "IX2_SESSION_STOPPED",
    u = "IX2_PREVIEW_REQUESTED",
    c = "IX2_PLAYBACK_REQUESTED",
    s = "IX2_STOP_REQUESTED",
    f = "IX2_CLEAR_REQUESTED",
    l = "IX2_EVENT_LISTENER_ADDED",
    d = "IX2_EVENT_STATE_CHANGED",
    p = "IX2_ANIMATION_FRAME_CHANGED",
    h = "IX2_PARAMETER_CHANGED",
    v = "IX2_INSTANCE_ADDED",
    g = "IX2_INSTANCE_STARTED",
    m = "IX2_INSTANCE_REMOVED",
    y = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
    b = "IX2_VIEWPORT_WIDTH_CHANGED"
}, function (t, e, n) {
  var r = n(117),
    i = n(169),
    o = n(37),
    a = n(0),
    u = n(176);
  t.exports = function (t) {
    return "function" == typeof t ? t : null == t ? o : "object" == typeof t ? a(t) ? i(t[0], t[1]) : r(t) : u(t)
  }
}, function (t, e, n) {
  var r = n(10),
    i = n(130),
    o = n(131),
    a = "[object Null]",
    u = "[object Undefined]",
    c = r ? r.toStringTag : void 0;
  t.exports = function (t) {
    return null == t ? void 0 === t ? u : a : (t = Object(t), c && c in t ? i(t) : o(t))
  }
}, function (t, e, n) {
  var r = n(59),
    i = n(30);
  t.exports = function (t) {
    return null != t && i(t.length) && !r(t)
  }
}, function (t, e, n) {
  var r = n(2).Symbol;
  t.exports = r
}, function (t, e, n) {
  var r = n(21),
    i = 1 / 0;
  t.exports = function (t) {
    if ("string" == typeof t || r(t)) return t;
    var e = t + "";
    return "0" == e && 1 / t == -i ? "-0" : e
  }
}, function (t, e, n) {
  var r = n(110),
    i = Object.prototype.hasOwnProperty,
    o = Array.prototype.splice,
    a = Object.assign || function (t, e) {
      return u(e).forEach(function (n) {
        i.call(e, n) && (t[n] = e[n])
      }), t
    },
    u = "function" == typeof Object.getOwnPropertySymbols ? function (t) {
      return Object.keys(t).concat(Object.getOwnPropertySymbols(t))
    } : function (t) {
      return Object.keys(t)
    };

  function c(t) {
    return t instanceof Array ? t.slice() : t && "object" == typeof t ? a(new t.constructor, t) : t
  }

  function s() {
    var t = a({}, f);
    return e.extend = function (e, n) {
      t[e] = n
    }, e;

    function e(n, o) {
      Array.isArray(n) && Array.isArray(o) || r(!Array.isArray(o), "update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."), r("object" == typeof o && null !== o, "update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: %s.", Object.keys(t).join(", "));
      var a = n;
      u(o);
      return u(o).forEach(function (r) {
        if (i.call(t, r)) a = t[r](o[r], a, o, n);
        else {
          var u = e(n[r], o[r]);
          u !== a[r] && (a === n && (a = c(n)), a[r] = u)
        }
      }), a
    }
  }
  var f = {
    $push: function (t, e, n) {
      return l(e, n, "$push"), e.concat(t)
    },
    $unshift: function (t, e, n) {
      return l(e, n, "$unshift"), t.concat(e)
    },
    $splice: function (t, e, n, i) {
      var a = e === i ? c(i) : e;
      return function (t, e) {
        r(Array.isArray(t), "Expected $splice target to be an array; got %s", t), d(e.$splice)
      }(a, n), t.forEach(function (t) {
        d(t), o.apply(a, t)
      }), a
    },
    $set: function (t, e, n) {
      return function (t) {
        r(1 === Object.keys(t).length, "Cannot have more than one key in an object with $set")
      }(n), t
    },
    $unset: function (t, e, n, i) {
      r(Array.isArray(t), "update(): expected spec of $unset to be an array; got %s. Did you forget to wrap the key(s) in an array?", t);
      var o = e;
      return t.forEach(function (t) {
        Object.hasOwnProperty.call(o, t) && (e === i && (e = c(i)), delete e[t])
      }), e
    },
    $merge: function (t, e, n, i) {
      var o, a;
      return o = e = e, r((a = t) && "object" == typeof a, "update(): $merge expects a spec of type 'object'; got %s", a), r(o && "object" == typeof o, "update(): $merge expects a target of type 'object'; got %s", o), u(t).forEach(function (n) {
        t[n] !== e[n] && (e === i && (e = c(i)), e[n] = t[n])
      }), e
    },
    $apply: function (t, e) {
      var n;
      return r("function" == typeof (n = t), "update(): expected spec of $apply to be a function; got %s.", n), t(e)
    }
  };

  function l(t, e, n) {
    r(Array.isArray(t), "update(): expected target of %s to be an array; got %s.", n, t);
    var i = e[n];
    r(Array.isArray(i), "update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?", n, i)
  }

  function d(t) {
    r(Array.isArray(t), "update(): expected spec of $splice to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?", t)
  }
  t.exports = s(), t.exports.newContext = s
}, function (t, e, n) {
  var r = n(119),
    i = n(120),
    o = n(121),
    a = n(122),
    u = n(123);

  function c(t) {
    var e = -1,
      n = null == t ? 0 : t.length;
    for (this.clear(); ++e < n;) {
      var r = t[e];
      this.set(r[0], r[1])
    }
  }
  c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function (t, e, n) {
  var r = n(24);
  t.exports = function (t, e) {
    for (var n = t.length; n--;)
      if (r(t[n][0], e)) return n;
    return -1
  }
}, function (t, e, n) {
  var r = n(4)(Object, "create");
  t.exports = r
}, function (t, e, n) {
  var r = n(143);
  t.exports = function (t, e) {
    var n = t.__data__;
    return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
  }
}, function (t, e, n) {
  var r = n(64),
    i = n(31),
    o = n(9);
  t.exports = function (t) {
    return o(t) ? r(t) : i(t)
  }
}, function (t, e, n) {
  var r = n(159),
    i = n(5),
    o = Object.prototype,
    a = o.hasOwnProperty,
    u = o.propertyIsEnumerable,
    c = r(function () {
      return arguments
    }()) ? r : function (t) {
      return i(t) && a.call(t, "callee") && !u.call(t, "callee")
    };
  t.exports = c
}, function (t, e, n) {
  var r = n(35);
  t.exports = function (t, e, n) {
    var i = null == t ? void 0 : r(t, e);
    return void 0 === i ? n : i
  }
}, function (t, e, n) {
  var r = n(0),
    i = n(36),
    o = n(170),
    a = n(69);
  t.exports = function (t, e) {
    return r(t) ? t : i(t, e) ? [t] : o(a(t))
  }
}, function (t, e, n) {
  var r = n(8),
    i = n(5),
    o = "[object Symbol]";
  t.exports = function (t) {
    return "symbol" == typeof t || i(t) && r(t) == o
  }
}, function (t, e, n) {
  "use strict";
  n.d(e, "o", function () {
    return r
  }), n.d(e, "D", function () {
    return i
  }), n.d(e, "f", function () {
    return o
  }), n.d(e, "z", function () {
    return a
  }), n.d(e, "A", function () {
    return u
  }), n.d(e, "B", function () {
    return c
  }), n.d(e, "C", function () {
    return s
  }), n.d(e, "t", function () {
    return f
  }), n.d(e, "u", function () {
    return l
  }), n.d(e, "v", function () {
    return d
  }), n.d(e, "q", function () {
    return p
  }), n.d(e, "r", function () {
    return h
  }), n.d(e, "s", function () {
    return v
  }), n.d(e, "x", function () {
    return g
  }), n.d(e, "y", function () {
    return m
  }), n.d(e, "p", function () {
    return y
  }), n.d(e, "E", function () {
    return b
  }), n.d(e, "m", function () {
    return w
  }), n.d(e, "c", function () {
    return x
  }), n.d(e, "b", function () {
    return _
  }), n.d(e, "e", function () {
    return O
  }), n.d(e, "i", function () {
    return j
  }), n.d(e, "k", function () {
    return I
  }), n.d(e, "l", function () {
    return E
  }), n.d(e, "F", function () {
    return S
  }), n.d(e, "a", function () {
    return T
  }), n.d(e, "j", function () {
    return A
  }), n.d(e, "h", function () {
    return k
  }), n.d(e, "d", function () {
    return M
  }), n.d(e, "g", function () {
    return C
  }), n.d(e, "n", function () {
    return L
  }), n.d(e, "w", function () {
    return P
  });
  var r = "|",
    i = "data-wf-page",
    o = ".w-dyn-item",
    a = "transform",
    u = "translateX",
    c = "translateY",
    s = "translateZ",
    f = "scaleX",
    l = "scaleY",
    d = "scaleZ",
    p = "rotateX",
    h = "rotateY",
    v = "rotateZ",
    g = "skewX",
    m = "skewY",
    y = "opacity",
    b = "width",
    w = "height",
    x = "backgroundColor",
    _ = "background",
    O = "borderColor",
    j = "color",
    I = "display",
    E = "flex",
    S = "willChange",
    T = "AUTO",
    A = ",",
    k = ":",
    M = "|",
    C = "CHILDREN",
    L = "IMMEDIATE_CHILDREN",
    P = "SIBLINGS"
}, function (t, e) {
  var n;
  n = function () {
    return this
  }();
  try {
    n = n || Function("return this")() || (0, eval)("this")
  } catch (t) {
    "object" == typeof window && (n = window)
  }
  t.exports = n
}, function (t, e) {
  t.exports = function (t, e) {
    return t === e || t != t && e != e
  }
}, function (t, e, n) {
  var r = n(4)(n(2), "Map");
  t.exports = r
}, function (t, e, n) {
  var r = n(135),
    i = n(142),
    o = n(144),
    a = n(145),
    u = n(146);

  function c(t) {
    var e = -1,
      n = null == t ? 0 : t.length;
    for (this.clear(); ++e < n;) {
      var r = t[e];
      this.set(r[0], r[1])
    }
  }
  c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function (t, e, n) {
  (function (t) {
    var r = n(2),
      i = n(160),
      o = "object" == typeof e && e && !e.nodeType && e,
      a = o && "object" == typeof t && t && !t.nodeType && t,
      u = a && a.exports === o ? r.Buffer : void 0,
      c = (u ? u.isBuffer : void 0) || i;
    t.exports = c
  }).call(e, n(65)(t))
}, function (t, e) {
  var n = 9007199254740991,
    r = /^(?:0|[1-9]\d*)$/;
  t.exports = function (t, e) {
    return !!(e = null == e ? n : e) && ("number" == typeof t || r.test(t)) && t > -1 && t % 1 == 0 && t < e
  }
}, function (t, e, n) {
  var r = n(161),
    i = n(162),
    o = n(163),
    a = o && o.isTypedArray,
    u = a ? i(a) : r;
  t.exports = u
}, function (t, e) {
  var n = 9007199254740991;
  t.exports = function (t) {
    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n
  }
}, function (t, e, n) {
  var r = n(32),
    i = n(164),
    o = Object.prototype.hasOwnProperty;
  t.exports = function (t) {
    if (!r(t)) return i(t);
    var e = [];
    for (var n in Object(t)) o.call(t, n) && "constructor" != n && e.push(n);
    return e
  }
}, function (t, e) {
  var n = Object.prototype;
  t.exports = function (t) {
    var e = t && t.constructor;
    return t === ("function" == typeof e && e.prototype || n)
  }
}, function (t, e) {
  t.exports = function (t, e) {
    return function (n) {
      return t(e(n))
    }
  }
}, function (t, e, n) {
  var r = n(165),
    i = n(25),
    o = n(166),
    a = n(167),
    u = n(66),
    c = n(8),
    s = n(61),
    f = s(r),
    l = s(i),
    d = s(o),
    p = s(a),
    h = s(u),
    v = c;
  (r && "[object DataView]" != v(new r(new ArrayBuffer(1))) || i && "[object Map]" != v(new i) || o && "[object Promise]" != v(o.resolve()) || a && "[object Set]" != v(new a) || u && "[object WeakMap]" != v(new u)) && (v = function (t) {
    var e = c(t),
      n = "[object Object]" == e ? t.constructor : void 0,
      r = n ? s(n) : "";
    if (r) switch (r) {
      case f:
        return "[object DataView]";
      case l:
        return "[object Map]";
      case d:
        return "[object Promise]";
      case p:
        return "[object Set]";
      case h:
        return "[object WeakMap]"
    }
    return e
  }), t.exports = v
}, function (t, e, n) {
  var r = n(20),
    i = n(11);
  t.exports = function (t, e) {
    for (var n = 0, o = (e = r(e, t)).length; null != t && n < o;) t = t[i(e[n++])];
    return n && n == o ? t : void 0
  }
}, function (t, e, n) {
  var r = n(0),
    i = n(21),
    o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    a = /^\w*$/;
  t.exports = function (t, e) {
    if (r(t)) return !1;
    var n = typeof t;
    return !("number" != n && "symbol" != n && "boolean" != n && null != t && !i(t)) || a.test(t) || !o.test(t) || null != e && t in Object(e)
  }
}, function (t, e) {
  t.exports = function (t) {
    return t
  }
}, function (t, e, n) {
  var r = n(3),
    i = n(21),
    o = NaN,
    a = /^\s+|\s+$/g,
    u = /^[-+]0x[0-9a-f]+$/i,
    c = /^0b[01]+$/i,
    s = /^0o[0-7]+$/i,
    f = parseInt;
  t.exports = function (t) {
    if ("number" == typeof t) return t;
    if (i(t)) return o;
    if (r(t)) {
      var e = "function" == typeof t.valueOf ? t.valueOf() : t;
      t = r(e) ? e + "" : e
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = t.replace(a, "");
    var n = c.test(t);
    return n || s.test(t) ? f(t.slice(2), n ? 2 : 8) : u.test(t) ? o : +t
  }
}, function (t, e) {
  t.exports = function (t, e) {
    for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n];
    return t
  }
}, function (t, e, n) {
  "use strict";
  e.f = function () {
    return "i" + O++
  }, e.l = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      e = t.events,
      n = t.actionLists,
      r = t.site,
      i = l()(e, function (t, e) {
        var n = e.eventTypeId;
        return t[n] || (t[n] = {}), t[n][e.id] = e, t
      }, {}),
      o = r && r.mediaQueries,
      a = [];
    o ? a = o.map(function (t) {
      return t.key
    }) : (o = [], console.warn("IX2 missing mediaQueries in site data"));
    return {
      ixData: {
        events: e,
        actionLists: n,
        eventTypeMap: i,
        mediaQueries: o,
        mediaQueryKeys: a
      }
    }
  }, e.j = function (t) {
    var e = t.store,
      n = t.select,
      r = t.onChange,
      i = t.comparator,
      o = void 0 === i ? j : i,
      a = e.getState,
      u = (0, e.subscribe)(function () {
        var t = n(a());
        if (null == t) return void u();
        o(t, c) || r(c = t, e)
      }),
      c = n(a());
    return u
  }, e.c = E, e.d = function (t) {
    var e = t.element,
      n = t.actionItem;
    if (!m.c) return {};
    switch (n.actionTypeId) {
      case h.g:
      case h.d:
      case h.e:
      case h.h:
      case h.b:
        return window.getComputedStyle(e);
      default:
        return {}
    }
  }, e.g = function (t) {
    var e = t.element,
      n = t.actionItem,
      r = t.computedStyle,
      i = void 0 === r ? {} : r,
      o = t.elementApi.getStyle,
      a = n.actionTypeId,
      u = n.config;
    switch (a) {
      case h.i:
      case h.k:
      case h.j:
      case h.l:
        return function (t, e) {
          var n = T[e];
          if (!t) return n;
          var r = function (t) {
            return {
              xValue: s()(parseFloat(t[0]), n.xValue),
              yValue: s()(parseFloat(t[1]), n.yValue),
              zValue: s()(parseFloat(t[2]), n.zValue)
            }
          };
          switch (e) {
            case h.i:
              var i = [q(k, t), q(M, t), q(C, t)];
              return r(i);
            case h.k:
              var o = [q(L, t), q(P, t), q(R, t)];
              return r(o);
            case h.j:
              var a = [q(D, t), q(N, t), q(V, t)];
              return r(a);
            case h.l:
              var u = [q(z, t), q($, t)];
              return {
                xValue: s()(parseFloat(u[0]), n.xValue),
                yValue: s()(parseFloat(u[1]), n.yValue)
              };
            default:
              return
          }
        }(o(e, m.d), a);
      case h.f:
        return {
          value: s()(parseFloat(o(e, g.p)), 1)
        };
      case h.g:
        var c = o(e, g.E),
          f = o(e, g.m),
          l = void 0,
          d = void 0;
        return l = u.widthUnit === g.a ? S.test(c) ? parseFloat(c) : parseFloat(i.width) : s()(parseFloat(c), parseFloat(i.width)), d = u.heightUnit === g.a ? S.test(f) ? parseFloat(f) : parseFloat(i.height) : s()(parseFloat(f), parseFloat(i.height)), {
          widthValue: l,
          heightValue: d
        };
      case h.d:
      case h.e:
      case h.h:
        return function (t) {
          var e = t.element,
            n = t.actionTypeId,
            r = t.computedStyle,
            i = t.getStyle,
            o = x[n],
            a = i(e, o),
            u = W.test(a) ? a : r[o],
            c = q(G, u).split(g.j);
          return {
            rValue: s()(parseInt(c[0], 10), 255),
            gValue: s()(parseInt(c[1], 10), 255),
            bValue: s()(parseInt(c[2], 10), 255),
            aValue: s()(parseFloat(c[3]), 1)
          }
        }({
          element: e,
          actionTypeId: a,
          computedStyle: i,
          getStyle: o
        });
      case h.b:
        return {
          value: s()(o(e, g.k), i.display)
        };
      default:
        return
    }
  }, e.e = function (t) {
    var e = t.element,
      n = t.actionItem,
      r = t.elementApi;
    switch (n.actionTypeId) {
      case h.i:
      case h.k:
      case h.j:
      case h.l:
        var i = n.config,
          o = i.xValue,
          a = i.yValue,
          u = i.zValue;
        return {
          xValue: o,
          yValue: a,
          zValue: u
        };
      case h.g:
        var c = r.getStyle,
          s = r.setStyle,
          f = r.getProperty,
          l = n.config,
          d = l.widthUnit,
          p = l.heightUnit,
          v = n.config,
          y = v.widthValue,
          b = v.heightValue;
        if (!m.c) return {
          widthValue: y,
          heightValue: b
        };
        if (d === g.a) {
          var w = c(e, g.E);
          s(e, g.E, ""), y = f(e, "offsetWidth"), s(e, g.E, w)
        }
        if (p === g.a) {
          var x = c(e, g.m);
          s(e, g.m, ""), b = f(e, "offsetHeight"), s(e, g.m, x)
        }
        return {
          widthValue: y,
          heightValue: b
        };
      case h.d:
      case h.e:
      case h.h:
        var _ = n.config,
          O = _.rValue,
          j = _.gValue,
          I = _.bValue,
          E = _.aValue;
        return {
          rValue: O,
          gValue: j,
          bValue: I,
          aValue: E
        };
      default:
        var S = n.config.value;
        return {
          value: S
        }
    }
  }, e.m = function (t, e) {
    var n = t.isTransform,
      r = t.isStyle,
      i = t.isGeneral;
    if (n) return function (t, e) {
      var n = t.element,
        r = t.current,
        i = t.actionItem,
        o = e.getStyle,
        a = e.setStyle,
        u = o(n, m.d),
        c = function (t, e, n) {
          var r = e.actionTypeId,
            i = e.config,
            o = i.xUnit,
            a = void 0 === o ? "" : o,
            u = i.yUnit,
            c = void 0 === u ? "" : u,
            s = i.zUnit,
            f = void 0 === s ? "" : s,
            l = n.xValue,
            d = n.yValue,
            p = n.zValue,
            v = t || F;
          switch (r) {
            case h.i:
              return void 0 !== l && (v = X(v, k, g.A, l + a)), void 0 !== d && (v = X(v, M, g.B, d + c)), void 0 !== p && (v = X(v, C, g.C, p + f)), v;
            case h.k:
              return void 0 !== l && (v = X(v, L, g.t, l + a)), void 0 !== d && (v = X(v, P, g.u, d + c)), void 0 !== p && (v = X(v, R, g.v, p + f)), v;
            case h.j:
              return void 0 !== l && (v = X(v, D, g.q, l + a)), void 0 !== d && (v = X(v, N, g.r, d + c)), void 0 !== p && (v = X(v, V, g.s, p + f)), v;
            case h.l:
              return void 0 !== l && (v = X(v, z, g.x, l + a)), void 0 !== d && (v = X(v, $, g.y, d + c)), v;
            default:
              return v
          }
        }(u, i, r);
      u !== c && (U(n, m.d, e), a(n, m.d, c))
    }(t, e);
    if (r) return function (t, e) {
      var n = t.element,
        r = t.actionItem,
        i = t.current,
        o = t.styleProp,
        a = e.setStyle,
        u = r.actionTypeId,
        c = r.config;
      switch (u) {
        case h.g:
          var s = r.config,
            f = s.widthUnit,
            l = void 0 === f ? "" : f,
            d = s.heightUnit,
            p = void 0 === d ? "" : d,
            v = i.widthValue,
            m = i.heightValue;
          void 0 !== v && (l === g.a && (l = "px"), U(n, g.E, e), a(n, g.E, v + l)), void 0 !== m && (p === g.a && (p = "px"), U(n, g.m, e), a(n, g.m, m + p));
          break;
        case h.d:
        case h.e:
        case h.h:
          var y = x[u],
            b = i.rValue,
            w = i.gValue,
            _ = i.bValue,
            O = i.aValue;
          U(n, y, e), a(n, y, O >= 1 ? "rgb(" + Math.round(b) + "," + Math.round(w) + "," + Math.round(_) + ")" : "rgba(" + Math.round(b) + "," + Math.round(w) + "," + Math.round(_) + "," + O + ")");
          break;
        default:
          var j = c.unit,
            I = void 0 === j ? "" : j;
          U(n, o, e), a(n, o, i.value + I)
      }
    }(t, e);
    if (i) return function (t, e) {
      var n = t.element,
        r = t.actionItem,
        i = e.setStyle;
      switch (r.actionTypeId) {
        case h.b:
          var o = r.config.value;
          return void(o === g.l && m.c ? i(n, g.k, m.b) : i(n, g.k, o))
      }
    }(t, e)
  }, e.b = function (t) {
    var e = t.store,
      n = t.elementApi,
      r = e.getState().ixData,
      i = r.events,
      o = void 0 === i ? {} : i,
      a = r.actionLists,
      u = void 0 === a ? {} : a;
    Object.keys(o).forEach(function (t) {
      var e = o[t],
        r = e.action.config,
        i = r.actionListId,
        a = u[i];
      a && Q({
        actionList: a,
        event: e,
        elementApi: n
      })
    }), Object.keys(u).forEach(function (t) {
      Q({
        actionList: u[t],
        elementApi: n
      })
    })
  }, e.a = function (t, e) {
    var n = t.actionItem,
      r = t.element,
      i = e.setStyle,
      o = e.getStyle,
      a = n.actionTypeId;
    if (a === h.g) {
      var u = n.config;
      u.widthUnit === g.a && i(r, g.E, ""), u.heightUnit === g.a && i(r, g.m, "")
    }
    o(r, g.F) && Y({
      effect: H,
      actionTypeId: a,
      elementApi: e
    })(r)
  }, e.h = J, e.k = function (t) {
    var e = t.actionListId,
      n = t.actionItemId,
      r = t.rawData,
      i = r.actionLists[e],
      o = i.actionItemGroups,
      a = i.continuousParameterGroups,
      u = [],
      c = function (t) {
        return u.push(p()(t, {
          config: {
            $merge: {
              delay: 0,
              duration: 0
            }
          }
        })), t.id === n
      };
    return o && o.some(function (t) {
      return t.actionItems.some(c)
    }), a && a.some(function (t) {
      return t.continuousActionGroups.some(function (t) {
        return t.actionItems.some(c)
      })
    }), p()(r, {
      actionLists: {
        $set: b({}, e, {
          id: e,
          actionItemGroups: [{
            actionItems: u
          }]
        })
      }
    })
  }, e.o = function (t, e) {
    var n = e.basedOn;
    return t === v.u && (n === v.e || null == n) || t === v.h && n === v.e
  }, e.i = function (t, e) {
    return t + g.h + e
  }, e.n = function (t, e) {
    if (null == e) return !0;
    return -1 !== t.indexOf(e)
  }, e.p = function (t) {
    if ("string" == typeof t) return t;
    var e = t.id,
      n = void 0 === e ? "" : e,
      r = t.selector,
      i = void 0 === r ? "" : r,
      o = t.useEventTarget,
      a = void 0 === o ? "" : o;
    return n + g.d + i + g.d + a
  };
  var r, i, o, a = n(19),
    u = n.n(a),
    c = n(215),
    s = n.n(c),
    f = n(216),
    l = n.n(f),
    d = n(12),
    p = n.n(d),
    h = (n(55), n(41)),
    v = n(42),
    g = n(22),
    m = n(80),
    y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };

  function b(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t
  }
  var w = function (t) {
      return t.trim()
    },
    x = Object.freeze((b(r = {}, h.d, g.c), b(r, h.e, g.e), b(r, h.h, g.i), r)),
    _ = Object.freeze((b(i = {}, m.d, g.z), b(i, g.c, g.b), b(i, g.p, g.p), b(i, g.E, g.E), b(i, g.m, g.m), i)),
    O = 1;
  var j = function (t, e) {
    return t === e
  };

  function I(t) {
    var e = void 0 === t ? "undefined" : y(t);
    return "string" === e ? {
      id: t
    } : null != t && "object" === e ? {
      id: t.id,
      selector: t.selector,
      selectorGuids: t.selectorGuids,
      appliesTo: t.appliesTo,
      useEventTarget: t.useEventTarget
    } : {}
  }

  function E(t) {
    var e = t.config,
      n = t.event,
      r = t.eventTarget,
      i = t.elementRoot,
      o = t.elementApi;
    if (!o) throw new Error("IX2 missing elementApi");
    var a = o.getValidDocument,
      c = o.getQuerySelector,
      s = o.queryDocument,
      f = o.getChildElements,
      l = o.getSiblingElements,
      d = o.matchSelector,
      p = o.elementContains,
      h = o.isSiblingNode,
      y = e.target;
    if (!y) return [];
    var b = I(y),
      w = b.id,
      x = b.selector,
      _ = b.selectorGuids,
      O = b.appliesTo,
      j = b.useEventTarget;
    if (O === v.o) {
      var E = a(w);
      return E ? [E] : []
    }
    var S = u()(n, "action.config.affectedElements", {})[w || x] || {},
      T = Boolean(S.id || S.selector),
      A = void 0,
      k = void 0,
      M = void 0,
      C = n && c(I(n.target));
    if (T ? (A = S.limitAffectedElements, k = C, M = c(S)) : k = M = c({
        id: w,
        selector: x,
        selectorGuids: _
      }), n && j) {
      var L = r && M ? [r] : s(C);
      if (M) {
        if (j === g.g) return s(M).filter(function (t) {
          return L.some(function (e) {
            return p(e, t)
          })
        });
        if (j === g.w) return s(M).filter(function (t) {
          return L.some(function (e) {
            return h(e, t)
          })
        })
      }
      return L
    }
    return null == k || null == M ? [] : m.c && i ? s(M).filter(function (t) {
      return i.contains(t)
    }) : A === g.g ? s(k, M) : A === g.n ? f(s(k)).filter(d(M)) : A === g.w ? l(s(k)).filter(d(M)) : s(M)
  }
  var S = /px/;
  var T = (b(o = {}, h.i, Object.freeze({
      xValue: 0,
      yValue: 0,
      zValue: 0
    })), b(o, h.k, Object.freeze({
      xValue: 1,
      yValue: 1,
      zValue: 1
    })), b(o, h.j, Object.freeze({
      xValue: 0,
      yValue: 0,
      zValue: 0
    })), b(o, h.l, Object.freeze({
      xValue: 0,
      yValue: 0
    })), o),
    A = "\\(([^)]+)\\)",
    k = RegExp("" + g.A + A),
    M = RegExp("" + g.B + A),
    C = RegExp("" + g.C + A),
    L = RegExp("" + g.t + A),
    P = RegExp("" + g.u + A),
    R = RegExp("" + g.v + A),
    D = RegExp("" + g.q + A),
    N = RegExp("" + g.r + A),
    V = RegExp("" + g.s + A),
    z = RegExp("" + g.x + A),
    $ = RegExp("" + g.y + A),
    F = Object.keys(T).map(function (t) {
      var e = T[t],
        n = e.xValue,
        r = e.yValue,
        i = e.zValue;
      switch (t) {
        case h.i:
          return B([
            [g.A, n],
            [g.B, r],
            [g.C, i]
          ]);
        case h.k:
          return B([
            [g.t, n],
            [g.u, r],
            [g.v, i]
          ]);
        case h.j:
          return B([
            [g.q, n],
            [g.r, r],
            [g.s, i]
          ]);
        case h.l:
          return B([
            [g.x, n],
            [g.y, r]
          ]);
        default:
          return ""
      }
    }).join(" ");

  function B(t) {
    return t.map(function (t) {
      return t[0] + "(" + t[1] + ")"
    }).join(" ")
  }

  function q(t, e) {
    var n = t.exec(e);
    return n ? n[1] : ""
  }

  function X(t, e, n, r) {
    return t.replace(e, n + "(" + r + ")")
  }
  var W = /^rgb/,
    G = RegExp("rgba?\\(([^)]+)\\)");

  function U(t, e, n) {
    if (m.c) {
      var r = _[e];
      if (r) {
        var i = n.getStyle,
          o = n.setStyle,
          a = i(t, g.F);
        if (a) {
          var u = a.split(g.j).map(w); - 1 === u.indexOf(r) && o(t, g.F, u.concat(r).join(g.j))
        } else o(t, g.F, r)
      }
    }
  }

  function H(t, e, n) {
    if (m.c) {
      var r = _[e];
      if (r) {
        var i = n.getStyle,
          o = n.setStyle,
          a = i(t, g.F);
        a && -1 !== a.indexOf(r) && o(t, g.F, a.split(g.j).map(w).filter(function (t) {
          return t !== r
        }).join(g.j))
      }
    }
  }

  function Q(t) {
    var e = t.actionList,
      n = void 0 === e ? {} : e,
      r = t.event,
      i = t.elementApi,
      o = n.actionItemGroups,
      a = n.continuousParameterGroups;
    o && o.forEach(function (t) {
      K({
        actionGroup: t,
        event: r,
        elementApi: i
      })
    }), a && a.forEach(function (t) {
      t.continuousActionGroups.forEach(function (t) {
        K({
          actionGroup: t,
          event: r,
          elementApi: i
        })
      })
    })
  }

  function K(t) {
    var e = t.actionGroup,
      n = t.event,
      r = t.elementApi;
    e.actionItems.forEach(function (t) {
      var e = t.actionTypeId,
        i = t.config,
        o = Y({
          effect: Z,
          actionTypeId: e,
          elementApi: r
        });
      E({
        config: i,
        event: n,
        elementApi: r
      }).forEach(o)
    })
  }
  var Y = function (t) {
    var e = t.effect,
      n = t.actionTypeId,
      r = t.elementApi;
    return function (t) {
      switch (n) {
        case h.i:
        case h.k:
        case h.j:
        case h.l:
          e(t, m.d, r);
          break;
        case h.f:
          e(t, g.p, r);
          break;
        case h.g:
          e(t, g.E, r), e(t, g.m, r);
          break;
        case h.d:
        case h.e:
        case h.h:
          e(t, x[n], r);
          break;
        case h.b:
          e(t, g.k, r)
      }
    }
  };

  function Z(t, e, n) {
    var r = n.setStyle;
    H(t, e, n), r(t, e, "")
  }

  function J(t) {
    var e = 0,
      n = 0;
    return t.forEach(function (t, r) {
      var i = t.config,
        o = i.delay + i.duration;
      o >= e && (e = o, n = r)
    }), n
  }
}, function (t, e, n) {
  "use strict";
  n.d(e, "i", function () {
    return r
  }), n.d(e, "k", function () {
    return i
  }), n.d(e, "j", function () {
    return o
  }), n.d(e, "l", function () {
    return a
  }), n.d(e, "f", function () {
    return u
  }), n.d(e, "g", function () {
    return c
  }), n.d(e, "d", function () {
    return s
  }), n.d(e, "e", function () {
    return f
  }), n.d(e, "h", function () {
    return l
  }), n.d(e, "b", function () {
    return d
  }), n.d(e, "a", function () {
    return p
  }), n.d(e, "c", function () {
    return h
  });
  var r = "TRANSFORM_MOVE",
    i = "TRANSFORM_SCALE",
    o = "TRANSFORM_ROTATE",
    a = "TRANSFORM_SKEW",
    u = "STYLE_OPACITY",
    c = "STYLE_SIZE",
    s = "STYLE_BACKGROUND_COLOR",
    f = "STYLE_BORDER",
    l = "STYLE_TEXT_COLOR",
    d = "GENERAL_DISPLAY",
    p = "GENERAL_CONTINUOUS_ACTION",
    h = "GENERAL_START_ACTION"
}, function (t, e, n) {
  "use strict";
  n.d(e, "f", function () {
    return r
  }), n.d(e, "k", function () {
    return i
  }), n.d(e, "g", function () {
    return o
  }), n.d(e, "l", function () {
    return a
  }), n.d(e, "j", function () {
    return u
  }), n.d(e, "i", function () {
    return c
  }), n.d(e, "h", function () {
    return s
  }), n.d(e, "v", function () {
    return f
  }), n.d(e, "w", function () {
    return l
  }), n.d(e, "u", function () {
    return d
  }), n.d(e, "z", function () {
    return p
  }), n.d(e, "A", function () {
    return h
  }), n.d(e, "n", function () {
    return v
  }), n.d(e, "m", function () {
    return g
  }), n.d(e, "x", function () {
    return m
  }), n.d(e, "y", function () {
    return y
  }), n.d(e, "d", function () {
    return b
  }), n.d(e, "c", function () {
    return w
  }), n.d(e, "a", function () {
    return x
  }), n.d(e, "b", function () {
    return _
  }), n.d(e, "t", function () {
    return O
  }), n.d(e, "p", function () {
    return j
  }), n.d(e, "s", function () {
    return I
  }), n.d(e, "r", function () {
    return E
  }), n.d(e, "q", function () {
    return S
  }), n.d(e, "e", function () {
    return T
  }), n.d(e, "B", function () {
    return A
  }), n.d(e, "o", function () {
    return k
  });
  var r = "MOUSE_CLICK",
    i = "MOUSE_SECOND_CLICK",
    o = "MOUSE_DOWN",
    a = "MOUSE_UP",
    u = "MOUSE_OVER",
    c = "MOUSE_OUT",
    s = "MOUSE_MOVE",
    f = "SCROLL_INTO_VIEW",
    l = "SCROLL_OUT_OF_VIEW",
    d = "SCROLLING_IN_VIEW",
    p = "TAB_ACTIVE",
    h = "TAB_INACTIVE",
    v = "NAVBAR_OPEN",
    g = "NAVBAR_CLOSE",
    m = "SLIDER_ACTIVE",
    y = "SLIDER_INACTIVE",
    b = "DROPDOWN_OPEN",
    w = "DROPDOWN_CLOSE",
    x = "COMPONENT_ACTIVE",
    _ = "COMPONENT_INACTIVE",
    O = "PAGE_START",
    j = "PAGE_FINISH",
    I = "PAGE_SCROLL_UP",
    E = "PAGE_SCROLL_DOWN",
    S = "PAGE_SCROLL",
    T = "ELEMENT",
    A = "VIEWPORT",
    k = "PAGE"
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), n.d(e, "rawDataImported", function () {
    return u
  }), n.d(e, "sessionInitialized", function () {
    return c
  }), n.d(e, "sessionStarted", function () {
    return s
  }), n.d(e, "sessionStopped", function () {
    return f
  }), n.d(e, "previewRequested", function () {
    return l
  }), n.d(e, "playbackRequested", function () {
    return d
  }), n.d(e, "stopRequested", function () {
    return p
  }), n.d(e, "clearRequested", function () {
    return h
  }), n.d(e, "eventListenerAdded", function () {
    return v
  }), n.d(e, "eventStateChanged", function () {
    return g
  }), n.d(e, "animationFrameChanged", function () {
    return m
  }), n.d(e, "parameterChanged", function () {
    return y
  }), n.d(e, "instanceAdded", function () {
    return b
  }), n.d(e, "instanceStarted", function () {
    return w
  }), n.d(e, "instanceRemoved", function () {
    return x
  }), n.d(e, "actionListPlaybackChanged", function () {
    return _
  }), n.d(e, "viewportWidthChanged", function () {
    return O
  });
  var r = n(6),
    i = n(41),
    o = n(40),
    a = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
      }
      return t
    },
    u = function (t) {
      return {
        type: r.l,
        payload: a({}, Object(o.l)(t))
      }
    },
    c = function (t) {
      var e = t.hasBoundaryNodes;
      return {
        type: r.m,
        payload: {
          hasBoundaryNodes: e
        }
      }
    },
    s = function () {
      return {
        type: r.n,
        payload: {}
      }
    },
    f = function () {
      return {
        type: r.o,
        payload: {}
      }
    },
    l = function (t) {
      var e = t.rawData;
      return {
        type: r.k,
        payload: {
          rawData: e
        }
      }
    },
    d = function (t) {
      var e = t.actionTypeId,
        n = void 0 === e ? i.c : e,
        o = t.actionListId,
        a = t.actionItemId,
        u = t.eventId,
        c = t.allowEvents,
        s = t.immediate,
        f = t.verbose,
        l = t.rawData;
      return {
        type: r.j,
        payload: {
          actionTypeId: n,
          actionListId: o,
          actionItemId: a,
          eventId: u,
          allowEvents: c,
          immediate: s,
          verbose: f,
          rawData: l
        }
      }
    },
    p = function (t) {
      return {
        type: r.p,
        payload: {
          actionListId: t
        }
      }
    },
    h = function () {
      return {
        type: r.c,
        payload: {}
      }
    },
    v = function (t, e) {
      return {
        type: r.d,
        payload: {
          target: t,
          listenerParams: e
        }
      }
    },
    g = function (t, e) {
      return {
        type: r.e,
        payload: {
          stateKey: t,
          newState: e
        }
      }
    },
    m = function (t, e) {
      return {
        type: r.b,
        payload: {
          now: t,
          parameters: e
        }
      }
    },
    y = function (t, e) {
      return {
        type: r.i,
        payload: {
          key: t,
          value: e
        }
      }
    },
    b = function (t) {
      return {
        type: r.f,
        payload: a({}, t)
      }
    },
    w = function (t) {
      return {
        type: r.h,
        payload: {
          instanceId: t
        }
      }
    },
    x = function (t) {
      return {
        type: r.g,
        payload: {
          instanceId: t
        }
      }
    },
    _ = function (t) {
      var e = t.actionListId,
        n = t.isPlaying;
      return {
        type: r.a,
        payload: {
          actionListId: e,
          isPlaying: n
        }
      }
    },
    O = function (t) {
      var e = t.width,
        n = t.mediaQueries;
      return {
        type: r.q,
        payload: {
          width: e,
          mediaQueries: n
        }
      }
    }
}, function (t, e, n) {
  var r = n(81),
    i = n(45);

  function o(t, e) {
    this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = void 0
  }
  o.prototype = r(i.prototype), o.prototype.constructor = o, t.exports = o
}, function (t, e) {
  t.exports = function () {}
}, function (t, e, n) {
  var r = n(81),
    i = n(45),
    o = 4294967295;

  function a(t) {
    this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = o, this.__views__ = []
  }
  a.prototype = r(i.prototype), a.prototype.constructor = a, t.exports = a
}, function (t, e) {
  var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
  };
  window.tram = function (t) {
    function e(t, e) {
      return (new N.Bare).init(t, e)
    }

    function r(t) {
      return t.replace(/[A-Z]/g, function (t) {
        return "-" + t.toLowerCase()
      })
    }

    function i(t) {
      var e = parseInt(t.slice(1), 16);
      return [e >> 16 & 255, e >> 8 & 255, 255 & e]
    }

    function o(t, e, n) {
      return "#" + (1 << 24 | t << 16 | e << 8 | n).toString(16).slice(1)
    }

    function a() {}

    function u(t, e, n) {
      s("Units do not match [" + t + "]: " + e + ", " + n)
    }

    function c(t, e, n) {
      if (void 0 !== e && (n = e), void 0 === t) return n;
      var r = n;
      return Y.test(t) || !Z.test(t) ? r = parseInt(t, 10) : Z.test(t) && (r = 1e3 * parseFloat(t)), 0 > r && (r = 0), r == r ? r : n
    }

    function s(t) {
      W.debug && window && window.console.warn(t)
    }
    var f = function (t, e, r) {
        function i(t) {
          return "object" == (void 0 === t ? "undefined" : n(t))
        }

        function o(t) {
          return "function" == typeof t
        }

        function a() {}
        return function n(u, c) {
          function s() {
            var t = new f;
            return o(t.init) && t.init.apply(t, arguments), t
          }

          function f() {}
          c === r && (c = u, u = Object), s.Bare = f;
          var l, d = a[t] = u[t],
            p = f[t] = s[t] = new a;
          return p.constructor = s, s.mixin = function (e) {
            return f[t] = s[t] = n(s, e)[t], s
          }, s.open = function (t) {
            if (l = {}, o(t) ? l = t.call(s, p, d, s, u) : i(t) && (l = t), i(l))
              for (var n in l) e.call(l, n) && (p[n] = l[n]);
            return o(p.init) || (p.init = u), s
          }, s.open(c)
        }
      }("prototype", {}.hasOwnProperty),
      l = {
        ease: ["ease", function (t, e, n, r) {
          var i = (t /= r) * t,
            o = i * t;
          return e + n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + .25 * t)
        }],
        "ease-in": ["ease-in", function (t, e, n, r) {
          var i = (t /= r) * t,
            o = i * t;
          return e + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i)
        }],
        "ease-out": ["ease-out", function (t, e, n, r) {
          var i = (t /= r) * t,
            o = i * t;
          return e + n * (.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * t)
        }],
        "ease-in-out": ["ease-in-out", function (t, e, n, r) {
          var i = (t /= r) * t,
            o = i * t;
          return e + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i)
        }],
        linear: ["linear", function (t, e, n, r) {
          return n * t / r + e
        }],
        "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function (t, e, n, r) {
          return n * (t /= r) * t + e
        }],
        "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function (t, e, n, r) {
          return -n * (t /= r) * (t - 2) + e
        }],
        "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function (t, e, n, r) {
          return (t /= r / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e
        }],
        "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function (t, e, n, r) {
          return n * (t /= r) * t * t + e
        }],
        "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function (t, e, n, r) {
          return n * ((t = t / r - 1) * t * t + 1) + e
        }],
        "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function (t, e, n, r) {
          return (t /= r / 2) < 1 ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e
        }],
        "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function (t, e, n, r) {
          return n * (t /= r) * t * t * t + e
        }],
        "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function (t, e, n, r) {
          return -n * ((t = t / r - 1) * t * t * t - 1) + e
        }],
        "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function (t, e, n, r) {
          return (t /= r / 2) < 1 ? n / 2 * t * t * t * t + e : -n / 2 * ((t -= 2) * t * t * t - 2) + e
        }],
        "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function (t, e, n, r) {
          return n * (t /= r) * t * t * t * t + e
        }],
        "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function (t, e, n, r) {
          return n * ((t = t / r - 1) * t * t * t * t + 1) + e
        }],
        "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function (t, e, n, r) {
          return (t /= r / 2) < 1 ? n / 2 * t * t * t * t * t + e : n / 2 * ((t -= 2) * t * t * t * t + 2) + e
        }],
        "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function (t, e, n, r) {
          return -n * Math.cos(t / r * (Math.PI / 2)) + n + e
        }],
        "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function (t, e, n, r) {
          return n * Math.sin(t / r * (Math.PI / 2)) + e
        }],
        "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function (t, e, n, r) {
          return -n / 2 * (Math.cos(Math.PI * t / r) - 1) + e
        }],
        "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function (t, e, n, r) {
          return 0 === t ? e : n * Math.pow(2, 10 * (t / r - 1)) + e
        }],
        "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function (t, e, n, r) {
          return t === r ? e + n : n * (1 - Math.pow(2, -10 * t / r)) + e
        }],
        "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function (t, e, n, r) {
          return 0 === t ? e : t === r ? e + n : (t /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : n / 2 * (2 - Math.pow(2, -10 * --t)) + e
        }],
        "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function (t, e, n, r) {
          return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + e
        }],
        "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function (t, e, n, r) {
          return n * Math.sqrt(1 - (t = t / r - 1) * t) + e
        }],
        "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function (t, e, n, r) {
          return (t /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + e : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
        }],
        "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function (t, e, n, r, i) {
          return void 0 === i && (i = 1.70158), n * (t /= r) * t * ((i + 1) * t - i) + e
        }],
        "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function (t, e, n, r, i) {
          return void 0 === i && (i = 1.70158), n * ((t = t / r - 1) * t * ((i + 1) * t + i) + 1) + e
        }],
        "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function (t, e, n, r, i) {
          return void 0 === i && (i = 1.70158), (t /= r / 2) < 1 ? n / 2 * t * t * ((1 + (i *= 1.525)) * t - i) + e : n / 2 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) + e
        }]
      },
      d = {
        "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
        "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
        "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
      },
      p = document,
      h = window,
      v = "bkwld-tram",
      g = /[\-\.0-9]/g,
      m = /[A-Z]/,
      y = "number",
      b = /^(rgb|#)/,
      w = /(em|cm|mm|in|pt|pc|px)$/,
      x = /(em|cm|mm|in|pt|pc|px|%)$/,
      _ = /(deg|rad|turn)$/,
      O = "unitless",
      j = /(all|none) 0s ease 0s/,
      I = /^(width|height)$/,
      E = " ",
      S = p.createElement("a"),
      T = ["Webkit", "Moz", "O", "ms"],
      A = ["-webkit-", "-moz-", "-o-", "-ms-"],
      k = function (t) {
        if (t in S.style) return {
          dom: t,
          css: t
        };
        var e, n, r = "",
          i = t.split("-");
        for (e = 0; e < i.length; e++) r += i[e].charAt(0).toUpperCase() + i[e].slice(1);
        for (e = 0; e < T.length; e++)
          if ((n = T[e] + r) in S.style) return {
            dom: n,
            css: A[e] + t
          }
      },
      M = e.support = {
        bind: Function.prototype.bind,
        transform: k("transform"),
        transition: k("transition"),
        backface: k("backface-visibility"),
        timing: k("transition-timing-function")
      };
    if (M.transition) {
      var C = M.timing.dom;
      if (S.style[C] = l["ease-in-back"][0], !S.style[C])
        for (var L in d) l[L][0] = d[L]
    }
    var P = e.frame = function () {
        var t = h.requestAnimationFrame || h.webkitRequestAnimationFrame || h.mozRequestAnimationFrame || h.oRequestAnimationFrame || h.msRequestAnimationFrame;
        return t && M.bind ? t.bind(h) : function (t) {
          h.setTimeout(t, 16)
        }
      }(),
      R = e.now = function () {
        var t = h.performance,
          e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
        return e && M.bind ? e.bind(t) : Date.now || function () {
          return +new Date
        }
      }(),
      D = f(function (e) {
        function i(t, e) {
          var n = function (t) {
              for (var e = -1, n = t ? t.length : 0, r = []; ++e < n;) {
                var i = t[e];
                i && r.push(i)
              }
              return r
            }(("" + t).split(E)),
            r = n[0];
          e = e || {};
          var i = Q[r];
          if (!i) return s("Unsupported property: " + r);
          if (!e.weak || !this.props[r]) {
            var o = i[0],
              a = this.props[r];
            return a || (a = this.props[r] = new o.Bare), a.init(this.$el, n, i, e), a
          }
        }

        function o(t, e, r) {
          if (t) {
            var o = void 0 === t ? "undefined" : n(t);
            if (e || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == o && e) return this.timer = new q({
              duration: t,
              context: this,
              complete: a
            }), void(this.active = !0);
            if ("string" == o && e) {
              switch (t) {
                case "hide":
                  f.call(this);
                  break;
                case "stop":
                  u.call(this);
                  break;
                case "redraw":
                  l.call(this);
                  break;
                default:
                  i.call(this, t, r && r[1])
              }
              return a.call(this)
            }
            if ("function" == o) return void t.call(this, this);
            if ("object" == o) {
              var s = 0;
              p.call(this, t, function (t, e) {
                t.span > s && (s = t.span), t.stop(), t.animate(e)
              }, function (t) {
                "wait" in t && (s = c(t.wait, 0))
              }), d.call(this), s > 0 && (this.timer = new q({
                duration: s,
                context: this
              }), this.active = !0, e && (this.timer.complete = a));
              var h = this,
                v = !1,
                g = {};
              P(function () {
                p.call(h, t, function (t) {
                  t.active && (v = !0, g[t.name] = t.nextStyle)
                }), v && h.$el.css(g)
              })
            }
          }
        }

        function a() {
          if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
            var t = this.queue.shift();
            o.call(this, t.options, !0, t.args)
          }
        }

        function u(t) {
          var e;
          this.timer && this.timer.destroy(), this.queue = [], this.active = !1, "string" == typeof t ? (e = {})[t] = 1 : e = "object" == (void 0 === t ? "undefined" : n(t)) && null != t ? t : this.props, p.call(this, e, h), d.call(this)
        }

        function f() {
          u.call(this), this.el.style.display = "none"
        }

        function l() {
          this.el.offsetHeight
        }

        function d() {
          var t, e, n = [];
          for (t in this.upstream && n.push(this.upstream), this.props)(e = this.props[t]).active && n.push(e.string);
          n = n.join(","), this.style !== n && (this.style = n, this.el.style[M.transition.dom] = n)
        }

        function p(t, e, n) {
          var o, a, u, c, s = e !== h,
            f = {};
          for (o in t) u = t[o], o in K ? (f.transform || (f.transform = {}), f.transform[o] = u) : (m.test(o) && (o = r(o)), o in Q ? f[o] = u : (c || (c = {}), c[o] = u));
          for (o in f) {
            if (u = f[o], !(a = this.props[o])) {
              if (!s) continue;
              a = i.call(this, o)
            }
            e.call(this, a, u)
          }
          n && c && n.call(this, c)
        }

        function h(t) {
          t.stop()
        }

        function g(t, e) {
          t.set(e)
        }

        function y(t) {
          this.$el.css(t)
        }

        function b(t, n) {
          e[t] = function () {
            return this.children ? function (t, e) {
              var n, r = this.children.length;
              for (n = 0; r > n; n++) t.apply(this.children[n], e);
              return this
            }.call(this, n, arguments) : (this.el && n.apply(this, arguments), this)
          }
        }
        e.init = function (e) {
          if (this.$el = t(e), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, W.keepInherited && !W.fallback) {
            var n = U(this.el, "transition");
            n && !j.test(n) && (this.upstream = n)
          }
          M.backface && W.hideBackface && G(this.el, M.backface.css, "hidden")
        }, b("add", i), b("start", o), b("wait", function (t) {
          t = c(t, 0), this.active ? this.queue.push({
            options: t
          }) : (this.timer = new q({
            duration: t,
            context: this,
            complete: a
          }), this.active = !0)
        }), b("then", function (t) {
          return this.active ? (this.queue.push({
            options: t,
            args: arguments
          }), void(this.timer.complete = a)) : s("No active transition timer. Use start() or wait() before then().")
        }), b("next", a), b("stop", u), b("set", function (t) {
          u.call(this, t), p.call(this, t, g, y)
        }), b("show", function (t) {
          "string" != typeof t && (t = "block"), this.el.style.display = t
        }), b("hide", f), b("redraw", l), b("destroy", function () {
          u.call(this), t.removeData(this.el, v), this.$el = this.el = null
        })
      }),
      N = f(D, function (e) {
        function n(e, n) {
          var r = t.data(e, v) || t.data(e, v, new D.Bare);
          return r.el || r.init(e), n ? r.start(n) : r
        }
        e.init = function (e, r) {
          var i = t(e);
          if (!i.length) return this;
          if (1 === i.length) return n(i[0], r);
          var o = [];
          return i.each(function (t, e) {
            o.push(n(e, r))
          }), this.children = o, this
        }
      }),
      V = f(function (t) {
        function e() {
          var t = this.get();
          this.update("auto");
          var e = this.get();
          return this.update(t), e
        }

        function r(t) {
          var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
          return (e ? o(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
        }
        var i = 500,
          a = "ease",
          u = 0;
        t.init = function (t, e, n, r) {
          this.$el = t, this.el = t[0];
          var o = e[0];
          n[2] && (o = n[2]), H[o] && (o = H[o]), this.name = o, this.type = n[1], this.duration = c(e[1], this.duration, i), this.ease = function (t, e, n) {
            return void 0 !== e && (n = e), t in l ? t : n
          }(e[2], this.ease, a), this.delay = c(e[3], this.delay, u), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = I.test(this.name), this.unit = r.unit || this.unit || W.defaultUnit, this.angle = r.angle || this.angle || W.defaultAngle, W.fallback || r.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + E + this.duration + "ms" + ("ease" != this.ease ? E + l[this.ease][0] : "") + (this.delay ? E + this.delay + "ms" : ""))
        }, t.set = function (t) {
          t = this.convert(t, this.type), this.update(t), this.redraw()
        }, t.transition = function (t) {
          this.active = !0, t = this.convert(t, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == t && (t = e.call(this))), this.nextStyle = t
        }, t.fallback = function (t) {
          var n = this.el.style[this.name] || this.convert(this.get(), this.type);
          t = this.convert(t, this.type), this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == t && (t = e.call(this))), this.tween = new B({
            from: n,
            to: t,
            duration: this.duration,
            delay: this.delay,
            ease: this.ease,
            update: this.update,
            context: this
          })
        }, t.get = function () {
          return U(this.el, this.name)
        }, t.update = function (t) {
          G(this.el, this.name, t)
        }, t.stop = function () {
          (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, G(this.el, this.name, this.get()));
          var t = this.tween;
          t && t.context && t.destroy()
        }, t.convert = function (t, e) {
          if ("auto" == t && this.auto) return t;
          var i, o = "number" == typeof t,
            a = "string" == typeof t;
          switch (e) {
            case y:
              if (o) return t;
              if (a && "" === t.replace(g, "")) return +t;
              i = "number(unitless)";
              break;
            case b:
              if (a) {
                if ("" === t && this.original) return this.original;
                if (e.test(t)) return "#" == t.charAt(0) && 7 == t.length ? t : r(t)
              }
              i = "hex or rgb string";
              break;
            case w:
              if (o) return t + this.unit;
              if (a && e.test(t)) return t;
              i = "number(px) or string(unit)";
              break;
            case x:
              if (o) return t + this.unit;
              if (a && e.test(t)) return t;
              i = "number(px) or string(unit or %)";
              break;
            case _:
              if (o) return t + this.angle;
              if (a && e.test(t)) return t;
              i = "number(deg) or string(angle)";
              break;
            case O:
              if (o) return t;
              if (a && x.test(t)) return t;
              i = "number(unitless) or string(unit or %)"
          }
          return function (t, e) {
            s("Type warning: Expected: [" + t + "] Got: [" + (void 0 === e ? "undefined" : n(e)) + "] " + e)
          }(i, t), t
        }, t.redraw = function () {
          this.el.offsetHeight
        }
      }),
      z = f(V, function (t, e) {
        t.init = function () {
          e.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), b))
        }
      }),
      $ = f(V, function (t, e) {
        t.init = function () {
          e.init.apply(this, arguments), this.animate = this.fallback
        }, t.get = function () {
          return this.$el[this.name]()
        }, t.update = function (t) {
          this.$el[this.name](t)
        }
      }),
      F = f(V, function (t, e) {
        function n(t, e) {
          var n, r, i, o, a;
          for (n in t) i = (o = K[n])[0], r = o[1] || n, a = this.convert(t[n], i), e.call(this, r, a, i)
        }
        t.init = function () {
          e.init.apply(this, arguments), this.current || (this.current = {}, K.perspective && W.perspective && (this.current.perspective = W.perspective, G(this.el, this.name, this.style(this.current)), this.redraw()))
        }, t.set = function (t) {
          n.call(this, t, function (t, e) {
            this.current[t] = e
          }), G(this.el, this.name, this.style(this.current)), this.redraw()
        }, t.transition = function (t) {
          var e = this.values(t);
          this.tween = new X({
            current: this.current,
            values: e,
            duration: this.duration,
            delay: this.delay,
            ease: this.ease
          });
          var n, r = {};
          for (n in this.current) r[n] = n in e ? e[n] : this.current[n];
          this.active = !0, this.nextStyle = this.style(r)
        }, t.fallback = function (t) {
          var e = this.values(t);
          this.tween = new X({
            current: this.current,
            values: e,
            duration: this.duration,
            delay: this.delay,
            ease: this.ease,
            update: this.update,
            context: this
          })
        }, t.update = function () {
          G(this.el, this.name, this.style(this.current))
        }, t.style = function (t) {
          var e, n = "";
          for (e in t) n += e + "(" + t[e] + ") ";
          return n
        }, t.values = function (t) {
          var e, r = {};
          return n.call(this, t, function (t, n, i) {
            r[t] = n, void 0 === this.current[t] && (e = 0, ~t.indexOf("scale") && (e = 1), this.current[t] = this.convert(e, i))
          }), r
        }
      }),
      B = f(function (e) {
        function n() {
          var t, e, r, i = c.length;
          if (i)
            for (P(n), e = R(), t = i; t--;)(r = c[t]) && r.render(e)
        }
        var r = {
          ease: l.ease[1],
          from: 0,
          to: 1
        };
        e.init = function (t) {
          this.duration = t.duration || 0, this.delay = t.delay || 0;
          var e = t.ease || r.ease;
          l[e] && (e = l[e][1]), "function" != typeof e && (e = r.ease), this.ease = e, this.update = t.update || a, this.complete = t.complete || a, this.context = t.context || this, this.name = t.name;
          var n = t.from,
            i = t.to;
          void 0 === n && (n = r.from), void 0 === i && (i = r.to), this.unit = t.unit || "", "number" == typeof n && "number" == typeof i ? (this.begin = n, this.change = i - n) : this.format(i, n), this.value = this.begin + this.unit, this.start = R(), !1 !== t.autoplay && this.play()
        }, e.play = function () {
          var t;
          this.active || (this.start || (this.start = R()), this.active = !0, t = this, 1 === c.push(t) && P(n))
        }, e.stop = function () {
          var e, n, r;
          this.active && (this.active = !1, e = this, (r = t.inArray(e, c)) >= 0 && (n = c.slice(r + 1), c.length = r, n.length && (c = c.concat(n))))
        }, e.render = function (t) {
          var e, n = t - this.start;
          if (this.delay) {
            if (n <= this.delay) return;
            n -= this.delay
          }
          if (n < this.duration) {
            var r = this.ease(n, 0, 1, this.duration);
            return e = this.startRGB ? function (t, e, n) {
              return o(t[0] + n * (e[0] - t[0]), t[1] + n * (e[1] - t[1]), t[2] + n * (e[2] - t[2]))
            }(this.startRGB, this.endRGB, r) : function (t) {
              return Math.round(t * s) / s
            }(this.begin + r * this.change), this.value = e + this.unit, void this.update.call(this.context, this.value)
          }
          e = this.endHex || this.begin + this.change, this.value = e + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
        }, e.format = function (t, e) {
          if (e += "", "#" == (t += "").charAt(0)) return this.startRGB = i(e), this.endRGB = i(t), this.endHex = t, this.begin = 0, void(this.change = 1);
          if (!this.unit) {
            var n = e.replace(g, "");
            n !== t.replace(g, "") && u("tween", e, t), this.unit = n
          }
          e = parseFloat(e), t = parseFloat(t), this.begin = this.value = e, this.change = t - e
        }, e.destroy = function () {
          this.stop(), this.context = null, this.ease = this.update = this.complete = a
        };
        var c = [],
          s = 1e3
      }),
      q = f(B, function (t) {
        t.init = function (t) {
          this.duration = t.duration || 0, this.complete = t.complete || a, this.context = t.context, this.play()
        }, t.render = function (t) {
          t - this.start < this.duration || (this.complete.call(this.context), this.destroy())
        }
      }),
      X = f(B, function (t, e) {
        t.init = function (t) {
          var e, n;
          for (e in this.context = t.context, this.update = t.update, this.tweens = [], this.current = t.current, t.values) n = t.values[e], this.current[e] !== n && this.tweens.push(new B({
            name: e,
            from: this.current[e],
            to: n,
            duration: t.duration,
            delay: t.delay,
            ease: t.ease,
            autoplay: !1
          }));
          this.play()
        }, t.render = function (t) {
          var e, n, r = !1;
          for (e = this.tweens.length; e--;)(n = this.tweens[e]).context && (n.render(t), this.current[n.name] = n.value, r = !0);
          return r ? void(this.update && this.update.call(this.context)) : this.destroy()
        }, t.destroy = function () {
          if (e.destroy.call(this), this.tweens) {
            var t;
            for (t = this.tweens.length; t--;) this.tweens[t].destroy();
            this.tweens = null, this.current = null
          }
        }
      }),
      W = e.config = {
        debug: !1,
        defaultUnit: "px",
        defaultAngle: "deg",
        keepInherited: !1,
        hideBackface: !1,
        perspective: "",
        fallback: !M.transition,
        agentTests: []
      };
    e.fallback = function (t) {
      if (!M.transition) return W.fallback = !0;
      W.agentTests.push("(" + t + ")");
      var e = new RegExp(W.agentTests.join("|"), "i");
      W.fallback = e.test(navigator.userAgent)
    }, e.fallback("6.0.[2-5] Safari"), e.tween = function (t) {
      return new B(t)
    }, e.delay = function (t, e, n) {
      return new q({
        complete: e,
        duration: t,
        context: n
      })
    }, t.fn.tram = function (t) {
      return e.call(null, this, t)
    };
    var G = t.style,
      U = t.css,
      H = {
        transform: M.transform && M.transform.css
      },
      Q = {
        color: [z, b],
        background: [z, b, "background-color"],
        "outline-color": [z, b],
        "border-color": [z, b],
        "border-top-color": [z, b],
        "border-right-color": [z, b],
        "border-bottom-color": [z, b],
        "border-left-color": [z, b],
        "border-width": [V, w],
        "border-top-width": [V, w],
        "border-right-width": [V, w],
        "border-bottom-width": [V, w],
        "border-left-width": [V, w],
        "border-spacing": [V, w],
        "letter-spacing": [V, w],
        margin: [V, w],
        "margin-top": [V, w],
        "margin-right": [V, w],
        "margin-bottom": [V, w],
        "margin-left": [V, w],
        padding: [V, w],
        "padding-top": [V, w],
        "padding-right": [V, w],
        "padding-bottom": [V, w],
        "padding-left": [V, w],
        "outline-width": [V, w],
        opacity: [V, y],
        top: [V, x],
        right: [V, x],
        bottom: [V, x],
        left: [V, x],
        "font-size": [V, x],
        "text-indent": [V, x],
        "word-spacing": [V, x],
        width: [V, x],
        "min-width": [V, x],
        "max-width": [V, x],
        height: [V, x],
        "min-height": [V, x],
        "max-height": [V, x],
        "line-height": [V, O],
        "scroll-top": [$, y, "scrollTop"],
        "scroll-left": [$, y, "scrollLeft"]
      },
      K = {};
    M.transform && (Q.transform = [F], K = {
      x: [x, "translateX"],
      y: [x, "translateY"],
      rotate: [_],
      rotateX: [_],
      rotateY: [_],
      scale: [y],
      scaleX: [y],
      scaleY: [y],
      skew: [_],
      skewX: [_],
      skewY: [_]
    }), M.transform && M.backface && (K.z = [x, "translateZ"], K.rotateZ = [_], K.scaleZ = [y], K.perspective = [w]);
    var Y = /ms/,
      Z = /s|\./;
    return t.tram = e
  }(window.jQuery)
}, function (t, e, n) {
  "use strict";
  var r = window.jQuery,
    i = {},
    o = [],
    a = {
      reset: function (t, e) {
        e.__wf_intro = null
      },
      intro: function (t, e) {
        e.__wf_intro || (e.__wf_intro = !0, r(e).triggerHandler(i.types.INTRO))
      },
      outro: function (t, e) {
        e.__wf_intro && (e.__wf_intro = null, r(e).triggerHandler(i.types.OUTRO))
      }
    };
  i.triggers = {}, i.types = {
    INTRO: "w-ix-intro.w-ix",
    OUTRO: "w-ix-outro.w-ix"
  }, i.init = function () {
    for (var t = o.length, e = 0; e < t; e++) {
      var n = o[e];
      n[0](0, n[1])
    }
    o = [], r.extend(i.triggers, a)
  }, i.async = function () {
    for (var t in a) {
      var e = a[t];
      a.hasOwnProperty(t) && (i.triggers[t] = function (t, n) {
        o.push([e, n])
      })
    }
  }, i.async(), t.exports = i
}, function (t, e, n) {
  "use strict";
  var r = n(50),
    i = n(104);
  n(105), n(106), n(54), n(53);
  n.d(e, "b", function () {
    return r.b
  }), n.d(e, "a", function () {
    return i.a
  })
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", function () {
    return o
  }), e.b = function t(e, n, a) {
    var u;
    "function" == typeof n && void 0 === a && (a = n, n = void 0);
    if (void 0 !== a) {
      if ("function" != typeof a) throw new Error("Expected the enhancer to be a function.");
      return a(t)(e, n)
    }
    if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
    var c = e;
    var s = n;
    var f = [];
    var l = f;
    var d = !1;

    function p() {
      l === f && (l = f.slice())
    }

    function h() {
      return s
    }

    function v(t) {
      if ("function" != typeof t) throw new Error("Expected listener to be a function.");
      var e = !0;
      return p(), l.push(t),
        function () {
          if (e) {
            e = !1, p();
            var n = l.indexOf(t);
            l.splice(n, 1)
          }
        }
    }

    function g(t) {
      if (!Object(r.a)(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
      if (void 0 === t.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
      if (d) throw new Error("Reducers may not dispatch actions.");
      try {
        d = !0, s = c(s, t)
      } finally {
        d = !1
      }
      for (var e = f = l, n = 0; n < e.length; n++) e[n]();
      return t
    }
    g({
      type: o.INIT
    });
    return u = {
      dispatch: g,
      subscribe: v,
      getState: h,
      replaceReducer: function (t) {
        if ("function" != typeof t) throw new Error("Expected the nextReducer to be a function.");
        c = t, g({
          type: o.INIT
        })
      }
    }, u[i.a] = function () {
      var t, e = v;
      return (t = {
        subscribe: function (t) {
          if ("object" != typeof t) throw new TypeError("Expected the observer to be an object.");

          function n() {
            t.next && t.next(h())
          }
          n();
          var r = e(n);
          return {
            unsubscribe: r
          }
        }
      })[i.a] = function () {
        return this
      }, t
    }, u
  };
  var r = n(51),
    i = n(101),
    o = {
      INIT: "@@redux/INIT"
    }
}, function (t, e, n) {
  "use strict";
  var r = n(93),
    i = n(98),
    o = n(100),
    a = "[object Object]",
    u = Function.prototype,
    c = Object.prototype,
    s = u.toString,
    f = c.hasOwnProperty,
    l = s.call(Object);
  e.a = function (t) {
    if (!Object(o.a)(t) || Object(r.a)(t) != a) return !1;
    var e = Object(i.a)(t);
    if (null === e) return !0;
    var n = f.call(e, "constructor") && e.constructor;
    return "function" == typeof n && n instanceof n && s.call(n) == l
  }
}, function (t, e, n) {
  "use strict";
  var r = n(94).a.Symbol;
  e.a = r
}, function (t, e, n) {
  "use strict"
}, function (t, e, n) {
  "use strict";
  e.a = function () {
    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
    if (0 === e.length) return function (t) {
      return t
    };
    if (1 === e.length) return e[0];
    var r = e[e.length - 1],
      i = e.slice(0, -1);
    return function () {
      return i.reduceRight(function (t, e) {
        return e(t)
      }, r.apply(void 0, arguments))
    }
  }
}, function (t, e, n) {
  "use strict";
  e.b = i, e.a = function (t, e) {
    if (0 === e) return 0;
    if (1 === e) return 1;
    return i(e > 0 && t && r[t] ? r[t](e) : e)
  };
  var r = n(113);

  function i(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
      r = Math.pow(n, e),
      i = Number(Math.round(t * r) / r);
    return Math.abs(i) > 1e-4 ? i : 0
  }
}, function (t, e, n) {
  "use strict";
  e.a = function (t) {
    Object(O.j)({
      store: t,
      select: function (t) {
        var e = t.ixRequest;
        return e.preview
      },
      onChange: P
    }), Object(O.j)({
      store: t,
      select: function (t) {
        var e = t.ixRequest;
        return e.playback
      },
      onChange: D
    }), Object(O.j)({
      store: t,
      select: function (t) {
        var e = t.ixRequest;
        return e.stop
      },
      onChange: N
    }), Object(O.j)({
      store: t,
      select: function (t) {
        var e = t.ixRequest;
        return e.clear
      },
      onChange: V
    })
  }, e.c = z, e.e = $, e.d = U, e.b = H;
  var r = n(57),
    i = n.n(r),
    o = n(19),
    a = n.n(o),
    u = n(181),
    c = n.n(u),
    s = n(187),
    f = n.n(s),
    l = n(201),
    d = n.n(l),
    p = n(202),
    h = n.n(p),
    v = n(205),
    g = n.n(v),
    m = n(209),
    y = n.n(m),
    b = n(210),
    w = n.n(b),
    x = n(213),
    _ = n.n(x),
    O = n(40),
    j = n(42),
    I = n(43),
    E = n(219),
    S = n(22),
    T = n(41),
    A = n(220),
    k = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
      }
      return t
    };
  var M = navigator.userAgent,
    C = M.match(/iPad/i) || M.match(/iPhone/),
    L = 12;

  function P(t, e) {
    z({
      store: e,
      rawData: t.rawData,
      allowEvents: !0
    }), document.dispatchEvent(new CustomEvent("IX2_PREVIEW_LOAD"))
  }

  function R(t) {
    return t && y()(t, "_EFFECT")
  }

  function D(t, e) {
    var n = t.actionTypeId,
      r = t.actionListId,
      i = t.actionItemId,
      o = t.eventId,
      a = t.allowEvents,
      u = t.immediate,
      c = t.verbose,
      s = void 0 === c || c,
      f = t.rawData;
    if (r && i && f && u && (f = Object(O.k)({
        actionListId: r,
        actionItemId: i,
        rawData: f
      })), z({
        store: e,
        rawData: f,
        allowEvents: a
      }), r && n === T.c || R(n)) {
      U({
        store: e,
        actionListId: r
      }), G({
        store: e,
        actionListId: r,
        eventId: o
      });
      var l = H({
        store: e,
        eventId: o,
        actionListId: r,
        immediate: u,
        verbose: s
      });
      s && l && e.dispatch(Object(I.actionListPlaybackChanged)({
        actionListId: r,
        isPlaying: !u
      }))
    }
  }

  function N(t, e) {
    var n = t.actionListId;
    n ? U({
      store: e,
      actionListId: n
    }) : function (t) {
      var e = t.store,
        n = e.getState().ixInstances;
      g()(n, function (t) {
        if (!t.continuous) {
          var n = t.actionListId,
            r = t.verbose;
          K(t, e), r && e.dispatch(Object(I.actionListPlaybackChanged)({
            actionListId: n,
            isPlaying: !1
          }))
        }
      })
    }({
      store: e
    }), $(e)
  }

  function V(t, e) {
    $(e), Object(O.b)({
      store: e,
      elementApi: E
    })
  }

  function z(t) {
    var e = t.store,
      n = t.rawData,
      r = t.allowEvents,
      o = e.getState().ixSession;
    n && e.dispatch(Object(I.rawDataImported)(n)), o.active || (e.dispatch(Object(I.sessionInitialized)({
      hasBoundaryNodes: Boolean(document.querySelector(S.f))
    })), r && function (t) {
      var e = t.getState().ixData.eventTypeMap;
      g()(e, function (e, n) {
        var r = A.a[n];
        r ? function (t) {
          var e = t.logic,
            n = t.store,
            r = t.events;
          ! function (t) {
            if (C) {
              var e = {},
                n = "";
              for (var r in t) {
                var i = t[r],
                  o = i.eventTypeId,
                  a = i.target,
                  u = E.getQuerySelector(a);
                e[u] || o !== j.f && o !== j.k || (e[u] = !0, n += u + "{cursor: pointer;touch-action: manipulation;}")
              }
              if (n) {
                var c = document.createElement("style");
                c.textContent = n, document.body.appendChild(c)
              }
            }
          }(r);
          var o = e.types,
            u = e.handler,
            s = n.getState().ixData,
            f = s.actionLists,
            l = q(r, W);
          if (c()(l)) {
            g()(l, function (t, e) {
              var o = r[e],
                u = o.action,
                c = o.id,
                s = u.config.actionListId;
              if (u.actionTypeId === T.a) {
                var l = Array.isArray(o.config) ? o.config : [o.config];
                l.forEach(function (e) {
                  var r = e.continuousParameterGroupId,
                    o = a()(f, s + ".continuousParameterGroups", []),
                    u = i()(o, function (t) {
                      var e = t.id;
                      return e === r
                    }),
                    l = (e.smoothing || 0) / 100,
                    d = (e.restingState || 0) / 100;
                  u && t.forEach(function (t, r) {
                    var i = c + S.h + r;
                    ! function (t) {
                      var e = t.store,
                        n = t.eventStateKey,
                        r = t.eventTarget,
                        i = t.eventId,
                        o = t.eventConfig,
                        u = t.actionListId,
                        c = t.parameterGroup,
                        s = t.smoothing,
                        f = t.restingValue,
                        l = e.getState(),
                        d = l.ixData,
                        p = l.ixSession,
                        h = d.events[i],
                        v = h.eventTypeId,
                        g = {},
                        m = {},
                        y = [],
                        b = c.continuousActionGroups,
                        w = c.id;
                      Object(O.o)(v, o) && (w = Object(O.i)(n, w));
                      var x = p.hasBoundaryNodes && r ? E.getClosestElement(r, S.f) : null;
                      b.forEach(function (t) {
                        var e = t.keyframe,
                          n = t.actionItems;
                        n.forEach(function (t) {
                          var n = t.actionTypeId,
                            i = t.config.target;
                          if (i) {
                            var o = i.boundaryMode ? x : null,
                              a = Object(O.p)(i) + S.h + n;
                            if (m[a] = function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                  e = arguments[1],
                                  n = arguments[2],
                                  r = [].concat(function (t) {
                                    if (Array.isArray(t)) {
                                      for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                                      return n
                                    }
                                    return Array.from(t)
                                  }(t)),
                                  i = void 0;
                                return r.some(function (t, n) {
                                  return t.keyframe === e && (i = n, !0)
                                }), null == i && (i = r.length, r.push({
                                  keyframe: e,
                                  actionItems: []
                                })), r[i].actionItems.push(n), r
                              }(m[a], e, t), !g[a]) {
                              g[a] = !0;
                              var u = t.config;
                              Object(O.c)({
                                config: u,
                                event: h,
                                eventTarget: r,
                                elementRoot: o,
                                elementApi: E
                              }).forEach(function (t) {
                                y.push({
                                  element: t,
                                  key: a
                                })
                              })
                            }
                          }
                        })
                      }), y.forEach(function (t) {
                        var n = t.element,
                          r = t.key,
                          o = m[r],
                          c = a()(o, "[0].actionItems[0]", {}),
                          l = Object(O.e)({
                            element: n,
                            actionItem: c,
                            elementApi: E
                          });
                        Q({
                          store: e,
                          element: n,
                          eventId: i,
                          actionListId: u,
                          actionItem: c,
                          destination: l,
                          continuous: !0,
                          parameterId: w,
                          actionGroups: o,
                          smoothing: s,
                          restingValue: f
                        })
                      })
                    }({
                      store: n,
                      eventStateKey: i,
                      eventTarget: t,
                      eventId: c,
                      eventConfig: e,
                      actionListId: s,
                      parameterGroup: u,
                      smoothing: l,
                      restingValue: d
                    })
                  })
                })
              }(u.actionTypeId === T.c || R(u.actionTypeId)) && G({
                store: n,
                actionListId: s,
                eventId: c
              })
            });
            var d = function (t) {
                var e = n.getState(),
                  i = e.ixSession;
                X(l, function (e, o, a) {
                  var c = r[o],
                    f = i.eventState[a],
                    l = c.action,
                    d = c.mediaQueries,
                    p = void 0 === d ? s.mediaQueryKeys : d;
                  if (Object(O.n)(p, i.mediaQueryKey)) {
                    var h = function () {
                      var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        i = u({
                          store: n,
                          element: e,
                          event: c,
                          eventConfig: r,
                          nativeEvent: t,
                          eventStateKey: a
                        }, f);
                      _()(i, f) || n.dispatch(Object(I.eventStateChanged)(a, i))
                    };
                    if (l.actionTypeId === T.a) {
                      var v = Array.isArray(c.config) ? c.config : [c.config];
                      v.forEach(h)
                    } else h()
                  }
                })
              },
              p = w()(d, L),
              h = function (t) {
                var e = t.target,
                  r = void 0 === e ? document : e,
                  i = t.types,
                  o = t.throttle;
                i.split(" ").filter(Boolean).forEach(function (t) {
                  var e = o ? p : d;
                  r.addEventListener(t, e), n.dispatch(Object(I.eventListenerAdded)(r, [t, e]))
                })
              };
            Array.isArray(o) ? o.forEach(h) : "string" == typeof o && h(e)
          }
        }({
          logic: r,
          store: t,
          events: e
        }) : console.warn("IX2 event type not configured: " + n)
      }), t.getState().ixSession.eventListeners.length && function (t) {
        function e() {
          var e = t.getState(),
            n = e.ixSession,
            r = e.ixData,
            i = window.innerWidth;
          if (i !== n.viewportWidth) {
            var o = r.mediaQueries;
            t.dispatch(Object(I.viewportWidthChanged)({
              width: i,
              mediaQueries: o
            }))
          }
        }
        B.forEach(function (n) {
          window.addEventListener(n, e), t.dispatch(Object(I.eventListenerAdded)(window, [n, e]))
        }), e()
      }(t)
    }(e), e.dispatch(Object(I.sessionStarted)()), function (t) {
      ! function e(n) {
        var r = t.getState(),
          i = r.ixSession,
          o = r.ixParameters;
        i.active && (t.dispatch(Object(I.animationFrameChanged)(n, o)), requestAnimationFrame(e))
      }(window.performance.now())
    }(e))
  }

  function $(t) {
    var e = t.getState().ixSession;
    e.active && (e.eventListeners.forEach(F), t.dispatch(Object(I.sessionStopped)()))
  }

  function F(t) {
    var e = t.target,
      n = t.listenerParams;
    e.removeEventListener.apply(e, n)
  }
  var B = ["resize", "orientationchange"];
  var q = function (t, e) {
      return f()(h()(t, e), d.a)
    },
    X = function (t, e) {
      g()(t, function (t, n) {
        t.forEach(function (t, r) {
          var i = n + S.h + r;
          e(t, n, i)
        })
      })
    },
    W = function (t) {
      var e = {
        target: t.target
      };
      return Object(O.c)({
        config: e,
        elementApi: E
      })
    };

  function G(t) {
    var e = t.store,
      n = t.actionListId,
      r = t.eventId,
      i = e.getState().ixData,
      o = i.actionLists,
      u = i.events[r],
      c = o[n];
    c && c.useFirstGroupAsInitialState && a()(c, "actionItemGroups[0].actionItems", []).forEach(function (t) {
      var i = t.config;
      Object(O.c)({
        config: i,
        event: u,
        elementApi: E
      }).forEach(function (i) {
        Q({
          destination: Object(O.e)({
            element: i,
            actionItem: t,
            elementApi: E
          }),
          origin: Object(O.g)({
            element: i,
            actionItem: t,
            elementApi: E
          }),
          immediate: !0,
          store: e,
          element: i,
          eventId: r,
          actionItem: t,
          actionListId: n
        })
      })
    })
  }

  function U(t) {
    var e = t.store,
      n = t.eventId,
      r = t.eventTarget,
      i = t.eventStateKey,
      o = t.actionListId,
      u = e.getState(),
      c = u.ixInstances,
      s = u.ixSession.hasBoundaryNodes && r ? E.getClosestElement(r, S.f) : null;
    g()(c, function (t) {
      var r = a()(t, "actionItem.config.target.boundaryMode"),
        u = !i || t.eventStateKey === i;
      if (t.actionListId === o && t.eventId === n && u) {
        if (s && r && !E.elementContains(s, t.element)) return;
        K(t, e), t.verbose && e.dispatch(Object(I.actionListPlaybackChanged)({
          actionListId: o,
          isPlaying: !1
        }))
      }
    })
  }

  function H(t) {
    var e = t.store,
      n = t.eventId,
      r = t.eventTarget,
      i = t.eventStateKey,
      o = t.actionListId,
      u = t.groupIndex,
      c = void 0 === u ? 0 : u,
      s = t.immediate,
      f = t.verbose,
      l = e.getState(),
      d = l.ixData,
      p = l.ixSession,
      h = d.events[n] || {},
      v = h.mediaQueries,
      g = void 0 === v ? d.mediaQueryKeys : v,
      m = a()(d, "actionLists." + o, {}),
      y = m.actionItemGroups;
    c >= y.length && a()(h, "config.loop") && (c = 0), 0 === c && m.useFirstGroupAsInitialState && c++;
    var b = a()(y, [c, "actionItems"], []);
    if (!b.length) return !1;
    if (!Object(O.n)(g, p.mediaQueryKey)) return !1;
    var w = p.hasBoundaryNodes && r ? E.getClosestElement(r, S.f) : null,
      x = Object(O.h)(b),
      _ = !1;
    return b.forEach(function (t, a) {
      var u = t.config,
        l = u.target;
      if (l) {
        var d = l.boundaryMode ? w : null;
        Object(O.c)({
          config: u,
          event: h,
          eventTarget: r,
          elementRoot: d,
          elementApi: E
        }).forEach(function (u, l) {
          _ = !0;
          var d = x === a && 0 === l,
            p = Object(O.d)({
              element: u,
              actionItem: t
            }),
            h = Object(O.g)({
              element: u,
              actionItem: t,
              computedStyle: p,
              elementApi: E
            }),
            v = Object(O.e)({
              element: u,
              actionItem: t,
              elementApi: E
            });
          Q({
            store: e,
            element: u,
            actionItem: t,
            eventId: n,
            eventTarget: r,
            eventStateKey: i,
            actionListId: o,
            groupIndex: c,
            isCarrier: d,
            origin: h,
            destination: v,
            immediate: s,
            verbose: f
          })
        })
      }
    }), _
  }

  function Q(t) {
    var e = t.store,
      n = function (t, e) {
        var n = {};
        for (var r in t) e.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        return n
      }(t, ["store"]),
      r = !n.continuous,
      i = n.immediate,
      o = Object(O.f)();
    e.dispatch(Object(I.instanceAdded)(k({
      instanceId: o
    }, n))), i ? function (t, e) {
      t.dispatch(Object(I.instanceStarted)(e));
      var n = t.getState().ixParameters;
      t.dispatch(Object(I.animationFrameChanged)(Number.POSITIVE_INFINITY, n)), Y(t.getState().ixInstances[e], t)
    }(e, o) : (Object(O.j)({
      store: e,
      select: function (t) {
        return t.ixInstances[o]
      },
      onChange: Y
    }), r && e.dispatch(Object(I.instanceStarted)(o)))
  }

  function K(t, e) {
    Object(O.a)(t, E), e.dispatch(Object(I.instanceRemoved)(t.id))
  }

  function Y(t, e) {
    var n = t.active,
      r = t.continuous,
      i = t.complete,
      o = t.current,
      a = t.groupIndex,
      u = t.eventId,
      c = t.eventTarget,
      s = t.eventStateKey,
      f = t.actionListId,
      l = t.isGeneral,
      d = t.isCarrier,
      p = t.verbose,
      h = e.getState(),
      v = h.ixData,
      g = h.ixSession,
      m = (v.events[u] || {}).mediaQueries,
      y = void 0 === m ? v.mediaQueryKeys : m;
    if (Object(O.n)(y, g.mediaQueryKey) && (r || n || i) && ((o || l && i) && Object(O.m)(t, E), i)) {
      if (d) {
        var b = H({
          store: e,
          eventId: u,
          eventTarget: c,
          eventStateKey: s,
          actionListId: f,
          groupIndex: a + 1,
          verbose: p
        });
        p && !b && e.dispatch(Object(I.actionListPlaybackChanged)({
          actionListId: f,
          isPlaying: !1
        }))
      }
      K(t, e)
    }
  }
}, function (t, e, n) {
  var r = n(116)(n(178));
  t.exports = r
}, function (t, e, n) {
  var r = n(13),
    i = n(124),
    o = n(125),
    a = n(126),
    u = n(127),
    c = n(128);

  function s(t) {
    var e = this.__data__ = new r(t);
    this.size = e.size
  }
  s.prototype.clear = i, s.prototype.delete = o, s.prototype.get = a, s.prototype.has = u, s.prototype.set = c, t.exports = s
}, function (t, e, n) {
  var r = n(8),
    i = n(3),
    o = "[object AsyncFunction]",
    a = "[object Function]",
    u = "[object GeneratorFunction]",
    c = "[object Proxy]";
  t.exports = function (t) {
    if (!i(t)) return !1;
    var e = r(t);
    return e == a || e == u || e == o || e == c
  }
}, function (t, e, n) {
  (function (e) {
    var n = "object" == typeof e && e && e.Object === Object && e;
    t.exports = n
  }).call(e, n(23))
}, function (t, e) {
  var n = Function.prototype.toString;
  t.exports = function (t) {
    if (null != t) {
      try {
        return n.call(t)
      } catch (t) {}
      try {
        return t + ""
      } catch (t) {}
    }
    return ""
  }
}, function (t, e, n) {
  var r = n(147),
    i = n(3),
    o = n(5);
  t.exports = function t(e, n, a, u, c) {
    return e === n || (null == e || null == n || !i(e) && !o(n) ? e != e && n != n : r(e, n, a, u, t, c))
  }
}, function (t, e, n) {
  var r = n(148),
    i = n(151),
    o = n(152),
    a = 1,
    u = 2;
  t.exports = function (t, e, n, c, s, f) {
    var l = n & a,
      d = t.length,
      p = e.length;
    if (d != p && !(l && p > d)) return !1;
    var h = f.get(t);
    if (h && f.get(e)) return h == e;
    var v = -1,
      g = !0,
      m = n & u ? new r : void 0;
    for (f.set(t, e), f.set(e, t); ++v < d;) {
      var y = t[v],
        b = e[v];
      if (c) var w = l ? c(b, y, v, e, t, f) : c(y, b, v, t, e, f);
      if (void 0 !== w) {
        if (w) continue;
        g = !1;
        break
      }
      if (m) {
        if (!i(e, function (t, e) {
            if (!o(m, e) && (y === t || s(y, t, n, c, f))) return m.push(e)
          })) {
          g = !1;
          break
        }
      } else if (y !== b && !s(y, b, n, c, f)) {
        g = !1;
        break
      }
    }
    return f.delete(t), f.delete(e), g
  }
}, function (t, e, n) {
  var r = n(158),
    i = n(18),
    o = n(0),
    a = n(27),
    u = n(28),
    c = n(29),
    s = Object.prototype.hasOwnProperty;
  t.exports = function (t, e) {
    var n = o(t),
      f = !n && i(t),
      l = !n && !f && a(t),
      d = !n && !f && !l && c(t),
      p = n || f || l || d,
      h = p ? r(t.length, String) : [],
      v = h.length;
    for (var g in t) !e && !s.call(t, g) || p && ("length" == g || l && ("offset" == g || "parent" == g) || d && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || u(g, v)) || h.push(g);
    return h
  }
}, function (t, e) {
  t.exports = function (t) {
    return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
      enumerable: !0,
      get: function () {
        return t.l
      }
    }), Object.defineProperty(t, "id", {
      enumerable: !0,
      get: function () {
        return t.i
      }
    }), t.webpackPolyfill = 1), t
  }
}, function (t, e, n) {
  var r = n(4)(n(2), "WeakMap");
  t.exports = r
}, function (t, e, n) {
  var r = n(3);
  t.exports = function (t) {
    return t == t && !r(t)
  }
}, function (t, e) {
  t.exports = function (t, e) {
    return function (n) {
      return null != n && n[t] === e && (void 0 !== e || t in Object(n))
    }
  }
}, function (t, e, n) {
  var r = n(70);
  t.exports = function (t) {
    return null == t ? "" : r(t)
  }
}, function (t, e, n) {
  var r = n(10),
    i = n(71),
    o = n(0),
    a = n(21),
    u = 1 / 0,
    c = r ? r.prototype : void 0,
    s = c ? c.toString : void 0;
  t.exports = function t(e) {
    if ("string" == typeof e) return e;
    if (o(e)) return i(e, t) + "";
    if (a(e)) return s ? s.call(e) : "";
    var n = e + "";
    return "0" == n && 1 / e == -u ? "-0" : n
  }
}, function (t, e) {
  t.exports = function (t, e) {
    for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;) i[n] = e(t[n], n, t);
    return i
  }
}, function (t, e) {
  t.exports = function (t) {
    return function (e) {
      return null == e ? void 0 : e[t]
    }
  }
}, function (t, e, n) {
  var r = n(180);
  t.exports = function (t) {
    var e = r(t),
      n = e % 1;
    return e == e ? n ? e - n : e : 0
  }
}, function (t, e, n) {
  var r = n(75);
  t.exports = function (t, e, n) {
    "__proto__" == e && r ? r(t, e, {
      configurable: !0,
      enumerable: !0,
      value: n,
      writable: !0
    }) : t[e] = n
  }
}, function (t, e, n) {
  var r = n(4),
    i = function () {
      try {
        var t = r(Object, "defineProperty");
        return t({}, "", {}), t
      } catch (t) {}
    }();
  t.exports = i
}, function (t, e) {
  t.exports = function () {
    return []
  }
}, function (t, e, n) {
  var r = n(203),
    i = n(17);
  t.exports = function (t, e) {
    return t && r(t, e, i)
  }
}, function (t, e, n) {
  var r = n(77),
    i = n(207)(r);
  t.exports = i
}, function (t, e) {
  t.exports = function (t, e, n) {
    return t == t && (void 0 !== n && (t = t <= n ? t : n), void 0 !== e && (t = t >= e ? t : e)), t
  }
}, function (t, e, n) {
  "use strict";
  n.d(e, "c", function () {
    return o
  }), n.d(e, "a", function () {
    return u
  }), n.d(e, "b", function () {
    return c
  }), n.d(e, "d", function () {
    return s
  });
  var r = n(57),
    i = n.n(r),
    o = "undefined" != typeof window,
    a = function (t, e) {
      return o ? t() : e
    },
    u = a(function () {
      return i()(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], function (t) {
        return t in Element.prototype
      })
    }),
    c = a(function () {
      var t = document.createElement("i"),
        e = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
      try {
        for (var n = e.length, r = 0; r < n; r++) {
          var i = e[r];
          if (t.style.display = i, t.style.display === i) return i
        }
        return ""
      } catch (t) {
        return ""
      }
    }, "flex"),
    s = a(function () {
      var t = document.createElement("i");
      if (null == t.style.transform)
        for (var e = ["Webkit", "Moz", "ms"], n = e.length, r = 0; r < n; r++) {
          var i = e[r] + "Transform";
          if (void 0 !== t.style[i]) return i
        }
      return "transform"
    }, "transform")
}, function (t, e, n) {
  var r = n(3),
    i = Object.create,
    o = function () {
      function t() {}
      return function (e) {
        if (!r(e)) return {};
        if (i) return i(e);
        t.prototype = e;
        var n = new t;
        return t.prototype = void 0, n
      }
    }();
  t.exports = o
}, function (t, e, n) {
  var r = n(233),
    i = n(234),
    o = r ? function (t) {
      return r.get(t)
    } : i;
  t.exports = o
}, function (t, e, n) {
  var r = n(235),
    i = Object.prototype.hasOwnProperty;
  t.exports = function (t) {
    for (var e = t.name + "", n = r[e], o = i.call(r, e) ? n.length : 0; o--;) {
      var a = n[o],
        u = a.func;
      if (null == u || u == t) return a.name
    }
    return e
  }
}, function (t, e, n) {
  n(85), n(87), n(88), n(90), n(91), n(241), n(242), n(243), n(244), t.exports = n(246)
}, function (t, e, n) {
  var r = n(1);
  r.define("brand", t.exports = function (t) {
    var e, n = {},
      i = t("html"),
      o = t("body"),
      a = ".w-webflow-badge",
      u = window.location,
      c = /PhantomJS/i.test(navigator.userAgent);

    function s() {
      var t = o.children(a),
        n = t.length && t.get(0) === e,
        i = r.env("editor");
      n ? i && t.remove() : (t.length && t.remove(), i || o.append(e))
    }
  })
}, function (t, e, n) {
  var r = window.$,
    i = n(47) && r.tram;
  /*!
   * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
   * _.each
   * _.map
   * _.find
   * _.filter
   * _.any
   * _.contains
   * _.delay
   * _.defer
   * _.throttle (webflow)
   * _.debounce
   * _.keys
   * _.has
   * _.now
   *
   * http://underscorejs.org
   * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Underscore may be freely distributed under the MIT license.
   * @license MIT
   */
  t.exports = function () {
    var t = {
        VERSION: "1.6.0-Webflow"
      },
      e = {},
      n = Array.prototype,
      r = Object.prototype,
      o = Function.prototype,
      a = (n.push, n.slice),
      u = (n.concat, r.toString, r.hasOwnProperty),
      c = n.forEach,
      s = n.map,
      f = (n.reduce, n.reduceRight, n.filter),
      l = (n.every, n.some),
      d = n.indexOf,
      p = (n.lastIndexOf, Array.isArray, Object.keys),
      h = (o.bind, t.each = t.forEach = function (n, r, i) {
        if (null == n) return n;
        if (c && n.forEach === c) n.forEach(r, i);
        else if (n.length === +n.length) {
          for (var o = 0, a = n.length; o < a; o++)
            if (r.call(i, n[o], o, n) === e) return
        } else {
          var u = t.keys(n);
          for (o = 0, a = u.length; o < a; o++)
            if (r.call(i, n[u[o]], u[o], n) === e) return
        }
        return n
      });
    t.map = t.collect = function (t, e, n) {
      var r = [];
      return null == t ? r : s && t.map === s ? t.map(e, n) : (h(t, function (t, i, o) {
        r.push(e.call(n, t, i, o))
      }), r)
    }, t.find = t.detect = function (t, e, n) {
      var r;
      return v(t, function (t, i, o) {
        if (e.call(n, t, i, o)) return r = t, !0
      }), r
    }, t.filter = t.select = function (t, e, n) {
      var r = [];
      return null == t ? r : f && t.filter === f ? t.filter(e, n) : (h(t, function (t, i, o) {
        e.call(n, t, i, o) && r.push(t)
      }), r)
    };
    var v = t.some = t.any = function (n, r, i) {
      r || (r = t.identity);
      var o = !1;
      return null == n ? o : l && n.some === l ? n.some(r, i) : (h(n, function (t, n, a) {
        if (o || (o = r.call(i, t, n, a))) return e
      }), !!o)
    };
    t.contains = t.include = function (t, e) {
      return null != t && (d && t.indexOf === d ? -1 != t.indexOf(e) : v(t, function (t) {
        return t === e
      }))
    }, t.delay = function (t, e) {
      var n = a.call(arguments, 2);
      return setTimeout(function () {
        return t.apply(null, n)
      }, e)
    }, t.defer = function (e) {
      return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)))
    }, t.throttle = function (t) {
      var e, n, r;
      return function () {
        e || (e = !0, n = arguments, r = this, i.frame(function () {
          e = !1, t.apply(r, n)
        }))
      }
    }, t.debounce = function (e, n, r) {
      var i, o, a, u, c, s = function s() {
        var f = t.now() - u;
        f < n ? i = setTimeout(s, n - f) : (i = null, r || (c = e.apply(a, o), a = o = null))
      };
      return function () {
        a = this, o = arguments, u = t.now();
        var f = r && !i;
        return i || (i = setTimeout(s, n)), f && (c = e.apply(a, o), a = o = null), c
      }
    }, t.defaults = function (e) {
      if (!t.isObject(e)) return e;
      for (var n = 1, r = arguments.length; n < r; n++) {
        var i = arguments[n];
        for (var o in i) void 0 === e[o] && (e[o] = i[o])
      }
      return e
    }, t.keys = function (e) {
      if (!t.isObject(e)) return [];
      if (p) return p(e);
      var n = [];
      for (var r in e) t.has(e, r) && n.push(r);
      return n
    }, t.has = function (t, e) {
      return u.call(t, e)
    }, t.isObject = function (t) {
      return t === Object(t)
    }, t.now = Date.now || function () {
      return (new Date).getTime()
    }, t.templateSettings = {
      evaluate: /<%([\s\S]+?)%>/g,
      interpolate: /<%=([\s\S]+?)%>/g,
      escape: /<%-([\s\S]+?)%>/g
    };
    var g = /(.)^/,
      m = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
      },
      y = /\\|'|\r|\n|\u2028|\u2029/g,
      b = function (t) {
        return "\\" + m[t]
      };
    return t.template = function (e, n, r) {
      !n && r && (n = r), n = t.defaults({}, n, t.templateSettings);
      var i = RegExp([(n.escape || g).source, (n.interpolate || g).source, (n.evaluate || g).source].join("|") + "|$", "g"),
        o = 0,
        a = "__p+='";
      e.replace(i, function (t, n, r, i, u) {
        return a += e.slice(o, u).replace(y, b), o = u + t.length, n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : i && (a += "';\n" + i + "\n__p+='"), t
      }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
      try {
        var u = new Function(n.variable || "obj", "_", a)
      } catch (t) {
        throw t.source = a, t
      }
      var c = function (e) {
          return u.call(this, e, t)
        },
        s = n.variable || "obj";
      return c.source = "function(" + s + "){\n" + a + "}", c
    }, t
  }()
}, function (t, e, n) {
  var r = n(1);
  r.define("edit", t.exports = function (t, e, n) {
    if (n = n || {}, (r.env("test") || r.env("frame")) && !n.fixture) return {
      exit: 1
    };
    var i, o = t(window),
      a = t(document.documentElement),
      u = document.location,
      c = "hashchange",
      s = n.load || function () {
        i = !0, window.WebflowEditor = !0, o.off(c, l), t.ajax({
          url: h("https://editor-api.webflow.com/api/editor/view"),
          data: {
            siteId: a.attr("data-wf-site")
          },
          xhrFields: {
            withCredentials: !0
          },
          dataType: "json",
          crossDomain: !0,
          success: d
        })
      },
      f = !1;
    try {
      f = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
    } catch (t) {}

    function l() {
      i || /\?edit/.test(u.hash) && s()
    }

    function d(e) {
      var n;
      e ? function (e, n) {
        t.ajax({
          type: "GET",
          url: e,
          dataType: "script",
          cache: !0
        }).then(n, p)
      }((n = e.scriptPath, n.indexOf("//") >= 0 ? n : h("https://editor-api.webflow.com" + n)), function () {
        window.WebflowEditor(e)
      }) : console.error("Could not load editor data")
    }

    function p(t, e, n) {
      throw console.error("Could not load editor script: " + e), n
    }

    function h(t) {
      return t.replace(/([^:])\/\//g, "$1/")
    }
    return f ? s() : u.search ? (/[?&](edit)(?:[=&?]|$)/.test(u.search) || /\?edit$/.test(u.href)) && s() : o.on(c, l).triggerHandler(c), {}
  })
}, function (t, e, n) {
  var r = n(1);
  r.define("forms", t.exports = function (t, e) {
    var i = {};
    n(89);
    var o, a, u, c = t(document),
      s = window.location,
      f = window.XDomainRequest && !window.atob,
      l = ".w-form",
      d = /e(-)?mail/i,
      p = /^\S+@\S+$/,
      h = window.alert,
      v = r.env(),
      g = /list-manage[1-9]?.com/i,
      m = e.debounce(function () {
        h("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
      }, 100);

    function y(e, n) {
      var r = t(n),
        i = t.data(n, l);
      i || (i = t.data(n, l, {
        form: r
      })), b(i);
      var o = r.closest("div.w-form");
      i.done = o.find("> .w-form-done"), i.fail = o.find("> .w-form-fail");
      var u = i.action = r.attr("action");
      i.handler = null, i.redirect = r.attr("data-redirect"), g.test(u) ? i.handler = O : u || (a ? i.handler = _ : m())
    }

    function b(t) {
      var e = t.btn = t.form.find(':input[type="submit"]');
      t.wait = t.btn.attr("data-wait") || null, t.success = !1, e.prop("disabled", !1), t.label && e.val(t.label)
    }

    function w(t) {
      var e = t.btn,
        n = t.wait;
      e.prop("disabled", !0), n && (t.label = e.val(), e.val(n))
    }

    function x(e, n) {
      var r = null;
      return n = n || {}, e.find(':input:not([type="submit"])').each(function (i, o) {
        var a = t(o),
          u = a.attr("type"),
          c = a.attr("data-name") || a.attr("name") || "Field " + (i + 1),
          s = a.val();
        if ("checkbox" === u && (s = a.is(":checked")), "radio" === u) {
          if (null === n[c] || "string" == typeof n[c]) return;
          s = e.find('input[name="' + a.attr("name") + '"]:checked').val() || null
        }
        "string" == typeof s && (s = t.trim(s)), n[c] = s, r = r || function (t, e, n, r) {
          var i = null;
          "password" === e ? i = "Passwords cannot be submitted." : t.attr("required") && (r ? (d.test(n) || d.test(t.attr("type"))) && (p.test(r) || (i = "Please enter a valid email address for: " + n)) : i = "Please fill out the required field: " + n);
          return i
        }(a, u, c, s)
      }), r
    }

    function _(e) {
      b(e);
      var n = e.form,
        i = {
          name: n.attr("data-name") || n.attr("name") || "Untitled Form",
          source: s.href,
          test: r.env(),
          fields: {},
          dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(n.html())
        };
      I(e);
      var o = x(n, i.fields);
      if (o) return h(o);
      if (w(e), a) {
        var u = "https://webflow.com/api/v1/form/" + a;
        f && u.indexOf("https://webflow.com") >= 0 && (u = u.replace("https://webflow.com", "http://formdata.webflow.com")), t.ajax({
          url: u,
          type: "POST",
          data: i,
          dataType: "json",
          crossDomain: !0
        }).done(function () {
          e.success = !0, j(e)
        }).fail(function () {
          j(e)
        })
      } else j(e)
    }

    function O(n) {
      b(n);
      var r = n.form,
        i = {};
      if (!/^https/.test(s.href) || /^https/.test(n.action)) {
        I(n);
        var o, a = x(r, i);
        if (a) return h(a);
        w(n), e.each(i, function (t, e) {
          d.test(e) && (i.EMAIL = t), /^((full[ _-]?)?name)$/i.test(e) && (o = t), /^(first[ _-]?name)$/i.test(e) && (i.FNAME = t), /^(last[ _-]?name)$/i.test(e) && (i.LNAME = t)
        }), o && !i.FNAME && (o = o.split(" "), i.FNAME = o[0], i.LNAME = i.LNAME || o[1]);
        var u = n.action.replace("/post?", "/post-json?") + "&c=?",
          c = u.indexOf("u=") + 2;
        c = u.substring(c, u.indexOf("&", c));
        var f = u.indexOf("id=") + 3;
        f = u.substring(f, u.indexOf("&", f)), i["b_" + c + "_" + f] = "", t.ajax({
          url: u,
          data: i,
          dataType: "jsonp"
        }).done(function (t) {
          n.success = "success" === t.result || /already/.test(t.msg), n.success || console.info("MailChimp error: " + t.msg), j(n)
        }).fail(function () {
          j(n)
        })
      } else r.attr("method", "post")
    }

    function j(t) {
      var e = t.form,
        n = t.redirect,
        i = t.success;
      i && n ? r.location(n) : (t.done.toggle(i), t.fail.toggle(!i), e.toggle(!i), b(t))
    }

    function I(t) {
      t.evt && t.evt.preventDefault(), t.evt = null
    }
    return i.ready = i.design = i.preview = function () {
      ! function () {
        if (a = t("html").attr("data-wf-site"), !(o = t(l + " form")).length) return;
        o.each(y)
      }(), v || u || (u = !0, c.on("submit", l + " form", function (e) {
        var n = t.data(this, l);
        n.handler && (n.evt = e, n.handler(n))
      }))
    }, i
  })
}, function (t, e) {
  /*!
   * jQuery-ajaxTransport-XDomainRequest - v1.0.3
   * 2014-12-16 WEBFLOW - Removed UMD wrapper
   * https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest
   * Copyright (c) 2014 Jason Moon (@JSONMOON)
   * @license MIT (/blob/master/LICENSE.txt)
   */
  t.exports = function (t) {
    if (!t.support.cors && t.ajaxTransport && window.XDomainRequest) {
      var e = /^https?:\/\//i,
        n = /^get|post$/i,
        r = new RegExp("^" + location.protocol, "i");
      t.ajaxTransport("* text html xml json", function (i, o, a) {
        if (i.crossDomain && i.async && n.test(i.type) && e.test(i.url) && r.test(i.url)) {
          var u = null;
          return {
            send: function (e, n) {
              var r = "",
                a = (o.dataType || "").toLowerCase();
              u = new XDomainRequest, /^\d+$/.test(o.timeout) && (u.timeout = o.timeout), u.ontimeout = function () {
                n(500, "timeout")
              }, u.onload = function () {
                var e = "Content-Length: " + u.responseText.length + "\r\nContent-Type: " + u.contentType,
                  r = {
                    code: 200,
                    message: "success"
                  },
                  i = {
                    text: u.responseText
                  };
                try {
                  if ("html" === a || /text\/html/i.test(u.contentType)) i.html = u.responseText;
                  else if ("json" === a || "text" !== a && /\/json/i.test(u.contentType)) try {
                    i.json = t.parseJSON(u.responseText)
                  } catch (t) {
                    r.code = 500, r.message = "parseerror"
                  } else if ("xml" === a || "text" !== a && /\/xml/i.test(u.contentType)) {
                    var o = new ActiveXObject("Microsoft.XMLDOM");
                    o.async = !1;
                    try {
                      o.loadXML(u.responseText)
                    } catch (t) {
                      o = void 0
                    }
                    if (!o || !o.documentElement || o.getElementsByTagName("parsererror").length) throw r.code = 500, r.message = "parseerror", "Invalid XML: " + u.responseText;
                    i.xml = o
                  }
                } catch (t) {
                  throw t
                } finally {
                  n(r.code, r.message, i, e)
                }
              }, u.onprogress = function () {}, u.onerror = function () {
                n(500, "error", {
                  text: u.responseText
                })
              }, o.data && (r = "string" === t.type(o.data) ? o.data : t.param(o.data)), u.open(i.type, i.url), u.send(r)
            },
            abort: function () {
              u && u.abort()
            }
          }
        }
      })
    }
  }(window.jQuery)
}, function (t, e, n) {
  var r = n(1),
    i = n(48);
  r.define("ix", t.exports = function (t, e) {
    var n, o, a = {},
      u = t(window),
      c = ".w-ix",
      s = t.tram,
      f = r.env,
      l = f(),
      d = f.chrome && f.chrome < 35,
      p = "none 0s ease 0s",
      h = t(),
      v = {},
      g = [],
      m = [],
      y = [],
      b = 1,
      w = {
        tabs: ".w-tab-link, .w-tab-pane",
        dropdown: ".w-dropdown",
        slider: ".w-slide",
        navbar: ".w-nav"
      };

    function x(t) {
      t && (v = {}, e.each(t, function (t) {
        v[t.slug] = t.value
      }), _())
    }

    function _() {
      ! function () {
        var e = t("[data-ix]");
        if (!e.length) return;
        e.each(I), e.each(O), g.length && (r.scroll.on(E), setTimeout(E, 1));
        m.length && r.load(S);
        y.length && setTimeout(T, b)
      }(), i.init(), r.redraw.up()
    }

    function O(n, o) {
      var u = t(o),
        s = u.attr("data-ix"),
        f = v[s];
      if (f) {
        var d = f.triggers;
        d && (a.style(u, f.style), e.each(d, function (t) {
          var e = {},
            n = t.type,
            o = t.stepsB && t.stepsB.length;

          function a() {
            A(t, u, {
              group: "A"
            })
          }

          function s() {
            A(t, u, {
              group: "B"
            })
          }
          if ("load" !== n) {
            if ("click" === n) return u.on("click" + c, function (n) {
              r.validClick(n.currentTarget) && ("#" === u.attr("href") && n.preventDefault(), A(t, u, {
                group: e.clicked ? "B" : "A"
              }), o && (e.clicked = !e.clicked))
            }), void(h = h.add(u));
            if ("hover" === n) return u.on("mouseenter" + c, a), u.on("mouseleave" + c, s), void(h = h.add(u));
            if ("scroll" !== n) {
              var f = w[n];
              if (f) {
                var d = u.closest(f);
                return d.on(i.types.INTRO, a).on(i.types.OUTRO, s), void(h = h.add(d))
              }
            } else g.push({
              el: u,
              trigger: t,
              state: {
                active: !1
              },
              offsetTop: j(t.offsetTop),
              offsetBot: j(t.offsetBot)
            })
          } else t.preload && !l ? m.push(a) : y.push(a)
        }))
      }
    }

    function j(t) {
      if (!t) return 0;
      t = String(t);
      var e = parseInt(t, 10);
      return e != e ? 0 : (t.indexOf("%") > 0 && (e /= 100) >= 1 && (e = .999), e)
    }

    function I(e, n) {
      t(n).off(c)
    }

    function E() {
      for (var t = u.scrollTop(), e = u.height(), n = g.length, r = 0; r < n; r++) {
        var i = g[r],
          o = i.el,
          a = i.trigger,
          c = a.stepsB && a.stepsB.length,
          s = i.state,
          f = o.offset().top,
          l = o.outerHeight(),
          d = i.offsetTop,
          p = i.offsetBot;
        d < 1 && d > 0 && (d *= e), p < 1 && p > 0 && (p *= e);
        var h = f + l - d >= t && f + p <= t + e;
        h !== s.active && ((!1 !== h || c) && (s.active = h, A(a, o, {
          group: h ? "A" : "B"
        })))
      }
    }

    function S() {
      for (var t = m.length, e = 0; e < t; e++) m[e]()
    }

    function T() {
      for (var t = y.length, e = 0; e < t; e++) y[e]()
    }

    function A(e, r, i, o) {
      var a = (i = i || {}).done,
        u = e.preserve3d;
      if (!n || i.force) {
        var c = i.group || "A",
          f = e["loop" + c],
          p = e["steps" + c];
        if (p && p.length) {
          if (p.length < 2 && (f = !1), !o) {
            var h = e.selector;
            h && (r = e.descend ? r.find(h) : e.siblings ? r.siblings(h) : t(h), l && r.attr("data-ix-affect", 1)), d && r.addClass("w-ix-emptyfix"), u && r.css("transform-style", "preserve-3d")
          }
          for (var v = s(r), g = {
              omit3d: !u
            }, m = 0; m < p.length; m++) k(v, p[m], g);
          g.start ? v.then(y) : y()
        }
      }

      function y() {
        if (f) return A(e, r, i, !0);
        "auto" === g.width && v.set({
          width: "auto"
        }), "auto" === g.height && v.set({
          height: "auto"
        }), a && a()
      }
    }

    function k(t, e, n) {
      var i = "add",
        o = "start";
      n.start && (i = o = "then");
      var a = e.transition;
      if (a) {
        a = a.split(",");
        for (var u = 0; u < a.length; u++) {
          var c = a[u];
          t[i](c)
        }
      }
      var s = M(e, n) || {};
      if (null != s.width && (n.width = s.width), null != s.height && (n.height = s.height), null == a) {
        n.start ? t.then(function () {
          var e = this.queue;
          this.set(s), s.display && (t.redraw(), r.redraw.up()), this.queue = e, this.next()
        }) : (t.set(s), s.display && (t.redraw(), r.redraw.up()));
        var f = s.wait;
        null != f && (t.wait(f), n.start = !0)
      } else {
        if (s.display) {
          var l = s.display;
          delete s.display, n.start ? t.then(function () {
            var t = this.queue;
            this.set({
              display: l
            }).redraw(), r.redraw.up(), this.queue = t, this.next()
          }) : (t.set({
            display: l
          }).redraw(), r.redraw.up())
        }
        t[o](s), n.start = !0
      }
    }

    function M(t, e) {
      var n = e && e.omit3d,
        r = {},
        i = !1;
      for (var o in t) "transition" !== o && "keysort" !== o && (!n || "z" !== o && "rotateX" !== o && "rotateY" !== o && "scaleZ" !== o) && (r[o] = t[o], i = !0);
      return i ? r : null
    }
    return a.init = function (t) {
      setTimeout(function () {
        x(t)
      }, 1)
    }, a.preview = function () {
      n = !1, b = 100, setTimeout(function () {
        x(window.__wf_ix)
      }, 1)
    }, a.design = function () {
      n = !0, a.destroy()
    }, a.destroy = function () {
      o = !0, h.each(I), r.scroll.off(E), i.async(), g = [], m = [], y = []
    }, a.ready = function () {
      if (l) return f("design") ? a.design() : a.preview();
      v && o && (o = !1, _())
    }, a.run = A, a.style = l ? function (e, n) {
      var r = s(e);
      if (t.isEmptyObject(n)) return;
      e.css("transition", "");
      var i = e.css("transition");
      i === p && (i = r.upstream = null);
      r.upstream = p, r.set(M(n)), r.upstream = i
    } : function (t, e) {
      s(t).set(M(e))
    }, a
  })
}, function (t, e, n) {
  var r = n(1),
    i = n(92);
  r.define("ix2", t.exports = function () {
    return i
  })
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), n.d(e, "init", function () {
    return f
  }), n.d(e, "destroy", function () {
    return l
  }), n.d(e, "store", function () {
    return s
  });
  var r = n(49),
    i = n(107),
    o = n(56),
    a = n(1),
    u = n.n(a),
    c = n(43);
  n.d(e, "actions", function () {
    return c
  });
  var s = Object(r.b)(i.a);

  function f(t) {
    l(), Object(o.c)({
      store: s,
      rawData: t,
      allowEvents: !0
    })
  }

  function l() {
    Object(o.e)(s)
  }
  u.a.env() && Object(o.a)(s)
}, function (t, e, n) {
  "use strict";
  var r = n(52),
    i = n(96),
    o = n(97),
    a = "[object Null]",
    u = "[object Undefined]",
    c = r.a ? r.a.toStringTag : void 0;
  e.a = function (t) {
    return null == t ? void 0 === t ? u : a : c && c in Object(t) ? Object(i.a)(t) : Object(o.a)(t)
  }
}, function (t, e, n) {
  "use strict";
  var r = n(95),
    i = "object" == typeof self && self && self.Object === Object && self,
    o = r.a || i || Function("return this")();
  e.a = o
}, function (t, e, n) {
  "use strict";
  (function (t) {
    var n = "object" == typeof t && t && t.Object === Object && t;
    e.a = n
  }).call(e, n(23))
}, function (t, e, n) {
  "use strict";
  var r = n(52),
    i = Object.prototype,
    o = i.hasOwnProperty,
    a = i.toString,
    u = r.a ? r.a.toStringTag : void 0;
  e.a = function (t) {
    var e = o.call(t, u),
      n = t[u];
    try {
      t[u] = void 0;
      var r = !0
    } catch (t) {}
    var i = a.call(t);
    return r && (e ? t[u] = n : delete t[u]), i
  }
}, function (t, e, n) {
  "use strict";
  var r = Object.prototype.toString;
  e.a = function (t) {
    return r.call(t)
  }
}, function (t, e, n) {
  "use strict";
  var r = n(99),
    i = Object(r.a)(Object.getPrototypeOf, Object);
  e.a = i
}, function (t, e, n) {
  "use strict";
  e.a = function (t, e) {
    return function (n) {
      return t(e(n))
    }
  }
}, function (t, e, n) {
  "use strict";
  e.a = function (t) {
    return null != t && "object" == typeof t
  }
}, function (t, e, n) {
  "use strict";
  (function (t, r) {
    var i, o = n(103);
    i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : r;
    var a = Object(o.a)(i);
    e.a = a
  }).call(e, n(23), n(102)(t))
}, function (t, e) {
  t.exports = function (t) {
    if (!t.webpackPolyfill) {
      var e = Object.create(t);
      e.children || (e.children = []), Object.defineProperty(e, "loaded", {
        enumerable: !0,
        get: function () {
          return e.l
        }
      }), Object.defineProperty(e, "id", {
        enumerable: !0,
        get: function () {
          return e.i
        }
      }), Object.defineProperty(e, "exports", {
        enumerable: !0
      }), e.webpackPolyfill = 1
    }
    return e
  }
}, function (t, e, n) {
  "use strict";
  e.a = function (t) {
    var e, n = t.Symbol;
    "function" == typeof n ? n.observable ? e = n.observable : (e = n("observable"), n.observable = e) : e = "@@observable";
    return e
  }
}, function (t, e, n) {
  "use strict";
  e.a = function (t) {
    for (var e = Object.keys(t), n = {}, o = 0; o < e.length; o++) {
      var a = e[o];
      0, "function" == typeof t[a] && (n[a] = t[a])
    }
    var u, c = Object.keys(n);
    try {
      ! function (t) {
        Object.keys(t).forEach(function (e) {
          var n = t[e],
            i = n(void 0, {
              type: r.a.INIT
            });
          if (void 0 === i) throw new Error('Reducer "' + e + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
          var o = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
          if (void 0 === n(void 0, {
              type: o
            })) throw new Error('Reducer "' + e + "\" returned undefined when probed with a random type. Don't try to handle " + r.a.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.')
        })
      }(n)
    } catch (t) {
      u = t
    }
    return function () {
      var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
        e = arguments[1];
      if (u) throw u;
      for (var r = !1, o = {}, a = 0; a < c.length; a++) {
        var s = c[a],
          f = n[s],
          l = t[s],
          d = f(l, e);
        if (void 0 === d) {
          var p = i(s, e);
          throw new Error(p)
        }
        o[s] = d, r = r || d !== l
      }
      return r ? o : t
    }
  };
  var r = n(50);
  n(51), n(53);

  function i(t, e) {
    var n = e && e.type;
    return "Given action " + (n && '"' + n.toString() + '"' || "an action") + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
  }
}, function (t, e, n) {
  "use strict"
}, function (t, e, n) {
  "use strict";
  n(54), Object.assign
}, function (t, e, n) {
  "use strict";
  var r = n(49),
    i = n(108),
    o = n(109),
    a = n(111),
    u = n(112),
    c = n(115);
  e.a = Object(r.a)({
    ixData: i.a,
    ixRequest: o.a,
    ixSession: a.a,
    ixInstances: u.a,
    ixParameters: c.a
  })
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", function () {
    return i
  });
  var r = n(6),
    i = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
        e = arguments[1];
      switch (e.type) {
        case r.l:
          return e.payload.ixData || Object.freeze({});
        default:
          return t
      }
    }
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", function () {
    return l
  });
  var r, i = n(6),
    o = n(12),
    a = n.n(o),
    u = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
      }
      return t
    };

  function c(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t
  }
  var s = {
      preview: {},
      playback: {},
      stop: {},
      clear: {}
    },
    f = Object.create(null, (c(r = {}, i.k, {
      value: "preview"
    }), c(r, i.j, {
      value: "playback"
    }), c(r, i.p, {
      value: "stop"
    }), c(r, i.c, {
      value: "clear"
    }), r)),
    l = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
        e = arguments[1];
      return e.type in f ? a()(t, c({}, f[e.type], {
        $set: u({}, e.payload)
      })) : t
    }
}, function (t, e, n) {
  "use strict";
  t.exports = function (t, e, n, r, i, o, a, u) {
    if (!t) {
      var c;
      if (void 0 === e) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
      else {
        var s = [n, r, i, o, a, u],
          f = 0;
        (c = new Error(e.replace(/%s/g, function () {
          return s[f++]
        }))).name = "Invariant Violation"
      }
      throw c.framesToPop = 1, c
    }
  }
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", function () {
    return c
  });
  var r = n(6),
    i = n(12),
    o = n.n(i);

  function a(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t
  }
  var u = {
      active: !1,
      eventListeners: [],
      eventState: {},
      playbackState: {},
      viewportWidth: 0,
      mediaQueryKey: null,
      hasBoundaryNodes: !1
    },
    c = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
        e = arguments[1];
      switch (e.type) {
        case r.m:
          var n = e.payload.hasBoundaryNodes;
          return o()(t, {
            hasBoundaryNodes: {
              $set: n
            }
          });
        case r.n:
          return o()(t, {
            active: {
              $set: !0
            }
          });
        case r.o:
          return u;
        case r.d:
          return o()(t, {
            eventListeners: {
              $push: [e.payload]
            }
          });
        case r.e:
          return o()(t, {
            eventState: a({}, e.payload.stateKey, {
              $set: e.payload.newState
            })
          });
        case r.a:
          var i = e.payload,
            c = i.actionListId,
            s = i.isPlaying;
          return o()(t, {
            playbackState: a({}, c, {
              $set: s
            })
          });
        case r.q:
          for (var f = e.payload, l = f.width, d = f.mediaQueries, p = d.length, h = null, v = 0; v < p; v++) {
            var g = d[v],
              m = g.key,
              y = g.min,
              b = g.max;
            if (l >= y && l <= b) {
              h = m;
              break
            }
          }
          return o()(t, {
            viewportWidth: {
              $set: l
            },
            mediaQueryKey: {
              $set: h
            }
          });
        default:
          return t
      }
    }
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", function () {
    return f
  });
  var r = n(6),
    i = n(12),
    o = n.n(i),
    a = n(55);

  function u(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t
  }
  var c = function (t, e) {
      var n = t.position,
        r = t.parameterId,
        i = t.actionGroups,
        u = t.destinationKeys,
        c = t.smoothing,
        s = t.restingValue,
        f = e.payload.parameters,
        l = Math.max(1 - c, .01),
        d = f[r];
      null == d && (l = 1, d = s);
      var p = Math.max(d, 0) || 0,
        h = Object(a.b)(p - n),
        v = Object(a.b)(n + h * l),
        g = 100 * v;
      if (v === n && t.current) return t;
      for (var m = void 0, y = void 0, b = void 0, w = void 0, x = 0, _ = i.length; x < _; x++) {
        var O = i[x],
          j = O.keyframe,
          I = O.actionItems;
        if (0 === x && (m = I[0]), g >= j) {
          m = I[0];
          var E = i[x + 1],
            S = E && g !== j;
          y = S ? E.actionItems[0] : null, S && (b = j / 100, w = (E.keyframe - j) / 100)
        }
      }
      var T = {};
      if (m && !y)
        for (var A = 0, k = u.length; A < k; A++) {
          var M = u[A];
          T[M] = m.config[M]
        } else if (m && y)
          for (var C = (v - b) / w, L = m.config.easing, P = Object(a.a)(L, C), R = 0, D = u.length; R < D; R++) {
            var N = u[R],
              V = m.config[N],
              z = (y.config[N] - V) * P + V;
            T[N] = z
          }
      return o()(t, {
        position: {
          $set: v
        },
        current: {
          $set: T
        }
      })
    },
    s = function (t, e) {
      var n = t,
        r = n.active,
        i = n.origin,
        u = n.start,
        c = n.immediate,
        s = n.isGeneral,
        f = n.verbose,
        l = n.actionItem,
        d = n.destination,
        p = n.destinationKeys,
        h = l.config.easing,
        v = l.config,
        g = v.duration,
        m = v.delay;
      s ? g = 0 : c && (g = m = 0);
      var y = e.payload.now;
      if (r && i) {
        var b = y - (u + m);
        if (f) {
          var w = y - u,
            x = g + m,
            _ = Object(a.b)(Math.min(Math.max(0, w / x), 1));
          t = o()(t, {
            verboseTimeElapsed: {
              $set: x * _
            }
          })
        }
        if (b < 0) return t;
        var O = Object(a.b)(Math.min(Math.max(0, b / g), 1)),
          j = Object(a.a)(h, O),
          I = {},
          E = p.length ? p.reduce(function (t, e) {
            var n = d[e],
              r = parseFloat(i[e]) || 0,
              o = (parseFloat(n) - r) * j + r;
            return t[e] = o, t
          }, {}) : null;
        return I.current = {
          $set: E
        }, I.position = {
          $set: O
        }, 1 === O && (I.active = {
          $set: !1
        }, I.complete = {
          $set: !0
        }), o()(t, I)
      }
      return t
    },
    f = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
        e = arguments[1];
      switch (e.type) {
        case r.l:
          return e.payload.ixInstances || Object.freeze({});
        case r.o:
          return Object.freeze({});
        case r.f:
          var n = e.payload,
            i = n.instanceId,
            a = n.actionItem,
            f = n.element,
            l = n.eventId,
            d = n.eventTarget,
            p = n.eventStateKey,
            h = n.actionListId,
            v = n.groupIndex,
            g = n.isCarrier,
            m = n.origin,
            y = n.destination,
            b = n.immediate,
            w = n.verbose,
            x = n.continuous,
            _ = n.parameterId,
            O = n.actionGroups,
            j = n.smoothing,
            I = n.restingValue,
            E = a.actionTypeId,
            S = void 0,
            T = S = /^TRANSFORM_/.test(E),
            A = !S && (S = /^STYLE_/.test(E)),
            k = !S && (S = /^GENERAL_/.test(E)),
            M = A && E.replace("STYLE_", "").toLowerCase(),
            C = Object.keys(y).filter(function (t) {
              return null != y[t]
            });
          return o()(t, u({}, i, {
            $set: {
              id: i,
              active: !1,
              position: 0,
              start: 0,
              origin: m,
              destination: y,
              destinationKeys: C,
              immediate: b,
              verbose: w,
              current: null,
              actionItem: a,
              element: f,
              eventId: l,
              eventTarget: d,
              eventStateKey: p,
              actionListId: h,
              groupIndex: v,
              isTransform: T,
              isStyle: A,
              isGeneral: k,
              isCarrier: g,
              styleProp: M,
              continuous: x,
              parameterId: _,
              actionGroups: O,
              smoothing: j,
              restingValue: I
            }
          }));
        case r.h:
          var L = e.payload.instanceId;
          return o()(t, u({}, L, {
            $merge: {
              active: !0,
              complete: !1,
              start: window.performance.now()
            }
          }));
        case r.g:
          var P = e.payload.instanceId;
          return o()(t, {
            $unset: [P]
          });
        case r.b:
          for (var R = t, D = Object.keys(t), N = D.length, V = 0; V < N; V++) {
            var z = D[V],
              $ = t[z],
              F = $.continuous ? c : s;
            R = o()(R, u({}, z, {
              $set: F($, e)
            }))
          }
          return R;
        default:
          return t
      }
    }
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), n.d(e, "ease", function () {
    return a
  }), n.d(e, "easeIn", function () {
    return u
  }), n.d(e, "easeOut", function () {
    return c
  }), n.d(e, "easeInOut", function () {
    return s
  }), e.inQuad = function (t) {
    return Math.pow(t, 2)
  }, e.outQuad = function (t) {
    return -(Math.pow(t - 1, 2) - 1)
  }, e.inOutQuad = function (t) {
    if ((t /= .5) < 1) return .5 * Math.pow(t, 2);
    return -.5 * ((t -= 2) * t - 2)
  }, e.inCubic = function (t) {
    return Math.pow(t, 3)
  }, e.outCubic = function (t) {
    return Math.pow(t - 1, 3) + 1
  }, e.inOutCubic = function (t) {
    if ((t /= .5) < 1) return .5 * Math.pow(t, 3);
    return .5 * (Math.pow(t - 2, 3) + 2)
  }, e.inQuart = function (t) {
    return Math.pow(t, 4)
  }, e.outQuart = function (t) {
    return -(Math.pow(t - 1, 4) - 1)
  }, e.inOutQuart = function (t) {
    if ((t /= .5) < 1) return .5 * Math.pow(t, 4);
    return -.5 * ((t -= 2) * Math.pow(t, 3) - 2)
  }, e.inQuint = function (t) {
    return Math.pow(t, 5)
  }, e.outQuint = function (t) {
    return Math.pow(t - 1, 5) + 1
  }, e.inOutQuint = function (t) {
    if ((t /= .5) < 1) return .5 * Math.pow(t, 5);
    return .5 * (Math.pow(t - 2, 5) + 2)
  }, e.inSine = function (t) {
    return 1 - Math.cos(t * (Math.PI / 2))
  }, e.outSine = function (t) {
    return Math.sin(t * (Math.PI / 2))
  }, e.inOutSine = function (t) {
    return -.5 * (Math.cos(Math.PI * t) - 1)
  }, e.inExpo = function (t) {
    return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
  }, e.outExpo = function (t) {
    return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
  }, e.inOutExpo = function (t) {
    if (0 === t) return 0;
    if (1 === t) return 1;
    if ((t /= .5) < 1) return .5 * Math.pow(2, 10 * (t - 1));
    return .5 * (2 - Math.pow(2, -10 * --t))
  }, e.inCirc = function (t) {
    return -(Math.sqrt(1 - t * t) - 1)
  }, e.outCirc = function (t) {
    return Math.sqrt(1 - Math.pow(t - 1, 2))
  }, e.inOutCirc = function (t) {
    if ((t /= .5) < 1) return -.5 * (Math.sqrt(1 - t * t) - 1);
    return .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
  }, e.outBounce = function (t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
  }, e.inBack = function (t) {
    return t * t * ((o + 1) * t - o)
  }, e.outBack = function (t) {
    return (t -= 1) * t * ((o + 1) * t + o) + 1
  }, e.inOutBack = function (t) {
    var e = o;
    if ((t /= .5) < 1) return t * t * ((1 + (e *= 1.525)) * t - e) * .5;
    return .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
  }, e.inElastic = function (t) {
    var e = o,
      n = 0,
      r = 1;
    if (0 === t) return 0;
    if (1 === t) return 1;
    n || (n = .3);
    r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
    return -r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)
  }, e.outElastic = function (t) {
    var e = o,
      n = 0,
      r = 1;
    if (0 === t) return 0;
    if (1 === t) return 1;
    n || (n = .3);
    r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
    return r * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1
  }, e.inOutElastic = function (t) {
    var e = o,
      n = 0,
      r = 1;
    if (0 === t) return 0;
    if (2 == (t /= .5)) return 1;
    n || (n = .3 * 1.5);
    r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
    if (t < 1) return r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5;
    return r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1
  }, e.swingFromTo = function (t) {
    var e = o;
    return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
  }, e.swingFrom = function (t) {
    return t * t * ((o + 1) * t - o)
  }, e.swingTo = function (t) {
    return (t -= 1) * t * ((o + 1) * t + o) + 1
  }, e.bounce = function (t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
  }, e.bouncePast = function (t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
  };
  var r = n(114),
    i = n.n(r),
    o = 1.70158,
    a = i()(.25, .1, .25, 1),
    u = i()(.42, 0, 1, 1),
    c = i()(0, 0, .58, 1),
    s = i()(.42, 0, .58, 1)
}, function (t, e) {
  var n = 4,
    r = .001,
    i = 1e-7,
    o = 10,
    a = 11,
    u = 1 / (a - 1),
    c = "function" == typeof Float32Array;

  function s(t, e) {
    return 1 - 3 * e + 3 * t
  }

  function f(t, e) {
    return 3 * e - 6 * t
  }

  function l(t) {
    return 3 * t
  }

  function d(t, e, n) {
    return ((s(e, n) * t + f(e, n)) * t + l(e)) * t
  }

  function p(t, e, n) {
    return 3 * s(e, n) * t * t + 2 * f(e, n) * t + l(e)
  }
  t.exports = function (t, e, s, f) {
    if (!(0 <= t && t <= 1 && 0 <= s && s <= 1)) throw new Error("bezier x values must be in [0, 1] range");
    var l = c ? new Float32Array(a) : new Array(a);
    if (t !== e || s !== f)
      for (var h = 0; h < a; ++h) l[h] = d(h * u, t, s);

    function v(e) {
      for (var c = 0, f = 1, h = a - 1; f !== h && l[f] <= e; ++f) c += u;
      var v = c + (e - l[--f]) / (l[f + 1] - l[f]) * u,
        g = p(v, t, s);
      return g >= r ? function (t, e, r, i) {
        for (var o = 0; o < n; ++o) {
          var a = p(e, r, i);
          if (0 === a) return e;
          e -= (d(e, r, i) - t) / a
        }
        return e
      }(e, v, t, s) : 0 === g ? v : function (t, e, n, r, a) {
        var u, c, s = 0;
        do {
          (u = d(c = e + (n - e) / 2, r, a) - t) > 0 ? n = c : e = c
        } while (Math.abs(u) > i && ++s < o);
        return c
      }(e, c, c + u, t, s)
    }
    return function (n) {
      return t === e && s === f ? n : 0 === n ? 0 : 1 === n ? 1 : d(v(n), e, f)
    }
  }
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", function () {
    return i
  });
  var r = n(6),
    i = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = arguments[1];
      switch (e.type) {
        case r.l:
          return e.payload.ixParameters || {};
        case r.o:
          return {};
        case r.i:
          var n = e.payload,
            i = n.key,
            o = n.value;
          return t[i] = o, t;
        default:
          return t
      }
    }
}, function (t, e, n) {
  var r = n(7),
    i = n(9),
    o = n(17);
  t.exports = function (t) {
    return function (e, n, a) {
      var u = Object(e);
      if (!i(e)) {
        var c = r(n, 3);
        e = o(e), n = function (t) {
          return c(u[t], t, u)
        }
      }
      var s = t(e, n, a);
      return s > -1 ? u[c ? e[s] : s] : void 0
    }
  }
}, function (t, e, n) {
  var r = n(118),
    i = n(168),
    o = n(68);
  t.exports = function (t) {
    var e = i(t);
    return 1 == e.length && e[0][2] ? o(e[0][0], e[0][1]) : function (n) {
      return n === t || r(n, t, e)
    }
  }
}, function (t, e, n) {
  var r = n(58),
    i = n(62),
    o = 1,
    a = 2;
  t.exports = function (t, e, n, u) {
    var c = n.length,
      s = c,
      f = !u;
    if (null == t) return !s;
    for (t = Object(t); c--;) {
      var l = n[c];
      if (f && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1
    }
    for (; ++c < s;) {
      var d = (l = n[c])[0],
        p = t[d],
        h = l[1];
      if (f && l[2]) {
        if (void 0 === p && !(d in t)) return !1
      } else {
        var v = new r;
        if (u) var g = u(p, h, d, t, e, v);
        if (!(void 0 === g ? i(h, p, o | a, u, v) : g)) return !1
      }
    }
    return !0
  }
}, function (t, e) {
  t.exports = function () {
    this.__data__ = [], this.size = 0
  }
}, function (t, e, n) {
  var r = n(14),
    i = Array.prototype.splice;
  t.exports = function (t) {
    var e = this.__data__,
      n = r(e, t);
    return !(n < 0 || (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, 0))
  }
}, function (t, e, n) {
  var r = n(14);
  t.exports = function (t) {
    var e = this.__data__,
      n = r(e, t);
    return n < 0 ? void 0 : e[n][1]
  }
}, function (t, e, n) {
  var r = n(14);
  t.exports = function (t) {
    return r(this.__data__, t) > -1
  }
}, function (t, e, n) {
  var r = n(14);
  t.exports = function (t, e) {
    var n = this.__data__,
      i = r(n, t);
    return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
  }
}, function (t, e, n) {
  var r = n(13);
  t.exports = function () {
    this.__data__ = new r, this.size = 0
  }
}, function (t, e) {
  t.exports = function (t) {
    var e = this.__data__,
      n = e.delete(t);
    return this.size = e.size, n
  }
}, function (t, e) {
  t.exports = function (t) {
    return this.__data__.get(t)
  }
}, function (t, e) {
  t.exports = function (t) {
    return this.__data__.has(t)
  }
}, function (t, e, n) {
  var r = n(13),
    i = n(25),
    o = n(26),
    a = 200;
  t.exports = function (t, e) {
    var n = this.__data__;
    if (n instanceof r) {
      var u = n.__data__;
      if (!i || u.length < a - 1) return u.push([t, e]), this.size = ++n.size, this;
      n = this.__data__ = new o(u)
    }
    return n.set(t, e), this.size = n.size, this
  }
}, function (t, e, n) {
  var r = n(59),
    i = n(132),
    o = n(3),
    a = n(61),
    u = /^\[object .+?Constructor\]$/,
    c = Function.prototype,
    s = Object.prototype,
    f = c.toString,
    l = s.hasOwnProperty,
    d = RegExp("^" + f.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  t.exports = function (t) {
    return !(!o(t) || i(t)) && (r(t) ? d : u).test(a(t))
  }
}, function (t, e, n) {
  var r = n(10),
    i = Object.prototype,
    o = i.hasOwnProperty,
    a = i.toString,
    u = r ? r.toStringTag : void 0;
  t.exports = function (t) {
    var e = o.call(t, u),
      n = t[u];
    try {
      t[u] = void 0;
      var r = !0
    } catch (t) {}
    var i = a.call(t);
    return r && (e ? t[u] = n : delete t[u]), i
  }
}, function (t, e) {
  var n = Object.prototype.toString;
  t.exports = function (t) {
    return n.call(t)
  }
}, function (t, e, n) {
  var r, i = n(133),
    o = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
  t.exports = function (t) {
    return !!o && o in t
  }
}, function (t, e, n) {
  var r = n(2)["__core-js_shared__"];
  t.exports = r
}, function (t, e) {
  t.exports = function (t, e) {
    return null == t ? void 0 : t[e]
  }
}, function (t, e, n) {
  var r = n(136),
    i = n(13),
    o = n(25);
  t.exports = function () {
    this.size = 0, this.__data__ = {
      hash: new r,
      map: new(o || i),
      string: new r
    }
  }
}, function (t, e, n) {
  var r = n(137),
    i = n(138),
    o = n(139),
    a = n(140),
    u = n(141);

  function c(t) {
    var e = -1,
      n = null == t ? 0 : t.length;
    for (this.clear(); ++e < n;) {
      var r = t[e];
      this.set(r[0], r[1])
    }
  }
  c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function (t, e, n) {
  var r = n(15);
  t.exports = function () {
    this.__data__ = r ? r(null) : {}, this.size = 0
  }
}, function (t, e) {
  t.exports = function (t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0, e
  }
}, function (t, e, n) {
  var r = n(15),
    i = "__lodash_hash_undefined__",
    o = Object.prototype.hasOwnProperty;
  t.exports = function (t) {
    var e = this.__data__;
    if (r) {
      var n = e[t];
      return n === i ? void 0 : n
    }
    return o.call(e, t) ? e[t] : void 0
  }
}, function (t, e, n) {
  var r = n(15),
    i = Object.prototype.hasOwnProperty;
  t.exports = function (t) {
    var e = this.__data__;
    return r ? void 0 !== e[t] : i.call(e, t)
  }
}, function (t, e, n) {
  var r = n(15),
    i = "__lodash_hash_undefined__";
  t.exports = function (t, e) {
    var n = this.__data__;
    return this.size += this.has(t) ? 0 : 1, n[t] = r && void 0 === e ? i : e, this
  }
}, function (t, e, n) {
  var r = n(16);
  t.exports = function (t) {
    var e = r(this, t).delete(t);
    return this.size -= e ? 1 : 0, e
  }
}, function (t, e) {
  t.exports = function (t) {
    var e = typeof t;
    return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
  }
}, function (t, e, n) {
  var r = n(16);
  t.exports = function (t) {
    return r(this, t).get(t)
  }
}, function (t, e, n) {
  var r = n(16);
  t.exports = function (t) {
    return r(this, t).has(t)
  }
}, function (t, e, n) {
  var r = n(16);
  t.exports = function (t, e) {
    var n = r(this, t),
      i = n.size;
    return n.set(t, e), this.size += n.size == i ? 0 : 1, this
  }
}, function (t, e, n) {
  var r = n(58),
    i = n(63),
    o = n(153),
    a = n(157),
    u = n(34),
    c = n(0),
    s = n(27),
    f = n(29),
    l = 1,
    d = "[object Arguments]",
    p = "[object Array]",
    h = "[object Object]",
    v = Object.prototype.hasOwnProperty;
  t.exports = function (t, e, n, g, m, y) {
    var b = c(t),
      w = c(e),
      x = p,
      _ = p;
    b || (x = (x = u(t)) == d ? h : x), w || (_ = (_ = u(e)) == d ? h : _);
    var O = x == h,
      j = _ == h,
      I = x == _;
    if (I && s(t)) {
      if (!s(e)) return !1;
      b = !0, O = !1
    }
    if (I && !O) return y || (y = new r), b || f(t) ? i(t, e, n, g, m, y) : o(t, e, x, n, g, m, y);
    if (!(n & l)) {
      var E = O && v.call(t, "__wrapped__"),
        S = j && v.call(e, "__wrapped__");
      if (E || S) {
        var T = E ? t.value() : t,
          A = S ? e.value() : e;
        return y || (y = new r), m(T, A, n, g, y)
      }
    }
    return !!I && (y || (y = new r), a(t, e, n, g, m, y))
  }
}, function (t, e, n) {
  var r = n(26),
    i = n(149),
    o = n(150);

  function a(t) {
    var e = -1,
      n = null == t ? 0 : t.length;
    for (this.__data__ = new r; ++e < n;) this.add(t[e])
  }
  a.prototype.add = a.prototype.push = i, a.prototype.has = o, t.exports = a
}, function (t, e) {
  var n = "__lodash_hash_undefined__";
  t.exports = function (t) {
    return this.__data__.set(t, n), this
  }
}, function (t, e) {
  t.exports = function (t) {
    return this.__data__.has(t)
  }
}, function (t, e) {
  t.exports = function (t, e) {
    for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
      if (e(t[n], n, t)) return !0;
    return !1
  }
}, function (t, e) {
  t.exports = function (t, e) {
    return t.has(e)
  }
}, function (t, e, n) {
  var r = n(10),
    i = n(154),
    o = n(24),
    a = n(63),
    u = n(155),
    c = n(156),
    s = 1,
    f = 2,
    l = "[object Boolean]",
    d = "[object Date]",
    p = "[object Error]",
    h = "[object Map]",
    v = "[object Number]",
    g = "[object RegExp]",
    m = "[object Set]",
    y = "[object String]",
    b = "[object Symbol]",
    w = "[object ArrayBuffer]",
    x = "[object DataView]",
    _ = r ? r.prototype : void 0,
    O = _ ? _.valueOf : void 0;
  t.exports = function (t, e, n, r, _, j, I) {
    switch (n) {
      case x:
        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
        t = t.buffer, e = e.buffer;
      case w:
        return !(t.byteLength != e.byteLength || !j(new i(t), new i(e)));
      case l:
      case d:
      case v:
        return o(+t, +e);
      case p:
        return t.name == e.name && t.message == e.message;
      case g:
      case y:
        return t == e + "";
      case h:
        var E = u;
      case m:
        var S = r & s;
        if (E || (E = c), t.size != e.size && !S) return !1;
        var T = I.get(t);
        if (T) return T == e;
        r |= f, I.set(t, e);
        var A = a(E(t), E(e), r, _, j, I);
        return I.delete(t), A;
      case b:
        if (O) return O.call(t) == O.call(e)
    }
    return !1
  }
}, function (t, e, n) {
  var r = n(2).Uint8Array;
  t.exports = r
}, function (t, e) {
  t.exports = function (t) {
    var e = -1,
      n = Array(t.size);
    return t.forEach(function (t, r) {
      n[++e] = [r, t]
    }), n
  }
}, function (t, e) {
  t.exports = function (t) {
    var e = -1,
      n = Array(t.size);
    return t.forEach(function (t) {
      n[++e] = t
    }), n
  }
}, function (t, e, n) {
  var r = n(17),
    i = 1,
    o = Object.prototype.hasOwnProperty;
  t.exports = function (t, e, n, a, u, c) {
    var s = n & i,
      f = r(t),
      l = f.length;
    if (l != r(e).length && !s) return !1;
    for (var d = l; d--;) {
      var p = f[d];
      if (!(s ? p in e : o.call(e, p))) return !1
    }
    var h = c.get(t);
    if (h && c.get(e)) return h == e;
    var v = !0;
    c.set(t, e), c.set(e, t);
    for (var g = s; ++d < l;) {
      var m = t[p = f[d]],
        y = e[p];
      if (a) var b = s ? a(y, m, p, e, t, c) : a(m, y, p, t, e, c);
      if (!(void 0 === b ? m === y || u(m, y, n, a, c) : b)) {
        v = !1;
        break
      }
      g || (g = "constructor" == p)
    }
    if (v && !g) {
      var w = t.constructor,
        x = e.constructor;
      w != x && "constructor" in t && "constructor" in e && !("function" == typeof w && w instanceof w && "function" == typeof x && x instanceof x) && (v = !1)
    }
    return c.delete(t), c.delete(e), v
  }
}, function (t, e) {
  t.exports = function (t, e) {
    for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
    return r
  }
}, function (t, e, n) {
  var r = n(8),
    i = n(5),
    o = "[object Arguments]";
  t.exports = function (t) {
    return i(t) && r(t) == o
  }
}, function (t, e) {
  t.exports = function () {
    return !1
  }
}, function (t, e, n) {
  var r = n(8),
    i = n(30),
    o = n(5),
    a = {};
  a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, t.exports = function (t) {
    return o(t) && i(t.length) && !!a[r(t)]
  }
}, function (t, e) {
  t.exports = function (t) {
    return function (e) {
      return t(e)
    }
  }
}, function (t, e, n) {
  (function (t) {
    var r = n(60),
      i = "object" == typeof e && e && !e.nodeType && e,
      o = i && "object" == typeof t && t && !t.nodeType && t,
      a = o && o.exports === i && r.process,
      u = function () {
        try {
          return a && a.binding && a.binding("util")
        } catch (t) {}
      }();
    t.exports = u
  }).call(e, n(65)(t))
}, function (t, e, n) {
  var r = n(33)(Object.keys, Object);
  t.exports = r
}, function (t, e, n) {
  var r = n(4)(n(2), "DataView");
  t.exports = r
}, function (t, e, n) {
  var r = n(4)(n(2), "Promise");
  t.exports = r
}, function (t, e, n) {
  var r = n(4)(n(2), "Set");
  t.exports = r
}, function (t, e, n) {
  var r = n(67),
    i = n(17);
  t.exports = function (t) {
    for (var e = i(t), n = e.length; n--;) {
      var o = e[n],
        a = t[o];
      e[n] = [o, a, r(a)]
    }
    return e
  }
}, function (t, e, n) {
  var r = n(62),
    i = n(19),
    o = n(173),
    a = n(36),
    u = n(67),
    c = n(68),
    s = n(11),
    f = 1,
    l = 2;
  t.exports = function (t, e) {
    return a(t) && u(e) ? c(s(t), e) : function (n) {
      var a = i(n, t);
      return void 0 === a && a === e ? o(n, t) : r(e, a, f | l)
    }
  }
}, function (t, e, n) {
  var r = n(171),
    i = /^\./,
    o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    a = /\\(\\)?/g,
    u = r(function (t) {
      var e = [];
      return i.test(t) && e.push(""), t.replace(o, function (t, n, r, i) {
        e.push(r ? i.replace(a, "$1") : n || t)
      }), e
    });
  t.exports = u
}, function (t, e, n) {
  var r = n(172),
    i = 500;
  t.exports = function (t) {
    var e = r(t, function (t) {
        return n.size === i && n.clear(), t
      }),
      n = e.cache;
    return e
  }
}, function (t, e, n) {
  var r = n(26),
    i = "Expected a function";

  function o(t, e) {
    if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(i);
    var n = function () {
      var r = arguments,
        i = e ? e.apply(this, r) : r[0],
        o = n.cache;
      if (o.has(i)) return o.get(i);
      var a = t.apply(this, r);
      return n.cache = o.set(i, a) || o, a
    };
    return n.cache = new(o.Cache || r), n
  }
  o.Cache = r, t.exports = o
}, function (t, e, n) {
  var r = n(174),
    i = n(175);
  t.exports = function (t, e) {
    return null != t && i(t, e, r)
  }
}, function (t, e) {
  t.exports = function (t, e) {
    return null != t && e in Object(t)
  }
}, function (t, e, n) {
  var r = n(20),
    i = n(18),
    o = n(0),
    a = n(28),
    u = n(30),
    c = n(11);
  t.exports = function (t, e, n) {
    for (var s = -1, f = (e = r(e, t)).length, l = !1; ++s < f;) {
      var d = c(e[s]);
      if (!(l = null != t && n(t, d))) break;
      t = t[d]
    }
    return l || ++s != f ? l : !!(f = null == t ? 0 : t.length) && u(f) && a(d, f) && (o(t) || i(t))
  }
}, function (t, e, n) {
  var r = n(72),
    i = n(177),
    o = n(36),
    a = n(11);
  t.exports = function (t) {
    return o(t) ? r(a(t)) : i(t)
  }
}, function (t, e, n) {
  var r = n(35);
  t.exports = function (t) {
    return function (e) {
      return r(e, t)
    }
  }
}, function (t, e, n) {
  var r = n(179),
    i = n(7),
    o = n(73),
    a = Math.max;
  t.exports = function (t, e, n) {
    var u = null == t ? 0 : t.length;
    if (!u) return -1;
    var c = null == n ? 0 : o(n);
    return c < 0 && (c = a(u + c, 0)), r(t, i(e, 3), c)
  }
}, function (t, e) {
  t.exports = function (t, e, n, r) {
    for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
      if (e(t[o], o, t)) return o;
    return -1
  }
}, function (t, e, n) {
  var r = n(38),
    i = 1 / 0,
    o = 1.7976931348623157e308;
  t.exports = function (t) {
    return t ? (t = r(t)) === i || t === -i ? (t < 0 ? -1 : 1) * o : t == t ? t : 0 : 0 === t ? t : 0
  }
}, function (t, e, n) {
  var r = n(31),
    i = n(34),
    o = n(9),
    a = n(182),
    u = n(183),
    c = "[object Map]",
    s = "[object Set]";
  t.exports = function (t) {
    if (null == t) return 0;
    if (o(t)) return a(t) ? u(t) : t.length;
    var e = i(t);
    return e == c || e == s ? t.size : r(t).length
  }
}, function (t, e, n) {
  var r = n(8),
    i = n(0),
    o = n(5),
    a = "[object String]";
  t.exports = function (t) {
    return "string" == typeof t || !i(t) && o(t) && r(t) == a
  }
}, function (t, e, n) {
  var r = n(184),
    i = n(185),
    o = n(186);
  t.exports = function (t) {
    return i(t) ? o(t) : r(t)
  }
}, function (t, e, n) {
  var r = n(72)("length");
  t.exports = r
}, function (t, e) {
  var n = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
  t.exports = function (t) {
    return n.test(t)
  }
}, function (t, e) {
  var n = "[\\ud800-\\udfff]",
    r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
    i = "\\ud83c[\\udffb-\\udfff]",
    o = "[^\\ud800-\\udfff]",
    a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    c = "(?:" + r + "|" + i + ")" + "?",
    s = "[\\ufe0e\\ufe0f]?" + c + ("(?:\\u200d(?:" + [o, a, u].join("|") + ")[\\ufe0e\\ufe0f]?" + c + ")*"),
    f = "(?:" + [o + r + "?", r, a, u, n].join("|") + ")",
    l = RegExp(i + "(?=" + i + ")|" + f + s, "g");
  t.exports = function (t) {
    for (var e = l.lastIndex = 0; l.test(t);) ++e;
    return e
  }
}, function (t, e, n) {
  var r = n(7),
    i = n(188),
    o = n(189);
  t.exports = function (t, e) {
    return o(t, i(r(e)))
  }
}, function (t, e) {
  var n = "Expected a function";
  t.exports = function (t) {
    if ("function" != typeof t) throw new TypeError(n);
    return function () {
      var e = arguments;
      switch (e.length) {
        case 0:
          return !t.call(this);
        case 1:
          return !t.call(this, e[0]);
        case 2:
          return !t.call(this, e[0], e[1]);
        case 3:
          return !t.call(this, e[0], e[1], e[2])
      }
      return !t.apply(this, e)
    }
  }
}, function (t, e, n) {
  var r = n(71),
    i = n(7),
    o = n(190),
    a = n(193);
  t.exports = function (t, e) {
    if (null == t) return {};
    var n = r(a(t), function (t) {
      return [t]
    });
    return e = i(e), o(t, n, function (t, n) {
      return e(t, n[0])
    })
  }
}, function (t, e, n) {
  var r = n(35),
    i = n(191),
    o = n(20);
  t.exports = function (t, e, n) {
    for (var a = -1, u = e.length, c = {}; ++a < u;) {
      var s = e[a],
        f = r(t, s);
      n(f, s) && i(c, o(s, t), f)
    }
    return c
  }
}, function (t, e, n) {
  var r = n(192),
    i = n(20),
    o = n(28),
    a = n(3),
    u = n(11);
  t.exports = function (t, e, n, c) {
    if (!a(t)) return t;
    for (var s = -1, f = (e = i(e, t)).length, l = f - 1, d = t; null != d && ++s < f;) {
      var p = u(e[s]),
        h = n;
      if (s != l) {
        var v = d[p];
        void 0 === (h = c ? c(v, p, d) : void 0) && (h = a(v) ? v : o(e[s + 1]) ? [] : {})
      }
      r(d, p, h), d = d[p]
    }
    return t
  }
}, function (t, e, n) {
  var r = n(74),
    i = n(24),
    o = Object.prototype.hasOwnProperty;
  t.exports = function (t, e, n) {
    var a = t[e];
    o.call(t, e) && i(a, n) && (void 0 !== n || e in t) || r(t, e, n)
  }
}, function (t, e, n) {
  var r = n(194),
    i = n(195),
    o = n(198);
  t.exports = function (t) {
    return r(t, o, i)
  }
}, function (t, e, n) {
  var r = n(39),
    i = n(0);
  t.exports = function (t, e, n) {
    var o = e(t);
    return i(t) ? o : r(o, n(t))
  }
}, function (t, e, n) {
  var r = n(39),
    i = n(196),
    o = n(197),
    a = n(76),
    u = Object.getOwnPropertySymbols ? function (t) {
      for (var e = []; t;) r(e, o(t)), t = i(t);
      return e
    } : a;
  t.exports = u
}, function (t, e, n) {
  var r = n(33)(Object.getPrototypeOf, Object);
  t.exports = r
}, function (t, e, n) {
  var r = n(33),
    i = n(76),
    o = Object.getOwnPropertySymbols,
    a = o ? r(o, Object) : i;
  t.exports = a
}, function (t, e, n) {
  var r = n(64),
    i = n(199),
    o = n(9);
  t.exports = function (t) {
    return o(t) ? r(t, !0) : i(t)
  }
}, function (t, e, n) {
  var r = n(3),
    i = n(32),
    o = n(200),
    a = Object.prototype.hasOwnProperty;
  t.exports = function (t) {
    if (!r(t)) return o(t);
    var e = i(t),
      n = [];
    for (var u in t)("constructor" != u || !e && a.call(t, u)) && n.push(u);
    return n
  }
}, function (t, e) {
  t.exports = function (t) {
    var e = [];
    if (null != t)
      for (var n in Object(t)) e.push(n);
    return e
  }
}, function (t, e, n) {
  var r = n(31),
    i = n(34),
    o = n(18),
    a = n(0),
    u = n(9),
    c = n(27),
    s = n(32),
    f = n(29),
    l = "[object Map]",
    d = "[object Set]",
    p = Object.prototype.hasOwnProperty;
  t.exports = function (t) {
    if (null == t) return !0;
    if (u(t) && (a(t) || "string" == typeof t || "function" == typeof t.splice || c(t) || f(t) || o(t))) return !t.length;
    var e = i(t);
    if (e == l || e == d) return !t.size;
    if (s(t)) return !r(t).length;
    for (var n in t)
      if (p.call(t, n)) return !1;
    return !0
  }
}, function (t, e, n) {
  var r = n(74),
    i = n(77),
    o = n(7);
  t.exports = function (t, e) {
    var n = {};
    return e = o(e, 3), i(t, function (t, i, o) {
      r(n, i, e(t, i, o))
    }), n
  }
}, function (t, e, n) {
  var r = n(204)();
  t.exports = r
}, function (t, e) {
  t.exports = function (t) {
    return function (e, n, r) {
      for (var i = -1, o = Object(e), a = r(e), u = a.length; u--;) {
        var c = a[t ? u : ++i];
        if (!1 === n(o[c], c, o)) break
      }
      return e
    }
  }
}, function (t, e, n) {
  var r = n(206),
    i = n(78),
    o = n(208),
    a = n(0);
  t.exports = function (t, e) {
    return (a(t) ? r : i)(t, o(e))
  }
}, function (t, e) {
  t.exports = function (t, e) {
    for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t););
    return t
  }
}, function (t, e, n) {
  var r = n(9);
  t.exports = function (t, e) {
    return function (n, i) {
      if (null == n) return n;
      if (!r(n)) return t(n, i);
      for (var o = n.length, a = e ? o : -1, u = Object(n);
        (e ? a-- : ++a < o) && !1 !== i(u[a], a, u););
      return n
    }
  }
}, function (t, e, n) {
  var r = n(37);
  t.exports = function (t) {
    return "function" == typeof t ? t : r
  }
}, function (t, e, n) {
  var r = n(79),
    i = n(70),
    o = n(73),
    a = n(69);
  t.exports = function (t, e, n) {
    t = a(t), e = i(e);
    var u = t.length,
      c = n = void 0 === n ? u : r(o(n), 0, u);
    return (n -= e.length) >= 0 && t.slice(n, c) == e
  }
}, function (t, e, n) {
  var r = n(211),
    i = n(3),
    o = "Expected a function";
  t.exports = function (t, e, n) {
    var a = !0,
      u = !0;
    if ("function" != typeof t) throw new TypeError(o);
    return i(n) && (a = "leading" in n ? !!n.leading : a, u = "trailing" in n ? !!n.trailing : u), r(t, e, {
      leading: a,
      maxWait: e,
      trailing: u
    })
  }
}, function (t, e, n) {
  var r = n(3),
    i = n(212),
    o = n(38),
    a = "Expected a function",
    u = Math.max,
    c = Math.min;
  t.exports = function (t, e, n) {
    var s, f, l, d, p, h, v = 0,
      g = !1,
      m = !1,
      y = !0;
    if ("function" != typeof t) throw new TypeError(a);

    function b(e) {
      var n = s,
        r = f;
      return s = f = void 0, v = e, d = t.apply(r, n)
    }

    function w(t) {
      var n = t - h;
      return void 0 === h || n >= e || n < 0 || m && t - v >= l
    }

    function x() {
      var t = i();
      if (w(t)) return _(t);
      p = setTimeout(x, function (t) {
        var n = e - (t - h);
        return m ? c(n, l - (t - v)) : n
      }(t))
    }

    function _(t) {
      return p = void 0, y && s ? b(t) : (s = f = void 0, d)
    }

    function O() {
      var t = i(),
        n = w(t);
      if (s = arguments, f = this, h = t, n) {
        if (void 0 === p) return function (t) {
          return v = t, p = setTimeout(x, e), g ? b(t) : d
        }(h);
        if (m) return p = setTimeout(x, e), b(h)
      }
      return void 0 === p && (p = setTimeout(x, e)), d
    }
    return e = o(e) || 0, r(n) && (g = !!n.leading, l = (m = "maxWait" in n) ? u(o(n.maxWait) || 0, e) : l, y = "trailing" in n ? !!n.trailing : y), O.cancel = function () {
      void 0 !== p && clearTimeout(p), v = 0, s = h = f = p = void 0
    }, O.flush = function () {
      return void 0 === p ? d : _(i())
    }, O
  }
}, function (t, e, n) {
  var r = n(2);
  t.exports = function () {
    return r.Date.now()
  }
}, function (t, e, n) {
  "use strict";
  e.__esModule = !0;
  var r, i = n(214),
    o = (r = i) && r.__esModule ? r : {
      default: r
    };
  e.default = o.default
}, function (t, e, n) {
  "use strict";
  var r = Object.prototype.hasOwnProperty;

  function i(t, e) {
    return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e
  }
  t.exports = function (t, e) {
    if (i(t, e)) return !0;
    if ("object" != typeof t || null === t || "object" != typeof e || null === e) return !1;
    var n = Object.keys(t),
      o = Object.keys(e);
    if (n.length !== o.length) return !1;
    for (var a = 0; a < n.length; a++)
      if (!r.call(e, n[a]) || !i(t[n[a]], e[n[a]])) return !1;
    return !0
  }
}, function (t, e) {
  t.exports = function (t, e) {
    return null == t || t != t ? e : t
  }
}, function (t, e, n) {
  var r = n(217),
    i = n(78),
    o = n(7),
    a = n(218),
    u = n(0);
  t.exports = function (t, e, n) {
    var c = u(t) ? r : a,
      s = arguments.length < 3;
    return c(t, o(e, 4), n, s, i)
  }
}, function (t, e) {
  t.exports = function (t, e, n, r) {
    var i = -1,
      o = null == t ? 0 : t.length;
    for (r && o && (n = t[++i]); ++i < o;) n = e(n, t[i], i, t);
    return n
  }
}, function (t, e) {
  t.exports = function (t, e, n, r, i) {
    return i(t, function (t, i, o) {
      n = r ? (r = !1, t) : e(n, t, i, o)
    }), n
  }
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.setStyle = function (t, e, n) {
    t.style[e] = n
  }, e.getStyle = function (t, e) {
    return t.style[e]
  }, e.getProperty = function (t, e) {
    return t[e]
  }, e.matchSelector = function (t) {
    return function (e) {
      return e[i.a](t)
    }
  }, e.getQuerySelector = function (t) {
    var e = t.id,
      n = t.selector;
    if (e) {
      var i = e;
      if (-1 !== e.indexOf(r.o)) {
        var o = e.split(r.o),
          a = o[0];
        if (i = o[1], a !== document.documentElement.getAttribute(r.D)) return null
      }
      return '[data-w-id^="' + i + '"]'
    }
    return n
  }, e.getValidDocument = function (t) {
    if (null == t || t === document.documentElement.getAttribute(r.D)) return document;
    return null
  }, e.queryDocument = function (t, e) {
    return Array.prototype.slice.call(document.querySelectorAll(e ? t + " " + e : t))
  }, e.elementContains = function (t, e) {
    return t.contains(e)
  }, e.isSiblingNode = function (t, e) {
    return t !== e && t.parentNode === e.parentNode
  }, e.getChildElements = function () {
    for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [], n = 0, r = t.length; n < r; n++) {
      var i = t[n].children,
        o = i.length;
      if (o)
        for (var a = 0; a < o; a++) e.push(i[a])
    }
    return e
  }, e.getSiblingElements = function () {
    for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [], n = [], r = 0, i = t.length; r < i; r++) {
      var o = t[r].parentNode;
      if (o && o.children && o.children.length && -1 === n.indexOf(o)) {
        n.push(o);
        for (var a = o.firstElementChild; null != a;) - 1 === t.indexOf(a) && e.push(a), a = a.nextElementSibling
      }
    }
    return e
  }, n.d(e, "getClosestElement", function () {
    return o
  });
  var r = n(22),
    i = n(80);
  var o = Element.prototype.closest ? function (t, e) {
    return document.documentElement.contains(t) ? t.closest(e) : null
  } : function (t, e) {
    if (!document.documentElement.contains(t)) return null;
    var n = t;
    do {
      if (n[i.a] && n[i.a](e)) return n;
      n = n.parentNode
    } while (null != n);
    return null
  }
}, function (t, e, n) {
  "use strict";
  var r, i = n(221),
    o = n.n(i),
    a = n(19),
    u = n.n(a),
    c = n(240),
    s = n.n(c),
    f = n(56),
    l = n(40),
    d = n(43),
    p = n(42),
    h = n(22),
    v = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
      }
      return t
    },
    g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };

  function m(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t
  }
  var y, b, w, x = function (t) {
      return function (e) {
        return !("object" !== (void 0 === e ? "undefined" : g(e)) || !t(e)) || e
      }
    },
    _ = x(function (t) {
      return t.element === t.nativeEvent.target
    }),
    O = x(function (t) {
      var e = t.element,
        n = t.nativeEvent;
      return e.contains(n.target)
    }),
    j = o()([_, O]),
    I = function (t, e) {
      return e ? t.getState().ixData.events[e] : null
    },
    E = function (t, e) {
      var n = t.store,
        r = t.event,
        i = t.element,
        o = t.eventStateKey,
        a = r.action,
        c = r.id,
        s = a.config,
        l = s.actionListId,
        d = s.autoStopEventId,
        p = I(n, d);
      return p && Object(f.d)({
        store: n,
        eventId: d,
        eventTarget: i,
        eventStateKey: d + h.h + o.split(h.h)[1],
        actionListId: u()(p, "action.config.actionListId")
      }), Object(f.d)({
        store: n,
        eventId: c,
        eventTarget: i,
        eventStateKey: o,
        actionListId: l
      }), Object(f.b)({
        store: n,
        eventId: c,
        eventTarget: i,
        eventStateKey: o,
        actionListId: l
      }), e
    },
    S = function (t, e) {
      return function (n, r) {
        return !0 === t(n, r) ? e(n, r) : r
      }
    },
    T = {
      handler: S(j, E)
    },
    A = v({}, T, {
      types: [p.a, p.b].join(" ")
    }),
    k = [{
      target: window,
      types: "resize orientationchange",
      throttle: !0
    }, {
      target: document,
      types: "scroll wheel readystatechange IX2_PREVIEW_LOAD",
      throttle: !0
    }],
    M = {
      types: [{
        target: document,
        types: "scroll wheel",
        throttle: !0
      }]
    },
    C = (y = void 0 !== window.pageXOffset, b = "CSS1Compat" === document.compatMode ? document.documentElement : document.body, function () {
      return {
        scrollLeft: y ? window.pageXOffset : b.scrollLeft,
        scrollTop: y ? window.pageYOffset : b.scrollTop,
        stiffScrollTop: s()(y ? window.pageYOffset : b.scrollTop, 0, b.scrollHeight - window.innerHeight),
        scrollWidth: b.scrollWidth,
        scrollHeight: b.scrollHeight,
        clientWidth: b.clientWidth,
        clientHeight: b.clientHeight,
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      }
    }),
    L = function (t) {
      return function (e, n) {
        var r = -1 !== [p.a, p.b].indexOf(e.nativeEvent.type) ? e.nativeEvent.type === p.a : n.isActive,
          i = v({}, n, {
            isActive: r
          });
        return n && i.isActive === n.isActive ? i : t(e, i) || i
      }
    },
    P = function (t) {
      return function (e, n) {
        var r = {
          elementHovered: function (t) {
            var e = t.element,
              n = t.nativeEvent,
              r = n.type,
              i = n.target,
              o = n.relatedTarget,
              a = e.contains(i);
            if ("mouseover" === r && a) return !0;
            var u = e.contains(o);
            return !("mouseout" !== r || !a || !u)
          }(e)
        };
        return (n ? r.elementHovered !== n.elementHovered : r.elementHovered) && t(e, r) || r
      }
    },
    R = function (t) {
      return function (e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = C(),
          i = r.stiffScrollTop,
          o = r.scrollHeight,
          a = r.innerHeight,
          u = e.event,
          c = u.config,
          s = u.eventTypeId,
          f = c.scrollOffsetValue,
          l = "PX" === c.scrollOffsetUnit,
          d = o - a,
          h = Number((i / d).toFixed(2));
        if (n && n.percentTop === h) return n;
        var g = (l ? f : a * (f || 0) / 100) / d,
          m = void 0,
          y = void 0,
          b = 0;
        n && (m = h > n.percentTop, b = (y = n.scrollingDown !== m) ? h : n.anchorTop);
        var w = s === p.r ? h >= b + g : h <= b - g,
          x = v({}, n, {
            percentTop: h,
            inBounds: w,
            anchorTop: b,
            scrollingDown: m
          });
        return n && w && (y || x.inBounds !== n.inBounds) && t(e, x) || x
      }
    },
    D = function (t) {
      return function (e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            clickCount: 0
          },
          r = {
            clickCount: n.clickCount % 2 + 1
          };
        return r.clickCount !== n.clickCount && t(e, r) || r
      }
    },
    N = function () {
      var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return v({}, A, {
        handler: S(t ? j : _, L(function (t, e) {
          return e.isActive ? T.handler(t, e) : e
        }))
      })
    },
    V = function () {
      var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return v({}, A, {
        handler: S(t ? j : _, L(function (t, e) {
          return e.isActive ? e : T.handler(t, e)
        }))
      })
    },
    z = v({}, M, {
      handler: (w = function (t, e) {
        var n = e.elementVisible,
          r = t.event;
        return !t.store.getState().ixData.events[r.action.config.autoStopEventId] && e.triggered ? e : r.eventTypeId === p.v === n ? (E(t), v({}, e, {
          triggered: !0
        })) : e
      }, function (t, e) {
        var n = v({}, e, {
          elementVisible: function (t) {
            var e, n, r = t.element,
              i = t.event.config,
              o = C(),
              a = o.clientWidth,
              u = o.clientHeight,
              c = i.scrollOffsetValue,
              s = "PX" === i.scrollOffsetUnit ? c : u * (c || 0) / 100;
            return e = r.getBoundingClientRect(), n = {
              left: 0,
              top: s,
              right: a,
              bottom: u - s
            }, !(e.left > n.right || e.right < n.left || e.top > n.bottom || e.bottom < n.top)
          }(t)
        });
        return (e ? n.elementVisible !== e.elementVisible : n.elementVisible) && w(t, n) || n
      })
    });
  e.a = (m(r = {}, p.x, N()), m(r, p.y, V()), m(r, p.d, N()), m(r, p.c, V()), m(r, p.n, N(!1)), m(r, p.m, V(!1)), m(r, p.z, N()), m(r, p.A, V()), m(r, p.f, {
    types: "click",
    handler: S(j, D(function (t, e) {
      var n, r, i, o = e.clickCount;
      r = (n = t).store, i = n.event.action.config.autoStopEventId, Boolean(I(r, i)) ? 1 === o && E(t) : E(t)
    }))
  }), m(r, p.k, {
    types: "click",
    handler: S(j, D(function (t, e) {
      2 === e.clickCount && E(t)
    }))
  }), m(r, p.g, v({}, T, {
    types: "mousedown"
  })), m(r, p.l, v({}, T, {
    types: "mouseup"
  })), m(r, p.j, {
    types: "mouseover mouseout",
    handler: S(j, P(function (t, e) {
      e.elementHovered && E(t)
    }))
  }), m(r, p.i, {
    types: "mouseover mouseout",
    handler: S(j, P(function (t, e) {
      e.elementHovered || E(t)
    }))
  }), m(r, p.h, {
    types: "mousemove mouseout scroll",
    handler: function (t) {
      var e = t.store,
        n = t.element,
        r = t.eventConfig,
        i = t.nativeEvent,
        o = t.eventStateKey,
        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          clientX: 0,
          clientY: 0,
          pageX: 0,
          pageY: 0
        },
        u = r.basedOn,
        c = r.selectedAxis,
        s = r.continuousParameterGroupId,
        f = r.reverse,
        h = r.restingState,
        v = void 0 === h ? 0 : h,
        g = i.clientX,
        m = void 0 === g ? a.clientX : g,
        y = i.clientY,
        b = void 0 === y ? a.clientY : y,
        w = i.pageX,
        x = void 0 === w ? a.pageX : w,
        _ = i.pageY,
        O = void 0 === _ ? a.pageY : _,
        I = "X_AXIS" === c,
        E = "mouseout" === i.type,
        S = v / 100,
        T = s,
        A = !1;
      switch (u) {
        case p.B:
          S = I ? Math.min(m, window.innerWidth) / window.innerWidth : Math.min(b, window.innerHeight) / window.innerHeight;
          break;
        case p.o:
          var k = C(),
            M = k.scrollLeft,
            L = k.scrollTop,
            P = k.scrollWidth,
            R = k.scrollHeight;
          S = I ? Math.min(M + x, P) / P : Math.min(L + O, R) / R;
          break;
        case p.e:
        default:
          T = Object(l.i)(o, s);
          var D = 0 === i.type.indexOf("mouse");
          if (D && !0 !== j({
              element: n,
              nativeEvent: i
            })) break;
          var N = n.getBoundingClientRect(),
            V = N.left,
            z = N.top,
            $ = N.width,
            F = N.height;
          if (!D && ! function (t, e) {
              return t.left > e.left && t.left < e.right && t.top > e.top && t.top < e.bottom
            }({
              left: m,
              top: b
            }, N)) break;
          A = !0, S = I ? (m - V) / $ : (b - z) / F
      }
      return E && (S > .95 || S < .05) && (S = Math.round(S)), (u !== p.e || A || A !== a.elementHovered) && (S = f ? 1 - S : S, e.dispatch(Object(d.parameterChanged)(T, S))), {
        elementHovered: A,
        clientX: m,
        clientY: b,
        pageX: x,
        pageY: O
      }
    }
  }), m(r, p.q, {
    types: k,
    handler: function (t) {
      var e = t.store,
        n = t.eventConfig,
        r = n.continuousParameterGroupId,
        i = n.reverse,
        o = C(),
        a = o.scrollTop / (o.scrollHeight - o.clientHeight);
      a = i ? 1 - a : a, e.dispatch(Object(d.parameterChanged)(r, a))
    }
  }), m(r, p.u, {
    types: k,
    handler: function (t) {
      var e = t.element,
        n = t.store,
        r = t.eventConfig,
        i = t.eventStateKey,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          scrollPercent: 0
        },
        a = C(),
        u = a.scrollLeft,
        c = a.scrollTop,
        s = a.scrollWidth,
        f = a.scrollHeight,
        h = a.clientWidth,
        v = a.clientHeight,
        g = s - h,
        m = f - v,
        y = r.basedOn,
        b = r.selectedAxis,
        w = r.continuousParameterGroupId,
        x = r.startsEntering,
        _ = r.startsExiting,
        O = r.addEndOffset,
        j = r.addStartOffset,
        I = r.addOffsetValue,
        E = void 0 === I ? 0 : I,
        S = r.endOffsetValue,
        T = void 0 === S ? 0 : S,
        A = "X_AXIS" === b;
      if (y === p.B) {
        var k = A ? u / g : c / m;
        return k !== o.scrollPercent && n.dispatch(Object(d.parameterChanged)(w, k)), {
          scrollPercent: k
        }
      }
      var M = Object(l.i)(i, w),
        L = e.getBoundingClientRect(),
        P = (j ? E : 0) / 100,
        R = (O ? T : 0) / 100;
      P = x ? P : 1 - P, R = _ ? R : 1 - R;
      var D = L.top + Math.min(L.height * P, v),
        N = L.top + L.height * R - D,
        V = Math.min(v + N, m),
        z = Math.min(Math.max(0, v - D), V) / V;
      return z !== o.scrollPercent && n.dispatch(Object(d.parameterChanged)(M, z)), {
        scrollPercent: z
      }
    }
  }), m(r, p.v, z), m(r, p.w, z), m(r, p.r, v({}, M, {
    handler: R(function (t, e) {
      e.scrollingDown && E(t)
    })
  })), m(r, p.s, v({}, M, {
    handler: R(function (t, e) {
      e.scrollingDown || E(t)
    })
  })), m(r, p.p, {
    types: "readystatechange IX2_PREVIEW_LOAD",
    handler: S(_, function (t) {
      return function (e, n) {
        var r = {
          finished: "complete" === document.readyState
        };
        return !r.finished || n && n.finshed || t(e), r
      }
    }(E))
  }), m(r, p.t, {
    types: "readystatechange IX2_PREVIEW_LOAD",
    handler: S(_, function (t) {
      return function (e, n) {
        return n || t(e), {
          started: !0
        }
      }
    }(E))
  }), r)
}, function (t, e, n) {
  var r = n(222)();
  t.exports = r
}, function (t, e, n) {
  var r = n(44),
    i = n(223),
    o = n(82),
    a = n(83),
    u = n(0),
    c = n(236),
    s = 200,
    f = "Expected a function",
    l = 8,
    d = 32,
    p = 128,
    h = 256;
  t.exports = function (t) {
    return i(function (e) {
      var n = e.length,
        i = n,
        v = r.prototype.thru;
      for (t && e.reverse(); i--;) {
        var g = e[i];
        if ("function" != typeof g) throw new TypeError(f);
        if (v && !m && "wrapper" == a(g)) var m = new r([], !0)
      }
      for (i = m ? i : n; ++i < n;) {
        g = e[i];
        var y = a(g),
          b = "wrapper" == y ? o(g) : void 0;
        m = b && c(b[0]) && b[1] == (p | l | d | h) && !b[4].length && 1 == b[9] ? m[a(b[0])].apply(m, b[3]) : 1 == g.length && c(g) ? m[y]() : m.thru(g)
      }
      return function () {
        var t = arguments,
          r = t[0];
        if (m && 1 == t.length && u(r) && r.length >= s) return m.plant(r).value();
        for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n;) o = e[i].call(this, o);
        return o
      }
    })
  }
}, function (t, e, n) {
  var r = n(224),
    i = n(227),
    o = n(229);
  t.exports = function (t) {
    return o(i(t, void 0, r), t + "")
  }
}, function (t, e, n) {
  var r = n(225);
  t.exports = function (t) {
    return null != t && t.length ? r(t, 1) : []
  }
}, function (t, e, n) {
  var r = n(39),
    i = n(226);
  t.exports = function t(e, n, o, a, u) {
    var c = -1,
      s = e.length;
    for (o || (o = i), u || (u = []); ++c < s;) {
      var f = e[c];
      n > 0 && o(f) ? n > 1 ? t(f, n - 1, o, a, u) : r(u, f) : a || (u[u.length] = f)
    }
    return u
  }
}, function (t, e, n) {
  var r = n(10),
    i = n(18),
    o = n(0),
    a = r ? r.isConcatSpreadable : void 0;
  t.exports = function (t) {
    return o(t) || i(t) || !!(a && t && t[a])
  }
}, function (t, e, n) {
  var r = n(228),
    i = Math.max;
  t.exports = function (t, e, n) {
    return e = i(void 0 === e ? t.length - 1 : e, 0),
      function () {
        for (var o = arguments, a = -1, u = i(o.length - e, 0), c = Array(u); ++a < u;) c[a] = o[e + a];
        a = -1;
        for (var s = Array(e + 1); ++a < e;) s[a] = o[a];
        return s[e] = n(c), r(t, this, s)
      }
  }
}, function (t, e) {
  t.exports = function (t, e, n) {
    switch (n.length) {
      case 0:
        return t.call(e);
      case 1:
        return t.call(e, n[0]);
      case 2:
        return t.call(e, n[0], n[1]);
      case 3:
        return t.call(e, n[0], n[1], n[2])
    }
    return t.apply(e, n)
  }
}, function (t, e, n) {
  var r = n(230),
    i = n(232)(r);
  t.exports = i
}, function (t, e, n) {
  var r = n(231),
    i = n(75),
    o = n(37),
    a = i ? function (t, e) {
      return i(t, "toString", {
        configurable: !0,
        enumerable: !1,
        value: r(e),
        writable: !0
      })
    } : o;
  t.exports = a
}, function (t, e) {
  t.exports = function (t) {
    return function () {
      return t
    }
  }
}, function (t, e) {
  var n = 800,
    r = 16,
    i = Date.now;
  t.exports = function (t) {
    var e = 0,
      o = 0;
    return function () {
      var a = i(),
        u = r - (a - o);
      if (o = a, u > 0) {
        if (++e >= n) return arguments[0]
      } else e = 0;
      return t.apply(void 0, arguments)
    }
  }
}, function (t, e, n) {
  var r = n(66),
    i = r && new r;
  t.exports = i
}, function (t, e) {
  t.exports = function () {}
}, function (t, e) {
  t.exports = {}
}, function (t, e, n) {
  var r = n(46),
    i = n(82),
    o = n(83),
    a = n(237);
  t.exports = function (t) {
    var e = o(t),
      n = a[e];
    if ("function" != typeof n || !(e in r.prototype)) return !1;
    if (t === n) return !0;
    var u = i(n);
    return !!u && t === u[0]
  }
}, function (t, e, n) {
  var r = n(46),
    i = n(44),
    o = n(45),
    a = n(0),
    u = n(5),
    c = n(238),
    s = Object.prototype.hasOwnProperty;

  function f(t) {
    if (u(t) && !a(t) && !(t instanceof r)) {
      if (t instanceof i) return t;
      if (s.call(t, "__wrapped__")) return c(t)
    }
    return new i(t)
  }
  f.prototype = o.prototype, f.prototype.constructor = f, t.exports = f
}, function (t, e, n) {
  var r = n(46),
    i = n(44),
    o = n(239);
  t.exports = function (t) {
    if (t instanceof r) return t.clone();
    var e = new i(t.__wrapped__, t.__chain__);
    return e.__actions__ = o(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
  }
}, function (t, e) {
  t.exports = function (t, e) {
    var n = -1,
      r = t.length;
    for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
    return e
  }
}, function (t, e, n) {
  var r = n(79),
    i = n(38);
  t.exports = function (t, e, n) {
    return void 0 === n && (n = e, e = void 0), void 0 !== n && (n = (n = i(n)) == n ? n : 0), void 0 !== e && (e = (e = i(e)) == e ? e : 0), r(i(t), e, n)
  }
}, function (t, e, n) {
  var r = n(1);

  function i(t, e, n, r) {
    var i, o, a, u = n.tram,
      c = Array.isArray,
      s = "w-lightbox-",
      f = /(^|\s+)/g,
      l = [];

    function d(t, e) {
      return l = c(t) ? t : [t], o || d.build(), l.length > 1 && (o.items = o.empty, l.forEach(function (t) {
        var e = k("thumbnail"),
          n = k("item").append(e);
        o.items = o.items.add(n), O(t.thumbnailUrl || t.url, function (t) {
          t.prop("width") > t.prop("height") ? S(t, "wide") : S(t, "tall"), e.append(S(t, "thumbnail-image"))
        })
      }), o.strip.empty().append(o.items), S(o.content, "group")), u(T(o.lightbox, "hide").trigger("focus")).add("opacity .3s").start({
        opacity: 1
      }), S(o.html, "noscroll"), d.show(e || 0)
    }

    function p(t) {
      return function (e) {
        this === e.target && (e.stopPropagation(), e.preventDefault(), t())
      }
    }
    d.build = function () {
      return d.destroy(), (o = {
        html: n(e.documentElement),
        empty: n()
      }).arrowLeft = k("control left inactive"), o.arrowRight = k("control right inactive"), o.close = k("control close"), o.spinner = k("spinner"), o.strip = k("strip"), a = new j(o.spinner, I("hide")), o.content = k("content").append(o.spinner, o.arrowLeft, o.arrowRight, o.close), o.container = k("container").append(o.content, o.strip), o.lightbox = k("backdrop hide").append(o.container), o.strip.on("tap", E("item"), m), o.content.on("swipe", y).on("tap", E("left"), h).on("tap", E("right"), v).on("tap", E("close"), g).on("tap", E("image, caption"), v), o.container.on("tap", E("view"), g).on("dragstart", E("img"), w), o.lightbox.on("keydown", x).on("focusin", b), n(r).append(o.lightbox.prop("tabIndex", 0)), d
    }, d.destroy = function () {
      o && (T(o.html, "noscroll"), o.lightbox.remove(), o = void 0)
    }, d.show = function (t) {
      if (t !== i) {
        var e = l[t];
        if (!e) return d.hide();
        var r, c, s = i;
        return i = t, a.show(), O(e.html && (r = e.width, c = e.height, "data:image/svg+xml;charset=utf-8," + encodeURI('<svg xmlns="http://www.w3.org/2000/svg" width="' + r + '" height="' + c + '"/>')) || e.url, function (r) {
          if (t === i) {
            var c, f, d = k("figure", "figure").append(S(r, "image")),
              p = k("frame").append(d),
              h = k("view").append(p);
            e.html && ((f = (c = n(e.html)).is("iframe")) && c.on("load", v), d.append(S(c, "embed"))), e.caption && d.append(k("caption", "figcaption").text(e.caption)), o.spinner.before(h), f || v()
          }

          function v() {
            var e, n, r, c;
            if (a.hide(), t === i) {
              if (A(o.arrowLeft, "inactive", t <= 0), A(o.arrowRight, "inactive", t >= l.length - 1), o.view ? (u(o.view).add("opacity .3s").start({
                  opacity: 0
                }).then((e = o.view, function () {
                  e.remove()
                })), u(h).add("opacity .3s").add("transform .3s").set({
                  x: t > s ? "80px" : "-80px"
                }).start({
                  opacity: 1,
                  x: 0
                })) : h.css("opacity", 1), o.view = h, o.items) {
                T(o.items, "active");
                var f = o.items.eq(t);
                S(f, "active"), n = f.position().left, r = o.strip.scrollLeft(), c = o.strip.width(), (n < r || n > c + r) && u(o.strip).add("scroll-left 500ms").start({
                  "scroll-left": n
                })
              }
            } else h.remove()
          }
        }), d
      }
    }, d.hide = function () {
      return u(o.lightbox).add("opacity .3s").start({
        opacity: 0
      }).then(_), d
    }, d.prev = function () {
      i > 0 && d.show(i - 1)
    }, d.next = function () {
      i < l.length - 1 && d.show(i + 1)
    };
    var h = p(d.prev),
      v = p(d.next),
      g = p(d.hide),
      m = function (t) {
        var e = n(this).index();
        t.preventDefault(), d.show(e)
      },
      y = function (t, e) {
        t.preventDefault(), "left" === e.direction ? d.next() : "right" === e.direction && d.prev()
      },
      b = function () {
        this.focus()
      };

    function w(t) {
      t.preventDefault()
    }

    function x(t) {
      var e = t.keyCode;
      27 === e ? d.hide() : 37 === e ? d.prev() : 39 === e && d.next()
    }

    function _() {
      o && (o.strip.scrollLeft(0).empty(), T(o.html, "noscroll"), S(o.lightbox, "hide"), o.view && o.view.remove(), T(o.content, "group"), S(o.arrowLeft, "inactive"), S(o.arrowRight, "inactive"), i = o.view = void 0)
    }

    function O(t, e) {
      var n = k("img", "img");
      return n.one("load", function () {
        e(n)
      }), n.attr("src", t), n
    }

    function j(t, e, n) {
      this.$element = t, this.className = e, this.delay = n || 200, this.hide()
    }

    function I(t, e) {
      return t.replace(f, (e ? " ." : " ") + s)
    }

    function E(t) {
      return I(t, !0)
    }

    function S(t, e) {
      return t.addClass(I(e))
    }

    function T(t, e) {
      return t.removeClass(I(e))
    }

    function A(t, e, n) {
      return t.toggleClass(I(e), n)
    }

    function k(t, r) {
      return S(n(e.createElement(r || "div")), t)
    }
    return j.prototype.show = function () {
        var t = this;
        t.timeoutId || (t.timeoutId = setTimeout(function () {
          t.$element.removeClass(t.className), delete t.timeoutId
        }, t.delay))
      }, j.prototype.hide = function () {
        if (this.timeoutId) return clearTimeout(this.timeoutId), void delete this.timeoutId;
        this.$element.addClass(this.className)
      },
      function () {
        var n = t.navigator.userAgent,
          r = n.match(/(iPhone|iPad|iPod);[^OS]*OS (\d)/);
        if (n.indexOf("Android ") > -1 && -1 === n.indexOf("Chrome") || r && !(r[2] > 7)) {
          var i = e.createElement("style");
          e.head.appendChild(i), t.addEventListener("orientationchange", o, !0), o()
        }

        function o() {
          var e = t.innerHeight,
            n = t.innerWidth,
            r = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + e + "px}.w-lightbox-view {width:" + n + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .86 * e + "px}.w-lightbox-image {max-width:" + n + "px;max-height:" + e + "px}.w-lightbox-group .w-lightbox-image {max-height:" + .86 * e + "px}.w-lightbox-strip {padding: 0 " + .01 * e + "px}.w-lightbox-item {width:" + .1 * e + "px;padding:" + .02 * e + "px " + .01 * e + "px}.w-lightbox-thumbnail {height:" + .1 * e + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + .96 * e + "px}.w-lightbox-content {margin-top:" + .02 * e + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .84 * e + "px}.w-lightbox-image {max-width:" + .96 * n + "px;max-height:" + .96 * e + "px}.w-lightbox-group .w-lightbox-image {max-width:" + .823 * n + "px;max-height:" + .84 * e + "px}}";
          i.textContent = r
        }
      }(), d
  }
  r.define("lightbox", t.exports = function (t) {
    var e, n, o = {},
      a = r.env(),
      u = i(window, document, t, a ? "#lightbox-mountpoint" : "body"),
      c = t(document),
      s = ".w-lightbox";

    function f(t) {
      var e, r, i = t.el.children(".w-json").html();
      if (i) {
        try {
          i = JSON.parse(i)
        } catch (t) {
          console.error("Malformed lightbox JSON configuration.", t)
        }! function (t) {
          t.images && (t.images.forEach(function (t) {
            t.type = "image"
          }), t.items = t.images);
          t.embed && (t.embed.type = "video", t.items = [t.embed]);
          t.groupId && (t.group = t.groupId)
        }(i), (e = i.group) ? ((r = n[e]) || (r = n[e] = []), t.items = r, i.items.length && (t.index = r.length, r.push.apply(r, i.items))) : t.items = i.items
      } else t.items = []
    }
    return o.ready = o.design = o.preview = function () {
      e = a && r.env("design"), u.destroy(), n = {}, c.find(s).webflowLightBox()
    }, jQuery.fn.extend({
      webflowLightBox: function () {
        t.each(this, function (n, r) {
          var i = t.data(r, s);
          i || (i = t.data(r, s, {
            el: t(r),
            mode: "images",
            images: [],
            embed: ""
          })), i.el.off(s), f(i), e ? i.el.on("setting" + s, f.bind(null, i)) : i.el.on("tap" + s, function (t) {
            return function () {
              t.items.length && u(t.items, t.index || 0)
            }
          }(i)).on("click" + s, function (t) {
            t.preventDefault()
          })
        })
      }
    }), o
  })
}, function (t, e, n) {
  var r = n(1);
  r.define("links", t.exports = function (t, e) {
    var n, i, o, a = {},
      u = t(window),
      c = r.env(),
      s = window.location,
      f = document.createElement("a"),
      l = "w--current",
      d = /^#[\w:.-]+$/,
      p = /index\.(html|php)$/,
      h = /\/$/;

    function v(e) {
      var r = n && e.getAttribute("href-disabled") || e.getAttribute("href");
      if (f.href = r, !(r.indexOf(":") >= 0)) {
        var a = t(e);
        if (0 === r.indexOf("#") && d.test(r)) {
          var u = t(r);
          u.length && i.push({
            link: a,
            sec: u,
            active: !1
          })
        } else if ("#" !== r && "" !== r) {
          var c = f.href === s.href || r === o || p.test(r) && h.test(o);
          m(a, l, c)
        }
      }
    }

    function g() {
      var t = u.scrollTop(),
        n = u.height();
      e.each(i, function (e) {
        var r = e.link,
          i = e.sec,
          o = i.offset().top,
          a = i.outerHeight(),
          u = .5 * n,
          c = i.is(":visible") && o + a - u >= t && o + u <= t + n;
        e.active !== c && (e.active = c, m(r, l, c))
      })
    }

    function m(t, e, n) {
      var r = t.hasClass(e);
      n && r || (n || r) && (n ? t.addClass(e) : t.removeClass(e))
    }
    return a.ready = a.design = a.preview = function () {
      n = c && r.env("design"), o = r.env("slug") || s.pathname || "", r.scroll.off(g), i = [];
      for (var t = document.links, e = 0; e < t.length; ++e) v(t[e]);
      i.length && (r.scroll.on(g), g())
    }, a
  })
}, function (t, e, n) {
  var r = n(1);
  r.define("scroll", t.exports = function (t) {
    var e = t(document),
      n = window,
      i = n.location,
      o = function () {
        try {
          return Boolean(n.frameElement)
        } catch (t) {
          return !0
        }
      }() ? null : n.history,
      a = /^[a-zA-Z0-9][\w:.-]*$/;

    function u(e, u) {
      if (a.test(e)) {
        var c = t("#" + e);
        if (c.length) {
          if (u && (u.preventDefault(), u.stopPropagation()), i.hash !== e && o && o.pushState && (!r.env.chrome || "file:" !== i.protocol))(o.state && o.state.hash) !== e && o.pushState({
            hash: e
          }, "", "#" + e);
          var s = r.env("editor") ? ".w-editor-body" : "body",
            f = t("header, " + s + " > .header, " + s + " > .w-nav:not([data-no-scroll])"),
            l = "fixed" === f.css("position") ? f.outerHeight() : 0;
          n.setTimeout(function () {
            ! function (e, r) {
              var i = t(n).scrollTop(),
                o = e.offset().top - r;
              if ("mid" === e.data("scroll")) {
                var a = t(n).height() - r,
                  u = e.outerHeight();
                u < a && (o -= Math.round((a - u) / 2))
              }
              var c = 1;
              t("body").add(e).each(function () {
                var e = parseFloat(t(this).attr("data-scroll-time"), 10);
                !isNaN(e) && (0 === e || e > 0) && (c = e)
              }), Date.now || (Date.now = function () {
                return (new Date).getTime()
              });
              var s = Date.now(),
                f = n.requestAnimationFrame || n.mozRequestAnimationFrame || n.webkitRequestAnimationFrame || function (t) {
                  n.setTimeout(t, 15)
                },
                l = (472.143 * Math.log(Math.abs(i - o) + 125) - 2e3) * c;
              ! function t() {
                var e = Date.now() - s;
                n.scroll(0, function (t, e, n, r) {
                  if (n > r) return e;
                  return t + (e - t) * (i = n / r, i < .5 ? 4 * i * i * i : (i - 1) * (2 * i - 2) * (2 * i - 2) + 1);
                  var i
                }(i, o, e, l)), e <= l && f(t)
              }()
            }(c, l)
          }, u ? 0 : 300)
        }
      }
    }
    return {
      ready: function () {
        i.hash && u(i.hash.substring(1));
        var n = i.href.split("#")[0];
        e.on("click", "a", function (e) {
          if (!(r.env("design") || window.$.mobile && t(e.currentTarget).hasClass("ui-link")))
            if ("#" !== this.getAttribute("href")) {
              var i = this.href.split("#"),
                o = i[0] === n ? i[1] : null;
              o && u(o, e)
            } else e.preventDefault()
        })
      }
    }
  })
}, function (t, e, n) {
  var r = n(1),
    i = n(245);
  r.define("slider", t.exports = function (t, e) {
    var n, o, a, u, c = {},
      s = t.tram,
      f = t(document),
      l = r.env(),
      d = ".w-slider",
      p = '<div class="w-slider-dot" data-wf-ignore />',
      h = i.triggers;

    function v() {
      (n = f.find(d)).length && (n.filter(":visible").each(y), u = null, a || (g(), r.resize.on(m), r.redraw.on(c.redraw)))
    }

    function g() {
      r.resize.off(m), r.redraw.off(c.redraw)
    }

    function m() {
      n.filter(":visible").each(E)
    }

    function y(e, n) {
      var r = t(n),
        i = t.data(n, d);
      if (i || (i = t.data(n, d, {
          index: 0,
          depth: 1,
          el: r,
          config: {}
        })), i.mask = r.children(".w-slider-mask"), i.left = r.children(".w-slider-arrow-left"), i.right = r.children(".w-slider-arrow-right"), i.nav = r.children(".w-slider-nav"), i.slides = i.mask.children(".w-slide"), i.slides.each(h.reset), u && (i.maskWidth = 0), !s.support.transform) return i.left.hide(), i.right.hide(), i.nav.hide(), void(a = !0);
      i.el.off(d), i.left.off(d), i.right.off(d), i.nav.off(d), b(i), o ? (i.el.on("setting" + d, j(i)), O(i), i.hasTimer = !1) : (i.el.on("swipe" + d, j(i)), i.left.on("tap" + d, x(i)), i.right.on("tap" + d, _(i)), i.config.autoplay && !i.hasTimer && (i.hasTimer = !0, i.timerCount = 1, function t(e) {
        O(e);
        var n = e.config;
        var r = n.timerMax;
        if (r && e.timerCount++ > r) return;
        e.timerId = window.setTimeout(function () {
          null == e.timerId || o || (_(e)(), t(e))
        }, n.delay)
      }(i))), i.nav.on("tap" + d, "> div", j(i)), l || i.mask.contents().filter(function () {
        return 3 === this.nodeType
      }).remove(), E(e, n)
    }

    function b(t) {
      var e = {
        crossOver: 0
      };
      e.animation = t.el.attr("data-animation") || "slide", "outin" === e.animation && (e.animation = "cross", e.crossOver = .5), e.easing = t.el.attr("data-easing") || "ease";
      var n = t.el.attr("data-duration");
      if (e.duration = null != n ? parseInt(n, 10) : 500, w(t.el.attr("data-infinite")) && (e.infinite = !0), w(t.el.attr("data-disable-swipe")) && (e.disableSwipe = !0), w(t.el.attr("data-hide-arrows")) ? e.hideArrows = !0 : t.config.hideArrows && (t.left.show(), t.right.show()), w(t.el.attr("data-autoplay"))) {
        e.autoplay = !0, e.delay = parseInt(t.el.attr("data-delay"), 10) || 2e3, e.timerMax = parseInt(t.el.attr("data-autoplay-limit"), 10);
        var r = "mousedown" + d + " touchstart" + d;
        o || t.el.off(r).one(r, function () {
          O(t)
        })
      }
      var i = t.right.width();
      e.edge = i ? i + 40 : 100, t.config = e
    }

    function w(t) {
      return "1" === t || "true" === t
    }

    function x(t) {
      return function () {
        I(t, {
          index: t.index - 1,
          vector: -1
        })
      }
    }

    function _(t) {
      return function () {
        I(t, {
          index: t.index + 1,
          vector: 1
        })
      }
    }

    function O(t) {
      window.clearTimeout(t.timerId), t.timerId = null
    }

    function j(n) {
      return function (i, a) {
        a = a || {};
        var u = n.config;
        if (o && "setting" === i.type) {
          if ("prev" === a.select) return x(n)();
          if ("next" === a.select) return _(n)();
          if (b(n), S(n), null == a.select) return;
          ! function (n, r) {
            var i = null;
            r === n.slides.length && (v(), S(n)), e.each(n.anchors, function (e, n) {
              t(e.els).each(function (e, o) {
                t(o).index() === r && (i = n)
              })
            }), null != i && I(n, {
              index: i,
              immediate: !0
            })
          }(n, a.select)
        } else {
          if ("swipe" === i.type) {
            if (u.disableSwipe) return;
            if (r.env("editor")) return;
            return "left" === a.direction ? _(n)() : "right" === a.direction ? x(n)() : void 0
          }
          n.nav.has(i.target).length && I(n, {
            index: t(i.target).index()
          })
        }
      }
    }

    function I(e, n) {
      n = n || {};
      var r = e.config,
        i = e.anchors;
      e.previous = e.index;
      var a = n.index,
        c = {};
      a < 0 ? (a = i.length - 1, r.infinite && (c.x = -e.endX, c.from = 0, c.to = i[0].width)) : a >= i.length && (a = 0, r.infinite && (c.x = i[i.length - 1].width, c.from = -i[i.length - 1].x, c.to = c.from - c.x)), e.index = a;
      var f = e.nav.children().eq(e.index).addClass("w-active");
      e.nav.children().not(f).removeClass("w-active"), r.hideArrows && (e.index === i.length - 1 ? e.right.hide() : e.right.show(), 0 === e.index ? e.left.hide() : e.left.show());
      var l = e.offsetX || 0,
        d = e.offsetX = -i[e.index].x,
        p = {
          x: d,
          opacity: 1,
          visibility: ""
        },
        v = t(i[e.index].els),
        g = t(i[e.previous] && i[e.previous].els),
        m = e.slides.not(v),
        y = r.animation,
        b = r.easing,
        w = Math.round(r.duration),
        x = n.vector || (e.index > e.previous ? 1 : -1),
        _ = "opacity " + w + "ms " + b,
        O = "transform " + w + "ms " + b;
      if (o || (v.each(h.intro), m.each(h.outro)), n.immediate && !u) return s(v).set(p), void E();
      if (e.index !== e.previous) {
        if ("cross" === y) {
          var j = Math.round(w - w * r.crossOver),
            I = Math.round(w - j);
          return _ = "opacity " + j + "ms " + b, s(g).set({
            visibility: ""
          }).add(_).start({
            opacity: 0
          }), void s(v).set({
            visibility: "",
            x: d,
            opacity: 0,
            zIndex: e.depth++
          }).add(_).wait(I).then({
            opacity: 1
          }).then(E)
        }
        if ("fade" === y) return s(g).set({
          visibility: ""
        }).stop(), void s(v).set({
          visibility: "",
          x: d,
          opacity: 0,
          zIndex: e.depth++
        }).add(_).start({
          opacity: 1
        }).then(E);
        if ("over" === y) return p = {
          x: e.endX
        }, s(g).set({
          visibility: ""
        }).stop(), void s(v).set({
          visibility: "",
          zIndex: e.depth++,
          x: d + i[e.index].width * x
        }).add(O).start({
          x: d
        }).then(E);
        r.infinite && c.x ? (s(e.slides.not(g)).set({
          visibility: "",
          x: c.x
        }).add(O).start({
          x: d
        }), s(g).set({
          visibility: "",
          x: c.from
        }).add(O).start({
          x: c.to
        }), e.shifted = g) : (r.infinite && e.shifted && (s(e.shifted).set({
          visibility: "",
          x: l
        }), e.shifted = null), s(e.slides).set({
          visibility: ""
        }).add(O).start({
          x: d
        }))
      }

      function E() {
        v = t(i[e.index].els), m = e.slides.not(v), "slide" !== y && (p.visibility = "hidden"), s(m).set(p)
      }
    }

    function E(e, n) {
      var r = t.data(n, d);
      if (r) return function (t) {
        var e = t.mask.width();
        if (t.maskWidth !== e) return t.maskWidth = e, !0;
        return !1
      }(r) ? S(r) : void(o && function (e) {
        var n = 0;
        if (e.slides.each(function (e, r) {
            n += t(r).outerWidth(!0)
          }), e.slidesWidth !== n) return e.slidesWidth = n, !0;
        return !1
      }(r) && S(r))
    }

    function S(e) {
      var n = 1,
        r = 0,
        i = 0,
        a = 0,
        u = e.maskWidth,
        c = u - e.config.edge;
      c < 0 && (c = 0), e.anchors = [{
        els: [],
        x: 0,
        width: 0
      }], e.slides.each(function (o, s) {
        i - r > c && (n++, r += u, e.anchors[n - 1] = {
          els: [],
          x: i,
          width: 0
        }), a = t(s).outerWidth(!0), i += a, e.anchors[n - 1].width += a, e.anchors[n - 1].els.push(s)
      }), e.endX = i, o && (e.pages = null), e.nav.length && e.pages !== n && (e.pages = n, function (e) {
        var n, r = [],
          i = e.el.attr("data-nav-spacing");
        i && (i = parseFloat(i) + "px");
        for (var o = 0; o < e.pages; o++) n = t(p), e.nav.hasClass("w-num") && n.text(o + 1), null != i && n.css({
          "margin-left": i,
          "margin-right": i
        }), r.push(n);
        e.nav.empty().append(r)
      }(e));
      var s = e.index;
      s >= n && (s = n - 1), I(e, {
        immediate: !0,
        index: s
      })
    }
    return c.ready = function () {
      o = r.env("design"), v()
    }, c.design = function () {
      o = !0, v()
    }, c.preview = function () {
      o = !1, v()
    }, c.redraw = function () {
      u = !0, v()
    }, c.destroy = g, c
  })
}, function (t, e, n) {
  "use strict";
  var r = n(48);

  function i(t, e) {
    var n = document.createEvent("CustomEvent");
    n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n)
  }
  var o = window.jQuery,
    a = {},
    u = {
      reset: function (t, e) {
        r.triggers.reset(t, e)
      },
      intro: function (t, e) {
        r.triggers.intro(t, e), i(e, "COMPONENT_ACTIVE")
      },
      outro: function (t, e) {
        r.triggers.outro(t, e), i(e, "COMPONENT_INACTIVE")
      }
    };
  a.triggers = {}, a.types = {
    INTRO: "w-ix-intro.w-ix",
    OUTRO: "w-ix-outro.w-ix"
  }, o.extend(a.triggers, u), t.exports = a
}, function (t, e, n) {
  n(1).define("touch", t.exports = function (t) {
    var e = {},
      n = !document.addEventListener,
      r = window.getSelection;

    function i(e, n, r) {
      var i = t.Event(e, {
        originalEvent: n
      });
      t(n.target).trigger(i, r)
    }
    return n && (t.event.special.tap = {
      bindType: "click",
      delegateType: "click"
    }), e.init = function (e) {
      return n ? null : (e = "string" == typeof e ? t(e).get(0) : e) ? new function (t) {
        var e, n, o, a = !1,
          u = !1,
          c = !1,
          s = Math.min(Math.round(.04 * window.innerWidth), 40);

        function f(t) {
          var r = t.touches;
          r && r.length > 1 || (a = !0, u = !1, r ? (c = !0, e = r[0].clientX, n = r[0].clientY) : (e = t.clientX, n = t.clientY), o = e)
        }

        function l(t) {
          if (a) {
            if (c && "mousemove" === t.type) return t.preventDefault(), void t.stopPropagation();
            var f = t.touches,
              l = f ? f[0].clientX : t.clientX,
              d = f ? f[0].clientY : t.clientY,
              h = l - o;
            o = l, Math.abs(h) > s && r && "" === String(r()) && (i("swipe", t, {
              direction: h > 0 ? "right" : "left"
            }), p()), (Math.abs(l - e) > 10 || Math.abs(d - n) > 10) && (u = !0)
          }
        }

        function d(t) {
          if (a) {
            if (a = !1, c && "mouseup" === t.type) return t.preventDefault(), t.stopPropagation(), void(c = !1);
            u || i("tap", t)
          }
        }

        function p() {
          a = !1
        }
        t.addEventListener("touchstart", f, !1), t.addEventListener("touchmove", l, !1), t.addEventListener("touchend", d, !1), t.addEventListener("touchcancel", p, !1), t.addEventListener("mousedown", f, !1), t.addEventListener("mousemove", l, !1), t.addEventListener("mouseup", d, !1), t.addEventListener("mouseout", p, !1), this.destroy = function () {
          t.removeEventListener("touchstart", f, !1), t.removeEventListener("touchmove", l, !1), t.removeEventListener("touchend", d, !1), t.removeEventListener("touchcancel", p, !1), t.removeEventListener("mousedown", f, !1), t.removeEventListener("mousemove", l, !1), t.removeEventListener("mouseup", d, !1), t.removeEventListener("mouseout", p, !1), t = null
        }
      }(e) : null
    }, e.instance = e.init(document), e
  })
}]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions: Init
 */
Webflow.require('ix').init([{
    "slug": "hamburger-open-on-click",
    "name": "Hamburger Open on Click",
    "value": {
      "style": {},
      "triggers": [{
        "type": "click",
        "selector": ".hamburger-line",
        "preserve3d": true,
        "stepsA": [{
          "transition": "transform 330ms ease-out 0",
          "rotateX": "0deg",
          "rotateY": "0deg",
          "rotateZ": "-45deg"
        }],
        "stepsB": [{
          "transition": "transform 300ms ease-out 0",
          "rotateX": "0deg",
          "rotateY": "0deg",
          "rotateZ": "0deg"
        }]
      }, {
        "type": "click",
        "selector": ".line-1",
        "preserve3d": true,
        "stepsA": [{
          "transition": "transform 330ms ease-out 0",
          "rotateX": "0deg",
          "rotateY": "0deg",
          "rotateZ": "-90deg",
          "x": "3px",
          "y": "0px",
          "z": "0px"
        }],
        "stepsB": [{
          "transition": "transform 300ms ease-out 0",
          "x": "0px",
          "y": "0px",
          "z": "0px",
          "rotateX": "0deg",
          "rotateY": "0deg",
          "rotateZ": "0deg"
        }]
      }, {
        "type": "click",
        "selector": ".line-3",
        "preserve3d": true,
        "stepsA": [{
          "transition": "transform 330ms ease-out 0",
          "rotateX": "0deg",
          "rotateY": "0deg",
          "rotateZ": "-90deg",
          "x": "-3px",
          "y": "0px",
          "z": "0px"
        }],
        "stepsB": [{
          "transition": "transform 300ms ease-out 0",
          "x": "0px",
          "y": "0px",
          "z": "0px",
          "rotateX": "0deg",
          "rotateY": "0deg",
          "rotateZ": "0deg"
        }]
      }, {
        "type": "click",
        "selector": ".menu-wrapper",
        "stepsA": [{
          "display": "block",
          "opacity": 1,
          "transition": "opacity 450ms ease 0"
        }],
        "stepsB": [{
          "wait": "100ms"
        }, {
          "opacity": 0,
          "transition": "opacity 450ms ease 0"
        }, {
          "display": "none"
        }]
      }, {
        "type": "click",
        "selector": ".menu-content",
        "preserve3d": true,
        "stepsA": [{
          "wait": "150ms"
        }, {
          "opacity": 1,
          "transition": "transform 450ms ease 0, opacity 300ms ease 0",
          "x": "0px",
          "y": "0px",
          "z": "0px"
        }],
        "stepsB": [{
          "opacity": 0,
          "transition": "transform 300ms ease 0, opacity 300ms ease 0",
          "x": "0px",
          "y": "25%",
          "z": "0px"
        }]
      }, {
        "type": "click",
        "selector": ".info-content",
        "preserve3d": true,
        "stepsA": [{
          "wait": "350ms"
        }, {
          "opacity": 1,
          "transition": "transform 450ms ease 0, opacity 300ms ease 0",
          "x": "0px",
          "y": "0px",
          "z": "0px"
        }],
        "stepsB": [{
          "opacity": 0,
          "transition": "transform 300ms ease 0, opacity 300ms ease 0",
          "x": "0px",
          "y": "50px",
          "z": "0px"
        }]
      }]
    }
  },
  {
    "slug": "line-first-app",
    "name": "Line First App",
    "value": {
      "style": {
        "width": "0%"
      },
      "triggers": []
    }
  },
  {
    "slug": "show-line-on-hover",
    "name": "Show Line on Hover",
    "value": {
      "style": {},
      "triggers": [{
        "type": "hover",
        "selector": ".heading-line",
        "descend": true,
        "stepsA": [{
          "width": "100%",
          "transition": "width 550ms ease 0"
        }],
        "stepsB": [{
          "width": "0%",
          "transition": "width 400ms ease 0"
        }]
      }]
    }
  },
  {
    "slug": "show-line-on-hover-2",
    "name": "Show Line on Hover 2",
    "value": {
      "style": {},
      "triggers": [{
        "type": "hover",
        "selector": ".heading-line",
        "descend": true,
        "stepsA": [{
          "width": "100%",
          "transition": "width 450ms ease 0"
        }],
        "stepsB": [{
          "width": "0%",
          "transition": "width 400ms ease 0"
        }]
      }, {
        "type": "hover",
        "selector": ".heading-line-second",
        "stepsA": [{
          "wait": "200ms"
        }, {
          "width": "100%",
          "transition": "width 450ms ease 0"
        }],
        "stepsB": [{
          "wait": "150ms"
        }, {
          "width": "0%",
          "transition": "width 400ms ease 0"
        }]
      }]
    }
  },
  {
    "slug": "show-project-content-on-hover",
    "name": "Show Project Content on Hover",
    "value": {
      "style": {},
      "triggers": [{
        "type": "hover",
        "selector": ".heading-line",
        "descend": true,
        "stepsA": [{
          "width": "100%",
          "transition": "width 550ms ease 0"
        }],
        "stepsB": [{
          "width": "0%",
          "transition": "width 400ms ease 0"
        }]
      }, {
        "type": "hover",
        "selector": ".image",
        "descend": true,
        "preserve3d": true,
        "stepsA": [{
          "transition": "transform 350ms ease 0",
          "scaleX": 1,
          "scaleY": 1,
          "scaleZ": 1
        }],
        "stepsB": [{
          "transition": "transform 350ms ease 0",
          "scaleX": 1.1,
          "scaleY": 1.1,
          "scaleZ": 1
        }]
      }, {
        "type": "hover",
        "selector": ".project-overlay",
        "descend": true,
        "stepsA": [{
          "opacity": 1,
          "transition": "opacity 450ms ease 0"
        }],
        "stepsB": [{
          "opacity": 0,
          "transition": "opacity 350ms ease 0"
        }]
      }]
    }
  },
  {
    "slug": "preloader",
    "name": "Preloader",
    "value": {
      "style": {
        "display": "flex"
      },
      "triggers": [{
        "type": "load",
        "preload": true,
        "stepsA": [{
          "wait": "200ms"
        }, {
          "opacity": 0,
          "transition": "opacity 350ms ease 0"
        }, {
          "display": "none"
        }],
        "stepsB": []
      }]
    }
  },
  {
    "slug": "menu-wrapper-first-app",
    "name": "Menu Wrapper First App.",
    "value": {
      "style": {
        "display": "none",
        "opacity": 0
      },
      "triggers": []
    }
  },
  {
    "slug": "menu-content-first-app",
    "name": "Menu Content First App",
    "value": {
      "style": {
        "opacity": 0,
        "x": "0px",
        "y": "25%",
        "z": "0px"
      },
      "triggers": []
    }
  },
  {
    "slug": "info-content-first-app",
    "name": "Info Content First App.",
    "value": {
      "style": {
        "opacity": 0,
        "x": "0px",
        "y": "50px",
        "z": "0px"
      },
      "triggers": []
    }
  },
  {
    "slug": "project-image-first-app",
    "name": "Project Image First App.",
    "value": {
      "style": {
        "scaleX": 1.1,
        "scaleY": 1.1,
        "scaleZ": 1
      },
      "triggers": []
    }
  },
  {
    "slug": "project-overlay-first-app",
    "name": "Project Overlay First App.",
    "value": {
      "style": {
        "opacity": 0
      },
      "triggers": []
    }
  },
  {
    "slug": "show-social-content-on-click",
    "name": "Show Social Content on Click",
    "value": {
      "style": {},
      "triggers": [{
        "type": "click",
        "selector": ".team-content",
        "siblings": true,
        "preserve3d": true,
        "stepsA": [{
          "height": "auto",
          "transition": "transform 300ms ease-in-out 0, height 350ms ease 0",
          "rotateX": "0deg",
          "rotateY": "0deg",
          "rotateZ": "0deg"
        }],
        "stepsB": [{
          "wait": "200ms"
        }, {
          "transition": "transform 200 ease-in-out 0",
          "rotateX": "-100deg",
          "rotateY": "0deg",
          "rotateZ": "0deg"
        }, {
          "height": "0px",
          "transition": "height 200 ease 0"
        }]
      }, {
        "type": "click",
        "selector": ".team-social",
        "siblings": true,
        "preserve3d": true,
        "stepsA": [{
          "wait": "250ms",
          "transition": "transform 200 ease 0"
        }, {
          "height": "auto",
          "transition": "transform 300ms ease-in-out 0, height 350ms ease 0",
          "rotateX": "0deg",
          "rotateY": "0deg",
          "rotateZ": "0deg"
        }],
        "stepsB": [{
          "transition": "transform 200 ease-in-out 0",
          "rotateX": "-100deg",
          "rotateY": "0deg",
          "rotateZ": "0deg"
        }, {
          "height": "0px",
          "transition": "height 200 ease 0"
        }]
      }, {
        "type": "click",
        "selector": ".circle-plus",
        "descend": true,
        "preserve3d": true,
        "stepsA": [{
          "transition": "transform 350ms ease 0",
          "rotateX": "0deg",
          "rotateY": "0deg",
          "rotateZ": "45deg"
        }],
        "stepsB": [{
          "transition": "transform 350ms ease 0",
          "rotateX": "0deg",
          "rotateY": "0deg",
          "rotateZ": "0deg"
        }]
      }]
    }
  },
  {
    "slug": "link-arrow-on-hover",
    "name": "Link Arrow on Hover",
    "value": {
      "style": {},
      "triggers": [{
        "type": "hover",
        "selector": ".arrow-image",
        "descend": true,
        "preserve3d": true,
        "stepsA": [{
          "transition": "transform 250ms ease 0",
          "x": "5px",
          "y": "0px",
          "z": "0px"
        }],
        "stepsB": [{
          "transition": "transform 200 ease 0",
          "x": "0px",
          "y": "0px",
          "z": "0px"
        }]
      }]
    }
  }
]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
  "events": {
    "e-3": {
      "id": "e-3",
      "eventTypeId": "PAGE_SCROLL",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a",
          "affectedElements": {
            "1a33dc16-6edc-aa81-d26a-9e67ed7a4adb": {
              "selector": ".hamburger-line",
              "selectorGuids": ["d3e70ac1-2681-e0a2-77d1-e963379cf40b"],
              "limitAffectedElements": null
            },
            "9b1a2d58-7505-66df-5dc8-26c5dcafed18": {
              "selector": ".line-3",
              "selectorGuids": ["3cf69d71-aa2a-e732-6136-0b0456c77b2b"],
              "limitAffectedElements": null
            },
            "d3dae2ad-6776-9355-9bf5-829a66f24f79": {
              "selector": ".line-2",
              "selectorGuids": ["696f732c-c3be-7303-bb5a-c918cac23b66"],
              "limitAffectedElements": null
            },
            "5a24074a-1572-89e3-057f-64696795c1b9": {
              "selector": ".line-1",
              "selectorGuids": ["42edf270-27cf-f6a9-663d-b852b2869c93"],
              "limitAffectedElements": null
            },
            "69cf3229-78d6-473b-6e32-0b908a6d52e4": {
              "selector": ".hamburger-icon",
              "selectorGuids": ["285ba691-4a8c-902c-129f-9acf8d7858ca"],
              "limitAffectedElements": null
            },
            "1d4b79f1-523c-5886-c89b-0d5038e7ae13": {
              "selector": ".link-block",
              "selectorGuids": ["e9b5e86a-7074-f525-b9d6-34b68fc5dca0"],
              "limitAffectedElements": null
            },
            "05a20c81-f501-6eca-2564-b387aa22d69d": {
              "selector": ".navigation",
              "selectorGuids": ["a379bef5-427a-25d9-9ca6-875397186529"],
              "limitAffectedElements": null
            }
          },
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5a85b2803b54f10001f56d35"
      },
      "config": [{
        "continuousParameterGroupId": "a-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1518718948089
    },
    "e-4": {
      "id": "e-4",
      "eventTypeId": "SCROLLING_IN_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-3",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5a85b2803b54f10001f56d35|7d7bac50-e1b0-b667-212d-f38271a360ae"
      },
      "config": [{
        "continuousParameterGroupId": "a-3-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1518804276143
    },
    "e-5": {
      "id": "e-5",
      "eventTypeId": "SCROLLING_IN_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-4",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5a85b2803b54f10001f56d35|471cf78e-7a2b-b244-fe62-18078308ea22"
      },
      "config": [{
        "continuousParameterGroupId": "a-4-p",
        "smoothing": 65,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1519135349528
    },
    "e-6": {
      "id": "e-6",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-5",
          "affectedElements": {
            "5a85b2803b54f10001f56d35|d79f6561-f018-29b5-d09d-2b3983189973": {
              "selector": ".circle-plus",
              "selectorGuids": ["7cf4a27d-dc27-af02-10e7-5d3704a14290"],
              "limitAffectedElements": "CHILDREN"
            }
          },
          "playInReverse": false,
          "autoStopEventId": "e-7"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5a85b2803b54f10001f56d35|97b48735-4d6d-ed32-aef4-7dd6ab1628b5"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1519143632230
    },
    "e-7": {
      "id": "e-7",
      "eventTypeId": "MOUSE_SECOND_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-6",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-6"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5a85b2803b54f10001f56d35|97b48735-4d6d-ed32-aef4-7dd6ab1628b5"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1519143632230
    },
    "e-8": {
      "id": "e-8",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-5",
          "affectedElements": {
            "5a85b2803b54f10001f56d35|d79f6561-f018-29b5-d09d-2b3983189973": {
              "selector": ".circle-plus",
              "selectorGuids": ["7cf4a27d-dc27-af02-10e7-5d3704a14290"],
              "limitAffectedElements": "CHILDREN"
            }
          },
          "playInReverse": false,
          "autoStopEventId": "e-9"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5a85b2803b54f10001f56d35|21b83f0f-365b-3a1c-9e25-6383e3c94a15"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1519144038641
    },
    "e-9": {
      "id": "e-9",
      "eventTypeId": "MOUSE_SECOND_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-6",
          "affectedElements": {
            "5a85b2803b54f10001f56d35|d79f6561-f018-29b5-d09d-2b3983189973": {
              "selector": ".circle-plus",
              "selectorGuids": ["7cf4a27d-dc27-af02-10e7-5d3704a14290"],
              "limitAffectedElements": "CHILDREN"
            }
          },
          "playInReverse": false,
          "autoStopEventId": "e-8"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5a85b2803b54f10001f56d35|21b83f0f-365b-3a1c-9e25-6383e3c94a15"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1519144038641
    },
    "e-10": {
      "id": "e-10",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-5",
          "affectedElements": {
            "5a85b2803b54f10001f56d35|d79f6561-f018-29b5-d09d-2b3983189973": {
              "selector": ".circle-plus",
              "selectorGuids": ["7cf4a27d-dc27-af02-10e7-5d3704a14290"],
              "limitAffectedElements": "CHILDREN"
            }
          },
          "playInReverse": false,
          "autoStopEventId": "e-11"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5a85b2803b54f10001f56d35|5346cfa3-327b-0ac1-c199-4c51914c90f6"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1519144147812
    },
    "e-11": {
      "id": "e-11",
      "eventTypeId": "MOUSE_SECOND_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-6",
          "affectedElements": {
            "5a85b2803b54f10001f56d35|d79f6561-f018-29b5-d09d-2b3983189973": {
              "selector": ".circle-plus",
              "selectorGuids": ["7cf4a27d-dc27-af02-10e7-5d3704a14290"],
              "limitAffectedElements": "CHILDREN"
            }
          },
          "playInReverse": false,
          "autoStopEventId": "e-10"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5a85b2803b54f10001f56d35|5346cfa3-327b-0ac1-c199-4c51914c90f6"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1519144147812
    },
    "e-12": {
      "id": "e-12",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-5",
          "affectedElements": {
            "5a85b2803b54f10001f56d35|d79f6561-f018-29b5-d09d-2b3983189973": {
              "selector": ".circle-plus",
              "selectorGuids": ["7cf4a27d-dc27-af02-10e7-5d3704a14290"],
              "limitAffectedElements": "CHILDREN"
            }
          },
          "playInReverse": false,
          "autoStopEventId": "e-13"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5a85b2803b54f10001f56d35|ebabc387-cb2e-e858-8b14-528ad69ff441"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1519144284370
    },
    "e-13": {
      "id": "e-13",
      "eventTypeId": "MOUSE_SECOND_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-6",
          "affectedElements": {
            "5a85b2803b54f10001f56d35|d79f6561-f018-29b5-d09d-2b3983189973": {
              "selector": ".circle-plus",
              "selectorGuids": ["7cf4a27d-dc27-af02-10e7-5d3704a14290"],
              "limitAffectedElements": null
            }
          },
          "playInReverse": false,
          "autoStopEventId": "e-12"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5a85b2803b54f10001f56d35|ebabc387-cb2e-e858-8b14-528ad69ff441"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1519144284370
    },
    "e-14": {
      "id": "e-14",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-5",
          "affectedElements": {
            "5a85b2803b54f10001f56d35|d79f6561-f018-29b5-d09d-2b3983189973": {
              "selector": ".circle-plus",
              "selectorGuids": ["7cf4a27d-dc27-af02-10e7-5d3704a14290"],
              "limitAffectedElements": "CHILDREN"
            }
          },
          "playInReverse": false,
          "autoStopEventId": "e-15"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5a85b2803b54f10001f56d35|4ececfea-9307-9d16-adcd-f5b263ebbf9e"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1519144284370
    },
    "e-15": {
      "id": "e-15",
      "eventTypeId": "MOUSE_SECOND_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-6",
          "affectedElements": {
            "5a85b2803b54f10001f56d35|d79f6561-f018-29b5-d09d-2b3983189973": {
              "selector": ".circle-plus",
              "selectorGuids": ["7cf4a27d-dc27-af02-10e7-5d3704a14290"],
              "limitAffectedElements": "CHILDREN"
            }
          },
          "playInReverse": false,
          "autoStopEventId": "e-14"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5a85b2803b54f10001f56d35|4ececfea-9307-9d16-adcd-f5b263ebbf9e"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1519144284370
    },
    "e-16": {
      "id": "e-16",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-5",
          "affectedElements": {
            "5a85b2803b54f10001f56d35|d79f6561-f018-29b5-d09d-2b3983189973": {
              "selector": ".circle-plus",
              "selectorGuids": ["7cf4a27d-dc27-af02-10e7-5d3704a14290"],
              "limitAffectedElements": "CHILDREN"
            }
          },
          "playInReverse": false,
          "autoStopEventId": "e-17"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5a85b2803b54f10001f56d35|34406b34-a034-1d9f-8490-8fe1b4df324f"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1519144284370
    },
    "e-17": {
      "id": "e-17",
      "eventTypeId": "MOUSE_SECOND_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-6",
          "affectedElements": {
            "5a85b2803b54f10001f56d35|d79f6561-f018-29b5-d09d-2b3983189973": {
              "selector": ".circle-plus",
              "selectorGuids": ["7cf4a27d-dc27-af02-10e7-5d3704a14290"],
              "limitAffectedElements": "CHILDREN"
            }
          },
          "playInReverse": false,
          "autoStopEventId": "e-16"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5a85b2803b54f10001f56d35|34406b34-a034-1d9f-8490-8fe1b4df324f"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1519144284370
    },
    "e-32": {
      "id": "e-32",
      "eventTypeId": "PAGE_SCROLL",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a",
          "affectedElements": {
            "1a33dc16-6edc-aa81-d26a-9e67ed7a4adb": {
              "selector": ".hamburger-line",
              "selectorGuids": ["d3e70ac1-2681-e0a2-77d1-e963379cf40b"],
              "limitAffectedElements": null
            },
            "9b1a2d58-7505-66df-5dc8-26c5dcafed18": {
              "selector": ".line-3",
              "selectorGuids": ["3cf69d71-aa2a-e732-6136-0b0456c77b2b"],
              "limitAffectedElements": null
            },
            "d3dae2ad-6776-9355-9bf5-829a66f24f79": {
              "selector": ".line-2",
              "selectorGuids": ["696f732c-c3be-7303-bb5a-c918cac23b66"],
              "limitAffectedElements": null
            },
            "5a24074a-1572-89e3-057f-64696795c1b9": {
              "selector": ".line-1",
              "selectorGuids": ["42edf270-27cf-f6a9-663d-b852b2869c93"],
              "limitAffectedElements": null
            },
            "69cf3229-78d6-473b-6e32-0b908a6d52e4": {
              "selector": ".hamburger-icon",
              "selectorGuids": ["285ba691-4a8c-902c-129f-9acf8d7858ca"],
              "limitAffectedElements": null
            },
            "1d4b79f1-523c-5886-c89b-0d5038e7ae13": {
              "selector": ".link-block",
              "selectorGuids": ["e9b5e86a-7074-f525-b9d6-34b68fc5dca0"],
              "limitAffectedElements": null
            },
            "05a20c81-f501-6eca-2564-b387aa22d69d": {
              "selector": ".navigation",
              "selectorGuids": ["a379bef5-427a-25d9-9ca6-875397186529"],
              "limitAffectedElements": null
            }
          },
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5a8ef7533d16140001255c70"
      },
      "config": [{
        "continuousParameterGroupId": "a-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1519318868383
    },
    "e-33": {
      "id": "e-33",
      "eventTypeId": "SCROLLING_IN_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-13",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5a8ef7533d16140001255c70|7d7bac50-e1b0-b667-212d-f38271a360ae"
      },
      "config": [{
        "continuousParameterGroupId": "a-13-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1519318868383
    },
    "e-34": {
      "id": "e-34",
      "eventTypeId": "PAGE_SCROLL",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a",
          "affectedElements": {
            "1a33dc16-6edc-aa81-d26a-9e67ed7a4adb": {
              "selector": ".hamburger-line",
              "selectorGuids": ["d3e70ac1-2681-e0a2-77d1-e963379cf40b"],
              "limitAffectedElements": null
            },
            "9b1a2d58-7505-66df-5dc8-26c5dcafed18": {
              "selector": ".line-3",
              "selectorGuids": ["3cf69d71-aa2a-e732-6136-0b0456c77b2b"],
              "limitAffectedElements": null
            },
            "d3dae2ad-6776-9355-9bf5-829a66f24f79": {
              "selector": ".line-2",
              "selectorGuids": ["696f732c-c3be-7303-bb5a-c918cac23b66"],
              "limitAffectedElements": null
            },
            "5a24074a-1572-89e3-057f-64696795c1b9": {
              "selector": ".line-1",
              "selectorGuids": ["42edf270-27cf-f6a9-663d-b852b2869c93"],
              "limitAffectedElements": null
            },
            "69cf3229-78d6-473b-6e32-0b908a6d52e4": {
              "selector": ".hamburger-icon",
              "selectorGuids": ["285ba691-4a8c-902c-129f-9acf8d7858ca"],
              "limitAffectedElements": null
            },
            "1d4b79f1-523c-5886-c89b-0d5038e7ae13": {
              "selector": ".link-block",
              "selectorGuids": ["e9b5e86a-7074-f525-b9d6-34b68fc5dca0"],
              "limitAffectedElements": null
            },
            "05a20c81-f501-6eca-2564-b387aa22d69d": {
              "selector": ".navigation",
              "selectorGuids": ["a379bef5-427a-25d9-9ca6-875397186529"],
              "limitAffectedElements": null
            }
          },
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5a8efd343d16140001256bdd"
      },
      "config": [{
        "continuousParameterGroupId": "a-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1519320374535
    },
    "e-35": {
      "id": "e-35",
      "eventTypeId": "SCROLLING_IN_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-17",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5a8efd343d16140001256bdd|7d7bac50-e1b0-b667-212d-f38271a360ae"
      },
      "config": [{
        "continuousParameterGroupId": "a-17-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1519320374535
    },
    "e-36": {
      "id": "e-36",
      "eventTypeId": "PAGE_SCROLL",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a",
          "affectedElements": {
            "1a33dc16-6edc-aa81-d26a-9e67ed7a4adb": {
              "selector": ".hamburger-line",
              "selectorGuids": ["d3e70ac1-2681-e0a2-77d1-e963379cf40b"],
              "limitAffectedElements": null
            },
            "9b1a2d58-7505-66df-5dc8-26c5dcafed18": {
              "selector": ".line-3",
              "selectorGuids": ["3cf69d71-aa2a-e732-6136-0b0456c77b2b"],
              "limitAffectedElements": null
            },
            "d3dae2ad-6776-9355-9bf5-829a66f24f79": {
              "selector": ".line-2",
              "selectorGuids": ["696f732c-c3be-7303-bb5a-c918cac23b66"],
              "limitAffectedElements": null
            },
            "5a24074a-1572-89e3-057f-64696795c1b9": {
              "selector": ".line-1",
              "selectorGuids": ["42edf270-27cf-f6a9-663d-b852b2869c93"],
              "limitAffectedElements": null
            },
            "69cf3229-78d6-473b-6e32-0b908a6d52e4": {
              "selector": ".hamburger-icon",
              "selectorGuids": ["285ba691-4a8c-902c-129f-9acf8d7858ca"],
              "limitAffectedElements": null
            },
            "1d4b79f1-523c-5886-c89b-0d5038e7ae13": {
              "selector": ".link-block",
              "selectorGuids": ["e9b5e86a-7074-f525-b9d6-34b68fc5dca0"],
              "limitAffectedElements": null
            },
            "05a20c81-f501-6eca-2564-b387aa22d69d": {
              "selector": ".navigation",
              "selectorGuids": ["a379bef5-427a-25d9-9ca6-875397186529"],
              "limitAffectedElements": null
            }
          },
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5a901e68ec586e0001d6625c"
      },
      "config": [{
        "continuousParameterGroupId": "a-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1519394408543
    },
    "e-37": {
      "id": "e-37",
      "eventTypeId": "SCROLLING_IN_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-21",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5a901e68ec586e0001d6625c|7d7bac50-e1b0-b667-212d-f38271a360ae"
      },
      "config": [{
        "continuousParameterGroupId": "a-21-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1519394408543
    },
    "e-38": {
      "id": "e-38",
      "eventTypeId": "PAGE_SCROLL",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a",
          "affectedElements": {
            "1a33dc16-6edc-aa81-d26a-9e67ed7a4adb": {
              "selector": ".hamburger-line",
              "selectorGuids": ["d3e70ac1-2681-e0a2-77d1-e963379cf40b"],
              "limitAffectedElements": null
            },
            "9b1a2d58-7505-66df-5dc8-26c5dcafed18": {
              "selector": ".line-3",
              "selectorGuids": ["3cf69d71-aa2a-e732-6136-0b0456c77b2b"],
              "limitAffectedElements": null
            },
            "d3dae2ad-6776-9355-9bf5-829a66f24f79": {
              "selector": ".line-2",
              "selectorGuids": ["696f732c-c3be-7303-bb5a-c918cac23b66"],
              "limitAffectedElements": null
            },
            "5a24074a-1572-89e3-057f-64696795c1b9": {
              "selector": ".line-1",
              "selectorGuids": ["42edf270-27cf-f6a9-663d-b852b2869c93"],
              "limitAffectedElements": null
            },
            "69cf3229-78d6-473b-6e32-0b908a6d52e4": {
              "selector": ".hamburger-icon",
              "selectorGuids": ["285ba691-4a8c-902c-129f-9acf8d7858ca"],
              "limitAffectedElements": null
            },
            "1d4b79f1-523c-5886-c89b-0d5038e7ae13": {
              "selector": ".link-block",
              "selectorGuids": ["e9b5e86a-7074-f525-b9d6-34b68fc5dca0"],
              "limitAffectedElements": null
            },
            "05a20c81-f501-6eca-2564-b387aa22d69d": {
              "selector": ".navigation",
              "selectorGuids": ["a379bef5-427a-25d9-9ca6-875397186529"],
              "limitAffectedElements": null
            }
          },
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5a9020c7dffd9b000181b1b8"
      },
      "config": [{
        "continuousParameterGroupId": "a-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1519395015751
    },
    "e-39": {
      "id": "e-39",
      "eventTypeId": "SCROLLING_IN_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-23",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5a9020c7dffd9b000181b1b8|7d7bac50-e1b0-b667-212d-f38271a360ae"
      },
      "config": [{
        "continuousParameterGroupId": "a-23-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1519395015751
    },
    "e-41": {
      "id": "e-41",
      "eventTypeId": "PAGE_SCROLL",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a",
          "affectedElements": {
            "1a33dc16-6edc-aa81-d26a-9e67ed7a4adb": {
              "selector": ".hamburger-line",
              "selectorGuids": ["d3e70ac1-2681-e0a2-77d1-e963379cf40b"],
              "limitAffectedElements": null
            },
            "9b1a2d58-7505-66df-5dc8-26c5dcafed18": {
              "selector": ".line-3",
              "selectorGuids": ["3cf69d71-aa2a-e732-6136-0b0456c77b2b"],
              "limitAffectedElements": null
            },
            "d3dae2ad-6776-9355-9bf5-829a66f24f79": {
              "selector": ".line-2",
              "selectorGuids": ["696f732c-c3be-7303-bb5a-c918cac23b66"],
              "limitAffectedElements": null
            },
            "5a24074a-1572-89e3-057f-64696795c1b9": {
              "selector": ".line-1",
              "selectorGuids": ["42edf270-27cf-f6a9-663d-b852b2869c93"],
              "limitAffectedElements": null
            },
            "69cf3229-78d6-473b-6e32-0b908a6d52e4": {
              "selector": ".hamburger-icon",
              "selectorGuids": ["285ba691-4a8c-902c-129f-9acf8d7858ca"],
              "limitAffectedElements": null
            },
            "1d4b79f1-523c-5886-c89b-0d5038e7ae13": {
              "selector": ".link-block",
              "selectorGuids": ["e9b5e86a-7074-f525-b9d6-34b68fc5dca0"],
              "limitAffectedElements": null
            },
            "05a20c81-f501-6eca-2564-b387aa22d69d": {
              "selector": ".navigation",
              "selectorGuids": ["a379bef5-427a-25d9-9ca6-875397186529"],
              "limitAffectedElements": null
            }
          },
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5a8b1385b39fc100011f23d0"
      },
      "config": [{
        "continuousParameterGroupId": "a-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1519400992805
    },
    "e-42": {
      "id": "e-42",
      "eventTypeId": "PAGE_SCROLL",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a",
          "affectedElements": {
            "05a20c81-f501-6eca-2564-b387aa22d69d": {
              "selector": ".navigation",
              "selectorGuids": ["a379bef5-427a-25d9-9ca6-875397186529"],
              "limitAffectedElements": null
            },
            "1d4b79f1-523c-5886-c89b-0d5038e7ae13": {
              "selector": ".link-block",
              "selectorGuids": ["e9b5e86a-7074-f525-b9d6-34b68fc5dca0"],
              "limitAffectedElements": null
            },
            "69cf3229-78d6-473b-6e32-0b908a6d52e4": {
              "selector": ".hamburger-icon",
              "selectorGuids": ["285ba691-4a8c-902c-129f-9acf8d7858ca"],
              "limitAffectedElements": null
            },
            "5a24074a-1572-89e3-057f-64696795c1b9": {
              "selector": ".line-1",
              "selectorGuids": ["42edf270-27cf-f6a9-663d-b852b2869c93"],
              "limitAffectedElements": null
            },
            "d3dae2ad-6776-9355-9bf5-829a66f24f79": {
              "selector": ".line-2",
              "selectorGuids": ["696f732c-c3be-7303-bb5a-c918cac23b66"],
              "limitAffectedElements": null
            },
            "9b1a2d58-7505-66df-5dc8-26c5dcafed18": {
              "selector": ".line-3",
              "selectorGuids": ["3cf69d71-aa2a-e732-6136-0b0456c77b2b"],
              "limitAffectedElements": null
            },
            "1a33dc16-6edc-aa81-d26a-9e67ed7a4adb": {
              "selector": ".hamburger-line",
              "selectorGuids": ["d3e70ac1-2681-e0a2-77d1-e963379cf40b"],
              "limitAffectedElements": null
            }
          },
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5a903a53b223b60001246e31"
      },
      "config": [{
        "continuousParameterGroupId": "a-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1519401555384
    },
    "e-43": {
      "id": "e-43",
      "eventTypeId": "SCROLLING_IN_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-25",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5a903a53b223b60001246e31|7d7bac50-e1b0-b667-212d-f38271a360ae"
      },
      "config": [{
        "continuousParameterGroupId": "a-25-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1519401555384
    },
    "e-44": {
      "id": "e-44",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-10",
          "affectedElements": {
            "5a8eeb6b12fbfe0001c7a29d|d79f6561-f018-29b5-d09d-2b3983189973": {
              "selector": ".circle-plus",
              "selectorGuids": ["7cf4a27d-dc27-af02-10e7-5d3704a14290"],
              "limitAffectedElements": "CHILDREN"
            }
          },
          "playInReverse": false,
          "autoStopEventId": "e-45"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5a903a53b223b60001246e31|82183436-baf6-bed9-19a8-5a44bb21c228"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1519401613161
    },
    "e-45": {
      "id": "e-45",
      "eventTypeId": "MOUSE_SECOND_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-11",
          "affectedElements": {
            "5a8eeb6b12fbfe0001c7a29d|d79f6561-f018-29b5-d09d-2b3983189973": {
              "selector": ".circle-plus",
              "selectorGuids": ["7cf4a27d-dc27-af02-10e7-5d3704a14290"],
              "limitAffectedElements": "CHILDREN"
            }
          },
          "playInReverse": false,
          "autoStopEventId": "e-44"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5a903a53b223b60001246e31|82183436-baf6-bed9-19a8-5a44bb21c228"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1519401613161
    },
    "e-46": {
      "id": "e-46",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-10",
          "affectedElements": {
            "5a8eeb6b12fbfe0001c7a29d|d79f6561-f018-29b5-d09d-2b3983189973": {
              "selector": ".circle-plus",
              "selectorGuids": ["7cf4a27d-dc27-af02-10e7-5d3704a14290"],
              "limitAffectedElements": "CHILDREN"
            }
          },
          "playInReverse": false,
          "autoStopEventId": "e-47"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5a903a53b223b60001246e31|0da5852d-ac68-cd55-7186-060a9113871e"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1519401613161
    },
    "e-47": {
      "id": "e-47",
      "eventTypeId": "MOUSE_SECOND_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-11",
          "affectedElements": {
            "5a8eeb6b12fbfe0001c7a29d|d79f6561-f018-29b5-d09d-2b3983189973": {
              "selector": ".circle-plus",
              "selectorGuids": ["7cf4a27d-dc27-af02-10e7-5d3704a14290"],
              "limitAffectedElements": "CHILDREN"
            }
          },
          "playInReverse": false,
          "autoStopEventId": "e-46"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5a903a53b223b60001246e31|0da5852d-ac68-cd55-7186-060a9113871e"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1519401613161
    },
    "e-48": {
      "id": "e-48",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-10",
          "affectedElements": {
            "5a8eeb6b12fbfe0001c7a29d|d79f6561-f018-29b5-d09d-2b3983189973": {
              "selector": ".circle-plus",
              "selectorGuids": ["7cf4a27d-dc27-af02-10e7-5d3704a14290"],
              "limitAffectedElements": "CHILDREN"
            }
          },
          "playInReverse": false,
          "autoStopEventId": "e-49"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5a903a53b223b60001246e31|f050127a-4e47-9212-018c-7a50574a008d"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1519401613161
    },
    "e-49": {
      "id": "e-49",
      "eventTypeId": "MOUSE_SECOND_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-11",
          "affectedElements": {
            "5a8eeb6b12fbfe0001c7a29d|d79f6561-f018-29b5-d09d-2b3983189973": {
              "selector": ".circle-plus",
              "selectorGuids": ["7cf4a27d-dc27-af02-10e7-5d3704a14290"],
              "limitAffectedElements": "CHILDREN"
            }
          },
          "playInReverse": false,
          "autoStopEventId": "e-48"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5a903a53b223b60001246e31|f050127a-4e47-9212-018c-7a50574a008d"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1519401613161
    },
    "e-50": {
      "id": "e-50",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-10",
          "affectedElements": {
            "5a8eeb6b12fbfe0001c7a29d|d79f6561-f018-29b5-d09d-2b3983189973": {
              "selector": ".circle-plus",
              "selectorGuids": ["7cf4a27d-dc27-af02-10e7-5d3704a14290"],
              "limitAffectedElements": "CHILDREN"
            }
          },
          "playInReverse": false,
          "autoStopEventId": "e-51"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5a903a53b223b60001246e31|41f9d39d-e6cc-249f-a3f9-6caa88c6cb52"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1519401613161
    },
    "e-51": {
      "id": "e-51",
      "eventTypeId": "MOUSE_SECOND_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-11",
          "affectedElements": {
            "5a8eeb6b12fbfe0001c7a29d|d79f6561-f018-29b5-d09d-2b3983189973": {
              "selector": ".circle-plus",
              "selectorGuids": ["7cf4a27d-dc27-af02-10e7-5d3704a14290"],
              "limitAffectedElements": null
            }
          },
          "playInReverse": false,
          "autoStopEventId": "e-50"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5a903a53b223b60001246e31|41f9d39d-e6cc-249f-a3f9-6caa88c6cb52"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1519401613161
    },
    "e-52": {
      "id": "e-52",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-10",
          "affectedElements": {
            "5a8eeb6b12fbfe0001c7a29d|d79f6561-f018-29b5-d09d-2b3983189973": {
              "selector": ".circle-plus",
              "selectorGuids": ["7cf4a27d-dc27-af02-10e7-5d3704a14290"],
              "limitAffectedElements": "CHILDREN"
            }
          },
          "playInReverse": false,
          "autoStopEventId": "e-53"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5a903a53b223b60001246e31|ecc687d7-a31e-3b46-4d49-44c13f7d3dde"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1519401613161
    },
    "e-53": {
      "id": "e-53",
      "eventTypeId": "MOUSE_SECOND_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-11",
          "affectedElements": {
            "5a8eeb6b12fbfe0001c7a29d|d79f6561-f018-29b5-d09d-2b3983189973": {
              "selector": ".circle-plus",
              "selectorGuids": ["7cf4a27d-dc27-af02-10e7-5d3704a14290"],
              "limitAffectedElements": "CHILDREN"
            }
          },
          "playInReverse": false,
          "autoStopEventId": "e-52"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5a903a53b223b60001246e31|ecc687d7-a31e-3b46-4d49-44c13f7d3dde"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1519401613161
    },
    "e-54": {
      "id": "e-54",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-10",
          "affectedElements": {
            "5a8eeb6b12fbfe0001c7a29d|d79f6561-f018-29b5-d09d-2b3983189973": {
              "selector": ".circle-plus",
              "selectorGuids": ["7cf4a27d-dc27-af02-10e7-5d3704a14290"],
              "limitAffectedElements": "CHILDREN"
            }
          },
          "playInReverse": false,
          "autoStopEventId": "e-55"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5a903a53b223b60001246e31|51710482-0396-a43f-817a-66f4c5d8f613"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1519401613161
    },
    "e-55": {
      "id": "e-55",
      "eventTypeId": "MOUSE_SECOND_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-11",
          "affectedElements": {
            "5a8eeb6b12fbfe0001c7a29d|d79f6561-f018-29b5-d09d-2b3983189973": {
              "selector": ".circle-plus",
              "selectorGuids": ["7cf4a27d-dc27-af02-10e7-5d3704a14290"],
              "limitAffectedElements": "CHILDREN"
            }
          },
          "playInReverse": false,
          "autoStopEventId": "e-54"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5a903a53b223b60001246e31|51710482-0396-a43f-817a-66f4c5d8f613"
      },
      "config": {
        "loop": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1519401613161
    },
    "e-56": {
      "id": "e-56",
      "eventTypeId": "PAGE_SCROLL",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a",
          "affectedElements": {
            "1a33dc16-6edc-aa81-d26a-9e67ed7a4adb": {
              "selector": ".hamburger-line",
              "selectorGuids": ["d3e70ac1-2681-e0a2-77d1-e963379cf40b"],
              "limitAffectedElements": null
            },
            "9b1a2d58-7505-66df-5dc8-26c5dcafed18": {
              "selector": ".line-3",
              "selectorGuids": ["3cf69d71-aa2a-e732-6136-0b0456c77b2b"],
              "limitAffectedElements": null
            },
            "d3dae2ad-6776-9355-9bf5-829a66f24f79": {
              "selector": ".line-2",
              "selectorGuids": ["696f732c-c3be-7303-bb5a-c918cac23b66"],
              "limitAffectedElements": null
            },
            "5a24074a-1572-89e3-057f-64696795c1b9": {
              "selector": ".line-1",
              "selectorGuids": ["42edf270-27cf-f6a9-663d-b852b2869c93"],
              "limitAffectedElements": null
            },
            "69cf3229-78d6-473b-6e32-0b908a6d52e4": {
              "selector": ".hamburger-icon",
              "selectorGuids": ["285ba691-4a8c-902c-129f-9acf8d7858ca"],
              "limitAffectedElements": null
            },
            "1d4b79f1-523c-5886-c89b-0d5038e7ae13": {
              "selector": ".link-block",
              "selectorGuids": ["e9b5e86a-7074-f525-b9d6-34b68fc5dca0"],
              "limitAffectedElements": null
            },
            "05a20c81-f501-6eca-2564-b387aa22d69d": {
              "selector": ".navigation",
              "selectorGuids": ["a379bef5-427a-25d9-9ca6-875397186529"],
              "limitAffectedElements": null
            }
          },
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5a8d967f53abe6000129284a"
      },
      "config": [{
        "continuousParameterGroupId": "a-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1519410095559
    },
    "e-57": {
      "id": "e-57",
      "eventTypeId": "PAGE_SCROLL",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-26",
          "affectedElements": {
            "5a96d512f16f18000104850f|05a20c81-f501-6eca-2564-b387aa22d69d": {
              "selector": ".navigation",
              "selectorGuids": ["a379bef5-427a-25d9-9ca6-875397186529"],
              "limitAffectedElements": null
            },
            "5a96d512f16f18000104850f|1d4b79f1-523c-5886-c89b-0d5038e7ae13": {
              "selector": ".link-block",
              "selectorGuids": ["e9b5e86a-7074-f525-b9d6-34b68fc5dca0"],
              "limitAffectedElements": null
            },
            "5a96d512f16f18000104850f|69cf3229-78d6-473b-6e32-0b908a6d52e4": {
              "selector": ".hamburger-icon",
              "selectorGuids": ["285ba691-4a8c-902c-129f-9acf8d7858ca"],
              "limitAffectedElements": null
            },
            "5a96d512f16f18000104850f|5a24074a-1572-89e3-057f-64696795c1b9": {
              "selector": ".line-1",
              "selectorGuids": ["42edf270-27cf-f6a9-663d-b852b2869c93"],
              "limitAffectedElements": null
            },
            "5a96d512f16f18000104850f|d3dae2ad-6776-9355-9bf5-829a66f24f79": {
              "selector": ".line-2",
              "selectorGuids": ["696f732c-c3be-7303-bb5a-c918cac23b66"],
              "limitAffectedElements": null
            },
            "5a96d512f16f18000104850f|9b1a2d58-7505-66df-5dc8-26c5dcafed18": {
              "selector": ".line-3",
              "selectorGuids": ["3cf69d71-aa2a-e732-6136-0b0456c77b2b"],
              "limitAffectedElements": null
            },
            "5a96d512f16f18000104850f|1a33dc16-6edc-aa81-d26a-9e67ed7a4adb": {
              "selector": ".hamburger-line",
              "selectorGuids": ["d3e70ac1-2681-e0a2-77d1-e963379cf40b"],
              "limitAffectedElements": null
            }
          },
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5a96d512f16f18000104850f"
      },
      "config": [{
        "continuousParameterGroupId": "a-26-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1519834386753
    },
    "e-58": {
      "id": "e-58",
      "eventTypeId": "SCROLLING_IN_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-27",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5a96d512f16f18000104850f|7d7bac50-e1b0-b667-212d-f38271a360ae"
      },
      "config": [{
        "continuousParameterGroupId": "a-27-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1519834386753
    },
    "e-59": {
      "id": "e-59",
      "eventTypeId": "PAGE_SCROLL",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-30",
          "affectedElements": {
            "5a98156ed790df0001e789f3|05a20c81-f501-6eca-2564-b387aa22d69d": {
              "selector": ".navigation",
              "selectorGuids": ["a379bef5-427a-25d9-9ca6-875397186529"],
              "limitAffectedElements": null
            },
            "5a98156ed790df0001e789f3|1d4b79f1-523c-5886-c89b-0d5038e7ae13": {
              "selector": ".link-block",
              "selectorGuids": ["e9b5e86a-7074-f525-b9d6-34b68fc5dca0"],
              "limitAffectedElements": null
            },
            "5a98156ed790df0001e789f3|69cf3229-78d6-473b-6e32-0b908a6d52e4": {
              "selector": ".hamburger-icon",
              "selectorGuids": ["285ba691-4a8c-902c-129f-9acf8d7858ca"],
              "limitAffectedElements": null
            },
            "5a98156ed790df0001e789f3|5a24074a-1572-89e3-057f-64696795c1b9": {
              "selector": ".line-1",
              "selectorGuids": ["42edf270-27cf-f6a9-663d-b852b2869c93"],
              "limitAffectedElements": null
            },
            "5a98156ed790df0001e789f3|d3dae2ad-6776-9355-9bf5-829a66f24f79": {
              "selector": ".line-2",
              "selectorGuids": ["696f732c-c3be-7303-bb5a-c918cac23b66"],
              "limitAffectedElements": null
            },
            "5a98156ed790df0001e789f3|9b1a2d58-7505-66df-5dc8-26c5dcafed18": {
              "selector": ".line-3",
              "selectorGuids": ["3cf69d71-aa2a-e732-6136-0b0456c77b2b"],
              "limitAffectedElements": null
            },
            "5a98156ed790df0001e789f3|1a33dc16-6edc-aa81-d26a-9e67ed7a4adb": {
              "selector": ".hamburger-line",
              "selectorGuids": ["d3e70ac1-2681-e0a2-77d1-e963379cf40b"],
              "limitAffectedElements": null
            }
          },
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5a98156ed790df0001e789f3"
      },
      "config": [{
        "continuousParameterGroupId": "a-30-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1519916399009
    },
    "e-60": {
      "id": "e-60",
      "eventTypeId": "SCROLLING_IN_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-31",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5a98156ed790df0001e789f3|7d7bac50-e1b0-b667-212d-f38271a360ae"
      },
      "config": [{
        "continuousParameterGroupId": "a-31-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1519916399009
    }
  },
  "actionLists": {
    "a": {
      "id": "a",
      "title": "Navigation Animation",
      "continuousParameterGroups": [{
        "id": "a-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-n",
            "actionTypeId": "STYLE_BACKGROUND_COLOR",
            "config": {
              "delay": 0,
              "easing": "easeIn",
              "duration": 500,
              "target": {
                "id": "05a20c81-f501-6eca-2564-b387aa22d69d"
              },
              "rValue": 255,
              "gValue": 255,
              "bValue": 255,
              "aValue": 0
            }
          }, {
            "id": "a-n-9",
            "actionTypeId": "STYLE_SIZE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "locked": false,
              "target": {
                "id": "05a20c81-f501-6eca-2564-b387aa22d69d"
              },
              "heightValue": 150,
              "widthUnit": "PX",
              "heightUnit": "PX"
            }
          }, {
            "id": "a-n-11",
            "actionTypeId": "STYLE_SIZE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "locked": false,
              "target": {
                "id": "1d4b79f1-523c-5886-c89b-0d5038e7ae13"
              },
              "widthValue": 80,
              "heightValue": 80,
              "widthUnit": "PX",
              "heightUnit": "PX"
            }
          }, {
            "id": "a-n-13",
            "actionTypeId": "STYLE_SIZE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "locked": false,
              "target": {
                "id": "69cf3229-78d6-473b-6e32-0b908a6d52e4"
              },
              "widthValue": 80,
              "heightValue": 80,
              "widthUnit": "PX",
              "heightUnit": "PX"
            }
          }, {
            "id": "a-n-3",
            "actionTypeId": "STYLE_BACKGROUND_COLOR",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a24074a-1572-89e3-057f-64696795c1b9"
              },
              "rValue": 33,
              "gValue": 33,
              "bValue": 39,
              "aValue": 1
            }
          }, {
            "id": "a-n-5",
            "actionTypeId": "STYLE_BACKGROUND_COLOR",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "d3dae2ad-6776-9355-9bf5-829a66f24f79"
              },
              "rValue": 33,
              "gValue": 33,
              "bValue": 39,
              "aValue": 1
            }
          }, {
            "id": "a-n-7",
            "actionTypeId": "STYLE_BACKGROUND_COLOR",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "9b1a2d58-7505-66df-5dc8-26c5dcafed18"
              },
              "rValue": 33,
              "gValue": 33,
              "bValue": 39,
              "aValue": 1
            }
          }, {
            "id": "a-n-15",
            "actionTypeId": "STYLE_SIZE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "locked": false,
              "target": {
                "id": "1a33dc16-6edc-aa81-d26a-9e67ed7a4adb"
              },
              "widthValue": 32,
              "heightValue": 28,
              "widthUnit": "PX",
              "heightUnit": "PX"
            }
          }]
        }, {
          "keyframe": 2,
          "actionItems": [{
            "id": "a-n-2",
            "actionTypeId": "STYLE_BACKGROUND_COLOR",
            "config": {
              "delay": 0,
              "easing": "easeIn",
              "duration": 500,
              "target": {
                "id": "05a20c81-f501-6eca-2564-b387aa22d69d"
              },
              "rValue": 255,
              "gValue": 255,
              "bValue": 255,
              "aValue": 1
            }
          }, {
            "id": "a-n-10",
            "actionTypeId": "STYLE_SIZE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "locked": false,
              "target": {
                "id": "05a20c81-f501-6eca-2564-b387aa22d69d"
              },
              "heightValue": 90,
              "widthUnit": "PX",
              "heightUnit": "PX"
            }
          }, {
            "id": "a-n-12",
            "actionTypeId": "STYLE_SIZE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "locked": false,
              "target": {
                "id": "1d4b79f1-523c-5886-c89b-0d5038e7ae13"
              },
              "widthValue": 50,
              "heightValue": 50,
              "widthUnit": "PX",
              "heightUnit": "PX"
            }
          }, {
            "id": "a-n-14",
            "actionTypeId": "STYLE_SIZE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "locked": false,
              "target": {
                "id": "69cf3229-78d6-473b-6e32-0b908a6d52e4"
              },
              "widthValue": 50,
              "heightValue": 50,
              "widthUnit": "PX",
              "heightUnit": "PX"
            }
          }, {
            "id": "a-n-4",
            "actionTypeId": "STYLE_BACKGROUND_COLOR",
            "config": {
              "delay": 0,
              "easing": "easeIn",
              "duration": 500,
              "target": {
                "id": "5a24074a-1572-89e3-057f-64696795c1b9"
              },
              "rValue": 33,
              "gValue": 33,
              "bValue": 39,
              "aValue": 1
            }
          }, {
            "id": "a-n-6",
            "actionTypeId": "STYLE_BACKGROUND_COLOR",
            "config": {
              "delay": 0,
              "easing": "easeIn",
              "duration": 500,
              "target": {
                "id": "d3dae2ad-6776-9355-9bf5-829a66f24f79"
              },
              "rValue": 33,
              "gValue": 33,
              "bValue": 39,
              "aValue": 1
            }
          }, {
            "id": "a-n-8",
            "actionTypeId": "STYLE_BACKGROUND_COLOR",
            "config": {
              "delay": 0,
              "easing": "easeIn",
              "duration": 500,
              "target": {
                "id": "9b1a2d58-7505-66df-5dc8-26c5dcafed18"
              },
              "rValue": 33,
              "gValue": 33,
              "bValue": 39,
              "aValue": 1
            }
          }, {
            "id": "a-n-16",
            "actionTypeId": "STYLE_SIZE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "locked": false,
              "target": {
                "id": "1a33dc16-6edc-aa81-d26a-9e67ed7a4adb"
              },
              "widthValue": 26,
              "heightValue": 22,
              "widthUnit": "PX",
              "heightUnit": "PX"
            }
          }]
        }]
      }],
      "createdOn": 1518716882562
    },
    "a-2": {
      "id": "a-2",
      "title": "Navigation First App.",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-2-n",
          "actionTypeId": "STYLE_BACKGROUND_COLOR",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 10,
            "target": {
              "id": "05a20c81-f501-6eca-2564-b387aa22d69d"
            }
          }
        }, {
          "id": "a-2-n-5",
          "actionTypeId": "STYLE_SIZE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "locked": false,
            "target": {
              "id": "05a20c81-f501-6eca-2564-b387aa22d69d"
            },
            "heightValue": 100,
            "widthUnit": "VH",
            "heightUnit": "VH"
          }
        }, {
          "id": "a-2-n-2",
          "actionTypeId": "STYLE_BACKGROUND_COLOR",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 10,
            "target": {
              "id": "5a24074a-1572-89e3-057f-64696795c1b9"
            },
            "rValue": 255,
            "gValue": 255,
            "bValue": 255,
            "aValue": 1
          }
        }, {
          "id": "a-2-n-3",
          "actionTypeId": "STYLE_BACKGROUND_COLOR",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "target": {
              "id": "d3dae2ad-6776-9355-9bf5-829a66f24f79"
            },
            "rValue": 255,
            "gValue": 255,
            "bValue": 255,
            "aValue": 1
          }
        }, {
          "id": "a-2-n-4",
          "actionTypeId": "STYLE_BACKGROUND_COLOR",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "target": {
              "id": "9b1a2d58-7505-66df-5dc8-26c5dcafed18"
            },
            "rValue": 255,
            "gValue": 255,
            "bValue": 255,
            "aValue": 1
          }
        }]
      }],
      "createdOn": 1518719111803,
      "useFirstGroupAsInitialState": false
    },
    "a-3": {
      "id": "a-3",
      "title": "Parallax Square Animation",
      "continuousParameterGroups": [{
        "id": "a-3-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-3-n",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a85b2803b54f10001f56d35|d57b80fc-146d-b72e-304a-01c1dbed78da"
              },
              "yValue": 200,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-3-n-3",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a85b2803b54f10001f56d35|d57b80fc-146d-b72e-304a-01c1dbed78da"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-3-n-5",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a85b2803b54f10001f56d35|cd8b4fbc-45b1-4081-50c5-19d7e0e82423"
              },
              "yValue": -200,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-3-n-6",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a85b2803b54f10001f56d35|cd8b4fbc-45b1-4081-50c5-19d7e0e82423"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-3-n-9",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a85b2803b54f10001f56d35|505872d8-e7ad-2097-2d2a-390ac06b3a4f"
              },
              "yValue": 200,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-3-n-10",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a85b2803b54f10001f56d35|505872d8-e7ad-2097-2d2a-390ac06b3a4f"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-3-n-13",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a85b2803b54f10001f56d35|907225e5-953a-4582-c287-cf93d436faab"
              },
              "yValue": -50,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-3-n-14",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a85b2803b54f10001f56d35|907225e5-953a-4582-c287-cf93d436faab"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-3-n-2",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a85b2803b54f10001f56d35|d57b80fc-146d-b72e-304a-01c1dbed78da"
              },
              "yValue": -200,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-3-n-4",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a85b2803b54f10001f56d35|d57b80fc-146d-b72e-304a-01c1dbed78da"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-3-n-7",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a85b2803b54f10001f56d35|cd8b4fbc-45b1-4081-50c5-19d7e0e82423"
              },
              "yValue": 200,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-3-n-8",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a85b2803b54f10001f56d35|cd8b4fbc-45b1-4081-50c5-19d7e0e82423"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-3-n-11",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a85b2803b54f10001f56d35|505872d8-e7ad-2097-2d2a-390ac06b3a4f"
              },
              "yValue": -100,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-3-n-12",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a85b2803b54f10001f56d35|505872d8-e7ad-2097-2d2a-390ac06b3a4f"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-3-n-15",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a85b2803b54f10001f56d35|907225e5-953a-4582-c287-cf93d436faab"
              },
              "yValue": 300,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-3-n-16",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a85b2803b54f10001f56d35|907225e5-953a-4582-c287-cf93d436faab"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }]
      }],
      "createdOn": 1518804279887
    },
    "a-4": {
      "id": "a-4",
      "title": "Parallax Roller Animation",
      "continuousParameterGroups": [{
        "id": "a-4-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-4-n",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a85b2803b54f10001f56d35|23f37129-e236-b3d1-78dd-35209f0eb9f3"
              },
              "yValue": -100,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-4-n-3",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a85b2803b54f10001f56d35|23f37129-e236-b3d1-78dd-35209f0eb9f3"
              },
              "zValue": 45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-4-n-5",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a85b2803b54f10001f56d35|f0016494-104d-6ed6-e282-5fbb71d044bd"
              },
              "yValue": 150,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-4-n-7",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a85b2803b54f10001f56d35|c5baf083-ba00-d913-9057-e034fe697280"
              },
              "yValue": -50,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-4-n-11",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a85b2803b54f10001f56d35|b2952efb-7f5a-496c-d215-3ba51080cab5"
              },
              "yValue": 50,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-4-n-2",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a85b2803b54f10001f56d35|23f37129-e236-b3d1-78dd-35209f0eb9f3"
              },
              "yValue": 400,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-4-n-4",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a85b2803b54f10001f56d35|23f37129-e236-b3d1-78dd-35209f0eb9f3"
              },
              "zValue": 45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-4-n-6",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a85b2803b54f10001f56d35|f0016494-104d-6ed6-e282-5fbb71d044bd"
              },
              "yValue": -150,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-4-n-8",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a85b2803b54f10001f56d35|c5baf083-ba00-d913-9057-e034fe697280"
              },
              "yValue": 50,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-4-n-12",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a85b2803b54f10001f56d35|b2952efb-7f5a-496c-d215-3ba51080cab5"
              },
              "yValue": -50,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }]
      }],
      "createdOn": 1519135817073
    },
    "a-5": {
      "id": "a-5",
      "title": "Circle Plus Background Change",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-5-n",
          "actionTypeId": "STYLE_BACKGROUND_COLOR",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "target": {
              "id": "5a85b2803b54f10001f56d35|d79f6561-f018-29b5-d09d-2b3983189973"
            },
            "rValue": 49,
            "gValue": 49,
            "bValue": 55,
            "aValue": 1
          }
        }]
      }],
      "createdOn": 1519143666465,
      "useFirstGroupAsInitialState": false
    },
    "a-6": {
      "id": "a-6",
      "title": "Circle Plus Background Change Second",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-6-n",
          "actionTypeId": "STYLE_BACKGROUND_COLOR",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "target": {
              "id": "5a85b2803b54f10001f56d35|d79f6561-f018-29b5-d09d-2b3983189973"
            },
            "rValue": 255,
            "gValue": 221,
            "bValue": 0,
            "aValue": 1
          }
        }]
      }],
      "createdOn": 1519143821179,
      "useFirstGroupAsInitialState": false
    },
    "a-10": {
      "id": "a-10",
      "title": "Circle Plus Background Change 2",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-10-n",
          "actionTypeId": "STYLE_BACKGROUND_COLOR",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "target": {
              "id": "5a8eeb6b12fbfe0001c7a29d|d79f6561-f018-29b5-d09d-2b3983189973"
            },
            "rValue": 49,
            "gValue": 49,
            "bValue": 55,
            "aValue": 1
          }
        }]
      }],
      "createdOn": 1519143666465,
      "useFirstGroupAsInitialState": false
    },
    "a-11": {
      "id": "a-11",
      "title": "Circle Plus Background Change Second 2",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-11-n",
          "actionTypeId": "STYLE_BACKGROUND_COLOR",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "target": {
              "id": "5a8eeb6b12fbfe0001c7a29d|d79f6561-f018-29b5-d09d-2b3983189973"
            },
            "rValue": 255,
            "gValue": 221,
            "bValue": 0,
            "aValue": 1
          }
        }]
      }],
      "createdOn": 1519143821179,
      "useFirstGroupAsInitialState": false
    },
    "a-13": {
      "id": "a-13",
      "title": "Parallax Square Animation 3",
      "continuousParameterGroups": [{
        "id": "a-13-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-13-n",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8ef7533d16140001255c70|d57b80fc-146d-b72e-304a-01c1dbed78da"
              },
              "yValue": 200,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-13-n-2",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8ef7533d16140001255c70|d57b80fc-146d-b72e-304a-01c1dbed78da"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-13-n-5",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8ef7533d16140001255c70|505872d8-e7ad-2097-2d2a-390ac06b3a4f"
              },
              "yValue": 200,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-13-n-6",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8ef7533d16140001255c70|505872d8-e7ad-2097-2d2a-390ac06b3a4f"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-13-n-7",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8ef7533d16140001255c70|907225e5-953a-4582-c287-cf93d436faab"
              },
              "yValue": -50,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-13-n-8",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8ef7533d16140001255c70|907225e5-953a-4582-c287-cf93d436faab"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }, {
          "keyframe": 30,
          "actionItems": [{
            "id": "a-13-n-9",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8ef7533d16140001255c70|82427d11-20f9-c246-34d9-7aef9d761665"
              },
              "yValue": -100,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-13-n-12",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8ef7533d16140001255c70|d57b80fc-146d-b72e-304a-01c1dbed78da"
              },
              "yValue": -200,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-13-n-13",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8ef7533d16140001255c70|d57b80fc-146d-b72e-304a-01c1dbed78da"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-13-n-16",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8ef7533d16140001255c70|505872d8-e7ad-2097-2d2a-390ac06b3a4f"
              },
              "yValue": -100,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-13-n-17",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8ef7533d16140001255c70|505872d8-e7ad-2097-2d2a-390ac06b3a4f"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-13-n-18",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8ef7533d16140001255c70|907225e5-953a-4582-c287-cf93d436faab"
              },
              "yValue": 300,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-13-n-19",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8ef7533d16140001255c70|907225e5-953a-4582-c287-cf93d436faab"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-13-n-20",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8ef7533d16140001255c70|82427d11-20f9-c246-34d9-7aef9d761665"
              },
              "yValue": 100,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }]
      }],
      "createdOn": 1518804279887
    },
    "a-14": {
      "id": "a-14",
      "title": "Circle Plus Background Change 3",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-14-n",
          "actionTypeId": "STYLE_BACKGROUND_COLOR",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "target": {
              "id": "5a8ef7533d16140001255c70|d79f6561-f018-29b5-d09d-2b3983189973"
            },
            "rValue": 49,
            "gValue": 49,
            "bValue": 55,
            "aValue": 1
          }
        }]
      }],
      "createdOn": 1519143666465,
      "useFirstGroupAsInitialState": false
    },
    "a-15": {
      "id": "a-15",
      "title": "Circle Plus Background Change Second 3",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-15-n",
          "actionTypeId": "STYLE_BACKGROUND_COLOR",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "target": {
              "id": "5a8ef7533d16140001255c70|d79f6561-f018-29b5-d09d-2b3983189973"
            },
            "rValue": 255,
            "gValue": 221,
            "bValue": 0,
            "aValue": 1
          }
        }]
      }],
      "createdOn": 1519143821179,
      "useFirstGroupAsInitialState": false
    },
    "a-17": {
      "id": "a-17",
      "title": "Parallax Square Animation 4",
      "continuousParameterGroups": [{
        "id": "a-17-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-17-n",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8efd343d16140001256bdd|d57b80fc-146d-b72e-304a-01c1dbed78da"
              },
              "yValue": 200,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-17-n-2",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8efd343d16140001256bdd|d57b80fc-146d-b72e-304a-01c1dbed78da"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-17-n-3",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8efd343d16140001256bdd|505872d8-e7ad-2097-2d2a-390ac06b3a4f"
              },
              "yValue": 200,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-17-n-4",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8efd343d16140001256bdd|505872d8-e7ad-2097-2d2a-390ac06b3a4f"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-17-n-5",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8efd343d16140001256bdd|907225e5-953a-4582-c287-cf93d436faab"
              },
              "yValue": -50,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-17-n-6",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8efd343d16140001256bdd|907225e5-953a-4582-c287-cf93d436faab"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }, {
          "keyframe": 30,
          "actionItems": [{
            "id": "a-17-n-7",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8efd343d16140001256bdd|82427d11-20f9-c246-34d9-7aef9d761665"
              },
              "yValue": -100,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-17-n-8",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8efd343d16140001256bdd|d57b80fc-146d-b72e-304a-01c1dbed78da"
              },
              "yValue": -200,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-17-n-9",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8efd343d16140001256bdd|d57b80fc-146d-b72e-304a-01c1dbed78da"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-17-n-10",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8efd343d16140001256bdd|505872d8-e7ad-2097-2d2a-390ac06b3a4f"
              },
              "yValue": -100,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-17-n-11",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8efd343d16140001256bdd|505872d8-e7ad-2097-2d2a-390ac06b3a4f"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-17-n-12",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8efd343d16140001256bdd|907225e5-953a-4582-c287-cf93d436faab"
              },
              "yValue": 300,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-17-n-13",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8efd343d16140001256bdd|907225e5-953a-4582-c287-cf93d436faab"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-17-n-14",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8efd343d16140001256bdd|82427d11-20f9-c246-34d9-7aef9d761665"
              },
              "yValue": 100,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }]
      }],
      "createdOn": 1518804279887
    },
    "a-19": {
      "id": "a-19",
      "title": "Parallax Square Animation 5",
      "continuousParameterGroups": [{
        "id": "a-19-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-19-n",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8fdf47d851770001cdc76a|d57b80fc-146d-b72e-304a-01c1dbed78da"
              },
              "yValue": 200,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-19-n-2",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8fdf47d851770001cdc76a|d57b80fc-146d-b72e-304a-01c1dbed78da"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-19-n-3",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8fdf47d851770001cdc76a|505872d8-e7ad-2097-2d2a-390ac06b3a4f"
              },
              "yValue": 200,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-19-n-4",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8fdf47d851770001cdc76a|505872d8-e7ad-2097-2d2a-390ac06b3a4f"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-19-n-5",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8fdf47d851770001cdc76a|907225e5-953a-4582-c287-cf93d436faab"
              },
              "yValue": -50,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-19-n-6",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8fdf47d851770001cdc76a|907225e5-953a-4582-c287-cf93d436faab"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }, {
          "keyframe": 30,
          "actionItems": [{
            "id": "a-19-n-7",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8fdf47d851770001cdc76a|82427d11-20f9-c246-34d9-7aef9d761665"
              },
              "yValue": -100,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-19-n-8",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8fdf47d851770001cdc76a|d57b80fc-146d-b72e-304a-01c1dbed78da"
              },
              "yValue": -200,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-19-n-9",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8fdf47d851770001cdc76a|d57b80fc-146d-b72e-304a-01c1dbed78da"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-19-n-10",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8fdf47d851770001cdc76a|505872d8-e7ad-2097-2d2a-390ac06b3a4f"
              },
              "yValue": -100,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-19-n-11",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8fdf47d851770001cdc76a|505872d8-e7ad-2097-2d2a-390ac06b3a4f"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-19-n-12",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8fdf47d851770001cdc76a|907225e5-953a-4582-c287-cf93d436faab"
              },
              "yValue": 300,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-19-n-13",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8fdf47d851770001cdc76a|907225e5-953a-4582-c287-cf93d436faab"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-19-n-14",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a8fdf47d851770001cdc76a|82427d11-20f9-c246-34d9-7aef9d761665"
              },
              "yValue": 100,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }]
      }],
      "createdOn": 1518804279887
    },
    "a-21": {
      "id": "a-21",
      "title": "Parallax Square Animation 6",
      "continuousParameterGroups": [{
        "id": "a-21-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-21-n",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a901e68ec586e0001d6625c|d57b80fc-146d-b72e-304a-01c1dbed78da"
              },
              "yValue": 200,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-21-n-2",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a901e68ec586e0001d6625c|d57b80fc-146d-b72e-304a-01c1dbed78da"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-21-n-3",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a901e68ec586e0001d6625c|505872d8-e7ad-2097-2d2a-390ac06b3a4f"
              },
              "yValue": 200,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-21-n-4",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a901e68ec586e0001d6625c|505872d8-e7ad-2097-2d2a-390ac06b3a4f"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-21-n-5",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a901e68ec586e0001d6625c|907225e5-953a-4582-c287-cf93d436faab"
              },
              "yValue": -50,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-21-n-6",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a901e68ec586e0001d6625c|907225e5-953a-4582-c287-cf93d436faab"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }, {
          "keyframe": 30,
          "actionItems": [{
            "id": "a-21-n-7",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a901e68ec586e0001d6625c|82427d11-20f9-c246-34d9-7aef9d761665"
              },
              "yValue": -100,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-21-n-8",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a901e68ec586e0001d6625c|d57b80fc-146d-b72e-304a-01c1dbed78da"
              },
              "yValue": -200,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-21-n-9",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a901e68ec586e0001d6625c|d57b80fc-146d-b72e-304a-01c1dbed78da"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-21-n-10",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a901e68ec586e0001d6625c|505872d8-e7ad-2097-2d2a-390ac06b3a4f"
              },
              "yValue": -100,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-21-n-11",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a901e68ec586e0001d6625c|505872d8-e7ad-2097-2d2a-390ac06b3a4f"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-21-n-12",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a901e68ec586e0001d6625c|907225e5-953a-4582-c287-cf93d436faab"
              },
              "yValue": 300,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-21-n-13",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a901e68ec586e0001d6625c|907225e5-953a-4582-c287-cf93d436faab"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-21-n-14",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a901e68ec586e0001d6625c|82427d11-20f9-c246-34d9-7aef9d761665"
              },
              "yValue": 100,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }]
      }],
      "createdOn": 1518804279887
    },
    "a-23": {
      "id": "a-23",
      "title": "Parallax Square Animation 7",
      "continuousParameterGroups": [{
        "id": "a-23-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-23-n",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a9020c7dffd9b000181b1b8|d57b80fc-146d-b72e-304a-01c1dbed78da"
              },
              "yValue": 200,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-23-n-2",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a9020c7dffd9b000181b1b8|d57b80fc-146d-b72e-304a-01c1dbed78da"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-23-n-3",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a9020c7dffd9b000181b1b8|505872d8-e7ad-2097-2d2a-390ac06b3a4f"
              },
              "yValue": -100,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-23-n-4",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a9020c7dffd9b000181b1b8|505872d8-e7ad-2097-2d2a-390ac06b3a4f"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-23-n-5",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a9020c7dffd9b000181b1b8|907225e5-953a-4582-c287-cf93d436faab"
              },
              "yValue": -100,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-23-n-6",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a9020c7dffd9b000181b1b8|907225e5-953a-4582-c287-cf93d436faab"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }, {
          "keyframe": 30,
          "actionItems": [{
            "id": "a-23-n-7",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a9020c7dffd9b000181b1b8|82427d11-20f9-c246-34d9-7aef9d761665"
              },
              "yValue": 200,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-23-n-8",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a9020c7dffd9b000181b1b8|d57b80fc-146d-b72e-304a-01c1dbed78da"
              },
              "yValue": -200,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-23-n-9",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a9020c7dffd9b000181b1b8|d57b80fc-146d-b72e-304a-01c1dbed78da"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-23-n-10",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a9020c7dffd9b000181b1b8|505872d8-e7ad-2097-2d2a-390ac06b3a4f"
              },
              "yValue": 30,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-23-n-11",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a9020c7dffd9b000181b1b8|505872d8-e7ad-2097-2d2a-390ac06b3a4f"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-23-n-12",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a9020c7dffd9b000181b1b8|907225e5-953a-4582-c287-cf93d436faab"
              },
              "yValue": 100,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-23-n-13",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a9020c7dffd9b000181b1b8|907225e5-953a-4582-c287-cf93d436faab"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-23-n-14",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a9020c7dffd9b000181b1b8|82427d11-20f9-c246-34d9-7aef9d761665"
              },
              "yValue": 0,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }]
      }],
      "createdOn": 1518804279887
    },
    "a-25": {
      "id": "a-25",
      "title": "Parallax Square Animation 8",
      "continuousParameterGroups": [{
        "id": "a-25-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-25-n",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a903a53b223b60001246e31|d57b80fc-146d-b72e-304a-01c1dbed78da"
              },
              "yValue": 200,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-25-n-2",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a903a53b223b60001246e31|d57b80fc-146d-b72e-304a-01c1dbed78da"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-25-n-3",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a903a53b223b60001246e31|505872d8-e7ad-2097-2d2a-390ac06b3a4f"
              },
              "yValue": 200,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-25-n-4",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a903a53b223b60001246e31|505872d8-e7ad-2097-2d2a-390ac06b3a4f"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-25-n-5",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a903a53b223b60001246e31|907225e5-953a-4582-c287-cf93d436faab"
              },
              "yValue": -50,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-25-n-6",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a903a53b223b60001246e31|907225e5-953a-4582-c287-cf93d436faab"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }, {
          "keyframe": 30,
          "actionItems": [{
            "id": "a-25-n-7",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a903a53b223b60001246e31|82427d11-20f9-c246-34d9-7aef9d761665"
              },
              "yValue": -100,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-25-n-8",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a903a53b223b60001246e31|d57b80fc-146d-b72e-304a-01c1dbed78da"
              },
              "yValue": -200,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-25-n-9",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a903a53b223b60001246e31|d57b80fc-146d-b72e-304a-01c1dbed78da"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-25-n-10",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a903a53b223b60001246e31|505872d8-e7ad-2097-2d2a-390ac06b3a4f"
              },
              "yValue": -100,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-25-n-11",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a903a53b223b60001246e31|505872d8-e7ad-2097-2d2a-390ac06b3a4f"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-25-n-12",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a903a53b223b60001246e31|907225e5-953a-4582-c287-cf93d436faab"
              },
              "yValue": 300,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-25-n-13",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a903a53b223b60001246e31|907225e5-953a-4582-c287-cf93d436faab"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-25-n-14",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a903a53b223b60001246e31|82427d11-20f9-c246-34d9-7aef9d761665"
              },
              "yValue": 100,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }]
      }],
      "createdOn": 1518804279887
    },
    "a-26": {
      "id": "a-26",
      "title": "Navigation Animation 2",
      "continuousParameterGroups": [{
        "id": "a-26-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-26-n",
            "actionTypeId": "STYLE_BACKGROUND_COLOR",
            "config": {
              "delay": 0,
              "easing": "easeIn",
              "duration": 500,
              "target": {
                "id": "5a96d512f16f18000104850f|05a20c81-f501-6eca-2564-b387aa22d69d"
              },
              "rValue": 255,
              "gValue": 255,
              "bValue": 255,
              "aValue": 0
            }
          }, {
            "id": "a-26-n-2",
            "actionTypeId": "STYLE_SIZE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "locked": false,
              "target": {
                "id": "5a96d512f16f18000104850f|05a20c81-f501-6eca-2564-b387aa22d69d"
              },
              "heightValue": 150,
              "widthUnit": "PX",
              "heightUnit": "PX"
            }
          }, {
            "id": "a-26-n-3",
            "actionTypeId": "STYLE_SIZE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "locked": false,
              "target": {
                "id": "5a96d512f16f18000104850f|1d4b79f1-523c-5886-c89b-0d5038e7ae13"
              },
              "widthValue": 80,
              "heightValue": 80,
              "widthUnit": "PX",
              "heightUnit": "PX"
            }
          }, {
            "id": "a-26-n-4",
            "actionTypeId": "STYLE_SIZE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "locked": false,
              "target": {
                "id": "5a96d512f16f18000104850f|69cf3229-78d6-473b-6e32-0b908a6d52e4"
              },
              "widthValue": 80,
              "heightValue": 80,
              "widthUnit": "PX",
              "heightUnit": "PX"
            }
          }, {
            "id": "a-26-n-5",
            "actionTypeId": "STYLE_BACKGROUND_COLOR",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a96d512f16f18000104850f|5a24074a-1572-89e3-057f-64696795c1b9"
              },
              "rValue": 33,
              "gValue": 33,
              "bValue": 39,
              "aValue": 1
            }
          }, {
            "id": "a-26-n-6",
            "actionTypeId": "STYLE_BACKGROUND_COLOR",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a96d512f16f18000104850f|d3dae2ad-6776-9355-9bf5-829a66f24f79"
              },
              "rValue": 33,
              "gValue": 33,
              "bValue": 39,
              "aValue": 1
            }
          }, {
            "id": "a-26-n-7",
            "actionTypeId": "STYLE_BACKGROUND_COLOR",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a96d512f16f18000104850f|9b1a2d58-7505-66df-5dc8-26c5dcafed18"
              },
              "rValue": 33,
              "gValue": 33,
              "bValue": 39,
              "aValue": 1
            }
          }, {
            "id": "a-26-n-8",
            "actionTypeId": "STYLE_SIZE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "locked": false,
              "target": {
                "id": "5a96d512f16f18000104850f|1a33dc16-6edc-aa81-d26a-9e67ed7a4adb"
              },
              "widthValue": 32,
              "heightValue": 28,
              "widthUnit": "PX",
              "heightUnit": "PX"
            }
          }]
        }, {
          "keyframe": 2,
          "actionItems": [{
            "id": "a-26-n-9",
            "actionTypeId": "STYLE_BACKGROUND_COLOR",
            "config": {
              "delay": 0,
              "easing": "easeIn",
              "duration": 500,
              "target": {
                "id": "5a96d512f16f18000104850f|05a20c81-f501-6eca-2564-b387aa22d69d"
              },
              "rValue": 255,
              "gValue": 255,
              "bValue": 255,
              "aValue": 1
            }
          }, {
            "id": "a-26-n-10",
            "actionTypeId": "STYLE_SIZE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "locked": false,
              "target": {
                "id": "5a96d512f16f18000104850f|05a20c81-f501-6eca-2564-b387aa22d69d"
              },
              "heightValue": 90,
              "widthUnit": "PX",
              "heightUnit": "PX"
            }
          }, {
            "id": "a-26-n-11",
            "actionTypeId": "STYLE_SIZE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "locked": false,
              "target": {
                "id": "5a96d512f16f18000104850f|1d4b79f1-523c-5886-c89b-0d5038e7ae13"
              },
              "widthValue": 50,
              "heightValue": 50,
              "widthUnit": "PX",
              "heightUnit": "PX"
            }
          }, {
            "id": "a-26-n-12",
            "actionTypeId": "STYLE_SIZE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "locked": false,
              "target": {
                "id": "5a96d512f16f18000104850f|69cf3229-78d6-473b-6e32-0b908a6d52e4"
              },
              "widthValue": 50,
              "heightValue": 50,
              "widthUnit": "PX",
              "heightUnit": "PX"
            }
          }, {
            "id": "a-26-n-13",
            "actionTypeId": "STYLE_BACKGROUND_COLOR",
            "config": {
              "delay": 0,
              "easing": "easeIn",
              "duration": 500,
              "target": {
                "id": "5a96d512f16f18000104850f|5a24074a-1572-89e3-057f-64696795c1b9"
              },
              "rValue": 33,
              "gValue": 33,
              "bValue": 39,
              "aValue": 1
            }
          }, {
            "id": "a-26-n-14",
            "actionTypeId": "STYLE_BACKGROUND_COLOR",
            "config": {
              "delay": 0,
              "easing": "easeIn",
              "duration": 500,
              "target": {
                "id": "5a96d512f16f18000104850f|d3dae2ad-6776-9355-9bf5-829a66f24f79"
              },
              "rValue": 33,
              "gValue": 33,
              "bValue": 39,
              "aValue": 1
            }
          }, {
            "id": "a-26-n-15",
            "actionTypeId": "STYLE_BACKGROUND_COLOR",
            "config": {
              "delay": 0,
              "easing": "easeIn",
              "duration": 500,
              "target": {
                "id": "5a96d512f16f18000104850f|9b1a2d58-7505-66df-5dc8-26c5dcafed18"
              },
              "rValue": 33,
              "gValue": 33,
              "bValue": 39,
              "aValue": 1
            }
          }, {
            "id": "a-26-n-16",
            "actionTypeId": "STYLE_SIZE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "locked": false,
              "target": {
                "id": "5a96d512f16f18000104850f|1a33dc16-6edc-aa81-d26a-9e67ed7a4adb"
              },
              "widthValue": 26,
              "heightValue": 22,
              "widthUnit": "PX",
              "heightUnit": "PX"
            }
          }]
        }]
      }],
      "createdOn": 1518716882562
    },
    "a-27": {
      "id": "a-27",
      "title": "Parallax Square Animation 9",
      "continuousParameterGroups": [{
        "id": "a-27-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-27-n",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a96d512f16f18000104850f|d57b80fc-146d-b72e-304a-01c1dbed78da"
              },
              "yValue": 200,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-27-n-2",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a96d512f16f18000104850f|d57b80fc-146d-b72e-304a-01c1dbed78da"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-27-n-3",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a96d512f16f18000104850f|505872d8-e7ad-2097-2d2a-390ac06b3a4f"
              },
              "yValue": 200,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-27-n-4",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a96d512f16f18000104850f|505872d8-e7ad-2097-2d2a-390ac06b3a4f"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-27-n-5",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a96d512f16f18000104850f|907225e5-953a-4582-c287-cf93d436faab"
              },
              "yValue": -50,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-27-n-6",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a96d512f16f18000104850f|907225e5-953a-4582-c287-cf93d436faab"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }, {
          "keyframe": 30,
          "actionItems": [{
            "id": "a-27-n-7",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a96d512f16f18000104850f|82427d11-20f9-c246-34d9-7aef9d761665"
              },
              "yValue": -100,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-27-n-8",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a96d512f16f18000104850f|d57b80fc-146d-b72e-304a-01c1dbed78da"
              },
              "yValue": -200,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-27-n-9",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a96d512f16f18000104850f|d57b80fc-146d-b72e-304a-01c1dbed78da"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-27-n-10",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a96d512f16f18000104850f|505872d8-e7ad-2097-2d2a-390ac06b3a4f"
              },
              "yValue": -100,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-27-n-11",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a96d512f16f18000104850f|505872d8-e7ad-2097-2d2a-390ac06b3a4f"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-27-n-12",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a96d512f16f18000104850f|907225e5-953a-4582-c287-cf93d436faab"
              },
              "yValue": 300,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-27-n-13",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a96d512f16f18000104850f|907225e5-953a-4582-c287-cf93d436faab"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-27-n-14",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a96d512f16f18000104850f|82427d11-20f9-c246-34d9-7aef9d761665"
              },
              "yValue": 100,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }]
      }],
      "createdOn": 1518804279887
    },
    "a-28": {
      "id": "a-28",
      "title": "Circle Plus Background Change 4",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-28-n",
          "actionTypeId": "STYLE_BACKGROUND_COLOR",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "target": {
              "id": "5a96d512f16f18000104850f|d79f6561-f018-29b5-d09d-2b3983189973"
            },
            "rValue": 49,
            "gValue": 49,
            "bValue": 55,
            "aValue": 1
          }
        }]
      }],
      "createdOn": 1519143666465,
      "useFirstGroupAsInitialState": false
    },
    "a-29": {
      "id": "a-29",
      "title": "Circle Plus Background Change Second 4",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-29-n",
          "actionTypeId": "STYLE_BACKGROUND_COLOR",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "target": {
              "id": "5a96d512f16f18000104850f|d79f6561-f018-29b5-d09d-2b3983189973"
            },
            "rValue": 255,
            "gValue": 221,
            "bValue": 0,
            "aValue": 1
          }
        }]
      }],
      "createdOn": 1519143821179,
      "useFirstGroupAsInitialState": false
    },
    "a-30": {
      "id": "a-30",
      "title": "Navigation Animation 3",
      "continuousParameterGroups": [{
        "id": "a-30-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-30-n",
            "actionTypeId": "STYLE_BACKGROUND_COLOR",
            "config": {
              "delay": 0,
              "easing": "easeIn",
              "duration": 500,
              "target": {
                "id": "5a98156ed790df0001e789f3|05a20c81-f501-6eca-2564-b387aa22d69d"
              },
              "rValue": 255,
              "gValue": 255,
              "bValue": 255,
              "aValue": 0
            }
          }, {
            "id": "a-30-n-2",
            "actionTypeId": "STYLE_SIZE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "locked": false,
              "target": {
                "id": "5a98156ed790df0001e789f3|05a20c81-f501-6eca-2564-b387aa22d69d"
              },
              "heightValue": 150,
              "widthUnit": "PX",
              "heightUnit": "PX"
            }
          }, {
            "id": "a-30-n-3",
            "actionTypeId": "STYLE_SIZE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "locked": false,
              "target": {
                "id": "5a98156ed790df0001e789f3|1d4b79f1-523c-5886-c89b-0d5038e7ae13"
              },
              "widthValue": 80,
              "heightValue": 80,
              "widthUnit": "PX",
              "heightUnit": "PX"
            }
          }, {
            "id": "a-30-n-4",
            "actionTypeId": "STYLE_SIZE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "locked": false,
              "target": {
                "id": "5a98156ed790df0001e789f3|69cf3229-78d6-473b-6e32-0b908a6d52e4"
              },
              "widthValue": 80,
              "heightValue": 80,
              "widthUnit": "PX",
              "heightUnit": "PX"
            }
          }, {
            "id": "a-30-n-5",
            "actionTypeId": "STYLE_BACKGROUND_COLOR",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a98156ed790df0001e789f3|5a24074a-1572-89e3-057f-64696795c1b9"
              },
              "rValue": 33,
              "gValue": 33,
              "bValue": 39,
              "aValue": 1
            }
          }, {
            "id": "a-30-n-6",
            "actionTypeId": "STYLE_BACKGROUND_COLOR",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a98156ed790df0001e789f3|d3dae2ad-6776-9355-9bf5-829a66f24f79"
              },
              "rValue": 33,
              "gValue": 33,
              "bValue": 39,
              "aValue": 1
            }
          }, {
            "id": "a-30-n-7",
            "actionTypeId": "STYLE_BACKGROUND_COLOR",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a98156ed790df0001e789f3|9b1a2d58-7505-66df-5dc8-26c5dcafed18"
              },
              "rValue": 33,
              "gValue": 33,
              "bValue": 39,
              "aValue": 1
            }
          }, {
            "id": "a-30-n-8",
            "actionTypeId": "STYLE_SIZE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "locked": false,
              "target": {
                "id": "5a98156ed790df0001e789f3|1a33dc16-6edc-aa81-d26a-9e67ed7a4adb"
              },
              "widthValue": 32,
              "heightValue": 28,
              "widthUnit": "PX",
              "heightUnit": "PX"
            }
          }]
        }, {
          "keyframe": 2,
          "actionItems": [{
            "id": "a-30-n-9",
            "actionTypeId": "STYLE_BACKGROUND_COLOR",
            "config": {
              "delay": 0,
              "easing": "easeIn",
              "duration": 500,
              "target": {
                "id": "5a98156ed790df0001e789f3|05a20c81-f501-6eca-2564-b387aa22d69d"
              },
              "rValue": 255,
              "gValue": 255,
              "bValue": 255,
              "aValue": 1
            }
          }, {
            "id": "a-30-n-10",
            "actionTypeId": "STYLE_SIZE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "locked": false,
              "target": {
                "id": "5a98156ed790df0001e789f3|05a20c81-f501-6eca-2564-b387aa22d69d"
              },
              "heightValue": 90,
              "widthUnit": "PX",
              "heightUnit": "PX"
            }
          }, {
            "id": "a-30-n-11",
            "actionTypeId": "STYLE_SIZE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "locked": false,
              "target": {
                "id": "5a98156ed790df0001e789f3|1d4b79f1-523c-5886-c89b-0d5038e7ae13"
              },
              "widthValue": 50,
              "heightValue": 50,
              "widthUnit": "PX",
              "heightUnit": "PX"
            }
          }, {
            "id": "a-30-n-12",
            "actionTypeId": "STYLE_SIZE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "locked": false,
              "target": {
                "id": "5a98156ed790df0001e789f3|69cf3229-78d6-473b-6e32-0b908a6d52e4"
              },
              "widthValue": 50,
              "heightValue": 50,
              "widthUnit": "PX",
              "heightUnit": "PX"
            }
          }, {
            "id": "a-30-n-13",
            "actionTypeId": "STYLE_BACKGROUND_COLOR",
            "config": {
              "delay": 0,
              "easing": "easeIn",
              "duration": 500,
              "target": {
                "id": "5a98156ed790df0001e789f3|5a24074a-1572-89e3-057f-64696795c1b9"
              },
              "rValue": 33,
              "gValue": 33,
              "bValue": 39,
              "aValue": 1
            }
          }, {
            "id": "a-30-n-14",
            "actionTypeId": "STYLE_BACKGROUND_COLOR",
            "config": {
              "delay": 0,
              "easing": "easeIn",
              "duration": 500,
              "target": {
                "id": "5a98156ed790df0001e789f3|d3dae2ad-6776-9355-9bf5-829a66f24f79"
              },
              "rValue": 33,
              "gValue": 33,
              "bValue": 39,
              "aValue": 1
            }
          }, {
            "id": "a-30-n-15",
            "actionTypeId": "STYLE_BACKGROUND_COLOR",
            "config": {
              "delay": 0,
              "easing": "easeIn",
              "duration": 500,
              "target": {
                "id": "5a98156ed790df0001e789f3|9b1a2d58-7505-66df-5dc8-26c5dcafed18"
              },
              "rValue": 33,
              "gValue": 33,
              "bValue": 39,
              "aValue": 1
            }
          }, {
            "id": "a-30-n-16",
            "actionTypeId": "STYLE_SIZE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "locked": false,
              "target": {
                "id": "5a98156ed790df0001e789f3|1a33dc16-6edc-aa81-d26a-9e67ed7a4adb"
              },
              "widthValue": 26,
              "heightValue": 22,
              "widthUnit": "PX",
              "heightUnit": "PX"
            }
          }]
        }]
      }],
      "createdOn": 1518716882562
    },
    "a-31": {
      "id": "a-31",
      "title": "Parallax Square Animation 10",
      "continuousParameterGroups": [{
        "id": "a-31-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-31-n",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a98156ed790df0001e789f3|d57b80fc-146d-b72e-304a-01c1dbed78da"
              },
              "yValue": 200,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-31-n-2",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a98156ed790df0001e789f3|d57b80fc-146d-b72e-304a-01c1dbed78da"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-31-n-3",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a98156ed790df0001e789f3|505872d8-e7ad-2097-2d2a-390ac06b3a4f"
              },
              "yValue": 200,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-31-n-4",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a98156ed790df0001e789f3|505872d8-e7ad-2097-2d2a-390ac06b3a4f"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-31-n-5",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a98156ed790df0001e789f3|907225e5-953a-4582-c287-cf93d436faab"
              },
              "yValue": -50,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-31-n-6",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a98156ed790df0001e789f3|907225e5-953a-4582-c287-cf93d436faab"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }]
        }, {
          "keyframe": 30,
          "actionItems": [{
            "id": "a-31-n-7",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a98156ed790df0001e789f3|82427d11-20f9-c246-34d9-7aef9d761665"
              },
              "yValue": -100,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-31-n-8",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a98156ed790df0001e789f3|d57b80fc-146d-b72e-304a-01c1dbed78da"
              },
              "yValue": -200,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-31-n-9",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a98156ed790df0001e789f3|d57b80fc-146d-b72e-304a-01c1dbed78da"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-31-n-10",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a98156ed790df0001e789f3|505872d8-e7ad-2097-2d2a-390ac06b3a4f"
              },
              "yValue": -100,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-31-n-11",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a98156ed790df0001e789f3|505872d8-e7ad-2097-2d2a-390ac06b3a4f"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-31-n-12",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a98156ed790df0001e789f3|907225e5-953a-4582-c287-cf93d436faab"
              },
              "yValue": 300,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-31-n-13",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a98156ed790df0001e789f3|907225e5-953a-4582-c287-cf93d436faab"
              },
              "zValue": -45,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-31-n-14",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "id": "5a98156ed790df0001e789f3|82427d11-20f9-c246-34d9-7aef9d761665"
              },
              "yValue": 100,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }]
      }],
      "createdOn": 1518804279887
    }
  },
  "site": {
    "mediaQueries": [{
      "key": "main",
      "min": 992,
      "max": 10000
    }, {
      "key": "medium",
      "min": 768,
      "max": 991
    }, {
      "key": "small",
      "min": 480,
      "max": 767
    }, {
      "key": "tiny",
      "min": 0,
      "max": 479
    }]
  }
});