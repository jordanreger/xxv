// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../node_modules/@lit/reactive-element/css-tag.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unsafeCSS = exports.supportsAdoptingStyleSheets = exports.getCompatibleStyle = exports.css = exports.adoptStyles = exports.CSSResult = void 0;

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
      e = Symbol();
exports.supportsAdoptingStyleSheets = t;

class s {
  constructor(t, s) {
    if (s !== e) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t;
  }

  get styleSheet() {
    return t && void 0 === this.t && (this.t = new CSSStyleSheet(), this.t.replaceSync(this.cssText)), this.t;
  }

  toString() {
    return this.cssText;
  }

}

exports.CSSResult = s;

const n = new Map(),
      o = t => {
  let o = n.get(t);
  return void 0 === o && n.set(t, o = new s(t, e)), o;
},
      r = t => o("string" == typeof t ? t : t + ""),
      i = (t, ...e) => {
  const n = 1 === t.length ? t[0] : e.reduce((e, n, o) => e + (t => {
    if (t instanceof s) return t.cssText;
    if ("number" == typeof t) return t;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + t[o + 1], t[0]);
  return o(n);
},
      S = (e, s) => {
  t ? e.adoptedStyleSheets = s.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet) : s.forEach(t => {
    const s = document.createElement("style");
    s.textContent = t.cssText, e.appendChild(s);
  });
},
      u = t ? t => t : t => t instanceof CSSStyleSheet ? (t => {
  let e = "";

  for (const s of t.cssRules) e += s.cssText;

  return r(e);
})(t) : t;

exports.getCompatibleStyle = u;
exports.adoptStyles = S;
exports.css = i;
exports.unsafeCSS = r;
},{}],"../../node_modules/@lit/reactive-element/reactive-element.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CSSResult", {
  enumerable: true,
  get: function () {
    return _cssTag.CSSResult;
  }
});
exports.ReactiveElement = void 0;
Object.defineProperty(exports, "adoptStyles", {
  enumerable: true,
  get: function () {
    return _cssTag.adoptStyles;
  }
});
Object.defineProperty(exports, "css", {
  enumerable: true,
  get: function () {
    return _cssTag.css;
  }
});
exports.defaultConverter = void 0;
Object.defineProperty(exports, "getCompatibleStyle", {
  enumerable: true,
  get: function () {
    return _cssTag.getCompatibleStyle;
  }
});
exports.notEqual = void 0;
Object.defineProperty(exports, "supportsAdoptingStyleSheets", {
  enumerable: true,
  get: function () {
    return _cssTag.supportsAdoptingStyleSheets;
  }
});
Object.defineProperty(exports, "unsafeCSS", {
  enumerable: true,
  get: function () {
    return _cssTag.unsafeCSS;
  }
});

var _cssTag = require("./css-tag.js");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var s, e, h, r;

const o = {
  toAttribute(t, i) {
    switch (i) {
      case Boolean:
        t = t ? "" : null;
        break;

      case Object:
      case Array:
        t = null == t ? t : JSON.stringify(t);
    }

    return t;
  },

  fromAttribute(t, i) {
    let s = t;

    switch (i) {
      case Boolean:
        s = null !== t;
        break;

      case Number:
        s = null === t ? null : Number(t);
        break;

      case Object:
      case Array:
        try {
          s = JSON.parse(t);
        } catch (t) {
          s = null;
        }

    }

    return s;
  }

},
      n = (t, i) => i !== t && (i == i || t == t),
      l = {
  attribute: !0,
  type: String,
  converter: o,
  reflect: !1,
  hasChanged: n
};

exports.notEqual = n;
exports.defaultConverter = o;

class a extends HTMLElement {
  constructor() {
    super(), this.Πi = new Map(), this.Πo = void 0, this.Πl = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this.Πh = null, this.u();
  }

  static addInitializer(t) {
    var i;
    null !== (i = this.v) && void 0 !== i || (this.v = []), this.v.push(t);
  }

  static get observedAttributes() {
    this.finalize();
    const t = [];
    return this.elementProperties.forEach((i, s) => {
      const e = this.Πp(s, i);
      void 0 !== e && (this.Πm.set(e, s), t.push(e));
    }), t;
  }

  static createProperty(t, i = l) {
    if (i.state && (i.attribute = !1), this.finalize(), this.elementProperties.set(t, i), !i.noAccessor && !this.prototype.hasOwnProperty(t)) {
      const s = "symbol" == typeof t ? Symbol() : "__" + t,
            e = this.getPropertyDescriptor(t, s, i);
      void 0 !== e && Object.defineProperty(this.prototype, t, e);
    }
  }

  static getPropertyDescriptor(t, i, s) {
    return {
      get() {
        return this[i];
      },

      set(e) {
        const h = this[t];
        this[i] = e, this.requestUpdate(t, h, s);
      },

      configurable: !0,
      enumerable: !0
    };
  }

  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || l;
  }

  static finalize() {
    if (this.hasOwnProperty("finalized")) return !1;
    this.finalized = !0;
    const t = Object.getPrototypeOf(this);

    if (t.finalize(), this.elementProperties = new Map(t.elementProperties), this.Πm = new Map(), this.hasOwnProperty("properties")) {
      const t = this.properties,
            i = [...Object.getOwnPropertyNames(t), ...Object.getOwnPropertySymbols(t)];

      for (const s of i) this.createProperty(s, t[s]);
    }

    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }

  static finalizeStyles(i) {
    const s = [];

    if (Array.isArray(i)) {
      const e = new Set(i.flat(1 / 0).reverse());

      for (const i of e) s.unshift((0, _cssTag.getCompatibleStyle)(i));
    } else void 0 !== i && s.push((0, _cssTag.getCompatibleStyle)(i));

    return s;
  }

  static Πp(t, i) {
    const s = i.attribute;
    return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0;
  }

  u() {
    var t;
    this.Πg = new Promise(t => this.enableUpdating = t), this.L = new Map(), this.Π_(), this.requestUpdate(), null === (t = this.constructor.v) || void 0 === t || t.forEach(t => t(this));
  }

  addController(t) {
    var i, s;
    (null !== (i = this.ΠU) && void 0 !== i ? i : this.ΠU = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (s = t.hostConnected) || void 0 === s || s.call(t));
  }

  removeController(t) {
    var i;
    null === (i = this.ΠU) || void 0 === i || i.splice(this.ΠU.indexOf(t) >>> 0, 1);
  }

  Π_() {
    this.constructor.elementProperties.forEach((t, i) => {
      this.hasOwnProperty(i) && (this.Πi.set(i, this[i]), delete this[i]);
    });
  }

  createRenderRoot() {
    var t;
    const s = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
    return (0, _cssTag.adoptStyles)(s, this.constructor.elementStyles), s;
  }

  connectedCallback() {
    var t;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this.ΠU) || void 0 === t || t.forEach(t => {
      var i;
      return null === (i = t.hostConnected) || void 0 === i ? void 0 : i.call(t);
    }), this.Πl && (this.Πl(), this.Πo = this.Πl = void 0);
  }

  enableUpdating(t) {}

  disconnectedCallback() {
    var t;
    null === (t = this.ΠU) || void 0 === t || t.forEach(t => {
      var i;
      return null === (i = t.hostDisconnected) || void 0 === i ? void 0 : i.call(t);
    }), this.Πo = new Promise(t => this.Πl = t);
  }

  attributeChangedCallback(t, i, s) {
    this.K(t, s);
  }

  Πj(t, i, s = l) {
    var e, h;
    const r = this.constructor.Πp(t, s);

    if (void 0 !== r && !0 === s.reflect) {
      const n = (null !== (h = null === (e = s.converter) || void 0 === e ? void 0 : e.toAttribute) && void 0 !== h ? h : o.toAttribute)(i, s.type);
      this.Πh = t, null == n ? this.removeAttribute(r) : this.setAttribute(r, n), this.Πh = null;
    }
  }

  K(t, i) {
    var s, e, h;
    const r = this.constructor,
          n = r.Πm.get(t);

    if (void 0 !== n && this.Πh !== n) {
      const t = r.getPropertyOptions(n),
            l = t.converter,
            a = null !== (h = null !== (e = null === (s = l) || void 0 === s ? void 0 : s.fromAttribute) && void 0 !== e ? e : "function" == typeof l ? l : null) && void 0 !== h ? h : o.fromAttribute;
      this.Πh = n, this[n] = a(i, t.type), this.Πh = null;
    }
  }

  requestUpdate(t, i, s) {
    let e = !0;
    void 0 !== t && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || n)(this[t], i) ? (this.L.has(t) || this.L.set(t, i), !0 === s.reflect && this.Πh !== t && (void 0 === this.Πk && (this.Πk = new Map()), this.Πk.set(t, s))) : e = !1), !this.isUpdatePending && e && (this.Πg = this.Πq());
  }

  async Πq() {
    this.isUpdatePending = !0;

    try {
      for (await this.Πg; this.Πo;) await this.Πo;
    } catch (t) {
      Promise.reject(t);
    }

    const t = this.performUpdate();
    return null != t && (await t), !this.isUpdatePending;
  }

  performUpdate() {
    var t;
    if (!this.isUpdatePending) return;
    this.hasUpdated, this.Πi && (this.Πi.forEach((t, i) => this[i] = t), this.Πi = void 0);
    let i = !1;
    const s = this.L;

    try {
      i = this.shouldUpdate(s), i ? (this.willUpdate(s), null === (t = this.ΠU) || void 0 === t || t.forEach(t => {
        var i;
        return null === (i = t.hostUpdate) || void 0 === i ? void 0 : i.call(t);
      }), this.update(s)) : this.Π$();
    } catch (t) {
      throw i = !1, this.Π$(), t;
    }

    i && this.E(s);
  }

  willUpdate(t) {}

  E(t) {
    var i;
    null === (i = this.ΠU) || void 0 === i || i.forEach(t => {
      var i;
      return null === (i = t.hostUpdated) || void 0 === i ? void 0 : i.call(t);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }

  Π$() {
    this.L = new Map(), this.isUpdatePending = !1;
  }

  get updateComplete() {
    return this.getUpdateComplete();
  }

  getUpdateComplete() {
    return this.Πg;
  }

  shouldUpdate(t) {
    return !0;
  }

  update(t) {
    void 0 !== this.Πk && (this.Πk.forEach((t, i) => this.Πj(i, this[i], t)), this.Πk = void 0), this.Π$();
  }

  updated(t) {}

  firstUpdated(t) {}

}

exports.ReactiveElement = a;
a.finalized = !0, a.elementProperties = new Map(), a.elementStyles = [], a.shadowRootOptions = {
  mode: "open"
}, null === (e = (s = globalThis).reactiveElementPlatformSupport) || void 0 === e || e.call(s, {
  ReactiveElement: a
}), (null !== (h = (r = globalThis).reactiveElementVersions) && void 0 !== h ? h : r.reactiveElementVersions = []).push("1.0.0-rc.2");
},{"./css-tag.js":"../../node_modules/@lit/reactive-element/css-tag.js"}],"../../node_modules/lit-html/lit-html.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.svg = exports.render = exports.nothing = exports.noChange = exports.html = exports._Σ = void 0;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t, i, s, e;

