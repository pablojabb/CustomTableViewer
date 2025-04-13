(function(define){var __define; typeof define === "function" && (__define=define,define=null);
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"adlAh":[function(require,module,exports) {
var d = globalThis.process?.argv || [];
var y = ()=>globalThis.process?.env || {};
var H = new Set(d), _ = (e)=>H.has(e), G = d.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, o])=>(e[t] = o, e), {});
var Z = _("--dry-run"), p = ()=>_("--verbose") || y().VERBOSE === "true", q = p();
var u = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var x = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), v = (...e)=>u("\uD83D\uDD35 INFO", ...e), m = (...e)=>u("\uD83D\uDFE0 WARN", ...e), S = 0, c = (...e)=>p() && u(`\u{1F7E1} ${S++}`, ...e);
var n = {
    "isContentScript": true,
    "isBackground": false,
    "isReact": false,
    "runtimes": [
        "script-runtime"
    ],
    "host": "localhost",
    "port": 1815,
    "entryFilePath": "C:\\Users\\Lenovo\\Desktop\\Maintaining Projects\\tableExtension\\custom-table-viewer\\src\\content.ts",
    "bundleId": "b7e7b9da480c00a3",
    "envHash": "e792fbbdaa78ee84",
    "verbose": "true",
    "secure": false,
    "serverPort": 1012
};
module.bundle.HMR_BUNDLE_ID = n.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: n.verbose
    }
};
var D = module.bundle.Module;
function I(e) {
    D.call(this, e), this.hot = {
        data: module.bundle.hotData[e],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(t) {
            this._acceptCallbacks.push(t || function() {});
        },
        dispose: function(t) {
            this._disposeCallbacks.push(t);
        }
    }, module.bundle.hotData[e] = void 0;
}
module.bundle.Module = I;
module.bundle.hotData = {};
var l = globalThis.browser || globalThis.chrome || null;
function b() {
    return !n.host || n.host === "0.0.0.0" ? "localhost" : n.host;
}
function C() {
    return n.port || location.port;
}
var E = "__plasmo_runtime_script_";
function L(e, t) {
    let { modules: o } = e;
    return o ? !!o[t] : !1;
}
function O(e = C()) {
    let t = b();
    return `${n.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function B(e) {
    typeof e.message == "string" && x("[plasmo/parcel-runtime]: " + e.message);
}
function P(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(O());
    return t.addEventListener("message", async function(o) {
        let r = JSON.parse(o.data);
        if (r.type === "update" && await e(r.assets), r.type === "error") for (let a of r.diagnostics.ansi){
            let w = a.codeframe || a.stack;
            m("[plasmo/parcel-runtime]: " + a.message + `
` + w + `

` + a.hints.join(`
`));
        }
    }), t.addEventListener("error", B), t.addEventListener("open", ()=>{
        v(`[plasmo/parcel-runtime]: Connected to HMR server for ${n.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        m(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${n.entryFilePath}`);
    }), t;
}
var s = "__plasmo-loading__";
function $() {
    let e = globalThis.window?.trustedTypes;
    if (typeof e > "u") return;
    let t = document.querySelector('meta[name="trusted-types"]')?.content?.split(" "), o = t ? t[t?.length - 1].replace(/;/g, "") : void 0;
    return typeof e < "u" ? e.createPolicy(o || `trusted-html-${s}`, {
        createHTML: (a)=>a
    }) : void 0;
}
var T = $();
function g() {
    return document.getElementById(s);
}
function f() {
    return !g();
}
function F() {
    let e = document.createElement("div");
    e.id = s;
    let t = `
  <style>
    #${s} {
      background: #f3f3f3;
      color: #333;
      border: 1px solid #333;
      box-shadow: #333 4.7px 4.7px;
    }

    #${s}:hover {
      background: #e3e3e3;
      color: #444;
    }

    @keyframes plasmo-loading-animate-svg-fill {
      0% {
        fill: transparent;
      }
    
      100% {
        fill: #333;
      }
    }

    #${s} .svg-elem-1 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both infinite;
    }

    #${s} .svg-elem-2 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both infinite;
    }
    
    #${s} .svg-elem-3 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both infinite;
    }

    #${s} .hidden {
      display: none;
    }

  </style>
  
  <svg height="32" width="32" viewBox="0 0 264 354" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M139.221 282.243C154.252 282.243 166.903 294.849 161.338 308.812C159.489 313.454 157.15 317.913 154.347 322.109C146.464 333.909 135.26 343.107 122.151 348.538C109.043 353.969 94.6182 355.39 80.7022 352.621C66.7861 349.852 54.0034 343.018 43.9705 332.983C33.9375 322.947 27.105 310.162 24.3369 296.242C21.5689 282.323 22.9895 267.895 28.4193 254.783C33.8491 241.671 43.0441 230.464 54.8416 222.579C59.0353 219.777 63.4908 217.438 68.1295 215.588C82.0915 210.021 94.6978 222.671 94.6978 237.703L94.6978 255.027C94.6978 270.058 106.883 282.243 121.914 282.243H139.221Z" fill="#333" class="svg-elem-1" ></path>
    <path d="M192.261 142.028C192.261 126.996 204.867 114.346 218.829 119.913C223.468 121.763 227.923 124.102 232.117 126.904C243.915 134.789 253.11 145.996 258.539 159.108C263.969 172.22 265.39 186.648 262.622 200.567C259.854 214.487 253.021 227.272 242.988 237.308C232.955 247.343 220.173 254.177 206.256 256.946C192.34 259.715 177.916 258.294 164.807 252.863C151.699 247.432 140.495 238.234 132.612 226.434C129.808 222.238 127.47 217.779 125.62 213.137C120.056 199.174 132.707 186.568 147.738 186.568L165.044 186.568C180.076 186.568 192.261 174.383 192.261 159.352L192.261 142.028Z" fill="#333" class="svg-elem-2" ></path>
    <path d="M95.6522 164.135C95.6522 179.167 83.2279 191.725 68.8013 187.505C59.5145 184.788 50.6432 180.663 42.5106 175.227C26.7806 164.714 14.5206 149.772 7.28089 132.289C0.041183 114.807 -1.85305 95.5697 1.83772 77.0104C5.52849 58.4511 14.6385 41.4033 28.0157 28.0228C41.393 14.6423 58.4366 5.53006 76.9914 1.83839C95.5461 -1.85329 114.779 0.0414162 132.257 7.2829C149.735 14.5244 164.674 26.7874 175.184 42.5212C180.62 50.6576 184.744 59.5332 187.46 68.8245C191.678 83.2519 179.119 95.6759 164.088 95.6759L122.869 95.6759C107.837 95.6759 95.6522 107.861 95.6522 122.892L95.6522 164.135Z" fill="#333" class="svg-elem-3"></path>
  </svg>
  <span class="hidden">Context Invalidated, Press to Reload</span>
  `;
    return e.innerHTML = T ? T.createHTML(t) : t, e.style.pointerEvents = "none", e.style.position = "fixed", e.style.bottom = "14.7px", e.style.right = "14.7px", e.style.fontFamily = "sans-serif", e.style.display = "flex", e.style.justifyContent = "center", e.style.alignItems = "center", e.style.padding = "14.7px", e.style.gap = "14.7px", e.style.borderRadius = "4.7px", e.style.zIndex = "2147483647", e.style.opacity = "0", e.style.transition = "all 0.47s ease-in-out", e;
}
function N(e) {
    return new Promise((t)=>{
        document.documentElement ? (f() && (document.documentElement.appendChild(e), t()), t()) : globalThis.addEventListener("DOMContentLoaded", ()=>{
            f() && document.documentElement.appendChild(e), t();
        });
    });
}
var k = ()=>{
    let e;
    if (f()) {
        let t = F();
        e = N(t);
    }
    return {
        show: async ({ reloadButton: t = !1 } = {})=>{
            await e;
            let o = g();
            o.style.opacity = "1", t && (o.onclick = (r)=>{
                r.stopPropagation(), globalThis.location.reload();
            }, o.querySelector("span").classList.remove("hidden"), o.style.cursor = "pointer", o.style.pointerEvents = "all");
        },
        hide: async ()=>{
            await e;
            let t = g();
            t.style.opacity = "0";
        }
    };
};
var W = `${E}${module.id}__`, i, A = !1, M = k();
async function h() {
    c("Script Runtime - reloading"), A ? globalThis.location?.reload?.() : M.show({
        reloadButton: !0
    });
}
function R() {
    i?.disconnect(), i = l?.runtime.connect({
        name: W
    }), i.onDisconnect.addListener(()=>{
        h();
    }), i.onMessage.addListener((e)=>{
        e.__plasmo_cs_reload__ && h(), e.__plasmo_cs_active_tab__ && (A = !0);
    });
}
function j() {
    if (l?.runtime) try {
        R(), setInterval(R, 24e3);
    } catch  {
        return;
    }
}
j();
P(async (e)=>{
    c("Script runtime - on updated assets"), e.filter((o)=>o.envHash === n.envHash).some((o)=>L(module.bundle, o.id)) && (M.show(), l?.runtime ? i.postMessage({
        __plasmo_cs_changed__: !0
    }) : setTimeout(()=>{
        h();
    }, 4700));
});

},{}],"k5Ie5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>config);
var _storage = require("@plasmohq/storage");
const config = {
    matches: [
        "https://apps.evsu.edu.ph/*"
    ],
    all_frames: true
};
const extractTableData = async ()=>{
    const storage = new (0, _storage.Storage)();
    const tables = document.querySelectorAll("table");
    if (tables.length === 0) {
        console.warn(" No tables found on this page.");
        return;
    }
    const table = tables.length > 1 ? tables[1] : tables[0];
    const headers = Array.from(table.querySelectorAll("th")).map((th)=>th.innerText.trim());
    const rows = Array.from(table.querySelectorAll("tr")).slice(1).map((tr)=>{
        const cells = Array.from(tr.querySelectorAll("td")).map((td)=>td.innerText.trim());
        return Object.fromEntries(headers.map((header, i)=>[
                header,
                cells[i] || ""
            ]));
    });
    console.log("[Content Script] Extracted Table Data:", rows);
    await storage.set("tableData", rows);
};
chrome.runtime.onMessage.addListener((message, sender, sendResponse)=>{
    if (message.action === "extract_table") {
        extractTableData().then(()=>{
            sendResponse({
                status: "Table extracted"
            });
        });
        return true;
    }
});

},{"@plasmohq/storage":"94XPb","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"94XPb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseStorage", ()=>o);
parcelHelpers.export(exports, "Storage", ()=>g);
var _pify = require("pify");
var _pifyDefault = parcelHelpers.interopDefault(_pify);
var l = ()=>{
    try {
        let e = globalThis.navigator?.userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (e[1] === "Chrome") return parseInt(e[2]) < 100 || globalThis.chrome.runtime?.getManifest()?.manifest_version === 2;
    } catch  {
        return !1;
    }
    return !1;
};
var o = class {
    #r;
    #t;
    get primaryClient() {
        return this.#t;
    }
    #e;
    get secondaryClient() {
        return this.#e;
    }
    #a;
    get area() {
        return this.#a;
    }
    get hasWebApi() {
        try {
            return typeof window < "u" && !!window.localStorage;
        } catch (e) {
            return console.error(e), !1;
        }
    }
    #s = new Map;
    #i;
    get copiedKeySet() {
        return this.#i;
    }
    isCopied = (e)=>this.hasWebApi && (this.allCopied || this.copiedKeySet.has(e));
    #n = !1;
    get allCopied() {
        return this.#n;
    }
    getExtStorageApi = ()=>globalThis.browser?.storage || globalThis.chrome?.storage;
    get hasExtensionApi() {
        try {
            return !!this.getExtStorageApi();
        } catch (e) {
            return console.error(e), !1;
        }
    }
    isWatchSupported = ()=>this.hasExtensionApi;
    keyNamespace = "";
    isValidKey = (e)=>e.startsWith(this.keyNamespace);
    getNamespacedKey = (e)=>`${this.keyNamespace}${e}`;
    getUnnamespacedKey = (e)=>e.slice(this.keyNamespace.length);
    serde = {
        serializer: JSON.stringify,
        deserializer: JSON.parse
    };
    constructor({ area: e = "sync", allCopied: t = !1, copiedKeyList: s = [], serde: r = {} } = {}){
        this.setCopiedKeySet(s), this.#a = e, this.#n = t, this.serde = {
            ...this.serde,
            ...r
        };
        try {
            this.hasWebApi && (t || s.length > 0) && (this.#e = window.localStorage);
        } catch  {}
        try {
            this.hasExtensionApi && (this.#r = this.getExtStorageApi(), l() ? this.#t = (0, _pifyDefault.default)(this.#r[this.area], {
                exclude: [
                    "getBytesInUse"
                ],
                errorFirst: !1
            }) : this.#t = this.#r[this.area]);
        } catch  {}
    }
    setCopiedKeySet(e) {
        this.#i = new Set(e);
    }
    rawGetAll = ()=>this.#t?.get();
    getAll = async ()=>{
        let e = await this.rawGetAll();
        return Object.entries(e).filter(([t])=>this.isValidKey(t)).reduce((t, [s, r])=>(t[this.getUnnamespacedKey(s)] = r, t), {});
    };
    copy = async (e)=>{
        let t = e === void 0;
        if (!t && !this.copiedKeySet.has(e) || !this.allCopied || !this.hasExtensionApi) return !1;
        let s = this.allCopied ? await this.rawGetAll() : await this.#t.get((t ? [
            ...this.copiedKeySet
        ] : [
            e
        ]).map(this.getNamespacedKey));
        if (!s) return !1;
        let r = !1;
        for(let a in s){
            let i = s[a], n = this.#e?.getItem(a);
            this.#e?.setItem(a, i), r ||= i !== n;
        }
        return r;
    };
    rawGet = async (e)=>(await this.rawGetMany([
            e
        ]))[e];
    rawGetMany = async (e)=>this.hasExtensionApi ? await this.#t.get(e) : e.filter(this.isCopied).reduce((t, s)=>(t[s] = this.#e?.getItem(s), t), {});
    rawSet = async (e, t)=>await this.rawSetMany({
            [e]: t
        });
    rawSetMany = async (e)=>(this.#e && Object.entries(e).filter(([t])=>this.isCopied(t)).forEach(([t, s])=>this.#e.setItem(t, s)), this.hasExtensionApi && await this.#t.set(e), null);
    clear = async (e = !1)=>{
        e && this.#e?.clear(), await this.#t.clear();
    };
    rawRemove = async (e)=>{
        await this.rawRemoveMany([
            e
        ]);
    };
    rawRemoveMany = async (e)=>{
        this.#e && e.filter(this.isCopied).forEach((t)=>this.#e.removeItem(t)), this.hasExtensionApi && await this.#t.remove(e);
    };
    removeAll = async ()=>{
        let e = await this.getAll(), t = Object.keys(e);
        await this.removeMany(t);
    };
    watch = (e)=>{
        let t = this.isWatchSupported();
        return t && this.#o(e), t;
    };
    #o = (e)=>{
        for(let t in e){
            let s = this.getNamespacedKey(t), r = this.#s.get(s)?.callbackSet || new Set;
            if (r.add(e[t]), r.size > 1) continue;
            let a = (i, n)=>{
                if (n !== this.area || !i[s]) return;
                let h = this.#s.get(s);
                if (!h) throw new Error(`Storage comms does not exist for nsKey: ${s}`);
                Promise.all([
                    this.parseValue(i[s].newValue),
                    this.parseValue(i[s].oldValue)
                ]).then(([y, d])=>{
                    for (let p of h.callbackSet)p({
                        newValue: y,
                        oldValue: d
                    }, n);
                });
            };
            this.#r.onChanged.addListener(a), this.#s.set(s, {
                callbackSet: r,
                listener: a
            });
        }
    };
    unwatch = (e)=>{
        let t = this.isWatchSupported();
        return t && this.#c(e), t;
    };
    #c(e) {
        for(let t in e){
            let s = this.getNamespacedKey(t), r = e[t], a = this.#s.get(s);
            a && (a.callbackSet.delete(r), a.callbackSet.size === 0 && (this.#s.delete(s), this.#r.onChanged.removeListener(a.listener)));
        }
    }
    unwatchAll = ()=>this.#h();
    #h() {
        this.#s.forEach(({ listener: e })=>this.#r.onChanged.removeListener(e)), this.#s.clear();
    }
    async getItem(e) {
        return this.get(e);
    }
    async getItems(e) {
        return await this.getMany(e);
    }
    async setItem(e, t) {
        await this.set(e, t);
    }
    async setItems(e) {
        await await this.setMany(e);
    }
    async removeItem(e) {
        return this.remove(e);
    }
    async removeItems(e) {
        return await this.removeMany(e);
    }
}, g = class extends o {
    get = async (e)=>{
        let t = this.getNamespacedKey(e), s = await this.rawGet(t);
        return this.parseValue(s);
    };
    getMany = async (e)=>{
        let t = e.map(this.getNamespacedKey), s = await this.rawGetMany(t), r = await Promise.all(Object.values(s).map(this.parseValue));
        return Object.keys(s).reduce((a, i, n)=>(a[this.getUnnamespacedKey(i)] = r[n], a), {});
    };
    set = async (e, t)=>{
        let s = this.getNamespacedKey(e), r = this.serde.serializer(t);
        return this.rawSet(s, r);
    };
    setMany = async (e)=>{
        let t = Object.entries(e).reduce((s, [r, a])=>(s[this.getNamespacedKey(r)] = this.serde.serializer(a), s), {});
        return await this.rawSetMany(t);
    };
    remove = async (e)=>{
        let t = this.getNamespacedKey(e);
        return this.rawRemove(t);
    };
    removeMany = async (e)=>{
        let t = e.map(this.getNamespacedKey);
        return await this.rawRemoveMany(t);
    };
    setNamespace = (e)=>{
        this.keyNamespace = e;
    };
    parseValue = async (e)=>{
        try {
            if (e !== void 0) return this.serde.deserializer(e);
        } catch (t) {
            console.error(t);
        }
    };
};

},{"pify":"lXTmq","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"lXTmq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>pify);
const processFunction = (function_, options, proxy, unwrapped)=>function(...arguments_) {
        const P = options.promiseModule;
        return new P((resolve, reject)=>{
            if (options.multiArgs) arguments_.push((...result)=>{
                if (options.errorFirst) {
                    if (result[0]) reject(result);
                    else {
                        result.shift();
                        resolve(result);
                    }
                } else resolve(result);
            });
            else if (options.errorFirst) arguments_.push((error, result)=>{
                if (error) reject(error);
                else resolve(result);
            });
            else arguments_.push(resolve);
            const self = this === proxy ? unwrapped : this;
            Reflect.apply(function_, self, arguments_);
        });
    };
const filterCache = new WeakMap();
function pify(input, options) {
    options = {
        exclude: [
            /.+(?:Sync|Stream)$/
        ],
        errorFirst: true,
        promiseModule: Promise,
        ...options
    };
    const objectType = typeof input;
    if (!(input !== null && (objectType === "object" || objectType === "function"))) throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${input === null ? "null" : objectType}\``);
    const filter = (target, key)=>{
        let cached = filterCache.get(target);
        if (!cached) {
            cached = {};
            filterCache.set(target, cached);
        }
        if (key in cached) return cached[key];
        const match = (pattern)=>typeof pattern === "string" || typeof key === "symbol" ? key === pattern : pattern.test(key);
        const descriptor = Reflect.getOwnPropertyDescriptor(target, key);
        const writableOrConfigurableOwn = descriptor === undefined || descriptor.writable || descriptor.configurable;
        const included = options.include ? options.include.some((element)=>match(element)) : !options.exclude.some((element)=>match(element));
        const shouldFilter = included && writableOrConfigurableOwn;
        cached[key] = shouldFilter;
        return shouldFilter;
    };
    const cache = new WeakMap();
    const proxy = new Proxy(input, {
        apply (target, thisArg, args) {
            const cached = cache.get(target);
            if (cached) return Reflect.apply(cached, thisArg, args);
            const pified = options.excludeMain ? target : processFunction(target, options, proxy, target);
            cache.set(target, pified);
            return Reflect.apply(pified, thisArg, args);
        },
        get (target, key) {
            const property = target[key];
            // eslint-disable-next-line no-use-extend-native/no-use-extend-native
            if (!filter(target, key) || property === Function.prototype[key]) return property;
            const cached = cache.get(property);
            if (cached) return cached;
            if (typeof property === "function") {
                const pified = processFunction(property, options, proxy, target);
                cache.set(property, pified);
                return pified;
            }
            return property;
        }
    });
    return proxy;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"6dfwG":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["adlAh","k5Ie5"], "k5Ie5", "parcelRequirea110")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUUsQ0FBQztRQUFFLElBQUksSUFBSSxLQUFLLEVBQUU7WUFBQyxJQUFJLElBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBQyxJQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRO1lBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsR0FBRSxJQUFHLE1BQUksTUFBSTtRQUFDO1FBQUMsT0FBTztJQUFDLEVBQUU7SUFBQSxTQUFPLE9BQU0sSUFBRyxBQUFDLENBQUEsTUFBTSxJQUFJLENBQUMsV0FBVztZQUFDO1NBQUUsQ0FBQSxDQUFFLENBQUMsRUFBRSxDQUFDO0lBQUEsYUFBVyxPQUFNLElBQUcsSUFBSSxDQUFDLGtCQUFnQixNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUcsRUFBRSxPQUFPLElBQUksQ0FBQyxVQUFVLE9BQU8sQ0FBQyxHQUFFLElBQUssQ0FBQSxDQUFDLENBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLElBQUcsQ0FBQSxHQUFHLENBQUMsR0FBRztJQUFBLFNBQU8sT0FBTSxHQUFFLElBQUksTUFBTSxJQUFJLENBQUMsV0FBVztZQUFDLENBQUMsRUFBRSxFQUFDO1FBQUMsR0FBRztJQUFBLGFBQVcsT0FBTSxJQUFJLENBQUEsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFFLE9BQU8sUUFBUSxHQUFHLE9BQU8sQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLFFBQVEsQ0FBQyxDQUFDLEdBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUUsS0FBSSxJQUFJLENBQUMsbUJBQWlCLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBRyxJQUFHLEVBQUc7SUFBQSxRQUFNLE9BQU0sSUFBRSxDQUFDLENBQUM7UUFBSSxLQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFRLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQU8s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UUFDcEMsWUFBWTtRQUNaLEtBQUs7SUFDUDtBQUNGIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvLnBucG0vQHBsYXNtb2hxK3BhcmNlbC1ydW50aW1lQDAuMjUuMi9ub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS0xODQ2N2E3NmM5MmM4ZTIzLmpzIiwic3JjL2NvbnRlbnQudHMiLCJub2RlX21vZHVsZXMvLnBucG0vQHBsYXNtb2hxK3N0b3JhZ2VAMS4xNS4wX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHBsYXNtb2hxL3N0b3JhZ2UvZGlzdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9waWZ5QDYuMS4wL25vZGVfbW9kdWxlcy9waWZ5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrdHJhbnNmb3JtZXItanNAMi45LjNfQHBhcmNlbCtjb3JlQDIuOS4zL25vZGVfbW9kdWxlcy9AcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBkPWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIHk9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgSD1uZXcgU2V0KGQpLF89ZT0+SC5oYXMoZSksRz1kLmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIFo9XyhcIi0tZHJ5LXJ1blwiKSxwPSgpPT5fKFwiLS12ZXJib3NlXCIpfHx5KCkuVkVSQk9TRT09PVwidHJ1ZVwiLHE9cCgpO3ZhciB1PShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciB4PSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksdj0oLi4uZSk9PnUoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxtPSguLi5lKT0+dShcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLFM9MCxjPSguLi5lKT0+cCgpJiZ1KGBcXHV7MUY3RTF9ICR7UysrfWAsLi4uZSk7dmFyIG49e1wiaXNDb250ZW50U2NyaXB0XCI6dHJ1ZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJzY3JpcHQtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxMZW5vdm9cXFxcRGVza3RvcFxcXFxNYWludGFpbmluZyBQcm9qZWN0c1xcXFx0YWJsZUV4dGVuc2lvblxcXFxjdXN0b20tdGFibGUtdmlld2VyXFxcXHNyY1xcXFxjb250ZW50LnRzXCIsXCJidW5kbGVJZFwiOlwiYjdlN2I5ZGE0ODBjMDBhM1wiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwidHJ1ZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPW4uYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpuLnZlcmJvc2V9fTt2YXIgRD1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBJKGUpe0QuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9STttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGw9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDtmdW5jdGlvbiBiKCl7cmV0dXJuIW4uaG9zdHx8bi5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpuLmhvc3R9ZnVuY3Rpb24gQygpe3JldHVybiBuLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIEU9XCJfX3BsYXNtb19ydW50aW1lX3NjcmlwdF9cIjtmdW5jdGlvbiBMKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gTyhlPUMoKSl7bGV0IHQ9YigpO3JldHVybmAke24uc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIEIoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmeChcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIFAoZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KE8oKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgYSBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCB3PWEuY29kZWZyYW1lfHxhLnN0YWNrO20oXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrYS5tZXNzYWdlK2BcbmArdytgXG5cbmArYS5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLEIpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e3YoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtuLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57bShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke24uZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIHM9XCJfX3BsYXNtby1sb2FkaW5nX19cIjtmdW5jdGlvbiAkKCl7bGV0IGU9Z2xvYmFsVGhpcy53aW5kb3c/LnRydXN0ZWRUeXBlcztpZih0eXBlb2YgZT5cInVcIilyZXR1cm47bGV0IHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwidHJ1c3RlZC10eXBlc1wiXScpPy5jb250ZW50Py5zcGxpdChcIiBcIiksbz10P3RbdD8ubGVuZ3RoLTFdLnJlcGxhY2UoLzsvZyxcIlwiKTp2b2lkIDA7cmV0dXJuIHR5cGVvZiBlPFwidVwiP2UuY3JlYXRlUG9saWN5KG98fGB0cnVzdGVkLWh0bWwtJHtzfWAse2NyZWF0ZUhUTUw6YT0+YX0pOnZvaWQgMH12YXIgVD0kKCk7ZnVuY3Rpb24gZygpe3JldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzKX1mdW5jdGlvbiBmKCl7cmV0dXJuIWcoKX1mdW5jdGlvbiBGKCl7bGV0IGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLmlkPXM7bGV0IHQ9YFxuICA8c3R5bGU+XG4gICAgIyR7c30ge1xuICAgICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbiAgICAgIGJveC1zaGFkb3c6ICMzMzMgNC43cHggNC43cHg7XG4gICAgfVxuXG4gICAgIyR7c306aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2UzZTNlMztcbiAgICAgIGNvbG9yOiAjNDQ0O1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgcGxhc21vLWxvYWRpbmctYW5pbWF0ZS1zdmctZmlsbCB7XG4gICAgICAwJSB7XG4gICAgICAgIGZpbGw6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgIFxuICAgICAgMTAwJSB7XG4gICAgICAgIGZpbGw6ICMzMzM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgIyR7c30gLnN2Zy1lbGVtLTEge1xuICAgICAgYW5pbWF0aW9uOiBwbGFzbW8tbG9hZGluZy1hbmltYXRlLXN2Zy1maWxsIDEuNDdzIGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpIDAuOHMgYm90aCBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICAjJHtzfSAuc3ZnLWVsZW0tMiB7XG4gICAgICBhbmltYXRpb246IHBsYXNtby1sb2FkaW5nLWFuaW1hdGUtc3ZnLWZpbGwgMS40N3MgY3ViaWMtYmV6aWVyKDAuNDcsIDAsIDAuNzQ1LCAwLjcxNSkgMC45cyBib3RoIGluZmluaXRlO1xuICAgIH1cbiAgICBcbiAgICAjJHtzfSAuc3ZnLWVsZW0tMyB7XG4gICAgICBhbmltYXRpb246IHBsYXNtby1sb2FkaW5nLWFuaW1hdGUtc3ZnLWZpbGwgMS40N3MgY3ViaWMtYmV6aWVyKDAuNDcsIDAsIDAuNzQ1LCAwLjcxNSkgMXMgYm90aCBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICAjJHtzfSAuaGlkZGVuIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gIDwvc3R5bGU+XG4gIFxuICA8c3ZnIGhlaWdodD1cIjMyXCIgd2lkdGg9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMjY0IDM1NFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgIDxwYXRoIGQ9XCJNMTM5LjIyMSAyODIuMjQzQzE1NC4yNTIgMjgyLjI0MyAxNjYuOTAzIDI5NC44NDkgMTYxLjMzOCAzMDguODEyQzE1OS40ODkgMzEzLjQ1NCAxNTcuMTUgMzE3LjkxMyAxNTQuMzQ3IDMyMi4xMDlDMTQ2LjQ2NCAzMzMuOTA5IDEzNS4yNiAzNDMuMTA3IDEyMi4xNTEgMzQ4LjUzOEMxMDkuMDQzIDM1My45NjkgOTQuNjE4MiAzNTUuMzkgODAuNzAyMiAzNTIuNjIxQzY2Ljc4NjEgMzQ5Ljg1MiA1NC4wMDM0IDM0My4wMTggNDMuOTcwNSAzMzIuOTgzQzMzLjkzNzUgMzIyLjk0NyAyNy4xMDUgMzEwLjE2MiAyNC4zMzY5IDI5Ni4yNDJDMjEuNTY4OSAyODIuMzIzIDIyLjk4OTUgMjY3Ljg5NSAyOC40MTkzIDI1NC43ODNDMzMuODQ5MSAyNDEuNjcxIDQzLjA0NDEgMjMwLjQ2NCA1NC44NDE2IDIyMi41NzlDNTkuMDM1MyAyMTkuNzc3IDYzLjQ5MDggMjE3LjQzOCA2OC4xMjk1IDIxNS41ODhDODIuMDkxNSAyMTAuMDIxIDk0LjY5NzggMjIyLjY3MSA5NC42OTc4IDIzNy43MDNMOTQuNjk3OCAyNTUuMDI3Qzk0LjY5NzggMjcwLjA1OCAxMDYuODgzIDI4Mi4yNDMgMTIxLjkxNCAyODIuMjQzSDEzOS4yMjFaXCIgZmlsbD1cIiMzMzNcIiBjbGFzcz1cInN2Zy1lbGVtLTFcIiA+PC9wYXRoPlxuICAgIDxwYXRoIGQ9XCJNMTkyLjI2MSAxNDIuMDI4QzE5Mi4yNjEgMTI2Ljk5NiAyMDQuODY3IDExNC4zNDYgMjE4LjgyOSAxMTkuOTEzQzIyMy40NjggMTIxLjc2MyAyMjcuOTIzIDEyNC4xMDIgMjMyLjExNyAxMjYuOTA0QzI0My45MTUgMTM0Ljc4OSAyNTMuMTEgMTQ1Ljk5NiAyNTguNTM5IDE1OS4xMDhDMjYzLjk2OSAxNzIuMjIgMjY1LjM5IDE4Ni42NDggMjYyLjYyMiAyMDAuNTY3QzI1OS44NTQgMjE0LjQ4NyAyNTMuMDIxIDIyNy4yNzIgMjQyLjk4OCAyMzcuMzA4QzIzMi45NTUgMjQ3LjM0MyAyMjAuMTczIDI1NC4xNzcgMjA2LjI1NiAyNTYuOTQ2QzE5Mi4zNCAyNTkuNzE1IDE3Ny45MTYgMjU4LjI5NCAxNjQuODA3IDI1Mi44NjNDMTUxLjY5OSAyNDcuNDMyIDE0MC40OTUgMjM4LjIzNCAxMzIuNjEyIDIyNi40MzRDMTI5LjgwOCAyMjIuMjM4IDEyNy40NyAyMTcuNzc5IDEyNS42MiAyMTMuMTM3QzEyMC4wNTYgMTk5LjE3NCAxMzIuNzA3IDE4Ni41NjggMTQ3LjczOCAxODYuNTY4TDE2NS4wNDQgMTg2LjU2OEMxODAuMDc2IDE4Ni41NjggMTkyLjI2MSAxNzQuMzgzIDE5Mi4yNjEgMTU5LjM1MkwxOTIuMjYxIDE0Mi4wMjhaXCIgZmlsbD1cIiMzMzNcIiBjbGFzcz1cInN2Zy1lbGVtLTJcIiA+PC9wYXRoPlxuICAgIDxwYXRoIGQ9XCJNOTUuNjUyMiAxNjQuMTM1Qzk1LjY1MjIgMTc5LjE2NyA4My4yMjc5IDE5MS43MjUgNjguODAxMyAxODcuNTA1QzU5LjUxNDUgMTg0Ljc4OCA1MC42NDMyIDE4MC42NjMgNDIuNTEwNiAxNzUuMjI3QzI2Ljc4MDYgMTY0LjcxNCAxNC41MjA2IDE0OS43NzIgNy4yODA4OSAxMzIuMjg5QzAuMDQxMTgzIDExNC44MDcgLTEuODUzMDUgOTUuNTY5NyAxLjgzNzcyIDc3LjAxMDRDNS41Mjg0OSA1OC40NTExIDE0LjYzODUgNDEuNDAzMyAyOC4wMTU3IDI4LjAyMjhDNDEuMzkzIDE0LjY0MjMgNTguNDM2NiA1LjUzMDA2IDc2Ljk5MTQgMS44MzgzOUM5NS41NDYxIC0xLjg1MzI5IDExNC43NzkgMC4wNDE0MTYyIDEzMi4yNTcgNy4yODI5QzE0OS43MzUgMTQuNTI0NCAxNjQuNjc0IDI2Ljc4NzQgMTc1LjE4NCA0Mi41MjEyQzE4MC42MiA1MC42NTc2IDE4NC43NDQgNTkuNTMzMiAxODcuNDYgNjguODI0NUMxOTEuNjc4IDgzLjI1MTkgMTc5LjExOSA5NS42NzU5IDE2NC4wODggOTUuNjc1OUwxMjIuODY5IDk1LjY3NTlDMTA3LjgzNyA5NS42NzU5IDk1LjY1MjIgMTA3Ljg2MSA5NS42NTIyIDEyMi44OTJMOTUuNjUyMiAxNjQuMTM1WlwiIGZpbGw9XCIjMzMzXCIgY2xhc3M9XCJzdmctZWxlbS0zXCI+PC9wYXRoPlxuICA8L3N2Zz5cbiAgPHNwYW4gY2xhc3M9XCJoaWRkZW5cIj5Db250ZXh0IEludmFsaWRhdGVkLCBQcmVzcyB0byBSZWxvYWQ8L3NwYW4+XG4gIGA7cmV0dXJuIGUuaW5uZXJIVE1MPVQ/VC5jcmVhdGVIVE1MKHQpOnQsZS5zdHlsZS5wb2ludGVyRXZlbnRzPVwibm9uZVwiLGUuc3R5bGUucG9zaXRpb249XCJmaXhlZFwiLGUuc3R5bGUuYm90dG9tPVwiMTQuN3B4XCIsZS5zdHlsZS5yaWdodD1cIjE0LjdweFwiLGUuc3R5bGUuZm9udEZhbWlseT1cInNhbnMtc2VyaWZcIixlLnN0eWxlLmRpc3BsYXk9XCJmbGV4XCIsZS5zdHlsZS5qdXN0aWZ5Q29udGVudD1cImNlbnRlclwiLGUuc3R5bGUuYWxpZ25JdGVtcz1cImNlbnRlclwiLGUuc3R5bGUucGFkZGluZz1cIjE0LjdweFwiLGUuc3R5bGUuZ2FwPVwiMTQuN3B4XCIsZS5zdHlsZS5ib3JkZXJSYWRpdXM9XCI0LjdweFwiLGUuc3R5bGUuekluZGV4PVwiMjE0NzQ4MzY0N1wiLGUuc3R5bGUub3BhY2l0eT1cIjBcIixlLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgMC40N3MgZWFzZS1pbi1vdXRcIixlfWZ1bmN0aW9uIE4oZSl7cmV0dXJuIG5ldyBQcm9taXNlKHQ9Pntkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ/KGYoKSYmKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChlKSx0KCkpLHQoKSk6Z2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCgpPT57ZigpJiZkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZSksdCgpfSl9KX12YXIgaz0oKT0+e2xldCBlO2lmKGYoKSl7bGV0IHQ9RigpO2U9Tih0KX1yZXR1cm57c2hvdzphc3luYyh7cmVsb2FkQnV0dG9uOnQ9ITF9PXt9KT0+e2F3YWl0IGU7bGV0IG89ZygpO28uc3R5bGUub3BhY2l0eT1cIjFcIix0JiYoby5vbmNsaWNrPXI9PntyLnN0b3BQcm9wYWdhdGlvbigpLGdsb2JhbFRoaXMubG9jYXRpb24ucmVsb2FkKCl9LG8ucXVlcnlTZWxlY3RvcihcInNwYW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKSxvLnN0eWxlLmN1cnNvcj1cInBvaW50ZXJcIixvLnN0eWxlLnBvaW50ZXJFdmVudHM9XCJhbGxcIil9LGhpZGU6YXN5bmMoKT0+e2F3YWl0IGU7bGV0IHQ9ZygpO3Quc3R5bGUub3BhY2l0eT1cIjBcIn19fTt2YXIgVz1gJHtFfSR7bW9kdWxlLmlkfV9fYCxpLEE9ITEsTT1rKCk7YXN5bmMgZnVuY3Rpb24gaCgpe2MoXCJTY3JpcHQgUnVudGltZSAtIHJlbG9hZGluZ1wiKSxBP2dsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCk6TS5zaG93KHtyZWxvYWRCdXR0b246ITB9KX1mdW5jdGlvbiBSKCl7aT8uZGlzY29ubmVjdCgpLGk9bD8ucnVudGltZS5jb25uZWN0KHtuYW1lOld9KSxpLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e2goKX0pLGkub25NZXNzYWdlLmFkZExpc3RlbmVyKGU9PntlLl9fcGxhc21vX2NzX3JlbG9hZF9fJiZoKCksZS5fX3BsYXNtb19jc19hY3RpdmVfdGFiX18mJihBPSEwKX0pfWZ1bmN0aW9uIGooKXtpZihsPy5ydW50aW1lKXRyeXtSKCksc2V0SW50ZXJ2YWwoUiwyNGUzKX1jYXRjaHtyZXR1cm59fWooKTtQKGFzeW5jIGU9PntjKFwiU2NyaXB0IHJ1bnRpbWUgLSBvbiB1cGRhdGVkIGFzc2V0c1wiKSxlLmZpbHRlcihvPT5vLmVudkhhc2g9PT1uLmVudkhhc2gpLnNvbWUobz0+TChtb2R1bGUuYnVuZGxlLG8uaWQpKSYmKE0uc2hvdygpLGw/LnJ1bnRpbWU/aS5wb3N0TWVzc2FnZSh7X19wbGFzbW9fY3NfY2hhbmdlZF9fOiEwfSk6c2V0VGltZW91dCgoKT0+e2goKX0sNDcwMCkpfSk7XG4iLCJpbXBvcnQgdHlwZSB7IFBsYXNtb0NTQ29uZmlnIH0gZnJvbSBcInBsYXNtb1wiO1xyXG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSBcIkBwbGFzbW9ocS9zdG9yYWdlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnOiBQbGFzbW9DU0NvbmZpZyA9IHtcclxuICBtYXRjaGVzOiBbXCJodHRwczovL2FwcHMuZXZzdS5lZHUucGgvKlwiXSxcclxuICBhbGxfZnJhbWVzOiB0cnVlXHJcbn07XHJcblxyXG5jb25zdCBleHRyYWN0VGFibGVEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuXHJcbiAgY29uc3Qgc3RvcmFnZSA9IG5ldyBTdG9yYWdlKCk7XHJcbiAgY29uc3QgdGFibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInRhYmxlXCIpO1xyXG5cclxuICBpZiAodGFibGVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgY29uc29sZS53YXJuKFwiIE5vIHRhYmxlcyBmb3VuZCBvbiB0aGlzIHBhZ2UuXCIpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdGFibGUgPSB0YWJsZXMubGVuZ3RoID4gMSA/IHRhYmxlc1sxXSA6IHRhYmxlc1swXTsgXHJcblxyXG4gIGNvbnN0IGhlYWRlcnMgPSBBcnJheS5mcm9tKHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0aFwiKSkubWFwKCh0aCkgPT4gdGguaW5uZXJUZXh0LnRyaW0oKSk7XHJcblxyXG5cclxuICBjb25zdCByb3dzID0gQXJyYXkuZnJvbSh0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwidHJcIikpLnNsaWNlKDEpLm1hcCgodHIpID0+IHtcclxuICAgIGNvbnN0IGNlbGxzID0gQXJyYXkuZnJvbSh0ci5xdWVyeVNlbGVjdG9yQWxsKFwidGRcIikpLm1hcCgodGQpID0+IHRkLmlubmVyVGV4dC50cmltKCkpO1xyXG4gICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhoZWFkZXJzLm1hcCgoaGVhZGVyLCBpKSA9PiBbaGVhZGVyLCBjZWxsc1tpXSB8fCBcIlwiXSkpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zb2xlLmxvZyhcIltDb250ZW50IFNjcmlwdF0gRXh0cmFjdGVkIFRhYmxlIERhdGE6XCIsIHJvd3MpO1xyXG5cclxuICBcclxuICBhd2FpdCBzdG9yYWdlLnNldChcInRhYmxlRGF0YVwiLCByb3dzKTtcclxuXHJcbn07XHJcblxyXG5cclxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xyXG4gIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gXCJleHRyYWN0X3RhYmxlXCIpIHtcclxuICAgIGV4dHJhY3RUYWJsZURhdGEoKS50aGVuKCgpID0+IHtcclxuICAgICAgc2VuZFJlc3BvbnNlKHsgc3RhdHVzOiBcIlRhYmxlIGV4dHJhY3RlZFwiIH0pXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHRydWUgXHJcbiAgfVxyXG59KVxyXG4iLCJpbXBvcnQgbSBmcm9tXCJwaWZ5XCI7dmFyIGw9KCk9Pnt0cnl7bGV0IGU9KGdsb2JhbFRoaXMubmF2aWdhdG9yPy51c2VyQWdlbnQpLm1hdGNoKC8ob3BlcmF8Y2hyb21lfHNhZmFyaXxmaXJlZm94fG1zaWV8dHJpZGVudCg/PVxcLykpXFwvP1xccyooXFxkKykvaSl8fFtdO2lmKGVbMV09PT1cIkNocm9tZVwiKXJldHVybiBwYXJzZUludChlWzJdKTwxMDB8fGdsb2JhbFRoaXMuY2hyb21lLnJ1bnRpbWU/LmdldE1hbmlmZXN0KCk/Lm1hbmlmZXN0X3ZlcnNpb249PT0yfWNhdGNoe3JldHVybiExfXJldHVybiExfTt2YXIgbz1jbGFzc3sjcjsjdDtnZXQgcHJpbWFyeUNsaWVudCgpe3JldHVybiB0aGlzLiN0fSNlO2dldCBzZWNvbmRhcnlDbGllbnQoKXtyZXR1cm4gdGhpcy4jZX0jYTtnZXQgYXJlYSgpe3JldHVybiB0aGlzLiNhfWdldCBoYXNXZWJBcGkoKXt0cnl7cmV0dXJuIHR5cGVvZiB3aW5kb3c8XCJ1XCImJiEhd2luZG93LmxvY2FsU3RvcmFnZX1jYXRjaChlKXtyZXR1cm4gY29uc29sZS5lcnJvcihlKSwhMX19I3M9bmV3IE1hcDsjaTtnZXQgY29waWVkS2V5U2V0KCl7cmV0dXJuIHRoaXMuI2l9aXNDb3BpZWQ9ZT0+dGhpcy5oYXNXZWJBcGkmJih0aGlzLmFsbENvcGllZHx8dGhpcy5jb3BpZWRLZXlTZXQuaGFzKGUpKTsjbj0hMTtnZXQgYWxsQ29waWVkKCl7cmV0dXJuIHRoaXMuI259Z2V0RXh0U3RvcmFnZUFwaT0oKT0+Z2xvYmFsVGhpcy5icm93c2VyPy5zdG9yYWdlfHxnbG9iYWxUaGlzLmNocm9tZT8uc3RvcmFnZTtnZXQgaGFzRXh0ZW5zaW9uQXBpKCl7dHJ5e3JldHVybiEhdGhpcy5nZXRFeHRTdG9yYWdlQXBpKCl9Y2F0Y2goZSl7cmV0dXJuIGNvbnNvbGUuZXJyb3IoZSksITF9fWlzV2F0Y2hTdXBwb3J0ZWQ9KCk9PnRoaXMuaGFzRXh0ZW5zaW9uQXBpO2tleU5hbWVzcGFjZT1cIlwiO2lzVmFsaWRLZXk9ZT0+ZS5zdGFydHNXaXRoKHRoaXMua2V5TmFtZXNwYWNlKTtnZXROYW1lc3BhY2VkS2V5PWU9PmAke3RoaXMua2V5TmFtZXNwYWNlfSR7ZX1gO2dldFVubmFtZXNwYWNlZEtleT1lPT5lLnNsaWNlKHRoaXMua2V5TmFtZXNwYWNlLmxlbmd0aCk7c2VyZGU9e3NlcmlhbGl6ZXI6SlNPTi5zdHJpbmdpZnksZGVzZXJpYWxpemVyOkpTT04ucGFyc2V9O2NvbnN0cnVjdG9yKHthcmVhOmU9XCJzeW5jXCIsYWxsQ29waWVkOnQ9ITEsY29waWVkS2V5TGlzdDpzPVtdLHNlcmRlOnI9e319PXt9KXt0aGlzLnNldENvcGllZEtleVNldChzKSx0aGlzLiNhPWUsdGhpcy4jbj10LHRoaXMuc2VyZGU9ey4uLnRoaXMuc2VyZGUsLi4ucn07dHJ5e3RoaXMuaGFzV2ViQXBpJiYodHx8cy5sZW5ndGg+MCkmJih0aGlzLiNlPXdpbmRvdy5sb2NhbFN0b3JhZ2UpfWNhdGNoe310cnl7dGhpcy5oYXNFeHRlbnNpb25BcGkmJih0aGlzLiNyPXRoaXMuZ2V0RXh0U3RvcmFnZUFwaSgpLGwoKT90aGlzLiN0PW0odGhpcy4jclt0aGlzLmFyZWFdLHtleGNsdWRlOltcImdldEJ5dGVzSW5Vc2VcIl0sZXJyb3JGaXJzdDohMX0pOnRoaXMuI3Q9dGhpcy4jclt0aGlzLmFyZWFdKX1jYXRjaHt9fXNldENvcGllZEtleVNldChlKXt0aGlzLiNpPW5ldyBTZXQoZSl9cmF3R2V0QWxsPSgpPT50aGlzLiN0Py5nZXQoKTtnZXRBbGw9YXN5bmMoKT0+e2xldCBlPWF3YWl0IHRoaXMucmF3R2V0QWxsKCk7cmV0dXJuIE9iamVjdC5lbnRyaWVzKGUpLmZpbHRlcigoW3RdKT0+dGhpcy5pc1ZhbGlkS2V5KHQpKS5yZWR1Y2UoKHQsW3Mscl0pPT4odFt0aGlzLmdldFVubmFtZXNwYWNlZEtleShzKV09cix0KSx7fSl9O2NvcHk9YXN5bmMgZT0+e2xldCB0PWU9PT12b2lkIDA7aWYoIXQmJiF0aGlzLmNvcGllZEtleVNldC5oYXMoZSl8fCF0aGlzLmFsbENvcGllZHx8IXRoaXMuaGFzRXh0ZW5zaW9uQXBpKXJldHVybiExO2xldCBzPXRoaXMuYWxsQ29waWVkP2F3YWl0IHRoaXMucmF3R2V0QWxsKCk6YXdhaXQgdGhpcy4jdC5nZXQoKHQ/Wy4uLnRoaXMuY29waWVkS2V5U2V0XTpbZV0pLm1hcCh0aGlzLmdldE5hbWVzcGFjZWRLZXkpKTtpZighcylyZXR1cm4hMTtsZXQgcj0hMTtmb3IobGV0IGEgaW4gcyl7bGV0IGk9c1thXSxuPXRoaXMuI2U/LmdldEl0ZW0oYSk7dGhpcy4jZT8uc2V0SXRlbShhLGkpLHJ8fD1pIT09bn1yZXR1cm4gcn07cmF3R2V0PWFzeW5jIGU9Pihhd2FpdCB0aGlzLnJhd0dldE1hbnkoW2VdKSlbZV07cmF3R2V0TWFueT1hc3luYyBlPT50aGlzLmhhc0V4dGVuc2lvbkFwaT9hd2FpdCB0aGlzLiN0LmdldChlKTplLmZpbHRlcih0aGlzLmlzQ29waWVkKS5yZWR1Y2UoKHQscyk9Pih0W3NdPXRoaXMuI2U/LmdldEl0ZW0ocyksdCkse30pO3Jhd1NldD1hc3luYyhlLHQpPT5hd2FpdCB0aGlzLnJhd1NldE1hbnkoe1tlXTp0fSk7cmF3U2V0TWFueT1hc3luYyBlPT4odGhpcy4jZSYmT2JqZWN0LmVudHJpZXMoZSkuZmlsdGVyKChbdF0pPT50aGlzLmlzQ29waWVkKHQpKS5mb3JFYWNoKChbdCxzXSk9PnRoaXMuI2Uuc2V0SXRlbSh0LHMpKSx0aGlzLmhhc0V4dGVuc2lvbkFwaSYmYXdhaXQgdGhpcy4jdC5zZXQoZSksbnVsbCk7Y2xlYXI9YXN5bmMoZT0hMSk9PntlJiZ0aGlzLiNlPy5jbGVhcigpLGF3YWl0IHRoaXMuI3QuY2xlYXIoKX07cmF3UmVtb3ZlPWFzeW5jIGU9Pnthd2FpdCB0aGlzLnJhd1JlbW92ZU1hbnkoW2VdKX07cmF3UmVtb3ZlTWFueT1hc3luYyBlPT57dGhpcy4jZSYmZS5maWx0ZXIodGhpcy5pc0NvcGllZCkuZm9yRWFjaCh0PT50aGlzLiNlLnJlbW92ZUl0ZW0odCkpLHRoaXMuaGFzRXh0ZW5zaW9uQXBpJiZhd2FpdCB0aGlzLiN0LnJlbW92ZShlKX07cmVtb3ZlQWxsPWFzeW5jKCk9PntsZXQgZT1hd2FpdCB0aGlzLmdldEFsbCgpLHQ9T2JqZWN0LmtleXMoZSk7YXdhaXQgdGhpcy5yZW1vdmVNYW55KHQpfTt3YXRjaD1lPT57bGV0IHQ9dGhpcy5pc1dhdGNoU3VwcG9ydGVkKCk7cmV0dXJuIHQmJnRoaXMuI28oZSksdH07I289ZT0+e2ZvcihsZXQgdCBpbiBlKXtsZXQgcz10aGlzLmdldE5hbWVzcGFjZWRLZXkodCkscj10aGlzLiNzLmdldChzKT8uY2FsbGJhY2tTZXR8fG5ldyBTZXQ7aWYoci5hZGQoZVt0XSksci5zaXplPjEpY29udGludWU7bGV0IGE9KGksbik9PntpZihuIT09dGhpcy5hcmVhfHwhaVtzXSlyZXR1cm47bGV0IGg9dGhpcy4jcy5nZXQocyk7aWYoIWgpdGhyb3cgbmV3IEVycm9yKGBTdG9yYWdlIGNvbW1zIGRvZXMgbm90IGV4aXN0IGZvciBuc0tleTogJHtzfWApO1Byb21pc2UuYWxsKFt0aGlzLnBhcnNlVmFsdWUoaVtzXS5uZXdWYWx1ZSksdGhpcy5wYXJzZVZhbHVlKGlbc10ub2xkVmFsdWUpXSkudGhlbigoW3ksZF0pPT57Zm9yKGxldCBwIG9mIGguY2FsbGJhY2tTZXQpcCh7bmV3VmFsdWU6eSxvbGRWYWx1ZTpkfSxuKX0pfTt0aGlzLiNyLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcihhKSx0aGlzLiNzLnNldChzLHtjYWxsYmFja1NldDpyLGxpc3RlbmVyOmF9KX19O3Vud2F0Y2g9ZT0+e2xldCB0PXRoaXMuaXNXYXRjaFN1cHBvcnRlZCgpO3JldHVybiB0JiZ0aGlzLiNjKGUpLHR9OyNjKGUpe2ZvcihsZXQgdCBpbiBlKXtsZXQgcz10aGlzLmdldE5hbWVzcGFjZWRLZXkodCkscj1lW3RdLGE9dGhpcy4jcy5nZXQocyk7YSYmKGEuY2FsbGJhY2tTZXQuZGVsZXRlKHIpLGEuY2FsbGJhY2tTZXQuc2l6ZT09PTAmJih0aGlzLiNzLmRlbGV0ZShzKSx0aGlzLiNyLm9uQ2hhbmdlZC5yZW1vdmVMaXN0ZW5lcihhLmxpc3RlbmVyKSkpfX11bndhdGNoQWxsPSgpPT50aGlzLiNoKCk7I2goKXt0aGlzLiNzLmZvckVhY2goKHtsaXN0ZW5lcjplfSk9PnRoaXMuI3Iub25DaGFuZ2VkLnJlbW92ZUxpc3RlbmVyKGUpKSx0aGlzLiNzLmNsZWFyKCl9YXN5bmMgZ2V0SXRlbShlKXtyZXR1cm4gdGhpcy5nZXQoZSl9YXN5bmMgZ2V0SXRlbXMoZSl7cmV0dXJuIGF3YWl0IHRoaXMuZ2V0TWFueShlKX1hc3luYyBzZXRJdGVtKGUsdCl7YXdhaXQgdGhpcy5zZXQoZSx0KX1hc3luYyBzZXRJdGVtcyhlKXthd2FpdCBhd2FpdCB0aGlzLnNldE1hbnkoZSl9YXN5bmMgcmVtb3ZlSXRlbShlKXtyZXR1cm4gdGhpcy5yZW1vdmUoZSl9YXN5bmMgcmVtb3ZlSXRlbXMoZSl7cmV0dXJuIGF3YWl0IHRoaXMucmVtb3ZlTWFueShlKX19LGc9Y2xhc3MgZXh0ZW5kcyBve2dldD1hc3luYyBlPT57bGV0IHQ9dGhpcy5nZXROYW1lc3BhY2VkS2V5KGUpLHM9YXdhaXQgdGhpcy5yYXdHZXQodCk7cmV0dXJuIHRoaXMucGFyc2VWYWx1ZShzKX07Z2V0TWFueT1hc3luYyBlPT57bGV0IHQ9ZS5tYXAodGhpcy5nZXROYW1lc3BhY2VkS2V5KSxzPWF3YWl0IHRoaXMucmF3R2V0TWFueSh0KSxyPWF3YWl0IFByb21pc2UuYWxsKE9iamVjdC52YWx1ZXMocykubWFwKHRoaXMucGFyc2VWYWx1ZSkpO3JldHVybiBPYmplY3Qua2V5cyhzKS5yZWR1Y2UoKGEsaSxuKT0+KGFbdGhpcy5nZXRVbm5hbWVzcGFjZWRLZXkoaSldPXJbbl0sYSkse30pfTtzZXQ9YXN5bmMoZSx0KT0+e2xldCBzPXRoaXMuZ2V0TmFtZXNwYWNlZEtleShlKSxyPXRoaXMuc2VyZGUuc2VyaWFsaXplcih0KTtyZXR1cm4gdGhpcy5yYXdTZXQocyxyKX07c2V0TWFueT1hc3luYyBlPT57bGV0IHQ9T2JqZWN0LmVudHJpZXMoZSkucmVkdWNlKChzLFtyLGFdKT0+KHNbdGhpcy5nZXROYW1lc3BhY2VkS2V5KHIpXT10aGlzLnNlcmRlLnNlcmlhbGl6ZXIoYSkscykse30pO3JldHVybiBhd2FpdCB0aGlzLnJhd1NldE1hbnkodCl9O3JlbW92ZT1hc3luYyBlPT57bGV0IHQ9dGhpcy5nZXROYW1lc3BhY2VkS2V5KGUpO3JldHVybiB0aGlzLnJhd1JlbW92ZSh0KX07cmVtb3ZlTWFueT1hc3luYyBlPT57bGV0IHQ9ZS5tYXAodGhpcy5nZXROYW1lc3BhY2VkS2V5KTtyZXR1cm4gYXdhaXQgdGhpcy5yYXdSZW1vdmVNYW55KHQpfTtzZXROYW1lc3BhY2U9ZT0+e3RoaXMua2V5TmFtZXNwYWNlPWV9O3BhcnNlVmFsdWU9YXN5bmMgZT0+e3RyeXtpZihlIT09dm9pZCAwKXJldHVybiB0aGlzLnNlcmRlLmRlc2VyaWFsaXplcihlKX1jYXRjaCh0KXtjb25zb2xlLmVycm9yKHQpfX19O2V4cG9ydHtvIGFzIEJhc2VTdG9yYWdlLGcgYXMgU3RvcmFnZX07XG4iLCJjb25zdCBwcm9jZXNzRnVuY3Rpb24gPSAoZnVuY3Rpb25fLCBvcHRpb25zLCBwcm94eSwgdW53cmFwcGVkKSA9PiBmdW5jdGlvbiAoLi4uYXJndW1lbnRzXykge1xuXHRjb25zdCBQID0gb3B0aW9ucy5wcm9taXNlTW9kdWxlO1xuXG5cdHJldHVybiBuZXcgUCgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0aWYgKG9wdGlvbnMubXVsdGlBcmdzKSB7XG5cdFx0XHRhcmd1bWVudHNfLnB1c2goKC4uLnJlc3VsdCkgPT4ge1xuXHRcdFx0XHRpZiAob3B0aW9ucy5lcnJvckZpcnN0KSB7XG5cdFx0XHRcdFx0aWYgKHJlc3VsdFswXSkge1xuXHRcdFx0XHRcdFx0cmVqZWN0KHJlc3VsdCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJlc3VsdC5zaGlmdCgpO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZShyZXN1bHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXNvbHZlKHJlc3VsdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSBpZiAob3B0aW9ucy5lcnJvckZpcnN0KSB7XG5cdFx0XHRhcmd1bWVudHNfLnB1c2goKGVycm9yLCByZXN1bHQpID0+IHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXNvbHZlKHJlc3VsdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhcmd1bWVudHNfLnB1c2gocmVzb2x2ZSk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXMgPT09IHByb3h5ID8gdW53cmFwcGVkIDogdGhpcztcblx0XHRSZWZsZWN0LmFwcGx5KGZ1bmN0aW9uXywgc2VsZiwgYXJndW1lbnRzXyk7XG5cdH0pO1xufTtcblxuY29uc3QgZmlsdGVyQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwaWZ5KGlucHV0LCBvcHRpb25zKSB7XG5cdG9wdGlvbnMgPSB7XG5cdFx0ZXhjbHVkZTogWy8uKyg/OlN5bmN8U3RyZWFtKSQvXSxcblx0XHRlcnJvckZpcnN0OiB0cnVlLFxuXHRcdHByb21pc2VNb2R1bGU6IFByb21pc2UsXG5cdFx0Li4ub3B0aW9ucyxcblx0fTtcblxuXHRjb25zdCBvYmplY3RUeXBlID0gdHlwZW9mIGlucHV0O1xuXHRpZiAoIShpbnB1dCAhPT0gbnVsbCAmJiAob2JqZWN0VHlwZSA9PT0gJ29iamVjdCcgfHwgb2JqZWN0VHlwZSA9PT0gJ2Z1bmN0aW9uJykpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgXFxgaW5wdXRcXGAgdG8gYmUgYSBcXGBGdW5jdGlvblxcYCBvciBcXGBPYmplY3RcXGAsIGdvdCBcXGAke2lucHV0ID09PSBudWxsID8gJ251bGwnIDogb2JqZWN0VHlwZX1cXGBgKTtcblx0fVxuXG5cdGNvbnN0IGZpbHRlciA9ICh0YXJnZXQsIGtleSkgPT4ge1xuXHRcdGxldCBjYWNoZWQgPSBmaWx0ZXJDYWNoZS5nZXQodGFyZ2V0KTtcblxuXHRcdGlmICghY2FjaGVkKSB7XG5cdFx0XHRjYWNoZWQgPSB7fTtcblx0XHRcdGZpbHRlckNhY2hlLnNldCh0YXJnZXQsIGNhY2hlZCk7XG5cdFx0fVxuXG5cdFx0aWYgKGtleSBpbiBjYWNoZWQpIHtcblx0XHRcdHJldHVybiBjYWNoZWRba2V5XTtcblx0XHR9XG5cblx0XHRjb25zdCBtYXRjaCA9IHBhdHRlcm4gPT4gKHR5cGVvZiBwYXR0ZXJuID09PSAnc3RyaW5nJyB8fCB0eXBlb2Yga2V5ID09PSAnc3ltYm9sJykgPyBrZXkgPT09IHBhdHRlcm4gOiBwYXR0ZXJuLnRlc3Qoa2V5KTtcblx0XHRjb25zdCBkZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuXHRcdGNvbnN0IHdyaXRhYmxlT3JDb25maWd1cmFibGVPd24gPSAoZGVzY3JpcHRvciA9PT0gdW5kZWZpbmVkIHx8IGRlc2NyaXB0b3Iud3JpdGFibGUgfHwgZGVzY3JpcHRvci5jb25maWd1cmFibGUpO1xuXHRcdGNvbnN0IGluY2x1ZGVkID0gb3B0aW9ucy5pbmNsdWRlID8gb3B0aW9ucy5pbmNsdWRlLnNvbWUoZWxlbWVudCA9PiBtYXRjaChlbGVtZW50KSkgOiAhb3B0aW9ucy5leGNsdWRlLnNvbWUoZWxlbWVudCA9PiBtYXRjaChlbGVtZW50KSk7XG5cdFx0Y29uc3Qgc2hvdWxkRmlsdGVyID0gaW5jbHVkZWQgJiYgd3JpdGFibGVPckNvbmZpZ3VyYWJsZU93bjtcblx0XHRjYWNoZWRba2V5XSA9IHNob3VsZEZpbHRlcjtcblx0XHRyZXR1cm4gc2hvdWxkRmlsdGVyO1xuXHR9O1xuXG5cdGNvbnN0IGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuXHRjb25zdCBwcm94eSA9IG5ldyBQcm94eShpbnB1dCwge1xuXHRcdGFwcGx5KHRhcmdldCwgdGhpc0FyZywgYXJncykge1xuXHRcdFx0Y29uc3QgY2FjaGVkID0gY2FjaGUuZ2V0KHRhcmdldCk7XG5cblx0XHRcdGlmIChjYWNoZWQpIHtcblx0XHRcdFx0cmV0dXJuIFJlZmxlY3QuYXBwbHkoY2FjaGVkLCB0aGlzQXJnLCBhcmdzKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcGlmaWVkID0gb3B0aW9ucy5leGNsdWRlTWFpbiA/IHRhcmdldCA6IHByb2Nlc3NGdW5jdGlvbih0YXJnZXQsIG9wdGlvbnMsIHByb3h5LCB0YXJnZXQpO1xuXHRcdFx0Y2FjaGUuc2V0KHRhcmdldCwgcGlmaWVkKTtcblx0XHRcdHJldHVybiBSZWZsZWN0LmFwcGx5KHBpZmllZCwgdGhpc0FyZywgYXJncyk7XG5cdFx0fSxcblxuXHRcdGdldCh0YXJnZXQsIGtleSkge1xuXHRcdFx0Y29uc3QgcHJvcGVydHkgPSB0YXJnZXRba2V5XTtcblxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1leHRlbmQtbmF0aXZlL25vLXVzZS1leHRlbmQtbmF0aXZlXG5cdFx0XHRpZiAoIWZpbHRlcih0YXJnZXQsIGtleSkgfHwgcHJvcGVydHkgPT09IEZ1bmN0aW9uLnByb3RvdHlwZVtrZXldKSB7XG5cdFx0XHRcdHJldHVybiBwcm9wZXJ0eTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgY2FjaGVkID0gY2FjaGUuZ2V0KHByb3BlcnR5KTtcblxuXHRcdFx0aWYgKGNhY2hlZCkge1xuXHRcdFx0XHRyZXR1cm4gY2FjaGVkO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHlwZW9mIHByb3BlcnR5ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNvbnN0IHBpZmllZCA9IHByb2Nlc3NGdW5jdGlvbihwcm9wZXJ0eSwgb3B0aW9ucywgcHJveHksIHRhcmdldCk7XG5cdFx0XHRcdGNhY2hlLnNldChwcm9wZXJ0eSwgcGlmaWVkKTtcblx0XHRcdFx0cmV0dXJuIHBpZmllZDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHByb3BlcnR5O1xuXHRcdH0sXG5cdH0pO1xuXG5cdHJldHVybiBwcm94eTtcbn1cbiIsImV4cG9ydHMuaW50ZXJvcERlZmF1bHQgPSBmdW5jdGlvbiAoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhIDoge2RlZmF1bHQ6IGF9O1xufTtcblxuZXhwb3J0cy5kZWZpbmVJbnRlcm9wRmxhZyA9IGZ1bmN0aW9uIChhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufTtcblxuZXhwb3J0cy5leHBvcnRBbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0KSB7XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ2RlZmF1bHQnIHx8IGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8IGRlc3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5leHBvcnRzLmV4cG9ydCA9IGZ1bmN0aW9uIChkZXN0LCBkZXN0TmFtZSwgZ2V0KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBkZXN0TmFtZSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBnZXQsXG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJjb250ZW50LjQ4MGMwMGEzLmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);