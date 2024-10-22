var mC = Object.defineProperty
var ig = e => {
  throw TypeError(e)
}
var gC = (e, t, n) =>
  t in e ? mC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)
var hs = (e, t, n) => gC(e, typeof t != 'symbol' ? t + '' : t, n),
  Dd = (e, t, n) => t.has(e) || ig('Cannot ' + n)
var b = (e, t, n) => (Dd(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
  ue = (e, t, n) =>
    t.has(e)
      ? ig('Cannot add the same private member more than once')
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, n),
  K = (e, t, n, r) => (Dd(e, t, 'write to private field'), r ? r.call(e, n) : t.set(e, n), n),
  ge = (e, t, n) => (Dd(e, t, 'access private method'), n)
var Jl = (e, t, n, r) => ({
  set _(i) {
    K(e, t, i, n)
  },
  get _() {
    return b(e, t, r)
  }
})
function vC(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n]
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const i in r)
        if (i !== 'default' && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i)
          s && Object.defineProperty(e, i, s.get ? s : { enumerable: !0, get: () => r[i] })
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }))
}
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i)
  new MutationObserver(i => {
    for (const s of i)
      if (s.type === 'childList')
        for (const o of s.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(i) {
    const s = {}
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (s.credentials = 'include')
        : i.crossOrigin === 'anonymous'
          ? (s.credentials = 'omit')
          : (s.credentials = 'same-origin'),
      s
    )
  }
  function r(i) {
    if (i.ep) return
    i.ep = !0
    const s = n(i)
    fetch(i.href, s)
  }
})()
function u1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e
}
var c1 = { exports: {} },
  qc = {},
  d1 = { exports: {} },
  pe = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pl = Symbol.for('react.element'),
  yC = Symbol.for('react.portal'),
  wC = Symbol.for('react.fragment'),
  xC = Symbol.for('react.strict_mode'),
  EC = Symbol.for('react.profiler'),
  SC = Symbol.for('react.provider'),
  TC = Symbol.for('react.context'),
  CC = Symbol.for('react.forward_ref'),
  _C = Symbol.for('react.suspense'),
  bC = Symbol.for('react.memo'),
  kC = Symbol.for('react.lazy'),
  sg = Symbol.iterator
function PC(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (sg && e[sg]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var f1 = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  h1 = Object.assign,
  p1 = {}
function Ao(e, t, n) {
  ;(this.props = e), (this.context = t), (this.refs = p1), (this.updater = n || f1)
}
Ao.prototype.isReactComponent = {}
Ao.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
Ao.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function m1() {}
m1.prototype = Ao.prototype
function Up(e, t, n) {
  ;(this.props = e), (this.context = t), (this.refs = p1), (this.updater = n || f1)
}
var Hp = (Up.prototype = new m1())
Hp.constructor = Up
h1(Hp, Ao.prototype)
Hp.isPureReactComponent = !0
var og = Array.isArray,
  g1 = Object.prototype.hasOwnProperty,
  Wp = { current: null },
  v1 = { key: !0, ref: !0, __self: !0, __source: !0 }
function y1(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (s = '' + t.key), t))
      g1.call(t, r) && !v1.hasOwnProperty(r) && (i[r] = t[r])
  var a = arguments.length - 2
  if (a === 1) i.children = n
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2]
    i.children = l
  }
  if (e && e.defaultProps) for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r])
  return { $$typeof: Pl, type: e, key: s, ref: o, props: i, _owner: Wp.current }
}
function RC(e, t) {
  return { $$typeof: Pl, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }
}
function Gp(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Pl
}
function AC(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var ag = /\/+/g
function Fd(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? AC('' + e.key) : t.toString(36)
}
function Au(e, t, n, r, i) {
  var s = typeof e
  ;(s === 'undefined' || s === 'boolean') && (e = null)
  var o = !1
  if (e === null) o = !0
  else
    switch (s) {
      case 'string':
      case 'number':
        o = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case Pl:
          case yC:
            o = !0
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === '' ? '.' + Fd(o, 0) : r),
      og(i)
        ? ((n = ''),
          e != null && (n = e.replace(ag, '$&/') + '/'),
          Au(i, t, n, '', function (u) {
            return u
          }))
        : i != null &&
          (Gp(i) &&
            (i = RC(
              i,
              n + (!i.key || (o && o.key === i.key) ? '' : ('' + i.key).replace(ag, '$&/') + '/') + e
            )),
          t.push(i)),
      1
    )
  if (((o = 0), (r = r === '' ? '.' : r + ':'), og(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a]
      var l = r + Fd(s, a)
      o += Au(s, t, n, l, i)
    }
  else if (((l = PC(e)), typeof l == 'function'))
    for (e = l.call(e), a = 0; !(s = e.next()).done; )
      (s = s.value), (l = r + Fd(s, a++)), (o += Au(s, t, n, l, i))
  else if (s === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    )
  return o
}
function eu(e, t, n) {
  if (e == null) return e
  var r = [],
    i = 0
  return (
    Au(e, r, '', '', function (s) {
      return t.call(n, s, i++)
    }),
    r
  )
}
function OC(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (n) {
          ;(e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n))
        },
        function (n) {
          ;(e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n))
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var Rt = { current: null },
  Ou = { transition: null },
  LC = { ReactCurrentDispatcher: Rt, ReactCurrentBatchConfig: Ou, ReactCurrentOwner: Wp }
function w1() {
  throw Error('act(...) is not supported in production builds of React.')
}
pe.Children = {
  map: eu,
  forEach: function (e, t, n) {
    eu(
      e,
      function () {
        t.apply(this, arguments)
      },
      n
    )
  },
  count: function (e) {
    var t = 0
    return (
      eu(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      eu(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!Gp(e)) throw Error('React.Children.only expected to receive a single React element child.')
    return e
  }
}
pe.Component = Ao
pe.Fragment = wC
pe.Profiler = EC
pe.PureComponent = Up
pe.StrictMode = xC
pe.Suspense = _C
pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = LC
pe.act = w1
pe.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.'
    )
  var r = h1({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = Wp.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps
    for (l in t)
      g1.call(t, l) && !v1.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
  }
  var l = arguments.length - 2
  if (l === 1) r.children = n
  else if (1 < l) {
    a = Array(l)
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2]
    r.children = a
  }
  return { $$typeof: Pl, type: e.type, key: i, ref: s, props: r, _owner: o }
}
pe.createContext = function (e) {
  return (
    (e = {
      $$typeof: TC,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }),
    (e.Provider = { $$typeof: SC, _context: e }),
    (e.Consumer = e)
  )
}
pe.createElement = y1
pe.createFactory = function (e) {
  var t = y1.bind(null, e)
  return (t.type = e), t
}
pe.createRef = function () {
  return { current: null }
}
pe.forwardRef = function (e) {
  return { $$typeof: CC, render: e }
}
pe.isValidElement = Gp
pe.lazy = function (e) {
  return { $$typeof: kC, _payload: { _status: -1, _result: e }, _init: OC }
}
pe.memo = function (e, t) {
  return { $$typeof: bC, type: e, compare: t === void 0 ? null : t }
}
pe.startTransition = function (e) {
  var t = Ou.transition
  Ou.transition = {}
  try {
    e()
  } finally {
    Ou.transition = t
  }
}
pe.unstable_act = w1
pe.useCallback = function (e, t) {
  return Rt.current.useCallback(e, t)
}
pe.useContext = function (e) {
  return Rt.current.useContext(e)
}
pe.useDebugValue = function () {}
pe.useDeferredValue = function (e) {
  return Rt.current.useDeferredValue(e)
}
pe.useEffect = function (e, t) {
  return Rt.current.useEffect(e, t)
}
pe.useId = function () {
  return Rt.current.useId()
}
pe.useImperativeHandle = function (e, t, n) {
  return Rt.current.useImperativeHandle(e, t, n)
}
pe.useInsertionEffect = function (e, t) {
  return Rt.current.useInsertionEffect(e, t)
}
pe.useLayoutEffect = function (e, t) {
  return Rt.current.useLayoutEffect(e, t)
}
pe.useMemo = function (e, t) {
  return Rt.current.useMemo(e, t)
}
pe.useReducer = function (e, t, n) {
  return Rt.current.useReducer(e, t, n)
}
pe.useRef = function (e) {
  return Rt.current.useRef(e)
}
pe.useState = function (e) {
  return Rt.current.useState(e)
}
pe.useSyncExternalStore = function (e, t, n) {
  return Rt.current.useSyncExternalStore(e, t, n)
}
pe.useTransition = function () {
  return Rt.current.useTransition()
}
pe.version = '18.3.1'
d1.exports = pe
var w = d1.exports
const we = u1(w),
  Xf = vC({ __proto__: null, default: we }, [w])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var MC = w,
  NC = Symbol.for('react.element'),
  IC = Symbol.for('react.fragment'),
  DC = Object.prototype.hasOwnProperty,
  FC = MC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  jC = { key: !0, ref: !0, __self: !0, __source: !0 }
function x1(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null
  n !== void 0 && (s = '' + n), t.key !== void 0 && (s = '' + t.key), t.ref !== void 0 && (o = t.ref)
  for (r in t) DC.call(t, r) && !jC.hasOwnProperty(r) && (i[r] = t[r])
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r])
  return { $$typeof: NC, type: e, key: s, ref: o, props: i, _owner: FC.current }
}
qc.Fragment = IC
qc.jsx = x1
qc.jsxs = x1
c1.exports = qc
var P = c1.exports,
  Jf = {},
  E1 = { exports: {} },
  Jt = {},
  S1 = { exports: {} },
  T1 = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(R, $) {
    var z = R.length
    R.push($)
    e: for (; 0 < z; ) {
      var V = (z - 1) >>> 1,
        q = R[V]
      if (0 < i(q, $)) (R[V] = $), (R[z] = q), (z = V)
      else break e
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0]
  }
  function r(R) {
    if (R.length === 0) return null
    var $ = R[0],
      z = R.pop()
    if (z !== $) {
      R[0] = z
      e: for (var V = 0, q = R.length, F = q >>> 1; V < F; ) {
        var ye = 2 * (V + 1) - 1,
          ne = R[ye],
          Ce = ye + 1,
          Ee = R[Ce]
        if (0 > i(ne, z))
          Ce < q && 0 > i(Ee, ne)
            ? ((R[V] = Ee), (R[Ce] = z), (V = Ce))
            : ((R[V] = ne), (R[ye] = z), (V = ye))
        else if (Ce < q && 0 > i(Ee, z)) (R[V] = Ee), (R[Ce] = z), (V = Ce)
        else break e
      }
    }
    return $
  }
  function i(R, $) {
    var z = R.sortIndex - $.sortIndex
    return z !== 0 ? z : R.id - $.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var s = performance
    e.unstable_now = function () {
      return s.now()
    }
  } else {
    var o = Date,
      a = o.now()
    e.unstable_now = function () {
      return o.now() - a
    }
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    h = !1,
    v = !1,
    y = !1,
    x = typeof setTimeout == 'function' ? setTimeout : null,
    p = typeof clearTimeout == 'function' ? clearTimeout : null,
    m = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function g(R) {
    for (var $ = n(u); $ !== null; ) {
      if ($.callback === null) r(u)
      else if ($.startTime <= R) r(u), ($.sortIndex = $.expirationTime), t(l, $)
      else break
      $ = n(u)
    }
  }
  function E(R) {
    if (((y = !1), g(R), !v))
      if (n(l) !== null) (v = !0), oe(S)
      else {
        var $ = n(u)
        $ !== null && ee(E, $.startTime - R)
      }
  }
  function S(R, $) {
    ;(v = !1), y && ((y = !1), p(T), (T = -1)), (h = !0)
    var z = f
    try {
      for (g($), d = n(l); d !== null && (!(d.expirationTime > $) || (R && !D())); ) {
        var V = d.callback
        if (typeof V == 'function') {
          ;(d.callback = null), (f = d.priorityLevel)
          var q = V(d.expirationTime <= $)
          ;($ = e.unstable_now()), typeof q == 'function' ? (d.callback = q) : d === n(l) && r(l), g($)
        } else r(l)
        d = n(l)
      }
      if (d !== null) var F = !0
      else {
        var ye = n(u)
        ye !== null && ee(E, ye.startTime - $), (F = !1)
      }
      return F
    } finally {
      ;(d = null), (f = z), (h = !1)
    }
  }
  var C = !1,
    k = null,
    T = -1,
    A = 5,
    O = -1
  function D() {
    return !(e.unstable_now() - O < A)
  }
  function Z() {
    if (k !== null) {
      var R = e.unstable_now()
      O = R
      var $ = !0
      try {
        $ = k(!0, R)
      } finally {
        $ ? re() : ((C = !1), (k = null))
      }
    } else C = !1
  }
  var re
  if (typeof m == 'function')
    re = function () {
      m(Z)
    }
  else if (typeof MessageChannel < 'u') {
    var M = new MessageChannel(),
      W = M.port2
    ;(M.port1.onmessage = Z),
      (re = function () {
        W.postMessage(null)
      })
  } else
    re = function () {
      x(Z, 0)
    }
  function oe(R) {
    ;(k = R), C || ((C = !0), re())
  }
  function ee(R, $) {
    T = x(function () {
      R(e.unstable_now())
    }, $)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null
    }),
    (e.unstable_continueExecution = function () {
      v || h || ((v = !0), oe(S))
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (A = 0 < R ? Math.floor(1e3 / R) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l)
    }),
    (e.unstable_next = function (R) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var $ = 3
          break
        default:
          $ = f
      }
      var z = f
      f = $
      try {
        return R()
      } finally {
        f = z
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, $) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          R = 3
      }
      var z = f
      f = R
      try {
        return $()
      } finally {
        f = z
      }
    }),
    (e.unstable_scheduleCallback = function (R, $, z) {
      var V = e.unstable_now()
      switch (
        (typeof z == 'object' && z !== null
          ? ((z = z.delay), (z = typeof z == 'number' && 0 < z ? V + z : V))
          : (z = V),
        R)
      ) {
        case 1:
          var q = -1
          break
        case 2:
          q = 250
          break
        case 5:
          q = 1073741823
          break
        case 4:
          q = 1e4
          break
        default:
          q = 5e3
      }
      return (
        (q = z + q),
        (R = { id: c++, callback: $, priorityLevel: R, startTime: z, expirationTime: q, sortIndex: -1 }),
        z > V
          ? ((R.sortIndex = z),
            t(u, R),
            n(l) === null && R === n(u) && (y ? (p(T), (T = -1)) : (y = !0), ee(E, z - V)))
          : ((R.sortIndex = q), t(l, R), v || h || ((v = !0), oe(S))),
        R
      )
    }),
    (e.unstable_shouldYield = D),
    (e.unstable_wrapCallback = function (R) {
      var $ = f
      return function () {
        var z = f
        f = $
        try {
          return R.apply(this, arguments)
        } finally {
          f = z
        }
      }
    })
})(T1)
S1.exports = T1
var $C = S1.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var VC = w,
  Yt = $C
function N(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var C1 = new Set(),
  Da = {}
function is(e, t) {
  ho(e, t), ho(e + 'Capture', t)
}
function ho(e, t) {
  for (Da[e] = t, e = 0; e < t.length; e++) C1.add(t[e])
}
var gr = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  eh = Object.prototype.hasOwnProperty,
  BC =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  lg = {},
  ug = {}
function zC(e) {
  return eh.call(ug, e) ? !0 : eh.call(lg, e) ? !1 : BC.test(e) ? (ug[e] = !0) : ((lg[e] = !0), !1)
}
function UC(e, t, n, r) {
  if (n !== null && n.type === 0) return !1
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
    default:
      return !1
  }
}
function HC(e, t, n, r) {
  if (t === null || typeof t > 'u' || UC(e, t, n, r)) return !0
  if (r) return !1
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function At(e, t, n, r, i, s, o) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o)
}
var ot = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    ot[e] = new At(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv']
].forEach(function (e) {
  var t = e[0]
  ot[t] = new At(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  ot[e] = new At(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
  ot[e] = new At(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    ot[e] = new At(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  ot[e] = new At(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  ot[e] = new At(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  ot[e] = new At(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  ot[e] = new At(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var qp = /[\-:]([a-z])/g
function Kp(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(qp, Kp)
    ot[t] = new At(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(qp, Kp)
    ot[t] = new At(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(qp, Kp)
  ot[t] = new At(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  ot[e] = new At(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
ot.xlinkHref = new At('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  ot[e] = new At(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function Zp(e, t, n, r) {
  var i = ot.hasOwnProperty(t) ? ot[t] : null
  ;(i !== null
    ? i.type !== 0
    : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
    (HC(t, n, i, r) && (n = null),
    r || i === null
      ? zC(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Sr = VC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  tu = Symbol.for('react.element'),
  Ss = Symbol.for('react.portal'),
  Ts = Symbol.for('react.fragment'),
  Yp = Symbol.for('react.strict_mode'),
  th = Symbol.for('react.profiler'),
  _1 = Symbol.for('react.provider'),
  b1 = Symbol.for('react.context'),
  Qp = Symbol.for('react.forward_ref'),
  nh = Symbol.for('react.suspense'),
  rh = Symbol.for('react.suspense_list'),
  Xp = Symbol.for('react.memo'),
  Rr = Symbol.for('react.lazy'),
  k1 = Symbol.for('react.offscreen'),
  cg = Symbol.iterator
function Uo(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (cg && e[cg]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var Ve = Object.assign,
  jd
function oa(e) {
  if (jd === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      jd = (t && t[1]) || ''
    }
  return (
    `
` +
    jd +
    e
  )
}
var $d = !1
function Vd(e, t) {
  if (!e || $d) return ''
  $d = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error()
          }
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (u) {
          var r = u
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (u) {
          r = u
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (u) {
        r = u
      }
      e()
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];

      )
        a--
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var l =
                  `
` + i[o].replace(' at new ', ' at ')
                return (
                  e.displayName &&
                    l.includes('<anonymous>') &&
                    (l = l.replace('<anonymous>', e.displayName)),
                  l
                )
              }
            while (1 <= o && 0 <= a)
          break
        }
    }
  } finally {
    ;($d = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? oa(e) : ''
}
function WC(e) {
  switch (e.tag) {
    case 5:
      return oa(e.type)
    case 16:
      return oa('Lazy')
    case 13:
      return oa('Suspense')
    case 19:
      return oa('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = Vd(e.type, !1)), e
    case 11:
      return (e = Vd(e.type.render, !1)), e
    case 1:
      return (e = Vd(e.type, !0)), e
    default:
      return ''
  }
}
function ih(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case Ts:
      return 'Fragment'
    case Ss:
      return 'Portal'
    case th:
      return 'Profiler'
    case Yp:
      return 'StrictMode'
    case nh:
      return 'Suspense'
    case rh:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case b1:
        return (e.displayName || 'Context') + '.Consumer'
      case _1:
        return (e._context.displayName || 'Context') + '.Provider'
      case Qp:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case Xp:
        return (t = e.displayName || null), t !== null ? t : ih(e.type) || 'Memo'
      case Rr:
        ;(t = e._payload), (e = e._init)
        try {
          return ih(e(t))
        } catch {}
    }
  return null
}
function GC(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (t.displayName || 'Context') + '.Consumer'
    case 10:
      return (t._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      )
    case 7:
      return 'Fragment'
    case 5:
      return t
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return ih(t)
    case 8:
      return t === Yp ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null
      if (typeof t == 'string') return t
  }
  return null
}
function Xr(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e
    case 'object':
      return e
    default:
      return ''
  }
}
function P1(e) {
  var t = e.type
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
}
function qC(e) {
  var t = P1(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      s = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this)
        },
        set: function (o) {
          ;(r = '' + o), s.call(this, o)
        }
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r
        },
        setValue: function (o) {
          r = '' + o
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        }
      }
    )
  }
}
function nu(e) {
  e._valueTracker || (e._valueTracker = qC(e))
}
function R1(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return (
    e && (r = P1(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function Ju(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function sh(e, t) {
  var n = t.checked
  return Ve({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked
  })
}
function dg(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = Xr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null
    })
}
function A1(e, t) {
  ;(t = t.checked), t != null && Zp(e, 'checked', t, !1)
}
function oh(e, t) {
  A1(e, t)
  var n = Xr(t.value),
    r = t.type
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n)
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value')
    return
  }
  t.hasOwnProperty('value')
    ? ah(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && ah(e, t.type, Xr(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function fg(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type
    if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return
    ;(t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t)
  }
  ;(n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n)
}
function ah(e, t, n) {
  ;(t !== 'number' || Ju(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var aa = Array.isArray
function Vs(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + Xr(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ;(e[i].selected = !0), r && (e[i].defaultSelected = !0)
        return
      }
      t !== null || e[i].disabled || (t = e[i])
    }
    t !== null && (t.selected = !0)
  }
}
function lh(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91))
  return Ve({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue })
}
function hg(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92))
      if (aa(n)) {
        if (1 < n.length) throw Error(N(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: Xr(n) }
}
function O1(e, t) {
  var n = Xr(t.value),
    r = Xr(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function pg(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function L1(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function uh(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? L1(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e
}
var ru,
  M1 = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t
    else {
      for (
        ru = ru || document.createElement('div'),
          ru.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = ru.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function Fa(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var ga = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  },
  KC = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(ga).forEach(function (e) {
  KC.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ga[t] = ga[e])
  })
})
function N1(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (ga.hasOwnProperty(e) && ga[e])
      ? ('' + t).trim()
      : t + 'px'
}
function I1(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = N1(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i)
    }
}
var ZC = Ve(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
  }
)
function ch(e, t) {
  if (t) {
    if (ZC[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(N(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60))
      if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML))
        throw Error(N(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(N(62))
  }
}
function dh(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string'
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
var fh = null
function Jp(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var hh = null,
  Bs = null,
  zs = null
function mg(e) {
  if ((e = Ol(e))) {
    if (typeof hh != 'function') throw Error(N(280))
    var t = e.stateNode
    t && ((t = Xc(t)), hh(e.stateNode, e.type, t))
  }
}
function D1(e) {
  Bs ? (zs ? zs.push(e) : (zs = [e])) : (Bs = e)
}
function F1() {
  if (Bs) {
    var e = Bs,
      t = zs
    if (((zs = Bs = null), mg(e), t)) for (e = 0; e < t.length; e++) mg(t[e])
  }
}
function j1(e, t) {
  return e(t)
}
function $1() {}
var Bd = !1
function V1(e, t, n) {
  if (Bd) return e(t, n)
  Bd = !0
  try {
    return j1(e, t, n)
  } finally {
    ;(Bd = !1), (Bs !== null || zs !== null) && ($1(), F1())
  }
}
function ja(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = Xc(n)
  if (r === null) return null
  n = r[t]
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(r = !r.disabled) ||
        ((e = e.type), (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
        (e = !r)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (n && typeof n != 'function') throw Error(N(231, t, typeof n))
  return n
}
var ph = !1
if (gr)
  try {
    var Ho = {}
    Object.defineProperty(Ho, 'passive', {
      get: function () {
        ph = !0
      }
    }),
      window.addEventListener('test', Ho, Ho),
      window.removeEventListener('test', Ho, Ho)
  } catch {
    ph = !1
  }
function YC(e, t, n, r, i, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, u)
  } catch (c) {
    this.onError(c)
  }
}
var va = !1,
  ec = null,
  tc = !1,
  mh = null,
  QC = {
    onError: function (e) {
      ;(va = !0), (ec = e)
    }
  }
function XC(e, t, n, r, i, s, o, a, l) {
  ;(va = !1), (ec = null), YC.apply(QC, arguments)
}
function JC(e, t, n, r, i, s, o, a, l) {
  if ((XC.apply(this, arguments), va)) {
    if (va) {
      var u = ec
      ;(va = !1), (ec = null)
    } else throw Error(N(198))
    tc || ((tc = !0), (mh = u))
  }
}
function ss(e) {
  var t = e,
    n = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? n : null
}
function B1(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
      return t.dehydrated
  }
  return null
}
function gg(e) {
  if (ss(e) !== e) throw Error(N(188))
}
function e_(e) {
  var t = e.alternate
  if (!t) {
    if (((t = ss(e)), t === null)) throw Error(N(188))
    return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
    var i = n.return
    if (i === null) break
    var s = i.alternate
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r
        continue
      }
      break
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return gg(i), e
        if (s === r) return gg(i), t
        s = s.sibling
      }
      throw Error(N(188))
    }
    if (n.return !== r.return) (n = i), (r = s)
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          ;(o = !0), (n = i), (r = s)
          break
        }
        if (a === r) {
          ;(o = !0), (r = i), (n = s)
          break
        }
        a = a.sibling
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            ;(o = !0), (n = s), (r = i)
            break
          }
          if (a === r) {
            ;(o = !0), (r = s), (n = i)
            break
          }
          a = a.sibling
        }
        if (!o) throw Error(N(189))
      }
    }
    if (n.alternate !== r) throw Error(N(190))
  }
  if (n.tag !== 3) throw Error(N(188))
  return n.stateNode.current === n ? e : t
}
function z1(e) {
  return (e = e_(e)), e !== null ? U1(e) : null
}
function U1(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = U1(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var H1 = Yt.unstable_scheduleCallback,
  vg = Yt.unstable_cancelCallback,
  t_ = Yt.unstable_shouldYield,
  n_ = Yt.unstable_requestPaint,
  He = Yt.unstable_now,
  r_ = Yt.unstable_getCurrentPriorityLevel,
  em = Yt.unstable_ImmediatePriority,
  W1 = Yt.unstable_UserBlockingPriority,
  nc = Yt.unstable_NormalPriority,
  i_ = Yt.unstable_LowPriority,
  G1 = Yt.unstable_IdlePriority,
  Kc = null,
  Wn = null
function s_(e) {
  if (Wn && typeof Wn.onCommitFiberRoot == 'function')
    try {
      Wn.onCommitFiberRoot(Kc, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var kn = Math.clz32 ? Math.clz32 : l_,
  o_ = Math.log,
  a_ = Math.LN2
function l_(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((o_(e) / a_) | 0)) | 0
}
var iu = 64,
  su = 4194304
function la(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function rc(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455
  if (o !== 0) {
    var a = o & ~i
    a !== 0 ? (r = la(a)) : ((s &= o), s !== 0 && (r = la(s)))
  } else (o = n & ~i), o !== 0 ? (r = la(o)) : s !== 0 && (r = la(s))
  if (r === 0) return 0
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - kn(t)), (i = 1 << n), (r |= e[n]), (t &= ~i)
  return r
}
function u_(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function c_(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
    var o = 31 - kn(s),
      a = 1 << o,
      l = i[o]
    l === -1 ? (!(a & n) || a & r) && (i[o] = u_(a, t)) : l <= t && (e.expiredLanes |= a), (s &= ~a)
  }
}
function gh(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function q1() {
  var e = iu
  return (iu <<= 1), !(iu & 4194240) && (iu = 64), e
}
function zd(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function Rl(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - kn(t)),
    (e[t] = n)
}
function d_(e, t) {
  var n = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var r = e.eventTimes
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - kn(n),
      s = 1 << i
    ;(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s)
  }
}
function tm(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - kn(n),
      i = 1 << r
    ;(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i)
  }
}
var ke = 0
function K1(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var Z1,
  nm,
  Y1,
  Q1,
  X1,
  vh = !1,
  ou = [],
  Ur = null,
  Hr = null,
  Wr = null,
  $a = new Map(),
  Va = new Map(),
  Or = [],
  f_ =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function yg(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Ur = null
      break
    case 'dragenter':
    case 'dragleave':
      Hr = null
      break
    case 'mouseover':
    case 'mouseout':
      Wr = null
      break
    case 'pointerover':
    case 'pointerout':
      $a.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      Va.delete(t.pointerId)
  }
}
function Wo(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i]
      }),
      t !== null && ((t = Ol(t)), t !== null && nm(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e)
}
function h_(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (Ur = Wo(Ur, e, t, n, r, i)), !0
    case 'dragenter':
      return (Hr = Wo(Hr, e, t, n, r, i)), !0
    case 'mouseover':
      return (Wr = Wo(Wr, e, t, n, r, i)), !0
    case 'pointerover':
      var s = i.pointerId
      return $a.set(s, Wo($a.get(s) || null, e, t, n, r, i)), !0
    case 'gotpointercapture':
      return (s = i.pointerId), Va.set(s, Wo(Va.get(s) || null, e, t, n, r, i)), !0
  }
  return !1
}
function J1(e) {
  var t = _i(e.target)
  if (t !== null) {
    var n = ss(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = B1(n)), t !== null)) {
          ;(e.blockedOn = t),
            X1(e.priority, function () {
              Y1(n)
            })
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function Lu(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = yh(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(fh = r), n.target.dispatchEvent(r), (fh = null)
    } else return (t = Ol(n)), t !== null && nm(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function wg(e, t, n) {
  Lu(e) && n.delete(t)
}
function p_() {
  ;(vh = !1),
    Ur !== null && Lu(Ur) && (Ur = null),
    Hr !== null && Lu(Hr) && (Hr = null),
    Wr !== null && Lu(Wr) && (Wr = null),
    $a.forEach(wg),
    Va.forEach(wg)
}
function Go(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    vh || ((vh = !0), Yt.unstable_scheduleCallback(Yt.unstable_NormalPriority, p_)))
}
function Ba(e) {
  function t(i) {
    return Go(i, e)
  }
  if (0 < ou.length) {
    Go(ou[0], e)
    for (var n = 1; n < ou.length; n++) {
      var r = ou[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    Ur !== null && Go(Ur, e),
      Hr !== null && Go(Hr, e),
      Wr !== null && Go(Wr, e),
      $a.forEach(t),
      Va.forEach(t),
      n = 0;
    n < Or.length;
    n++
  )
    (r = Or[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < Or.length && ((n = Or[0]), n.blockedOn === null); )
    J1(n), n.blockedOn === null && Or.shift()
}
var Us = Sr.ReactCurrentBatchConfig,
  ic = !0
function m_(e, t, n, r) {
  var i = ke,
    s = Us.transition
  Us.transition = null
  try {
    ;(ke = 1), rm(e, t, n, r)
  } finally {
    ;(ke = i), (Us.transition = s)
  }
}
function g_(e, t, n, r) {
  var i = ke,
    s = Us.transition
  Us.transition = null
  try {
    ;(ke = 4), rm(e, t, n, r)
  } finally {
    ;(ke = i), (Us.transition = s)
  }
}
function rm(e, t, n, r) {
  if (ic) {
    var i = yh(e, t, n, r)
    if (i === null) Xd(e, t, r, sc, n), yg(e, r)
    else if (h_(i, e, t, n, r)) r.stopPropagation()
    else if ((yg(e, r), t & 4 && -1 < f_.indexOf(e))) {
      for (; i !== null; ) {
        var s = Ol(i)
        if ((s !== null && Z1(s), (s = yh(e, t, n, r)), s === null && Xd(e, t, r, sc, n), s === i)) break
        i = s
      }
      i !== null && r.stopPropagation()
    } else Xd(e, t, r, null, n)
  }
}
var sc = null
function yh(e, t, n, r) {
  if (((sc = null), (e = Jp(r)), (e = _i(e)), e !== null))
    if (((t = ss(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = B1(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (sc = e), null
}
function ew(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4
    case 'message':
      switch (r_()) {
        case em:
          return 1
        case W1:
          return 4
        case nc:
        case i_:
          return 16
        case G1:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var Vr = null,
  im = null,
  Mu = null
function tw() {
  if (Mu) return Mu
  var e,
    t = im,
    n = t.length,
    r,
    i = 'value' in Vr ? Vr.value : Vr.textContent,
    s = i.length
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (Mu = i.slice(e, 1 < r ? 1 - r : void 0))
}
function Nu(e) {
  var t = e.keyCode
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function au() {
  return !0
}
function xg() {
  return !1
}
function en(e) {
  function t(n, r, i, s, o) {
    ;(this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null)
    for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]))
    return (
      (this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1)
        ? au
        : xg),
      (this.isPropagationStopped = xg),
      this
    )
  }
  return (
    Ve(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = au))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = au))
      },
      persist: function () {},
      isPersistent: au
    }),
    t
  )
}
var Oo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  sm = en(Oo),
  Al = Ve({}, Oo, { view: 0, detail: 0 }),
  v_ = en(Al),
  Ud,
  Hd,
  qo,
  Zc = Ve({}, Al, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: om,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== qo &&
            (qo && e.type === 'mousemove'
              ? ((Ud = e.screenX - qo.screenX), (Hd = e.screenY - qo.screenY))
              : (Hd = Ud = 0),
            (qo = e)),
          Ud)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Hd
    }
  }),
  Eg = en(Zc),
  y_ = Ve({}, Zc, { dataTransfer: 0 }),
  w_ = en(y_),
  x_ = Ve({}, Al, { relatedTarget: 0 }),
  Wd = en(x_),
  E_ = Ve({}, Oo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  S_ = en(E_),
  T_ = Ve({}, Oo, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    }
  }),
  C_ = en(T_),
  __ = Ve({}, Oo, { data: 0 }),
  Sg = en(__),
  b_ = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified'
  },
  k_ = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta'
  },
  P_ = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function R_(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = P_[e]) ? !!t[e] : !1
}
function om() {
  return R_
}
var A_ = Ve({}, Al, {
    key: function (e) {
      if (e.key) {
        var t = b_[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = Nu(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? k_[e.keyCode] || 'Unidentified'
          : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: om,
    charCode: function (e) {
      return e.type === 'keypress' ? Nu(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress' ? Nu(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    }
  }),
  O_ = en(A_),
  L_ = Ve({}, Zc, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
  Tg = en(L_),
  M_ = Ve({}, Al, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: om
  }),
  N_ = en(M_),
  I_ = Ve({}, Oo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  D_ = en(I_),
  F_ = Ve({}, Zc, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  j_ = en(F_),
  $_ = [9, 13, 27, 32],
  am = gr && 'CompositionEvent' in window,
  ya = null
gr && 'documentMode' in document && (ya = document.documentMode)
var V_ = gr && 'TextEvent' in window && !ya,
  nw = gr && (!am || (ya && 8 < ya && 11 >= ya)),
  Cg = ' ',
  _g = !1
function rw(e, t) {
  switch (e) {
    case 'keyup':
      return $_.indexOf(t.keyCode) !== -1
    case 'keydown':
      return t.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function iw(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var Cs = !1
function B_(e, t) {
  switch (e) {
    case 'compositionend':
      return iw(t)
    case 'keypress':
      return t.which !== 32 ? null : ((_g = !0), Cg)
    case 'textInput':
      return (e = t.data), e === Cg && _g ? null : e
    default:
      return null
  }
}
function z_(e, t) {
  if (Cs)
    return e === 'compositionend' || (!am && rw(e, t))
      ? ((e = tw()), (Mu = im = Vr = null), (Cs = !1), e)
      : null
  switch (e) {
    case 'paste':
      return null
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case 'compositionend':
      return nw && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var U_ = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
}
function bg(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!U_[e.type] : t === 'textarea'
}
function sw(e, t, n, r) {
  D1(r),
    (t = oc(t, 'onChange')),
    0 < t.length && ((n = new sm('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }))
}
var wa = null,
  za = null
function H_(e) {
  gw(e, 0)
}
function Yc(e) {
  var t = ks(e)
  if (R1(t)) return e
}
function W_(e, t) {
  if (e === 'change') return t
}
var ow = !1
if (gr) {
  var Gd
  if (gr) {
    var qd = 'oninput' in document
    if (!qd) {
      var kg = document.createElement('div')
      kg.setAttribute('oninput', 'return;'), (qd = typeof kg.oninput == 'function')
    }
    Gd = qd
  } else Gd = !1
  ow = Gd && (!document.documentMode || 9 < document.documentMode)
}
function Pg() {
  wa && (wa.detachEvent('onpropertychange', aw), (za = wa = null))
}
function aw(e) {
  if (e.propertyName === 'value' && Yc(za)) {
    var t = []
    sw(t, za, e, Jp(e)), V1(H_, t)
  }
}
function G_(e, t, n) {
  e === 'focusin'
    ? (Pg(), (wa = t), (za = n), wa.attachEvent('onpropertychange', aw))
    : e === 'focusout' && Pg()
}
function q_(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Yc(za)
}
function K_(e, t) {
  if (e === 'click') return Yc(t)
}
function Z_(e, t) {
  if (e === 'input' || e === 'change') return Yc(t)
}
function Y_(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var An = typeof Object.is == 'function' ? Object.is : Y_
function Ua(e, t) {
  if (An(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var i = n[r]
    if (!eh.call(t, i) || !An(e[i], t[i])) return !1
  }
  return !0
}
function Rg(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function Ag(e, t) {
  var n = Rg(e)
  e = 0
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e }
      e = r
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = Rg(n)
  }
}
function lw(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? lw(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1
}
function uw() {
  for (var e = window, t = Ju(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = Ju(e.document)
  }
  return t
}
function lm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  )
}
function Q_(e) {
  var t = uw(),
    n = e.focusedElem,
    r = e.selectionRange
  if (t !== n && n && n.ownerDocument && lw(n.ownerDocument.documentElement, n)) {
    if (r !== null && lm(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
      else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection()
        var i = n.textContent.length,
          s = Math.min(r.start, i)
        ;(r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = Ag(n, s))
        var o = Ag(n, r)
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var X_ = gr && 'documentMode' in document && 11 >= document.documentMode,
  _s = null,
  wh = null,
  xa = null,
  xh = !1
function Og(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  xh ||
    _s == null ||
    _s !== Ju(r) ||
    ((r = _s),
    'selectionStart' in r && lm(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset
        })),
    (xa && Ua(xa, r)) ||
      ((xa = r),
      (r = oc(wh, 'onSelect')),
      0 < r.length &&
        ((t = new sm('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = _s))))
}
function lu(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var bs = {
    animationend: lu('Animation', 'AnimationEnd'),
    animationiteration: lu('Animation', 'AnimationIteration'),
    animationstart: lu('Animation', 'AnimationStart'),
    transitionend: lu('Transition', 'TransitionEnd')
  },
  Kd = {},
  cw = {}
gr &&
  ((cw = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete bs.animationend.animation,
    delete bs.animationiteration.animation,
    delete bs.animationstart.animation),
  'TransitionEvent' in window || delete bs.transitionend.transition)
function Qc(e) {
  if (Kd[e]) return Kd[e]
  if (!bs[e]) return e
  var t = bs[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in cw) return (Kd[e] = t[n])
  return e
}
var dw = Qc('animationend'),
  fw = Qc('animationiteration'),
  hw = Qc('animationstart'),
  pw = Qc('transitionend'),
  mw = new Map(),
  Lg =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function ci(e, t) {
  mw.set(e, t), is(t, [e])
}
for (var Zd = 0; Zd < Lg.length; Zd++) {
  var Yd = Lg[Zd],
    J_ = Yd.toLowerCase(),
    e3 = Yd[0].toUpperCase() + Yd.slice(1)
  ci(J_, 'on' + e3)
}
ci(dw, 'onAnimationEnd')
ci(fw, 'onAnimationIteration')
ci(hw, 'onAnimationStart')
ci('dblclick', 'onDoubleClick')
ci('focusin', 'onFocus')
ci('focusout', 'onBlur')
ci(pw, 'onTransitionEnd')
ho('onMouseEnter', ['mouseout', 'mouseover'])
ho('onMouseLeave', ['mouseout', 'mouseover'])
ho('onPointerEnter', ['pointerout', 'pointerover'])
ho('onPointerLeave', ['pointerout', 'pointerover'])
is('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '))
is(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')
)
is('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
is('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '))
is('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '))
is('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '))
var ua =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  t3 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(ua))
function Mg(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), JC(r, t, void 0, e), (e.currentTarget = null)
}
function gw(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event
    r = r.listeners
    e: {
      var s = void 0
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            u = a.currentTarget
          if (((a = a.listener), l !== s && i.isPropagationStopped())) break e
          Mg(i, a, u), (s = l)
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== s && i.isPropagationStopped())
          )
            break e
          Mg(i, a, u), (s = l)
        }
    }
  }
  if (tc) throw ((e = mh), (tc = !1), (mh = null), e)
}
function Le(e, t) {
  var n = t[_h]
  n === void 0 && (n = t[_h] = new Set())
  var r = e + '__bubble'
  n.has(r) || (vw(t, e, 2, !1), n.add(r))
}
function Qd(e, t, n) {
  var r = 0
  t && (r |= 4), vw(n, e, r, t)
}
var uu = '_reactListening' + Math.random().toString(36).slice(2)
function Ha(e) {
  if (!e[uu]) {
    ;(e[uu] = !0),
      C1.forEach(function (n) {
        n !== 'selectionchange' && (t3.has(n) || Qd(n, !1, e), Qd(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[uu] || ((t[uu] = !0), Qd('selectionchange', !1, t))
  }
}
function vw(e, t, n, r) {
  switch (ew(t)) {
    case 1:
      var i = m_
      break
    case 4:
      i = g_
      break
    default:
      i = rm
  }
  ;(n = i.bind(null, t, n, e)),
    (i = void 0),
    !ph || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1)
}
function Xd(e, t, n, r, i) {
  var s = r
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return
      var o = r.tag
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo), l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return
            o = o.return
          }
        for (; a !== null; ) {
          if (((o = _i(a)), o === null)) return
          if (((l = o.tag), l === 5 || l === 6)) {
            r = s = o
            continue e
          }
          a = a.parentNode
        }
      }
      r = r.return
    }
  V1(function () {
    var u = s,
      c = Jp(n),
      d = []
    e: {
      var f = mw.get(e)
      if (f !== void 0) {
        var h = sm,
          v = e
        switch (e) {
          case 'keypress':
            if (Nu(n) === 0) break e
          case 'keydown':
          case 'keyup':
            h = O_
            break
          case 'focusin':
            ;(v = 'focus'), (h = Wd)
            break
          case 'focusout':
            ;(v = 'blur'), (h = Wd)
            break
          case 'beforeblur':
          case 'afterblur':
            h = Wd
            break
          case 'click':
            if (n.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            h = Eg
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            h = w_
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            h = N_
            break
          case dw:
          case fw:
          case hw:
            h = S_
            break
          case pw:
            h = D_
            break
          case 'scroll':
            h = v_
            break
          case 'wheel':
            h = j_
            break
          case 'copy':
          case 'cut':
          case 'paste':
            h = C_
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            h = Tg
        }
        var y = (t & 4) !== 0,
          x = !y && e === 'scroll',
          p = y ? (f !== null ? f + 'Capture' : null) : f
        y = []
        for (var m = u, g; m !== null; ) {
          g = m
          var E = g.stateNode
          if (
            (g.tag === 5 &&
              E !== null &&
              ((g = E), p !== null && ((E = ja(m, p)), E != null && y.push(Wa(m, E, g)))),
            x)
          )
            break
          m = m.return
        }
        0 < y.length && ((f = new h(f, v, null, n, c)), d.push({ event: f, listeners: y }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === 'mouseover' || e === 'pointerover'),
          (h = e === 'mouseout' || e === 'pointerout'),
          f && n !== fh && (v = n.relatedTarget || n.fromElement) && (_i(v) || v[vr]))
        )
          break e
        if (
          (h || f) &&
          ((f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window),
          h
            ? ((v = n.relatedTarget || n.toElement),
              (h = u),
              (v = v ? _i(v) : null),
              v !== null && ((x = ss(v)), v !== x || (v.tag !== 5 && v.tag !== 6)) && (v = null))
            : ((h = null), (v = u)),
          h !== v)
        ) {
          if (
            ((y = Eg),
            (E = 'onMouseLeave'),
            (p = 'onMouseEnter'),
            (m = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((y = Tg), (E = 'onPointerLeave'), (p = 'onPointerEnter'), (m = 'pointer')),
            (x = h == null ? f : ks(h)),
            (g = v == null ? f : ks(v)),
            (f = new y(E, m + 'leave', h, n, c)),
            (f.target = x),
            (f.relatedTarget = g),
            (E = null),
            _i(c) === u &&
              ((y = new y(p, m + 'enter', v, n, c)), (y.target = g), (y.relatedTarget = x), (E = y)),
            (x = E),
            h && v)
          )
            t: {
              for (y = h, p = v, m = 0, g = y; g; g = ps(g)) m++
              for (g = 0, E = p; E; E = ps(E)) g++
              for (; 0 < m - g; ) (y = ps(y)), m--
              for (; 0 < g - m; ) (p = ps(p)), g--
              for (; m--; ) {
                if (y === p || (p !== null && y === p.alternate)) break t
                ;(y = ps(y)), (p = ps(p))
              }
              y = null
            }
          else y = null
          h !== null && Ng(d, f, h, y, !1), v !== null && x !== null && Ng(d, x, v, y, !0)
        }
      }
      e: {
        if (
          ((f = u ? ks(u) : window),
          (h = f.nodeName && f.nodeName.toLowerCase()),
          h === 'select' || (h === 'input' && f.type === 'file'))
        )
          var S = W_
        else if (bg(f))
          if (ow) S = Z_
          else {
            S = q_
            var C = G_
          }
        else
          (h = f.nodeName) &&
            h.toLowerCase() === 'input' &&
            (f.type === 'checkbox' || f.type === 'radio') &&
            (S = K_)
        if (S && (S = S(e, u))) {
          sw(d, S, n, c)
          break e
        }
        C && C(e, f, u),
          e === 'focusout' &&
            (C = f._wrapperState) &&
            C.controlled &&
            f.type === 'number' &&
            ah(f, 'number', f.value)
      }
      switch (((C = u ? ks(u) : window), e)) {
        case 'focusin':
          ;(bg(C) || C.contentEditable === 'true') && ((_s = C), (wh = u), (xa = null))
          break
        case 'focusout':
          xa = wh = _s = null
          break
        case 'mousedown':
          xh = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(xh = !1), Og(d, n, c)
          break
        case 'selectionchange':
          if (X_) break
        case 'keydown':
        case 'keyup':
          Og(d, n, c)
      }
      var k
      if (am)
        e: {
          switch (e) {
            case 'compositionstart':
              var T = 'onCompositionStart'
              break e
            case 'compositionend':
              T = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              T = 'onCompositionUpdate'
              break e
          }
          T = void 0
        }
      else
        Cs
          ? rw(e, n) && (T = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (T = 'onCompositionStart')
      T &&
        (nw &&
          n.locale !== 'ko' &&
          (Cs || T !== 'onCompositionStart'
            ? T === 'onCompositionEnd' && Cs && (k = tw())
            : ((Vr = c), (im = 'value' in Vr ? Vr.value : Vr.textContent), (Cs = !0))),
        (C = oc(u, T)),
        0 < C.length &&
          ((T = new Sg(T, e, null, n, c)),
          d.push({ event: T, listeners: C }),
          k ? (T.data = k) : ((k = iw(n)), k !== null && (T.data = k)))),
        (k = V_ ? B_(e, n) : z_(e, n)) &&
          ((u = oc(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new Sg('onBeforeInput', 'beforeinput', null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = k)))
    }
    gw(d, t)
  })
}
function Wa(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function oc(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      s = i.stateNode
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = ja(e, n)),
      s != null && r.unshift(Wa(e, s, i)),
      (s = ja(e, t)),
      s != null && r.push(Wa(e, s, i))),
      (e = e.return)
  }
  return r
}
function ps(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function Ng(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode
    if (l !== null && l === r) break
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = ja(n, s)), l != null && o.unshift(Wa(n, l, a)))
        : i || ((l = ja(n, s)), l != null && o.push(Wa(n, l, a)))),
      (n = n.return)
  }
  o.length !== 0 && e.push({ event: t, listeners: o })
}
var n3 = /\r\n?/g,
  r3 = /\u0000|\uFFFD/g
function Ig(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      n3,
      `
`
    )
    .replace(r3, '')
}
function cu(e, t, n) {
  if (((t = Ig(t)), Ig(e) !== t && n)) throw Error(N(425))
}
function ac() {}
var Eh = null,
  Sh = null
function Th(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var Ch = typeof setTimeout == 'function' ? setTimeout : void 0,
  i3 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Dg = typeof Promise == 'function' ? Promise : void 0,
  s3 =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Dg < 'u'
        ? function (e) {
            return Dg.resolve(null).then(e).catch(o3)
          }
        : Ch
function o3(e) {
  setTimeout(function () {
    throw e
  })
}
function Jd(e, t) {
  var n = t,
    r = 0
  do {
    var i = n.nextSibling
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(i), Ba(t)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = i
  } while (n)
  Ba(t)
}
function Gr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
      if (t === '/$') return null
    }
  }
  return e
}
function Fg(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e
        t--
      } else n === '/$' && t++
    }
    e = e.previousSibling
  }
  return null
}
var Lo = Math.random().toString(36).slice(2),
  Hn = '__reactFiber$' + Lo,
  Ga = '__reactProps$' + Lo,
  vr = '__reactContainer$' + Lo,
  _h = '__reactEvents$' + Lo,
  a3 = '__reactListeners$' + Lo,
  l3 = '__reactHandles$' + Lo
function _i(e) {
  var t = e[Hn]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[vr] || n[Hn])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = Fg(e); e !== null; ) {
          if ((n = e[Hn])) return n
          e = Fg(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function Ol(e) {
  return (
    (e = e[Hn] || e[vr]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function ks(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(N(33))
}
function Xc(e) {
  return e[Ga] || null
}
var bh = [],
  Ps = -1
function di(e) {
  return { current: e }
}
function Me(e) {
  0 > Ps || ((e.current = bh[Ps]), (bh[Ps] = null), Ps--)
}
function Ae(e, t) {
  Ps++, (bh[Ps] = e.current), (e.current = t)
}
var Jr = {},
  gt = di(Jr),
  Dt = di(!1),
  Gi = Jr
function po(e, t) {
  var n = e.type.contextTypes
  if (!n) return Jr
  var r = e.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext
  var i = {},
    s
  for (s in n) i[s] = t[s]
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  )
}
function Ft(e) {
  return (e = e.childContextTypes), e != null
}
function lc() {
  Me(Dt), Me(gt)
}
function jg(e, t, n) {
  if (gt.current !== Jr) throw Error(N(168))
  Ae(gt, t), Ae(Dt, n)
}
function yw(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n
  r = r.getChildContext()
  for (var i in r) if (!(i in t)) throw Error(N(108, GC(e) || 'Unknown', i))
  return Ve({}, n, r)
}
function uc(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Jr),
    (Gi = gt.current),
    Ae(gt, e),
    Ae(Dt, Dt.current),
    !0
  )
}
function $g(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(N(169))
  n
    ? ((e = yw(e, t, Gi)), (r.__reactInternalMemoizedMergedChildContext = e), Me(Dt), Me(gt), Ae(gt, e))
    : Me(Dt),
    Ae(Dt, n)
}
var ir = null,
  Jc = !1,
  ef = !1
function ww(e) {
  ir === null ? (ir = [e]) : ir.push(e)
}
function u3(e) {
  ;(Jc = !0), ww(e)
}
function fi() {
  if (!ef && ir !== null) {
    ef = !0
    var e = 0,
      t = ke
    try {
      var n = ir
      for (ke = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(ir = null), (Jc = !1)
    } catch (i) {
      throw (ir !== null && (ir = ir.slice(e + 1)), H1(em, fi), i)
    } finally {
      ;(ke = t), (ef = !1)
    }
  }
  return null
}
var Rs = [],
  As = 0,
  cc = null,
  dc = 0,
  ln = [],
  un = 0,
  qi = null,
  or = 1,
  ar = ''
function vi(e, t) {
  ;(Rs[As++] = dc), (Rs[As++] = cc), (cc = e), (dc = t)
}
function xw(e, t, n) {
  ;(ln[un++] = or), (ln[un++] = ar), (ln[un++] = qi), (qi = e)
  var r = or
  e = ar
  var i = 32 - kn(r) - 1
  ;(r &= ~(1 << i)), (n += 1)
  var s = 32 - kn(t) + i
  if (30 < s) {
    var o = i - (i % 5)
    ;(s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (or = (1 << (32 - kn(t) + i)) | (n << i) | r),
      (ar = s + e)
  } else (or = (1 << s) | (n << i) | r), (ar = e)
}
function um(e) {
  e.return !== null && (vi(e, 1), xw(e, 1, 0))
}
function cm(e) {
  for (; e === cc; ) (cc = Rs[--As]), (Rs[As] = null), (dc = Rs[--As]), (Rs[As] = null)
  for (; e === qi; )
    (qi = ln[--un]), (ln[un] = null), (ar = ln[--un]), (ln[un] = null), (or = ln[--un]), (ln[un] = null)
}
var Gt = null,
  Wt = null,
  Ne = !1,
  Tn = null
function Ew(e, t) {
  var n = dn(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function Vg(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (Gt = e), (Wt = Gr(t.firstChild)), !0) : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Gt = e), (Wt = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = qi !== null ? { id: or, overflow: ar } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = dn(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Gt = e),
            (Wt = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function kh(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Ph(e) {
  if (Ne) {
    var t = Wt
    if (t) {
      var n = t
      if (!Vg(e, t)) {
        if (kh(e)) throw Error(N(418))
        t = Gr(n.nextSibling)
        var r = Gt
        t && Vg(e, t) ? Ew(r, n) : ((e.flags = (e.flags & -4097) | 2), (Ne = !1), (Gt = e))
      }
    } else {
      if (kh(e)) throw Error(N(418))
      ;(e.flags = (e.flags & -4097) | 2), (Ne = !1), (Gt = e)
    }
  }
}
function Bg(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return
  Gt = e
}
function du(e) {
  if (e !== Gt) return !1
  if (!Ne) return Bg(e), (Ne = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !Th(e.type, e.memoizedProps))),
    t && (t = Wt))
  ) {
    if (kh(e)) throw (Sw(), Error(N(418)))
    for (; t; ) Ew(e, t), (t = Gr(t.nextSibling))
  }
  if ((Bg(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(N(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              Wt = Gr(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      Wt = null
    }
  } else Wt = Gt ? Gr(e.stateNode.nextSibling) : null
  return !0
}
function Sw() {
  for (var e = Wt; e; ) e = Gr(e.nextSibling)
}
function mo() {
  ;(Wt = Gt = null), (Ne = !1)
}
function dm(e) {
  Tn === null ? (Tn = [e]) : Tn.push(e)
}
var c3 = Sr.ReactCurrentBatchConfig
function Ko(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309))
        var r = n.stateNode
      }
      if (!r) throw Error(N(147, e))
      var i = r,
        s = '' + e
      return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var a = i.refs
            o === null ? delete a[s] : (a[s] = o)
          }),
          (t._stringRef = s),
          t)
    }
    if (typeof e != 'string') throw Error(N(284))
    if (!n._owner) throw Error(N(290, e))
  }
  return e
}
function fu(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(N(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
  )
}
function zg(e) {
  var t = e._init
  return t(e._payload)
}
function Tw(e) {
  function t(p, m) {
    if (e) {
      var g = p.deletions
      g === null ? ((p.deletions = [m]), (p.flags |= 16)) : g.push(m)
    }
  }
  function n(p, m) {
    if (!e) return null
    for (; m !== null; ) t(p, m), (m = m.sibling)
    return null
  }
  function r(p, m) {
    for (p = new Map(); m !== null; )
      m.key !== null ? p.set(m.key, m) : p.set(m.index, m), (m = m.sibling)
    return p
  }
  function i(p, m) {
    return (p = Yr(p, m)), (p.index = 0), (p.sibling = null), p
  }
  function s(p, m, g) {
    return (
      (p.index = g),
      e
        ? ((g = p.alternate),
          g !== null ? ((g = g.index), g < m ? ((p.flags |= 2), m) : g) : ((p.flags |= 2), m))
        : ((p.flags |= 1048576), m)
    )
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p
  }
  function a(p, m, g, E) {
    return m === null || m.tag !== 6
      ? ((m = lf(g, p.mode, E)), (m.return = p), m)
      : ((m = i(m, g)), (m.return = p), m)
  }
  function l(p, m, g, E) {
    var S = g.type
    return S === Ts
      ? c(p, m, g.props.children, E, g.key)
      : m !== null &&
          (m.elementType === S ||
            (typeof S == 'object' && S !== null && S.$$typeof === Rr && zg(S) === m.type))
        ? ((E = i(m, g.props)), (E.ref = Ko(p, m, g)), (E.return = p), E)
        : ((E = Bu(g.type, g.key, g.props, null, p.mode, E)), (E.ref = Ko(p, m, g)), (E.return = p), E)
  }
  function u(p, m, g, E) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== g.containerInfo ||
      m.stateNode.implementation !== g.implementation
      ? ((m = uf(g, p.mode, E)), (m.return = p), m)
      : ((m = i(m, g.children || [])), (m.return = p), m)
  }
  function c(p, m, g, E, S) {
    return m === null || m.tag !== 7
      ? ((m = zi(g, p.mode, E, S)), (m.return = p), m)
      : ((m = i(m, g)), (m.return = p), m)
  }
  function d(p, m, g) {
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return (m = lf('' + m, p.mode, g)), (m.return = p), m
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case tu:
          return (
            (g = Bu(m.type, m.key, m.props, null, p.mode, g)),
            (g.ref = Ko(p, null, m)),
            (g.return = p),
            g
          )
        case Ss:
          return (m = uf(m, p.mode, g)), (m.return = p), m
        case Rr:
          var E = m._init
          return d(p, E(m._payload), g)
      }
      if (aa(m) || Uo(m)) return (m = zi(m, p.mode, g, null)), (m.return = p), m
      fu(p, m)
    }
    return null
  }
  function f(p, m, g, E) {
    var S = m !== null ? m.key : null
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return S !== null ? null : a(p, m, '' + g, E)
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case tu:
          return g.key === S ? l(p, m, g, E) : null
        case Ss:
          return g.key === S ? u(p, m, g, E) : null
        case Rr:
          return (S = g._init), f(p, m, S(g._payload), E)
      }
      if (aa(g) || Uo(g)) return S !== null ? null : c(p, m, g, E, null)
      fu(p, g)
    }
    return null
  }
  function h(p, m, g, E, S) {
    if ((typeof E == 'string' && E !== '') || typeof E == 'number')
      return (p = p.get(g) || null), a(m, p, '' + E, S)
    if (typeof E == 'object' && E !== null) {
      switch (E.$$typeof) {
        case tu:
          return (p = p.get(E.key === null ? g : E.key) || null), l(m, p, E, S)
        case Ss:
          return (p = p.get(E.key === null ? g : E.key) || null), u(m, p, E, S)
        case Rr:
          var C = E._init
          return h(p, m, g, C(E._payload), S)
      }
      if (aa(E) || Uo(E)) return (p = p.get(g) || null), c(m, p, E, S, null)
      fu(m, E)
    }
    return null
  }
  function v(p, m, g, E) {
    for (var S = null, C = null, k = m, T = (m = 0), A = null; k !== null && T < g.length; T++) {
      k.index > T ? ((A = k), (k = null)) : (A = k.sibling)
      var O = f(p, k, g[T], E)
      if (O === null) {
        k === null && (k = A)
        break
      }
      e && k && O.alternate === null && t(p, k),
        (m = s(O, m, T)),
        C === null ? (S = O) : (C.sibling = O),
        (C = O),
        (k = A)
    }
    if (T === g.length) return n(p, k), Ne && vi(p, T), S
    if (k === null) {
      for (; T < g.length; T++)
        (k = d(p, g[T], E)),
          k !== null && ((m = s(k, m, T)), C === null ? (S = k) : (C.sibling = k), (C = k))
      return Ne && vi(p, T), S
    }
    for (k = r(p, k); T < g.length; T++)
      (A = h(k, p, T, g[T], E)),
        A !== null &&
          (e && A.alternate !== null && k.delete(A.key === null ? T : A.key),
          (m = s(A, m, T)),
          C === null ? (S = A) : (C.sibling = A),
          (C = A))
    return (
      e &&
        k.forEach(function (D) {
          return t(p, D)
        }),
      Ne && vi(p, T),
      S
    )
  }
  function y(p, m, g, E) {
    var S = Uo(g)
    if (typeof S != 'function') throw Error(N(150))
    if (((g = S.call(g)), g == null)) throw Error(N(151))
    for (
      var C = (S = null), k = m, T = (m = 0), A = null, O = g.next();
      k !== null && !O.done;
      T++, O = g.next()
    ) {
      k.index > T ? ((A = k), (k = null)) : (A = k.sibling)
      var D = f(p, k, O.value, E)
      if (D === null) {
        k === null && (k = A)
        break
      }
      e && k && D.alternate === null && t(p, k),
        (m = s(D, m, T)),
        C === null ? (S = D) : (C.sibling = D),
        (C = D),
        (k = A)
    }
    if (O.done) return n(p, k), Ne && vi(p, T), S
    if (k === null) {
      for (; !O.done; T++, O = g.next())
        (O = d(p, O.value, E)),
          O !== null && ((m = s(O, m, T)), C === null ? (S = O) : (C.sibling = O), (C = O))
      return Ne && vi(p, T), S
    }
    for (k = r(p, k); !O.done; T++, O = g.next())
      (O = h(k, p, T, O.value, E)),
        O !== null &&
          (e && O.alternate !== null && k.delete(O.key === null ? T : O.key),
          (m = s(O, m, T)),
          C === null ? (S = O) : (C.sibling = O),
          (C = O))
    return (
      e &&
        k.forEach(function (Z) {
          return t(p, Z)
        }),
      Ne && vi(p, T),
      S
    )
  }
  function x(p, m, g, E) {
    if (
      (typeof g == 'object' && g !== null && g.type === Ts && g.key === null && (g = g.props.children),
      typeof g == 'object' && g !== null)
    ) {
      switch (g.$$typeof) {
        case tu:
          e: {
            for (var S = g.key, C = m; C !== null; ) {
              if (C.key === S) {
                if (((S = g.type), S === Ts)) {
                  if (C.tag === 7) {
                    n(p, C.sibling), (m = i(C, g.props.children)), (m.return = p), (p = m)
                    break e
                  }
                } else if (
                  C.elementType === S ||
                  (typeof S == 'object' && S !== null && S.$$typeof === Rr && zg(S) === C.type)
                ) {
                  n(p, C.sibling), (m = i(C, g.props)), (m.ref = Ko(p, C, g)), (m.return = p), (p = m)
                  break e
                }
                n(p, C)
                break
              } else t(p, C)
              C = C.sibling
            }
            g.type === Ts
              ? ((m = zi(g.props.children, p.mode, E, g.key)), (m.return = p), (p = m))
              : ((E = Bu(g.type, g.key, g.props, null, p.mode, E)),
                (E.ref = Ko(p, m, g)),
                (E.return = p),
                (p = E))
          }
          return o(p)
        case Ss:
          e: {
            for (C = g.key; m !== null; ) {
              if (m.key === C)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === g.containerInfo &&
                  m.stateNode.implementation === g.implementation
                ) {
                  n(p, m.sibling), (m = i(m, g.children || [])), (m.return = p), (p = m)
                  break e
                } else {
                  n(p, m)
                  break
                }
              else t(p, m)
              m = m.sibling
            }
            ;(m = uf(g, p.mode, E)), (m.return = p), (p = m)
          }
          return o(p)
        case Rr:
          return (C = g._init), x(p, m, C(g._payload), E)
      }
      if (aa(g)) return v(p, m, g, E)
      if (Uo(g)) return y(p, m, g, E)
      fu(p, g)
    }
    return (typeof g == 'string' && g !== '') || typeof g == 'number'
      ? ((g = '' + g),
        m !== null && m.tag === 6
          ? (n(p, m.sibling), (m = i(m, g)), (m.return = p), (p = m))
          : (n(p, m), (m = lf(g, p.mode, E)), (m.return = p), (p = m)),
        o(p))
      : n(p, m)
  }
  return x
}
var go = Tw(!0),
  Cw = Tw(!1),
  fc = di(null),
  hc = null,
  Os = null,
  fm = null
function hm() {
  fm = Os = hc = null
}
function pm(e) {
  var t = fc.current
  Me(fc), (e._currentValue = t)
}
function Rh(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break
    e = e.return
  }
}
function Hs(e, t) {
  ;(hc = e),
    (fm = Os = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (It = !0), (e.firstContext = null))
}
function hn(e) {
  var t = e._currentValue
  if (fm !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Os === null)) {
      if (hc === null) throw Error(N(308))
      ;(Os = e), (hc.dependencies = { lanes: 0, firstContext: e })
    } else Os = Os.next = e
  return t
}
var bi = null
function mm(e) {
  bi === null ? (bi = [e]) : bi.push(e)
}
function _w(e, t, n, r) {
  var i = t.interleaved
  return (
    i === null ? ((n.next = n), mm(t)) : ((n.next = i.next), (i.next = n)), (t.interleaved = n), yr(e, r)
  )
}
function yr(e, t) {
  e.lanes |= t
  var n = e.alternate
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return)
  return n.tag === 3 ? n.stateNode : null
}
var Ar = !1
function gm(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null
  }
}
function bw(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
      })
}
function ur(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }
}
function qr(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), Se & 2)) {
    var i = r.pending
    return i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (r.pending = t), yr(e, n)
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), mm(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    yr(e, n)
  )
}
function Iu(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), tm(e, n)
  }
}
function Ug(e, t) {
  var n = e.updateQueue,
    r = e.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null
        }
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next)
      } while (n !== null)
      s === null ? (i = s = t) : (s = s.next = t)
    } else i = s = t
    ;(n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects
    }),
      (e.updateQueue = n)
    return
  }
  ;(e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t)
}
function pc(e, t, n, r) {
  var i = e.updateQueue
  Ar = !1
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending
  if (a !== null) {
    i.shared.pending = null
    var l = a,
      u = l.next
    ;(l.next = null), o === null ? (s = u) : (o.next = u), (o = l)
    var c = e.alternate
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o && (a === null ? (c.firstBaseUpdate = u) : (a.next = u), (c.lastBaseUpdate = l)))
  }
  if (s !== null) {
    var d = i.baseState
    ;(o = 0), (c = u = l = null), (a = s)
    do {
      var f = a.lane,
        h = a.eventTime
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            { eventTime: h, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null })
        e: {
          var v = e,
            y = a
          switch (((f = t), (h = n), y.tag)) {
            case 1:
              if (((v = y.payload), typeof v == 'function')) {
                d = v.call(h, d, f)
                break e
              }
              d = v
              break e
            case 3:
              v.flags = (v.flags & -65537) | 128
            case 0:
              if (((v = y.payload), (f = typeof v == 'function' ? v.call(h, d, f) : v), f == null))
                break e
              d = Ve({}, d, f)
              break e
            case 2:
              Ar = !0
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64), (f = i.effects), f === null ? (i.effects = [a]) : f.push(a))
      } else
        (h = {
          eventTime: h,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        }),
          c === null ? ((u = c = h), (l = d)) : (c = c.next = h),
          (o |= f)
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break
        ;(f = a), (a = f.next), (f.next = null), (i.lastBaseUpdate = f), (i.shared.pending = null)
      }
    } while (!0)
    if (
      (c === null && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t
      do (o |= i.lane), (i = i.next)
      while (i !== t)
    } else s === null && (i.shared.lanes = 0)
    ;(Zi |= o), (e.lanes = o), (e.memoizedState = d)
  }
}
function Hg(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function')) throw Error(N(191, i))
        i.call(r)
      }
    }
}
var Ll = {},
  Gn = di(Ll),
  qa = di(Ll),
  Ka = di(Ll)
function ki(e) {
  if (e === Ll) throw Error(N(174))
  return e
}
function vm(e, t) {
  switch ((Ae(Ka, t), Ae(qa, e), Ae(Gn, Ll), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : uh(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = uh(t, e))
  }
  Me(Gn), Ae(Gn, t)
}
function vo() {
  Me(Gn), Me(qa), Me(Ka)
}
function kw(e) {
  ki(Ka.current)
  var t = ki(Gn.current),
    n = uh(t, e.type)
  t !== n && (Ae(qa, e), Ae(Gn, n))
}
function ym(e) {
  qa.current === e && (Me(Gn), Me(qa))
}
var De = di(0)
function mc(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState
      if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')) return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var tf = []
function wm() {
  for (var e = 0; e < tf.length; e++) tf[e]._workInProgressVersionPrimary = null
  tf.length = 0
}
var Du = Sr.ReactCurrentDispatcher,
  nf = Sr.ReactCurrentBatchConfig,
  Ki = 0,
  je = null,
  Ke = null,
  Xe = null,
  gc = !1,
  Ea = !1,
  Za = 0,
  d3 = 0
function lt() {
  throw Error(N(321))
}
function xm(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++) if (!An(e[n], t[n])) return !1
  return !0
}
function Em(e, t, n, r, i, s) {
  if (
    ((Ki = s),
    (je = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Du.current = e === null || e.memoizedState === null ? m3 : g3),
    (e = n(r, i)),
    Ea)
  ) {
    s = 0
    do {
      if (((Ea = !1), (Za = 0), 25 <= s)) throw Error(N(301))
      ;(s += 1), (Xe = Ke = null), (t.updateQueue = null), (Du.current = v3), (e = n(r, i))
    } while (Ea)
  }
  if (
    ((Du.current = vc),
    (t = Ke !== null && Ke.next !== null),
    (Ki = 0),
    (Xe = Ke = je = null),
    (gc = !1),
    t)
  )
    throw Error(N(300))
  return e
}
function Sm() {
  var e = Za !== 0
  return (Za = 0), e
}
function jn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }
  return Xe === null ? (je.memoizedState = Xe = e) : (Xe = Xe.next = e), Xe
}
function pn() {
  if (Ke === null) {
    var e = je.alternate
    e = e !== null ? e.memoizedState : null
  } else e = Ke.next
  var t = Xe === null ? je.memoizedState : Xe.next
  if (t !== null) (Xe = t), (Ke = e)
  else {
    if (e === null) throw Error(N(310))
    ;(Ke = e),
      (e = {
        memoizedState: Ke.memoizedState,
        baseState: Ke.baseState,
        baseQueue: Ke.baseQueue,
        queue: Ke.queue,
        next: null
      }),
      Xe === null ? (je.memoizedState = Xe = e) : (Xe = Xe.next = e)
  }
  return Xe
}
function Ya(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function rf(e) {
  var t = pn(),
    n = t.queue
  if (n === null) throw Error(N(311))
  n.lastRenderedReducer = e
  var r = Ke,
    i = r.baseQueue,
    s = n.pending
  if (s !== null) {
    if (i !== null) {
      var o = i.next
      ;(i.next = s.next), (s.next = o)
    }
    ;(r.baseQueue = i = s), (n.pending = null)
  }
  if (i !== null) {
    ;(s = i.next), (r = r.baseState)
    var a = (o = null),
      l = null,
      u = s
    do {
      var c = u.lane
      if ((Ki & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action))
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        }
        l === null ? ((a = l = d), (o = r)) : (l = l.next = d), (je.lanes |= c), (Zi |= c)
      }
      u = u.next
    } while (u !== null && u !== s)
    l === null ? (o = r) : (l.next = a),
      An(r, t.memoizedState) || (It = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r)
  }
  if (((e = n.interleaved), e !== null)) {
    i = e
    do (s = i.lane), (je.lanes |= s), (Zi |= s), (i = i.next)
    while (i !== e)
  } else i === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function sf(e) {
  var t = pn(),
    n = t.queue
  if (n === null) throw Error(N(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState
  if (i !== null) {
    n.pending = null
    var o = (i = i.next)
    do (s = e(s, o.action)), (o = o.next)
    while (o !== i)
    An(s, t.memoizedState) || (It = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s)
  }
  return [s, r]
}
function Pw() {}
function Rw(e, t) {
  var n = je,
    r = pn(),
    i = t(),
    s = !An(r.memoizedState, i)
  if (
    (s && ((r.memoizedState = i), (It = !0)),
    (r = r.queue),
    Tm(Lw.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (Xe !== null && Xe.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), Qa(9, Ow.bind(null, n, r, i, t), void 0, null), et === null))
      throw Error(N(349))
    Ki & 30 || Aw(n, t, i)
  }
  return i
}
function Aw(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = je.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (je.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function Ow(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), Mw(t) && Nw(e)
}
function Lw(e, t, n) {
  return n(function () {
    Mw(t) && Nw(e)
  })
}
function Mw(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !An(e, n)
  } catch {
    return !0
  }
}
function Nw(e) {
  var t = yr(e, 1)
  t !== null && Pn(t, e, 1, -1)
}
function Wg(e) {
  var t = jn()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ya,
      lastRenderedState: e
    }),
    (t.queue = e),
    (e = e.dispatch = p3.bind(null, je, e)),
    [t.memoizedState, e]
  )
}
function Qa(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = je.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (je.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  )
}
function Iw() {
  return pn().memoizedState
}
function Fu(e, t, n, r) {
  var i = jn()
  ;(je.flags |= e), (i.memoizedState = Qa(1 | t, n, void 0, r === void 0 ? null : r))
}
function ed(e, t, n, r) {
  var i = pn()
  r = r === void 0 ? null : r
  var s = void 0
  if (Ke !== null) {
    var o = Ke.memoizedState
    if (((s = o.destroy), r !== null && xm(r, o.deps))) {
      i.memoizedState = Qa(t, n, s, r)
      return
    }
  }
  ;(je.flags |= e), (i.memoizedState = Qa(1 | t, n, s, r))
}
function Gg(e, t) {
  return Fu(8390656, 8, e, t)
}
function Tm(e, t) {
  return ed(2048, 8, e, t)
}
function Dw(e, t) {
  return ed(4, 2, e, t)
}
function Fw(e, t) {
  return ed(4, 4, e, t)
}
function jw(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function $w(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), ed(4, 4, jw.bind(null, t, e), n)
}
function Cm() {}
function Vw(e, t) {
  var n = pn()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && xm(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e)
}
function Bw(e, t) {
  var n = pn()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && xm(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e)
}
function zw(e, t, n) {
  return Ki & 21
    ? (An(n, t) || ((n = q1()), (je.lanes |= n), (Zi |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (It = !0)), (e.memoizedState = n))
}
function f3(e, t) {
  var n = ke
  ;(ke = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = nf.transition
  nf.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(ke = n), (nf.transition = r)
  }
}
function Uw() {
  return pn().memoizedState
}
function h3(e, t, n) {
  var r = Zr(e)
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Hw(e))) Ww(t, n)
  else if (((n = _w(e, t, n, r)), n !== null)) {
    var i = bt()
    Pn(n, e, r, i), Gw(n, t, r)
  }
}
function p3(e, t, n) {
  var r = Zr(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (Hw(e)) Ww(t, i)
  else {
    var s = e.alternate
    if (e.lanes === 0 && (s === null || s.lanes === 0) && ((s = t.lastRenderedReducer), s !== null))
      try {
        var o = t.lastRenderedState,
          a = s(o, n)
        if (((i.hasEagerState = !0), (i.eagerState = a), An(a, o))) {
          var l = t.interleaved
          l === null ? ((i.next = i), mm(t)) : ((i.next = l.next), (l.next = i)), (t.interleaved = i)
          return
        }
      } catch {
      } finally {
      }
    ;(n = _w(e, t, i, r)), n !== null && ((i = bt()), Pn(n, e, r, i), Gw(n, t, r))
  }
}
function Hw(e) {
  var t = e.alternate
  return e === je || (t !== null && t === je)
}
function Ww(e, t) {
  Ea = gc = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function Gw(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), tm(e, n)
  }
}
var vc = {
    readContext: hn,
    useCallback: lt,
    useContext: lt,
    useEffect: lt,
    useImperativeHandle: lt,
    useInsertionEffect: lt,
    useLayoutEffect: lt,
    useMemo: lt,
    useReducer: lt,
    useRef: lt,
    useState: lt,
    useDebugValue: lt,
    useDeferredValue: lt,
    useTransition: lt,
    useMutableSource: lt,
    useSyncExternalStore: lt,
    useId: lt,
    unstable_isNewReconciler: !1
  },
  m3 = {
    readContext: hn,
    useCallback: function (e, t) {
      return (jn().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: hn,
    useEffect: Gg,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), Fu(4194308, 4, jw.bind(null, t, e), n)
    },
    useLayoutEffect: function (e, t) {
      return Fu(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return Fu(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = jn()
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
    },
    useReducer: function (e, t, n) {
      var r = jn()
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t
        }),
        (r.queue = e),
        (e = e.dispatch = h3.bind(null, je, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = jn()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: Wg,
    useDebugValue: Cm,
    useDeferredValue: function (e) {
      return (jn().memoizedState = e)
    },
    useTransition: function () {
      var e = Wg(!1),
        t = e[0]
      return (e = f3.bind(null, e[1])), (jn().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = je,
        i = jn()
      if (Ne) {
        if (n === void 0) throw Error(N(407))
        n = n()
      } else {
        if (((n = t()), et === null)) throw Error(N(349))
        Ki & 30 || Aw(r, t, n)
      }
      i.memoizedState = n
      var s = { value: n, getSnapshot: t }
      return (
        (i.queue = s),
        Gg(Lw.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Qa(9, Ow.bind(null, r, s, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = jn(),
        t = et.identifierPrefix
      if (Ne) {
        var n = ar,
          r = or
        ;(n = (r & ~(1 << (32 - kn(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Za++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = d3++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1
  },
  g3 = {
    readContext: hn,
    useCallback: Vw,
    useContext: hn,
    useEffect: Tm,
    useImperativeHandle: $w,
    useInsertionEffect: Dw,
    useLayoutEffect: Fw,
    useMemo: Bw,
    useReducer: rf,
    useRef: Iw,
    useState: function () {
      return rf(Ya)
    },
    useDebugValue: Cm,
    useDeferredValue: function (e) {
      var t = pn()
      return zw(t, Ke.memoizedState, e)
    },
    useTransition: function () {
      var e = rf(Ya)[0],
        t = pn().memoizedState
      return [e, t]
    },
    useMutableSource: Pw,
    useSyncExternalStore: Rw,
    useId: Uw,
    unstable_isNewReconciler: !1
  },
  v3 = {
    readContext: hn,
    useCallback: Vw,
    useContext: hn,
    useEffect: Tm,
    useImperativeHandle: $w,
    useInsertionEffect: Dw,
    useLayoutEffect: Fw,
    useMemo: Bw,
    useReducer: sf,
    useRef: Iw,
    useState: function () {
      return sf(Ya)
    },
    useDebugValue: Cm,
    useDeferredValue: function (e) {
      var t = pn()
      return Ke === null ? (t.memoizedState = e) : zw(t, Ke.memoizedState, e)
    },
    useTransition: function () {
      var e = sf(Ya)[0],
        t = pn().memoizedState
      return [e, t]
    },
    useMutableSource: Pw,
    useSyncExternalStore: Rw,
    useId: Uw,
    unstable_isNewReconciler: !1
  }
function wn(e, t) {
  if (e && e.defaultProps) {
    ;(t = Ve({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
function Ah(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ve({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var td = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ss(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = bt(),
      i = Zr(e),
      s = ur(r, i)
    ;(s.payload = t),
      n != null && (s.callback = n),
      (t = qr(e, s, i)),
      t !== null && (Pn(t, e, i, r), Iu(t, e, i))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = bt(),
      i = Zr(e),
      s = ur(r, i)
    ;(s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = qr(e, s, i)),
      t !== null && (Pn(t, e, i, r), Iu(t, e, i))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = bt(),
      r = Zr(e),
      i = ur(n, r)
    ;(i.tag = 2),
      t != null && (i.callback = t),
      (t = qr(e, i, r)),
      t !== null && (Pn(t, e, r, n), Iu(t, e, r))
  }
}
function qg(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Ua(n, r) || !Ua(i, s)
        : !0
  )
}
function qw(e, t, n) {
  var r = !1,
    i = Jr,
    s = t.contextType
  return (
    typeof s == 'object' && s !== null
      ? (s = hn(s))
      : ((i = Ft(t) ? Gi : gt.current), (r = t.contextTypes), (s = (r = r != null) ? po(e, i) : Jr)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = td),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  )
}
function Kg(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && td.enqueueReplaceState(t, t.state, null)
}
function Oh(e, t, n, r) {
  var i = e.stateNode
  ;(i.props = n), (i.state = e.memoizedState), (i.refs = {}), gm(e)
  var s = t.contextType
  typeof s == 'object' && s !== null
    ? (i.context = hn(s))
    : ((s = Ft(t) ? Gi : gt.current), (i.context = po(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == 'function' && (Ah(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' && typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount(),
      t !== i.state && td.enqueueReplaceState(i, i.state, null),
      pc(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308)
}
function yo(e, t) {
  try {
    var n = '',
      r = t
    do (n += WC(r)), (r = r.return)
    while (r)
    var i = n
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack
  }
  return { value: e, source: t, stack: i, digest: null }
}
function of(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function Lh(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var y3 = typeof WeakMap == 'function' ? WeakMap : Map
function Kw(e, t, n) {
  ;(n = ur(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      wc || ((wc = !0), (zh = r)), Lh(e, t)
    }),
    n
  )
}
function Zw(e, t, n) {
  ;(n = ur(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var i = t.value
    ;(n.payload = function () {
      return r(i)
    }),
      (n.callback = function () {
        Lh(e, t)
      })
  }
  var s = e.stateNode
  return (
    s !== null &&
      typeof s.componentDidCatch == 'function' &&
      (n.callback = function () {
        Lh(e, t), typeof r != 'function' && (Kr === null ? (Kr = new Set([this])) : Kr.add(this))
        var o = t.stack
        this.componentDidCatch(t.value, { componentStack: o !== null ? o : '' })
      }),
    n
  )
}
function Zg(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new y3()
    var i = new Set()
    r.set(t, i)
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i))
  i.has(n) || (i.add(n), (e = L3.bind(null, e, t, n)), t.then(e, e))
}
function Yg(e) {
  do {
    var t
    if (
      ((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)
    )
      return e
    e = e.return
  } while (e !== null)
  return null
}
function Qg(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null ? (n.tag = 17) : ((t = ur(-1, 1)), (t.tag = 2), qr(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var w3 = Sr.ReactCurrentOwner,
  It = !1
function Tt(e, t, n, r) {
  t.child = e === null ? Cw(t, null, n, r) : go(t, e.child, n, r)
}
function Xg(e, t, n, r, i) {
  n = n.render
  var s = t.ref
  return (
    Hs(t, i),
    (r = Em(e, t, n, r, s, i)),
    (n = Sm()),
    e !== null && !It
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), wr(e, t, i))
      : (Ne && n && um(t), (t.flags |= 1), Tt(e, t, r, i), t.child)
  )
}
function Jg(e, t, n, r, i) {
  if (e === null) {
    var s = n.type
    return typeof s == 'function' &&
      !Lm(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Yw(e, t, s, r, i))
      : ((e = Bu(n.type, null, r, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e))
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps
    if (((n = n.compare), (n = n !== null ? n : Ua), n(o, r) && e.ref === t.ref)) return wr(e, t, i)
  }
  return (t.flags |= 1), (e = Yr(s, r)), (e.ref = t.ref), (e.return = t), (t.child = e)
}
function Yw(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps
    if (Ua(s, r) && e.ref === t.ref)
      if (((It = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0)) e.flags & 131072 && (It = !0)
      else return (t.lanes = e.lanes), wr(e, t, i)
  }
  return Mh(e, t, n, r, i)
}
function Qw(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), Ae(Ms, zt), (zt |= n)
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          Ae(Ms, zt),
          (zt |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        Ae(Ms, zt),
        (zt |= r)
    }
  else s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n), Ae(Ms, zt), (zt |= r)
  return Tt(e, t, i, n), t.child
}
function Xw(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function Mh(e, t, n, r, i) {
  var s = Ft(n) ? Gi : gt.current
  return (
    (s = po(t, s)),
    Hs(t, i),
    (n = Em(e, t, n, r, s, i)),
    (r = Sm()),
    e !== null && !It
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), wr(e, t, i))
      : (Ne && r && um(t), (t.flags |= 1), Tt(e, t, n, i), t.child)
  )
}
function ev(e, t, n, r, i) {
  if (Ft(n)) {
    var s = !0
    uc(t)
  } else s = !1
  if ((Hs(t, i), t.stateNode === null)) ju(e, t), qw(t, n, r), Oh(t, n, r, i), (r = !0)
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps
    o.props = a
    var l = o.context,
      u = n.contextType
    typeof u == 'object' && u !== null ? (u = hn(u)) : ((u = Ft(n) ? Gi : gt.current), (u = po(t, u)))
    var c = n.getDerivedStateFromProps,
      d = typeof c == 'function' || typeof o.getSnapshotBeforeUpdate == 'function'
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((a !== r || l !== u) && Kg(t, o, r, u)),
      (Ar = !1)
    var f = t.memoizedState
    ;(o.state = f),
      pc(t, r, o, i),
      (l = t.memoizedState),
      a !== r || f !== l || Dt.current || Ar
        ? (typeof c == 'function' && (Ah(t, n, c, r), (l = t.memoizedState)),
          (a = Ar || qg(t, n, a, r, f, l, u))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != 'function' &&
                  typeof o.componentWillMount != 'function') ||
                (typeof o.componentWillMount == 'function' && o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1))
  } else {
    ;(o = t.stateNode),
      bw(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : wn(t.type, a)),
      (o.props = u),
      (d = t.pendingProps),
      (f = o.context),
      (l = n.contextType),
      typeof l == 'object' && l !== null ? (l = hn(l)) : ((l = Ft(n) ? Gi : gt.current), (l = po(t, l)))
    var h = n.getDerivedStateFromProps
    ;(c = typeof h == 'function' || typeof o.getSnapshotBeforeUpdate == 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((a !== d || f !== l) && Kg(t, o, r, l)),
      (Ar = !1),
      (f = t.memoizedState),
      (o.state = f),
      pc(t, r, o, i)
    var v = t.memoizedState
    a !== d || f !== v || Dt.current || Ar
      ? (typeof h == 'function' && (Ah(t, n, h, r), (v = t.memoizedState)),
        (u = Ar || qg(t, n, u, r, f, v, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                typeof o.componentWillUpdate != 'function') ||
              (typeof o.componentWillUpdate == 'function' && o.componentWillUpdate(r, v, l),
              typeof o.UNSAFE_componentWillUpdate == 'function' &&
                o.UNSAFE_componentWillUpdate(r, v, l)),
            typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != 'function' ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != 'function' ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (o.props = r),
        (o.state = v),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != 'function' ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != 'function' ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1))
  }
  return Nh(e, t, n, r, s, i)
}
function Nh(e, t, n, r, i, s) {
  Xw(e, t)
  var o = (t.flags & 128) !== 0
  if (!r && !o) return i && $g(t, n, !1), wr(e, t, s)
  ;(r = t.stateNode), (w3.current = t)
  var a = o && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = go(t, e.child, null, s)), (t.child = go(t, null, a, s)))
      : Tt(e, t, a, s),
    (t.memoizedState = r.state),
    i && $g(t, n, !0),
    t.child
  )
}
function Jw(e) {
  var t = e.stateNode
  t.pendingContext
    ? jg(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && jg(e, t.context, !1),
    vm(e, t.containerInfo)
}
function tv(e, t, n, r, i) {
  return mo(), dm(i), (t.flags |= 256), Tt(e, t, n, r), t.child
}
var Ih = { dehydrated: null, treeContext: null, retryLane: 0 }
function Dh(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function ex(e, t, n) {
  var r = t.pendingProps,
    i = De.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    a
  if (
    ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a ? ((s = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1),
    Ae(De, i & 1),
    e === null)
  )
    return (
      Ph(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: 'hidden', children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = id(o, r, 0, null)),
              (e = zi(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Dh(n)),
              (t.memoizedState = Ih),
              e)
            : _m(t, o))
    )
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return x3(e, t, o, r, a, i, n)
  if (s) {
    ;(s = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling)
    var l = { mode: 'hidden', children: r.children }
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = l), (t.deletions = null))
        : ((r = Yr(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = Yr(a, s)) : ((s = zi(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Dh(n)
          : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ih),
      r
    )
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Yr(s, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  )
}
function _m(e, t) {
  return (t = id({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t)
}
function hu(e, t, n, r) {
  return (
    r !== null && dm(r),
    go(t, e.child, null, n),
    (e = _m(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function x3(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = of(Error(N(422)))), hu(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = r.fallback),
          (i = t.mode),
          (r = id({ mode: 'visible', children: r.children }, i, 0, null)),
          (s = zi(s, i, o, null)),
          (s.flags |= 2),
          (r.return = t),
          (s.return = t),
          (r.sibling = s),
          (t.child = r),
          t.mode & 1 && go(t, e.child, null, o),
          (t.child.memoizedState = Dh(o)),
          (t.memoizedState = Ih),
          s)
  if (!(t.mode & 1)) return hu(e, t, o, null)
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst
    return (r = a), (s = Error(N(419))), (r = of(s, r, void 0)), hu(e, t, o, r)
  }
  if (((a = (o & e.childLanes) !== 0), It || a)) {
    if (((r = et), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2
          break
        case 16:
          i = 8
          break
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32
          break
        case 536870912:
          i = 268435456
          break
        default:
          i = 0
      }
      ;(i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 && i !== s.retryLane && ((s.retryLane = i), yr(e, i), Pn(r, e, i, -1))
    }
    return Om(), (r = of(Error(N(421)))), hu(e, t, o, r)
  }
  return i.data === '$?'
    ? ((t.flags |= 128), (t.child = e.child), (t = M3.bind(null, e)), (i._reactRetry = t), null)
    : ((e = s.treeContext),
      (Wt = Gr(i.nextSibling)),
      (Gt = t),
      (Ne = !0),
      (Tn = null),
      e !== null &&
        ((ln[un++] = or), (ln[un++] = ar), (ln[un++] = qi), (or = e.id), (ar = e.overflow), (qi = t)),
      (t = _m(t, r.children)),
      (t.flags |= 4096),
      t)
}
function nv(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), Rh(e.return, t, n)
}
function af(e, t, n, r, i) {
  var s = e.memoizedState
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i))
}
function tx(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail
  if ((Tt(e, t, r.children, n), (r = De.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && nv(e, n, t)
        else if (e.tag === 19) nv(e, n, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    r &= 1
  }
  if ((Ae(De, r), !(t.mode & 1))) t.memoizedState = null
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate), e !== null && mc(e) === null && (i = n), (n = n.sibling)
        ;(n = i),
          n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
          af(t, !1, i, n, s)
        break
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && mc(e) === null)) {
            t.child = i
            break
          }
          ;(e = i.sibling), (i.sibling = n), (n = i), (i = e)
        }
        af(t, !0, n, null, s)
        break
      case 'together':
        af(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function ju(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function wr(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (Zi |= t.lanes), !(n & t.childLanes)))
    return null
  if (e !== null && t.child !== e.child) throw Error(N(153))
  if (t.child !== null) {
    for (e = t.child, n = Yr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = Yr(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function E3(e, t, n) {
  switch (t.tag) {
    case 3:
      Jw(t), mo()
      break
    case 5:
      kw(t)
      break
    case 1:
      Ft(t.type) && uc(t)
      break
    case 4:
      vm(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value
      Ae(fc, r._currentValue), (r._currentValue = i)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Ae(De, De.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? ex(e, t, n)
            : (Ae(De, De.current & 1), (e = wr(e, t, n)), e !== null ? e.sibling : null)
      Ae(De, De.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return tx(e, t, n)
        t.flags |= 128
      }
      if (
        ((i = t.memoizedState),
        i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Ae(De, De.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), Qw(e, t, n)
  }
  return wr(e, t, n)
}
var nx, Fh, rx, ix
nx = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === t) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
Fh = function () {}
rx = function (e, t, n, r) {
  var i = e.memoizedProps
  if (i !== r) {
    ;(e = t.stateNode), ki(Gn.current)
    var s = null
    switch (n) {
      case 'input':
        ;(i = sh(e, i)), (r = sh(e, r)), (s = [])
        break
      case 'select':
        ;(i = Ve({}, i, { value: void 0 })), (r = Ve({}, r, { value: void 0 })), (s = [])
        break
      case 'textarea':
        ;(i = lh(e, i)), (r = lh(e, r)), (s = [])
        break
      default:
        typeof i.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = ac)
    }
    ch(n, r)
    var o
    n = null
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === 'style') {
          var a = i[u]
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''))
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (Da.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null))
    for (u in r) {
      var l = r[u]
      if (((a = i != null ? i[u] : void 0), r.hasOwnProperty(u) && l !== a && (l != null || a != null)))
        if (u === 'style')
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) || (l && l.hasOwnProperty(o)) || (n || (n = {}), (n[o] = ''))
            for (o in l) l.hasOwnProperty(o) && a[o] !== l[o] && (n || (n = {}), (n[o] = l[o]))
          } else n || (s || (s = []), s.push(u, n)), (n = l)
        else
          u === 'dangerouslySetInnerHTML'
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(u, l))
            : u === 'children'
              ? (typeof l != 'string' && typeof l != 'number') || (s = s || []).push(u, '' + l)
              : u !== 'suppressContentEditableWarning' &&
                u !== 'suppressHydrationWarning' &&
                (Da.hasOwnProperty(u)
                  ? (l != null && u === 'onScroll' && Le('scroll', e), s || a === l || (s = []))
                  : (s = s || []).push(u, l))
    }
    n && (s = s || []).push('style', n)
    var u = s
    ;(t.updateQueue = u) && (t.flags |= 4)
  }
}
ix = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function Zo(e, t) {
  if (!Ne)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling)
        n === null ? (e.tail = null) : (n.sibling = null)
        break
      case 'collapsed':
        n = e.tail
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling)
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null)
    }
}
function ut(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling)
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling)
  return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function S3(e, t, n) {
  var r = t.pendingProps
  switch ((cm(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ut(t), null
    case 1:
      return Ft(t.type) && lc(), ut(t), null
    case 3:
      return (
        (r = t.stateNode),
        vo(),
        Me(Dt),
        Me(gt),
        wm(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (du(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Tn !== null && (Wh(Tn), (Tn = null)))),
        Fh(e, t),
        ut(t),
        null
      )
    case 5:
      ym(t)
      var i = ki(Ka.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        rx(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166))
          return ut(t), null
        }
        if (((e = ki(Gn.current)), du(t))) {
          ;(r = t.stateNode), (n = t.type)
          var s = t.memoizedProps
          switch (((r[Hn] = t), (r[Ga] = s), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              Le('cancel', r), Le('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              Le('load', r)
              break
            case 'video':
            case 'audio':
              for (i = 0; i < ua.length; i++) Le(ua[i], r)
              break
            case 'source':
              Le('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              Le('error', r), Le('load', r)
              break
            case 'details':
              Le('toggle', r)
              break
            case 'input':
              dg(r, s), Le('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!s.multiple }), Le('invalid', r)
              break
            case 'textarea':
              hg(r, s), Le('invalid', r)
          }
          ch(n, s), (i = null)
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o]
              o === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 && cu(r.textContent, a, e), (i = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (s.suppressHydrationWarning !== !0 && cu(r.textContent, a, e),
                    (i = ['children', '' + a]))
                : Da.hasOwnProperty(o) && a != null && o === 'onScroll' && Le('scroll', r)
            }
          switch (n) {
            case 'input':
              nu(r), fg(r, s, !0)
              break
            case 'textarea':
              nu(r), pg(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof s.onClick == 'function' && (r.onclick = ac)
          }
          ;(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(o = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = L1(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = o.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === 'select' &&
                      ((o = e), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Hn] = t),
            (e[Ga] = r),
            nx(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((o = dh(n, r)), n)) {
              case 'dialog':
                Le('cancel', e), Le('close', e), (i = r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                Le('load', e), (i = r)
                break
              case 'video':
              case 'audio':
                for (i = 0; i < ua.length; i++) Le(ua[i], e)
                i = r
                break
              case 'source':
                Le('error', e), (i = r)
                break
              case 'img':
              case 'image':
              case 'link':
                Le('error', e), Le('load', e), (i = r)
                break
              case 'details':
                Le('toggle', e), (i = r)
                break
              case 'input':
                dg(e, r), (i = sh(e, r)), Le('invalid', e)
                break
              case 'option':
                i = r
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Ve({}, r, { value: void 0 })),
                  Le('invalid', e)
                break
              case 'textarea':
                hg(e, r), (i = lh(e, r)), Le('invalid', e)
                break
              default:
                i = r
            }
            ch(n, i), (a = i)
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s]
                s === 'style'
                  ? I1(e, l)
                  : s === 'dangerouslySetInnerHTML'
                    ? ((l = l ? l.__html : void 0), l != null && M1(e, l))
                    : s === 'children'
                      ? typeof l == 'string'
                        ? (n !== 'textarea' || l !== '') && Fa(e, l)
                        : typeof l == 'number' && Fa(e, '' + l)
                      : s !== 'suppressContentEditableWarning' &&
                        s !== 'suppressHydrationWarning' &&
                        s !== 'autoFocus' &&
                        (Da.hasOwnProperty(s)
                          ? l != null && s === 'onScroll' && Le('scroll', e)
                          : l != null && Zp(e, s, l, o))
              }
            switch (n) {
              case 'input':
                nu(e), fg(e, r, !1)
                break
              case 'textarea':
                nu(e), pg(e)
                break
              case 'option':
                r.value != null && e.setAttribute('value', '' + Xr(r.value))
                break
              case 'select':
                ;(e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Vs(e, !!r.multiple, s, !1)
                    : r.defaultValue != null && Vs(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof i.onClick == 'function' && (e.onclick = ac)
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus
                break e
              case 'img':
                r = !0
                break e
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return ut(t), null
    case 6:
      if (e && t.stateNode != null) ix(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(N(166))
        if (((n = ki(Ka.current)), ki(Gn.current), du(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Hn] = t),
            (s = r.nodeValue !== n) && ((e = Gt), e !== null))
          )
            switch (e.tag) {
              case 3:
                cu(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && cu(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          s && (t.flags |= 4)
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Hn] = t),
            (t.stateNode = r)
      }
      return ut(t), null
    case 13:
      if (
        (Me(De),
        (r = t.memoizedState),
        e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Ne && Wt !== null && t.mode & 1 && !(t.flags & 128)) Sw(), mo(), (t.flags |= 98560), (s = !1)
        else if (((s = du(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(N(318))
            if (((s = t.memoizedState), (s = s !== null ? s.dehydrated : null), !s)) throw Error(N(317))
            s[Hn] = t
          } else mo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          ut(t), (s = !1)
        } else Tn !== null && (Wh(Tn), (Tn = null)), (s = !0)
        if (!s) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 && (e === null || De.current & 1 ? Ze === 0 && (Ze = 3) : Om())),
          t.updateQueue !== null && (t.flags |= 4),
          ut(t),
          null)
    case 4:
      return vo(), Fh(e, t), e === null && Ha(t.stateNode.containerInfo), ut(t), null
    case 10:
      return pm(t.type._context), ut(t), null
    case 17:
      return Ft(t.type) && lc(), ut(t), null
    case 19:
      if ((Me(De), (s = t.memoizedState), s === null)) return ut(t), null
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) Zo(s, !1)
        else {
          if (Ze !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = mc(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Zo(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling)
                return Ae(De, (De.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          s.tail !== null && He() > wo && ((t.flags |= 128), (r = !0), Zo(s, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = mc(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Zo(s, !0),
              s.tail === null && s.tailMode === 'hidden' && !o.alternate && !Ne)
            )
              return ut(t), null
          } else
            2 * He() - s.renderingStartTime > wo &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Zo(s, !1), (t.lanes = 4194304))
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last), n !== null ? (n.sibling = o) : (t.child = o), (s.last = o))
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = He()),
          (t.sibling = null),
          (n = De.current),
          Ae(De, r ? (n & 1) | 2 : n & 1),
          t)
        : (ut(t), null)
    case 22:
    case 23:
      return (
        Am(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1 ? zt & 1073741824 && (ut(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ut(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(N(156, t.tag))
}
function T3(e, t) {
  switch ((cm(t), t.tag)) {
    case 1:
      return Ft(t.type) && lc(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
    case 3:
      return (
        vo(),
        Me(Dt),
        Me(gt),
        wm(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return ym(t), null
    case 13:
      if ((Me(De), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(N(340))
        mo()
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
    case 19:
      return Me(De), null
    case 4:
      return vo(), null
    case 10:
      return pm(t.type._context), null
    case 22:
    case 23:
      return Am(), null
    case 24:
      return null
    default:
      return null
  }
}
var pu = !1,
  ft = !1,
  C3 = typeof WeakSet == 'function' ? WeakSet : Set,
  H = null
function Ls(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (r) {
        ze(e, t, r)
      }
    else n.current = null
}
function jh(e, t, n) {
  try {
    n()
  } catch (r) {
    ze(e, t, r)
  }
}
var rv = !1
function _3(e, t) {
  if (((Eh = ic), (e = uw()), lm(e))) {
    if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var r = n.getSelection && n.getSelection()
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode
          var i = r.anchorOffset,
            s = r.focusNode
          r = r.focusOffset
          try {
            n.nodeType, s.nodeType
          } catch {
            n = null
            break e
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null
          t: for (;;) {
            for (
              var h;
              d !== n || (i !== 0 && d.nodeType !== 3) || (a = o + i),
                d !== s || (r !== 0 && d.nodeType !== 3) || (l = o + r),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (h = d.firstChild) !== null;

            )
              (f = d), (d = h)
            for (;;) {
              if (d === e) break t
              if (
                (f === n && ++u === i && (a = o),
                f === s && ++c === r && (l = o),
                (h = d.nextSibling) !== null)
              )
                break
              ;(d = f), (f = d.parentNode)
            }
            d = h
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (Sh = { focusedElem: e, selectionRange: n }, ic = !1, H = t; H !== null; )
    if (((t = H), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (H = e)
    else
      for (; H !== null; ) {
        t = H
        try {
          var v = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (v !== null) {
                  var y = v.memoizedProps,
                    x = v.memoizedState,
                    p = t.stateNode,
                    m = p.getSnapshotBeforeUpdate(t.elementType === t.type ? y : wn(t.type, y), x)
                  p.__reactInternalSnapshotBeforeUpdate = m
                }
                break
              case 3:
                var g = t.stateNode.containerInfo
                g.nodeType === 1
                  ? (g.textContent = '')
                  : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(N(163))
            }
        } catch (E) {
          ze(t, t.return, E)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (H = e)
          break
        }
        H = t.return
      }
  return (v = rv), (rv = !1), v
}
function Sa(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next)
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy
        ;(i.destroy = void 0), s !== void 0 && jh(t, n, s)
      }
      i = i.next
    } while (i !== r)
  }
}
function nd(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next)
    do {
      if ((n.tag & e) === e) {
        var r = n.create
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}
function $h(e) {
  var t = e.ref
  if (t !== null) {
    var n = e.stateNode
    switch (e.tag) {
      case 5:
        e = n
        break
      default:
        e = n
    }
    typeof t == 'function' ? t(e) : (t.current = e)
  }
}
function sx(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), sx(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null && (delete t[Hn], delete t[Ga], delete t[_h], delete t[a3], delete t[l3])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function ox(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function iv(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || ox(e.return)) return null
      e = e.return
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function Vh(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ac))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Vh(e, t, n), e = e.sibling; e !== null; ) Vh(e, t, n), (e = e.sibling)
}
function Bh(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Bh(e, t, n), e = e.sibling; e !== null; ) Bh(e, t, n), (e = e.sibling)
}
var nt = null,
  Sn = !1
function br(e, t, n) {
  for (n = n.child; n !== null; ) ax(e, t, n), (n = n.sibling)
}
function ax(e, t, n) {
  if (Wn && typeof Wn.onCommitFiberUnmount == 'function')
    try {
      Wn.onCommitFiberUnmount(Kc, n)
    } catch {}
  switch (n.tag) {
    case 5:
      ft || Ls(n, t)
    case 6:
      var r = nt,
        i = Sn
      ;(nt = null),
        br(e, t, n),
        (nt = r),
        (Sn = i),
        nt !== null &&
          (Sn
            ? ((e = nt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : nt.removeChild(n.stateNode))
      break
    case 18:
      nt !== null &&
        (Sn
          ? ((e = nt),
            (n = n.stateNode),
            e.nodeType === 8 ? Jd(e.parentNode, n) : e.nodeType === 1 && Jd(e, n),
            Ba(e))
          : Jd(nt, n.stateNode))
      break
    case 4:
      ;(r = nt), (i = Sn), (nt = n.stateNode.containerInfo), (Sn = !0), br(e, t, n), (nt = r), (Sn = i)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ft && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        i = r = r.next
        do {
          var s = i,
            o = s.destroy
          ;(s = s.tag), o !== void 0 && (s & 2 || s & 4) && jh(n, t, o), (i = i.next)
        } while (i !== r)
      }
      br(e, t, n)
      break
    case 1:
      if (!ft && (Ls(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
        try {
          ;(r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount()
        } catch (a) {
          ze(n, t, a)
        }
      br(e, t, n)
      break
    case 21:
      br(e, t, n)
      break
    case 22:
      n.mode & 1 ? ((ft = (r = ft) || n.memoizedState !== null), br(e, t, n), (ft = r)) : br(e, t, n)
      break
    default:
      br(e, t, n)
  }
}
function sv(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new C3()),
      t.forEach(function (r) {
        var i = N3.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(i, i))
      })
  }
}
function gn(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r]
      try {
        var s = e,
          o = t,
          a = o
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ;(nt = a.stateNode), (Sn = !1)
              break e
            case 3:
              ;(nt = a.stateNode.containerInfo), (Sn = !0)
              break e
            case 4:
              ;(nt = a.stateNode.containerInfo), (Sn = !0)
              break e
          }
          a = a.return
        }
        if (nt === null) throw Error(N(160))
        ax(s, o, i), (nt = null), (Sn = !1)
        var l = i.alternate
        l !== null && (l.return = null), (i.return = null)
      } catch (u) {
        ze(i, t, u)
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) lx(t, e), (t = t.sibling)
}
function lx(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((gn(t, e), Fn(e), r & 4)) {
        try {
          Sa(3, e, e.return), nd(3, e)
        } catch (y) {
          ze(e, e.return, y)
        }
        try {
          Sa(5, e, e.return)
        } catch (y) {
          ze(e, e.return, y)
        }
      }
      break
    case 1:
      gn(t, e), Fn(e), r & 512 && n !== null && Ls(n, n.return)
      break
    case 5:
      if ((gn(t, e), Fn(e), r & 512 && n !== null && Ls(n, n.return), e.flags & 32)) {
        var i = e.stateNode
        try {
          Fa(i, '')
        } catch (y) {
          ze(e, e.return, y)
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = e.type,
          l = e.updateQueue
        if (((e.updateQueue = null), l !== null))
          try {
            a === 'input' && s.type === 'radio' && s.name != null && A1(i, s), dh(a, o)
            var u = dh(a, s)
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                d = l[o + 1]
              c === 'style'
                ? I1(i, d)
                : c === 'dangerouslySetInnerHTML'
                  ? M1(i, d)
                  : c === 'children'
                    ? Fa(i, d)
                    : Zp(i, c, d, u)
            }
            switch (a) {
              case 'input':
                oh(i, s)
                break
              case 'textarea':
                O1(i, s)
                break
              case 'select':
                var f = i._wrapperState.wasMultiple
                i._wrapperState.wasMultiple = !!s.multiple
                var h = s.value
                h != null
                  ? Vs(i, !!s.multiple, h, !1)
                  : f !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Vs(i, !!s.multiple, s.defaultValue, !0)
                      : Vs(i, !!s.multiple, s.multiple ? [] : '', !1))
            }
            i[Ga] = s
          } catch (y) {
            ze(e, e.return, y)
          }
      }
      break
    case 6:
      if ((gn(t, e), Fn(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162))
        ;(i = e.stateNode), (s = e.memoizedProps)
        try {
          i.nodeValue = s
        } catch (y) {
          ze(e, e.return, y)
        }
      }
      break
    case 3:
      if ((gn(t, e), Fn(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Ba(t.containerInfo)
        } catch (y) {
          ze(e, e.return, y)
        }
      break
    case 4:
      gn(t, e), Fn(e)
      break
    case 13:
      gn(t, e),
        Fn(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s || (i.alternate !== null && i.alternate.memoizedState !== null) || (Pm = He())),
        r & 4 && sv(e)
      break
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ft = (u = ft) || c), gn(t, e), (ft = u)) : gn(t, e),
        Fn(e),
        r & 8192)
      ) {
        if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !c && e.mode & 1))
          for (H = e, c = e.child; c !== null; ) {
            for (d = H = c; H !== null; ) {
              switch (((f = H), (h = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Sa(4, f, f.return)
                  break
                case 1:
                  Ls(f, f.return)
                  var v = f.stateNode
                  if (typeof v.componentWillUnmount == 'function') {
                    ;(r = f), (n = f.return)
                    try {
                      ;(t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount()
                    } catch (y) {
                      ze(r, n, y)
                    }
                  }
                  break
                case 5:
                  Ls(f, f.return)
                  break
                case 22:
                  if (f.memoizedState !== null) {
                    av(d)
                    continue
                  }
              }
              h !== null ? ((h.return = f), (H = h)) : av(d)
            }
            c = c.sibling
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d
              try {
                ;(i = d.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == 'function'
                        ? s.setProperty('display', 'none', 'important')
                        : (s.display = 'none'))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (o = l != null && l.hasOwnProperty('display') ? l.display : null),
                      (a.style.display = N1('display', o)))
              } catch (y) {
                ze(e, e.return, y)
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? '' : d.memoizedProps
              } catch (y) {
                ze(e, e.return, y)
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) || d.memoizedState === null || d === e) &&
            d.child !== null
          ) {
            ;(d.child.return = d), (d = d.child)
            continue
          }
          if (d === e) break e
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e
            c === d && (c = null), (d = d.return)
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling)
        }
      }
      break
    case 19:
      gn(t, e), Fn(e), r & 4 && sv(e)
      break
    case 21:
      break
    default:
      gn(t, e), Fn(e)
  }
}
function Fn(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ox(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(N(160))
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode
          r.flags & 32 && (Fa(i, ''), (r.flags &= -33))
          var s = iv(e)
          Bh(e, s, i)
          break
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = iv(e)
          Vh(e, a, o)
          break
        default:
          throw Error(N(161))
      }
    } catch (l) {
      ze(e, e.return, l)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function b3(e, t, n) {
  ;(H = e), ux(e)
}
function ux(e, t, n) {
  for (var r = (e.mode & 1) !== 0; H !== null; ) {
    var i = H,
      s = i.child
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || pu
      if (!o) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || ft
        a = pu
        var u = ft
        if (((pu = o), (ft = l) && !u))
          for (H = i; H !== null; )
            (o = H),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? lv(i)
                : l !== null
                  ? ((l.return = o), (H = l))
                  : lv(i)
        for (; s !== null; ) (H = s), ux(s), (s = s.sibling)
        ;(H = i), (pu = a), (ft = u)
      }
      ov(e)
    } else i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (H = s)) : ov(e)
  }
}
function ov(e) {
  for (; H !== null; ) {
    var t = H
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ft || nd(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !ft)
                if (n === null) r.componentDidMount()
                else {
                  var i = t.elementType === t.type ? n.memoizedProps : wn(t.type, n.memoizedProps)
                  r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                }
              var s = t.updateQueue
              s !== null && Hg(t, s, r)
              break
            case 3:
              var o = t.updateQueue
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                Hg(t, o, n)
              }
              break
            case 5:
              var a = t.stateNode
              if (n === null && t.flags & 4) {
                n = a
                var l = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    l.autoFocus && n.focus()
                    break
                  case 'img':
                    l.src && (n.src = l.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate
                if (u !== null) {
                  var c = u.memoizedState
                  if (c !== null) {
                    var d = c.dehydrated
                    d !== null && Ba(d)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(N(163))
          }
        ft || (t.flags & 512 && $h(t))
      } catch (f) {
        ze(t, t.return, f)
      }
    }
    if (t === e) {
      H = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (H = n)
      break
    }
    H = t.return
  }
}
function av(e) {
  for (; H !== null; ) {
    var t = H
    if (t === e) {
      H = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (H = n)
      break
    }
    H = t.return
  }
}
function lv(e) {
  for (; H !== null; ) {
    var t = H
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            nd(4, t)
          } catch (l) {
            ze(t, n, l)
          }
          break
        case 1:
          var r = t.stateNode
          if (typeof r.componentDidMount == 'function') {
            var i = t.return
            try {
              r.componentDidMount()
            } catch (l) {
              ze(t, i, l)
            }
          }
          var s = t.return
          try {
            $h(t)
          } catch (l) {
            ze(t, s, l)
          }
          break
        case 5:
          var o = t.return
          try {
            $h(t)
          } catch (l) {
            ze(t, o, l)
          }
      }
    } catch (l) {
      ze(t, t.return, l)
    }
    if (t === e) {
      H = null
      break
    }
    var a = t.sibling
    if (a !== null) {
      ;(a.return = t.return), (H = a)
      break
    }
    H = t.return
  }
}
var k3 = Math.ceil,
  yc = Sr.ReactCurrentDispatcher,
  bm = Sr.ReactCurrentOwner,
  fn = Sr.ReactCurrentBatchConfig,
  Se = 0,
  et = null,
  qe = null,
  st = 0,
  zt = 0,
  Ms = di(0),
  Ze = 0,
  Xa = null,
  Zi = 0,
  rd = 0,
  km = 0,
  Ta = null,
  Nt = null,
  Pm = 0,
  wo = 1 / 0,
  rr = null,
  wc = !1,
  zh = null,
  Kr = null,
  mu = !1,
  Br = null,
  xc = 0,
  Ca = 0,
  Uh = null,
  $u = -1,
  Vu = 0
function bt() {
  return Se & 6 ? He() : $u !== -1 ? $u : ($u = He())
}
function Zr(e) {
  return e.mode & 1
    ? Se & 2 && st !== 0
      ? st & -st
      : c3.transition !== null
        ? (Vu === 0 && (Vu = q1()), Vu)
        : ((e = ke), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ew(e.type))), e)
    : 1
}
function Pn(e, t, n, r) {
  if (50 < Ca) throw ((Ca = 0), (Uh = null), Error(N(185)))
  Rl(e, n, r),
    (!(Se & 2) || e !== et) &&
      (e === et && (!(Se & 2) && (rd |= n), Ze === 4 && Lr(e, st)),
      jt(e, r),
      n === 1 && Se === 0 && !(t.mode & 1) && ((wo = He() + 500), Jc && fi()))
}
function jt(e, t) {
  var n = e.callbackNode
  c_(e, t)
  var r = rc(e, e === et ? st : 0)
  if (r === 0) n !== null && vg(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && vg(n), t === 1))
      e.tag === 0 ? u3(uv.bind(null, e)) : ww(uv.bind(null, e)),
        s3(function () {
          !(Se & 6) && fi()
        }),
        (n = null)
    else {
      switch (K1(r)) {
        case 1:
          n = em
          break
        case 4:
          n = W1
          break
        case 16:
          n = nc
          break
        case 536870912:
          n = G1
          break
        default:
          n = nc
      }
      n = vx(n, cx.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function cx(e, t) {
  if ((($u = -1), (Vu = 0), Se & 6)) throw Error(N(327))
  var n = e.callbackNode
  if (Ws() && e.callbackNode !== n) return null
  var r = rc(e, e === et ? st : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = Ec(e, r)
  else {
    t = r
    var i = Se
    Se |= 2
    var s = fx()
    ;(et !== e || st !== t) && ((rr = null), (wo = He() + 500), Bi(e, t))
    do
      try {
        A3()
        break
      } catch (a) {
        dx(e, a)
      }
    while (!0)
    hm(), (yc.current = s), (Se = i), qe !== null ? (t = 0) : ((et = null), (st = 0), (t = Ze))
  }
  if (t !== 0) {
    if ((t === 2 && ((i = gh(e)), i !== 0 && ((r = i), (t = Hh(e, i)))), t === 1))
      throw ((n = Xa), Bi(e, 0), Lr(e, r), jt(e, He()), n)
    if (t === 6) Lr(e, r)
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !P3(i) &&
          ((t = Ec(e, r)), t === 2 && ((s = gh(e)), s !== 0 && ((r = s), (t = Hh(e, s)))), t === 1))
      )
        throw ((n = Xa), Bi(e, 0), Lr(e, r), jt(e, He()), n)
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345))
        case 2:
          yi(e, Nt, rr)
          break
        case 3:
          if ((Lr(e, r), (r & 130023424) === r && ((t = Pm + 500 - He()), 10 < t))) {
            if (rc(e, 0) !== 0) break
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              bt(), (e.pingedLanes |= e.suspendedLanes & i)
              break
            }
            e.timeoutHandle = Ch(yi.bind(null, e, Nt, rr), t)
            break
          }
          yi(e, Nt, rr)
          break
        case 4:
          if ((Lr(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - kn(r)
            ;(s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s)
          }
          if (
            ((r = i),
            (r = He() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * k3(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ch(yi.bind(null, e, Nt, rr), r)
            break
          }
          yi(e, Nt, rr)
          break
        case 5:
          yi(e, Nt, rr)
          break
        default:
          throw Error(N(329))
      }
    }
  }
  return jt(e, He()), e.callbackNode === n ? cx.bind(null, e) : null
}
function Hh(e, t) {
  var n = Ta
  return (
    e.current.memoizedState.isDehydrated && (Bi(e, t).flags |= 256),
    (e = Ec(e, t)),
    e !== 2 && ((t = Nt), (Nt = n), t !== null && Wh(t)),
    e
  )
}
function Wh(e) {
  Nt === null ? (Nt = e) : Nt.push.apply(Nt, e)
}
function P3(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot
          i = i.value
          try {
            if (!An(s(), i)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function Lr(e, t) {
  for (t &= ~km, t &= ~rd, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - kn(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function uv(e) {
  if (Se & 6) throw Error(N(327))
  Ws()
  var t = rc(e, 0)
  if (!(t & 1)) return jt(e, He()), null
  var n = Ec(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = gh(e)
    r !== 0 && ((t = r), (n = Hh(e, r)))
  }
  if (n === 1) throw ((n = Xa), Bi(e, 0), Lr(e, t), jt(e, He()), n)
  if (n === 6) throw Error(N(345))
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), yi(e, Nt, rr), jt(e, He()), null
}
function Rm(e, t) {
  var n = Se
  Se |= 1
  try {
    return e(t)
  } finally {
    ;(Se = n), Se === 0 && ((wo = He() + 500), Jc && fi())
  }
}
function Yi(e) {
  Br !== null && Br.tag === 0 && !(Se & 6) && Ws()
  var t = Se
  Se |= 1
  var n = fn.transition,
    r = ke
  try {
    if (((fn.transition = null), (ke = 1), e)) return e()
  } finally {
    ;(ke = r), (fn.transition = n), (Se = t), !(Se & 6) && fi()
  }
}
function Am() {
  ;(zt = Ms.current), Me(Ms)
}
function Bi(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), i3(n)), qe !== null))
    for (n = qe.return; n !== null; ) {
      var r = n
      switch ((cm(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && lc()
          break
        case 3:
          vo(), Me(Dt), Me(gt), wm()
          break
        case 5:
          ym(r)
          break
        case 4:
          vo()
          break
        case 13:
          Me(De)
          break
        case 19:
          Me(De)
          break
        case 10:
          pm(r.type._context)
          break
        case 22:
        case 23:
          Am()
      }
      n = n.return
    }
  if (
    ((et = e),
    (qe = e = Yr(e.current, null)),
    (st = zt = t),
    (Ze = 0),
    (Xa = null),
    (km = rd = Zi = 0),
    (Nt = Ta = null),
    bi !== null)
  ) {
    for (t = 0; t < bi.length; t++)
      if (((n = bi[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var i = r.next,
          s = n.pending
        if (s !== null) {
          var o = s.next
          ;(s.next = i), (r.next = o)
        }
        n.pending = r
      }
    bi = null
  }
  return e
}
function dx(e, t) {
  do {
    var n = qe
    try {
      if ((hm(), (Du.current = vc), gc)) {
        for (var r = je.memoizedState; r !== null; ) {
          var i = r.queue
          i !== null && (i.pending = null), (r = r.next)
        }
        gc = !1
      }
      if (
        ((Ki = 0),
        (Xe = Ke = je = null),
        (Ea = !1),
        (Za = 0),
        (bm.current = null),
        n === null || n.return === null)
      ) {
        ;(Ze = 1), (Xa = t), (qe = null)
        break
      }
      e: {
        var s = e,
          o = n.return,
          a = n,
          l = t
        if (
          ((t = st),
          (a.flags |= 32768),
          l !== null && typeof l == 'object' && typeof l.then == 'function')
        ) {
          var u = l,
            c = a,
            d = c.tag
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null))
          }
          var h = Yg(o)
          if (h !== null) {
            ;(h.flags &= -257), Qg(h, o, a, s, t), h.mode & 1 && Zg(s, u, t), (t = h), (l = u)
            var v = t.updateQueue
            if (v === null) {
              var y = new Set()
              y.add(l), (t.updateQueue = y)
            } else v.add(l)
            break e
          } else {
            if (!(t & 1)) {
              Zg(s, u, t), Om()
              break e
            }
            l = Error(N(426))
          }
        } else if (Ne && a.mode & 1) {
          var x = Yg(o)
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256), Qg(x, o, a, s, t), dm(yo(l, a))
            break e
          }
        }
        ;(s = l = yo(l, a)), Ze !== 4 && (Ze = 2), Ta === null ? (Ta = [s]) : Ta.push(s), (s = o)
        do {
          switch (s.tag) {
            case 3:
              ;(s.flags |= 65536), (t &= -t), (s.lanes |= t)
              var p = Kw(s, l, t)
              Ug(s, p)
              break e
            case 1:
              a = l
              var m = s.type,
                g = s.stateNode
              if (
                !(s.flags & 128) &&
                (typeof m.getDerivedStateFromError == 'function' ||
                  (g !== null &&
                    typeof g.componentDidCatch == 'function' &&
                    (Kr === null || !Kr.has(g))))
              ) {
                ;(s.flags |= 65536), (t &= -t), (s.lanes |= t)
                var E = Zw(s, a, t)
                Ug(s, E)
                break e
              }
          }
          s = s.return
        } while (s !== null)
      }
      px(n)
    } catch (S) {
      ;(t = S), qe === n && n !== null && (qe = n = n.return)
      continue
    }
    break
  } while (!0)
}
function fx() {
  var e = yc.current
  return (yc.current = vc), e === null ? vc : e
}
function Om() {
  ;(Ze === 0 || Ze === 3 || Ze === 2) && (Ze = 4),
    et === null || (!(Zi & 268435455) && !(rd & 268435455)) || Lr(et, st)
}
function Ec(e, t) {
  var n = Se
  Se |= 2
  var r = fx()
  ;(et !== e || st !== t) && ((rr = null), Bi(e, t))
  do
    try {
      R3()
      break
    } catch (i) {
      dx(e, i)
    }
  while (!0)
  if ((hm(), (Se = n), (yc.current = r), qe !== null)) throw Error(N(261))
  return (et = null), (st = 0), Ze
}
function R3() {
  for (; qe !== null; ) hx(qe)
}
function A3() {
  for (; qe !== null && !t_(); ) hx(qe)
}
function hx(e) {
  var t = gx(e.alternate, e, zt)
  ;(e.memoizedProps = e.pendingProps), t === null ? px(e) : (qe = t), (bm.current = null)
}
function px(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = T3(n, t)), n !== null)) {
        ;(n.flags &= 32767), (qe = n)
        return
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(Ze = 6), (qe = null)
        return
      }
    } else if (((n = S3(n, t, zt)), n !== null)) {
      qe = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      qe = t
      return
    }
    qe = t = e
  } while (t !== null)
  Ze === 0 && (Ze = 5)
}
function yi(e, t, n) {
  var r = ke,
    i = fn.transition
  try {
    ;(fn.transition = null), (ke = 1), O3(e, t, n, r)
  } finally {
    ;(fn.transition = i), (ke = r)
  }
  return null
}
function O3(e, t, n, r) {
  do Ws()
  while (Br !== null)
  if (Se & 6) throw Error(N(327))
  n = e.finishedWork
  var i = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(N(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var s = n.lanes | n.childLanes
  if (
    (d_(e, s),
    e === et && ((qe = et = null), (st = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      mu ||
      ((mu = !0),
      vx(nc, function () {
        return Ws(), null
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    ;(s = fn.transition), (fn.transition = null)
    var o = ke
    ke = 1
    var a = Se
    ;(Se |= 4),
      (bm.current = null),
      _3(e, n),
      lx(n, e),
      Q_(Sh),
      (ic = !!Eh),
      (Sh = Eh = null),
      (e.current = n),
      b3(n),
      n_(),
      (Se = a),
      (ke = o),
      (fn.transition = s)
  } else e.current = n
  if (
    (mu && ((mu = !1), (Br = e), (xc = i)),
    (s = e.pendingLanes),
    s === 0 && (Kr = null),
    s_(n.stateNode),
    jt(e, He()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest })
  if (wc) throw ((wc = !1), (e = zh), (zh = null), e)
  return (
    xc & 1 && e.tag !== 0 && Ws(),
    (s = e.pendingLanes),
    s & 1 ? (e === Uh ? Ca++ : ((Ca = 0), (Uh = e))) : (Ca = 0),
    fi(),
    null
  )
}
function Ws() {
  if (Br !== null) {
    var e = K1(xc),
      t = fn.transition,
      n = ke
    try {
      if (((fn.transition = null), (ke = 16 > e ? 16 : e), Br === null)) var r = !1
      else {
        if (((e = Br), (Br = null), (xc = 0), Se & 6)) throw Error(N(331))
        var i = Se
        for (Se |= 4, H = e.current; H !== null; ) {
          var s = H,
            o = s.child
          if (H.flags & 16) {
            var a = s.deletions
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l]
                for (H = u; H !== null; ) {
                  var c = H
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Sa(8, c, s)
                  }
                  var d = c.child
                  if (d !== null) (d.return = c), (H = d)
                  else
                    for (; H !== null; ) {
                      c = H
                      var f = c.sibling,
                        h = c.return
                      if ((sx(c), c === u)) {
                        H = null
                        break
                      }
                      if (f !== null) {
                        ;(f.return = h), (H = f)
                        break
                      }
                      H = h
                    }
                }
              }
              var v = s.alternate
              if (v !== null) {
                var y = v.child
                if (y !== null) {
                  v.child = null
                  do {
                    var x = y.sibling
                    ;(y.sibling = null), (y = x)
                  } while (y !== null)
                }
              }
              H = s
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (H = o)
          else
            e: for (; H !== null; ) {
              if (((s = H), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Sa(9, s, s.return)
                }
              var p = s.sibling
              if (p !== null) {
                ;(p.return = s.return), (H = p)
                break e
              }
              H = s.return
            }
        }
        var m = e.current
        for (H = m; H !== null; ) {
          o = H
          var g = o.child
          if (o.subtreeFlags & 2064 && g !== null) (g.return = o), (H = g)
          else
            e: for (o = m; H !== null; ) {
              if (((a = H), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      nd(9, a)
                  }
                } catch (S) {
                  ze(a, a.return, S)
                }
              if (a === o) {
                H = null
                break e
              }
              var E = a.sibling
              if (E !== null) {
                ;(E.return = a.return), (H = E)
                break e
              }
              H = a.return
            }
        }
        if (((Se = i), fi(), Wn && typeof Wn.onPostCommitFiberRoot == 'function'))
          try {
            Wn.onPostCommitFiberRoot(Kc, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(ke = n), (fn.transition = t)
    }
  }
  return !1
}
function cv(e, t, n) {
  ;(t = yo(n, t)),
    (t = Kw(e, t, 1)),
    (e = qr(e, t, 1)),
    (t = bt()),
    e !== null && (Rl(e, 1, t), jt(e, t))
}
function ze(e, t, n) {
  if (e.tag === 3) cv(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        cv(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (Kr === null || !Kr.has(r)))
        ) {
          ;(e = yo(n, e)),
            (e = Zw(t, e, 1)),
            (t = qr(t, e, 1)),
            (e = bt()),
            t !== null && (Rl(t, 1, e), jt(t, e))
          break
        }
      }
      t = t.return
    }
}
function L3(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = bt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    et === e &&
      (st & n) === n &&
      (Ze === 4 || (Ze === 3 && (st & 130023424) === st && 500 > He() - Pm) ? Bi(e, 0) : (km |= n)),
    jt(e, t)
}
function mx(e, t) {
  t === 0 && (e.mode & 1 ? ((t = su), (su <<= 1), !(su & 130023424) && (su = 4194304)) : (t = 1))
  var n = bt()
  ;(e = yr(e, t)), e !== null && (Rl(e, t, n), jt(e, n))
}
function M3(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), mx(e, n)
}
function N3(e, t) {
  var n = 0
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState
      i !== null && (n = i.retryLane)
      break
    case 19:
      r = e.stateNode
      break
    default:
      throw Error(N(314))
  }
  r !== null && r.delete(t), mx(e, n)
}
var gx
gx = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Dt.current) It = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (It = !1), E3(e, t, n)
      It = !!(e.flags & 131072)
    }
  else (It = !1), Ne && t.flags & 1048576 && xw(t, dc, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      ju(e, t), (e = t.pendingProps)
      var i = po(t, gt.current)
      Hs(t, n), (i = Em(null, t, r, e, i, n))
      var s = Sm()
      return (
        (t.flags |= 1),
        typeof i == 'object' && i !== null && typeof i.render == 'function' && i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ft(r) ? ((s = !0), uc(t)) : (s = !1),
            (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
            gm(t),
            (i.updater = td),
            (t.stateNode = i),
            (i._reactInternals = t),
            Oh(t, r, e, n),
            (t = Nh(null, t, r, !0, s, n)))
          : ((t.tag = 0), Ne && s && um(t), Tt(null, t, i, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (ju(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = D3(r)),
          (e = wn(r, e)),
          i)
        ) {
          case 0:
            t = Mh(null, t, r, e, n)
            break e
          case 1:
            t = ev(null, t, r, e, n)
            break e
          case 11:
            t = Xg(null, t, r, e, n)
            break e
          case 14:
            t = Jg(null, t, r, wn(r.type, e), n)
            break e
        }
        throw Error(N(306, r, ''))
      }
      return t
    case 0:
      return (
        (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : wn(r, i)), Mh(e, t, r, i, n)
      )
    case 1:
      return (
        (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : wn(r, i)), ev(e, t, r, i, n)
      )
    case 3:
      e: {
        if ((Jw(t), e === null)) throw Error(N(387))
        ;(r = t.pendingProps), (s = t.memoizedState), (i = s.element), bw(e, t), pc(t, r, null, n)
        var o = t.memoizedState
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            ;(i = yo(Error(N(423)), t)), (t = tv(e, t, r, n, i))
            break e
          } else if (r !== i) {
            ;(i = yo(Error(N(424)), t)), (t = tv(e, t, r, n, i))
            break e
          } else
            for (
              Wt = Gr(t.stateNode.containerInfo.firstChild),
                Gt = t,
                Ne = !0,
                Tn = null,
                n = Cw(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((mo(), r === i)) {
            t = wr(e, t, n)
            break e
          }
          Tt(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        kw(t),
        e === null && Ph(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        Th(r, i) ? (o = null) : s !== null && Th(r, s) && (t.flags |= 32),
        Xw(e, t),
        Tt(e, t, o, n),
        t.child
      )
    case 6:
      return e === null && Ph(t), null
    case 13:
      return ex(e, t, n)
    case 4:
      return (
        vm(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = go(t, null, r, n)) : Tt(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : wn(r, i)), Xg(e, t, r, i, n)
      )
    case 7:
      return Tt(e, t, t.pendingProps, n), t.child
    case 8:
      return Tt(e, t, t.pendingProps.children, n), t.child
    case 12:
      return Tt(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          Ae(fc, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (An(s.value, o)) {
            if (s.children === i.children && !Dt.current) {
              t = wr(e, t, n)
              break e
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies
              if (a !== null) {
                o = s.child
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      ;(l = ur(-1, n & -n)), (l.tag = 2)
                      var u = s.updateQueue
                      if (u !== null) {
                        u = u.shared
                        var c = u.pending
                        c === null ? (l.next = l) : ((l.next = c.next), (c.next = l)), (u.pending = l)
                      }
                    }
                    ;(s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      Rh(s.return, n, t),
                      (a.lanes |= n)
                    break
                  }
                  l = l.next
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(N(341))
                ;(o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Rh(o, n, t),
                  (o = s.sibling)
              } else o = s.child
              if (o !== null) o.return = s
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null
                    break
                  }
                  if (((s = o.sibling), s !== null)) {
                    ;(s.return = o.return), (o = s)
                    break
                  }
                  o = o.return
                }
              s = o
            }
        Tt(e, t, i.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Hs(t, n),
        (i = hn(i)),
        (r = r(i)),
        (t.flags |= 1),
        Tt(e, t, r, n),
        t.child
      )
    case 14:
      return (r = t.type), (i = wn(r, t.pendingProps)), (i = wn(r.type, i)), Jg(e, t, r, i, n)
    case 15:
      return Yw(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : wn(r, i)),
        ju(e, t),
        (t.tag = 1),
        Ft(r) ? ((e = !0), uc(t)) : (e = !1),
        Hs(t, n),
        qw(t, r, i),
        Oh(t, r, i, n),
        Nh(null, t, r, !0, e, n)
      )
    case 19:
      return tx(e, t, n)
    case 22:
      return Qw(e, t, n)
  }
  throw Error(N(156, t.tag))
}
function vx(e, t) {
  return H1(e, t)
}
function I3(e, t, n, r) {
  ;(this.tag = e),
    (this.key = n),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function dn(e, t, n, r) {
  return new I3(e, t, n, r)
}
function Lm(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function D3(e) {
  if (typeof e == 'function') return Lm(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === Qp)) return 11
    if (e === Xp) return 14
  }
  return 2
}
function Yr(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = dn(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  )
}
function Bu(e, t, n, r, i, s) {
  var o = 2
  if (((r = e), typeof e == 'function')) Lm(e) && (o = 1)
  else if (typeof e == 'string') o = 5
  else
    e: switch (e) {
      case Ts:
        return zi(n.children, i, s, t)
      case Yp:
        ;(o = 8), (i |= 8)
        break
      case th:
        return (e = dn(12, n, t, i | 2)), (e.elementType = th), (e.lanes = s), e
      case nh:
        return (e = dn(13, n, t, i)), (e.elementType = nh), (e.lanes = s), e
      case rh:
        return (e = dn(19, n, t, i)), (e.elementType = rh), (e.lanes = s), e
      case k1:
        return id(n, i, s, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case _1:
              o = 10
              break e
            case b1:
              o = 9
              break e
            case Qp:
              o = 11
              break e
            case Xp:
              o = 14
              break e
            case Rr:
              ;(o = 16), (r = null)
              break e
          }
        throw Error(N(130, e == null ? e : typeof e, ''))
    }
  return (t = dn(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
}
function zi(e, t, n, r) {
  return (e = dn(7, e, r, t)), (e.lanes = n), e
}
function id(e, t, n, r) {
  return (e = dn(22, e, r, t)), (e.elementType = k1), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e
}
function lf(e, t, n) {
  return (e = dn(6, e, null, t)), (e.lanes = n), e
}
function uf(e, t, n) {
  return (
    (t = dn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }),
    t
  )
}
function F3(e, t, n, r, i) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = zd(0)),
    (this.expirationTimes = zd(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = zd(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null)
}
function Mm(e, t, n, r, i, s, o, a, l) {
  return (
    (e = new F3(e, t, n, a, l)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = dn(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }),
    gm(s),
    e
  )
}
function j3(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: Ss,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n
  }
}
function yx(e) {
  if (!e) return Jr
  e = e._reactInternals
  e: {
    if (ss(e) !== e || e.tag !== 1) throw Error(N(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (Ft(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(N(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (Ft(n)) return yw(e, n, t)
  }
  return t
}
function wx(e, t, n, r, i, s, o, a, l) {
  return (
    (e = Mm(n, r, !0, e, i, s, o, a, l)),
    (e.context = yx(null)),
    (n = e.current),
    (r = bt()),
    (i = Zr(n)),
    (s = ur(r, i)),
    (s.callback = t ?? null),
    qr(n, s, i),
    (e.current.lanes = i),
    Rl(e, i, r),
    jt(e, r),
    e
  )
}
function sd(e, t, n, r) {
  var i = t.current,
    s = bt(),
    o = Zr(i)
  return (
    (n = yx(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ur(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = qr(i, t, o)),
    e !== null && (Pn(e, i, o, s), Iu(e, i, o)),
    o
  )
}
function Sc(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function dv(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function Nm(e, t) {
  dv(e, t), (e = e.alternate) && dv(e, t)
}
function $3() {
  return null
}
var xx =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function Im(e) {
  this._internalRoot = e
}
od.prototype.render = Im.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(N(409))
  sd(e, t, null, null)
}
od.prototype.unmount = Im.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    Yi(function () {
      sd(null, e, null, null)
    }),
      (t[vr] = null)
  }
}
function od(e) {
  this._internalRoot = e
}
od.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Q1()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < Or.length && t !== 0 && t < Or[n].priority; n++);
    Or.splice(n, 0, e), n === 0 && J1(e)
  }
}
function Dm(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function ad(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function fv() {}
function V3(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var s = r
      r = function () {
        var u = Sc(o)
        s.call(u)
      }
    }
    var o = wx(t, r, e, 0, null, !1, !1, '', fv)
    return (
      (e._reactRootContainer = o), (e[vr] = o.current), Ha(e.nodeType === 8 ? e.parentNode : e), Yi(), o
    )
  }
  for (; (i = e.lastChild); ) e.removeChild(i)
  if (typeof r == 'function') {
    var a = r
    r = function () {
      var u = Sc(l)
      a.call(u)
    }
  }
  var l = Mm(e, 0, !1, null, null, !1, !1, '', fv)
  return (
    (e._reactRootContainer = l),
    (e[vr] = l.current),
    Ha(e.nodeType === 8 ? e.parentNode : e),
    Yi(function () {
      sd(t, l, n, r)
    }),
    l
  )
}
function ld(e, t, n, r, i) {
  var s = n._reactRootContainer
  if (s) {
    var o = s
    if (typeof i == 'function') {
      var a = i
      i = function () {
        var l = Sc(o)
        a.call(l)
      }
    }
    sd(t, o, e, i)
  } else o = V3(n, t, e, i, r)
  return Sc(o)
}
Z1 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = la(t.pendingLanes)
        n !== 0 && (tm(t, n | 1), jt(t, He()), !(Se & 6) && ((wo = He() + 500), fi()))
      }
      break
    case 13:
      Yi(function () {
        var r = yr(e, 1)
        if (r !== null) {
          var i = bt()
          Pn(r, e, 1, i)
        }
      }),
        Nm(e, 1)
  }
}
nm = function (e) {
  if (e.tag === 13) {
    var t = yr(e, 134217728)
    if (t !== null) {
      var n = bt()
      Pn(t, e, 134217728, n)
    }
    Nm(e, 134217728)
  }
}
Y1 = function (e) {
  if (e.tag === 13) {
    var t = Zr(e),
      n = yr(e, t)
    if (n !== null) {
      var r = bt()
      Pn(n, e, t, r)
    }
    Nm(e, t)
  }
}
Q1 = function () {
  return ke
}
X1 = function (e, t) {
  var n = ke
  try {
    return (ke = e), t()
  } finally {
    ke = n
  }
}
hh = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((oh(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode
        for (
          n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t]
          if (r !== e && r.form === e.form) {
            var i = Xc(r)
            if (!i) throw Error(N(90))
            R1(r), oh(r, i)
          }
        }
      }
      break
    case 'textarea':
      O1(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && Vs(e, !!n.multiple, t, !1)
  }
}
j1 = Rm
$1 = Yi
var B3 = { usingClientEntryPoint: !1, Events: [Ol, ks, Xc, D1, F1, Rm] },
  Yo = {
    findFiberByHostInstance: _i,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom'
  },
  z3 = {
    bundleType: Yo.bundleType,
    version: Yo.version,
    rendererPackageName: Yo.rendererPackageName,
    rendererConfig: Yo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Sr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = z1(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Yo.findFiberByHostInstance || $3,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426'
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var gu = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!gu.isDisabled && gu.supportsFiber)
    try {
      ;(Kc = gu.inject(z3)), (Wn = gu)
    } catch {}
}
Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B3
Jt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!Dm(t)) throw Error(N(200))
  return j3(e, t, null, n)
}
Jt.createRoot = function (e, t) {
  if (!Dm(e)) throw Error(N(299))
  var n = !1,
    r = '',
    i = xx
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Mm(e, 1, !1, null, null, n, !1, r, i)),
    (e[vr] = t.current),
    Ha(e.nodeType === 8 ? e.parentNode : e),
    new Im(t)
  )
}
Jt.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(N(188))
      : ((e = Object.keys(e).join(',')), Error(N(268, e)))
  return (e = z1(t)), (e = e === null ? null : e.stateNode), e
}
Jt.flushSync = function (e) {
  return Yi(e)
}
Jt.hydrate = function (e, t, n) {
  if (!ad(t)) throw Error(N(200))
  return ld(null, e, t, !0, n)
}
Jt.hydrateRoot = function (e, t, n) {
  if (!Dm(e)) throw Error(N(405))
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = '',
    o = xx
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = wx(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[vr] = t.current),
    Ha(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i)
  return new od(t)
}
Jt.render = function (e, t, n) {
  if (!ad(t)) throw Error(N(200))
  return ld(null, e, t, !1, n)
}
Jt.unmountComponentAtNode = function (e) {
  if (!ad(e)) throw Error(N(40))
  return e._reactRootContainer
    ? (Yi(function () {
        ld(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[vr] = null)
        })
      }),
      !0)
    : !1
}
Jt.unstable_batchedUpdates = Rm
Jt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ad(n)) throw Error(N(200))
  if (e == null || e._reactInternals === void 0) throw Error(N(38))
  return ld(e, t, n, !1, r)
}
Jt.version = '18.3.1-next-f1338f8080-20240426'
function Ex() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ex)
    } catch (e) {
      console.error(e)
    }
}
Ex(), (E1.exports = Jt)
var ht = E1.exports,
  hv = ht
;(Jf.createRoot = hv.createRoot), (Jf.hydrateRoot = hv.hydrateRoot)
var Ml = class {
    constructor() {
      ;(this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this))
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe()
        }
      )
    }
    hasListeners() {
      return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  xo = typeof window > 'u' || 'Deno' in globalThis
function an() {}
function U3(e, t) {
  return typeof e == 'function' ? e(t) : e
}
function Gh(e) {
  return typeof e == 'number' && e >= 0 && e !== 1 / 0
}
function Sx(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0)
}
function Gs(e, t) {
  return typeof e == 'function' ? e(t) : e
}
function Cn(e, t) {
  return typeof e == 'function' ? e(t) : e
}
function pv(e, t) {
  const { type: n = 'all', exact: r, fetchStatus: i, predicate: s, queryKey: o, stale: a } = e
  if (o) {
    if (r) {
      if (t.queryHash !== Fm(o, t.options)) return !1
    } else if (!el(t.queryKey, o)) return !1
  }
  if (n !== 'all') {
    const l = t.isActive()
    if ((n === 'active' && !l) || (n === 'inactive' && l)) return !1
  }
  return !(
    (typeof a == 'boolean' && t.isStale() !== a) ||
    (i && i !== t.state.fetchStatus) ||
    (s && !s(t))
  )
}
function mv(e, t) {
  const { exact: n, status: r, predicate: i, mutationKey: s } = e
  if (s) {
    if (!t.options.mutationKey) return !1
    if (n) {
      if (Ja(t.options.mutationKey) !== Ja(s)) return !1
    } else if (!el(t.options.mutationKey, s)) return !1
  }
  return !((r && t.state.status !== r) || (i && !i(t)))
}
function Fm(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Ja)(e)
}
function Ja(e) {
  return JSON.stringify(e, (t, n) =>
    Kh(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, i) => ((r[i] = n[i]), r), {})
      : n
  )
}
function el(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
      ? !1
      : e && t && typeof e == 'object' && typeof t == 'object'
        ? !Object.keys(t).some(n => !el(e[n], t[n]))
        : !1
}
function Tx(e, t) {
  if (e === t) return e
  const n = gv(e) && gv(t)
  if (n || (Kh(e) && Kh(t))) {
    const r = n ? e : Object.keys(e),
      i = r.length,
      s = n ? t : Object.keys(t),
      o = s.length,
      a = n ? [] : {}
    let l = 0
    for (let u = 0; u < o; u++) {
      const c = n ? u : s[u]
      ;((!n && r.includes(c)) || n) && e[c] === void 0 && t[c] === void 0
        ? ((a[c] = void 0), l++)
        : ((a[c] = Tx(e[c], t[c])), a[c] === e[c] && e[c] !== void 0 && l++)
    }
    return i === o && l === i ? e : a
  }
  return t
}
function qh(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (e[n] !== t[n]) return !1
  return !0
}
function gv(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length
}
function Kh(e) {
  if (!vv(e)) return !1
  const t = e.constructor
  if (t === void 0) return !0
  const n = t.prototype
  return !(!vv(n) || !n.hasOwnProperty('isPrototypeOf') || Object.getPrototypeOf(e) !== Object.prototype)
}
function vv(e) {
  return Object.prototype.toString.call(e) === '[object Object]'
}
function H3(e) {
  return new Promise(t => {
    setTimeout(t, e)
  })
}
function Zh(e, t, n) {
  return typeof n.structuralSharing == 'function'
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
      ? Tx(e, t)
      : t
}
function W3(e, t, n = 0) {
  const r = [...e, t]
  return n && r.length > n ? r.slice(1) : r
}
function G3(e, t, n = 0) {
  const r = [t, ...e]
  return n && r.length > n ? r.slice(0, -1) : r
}
var Cx = Symbol()
function _x(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === Cx
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn
}
var Ni,
  Nr,
  Js,
  e1,
  q3 =
    ((e1 = class extends Ml {
      constructor() {
        super()
        ue(this, Ni)
        ue(this, Nr)
        ue(this, Js)
        K(this, Js, t => {
          if (!xo && window.addEventListener) {
            const n = () => t()
            return (
              window.addEventListener('visibilitychange', n, !1),
              () => {
                window.removeEventListener('visibilitychange', n)
              }
            )
          }
        })
      }
      onSubscribe() {
        b(this, Nr) || this.setEventListener(b(this, Js))
      }
      onUnsubscribe() {
        var t
        this.hasListeners() || ((t = b(this, Nr)) == null || t.call(this), K(this, Nr, void 0))
      }
      setEventListener(t) {
        var n
        K(this, Js, t),
          (n = b(this, Nr)) == null || n.call(this),
          K(
            this,
            Nr,
            t(r => {
              typeof r == 'boolean' ? this.setFocused(r) : this.onFocus()
            })
          )
      }
      setFocused(t) {
        b(this, Ni) !== t && (K(this, Ni, t), this.onFocus())
      }
      onFocus() {
        const t = this.isFocused()
        this.listeners.forEach(n => {
          n(t)
        })
      }
      isFocused() {
        var t
        return typeof b(this, Ni) == 'boolean'
          ? b(this, Ni)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== 'hidden'
      }
    }),
    (Ni = new WeakMap()),
    (Nr = new WeakMap()),
    (Js = new WeakMap()),
    e1),
  jm = new q3(),
  eo,
  Ir,
  to,
  t1,
  K3 =
    ((t1 = class extends Ml {
      constructor() {
        super()
        ue(this, eo, !0)
        ue(this, Ir)
        ue(this, to)
        K(this, to, t => {
          if (!xo && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1)
            return (
              window.addEventListener('online', n, !1),
              window.addEventListener('offline', r, !1),
              () => {
                window.removeEventListener('online', n), window.removeEventListener('offline', r)
              }
            )
          }
        })
      }
      onSubscribe() {
        b(this, Ir) || this.setEventListener(b(this, to))
      }
      onUnsubscribe() {
        var t
        this.hasListeners() || ((t = b(this, Ir)) == null || t.call(this), K(this, Ir, void 0))
      }
      setEventListener(t) {
        var n
        K(this, to, t),
          (n = b(this, Ir)) == null || n.call(this),
          K(this, Ir, t(this.setOnline.bind(this)))
      }
      setOnline(t) {
        b(this, eo) !== t &&
          (K(this, eo, t),
          this.listeners.forEach(r => {
            r(t)
          }))
      }
      isOnline() {
        return b(this, eo)
      }
    }),
    (eo = new WeakMap()),
    (Ir = new WeakMap()),
    (to = new WeakMap()),
    t1),
  Tc = new K3()
function Z3(e) {
  return Math.min(1e3 * 2 ** e, 3e4)
}
function bx(e) {
  return (e ?? 'online') === 'online' ? Tc.isOnline() : !0
}
var kx = class extends Error {
  constructor(e) {
    super('CancelledError'),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent)
  }
}
function cf(e) {
  return e instanceof kx
}
function Px(e) {
  let t = !1,
    n = 0,
    r = !1,
    i,
    s,
    o
  const a = new Promise((p, m) => {
      ;(s = p), (o = m)
    }),
    l = p => {
      var m
      r || (v(new kx(p)), (m = e.abort) == null || m.call(e))
    },
    u = () => {
      t = !0
    },
    c = () => {
      t = !1
    },
    d = () => jm.isFocused() && (e.networkMode === 'always' || Tc.isOnline()) && e.canRun(),
    f = () => bx(e.networkMode) && e.canRun(),
    h = p => {
      var m
      r || ((r = !0), (m = e.onSuccess) == null || m.call(e, p), i == null || i(), s(p))
    },
    v = p => {
      var m
      r || ((r = !0), (m = e.onError) == null || m.call(e, p), i == null || i(), o(p))
    },
    y = () =>
      new Promise(p => {
        var m
        ;(i = g => {
          ;(r || d()) && p(g)
        }),
          (m = e.onPause) == null || m.call(e)
      }).then(() => {
        var p
        ;(i = void 0), r || (p = e.onContinue) == null || p.call(e)
      }),
    x = () => {
      if (r) return
      let p
      const m = n === 0 ? e.initialPromise : void 0
      try {
        p = m ?? e.fn()
      } catch (g) {
        p = Promise.reject(g)
      }
      Promise.resolve(p)
        .then(h)
        .catch(g => {
          var T
          if (r) return
          const E = e.retry ?? (xo ? 0 : 3),
            S = e.retryDelay ?? Z3,
            C = typeof S == 'function' ? S(n, g) : S,
            k = E === !0 || (typeof E == 'number' && n < E) || (typeof E == 'function' && E(n, g))
          if (t || !k) {
            v(g)
            return
          }
          n++,
            (T = e.onFail) == null || T.call(e, n, g),
            H3(C)
              .then(() => (d() ? void 0 : y()))
              .then(() => {
                t ? v(g) : x()
              })
        })
    }
  return {
    promise: a,
    cancel: l,
    continue: () => (i == null || i(), a),
    cancelRetry: u,
    continueRetry: c,
    canStart: f,
    start: () => (f() ? x() : y().then(x), a)
  }
}
function Y3() {
  let e = [],
    t = 0,
    n = f => {
      f()
    },
    r = f => {
      f()
    },
    i = f => setTimeout(f, 0)
  const s = f => {
      i = f
    },
    o = f => {
      let h
      t++
      try {
        h = f()
      } finally {
        t--, t || u()
      }
      return h
    },
    a = f => {
      t
        ? e.push(f)
        : i(() => {
            n(f)
          })
    },
    l =
      f =>
      (...h) => {
        a(() => {
          f(...h)
        })
      },
    u = () => {
      const f = e
      ;(e = []),
        f.length &&
          i(() => {
            r(() => {
              f.forEach(h => {
                n(h)
              })
            })
          })
    }
  return {
    batch: o,
    batchCalls: l,
    schedule: a,
    setNotifyFunction: f => {
      n = f
    },
    setBatchNotifyFunction: f => {
      r = f
    },
    setScheduler: s
  }
}
var it = Y3(),
  Ii,
  n1,
  Rx =
    ((n1 = class {
      constructor() {
        ue(this, Ii)
      }
      destroy() {
        this.clearGcTimeout()
      }
      scheduleGc() {
        this.clearGcTimeout(),
          Gh(this.gcTime) &&
            K(
              this,
              Ii,
              setTimeout(() => {
                this.optionalRemove()
              }, this.gcTime)
            )
      }
      updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (xo ? 1 / 0 : 5 * 60 * 1e3))
      }
      clearGcTimeout() {
        b(this, Ii) && (clearTimeout(b(this, Ii)), K(this, Ii, void 0))
      }
    }),
    (Ii = new WeakMap()),
    n1),
  no,
  ro,
  on,
  ct,
  Cl,
  Di,
  En,
  tr,
  r1,
  Q3 =
    ((r1 = class extends Rx {
      constructor(t) {
        super()
        ue(this, En)
        ue(this, no)
        ue(this, ro)
        ue(this, on)
        ue(this, ct)
        ue(this, Cl)
        ue(this, Di)
        K(this, Di, !1),
          K(this, Cl, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          K(this, on, t.cache),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          K(this, no, X3(this.options)),
          (this.state = t.state ?? b(this, no)),
          this.scheduleGc()
      }
      get meta() {
        return this.options.meta
      }
      get promise() {
        var t
        return (t = b(this, ct)) == null ? void 0 : t.promise
      }
      setOptions(t) {
        ;(this.options = { ...b(this, Cl), ...t }), this.updateGcTime(this.options.gcTime)
      }
      optionalRemove() {
        !this.observers.length && this.state.fetchStatus === 'idle' && b(this, on).remove(this)
      }
      setData(t, n) {
        const r = Zh(this.state.data, t, this.options)
        return (
          ge(this, En, tr).call(this, {
            data: r,
            type: 'success',
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
          }),
          r
        )
      }
      setState(t, n) {
        ge(this, En, tr).call(this, { type: 'setState', state: t, setStateOptions: n })
      }
      cancel(t) {
        var r, i
        const n = (r = b(this, ct)) == null ? void 0 : r.promise
        return (i = b(this, ct)) == null || i.cancel(t), n ? n.then(an).catch(an) : Promise.resolve()
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 })
      }
      reset() {
        this.destroy(), this.setState(b(this, no))
      }
      isActive() {
        return this.observers.some(t => Cn(t.options.enabled, this) !== !1)
      }
      isDisabled() {
        return this.getObserversCount() > 0 && !this.isActive()
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
            ? this.observers.some(t => t.getCurrentResult().isStale)
            : this.state.data === void 0
      }
      isStaleByTime(t = 0) {
        return this.state.isInvalidated || this.state.data === void 0 || !Sx(this.state.dataUpdatedAt, t)
      }
      onFocus() {
        var n
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus())
        t == null || t.refetch({ cancelRefetch: !1 }), (n = b(this, ct)) == null || n.continue()
      }
      onOnline() {
        var n
        const t = this.observers.find(r => r.shouldFetchOnReconnect())
        t == null || t.refetch({ cancelRefetch: !1 }), (n = b(this, ct)) == null || n.continue()
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          b(this, on).notify({ type: 'observerAdded', query: this, observer: t }))
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter(n => n !== t)),
          this.observers.length ||
            (b(this, ct) &&
              (b(this, Di) ? b(this, ct).cancel({ revert: !0 }) : b(this, ct).cancelRetry()),
            this.scheduleGc()),
          b(this, on).notify({ type: 'observerRemoved', query: this, observer: t }))
      }
      getObserversCount() {
        return this.observers.length
      }
      invalidate() {
        this.state.isInvalidated || ge(this, En, tr).call(this, { type: 'invalidate' })
      }
      fetch(t, n) {
        var l, u, c
        if (this.state.fetchStatus !== 'idle') {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch) this.cancel({ silent: !0 })
          else if (b(this, ct)) return b(this, ct).continueRetry(), b(this, ct).promise
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const d = this.observers.find(f => f.options.queryFn)
          d && this.setOptions(d.options)
        }
        const r = new AbortController(),
          i = d => {
            Object.defineProperty(d, 'signal', {
              enumerable: !0,
              get: () => (K(this, Di, !0), r.signal)
            })
          },
          s = () => {
            const d = _x(this.options, n),
              f = { queryKey: this.queryKey, meta: this.meta }
            return (
              i(f), K(this, Di, !1), this.options.persister ? this.options.persister(d, f, this) : d(f)
            )
          },
          o = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: s
          }
        i(o),
          (l = this.options.behavior) == null || l.onFetch(o, this),
          K(this, ro, this.state),
          (this.state.fetchStatus === 'idle' ||
            this.state.fetchMeta !== ((u = o.fetchOptions) == null ? void 0 : u.meta)) &&
            ge(this, En, tr).call(this, {
              type: 'fetch',
              meta: (c = o.fetchOptions) == null ? void 0 : c.meta
            })
        const a = d => {
          var f, h, v, y
          ;(cf(d) && d.silent) || ge(this, En, tr).call(this, { type: 'error', error: d }),
            cf(d) ||
              ((h = (f = b(this, on).config).onError) == null || h.call(f, d, this),
              (y = (v = b(this, on).config).onSettled) == null || y.call(v, this.state.data, d, this)),
            this.isFetchingOptimistic || this.scheduleGc(),
            (this.isFetchingOptimistic = !1)
        }
        return (
          K(
            this,
            ct,
            Px({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: o.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: d => {
                var f, h, v, y
                if (d === void 0) {
                  a(new Error(`${this.queryHash} data is undefined`))
                  return
                }
                try {
                  this.setData(d)
                } catch (x) {
                  a(x)
                  return
                }
                ;(h = (f = b(this, on).config).onSuccess) == null || h.call(f, d, this),
                  (y = (v = b(this, on).config).onSettled) == null ||
                    y.call(v, d, this.state.error, this),
                  this.isFetchingOptimistic || this.scheduleGc(),
                  (this.isFetchingOptimistic = !1)
              },
              onError: a,
              onFail: (d, f) => {
                ge(this, En, tr).call(this, { type: 'failed', failureCount: d, error: f })
              },
              onPause: () => {
                ge(this, En, tr).call(this, { type: 'pause' })
              },
              onContinue: () => {
                ge(this, En, tr).call(this, { type: 'continue' })
              },
              retry: o.options.retry,
              retryDelay: o.options.retryDelay,
              networkMode: o.options.networkMode,
              canRun: () => !0
            })
          ),
          b(this, ct).start()
        )
      }
    }),
    (no = new WeakMap()),
    (ro = new WeakMap()),
    (on = new WeakMap()),
    (ct = new WeakMap()),
    (Cl = new WeakMap()),
    (Di = new WeakMap()),
    (En = new WeakSet()),
    (tr = function (t) {
      const n = r => {
        switch (t.type) {
          case 'failed':
            return { ...r, fetchFailureCount: t.failureCount, fetchFailureReason: t.error }
          case 'pause':
            return { ...r, fetchStatus: 'paused' }
          case 'continue':
            return { ...r, fetchStatus: 'fetching' }
          case 'fetch':
            return { ...r, ...Ax(r.data, this.options), fetchMeta: t.meta ?? null }
          case 'success':
            return {
              ...r,
              data: t.data,
              dataUpdateCount: r.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: 'success',
              ...(!t.manual && { fetchStatus: 'idle', fetchFailureCount: 0, fetchFailureReason: null })
            }
          case 'error':
            const i = t.error
            return cf(i) && i.revert && b(this, ro)
              ? { ...b(this, ro), fetchStatus: 'idle' }
              : {
                  ...r,
                  error: i,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: i,
                  fetchStatus: 'idle',
                  status: 'error'
                }
          case 'invalidate':
            return { ...r, isInvalidated: !0 }
          case 'setState':
            return { ...r, ...t.state }
        }
      }
      ;(this.state = n(this.state)),
        it.batch(() => {
          this.observers.forEach(r => {
            r.onQueryUpdate()
          }),
            b(this, on).notify({ query: this, type: 'updated', action: t })
        })
    }),
    r1)
function Ax(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: bx(t.networkMode) ? 'fetching' : 'paused',
    ...(e === void 0 && { error: null, status: 'pending' })
  }
}
function X3(e) {
  const t = typeof e.initialData == 'function' ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == 'function'
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? 'success' : 'pending',
    fetchStatus: 'idle'
  }
}
var Vn,
  i1,
  J3 =
    ((i1 = class extends Ml {
      constructor(t = {}) {
        super()
        ue(this, Vn)
        ;(this.config = t), K(this, Vn, new Map())
      }
      build(t, n, r) {
        const i = n.queryKey,
          s = n.queryHash ?? Fm(i, n)
        let o = this.get(s)
        return (
          o ||
            ((o = new Q3({
              cache: this,
              queryKey: i,
              queryHash: s,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(i)
            })),
            this.add(o)),
          o
        )
      }
      add(t) {
        b(this, Vn).has(t.queryHash) ||
          (b(this, Vn).set(t.queryHash, t), this.notify({ type: 'added', query: t }))
      }
      remove(t) {
        const n = b(this, Vn).get(t.queryHash)
        n &&
          (t.destroy(),
          n === t && b(this, Vn).delete(t.queryHash),
          this.notify({ type: 'removed', query: t }))
      }
      clear() {
        it.batch(() => {
          this.getAll().forEach(t => {
            this.remove(t)
          })
        })
      }
      get(t) {
        return b(this, Vn).get(t)
      }
      getAll() {
        return [...b(this, Vn).values()]
      }
      find(t) {
        const n = { exact: !0, ...t }
        return this.getAll().find(r => pv(n, r))
      }
      findAll(t = {}) {
        const n = this.getAll()
        return Object.keys(t).length > 0 ? n.filter(r => pv(t, r)) : n
      }
      notify(t) {
        it.batch(() => {
          this.listeners.forEach(n => {
            n(t)
          })
        })
      }
      onFocus() {
        it.batch(() => {
          this.getAll().forEach(t => {
            t.onFocus()
          })
        })
      }
      onOnline() {
        it.batch(() => {
          this.getAll().forEach(t => {
            t.onOnline()
          })
        })
      }
    }),
    (Vn = new WeakMap()),
    i1),
  Bn,
  Et,
  Fi,
  zn,
  kr,
  s1,
  eb =
    ((s1 = class extends Rx {
      constructor(t) {
        super()
        ue(this, zn)
        ue(this, Bn)
        ue(this, Et)
        ue(this, Fi)
        ;(this.mutationId = t.mutationId),
          K(this, Et, t.mutationCache),
          K(this, Bn, []),
          (this.state = t.state || tb()),
          this.setOptions(t.options),
          this.scheduleGc()
      }
      setOptions(t) {
        ;(this.options = t), this.updateGcTime(this.options.gcTime)
      }
      get meta() {
        return this.options.meta
      }
      addObserver(t) {
        b(this, Bn).includes(t) ||
          (b(this, Bn).push(t),
          this.clearGcTimeout(),
          b(this, Et).notify({ type: 'observerAdded', mutation: this, observer: t }))
      }
      removeObserver(t) {
        K(
          this,
          Bn,
          b(this, Bn).filter(n => n !== t)
        ),
          this.scheduleGc(),
          b(this, Et).notify({ type: 'observerRemoved', mutation: this, observer: t })
      }
      optionalRemove() {
        b(this, Bn).length ||
          (this.state.status === 'pending' ? this.scheduleGc() : b(this, Et).remove(this))
      }
      continue() {
        var t
        return ((t = b(this, Fi)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
      }
      async execute(t) {
        var i, s, o, a, l, u, c, d, f, h, v, y, x, p, m, g, E, S, C, k
        K(
          this,
          Fi,
          Px({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error('No mutationFn found')),
            onFail: (T, A) => {
              ge(this, zn, kr).call(this, { type: 'failed', failureCount: T, error: A })
            },
            onPause: () => {
              ge(this, zn, kr).call(this, { type: 'pause' })
            },
            onContinue: () => {
              ge(this, zn, kr).call(this, { type: 'continue' })
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => b(this, Et).canRun(this)
          })
        )
        const n = this.state.status === 'pending',
          r = !b(this, Fi).canStart()
        try {
          if (!n) {
            ge(this, zn, kr).call(this, { type: 'pending', variables: t, isPaused: r }),
              await ((s = (i = b(this, Et).config).onMutate) == null ? void 0 : s.call(i, t, this))
            const A = await ((a = (o = this.options).onMutate) == null ? void 0 : a.call(o, t))
            A !== this.state.context &&
              ge(this, zn, kr).call(this, { type: 'pending', context: A, variables: t, isPaused: r })
          }
          const T = await b(this, Fi).start()
          return (
            await ((u = (l = b(this, Et).config).onSuccess) == null
              ? void 0
              : u.call(l, T, t, this.state.context, this)),
            await ((d = (c = this.options).onSuccess) == null
              ? void 0
              : d.call(c, T, t, this.state.context)),
            await ((h = (f = b(this, Et).config).onSettled) == null
              ? void 0
              : h.call(f, T, null, this.state.variables, this.state.context, this)),
            await ((y = (v = this.options).onSettled) == null
              ? void 0
              : y.call(v, T, null, t, this.state.context)),
            ge(this, zn, kr).call(this, { type: 'success', data: T }),
            T
          )
        } catch (T) {
          try {
            throw (
              (await ((p = (x = b(this, Et).config).onError) == null
                ? void 0
                : p.call(x, T, t, this.state.context, this)),
              await ((g = (m = this.options).onError) == null
                ? void 0
                : g.call(m, T, t, this.state.context)),
              await ((S = (E = b(this, Et).config).onSettled) == null
                ? void 0
                : S.call(E, void 0, T, this.state.variables, this.state.context, this)),
              await ((k = (C = this.options).onSettled) == null
                ? void 0
                : k.call(C, void 0, T, t, this.state.context)),
              T)
            )
          } finally {
            ge(this, zn, kr).call(this, { type: 'error', error: T })
          }
        } finally {
          b(this, Et).runNext(this)
        }
      }
    }),
    (Bn = new WeakMap()),
    (Et = new WeakMap()),
    (Fi = new WeakMap()),
    (zn = new WeakSet()),
    (kr = function (t) {
      const n = r => {
        switch (t.type) {
          case 'failed':
            return { ...r, failureCount: t.failureCount, failureReason: t.error }
          case 'pause':
            return { ...r, isPaused: !0 }
          case 'continue':
            return { ...r, isPaused: !1 }
          case 'pending':
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: 'pending',
              variables: t.variables,
              submittedAt: Date.now()
            }
          case 'success':
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: 'success',
              isPaused: !1
            }
          case 'error':
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: 'error'
            }
        }
      }
      ;(this.state = n(this.state)),
        it.batch(() => {
          b(this, Bn).forEach(r => {
            r.onMutationUpdate(t)
          }),
            b(this, Et).notify({ mutation: this, type: 'updated', action: t })
        })
    }),
    s1)
function tb() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: 'idle',
    variables: void 0,
    submittedAt: 0
  }
}
var Bt,
  _l,
  o1,
  nb =
    ((o1 = class extends Ml {
      constructor(t = {}) {
        super()
        ue(this, Bt)
        ue(this, _l)
        ;(this.config = t), K(this, Bt, new Map()), K(this, _l, Date.now())
      }
      build(t, n, r) {
        const i = new eb({
          mutationCache: this,
          mutationId: ++Jl(this, _l)._,
          options: t.defaultMutationOptions(n),
          state: r
        })
        return this.add(i), i
      }
      add(t) {
        const n = vu(t),
          r = b(this, Bt).get(n) ?? []
        r.push(t), b(this, Bt).set(n, r), this.notify({ type: 'added', mutation: t })
      }
      remove(t) {
        var r
        const n = vu(t)
        if (b(this, Bt).has(n)) {
          const i = (r = b(this, Bt).get(n)) == null ? void 0 : r.filter(s => s !== t)
          i && (i.length === 0 ? b(this, Bt).delete(n) : b(this, Bt).set(n, i))
        }
        this.notify({ type: 'removed', mutation: t })
      }
      canRun(t) {
        var r
        const n =
          (r = b(this, Bt).get(vu(t))) == null ? void 0 : r.find(i => i.state.status === 'pending')
        return !n || n === t
      }
      runNext(t) {
        var r
        const n =
          (r = b(this, Bt).get(vu(t))) == null ? void 0 : r.find(i => i !== t && i.state.isPaused)
        return (n == null ? void 0 : n.continue()) ?? Promise.resolve()
      }
      clear() {
        it.batch(() => {
          this.getAll().forEach(t => {
            this.remove(t)
          })
        })
      }
      getAll() {
        return [...b(this, Bt).values()].flat()
      }
      find(t) {
        const n = { exact: !0, ...t }
        return this.getAll().find(r => mv(n, r))
      }
      findAll(t = {}) {
        return this.getAll().filter(n => mv(t, n))
      }
      notify(t) {
        it.batch(() => {
          this.listeners.forEach(n => {
            n(t)
          })
        })
      }
      resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused)
        return it.batch(() => Promise.all(t.map(n => n.continue().catch(an))))
      }
    }),
    (Bt = new WeakMap()),
    (_l = new WeakMap()),
    o1)
function vu(e) {
  var t
  return ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
}
function rb(e) {
  return {
    onFetch: (t, n) => {
      const r = async () => {
        var v, y, x, p, m
        const i = t.options,
          s =
            (x = (y = (v = t.fetchOptions) == null ? void 0 : v.meta) == null ? void 0 : y.fetchMore) ==
            null
              ? void 0
              : x.direction,
          o = ((p = t.state.data) == null ? void 0 : p.pages) || [],
          a = ((m = t.state.data) == null ? void 0 : m.pageParams) || [],
          l = { pages: [], pageParams: [] }
        let u = !1
        const c = g => {
            Object.defineProperty(g, 'signal', {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (u = !0)
                  : t.signal.addEventListener('abort', () => {
                      u = !0
                    }),
                t.signal
              )
            })
          },
          d = _x(t.options, t.fetchOptions),
          f = async (g, E, S) => {
            if (u) return Promise.reject()
            if (E == null && g.pages.length) return Promise.resolve(g)
            const C = {
              queryKey: t.queryKey,
              pageParam: E,
              direction: S ? 'backward' : 'forward',
              meta: t.options.meta
            }
            c(C)
            const k = await d(C),
              { maxPages: T } = t.options,
              A = S ? G3 : W3
            return { pages: A(g.pages, k, T), pageParams: A(g.pageParams, E, T) }
          }
        let h
        if (s && o.length) {
          const g = s === 'backward',
            E = g ? ib : yv,
            S = { pages: o, pageParams: a },
            C = E(i, S)
          h = await f(S, C, g)
        } else {
          h = await f(l, a[0] ?? i.initialPageParam)
          const g = e ?? o.length
          for (let E = 1; E < g; E++) {
            const S = yv(i, h)
            if (S == null) break
            h = await f(h, S)
          }
        }
        return h
      }
      t.options.persister
        ? (t.fetchFn = () => {
            var i, s
            return (s = (i = t.options).persister) == null
              ? void 0
              : s.call(i, r, { queryKey: t.queryKey, meta: t.options.meta, signal: t.signal }, n)
          })
        : (t.fetchFn = r)
    }
  }
}
function yv(e, { pages: t, pageParams: n }) {
  const r = t.length - 1
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function ib(e, { pages: t, pageParams: n }) {
  var r
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0
}
var Be,
  Dr,
  Fr,
  io,
  so,
  jr,
  oo,
  ao,
  a1,
  sb =
    ((a1 = class {
      constructor(e = {}) {
        ue(this, Be)
        ue(this, Dr)
        ue(this, Fr)
        ue(this, io)
        ue(this, so)
        ue(this, jr)
        ue(this, oo)
        ue(this, ao)
        K(this, Be, e.queryCache || new J3()),
          K(this, Dr, e.mutationCache || new nb()),
          K(this, Fr, e.defaultOptions || {}),
          K(this, io, new Map()),
          K(this, so, new Map()),
          K(this, jr, 0)
      }
      mount() {
        Jl(this, jr)._++,
          b(this, jr) === 1 &&
            (K(
              this,
              oo,
              jm.subscribe(async e => {
                e && (await this.resumePausedMutations(), b(this, Be).onFocus())
              })
            ),
            K(
              this,
              ao,
              Tc.subscribe(async e => {
                e && (await this.resumePausedMutations(), b(this, Be).onOnline())
              })
            ))
      }
      unmount() {
        var e, t
        Jl(this, jr)._--,
          b(this, jr) === 0 &&
            ((e = b(this, oo)) == null || e.call(this),
            K(this, oo, void 0),
            (t = b(this, ao)) == null || t.call(this),
            K(this, ao, void 0))
      }
      isFetching(e) {
        return b(this, Be).findAll({ ...e, fetchStatus: 'fetching' }).length
      }
      isMutating(e) {
        return b(this, Dr).findAll({ ...e, status: 'pending' }).length
      }
      getQueryData(e) {
        var n
        const t = this.defaultQueryOptions({ queryKey: e })
        return (n = b(this, Be).get(t.queryHash)) == null ? void 0 : n.state.data
      }
      ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey)
        if (t === void 0) return this.fetchQuery(e)
        {
          const n = this.defaultQueryOptions(e),
            r = b(this, Be).build(this, n)
          return (
            e.revalidateIfStale && r.isStaleByTime(Gs(n.staleTime, r)) && this.prefetchQuery(n),
            Promise.resolve(t)
          )
        }
      }
      getQueriesData(e) {
        return b(this, Be)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data
            return [t, r]
          })
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          i = b(this, Be).get(r.queryHash),
          s = i == null ? void 0 : i.state.data,
          o = U3(t, s)
        if (o !== void 0)
          return b(this, Be)
            .build(this, r)
            .setData(o, { ...n, manual: !0 })
      }
      setQueriesData(e, t, n) {
        return it.batch(() =>
          b(this, Be)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
        )
      }
      getQueryState(e) {
        var n
        const t = this.defaultQueryOptions({ queryKey: e })
        return (n = b(this, Be).get(t.queryHash)) == null ? void 0 : n.state
      }
      removeQueries(e) {
        const t = b(this, Be)
        it.batch(() => {
          t.findAll(e).forEach(n => {
            t.remove(n)
          })
        })
      }
      resetQueries(e, t) {
        const n = b(this, Be),
          r = { type: 'active', ...e }
        return it.batch(
          () => (
            n.findAll(e).forEach(i => {
              i.reset()
            }),
            this.refetchQueries(r, t)
          )
        )
      }
      cancelQueries(e = {}, t = {}) {
        const n = { revert: !0, ...t },
          r = it.batch(() =>
            b(this, Be)
              .findAll(e)
              .map(i => i.cancel(n))
          )
        return Promise.all(r).then(an).catch(an)
      }
      invalidateQueries(e = {}, t = {}) {
        return it.batch(() => {
          if (
            (b(this, Be)
              .findAll(e)
              .forEach(r => {
                r.invalidate()
              }),
            e.refetchType === 'none')
          )
            return Promise.resolve()
          const n = { ...e, type: e.refetchType ?? e.type ?? 'active' }
          return this.refetchQueries(n, t)
        })
      }
      refetchQueries(e = {}, t) {
        const n = { ...t, cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0 },
          r = it.batch(() =>
            b(this, Be)
              .findAll(e)
              .filter(i => !i.isDisabled())
              .map(i => {
                let s = i.fetch(void 0, n)
                return (
                  n.throwOnError || (s = s.catch(an)),
                  i.state.fetchStatus === 'paused' ? Promise.resolve() : s
                )
              })
          )
        return Promise.all(r).then(an)
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e)
        t.retry === void 0 && (t.retry = !1)
        const n = b(this, Be).build(this, t)
        return n.isStaleByTime(Gs(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(an).catch(an)
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = rb(e.pages)), this.fetchQuery(e)
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(an).catch(an)
      }
      resumePausedMutations() {
        return Tc.isOnline() ? b(this, Dr).resumePausedMutations() : Promise.resolve()
      }
      getQueryCache() {
        return b(this, Be)
      }
      getMutationCache() {
        return b(this, Dr)
      }
      getDefaultOptions() {
        return b(this, Fr)
      }
      setDefaultOptions(e) {
        K(this, Fr, e)
      }
      setQueryDefaults(e, t) {
        b(this, io).set(Ja(e), { queryKey: e, defaultOptions: t })
      }
      getQueryDefaults(e) {
        const t = [...b(this, io).values()]
        let n = {}
        return (
          t.forEach(r => {
            el(e, r.queryKey) && (n = { ...n, ...r.defaultOptions })
          }),
          n
        )
      }
      setMutationDefaults(e, t) {
        b(this, so).set(Ja(e), { mutationKey: e, defaultOptions: t })
      }
      getMutationDefaults(e) {
        const t = [...b(this, so).values()]
        let n = {}
        return (
          t.forEach(r => {
            el(e, r.mutationKey) && (n = { ...n, ...r.defaultOptions })
          }),
          n
        )
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e
        const t = { ...b(this, Fr).queries, ...this.getQueryDefaults(e.queryKey), ...e, _defaulted: !0 }
        return (
          t.queryHash || (t.queryHash = Fm(t.queryKey, t)),
          t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== 'always'),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = 'offlineFirst'),
          t.enabled !== !0 && t.queryFn === Cx && (t.enabled = !1),
          t
        )
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...b(this, Fr).mutations,
              ...((e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0
            }
      }
      clear() {
        b(this, Be).clear(), b(this, Dr).clear()
      }
    }),
    (Be = new WeakMap()),
    (Dr = new WeakMap()),
    (Fr = new WeakMap()),
    (io = new WeakMap()),
    (so = new WeakMap()),
    (jr = new WeakMap()),
    (oo = new WeakMap()),
    (ao = new WeakMap()),
    a1),
  Lt,
  ve,
  bl,
  St,
  ji,
  lo,
  Un,
  kl,
  uo,
  co,
  $i,
  Vi,
  $r,
  fo,
  be,
  ca,
  Yh,
  Qh,
  Xh,
  Jh,
  ep,
  tp,
  np,
  Ox,
  l1,
  ob =
    ((l1 = class extends Ml {
      constructor(t, n) {
        super()
        ue(this, be)
        ue(this, Lt)
        ue(this, ve)
        ue(this, bl)
        ue(this, St)
        ue(this, ji)
        ue(this, lo)
        ue(this, Un)
        ue(this, kl)
        ue(this, uo)
        ue(this, co)
        ue(this, $i)
        ue(this, Vi)
        ue(this, $r)
        ue(this, fo, new Set())
        ;(this.options = n), K(this, Lt, t), K(this, Un, null), this.bindMethods(), this.setOptions(n)
      }
      bindMethods() {
        this.refetch = this.refetch.bind(this)
      }
      onSubscribe() {
        this.listeners.size === 1 &&
          (b(this, ve).addObserver(this),
          wv(b(this, ve), this.options) ? ge(this, be, ca).call(this) : this.updateResult(),
          ge(this, be, Jh).call(this))
      }
      onUnsubscribe() {
        this.hasListeners() || this.destroy()
      }
      shouldFetchOnReconnect() {
        return rp(b(this, ve), this.options, this.options.refetchOnReconnect)
      }
      shouldFetchOnWindowFocus() {
        return rp(b(this, ve), this.options, this.options.refetchOnWindowFocus)
      }
      destroy() {
        ;(this.listeners = new Set()),
          ge(this, be, ep).call(this),
          ge(this, be, tp).call(this),
          b(this, ve).removeObserver(this)
      }
      setOptions(t, n) {
        const r = this.options,
          i = b(this, ve)
        if (
          ((this.options = b(this, Lt).defaultQueryOptions(t)),
          this.options.enabled !== void 0 &&
            typeof this.options.enabled != 'boolean' &&
            typeof this.options.enabled != 'function' &&
            typeof Cn(this.options.enabled, b(this, ve)) != 'boolean')
        )
          throw new Error('Expected enabled to be a boolean or a callback that returns a boolean')
        ge(this, be, np).call(this),
          b(this, ve).setOptions(this.options),
          r._defaulted &&
            !qh(this.options, r) &&
            b(this, Lt)
              .getQueryCache()
              .notify({ type: 'observerOptionsUpdated', query: b(this, ve), observer: this })
        const s = this.hasListeners()
        s && xv(b(this, ve), i, this.options, r) && ge(this, be, ca).call(this),
          this.updateResult(n),
          s &&
            (b(this, ve) !== i ||
              Cn(this.options.enabled, b(this, ve)) !== Cn(r.enabled, b(this, ve)) ||
              Gs(this.options.staleTime, b(this, ve)) !== Gs(r.staleTime, b(this, ve))) &&
            ge(this, be, Yh).call(this)
        const o = ge(this, be, Qh).call(this)
        s &&
          (b(this, ve) !== i ||
            Cn(this.options.enabled, b(this, ve)) !== Cn(r.enabled, b(this, ve)) ||
            o !== b(this, $r)) &&
          ge(this, be, Xh).call(this, o)
      }
      getOptimisticResult(t) {
        const n = b(this, Lt).getQueryCache().build(b(this, Lt), t),
          r = this.createResult(n, t)
        return (
          lb(this, r) && (K(this, St, r), K(this, lo, this.options), K(this, ji, b(this, ve).state)), r
        )
      }
      getCurrentResult() {
        return b(this, St)
      }
      trackResult(t, n) {
        const r = {}
        return (
          Object.keys(t).forEach(i => {
            Object.defineProperty(r, i, {
              configurable: !1,
              enumerable: !0,
              get: () => (this.trackProp(i), n == null || n(i), t[i])
            })
          }),
          r
        )
      }
      trackProp(t) {
        b(this, fo).add(t)
      }
      getCurrentQuery() {
        return b(this, ve)
      }
      refetch({ ...t } = {}) {
        return this.fetch({ ...t })
      }
      fetchOptimistic(t) {
        const n = b(this, Lt).defaultQueryOptions(t),
          r = b(this, Lt).getQueryCache().build(b(this, Lt), n)
        return (r.isFetchingOptimistic = !0), r.fetch().then(() => this.createResult(r, n))
      }
      fetch(t) {
        return ge(this, be, ca)
          .call(this, { ...t, cancelRefetch: t.cancelRefetch ?? !0 })
          .then(() => (this.updateResult(), b(this, St)))
      }
      createResult(t, n) {
        var k
        const r = b(this, ve),
          i = this.options,
          s = b(this, St),
          o = b(this, ji),
          a = b(this, lo),
          u = t !== r ? t.state : b(this, bl),
          { state: c } = t
        let d = { ...c },
          f = !1,
          h
        if (n._optimisticResults) {
          const T = this.hasListeners(),
            A = !T && wv(t, n),
            O = T && xv(t, r, n, i)
          ;(A || O) && (d = { ...d, ...Ax(c.data, t.options) }),
            n._optimisticResults === 'isRestoring' && (d.fetchStatus = 'idle')
        }
        let { error: v, errorUpdatedAt: y, status: x } = d
        if (n.select && d.data !== void 0)
          if (s && d.data === (o == null ? void 0 : o.data) && n.select === b(this, kl)) h = b(this, uo)
          else
            try {
              K(this, kl, n.select),
                (h = n.select(d.data)),
                (h = Zh(s == null ? void 0 : s.data, h, n)),
                K(this, uo, h),
                K(this, Un, null)
            } catch (T) {
              K(this, Un, T)
            }
        else h = d.data
        if (n.placeholderData !== void 0 && h === void 0 && x === 'pending') {
          let T
          if (
            s != null &&
            s.isPlaceholderData &&
            n.placeholderData === (a == null ? void 0 : a.placeholderData)
          )
            T = s.data
          else if (
            ((T =
              typeof n.placeholderData == 'function'
                ? n.placeholderData((k = b(this, co)) == null ? void 0 : k.state.data, b(this, co))
                : n.placeholderData),
            n.select && T !== void 0)
          )
            try {
              ;(T = n.select(T)), K(this, Un, null)
            } catch (A) {
              K(this, Un, A)
            }
          T !== void 0 && ((x = 'success'), (h = Zh(s == null ? void 0 : s.data, T, n)), (f = !0))
        }
        b(this, Un) && ((v = b(this, Un)), (h = b(this, uo)), (y = Date.now()), (x = 'error'))
        const p = d.fetchStatus === 'fetching',
          m = x === 'pending',
          g = x === 'error',
          E = m && p,
          S = h !== void 0
        return {
          status: x,
          fetchStatus: d.fetchStatus,
          isPending: m,
          isSuccess: x === 'success',
          isError: g,
          isInitialLoading: E,
          isLoading: E,
          data: h,
          dataUpdatedAt: d.dataUpdatedAt,
          error: v,
          errorUpdatedAt: y,
          failureCount: d.fetchFailureCount,
          failureReason: d.fetchFailureReason,
          errorUpdateCount: d.errorUpdateCount,
          isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
          isFetchedAfterMount:
            d.dataUpdateCount > u.dataUpdateCount || d.errorUpdateCount > u.errorUpdateCount,
          isFetching: p,
          isRefetching: p && !m,
          isLoadingError: g && !S,
          isPaused: d.fetchStatus === 'paused',
          isPlaceholderData: f,
          isRefetchError: g && S,
          isStale: $m(t, n),
          refetch: this.refetch
        }
      }
      updateResult(t) {
        const n = b(this, St),
          r = this.createResult(b(this, ve), this.options)
        if (
          (K(this, ji, b(this, ve).state),
          K(this, lo, this.options),
          b(this, ji).data !== void 0 && K(this, co, b(this, ve)),
          qh(r, n))
        )
          return
        K(this, St, r)
        const i = {},
          s = () => {
            if (!n) return !0
            const { notifyOnChangeProps: o } = this.options,
              a = typeof o == 'function' ? o() : o
            if (a === 'all' || (!a && !b(this, fo).size)) return !0
            const l = new Set(a ?? b(this, fo))
            return (
              this.options.throwOnError && l.add('error'),
              Object.keys(b(this, St)).some(u => {
                const c = u
                return b(this, St)[c] !== n[c] && l.has(c)
              })
            )
          }
        ;(t == null ? void 0 : t.listeners) !== !1 && s() && (i.listeners = !0),
          ge(this, be, Ox).call(this, { ...i, ...t })
      }
      onQueryUpdate() {
        this.updateResult(), this.hasListeners() && ge(this, be, Jh).call(this)
      }
    }),
    (Lt = new WeakMap()),
    (ve = new WeakMap()),
    (bl = new WeakMap()),
    (St = new WeakMap()),
    (ji = new WeakMap()),
    (lo = new WeakMap()),
    (Un = new WeakMap()),
    (kl = new WeakMap()),
    (uo = new WeakMap()),
    (co = new WeakMap()),
    ($i = new WeakMap()),
    (Vi = new WeakMap()),
    ($r = new WeakMap()),
    (fo = new WeakMap()),
    (be = new WeakSet()),
    (ca = function (t) {
      ge(this, be, np).call(this)
      let n = b(this, ve).fetch(this.options, t)
      return (t != null && t.throwOnError) || (n = n.catch(an)), n
    }),
    (Yh = function () {
      ge(this, be, ep).call(this)
      const t = Gs(this.options.staleTime, b(this, ve))
      if (xo || b(this, St).isStale || !Gh(t)) return
      const r = Sx(b(this, St).dataUpdatedAt, t) + 1
      K(
        this,
        $i,
        setTimeout(() => {
          b(this, St).isStale || this.updateResult()
        }, r)
      )
    }),
    (Qh = function () {
      return (
        (typeof this.options.refetchInterval == 'function'
          ? this.options.refetchInterval(b(this, ve))
          : this.options.refetchInterval) ?? !1
      )
    }),
    (Xh = function (t) {
      ge(this, be, tp).call(this),
        K(this, $r, t),
        !(xo || Cn(this.options.enabled, b(this, ve)) === !1 || !Gh(b(this, $r)) || b(this, $r) === 0) &&
          K(
            this,
            Vi,
            setInterval(
              () => {
                ;(this.options.refetchIntervalInBackground || jm.isFocused()) &&
                  ge(this, be, ca).call(this)
              },
              b(this, $r)
            )
          )
    }),
    (Jh = function () {
      ge(this, be, Yh).call(this), ge(this, be, Xh).call(this, ge(this, be, Qh).call(this))
    }),
    (ep = function () {
      b(this, $i) && (clearTimeout(b(this, $i)), K(this, $i, void 0))
    }),
    (tp = function () {
      b(this, Vi) && (clearInterval(b(this, Vi)), K(this, Vi, void 0))
    }),
    (np = function () {
      const t = b(this, Lt).getQueryCache().build(b(this, Lt), this.options)
      if (t === b(this, ve)) return
      const n = b(this, ve)
      K(this, ve, t),
        K(this, bl, t.state),
        this.hasListeners() && (n == null || n.removeObserver(this), t.addObserver(this))
    }),
    (Ox = function (t) {
      it.batch(() => {
        t.listeners &&
          this.listeners.forEach(n => {
            n(b(this, St))
          }),
          b(this, Lt)
            .getQueryCache()
            .notify({ query: b(this, ve), type: 'observerResultsUpdated' })
      })
    }),
    l1)
function ab(e, t) {
  return (
    Cn(t.enabled, e) !== !1 &&
    e.state.data === void 0 &&
    !(e.state.status === 'error' && t.retryOnMount === !1)
  )
}
function wv(e, t) {
  return ab(e, t) || (e.state.data !== void 0 && rp(e, t, t.refetchOnMount))
}
function rp(e, t, n) {
  if (Cn(t.enabled, e) !== !1) {
    const r = typeof n == 'function' ? n(e) : n
    return r === 'always' || (r !== !1 && $m(e, t))
  }
  return !1
}
function xv(e, t, n, r) {
  return (e !== t || Cn(r.enabled, e) === !1) && (!n.suspense || e.state.status !== 'error') && $m(e, n)
}
function $m(e, t) {
  return Cn(t.enabled, e) !== !1 && e.isStaleByTime(Gs(t.staleTime, e))
}
function lb(e, t) {
  return !qh(e.getCurrentResult(), t)
}
var Lx = w.createContext(void 0),
  ub = e => {
    const t = w.useContext(Lx)
    if (!t) throw new Error('No QueryClient set, use QueryClientProvider to set one')
    return t
  },
  cb = ({ client: e, children: t }) => (
    w.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount()
        }
      ),
      [e]
    ),
    P.jsx(Lx.Provider, { value: e, children: t })
  ),
  Mx = w.createContext(!1),
  db = () => w.useContext(Mx)
Mx.Provider
function fb() {
  let e = !1
  return {
    clearReset: () => {
      e = !1
    },
    reset: () => {
      e = !0
    },
    isReset: () => e
  }
}
var hb = w.createContext(fb()),
  pb = () => w.useContext(hb)
function mb(e, t) {
  return typeof e == 'function' ? e(...t) : !!e
}
var gb = (e, t) => {
    ;(e.suspense || e.throwOnError) && (t.isReset() || (e.retryOnMount = !1))
  },
  vb = e => {
    w.useEffect(() => {
      e.clearReset()
    }, [e])
  },
  yb = ({ result: e, errorResetBoundary: t, throwOnError: n, query: r }) =>
    e.isError && !t.isReset() && !e.isFetching && r && mb(n, [e.error, r]),
  wb = e => {
    e.suspense &&
      (typeof e.staleTime != 'number' && (e.staleTime = 1e3),
      typeof e.gcTime == 'number' && (e.gcTime = Math.max(e.gcTime, 1e3)))
  },
  xb = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending,
  Eb = (e, t, n) =>
    t.fetchOptimistic(e).catch(() => {
      n.clearReset()
    })
function Sb(e, t, n) {
  var u, c, d, f
  const r = ub(),
    i = db(),
    s = pb(),
    o = r.defaultQueryOptions(e)
  ;(c = (u = r.getDefaultOptions().queries) == null ? void 0 : u._experimental_beforeQuery) == null ||
    c.call(u, o),
    (o._optimisticResults = i ? 'isRestoring' : 'optimistic'),
    wb(o),
    gb(o, s),
    vb(s)
  const [a] = w.useState(() => new t(r, o)),
    l = a.getOptimisticResult(o)
  if (
    (w.useSyncExternalStore(
      w.useCallback(
        h => {
          const v = i ? () => {} : a.subscribe(it.batchCalls(h))
          return a.updateResult(), v
        },
        [a, i]
      ),
      () => a.getCurrentResult(),
      () => a.getCurrentResult()
    ),
    w.useEffect(() => {
      a.setOptions(o, { listeners: !1 })
    }, [o, a]),
    xb(o, l))
  )
    throw Eb(o, a, s)
  if (
    yb({
      result: l,
      errorResetBoundary: s,
      throwOnError: o.throwOnError,
      query: r.getQueryCache().get(o.queryHash)
    })
  )
    throw l.error
  return (
    (f = (d = r.getDefaultOptions().queries) == null ? void 0 : d._experimental_afterQuery) == null ||
      f.call(d, o, l),
    o.notifyOnChangeProps ? l : a.trackResult(l)
  )
}
function Nx(e, t) {
  return Sb(e, ob)
}
const Ev = 'pushstate',
  Sv = 'popstate',
  Ix = 'beforeunload',
  Dx = e => (e.preventDefault(), (e.returnValue = '')),
  Tb = () => {
    removeEventListener(Ix, Dx, { capture: !0 })
  }
function Fx(e) {
  let t = e.getLocation()
  const n = new Set()
  let r = []
  const i = () => {
      ;(t = e.getLocation()), n.forEach(o => o())
    },
    s = async (o, a) => {
      var l
      if (!((a == null ? void 0 : a.ignoreBlocker) ?? !1) && typeof document < 'u' && r.length) {
        for (const c of r)
          if (!(await c())) {
            ;(l = e.onBlocked) == null || l.call(e, i)
            return
          }
      }
      o()
    }
  return {
    get location() {
      return t
    },
    subscribers: n,
    subscribe: o => (
      n.add(o),
      () => {
        n.delete(o)
      }
    ),
    push: (o, a, l) => {
      ;(a = _a(a)),
        s(() => {
          e.pushState(o, a), i()
        }, l)
    },
    replace: (o, a, l) => {
      ;(a = _a(a)),
        s(() => {
          e.replaceState(o, a), i()
        }, l)
    },
    go: (o, a) => {
      s(() => {
        e.go(o), i()
      }, a)
    },
    back: o => {
      s(() => {
        e.back(), i()
      }, o)
    },
    forward: o => {
      s(() => {
        e.forward(), i()
      }, o)
    },
    createHref: o => e.createHref(o),
    block: o => (
      r.push(o),
      r.length === 1 && addEventListener(Ix, Dx, { capture: !0 }),
      () => {
        ;(r = r.filter(a => a !== o)), r.length || Tb()
      }
    ),
    flush: () => {
      var o
      return (o = e.flush) == null ? void 0 : o.call(e)
    },
    destroy: () => {
      var o
      return (o = e.destroy) == null ? void 0 : o.call(e)
    },
    notify: i
  }
}
function _a(e) {
  return e || (e = {}), { ...e, key: jx() }
}
function Cb(e) {
  const t = typeof document < 'u' ? window : void 0,
    n = t.history.pushState,
    r = t.history.replaceState,
    i = y => y,
    s = () => Cc(`${t.location.pathname}${t.location.search}${t.location.hash}`, t.history.state)
  let o = s(),
    a
  const l = () => o
  let u, c
  const d = () => {
      u &&
        ((v._ignoreSubscribers = !0),
        (u.isPush ? t.history.pushState : t.history.replaceState)(u.state, '', u.href),
        (v._ignoreSubscribers = !1),
        (u = void 0),
        (c = void 0),
        (a = void 0))
    },
    f = (y, x, p) => {
      const m = i(x)
      c || (a = o),
        (o = Cc(x, p)),
        (u = { href: m, state: p, isPush: (u == null ? void 0 : u.isPush) || y === 'push' }),
        c || (c = Promise.resolve().then(() => d()))
    },
    h = () => {
      ;(o = s()), v.notify()
    },
    v = Fx({
      getLocation: l,
      pushState: (y, x) => f('push', y, x),
      replaceState: (y, x) => f('replace', y, x),
      back: () => t.history.back(),
      forward: () => t.history.forward(),
      go: y => t.history.go(y),
      createHref: y => i(y),
      flush: d,
      destroy: () => {
        ;(t.history.pushState = n),
          (t.history.replaceState = r),
          t.removeEventListener(Ev, h),
          t.removeEventListener(Sv, h)
      },
      onBlocked: y => {
        a && o !== a && ((o = a), y())
      }
    })
  return (
    t.addEventListener(Ev, h),
    t.addEventListener(Sv, h),
    (t.history.pushState = function (...y) {
      const x = n.apply(t.history, y)
      return v._ignoreSubscribers || h(), x
    }),
    (t.history.replaceState = function (...y) {
      const x = r.apply(t.history, y)
      return v._ignoreSubscribers || h(), x
    }),
    v
  )
}
function _b(e = { initialEntries: ['/'] }) {
  const t = e.initialEntries
  let n = e.initialIndex ?? t.length - 1,
    r = { key: jx() }
  return Fx({
    getLocation: () => Cc(t[n], r),
    pushState: (s, o) => {
      ;(r = o), t.splice, n < t.length - 1 && t.splice(n + 1), t.push(s), (n = Math.max(t.length - 1, 0))
    },
    replaceState: (s, o) => {
      ;(r = o), (t[n] = s)
    },
    back: () => {
      ;(r = _a(r)), (n = Math.max(n - 1, 0))
    },
    forward: () => {
      ;(r = _a(r)), (n = Math.min(n + 1, t.length - 1))
    },
    go: s => {
      ;(r = _a(r)), (n = Math.min(Math.max(n + s, 0), t.length - 1))
    },
    createHref: s => s
  })
}
function Cc(e, t) {
  const n = e.indexOf('#'),
    r = e.indexOf('?')
  return {
    href: e,
    pathname: e.substring(0, n > 0 ? (r > 0 ? Math.min(n, r) : n) : r > 0 ? r : e.length),
    hash: n > -1 ? e.substring(n) : '',
    search: r > -1 ? e.slice(r, n === -1 ? void 0 : n) : '',
    state: t || {}
  }
}
function jx() {
  return (Math.random() + 1).toString(36).substring(7)
}
var bb = 'Invariant failed'
function Mt(e, t) {
  if (!e) throw new Error(bb)
}
const df = w.createContext(null)
function $x() {
  return typeof document > 'u'
    ? df
    : window.__TSR_ROUTER_CONTEXT__
      ? window.__TSR_ROUTER_CONTEXT__
      : ((window.__TSR_ROUTER_CONTEXT__ = df), df)
}
function Tr(e) {
  const t = w.useContext($x())
  return e == null || e.warn, t
}
var Vx = { exports: {} },
  Bx = {},
  zx = { exports: {} },
  Ux = {}
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Eo = w
function kb(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Pb = typeof Object.is == 'function' ? Object.is : kb,
  Rb = Eo.useState,
  Ab = Eo.useEffect,
  Ob = Eo.useLayoutEffect,
  Lb = Eo.useDebugValue
function Mb(e, t) {
  var n = t(),
    r = Rb({ inst: { value: n, getSnapshot: t } }),
    i = r[0].inst,
    s = r[1]
  return (
    Ob(
      function () {
        ;(i.value = n), (i.getSnapshot = t), ff(i) && s({ inst: i })
      },
      [e, n, t]
    ),
    Ab(
      function () {
        return (
          ff(i) && s({ inst: i }),
          e(function () {
            ff(i) && s({ inst: i })
          })
        )
      },
      [e]
    ),
    Lb(n),
    n
  )
}
function ff(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !Pb(e, n)
  } catch {
    return !0
  }
}
function Nb(e, t) {
  return t()
}
var Ib =
  typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'
    ? Nb
    : Mb
Ux.useSyncExternalStore = Eo.useSyncExternalStore !== void 0 ? Eo.useSyncExternalStore : Ib
zx.exports = Ux
var Db = zx.exports
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ud = w,
  Fb = Db
function jb(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var $b = typeof Object.is == 'function' ? Object.is : jb,
  Vb = Fb.useSyncExternalStore,
  Bb = ud.useRef,
  zb = ud.useEffect,
  Ub = ud.useMemo,
  Hb = ud.useDebugValue
Bx.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var s = Bb(null)
  if (s.current === null) {
    var o = { hasValue: !1, value: null }
    s.current = o
  } else o = s.current
  s = Ub(
    function () {
      function l(h) {
        if (!u) {
          if (((u = !0), (c = h), (h = r(h)), i !== void 0 && o.hasValue)) {
            var v = o.value
            if (i(v, h)) return (d = v)
          }
          return (d = h)
        }
        if (((v = d), $b(c, h))) return v
        var y = r(h)
        return i !== void 0 && i(v, y) ? v : ((c = h), (d = y))
      }
      var u = !1,
        c,
        d,
        f = n === void 0 ? null : n
      return [
        function () {
          return l(t())
        },
        f === null
          ? void 0
          : function () {
              return l(f())
            }
      ]
    },
    [t, n, r, i]
  )
  var a = Vb(e, s[0], s[1])
  return (
    zb(
      function () {
        ;(o.hasValue = !0), (o.value = a)
      },
      [a]
    ),
    Hb(a),
    a
  )
}
Vx.exports = Bx
var Wb = Vx.exports
class Gb {
  constructor(t, n) {
    ;(this.listeners = new Set()),
      (this._batching = !1),
      (this._flushing = 0),
      (this.subscribe = r => {
        var i, s
        this.listeners.add(r)
        const o =
          (s = (i = this.options) == null ? void 0 : i.onSubscribe) == null ? void 0 : s.call(i, r, this)
        return () => {
          this.listeners.delete(r), o == null || o()
        }
      }),
      (this.setState = r => {
        var i, s, o
        const a = this.state
        ;(this.state = (i = this.options) != null && i.updateFn ? this.options.updateFn(a)(r) : r(a)),
          (o = (s = this.options) == null ? void 0 : s.onUpdate) == null || o.call(s),
          this._flush()
      }),
      (this._flush = () => {
        if (this._batching) return
        const r = ++this._flushing
        this.listeners.forEach(i => {
          this._flushing === r && i()
        })
      }),
      (this.batch = r => {
        if (this._batching) return r()
        ;(this._batching = !0), r(), (this._batching = !1), this._flush()
      }),
      (this.state = t),
      (this.options = n)
  }
}
function qb(e, t = n => n) {
  return Wb.useSyncExternalStoreWithSelector(
    e.subscribe,
    () => e.state,
    () => e.state,
    t,
    Kb
  )
}
function Kb(e, t) {
  if (Object.is(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1
  const n = Object.keys(e)
  if (n.length !== Object.keys(t).length) return !1
  for (let r = 0; r < n.length; r++)
    if (!Object.prototype.hasOwnProperty.call(t, n[r]) || !Object.is(e[n[r]], t[n[r]])) return !1
  return !0
}
const Ut = '__root__'
function Zb(e, t) {
  let n,
    r,
    i,
    s = ''
  for (n in e)
    if ((i = e[n]) !== void 0)
      if (Array.isArray(i))
        for (r = 0; r < i.length; r++)
          s && (s += '&'), (s += encodeURIComponent(n) + '=' + encodeURIComponent(i[r]))
      else s && (s += '&'), (s += encodeURIComponent(n) + '=' + encodeURIComponent(i))
  return '' + s
}
function Tv(e) {
  if (!e) return ''
  const t = decodeURIComponent(e)
  return t === 'false' ? !1 : t === 'true' ? !0 : +t * 0 === 0 && +t + '' === t ? +t : t
}
function Yb(e, t) {
  let n, r
  const i = {},
    s = e.split('&')
  for (; (n = s.shift()); ) {
    const o = n.indexOf('=')
    if (o !== -1) {
      ;(r = n.slice(0, o)), (r = decodeURIComponent(r))
      const a = n.slice(o + 1)
      i[r] !== void 0 ? (i[r] = [].concat(i[r], Tv(a))) : (i[r] = Tv(a))
    } else (r = n), (r = decodeURIComponent(r)), (i[r] = '')
  }
  return i
}
const Qb = Jb(JSON.parse),
  Xb = e4(JSON.stringify, JSON.parse)
function Jb(e) {
  return t => {
    t.substring(0, 1) === '?' && (t = t.substring(1))
    const n = Yb(t)
    for (const r in n) {
      const i = n[r]
      if (typeof i == 'string')
        try {
          n[r] = e(i)
        } catch {}
    }
    return n
  }
}
function e4(e, t) {
  function n(r) {
    if (typeof r == 'object' && r !== null)
      try {
        return e(r)
      } catch {}
    else if (typeof r == 'string' && typeof t == 'function')
      try {
        return t(r), e(r)
      } catch {}
    return r
  }
  return r => {
    ;(r = { ...r }),
      Object.keys(r).forEach(s => {
        const o = r[s]
        typeof o > 'u' || o === void 0 ? delete r[s] : (r[s] = n(o))
      })
    const i = Zb(r).toString()
    return i ? `?${i}` : ''
  }
}
function ba(e) {
  return e[e.length - 1]
}
function t4(e) {
  return typeof e == 'function'
}
function Pi(e, t) {
  return t4(e) ? e(t) : e
}
function ka(e, t) {
  return t.reduce((n, r) => ((n[r] = e[r]), n), {})
}
function ws(e, t) {
  if (e === t) return e
  const n = t,
    r = _v(e) && _v(n)
  if (r || (So(e) && So(n))) {
    const i = r ? e : Object.keys(e),
      s = i.length,
      o = r ? n : Object.keys(n),
      a = o.length,
      l = r ? [] : {}
    let u = 0
    for (let c = 0; c < a; c++) {
      const d = r ? c : o[c]
      ;((!r && i.includes(d)) || r) && e[d] === void 0 && n[d] === void 0
        ? ((l[d] = void 0), u++)
        : ((l[d] = ws(e[d], n[d])), l[d] === e[d] && e[d] !== void 0 && u++)
    }
    return s === a && u === s ? e : l
  }
  return n
}
function So(e) {
  if (!Cv(e)) return !1
  const t = e.constructor
  if (typeof t > 'u') return !0
  const n = t.prototype
  return !(!Cv(n) || !n.hasOwnProperty('isPrototypeOf'))
}
function Cv(e) {
  return Object.prototype.toString.call(e) === '[object Object]'
}
function _v(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length
}
function qs(e, t, n = !1) {
  if (e === t) return !0
  if (typeof e != typeof t) return !1
  if (So(e) && So(t)) {
    const r = Object.keys(e).filter(s => e[s] !== void 0),
      i = Object.keys(t).filter(s => t[s] !== void 0)
    return !n && r.length !== i.length ? !1 : !i.some(s => !(s in e) || !qs(e[s], t[s], n))
  }
  return Array.isArray(e) && Array.isArray(t)
    ? e.length !== t.length
      ? !1
      : !e.some((r, i) => !qs(r, t[i], n))
    : !1
}
const hf = typeof window < 'u' ? w.useLayoutEffect : w.useEffect
function xs(e) {
  let t, n
  const r = new Promise((i, s) => {
    ;(t = i), (n = s)
  })
  return (
    (r.status = 'pending'),
    (r.resolve = i => {
      ;(r.status = 'resolved'), (r.value = i), t(i), e == null || e(i)
    }),
    (r.reject = i => {
      ;(r.status = 'rejected'), n(i)
    }),
    r
  )
}
function bv(e) {
  const t = w.useRef({ value: e, prev: null }),
    n = t.current.value
  return e !== n && (t.current = { value: e, prev: n }), t.current.prev
}
function n4(e, t, n = {}, r = {}) {
  const i = w.useRef(typeof IntersectionObserver == 'function'),
    s = w.useRef(null)
  return (
    w.useEffect(() => {
      if (!(!e.current || !i.current || r.disabled))
        return (
          (s.current = new IntersectionObserver(([o]) => {
            t(o)
          }, n)),
          s.current.observe(e.current),
          () => {
            var o
            ;(o = s.current) == null || o.disconnect()
          }
        )
    }, [t, n, r.disabled, e]),
    s.current
  )
}
function r4(e) {
  const t = w.useRef(null)
  return (
    w.useEffect(() => {
      e && (typeof e == 'function' ? e(t.current) : (e.current = t.current))
    }),
    t
  )
}
function Qr(e) {
  return cd(e.filter(t => t !== void 0).join('/'))
}
function cd(e) {
  return e.replace(/\/{2,}/g, '/')
}
function Vm(e) {
  return e === '/' ? e : e.replace(/^\/{1,}/, '')
}
function Ri(e) {
  return e === '/' ? e : e.replace(/\/{1,}$/, '')
}
function i4(e) {
  return Ri(Vm(e))
}
function _c(e, t) {
  return e.endsWith('/') && e !== '/' && e !== `${t}/` ? e.slice(0, -1) : e
}
function s4(e, t, n) {
  return _c(e, n) === _c(t, n)
}
function o4({ basepath: e, base: t, to: n, trailingSlash: r = 'never' }) {
  var i, s
  ;(t = bc(e, t)), (n = bc(e, n))
  let o = To(t)
  const a = To(n)
  o.length > 1 && ((i = ba(o)) == null ? void 0 : i.value) === '/' && o.pop(),
    a.forEach((u, c) => {
      u.value === '/'
        ? c
          ? c === a.length - 1 && o.push(u)
          : (o = [u])
        : u.value === '..'
          ? o.pop()
          : u.value === '.' || o.push(u)
    }),
    o.length > 1 &&
      (((s = ba(o)) == null ? void 0 : s.value) === '/'
        ? r === 'never' && o.pop()
        : r === 'always' && o.push({ type: 'pathname', value: '/' }))
  const l = Qr([e, ...o.map(u => u.value)])
  return cd(l)
}
function To(e) {
  if (!e) return []
  e = cd(e)
  const t = []
  if ((e.slice(0, 1) === '/' && ((e = e.substring(1)), t.push({ type: 'pathname', value: '/' })), !e))
    return t
  const n = e.split('/').filter(Boolean)
  return (
    t.push(
      ...n.map(r =>
        r === '$' || r === '*'
          ? { type: 'wildcard', value: r }
          : r.charAt(0) === '$'
            ? { type: 'param', value: r }
            : { type: 'pathname', value: decodeURI(r) }
      )
    ),
    e.slice(-1) === '/' && ((e = e.substring(1)), t.push({ type: 'pathname', value: '/' })),
    t
  )
}
function pf({ path: e, params: t, leaveWildcards: n, leaveParams: r }) {
  const i = To(e),
    s = {}
  for (const [o, a] of Object.entries(t)) {
    const l = typeof a == 'string'
    ;['*', '_splat'].includes(o) ? (s[o] = l ? encodeURI(a) : a) : (s[o] = l ? encodeURIComponent(a) : a)
  }
  return Qr(
    i.map(o => {
      if (o.type === 'wildcard') {
        const a = s._splat
        return n ? `${o.value}${a ?? ''}` : a
      }
      if (o.type === 'param') {
        if (r) {
          const a = s[o.value]
          return `${o.value}${a ?? ''}`
        }
        return s[o.value.substring(1)] ?? 'undefined'
      }
      return o.value
    })
  )
}
function yu(e, t, n) {
  const r = a4(e, t, n)
  if (!(n.to && !r)) return r ?? {}
}
function bc(e, t) {
  switch (!0) {
    case e === '/':
      return t
    case t === e:
      return ''
    case t.length < e.length:
      return t
    case t[e.length] !== '/':
      return t
    case t.startsWith(e):
      return t.slice(e.length)
    default:
      return t
  }
}
function a4(e, t, n) {
  t = bc(e, t)
  const r = bc(e, `${n.to ?? '$'}`),
    i = To(t),
    s = To(r)
  t.startsWith('/') || i.unshift({ type: 'pathname', value: '/' }),
    r.startsWith('/') || s.unshift({ type: 'pathname', value: '/' })
  const o = {}
  return (() => {
    for (let l = 0; l < Math.max(i.length, s.length); l++) {
      const u = i[l],
        c = s[l],
        d = l >= i.length - 1,
        f = l >= s.length - 1
      if (c) {
        if (c.type === 'wildcard') {
          const h = decodeURI(Qr(i.slice(l).map(v => v.value)))
          return (o['*'] = h), (o._splat = h), !0
        }
        if (c.type === 'pathname') {
          if (c.value === '/' && !(u != null && u.value)) return !0
          if (u) {
            if (n.caseSensitive) {
              if (c.value !== u.value) return !1
            } else if (c.value.toLowerCase() !== u.value.toLowerCase()) return !1
          }
        }
        if (!u) return !1
        if (c.type === 'param') {
          if (u.value === '/') return !1
          u.value.charAt(0) !== '$' && (o[c.value.substring(1)] = decodeURIComponent(u.value))
        }
      }
      if (!d && f)
        return (
          (o['**'] = Qr(i.slice(l + 1).map(h => h.value))),
          !!n.fuzzy && (c == null ? void 0 : c.value) !== '/'
        )
    }
    return !0
  })()
    ? o
    : void 0
}
function wi(e) {
  return !!(e != null && e.isRedirect)
}
function kv(e) {
  return !!(e != null && e.isRedirect) && e.href
}
function Bm(e) {
  const t = e.errorComponent ?? dd
  return P.jsx(l4, {
    getResetKey: e.getResetKey,
    onCatch: e.onCatch,
    children: ({ error: n, reset: r }) => (n ? w.createElement(t, { error: n, reset: r }) : e.children)
  })
}
class l4 extends w.Component {
  constructor() {
    super(...arguments), (this.state = { error: null })
  }
  static getDerivedStateFromProps(t) {
    return { resetKey: t.getResetKey() }
  }
  static getDerivedStateFromError(t) {
    return { error: t }
  }
  reset() {
    this.setState({ error: null })
  }
  componentDidUpdate(t, n) {
    n.error && n.resetKey !== this.state.resetKey && this.reset()
  }
  componentDidCatch(t, n) {
    this.props.onCatch && this.props.onCatch(t, n)
  }
  render() {
    return this.props.children({
      error: this.state.resetKey !== this.props.getResetKey() ? null : this.state.error,
      reset: () => {
        this.reset()
      }
    })
  }
}
function dd({ error: e }) {
  const [t, n] = w.useState(!1)
  return P.jsxs('div', {
    style: { padding: '.5rem', maxWidth: '100%' },
    children: [
      P.jsxs('div', {
        style: { display: 'flex', alignItems: 'center', gap: '.5rem' },
        children: [
          P.jsx('strong', { style: { fontSize: '1rem' }, children: 'Something went wrong!' }),
          P.jsx('button', {
            style: {
              appearance: 'none',
              fontSize: '.6em',
              border: '1px solid currentColor',
              padding: '.1rem .2rem',
              fontWeight: 'bold',
              borderRadius: '.25rem'
            },
            onClick: () => n(r => !r),
            children: t ? 'Hide Error' : 'Show Error'
          })
        ]
      }),
      P.jsx('div', { style: { height: '.25rem' } }),
      t
        ? P.jsx('div', {
            children: P.jsx('pre', {
              style: {
                fontSize: '.7em',
                border: '1px solid red',
                borderRadius: '.25rem',
                padding: '.3rem',
                color: 'red',
                overflow: 'auto'
              },
              children: e.message ? P.jsx('code', { children: e.message }) : null
            })
          })
        : null
    ]
  })
}
function qt(e) {
  const t = Tr({ warn: (e == null ? void 0 : e.router) === void 0 })
  return qb(((e == null ? void 0 : e.router) || t).__store, e == null ? void 0 : e.select)
}
function $n(e) {
  return !!(e != null && e.isNotFound)
}
function u4(e) {
  const t = qt({ select: n => `not-found-${n.location.pathname}-${n.status}` })
  return P.jsx(Bm, {
    getResetKey: () => t,
    onCatch: (n, r) => {
      var i
      if ($n(n)) (i = e.onCatch) == null || i.call(e, n, r)
      else throw n
    },
    errorComponent: ({ error: n }) => {
      var r
      return (r = e.fallback) == null ? void 0 : r.call(e, n)
    },
    children: e.children
  })
}
function c4() {
  return P.jsx('p', { children: 'Not Found' })
}
const d4 = {
    stringify: e =>
      JSON.stringify(e, function (n, r) {
        const i = this[n],
          s = Pv.find(o => o.stringifyCondition(i))
        return s ? s.stringify(i) : r
      }),
    parse: e =>
      JSON.parse(e, function (n, r) {
        const i = this[n],
          s = Pv.find(o => o.parseCondition(i))
        return s ? s.parse(i) : r
      })
  },
  Pv = [
    {
      stringifyCondition: e => e instanceof Date,
      stringify: e => ({ $date: e.toISOString() }),
      parseCondition: e => So(e) && e.$date,
      parse: e => new Date(e.$date)
    },
    {
      stringifyCondition: e => e === void 0,
      stringify: () => ({ $undefined: '' }),
      parseCondition: e => So(e) && e.$undefined === '',
      parse: () => {}
    }
  ],
  f4 = ['component', 'errorComponent', 'pendingComponent', 'notFoundComponent']
function h4(e) {
  return new p4(e)
}
class p4 {
  constructor(t) {
    ;(this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`),
      (this.resetNextScroll = !0),
      (this.shouldViewTransition = void 0),
      (this.subscribers = new Set()),
      (this.startReactTransition = n => n()),
      (this.update = n => {
        n.notFoundRoute &&
          console.warn(
            'The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/guide/not-found-errors#migrating-from-notfoundroute for more info.'
          )
        const r = this.options
        ;(this.options = { ...this.options, ...n }),
          (this.isServer = this.options.isServer ?? typeof document > 'u'),
          (!this.basepath || (n.basepath && n.basepath !== r.basepath)) &&
            (n.basepath === void 0 || n.basepath === '' || n.basepath === '/'
              ? (this.basepath = '/')
              : (this.basepath = `/${i4(n.basepath)}`)),
          (!this.history || (this.options.history && this.options.history !== this.history)) &&
            ((this.history =
              this.options.history ??
              (this.isServer ? _b({ initialEntries: [this.basepath || '/'] }) : Cb())),
            (this.latestLocation = this.parseLocation())),
          this.options.routeTree !== this.routeTree &&
            ((this.routeTree = this.options.routeTree), this.buildRouteTree()),
          this.__store ||
            (this.__store = new Gb(v4(this.latestLocation), {
              onUpdate: () => {
                this.__store.state = {
                  ...this.state,
                  cachedMatches: this.state.cachedMatches.filter(i => !['redirected'].includes(i.status))
                }
              }
            }))
      }),
      (this.buildRouteTree = () => {
        ;(this.routesById = {}), (this.routesByPath = {})
        const n = this.options.notFoundRoute
        n && (n.init({ originalIndex: 99999999999 }), (this.routesById[n.id] = n))
        const r = o => {
          o.forEach((a, l) => {
            a.init({ originalIndex: l })
            const u = this.routesById[a.id]
            if (
              (Mt(!u, `Duplicate routes found with id: ${String(a.id)}`),
              (this.routesById[a.id] = a),
              !a.isRoot && a.path)
            ) {
              const d = Ri(a.fullPath)
              ;(!this.routesByPath[d] || a.fullPath.endsWith('/')) && (this.routesByPath[d] = a)
            }
            const c = a.children
            c != null && c.length && r(c)
          })
        }
        r([this.routeTree])
        const i = []
        Object.values(this.routesById).forEach((o, a) => {
          var l
          if (o.isRoot || !o.path) return
          const u = Vm(o.fullPath),
            c = To(u)
          for (; c.length > 1 && ((l = c[0]) == null ? void 0 : l.value) === '/'; ) c.shift()
          const d = c.map(f =>
            f.value === '/' ? 0.75 : f.type === 'param' ? 0.5 : f.type === 'wildcard' ? 0.25 : 1
          )
          i.push({ child: o, trimmed: u, parsed: c, index: a, scores: d })
        }),
          (this.flatRoutes = i
            .sort((o, a) => {
              const l = Math.min(o.scores.length, a.scores.length)
              for (let u = 0; u < l; u++)
                if (o.scores[u] !== a.scores[u]) return a.scores[u] - o.scores[u]
              if (o.scores.length !== a.scores.length) return a.scores.length - o.scores.length
              for (let u = 0; u < l; u++)
                if (o.parsed[u].value !== a.parsed[u].value)
                  return o.parsed[u].value > a.parsed[u].value ? 1 : -1
              return o.index - a.index
            })
            .map((o, a) => ((o.child.rank = a), o.child)))
      }),
      (this.subscribe = (n, r) => {
        const i = { eventType: n, fn: r }
        return (
          this.subscribers.add(i),
          () => {
            this.subscribers.delete(i)
          }
        )
      }),
      (this.emit = n => {
        this.subscribers.forEach(r => {
          r.eventType === n.type && r.fn(n)
        })
      }),
      (this.parseLocation = n => {
        const r = ({ pathname: a, search: l, hash: u, state: c }) => {
            const d = this.options.parseSearch(l),
              f = this.options.stringifySearch(d)
            return {
              pathname: a,
              searchStr: f,
              search: ws(n == null ? void 0 : n.search, d),
              hash: u.split('#').reverse()[0] ?? '',
              href: `${a}${f}${u}`,
              state: ws(n == null ? void 0 : n.state, c)
            }
          },
          i = r(this.history.location),
          { __tempLocation: s, __tempKey: o } = i.state
        if (s && (!o || o === this.tempLocationKey)) {
          const a = r(s)
          return (a.state.key = i.state.key), delete a.state.__tempLocation, { ...a, maskedLocation: i }
        }
        return i
      }),
      (this.resolvePathWithBase = (n, r) =>
        o4({ basepath: this.basepath, base: n, to: cd(r), trailingSlash: this.options.trailingSlash })),
      (this.cancelMatch = n => {
        const r = this.getMatch(n)
        r && (r.abortController.abort(), clearTimeout(r.pendingTimeout))
      }),
      (this.cancelMatches = () => {
        var n
        ;(n = this.state.pendingMatches) == null ||
          n.forEach(r => {
            this.cancelMatch(r.id)
          })
      }),
      (this.buildLocation = n => {
        const r = (s = {}, o) => {
            var a, l, u, c
            const d = s._fromLocation ? this.matchRoutes(s._fromLocation) : this.state.matches,
              f =
                s.from != null
                  ? d.find(M =>
                      yu(this.basepath, Ri(M.pathname), { to: s.from, caseSensitive: !1, fuzzy: !1 })
                    )
                  : void 0,
              h = (f == null ? void 0 : f.pathname) || this.latestLocation.pathname
            Mt(s.from == null || f != null, 'Could not find match for from: ' + s.from)
            const v = this.state.pendingMatches
                ? (a = ba(this.state.pendingMatches)) == null
                  ? void 0
                  : a.search
                : ((l = ba(d)) == null ? void 0 : l.search) || this.latestLocation.search,
              y = o == null ? void 0 : o.filter(M => d.find(W => W.routeId === M.routeId)),
              x =
                this.routesById[
                  (u = y == null ? void 0 : y.find(M => M.pathname === h)) == null ? void 0 : u.routeId
                ]
            let p = s.to
              ? this.resolvePathWithBase(h, `${s.to}`)
              : this.resolvePathWithBase(h, (x == null ? void 0 : x.to) ?? h)
            const m = { ...((c = ba(d)) == null ? void 0 : c.params) }
            let g = (s.params ?? !0) === !0 ? m : { ...m, ...Pi(s.params, m) }
            Object.keys(g).length > 0 &&
              (o == null ||
                o
                  .map(M => {
                    var W
                    const oe = this.looseRoutesById[M.routeId]
                    return (
                      ((W = oe == null ? void 0 : oe.options.params) == null ? void 0 : W.stringify) ??
                      oe.options.stringifyParams
                    )
                  })
                  .filter(Boolean)
                  .forEach(M => {
                    g = { ...g, ...M(g) }
                  })),
              (p = pf({ path: p, params: g ?? {}, leaveWildcards: !1, leaveParams: n.leaveParams }))
            const E =
                (y == null
                  ? void 0
                  : y
                      .map(M => this.looseRoutesById[M.routeId].options.preSearchFilters ?? [])
                      .flat()
                      .filter(Boolean)) ?? [],
              S =
                (y == null
                  ? void 0
                  : y
                      .map(M => this.looseRoutesById[M.routeId].options.postSearchFilters ?? [])
                      .flat()
                      .filter(Boolean)) ?? [],
              C = E.length ? E.reduce((M, W) => W(M), v) : v,
              k = s.search === !0 ? C : s.search ? Pi(s.search, C) : E.length ? C : {},
              T = S.length ? S.reduce((M, W) => W(M), k) : k,
              A = ws(v, T),
              O = this.options.stringifySearch(A),
              D =
                s.hash === !0
                  ? this.latestLocation.hash
                  : s.hash
                    ? Pi(s.hash, this.latestLocation.hash)
                    : void 0,
              Z = D ? `#${D}` : ''
            let re =
              s.state === !0
                ? this.latestLocation.state
                : s.state
                  ? Pi(s.state, this.latestLocation.state)
                  : {}
            return (
              (re = ws(this.latestLocation.state, re)),
              {
                pathname: p,
                search: A,
                searchStr: O,
                state: re,
                hash: D ?? '',
                href: `${p}${O}${Z}`,
                unmaskOnReload: s.unmaskOnReload
              }
            )
          },
          i = (s = {}, o) => {
            var a
            const l = r(s)
            let u = o ? r(o) : void 0
            if (!u) {
              let v = {}
              const y =
                (a = this.options.routeMasks) == null
                  ? void 0
                  : a.find(x => {
                      const p = yu(this.basepath, l.pathname, {
                        to: x.from,
                        caseSensitive: !1,
                        fuzzy: !1
                      })
                      return p ? ((v = p), !0) : !1
                    })
              if (y) {
                const { from: x, ...p } = y
                ;(o = { ...ka(n, ['from']), ...p, params: v }), (u = r(o))
              }
            }
            const c = this.matchRoutes(l),
              d = u ? this.matchRoutes(u) : void 0,
              f = u ? r(o, d) : void 0,
              h = r(s, c)
            return f && (h.maskedLocation = f), h
          }
        return n.mask ? i(n, { ...ka(n, ['from']), ...n.mask }) : i(n)
      }),
      (this.commitLocation = ({ viewTransition: n, ignoreBlocker: r, ...i }) => {
        const s = () => {
            i.state.key = this.latestLocation.state.key
            const l = qs(i.state, this.latestLocation.state)
            return delete i.state.key, l
          },
          o = this.latestLocation.href === i.href,
          a = this.commitLocationPromise
        if (
          ((this.commitLocationPromise = xs(() => {
            a == null || a.resolve()
          })),
          o && s())
        )
          this.load()
        else {
          let { maskedLocation: l, ...u } = i
          l &&
            ((u = {
              ...l,
              state: {
                ...l.state,
                __tempKey: void 0,
                __tempLocation: {
                  ...u,
                  search: u.searchStr,
                  state: { ...u.state, __tempKey: void 0, __tempLocation: void 0, key: void 0 }
                }
              }
            }),
            (u.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) &&
              (u.state.__tempKey = this.tempLocationKey)),
            (this.shouldViewTransition = n),
            this.history[i.replace ? 'replace' : 'push'](u.href, u.state, { ignoreBlocker: r })
        }
        return (
          (this.resetNextScroll = i.resetScroll ?? !0),
          this.history.subscribers.size || this.load(),
          this.commitLocationPromise
        )
      }),
      (this.buildAndCommitLocation = ({
        replace: n,
        resetScroll: r,
        viewTransition: i,
        ignoreBlocker: s,
        ...o
      } = {}) => {
        const a = o.href
        if (a) {
          const u = Cc(a, {})
          ;(o.to = u.pathname), (o.search = this.options.parseSearch(u.search)), (o.hash = u.hash)
        }
        const l = this.buildLocation(o)
        return this.commitLocation({
          ...l,
          viewTransition: i,
          replace: n,
          resetScroll: r,
          ignoreBlocker: s
        })
      }),
      (this.navigate = ({ to: n, __isRedirect: r, ...i }) => {
        const s = String(n)
        let o
        try {
          new URL(`${s}`), (o = !0)
        } catch {}
        return Mt(!o), this.buildAndCommitLocation({ ...i, to: n })
      }),
      (this.load = async () => {
        this.latestLocation = this.parseLocation(this.latestLocation)
        let n, r, i
        for (
          i = new Promise(s => {
            this.startReactTransition(async () => {
              var o
              try {
                const a = this.latestLocation,
                  l = this.state.resolvedLocation,
                  u = l.href !== a.href
                this.cancelMatches()
                let c
                this.__store.batch(() => {
                  ;(c = this.matchRoutes(a)),
                    this.__store.setState(d => ({
                      ...d,
                      status: 'pending',
                      isLoading: !0,
                      location: a,
                      pendingMatches: c,
                      cachedMatches: d.cachedMatches.filter(f => !c.find(h => h.id === f.id))
                    }))
                }),
                  this.state.redirect ||
                    this.emit({
                      type: 'onBeforeNavigate',
                      fromLocation: l,
                      toLocation: a,
                      pathChanged: u
                    }),
                  this.emit({ type: 'onBeforeLoad', fromLocation: l, toLocation: a, pathChanged: u }),
                  await this.loadMatches({
                    matches: c,
                    location: a,
                    onReady: async () => {
                      this.startViewTransition(async () => {
                        let d, f, h
                        this.__store.batch(() => {
                          this.__store.setState(v => {
                            const y = v.matches,
                              x = v.pendingMatches || v.matches
                            return (
                              (d = y.filter(p => !x.find(m => m.id === p.id))),
                              (f = x.filter(p => !y.find(m => m.id === p.id))),
                              (h = y.filter(p => x.find(m => m.id === p.id))),
                              {
                                ...v,
                                isLoading: !1,
                                loadedAt: Date.now(),
                                matches: x,
                                pendingMatches: void 0,
                                cachedMatches: [
                                  ...v.cachedMatches,
                                  ...d.filter(p => p.status !== 'error')
                                ]
                              }
                            )
                          }),
                            this.cleanCache()
                        }),
                          [
                            [d, 'onLeave'],
                            [f, 'onEnter'],
                            [h, 'onStay']
                          ].forEach(([v, y]) => {
                            v.forEach(x => {
                              var p, m
                              ;(m = (p = this.looseRoutesById[x.routeId].options)[y]) == null ||
                                m.call(p, x)
                            })
                          })
                      })
                    }
                  })
              } catch (a) {
                kv(a)
                  ? ((n = a), this.isServer || this.navigate({ ...a, replace: !0, __isRedirect: !0 }))
                  : $n(a) && (r = a),
                  this.__store.setState(l => ({
                    ...l,
                    statusCode: n
                      ? n.statusCode
                      : r
                        ? 404
                        : l.matches.some(u => u.status === 'error')
                          ? 500
                          : 200,
                    redirect: n
                  }))
              }
              this.latestLoadPromise === i &&
                ((o = this.commitLocationPromise) == null || o.resolve(),
                (this.latestLoadPromise = void 0),
                (this.commitLocationPromise = void 0)),
                s()
            })
          }),
            this.latestLoadPromise = i,
            await i;
          this.latestLoadPromise && i !== this.latestLoadPromise;

        )
          await this.latestLoadPromise
      }),
      (this.startViewTransition = n => {
        var r, i
        const s = this.shouldViewTransition ?? this.options.defaultViewTransition
        delete this.shouldViewTransition,
          ((i =
            (r = s && typeof document < 'u' ? document : void 0) == null
              ? void 0
              : r.startViewTransition) != null &&
            i.call(r, n)) ||
            n()
      }),
      (this.updateMatch = (n, r) => {
        var i
        let s
        const o = (i = this.state.pendingMatches) == null ? void 0 : i.find(u => u.id === n),
          a = this.state.matches.find(u => u.id === n),
          l = o ? 'pendingMatches' : a ? 'matches' : 'cachedMatches'
        return (
          this.__store.setState(u => {
            var c
            return { ...u, [l]: (c = u[l]) == null ? void 0 : c.map(d => (d.id === n ? (s = r(d)) : d)) }
          }),
          s
        )
      }),
      (this.getMatch = n =>
        [...this.state.cachedMatches, ...(this.state.pendingMatches ?? []), ...this.state.matches].find(
          r => r.id === n
        )),
      (this.loadMatches = async ({
        location: n,
        matches: r,
        preload: i,
        onReady: s,
        updateMatch: o = this.updateMatch
      }) => {
        let a,
          l = !1
        const u = async () => {
          l || ((l = !0), await (s == null ? void 0 : s()))
        }
        !this.isServer && !this.state.matches.length && u()
        const c = (d, f) => {
          var h, v, y
          if (kv(f)) throw f
          if (wi(f) || $n(f)) {
            if (
              (o(d.id, x => ({
                ...x,
                status: wi(f) ? 'redirected' : $n(f) ? 'notFound' : 'error',
                isFetching: !1,
                error: f,
                beforeLoadPromise: void 0,
                loaderPromise: void 0
              })),
              f.routeId || (f.routeId = d.routeId),
              (h = d.beforeLoadPromise) == null || h.resolve(),
              (v = d.loaderPromise) == null || v.resolve(),
              (y = d.loadPromise) == null || y.resolve(),
              wi(f))
            )
              throw ((l = !0), (f = this.resolveRedirect({ ...f, _fromLocation: n })), f)
            if ($n(f)) throw (this._handleNotFound(r, f, { updateMatch: o }), f)
          }
        }
        try {
          await new Promise((d, f) => {
            ;(async () => {
              var h, v, y
              try {
                const x = (g, E, S) => {
                  var C, k
                  const { id: T, routeId: A } = r[g],
                    O = this.looseRoutesById[A]
                  if (E instanceof Promise) throw E
                  ;(E.routerCode = S), (a = a ?? g), c(this.getMatch(T), E)
                  try {
                    ;(k = (C = O.options).onError) == null || k.call(C, E)
                  } catch (D) {
                    ;(E = D), c(this.getMatch(T), E)
                  }
                  o(T, D => {
                    var Z
                    return (
                      (Z = D.beforeLoadPromise) == null || Z.resolve(),
                      {
                        ...D,
                        error: E,
                        status: 'error',
                        isFetching: !1,
                        updatedAt: Date.now(),
                        abortController: new AbortController(),
                        beforeLoadPromise: void 0
                      }
                    )
                  })
                }
                for (const [g, { id: E, routeId: S }] of r.entries()) {
                  const C = this.getMatch(E),
                    k = (h = r[g - 1]) == null ? void 0 : h.id,
                    T = this.looseRoutesById[S],
                    A = T.options.pendingMs ?? this.options.defaultPendingMs,
                    O = !!(
                      s &&
                      !this.isServer &&
                      !i &&
                      (T.options.loader || T.options.beforeLoad) &&
                      typeof A == 'number' &&
                      A !== 1 / 0 &&
                      (T.options.pendingComponent ?? this.options.defaultPendingComponent)
                    )
                  if (C.beforeLoadPromise || C.loaderPromise)
                    O &&
                      setTimeout(() => {
                        try {
                          u()
                        } catch {}
                      }, A),
                      await C.beforeLoadPromise
                  else {
                    try {
                      o(E, q => ({
                        ...q,
                        loadPromise: xs(() => {
                          var F
                          ;(F = q.loadPromise) == null || F.resolve()
                        }),
                        beforeLoadPromise: xs()
                      }))
                      const D = new AbortController()
                      let Z
                      O &&
                        (Z = setTimeout(() => {
                          try {
                            u()
                          } catch {}
                        }, A))
                      const { paramsError: re, searchError: M } = this.getMatch(E)
                      re && x(g, re, 'PARSE_PARAMS'), M && x(g, M, 'VALIDATE_SEARCH')
                      const W = () => (k ? this.getMatch(k).context : (this.options.context ?? {}))
                      o(E, q => ({
                        ...q,
                        isFetching: 'beforeLoad',
                        fetchCount: q.fetchCount + 1,
                        abortController: D,
                        pendingTimeout: Z,
                        context: { ...W(), ...q.__routeContext, ...q.__beforeLoadContext }
                      }))
                      const { search: oe, params: ee, context: R, cause: $ } = this.getMatch(E),
                        z = {
                          search: oe,
                          abortController: D,
                          params: ee,
                          preload: !!i,
                          context: R,
                          location: n,
                          navigate: q => this.navigate({ ...q, _fromLocation: n }),
                          buildLocation: this.buildLocation,
                          cause: i ? 'preload' : $,
                          matches: r
                        }
                      let V =
                        (await ((y = (v = T.options).beforeLoad) == null ? void 0 : y.call(v, z))) ?? {}
                      this.serializeLoaderData &&
                        (V = this.serializeLoaderData('__beforeLoadContext', V, {
                          router: this,
                          match: this.getMatch(E)
                        })),
                        (wi(V) || $n(V)) && x(g, V, 'BEFORE_LOAD'),
                        o(E, q => ({
                          ...q,
                          __beforeLoadContext: V,
                          context: { ...W(), ...q.__routeContext, ...V },
                          abortController: D
                        }))
                    } catch (D) {
                      x(g, D, 'BEFORE_LOAD')
                    }
                    o(E, D => {
                      var Z
                      return (
                        (Z = D.beforeLoadPromise) == null || Z.resolve(),
                        { ...D, beforeLoadPromise: void 0, isFetching: !1 }
                      )
                    })
                  }
                }
                const p = r.slice(0, a),
                  m = []
                p.forEach(({ id: g, routeId: E }, S) => {
                  m.push(
                    (async () => {
                      const { loaderPromise: C } = this.getMatch(g)
                      let k = !1
                      if (C) await C
                      else {
                        const T = m[S - 1],
                          A = this.looseRoutesById[E],
                          O = () => {
                            const {
                              params: z,
                              loaderDeps: V,
                              abortController: q,
                              context: F,
                              cause: ye
                            } = this.getMatch(g)
                            return {
                              params: z,
                              deps: V,
                              preload: !!i,
                              parentMatchPromise: T,
                              abortController: q,
                              context: F,
                              location: n,
                              navigate: ne => this.navigate({ ...ne, _fromLocation: n }),
                              cause: i ? 'preload' : ye,
                              route: A
                            }
                          },
                          D = Date.now() - this.getMatch(g).updatedAt,
                          Z = i
                            ? (A.options.preloadStaleTime ?? this.options.defaultPreloadStaleTime ?? 3e4)
                            : (A.options.staleTime ?? this.options.defaultStaleTime ?? 0),
                          re = A.options.shouldReload,
                          M = typeof re == 'function' ? re(O()) : re
                        o(g, z => ({
                          ...z,
                          loaderPromise: xs(),
                          preload: !!i && !this.state.matches.find(V => V.id === g)
                        }))
                        const W = async () => {
                            var z, V, q, F, ye, ne, Ce, Ee
                            try {
                              const Oe = async () => {
                                const Pe = this.getMatch(g)
                                Pe.minPendingPromise && (await Pe.minPendingPromise)
                              }
                              try {
                                A._lazyPromise =
                                  A._lazyPromise ||
                                  (A.lazyFn
                                    ? A.lazyFn().then(te => {
                                        Object.assign(A.options, te.options)
                                      })
                                    : Promise.resolve())
                                const Pe =
                                  this.getMatch(g).componentsPromise ||
                                  A._lazyPromise.then(() =>
                                    Promise.all(
                                      f4.map(async te => {
                                        const Q = A.options[te]
                                        Q != null && Q.preload && (await Q.preload())
                                      })
                                    )
                                  )
                                o(g, te => ({ ...te, isFetching: 'loader', componentsPromise: Pe })),
                                  await A._lazyPromise
                                let Ye = await ((V = (z = A.options).loader) == null
                                  ? void 0
                                  : V.call(z, O()))
                                this.serializeLoaderData &&
                                  (Ye = this.serializeLoaderData('loaderData', Ye, {
                                    router: this,
                                    match: this.getMatch(g)
                                  })),
                                  c(this.getMatch(g), Ye),
                                  await Oe()
                                const yt =
                                    (F = (q = A.options).meta) == null
                                      ? void 0
                                      : F.call(q, {
                                          matches: r,
                                          match: this.getMatch(g),
                                          params: this.getMatch(g).params,
                                          loaderData: Ye
                                        }),
                                  $t =
                                    (ne = (ye = A.options).headers) == null
                                      ? void 0
                                      : ne.call(ye, { loaderData: Ye })
                                o(g, te => ({
                                  ...te,
                                  error: void 0,
                                  status: 'success',
                                  isFetching: !1,
                                  updatedAt: Date.now(),
                                  loaderData: Ye,
                                  meta: yt,
                                  headers: $t
                                }))
                              } catch (Pe) {
                                let Ye = Pe
                                await Oe(), c(this.getMatch(g), Pe)
                                try {
                                  ;(Ee = (Ce = A.options).onError) == null || Ee.call(Ce, Pe)
                                } catch (yt) {
                                  ;(Ye = yt), c(this.getMatch(g), yt)
                                }
                                o(g, yt => ({ ...yt, error: Ye, status: 'error', isFetching: !1 }))
                              }
                              await this.getMatch(g).componentsPromise
                            } catch (Oe) {
                              c(this.getMatch(g), Oe)
                            }
                          },
                          { status: oe, invalid: ee } = this.getMatch(g)
                        ;(k = oe === 'success' && (ee || (M ?? D > Z))),
                          (i && A.options.preload === !1) ||
                            (k
                              ? (async () => {
                                  try {
                                    await W()
                                  } catch {}
                                })()
                              : oe !== 'success' && (await W()))
                        const { loaderPromise: R, loadPromise: $ } = this.getMatch(g)
                        R == null || R.resolve(), $ == null || $.resolve()
                      }
                      o(g, T => ({ ...T, isFetching: k ? T.isFetching : !1, loaderPromise: void 0 }))
                    })()
                  )
                }),
                  await Promise.all(m),
                  d()
              } catch (x) {
                f(x)
              }
            })()
          }),
            await u()
        } catch (d) {
          if (wi(d) || $n(d)) throw ($n(d) && !i && (await u()), d)
        }
        return r
      }),
      (this.invalidate = () => {
        const n = r => ({
          ...r,
          invalid: !0,
          ...(r.status === 'error' ? { status: 'pending', error: void 0 } : {})
        })
        return (
          this.__store.setState(r => {
            var i
            return {
              ...r,
              matches: r.matches.map(n),
              cachedMatches: r.cachedMatches.map(n),
              pendingMatches: (i = r.pendingMatches) == null ? void 0 : i.map(n)
            }
          }),
          this.load()
        )
      }),
      (this.resolveRedirect = n => {
        const r = n
        return r.href || (r.href = this.buildLocation(r).href), r
      }),
      (this.cleanCache = () => {
        this.__store.setState(n => ({
          ...n,
          cachedMatches: n.cachedMatches.filter(r => {
            const i = this.looseRoutesById[r.routeId]
            if (!i.options.loader) return !1
            const s =
              (r.preload
                ? (i.options.preloadGcTime ?? this.options.defaultPreloadGcTime)
                : (i.options.gcTime ?? this.options.defaultGcTime)) ?? 5 * 60 * 1e3
            return r.status !== 'error' && Date.now() - r.updatedAt < s
          })
        }))
      }),
      (this.preloadRoute = async n => {
        const r = this.buildLocation(n)
        let i = this.matchRoutes(r, { throwOnError: !0, preload: !0 })
        const s = Object.fromEntries(
          [...this.state.matches, ...(this.state.pendingMatches ?? []), ...this.state.cachedMatches].map(
            a => [a.id, !0]
          )
        )
        this.__store.batch(() => {
          i.forEach(a => {
            s[a.id] || this.__store.setState(l => ({ ...l, cachedMatches: [...l.cachedMatches, a] }))
          })
        })
        const o = new Set([...this.state.matches, ...(this.state.pendingMatches ?? [])].map(a => a.id))
        try {
          return (
            (i = await this.loadMatches({
              matches: i,
              location: r,
              preload: !0,
              updateMatch: (a, l) => {
                o.has(a) ? (i = i.map(u => (u.id === a ? l(u) : u))) : this.updateMatch(a, l)
              }
            })),
            i
          )
        } catch (a) {
          if (wi(a)) return await this.preloadRoute({ ...a, _fromLocation: r })
          console.error(a)
          return
        }
      }),
      (this.matchRoute = (n, r) => {
        const i = {
            ...n,
            to: n.to ? this.resolvePathWithBase(n.from || '', n.to) : void 0,
            params: n.params || {},
            leaveParams: !0
          },
          s = this.buildLocation(i)
        if (r != null && r.pending && this.state.status !== 'pending') return !1
        const a = ((r == null ? void 0 : r.pending) === void 0 ? !this.state.isLoading : r.pending)
            ? this.latestLocation
            : this.state.resolvedLocation,
          l = yu(this.basepath, a.pathname, { ...r, to: s.pathname })
        return !l || (n.params && !qs(l, n.params, !0))
          ? !1
          : l && ((r == null ? void 0 : r.includeSearch) ?? !0)
            ? qs(a.search, s.search, !0)
              ? l
              : !1
            : l
      }),
      (this.dehydrate = () => {
        var n
        const r = ((n = this.options.errorSerializer) == null ? void 0 : n.serialize) ?? y4
        return {
          state: {
            dehydratedMatches: this.state.matches.map(i => ({
              ...ka(i, ['id', 'status', 'updatedAt']),
              error: i.error ? { data: r(i.error), __isServerError: !0 } : void 0
            }))
          },
          manifest: this.manifest
        }
      }),
      (this.hydrate = () => {
        var n, r, i
        let s
        typeof document < 'u' &&
          (s = this.options.transformer.parse((n = window.__TSR__) == null ? void 0 : n.dehydrated)),
          Mt(s),
          (this.dehydratedData = s.payload),
          (i = (r = this.options).hydrate) == null || i.call(r, s.payload)
        const o = s.router.state,
          a = this.matchRoutes(this.state.location).map(l => {
            const u = o.dehydratedMatches.find(c => c.id === l.id)
            return (
              Mt(u, `Could not find a client-side match for dehydrated match with id: ${l.id}!`),
              { ...l, ...u }
            )
          })
        this.__store.setState(l => ({ ...l, matches: a })), (this.manifest = s.router.manifest)
      }),
      (this.injectedHtml = []),
      (this.injectHtml = n => {
        const r = () => ((this.injectedHtml = this.injectedHtml.filter(i => i !== r)), n)
        this.injectedHtml.push(r)
      }),
      (this.streamedKeys = new Set()),
      (this.getStreamedValue = n => {
        var r
        if (this.isServer) return
        const i = (r = window.__TSR__) == null ? void 0 : r.streamedValues[n]
        if (i) return i.parsed || (i.parsed = this.options.transformer.parse(i.value)), i.parsed
      }),
      (this.streamValue = (n, r) => {
        var i
        this.streamedKeys.has(n), this.streamedKeys.add(n)
        const s = `__TSR__.streamedValues['${n}'] = { value: ${(i = this.serializer) == null ? void 0 : i.call(this, this.options.transformer.stringify(r))}}`
        this.injectHtml(`<script class='tsr-once'>${s}; __TSR__.cleanScripts()<\/script>`)
      }),
      (this._handleNotFound = (n, r, { updateMatch: i = this.updateMatch } = {}) => {
        const s = Object.fromEntries(n.map(l => [l.routeId, l]))
        let o =
          (r.global ? this.looseRoutesById[Ut] : this.looseRoutesById[r.routeId]) ||
          this.looseRoutesById[Ut]
        for (; !o.options.notFoundComponent && !this.options.defaultNotFoundComponent && o.id !== Ut; )
          (o = o.parentRoute), Mt(o)
        const a = s[o.id]
        Mt(a, 'Could not find match for route: ' + o.id),
          i(a.id, l => ({ ...l, status: 'notFound', error: r, isFetching: !1 })),
          r.routerCode === 'BEFORE_LOAD' &&
            o.parentRoute &&
            ((r.routeId = o.parentRoute.id), this._handleNotFound(n, r, { updateMatch: i }))
      }),
      (this.hasNotFoundMatch = () =>
        this.__store.state.matches.some(n => n.status === 'notFound' || n.globalNotFound)),
      this.update({
        defaultPreloadDelay: 50,
        defaultPendingMs: 1e3,
        defaultPendingMinMs: 500,
        context: void 0,
        ...t,
        notFoundMode: t.notFoundMode ?? 'fuzzy',
        stringifySearch: t.stringifySearch ?? Xb,
        parseSearch: t.parseSearch ?? Qb,
        transformer: t.transformer ?? d4
      }),
      typeof document < 'u' && (window.__TSR__ROUTER__ = this)
  }
  get state() {
    return this.__store.state
  }
  get looseRoutesById() {
    return this.routesById
  }
  matchRoutes(t, n, r) {
    return typeof t == 'string'
      ? this.matchRoutesInternal({ pathname: t, search: n }, r)
      : this.matchRoutesInternal(t, n)
  }
  matchRoutesInternal(t, n) {
    let r = {}
    const i = this.flatRoutes.find(d => {
      const f = yu(this.basepath, Ri(t.pathname), {
        to: d.fullPath,
        caseSensitive: d.options.caseSensitive ?? this.options.caseSensitive,
        fuzzy: !0
      })
      return f ? ((r = f), !0) : !1
    })
    let s = i || this.routesById[Ut]
    const o = [s]
    let a = !1
    for (
      (i ? i.path !== '/' && r['**'] : Ri(t.pathname)) &&
      (this.options.notFoundRoute ? o.push(this.options.notFoundRoute) : (a = !0));
      s.parentRoute;

    )
      (s = s.parentRoute), o.unshift(s)
    const l = (() => {
        if (a) {
          if (this.options.notFoundMode !== 'root')
            for (let d = o.length - 1; d >= 0; d--) {
              const f = o[d]
              if (f.children) return f.id
            }
          return Ut
        }
      })(),
      u = o.map(d => {
        var f
        let h
        const v = ((f = d.options.params) == null ? void 0 : f.parse) ?? d.options.parseParams
        if (v)
          try {
            const y = v(r)
            Object.assign(r, y)
          } catch (y) {
            if (((h = new g4(y.message, { cause: y })), n != null && n.throwOnError)) throw h
            return h
          }
      }),
      c = []
    return (
      o.forEach((d, f) => {
        var h, v, y, x, p, m, g, E, S, C, k, T
        const A = c[f - 1],
          [O, D] = (() => {
            const q = (A == null ? void 0 : A.search) ?? t.search
            try {
              const F =
                  typeof d.options.validateSearch == 'object'
                    ? d.options.validateSearch.parse
                    : d.options.validateSearch,
                ye = (F == null ? void 0 : F(q)) ?? {}
              return [{ ...q, ...ye }, void 0]
            } catch (F) {
              const ye = new m4(F.message, { cause: F })
              if (n != null && n.throwOnError) throw ye
              return [q, ye]
            }
          })(),
          Z = ((v = (h = d.options).loaderDeps) == null ? void 0 : v.call(h, { search: O })) ?? '',
          re = Z ? JSON.stringify(Z) : '',
          M = pf({ path: d.fullPath, params: r }),
          W = pf({ path: d.id, params: r, leaveWildcards: !0 }) + re,
          oe = this.getMatch(W),
          ee = this.state.matches.find(q => q.id === W) ? 'stay' : 'enter'
        let R
        if (oe) R = { ...oe, cause: ee, params: r }
        else {
          const q = d.options.loader || d.options.beforeLoad || d.lazyFn ? 'pending' : 'success'
          R = {
            id: W,
            index: f,
            routeId: d.id,
            params: r,
            pathname: Qr([this.basepath, M]),
            updatedAt: Date.now(),
            search: {},
            searchError: void 0,
            status: q,
            isFetching: !1,
            error: void 0,
            paramsError: u[f],
            __routeContext: {},
            __beforeLoadContext: {},
            context: {},
            abortController: new AbortController(),
            fetchCount: 0,
            cause: ee,
            loaderDeps: Z,
            invalid: !1,
            preload: !1,
            links: (x = (y = d.options).links) == null ? void 0 : x.call(y),
            scripts: (m = (p = d.options).scripts) == null ? void 0 : m.call(p),
            staticData: d.options.staticData || {},
            loadPromise: xs(),
            fullPath: d.fullPath
          }
        }
        R.status === 'success' &&
          ((R.meta =
            (E = (g = d.options).meta) == null
              ? void 0
              : E.call(g, { matches: c, match: R, params: R.params, loaderData: R.loaderData })),
          (R.headers =
            (C = (S = d.options).headers) == null ? void 0 : C.call(S, { loaderData: R.loaderData }))),
          (n != null && n.preload) || (R.globalNotFound = l === d.id),
          (R.search = ws(R.search, O)),
          (R.searchError = D)
        const z = (A == null ? void 0 : A.id)
          ? (A.context ?? this.options.context ?? {})
          : (this.options.context ?? {})
        R.context = { ...z, ...R.__routeContext, ...R.__beforeLoadContext }
        const V = {
          search: R.search,
          params: R.params,
          context: R.context,
          location: t,
          navigate: q => this.navigate({ ...q, _fromLocation: t }),
          buildLocation: this.buildLocation,
          cause: R.cause,
          abortController: R.abortController,
          preload: !!R.preload,
          matches: c
        }
        ;(R.__routeContext = ((T = (k = d.options).context) == null ? void 0 : T.call(k, V)) ?? {}),
          (R.context = { ...z, ...R.__routeContext, ...R.__beforeLoadContext }),
          c.push(R)
      }),
      c
    )
  }
}
class m4 extends Error {}
class g4 extends Error {}
function v4(e) {
  return {
    loadedAt: 0,
    isLoading: !1,
    isTransitioning: !1,
    status: 'idle',
    resolvedLocation: { ...e },
    location: e,
    matches: [],
    pendingMatches: [],
    cachedMatches: [],
    statusCode: 200
  }
}
function y4(e) {
  return e instanceof Error ? { name: e.name, message: e.message } : { data: e }
}
function Rv(e) {
  return !(typeof e == 'object' && e && 'data' in e) ||
    !('__isServerError' in e && e.__isServerError) ||
    !(typeof e.data == 'object' && e.data)
    ? !1
    : e.__isServerError === !0
}
function Av(e) {
  if ('name' in e && 'message' in e) {
    const t = new Error(e.message)
    return (t.name = e.name), t
  }
  return e.data
}
const fd = w.createContext(void 0)
function ei(e) {
  const t = w.useContext(fd)
  return qt({
    select: r => {
      const i = r.matches.find(s => (e.from ? e.from === s.routeId : s.id === t))
      if (
        (Mt(
          !((e.shouldThrow ?? !0) && !i),
          `Could not find ${e.from ? `an active match from "${e.from}"` : 'a nearest match!'}`
        ),
        i !== void 0)
      )
        return e.select ? e.select(i) : i
    }
  })
}
function Hx(e) {
  return ei({
    ...e,
    select: t => (typeof e.select == 'function' ? e.select(t.loaderDeps) : t.loaderDeps)
  })
}
function Wx(e) {
  return ei({
    ...e,
    select: t => (typeof e.select == 'function' ? e.select(t.loaderData) : t.loaderData)
  })
}
function Gx(e) {
  return ei({ ...e, select: t => (e.select ? e.select(t.params) : t.params) })
}
function Mo(e) {
  return ei({ ...e, select: t => (e.select ? e.select(t.search) : t.search) })
}
function No(e) {
  const { navigate: t } = Tr()
  return w.useCallback(n => t({ ...n }), [t])
}
let qx = class {
  constructor(t) {
    ;(this.init = n => {
      var r, i
      this.originalIndex = n.originalIndex
      const s = this.options,
        o = !(s != null && s.path) && !(s != null && s.id)
      ;(this.parentRoute = (i = (r = this.options).getParentRoute) == null ? void 0 : i.call(r)),
        o ? (this._path = Ut) : Mt(this.parentRoute)
      let a = o ? Ut : s.path
      a && a !== '/' && (a = Vm(a))
      const l = (s == null ? void 0 : s.id) || a
      let u = o ? Ut : Qr([this.parentRoute.id === Ut ? '' : this.parentRoute.id, l])
      a === Ut && (a = '/'), u !== Ut && (u = Qr(['/', u]))
      const c = u === Ut ? '/' : Qr([this.parentRoute.fullPath, a])
      ;(this._path = a), (this._id = u), (this._fullPath = c), (this._to = c)
    }),
      (this.updateLoader = n => (Object.assign(this.options, n), this)),
      (this.update = n => (Object.assign(this.options, n), this)),
      (this.lazy = n => ((this.lazyFn = n), this)),
      (this.useMatch = n => ei({ ...n, from: this.id })),
      (this.useRouteContext = n =>
        ei({
          ...n,
          from: this.id,
          select: r => (n != null && n.select ? n.select(r.context) : r.context)
        })),
      (this.useSearch = n => Mo({ ...n, from: this.id })),
      (this.useParams = n => Gx({ ...n, from: this.id })),
      (this.useLoaderDeps = n => Hx({ ...n, from: this.id })),
      (this.useLoaderData = n => Wx({ ...n, from: this.id })),
      (this.useNavigate = () => No({ from: this.id })),
      (this.options = t || {}),
      (this.isRoot = !(t != null && t.getParentRoute)),
      Mt(!(t != null && t.id && t != null && t.path)),
      (this.$$typeof = Symbol.for('react.memo'))
  }
  get to() {
    return this._to
  }
  get id() {
    return this._id
  }
  get path() {
    return this._path
  }
  get fullPath() {
    return this._fullPath
  }
  addChildren(t) {
    return this._addFileChildren(t)
  }
  _addFileChildren(t) {
    return (
      Array.isArray(t) && (this.children = t),
      typeof t == 'object' && t !== null && (this.children = Object.values(t)),
      this
    )
  }
}
function w4(e) {
  return new qx(e)
}
class x4 extends qx {
  constructor(t) {
    super(t)
  }
  addChildren(t) {
    return super.addChildren(t), this
  }
  _addFileChildren(t) {
    return super._addFileChildren(t), this
  }
  _addFileTypes() {
    return this
  }
}
function E4(e) {
  return new x4(e)
}
function Kx(e) {
  return new S4(e, { silent: !0 }).createRoute
}
class S4 {
  constructor(t, n) {
    ;(this.path = t),
      (this.createRoute = r => {
        this.silent
        const i = w4(r)
        return (i.isRoot = !1), i
      }),
      (this.silent = n == null ? void 0 : n.silent)
  }
}
class T4 {
  constructor(t) {
    ;(this.useMatch = n => ei({ select: n == null ? void 0 : n.select, from: this.options.id })),
      (this.useRouteContext = n =>
        ei({
          from: this.options.id,
          select: r => (n != null && n.select ? n.select(r.context) : r.context)
        })),
      (this.useSearch = n => Mo({ ...n, from: this.options.id })),
      (this.useParams = n => Gx({ ...n, from: this.options.id })),
      (this.useLoaderDeps = n => Hx({ ...n, from: this.options.id })),
      (this.useLoaderData = n => Wx({ ...n, from: this.options.id })),
      (this.useNavigate = () => No({ from: this.options.id })),
      (this.options = t),
      (this.$$typeof = Symbol.for('react.memo'))
  }
}
const C4 = /\(.+\)/g
function _4(e) {
  return e.replaceAll(C4, '').replaceAll('//', '/')
}
function R8(e) {
  return t => new T4({ id: _4(e), ...t })
}
const b4 = 'Error preloading route! ☝️'
function k4(e, t) {
  const n = Tr(),
    [r, i] = w.useState(!1),
    s = r4(t),
    {
      activeProps: o = () => ({ className: 'active' }),
      inactiveProps: a = () => ({}),
      activeOptions: l,
      hash: u,
      search: c,
      params: d,
      to: f,
      state: h,
      mask: v,
      preload: y,
      preloadDelay: x,
      replace: p,
      startTransition: m,
      resetScroll: g,
      viewTransition: E,
      children: S,
      target: C,
      disabled: k,
      style: T,
      className: A,
      onClick: O,
      onFocus: D,
      onMouseEnter: Z,
      onMouseLeave: re,
      onTouchStart: M,
      ignoreBlocker: W,
      ...oe
    } = e,
    ee = w.useMemo(() => {
      try {
        return new URL(`${f}`), 'external'
      } catch {}
      return 'internal'
    }, [f]),
    R = w.useMemo(() => n.buildLocation(e), [n, e]),
    $ = w.useMemo(() => y ?? n.options.defaultPreload, [n.options.defaultPreload, y]),
    z = x ?? n.options.defaultPreloadDelay ?? 0,
    V = qt({
      select: Q => {
        const Te = _c(Q.location.pathname, n.basepath).split('/'),
          Vt = _c(R.pathname, n.basepath)
            .split('/')
            .every((Zl, Ad) => Zl === Te[Ad]),
          as = l != null && l.exact ? s4(Q.location.pathname, R.pathname, n.basepath) : Vt,
          ls = l != null && l.includeHash ? Q.location.hash === R.hash : !0,
          Kl =
            ((l == null ? void 0 : l.includeSearch) ?? !0)
              ? qs(Q.location.search, R.search, !(l != null && l.exact))
              : !0
        return as && ls && Kl
      }
    }),
    q = w.useCallback(() => {
      n.preloadRoute(e).catch(Q => {
        console.warn(Q), console.warn(b4)
      })
    }, [e, n]),
    F = w.useCallback(
      Q => {
        Q != null && Q.isIntersecting && q()
      },
      [q]
    )
  if ((n4(s, F, { rootMargin: '100px' }, { disabled: !!k || $ !== 'viewport' }), ee === 'external'))
    return {
      ...oe,
      ref: s,
      type: ee,
      href: f,
      ...(S && { children: S }),
      ...(C && { target: C }),
      ...(k && { disabled: k }),
      ...(T && { style: T }),
      ...(A && { className: A }),
      ...(O && { onClick: O }),
      ...(D && { onFocus: D }),
      ...(Z && { onMouseEnter: Z }),
      ...(re && { onMouseLeave: re }),
      ...(M && { onTouchStart: M })
    }
  const ye = Q => {
      if (!k && !R4(Q) && !Q.defaultPrevented && (!C || C === '_self') && Q.button === 0) {
        Q.preventDefault(),
          ht.flushSync(() => {
            i(!0)
          })
        const Te = n.subscribe('onResolved', () => {
          Te(), i(!1)
        })
        n.commitLocation({
          ...R,
          replace: p,
          resetScroll: g,
          startTransition: m,
          viewTransition: E,
          ignoreBlocker: W
        })
      }
    },
    ne = Q => {
      k || ($ && q())
    },
    Ce = ne,
    Ee = Q => {
      if (k) return
      const Te = Q.target || {}
      if ($) {
        if (Te.preloadTimeout) return
        Te.preloadTimeout = setTimeout(() => {
          ;(Te.preloadTimeout = null), q()
        }, z)
      }
    },
    Oe = Q => {
      if (k) return
      const Te = Q.target || {}
      Te.preloadTimeout && (clearTimeout(Te.preloadTimeout), (Te.preloadTimeout = null))
    },
    Pe = Q => Te => {
      var nn
      ;(nn = Te.persist) == null || nn.call(Te),
        Q.filter(Boolean).forEach(Vt => {
          Te.defaultPrevented || Vt(Te)
        })
    },
    Ye = V ? (Pi(o, {}) ?? {}) : {},
    yt = V ? {} : Pi(a, {}),
    $t = [A, Ye.className, yt.className].filter(Boolean).join(' '),
    te = { ...T, ...Ye.style, ...yt.style }
  return {
    ...Ye,
    ...yt,
    ...oe,
    href: k
      ? void 0
      : R.maskedLocation
        ? n.history.createHref(R.maskedLocation.href)
        : n.history.createHref(R.href),
    ref: s,
    onClick: Pe([O, ye]),
    onFocus: Pe([D, ne]),
    onMouseEnter: Pe([Z, Ee]),
    onMouseLeave: Pe([re, Oe]),
    onTouchStart: Pe([M, Ce]),
    disabled: !!k,
    target: C,
    ...(Object.keys(te).length && { style: te }),
    ...($t && { className: $t }),
    ...(k && { role: 'link', 'aria-disabled': !0 }),
    ...(V && { 'data-status': 'active', 'aria-current': 'page' }),
    ...(r && { 'data-transitioning': 'transitioning' })
  }
}
const P4 = w.forwardRef((e, t) => {
  const { _asChild: n, ...r } = e,
    { type: i, ref: s, ...o } = k4(r, t),
    a =
      typeof r.children == 'function'
        ? r.children({ isActive: o['data-status'] === 'active' })
        : r.children
  return typeof n > 'u' && delete o.disabled, w.createElement(n || 'a', { ...o, ref: s }, a)
})
function R4(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function A4() {
  const e = Tr(),
    t = w.useRef({ router: e, mounted: !1 }),
    n = qt({ select: u => ka(u, ['isLoading', 'location', 'resolvedLocation', 'isTransitioning']) }),
    [r, i] = w.useTransition(),
    s = qt({ select: u => u.matches.some(c => c.status === 'pending') }),
    o = bv(n.isLoading),
    a = n.isLoading || r || s,
    l = bv(a)
  return (
    e.isServer || (e.startReactTransition = i),
    w.useEffect(() => {
      const u = e.history.subscribe(e.load),
        c = e.buildLocation({
          to: e.latestLocation.pathname,
          search: !0,
          params: !0,
          hash: !0,
          state: !0
        })
      return (
        Ri(e.latestLocation.href) !== Ri(c.href) && e.commitLocation({ ...c, replace: !0 }),
        () => {
          u()
        }
      )
    }, [e, e.history]),
    hf(() => {
      var u
      if (
        (typeof window < 'u' && (u = window.__TSR__) != null && u.dehydrated) ||
        (t.current.router === e && t.current.mounted)
      )
        return
      ;(t.current = { router: e, mounted: !0 }),
        (async () => {
          try {
            await e.load()
          } catch (d) {
            console.error(d)
          }
        })()
    }, [e]),
    hf(() => {
      if (o && !n.isLoading) {
        const u = e.state.location,
          c = e.state.resolvedLocation,
          d = c.href !== u.href
        e.emit({ type: 'onLoad', fromLocation: c, toLocation: u, pathChanged: d })
      }
    }, [o, e, n.isLoading]),
    hf(() => {
      if (l && !a) {
        const u = e.state.location,
          c = e.state.resolvedLocation,
          d = c.href !== u.href
        if (
          (e.emit({ type: 'onResolved', fromLocation: c, toLocation: u, pathChanged: d }),
          e.__store.setState(f => ({ ...f, status: 'idle', resolvedLocation: f.location })),
          typeof document < 'u' && document.querySelector && e.state.location.hash !== '')
        ) {
          const f = document.getElementById(e.state.location.hash)
          f && f.scrollIntoView()
        }
      }
    }, [a, l, e]),
    null
  )
}
function zu(e) {
  return P.jsx(P.Fragment, { children: e.children })
}
function Zx(e, t, n) {
  return t.options.notFoundComponent
    ? P.jsx(t.options.notFoundComponent, { data: n })
    : e.options.defaultNotFoundComponent
      ? P.jsx(e.options.defaultNotFoundComponent, { data: n })
      : P.jsx(c4, {})
}
const Yx = w.memo(function ({ matchId: t }) {
    var n, r
    const i = Tr(),
      s = qt({
        select: x => {
          var p
          return (p = x.matches.find(m => m.id === t)) == null ? void 0 : p.routeId
        }
      })
    Mt(s)
    const o = i.routesById[s],
      a = o.options.pendingComponent ?? i.options.defaultPendingComponent,
      l = a ? P.jsx(a, {}) : null,
      u = o.options.errorComponent ?? i.options.defaultErrorComponent,
      c = o.options.onCatch ?? i.options.defaultOnCatch,
      d = o.isRoot
        ? (o.options.notFoundComponent ??
          ((n = i.options.notFoundRoute) == null ? void 0 : n.options.component))
        : o.options.notFoundComponent,
      f =
        (!o.isRoot || o.options.wrapInSuspense) &&
        (o.options.wrapInSuspense ?? a ?? ((r = o.options.errorComponent) == null ? void 0 : r.preload))
          ? w.Suspense
          : zu,
      h = u ? Bm : zu,
      v = d ? u4 : zu,
      y = qt({ select: x => x.loadedAt })
    return P.jsx(fd.Provider, {
      value: t,
      children: P.jsx(f, {
        fallback: l,
        children: P.jsx(h, {
          getResetKey: () => y,
          errorComponent: u || dd,
          onCatch: (x, p) => {
            if ($n(x)) throw x
            c == null || c(x, p)
          },
          children: P.jsx(v, {
            fallback: x => {
              if (!d || (x.routeId && x.routeId !== s) || (!x.routeId && !o.isRoot)) throw x
              return w.createElement(d, x)
            },
            children: P.jsx(O4, { matchId: t })
          })
        })
      })
    })
  }),
  O4 = w.memo(function ({ matchId: t }) {
    var n, r, i
    const s = Tr(),
      {
        match: o,
        matchIndex: a,
        routeId: l
      } = qt({
        select: f => {
          const h = f.matches.findIndex(x => x.id === t),
            v = f.matches[h]
          return {
            routeId: v.routeId,
            matchIndex: h,
            match: ka(v, ['id', 'status', 'error', 'loadPromise'])
          }
        }
      }),
      u = s.routesById[l],
      c = w.useMemo(() => {
        const f = u.options.component ?? s.options.defaultComponent
        return f ? P.jsx(f, {}) : P.jsx(Qx, {})
      }, [u.options.component, s.options.defaultComponent]),
      d = (u.options.errorComponent ?? s.options.defaultErrorComponent) || dd
    if (o.status === 'notFound') {
      let f
      return (
        Rv(o.error)
          ? (f = (((n = s.options.errorSerializer) == null ? void 0 : n.deserialize) ?? Av)(
              o.error.data
            ))
          : (f = o.error),
        Mt($n(f)),
        Zx(s, u, f)
      )
    }
    if (o.status === 'redirected') throw (Mt(wi(o.error)), o.loadPromise)
    if (o.status === 'error') {
      if (s.isServer) return P.jsx(d, { error: o.error, info: { componentStack: '' } })
      throw Rv(o.error)
        ? (((r = s.options.errorSerializer) == null ? void 0 : r.deserialize) ?? Av)(o.error.data)
        : o.error
    }
    if (o.status === 'pending') {
      const f = u.options.pendingMinMs ?? s.options.defaultPendingMinMs
      if (f && !((i = s.getMatch(o.id)) != null && i.minPendingPromise) && !s.isServer) {
        const h = xs()
        Promise.resolve().then(() => {
          s.updateMatch(o.id, v => ({ ...v, minPendingPromise: h }))
        }),
          setTimeout(() => {
            h.resolve(), s.updateMatch(o.id, v => ({ ...v, minPendingPromise: void 0 }))
          }, f)
      }
      throw o.loadPromise
    }
    return P.jsxs(P.Fragment, {
      children: [c, s.AfterEachMatch ? P.jsx(s.AfterEachMatch, { match: o, matchIndex: a }) : null]
    })
  }),
  Qx = w.memo(function () {
    const t = Tr(),
      n = w.useContext(fd),
      r = qt({
        select: u => {
          var c
          return (c = u.matches.find(d => d.id === n)) == null ? void 0 : c.routeId
        }
      }),
      i = t.routesById[r],
      { parentGlobalNotFound: s } = qt({
        select: u => {
          const d = u.matches.find(f => f.id === n)
          return Mt(d), { parentGlobalNotFound: d.globalNotFound }
        }
      }),
      o = qt({
        select: u => {
          var c
          const d = u.matches,
            f = d.findIndex(h => h.id === n)
          return (c = d[f + 1]) == null ? void 0 : c.id
        }
      })
    if (s) return Zx(t, i, void 0)
    if (!o) return null
    const a = P.jsx(Yx, { matchId: o }),
      l = t.options.defaultPendingComponent ? P.jsx(t.options.defaultPendingComponent, {}) : null
    return n === Ut ? P.jsx(w.Suspense, { fallback: l, children: a }) : a
  })
function L4() {
  const e = Tr(),
    t = e.options.defaultPendingComponent ? P.jsx(e.options.defaultPendingComponent, {}) : null,
    n = e.isServer || (typeof document < 'u' && window.__TSR__) ? zu : w.Suspense,
    r = P.jsxs(n, { fallback: t, children: [P.jsx(A4, {}), P.jsx(M4, {})] })
  return e.options.InnerWrap ? P.jsx(e.options.InnerWrap, { children: r }) : r
}
function M4() {
  const e = qt({
      select: n => {
        var r
        return (r = n.matches[0]) == null ? void 0 : r.id
      }
    }),
    t = qt({ select: n => n.loadedAt })
  return P.jsx(fd.Provider, {
    value: e,
    children: P.jsx(Bm, {
      getResetKey: () => t,
      errorComponent: dd,
      onCatch: n => {
        n.message || n.toString()
      },
      children: e ? P.jsx(Yx, { matchId: e }) : null
    })
  })
}
function N4({ router: e, children: t, ...n }) {
  e.update({ ...e.options, ...n, context: { ...e.options.context, ...n.context } })
  const r = $x(),
    i = P.jsx(r.Provider, { value: e, children: t })
  return e.options.Wrap ? P.jsx(e.options.Wrap, { children: i }) : i
}
function I4({ router: e, ...t }) {
  return P.jsx(N4, { router: e, ...t, children: P.jsx(L4, {}) })
}
const D4 = typeof window < 'u' ? w.useLayoutEffect : w.useEffect,
  mf = 'window',
  Ov = '___'
let gf = new WeakSet()
const F4 = typeof window < 'u' && window.sessionStorage,
  xn = F4
    ? (() => {
        const e = 'tsr-scroll-restoration-v2'
        return {
          state: JSON.parse(window.sessionStorage.getItem(e) || 'null') || { cached: {}, next: {} },
          set: n => {
            ;(xn.state = Pi(n, xn.state)), window.sessionStorage.setItem(e, JSON.stringify(xn.state))
          }
        }
      })()
    : void 0,
  j4 = e => e.state.key || e.href
function $4(e) {
  const t = Tr()
  D4(() => {
    const n = (e == null ? void 0 : e.getKey) || j4,
      { history: r } = window
    r.scrollRestoration = 'manual'
    const i = a => {
      if (gf.has(a.target)) return
      gf.add(a.target)
      let l = ''
      if (a.target === document || a.target === window) l = mf
      else {
        const u = a.target.getAttribute('data-scroll-restoration-id')
        u ? (l = `[data-scroll-restoration-id="${u}"]`) : (l = B4(a.target))
      }
      xn.state.next[l] ||
        xn.set(u => ({ ...u, next: { ...u.next, [l]: { scrollX: NaN, scrollY: NaN } } }))
    }
    typeof document < 'u' && document.addEventListener('scroll', i, !0)
    const s = t.subscribe('onBeforeLoad', a => {
        if (a.pathChanged) {
          const l = n(a.fromLocation)
          for (const u in xn.state.next) {
            const c = xn.state.next[u]
            if (u === mf) (c.scrollX = window.scrollX || 0), (c.scrollY = window.scrollY || 0)
            else if (u) {
              const d = document.querySelector(u)
              ;(c.scrollX = (d == null ? void 0 : d.scrollLeft) || 0),
                (c.scrollY = (d == null ? void 0 : d.scrollTop) || 0)
            }
            xn.set(d => {
              const f = { ...d.next }
              return delete f[u], { ...d, next: f, cached: { ...d.cached, [[l, u].join(Ov)]: c } }
            })
          }
        }
      }),
      o = t.subscribe('onResolved', a => {
        if (a.pathChanged) {
          if (!t.resetNextScroll) return
          t.resetNextScroll = !0
          const l = n(a.toLocation)
          let u = !1
          for (const c in xn.state.cached) {
            const d = xn.state.cached[c],
              [f, h] = c.split(Ov)
            if (f === l) {
              if (h === mf) (u = !0), window.scrollTo(d.scrollX, d.scrollY)
              else if (h) {
                const v = document.querySelector(h)
                v && ((v.scrollLeft = d.scrollX), (v.scrollTop = d.scrollY))
              }
            }
          }
          u || window.scrollTo(0, 0), xn.set(c => ({ ...c, next: {} })), (gf = new WeakSet())
        }
      })
    return () => {
      document.removeEventListener('scroll', i), s(), o()
    }
  }, [e == null ? void 0 : e.getKey, t])
}
function V4(e) {
  return $4(e), null
}
function B4(e) {
  const t = []
  let n
  for (; (n = e.parentNode); )
    t.unshift(`${e.tagName}:nth-child(${[].indexOf.call(n.children, e) + 1})`), (e = n)
  return `${t.join(' > ')}`.toLowerCase()
}
const z4 = 'modulepreload',
  U4 = function (e) {
    return '/' + e
  },
  Lv = {},
  H4 = function (t, n, r) {
    let i = Promise.resolve()
    if (n && n.length > 0) {
      document.getElementsByTagName('link')
      const s = document.querySelector('meta[property=csp-nonce]'),
        o = (s == null ? void 0 : s.nonce) || (s == null ? void 0 : s.getAttribute('nonce'))
      i = Promise.all(
        n.map(a => {
          if (((a = U4(a)), a in Lv)) return
          Lv[a] = !0
          const l = a.endsWith('.css'),
            u = l ? '[rel="stylesheet"]' : ''
          if (document.querySelector(`link[href="${a}"]${u}`)) return
          const c = document.createElement('link')
          if (
            ((c.rel = l ? 'stylesheet' : z4),
            l || (c.as = 'script'),
            (c.crossOrigin = ''),
            (c.href = a),
            o && c.setAttribute('nonce', o),
            document.head.appendChild(c),
            l)
          )
            return new Promise((d, f) => {
              c.addEventListener('load', d),
                c.addEventListener('error', () => f(new Error(`Unable to preload CSS for ${a}`)))
            })
        })
      )
    }
    return i
      .then(() => t())
      .catch(s => {
        const o = new Event('vite:preloadError', { cancelable: !0 })
        if (((o.payload = s), window.dispatchEvent(o), !o.defaultPrevented)) throw s
      })
  },
  _n = { BASE_URL: '/', DEV: !1, MODE: 'production', PROD: !0, SSR: !1 }
let W4 = 0
function Mv(e, t) {
  const n = `atom${++W4}`,
    r = {
      toString() {
        return (_n ? 'production' : void 0) !== 'production' && this.debugLabel
          ? n + ':' + this.debugLabel
          : n
      }
    }
  return (
    typeof e == 'function' ? (r.read = e) : ((r.init = e), (r.read = G4), (r.write = q4)),
    t && (r.write = t),
    r
  )
}
function G4(e) {
  return e(this)
}
function q4(e, t, n) {
  return t(this, typeof n == 'function' ? n(e(this)) : n)
}
const Nv = (e, t) => (e.unstable_is ? e.unstable_is(t) : t === e),
  vf = e => 'init' in e,
  yf = e => !!e.write,
  Pa = Symbol((_n ? 'production' : void 0) !== 'production' ? 'CONTINUE_PROMISE' : ''),
  zm = 'pending',
  K4 = 'fulfilled',
  Z4 = 'rejected',
  Y4 = e => typeof e == 'object' && e !== null && Pa in e,
  wu = new WeakMap(),
  Q4 = (e, t, n) => {
    if (!wu.has(e)) {
      let r
      const i = new Promise((s, o) => {
        let a = e
        const l = c => d => {
            a === c && ((i.status = K4), (i.value = d), s(d), n())
          },
          u = c => d => {
            a === c && ((i.status = Z4), (i.reason = d), o(d), n())
          }
        e.then(l(e), u(e)),
          (r = (c, d) => {
            c && (wu.set(c, i), (a = c), c.then(l(c), u(c)), t(), (t = d))
          })
      })
      ;(i.status = zm), (i[Pa] = r), wu.set(e, i)
    }
    return wu.get(e)
  },
  X4 = e => typeof (e == null ? void 0 : e.then) == 'function',
  Iv = e => 'v' in e || 'e' in e,
  xu = e => {
    if ('e' in e) throw e.e
    if ((_n ? 'production' : void 0) !== 'production' && !('v' in e))
      throw new Error('[Bug] atom state is not initialized')
    return e.v
  },
  Uu = e => {
    const t = e.v
    return Y4(t) && t.status === zm ? t : null
  },
  Xx = (e, t, n) => {
    n.p.has(e) ||
      (n.p.add(e),
      t.then(
        () => {
          n.p.delete(e)
        },
        () => {
          n.p.delete(e)
        }
      ))
  },
  Dv = (e, t, n, r, i) => {
    var s
    if ((_n ? 'production' : void 0) !== 'production' && r === t)
      throw new Error('[Bug] atom cannot depend on itself')
    n.d.set(r, i.n)
    const o = Uu(n)
    o && Xx(t, o, i), (s = i.m) == null || s.t.add(t), e && J4(e, r, t)
  },
  ms = () => [new Map(), new Map(), new Set()],
  wf = (e, t, n) => {
    e[0].has(t) || e[0].set(t, new Set()), e[1].set(t, n)
  },
  J4 = (e, t, n) => {
    const r = e[0].get(t)
    r && r.add(n)
  },
  ek = (e, t) => e[0].get(t),
  Fv = (e, t) => {
    e[2].add(t)
  },
  mi = e => {
    for (; e[1].size || e[2].size; ) {
      e[0].clear()
      const t = new Set(e[1].values())
      e[1].clear()
      const n = new Set(e[2])
      e[2].clear(),
        t.forEach(r => {
          var i
          return (i = r.m) == null ? void 0 : i.l.forEach(s => s())
        }),
        n.forEach(r => r())
    }
  },
  Jx = e => {
    let t
    ;(_n ? 'production' : void 0) !== 'production' && (t = new Set())
    const n = (y, x, p, m = () => {}, g = () => {}) => {
        const E = 'v' in x,
          S = x.v,
          C = Uu(x)
        if (X4(p))
          if (C) C !== p && (C[Pa](p, m), ++x.n)
          else {
            const k = Q4(p, m, g)
            if (k.status === zm) for (const T of x.d.keys()) Xx(y, k, e(T, x))
            ;(x.v = k), delete x.e
          }
        else C && C[Pa](Promise.resolve(p), m), (x.v = p), delete x.e
        ;(!E || !Object.is(S, x.v)) && ++x.n
      },
      r = (y, x, p, m) => {
        if (
          !(m != null && m(x)) &&
          Iv(p) &&
          (p.m || Array.from(p.d).every(([T, A]) => r(y, T, e(T, p), m).n === A))
        )
          return p
        p.d.clear()
        let g = !0
        const E = T => {
          if (Nv(x, T)) {
            const O = e(T, p)
            if (!Iv(O))
              if (vf(T)) n(T, O, T.init)
              else throw new Error('no atom init')
            return xu(O)
          }
          const A = r(y, T, e(T, p), m)
          if (g) Dv(y, x, p, T, A)
          else {
            const O = ms()
            Dv(O, x, p, T, A), u(O, x, p), mi(O)
          }
          return xu(A)
        }
        let S, C
        const k = {
          get signal() {
            return S || (S = new AbortController()), S.signal
          },
          get setSelf() {
            return (
              (_n ? 'production' : void 0) !== 'production' &&
                !yf(x) &&
                console.warn('setSelf function cannot be used with read-only atom'),
              !C &&
                yf(x) &&
                (C = (...T) => {
                  if (
                    ((_n ? 'production' : void 0) !== 'production' &&
                      g &&
                      console.warn('setSelf function cannot be called in sync'),
                    !g)
                  )
                    return l(x, ...T)
                }),
              C
            )
          }
        }
        try {
          const T = x.read(E, k)
          return (
            n(
              x,
              p,
              T,
              () => (S == null ? void 0 : S.abort()),
              () => {
                if (p.m) {
                  const A = ms()
                  u(A, x, p), mi(A)
                }
              }
            ),
            p
          )
        } catch (T) {
          return delete p.v, (p.e = T), ++p.n, p
        } finally {
          g = !1
        }
      },
      i = y => xu(r(void 0, y, e(y))),
      s = (y, x, p) => {
        var m, g
        const E = new Map()
        for (const S of ((m = p.m) == null ? void 0 : m.t) || []) E.set(S, e(S, p))
        for (const S of p.p) E.set(S, e(S, p))
        return (
          (g = ek(y, x)) == null ||
            g.forEach(S => {
              E.set(S, e(S, p))
            }),
          E
        )
      },
      o = (y, x, p) => {
        const m = [],
          g = new Set(),
          E = (k, T) => {
            if (!g.has(k)) {
              g.add(k)
              for (const [A, O] of s(y, k, T)) k !== A && E(A, O)
              m.push([k, T, T.n])
            }
          }
        E(x, p)
        const S = new Set([x]),
          C = k => g.has(k)
        for (let k = m.length - 1; k >= 0; --k) {
          const [T, A, O] = m[k]
          let D = !1
          for (const Z of A.d.keys())
            if (Z !== T && S.has(Z)) {
              D = !0
              break
            }
          D && (r(y, T, A, C), u(y, T, A), O !== A.n && (wf(y, T, A), S.add(T))), g.delete(T)
        }
      },
      a = (y, x, p, ...m) => {
        const g = C => xu(r(y, C, e(C, p))),
          E = (C, ...k) => {
            const T = e(C, p)
            let A
            if (Nv(x, C)) {
              if (!vf(C)) throw new Error('atom not writable')
              const O = 'v' in T,
                D = T.v,
                Z = k[0]
              n(C, T, Z), u(y, C, T), (!O || !Object.is(D, T.v)) && (wf(y, C, T), o(y, C, T))
            } else A = a(y, C, T, ...k)
            return mi(y), A
          }
        return x.write(g, E, ...m)
      },
      l = (y, ...x) => {
        const p = ms(),
          m = a(p, y, e(y), ...x)
        return mi(p), m
      },
      u = (y, x, p) => {
        if (p.m && !Uu(p)) {
          for (const m of p.d.keys()) p.m.d.has(m) || (c(y, m, e(m, p)).t.add(x), p.m.d.add(m))
          for (const m of p.m.d || [])
            if (!p.d.has(m)) {
              p.m.d.delete(m)
              const g = d(y, m, e(m, p))
              g == null || g.t.delete(x)
            }
        }
      },
      c = (y, x, p) => {
        if (!p.m) {
          r(y, x, p)
          for (const m of p.d.keys()) c(y, m, e(m, p)).t.add(x)
          if (
            ((p.m = { l: new Set(), d: new Set(p.d.keys()), t: new Set() }),
            (_n ? 'production' : void 0) !== 'production' && t.add(x),
            yf(x) && x.onMount)
          ) {
            const m = p.m,
              { onMount: g } = x
            Fv(y, () => {
              const E = g((...S) => a(y, x, p, ...S))
              E && (m.u = E)
            })
          }
        }
        return p.m
      },
      d = (y, x, p) => {
        if (
          p.m &&
          !p.m.l.size &&
          !Array.from(p.m.t).some(m => {
            var g
            return (g = e(m, p).m) == null ? void 0 : g.d.has(x)
          })
        ) {
          const m = p.m.u
          m && Fv(y, m), delete p.m, (_n ? 'production' : void 0) !== 'production' && t.delete(x)
          for (const E of p.d.keys()) {
            const S = d(y, E, e(E, p))
            S == null || S.t.delete(x)
          }
          const g = Uu(p)
          g && g[Pa](void 0, () => {})
          return
        }
        return p.m
      },
      v = {
        get: i,
        set: l,
        sub: (y, x) => {
          const p = ms(),
            m = e(y),
            g = c(p, y, m)
          mi(p)
          const E = g.l
          return (
            E.add(x),
            () => {
              E.delete(x)
              const S = ms()
              d(S, y, m), mi(S)
            }
          )
        },
        unstable_derive: y => Jx(...y(e))
      }
    return (
      (_n ? 'production' : void 0) !== 'production' &&
        Object.assign(v, {
          dev4_get_internal_weak_map: () => ({
            get: x => {
              const p = e(x)
              if (p.n !== 0) return p
            }
          }),
          dev4_get_mounted_atoms: () => t,
          dev4_restore_atoms: x => {
            const p = ms()
            for (const [m, g] of x)
              if (vf(m)) {
                const E = e(m),
                  S = 'v' in E,
                  C = E.v
                n(m, E, g), u(p, m, E), (!S || !Object.is(C, E.v)) && (wf(p, m, E), o(p, m, E))
              }
            mi(p)
          }
        }),
      v
    )
  },
  tk = () => {
    const e = new WeakMap()
    return Jx(n => {
      let r = e.get(n)
      return r || ((r = { d: new Map(), p: new Set(), n: 0 }), e.set(n, r)), r
    })
  }
let Qo
const nk = () => (
    Qo ||
      ((Qo = tk()),
      (_n ? 'production' : void 0) !== 'production' &&
        (globalThis.__JOTAI_DEFAULT_STORE__ || (globalThis.__JOTAI_DEFAULT_STORE__ = Qo),
        globalThis.__JOTAI_DEFAULT_STORE__ !== Qo &&
          console.warn(
            'Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044'
          ))),
    Qo
  ),
  rk = { BASE_URL: '/', DEV: !1, MODE: 'production', PROD: !0, SSR: !1 },
  ik = w.createContext(void 0),
  eE = e => w.useContext(ik) || nk(),
  sk = e => typeof (e == null ? void 0 : e.then) == 'function',
  ok =
    we.use ||
    (e => {
      if (e.status === 'pending') throw e
      if (e.status === 'fulfilled') return e.value
      throw e.status === 'rejected'
        ? e.reason
        : ((e.status = 'pending'),
          e.then(
            t => {
              ;(e.status = 'fulfilled'), (e.value = t)
            },
            t => {
              ;(e.status = 'rejected'), (e.reason = t)
            }
          ),
          e)
    })
function tE(e, t) {
  const n = eE(),
    [[r, i, s], o] = w.useReducer(
      u => {
        const c = n.get(e)
        return Object.is(u[0], c) && u[1] === n && u[2] === e ? u : [c, n, e]
      },
      void 0,
      () => [n.get(e), n, e]
    )
  let a = r
  return (
    (i !== n || s !== e) && (o(), (a = n.get(e))),
    w.useEffect(() => {
      const u = n.sub(e, () => {
        o()
      })
      return o(), u
    }, [n, e, void 0]),
    w.useDebugValue(a),
    sk(a) ? ok(a) : a
  )
}
function ak(e, t) {
  const n = eE()
  return w.useCallback(
    (...i) => {
      if ((rk ? 'production' : void 0) !== 'production' && !('write' in e))
        throw new Error('not writable atom')
      return n.set(e, ...i)
    },
    [n, e]
  )
}
function lk(e, t) {
  return [tE(e), ak(e)]
}
function uk() {
  return P.jsx('footer', {
    className: '  text-center p-4 dark:text-slate-600 text-slate-500',
    children: 'Made with ❤️ by Arif'
  })
}
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ck = e => e.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  nE = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(' ')
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var dk = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fk = w.forwardRef(
  (
    {
      color: e = 'currentColor',
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: i = '',
      children: s,
      iconNode: o,
      ...a
    },
    l
  ) =>
    w.createElement(
      'svg',
      {
        ref: l,
        ...dk,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: nE('lucide', i),
        ...a
      },
      [...o.map(([u, c]) => w.createElement(u, c)), ...(Array.isArray(s) ? s : [s])]
    )
)
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tn = (e, t) => {
  const n = w.forwardRef(({ className: r, ...i }, s) =>
    w.createElement(fk, { ref: s, iconNode: t, className: nE(`lucide-${ck(e)}`, r), ...i })
  )
  return (n.displayName = `${e}`), n
}
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ip = tn('ArrowDownWideNarrow', [
  ['path', { d: 'm3 16 4 4 4-4', key: '1co6wj' }],
  ['path', { d: 'M7 20V4', key: '1yoxec' }],
  ['path', { d: 'M11 4h10', key: '1w87gc' }],
  ['path', { d: 'M11 8h7', key: 'djye34' }],
  ['path', { d: 'M11 12h4', key: 'q8tih4' }]
])
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jv = tn('ArrowUpNarrowWide', [
  ['path', { d: 'm3 8 4-4 4 4', key: '11wl7u' }],
  ['path', { d: 'M7 4v16', key: '1glfcx' }],
  ['path', { d: 'M11 12h4', key: 'q8tih4' }],
  ['path', { d: 'M11 16h7', key: 'uosisv' }],
  ['path', { d: 'M11 20h10', key: 'jvxblo' }]
])
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hk = tn('ArrowUpRight', [
  ['path', { d: 'M7 7h10v10', key: '1tivn9' }],
  ['path', { d: 'M7 17 17 7', key: '1vkiza' }]
])
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pk = tn('ArrowUp', [
  ['path', { d: 'm5 12 7-7 7 7', key: 'hav0vg' }],
  ['path', { d: 'M12 19V5', key: 'x0mq9r' }]
])
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rE = tn('Check', [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]])
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mk = tn('ChevronDown', [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]])
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gk = tn('ChevronLeft', [['path', { d: 'm15 18-6-6 6-6', key: '1wnfg3' }]])
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vk = tn('ChevronRight', [['path', { d: 'm9 18 6-6-6-6', key: 'mthhwq' }]])
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yk = tn('Ellipsis', [
  ['circle', { cx: '12', cy: '12', r: '1', key: '41hilf' }],
  ['circle', { cx: '19', cy: '12', r: '1', key: '1wjl8i' }],
  ['circle', { cx: '5', cy: '12', r: '1', key: '1pcz8c' }]
])
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wk = tn('Loader', [
  ['path', { d: 'M12 2v4', key: '3427ic' }],
  ['path', { d: 'm16.2 7.8 2.9-2.9', key: 'r700ao' }],
  ['path', { d: 'M18 12h4', key: 'wj9ykh' }],
  ['path', { d: 'm16.2 16.2 2.9 2.9', key: '1bxg5t' }],
  ['path', { d: 'M12 18v4', key: 'jadmvz' }],
  ['path', { d: 'm4.9 19.1 2.9-2.9', key: 'bwix9q' }],
  ['path', { d: 'M2 12h4', key: 'j09sii' }],
  ['path', { d: 'm4.9 4.9 2.9 2.9', key: 'giyufr' }]
])
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xk = tn('MoonStar', [
  ['path', { d: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9', key: '4ay0iu' }],
  ['path', { d: 'M20 3v4', key: '1olli1' }],
  ['path', { d: 'M22 5h-4', key: '1gvqau' }]
])
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ek = tn('Search', [
  ['circle', { cx: '11', cy: '11', r: '8', key: '4ej97u' }],
  ['path', { d: 'm21 21-4.3-4.3', key: '1qie3q' }]
])
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sk = tn('Sun', [
    ['circle', { cx: '12', cy: '12', r: '4', key: '4exip2' }],
    ['path', { d: 'M12 2v2', key: 'tus03m' }],
    ['path', { d: 'M12 20v2', key: '1lh1kg' }],
    ['path', { d: 'm4.93 4.93 1.41 1.41', key: '149t6j' }],
    ['path', { d: 'm17.66 17.66 1.41 1.41', key: 'ptbguv' }],
    ['path', { d: 'M2 12h2', key: '1t8f8n' }],
    ['path', { d: 'M20 12h2', key: '1q8mjw' }],
    ['path', { d: 'm6.34 17.66-1.41 1.41', key: '1m8zz5' }],
    ['path', { d: 'm19.07 4.93-1.41 1.41', key: '1shlcs' }]
  ]),
  Tk = '/assets/pokemon-logo-BueKHVBs.png'
var iE = { exports: {} }
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ ;(function (e) {
  ;(function () {
    var t = {}.hasOwnProperty
    function n() {
      for (var s = '', o = 0; o < arguments.length; o++) {
        var a = arguments[o]
        a && (s = i(s, r(a)))
      }
      return s
    }
    function r(s) {
      if (typeof s == 'string' || typeof s == 'number') return s
      if (typeof s != 'object') return ''
      if (Array.isArray(s)) return n.apply(null, s)
      if (s.toString !== Object.prototype.toString && !s.toString.toString().includes('[native code]'))
        return s.toString()
      var o = ''
      for (var a in s) t.call(s, a) && s[a] && (o = i(o, a))
      return o
    }
    function i(s, o) {
      return o ? (s ? s + ' ' + o : s + o) : s
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n)
  })()
})(iE)
var Ck = iE.exports
const Qi = u1(Ck),
  Xo = {
    focusVisible: 'outline-none focus:ring-2 ring-yellow-500',
    base: 'px-4 py-2 flex items-center h-11 min-w-11 justify-center',
    icon: 'size-11 flex justify-center items-center rounded-full',
    rounded: 'rounded-full',
    disabled: 'disabled:opacity-50 bg-slate-50',
    variants: {
      default:
        'bg-slate-50 hover:bg-slate-100 text-slate-900 border-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-100 border dark:border-slate-800 transition',
      primary: 'bg-yellow-500 text-black hover:bg-yellow-600 border-yellow-700'
    }
  },
  Ks = w.forwardRef(
    (
      { className: e, icon: t = !1, variant: n = 'default', rounded: r = !1, type: i = 'button', ...s },
      o
    ) => {
      const a = t ? Xo.icon : Xo.base,
        l = Xo.variants[n],
        u = r ? Xo.rounded : ''
      return P.jsx('button', { type: i, className: Qi(a, Xo.focusVisible, l, u, e), ref: o, ...s })
    }
  )
Ks.displayName = 'Button'
const Um = { BASE_URL: '/', DEV: !1, MODE: 'production', PROD: !0, SSR: !1 },
  _k = Symbol((Um ? 'production' : void 0) !== 'production' ? 'RESET' : ''),
  bk = e => typeof (e == null ? void 0 : e.then) == 'function'
function kk(
  e = () => {
    try {
      return window.localStorage
    } catch (n) {
      ;(Um ? 'production' : void 0) !== 'production' && typeof window < 'u' && console.warn(n)
      return
    }
  },
  t
) {
  var n
  let r, i
  const s = {
      getItem: (l, u) => {
        var c, d
        const f = v => {
            if (((v = v || ''), r !== v)) {
              try {
                i = JSON.parse(v, t == null ? void 0 : t.reviver)
              } catch {
                return u
              }
              r = v
            }
            return i
          },
          h = (d = (c = e()) == null ? void 0 : c.getItem(l)) != null ? d : null
        return bk(h) ? h.then(f) : f(h)
      },
      setItem: (l, u) => {
        var c
        return (c = e()) == null ? void 0 : c.setItem(l, JSON.stringify(u, void 0))
      },
      removeItem: l => {
        var u
        return (u = e()) == null ? void 0 : u.removeItem(l)
      }
    },
    o = l => (u, c, d) =>
      l(u, f => {
        let h
        try {
          h = JSON.parse(f || '')
        } catch {
          h = d
        }
        c(h)
      })
  let a
  try {
    a = (n = e()) == null ? void 0 : n.subscribe
  } catch {}
  return (
    !a &&
      typeof window < 'u' &&
      typeof window.addEventListener == 'function' &&
      window.Storage &&
      (a = (l, u) => {
        if (!(e() instanceof window.Storage)) return () => {}
        const c = d => {
          d.storageArea === e() && d.key === l && u(d.newValue)
        }
        return (
          window.addEventListener('storage', c),
          () => {
            window.removeEventListener('storage', c)
          }
        )
      }),
    a && (s.subscribe = o(a)),
    s
  )
}
const Pk = kk()
function Rk(e, t, n = Pk, r) {
  const i = Mv(t)
  return (
    (Um ? 'production' : void 0) !== 'production' && (i.debugPrivate = !0),
    (i.onMount = o => {
      o(n.getItem(e, t))
      let a
      return n.subscribe && (a = n.subscribe(e, o, t)), a
    }),
    Mv(
      o => o(i),
      (o, a, l) => {
        const u = typeof l == 'function' ? l(o(i)) : l
        return u === _k
          ? (a(i, t), n.removeItem(e))
          : u instanceof Promise
            ? u.then(c => (a(i, c), n.setItem(e, c)))
            : (a(i, u), n.setItem(e, u))
      }
    )
  )
}
const sE = Rk('theme', 'dark')
function Ak() {
  const [e, t] = lk(sE),
    n = e === 'dark',
    r = () => {
      t(n ? 'light' : 'dark')
    }
  return P.jsxs('nav', {
    className:
      'container mx-auto sm:w-11/12 md:w-11/12 mt-3 inset-0 flex justify-between items-center border  border-slate-200 dark:border-slate-800 px-10 h-28 sm:h-16 md:h-16 rounded-3xl backdrop-blur-xl fixed z-50',
    children: [
      P.jsx('div', { className: 'w-1/3' }),
      P.jsx('div', {
        className: 'w-1/3 flex justify-center',
        children: P.jsx('img', {
          src: Tk,
          alt: 'Pokemon logo',
          className: 'w-60 md:w-40',
          width: 240,
          height: 89
        })
      }),
      P.jsx('div', {
        className: 'w-1/3 flex justify-end space-x-4',
        children: P.jsx(Ks, {
          className: 'bg-transparent dark:bg-transparent',
          icon: !0,
          onClick: r,
          rounded: !0,
          title: 'Toggle dark theme',
          children: n ? P.jsx(xk, { size: 18 }) : P.jsx(Sk, { size: 18 })
        })
      })
    ]
  })
}
function Ok(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
  e && e.addEventListener && e.addEventListener.apply(e, t)
}
function Lk(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
  e && e.removeEventListener && e.removeEventListener.apply(e, t)
}
var Mk = typeof window < 'u'
function Nk(e, t) {
  var n = w.useRef(!1),
    r = w.useRef(),
    i = w.useRef(e),
    s = w.useCallback(function () {
      return n.current
    }, []),
    o = w.useCallback(
      function () {
        ;(n.current = !1),
          r.current && clearTimeout(r.current),
          (r.current = setTimeout(function () {
            ;(n.current = !0), i.current()
          }, t))
      },
      [t]
    ),
    a = w.useCallback(function () {
      ;(n.current = null), r.current && clearTimeout(r.current)
    }, [])
  return (
    w.useEffect(
      function () {
        i.current = e
      },
      [e]
    ),
    w.useEffect(
      function () {
        return o(), a
      },
      [t]
    ),
    [s, a, o]
  )
}
function Ik(e, t, n) {
  n === void 0 && (n = [])
  var r = Nk(e, t),
    i = r[0],
    s = r[1],
    o = r[2]
  return w.useEffect(o, n), [i, s]
}
var Dk = Mk ? window : null,
  $v = function (e) {
    return !!e.addEventListener
  },
  Vv = function (e) {
    return !!e.on
  },
  Fk = function (e, t, n, r) {
    n === void 0 && (n = Dk),
      w.useEffect(
        function () {
          if (t && n)
            return (
              $v(n) ? Ok(n, e, t, r) : Vv(n) && n.on(e, t, r),
              function () {
                $v(n) ? Lk(n, e, t, r) : Vv(n) && n.off(e, t, r)
              }
            )
        },
        [e, t, n, JSON.stringify(r)]
      )
  }
function jk() {
  const [e, t] = w.useState(!1),
    n = () => {
      window.scrollY > 1100 ? t(!0) : t(!1)
    },
    r = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  return (
    Fk('scroll', n),
    P.jsx('div', {
      className: 'scroll-to-top',
      children:
        e &&
        P.jsx(Ks, {
          title: 'Scroll page to top',
          icon: !0,
          onClick: r,
          className: 'fixed right-3 bottom-3',
          children: P.jsx(pk, {})
        })
    })
  )
}
const Hm = E4({ component: $k, notFoundComponent: () => P.jsx('div', { children: 'Not Found' }) })
function $k() {
  const n = tE(sE) === 'dark' ? 'dark' : ''
  return P.jsxs('div', {
    className: `flex flex-col items-center min-h-screen bg-image ${n} bg-slate-200 dark:bg-slate-950 transition-all`,
    children: [
      P.jsx(V4, { getKey: r => r.pathname }),
      P.jsx(Ak, {}),
      P.jsx('main', { className: 'flex-grow w-5/6', children: P.jsx(Qx, {}) }),
      P.jsx(jk, {}),
      P.jsx(uk, {}),
      !1
    ]
  })
}
const oE = [20, 50, 100]
function Vk({ itemsPerPage: e, onItemsPerPageChange: t }) {
  const n = r => {
    t(Number(r.target.value))
  }
  return P.jsxs('label', {
    className: 'flex items-center gap-3 text-slate-500',
    children: [
      P.jsx('span', { children: 'Showing' }),
      P.jsx('select', {
        value: e,
        onChange: n,
        name: 'items-per-page',
        className:
          'p-2 rounded-full cursor-pointer border border-slate-200 bg-slate-50 text-slate-800 focus:outline-none focus-visible:ring-2 ring-yellow-500  dark:bg-slate-900 dark:text-slate-100 dark:border-slate-800',
        children: oE.map(r => P.jsx('option', { value: r, children: r }, r))
      }),
      P.jsx('span', { children: 'items per page' })
    ]
  })
}
const Eu = (e, t) => Array.from({ length: t - e + 1 }, (n, r) => e + r)
function Bk({ totalItems: e, itemsPerPage: t, offset: n, onOffsetChange: r }) {
  const i = Math.ceil(e / t),
    s = Math.floor(n / t) + 1,
    o = w.useMemo(() => {
      if (i <= 5) return Eu(1, i)
      const l = s <= 3,
        u = s >= i - 2
      return l
        ? [...Eu(1, 3), '...', i]
        : u
          ? [1, '...', ...Eu(i - 2, i)]
          : [1, '...', ...Eu(s - 1, s + 1), '...', i]
    }, [s, i]),
    a = l => {
      if (typeof l != 'number') return
      const u = (l - 1) * t
      r(u)
    }
  return P.jsxs('div', {
    className: 'flex items-center justify-center space-x-2 sm:flex-wrap sm:gap-y-3',
    children: [
      P.jsxs(Ks, {
        rounded: !0,
        onClick: () => r(Math.max(0, n - t)),
        disabled: n === 0,
        'aria-label': 'Previous page',
        children: [P.jsx(gk, { size: 20 }), ' Prev']
      }),
      o.map((l, u) =>
        P.jsx(
          w.Fragment,
          {
            children:
              l === '...'
                ? P.jsx('span', {
                    title: 'More pages',
                    className: 'px-2 dark:text-slate-100',
                    children: P.jsx(yk, {})
                  })
                : P.jsx(Ks, {
                    onClick: () => a(l),
                    rounded: !0,
                    className: l === s ? 'font-semibold' : '',
                    variant: s === l ? 'primary' : 'default',
                    children: l
                  })
          },
          u
        )
      ),
      P.jsxs(Ks, {
        rounded: !0,
        onClick: () => r(Math.min((i - 1) * t, n + t)),
        disabled: n + t >= e,
        'aria-label': 'Next page',
        children: ['Next ', P.jsx(vk, { size: 20 })]
      })
    ]
  })
}
function zk(e) {
  if (typeof Proxy > 'u') return e
  const t = new Map(),
    n = (...r) => e(...r)
  return new Proxy(n, { get: (r, i) => (i === 'create' ? e : (t.has(i) || t.set(i, e(i)), t.get(i))) })
}
function tl(e) {
  return e !== null && typeof e == 'object' && typeof e.start == 'function'
}
const sp = e => Array.isArray(e)
function aE(e, t) {
  if (!Array.isArray(t)) return !1
  const n = t.length
  if (n !== e.length) return !1
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1
  return !0
}
function nl(e) {
  return typeof e == 'string' || Array.isArray(e)
}
function Bv(e) {
  const t = [{}, {}]
  return (
    e == null ||
      e.values.forEach((n, r) => {
        ;(t[0][r] = n.get()), (t[1][r] = n.getVelocity())
      }),
    t
  )
}
function Wm(e, t, n, r) {
  if (typeof t == 'function') {
    const [i, s] = Bv(r)
    t = t(n !== void 0 ? n : e.custom, i, s)
  }
  if ((typeof t == 'string' && (t = e.variants && e.variants[t]), typeof t == 'function')) {
    const [i, s] = Bv(r)
    t = t(n !== void 0 ? n : e.custom, i, s)
  }
  return t
}
function hd(e, t, n) {
  const r = e.getProps()
  return Wm(r, t, n !== void 0 ? n : r.custom, e)
}
const Gm = ['animate', 'whileInView', 'whileFocus', 'whileHover', 'whileTap', 'whileDrag', 'exit'],
  qm = ['initial', ...Gm],
  Nl = [
    'transformPerspective',
    'x',
    'y',
    'z',
    'translateX',
    'translateY',
    'translateZ',
    'scale',
    'scaleX',
    'scaleY',
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
    'skew',
    'skewX',
    'skewY'
  ],
  hi = new Set(Nl),
  cr = e => e * 1e3,
  dr = e => e / 1e3,
  Uk = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
  Hk = e => ({
    type: 'spring',
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  }),
  Wk = { type: 'keyframes', duration: 0.8 },
  Gk = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  qk = (e, { keyframes: t }) =>
    t.length > 2 ? Wk : hi.has(e) ? (e.startsWith('scale') ? Hk(t[1]) : Uk) : Gk
function Kk({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: s,
  repeatType: o,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length
}
function Km(e, t) {
  return e[t] || e.default || e
}
const Zk = { skipAnimations: !1, useManualTiming: !1 },
  Yk = e => e !== null
function pd(e, { repeat: t, repeatType: n = 'loop' }, r) {
  const i = e.filter(Yk),
    s = t && n !== 'loop' && t % 2 === 1 ? 0 : i.length - 1
  return !s || r === void 0 ? i[s] : r
}
const mt = e => e
function Qk(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1
  const s = new WeakSet()
  let o = { delta: 0, timestamp: 0, isProcessing: !1 }
  function a(u) {
    s.has(u) && (l.schedule(u), e()), u(o)
  }
  const l = {
    schedule: (u, c = !1, d = !1) => {
      const h = d && r ? t : n
      return c && s.add(u), h.has(u) || h.add(u), u
    },
    cancel: u => {
      n.delete(u), s.delete(u)
    },
    process: u => {
      if (((o = u), r)) {
        i = !0
        return
      }
      ;(r = !0), ([t, n] = [n, t]), n.clear(), t.forEach(a), (r = !1), i && ((i = !1), l.process(u))
    }
  }
  return l
}
const Su = ['read', 'resolveKeyframes', 'update', 'preRender', 'render', 'postRender'],
  Xk = 40
function lE(e, t) {
  let n = !1,
    r = !0
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = () => (n = !0),
    o = Su.reduce((p, m) => ((p[m] = Qk(s)), p), {}),
    { read: a, resolveKeyframes: l, update: u, preRender: c, render: d, postRender: f } = o,
    h = () => {
      const p = performance.now()
      ;(n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(p - i.timestamp, Xk), 1)),
        (i.timestamp = p),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        d.process(i),
        f.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(h))
    },
    v = () => {
      ;(n = !0), (r = !0), i.isProcessing || e(h)
    }
  return {
    schedule: Su.reduce((p, m) => {
      const g = o[m]
      return (p[m] = (E, S = !1, C = !1) => (n || v(), g.schedule(E, S, C))), p
    }, {}),
    cancel: p => {
      for (let m = 0; m < Su.length; m++) o[Su[m]].cancel(p)
    },
    state: i,
    steps: o
  }
}
const {
    schedule: _e,
    cancel: xr,
    state: rt,
    steps: xf
  } = lE(typeof requestAnimationFrame < 'u' ? requestAnimationFrame : mt, !0),
  uE = e => /^0[^.\s]+$/u.test(e)
function Jk(e) {
  return typeof e == 'number' ? e === 0 : e !== null ? e === 'none' || e === '0' || uE(e) : !0
}
let op = mt
const cE = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  dE = e => t => typeof t == 'string' && t.startsWith(e),
  fE = dE('--'),
  e5 = dE('var(--'),
  Zm = e => (e5(e) ? t5.test(e.split('/*')[0].trim()) : !1),
  t5 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  n5 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
function r5(e) {
  const t = n5.exec(e)
  if (!t) return [,]
  const [, n, r, i] = t
  return [`--${n ?? r}`, i]
}
function hE(e, t, n = 1) {
  const [r, i] = r5(e)
  if (!r) return
  const s = window.getComputedStyle(t).getPropertyValue(r)
  if (s) {
    const o = s.trim()
    return cE(o) ? parseFloat(o) : o
  }
  return Zm(i) ? hE(i, t, n + 1) : i
}
const ti = (e, t, n) => (n > t ? t : n < e ? e : n),
  Io = { test: e => typeof e == 'number', parse: parseFloat, transform: e => e },
  Ra = { ...Io, transform: e => ti(0, 1, e) },
  Tu = { ...Io, default: 1 },
  Aa = e => Math.round(e * 1e5) / 1e5,
  Ym = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
  i5 =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  s5 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
function Il(e) {
  return typeof e == 'string'
}
function o5(e) {
  return e == null
}
const Dl = e => ({
    test: t => Il(t) && t.endsWith(e) && t.split(' ').length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
  }),
  Pr = Dl('deg'),
  qn = Dl('%'),
  se = Dl('px'),
  a5 = Dl('vh'),
  l5 = Dl('vw'),
  zv = { ...qn, parse: e => qn.parse(e) / 100, transform: e => qn.transform(e * 100) },
  u5 = new Set([
    'width',
    'height',
    'top',
    'left',
    'right',
    'bottom',
    'x',
    'y',
    'translateX',
    'translateY'
  ]),
  Uv = e => e === Io || e === se,
  Hv = (e, t) => parseFloat(e.split(', ')[t]),
  Wv =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === 'none' || !r) return 0
      const i = r.match(/^matrix3d\((.+)\)$/u)
      if (i) return Hv(i[1], t)
      {
        const s = r.match(/^matrix\((.+)\)$/u)
        return s ? Hv(s[1], e) : 0
      }
    },
  c5 = new Set(['x', 'y', 'z']),
  d5 = Nl.filter(e => !c5.has(e))
function f5(e) {
  const t = []
  return (
    d5.forEach(n => {
      const r = e.getValue(n)
      r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith('scale') ? 1 : 0))
    }),
    t
  )
}
const Co = {
  width: ({ x: e }, { paddingLeft: t = '0', paddingRight: n = '0' }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = '0', paddingBottom: n = '0' }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Wv(4, 13),
  y: Wv(5, 14)
}
Co.translateX = Co.x
Co.translateY = Co.y
const pE = e => t => t.test(e),
  h5 = { test: e => e === 'auto', parse: e => e },
  mE = [Io, se, qn, Pr, l5, a5, h5],
  Gv = e => mE.find(pE(e)),
  Ui = new Set()
let ap = !1,
  lp = !1
function gE() {
  if (lp) {
    const e = Array.from(Ui).filter(r => r.needsMeasurement),
      t = new Set(e.map(r => r.element)),
      n = new Map()
    t.forEach(r => {
      const i = f5(r)
      i.length && (n.set(r, i), r.render())
    }),
      e.forEach(r => r.measureInitialState()),
      t.forEach(r => {
        r.render()
        const i = n.get(r)
        i &&
          i.forEach(([s, o]) => {
            var a
            ;(a = r.getValue(s)) === null || a === void 0 || a.set(o)
          })
      }),
      e.forEach(r => r.measureEndState()),
      e.forEach(r => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
      })
  }
  ;(lp = !1), (ap = !1), Ui.forEach(e => e.complete()), Ui.clear()
}
function vE() {
  Ui.forEach(e => {
    e.readKeyframes(), e.needsMeasurement && (lp = !0)
  })
}
function p5() {
  vE(), gE()
}
class Qm {
  constructor(t, n, r, i, s, o = !1) {
    ;(this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = s),
      (this.isAsync = o)
  }
  scheduleResolve() {
    ;(this.isScheduled = !0),
      this.isAsync
        ? (Ui.add(this), ap || ((ap = !0), _e.read(vE), _e.resolveKeyframes(gE)))
        : (this.readKeyframes(), this.complete())
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: i } = this
    for (let s = 0; s < t.length; s++)
      if (t[s] === null)
        if (s === 0) {
          const o = i == null ? void 0 : i.get(),
            a = t[t.length - 1]
          if (o !== void 0) t[0] = o
          else if (r && n) {
            const l = r.readValue(n, a)
            l != null && (t[0] = l)
          }
          t[0] === void 0 && (t[0] = a), i && o === void 0 && i.set(t[0])
        } else t[s] = t[s - 1]
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    ;(this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      Ui.delete(this)
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), Ui.delete(this))
  }
  resume() {
    this.isComplete || this.scheduleResolve()
  }
}
const Xm = (e, t) => n =>
    !!(
      (Il(n) && s5.test(n) && n.startsWith(e)) ||
      (t && !o5(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  yE = (e, t, n) => r => {
    if (!Il(r)) return r
    const [i, s, o, a] = r.match(Ym)
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1
    }
  },
  m5 = e => ti(0, 255, e),
  Ef = { ...Io, transform: e => Math.round(m5(e)) },
  Ai = {
    test: Xm('rgb', 'red'),
    parse: yE('red', 'green', 'blue'),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      'rgba(' +
      Ef.transform(e) +
      ', ' +
      Ef.transform(t) +
      ', ' +
      Ef.transform(n) +
      ', ' +
      Aa(Ra.transform(r)) +
      ')'
  }
function g5(e) {
  let t = '',
    n = '',
    r = '',
    i = ''
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1
    }
  )
}
const up = { test: Xm('#'), parse: g5, transform: Ai.transform },
  Ns = {
    test: Xm('hsl', 'hue'),
    parse: yE('hue', 'saturation', 'lightness'),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      'hsla(' +
      Math.round(e) +
      ', ' +
      qn.transform(Aa(t)) +
      ', ' +
      qn.transform(Aa(n)) +
      ', ' +
      Aa(Ra.transform(r)) +
      ')'
  },
  dt = {
    test: e => Ai.test(e) || up.test(e) || Ns.test(e),
    parse: e => (Ai.test(e) ? Ai.parse(e) : Ns.test(e) ? Ns.parse(e) : up.parse(e)),
    transform: e => (Il(e) ? e : e.hasOwnProperty('red') ? Ai.transform(e) : Ns.transform(e))
  }
function v5(e) {
  var t, n
  return (
    isNaN(e) &&
    Il(e) &&
    (((t = e.match(Ym)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(i5)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  )
}
const wE = 'number',
  xE = 'color',
  y5 = 'var',
  w5 = 'var(',
  qv = '${}',
  x5 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu
function rl(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = []
  let s = 0
  const a = t
    .replace(
      x5,
      l => (
        dt.test(l)
          ? (r.color.push(s), i.push(xE), n.push(dt.parse(l)))
          : l.startsWith(w5)
            ? (r.var.push(s), i.push(y5), n.push(l))
            : (r.number.push(s), i.push(wE), n.push(parseFloat(l))),
        ++s,
        qv
      )
    )
    .split(qv)
  return { values: n, split: a, indexes: r, types: i }
}
function EE(e) {
  return rl(e).values
}
function SE(e) {
  const { split: t, types: n } = rl(e),
    r = t.length
  return i => {
    let s = ''
    for (let o = 0; o < r; o++)
      if (((s += t[o]), i[o] !== void 0)) {
        const a = n[o]
        a === wE ? (s += Aa(i[o])) : a === xE ? (s += dt.transform(i[o])) : (s += i[o])
      }
    return s
  }
}
const E5 = e => (typeof e == 'number' ? 0 : e)
function S5(e) {
  const t = EE(e)
  return SE(e)(t.map(E5))
}
const ni = { test: v5, parse: EE, createTransformer: SE, getAnimatableNone: S5 },
  T5 = new Set(['brightness', 'contrast', 'saturate', 'opacity'])
function C5(e) {
  const [t, n] = e.slice(0, -1).split('(')
  if (t === 'drop-shadow') return e
  const [r] = n.match(Ym) || []
  if (!r) return e
  const i = n.replace(r, '')
  let s = T5.has(t) ? 1 : 0
  return r !== n && (s *= 100), t + '(' + s + i + ')'
}
const _5 = /\b([a-z-]*)\(.*?\)/gu,
  cp = {
    ...ni,
    getAnimatableNone: e => {
      const t = e.match(_5)
      return t ? t.map(C5).join(' ') : e
    }
  },
  Kv = { ...Io, transform: Math.round },
  Jm = {
    borderWidth: se,
    borderTopWidth: se,
    borderRightWidth: se,
    borderBottomWidth: se,
    borderLeftWidth: se,
    borderRadius: se,
    radius: se,
    borderTopLeftRadius: se,
    borderTopRightRadius: se,
    borderBottomRightRadius: se,
    borderBottomLeftRadius: se,
    width: se,
    maxWidth: se,
    height: se,
    maxHeight: se,
    size: se,
    top: se,
    right: se,
    bottom: se,
    left: se,
    padding: se,
    paddingTop: se,
    paddingRight: se,
    paddingBottom: se,
    paddingLeft: se,
    margin: se,
    marginTop: se,
    marginRight: se,
    marginBottom: se,
    marginLeft: se,
    rotate: Pr,
    rotateX: Pr,
    rotateY: Pr,
    rotateZ: Pr,
    scale: Tu,
    scaleX: Tu,
    scaleY: Tu,
    scaleZ: Tu,
    skew: Pr,
    skewX: Pr,
    skewY: Pr,
    distance: se,
    translateX: se,
    translateY: se,
    translateZ: se,
    x: se,
    y: se,
    z: se,
    perspective: se,
    transformPerspective: se,
    opacity: Ra,
    originX: zv,
    originY: zv,
    originZ: se,
    zIndex: Kv,
    backgroundPositionX: se,
    backgroundPositionY: se,
    fillOpacity: Ra,
    strokeOpacity: Ra,
    numOctaves: Kv
  },
  b5 = {
    ...Jm,
    color: dt,
    backgroundColor: dt,
    outlineColor: dt,
    fill: dt,
    stroke: dt,
    borderColor: dt,
    borderTopColor: dt,
    borderRightColor: dt,
    borderBottomColor: dt,
    borderLeftColor: dt,
    filter: cp,
    WebkitFilter: cp
  },
  e0 = e => b5[e]
function TE(e, t) {
  let n = e0(e)
  return n !== cp && (n = ni), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const k5 = new Set(['auto', 'none', '0'])
function P5(e, t, n) {
  let r = 0,
    i
  for (; r < e.length && !i; ) {
    const s = e[r]
    typeof s == 'string' && !k5.has(s) && rl(s).values.length && (i = e[r]), r++
  }
  if (i && n) for (const s of t) e[s] = TE(n, i)
}
class CE extends Qm {
  constructor(t, n, r, i, s) {
    super(t, n, r, i, s, !0)
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this
    if (!n || !n.current) return
    super.readKeyframes()
    for (let l = 0; l < t.length; l++) {
      let u = t[l]
      if (typeof u == 'string' && ((u = u.trim()), Zm(u))) {
        const c = hE(u, n.current)
        c !== void 0 && (t[l] = c), l === t.length - 1 && (this.finalKeyframe = u)
      }
    }
    if ((this.resolveNoneKeyframes(), !u5.has(r) || t.length !== 2)) return
    const [i, s] = t,
      o = Gv(i),
      a = Gv(s)
    if (o !== a)
      if (Uv(o) && Uv(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l]
          typeof u == 'string' && (t[l] = parseFloat(u))
        }
      else this.needsMeasurement = !0
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = []
    for (let i = 0; i < t.length; i++) Jk(t[i]) && r.push(i)
    r.length && P5(t, r, n)
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this
    if (!t || !t.current) return
    r === 'height' && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Co[r](t.measureViewportBox(), window.getComputedStyle(t.current))),
      (n[0] = this.measuredOrigin)
    const i = n[n.length - 1]
    i !== void 0 && t.getValue(r, i).jump(i, !1)
  }
  measureEndState() {
    var t
    const { element: n, name: r, unresolvedKeyframes: i } = this
    if (!n || !n.current) return
    const s = n.getValue(r)
    s && s.jump(this.measuredOrigin, !1)
    const o = i.length - 1,
      a = i[o]
    ;(i[o] = Co[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, u]) => {
          n.getValue(l).set(u)
        }),
      this.resolveNoneKeyframes()
  }
}
function _E(e) {
  let t
  return () => (t === void 0 && (t = e()), t)
}
let Hu
function R5() {
  Hu = void 0
}
const fr = {
    now: () => (
      Hu === void 0 && fr.set(rt.isProcessing || Zk.useManualTiming ? rt.timestamp : performance.now()),
      Hu
    ),
    set: e => {
      ;(Hu = e), queueMicrotask(R5)
    }
  },
  Zv = (e, t) =>
    t === 'zIndex'
      ? !1
      : !!(
          typeof e == 'number' ||
          Array.isArray(e) ||
          (typeof e == 'string' && (ni.test(e) || e === '0') && !e.startsWith('url('))
        )
function A5(e) {
  const t = e[0]
  if (e.length === 1) return !0
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0
}
function O5(e, t, n, r) {
  const i = e[0]
  if (i === null) return !1
  if (t === 'display' || t === 'visibility') return !0
  const s = e[e.length - 1],
    o = Zv(i, t),
    a = Zv(s, t)
  return !o || !a ? !1 : A5(e) || (n === 'spring' && r)
}
const L5 = 40
class bE {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = 'keyframes',
    repeat: i = 0,
    repeatDelay: s = 0,
    repeatType: o = 'loop',
    ...a
  }) {
    ;(this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = fr.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: s,
        repeatType: o,
        ...a
      }),
      this.updateFinishedPromise()
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > L5
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && p5(), this._resolved
  }
  onKeyframesResolved(t, n) {
    ;(this.resolvedAt = fr.now()), (this.hasAttemptedResolve = !0)
    const {
      name: r,
      type: i,
      velocity: s,
      delay: o,
      onComplete: a,
      onUpdate: l,
      isGenerator: u
    } = this.options
    if (!u && !O5(t, r, i, s))
      if (o) this.options.duration = 0
      else {
        l == null || l(pd(t, this.options, n)), a == null || a(), this.resolveFinishedPromise()
        return
      }
    const c = this.initPlayback(t, n)
    c !== !1 && ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }), this.onPostResolved())
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n)
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise(t => {
      this.resolveFinishedPromise = t
    })
  }
}
function kE(e, t) {
  return t ? e * (1e3 / t) : 0
}
const M5 = 5
function PE(e, t, n) {
  const r = Math.max(t - M5, 0)
  return kE(n - e(r), t - r)
}
const Sf = 0.001,
  N5 = 0.01,
  I5 = 10,
  D5 = 0.05,
  F5 = 1
function j5({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
  let i,
    s,
    o = 1 - t
  ;(o = ti(D5, F5, o)),
    (e = ti(N5, I5, dr(e))),
    o < 1
      ? ((i = u => {
          const c = u * o,
            d = c * e,
            f = c - n,
            h = dp(u, o),
            v = Math.exp(-d)
          return Sf - (f / h) * v
        }),
        (s = u => {
          const d = u * o * e,
            f = d * n + n,
            h = Math.pow(o, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-d),
            y = dp(Math.pow(u, 2), o)
          return ((-i(u) + Sf > 0 ? -1 : 1) * ((f - h) * v)) / y
        }))
      : ((i = u => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1
          return -Sf + c * d
        }),
        (s = u => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e)
          return c * d
        }))
  const a = 5 / e,
    l = V5(i, s, a)
  if (((e = cr(e)), isNaN(l))) return { stiffness: 100, damping: 10, duration: e }
  {
    const u = Math.pow(l, 2) * r
    return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e }
  }
}
const $5 = 12
function V5(e, t, n) {
  let r = n
  for (let i = 1; i < $5; i++) r = r - e(r) / t(r)
  return r
}
function dp(e, t) {
  return e * Math.sqrt(1 - t * t)
}
const B5 = ['duration', 'bounce'],
  z5 = ['stiffness', 'damping', 'mass']
function Yv(e, t) {
  return t.some(n => e[n] !== void 0)
}
function U5(e) {
  let t = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...e }
  if (!Yv(e, z5) && Yv(e, B5)) {
    const n = j5(e)
    ;(t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0)
  }
  return t
}
function RE({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    s = e[e.length - 1],
    o = { done: !1, value: i },
    {
      stiffness: a,
      damping: l,
      mass: u,
      duration: c,
      velocity: d,
      isResolvedFromDuration: f
    } = U5({ ...r, velocity: -dr(r.velocity || 0) }),
    h = d || 0,
    v = l / (2 * Math.sqrt(a * u)),
    y = s - i,
    x = dr(Math.sqrt(a / u)),
    p = Math.abs(y) < 5
  n || (n = p ? 0.01 : 2), t || (t = p ? 0.005 : 0.5)
  let m
  if (v < 1) {
    const g = dp(x, v)
    m = E => {
      const S = Math.exp(-v * x * E)
      return s - S * (((h + v * x * y) / g) * Math.sin(g * E) + y * Math.cos(g * E))
    }
  } else if (v === 1) m = g => s - Math.exp(-x * g) * (y + (h + x * y) * g)
  else {
    const g = x * Math.sqrt(v * v - 1)
    m = E => {
      const S = Math.exp(-v * x * E),
        C = Math.min(g * E, 300)
      return s - (S * ((h + v * x * y) * Math.sinh(C) + g * y * Math.cosh(C))) / g
    }
  }
  return {
    calculatedDuration: (f && c) || null,
    next: g => {
      const E = m(g)
      if (f) o.done = g >= c
      else {
        let S = 0
        v < 1 && (S = g === 0 ? cr(h) : PE(m, g, E))
        const C = Math.abs(S) <= n,
          k = Math.abs(s - E) <= t
        o.done = C && k
      }
      return (o.value = o.done ? s : E), o
    }
  }
}
function Qv({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c
}) {
  const d = e[0],
    f = { done: !1, value: d },
    h = T => (a !== void 0 && T < a) || (l !== void 0 && T > l),
    v = T => (a === void 0 ? l : l === void 0 || Math.abs(a - T) < Math.abs(l - T) ? a : l)
  let y = n * t
  const x = d + y,
    p = o === void 0 ? x : o(x)
  p !== x && (y = p - d)
  const m = T => -y * Math.exp(-T / r),
    g = T => p + m(T),
    E = T => {
      const A = m(T),
        O = g(T)
      ;(f.done = Math.abs(A) <= u), (f.value = f.done ? p : O)
    }
  let S, C
  const k = T => {
    h(f.value) &&
      ((S = T),
      (C = RE({
        keyframes: [f.value, v(f.value)],
        velocity: PE(g, T, f.value),
        damping: i,
        stiffness: s,
        restDelta: u,
        restSpeed: c
      })))
  }
  return (
    k(0),
    {
      calculatedDuration: null,
      next: T => {
        let A = !1
        return (
          !C && S === void 0 && ((A = !0), E(T), k(T)),
          S !== void 0 && T >= S ? C.next(T - S) : (!A && E(T), f)
        )
      }
    }
  )
}
const AE = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  H5 = 1e-7,
  W5 = 12
function G5(e, t, n, r, i) {
  let s,
    o,
    a = 0
  do (o = t + (n - t) / 2), (s = AE(o, r, i) - e), s > 0 ? (n = o) : (t = o)
  while (Math.abs(s) > H5 && ++a < W5)
  return o
}
function Fl(e, t, n, r) {
  if (e === t && n === r) return mt
  const i = s => G5(s, 0, 1, e, n)
  return s => (s === 0 || s === 1 ? s : AE(i(s), t, r))
}
const q5 = Fl(0.42, 0, 1, 1),
  K5 = Fl(0, 0, 0.58, 1),
  OE = Fl(0.42, 0, 0.58, 1),
  Z5 = e => Array.isArray(e) && typeof e[0] != 'number',
  LE = e => t => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  ME = e => t => 1 - e(1 - t),
  t0 = e => 1 - Math.sin(Math.acos(e)),
  NE = ME(t0),
  Y5 = LE(t0),
  IE = Fl(0.33, 1.53, 0.69, 0.99),
  n0 = ME(IE),
  Q5 = LE(n0),
  X5 = e => ((e *= 2) < 1 ? 0.5 * n0(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))),
  Xv = {
    linear: mt,
    easeIn: q5,
    easeInOut: OE,
    easeOut: K5,
    circIn: t0,
    circInOut: Y5,
    circOut: NE,
    backIn: n0,
    backInOut: Q5,
    backOut: IE,
    anticipate: X5
  },
  Jv = e => {
    if (Array.isArray(e)) {
      op(e.length === 4)
      const [t, n, r, i] = e
      return Fl(t, n, r, i)
    } else if (typeof e == 'string') return op(Xv[e] !== void 0), Xv[e]
    return e
  },
  J5 = (e, t) => n => t(e(n)),
  hr = (...e) => e.reduce(J5),
  il = (e, t, n) => {
    const r = t - e
    return r === 0 ? 1 : (n - e) / r
  },
  Fe = (e, t, n) => e + (t - e) * n
function Tf(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  )
}
function eP({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ;(e /= 360), (t /= 100), (n /= 100)
  let i = 0,
    s = 0,
    o = 0
  if (!t) i = s = o = n
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a
    ;(i = Tf(l, a, e + 1 / 3)), (s = Tf(l, a, e)), (o = Tf(l, a, e - 1 / 3))
  }
  return { red: Math.round(i * 255), green: Math.round(s * 255), blue: Math.round(o * 255), alpha: r }
}
function kc(e, t) {
  return n => (n > 0 ? t : e)
}
const Cf = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r
    return i < 0 ? 0 : Math.sqrt(i)
  },
  tP = [up, Ai, Ns],
  nP = e => tP.find(t => t.test(e))
function ey(e) {
  const t = nP(e)
  if (!t) return !1
  let n = t.parse(e)
  return t === Ns && (n = eP(n)), n
}
const ty = (e, t) => {
    const n = ey(e),
      r = ey(t)
    if (!n || !r) return kc(e, t)
    const i = { ...n }
    return s => (
      (i.red = Cf(n.red, r.red, s)),
      (i.green = Cf(n.green, r.green, s)),
      (i.blue = Cf(n.blue, r.blue, s)),
      (i.alpha = Fe(n.alpha, r.alpha, s)),
      Ai.transform(i)
    )
  },
  fp = new Set(['none', 'hidden'])
function rP(e, t) {
  return fp.has(e) ? n => (n <= 0 ? e : t) : n => (n >= 1 ? t : e)
}
function iP(e, t) {
  return n => Fe(e, t, n)
}
function r0(e) {
  return typeof e == 'number'
    ? iP
    : typeof e == 'string'
      ? Zm(e)
        ? kc
        : dt.test(e)
          ? ty
          : aP
      : Array.isArray(e)
        ? DE
        : typeof e == 'object'
          ? dt.test(e)
            ? ty
            : sP
          : kc
}
function DE(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((s, o) => r0(s)(s, t[o]))
  return s => {
    for (let o = 0; o < r; o++) n[o] = i[o](s)
    return n
  }
}
function sP(e, t) {
  const n = { ...e, ...t },
    r = {}
  for (const i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = r0(e[i])(e[i], t[i]))
  return i => {
    for (const s in r) n[s] = r[s](i)
    return n
  }
}
function oP(e, t) {
  var n
  const r = [],
    i = { color: 0, var: 0, number: 0 }
  for (let s = 0; s < t.values.length; s++) {
    const o = t.types[s],
      a = e.indexes[o][i[o]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0
    ;(r[s] = l), i[o]++
  }
  return r
}
const aP = (e, t) => {
  const n = ni.createTransformer(t),
    r = rl(e),
    i = rl(t)
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (fp.has(e) && !i.values.length) || (fp.has(t) && !r.values.length)
      ? rP(e, t)
      : hr(DE(oP(r, i), i.values), n)
    : kc(e, t)
}
function FE(e, t, n) {
  return typeof e == 'number' && typeof t == 'number' && typeof n == 'number' ? Fe(e, t, n) : r0(e)(e, t)
}
function lP(e, t, n) {
  const r = [],
    i = n || FE,
    s = e.length - 1
  for (let o = 0; o < s; o++) {
    let a = i(e[o], e[o + 1])
    if (t) {
      const l = Array.isArray(t) ? t[o] || mt : t
      a = hr(l, a)
    }
    r.push(a)
  }
  return r
}
function uP(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length
  if ((op(s === t.length), s === 1)) return () => t[0]
  if (s === 2 && e[0] === e[1]) return () => t[1]
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()))
  const o = lP(t, r, i),
    a = o.length,
    l = u => {
      let c = 0
      if (a > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = il(e[c], e[c + 1], u)
      return o[c](d)
    }
  return n ? u => l(ti(e[0], e[s - 1], u)) : l
}
function cP(e, t) {
  const n = e[e.length - 1]
  for (let r = 1; r <= t; r++) {
    const i = il(0, t, r)
    e.push(Fe(n, 1, i))
  }
}
function dP(e) {
  const t = [0]
  return cP(t, e.length - 1), t
}
function fP(e, t) {
  return e.map(n => n * t)
}
function hP(e, t) {
  return e.map(() => t || OE).splice(0, e.length - 1)
}
function Pc({ duration: e = 300, keyframes: t, times: n, ease: r = 'easeInOut' }) {
  const i = Z5(r) ? r.map(Jv) : Jv(r),
    s = { done: !1, value: t[0] },
    o = fP(n && n.length === t.length ? n : dP(t), e),
    a = uP(o, t, { ease: Array.isArray(i) ? i : hP(t, i) })
  return { calculatedDuration: e, next: l => ((s.value = a(l)), (s.done = l >= e), s) }
}
const ny = 2e4
function pP(e) {
  let t = 0
  const n = 50
  let r = e.next(t)
  for (; !r.done && t < ny; ) (t += n), (r = e.next(t))
  return t >= ny ? 1 / 0 : t
}
const mP = e => {
    const t = ({ timestamp: n }) => e(n)
    return {
      start: () => _e.update(t, !0),
      stop: () => xr(t),
      now: () => (rt.isProcessing ? rt.timestamp : fr.now())
    }
  },
  gP = { decay: Qv, inertia: Qv, tween: Pc, keyframes: Pc, spring: RE },
  vP = e => e / 100
class i0 extends bE {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = 'running'),
      (this.startTime = null),
      (this.state = 'idle'),
      (this.stop = () => {
        if ((this.resolver.cancel(), (this.isStopped = !0), this.state === 'idle')) return
        this.teardown()
        const { onStop: l } = this.options
        l && l()
      })
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options,
      o = (i == null ? void 0 : i.KeyframeResolver) || Qm,
      a = (l, u) => this.onKeyframesResolved(l, u)
    ;(this.resolver = new o(s, a, n, r, i)), this.resolver.scheduleResolve()
  }
  initPlayback(t) {
    const {
        type: n = 'keyframes',
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: s,
        velocity: o = 0
      } = this.options,
      a = gP[n] || Pc
    let l, u
    a !== Pc && typeof t[0] != 'number' && ((l = hr(vP, FE(t[0], t[1]))), (t = [0, 100]))
    const c = a({ ...this.options, keyframes: t })
    s === 'mirror' && (u = a({ ...this.options, keyframes: [...t].reverse(), velocity: -o })),
      c.calculatedDuration === null && (c.calculatedDuration = pP(c))
    const { calculatedDuration: d } = c,
      f = d + i,
      h = f * (r + 1) - i
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: d,
      resolvedDuration: f,
      totalDuration: h
    }
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options
    this.play(),
      this.pendingPlayState === 'paused' || !t ? this.pause() : (this.state = this.pendingPlayState)
  }
  tick(t, n = !1) {
    const { resolved: r } = this
    if (!r) {
      const { keyframes: T } = this.options
      return { done: !0, value: T[T.length - 1] }
    }
    const {
      finalKeyframe: i,
      generator: s,
      mirroredGenerator: o,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: d
    } = r
    if (this.startTime === null) return s.next(0)
    const { delay: f, repeat: h, repeatType: v, repeatDelay: y, onUpdate: x } = this.options
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 && (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(t - this.startTime) * this.speed)
    const p = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
      m = this.speed >= 0 ? p < 0 : p > c
    ;(this.currentTime = Math.max(p, 0)),
      this.state === 'finished' && this.holdTime === null && (this.currentTime = c)
    let g = this.currentTime,
      E = s
    if (h) {
      const T = Math.min(this.currentTime, c) / d
      let A = Math.floor(T),
        O = T % 1
      !O && T >= 1 && (O = 1),
        O === 1 && A--,
        (A = Math.min(A, h + 1)),
        !!(A % 2) && (v === 'reverse' ? ((O = 1 - O), y && (O -= y / d)) : v === 'mirror' && (E = o)),
        (g = ti(0, 1, O) * d)
    }
    const S = m ? { done: !1, value: l[0] } : E.next(g)
    a && (S.value = a(S.value))
    let { done: C } = S
    !m && u !== null && (C = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0)
    const k = this.holdTime === null && (this.state === 'finished' || (this.state === 'running' && C))
    return (
      k && i !== void 0 && (S.value = pd(l, this.options, i)), x && x(S.value), k && this.finish(), S
    )
  }
  get duration() {
    const { resolved: t } = this
    return t ? dr(t.calculatedDuration) : 0
  }
  get time() {
    return dr(this.currentTime)
  }
  set time(t) {
    ;(t = cr(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed)
  }
  get speed() {
    return this.playbackSpeed
  }
  set speed(t) {
    const n = this.playbackSpeed !== t
    ;(this.playbackSpeed = t), n && (this.time = dr(this.currentTime))
  }
  play() {
    if ((this.resolver.isScheduled || this.resolver.resume(), !this._resolved)) {
      this.pendingPlayState = 'running'
      return
    }
    if (this.isStopped) return
    const { driver: t = mP, onPlay: n, startTime: r } = this.options
    this.driver || (this.driver = t(s => this.tick(s))), n && n()
    const i = this.driver.now()
    this.holdTime !== null
      ? (this.startTime = i - this.holdTime)
      : this.startTime
        ? this.state === 'finished' && (this.startTime = i)
        : (this.startTime = r ?? this.calcStartTime()),
      this.state === 'finished' && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = 'running'),
      this.driver.start()
  }
  pause() {
    var t
    if (!this._resolved) {
      this.pendingPlayState = 'paused'
      return
    }
    ;(this.state = 'paused'), (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0)
  }
  complete() {
    this.state !== 'running' && this.play(),
      (this.pendingPlayState = this.state = 'finished'),
      (this.holdTime = null)
  }
  finish() {
    this.teardown(), (this.state = 'finished')
    const { onComplete: t } = this.options
    t && t()
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
  }
  teardown() {
    ;(this.state = 'idle'),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel()
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0))
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0)
  }
}
const jE = new Set(['opacity', 'clipPath', 'filter', 'transform']),
  $E = e => Array.isArray(e) && typeof e[0] == 'number'
function VE(e) {
  return !!(!e || (typeof e == 'string' && e in s0) || $E(e) || (Array.isArray(e) && e.every(VE)))
}
const da = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  s0 = {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    circIn: da([0, 0.65, 0.55, 1]),
    circOut: da([0.55, 0, 1, 0.45]),
    backIn: da([0.31, 0.01, 0.66, -0.59]),
    backOut: da([0.33, 1.53, 0.69, 0.99])
  }
function yP(e) {
  return BE(e) || s0.easeOut
}
function BE(e) {
  if (e) return $E(e) ? da(e) : Array.isArray(e) ? e.map(yP) : s0[e]
}
function wP(
  e,
  t,
  n,
  { delay: r = 0, duration: i = 300, repeat: s = 0, repeatType: o = 'loop', ease: a, times: l } = {}
) {
  const u = { [t]: n }
  l && (u.offset = l)
  const c = BE(a)
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? 'linear' : c,
      fill: 'both',
      iterations: s + 1,
      direction: o === 'reverse' ? 'alternate' : 'normal'
    })
  )
}
const xP = _E(() => Object.hasOwnProperty.call(Element.prototype, 'animate')),
  Rc = 10,
  EP = 2e4
function SP(e) {
  return e.type === 'spring' || !VE(e.ease)
}
function TP(e, t) {
  const n = new i0({ ...t, keyframes: e, repeat: 0, delay: 0, isGenerator: !0 })
  let r = { done: !1, value: e[0] }
  const i = []
  let s = 0
  for (; !r.done && s < EP; ) (r = n.sample(s)), i.push(r.value), (s += Rc)
  return { times: void 0, keyframes: i, duration: s - Rc, ease: 'linear' }
}
class ry extends bE {
  constructor(t) {
    super(t)
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options
    ;(this.resolver = new CE(s, (o, a) => this.onKeyframesResolved(o, a), n, r, i)),
      this.resolver.scheduleResolve()
  }
  initPlayback(t, n) {
    var r
    let {
      duration: i = 300,
      times: s,
      ease: o,
      type: a,
      motionValue: l,
      name: u,
      startTime: c
    } = this.options
    if (!(!((r = l.owner) === null || r === void 0) && r.current)) return !1
    if (SP(this.options)) {
      const { onComplete: f, onUpdate: h, motionValue: v, element: y, ...x } = this.options,
        p = TP(t, x)
      ;(t = p.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (i = p.duration),
        (s = p.times),
        (o = p.ease),
        (a = 'keyframes')
    }
    const d = wP(l.owner.current, u, t, { ...this.options, duration: i, times: s, ease: o })
    return (
      (d.startTime = c ?? this.calcStartTime()),
      this.pendingTimeline
        ? ((d.timeline = this.pendingTimeline), (this.pendingTimeline = void 0))
        : (d.onfinish = () => {
            const { onComplete: f } = this.options
            l.set(pd(t, this.options, n)), f && f(), this.cancel(), this.resolveFinishedPromise()
          }),
      { animation: d, duration: i, times: s, type: a, ease: o, keyframes: t }
    )
  }
  get duration() {
    const { resolved: t } = this
    if (!t) return 0
    const { duration: n } = t
    return dr(n)
  }
  get time() {
    const { resolved: t } = this
    if (!t) return 0
    const { animation: n } = t
    return dr(n.currentTime || 0)
  }
  set time(t) {
    const { resolved: n } = this
    if (!n) return
    const { animation: r } = n
    r.currentTime = cr(t)
  }
  get speed() {
    const { resolved: t } = this
    if (!t) return 1
    const { animation: n } = t
    return n.playbackRate
  }
  set speed(t) {
    const { resolved: n } = this
    if (!n) return
    const { animation: r } = n
    r.playbackRate = t
  }
  get state() {
    const { resolved: t } = this
    if (!t) return 'idle'
    const { animation: n } = t
    return n.playState
  }
  get startTime() {
    const { resolved: t } = this
    if (!t) return null
    const { animation: n } = t
    return n.startTime
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t
    else {
      const { resolved: n } = this
      if (!n) return mt
      const { animation: r } = n
      ;(r.timeline = t), (r.onfinish = null)
    }
    return mt
  }
  play() {
    if (this.isStopped) return
    const { resolved: t } = this
    if (!t) return
    const { animation: n } = t
    n.playState === 'finished' && this.updateFinishedPromise(), n.play()
  }
  pause() {
    const { resolved: t } = this
    if (!t) return
    const { animation: n } = t
    n.pause()
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === 'idle')) return
    this.resolveFinishedPromise(), this.updateFinishedPromise()
    const { resolved: t } = this
    if (!t) return
    const { animation: n, keyframes: r, duration: i, type: s, ease: o, times: a } = t
    if (n.playState === 'idle' || n.playState === 'finished') return
    if (this.time) {
      const { motionValue: u, onUpdate: c, onComplete: d, element: f, ...h } = this.options,
        v = new i0({ ...h, keyframes: r, duration: i, type: s, ease: o, times: a, isGenerator: !0 }),
        y = cr(this.time)
      u.setWithVelocity(v.sample(y - Rc).value, v.sample(y).value, Rc)
    }
    const { onStop: l } = this.options
    l && l(), this.cancel()
  }
  complete() {
    const { resolved: t } = this
    t && t.animation.finish()
  }
  cancel() {
    const { resolved: t } = this
    t && t.animation.cancel()
  }
  static supports(t) {
    const { motionValue: n, name: r, repeatDelay: i, repeatType: s, damping: o, type: a } = t
    return (
      xP() &&
      r &&
      jE.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !i &&
      s !== 'mirror' &&
      o !== 0 &&
      a !== 'inertia'
    )
  }
}
function CP(e, t) {
  let n
  const r = () => {
    const { currentTime: i } = t,
      o = (i === null ? 0 : i.value) / 100
    n !== o && e(o), (n = o)
  }
  return _e.update(r, !0), () => xr(r)
}
const _P = _E(() => window.ScrollTimeline !== void 0)
class bP {
  constructor(t) {
    ;(this.stop = () => this.runAll('stop')), (this.animations = t.filter(Boolean))
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n)
  }
  getAll(t) {
    return this.animations[0][t]
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n
  }
  attachTimeline(t) {
    const n = this.animations.map(r => {
      if (_P() && r.attachTimeline) r.attachTimeline(t)
      else
        return (
          r.pause(),
          CP(i => {
            r.time = r.duration * i
          }, t)
        )
    })
    return () => {
      n.forEach((r, i) => {
        r && r(), this.animations[i].stop()
      })
    }
  }
  get time() {
    return this.getAll('time')
  }
  set time(t) {
    this.setAll('time', t)
  }
  get speed() {
    return this.getAll('speed')
  }
  set speed(t) {
    this.setAll('speed', t)
  }
  get startTime() {
    return this.getAll('startTime')
  }
  get duration() {
    let t = 0
    for (let n = 0; n < this.animations.length; n++) t = Math.max(t, this.animations[n].duration)
    return t
  }
  runAll(t) {
    this.animations.forEach(n => n[t]())
  }
  play() {
    this.runAll('play')
  }
  pause() {
    this.runAll('pause')
  }
  cancel() {
    this.runAll('cancel')
  }
  complete() {
    this.runAll('complete')
  }
}
const o0 =
    (e, t, n, r = {}, i, s, o) =>
    a => {
      const l = Km(r, e) || {},
        u = l.delay || r.delay || 0
      let { elapsed: c = 0 } = r
      c = c - cr(u)
      let d = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: 'easeOut',
        velocity: t.getVelocity(),
        ...l,
        delay: -c,
        onUpdate: h => {
          t.set(h), l.onUpdate && l.onUpdate(h)
        },
        onComplete: () => {
          a(), l.onComplete && l.onComplete(), o && o()
        },
        onStop: o,
        name: e,
        motionValue: t,
        element: s ? void 0 : i
      }
      Kk(l) || (d = { ...d, ...qk(e, d) }),
        d.duration && (d.duration = cr(d.duration)),
        d.repeatDelay && (d.repeatDelay = cr(d.repeatDelay)),
        d.from !== void 0 && (d.keyframes[0] = d.from)
      let f = !1
      if (
        ((d.type === !1 || (d.duration === 0 && !d.repeatDelay)) &&
          ((d.duration = 0), d.delay === 0 && (f = !0)),
        f && !s && t.get() !== void 0)
      ) {
        const h = pd(d.keyframes, l)
        if (h !== void 0)
          return (
            _e.update(() => {
              d.onUpdate(h), d.onComplete()
            }),
            new bP([])
          )
      }
      return !s && ry.supports(d) ? new ry(d) : new i0(d)
    },
  kP = e => !!(e && typeof e == 'object' && e.mix && e.toValue),
  PP = e => (sp(e) ? e[e.length - 1] || 0 : e)
function md(e, t) {
  e.indexOf(t) === -1 && e.push(t)
}
function gd(e, t) {
  const n = e.indexOf(t)
  n > -1 && e.splice(n, 1)
}
class a0 {
  constructor() {
    this.subscriptions = []
  }
  add(t) {
    return md(this.subscriptions, t), () => gd(this.subscriptions, t)
  }
  notify(t, n, r) {
    const i = this.subscriptions.length
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r)
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s]
          o && o(t, n, r)
        }
  }
  getSize() {
    return this.subscriptions.length
  }
  clear() {
    this.subscriptions.length = 0
  }
}
const iy = 30,
  RP = e => !isNaN(parseFloat(e))
class zE {
  constructor(t, n = {}) {
    ;(this.version = '11.5.4'),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const s = fr.now()
        this.updatedAt !== s && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
          i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner)
  }
  setCurrent(t) {
    ;(this.current = t),
      (this.updatedAt = fr.now()),
      this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = RP(this.current))
  }
  setPrevFrameValue(t = this.current) {
    ;(this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt)
  }
  onChange(t) {
    return this.on('change', t)
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new a0())
    const r = this.events[t].add(n)
    return t === 'change'
      ? () => {
          r(),
            _e.read(() => {
              this.events.change.getSize() || this.stop()
            })
        }
      : r
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear()
  }
  attach(t, n) {
    ;(this.passiveEffect = t), (this.stopPassiveEffect = n)
  }
  set(t, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r)
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect()
  }
  get() {
    return this.current
  }
  getPrevious() {
    return this.prev
  }
  getVelocity() {
    const t = fr.now()
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > iy) return 0
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, iy)
    return kE(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
  }
  start(t) {
    return (
      this.stop(),
      new Promise(n => {
        ;(this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify()
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
      })
    )
  }
  stop() {
    this.animation &&
      (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation()
  }
  isAnimating() {
    return !!this.animation
  }
  clearAnimation() {
    delete this.animation
  }
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
  }
}
function sl(e, t) {
  return new zE(e, t)
}
function AP(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, sl(n))
}
function OP(e, t) {
  const n = hd(e, t)
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {}
  s = { ...s, ...r }
  for (const o in s) {
    const a = PP(s[o])
    AP(e, o, a)
  }
}
const vd = e => e.replace(/([a-z])([A-Z])/gu, '$1-$2').toLowerCase(),
  LP = 'framerAppearId',
  UE = 'data-' + vd(LP)
function HE(e) {
  return e.props[UE]
}
function WE(e) {
  if (hi.has(e)) return 'transform'
  if (jE.has(e)) return vd(e)
}
class MP extends zE {
  constructor() {
    super(...arguments), (this.output = []), (this.counts = new Map())
  }
  add(t) {
    const n = WE(t)
    if (!n) return
    const r = this.counts.get(n) || 0
    this.counts.set(n, r + 1), r === 0 && (this.output.push(n), this.update())
    let i = !1
    return () => {
      if (i) return
      i = !0
      const s = this.counts.get(n) - 1
      this.counts.set(n, s), s === 0 && (gd(this.output, n), this.update())
    }
  }
  update() {
    this.set(this.output.length ? this.output.join(', ') : 'auto')
  }
}
const pt = e => !!(e && e.getVelocity)
function NP(e) {
  return !!(pt(e) && e.add)
}
function hp(e, t) {
  var n
  if (!e.applyWillChange) return
  let r = e.getValue('willChange')
  if (
    (!r &&
      !(!((n = e.props.style) === null || n === void 0) && n.willChange) &&
      ((r = new MP('auto')), e.addValue('willChange', r)),
    NP(r))
  )
    return r.add(t)
}
function IP({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0
  return (t[n] = !1), r
}
function GE(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var s
  let { transition: o = e.getDefaultTransition(), transitionEnd: a, ...l } = t
  r && (o = r)
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i]
  for (const d in l) {
    const f = e.getValue(d, (s = e.latestValues[d]) !== null && s !== void 0 ? s : null),
      h = l[d]
    if (h === void 0 || (c && IP(c, d))) continue
    const v = { delay: n, ...Km(o || {}, d) }
    let y = !1
    if (window.MotionHandoffAnimation) {
      const p = HE(e)
      if (p) {
        const m = window.MotionHandoffAnimation(p, d, _e)
        m !== null && ((v.startTime = m), (y = !0))
      }
    }
    f.start(o0(d, f, h, e.shouldReduceMotion && hi.has(d) ? { type: !1 } : v, e, y, hp(e, d)))
    const x = f.animation
    x && u.push(x)
  }
  return (
    a &&
      Promise.all(u).then(() => {
        _e.update(() => {
          a && OP(e, a)
        })
      }),
    u
  )
}
function pp(e, t, n = {}) {
  var r
  const i = hd(
    e,
    t,
    n.type === 'exit' ? ((r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom) : void 0
  )
  let { transition: s = e.getDefaultTransition() || {} } = i || {}
  n.transitionOverride && (s = n.transitionOverride)
  const o = i ? () => Promise.all(GE(e, i, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const { delayChildren: c = 0, staggerChildren: d, staggerDirection: f } = s
            return DP(e, t, c + u, d, f, n)
          }
        : () => Promise.resolve(),
    { when: l } = s
  if (l) {
    const [u, c] = l === 'beforeChildren' ? [o, a] : [a, o]
    return u().then(() => c())
  } else return Promise.all([o(), a(n.delay)])
}
function DP(e, t, n = 0, r = 0, i = 1, s) {
  const o = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r
  return (
    Array.from(e.variantChildren)
      .sort(FP)
      .forEach((u, c) => {
        u.notify('AnimationStart', t),
          o.push(pp(u, t, { ...s, delay: n + l(c) }).then(() => u.notify('AnimationComplete', t)))
      }),
    Promise.all(o)
  )
}
function FP(e, t) {
  return e.sortNodePosition(t)
}
function jP(e, t, n = {}) {
  e.notify('AnimationStart', t)
  let r
  if (Array.isArray(t)) {
    const i = t.map(s => pp(e, s, n))
    r = Promise.all(i)
  } else if (typeof t == 'string') r = pp(e, t, n)
  else {
    const i = typeof t == 'function' ? hd(e, t, n.custom) : t
    r = Promise.all(GE(e, i, n))
  }
  return r.then(() => {
    e.notify('AnimationComplete', t)
  })
}
const $P = [...Gm].reverse(),
  VP = Gm.length
function BP(e) {
  return t => Promise.all(t.map(({ animation: n, options: r }) => jP(e, n, r)))
}
function zP(e) {
  let t = BP(e),
    n = sy(),
    r = !0
  const i = l => (u, c) => {
    var d
    const f = hd(
      e,
      c,
      l === 'exit' ? ((d = e.presenceContext) === null || d === void 0 ? void 0 : d.custom) : void 0
    )
    if (f) {
      const { transition: h, transitionEnd: v, ...y } = f
      u = { ...u, ...y, ...v }
    }
    return u
  }
  function s(l) {
    t = l(e)
  }
  function o(l) {
    const u = e.getProps(),
      c = e.getVariantContext(!0) || {},
      d = [],
      f = new Set()
    let h = {},
      v = 1 / 0
    for (let x = 0; x < VP; x++) {
      const p = $P[x],
        m = n[p],
        g = u[p] !== void 0 ? u[p] : c[p],
        E = nl(g),
        S = p === l ? m.isActive : null
      S === !1 && (v = x)
      let C = g === c[p] && g !== u[p] && E
      if (
        (C && r && e.manuallyAnimateOnMount && (C = !1),
        (m.protectedKeys = { ...h }),
        (!m.isActive && S === null) || (!g && !m.prevProp) || tl(g) || typeof g == 'boolean')
      )
        continue
      let T = UP(m.prevProp, g) || (p === l && m.isActive && !C && E) || (x > v && E),
        A = !1
      const O = Array.isArray(g) ? g : [g]
      let D = O.reduce(i(p), {})
      S === !1 && (D = {})
      const { prevResolvedValues: Z = {} } = m,
        re = { ...Z, ...D },
        M = W => {
          ;(T = !0), f.has(W) && ((A = !0), f.delete(W)), (m.needsAnimating[W] = !0)
          const oe = e.getValue(W)
          oe && (oe.liveStyle = !1)
        }
      for (const W in re) {
        const oe = D[W],
          ee = Z[W]
        if (h.hasOwnProperty(W)) continue
        let R = !1
        sp(oe) && sp(ee) ? (R = !aE(oe, ee)) : (R = oe !== ee),
          R
            ? oe != null
              ? M(W)
              : f.add(W)
            : oe !== void 0 && f.has(W)
              ? M(W)
              : (m.protectedKeys[W] = !0)
      }
      ;(m.prevProp = g),
        (m.prevResolvedValues = D),
        m.isActive && (h = { ...h, ...D }),
        r && e.blockInitialAnimation && (T = !1),
        T && (!C || A) && d.push(...O.map(W => ({ animation: W, options: { type: p } })))
    }
    if (f.size) {
      const x = {}
      f.forEach(p => {
        const m = e.getBaseTarget(p),
          g = e.getValue(p)
        g && (g.liveStyle = !0), (x[p] = m ?? null)
      }),
        d.push({ animation: x })
    }
    let y = !!d.length
    return (
      r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (y = !1),
      (r = !1),
      y ? t(d) : Promise.resolve()
    )
  }
  function a(l, u) {
    var c
    if (n[l].isActive === u) return Promise.resolve()
    ;(c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach(f => {
        var h
        return (h = f.animationState) === null || h === void 0 ? void 0 : h.setActive(l, u)
      }),
      (n[l].isActive = u)
    const d = o(l)
    for (const f in n) n[f].protectedKeys = {}
    return d
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      ;(n = sy()), (r = !0)
    }
  }
}
function UP(e, t) {
  return typeof t == 'string' ? t !== e : Array.isArray(t) ? !aE(t, e) : !1
}
function gi(e = !1) {
  return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} }
}
function sy() {
  return {
    animate: gi(!0),
    whileInView: gi(),
    whileHover: gi(),
    whileTap: gi(),
    whileDrag: gi(),
    whileFocus: gi(),
    exit: gi()
  }
}
class pi {
  constructor(t) {
    ;(this.isMounted = !1), (this.node = t)
  }
  update() {}
}
class HP extends pi {
  constructor(t) {
    super(t), t.animationState || (t.animationState = zP(t))
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps()
    tl(t) && (this.unmountControls = t.subscribe(this.node))
  }
  mount() {
    this.updateAnimationControlsSubscription()
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {}
    t !== n && this.updateAnimationControlsSubscription()
  }
  unmount() {
    var t
    this.node.animationState.reset(), (t = this.unmountControls) === null || t === void 0 || t.call(this)
  }
}
let WP = 0
class GP extends pi {
  constructor() {
    super(...arguments), (this.id = WP++)
  }
  update() {
    if (!this.node.presenceContext) return
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {}
    if (!this.node.animationState || t === r) return
    const i = this.node.animationState.setActive('exit', !t)
    n && !t && i.then(() => n(this.id))
  }
  mount() {
    const { register: t } = this.node.presenceContext || {}
    t && (this.unmount = t(this.id))
  }
  unmount() {}
}
const qP = { animation: { Feature: HP }, exit: { Feature: GP } },
  qE = e =>
    e.pointerType === 'mouse' ? typeof e.button != 'number' || e.button <= 0 : e.isPrimary !== !1
function yd(e, t = 'page') {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } }
}
const KP = e => t => qE(t) && e(t, yd(t))
function lr(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
}
function pr(e, t, n, r) {
  return lr(e, t, KP(n), r)
}
const oy = (e, t) => Math.abs(e - t)
function ZP(e, t) {
  const n = oy(e.x, t.x),
    r = oy(e.y, t.y)
  return Math.sqrt(n ** 2 + r ** 2)
}
class KE {
  constructor(t, n, { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return
        const d = bf(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          h = ZP(d.offset, { x: 0, y: 0 }) >= 3
        if (!f && !h) return
        const { point: v } = d,
          { timestamp: y } = rt
        this.history.push({ ...v, timestamp: y })
        const { onStart: x, onMove: p } = this.handlers
        f || (x && x(this.lastMoveEvent, d), (this.startEvent = this.lastMoveEvent)),
          p && p(this.lastMoveEvent, d)
      }),
      (this.handlePointerMove = (d, f) => {
        ;(this.lastMoveEvent = d),
          (this.lastMoveEventInfo = _f(f, this.transformPagePoint)),
          _e.update(this.updatePoint, !0)
      }),
      (this.handlePointerUp = (d, f) => {
        this.end()
        const { onEnd: h, onSessionEnd: v, resumeAnimation: y } = this.handlers
        if ((this.dragSnapToOrigin && y && y(), !(this.lastMoveEvent && this.lastMoveEventInfo))) return
        const x = bf(
          d.type === 'pointercancel' ? this.lastMoveEventInfo : _f(f, this.transformPagePoint),
          this.history
        )
        this.startEvent && h && h(d, x), v && v(d, x)
      }),
      !qE(t))
    )
      return
    ;(this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window)
    const o = yd(t),
      a = _f(o, this.transformPagePoint),
      { point: l } = a,
      { timestamp: u } = rt
    this.history = [{ ...l, timestamp: u }]
    const { onSessionStart: c } = n
    c && c(t, bf(a, this.history)),
      (this.removeListeners = hr(
        pr(this.contextWindow, 'pointermove', this.handlePointerMove),
        pr(this.contextWindow, 'pointerup', this.handlePointerUp),
        pr(this.contextWindow, 'pointercancel', this.handlePointerUp)
      ))
  }
  updateHandlers(t) {
    this.handlers = t
  }
  end() {
    this.removeListeners && this.removeListeners(), xr(this.updatePoint)
  }
}
function _f(e, t) {
  return t ? { point: t(e.point) } : e
}
function ay(e, t) {
  return { x: e.x - t.x, y: e.y - t.y }
}
function bf({ point: e }, t) {
  return { point: e, delta: ay(e, ZE(t)), offset: ay(e, YP(t)), velocity: QP(t, 0.1) }
}
function YP(e) {
  return e[0]
}
function ZE(e) {
  return e[e.length - 1]
}
function QP(e, t) {
  if (e.length < 2) return { x: 0, y: 0 }
  let n = e.length - 1,
    r = null
  const i = ZE(e)
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > cr(t))); ) n--
  if (!r) return { x: 0, y: 0 }
  const s = dr(i.timestamp - r.timestamp)
  if (s === 0) return { x: 0, y: 0 }
  const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s }
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
}
function YE(e) {
  let t = null
  return () => {
    const n = () => {
      t = null
    }
    return t === null ? ((t = e), n) : !1
  }
}
const ly = YE('dragHorizontal'),
  uy = YE('dragVertical')
function QE(e) {
  let t = !1
  if (e === 'y') t = uy()
  else if (e === 'x') t = ly()
  else {
    const n = ly(),
      r = uy()
    n && r
      ? (t = () => {
          n(), r()
        })
      : (n && n(), r && r())
  }
  return t
}
function XE() {
  const e = QE(!0)
  return e ? (e(), !1) : !0
}
function Is(e) {
  return e && typeof e == 'object' && Object.prototype.hasOwnProperty.call(e, 'current')
}
const JE = 1e-4,
  XP = 1 - JE,
  JP = 1 + JE,
  eS = 0.01,
  eR = 0 - eS,
  tR = 0 + eS
function Qt(e) {
  return e.max - e.min
}
function nR(e, t, n) {
  return Math.abs(e - t) <= n
}
function cy(e, t, n, r = 0.5) {
  ;(e.origin = r),
    (e.originPoint = Fe(t.min, t.max, e.origin)),
    (e.scale = Qt(n) / Qt(t)),
    (e.translate = Fe(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= XP && e.scale <= JP) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= eR && e.translate <= tR) || isNaN(e.translate)) && (e.translate = 0)
}
function Oa(e, t, n, r) {
  cy(e.x, t.x, n.x, r ? r.originX : void 0), cy(e.y, t.y, n.y, r ? r.originY : void 0)
}
function dy(e, t, n) {
  ;(e.min = n.min + t.min), (e.max = e.min + Qt(t))
}
function rR(e, t, n) {
  dy(e.x, t.x, n.x), dy(e.y, t.y, n.y)
}
function fy(e, t, n) {
  ;(e.min = t.min - n.min), (e.max = e.min + Qt(t))
}
function La(e, t, n) {
  fy(e.x, t.x, n.x), fy(e.y, t.y, n.y)
}
function iR(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? Fe(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? Fe(n, e, r.max) : Math.min(e, n)),
    e
  )
}
function hy(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  }
}
function sR(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: hy(e.x, n, i), y: hy(e.y, t, r) }
}
function py(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r }
}
function oR(e, t) {
  return { x: py(e.x, t.x), y: py(e.y, t.y) }
}
function aR(e, t) {
  let n = 0.5
  const r = Qt(e),
    i = Qt(t)
  return (
    i > r ? (n = il(t.min, t.max - r, e.min)) : r > i && (n = il(e.min, e.max - i, t.min)), ti(0, 1, n)
  )
}
function lR(e, t) {
  const n = {}
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
}
const mp = 0.35
function uR(e = mp) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = mp), { x: my(e, 'left', 'right'), y: my(e, 'top', 'bottom') }
  )
}
function my(e, t, n) {
  return { min: gy(e, t), max: gy(e, n) }
}
function gy(e, t) {
  return typeof e == 'number' ? e : e[t] || 0
}
const vy = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Ds = () => ({ x: vy(), y: vy() }),
  yy = () => ({ min: 0, max: 0 }),
  Ue = () => ({ x: yy(), y: yy() })
function sn(e) {
  return [e('x'), e('y')]
}
function tS({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } }
}
function cR({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min }
}
function dR(e, t) {
  if (!t) return e
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom })
  return { top: n.y, left: n.x, bottom: r.y, right: r.x }
}
function kf(e) {
  return e === void 0 || e === 1
}
function gp({ scale: e, scaleX: t, scaleY: n }) {
  return !kf(e) || !kf(t) || !kf(n)
}
function xi(e) {
  return gp(e) || nS(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function nS(e) {
  return wy(e.x) || wy(e.y)
}
function wy(e) {
  return e && e !== '0%'
}
function Ac(e, t, n) {
  const r = e - n,
    i = t * r
  return n + i
}
function xy(e, t, n, r, i) {
  return i !== void 0 && (e = Ac(e, i, r)), Ac(e, n, r) + t
}
function vp(e, t = 0, n = 1, r, i) {
  ;(e.min = xy(e.min, t, n, r, i)), (e.max = xy(e.max, t, n, r, i))
}
function rS(e, { x: t, y: n }) {
  vp(e.x, t.translate, t.scale, t.originPoint), vp(e.y, n.translate, n.scale, n.originPoint)
}
const Ey = 0.999999999999,
  Sy = 1.0000000000001
function fR(e, t, n, r = !1) {
  const i = n.length
  if (!i) return
  t.x = t.y = 1
  let s, o
  for (let a = 0; a < i; a++) {
    ;(s = n[a]), (o = s.projectionDelta)
    const { visualElement: l } = s.options
    ;(l && l.props.style && l.props.style.display === 'contents') ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        js(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), rS(e, o)),
      r && xi(s.latestValues) && js(e, s.latestValues))
  }
  t.x < Sy && t.x > Ey && (t.x = 1), t.y < Sy && t.y > Ey && (t.y = 1)
}
function Fs(e, t) {
  ;(e.min = e.min + t), (e.max = e.max + t)
}
function Ty(e, t, n, r, i = 0.5) {
  const s = Fe(e.min, e.max, i)
  vp(e, t, n, s, r)
}
function js(e, t) {
  Ty(e.x, t.x, t.scaleX, t.scale, t.originX), Ty(e.y, t.y, t.scaleY, t.scale, t.originY)
}
function iS(e, t) {
  return tS(dR(e.getBoundingClientRect(), t))
}
function hR(e, t, n) {
  const r = iS(e, n),
    { scroll: i } = t
  return i && (Fs(r.x, i.offset.x), Fs(r.y, i.offset.y)), r
}
const sS = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  pR = new WeakMap()
class mR {
  constructor(t) {
    ;(this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Ue()),
      (this.visualElement = t)
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement
    if (r && r.isPresent === !1) return
    const i = c => {
        const { dragSnapToOrigin: d } = this.getProps()
        d ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(yd(c, 'page').point)
      },
      s = (c, d) => {
        var f
        const { drag: h, dragPropagation: v, onDragStart: y } = this.getProps()
        if (
          h &&
          !v &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = QE(h)),
          !this.openGlobalLock)
        )
          return
        ;(this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          sn(p => {
            let m = this.getAxisMotionValue(p).get() || 0
            if (qn.test(m)) {
              const { projection: g } = this.visualElement
              if (g && g.layout) {
                const E = g.layout.layoutBox[p]
                E && (m = Qt(E) * (parseFloat(m) / 100))
              }
            }
            this.originPoint[p] = m
          }),
          y && _e.postRender(() => y(c, d)),
          (f = this.removeWillChange) === null || f === void 0 || f.call(this),
          (this.removeWillChange = hp(this.visualElement, 'transform'))
        const { animationState: x } = this.visualElement
        x && x.setActive('whileDrag', !0)
      },
      o = (c, d) => {
        const {
          dragPropagation: f,
          dragDirectionLock: h,
          onDirectionLock: v,
          onDrag: y
        } = this.getProps()
        if (!f && !this.openGlobalLock) return
        const { offset: x } = d
        if (h && this.currentDirection === null) {
          ;(this.currentDirection = gR(x)),
            this.currentDirection !== null && v && v(this.currentDirection)
          return
        }
        this.updateAxis('x', d.point, x),
          this.updateAxis('y', d.point, x),
          this.visualElement.render(),
          y && y(c, d)
      },
      a = (c, d) => this.stop(c, d),
      l = () =>
        sn(c => {
          var d
          return (
            this.getAnimationState(c) === 'paused' &&
            ((d = this.getAxisMotionValue(c).animation) === null || d === void 0 ? void 0 : d.play())
          )
        }),
      { dragSnapToOrigin: u } = this.getProps()
    this.panSession = new KE(
      t,
      { onSessionStart: i, onStart: s, onMove: o, onSessionEnd: a, resumeAnimation: l },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: sS(this.visualElement)
      }
    )
  }
  stop(t, n) {
    var r
    ;(r = this.removeWillChange) === null || r === void 0 || r.call(this)
    const i = this.isDragging
    if ((this.cancel(), !i)) return
    const { velocity: s } = n
    this.startAnimation(s)
    const { onDragEnd: o } = this.getProps()
    o && _e.postRender(() => o(t, n))
  }
  cancel() {
    this.isDragging = !1
    const { projection: t, animationState: n } = this.visualElement
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0)
    const { dragPropagation: r } = this.getProps()
    !r && this.openGlobalLock && (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive('whileDrag', !1)
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps()
    if (!r || !Cu(t, i, this.currentDirection)) return
    const s = this.getAxisMotionValue(t)
    let o = this.originPoint[t] + r[t]
    this.constraints && this.constraints[t] && (o = iR(o, this.constraints[t], this.elastic[t])),
      s.set(o)
  }
  resolveConstraints() {
    var t
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
            ? void 0
            : t.layout,
      s = this.constraints
    n && Is(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
        ? (this.constraints = sR(i.layoutBox, n))
        : (this.constraints = !1),
      (this.elastic = uR(r)),
      s !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        sn(o => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = lR(i.layoutBox[o], this.constraints[o]))
        })
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps()
    if (!t || !Is(t)) return !1
    const r = t.current,
      { projection: i } = this.visualElement
    if (!i || !i.layout) return !1
    const s = hR(r, i.root, this.visualElement.getTransformPagePoint())
    let o = oR(i.layout.layoutBox, s)
    if (n) {
      const a = n(cR(o))
      ;(this.hasMutatedConstraints = !!a), a && (o = tS(a))
    }
    return o
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a
      } = this.getProps(),
      l = this.constraints || {},
      u = sn(c => {
        if (!Cu(c, n, this.currentDirection)) return
        let d = (l && l[c]) || {}
        o && (d = { min: 0, max: 0 })
        const f = i ? 200 : 1e6,
          h = i ? 40 : 1e7,
          v = {
            type: 'inertia',
            velocity: r ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: h,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...d
          }
        return this.startAxisValueAnimation(c, v)
      })
    return Promise.all(u).then(a)
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t)
    return r.start(o0(t, r, 0, n, this.visualElement, !1, hp(this.visualElement, t)))
  }
  stopAnimation() {
    sn(t => this.getAxisMotionValue(t).stop())
  }
  pauseAnimation() {
    sn(t => {
      var n
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
    })
  }
  getAnimationState(t) {
    var n
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n]
    return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
  }
  snapToCursor(t) {
    sn(n => {
      const { drag: r } = this.getProps()
      if (!Cu(n, r, this.currentDirection)) return
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n)
      if (i && i.layout) {
        const { min: o, max: a } = i.layout.layoutBox[n]
        s.set(t[n] - Fe(o, a, 0.5))
      }
    })
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement
    if (!Is(n) || !r || !this.constraints) return
    this.stopAnimation()
    const i = { x: 0, y: 0 }
    sn(o => {
      const a = this.getAxisMotionValue(o)
      if (a && this.constraints !== !1) {
        const l = a.get()
        i[o] = aR({ min: l, max: l }, this.constraints[o])
      }
    })
    const { transformTemplate: s } = this.visualElement.getProps()
    ;(this.visualElement.current.style.transform = s ? s({}, '') : 'none'),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      sn(o => {
        if (!Cu(o, t, null)) return
        const a = this.getAxisMotionValue(o),
          { min: l, max: u } = this.constraints[o]
        a.set(Fe(l, u, i[o]))
      })
  }
  addListeners() {
    if (!this.visualElement.current) return
    pR.set(this.visualElement, this)
    const t = this.visualElement.current,
      n = pr(t, 'pointerdown', l => {
        const { drag: u, dragListener: c = !0 } = this.getProps()
        u && c && this.start(l)
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps()
        Is(l) && l.current && (this.constraints = this.resolveRefConstraints())
      },
      { projection: i } = this.visualElement,
      s = i.addEventListener('measure', r)
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), _e.read(r)
    const o = lr(window, 'resize', () => this.scalePositionWithinConstraints()),
      a = i.addEventListener('didUpdate', ({ delta: l, hasLayoutChanged: u }) => {
        this.isDragging &&
          u &&
          (sn(c => {
            const d = this.getAxisMotionValue(c)
            d && ((this.originPoint[c] += l[c].translate), d.set(d.get() + l[c].translate))
          }),
          this.visualElement.render())
      })
    return () => {
      o(), n(), s(), a && a()
    }
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: o = mp,
        dragMomentum: a = !0
      } = t
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: a
    }
  }
}
function Cu(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e)
}
function gR(e, t = 10) {
  let n = null
  return Math.abs(e.y) > t ? (n = 'y') : Math.abs(e.x) > t && (n = 'x'), n
}
class vR extends pi {
  constructor(t) {
    super(t), (this.removeGroupControls = mt), (this.removeListeners = mt), (this.controls = new mR(t))
  }
  mount() {
    const { dragControls: t } = this.node.getProps()
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || mt)
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners()
  }
}
const Cy = e => (t, n) => {
  e && _e.postRender(() => e(t, n))
}
class yR extends pi {
  constructor() {
    super(...arguments), (this.removePointerDownListener = mt)
  }
  onPointerDown(t) {
    this.session = new KE(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: sS(this.node)
    })
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps()
    return {
      onSessionStart: Cy(t),
      onStart: Cy(n),
      onMove: r,
      onEnd: (s, o) => {
        delete this.session, i && _e.postRender(() => i(s, o))
      }
    }
  }
  mount() {
    this.removePointerDownListener = pr(this.node.current, 'pointerdown', t => this.onPointerDown(t))
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers())
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end()
  }
}
const l0 = w.createContext(null)
function wR() {
  const e = w.useContext(l0)
  if (e === null) return [!0, null]
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = w.useId()
  w.useEffect(() => r(i), [])
  const s = w.useCallback(() => n && n(i), [i, n])
  return !t && n ? [!1, s] : [!0]
}
const Oc = w.createContext({}),
  oS = w.createContext({}),
  Wu = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 }
function _y(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100
}
const Jo = {
    correct: (e, t) => {
      if (!t.target) return e
      if (typeof e == 'string')
        if (se.test(e)) e = parseFloat(e)
        else return e
      const n = _y(e, t.target.x),
        r = _y(e, t.target.y)
      return `${n}% ${r}%`
    }
  },
  xR = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = ni.parse(e)
      if (i.length > 5) return r
      const s = ni.createTransformer(e),
        o = typeof i[0] != 'number' ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y
      ;(i[0 + o] /= a), (i[1 + o] /= l)
      const u = Fe(a, l, 0.5)
      return (
        typeof i[2 + o] == 'number' && (i[2 + o] /= u),
        typeof i[3 + o] == 'number' && (i[3 + o] /= u),
        s(i)
      )
    }
  },
  Lc = {}
function ER(e) {
  Object.assign(Lc, e)
}
const { schedule: u0, cancel: A8 } = lE(queueMicrotask, !1)
class SR extends w.Component {
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props,
      { projection: s } = t
    ER(TR),
      s &&
        (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener('animationComplete', () => {
          this.safeToRemove()
        }),
        s.setOptions({ ...s.options, onExitComplete: () => this.safeToRemove() })),
      (Wu.hasEverUpdated = !0)
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: i, isPresent: s } = this.props,
      o = r.projection
    return (
      o &&
        ((o.isPresent = s),
        i || t.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(),
        t.isPresent !== s &&
          (s
            ? o.promote()
            : o.relegate() ||
              _e.postRender(() => {
                const a = o.getStack()
                ;(!a || !a.members.length) && this.safeToRemove()
              }))),
      null
    )
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement
    t &&
      (t.root.didUpdate(),
      u0.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove()
      }))
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props,
      { projection: i } = t
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i))
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props
    t && t()
  }
  render() {
    return null
  }
}
function aS(e) {
  const [t, n] = wR(),
    r = w.useContext(Oc)
  return P.jsx(SR, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: w.useContext(oS),
    isPresent: t,
    safeToRemove: n
  })
}
const TR = {
    borderRadius: {
      ...Jo,
      applyTo: [
        'borderTopLeftRadius',
        'borderTopRightRadius',
        'borderBottomLeftRadius',
        'borderBottomRightRadius'
      ]
    },
    borderTopLeftRadius: Jo,
    borderTopRightRadius: Jo,
    borderBottomLeftRadius: Jo,
    borderBottomRightRadius: Jo,
    boxShadow: xR
  },
  lS = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
  CR = lS.length,
  by = e => (typeof e == 'string' ? parseFloat(e) : e),
  ky = e => typeof e == 'number' || se.test(e)
function _R(e, t, n, r, i, s) {
  i
    ? ((e.opacity = Fe(0, n.opacity !== void 0 ? n.opacity : 1, bR(r))),
      (e.opacityExit = Fe(t.opacity !== void 0 ? t.opacity : 1, 0, kR(r))))
    : s &&
      (e.opacity = Fe(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r))
  for (let o = 0; o < CR; o++) {
    const a = `border${lS[o]}Radius`
    let l = Py(t, a),
      u = Py(n, a)
    if (l === void 0 && u === void 0) continue
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || ky(l) === ky(u)
        ? ((e[a] = Math.max(Fe(by(l), by(u), r), 0)), (qn.test(u) || qn.test(l)) && (e[a] += '%'))
        : (e[a] = u)
  }
  ;(t.rotate || n.rotate) && (e.rotate = Fe(t.rotate || 0, n.rotate || 0, r))
}
function Py(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius
}
const bR = uS(0, 0.5, NE),
  kR = uS(0.5, 0.95, mt)
function uS(e, t, n) {
  return r => (r < e ? 0 : r > t ? 1 : n(il(e, t, r)))
}
function Ry(e, t) {
  ;(e.min = t.min), (e.max = t.max)
}
function rn(e, t) {
  Ry(e.x, t.x), Ry(e.y, t.y)
}
function Ay(e, t) {
  ;(e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin)
}
function Oy(e, t, n, r, i) {
  return (e -= t), (e = Ac(e, 1 / n, r)), i !== void 0 && (e = Ac(e, 1 / i, r)), e
}
function PR(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (
    (qn.test(t) && ((t = parseFloat(t)), (t = Fe(o.min, o.max, t / 100) - o.min)), typeof t != 'number')
  )
    return
  let a = Fe(s.min, s.max, r)
  e === s && (a -= t), (e.min = Oy(e.min, t, n, a, i)), (e.max = Oy(e.max, t, n, a, i))
}
function Ly(e, t, [n, r, i], s, o) {
  PR(e, t[n], t[r], t[i], t.scale, s, o)
}
const RR = ['x', 'scaleX', 'originX'],
  AR = ['y', 'scaleY', 'originY']
function My(e, t, n, r) {
  Ly(e.x, t, RR, n ? n.x : void 0, r ? r.x : void 0), Ly(e.y, t, AR, n ? n.y : void 0, r ? r.y : void 0)
}
function Ny(e) {
  return e.translate === 0 && e.scale === 1
}
function cS(e) {
  return Ny(e.x) && Ny(e.y)
}
function Iy(e, t) {
  return e.min === t.min && e.max === t.max
}
function OR(e, t) {
  return Iy(e.x, t.x) && Iy(e.y, t.y)
}
function Dy(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}
function dS(e, t) {
  return Dy(e.x, t.x) && Dy(e.y, t.y)
}
function Fy(e) {
  return Qt(e.x) / Qt(e.y)
}
function jy(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
class LR {
  constructor() {
    this.members = []
  }
  add(t) {
    md(this.members, t), t.scheduleRender()
  }
  remove(t) {
    if ((gd(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead)) {
      const n = this.members[this.members.length - 1]
      n && this.promote(n)
    }
  }
  relegate(t) {
    const n = this.members.findIndex(i => t === i)
    if (n === 0) return !1
    let r
    for (let i = n; i >= 0; i--) {
      const s = this.members[i]
      if (s.isPresent !== !1) {
        r = s
        break
      }
    }
    return r ? (this.promote(r), !0) : !1
  }
  promote(t, n) {
    const r = this.lead
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot), (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0)
      const { crossfade: i } = t.options
      i === !1 && r.hide()
    }
  }
  exitAnimationComplete() {
    this.members.forEach(t => {
      const { options: n, resumingFrom: r } = t
      n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete()
    })
  }
  scheduleRender() {
    this.members.forEach(t => {
      t.instance && t.scheduleRender(!1)
    })
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
  }
}
function MR(e, t, n) {
  let r = ''
  const i = e.x.translate / t.x,
    s = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0
  if (
    ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { transformPerspective: u, rotate: c, rotateX: d, rotateY: f, skewX: h, skewY: v } = n
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      d && (r += `rotateX(${d}deg) `),
      f && (r += `rotateY(${f}deg) `),
      h && (r += `skewX(${h}deg) `),
      v && (r += `skewY(${v}deg) `)
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || 'none'
}
const NR = (e, t) => e.depth - t.depth
class IR {
  constructor() {
    ;(this.children = []), (this.isDirty = !1)
  }
  add(t) {
    md(this.children, t), (this.isDirty = !0)
  }
  remove(t) {
    gd(this.children, t), (this.isDirty = !0)
  }
  forEach(t) {
    this.isDirty && this.children.sort(NR), (this.isDirty = !1), this.children.forEach(t)
  }
}
function Gu(e) {
  const t = pt(e) ? e.get() : e
  return kP(t) ? t.toValue() : t
}
function DR(e, t) {
  const n = fr.now(),
    r = ({ timestamp: i }) => {
      const s = i - n
      s >= t && (xr(r), e(s - t))
    }
  return _e.read(r, !0), () => xr(r)
}
function FR(e) {
  return e instanceof SVGElement && e.tagName !== 'svg'
}
function jR(e, t, n) {
  const r = pt(e) ? e : sl(e)
  return r.start(o0('', r, t, n)), r.animation
}
const Ei = {
    type: 'projectionFrame',
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
  },
  fa = typeof window < 'u' && window.MotionDebug !== void 0,
  Pf = ['', 'X', 'Y', 'Z'],
  $R = { visibility: 'hidden' },
  $y = 1e3
let VR = 0
function Rf(e, t, n, r) {
  const { latestValues: i } = t
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0))
}
function fS(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return
  const { visualElement: t } = e.options
  if (!t) return
  const n = HE(t)
  if (window.MotionHasOptimisedAnimation(n, 'transform')) {
    const { layout: i, layoutId: s } = e.options
    window.MotionCancelOptimisedAnimation(n, 'transform', _e, !(i || s))
  }
  const { parent: r } = e
  r && !r.hasCheckedOptimisedAppear && fS(r)
}
function hS({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      ;(this.id = VR++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots())
        }),
        (this.updateProjection = () => {
          ;(this.projectionUpdateScheduled = !1),
            fa && (Ei.totalNodes = Ei.resolvedTargetDeltas = Ei.recalculatedProjection = 0),
            this.nodes.forEach(UR),
            this.nodes.forEach(KR),
            this.nodes.forEach(ZR),
            this.nodes.forEach(HR),
            fa && window.MotionDebug.record(Ei)
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0)
      for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0
      this.root === this && (this.nodes = new IR())
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new a0()),
        this.eventHandlers.get(o).add(a)
      )
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o)
      l && l.notify(...a)
    }
    hasListeners(o) {
      return this.eventHandlers.has(o)
    }
    mount(o, a = this.root.hasTreeAnimated) {
      if (this.instance) return
      ;(this.isSVG = FR(o)), (this.instance = o)
      const { layoutId: l, layout: u, visualElement: c } = this.options
      if (
        (c && !c.current && c.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d
        const f = () => (this.root.updateBlockedByResize = !1)
        e(o, () => {
          ;(this.root.updateBlockedByResize = !0),
            d && d(),
            (d = DR(f, 250)),
            Wu.hasAnimatedSinceResize && ((Wu.hasAnimatedSinceResize = !1), this.nodes.forEach(By))
        })
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            'didUpdate',
            ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: h, layout: v }) => {
              if (this.isTreeAnimationBlocked()) {
                ;(this.target = void 0), (this.relativeTarget = void 0)
                return
              }
              const y = this.options.transition || c.getDefaultTransition() || eA,
                { onLayoutAnimationStart: x, onLayoutAnimationComplete: p } = c.getProps(),
                m = !this.targetLayout || !dS(this.targetLayout, v) || h,
                g = !f && h
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                g ||
                (f && (m || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom), (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, g)
                const E = { ...Km(y, 'layout'), onPlay: x, onComplete: p }
                ;(c.shouldReduceMotion || this.options.layoutRoot) && ((E.delay = 0), (E.type = !1)),
                  this.startAnimation(E)
              } else
                f || By(this),
                  this.isLead() && this.options.onExitComplete && this.options.onExitComplete()
              this.targetLayout = v
            }
          )
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this)
      const o = this.getStack()
      o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        xr(this.updateProjection)
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(YR), this.animationId++)
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options
      return o && o.getProps().transformTemplate
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete()
        return
      }
      if (
        (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && fS(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return
      this.isLayoutDirty = !0
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c]
        ;(d.shouldResetTransform = !0),
          d.updateScroll('snapshot'),
          d.options.layoutRoot && d.willUpdate(!1)
      }
      const { layoutId: a, layout: l } = this.options
      if (a === void 0 && !l) return
      const u = this.getTransformTemplate()
      ;(this.prevTransformTemplateValue = u ? u(this.latestValues, '') : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners('willUpdate')
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Vy)
        return
      }
      this.isUpdating || this.nodes.forEach(GR),
        (this.isUpdating = !1),
        this.nodes.forEach(qR),
        this.nodes.forEach(BR),
        this.nodes.forEach(zR),
        this.clearAllSnapshots()
      const a = fr.now()
      ;(rt.delta = ti(0, 1e3 / 60, a - rt.timestamp)),
        (rt.timestamp = a),
        (rt.isProcessing = !0),
        xf.update.process(rt),
        xf.preRender.process(rt),
        xf.render.process(rt),
        (rt.isProcessing = !1)
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), u0.read(this.scheduleUpdate))
    }
    clearAllSnapshots() {
      this.nodes.forEach(WR), this.sharedNodes.forEach(QR)
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0), _e.preRender(this.updateProjection, !1, !0))
    }
    scheduleCheckAfterUnmount() {
      _e.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
      })
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure())
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
      )
        return
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll()
      const o = this.layout
      ;(this.layout = this.measure(!1)),
        (this.layoutCorrected = Ue()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners('measure', this.layout.layoutBox)
      const { visualElement: a } = this.options
      a && a.notify('LayoutMeasure', this.layout.layoutBox, o ? o.layoutBox : void 0)
    }
    updateScroll(o = 'measure') {
      let a = !!(this.options.layoutScroll && this.instance)
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (a = !1),
        a)
      ) {
        const l = r(this.instance)
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l
        }
      }
    }
    resetTransform() {
      if (!i) return
      const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !cS(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, '') : void 0,
        c = u !== this.prevTransformTemplateValue
      o &&
        (a || xi(this.latestValues) || c) &&
        (i(this.instance, u), (this.shouldResetTransform = !1), this.scheduleRender())
    }
    measure(o = !0) {
      const a = this.measurePageBox()
      let l = this.removeElementScroll(a)
      return (
        o && (l = this.removeTransform(l)),
        tA(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id
        }
      )
    }
    measurePageBox() {
      var o
      const { visualElement: a } = this.options
      if (!a) return Ue()
      const l = a.measureViewportBox()
      if (!(((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) || this.path.some(nA))) {
        const { scroll: c } = this.root
        c && (Fs(l.x, c.offset.x), Fs(l.y, c.offset.y))
      }
      return l
    }
    removeElementScroll(o) {
      var a
      const l = Ue()
      if ((rn(l, o), !((a = this.scroll) === null || a === void 0) && a.wasRoot)) return l
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: d, options: f } = c
        c !== this.root &&
          d &&
          f.layoutScroll &&
          (d.wasRoot && rn(l, o), Fs(l.x, d.offset.x), Fs(l.y, d.offset.y))
      }
      return l
    }
    applyTransform(o, a = !1) {
      const l = Ue()
      rn(l, o)
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u]
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          js(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          xi(c.latestValues) && js(l, c.latestValues)
      }
      return xi(this.latestValues) && js(l, this.latestValues), l
    }
    removeTransform(o) {
      const a = Ue()
      rn(a, o)
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l]
        if (!u.instance || !xi(u.latestValues)) continue
        gp(u.latestValues) && u.updateSnapshot()
        const c = Ue(),
          d = u.measurePageBox()
        rn(c, d), My(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
      }
      return xi(this.latestValues) && My(a, this.latestValues), a
    }
    setTargetDelta(o) {
      ;(this.targetDelta = o), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0)
    }
    setOptions(o) {
      this.options = { ...this.options, ...o, crossfade: o.crossfade !== void 0 ? o.crossfade : !0 }
    }
    clearMeasurements() {
      ;(this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1)
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== rt.timestamp &&
        this.relativeParent.resolveTargetDelta(!0)
    }
    resolveTargetDelta(o = !1) {
      var a
      const l = this.getLead()
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty)
      const u = !!this.resumingFrom || this !== l
      if (
        !(
          o ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) && a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return
      const { layout: d, layoutId: f } = this.options
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = rt.timestamp), !this.targetDelta && !this.relativeTarget)
        ) {
          const h = this.getClosestProjectingParent()
          h && h.layout && this.animationProgress !== 1
            ? ((this.relativeParent = h),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Ue()),
              (this.relativeTargetOrigin = Ue()),
              La(this.relativeTargetOrigin, this.layout.layoutBox, h.layout.layoutBox),
              rn(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0)
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target || ((this.target = Ue()), (this.targetWithTransforms = Ue())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                rR(this.target, this.relativeTarget, this.relativeParent.target))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : rn(this.target, this.layout.layoutBox),
                  rS(this.target, this.targetDelta))
                : rn(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1
            const h = this.getClosestProjectingParent()
            h &&
            !!h.resumingFrom == !!this.resumingFrom &&
            !h.options.layoutScroll &&
            h.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = h),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Ue()),
                (this.relativeTargetOrigin = Ue()),
                La(this.relativeTargetOrigin, this.target, h.target),
                rn(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0)
          }
          fa && Ei.resolvedTargetDeltas++
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || gp(this.parent.latestValues) || nS(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
    }
    calcProjection() {
      var o
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a
      let u = !0
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) && o.isProjectionDirty)) &&
          (u = !1),
        l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1),
        this.resolvedRelativeTargetAt === rt.timestamp && (u = !1),
        u)
      )
        return
      const { layout: c, layoutId: d } = this.options
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return
      rn(this.layoutCorrected, this.layout.layoutBox)
      const f = this.treeScale.x,
        h = this.treeScale.y
      fR(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = Ue()))
      const { target: v } = a
      if (!v) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender())
        return
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Ay(this.prevProjectionDelta.x, this.projectionDelta.x),
          Ay(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Oa(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== h ||
          !jy(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !jy(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0), this.scheduleRender(), this.notifyListeners('projectionUpdate', v)),
        fa && Ei.recalculatedProjection++
    }
    hide() {
      this.isVisible = !1
    }
    show() {
      this.isVisible = !0
    }
    scheduleRender(o = !0) {
      var a
      if (((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(), o)) {
        const l = this.getStack()
        l && l.scheduleRender()
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
    }
    createProjectionDeltas() {
      ;(this.prevProjectionDelta = Ds()),
        (this.projectionDelta = Ds()),
        (this.projectionDeltaWithTransform = Ds())
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = Ds()
      ;(!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a)
      const f = Ue(),
        h = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        y = h !== v,
        x = this.getStack(),
        p = !x || x.members.length <= 1,
        m = !!(y && !p && this.options.crossfade === !0 && !this.path.some(JR))
      this.animationProgress = 0
      let g
      ;(this.mixTargetDelta = E => {
        const S = E / 1e3
        zy(d.x, o.x, S),
          zy(d.y, o.y, S),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (La(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            XR(this.relativeTarget, this.relativeTargetOrigin, f, S),
            g && OR(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = Ue()),
            rn(g, this.relativeTarget)),
          y && ((this.animationValues = c), _R(c, u, this.latestValues, S, m, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = S)
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
    }
    startAnimation(o) {
      this.notifyListeners('animationStart'),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation && (xr(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = _e.update(() => {
          ;(Wu.hasAnimatedSinceResize = !0),
            (this.currentAnimation = jR(0, $y, {
              ...o,
              onUpdate: a => {
                this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a)
              },
              onComplete: () => {
                o.onComplete && o.onComplete(), this.completeAnimation()
              }
            })),
            this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0)
        }))
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0), (this.resumingFrom.preserveOpacity = void 0))
      const o = this.getStack()
      o && o.exitAnimationComplete(),
        (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
        this.notifyListeners('animationComplete')
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta($y), this.currentAnimation.stop()),
        this.completeAnimation()
    }
    applyTransformsToTarget() {
      const o = this.getLead()
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = o
      if (!(!a || !l || !u)) {
        if (
          this !== o &&
          this.layout &&
          u &&
          pS(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || Ue()
          const d = Qt(this.layout.layoutBox.x)
          ;(l.x.min = o.target.x.min), (l.x.max = l.x.min + d)
          const f = Qt(this.layout.layoutBox.y)
          ;(l.y.min = o.target.y.min), (l.y.max = l.y.min + f)
        }
        rn(a, l), js(a, c), Oa(this.projectionDeltaWithTransform, this.layoutCorrected, a, c)
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new LR()), this.sharedNodes.get(o).add(a)
      const u = a.options.initialPromotionConfig
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
      })
    }
    isLead() {
      const o = this.getStack()
      return o ? o.lead === this : !0
    }
    getLead() {
      var o
      const { layoutId: a } = this.options
      return a ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this
    }
    getPrevLead() {
      var o
      const { layoutId: a } = this.options
      return a ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead) : void 0
    }
    getStack() {
      const { layoutId: o } = this.options
      if (o) return this.root.sharedNodes.get(o)
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack()
      u && u.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a })
    }
    relegate() {
      const o = this.getStack()
      return o ? o.relegate(this) : !1
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options
      if (!o) return
      let a = !1
      const { latestValues: l } = o
      if (
        ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a)
      )
        return
      const u = {}
      l.z && Rf('z', o, u, this.animationValues)
      for (let c = 0; c < Pf.length; c++)
        Rf(`rotate${Pf[c]}`, o, u, this.animationValues), Rf(`skew${Pf[c]}`, o, u, this.animationValues)
      o.render()
      for (const c in u)
        o.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c])
      o.scheduleRender()
    }
    getProjectionStyles(o) {
      var a, l
      if (!this.instance || this.isSVG) return
      if (!this.isVisible) return $R
      const u = { visibility: '' },
        c = this.getTransformTemplate()
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ''),
          (u.pointerEvents = Gu(o == null ? void 0 : o.pointerEvents) || ''),
          (u.transform = c ? c(this.latestValues, '') : 'none'),
          u
        )
      const d = this.getLead()
      if (!this.projectionDelta || !this.layout || !d.target) {
        const y = {}
        return (
          this.options.layoutId &&
            ((y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
            (y.pointerEvents = Gu(o == null ? void 0 : o.pointerEvents) || '')),
          this.hasProjected &&
            !xi(this.latestValues) &&
            ((y.transform = c ? c({}, '') : 'none'), (this.hasProjected = !1)),
          y
        )
      }
      const f = d.animationValues || d.latestValues
      this.applyTransformsToTarget(),
        (u.transform = MR(this.projectionDeltaWithTransform, this.treeScale, f)),
        c && (u.transform = c(f, u.transform))
      const { x: h, y: v } = this.projectionDelta
      ;(u.transformOrigin = `${h.origin * 100}% ${v.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (l = (a = f.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !==
                    null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : f.opacityExit)
          : (u.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ''
                : f.opacityExit !== void 0
                  ? f.opacityExit
                  : 0)
      for (const y in Lc) {
        if (f[y] === void 0) continue
        const { correct: x, applyTo: p } = Lc[y],
          m = u.transform === 'none' ? f[y] : x(f[y], d)
        if (p) {
          const g = p.length
          for (let E = 0; E < g; E++) u[p[E]] = m
        } else u[y] = m
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents = d === this ? Gu(o == null ? void 0 : o.pointerEvents) || '' : 'none'),
        u
      )
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0
    }
    resetTree() {
      this.root.nodes.forEach(o => {
        var a
        return (a = o.currentAnimation) === null || a === void 0 ? void 0 : a.stop()
      }),
        this.root.nodes.forEach(Vy),
        this.root.sharedNodes.clear()
    }
  }
}
function BR(e) {
  e.updateLayout()
}
function zR(e) {
  var t
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot
  if (e.isLead() && e.layout && n && e.hasListeners('didUpdate')) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: s } = e.options,
      o = n.source !== e.layout.source
    s === 'size'
      ? sn(d => {
          const f = o ? n.measuredBox[d] : n.layoutBox[d],
            h = Qt(f)
          ;(f.min = r[d].min), (f.max = f.min + h)
        })
      : pS(s, n.layoutBox, r) &&
        sn(d => {
          const f = o ? n.measuredBox[d] : n.layoutBox[d],
            h = Qt(r[d])
          ;(f.max = f.min + h),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0), (e.relativeTarget[d].max = e.relativeTarget[d].min + h))
        })
    const a = Ds()
    Oa(a, r, n.layoutBox)
    const l = Ds()
    o ? Oa(l, e.applyTransform(i, !0), n.measuredBox) : Oa(l, r, n.layoutBox)
    const u = !cS(a)
    let c = !1
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent()
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: h } = d
        if (f && h) {
          const v = Ue()
          La(v, n.layoutBox, f.layoutBox)
          const y = Ue()
          La(y, r, h.layoutBox),
            dS(v, y) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = y), (e.relativeTargetOrigin = v), (e.relativeParent = d))
        }
      }
    }
    e.notifyListeners('didUpdate', {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c
    })
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options
    r && r()
  }
  e.options.transition = void 0
}
function UR(e) {
  fa && Ei.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function HR(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function WR(e) {
  e.clearSnapshot()
}
function Vy(e) {
  e.clearMeasurements()
}
function GR(e) {
  e.isLayoutDirty = !1
}
function qR(e) {
  const { visualElement: t } = e.options
  t && t.getProps().onBeforeLayoutMeasure && t.notify('BeforeLayoutMeasure'), e.resetTransform()
}
function By(e) {
  e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0), (e.isProjectionDirty = !0)
}
function KR(e) {
  e.resolveTargetDelta()
}
function ZR(e) {
  e.calcProjection()
}
function YR(e) {
  e.resetSkewAndRotation()
}
function QR(e) {
  e.removeLeadSnapshot()
}
function zy(e, t, n) {
  ;(e.translate = Fe(t.translate, 0, n)),
    (e.scale = Fe(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint)
}
function Uy(e, t, n, r) {
  ;(e.min = Fe(t.min, n.min, r)), (e.max = Fe(t.max, n.max, r))
}
function XR(e, t, n, r) {
  Uy(e.x, t.x, n.x, r), Uy(e.y, t.y, n.y, r)
}
function JR(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0
}
const eA = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Hy = e =>
    typeof navigator < 'u' && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
  Wy = Hy('applewebkit/') && !Hy('chrome/') ? Math.round : mt
function Gy(e) {
  ;(e.min = Wy(e.min)), (e.max = Wy(e.max))
}
function tA(e) {
  Gy(e.x), Gy(e.y)
}
function pS(e, t, n) {
  return e === 'position' || (e === 'preserve-aspect' && !nR(Fy(t), Fy(n), 0.2))
}
function nA(e) {
  var t
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
}
const rA = hS({
    attachResizeListener: (e, t) => lr(e, 'resize', t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
  }),
  Af = { current: void 0 },
  mS = hS({
    measureScroll: e => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Af.current) {
        const e = new rA({})
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Af.current = e)
      }
      return Af.current
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : 'none'
    },
    checkIsScrollRoot: e => window.getComputedStyle(e).position === 'fixed'
  }),
  iA = { pan: { Feature: yR }, drag: { Feature: vR, ProjectionNode: mS, MeasureLayout: aS } }
function qy(e, t) {
  const n = t ? 'pointerenter' : 'pointerleave',
    r = t ? 'onHoverStart' : 'onHoverEnd',
    i = (s, o) => {
      if (s.pointerType === 'touch' || XE()) return
      const a = e.getProps()
      e.animationState && a.whileHover && e.animationState.setActive('whileHover', t)
      const l = a[r]
      l && _e.postRender(() => l(s, o))
    }
  return pr(e.current, n, i, { passive: !e.getProps()[r] })
}
class sA extends pi {
  mount() {
    this.unmount = hr(qy(this.node, !0), qy(this.node, !1))
  }
  unmount() {}
}
class oA extends pi {
  constructor() {
    super(...arguments), (this.isActive = !1)
  }
  onFocus() {
    let t = !1
    try {
      t = this.node.current.matches(':focus-visible')
    } catch {
      t = !0
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !0), (this.isActive = !0))
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !1), (this.isActive = !1))
  }
  mount() {
    this.unmount = hr(
      lr(this.node.current, 'focus', () => this.onFocus()),
      lr(this.node.current, 'blur', () => this.onBlur())
    )
  }
  unmount() {}
}
const gS = (e, t) => (t ? (e === t ? !0 : gS(e, t.parentElement)) : !1)
function Of(e, t) {
  if (!t) return
  const n = new PointerEvent('pointer' + e)
  t(n, yd(n))
}
class aA extends pi {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = mt),
      (this.removeEndListeners = mt),
      (this.removeAccessibleListeners = mt),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return
        this.removeEndListeners()
        const r = this.node.getProps(),
          s = pr(
            window,
            'pointerup',
            (a, l) => {
              if (!this.checkPressEnd()) return
              const { onTap: u, onTapCancel: c, globalTapTarget: d } = this.node.getProps(),
                f = !d && !gS(this.node.current, a.target) ? c : u
              f && _e.update(() => f(a, l))
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          o = pr(window, 'pointercancel', (a, l) => this.cancelPress(a, l), {
            passive: !(r.onTapCancel || r.onPointerCancel)
          })
        ;(this.removeEndListeners = hr(s, o)), this.startPress(t, n)
      }),
      (this.startAccessiblePress = () => {
        const t = s => {
            if (s.key !== 'Enter' || this.isPressing) return
            const o = a => {
              a.key !== 'Enter' ||
                !this.checkPressEnd() ||
                Of('up', (l, u) => {
                  const { onTap: c } = this.node.getProps()
                  c && _e.postRender(() => c(l, u))
                })
            }
            this.removeEndListeners(),
              (this.removeEndListeners = lr(this.node.current, 'keyup', o)),
              Of('down', (a, l) => {
                this.startPress(a, l)
              })
          },
          n = lr(this.node.current, 'keydown', t),
          r = () => {
            this.isPressing && Of('cancel', (s, o) => this.cancelPress(s, o))
          },
          i = lr(this.node.current, 'blur', r)
        this.removeAccessibleListeners = hr(n, i)
      })
  }
  startPress(t, n) {
    this.isPressing = !0
    const { onTapStart: r, whileTap: i } = this.node.getProps()
    i && this.node.animationState && this.node.animationState.setActive('whileTap', !0),
      r && _e.postRender(() => r(t, n))
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive('whileTap', !1),
      !XE()
    )
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return
    const { onTapCancel: r } = this.node.getProps()
    r && _e.postRender(() => r(t, n))
  }
  mount() {
    const t = this.node.getProps(),
      n = pr(t.globalTapTarget ? window : this.node.current, 'pointerdown', this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart)
      }),
      r = lr(this.node.current, 'focus', this.startAccessiblePress)
    this.removeStartListeners = hr(n, r)
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
  }
}
const yp = new WeakMap(),
  Lf = new WeakMap(),
  lA = e => {
    const t = yp.get(e.target)
    t && t(e)
  },
  uA = e => {
    e.forEach(lA)
  }
function cA({ root: e, ...t }) {
  const n = e || document
  Lf.has(n) || Lf.set(n, {})
  const r = Lf.get(n),
    i = JSON.stringify(t)
  return r[i] || (r[i] = new IntersectionObserver(uA, { root: e, ...t })), r[i]
}
function dA(e, t, n) {
  const r = cA(t)
  return (
    yp.set(e, n),
    r.observe(e),
    () => {
      yp.delete(e), r.unobserve(e)
    }
  )
}
const fA = { some: 0, all: 1 }
class hA extends pi {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1)
  }
  startObserver() {
    this.unmount()
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = 'some', once: s } = t,
      o = { root: n ? n.current : void 0, rootMargin: r, threshold: typeof i == 'number' ? i : fA[i] },
      a = l => {
        const { isIntersecting: u } = l
        if (this.isInView === u || ((this.isInView = u), s && !u && this.hasEnteredView)) return
        u && (this.hasEnteredView = !0),
          this.node.animationState && this.node.animationState.setActive('whileInView', u)
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d
        f && f(l)
      }
    return dA(this.node.current, o, a)
  }
  mount() {
    this.startObserver()
  }
  update() {
    if (typeof IntersectionObserver > 'u') return
    const { props: t, prevProps: n } = this.node
    ;['amount', 'margin', 'root'].some(pA(t, n)) && this.startObserver()
  }
  unmount() {}
}
function pA({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return n => e[n] !== t[n]
}
const mA = {
    inView: { Feature: hA },
    tap: { Feature: aA },
    focus: { Feature: oA },
    hover: { Feature: sA }
  },
  gA = { layout: { ProjectionNode: mS, MeasureLayout: aS } },
  vS = w.createContext({ transformPagePoint: e => e, isStatic: !1, reducedMotion: 'never' }),
  wd = w.createContext({}),
  c0 = typeof window < 'u',
  yS = c0 ? w.useLayoutEffect : w.useEffect,
  wS = w.createContext({ strict: !1 })
let Ky = !1
function vA(e, t, n, r, i) {
  var s
  const { visualElement: o } = w.useContext(wd),
    a = w.useContext(wS),
    l = w.useContext(l0),
    u = w.useContext(vS).reducedMotion,
    c = w.useRef()
  ;(r = r || a.renderer),
    !c.current &&
      r &&
      (c.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: u
      }))
  const d = c.current,
    f = w.useContext(oS)
  d && !d.projection && i && (d.type === 'html' || d.type === 'svg') && wA(c.current, n, i, f),
    w.useInsertionEffect(() => {
      d && d.update(n, l)
    })
  const h = n[UE],
    v = w.useRef(
      !!h &&
        !window.MotionHandoffIsComplete &&
        ((s = window.MotionHasOptimisedAnimation) === null || s === void 0 ? void 0 : s.call(window, h))
    )
  return (
    yS(() => {
      d &&
        (d.updateFeatures(),
        u0.render(d.render),
        v.current && d.animationState && d.animationState.animateChanges())
    }),
    w.useEffect(() => {
      d &&
        (!v.current && d.animationState && d.animationState.animateChanges(),
        (v.current = !1),
        Ky || ((Ky = !0), queueMicrotask(yA)))
    }),
    d
  )
}
function yA() {
  window.MotionHandoffIsComplete = !0
}
function wA(e, t, n, r) {
  const { layoutId: i, layout: s, drag: o, dragConstraints: a, layoutScroll: l, layoutRoot: u } = t
  ;(e.projection = new n(e.latestValues, t['data-framer-portal-id'] ? void 0 : xS(e.parent))),
    e.projection.setOptions({
      layoutId: i,
      layout: s,
      alwaysMeasureLayout: !!o || (a && Is(a)),
      visualElement: e,
      animationType: typeof s == 'string' ? s : 'both',
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: u
    })
}
function xS(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : xS(e.parent)
}
function xA(e, t, n) {
  return w.useCallback(
    r => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == 'function' ? n(r) : Is(n) && (n.current = r))
    },
    [t]
  )
}
function xd(e) {
  return tl(e.animate) || qm.some(t => nl(e[t]))
}
function ES(e) {
  return !!(xd(e) || e.variants)
}
function EA(e, t) {
  if (xd(e)) {
    const { initial: n, animate: r } = e
    return { initial: n === !1 || nl(n) ? n : void 0, animate: nl(r) ? r : void 0 }
  }
  return e.inherit !== !1 ? t : {}
}
function SA(e) {
  const { initial: t, animate: n } = EA(e, w.useContext(wd))
  return w.useMemo(() => ({ initial: t, animate: n }), [Zy(t), Zy(n)])
}
function Zy(e) {
  return Array.isArray(e) ? e.join(' ') : e
}
const Yy = {
    animation: [
      'animate',
      'variants',
      'whileHover',
      'whileTap',
      'exit',
      'whileInView',
      'whileFocus',
      'whileDrag'
    ],
    exit: ['exit'],
    drag: ['drag', 'dragControls'],
    focus: ['whileFocus'],
    hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
    tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
    pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
    inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
    layout: ['layout', 'layoutId']
  },
  _o = {}
for (const e in Yy) _o[e] = { isEnabled: t => Yy[e].some(n => !!t[n]) }
function TA(e) {
  for (const t in e) _o[t] = { ..._o[t], ...e[t] }
}
const CA = Symbol.for('motionComponentSymbol')
function _A({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i
}) {
  e && TA(e)
  function s(a, l) {
    let u
    const c = { ...w.useContext(vS), ...a, layoutId: bA(a) },
      { isStatic: d } = c,
      f = SA(a),
      h = r(a, d)
    if (!d && c0) {
      kA()
      const v = PA(c)
      ;(u = v.MeasureLayout), (f.visualElement = vA(i, h, c, t, v.ProjectionNode))
    }
    return P.jsxs(wd.Provider, {
      value: f,
      children: [
        u && f.visualElement ? P.jsx(u, { visualElement: f.visualElement, ...c }) : null,
        n(i, a, xA(h, f.visualElement, l), h, d, f.visualElement)
      ]
    })
  }
  const o = w.forwardRef(s)
  return (o[CA] = i), o
}
function bA({ layoutId: e }) {
  const t = w.useContext(Oc).id
  return t && e !== void 0 ? t + '-' + e : e
}
function kA(e, t) {
  w.useContext(wS).strict
}
function PA(e) {
  const { drag: t, layout: n } = _o
  if (!t && !n) return {}
  const r = { ...t, ...n }
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e)) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  }
}
const RA = [
  'animate',
  'circle',
  'defs',
  'desc',
  'ellipse',
  'g',
  'image',
  'line',
  'filter',
  'marker',
  'mask',
  'metadata',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'rect',
  'stop',
  'switch',
  'symbol',
  'svg',
  'text',
  'tspan',
  'use',
  'view'
]
function d0(e) {
  return typeof e != 'string' || e.includes('-') ? !1 : !!(RA.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function SS(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r))
  for (const s in n) e.style.setProperty(s, n[s])
}
const TS = new Set([
  'baseFrequency',
  'diffuseConstant',
  'kernelMatrix',
  'kernelUnitLength',
  'keySplines',
  'keyTimes',
  'limitingConeAngle',
  'markerHeight',
  'markerWidth',
  'numOctaves',
  'targetX',
  'targetY',
  'surfaceScale',
  'specularConstant',
  'specularExponent',
  'stdDeviation',
  'tableValues',
  'viewBox',
  'gradientTransform',
  'pathLength',
  'startOffset',
  'textLength',
  'lengthAdjust'
])
function CS(e, t, n, r) {
  SS(e, t, void 0, r)
  for (const i in t.attrs) e.setAttribute(TS.has(i) ? i : vd(i), t.attrs[i])
}
function _S(e, { layout: t, layoutId: n }) {
  return hi.has(e) || e.startsWith('origin') || ((t || n !== void 0) && (!!Lc[e] || e === 'opacity'))
}
function f0(e, t, n) {
  var r
  const { style: i } = e,
    s = {}
  for (const o in i)
    (pt(i[o]) ||
      (t.style && pt(t.style[o])) ||
      _S(o, e) ||
      ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0 ? void 0 : r.liveStyle) !==
        void 0) &&
      (s[o] = i[o])
  return n && i && typeof i.willChange == 'string' && (n.applyWillChange = !1), s
}
function bS(e, t, n) {
  const r = f0(e, t, n)
  for (const i in e)
    if (pt(e[i]) || pt(t[i])) {
      const s = Nl.indexOf(i) !== -1 ? 'attr' + i.charAt(0).toUpperCase() + i.substring(1) : i
      r[s] = e[i]
    }
  return r
}
function AA(e) {
  const t = w.useRef(null)
  return t.current === null && (t.current = e()), t.current
}
function OA(
  { applyWillChange: e = !1, scrapeMotionValuesFromProps: t, createRenderState: n, onMount: r },
  i,
  s,
  o,
  a
) {
  const l = { latestValues: MA(i, s, o, a ? !1 : e, t), renderState: n() }
  return r && (l.mount = u => r(i, u, l)), l
}
const kS = e => (t, n) => {
  const r = w.useContext(wd),
    i = w.useContext(l0),
    s = () => OA(e, t, r, i, n)
  return n ? s() : AA(s)
}
function LA(e, t) {
  const n = WE(t)
  n && md(e, n)
}
function Qy(e, t, n) {
  const r = Array.isArray(t) ? t : [t]
  for (let i = 0; i < r.length; i++) {
    const s = Wm(e, r[i])
    if (s) {
      const { transitionEnd: o, transition: a, ...l } = s
      n(l, o)
    }
  }
}
function MA(e, t, n, r, i) {
  var s
  const o = {},
    a = [],
    l = r && ((s = e.style) === null || s === void 0 ? void 0 : s.willChange) === void 0,
    u = i(e, {})
  for (const x in u) o[x] = Gu(u[x])
  let { initial: c, animate: d } = e
  const f = xd(e),
    h = ES(e)
  t && h && !f && e.inherit !== !1 && (c === void 0 && (c = t.initial), d === void 0 && (d = t.animate))
  let v = n ? n.initial === !1 : !1
  v = v || c === !1
  const y = v ? d : c
  return (
    y &&
      typeof y != 'boolean' &&
      !tl(y) &&
      Qy(e, y, (x, p) => {
        for (const m in x) {
          let g = x[m]
          if (Array.isArray(g)) {
            const E = v ? g.length - 1 : 0
            g = g[E]
          }
          g !== null && (o[m] = g)
        }
        for (const m in p) o[m] = p[m]
      }),
    l &&
      (d &&
        c !== !1 &&
        !tl(d) &&
        Qy(e, d, x => {
          for (const p in x) LA(a, p)
        }),
      a.length && (o.willChange = a.join(','))),
    o
  )
}
const h0 = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  PS = () => ({ ...h0(), attrs: {} }),
  RS = (e, t) => (t && typeof e == 'number' ? t.transform(e) : e),
  NA = { x: 'translateX', y: 'translateY', z: 'translateZ', transformPerspective: 'perspective' },
  IA = Nl.length
function DA(e, t, n) {
  let r = '',
    i = !0
  for (let s = 0; s < IA; s++) {
    const o = Nl[s],
      a = e[o]
    if (a === void 0) continue
    let l = !0
    if (
      (typeof a == 'number' ? (l = a === (o.startsWith('scale') ? 1 : 0)) : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const u = RS(a, Jm[o])
      if (!l) {
        i = !1
        const c = NA[o] || o
        r += `${c}(${u}) `
      }
      n && (t[o] = u)
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? '' : r)) : i && (r = 'none'), r
}
function p0(e, t, n) {
  const { style: r, vars: i, transformOrigin: s } = e
  let o = !1,
    a = !1
  for (const l in t) {
    const u = t[l]
    if (hi.has(l)) {
      o = !0
      continue
    } else if (fE(l)) {
      i[l] = u
      continue
    } else {
      const c = RS(u, Jm[l])
      l.startsWith('origin') ? ((a = !0), (s[l] = c)) : (r[l] = c)
    }
  }
  if (
    (t.transform ||
      (o || n ? (r.transform = DA(t, e.transform, n)) : r.transform && (r.transform = 'none')),
    a)
  ) {
    const { originX: l = '50%', originY: u = '50%', originZ: c = 0 } = s
    r.transformOrigin = `${l} ${u} ${c}`
  }
}
function Xy(e, t, n) {
  return typeof e == 'string' ? e : se.transform(t + n * e)
}
function FA(e, t, n) {
  const r = Xy(t, e.x, e.width),
    i = Xy(n, e.y, e.height)
  return `${r} ${i}`
}
const jA = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
  $A = { offset: 'strokeDashoffset', array: 'strokeDasharray' }
function VA(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1
  const s = i ? jA : $A
  e[s.offset] = se.transform(-r)
  const o = se.transform(t),
    a = se.transform(n)
  e[s.array] = `${o} ${a}`
}
function m0(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: s,
    pathLength: o,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  d
) {
  if ((p0(e, u, d), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox)
    return
  }
  ;(e.attrs = e.style), (e.style = {})
  const { attrs: f, style: h, dimensions: v } = e
  f.transform && (v && (h.transform = f.transform), delete f.transform),
    v &&
      (i !== void 0 || s !== void 0 || h.transform) &&
      (h.transformOrigin = FA(v, i !== void 0 ? i : 0.5, s !== void 0 ? s : 0.5)),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    o !== void 0 && VA(f, o, a, l, !1)
}
const g0 = e => typeof e == 'string' && e.toLowerCase() === 'svg',
  BA = {
    useVisualState: kS({
      scrapeMotionValuesFromProps: bS,
      createRenderState: PS,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        _e.read(() => {
          try {
            n.dimensions = typeof t.getBBox == 'function' ? t.getBBox() : t.getBoundingClientRect()
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 }
          }
        }),
          _e.render(() => {
            m0(n, r, g0(t.tagName), e.transformTemplate), CS(t, n)
          })
      }
    })
  },
  zA = {
    useVisualState: kS({ applyWillChange: !0, scrapeMotionValuesFromProps: f0, createRenderState: h0 })
  }
function AS(e, t, n) {
  for (const r in t) !pt(t[r]) && !_S(r, n) && (e[r] = t[r])
}
function UA({ transformTemplate: e }, t) {
  return w.useMemo(() => {
    const n = h0()
    return p0(n, t, e), Object.assign({}, n.vars, n.style)
  }, [t])
}
function HA(e, t) {
  const n = e.style || {},
    r = {}
  return AS(r, n, e), Object.assign(r, UA(e, t)), r
}
function WA(e, t) {
  const n = {},
    r = HA(e, t)
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = 'none'),
      (r.touchAction = e.drag === !0 ? 'none' : `pan-${e.drag === 'x' ? 'y' : 'x'}`)),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    (n.style = r),
    n
  )
}
const GA = new Set([
  'animate',
  'exit',
  'variants',
  'initial',
  'style',
  'values',
  'variants',
  'transition',
  'transformTemplate',
  'custom',
  'inherit',
  'onBeforeLayoutMeasure',
  'onAnimationStart',
  'onAnimationComplete',
  'onUpdate',
  'onDragStart',
  'onDrag',
  'onDragEnd',
  'onMeasureDragConstraints',
  'onDirectionLock',
  'onDragTransitionEnd',
  '_dragX',
  '_dragY',
  'onHoverStart',
  'onHoverEnd',
  'onViewportEnter',
  'onViewportLeave',
  'globalTapTarget',
  'ignoreStrict',
  'viewport'
])
function Mc(e) {
  return (
    e.startsWith('while') ||
    (e.startsWith('drag') && e !== 'draggable') ||
    e.startsWith('layout') ||
    e.startsWith('onTap') ||
    e.startsWith('onPan') ||
    e.startsWith('onLayout') ||
    GA.has(e)
  )
}
let OS = e => !Mc(e)
function qA(e) {
  e && (OS = t => (t.startsWith('on') ? !Mc(t) : e(t)))
}
try {
  qA(require('@emotion/is-prop-valid').default)
} catch {}
function KA(e, t, n) {
  const r = {}
  for (const i in e)
    (i === 'values' && typeof e.values == 'object') ||
      ((OS(i) || (n === !0 && Mc(i)) || (!t && !Mc(i)) || (e.draggable && i.startsWith('onDrag'))) &&
        (r[i] = e[i]))
  return r
}
function ZA(e, t, n, r) {
  const i = w.useMemo(() => {
    const s = PS()
    return m0(s, t, g0(r), e.transformTemplate), { ...s.attrs, style: { ...s.style } }
  }, [t])
  if (e.style) {
    const s = {}
    AS(s, e.style, e), (i.style = { ...s, ...i.style })
  }
  return i
}
function YA(e = !1) {
  return (n, r, i, { latestValues: s }, o) => {
    const l = (d0(n) ? ZA : WA)(r, s, o, n),
      u = KA(r, typeof n == 'string', e),
      c = n !== w.Fragment ? { ...u, ...l, ref: i } : {},
      { children: d } = r,
      f = w.useMemo(() => (pt(d) ? d.get() : d), [d])
    return w.createElement(n, { ...c, children: f })
  }
}
function QA(e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const o = {
      ...(d0(r) ? BA : zA),
      preloadedFeatures: e,
      useRender: YA(i),
      createVisualElement: t,
      Component: r
    }
    return _A(o)
  }
}
const wp = { current: null },
  LS = { current: !1 }
function XA() {
  if (((LS.current = !0), !!c0))
    if (window.matchMedia) {
      const e = window.matchMedia('(prefers-reduced-motion)'),
        t = () => (wp.current = e.matches)
      e.addListener(t), t()
    } else wp.current = !1
}
function JA(e, t, n) {
  for (const r in t) {
    const i = t[r],
      s = n[r]
    if (pt(i)) e.addValue(r, i)
    else if (pt(s)) e.addValue(r, sl(i, { owner: e }))
    else if (s !== i)
      if (e.hasValue(r)) {
        const o = e.getValue(r)
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i)
      } else {
        const o = e.getStaticValue(r)
        e.addValue(r, sl(o !== void 0 ? o : i, { owner: e }))
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r)
  return t
}
const Jy = new WeakMap(),
  eO = [...mE, dt, ni],
  tO = e => eO.find(pE(e)),
  e2 = [
    'AnimationStart',
    'AnimationComplete',
    'Update',
    'BeforeLayoutMeasure',
    'LayoutMeasure',
    'LayoutAnimationStart',
    'LayoutAnimationComplete'
  ],
  nO = qm.length
class rO {
  scrapeMotionValuesFromProps(t, n, r) {
    return {}
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: s,
      visualState: o
    },
    a = {}
  ) {
    ;(this.applyWillChange = !1),
      (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Qm),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify('Update', this.latestValues)),
      (this.render = () => {
        ;(this.isRenderScheduled = !1),
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
      }),
      (this.isRenderScheduled = !1),
      (this.scheduleRender = () => {
        this.isRenderScheduled || ((this.isRenderScheduled = !0), _e.render(this.render, !1, !0))
      })
    const { latestValues: l, renderState: u } = o
    ;(this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!s),
      (this.isControllingVariants = xd(n)),
      (this.isVariantNode = ES(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current))
    const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(n, {}, this)
    for (const f in d) {
      const h = d[f]
      l[f] !== void 0 && pt(h) && h.set(l[f], !1)
    }
  }
  mount(t) {
    ;(this.current = t),
      Jy.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      LS.current || XA(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === 'never'
          ? !1
          : this.reducedMotionConfig === 'always'
            ? !0
            : wp.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext)
  }
  unmount() {
    Jy.delete(this.current),
      this.projection && this.projection.unmount(),
      xr(this.notifyUpdate),
      xr(this.render),
      this.valueSubscriptions.forEach(t => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this)
    for (const t in this.events) this.events[t].clear()
    for (const t in this.features) {
      const n = this.features[t]
      n && (n.unmount(), (n.isMounted = !1))
    }
    this.current = null
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)()
    const r = hi.has(t),
      i = n.on('change', a => {
        ;(this.latestValues[t] = a),
          this.props.onUpdate && _e.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0)
      }),
      s = n.on('renderRequest', this.scheduleRender)
    let o
    window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        i(), s(), o && o(), n.owner && n.stop()
      })
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current)
  }
  updateFeatures() {
    let t = 'animation'
    for (t in _o) {
      const n = _o[t]
      if (!n) continue
      const { isEnabled: r, Feature: i } = n
      if (
        (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)), this.features[t])
      ) {
        const s = this.features[t]
        s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0))
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props)
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ue()
  }
  getStaticValue(t) {
    return this.latestValues[t]
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n
  }
  update(t, n) {
    ;(t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n)
    for (let r = 0; r < e2.length; r++) {
      const i = e2[r]
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i])
      const s = 'on' + i,
        o = t[s]
      o && (this.propEventSubscriptions[i] = this.on(i, o))
    }
    ;(this.prevMotionValues = JA(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue()
  }
  getProps() {
    return this.props
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0
  }
  getDefaultTransition() {
    return this.props.transition
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {}
      return this.props.initial !== void 0 && (r.initial = this.props.initial), r
    }
    const n = {}
    for (let r = 0; r < nO; r++) {
      const i = qm[r],
        s = this.props[i]
      ;(nl(s) || s === !1) && (n[i] = s)
    }
    return n
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode()
    if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t)
  }
  addValue(t, n) {
    const r = this.values.get(t)
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()))
  }
  removeValue(t) {
    this.values.delete(t)
    const n = this.valueSubscriptions.get(t)
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState)
  }
  hasValue(t) {
    return this.values.has(t)
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t]
    let r = this.values.get(t)
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = sl(n === null ? void 0 : n, { owner: this })), this.addValue(t, r)),
      r
    )
  }
  readValue(t, n) {
    var r
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0
          ? r
          : this.readValueFromInstance(this.current, t, this.options)
    return (
      i != null &&
        (typeof i == 'string' && (cE(i) || uE(i))
          ? (i = parseFloat(i))
          : !tO(i) && ni.test(n) && (i = TE(t, n)),
        this.setBaseTarget(t, pt(i) ? i.get() : i)),
      pt(i) ? i.get() : i
    )
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n
  }
  getBaseTarget(t) {
    var n
    const { initial: r } = this.props
    let i
    if (typeof r == 'string' || typeof r == 'object') {
      const o = Wm(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      )
      o && (i = o[t])
    }
    if (r && i !== void 0) return i
    const s = this.getBaseTargetFromProps(this.props, t)
    return s !== void 0 && !pt(s)
      ? s
      : this.initialValues[t] !== void 0 && i === void 0
        ? void 0
        : this.baseTarget[t]
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new a0()), this.events[t].add(n)
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n)
  }
}
class MS extends rO {
  constructor() {
    super(...arguments), (this.KeyframeResolver = CE)
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t]
  }
}
function iO(e) {
  return window.getComputedStyle(e)
}
class sO extends MS {
  constructor() {
    super(...arguments), (this.type = 'html'), (this.applyWillChange = !0), (this.renderInstance = SS)
  }
  readValueFromInstance(t, n) {
    if (hi.has(n)) {
      const r = e0(n)
      return (r && r.default) || 0
    } else {
      const r = iO(t),
        i = (fE(n) ? r.getPropertyValue(n) : r[n]) || 0
      return typeof i == 'string' ? i.trim() : i
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return iS(t, n)
  }
  build(t, n, r) {
    p0(t, n, r.transformTemplate)
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return f0(t, n, r)
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription)
    const { children: t } = this.props
    pt(t) &&
      (this.childSubscription = t.on('change', n => {
        this.current && (this.current.textContent = `${n}`)
      }))
  }
}
class oO extends MS {
  constructor() {
    super(...arguments),
      (this.type = 'svg'),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Ue)
  }
  getBaseTargetFromProps(t, n) {
    return t[n]
  }
  readValueFromInstance(t, n) {
    if (hi.has(n)) {
      const r = e0(n)
      return (r && r.default) || 0
    }
    return (n = TS.has(n) ? n : vd(n)), t.getAttribute(n)
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return bS(t, n, r)
  }
  build(t, n, r) {
    m0(t, n, this.isSVGTag, r.transformTemplate)
  }
  renderInstance(t, n, r, i) {
    CS(t, n, r, i)
  }
  mount(t) {
    ;(this.isSVGTag = g0(t.tagName)), super.mount(t)
  }
}
const aO = (e, t) => (d0(e) ? new oO(t) : new sO(t, { allowProjection: e !== w.Fragment })),
  lO = QA({ ...qP, ...mA, ...iA, ...gA }, aO),
  Zs = zk(lO),
  uO = w.createContext(null)
function cO() {
  const e = w.useRef(!1)
  return (
    yS(
      () => (
        (e.current = !0),
        () => {
          e.current = !1
        }
      ),
      []
    ),
    e
  )
}
function dO() {
  const e = cO(),
    [t, n] = w.useState(0),
    r = w.useCallback(() => {
      e.current && n(t + 1)
    }, [t])
  return [w.useCallback(() => _e.postRender(r), [r]), t]
}
const fO = e => !e.isLayoutDirty && e.willUpdate(!1)
function t2() {
  const e = new Set(),
    t = new WeakMap(),
    n = () => e.forEach(fO)
  return {
    add: r => {
      e.add(r), t.set(r, r.addEventListener('willUpdate', n))
    },
    remove: r => {
      e.delete(r)
      const i = t.get(r)
      i && (i(), t.delete(r)), n()
    },
    dirty: n
  }
}
const NS = e => e === !0,
  hO = e => NS(e === !0) || e === 'id',
  pO = ({ children: e, id: t, inherit: n = !0 }) => {
    const r = w.useContext(Oc),
      i = w.useContext(uO),
      [s, o] = dO(),
      a = w.useRef(null),
      l = r.id || i
    a.current === null &&
      (hO(n) && l && (t = t ? l + '-' + t : l),
      (a.current = { id: t, group: (NS(n) && r.group) || t2() }))
    const u = w.useMemo(() => ({ ...a.current, forceRender: s }), [o])
    return P.jsx(Oc.Provider, { value: u, children: e })
  }
function mO({ color: e = 'currentColor', width: t = '800px', height: n = '800px' }) {
  return P.jsx('svg', {
    fill: e,
    width: t,
    height: n,
    viewBox: '0 0 512 512',
    xmlns: 'http://www.w3.org/2000/svg',
    children: P.jsx('path', {
      d: 'M450.46,256.09C449.35,175.17,399.81,102.71,324,73.79,247.59,44.67,157.49,69,105.82,132.13,54.4,195,46.61,285.58,88.49,355.68c41.8,69.95,123.74,106,203.55,91.63,91-16.37,156.14-98.12,158.35-189.14A20.16,20.16,0,0,0,450.46,256.09ZM119.05,174.38C152.76,118,220.23,87,285,99.43c69.4,13.29,120.43,70.47,128.83,139H318.41c-8.26-27.36-32-48-62.62-48-29.65,0-55.15,20.65-63.11,48H97.74A158,158,0,0,1,119.05,174.38ZM286.13,256.1c-2,38.75-60.67,39.4-60.67,0S284.17,217.33,286.13,256.1Zm24,149.79C246.85,428.58,175,408.74,132.3,356.82a157.53,157.53,0,0,1-34.57-83H192.6c7.91,27.39,33.7,48,63.19,48,30.67,0,54.36-20.68,62.62-48h95.45C406.61,333,367.54,385.32,310.14,405.89Z'
    })
  })
}
function gO({ totalCard: e = 1 }) {
  return Array.from({ length: e }).map((t, n) =>
    P.jsx(
      'div',
      {
        'data-testid': 'card-skeleton-loader',
        className:
          'w-60 h-[258px] flex justify-center items-center shadow border border-slate-300 text-slate-400 bg-slate-300 dark:bg-slate-800 dark:text-slate-950 dark:border-slate-700 rounded-3xl animate-pulse ',
        children: P.jsx(mO, {})
      },
      n
    )
  )
}
const vO =
  "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='200px'%20height='200px'%20viewBox='0%200%20100%20100'%20preserveAspectRatio='xMidYMid'%20style='background:%20none;%20display:%20block;%20margin:%20auto;'%3e%3c!--%20Outer%20spinning%20Poké%20Ball%20--%3e%3cg%3e%3ccircle%20cx='50'%20cy='50'%20r='45'%20fill='%23d81b26'%20/%3e%3cpath%20fill='%23ffffff'%20d='M50%205A45%2045%200%200%201%2095%2050H5A45%2045%200%200%201%2050%205z'%20/%3e%3cpath%20fill='%233d3d3d'%20d='M5%2050H95'%20/%3e%3ccircle%20cx='50'%20cy='50'%20r='45'%20fill='none'%20stroke='%233d3d3d'%20stroke-width='4'%20/%3e%3canimateTransform%20attributeName='transform'%20type='rotate'%20from='0%2050%2050'%20to='360%2050%2050'%20dur='1.2s'%20repeatCount='indefinite'%20keySplines='0.42%200%200.58%201'%20calcMode='spline'%20/%3e%3c/g%3e%3c!--%20Central%20button%20with%20pulse%20and%20glow%20effects%20--%3e%3cg%3e%3ccircle%20cx='50'%20cy='50'%20r='10'%20fill='%23ffffff'%20stroke='%233d3d3d'%20stroke-width='4'%3e%3canimate%20attributeName='r'%20from='8'%20to='10'%20dur='0.6s'%20repeatCount='indefinite'%20values='8;10;8'%20keyTimes='0;0.5;1'%20keySplines='0.42%200%200.58%201;0.42%200%200.58%201'%20calcMode='spline'%20/%3e%3c/circle%3e%3ccircle%20cx='50'%20cy='50'%20r='6'%20fill='%233d3d3d'%3e%3canimate%20attributeName='r'%20from='4'%20to='6'%20dur='0.6s'%20repeatCount='indefinite'%20values='4;6;4'%20keyTimes='0;0.5;1'%20keySplines='0.42%200%200.58%201;0.42%200%200.58%201'%20calcMode='spline'%20/%3e%3c/circle%3e%3ccircle%20cx='50'%20cy='50'%20r='16'%20fill='none'%20stroke='%23ffffff'%20stroke-width='2'%20opacity='0.6'%3e%3canimate%20attributeName='r'%20from='12'%20to='16'%20dur='1.2s'%20repeatCount='indefinite'%20values='12;16;12'%20keyTimes='0;0.5;1'%20keySplines='0.42%200%200.58%201;0.42%200%200.58%201'%20calcMode='spline'%20/%3e%3canimate%20attributeName='opacity'%20from='0.6'%20to='0.2'%20dur='1.2s'%20repeatCount='indefinite'%20values='0.6;0.2;0.6'%20keyTimes='0;0.5;1'%20keySplines='0.42%200%200.58%201;0.42%200%200.58%201'%20calcMode='spline'%20/%3e%3c/circle%3e%3c/g%3e%3c/svg%3e"
function yO(e, t, n, r) {
  return new (n || (n = Promise))(function (i, s) {
    function o(u) {
      try {
        l(r.next(u))
      } catch (c) {
        s(c)
      }
    }
    function a(u) {
      try {
        l(r.throw(u))
      } catch (c) {
        s(c)
      }
    }
    function l(u) {
      var c
      u.done
        ? i(u.value)
        : ((c = u.value),
          c instanceof n
            ? c
            : new n(function (d) {
                d(c)
              })).then(o, a)
    }
    l((r = r.apply(e, [])).next())
  })
}
const n2 = (e, t, n, r) => {
    e.style.transition = `${t} ${n}ms ${r}`
  },
  sr = (e, t, n) => Math.min(Math.max(e, t), n)
let wO = class {
    constructor(t, n) {
      ;(this.glareAngle = 0),
        (this.glareOpacity = 0),
        (this.calculateGlareSize = o => {
          const { width: a, height: l } = o,
            u = Math.sqrt(Math.pow(a, 2) + Math.pow(l, 2))
          return { width: u, height: u }
        }),
        (this.setSize = o => {
          const a = this.calculateGlareSize(o)
          ;(this.glareEl.style.width = `${a.width}px`), (this.glareEl.style.height = `${a.height}px`)
        }),
        (this.update = (o, a, l, u) => {
          this.updateAngle(o, a.glareReverse), this.updateOpacity(o, a, l, u)
        }),
        (this.updateAngle = (o, a) => {
          const { xPercentage: l, yPercentage: u } = o,
            c = 180 / Math.PI,
            d = l ? Math.atan2(u, -l) * c : 0
          this.glareAngle = d - (a ? 180 : 0)
        }),
        (this.updateOpacity = (o, a, l, u) => {
          const { xPercentage: c, yPercentage: d } = o,
            { glarePosition: f, glareReverse: h, glareMaxOpacity: v } = a,
            y = l ? -1 : 1,
            x = u ? -1 : 1,
            p = h ? -1 : 1
          let m = 0
          switch (f) {
            case 'top':
              m = -c * y * p
              break
            case 'right':
              m = d * x * p
              break
            case 'bottom':
            case void 0:
              m = c * y * p
              break
            case 'left':
              m = -d * x * p
              break
            case 'all':
              m = Math.hypot(c, d)
          }
          const g = sr(m, 0, 100)
          this.glareOpacity = (g * v) / 100
        }),
        (this.render = o => {
          const { glareColor: a } = o
          ;(this.glareEl.style.transform = `rotate(${this.glareAngle}deg) translate(-50%, -50%)`),
            (this.glareEl.style.opacity = this.glareOpacity.toString()),
            (this.glareEl.style.background = `linear-gradient(0deg, rgba(255,255,255,0) 0%, ${a} 100%)`)
        }),
        (this.glareWrapperEl = document.createElement('div')),
        (this.glareEl = document.createElement('div')),
        this.glareWrapperEl.appendChild(this.glareEl),
        (this.glareWrapperEl.className = 'glare-wrapper'),
        (this.glareEl.className = 'glare')
      const r = {
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          borderRadius: n,
          WebkitMaskImage: '-webkit-radial-gradient(white, black)',
          pointerEvents: 'none'
        },
        i = this.calculateGlareSize(t),
        s = {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transformOrigin: '0% 0%',
          pointerEvents: 'none',
          width: `${i.width}px`,
          height: `${i.height}px`
        }
      Object.assign(this.glareWrapperEl.style, r), Object.assign(this.glareEl.style, s)
    }
  },
  xO = class {
    constructor() {
      ;(this.glareAngle = 0),
        (this.glareOpacity = 0),
        (this.tiltAngleX = 0),
        (this.tiltAngleY = 0),
        (this.tiltAngleXPercentage = 0),
        (this.tiltAngleYPercentage = 0),
        (this.update = (t, n) => {
          this.updateTilt(t, n),
            this.updateTiltManualInput(t, n),
            this.updateTiltReverse(n),
            this.updateTiltLimits(n)
        }),
        (this.updateTilt = (t, n) => {
          const { xPercentage: r, yPercentage: i } = t,
            { tiltMaxAngleX: s, tiltMaxAngleY: o } = n
          ;(this.tiltAngleX = (r * s) / 100), (this.tiltAngleY = ((i * o) / 100) * -1)
        }),
        (this.updateTiltManualInput = (t, n) => {
          const { tiltAngleXManual: r, tiltAngleYManual: i, tiltMaxAngleX: s, tiltMaxAngleY: o } = n
          ;(r !== null || i !== null) &&
            ((this.tiltAngleX = r !== null ? r : 0),
            (this.tiltAngleY = i !== null ? i : 0),
            (t.xPercentage = (100 * this.tiltAngleX) / s),
            (t.yPercentage = (100 * this.tiltAngleY) / o))
        }),
        (this.updateTiltReverse = t => {
          const n = t.tiltReverse ? -1 : 1
          ;(this.tiltAngleX = n * this.tiltAngleX), (this.tiltAngleY = n * this.tiltAngleY)
        }),
        (this.updateTiltLimits = t => {
          const { tiltAxis: n } = t
          ;(this.tiltAngleX = sr(this.tiltAngleX, -90, 90)),
            (this.tiltAngleY = sr(this.tiltAngleY, -90, 90)),
            n &&
              ((this.tiltAngleX = n === 'x' ? this.tiltAngleX : 0),
              (this.tiltAngleY = n === 'y' ? this.tiltAngleY : 0))
        }),
        (this.updateTiltAnglesPercentage = t => {
          const { tiltMaxAngleX: n, tiltMaxAngleY: r } = t
          ;(this.tiltAngleXPercentage = (this.tiltAngleX / n) * 100),
            (this.tiltAngleYPercentage = (this.tiltAngleY / r) * 100)
        }),
        (this.render = t => {
          t.style.transform += `rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `
        })
    }
  }
const EO = Object.assign(
  Object.assign(
    {
      scale: 1,
      perspective: 1e3,
      flipVertically: !1,
      flipHorizontally: !1,
      reset: !0,
      transitionEasing: 'cubic-bezier(.03,.98,.52,.99)',
      transitionSpeed: 400,
      trackOnWindow: !1,
      gyroscope: !1
    },
    {
      tiltEnable: !0,
      tiltReverse: !1,
      tiltAngleXInitial: 0,
      tiltAngleYInitial: 0,
      tiltMaxAngleX: 20,
      tiltMaxAngleY: 20,
      tiltAxis: void 0,
      tiltAngleXManual: null,
      tiltAngleYManual: null
    }
  ),
  {
    glareEnable: !1,
    glareMaxOpacity: 0.7,
    glareColor: '#ffffff',
    glarePosition: 'bottom',
    glareReverse: !1,
    glareBorderRadius: '0'
  }
)
let IS = class extends w.PureComponent {
  constructor() {
    super(...arguments),
      (this.wrapperEl = {
        node: null,
        size: { width: 0, height: 0, left: 0, top: 0 },
        clientPosition: { x: null, y: null, xPercentage: 0, yPercentage: 0 },
        updateAnimationId: null,
        scale: 1
      }),
      (this.tilt = null),
      (this.glare = null),
      (this.addDeviceOrientationEventListener = () =>
        yO(this, void 0, void 0, function* () {
          if (!window.DeviceOrientationEvent) return
          const t = DeviceOrientationEvent.requestPermission
          typeof t == 'function'
            ? (yield t()) === 'granted' && window.addEventListener('deviceorientation', this.onMove)
            : window.addEventListener('deviceorientation', this.onMove)
        })),
      (this.setSize = () => {
        this.setWrapperElSize(), this.glare && this.glare.setSize(this.wrapperEl.size)
      }),
      (this.mainLoop = t => {
        this.wrapperEl.updateAnimationId !== null &&
          cancelAnimationFrame(this.wrapperEl.updateAnimationId),
          this.processInput(t),
          this.update(t.type),
          (this.wrapperEl.updateAnimationId = requestAnimationFrame(this.renderFrame))
      }),
      (this.onEnter = t => {
        const { onEnter: n } = this.props
        this.setSize(),
          (this.wrapperEl.node.style.willChange = 'transform'),
          this.setTransitions(),
          n && n(t.type)
      }),
      (this.onMove = t => {
        this.mainLoop(t), this.emitOnMove(t)
      }),
      (this.onLeave = t => {
        const { onLeave: n } = this.props
        if ((this.setTransitions(), n && n(t.type), this.props.reset)) {
          const r = new CustomEvent('autoreset')
          this.onMove(r)
        }
      }),
      (this.processInput = t => {
        const { scale: n } = this.props
        switch (t.type) {
          case 'mousemove':
            ;(this.wrapperEl.clientPosition.x = t.pageX),
              (this.wrapperEl.clientPosition.y = t.pageY),
              (this.wrapperEl.scale = n)
            break
          case 'touchmove':
            ;(this.wrapperEl.clientPosition.x = t.touches[0].pageX),
              (this.wrapperEl.clientPosition.y = t.touches[0].pageY),
              (this.wrapperEl.scale = n)
            break
          case 'deviceorientation':
            this.processInputDeviceOrientation(t), (this.wrapperEl.scale = n)
            break
          case 'autoreset':
            const {
                tiltAngleXInitial: r,
                tiltAngleYInitial: i,
                tiltMaxAngleX: s,
                tiltMaxAngleY: o
              } = this.props,
              a = (i / o) * 100
            ;(this.wrapperEl.clientPosition.xPercentage = sr((r / s) * 100, -100, 100)),
              (this.wrapperEl.clientPosition.yPercentage = sr(a, -100, 100)),
              (this.wrapperEl.scale = 1)
        }
      }),
      (this.processInputDeviceOrientation = t => {
        if (!t.gamma || !t.beta || !this.props.gyroscope) return
        const { tiltMaxAngleX: n, tiltMaxAngleY: r } = this.props,
          i = t.gamma
        ;(this.wrapperEl.clientPosition.xPercentage = (t.beta / n) * 100),
          (this.wrapperEl.clientPosition.yPercentage = (i / r) * 100),
          (this.wrapperEl.clientPosition.xPercentage = sr(
            this.wrapperEl.clientPosition.xPercentage,
            -100,
            100
          )),
          (this.wrapperEl.clientPosition.yPercentage = sr(
            this.wrapperEl.clientPosition.yPercentage,
            -100,
            100
          ))
      }),
      (this.update = t => {
        const { tiltEnable: n, flipVertically: r, flipHorizontally: i } = this.props
        t !== 'autoreset' && t !== 'deviceorientation' && t !== 'propChange' && this.updateClientInput(),
          n && this.tilt.update(this.wrapperEl.clientPosition, this.props),
          this.updateFlip(),
          this.tilt.updateTiltAnglesPercentage(this.props),
          this.glare && this.glare.update(this.wrapperEl.clientPosition, this.props, r, i)
      }),
      (this.updateClientInput = () => {
        const { trackOnWindow: t } = this.props
        let n, r
        if (t) {
          const { x: i, y: s } = this.wrapperEl.clientPosition
          ;(n = (s / window.innerHeight) * 200 - 100), (r = (i / window.innerWidth) * 200 - 100)
        } else {
          const {
            size: { width: i, height: s, left: o, top: a },
            clientPosition: { x: l, y: u }
          } = this.wrapperEl
          ;(n = ((u - a) / s) * 200 - 100), (r = ((l - o) / i) * 200 - 100)
        }
        ;(this.wrapperEl.clientPosition.xPercentage = sr(n, -100, 100)),
          (this.wrapperEl.clientPosition.yPercentage = sr(r, -100, 100))
      }),
      (this.updateFlip = () => {
        const { flipVertically: t, flipHorizontally: n } = this.props
        t && ((this.tilt.tiltAngleX += 180), (this.tilt.tiltAngleY *= -1)),
          n && (this.tilt.tiltAngleY += 180)
      }),
      (this.renderFrame = () => {
        this.resetWrapperElTransform(),
          this.renderPerspective(),
          this.tilt.render(this.wrapperEl.node),
          this.renderScale(),
          this.glare && this.glare.render(this.props)
      })
  }
  componentDidMount() {
    if (((this.tilt = new xO()), this.initGlare(), this.addEventListeners(), typeof CustomEvent > 'u'))
      return
    const t = new CustomEvent('autoreset')
    this.mainLoop(t)
    const n = new CustomEvent('initial')
    this.emitOnMove(n)
  }
  componentWillUnmount() {
    this.wrapperEl.updateAnimationId !== null && cancelAnimationFrame(this.wrapperEl.updateAnimationId),
      this.removeEventListeners()
  }
  componentDidUpdate() {
    const t = new CustomEvent('propChange')
    this.mainLoop(t), this.emitOnMove(t)
  }
  addEventListeners() {
    const { trackOnWindow: t, gyroscope: n } = this.props
    window.addEventListener('resize', this.setSize),
      t &&
        (window.addEventListener('mouseenter', this.onEnter),
        window.addEventListener('mousemove', this.onMove),
        window.addEventListener('mouseout', this.onLeave),
        window.addEventListener('touchstart', this.onEnter),
        window.addEventListener('touchmove', this.onMove),
        window.addEventListener('touchend', this.onLeave)),
      n && this.addDeviceOrientationEventListener()
  }
  removeEventListeners() {
    const { trackOnWindow: t, gyroscope: n } = this.props
    window.removeEventListener('resize', this.setSize),
      t &&
        (window.removeEventListener('mouseenter', this.onEnter),
        window.removeEventListener('mousemove', this.onMove),
        window.removeEventListener('mouseout', this.onLeave),
        window.removeEventListener('touchstart', this.onEnter),
        window.removeEventListener('touchmove', this.onMove),
        window.removeEventListener('touchend', this.onLeave)),
      n && window.DeviceOrientationEvent && window.removeEventListener('deviceorientation', this.onMove)
  }
  setWrapperElSize() {
    const t = this.wrapperEl.node.getBoundingClientRect()
    ;(this.wrapperEl.size.width = this.wrapperEl.node.offsetWidth),
      (this.wrapperEl.size.height = this.wrapperEl.node.offsetHeight),
      (this.wrapperEl.size.left = t.left + window.scrollX),
      (this.wrapperEl.size.top = t.top + window.scrollY)
  }
  initGlare() {
    const { glareEnable: t, glareBorderRadius: n } = this.props
    t &&
      ((this.glare = new wO(this.wrapperEl.size, n)),
      this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))
  }
  emitOnMove(t) {
    const { onMove: n } = this.props
    if (!n) return
    let r = 0,
      i = 0
    this.glare && ((r = this.glare.glareAngle), (i = this.glare.glareOpacity)),
      n({
        tiltAngleX: this.tilt.tiltAngleX,
        tiltAngleY: this.tilt.tiltAngleY,
        tiltAngleXPercentage: this.tilt.tiltAngleXPercentage,
        tiltAngleYPercentage: this.tilt.tiltAngleYPercentage,
        glareAngle: r,
        glareOpacity: i,
        eventType: t.type
      })
  }
  resetWrapperElTransform() {
    this.wrapperEl.node.style.transform = ''
  }
  renderPerspective() {
    const { perspective: t } = this.props
    this.wrapperEl.node.style.transform += `perspective(${t}px) `
  }
  renderScale() {
    const { scale: t } = this.wrapperEl
    this.wrapperEl.node.style.transform += `scale3d(${t},${t},${t})`
  }
  setTransitions() {
    const { transitionSpeed: t, transitionEasing: n } = this.props
    n2(this.wrapperEl.node, 'all', t, n), this.glare && n2(this.glare.glareEl, 'opacity', t, n)
  }
  render() {
    const { children: t, className: n, style: r } = this.props
    return we.createElement(
      'div',
      {
        ref: i => (this.wrapperEl.node = i),
        onMouseEnter: this.onEnter,
        onMouseMove: this.onMove,
        onMouseLeave: this.onLeave,
        onTouchStart: this.onEnter,
        onTouchMove: this.onMove,
        onTouchEnd: this.onLeave,
        className: n,
        style: r
      },
      t
    )
  }
}
IS.defaultProps = EO
function SO({
  children: e,
  className: t = '',
  scale: n = 1.05,
  tiltMaxAngleY: r = 10,
  glareEnable: i = !0,
  gyroscope: s = !0,
  glarePosition: o = 'all',
  glareBorderRadius: a = '24px',
  glareMaxOpacity: l = 0.2,
  parralexEffect: u = !0
}) {
  return P.jsx(IS, {
    scale: n,
    tiltMaxAngleY: r,
    glareEnable: i,
    gyroscope: s,
    glarePosition: o,
    glareBorderRadius: a,
    glareMaxOpacity: l,
    className: `${u ? 'parallax-effect-glare-scale' : ''} ${t}`,
    children: e
  })
}
const r2 = {}
function TO(e, t) {
  const [n, r] = w.useState({ src: t, isLoading: !0, error: null })
  return (
    w.useEffect(() => {
      if (r2[e]) {
        r({ src: e, isLoading: !1, error: null })
        return
      }
      const i = new Image()
      return (
        (i.src = e),
        (i.onload = () => {
          ;(r2[e] = !0), r({ src: e, isLoading: !1, error: null })
        }),
        (i.onerror = s => {
          r({ src: t, isLoading: !1, error: s })
        }),
        () => {
          ;(i.onload = null), (i.onerror = null)
        }
      )
    }, [e, t]),
    n
  )
}
function CO({ src: e, alt: t }) {
  return P.jsx('figure', {
    className: 'popup-element flex items-center justify-center',
    children: P.jsxs(Zs.div, {
      layout: !0,
      className: 'relative w-60 h-60 -mt-16',
      children: [
        P.jsx(Zs.img, {
          loading: 'lazy',
          src: e,
          height: 240,
          width: 240,
          alt: `${t}-backdrop`,
          className:
            'blur-2xl w-52 absolute opacity-50 group-hover:opacity-90 m-auto inset-0 transition-opacity'
        }),
        P.jsx(Zs.img, {
          loading: 'lazy',
          layoutId: `${t} pokemon`,
          alt: t,
          height: 240,
          width: 240,
          src: e,
          className: 'w-52 m-auto z-10 relative'
        })
      ]
    })
  })
}
function _O({ id: e, children: t, className: n }) {
  return P.jsxs('div', {
    className: 'flex items-center justify-center gap-2',
    children: [
      P.jsx(Zs.h3, {
        layoutId: `pokemon-name-${e}`,
        className: `text-slate-300 group-hover:text-slate-50 dark:text-slate-400 dark:group-hover:text-slate-50 group-hover:underline capitalize text-center font-semibold my-5 ${n}`,
        children: t
      }),
      P.jsx(hk, {
        'aria-hidden': 'true',
        'aria-label': 'navigate icon',
        className:
          'opacity-0 size-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:size-auto transition-transform text-slate-50 dark:text-slate-50'
      })
    ]
  })
}
function bO({ name: e, image: t }) {
  const n = e.length > 22,
    { src: r, error: i } = TO(t, vO)
  return (
    i && console.error(i),
    P.jsx(P4, {
      to: `pokemon-details/${e}`,
      search: s => ({ ...s }),
      'aria-label': `View details of ${e}`,
      className:
        'inline-block focus-visible:outline outline-yellow-500 outline-2 focus-visible:outline-offset-8 outline-offset-0  rounded-3xl transition-offset duration-200 motion-reduce:duration-0',
      children: P.jsx(Zs.div, {
        layoutId: `image-wrapper-${e}`,
        transition: { duration: 0.2 },
        className:
          'inner-glow bg-slate-800 inline-flex flex-col justify-center group cursor-pointer  dark:bg-slate-900 p-2 dark:text-slate-50 rounded-3xl dark:border-slate-800 border',
        children: P.jsxs(SO, {
          children: [
            P.jsx(CO, { src: r, alt: `${e} image` }),
            P.jsx(_O, { className: n ? 'text-base' : 'text-xl', id: e, children: e })
          ]
        })
      })
    })
  )
}
const kO = w.memo(bO),
  PO = '/assets/Pokeball-DrG7_te8.svg',
  RO =
    "data:image/svg+xml,%3csvg%20fill='none'%20height='512'%20viewBox='0%200%20512%20512'%20width='512'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20clip-rule='evenodd'%20d='m342.198.501279c.373-.5317158%201.105-.660937%201.637-.288625l36.354%2025.455546c.532.3723.661%201.1051.289%201.6368l-50.599%2072.2623c24.599%207.8587%2041.358%2016.3357%2041.358%2016.3357s-40.964%2070.462-110.443%2070.462-118.85-65.672-118.85-65.672%2017.506-11.172%2043.456-20.7539l-55.5-66.1415c-.417-.4973-.352-1.2386.145-1.6558l33.997-28.52715c.498-.41723%201.239-.35238%201.656.14487l70.272%2083.74688c6.017-.6806%2012.147-1.061%2018.333-1.061%208.891%200%2017.771.6759%2026.44%201.8229zm13.746%20189.200721c18.541-13.242%2046.597-47.804%2046.597-47.804s71.664%2056.79%2071.664%20177.206c0%20120.415-123.896%20192.888-123.896%20192.888s-59.195-59.781-73.727-135.562c-14.531-75.781%2021.496-159.927%2021.496-159.927s39.324-13.559%2057.866-26.801zm-199.683%200c-18.541-13.242-46.597-47.804-46.597-47.804s-71.664%2056.79-71.664%20177.206c0%20120.415%20123.896%20192.888%20123.896%20192.888s59.195-59.781%2073.727-135.562c14.531-75.781-21.496-159.927-21.496-159.927s-39.324-13.559-57.866-26.801z'%20fill='%23fff'%20fill-rule='evenodd'/%3e%3c/svg%3e",
  AO =
    "data:image/svg+xml,%3csvg%20width='512'%20height='512'%20viewBox='0%200%20512%20512'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M229.379%20452.85C239.106%20454.339%20249.068%20455.111%20259.212%20455.111C367.214%20455.111%20454.767%20367.558%20454.767%20259.556C454.767%20151.553%20367.214%2064%20259.212%2064C251.966%2064%20244.811%2064.3941%20237.77%2065.1621C291.345%20105.751%20326.767%20176.062%20326.767%20256C326.767%20340.04%20287.616%20413.44%20229.379%20452.85ZM255.656%20512C397.041%20512%20511.656%20397.385%20511.656%20256C511.656%20114.615%20397.041%200%20255.656%200C114.271%200%20-0.34375%20114.615%20-0.34375%20256C-0.34375%20397.385%20114.271%20512%20255.656%20512Z'%20fill='white'/%3e%3c/svg%3e",
  OO =
    "data:image/svg+xml,%3csvg%20width='512'%20height='512'%20viewBox='0%200%20512%20512'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M280.702%20254.881C284.172%20252.765%20287.116%20248.331%20289.49%20243.403C320.735%20256.173%20342.692%20286.349%20342.692%20321.54C342.692%20368.29%20303.942%20406.189%20256.142%20406.189C236.52%20406.189%20218.423%20399.802%20203.906%20389.039C199.144%20386.784%20195.226%20384.618%20192.02%20382.845C187.047%20380.096%20183.786%20378.293%20181.744%20378.575C175.775%20379.398%20177.508%20384.89%20179.083%20389.879C180.152%20393.268%20181.149%20396.425%20179.606%20397.727C177.992%20399.091%20172.764%20394.106%20166.655%20388.282C158.339%20380.353%20148.391%20370.868%20143.7%20373.717C139.991%20375.97%20143.592%20382.081%20148%20389.561L148.327%20390.116C150.189%20393.278%20152.347%20396.498%20154.316%20399.436C158.319%20405.407%20161.543%20410.219%20159.93%20411.033C157.98%20412.017%20144.394%20402.847%20132.945%20390.116C128.526%20385.203%20124.246%20379.877%20120.268%20374.928L120.268%20374.927C111.561%20364.093%20104.307%20355.068%20100.235%20356.137C95.3365%20357.423%2099.0421%20367.527%20104.487%20377.25C107.033%20381.797%20110.028%20386.427%20112.621%20390.436L112.621%20390.437C116.654%20396.671%20119.715%20401.402%20118.605%20401.984C117.107%20402.767%20103.926%20389.914%2094.9734%20373.717C89.6559%20364.096%2085.1909%20353.464%2081.5761%20344.857C77.656%20335.522%2074.7359%20328.569%2072.8131%20327.869C66.1325%20325.438%2066.1325%20339.059%2068.8119%20358.718C69.1614%20361.283%2069.6819%20363.973%2070.3228%20366.712C96.307%20450.785%20176.128%20512%20270.567%20512C386.084%20512%20479.728%20420.412%20479.728%20307.432C479.728%20199.9%20394.899%20111.747%20287.12%20103.494C287.256%2098.4284%20289.9%2088.383%20289.9%2088.383C289.9%2088.383%20308.927%2042.3472%20309.933%2032.5099C309.999%2031.857%20310.078%2031.1475%20310.163%2030.3919C311.348%2019.7629%20313.553%200%20296.551%200C287.471%200%20283.249%206.75464%20278.42%2014.4799L278.42%2014.48C276.566%2017.4457%20274.622%2020.5545%20272.28%2023.479C255.412%2044.5436%20227.048%2070.8488%20210.965%2084.8631C176.971%20114.484%20143.619%20138.828%20124.167%20153.026L124.167%20153.026L124.166%20153.027C115.319%20159.484%20109.348%20163.843%20107.5%20165.644C93.574%20179.22%2043.6418%20269.286%2043.6418%20269.286C43.6418%20269.286%2027.4943%20298.182%2033.2338%20304.043C38.9733%20309.903%2052.8141%20308.56%2052.8141%20308.56C52.8141%20308.56%20238.755%20265.903%20255.402%20262.539C259.884%20261.633%20263.048%20261.11%20265.477%20260.709C272.072%20259.62%20273.256%20259.424%20280.702%20254.881ZM149.235%20200.064C139.254%20209.551%20122.701%20232.196%20122.701%20232.196C122.701%20232.196%20153.465%20234.091%20170.408%20217.986C187.352%20201.88%20183.47%20174.433%20183.47%20174.433C183.47%20174.433%20159.215%20190.577%20149.235%20200.064Z'%20fill='white'/%3e%3c/svg%3e",
  LO =
    "data:image/svg+xml,%3csvg%20width='512'%20height='512'%20viewBox='0%200%20512%20512'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M152.56%200.583659C152.461%200.29796%20152.674%200%20152.976%200H332.805C332.998%200%20333.169%200.125587%20333.226%200.309782L415.824%20267.171C415.911%20267.454%20415.7%20267.741%20415.403%20267.741H295.684C295.538%20267.741%20295.433%20267.88%20295.473%20268.021L364.135%20509.726C364.269%20510.195%20363.654%20510.501%20363.361%20510.111L96.5295%20155.267C96.3115%20154.977%2096.5184%20154.563%2096.881%20154.563H205.536C205.687%20154.563%20205.793%20154.414%20205.743%20154.271L152.56%200.583659Z'%20fill='white'/%3e%3c/svg%3e",
  MO =
    "data:image/svg+xml,%3csvg%20width='512'%20height='512'%20viewBox='0%200%20512%20512'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M102.726%20405.978L184.848%20382.166L255.778%20511.857C255.871%20512.025%20256.112%20512.025%20256.204%20511.857L327.134%20382.166L409.257%20405.978C409.441%20406.031%20409.612%20405.86%20409.557%20405.676L385.741%20325.179L511.856%20256.204C512.025%20256.112%20512.025%20255.871%20511.857%20255.779L384.702%20186.235L409.557%20102.225C409.612%20102.041%20409.441%20101.87%20409.257%20101.923L325.208%20126.294L256.204%200.126188C256.112%20-0.0420597%20255.871%20-0.0420644%20255.779%200.126184L186.775%20126.294L102.726%20101.923C102.542%20101.87%20102.371%20102.041%20102.426%20102.225L127.281%20186.235L0.126188%20255.779C-0.0420597%20255.871%20-0.0420644%20256.112%200.126184%20256.204L126.241%20325.179L102.426%20405.676C102.371%20405.86%20102.542%20406.031%20102.726%20405.978ZM166.452%20256.876L224.631%20288.695L256.45%20346.873C256.542%20347.042%20256.784%20347.042%20256.876%20346.873L288.695%20288.695L346.873%20256.876C347.041%20256.784%20347.041%20256.542%20346.873%20256.45L288.695%20224.631L256.876%20166.453C256.784%20166.284%20256.542%20166.284%20256.45%20166.453L224.631%20224.631L166.452%20256.45C166.284%20256.542%20166.284%20256.784%20166.452%20256.876Z'%20fill='white'/%3e%3c/svg%3e",
  NO =
    "data:image/svg+xml,%3csvg%20width='512'%20height='512'%20viewBox='0%200%20512%20512'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M88.2336%2042.5656C94.4299%2018.1014%20116.593%200%20142.983%200C162.778%200%20180.195%2010.1847%20190.279%2025.6H206.792C217.051%2015.0716%20231.384%208.53333%20247.245%208.53333C270.499%208.53333%20290.471%2022.5882%20299.129%2042.6667H312.954C321.617%2037.2585%20331.853%2034.1333%20342.818%2034.1333C366.073%2034.1333%20386.044%2048.1882%20394.702%2068.2667H432.297C432.618%2068.2667%20432.919%2068.3532%20433.178%2068.5041C434.895%2068.347%20436.634%2068.2667%20438.391%2068.2667C469.582%2068.2667%20494.866%2093.5514%20494.866%20124.742V294.086L494.867%20294.4L494.866%20294.714V297.153C494.866%20298.186%20494.838%20299.215%20494.782%20300.239C491.384%20417.717%20385.749%20512%20255.933%20512C123.974%20512%2017%20414.577%2017%20294.4C17%20236.391%2041.9249%20183.683%2082.5535%20144.675C82.4522%20201.228%2083.4074%20259.694%2087.8107%20258.691C99.6011%20256.003%2090.3891%2080.8395%2088.2336%2042.5656Z'%20fill='white'/%3e%3c/svg%3e",
  IO =
    "data:image/svg+xml,%3csvg%20width='512'%20height='512'%20viewBox='0%200%20512%20512'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M352.258%20395.394C358.584%20372.263%20346.305%20324.71%20346.305%20324.71C346.305%20324.71%20337.399%20363.449%20323.483%20377.767C311.611%20389.98%20297.066%20398.451%20276.206%20400.677C293.261%20392.393%20304.99%20375.12%20304.99%20355.155C304.99%20327.129%20281.878%20304.409%20253.368%20304.409C224.858%20304.409%20201.745%20327.129%20201.745%20355.155C201.745%20362.809%20203.47%20370.068%20206.557%20376.576C188.725%20362.37%20185.921%20339.594%20185.921%20339.594C185.921%20339.594%20166.009%20422.264%20220.875%20461.152C275.74%20500.04%20383.219%20466.614%20383.219%20466.614C383.219%20466.614%20229.41%20574.837%20115.436%20457.05C17.2568%20355.584%2089.8111%20222.003%2089.8111%20222.003C89.8111%20222.003%2086.6777%20234.395%2086.6777%20248.78C86.6777%20263.165%2094.477%20274.11%2094.477%20274.11C94.477%20274.11%20117.742%20225.071%20135.848%20205.128C152.984%20186.254%20174.465%20170.946%20193.019%20157.724C207.301%20147.546%20219.849%20138.604%20227.343%20130.223C268.62%2084.0687%20243.311%200%20243.311%200C243.311%200%20289.841%2041.02%20302.831%2093.9978C307.783%20114.192%20304.597%20137.169%20301.749%20157.716C297.125%20191.072%20293.388%20218.025%20326.793%20216.276C380.775%20213.449%20333.866%20130.223%20333.866%20130.223C333.866%20130.223%20456.318%20194.583%20447.17%20307.145C438.021%20419.707%20313.324%20445.297%20313.324%20445.297C313.324%20445.297%20345.931%20418.525%20352.258%20395.394Z'%20fill='white'/%3e%3c/svg%3e",
  DO =
    "data:image/svg+xml,%3csvg%20width='512'%20height='512'%20viewBox='0%200%20512%20512'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M178.712%20477.733C253.715%20477.733%20317.927%20436.048%20344.436%20376.956C344.76%20376.235%20238.007%20404.699%20241.411%20394.637C242.931%20390.144%20308.371%20366.238%20356.048%20338.354C383.451%20322.327%20396.07%20288.4%20396.07%20288.4C396.07%20288.4%20349.903%20310.815%20326.564%20316.501C279.532%20327.961%20238.131%20326.727%20238.131%20325.533C238.131%20322.951%20306.876%20309.889%20402.424%20251.664C447.367%20224.277%20459.574%20177.103%20459.574%20177.103C459.574%20177.103%20410.163%20206.535%20380.293%20216.252C309.457%20239.295%20244.815%20246.239%20244.815%20243.121C244.815%20236.445%20301.702%20220.802%20362.016%20191.577C393.376%20176.382%20420.535%20156.53%20452.008%20134.453C503.506%2098.332%20511.999%2034%20511.999%2034C511.999%2034%20461.207%2066.7601%20436.42%2077.6394C334.141%20122.531%20243.829%20146.079%20178.712%20151.177C80.416%20158.873%200%20227.456%200%20316.501C0%20405.547%2080.0119%20477.733%20178.712%20477.733Z'%20fill='white'/%3e%3c/svg%3e",
  FO =
    "data:image/svg+xml,%3csvg%20width='512'%20height='512'%20viewBox='0%200%20512%20512'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M368.952%20510.227C322.769%20512.591%20269.896%20512.591%20251.928%20510.227C111.77%20491.788%200%20389.313%200%20250.8C0%20112.287%20114.615%200%20256%200C397.385%200%20512%20112.287%20512%20250.8C512%20315.221%20487.207%20373.969%20446.46%20418.387C435.395%20430.448%20450.577%20438.908%20466.002%20447.504C481.13%20455.935%20496.492%20464.496%20487.564%20476.712C477.726%20490.173%20424.392%20507.389%20368.952%20510.227ZM220%20219.45C220%20241.092%20202.091%20258.637%20180%20258.637C157.909%20258.637%20140%20241.092%20140%20219.45C140%20204.935%20148.055%20192.264%20160.024%20185.491C160.713%20204.362%20176.229%20219.449%20195.269%20219.449H220C220%20219.449%20220%20219.45%20220%20219.45ZM343.976%20185.491C343.287%20204.362%20327.771%20219.449%20308.731%20219.449H284C284%20219.449%20284%20219.45%20284%20219.45C284%20241.092%20301.909%20258.637%20324%20258.637C346.091%20258.637%20364%20241.092%20364%20219.45C364%20204.935%20355.945%20192.264%20343.976%20185.491Z'%20fill='white'/%3e%3c/svg%3e",
  jO =
    "data:image/svg+xml,%3csvg%20fill='none'%20height='512'%20viewBox='0%200%20512%20512'%20width='512'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20clip-rule='evenodd'%20d='m97.4121%20440.649c-1.7574-1.653-3.4954-3.338-5.2132-5.056-90.68455-90.684-90.68453-237.713%200-328.397%2090.6841-90.6849%20379.6401-96.7516%20379.6401-96.7516s39.442%20334.4646-51.242%20425.1486c-80.54%2080.54-205.522%2089.55-296.005%2027.031l72.908-89.471%20116.55-25.163-95.139-9.511%2060.462-61.562%2068.824-15.077-54.422-16.117%2054.422-98.176-77.41%2086.828-29.893-42.183%2010.523%2069.648-53.917%2060.782-24.993-76.9v102.268z'%20fill='%23fff'%20fill-rule='evenodd'/%3e%3c/svg%3e",
  $O =
    "data:image/svg+xml,%3csvg%20width='512'%20height='512'%20viewBox='0%200%20512%20512'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M112.764%20439.754C112.625%20439.754%20112.528%20439.617%20112.574%20439.486L243.289%2070.134C243.318%2070.0537%20243.394%2070%20243.479%2070H383.021C383.106%2070%20383.183%2070.0541%20383.211%2070.1349L511.987%20439.487C512.032%20439.618%20511.935%20439.754%20511.797%20439.754H116.692H112.764ZM0.201306%20441.199C0.0609122%20441.199%20-0.0362852%20441.059%200.0129607%20440.928L97.3526%20181.056C97.3821%20180.977%2097.4571%20180.925%2097.541%20180.925H182.118C182.258%20180.925%20182.355%20181.064%20182.307%20181.195L88.1823%20441.067C88.1535%20441.146%2088.0779%20441.199%2087.9932%20441.199H0.201306Z'%20fill='white'/%3e%3c/svg%3e",
  VO =
    "data:image/svg+xml,%3csvg%20width='512'%20height='512'%20viewBox='0%200%20512%20512'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M384.304%2039.0418L385.879%20177.392L265.209%20235.319L263.721%20104.69L384.304%2039.0418Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M505.269%20257.047L385.814%20325.374L266.288%20256.939L385.752%20194.187L505.269%20257.047Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M245.04%20257.047L125.585%20325.374L6.05861%20256.939L125.523%20194.187L245.04%20257.047Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M124.243%2038.4753L248.229%2099.881L245.059%20233.697L127.993%20175.719L124.243%2038.4753Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M387.678%20473.525L263.692%20412.119L266.862%20278.302L383.928%20336.281L387.678%20473.525Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M128.525%20474.77L126.949%20336.42L247.62%20278.493L249.108%20409.121L128.525%20474.77Z'%20fill='white'/%3e%3c/svg%3e",
  BO =
    "data:image/svg+xml,%3csvg%20width='512'%20height='512'%20viewBox='0%200%20512%20512'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M481%20256C481%20380.264%20380.264%20481%20256%20481C131.736%20481%2031%20380.264%2031%20256C31%20131.736%20131.736%2031%20256%2031C380.264%2031%20481%20131.736%20481%20256ZM384.571%20256C384.571%20327.008%20327.008%20384.571%20256%20384.571C184.992%20384.571%20127.429%20327.008%20127.429%20256C127.429%20184.992%20184.992%20127.429%20256%20127.429C327.008%20127.429%20384.571%20184.992%20384.571%20256Z'%20fill='white'/%3e%3c/svg%3e",
  zO =
    "data:image/svg+xml,%3csvg%20width='512'%20height='512'%20viewBox='0%200%20512%20512'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M427.821%20393.449C479.524%20352.108%20512%20292.376%20512%20225.95C512%20101.161%20397.385%200%20256%200C114.615%200%200%20101.161%200%20225.95C0%20289.978%2030.1737%20347.786%2078.6553%20388.901C75.7171%20399.046%2074.1052%20410.081%2074.1052%20421.62C74.1052%20471.535%20104.267%20512%20141.474%20512C165.65%20512%20186.852%20494.915%20198.737%20469.254C210.622%20494.915%20231.824%20512%20256%20512C278.038%20512%20297.604%20497.804%20309.895%20475.857C322.186%20497.804%20341.752%20512%20363.789%20512C400.996%20512%20431.158%20471.535%20431.158%20421.62C431.158%20411.784%20429.986%20402.314%20427.821%20393.449ZM404.211%20230.431C404.211%20293.785%20336.346%20345.144%20252.632%20345.144C168.917%20345.144%20101.053%20293.785%20101.053%20230.431C101.053%20167.077%20168.917%20115.718%20252.632%20115.718C336.346%20115.718%20404.211%20167.077%20404.211%20230.431Z'%20fill='white'/%3e%3c/svg%3e",
  UO =
    "data:image/svg+xml,%3csvg%20width='512'%20height='512'%20viewBox='0%200%20512%20512'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M455.925%20425.184C455.925%20425.184%20391.365%20476.963%20262.893%20455.536C165.423%20439.279%20113.437%20331.833%20113.437%20274.079C113.437%20137.149%20214.783%20105.988%20283.3%20105.988C351.816%20105.988%20396.513%20172.788%20396.513%20224.508C396.513%20276.228%20359.933%20321.466%20303.006%20321.466C246.08%20321.466%20229.22%20281.501%20229.22%20244.758C229.22%20208.016%20258.947%20195.071%20286.058%20195.071C313.169%20195.071%20322.452%20218.217%20322.452%20238.11C322.452%20258.004%20307.017%20265.128%20294.143%20265.128C281.269%20265.128%20279.996%20258.633%20275.069%20251.807C270.141%20244.982%20281.353%20219.146%20262.893%20219.146C244.433%20219.146%20240.992%20248.847%20240.992%20248.847C240.992%20248.847%20247.722%20306.18%20303.006%20305.191C358.291%20304.201%20384.518%20261.461%20376.896%20219.146C369.274%20176.83%20328.207%20131.865%20256.133%20140.951C184.059%20150.037%20154.632%20222.861%20167.603%20300.685C180.574%20378.51%20273.807%20423.602%20347.112%20407.379C420.418%20391.156%20493.429%20338.086%20493.429%20203.533C493.429%2068.9789%20376.896%20-11.9002%20237.941%201.42913C98.9859%2014.7584%2012.729%20136.242%2018.2502%20282.207C23.7714%20428.172%20162.275%20507.669%20279.394%20511.766C396.513%20515.864%20468.312%20448.067%20468.312%20448.067C468.312%20448.067%20484.459%20433.668%20478.128%20422.424C471.798%20411.18%20455.925%20425.184%20455.925%20425.184Z'%20fill='white'/%3e%3c/svg%3e",
  HO =
    "data:image/svg+xml,%3csvg%20width='512'%20height='512'%20viewBox='0%200%20512%20512'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M395.138%20244.757C395.109%20244.717%20395.097%20244.667%20395.105%20244.618L427.769%2054.1518C427.784%2054.0641%20427.861%2054%20427.949%2054H438.287C438.367%2054%20438.437%2054.0517%20438.461%2054.1277L512.051%20287.131C512.074%20287.203%20512.049%20287.283%20511.989%20287.33L457.73%20329.693C457.649%20329.756%20457.532%20329.74%20457.471%20329.657L395.138%20244.757ZM-1%20371.022C-1%20371.101%20-0.949204%20371.171%20-0.874109%20371.196L110.975%20407.767C111.029%20407.785%20111.089%20407.776%20111.136%20407.744L361.145%20235.144C361.187%20235.115%20361.215%20235.07%20361.222%20235.02L388.032%2055.1284C388.049%2055.018%20387.963%2054.9188%20387.852%2054.9188H166.406C166.351%2054.9188%20166.3%2054.943%20166.265%2054.9849L-0.957974%20256.714C-0.98514%20256.747%20-1%20256.788%20-1%20256.831V371.022ZM157.583%20417.085L279.776%20457.112C279.831%20457.13%20279.892%20457.121%20279.939%20457.087L425.418%20352.734C425.499%20352.677%20425.519%20352.566%20425.464%20352.484L370.928%20271.329C370.871%20271.244%20370.757%20271.222%20370.673%20271.28L157.583%20417.085Z'%20fill='white'/%3e%3c/svg%3e",
  WO =
    "data:image/svg+xml,%3csvg%20width='512'%20height='512'%20viewBox='0%200%20512%20512'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0.0511107%20254.527C-0.0170046%20254.411%20-0.0170388%20254.267%200.0510196%20254.15L128.795%2034.1843C128.862%2034.0702%20128.985%2034%20129.117%2034H384.294C384.427%2034%20384.55%2034.0708%20384.617%2034.1859L511.949%20254.152C512.016%20254.267%20512.016%20254.41%20511.949%20254.525L384.617%20474.244C384.55%20474.359%20384.427%20474.43%20384.294%20474.43H129.117C128.985%20474.43%20128.862%20474.36%20128.795%20474.246L0.0511107%20254.527ZM374.617%20254.215C374.617%20319.703%20321.528%20372.792%20256.04%20372.792C190.552%20372.792%20137.463%20319.703%20137.463%20254.215C137.463%20188.726%20190.552%20135.638%20256.04%20135.638C321.528%20135.638%20374.617%20188.726%20374.617%20254.215Z'%20fill='white'/%3e%3c/svg%3e",
  GO =
    "data:image/svg+xml,%3csvg%20width='512'%20height='512'%20viewBox='0%200%20512%20512'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M422.172%20346.515C422.172%20437.897%20347.813%20511.977%20256.086%20511.977C164.359%20511.977%2090%20437.897%2090%20346.515C90%20257.639%20247.102%2013.5479%20255.718%200.22781C255.915%20-0.0759384%20256.258%20-0.0759358%20256.454%200.227813C265.07%2013.5479%20422.172%20257.639%20422.172%20346.515ZM228.4%20458.931C144.12%20440.49%20158.542%20347.13%20158.542%20347.13C158.542%20347.13%20181.556%20403.488%20237.405%20421.744C293.253%20439.999%20360.745%20413.225%20360.745%20413.225C360.745%20413.225%20312.68%20477.371%20228.4%20458.931Z'%20fill='white'/%3e%3c/svg%3e",
  Ma = 20,
  jl = 0,
  DS = 5 * 60 * 1e3,
  xp = {
    bug: RO,
    dark: AO,
    dragon: OO,
    electric: LO,
    fairy: MO,
    fighting: NO,
    fire: IO,
    flying: DO,
    ghost: FO,
    grass: jO,
    ground: $O,
    ice: VO,
    normal: BO,
    poison: zO,
    psychic: UO,
    rock: HO,
    steel: WO,
    water: GO
  },
  FS = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD'
  },
  i2 = {
    hp: { max: 255, color: '#ff0000' },
    attack: { max: 190, color: '#ff0097' },
    defense: { max: 250, color: '#11e800' },
    'special-attack': { max: 194, color: '#ff4d00' },
    'special-defense': { max: 250, color: '#383bff' },
    speed: { max: 200, color: '#00a9ff' }
  }
function jS(e) {
  var n, r, i, s, o, a, l, u, c
  const t = Array.isArray(e == null ? void 0 : e.sprites)
    ? (n = e.sprites[0]) == null
      ? void 0
      : n.sprites
    : e == null
      ? void 0
      : e.sprites
  return (
    ((i = (r = t == null ? void 0 : t.other) == null ? void 0 : r['official-artwork']) == null
      ? void 0
      : i.front_shiny) ||
    ((o = (s = t == null ? void 0 : t.other) == null ? void 0 : s['official-artwork']) == null
      ? void 0
      : o.front_default) ||
    ((l = (a = t == null ? void 0 : t.other) == null ? void 0 : a.dream_world) == null
      ? void 0
      : l.front_default) ||
    ((c = (u = t == null ? void 0 : t.other) == null ? void 0 : u.home) == null
      ? void 0
      : c.front_shiny) ||
    (t == null ? void 0 : t.front_shiny) ||
    PO
  )
}
function I8(e) {
  var o, a, l
  const t = e == null ? void 0 : e.id,
    n = jS(e),
    r =
      (o = e == null ? void 0 : e.types) == null
        ? void 0
        : o.map(u => {
            var c, d, f
            return {
              name: (c = u == null ? void 0 : u.type) == null ? void 0 : c.name,
              icon: ((d = u == null ? void 0 : u.type) == null ? void 0 : d.name) && xp[u.type.name],
              color: ((f = u == null ? void 0 : u.type) == null ? void 0 : f.name) && FS[u.type.name]
            }
          }),
    i =
      (a = e == null ? void 0 : e.abilities) == null
        ? void 0
        : a.map(u => {
            var c
            return (c = u == null ? void 0 : u.ability) == null ? void 0 : c.name
          }),
    s =
      (l = e == null ? void 0 : e.stats) == null
        ? void 0
        : l.reduce((u, c) => {
            var d
            if ((d = c == null ? void 0 : c.stat) != null && d.name) {
              const f = c.stat.name
              u.push({ name: f, value: c.base_stat || 0, max: i2[f].max, color: i2[f].color })
            }
            return u
          }, [])
  return { id: t, image: n, types: r, abilities: i, baseStats: s }
}
function qO(e) {
  return e.map(t => ({ type: { name: t.pokemon_v2_type.name } }))
}
function KO(e, t) {
  var n, r
  for (const i of e) {
    const s =
      (r = (n = i == null ? void 0 : i[1]) == null ? void 0 : n.pokemons) == null
        ? void 0
        : r.find(o => o.name === t)
    if (s) return s
  }
  return null
}
function D8(e, t) {
  var a
  const n = KO(t, e)
  if (!n) return
  const { sprites: r, types: i } = n,
    s = ((a = r == null ? void 0 : r[0]) == null ? void 0 : a.sprites) || null,
    o = qO(i)
  return { sprites: s, types: o }
}
function ZO({ pokemons: e, isLoading: t, limit: n }) {
  return P.jsx('section', {
    'aria-label': 'List of Pokémon',
    className: 'mt-24 p-2',
    children: P.jsxs('ul', {
      className: 'flex justify-center gap-x-10 gap-y-28 flex-wrap',
      children: [
        t && !(e != null && e.length) && P.jsx(gO, { totalCard: n }),
        P.jsx(pO, {
          children:
            !!(e != null && e.length) &&
            (e == null
              ? void 0
              : e.map(r =>
                  P.jsx(
                    Zs.li,
                    {
                      layout: !0,
                      className: 'list-none',
                      children: P.jsx(kO, { name: r.name, image: jS(r) })
                    },
                    r.name
                  )
                ))
        })
      ]
    })
  })
}
const $S = typeof document < 'u' ? we.useLayoutEffect : () => {}
function YO(e) {
  const t = w.useRef(null)
  return (
    $S(() => {
      t.current = e
    }, [e]),
    w.useCallback((...n) => {
      const r = t.current
      return r == null ? void 0 : r(...n)
    }, [])
  )
}
const $l = e => {
    var t
    return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document
  },
  Oi = e => (e && 'window' in e && e.window === e ? e : $l(e).defaultView || window)
function QO(e) {
  var t
  return typeof window > 'u' || window.navigator == null
    ? !1
    : ((t = window.navigator.userAgentData) === null || t === void 0
        ? void 0
        : t.brands.some(n => e.test(n.brand))) || e.test(window.navigator.userAgent)
}
function XO(e) {
  var t
  return typeof window < 'u' && window.navigator != null
    ? e.test(
        ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) ||
          window.navigator.platform
      )
    : !1
}
function VS(e) {
  let t = null
  return () => (t == null && (t = e()), t)
}
const JO = VS(function () {
    return XO(/^Mac/i)
  }),
  eL = VS(function () {
    return QO(/Android/i)
  })
function tL(e) {
  return e.mozInputSource === 0 && e.isTrusted
    ? !0
    : eL() && e.pointerType
      ? e.type === 'click' && e.buttons === 1
      : e.detail === 0 && !e.pointerType
}
class nL {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented
  }
  preventDefault() {
    ;(this.defaultPrevented = !0), this.nativeEvent.preventDefault()
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation(), (this.isPropagationStopped = () => !0)
  }
  isPropagationStopped() {
    return !1
  }
  persist() {}
  constructor(t, n) {
    ;(this.nativeEvent = n),
      (this.target = n.target),
      (this.currentTarget = n.currentTarget),
      (this.relatedTarget = n.relatedTarget),
      (this.bubbles = n.bubbles),
      (this.cancelable = n.cancelable),
      (this.defaultPrevented = n.defaultPrevented),
      (this.eventPhase = n.eventPhase),
      (this.isTrusted = n.isTrusted),
      (this.timeStamp = n.timeStamp),
      (this.type = t)
  }
}
function BS(e) {
  let t = w.useRef({ isFocused: !1, observer: null })
  $S(() => {
    const r = t.current
    return () => {
      r.observer && (r.observer.disconnect(), (r.observer = null))
    }
  }, [])
  let n = YO(r => {
    e == null || e(r)
  })
  return w.useCallback(
    r => {
      if (
        r.target instanceof HTMLButtonElement ||
        r.target instanceof HTMLInputElement ||
        r.target instanceof HTMLTextAreaElement ||
        r.target instanceof HTMLSelectElement
      ) {
        t.current.isFocused = !0
        let i = r.target,
          s = o => {
            ;(t.current.isFocused = !1),
              i.disabled && n(new nL('blur', o)),
              t.current.observer && (t.current.observer.disconnect(), (t.current.observer = null))
          }
        i.addEventListener('focusout', s, { once: !0 }),
          (t.current.observer = new MutationObserver(() => {
            if (t.current.isFocused && i.disabled) {
              var o
              ;(o = t.current.observer) === null || o === void 0 || o.disconnect()
              let a = i === document.activeElement ? null : document.activeElement
              i.dispatchEvent(new FocusEvent('blur', { relatedTarget: a })),
                i.dispatchEvent(new FocusEvent('focusout', { bubbles: !0, relatedTarget: a }))
            }
          })),
          t.current.observer.observe(i, { attributes: !0, attributeFilter: ['disabled'] })
      }
    },
    [n]
  )
}
function rL(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: i } = e
  const s = w.useCallback(
      l => {
        if (l.target === l.currentTarget) return r && r(l), i && i(!1), !0
      },
      [r, i]
    ),
    o = BS(s),
    a = w.useCallback(
      l => {
        const u = $l(l.target)
        l.target === l.currentTarget && u.activeElement === l.target && (n && n(l), i && i(!0), o(l))
      },
      [i, n, o]
    )
  return {
    focusProps: { onFocus: !t && (n || i || r) ? a : void 0, onBlur: !t && (r || i) ? s : void 0 }
  }
}
let Vl = null,
  Ep = new Set(),
  Na = new Map(),
  Xi = !1,
  Sp = !1
const iL = { Tab: !0, Escape: !0 }
function v0(e, t) {
  for (let n of Ep) n(e, t)
}
function sL(e) {
  return !(
    e.metaKey ||
    (!JO() && e.altKey) ||
    e.ctrlKey ||
    e.key === 'Control' ||
    e.key === 'Shift' ||
    e.key === 'Meta'
  )
}
function Nc(e) {
  ;(Xi = !0), sL(e) && ((Vl = 'keyboard'), v0('keyboard', e))
}
function cn(e) {
  ;(Vl = 'pointer'),
    (e.type === 'mousedown' || e.type === 'pointerdown') && ((Xi = !0), v0('pointer', e))
}
function zS(e) {
  tL(e) && ((Xi = !0), (Vl = 'virtual'))
}
function US(e) {
  e.target === window ||
    e.target === document ||
    (!Xi && !Sp && ((Vl = 'virtual'), v0('virtual', e)), (Xi = !1), (Sp = !1))
}
function HS() {
  ;(Xi = !1), (Sp = !0)
}
function Tp(e) {
  if (typeof window > 'u' || Na.get(Oi(e))) return
  const t = Oi(e),
    n = $l(e)
  let r = t.HTMLElement.prototype.focus
  ;(t.HTMLElement.prototype.focus = function () {
    ;(Xi = !0), r.apply(this, arguments)
  }),
    n.addEventListener('keydown', Nc, !0),
    n.addEventListener('keyup', Nc, !0),
    n.addEventListener('click', zS, !0),
    t.addEventListener('focus', US, !0),
    t.addEventListener('blur', HS, !1),
    typeof PointerEvent < 'u'
      ? (n.addEventListener('pointerdown', cn, !0),
        n.addEventListener('pointermove', cn, !0),
        n.addEventListener('pointerup', cn, !0))
      : (n.addEventListener('mousedown', cn, !0),
        n.addEventListener('mousemove', cn, !0),
        n.addEventListener('mouseup', cn, !0)),
    t.addEventListener(
      'beforeunload',
      () => {
        WS(e)
      },
      { once: !0 }
    ),
    Na.set(t, { focus: r })
}
const WS = (e, t) => {
  const n = Oi(e),
    r = $l(e)
  t && r.removeEventListener('DOMContentLoaded', t),
    Na.has(n) &&
      ((n.HTMLElement.prototype.focus = Na.get(n).focus),
      r.removeEventListener('keydown', Nc, !0),
      r.removeEventListener('keyup', Nc, !0),
      r.removeEventListener('click', zS, !0),
      n.removeEventListener('focus', US, !0),
      n.removeEventListener('blur', HS, !1),
      typeof PointerEvent < 'u'
        ? (r.removeEventListener('pointerdown', cn, !0),
          r.removeEventListener('pointermove', cn, !0),
          r.removeEventListener('pointerup', cn, !0))
        : (r.removeEventListener('mousedown', cn, !0),
          r.removeEventListener('mousemove', cn, !0),
          r.removeEventListener('mouseup', cn, !0)),
      Na.delete(n))
}
function oL(e) {
  const t = $l(e)
  let n
  return (
    t.readyState !== 'loading'
      ? Tp(e)
      : ((n = () => {
          Tp(e)
        }),
        t.addEventListener('DOMContentLoaded', n)),
    () => WS(e, n)
  )
}
typeof document < 'u' && oL()
function GS() {
  return Vl !== 'pointer'
}
const aL = new Set(['checkbox', 'radio', 'range', 'color', 'file', 'image', 'button', 'submit', 'reset'])
function lL(e, t, n) {
  var r
  const i = typeof window < 'u' ? Oi(n == null ? void 0 : n.target).HTMLInputElement : HTMLInputElement,
    s =
      typeof window < 'u' ? Oi(n == null ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement,
    o = typeof window < 'u' ? Oi(n == null ? void 0 : n.target).HTMLElement : HTMLElement,
    a = typeof window < 'u' ? Oi(n == null ? void 0 : n.target).KeyboardEvent : KeyboardEvent
  return (
    (e =
      e ||
      ((n == null ? void 0 : n.target) instanceof i &&
        !aL.has(n == null || (r = n.target) === null || r === void 0 ? void 0 : r.type)) ||
      (n == null ? void 0 : n.target) instanceof s ||
      ((n == null ? void 0 : n.target) instanceof o &&
        (n == null ? void 0 : n.target.isContentEditable))),
    !(e && t === 'keyboard' && n instanceof a && !iL[n.key])
  )
}
function uL(e, t, n) {
  Tp(),
    w.useEffect(() => {
      let r = (i, s) => {
        lL(!!(n != null && n.isTextInput), i, s) && e(GS())
      }
      return (
        Ep.add(r),
        () => {
          Ep.delete(r)
        }
      )
    }, t)
}
function cL(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: i } = e,
    s = w.useRef({ isFocusWithin: !1 }),
    o = w.useCallback(
      u => {
        s.current.isFocusWithin &&
          !u.currentTarget.contains(u.relatedTarget) &&
          ((s.current.isFocusWithin = !1), n && n(u), i && i(!1))
      },
      [n, i, s]
    ),
    a = BS(o),
    l = w.useCallback(
      u => {
        !s.current.isFocusWithin &&
          document.activeElement === u.target &&
          (r && r(u), i && i(!0), (s.current.isFocusWithin = !0), a(u))
      },
      [r, i, a]
    )
  return t
    ? { focusWithinProps: { onFocus: void 0, onBlur: void 0 } }
    : { focusWithinProps: { onFocus: l, onBlur: o } }
}
let Ic = !1,
  Mf = 0
function Cp() {
  ;(Ic = !0),
    setTimeout(() => {
      Ic = !1
    }, 50)
}
function s2(e) {
  e.pointerType === 'touch' && Cp()
}
function dL() {
  if (!(typeof document > 'u'))
    return (
      typeof PointerEvent < 'u'
        ? document.addEventListener('pointerup', s2)
        : document.addEventListener('touchend', Cp),
      Mf++,
      () => {
        Mf--,
          !(Mf > 0) &&
            (typeof PointerEvent < 'u'
              ? document.removeEventListener('pointerup', s2)
              : document.removeEventListener('touchend', Cp))
      }
    )
}
function qS(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: i } = e,
    [s, o] = w.useState(!1),
    a = w.useRef({ isHovered: !1, ignoreEmulatedMouseEvents: !1, pointerType: '', target: null }).current
  w.useEffect(dL, [])
  let { hoverProps: l, triggerHoverEnd: u } = w.useMemo(() => {
    let c = (h, v) => {
        if (
          ((a.pointerType = v), i || v === 'touch' || a.isHovered || !h.currentTarget.contains(h.target))
        )
          return
        a.isHovered = !0
        let y = h.currentTarget
        ;(a.target = y), t && t({ type: 'hoverstart', target: y, pointerType: v }), n && n(!0), o(!0)
      },
      d = (h, v) => {
        if (((a.pointerType = ''), (a.target = null), v === 'touch' || !a.isHovered)) return
        a.isHovered = !1
        let y = h.currentTarget
        r && r({ type: 'hoverend', target: y, pointerType: v }), n && n(!1), o(!1)
      },
      f = {}
    return (
      typeof PointerEvent < 'u'
        ? ((f.onPointerEnter = h => {
            ;(Ic && h.pointerType === 'mouse') || c(h, h.pointerType)
          }),
          (f.onPointerLeave = h => {
            !i && h.currentTarget.contains(h.target) && d(h, h.pointerType)
          }))
        : ((f.onTouchStart = () => {
            a.ignoreEmulatedMouseEvents = !0
          }),
          (f.onMouseEnter = h => {
            !a.ignoreEmulatedMouseEvents && !Ic && c(h, 'mouse'), (a.ignoreEmulatedMouseEvents = !1)
          }),
          (f.onMouseLeave = h => {
            !i && h.currentTarget.contains(h.target) && d(h, 'mouse')
          })),
      { hoverProps: f, triggerHoverEnd: d }
    )
  }, [t, n, r, i, a])
  return (
    w.useEffect(() => {
      i && u({ currentTarget: a.target }, a.pointerType)
    }, [i]),
    { hoverProps: l, isHovered: s }
  )
}
function KS(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e,
    i = w.useRef({ isFocused: !1, isFocusVisible: t || GS() }),
    [s, o] = w.useState(!1),
    [a, l] = w.useState(() => i.current.isFocused && i.current.isFocusVisible),
    u = w.useCallback(() => l(i.current.isFocused && i.current.isFocusVisible), []),
    c = w.useCallback(
      h => {
        ;(i.current.isFocused = h), o(h), u()
      },
      [u]
    )
  uL(
    h => {
      ;(i.current.isFocusVisible = h), u()
    },
    [],
    { isTextInput: n }
  )
  let { focusProps: d } = rL({ isDisabled: r, onFocusChange: c }),
    { focusWithinProps: f } = cL({ isDisabled: !r, onFocusWithinChange: c })
  return { isFocused: s, isFocusVisible: a, focusProps: r ? f : d }
}
var fL = Object.defineProperty,
  hL = (e, t, n) =>
    t in e ? fL(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  Nf = (e, t, n) => (hL(e, typeof t != 'symbol' ? t + '' : t, n), n)
let pL = class {
    constructor() {
      Nf(this, 'current', this.detect()), Nf(this, 'handoffState', 'pending'), Nf(this, 'currentId', 0)
    }
    set(t) {
      this.current !== t && ((this.handoffState = 'pending'), (this.currentId = 0), (this.current = t))
    }
    reset() {
      this.set(this.detect())
    }
    nextId() {
      return ++this.currentId
    }
    get isServer() {
      return this.current === 'server'
    }
    get isClient() {
      return this.current === 'client'
    }
    detect() {
      return typeof window > 'u' || typeof document > 'u' ? 'server' : 'client'
    }
    handoff() {
      this.handoffState === 'pending' && (this.handoffState = 'complete')
    }
    get isHandoffComplete() {
      return this.handoffState === 'complete'
    }
  },
  Hi = new pL()
function Bl(e) {
  return Hi.isServer
    ? null
    : e instanceof Node
      ? e.ownerDocument
      : e != null && e.hasOwnProperty('current') && e.current instanceof Node
        ? e.current.ownerDocument
        : document
}
function ZS(e) {
  typeof queueMicrotask == 'function'
    ? queueMicrotask(e)
    : Promise.resolve()
        .then(e)
        .catch(t =>
          setTimeout(() => {
            throw t
          })
        )
}
function Zn() {
  let e = [],
    t = {
      addEventListener(n, r, i, s) {
        return n.addEventListener(r, i, s), t.add(() => n.removeEventListener(r, i, s))
      },
      requestAnimationFrame(...n) {
        let r = requestAnimationFrame(...n)
        return t.add(() => cancelAnimationFrame(r))
      },
      nextFrame(...n) {
        return t.requestAnimationFrame(() => t.requestAnimationFrame(...n))
      },
      setTimeout(...n) {
        let r = setTimeout(...n)
        return t.add(() => clearTimeout(r))
      },
      microTask(...n) {
        let r = { current: !0 }
        return (
          ZS(() => {
            r.current && n[0]()
          }),
          t.add(() => {
            r.current = !1
          })
        )
      },
      style(n, r, i) {
        let s = n.style.getPropertyValue(r)
        return (
          Object.assign(n.style, { [r]: i }),
          this.add(() => {
            Object.assign(n.style, { [r]: s })
          })
        )
      },
      group(n) {
        let r = Zn()
        return n(r), this.add(() => r.dispose())
      },
      add(n) {
        return (
          e.includes(n) || e.push(n),
          () => {
            let r = e.indexOf(n)
            if (r >= 0) for (let i of e.splice(r, 1)) i()
          }
        )
      },
      dispose() {
        for (let n of e.splice(0)) n()
      }
    }
  return t
}
function zl() {
  let [e] = w.useState(Zn)
  return w.useEffect(() => () => e.dispose(), [e]), e
}
let $e = (e, t) => {
  Hi.isServer ? w.useEffect(e, t) : w.useLayoutEffect(e, t)
}
function os(e) {
  let t = w.useRef(e)
  return (
    $e(() => {
      t.current = e
    }, [e]),
    t
  )
}
let ce = function (e) {
  let t = os(e)
  return we.useCallback((...n) => t.current(...n), [t])
}
function mL(e) {
  let t = e.width / 2,
    n = e.height / 2
  return { top: e.clientY - n, right: e.clientX + t, bottom: e.clientY + n, left: e.clientX - t }
}
function gL(e, t) {
  return !(!e || !t || e.right < t.left || e.left > t.right || e.bottom < t.top || e.top > t.bottom)
}
function vL({ disabled: e = !1 } = {}) {
  let t = w.useRef(null),
    [n, r] = w.useState(!1),
    i = zl(),
    s = ce(() => {
      ;(t.current = null), r(!1), i.dispose()
    }),
    o = ce(a => {
      if ((i.dispose(), t.current === null)) {
        ;(t.current = a.currentTarget), r(!0)
        {
          let l = Bl(a.currentTarget)
          i.addEventListener(l, 'pointerup', s, !1),
            i.addEventListener(
              l,
              'pointermove',
              u => {
                if (t.current) {
                  let c = mL(u)
                  r(gL(c, t.current.getBoundingClientRect()))
                }
              },
              !1
            ),
            i.addEventListener(l, 'pointercancel', s, !1)
        }
      }
    })
  return { pressed: n, pressProps: e ? {} : { onPointerDown: o, onPointerUp: s, onClick: s } }
}
let yL = w.createContext(void 0)
function y0() {
  return w.useContext(yL)
}
function o2(...e) {
  return Array.from(new Set(e.flatMap(t => (typeof t == 'string' ? t.split(' ') : []))))
    .filter(Boolean)
    .join(' ')
}
function mr(e, t, ...n) {
  if (e in t) {
    let i = t[e]
    return typeof i == 'function' ? i(...n) : i
  }
  let r = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t)
      .map(i => `"${i}"`)
      .join(', ')}.`
  )
  throw (Error.captureStackTrace && Error.captureStackTrace(r, mr), r)
}
var _p = (e => (
    (e[(e.None = 0)] = 'None'),
    (e[(e.RenderStrategy = 1)] = 'RenderStrategy'),
    (e[(e.Static = 2)] = 'Static'),
    e
  ))(_p || {}),
  wL = (e => ((e[(e.Unmount = 0)] = 'Unmount'), (e[(e.Hidden = 1)] = 'Hidden'), e))(wL || {})
function Mn({
  ourProps: e,
  theirProps: t,
  slot: n,
  defaultTag: r,
  features: i,
  visible: s = !0,
  name: o,
  mergeRefs: a
}) {
  a = a ?? xL
  let l = YS(t, e)
  if (s) return _u(l, n, r, o, a)
  let u = i ?? 0
  if (u & 2) {
    let { static: c = !1, ...d } = l
    if (c) return _u(d, n, r, o, a)
  }
  if (u & 1) {
    let { unmount: c = !0, ...d } = l
    return mr(c ? 0 : 1, {
      0() {
        return null
      },
      1() {
        return _u({ ...d, hidden: !0, style: { display: 'none' } }, n, r, o, a)
      }
    })
  }
  return _u(l, n, r, o, a)
}
function _u(e, t = {}, n, r, i) {
  let { as: s = n, children: o, refName: a = 'ref', ...l } = If(e, ['unmount', 'static']),
    u = e.ref !== void 0 ? { [a]: e.ref } : {},
    c = typeof o == 'function' ? o(t) : o
  'className' in l && l.className && typeof l.className == 'function' && (l.className = l.className(t)),
    l['aria-labelledby'] && l['aria-labelledby'] === l.id && (l['aria-labelledby'] = void 0)
  let d = {}
  if (t) {
    let f = !1,
      h = []
    for (let [v, y] of Object.entries(t))
      typeof y == 'boolean' && (f = !0),
        y === !0 && h.push(v.replace(/([A-Z])/g, x => `-${x.toLowerCase()}`))
    if (f) {
      d['data-headlessui-state'] = h.join(' ')
      for (let v of h) d[`data-${v}`] = ''
    }
  }
  if (s === w.Fragment && (Object.keys(Si(l)).length > 0 || Object.keys(Si(d)).length > 0))
    if (!w.isValidElement(c) || (Array.isArray(c) && c.length > 1)) {
      if (Object.keys(Si(l)).length > 0)
        throw new Error(
          [
            'Passing props on "Fragment"!',
            '',
            `The current component <${r} /> is rendering a "Fragment".`,
            'However we need to passthrough the following props:',
            Object.keys(Si(l))
              .concat(Object.keys(Si(d)))
              .map(f => `  - ${f}`).join(`
`),
            '',
            'You can apply a few solutions:',
            [
              'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
              'Render a single element as the child so that we can forward the props onto that element.'
            ].map(f => `  - ${f}`).join(`
`)
          ].join(`
`)
        )
    } else {
      let f = c.props,
        h = f == null ? void 0 : f.className,
        v = typeof h == 'function' ? (...p) => o2(h(...p), l.className) : o2(h, l.className),
        y = v ? { className: v } : {},
        x = YS(c.props, Si(If(l, ['ref'])))
      for (let p in d) p in x && delete d[p]
      return w.cloneElement(c, Object.assign({}, x, d, u, { ref: i(c.ref, u.ref) }, y))
    }
  return w.createElement(
    s,
    Object.assign({}, If(l, ['ref']), s !== w.Fragment && u, s !== w.Fragment && d),
    c
  )
}
function xL(...e) {
  return e.every(t => t == null)
    ? void 0
    : t => {
        for (let n of e) n != null && (typeof n == 'function' ? n(t) : (n.current = t))
      }
}
function YS(...e) {
  if (e.length === 0) return {}
  if (e.length === 1) return e[0]
  let t = {},
    n = {}
  for (let r of e)
    for (let i in r)
      i.startsWith('on') && typeof r[i] == 'function'
        ? (n[i] != null || (n[i] = []), n[i].push(r[i]))
        : (t[i] = r[i])
  if (t.disabled || t['aria-disabled'])
    for (let r in n)
      /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r) &&
        (n[r] = [
          i => {
            var s
            return (s = i == null ? void 0 : i.preventDefault) == null ? void 0 : s.call(i)
          }
        ])
  for (let r in n)
    Object.assign(t, {
      [r](i, ...s) {
        let o = n[r]
        for (let a of o) {
          if (
            (i instanceof Event || (i == null ? void 0 : i.nativeEvent) instanceof Event) &&
            i.defaultPrevented
          )
            return
          a(i, ...s)
        }
      }
    })
  return t
}
function w0(...e) {
  if (e.length === 0) return {}
  if (e.length === 1) return e[0]
  let t = {},
    n = {}
  for (let r of e)
    for (let i in r)
      i.startsWith('on') && typeof r[i] == 'function'
        ? (n[i] != null || (n[i] = []), n[i].push(r[i]))
        : (t[i] = r[i])
  for (let r in n)
    Object.assign(t, {
      [r](...i) {
        let s = n[r]
        for (let o of s) o == null || o(...i)
      }
    })
  return t
}
function Nn(e) {
  var t
  return Object.assign(w.forwardRef(e), { displayName: (t = e.displayName) != null ? t : e.name })
}
function Si(e) {
  let t = Object.assign({}, e)
  for (let n in t) t[n] === void 0 && delete t[n]
  return t
}
function If(e, t = []) {
  let n = Object.assign({}, e)
  for (let r of t) r in n && delete n[r]
  return n
}
function EL(e, t, n) {
  let [r, i] = w.useState(n),
    s = e !== void 0,
    o = w.useRef(s),
    a = w.useRef(!1),
    l = w.useRef(!1)
  return (
    s && !o.current && !a.current
      ? ((a.current = !0),
        (o.current = s),
        console.error(
          'A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.'
        ))
      : !s &&
        o.current &&
        !l.current &&
        ((l.current = !0),
        (o.current = s),
        console.error(
          'A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.'
        )),
    [s ? e : r, ce(u => (s || i(u), t == null ? void 0 : t(u)))]
  )
}
function SL(e) {
  let [t] = w.useState(e)
  return t
}
function QS(e = {}, t = null, n = []) {
  for (let [r, i] of Object.entries(e)) JS(n, XS(t, r), i)
  return n
}
function XS(e, t) {
  return e ? e + '[' + t + ']' : t
}
function JS(e, t, n) {
  if (Array.isArray(n)) for (let [r, i] of n.entries()) JS(e, XS(t, r.toString()), i)
  else
    n instanceof Date
      ? e.push([t, n.toISOString()])
      : typeof n == 'boolean'
        ? e.push([t, n ? '1' : '0'])
        : typeof n == 'string'
          ? e.push([t, n])
          : typeof n == 'number'
            ? e.push([t, `${n}`])
            : n == null
              ? e.push([t, ''])
              : QS(n, t, e)
}
let TL = 'span'
var x0 = (e => (
  (e[(e.None = 1)] = 'None'), (e[(e.Focusable = 2)] = 'Focusable'), (e[(e.Hidden = 4)] = 'Hidden'), e
))(x0 || {})
function CL(e, t) {
  var n
  let { features: r = 1, ...i } = e,
    s = {
      ref: t,
      'aria-hidden': (r & 2) === 2 ? !0 : (n = i['aria-hidden']) != null ? n : void 0,
      hidden: (r & 4) === 4 ? !0 : void 0,
      style: {
        position: 'fixed',
        top: 1,
        left: 1,
        width: 1,
        height: 0,
        padding: 0,
        margin: -1,
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        borderWidth: '0',
        ...((r & 4) === 4 && (r & 2) !== 2 && { display: 'none' })
      }
    }
  return Mn({ ourProps: s, theirProps: i, slot: {}, defaultTag: TL, name: 'Hidden' })
}
let eT = Nn(CL),
  _L = w.createContext(null)
function bL({ children: e }) {
  let t = w.useContext(_L)
  if (!t) return we.createElement(we.Fragment, null, e)
  let { target: n } = t
  return n ? ht.createPortal(we.createElement(we.Fragment, null, e), n) : null
}
function kL({ data: e, form: t, disabled: n, onReset: r, overrides: i }) {
  let [s, o] = w.useState(null),
    a = zl()
  return (
    w.useEffect(() => {
      if (r && s) return a.addEventListener(s, 'reset', r)
    }, [s, t, r]),
    we.createElement(
      bL,
      null,
      we.createElement(PL, { setForm: o, formId: t }),
      QS(e).map(([l, u]) =>
        we.createElement(eT, {
          features: x0.Hidden,
          ...Si({
            key: l,
            as: 'input',
            type: 'hidden',
            hidden: !0,
            readOnly: !0,
            form: t,
            disabled: n,
            name: l,
            value: u,
            ...i
          })
        })
      )
    )
  )
}
function PL({ setForm: e, formId: t }) {
  return (
    w.useEffect(() => {
      if (t) {
        let n = document.getElementById(t)
        n && e(n)
      }
    }, [e, t]),
    t
      ? null
      : we.createElement(eT, {
          features: x0.Hidden,
          as: 'input',
          type: 'hidden',
          hidden: !0,
          readOnly: !0,
          ref: n => {
            if (!n) return
            let r = n.closest('form')
            r && e(r)
          }
        })
  )
}
let RL = w.createContext(void 0)
function tT() {
  return w.useContext(RL)
}
function AL(e) {
  let t = e.parentElement,
    n = null
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (n = t), (t = t.parentElement)
  let r = (t == null ? void 0 : t.getAttribute('disabled')) === ''
  return r && OL(n) ? !1 : r
}
function OL(e) {
  if (!e) return !1
  let t = e.previousElementSibling
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1
    t = t.previousElementSibling
  }
  return !0
}
let nT = Symbol()
function LL(e, t = !0) {
  return Object.assign(e, { [nT]: t })
}
function Cr(...e) {
  let t = w.useRef(e)
  w.useEffect(() => {
    t.current = e
  }, [e])
  let n = ce(r => {
    for (let i of t.current) i != null && (typeof i == 'function' ? i(r) : (i.current = r))
  })
  return e.every(r => r == null || (r == null ? void 0 : r[nT])) ? void 0 : n
}
let E0 = w.createContext(null)
E0.displayName = 'DescriptionContext'
function rT() {
  let e = w.useContext(E0)
  if (e === null) {
    let t = new Error('You used a <Description /> component, but it is not inside a relevant parent.')
    throw (Error.captureStackTrace && Error.captureStackTrace(t, rT), t)
  }
  return e
}
function ML() {
  var e, t
  return (t = (e = w.useContext(E0)) == null ? void 0 : e.value) != null ? t : void 0
}
let NL = 'p'
function IL(e, t) {
  let n = w.useId(),
    r = y0(),
    { id: i = `headlessui-description-${n}`, ...s } = e,
    o = rT(),
    a = Cr(t)
  $e(() => o.register(i), [i, o.register])
  let l = r || !1,
    u = w.useMemo(() => ({ ...o.slot, disabled: l }), [o.slot, l]),
    c = { ref: a, ...o.props, id: i }
  return Mn({ ourProps: c, theirProps: s, slot: u, defaultTag: NL, name: o.name || 'Description' })
}
let DL = Nn(IL)
Object.assign(DL, {})
var Ct = (e => (
  (e.Space = ' '),
  (e.Enter = 'Enter'),
  (e.Escape = 'Escape'),
  (e.Backspace = 'Backspace'),
  (e.Delete = 'Delete'),
  (e.ArrowLeft = 'ArrowLeft'),
  (e.ArrowUp = 'ArrowUp'),
  (e.ArrowRight = 'ArrowRight'),
  (e.ArrowDown = 'ArrowDown'),
  (e.Home = 'Home'),
  (e.End = 'End'),
  (e.PageUp = 'PageUp'),
  (e.PageDown = 'PageDown'),
  (e.Tab = 'Tab'),
  e
))(Ct || {})
let Ed = w.createContext(null)
Ed.displayName = 'LabelContext'
function iT() {
  let e = w.useContext(Ed)
  if (e === null) {
    let t = new Error('You used a <Label /> component, but it is not inside a relevant parent.')
    throw (Error.captureStackTrace && Error.captureStackTrace(t, iT), t)
  }
  return e
}
function Sd(e) {
  var t, n, r
  let i = (n = (t = w.useContext(Ed)) == null ? void 0 : t.value) != null ? n : void 0
  return ((r = e == null ? void 0 : e.length) != null ? r : 0) > 0
    ? [i, ...e].filter(Boolean).join(' ')
    : i
}
function FL({ inherit: e = !1 } = {}) {
  let t = Sd(),
    [n, r] = w.useState([]),
    i = e ? [t, ...n].filter(Boolean) : n
  return [
    i.length > 0 ? i.join(' ') : void 0,
    w.useMemo(
      () =>
        function (s) {
          let o = ce(
              l => (
                r(u => [...u, l]),
                () =>
                  r(u => {
                    let c = u.slice(),
                      d = c.indexOf(l)
                    return d !== -1 && c.splice(d, 1), c
                  })
              )
            ),
            a = w.useMemo(
              () => ({ register: o, slot: s.slot, name: s.name, props: s.props, value: s.value }),
              [o, s.slot, s.name, s.props, s.value]
            )
          return we.createElement(Ed.Provider, { value: a }, s.children)
        },
      [r]
    )
  ]
}
let jL = 'label'
function $L(e, t) {
  var n
  let r = w.useId(),
    i = iT(),
    s = tT(),
    o = y0(),
    {
      id: a = `headlessui-label-${r}`,
      htmlFor: l = s ?? ((n = i.props) == null ? void 0 : n.htmlFor),
      passive: u = !1,
      ...c
    } = e,
    d = Cr(t)
  $e(() => i.register(a), [a, i.register])
  let f = ce(x => {
      let p = x.currentTarget
      if (
        (p instanceof HTMLLabelElement && x.preventDefault(),
        i.props && 'onClick' in i.props && typeof i.props.onClick == 'function' && i.props.onClick(x),
        p instanceof HTMLLabelElement)
      ) {
        let m = document.getElementById(p.htmlFor)
        if (m) {
          let g = m.getAttribute('disabled')
          if (g === 'true' || g === '') return
          let E = m.getAttribute('aria-disabled')
          if (E === 'true' || E === '') return
          ;((m instanceof HTMLInputElement && (m.type === 'radio' || m.type === 'checkbox')) ||
            m.role === 'radio' ||
            m.role === 'checkbox' ||
            m.role === 'switch') &&
            m.click(),
            m.focus({ preventScroll: !0 })
        }
      }
    }),
    h = o || !1,
    v = w.useMemo(() => ({ ...i.slot, disabled: h }), [i.slot, h]),
    y = { ref: d, ...i.props, id: a, htmlFor: l, onClick: f }
  return (
    u && ('onClick' in y && (delete y.htmlFor, delete y.onClick), 'onClick' in c && delete c.onClick),
    Mn({ ourProps: y, theirProps: c, slot: v, defaultTag: l ? jL : 'div', name: i.name || 'Label' })
  )
}
let VL = Nn($L),
  BL = Object.assign(VL, {})
function gs(e, t, n) {
  let r = n.initialDeps ?? [],
    i
  return () => {
    var s, o, a, l
    let u
    n.key && (s = n.debug) != null && s.call(n) && (u = Date.now())
    const c = e()
    if (!(c.length !== r.length || c.some((h, v) => r[v] !== h))) return i
    r = c
    let f
    if (
      (n.key && (o = n.debug) != null && o.call(n) && (f = Date.now()),
      (i = t(...c)),
      n.key && (a = n.debug) != null && a.call(n))
    ) {
      const h = Math.round((Date.now() - u) * 100) / 100,
        v = Math.round((Date.now() - f) * 100) / 100,
        y = v / 16,
        x = (p, m) => {
          for (p = String(p); p.length < m; ) p = ' ' + p
          return p
        }
      console.info(
        `%c⏱ ${x(v, 5)} /${x(h, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * y, 120))}deg 100% 31%);`,
        n == null ? void 0 : n.key
      )
    }
    return (l = n == null ? void 0 : n.onChange) == null || l.call(n, i), i
  }
}
function Df(e, t) {
  if (e === void 0) throw new Error('Unexpected undefined')
  return e
}
const zL = (e, t) => Math.abs(e - t) < 1,
  UL = (e, t, n) => {
    let r
    return function (...i) {
      e.clearTimeout(r), (r = e.setTimeout(() => t.apply(this, i), n))
    }
  },
  HL = e => e,
  WL = e => {
    const t = Math.max(e.startIndex - e.overscan, 0),
      n = Math.min(e.endIndex + e.overscan, e.count - 1),
      r = []
    for (let i = t; i <= n; i++) r.push(i)
    return r
  },
  GL = (e, t) => {
    const n = e.scrollElement
    if (!n) return
    const r = e.targetWindow
    if (!r) return
    const i = o => {
      const { width: a, height: l } = o
      t({ width: Math.round(a), height: Math.round(l) })
    }
    if ((i(n.getBoundingClientRect()), !r.ResizeObserver)) return () => {}
    const s = new r.ResizeObserver(o => {
      const a = o[0]
      if (a != null && a.borderBoxSize) {
        const l = a.borderBoxSize[0]
        if (l) {
          i({ width: l.inlineSize, height: l.blockSize })
          return
        }
      }
      i(n.getBoundingClientRect())
    })
    return (
      s.observe(n, { box: 'border-box' }),
      () => {
        s.unobserve(n)
      }
    )
  },
  a2 = { passive: !0 },
  qL = typeof window > 'u' ? !0 : 'onscrollend' in window,
  KL = (e, t) => {
    const n = e.scrollElement
    if (!n) return
    const r = e.targetWindow
    if (!r) return
    let i = 0
    const s = qL
        ? () => {}
        : UL(
            r,
            () => {
              t(i, !1)
            },
            e.options.isScrollingResetDelay
          ),
      o = u => () => {
        const { horizontal: c, isRtl: d } = e.options
        ;(i = c ? n.scrollLeft * ((d && -1) || 1) : n.scrollTop), s(), t(i, u)
      },
      a = o(!0),
      l = o(!1)
    return (
      l(),
      n.addEventListener('scroll', a, a2),
      n.addEventListener('scrollend', l, a2),
      () => {
        n.removeEventListener('scroll', a), n.removeEventListener('scrollend', l)
      }
    )
  },
  ZL = (e, t, n) => {
    if (t != null && t.borderBoxSize) {
      const r = t.borderBoxSize[0]
      if (r) return Math.round(r[n.options.horizontal ? 'inlineSize' : 'blockSize'])
    }
    return Math.round(e.getBoundingClientRect()[n.options.horizontal ? 'width' : 'height'])
  },
  YL = (e, { adjustments: t = 0, behavior: n }, r) => {
    var i, s
    const o = e + t
    ;(s = (i = r.scrollElement) == null ? void 0 : i.scrollTo) == null ||
      s.call(i, { [r.options.horizontal ? 'left' : 'top']: o, behavior: n })
  }
class QL {
  constructor(t) {
    ;(this.unsubs = []),
      (this.scrollElement = null),
      (this.targetWindow = null),
      (this.isScrolling = !1),
      (this.scrollToIndexTimeoutId = null),
      (this.measurementsCache = []),
      (this.itemSizeCache = new Map()),
      (this.pendingMeasuredCacheIndexes = []),
      (this.scrollRect = null),
      (this.scrollOffset = null),
      (this.scrollDirection = null),
      (this.scrollAdjustments = 0),
      (this.elementsCache = new Map()),
      (this.observer = (() => {
        let n = null
        const r = () =>
          n ||
          (!this.targetWindow || !this.targetWindow.ResizeObserver
            ? null
            : (n = new this.targetWindow.ResizeObserver(i => {
                i.forEach(s => {
                  this._measureElement(s.target, s)
                })
              })))
        return {
          disconnect: () => {
            var i
            ;(i = r()) == null || i.disconnect(), (n = null)
          },
          observe: i => {
            var s
            return (s = r()) == null ? void 0 : s.observe(i, { box: 'border-box' })
          },
          unobserve: i => {
            var s
            return (s = r()) == null ? void 0 : s.unobserve(i)
          }
        }
      })()),
      (this.range = null),
      (this.setOptions = n => {
        Object.entries(n).forEach(([r, i]) => {
          typeof i > 'u' && delete n[r]
        }),
          (this.options = {
            debug: !1,
            initialOffset: 0,
            overscan: 1,
            paddingStart: 0,
            paddingEnd: 0,
            scrollPaddingStart: 0,
            scrollPaddingEnd: 0,
            horizontal: !1,
            getItemKey: HL,
            rangeExtractor: WL,
            onChange: () => {},
            measureElement: ZL,
            initialRect: { width: 0, height: 0 },
            scrollMargin: 0,
            gap: 0,
            indexAttribute: 'data-index',
            initialMeasurementsCache: [],
            lanes: 1,
            isScrollingResetDelay: 150,
            enabled: !0,
            isRtl: !1,
            ...n
          })
      }),
      (this.notify = n => {
        var r, i
        ;(i = (r = this.options).onChange) == null || i.call(r, this, n)
      }),
      (this.maybeNotify = gs(
        () => (
          this.calculateRange(),
          [
            this.isScrolling,
            this.range ? this.range.startIndex : null,
            this.range ? this.range.endIndex : null
          ]
        ),
        n => {
          this.notify(n)
        },
        {
          key: !1,
          debug: () => this.options.debug,
          initialDeps: [
            this.isScrolling,
            this.range ? this.range.startIndex : null,
            this.range ? this.range.endIndex : null
          ]
        }
      )),
      (this.cleanup = () => {
        this.unsubs.filter(Boolean).forEach(n => n()),
          (this.unsubs = []),
          this.observer.disconnect(),
          (this.scrollElement = null),
          (this.targetWindow = null)
      }),
      (this._didMount = () => () => {
        this.cleanup()
      }),
      (this._willUpdate = () => {
        var n
        const r = this.options.enabled ? this.options.getScrollElement() : null
        if (this.scrollElement !== r) {
          if ((this.cleanup(), !r)) {
            this.maybeNotify()
            return
          }
          ;(this.scrollElement = r),
            this.scrollElement && 'ownerDocument' in this.scrollElement
              ? (this.targetWindow = this.scrollElement.ownerDocument.defaultView)
              : (this.targetWindow = ((n = this.scrollElement) == null ? void 0 : n.window) ?? null),
            this.elementsCache.forEach(i => {
              this.observer.observe(i)
            }),
            this._scrollToOffset(this.getScrollOffset(), { adjustments: void 0, behavior: void 0 }),
            this.unsubs.push(
              this.options.observeElementRect(this, i => {
                ;(this.scrollRect = i), this.maybeNotify()
              })
            ),
            this.unsubs.push(
              this.options.observeElementOffset(this, (i, s) => {
                ;(this.scrollAdjustments = 0),
                  (this.scrollDirection = s
                    ? this.getScrollOffset() < i
                      ? 'forward'
                      : 'backward'
                    : null),
                  (this.scrollOffset = i),
                  (this.isScrolling = s),
                  this.maybeNotify()
              })
            )
        }
      }),
      (this.getSize = () =>
        this.options.enabled
          ? ((this.scrollRect = this.scrollRect ?? this.options.initialRect),
            this.scrollRect[this.options.horizontal ? 'width' : 'height'])
          : ((this.scrollRect = null), 0)),
      (this.getScrollOffset = () =>
        this.options.enabled
          ? ((this.scrollOffset =
              this.scrollOffset ??
              (typeof this.options.initialOffset == 'function'
                ? this.options.initialOffset()
                : this.options.initialOffset)),
            this.scrollOffset)
          : ((this.scrollOffset = null), 0)),
      (this.getFurthestMeasurement = (n, r) => {
        const i = new Map(),
          s = new Map()
        for (let o = r - 1; o >= 0; o--) {
          const a = n[o]
          if (i.has(a.lane)) continue
          const l = s.get(a.lane)
          if (
            (l == null || a.end > l.end ? s.set(a.lane, a) : a.end < l.end && i.set(a.lane, !0),
            i.size === this.options.lanes)
          )
            break
        }
        return s.size === this.options.lanes
          ? Array.from(s.values()).sort((o, a) =>
              o.end === a.end ? o.index - a.index : o.end - a.end
            )[0]
          : void 0
      }),
      (this.getMeasurementOptions = gs(
        () => [
          this.options.count,
          this.options.paddingStart,
          this.options.scrollMargin,
          this.options.getItemKey,
          this.options.enabled
        ],
        (n, r, i, s, o) => (
          (this.pendingMeasuredCacheIndexes = []),
          { count: n, paddingStart: r, scrollMargin: i, getItemKey: s, enabled: o }
        ),
        { key: !1 }
      )),
      (this.getMeasurements = gs(
        () => [this.getMeasurementOptions(), this.itemSizeCache],
        ({ count: n, paddingStart: r, scrollMargin: i, getItemKey: s, enabled: o }, a) => {
          if (!o) return (this.measurementsCache = []), this.itemSizeCache.clear(), []
          this.measurementsCache.length === 0 &&
            ((this.measurementsCache = this.options.initialMeasurementsCache),
            this.measurementsCache.forEach(c => {
              this.itemSizeCache.set(c.key, c.size)
            }))
          const l =
            this.pendingMeasuredCacheIndexes.length > 0
              ? Math.min(...this.pendingMeasuredCacheIndexes)
              : 0
          this.pendingMeasuredCacheIndexes = []
          const u = this.measurementsCache.slice(0, l)
          for (let c = l; c < n; c++) {
            const d = s(c),
              f = this.options.lanes === 1 ? u[c - 1] : this.getFurthestMeasurement(u, c),
              h = f ? f.end + this.options.gap : r + i,
              v = a.get(d),
              y = typeof v == 'number' ? v : this.options.estimateSize(c),
              x = h + y,
              p = f ? f.lane : c % this.options.lanes
            u[c] = { index: c, start: h, size: y, end: x, key: d, lane: p }
          }
          return (this.measurementsCache = u), u
        },
        { key: !1, debug: () => this.options.debug }
      )),
      (this.calculateRange = gs(
        () => [this.getMeasurements(), this.getSize(), this.getScrollOffset()],
        (n, r, i) =>
          (this.range =
            n.length > 0 && r > 0 ? XL({ measurements: n, outerSize: r, scrollOffset: i }) : null),
        { key: !1, debug: () => this.options.debug }
      )),
      (this.getIndexes = gs(
        () => [
          this.options.rangeExtractor,
          this.calculateRange(),
          this.options.overscan,
          this.options.count
        ],
        (n, r, i, s) =>
          r === null ? [] : n({ startIndex: r.startIndex, endIndex: r.endIndex, overscan: i, count: s }),
        { key: !1, debug: () => this.options.debug }
      )),
      (this.indexFromElement = n => {
        const r = this.options.indexAttribute,
          i = n.getAttribute(r)
        return i
          ? parseInt(i, 10)
          : (console.warn(`Missing attribute name '${r}={index}' on measured element.`), -1)
      }),
      (this._measureElement = (n, r) => {
        const i = this.indexFromElement(n),
          s = this.measurementsCache[i]
        if (!s) return
        const o = s.key,
          a = this.elementsCache.get(o)
        a !== n &&
          (a && this.observer.unobserve(a), this.observer.observe(n), this.elementsCache.set(o, n)),
          n.isConnected && this.resizeItem(i, this.options.measureElement(n, r, this))
      }),
      (this.resizeItem = (n, r) => {
        const i = this.measurementsCache[n]
        if (!i) return
        const s = this.itemSizeCache.get(i.key) ?? i.size,
          o = r - s
        o !== 0 &&
          ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0
            ? this.shouldAdjustScrollPositionOnItemSizeChange(i, o, this)
            : i.start < this.getScrollOffset() + this.scrollAdjustments) &&
            this._scrollToOffset(this.getScrollOffset(), {
              adjustments: (this.scrollAdjustments += o),
              behavior: void 0
            }),
          this.pendingMeasuredCacheIndexes.push(i.index),
          (this.itemSizeCache = new Map(this.itemSizeCache.set(i.key, r))),
          this.notify(!1))
      }),
      (this.measureElement = n => {
        if (!n) {
          this.elementsCache.forEach((r, i) => {
            r.isConnected || (this.observer.unobserve(r), this.elementsCache.delete(i))
          })
          return
        }
        this._measureElement(n, void 0)
      }),
      (this.getVirtualItems = gs(
        () => [this.getIndexes(), this.getMeasurements()],
        (n, r) => {
          const i = []
          for (let s = 0, o = n.length; s < o; s++) {
            const a = n[s],
              l = r[a]
            i.push(l)
          }
          return i
        },
        { key: !1, debug: () => this.options.debug }
      )),
      (this.getVirtualItemForOffset = n => {
        const r = this.getMeasurements()
        if (r.length !== 0) return Df(r[sT(0, r.length - 1, i => Df(r[i]).start, n)])
      }),
      (this.getOffsetForAlignment = (n, r) => {
        const i = this.getSize(),
          s = this.getScrollOffset()
        r === 'auto' && (n <= s ? (r = 'start') : n >= s + i ? (r = 'end') : (r = 'start')),
          r === 'start' ? (n = n) : r === 'end' ? (n = n - i) : r === 'center' && (n = n - i / 2)
        const o = this.options.horizontal ? 'scrollWidth' : 'scrollHeight',
          l =
            (this.scrollElement
              ? 'document' in this.scrollElement
                ? this.scrollElement.document.documentElement[o]
                : this.scrollElement[o]
              : 0) - i
        return Math.max(Math.min(l, n), 0)
      }),
      (this.getOffsetForIndex = (n, r = 'auto') => {
        n = Math.max(0, Math.min(n, this.options.count - 1))
        const i = this.measurementsCache[n]
        if (!i) return
        const s = this.getSize(),
          o = this.getScrollOffset()
        if (r === 'auto')
          if (i.end >= o + s - this.options.scrollPaddingEnd) r = 'end'
          else if (i.start <= o + this.options.scrollPaddingStart) r = 'start'
          else return [o, r]
        const a =
          r === 'end' ? i.end + this.options.scrollPaddingEnd : i.start - this.options.scrollPaddingStart
        return [this.getOffsetForAlignment(a, r), r]
      }),
      (this.isDynamicMode = () => this.elementsCache.size > 0),
      (this.cancelScrollToIndex = () => {
        this.scrollToIndexTimeoutId !== null &&
          this.targetWindow &&
          (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId),
          (this.scrollToIndexTimeoutId = null))
      }),
      (this.scrollToOffset = (n, { align: r = 'start', behavior: i } = {}) => {
        this.cancelScrollToIndex(),
          i === 'smooth' &&
            this.isDynamicMode() &&
            console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'),
          this._scrollToOffset(this.getOffsetForAlignment(n, r), { adjustments: void 0, behavior: i })
      }),
      (this.scrollToIndex = (n, { align: r = 'auto', behavior: i } = {}) => {
        ;(n = Math.max(0, Math.min(n, this.options.count - 1))),
          this.cancelScrollToIndex(),
          i === 'smooth' &&
            this.isDynamicMode() &&
            console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.')
        const s = this.getOffsetForIndex(n, r)
        if (!s) return
        const [o, a] = s
        this._scrollToOffset(o, { adjustments: void 0, behavior: i }),
          i !== 'smooth' &&
            this.isDynamicMode() &&
            this.targetWindow &&
            (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
              if (
                ((this.scrollToIndexTimeoutId = null),
                this.elementsCache.has(this.options.getItemKey(n)))
              ) {
                const [u] = Df(this.getOffsetForIndex(n, a))
                zL(u, this.getScrollOffset()) || this.scrollToIndex(n, { align: a, behavior: i })
              } else this.scrollToIndex(n, { align: a, behavior: i })
            }))
      }),
      (this.scrollBy = (n, { behavior: r } = {}) => {
        this.cancelScrollToIndex(),
          r === 'smooth' &&
            this.isDynamicMode() &&
            console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'),
          this._scrollToOffset(this.getScrollOffset() + n, { adjustments: void 0, behavior: r })
      }),
      (this.getTotalSize = () => {
        var n
        const r = this.getMeasurements()
        let i
        return (
          r.length === 0
            ? (i = this.options.paddingStart)
            : (i =
                this.options.lanes === 1
                  ? (((n = r[r.length - 1]) == null ? void 0 : n.end) ?? 0)
                  : Math.max(...r.slice(-this.options.lanes).map(s => s.end))),
          i - this.options.scrollMargin + this.options.paddingEnd
        )
      }),
      (this._scrollToOffset = (n, { adjustments: r, behavior: i }) => {
        this.options.scrollToFn(n, { behavior: i, adjustments: r }, this)
      }),
      (this.measure = () => {
        ;(this.itemSizeCache = new Map()), this.notify(!1)
      }),
      this.setOptions(t)
  }
}
const sT = (e, t, n, r) => {
  for (; e <= t; ) {
    const i = ((e + t) / 2) | 0,
      s = n(i)
    if (s < r) e = i + 1
    else if (s > r) t = i - 1
    else return i
  }
  return e > 0 ? e - 1 : 0
}
function XL({ measurements: e, outerSize: t, scrollOffset: n }) {
  const r = e.length - 1,
    s = sT(0, r, a => e[a].start, n)
  let o = s
  for (; o < r && e[o].end < n + t; ) o++
  return { startIndex: s, endIndex: o }
}
const JL = typeof document < 'u' ? w.useLayoutEffect : w.useEffect
function eM(e) {
  const t = w.useReducer(() => ({}), {})[1],
    n = {
      ...e,
      onChange: (i, s) => {
        var o
        s ? ht.flushSync(t) : t(), (o = e.onChange) == null || o.call(e, i, s)
      }
    },
    [r] = w.useState(() => new QL(n))
  return r.setOptions(n), w.useEffect(() => r._didMount(), []), JL(() => r._willUpdate()), r
}
function tM(e) {
  return eM({ observeElementRect: GL, observeElementOffset: KL, scrollToFn: YL, ...e })
}
function nM(e, t) {
  return e !== null &&
    t !== null &&
    typeof e == 'object' &&
    typeof t == 'object' &&
    'id' in e &&
    'id' in t
    ? e.id === t.id
    : e === t
}
function rM(e = nM) {
  return w.useCallback(
    (t, n) => {
      if (typeof e == 'string') {
        let r = e
        return (t == null ? void 0 : t[r]) === (n == null ? void 0 : n[r])
      }
      return e(t, n)
    },
    [e]
  )
}
function iM(e) {
  if (e === null) return { width: 0, height: 0 }
  let { width: t, height: n } = e.getBoundingClientRect()
  return { width: t, height: n }
}
function l2(e, t = !1) {
  let [n, r] = w.useReducer(() => ({}), {}),
    i = w.useMemo(() => iM(e), [e, n])
  return (
    $e(() => {
      if (!e) return
      let s = new ResizeObserver(r)
      return (
        s.observe(e),
        () => {
          s.disconnect()
        }
      )
    }, [e]),
    t ? { width: `${i.width}px`, height: `${i.height}px` } : i
  )
}
let sM = class extends Map {
  constructor(t) {
    super(), (this.factory = t)
  }
  get(t) {
    let n = super.get(t)
    return n === void 0 && ((n = this.factory(t)), this.set(t, n)), n
  }
}
function oT(e, t) {
  let n = e(),
    r = new Set()
  return {
    getSnapshot() {
      return n
    },
    subscribe(i) {
      return r.add(i), () => r.delete(i)
    },
    dispatch(i, ...s) {
      let o = t[i].call(n, ...s)
      o && ((n = o), r.forEach(a => a()))
    }
  }
}
function aT(e) {
  return w.useSyncExternalStore(e.subscribe, e.getSnapshot, e.getSnapshot)
}
let oM = new sM(() =>
  oT(() => [], {
    ADD(e) {
      return this.includes(e) ? this : [...this, e]
    },
    REMOVE(e) {
      let t = this.indexOf(e)
      if (t === -1) return this
      let n = this.slice()
      return n.splice(t, 1), n
    }
  })
)
function S0(e, t) {
  let n = oM.get(t),
    r = w.useId(),
    i = aT(n)
  if (
    ($e(() => {
      if (e) return n.dispatch('ADD', r), () => n.dispatch('REMOVE', r)
    }, [n, e]),
    !e)
  )
    return !1
  let s = i.indexOf(r),
    o = i.length
  return s === -1 && ((s = o), (o += 1)), s === o - 1
}
let bp = new Map(),
  Ia = new Map()
function u2(e) {
  var t
  let n = (t = Ia.get(e)) != null ? t : 0
  return (
    Ia.set(e, n + 1),
    n !== 0
      ? () => c2(e)
      : (bp.set(e, { 'aria-hidden': e.getAttribute('aria-hidden'), inert: e.inert }),
        e.setAttribute('aria-hidden', 'true'),
        (e.inert = !0),
        () => c2(e))
  )
}
function c2(e) {
  var t
  let n = (t = Ia.get(e)) != null ? t : 1
  if ((n === 1 ? Ia.delete(e) : Ia.set(e, n - 1), n !== 1)) return
  let r = bp.get(e)
  r &&
    (r['aria-hidden'] === null
      ? e.removeAttribute('aria-hidden')
      : e.setAttribute('aria-hidden', r['aria-hidden']),
    (e.inert = r.inert),
    bp.delete(e))
}
function aM(e, { allowed: t, disallowed: n } = {}) {
  let r = S0(e, 'inert-others')
  $e(() => {
    var i, s
    if (!r) return
    let o = Zn()
    for (let l of (i = n == null ? void 0 : n()) != null ? i : []) l && o.add(u2(l))
    let a = (s = t == null ? void 0 : t()) != null ? s : []
    for (let l of a) {
      if (!l) continue
      let u = Bl(l)
      if (!u) continue
      let c = l.parentElement
      for (; c && c !== u.body; ) {
        for (let d of c.children) a.some(f => d.contains(f)) || o.add(u2(d))
        c = c.parentElement
      }
    }
    return o.dispose
  }, [r, t, n])
}
function lM(e, t, n) {
  let r = os(i => {
    let s = i.getBoundingClientRect()
    s.x === 0 && s.y === 0 && s.width === 0 && s.height === 0 && n()
  })
  w.useEffect(() => {
    if (!e) return
    let i = t === null ? null : t instanceof HTMLElement ? t : t.current
    if (!i) return
    let s = Zn()
    if (typeof ResizeObserver < 'u') {
      let o = new ResizeObserver(() => r.current(i))
      o.observe(i), s.add(() => o.disconnect())
    }
    if (typeof IntersectionObserver < 'u') {
      let o = new IntersectionObserver(() => r.current(i))
      o.observe(i), s.add(() => o.disconnect())
    }
    return () => s.dispose()
  }, [t, r, e])
}
let kp = [
  '[contentEditable=true]',
  '[tabindex]',
  'a[href]',
  'area[href]',
  'button:not([disabled])',
  'iframe',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])'
]
  .map(e => `${e}:not([tabindex='-1'])`)
  .join(',')
var uM = (e => (
    (e[(e.First = 1)] = 'First'),
    (e[(e.Previous = 2)] = 'Previous'),
    (e[(e.Next = 4)] = 'Next'),
    (e[(e.Last = 8)] = 'Last'),
    (e[(e.WrapAround = 16)] = 'WrapAround'),
    (e[(e.NoScroll = 32)] = 'NoScroll'),
    (e[(e.AutoFocus = 64)] = 'AutoFocus'),
    e
  ))(uM || {}),
  cM = (e => (
    (e[(e.Error = 0)] = 'Error'),
    (e[(e.Overflow = 1)] = 'Overflow'),
    (e[(e.Success = 2)] = 'Success'),
    (e[(e.Underflow = 3)] = 'Underflow'),
    e
  ))(cM || {}),
  dM = (e => ((e[(e.Previous = -1)] = 'Previous'), (e[(e.Next = 1)] = 'Next'), e))(dM || {}),
  lT = (e => ((e[(e.Strict = 0)] = 'Strict'), (e[(e.Loose = 1)] = 'Loose'), e))(lT || {})
function fM(e, t = 0) {
  var n
  return e === ((n = Bl(e)) == null ? void 0 : n.body)
    ? !1
    : mr(t, {
        0() {
          return e.matches(kp)
        },
        1() {
          let r = e
          for (; r !== null; ) {
            if (r.matches(kp)) return !0
            r = r.parentElement
          }
          return !1
        }
      })
}
var hM = (e => ((e[(e.Keyboard = 0)] = 'Keyboard'), (e[(e.Mouse = 1)] = 'Mouse'), e))(hM || {})
typeof window < 'u' &&
  typeof document < 'u' &&
  (document.addEventListener(
    'keydown',
    e => {
      e.metaKey ||
        e.altKey ||
        e.ctrlKey ||
        (document.documentElement.dataset.headlessuiFocusVisible = '')
    },
    !0
  ),
  document.addEventListener(
    'click',
    e => {
      e.detail === 1
        ? delete document.documentElement.dataset.headlessuiFocusVisible
        : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = '')
    },
    !0
  ))
function pM(e, t = n => n) {
  return e.slice().sort((n, r) => {
    let i = t(n),
      s = t(r)
    if (i === null || s === null) return 0
    let o = i.compareDocumentPosition(s)
    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
  })
}
function uT() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0)
  )
}
function mM() {
  return /Android/gi.test(window.navigator.userAgent)
}
function cT() {
  return uT() || mM()
}
function ea(e, t, n, r) {
  let i = os(n)
  w.useEffect(() => {
    if (!e) return
    function s(o) {
      i.current(o)
    }
    return document.addEventListener(t, s, r), () => document.removeEventListener(t, s, r)
  }, [e, t, r])
}
function gM(e, t, n, r) {
  let i = os(n)
  w.useEffect(() => {
    if (!e) return
    function s(o) {
      i.current(o)
    }
    return window.addEventListener(t, s, r), () => window.removeEventListener(t, s, r)
  }, [e, t, r])
}
const d2 = 30
function vM(e, t, n) {
  let r = S0(e, 'outside-click'),
    i = os(n),
    s = w.useCallback(
      function (l, u) {
        if (l.defaultPrevented) return
        let c = u(l)
        if (c === null || !c.getRootNode().contains(c) || !c.isConnected) return
        let d = (function f(h) {
          return typeof h == 'function' ? f(h()) : Array.isArray(h) || h instanceof Set ? h : [h]
        })(t)
        for (let f of d)
          if (f !== null && (f.contains(c) || (l.composed && l.composedPath().includes(f)))) return
        return !fM(c, lT.Loose) && c.tabIndex !== -1 && l.preventDefault(), i.current(l, c)
      },
      [i, t]
    ),
    o = w.useRef(null)
  ea(
    r,
    'pointerdown',
    l => {
      var u, c
      o.current =
        ((c = (u = l.composedPath) == null ? void 0 : u.call(l)) == null ? void 0 : c[0]) || l.target
    },
    !0
  ),
    ea(
      r,
      'mousedown',
      l => {
        var u, c
        o.current =
          ((c = (u = l.composedPath) == null ? void 0 : u.call(l)) == null ? void 0 : c[0]) || l.target
      },
      !0
    ),
    ea(
      r,
      'click',
      l => {
        cT() || (o.current && (s(l, () => o.current), (o.current = null)))
      },
      !0
    )
  let a = w.useRef({ x: 0, y: 0 })
  ea(
    r,
    'touchstart',
    l => {
      ;(a.current.x = l.touches[0].clientX), (a.current.y = l.touches[0].clientY)
    },
    !0
  ),
    ea(
      r,
      'touchend',
      l => {
        let u = { x: l.changedTouches[0].clientX, y: l.changedTouches[0].clientY }
        if (!(Math.abs(u.x - a.current.x) >= d2 || Math.abs(u.y - a.current.y) >= d2))
          return s(l, () => (l.target instanceof HTMLElement ? l.target : null))
      },
      !0
    ),
    gM(
      r,
      'blur',
      l =>
        s(l, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null
        ),
      !0
    )
}
function Td(...e) {
  return w.useMemo(() => Bl(...e), [...e])
}
function yM(e, t, n, r) {
  let i = os(n)
  w.useEffect(() => {
    e = e ?? window
    function s(o) {
      i.current(o)
    }
    return e.addEventListener(t, s, r), () => e.removeEventListener(t, s, r)
  }, [e, t, r])
}
function dT(e) {
  let t = w.useRef({ value: '', selectionStart: null, selectionEnd: null })
  return (
    yM(e, 'blur', n => {
      let r = n.target
      r instanceof HTMLInputElement &&
        (t.current = { value: r.value, selectionStart: r.selectionStart, selectionEnd: r.selectionEnd })
    }),
    ce(() => {
      if (document.activeElement !== e && e instanceof HTMLInputElement && e.isConnected) {
        if ((e.focus({ preventScroll: !0 }), e.value !== t.current.value))
          e.setSelectionRange(e.value.length, e.value.length)
        else {
          let { selectionStart: n, selectionEnd: r } = t.current
          n !== null && r !== null && e.setSelectionRange(n, r)
        }
        t.current = { value: '', selectionStart: null, selectionEnd: null }
      }
    })
  )
}
function wM(e, t) {
  return w.useMemo(() => {
    var n
    if (e.type) return e.type
    let r = (n = e.as) != null ? n : 'button'
    if (
      (typeof r == 'string' && r.toLowerCase() === 'button') ||
      ((t == null ? void 0 : t.tagName) === 'BUTTON' && !t.hasAttribute('type'))
    )
      return 'button'
  }, [e.type, e.as, t])
}
function xM() {
  let e
  return {
    before({ doc: t }) {
      var n
      let r = t.documentElement,
        i = (n = t.defaultView) != null ? n : window
      e = Math.max(0, i.innerWidth - r.clientWidth)
    },
    after({ doc: t, d: n }) {
      let r = t.documentElement,
        i = Math.max(0, r.clientWidth - r.offsetWidth),
        s = Math.max(0, e - i)
      n.style(r, 'paddingRight', `${s}px`)
    }
  }
}
function EM() {
  return uT()
    ? {
        before({ doc: e, d: t, meta: n }) {
          function r(i) {
            return n.containers.flatMap(s => s()).some(s => s.contains(i))
          }
          t.microTask(() => {
            var i
            if (window.getComputedStyle(e.documentElement).scrollBehavior !== 'auto') {
              let a = Zn()
              a.style(e.documentElement, 'scrollBehavior', 'auto'),
                t.add(() => t.microTask(() => a.dispose()))
            }
            let s = (i = window.scrollY) != null ? i : window.pageYOffset,
              o = null
            t.addEventListener(
              e,
              'click',
              a => {
                if (a.target instanceof HTMLElement)
                  try {
                    let l = a.target.closest('a')
                    if (!l) return
                    let { hash: u } = new URL(l.href),
                      c = e.querySelector(u)
                    c && !r(c) && (o = c)
                  } catch {}
              },
              !0
            ),
              t.addEventListener(e, 'touchstart', a => {
                if (a.target instanceof HTMLElement)
                  if (r(a.target)) {
                    let l = a.target
                    for (; l.parentElement && r(l.parentElement); ) l = l.parentElement
                    t.style(l, 'overscrollBehavior', 'contain')
                  } else t.style(a.target, 'touchAction', 'none')
              }),
              t.addEventListener(
                e,
                'touchmove',
                a => {
                  if (a.target instanceof HTMLElement) {
                    if (a.target.tagName === 'INPUT') return
                    if (r(a.target)) {
                      let l = a.target
                      for (
                        ;
                        l.parentElement &&
                        l.dataset.headlessuiPortal !== '' &&
                        !(l.scrollHeight > l.clientHeight || l.scrollWidth > l.clientWidth);

                      )
                        l = l.parentElement
                      l.dataset.headlessuiPortal === '' && a.preventDefault()
                    } else a.preventDefault()
                  }
                },
                { passive: !1 }
              ),
              t.add(() => {
                var a
                let l = (a = window.scrollY) != null ? a : window.pageYOffset
                s !== l && window.scrollTo(0, s),
                  o && o.isConnected && (o.scrollIntoView({ block: 'nearest' }), (o = null))
              })
          })
        }
      }
    : {}
}
function SM() {
  return {
    before({ doc: e, d: t }) {
      t.style(e.documentElement, 'overflow', 'hidden')
    }
  }
}
function TM(e) {
  let t = {}
  for (let n of e) Object.assign(t, n(t))
  return t
}
let Li = oT(() => new Map(), {
  PUSH(e, t) {
    var n
    let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: Zn(), meta: new Set() }
    return r.count++, r.meta.add(t), this.set(e, r), this
  },
  POP(e, t) {
    let n = this.get(e)
    return n && (n.count--, n.meta.delete(t)), this
  },
  SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
    let r = { doc: e, d: t, meta: TM(n) },
      i = [EM(), xM(), SM()]
    i.forEach(({ before: s }) => (s == null ? void 0 : s(r))),
      i.forEach(({ after: s }) => (s == null ? void 0 : s(r)))
  },
  SCROLL_ALLOW({ d: e }) {
    e.dispose()
  },
  TEARDOWN({ doc: e }) {
    this.delete(e)
  }
})
Li.subscribe(() => {
  let e = Li.getSnapshot(),
    t = new Map()
  for (let [n] of e) t.set(n, n.documentElement.style.overflow)
  for (let n of e.values()) {
    let r = t.get(n.doc) === 'hidden',
      i = n.count !== 0
    ;((i && !r) || (!i && r)) && Li.dispatch(n.count > 0 ? 'SCROLL_PREVENT' : 'SCROLL_ALLOW', n),
      n.count === 0 && Li.dispatch('TEARDOWN', n)
  }
})
function CM(e, t, n = () => ({ containers: [] })) {
  let r = aT(Li),
    i = t ? r.get(t) : void 0,
    s = i ? i.count > 0 : !1
  return (
    $e(() => {
      if (!(!t || !e)) return Li.dispatch('PUSH', t, n), () => Li.dispatch('POP', t, n)
    }, [e, t]),
    s
  )
}
function _M(e, t, n = () => [document.body]) {
  let r = S0(e, 'scroll-lock')
  CM(r, t, i => {
    var s
    return { containers: [...((s = i.containers) != null ? s : []), n] }
  })
}
function f2(e) {
  return [e.screenX, e.screenY]
}
function bM() {
  let e = w.useRef([-1, -1])
  return {
    wasMoved(t) {
      let n = f2(t)
      return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : ((e.current = n), !0)
    },
    update(t) {
      e.current = f2(t)
    }
  }
}
function kM(e = 0) {
  let [t, n] = w.useState(e),
    r = w.useCallback(l => n(l), [t]),
    i = w.useCallback(l => n(u => u | l), [t]),
    s = w.useCallback(l => (t & l) === l, [t]),
    o = w.useCallback(l => n(u => u & ~l), [n]),
    a = w.useCallback(l => n(u => u ^ l), [n])
  return { flags: t, setFlag: r, addFlag: i, hasFlag: s, removeFlag: o, toggleFlag: a }
}
var PM = (e => (
  (e[(e.None = 0)] = 'None'),
  (e[(e.Closed = 1)] = 'Closed'),
  (e[(e.Enter = 2)] = 'Enter'),
  (e[(e.Leave = 4)] = 'Leave'),
  e
))(PM || {})
function RM(e) {
  let t = {}
  for (let n in e) e[n] === !0 && (t[`data-${n}`] = '')
  return t
}
function AM(e, t, n, r) {
  let [i, s] = w.useState(n),
    { hasFlag: o, addFlag: a, removeFlag: l } = kM(e && i ? 3 : 0),
    u = w.useRef(!1),
    c = w.useRef(!1),
    d = zl()
  return (
    $e(() => {
      var f
      if (e) {
        if ((n && s(!0), !t)) {
          n && a(3)
          return
        }
        return (
          (f = void 0) == null || f.call(r, n),
          OM(t, {
            inFlight: u,
            prepare() {
              c.current ? (c.current = !1) : (c.current = u.current),
                (u.current = !0),
                !c.current && (n ? (a(3), l(4)) : (a(4), l(2)))
            },
            run() {
              c.current ? (n ? (l(3), a(4)) : (l(4), a(3))) : n ? l(1) : a(1)
            },
            done() {
              var h
              ;(c.current && typeof t.getAnimations == 'function' && t.getAnimations().length > 0) ||
                ((u.current = !1), l(7), n || s(!1), (h = void 0) == null || h.call(r, n))
            }
          })
        )
      }
    }, [e, n, t, d]),
    e
      ? [i, { closed: o(1), enter: o(2), leave: o(4), transition: o(2) || o(4) }]
      : [n, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }]
  )
}
function OM(e, { prepare: t, run: n, done: r, inFlight: i }) {
  let s = Zn()
  return (
    MM(e, { prepare: t, inFlight: i }),
    s.nextFrame(() => {
      n(),
        s.requestAnimationFrame(() => {
          s.add(LM(e, r))
        })
    }),
    s.dispose
  )
}
function LM(e, t) {
  let n = Zn()
  if (!e) return n.dispose
  let r = !1
  n.add(() => {
    r = !0
  })
  let i = e.getAnimations().filter(s => s instanceof CSSTransition)
  return i.length === 0
    ? (t(), n.dispose)
    : (Promise.allSettled(i.map(s => s.finished)).then(() => {
        r || t()
      }),
      n.dispose)
}
function MM(e, { inFlight: t, prepare: n }) {
  if (t != null && t.current) {
    n()
    return
  }
  let r = e.style.transition
  ;(e.style.transition = 'none'), n(), e.offsetHeight, (e.style.transition = r)
}
function NM(e, { container: t, accept: n, walk: r }) {
  let i = w.useRef(n),
    s = w.useRef(r)
  w.useEffect(() => {
    ;(i.current = n), (s.current = r)
  }, [n, r]),
    $e(() => {
      if (!t || !e) return
      let o = Bl(t)
      if (!o) return
      let a = i.current,
        l = s.current,
        u = Object.assign(d => a(d), { acceptNode: a }),
        c = o.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, u, !1)
      for (; c.nextNode(); ) l(c.currentNode)
    }, [t, e, i, s])
}
function h2(e, t) {
  let n = w.useRef([]),
    r = ce(e)
  w.useEffect(() => {
    let i = [...n.current]
    for (let [s, o] of t.entries())
      if (n.current[s] !== o) {
        let a = r(t, i)
        return (n.current = t), a
      }
  }, [r, ...t])
}
function Do(e) {
  return fT(e) ? (e.nodeName || '').toLowerCase() : '#document'
}
function Kt(e) {
  var t
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function _r(e) {
  var t
  return (t = (fT(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement
}
function fT(e) {
  return e instanceof Node || e instanceof Kt(e).Node
}
function _t(e) {
  return e instanceof Element || e instanceof Kt(e).Element
}
function Yn(e) {
  return e instanceof HTMLElement || e instanceof Kt(e).HTMLElement
}
function p2(e) {
  return typeof ShadowRoot > 'u' ? !1 : e instanceof ShadowRoot || e instanceof Kt(e).ShadowRoot
}
function Ul(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: i } = On(e)
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !['inline', 'contents'].includes(i)
}
function IM(e) {
  return ['table', 'td', 'th'].includes(Do(e))
}
function Cd(e) {
  return [':popover-open', ':modal'].some(t => {
    try {
      return e.matches(t)
    } catch {
      return !1
    }
  })
}
function T0(e) {
  const t = C0(),
    n = _t(e) ? On(e) : e
  return (
    n.transform !== 'none' ||
    n.perspective !== 'none' ||
    (n.containerType ? n.containerType !== 'normal' : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== 'none' : !1)) ||
    (!t && (n.filter ? n.filter !== 'none' : !1)) ||
    ['transform', 'perspective', 'filter'].some(r => (n.willChange || '').includes(r)) ||
    ['paint', 'layout', 'strict', 'content'].some(r => (n.contain || '').includes(r))
  )
}
function DM(e) {
  let t = ri(e)
  for (; Yn(t) && !bo(t); ) {
    if (T0(t)) return t
    if (Cd(t)) return null
    t = ri(t)
  }
  return null
}
function C0() {
  return typeof CSS > 'u' || !CSS.supports ? !1 : CSS.supports('-webkit-backdrop-filter', 'none')
}
function bo(e) {
  return ['html', 'body', '#document'].includes(Do(e))
}
function On(e) {
  return Kt(e).getComputedStyle(e)
}
function _d(e) {
  return _t(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY }
}
function ri(e) {
  if (Do(e) === 'html') return e
  const t = e.assignedSlot || e.parentNode || (p2(e) && e.host) || _r(e)
  return p2(t) ? t.host : t
}
function hT(e) {
  const t = ri(e)
  return bo(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : Yn(t) && Ul(t) ? t : hT(t)
}
function ol(e, t, n) {
  var r
  t === void 0 && (t = []), n === void 0 && (n = !0)
  const i = hT(e),
    s = i === ((r = e.ownerDocument) == null ? void 0 : r.body),
    o = Kt(i)
  if (s) {
    const a = Pp(o)
    return t.concat(o, o.visualViewport || [], Ul(i) ? i : [], a && n ? ol(a) : [])
  }
  return t.concat(i, ol(i, [], n))
}
function Pp(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function FM() {
  const e = navigator.userAgentData
  return e && Array.isArray(e.brands)
    ? e.brands
        .map(t => {
          let { brand: n, version: r } = t
          return n + '/' + r
        })
        .join(' ')
    : navigator.userAgent
}
const zr = Math.min,
  Ht = Math.max,
  Dc = Math.round,
  bu = Math.floor,
  ii = e => ({ x: e, y: e }),
  jM = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
  $M = { start: 'end', end: 'start' }
function m2(e, t, n) {
  return Ht(e, zr(t, n))
}
function Fo(e, t) {
  return typeof e == 'function' ? e(t) : e
}
function si(e) {
  return e.split('-')[0]
}
function Hl(e) {
  return e.split('-')[1]
}
function pT(e) {
  return e === 'x' ? 'y' : 'x'
}
function mT(e) {
  return e === 'y' ? 'height' : 'width'
}
function Ji(e) {
  return ['top', 'bottom'].includes(si(e)) ? 'y' : 'x'
}
function gT(e) {
  return pT(Ji(e))
}
function VM(e, t, n) {
  n === void 0 && (n = !1)
  const r = Hl(e),
    i = gT(e),
    s = mT(i)
  let o = i === 'x' ? (r === (n ? 'end' : 'start') ? 'right' : 'left') : r === 'start' ? 'bottom' : 'top'
  return t.reference[s] > t.floating[s] && (o = Fc(o)), [o, Fc(o)]
}
function BM(e) {
  const t = Fc(e)
  return [Rp(e), t, Rp(t)]
}
function Rp(e) {
  return e.replace(/start|end/g, t => $M[t])
}
function zM(e, t, n) {
  const r = ['left', 'right'],
    i = ['right', 'left'],
    s = ['top', 'bottom'],
    o = ['bottom', 'top']
  switch (e) {
    case 'top':
    case 'bottom':
      return n ? (t ? i : r) : t ? r : i
    case 'left':
    case 'right':
      return t ? s : o
    default:
      return []
  }
}
function UM(e, t, n, r) {
  const i = Hl(e)
  let s = zM(si(e), n === 'start', r)
  return i && ((s = s.map(o => o + '-' + i)), t && (s = s.concat(s.map(Rp)))), s
}
function Fc(e) {
  return e.replace(/left|right|bottom|top/g, t => jM[t])
}
function HM(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e }
}
function WM(e) {
  return typeof e != 'number' ? HM(e) : { top: e, right: e, bottom: e, left: e }
}
function jc(e) {
  const { x: t, y: n, width: r, height: i } = e
  return { width: r, height: i, top: n, left: t, right: t + r, bottom: n + i, x: t, y: n }
}
function g2(e, t, n) {
  let { reference: r, floating: i } = e
  const s = Ji(t),
    o = gT(t),
    a = mT(o),
    l = si(t),
    u = s === 'y',
    c = r.x + r.width / 2 - i.width / 2,
    d = r.y + r.height / 2 - i.height / 2,
    f = r[a] / 2 - i[a] / 2
  let h
  switch (l) {
    case 'top':
      h = { x: c, y: r.y - i.height }
      break
    case 'bottom':
      h = { x: c, y: r.y + r.height }
      break
    case 'right':
      h = { x: r.x + r.width, y: d }
      break
    case 'left':
      h = { x: r.x - i.width, y: d }
      break
    default:
      h = { x: r.x, y: r.y }
  }
  switch (Hl(t)) {
    case 'start':
      h[o] -= f * (n && u ? -1 : 1)
      break
    case 'end':
      h[o] += f * (n && u ? -1 : 1)
      break
  }
  return h
}
const GM = async (e, t, n) => {
  const { placement: r = 'bottom', strategy: i = 'absolute', middleware: s = [], platform: o } = n,
    a = s.filter(Boolean),
    l = await (o.isRTL == null ? void 0 : o.isRTL(t))
  let u = await o.getElementRects({ reference: e, floating: t, strategy: i }),
    { x: c, y: d } = g2(u, r, l),
    f = r,
    h = {},
    v = 0
  for (let y = 0; y < a.length; y++) {
    const { name: x, fn: p } = a[y],
      {
        x: m,
        y: g,
        data: E,
        reset: S
      } = await p({
        x: c,
        y: d,
        initialPlacement: r,
        placement: f,
        strategy: i,
        middlewareData: h,
        rects: u,
        platform: o,
        elements: { reference: e, floating: t }
      })
    ;(c = m ?? c),
      (d = g ?? d),
      (h = { ...h, [x]: { ...h[x], ...E } }),
      S &&
        v <= 50 &&
        (v++,
        typeof S == 'object' &&
          (S.placement && (f = S.placement),
          S.rects &&
            (u =
              S.rects === !0
                ? await o.getElementRects({ reference: e, floating: t, strategy: i })
                : S.rects),
          ({ x: c, y: d } = g2(u, f, l))),
        (y = -1))
  }
  return { x: c, y: d, placement: f, strategy: i, middlewareData: h }
}
async function bd(e, t) {
  var n
  t === void 0 && (t = {})
  const { x: r, y: i, platform: s, rects: o, elements: a, strategy: l } = e,
    {
      boundary: u = 'clippingAncestors',
      rootBoundary: c = 'viewport',
      elementContext: d = 'floating',
      altBoundary: f = !1,
      padding: h = 0
    } = Fo(t, e),
    v = WM(h),
    x = a[f ? (d === 'floating' ? 'reference' : 'floating') : d],
    p = jc(
      await s.getClippingRect({
        element:
          (n = await (s.isElement == null ? void 0 : s.isElement(x))) == null || n
            ? x
            : x.contextElement ||
              (await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating))),
        boundary: u,
        rootBoundary: c,
        strategy: l
      })
    ),
    m =
      d === 'floating'
        ? { x: r, y: i, width: o.floating.width, height: o.floating.height }
        : o.reference,
    g = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)),
    E = (await (s.isElement == null ? void 0 : s.isElement(g)))
      ? (await (s.getScale == null ? void 0 : s.getScale(g))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    S = jc(
      s.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: m,
            offsetParent: g,
            strategy: l
          })
        : m
    )
  return {
    top: (p.top - S.top + v.top) / E.y,
    bottom: (S.bottom - p.bottom + v.bottom) / E.y,
    left: (p.left - S.left + v.left) / E.x,
    right: (S.right - p.right + v.right) / E.x
  }
}
const qM = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: 'flip',
      options: e,
      async fn(t) {
        var n, r
        const {
            placement: i,
            middlewareData: s,
            rects: o,
            initialPlacement: a,
            platform: l,
            elements: u
          } = t,
          {
            mainAxis: c = !0,
            crossAxis: d = !0,
            fallbackPlacements: f,
            fallbackStrategy: h = 'bestFit',
            fallbackAxisSideDirection: v = 'none',
            flipAlignment: y = !0,
            ...x
          } = Fo(e, t)
        if ((n = s.arrow) != null && n.alignmentOffset) return {}
        const p = si(i),
          m = Ji(a),
          g = si(a) === a,
          E = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
          S = f || (g || !y ? [Fc(a)] : BM(a)),
          C = v !== 'none'
        !f && C && S.push(...UM(a, y, v, E))
        const k = [a, ...S],
          T = await bd(t, x),
          A = []
        let O = ((r = s.flip) == null ? void 0 : r.overflows) || []
        if ((c && A.push(T[p]), d)) {
          const M = VM(i, o, E)
          A.push(T[M[0]], T[M[1]])
        }
        if (((O = [...O, { placement: i, overflows: A }]), !A.every(M => M <= 0))) {
          var D, Z
          const M = (((D = s.flip) == null ? void 0 : D.index) || 0) + 1,
            W = k[M]
          if (W) return { data: { index: M, overflows: O }, reset: { placement: W } }
          let oe =
            (Z = O.filter(ee => ee.overflows[0] <= 0).sort(
              (ee, R) => ee.overflows[1] - R.overflows[1]
            )[0]) == null
              ? void 0
              : Z.placement
          if (!oe)
            switch (h) {
              case 'bestFit': {
                var re
                const ee =
                  (re = O.filter(R => {
                    if (C) {
                      const $ = Ji(R.placement)
                      return $ === m || $ === 'y'
                    }
                    return !0
                  })
                    .map(R => [R.placement, R.overflows.filter($ => $ > 0).reduce(($, z) => $ + z, 0)])
                    .sort((R, $) => R[1] - $[1])[0]) == null
                    ? void 0
                    : re[0]
                ee && (oe = ee)
                break
              }
              case 'initialPlacement':
                oe = a
                break
            }
          if (i !== oe) return { reset: { placement: oe } }
        }
        return {}
      }
    }
  )
}
async function KM(e, t) {
  const { placement: n, platform: r, elements: i } = e,
    s = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)),
    o = si(n),
    a = Hl(n),
    l = Ji(n) === 'y',
    u = ['left', 'top'].includes(o) ? -1 : 1,
    c = s && l ? -1 : 1,
    d = Fo(t, e)
  let {
    mainAxis: f,
    crossAxis: h,
    alignmentAxis: v
  } = typeof d == 'number'
    ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d }
  return (
    a && typeof v == 'number' && (h = a === 'end' ? v * -1 : v),
    l ? { x: h * c, y: f * u } : { x: f * u, y: h * c }
  )
}
const ZM = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: 'offset',
        options: e,
        async fn(t) {
          var n, r
          const { x: i, y: s, placement: o, middlewareData: a } = t,
            l = await KM(t, e)
          return o === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: i + l.x, y: s + l.y, data: { ...l, placement: o } }
        }
      }
    )
  },
  YM = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'shift',
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: i } = t,
            {
              mainAxis: s = !0,
              crossAxis: o = !1,
              limiter: a = {
                fn: x => {
                  let { x: p, y: m } = x
                  return { x: p, y: m }
                }
              },
              ...l
            } = Fo(e, t),
            u = { x: n, y: r },
            c = await bd(t, l),
            d = Ji(si(i)),
            f = pT(d)
          let h = u[f],
            v = u[d]
          if (s) {
            const x = f === 'y' ? 'top' : 'left',
              p = f === 'y' ? 'bottom' : 'right',
              m = h + c[x],
              g = h - c[p]
            h = m2(m, h, g)
          }
          if (o) {
            const x = d === 'y' ? 'top' : 'left',
              p = d === 'y' ? 'bottom' : 'right',
              m = v + c[x],
              g = v - c[p]
            v = m2(m, v, g)
          }
          const y = a.fn({ ...t, [f]: h, [d]: v })
          return { ...y, data: { x: y.x - n, y: y.y - r } }
        }
      }
    )
  },
  QM = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'size',
        options: e,
        async fn(t) {
          const { placement: n, rects: r, platform: i, elements: s } = t,
            { apply: o = () => {}, ...a } = Fo(e, t),
            l = await bd(t, a),
            u = si(n),
            c = Hl(n),
            d = Ji(n) === 'y',
            { width: f, height: h } = r.floating
          let v, y
          u === 'top' || u === 'bottom'
            ? ((v = u),
              (y =
                c === ((await (i.isRTL == null ? void 0 : i.isRTL(s.floating))) ? 'start' : 'end')
                  ? 'left'
                  : 'right'))
            : ((y = u), (v = c === 'end' ? 'top' : 'bottom'))
          const x = h - l.top - l.bottom,
            p = f - l.left - l.right,
            m = zr(h - l[v], x),
            g = zr(f - l[y], p),
            E = !t.middlewareData.shift
          let S = m,
            C = g
          if ((d ? (C = c || E ? zr(g, p) : p) : (S = c || E ? zr(m, x) : x), E && !c)) {
            const T = Ht(l.left, 0),
              A = Ht(l.right, 0),
              O = Ht(l.top, 0),
              D = Ht(l.bottom, 0)
            d
              ? (C = f - 2 * (T !== 0 || A !== 0 ? T + A : Ht(l.left, l.right)))
              : (S = h - 2 * (O !== 0 || D !== 0 ? O + D : Ht(l.top, l.bottom)))
          }
          await o({ ...t, availableWidth: C, availableHeight: S })
          const k = await i.getDimensions(s.floating)
          return f !== k.width || h !== k.height ? { reset: { rects: !0 } } : {}
        }
      }
    )
  }
function vT(e) {
  const t = On(e)
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0
  const i = Yn(e),
    s = i ? e.offsetWidth : n,
    o = i ? e.offsetHeight : r,
    a = Dc(n) !== s || Dc(r) !== o
  return a && ((n = s), (r = o)), { width: n, height: r, $: a }
}
function _0(e) {
  return _t(e) ? e : e.contextElement
}
function Ys(e) {
  const t = _0(e)
  if (!Yn(t)) return ii(1)
  const n = t.getBoundingClientRect(),
    { width: r, height: i, $: s } = vT(t)
  let o = (s ? Dc(n.width) : n.width) / r,
    a = (s ? Dc(n.height) : n.height) / i
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), { x: o, y: a }
}
const XM = ii(0)
function yT(e) {
  const t = Kt(e)
  return !C0() || !t.visualViewport
    ? XM
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
}
function JM(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== Kt(e)) ? !1 : t
}
function es(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1)
  const i = e.getBoundingClientRect(),
    s = _0(e)
  let o = ii(1)
  t && (r ? _t(r) && (o = Ys(r)) : (o = Ys(e)))
  const a = JM(s, n, r) ? yT(s) : ii(0)
  let l = (i.left + a.x) / o.x,
    u = (i.top + a.y) / o.y,
    c = i.width / o.x,
    d = i.height / o.y
  if (s) {
    const f = Kt(s),
      h = r && _t(r) ? Kt(r) : r
    let v = f,
      y = Pp(v)
    for (; y && r && h !== v; ) {
      const x = Ys(y),
        p = y.getBoundingClientRect(),
        m = On(y),
        g = p.left + (y.clientLeft + parseFloat(m.paddingLeft)) * x.x,
        E = p.top + (y.clientTop + parseFloat(m.paddingTop)) * x.y
      ;(l *= x.x), (u *= x.y), (c *= x.x), (d *= x.y), (l += g), (u += E), (v = Kt(y)), (y = Pp(v))
    }
  }
  return jc({ width: c, height: d, x: l, y: u })
}
function e6(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: i } = e
  const s = i === 'fixed',
    o = _r(r),
    a = t ? Cd(t.floating) : !1
  if (r === o || (a && s)) return n
  let l = { scrollLeft: 0, scrollTop: 0 },
    u = ii(1)
  const c = ii(0),
    d = Yn(r)
  if ((d || (!d && !s)) && ((Do(r) !== 'body' || Ul(o)) && (l = _d(r)), Yn(r))) {
    const f = es(r)
    ;(u = Ys(r)), (c.x = f.x + r.clientLeft), (c.y = f.y + r.clientTop)
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y
  }
}
function t6(e) {
  return Array.from(e.getClientRects())
}
function wT(e) {
  return es(_r(e)).left + _d(e).scrollLeft
}
function n6(e) {
  const t = _r(e),
    n = _d(e),
    r = e.ownerDocument.body,
    i = Ht(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    s = Ht(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight)
  let o = -n.scrollLeft + wT(e)
  const a = -n.scrollTop
  return (
    On(r).direction === 'rtl' && (o += Ht(t.clientWidth, r.clientWidth) - i),
    { width: i, height: s, x: o, y: a }
  )
}
function r6(e, t) {
  const n = Kt(e),
    r = _r(e),
    i = n.visualViewport
  let s = r.clientWidth,
    o = r.clientHeight,
    a = 0,
    l = 0
  if (i) {
    ;(s = i.width), (o = i.height)
    const u = C0()
    ;(!u || (u && t === 'fixed')) && ((a = i.offsetLeft), (l = i.offsetTop))
  }
  return { width: s, height: o, x: a, y: l }
}
function i6(e, t) {
  const n = es(e, !0, t === 'fixed'),
    r = n.top + e.clientTop,
    i = n.left + e.clientLeft,
    s = Yn(e) ? Ys(e) : ii(1),
    o = e.clientWidth * s.x,
    a = e.clientHeight * s.y,
    l = i * s.x,
    u = r * s.y
  return { width: o, height: a, x: l, y: u }
}
function v2(e, t, n) {
  let r
  if (t === 'viewport') r = r6(e, n)
  else if (t === 'document') r = n6(_r(e))
  else if (_t(t)) r = i6(t, n)
  else {
    const i = yT(e)
    r = { ...t, x: t.x - i.x, y: t.y - i.y }
  }
  return jc(r)
}
function xT(e, t) {
  const n = ri(e)
  return n === t || !_t(n) || bo(n) ? !1 : On(n).position === 'fixed' || xT(n, t)
}
function s6(e, t) {
  const n = t.get(e)
  if (n) return n
  let r = ol(e, [], !1).filter(a => _t(a) && Do(a) !== 'body'),
    i = null
  const s = On(e).position === 'fixed'
  let o = s ? ri(e) : e
  for (; _t(o) && !bo(o); ) {
    const a = On(o),
      l = T0(o)
    !l && a.position === 'fixed' && (i = null),
      (
        s
          ? !l && !i
          : (!l && a.position === 'static' && !!i && ['absolute', 'fixed'].includes(i.position)) ||
            (Ul(o) && !l && xT(e, o))
      )
        ? (r = r.filter(c => c !== o))
        : (i = a),
      (o = ri(o))
  }
  return t.set(e, r), r
}
function o6(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: i } = e
  const o = [...(n === 'clippingAncestors' ? (Cd(t) ? [] : s6(t, this._c)) : [].concat(n)), r],
    a = o[0],
    l = o.reduce(
      (u, c) => {
        const d = v2(t, c, i)
        return (
          (u.top = Ht(d.top, u.top)),
          (u.right = zr(d.right, u.right)),
          (u.bottom = zr(d.bottom, u.bottom)),
          (u.left = Ht(d.left, u.left)),
          u
        )
      },
      v2(t, a, i)
    )
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top }
}
function a6(e) {
  const { width: t, height: n } = vT(e)
  return { width: t, height: n }
}
function l6(e, t, n) {
  const r = Yn(t),
    i = _r(t),
    s = n === 'fixed',
    o = es(e, !0, s, t)
  let a = { scrollLeft: 0, scrollTop: 0 }
  const l = ii(0)
  if (r || (!r && !s))
    if (((Do(t) !== 'body' || Ul(i)) && (a = _d(t)), r)) {
      const d = es(t, !0, s, t)
      ;(l.x = d.x + t.clientLeft), (l.y = d.y + t.clientTop)
    } else i && (l.x = wT(i))
  const u = o.left + a.scrollLeft - l.x,
    c = o.top + a.scrollTop - l.y
  return { x: u, y: c, width: o.width, height: o.height }
}
function Ff(e) {
  return On(e).position === 'static'
}
function y2(e, t) {
  return !Yn(e) || On(e).position === 'fixed' ? null : t ? t(e) : e.offsetParent
}
function ET(e, t) {
  const n = Kt(e)
  if (Cd(e)) return n
  if (!Yn(e)) {
    let i = ri(e)
    for (; i && !bo(i); ) {
      if (_t(i) && !Ff(i)) return i
      i = ri(i)
    }
    return n
  }
  let r = y2(e, t)
  for (; r && IM(r) && Ff(r); ) r = y2(r, t)
  return r && bo(r) && Ff(r) && !T0(r) ? n : r || DM(e) || n
}
const u6 = async function (e) {
  const t = this.getOffsetParent || ET,
    n = this.getDimensions,
    r = await n(e.floating)
  return {
    reference: l6(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height }
  }
}
function c6(e) {
  return On(e).direction === 'rtl'
}
const d6 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: e6,
  getDocumentElement: _r,
  getClippingRect: o6,
  getOffsetParent: ET,
  getElementRects: u6,
  getClientRects: t6,
  getDimensions: a6,
  getScale: Ys,
  isElement: _t,
  isRTL: c6
}
function f6(e, t) {
  let n = null,
    r
  const i = _r(e)
  function s() {
    var a
    clearTimeout(r), (a = n) == null || a.disconnect(), (n = null)
  }
  function o(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), s()
    const { left: u, top: c, width: d, height: f } = e.getBoundingClientRect()
    if ((a || t(), !d || !f)) return
    const h = bu(c),
      v = bu(i.clientWidth - (u + d)),
      y = bu(i.clientHeight - (c + f)),
      x = bu(u),
      m = {
        rootMargin: -h + 'px ' + -v + 'px ' + -y + 'px ' + -x + 'px',
        threshold: Ht(0, zr(1, l)) || 1
      }
    let g = !0
    function E(S) {
      const C = S[0].intersectionRatio
      if (C !== l) {
        if (!g) return o()
        C
          ? o(!1, C)
          : (r = setTimeout(() => {
              o(!1, 1e-7)
            }, 1e3))
      }
      g = !1
    }
    try {
      n = new IntersectionObserver(E, { ...m, root: i.ownerDocument })
    } catch {
      n = new IntersectionObserver(E, m)
    }
    n.observe(e)
  }
  return o(!0), s
}
function h6(e, t, n, r) {
  r === void 0 && (r = {})
  const {
      ancestorScroll: i = !0,
      ancestorResize: s = !0,
      elementResize: o = typeof ResizeObserver == 'function',
      layoutShift: a = typeof IntersectionObserver == 'function',
      animationFrame: l = !1
    } = r,
    u = _0(e),
    c = i || s ? [...(u ? ol(u) : []), ...ol(t)] : []
  c.forEach(p => {
    i && p.addEventListener('scroll', n, { passive: !0 }), s && p.addEventListener('resize', n)
  })
  const d = u && a ? f6(u, n) : null
  let f = -1,
    h = null
  o &&
    ((h = new ResizeObserver(p => {
      let [m] = p
      m &&
        m.target === u &&
        h &&
        (h.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var g
          ;(g = h) == null || g.observe(t)
        }))),
        n()
    })),
    u && !l && h.observe(u),
    h.observe(t))
  let v,
    y = l ? es(e) : null
  l && x()
  function x() {
    const p = es(e)
    y && (p.x !== y.x || p.y !== y.y || p.width !== y.width || p.height !== y.height) && n(),
      (y = p),
      (v = requestAnimationFrame(x))
  }
  return (
    n(),
    () => {
      var p
      c.forEach(m => {
        i && m.removeEventListener('scroll', n), s && m.removeEventListener('resize', n)
      }),
        d == null || d(),
        (p = h) == null || p.disconnect(),
        (h = null),
        l && cancelAnimationFrame(v)
    }
  )
}
const jf = bd,
  p6 = ZM,
  m6 = YM,
  g6 = qM,
  v6 = QM,
  y6 = (e, t, n) => {
    const r = new Map(),
      i = { platform: d6, ...n },
      s = { ...i.platform, _c: r }
    return GM(e, t, { ...i, platform: s })
  }
var qu = typeof document < 'u' ? w.useLayoutEffect : w.useEffect
function $c(e, t) {
  if (e === t) return !0
  if (typeof e != typeof t) return !1
  if (typeof e == 'function' && e.toString() === t.toString()) return !0
  let n, r, i
  if (e && t && typeof e == 'object') {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1
      for (r = n; r-- !== 0; ) if (!$c(e[r], t[r])) return !1
      return !0
    }
    if (((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length)) return !1
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, i[r])) return !1
    for (r = n; r-- !== 0; ) {
      const s = i[r]
      if (!(s === '_owner' && e.$$typeof) && !$c(e[s], t[s])) return !1
    }
    return !0
  }
  return e !== e && t !== t
}
function ST(e) {
  return typeof window > 'u' ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function w2(e, t) {
  const n = ST(e)
  return Math.round(t * n) / n
}
function x2(e) {
  const t = w.useRef(e)
  return (
    qu(() => {
      t.current = e
    }),
    t
  )
}
function w6(e) {
  e === void 0 && (e = {})
  const {
      placement: t = 'bottom',
      strategy: n = 'absolute',
      middleware: r = [],
      platform: i,
      elements: { reference: s, floating: o } = {},
      transform: a = !0,
      whileElementsMounted: l,
      open: u
    } = e,
    [c, d] = w.useState({ x: 0, y: 0, strategy: n, placement: t, middlewareData: {}, isPositioned: !1 }),
    [f, h] = w.useState(r)
  $c(f, r) || h(r)
  const [v, y] = w.useState(null),
    [x, p] = w.useState(null),
    m = w.useCallback(ee => {
      ee !== C.current && ((C.current = ee), y(ee))
    }, []),
    g = w.useCallback(ee => {
      ee !== k.current && ((k.current = ee), p(ee))
    }, []),
    E = s || v,
    S = o || x,
    C = w.useRef(null),
    k = w.useRef(null),
    T = w.useRef(c),
    A = l != null,
    O = x2(l),
    D = x2(i),
    Z = w.useCallback(() => {
      if (!C.current || !k.current) return
      const ee = { placement: t, strategy: n, middleware: f }
      D.current && (ee.platform = D.current),
        y6(C.current, k.current, ee).then(R => {
          const $ = { ...R, isPositioned: !0 }
          re.current &&
            !$c(T.current, $) &&
            ((T.current = $),
            ht.flushSync(() => {
              d($)
            }))
        })
    }, [f, t, n, D])
  qu(() => {
    u === !1 &&
      T.current.isPositioned &&
      ((T.current.isPositioned = !1), d(ee => ({ ...ee, isPositioned: !1 })))
  }, [u])
  const re = w.useRef(!1)
  qu(
    () => (
      (re.current = !0),
      () => {
        re.current = !1
      }
    ),
    []
  ),
    qu(() => {
      if ((E && (C.current = E), S && (k.current = S), E && S)) {
        if (O.current) return O.current(E, S, Z)
        Z()
      }
    }, [E, S, Z, O, A])
  const M = w.useMemo(() => ({ reference: C, floating: k, setReference: m, setFloating: g }), [m, g]),
    W = w.useMemo(() => ({ reference: E, floating: S }), [E, S]),
    oe = w.useMemo(() => {
      const ee = { position: n, left: 0, top: 0 }
      if (!W.floating) return ee
      const R = w2(W.floating, c.x),
        $ = w2(W.floating, c.y)
      return a
        ? {
            ...ee,
            transform: 'translate(' + R + 'px, ' + $ + 'px)',
            ...(ST(W.floating) >= 1.5 && { willChange: 'transform' })
          }
        : { position: n, left: R, top: $ }
    }, [n, a, W.floating, c.x, c.y])
  return w.useMemo(
    () => ({ ...c, update: Z, refs: M, elements: W, floatingStyles: oe }),
    [c, Z, M, W, oe]
  )
}
const TT = (e, t) => ({ ...p6(e), options: [e, t] }),
  x6 = (e, t) => ({ ...m6(e), options: [e, t] }),
  E6 = (e, t) => ({ ...g6(e), options: [e, t] }),
  S6 = (e, t) => ({ ...v6(e), options: [e, t] }),
  CT = { ...Xf },
  T6 = CT.useInsertionEffect,
  C6 = T6 || (e => e())
function _T(e) {
  const t = w.useRef(() => {})
  return (
    C6(() => {
      t.current = e
    }),
    w.useCallback(function () {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
      return t.current == null ? void 0 : t.current(...r)
    }, [])
  )
}
var Ap = typeof document < 'u' ? w.useLayoutEffect : w.useEffect
let E2 = !1,
  _6 = 0
const S2 = () => 'floating-ui-' + Math.random().toString(36).slice(2, 6) + _6++
function b6() {
  const [e, t] = w.useState(() => (E2 ? S2() : void 0))
  return (
    Ap(() => {
      e == null && t(S2())
    }, []),
    w.useEffect(() => {
      E2 = !0
    }, []),
    e
  )
}
const k6 = CT.useId,
  P6 = k6 || b6
function R6() {
  const e = new Map()
  return {
    emit(t, n) {
      var r
      ;(r = e.get(t)) == null || r.forEach(i => i(n))
    },
    on(t, n) {
      e.set(t, [...(e.get(t) || []), n])
    },
    off(t, n) {
      var r
      e.set(t, ((r = e.get(t)) == null ? void 0 : r.filter(i => i !== n)) || [])
    }
  }
}
const A6 = w.createContext(null),
  O6 = w.createContext(null),
  L6 = () => {
    var e
    return ((e = w.useContext(A6)) == null ? void 0 : e.id) || null
  },
  M6 = () => w.useContext(O6),
  N6 = 'data-floating-ui-focusable'
function I6(e) {
  const { open: t = !1, onOpenChange: n, elements: r } = e,
    i = P6(),
    s = w.useRef({}),
    [o] = w.useState(() => R6()),
    a = L6() != null,
    [l, u] = w.useState(r.reference),
    c = _T((h, v, y) => {
      ;(s.current.openEvent = h ? v : void 0),
        o.emit('openchange', { open: h, event: v, reason: y, nested: a }),
        n == null || n(h, v, y)
    }),
    d = w.useMemo(() => ({ setPositionReference: u }), []),
    f = w.useMemo(
      () => ({
        reference: l || r.reference || null,
        floating: r.floating || null,
        domReference: r.reference
      }),
      [l, r.reference, r.floating]
    )
  return w.useMemo(
    () => ({ dataRef: s, open: t, onOpenChange: c, elements: f, events: o, floatingId: i, refs: d }),
    [t, c, f, o, i, d]
  )
}
function D6(e) {
  e === void 0 && (e = {})
  const { nodeId: t } = e,
    n = I6({ ...e, elements: { reference: null, floating: null, ...e.elements } }),
    r = e.rootContext || n,
    i = r.elements,
    [s, o] = w.useState(null),
    [a, l] = w.useState(null),
    c = (i == null ? void 0 : i.reference) || s,
    d = w.useRef(null),
    f = M6()
  Ap(() => {
    c && (d.current = c)
  }, [c])
  const h = w6({ ...e, elements: { ...i, ...(a && { reference: a }) } }),
    v = w.useCallback(
      g => {
        const E = _t(g)
          ? { getBoundingClientRect: () => g.getBoundingClientRect(), contextElement: g }
          : g
        l(E), h.refs.setReference(E)
      },
      [h.refs]
    ),
    y = w.useCallback(
      g => {
        ;(_t(g) || g === null) && ((d.current = g), o(g)),
          (_t(h.refs.reference.current) ||
            h.refs.reference.current === null ||
            (g !== null && !_t(g))) &&
            h.refs.setReference(g)
      },
      [h.refs]
    ),
    x = w.useMemo(
      () => ({ ...h.refs, setReference: y, setPositionReference: v, domReference: d }),
      [h.refs, y, v]
    ),
    p = w.useMemo(() => ({ ...h.elements, domReference: c }), [h.elements, c]),
    m = w.useMemo(() => ({ ...h, ...r, refs: x, elements: p, nodeId: t }), [h, x, p, t, r])
  return (
    Ap(() => {
      r.dataRef.current.floatingContext = m
      const g = f == null ? void 0 : f.nodesRef.current.find(E => E.id === t)
      g && (g.context = m)
    }),
    w.useMemo(() => ({ ...h, context: m, refs: x, elements: p }), [h, x, p, m])
  )
}
const T2 = 'active',
  C2 = 'selected'
function $f(e, t, n) {
  const r = new Map(),
    i = n === 'item'
  let s = e
  if (i && e) {
    const { [T2]: o, [C2]: a, ...l } = e
    s = l
  }
  return {
    ...(n === 'floating' && { tabIndex: -1, [N6]: '' }),
    ...s,
    ...t
      .map(o => {
        const a = o ? o[n] : null
        return typeof a == 'function' ? (e ? a(e) : null) : a
      })
      .concat(e)
      .reduce(
        (o, a) => (
          a &&
            Object.entries(a).forEach(l => {
              let [u, c] = l
              if (!(i && [T2, C2].includes(u)))
                if (u.indexOf('on') === 0) {
                  if ((r.has(u) || r.set(u, []), typeof c == 'function')) {
                    var d
                    ;(d = r.get(u)) == null || d.push(c),
                      (o[u] = function () {
                        for (var f, h = arguments.length, v = new Array(h), y = 0; y < h; y++)
                          v[y] = arguments[y]
                        return (f = r.get(u)) == null
                          ? void 0
                          : f.map(x => x(...v)).find(x => x !== void 0)
                      })
                  }
                } else o[u] = c
            }),
          o
        ),
        {}
      )
  }
}
function F6(e) {
  e === void 0 && (e = [])
  const t = e.map(a => (a == null ? void 0 : a.reference)),
    n = e.map(a => (a == null ? void 0 : a.floating)),
    r = e.map(a => (a == null ? void 0 : a.item)),
    i = w.useCallback(a => $f(a, e, 'reference'), t),
    s = w.useCallback(a => $f(a, e, 'floating'), n),
    o = w.useCallback(a => $f(a, e, 'item'), r)
  return w.useMemo(() => ({ getReferenceProps: i, getFloatingProps: s, getItemProps: o }), [i, s, o])
}
function _2(e, t) {
  return { ...e, rects: { ...e.rects, floating: { ...e.rects.floating, height: t } } }
}
const j6 = e => ({
  name: 'inner',
  options: e,
  async fn(t) {
    const {
        listRef: n,
        overflowRef: r,
        onFallbackChange: i,
        offset: s = 0,
        index: o = 0,
        minItemsVisible: a = 4,
        referenceOverflowThreshold: l = 0,
        scrollRef: u,
        ...c
      } = Fo(e, t),
      {
        rects: d,
        elements: { floating: f }
      } = t,
      h = n.current[o],
      v = (u == null ? void 0 : u.current) || f,
      y = f.clientTop || v.clientTop,
      x = f.clientTop !== 0,
      p = v.clientTop !== 0,
      m = f === v
    if (!h) return {}
    const g = {
        ...t,
        ...(await TT(-h.offsetTop - f.clientTop - d.reference.height / 2 - h.offsetHeight / 2 - s).fn(t))
      },
      E = await jf(_2(g, v.scrollHeight + y + f.clientTop), c),
      S = await jf(g, { ...c, elementContext: 'reference' }),
      C = Math.max(0, E.top),
      k = g.y + C,
      T = Math.max(0, v.scrollHeight + ((x && m) || p ? y * 2 : 0) - C - Math.max(0, E.bottom))
    return (
      (v.style.maxHeight = T + 'px'),
      (v.scrollTop = C),
      i &&
        (v.offsetHeight < h.offsetHeight * Math.min(a, n.current.length - 1) - 1 ||
        S.top >= -l ||
        S.bottom >= -l
          ? ht.flushSync(() => i(!0))
          : ht.flushSync(() => i(!1))),
      r && (r.current = await jf(_2({ ...g, y: k }, v.offsetHeight + y + f.clientTop), c)),
      { y: k }
    )
  }
})
function $6(e, t) {
  const { open: n, elements: r } = e,
    { enabled: i = !0, overflowRef: s, scrollRef: o, onChange: a } = t,
    l = _T(a),
    u = w.useRef(!1),
    c = w.useRef(null),
    d = w.useRef(null)
  w.useEffect(() => {
    if (!i) return
    function h(y) {
      if (y.ctrlKey || !v || s.current == null) return
      const x = y.deltaY,
        p = s.current.top >= -0.5,
        m = s.current.bottom >= -0.5,
        g = v.scrollHeight - v.clientHeight,
        E = x < 0 ? -1 : 1,
        S = x < 0 ? 'max' : 'min'
      v.scrollHeight <= v.clientHeight ||
        ((!p && x > 0) || (!m && x < 0)
          ? (y.preventDefault(),
            ht.flushSync(() => {
              l(C => C + Math[S](x, g * E))
            }))
          : /firefox/i.test(FM()) && (v.scrollTop += x))
    }
    const v = (o == null ? void 0 : o.current) || r.floating
    if (n && v)
      return (
        v.addEventListener('wheel', h),
        requestAnimationFrame(() => {
          ;(c.current = v.scrollTop), s.current != null && (d.current = { ...s.current })
        }),
        () => {
          ;(c.current = null), (d.current = null), v.removeEventListener('wheel', h)
        }
      )
  }, [i, n, r.floating, s, o, l])
  const f = w.useMemo(
    () => ({
      onKeyDown() {
        u.current = !0
      },
      onWheel() {
        u.current = !1
      },
      onPointerMove() {
        u.current = !1
      },
      onScroll() {
        const h = (o == null ? void 0 : o.current) || r.floating
        if (!(!s.current || !h || !u.current)) {
          if (c.current !== null) {
            const v = h.scrollTop - c.current
            ;((s.current.bottom < -0.5 && v < -1) || (s.current.top < -0.5 && v > 1)) &&
              ht.flushSync(() => l(y => y + v))
          }
          requestAnimationFrame(() => {
            c.current = h.scrollTop
          })
        }
      }
    }),
    [r.floating, l, s, o]
  )
  return w.useMemo(() => (i ? { floating: f } : {}), [i, f])
}
let Wl = w.createContext({
  styles: void 0,
  setReference: () => {},
  setFloating: () => {},
  getReferenceProps: () => ({}),
  getFloatingProps: () => ({}),
  slot: {}
})
Wl.displayName = 'FloatingContext'
let b0 = w.createContext(null)
b0.displayName = 'PlacementContext'
function V6(e) {
  return w.useMemo(() => (e ? (typeof e == 'string' ? { to: e } : e) : null), [e])
}
function B6() {
  return w.useContext(Wl).setReference
}
function z6() {
  let { getFloatingProps: e, slot: t } = w.useContext(Wl)
  return w.useCallback((...n) => Object.assign({}, e(...n), { 'data-anchor': t.anchor }), [e, t])
}
function U6(e = null) {
  e === !1 && (e = null), typeof e == 'string' && (e = { to: e })
  let t = w.useContext(b0),
    n = w.useMemo(
      () => e,
      [
        JSON.stringify(
          e,
          typeof HTMLElement < 'u' ? (i, s) => (s instanceof HTMLElement ? s.outerHTML : s) : void 0
        )
      ]
    )
  $e(() => {
    t == null || t(n ?? null)
  }, [t, n])
  let r = w.useContext(Wl)
  return w.useMemo(() => [r.setFloating, e ? r.styles : {}], [r.setFloating, e, r.styles])
}
let b2 = 4
function H6({ children: e, enabled: t = !0 }) {
  let [n, r] = w.useState(null),
    [i, s] = w.useState(0),
    o = w.useRef(null),
    [a, l] = w.useState(null)
  W6(a)
  let u = t && n !== null && a !== null,
    { to: c = 'bottom', gap: d = 0, offset: f = 0, padding: h = 0, inner: v } = G6(n, a),
    [y, x = 'center'] = c.split(' ')
  $e(() => {
    u && s(0)
  }, [u])
  let {
      refs: p,
      floatingStyles: m,
      context: g
    } = D6({
      open: u,
      placement:
        y === 'selection'
          ? x === 'center'
            ? 'bottom'
            : `bottom-${x}`
          : x === 'center'
            ? `${y}`
            : `${y}-${x}`,
      strategy: 'absolute',
      transform: !1,
      middleware: [
        TT({ mainAxis: y === 'selection' ? 0 : d, crossAxis: f }),
        x6({ padding: h }),
        y !== 'selection' && E6({ padding: h }),
        y === 'selection' && v
          ? j6({
              ...v,
              padding: h,
              overflowRef: o,
              offset: i,
              minItemsVisible: b2,
              referenceOverflowThreshold: h,
              onFallbackChange(D) {
                var Z, re
                if (!D) return
                let M = g.elements.floating
                if (!M) return
                let W = parseFloat(getComputedStyle(M).scrollPaddingBottom) || 0,
                  oe = Math.min(b2, M.childElementCount),
                  ee = 0,
                  R = 0
                for (let $ of (re = (Z = g.elements.floating) == null ? void 0 : Z.childNodes) != null
                  ? re
                  : [])
                  if ($ instanceof HTMLElement) {
                    let z = $.offsetTop,
                      V = z + $.clientHeight + W,
                      q = M.scrollTop,
                      F = q + M.clientHeight
                    if (z >= q && V <= F) oe--
                    else {
                      ;(R = Math.max(0, Math.min(V, F) - Math.max(z, q))), (ee = $.clientHeight)
                      break
                    }
                  }
                oe >= 1 &&
                  s($ => {
                    let z = ee * oe - R + W
                    return $ >= z ? $ : z
                  })
              }
            })
          : null,
        S6({
          padding: h,
          apply({ availableWidth: D, availableHeight: Z, elements: re }) {
            Object.assign(re.floating.style, {
              overflow: 'auto',
              maxWidth: `${D}px`,
              maxHeight: `min(var(--anchor-max-height, 100vh), ${Z}px)`
            })
          }
        })
      ].filter(Boolean),
      whileElementsMounted: h6
    }),
    [E = y, S = x] = g.placement.split('-')
  y === 'selection' && (E = 'selection')
  let C = w.useMemo(() => ({ anchor: [E, S].filter(Boolean).join(' ') }), [E, S]),
    k = $6(g, { overflowRef: o, onChange: s }),
    { getReferenceProps: T, getFloatingProps: A } = F6([k]),
    O = ce(D => {
      l(D), p.setFloating(D)
    })
  return w.createElement(
    b0.Provider,
    { value: r },
    w.createElement(
      Wl.Provider,
      {
        value: {
          setFloating: O,
          setReference: p.setReference,
          styles: m,
          getReferenceProps: T,
          getFloatingProps: A,
          slot: C
        }
      },
      e
    )
  )
}
function W6(e) {
  $e(() => {
    if (!e) return
    let t = new MutationObserver(() => {
      let n = window.getComputedStyle(e).maxHeight,
        r = parseFloat(n)
      if (isNaN(r)) return
      let i = parseInt(n)
      isNaN(i) || (r !== i && (e.style.maxHeight = `${Math.ceil(r)}px`))
    })
    return (
      t.observe(e, { attributes: !0, attributeFilter: ['style'] }),
      () => {
        t.disconnect()
      }
    )
  }, [e])
}
function G6(e, t) {
  var n, r, i
  let s = Vf((n = e == null ? void 0 : e.gap) != null ? n : 'var(--anchor-gap, 0)', t),
    o = Vf((r = e == null ? void 0 : e.offset) != null ? r : 'var(--anchor-offset, 0)', t),
    a = Vf((i = e == null ? void 0 : e.padding) != null ? i : 'var(--anchor-padding, 0)', t)
  return { ...e, gap: s, offset: o, padding: a }
}
function Vf(e, t, n = void 0) {
  let r = zl(),
    i = ce((l, u) => {
      if (l == null) return [n, null]
      if (typeof l == 'number') return [l, null]
      if (typeof l == 'string') {
        if (!u) return [n, null]
        let c = k2(l, u)
        return [
          c,
          d => {
            let f = bT(l)
            {
              let h = f.map(v => window.getComputedStyle(u).getPropertyValue(v))
              r.requestAnimationFrame(function v() {
                r.nextFrame(v)
                let y = !1
                for (let [p, m] of f.entries()) {
                  let g = window.getComputedStyle(u).getPropertyValue(m)
                  if (h[p] !== g) {
                    ;(h[p] = g), (y = !0)
                    break
                  }
                }
                if (!y) return
                let x = k2(l, u)
                c !== x && (d(x), (c = x))
              })
            }
            return r.dispose
          }
        ]
      }
      return [n, null]
    }),
    s = w.useMemo(() => i(e, t)[0], [e, t]),
    [o = s, a] = w.useState()
  return (
    $e(() => {
      let [l, u] = i(e, t)
      if ((a(l), !!u)) return u(a)
    }, [e, t]),
    o
  )
}
function bT(e) {
  let t = /var\((.*)\)/.exec(e)
  if (t) {
    let n = t[1].indexOf(',')
    if (n === -1) return [t[1]]
    let r = t[1].slice(0, n).trim(),
      i = t[1].slice(n + 1).trim()
    return i ? [r, ...bT(i)] : [r]
  }
  return []
}
function k2(e, t) {
  let n = document.createElement('div')
  t.appendChild(n),
    n.style.setProperty('margin-top', '0px', 'important'),
    n.style.setProperty('margin-top', e, 'important')
  let r = parseFloat(window.getComputedStyle(n).marginTop) || 0
  return t.removeChild(n), r
}
function q6({ children: e, freeze: t }) {
  let n = Op(t, e)
  return we.createElement(we.Fragment, null, n)
}
function Op(e, t) {
  let [n, r] = w.useState(t)
  return !e && n !== t && r(t), e ? n : t
}
let k0 = w.createContext(null)
k0.displayName = 'OpenClosedContext'
var al = (e => (
  (e[(e.Open = 1)] = 'Open'),
  (e[(e.Closed = 2)] = 'Closed'),
  (e[(e.Closing = 4)] = 'Closing'),
  (e[(e.Opening = 8)] = 'Opening'),
  e
))(al || {})
function K6() {
  return w.useContext(k0)
}
function Z6({ value: e, children: t }) {
  return we.createElement(k0.Provider, { value: e }, t)
}
function Y6(e) {
  function t() {
    document.readyState !== 'loading' && (e(), document.removeEventListener('DOMContentLoaded', t))
  }
  typeof window < 'u' && typeof document < 'u' && (document.addEventListener('DOMContentLoaded', t), t())
}
let Ci = []
Y6(() => {
  function e(t) {
    if (!(t.target instanceof HTMLElement) || t.target === document.body || Ci[0] === t.target) return
    let n = t.target
    ;(n = n.closest(kp)),
      Ci.unshift(n ?? t.target),
      (Ci = Ci.filter(r => r != null && r.isConnected)),
      Ci.splice(10)
  }
  window.addEventListener('click', e, { capture: !0 }),
    window.addEventListener('mousedown', e, { capture: !0 }),
    window.addEventListener('focus', e, { capture: !0 }),
    document.body.addEventListener('click', e, { capture: !0 }),
    document.body.addEventListener('mousedown', e, { capture: !0 }),
    document.body.addEventListener('focus', e, { capture: !0 })
})
function Q6(e) {
  throw new Error('Unexpected object: ' + e)
}
var Ge = (e => (
  (e[(e.First = 0)] = 'First'),
  (e[(e.Previous = 1)] = 'Previous'),
  (e[(e.Next = 2)] = 'Next'),
  (e[(e.Last = 3)] = 'Last'),
  (e[(e.Specific = 4)] = 'Specific'),
  (e[(e.Nothing = 5)] = 'Nothing'),
  e
))(Ge || {})
function P2(e, t) {
  let n = t.resolveItems()
  if (n.length <= 0) return null
  let r = t.resolveActiveIndex(),
    i = r ?? -1
  switch (e.focus) {
    case 0: {
      for (let s = 0; s < n.length; ++s) if (!t.resolveDisabled(n[s], s, n)) return s
      return r
    }
    case 1: {
      i === -1 && (i = n.length)
      for (let s = i - 1; s >= 0; --s) if (!t.resolveDisabled(n[s], s, n)) return s
      return r
    }
    case 2: {
      for (let s = i + 1; s < n.length; ++s) if (!t.resolveDisabled(n[s], s, n)) return s
      return r
    }
    case 3: {
      for (let s = n.length - 1; s >= 0; --s) if (!t.resolveDisabled(n[s], s, n)) return s
      return r
    }
    case 4: {
      for (let s = 0; s < n.length; ++s) if (t.resolveId(n[s], s, n) === e.id) return s
      return r
    }
    case 5:
      return null
    default:
      Q6(e)
  }
}
var P0 = (e => ((e[(e.Left = 0)] = 'Left'), (e[(e.Right = 2)] = 'Right'), e))(P0 || {})
function X6(e) {
  let t = ce(e),
    n = w.useRef(!1)
  w.useEffect(
    () => (
      (n.current = !1),
      () => {
        ;(n.current = !0),
          ZS(() => {
            n.current && t()
          })
      }
    ),
    [t]
  )
}
function J6() {
  let e = typeof document > 'u'
  return 'useSyncExternalStore' in Xf
    ? (t => t.useSyncExternalStore)(Xf)(
        () => () => {},
        () => !1,
        () => !e
      )
    : !1
}
function e7() {
  let e = J6(),
    [t, n] = w.useState(Hi.isHandoffComplete)
  return (
    t && Hi.isHandoffComplete === !1 && n(!1),
    w.useEffect(() => {
      t !== !0 && n(!0)
    }, [t]),
    w.useEffect(() => Hi.handoff(), []),
    e ? !1 : t
  )
}
let t7 = w.createContext(!1)
function n7() {
  return w.useContext(t7)
}
function r7(e) {
  let t = n7(),
    n = w.useContext(PT),
    r = Td(e),
    [i, s] = w.useState(() => {
      var o
      if (!t && n !== null) return (o = n.current) != null ? o : null
      if (Hi.isServer) return null
      let a = r == null ? void 0 : r.getElementById('headlessui-portal-root')
      if (a) return a
      if (r === null) return null
      let l = r.createElement('div')
      return l.setAttribute('id', 'headlessui-portal-root'), r.body.appendChild(l)
    })
  return (
    w.useEffect(() => {
      i !== null && ((r != null && r.body.contains(i)) || r == null || r.body.appendChild(i))
    }, [i, r]),
    w.useEffect(() => {
      t || (n !== null && s(n.current))
    }, [n, s, t]),
    i
  )
}
let kT = w.Fragment,
  i7 = Nn(function (e, t) {
    let n = e,
      r = w.useRef(null),
      i = Cr(
        LL(c => {
          r.current = c
        }),
        t
      ),
      s = Td(r),
      o = r7(r),
      [a] = w.useState(() => {
        var c
        return Hi.isServer ? null : (c = s == null ? void 0 : s.createElement('div')) != null ? c : null
      }),
      l = w.useContext(l7),
      u = e7()
    return (
      $e(() => {
        !o || !a || o.contains(a) || (a.setAttribute('data-headlessui-portal', ''), o.appendChild(a))
      }, [o, a]),
      $e(() => {
        if (a && l) return l.register(a)
      }, [l, a]),
      X6(() => {
        var c
        !o ||
          !a ||
          (a instanceof Node && o.contains(a) && o.removeChild(a),
          o.childNodes.length <= 0 && ((c = o.parentElement) == null || c.removeChild(o)))
      }),
      u
        ? !o || !a
          ? null
          : ht.createPortal(
              Mn({ ourProps: { ref: i }, theirProps: n, slot: {}, defaultTag: kT, name: 'Portal' }),
              a
            )
        : null
    )
  })
function s7(e, t) {
  let n = Cr(t),
    { enabled: r = !0, ...i } = e
  return r
    ? we.createElement(i7, { ...i, ref: n })
    : Mn({ ourProps: { ref: n }, theirProps: i, slot: {}, defaultTag: kT, name: 'Portal' })
}
let o7 = w.Fragment,
  PT = w.createContext(null)
function a7(e, t) {
  let { target: n, ...r } = e,
    i = { ref: Cr(t) }
  return we.createElement(
    PT.Provider,
    { value: n },
    Mn({ ourProps: i, theirProps: r, defaultTag: o7, name: 'Popover.Group' })
  )
}
let l7 = w.createContext(null),
  u7 = Nn(s7),
  c7 = Nn(a7),
  d7 = Object.assign(u7, { Group: c7 })
var f7 = {},
  h7 = (e => ((e[(e.Open = 0)] = 'Open'), (e[(e.Closed = 1)] = 'Closed'), e))(h7 || {}),
  p7 = (e => ((e[(e.Single = 0)] = 'Single'), (e[(e.Multi = 1)] = 'Multi'), e))(p7 || {}),
  m7 = (e => (
    (e[(e.Pointer = 0)] = 'Pointer'), (e[(e.Focus = 1)] = 'Focus'), (e[(e.Other = 2)] = 'Other'), e
  ))(m7 || {}),
  g7 = (e => (
    (e[(e.OpenCombobox = 0)] = 'OpenCombobox'),
    (e[(e.CloseCombobox = 1)] = 'CloseCombobox'),
    (e[(e.GoToOption = 2)] = 'GoToOption'),
    (e[(e.SetTyping = 3)] = 'SetTyping'),
    (e[(e.RegisterOption = 4)] = 'RegisterOption'),
    (e[(e.UnregisterOption = 5)] = 'UnregisterOption'),
    (e[(e.SetActivationTrigger = 6)] = 'SetActivationTrigger'),
    (e[(e.UpdateVirtualConfiguration = 7)] = 'UpdateVirtualConfiguration'),
    (e[(e.SetInputElement = 8)] = 'SetInputElement'),
    (e[(e.SetButtonElement = 9)] = 'SetButtonElement'),
    (e[(e.SetOptionsElement = 10)] = 'SetOptionsElement'),
    e
  ))(g7 || {})
function Bf(e, t = n => n) {
  let n = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null,
    r = t(e.options.slice()),
    i =
      r.length > 0 && r[0].dataRef.current.order !== null
        ? r.sort((o, a) => o.dataRef.current.order - a.dataRef.current.order)
        : pM(r, o => o.dataRef.current.domRef.current),
    s = n ? i.indexOf(n) : null
  return s === -1 && (s = null), { options: i, activeOptionIndex: s }
}
let v7 = {
    1(e) {
      var t
      return ((t = e.dataRef.current) != null && t.disabled) || e.comboboxState === 1
        ? e
        : {
            ...e,
            activeOptionIndex: null,
            comboboxState: 1,
            isTyping: !1,
            activationTrigger: 2,
            __demoMode: !1
          }
    },
    0(e) {
      var t, n
      if (((t = e.dataRef.current) != null && t.disabled) || e.comboboxState === 0) return e
      if ((n = e.dataRef.current) != null && n.value) {
        let r = e.dataRef.current.calculateIndex(e.dataRef.current.value)
        if (r !== -1) return { ...e, activeOptionIndex: r, comboboxState: 0, __demoMode: !1 }
      }
      return { ...e, comboboxState: 0, __demoMode: !1 }
    },
    3(e, t) {
      return e.isTyping === t.isTyping ? e : { ...e, isTyping: t.isTyping }
    },
    2(e, t) {
      var n, r, i, s
      if (
        ((n = e.dataRef.current) != null && n.disabled) ||
        (e.optionsElement &&
          !((r = e.dataRef.current) != null && r.optionsPropsRef.current.static) &&
          e.comboboxState === 1)
      )
        return e
      if (e.virtual) {
        let { options: u, disabled: c } = e.virtual,
          d =
            t.focus === Ge.Specific
              ? t.idx
              : P2(t, {
                  resolveItems: () => u,
                  resolveActiveIndex: () => {
                    var h, v
                    return (v = (h = e.activeOptionIndex) != null ? h : u.findIndex(y => !c(y))) != null
                      ? v
                      : null
                  },
                  resolveDisabled: c,
                  resolveId() {
                    throw new Error('Function not implemented.')
                  }
                }),
          f = (i = t.trigger) != null ? i : 2
        return e.activeOptionIndex === d && e.activationTrigger === f
          ? e
          : { ...e, activeOptionIndex: d, activationTrigger: f, isTyping: !1, __demoMode: !1 }
      }
      let o = Bf(e)
      if (o.activeOptionIndex === null) {
        let u = o.options.findIndex(c => !c.dataRef.current.disabled)
        u !== -1 && (o.activeOptionIndex = u)
      }
      let a =
          t.focus === Ge.Specific
            ? t.idx
            : P2(t, {
                resolveItems: () => o.options,
                resolveActiveIndex: () => o.activeOptionIndex,
                resolveId: u => u.id,
                resolveDisabled: u => u.dataRef.current.disabled
              }),
        l = (s = t.trigger) != null ? s : 2
      return e.activeOptionIndex === a && e.activationTrigger === l
        ? e
        : { ...e, ...o, isTyping: !1, activeOptionIndex: a, activationTrigger: l, __demoMode: !1 }
    },
    4: (e, t) => {
      var n, r, i
      if ((n = e.dataRef.current) != null && n.virtual)
        return { ...e, options: [...e.options, t.payload] }
      let s = t.payload,
        o = Bf(e, l => (l.push(s), l))
      e.activeOptionIndex === null &&
        (r = e.dataRef.current) != null &&
        r.isSelected(t.payload.dataRef.current.value) &&
        (o.activeOptionIndex = o.options.indexOf(s))
      let a = { ...e, ...o, activationTrigger: 2 }
      return (
        (i = e.dataRef.current) != null &&
          i.__demoMode &&
          e.dataRef.current.value === void 0 &&
          (a.activeOptionIndex = 0),
        a
      )
    },
    5: (e, t) => {
      var n
      if ((n = e.dataRef.current) != null && n.virtual)
        return { ...e, options: e.options.filter(i => i.id !== t.id) }
      let r = Bf(e, i => {
        let s = i.findIndex(o => o.id === t.id)
        return s !== -1 && i.splice(s, 1), i
      })
      return { ...e, ...r, activationTrigger: 2 }
    },
    6: (e, t) => (e.activationTrigger === t.trigger ? e : { ...e, activationTrigger: t.trigger }),
    7: (e, t) => {
      var n, r
      if (e.virtual === null)
        return {
          ...e,
          virtual: { options: t.options, disabled: (n = t.disabled) != null ? n : () => !1 }
        }
      if (e.virtual.options === t.options && e.virtual.disabled === t.disabled) return e
      let i = e.activeOptionIndex
      if (e.activeOptionIndex !== null) {
        let s = t.options.indexOf(e.virtual.options[e.activeOptionIndex])
        s !== -1 ? (i = s) : (i = null)
      }
      return {
        ...e,
        activeOptionIndex: i,
        virtual: { options: t.options, disabled: (r = t.disabled) != null ? r : () => !1 }
      }
    },
    8: (e, t) => (e.inputElement === t.element ? e : { ...e, inputElement: t.element }),
    9: (e, t) => (e.buttonElement === t.element ? e : { ...e, buttonElement: t.element }),
    10: (e, t) => (e.optionsElement === t.element ? e : { ...e, optionsElement: t.element })
  },
  R0 = w.createContext(null)
R0.displayName = 'ComboboxActionsContext'
function Gl(e) {
  let t = w.useContext(R0)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, Gl), n)
  }
  return t
}
let RT = w.createContext(null)
function y7(e) {
  let t = jo('VirtualProvider'),
    { options: n } = t.virtual,
    [r, i] = w.useMemo(() => {
      let u = t.optionsElement
      if (!u) return [0, 0]
      let c = window.getComputedStyle(u)
      return [
        parseFloat(c.paddingBlockStart || c.paddingTop),
        parseFloat(c.paddingBlockEnd || c.paddingBottom)
      ]
    }, [t.optionsElement]),
    s = tM({
      enabled: n.length !== 0,
      scrollPaddingStart: r,
      scrollPaddingEnd: i,
      count: n.length,
      estimateSize() {
        return 40
      },
      getScrollElement() {
        return t.optionsElement
      },
      overscan: 12
    }),
    [o, a] = w.useState(0)
  $e(() => {
    a(u => u + 1)
  }, [n])
  let l = s.getVirtualItems()
  return l.length === 0
    ? null
    : we.createElement(
        RT.Provider,
        { value: s },
        we.createElement(
          'div',
          {
            style: { position: 'relative', width: '100%', height: `${s.getTotalSize()}px` },
            ref: u => {
              if (u) {
                if ((typeof process < 'u' && f7.JEST_WORKER_ID !== void 0) || t.activationTrigger === 0)
                  return
                t.activeOptionIndex !== null &&
                  n.length > t.activeOptionIndex &&
                  s.scrollToIndex(t.activeOptionIndex)
              }
            }
          },
          l.map(u => {
            var c
            return we.createElement(
              w.Fragment,
              { key: u.key },
              we.cloneElement(
                (c = e.children) == null ? void 0 : c.call(e, { ...e.slot, option: n[u.index] }),
                {
                  key: `${o}-${u.key}`,
                  'data-index': u.index,
                  'aria-setsize': n.length,
                  'aria-posinset': u.index + 1,
                  style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    transform: `translateY(${u.start}px)`,
                    overflowAnchor: 'none'
                  }
                }
              )
            )
          })
        )
      )
}
let ll = w.createContext(null)
ll.displayName = 'ComboboxDataContext'
function jo(e) {
  let t = w.useContext(ll)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, jo), n)
  }
  return t
}
function w7(e, t) {
  return mr(t.type, v7, e, t)
}
let x7 = w.Fragment
function E7(e, t) {
  var n, r
  let i = y0(),
    {
      value: s,
      defaultValue: o,
      onChange: a,
      form: l,
      name: u,
      by: c,
      disabled: d = i || !1,
      onClose: f,
      __demoMode: h = !1,
      multiple: v = !1,
      immediate: y = !1,
      virtual: x = null,
      nullable: p,
      ...m
    } = e,
    g = SL(o),
    [E = v ? [] : void 0, S] = EL(s, a, g),
    [C, k] = w.useReducer(w7, {
      dataRef: w.createRef(),
      comboboxState: h ? 0 : 1,
      isTyping: !1,
      options: [],
      virtual: x ? { options: x.options, disabled: (n = x.disabled) != null ? n : () => !1 } : null,
      activeOptionIndex: null,
      activationTrigger: 2,
      inputElement: null,
      buttonElement: null,
      optionsElement: null,
      __demoMode: h
    }),
    T = w.useRef(!1),
    A = w.useRef({ static: !1, hold: !1 }),
    O = rM(c),
    D = ce(te =>
      x
        ? c === null
          ? x.options.indexOf(te)
          : x.options.findIndex(Q => O(Q, te))
        : C.options.findIndex(Q => O(Q.dataRef.current.value, te))
    ),
    Z = w.useCallback(te => mr(M.mode, { 1: () => E.some(Q => O(Q, te)), 0: () => O(E, te) }), [E]),
    re = ce(te => C.activeOptionIndex === D(te)),
    M = w.useMemo(
      () => ({
        ...C,
        immediate: y,
        optionsPropsRef: A,
        value: E,
        defaultValue: g,
        disabled: d,
        mode: v ? 1 : 0,
        virtual: x ? C.virtual : null,
        get activeOptionIndex() {
          if (
            T.current &&
            C.activeOptionIndex === null &&
            (x ? x.options.length > 0 : C.options.length > 0)
          ) {
            if (x) {
              let Q = x.options.findIndex(Te => {
                var nn, Vt
                return !((Vt = (nn = x.disabled) == null ? void 0 : nn.call(x, Te)) != null && Vt)
              })
              if (Q !== -1) return Q
            }
            let te = C.options.findIndex(Q => !Q.dataRef.current.disabled)
            if (te !== -1) return te
          }
          return C.activeOptionIndex
        },
        calculateIndex: D,
        compare: O,
        isSelected: Z,
        isActive: re
      }),
      [E, g, d, v, h, C, x]
    )
  $e(() => {
    var te
    x && k({ type: 7, options: x.options, disabled: (te = x.disabled) != null ? te : null })
  }, [x, x == null ? void 0 : x.options, x == null ? void 0 : x.disabled]),
    $e(() => {
      C.dataRef.current = M
    }, [M])
  let W = M.comboboxState === 0
  vM(W, [M.buttonElement, M.inputElement, M.optionsElement], () => Oe.closeCombobox())
  let oe = w.useMemo(() => {
      var te, Q, Te
      return {
        open: M.comboboxState === 0,
        disabled: d,
        activeIndex: M.activeOptionIndex,
        activeOption:
          M.activeOptionIndex === null
            ? null
            : M.virtual
              ? M.virtual.options[(te = M.activeOptionIndex) != null ? te : 0]
              : (Te = (Q = M.options[M.activeOptionIndex]) == null ? void 0 : Q.dataRef.current.value) !=
                  null
                ? Te
                : null,
        value: E
      }
    }, [M, d, E]),
    ee = ce(() => {
      if (M.activeOptionIndex !== null) {
        if ((Oe.setIsTyping(!1), M.virtual)) F(M.virtual.options[M.activeOptionIndex])
        else {
          let { dataRef: te } = M.options[M.activeOptionIndex]
          F(te.current.value)
        }
        Oe.goToOption(Ge.Specific, M.activeOptionIndex)
      }
    }),
    R = ce(() => {
      k({ type: 0 }), (T.current = !0)
    }),
    $ = ce(() => {
      k({ type: 1 }), (T.current = !1), f == null || f()
    }),
    z = ce(te => {
      k({ type: 3, isTyping: te })
    }),
    V = ce(
      (te, Q, Te) => (
        (T.current = !1),
        te === Ge.Specific
          ? k({ type: 2, focus: Ge.Specific, idx: Q, trigger: Te })
          : k({ type: 2, focus: te, trigger: Te })
      )
    ),
    q = ce(
      (te, Q) => (
        k({ type: 4, payload: { id: te, dataRef: Q } }),
        () => {
          M.isActive(Q.current.value) && (T.current = !0), k({ type: 5, id: te })
        }
      )
    ),
    F = ce(te =>
      mr(M.mode, {
        0() {
          return S == null ? void 0 : S(te)
        },
        1() {
          let Q = M.value.slice(),
            Te = Q.findIndex(nn => O(nn, te))
          return Te === -1 ? Q.push(te) : Q.splice(Te, 1), S == null ? void 0 : S(Q)
        }
      })
    ),
    ye = ce(te => {
      k({ type: 6, trigger: te })
    }),
    ne = ce(te => {
      k({ type: 8, element: te })
    }),
    Ce = ce(te => {
      k({ type: 9, element: te })
    }),
    Ee = ce(te => {
      k({ type: 10, element: te })
    }),
    Oe = w.useMemo(
      () => ({
        onChange: F,
        registerOption: q,
        goToOption: V,
        setIsTyping: z,
        closeCombobox: $,
        openCombobox: R,
        setActivationTrigger: ye,
        selectActiveOption: ee,
        setInputElement: ne,
        setButtonElement: Ce,
        setOptionsElement: Ee
      }),
      []
    ),
    [Pe, Ye] = FL(),
    yt = t === null ? {} : { ref: t },
    $t = w.useCallback(() => {
      if (g !== void 0) return S == null ? void 0 : S(g)
    }, [S, g])
  return we.createElement(
    Ye,
    {
      value: Pe,
      props: { htmlFor: (r = M.inputElement) == null ? void 0 : r.id },
      slot: { open: M.comboboxState === 0, disabled: d }
    },
    we.createElement(
      H6,
      null,
      we.createElement(
        R0.Provider,
        { value: Oe },
        we.createElement(
          ll.Provider,
          { value: M },
          we.createElement(
            Z6,
            { value: mr(M.comboboxState, { 0: al.Open, 1: al.Closed }) },
            u != null &&
              we.createElement(kL, {
                disabled: d,
                data: E != null ? { [u]: E } : {},
                form: l,
                onReset: $t
              }),
            Mn({ ourProps: yt, theirProps: m, slot: oe, defaultTag: x7, name: 'Combobox' })
          )
        )
      )
    )
  )
}
let S7 = 'input'
function T7(e, t) {
  var n, r, i, s, o
  let a = jo('Combobox.Input'),
    l = Gl('Combobox.Input'),
    u = w.useId(),
    c = tT(),
    {
      id: d = c || `headlessui-combobox-input-${u}`,
      onChange: f,
      displayValue: h,
      disabled: v = a.disabled || !1,
      autoFocus: y = !1,
      type: x = 'text',
      ...p
    } = e,
    m = w.useRef(null),
    g = Cr(m, t, B6(), l.setInputElement),
    E = Td(a.inputElement),
    S = zl(),
    C = ce(() => {
      l.onChange(null), a.optionsElement && (a.optionsElement.scrollTop = 0), l.goToOption(Ge.Nothing)
    }),
    k = w.useMemo(() => {
      var F
      return typeof h == 'function' && a.value !== void 0
        ? (F = h(a.value)) != null
          ? F
          : ''
        : typeof a.value == 'string'
          ? a.value
          : ''
    }, [a.value, h])
  h2(
    ([F, ye], [ne, Ce]) => {
      if (a.isTyping) return
      let Ee = m.current
      Ee &&
        (((Ce === 0 && ye === 1) || F !== ne) && (Ee.value = F),
        requestAnimationFrame(() => {
          if (a.isTyping || !Ee || (E == null ? void 0 : E.activeElement) !== Ee) return
          let { selectionStart: Oe, selectionEnd: Pe } = Ee
          Math.abs((Pe ?? 0) - (Oe ?? 0)) === 0 &&
            Oe === 0 &&
            Ee.setSelectionRange(Ee.value.length, Ee.value.length)
        }))
    },
    [k, a.comboboxState, E, a.isTyping]
  ),
    h2(
      ([F], [ye]) => {
        if (F === 0 && ye === 1) {
          if (a.isTyping) return
          let ne = m.current
          if (!ne) return
          let Ce = ne.value,
            { selectionStart: Ee, selectionEnd: Oe, selectionDirection: Pe } = ne
          ;(ne.value = ''),
            (ne.value = Ce),
            Pe !== null ? ne.setSelectionRange(Ee, Oe, Pe) : ne.setSelectionRange(Ee, Oe)
        }
      },
      [a.comboboxState]
    )
  let T = w.useRef(!1),
    A = ce(() => {
      T.current = !0
    }),
    O = ce(() => {
      S.nextFrame(() => {
        T.current = !1
      })
    }),
    D = ce(F => {
      switch ((l.setIsTyping(!0), F.key)) {
        case Ct.Enter:
          if (a.comboboxState !== 0 || T.current) return
          if ((F.preventDefault(), F.stopPropagation(), a.activeOptionIndex === null)) {
            l.closeCombobox()
            return
          }
          l.selectActiveOption(), a.mode === 0 && l.closeCombobox()
          break
        case Ct.ArrowDown:
          return (
            F.preventDefault(),
            F.stopPropagation(),
            mr(a.comboboxState, { 0: () => l.goToOption(Ge.Next), 1: () => l.openCombobox() })
          )
        case Ct.ArrowUp:
          return (
            F.preventDefault(),
            F.stopPropagation(),
            mr(a.comboboxState, {
              0: () => l.goToOption(Ge.Previous),
              1: () => {
                ht.flushSync(() => l.openCombobox()), a.value || l.goToOption(Ge.Last)
              }
            })
          )
        case Ct.Home:
          if (F.shiftKey) break
          return F.preventDefault(), F.stopPropagation(), l.goToOption(Ge.First)
        case Ct.PageUp:
          return F.preventDefault(), F.stopPropagation(), l.goToOption(Ge.First)
        case Ct.End:
          if (F.shiftKey) break
          return F.preventDefault(), F.stopPropagation(), l.goToOption(Ge.Last)
        case Ct.PageDown:
          return F.preventDefault(), F.stopPropagation(), l.goToOption(Ge.Last)
        case Ct.Escape:
          return a.comboboxState !== 0
            ? void 0
            : (F.preventDefault(),
              a.optionsElement && !a.optionsPropsRef.current.static && F.stopPropagation(),
              a.mode === 0 && a.value === null && C(),
              l.closeCombobox())
        case Ct.Tab:
          if (a.comboboxState !== 0) return
          a.mode === 0 && a.activationTrigger !== 1 && l.selectActiveOption(), l.closeCombobox()
          break
      }
    }),
    Z = ce(F => {
      f == null || f(F), a.mode === 0 && F.target.value === '' && C(), l.openCombobox()
    }),
    re = ce(F => {
      var ye, ne, Ce
      let Ee = (ye = F.relatedTarget) != null ? ye : Ci.find(Oe => Oe !== F.currentTarget)
      if (
        !((ne = a.optionsElement) != null && ne.contains(Ee)) &&
        !((Ce = a.buttonElement) != null && Ce.contains(Ee)) &&
        a.comboboxState === 0
      )
        return F.preventDefault(), a.mode === 0 && a.value === null && C(), l.closeCombobox()
    }),
    M = ce(F => {
      var ye, ne, Ce
      let Ee = (ye = F.relatedTarget) != null ? ye : Ci.find(Oe => Oe !== F.currentTarget)
      ;((ne = a.buttonElement) != null && ne.contains(Ee)) ||
        ((Ce = a.optionsElement) != null && Ce.contains(Ee)) ||
        a.disabled ||
        (a.immediate &&
          a.comboboxState !== 0 &&
          S.microTask(() => {
            ht.flushSync(() => l.openCombobox()), l.setActivationTrigger(1)
          }))
    }),
    W = Sd(),
    oe = ML(),
    { isFocused: ee, focusProps: R } = KS({ autoFocus: y }),
    { isHovered: $, hoverProps: z } = qS({ isDisabled: v }),
    V = w.useMemo(
      () => ({ open: a.comboboxState === 0, disabled: v, hover: $, focus: ee, autofocus: y }),
      [a, $, ee, y, v]
    ),
    q = w0(
      {
        ref: g,
        id: d,
        role: 'combobox',
        type: x,
        'aria-controls': (n = a.optionsElement) == null ? void 0 : n.id,
        'aria-expanded': a.comboboxState === 0,
        'aria-activedescendant':
          a.activeOptionIndex === null
            ? void 0
            : a.virtual
              ? (r = a.options.find(
                  F =>
                    !F.dataRef.current.disabled &&
                    a.compare(F.dataRef.current.value, a.virtual.options[a.activeOptionIndex])
                )) == null
                ? void 0
                : r.id
              : (i = a.options[a.activeOptionIndex]) == null
                ? void 0
                : i.id,
        'aria-labelledby': W,
        'aria-describedby': oe,
        'aria-autocomplete': 'list',
        defaultValue:
          (o =
            (s = e.defaultValue) != null
              ? s
              : a.defaultValue !== void 0
                ? h == null
                  ? void 0
                  : h(a.defaultValue)
                : null) != null
            ? o
            : a.defaultValue,
        disabled: v || void 0,
        autoFocus: y,
        onCompositionStart: A,
        onCompositionEnd: O,
        onKeyDown: D,
        onChange: Z,
        onFocus: M,
        onBlur: re
      },
      R,
      z
    )
  return Mn({ ourProps: q, theirProps: p, slot: V, defaultTag: S7, name: 'Combobox.Input' })
}
let C7 = 'button'
function _7(e, t) {
  var n
  let r = jo('Combobox.Button'),
    i = Gl('Combobox.Button'),
    s = Cr(t, i.setButtonElement),
    o = w.useId(),
    {
      id: a = `headlessui-combobox-button-${o}`,
      disabled: l = r.disabled || !1,
      autoFocus: u = !1,
      ...c
    } = e,
    d = dT(r.inputElement),
    f = ce(k => {
      switch (k.key) {
        case Ct.Space:
        case Ct.Enter:
          k.preventDefault(),
            k.stopPropagation(),
            r.comboboxState === 1 && ht.flushSync(() => i.openCombobox()),
            d()
          return
        case Ct.ArrowDown:
          k.preventDefault(),
            k.stopPropagation(),
            r.comboboxState === 1 &&
              (ht.flushSync(() => i.openCombobox()), r.value || i.goToOption(Ge.First)),
            d()
          return
        case Ct.ArrowUp:
          k.preventDefault(),
            k.stopPropagation(),
            r.comboboxState === 1 &&
              (ht.flushSync(() => i.openCombobox()), r.value || i.goToOption(Ge.Last)),
            d()
          return
        case Ct.Escape:
          if (r.comboboxState !== 0) return
          k.preventDefault(),
            r.optionsElement && !r.optionsPropsRef.current.static && k.stopPropagation(),
            ht.flushSync(() => i.closeCombobox()),
            d()
          return
        default:
          return
      }
    }),
    h = ce(k => {
      k.preventDefault(),
        !AL(k.currentTarget) &&
          (k.button === P0.Left && (r.comboboxState === 0 ? i.closeCombobox() : i.openCombobox()), d())
    }),
    v = Sd([a]),
    { isFocusVisible: y, focusProps: x } = KS({ autoFocus: u }),
    { isHovered: p, hoverProps: m } = qS({ isDisabled: l }),
    { pressed: g, pressProps: E } = vL({ disabled: l }),
    S = w.useMemo(
      () => ({
        open: r.comboboxState === 0,
        active: g || r.comboboxState === 0,
        disabled: l,
        value: r.value,
        hover: p,
        focus: y
      }),
      [r, p, y, g, l]
    ),
    C = w0(
      {
        ref: s,
        id: a,
        type: wM(e, r.buttonElement),
        tabIndex: -1,
        'aria-haspopup': 'listbox',
        'aria-controls': (n = r.optionsElement) == null ? void 0 : n.id,
        'aria-expanded': r.comboboxState === 0,
        'aria-labelledby': v,
        disabled: l || void 0,
        autoFocus: u,
        onMouseDown: h,
        onKeyDown: f
      },
      x,
      m,
      E
    )
  return Mn({ ourProps: C, theirProps: c, slot: S, defaultTag: C7, name: 'Combobox.Button' })
}
let b7 = 'div',
  k7 = _p.RenderStrategy | _p.Static
function P7(e, t) {
  var n, r, i
  let s = w.useId(),
    {
      id: o = `headlessui-combobox-options-${s}`,
      hold: a = !1,
      anchor: l,
      portal: u = !1,
      modal: c = !0,
      transition: d = !1,
      ...f
    } = e,
    h = jo('Combobox.Options'),
    v = Gl('Combobox.Options'),
    y = V6(l)
  y && (u = !0)
  let [x, p] = U6(y),
    [m, g] = w.useState(null),
    E = z6(),
    S = Cr(t, y ? x : null, v.setOptionsElement, g),
    C = Td(h.optionsElement),
    k = K6(),
    [T, A] = AM(d, m, k !== null ? (k & al.Open) === al.Open : h.comboboxState === 0)
  lM(T, h.inputElement, v.closeCombobox)
  let O = h.__demoMode ? !1 : c && h.comboboxState === 0
  _M(O, C)
  let D = h.__demoMode ? !1 : c && h.comboboxState === 0
  aM(D, {
    allowed: w.useCallback(
      () => [h.inputElement, h.buttonElement, h.optionsElement],
      [h.inputElement, h.buttonElement, h.optionsElement]
    )
  }),
    $e(() => {
      var V
      h.optionsPropsRef.current.static = (V = e.static) != null ? V : !1
    }, [h.optionsPropsRef, e.static]),
    $e(() => {
      h.optionsPropsRef.current.hold = a
    }, [h.optionsPropsRef, a]),
    NM(h.comboboxState === 0, {
      container: h.optionsElement,
      accept(V) {
        return V.getAttribute('role') === 'option'
          ? NodeFilter.FILTER_REJECT
          : V.hasAttribute('role')
            ? NodeFilter.FILTER_SKIP
            : NodeFilter.FILTER_ACCEPT
      },
      walk(V) {
        V.setAttribute('role', 'none')
      }
    })
  let Z = Sd([(n = h.buttonElement) == null ? void 0 : n.id]),
    re = w.useMemo(() => ({ open: h.comboboxState === 0, option: void 0 }), [h.comboboxState]),
    M = ce(() => {
      v.setActivationTrigger(0)
    }),
    W = ce(V => {
      V.preventDefault(), v.setActivationTrigger(0)
    }),
    oe = w0(y ? E() : {}, {
      'aria-labelledby': Z,
      role: 'listbox',
      'aria-multiselectable': h.mode === 1 ? !0 : void 0,
      id: o,
      ref: S,
      style: {
        ...f.style,
        ...p,
        '--input-width': l2(h.inputElement, !0).width,
        '--button-width': l2(h.buttonElement, !0).width
      },
      onWheel: h.activationTrigger === 0 ? void 0 : M,
      onMouseDown: W,
      ...RM(A)
    }),
    ee = T && h.comboboxState === 1,
    R = Op(ee, (r = h.virtual) == null ? void 0 : r.options),
    $ = Op(ee, h.value),
    z = ce(V => h.compare($, V))
  if (h.virtual) {
    if (R === void 0) throw new Error('Missing `options` in virtual mode')
    Object.assign(f, {
      children: we.createElement(
        ll.Provider,
        { value: R !== h.virtual.options ? { ...h, virtual: { ...h.virtual, options: R } } : h },
        we.createElement(y7, { slot: re }, f.children)
      )
    })
  }
  return we.createElement(
    d7,
    { enabled: u ? e.static || T : !1 },
    we.createElement(
      ll.Provider,
      { value: h.mode === 1 ? h : { ...h, isSelected: z } },
      Mn({
        ourProps: oe,
        theirProps: {
          ...f,
          children: we.createElement(
            q6,
            { freeze: ee },
            typeof f.children == 'function'
              ? (i = f.children) == null
                ? void 0
                : i.call(f, re)
              : f.children
          )
        },
        slot: re,
        defaultTag: b7,
        features: k7,
        visible: T,
        name: 'Combobox.Options'
      })
    )
  )
}
let R7 = 'div'
function A7(e, t) {
  var n, r, i, s
  let o = jo('Combobox.Option'),
    a = Gl('Combobox.Option'),
    l = w.useId(),
    {
      id: u = `headlessui-combobox-option-${l}`,
      value: c,
      disabled: d = (i =
        (r = (n = o.virtual) == null ? void 0 : n.disabled) == null ? void 0 : r.call(n, c)) != null
        ? i
        : !1,
      order: f = null,
      ...h
    } = e,
    v = dT(o.inputElement),
    y = o.virtual
      ? o.activeOptionIndex === o.calculateIndex(c)
      : o.activeOptionIndex === null
        ? !1
        : ((s = o.options[o.activeOptionIndex]) == null ? void 0 : s.id) === u,
    x = o.isSelected(c),
    p = w.useRef(null),
    m = os({ disabled: d, value: c, domRef: p, order: f }),
    g = w.useContext(RT),
    E = Cr(t, p, g ? g.measureElement : null),
    S = ce(() => {
      a.setIsTyping(!1), a.onChange(c)
    })
  $e(() => a.registerOption(u, m), [m, u])
  let C = w.useRef(!(o.virtual || o.__demoMode))
  $e(() => {
    if (!o.virtual && !o.__demoMode)
      return Zn().requestAnimationFrame(() => {
        C.current = !0
      })
  }, [o.virtual, o.__demoMode]),
    $e(() => {
      if (C.current && o.comboboxState === 0 && y && o.activationTrigger !== 0)
        return Zn().requestAnimationFrame(() => {
          var M, W
          ;(W = (M = p.current) == null ? void 0 : M.scrollIntoView) == null ||
            W.call(M, { block: 'nearest' })
        })
    }, [p, y, o.comboboxState, o.activationTrigger, o.activeOptionIndex])
  let k = ce(M => {
      M.preventDefault(),
        M.button === P0.Left &&
          (d || (S(), cT() || requestAnimationFrame(() => v()), o.mode === 0 && a.closeCombobox()))
    }),
    T = ce(() => {
      if (d) return a.goToOption(Ge.Nothing)
      let M = o.calculateIndex(c)
      a.goToOption(Ge.Specific, M)
    }),
    A = bM(),
    O = ce(M => A.update(M)),
    D = ce(M => {
      if (!A.wasMoved(M) || d || y) return
      let W = o.calculateIndex(c)
      a.goToOption(Ge.Specific, W, 0)
    }),
    Z = ce(M => {
      A.wasMoved(M) && (d || (y && (o.optionsPropsRef.current.hold || a.goToOption(Ge.Nothing))))
    }),
    re = w.useMemo(() => ({ active: y, focus: y, selected: x, disabled: d }), [y, x, d])
  return Mn({
    ourProps: {
      id: u,
      ref: E,
      role: 'option',
      tabIndex: d === !0 ? void 0 : -1,
      'aria-disabled': d === !0 ? !0 : void 0,
      'aria-selected': x,
      disabled: void 0,
      onMouseDown: k,
      onFocus: T,
      onPointerEnter: O,
      onMouseEnter: O,
      onPointerMove: D,
      onMouseMove: D,
      onPointerLeave: Z,
      onMouseLeave: Z
    },
    theirProps: h,
    slot: re,
    defaultTag: R7,
    name: 'Combobox.Option'
  })
}
let O7 = Nn(E7),
  A0 = Nn(_7),
  O0 = Nn(T7),
  L7 = BL,
  L0 = Nn(P7),
  M0 = Nn(A7),
  AT = Object.assign(O7, { Input: O0, Button: A0, Label: L7, Options: L0, Option: M0 })
const Ku = [
  { name: 'None', value: void 0 },
  { name: 'Name Asc', value: 'name-asc', icon: P.jsx(jv, { size: 14 }), iconText: 'A->Z' },
  { name: 'Name Desc', value: 'name-desc', icon: P.jsx(ip, { size: 14 }), iconText: 'Z->A' },
  { name: 'Height Asc', value: 'height-asc', icon: P.jsx(jv, { size: 14 }), iconText: 'S->B' },
  { name: 'Height Desc', value: 'height-desc', icon: P.jsx(ip, { size: 14 }), iconText: 'B->S' }
]
function M7() {
  const { sort: e } = Mo({ from: '/' }),
    t = Ku.find(o => o.value === e),
    [n, r] = w.useState(t || Ku[0]),
    i = No(),
    s = o => {
      r(o), i({ search: a => ({ ...a, sort: o.value || void 0 }), resetScroll: !1 })
    }
  return P.jsx('div', {
    className: 'w-11 inline-block',
    children: P.jsxs(AT, {
      value: n,
      onChange: s,
      children: [
        P.jsxs('div', {
          className: 'relative',
          children: [
            P.jsx(O0, {
              readOnly: !0,
              'aria-label': 'Sort pokemons',
              className: Qi(
                'rounded-full size-11',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-0 data-[focus]:outline-yellow-500'
              )
            }),
            P.jsx(A0, {
              'aria-label': 'Open sort pokemons menu',
              className:
                'size-11 rounded-full flex items-center justify-center absolute inset-0 m-auto  dark:bg-slate-900 border dark:border-slate-800 dark:hover:bg-slate-800 bg-slate-50 hover:bg-slate-100 border-slate-300',
              children: P.jsx(ip, { className: 'size-4 dark:text-slate-50' })
            })
          ]
        }),
        P.jsx(L0, {
          anchor: 'bottom end',
          transition: !0,
          className: Qi(
            'w-48 rounded-xl border bg-slate-800 border-slate-900 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible',
            'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
          ),
          children: Ku.map(o =>
            P.jsxs(
              M0,
              {
                value: o,
                className:
                  'group flex justify-between cursor-pointer items-center gap-2 rounded-lg text-white  hover:bg-slate-600 py-1.5 px-3 select-none data-[selected]:bg-slate-700',
                children: [
                  P.jsxs('div', {
                    className: 'flex gap-3 items-center',
                    children: [
                      P.jsx(rE, {
                        className: 'invisible size-3 text-slate-50 group-data-[selected]:visible'
                      }),
                      P.jsx('div', { className: 'text-sm/6 capitalize', children: o.name })
                    ]
                  }),
                  P.jsxs('div', {
                    className: 'flex justify-center items-center gap-2 text-sm text-slate-500',
                    children: [o.iconText, o.icon]
                  })
                ]
              },
              o.name
            )
          )
        })
      ]
    })
  })
}
class Qs extends Error {
  constructor(n, r) {
    const i = `${Qs.extractMessage(n)}: ${JSON.stringify({ response: n, request: r })}`
    super(i)
    hs(this, 'response')
    hs(this, 'request')
    Object.setPrototypeOf(this, Qs.prototype),
      (this.response = n),
      (this.request = r),
      typeof Error.captureStackTrace == 'function' && Error.captureStackTrace(this, Qs)
  }
  static extractMessage(n) {
    var r, i
    return (
      ((i = (r = n.errors) == null ? void 0 : r[0]) == null ? void 0 : i.message) ??
      `GraphQL Error (Code: ${String(n.status)})`
    )
  }
}
const R2 = e => e.toUpperCase(),
  zf = e => (typeof e == 'function' ? e() : e),
  OT = (e, t) => e.map((n, r) => [n, t[r]]),
  vs = e => {
    let t = {}
    return (
      e instanceof Headers
        ? (t = N7(e))
        : Array.isArray(e)
          ? e.forEach(([n, r]) => {
              n && r !== void 0 && (t[n] = r)
            })
          : e && (t = e),
      t
    )
  },
  N7 = e => {
    const t = {}
    return (
      e.forEach((n, r) => {
        t[r] = n
      }),
      t
    )
  },
  I7 = e => {
    try {
      const t = e()
      return D7(t) ? t.catch(n => A2(n)) : t
    } catch (t) {
      return A2(t)
    }
  },
  A2 = e => (e instanceof Error ? e : new Error(String(e))),
  D7 = e =>
    typeof e == 'object' &&
    e !== null &&
    'then' in e &&
    typeof e.then == 'function' &&
    'catch' in e &&
    typeof e.catch == 'function' &&
    'finally' in e &&
    typeof e.finally == 'function',
  N0 = e => {
    throw new Error(`Unhandled case: ${String(e)}`)
  },
  Zu = e => typeof e == 'object' && e !== null && !Array.isArray(e),
  F7 = (e, t) => (e.documents ? e : { documents: e, requestHeaders: t, signal: void 0 }),
  j7 = (e, t, n) => (e.query ? e : { query: e, variables: t, requestHeaders: n, signal: void 0 })
function Yu(e, t) {
  if (!!!e) throw new Error(t)
}
function $7(e) {
  return typeof e == 'object' && e !== null
}
function V7(e, t) {
  if (!!!e) throw new Error('Unexpected invariant triggered.')
}
const B7 = /\r\n|[\n\r]/g
function Lp(e, t) {
  let n = 0,
    r = 1
  for (const i of e.body.matchAll(B7)) {
    if ((typeof i.index == 'number' || V7(!1), i.index >= t)) break
    ;(n = i.index + i[0].length), (r += 1)
  }
  return { line: r, column: t + 1 - n }
}
function z7(e) {
  return LT(e.source, Lp(e.source, e.start))
}
function LT(e, t) {
  const n = e.locationOffset.column - 1,
    r = ''.padStart(n) + e.body,
    i = t.line - 1,
    s = e.locationOffset.line - 1,
    o = t.line + s,
    a = t.line === 1 ? n : 0,
    l = t.column + a,
    u = `${e.name}:${o}:${l}
`,
    c = r.split(/\r\n|[\n\r]/g),
    d = c[i]
  if (d.length > 120) {
    const f = Math.floor(l / 80),
      h = l % 80,
      v = []
    for (let y = 0; y < d.length; y += 80) v.push(d.slice(y, y + 80))
    return (
      u +
      O2([
        [`${o} |`, v[0]],
        ...v.slice(1, f + 1).map(y => ['|', y]),
        ['|', '^'.padStart(h)],
        ['|', v[f + 1]]
      ])
    )
  }
  return (
    u +
    O2([
      [`${o - 1} |`, c[i - 1]],
      [`${o} |`, d],
      ['|', '^'.padStart(l)],
      [`${o + 1} |`, c[i + 1]]
    ])
  )
}
function O2(e) {
  const t = e.filter(([r, i]) => i !== void 0),
    n = Math.max(...t.map(([r]) => r.length))
  return t.map(([r, i]) => r.padStart(n) + (i ? ' ' + i : '')).join(`
`)
}
function U7(e) {
  const t = e[0]
  return t == null || 'kind' in t || 'length' in t
    ? { nodes: t, source: e[1], positions: e[2], path: e[3], originalError: e[4], extensions: e[5] }
    : t
}
class I0 extends Error {
  constructor(t, ...n) {
    var r, i, s
    const { nodes: o, source: a, positions: l, path: u, originalError: c, extensions: d } = U7(n)
    super(t),
      (this.name = 'GraphQLError'),
      (this.path = u ?? void 0),
      (this.originalError = c ?? void 0),
      (this.nodes = L2(Array.isArray(o) ? o : o ? [o] : void 0))
    const f = L2(
      (r = this.nodes) === null || r === void 0 ? void 0 : r.map(v => v.loc).filter(v => v != null)
    )
    ;(this.source = a ?? (f == null || (i = f[0]) === null || i === void 0 ? void 0 : i.source)),
      (this.positions = l ?? (f == null ? void 0 : f.map(v => v.start))),
      (this.locations =
        l && a ? l.map(v => Lp(a, v)) : f == null ? void 0 : f.map(v => Lp(v.source, v.start)))
    const h = $7(c == null ? void 0 : c.extensions) ? (c == null ? void 0 : c.extensions) : void 0
    ;(this.extensions = (s = d ?? h) !== null && s !== void 0 ? s : Object.create(null)),
      Object.defineProperties(this, {
        message: { writable: !0, enumerable: !0 },
        name: { enumerable: !1 },
        nodes: { enumerable: !1 },
        source: { enumerable: !1 },
        positions: { enumerable: !1 },
        originalError: { enumerable: !1 }
      }),
      c != null && c.stack
        ? Object.defineProperty(this, 'stack', { value: c.stack, writable: !0, configurable: !0 })
        : Error.captureStackTrace
          ? Error.captureStackTrace(this, I0)
          : Object.defineProperty(this, 'stack', {
              value: Error().stack,
              writable: !0,
              configurable: !0
            })
  }
  get [Symbol.toStringTag]() {
    return 'GraphQLError'
  }
  toString() {
    let t = this.message
    if (this.nodes)
      for (const n of this.nodes)
        n.loc &&
          (t +=
            `

` + z7(n.loc))
    else if (this.source && this.locations)
      for (const n of this.locations)
        t +=
          `

` + LT(this.source, n)
    return t
  }
  toJSON() {
    const t = { message: this.message }
    return (
      this.locations != null && (t.locations = this.locations),
      this.path != null && (t.path = this.path),
      this.extensions != null &&
        Object.keys(this.extensions).length > 0 &&
        (t.extensions = this.extensions),
      t
    )
  }
}
function L2(e) {
  return e === void 0 || e.length === 0 ? void 0 : e
}
function Je(e, t, n) {
  return new I0(`Syntax Error: ${n}`, { source: e, positions: [t] })
}
class H7 {
  constructor(t, n, r) {
    ;(this.start = t.start),
      (this.end = n.end),
      (this.startToken = t),
      (this.endToken = n),
      (this.source = r)
  }
  get [Symbol.toStringTag]() {
    return 'Location'
  }
  toJSON() {
    return { start: this.start, end: this.end }
  }
}
class MT {
  constructor(t, n, r, i, s, o) {
    ;(this.kind = t),
      (this.start = n),
      (this.end = r),
      (this.line = i),
      (this.column = s),
      (this.value = o),
      (this.prev = null),
      (this.next = null)
  }
  get [Symbol.toStringTag]() {
    return 'Token'
  }
  toJSON() {
    return { kind: this.kind, value: this.value, line: this.line, column: this.column }
  }
}
const NT = {
    Name: [],
    Document: ['definitions'],
    OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
    VariableDefinition: ['variable', 'type', 'defaultValue', 'directives'],
    Variable: ['name'],
    SelectionSet: ['selections'],
    Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
    Argument: ['name', 'value'],
    FragmentSpread: ['name', 'directives'],
    InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
    FragmentDefinition: ['name', 'variableDefinitions', 'typeCondition', 'directives', 'selectionSet'],
    IntValue: [],
    FloatValue: [],
    StringValue: [],
    BooleanValue: [],
    NullValue: [],
    EnumValue: [],
    ListValue: ['values'],
    ObjectValue: ['fields'],
    ObjectField: ['name', 'value'],
    Directive: ['name', 'arguments'],
    NamedType: ['name'],
    ListType: ['type'],
    NonNullType: ['type'],
    SchemaDefinition: ['description', 'directives', 'operationTypes'],
    OperationTypeDefinition: ['type'],
    ScalarTypeDefinition: ['description', 'name', 'directives'],
    ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
    FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
    InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
    InterfaceTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
    UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
    EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
    EnumValueDefinition: ['description', 'name', 'directives'],
    InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
    DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
    SchemaExtension: ['directives', 'operationTypes'],
    ScalarTypeExtension: ['name', 'directives'],
    ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
    InterfaceTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
    UnionTypeExtension: ['name', 'directives', 'types'],
    EnumTypeExtension: ['name', 'directives', 'values'],
    InputObjectTypeExtension: ['name', 'directives', 'fields']
  },
  W7 = new Set(Object.keys(NT))
function M2(e) {
  const t = e == null ? void 0 : e.kind
  return typeof t == 'string' && W7.has(t)
}
var Mi
;(function (e) {
  ;(e.QUERY = 'query'), (e.MUTATION = 'mutation'), (e.SUBSCRIPTION = 'subscription')
})(Mi || (Mi = {}))
var Mp
;(function (e) {
  ;(e.QUERY = 'QUERY'),
    (e.MUTATION = 'MUTATION'),
    (e.SUBSCRIPTION = 'SUBSCRIPTION'),
    (e.FIELD = 'FIELD'),
    (e.FRAGMENT_DEFINITION = 'FRAGMENT_DEFINITION'),
    (e.FRAGMENT_SPREAD = 'FRAGMENT_SPREAD'),
    (e.INLINE_FRAGMENT = 'INLINE_FRAGMENT'),
    (e.VARIABLE_DEFINITION = 'VARIABLE_DEFINITION'),
    (e.SCHEMA = 'SCHEMA'),
    (e.SCALAR = 'SCALAR'),
    (e.OBJECT = 'OBJECT'),
    (e.FIELD_DEFINITION = 'FIELD_DEFINITION'),
    (e.ARGUMENT_DEFINITION = 'ARGUMENT_DEFINITION'),
    (e.INTERFACE = 'INTERFACE'),
    (e.UNION = 'UNION'),
    (e.ENUM = 'ENUM'),
    (e.ENUM_VALUE = 'ENUM_VALUE'),
    (e.INPUT_OBJECT = 'INPUT_OBJECT'),
    (e.INPUT_FIELD_DEFINITION = 'INPUT_FIELD_DEFINITION')
})(Mp || (Mp = {}))
var ie
;(function (e) {
  ;(e.NAME = 'Name'),
    (e.DOCUMENT = 'Document'),
    (e.OPERATION_DEFINITION = 'OperationDefinition'),
    (e.VARIABLE_DEFINITION = 'VariableDefinition'),
    (e.SELECTION_SET = 'SelectionSet'),
    (e.FIELD = 'Field'),
    (e.ARGUMENT = 'Argument'),
    (e.FRAGMENT_SPREAD = 'FragmentSpread'),
    (e.INLINE_FRAGMENT = 'InlineFragment'),
    (e.FRAGMENT_DEFINITION = 'FragmentDefinition'),
    (e.VARIABLE = 'Variable'),
    (e.INT = 'IntValue'),
    (e.FLOAT = 'FloatValue'),
    (e.STRING = 'StringValue'),
    (e.BOOLEAN = 'BooleanValue'),
    (e.NULL = 'NullValue'),
    (e.ENUM = 'EnumValue'),
    (e.LIST = 'ListValue'),
    (e.OBJECT = 'ObjectValue'),
    (e.OBJECT_FIELD = 'ObjectField'),
    (e.DIRECTIVE = 'Directive'),
    (e.NAMED_TYPE = 'NamedType'),
    (e.LIST_TYPE = 'ListType'),
    (e.NON_NULL_TYPE = 'NonNullType'),
    (e.SCHEMA_DEFINITION = 'SchemaDefinition'),
    (e.OPERATION_TYPE_DEFINITION = 'OperationTypeDefinition'),
    (e.SCALAR_TYPE_DEFINITION = 'ScalarTypeDefinition'),
    (e.OBJECT_TYPE_DEFINITION = 'ObjectTypeDefinition'),
    (e.FIELD_DEFINITION = 'FieldDefinition'),
    (e.INPUT_VALUE_DEFINITION = 'InputValueDefinition'),
    (e.INTERFACE_TYPE_DEFINITION = 'InterfaceTypeDefinition'),
    (e.UNION_TYPE_DEFINITION = 'UnionTypeDefinition'),
    (e.ENUM_TYPE_DEFINITION = 'EnumTypeDefinition'),
    (e.ENUM_VALUE_DEFINITION = 'EnumValueDefinition'),
    (e.INPUT_OBJECT_TYPE_DEFINITION = 'InputObjectTypeDefinition'),
    (e.DIRECTIVE_DEFINITION = 'DirectiveDefinition'),
    (e.SCHEMA_EXTENSION = 'SchemaExtension'),
    (e.SCALAR_TYPE_EXTENSION = 'ScalarTypeExtension'),
    (e.OBJECT_TYPE_EXTENSION = 'ObjectTypeExtension'),
    (e.INTERFACE_TYPE_EXTENSION = 'InterfaceTypeExtension'),
    (e.UNION_TYPE_EXTENSION = 'UnionTypeExtension'),
    (e.ENUM_TYPE_EXTENSION = 'EnumTypeExtension'),
    (e.INPUT_OBJECT_TYPE_EXTENSION = 'InputObjectTypeExtension')
})(ie || (ie = {}))
function Np(e) {
  return e === 9 || e === 32
}
function ul(e) {
  return e >= 48 && e <= 57
}
function IT(e) {
  return (e >= 97 && e <= 122) || (e >= 65 && e <= 90)
}
function DT(e) {
  return IT(e) || e === 95
}
function G7(e) {
  return IT(e) || ul(e) || e === 95
}
function q7(e) {
  var t
  let n = Number.MAX_SAFE_INTEGER,
    r = null,
    i = -1
  for (let o = 0; o < e.length; ++o) {
    var s
    const a = e[o],
      l = K7(a)
    l !== a.length &&
      ((r = (s = r) !== null && s !== void 0 ? s : o), (i = o), o !== 0 && l < n && (n = l))
  }
  return e
    .map((o, a) => (a === 0 ? o : o.slice(n)))
    .slice((t = r) !== null && t !== void 0 ? t : 0, i + 1)
}
function K7(e) {
  let t = 0
  for (; t < e.length && Np(e.charCodeAt(t)); ) ++t
  return t
}
function Z7(e, t) {
  const n = e.replace(/"""/g, '\\"""'),
    r = n.split(/\r\n|[\n\r]/g),
    i = r.length === 1,
    s = r.length > 1 && r.slice(1).every(h => h.length === 0 || Np(h.charCodeAt(0))),
    o = n.endsWith('\\"""'),
    a = e.endsWith('"') && !o,
    l = e.endsWith('\\'),
    u = a || l,
    c = !i || e.length > 70 || u || s || o
  let d = ''
  const f = i && Np(e.charCodeAt(0))
  return (
    ((c && !f) || s) &&
      (d += `
`),
    (d += n),
    (c || u) &&
      (d += `
`),
    '"""' + d + '"""'
  )
}
var L
;(function (e) {
  ;(e.SOF = '<SOF>'),
    (e.EOF = '<EOF>'),
    (e.BANG = '!'),
    (e.DOLLAR = '$'),
    (e.AMP = '&'),
    (e.PAREN_L = '('),
    (e.PAREN_R = ')'),
    (e.SPREAD = '...'),
    (e.COLON = ':'),
    (e.EQUALS = '='),
    (e.AT = '@'),
    (e.BRACKET_L = '['),
    (e.BRACKET_R = ']'),
    (e.BRACE_L = '{'),
    (e.PIPE = '|'),
    (e.BRACE_R = '}'),
    (e.NAME = 'Name'),
    (e.INT = 'Int'),
    (e.FLOAT = 'Float'),
    (e.STRING = 'String'),
    (e.BLOCK_STRING = 'BlockString'),
    (e.COMMENT = 'Comment')
})(L || (L = {}))
class Y7 {
  constructor(t) {
    const n = new MT(L.SOF, 0, 0, 0, 0)
    ;(this.source = t), (this.lastToken = n), (this.token = n), (this.line = 1), (this.lineStart = 0)
  }
  get [Symbol.toStringTag]() {
    return 'Lexer'
  }
  advance() {
    return (this.lastToken = this.token), (this.token = this.lookahead())
  }
  lookahead() {
    let t = this.token
    if (t.kind !== L.EOF)
      do
        if (t.next) t = t.next
        else {
          const n = X7(this, t.end)
          ;(t.next = n), (n.prev = t), (t = n)
        }
      while (t.kind === L.COMMENT)
    return t
  }
}
function Q7(e) {
  return (
    e === L.BANG ||
    e === L.DOLLAR ||
    e === L.AMP ||
    e === L.PAREN_L ||
    e === L.PAREN_R ||
    e === L.SPREAD ||
    e === L.COLON ||
    e === L.EQUALS ||
    e === L.AT ||
    e === L.BRACKET_L ||
    e === L.BRACKET_R ||
    e === L.BRACE_L ||
    e === L.PIPE ||
    e === L.BRACE_R
  )
}
function $o(e) {
  return (e >= 0 && e <= 55295) || (e >= 57344 && e <= 1114111)
}
function kd(e, t) {
  return FT(e.charCodeAt(t)) && jT(e.charCodeAt(t + 1))
}
function FT(e) {
  return e >= 55296 && e <= 56319
}
function jT(e) {
  return e >= 56320 && e <= 57343
}
function ts(e, t) {
  const n = e.source.body.codePointAt(t)
  if (n === void 0) return L.EOF
  if (n >= 32 && n <= 126) {
    const r = String.fromCodePoint(n)
    return r === '"' ? `'"'` : `"${r}"`
  }
  return 'U+' + n.toString(16).toUpperCase().padStart(4, '0')
}
function We(e, t, n, r, i) {
  const s = e.line,
    o = 1 + n - e.lineStart
  return new MT(t, n, r, s, o, i)
}
function X7(e, t) {
  const n = e.source.body,
    r = n.length
  let i = t
  for (; i < r; ) {
    const s = n.charCodeAt(i)
    switch (s) {
      case 65279:
      case 9:
      case 32:
      case 44:
        ++i
        continue
      case 10:
        ++i, ++e.line, (e.lineStart = i)
        continue
      case 13:
        n.charCodeAt(i + 1) === 10 ? (i += 2) : ++i, ++e.line, (e.lineStart = i)
        continue
      case 35:
        return J7(e, i)
      case 33:
        return We(e, L.BANG, i, i + 1)
      case 36:
        return We(e, L.DOLLAR, i, i + 1)
      case 38:
        return We(e, L.AMP, i, i + 1)
      case 40:
        return We(e, L.PAREN_L, i, i + 1)
      case 41:
        return We(e, L.PAREN_R, i, i + 1)
      case 46:
        if (n.charCodeAt(i + 1) === 46 && n.charCodeAt(i + 2) === 46) return We(e, L.SPREAD, i, i + 3)
        break
      case 58:
        return We(e, L.COLON, i, i + 1)
      case 61:
        return We(e, L.EQUALS, i, i + 1)
      case 64:
        return We(e, L.AT, i, i + 1)
      case 91:
        return We(e, L.BRACKET_L, i, i + 1)
      case 93:
        return We(e, L.BRACKET_R, i, i + 1)
      case 123:
        return We(e, L.BRACE_L, i, i + 1)
      case 124:
        return We(e, L.PIPE, i, i + 1)
      case 125:
        return We(e, L.BRACE_R, i, i + 1)
      case 34:
        return n.charCodeAt(i + 1) === 34 && n.charCodeAt(i + 2) === 34 ? sN(e, i) : tN(e, i)
    }
    if (ul(s) || s === 45) return eN(e, i, s)
    if (DT(s)) return oN(e, i)
    throw Je(
      e.source,
      i,
      s === 39
        ? `Unexpected single quote character ('), did you mean to use a double quote (")?`
        : $o(s) || kd(n, i)
          ? `Unexpected character: ${ts(e, i)}.`
          : `Invalid character: ${ts(e, i)}.`
    )
  }
  return We(e, L.EOF, r, r)
}
function J7(e, t) {
  const n = e.source.body,
    r = n.length
  let i = t + 1
  for (; i < r; ) {
    const s = n.charCodeAt(i)
    if (s === 10 || s === 13) break
    if ($o(s)) ++i
    else if (kd(n, i)) i += 2
    else break
  }
  return We(e, L.COMMENT, t, i, n.slice(t + 1, i))
}
function eN(e, t, n) {
  const r = e.source.body
  let i = t,
    s = n,
    o = !1
  if ((s === 45 && (s = r.charCodeAt(++i)), s === 48)) {
    if (((s = r.charCodeAt(++i)), ul(s)))
      throw Je(e.source, i, `Invalid number, unexpected digit after 0: ${ts(e, i)}.`)
  } else (i = Uf(e, i, s)), (s = r.charCodeAt(i))
  if (
    (s === 46 && ((o = !0), (s = r.charCodeAt(++i)), (i = Uf(e, i, s)), (s = r.charCodeAt(i))),
    (s === 69 || s === 101) &&
      ((o = !0),
      (s = r.charCodeAt(++i)),
      (s === 43 || s === 45) && (s = r.charCodeAt(++i)),
      (i = Uf(e, i, s)),
      (s = r.charCodeAt(i))),
    s === 46 || DT(s))
  )
    throw Je(e.source, i, `Invalid number, expected digit but got: ${ts(e, i)}.`)
  return We(e, o ? L.FLOAT : L.INT, t, i, r.slice(t, i))
}
function Uf(e, t, n) {
  if (!ul(n)) throw Je(e.source, t, `Invalid number, expected digit but got: ${ts(e, t)}.`)
  const r = e.source.body
  let i = t + 1
  for (; ul(r.charCodeAt(i)); ) ++i
  return i
}
function tN(e, t) {
  const n = e.source.body,
    r = n.length
  let i = t + 1,
    s = i,
    o = ''
  for (; i < r; ) {
    const a = n.charCodeAt(i)
    if (a === 34) return (o += n.slice(s, i)), We(e, L.STRING, t, i + 1, o)
    if (a === 92) {
      o += n.slice(s, i)
      const l =
        n.charCodeAt(i + 1) === 117 ? (n.charCodeAt(i + 2) === 123 ? nN(e, i) : rN(e, i)) : iN(e, i)
      ;(o += l.value), (i += l.size), (s = i)
      continue
    }
    if (a === 10 || a === 13) break
    if ($o(a)) ++i
    else if (kd(n, i)) i += 2
    else throw Je(e.source, i, `Invalid character within String: ${ts(e, i)}.`)
  }
  throw Je(e.source, i, 'Unterminated string.')
}
function nN(e, t) {
  const n = e.source.body
  let r = 0,
    i = 3
  for (; i < 12; ) {
    const s = n.charCodeAt(t + i++)
    if (s === 125) {
      if (i < 5 || !$o(r)) break
      return { value: String.fromCodePoint(r), size: i }
    }
    if (((r = (r << 4) | ha(s)), r < 0)) break
  }
  throw Je(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + i)}".`)
}
function rN(e, t) {
  const n = e.source.body,
    r = N2(n, t + 2)
  if ($o(r)) return { value: String.fromCodePoint(r), size: 6 }
  if (FT(r) && n.charCodeAt(t + 6) === 92 && n.charCodeAt(t + 7) === 117) {
    const i = N2(n, t + 8)
    if (jT(i)) return { value: String.fromCodePoint(r, i), size: 12 }
  }
  throw Je(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + 6)}".`)
}
function N2(e, t) {
  return (
    (ha(e.charCodeAt(t)) << 12) |
    (ha(e.charCodeAt(t + 1)) << 8) |
    (ha(e.charCodeAt(t + 2)) << 4) |
    ha(e.charCodeAt(t + 3))
  )
}
function ha(e) {
  return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1
}
function iN(e, t) {
  const n = e.source.body
  switch (n.charCodeAt(t + 1)) {
    case 34:
      return { value: '"', size: 2 }
    case 92:
      return { value: '\\', size: 2 }
    case 47:
      return { value: '/', size: 2 }
    case 98:
      return { value: '\b', size: 2 }
    case 102:
      return { value: '\f', size: 2 }
    case 110:
      return {
        value: `
`,
        size: 2
      }
    case 114:
      return { value: '\r', size: 2 }
    case 116:
      return { value: '	', size: 2 }
  }
  throw Je(e.source, t, `Invalid character escape sequence: "${n.slice(t, t + 2)}".`)
}
function sN(e, t) {
  const n = e.source.body,
    r = n.length
  let i = e.lineStart,
    s = t + 3,
    o = s,
    a = ''
  const l = []
  for (; s < r; ) {
    const u = n.charCodeAt(s)
    if (u === 34 && n.charCodeAt(s + 1) === 34 && n.charCodeAt(s + 2) === 34) {
      ;(a += n.slice(o, s)), l.push(a)
      const c = We(
        e,
        L.BLOCK_STRING,
        t,
        s + 3,
        q7(l).join(`
`)
      )
      return (e.line += l.length - 1), (e.lineStart = i), c
    }
    if (
      u === 92 &&
      n.charCodeAt(s + 1) === 34 &&
      n.charCodeAt(s + 2) === 34 &&
      n.charCodeAt(s + 3) === 34
    ) {
      ;(a += n.slice(o, s)), (o = s + 1), (s += 4)
      continue
    }
    if (u === 10 || u === 13) {
      ;(a += n.slice(o, s)),
        l.push(a),
        u === 13 && n.charCodeAt(s + 1) === 10 ? (s += 2) : ++s,
        (a = ''),
        (o = s),
        (i = s)
      continue
    }
    if ($o(u)) ++s
    else if (kd(n, s)) s += 2
    else throw Je(e.source, s, `Invalid character within String: ${ts(e, s)}.`)
  }
  throw Je(e.source, s, 'Unterminated string.')
}
function oN(e, t) {
  const n = e.source.body,
    r = n.length
  let i = t + 1
  for (; i < r; ) {
    const s = n.charCodeAt(i)
    if (G7(s)) ++i
    else break
  }
  return We(e, L.NAME, t, i, n.slice(t, i))
}
const aN = 10,
  $T = 2
function D0(e) {
  return Pd(e, [])
}
function Pd(e, t) {
  switch (typeof e) {
    case 'string':
      return JSON.stringify(e)
    case 'function':
      return e.name ? `[function ${e.name}]` : '[function]'
    case 'object':
      return lN(e, t)
    default:
      return String(e)
  }
}
function lN(e, t) {
  if (e === null) return 'null'
  if (t.includes(e)) return '[Circular]'
  const n = [...t, e]
  if (uN(e)) {
    const r = e.toJSON()
    if (r !== e) return typeof r == 'string' ? r : Pd(r, n)
  } else if (Array.isArray(e)) return dN(e, n)
  return cN(e, n)
}
function uN(e) {
  return typeof e.toJSON == 'function'
}
function cN(e, t) {
  const n = Object.entries(e)
  return n.length === 0
    ? '{}'
    : t.length > $T
      ? '[' + fN(e) + ']'
      : '{ ' + n.map(([i, s]) => i + ': ' + Pd(s, t)).join(', ') + ' }'
}
function dN(e, t) {
  if (e.length === 0) return '[]'
  if (t.length > $T) return '[Array]'
  const n = Math.min(aN, e.length),
    r = e.length - n,
    i = []
  for (let s = 0; s < n; ++s) i.push(Pd(e[s], t))
  return (
    r === 1 ? i.push('... 1 more item') : r > 1 && i.push(`... ${r} more items`),
    '[' + i.join(', ') + ']'
  )
}
function fN(e) {
  const t = Object.prototype.toString
    .call(e)
    .replace(/^\[object /, '')
    .replace(/]$/, '')
  if (t === 'Object' && typeof e.constructor == 'function') {
    const n = e.constructor.name
    if (typeof n == 'string' && n !== '') return n
  }
  return t
}
const hN = globalThis.process && !0,
  pN = hN
    ? function (t, n) {
        return t instanceof n
      }
    : function (t, n) {
        if (t instanceof n) return !0
        if (typeof t == 'object' && t !== null) {
          var r
          const i = n.prototype[Symbol.toStringTag],
            s =
              Symbol.toStringTag in t
                ? t[Symbol.toStringTag]
                : (r = t.constructor) === null || r === void 0
                  ? void 0
                  : r.name
          if (i === s) {
            const o = D0(t)
            throw new Error(`Cannot use ${i} "${o}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)
          }
        }
        return !1
      }
class VT {
  constructor(t, n = 'GraphQL request', r = { line: 1, column: 1 }) {
    typeof t == 'string' || Yu(!1, `Body must be a string. Received: ${D0(t)}.`),
      (this.body = t),
      (this.name = n),
      (this.locationOffset = r),
      this.locationOffset.line > 0 ||
        Yu(!1, 'line in locationOffset is 1-indexed and must be positive.'),
      this.locationOffset.column > 0 ||
        Yu(!1, 'column in locationOffset is 1-indexed and must be positive.')
  }
  get [Symbol.toStringTag]() {
    return 'Source'
  }
}
function mN(e) {
  return pN(e, VT)
}
function gN(e, t) {
  return new vN(e, t).parseDocument()
}
class vN {
  constructor(t, n = {}) {
    const r = mN(t) ? t : new VT(t)
    ;(this._lexer = new Y7(r)), (this._options = n), (this._tokenCounter = 0)
  }
  parseName() {
    const t = this.expectToken(L.NAME)
    return this.node(t, { kind: ie.NAME, value: t.value })
  }
  parseDocument() {
    return this.node(this._lexer.token, {
      kind: ie.DOCUMENT,
      definitions: this.many(L.SOF, this.parseDefinition, L.EOF)
    })
  }
  parseDefinition() {
    if (this.peek(L.BRACE_L)) return this.parseOperationDefinition()
    const t = this.peekDescription(),
      n = t ? this._lexer.lookahead() : this._lexer.token
    if (n.kind === L.NAME) {
      switch (n.value) {
        case 'schema':
          return this.parseSchemaDefinition()
        case 'scalar':
          return this.parseScalarTypeDefinition()
        case 'type':
          return this.parseObjectTypeDefinition()
        case 'interface':
          return this.parseInterfaceTypeDefinition()
        case 'union':
          return this.parseUnionTypeDefinition()
        case 'enum':
          return this.parseEnumTypeDefinition()
        case 'input':
          return this.parseInputObjectTypeDefinition()
        case 'directive':
          return this.parseDirectiveDefinition()
      }
      if (t)
        throw Je(
          this._lexer.source,
          this._lexer.token.start,
          'Unexpected description, descriptions are supported only on type definitions.'
        )
      switch (n.value) {
        case 'query':
        case 'mutation':
        case 'subscription':
          return this.parseOperationDefinition()
        case 'fragment':
          return this.parseFragmentDefinition()
        case 'extend':
          return this.parseTypeSystemExtension()
      }
    }
    throw this.unexpected(n)
  }
  parseOperationDefinition() {
    const t = this._lexer.token
    if (this.peek(L.BRACE_L))
      return this.node(t, {
        kind: ie.OPERATION_DEFINITION,
        operation: Mi.QUERY,
        name: void 0,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet()
      })
    const n = this.parseOperationType()
    let r
    return (
      this.peek(L.NAME) && (r = this.parseName()),
      this.node(t, {
        kind: ie.OPERATION_DEFINITION,
        operation: n,
        name: r,
        variableDefinitions: this.parseVariableDefinitions(),
        directives: this.parseDirectives(!1),
        selectionSet: this.parseSelectionSet()
      })
    )
  }
  parseOperationType() {
    const t = this.expectToken(L.NAME)
    switch (t.value) {
      case 'query':
        return Mi.QUERY
      case 'mutation':
        return Mi.MUTATION
      case 'subscription':
        return Mi.SUBSCRIPTION
    }
    throw this.unexpected(t)
  }
  parseVariableDefinitions() {
    return this.optionalMany(L.PAREN_L, this.parseVariableDefinition, L.PAREN_R)
  }
  parseVariableDefinition() {
    return this.node(this._lexer.token, {
      kind: ie.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(L.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(L.EQUALS) ? this.parseConstValueLiteral() : void 0,
      directives: this.parseConstDirectives()
    })
  }
  parseVariable() {
    const t = this._lexer.token
    return this.expectToken(L.DOLLAR), this.node(t, { kind: ie.VARIABLE, name: this.parseName() })
  }
  parseSelectionSet() {
    return this.node(this._lexer.token, {
      kind: ie.SELECTION_SET,
      selections: this.many(L.BRACE_L, this.parseSelection, L.BRACE_R)
    })
  }
  parseSelection() {
    return this.peek(L.SPREAD) ? this.parseFragment() : this.parseField()
  }
  parseField() {
    const t = this._lexer.token,
      n = this.parseName()
    let r, i
    return (
      this.expectOptionalToken(L.COLON) ? ((r = n), (i = this.parseName())) : (i = n),
      this.node(t, {
        kind: ie.FIELD,
        alias: r,
        name: i,
        arguments: this.parseArguments(!1),
        directives: this.parseDirectives(!1),
        selectionSet: this.peek(L.BRACE_L) ? this.parseSelectionSet() : void 0
      })
    )
  }
  parseArguments(t) {
    const n = t ? this.parseConstArgument : this.parseArgument
    return this.optionalMany(L.PAREN_L, n, L.PAREN_R)
  }
  parseArgument(t = !1) {
    const n = this._lexer.token,
      r = this.parseName()
    return (
      this.expectToken(L.COLON),
      this.node(n, { kind: ie.ARGUMENT, name: r, value: this.parseValueLiteral(t) })
    )
  }
  parseConstArgument() {
    return this.parseArgument(!0)
  }
  parseFragment() {
    const t = this._lexer.token
    this.expectToken(L.SPREAD)
    const n = this.expectOptionalKeyword('on')
    return !n && this.peek(L.NAME)
      ? this.node(t, {
          kind: ie.FRAGMENT_SPREAD,
          name: this.parseFragmentName(),
          directives: this.parseDirectives(!1)
        })
      : this.node(t, {
          kind: ie.INLINE_FRAGMENT,
          typeCondition: n ? this.parseNamedType() : void 0,
          directives: this.parseDirectives(!1),
          selectionSet: this.parseSelectionSet()
        })
  }
  parseFragmentDefinition() {
    const t = this._lexer.token
    return (
      this.expectKeyword('fragment'),
      this._options.allowLegacyFragmentVariables === !0
        ? this.node(t, {
            kind: ie.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            variableDefinitions: this.parseVariableDefinitions(),
            typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
          })
        : this.node(t, {
            kind: ie.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
          })
    )
  }
  parseFragmentName() {
    if (this._lexer.token.value === 'on') throw this.unexpected()
    return this.parseName()
  }
  parseValueLiteral(t) {
    const n = this._lexer.token
    switch (n.kind) {
      case L.BRACKET_L:
        return this.parseList(t)
      case L.BRACE_L:
        return this.parseObject(t)
      case L.INT:
        return this.advanceLexer(), this.node(n, { kind: ie.INT, value: n.value })
      case L.FLOAT:
        return this.advanceLexer(), this.node(n, { kind: ie.FLOAT, value: n.value })
      case L.STRING:
      case L.BLOCK_STRING:
        return this.parseStringLiteral()
      case L.NAME:
        switch ((this.advanceLexer(), n.value)) {
          case 'true':
            return this.node(n, { kind: ie.BOOLEAN, value: !0 })
          case 'false':
            return this.node(n, { kind: ie.BOOLEAN, value: !1 })
          case 'null':
            return this.node(n, { kind: ie.NULL })
          default:
            return this.node(n, { kind: ie.ENUM, value: n.value })
        }
      case L.DOLLAR:
        if (t)
          if ((this.expectToken(L.DOLLAR), this._lexer.token.kind === L.NAME)) {
            const r = this._lexer.token.value
            throw Je(this._lexer.source, n.start, `Unexpected variable "$${r}" in constant value.`)
          } else throw this.unexpected(n)
        return this.parseVariable()
      default:
        throw this.unexpected()
    }
  }
  parseConstValueLiteral() {
    return this.parseValueLiteral(!0)
  }
  parseStringLiteral() {
    const t = this._lexer.token
    return (
      this.advanceLexer(),
      this.node(t, { kind: ie.STRING, value: t.value, block: t.kind === L.BLOCK_STRING })
    )
  }
  parseList(t) {
    const n = () => this.parseValueLiteral(t)
    return this.node(this._lexer.token, { kind: ie.LIST, values: this.any(L.BRACKET_L, n, L.BRACKET_R) })
  }
  parseObject(t) {
    const n = () => this.parseObjectField(t)
    return this.node(this._lexer.token, { kind: ie.OBJECT, fields: this.any(L.BRACE_L, n, L.BRACE_R) })
  }
  parseObjectField(t) {
    const n = this._lexer.token,
      r = this.parseName()
    return (
      this.expectToken(L.COLON),
      this.node(n, { kind: ie.OBJECT_FIELD, name: r, value: this.parseValueLiteral(t) })
    )
  }
  parseDirectives(t) {
    const n = []
    for (; this.peek(L.AT); ) n.push(this.parseDirective(t))
    return n
  }
  parseConstDirectives() {
    return this.parseDirectives(!0)
  }
  parseDirective(t) {
    const n = this._lexer.token
    return (
      this.expectToken(L.AT),
      this.node(n, { kind: ie.DIRECTIVE, name: this.parseName(), arguments: this.parseArguments(t) })
    )
  }
  parseTypeReference() {
    const t = this._lexer.token
    let n
    if (this.expectOptionalToken(L.BRACKET_L)) {
      const r = this.parseTypeReference()
      this.expectToken(L.BRACKET_R), (n = this.node(t, { kind: ie.LIST_TYPE, type: r }))
    } else n = this.parseNamedType()
    return this.expectOptionalToken(L.BANG) ? this.node(t, { kind: ie.NON_NULL_TYPE, type: n }) : n
  }
  parseNamedType() {
    return this.node(this._lexer.token, { kind: ie.NAMED_TYPE, name: this.parseName() })
  }
  peekDescription() {
    return this.peek(L.STRING) || this.peek(L.BLOCK_STRING)
  }
  parseDescription() {
    if (this.peekDescription()) return this.parseStringLiteral()
  }
  parseSchemaDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription()
    this.expectKeyword('schema')
    const r = this.parseConstDirectives(),
      i = this.many(L.BRACE_L, this.parseOperationTypeDefinition, L.BRACE_R)
    return this.node(t, { kind: ie.SCHEMA_DEFINITION, description: n, directives: r, operationTypes: i })
  }
  parseOperationTypeDefinition() {
    const t = this._lexer.token,
      n = this.parseOperationType()
    this.expectToken(L.COLON)
    const r = this.parseNamedType()
    return this.node(t, { kind: ie.OPERATION_TYPE_DEFINITION, operation: n, type: r })
  }
  parseScalarTypeDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription()
    this.expectKeyword('scalar')
    const r = this.parseName(),
      i = this.parseConstDirectives()
    return this.node(t, { kind: ie.SCALAR_TYPE_DEFINITION, description: n, name: r, directives: i })
  }
  parseObjectTypeDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription()
    this.expectKeyword('type')
    const r = this.parseName(),
      i = this.parseImplementsInterfaces(),
      s = this.parseConstDirectives(),
      o = this.parseFieldsDefinition()
    return this.node(t, {
      kind: ie.OBJECT_TYPE_DEFINITION,
      description: n,
      name: r,
      interfaces: i,
      directives: s,
      fields: o
    })
  }
  parseImplementsInterfaces() {
    return this.expectOptionalKeyword('implements') ? this.delimitedMany(L.AMP, this.parseNamedType) : []
  }
  parseFieldsDefinition() {
    return this.optionalMany(L.BRACE_L, this.parseFieldDefinition, L.BRACE_R)
  }
  parseFieldDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription(),
      r = this.parseName(),
      i = this.parseArgumentDefs()
    this.expectToken(L.COLON)
    const s = this.parseTypeReference(),
      o = this.parseConstDirectives()
    return this.node(t, {
      kind: ie.FIELD_DEFINITION,
      description: n,
      name: r,
      arguments: i,
      type: s,
      directives: o
    })
  }
  parseArgumentDefs() {
    return this.optionalMany(L.PAREN_L, this.parseInputValueDef, L.PAREN_R)
  }
  parseInputValueDef() {
    const t = this._lexer.token,
      n = this.parseDescription(),
      r = this.parseName()
    this.expectToken(L.COLON)
    const i = this.parseTypeReference()
    let s
    this.expectOptionalToken(L.EQUALS) && (s = this.parseConstValueLiteral())
    const o = this.parseConstDirectives()
    return this.node(t, {
      kind: ie.INPUT_VALUE_DEFINITION,
      description: n,
      name: r,
      type: i,
      defaultValue: s,
      directives: o
    })
  }
  parseInterfaceTypeDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription()
    this.expectKeyword('interface')
    const r = this.parseName(),
      i = this.parseImplementsInterfaces(),
      s = this.parseConstDirectives(),
      o = this.parseFieldsDefinition()
    return this.node(t, {
      kind: ie.INTERFACE_TYPE_DEFINITION,
      description: n,
      name: r,
      interfaces: i,
      directives: s,
      fields: o
    })
  }
  parseUnionTypeDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription()
    this.expectKeyword('union')
    const r = this.parseName(),
      i = this.parseConstDirectives(),
      s = this.parseUnionMemberTypes()
    return this.node(t, {
      kind: ie.UNION_TYPE_DEFINITION,
      description: n,
      name: r,
      directives: i,
      types: s
    })
  }
  parseUnionMemberTypes() {
    return this.expectOptionalToken(L.EQUALS) ? this.delimitedMany(L.PIPE, this.parseNamedType) : []
  }
  parseEnumTypeDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription()
    this.expectKeyword('enum')
    const r = this.parseName(),
      i = this.parseConstDirectives(),
      s = this.parseEnumValuesDefinition()
    return this.node(t, {
      kind: ie.ENUM_TYPE_DEFINITION,
      description: n,
      name: r,
      directives: i,
      values: s
    })
  }
  parseEnumValuesDefinition() {
    return this.optionalMany(L.BRACE_L, this.parseEnumValueDefinition, L.BRACE_R)
  }
  parseEnumValueDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription(),
      r = this.parseEnumValueName(),
      i = this.parseConstDirectives()
    return this.node(t, { kind: ie.ENUM_VALUE_DEFINITION, description: n, name: r, directives: i })
  }
  parseEnumValueName() {
    if (
      this._lexer.token.value === 'true' ||
      this._lexer.token.value === 'false' ||
      this._lexer.token.value === 'null'
    )
      throw Je(
        this._lexer.source,
        this._lexer.token.start,
        `${ku(this._lexer.token)} is reserved and cannot be used for an enum value.`
      )
    return this.parseName()
  }
  parseInputObjectTypeDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription()
    this.expectKeyword('input')
    const r = this.parseName(),
      i = this.parseConstDirectives(),
      s = this.parseInputFieldsDefinition()
    return this.node(t, {
      kind: ie.INPUT_OBJECT_TYPE_DEFINITION,
      description: n,
      name: r,
      directives: i,
      fields: s
    })
  }
  parseInputFieldsDefinition() {
    return this.optionalMany(L.BRACE_L, this.parseInputValueDef, L.BRACE_R)
  }
  parseTypeSystemExtension() {
    const t = this._lexer.lookahead()
    if (t.kind === L.NAME)
      switch (t.value) {
        case 'schema':
          return this.parseSchemaExtension()
        case 'scalar':
          return this.parseScalarTypeExtension()
        case 'type':
          return this.parseObjectTypeExtension()
        case 'interface':
          return this.parseInterfaceTypeExtension()
        case 'union':
          return this.parseUnionTypeExtension()
        case 'enum':
          return this.parseEnumTypeExtension()
        case 'input':
          return this.parseInputObjectTypeExtension()
      }
    throw this.unexpected(t)
  }
  parseSchemaExtension() {
    const t = this._lexer.token
    this.expectKeyword('extend'), this.expectKeyword('schema')
    const n = this.parseConstDirectives(),
      r = this.optionalMany(L.BRACE_L, this.parseOperationTypeDefinition, L.BRACE_R)
    if (n.length === 0 && r.length === 0) throw this.unexpected()
    return this.node(t, { kind: ie.SCHEMA_EXTENSION, directives: n, operationTypes: r })
  }
  parseScalarTypeExtension() {
    const t = this._lexer.token
    this.expectKeyword('extend'), this.expectKeyword('scalar')
    const n = this.parseName(),
      r = this.parseConstDirectives()
    if (r.length === 0) throw this.unexpected()
    return this.node(t, { kind: ie.SCALAR_TYPE_EXTENSION, name: n, directives: r })
  }
  parseObjectTypeExtension() {
    const t = this._lexer.token
    this.expectKeyword('extend'), this.expectKeyword('type')
    const n = this.parseName(),
      r = this.parseImplementsInterfaces(),
      i = this.parseConstDirectives(),
      s = this.parseFieldsDefinition()
    if (r.length === 0 && i.length === 0 && s.length === 0) throw this.unexpected()
    return this.node(t, {
      kind: ie.OBJECT_TYPE_EXTENSION,
      name: n,
      interfaces: r,
      directives: i,
      fields: s
    })
  }
  parseInterfaceTypeExtension() {
    const t = this._lexer.token
    this.expectKeyword('extend'), this.expectKeyword('interface')
    const n = this.parseName(),
      r = this.parseImplementsInterfaces(),
      i = this.parseConstDirectives(),
      s = this.parseFieldsDefinition()
    if (r.length === 0 && i.length === 0 && s.length === 0) throw this.unexpected()
    return this.node(t, {
      kind: ie.INTERFACE_TYPE_EXTENSION,
      name: n,
      interfaces: r,
      directives: i,
      fields: s
    })
  }
  parseUnionTypeExtension() {
    const t = this._lexer.token
    this.expectKeyword('extend'), this.expectKeyword('union')
    const n = this.parseName(),
      r = this.parseConstDirectives(),
      i = this.parseUnionMemberTypes()
    if (r.length === 0 && i.length === 0) throw this.unexpected()
    return this.node(t, { kind: ie.UNION_TYPE_EXTENSION, name: n, directives: r, types: i })
  }
  parseEnumTypeExtension() {
    const t = this._lexer.token
    this.expectKeyword('extend'), this.expectKeyword('enum')
    const n = this.parseName(),
      r = this.parseConstDirectives(),
      i = this.parseEnumValuesDefinition()
    if (r.length === 0 && i.length === 0) throw this.unexpected()
    return this.node(t, { kind: ie.ENUM_TYPE_EXTENSION, name: n, directives: r, values: i })
  }
  parseInputObjectTypeExtension() {
    const t = this._lexer.token
    this.expectKeyword('extend'), this.expectKeyword('input')
    const n = this.parseName(),
      r = this.parseConstDirectives(),
      i = this.parseInputFieldsDefinition()
    if (r.length === 0 && i.length === 0) throw this.unexpected()
    return this.node(t, { kind: ie.INPUT_OBJECT_TYPE_EXTENSION, name: n, directives: r, fields: i })
  }
  parseDirectiveDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription()
    this.expectKeyword('directive'), this.expectToken(L.AT)
    const r = this.parseName(),
      i = this.parseArgumentDefs(),
      s = this.expectOptionalKeyword('repeatable')
    this.expectKeyword('on')
    const o = this.parseDirectiveLocations()
    return this.node(t, {
      kind: ie.DIRECTIVE_DEFINITION,
      description: n,
      name: r,
      arguments: i,
      repeatable: s,
      locations: o
    })
  }
  parseDirectiveLocations() {
    return this.delimitedMany(L.PIPE, this.parseDirectiveLocation)
  }
  parseDirectiveLocation() {
    const t = this._lexer.token,
      n = this.parseName()
    if (Object.prototype.hasOwnProperty.call(Mp, n.value)) return n
    throw this.unexpected(t)
  }
  node(t, n) {
    return (
      this._options.noLocation !== !0 && (n.loc = new H7(t, this._lexer.lastToken, this._lexer.source)),
      n
    )
  }
  peek(t) {
    return this._lexer.token.kind === t
  }
  expectToken(t) {
    const n = this._lexer.token
    if (n.kind === t) return this.advanceLexer(), n
    throw Je(this._lexer.source, n.start, `Expected ${BT(t)}, found ${ku(n)}.`)
  }
  expectOptionalToken(t) {
    return this._lexer.token.kind === t ? (this.advanceLexer(), !0) : !1
  }
  expectKeyword(t) {
    const n = this._lexer.token
    if (n.kind === L.NAME && n.value === t) this.advanceLexer()
    else throw Je(this._lexer.source, n.start, `Expected "${t}", found ${ku(n)}.`)
  }
  expectOptionalKeyword(t) {
    const n = this._lexer.token
    return n.kind === L.NAME && n.value === t ? (this.advanceLexer(), !0) : !1
  }
  unexpected(t) {
    const n = t ?? this._lexer.token
    return Je(this._lexer.source, n.start, `Unexpected ${ku(n)}.`)
  }
  any(t, n, r) {
    this.expectToken(t)
    const i = []
    for (; !this.expectOptionalToken(r); ) i.push(n.call(this))
    return i
  }
  optionalMany(t, n, r) {
    if (this.expectOptionalToken(t)) {
      const i = []
      do i.push(n.call(this))
      while (!this.expectOptionalToken(r))
      return i
    }
    return []
  }
  many(t, n, r) {
    this.expectToken(t)
    const i = []
    do i.push(n.call(this))
    while (!this.expectOptionalToken(r))
    return i
  }
  delimitedMany(t, n) {
    this.expectOptionalToken(t)
    const r = []
    do r.push(n.call(this))
    while (this.expectOptionalToken(t))
    return r
  }
  advanceLexer() {
    const { maxTokens: t } = this._options,
      n = this._lexer.advance()
    if (t !== void 0 && n.kind !== L.EOF && (++this._tokenCounter, this._tokenCounter > t))
      throw Je(this._lexer.source, n.start, `Document contains more that ${t} tokens. Parsing aborted.`)
  }
}
function ku(e) {
  const t = e.value
  return BT(e.kind) + (t != null ? ` "${t}"` : '')
}
function BT(e) {
  return Q7(e) ? `"${e}"` : e
}
function yN(e) {
  return `"${e.replace(wN, xN)}"`
}
const wN = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g
function xN(e) {
  return EN[e.charCodeAt(0)]
}
const EN = [
    '\\u0000',
    '\\u0001',
    '\\u0002',
    '\\u0003',
    '\\u0004',
    '\\u0005',
    '\\u0006',
    '\\u0007',
    '\\b',
    '\\t',
    '\\n',
    '\\u000B',
    '\\f',
    '\\r',
    '\\u000E',
    '\\u000F',
    '\\u0010',
    '\\u0011',
    '\\u0012',
    '\\u0013',
    '\\u0014',
    '\\u0015',
    '\\u0016',
    '\\u0017',
    '\\u0018',
    '\\u0019',
    '\\u001A',
    '\\u001B',
    '\\u001C',
    '\\u001D',
    '\\u001E',
    '\\u001F',
    '',
    '',
    '\\"',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '\\\\',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '\\u007F',
    '\\u0080',
    '\\u0081',
    '\\u0082',
    '\\u0083',
    '\\u0084',
    '\\u0085',
    '\\u0086',
    '\\u0087',
    '\\u0088',
    '\\u0089',
    '\\u008A',
    '\\u008B',
    '\\u008C',
    '\\u008D',
    '\\u008E',
    '\\u008F',
    '\\u0090',
    '\\u0091',
    '\\u0092',
    '\\u0093',
    '\\u0094',
    '\\u0095',
    '\\u0096',
    '\\u0097',
    '\\u0098',
    '\\u0099',
    '\\u009A',
    '\\u009B',
    '\\u009C',
    '\\u009D',
    '\\u009E',
    '\\u009F'
  ],
  SN = Object.freeze({})
function TN(e, t, n = NT) {
  const r = new Map()
  for (const p of Object.values(ie)) r.set(p, CN(t, p))
  let i,
    s = Array.isArray(e),
    o = [e],
    a = -1,
    l = [],
    u = e,
    c,
    d
  const f = [],
    h = []
  do {
    a++
    const p = a === o.length,
      m = p && l.length !== 0
    if (p) {
      if (((c = h.length === 0 ? void 0 : f[f.length - 1]), (u = d), (d = h.pop()), m))
        if (s) {
          u = u.slice()
          let E = 0
          for (const [S, C] of l) {
            const k = S - E
            C === null ? (u.splice(k, 1), E++) : (u[k] = C)
          }
        } else {
          u = Object.defineProperties({}, Object.getOwnPropertyDescriptors(u))
          for (const [E, S] of l) u[E] = S
        }
      ;(a = i.index), (o = i.keys), (l = i.edits), (s = i.inArray), (i = i.prev)
    } else if (d) {
      if (((c = s ? a : o[a]), (u = d[c]), u == null)) continue
      f.push(c)
    }
    let g
    if (!Array.isArray(u)) {
      var v, y
      M2(u) || Yu(!1, `Invalid AST Node: ${D0(u)}.`)
      const E = p
        ? (v = r.get(u.kind)) === null || v === void 0
          ? void 0
          : v.leave
        : (y = r.get(u.kind)) === null || y === void 0
          ? void 0
          : y.enter
      if (((g = E == null ? void 0 : E.call(t, u, c, d, f, h)), g === SN)) break
      if (g === !1) {
        if (!p) {
          f.pop()
          continue
        }
      } else if (g !== void 0 && (l.push([c, g]), !p))
        if (M2(g)) u = g
        else {
          f.pop()
          continue
        }
    }
    if ((g === void 0 && m && l.push([c, u]), p)) f.pop()
    else {
      var x
      ;(i = { inArray: s, index: a, keys: o, edits: l, prev: i }),
        (s = Array.isArray(u)),
        (o = s ? u : (x = n[u.kind]) !== null && x !== void 0 ? x : []),
        (a = -1),
        (l = []),
        d && h.push(d),
        (d = u)
    }
  } while (i !== void 0)
  return l.length !== 0 ? l[l.length - 1][1] : e
}
function CN(e, t) {
  const n = e[t]
  return typeof n == 'object'
    ? n
    : typeof n == 'function'
      ? { enter: n, leave: void 0 }
      : { enter: e.enter, leave: e.leave }
}
function _N(e) {
  return TN(e, kN)
}
const bN = 80,
  kN = {
    Name: { leave: e => e.value },
    Variable: { leave: e => '$' + e.name },
    Document: {
      leave: e =>
        G(
          e.definitions,
          `

`
        )
    },
    OperationDefinition: {
      leave(e) {
        const t = me('(', G(e.variableDefinitions, ', '), ')'),
          n = G([e.operation, G([e.name, t]), G(e.directives, ' ')], ' ')
        return (n === 'query' ? '' : n + ' ') + e.selectionSet
      }
    },
    VariableDefinition: {
      leave: ({ variable: e, type: t, defaultValue: n, directives: r }) =>
        e + ': ' + t + me(' = ', n) + me(' ', G(r, ' '))
    },
    SelectionSet: { leave: ({ selections: e }) => vn(e) },
    Field: {
      leave({ alias: e, name: t, arguments: n, directives: r, selectionSet: i }) {
        const s = me('', e, ': ') + t
        let o = s + me('(', G(n, ', '), ')')
        return (
          o.length > bN &&
            (o =
              s +
              me(
                `(
`,
                Qu(
                  G(
                    n,
                    `
`
                  )
                ),
                `
)`
              )),
          G([o, G(r, ' '), i], ' ')
        )
      }
    },
    Argument: { leave: ({ name: e, value: t }) => e + ': ' + t },
    FragmentSpread: { leave: ({ name: e, directives: t }) => '...' + e + me(' ', G(t, ' ')) },
    InlineFragment: {
      leave: ({ typeCondition: e, directives: t, selectionSet: n }) =>
        G(['...', me('on ', e), G(t, ' '), n], ' ')
    },
    FragmentDefinition: {
      leave: ({ name: e, typeCondition: t, variableDefinitions: n, directives: r, selectionSet: i }) =>
        `fragment ${e}${me('(', G(n, ', '), ')')} on ${t} ${me('', G(r, ' '), ' ')}` + i
    },
    IntValue: { leave: ({ value: e }) => e },
    FloatValue: { leave: ({ value: e }) => e },
    StringValue: { leave: ({ value: e, block: t }) => (t ? Z7(e) : yN(e)) },
    BooleanValue: { leave: ({ value: e }) => (e ? 'true' : 'false') },
    NullValue: { leave: () => 'null' },
    EnumValue: { leave: ({ value: e }) => e },
    ListValue: { leave: ({ values: e }) => '[' + G(e, ', ') + ']' },
    ObjectValue: { leave: ({ fields: e }) => '{' + G(e, ', ') + '}' },
    ObjectField: { leave: ({ name: e, value: t }) => e + ': ' + t },
    Directive: { leave: ({ name: e, arguments: t }) => '@' + e + me('(', G(t, ', '), ')') },
    NamedType: { leave: ({ name: e }) => e },
    ListType: { leave: ({ type: e }) => '[' + e + ']' },
    NonNullType: { leave: ({ type: e }) => e + '!' },
    SchemaDefinition: {
      leave: ({ description: e, directives: t, operationTypes: n }) =>
        me(
          '',
          e,
          `
`
        ) + G(['schema', G(t, ' '), vn(n)], ' ')
    },
    OperationTypeDefinition: { leave: ({ operation: e, type: t }) => e + ': ' + t },
    ScalarTypeDefinition: {
      leave: ({ description: e, name: t, directives: n }) =>
        me(
          '',
          e,
          `
`
        ) + G(['scalar', t, G(n, ' ')], ' ')
    },
    ObjectTypeDefinition: {
      leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) =>
        me(
          '',
          e,
          `
`
        ) + G(['type', t, me('implements ', G(n, ' & ')), G(r, ' '), vn(i)], ' ')
    },
    FieldDefinition: {
      leave: ({ description: e, name: t, arguments: n, type: r, directives: i }) =>
        me(
          '',
          e,
          `
`
        ) +
        t +
        (I2(n)
          ? me(
              `(
`,
              Qu(
                G(
                  n,
                  `
`
                )
              ),
              `
)`
            )
          : me('(', G(n, ', '), ')')) +
        ': ' +
        r +
        me(' ', G(i, ' '))
    },
    InputValueDefinition: {
      leave: ({ description: e, name: t, type: n, defaultValue: r, directives: i }) =>
        me(
          '',
          e,
          `
`
        ) + G([t + ': ' + n, me('= ', r), G(i, ' ')], ' ')
    },
    InterfaceTypeDefinition: {
      leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) =>
        me(
          '',
          e,
          `
`
        ) + G(['interface', t, me('implements ', G(n, ' & ')), G(r, ' '), vn(i)], ' ')
    },
    UnionTypeDefinition: {
      leave: ({ description: e, name: t, directives: n, types: r }) =>
        me(
          '',
          e,
          `
`
        ) + G(['union', t, G(n, ' '), me('= ', G(r, ' | '))], ' ')
    },
    EnumTypeDefinition: {
      leave: ({ description: e, name: t, directives: n, values: r }) =>
        me(
          '',
          e,
          `
`
        ) + G(['enum', t, G(n, ' '), vn(r)], ' ')
    },
    EnumValueDefinition: {
      leave: ({ description: e, name: t, directives: n }) =>
        me(
          '',
          e,
          `
`
        ) + G([t, G(n, ' ')], ' ')
    },
    InputObjectTypeDefinition: {
      leave: ({ description: e, name: t, directives: n, fields: r }) =>
        me(
          '',
          e,
          `
`
        ) + G(['input', t, G(n, ' '), vn(r)], ' ')
    },
    DirectiveDefinition: {
      leave: ({ description: e, name: t, arguments: n, repeatable: r, locations: i }) =>
        me(
          '',
          e,
          `
`
        ) +
        'directive @' +
        t +
        (I2(n)
          ? me(
              `(
`,
              Qu(
                G(
                  n,
                  `
`
                )
              ),
              `
)`
            )
          : me('(', G(n, ', '), ')')) +
        (r ? ' repeatable' : '') +
        ' on ' +
        G(i, ' | ')
    },
    SchemaExtension: {
      leave: ({ directives: e, operationTypes: t }) => G(['extend schema', G(e, ' '), vn(t)], ' ')
    },
    ScalarTypeExtension: {
      leave: ({ name: e, directives: t }) => G(['extend scalar', e, G(t, ' ')], ' ')
    },
    ObjectTypeExtension: {
      leave: ({ name: e, interfaces: t, directives: n, fields: r }) =>
        G(['extend type', e, me('implements ', G(t, ' & ')), G(n, ' '), vn(r)], ' ')
    },
    InterfaceTypeExtension: {
      leave: ({ name: e, interfaces: t, directives: n, fields: r }) =>
        G(['extend interface', e, me('implements ', G(t, ' & ')), G(n, ' '), vn(r)], ' ')
    },
    UnionTypeExtension: {
      leave: ({ name: e, directives: t, types: n }) =>
        G(['extend union', e, G(t, ' '), me('= ', G(n, ' | '))], ' ')
    },
    EnumTypeExtension: {
      leave: ({ name: e, directives: t, values: n }) => G(['extend enum', e, G(t, ' '), vn(n)], ' ')
    },
    InputObjectTypeExtension: {
      leave: ({ name: e, directives: t, fields: n }) => G(['extend input', e, G(t, ' '), vn(n)], ' ')
    }
  }
function G(e, t = '') {
  var n
  return (n = e == null ? void 0 : e.filter(r => r).join(t)) !== null && n !== void 0 ? n : ''
}
function vn(e) {
  return me(
    `{
`,
    Qu(
      G(
        e,
        `
`
      )
    ),
    `
}`
  )
}
function me(e, t, n = '') {
  return t != null && t !== '' ? e + t + n : ''
}
function Qu(e) {
  return me(
    '  ',
    e.replace(
      /\n/g,
      `
  `
    )
  )
}
function I2(e) {
  var t
  return (t =
    e == null
      ? void 0
      : e.some(n =>
          n.includes(`
`)
        )) !== null && t !== void 0
    ? t
    : !1
}
const D2 = 'Accept',
  Ip = 'Content-Type',
  Dp = 'application/json',
  zT = 'application/graphql-response+json',
  F2 = e => e.replace(/([\s,]|#[^\n\r]+)+/g, ' ').trim(),
  PN = e => {
    const t = e.toLowerCase()
    return t.includes(zT) || t.includes(Dp)
  },
  j2 = e => {
    try {
      if (Array.isArray(e)) return { _tag: 'Batch', executionResults: e.map($2) }
      if (Zu(e)) return { _tag: 'Single', executionResult: $2(e) }
      throw new Error(`Invalid execution result: result is not object or array. 
Got:
${String(e)}`)
    } catch (t) {
      return t
    }
  },
  $2 = e => {
    if (typeof e != 'object' || e === null)
      throw new Error('Invalid execution result: result is not object')
    let t, n, r
    if ('errors' in e) {
      if (!Zu(e.errors) && !Array.isArray(e.errors))
        throw new Error('Invalid execution result: errors is not plain object OR array')
      t = e.errors
    }
    if ('data' in e) {
      if (!Zu(e.data) && e.data !== null)
        throw new Error('Invalid execution result: data is not plain object')
      n = e.data
    }
    if ('extensions' in e) {
      if (!Zu(e.extensions)) throw new Error('Invalid execution result: extensions is not plain object')
      r = e.extensions
    }
    return { data: n, errors: t, extensions: r }
  },
  RN = e => (e._tag === 'Batch' ? e.executionResults.some(V2) : V2(e.executionResult)),
  V2 = e => (Array.isArray(e.errors) ? e.errors.length > 0 : !!e.errors),
  UT = e => typeof e == 'object' && e !== null && 'kind' in e && e.kind === ie.OPERATION_DEFINITION,
  AN = e => {
    var r
    let t
    const n = e.definitions.filter(UT)
    return n.length === 1 && (t = (r = n[0].name) == null ? void 0 : r.value), t
  },
  ON = e => {
    let t = !1
    const n = e.definitions.filter(UT)
    return n.length === 1 && (t = n[0].operation === Mi.MUTATION), t
  },
  Hf = (e, t) => {
    const n = typeof e == 'string' ? e : _N(e)
    let r = !1,
      i
    if (t) return { expression: n, isMutation: r, operationName: i }
    const s = I7(() => (typeof e == 'string' ? gN(e) : e))
    return s instanceof Error
      ? { expression: n, isMutation: r, operationName: i }
      : ((i = AN(s)), (r = ON(s)), { expression: n, operationName: i, isMutation: r })
  },
  F0 = JSON,
  Wf = async e => {
    const t = {
        ...e,
        method:
          e.request._tag === 'Single'
            ? e.request.document.isMutation
              ? 'POST'
              : R2(e.method ?? 'post')
            : e.request.hasMutations
              ? 'POST'
              : R2(e.method ?? 'post'),
        fetchOptions: { ...e.fetchOptions, errorPolicy: e.fetchOptions.errorPolicy ?? 'none' }
      },
      r = await MN(t.method)(t)
    if (!r.ok)
      return new Qs(
        { status: r.status, headers: r.headers },
        {
          query: e.request._tag === 'Single' ? e.request.document.expression : e.request.query,
          variables: e.request.variables
        }
      )
    const i = await LN(r, e.fetchOptions.jsonSerializer ?? F0)
    if (i instanceof Error) throw i
    const s = { status: r.status, headers: r.headers }
    if (RN(i) && t.fetchOptions.errorPolicy === 'none') {
      const o = i._tag === 'Batch' ? { ...i.executionResults, ...s } : { ...i.executionResult, ...s }
      return new Qs(o, {
        query: e.request._tag === 'Single' ? e.request.document.expression : e.request.query,
        variables: e.request.variables
      })
    }
    switch (i._tag) {
      case 'Single':
        return { ...s, ...B2(t)(i.executionResult) }
      case 'Batch':
        return { ...s, data: i.executionResults.map(B2(t)) }
      default:
        N0(i)
    }
  },
  B2 = e => t => ({
    extensions: t.extensions,
    data: t.data,
    errors: e.fetchOptions.errorPolicy === 'all' ? t.errors : void 0
  }),
  LN = async (e, t) => {
    const n = e.headers.get(Ip),
      r = await e.text()
    return n && PN(n) ? j2(t.parse(r)) : j2(r)
  },
  MN = e => async t => {
    const n = new Headers(t.headers)
    let r = null,
      i
    n.has(D2) || n.set(D2, [zT, Dp].join(', ')),
      e === 'POST'
        ? ((i = (t.fetchOptions.jsonSerializer ?? F0).stringify(NN(t))),
          typeof i == 'string' && !n.has(Ip) && n.set(Ip, Dp))
        : (r = IN(t))
    const s = { method: e, headers: n, body: i, ...t.fetchOptions }
    let o = new URL(t.url),
      a = s
    if (t.middleware) {
      const u = await Promise.resolve(
          t.middleware({
            ...s,
            url: t.url,
            operationName: t.request._tag === 'Single' ? t.request.document.operationName : void 0,
            variables: t.request.variables
          })
        ),
        { url: c, ...d } = u
      ;(o = new URL(c)), (a = d)
    }
    return (
      r &&
        r.forEach((u, c) => {
          o.searchParams.append(c, u)
        }),
      await (t.fetch ?? fetch)(o, a)
    )
  },
  NN = e => {
    switch (e.request._tag) {
      case 'Single':
        return {
          query: e.request.document.expression,
          variables: e.request.variables,
          operationName: e.request.document.operationName
        }
      case 'Batch':
        return OT(e.request.query, e.request.variables ?? []).map(([t, n]) => ({
          query: t,
          variables: n
        }))
      default:
        throw N0(e.request)
    }
  },
  IN = e => {
    var r
    const t = e.fetchOptions.jsonSerializer ?? F0,
      n = new URLSearchParams()
    switch (e.request._tag) {
      case 'Single':
        return (
          n.append('query', F2(e.request.document.expression)),
          e.request.variables && n.append('variables', t.stringify(e.request.variables)),
          e.request.document.operationName &&
            n.append('operationName', e.request.document.operationName),
          n
        )
      case 'Batch': {
        const i = ((r = e.request.variables) == null ? void 0 : r.map(a => t.stringify(a))) ?? [],
          s = e.request.query.map(F2),
          o = OT(s, i).map(([a, l]) => ({ query: a, variables: l }))
        return n.append('query', t.stringify(o)), n
      }
      default:
        throw N0(e.request)
    }
  }
class DN {
  constructor(t, n = {}) {
    hs(this, 'url')
    hs(this, 'requestConfig')
    hs(this, 'rawRequest', async (...t) => {
      const [n, r, i] = t,
        s = j7(n, r, i),
        {
          headers: o,
          fetch: a = globalThis.fetch,
          method: l = 'POST',
          requestMiddleware: u,
          responseMiddleware: c,
          excludeOperationName: d,
          ...f
        } = this.requestConfig,
        { url: h } = this
      s.signal !== void 0 && (f.signal = s.signal)
      const v = Hf(s.query, d),
        y = await Wf({
          url: h,
          request: { _tag: 'Single', document: v, variables: s.variables },
          headers: { ...vs(zf(o)), ...vs(s.requestHeaders) },
          fetch: a,
          method: l,
          fetchOptions: f,
          middleware: u
        })
      if (
        (c && (await c(y, { operationName: v.operationName, variables: r, url: this.url })),
        y instanceof Error)
      )
        throw y
      return y
    })
    ;(this.url = t), (this.requestConfig = n)
  }
  async request(t, ...n) {
    const [r, i] = n,
      s = FN(t, r, i),
      {
        headers: o,
        fetch: a = globalThis.fetch,
        method: l = 'POST',
        requestMiddleware: u,
        responseMiddleware: c,
        excludeOperationName: d,
        ...f
      } = this.requestConfig,
      { url: h } = this
    s.signal !== void 0 && (f.signal = s.signal)
    const v = Hf(s.document, d),
      y = await Wf({
        url: h,
        request: { _tag: 'Single', document: v, variables: s.variables },
        headers: { ...vs(zf(o)), ...vs(s.requestHeaders) },
        fetch: a,
        method: l,
        fetchOptions: f,
        middleware: u
      })
    if (
      (c && (await c(y, { operationName: v.operationName, variables: s.variables, url: this.url })),
      y instanceof Error)
    )
      throw y
    return y.data
  }
  async batchRequests(t, n) {
    const r = F7(t, n),
      { headers: i, excludeOperationName: s, ...o } = this.requestConfig
    r.signal !== void 0 && (o.signal = r.signal)
    const a = r.documents.map(({ document: f }) => Hf(f, s)),
      l = a.map(({ expression: f }) => f),
      u = a.some(({ isMutation: f }) => f),
      c = r.documents.map(({ variables: f }) => f),
      d = await Wf({
        url: this.url,
        request: { _tag: 'Batch', operationName: void 0, query: l, hasMutations: u, variables: c },
        headers: { ...vs(zf(i)), ...vs(r.requestHeaders) },
        fetch: this.requestConfig.fetch ?? globalThis.fetch,
        method: this.requestConfig.method || 'POST',
        fetchOptions: o,
        middleware: this.requestConfig.requestMiddleware
      })
    if (
      (this.requestConfig.responseMiddleware &&
        (await this.requestConfig.responseMiddleware(d, {
          operationName: void 0,
          variables: c,
          url: this.url
        })),
      d instanceof Error)
    )
      throw d
    return d.data
  }
  setHeaders(t) {
    return (this.requestConfig.headers = t), this
  }
  setHeader(t, n) {
    const { headers: r } = this.requestConfig
    return r ? (r[t] = n) : (this.requestConfig.headers = { [t]: n }), this
  }
  setEndpoint(t) {
    return (this.url = t), this
  }
}
async function HT(e, t, ...n) {
  const r = jN(e, t, ...n)
  return new DN(r.url).request({ ...r })
}
const FN = (e, t, n) =>
    e.document ? e : { document: e, variables: t, requestHeaders: n, signal: void 0 },
  jN = (e, t, ...n) => {
    const [r, i] = n
    return typeof e == 'string'
      ? { url: e, document: t, variables: r, requestHeaders: i, signal: void 0 }
      : e
  },
  WT = (e, ...t) => e.reduce((n, r, i) => `${n}${r}${i in t ? String(t[i]) : ''}`, ''),
  GT = 'https://beta.pokeapi.co/graphql/v1beta',
  $N = ({ types: e, nameOrder: t, heightOrder: n }) => WT`
  query getPokemonByNameAndType(
    $name: String
    $limit: Int!
    $offset: Int!
    $types: [String]
    $nameOrder: order_by
    $heightOrder: order_by
  ) {
    pokemon_aggregate: pokemon_v2_pokemon_aggregate(
      where: {
        name: { _like: $name }
        ${e ? 'pokemon_v2_pokemontypes: { pokemon_v2_type: { name: { _in: $types } } }' : ''}
      }
    ) {
      aggregate {
        count
      }
    }
    pokemons: pokemon_v2_pokemon(
      where: {
        name: { _like: $name }
        ${e ? 'pokemon_v2_pokemontypes: { pokemon_v2_type: { name: { _in: $types } } }' : ''}
      }
      limit: $limit
      offset: $offset
      ${t ? 'order_by: { name: $nameOrder }' : ''}
      ${n ? 'order_by: { height: $heightOrder }' : ''}
    ) {
      name
      sprites: pokemon_v2_pokemonsprites {
        sprites
      }
      types: pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }
  `,
  VN = WT`
  query getPokemonTypes {
    pokemon_v2_type {
      name
    }
  }
`,
  BN = async ({ name: e, limit: t, offset: n, types: r, sort: i }) => {
    const s = {
      name: e ? `%${e}%` : '%%',
      limit: t,
      offset: n,
      types: (r == null ? void 0 : r.split('-')) || void 0,
      nameOrder: void 0,
      heightOrder: void 0
    }
    switch (i) {
      case 'name-asc':
        s.nameOrder = 'asc'
        break
      case 'name-desc':
        s.nameOrder = 'desc'
        break
      case 'height-asc':
        s.heightOrder = 'asc'
        break
      case 'height-desc':
        s.heightOrder = 'desc'
        break
    }
    return HT(GT, $N(s), s)
  },
  zN = async () => HT(GT, VN)
function UN() {
  const {
    data: e,
    isLoading: t,
    isError: n,
    error: r
  } = Nx({ queryKey: ['pokemon-types'], queryFn: zN, staleTime: DS })
  return {
    types: e == null ? void 0 : e.pokemon_v2_type.sort((i, s) => i.name.localeCompare(s.name)),
    isLoading: t,
    isError: n,
    error: r
  }
}
function HN() {
  const { type: e } = Mo({ from: '/' }),
    t = e ? (e == null ? void 0 : e.split('-')) : [],
    [n, r] = w.useState(t),
    { types: i, isLoading: s, error: o, isError: a } = UN(),
    l = No()
  a && console.error({ error: o })
  const u = c => {
    r(c), l({ search: d => ({ ...d, types: c.join('-') || void 0, offset: jl }), resetScroll: !1 })
  }
  return P.jsx('div', {
    className: 'w-44 inline-block',
    children: P.jsxs(AT, {
      multiple: !0,
      value: n,
      onChange: u,
      children: [
        P.jsxs('div', {
          className: 'relative',
          children: [
            P.jsx(O0, {
              readOnly: !0,
              'aria-label': 'Type filter',
              className: Qi(
                'w-full rounded-full border py-1.5 pr-8 pl-3 h-11 text-sm/6 dark:text-white dark:border-slate-800 border-slate-300 bg-slate-50 dark:bg-slate-900 select-none',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-1 data-[focus]:outline-yellow-500'
              ),
              displayValue: () => `Filter by types (${n.length})`
            }),
            P.jsx(A0, {
              'aria-label': 'Open type filter menu',
              disabled: s || a,
              className:
                'group rounded-full w-full h-11 flex justify-end items-center dark:text-slate-400 inset-y-0 my-auto absolute px-3',
              children: P.jsx(mk, { className: 'size-4 dark:text-slate-50' })
            })
          ]
        }),
        P.jsx(L0, {
          anchor: 'bottom start',
          transition: !0,
          className: Qi(
            'w-52 rounded-xl border bg-slate-800 border-slate-900 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible',
            'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
          ),
          children:
            i == null
              ? void 0
              : i.map(c =>
                  P.jsxs(
                    M0,
                    {
                      value: c.name,
                      className:
                        'group flex justify-between cursor-pointer items-center gap-2 rounded-lg text-white  hover:bg-slate-600 py-1.5 px-3 select-none data-[selected]:bg-slate-700',
                      children: [
                        P.jsxs('div', {
                          className: 'flex gap-3 items-center',
                          children: [
                            Object.prototype.hasOwnProperty.call(xp, c.name)
                              ? P.jsx('div', {
                                  className: 'rounded-full p-2 bg-slate-400',
                                  style: { background: FS[c.name] },
                                  children: P.jsx('img', {
                                    height: 20,
                                    width: 20,
                                    alt: `Type ${c.name} icon`,
                                    src: xp[c.name] || ''
                                  })
                                })
                              : P.jsx('div', { className: 'size-9 bg-slate-50 rounded-full' }),
                            P.jsx('div', { className: 'text-sm/6 capitalize', children: c.name })
                          ]
                        }),
                        P.jsx(rE, {
                          className: 'invisible size-4  text-slate-50 group-data-[selected]:visible'
                        })
                      ]
                    },
                    c.name
                  )
                )
        })
      ]
    })
  })
}
const WN = 300
function GN() {
  const { name: e } = Mo({ from: '/' }),
    [t, n] = w.useState(e || ''),
    [r, i] = w.useState(''),
    s = No(),
    o = w.useRef(!0)
  w.useEffect(() => {
    ;(o.current && !r) ||
      (s({
        search: l => ({ ...l, name: (r == null ? void 0 : r.toLowerCase()) || void 0, offset: jl }),
        resetScroll: !1
      }),
      (o.current = !1))
  }, [r, s]),
    Ik(() => i(t), WN, [t])
  const a = l => {
    n(l.target.value)
  }
  return P.jsxs('div', {
    className: 'relative focus-within:text-yellow-500 dark:text-white inline-block',
    children: [
      P.jsx('input', {
        className: Qi(
          'h-11 inline-block rounded-full px-4 w-64 pl-10',
          'border border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-950 dark:text-white',
          'focus:outline-none focus:ring-2 ring-yellow-500  focus:bg-white focus:dark:bg-slate-800'
        ),
        onChange: a,
        type: 'search',
        value: t,
        placeholder: 'Search for a Pokémon...'
      }),
      P.jsx(Ek, { size: 18, className: 'absolute inset-y-0 my-auto left-4' })
    ]
  })
}
const qN = ({ name: e, limit: t = Ma, offset: n = jl, types: r, sort: i }) => {
  const {
    data: s,
    isLoading: o,
    isError: a,
    error: l,
    isFetching: u
  } = Nx({
    queryKey: ['pokemon', e, t, n, r, i],
    queryFn: () => BN({ name: e, limit: t, offset: n, types: r, sort: i }),
    staleTime: DS,
    placeholderData: c => c
  })
  return {
    pokemons: s == null ? void 0 : s.pokemons,
    totalItems: s == null ? void 0 : s.pokemon_aggregate.aggregate.count,
    isLoading: o,
    isError: a,
    error: l,
    isFetching: u
  }
}
function KN() {
  const e = w.useRef(0),
    { limit: t, offset: n, ...r } = Mo({ from: '/' }),
    i = No(),
    {
      pokemons: s,
      totalItems: o,
      isLoading: a,
      isError: l,
      error: u,
      isFetching: c
    } = qN({ limit: t, offset: n, ...r })
  !a && e.current !== o && (e.current = o || 0)
  const d = h => {
      i({ search: v => ({ ...v, offset: h }), resetScroll: !1 }),
        window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    f = h => {
      i({ search: v => ({ ...v, limit: h }) })
    }
  return l
    ? P.jsxs('div', {
        children: [
          P.jsx('h2', { children: 'Error occurred:' }),
          P.jsx('p', { children: u == null ? void 0 : u.message })
        ]
      })
    : P.jsxs('div', {
        children: [
          c &&
            P.jsx(wk, {
              'aria-label': 'Loading...',
              className: Qi(
                'z-50',
                'dark:bg-slate-900 dark:text-white border dark:border-slate-800',
                'mx-auto mt-40 sm:mt-24 animate-spin bg-slate-50 p-3 absolute inset-0 m-auto -top-3  rounded-full border-slate-200'
              ),
              size: 52
            }),
          P.jsxs('div', {
            className: 'flex items-center justify-between mt-40 sm:mt-28 px-6 sm:flex-col sm:gap-3',
            children: [
              P.jsx(GN, {}),
              P.jsxs('div', { className: 'flex gap-2', children: [P.jsx(HN, {}), P.jsx(M7, {})] })
            ]
          }),
          P.jsx(ZO, { pokemons: s, limit: t || Ma, isLoading: a }),
          P.jsxs('div', {
            className: 'flex gap-6 justify-center items-center flex-col my-24',
            children: [
              P.jsx(Bk, {
                totalItems: e.current,
                itemsPerPage: t || Ma,
                offset: n || jl,
                onOffsetChange: d
              }),
              P.jsx(Vk, { itemsPerPage: t || Ma, onItemsPerPageChange: f })
            ]
          })
        ]
      })
}
/*! @license DOMPurify 3.1.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.6/LICENSE */ const {
  entries: qT,
  setPrototypeOf: z2,
  isFrozen: ZN,
  getPrototypeOf: YN,
  getOwnPropertyDescriptor: QN
} = Object
let { freeze: kt, seal: mn, create: KT } = Object,
  { apply: Fp, construct: jp } = typeof Reflect < 'u' && Reflect
kt ||
  (kt = function (t) {
    return t
  })
mn ||
  (mn = function (t) {
    return t
  })
Fp ||
  (Fp = function (t, n, r) {
    return t.apply(n, r)
  })
jp ||
  (jp = function (t, n) {
    return new t(...n)
  })
const Pu = Xt(Array.prototype.forEach),
  U2 = Xt(Array.prototype.pop),
  ta = Xt(Array.prototype.push),
  Xu = Xt(String.prototype.toLowerCase),
  Gf = Xt(String.prototype.toString),
  H2 = Xt(String.prototype.match),
  na = Xt(String.prototype.replace),
  XN = Xt(String.prototype.indexOf),
  JN = Xt(String.prototype.trim),
  yn = Xt(Object.prototype.hasOwnProperty),
  xt = Xt(RegExp.prototype.test),
  ra = eI(TypeError)
function Xt(e) {
  return function (t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i]
    return Fp(e, t, r)
  }
}
function eI(e) {
  return function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]
    return jp(e, n)
  }
}
function he(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Xu
  z2 && z2(e, null)
  let r = t.length
  for (; r--; ) {
    let i = t[r]
    if (typeof i == 'string') {
      const s = n(i)
      s !== i && (ZN(t) || (t[r] = s), (i = s))
    }
    e[i] = !0
  }
  return e
}
function tI(e) {
  for (let t = 0; t < e.length; t++) yn(e, t) || (e[t] = null)
  return e
}
function Ti(e) {
  const t = KT(null)
  for (const [n, r] of qT(e))
    yn(e, n) &&
      (Array.isArray(r)
        ? (t[n] = tI(r))
        : r && typeof r == 'object' && r.constructor === Object
          ? (t[n] = Ti(r))
          : (t[n] = r))
  return t
}
function ia(e, t) {
  for (; e !== null; ) {
    const r = QN(e, t)
    if (r) {
      if (r.get) return Xt(r.get)
      if (typeof r.value == 'function') return Xt(r.value)
    }
    e = YN(e)
  }
  function n() {
    return null
  }
  return n
}
const W2 = kt([
    'a',
    'abbr',
    'acronym',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'bdi',
    'bdo',
    'big',
    'blink',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'center',
    'cite',
    'code',
    'col',
    'colgroup',
    'content',
    'data',
    'datalist',
    'dd',
    'decorator',
    'del',
    'details',
    'dfn',
    'dialog',
    'dir',
    'div',
    'dl',
    'dt',
    'element',
    'em',
    'fieldset',
    'figcaption',
    'figure',
    'font',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'img',
    'input',
    'ins',
    'kbd',
    'label',
    'legend',
    'li',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meter',
    'nav',
    'nobr',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'section',
    'select',
    'shadow',
    'small',
    'source',
    'spacer',
    'span',
    'strike',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'template',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'tr',
    'track',
    'tt',
    'u',
    'ul',
    'var',
    'video',
    'wbr'
  ]),
  qf = kt([
    'svg',
    'a',
    'altglyph',
    'altglyphdef',
    'altglyphitem',
    'animatecolor',
    'animatemotion',
    'animatetransform',
    'circle',
    'clippath',
    'defs',
    'desc',
    'ellipse',
    'filter',
    'font',
    'g',
    'glyph',
    'glyphref',
    'hkern',
    'image',
    'line',
    'lineargradient',
    'marker',
    'mask',
    'metadata',
    'mpath',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialgradient',
    'rect',
    'stop',
    'style',
    'switch',
    'symbol',
    'text',
    'textpath',
    'title',
    'tref',
    'tspan',
    'view',
    'vkern'
  ]),
  Kf = kt([
    'feBlend',
    'feColorMatrix',
    'feComponentTransfer',
    'feComposite',
    'feConvolveMatrix',
    'feDiffuseLighting',
    'feDisplacementMap',
    'feDistantLight',
    'feDropShadow',
    'feFlood',
    'feFuncA',
    'feFuncB',
    'feFuncG',
    'feFuncR',
    'feGaussianBlur',
    'feImage',
    'feMerge',
    'feMergeNode',
    'feMorphology',
    'feOffset',
    'fePointLight',
    'feSpecularLighting',
    'feSpotLight',
    'feTile',
    'feTurbulence'
  ]),
  nI = kt([
    'animate',
    'color-profile',
    'cursor',
    'discard',
    'font-face',
    'font-face-format',
    'font-face-name',
    'font-face-src',
    'font-face-uri',
    'foreignobject',
    'hatch',
    'hatchpath',
    'mesh',
    'meshgradient',
    'meshpatch',
    'meshrow',
    'missing-glyph',
    'script',
    'set',
    'solidcolor',
    'unknown',
    'use'
  ]),
  Zf = kt([
    'math',
    'menclose',
    'merror',
    'mfenced',
    'mfrac',
    'mglyph',
    'mi',
    'mlabeledtr',
    'mmultiscripts',
    'mn',
    'mo',
    'mover',
    'mpadded',
    'mphantom',
    'mroot',
    'mrow',
    'ms',
    'mspace',
    'msqrt',
    'mstyle',
    'msub',
    'msup',
    'msubsup',
    'mtable',
    'mtd',
    'mtext',
    'mtr',
    'munder',
    'munderover',
    'mprescripts'
  ]),
  rI = kt([
    'maction',
    'maligngroup',
    'malignmark',
    'mlongdiv',
    'mscarries',
    'mscarry',
    'msgroup',
    'mstack',
    'msline',
    'msrow',
    'semantics',
    'annotation',
    'annotation-xml',
    'mprescripts',
    'none'
  ]),
  G2 = kt(['#text']),
  q2 = kt([
    'accept',
    'action',
    'align',
    'alt',
    'autocapitalize',
    'autocomplete',
    'autopictureinpicture',
    'autoplay',
    'background',
    'bgcolor',
    'border',
    'capture',
    'cellpadding',
    'cellspacing',
    'checked',
    'cite',
    'class',
    'clear',
    'color',
    'cols',
    'colspan',
    'controls',
    'controlslist',
    'coords',
    'crossorigin',
    'datetime',
    'decoding',
    'default',
    'dir',
    'disabled',
    'disablepictureinpicture',
    'disableremoteplayback',
    'download',
    'draggable',
    'enctype',
    'enterkeyhint',
    'face',
    'for',
    'headers',
    'height',
    'hidden',
    'high',
    'href',
    'hreflang',
    'id',
    'inputmode',
    'integrity',
    'ismap',
    'kind',
    'label',
    'lang',
    'list',
    'loading',
    'loop',
    'low',
    'max',
    'maxlength',
    'media',
    'method',
    'min',
    'minlength',
    'multiple',
    'muted',
    'name',
    'nonce',
    'noshade',
    'novalidate',
    'nowrap',
    'open',
    'optimum',
    'pattern',
    'placeholder',
    'playsinline',
    'popover',
    'popovertarget',
    'popovertargetaction',
    'poster',
    'preload',
    'pubdate',
    'radiogroup',
    'readonly',
    'rel',
    'required',
    'rev',
    'reversed',
    'role',
    'rows',
    'rowspan',
    'spellcheck',
    'scope',
    'selected',
    'shape',
    'size',
    'sizes',
    'span',
    'srclang',
    'start',
    'src',
    'srcset',
    'step',
    'style',
    'summary',
    'tabindex',
    'title',
    'translate',
    'type',
    'usemap',
    'valign',
    'value',
    'width',
    'wrap',
    'xmlns',
    'slot'
  ]),
  Yf = kt([
    'accent-height',
    'accumulate',
    'additive',
    'alignment-baseline',
    'ascent',
    'attributename',
    'attributetype',
    'azimuth',
    'basefrequency',
    'baseline-shift',
    'begin',
    'bias',
    'by',
    'class',
    'clip',
    'clippathunits',
    'clip-path',
    'clip-rule',
    'color',
    'color-interpolation',
    'color-interpolation-filters',
    'color-profile',
    'color-rendering',
    'cx',
    'cy',
    'd',
    'dx',
    'dy',
    'diffuseconstant',
    'direction',
    'display',
    'divisor',
    'dur',
    'edgemode',
    'elevation',
    'end',
    'fill',
    'fill-opacity',
    'fill-rule',
    'filter',
    'filterunits',
    'flood-color',
    'flood-opacity',
    'font-family',
    'font-size',
    'font-size-adjust',
    'font-stretch',
    'font-style',
    'font-variant',
    'font-weight',
    'fx',
    'fy',
    'g1',
    'g2',
    'glyph-name',
    'glyphref',
    'gradientunits',
    'gradienttransform',
    'height',
    'href',
    'id',
    'image-rendering',
    'in',
    'in2',
    'k',
    'k1',
    'k2',
    'k3',
    'k4',
    'kerning',
    'keypoints',
    'keysplines',
    'keytimes',
    'lang',
    'lengthadjust',
    'letter-spacing',
    'kernelmatrix',
    'kernelunitlength',
    'lighting-color',
    'local',
    'marker-end',
    'marker-mid',
    'marker-start',
    'markerheight',
    'markerunits',
    'markerwidth',
    'maskcontentunits',
    'maskunits',
    'max',
    'mask',
    'media',
    'method',
    'mode',
    'min',
    'name',
    'numoctaves',
    'offset',
    'operator',
    'opacity',
    'order',
    'orient',
    'orientation',
    'origin',
    'overflow',
    'paint-order',
    'path',
    'pathlength',
    'patterncontentunits',
    'patterntransform',
    'patternunits',
    'points',
    'preservealpha',
    'preserveaspectratio',
    'primitiveunits',
    'r',
    'rx',
    'ry',
    'radius',
    'refx',
    'refy',
    'repeatcount',
    'repeatdur',
    'restart',
    'result',
    'rotate',
    'scale',
    'seed',
    'shape-rendering',
    'specularconstant',
    'specularexponent',
    'spreadmethod',
    'startoffset',
    'stddeviation',
    'stitchtiles',
    'stop-color',
    'stop-opacity',
    'stroke-dasharray',
    'stroke-dashoffset',
    'stroke-linecap',
    'stroke-linejoin',
    'stroke-miterlimit',
    'stroke-opacity',
    'stroke',
    'stroke-width',
    'style',
    'surfacescale',
    'systemlanguage',
    'tabindex',
    'targetx',
    'targety',
    'transform',
    'transform-origin',
    'text-anchor',
    'text-decoration',
    'text-rendering',
    'textlength',
    'type',
    'u1',
    'u2',
    'unicode',
    'values',
    'viewbox',
    'visibility',
    'version',
    'vert-adv-y',
    'vert-origin-x',
    'vert-origin-y',
    'width',
    'word-spacing',
    'wrap',
    'writing-mode',
    'xchannelselector',
    'ychannelselector',
    'x',
    'x1',
    'x2',
    'xmlns',
    'y',
    'y1',
    'y2',
    'z',
    'zoomandpan'
  ]),
  K2 = kt([
    'accent',
    'accentunder',
    'align',
    'bevelled',
    'close',
    'columnsalign',
    'columnlines',
    'columnspan',
    'denomalign',
    'depth',
    'dir',
    'display',
    'displaystyle',
    'encoding',
    'fence',
    'frame',
    'height',
    'href',
    'id',
    'largeop',
    'length',
    'linethickness',
    'lspace',
    'lquote',
    'mathbackground',
    'mathcolor',
    'mathsize',
    'mathvariant',
    'maxsize',
    'minsize',
    'movablelimits',
    'notation',
    'numalign',
    'open',
    'rowalign',
    'rowlines',
    'rowspacing',
    'rowspan',
    'rspace',
    'rquote',
    'scriptlevel',
    'scriptminsize',
    'scriptsizemultiplier',
    'selection',
    'separator',
    'separators',
    'stretchy',
    'subscriptshift',
    'supscriptshift',
    'symmetric',
    'voffset',
    'width',
    'xmlns'
  ]),
  Ru = kt(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']),
  iI = mn(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
  sI = mn(/<%[\w\W]*|[\w\W]*%>/gm),
  oI = mn(/\${[\w\W]*}/gm),
  aI = mn(/^data-[\-\w.\u00B7-\uFFFF]/),
  lI = mn(/^aria-[\-\w]+$/),
  ZT = mn(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
  uI = mn(/^(?:\w+script|data):/i),
  cI = mn(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
  YT = mn(/^html$/i),
  dI = mn(/^[a-z][.\w]*(-[.\w]+)+$/i)
var Z2 = Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR: iI,
  ERB_EXPR: sI,
  TMPLIT_EXPR: oI,
  DATA_ATTR: aI,
  ARIA_ATTR: lI,
  IS_ALLOWED_URI: ZT,
  IS_SCRIPT_OR_DATA: uI,
  ATTR_WHITESPACE: cI,
  DOCTYPE_NAME: YT,
  CUSTOM_ELEMENT: dI
})
const sa = {
    element: 1,
    attribute: 2,
    text: 3,
    cdataSection: 4,
    entityReference: 5,
    entityNode: 6,
    progressingInstruction: 7,
    comment: 8,
    document: 9,
    documentType: 10,
    documentFragment: 11,
    notation: 12
  },
  fI = function () {
    return typeof window > 'u' ? null : window
  },
  hI = function (t, n) {
    if (typeof t != 'object' || typeof t.createPolicy != 'function') return null
    let r = null
    const i = 'data-tt-policy-suffix'
    n && n.hasAttribute(i) && (r = n.getAttribute(i))
    const s = 'dompurify' + (r ? '#' + r : '')
    try {
      return t.createPolicy(s, {
        createHTML(o) {
          return o
        },
        createScriptURL(o) {
          return o
        }
      })
    } catch {
      return console.warn('TrustedTypes policy ' + s + ' could not be created.'), null
    }
  }
function QT() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : fI()
  const t = J => QT(J)
  if (
    ((t.version = '3.1.6'), (t.removed = []), !e || !e.document || e.document.nodeType !== sa.document)
  )
    return (t.isSupported = !1), t
  let { document: n } = e
  const r = n,
    i = r.currentScript,
    {
      DocumentFragment: s,
      HTMLTemplateElement: o,
      Node: a,
      Element: l,
      NodeFilter: u,
      NamedNodeMap: c = e.NamedNodeMap || e.MozNamedAttrMap,
      HTMLFormElement: d,
      DOMParser: f,
      trustedTypes: h
    } = e,
    v = l.prototype,
    y = ia(v, 'cloneNode'),
    x = ia(v, 'remove'),
    p = ia(v, 'nextSibling'),
    m = ia(v, 'childNodes'),
    g = ia(v, 'parentNode')
  if (typeof o == 'function') {
    const J = n.createElement('template')
    J.content && J.content.ownerDocument && (n = J.content.ownerDocument)
  }
  let E,
    S = ''
  const {
      implementation: C,
      createNodeIterator: k,
      createDocumentFragment: T,
      getElementsByTagName: A
    } = n,
    { importNode: O } = r
  let D = {}
  t.isSupported =
    typeof qT == 'function' && typeof g == 'function' && C && C.createHTMLDocument !== void 0
  const {
    MUSTACHE_EXPR: Z,
    ERB_EXPR: re,
    TMPLIT_EXPR: M,
    DATA_ATTR: W,
    ARIA_ATTR: oe,
    IS_SCRIPT_OR_DATA: ee,
    ATTR_WHITESPACE: R,
    CUSTOM_ELEMENT: $
  } = Z2
  let { IS_ALLOWED_URI: z } = Z2,
    V = null
  const q = he({}, [...W2, ...qf, ...Kf, ...Zf, ...G2])
  let F = null
  const ye = he({}, [...q2, ...Yf, ...K2, ...Ru])
  let ne = Object.seal(
      KT(null, {
        tagNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
        attributeNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
        allowCustomizedBuiltInElements: { writable: !0, configurable: !1, enumerable: !0, value: !1 }
      })
    ),
    Ce = null,
    Ee = null,
    Oe = !0,
    Pe = !0,
    Ye = !1,
    yt = !0,
    $t = !1,
    te = !0,
    Q = !1,
    Te = !1,
    nn = !1,
    Vt = !1,
    as = !1,
    ls = !1,
    Kl = !0,
    Zl = !1
  const Ad = 'user-content-'
  let Od = !0,
    Vo = !1,
    us = {},
    cs = null
  const $0 = he({}, [
    'annotation-xml',
    'audio',
    'colgroup',
    'desc',
    'foreignobject',
    'head',
    'iframe',
    'math',
    'mi',
    'mn',
    'mo',
    'ms',
    'mtext',
    'noembed',
    'noframes',
    'noscript',
    'plaintext',
    'script',
    'style',
    'svg',
    'template',
    'thead',
    'title',
    'video',
    'xmp'
  ])
  let V0 = null
  const B0 = he({}, ['audio', 'video', 'img', 'source', 'image', 'track'])
  let Ld = null
  const z0 = he({}, [
      'alt',
      'class',
      'for',
      'id',
      'label',
      'name',
      'pattern',
      'placeholder',
      'role',
      'summary',
      'title',
      'value',
      'style',
      'xmlns'
    ]),
    Yl = 'http://www.w3.org/1998/Math/MathML',
    Ql = 'http://www.w3.org/2000/svg',
    Jn = 'http://www.w3.org/1999/xhtml'
  let ds = Jn,
    Md = !1,
    Nd = null
  const lC = he({}, [Yl, Ql, Jn], Gf)
  let Bo = null
  const uC = ['application/xhtml+xml', 'text/html'],
    cC = 'text/html'
  let Qe = null,
    fs = null
  const dC = n.createElement('form'),
    U0 = function (_) {
      return _ instanceof RegExp || _ instanceof Function
    },
    Id = function () {
      let _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
      if (!(fs && fs === _)) {
        if (
          ((!_ || typeof _ != 'object') && (_ = {}),
          (_ = Ti(_)),
          (Bo = uC.indexOf(_.PARSER_MEDIA_TYPE) === -1 ? cC : _.PARSER_MEDIA_TYPE),
          (Qe = Bo === 'application/xhtml+xml' ? Gf : Xu),
          (V = yn(_, 'ALLOWED_TAGS') ? he({}, _.ALLOWED_TAGS, Qe) : q),
          (F = yn(_, 'ALLOWED_ATTR') ? he({}, _.ALLOWED_ATTR, Qe) : ye),
          (Nd = yn(_, 'ALLOWED_NAMESPACES') ? he({}, _.ALLOWED_NAMESPACES, Gf) : lC),
          (Ld = yn(_, 'ADD_URI_SAFE_ATTR') ? he(Ti(z0), _.ADD_URI_SAFE_ATTR, Qe) : z0),
          (V0 = yn(_, 'ADD_DATA_URI_TAGS') ? he(Ti(B0), _.ADD_DATA_URI_TAGS, Qe) : B0),
          (cs = yn(_, 'FORBID_CONTENTS') ? he({}, _.FORBID_CONTENTS, Qe) : $0),
          (Ce = yn(_, 'FORBID_TAGS') ? he({}, _.FORBID_TAGS, Qe) : {}),
          (Ee = yn(_, 'FORBID_ATTR') ? he({}, _.FORBID_ATTR, Qe) : {}),
          (us = yn(_, 'USE_PROFILES') ? _.USE_PROFILES : !1),
          (Oe = _.ALLOW_ARIA_ATTR !== !1),
          (Pe = _.ALLOW_DATA_ATTR !== !1),
          (Ye = _.ALLOW_UNKNOWN_PROTOCOLS || !1),
          (yt = _.ALLOW_SELF_CLOSE_IN_ATTR !== !1),
          ($t = _.SAFE_FOR_TEMPLATES || !1),
          (te = _.SAFE_FOR_XML !== !1),
          (Q = _.WHOLE_DOCUMENT || !1),
          (Vt = _.RETURN_DOM || !1),
          (as = _.RETURN_DOM_FRAGMENT || !1),
          (ls = _.RETURN_TRUSTED_TYPE || !1),
          (nn = _.FORCE_BODY || !1),
          (Kl = _.SANITIZE_DOM !== !1),
          (Zl = _.SANITIZE_NAMED_PROPS || !1),
          (Od = _.KEEP_CONTENT !== !1),
          (Vo = _.IN_PLACE || !1),
          (z = _.ALLOWED_URI_REGEXP || ZT),
          (ds = _.NAMESPACE || Jn),
          (ne = _.CUSTOM_ELEMENT_HANDLING || {}),
          _.CUSTOM_ELEMENT_HANDLING &&
            U0(_.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
            (ne.tagNameCheck = _.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
          _.CUSTOM_ELEMENT_HANDLING &&
            U0(_.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
            (ne.attributeNameCheck = _.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
          _.CUSTOM_ELEMENT_HANDLING &&
            typeof _.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == 'boolean' &&
            (ne.allowCustomizedBuiltInElements =
              _.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
          $t && (Pe = !1),
          as && (Vt = !0),
          us &&
            ((V = he({}, G2)),
            (F = []),
            us.html === !0 && (he(V, W2), he(F, q2)),
            us.svg === !0 && (he(V, qf), he(F, Yf), he(F, Ru)),
            us.svgFilters === !0 && (he(V, Kf), he(F, Yf), he(F, Ru)),
            us.mathMl === !0 && (he(V, Zf), he(F, K2), he(F, Ru))),
          _.ADD_TAGS && (V === q && (V = Ti(V)), he(V, _.ADD_TAGS, Qe)),
          _.ADD_ATTR && (F === ye && (F = Ti(F)), he(F, _.ADD_ATTR, Qe)),
          _.ADD_URI_SAFE_ATTR && he(Ld, _.ADD_URI_SAFE_ATTR, Qe),
          _.FORBID_CONTENTS && (cs === $0 && (cs = Ti(cs)), he(cs, _.FORBID_CONTENTS, Qe)),
          Od && (V['#text'] = !0),
          Q && he(V, ['html', 'head', 'body']),
          V.table && (he(V, ['tbody']), delete Ce.tbody),
          _.TRUSTED_TYPES_POLICY)
        ) {
          if (typeof _.TRUSTED_TYPES_POLICY.createHTML != 'function')
            throw ra('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.')
          if (typeof _.TRUSTED_TYPES_POLICY.createScriptURL != 'function')
            throw ra('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.')
          ;(E = _.TRUSTED_TYPES_POLICY), (S = E.createHTML(''))
        } else
          E === void 0 && (E = hI(h, i)), E !== null && typeof S == 'string' && (S = E.createHTML(''))
        kt && kt(_), (fs = _)
      }
    },
    H0 = he({}, ['mi', 'mo', 'mn', 'ms', 'mtext']),
    W0 = he({}, ['foreignobject', 'annotation-xml']),
    fC = he({}, ['title', 'style', 'font', 'a', 'script']),
    G0 = he({}, [...qf, ...Kf, ...nI]),
    q0 = he({}, [...Zf, ...rI]),
    hC = function (_) {
      let j = g(_)
      ;(!j || !j.tagName) && (j = { namespaceURI: ds, tagName: 'template' })
      const Y = Xu(_.tagName),
        Re = Xu(j.tagName)
      return Nd[_.namespaceURI]
        ? _.namespaceURI === Ql
          ? j.namespaceURI === Jn
            ? Y === 'svg'
            : j.namespaceURI === Yl
              ? Y === 'svg' && (Re === 'annotation-xml' || H0[Re])
              : !!G0[Y]
          : _.namespaceURI === Yl
            ? j.namespaceURI === Jn
              ? Y === 'math'
              : j.namespaceURI === Ql
                ? Y === 'math' && W0[Re]
                : !!q0[Y]
            : _.namespaceURI === Jn
              ? (j.namespaceURI === Ql && !W0[Re]) || (j.namespaceURI === Yl && !H0[Re])
                ? !1
                : !q0[Y] && (fC[Y] || !G0[Y])
              : !!(Bo === 'application/xhtml+xml' && Nd[_.namespaceURI])
        : !1
    },
    In = function (_) {
      ta(t.removed, { element: _ })
      try {
        g(_).removeChild(_)
      } catch {
        x(_)
      }
    },
    Xl = function (_, j) {
      try {
        ta(t.removed, { attribute: j.getAttributeNode(_), from: j })
      } catch {
        ta(t.removed, { attribute: null, from: j })
      }
      if ((j.removeAttribute(_), _ === 'is' && !F[_]))
        if (Vt || as)
          try {
            In(j)
          } catch {}
        else
          try {
            j.setAttribute(_, '')
          } catch {}
    },
    K0 = function (_) {
      let j = null,
        Y = null
      if (nn) _ = '<remove></remove>' + _
      else {
        const tt = H2(_, /^[\r\n\t ]+/)
        Y = tt && tt[0]
      }
      Bo === 'application/xhtml+xml' &&
        ds === Jn &&
        (_ = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + _ + '</body></html>')
      const Re = E ? E.createHTML(_) : _
      if (ds === Jn)
        try {
          j = new f().parseFromString(Re, Bo)
        } catch {}
      if (!j || !j.documentElement) {
        j = C.createDocument(ds, 'template', null)
        try {
          j.documentElement.innerHTML = Md ? S : Re
        } catch {}
      }
      const at = j.body || j.documentElement
      return (
        _ && Y && at.insertBefore(n.createTextNode(Y), at.childNodes[0] || null),
        ds === Jn ? A.call(j, Q ? 'html' : 'body')[0] : Q ? j.documentElement : at
      )
    },
    Z0 = function (_) {
      return k.call(
        _.ownerDocument || _,
        _,
        u.SHOW_ELEMENT |
          u.SHOW_COMMENT |
          u.SHOW_TEXT |
          u.SHOW_PROCESSING_INSTRUCTION |
          u.SHOW_CDATA_SECTION,
        null
      )
    },
    Y0 = function (_) {
      return (
        _ instanceof d &&
        (typeof _.nodeName != 'string' ||
          typeof _.textContent != 'string' ||
          typeof _.removeChild != 'function' ||
          !(_.attributes instanceof c) ||
          typeof _.removeAttribute != 'function' ||
          typeof _.setAttribute != 'function' ||
          typeof _.namespaceURI != 'string' ||
          typeof _.insertBefore != 'function' ||
          typeof _.hasChildNodes != 'function')
      )
    },
    Q0 = function (_) {
      return typeof a == 'function' && _ instanceof a
    },
    er = function (_, j, Y) {
      D[_] &&
        Pu(D[_], Re => {
          Re.call(t, j, Y, fs)
        })
    },
    X0 = function (_) {
      let j = null
      if ((er('beforeSanitizeElements', _, null), Y0(_))) return In(_), !0
      const Y = Qe(_.nodeName)
      if (
        (er('uponSanitizeElement', _, { tagName: Y, allowedTags: V }),
        (_.hasChildNodes() &&
          !Q0(_.firstElementChild) &&
          xt(/<[/\w]/g, _.innerHTML) &&
          xt(/<[/\w]/g, _.textContent)) ||
          _.nodeType === sa.progressingInstruction ||
          (te && _.nodeType === sa.comment && xt(/<[/\w]/g, _.data)))
      )
        return In(_), !0
      if (!V[Y] || Ce[Y]) {
        if (
          !Ce[Y] &&
          eg(Y) &&
          ((ne.tagNameCheck instanceof RegExp && xt(ne.tagNameCheck, Y)) ||
            (ne.tagNameCheck instanceof Function && ne.tagNameCheck(Y)))
        )
          return !1
        if (Od && !cs[Y]) {
          const Re = g(_) || _.parentNode,
            at = m(_) || _.childNodes
          if (at && Re) {
            const tt = at.length
            for (let Ot = tt - 1; Ot >= 0; --Ot) {
              const Dn = y(at[Ot], !0)
              ;(Dn.__removalCount = (_.__removalCount || 0) + 1), Re.insertBefore(Dn, p(_))
            }
          }
        }
        return In(_), !0
      }
      return (_ instanceof l && !hC(_)) ||
        ((Y === 'noscript' || Y === 'noembed' || Y === 'noframes') &&
          xt(/<\/no(script|embed|frames)/i, _.innerHTML))
        ? (In(_), !0)
        : ($t &&
            _.nodeType === sa.text &&
            ((j = _.textContent),
            Pu([Z, re, M], Re => {
              j = na(j, Re, ' ')
            }),
            _.textContent !== j && (ta(t.removed, { element: _.cloneNode() }), (_.textContent = j))),
          er('afterSanitizeElements', _, null),
          !1)
    },
    J0 = function (_, j, Y) {
      if (Kl && (j === 'id' || j === 'name') && (Y in n || Y in dC)) return !1
      if (!(Pe && !Ee[j] && xt(W, j))) {
        if (!(Oe && xt(oe, j))) {
          if (!F[j] || Ee[j]) {
            if (
              !(
                (eg(_) &&
                  ((ne.tagNameCheck instanceof RegExp && xt(ne.tagNameCheck, _)) ||
                    (ne.tagNameCheck instanceof Function && ne.tagNameCheck(_))) &&
                  ((ne.attributeNameCheck instanceof RegExp && xt(ne.attributeNameCheck, j)) ||
                    (ne.attributeNameCheck instanceof Function && ne.attributeNameCheck(j)))) ||
                (j === 'is' &&
                  ne.allowCustomizedBuiltInElements &&
                  ((ne.tagNameCheck instanceof RegExp && xt(ne.tagNameCheck, Y)) ||
                    (ne.tagNameCheck instanceof Function && ne.tagNameCheck(Y))))
              )
            )
              return !1
          } else if (!Ld[j]) {
            if (!xt(z, na(Y, R, ''))) {
              if (
                !(
                  (j === 'src' || j === 'xlink:href' || j === 'href') &&
                  _ !== 'script' &&
                  XN(Y, 'data:') === 0 &&
                  V0[_]
                )
              ) {
                if (!(Ye && !xt(ee, na(Y, R, '')))) {
                  if (Y) return !1
                }
              }
            }
          }
        }
      }
      return !0
    },
    eg = function (_) {
      return _ !== 'annotation-xml' && H2(_, $)
    },
    tg = function (_) {
      er('beforeSanitizeAttributes', _, null)
      const { attributes: j } = _
      if (!j) return
      const Y = { attrName: '', attrValue: '', keepAttr: !0, allowedAttributes: F }
      let Re = j.length
      for (; Re--; ) {
        const at = j[Re],
          { name: tt, namespaceURI: Ot, value: Dn } = at,
          zo = Qe(tt)
        let wt = tt === 'value' ? Dn : JN(Dn)
        if (
          ((Y.attrName = zo),
          (Y.attrValue = wt),
          (Y.keepAttr = !0),
          (Y.forceKeepAttr = void 0),
          er('uponSanitizeAttribute', _, Y),
          (wt = Y.attrValue),
          te && xt(/((--!?|])>)|<\/(style|title)/i, wt))
        ) {
          Xl(tt, _)
          continue
        }
        if (Y.forceKeepAttr || (Xl(tt, _), !Y.keepAttr)) continue
        if (!yt && xt(/\/>/i, wt)) {
          Xl(tt, _)
          continue
        }
        $t &&
          Pu([Z, re, M], rg => {
            wt = na(wt, rg, ' ')
          })
        const ng = Qe(_.nodeName)
        if (J0(ng, zo, wt)) {
          if (
            (Zl && (zo === 'id' || zo === 'name') && (Xl(tt, _), (wt = Ad + wt)),
            E && typeof h == 'object' && typeof h.getAttributeType == 'function' && !Ot)
          )
            switch (h.getAttributeType(ng, zo)) {
              case 'TrustedHTML': {
                wt = E.createHTML(wt)
                break
              }
              case 'TrustedScriptURL': {
                wt = E.createScriptURL(wt)
                break
              }
            }
          try {
            Ot ? _.setAttributeNS(Ot, tt, wt) : _.setAttribute(tt, wt), Y0(_) ? In(_) : U2(t.removed)
          } catch {}
        }
      }
      er('afterSanitizeAttributes', _, null)
    },
    pC = function J(_) {
      let j = null
      const Y = Z0(_)
      for (er('beforeSanitizeShadowDOM', _, null); (j = Y.nextNode()); )
        er('uponSanitizeShadowNode', j, null), !X0(j) && (j.content instanceof s && J(j.content), tg(j))
      er('afterSanitizeShadowDOM', _, null)
    }
  return (
    (t.sanitize = function (J) {
      let _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        j = null,
        Y = null,
        Re = null,
        at = null
      if (((Md = !J), Md && (J = '<!-->'), typeof J != 'string' && !Q0(J)))
        if (typeof J.toString == 'function') {
          if (((J = J.toString()), typeof J != 'string')) throw ra('dirty is not a string, aborting')
        } else throw ra('toString is not a function')
      if (!t.isSupported) return J
      if ((Te || Id(_), (t.removed = []), typeof J == 'string' && (Vo = !1), Vo)) {
        if (J.nodeName) {
          const Dn = Qe(J.nodeName)
          if (!V[Dn] || Ce[Dn]) throw ra('root node is forbidden and cannot be sanitized in-place')
        }
      } else if (J instanceof a)
        (j = K0('<!---->')),
          (Y = j.ownerDocument.importNode(J, !0)),
          (Y.nodeType === sa.element && Y.nodeName === 'BODY') || Y.nodeName === 'HTML'
            ? (j = Y)
            : j.appendChild(Y)
      else {
        if (!Vt && !$t && !Q && J.indexOf('<') === -1) return E && ls ? E.createHTML(J) : J
        if (((j = K0(J)), !j)) return Vt ? null : ls ? S : ''
      }
      j && nn && In(j.firstChild)
      const tt = Z0(Vo ? J : j)
      for (; (Re = tt.nextNode()); ) X0(Re) || (Re.content instanceof s && pC(Re.content), tg(Re))
      if (Vo) return J
      if (Vt) {
        if (as) for (at = T.call(j.ownerDocument); j.firstChild; ) at.appendChild(j.firstChild)
        else at = j
        return (F.shadowroot || F.shadowrootmode) && (at = O.call(r, at, !0)), at
      }
      let Ot = Q ? j.outerHTML : j.innerHTML
      return (
        Q &&
          V['!doctype'] &&
          j.ownerDocument &&
          j.ownerDocument.doctype &&
          j.ownerDocument.doctype.name &&
          xt(YT, j.ownerDocument.doctype.name) &&
          (Ot =
            '<!DOCTYPE ' +
            j.ownerDocument.doctype.name +
            `>
` +
            Ot),
        $t &&
          Pu([Z, re, M], Dn => {
            Ot = na(Ot, Dn, ' ')
          }),
        E && ls ? E.createHTML(Ot) : Ot
      )
    }),
    (t.setConfig = function () {
      let J = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
      Id(J), (Te = !0)
    }),
    (t.clearConfig = function () {
      ;(fs = null), (Te = !1)
    }),
    (t.isValidAttribute = function (J, _, j) {
      fs || Id({})
      const Y = Qe(J),
        Re = Qe(_)
      return J0(Y, Re, j)
    }),
    (t.addHook = function (J, _) {
      typeof _ == 'function' && ((D[J] = D[J] || []), ta(D[J], _))
    }),
    (t.removeHook = function (J) {
      if (D[J]) return U2(D[J])
    }),
    (t.removeHooks = function (J) {
      D[J] && (D[J] = [])
    }),
    (t.removeAllHooks = function () {
      D = {}
    }),
    t
  )
}
var Y2 = QT(),
  xe
;(function (e) {
  e.assertEqual = i => i
  function t(i) {}
  e.assertIs = t
  function n(i) {
    throw new Error()
  }
  ;(e.assertNever = n),
    (e.arrayToEnum = i => {
      const s = {}
      for (const o of i) s[o] = o
      return s
    }),
    (e.getValidEnumValues = i => {
      const s = e.objectKeys(i).filter(a => typeof i[i[a]] != 'number'),
        o = {}
      for (const a of s) o[a] = i[a]
      return e.objectValues(o)
    }),
    (e.objectValues = i =>
      e.objectKeys(i).map(function (s) {
        return i[s]
      })),
    (e.objectKeys =
      typeof Object.keys == 'function'
        ? i => Object.keys(i)
        : i => {
            const s = []
            for (const o in i) Object.prototype.hasOwnProperty.call(i, o) && s.push(o)
            return s
          }),
    (e.find = (i, s) => {
      for (const o of i) if (s(o)) return o
    }),
    (e.isInteger =
      typeof Number.isInteger == 'function'
        ? i => Number.isInteger(i)
        : i => typeof i == 'number' && isFinite(i) && Math.floor(i) === i)
  function r(i, s = ' | ') {
    return i.map(o => (typeof o == 'string' ? `'${o}'` : o)).join(s)
  }
  ;(e.joinValues = r), (e.jsonStringifyReplacer = (i, s) => (typeof s == 'bigint' ? s.toString() : s))
})(xe || (xe = {}))
var $p
;(function (e) {
  e.mergeShapes = (t, n) => ({ ...t, ...n })
})($p || ($p = {}))
const U = xe.arrayToEnum([
    'string',
    'nan',
    'number',
    'integer',
    'float',
    'boolean',
    'date',
    'bigint',
    'symbol',
    'function',
    'undefined',
    'null',
    'array',
    'object',
    'unknown',
    'promise',
    'void',
    'never',
    'map',
    'set'
  ]),
  Mr = e => {
    switch (typeof e) {
      case 'undefined':
        return U.undefined
      case 'string':
        return U.string
      case 'number':
        return isNaN(e) ? U.nan : U.number
      case 'boolean':
        return U.boolean
      case 'function':
        return U.function
      case 'bigint':
        return U.bigint
      case 'symbol':
        return U.symbol
      case 'object':
        return Array.isArray(e)
          ? U.array
          : e === null
            ? U.null
            : e.then && typeof e.then == 'function' && e.catch && typeof e.catch == 'function'
              ? U.promise
              : typeof Map < 'u' && e instanceof Map
                ? U.map
                : typeof Set < 'u' && e instanceof Set
                  ? U.set
                  : typeof Date < 'u' && e instanceof Date
                    ? U.date
                    : U.object
      default:
        return U.unknown
    }
  },
  I = xe.arrayToEnum([
    'invalid_type',
    'invalid_literal',
    'custom',
    'invalid_union',
    'invalid_union_discriminator',
    'invalid_enum_value',
    'unrecognized_keys',
    'invalid_arguments',
    'invalid_return_type',
    'invalid_date',
    'invalid_string',
    'too_small',
    'too_big',
    'invalid_intersection_types',
    'not_multiple_of',
    'not_finite'
  ]),
  pI = e => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, '$1:')
class Zt extends Error {
  constructor(t) {
    super(),
      (this.issues = []),
      (this.addIssue = r => {
        this.issues = [...this.issues, r]
      }),
      (this.addIssues = (r = []) => {
        this.issues = [...this.issues, ...r]
      })
    const n = new.target.prototype
    Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : (this.__proto__ = n),
      (this.name = 'ZodError'),
      (this.issues = t)
  }
  get errors() {
    return this.issues
  }
  format(t) {
    const n =
        t ||
        function (s) {
          return s.message
        },
      r = { _errors: [] },
      i = s => {
        for (const o of s.issues)
          if (o.code === 'invalid_union') o.unionErrors.map(i)
          else if (o.code === 'invalid_return_type') i(o.returnTypeError)
          else if (o.code === 'invalid_arguments') i(o.argumentsError)
          else if (o.path.length === 0) r._errors.push(n(o))
          else {
            let a = r,
              l = 0
            for (; l < o.path.length; ) {
              const u = o.path[l]
              l === o.path.length - 1
                ? ((a[u] = a[u] || { _errors: [] }), a[u]._errors.push(n(o)))
                : (a[u] = a[u] || { _errors: [] }),
                (a = a[u]),
                l++
            }
          }
      }
    return i(this), r
  }
  static assert(t) {
    if (!(t instanceof Zt)) throw new Error(`Not a ZodError: ${t}`)
  }
  toString() {
    return this.message
  }
  get message() {
    return JSON.stringify(this.issues, xe.jsonStringifyReplacer, 2)
  }
  get isEmpty() {
    return this.issues.length === 0
  }
  flatten(t = n => n.message) {
    const n = {},
      r = []
    for (const i of this.issues)
      i.path.length > 0 ? ((n[i.path[0]] = n[i.path[0]] || []), n[i.path[0]].push(t(i))) : r.push(t(i))
    return { formErrors: r, fieldErrors: n }
  }
  get formErrors() {
    return this.flatten()
  }
}
Zt.create = e => new Zt(e)
const ko = (e, t) => {
  let n
  switch (e.code) {
    case I.invalid_type:
      e.received === U.undefined
        ? (n = 'Required')
        : (n = `Expected ${e.expected}, received ${e.received}`)
      break
    case I.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, xe.jsonStringifyReplacer)}`
      break
    case I.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${xe.joinValues(e.keys, ', ')}`
      break
    case I.invalid_union:
      n = 'Invalid input'
      break
    case I.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${xe.joinValues(e.options)}`
      break
    case I.invalid_enum_value:
      n = `Invalid enum value. Expected ${xe.joinValues(e.options)}, received '${e.received}'`
      break
    case I.invalid_arguments:
      n = 'Invalid function arguments'
      break
    case I.invalid_return_type:
      n = 'Invalid function return type'
      break
    case I.invalid_date:
      n = 'Invalid date'
      break
    case I.invalid_string:
      typeof e.validation == 'object'
        ? 'includes' in e.validation
          ? ((n = `Invalid input: must include "${e.validation.includes}"`),
            typeof e.validation.position == 'number' &&
              (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`))
          : 'startsWith' in e.validation
            ? (n = `Invalid input: must start with "${e.validation.startsWith}"`)
            : 'endsWith' in e.validation
              ? (n = `Invalid input: must end with "${e.validation.endsWith}"`)
              : xe.assertNever(e.validation)
        : e.validation !== 'regex'
          ? (n = `Invalid ${e.validation}`)
          : (n = 'Invalid')
      break
    case I.too_small:
      e.type === 'array'
        ? (n = `Array must contain ${e.exact ? 'exactly' : e.inclusive ? 'at least' : 'more than'} ${e.minimum} element(s)`)
        : e.type === 'string'
          ? (n = `String must contain ${e.exact ? 'exactly' : e.inclusive ? 'at least' : 'over'} ${e.minimum} character(s)`)
          : e.type === 'number'
            ? (n = `Number must be ${e.exact ? 'exactly equal to ' : e.inclusive ? 'greater than or equal to ' : 'greater than '}${e.minimum}`)
            : e.type === 'date'
              ? (n = `Date must be ${e.exact ? 'exactly equal to ' : e.inclusive ? 'greater than or equal to ' : 'greater than '}${new Date(Number(e.minimum))}`)
              : (n = 'Invalid input')
      break
    case I.too_big:
      e.type === 'array'
        ? (n = `Array must contain ${e.exact ? 'exactly' : e.inclusive ? 'at most' : 'less than'} ${e.maximum} element(s)`)
        : e.type === 'string'
          ? (n = `String must contain ${e.exact ? 'exactly' : e.inclusive ? 'at most' : 'under'} ${e.maximum} character(s)`)
          : e.type === 'number'
            ? (n = `Number must be ${e.exact ? 'exactly' : e.inclusive ? 'less than or equal to' : 'less than'} ${e.maximum}`)
            : e.type === 'bigint'
              ? (n = `BigInt must be ${e.exact ? 'exactly' : e.inclusive ? 'less than or equal to' : 'less than'} ${e.maximum}`)
              : e.type === 'date'
                ? (n = `Date must be ${e.exact ? 'exactly' : e.inclusive ? 'smaller than or equal to' : 'smaller than'} ${new Date(Number(e.maximum))}`)
                : (n = 'Invalid input')
      break
    case I.custom:
      n = 'Invalid input'
      break
    case I.invalid_intersection_types:
      n = 'Intersection results could not be merged'
      break
    case I.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`
      break
    case I.not_finite:
      n = 'Number must be finite'
      break
    default:
      ;(n = t.defaultError), xe.assertNever(e)
  }
  return { message: n }
}
let XT = ko
function mI(e) {
  XT = e
}
function Vc() {
  return XT
}
const Bc = e => {
    const { data: t, path: n, errorMaps: r, issueData: i } = e,
      s = [...n, ...(i.path || [])],
      o = { ...i, path: s }
    if (i.message !== void 0) return { ...i, path: s, message: i.message }
    let a = ''
    const l = r
      .filter(u => !!u)
      .slice()
      .reverse()
    for (const u of l) a = u(o, { data: t, defaultError: a }).message
    return { ...i, path: s, message: a }
  },
  gI = []
function B(e, t) {
  const n = Vc(),
    r = Bc({
      issueData: t,
      data: e.data,
      path: e.path,
      errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, n, n === ko ? void 0 : ko].filter(
        i => !!i
      )
    })
  e.common.issues.push(r)
}
class vt {
  constructor() {
    this.value = 'valid'
  }
  dirty() {
    this.value === 'valid' && (this.value = 'dirty')
  }
  abort() {
    this.value !== 'aborted' && (this.value = 'aborted')
  }
  static mergeArray(t, n) {
    const r = []
    for (const i of n) {
      if (i.status === 'aborted') return le
      i.status === 'dirty' && t.dirty(), r.push(i.value)
    }
    return { status: t.value, value: r }
  }
  static async mergeObjectAsync(t, n) {
    const r = []
    for (const i of n) {
      const s = await i.key,
        o = await i.value
      r.push({ key: s, value: o })
    }
    return vt.mergeObjectSync(t, r)
  }
  static mergeObjectSync(t, n) {
    const r = {}
    for (const i of n) {
      const { key: s, value: o } = i
      if (s.status === 'aborted' || o.status === 'aborted') return le
      s.status === 'dirty' && t.dirty(),
        o.status === 'dirty' && t.dirty(),
        s.value !== '__proto__' && (typeof o.value < 'u' || i.alwaysSet) && (r[s.value] = o.value)
    }
    return { status: t.value, value: r }
  }
}
const le = Object.freeze({ status: 'aborted' }),
  $s = e => ({ status: 'dirty', value: e }),
  Pt = e => ({ status: 'valid', value: e }),
  Vp = e => e.status === 'aborted',
  Bp = e => e.status === 'dirty',
  cl = e => e.status === 'valid',
  dl = e => typeof Promise < 'u' && e instanceof Promise
function zc(e, t, n, r) {
  if (typeof t == 'function' ? e !== t || !r : !t.has(e))
    throw new TypeError('Cannot read private member from an object whose class did not declare it')
  return t.get(e)
}
function JT(e, t, n, r, i) {
  if (typeof t == 'function' ? e !== t || !i : !t.has(e))
    throw new TypeError('Cannot write private member to an object whose class did not declare it')
  return t.set(e, n), n
}
var X
;(function (e) {
  ;(e.errToObj = t => (typeof t == 'string' ? { message: t } : t || {})),
    (e.toString = t => (typeof t == 'string' ? t : t == null ? void 0 : t.message))
})(X || (X = {}))
var pa, ma
class Qn {
  constructor(t, n, r, i) {
    ;(this._cachedPath = []), (this.parent = t), (this.data = n), (this._path = r), (this._key = i)
  }
  get path() {
    return (
      this._cachedPath.length ||
        (this._key instanceof Array
          ? this._cachedPath.push(...this._path, ...this._key)
          : this._cachedPath.push(...this._path, this._key)),
      this._cachedPath
    )
  }
}
const Q2 = (e, t) => {
  if (cl(t)) return { success: !0, data: t.value }
  if (!e.common.issues.length) throw new Error('Validation failed but no issues detected.')
  return {
    success: !1,
    get error() {
      if (this._error) return this._error
      const n = new Zt(e.common.issues)
      return (this._error = n), this._error
    }
  }
}
function de(e) {
  if (!e) return {}
  const { errorMap: t, invalid_type_error: n, required_error: r, description: i } = e
  if (t && (n || r))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`
    )
  return t
    ? { errorMap: t, description: i }
    : {
        errorMap: (o, a) => {
          var l, u
          const { message: c } = e
          return o.code === 'invalid_enum_value'
            ? { message: c ?? a.defaultError }
            : typeof a.data > 'u'
              ? { message: (l = c ?? r) !== null && l !== void 0 ? l : a.defaultError }
              : o.code !== 'invalid_type'
                ? { message: a.defaultError }
                : { message: (u = c ?? n) !== null && u !== void 0 ? u : a.defaultError }
        },
        description: i
      }
}
class fe {
  constructor(t) {
    ;(this.spa = this.safeParseAsync),
      (this._def = t),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.readonly = this.readonly.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this))
  }
  get description() {
    return this._def.description
  }
  _getType(t) {
    return Mr(t.data)
  }
  _getOrReturnCtx(t, n) {
    return (
      n || {
        common: t.parent.common,
        data: t.data,
        parsedType: Mr(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    )
  }
  _processInputParams(t) {
    return {
      status: new vt(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Mr(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    }
  }
  _parseSync(t) {
    const n = this._parse(t)
    if (dl(n)) throw new Error('Synchronous parse encountered promise.')
    return n
  }
  _parseAsync(t) {
    const n = this._parse(t)
    return Promise.resolve(n)
  }
  parse(t, n) {
    const r = this.safeParse(t, n)
    if (r.success) return r.data
    throw r.error
  }
  safeParse(t, n) {
    var r
    const i = {
        common: {
          issues: [],
          async: (r = n == null ? void 0 : n.async) !== null && r !== void 0 ? r : !1,
          contextualErrorMap: n == null ? void 0 : n.errorMap
        },
        path: (n == null ? void 0 : n.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: Mr(t)
      },
      s = this._parseSync({ data: t, path: i.path, parent: i })
    return Q2(i, s)
  }
  async parseAsync(t, n) {
    const r = await this.safeParseAsync(t, n)
    if (r.success) return r.data
    throw r.error
  }
  async safeParseAsync(t, n) {
    const r = {
        common: { issues: [], contextualErrorMap: n == null ? void 0 : n.errorMap, async: !0 },
        path: (n == null ? void 0 : n.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: Mr(t)
      },
      i = this._parse({ data: t, path: r.path, parent: r }),
      s = await (dl(i) ? i : Promise.resolve(i))
    return Q2(r, s)
  }
  refine(t, n) {
    const r = i =>
      typeof n == 'string' || typeof n > 'u' ? { message: n } : typeof n == 'function' ? n(i) : n
    return this._refinement((i, s) => {
      const o = t(i),
        a = () => s.addIssue({ code: I.custom, ...r(i) })
      return typeof Promise < 'u' && o instanceof Promise
        ? o.then(l => (l ? !0 : (a(), !1)))
        : o
          ? !0
          : (a(), !1)
    })
  }
  refinement(t, n) {
    return this._refinement((r, i) =>
      t(r) ? !0 : (i.addIssue(typeof n == 'function' ? n(r, i) : n), !1)
    )
  }
  _refinement(t) {
    return new Ln({
      schema: this,
      typeName: ae.ZodEffects,
      effect: { type: 'refinement', refinement: t }
    })
  }
  superRefine(t) {
    return this._refinement(t)
  }
  optional() {
    return Kn.create(this, this._def)
  }
  nullable() {
    return ui.create(this, this._def)
  }
  nullish() {
    return this.nullable().optional()
  }
  array() {
    return Rn.create(this, this._def)
  }
  promise() {
    return Ro.create(this, this._def)
  }
  or(t) {
    return ml.create([this, t], this._def)
  }
  and(t) {
    return gl.create(this, t, this._def)
  }
  transform(t) {
    return new Ln({
      ...de(this._def),
      schema: this,
      typeName: ae.ZodEffects,
      effect: { type: 'transform', transform: t }
    })
  }
  default(t) {
    const n = typeof t == 'function' ? t : () => t
    return new El({ ...de(this._def), innerType: this, defaultValue: n, typeName: ae.ZodDefault })
  }
  brand() {
    return new j0({ typeName: ae.ZodBranded, type: this, ...de(this._def) })
  }
  catch(t) {
    const n = typeof t == 'function' ? t : () => t
    return new Sl({ ...de(this._def), innerType: this, catchValue: n, typeName: ae.ZodCatch })
  }
  describe(t) {
    const n = this.constructor
    return new n({ ...this._def, description: t })
  }
  pipe(t) {
    return ql.create(this, t)
  }
  readonly() {
    return Tl.create(this)
  }
  isOptional() {
    return this.safeParse(void 0).success
  }
  isNullable() {
    return this.safeParse(null).success
  }
}
const vI = /^c[^\s-]{8,}$/i,
  yI = /^[0-9a-z]+$/,
  wI = /^[0-9A-HJKMNP-TV-Z]{26}$/,
  xI = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  EI = /^[a-z0-9_-]{21}$/i,
  SI =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  TI = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  CI = '^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$'
let Qf
const _I =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  bI =
    /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
  kI = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  eC =
    '((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))',
  PI = new RegExp(`^${eC}$`)
function tC(e) {
  let t = '([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d'
  return (
    e.precision ? (t = `${t}\\.\\d{${e.precision}}`) : e.precision == null && (t = `${t}(\\.\\d+)?`), t
  )
}
function RI(e) {
  return new RegExp(`^${tC(e)}$`)
}
function nC(e) {
  let t = `${eC}T${tC(e)}`
  const n = []
  return (
    n.push(e.local ? 'Z?' : 'Z'),
    e.offset && n.push('([+-]\\d{2}:?\\d{2})'),
    (t = `${t}(${n.join('|')})`),
    new RegExp(`^${t}$`)
  )
}
function AI(e, t) {
  return !!(((t === 'v4' || !t) && _I.test(e)) || ((t === 'v6' || !t) && bI.test(e)))
}
class bn extends fe {
  _parse(t) {
    if ((this._def.coerce && (t.data = String(t.data)), this._getType(t) !== U.string)) {
      const s = this._getOrReturnCtx(t)
      return B(s, { code: I.invalid_type, expected: U.string, received: s.parsedType }), le
    }
    const r = new vt()
    let i
    for (const s of this._def.checks)
      if (s.kind === 'min')
        t.data.length < s.value &&
          ((i = this._getOrReturnCtx(t, i)),
          B(i, {
            code: I.too_small,
            minimum: s.value,
            type: 'string',
            inclusive: !0,
            exact: !1,
            message: s.message
          }),
          r.dirty())
      else if (s.kind === 'max')
        t.data.length > s.value &&
          ((i = this._getOrReturnCtx(t, i)),
          B(i, {
            code: I.too_big,
            maximum: s.value,
            type: 'string',
            inclusive: !0,
            exact: !1,
            message: s.message
          }),
          r.dirty())
      else if (s.kind === 'length') {
        const o = t.data.length > s.value,
          a = t.data.length < s.value
        ;(o || a) &&
          ((i = this._getOrReturnCtx(t, i)),
          o
            ? B(i, {
                code: I.too_big,
                maximum: s.value,
                type: 'string',
                inclusive: !0,
                exact: !0,
                message: s.message
              })
            : a &&
              B(i, {
                code: I.too_small,
                minimum: s.value,
                type: 'string',
                inclusive: !0,
                exact: !0,
                message: s.message
              }),
          r.dirty())
      } else if (s.kind === 'email')
        TI.test(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          B(i, { validation: 'email', code: I.invalid_string, message: s.message }),
          r.dirty())
      else if (s.kind === 'emoji')
        Qf || (Qf = new RegExp(CI, 'u')),
          Qf.test(t.data) ||
            ((i = this._getOrReturnCtx(t, i)),
            B(i, { validation: 'emoji', code: I.invalid_string, message: s.message }),
            r.dirty())
      else if (s.kind === 'uuid')
        xI.test(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          B(i, { validation: 'uuid', code: I.invalid_string, message: s.message }),
          r.dirty())
      else if (s.kind === 'nanoid')
        EI.test(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          B(i, { validation: 'nanoid', code: I.invalid_string, message: s.message }),
          r.dirty())
      else if (s.kind === 'cuid')
        vI.test(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          B(i, { validation: 'cuid', code: I.invalid_string, message: s.message }),
          r.dirty())
      else if (s.kind === 'cuid2')
        yI.test(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          B(i, { validation: 'cuid2', code: I.invalid_string, message: s.message }),
          r.dirty())
      else if (s.kind === 'ulid')
        wI.test(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          B(i, { validation: 'ulid', code: I.invalid_string, message: s.message }),
          r.dirty())
      else if (s.kind === 'url')
        try {
          new URL(t.data)
        } catch {
          ;(i = this._getOrReturnCtx(t, i)),
            B(i, { validation: 'url', code: I.invalid_string, message: s.message }),
            r.dirty()
        }
      else
        s.kind === 'regex'
          ? ((s.regex.lastIndex = 0),
            s.regex.test(t.data) ||
              ((i = this._getOrReturnCtx(t, i)),
              B(i, { validation: 'regex', code: I.invalid_string, message: s.message }),
              r.dirty()))
          : s.kind === 'trim'
            ? (t.data = t.data.trim())
            : s.kind === 'includes'
              ? t.data.includes(s.value, s.position) ||
                ((i = this._getOrReturnCtx(t, i)),
                B(i, {
                  code: I.invalid_string,
                  validation: { includes: s.value, position: s.position },
                  message: s.message
                }),
                r.dirty())
              : s.kind === 'toLowerCase'
                ? (t.data = t.data.toLowerCase())
                : s.kind === 'toUpperCase'
                  ? (t.data = t.data.toUpperCase())
                  : s.kind === 'startsWith'
                    ? t.data.startsWith(s.value) ||
                      ((i = this._getOrReturnCtx(t, i)),
                      B(i, {
                        code: I.invalid_string,
                        validation: { startsWith: s.value },
                        message: s.message
                      }),
                      r.dirty())
                    : s.kind === 'endsWith'
                      ? t.data.endsWith(s.value) ||
                        ((i = this._getOrReturnCtx(t, i)),
                        B(i, {
                          code: I.invalid_string,
                          validation: { endsWith: s.value },
                          message: s.message
                        }),
                        r.dirty())
                      : s.kind === 'datetime'
                        ? nC(s).test(t.data) ||
                          ((i = this._getOrReturnCtx(t, i)),
                          B(i, { code: I.invalid_string, validation: 'datetime', message: s.message }),
                          r.dirty())
                        : s.kind === 'date'
                          ? PI.test(t.data) ||
                            ((i = this._getOrReturnCtx(t, i)),
                            B(i, { code: I.invalid_string, validation: 'date', message: s.message }),
                            r.dirty())
                          : s.kind === 'time'
                            ? RI(s).test(t.data) ||
                              ((i = this._getOrReturnCtx(t, i)),
                              B(i, { code: I.invalid_string, validation: 'time', message: s.message }),
                              r.dirty())
                            : s.kind === 'duration'
                              ? SI.test(t.data) ||
                                ((i = this._getOrReturnCtx(t, i)),
                                B(i, {
                                  validation: 'duration',
                                  code: I.invalid_string,
                                  message: s.message
                                }),
                                r.dirty())
                              : s.kind === 'ip'
                                ? AI(t.data, s.version) ||
                                  ((i = this._getOrReturnCtx(t, i)),
                                  B(i, { validation: 'ip', code: I.invalid_string, message: s.message }),
                                  r.dirty())
                                : s.kind === 'base64'
                                  ? kI.test(t.data) ||
                                    ((i = this._getOrReturnCtx(t, i)),
                                    B(i, {
                                      validation: 'base64',
                                      code: I.invalid_string,
                                      message: s.message
                                    }),
                                    r.dirty())
                                  : xe.assertNever(s)
    return { status: r.value, value: t.data }
  }
  _regex(t, n, r) {
    return this.refinement(i => t.test(i), { validation: n, code: I.invalid_string, ...X.errToObj(r) })
  }
  _addCheck(t) {
    return new bn({ ...this._def, checks: [...this._def.checks, t] })
  }
  email(t) {
    return this._addCheck({ kind: 'email', ...X.errToObj(t) })
  }
  url(t) {
    return this._addCheck({ kind: 'url', ...X.errToObj(t) })
  }
  emoji(t) {
    return this._addCheck({ kind: 'emoji', ...X.errToObj(t) })
  }
  uuid(t) {
    return this._addCheck({ kind: 'uuid', ...X.errToObj(t) })
  }
  nanoid(t) {
    return this._addCheck({ kind: 'nanoid', ...X.errToObj(t) })
  }
  cuid(t) {
    return this._addCheck({ kind: 'cuid', ...X.errToObj(t) })
  }
  cuid2(t) {
    return this._addCheck({ kind: 'cuid2', ...X.errToObj(t) })
  }
  ulid(t) {
    return this._addCheck({ kind: 'ulid', ...X.errToObj(t) })
  }
  base64(t) {
    return this._addCheck({ kind: 'base64', ...X.errToObj(t) })
  }
  ip(t) {
    return this._addCheck({ kind: 'ip', ...X.errToObj(t) })
  }
  datetime(t) {
    var n, r
    return typeof t == 'string'
      ? this._addCheck({ kind: 'datetime', precision: null, offset: !1, local: !1, message: t })
      : this._addCheck({
          kind: 'datetime',
          precision:
            typeof (t == null ? void 0 : t.precision) > 'u' ? null : t == null ? void 0 : t.precision,
          offset: (n = t == null ? void 0 : t.offset) !== null && n !== void 0 ? n : !1,
          local: (r = t == null ? void 0 : t.local) !== null && r !== void 0 ? r : !1,
          ...X.errToObj(t == null ? void 0 : t.message)
        })
  }
  date(t) {
    return this._addCheck({ kind: 'date', message: t })
  }
  time(t) {
    return typeof t == 'string'
      ? this._addCheck({ kind: 'time', precision: null, message: t })
      : this._addCheck({
          kind: 'time',
          precision:
            typeof (t == null ? void 0 : t.precision) > 'u' ? null : t == null ? void 0 : t.precision,
          ...X.errToObj(t == null ? void 0 : t.message)
        })
  }
  duration(t) {
    return this._addCheck({ kind: 'duration', ...X.errToObj(t) })
  }
  regex(t, n) {
    return this._addCheck({ kind: 'regex', regex: t, ...X.errToObj(n) })
  }
  includes(t, n) {
    return this._addCheck({
      kind: 'includes',
      value: t,
      position: n == null ? void 0 : n.position,
      ...X.errToObj(n == null ? void 0 : n.message)
    })
  }
  startsWith(t, n) {
    return this._addCheck({ kind: 'startsWith', value: t, ...X.errToObj(n) })
  }
  endsWith(t, n) {
    return this._addCheck({ kind: 'endsWith', value: t, ...X.errToObj(n) })
  }
  min(t, n) {
    return this._addCheck({ kind: 'min', value: t, ...X.errToObj(n) })
  }
  max(t, n) {
    return this._addCheck({ kind: 'max', value: t, ...X.errToObj(n) })
  }
  length(t, n) {
    return this._addCheck({ kind: 'length', value: t, ...X.errToObj(n) })
  }
  nonempty(t) {
    return this.min(1, X.errToObj(t))
  }
  trim() {
    return new bn({ ...this._def, checks: [...this._def.checks, { kind: 'trim' }] })
  }
  toLowerCase() {
    return new bn({ ...this._def, checks: [...this._def.checks, { kind: 'toLowerCase' }] })
  }
  toUpperCase() {
    return new bn({ ...this._def, checks: [...this._def.checks, { kind: 'toUpperCase' }] })
  }
  get isDatetime() {
    return !!this._def.checks.find(t => t.kind === 'datetime')
  }
  get isDate() {
    return !!this._def.checks.find(t => t.kind === 'date')
  }
  get isTime() {
    return !!this._def.checks.find(t => t.kind === 'time')
  }
  get isDuration() {
    return !!this._def.checks.find(t => t.kind === 'duration')
  }
  get isEmail() {
    return !!this._def.checks.find(t => t.kind === 'email')
  }
  get isURL() {
    return !!this._def.checks.find(t => t.kind === 'url')
  }
  get isEmoji() {
    return !!this._def.checks.find(t => t.kind === 'emoji')
  }
  get isUUID() {
    return !!this._def.checks.find(t => t.kind === 'uuid')
  }
  get isNANOID() {
    return !!this._def.checks.find(t => t.kind === 'nanoid')
  }
  get isCUID() {
    return !!this._def.checks.find(t => t.kind === 'cuid')
  }
  get isCUID2() {
    return !!this._def.checks.find(t => t.kind === 'cuid2')
  }
  get isULID() {
    return !!this._def.checks.find(t => t.kind === 'ulid')
  }
  get isIP() {
    return !!this._def.checks.find(t => t.kind === 'ip')
  }
  get isBase64() {
    return !!this._def.checks.find(t => t.kind === 'base64')
  }
  get minLength() {
    let t = null
    for (const n of this._def.checks) n.kind === 'min' && (t === null || n.value > t) && (t = n.value)
    return t
  }
  get maxLength() {
    let t = null
    for (const n of this._def.checks) n.kind === 'max' && (t === null || n.value < t) && (t = n.value)
    return t
  }
}
bn.create = e => {
  var t
  return new bn({
    checks: [],
    typeName: ae.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...de(e)
  })
}
function OI(e, t) {
  const n = (e.toString().split('.')[1] || '').length,
    r = (t.toString().split('.')[1] || '').length,
    i = n > r ? n : r,
    s = parseInt(e.toFixed(i).replace('.', '')),
    o = parseInt(t.toFixed(i).replace('.', ''))
  return (s % o) / Math.pow(10, i)
}
class oi extends fe {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte), (this.step = this.multipleOf)
  }
  _parse(t) {
    if ((this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== U.number)) {
      const s = this._getOrReturnCtx(t)
      return B(s, { code: I.invalid_type, expected: U.number, received: s.parsedType }), le
    }
    let r
    const i = new vt()
    for (const s of this._def.checks)
      s.kind === 'int'
        ? xe.isInteger(t.data) ||
          ((r = this._getOrReturnCtx(t, r)),
          B(r, { code: I.invalid_type, expected: 'integer', received: 'float', message: s.message }),
          i.dirty())
        : s.kind === 'min'
          ? (s.inclusive ? t.data < s.value : t.data <= s.value) &&
            ((r = this._getOrReturnCtx(t, r)),
            B(r, {
              code: I.too_small,
              minimum: s.value,
              type: 'number',
              inclusive: s.inclusive,
              exact: !1,
              message: s.message
            }),
            i.dirty())
          : s.kind === 'max'
            ? (s.inclusive ? t.data > s.value : t.data >= s.value) &&
              ((r = this._getOrReturnCtx(t, r)),
              B(r, {
                code: I.too_big,
                maximum: s.value,
                type: 'number',
                inclusive: s.inclusive,
                exact: !1,
                message: s.message
              }),
              i.dirty())
            : s.kind === 'multipleOf'
              ? OI(t.data, s.value) !== 0 &&
                ((r = this._getOrReturnCtx(t, r)),
                B(r, { code: I.not_multiple_of, multipleOf: s.value, message: s.message }),
                i.dirty())
              : s.kind === 'finite'
                ? Number.isFinite(t.data) ||
                  ((r = this._getOrReturnCtx(t, r)),
                  B(r, { code: I.not_finite, message: s.message }),
                  i.dirty())
                : xe.assertNever(s)
    return { status: i.value, value: t.data }
  }
  gte(t, n) {
    return this.setLimit('min', t, !0, X.toString(n))
  }
  gt(t, n) {
    return this.setLimit('min', t, !1, X.toString(n))
  }
  lte(t, n) {
    return this.setLimit('max', t, !0, X.toString(n))
  }
  lt(t, n) {
    return this.setLimit('max', t, !1, X.toString(n))
  }
  setLimit(t, n, r, i) {
    return new oi({
      ...this._def,
      checks: [...this._def.checks, { kind: t, value: n, inclusive: r, message: X.toString(i) }]
    })
  }
  _addCheck(t) {
    return new oi({ ...this._def, checks: [...this._def.checks, t] })
  }
  int(t) {
    return this._addCheck({ kind: 'int', message: X.toString(t) })
  }
  positive(t) {
    return this._addCheck({ kind: 'min', value: 0, inclusive: !1, message: X.toString(t) })
  }
  negative(t) {
    return this._addCheck({ kind: 'max', value: 0, inclusive: !1, message: X.toString(t) })
  }
  nonpositive(t) {
    return this._addCheck({ kind: 'max', value: 0, inclusive: !0, message: X.toString(t) })
  }
  nonnegative(t) {
    return this._addCheck({ kind: 'min', value: 0, inclusive: !0, message: X.toString(t) })
  }
  multipleOf(t, n) {
    return this._addCheck({ kind: 'multipleOf', value: t, message: X.toString(n) })
  }
  finite(t) {
    return this._addCheck({ kind: 'finite', message: X.toString(t) })
  }
  safe(t) {
    return this._addCheck({
      kind: 'min',
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: X.toString(t)
    })._addCheck({ kind: 'max', inclusive: !0, value: Number.MAX_SAFE_INTEGER, message: X.toString(t) })
  }
  get minValue() {
    let t = null
    for (const n of this._def.checks) n.kind === 'min' && (t === null || n.value > t) && (t = n.value)
    return t
  }
  get maxValue() {
    let t = null
    for (const n of this._def.checks) n.kind === 'max' && (t === null || n.value < t) && (t = n.value)
    return t
  }
  get isInt() {
    return !!this._def.checks.find(
      t => t.kind === 'int' || (t.kind === 'multipleOf' && xe.isInteger(t.value))
    )
  }
  get isFinite() {
    let t = null,
      n = null
    for (const r of this._def.checks) {
      if (r.kind === 'finite' || r.kind === 'int' || r.kind === 'multipleOf') return !0
      r.kind === 'min'
        ? (n === null || r.value > n) && (n = r.value)
        : r.kind === 'max' && (t === null || r.value < t) && (t = r.value)
    }
    return Number.isFinite(n) && Number.isFinite(t)
  }
}
oi.create = e =>
  new oi({ checks: [], typeName: ae.ZodNumber, coerce: (e == null ? void 0 : e.coerce) || !1, ...de(e) })
class ai extends fe {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte)
  }
  _parse(t) {
    if ((this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== U.bigint)) {
      const s = this._getOrReturnCtx(t)
      return B(s, { code: I.invalid_type, expected: U.bigint, received: s.parsedType }), le
    }
    let r
    const i = new vt()
    for (const s of this._def.checks)
      s.kind === 'min'
        ? (s.inclusive ? t.data < s.value : t.data <= s.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          B(r, {
            code: I.too_small,
            type: 'bigint',
            minimum: s.value,
            inclusive: s.inclusive,
            message: s.message
          }),
          i.dirty())
        : s.kind === 'max'
          ? (s.inclusive ? t.data > s.value : t.data >= s.value) &&
            ((r = this._getOrReturnCtx(t, r)),
            B(r, {
              code: I.too_big,
              type: 'bigint',
              maximum: s.value,
              inclusive: s.inclusive,
              message: s.message
            }),
            i.dirty())
          : s.kind === 'multipleOf'
            ? t.data % s.value !== BigInt(0) &&
              ((r = this._getOrReturnCtx(t, r)),
              B(r, { code: I.not_multiple_of, multipleOf: s.value, message: s.message }),
              i.dirty())
            : xe.assertNever(s)
    return { status: i.value, value: t.data }
  }
  gte(t, n) {
    return this.setLimit('min', t, !0, X.toString(n))
  }
  gt(t, n) {
    return this.setLimit('min', t, !1, X.toString(n))
  }
  lte(t, n) {
    return this.setLimit('max', t, !0, X.toString(n))
  }
  lt(t, n) {
    return this.setLimit('max', t, !1, X.toString(n))
  }
  setLimit(t, n, r, i) {
    return new ai({
      ...this._def,
      checks: [...this._def.checks, { kind: t, value: n, inclusive: r, message: X.toString(i) }]
    })
  }
  _addCheck(t) {
    return new ai({ ...this._def, checks: [...this._def.checks, t] })
  }
  positive(t) {
    return this._addCheck({ kind: 'min', value: BigInt(0), inclusive: !1, message: X.toString(t) })
  }
  negative(t) {
    return this._addCheck({ kind: 'max', value: BigInt(0), inclusive: !1, message: X.toString(t) })
  }
  nonpositive(t) {
    return this._addCheck({ kind: 'max', value: BigInt(0), inclusive: !0, message: X.toString(t) })
  }
  nonnegative(t) {
    return this._addCheck({ kind: 'min', value: BigInt(0), inclusive: !0, message: X.toString(t) })
  }
  multipleOf(t, n) {
    return this._addCheck({ kind: 'multipleOf', value: t, message: X.toString(n) })
  }
  get minValue() {
    let t = null
    for (const n of this._def.checks) n.kind === 'min' && (t === null || n.value > t) && (t = n.value)
    return t
  }
  get maxValue() {
    let t = null
    for (const n of this._def.checks) n.kind === 'max' && (t === null || n.value < t) && (t = n.value)
    return t
  }
}
ai.create = e => {
  var t
  return new ai({
    checks: [],
    typeName: ae.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...de(e)
  })
}
class fl extends fe {
  _parse(t) {
    if ((this._def.coerce && (t.data = !!t.data), this._getType(t) !== U.boolean)) {
      const r = this._getOrReturnCtx(t)
      return B(r, { code: I.invalid_type, expected: U.boolean, received: r.parsedType }), le
    }
    return Pt(t.data)
  }
}
fl.create = e =>
  new fl({ typeName: ae.ZodBoolean, coerce: (e == null ? void 0 : e.coerce) || !1, ...de(e) })
class ns extends fe {
  _parse(t) {
    if ((this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== U.date)) {
      const s = this._getOrReturnCtx(t)
      return B(s, { code: I.invalid_type, expected: U.date, received: s.parsedType }), le
    }
    if (isNaN(t.data.getTime())) {
      const s = this._getOrReturnCtx(t)
      return B(s, { code: I.invalid_date }), le
    }
    const r = new vt()
    let i
    for (const s of this._def.checks)
      s.kind === 'min'
        ? t.data.getTime() < s.value &&
          ((i = this._getOrReturnCtx(t, i)),
          B(i, {
            code: I.too_small,
            message: s.message,
            inclusive: !0,
            exact: !1,
            minimum: s.value,
            type: 'date'
          }),
          r.dirty())
        : s.kind === 'max'
          ? t.data.getTime() > s.value &&
            ((i = this._getOrReturnCtx(t, i)),
            B(i, {
              code: I.too_big,
              message: s.message,
              inclusive: !0,
              exact: !1,
              maximum: s.value,
              type: 'date'
            }),
            r.dirty())
          : xe.assertNever(s)
    return { status: r.value, value: new Date(t.data.getTime()) }
  }
  _addCheck(t) {
    return new ns({ ...this._def, checks: [...this._def.checks, t] })
  }
  min(t, n) {
    return this._addCheck({ kind: 'min', value: t.getTime(), message: X.toString(n) })
  }
  max(t, n) {
    return this._addCheck({ kind: 'max', value: t.getTime(), message: X.toString(n) })
  }
  get minDate() {
    let t = null
    for (const n of this._def.checks) n.kind === 'min' && (t === null || n.value > t) && (t = n.value)
    return t != null ? new Date(t) : null
  }
  get maxDate() {
    let t = null
    for (const n of this._def.checks) n.kind === 'max' && (t === null || n.value < t) && (t = n.value)
    return t != null ? new Date(t) : null
  }
}
ns.create = e =>
  new ns({ checks: [], coerce: (e == null ? void 0 : e.coerce) || !1, typeName: ae.ZodDate, ...de(e) })
class Uc extends fe {
  _parse(t) {
    if (this._getType(t) !== U.symbol) {
      const r = this._getOrReturnCtx(t)
      return B(r, { code: I.invalid_type, expected: U.symbol, received: r.parsedType }), le
    }
    return Pt(t.data)
  }
}
Uc.create = e => new Uc({ typeName: ae.ZodSymbol, ...de(e) })
class hl extends fe {
  _parse(t) {
    if (this._getType(t) !== U.undefined) {
      const r = this._getOrReturnCtx(t)
      return B(r, { code: I.invalid_type, expected: U.undefined, received: r.parsedType }), le
    }
    return Pt(t.data)
  }
}
hl.create = e => new hl({ typeName: ae.ZodUndefined, ...de(e) })
class pl extends fe {
  _parse(t) {
    if (this._getType(t) !== U.null) {
      const r = this._getOrReturnCtx(t)
      return B(r, { code: I.invalid_type, expected: U.null, received: r.parsedType }), le
    }
    return Pt(t.data)
  }
}
pl.create = e => new pl({ typeName: ae.ZodNull, ...de(e) })
class Po extends fe {
  constructor() {
    super(...arguments), (this._any = !0)
  }
  _parse(t) {
    return Pt(t.data)
  }
}
Po.create = e => new Po({ typeName: ae.ZodAny, ...de(e) })
class Wi extends fe {
  constructor() {
    super(...arguments), (this._unknown = !0)
  }
  _parse(t) {
    return Pt(t.data)
  }
}
Wi.create = e => new Wi({ typeName: ae.ZodUnknown, ...de(e) })
class Er extends fe {
  _parse(t) {
    const n = this._getOrReturnCtx(t)
    return B(n, { code: I.invalid_type, expected: U.never, received: n.parsedType }), le
  }
}
Er.create = e => new Er({ typeName: ae.ZodNever, ...de(e) })
class Hc extends fe {
  _parse(t) {
    if (this._getType(t) !== U.undefined) {
      const r = this._getOrReturnCtx(t)
      return B(r, { code: I.invalid_type, expected: U.void, received: r.parsedType }), le
    }
    return Pt(t.data)
  }
}
Hc.create = e => new Hc({ typeName: ae.ZodVoid, ...de(e) })
class Rn extends fe {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t),
      i = this._def
    if (n.parsedType !== U.array)
      return B(n, { code: I.invalid_type, expected: U.array, received: n.parsedType }), le
    if (i.exactLength !== null) {
      const o = n.data.length > i.exactLength.value,
        a = n.data.length < i.exactLength.value
      ;(o || a) &&
        (B(n, {
          code: o ? I.too_big : I.too_small,
          minimum: a ? i.exactLength.value : void 0,
          maximum: o ? i.exactLength.value : void 0,
          type: 'array',
          inclusive: !0,
          exact: !0,
          message: i.exactLength.message
        }),
        r.dirty())
    }
    if (
      (i.minLength !== null &&
        n.data.length < i.minLength.value &&
        (B(n, {
          code: I.too_small,
          minimum: i.minLength.value,
          type: 'array',
          inclusive: !0,
          exact: !1,
          message: i.minLength.message
        }),
        r.dirty()),
      i.maxLength !== null &&
        n.data.length > i.maxLength.value &&
        (B(n, {
          code: I.too_big,
          maximum: i.maxLength.value,
          type: 'array',
          inclusive: !0,
          exact: !1,
          message: i.maxLength.message
        }),
        r.dirty()),
      n.common.async)
    )
      return Promise.all([...n.data].map((o, a) => i.type._parseAsync(new Qn(n, o, n.path, a)))).then(
        o => vt.mergeArray(r, o)
      )
    const s = [...n.data].map((o, a) => i.type._parseSync(new Qn(n, o, n.path, a)))
    return vt.mergeArray(r, s)
  }
  get element() {
    return this._def.type
  }
  min(t, n) {
    return new Rn({ ...this._def, minLength: { value: t, message: X.toString(n) } })
  }
  max(t, n) {
    return new Rn({ ...this._def, maxLength: { value: t, message: X.toString(n) } })
  }
  length(t, n) {
    return new Rn({ ...this._def, exactLength: { value: t, message: X.toString(n) } })
  }
  nonempty(t) {
    return this.min(1, t)
  }
}
Rn.create = (e, t) =>
  new Rn({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ae.ZodArray,
    ...de(t)
  })
function Es(e) {
  if (e instanceof Ie) {
    const t = {}
    for (const n in e.shape) {
      const r = e.shape[n]
      t[n] = Kn.create(Es(r))
    }
    return new Ie({ ...e._def, shape: () => t })
  } else
    return e instanceof Rn
      ? new Rn({ ...e._def, type: Es(e.element) })
      : e instanceof Kn
        ? Kn.create(Es(e.unwrap()))
        : e instanceof ui
          ? ui.create(Es(e.unwrap()))
          : e instanceof Xn
            ? Xn.create(e.items.map(t => Es(t)))
            : e
}
class Ie extends fe {
  constructor() {
    super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend)
  }
  _getCached() {
    if (this._cached !== null) return this._cached
    const t = this._def.shape(),
      n = xe.objectKeys(t)
    return (this._cached = { shape: t, keys: n })
  }
  _parse(t) {
    if (this._getType(t) !== U.object) {
      const u = this._getOrReturnCtx(t)
      return B(u, { code: I.invalid_type, expected: U.object, received: u.parsedType }), le
    }
    const { status: r, ctx: i } = this._processInputParams(t),
      { shape: s, keys: o } = this._getCached(),
      a = []
    if (!(this._def.catchall instanceof Er && this._def.unknownKeys === 'strip'))
      for (const u in i.data) o.includes(u) || a.push(u)
    const l = []
    for (const u of o) {
      const c = s[u],
        d = i.data[u]
      l.push({
        key: { status: 'valid', value: u },
        value: c._parse(new Qn(i, d, i.path, u)),
        alwaysSet: u in i.data
      })
    }
    if (this._def.catchall instanceof Er) {
      const u = this._def.unknownKeys
      if (u === 'passthrough')
        for (const c of a)
          l.push({ key: { status: 'valid', value: c }, value: { status: 'valid', value: i.data[c] } })
      else if (u === 'strict') a.length > 0 && (B(i, { code: I.unrecognized_keys, keys: a }), r.dirty())
      else if (u !== 'strip') throw new Error('Internal ZodObject error: invalid unknownKeys value.')
    } else {
      const u = this._def.catchall
      for (const c of a) {
        const d = i.data[c]
        l.push({
          key: { status: 'valid', value: c },
          value: u._parse(new Qn(i, d, i.path, c)),
          alwaysSet: c in i.data
        })
      }
    }
    return i.common.async
      ? Promise.resolve()
          .then(async () => {
            const u = []
            for (const c of l) {
              const d = await c.key,
                f = await c.value
              u.push({ key: d, value: f, alwaysSet: c.alwaysSet })
            }
            return u
          })
          .then(u => vt.mergeObjectSync(r, u))
      : vt.mergeObjectSync(r, l)
  }
  get shape() {
    return this._def.shape()
  }
  strict(t) {
    return (
      X.errToObj,
      new Ie({
        ...this._def,
        unknownKeys: 'strict',
        ...(t !== void 0
          ? {
              errorMap: (n, r) => {
                var i, s, o, a
                const l =
                  (o =
                    (s = (i = this._def).errorMap) === null || s === void 0
                      ? void 0
                      : s.call(i, n, r).message) !== null && o !== void 0
                    ? o
                    : r.defaultError
                return n.code === 'unrecognized_keys'
                  ? { message: (a = X.errToObj(t).message) !== null && a !== void 0 ? a : l }
                  : { message: l }
              }
            }
          : {})
      })
    )
  }
  strip() {
    return new Ie({ ...this._def, unknownKeys: 'strip' })
  }
  passthrough() {
    return new Ie({ ...this._def, unknownKeys: 'passthrough' })
  }
  extend(t) {
    return new Ie({ ...this._def, shape: () => ({ ...this._def.shape(), ...t }) })
  }
  merge(t) {
    return new Ie({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({ ...this._def.shape(), ...t._def.shape() }),
      typeName: ae.ZodObject
    })
  }
  setKey(t, n) {
    return this.augment({ [t]: n })
  }
  catchall(t) {
    return new Ie({ ...this._def, catchall: t })
  }
  pick(t) {
    const n = {}
    return (
      xe.objectKeys(t).forEach(r => {
        t[r] && this.shape[r] && (n[r] = this.shape[r])
      }),
      new Ie({ ...this._def, shape: () => n })
    )
  }
  omit(t) {
    const n = {}
    return (
      xe.objectKeys(this.shape).forEach(r => {
        t[r] || (n[r] = this.shape[r])
      }),
      new Ie({ ...this._def, shape: () => n })
    )
  }
  deepPartial() {
    return Es(this)
  }
  partial(t) {
    const n = {}
    return (
      xe.objectKeys(this.shape).forEach(r => {
        const i = this.shape[r]
        t && !t[r] ? (n[r] = i) : (n[r] = i.optional())
      }),
      new Ie({ ...this._def, shape: () => n })
    )
  }
  required(t) {
    const n = {}
    return (
      xe.objectKeys(this.shape).forEach(r => {
        if (t && !t[r]) n[r] = this.shape[r]
        else {
          let s = this.shape[r]
          for (; s instanceof Kn; ) s = s._def.innerType
          n[r] = s
        }
      }),
      new Ie({ ...this._def, shape: () => n })
    )
  }
  keyof() {
    return rC(xe.objectKeys(this.shape))
  }
}
Ie.create = (e, t) =>
  new Ie({
    shape: () => e,
    unknownKeys: 'strip',
    catchall: Er.create(),
    typeName: ae.ZodObject,
    ...de(t)
  })
Ie.strictCreate = (e, t) =>
  new Ie({
    shape: () => e,
    unknownKeys: 'strict',
    catchall: Er.create(),
    typeName: ae.ZodObject,
    ...de(t)
  })
Ie.lazycreate = (e, t) =>
  new Ie({ shape: e, unknownKeys: 'strip', catchall: Er.create(), typeName: ae.ZodObject, ...de(t) })
class ml extends fe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = this._def.options
    function i(s) {
      for (const a of s) if (a.result.status === 'valid') return a.result
      for (const a of s)
        if (a.result.status === 'dirty') return n.common.issues.push(...a.ctx.common.issues), a.result
      const o = s.map(a => new Zt(a.ctx.common.issues))
      return B(n, { code: I.invalid_union, unionErrors: o }), le
    }
    if (n.common.async)
      return Promise.all(
        r.map(async s => {
          const o = { ...n, common: { ...n.common, issues: [] }, parent: null }
          return { result: await s._parseAsync({ data: n.data, path: n.path, parent: o }), ctx: o }
        })
      ).then(i)
    {
      let s
      const o = []
      for (const l of r) {
        const u = { ...n, common: { ...n.common, issues: [] }, parent: null },
          c = l._parseSync({ data: n.data, path: n.path, parent: u })
        if (c.status === 'valid') return c
        c.status === 'dirty' && !s && (s = { result: c, ctx: u }),
          u.common.issues.length && o.push(u.common.issues)
      }
      if (s) return n.common.issues.push(...s.ctx.common.issues), s.result
      const a = o.map(l => new Zt(l))
      return B(n, { code: I.invalid_union, unionErrors: a }), le
    }
  }
  get options() {
    return this._def.options
  }
}
ml.create = (e, t) => new ml({ options: e, typeName: ae.ZodUnion, ...de(t) })
const nr = e =>
  e instanceof yl
    ? nr(e.schema)
    : e instanceof Ln
      ? nr(e.innerType())
      : e instanceof wl
        ? [e.value]
        : e instanceof li
          ? e.options
          : e instanceof xl
            ? xe.objectValues(e.enum)
            : e instanceof El
              ? nr(e._def.innerType)
              : e instanceof hl
                ? [void 0]
                : e instanceof pl
                  ? [null]
                  : e instanceof Kn
                    ? [void 0, ...nr(e.unwrap())]
                    : e instanceof ui
                      ? [null, ...nr(e.unwrap())]
                      : e instanceof j0 || e instanceof Tl
                        ? nr(e.unwrap())
                        : e instanceof Sl
                          ? nr(e._def.innerType)
                          : []
class Rd extends fe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t)
    if (n.parsedType !== U.object)
      return B(n, { code: I.invalid_type, expected: U.object, received: n.parsedType }), le
    const r = this.discriminator,
      i = n.data[r],
      s = this.optionsMap.get(i)
    return s
      ? n.common.async
        ? s._parseAsync({ data: n.data, path: n.path, parent: n })
        : s._parseSync({ data: n.data, path: n.path, parent: n })
      : (B(n, {
          code: I.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [r]
        }),
        le)
  }
  get discriminator() {
    return this._def.discriminator
  }
  get options() {
    return this._def.options
  }
  get optionsMap() {
    return this._def.optionsMap
  }
  static create(t, n, r) {
    const i = new Map()
    for (const s of n) {
      const o = nr(s.shape[t])
      if (!o.length)
        throw new Error(
          `A discriminator value for key \`${t}\` could not be extracted from all schema options`
        )
      for (const a of o) {
        if (i.has(a))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(a)}`)
        i.set(a, s)
      }
    }
    return new Rd({
      typeName: ae.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: i,
      ...de(r)
    })
  }
}
function zp(e, t) {
  const n = Mr(e),
    r = Mr(t)
  if (e === t) return { valid: !0, data: e }
  if (n === U.object && r === U.object) {
    const i = xe.objectKeys(t),
      s = xe.objectKeys(e).filter(a => i.indexOf(a) !== -1),
      o = { ...e, ...t }
    for (const a of s) {
      const l = zp(e[a], t[a])
      if (!l.valid) return { valid: !1 }
      o[a] = l.data
    }
    return { valid: !0, data: o }
  } else if (n === U.array && r === U.array) {
    if (e.length !== t.length) return { valid: !1 }
    const i = []
    for (let s = 0; s < e.length; s++) {
      const o = e[s],
        a = t[s],
        l = zp(o, a)
      if (!l.valid) return { valid: !1 }
      i.push(l.data)
    }
    return { valid: !0, data: i }
  } else return n === U.date && r === U.date && +e == +t ? { valid: !0, data: e } : { valid: !1 }
}
class gl extends fe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t),
      i = (s, o) => {
        if (Vp(s) || Vp(o)) return le
        const a = zp(s.value, o.value)
        return a.valid
          ? ((Bp(s) || Bp(o)) && n.dirty(), { status: n.value, value: a.data })
          : (B(r, { code: I.invalid_intersection_types }), le)
      }
    return r.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: r.data, path: r.path, parent: r }),
          this._def.right._parseAsync({ data: r.data, path: r.path, parent: r })
        ]).then(([s, o]) => i(s, o))
      : i(
          this._def.left._parseSync({ data: r.data, path: r.path, parent: r }),
          this._def.right._parseSync({ data: r.data, path: r.path, parent: r })
        )
  }
}
gl.create = (e, t, n) => new gl({ left: e, right: t, typeName: ae.ZodIntersection, ...de(n) })
class Xn extends fe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t)
    if (r.parsedType !== U.array)
      return B(r, { code: I.invalid_type, expected: U.array, received: r.parsedType }), le
    if (r.data.length < this._def.items.length)
      return (
        B(r, {
          code: I.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: 'array'
        }),
        le
      )
    !this._def.rest &&
      r.data.length > this._def.items.length &&
      (B(r, {
        code: I.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: 'array'
      }),
      n.dirty())
    const s = [...r.data]
      .map((o, a) => {
        const l = this._def.items[a] || this._def.rest
        return l ? l._parse(new Qn(r, o, r.path, a)) : null
      })
      .filter(o => !!o)
    return r.common.async ? Promise.all(s).then(o => vt.mergeArray(n, o)) : vt.mergeArray(n, s)
  }
  get items() {
    return this._def.items
  }
  rest(t) {
    return new Xn({ ...this._def, rest: t })
  }
}
Xn.create = (e, t) => {
  if (!Array.isArray(e)) throw new Error('You must pass an array of schemas to z.tuple([ ... ])')
  return new Xn({ items: e, typeName: ae.ZodTuple, rest: null, ...de(t) })
}
class vl extends fe {
  get keySchema() {
    return this._def.keyType
  }
  get valueSchema() {
    return this._def.valueType
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t)
    if (r.parsedType !== U.object)
      return B(r, { code: I.invalid_type, expected: U.object, received: r.parsedType }), le
    const i = [],
      s = this._def.keyType,
      o = this._def.valueType
    for (const a in r.data)
      i.push({
        key: s._parse(new Qn(r, a, r.path, a)),
        value: o._parse(new Qn(r, r.data[a], r.path, a)),
        alwaysSet: a in r.data
      })
    return r.common.async ? vt.mergeObjectAsync(n, i) : vt.mergeObjectSync(n, i)
  }
  get element() {
    return this._def.valueType
  }
  static create(t, n, r) {
    return n instanceof fe
      ? new vl({ keyType: t, valueType: n, typeName: ae.ZodRecord, ...de(r) })
      : new vl({ keyType: bn.create(), valueType: t, typeName: ae.ZodRecord, ...de(n) })
  }
}
class Wc extends fe {
  get keySchema() {
    return this._def.keyType
  }
  get valueSchema() {
    return this._def.valueType
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t)
    if (r.parsedType !== U.map)
      return B(r, { code: I.invalid_type, expected: U.map, received: r.parsedType }), le
    const i = this._def.keyType,
      s = this._def.valueType,
      o = [...r.data.entries()].map(([a, l], u) => ({
        key: i._parse(new Qn(r, a, r.path, [u, 'key'])),
        value: s._parse(new Qn(r, l, r.path, [u, 'value']))
      }))
    if (r.common.async) {
      const a = new Map()
      return Promise.resolve().then(async () => {
        for (const l of o) {
          const u = await l.key,
            c = await l.value
          if (u.status === 'aborted' || c.status === 'aborted') return le
          ;(u.status === 'dirty' || c.status === 'dirty') && n.dirty(), a.set(u.value, c.value)
        }
        return { status: n.value, value: a }
      })
    } else {
      const a = new Map()
      for (const l of o) {
        const u = l.key,
          c = l.value
        if (u.status === 'aborted' || c.status === 'aborted') return le
        ;(u.status === 'dirty' || c.status === 'dirty') && n.dirty(), a.set(u.value, c.value)
      }
      return { status: n.value, value: a }
    }
  }
}
Wc.create = (e, t, n) => new Wc({ valueType: t, keyType: e, typeName: ae.ZodMap, ...de(n) })
class rs extends fe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t)
    if (r.parsedType !== U.set)
      return B(r, { code: I.invalid_type, expected: U.set, received: r.parsedType }), le
    const i = this._def
    i.minSize !== null &&
      r.data.size < i.minSize.value &&
      (B(r, {
        code: I.too_small,
        minimum: i.minSize.value,
        type: 'set',
        inclusive: !0,
        exact: !1,
        message: i.minSize.message
      }),
      n.dirty()),
      i.maxSize !== null &&
        r.data.size > i.maxSize.value &&
        (B(r, {
          code: I.too_big,
          maximum: i.maxSize.value,
          type: 'set',
          inclusive: !0,
          exact: !1,
          message: i.maxSize.message
        }),
        n.dirty())
    const s = this._def.valueType
    function o(l) {
      const u = new Set()
      for (const c of l) {
        if (c.status === 'aborted') return le
        c.status === 'dirty' && n.dirty(), u.add(c.value)
      }
      return { status: n.value, value: u }
    }
    const a = [...r.data.values()].map((l, u) => s._parse(new Qn(r, l, r.path, u)))
    return r.common.async ? Promise.all(a).then(l => o(l)) : o(a)
  }
  min(t, n) {
    return new rs({ ...this._def, minSize: { value: t, message: X.toString(n) } })
  }
  max(t, n) {
    return new rs({ ...this._def, maxSize: { value: t, message: X.toString(n) } })
  }
  size(t, n) {
    return this.min(t, n).max(t, n)
  }
  nonempty(t) {
    return this.min(1, t)
  }
}
rs.create = (e, t) =>
  new rs({ valueType: e, minSize: null, maxSize: null, typeName: ae.ZodSet, ...de(t) })
class Xs extends fe {
  constructor() {
    super(...arguments), (this.validate = this.implement)
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t)
    if (n.parsedType !== U.function)
      return B(n, { code: I.invalid_type, expected: U.function, received: n.parsedType }), le
    function r(a, l) {
      return Bc({
        data: a,
        path: n.path,
        errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, Vc(), ko].filter(u => !!u),
        issueData: { code: I.invalid_arguments, argumentsError: l }
      })
    }
    function i(a, l) {
      return Bc({
        data: a,
        path: n.path,
        errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, Vc(), ko].filter(u => !!u),
        issueData: { code: I.invalid_return_type, returnTypeError: l }
      })
    }
    const s = { errorMap: n.common.contextualErrorMap },
      o = n.data
    if (this._def.returns instanceof Ro) {
      const a = this
      return Pt(async function (...l) {
        const u = new Zt([]),
          c = await a._def.args.parseAsync(l, s).catch(h => {
            throw (u.addIssue(r(l, h)), u)
          }),
          d = await Reflect.apply(o, this, c)
        return await a._def.returns._def.type.parseAsync(d, s).catch(h => {
          throw (u.addIssue(i(d, h)), u)
        })
      })
    } else {
      const a = this
      return Pt(function (...l) {
        const u = a._def.args.safeParse(l, s)
        if (!u.success) throw new Zt([r(l, u.error)])
        const c = Reflect.apply(o, this, u.data),
          d = a._def.returns.safeParse(c, s)
        if (!d.success) throw new Zt([i(c, d.error)])
        return d.data
      })
    }
  }
  parameters() {
    return this._def.args
  }
  returnType() {
    return this._def.returns
  }
  args(...t) {
    return new Xs({ ...this._def, args: Xn.create(t).rest(Wi.create()) })
  }
  returns(t) {
    return new Xs({ ...this._def, returns: t })
  }
  implement(t) {
    return this.parse(t)
  }
  strictImplement(t) {
    return this.parse(t)
  }
  static create(t, n, r) {
    return new Xs({
      args: t || Xn.create([]).rest(Wi.create()),
      returns: n || Wi.create(),
      typeName: ae.ZodFunction,
      ...de(r)
    })
  }
}
class yl extends fe {
  get schema() {
    return this._def.getter()
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t)
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n })
  }
}
yl.create = (e, t) => new yl({ getter: e, typeName: ae.ZodLazy, ...de(t) })
class wl extends fe {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t)
      return B(n, { received: n.data, code: I.invalid_literal, expected: this._def.value }), le
    }
    return { status: 'valid', value: t.data }
  }
  get value() {
    return this._def.value
  }
}
wl.create = (e, t) => new wl({ value: e, typeName: ae.ZodLiteral, ...de(t) })
function rC(e, t) {
  return new li({ values: e, typeName: ae.ZodEnum, ...de(t) })
}
class li extends fe {
  constructor() {
    super(...arguments), pa.set(this, void 0)
  }
  _parse(t) {
    if (typeof t.data != 'string') {
      const n = this._getOrReturnCtx(t),
        r = this._def.values
      return B(n, { expected: xe.joinValues(r), received: n.parsedType, code: I.invalid_type }), le
    }
    if ((zc(this, pa) || JT(this, pa, new Set(this._def.values)), !zc(this, pa).has(t.data))) {
      const n = this._getOrReturnCtx(t),
        r = this._def.values
      return B(n, { received: n.data, code: I.invalid_enum_value, options: r }), le
    }
    return Pt(t.data)
  }
  get options() {
    return this._def.values
  }
  get enum() {
    const t = {}
    for (const n of this._def.values) t[n] = n
    return t
  }
  get Values() {
    const t = {}
    for (const n of this._def.values) t[n] = n
    return t
  }
  get Enum() {
    const t = {}
    for (const n of this._def.values) t[n] = n
    return t
  }
  extract(t, n = this._def) {
    return li.create(t, { ...this._def, ...n })
  }
  exclude(t, n = this._def) {
    return li.create(
      this.options.filter(r => !t.includes(r)),
      { ...this._def, ...n }
    )
  }
}
pa = new WeakMap()
li.create = rC
class xl extends fe {
  constructor() {
    super(...arguments), ma.set(this, void 0)
  }
  _parse(t) {
    const n = xe.getValidEnumValues(this._def.values),
      r = this._getOrReturnCtx(t)
    if (r.parsedType !== U.string && r.parsedType !== U.number) {
      const i = xe.objectValues(n)
      return B(r, { expected: xe.joinValues(i), received: r.parsedType, code: I.invalid_type }), le
    }
    if (
      (zc(this, ma) || JT(this, ma, new Set(xe.getValidEnumValues(this._def.values))),
      !zc(this, ma).has(t.data))
    ) {
      const i = xe.objectValues(n)
      return B(r, { received: r.data, code: I.invalid_enum_value, options: i }), le
    }
    return Pt(t.data)
  }
  get enum() {
    return this._def.values
  }
}
ma = new WeakMap()
xl.create = (e, t) => new xl({ values: e, typeName: ae.ZodNativeEnum, ...de(t) })
class Ro extends fe {
  unwrap() {
    return this._def.type
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t)
    if (n.parsedType !== U.promise && n.common.async === !1)
      return B(n, { code: I.invalid_type, expected: U.promise, received: n.parsedType }), le
    const r = n.parsedType === U.promise ? n.data : Promise.resolve(n.data)
    return Pt(
      r.then(i => this._def.type.parseAsync(i, { path: n.path, errorMap: n.common.contextualErrorMap }))
    )
  }
}
Ro.create = (e, t) => new Ro({ type: e, typeName: ae.ZodPromise, ...de(t) })
class Ln extends fe {
  innerType() {
    return this._def.schema
  }
  sourceType() {
    return this._def.schema._def.typeName === ae.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t),
      i = this._def.effect || null,
      s = {
        addIssue: o => {
          B(r, o), o.fatal ? n.abort() : n.dirty()
        },
        get path() {
          return r.path
        }
      }
    if (((s.addIssue = s.addIssue.bind(s)), i.type === 'preprocess')) {
      const o = i.transform(r.data, s)
      if (r.common.async)
        return Promise.resolve(o).then(async a => {
          if (n.value === 'aborted') return le
          const l = await this._def.schema._parseAsync({ data: a, path: r.path, parent: r })
          return l.status === 'aborted'
            ? le
            : l.status === 'dirty' || n.value === 'dirty'
              ? $s(l.value)
              : l
        })
      {
        if (n.value === 'aborted') return le
        const a = this._def.schema._parseSync({ data: o, path: r.path, parent: r })
        return a.status === 'aborted'
          ? le
          : a.status === 'dirty' || n.value === 'dirty'
            ? $s(a.value)
            : a
      }
    }
    if (i.type === 'refinement') {
      const o = a => {
        const l = i.refinement(a, s)
        if (r.common.async) return Promise.resolve(l)
        if (l instanceof Promise)
          throw new Error(
            'Async refinement encountered during synchronous parse operation. Use .parseAsync instead.'
          )
        return a
      }
      if (r.common.async === !1) {
        const a = this._def.schema._parseSync({ data: r.data, path: r.path, parent: r })
        return a.status === 'aborted'
          ? le
          : (a.status === 'dirty' && n.dirty(), o(a.value), { status: n.value, value: a.value })
      } else
        return this._def.schema
          ._parseAsync({ data: r.data, path: r.path, parent: r })
          .then(a =>
            a.status === 'aborted'
              ? le
              : (a.status === 'dirty' && n.dirty(),
                o(a.value).then(() => ({ status: n.value, value: a.value })))
          )
    }
    if (i.type === 'transform')
      if (r.common.async === !1) {
        const o = this._def.schema._parseSync({ data: r.data, path: r.path, parent: r })
        if (!cl(o)) return o
        const a = i.transform(o.value, s)
        if (a instanceof Promise)
          throw new Error(
            'Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.'
          )
        return { status: n.value, value: a }
      } else
        return this._def.schema
          ._parseAsync({ data: r.data, path: r.path, parent: r })
          .then(o =>
            cl(o)
              ? Promise.resolve(i.transform(o.value, s)).then(a => ({ status: n.value, value: a }))
              : o
          )
    xe.assertNever(i)
  }
}
Ln.create = (e, t, n) => new Ln({ schema: e, typeName: ae.ZodEffects, effect: t, ...de(n) })
Ln.createWithPreprocess = (e, t, n) =>
  new Ln({ schema: t, effect: { type: 'preprocess', transform: e }, typeName: ae.ZodEffects, ...de(n) })
class Kn extends fe {
  _parse(t) {
    return this._getType(t) === U.undefined ? Pt(void 0) : this._def.innerType._parse(t)
  }
  unwrap() {
    return this._def.innerType
  }
}
Kn.create = (e, t) => new Kn({ innerType: e, typeName: ae.ZodOptional, ...de(t) })
class ui extends fe {
  _parse(t) {
    return this._getType(t) === U.null ? Pt(null) : this._def.innerType._parse(t)
  }
  unwrap() {
    return this._def.innerType
  }
}
ui.create = (e, t) => new ui({ innerType: e, typeName: ae.ZodNullable, ...de(t) })
class El extends fe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t)
    let r = n.data
    return (
      n.parsedType === U.undefined && (r = this._def.defaultValue()),
      this._def.innerType._parse({ data: r, path: n.path, parent: n })
    )
  }
  removeDefault() {
    return this._def.innerType
  }
}
El.create = (e, t) =>
  new El({
    innerType: e,
    typeName: ae.ZodDefault,
    defaultValue: typeof t.default == 'function' ? t.default : () => t.default,
    ...de(t)
  })
class Sl extends fe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = { ...n, common: { ...n.common, issues: [] } },
      i = this._def.innerType._parse({ data: r.data, path: r.path, parent: { ...r } })
    return dl(i)
      ? i.then(s => ({
          status: 'valid',
          value:
            s.status === 'valid'
              ? s.value
              : this._def.catchValue({
                  get error() {
                    return new Zt(r.common.issues)
                  },
                  input: r.data
                })
        }))
      : {
          status: 'valid',
          value:
            i.status === 'valid'
              ? i.value
              : this._def.catchValue({
                  get error() {
                    return new Zt(r.common.issues)
                  },
                  input: r.data
                })
        }
  }
  removeCatch() {
    return this._def.innerType
  }
}
Sl.create = (e, t) =>
  new Sl({
    innerType: e,
    typeName: ae.ZodCatch,
    catchValue: typeof t.catch == 'function' ? t.catch : () => t.catch,
    ...de(t)
  })
class Gc extends fe {
  _parse(t) {
    if (this._getType(t) !== U.nan) {
      const r = this._getOrReturnCtx(t)
      return B(r, { code: I.invalid_type, expected: U.nan, received: r.parsedType }), le
    }
    return { status: 'valid', value: t.data }
  }
}
Gc.create = e => new Gc({ typeName: ae.ZodNaN, ...de(e) })
const LI = Symbol('zod_brand')
class j0 extends fe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = n.data
    return this._def.type._parse({ data: r, path: n.path, parent: n })
  }
  unwrap() {
    return this._def.type
  }
}
class ql extends fe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t)
    if (r.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({ data: r.data, path: r.path, parent: r })
        return s.status === 'aborted'
          ? le
          : s.status === 'dirty'
            ? (n.dirty(), $s(s.value))
            : this._def.out._parseAsync({ data: s.value, path: r.path, parent: r })
      })()
    {
      const i = this._def.in._parseSync({ data: r.data, path: r.path, parent: r })
      return i.status === 'aborted'
        ? le
        : i.status === 'dirty'
          ? (n.dirty(), { status: 'dirty', value: i.value })
          : this._def.out._parseSync({ data: i.value, path: r.path, parent: r })
    }
  }
  static create(t, n) {
    return new ql({ in: t, out: n, typeName: ae.ZodPipeline })
  }
}
class Tl extends fe {
  _parse(t) {
    const n = this._def.innerType._parse(t),
      r = i => (cl(i) && (i.value = Object.freeze(i.value)), i)
    return dl(n) ? n.then(i => r(i)) : r(n)
  }
  unwrap() {
    return this._def.innerType
  }
}
Tl.create = (e, t) => new Tl({ innerType: e, typeName: ae.ZodReadonly, ...de(t) })
function iC(e, t = {}, n) {
  return e
    ? Po.create().superRefine((r, i) => {
        var s, o
        if (!e(r)) {
          const a = typeof t == 'function' ? t(r) : typeof t == 'string' ? { message: t } : t,
            l = (o = (s = a.fatal) !== null && s !== void 0 ? s : n) !== null && o !== void 0 ? o : !0,
            u = typeof a == 'string' ? { message: a } : a
          i.addIssue({ code: 'custom', ...u, fatal: l })
        }
      })
    : Po.create()
}
const MI = { object: Ie.lazycreate }
var ae
;(function (e) {
  ;(e.ZodString = 'ZodString'),
    (e.ZodNumber = 'ZodNumber'),
    (e.ZodNaN = 'ZodNaN'),
    (e.ZodBigInt = 'ZodBigInt'),
    (e.ZodBoolean = 'ZodBoolean'),
    (e.ZodDate = 'ZodDate'),
    (e.ZodSymbol = 'ZodSymbol'),
    (e.ZodUndefined = 'ZodUndefined'),
    (e.ZodNull = 'ZodNull'),
    (e.ZodAny = 'ZodAny'),
    (e.ZodUnknown = 'ZodUnknown'),
    (e.ZodNever = 'ZodNever'),
    (e.ZodVoid = 'ZodVoid'),
    (e.ZodArray = 'ZodArray'),
    (e.ZodObject = 'ZodObject'),
    (e.ZodUnion = 'ZodUnion'),
    (e.ZodDiscriminatedUnion = 'ZodDiscriminatedUnion'),
    (e.ZodIntersection = 'ZodIntersection'),
    (e.ZodTuple = 'ZodTuple'),
    (e.ZodRecord = 'ZodRecord'),
    (e.ZodMap = 'ZodMap'),
    (e.ZodSet = 'ZodSet'),
    (e.ZodFunction = 'ZodFunction'),
    (e.ZodLazy = 'ZodLazy'),
    (e.ZodLiteral = 'ZodLiteral'),
    (e.ZodEnum = 'ZodEnum'),
    (e.ZodEffects = 'ZodEffects'),
    (e.ZodNativeEnum = 'ZodNativeEnum'),
    (e.ZodOptional = 'ZodOptional'),
    (e.ZodNullable = 'ZodNullable'),
    (e.ZodDefault = 'ZodDefault'),
    (e.ZodCatch = 'ZodCatch'),
    (e.ZodPromise = 'ZodPromise'),
    (e.ZodBranded = 'ZodBranded'),
    (e.ZodPipeline = 'ZodPipeline'),
    (e.ZodReadonly = 'ZodReadonly')
})(ae || (ae = {}))
const NI = (e, t = { message: `Input not instance of ${e.name}` }) => iC(n => n instanceof e, t),
  sC = bn.create,
  oC = oi.create,
  II = Gc.create,
  DI = ai.create,
  aC = fl.create,
  FI = ns.create,
  jI = Uc.create,
  $I = hl.create,
  VI = pl.create,
  BI = Po.create,
  zI = Wi.create,
  UI = Er.create,
  HI = Hc.create,
  WI = Rn.create,
  GI = Ie.create,
  qI = Ie.strictCreate,
  KI = ml.create,
  ZI = Rd.create,
  YI = gl.create,
  QI = Xn.create,
  XI = vl.create,
  JI = Wc.create,
  e8 = rs.create,
  t8 = Xs.create,
  n8 = yl.create,
  r8 = wl.create,
  i8 = li.create,
  s8 = xl.create,
  o8 = Ro.create,
  X2 = Ln.create,
  a8 = Kn.create,
  l8 = ui.create,
  u8 = Ln.createWithPreprocess,
  c8 = ql.create,
  d8 = () => sC().optional(),
  f8 = () => oC().optional(),
  h8 = () => aC().optional(),
  p8 = {
    string: e => bn.create({ ...e, coerce: !0 }),
    number: e => oi.create({ ...e, coerce: !0 }),
    boolean: e => fl.create({ ...e, coerce: !0 }),
    bigint: e => ai.create({ ...e, coerce: !0 }),
    date: e => ns.create({ ...e, coerce: !0 })
  },
  m8 = le
var ys = Object.freeze({
  __proto__: null,
  defaultErrorMap: ko,
  setErrorMap: mI,
  getErrorMap: Vc,
  makeIssue: Bc,
  EMPTY_PATH: gI,
  addIssueToContext: B,
  ParseStatus: vt,
  INVALID: le,
  DIRTY: $s,
  OK: Pt,
  isAborted: Vp,
  isDirty: Bp,
  isValid: cl,
  isAsync: dl,
  get util() {
    return xe
  },
  get objectUtil() {
    return $p
  },
  ZodParsedType: U,
  getParsedType: Mr,
  ZodType: fe,
  datetimeRegex: nC,
  ZodString: bn,
  ZodNumber: oi,
  ZodBigInt: ai,
  ZodBoolean: fl,
  ZodDate: ns,
  ZodSymbol: Uc,
  ZodUndefined: hl,
  ZodNull: pl,
  ZodAny: Po,
  ZodUnknown: Wi,
  ZodNever: Er,
  ZodVoid: Hc,
  ZodArray: Rn,
  ZodObject: Ie,
  ZodUnion: ml,
  ZodDiscriminatedUnion: Rd,
  ZodIntersection: gl,
  ZodTuple: Xn,
  ZodRecord: vl,
  ZodMap: Wc,
  ZodSet: rs,
  ZodFunction: Xs,
  ZodLazy: yl,
  ZodLiteral: wl,
  ZodEnum: li,
  ZodNativeEnum: xl,
  ZodPromise: Ro,
  ZodEffects: Ln,
  ZodTransformer: Ln,
  ZodOptional: Kn,
  ZodNullable: ui,
  ZodDefault: El,
  ZodCatch: Sl,
  ZodNaN: Gc,
  BRAND: LI,
  ZodBranded: j0,
  ZodPipeline: ql,
  ZodReadonly: Tl,
  custom: iC,
  Schema: fe,
  ZodSchema: fe,
  late: MI,
  get ZodFirstPartyTypeKind() {
    return ae
  },
  coerce: p8,
  any: BI,
  array: WI,
  bigint: DI,
  boolean: aC,
  date: FI,
  discriminatedUnion: ZI,
  effect: X2,
  enum: i8,
  function: t8,
  instanceof: NI,
  intersection: YI,
  lazy: n8,
  literal: r8,
  map: JI,
  nan: II,
  nativeEnum: s8,
  never: UI,
  null: VI,
  nullable: l8,
  number: oC,
  object: GI,
  oboolean: h8,
  onumber: f8,
  optional: a8,
  ostring: d8,
  pipeline: c8,
  preprocess: u8,
  promise: o8,
  record: XI,
  set: e8,
  strictObject: qI,
  string: sC,
  symbol: jI,
  transformer: X2,
  tuple: QI,
  undefined: $I,
  union: KI,
  unknown: zI,
  void: HI,
  NEVER: m8,
  ZodIssueCode: I,
  quotelessJson: pI,
  ZodError: Zt
})
const g8 = Ku.filter(e => e.value !== void 0).map(e => e.value),
  v8 = Math.max(...oE),
  y8 = ys.object({
    limit: ys.coerce.number().int().positive().max(v8).default(Ma),
    offset: ys.coerce.number().int().nonnegative().default(jl),
    name: ys
      .string()
      .trim()
      .transform(e => Y2.sanitize(e || ''))
      .optional(),
    type: ys
      .string()
      .trim()
      .transform(e => Y2.sanitize(e || ''))
      .optional(),
    sort: ys.enum(g8).optional()
  }),
  w8 = Kx('/')({ component: KN, validateSearch: y8 }),
  x8 = Kx('/pokemon-details/$name')(),
  E8 = w8.update({ path: '/', getParentRoute: () => Hm }),
  S8 = x8
    .update({ path: '/pokemon-details/$name', getParentRoute: () => Hm })
    .lazy(() => H4(() => import('./pokemon-details._name.lazy-BRLbfSFf.js'), []).then(e => e.Route)),
  T8 = { IndexRoute: E8, PokemonDetailsNameLazyRoute: S8 },
  C8 = Hm._addFileChildren(T8)._addFileTypes(),
  _8 = new sb(),
  b8 = h4({ routeTree: C8 }),
  J2 = document.getElementById('root')
J2.innerHTML ||
  Jf.createRoot(J2).render(
    P.jsx(w.StrictMode, { children: P.jsx(cb, { client: _8, children: P.jsx(I4, { router: b8 }) }) })
  )
export {
  Ks as B,
  gk as C,
  DS as D,
  Oc as L,
  vS as M,
  l0 as P,
  we as R,
  SO as T,
  yS as a,
  jP as b,
  tE as c,
  Tr as d,
  ub as e,
  Nx as f,
  Gx as g,
  I8 as h,
  R8 as i,
  P as j,
  Zs as m,
  D8 as p,
  w as r,
  OP as s,
  sE as t,
  AA as u
}