const o = globalThis.trustedTypes,
      l = o ? o.createPolicy("lit-html", {
  createHTML: t => t
}) : void 0,
      n = `lit$${(Math.random() + "").slice(9)}$`,
      h = "?" + n,
      r = `<${h}>`,
      u = document,
      c = (t = "") => u.createComment(t),
      d = t => null === t || "object" != typeof t && "function" != typeof t,
      v = Array.isArray,
      a = t => {
  var i;
  return v(t) || "function" == typeof (null === (i = t) || void 0 === i ? void 0 : i[Symbol.iterator]);
},
      f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
      _ = /-->/g,
      m = />/g,
      p = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
      $ = /'/g,
      g = /"/g,
      y = /^(?:script|style|textarea)$/i,
      b = t => (i, ...s) => ({
  _$litType$: t,
  strings: i,
  values: s
}),
      T = b(1),
      x = b(2),
      w = Symbol.for("lit-noChange"),
      A = Symbol.for("lit-nothing"),
      P = new WeakMap(),
      V = (t, i, s) => {
  var e, o;
  const l = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
  let n = l._$litPart$;

  if (void 0 === n) {
    const t = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;
    l._$litPart$ = n = new C(i.insertBefore(c(), t), t, void 0, s);
  }

  return n.I(t), n;
},
      E = u.createTreeWalker(u, 129, null, !1),
      M = (t, i) => {
  const s = t.length - 1,
        e = [];
  let o,
      h = 2 === i ? "<svg>" : "",
      u = f;

  for (let i = 0; i < s; i++) {
    const s = t[i];
    let l,
        c,
        d = -1,
        v = 0;

    for (; v < s.length && (u.lastIndex = v, c = u.exec(s), null !== c);) v = u.lastIndex, u === f ? "!--" === c[1] ? u = _ : void 0 !== c[1] ? u = m : void 0 !== c[2] ? (y.test(c[2]) && (o = RegExp("</" + c[2], "g")), u = p) : void 0 !== c[3] && (u = p) : u === p ? ">" === c[0] ? (u = null != o ? o : f, d = -1) : void 0 === c[1] ? d = -2 : (d = u.lastIndex - c[2].length, l = c[1], u = void 0 === c[3] ? p : '"' === c[3] ? g : $) : u === g || u === $ ? u = p : u === _ || u === m ? u = f : (u = p, o = void 0);

    const a = u === p && t[i + 1].startsWith("/>") ? " " : "";
    h += u === f ? s + r : d >= 0 ? (e.push(l), s.slice(0, d) + "$lit$" + s.slice(d) + n + a) : s + n + (-2 === d ? (e.push(void 0), i) : a);
  }

  const c = h + (t[s] || "<?>") + (2 === i ? "</svg>" : "");
  return [void 0 !== l ? l.createHTML(c) : c, e];
};

exports.render = V;
exports.nothing = A;
exports.noChange = w;
exports.svg = x;
exports.html = T;

class N {
  constructor({
    strings: t,
    _$litType$: i
  }, s) {
    let e;
    this.parts = [];
    let l = 0,
        r = 0;
    const u = t.length - 1,
          d = this.parts,
          [v, a] = M(t, i);

    if (this.el = N.createElement(v, s), E.currentNode = this.el.content, 2 === i) {
      const t = this.el.content,
            i = t.firstChild;
      i.remove(), t.append(...i.childNodes);
    }

    for (; null !== (e = E.nextNode()) && d.length < u;) {
      if (1 === e.nodeType) {
        if (e.hasAttributes()) {
          const t = [];

          for (const i of e.getAttributeNames()) if (i.endsWith("$lit$") || i.startsWith(n)) {
            const s = a[r++];

            if (t.push(i), void 0 !== s) {
              const t = e.getAttribute(s.toLowerCase() + "$lit$").split(n),
                    i = /([.?@])?(.*)/.exec(s);
              d.push({
                type: 1,
                index: l,
                name: i[2],
                strings: t,
                ctor: "." === i[1] ? I : "?" === i[1] ? L : "@" === i[1] ? R : H
              });
            } else d.push({
              type: 6,
              index: l
            });
          }

          for (const i of t) e.removeAttribute(i);
        }

        if (y.test(e.tagName)) {
          const t = e.textContent.split(n),
                i = t.length - 1;

          if (i > 0) {
            e.textContent = o ? o.emptyScript : "";

            for (let s = 0; s < i; s++) e.append(t[s], c()), E.nextNode(), d.push({
              type: 2,
              index: ++l
            });

            e.append(t[i], c());
          }
        }
      } else if (8 === e.nodeType) if (e.data === h) d.push({
        type: 2,
        index: l
      });else {
        let t = -1;

        for (; -1 !== (t = e.data.indexOf(n, t + 1));) d.push({
          type: 7,
          index: l
        }), t += n.length - 1;
      }

      l++;
    }
  }

  static createElement(t, i) {
    const s = u.createElement("template");
    return s.innerHTML = t, s;
  }

}

function S(t, i, s = t, e) {
  var o, l, n, h;
  if (i === w) return i;
  let r = void 0 !== e ? null === (o = s.Σi) || void 0 === o ? void 0 : o[e] : s.Σo;
  const u = d(i) ? void 0 : i._$litDirective$;
  return (null == r ? void 0 : r.constructor) !== u && (null === (l = null == r ? void 0 : r.O) || void 0 === l || l.call(r, !1), void 0 === u ? r = void 0 : (r = new u(t), r.T(t, s, e)), void 0 !== e ? (null !== (n = (h = s).Σi) && void 0 !== n ? n : h.Σi = [])[e] = r : s.Σo = r), void 0 !== r && (i = S(t, r.S(t, i.values), r, e)), i;
}

