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
})({"5swSH":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Lenovo\\Desktop\\Current Project\\tableExtension\\custom-table-viewer\\src\\content.ts",
    "bundleId": "b7e7b9da480c00a3",
    "envHash": "e792fbbdaa78ee84",
    "verbose": "false",
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
    console.log("[Content Script] Running extraction...");
    const storage = new (0, _storage.Storage)();
    const tables = document.querySelectorAll("table");
    if (tables.length === 0) {
        console.warn("[Content Script] No tables found on this page.");
        return;
    }
    const table = tables.length > 1 ? tables[1] : tables[0];
    console.log(`[Content Script] Found ${tables.length} table(s), extracting from the ${tables.length > 1 ? "second" : "first"} one.`);
    const headers = Array.from(table.querySelectorAll("th")).map((th)=>th.innerText.trim());
    console.log("[Content Script] Extracted Headers:", headers);
    const rows = Array.from(table.querySelectorAll("tr")).slice(1).map((tr)=>{
        const cells = Array.from(tr.querySelectorAll("td")).map((td)=>td.innerText.trim());
        return Object.fromEntries(headers.map((header, i)=>[
                header,
                cells[i] || ""
            ]));
    });
    console.log("[Content Script] Extracted Table Data:", rows);
    await storage.set("tableData", rows);
    console.log("[Content Script] Table data saved in storage.");
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

},{}]},["5swSH","k5Ie5"], "k5Ie5", "parcelRequirea110")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFHLElBQUcsRUFBRztJQUFBLFFBQU0sT0FBTSxJQUFFLENBQUMsQ0FBQztRQUFJLEtBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVEsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFBTyxFQUFFO0lBQUEsWUFBVSxPQUFNO1FBQUksTUFBTSxJQUFJLENBQUMsY0FBYztZQUFDO1NBQUU7SUFBQyxFQUFFO0lBQUEsZ0JBQWMsT0FBTTtRQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBRSxFQUFFLE9BQU8sSUFBSSxDQUFDLFVBQVUsUUFBUSxDQUFBLElBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsS0FBSSxJQUFJLENBQUMsbUJBQWlCLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU87SUFBRSxFQUFFO0lBQUEsWUFBVTtRQUFVLElBQUksSUFBRSxNQUFNLElBQUksQ0FBQyxVQUFTLElBQUUsT0FBTyxLQUFLO1FBQUcsTUFBTSxJQUFJLENBQUMsV0FBVztJQUFFLEVBQUU7SUFBQSxRQUFNLENBQUE7UUFBSSxJQUFJLElBQUUsSUFBSSxDQUFDO1FBQW1CLE9BQU8sS0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBRztJQUFDLEVBQUU7SUFBQSxDQUFDLENBQUMsR0FBQyxDQUFBO1FBQUksSUFBSSxJQUFJLEtBQUssRUFBRTtZQUFDLElBQUksSUFBRSxJQUFJLENBQUMsaUJBQWlCLElBQUcsSUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLGVBQWEsSUFBSTtZQUFJLElBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUUsRUFBRSxPQUFLLEdBQUU7WUFBUyxJQUFJLElBQUUsQ0FBQyxHQUFFO2dCQUFLLElBQUcsTUFBSSxJQUFJLENBQUMsUUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUM7Z0JBQU8sSUFBSSxJQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO2dCQUFHLElBQUcsQ0FBQyxHQUFFLE1BQU0sSUFBSSxNQUFNLENBQUMsd0NBQXdDLEVBQUUsRUFBRSxDQUFDO2dCQUFFLFFBQVEsSUFBSTtvQkFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUFVLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUM7aUJBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFFLEVBQUU7b0JBQUksS0FBSSxJQUFJLEtBQUssRUFBRSxZQUFZLEVBQUU7d0JBQUMsVUFBUzt3QkFBRSxVQUFTO29CQUFDLEdBQUU7Z0JBQUU7WUFBRTtZQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLFlBQVksSUFBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFFO2dCQUFDLGFBQVk7Z0JBQUUsVUFBUztZQUFDO1FBQUU7SUFBQyxFQUFFO0lBQUEsVUFBUSxDQUFBO1FBQUksSUFBSSxJQUFFLElBQUksQ0FBQztRQUFtQixPQUFPLEtBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUc7SUFBQyxFQUFFO0lBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUFFLElBQUksSUFBSSxLQUFLLEVBQUU7WUFBQyxJQUFJLElBQUUsSUFBSSxDQUFDLGlCQUFpQixJQUFHLElBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBQyxJQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQUcsS0FBSSxDQUFBLEVBQUUsWUFBWSxPQUFPLElBQUcsRUFBRSxZQUFZLFNBQU8sS0FBSSxDQUFBLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsZUFBZSxFQUFFLFNBQVEsQ0FBQztRQUFFO0lBQUM7SUFBQyxhQUFXLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHO0lBQUEsQ0FBQyxDQUFDO1FBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFDLFVBQVMsQ0FBQyxFQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsZUFBZSxLQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUFPO0lBQUMsTUFBTSxRQUFRLENBQUMsRUFBQztRQUFDLE9BQU8sSUFBSSxDQUFDLElBQUk7SUFBRTtJQUFDLE1BQU0sU0FBUyxDQUFDLEVBQUM7UUFBQyxPQUFPLE1BQU0sSUFBSSxDQUFDLFFBQVE7SUFBRTtJQUFDLE1BQU0sUUFBUSxDQUFDLEVBQUMsQ0FBQyxFQUFDO1FBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxHQUFFO0lBQUU7SUFBQyxNQUFNLFNBQVMsQ0FBQyxFQUFDO1FBQUMsTUFBTSxNQUFNLElBQUksQ0FBQyxRQUFRO0lBQUU7SUFBQyxNQUFNLFdBQVcsQ0FBQyxFQUFDO1FBQUMsT0FBTyxJQUFJLENBQUMsT0FBTztJQUFFO0lBQUMsTUFBTSxZQUFZLENBQUMsRUFBQztRQUFDLE9BQU8sTUFBTSxJQUFJLENBQUMsV0FBVztJQUFFO0FBQUMsR0FBRSxJQUFFLGNBQWM7SUFBRSxNQUFJLE9BQU07UUFBSSxJQUFJLElBQUUsSUFBSSxDQUFDLGlCQUFpQixJQUFHLElBQUUsTUFBTSxJQUFJLENBQUMsT0FBTztRQUFHLE9BQU8sSUFBSSxDQUFDLFdBQVc7SUFBRSxFQUFFO0lBQUEsVUFBUSxPQUFNO1FBQUksSUFBSSxJQUFFLEVBQUUsSUFBSSxJQUFJLENBQUMsbUJBQWtCLElBQUUsTUFBTSxJQUFJLENBQUMsV0FBVyxJQUFHLElBQUUsTUFBTSxRQUFRLElBQUksT0FBTyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUM7UUFBYSxPQUFPLE9BQU8sS0FBSyxHQUFHLE9BQU8sQ0FBQyxHQUFFLEdBQUUsSUFBSyxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsR0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDLENBQUEsR0FBRyxDQUFDO0lBQUUsRUFBRTtJQUFBLE1BQUksT0FBTSxHQUFFO1FBQUssSUFBSSxJQUFFLElBQUksQ0FBQyxp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WUFBWTtZQUNaLEtBQUs7Z0JBQ0gsT0FBTyxNQUFNLENBQUMsSUFBSTtZQUNwQjtRQUNGO0lBQ0Y7SUFFQSxPQUFPO0FBQ1Q7QUFFQSxRQUFRLFNBQVMsU0FBVSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUc7SUFDNUMsT0FBTyxlQUFlLE1BQU0sVUFBVTtRQUNwQyxZQUFZO1FBQ1osS0FBSztJQUNQO0FBQ0YiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGxhc21vaHErcGFyY2VsLXJ1bnRpbWVAMC4yNS4yL25vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTdjNGE4Y2I0MTlhZjE2ZGUuanMiLCJzcmMvY29udGVudC50cyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGxhc21vaHErc3RvcmFnZUAxLjE1LjBfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcGxhc21vaHEvc3RvcmFnZS9kaXN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3BpZnlANi4xLjAvbm9kZV9tb2R1bGVzL3BpZnkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvLnBucG0vQHBhcmNlbCt0cmFuc2Zvcm1lci1qc0AyLjkuM19AcGFyY2VsK2NvcmVAMi45LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGQ9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgeT0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBIPW5ldyBTZXQoZCksXz1lPT5ILmhhcyhlKSxHPWQuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgWj1fKFwiLS1kcnktcnVuXCIpLHA9KCk9Pl8oXCItLXZlcmJvc2VcIil8fHkoKS5WRVJCT1NFPT09XCJ0cnVlXCIscT1wKCk7dmFyIHU9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIHg9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSx2PSguLi5lKT0+dShcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLG09KC4uLmUpPT51KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUz0wLGM9KC4uLmUpPT5wKCkmJnUoYFxcdXsxRjdFMX0gJHtTKyt9YCwuLi5lKTt2YXIgbj17XCJpc0NvbnRlbnRTY3JpcHRcIjp0cnVlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInNjcmlwdC1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIkM6XFxcXFVzZXJzXFxcXExlbm92b1xcXFxEZXNrdG9wXFxcXEN1cnJlbnQgUHJvamVjdFxcXFx0YWJsZUV4dGVuc2lvblxcXFxjdXN0b20tdGFibGUtdmlld2VyXFxcXHNyY1xcXFxjb250ZW50LnRzXCIsXCJidW5kbGVJZFwiOlwiYjdlN2I5ZGE0ODBjMDBhM1wiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1uLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6bi52ZXJib3NlfX07dmFyIEQ9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gSShlKXtELmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPUk7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBsPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7ZnVuY3Rpb24gYigpe3JldHVybiFuLmhvc3R8fG4uaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6bi5ob3N0fWZ1bmN0aW9uIEMoKXtyZXR1cm4gbi5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBFPVwiX19wbGFzbW9fcnVudGltZV9zY3JpcHRfXCI7ZnVuY3Rpb24gTChlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIE8oZT1DKCkpe2xldCB0PWIoKTtyZXR1cm5gJHtuLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBCKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJngoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBQKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChPKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IGEgb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgdz1hLmNvZGVmcmFtZXx8YS5zdGFjazttKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2EubWVzc2FnZStgXG5gK3crYFxuXG5gK2EuaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixCKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9Pnt2KGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7bi5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e20oYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtuLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBzPVwiX19wbGFzbW8tbG9hZGluZ19fXCI7ZnVuY3Rpb24gJCgpe2xldCBlPWdsb2JhbFRoaXMud2luZG93Py50cnVzdGVkVHlwZXM7aWYodHlwZW9mIGU+XCJ1XCIpcmV0dXJuO2xldCB0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cInRydXN0ZWQtdHlwZXNcIl0nKT8uY29udGVudD8uc3BsaXQoXCIgXCIpLG89dD90W3Q/Lmxlbmd0aC0xXS5yZXBsYWNlKC87L2csXCJcIik6dm9pZCAwO3JldHVybiB0eXBlb2YgZTxcInVcIj9lLmNyZWF0ZVBvbGljeShvfHxgdHJ1c3RlZC1odG1sLSR7c31gLHtjcmVhdGVIVE1MOmE9PmF9KTp2b2lkIDB9dmFyIFQ9JCgpO2Z1bmN0aW9uIGcoKXtyZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocyl9ZnVuY3Rpb24gZigpe3JldHVybiFnKCl9ZnVuY3Rpb24gRigpe2xldCBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZS5pZD1zO2xldCB0PWBcbiAgPHN0eWxlPlxuICAgICMke3N9IHtcbiAgICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gICAgICBib3gtc2hhZG93OiAjMzMzIDQuN3B4IDQuN3B4O1xuICAgIH1cblxuICAgICMke3N9OmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlM2UzZTM7XG4gICAgICBjb2xvcjogIzQ0NDtcbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIHBsYXNtby1sb2FkaW5nLWFuaW1hdGUtc3ZnLWZpbGwge1xuICAgICAgMCUge1xuICAgICAgICBmaWxsOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICBcbiAgICAgIDEwMCUge1xuICAgICAgICBmaWxsOiAjMzMzO1xuICAgICAgfVxuICAgIH1cblxuICAgICMke3N9IC5zdmctZWxlbS0xIHtcbiAgICAgIGFuaW1hdGlvbjogcGxhc21vLWxvYWRpbmctYW5pbWF0ZS1zdmctZmlsbCAxLjQ3cyBjdWJpYy1iZXppZXIoMC40NywgMCwgMC43NDUsIDAuNzE1KSAwLjhzIGJvdGggaW5maW5pdGU7XG4gICAgfVxuXG4gICAgIyR7c30gLnN2Zy1lbGVtLTIge1xuICAgICAgYW5pbWF0aW9uOiBwbGFzbW8tbG9hZGluZy1hbmltYXRlLXN2Zy1maWxsIDEuNDdzIGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpIDAuOXMgYm90aCBpbmZpbml0ZTtcbiAgICB9XG4gICAgXG4gICAgIyR7c30gLnN2Zy1lbGVtLTMge1xuICAgICAgYW5pbWF0aW9uOiBwbGFzbW8tbG9hZGluZy1hbmltYXRlLXN2Zy1maWxsIDEuNDdzIGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpIDFzIGJvdGggaW5maW5pdGU7XG4gICAgfVxuXG4gICAgIyR7c30gLmhpZGRlbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICA8L3N0eWxlPlxuICBcbiAgPHN2ZyBoZWlnaHQ9XCIzMlwiIHdpZHRoPVwiMzJcIiB2aWV3Qm94PVwiMCAwIDI2NCAzNTRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICA8cGF0aCBkPVwiTTEzOS4yMjEgMjgyLjI0M0MxNTQuMjUyIDI4Mi4yNDMgMTY2LjkwMyAyOTQuODQ5IDE2MS4zMzggMzA4LjgxMkMxNTkuNDg5IDMxMy40NTQgMTU3LjE1IDMxNy45MTMgMTU0LjM0NyAzMjIuMTA5QzE0Ni40NjQgMzMzLjkwOSAxMzUuMjYgMzQzLjEwNyAxMjIuMTUxIDM0OC41MzhDMTA5LjA0MyAzNTMuOTY5IDk0LjYxODIgMzU1LjM5IDgwLjcwMjIgMzUyLjYyMUM2Ni43ODYxIDM0OS44NTIgNTQuMDAzNCAzNDMuMDE4IDQzLjk3MDUgMzMyLjk4M0MzMy45Mzc1IDMyMi45NDcgMjcuMTA1IDMxMC4xNjIgMjQuMzM2OSAyOTYuMjQyQzIxLjU2ODkgMjgyLjMyMyAyMi45ODk1IDI2Ny44OTUgMjguNDE5MyAyNTQuNzgzQzMzLjg0OTEgMjQxLjY3MSA0My4wNDQxIDIzMC40NjQgNTQuODQxNiAyMjIuNTc5QzU5LjAzNTMgMjE5Ljc3NyA2My40OTA4IDIxNy40MzggNjguMTI5NSAyMTUuNTg4QzgyLjA5MTUgMjEwLjAyMSA5NC42OTc4IDIyMi42NzEgOTQuNjk3OCAyMzcuNzAzTDk0LjY5NzggMjU1LjAyN0M5NC42OTc4IDI3MC4wNTggMTA2Ljg4MyAyODIuMjQzIDEyMS45MTQgMjgyLjI0M0gxMzkuMjIxWlwiIGZpbGw9XCIjMzMzXCIgY2xhc3M9XCJzdmctZWxlbS0xXCIgPjwvcGF0aD5cbiAgICA8cGF0aCBkPVwiTTE5Mi4yNjEgMTQyLjAyOEMxOTIuMjYxIDEyNi45OTYgMjA0Ljg2NyAxMTQuMzQ2IDIxOC44MjkgMTE5LjkxM0MyMjMuNDY4IDEyMS43NjMgMjI3LjkyMyAxMjQuMTAyIDIzMi4xMTcgMTI2LjkwNEMyNDMuOTE1IDEzNC43ODkgMjUzLjExIDE0NS45OTYgMjU4LjUzOSAxNTkuMTA4QzI2My45NjkgMTcyLjIyIDI2NS4zOSAxODYuNjQ4IDI2Mi42MjIgMjAwLjU2N0MyNTkuODU0IDIxNC40ODcgMjUzLjAyMSAyMjcuMjcyIDI0Mi45ODggMjM3LjMwOEMyMzIuOTU1IDI0Ny4zNDMgMjIwLjE3MyAyNTQuMTc3IDIwNi4yNTYgMjU2Ljk0NkMxOTIuMzQgMjU5LjcxNSAxNzcuOTE2IDI1OC4yOTQgMTY0LjgwNyAyNTIuODYzQzE1MS42OTkgMjQ3LjQzMiAxNDAuNDk1IDIzOC4yMzQgMTMyLjYxMiAyMjYuNDM0QzEyOS44MDggMjIyLjIzOCAxMjcuNDcgMjE3Ljc3OSAxMjUuNjIgMjEzLjEzN0MxMjAuMDU2IDE5OS4xNzQgMTMyLjcwNyAxODYuNTY4IDE0Ny43MzggMTg2LjU2OEwxNjUuMDQ0IDE4Ni41NjhDMTgwLjA3NiAxODYuNTY4IDE5Mi4yNjEgMTc0LjM4MyAxOTIuMjYxIDE1OS4zNTJMMTkyLjI2MSAxNDIuMDI4WlwiIGZpbGw9XCIjMzMzXCIgY2xhc3M9XCJzdmctZWxlbS0yXCIgPjwvcGF0aD5cbiAgICA8cGF0aCBkPVwiTTk1LjY1MjIgMTY0LjEzNUM5NS42NTIyIDE3OS4xNjcgODMuMjI3OSAxOTEuNzI1IDY4LjgwMTMgMTg3LjUwNUM1OS41MTQ1IDE4NC43ODggNTAuNjQzMiAxODAuNjYzIDQyLjUxMDYgMTc1LjIyN0MyNi43ODA2IDE2NC43MTQgMTQuNTIwNiAxNDkuNzcyIDcuMjgwODkgMTMyLjI4OUMwLjA0MTE4MyAxMTQuODA3IC0xLjg1MzA1IDk1LjU2OTcgMS44Mzc3MiA3Ny4wMTA0QzUuNTI4NDkgNTguNDUxMSAxNC42Mzg1IDQxLjQwMzMgMjguMDE1NyAyOC4wMjI4QzQxLjM5MyAxNC42NDIzIDU4LjQzNjYgNS41MzAwNiA3Ni45OTE0IDEuODM4MzlDOTUuNTQ2MSAtMS44NTMyOSAxMTQuNzc5IDAuMDQxNDE2MiAxMzIuMjU3IDcuMjgyOUMxNDkuNzM1IDE0LjUyNDQgMTY0LjY3NCAyNi43ODc0IDE3NS4xODQgNDIuNTIxMkMxODAuNjIgNTAuNjU3NiAxODQuNzQ0IDU5LjUzMzIgMTg3LjQ2IDY4LjgyNDVDMTkxLjY3OCA4My4yNTE5IDE3OS4xMTkgOTUuNjc1OSAxNjQuMDg4IDk1LjY3NTlMMTIyLjg2OSA5NS42NzU5QzEwNy44MzcgOTUuNjc1OSA5NS42NTIyIDEwNy44NjEgOTUuNjUyMiAxMjIuODkyTDk1LjY1MjIgMTY0LjEzNVpcIiBmaWxsPVwiIzMzM1wiIGNsYXNzPVwic3ZnLWVsZW0tM1wiPjwvcGF0aD5cbiAgPC9zdmc+XG4gIDxzcGFuIGNsYXNzPVwiaGlkZGVuXCI+Q29udGV4dCBJbnZhbGlkYXRlZCwgUHJlc3MgdG8gUmVsb2FkPC9zcGFuPlxuICBgO3JldHVybiBlLmlubmVySFRNTD1UP1QuY3JlYXRlSFRNTCh0KTp0LGUuc3R5bGUucG9pbnRlckV2ZW50cz1cIm5vbmVcIixlLnN0eWxlLnBvc2l0aW9uPVwiZml4ZWRcIixlLnN0eWxlLmJvdHRvbT1cIjE0LjdweFwiLGUuc3R5bGUucmlnaHQ9XCIxNC43cHhcIixlLnN0eWxlLmZvbnRGYW1pbHk9XCJzYW5zLXNlcmlmXCIsZS5zdHlsZS5kaXNwbGF5PVwiZmxleFwiLGUuc3R5bGUuanVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIixlLnN0eWxlLmFsaWduSXRlbXM9XCJjZW50ZXJcIixlLnN0eWxlLnBhZGRpbmc9XCIxNC43cHhcIixlLnN0eWxlLmdhcD1cIjE0LjdweFwiLGUuc3R5bGUuYm9yZGVyUmFkaXVzPVwiNC43cHhcIixlLnN0eWxlLnpJbmRleD1cIjIxNDc0ODM2NDdcIixlLnN0eWxlLm9wYWNpdHk9XCIwXCIsZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDAuNDdzIGVhc2UtaW4tb3V0XCIsZX1mdW5jdGlvbiBOKGUpe3JldHVybiBuZXcgUHJvbWlzZSh0PT57ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50PyhmKCkmJihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZSksdCgpKSx0KCkpOmdsb2JhbFRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwoKT0+e2YoKSYmZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGUpLHQoKX0pfSl9dmFyIGs9KCk9PntsZXQgZTtpZihmKCkpe2xldCB0PUYoKTtlPU4odCl9cmV0dXJue3Nob3c6YXN5bmMoe3JlbG9hZEJ1dHRvbjp0PSExfT17fSk9Pnthd2FpdCBlO2xldCBvPWcoKTtvLnN0eWxlLm9wYWNpdHk9XCIxXCIsdCYmKG8ub25jbGljaz1yPT57ci5zdG9wUHJvcGFnYXRpb24oKSxnbG9iYWxUaGlzLmxvY2F0aW9uLnJlbG9hZCgpfSxvLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIiksby5zdHlsZS5jdXJzb3I9XCJwb2ludGVyXCIsby5zdHlsZS5wb2ludGVyRXZlbnRzPVwiYWxsXCIpfSxoaWRlOmFzeW5jKCk9Pnthd2FpdCBlO2xldCB0PWcoKTt0LnN0eWxlLm9wYWNpdHk9XCIwXCJ9fX07dmFyIFc9YCR7RX0ke21vZHVsZS5pZH1fX2AsaSxBPSExLE09aygpO2FzeW5jIGZ1bmN0aW9uIGgoKXtjKFwiU2NyaXB0IFJ1bnRpbWUgLSByZWxvYWRpbmdcIiksQT9nbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpOk0uc2hvdyh7cmVsb2FkQnV0dG9uOiEwfSl9ZnVuY3Rpb24gUigpe2k/LmRpc2Nvbm5lY3QoKSxpPWw/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpXfSksaS5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PntoKCl9KSxpLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihlPT57ZS5fX3BsYXNtb19jc19yZWxvYWRfXyYmaCgpLGUuX19wbGFzbW9fY3NfYWN0aXZlX3RhYl9fJiYoQT0hMCl9KX1mdW5jdGlvbiBqKCl7aWYobD8ucnVudGltZSl0cnl7UigpLHNldEludGVydmFsKFIsMjRlMyl9Y2F0Y2h7cmV0dXJufX1qKCk7UChhc3luYyBlPT57YyhcIlNjcmlwdCBydW50aW1lIC0gb24gdXBkYXRlZCBhc3NldHNcIiksZS5maWx0ZXIobz0+by5lbnZIYXNoPT09bi5lbnZIYXNoKS5zb21lKG89PkwobW9kdWxlLmJ1bmRsZSxvLmlkKSkmJihNLnNob3coKSxsPy5ydW50aW1lP2kucG9zdE1lc3NhZ2Uoe19fcGxhc21vX2NzX2NoYW5nZWRfXzohMH0pOnNldFRpbWVvdXQoKCk9PntoKCl9LDQ3MDApKX0pO1xuIiwiaW1wb3J0IHR5cGUgeyBQbGFzbW9DU0NvbmZpZyB9IGZyb20gXCJwbGFzbW9cIjtcclxuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gXCJAcGxhc21vaHEvc3RvcmFnZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZzogUGxhc21vQ1NDb25maWcgPSB7XHJcbiAgbWF0Y2hlczogW1wiaHR0cHM6Ly9hcHBzLmV2c3UuZWR1LnBoLypcIl0sXHJcbiAgYWxsX2ZyYW1lczogdHJ1ZVxyXG59O1xyXG5cclxuY29uc3QgZXh0cmFjdFRhYmxlRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICBjb25zb2xlLmxvZyhcIltDb250ZW50IFNjcmlwdF0gUnVubmluZyBleHRyYWN0aW9uLi4uXCIpO1xyXG5cclxuICBjb25zdCBzdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcclxuICBjb25zdCB0YWJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidGFibGVcIik7XHJcblxyXG4gIGlmICh0YWJsZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICBjb25zb2xlLndhcm4oXCJbQ29udGVudCBTY3JpcHRdIE5vIHRhYmxlcyBmb3VuZCBvbiB0aGlzIHBhZ2UuXCIpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdGFibGUgPSB0YWJsZXMubGVuZ3RoID4gMSA/IHRhYmxlc1sxXSA6IHRhYmxlc1swXTsgXHJcbiAgY29uc29sZS5sb2coYFtDb250ZW50IFNjcmlwdF0gRm91bmQgJHt0YWJsZXMubGVuZ3RofSB0YWJsZShzKSwgZXh0cmFjdGluZyBmcm9tIHRoZSAke3RhYmxlcy5sZW5ndGggPiAxID8gXCJzZWNvbmRcIiA6IFwiZmlyc3RcIn0gb25lLmApO1xyXG5cclxuICBjb25zdCBoZWFkZXJzID0gQXJyYXkuZnJvbSh0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwidGhcIikpLm1hcCgodGgpID0+IHRoLmlubmVyVGV4dC50cmltKCkpO1xyXG4gIGNvbnNvbGUubG9nKFwiW0NvbnRlbnQgU2NyaXB0XSBFeHRyYWN0ZWQgSGVhZGVyczpcIiwgaGVhZGVycyk7XHJcblxyXG4gIGNvbnN0IHJvd3MgPSBBcnJheS5mcm9tKHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0clwiKSkuc2xpY2UoMSkubWFwKCh0cikgPT4ge1xyXG4gICAgY29uc3QgY2VsbHMgPSBBcnJheS5mcm9tKHRyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZFwiKSkubWFwKCh0ZCkgPT4gdGQuaW5uZXJUZXh0LnRyaW0oKSk7XHJcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKGhlYWRlcnMubWFwKChoZWFkZXIsIGkpID0+IFtoZWFkZXIsIGNlbGxzW2ldIHx8IFwiXCJdKSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwiW0NvbnRlbnQgU2NyaXB0XSBFeHRyYWN0ZWQgVGFibGUgRGF0YTpcIiwgcm93cyk7XHJcblxyXG4gIFxyXG4gIGF3YWl0IHN0b3JhZ2Uuc2V0KFwidGFibGVEYXRhXCIsIHJvd3MpO1xyXG4gIGNvbnNvbGUubG9nKFwiW0NvbnRlbnQgU2NyaXB0XSBUYWJsZSBkYXRhIHNhdmVkIGluIHN0b3JhZ2UuXCIpO1xyXG59O1xyXG5cclxuXHJcbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcclxuICBpZiAobWVzc2FnZS5hY3Rpb24gPT09IFwiZXh0cmFjdF90YWJsZVwiKSB7XHJcbiAgICBleHRyYWN0VGFibGVEYXRhKCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHNlbmRSZXNwb25zZSh7IHN0YXR1czogXCJUYWJsZSBleHRyYWN0ZWRcIiB9KVxyXG4gICAgfSlcclxuICAgIHJldHVybiB0cnVlIFxyXG4gIH1cclxufSlcclxuIiwiaW1wb3J0IG0gZnJvbVwicGlmeVwiO3ZhciBsPSgpPT57dHJ5e2xldCBlPShnbG9iYWxUaGlzLm5hdmlnYXRvcj8udXNlckFnZW50KS5tYXRjaCgvKG9wZXJhfGNocm9tZXxzYWZhcml8ZmlyZWZveHxtc2llfHRyaWRlbnQoPz1cXC8pKVxcLz9cXHMqKFxcZCspL2kpfHxbXTtpZihlWzFdPT09XCJDaHJvbWVcIilyZXR1cm4gcGFyc2VJbnQoZVsyXSk8MTAwfHxnbG9iYWxUaGlzLmNocm9tZS5ydW50aW1lPy5nZXRNYW5pZmVzdCgpPy5tYW5pZmVzdF92ZXJzaW9uPT09Mn1jYXRjaHtyZXR1cm4hMX1yZXR1cm4hMX07dmFyIG89Y2xhc3N7I3I7I3Q7Z2V0IHByaW1hcnlDbGllbnQoKXtyZXR1cm4gdGhpcy4jdH0jZTtnZXQgc2Vjb25kYXJ5Q2xpZW50KCl7cmV0dXJuIHRoaXMuI2V9I2E7Z2V0IGFyZWEoKXtyZXR1cm4gdGhpcy4jYX1nZXQgaGFzV2ViQXBpKCl7dHJ5e3JldHVybiB0eXBlb2Ygd2luZG93PFwidVwiJiYhIXdpbmRvdy5sb2NhbFN0b3JhZ2V9Y2F0Y2goZSl7cmV0dXJuIGNvbnNvbGUuZXJyb3IoZSksITF9fSNzPW5ldyBNYXA7I2k7Z2V0IGNvcGllZEtleVNldCgpe3JldHVybiB0aGlzLiNpfWlzQ29waWVkPWU9PnRoaXMuaGFzV2ViQXBpJiYodGhpcy5hbGxDb3BpZWR8fHRoaXMuY29waWVkS2V5U2V0LmhhcyhlKSk7I249ITE7Z2V0IGFsbENvcGllZCgpe3JldHVybiB0aGlzLiNufWdldEV4dFN0b3JhZ2VBcGk9KCk9Pmdsb2JhbFRoaXMuYnJvd3Nlcj8uc3RvcmFnZXx8Z2xvYmFsVGhpcy5jaHJvbWU/LnN0b3JhZ2U7Z2V0IGhhc0V4dGVuc2lvbkFwaSgpe3RyeXtyZXR1cm4hIXRoaXMuZ2V0RXh0U3RvcmFnZUFwaSgpfWNhdGNoKGUpe3JldHVybiBjb25zb2xlLmVycm9yKGUpLCExfX1pc1dhdGNoU3VwcG9ydGVkPSgpPT50aGlzLmhhc0V4dGVuc2lvbkFwaTtrZXlOYW1lc3BhY2U9XCJcIjtpc1ZhbGlkS2V5PWU9PmUuc3RhcnRzV2l0aCh0aGlzLmtleU5hbWVzcGFjZSk7Z2V0TmFtZXNwYWNlZEtleT1lPT5gJHt0aGlzLmtleU5hbWVzcGFjZX0ke2V9YDtnZXRVbm5hbWVzcGFjZWRLZXk9ZT0+ZS5zbGljZSh0aGlzLmtleU5hbWVzcGFjZS5sZW5ndGgpO3NlcmRlPXtzZXJpYWxpemVyOkpTT04uc3RyaW5naWZ5LGRlc2VyaWFsaXplcjpKU09OLnBhcnNlfTtjb25zdHJ1Y3Rvcih7YXJlYTplPVwic3luY1wiLGFsbENvcGllZDp0PSExLGNvcGllZEtleUxpc3Q6cz1bXSxzZXJkZTpyPXt9fT17fSl7dGhpcy5zZXRDb3BpZWRLZXlTZXQocyksdGhpcy4jYT1lLHRoaXMuI249dCx0aGlzLnNlcmRlPXsuLi50aGlzLnNlcmRlLC4uLnJ9O3RyeXt0aGlzLmhhc1dlYkFwaSYmKHR8fHMubGVuZ3RoPjApJiYodGhpcy4jZT13aW5kb3cubG9jYWxTdG9yYWdlKX1jYXRjaHt9dHJ5e3RoaXMuaGFzRXh0ZW5zaW9uQXBpJiYodGhpcy4jcj10aGlzLmdldEV4dFN0b3JhZ2VBcGkoKSxsKCk/dGhpcy4jdD1tKHRoaXMuI3JbdGhpcy5hcmVhXSx7ZXhjbHVkZTpbXCJnZXRCeXRlc0luVXNlXCJdLGVycm9yRmlyc3Q6ITF9KTp0aGlzLiN0PXRoaXMuI3JbdGhpcy5hcmVhXSl9Y2F0Y2h7fX1zZXRDb3BpZWRLZXlTZXQoZSl7dGhpcy4jaT1uZXcgU2V0KGUpfXJhd0dldEFsbD0oKT0+dGhpcy4jdD8uZ2V0KCk7Z2V0QWxsPWFzeW5jKCk9PntsZXQgZT1hd2FpdCB0aGlzLnJhd0dldEFsbCgpO3JldHVybiBPYmplY3QuZW50cmllcyhlKS5maWx0ZXIoKFt0XSk9PnRoaXMuaXNWYWxpZEtleSh0KSkucmVkdWNlKCh0LFtzLHJdKT0+KHRbdGhpcy5nZXRVbm5hbWVzcGFjZWRLZXkocyldPXIsdCkse30pfTtjb3B5PWFzeW5jIGU9PntsZXQgdD1lPT09dm9pZCAwO2lmKCF0JiYhdGhpcy5jb3BpZWRLZXlTZXQuaGFzKGUpfHwhdGhpcy5hbGxDb3BpZWR8fCF0aGlzLmhhc0V4dGVuc2lvbkFwaSlyZXR1cm4hMTtsZXQgcz10aGlzLmFsbENvcGllZD9hd2FpdCB0aGlzLnJhd0dldEFsbCgpOmF3YWl0IHRoaXMuI3QuZ2V0KCh0P1suLi50aGlzLmNvcGllZEtleVNldF06W2VdKS5tYXAodGhpcy5nZXROYW1lc3BhY2VkS2V5KSk7aWYoIXMpcmV0dXJuITE7bGV0IHI9ITE7Zm9yKGxldCBhIGluIHMpe2xldCBpPXNbYV0sbj10aGlzLiNlPy5nZXRJdGVtKGEpO3RoaXMuI2U/LnNldEl0ZW0oYSxpKSxyfHw9aSE9PW59cmV0dXJuIHJ9O3Jhd0dldD1hc3luYyBlPT4oYXdhaXQgdGhpcy5yYXdHZXRNYW55KFtlXSkpW2VdO3Jhd0dldE1hbnk9YXN5bmMgZT0+dGhpcy5oYXNFeHRlbnNpb25BcGk/YXdhaXQgdGhpcy4jdC5nZXQoZSk6ZS5maWx0ZXIodGhpcy5pc0NvcGllZCkucmVkdWNlKCh0LHMpPT4odFtzXT10aGlzLiNlPy5nZXRJdGVtKHMpLHQpLHt9KTtyYXdTZXQ9YXN5bmMoZSx0KT0+YXdhaXQgdGhpcy5yYXdTZXRNYW55KHtbZV06dH0pO3Jhd1NldE1hbnk9YXN5bmMgZT0+KHRoaXMuI2UmJk9iamVjdC5lbnRyaWVzKGUpLmZpbHRlcigoW3RdKT0+dGhpcy5pc0NvcGllZCh0KSkuZm9yRWFjaCgoW3Qsc10pPT50aGlzLiNlLnNldEl0ZW0odCxzKSksdGhpcy5oYXNFeHRlbnNpb25BcGkmJmF3YWl0IHRoaXMuI3Quc2V0KGUpLG51bGwpO2NsZWFyPWFzeW5jKGU9ITEpPT57ZSYmdGhpcy4jZT8uY2xlYXIoKSxhd2FpdCB0aGlzLiN0LmNsZWFyKCl9O3Jhd1JlbW92ZT1hc3luYyBlPT57YXdhaXQgdGhpcy5yYXdSZW1vdmVNYW55KFtlXSl9O3Jhd1JlbW92ZU1hbnk9YXN5bmMgZT0+e3RoaXMuI2UmJmUuZmlsdGVyKHRoaXMuaXNDb3BpZWQpLmZvckVhY2godD0+dGhpcy4jZS5yZW1vdmVJdGVtKHQpKSx0aGlzLmhhc0V4dGVuc2lvbkFwaSYmYXdhaXQgdGhpcy4jdC5yZW1vdmUoZSl9O3JlbW92ZUFsbD1hc3luYygpPT57bGV0IGU9YXdhaXQgdGhpcy5nZXRBbGwoKSx0PU9iamVjdC5rZXlzKGUpO2F3YWl0IHRoaXMucmVtb3ZlTWFueSh0KX07d2F0Y2g9ZT0+e2xldCB0PXRoaXMuaXNXYXRjaFN1cHBvcnRlZCgpO3JldHVybiB0JiZ0aGlzLiNvKGUpLHR9OyNvPWU9Pntmb3IobGV0IHQgaW4gZSl7bGV0IHM9dGhpcy5nZXROYW1lc3BhY2VkS2V5KHQpLHI9dGhpcy4jcy5nZXQocyk/LmNhbGxiYWNrU2V0fHxuZXcgU2V0O2lmKHIuYWRkKGVbdF0pLHIuc2l6ZT4xKWNvbnRpbnVlO2xldCBhPShpLG4pPT57aWYobiE9PXRoaXMuYXJlYXx8IWlbc10pcmV0dXJuO2xldCBoPXRoaXMuI3MuZ2V0KHMpO2lmKCFoKXRocm93IG5ldyBFcnJvcihgU3RvcmFnZSBjb21tcyBkb2VzIG5vdCBleGlzdCBmb3IgbnNLZXk6ICR7c31gKTtQcm9taXNlLmFsbChbdGhpcy5wYXJzZVZhbHVlKGlbc10ubmV3VmFsdWUpLHRoaXMucGFyc2VWYWx1ZShpW3NdLm9sZFZhbHVlKV0pLnRoZW4oKFt5LGRdKT0+e2ZvcihsZXQgcCBvZiBoLmNhbGxiYWNrU2V0KXAoe25ld1ZhbHVlOnksb2xkVmFsdWU6ZH0sbil9KX07dGhpcy4jci5vbkNoYW5nZWQuYWRkTGlzdGVuZXIoYSksdGhpcy4jcy5zZXQocyx7Y2FsbGJhY2tTZXQ6cixsaXN0ZW5lcjphfSl9fTt1bndhdGNoPWU9PntsZXQgdD10aGlzLmlzV2F0Y2hTdXBwb3J0ZWQoKTtyZXR1cm4gdCYmdGhpcy4jYyhlKSx0fTsjYyhlKXtmb3IobGV0IHQgaW4gZSl7bGV0IHM9dGhpcy5nZXROYW1lc3BhY2VkS2V5KHQpLHI9ZVt0XSxhPXRoaXMuI3MuZ2V0KHMpO2EmJihhLmNhbGxiYWNrU2V0LmRlbGV0ZShyKSxhLmNhbGxiYWNrU2V0LnNpemU9PT0wJiYodGhpcy4jcy5kZWxldGUocyksdGhpcy4jci5vbkNoYW5nZWQucmVtb3ZlTGlzdGVuZXIoYS5saXN0ZW5lcikpKX19dW53YXRjaEFsbD0oKT0+dGhpcy4jaCgpOyNoKCl7dGhpcy4jcy5mb3JFYWNoKCh7bGlzdGVuZXI6ZX0pPT50aGlzLiNyLm9uQ2hhbmdlZC5yZW1vdmVMaXN0ZW5lcihlKSksdGhpcy4jcy5jbGVhcigpfWFzeW5jIGdldEl0ZW0oZSl7cmV0dXJuIHRoaXMuZ2V0KGUpfWFzeW5jIGdldEl0ZW1zKGUpe3JldHVybiBhd2FpdCB0aGlzLmdldE1hbnkoZSl9YXN5bmMgc2V0SXRlbShlLHQpe2F3YWl0IHRoaXMuc2V0KGUsdCl9YXN5bmMgc2V0SXRlbXMoZSl7YXdhaXQgYXdhaXQgdGhpcy5zZXRNYW55KGUpfWFzeW5jIHJlbW92ZUl0ZW0oZSl7cmV0dXJuIHRoaXMucmVtb3ZlKGUpfWFzeW5jIHJlbW92ZUl0ZW1zKGUpe3JldHVybiBhd2FpdCB0aGlzLnJlbW92ZU1hbnkoZSl9fSxnPWNsYXNzIGV4dGVuZHMgb3tnZXQ9YXN5bmMgZT0+e2xldCB0PXRoaXMuZ2V0TmFtZXNwYWNlZEtleShlKSxzPWF3YWl0IHRoaXMucmF3R2V0KHQpO3JldHVybiB0aGlzLnBhcnNlVmFsdWUocyl9O2dldE1hbnk9YXN5bmMgZT0+e2xldCB0PWUubWFwKHRoaXMuZ2V0TmFtZXNwYWNlZEtleSkscz1hd2FpdCB0aGlzLnJhd0dldE1hbnkodCkscj1hd2FpdCBQcm9taXNlLmFsbChPYmplY3QudmFsdWVzKHMpLm1hcCh0aGlzLnBhcnNlVmFsdWUpKTtyZXR1cm4gT2JqZWN0LmtleXMocykucmVkdWNlKChhLGksbik9PihhW3RoaXMuZ2V0VW5uYW1lc3BhY2VkS2V5KGkpXT1yW25dLGEpLHt9KX07c2V0PWFzeW5jKGUsdCk9PntsZXQgcz10aGlzLmdldE5hbWVzcGFjZWRLZXkoZSkscj10aGlzLnNlcmRlLnNlcmlhbGl6ZXIodCk7cmV0dXJuIHRoaXMucmF3U2V0KHMscil9O3NldE1hbnk9YXN5bmMgZT0+e2xldCB0PU9iamVjdC5lbnRyaWVzKGUpLnJlZHVjZSgocyxbcixhXSk9PihzW3RoaXMuZ2V0TmFtZXNwYWNlZEtleShyKV09dGhpcy5zZXJkZS5zZXJpYWxpemVyKGEpLHMpLHt9KTtyZXR1cm4gYXdhaXQgdGhpcy5yYXdTZXRNYW55KHQpfTtyZW1vdmU9YXN5bmMgZT0+e2xldCB0PXRoaXMuZ2V0TmFtZXNwYWNlZEtleShlKTtyZXR1cm4gdGhpcy5yYXdSZW1vdmUodCl9O3JlbW92ZU1hbnk9YXN5bmMgZT0+e2xldCB0PWUubWFwKHRoaXMuZ2V0TmFtZXNwYWNlZEtleSk7cmV0dXJuIGF3YWl0IHRoaXMucmF3UmVtb3ZlTWFueSh0KX07c2V0TmFtZXNwYWNlPWU9Pnt0aGlzLmtleU5hbWVzcGFjZT1lfTtwYXJzZVZhbHVlPWFzeW5jIGU9Pnt0cnl7aWYoZSE9PXZvaWQgMClyZXR1cm4gdGhpcy5zZXJkZS5kZXNlcmlhbGl6ZXIoZSl9Y2F0Y2godCl7Y29uc29sZS5lcnJvcih0KX19fTtleHBvcnR7byBhcyBCYXNlU3RvcmFnZSxnIGFzIFN0b3JhZ2V9O1xuIiwiY29uc3QgcHJvY2Vzc0Z1bmN0aW9uID0gKGZ1bmN0aW9uXywgb3B0aW9ucywgcHJveHksIHVud3JhcHBlZCkgPT4gZnVuY3Rpb24gKC4uLmFyZ3VtZW50c18pIHtcblx0Y29uc3QgUCA9IG9wdGlvbnMucHJvbWlzZU1vZHVsZTtcblxuXHRyZXR1cm4gbmV3IFAoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdGlmIChvcHRpb25zLm11bHRpQXJncykge1xuXHRcdFx0YXJndW1lbnRzXy5wdXNoKCguLi5yZXN1bHQpID0+IHtcblx0XHRcdFx0aWYgKG9wdGlvbnMuZXJyb3JGaXJzdCkge1xuXHRcdFx0XHRcdGlmIChyZXN1bHRbMF0pIHtcblx0XHRcdFx0XHRcdHJlamVjdChyZXN1bHQpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQuc2hpZnQoKTtcblx0XHRcdFx0XHRcdHJlc29sdmUocmVzdWx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzb2x2ZShyZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgaWYgKG9wdGlvbnMuZXJyb3JGaXJzdCkge1xuXHRcdFx0YXJndW1lbnRzXy5wdXNoKChlcnJvciwgcmVzdWx0KSA9PiB7XG5cdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzb2x2ZShyZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXJndW1lbnRzXy5wdXNoKHJlc29sdmUpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzID09PSBwcm94eSA/IHVud3JhcHBlZCA6IHRoaXM7XG5cdFx0UmVmbGVjdC5hcHBseShmdW5jdGlvbl8sIHNlbGYsIGFyZ3VtZW50c18pO1xuXHR9KTtcbn07XG5cbmNvbnN0IGZpbHRlckNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGlmeShpbnB1dCwgb3B0aW9ucykge1xuXHRvcHRpb25zID0ge1xuXHRcdGV4Y2x1ZGU6IFsvLisoPzpTeW5jfFN0cmVhbSkkL10sXG5cdFx0ZXJyb3JGaXJzdDogdHJ1ZSxcblx0XHRwcm9taXNlTW9kdWxlOiBQcm9taXNlLFxuXHRcdC4uLm9wdGlvbnMsXG5cdH07XG5cblx0Y29uc3Qgb2JqZWN0VHlwZSA9IHR5cGVvZiBpbnB1dDtcblx0aWYgKCEoaW5wdXQgIT09IG51bGwgJiYgKG9iamVjdFR5cGUgPT09ICdvYmplY3QnIHx8IG9iamVjdFR5cGUgPT09ICdmdW5jdGlvbicpKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIFxcYGlucHV0XFxgIHRvIGJlIGEgXFxgRnVuY3Rpb25cXGAgb3IgXFxgT2JqZWN0XFxgLCBnb3QgXFxgJHtpbnB1dCA9PT0gbnVsbCA/ICdudWxsJyA6IG9iamVjdFR5cGV9XFxgYCk7XG5cdH1cblxuXHRjb25zdCBmaWx0ZXIgPSAodGFyZ2V0LCBrZXkpID0+IHtcblx0XHRsZXQgY2FjaGVkID0gZmlsdGVyQ2FjaGUuZ2V0KHRhcmdldCk7XG5cblx0XHRpZiAoIWNhY2hlZCkge1xuXHRcdFx0Y2FjaGVkID0ge307XG5cdFx0XHRmaWx0ZXJDYWNoZS5zZXQodGFyZ2V0LCBjYWNoZWQpO1xuXHRcdH1cblxuXHRcdGlmIChrZXkgaW4gY2FjaGVkKSB7XG5cdFx0XHRyZXR1cm4gY2FjaGVkW2tleV07XG5cdFx0fVxuXG5cdFx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuID0+ICh0eXBlb2YgcGF0dGVybiA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGtleSA9PT0gJ3N5bWJvbCcpID8ga2V5ID09PSBwYXR0ZXJuIDogcGF0dGVybi50ZXN0KGtleSk7XG5cdFx0Y29uc3QgZGVzY3JpcHRvciA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcblx0XHRjb25zdCB3cml0YWJsZU9yQ29uZmlndXJhYmxlT3duID0gKGRlc2NyaXB0b3IgPT09IHVuZGVmaW5lZCB8fCBkZXNjcmlwdG9yLndyaXRhYmxlIHx8IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlKTtcblx0XHRjb25zdCBpbmNsdWRlZCA9IG9wdGlvbnMuaW5jbHVkZSA/IG9wdGlvbnMuaW5jbHVkZS5zb21lKGVsZW1lbnQgPT4gbWF0Y2goZWxlbWVudCkpIDogIW9wdGlvbnMuZXhjbHVkZS5zb21lKGVsZW1lbnQgPT4gbWF0Y2goZWxlbWVudCkpO1xuXHRcdGNvbnN0IHNob3VsZEZpbHRlciA9IGluY2x1ZGVkICYmIHdyaXRhYmxlT3JDb25maWd1cmFibGVPd247XG5cdFx0Y2FjaGVkW2tleV0gPSBzaG91bGRGaWx0ZXI7XG5cdFx0cmV0dXJuIHNob3VsZEZpbHRlcjtcblx0fTtcblxuXHRjb25zdCBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cblx0Y29uc3QgcHJveHkgPSBuZXcgUHJveHkoaW5wdXQsIHtcblx0XHRhcHBseSh0YXJnZXQsIHRoaXNBcmcsIGFyZ3MpIHtcblx0XHRcdGNvbnN0IGNhY2hlZCA9IGNhY2hlLmdldCh0YXJnZXQpO1xuXG5cdFx0XHRpZiAoY2FjaGVkKSB7XG5cdFx0XHRcdHJldHVybiBSZWZsZWN0LmFwcGx5KGNhY2hlZCwgdGhpc0FyZywgYXJncyk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHBpZmllZCA9IG9wdGlvbnMuZXhjbHVkZU1haW4gPyB0YXJnZXQgOiBwcm9jZXNzRnVuY3Rpb24odGFyZ2V0LCBvcHRpb25zLCBwcm94eSwgdGFyZ2V0KTtcblx0XHRcdGNhY2hlLnNldCh0YXJnZXQsIHBpZmllZCk7XG5cdFx0XHRyZXR1cm4gUmVmbGVjdC5hcHBseShwaWZpZWQsIHRoaXNBcmcsIGFyZ3MpO1xuXHRcdH0sXG5cblx0XHRnZXQodGFyZ2V0LCBrZXkpIHtcblx0XHRcdGNvbnN0IHByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG5cblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtZXh0ZW5kLW5hdGl2ZS9uby11c2UtZXh0ZW5kLW5hdGl2ZVxuXHRcdFx0aWYgKCFmaWx0ZXIodGFyZ2V0LCBrZXkpIHx8IHByb3BlcnR5ID09PSBGdW5jdGlvbi5wcm90b3R5cGVba2V5XSkge1xuXHRcdFx0XHRyZXR1cm4gcHJvcGVydHk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGNhY2hlZCA9IGNhY2hlLmdldChwcm9wZXJ0eSk7XG5cblx0XHRcdGlmIChjYWNoZWQpIHtcblx0XHRcdFx0cmV0dXJuIGNhY2hlZDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHR5cGVvZiBwcm9wZXJ0eSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjb25zdCBwaWZpZWQgPSBwcm9jZXNzRnVuY3Rpb24ocHJvcGVydHksIG9wdGlvbnMsIHByb3h5LCB0YXJnZXQpO1xuXHRcdFx0XHRjYWNoZS5zZXQocHJvcGVydHksIHBpZmllZCk7XG5cdFx0XHRcdHJldHVybiBwaWZpZWQ7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBwcm9wZXJ0eTtcblx0XHR9LFxuXHR9KTtcblxuXHRyZXR1cm4gcHJveHk7XG59XG4iLCJleHBvcnRzLmludGVyb3BEZWZhdWx0ID0gZnVuY3Rpb24gKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS5fX2VzTW9kdWxlID8gYSA6IHtkZWZhdWx0OiBhfTtcbn07XG5cbmV4cG9ydHMuZGVmaW5lSW50ZXJvcEZsYWcgPSBmdW5jdGlvbiAoYSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgJ19fZXNNb2R1bGUnLCB7dmFsdWU6IHRydWV9KTtcbn07XG5cbmV4cG9ydHMuZXhwb3J0QWxsID0gZnVuY3Rpb24gKHNvdXJjZSwgZGVzdCkge1xuICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChrZXkgPT09ICdkZWZhdWx0JyB8fCBrZXkgPT09ICdfX2VzTW9kdWxlJyB8fCBkZXN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwga2V5LCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Vba2V5XTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXN0O1xufTtcblxuZXhwb3J0cy5leHBvcnQgPSBmdW5jdGlvbiAoZGVzdCwgZGVzdE5hbWUsIGdldCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwgZGVzdE5hbWUsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZ2V0LFxuICB9KTtcbn07XG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC40ODBjMDBhMy5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);