class k {
  constructor(t, i) {
    this.l = [], this.N = void 0, this.D = t, this.M = i;
  }

  u(t) {
    var i;
    const {
      el: {
        content: s
      },
      parts: e
    } = this.D,
          o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : u).importNode(s, !0);
    E.currentNode = o;
    let l = E.nextNode(),
        n = 0,
        h = 0,
        r = e[0];

    for (; void 0 !== r;) {
      if (n === r.index) {
        let i;
        2 === r.type ? i = new C(l, l.nextSibling, this, t) : 1 === r.type ? i = new r.ctor(l, r.name, r.strings, this, t) : 6 === r.type && (i = new z(l, this, t)), this.l.push(i), r = e[++h];
      }

      n !== (null == r ? void 0 : r.index) && (l = E.nextNode(), n++);
    }

    return o;
  }

  v(t) {
    let i = 0;

    for (const s of this.l) void 0 !== s && (void 0 !== s.strings ? (s.I(t, s, i), i += s.strings.length - 2) : s.I(t[i])), i++;
  }

}

class C {
  constructor(t, i, s, e) {
    this.type = 2, this.N = void 0, this.A = t, this.B = i, this.M = s, this.options = e;
  }

  setConnected(t) {
    var i;
    null === (i = this.P) || void 0 === i || i.call(this, t);
  }

  get parentNode() {
    return this.A.parentNode;
  }

  get startNode() {
    return this.A;
  }

  get endNode() {
    return this.B;
  }

  I(t, i = this) {
    t = S(this, t, i), d(t) ? t === A || null == t || "" === t ? (this.H !== A && this.R(), this.H = A) : t !== this.H && t !== w && this.m(t) : void 0 !== t._$litType$ ? this._(t) : void 0 !== t.nodeType ? this.$(t) : a(t) ? this.g(t) : this.m(t);
  }

  k(t, i = this.B) {
    return this.A.parentNode.insertBefore(t, i);
  }

  $(t) {
    this.H !== t && (this.R(), this.H = this.k(t));
  }

  m(t) {
    const i = this.A.nextSibling;
    null !== i && 3 === i.nodeType && (null === this.B ? null === i.nextSibling : i === this.B.previousSibling) ? i.data = t : this.$(u.createTextNode(t)), this.H = t;
  }

  _(t) {
    var i;
    const {
      values: s,
      _$litType$: e
    } = t,
          o = "number" == typeof e ? this.C(t) : (void 0 === e.el && (e.el = N.createElement(e.h, this.options)), e);
    if ((null === (i = this.H) || void 0 === i ? void 0 : i.D) === o) this.H.v(s);else {
      const t = new k(o, this),
            i = t.u(this.options);
      t.v(s), this.$(i), this.H = t;
    }
  }

  C(t) {
    let i = P.get(t.strings);
    return void 0 === i && P.set(t.strings, i = new N(t)), i;
  }

  g(t) {
    v(this.H) || (this.H = [], this.R());
    const i = this.H;
    let s,
        e = 0;

    for (const o of t) e === i.length ? i.push(s = new C(this.k(c()), this.k(c()), this, this.options)) : s = i[e], s.I(o), e++;

    e < i.length && (this.R(s && s.B.nextSibling, e), i.length = e);
  }

  R(t = this.A.nextSibling, i) {
    var s;

    for (null === (s = this.P) || void 0 === s || s.call(this, !1, !0, i); t && t !== this.B;) {
      const i = t.nextSibling;
      t.remove(), t = i;
    }
  }

}

class H {
  constructor(t, i, s, e, o) {
    this.type = 1, this.H = A, this.N = void 0, this.V = void 0, this.element = t, this.name = i, this.M = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this.H = Array(s.length - 1).fill(A), this.strings = s) : this.H = A;
  }

  get tagName() {
    return this.element.tagName;
  }

  I(t, i = this, s, e) {
    const o = this.strings;
    let l = !1;
    if (void 0 === o) t = S(this, t, i, 0), l = !d(t) || t !== this.H && t !== w, l && (this.H = t);else {
      const e = t;
      let n, h;

      for (t = o[0], n = 0; n < o.length - 1; n++) h = S(this, e[s + n], i, n), h === w && (h = this.H[n]), l || (l = !d(h) || h !== this.H[n]), h === A ? t = A : t !== A && (t += (null != h ? h : "") + o[n + 1]), this.H[n] = h;
    }
    l && !e && this.W(t);
  }

  W(t) {
    t === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
  }

}

class I extends H {
  constructor() {
    super(...arguments), this.type = 3;
  }

  W(t) {
    this.element[this.name] = t === A ? void 0 : t;
  }

}

class L extends H {
  constructor() {
    super(...arguments), this.type = 4;
  }

  W(t) {
    t && t !== A ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name);
  }

}

class R extends H {
  constructor() {
    super(...arguments), this.type = 5;
  }

  I(t, i = this) {
    var s;
    if ((t = null !== (s = S(this, t, i, 0)) && void 0 !== s ? s : A) === w) return;
    const e = this.H,
          o = t === A && e !== A || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive,
          l = t !== A && (e === A || o);
    o && this.element.removeEventListener(this.name, this, e), l && this.element.addEventListener(this.name, this, t), this.H = t;
  }

  handleEvent(t) {
    var i, s;
    "function" == typeof this.H ? this.H.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this.H.handleEvent(t);
  }

}

class z {
  constructor(t, i, s) {
    this.element = t, this.type = 6, this.N = void 0, this.V = void 0, this.M = i, this.options = s;
  }

  I(t) {
    S(this, t);
  }

}

const Z = {
  Z: "$lit$",
  U: n,
  Y: h,
  q: 1,
  X: M,
  tt: k,
  it: a,
  st: S,
  et: C,
  ot: H,
  nt: L,
  rt: R,
  lt: I,
  ht: z
};
exports._Σ = Z;
null === (i = (t = globalThis).litHtmlPlatformSupport) || void 0 === i || i.call(t, N, C), (null !== (s = (e = globalThis).litHtmlVersions) && void 0 !== s ? s : e.litHtmlVersions = []).push("2.0.0-rc.3");
},{}],"../../node_modules/lit-element/lit-element.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  LitElement: true,
  UpdatingElement: true,
  _Φ: true
};
exports._Φ = exports.UpdatingElement = exports.LitElement = void 0;

var _reactiveElement = require("@lit/reactive-element");

Object.keys(_reactiveElement).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _reactiveElement[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _reactiveElement[key];
    }
  });
});

var _litHtml = require("lit-html");

Object.keys(_litHtml).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _litHtml[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _litHtml[key];
    }
  });
});

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var i, l, o, s, n, a;
const c = _reactiveElement.ReactiveElement;
exports.UpdatingElement = c;
(null !== (i = (a = globalThis).litElementVersions) && void 0 !== i ? i : a.litElementVersions = []).push("3.0.0-rc.2");

class h extends _reactiveElement.ReactiveElement {
  constructor() {
    super(...arguments), this.renderOptions = {
      host: this
    }, this.Φt = void 0;
  }

  createRenderRoot() {
    var t, e;
    const r = super.createRenderRoot();
    return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = r.firstChild), r;
  }

  update(t) {
    const r = this.render();
    super.update(t), this.Φt = (0, _litHtml.render)(r, this.renderRoot, this.renderOptions);
  }

  connectedCallback() {
    var t;
    super.connectedCallback(), null === (t = this.Φt) || void 0 === t || t.setConnected(!0);
  }

  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), null === (t = this.Φt) || void 0 === t || t.setConnected(!1);
  }

  render() {
    return _litHtml.noChange;
  }

}

exports.LitElement = h;
h.finalized = !0, h._$litElement$ = !0, null === (o = (l = globalThis).litElementHydrateSupport) || void 0 === o || o.call(l, {
  LitElement: h
}), null === (n = (s = globalThis).litElementPlatformSupport) || void 0 === n || n.call(s, {
  LitElement: h
});
const u = {
  K: (t, e, r) => {
    t.K(e, r);
  },
  L: t => t.L
};
exports._Φ = u;
},{"@lit/reactive-element":"../../node_modules/@lit/reactive-element/reactive-element.js","lit-html":"../../node_modules/lit-html/lit-html.js"}],"../../node_modules/@lit/reactive-element/decorators/base.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.standardPrototypeMethod = exports.legacyPrototypeMethod = exports.decorateProperty = void 0;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e = (e, t, o) => {
  Object.defineProperty(t, o, e);
},
      t = (e, t) => ({
  kind: "method",
  placement: "prototype",
  key: t.key,
  descriptor: e
}),
      o = ({
  finisher: e,
  descriptor: t
}) => (o, n) => {
  var r;

  if (void 0 === n) {
    const n = null !== (r = o.originalKey) && void 0 !== r ? r : o.key,
          i = null != t ? {
      kind: "method",
      placement: "prototype",
      key: n,
      descriptor: t(o.key)
    } : { ...o,
      key: n
    };
    return null != e && (i.finisher = function (t) {
      e(t, n);
    }), i;
  }

  {
    const r = o.constructor;
    void 0 !== t && Object.defineProperty(o, n, t(n)), null == e || e(r, n);
  }
};

exports.decorateProperty = o;
exports.standardPrototypeMethod = t;
exports.legacyPrototypeMethod = e;
},{}],"../../node_modules/@lit/reactive-element/decorators/custom-element.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.customElement = void 0;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n = n => e => "function" == typeof e ? ((n, e) => (window.customElements.define(n, e), e))(n, e) : ((n, e) => {
  const {
    kind: t,
    elements: i
  } = e;
  return {
    kind: t,
    elements: i,

    finisher(e) {
      window.customElements.define(n, e);
    }

  };
})(n, e);

exports.customElement = n;
},{}],"../../node_modules/@lit/reactive-element/decorators/property.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.property = e;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i = (i, e) => "method" === e.kind && e.descriptor && !("value" in e.descriptor) ? { ...e,

  finisher(n) {
    n.createProperty(e.key, i);
  }

} : {
  kind: "field",
  key: Symbol(),
  placement: "own",
  descriptor: {},
  originalKey: e.key,

  initializer() {
    "function" == typeof e.initializer && (this[e.key] = e.initializer.call(this));
  },

  finisher(n) {
    n.createProperty(e.key, i);
  }

};

function e(e) {
  return (n, t) => void 0 !== t ? ((i, e, n) => {
    e.constructor.createProperty(n, i);
  })(e, n, t) : i(e, n);
}
},{}],"../../node_modules/@lit/reactive-element/decorators/state.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = r;

var _property = require("./property.js");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function r(r) {
  return (0, _property.property)({ ...r,
    state: !0,
    attribute: !1
  });
}
},{"./property.js":"../../node_modules/@lit/reactive-element/decorators/property.js"}],"../../node_modules/@lit/reactive-element/decorators/event-options.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eventOptions = e;

var _base = require("./base.js");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e(e) {
  return (0, _base.decorateProperty)({
    finisher: (r, t) => {
      Object.assign(r.prototype[t], e);
    }
  });
}
},{"./base.js":"../../node_modules/@lit/reactive-element/decorators/base.js"}],"../../node_modules/@lit/reactive-element/decorators/query.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = o;

var _base = require("./base.js");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function o(o, r) {
  return (0, _base.decorateProperty)({
    descriptor: t => {
      const i = {
        get() {
          var t;
          return null === (t = this.renderRoot) || void 0 === t ? void 0 : t.querySelector(o);
        },

        enumerable: !0,
        configurable: !0
      };

      if (r) {
        const r = "symbol" == typeof t ? Symbol() : "__" + t;

        i.get = function () {
          var t;
          return void 0 === this[r] && (this[r] = null === (t = this.renderRoot) || void 0 === t ? void 0 : t.querySelector(o)), this[r];
        };
      }

      return i;
    }
  });
}
},{"./base.js":"../../node_modules/@lit/reactive-element/decorators/base.js"}],"../../node_modules/@lit/reactive-element/decorators/query-all.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryAll = e;

var _base = require("./base.js");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e(e) {
  return (0, _base.decorateProperty)({
    descriptor: r => ({
      get() {
        var r;
        return null === (r = this.renderRoot) || void 0 === r ? void 0 : r.querySelectorAll(e);
      },

      enumerable: !0,
      configurable: !0
    })
  });
}
},{"./base.js":"../../node_modules/@lit/reactive-element/decorators/base.js"}],"../../node_modules/@lit/reactive-element/decorators/query-async.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryAsync = e;

var _base = require("./base.js");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e(e) {
  return (0, _base.decorateProperty)({
    descriptor: r => ({
      async get() {
        var r;
        return await this.updateComplete, null === (r = this.renderRoot) || void 0 === r ? void 0 : r.querySelector(e);
      },

      enumerable: !0,
      configurable: !0
    })
  });
}
},{"./base.js":"../../node_modules/@lit/reactive-element/decorators/base.js"}],"../../node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryAssignedNodes = o;

var _base = require("./base.js");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = Element.prototype,
      n = t.msMatchesSelector || t.webkitMatchesSelector;

function o(t = "", o = !1, r = "") {
  return (0, _base.decorateProperty)({
    descriptor: e => ({
      get() {
        var e, l;
        const i = "slot" + (t ? `[name=${t}]` : ":not([name])");
        let a = null === (l = null === (e = this.renderRoot) || void 0 === e ? void 0 : e.querySelector(i)) || void 0 === l ? void 0 : l.assignedNodes({
          flatten: o
        });
        return a && r && (a = a.filter(e => e.nodeType === Node.ELEMENT_NODE && (e.matches ? e.matches(r) : n.call(e, r)))), a;
      },

      enumerable: !0,
      configurable: !0
    })
  });
}
},{"./base.js":"../../node_modules/@lit/reactive-element/decorators/base.js"}],"../../node_modules/lit-element/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  LitElement: true,
  UpdatingElement: true,
  _Φ: true
};
Object.defineProperty(exports, "LitElement", {
  enumerable: true,
  get: function () {
    return _litElement.LitElement;
  }
});
Object.defineProperty(exports, "UpdatingElement", {
  enumerable: true,
  get: function () {
    return _litElement.UpdatingElement;
  }
});
Object.defineProperty(exports, "_\u03A6", {
  enumerable: true,
  get: function () {
    return _litElement._Φ;
  }
});

var _reactiveElement = require("@lit/reactive-element");

Object.keys(_reactiveElement).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _reactiveElement[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _reactiveElement[key];
    }
  });
});

var _litHtml = require("lit-html");

Object.keys(_litHtml).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _litHtml[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _litHtml[key];
    }
  });
});

var _litElement = require("./lit-element.js");

var _base = require("@lit/reactive-element/decorators/base.js");

Object.keys(_base).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _base[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _base[key];
    }
  });
});

var _customElement = require("@lit/reactive-element/decorators/custom-element.js");

Object.keys(_customElement).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _customElement[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _customElement[key];
    }
  });
});

var _property = require("@lit/reactive-element/decorators/property.js");

Object.keys(_property).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _property[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _property[key];
    }
  });
});

var _state = require("@lit/reactive-element/decorators/state.js");

Object.keys(_state).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _state[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _state[key];
    }
  });
});

var _eventOptions = require("@lit/reactive-element/decorators/event-options.js");

Object.keys(_eventOptions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _eventOptions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _eventOptions[key];
    }
  });
});

var _query = require("@lit/reactive-element/decorators/query.js");

Object.keys(_query).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _query[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _query[key];
    }
  });
});

var _queryAll = require("@lit/reactive-element/decorators/query-all.js");

Object.keys(_queryAll).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _queryAll[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _queryAll[key];
    }
  });
});

var _queryAsync = require("@lit/reactive-element/decorators/query-async.js");

Object.keys(_queryAsync).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _queryAsync[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _queryAsync[key];
    }
  });
});

var _queryAssignedNodes = require("@lit/reactive-element/decorators/query-assigned-nodes.js");

Object.keys(_queryAssignedNodes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _queryAssignedNodes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _queryAssignedNodes[key];
    }
  });
});

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'.");
},{"@lit/reactive-element":"../../node_modules/@lit/reactive-element/reactive-element.js","lit-html":"../../node_modules/lit-html/lit-html.js","./lit-element.js":"../../node_modules/lit-element/lit-element.js","@lit/reactive-element/decorators/base.js":"../../node_modules/@lit/reactive-element/decorators/base.js","@lit/reactive-element/decorators/custom-element.js":"../../node_modules/@lit/reactive-element/decorators/custom-element.js","@lit/reactive-element/decorators/property.js":"../../node_modules/@lit/reactive-element/decorators/property.js","@lit/reactive-element/decorators/state.js":"../../node_modules/@lit/reactive-element/decorators/state.js","@lit/reactive-element/decorators/event-options.js":"../../node_modules/@lit/reactive-element/decorators/event-options.js","@lit/reactive-element/decorators/query.js":"../../node_modules/@lit/reactive-element/decorators/query.js","@lit/reactive-element/decorators/query-all.js":"../../node_modules/@lit/reactive-element/decorators/query-all.js","@lit/reactive-element/decorators/query-async.js":"../../node_modules/@lit/reactive-element/decorators/query-async.js","@lit/reactive-element/decorators/query-assigned-nodes.js":"../../node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js"}],"../node_modules/@tauri-apps/api/tauri-3147d768.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._ = r;
exports.a = o;
exports.c = exports.b = void 0;
exports.d = n;
exports.e = c;
exports.i = i;
exports.t = a;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var _t = function t(n, e) {
  return (_t = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (t, n) {
    t.__proto__ = n;
  } || function (t, n) {
    for (var e in n) {
      Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]);
    }
  })(n, e);
};

function n(n, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

  function r() {
    this.constructor = n;
  }

  _t(n, e), n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}

var _e = function e() {
  return (exports.b = _e = Object.assign || function (t) {
    for (var n, e = 1, r = arguments.length; e < r; e++) {
      for (var o in n = arguments[e]) {
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
      }
    }

    return t;
  }).apply(this, arguments);
};

exports.b = _e;

function r(t, n, e, r) {
  return new (e || (e = Promise))(function (o, a) {
    function i(t) {
      try {
        u(r.next(t));
      } catch (t) {
        a(t);
      }
    }

    function c(t) {
      try {
        u(r.throw(t));
      } catch (t) {
        a(t);
      }
    }

    function u(t) {
      var n;
      t.done ? o(t.value) : (n = t.value, n instanceof e ? n : new e(function (t) {
        t(n);
      })).then(i, c);
    }

    u((r = r.apply(t, n || [])).next());
  });
}

function o(t, n) {
  var e,
      r,
      o,
      a,
      i = {
    label: 0,
    sent: function sent() {
      if (1 & o[0]) throw o[1];
      return o[1];
    },
    trys: [],
    ops: []
  };
  return a = {
    next: c(0),
    throw: c(1),
    return: c(2)
  }, "function" == typeof Symbol && (a[Symbol.iterator] = function () {
    return this;
  }), a;

  function c(a) {
    return function (c) {
      return function (a) {
        if (e) throw new TypeError("Generator is already executing.");

        for (; i;) {
          try {
            if (e = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;

            switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
              case 0:
              case 1:
                o = a;
                break;

              case 4:
                return i.label++, {
                  value: a[1],
                  done: !1
                };

              case 5:
                i.label++, r = a[1], a = [0];
                continue;

              case 7:
                a = i.ops.pop(), i.trys.pop();
                continue;

              default:
                if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                  i = 0;
                  continue;
                }

                if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                  i.label = a[1];
                  break;
                }

                if (6 === a[0] && i.label < o[1]) {
                  i.label = o[1], o = a;
                  break;
                }

                if (o && i.label < o[2]) {
                  i.label = o[2], i.ops.push(a);
                  break;
                }

                o[2] && i.ops.pop(), i.trys.pop();
                continue;
            }

            a = n.call(t, i);
          } catch (t) {
            a = [6, t], r = 0;
          } finally {
            e = o = 0;
          }
        }

        if (5 & a[0]) throw a[1];
        return {
          value: a[0] ? a[1] : void 0,
          done: !0
        };
      }([a, c]);
    };
  }
}

function a(t, n) {
  void 0 === n && (n = !1);

  var e = function () {
    var t = new Int8Array(1);
    window.crypto.getRandomValues(t);
    var n = new Uint8Array(Math.max(16, Math.abs(t[0])));
    return window.crypto.getRandomValues(n), n.join("");
  }();

  return Object.defineProperty(window, e, {
    value: function value(r) {
      return n && Reflect.deleteProperty(window, e), null == t ? void 0 : t(r);
    },
    writable: !1,
    configurable: !0
  }), e;
}

function i(t, n) {
  return void 0 === n && (n = {}), r(this, void 0, void 0, function () {
    return o(this, function (r) {
      return [2, new Promise(function (r, o) {
        var i = a(function (t) {
          r(t), Reflect.deleteProperty(window, c);
        }, !0),
            c = a(function (t) {
          o(t), Reflect.deleteProperty(window, i);
        }, !0);
        window.rpc.notify(t, _e({
          __invokeKey: __TAURI_INVOKE_KEY__,
          callback: i,
          error: c
        }, n));
      })];
    });
  });
}

function c(t) {
  return navigator.userAgent.includes("Windows") ? "https://asset.localhost/" + t : "asset://" + t;
}

var u = Object.freeze({
  __proto__: null,
  transformCallback: a,
  invoke: i,
  convertFileSrc: c
});
exports.c = u;
},{}],"../node_modules/@tauri-apps/api/tauri-fe7c6694.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.i = n;

var _tauri3147d = require("./tauri-3147d768.js");

function n(n) {
  return (0, _tauri3147d._)(this, void 0, void 0, function () {
    return (0, _tauri3147d.a)(this, function (i) {
      return [2, (0, _tauri3147d.i)("tauri", n)];
    });
  });
}
},{"./tauri-3147d768.js":"../node_modules/@tauri-apps/api/tauri-3147d768.js"}],"../node_modules/@tauri-apps/api/event-92cbfbb1.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.a = c;
exports.b = r;
exports.e = void 0;
exports.l = o;
exports.o = s;

var _tauri3147d = require("./tauri-3147d768.js");

var _tauriFe7c = require("./tauri-fe7c6694.js");

function r(i, r, u) {
  return (0, _tauri3147d._)(this, void 0, void 0, function () {
    return (0, _tauri3147d.a)(this, function (t) {
      switch (t.label) {
        case 0:
          return [4, (0, _tauriFe7c.i)({
            __tauriModule: "Event",
            message: {
              cmd: "emit",
              event: i,
              windowLabel: r,
              payload: u
            }
          })];

        case 1:
          return t.sent(), [2];
      }
    });
  });
}

function u(i) {
  return (0, _tauri3147d._)(this, void 0, void 0, function () {
    return (0, _tauri3147d.a)(this, function (t) {
      return [2, (0, _tauriFe7c.i)({
        __tauriModule: "Event",
        message: {
          cmd: "unlisten",
          eventId: i
        }
      })];
    });
  });
}

function o(r, o) {
  return (0, _tauri3147d._)(this, void 0, void 0, function () {
    var s = this;
    return (0, _tauri3147d.a)(this, function (c) {
      return [2, (0, _tauriFe7c.i)({
        __tauriModule: "Event",
        message: {
          cmd: "listen",
          event: r,
          handler: (0, _tauri3147d.t)(o)
        }
      }).then(function (i) {
        return function () {
          return (0, _tauri3147d._)(s, void 0, void 0, function () {
            return (0, _tauri3147d.a)(this, function (t) {
              return [2, u(i)];
            });
          });
        };
      })];
    });
  });
}

function s(i, e) {
  return (0, _tauri3147d._)(this, void 0, void 0, function () {
    return (0, _tauri3147d.a)(this, function (t) {
      return [2, o(i, function (t) {
        e(t), u(t.id).catch(function () {});
      })];
    });
  });
}

function c(i, e) {
  return (0, _tauri3147d._)(this, void 0, void 0, function () {
    return (0, _tauri3147d.a)(this, function (t) {
      return [2, r(i, void 0, e)];
    });
  });
}

var a = Object.freeze({
  __proto__: null,
  listen: o,
  once: s,
  emit: c
});
exports.e = a;
},{"./tauri-3147d768.js":"../node_modules/@tauri-apps/api/tauri-3147d768.js","./tauri-fe7c6694.js":"../node_modules/@tauri-apps/api/tauri-fe7c6694.js"}],"../node_modules/@tauri-apps/api/window-526f78f2.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.b = exports.a = exports.W = exports.U = exports.P = exports.L = void 0;
exports.c = p;
exports.f = exports.e = exports.d = void 0;
exports.g = m;
exports.h = _;
exports.i = M;
exports.p = w;
exports.w = void 0;

var _tauri3147d = require("./tauri-3147d768.js");

var _tauriFe7c = require("./tauri-fe7c6694.js");

var _event92cbfbb = require("./event-92cbfbb1.js");

var s,
    d = function d(t, e) {
  this.type = "Logical", this.width = t, this.height = e;
},
    l = function () {
  function t(t, e) {
    this.type = "Physical", this.width = t, this.height = e;
  }

  return t.prototype.toLogical = function (t) {
    return new d(this.width / t, this.height / t);
  }, t;
}(),
    c = function c(t, e) {
  this.type = "Logical", this.x = t, this.y = e;
},
    h = function () {
  function t(t, e) {
    this.type = "Physical", this.x = t, this.y = e;
  }

  return t.prototype.toLogical = function (t) {
    return new c(this.x / t, this.y / t);
  }, t;
}();

exports.f = h;
exports.e = c;
exports.P = l;
exports.L = d;
exports.U = s;

function m() {
  return new v(window.__TAURI__.__currentWindow.label, {
    skip: !0
  });
}

function p() {
  return window.__TAURI__.__windows.map(function (t) {
    return new v(t.label, {
      skip: !0
    });
  });
}

!function (t) {
  t[t.Critical = 1] = "Critical", t[t.Informational = 2] = "Informational";
}(s || (exports.U = s = {}));

var f = ["tauri://created", "tauri://error"],
    y = function () {
  function t(t) {
    this.label = t, this.listeners = Object.create(null);
  }

  return t.prototype.listen = function (t, n) {
    return (0, _tauri3147d._)(this, void 0, void 0, function () {
      var e = this;
      return (0, _tauri3147d.a)(this, function (i) {
        return this._handleTauriEvent(t, n) ? [2, Promise.resolve(function () {
          var i = e.listeners[t];
          i.splice(i.indexOf(n), 1);
        })] : [2, (0, _event92cbfbb.l)(t, n)];
      });
    });
  }, t.prototype.once = function (t, n) {
    return (0, _tauri3147d._)(this, void 0, void 0, function () {
      var e = this;
      return (0, _tauri3147d.a)(this, function (i) {
        return this._handleTauriEvent(t, n) ? [2, Promise.resolve(function () {
          var i = e.listeners[t];
          i.splice(i.indexOf(n), 1);
        })] : [2, (0, _event92cbfbb.o)(t, n)];
      });
    });
  }, t.prototype.emit = function (t, n) {
    return (0, _tauri3147d._)(this, void 0, void 0, function () {
      var e, o;
      return (0, _tauri3147d.a)(this, function (i) {
        if (f.includes(t)) {
          for (e = 0, o = this.listeners[t] || []; e < o.length; e++) {
            (0, o[e])({
              event: t,
              id: -1,
              payload: n
            });
          }

          return [2, Promise.resolve()];
        }

        return [2, (0, _event92cbfbb.b)(t, this.label, n)];
      });
    });
  }, t.prototype._handleTauriEvent = function (t, e) {
    return !!f.includes(t) && (t in this.listeners ? this.listeners[t].push(e) : this.listeners[t] = [e], !0);
  }, t;
}(),
    g = function (n) {
  function r() {
    return null !== n && n.apply(this, arguments) || this;
  }

  return (0, _tauri3147d.d)(r, n), r.prototype.scaleFactor = function () {
    return (0, _tauri3147d._)(this, void 0, void 0, function () {
      return (0, _tauri3147d.a)(this, function (t) {
        return [2, (0, _tauriFe7c.i)({
          __tauriModule: "Window",
          message: {
            cmd: "manage",
            data: {
              label: this.label,
              cmd: {
                type: "scaleFactor"
              }
            }
          }
        })];
      });
    });
  }, r.prototype.innerPosition = function () {
    return (0, _tauri3147d._)(this, void 0, void 0, function () {
      return (0, _tauri3147d.a)(this, function (t) {
        return [2, (0, _tauriFe7c.i)({
          __tauriModule: "Window",
          message: {
            cmd: "manage",
            data: {
              label: this.label,
              cmd: {
                type: "innerPosition"
              }
            }
          }
        })];
      });
    });
  }, r.prototype.outerPosition = function () {
    return (0, _tauri3147d._)(this, void 0, void 0, function () {
      return (0, _tauri3147d.a)(this, function (t) {
        return [2, (0, _tauriFe7c.i)({
          __tauriModule: "Window",
          message: {
            cmd: "manage",
            data: {
              label: this.label,
              cmd: {
                type: "outerPosition"
              }
            }
          }
        })];
      });
    });
  }, r.prototype.innerSize = function () {
    return (0, _tauri3147d._)(this, void 0, void 0, function () {
      return (0, _tauri3147d.a)(this, function (t) {
        return [2, (0, _tauriFe7c.i)({
          __tauriModule: "Window",
          message: {
            cmd: "manage",
            data: {
              label: this.label,
              cmd: {
                type: "innerSize"
              }
            }
          }
        })];
      });
    });
  }, r.prototype.outerSize = function () {
    return (0, _tauri3147d._)(this, void 0, void 0, function () {
      return (0, _tauri3147d.a)(this, function (t) {
        return [2, (0, _tauriFe7c.i)({
          __tauriModule: "Window",
          message: {
            cmd: "manage",
            data: {
              label: this.label,
              cmd: {
                type: "outerSize"
              }
            }
          }
        })];
      });
    });
  }, r.prototype.isFullscreen = function () {
    return (0, _tauri3147d._)(this, void 0, void 0, function () {
      return (0, _tauri3147d.a)(this, function (t) {
        return [2, (0, _tauriFe7c.i)({
          __tauriModule: "Window",
          message: {
            cmd: "manage",
            data: {
              label: this.label,
              cmd: {
                type: "isFullscreen"
              }
            }
          }
        })];
      });
    });
  }, r.prototype.isMaximized = function () {
    return (0, _tauri3147d._)(this, void 0, void 0, function () {
      return (0, _tauri3147d.a)(this, function (t) {
        return [2, (0, _tauriFe7c.i)({
          __tauriModule: "Window",
          message: {
            cmd: "manage",
            data: {
              label: this.label,
              cmd: {
                type: "isMaximized"
              }
            }
          }
        })];
      });
    });
  }, r.prototype.isDecorated = function () {
    return (0, _tauri3147d._)(this, void 0, void 0, function () {
      return (0, _tauri3147d.a)(this, function (t) {
        return [2, (0, _tauriFe7c.i)({
          __tauriModule: "Window",
          message: {
            cmd: "manage",
            data: {
              label: this.label,
              cmd: {
                type: "isDecorated"
              }
            }
          }
        })];
      });
    });
  }, r.prototype.isResizable = function () {
    return (0, _tauri3147d._)(this, void 0, void 0, function () {
      return (0, _tauri3147d.a)(this, function (t) {
        return [2, (0, _tauriFe7c.i)({
          __tauriModule: "Window",
          message: {
            cmd: "manage",
            data: {
              label: this.label,
              cmd: {
                type: "isResizable"
              }
            }
          }
        })];
      });
    });
  }, r.prototype.isVisible = function () {
    return (0, _tauri3147d._)(this, void 0, void 0, function () {
      return (0, _tauri3147d.a)(this, function (t) {
        return [2, (0, _tauriFe7c.i)({
          __tauriModule: "Window",
          message: {
            cmd: "manage",
            data: {
              label: this.label,
              cmd: {
                type: "isVisible"
              }
            }
          }
        })];
      });
    });
  }, r.prototype.center = function () {
    return (0, _tauri3147d._)(this, void 0, void 0, function () {
      return (0, _tauri3147d.a)(this, function (t) {
        return [2, (0, _tauriFe7c.i)({
          __tauriModule: "Window",
          message: {
            cmd: "manage",
            data: {
              label: this.label,
              cmd: {
                type: "center"
              }
            }
          }
        })];
      });
    });
  }, r.prototype.requestUserAttention = function (t) {
    return (0, _tauri3147d._)(this, void 0, void 0, function () {
      var e;
      return (0, _tauri3147d.a)(this, function (i) {
        return e = null, t && (e = t === s.Critical ? {
          type: "Critical"
        } : {
          type: "Informational"
        }), [2, (0, _tauriFe7c.i)({
          __tauriModule: "Window",
          message: {
            cmd: "manage",
            data: {
              label: this.label,
              cmd: {
                type: "requestUserAttention",
                payload: e
              }
            }
          }
        })];
      });
    });
  }, r.prototype.setResizable = function (t) {
    return (0, _tauri3147d._)(this, void 0, void 0, function () {
      return (0, _tauri3147d.a)(this, function (e) {
        return [2, (0, _tauriFe7c.i)({
          __tauriModule: "Window",
          message: {
            cmd: "manage",
            data: {
              label: this.label,
              cmd: {
                type: "setResizable",
                payload: t
              }
            }
          }
        })];
      });
    });
  }, r.prototype.setTitle = function (t) {
    return (0, _tauri3147d._)(this, void 0, void 0, function () {
      return (0, _tauri3147d.a)(this, function (e) {
        return [2, (0, _tauriFe7c.i)({
          __tauriModule: "Window",
          message: {
            cmd: "manage",
            data: {
              label: this.label,
              cmd: {
                type: "setTitle",
                payload: t
              }
            }
          }
        })];
      });
    });
  }, r.prototype.maximize = function () {
    return (0, _tauri3147d._)(this, void 0, void 0, function () {
      return (0, _tauri3147d.a)(this, function (t) {
        return [2, (0, _tauriFe7c.i)({
          __tauriModule: "Window",
          message: {
            cmd: "manage",
            data: {
              label: this.label,
              cmd: {
                type: "maximize"
              }
            }
          }
        })];
      });
    });
  }, r.prototype.unmaximize = function () {
    return (0, _tauri3147d._)(this, void 0, void 0, function () {
      return (0, _tauri3147d.a)(this, function (t) {
        return [2, (0, _tauriFe7c.i)({
          __tauriModule: "Window",
          message: {
            cmd: "manage",
            data: {
              label: this.label,
              cmd: {
                type: "unmaximize"
              }
            }
          }
        })];
      });
    });
  }, r.prototype.toggleMaximize = function () {
    return (0, _tauri3147d._)(this, void 0, void 0, function () {
      return (0, _tauri3147d.a)(this, function (t) {
        return [2, (0, _tauriFe7c.i)({
          __tauriModule: "Window",
          message: {
            cmd: "manage",
            data: {
              label: this.label,
              cmd: {
                type: "toggleMaximize"
              }
            }
          }
        })];
      });
    });
  }, r.prototype.minimize = function () {
    return (0, _tauri3147d._)(this, void 0, void 0, function () {
      return (0, _tauri3147d.a)(this, function (t) {
        return [2, (0, _tauriFe7c.i)({
          __tauriModule: "Window",
          message: {
            cmd: "manage",
            data: {
              label: this.label,
              cmd: {
                type: "minimize"
              }
            }
          }
        })];
      });
    });
  }, r.prototype.unminimize = function () {
    return (0, _tauri3147d._)(this, void 0, void 0, function () {
      return (0, _tauri3147d.a)(this, function (t) {
        return [2, (0, _tauriFe7c.i)({
          __tauriModule: "Window",
          message: {
            cmd: "manage",
            data: {
              label: this.label,
              cmd: {
                type: "unminimize"
              }
            }
          }
        })];
      });
    });
  }, r.prototype.show = function () {
    return (0, _tauri3147d._)(this, void 0, void 0, function () {
      return (0, _tauri3147d.a)(this, function (t) {
        return [2, (0, _tauriFe7c.i)({
          __tauriModule: "Window",
          message: {
            cmd: "manage",
            data: {
              label: this.label,
              cmd: {
                type: "show"
              }
            }
          }
        })];
      });
    });
  }, r.prototype.hide = function () {
    return (0, _tauri3147d._)(this, void 0, void 0, function () {
      return (0, _tauri3147d.a)(this, function (t) {
        return [2, (0, _tauriFe7c.i)({
          __tauriModule: "Window",
          message: {
            cmd: "manage",
            data: {
              label: this.label,
              cmd: {
                type: "hide"
              }
            }
          }
        })];
      });
    });
  }, r.prototype.close = function () {
    return (0, _tauri3147d._)(this, void 0, void 0, function () {
      return (0, _tauri3147d.a)(this, function (t) {
        return [2, (0, _tauriFe7c.i)({
          __tauriModule: "Window",
          message: {
            cmd: "manage",
            data: {
              label: this.label,
              cmd: {
                type: "close"
              }
            }
          }
        })];
      });
    });
  }, r.prototype.setDecorations = function (t) {
    return (0, _tauri3147d._)(this, void 0, void 0, function () {
      return (0, _tauri3147d.a)(this, function (e) {
        return [2, (0, _tauriFe7c.i)({
          __tauriModule: "Window",
          message: {
            cmd: "manage",
            data: {
              label: this.label,
              cmd: {
                type: "setDecorations",
                payload: t
              }
            }
          }
        })];
      });
    });
  }, r.prototype.setAlwaysOnTop = function (t) {
    return (0, _tauri3147d._)(this, void 0, void 0, function () {
      return (0, _tauri3147d.a)(this, function (e) {
        return [2, (0, _tauriFe7c.i)({
          __tauriModule: "Window",
          message: {
            cmd: "manage",
            data: {
              label: this.label,
              cmd: {
                type: "setAlwaysOnTop",
                payload: t
              }
            }
          }
        })];
      });
    });
  }, r.prototype.setSize = function (t) {
    return (0, _tauri3147d._)(this, void 0, void 0, function () {
      return (0, _tauri3147d.a)(this, function (e) {
        if (!t || "Logical" !== t.type && "Physical" !== t.type) throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");
        return [2, (0, _tauriFe7c.i)({
          __tauriModule: "Window",
          message: {
            cmd: "manage",
            data: {
              label: this.label,
              cmd: {
                type: "setSize",
                payload: {
                  type: t.type,
                  data: {
                    width: t.width,
                    height: t.height
                  }
                }
              }
            }
          }
        })];
      });
    });
  }, r.prototype.setMinSize = function (t) {
    return (0, _tauri3147d._)(this, void 0, void 0, function () {
      return (0, _tauri3147d.a)(this, function (e) {
        if (t && "Logical" !== t.type && "Physical" !== t.type) throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");
        return [2, (0, _tauriFe7c.i)({
          __tauriModule: "Window",
          message: {
            cmd: "manage",
            data: {
              label: this.label,
              cmd: {
                type: "setMinSize",
                payload: t ? {
                  type: t.type,
                  data: {
                    width: t.width,
                    height: t.height
                  }
                } : null
              }
            }
          }
        })];
      });
    });
  }, r.prototype.setMaxSize = function (t) {
    return (0, _tauri3147d._)(this, void 0, void 0, function () {
      return (0, _tauri3147d.a)(this, function (e) {
        if (t && "Logical" !== t.type && "Physical" !== t.type) throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");
        return [2, (0, _tauriFe7c.i)({
          __tauriModule: "Window",
          message: {
            cmd: "manage",
            data: {
              label: this.label,
              cmd: {
                type: "setMaxSize",
                payload: t ? {
                  type: t.type,
                  data: {
                    width: t.width,
                    height: t.height
                  }
                } : null
              }
            }
          }
        })];
      });
    });
  }, r.prototype.setPosition = function (t) {
    return (0, _tauri3147d._)(this, void 0, void 0, function () {
      return (0, _tauri3147d.a)(this, function (e) {
        if (!t || "Logical" !== t.type && "Physical" !== t.type) throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");
        return [2, (0, _tauriFe7c.i)({
          __tauriModule: "Window",
          message: {
            cmd: "manage",
            data: {
              label: this.label,
              cmd: {
                type: "setPosition",
                payload: {
                  type: t.type,
                  data: {
                    x: t.x,
                    y: t.y
                  }
                }
              }
            }
          }
        })];
      });
    });
  }, r.prototype.setFullscreen = function (t) {
    return (0, _tauri3147d._)(this, void 0, void 0, function () {
      return (0, _tauri3147d.a)(this, function (e) {
        return [2, (0, _tauriFe7c.i)({
          __tauriModule: "Window",
          message: {
            cmd: "manage",
            data: {
              label: this.label,
              cmd: {
                type: "setFullscreen",
                payload: t
              }
            }
          }
        })];
      });
    });
  }, r.prototype.setFocus = function () {
    return (0, _tauri3147d._)(this, void 0, void 0, function () {
      return (0, _tauri3147d.a)(this, function (t) {
        return [2, (0, _tauriFe7c.i)({
          __tauriModule: "Window",
          message: {
            cmd: "manage",
            data: {
              label: this.label,
              cmd: {
                type: "setFocus"
              }
            }
          }
        })];
      });
    });
  }, r.prototype.setIcon = function (t) {
    return (0, _tauri3147d._)(this, void 0, void 0, function () {
      return (0, _tauri3147d.a)(this, function (e) {
        return [2, (0, _tauriFe7c.i)({
          __tauriModule: "Window",
          message: {
            cmd: "manage",
            data: {
              label: this.label,
              cmd: {
                type: "setIcon",
                payload: {
                  icon: t
                }
              }
            }
          }
        })];
      });
    });
  }, r.prototype.setSkipTaskbar = function (t) {
    return (0, _tauri3147d._)(this, void 0, void 0, function () {
      return (0, _tauri3147d.a)(this, function (e) {
        return [2, (0, _tauriFe7c.i)({
          __tauriModule: "Window",
          message: {
            cmd: "manage",
            data: {
              label: this.label,
              cmd: {
                type: "setSkipTaskbar",
                payload: t
              }
            }
          }
        })];
      });
    });
  }, r.prototype.startDragging = function () {
    return (0, _tauri3147d._)(this, void 0, void 0, function () {
      return (0, _tauri3147d.a)(this, function (t) {
        return [2, (0, _tauriFe7c.i)({
          __tauriModule: "Window",
          message: {
            cmd: "manage",
            data: {
              label: this.label,
              cmd: {
                type: "startDragging"
              }
            }
          }
        })];
      });
    });
  }, r;
}(y),
    v = function (r) {
  function a(t, a) {
    void 0 === a && (a = {});
    var u = r.call(this, t) || this;
    return (null == a ? void 0 : a.skip) || (0, _tauriFe7c.i)({
      __tauriModule: "Window",
      message: {
        cmd: "createWebview",
        data: {
          options: (0, _tauri3147d.b)({
            label: t
          }, a)
        }
      }
    }).then(function () {
      return (0, _tauri3147d._)(u, void 0, void 0, function () {
        return (0, _tauri3147d.a)(this, function (t) {
          return [2, this.emit("tauri://created")];
        });
      });
    }).catch(function (t) {
      return (0, _tauri3147d._)(u, void 0, void 0, function () {
        return (0, _tauri3147d.a)(this, function (e) {
          return [2, this.emit("tauri://error", t)];
        });
      });
    }), u;
  }

  return (0, _tauri3147d.d)(a, r), a.getByLabel = function (t) {
    return p().some(function (e) {
      return e.label === t;
    }) ? new a(t, {
      skip: !0
    }) : null;
  }, a;
}(g),
    b = new v(null, {
  skip: !0
});

exports.d = b;
exports.W = v;
exports.b = g;
exports.a = y;

function _() {
  return (0, _tauri3147d._)(this, void 0, void 0, function () {
    return (0, _tauri3147d.a)(this, function (t) {
      return [2, (0, _tauriFe7c.i)({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            cmd: {
              type: "currentMonitor"
            }
          }
        }
      })];
    });
  });
}

function w() {
  return (0, _tauri3147d._)(this, void 0, void 0, function () {
    return (0, _tauri3147d.a)(this, function (t) {
      return [2, (0, _tauriFe7c.i)({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            cmd: {
              type: "primaryMonitor"
            }
          }
        }
      })];
    });
  });
}

function M() {
  return (0, _tauri3147d._)(this, void 0, void 0, function () {
    return (0, _tauri3147d.a)(this, function (t) {
      return [2, (0, _tauriFe7c.i)({
        __tauriModule: "Window",
        message: {
          cmd: "manage",
          data: {
            cmd: {
              type: "availableMonitors"
            }
          }
        }
      })];
    });
  });
}

var W = Object.freeze({
  __proto__: null,
  WebviewWindow: v,
  WebviewWindowHandle: y,
  WindowManager: g,
  getCurrent: m,
  getAll: p,
  appWindow: b,
  LogicalSize: d,
  PhysicalSize: l,
  LogicalPosition: c,
  PhysicalPosition: h,

  get UserAttentionType() {
    return s;
  },

  currentMonitor: _,
  primaryMonitor: w,
  availableMonitors: M
});
exports.w = W;
},{"./tauri-3147d768.js":"../node_modules/@tauri-apps/api/tauri-3147d768.js","./tauri-fe7c6694.js":"../node_modules/@tauri-apps/api/tauri-fe7c6694.js","./event-92cbfbb1.js":"../node_modules/@tauri-apps/api/event-92cbfbb1.js"}],"../node_modules/@tauri-apps/api/window.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "LogicalPosition", {
  enumerable: true,
  get: function () {
    return _window526f78f.e;
  }
});
Object.defineProperty(exports, "LogicalSize", {
  enumerable: true,
  get: function () {
    return _window526f78f.L;
  }
});
Object.defineProperty(exports, "PhysicalPosition", {
  enumerable: true,
  get: function () {
    return _window526f78f.f;
  }
});
Object.defineProperty(exports, "PhysicalSize", {
  enumerable: true,
  get: function () {
    return _window526f78f.P;
  }
});
Object.defineProperty(exports, "UserAttentionType", {
  enumerable: true,
  get: function () {
    return _window526f78f.U;
  }
});
Object.defineProperty(exports, "WebviewWindow", {
  enumerable: true,
  get: function () {
    return _window526f78f.W;
  }
});
Object.defineProperty(exports, "WebviewWindowHandle", {
  enumerable: true,
  get: function () {
    return _window526f78f.a;
  }
});
Object.defineProperty(exports, "WindowManager", {
  enumerable: true,
  get: function () {
    return _window526f78f.b;
  }
});
Object.defineProperty(exports, "appWindow", {
  enumerable: true,
  get: function () {
    return _window526f78f.d;
  }
});
Object.defineProperty(exports, "availableMonitors", {
  enumerable: true,
  get: function () {
    return _window526f78f.i;
  }
});
Object.defineProperty(exports, "currentMonitor", {
  enumerable: true,
  get: function () {
    return _window526f78f.h;
  }
});
Object.defineProperty(exports, "getAll", {
  enumerable: true,
  get: function () {
    return _window526f78f.c;
  }
});
Object.defineProperty(exports, "getCurrent", {
  enumerable: true,
  get: function () {
    return _window526f78f.g;
  }
});
Object.defineProperty(exports, "primaryMonitor", {
  enumerable: true,
  get: function () {
    return _window526f78f.p;
  }
});

require("./tauri-3147d768.js");

require("./tauri-fe7c6694.js");

require("./event-92cbfbb1.js");

var _window526f78f = require("./window-526f78f2.js");
},{"./tauri-3147d768.js":"../node_modules/@tauri-apps/api/tauri-3147d768.js","./tauri-fe7c6694.js":"../node_modules/@tauri-apps/api/tauri-fe7c6694.js","./event-92cbfbb1.js":"../node_modules/@tauri-apps/api/event-92cbfbb1.js","./window-526f78f2.js":"../node_modules/@tauri-apps/api/window-526f78f2.js"}],"App.js":[function(require,module,exports) {
"use strict";

var _litElement = require("lit-element");

var _window = require("@tauri-apps/api/window");

var _templateObject, _templateObject2;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var App = /*#__PURE__*/function (_LitElement) {
  _inherits(App, _LitElement);

  var _super = _createSuper(App);

  function App() {
    _classCallCheck(this, App);

    return _super.apply(this, arguments);
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var webview = new _window.WebviewWindow('theUniqueLabel', {
        url: "https://github.com/tauri-apps/tauri"
      });
      console.log(webview);
      return (0, _litElement.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      test\n    "])));
    }
  }], [{
    key: "styles",
    get: function get() {
      return (0, _litElement.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      a {\n        color: #212121;\n        font-weight: 500;\n      }\n\n      #sha {\n        position: fixed;\n        right: 1%;\n        bottom: 1%;\n        font-size: 0.5rem;\n        color: #696969;\n      }\n    "])));
    }
  }]);

  return App;
}(_litElement.LitElement);

customElements.get("app-root") || customElements.define("app-root", App);
},{"lit-element":"../../node_modules/lit-element/index.js","@tauri-apps/api/window":"../node_modules/@tauri-apps/api/window.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55908" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","App.js"], null)
//# sourceMappingURL=/App.d36a57b6.js.map