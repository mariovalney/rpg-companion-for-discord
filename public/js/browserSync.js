/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/browserSync.js":
/*!*************************************!*\
  !*** ./resources/js/browserSync.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

window.___browserSync___ = {};
___browserSync___.socketConfig = {
  "reconnectionAttempts": 50,
  "path": "/browser-sync/socket.io"
};
___browserSync___.socketUrl = 'http://localhost:3000/browser-sync';
___browserSync___.options = {
  "logLevel": "info",
  "plugins": [],
  "port": 3000,
  "snippetOptions": {
    "async": true,
    "whitelist": [],
    "blacklist": [],
    "rule": {
      "match": {}
    }
  },
  "reloadDebounce": 500,
  "mode": "proxy",
  "scriptPaths": {
    "path": "/browser-sync/browser-sync-client.js",
    "versioned": "/browser-sync/browser-sync-client.js?v=2.26.12"
  },
  "server": false,
  "logFileChanges": true,
  "reloadThrottle": 0,
  "clientEvents": ["scroll", "scroll:element", "input:text", "input:toggles", "form:submit", "form:reset", "click"],
  "urls": {
    "local": "http://localhost:3000",
    "external": "http://192.168.1.103:3000"
  },
  "hostnameSuffix": false,
  "scrollElements": [],
  "scheme": "http",
  "startPath": null,
  "single": false,
  "host": "localhost",
  "codeSync": true,
  "watchEvents": ["change"],
  "browser": "default",
  "notify": true,
  "open": false,
  "reloadDelay": 0,
  "minify": true,
  "rewriteRules": [],
  "injectFileTypes": ["css", "png", "jpg", "jpeg", "svg", "gif", "webp", "map"],
  "cors": false,
  "proxy": {
    "target": "http://app.test",
    "url": {
      "port": "80",
      "path": "/",
      "query": null,
      "auth": null,
      "search": null,
      "host": "app.test",
      "slashes": true,
      "href": "http://app.test/",
      "hash": null,
      "pathname": "/",
      "hostname": "app.test",
      "protocol": "http:"
    }
  },
  "tagNames": {
    "jpg": "img",
    "css": "link",
    "svg": "img",
    "gif": "img",
    "jpeg": "img",
    "js": "script",
    "png": "img",
    "scss": "link",
    "less": "link"
  },
  "scrollRestoreTechnique": "window.name",
  "watch": false,
  "watchOptions": {
    "ignoreInitial": true,
    "cwd": "/home/valney/Projetos/rpg-companion-for-discord"
  },
  "cwd": "/home/valney/Projetos/rpg-companion-for-discord",
  "logConnections": false,
  "ghostMode": {
    "clicks": true,
    "scroll": true,
    "location": true,
    "forms": {
      "submit": true,
      "inputs": true,
      "toggles": true
    }
  },
  "middleware": [{
    "id": "Browsersync Proxy",
    "route": ""
  }],
  "ignore": [],
  "injectChanges": true,
  "excludedFileTypes": ["js", "css", "pdf", "map", "svg", "ico", "woff", "json", "eot", "ttf", "png", "jpg", "jpeg", "webp", "gif", "mp4", "mp3", "3gp", "ogg", "ogv", "webm", "m4a", "flv", "wmv", "avi", "swf", "scss"],
  "online": true,
  "socket": {
    "socketIoOptions": {
      "log": false
    },
    "socketIoClientConfig": {
      "reconnectionAttempts": 50
    },
    "path": "/browser-sync/socket.io",
    "clientPath": "/browser-sync",
    "namespace": "/browser-sync",
    "clients": {
      "heartbeatTimeout": 5000
    }
  },
  "ui": {
    "port": 3001
  },
  "logPrefix": "Browsersync",
  "scrollThrottle": 0,
  "reloadOnRestart": false,
  "localOnly": false,
  "files": {
    "core": {
      "globs": ["app/**/*.php", "resources/views/**/*.php", "public/**/*.(js|css)"],
      "objs": []
    }
  },
  "version": "2.26.12",
  "logSnippet": true,
  "injectNotification": false,
  "snippet": "<script id=\"__bs_script__\">//<![CDATA[\n    document.write(\"<script async src='/browser-sync/browser-sync-client.js?v=2.26.12'><\\/script>\".replace(\"HOST\", location.hostname));\n//]]></script>\n",
  "timestamps": true,
  "serveStatic": [],
  "scrollElementMapping": [],
  "scrollProportionally": true,
  "xip": false
};
!function (t) {
  function e(n) {
    if (r[n]) return r[n].exports;
    var o = r[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return t[n].call(o.exports, o, o.exports, e), o.l = !0, o.exports;
  }

  var r = {};
  e.m = t, e.c = r, e.d = function (t, r, n) {
    e.o(t, r) || Object.defineProperty(t, r, {
      configurable: !1,
      enumerable: !0,
      get: n
    });
  }, e.n = function (t) {
    var r = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return e.d(r, "a", r), r;
  }, e.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, e.p = "", e(e.s = 99);
}([function (t, e, r) {
  "use strict";

  function n() {
    for (var t = [], e = 0; e < arguments.length; e++) {
      t[e - 0] = arguments[e];
    }

    return function (e) {
      var r;
      "function" == typeof t[t.length - 1] && (r = t.pop());
      var n = t;
      return e.lift(new c(n, r));
    };
  }

  var o = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      i = r(29),
      s = r(30);

  e.withLatestFrom = n;

  var c = function () {
    function t(t, e) {
      this.observables = t, this.project = e;
    }

    return t.prototype.call = function (t, e) {
      return e.subscribe(new a(t, this.observables, this.project));
    }, t;
  }(),
      a = function (t) {
    function e(e, r, n) {
      t.call(this, e), this.observables = r, this.project = n, this.toRespond = [];
      var o = r.length;
      this.values = new Array(o);

      for (var i = 0; i < o; i++) {
        this.toRespond.push(i);
      }

      for (var i = 0; i < o; i++) {
        var c = r[i];
        this.add(s.subscribeToResult(this, c, c, i));
      }
    }

    return o(e, t), e.prototype.notifyNext = function (t, e, r, n, o) {
      this.values[r] = e;
      var i = this.toRespond;

      if (i.length > 0) {
        var s = i.indexOf(r);
        -1 !== s && i.splice(s, 1);
      }
    }, e.prototype.notifyComplete = function () {}, e.prototype._next = function (t) {
      if (0 === this.toRespond.length) {
        var e = [t].concat(this.values);
        this.project ? this._tryProject(e) : this.destination.next(e);
      }
    }, e.prototype._tryProject = function (t) {
      var e;

      try {
        e = this.project.apply(this, t);
      } catch (t) {
        return void this.destination.error(t);
      }

      this.destination.next(e);
    }, e;
  }(i.OuterSubscriber);
}, function (t, e, r) {
  "use strict";

  var n = r(7),
      o = r(103),
      i = r(45),
      s = r(105),
      c = function () {
    function t(t) {
      this._isScalar = !1, t && (this._subscribe = t);
    }

    return t.prototype.lift = function (e) {
      var r = new t();
      return r.source = this, r.operator = e, r;
    }, t.prototype.subscribe = function (t, e, r) {
      var n = this.operator,
          i = o.toSubscriber(t, e, r);
      if (n ? n.call(i, this.source) : i.add(this.source || !i.syncErrorThrowable ? this._subscribe(i) : this._trySubscribe(i)), i.syncErrorThrowable && (i.syncErrorThrowable = !1, i.syncErrorThrown)) throw i.syncErrorValue;
      return i;
    }, t.prototype._trySubscribe = function (t) {
      try {
        return this._subscribe(t);
      } catch (e) {
        t.syncErrorThrown = !0, t.syncErrorValue = e, t.error(e);
      }
    }, t.prototype.forEach = function (t, e) {
      var r = this;
      if (e || (n.root.Rx && n.root.Rx.config && n.root.Rx.config.Promise ? e = n.root.Rx.config.Promise : n.root.Promise && (e = n.root.Promise)), !e) throw new Error("no Promise impl found");
      return new e(function (e, n) {
        var o;
        o = r.subscribe(function (e) {
          if (o) try {
            t(e);
          } catch (t) {
            n(t), o.unsubscribe();
          } else t(e);
        }, n, e);
      });
    }, t.prototype._subscribe = function (t) {
      return this.source.subscribe(t);
    }, t.prototype[i.observable] = function () {
      return this;
    }, t.prototype.pipe = function () {
      for (var t = [], e = 0; e < arguments.length; e++) {
        t[e - 0] = arguments[e];
      }

      return 0 === t.length ? this : s.pipeFromArray(t)(this);
    }, t.prototype.toPromise = function (t) {
      var e = this;
      if (t || (n.root.Rx && n.root.Rx.config && n.root.Rx.config.Promise ? t = n.root.Rx.config.Promise : n.root.Promise && (t = n.root.Promise)), !t) throw new Error("no Promise impl found");
      return new t(function (t, r) {
        var n;
        e.subscribe(function (t) {
          return n = t;
        }, function (t) {
          return r(t);
        }, function () {
          return t(n);
        });
      });
    }, t.create = function (e) {
      return new t(e);
    }, t;
  }();

  e.Observable = c;
}, function (t, e, r) {
  "use strict";

  function n(t, e) {
    return function (r) {
      if ("function" != typeof t) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
      return r.lift(new s(t, e));
    };
  }

  var o = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      i = r(3);

  e.map = n;

  var s = function () {
    function t(t, e) {
      this.project = t, this.thisArg = e;
    }

    return t.prototype.call = function (t, e) {
      return e.subscribe(new c(t, this.project, this.thisArg));
    }, t;
  }();

  e.MapOperator = s;

  var c = function (t) {
    function e(e, r, n) {
      t.call(this, e), this.project = r, this.count = 0, this.thisArg = n || this;
    }

    return o(e, t), e.prototype._next = function (t) {
      var e;

      try {
        e = this.project.call(this.thisArg, t, this.count++);
      } catch (t) {
        return void this.destination.error(t);
      }

      this.destination.next(e);
    }, e;
  }(i.Subscriber);
}, function (t, e, r) {
  "use strict";

  function n(t) {
    return t instanceof u || "syncErrorThrowable" in t && t[a.rxSubscriber];
  }

  var o = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      i = r(42),
      s = r(12),
      c = r(57),
      a = r(44),
      u = function (t) {
    function e(e, r, o) {
      switch (t.call(this), this.syncErrorValue = null, this.syncErrorThrown = !1, this.syncErrorThrowable = !1, this.isStopped = !1, arguments.length) {
        case 0:
          this.destination = c.empty;
          break;

        case 1:
          if (!e) {
            this.destination = c.empty;
            break;
          }

          if ("object" == _typeof(e)) {
            if (n(e)) {
              var i = e[a.rxSubscriber]();
              this.syncErrorThrowable = i.syncErrorThrowable, this.destination = i, i.add(this);
            } else this.syncErrorThrowable = !0, this.destination = new f(this, e);

            break;
          }

        default:
          this.syncErrorThrowable = !0, this.destination = new f(this, e, r, o);
      }
    }

    return o(e, t), e.prototype[a.rxSubscriber] = function () {
      return this;
    }, e.create = function (t, r, n) {
      var o = new e(t, r, n);
      return o.syncErrorThrowable = !1, o;
    }, e.prototype.next = function (t) {
      this.isStopped || this._next(t);
    }, e.prototype.error = function (t) {
      this.isStopped || (this.isStopped = !0, this._error(t));
    }, e.prototype.complete = function () {
      this.isStopped || (this.isStopped = !0, this._complete());
    }, e.prototype.unsubscribe = function () {
      this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this));
    }, e.prototype._next = function (t) {
      this.destination.next(t);
    }, e.prototype._error = function (t) {
      this.destination.error(t), this.unsubscribe();
    }, e.prototype._complete = function () {
      this.destination.complete(), this.unsubscribe();
    }, e.prototype._unsubscribeAndRecycle = function () {
      var t = this,
          e = t._parent,
          r = t._parents;
      return this._parent = null, this._parents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parent = e, this._parents = r, this;
    }, e;
  }(s.Subscription);

  e.Subscriber = u;

  var f = function (t) {
    function e(e, r, n, o) {
      t.call(this), this._parentSubscriber = e;
      var s,
          a = this;
      i.isFunction(r) ? s = r : r && (s = r.next, n = r.error, o = r.complete, r !== c.empty && (a = Object.create(r), i.isFunction(a.unsubscribe) && this.add(a.unsubscribe.bind(a)), a.unsubscribe = this.unsubscribe.bind(this))), this._context = a, this._next = s, this._error = n, this._complete = o;
    }

    return o(e, t), e.prototype.next = function (t) {
      if (!this.isStopped && this._next) {
        var e = this._parentSubscriber;
        e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t);
      }
    }, e.prototype.error = function (t) {
      if (!this.isStopped) {
        var e = this._parentSubscriber;
        if (this._error) e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe());else {
          if (!e.syncErrorThrowable) throw this.unsubscribe(), t;
          e.syncErrorValue = t, e.syncErrorThrown = !0, this.unsubscribe();
        }
      }
    }, e.prototype.complete = function () {
      var t = this;

      if (!this.isStopped) {
        var e = this._parentSubscriber;

        if (this._complete) {
          var r = function r() {
            return t._complete.call(t._context);
          };

          e.syncErrorThrowable ? (this.__tryOrSetError(e, r), this.unsubscribe()) : (this.__tryOrUnsub(r), this.unsubscribe());
        } else this.unsubscribe();
      }
    }, e.prototype.__tryOrUnsub = function (t, e) {
      try {
        t.call(this._context, e);
      } catch (t) {
        throw this.unsubscribe(), t;
      }
    }, e.prototype.__tryOrSetError = function (t, e, r) {
      try {
        e.call(this._context, r);
      } catch (e) {
        return t.syncErrorValue = e, t.syncErrorThrown = !0, !0;
      }

      return !1;
    }, e.prototype._unsubscribe = function () {
      var t = this._parentSubscriber;
      this._context = null, this._parentSubscriber = null, t.unsubscribe();
    }, e;
  }(u);
}, function (t, e, r) {
  "use strict";

  function n(t, e) {
    return function (r) {
      return r.lift(new s(t, e));
    };
  }

  var o = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      i = r(3);

  e.filter = n;

  var s = function () {
    function t(t, e) {
      this.predicate = t, this.thisArg = e;
    }

    return t.prototype.call = function (t, e) {
      return e.subscribe(new c(t, this.predicate, this.thisArg));
    }, t;
  }(),
      c = function (t) {
    function e(e, r, n) {
      t.call(this, e), this.predicate = r, this.thisArg = n, this.count = 0;
    }

    return o(e, t), e.prototype._next = function (t) {
      var e;

      try {
        e = this.predicate.call(this.thisArg, t, this.count++);
      } catch (t) {
        return void this.destination.error(t);
      }

      e && this.destination.next(t);
    }, e;
  }(i.Subscriber);
}, function (t, e, r) {
  "use strict";

  function n(t, e, r) {
    return function (n) {
      return n.lift(new s(t, e, r));
    };
  }

  var o = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      i = r(3);

  e.tap = n;

  var s = function () {
    function t(t, e, r) {
      this.nextOrObserver = t, this.error = e, this.complete = r;
    }

    return t.prototype.call = function (t, e) {
      return e.subscribe(new c(t, this.nextOrObserver, this.error, this.complete));
    }, t;
  }(),
      c = function (t) {
    function e(e, r, n, o) {
      t.call(this, e);
      var s = new i.Subscriber(r, n, o);
      s.syncErrorThrowable = !0, this.add(s), this.safeSubscriber = s;
    }

    return o(e, t), e.prototype._next = function (t) {
      var e = this.safeSubscriber;
      e.next(t), e.syncErrorThrown ? this.destination.error(e.syncErrorValue) : this.destination.next(t);
    }, e.prototype._error = function (t) {
      var e = this.safeSubscriber;
      e.error(t), e.syncErrorThrown ? this.destination.error(e.syncErrorValue) : this.destination.error(t);
    }, e.prototype._complete = function () {
      var t = this.safeSubscriber;
      t.complete(), t.syncErrorThrown ? this.destination.error(t.syncErrorValue) : this.destination.complete();
    }, e;
  }(i.Subscriber);
}, function (t, e, r) {
  "use strict";

  function n() {
    for (var t = [], e = 0; e < arguments.length; e++) {
      t[e - 0] = arguments[e];
    }

    var r = t.length;
    if (0 === r) throw new Error("list of properties cannot be empty.");
    return function (e) {
      return i.map(o(t, r))(e);
    };
  }

  function o(t, e) {
    return function (r) {
      for (var n = r, o = 0; o < e; o++) {
        var i = n[t[o]];
        if (void 0 === i) return;
        n = i;
      }

      return n;
    };
  }

  var i = r(2);
  e.pluck = n;
}, function (t, e, r) {
  "use strict";

  (function (t) {
    var r = "undefined" != typeof window && window,
        n = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
        o = void 0 !== t && t,
        i = r || o || n;
    e.root = i, function () {
      if (!i) throw new Error("RxJS could not find any global context (window, self, global)");
    }();
  }).call(e, r(24));
}, function (t, e, r) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var n,
      o,
      i = r(13),
      s = r(53),
      c = r(86),
      a = r(89),
      u = r(90),
      f = r(91),
      p = r(92),
      l = r(153),
      h = r(93);
  !function (t) {
    t.FileReload = "@@FileReload", t.PreBrowserReload = "@@PreBrowserReload", t.BrowserReload = "@@BrowserReload", t.BrowserSetLocation = "@@BrowserSetLocation", t.BrowserSetScroll = "@@BrowserSetScroll", t.SetOptions = "@@SetOptions", t.SimulateClick = "@@SimulateClick", t.SetElementValue = "@@SetElementValue", t.SetElementToggleValue = "@@SetElementToggleValue";
  }(o = e.EffectNames || (e.EffectNames = {})), e.effectOutputHandlers$ = new i.BehaviorSubject((n = {}, n[o.SetOptions] = s.setOptionsEffect, n[o.FileReload] = c.fileReloadEffect, n[o.BrowserReload] = h.browserReloadEffect, n[o.BrowserSetLocation] = a.browserSetLocationEffect, n[o.SimulateClick] = u.simulateClickEffect, n[o.SetElementValue] = f.setElementValueEffect, n[o.SetElementToggleValue] = p.setElementToggleValueEffect, n[o.BrowserSetScroll] = l.setScrollEffect, n));
}, function (t, e, r) {
  "use strict";

  var n = r(23);
  e.of = n.ArrayObservable.of;
}, function (t, e, r) {
  "use strict";

  function n(t) {
    return function (e, r) {
      return e.pipe(a.withLatestFrom(r.io$, r.window$.pipe(p.pluck("location", "pathname"))), f.tap(function (e) {
        var r = e[0],
            n = e[1],
            i = e[2];
        return n.emit(t, o({}, r, {
          pathname: i
        }));
      }), u.ignoreElements());
    };
  }

  var o = this && this.__assign || function () {
    return o = Object.assign || function (t) {
      for (var e, r = 1, n = arguments.length; r < n; r++) {
        e = arguments[r];

        for (var o in e) {
          Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        }
      }

      return t;
    }, o.apply(this, arguments);
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var i,
      s,
      c = r(13),
      a = r(0),
      u = r(11),
      f = r(5),
      p = r(6),
      l = r(85),
      h = r(94),
      d = r(95),
      y = r(156),
      v = r(157),
      b = r(96),
      g = r(165),
      m = r(166),
      w = r(167),
      _ = r(98),
      C = r(168);

  !function (t) {
    t.Connection = "connection", t.Disconnect = "disconnect", t.FileReload = "file:reload", t.BrowserReload = "browser:reload", t.BrowserLocation = "browser:location", t.BrowserNotify = "browser:notify", t.Scroll = "scroll", t.Click = "click", t.Keyup = "input:text", t.InputToggle = "input:toggles", t.OptionsSet = "options:set";
  }(s = e.IncomingSocketNames || (e.IncomingSocketNames = {}));
  var S;
  !function (t) {
    t.Scroll = "@@outgoing/scroll", t.Click = "@@outgoing/click", t.Keyup = "@@outgoing/keyup", t.InputToggle = "@@outgoing/Toggle";
  }(S = e.OutgoingSocketEvents || (e.OutgoingSocketEvents = {})), e.socketHandlers$ = new c.BehaviorSubject((i = {}, i[s.Connection] = m.incomingConnection, i[s.Disconnect] = w.incomingDisconnect, i[s.FileReload] = g.incomingFileReload, i[s.BrowserReload] = b.incomingBrowserReload, i[s.BrowserLocation] = v.incomingBrowserLocation, i[s.BrowserNotify] = y.incomingBrowserNotify, i[s.Scroll] = l.incomingScrollHandler, i[s.Click] = h.incomingHandler$, i[s.Keyup] = d.incomingKeyupHandler, i[s.InputToggle] = _.incomingInputsToggles, i[s.OptionsSet] = C.incomingOptionsSet, i[S.Scroll] = n(s.Scroll), i[S.Click] = n(s.Click), i[S.Keyup] = n(s.Keyup), i[S.InputToggle] = n(s.InputToggle), i));
}, function (t, e, r) {
  "use strict";

  function n() {
    return function (t) {
      return t.lift(new c());
    };
  }

  var o = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      i = r(3),
      s = r(58);

  e.ignoreElements = n;

  var c = function () {
    function t() {}

    return t.prototype.call = function (t, e) {
      return e.subscribe(new a(t));
    }, t;
  }(),
      a = function (t) {
    function e() {
      t.apply(this, arguments);
    }

    return o(e, t), e.prototype._next = function (t) {
      s.noop();
    }, e;
  }(i.Subscriber);
}, function (t, e, r) {
  "use strict";

  function n(t) {
    return t.reduce(function (t, e) {
      return t.concat(e instanceof u.UnsubscriptionError ? e.errors : e);
    }, []);
  }

  var o = r(26),
      i = r(56),
      s = r(42),
      c = r(43),
      a = r(27),
      u = r(104),
      f = function () {
    function t(t) {
      this.closed = !1, this._parent = null, this._parents = null, this._subscriptions = null, t && (this._unsubscribe = t);
    }

    return t.prototype.unsubscribe = function () {
      var t,
          e = !1;

      if (!this.closed) {
        var r = this,
            f = r._parent,
            p = r._parents,
            l = r._unsubscribe,
            h = r._subscriptions;
        this.closed = !0, this._parent = null, this._parents = null, this._subscriptions = null;

        for (var d = -1, y = p ? p.length : 0; f;) {
          f.remove(this), f = ++d < y && p[d] || null;
        }

        if (s.isFunction(l)) {
          var v = c.tryCatch(l).call(this);
          v === a.errorObject && (e = !0, t = t || (a.errorObject.e instanceof u.UnsubscriptionError ? n(a.errorObject.e.errors) : [a.errorObject.e]));
        }

        if (o.isArray(h)) for (d = -1, y = h.length; ++d < y;) {
          var b = h[d];

          if (i.isObject(b)) {
            var v = c.tryCatch(b.unsubscribe).call(b);

            if (v === a.errorObject) {
              e = !0, t = t || [];
              var g = a.errorObject.e;
              g instanceof u.UnsubscriptionError ? t = t.concat(n(g.errors)) : t.push(g);
            }
          }
        }
        if (e) throw new u.UnsubscriptionError(t);
      }
    }, t.prototype.add = function (e) {
      if (!e || e === t.EMPTY) return t.EMPTY;
      if (e === this) return this;
      var r = e;

      switch (_typeof(e)) {
        case "function":
          r = new t(e);

        case "object":
          if (r.closed || "function" != typeof r.unsubscribe) return r;
          if (this.closed) return r.unsubscribe(), r;

          if ("function" != typeof r._addParent) {
            var n = r;
            r = new t(), r._subscriptions = [n];
          }

          break;

        default:
          throw new Error("unrecognized teardown " + e + " added to Subscription.");
      }

      return (this._subscriptions || (this._subscriptions = [])).push(r), r._addParent(this), r;
    }, t.prototype.remove = function (t) {
      var e = this._subscriptions;

      if (e) {
        var r = e.indexOf(t);
        -1 !== r && e.splice(r, 1);
      }
    }, t.prototype._addParent = function (t) {
      var e = this,
          r = e._parent,
          n = e._parents;
      r && r !== t ? n ? -1 === n.indexOf(t) && n.push(t) : this._parents = [t] : this._parent = t;
    }, t.EMPTY = function (t) {
      return t.closed = !0, t;
    }(new t()), t;
  }();

  e.Subscription = f;
}, function (t, e, r) {
  "use strict";

  var n = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      o = r(37),
      i = r(73),
      s = function (t) {
    function e(e) {
      t.call(this), this._value = e;
    }

    return n(e, t), Object.defineProperty(e.prototype, "value", {
      get: function get() {
        return this.getValue();
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype._subscribe = function (e) {
      var r = t.prototype._subscribe.call(this, e);

      return r && !r.closed && e.next(this._value), r;
    }, e.prototype.getValue = function () {
      if (this.hasError) throw this.thrownError;
      if (this.closed) throw new i.ObjectUnsubscribedError();
      return this._value;
    }, e.prototype.next = function (e) {
      t.prototype.next.call(this, this._value = e);
    }, e;
  }(o.Subject);

  e.BehaviorSubject = s;
}, function (t, e, r) {
  "use strict";

  function n(t) {
    var e = new p.Nanologger(t.logPrefix || "", {
      colors: {
        magenta: "#0F2634"
      }
    });
    return f.of(e);
  }

  function o() {
    for (var t = [], e = 0; e < arguments.length; e++) {
      t[e] = arguments[e];
    }

    return [b.Log, [b.Info, t]];
  }

  function i() {
    for (var t = [], e = 0; e < arguments.length; e++) {
      t[e] = arguments[e];
    }

    return [b.Log, [b.Debug, t]];
  }

  function s(t, e) {
    return void 0 === e && (e = 2e3), [g.Info, [t, e]];
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var c,
      a = r(13),
      u = r(52),
      f = r(9),
      p = r(142),
      l = r(4),
      h = r(5),
      d = r(0),
      y = r(20),
      v = r(6);
  e.initLogger = n;
  var b;
  !function (t) {
    t.Log = "@@Log", t.Info = "@@Log.info", t.Debug = "@@Log.debug";
  }(b = e.LogNames || (e.LogNames = {}));
  var g;
  !function (t) {
    t.Info = "@@Overlay.info";
  }(g = e.Overlay || (e.Overlay = {})), e.consoleInfo = o, e.consoleDebug = i, e.overlayInfo = s, e.logHandler$ = new a.BehaviorSubject((c = {}, c[b.Log] = function (t, e) {
    return t.pipe(d.withLatestFrom(e.logInstance$, e.option$.pipe(v.pluck("injectNotification"))), l.filter(function (t) {
      return "console" === t[2];
    }), h.tap(function (t) {
      var e = t[0],
          r = t[1];

      switch (e[0]) {
        case b.Info:
          return r.info.apply(r, e[1]);

        case b.Debug:
          return r.debug.apply(r, e[1]);
      }
    }));
  }, c[g.Info] = function (t, e) {
    return t.pipe(d.withLatestFrom(e.option$, e.notifyElement$, e.document$), l.filter(function (t) {
      var e = t[1];
      return Boolean(e.notify);
    }), h.tap(function (t) {
      var e = t[0],
          r = (t[1], t[2]),
          n = t[3];
      r.innerHTML = e[0], r.style.display = "block", n.body.appendChild(r);
    }), y.switchMap(function (t) {
      var e = t[0],
          r = (t[1], t[2]),
          n = t[3];
      return u.timer(e[1] || 2e3).pipe(h.tap(function () {
        r.style.display = "none", r.parentNode && n.body.removeChild(r);
      }));
    }));
  }, c));
}, function (t, e, r) {
  "use strict";

  function n(t, e, r) {
    return void 0 === r && (r = Number.POSITIVE_INFINITY), function (n) {
      return "number" == typeof e && (r = e, e = null), n.lift(new c(t, e, r));
    };
  }

  var o = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      i = r(30),
      s = r(29);

  e.mergeMap = n;

  var c = function () {
    function t(t, e, r) {
      void 0 === r && (r = Number.POSITIVE_INFINITY), this.project = t, this.resultSelector = e, this.concurrent = r;
    }

    return t.prototype.call = function (t, e) {
      return e.subscribe(new a(t, this.project, this.resultSelector, this.concurrent));
    }, t;
  }();

  e.MergeMapOperator = c;

  var a = function (t) {
    function e(e, r, n, o) {
      void 0 === o && (o = Number.POSITIVE_INFINITY), t.call(this, e), this.project = r, this.resultSelector = n, this.concurrent = o, this.hasCompleted = !1, this.buffer = [], this.active = 0, this.index = 0;
    }

    return o(e, t), e.prototype._next = function (t) {
      this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t);
    }, e.prototype._tryNext = function (t) {
      var e,
          r = this.index++;

      try {
        e = this.project(t, r);
      } catch (t) {
        return void this.destination.error(t);
      }

      this.active++, this._innerSub(e, t, r);
    }, e.prototype._innerSub = function (t, e, r) {
      this.add(i.subscribeToResult(this, t, e, r));
    }, e.prototype._complete = function () {
      this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete();
    }, e.prototype.notifyNext = function (t, e, r, n, o) {
      this.resultSelector ? this._notifyResultSelector(t, e, r, n) : this.destination.next(e);
    }, e.prototype._notifyResultSelector = function (t, e, r, n) {
      var o;

      try {
        o = this.resultSelector(t, e, r, n);
      } catch (t) {
        return void this.destination.error(t);
      }

      this.destination.next(o);
    }, e.prototype.notifyComplete = function (t) {
      var e = this.buffer;
      this.remove(t), this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete();
    }, e;
  }(s.OuterSubscriber);

  e.MergeMapSubscriber = a;
}, function (t, e, r) {
  "use strict";

  var n = r(28);
  e.empty = n.EmptyObservable.create;
}, function (t, e, r) {
  function n(t) {
    if (t) return o(t);
  }

  function o(t) {
    for (var e in n.prototype) {
      t[e] = n.prototype[e];
    }

    return t;
  }

  t.exports = n, n.prototype.on = n.prototype.addEventListener = function (t, e) {
    return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
  }, n.prototype.once = function (t, e) {
    function r() {
      this.off(t, r), e.apply(this, arguments);
    }

    return r.fn = e, this.on(t, r), this;
  }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function (t, e) {
    if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
    var r = this._callbacks["$" + t];
    if (!r) return this;
    if (1 == arguments.length) return delete this._callbacks["$" + t], this;

    for (var n, o = 0; o < r.length; o++) {
      if ((n = r[o]) === e || n.fn === e) {
        r.splice(o, 1);
        break;
      }
    }

    return this;
  }, n.prototype.emit = function (t) {
    this._callbacks = this._callbacks || {};
    var e = [].slice.call(arguments, 1),
        r = this._callbacks["$" + t];

    if (r) {
      r = r.slice(0);

      for (var n = 0, o = r.length; n < o; ++n) {
        r[n].apply(this, e);
      }
    }

    return this;
  }, n.prototype.listeners = function (t) {
    return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
  }, n.prototype.hasListeners = function (t) {
    return !!this.listeners(t).length;
  };
}, function (t, e, r) {
  function n(t, r) {
    return r("b" + e.packets[t.type] + t.data.data);
  }

  function o(t, r, n) {
    if (!r) return e.encodeBase64Packet(t, n);
    var o = t.data,
        i = new Uint8Array(o),
        s = new Uint8Array(1 + o.byteLength);
    s[0] = g[t.type];

    for (var c = 0; c < i.length; c++) {
      s[c + 1] = i[c];
    }

    return n(s.buffer);
  }

  function i(t, r, n) {
    if (!r) return e.encodeBase64Packet(t, n);
    var o = new FileReader();
    return o.onload = function () {
      e.encodePacket({
        type: t.type,
        data: o.result
      }, r, !0, n);
    }, o.readAsArrayBuffer(t.data);
  }

  function s(t, r, n) {
    if (!r) return e.encodeBase64Packet(t, n);
    if (b) return i(t, r, n);
    var o = new Uint8Array(1);
    return o[0] = g[t.type], n(new _([o.buffer, t.data]));
  }

  function c(t) {
    try {
      t = d.decode(t, {
        strict: !1
      });
    } catch (t) {
      return !1;
    }

    return t;
  }

  function a(t, e, r) {
    for (var n = new Array(t.length), o = h(t.length, r), i = 0; i < t.length; i++) {
      !function (t, r, o) {
        e(r, function (e, r) {
          n[t] = r, o(e, n);
        });
      }(i, t[i], o);
    }
  }

  var u,
      f = r(121),
      p = r(67),
      l = r(123),
      h = r(124),
      d = r(125);
  "undefined" != typeof ArrayBuffer && (u = r(126));
  var y = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent),
      v = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent),
      b = y || v;
  e.protocol = 3;

  var g = e.packets = {
    open: 0,
    close: 1,
    ping: 2,
    pong: 3,
    message: 4,
    upgrade: 5,
    noop: 6
  },
      m = f(g),
      w = {
    type: "error",
    data: "parser error"
  },
      _ = r(127);

  e.encodePacket = function (t, e, r, i) {
    "function" == typeof e && (i = e, e = !1), "function" == typeof r && (i = r, r = null);
    var c = void 0 === t.data ? void 0 : t.data.buffer || t.data;
    if ("undefined" != typeof ArrayBuffer && c instanceof ArrayBuffer) return o(t, e, i);
    if (void 0 !== _ && c instanceof _) return s(t, e, i);
    if (c && c.base64) return n(t, i);
    var a = g[t.type];
    return void 0 !== t.data && (a += r ? d.encode(String(t.data), {
      strict: !1
    }) : String(t.data)), i("" + a);
  }, e.encodeBase64Packet = function (t, r) {
    var n = "b" + e.packets[t.type];

    if (void 0 !== _ && t.data instanceof _) {
      var o = new FileReader();
      return o.onload = function () {
        var t = o.result.split(",")[1];
        r(n + t);
      }, o.readAsDataURL(t.data);
    }

    var i;

    try {
      i = String.fromCharCode.apply(null, new Uint8Array(t.data));
    } catch (e) {
      for (var s = new Uint8Array(t.data), c = new Array(s.length), a = 0; a < s.length; a++) {
        c[a] = s[a];
      }

      i = String.fromCharCode.apply(null, c);
    }

    return n += btoa(i), r(n);
  }, e.decodePacket = function (t, r, n) {
    if (void 0 === t) return w;

    if ("string" == typeof t) {
      if ("b" === t.charAt(0)) return e.decodeBase64Packet(t.substr(1), r);
      if (n && !1 === (t = c(t))) return w;
      var o = t.charAt(0);
      return Number(o) == o && m[o] ? t.length > 1 ? {
        type: m[o],
        data: t.substring(1)
      } : {
        type: m[o]
      } : w;
    }

    var i = new Uint8Array(t),
        o = i[0],
        s = l(t, 1);
    return _ && "blob" === r && (s = new _([s])), {
      type: m[o],
      data: s
    };
  }, e.decodeBase64Packet = function (t, e) {
    var r = m[t.charAt(0)];
    if (!u) return {
      type: r,
      data: {
        base64: !0,
        data: t.substr(1)
      }
    };
    var n = u.decode(t.substr(1));
    return "blob" === e && _ && (n = new _([n])), {
      type: r,
      data: n
    };
  }, e.encodePayload = function (t, r, n) {
    function o(t) {
      return t.length + ":" + t;
    }

    function i(t, n) {
      e.encodePacket(t, !!s && r, !1, function (t) {
        n(null, o(t));
      });
    }

    "function" == typeof r && (n = r, r = null);
    var s = p(t);
    return r && s ? _ && !b ? e.encodePayloadAsBlob(t, n) : e.encodePayloadAsArrayBuffer(t, n) : t.length ? void a(t, i, function (t, e) {
      return n(e.join(""));
    }) : n("0:");
  }, e.decodePayload = function (t, r, n) {
    if ("string" != typeof t) return e.decodePayloadAsBinary(t, r, n);
    "function" == typeof r && (n = r, r = null);
    var o;
    if ("" === t) return n(w, 0, 1);

    for (var i, s, c = "", a = 0, u = t.length; a < u; a++) {
      var f = t.charAt(a);

      if (":" === f) {
        if ("" === c || c != (i = Number(c))) return n(w, 0, 1);
        if (s = t.substr(a + 1, i), c != s.length) return n(w, 0, 1);

        if (s.length) {
          if (o = e.decodePacket(s, r, !1), w.type === o.type && w.data === o.data) return n(w, 0, 1);
          if (!1 === n(o, a + i, u)) return;
        }

        a += i, c = "";
      } else c += f;
    }

    return "" !== c ? n(w, 0, 1) : void 0;
  }, e.encodePayloadAsArrayBuffer = function (t, r) {
    function n(t, r) {
      e.encodePacket(t, !0, !0, function (t) {
        return r(null, t);
      });
    }

    if (!t.length) return r(new ArrayBuffer(0));
    a(t, n, function (t, e) {
      var n = e.reduce(function (t, e) {
        var r;
        return r = "string" == typeof e ? e.length : e.byteLength, t + r.toString().length + r + 2;
      }, 0),
          o = new Uint8Array(n),
          i = 0;
      return e.forEach(function (t) {
        var e = "string" == typeof t,
            r = t;

        if (e) {
          for (var n = new Uint8Array(t.length), s = 0; s < t.length; s++) {
            n[s] = t.charCodeAt(s);
          }

          r = n.buffer;
        }

        o[i++] = e ? 0 : 1;

        for (var c = r.byteLength.toString(), s = 0; s < c.length; s++) {
          o[i++] = parseInt(c[s]);
        }

        o[i++] = 255;

        for (var n = new Uint8Array(r), s = 0; s < n.length; s++) {
          o[i++] = n[s];
        }
      }), r(o.buffer);
    });
  }, e.encodePayloadAsBlob = function (t, r) {
    function n(t, r) {
      e.encodePacket(t, !0, !0, function (t) {
        var e = new Uint8Array(1);

        if (e[0] = 1, "string" == typeof t) {
          for (var n = new Uint8Array(t.length), o = 0; o < t.length; o++) {
            n[o] = t.charCodeAt(o);
          }

          t = n.buffer, e[0] = 0;
        }

        for (var i = t instanceof ArrayBuffer ? t.byteLength : t.size, s = i.toString(), c = new Uint8Array(s.length + 1), o = 0; o < s.length; o++) {
          c[o] = parseInt(s[o]);
        }

        if (c[s.length] = 255, _) {
          var a = new _([e.buffer, c.buffer, t]);
          r(null, a);
        }
      });
    }

    a(t, n, function (t, e) {
      return r(new _(e));
    });
  }, e.decodePayloadAsBinary = function (t, r, n) {
    "function" == typeof r && (n = r, r = null);

    for (var o = t, i = []; o.byteLength > 0;) {
      for (var s = new Uint8Array(o), c = 0 === s[0], a = "", u = 1; 255 !== s[u]; u++) {
        if (a.length > 310) return n(w, 0, 1);
        a += s[u];
      }

      o = l(o, 2 + a.length), a = parseInt(a);
      var f = l(o, 0, a);
      if (c) try {
        f = String.fromCharCode.apply(null, new Uint8Array(f));
      } catch (t) {
        var p = new Uint8Array(f);
        f = "";

        for (var u = 0; u < p.length; u++) {
          f += String.fromCharCode(p[u]);
        }
      }
      i.push(f), o = l(o, a);
    }

    var h = i.length;
    i.forEach(function (t, o) {
      n(e.decodePacket(t, r, !0), o, h);
    });
  };
}, function (t, e, r) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var n,
      o,
      i = r(13),
      s = r(76),
      c = r(81),
      a = r(82),
      u = r(83),
      f = r(84);
  !function (t) {
    t.PropSet = "@@BSDOM.Events.PropSet", t.StyleSet = "@@BSDOM.Events.StyleSet", t.LinkReplace = "@@BSDOM.Events.LinkReplace", t.SetScroll = "@@BSDOM.Events.SetScroll", t.SetWindowName = "@@BSDOM.Events.SetWindowName";
  }(o = e.Events || (e.Events = {})), e.domHandlers$ = new i.BehaviorSubject((n = {}, n[o.PropSet] = s.propSetDomEffect, n[o.StyleSet] = c.styleSetDomEffect, n[o.LinkReplace] = a.linkReplaceDomEffect, n[o.SetScroll] = u.setScrollDomEffect, n[o.SetWindowName] = f.setWindowNameDomEffect, n));
}, function (t, e, r) {
  "use strict";

  function n(t, e) {
    return function (r) {
      return r.lift(new c(t, e));
    };
  }

  var o = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      i = r(29),
      s = r(30);

  e.switchMap = n;

  var c = function () {
    function t(t, e) {
      this.project = t, this.resultSelector = e;
    }

    return t.prototype.call = function (t, e) {
      return e.subscribe(new a(t, this.project, this.resultSelector));
    }, t;
  }(),
      a = function (t) {
    function e(e, r, n) {
      t.call(this, e), this.project = r, this.resultSelector = n, this.index = 0;
    }

    return o(e, t), e.prototype._next = function (t) {
      var e,
          r = this.index++;

      try {
        e = this.project(t, r);
      } catch (t) {
        return void this.destination.error(t);
      }

      this._innerSub(e, t, r);
    }, e.prototype._innerSub = function (t, e, r) {
      var n = this.innerSubscription;
      n && n.unsubscribe(), this.add(this.innerSubscription = s.subscribeToResult(this, t, e, r));
    }, e.prototype._complete = function () {
      var e = this.innerSubscription;
      e && !e.closed || t.prototype._complete.call(this);
    }, e.prototype._unsubscribe = function () {
      this.innerSubscription = null;
    }, e.prototype.notifyComplete = function (e) {
      this.remove(e), this.innerSubscription = null, this.isStopped && t.prototype._complete.call(this);
    }, e.prototype.notifyNext = function (t, e, r, n, o) {
      this.resultSelector ? this._tryNotifyNext(t, e, r, n) : this.destination.next(e);
    }, e.prototype._tryNotifyNext = function (t, e, r, n) {
      var o;

      try {
        o = this.resultSelector(t, e, r, n);
      } catch (t) {
        return void this.destination.error(t);
      }

      this.destination.next(o);
    }, e;
  }(i.OuterSubscriber);
}, function (t, e, r) {
  "use strict";

  function n(t) {
    return [].slice.call(t || []);
  }

  function o(t) {
    var e = document.createElement("a");
    return e.href = t, "" === e.host && (e.href = e.href), e;
  }

  function i(t, e, r) {
    return "" === t ? "?" + r : "?" + t.slice(1).split("&").map(function (t) {
      return t.split("=");
    }).filter(function (t) {
      return t[0] !== e;
    }).map(function (t) {
      return [t[0], t[1]].join("=");
    }).concat(r).join("&");
  }

  function s(t) {
    return v.some(function (e) {
      return e(t);
    });
  }

  function c(t, e) {
    return void 0 === e && (e = 1e3), t.pipe(h.switchMap(function () {
      return f.concat(l.of(!1), p.timer(e).pipe(y.mapTo(!0)));
    }), d.startWith(!0));
  }

  function a(t) {
    return [].slice.call(t);
  }

  function u(t) {
    return t.replace(/^\/+/, "").replace(/\\/g, "/").toLowerCase();
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var f = r(54),
      p = r(52),
      l = r(9),
      h = r(20),
      d = r(152),
      y = r(88);
  e.each = n, e.splitUrl = function (t) {
    var e, r, n;
    return (r = t.indexOf("#")) >= 0 ? (e = t.slice(r), t = t.slice(0, r)) : e = "", (r = t.indexOf("?")) >= 0 ? (n = t.slice(r), t = t.slice(0, r)) : n = "", {
      url: t,
      params: n,
      hash: e
    };
  }, e.pathFromUrl = function (t) {
    var r;
    return t = e.splitUrl(t).url, r = 0 === t.indexOf("file://") ? t.replace(new RegExp("^file://(localhost)?"), "") : t.replace(new RegExp("^([^:]+:)?//([^:/]+)(:\\d*)?/"), "/"), decodeURIComponent(r);
  }, e.pickBestMatch = function (t, r, n) {
    var o,
        i = {
      score: 0,
      object: null
    };
    return r.forEach(function (r) {
      (o = e.numberOfMatchingSegments(t, n(r))) > i.score && (i = {
        object: r,
        score: o
      });
    }), i.score > 0 ? i : null;
  }, e.numberOfMatchingSegments = function (t, e) {
    if (t = u(t), e = u(e), t === e) return 1e4;

    for (var r = t.split("/").reverse(), n = e.split("/").reverse(), o = Math.min(r.length, n.length), i = 0; i < o && r[i] === n[i];) {
      ++i;
    }

    return i;
  }, e.pathsMatch = function (t, r) {
    return e.numberOfMatchingSegments(t, r) > 0;
  }, e.getLocation = o, e.updateSearch = i;
  var v = [function (t) {
    return "map" === t.ext;
  }];
  e.isBlacklisted = s, e.createTimedBooleanSwitch = c, e.array = a, e.normalisePath = u;
}, function (t, e, r) {
  "use strict";

  function n() {
    return window;
  }

  function o() {
    return document;
  }

  function i(t, e) {
    var r,
        n,
        o = e.documentElement,
        i = e.body;
    return void 0 !== t.pageYOffset ? (r = t.pageXOffset, n = t.pageYOffset) : (r = o.scrollLeft || i.scrollLeft || 0, n = o.scrollTop || i.scrollTop || 0), {
      x: r,
      y: n
    };
  }

  function s(t) {
    var e = t.documentElement,
        r = t.body;
    return {
      x: r.scrollHeight - e.clientWidth,
      y: r.scrollHeight - e.clientHeight
    };
  }

  function c(t, e) {
    var r = i(t, e);
    e.cookie = "bs_scroll_pos=" + [r.x, r.y].join(",");
  }

  function a() {
    var t = o().cookie.replace(/(?:(?:^|.*;\s*)bs_scroll_pos\s*\=\s*([^;]*).*$)|^.*$/, "$1").split(",");
    n().scrollTo(Number(t[0]), Number(t[1]));
  }

  function u(t, e) {
    var r = o().getElementsByTagName(t);
    return Array.prototype.indexOf.call(r, e);
  }

  function f(t) {
    t.blur(), t.focus();
  }

  function p(t) {
    var e = t.tagName;
    return {
      tagName: e,
      index: u(e, t)
    };
  }

  function l(t, e) {
    return o().getElementsByTagName(t)[e];
  }

  function h() {
    return o().getElementsByTagName("body")[0];
  }

  function d(t) {
    n().scrollTo(t.x, t.y);
  }

  function y() {
    n().location.reload(!0);
  }

  function v(t, e) {
    for (var r = 0, n = t.length; r < n; r += 1) {
      e(t[r], r, t);
    }
  }

  function b() {
    return void 0 !== n().attachEvent;
  }

  function g(t) {
    var e = o().createElement("a");
    return e.href = t, "" === e.host && (e.href = e.href), e;
  }

  function m(t) {
    return void 0 === t;
  }

  function w(t, e) {
    for (var r = 0, n = e.split("."), o = n.length; r < o; r++) {
      if (!t || "object" != _typeof(t)) return !1;
      t = t[n[r]];
    }

    return void 0 !== t && t;
  }

  function _(t, e) {
    var r = i(t, e);
    return {
      raw: r,
      proportional: S(r, e)
    };
  }

  function C(t) {
    var e = {
      x: t.scrollLeft,
      y: t.scrollTop
    };
    return {
      raw: e,
      proportional: E({
        x: t.scrollWidth,
        y: t.scrollHeight
      }, e).y
    };
  }

  function S(t, e) {
    return E(s(e), t).y;
  }

  function E(t, e) {
    var r = e.x / t.x,
        n = e.y / t.y;
    return {
      x: r || 0,
      y: n
    };
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.getWindow = n, e.getDocument = o, e.getBrowserScrollPosition = i, e.getDocumentScrollSpace = s, e.saveScrollPosition = c, e.restoreScrollPosition = a, e.getElementIndex = u, e.forceChange = f, e.getElementData = p, e.getSingleElement = l, e.getBody = h, e.setScroll = d, e.reloadBrowser = y, e.forEach = v, e.isOldIe = b, e.getLocation = g, e.isUndefined = m, e.getByPath = w, e.getScrollPosition = _, e.getScrollPositionForElement = C, e.getScrollTopPercentage = S, e.getScrollPercentage = E;
}, function (t, e, r) {
  "use strict";

  var n = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      o = r(1),
      i = r(46),
      s = r(28),
      c = r(25),
      a = function (t) {
    function e(e, r) {
      t.call(this), this.array = e, this.scheduler = r, r || 1 !== e.length || (this._isScalar = !0, this.value = e[0]);
    }

    return n(e, t), e.create = function (t, r) {
      return new e(t, r);
    }, e.of = function () {
      for (var t = [], r = 0; r < arguments.length; r++) {
        t[r - 0] = arguments[r];
      }

      var n = t[t.length - 1];
      c.isScheduler(n) ? t.pop() : n = null;
      var o = t.length;
      return o > 1 ? new e(t, n) : 1 === o ? new i.ScalarObservable(t[0], n) : new s.EmptyObservable(n);
    }, e.dispatch = function (t) {
      var e = t.array,
          r = t.index,
          n = t.count,
          o = t.subscriber;
      if (r >= n) return void o.complete();
      o.next(e[r]), o.closed || (t.index = r + 1, this.schedule(t));
    }, e.prototype._subscribe = function (t) {
      var r = this.array,
          n = r.length,
          o = this.scheduler;
      if (o) return o.schedule(e.dispatch, 0, {
        array: r,
        index: 0,
        count: n,
        subscriber: t
      });

      for (var i = 0; i < n && !t.closed; i++) {
        t.next(r[i]);
      }

      t.complete();
    }, e;
  }(o.Observable);

  e.ArrayObservable = a;
}, function (t, e) {
  var r;

  r = function () {
    return this;
  }();

  try {
    r = r || Function("return this")() || (0, eval)("this");
  } catch (t) {
    "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (r = window);
  }

  t.exports = r;
}, function (t, e, r) {
  "use strict";

  function n(t) {
    return t && "function" == typeof t.schedule;
  }

  e.isScheduler = n;
}, function (t, e, r) {
  "use strict";

  e.isArray = Array.isArray || function (t) {
    return t && "number" == typeof t.length;
  };
}, function (t, e, r) {
  "use strict";

  e.errorObject = {
    e: {}
  };
}, function (t, e, r) {
  "use strict";

  var n = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      o = r(1),
      i = function (t) {
    function e(e) {
      t.call(this), this.scheduler = e;
    }

    return n(e, t), e.create = function (t) {
      return new e(t);
    }, e.dispatch = function (t) {
      t.subscriber.complete();
    }, e.prototype._subscribe = function (t) {
      var r = this.scheduler;
      if (r) return r.schedule(e.dispatch, 0, {
        subscriber: t
      });
      t.complete();
    }, e;
  }(o.Observable);

  e.EmptyObservable = i;
}, function (t, e, r) {
  "use strict";

  var n = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      o = r(3),
      i = function (t) {
    function e() {
      t.apply(this, arguments);
    }

    return n(e, t), e.prototype.notifyNext = function (t, e, r, n, o) {
      this.destination.next(e);
    }, e.prototype.notifyError = function (t, e) {
      this.destination.error(t);
    }, e.prototype.notifyComplete = function (t) {
      this.destination.complete();
    }, e;
  }(o.Subscriber);

  e.OuterSubscriber = i;
}, function (t, e, r) {
  "use strict";

  function n(t, e, r, n) {
    var l = new f.InnerSubscriber(t, r, n);
    if (l.closed) return null;
    if (e instanceof a.Observable) return e._isScalar ? (l.next(e.value), l.complete(), null) : (l.syncErrorThrowable = !0, e.subscribe(l));

    if (i.isArrayLike(e)) {
      for (var h = 0, d = e.length; h < d && !l.closed; h++) {
        l.next(e[h]);
      }

      l.closed || l.complete();
    } else {
      if (s.isPromise(e)) return e.then(function (t) {
        l.closed || (l.next(t), l.complete());
      }, function (t) {
        return l.error(t);
      }).then(null, function (t) {
        o.root.setTimeout(function () {
          throw t;
        });
      }), l;
      if (e && "function" == typeof e[u.iterator]) for (var y = e[u.iterator]();;) {
        var v = y.next();

        if (v.done) {
          l.complete();
          break;
        }

        if (l.next(v.value), l.closed) break;
      } else if (e && "function" == typeof e[p.observable]) {
        var b = e[p.observable]();
        if ("function" == typeof b.subscribe) return b.subscribe(new f.InnerSubscriber(t, r, n));
        l.error(new TypeError("Provided object does not correctly implement Symbol.observable"));
      } else {
        var g = c.isObject(e) ? "an invalid object" : "'" + e + "'",
            m = "You provided " + g + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.";
        l.error(new TypeError(m));
      }
    }

    return null;
  }

  var o = r(7),
      i = r(59),
      s = r(60),
      c = r(56),
      a = r(1),
      u = r(31),
      f = r(106),
      p = r(45);
  e.subscribeToResult = n;
}, function (t, e, r) {
  "use strict";

  function n(t) {
    var e = t.Symbol;
    if ("function" == typeof e) return e.iterator || (e.iterator = e("iterator polyfill")), e.iterator;
    var r = t.Set;
    if (r && "function" == typeof new r()["@@iterator"]) return "@@iterator";
    var n = t.Map;
    if (n) for (var o = Object.getOwnPropertyNames(n.prototype), i = 0; i < o.length; ++i) {
      var s = o[i];
      if ("entries" !== s && "size" !== s && n.prototype[s] === n.prototype.entries) return s;
    }
    return "@@iterator";
  }

  var o = r(7);
  e.symbolIteratorPonyfill = n, e.iterator = n(o.root), e.$$iterator = e.iterator;
}, function (t, e, r) {
  (function (n) {
    function o() {
      return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
    }

    function i(t) {
      var r = this.useColors;

      if (t[0] = (r ? "%c" : "") + this.namespace + (r ? " %c" : " ") + t[0] + (r ? "%c " : " ") + "+" + e.humanize(this.diff), r) {
        var n = "color: " + this.color;
        t.splice(1, 0, n, "color: inherit");
        var o = 0,
            i = 0;
        t[0].replace(/%[a-zA-Z%]/g, function (t) {
          "%%" !== t && (o++, "%c" === t && (i = o));
        }), t.splice(i, 0, n);
      }
    }

    function s() {
      return "object" == (typeof console === "undefined" ? "undefined" : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }

    function c(t) {
      try {
        null == t ? e.storage.removeItem("debug") : e.storage.debug = t;
      } catch (t) {}
    }

    function a() {
      var t;

      try {
        t = e.storage.debug;
      } catch (t) {}

      return !t && void 0 !== n && "env" in n && (t = n.env.DEBUG), t;
    }

    e = t.exports = r(110), e.log = s, e.formatArgs = i, e.save = c, e.load = a, e.useColors = o, e.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function () {
      try {
        return window.localStorage;
      } catch (t) {}
    }(), e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.formatters.j = function (t) {
      try {
        return JSON.stringify(t);
      } catch (t) {
        return "[UnexpectedJSONParseError]: " + t.message;
      }
    }, e.enable(a());
  }).call(e, r(33));
}, function (t, e) {
  function r() {
    throw new Error("setTimeout has not been defined");
  }

  function n() {
    throw new Error("clearTimeout has not been defined");
  }

  function o(t) {
    if (f === setTimeout) return setTimeout(t, 0);
    if ((f === r || !f) && setTimeout) return f = setTimeout, setTimeout(t, 0);

    try {
      return f(t, 0);
    } catch (e) {
      try {
        return f.call(null, t, 0);
      } catch (e) {
        return f.call(this, t, 0);
      }
    }
  }

  function i(t) {
    if (p === clearTimeout) return clearTimeout(t);
    if ((p === n || !p) && clearTimeout) return p = clearTimeout, clearTimeout(t);

    try {
      return p(t);
    } catch (e) {
      try {
        return p.call(null, t);
      } catch (e) {
        return p.call(this, t);
      }
    }
  }

  function s() {
    y && h && (y = !1, h.length ? d = h.concat(d) : v = -1, d.length && c());
  }

  function c() {
    if (!y) {
      var t = o(s);
      y = !0;

      for (var e = d.length; e;) {
        for (h = d, d = []; ++v < e;) {
          h && h[v].run();
        }

        v = -1, e = d.length;
      }

      h = null, y = !1, i(t);
    }
  }

  function a(t, e) {
    this.fun = t, this.array = e;
  }

  function u() {}

  var f,
      p,
      l = t.exports = {};
  !function () {
    try {
      f = "function" == typeof setTimeout ? setTimeout : r;
    } catch (t) {
      f = r;
    }

    try {
      p = "function" == typeof clearTimeout ? clearTimeout : n;
    } catch (t) {
      p = n;
    }
  }();
  var h,
      d = [],
      y = !1,
      v = -1;
  l.nextTick = function (t) {
    var e = new Array(arguments.length - 1);
    if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) {
      e[r - 1] = arguments[r];
    }
    d.push(new a(t, e)), 1 !== d.length || y || o(c);
  }, a.prototype.run = function () {
    this.fun.apply(null, this.array);
  }, l.title = "browser", l.browser = !0, l.env = {}, l.argv = [], l.version = "", l.versions = {}, l.on = u, l.addListener = u, l.once = u, l.off = u, l.removeListener = u, l.removeAllListeners = u, l.emit = u, l.prependListener = u, l.prependOnceListener = u, l.listeners = function (t) {
    return [];
  }, l.binding = function (t) {
    throw new Error("process.binding is not supported");
  }, l.cwd = function () {
    return "/";
  }, l.chdir = function (t) {
    throw new Error("process.chdir is not supported");
  }, l.umask = function () {
    return 0;
  };
}, function (t, e) {
  e.encode = function (t) {
    var e = "";

    for (var r in t) {
      t.hasOwnProperty(r) && (e.length && (e += "&"), e += encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
    }

    return e;
  }, e.decode = function (t) {
    for (var e = {}, r = t.split("&"), n = 0, o = r.length; n < o; n++) {
      var i = r[n].split("=");
      e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
    }

    return e;
  };
}, function (t, e) {
  t.exports = function (t, e) {
    var r = function r() {};

    r.prototype = e.prototype, t.prototype = new r(), t.prototype.constructor = t;
  };
}, function (t, e, r) {
  (function (n) {
    function o() {
      return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
    }

    function i(t) {
      var r = this.useColors;

      if (t[0] = (r ? "%c" : "") + this.namespace + (r ? " %c" : " ") + t[0] + (r ? "%c " : " ") + "+" + e.humanize(this.diff), r) {
        var n = "color: " + this.color;
        t.splice(1, 0, n, "color: inherit");
        var o = 0,
            i = 0;
        t[0].replace(/%[a-zA-Z%]/g, function (t) {
          "%%" !== t && (o++, "%c" === t && (i = o));
        }), t.splice(i, 0, n);
      }
    }

    function s() {
      return "object" == (typeof console === "undefined" ? "undefined" : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }

    function c(t) {
      try {
        null == t ? e.storage.removeItem("debug") : e.storage.debug = t;
      } catch (t) {}
    }

    function a() {
      var t;

      try {
        t = e.storage.debug;
      } catch (t) {}

      return !t && void 0 !== n && "env" in n && (t = n.env.DEBUG), t;
    }

    e = t.exports = r(128), e.log = s, e.formatArgs = i, e.save = c, e.load = a, e.useColors = o, e.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function () {
      try {
        return window.localStorage;
      } catch (t) {}
    }(), e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.formatters.j = function (t) {
      try {
        return JSON.stringify(t);
      } catch (t) {
        return "[UnexpectedJSONParseError]: " + t.message;
      }
    }, e.enable(a());
  }).call(e, r(33));
}, function (t, e, r) {
  "use strict";

  var n = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      o = r(1),
      i = r(3),
      s = r(12),
      c = r(73),
      a = r(134),
      u = r(44),
      f = function (t) {
    function e(e) {
      t.call(this, e), this.destination = e;
    }

    return n(e, t), e;
  }(i.Subscriber);

  e.SubjectSubscriber = f;

  var p = function (t) {
    function e() {
      t.call(this), this.observers = [], this.closed = !1, this.isStopped = !1, this.hasError = !1, this.thrownError = null;
    }

    return n(e, t), e.prototype[u.rxSubscriber] = function () {
      return new f(this);
    }, e.prototype.lift = function (t) {
      var e = new l(this, this);
      return e.operator = t, e;
    }, e.prototype.next = function (t) {
      if (this.closed) throw new c.ObjectUnsubscribedError();
      if (!this.isStopped) for (var e = this.observers, r = e.length, n = e.slice(), o = 0; o < r; o++) {
        n[o].next(t);
      }
    }, e.prototype.error = function (t) {
      if (this.closed) throw new c.ObjectUnsubscribedError();
      this.hasError = !0, this.thrownError = t, this.isStopped = !0;

      for (var e = this.observers, r = e.length, n = e.slice(), o = 0; o < r; o++) {
        n[o].error(t);
      }

      this.observers.length = 0;
    }, e.prototype.complete = function () {
      if (this.closed) throw new c.ObjectUnsubscribedError();
      this.isStopped = !0;

      for (var t = this.observers, e = t.length, r = t.slice(), n = 0; n < e; n++) {
        r[n].complete();
      }

      this.observers.length = 0;
    }, e.prototype.unsubscribe = function () {
      this.isStopped = !0, this.closed = !0, this.observers = null;
    }, e.prototype._trySubscribe = function (e) {
      if (this.closed) throw new c.ObjectUnsubscribedError();
      return t.prototype._trySubscribe.call(this, e);
    }, e.prototype._subscribe = function (t) {
      if (this.closed) throw new c.ObjectUnsubscribedError();
      return this.hasError ? (t.error(this.thrownError), s.Subscription.EMPTY) : this.isStopped ? (t.complete(), s.Subscription.EMPTY) : (this.observers.push(t), new a.SubjectSubscription(this, t));
    }, e.prototype.asObservable = function () {
      var t = new o.Observable();
      return t.source = this, t;
    }, e.create = function (t, e) {
      return new l(t, e);
    }, e;
  }(o.Observable);

  e.Subject = p;

  var l = function (t) {
    function e(e, r) {
      t.call(this), this.destination = e, this.source = r;
    }

    return n(e, t), e.prototype.next = function (t) {
      var e = this.destination;
      e && e.next && e.next(t);
    }, e.prototype.error = function (t) {
      var e = this.destination;
      e && e.error && this.destination.error(t);
    }, e.prototype.complete = function () {
      var t = this.destination;
      t && t.complete && this.destination.complete();
    }, e.prototype._subscribe = function (t) {
      return this.source ? this.source.subscribe(t) : s.Subscription.EMPTY;
    }, e;
  }(p);

  e.AnonymousSubject = l;
}, function (t, e, r) {
  "use strict";

  function n() {
    for (var t = [], e = 0; e < arguments.length; e++) {
      t[e - 0] = arguments[e];
    }

    var r = Number.POSITIVE_INFINITY,
        n = null,
        a = t[t.length - 1];
    return s.isScheduler(a) ? (n = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (r = t.pop())) : "number" == typeof a && (r = t.pop()), null === n && 1 === t.length && t[0] instanceof o.Observable ? t[0] : c.mergeAll(r)(new i.ArrayObservable(t, n));
  }

  var o = r(1),
      i = r(23),
      s = r(25),
      c = r(55);
  e.merge = n;
}, function (t, e, r) {
  "use strict";

  function n(t) {
    return function (e) {
      return e.lift(new s(t));
    };
  }

  var o = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      i = r(3);

  e.skip = n;

  var s = function () {
    function t(t) {
      this.total = t;
    }

    return t.prototype.call = function (t, e) {
      return e.subscribe(new c(t, this.total));
    }, t;
  }(),
      c = function (t) {
    function e(e, r) {
      t.call(this, e), this.total = r, this.count = 0;
    }

    return o(e, t), e.prototype._next = function (t) {
      ++this.count > this.total && this.destination.next(t);
    }, e;
  }(i.Subscriber);
}, function (t, e, r) {
  "use strict";

  function n(t, e) {
    return function (r) {
      return r.lift(new a(t, e));
    };
  }

  var o = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      i = r(3),
      s = r(43),
      c = r(27);

  e.distinctUntilChanged = n;

  var a = function () {
    function t(t, e) {
      this.compare = t, this.keySelector = e;
    }

    return t.prototype.call = function (t, e) {
      return e.subscribe(new u(t, this.compare, this.keySelector));
    }, t;
  }(),
      u = function (t) {
    function e(e, r, n) {
      t.call(this, e), this.keySelector = n, this.hasKey = !1, "function" == typeof r && (this.compare = r);
    }

    return o(e, t), e.prototype.compare = function (t, e) {
      return t === e;
    }, e.prototype._next = function (t) {
      var e = this.keySelector,
          r = t;
      if (e && (r = s.tryCatch(this.keySelector)(t)) === c.errorObject) return this.destination.error(c.errorObject.e);
      var n = !1;

      if (this.hasKey) {
        if ((n = s.tryCatch(this.compare)(this.key, r)) === c.errorObject) return this.destination.error(c.errorObject.e);
      } else this.hasKey = !0;

      !1 === Boolean(n) && (this.key = r, this.destination.next(t));
    }, e;
  }(i.Subscriber);
}, function (t, e, r) {
  "use strict";

  var n = r(172);
  e.fromEvent = n.FromEventObservable.create;
}, function (t, e, r) {
  "use strict";

  function n(t) {
    return "function" == typeof t;
  }

  e.isFunction = n;
}, function (t, e, r) {
  "use strict";

  function n() {
    try {
      return i.apply(this, arguments);
    } catch (t) {
      return s.errorObject.e = t, s.errorObject;
    }
  }

  function o(t) {
    return i = t, n;
  }

  var i,
      s = r(27);
  e.tryCatch = o;
}, function (t, e, r) {
  "use strict";

  var n = r(7),
      o = n.root.Symbol;
  e.rxSubscriber = "function" == typeof o && "function" == typeof o["for"] ? o["for"]("rxSubscriber") : "@@rxSubscriber", e.$$rxSubscriber = e.rxSubscriber;
}, function (t, e, r) {
  "use strict";

  function n(t) {
    var e,
        r = t.Symbol;
    return "function" == typeof r ? r.observable ? e = r.observable : (e = r("observable"), r.observable = e) : e = "@@observable", e;
  }

  var o = r(7);
  e.getSymbolObservable = n, e.observable = n(o.root), e.$$observable = e.observable;
}, function (t, e, r) {
  "use strict";

  var n = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      o = r(1),
      i = function (t) {
    function e(e, r) {
      t.call(this), this.value = e, this.scheduler = r, this._isScalar = !0, r && (this._isScalar = !1);
    }

    return n(e, t), e.create = function (t, r) {
      return new e(t, r);
    }, e.dispatch = function (t) {
      var e = t.done,
          r = t.value,
          n = t.subscriber;
      if (e) return void n.complete();
      n.next(r), n.closed || (t.done = !0, this.schedule(t));
    }, e.prototype._subscribe = function (t) {
      var r = this.value,
          n = this.scheduler;
      if (n) return n.schedule(e.dispatch, 0, {
        done: !1,
        value: r,
        subscriber: t
      });
      t.next(r), t.closed || t.complete();
    }, e;
  }(o.Observable);

  e.ScalarObservable = i;
}, function (t, e) {
  function r(t) {
    if (t = String(t), !(t.length > 100)) {
      var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);

      if (e) {
        var r = parseFloat(e[1]);

        switch ((e[2] || "ms").toLowerCase()) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return r * f;

          case "days":
          case "day":
          case "d":
            return r * u;

          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return r * a;

          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return r * c;

          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return r * s;

          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return r;

          default:
            return;
        }
      }
    }
  }

  function n(t) {
    return t >= u ? Math.round(t / u) + "d" : t >= a ? Math.round(t / a) + "h" : t >= c ? Math.round(t / c) + "m" : t >= s ? Math.round(t / s) + "s" : t + "ms";
  }

  function o(t) {
    return i(t, u, "day") || i(t, a, "hour") || i(t, c, "minute") || i(t, s, "second") || t + " ms";
  }

  function i(t, e, r) {
    if (!(t < e)) return t < 1.5 * e ? Math.floor(t / e) + " " + r : Math.ceil(t / e) + " " + r + "s";
  }

  var s = 1e3,
      c = 60 * s,
      a = 60 * c,
      u = 24 * a,
      f = 365.25 * u;

  t.exports = function (t, e) {
    e = e || {};

    var i = _typeof(t);

    if ("string" === i && t.length > 0) return r(t);
    if ("number" === i && !1 === isNaN(t)) return e["long"] ? o(t) : n(t);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t));
  };
}, function (t, e, r) {
  function n() {}

  function o(t) {
    var r = "" + t.type;

    if (e.BINARY_EVENT !== t.type && e.BINARY_ACK !== t.type || (r += t.attachments + "-"), t.nsp && "/" !== t.nsp && (r += t.nsp + ","), null != t.id && (r += t.id), null != t.data) {
      var n = i(t.data);
      if (!1 === n) return b;
      r += n;
    }

    return l("encoded %j as %s", t, r), r;
  }

  function i(t) {
    try {
      return JSON.stringify(t);
    } catch (t) {
      return !1;
    }
  }

  function s(t, e) {
    function r(t) {
      var r = d.deconstructPacket(t),
          n = o(r.packet),
          i = r.buffers;
      i.unshift(n), e(i);
    }

    d.removeBlobs(t, r);
  }

  function c() {
    this.reconstructor = null;
  }

  function a(t) {
    var r = 0,
        n = {
      type: Number(t.charAt(0))
    };
    if (null == e.types[n.type]) return p("unknown packet type " + n.type);

    if (e.BINARY_EVENT === n.type || e.BINARY_ACK === n.type) {
      for (var o = ""; "-" !== t.charAt(++r) && (o += t.charAt(r), r != t.length);) {
        ;
      }

      if (o != Number(o) || "-" !== t.charAt(r)) throw new Error("Illegal attachments");
      n.attachments = Number(o);
    }

    if ("/" === t.charAt(r + 1)) for (n.nsp = ""; ++r;) {
      var i = t.charAt(r);
      if ("," === i) break;
      if (n.nsp += i, r === t.length) break;
    } else n.nsp = "/";
    var s = t.charAt(r + 1);

    if ("" !== s && Number(s) == s) {
      for (n.id = ""; ++r;) {
        var i = t.charAt(r);

        if (null == i || Number(i) != i) {
          --r;
          break;
        }

        if (n.id += t.charAt(r), r === t.length) break;
      }

      n.id = Number(n.id);
    }

    if (t.charAt(++r)) {
      var c = u(t.substr(r));
      if (!(!1 !== c && (n.type === e.ERROR || y(c)))) return p("invalid payload");
      n.data = c;
    }

    return l("decoded %s as %j", t, n), n;
  }

  function u(t) {
    try {
      return JSON.parse(t);
    } catch (t) {
      return !1;
    }
  }

  function f(t) {
    this.reconPack = t, this.buffers = [];
  }

  function p(t) {
    return {
      type: e.ERROR,
      data: "parser error: " + t
    };
  }

  var l = r(111)("socket.io-parser"),
      h = r(17),
      d = r(113),
      y = r(62),
      v = r(63);
  e.protocol = 4, e.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], e.CONNECT = 0, e.DISCONNECT = 1, e.EVENT = 2, e.ACK = 3, e.ERROR = 4, e.BINARY_EVENT = 5, e.BINARY_ACK = 6, e.Encoder = n, e.Decoder = c;
  var b = e.ERROR + '"encode error"';
  n.prototype.encode = function (t, r) {
    if (l("encoding packet %j", t), e.BINARY_EVENT === t.type || e.BINARY_ACK === t.type) s(t, r);else {
      r([o(t)]);
    }
  }, h(c.prototype), c.prototype.add = function (t) {
    var r;
    if ("string" == typeof t) r = a(t), e.BINARY_EVENT === r.type || e.BINARY_ACK === r.type ? (this.reconstructor = new f(r), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", r)) : this.emit("decoded", r);else {
      if (!v(t) && !t.base64) throw new Error("Unknown type: " + t);
      if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
      (r = this.reconstructor.takeBinaryData(t)) && (this.reconstructor = null, this.emit("decoded", r));
    }
  }, c.prototype.destroy = function () {
    this.reconstructor && this.reconstructor.finishedReconstruction();
  }, f.prototype.takeBinaryData = function (t) {
    if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
      var e = d.reconstructPacket(this.reconPack, this.buffers);
      return this.finishedReconstruction(), e;
    }

    return null;
  }, f.prototype.finishedReconstruction = function () {
    this.reconPack = null, this.buffers = [];
  };
}, function (t, e, r) {
  "use strict";

  (function (t) {
    function n() {
      return i.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
    }

    function o(t, e) {
      if (n() < e) throw new RangeError("Invalid typed array length");
      return i.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e), t.__proto__ = i.prototype) : (null === t && (t = new i(e)), t.length = e), t;
    }

    function i(t, e, r) {
      if (!(i.TYPED_ARRAY_SUPPORT || this instanceof i)) return new i(t, e, r);

      if ("number" == typeof t) {
        if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
        return u(this, t);
      }

      return s(this, t, e, r);
    }

    function s(t, e, r, n) {
      if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
      return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? l(t, e, r, n) : "string" == typeof e ? f(t, e, r) : h(t, e);
    }

    function c(t) {
      if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
      if (t < 0) throw new RangeError('"size" argument must not be negative');
    }

    function a(t, e, r, n) {
      return c(e), e <= 0 ? o(t, e) : void 0 !== r ? "string" == typeof n ? o(t, e).fill(r, n) : o(t, e).fill(r) : o(t, e);
    }

    function u(t, e) {
      if (c(e), t = o(t, e < 0 ? 0 : 0 | d(e)), !i.TYPED_ARRAY_SUPPORT) for (var r = 0; r < e; ++r) {
        t[r] = 0;
      }
      return t;
    }

    function f(t, e, r) {
      if ("string" == typeof r && "" !== r || (r = "utf8"), !i.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
      var n = 0 | v(e, r);
      t = o(t, n);
      var s = t.write(e, r);
      return s !== n && (t = t.slice(0, s)), t;
    }

    function p(t, e) {
      var r = e.length < 0 ? 0 : 0 | d(e.length);
      t = o(t, r);

      for (var n = 0; n < r; n += 1) {
        t[n] = 255 & e[n];
      }

      return t;
    }

    function l(t, e, r, n) {
      if (e.byteLength, r < 0 || e.byteLength < r) throw new RangeError("'offset' is out of bounds");
      if (e.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
      return e = void 0 === r && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, r) : new Uint8Array(e, r, n), i.TYPED_ARRAY_SUPPORT ? (t = e, t.__proto__ = i.prototype) : t = p(t, e), t;
    }

    function h(t, e) {
      if (i.isBuffer(e)) {
        var r = 0 | d(e.length);
        return t = o(t, r), 0 === t.length ? t : (e.copy(t, 0, 0, r), t);
      }

      if (e) {
        if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || J(e.length) ? o(t, 0) : p(t, e);
        if ("Buffer" === e.type && Z(e.data)) return p(t, e.data);
      }

      throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
    }

    function d(t) {
      if (t >= n()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + n().toString(16) + " bytes");
      return 0 | t;
    }

    function y(t) {
      return +t != t && (t = 0), i.alloc(+t);
    }

    function v(t, e) {
      if (i.isBuffer(t)) return t.length;
      if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
      "string" != typeof t && (t = "" + t);
      var r = t.length;
      if (0 === r) return 0;

      for (var n = !1;;) {
        switch (e) {
          case "ascii":
          case "latin1":
          case "binary":
            return r;

          case "utf8":
          case "utf-8":
          case void 0:
            return H(t).length;

          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return 2 * r;

          case "hex":
            return r >>> 1;

          case "base64":
            return W(t).length;

          default:
            if (n) return H(t).length;
            e = ("" + e).toLowerCase(), n = !0;
        }
      }
    }

    function b(t, e, r) {
      var n = !1;
      if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
      if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
      if (r >>>= 0, e >>>= 0, r <= e) return "";

      for (t || (t = "utf8");;) {
        switch (t) {
          case "hex":
            return B(this, e, r);

          case "utf8":
          case "utf-8":
            return A(this, e, r);

          case "ascii":
            return F(this, e, r);

          case "latin1":
          case "binary":
            return P(this, e, r);

          case "base64":
            return O(this, e, r);

          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return R(this, e, r);

          default:
            if (n) throw new TypeError("Unknown encoding: " + t);
            t = (t + "").toLowerCase(), n = !0;
        }
      }
    }

    function g(t, e, r) {
      var n = t[e];
      t[e] = t[r], t[r] = n;
    }

    function m(t, e, r, n, o) {
      if (0 === t.length) return -1;

      if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = o ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
        if (o) return -1;
        r = t.length - 1;
      } else if (r < 0) {
        if (!o) return -1;
        r = 0;
      }

      if ("string" == typeof e && (e = i.from(e, n)), i.isBuffer(e)) return 0 === e.length ? -1 : w(t, e, r, n, o);
      if ("number" == typeof e) return e &= 255, i.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : w(t, [e], r, n, o);
      throw new TypeError("val must be string, number or Buffer");
    }

    function w(t, e, r, n, o) {
      function i(t, e) {
        return 1 === s ? t[e] : t.readUInt16BE(e * s);
      }

      var s = 1,
          c = t.length,
          a = e.length;

      if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
        if (t.length < 2 || e.length < 2) return -1;
        s = 2, c /= 2, a /= 2, r /= 2;
      }

      var u;

      if (o) {
        var f = -1;

        for (u = r; u < c; u++) {
          if (i(t, u) === i(e, -1 === f ? 0 : u - f)) {
            if (-1 === f && (f = u), u - f + 1 === a) return f * s;
          } else -1 !== f && (u -= u - f), f = -1;
        }
      } else for (r + a > c && (r = c - a), u = r; u >= 0; u--) {
        for (var p = !0, l = 0; l < a; l++) {
          if (i(t, u + l) !== i(e, l)) {
            p = !1;
            break;
          }
        }

        if (p) return u;
      }

      return -1;
    }

    function _(t, e, r, n) {
      r = Number(r) || 0;
      var o = t.length - r;
      n ? (n = Number(n)) > o && (n = o) : n = o;
      var i = e.length;
      if (i % 2 != 0) throw new TypeError("Invalid hex string");
      n > i / 2 && (n = i / 2);

      for (var s = 0; s < n; ++s) {
        var c = parseInt(e.substr(2 * s, 2), 16);
        if (isNaN(c)) return s;
        t[r + s] = c;
      }

      return s;
    }

    function C(t, e, r, n) {
      return X(H(e, t.length - r), t, r, n);
    }

    function S(t, e, r, n) {
      return X(z(e), t, r, n);
    }

    function E(t, e, r, n) {
      return S(t, e, r, n);
    }

    function x(t, e, r, n) {
      return X(W(e), t, r, n);
    }

    function k(t, e, r, n) {
      return X(V(e, t.length - r), t, r, n);
    }

    function O(t, e, r) {
      return 0 === e && r === t.length ? K.fromByteArray(t) : K.fromByteArray(t.slice(e, r));
    }

    function A(t, e, r) {
      r = Math.min(t.length, r);

      for (var n = [], o = e; o < r;) {
        var i = t[o],
            s = null,
            c = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;

        if (o + c <= r) {
          var a, u, f, p;

          switch (c) {
            case 1:
              i < 128 && (s = i);
              break;

            case 2:
              a = t[o + 1], 128 == (192 & a) && (p = (31 & i) << 6 | 63 & a) > 127 && (s = p);
              break;

            case 3:
              a = t[o + 1], u = t[o + 2], 128 == (192 & a) && 128 == (192 & u) && (p = (15 & i) << 12 | (63 & a) << 6 | 63 & u) > 2047 && (p < 55296 || p > 57343) && (s = p);
              break;

            case 4:
              a = t[o + 1], u = t[o + 2], f = t[o + 3], 128 == (192 & a) && 128 == (192 & u) && 128 == (192 & f) && (p = (15 & i) << 18 | (63 & a) << 12 | (63 & u) << 6 | 63 & f) > 65535 && p < 1114112 && (s = p);
          }
        }

        null === s ? (s = 65533, c = 1) : s > 65535 && (s -= 65536, n.push(s >>> 10 & 1023 | 55296), s = 56320 | 1023 & s), n.push(s), o += c;
      }

      return T(n);
    }

    function T(t) {
      var e = t.length;
      if (e <= Q) return String.fromCharCode.apply(String, t);

      for (var r = "", n = 0; n < e;) {
        r += String.fromCharCode.apply(String, t.slice(n, n += Q));
      }

      return r;
    }

    function F(t, e, r) {
      var n = "";
      r = Math.min(t.length, r);

      for (var o = e; o < r; ++o) {
        n += String.fromCharCode(127 & t[o]);
      }

      return n;
    }

    function P(t, e, r) {
      var n = "";
      r = Math.min(t.length, r);

      for (var o = e; o < r; ++o) {
        n += String.fromCharCode(t[o]);
      }

      return n;
    }

    function B(t, e, r) {
      var n = t.length;
      (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);

      for (var o = "", i = e; i < r; ++i) {
        o += Y(t[i]);
      }

      return o;
    }

    function R(t, e, r) {
      for (var n = t.slice(e, r), o = "", i = 0; i < n.length; i += 2) {
        o += String.fromCharCode(n[i] + 256 * n[i + 1]);
      }

      return o;
    }

    function j(t, e, r) {
      if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
      if (t + e > r) throw new RangeError("Trying to access beyond buffer length");
    }

    function I(t, e, r, n, o, s) {
      if (!i.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (e > o || e < s) throw new RangeError('"value" argument is out of bounds');
      if (r + n > t.length) throw new RangeError("Index out of range");
    }

    function N(t, e, r, n) {
      e < 0 && (e = 65535 + e + 1);

      for (var o = 0, i = Math.min(t.length - r, 2); o < i; ++o) {
        t[r + o] = (e & 255 << 8 * (n ? o : 1 - o)) >>> 8 * (n ? o : 1 - o);
      }
    }

    function M(t, e, r, n) {
      e < 0 && (e = 4294967295 + e + 1);

      for (var o = 0, i = Math.min(t.length - r, 4); o < i; ++o) {
        t[r + o] = e >>> 8 * (n ? o : 3 - o) & 255;
      }
    }

    function L(t, e, r, n, o, i) {
      if (r + n > t.length) throw new RangeError("Index out of range");
      if (r < 0) throw new RangeError("Index out of range");
    }

    function U(t, e, r, n, o) {
      return o || L(t, e, r, 4, 3.4028234663852886e38, -3.4028234663852886e38), G.write(t, e, r, n, 23, 4), r + 4;
    }

    function D(t, e, r, n, o) {
      return o || L(t, e, r, 8, 1.7976931348623157e308, -1.7976931348623157e308), G.write(t, e, r, n, 52, 8), r + 8;
    }

    function $(t) {
      if (t = q(t).replace(tt, ""), t.length < 2) return "";

      for (; t.length % 4 != 0;) {
        t += "=";
      }

      return t;
    }

    function q(t) {
      return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
    }

    function Y(t) {
      return t < 16 ? "0" + t.toString(16) : t.toString(16);
    }

    function H(t, e) {
      e = e || 1 / 0;

      for (var r, n = t.length, o = null, i = [], s = 0; s < n; ++s) {
        if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
          if (!o) {
            if (r > 56319) {
              (e -= 3) > -1 && i.push(239, 191, 189);
              continue;
            }

            if (s + 1 === n) {
              (e -= 3) > -1 && i.push(239, 191, 189);
              continue;
            }

            o = r;
            continue;
          }

          if (r < 56320) {
            (e -= 3) > -1 && i.push(239, 191, 189), o = r;
            continue;
          }

          r = 65536 + (o - 55296 << 10 | r - 56320);
        } else o && (e -= 3) > -1 && i.push(239, 191, 189);

        if (o = null, r < 128) {
          if ((e -= 1) < 0) break;
          i.push(r);
        } else if (r < 2048) {
          if ((e -= 2) < 0) break;
          i.push(r >> 6 | 192, 63 & r | 128);
        } else if (r < 65536) {
          if ((e -= 3) < 0) break;
          i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128);
        } else {
          if (!(r < 1114112)) throw new Error("Invalid code point");
          if ((e -= 4) < 0) break;
          i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128);
        }
      }

      return i;
    }

    function z(t) {
      for (var e = [], r = 0; r < t.length; ++r) {
        e.push(255 & t.charCodeAt(r));
      }

      return e;
    }

    function V(t, e) {
      for (var r, n, o, i = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) {
        r = t.charCodeAt(s), n = r >> 8, o = r % 256, i.push(o), i.push(n);
      }

      return i;
    }

    function W(t) {
      return K.toByteArray($(t));
    }

    function X(t, e, r, n) {
      for (var o = 0; o < n && !(o + r >= e.length || o >= t.length); ++o) {
        e[o + r] = t[o];
      }

      return o;
    }

    function J(t) {
      return t !== t;
    }
    /*!
    * The buffer module from node.js, for the browser.
    *
    * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
    * @license  MIT
    */


    var K = r(114),
        G = r(115),
        Z = r(116);
    e.Buffer = i, e.SlowBuffer = y, e.INSPECT_MAX_BYTES = 50, i.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function () {
      try {
        var t = new Uint8Array(1);
        return t.__proto__ = {
          __proto__: Uint8Array.prototype,
          foo: function foo() {
            return 42;
          }
        }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength;
      } catch (t) {
        return !1;
      }
    }(), e.kMaxLength = n(), i.poolSize = 8192, i._augment = function (t) {
      return t.__proto__ = i.prototype, t;
    }, i.from = function (t, e, r) {
      return s(null, t, e, r);
    }, i.TYPED_ARRAY_SUPPORT && (i.prototype.__proto__ = Uint8Array.prototype, i.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && i[Symbol.species] === i && Object.defineProperty(i, Symbol.species, {
      value: null,
      configurable: !0
    })), i.alloc = function (t, e, r) {
      return a(null, t, e, r);
    }, i.allocUnsafe = function (t) {
      return u(null, t);
    }, i.allocUnsafeSlow = function (t) {
      return u(null, t);
    }, i.isBuffer = function (t) {
      return !(null == t || !t._isBuffer);
    }, i.compare = function (t, e) {
      if (!i.isBuffer(t) || !i.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
      if (t === e) return 0;

      for (var r = t.length, n = e.length, o = 0, s = Math.min(r, n); o < s; ++o) {
        if (t[o] !== e[o]) {
          r = t[o], n = e[o];
          break;
        }
      }

      return r < n ? -1 : n < r ? 1 : 0;
    }, i.isEncoding = function (t) {
      switch (String(t).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;

        default:
          return !1;
      }
    }, i.concat = function (t, e) {
      if (!Z(t)) throw new TypeError('"list" argument must be an Array of Buffers');
      if (0 === t.length) return i.alloc(0);
      var r;
      if (void 0 === e) for (e = 0, r = 0; r < t.length; ++r) {
        e += t[r].length;
      }
      var n = i.allocUnsafe(e),
          o = 0;

      for (r = 0; r < t.length; ++r) {
        var s = t[r];
        if (!i.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
        s.copy(n, o), o += s.length;
      }

      return n;
    }, i.byteLength = v, i.prototype._isBuffer = !0, i.prototype.swap16 = function () {
      var t = this.length;
      if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");

      for (var e = 0; e < t; e += 2) {
        g(this, e, e + 1);
      }

      return this;
    }, i.prototype.swap32 = function () {
      var t = this.length;
      if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");

      for (var e = 0; e < t; e += 4) {
        g(this, e, e + 3), g(this, e + 1, e + 2);
      }

      return this;
    }, i.prototype.swap64 = function () {
      var t = this.length;
      if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");

      for (var e = 0; e < t; e += 8) {
        g(this, e, e + 7), g(this, e + 1, e + 6), g(this, e + 2, e + 5), g(this, e + 3, e + 4);
      }

      return this;
    }, i.prototype.toString = function () {
      var t = 0 | this.length;
      return 0 === t ? "" : 0 === arguments.length ? A(this, 0, t) : b.apply(this, arguments);
    }, i.prototype.equals = function (t) {
      if (!i.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
      return this === t || 0 === i.compare(this, t);
    }, i.prototype.inspect = function () {
      var t = "",
          r = e.INSPECT_MAX_BYTES;
      return this.length > 0 && (t = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (t += " ... ")), "<Buffer " + t + ">";
    }, i.prototype.compare = function (t, e, r, n, o) {
      if (!i.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
      if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === o && (o = this.length), e < 0 || r > t.length || n < 0 || o > this.length) throw new RangeError("out of range index");
      if (n >= o && e >= r) return 0;
      if (n >= o) return -1;
      if (e >= r) return 1;
      if (e >>>= 0, r >>>= 0, n >>>= 0, o >>>= 0, this === t) return 0;

      for (var s = o - n, c = r - e, a = Math.min(s, c), u = this.slice(n, o), f = t.slice(e, r), p = 0; p < a; ++p) {
        if (u[p] !== f[p]) {
          s = u[p], c = f[p];
          break;
        }
      }

      return s < c ? -1 : c < s ? 1 : 0;
    }, i.prototype.includes = function (t, e, r) {
      return -1 !== this.indexOf(t, e, r);
    }, i.prototype.indexOf = function (t, e, r) {
      return m(this, t, e, r, !0);
    }, i.prototype.lastIndexOf = function (t, e, r) {
      return m(this, t, e, r, !1);
    }, i.prototype.write = function (t, e, r, n) {
      if (void 0 === e) n = "utf8", r = this.length, e = 0;else if (void 0 === r && "string" == typeof e) n = e, r = this.length, e = 0;else {
        if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        e |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
      }
      var o = this.length - e;
      if ((void 0 === r || r > o) && (r = o), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
      n || (n = "utf8");

      for (var i = !1;;) {
        switch (n) {
          case "hex":
            return _(this, t, e, r);

          case "utf8":
          case "utf-8":
            return C(this, t, e, r);

          case "ascii":
            return S(this, t, e, r);

          case "latin1":
          case "binary":
            return E(this, t, e, r);

          case "base64":
            return x(this, t, e, r);

          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return k(this, t, e, r);

          default:
            if (i) throw new TypeError("Unknown encoding: " + n);
            n = ("" + n).toLowerCase(), i = !0;
        }
      }
    }, i.prototype.toJSON = function () {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    var Q = 4096;
    i.prototype.slice = function (t, e) {
      var r = this.length;
      t = ~~t, e = void 0 === e ? r : ~~e, t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t);
      var n;
      if (i.TYPED_ARRAY_SUPPORT) n = this.subarray(t, e), n.__proto__ = i.prototype;else {
        var o = e - t;
        n = new i(o, void 0);

        for (var s = 0; s < o; ++s) {
          n[s] = this[s + t];
        }
      }
      return n;
    }, i.prototype.readUIntLE = function (t, e, r) {
      t |= 0, e |= 0, r || j(t, e, this.length);

      for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256);) {
        n += this[t + i] * o;
      }

      return n;
    }, i.prototype.readUIntBE = function (t, e, r) {
      t |= 0, e |= 0, r || j(t, e, this.length);

      for (var n = this[t + --e], o = 1; e > 0 && (o *= 256);) {
        n += this[t + --e] * o;
      }

      return n;
    }, i.prototype.readUInt8 = function (t, e) {
      return e || j(t, 1, this.length), this[t];
    }, i.prototype.readUInt16LE = function (t, e) {
      return e || j(t, 2, this.length), this[t] | this[t + 1] << 8;
    }, i.prototype.readUInt16BE = function (t, e) {
      return e || j(t, 2, this.length), this[t] << 8 | this[t + 1];
    }, i.prototype.readUInt32LE = function (t, e) {
      return e || j(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
    }, i.prototype.readUInt32BE = function (t, e) {
      return e || j(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
    }, i.prototype.readIntLE = function (t, e, r) {
      t |= 0, e |= 0, r || j(t, e, this.length);

      for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256);) {
        n += this[t + i] * o;
      }

      return o *= 128, n >= o && (n -= Math.pow(2, 8 * e)), n;
    }, i.prototype.readIntBE = function (t, e, r) {
      t |= 0, e |= 0, r || j(t, e, this.length);

      for (var n = e, o = 1, i = this[t + --n]; n > 0 && (o *= 256);) {
        i += this[t + --n] * o;
      }

      return o *= 128, i >= o && (i -= Math.pow(2, 8 * e)), i;
    }, i.prototype.readInt8 = function (t, e) {
      return e || j(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
    }, i.prototype.readInt16LE = function (t, e) {
      e || j(t, 2, this.length);
      var r = this[t] | this[t + 1] << 8;
      return 32768 & r ? 4294901760 | r : r;
    }, i.prototype.readInt16BE = function (t, e) {
      e || j(t, 2, this.length);
      var r = this[t + 1] | this[t] << 8;
      return 32768 & r ? 4294901760 | r : r;
    }, i.prototype.readInt32LE = function (t, e) {
      return e || j(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
    }, i.prototype.readInt32BE = function (t, e) {
      return e || j(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
    }, i.prototype.readFloatLE = function (t, e) {
      return e || j(t, 4, this.length), G.read(this, t, !0, 23, 4);
    }, i.prototype.readFloatBE = function (t, e) {
      return e || j(t, 4, this.length), G.read(this, t, !1, 23, 4);
    }, i.prototype.readDoubleLE = function (t, e) {
      return e || j(t, 8, this.length), G.read(this, t, !0, 52, 8);
    }, i.prototype.readDoubleBE = function (t, e) {
      return e || j(t, 8, this.length), G.read(this, t, !1, 52, 8);
    }, i.prototype.writeUIntLE = function (t, e, r, n) {
      if (t = +t, e |= 0, r |= 0, !n) {
        I(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
      }

      var o = 1,
          i = 0;

      for (this[e] = 255 & t; ++i < r && (o *= 256);) {
        this[e + i] = t / o & 255;
      }

      return e + r;
    }, i.prototype.writeUIntBE = function (t, e, r, n) {
      if (t = +t, e |= 0, r |= 0, !n) {
        I(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
      }

      var o = r - 1,
          i = 1;

      for (this[e + o] = 255 & t; --o >= 0 && (i *= 256);) {
        this[e + o] = t / i & 255;
      }

      return e + r;
    }, i.prototype.writeUInt8 = function (t, e, r) {
      return t = +t, e |= 0, r || I(this, t, e, 1, 255, 0), i.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1;
    }, i.prototype.writeUInt16LE = function (t, e, r) {
      return t = +t, e |= 0, r || I(this, t, e, 2, 65535, 0), i.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : N(this, t, e, !0), e + 2;
    }, i.prototype.writeUInt16BE = function (t, e, r) {
      return t = +t, e |= 0, r || I(this, t, e, 2, 65535, 0), i.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : N(this, t, e, !1), e + 2;
    }, i.prototype.writeUInt32LE = function (t, e, r) {
      return t = +t, e |= 0, r || I(this, t, e, 4, 4294967295, 0), i.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : M(this, t, e, !0), e + 4;
    }, i.prototype.writeUInt32BE = function (t, e, r) {
      return t = +t, e |= 0, r || I(this, t, e, 4, 4294967295, 0), i.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : M(this, t, e, !1), e + 4;
    }, i.prototype.writeIntLE = function (t, e, r, n) {
      if (t = +t, e |= 0, !n) {
        var o = Math.pow(2, 8 * r - 1);
        I(this, t, e, r, o - 1, -o);
      }

      var i = 0,
          s = 1,
          c = 0;

      for (this[e] = 255 & t; ++i < r && (s *= 256);) {
        t < 0 && 0 === c && 0 !== this[e + i - 1] && (c = 1), this[e + i] = (t / s >> 0) - c & 255;
      }

      return e + r;
    }, i.prototype.writeIntBE = function (t, e, r, n) {
      if (t = +t, e |= 0, !n) {
        var o = Math.pow(2, 8 * r - 1);
        I(this, t, e, r, o - 1, -o);
      }

      var i = r - 1,
          s = 1,
          c = 0;

      for (this[e + i] = 255 & t; --i >= 0 && (s *= 256);) {
        t < 0 && 0 === c && 0 !== this[e + i + 1] && (c = 1), this[e + i] = (t / s >> 0) - c & 255;
      }

      return e + r;
    }, i.prototype.writeInt8 = function (t, e, r) {
      return t = +t, e |= 0, r || I(this, t, e, 1, 127, -128), i.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1;
    }, i.prototype.writeInt16LE = function (t, e, r) {
      return t = +t, e |= 0, r || I(this, t, e, 2, 32767, -32768), i.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : N(this, t, e, !0), e + 2;
    }, i.prototype.writeInt16BE = function (t, e, r) {
      return t = +t, e |= 0, r || I(this, t, e, 2, 32767, -32768), i.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : N(this, t, e, !1), e + 2;
    }, i.prototype.writeInt32LE = function (t, e, r) {
      return t = +t, e |= 0, r || I(this, t, e, 4, 2147483647, -2147483648), i.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : M(this, t, e, !0), e + 4;
    }, i.prototype.writeInt32BE = function (t, e, r) {
      return t = +t, e |= 0, r || I(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), i.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : M(this, t, e, !1), e + 4;
    }, i.prototype.writeFloatLE = function (t, e, r) {
      return U(this, t, e, !0, r);
    }, i.prototype.writeFloatBE = function (t, e, r) {
      return U(this, t, e, !1, r);
    }, i.prototype.writeDoubleLE = function (t, e, r) {
      return D(this, t, e, !0, r);
    }, i.prototype.writeDoubleBE = function (t, e, r) {
      return D(this, t, e, !1, r);
    }, i.prototype.copy = function (t, e, r, n) {
      if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r) return 0;
      if (0 === t.length || 0 === this.length) return 0;
      if (e < 0) throw new RangeError("targetStart out of bounds");
      if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
      if (n < 0) throw new RangeError("sourceEnd out of bounds");
      n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
      var o,
          s = n - r;
      if (this === t && r < e && e < n) for (o = s - 1; o >= 0; --o) {
        t[o + e] = this[o + r];
      } else if (s < 1e3 || !i.TYPED_ARRAY_SUPPORT) for (o = 0; o < s; ++o) {
        t[o + e] = this[o + r];
      } else Uint8Array.prototype.set.call(t, this.subarray(r, r + s), e);
      return s;
    }, i.prototype.fill = function (t, e, r, n) {
      if ("string" == typeof t) {
        if ("string" == typeof e ? (n = e, e = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), 1 === t.length) {
          var o = t.charCodeAt(0);
          o < 256 && (t = o);
        }

        if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
        if ("string" == typeof n && !i.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
      } else "number" == typeof t && (t &= 255);

      if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
      if (r <= e) return this;
      e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0);
      var s;
      if ("number" == typeof t) for (s = e; s < r; ++s) {
        this[s] = t;
      } else {
        var c = i.isBuffer(t) ? t : H(new i(t, n).toString()),
            a = c.length;

        for (s = 0; s < r - e; ++s) {
          this[s + e] = c[s % a];
        }
      }
      return this;
    };
    var tt = /[^+\/0-9A-Za-z-_]/g;
  }).call(e, r(24));
}, function (t, e, r) {
  var n = r(119);

  t.exports = function (t) {
    var e = t.xdomain,
        r = t.xscheme,
        o = t.enablesXDR;

    try {
      if ("undefined" != typeof XMLHttpRequest && (!e || n)) return new XMLHttpRequest();
    } catch (t) {}

    try {
      if ("undefined" != typeof XDomainRequest && !r && o) return new XDomainRequest();
    } catch (t) {}

    if (!e) try {
      return new self[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (t) {}
  };
}, function (t, e, r) {
  function n(t) {
    this.path = t.path, this.hostname = t.hostname, this.port = t.port, this.secure = t.secure, this.query = t.query, this.timestampParam = t.timestampParam, this.timestampRequests = t.timestampRequests, this.readyState = "", this.agent = t.agent || !1, this.socket = t.socket, this.enablesXDR = t.enablesXDR, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.forceNode = t.forceNode, this.isReactNative = t.isReactNative, this.extraHeaders = t.extraHeaders, this.localAddress = t.localAddress;
  }

  var o = r(18),
      i = r(17);
  t.exports = n, i(n.prototype), n.prototype.onError = function (t, e) {
    var r = new Error(t);
    return r.type = "TransportError", r.description = e, this.emit("error", r), this;
  }, n.prototype.open = function () {
    return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this;
  }, n.prototype.close = function () {
    return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this;
  }, n.prototype.send = function (t) {
    if ("open" !== this.readyState) throw new Error("Transport not open");
    this.write(t);
  }, n.prototype.onOpen = function () {
    this.readyState = "open", this.writable = !0, this.emit("open");
  }, n.prototype.onData = function (t) {
    var e = o.decodePacket(t, this.socket.binaryType);
    this.onPacket(e);
  }, n.prototype.onPacket = function (t) {
    this.emit("packet", t);
  }, n.prototype.onClose = function () {
    this.readyState = "closed", this.emit("close");
  };
}, function (t, e, r) {
  "use strict";

  var n = r(138);
  e.timer = n.TimerObservable.create;
}, function (t, e, r) {
  "use strict";

  function n(t, e) {
    return t.pipe(s.tap(function (t) {
      return e.option$.next(t);
    }), i.ignoreElements());
  }

  function o(t) {
    return [c.EffectNames.SetOptions, t];
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var i = r(11),
      s = r(5),
      c = r(8);
  e.setOptionsEffect = n, e.setOptions = o;
}, function (t, e, r) {
  "use strict";

  function n() {
    for (var t = [], e = 0; e < arguments.length; e++) {
      t[e - 0] = arguments[e];
    }

    return 1 === t.length || 2 === t.length && o.isScheduler(t[1]) ? s.from(t[0]) : c.concatAll()(i.of.apply(void 0, t));
  }

  var o = r(25),
      i = r(9),
      s = r(87),
      c = r(150);
  e.concat = n;
}, function (t, e, r) {
  "use strict";

  function n(t) {
    return void 0 === t && (t = Number.POSITIVE_INFINITY), o.mergeMap(i.identity, null, t);
  }

  var o = r(15),
      i = r(151);
  e.mergeAll = n;
}, function (t, e, r) {
  "use strict";

  function n(t) {
    return null != t && "object" == _typeof(t);
  }

  e.isObject = n;
}, function (t, e, r) {
  "use strict";

  e.empty = {
    closed: !0,
    next: function next(t) {},
    error: function error(t) {
      throw t;
    },
    complete: function complete() {}
  };
}, function (t, e, r) {
  "use strict";

  function n() {}

  e.noop = n;
}, function (t, e, r) {
  "use strict";

  e.isArrayLike = function (t) {
    return t && "number" == typeof t.length;
  };
}, function (t, e, r) {
  "use strict";

  function n(t) {
    return t && "function" != typeof t.subscribe && "function" == typeof t.then;
  }

  e.isPromise = n;
}, function (t, e) {
  var r = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
      n = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];

  t.exports = function (t) {
    var e = t,
        o = t.indexOf("["),
        i = t.indexOf("]");
    -1 != o && -1 != i && (t = t.substring(0, o) + t.substring(o, i).replace(/:/g, ";") + t.substring(i, t.length));

    for (var s = r.exec(t || ""), c = {}, a = 14; a--;) {
      c[n[a]] = s[a] || "";
    }

    return -1 != o && -1 != i && (c.source = e, c.host = c.host.substring(1, c.host.length - 1).replace(/;/g, ":"), c.authority = c.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), c.ipv6uri = !0), c;
  };
}, function (t, e) {
  var r = {}.toString;

  t.exports = Array.isArray || function (t) {
    return "[object Array]" == r.call(t);
  };
}, function (t, e, r) {
  (function (e) {
    function r(t) {
      return n && e.isBuffer(t) || o && (t instanceof ArrayBuffer || i(t));
    }

    t.exports = r;

    var n = "function" == typeof e && "function" == typeof e.isBuffer,
        o = "function" == typeof ArrayBuffer,
        i = function i(t) {
      return "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer;
    };
  }).call(e, r(49).Buffer);
}, function (t, e, r) {
  function n(t, e) {
    if (!(this instanceof n)) return new n(t, e);
    t && "object" == _typeof(t) && (e = t, t = void 0), e = e || {}, e.path = e.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = e, this.reconnection(!1 !== e.reconnection), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), this.randomizationFactor(e.randomizationFactor || .5), this.backoff = new l({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(null == e.timeout ? 2e4 : e.timeout), this.readyState = "closed", this.uri = t, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [];
    var r = e.parser || c;
    this.encoder = new r.Encoder(), this.decoder = new r.Decoder(), this.autoConnect = !1 !== e.autoConnect, this.autoConnect && this.open();
  }

  var o = r(117),
      i = r(70),
      s = r(17),
      c = r(48),
      a = r(71),
      u = r(72),
      f = r(32)("socket.io-client:manager"),
      p = r(69),
      l = r(133),
      h = Object.prototype.hasOwnProperty;
  t.exports = n, n.prototype.emitAll = function () {
    this.emit.apply(this, arguments);

    for (var t in this.nsps) {
      h.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments);
    }
  }, n.prototype.updateSocketIds = function () {
    for (var t in this.nsps) {
      h.call(this.nsps, t) && (this.nsps[t].id = this.generateId(t));
    }
  }, n.prototype.generateId = function (t) {
    return ("/" === t ? "" : t + "#") + this.engine.id;
  }, s(n.prototype), n.prototype.reconnection = function (t) {
    return arguments.length ? (this._reconnection = !!t, this) : this._reconnection;
  }, n.prototype.reconnectionAttempts = function (t) {
    return arguments.length ? (this._reconnectionAttempts = t, this) : this._reconnectionAttempts;
  }, n.prototype.reconnectionDelay = function (t) {
    return arguments.length ? (this._reconnectionDelay = t, this.backoff && this.backoff.setMin(t), this) : this._reconnectionDelay;
  }, n.prototype.randomizationFactor = function (t) {
    return arguments.length ? (this._randomizationFactor = t, this.backoff && this.backoff.setJitter(t), this) : this._randomizationFactor;
  }, n.prototype.reconnectionDelayMax = function (t) {
    return arguments.length ? (this._reconnectionDelayMax = t, this.backoff && this.backoff.setMax(t), this) : this._reconnectionDelayMax;
  }, n.prototype.timeout = function (t) {
    return arguments.length ? (this._timeout = t, this) : this._timeout;
  }, n.prototype.maybeReconnectOnOpen = function () {
    !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
  }, n.prototype.open = n.prototype.connect = function (t, e) {
    if (f("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
    f("opening %s", this.uri), this.engine = o(this.uri, this.opts);
    var r = this.engine,
        n = this;
    this.readyState = "opening", this.skipReconnect = !1;
    var i = a(r, "open", function () {
      n.onopen(), t && t();
    }),
        s = a(r, "error", function (e) {
      if (f("connect_error"), n.cleanup(), n.readyState = "closed", n.emitAll("connect_error", e), t) {
        var r = new Error("Connection error");
        r.data = e, t(r);
      } else n.maybeReconnectOnOpen();
    });

    if (!1 !== this._timeout) {
      var c = this._timeout;
      f("connect attempt will timeout after %d", c);
      var u = setTimeout(function () {
        f("connect attempt timed out after %d", c), i.destroy(), r.close(), r.emit("error", "timeout"), n.emitAll("connect_timeout", c);
      }, c);
      this.subs.push({
        destroy: function destroy() {
          clearTimeout(u);
        }
      });
    }

    return this.subs.push(i), this.subs.push(s), this;
  }, n.prototype.onopen = function () {
    f("open"), this.cleanup(), this.readyState = "open", this.emit("open");
    var t = this.engine;
    this.subs.push(a(t, "data", u(this, "ondata"))), this.subs.push(a(t, "ping", u(this, "onping"))), this.subs.push(a(t, "pong", u(this, "onpong"))), this.subs.push(a(t, "error", u(this, "onerror"))), this.subs.push(a(t, "close", u(this, "onclose"))), this.subs.push(a(this.decoder, "decoded", u(this, "ondecoded")));
  }, n.prototype.onping = function () {
    this.lastPing = new Date(), this.emitAll("ping");
  }, n.prototype.onpong = function () {
    this.emitAll("pong", new Date() - this.lastPing);
  }, n.prototype.ondata = function (t) {
    this.decoder.add(t);
  }, n.prototype.ondecoded = function (t) {
    this.emit("packet", t);
  }, n.prototype.onerror = function (t) {
    f("error", t), this.emitAll("error", t);
  }, n.prototype.socket = function (t, e) {
    function r() {
      ~p(o.connecting, n) || o.connecting.push(n);
    }

    var n = this.nsps[t];

    if (!n) {
      n = new i(this, t, e), this.nsps[t] = n;
      var o = this;
      n.on("connecting", r), n.on("connect", function () {
        n.id = o.generateId(t);
      }), this.autoConnect && r();
    }

    return n;
  }, n.prototype.destroy = function (t) {
    var e = p(this.connecting, t);
    ~e && this.connecting.splice(e, 1), this.connecting.length || this.close();
  }, n.prototype.packet = function (t) {
    f("writing packet %j", t);
    var e = this;
    t.query && 0 === t.type && (t.nsp += "?" + t.query), e.encoding ? e.packetBuffer.push(t) : (e.encoding = !0, this.encoder.encode(t, function (r) {
      for (var n = 0; n < r.length; n++) {
        e.engine.write(r[n], t.options);
      }

      e.encoding = !1, e.processPacketQueue();
    }));
  }, n.prototype.processPacketQueue = function () {
    if (this.packetBuffer.length > 0 && !this.encoding) {
      var t = this.packetBuffer.shift();
      this.packet(t);
    }
  }, n.prototype.cleanup = function () {
    f("cleanup");

    for (var t = this.subs.length, e = 0; e < t; e++) {
      this.subs.shift().destroy();
    }

    this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy();
  }, n.prototype.close = n.prototype.disconnect = function () {
    f("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close();
  }, n.prototype.onclose = function (t) {
    f("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", t), this._reconnection && !this.skipReconnect && this.reconnect();
  }, n.prototype.reconnect = function () {
    if (this.reconnecting || this.skipReconnect) return this;
    var t = this;
    if (this.backoff.attempts >= this._reconnectionAttempts) f("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;else {
      var e = this.backoff.duration();
      f("will wait %dms before reconnect attempt", e), this.reconnecting = !0;
      var r = setTimeout(function () {
        t.skipReconnect || (f("attempting reconnect"), t.emitAll("reconnect_attempt", t.backoff.attempts), t.emitAll("reconnecting", t.backoff.attempts), t.skipReconnect || t.open(function (e) {
          e ? (f("reconnect attempt error"), t.reconnecting = !1, t.reconnect(), t.emitAll("reconnect_error", e.data)) : (f("reconnect success"), t.onreconnect());
        }));
      }, e);
      this.subs.push({
        destroy: function destroy() {
          clearTimeout(r);
        }
      });
    }
  }, n.prototype.onreconnect = function () {
    var t = this.backoff.attempts;
    this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", t);
  };
}, function (t, e, r) {
  function n(t) {
    var e = !1,
        r = !1,
        n = !1 !== t.jsonp;

    if ("undefined" != typeof location) {
      var c = "https:" === location.protocol,
          a = location.port;
      a || (a = c ? 443 : 80), e = t.hostname !== location.hostname || a !== t.port, r = t.secure !== c;
    }

    if (t.xdomain = e, t.xscheme = r, "open" in new o(t) && !t.forceJSONP) return new i(t);
    if (!n) throw new Error("JSONP disabled");
    return new s(t);
  }

  var o = r(50),
      i = r(120),
      s = r(129),
      c = r(130);
  e.polling = n, e.websocket = c;
}, function (t, e, r) {
  function n(t) {
    var e = t && t.forceBase64;
    f && !e || (this.supportsBinary = !1), o.call(this, t);
  }

  var o = r(51),
      i = r(34),
      s = r(18),
      c = r(35),
      a = r(68),
      u = r(36)("engine.io-client:polling");
  t.exports = n;

  var f = function () {
    return null != new (r(50))({
      xdomain: !1
    }).responseType;
  }();

  c(n, o), n.prototype.name = "polling", n.prototype.doOpen = function () {
    this.poll();
  }, n.prototype.pause = function (t) {
    function e() {
      u("paused"), r.readyState = "paused", t();
    }

    var r = this;

    if (this.readyState = "pausing", this.polling || !this.writable) {
      var n = 0;
      this.polling && (u("we are currently polling - waiting to pause"), n++, this.once("pollComplete", function () {
        u("pre-pause polling complete"), --n || e();
      })), this.writable || (u("we are currently writing - waiting to pause"), n++, this.once("drain", function () {
        u("pre-pause writing complete"), --n || e();
      }));
    } else e();
  }, n.prototype.poll = function () {
    u("polling"), this.polling = !0, this.doPoll(), this.emit("poll");
  }, n.prototype.onData = function (t) {
    var e = this;
    u("polling got data %s", t);

    var r = function r(t, _r, n) {
      if ("opening" === e.readyState && e.onOpen(), "close" === t.type) return e.onClose(), !1;
      e.onPacket(t);
    };

    s.decodePayload(t, this.socket.binaryType, r), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" === this.readyState ? this.poll() : u('ignoring poll - transport state "%s"', this.readyState));
  }, n.prototype.doClose = function () {
    function t() {
      u("writing close packet"), e.write([{
        type: "close"
      }]);
    }

    var e = this;
    "open" === this.readyState ? (u("transport open - closing"), t()) : (u("transport not open - deferring close"), this.once("open", t));
  }, n.prototype.write = function (t) {
    var e = this;
    this.writable = !1;

    var r = function r() {
      e.writable = !0, e.emit("drain");
    };

    s.encodePayload(t, this.supportsBinary, function (t) {
      e.doWrite(t, r);
    });
  }, n.prototype.uri = function () {
    var t = this.query || {},
        e = this.secure ? "https" : "http",
        r = "";
    return !1 !== this.timestampRequests && (t[this.timestampParam] = a()), this.supportsBinary || t.sid || (t.b64 = 1), t = i.encode(t), this.port && ("https" === e && 443 !== Number(this.port) || "http" === e && 80 !== Number(this.port)) && (r = ":" + this.port), t.length && (t = "?" + t), e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + r + this.path + t;
  };
}, function (t, e, r) {
  (function (e) {
    function n(t) {
      if (!t || "object" != _typeof(t)) return !1;

      if (o(t)) {
        for (var r = 0, i = t.length; r < i; r++) {
          if (n(t[r])) return !0;
        }

        return !1;
      }

      if ("function" == typeof e && e.isBuffer && e.isBuffer(t) || "function" == typeof ArrayBuffer && t instanceof ArrayBuffer || s && t instanceof Blob || c && t instanceof File) return !0;
      if (t.toJSON && "function" == typeof t.toJSON && 1 === arguments.length) return n(t.toJSON(), !0);

      for (var a in t) {
        if (Object.prototype.hasOwnProperty.call(t, a) && n(t[a])) return !0;
      }

      return !1;
    }

    var o = r(122),
        i = Object.prototype.toString,
        s = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === i.call(Blob),
        c = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === i.call(File);
    t.exports = n;
  }).call(e, r(49).Buffer);
}, function (t, e, r) {
  "use strict";

  function n(t) {
    var e = "";

    do {
      e = c[t % a] + e, t = Math.floor(t / a);
    } while (t > 0);

    return e;
  }

  function o(t) {
    var e = 0;

    for (p = 0; p < t.length; p++) {
      e = e * a + u[t.charAt(p)];
    }

    return e;
  }

  function i() {
    var t = n(+new Date());
    return t !== s ? (f = 0, s = t) : t + "." + n(f++);
  }

  for (var s, c = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), a = 64, u = {}, f = 0, p = 0; p < a; p++) {
    u[c[p]] = p;
  }

  i.encode = n, i.decode = o, t.exports = i;
}, function (t, e) {
  var r = [].indexOf;

  t.exports = function (t, e) {
    if (r) return t.indexOf(e);

    for (var n = 0; n < t.length; ++n) {
      if (t[n] === e) return n;
    }

    return -1;
  };
}, function (t, e, r) {
  function n(t, e, r) {
    this.io = t, this.nsp = e, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.flags = {}, r && r.query && (this.query = r.query), this.io.autoConnect && this.open();
  }

  var o = r(48),
      i = r(17),
      s = r(132),
      c = r(71),
      a = r(72),
      u = r(32)("socket.io-client:socket"),
      f = r(34),
      p = r(67);
  t.exports = n;
  var l = {
    connect: 1,
    connect_error: 1,
    connect_timeout: 1,
    connecting: 1,
    disconnect: 1,
    error: 1,
    reconnect: 1,
    reconnect_attempt: 1,
    reconnect_failed: 1,
    reconnect_error: 1,
    reconnecting: 1,
    ping: 1,
    pong: 1
  },
      h = i.prototype.emit;
  i(n.prototype), n.prototype.subEvents = function () {
    if (!this.subs) {
      var t = this.io;
      this.subs = [c(t, "open", a(this, "onopen")), c(t, "packet", a(this, "onpacket")), c(t, "close", a(this, "onclose"))];
    }
  }, n.prototype.open = n.prototype.connect = function () {
    return this.connected ? this : (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting"), this);
  }, n.prototype.send = function () {
    var t = s(arguments);
    return t.unshift("message"), this.emit.apply(this, t), this;
  }, n.prototype.emit = function (t) {
    if (l.hasOwnProperty(t)) return h.apply(this, arguments), this;
    var e = s(arguments),
        r = {
      type: (void 0 !== this.flags.binary ? this.flags.binary : p(e)) ? o.BINARY_EVENT : o.EVENT,
      data: e
    };
    return r.options = {}, r.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof e[e.length - 1] && (u("emitting packet with ack id %d", this.ids), this.acks[this.ids] = e.pop(), r.id = this.ids++), this.connected ? this.packet(r) : this.sendBuffer.push(r), this.flags = {}, this;
  }, n.prototype.packet = function (t) {
    t.nsp = this.nsp, this.io.packet(t);
  }, n.prototype.onopen = function () {
    if (u("transport is open - connecting"), "/" !== this.nsp) if (this.query) {
      var t = "object" == _typeof(this.query) ? f.encode(this.query) : this.query;
      u("sending connect packet with query %s", t), this.packet({
        type: o.CONNECT,
        query: t
      });
    } else this.packet({
      type: o.CONNECT
    });
  }, n.prototype.onclose = function (t) {
    u("close (%s)", t), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", t);
  }, n.prototype.onpacket = function (t) {
    var e = t.nsp === this.nsp,
        r = t.type === o.ERROR && "/" === t.nsp;
    if (e || r) switch (t.type) {
      case o.CONNECT:
        this.onconnect();
        break;

      case o.EVENT:
      case o.BINARY_EVENT:
        this.onevent(t);
        break;

      case o.ACK:
      case o.BINARY_ACK:
        this.onack(t);
        break;

      case o.DISCONNECT:
        this.ondisconnect();
        break;

      case o.ERROR:
        this.emit("error", t.data);
    }
  }, n.prototype.onevent = function (t) {
    var e = t.data || [];
    u("emitting event %j", e), null != t.id && (u("attaching ack callback to event"), e.push(this.ack(t.id))), this.connected ? h.apply(this, e) : this.receiveBuffer.push(e);
  }, n.prototype.ack = function (t) {
    var e = this,
        r = !1;
    return function () {
      if (!r) {
        r = !0;
        var n = s(arguments);
        u("sending ack %j", n), e.packet({
          type: p(n) ? o.BINARY_ACK : o.ACK,
          id: t,
          data: n
        });
      }
    };
  }, n.prototype.onack = function (t) {
    var e = this.acks[t.id];
    "function" == typeof e ? (u("calling ack %s with %j", t.id, t.data), e.apply(this, t.data), delete this.acks[t.id]) : u("bad ack %s", t.id);
  }, n.prototype.onconnect = function () {
    this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered();
  }, n.prototype.emitBuffered = function () {
    var t;

    for (t = 0; t < this.receiveBuffer.length; t++) {
      h.apply(this, this.receiveBuffer[t]);
    }

    for (this.receiveBuffer = [], t = 0; t < this.sendBuffer.length; t++) {
      this.packet(this.sendBuffer[t]);
    }

    this.sendBuffer = [];
  }, n.prototype.ondisconnect = function () {
    u("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect");
  }, n.prototype.destroy = function () {
    if (this.subs) {
      for (var t = 0; t < this.subs.length; t++) {
        this.subs[t].destroy();
      }

      this.subs = null;
    }

    this.io.destroy(this);
  }, n.prototype.close = n.prototype.disconnect = function () {
    return this.connected && (u("performing disconnect (%s)", this.nsp), this.packet({
      type: o.DISCONNECT
    })), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
  }, n.prototype.compress = function (t) {
    return this.flags.compress = t, this;
  }, n.prototype.binary = function (t) {
    return this.flags.binary = t, this;
  };
}, function (t, e) {
  function r(t, e, r) {
    return t.on(e, r), {
      destroy: function destroy() {
        t.removeListener(e, r);
      }
    };
  }

  t.exports = r;
}, function (t, e) {
  var r = [].slice;

  t.exports = function (t, e) {
    if ("string" == typeof e && (e = t[e]), "function" != typeof e) throw new Error("bind() requires a function");
    var n = r.call(arguments, 2);
    return function () {
      return e.apply(t, n.concat(r.call(arguments)));
    };
  };
}, function (t, e, r) {
  "use strict";

  var n = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      o = function (t) {
    function e() {
      var e = t.call(this, "object unsubscribed");
      this.name = e.name = "ObjectUnsubscribedError", this.stack = e.stack, this.message = e.message;
    }

    return n(e, t), e;
  }(Error);

  e.ObjectUnsubscribedError = o;
}, function (t, e, r) {
  "use strict";

  function n() {
    return new c.Subject();
  }

  function o() {
    return function (t) {
      return s.refCount()(i.multicast(n)(t));
    };
  }

  var i = r(135),
      s = r(75),
      c = r(37);
  e.share = o;
}, function (t, e, r) {
  "use strict";

  function n() {
    return function (t) {
      return t.lift(new s(t));
    };
  }

  var o = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      i = r(3);

  e.refCount = n;

  var s = function () {
    function t(t) {
      this.connectable = t;
    }

    return t.prototype.call = function (t, e) {
      var r = this.connectable;
      r._refCount++;
      var n = new c(t, r),
          o = e.subscribe(n);
      return n.closed || (n.connection = r.connect()), o;
    }, t;
  }(),
      c = function (t) {
    function e(e, r) {
      t.call(this, e), this.connectable = r;
    }

    return o(e, t), e.prototype._unsubscribe = function () {
      var t = this.connectable;
      if (!t) return void (this.connection = null);
      this.connectable = null;
      var e = t._refCount;
      if (e <= 0) return void (this.connection = null);
      if (t._refCount = e - 1, e > 1) return void (this.connection = null);
      var r = this.connection,
          n = t._connection;
      this.connection = null, !n || r && n !== r || n.unsubscribe();
    }, e;
  }(i.Subscriber);
}, function (t, e, r) {
  "use strict";

  function n(t) {
    return t.pipe(s.tap(function (t) {
      var e = t.target,
          r = t.prop,
          n = t.value;
      e[r] = n;
    }), i.map(function (t) {
      return a.consoleInfo("[PropSet]", t.target, t.prop + " = " + t.pathname);
    }));
  }

  function o(t) {
    return [c.Events.PropSet, t];
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var i = r(2),
      s = r(5),
      c = r(19),
      a = r(14);
  e.propSetDomEffect = n, e.propSet = o;
}, function (t, e, r) {
  "use strict";

  function n(t) {
    return !o.isArray(t) && t - parseFloat(t) + 1 >= 0;
  }

  var o = r(26);
  e.isNumeric = n;
}, function (t, e, r) {
  "use strict";

  var n = r(79),
      o = r(80);
  e.async = new o.AsyncScheduler(n.AsyncAction);
}, function (t, e, r) {
  "use strict";

  var n = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      o = r(7),
      i = r(139),
      s = function (t) {
    function e(e, r) {
      t.call(this, e, r), this.scheduler = e, this.pending = !1, this.work = r;
    }

    return n(e, t), e.prototype.schedule = function (t, e) {
      if (void 0 === e && (e = 0), this.closed) return this;
      this.state = t, this.pending = !0;
      var r = this.id,
          n = this.scheduler;
      return null != r && (this.id = this.recycleAsyncId(n, r, e)), this.delay = e, this.id = this.id || this.requestAsyncId(n, this.id, e), this;
    }, e.prototype.requestAsyncId = function (t, e, r) {
      return void 0 === r && (r = 0), o.root.setInterval(t.flush.bind(t, this), r);
    }, e.prototype.recycleAsyncId = function (t, e, r) {
      return void 0 === r && (r = 0), null !== r && this.delay === r && !1 === this.pending ? e : o.root.clearInterval(e) && void 0 || void 0;
    }, e.prototype.execute = function (t, e) {
      if (this.closed) return new Error("executing a cancelled action");
      this.pending = !1;

      var r = this._execute(t, e);

      if (r) return r;
      !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
    }, e.prototype._execute = function (t, e) {
      var r = !1,
          n = void 0;

      try {
        this.work(t);
      } catch (t) {
        r = !0, n = !!t && t || new Error(t);
      }

      if (r) return this.unsubscribe(), n;
    }, e.prototype._unsubscribe = function () {
      var t = this.id,
          e = this.scheduler,
          r = e.actions,
          n = r.indexOf(this);
      this.work = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== n && r.splice(n, 1), null != t && (this.id = this.recycleAsyncId(e, t, null)), this.delay = null;
    }, e;
  }(i.Action);

  e.AsyncAction = s;
}, function (t, e, r) {
  "use strict";

  var n = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      o = r(140),
      i = function (t) {
    function e() {
      t.apply(this, arguments), this.actions = [], this.active = !1, this.scheduled = void 0;
    }

    return n(e, t), e.prototype.flush = function (t) {
      var e = this.actions;
      if (this.active) return void e.push(t);
      var r;
      this.active = !0;

      do {
        if (r = t.execute(t.state, t.delay)) break;
      } while (t = e.shift());

      if (this.active = !1, r) {
        for (; t = e.shift();) {
          t.unsubscribe();
        }

        throw r;
      }
    }, e;
  }(o.Scheduler);

  e.AsyncScheduler = i;
}, function (t, e, r) {
  "use strict";

  function n(t) {
    return t.pipe(c.tap(function (t) {
      var e = t.style,
          r = t.styleName,
          n = t.newValue;
      e[r] = n;
    }), i.map(function (t) {
      return a.consoleInfo("[StyleSet] " + t.styleName + " = " + t.pathName);
    }));
  }

  function o(t) {
    return [s.Events.StyleSet, t];
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var i = r(2),
      s = r(19),
      c = r(5),
      a = r(14);
  e.styleSetDomEffect = n, e.styleSet = o;
}, function (t, e, r) {
  "use strict";

  function n(t, e) {
    return t.pipe(c.withLatestFrom(e.option$.pipe(u.pluck("injectNotification"))), s.filter(function (t) {
      return t[1];
    }), i.map(function (t) {
      var e = t[0],
          r = t[1],
          n = "[LinkReplace] " + e.basename;
      return "overlay" === r ? a.overlayInfo(n) : a.consoleInfo(n);
    }));
  }

  function o(t) {
    return [f.Events.LinkReplace, t];
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var i = r(2),
      s = r(4),
      c = r(0),
      a = r(14),
      u = r(6),
      f = r(19);
  e.linkReplaceDomEffect = n, e.linkReplace = o;
}, function (t, e, r) {
  "use strict";

  function n(t, e) {
    return [a.Events.SetScroll, {
      x: t,
      y: e
    }];
  }

  function o(t, e) {
    return t.pipe(s.withLatestFrom(e.window$), c.tap(function (t) {
      var e = t[0];
      return t[1].scrollTo(e.x, e.y);
    }), i.ignoreElements());
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var i = r(11),
      s = r(0),
      c = r(5),
      a = r(19);
  e.setScroll = n, e.setScrollDomEffect = o;
}, function (t, e, r) {
  "use strict";

  function n(t, e) {
    return t.pipe(s.withLatestFrom(e.window$), c.tap(function (t) {
      var e = t[0];
      return t[1].name = e;
    }), i.ignoreElements());
  }

  function o(t) {
    return [a.Events.SetWindowName, t];
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var i = r(11),
      s = r(0),
      c = r(5),
      a = r(19);
  e.setWindowNameDomEffect = n, e.setWindowName = o;
}, function (t, e, r) {
  "use strict";

  function n(t, e, r, n) {
    return void 0 === n && (n = -1), [i.OutgoingSocketEvents.Scroll, {
      position: t,
      tagName: e,
      index: r,
      mappingIndex: n
    }];
  }

  function o(t, e) {
    return t.pipe(u.withLatestFrom(e.option$.pipe(s.pluck("ghostMode", "scroll")), e.window$.pipe(s.pluck("location", "pathname"))), c.filter(function (t) {
      var e = t[0],
          r = t[1],
          n = t[2];
      return r && e.pathname === n;
    }), a.map(function (t) {
      var e = t[0];
      return [f.EffectNames.BrowserSetScroll, e];
    }));
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var i = r(10),
      s = r(6),
      c = r(4),
      a = r(2),
      u = r(0),
      f = r(8);
  e.outgoing = n, e.incomingScrollHandler = o;
}, function (t, e, r) {
  "use strict";

  function n(t) {
    return [i.EffectNames.FileReload, t];
  }

  function o(t, e) {
    return t.pipe(c.withLatestFrom(e.option$, e.document$, e.navigator$), a.mergeMap(function (t) {
      var e = t[0],
          r = t[1],
          n = t[2],
          o = t[3];
      return s.reload(n, o)(e, {
        tagNames: r.tagNames,
        liveCSS: !0,
        liveImg: !0
      });
    }));
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var i = r(8),
      s = r(143),
      c = r(0),
      a = r(15);
  e.fileReload = n, e.fileReloadEffect = o;
}, function (t, e, r) {
  "use strict";

  var n = r(144);
  e.from = n.FromObservable.create;
}, function (t, e, r) {
  "use strict";

  function n(t) {
    return function (e) {
      return e.lift(new s(t));
    };
  }

  var o = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      i = r(3);

  e.mapTo = n;

  var s = function () {
    function t(t) {
      this.value = t;
    }

    return t.prototype.call = function (t, e) {
      return e.subscribe(new c(t, this.value));
    }, t;
  }(),
      c = function (t) {
    function e(e, r) {
      t.call(this, e), this.value = r;
    }

    return o(e, t), e.prototype._next = function (t) {
      this.destination.next(this.value);
    }, e;
  }(i.Subscriber);
}, function (t, e, r) {
  "use strict";

  function n(t, e) {
    return t.pipe(c.withLatestFrom(e.window$), s.tap(function (t) {
      var e = t[0],
          r = t[1];
      return e.path ? r.location = r.location.protocol + "//" + r.location.host + e.path : e.url ? r.location = e.url : void 0;
    }), i.ignoreElements());
  }

  function o(t) {
    return [a.EffectNames.BrowserSetLocation, t];
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var i = r(11),
      s = r(5),
      c = r(0),
      a = r(8);
  e.browserSetLocationEffect = n, e.browserSetLocation = o;
}, function (t, e, r) {
  "use strict";

  function n(t, e) {
    return t.pipe(c.withLatestFrom(e.window$, e.document$), s.tap(function (t) {
      var e = t[0],
          r = t[1],
          n = t[2],
          o = n.getElementsByTagName(e.tagName),
          i = o[e.index];
      i && (n.createEvent ? r.setTimeout(function () {
        var t = n.createEvent("MouseEvents");
        t.initEvent("click", !0, !0), i.dispatchEvent(t);
      }, 0) : r.setTimeout(function () {
        if (n.createEventObject) {
          var t = n.createEventObject();
          t.cancelBubble = !0, i.fireEvent("onclick", t);
        }
      }, 0));
    }), i.ignoreElements());
  }

  function o(t) {
    return [a.EffectNames.SimulateClick, t];
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var i = r(11),
      s = r(5),
      c = r(0),
      a = r(8);
  e.simulateClickEffect = n, e.simulateClick = o;
}, function (t, e, r) {
  "use strict";

  function n(t, e) {
    return t.pipe(s.withLatestFrom(e.document$), i.tap(function (t) {
      var e = t[0],
          r = t[1],
          n = r.getElementsByTagName(e.tagName),
          o = n[e.index];
      o && (o.value = e.value);
    }));
  }

  function o(t) {
    return [c.EffectNames.SetElementValue, t];
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var i = r(5),
      s = r(0),
      c = r(8);
  e.setElementValueEffect = n, e.setElementValue = o;
}, function (t, e, r) {
  "use strict";

  function n(t, e) {
    return t.pipe(s.withLatestFrom(e.document$), i.tap(function (t) {
      var e = t[0],
          r = t[1],
          n = r.getElementsByTagName(e.tagName),
          o = n[e.index];
      o && ("radio" === e.type && (o.checked = !0), "checkbox" === e.type && (o.checked = e.checked), "SELECT" === e.tagName && (o.value = e.value));
    }));
  }

  function o(t) {
    return [c.EffectNames.SetElementToggleValue, t];
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var i = r(5),
      s = r(0),
      c = r(8);
  e.setElementToggleValueEffect = n, e.setElementToggleValue = o;
}, function (t, e, r) {
  "use strict";

  function n() {
    return [s.EffectNames.BrowserReload];
  }

  function o() {
    return [s.EffectNames.PreBrowserReload];
  }

  function i(t, e) {
    return t.pipe(a.withLatestFrom(e.window$), c.tap(function (t) {
      return t[1].location.reload(!0);
    }));
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var s = r(8),
      c = r(5),
      a = r(0);
  e.browserReload = n, e.preBrowserReload = o, e.browserReloadEffect = i;
}, function (t, e, r) {
  "use strict";

  function n(t) {
    return [i.OutgoingSocketEvents.Click, t];
  }

  function o(t, e) {
    return t.pipe(u.withLatestFrom(e.option$.pipe(s.pluck("ghostMode", "clicks")), e.window$.pipe(s.pluck("location", "pathname"))), c.filter(function (t) {
      var e = t[0],
          r = t[1],
          n = t[2];
      return r && e.pathname === n;
    }), a.map(function (t) {
      var e = t[0];
      return f.simulateClick(e);
    }));
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var i = r(10),
      s = r(6),
      c = r(4),
      a = r(2),
      u = r(0),
      f = r(90);
  e.outgoing = n, e.incomingHandler$ = o;
}, function (t, e, r) {
  "use strict";

  function n(t, e) {
    return [s.OutgoingSocketEvents.Keyup, i({}, t, {
      value: e
    })];
  }

  function o(t, e) {
    return t.pipe(f.withLatestFrom(e.option$.pipe(c.pluck("ghostMode", "forms", "inputs")), e.window$.pipe(c.pluck("location", "pathname"))), a.filter(function (t) {
      var e = t[0],
          r = t[1],
          n = t[2];
      return r && e.pathname === n;
    }), u.map(function (t) {
      var e = t[0];
      return p.setElementValue(e);
    }));
  }

  var i = this && this.__assign || function () {
    return i = Object.assign || function (t) {
      for (var e, r = 1, n = arguments.length; r < n; r++) {
        e = arguments[r];

        for (var o in e) {
          Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        }
      }

      return t;
    }, i.apply(this, arguments);
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var s = r(10),
      c = r(6),
      a = r(4),
      u = r(2),
      f = r(0),
      p = r(91);
  e.outgoing = n, e.incomingKeyupHandler = o;
}, function (t, e, r) {
  "use strict";

  function n(t, e) {
    return t.pipe(s.withLatestFrom(e.option$), i.filter(function (t) {
      t[0];
      return t[1].codeSync;
    }), c.mergeMap(o));
  }

  function o() {
    return a.concat(u.of(f.preBrowserReload()), u.of(f.browserReload()).pipe(p.subscribeOn(l.async)));
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var i = r(4),
      s = r(0),
      c = r(15),
      a = r(54),
      u = r(9),
      f = r(93),
      p = r(158),
      l = r(78);
  e.incomingBrowserReload = n, e.reloadBrowserSafe = o;
}, function (t, e, r) {
  (function (t) {
    function n(t, e) {
      this._id = t, this._clearFn = e;
    }

    var o = void 0 !== t && t || "undefined" != typeof self && self || window,
        i = Function.prototype.apply;
    e.setTimeout = function () {
      return new n(i.call(setTimeout, o, arguments), clearTimeout);
    }, e.setInterval = function () {
      return new n(i.call(setInterval, o, arguments), clearInterval);
    }, e.clearTimeout = e.clearInterval = function (t) {
      t && t.close();
    }, n.prototype.unref = n.prototype.ref = function () {}, n.prototype.close = function () {
      this._clearFn.call(o, this._id);
    }, e.enroll = function (t, e) {
      clearTimeout(t._idleTimeoutId), t._idleTimeout = e;
    }, e.unenroll = function (t) {
      clearTimeout(t._idleTimeoutId), t._idleTimeout = -1;
    }, e._unrefActive = e.active = function (t) {
      clearTimeout(t._idleTimeoutId);
      var e = t._idleTimeout;
      e >= 0 && (t._idleTimeoutId = setTimeout(function () {
        t._onTimeout && t._onTimeout();
      }, e));
    }, r(163), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate;
  }).call(e, r(24));
}, function (t, e, r) {
  "use strict";

  function n(t, e) {
    return [s.OutgoingSocketEvents.InputToggle, i({}, t, e)];
  }

  function o(t, e) {
    return t.pipe(f.withLatestFrom(e.option$.pipe(c.pluck("ghostMode", "forms", "toggles")), e.window$.pipe(c.pluck("location", "pathname"))), a.filter(function (t) {
      return !0 === t[1];
    }), u.map(function (t) {
      var e = t[0];
      return p.setElementToggleValue(e);
    }));
  }

  var i = this && this.__assign || function () {
    return i = Object.assign || function (t) {
      for (var e, r = 1, n = arguments.length; r < n; r++) {
        e = arguments[r];

        for (var o in e) {
          Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        }
      }

      return t;
    }, i.apply(this, arguments);
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var s = r(10),
      c = r(6),
      a = r(4),
      u = r(2),
      f = r(0),
      p = r(92);
  e.outgoing = n, e.incomingInputsToggles = o;
}, function (t, e, r) {
  t.exports = r(100);
}, function (t, e, r) {
  "use strict";

  function n(t, e) {
    return function (t, r) {
      return r.pipe(y.groupBy(function (t) {
        return t[0];
      }), v.withLatestFrom(t), m.filter(function (t) {
        var e = t[0];
        return "function" == typeof t[1][e.key];
      }), b.mergeMap(function (t) {
        var r = t[0];
        return t[1][r.key](r.pipe(w.pluck(String(1))), e);
      }), g.share());
    };
  }

  var o = this && this.__assign || function () {
    return o = Object.assign || function (t) {
      for (var e, r = 1, n = arguments.length; r < n; r++) {
        e = arguments[r];

        for (var o in e) {
          Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        }
      }

      return t;
    }, o.apply(this, arguments);
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var i = r(101),
      s = r(107),
      c = r(137),
      a = r(19),
      u = r(10),
      f = r(38),
      p = r(14),
      l = r(8),
      h = r(169),
      d = r(170),
      y = r(176),
      v = r(0),
      b = r(15),
      g = r(74),
      m = r(4),
      w = r(6),
      _ = r(9),
      C = s.initWindow(),
      S = s.initDocument(),
      E = h.initWindowName(window),
      x = s.initSocket(),
      k = x.socket$,
      O = x.io$,
      A = s.initOptions(),
      T = _.of(navigator),
      F = c.initNotify(A.getValue()),
      P = p.initLogger(A.getValue()),
      B = d.initListeners(window, document, k, A),
      R = {
    window$: C,
    document$: S,
    socket$: k,
    option$: A,
    navigator$: T,
    notifyElement$: F,
    logInstance$: P,
    io$: O,
    outgoing$: B
  },
      j = i.zip(l.effectOutputHandlers$, h.scrollRestoreHandlers$, function () {
    for (var t = [], e = 0; e < arguments.length; e++) {
      t[e] = arguments[e];
    }

    return t.reduce(function (t, e) {
      return o({}, t, e);
    }, {});
  }),
      I = n("[socket]", R)(u.socketHandlers$, f.merge(R.socket$, B)),
      N = n("[effect]", R)(j, I),
      M = n("[dom-effect]", R)(a.domHandlers$, f.merge(N, E)),
      L = f.merge(I, N, M);

  n("[log]", R)(p.logHandler$, L).subscribe();
}, function (t, e, r) {
  "use strict";

  var n = r(102);
  e.zip = n.zipStatic;
}, function (t, e, r) {
  "use strict";

  function n() {
    for (var t = [], e = 0; e < arguments.length; e++) {
      t[e - 0] = arguments[e];
    }

    return function (e) {
      return e.lift.call(o.apply(void 0, [e].concat(t)));
    };
  }

  function o() {
    for (var t = [], e = 0; e < arguments.length; e++) {
      t[e - 0] = arguments[e];
    }

    var r = t[t.length - 1];
    return "function" == typeof r && t.pop(), new s.ArrayObservable(t).lift(new l(r));
  }

  var i = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      s = r(23),
      c = r(26),
      a = r(3),
      u = r(29),
      f = r(30),
      p = r(31);

  e.zip = n, e.zipStatic = o;

  var l = function () {
    function t(t) {
      this.project = t;
    }

    return t.prototype.call = function (t, e) {
      return e.subscribe(new h(t, this.project));
    }, t;
  }();

  e.ZipOperator = l;

  var h = function (t) {
    function e(e, r, n) {
      void 0 === n && (n = Object.create(null)), t.call(this, e), this.iterators = [], this.active = 0, this.project = "function" == typeof r ? r : null, this.values = n;
    }

    return i(e, t), e.prototype._next = function (t) {
      var e = this.iterators;
      c.isArray(t) ? e.push(new y(t)) : "function" == typeof t[p.iterator] ? e.push(new d(t[p.iterator]())) : e.push(new v(this.destination, this, t));
    }, e.prototype._complete = function () {
      var t = this.iterators,
          e = t.length;
      if (0 === e) return void this.destination.complete();
      this.active = e;

      for (var r = 0; r < e; r++) {
        var n = t[r];
        n.stillUnsubscribed ? this.add(n.subscribe(n, r)) : this.active--;
      }
    }, e.prototype.notifyInactive = function () {
      0 === --this.active && this.destination.complete();
    }, e.prototype.checkIterators = function () {
      for (var t = this.iterators, e = t.length, r = this.destination, n = 0; n < e; n++) {
        var o = t[n];
        if ("function" == typeof o.hasValue && !o.hasValue()) return;
      }

      for (var i = !1, s = [], n = 0; n < e; n++) {
        var o = t[n],
            c = o.next();
        if (o.hasCompleted() && (i = !0), c.done) return void r.complete();
        s.push(c.value);
      }

      this.project ? this._tryProject(s) : r.next(s), i && r.complete();
    }, e.prototype._tryProject = function (t) {
      var e;

      try {
        e = this.project.apply(this, t);
      } catch (t) {
        return void this.destination.error(t);
      }

      this.destination.next(e);
    }, e;
  }(a.Subscriber);

  e.ZipSubscriber = h;

  var d = function () {
    function t(t) {
      this.iterator = t, this.nextResult = t.next();
    }

    return t.prototype.hasValue = function () {
      return !0;
    }, t.prototype.next = function () {
      var t = this.nextResult;
      return this.nextResult = this.iterator.next(), t;
    }, t.prototype.hasCompleted = function () {
      var t = this.nextResult;
      return t && t.done;
    }, t;
  }(),
      y = function () {
    function t(t) {
      this.array = t, this.index = 0, this.length = 0, this.length = t.length;
    }

    return t.prototype[p.iterator] = function () {
      return this;
    }, t.prototype.next = function (t) {
      var e = this.index++,
          r = this.array;
      return e < this.length ? {
        value: r[e],
        done: !1
      } : {
        value: null,
        done: !0
      };
    }, t.prototype.hasValue = function () {
      return this.array.length > this.index;
    }, t.prototype.hasCompleted = function () {
      return this.array.length === this.index;
    }, t;
  }(),
      v = function (t) {
    function e(e, r, n) {
      t.call(this, e), this.parent = r, this.observable = n, this.stillUnsubscribed = !0, this.buffer = [], this.isComplete = !1;
    }

    return i(e, t), e.prototype[p.iterator] = function () {
      return this;
    }, e.prototype.next = function () {
      var t = this.buffer;
      return 0 === t.length && this.isComplete ? {
        value: null,
        done: !0
      } : {
        value: t.shift(),
        done: !1
      };
    }, e.prototype.hasValue = function () {
      return this.buffer.length > 0;
    }, e.prototype.hasCompleted = function () {
      return 0 === this.buffer.length && this.isComplete;
    }, e.prototype.notifyComplete = function () {
      this.buffer.length > 0 ? (this.isComplete = !0, this.parent.notifyInactive()) : this.destination.complete();
    }, e.prototype.notifyNext = function (t, e, r, n, o) {
      this.buffer.push(e), this.parent.checkIterators();
    }, e.prototype.subscribe = function (t, e) {
      return f.subscribeToResult(this, this.observable, this, e);
    }, e;
  }(u.OuterSubscriber);
}, function (t, e, r) {
  "use strict";

  function n(t, e, r) {
    if (t) {
      if (t instanceof o.Subscriber) return t;
      if (t[i.rxSubscriber]) return t[i.rxSubscriber]();
    }

    return t || e || r ? new o.Subscriber(t, e, r) : new o.Subscriber(s.empty);
  }

  var o = r(3),
      i = r(44),
      s = r(57);
  e.toSubscriber = n;
}, function (t, e, r) {
  "use strict";

  var n = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      o = function (t) {
    function e(e) {
      t.call(this), this.errors = e;
      var r = Error.call(this, e ? e.length + " errors occurred during unsubscription:\n  " + e.map(function (t, e) {
        return e + 1 + ") " + t.toString();
      }).join("\n  ") : "");
      this.name = r.name = "UnsubscriptionError", this.stack = r.stack, this.message = r.message;
    }

    return n(e, t), e;
  }(Error);

  e.UnsubscriptionError = o;
}, function (t, e, r) {
  "use strict";

  function n() {
    for (var t = [], e = 0; e < arguments.length; e++) {
      t[e - 0] = arguments[e];
    }

    return o(t);
  }

  function o(t) {
    return t ? 1 === t.length ? t[0] : function (e) {
      return t.reduce(function (t, e) {
        return e(t);
      }, e);
    } : i.noop;
  }

  var i = r(58);
  e.pipe = n, e.pipeFromArray = o;
}, function (t, e, r) {
  "use strict";

  var n = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      o = r(3),
      i = function (t) {
    function e(e, r, n) {
      t.call(this), this.parent = e, this.outerValue = r, this.outerIndex = n, this.index = 0;
    }

    return n(e, t), e.prototype._next = function (t) {
      this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this);
    }, e.prototype._error = function (t) {
      this.parent.notifyError(t, this), this.unsubscribe();
    }, e.prototype._complete = function () {
      this.parent.notifyComplete(this), this.unsubscribe();
    }, e;
  }(o.Subscriber);

  e.InnerSubscriber = i;
}, function (t, e, r) {
  "use strict";

  function n() {
    return p.of(window);
  }

  function o() {
    return p.of(document);
  }

  function i() {
    return p.of(navigator);
  }

  function s() {
    return new f.BehaviorSubject(window.___browserSync___.options);
  }

  function c() {
    var t = window.___browserSync___.socketConfig,
        e = window.___browserSync___.socketUrl,
        r = a(e, t),
        n = r.onevent,
        o = u.Observable.create(function (t) {
      r.onevent = function (e) {
        n.call(this, e), t.next(e.data);
      };
    }).pipe(l.share()),
        i = new f.BehaviorSubject(r);
    return window.___browserSync___.socket = r, {
      socket$: o,
      io$: i
    };
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var a = r(108),
      u = r(1),
      f = r(13),
      p = r(9),
      l = r(74);
  e.initWindow = n, e.initDocument = o, e.initNavigator = i, e.initOptions = s, e.initSocket = c;
}, function (t, e, r) {
  function n(t, e) {
    "object" == _typeof(t) && (e = t, t = void 0), e = e || {};
    var r,
        n = o(t),
        i = n.source,
        u = n.id,
        f = n.path,
        p = a[u] && f in a[u].nsps,
        l = e.forceNew || e["force new connection"] || !1 === e.multiplex || p;
    return l ? (c("ignoring socket cache for %s", i), r = s(i, e)) : (a[u] || (c("new io instance for %s", i), a[u] = s(i, e)), r = a[u]), n.query && !e.query && (e.query = n.query), r.socket(n.path, e);
  }

  var o = r(109),
      i = r(48),
      s = r(64),
      c = r(32)("socket.io-client");
  t.exports = e = n;
  var a = e.managers = {};
  e.protocol = i.protocol, e.connect = n, e.Manager = r(64), e.Socket = r(70);
}, function (t, e, r) {
  function n(t, e) {
    var r = t;
    e = e || "undefined" != typeof location && location, null == t && (t = e.protocol + "//" + e.host), "string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? e.protocol + t : e.host + t), /^(https?|wss?):\/\//.test(t) || (i("protocol-less url %s", t), t = void 0 !== e ? e.protocol + "//" + t : "https://" + t), i("parse %s", t), r = o(t)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
    var n = -1 !== r.host.indexOf(":"),
        s = n ? "[" + r.host + "]" : r.host;
    return r.id = r.protocol + "://" + s + ":" + r.port, r.href = r.protocol + "://" + s + (e && e.port === r.port ? "" : ":" + r.port), r;
  }

  var o = r(61),
      i = r(32)("socket.io-client:url");
  t.exports = n;
}, function (t, e, r) {
  function n(t) {
    var r,
        n = 0;

    for (r in t) {
      n = (n << 5) - n + t.charCodeAt(r), n |= 0;
    }

    return e.colors[Math.abs(n) % e.colors.length];
  }

  function o(t) {
    function r() {
      if (r.enabled) {
        var t = r,
            n = +new Date(),
            i = n - (o || n);
        t.diff = i, t.prev = o, t.curr = n, o = n;

        for (var s = new Array(arguments.length), c = 0; c < s.length; c++) {
          s[c] = arguments[c];
        }

        s[0] = e.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
        var a = 0;
        s[0] = s[0].replace(/%([a-zA-Z%])/g, function (r, n) {
          if ("%%" === r) return r;
          a++;
          var o = e.formatters[n];

          if ("function" == typeof o) {
            var i = s[a];
            r = o.call(t, i), s.splice(a, 1), a--;
          }

          return r;
        }), e.formatArgs.call(t, s);
        (r.log || e.log || console.log.bind(console)).apply(t, s);
      }
    }

    var o;
    return r.namespace = t, r.enabled = e.enabled(t), r.useColors = e.useColors(), r.color = n(t), r.destroy = i, "function" == typeof e.init && e.init(r), e.instances.push(r), r;
  }

  function i() {
    var t = e.instances.indexOf(this);
    return -1 !== t && (e.instances.splice(t, 1), !0);
  }

  function s(t) {
    e.save(t), e.names = [], e.skips = [];
    var r,
        n = ("string" == typeof t ? t : "").split(/[\s,]+/),
        o = n.length;

    for (r = 0; r < o; r++) {
      n[r] && (t = n[r].replace(/\*/g, ".*?"), "-" === t[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")));
    }

    for (r = 0; r < e.instances.length; r++) {
      var i = e.instances[r];
      i.enabled = e.enabled(i.namespace);
    }
  }

  function c() {
    e.enable("");
  }

  function a(t) {
    if ("*" === t[t.length - 1]) return !0;
    var r, n;

    for (r = 0, n = e.skips.length; r < n; r++) {
      if (e.skips[r].test(t)) return !1;
    }

    for (r = 0, n = e.names.length; r < n; r++) {
      if (e.names[r].test(t)) return !0;
    }

    return !1;
  }

  function u(t) {
    return t instanceof Error ? t.stack || t.message : t;
  }

  e = t.exports = o.debug = o["default"] = o, e.coerce = u, e.disable = c, e.enable = s, e.enabled = a, e.humanize = r(47), e.instances = [], e.names = [], e.skips = [], e.formatters = {};
}, function (t, e, r) {
  (function (n) {
    function o() {
      return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
    }

    function i(t) {
      var r = this.useColors;

      if (t[0] = (r ? "%c" : "") + this.namespace + (r ? " %c" : " ") + t[0] + (r ? "%c " : " ") + "+" + e.humanize(this.diff), r) {
        var n = "color: " + this.color;
        t.splice(1, 0, n, "color: inherit");
        var o = 0,
            i = 0;
        t[0].replace(/%[a-zA-Z%]/g, function (t) {
          "%%" !== t && (o++, "%c" === t && (i = o));
        }), t.splice(i, 0, n);
      }
    }

    function s() {
      return "object" == (typeof console === "undefined" ? "undefined" : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }

    function c(t) {
      try {
        null == t ? e.storage.removeItem("debug") : e.storage.debug = t;
      } catch (t) {}
    }

    function a() {
      var t;

      try {
        t = e.storage.debug;
      } catch (t) {}

      return !t && void 0 !== n && "env" in n && (t = n.env.DEBUG), t;
    }

    e = t.exports = r(112), e.log = s, e.formatArgs = i, e.save = c, e.load = a, e.useColors = o, e.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function () {
      try {
        return window.localStorage;
      } catch (t) {}
    }(), e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.formatters.j = function (t) {
      try {
        return JSON.stringify(t);
      } catch (t) {
        return "[UnexpectedJSONParseError]: " + t.message;
      }
    }, e.enable(a());
  }).call(e, r(33));
}, function (t, e, r) {
  function n(t) {
    var r,
        n = 0;

    for (r in t) {
      n = (n << 5) - n + t.charCodeAt(r), n |= 0;
    }

    return e.colors[Math.abs(n) % e.colors.length];
  }

  function o(t) {
    function r() {
      if (r.enabled) {
        var t = r,
            n = +new Date(),
            i = n - (o || n);
        t.diff = i, t.prev = o, t.curr = n, o = n;

        for (var s = new Array(arguments.length), c = 0; c < s.length; c++) {
          s[c] = arguments[c];
        }

        s[0] = e.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
        var a = 0;
        s[0] = s[0].replace(/%([a-zA-Z%])/g, function (r, n) {
          if ("%%" === r) return r;
          a++;
          var o = e.formatters[n];

          if ("function" == typeof o) {
            var i = s[a];
            r = o.call(t, i), s.splice(a, 1), a--;
          }

          return r;
        }), e.formatArgs.call(t, s);
        (r.log || e.log || console.log.bind(console)).apply(t, s);
      }
    }

    var o;
    return r.namespace = t, r.enabled = e.enabled(t), r.useColors = e.useColors(), r.color = n(t), r.destroy = i, "function" == typeof e.init && e.init(r), e.instances.push(r), r;
  }

  function i() {
    var t = e.instances.indexOf(this);
    return -1 !== t && (e.instances.splice(t, 1), !0);
  }

  function s(t) {
    e.save(t), e.names = [], e.skips = [];
    var r,
        n = ("string" == typeof t ? t : "").split(/[\s,]+/),
        o = n.length;

    for (r = 0; r < o; r++) {
      n[r] && (t = n[r].replace(/\*/g, ".*?"), "-" === t[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")));
    }

    for (r = 0; r < e.instances.length; r++) {
      var i = e.instances[r];
      i.enabled = e.enabled(i.namespace);
    }
  }

  function c() {
    e.enable("");
  }

  function a(t) {
    if ("*" === t[t.length - 1]) return !0;
    var r, n;

    for (r = 0, n = e.skips.length; r < n; r++) {
      if (e.skips[r].test(t)) return !1;
    }

    for (r = 0, n = e.names.length; r < n; r++) {
      if (e.names[r].test(t)) return !0;
    }

    return !1;
  }

  function u(t) {
    return t instanceof Error ? t.stack || t.message : t;
  }

  e = t.exports = o.debug = o["default"] = o, e.coerce = u, e.disable = c, e.enable = s, e.enabled = a, e.humanize = r(47), e.instances = [], e.names = [], e.skips = [], e.formatters = {};
}, function (t, e, r) {
  function n(t, e) {
    if (!t) return t;

    if (s(t)) {
      var r = {
        _placeholder: !0,
        num: e.length
      };
      return e.push(t), r;
    }

    if (i(t)) {
      for (var o = new Array(t.length), c = 0; c < t.length; c++) {
        o[c] = n(t[c], e);
      }

      return o;
    }

    if ("object" == _typeof(t) && !(t instanceof Date)) {
      var o = {};

      for (var a in t) {
        o[a] = n(t[a], e);
      }

      return o;
    }

    return t;
  }

  function o(t, e) {
    if (!t) return t;
    if (t && t._placeholder) return e[t.num];
    if (i(t)) for (var r = 0; r < t.length; r++) {
      t[r] = o(t[r], e);
    } else if ("object" == _typeof(t)) for (var n in t) {
      t[n] = o(t[n], e);
    }
    return t;
  }

  var i = r(62),
      s = r(63),
      c = Object.prototype.toString,
      a = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === c.call(Blob),
      u = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === c.call(File);
  e.deconstructPacket = function (t) {
    var e = [],
        r = t.data,
        o = t;
    return o.data = n(r, e), o.attachments = e.length, {
      packet: o,
      buffers: e
    };
  }, e.reconstructPacket = function (t, e) {
    return t.data = o(t.data, e), t.attachments = void 0, t;
  }, e.removeBlobs = function (t, e) {
    function r(t, c, f) {
      if (!t) return t;

      if (a && t instanceof Blob || u && t instanceof File) {
        n++;
        var p = new FileReader();
        p.onload = function () {
          f ? f[c] = this.result : o = this.result, --n || e(o);
        }, p.readAsArrayBuffer(t);
      } else if (i(t)) for (var l = 0; l < t.length; l++) {
        r(t[l], l, t);
      } else if ("object" == _typeof(t) && !s(t)) for (var h in t) {
        r(t[h], h, t);
      }
    }

    var n = 0,
        o = t;
    r(o), n || e(o);
  };
}, function (t, e, r) {
  "use strict";

  function n(t) {
    var e = t.length;
    if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var r = t.indexOf("=");
    return -1 === r && (r = e), [r, r === e ? 0 : 4 - r % 4];
  }

  function o(t) {
    var e = n(t),
        r = e[0],
        o = e[1];
    return 3 * (r + o) / 4 - o;
  }

  function i(t, e, r) {
    return 3 * (e + r) / 4 - r;
  }

  function s(t) {
    for (var e, r = n(t), o = r[0], s = r[1], c = new l(i(t, o, s)), a = 0, u = s > 0 ? o - 4 : o, f = 0; f < u; f += 4) {
      e = p[t.charCodeAt(f)] << 18 | p[t.charCodeAt(f + 1)] << 12 | p[t.charCodeAt(f + 2)] << 6 | p[t.charCodeAt(f + 3)], c[a++] = e >> 16 & 255, c[a++] = e >> 8 & 255, c[a++] = 255 & e;
    }

    return 2 === s && (e = p[t.charCodeAt(f)] << 2 | p[t.charCodeAt(f + 1)] >> 4, c[a++] = 255 & e), 1 === s && (e = p[t.charCodeAt(f)] << 10 | p[t.charCodeAt(f + 1)] << 4 | p[t.charCodeAt(f + 2)] >> 2, c[a++] = e >> 8 & 255, c[a++] = 255 & e), c;
  }

  function c(t) {
    return f[t >> 18 & 63] + f[t >> 12 & 63] + f[t >> 6 & 63] + f[63 & t];
  }

  function a(t, e, r) {
    for (var n, o = [], i = e; i < r; i += 3) {
      n = (t[i] << 16 & 16711680) + (t[i + 1] << 8 & 65280) + (255 & t[i + 2]), o.push(c(n));
    }

    return o.join("");
  }

  function u(t) {
    for (var e, r = t.length, n = r % 3, o = [], i = 0, s = r - n; i < s; i += 16383) {
      o.push(a(t, i, i + 16383 > s ? s : i + 16383));
    }

    return 1 === n ? (e = t[r - 1], o.push(f[e >> 2] + f[e << 4 & 63] + "==")) : 2 === n && (e = (t[r - 2] << 8) + t[r - 1], o.push(f[e >> 10] + f[e >> 4 & 63] + f[e << 2 & 63] + "=")), o.join("");
  }

  e.byteLength = o, e.toByteArray = s, e.fromByteArray = u;

  for (var f = [], p = [], l = "undefined" != typeof Uint8Array ? Uint8Array : Array, h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", d = 0, y = h.length; d < y; ++d) {
    f[d] = h[d], p[h.charCodeAt(d)] = d;
  }

  p["-".charCodeAt(0)] = 62, p["_".charCodeAt(0)] = 63;
}, function (t, e) {
  e.read = function (t, e, r, n, o) {
    var i,
        s,
        c = 8 * o - n - 1,
        a = (1 << c) - 1,
        u = a >> 1,
        f = -7,
        p = r ? o - 1 : 0,
        l = r ? -1 : 1,
        h = t[e + p];

    for (p += l, i = h & (1 << -f) - 1, h >>= -f, f += c; f > 0; i = 256 * i + t[e + p], p += l, f -= 8) {
      ;
    }

    for (s = i & (1 << -f) - 1, i >>= -f, f += n; f > 0; s = 256 * s + t[e + p], p += l, f -= 8) {
      ;
    }

    if (0 === i) i = 1 - u;else {
      if (i === a) return s ? NaN : 1 / 0 * (h ? -1 : 1);
      s += Math.pow(2, n), i -= u;
    }
    return (h ? -1 : 1) * s * Math.pow(2, i - n);
  }, e.write = function (t, e, r, n, o, i) {
    var s,
        c,
        a,
        u = 8 * i - o - 1,
        f = (1 << u) - 1,
        p = f >> 1,
        l = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        h = n ? 0 : i - 1,
        d = n ? 1 : -1,
        y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;

    for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (c = isNaN(e) ? 1 : 0, s = f) : (s = Math.floor(Math.log(e) / Math.LN2), e * (a = Math.pow(2, -s)) < 1 && (s--, a *= 2), e += s + p >= 1 ? l / a : l * Math.pow(2, 1 - p), e * a >= 2 && (s++, a /= 2), s + p >= f ? (c = 0, s = f) : s + p >= 1 ? (c = (e * a - 1) * Math.pow(2, o), s += p) : (c = e * Math.pow(2, p - 1) * Math.pow(2, o), s = 0)); o >= 8; t[r + h] = 255 & c, h += d, c /= 256, o -= 8) {
      ;
    }

    for (s = s << o | c, u += o; u > 0; t[r + h] = 255 & s, h += d, s /= 256, u -= 8) {
      ;
    }

    t[r + h - d] |= 128 * y;
  };
}, function (t, e) {
  var r = {}.toString;

  t.exports = Array.isArray || function (t) {
    return "[object Array]" == r.call(t);
  };
}, function (t, e, r) {
  t.exports = r(118), t.exports.parser = r(18);
}, function (t, e, r) {
  function n(t, e) {
    if (!(this instanceof n)) return new n(t, e);
    e = e || {}, t && "object" == _typeof(t) && (e = t, t = null), t ? (t = f(t), e.hostname = t.host, e.secure = "https" === t.protocol || "wss" === t.protocol, e.port = t.port, t.query && (e.query = t.query)) : e.host && (e.hostname = f(e.host).host), this.secure = null != e.secure ? e.secure : "undefined" != typeof location && "https:" === location.protocol, e.hostname && !e.port && (e.port = this.secure ? "443" : "80"), this.agent = e.agent || !1, this.hostname = e.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), this.port = e.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? 443 : 80), this.query = e.query || {}, "string" == typeof this.query && (this.query = p.decode(this.query)), this.upgrade = !1 !== e.upgrade, this.path = (e.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!e.forceJSONP, this.jsonp = !1 !== e.jsonp, this.forceBase64 = !!e.forceBase64, this.enablesXDR = !!e.enablesXDR, this.timestampParam = e.timestampParam || "t", this.timestampRequests = e.timestampRequests, this.transports = e.transports || ["polling", "websocket"], this.transportOptions = e.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = e.policyPort || 843, this.rememberUpgrade = e.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = e.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== e.perMessageDeflate && (e.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = e.pfx || null, this.key = e.key || null, this.passphrase = e.passphrase || null, this.cert = e.cert || null, this.ca = e.ca || null, this.ciphers = e.ciphers || null, this.rejectUnauthorized = void 0 === e.rejectUnauthorized || e.rejectUnauthorized, this.forceNode = !!e.forceNode, this.isReactNative = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase(), ("undefined" == typeof self || this.isReactNative) && (e.extraHeaders && Object.keys(e.extraHeaders).length > 0 && (this.extraHeaders = e.extraHeaders), e.localAddress && (this.localAddress = e.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open();
  }

  function o(t) {
    var e = {};

    for (var r in t) {
      t.hasOwnProperty(r) && (e[r] = t[r]);
    }

    return e;
  }

  var i = r(65),
      s = r(17),
      c = r(36)("engine.io-client:socket"),
      a = r(69),
      u = r(18),
      f = r(61),
      p = r(34);
  t.exports = n, n.priorWebsocketSuccess = !1, s(n.prototype), n.protocol = u.protocol, n.Socket = n, n.Transport = r(51), n.transports = r(65), n.parser = r(18), n.prototype.createTransport = function (t) {
    c('creating transport "%s"', t);
    var e = o(this.query);
    e.EIO = u.protocol, e.transport = t;
    var r = this.transportOptions[t] || {};
    return this.id && (e.sid = this.id), new i[t]({
      query: e,
      socket: this,
      agent: r.agent || this.agent,
      hostname: r.hostname || this.hostname,
      port: r.port || this.port,
      secure: r.secure || this.secure,
      path: r.path || this.path,
      forceJSONP: r.forceJSONP || this.forceJSONP,
      jsonp: r.jsonp || this.jsonp,
      forceBase64: r.forceBase64 || this.forceBase64,
      enablesXDR: r.enablesXDR || this.enablesXDR,
      timestampRequests: r.timestampRequests || this.timestampRequests,
      timestampParam: r.timestampParam || this.timestampParam,
      policyPort: r.policyPort || this.policyPort,
      pfx: r.pfx || this.pfx,
      key: r.key || this.key,
      passphrase: r.passphrase || this.passphrase,
      cert: r.cert || this.cert,
      ca: r.ca || this.ca,
      ciphers: r.ciphers || this.ciphers,
      rejectUnauthorized: r.rejectUnauthorized || this.rejectUnauthorized,
      perMessageDeflate: r.perMessageDeflate || this.perMessageDeflate,
      extraHeaders: r.extraHeaders || this.extraHeaders,
      forceNode: r.forceNode || this.forceNode,
      localAddress: r.localAddress || this.localAddress,
      requestTimeout: r.requestTimeout || this.requestTimeout,
      protocols: r.protocols || void 0,
      isReactNative: this.isReactNative
    });
  }, n.prototype.open = function () {
    var t;
    if (this.rememberUpgrade && n.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) t = "websocket";else {
      if (0 === this.transports.length) {
        var e = this;
        return void setTimeout(function () {
          e.emit("error", "No transports available");
        }, 0);
      }

      t = this.transports[0];
    }
    this.readyState = "opening";

    try {
      t = this.createTransport(t);
    } catch (t) {
      return this.transports.shift(), void this.open();
    }

    t.open(), this.setTransport(t);
  }, n.prototype.setTransport = function (t) {
    c("setting transport %s", t.name);
    var e = this;
    this.transport && (c("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = t, t.on("drain", function () {
      e.onDrain();
    }).on("packet", function (t) {
      e.onPacket(t);
    }).on("error", function (t) {
      e.onError(t);
    }).on("close", function () {
      e.onClose("transport close");
    });
  }, n.prototype.probe = function (t) {
    function e() {
      if (l.onlyBinaryUpgrades) {
        var e = !this.supportsBinary && l.transport.supportsBinary;
        p = p || e;
      }

      p || (c('probe transport "%s" opened', t), f.send([{
        type: "ping",
        data: "probe"
      }]), f.once("packet", function (e) {
        if (!p) if ("pong" === e.type && "probe" === e.data) {
          if (c('probe transport "%s" pong', t), l.upgrading = !0, l.emit("upgrading", f), !f) return;
          n.priorWebsocketSuccess = "websocket" === f.name, c('pausing current transport "%s"', l.transport.name), l.transport.pause(function () {
            p || "closed" !== l.readyState && (c("changing transport and sending upgrade packet"), u(), l.setTransport(f), f.send([{
              type: "upgrade"
            }]), l.emit("upgrade", f), f = null, l.upgrading = !1, l.flush());
          });
        } else {
          c('probe transport "%s" failed', t);
          var r = new Error("probe error");
          r.transport = f.name, l.emit("upgradeError", r);
        }
      }));
    }

    function r() {
      p || (p = !0, u(), f.close(), f = null);
    }

    function o(e) {
      var n = new Error("probe error: " + e);
      n.transport = f.name, r(), c('probe transport "%s" failed because of error: %s', t, e), l.emit("upgradeError", n);
    }

    function i() {
      o("transport closed");
    }

    function s() {
      o("socket closed");
    }

    function a(t) {
      f && t.name !== f.name && (c('"%s" works - aborting "%s"', t.name, f.name), r());
    }

    function u() {
      f.removeListener("open", e), f.removeListener("error", o), f.removeListener("close", i), l.removeListener("close", s), l.removeListener("upgrading", a);
    }

    c('probing transport "%s"', t);
    var f = this.createTransport(t, {
      probe: 1
    }),
        p = !1,
        l = this;
    n.priorWebsocketSuccess = !1, f.once("open", e), f.once("error", o), f.once("close", i), this.once("close", s), this.once("upgrading", a), f.open();
  }, n.prototype.onOpen = function () {
    if (c("socket open"), this.readyState = "open", n.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) {
      c("starting upgrade probes");

      for (var t = 0, e = this.upgrades.length; t < e; t++) {
        this.probe(this.upgrades[t]);
      }
    }
  }, n.prototype.onPacket = function (t) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (c('socket receive: type "%s", data "%s"', t.type, t.data), this.emit("packet", t), this.emit("heartbeat"), t.type) {
      case "open":
        this.onHandshake(JSON.parse(t.data));
        break;

      case "pong":
        this.setPing(), this.emit("pong");
        break;

      case "error":
        var e = new Error("server error");
        e.code = t.data, this.onError(e);
        break;

      case "message":
        this.emit("data", t.data), this.emit("message", t.data);
    } else c('packet received with socket readyState "%s"', this.readyState);
  }, n.prototype.onHandshake = function (t) {
    this.emit("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.onOpen(), "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat));
  }, n.prototype.onHeartbeat = function (t) {
    clearTimeout(this.pingTimeoutTimer);
    var e = this;
    e.pingTimeoutTimer = setTimeout(function () {
      "closed" !== e.readyState && e.onClose("ping timeout");
    }, t || e.pingInterval + e.pingTimeout);
  }, n.prototype.setPing = function () {
    var t = this;
    clearTimeout(t.pingIntervalTimer), t.pingIntervalTimer = setTimeout(function () {
      c("writing ping packet - expecting pong within %sms", t.pingTimeout), t.ping(), t.onHeartbeat(t.pingTimeout);
    }, t.pingInterval);
  }, n.prototype.ping = function () {
    var t = this;
    this.sendPacket("ping", function () {
      t.emit("ping");
    });
  }, n.prototype.onDrain = function () {
    this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush();
  }, n.prototype.flush = function () {
    "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (c("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"));
  }, n.prototype.write = n.prototype.send = function (t, e, r) {
    return this.sendPacket("message", t, e, r), this;
  }, n.prototype.sendPacket = function (t, e, r, n) {
    if ("function" == typeof e && (n = e, e = void 0), "function" == typeof r && (n = r, r = null), "closing" !== this.readyState && "closed" !== this.readyState) {
      r = r || {}, r.compress = !1 !== r.compress;
      var o = {
        type: t,
        data: e,
        options: r
      };
      this.emit("packetCreate", o), this.writeBuffer.push(o), n && this.once("flush", n), this.flush();
    }
  }, n.prototype.close = function () {
    function t() {
      n.onClose("forced close"), c("socket closing - telling transport to close"), n.transport.close();
    }

    function e() {
      n.removeListener("upgrade", e), n.removeListener("upgradeError", e), t();
    }

    function r() {
      n.once("upgrade", e), n.once("upgradeError", e);
    }

    if ("opening" === this.readyState || "open" === this.readyState) {
      this.readyState = "closing";
      var n = this;
      this.writeBuffer.length ? this.once("drain", function () {
        this.upgrading ? r() : t();
      }) : this.upgrading ? r() : t();
    }

    return this;
  }, n.prototype.onError = function (t) {
    c("socket error %j", t), n.priorWebsocketSuccess = !1, this.emit("error", t), this.onClose("transport error", t);
  }, n.prototype.onClose = function (t, e) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      c('socket close with reason: "%s"', t);
      var r = this;
      clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", t, e), r.writeBuffer = [], r.prevBufferLen = 0;
    }
  }, n.prototype.filterUpgrades = function (t) {
    for (var e = [], r = 0, n = t.length; r < n; r++) {
      ~a(this.transports, t[r]) && e.push(t[r]);
    }

    return e;
  };
}, function (t, e) {
  try {
    t.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
  } catch (e) {
    t.exports = !1;
  }
}, function (t, e, r) {
  function n() {}

  function o(t) {
    if (a.call(this, t), this.requestTimeout = t.requestTimeout, this.extraHeaders = t.extraHeaders, "undefined" != typeof location) {
      var e = "https:" === location.protocol,
          r = location.port;
      r || (r = e ? 443 : 80), this.xd = "undefined" != typeof location && t.hostname !== location.hostname || r !== t.port, this.xs = t.secure !== e;
    }
  }

  function i(t) {
    this.method = t.method || "GET", this.uri = t.uri, this.xd = !!t.xd, this.xs = !!t.xs, this.async = !1 !== t.async, this.data = void 0 !== t.data ? t.data : null, this.agent = t.agent, this.isBinary = t.isBinary, this.supportsBinary = t.supportsBinary, this.enablesXDR = t.enablesXDR, this.requestTimeout = t.requestTimeout, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.extraHeaders = t.extraHeaders, this.create();
  }

  function s() {
    for (var t in i.requests) {
      i.requests.hasOwnProperty(t) && i.requests[t].abort();
    }
  }

  var c = r(50),
      a = r(66),
      u = r(17),
      f = r(35),
      p = r(36)("engine.io-client:polling-xhr");
  if (t.exports = o, t.exports.Request = i, f(o, a), o.prototype.supportsBinary = !0, o.prototype.request = function (t) {
    return t = t || {}, t.uri = this.uri(), t.xd = this.xd, t.xs = this.xs, t.agent = this.agent || !1, t.supportsBinary = this.supportsBinary, t.enablesXDR = this.enablesXDR, t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized, t.requestTimeout = this.requestTimeout, t.extraHeaders = this.extraHeaders, new i(t);
  }, o.prototype.doWrite = function (t, e) {
    var r = "string" != typeof t && void 0 !== t,
        n = this.request({
      method: "POST",
      data: t,
      isBinary: r
    }),
        o = this;
    n.on("success", e), n.on("error", function (t) {
      o.onError("xhr post error", t);
    }), this.sendXhr = n;
  }, o.prototype.doPoll = function () {
    p("xhr poll");
    var t = this.request(),
        e = this;
    t.on("data", function (t) {
      e.onData(t);
    }), t.on("error", function (t) {
      e.onError("xhr poll error", t);
    }), this.pollXhr = t;
  }, u(i.prototype), i.prototype.create = function () {
    var t = {
      agent: this.agent,
      xdomain: this.xd,
      xscheme: this.xs,
      enablesXDR: this.enablesXDR
    };
    t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized;
    var e = this.xhr = new c(t),
        r = this;

    try {
      p("xhr open %s: %s", this.method, this.uri), e.open(this.method, this.uri, this.async);

      try {
        if (this.extraHeaders) {
          e.setDisableHeaderCheck && e.setDisableHeaderCheck(!0);

          for (var n in this.extraHeaders) {
            this.extraHeaders.hasOwnProperty(n) && e.setRequestHeader(n, this.extraHeaders[n]);
          }
        }
      } catch (t) {}

      if ("POST" === this.method) try {
        this.isBinary ? e.setRequestHeader("Content-type", "application/octet-stream") : e.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
      } catch (t) {}

      try {
        e.setRequestHeader("Accept", "*/*");
      } catch (t) {}

      "withCredentials" in e && (e.withCredentials = !0), this.requestTimeout && (e.timeout = this.requestTimeout), this.hasXDR() ? (e.onload = function () {
        r.onLoad();
      }, e.onerror = function () {
        r.onError(e.responseText);
      }) : e.onreadystatechange = function () {
        if (2 === e.readyState) try {
          var t = e.getResponseHeader("Content-Type");
          r.supportsBinary && "application/octet-stream" === t && (e.responseType = "arraybuffer");
        } catch (t) {}
        4 === e.readyState && (200 === e.status || 1223 === e.status ? r.onLoad() : setTimeout(function () {
          r.onError(e.status);
        }, 0));
      }, p("xhr data %s", this.data), e.send(this.data);
    } catch (t) {
      return void setTimeout(function () {
        r.onError(t);
      }, 0);
    }

    "undefined" != typeof document && (this.index = i.requestsCount++, i.requests[this.index] = this);
  }, i.prototype.onSuccess = function () {
    this.emit("success"), this.cleanup();
  }, i.prototype.onData = function (t) {
    this.emit("data", t), this.onSuccess();
  }, i.prototype.onError = function (t) {
    this.emit("error", t), this.cleanup(!0);
  }, i.prototype.cleanup = function (t) {
    if (void 0 !== this.xhr && null !== this.xhr) {
      if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = n : this.xhr.onreadystatechange = n, t) try {
        this.xhr.abort();
      } catch (t) {}
      "undefined" != typeof document && delete i.requests[this.index], this.xhr = null;
    }
  }, i.prototype.onLoad = function () {
    var t;

    try {
      var e;

      try {
        e = this.xhr.getResponseHeader("Content-Type");
      } catch (t) {}

      t = "application/octet-stream" === e ? this.xhr.response || this.xhr.responseText : this.xhr.responseText;
    } catch (t) {
      this.onError(t);
    }

    null != t && this.onData(t);
  }, i.prototype.hasXDR = function () {
    return "undefined" != typeof XDomainRequest && !this.xs && this.enablesXDR;
  }, i.prototype.abort = function () {
    this.cleanup();
  }, i.requestsCount = 0, i.requests = {}, "undefined" != typeof document) if ("function" == typeof attachEvent) attachEvent("onunload", s);else if ("function" == typeof addEventListener) {
    var l = "onpagehide" in self ? "pagehide" : "unload";
    addEventListener(l, s, !1);
  }
}, function (t, e) {
  t.exports = Object.keys || function (t) {
    var e = [],
        r = Object.prototype.hasOwnProperty;

    for (var n in t) {
      r.call(t, n) && e.push(n);
    }

    return e;
  };
}, function (t, e) {
  var r = {}.toString;

  t.exports = Array.isArray || function (t) {
    return "[object Array]" == r.call(t);
  };
}, function (t, e) {
  t.exports = function (t, e, r) {
    var n = t.byteLength;
    if (e = e || 0, r = r || n, t.slice) return t.slice(e, r);
    if (e < 0 && (e += n), r < 0 && (r += n), r > n && (r = n), e >= n || e >= r || 0 === n) return new ArrayBuffer(0);

    for (var o = new Uint8Array(t), i = new Uint8Array(r - e), s = e, c = 0; s < r; s++, c++) {
      i[c] = o[s];
    }

    return i.buffer;
  };
}, function (t, e) {
  function r(t, e, r) {
    function o(t, n) {
      if (o.count <= 0) throw new Error("after called too many times");
      --o.count, t ? (i = !0, e(t), e = r) : 0 !== o.count || i || e(null, n);
    }

    var i = !1;
    return r = r || n, o.count = t, 0 === t ? e() : o;
  }

  function n() {}

  t.exports = r;
}, function (t, e) {
  function r(t) {
    for (var e, r, n = [], o = 0, i = t.length; o < i;) {
      e = t.charCodeAt(o++), e >= 55296 && e <= 56319 && o < i ? (r = t.charCodeAt(o++), 56320 == (64512 & r) ? n.push(((1023 & e) << 10) + (1023 & r) + 65536) : (n.push(e), o--)) : n.push(e);
    }

    return n;
  }

  function n(t) {
    for (var e, r = t.length, n = -1, o = ""; ++n < r;) {
      e = t[n], e > 65535 && (e -= 65536, o += d(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), o += d(e);
    }

    return o;
  }

  function o(t, e) {
    if (t >= 55296 && t <= 57343) {
      if (e) throw Error("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value");
      return !1;
    }

    return !0;
  }

  function i(t, e) {
    return d(t >> e & 63 | 128);
  }

  function s(t, e) {
    if (0 == (4294967168 & t)) return d(t);
    var r = "";
    return 0 == (4294965248 & t) ? r = d(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (o(t, e) || (t = 65533), r = d(t >> 12 & 15 | 224), r += i(t, 6)) : 0 == (4292870144 & t) && (r = d(t >> 18 & 7 | 240), r += i(t, 12), r += i(t, 6)), r += d(63 & t | 128);
  }

  function c(t, e) {
    e = e || {};

    for (var n, o = !1 !== e.strict, i = r(t), c = i.length, a = -1, u = ""; ++a < c;) {
      n = i[a], u += s(n, o);
    }

    return u;
  }

  function a() {
    if (h >= l) throw Error("Invalid byte index");
    var t = 255 & p[h];
    if (h++, 128 == (192 & t)) return 63 & t;
    throw Error("Invalid continuation byte");
  }

  function u(t) {
    var e, r, n, i, s;
    if (h > l) throw Error("Invalid byte index");
    if (h == l) return !1;
    if (e = 255 & p[h], h++, 0 == (128 & e)) return e;

    if (192 == (224 & e)) {
      if (r = a(), (s = (31 & e) << 6 | r) >= 128) return s;
      throw Error("Invalid continuation byte");
    }

    if (224 == (240 & e)) {
      if (r = a(), n = a(), (s = (15 & e) << 12 | r << 6 | n) >= 2048) return o(s, t) ? s : 65533;
      throw Error("Invalid continuation byte");
    }

    if (240 == (248 & e) && (r = a(), n = a(), i = a(), (s = (7 & e) << 18 | r << 12 | n << 6 | i) >= 65536 && s <= 1114111)) return s;
    throw Error("Invalid UTF-8 detected");
  }

  function f(t, e) {
    e = e || {};
    var o = !1 !== e.strict;
    p = r(t), l = p.length, h = 0;

    for (var i, s = []; !1 !== (i = u(o));) {
      s.push(i);
    }

    return n(s);
  }
  /*! https://mths.be/utf8js v2.1.2 by @mathias */


  var p,
      l,
      h,
      d = String.fromCharCode;
  t.exports = {
    version: "2.1.2",
    encode: c,
    decode: f
  };
}, function (t, e) {
  !function () {
    "use strict";

    for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = new Uint8Array(256), n = 0; n < t.length; n++) {
      r[t.charCodeAt(n)] = n;
    }

    e.encode = function (e) {
      var r,
          n = new Uint8Array(e),
          o = n.length,
          i = "";

      for (r = 0; r < o; r += 3) {
        i += t[n[r] >> 2], i += t[(3 & n[r]) << 4 | n[r + 1] >> 4], i += t[(15 & n[r + 1]) << 2 | n[r + 2] >> 6], i += t[63 & n[r + 2]];
      }

      return o % 3 == 2 ? i = i.substring(0, i.length - 1) + "=" : o % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="), i;
    }, e.decode = function (t) {
      var e,
          n,
          o,
          i,
          s,
          c = .75 * t.length,
          a = t.length,
          u = 0;
      "=" === t[t.length - 1] && (c--, "=" === t[t.length - 2] && c--);
      var f = new ArrayBuffer(c),
          p = new Uint8Array(f);

      for (e = 0; e < a; e += 4) {
        n = r[t.charCodeAt(e)], o = r[t.charCodeAt(e + 1)], i = r[t.charCodeAt(e + 2)], s = r[t.charCodeAt(e + 3)], p[u++] = n << 2 | o >> 4, p[u++] = (15 & o) << 4 | i >> 2, p[u++] = (3 & i) << 6 | 63 & s;
      }

      return f;
    };
  }();
}, function (t, e) {
  function r(t) {
    return t.map(function (t) {
      if (t.buffer instanceof ArrayBuffer) {
        var e = t.buffer;

        if (t.byteLength !== e.byteLength) {
          var r = new Uint8Array(t.byteLength);
          r.set(new Uint8Array(e, t.byteOffset, t.byteLength)), e = r.buffer;
        }

        return e;
      }

      return t;
    });
  }

  function n(t, e) {
    e = e || {};
    var n = new i();
    return r(t).forEach(function (t) {
      n.append(t);
    }), e.type ? n.getBlob(e.type) : n.getBlob();
  }

  function o(t, e) {
    return new Blob(r(t), e || {});
  }

  var i = void 0 !== i ? i : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder && MozBlobBuilder,
      s = function () {
    try {
      return 2 === new Blob(["hi"]).size;
    } catch (t) {
      return !1;
    }
  }(),
      c = s && function () {
    try {
      return 2 === new Blob([new Uint8Array([1, 2])]).size;
    } catch (t) {
      return !1;
    }
  }(),
      a = i && i.prototype.append && i.prototype.getBlob;

  "undefined" != typeof Blob && (n.prototype = Blob.prototype, o.prototype = Blob.prototype), t.exports = function () {
    return s ? c ? Blob : o : a ? n : void 0;
  }();
}, function (t, e, r) {
  function n(t) {
    var r,
        n = 0;

    for (r in t) {
      n = (n << 5) - n + t.charCodeAt(r), n |= 0;
    }

    return e.colors[Math.abs(n) % e.colors.length];
  }

  function o(t) {
    function r() {
      if (r.enabled) {
        var t = r,
            n = +new Date(),
            i = n - (o || n);
        t.diff = i, t.prev = o, t.curr = n, o = n;

        for (var s = new Array(arguments.length), c = 0; c < s.length; c++) {
          s[c] = arguments[c];
        }

        s[0] = e.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
        var a = 0;
        s[0] = s[0].replace(/%([a-zA-Z%])/g, function (r, n) {
          if ("%%" === r) return r;
          a++;
          var o = e.formatters[n];

          if ("function" == typeof o) {
            var i = s[a];
            r = o.call(t, i), s.splice(a, 1), a--;
          }

          return r;
        }), e.formatArgs.call(t, s);
        (r.log || e.log || console.log.bind(console)).apply(t, s);
      }
    }

    var o;
    return r.namespace = t, r.enabled = e.enabled(t), r.useColors = e.useColors(), r.color = n(t), r.destroy = i, "function" == typeof e.init && e.init(r), e.instances.push(r), r;
  }

  function i() {
    var t = e.instances.indexOf(this);
    return -1 !== t && (e.instances.splice(t, 1), !0);
  }

  function s(t) {
    e.save(t), e.names = [], e.skips = [];
    var r,
        n = ("string" == typeof t ? t : "").split(/[\s,]+/),
        o = n.length;

    for (r = 0; r < o; r++) {
      n[r] && (t = n[r].replace(/\*/g, ".*?"), "-" === t[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")));
    }

    for (r = 0; r < e.instances.length; r++) {
      var i = e.instances[r];
      i.enabled = e.enabled(i.namespace);
    }
  }

  function c() {
    e.enable("");
  }

  function a(t) {
    if ("*" === t[t.length - 1]) return !0;
    var r, n;

    for (r = 0, n = e.skips.length; r < n; r++) {
      if (e.skips[r].test(t)) return !1;
    }

    for (r = 0, n = e.names.length; r < n; r++) {
      if (e.names[r].test(t)) return !0;
    }

    return !1;
  }

  function u(t) {
    return t instanceof Error ? t.stack || t.message : t;
  }

  e = t.exports = o.debug = o["default"] = o, e.coerce = u, e.disable = c, e.enable = s, e.enabled = a, e.humanize = r(47), e.instances = [], e.names = [], e.skips = [], e.formatters = {};
}, function (t, e, r) {
  (function (e) {
    function n() {}

    function o() {
      return "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : {};
    }

    function i(t) {
      if (s.call(this, t), this.query = this.query || {}, !a) {
        var e = o();
        a = e.___eio = e.___eio || [];
      }

      this.index = a.length;
      var r = this;
      a.push(function (t) {
        r.onData(t);
      }), this.query.j = this.index, "function" == typeof addEventListener && addEventListener("beforeunload", function () {
        r.script && (r.script.onerror = n);
      }, !1);
    }

    var s = r(66),
        c = r(35);
    t.exports = i;
    var a,
        u = /\n/g,
        f = /\\n/g;
    c(i, s), i.prototype.supportsBinary = !1, i.prototype.doClose = function () {
      this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), s.prototype.doClose.call(this);
    }, i.prototype.doPoll = function () {
      var t = this,
          e = document.createElement("script");
      this.script && (this.script.parentNode.removeChild(this.script), this.script = null), e.async = !0, e.src = this.uri(), e.onerror = function (e) {
        t.onError("jsonp poll error", e);
      };
      var r = document.getElementsByTagName("script")[0];
      r ? r.parentNode.insertBefore(e, r) : (document.head || document.body).appendChild(e), this.script = e, "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout(function () {
        var t = document.createElement("iframe");
        document.body.appendChild(t), document.body.removeChild(t);
      }, 100);
    }, i.prototype.doWrite = function (t, e) {
      function r() {
        n(), e();
      }

      function n() {
        if (o.iframe) try {
          o.form.removeChild(o.iframe);
        } catch (t) {
          o.onError("jsonp polling iframe removal error", t);
        }

        try {
          var t = '<iframe src="javascript:0" name="' + o.iframeId + '">';
          i = document.createElement(t);
        } catch (t) {
          i = document.createElement("iframe"), i.name = o.iframeId, i.src = "javascript:0";
        }

        i.id = o.iframeId, o.form.appendChild(i), o.iframe = i;
      }

      var o = this;

      if (!this.form) {
        var i,
            s = document.createElement("form"),
            c = document.createElement("textarea"),
            a = this.iframeId = "eio_iframe_" + this.index;
        s.className = "socketio", s.style.position = "absolute", s.style.top = "-1000px", s.style.left = "-1000px", s.target = a, s.method = "POST", s.setAttribute("accept-charset", "utf-8"), c.name = "d", s.appendChild(c), document.body.appendChild(s), this.form = s, this.area = c;
      }

      this.form.action = this.uri(), n(), t = t.replace(f, "\\\n"), this.area.value = t.replace(u, "\\n");

      try {
        this.form.submit();
      } catch (t) {}

      this.iframe.attachEvent ? this.iframe.onreadystatechange = function () {
        "complete" === o.iframe.readyState && r();
      } : this.iframe.onload = r;
    };
  }).call(e, r(24));
}, function (t, e, r) {
  (function (e) {
    function n(t) {
      t && t.forceBase64 && (this.supportsBinary = !1), this.perMessageDeflate = t.perMessageDeflate, this.usingBrowserWebSocket = o && !t.forceNode, this.protocols = t.protocols, this.usingBrowserWebSocket || (l = i), s.call(this, t);
    }

    var o,
        i,
        s = r(51),
        c = r(18),
        a = r(34),
        u = r(35),
        f = r(68),
        p = r(36)("engine.io-client:websocket");
    if ("undefined" != typeof WebSocket) o = WebSocket;else if ("undefined" != typeof self) o = self.WebSocket || self.MozWebSocket;else try {
      i = r(131);
    } catch (t) {}
    var l = o || i;
    t.exports = n, u(n, s), n.prototype.name = "websocket", n.prototype.supportsBinary = !0, n.prototype.doOpen = function () {
      if (this.check()) {
        var t = this.uri(),
            e = this.protocols,
            r = {
          agent: this.agent,
          perMessageDeflate: this.perMessageDeflate
        };
        r.pfx = this.pfx, r.key = this.key, r.passphrase = this.passphrase, r.cert = this.cert, r.ca = this.ca, r.ciphers = this.ciphers, r.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (r.headers = this.extraHeaders), this.localAddress && (r.localAddress = this.localAddress);

        try {
          this.ws = this.usingBrowserWebSocket && !this.isReactNative ? e ? new l(t, e) : new l(t) : new l(t, e, r);
        } catch (t) {
          return this.emit("error", t);
        }

        void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners();
      }
    }, n.prototype.addEventListeners = function () {
      var t = this;
      this.ws.onopen = function () {
        t.onOpen();
      }, this.ws.onclose = function () {
        t.onClose();
      }, this.ws.onmessage = function (e) {
        t.onData(e.data);
      }, this.ws.onerror = function (e) {
        t.onError("websocket error", e);
      };
    }, n.prototype.write = function (t) {
      function r() {
        n.emit("flush"), setTimeout(function () {
          n.writable = !0, n.emit("drain");
        }, 0);
      }

      var n = this;
      this.writable = !1;

      for (var o = t.length, i = 0, s = o; i < s; i++) {
        !function (t) {
          c.encodePacket(t, n.supportsBinary, function (i) {
            if (!n.usingBrowserWebSocket) {
              var s = {};

              if (t.options && (s.compress = t.options.compress), n.perMessageDeflate) {
                ("string" == typeof i ? e.byteLength(i) : i.length) < n.perMessageDeflate.threshold && (s.compress = !1);
              }
            }

            try {
              n.usingBrowserWebSocket ? n.ws.send(i) : n.ws.send(i, s);
            } catch (t) {
              p("websocket closed before onclose event");
            }

            --o || r();
          });
        }(t[i]);
      }
    }, n.prototype.onClose = function () {
      s.prototype.onClose.call(this);
    }, n.prototype.doClose = function () {
      void 0 !== this.ws && this.ws.close();
    }, n.prototype.uri = function () {
      var t = this.query || {},
          e = this.secure ? "wss" : "ws",
          r = "";
      return this.port && ("wss" === e && 443 !== Number(this.port) || "ws" === e && 80 !== Number(this.port)) && (r = ":" + this.port), this.timestampRequests && (t[this.timestampParam] = f()), this.supportsBinary || (t.b64 = 1), t = a.encode(t), t.length && (t = "?" + t), e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + r + this.path + t;
    }, n.prototype.check = function () {
      return !(!l || "__initialize" in l && this.name === n.prototype.name);
    };
  }).call(e, r(49).Buffer);
}, function (t, e) {}, function (t, e) {
  function r(t, e) {
    var r = [];
    e = e || 0;

    for (var n = e || 0; n < t.length; n++) {
      r[n - e] = t[n];
    }

    return r;
  }

  t.exports = r;
}, function (t, e) {
  function r(t) {
    t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
  }

  t.exports = r, r.prototype.duration = function () {
    var t = this.ms * Math.pow(this.factor, this.attempts++);

    if (this.jitter) {
      var e = Math.random(),
          r = Math.floor(e * this.jitter * t);
      t = 0 == (1 & Math.floor(10 * e)) ? t - r : t + r;
    }

    return 0 | Math.min(t, this.max);
  }, r.prototype.reset = function () {
    this.attempts = 0;
  }, r.prototype.setMin = function (t) {
    this.ms = t;
  }, r.prototype.setMax = function (t) {
    this.max = t;
  }, r.prototype.setJitter = function (t) {
    this.jitter = t;
  };
}, function (t, e, r) {
  "use strict";

  var n = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      o = r(12),
      i = function (t) {
    function e(e, r) {
      t.call(this), this.subject = e, this.subscriber = r, this.closed = !1;
    }

    return n(e, t), e.prototype.unsubscribe = function () {
      if (!this.closed) {
        this.closed = !0;
        var t = this.subject,
            e = t.observers;

        if (this.subject = null, e && 0 !== e.length && !t.isStopped && !t.closed) {
          var r = e.indexOf(this.subscriber);
          -1 !== r && e.splice(r, 1);
        }
      }
    }, e;
  }(o.Subscription);

  e.SubjectSubscription = i;
}, function (t, e, r) {
  "use strict";

  function n(t, e) {
    return function (r) {
      var n;
      if (n = "function" == typeof t ? t : function () {
        return t;
      }, "function" == typeof e) return r.lift(new i(n, e));
      var s = Object.create(r, o.connectableObservableDescriptor);
      return s.source = r, s.subjectFactory = n, s;
    };
  }

  var o = r(136);
  e.multicast = n;

  var i = function () {
    function t(t, e) {
      this.subjectFactory = t, this.selector = e;
    }

    return t.prototype.call = function (t, e) {
      var r = this.selector,
          n = this.subjectFactory(),
          o = r(n).subscribe(t);
      return o.add(e.subscribe(n)), o;
    }, t;
  }();

  e.MulticastOperator = i;
}, function (t, e, r) {
  "use strict";

  var n = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      o = r(37),
      i = r(1),
      s = r(3),
      c = r(12),
      a = r(75),
      u = function (t) {
    function e(e, r) {
      t.call(this), this.source = e, this.subjectFactory = r, this._refCount = 0, this._isComplete = !1;
    }

    return n(e, t), e.prototype._subscribe = function (t) {
      return this.getSubject().subscribe(t);
    }, e.prototype.getSubject = function () {
      var t = this._subject;
      return t && !t.isStopped || (this._subject = this.subjectFactory()), this._subject;
    }, e.prototype.connect = function () {
      var t = this._connection;
      return t || (this._isComplete = !1, t = this._connection = new c.Subscription(), t.add(this.source.subscribe(new p(this.getSubject(), this))), t.closed ? (this._connection = null, t = c.Subscription.EMPTY) : this._connection = t), t;
    }, e.prototype.refCount = function () {
      return a.refCount()(this);
    }, e;
  }(i.Observable);

  e.ConnectableObservable = u;
  var f = u.prototype;
  e.connectableObservableDescriptor = {
    operator: {
      value: null
    },
    _refCount: {
      value: 0,
      writable: !0
    },
    _subject: {
      value: null,
      writable: !0
    },
    _connection: {
      value: null,
      writable: !0
    },
    _subscribe: {
      value: f._subscribe
    },
    _isComplete: {
      value: f._isComplete,
      writable: !0
    },
    getSubject: {
      value: f.getSubject
    },
    connect: {
      value: f.connect
    },
    refCount: {
      value: f.refCount
    }
  };

  var p = function (t) {
    function e(e, r) {
      t.call(this, e), this.connectable = r;
    }

    return n(e, t), e.prototype._error = function (e) {
      this._unsubscribe(), t.prototype._error.call(this, e);
    }, e.prototype._complete = function () {
      this.connectable._isComplete = !0, this._unsubscribe(), t.prototype._complete.call(this);
    }, e.prototype._unsubscribe = function () {
      var t = this.connectable;

      if (t) {
        this.connectable = null;
        var e = t._connection;
        t._refCount = 0, t._subject = null, t._connection = null, e && e.unsubscribe();
      }
    }, e;
  }(o.SubjectSubscriber),
      l = (function () {
    function t(t) {
      this.connectable = t;
    }

    t.prototype.call = function (t, e) {
      var r = this.connectable;
      r._refCount++;
      var n = new l(t, r),
          o = e.subscribe(n);
      return n.closed || (n.connection = r.connect()), o;
    };
  }(), function (t) {
    function e(e, r) {
      t.call(this, e), this.connectable = r;
    }

    return n(e, t), e.prototype._unsubscribe = function () {
      var t = this.connectable;
      if (!t) return void (this.connection = null);
      this.connectable = null;
      var e = t._refCount;
      if (e <= 0) return void (this.connection = null);
      if (t._refCount = e - 1, e > 1) return void (this.connection = null);
      var r = this.connection,
          n = t._connection;
      this.connection = null, !n || r && n !== r || n.unsubscribe();
    }, e;
  }(s.Subscriber));
}, function (t, e, r) {
  "use strict";

  function n(t) {
    var e,
        r = i;
    if (t.notify.styles) if ("[object Array]" === Object.prototype.toString.call(t.notify.styles)) r = t.notify.styles.join(";");else for (var n in t.notify.styles) {
      t.notify.styles.hasOwnProperty(n) && (r[n] = t.notify.styles[n]);
    }
    if (e = document.createElement("DIV"), e.id = "__bs_notify__", "string" == typeof r) e.style.cssText = r;else for (var s in r) {
      e.style[s] = r[s];
    }
    return new o.BehaviorSubject(e);
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var o = r(13),
      i = {
    display: "none",
    padding: "15px",
    fontFamily: "sans-serif",
    position: "fixed",
    fontSize: "0.9em",
    zIndex: 9999,
    right: 0,
    top: 0,
    borderBottomLeftRadius: "5px",
    backgroundColor: "#1B2032",
    margin: 0,
    color: "white",
    textAlign: "center",
    pointerEvents: "none"
  };
  e.initNotify = n;
}, function (t, e, r) {
  "use strict";

  var n = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      o = r(77),
      i = r(1),
      s = r(78),
      c = r(25),
      a = r(141),
      u = function (t) {
    function e(e, r, n) {
      void 0 === e && (e = 0), t.call(this), this.period = -1, this.dueTime = 0, o.isNumeric(r) ? this.period = Number(r) < 1 && 1 || Number(r) : c.isScheduler(r) && (n = r), c.isScheduler(n) || (n = s.async), this.scheduler = n, this.dueTime = a.isDate(e) ? +e - this.scheduler.now() : e;
    }

    return n(e, t), e.create = function (t, r, n) {
      return void 0 === t && (t = 0), new e(t, r, n);
    }, e.dispatch = function (t) {
      var e = t.index,
          r = t.period,
          n = t.subscriber,
          o = this;

      if (n.next(e), !n.closed) {
        if (-1 === r) return n.complete();
        t.index = e + 1, o.schedule(t, r);
      }
    }, e.prototype._subscribe = function (t) {
      var r = this,
          n = r.period,
          o = r.dueTime;
      return r.scheduler.schedule(e.dispatch, o, {
        index: 0,
        period: n,
        subscriber: t
      });
    }, e;
  }(i.Observable);

  e.TimerObservable = u;
}, function (t, e, r) {
  "use strict";

  var n = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      o = r(12),
      i = function (t) {
    function e(e, r) {
      t.call(this);
    }

    return n(e, t), e.prototype.schedule = function (t, e) {
      return void 0 === e && (e = 0), this;
    }, e;
  }(o.Subscription);

  e.Action = i;
}, function (t, e, r) {
  "use strict";

  var n = function () {
    function t(e, r) {
      void 0 === r && (r = t.now), this.SchedulerAction = e, this.now = r;
    }

    return t.prototype.schedule = function (t, e, r) {
      return void 0 === e && (e = 0), new this.SchedulerAction(this, t).schedule(r, e);
    }, t.now = Date.now ? Date.now : function () {
      return +new Date();
    }, t;
  }();

  e.Scheduler = n;
}, function (t, e, r) {
  "use strict";

  function n(t) {
    return t instanceof Date && !isNaN(+t);
  }

  e.isDate = n;
}, function (t, e, r) {
  "use strict";

  function n(t) {
    return "color: " + t + ";";
  }

  var o = this && this.__assign || function () {
    return o = Object.assign || function (t) {
      for (var e, r = 1, n = arguments.length; r < n; r++) {
        e = arguments[r];

        for (var o in e) {
          Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        }
      }

      return t;
    }, o.apply(this, arguments);
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var i = {
    trace: "ðŸ”",
    debug: "ðŸ›",
    info: "âœ¨",
    warn: "âš ï¸",
    error: "ðŸš¨",
    fatal: "ðŸ’€"
  },
      s = {
    trace: 10,
    debug: 20,
    info: 30,
    warn: 40,
    error: 50,
    fatal: 60
  },
      c = {
    foreground: "#d3c0c8",
    background: "#2d2d2d",
    black: "#2d2d2d",
    red: "#f2777a",
    green: "#99cc99",
    yellow: "#ffcc66",
    blue: "#6699cc",
    magenta: "#cc99cc",
    cyan: "#66cccc",
    white: "#d3d0c8",
    brightBlack: "#747369"
  },
      a = function () {
    function t(t, e) {
      this.name = t, this.opts = e, this._name = t || "", this._colors = o({}, c, e.colors || {});

      try {
        this.logLevel = window.localStorage.getItem("logLevel") || "info";
      } catch (t) {
        this.logLevel = "info";
      }

      this._logLevel = s[this.logLevel];
    }

    return t.prototype.trace = function () {
      for (var t = ["trace"], e = 0, r = arguments.length; e < r; e++) {
        t.push(arguments[e]);
      }

      this._print.apply(this, t);
    }, t.prototype.debug = function () {
      for (var t = ["debug"], e = 0, r = arguments.length; e < r; e++) {
        t.push(arguments[e]);
      }

      this._print.apply(this, t);
    }, t.prototype.info = function () {
      for (var t = ["info"], e = 0, r = arguments.length; e < r; e++) {
        t.push(arguments[e]);
      }

      this._print.apply(this, t);
    }, t.prototype.warn = function () {
      for (var t = ["warn"], e = 0, r = arguments.length; e < r; e++) {
        t.push(arguments[e]);
      }

      this._print.apply(this, t);
    }, t.prototype.error = function () {
      for (var t = ["error"], e = 0, r = arguments.length; e < r; e++) {
        t.push(arguments[e]);
      }

      this._print.apply(this, t);
    }, t.prototype.fatal = function () {
      for (var t = ["fatal"], e = 0, r = arguments.length; e < r; e++) {
        t.push(arguments[e]);
      }

      this._print.apply(this, t);
    }, t.prototype._print = function (t) {
      if (!(s[t] < this._logLevel)) {
        var e = i[t],
            r = this._name || "unknown",
            o = "error" === t || t.fatal ? this._colors.red : "warn" === t ? this._colors.yellow : this._colors.green,
            c = [],
            a = [null],
            u = e + " %c%s";
        a.push(n(this._colors.magenta), r);

        for (var f = 1, p = arguments.length; f < p; f++) {
          var l = arguments[f];
          "string" == typeof l ? 1 === f ? (u += " %c%s", a.push(n(o)), a.push(l)) : /ms$/.test(l) ? (u += " %c%s", a.push(n(this._colors.brightBlack)), a.push(l)) : (u += " %c%s", a.push(n(this._colors.white)), a.push(l)) : "number" == typeof l ? (u += " %c%d", a.push(n(this._colors.magenta)), a.push(l)) : c.push(l);
        }

        a[0] = u, c.forEach(function (t) {
          a.push(t);
        }), Function.prototype.apply.apply(console.log, [console, a]);
      }
    }, t;
  }();

  e.Nanologger = a;
}, function (t, e, r) {
  "use strict";

  function n(t, e) {
    function r(t, e, r) {
      if ("*" === e[0]) return t;

      for (var n = [], o = new RegExp("(^|/)" + e), i = 0, s = t.length; i < s; i += 1) {
        o.test(t[i][r]) && n.push(t[i]);
      }

      return n;
    }

    function n(t, e, r) {
      var n = e.tagNames[t];
      return {
        attr: _[n],
        tagName: n,
        elems: r.getElementsByTagName(n)
      };
    }

    function C(t, e) {
      var r = P(Date.now());
      return a.merge(f.from([].slice.call(e.images)).pipe(p.filter(function (e) {
        return i.pathsMatch(t, i.pathFromUrl(e.src));
      }), l.map(function (t) {
        var e = {
          target: t,
          prop: "src",
          value: O(t.src, r),
          pathname: i.getLocation(t.src).pathname
        };
        return v.propSet(e);
      })), f.from(w).pipe(h.mergeMap(function (n) {
        var o = n.selector,
            i = n.styleNames;
        return f.from(e.querySelectorAll("[style*=" + o + "]")).pipe(h.mergeMap(function (e) {
          return S(e.style, i, t, r);
        }));
      })));
    }

    function S(t, e, r, n) {
      return f.from(e).pipe(p.filter(function (e) {
        return "string" == typeof t[e];
      }), l.map(function (e) {
        var o,
            s = t[e],
            c = s.replace(new RegExp("\\burl\\s*\\(([^)]*)\\)"), function (t, e) {
          var s = e;
          return '"' === e[0] && '"' === e[e.length - 1] && (s = e.slice(1, -1)), o = i.getLocation(s).pathname, i.pathsMatch(r, i.pathFromUrl(s)) ? "url(" + O(s, n) + ")" : t;
        });
        return [t, e, s, c, o];
      }), p.filter(function (t) {
        var e = (t[0], t[1], t[2]);
        return t[3] !== e;
      }), l.map(function (t) {
        var e = t[0],
            r = t[1],
            n = t[2],
            o = t[3],
            i = t[4];
        return b.styleSet({
          style: e,
          styleName: r,
          value: n,
          newValue: o,
          pathName: i
        });
      }));
    }

    function E(t, e, r, n, s) {
      var c = e.attr,
          a = t[c],
          u = new Date().getTime(),
          f = "browsersync-legacy",
          p = f + "=" + u,
          l = i.getLocation(a),
          h = i.updateSearch(l.search, f, p);

      switch (e.tagName) {
        case "link":
          A(a, n, s);
          break;

        case "img":
          C(a, n);
          break;

        default:
          !1 === r.timestamps ? t[c] = l.href : t[c] = l.href.split("?")[0] + h, setTimeout(function () {
            o ? (o.style.display = "none", o.style.display = "block") : (o = n.createElement("DIV"), n.body.appendChild(o));
          }, 200);
      }

      return {
        elem: t,
        timeStamp: u
      };
    }

    function x(t, e, r) {
      var n;
      if (t.__LiveReload_pendingRemoval) return s.empty();
      t.__LiveReload_pendingRemoval = !0, "STYLE" === t.tagName ? (n = e.createElement("link"), n.rel = "stylesheet", n.media = t.media, n.disabled = t.disabled) : n = t.cloneNode(!1);
      var o = t.href,
          a = O(F(t));
      n.href = a;
      var f = i.getLocation(a).pathname,
          p = f.split("/").slice(-1)[0],
          l = t.parentNode;
      l.lastChild === t ? l.appendChild(n) : l.insertBefore(n, t.nextSibling);
      var v;
      return v = /AppleWebKit/.test(r.userAgent) ? 5 : 200, c.Observable.create(function (t) {
        n.onload = function () {
          t.next(!0), t.complete();
        };
      }).pipe(h.mergeMap(function () {
        return u.timer(v).pipe(d.tap(function () {
          t && !t.parentNode || (t.parentNode.removeChild(t), n.onreadystatechange = null);
        }), y.mapTo(g.linkReplace({
          target: n,
          nextHref: a,
          prevHref: o,
          pathname: f,
          basename: p
        })));
      }));
    }

    function k(t, e) {
      var r = t.rule,
          n = t.index,
          o = t.link,
          i = r.parentStyleSheet,
          s = O(r.href),
          c = r.media.length ? [].join.call(r.media, ", ") : "",
          a = '@import url("' + s + '") ' + c + ";";
      r.__LiveReload_newHref = s;
      var f = e.createElement("link");
      return f.rel = "stylesheet", f.href = s, f.__LiveReload_pendingRemoval = !0, o.parentNode && o.parentNode.insertBefore(f, o), u.timer(200).pipe(d.tap(function () {
        f.parentNode && f.parentNode.removeChild(f), r.__LiveReload_newHref === s && (i.insertRule(a, n), i.deleteRule(n + 1), r = i.cssRules[n], r.__LiveReload_newHref = s);
      }), h.mergeMap(function () {
        return u.timer(200).pipe(d.tap(function () {
          if (r.__LiveReload_newHref === s) return i.insertRule(a, n), i.deleteRule(n + 1);
        }));
      }));
    }

    function O(t, e) {
      void 0 === e && (e = P(Date.now()));
      var r, n, o;
      r = i.splitUrl(t), t = r.url, n = r.hash, o = r.params;
      var s = o.replace(/(\?|&)browsersync=(\d+)/, function (t, r) {
        return "" + r + e;
      });
      return s === o && (s = 0 === o.length ? "?" + e : o + "&" + e), t + s + n;
    }

    function A(t, e, r) {
      var n = i.array(e.getElementsByTagName("link")).filter(function (t) {
        return t.rel.match(/^stylesheet$/i) && !t.__LiveReload_pendingRemoval;
      }),
          o = i.array(e.getElementsByTagName("style")).filter(function (t) {
        return Boolean(t.sheet);
      }).reduce(function (t, e) {
        return t.concat(T(e, e.sheet));
      }, []),
          c = n.reduce(function (t, e) {
        return t.concat(T(e, e.sheet));
      }, []),
          a = n.concat(o, c),
          u = i.pickBestMatch(t, a, function (t) {
        return i.pathFromUrl(F(t));
      });
      if (u) return u.object && u.object.rule ? k(u.object, e) : x(u.object, e, r);

      if (n.length) {
        var p = t.split("."),
            l = p[0];
        p.slice(1);
        if ("*" === l) return f.from(n.map(function (t) {
          return x(t, e, r);
        })).pipe(m.mergeAll());
      }

      return s.empty();
    }

    function T(t, e) {
      function r(t) {
        var e;

        try {
          e = null != t ? t.cssRules : void 0;
        } catch (t) {}

        return e;
      }

      function n(t, e) {
        if (e && e.length) for (var i = 0; i < e.length; i++) {
          var s = e[i];

          switch (s.type) {
            case CSSRule.CHARSET_RULE:
              break;

            case CSSRule.IMPORT_RULE:
              o.push({
                link: t,
                rule: s,
                index: i,
                href: s.href
              }), n(t, r(s.styleSheet));
          }
        }
      }

      var o = [];
      return n(t, r(e)), o;
    }

    function F(t) {
      return t.href || t.getAttribute("data-href");
    }

    function P(t) {
      return "browsersync=" + t;
    }

    return function (o, i) {
      var c = o.path;
      if (i.liveCSS && c.match(/\.css$/i)) return A(c, t, e);
      if (i.liveImg && c.match(/\.(jpe?g|png|gif)$/i)) return C(c, t);

      for (var a = n(o.ext, i, t), u = r(a.elems, o.basename, a.attr), f = 0, p = u.length; f < p; f += 1) {
        E(u[f], a, i, t, e);
      }

      return s.empty();
    };
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var o,
      i = r(21),
      s = r(16),
      c = r(1),
      a = r(38),
      u = r(52),
      f = r(87),
      p = r(4),
      l = r(2),
      h = r(15),
      d = r(5),
      y = r(88),
      v = r(76),
      b = r(81),
      g = r(82),
      m = r(55),
      w = [{
    selector: "background",
    styleNames: ["backgroundImage"]
  }, {
    selector: "border",
    styleNames: ["borderImage", "webkitBorderImage", "MozBorderImage"]
  }],
      _ = {
    link: "href",
    img: "src",
    script: "src"
  };
  e.reload = n;
}, function (t, e, r) {
  "use strict";

  var n = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      o = r(26),
      i = r(59),
      s = r(60),
      c = r(145),
      a = r(146),
      u = r(23),
      f = r(147),
      p = r(31),
      l = r(1),
      h = r(148),
      d = r(45),
      y = function (t) {
    function e(e, r) {
      t.call(this, null), this.ish = e, this.scheduler = r;
    }

    return n(e, t), e.create = function (t, r) {
      if (null != t) {
        if ("function" == typeof t[d.observable]) return t instanceof l.Observable && !r ? t : new e(t, r);
        if (o.isArray(t)) return new u.ArrayObservable(t, r);
        if (s.isPromise(t)) return new c.PromiseObservable(t, r);
        if ("function" == typeof t[p.iterator] || "string" == typeof t) return new a.IteratorObservable(t, r);
        if (i.isArrayLike(t)) return new f.ArrayLikeObservable(t, r);
      }

      throw new TypeError((null !== t && _typeof(t) || t) + " is not observable");
    }, e.prototype._subscribe = function (t) {
      var e = this.ish,
          r = this.scheduler;
      return null == r ? e[d.observable]().subscribe(t) : e[d.observable]().subscribe(new h.ObserveOnSubscriber(t, r, 0));
    }, e;
  }(l.Observable);

  e.FromObservable = y;
}, function (t, e, r) {
  "use strict";

  function n(t) {
    var e = t.value,
        r = t.subscriber;
    r.closed || (r.next(e), r.complete());
  }

  function o(t) {
    var e = t.err,
        r = t.subscriber;
    r.closed || r.error(e);
  }

  var i = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      s = r(7),
      c = r(1),
      a = function (t) {
    function e(e, r) {
      t.call(this), this.promise = e, this.scheduler = r;
    }

    return i(e, t), e.create = function (t, r) {
      return new e(t, r);
    }, e.prototype._subscribe = function (t) {
      var e = this,
          r = this.promise,
          i = this.scheduler;
      if (null == i) this._isScalar ? t.closed || (t.next(this.value), t.complete()) : r.then(function (r) {
        e.value = r, e._isScalar = !0, t.closed || (t.next(r), t.complete());
      }, function (e) {
        t.closed || t.error(e);
      }).then(null, function (t) {
        s.root.setTimeout(function () {
          throw t;
        });
      });else if (this._isScalar) {
        if (!t.closed) return i.schedule(n, 0, {
          value: this.value,
          subscriber: t
        });
      } else r.then(function (r) {
        e.value = r, e._isScalar = !0, t.closed || t.add(i.schedule(n, 0, {
          value: r,
          subscriber: t
        }));
      }, function (e) {
        t.closed || t.add(i.schedule(o, 0, {
          err: e,
          subscriber: t
        }));
      }).then(null, function (t) {
        s.root.setTimeout(function () {
          throw t;
        });
      });
    }, e;
  }(c.Observable);

  e.PromiseObservable = a;
}, function (t, e, r) {
  "use strict";

  function n(t) {
    var e = t[f.iterator];
    if (!e && "string" == typeof t) return new l(t);
    if (!e && void 0 !== t.length) return new h(t);
    if (!e) throw new TypeError("object is not iterable");
    return t[f.iterator]();
  }

  function o(t) {
    var e = +t.length;
    return isNaN(e) ? 0 : 0 !== e && i(e) ? (e = s(e) * Math.floor(Math.abs(e)), e <= 0 ? 0 : e > d ? d : e) : e;
  }

  function i(t) {
    return "number" == typeof t && a.root.isFinite(t);
  }

  function s(t) {
    var e = +t;
    return 0 === e ? e : isNaN(e) ? e : e < 0 ? -1 : 1;
  }

  var c = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      a = r(7),
      u = r(1),
      f = r(31),
      p = function (t) {
    function e(e, r) {
      if (t.call(this), this.scheduler = r, null == e) throw new Error("iterator cannot be null.");
      this.iterator = n(e);
    }

    return c(e, t), e.create = function (t, r) {
      return new e(t, r);
    }, e.dispatch = function (t) {
      var e = t.index,
          r = t.hasError,
          n = t.iterator,
          o = t.subscriber;
      if (r) return void o.error(t.error);
      var i = n.next();
      return i.done ? void o.complete() : (o.next(i.value), t.index = e + 1, o.closed ? void ("function" == typeof n["return"] && n["return"]()) : void this.schedule(t));
    }, e.prototype._subscribe = function (t) {
      var r = this,
          n = r.iterator,
          o = r.scheduler;
      if (o) return o.schedule(e.dispatch, 0, {
        index: 0,
        iterator: n,
        subscriber: t
      });

      for (;;) {
        var i = n.next();

        if (i.done) {
          t.complete();
          break;
        }

        if (t.next(i.value), t.closed) {
          "function" == typeof n["return"] && n["return"]();
          break;
        }
      }
    }, e;
  }(u.Observable);

  e.IteratorObservable = p;

  var l = function () {
    function t(t, e, r) {
      void 0 === e && (e = 0), void 0 === r && (r = t.length), this.str = t, this.idx = e, this.len = r;
    }

    return t.prototype[f.iterator] = function () {
      return this;
    }, t.prototype.next = function () {
      return this.idx < this.len ? {
        done: !1,
        value: this.str.charAt(this.idx++)
      } : {
        done: !0,
        value: void 0
      };
    }, t;
  }(),
      h = function () {
    function t(t, e, r) {
      void 0 === e && (e = 0), void 0 === r && (r = o(t)), this.arr = t, this.idx = e, this.len = r;
    }

    return t.prototype[f.iterator] = function () {
      return this;
    }, t.prototype.next = function () {
      return this.idx < this.len ? {
        done: !1,
        value: this.arr[this.idx++]
      } : {
        done: !0,
        value: void 0
      };
    }, t;
  }(),
      d = Math.pow(2, 53) - 1;
}, function (t, e, r) {
  "use strict";

  var n = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      o = r(1),
      i = r(46),
      s = r(28),
      c = function (t) {
    function e(e, r) {
      t.call(this), this.arrayLike = e, this.scheduler = r, r || 1 !== e.length || (this._isScalar = !0, this.value = e[0]);
    }

    return n(e, t), e.create = function (t, r) {
      var n = t.length;
      return 0 === n ? new s.EmptyObservable() : 1 === n ? new i.ScalarObservable(t[0], r) : new e(t, r);
    }, e.dispatch = function (t) {
      var e = t.arrayLike,
          r = t.index,
          n = t.length,
          o = t.subscriber;

      if (!o.closed) {
        if (r >= n) return void o.complete();
        o.next(e[r]), t.index = r + 1, this.schedule(t);
      }
    }, e.prototype._subscribe = function (t) {
      var r = this,
          n = r.arrayLike,
          o = r.scheduler,
          i = n.length;
      if (o) return o.schedule(e.dispatch, 0, {
        arrayLike: n,
        index: 0,
        length: i,
        subscriber: t
      });

      for (var s = 0; s < i && !t.closed; s++) {
        t.next(n[s]);
      }

      t.complete();
    }, e;
  }(o.Observable);

  e.ArrayLikeObservable = c;
}, function (t, e, r) {
  "use strict";

  function n(t, e) {
    return void 0 === e && (e = 0), function (r) {
      return r.lift(new c(t, e));
    };
  }

  var o = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      i = r(3),
      s = r(149);

  e.observeOn = n;

  var c = function () {
    function t(t, e) {
      void 0 === e && (e = 0), this.scheduler = t, this.delay = e;
    }

    return t.prototype.call = function (t, e) {
      return e.subscribe(new a(t, this.scheduler, this.delay));
    }, t;
  }();

  e.ObserveOnOperator = c;

  var a = function (t) {
    function e(e, r, n) {
      void 0 === n && (n = 0), t.call(this, e), this.scheduler = r, this.delay = n;
    }

    return o(e, t), e.dispatch = function (t) {
      var e = t.notification,
          r = t.destination;
      e.observe(r), this.unsubscribe();
    }, e.prototype.scheduleMessage = function (t) {
      this.add(this.scheduler.schedule(e.dispatch, this.delay, new u(t, this.destination)));
    }, e.prototype._next = function (t) {
      this.scheduleMessage(s.Notification.createNext(t));
    }, e.prototype._error = function (t) {
      this.scheduleMessage(s.Notification.createError(t));
    }, e.prototype._complete = function () {
      this.scheduleMessage(s.Notification.createComplete());
    }, e;
  }(i.Subscriber);

  e.ObserveOnSubscriber = a;

  var u = function () {
    function t(t, e) {
      this.notification = t, this.destination = e;
    }

    return t;
  }();

  e.ObserveOnMessage = u;
}, function (t, e, r) {
  "use strict";

  var n = r(1),
      o = function () {
    function t(t, e, r) {
      this.kind = t, this.value = e, this.error = r, this.hasValue = "N" === t;
    }

    return t.prototype.observe = function (t) {
      switch (this.kind) {
        case "N":
          return t.next && t.next(this.value);

        case "E":
          return t.error && t.error(this.error);

        case "C":
          return t.complete && t.complete();
      }
    }, t.prototype["do"] = function (t, e, r) {
      switch (this.kind) {
        case "N":
          return t && t(this.value);

        case "E":
          return e && e(this.error);

        case "C":
          return r && r();
      }
    }, t.prototype.accept = function (t, e, r) {
      return t && "function" == typeof t.next ? this.observe(t) : this["do"](t, e, r);
    }, t.prototype.toObservable = function () {
      switch (this.kind) {
        case "N":
          return n.Observable.of(this.value);

        case "E":
          return n.Observable["throw"](this.error);

        case "C":
          return n.Observable.empty();
      }

      throw new Error("unexpected notification kind value");
    }, t.createNext = function (e) {
      return void 0 !== e ? new t("N", e) : t.undefinedValueNotification;
    }, t.createError = function (e) {
      return new t("E", void 0, e);
    }, t.createComplete = function () {
      return t.completeNotification;
    }, t.completeNotification = new t("C"), t.undefinedValueNotification = new t("N", void 0), t;
  }();

  e.Notification = o;
}, function (t, e, r) {
  "use strict";

  function n() {
    return o.mergeAll(1);
  }

  var o = r(55);
  e.concatAll = n;
}, function (t, e, r) {
  "use strict";

  function n(t) {
    return t;
  }

  e.identity = n;
}, function (t, e, r) {
  "use strict";

  function n() {
    for (var t = [], e = 0; e < arguments.length; e++) {
      t[e - 0] = arguments[e];
    }

    return function (e) {
      var r = t[t.length - 1];
      a.isScheduler(r) ? t.pop() : r = null;
      var n = t.length;
      return 1 === n ? c.concat(new i.ScalarObservable(t[0], r), e) : n > 1 ? c.concat(new o.ArrayObservable(t, r), e) : c.concat(new s.EmptyObservable(r), e);
    };
  }

  var o = r(23),
      i = r(46),
      s = r(28),
      c = r(54),
      a = r(25);
  e.startWith = n;
}, function (t, e, r) {
  "use strict";

  function n(t, e) {
    var r = t.pipe(p.withLatestFrom(e.window$, e.document$, e.option$.pipe(i.pluck("scrollProportionally")))),
        n = c.partition(function (t) {
      return "document" === t[0].tagName;
    })(r),
        h = n[0],
        d = n[1],
        y = c.partition(function (t) {
      return t[0].mappingIndex > -1;
    })(d),
        v = y[0],
        b = y[1];
    return a.merge(h.pipe(f.tap(function (t) {
      var e = t[0],
          r = t[1],
          n = t[2],
          o = t[3],
          i = u.getDocumentScrollSpace(n);
      return o ? r.scrollTo(0, i.y * e.position.proportional) : r.scrollTo(0, e.position.raw.y);
    })), b.pipe(f.tap(function (t) {
      var e = t[0],
          r = (t[1], t[2]),
          n = t[3],
          i = r.getElementsByTagName(e.tagName);

      if (i && i.length) {
        var s = i[e.index];
        if (s) return o(s, n, e);
      }
    })), v.pipe(p.withLatestFrom(e.option$.pipe(i.pluck("scrollElementMapping"))), l.map(function (t) {
      var e = t[0],
          r = t[1],
          n = e[0];
      return [e, r.filter(function (t, e) {
        return e !== n.mappingIndex;
      })];
    }), f.tap(function (t) {
      var e = t[0],
          r = t[1],
          n = e[0],
          i = (e[1], e[2]),
          s = e[3];
      r.map(function (t) {
        return i.querySelector(t);
      }).forEach(function (t) {
        o(t, s, n);
      });
    }))).pipe(s.ignoreElements());
  }

  function o(t, e, r) {
    return e && t.scrollTo ? t.scrollTo(0, t.scrollHeight * r.position.proportional) : t.scrollTo(0, r.position.raw.y);
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var i = r(6),
      s = r(11),
      c = r(154),
      a = r(38),
      u = r(22),
      f = r(5),
      p = r(0),
      l = r(2);
  e.setScrollEffect = n;
}, function (t, e, r) {
  "use strict";

  function n(t, e) {
    return function (r) {
      return [i.filter(t, e)(r), i.filter(o.not(t, e))(r)];
    };
  }

  var o = r(155),
      i = r(4);
  e.partition = n;
}, function (t, e, r) {
  "use strict";

  function n(t, e) {
    function r() {
      return !r.pred.apply(r.thisArg, arguments);
    }

    return r.pred = t, r.thisArg = e, r;
  }

  e.not = n;
}, function (t, e, r) {
  "use strict";

  function n(t) {
    return t.pipe(o.map(function (t) {
      return i.overlayInfo(t.message, t.timeout);
    }));
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var o = r(2),
      i = r(14);
  e.incomingBrowserNotify = n;
}, function (t, e, r) {
  "use strict";

  function n(t, e) {
    return t.pipe(c.withLatestFrom(e.option$.pipe(o.pluck("ghostMode", "location"))), i.filter(function (t) {
      return !0 === t[1];
    }), s.map(function (t) {
      var e = t[0];
      return a.browserSetLocation(e);
    }));
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var o = r(6),
      i = r(4),
      s = r(2),
      c = r(0),
      a = r(89);
  e.incomingBrowserLocation = n;
}, function (t, e, r) {
  "use strict";

  function n(t, e) {
    return void 0 === e && (e = 0), function (r) {
      return r.lift(new i(t, e));
    };
  }

  var o = r(159);
  e.subscribeOn = n;

  var i = function () {
    function t(t, e) {
      this.scheduler = t, this.delay = e;
    }

    return t.prototype.call = function (t, e) {
      return new o.SubscribeOnObservable(e, this.delay, this.scheduler).subscribe(t);
    }, t;
  }();
}, function (t, e, r) {
  "use strict";

  var n = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      o = r(1),
      i = r(160),
      s = r(77),
      c = function (t) {
    function e(e, r, n) {
      void 0 === r && (r = 0), void 0 === n && (n = i.asap), t.call(this), this.source = e, this.delayTime = r, this.scheduler = n, (!s.isNumeric(r) || r < 0) && (this.delayTime = 0), n && "function" == typeof n.schedule || (this.scheduler = i.asap);
    }

    return n(e, t), e.create = function (t, r, n) {
      return void 0 === r && (r = 0), void 0 === n && (n = i.asap), new e(t, r, n);
    }, e.dispatch = function (t) {
      var e = t.source,
          r = t.subscriber;
      return this.add(e.subscribe(r));
    }, e.prototype._subscribe = function (t) {
      var r = this.delayTime,
          n = this.source;
      return this.scheduler.schedule(e.dispatch, r, {
        source: n,
        subscriber: t
      });
    }, e;
  }(o.Observable);

  e.SubscribeOnObservable = c;
}, function (t, e, r) {
  "use strict";

  var n = r(161),
      o = r(164);
  e.asap = new o.AsapScheduler(n.AsapAction);
}, function (t, e, r) {
  "use strict";

  var n = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      o = r(162),
      i = r(79),
      s = function (t) {
    function e(e, r) {
      t.call(this, e, r), this.scheduler = e, this.work = r;
    }

    return n(e, t), e.prototype.requestAsyncId = function (e, r, n) {
      return void 0 === n && (n = 0), null !== n && n > 0 ? t.prototype.requestAsyncId.call(this, e, r, n) : (e.actions.push(this), e.scheduled || (e.scheduled = o.Immediate.setImmediate(e.flush.bind(e, null))));
    }, e.prototype.recycleAsyncId = function (e, r, n) {
      if (void 0 === n && (n = 0), null !== n && n > 0 || null === n && this.delay > 0) return t.prototype.recycleAsyncId.call(this, e, r, n);
      0 === e.actions.length && (o.Immediate.clearImmediate(r), e.scheduled = void 0);
    }, e;
  }(i.AsyncAction);

  e.AsapAction = s;
}, function (t, e, r) {
  "use strict";

  (function (t, n) {
    var o = r(7),
        i = function () {
      function t(t) {
        if (this.root = t, t.setImmediate && "function" == typeof t.setImmediate) this.setImmediate = t.setImmediate.bind(t), this.clearImmediate = t.clearImmediate.bind(t);else {
          this.nextHandle = 1, this.tasksByHandle = {}, this.currentlyRunningATask = !1, this.canUseProcessNextTick() ? this.setImmediate = this.createProcessNextTickSetImmediate() : this.canUsePostMessage() ? this.setImmediate = this.createPostMessageSetImmediate() : this.canUseMessageChannel() ? this.setImmediate = this.createMessageChannelSetImmediate() : this.canUseReadyStateChange() ? this.setImmediate = this.createReadyStateChangeSetImmediate() : this.setImmediate = this.createSetTimeoutSetImmediate();

          var e = function t(e) {
            delete t.instance.tasksByHandle[e];
          };

          e.instance = this, this.clearImmediate = e;
        }
      }

      return t.prototype.identify = function (t) {
        return this.root.Object.prototype.toString.call(t);
      }, t.prototype.canUseProcessNextTick = function () {
        return "[object process]" === this.identify(this.root.process);
      }, t.prototype.canUseMessageChannel = function () {
        return Boolean(this.root.MessageChannel);
      }, t.prototype.canUseReadyStateChange = function () {
        var t = this.root.document;
        return Boolean(t && "onreadystatechange" in t.createElement("script"));
      }, t.prototype.canUsePostMessage = function () {
        var t = this.root;

        if (t.postMessage && !t.importScripts) {
          var e = !0,
              r = t.onmessage;
          return t.onmessage = function () {
            e = !1;
          }, t.postMessage("", "*"), t.onmessage = r, e;
        }

        return !1;
      }, t.prototype.partiallyApplied = function (t) {
        for (var e = [], r = 1; r < arguments.length; r++) {
          e[r - 1] = arguments[r];
        }

        var n = function t() {
          var e = t,
              r = e.handler,
              n = e.args;
          "function" == typeof r ? r.apply(void 0, n) : new Function("" + r)();
        };

        return n.handler = t, n.args = e, n;
      }, t.prototype.addFromSetImmediateArguments = function (t) {
        return this.tasksByHandle[this.nextHandle] = this.partiallyApplied.apply(void 0, t), this.nextHandle++;
      }, t.prototype.createProcessNextTickSetImmediate = function () {
        var t = function t() {
          var e = t.instance,
              r = e.addFromSetImmediateArguments(arguments);
          return e.root.process.nextTick(e.partiallyApplied(e.runIfPresent, r)), r;
        };

        return t.instance = this, t;
      }, t.prototype.createPostMessageSetImmediate = function () {
        var t = this.root,
            e = "setImmediate$" + t.Math.random() + "$",
            r = function r(n) {
          var o = r.instance;
          n.source === t && "string" == typeof n.data && 0 === n.data.indexOf(e) && o.runIfPresent(+n.data.slice(e.length));
        };

        r.instance = this, t.addEventListener("message", r, !1);

        var n = function t() {
          var e = t,
              r = e.messagePrefix,
              n = e.instance,
              o = n.addFromSetImmediateArguments(arguments);
          return n.root.postMessage(r + o, "*"), o;
        };

        return n.instance = this, n.messagePrefix = e, n;
      }, t.prototype.runIfPresent = function (t) {
        if (this.currentlyRunningATask) this.root.setTimeout(this.partiallyApplied(this.runIfPresent, t), 0);else {
          var e = this.tasksByHandle[t];

          if (e) {
            this.currentlyRunningATask = !0;

            try {
              e();
            } finally {
              this.clearImmediate(t), this.currentlyRunningATask = !1;
            }
          }
        }
      }, t.prototype.createMessageChannelSetImmediate = function () {
        var t = this,
            e = new this.root.MessageChannel();

        e.port1.onmessage = function (e) {
          var r = e.data;
          t.runIfPresent(r);
        };

        var r = function t() {
          var e = t,
              r = e.channel,
              n = e.instance,
              o = n.addFromSetImmediateArguments(arguments);
          return r.port2.postMessage(o), o;
        };

        return r.channel = e, r.instance = this, r;
      }, t.prototype.createReadyStateChangeSetImmediate = function () {
        var t = function t() {
          var e = t.instance,
              r = e.root,
              n = r.document,
              o = n.documentElement,
              i = e.addFromSetImmediateArguments(arguments),
              s = n.createElement("script");
          return s.onreadystatechange = function () {
            e.runIfPresent(i), s.onreadystatechange = null, o.removeChild(s), s = null;
          }, o.appendChild(s), i;
        };

        return t.instance = this, t;
      }, t.prototype.createSetTimeoutSetImmediate = function () {
        var t = function t() {
          var e = t.instance,
              r = e.addFromSetImmediateArguments(arguments);
          return e.root.setTimeout(e.partiallyApplied(e.runIfPresent, r), 0), r;
        };

        return t.instance = this, t;
      }, t;
    }();

    e.ImmediateDefinition = i, e.Immediate = new i(o.root);
  }).call(e, r(97).clearImmediate, r(97).setImmediate);
}, function (t, e, r) {
  (function (t, e) {
    !function (t, r) {
      "use strict";

      function n(t) {
        "function" != typeof t && (t = new Function("" + t));

        for (var e = new Array(arguments.length - 1), r = 0; r < e.length; r++) {
          e[r] = arguments[r + 1];
        }

        var n = {
          callback: t,
          args: e
        };
        return u[a] = n, c(a), a++;
      }

      function o(t) {
        delete u[t];
      }

      function i(t) {
        var e = t.callback,
            n = t.args;

        switch (n.length) {
          case 0:
            e();
            break;

          case 1:
            e(n[0]);
            break;

          case 2:
            e(n[0], n[1]);
            break;

          case 3:
            e(n[0], n[1], n[2]);
            break;

          default:
            e.apply(r, n);
        }
      }

      function s(t) {
        if (f) setTimeout(s, 0, t);else {
          var e = u[t];

          if (e) {
            f = !0;

            try {
              i(e);
            } finally {
              o(t), f = !1;
            }
          }
        }
      }

      if (!t.setImmediate) {
        var c,
            a = 1,
            u = {},
            f = !1,
            p = t.document,
            l = Object.getPrototypeOf && Object.getPrototypeOf(t);
        l = l && l.setTimeout ? l : t, "[object process]" === {}.toString.call(t.process) ? function () {
          c = function c(t) {
            e.nextTick(function () {
              s(t);
            });
          };
        }() : function () {
          if (t.postMessage && !t.importScripts) {
            var e = !0,
                r = t.onmessage;
            return t.onmessage = function () {
              e = !1;
            }, t.postMessage("", "*"), t.onmessage = r, e;
          }
        }() ? function () {
          var e = "setImmediate$" + Math.random() + "$",
              r = function r(_r2) {
            _r2.source === t && "string" == typeof _r2.data && 0 === _r2.data.indexOf(e) && s(+_r2.data.slice(e.length));
          };

          t.addEventListener ? t.addEventListener("message", r, !1) : t.attachEvent("onmessage", r), c = function c(r) {
            t.postMessage(e + r, "*");
          };
        }() : t.MessageChannel ? function () {
          var t = new MessageChannel();
          t.port1.onmessage = function (t) {
            s(t.data);
          }, c = function c(e) {
            t.port2.postMessage(e);
          };
        }() : p && "onreadystatechange" in p.createElement("script") ? function () {
          var t = p.documentElement;

          c = function c(e) {
            var r = p.createElement("script");
            r.onreadystatechange = function () {
              s(e), r.onreadystatechange = null, t.removeChild(r), r = null;
            }, t.appendChild(r);
          };
        }() : function () {
          c = function c(t) {
            setTimeout(s, 0, t);
          };
        }(), l.setImmediate = n, l.clearImmediate = o;
      }
    }("undefined" == typeof self ? void 0 === t ? this : t : self);
  }).call(e, r(24), r(33));
}, function (t, e, r) {
  "use strict";

  var n = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      o = r(80),
      i = function (t) {
    function e() {
      t.apply(this, arguments);
    }

    return n(e, t), e.prototype.flush = function (t) {
      this.active = !0, this.scheduled = void 0;
      var e,
          r = this.actions,
          n = -1,
          o = r.length;
      t = t || r.shift();

      do {
        if (e = t.execute(t.state, t.delay)) break;
      } while (++n < o && (t = r.shift()));

      if (this.active = !1, e) {
        for (; ++n < o && (t = r.shift());) {
          t.unsubscribe();
        }

        throw e;
      }
    }, e;
  }(o.AsyncScheduler);

  e.AsapScheduler = i;
}, function (t, e, r) {
  "use strict";

  function n(t, e) {
    return t.pipe(a.withLatestFrom(e.option$), o.filter(function (t) {
      t[0];
      return t[1].codeSync;
    }), u.mergeMap(function (t) {
      var e = t[0],
          r = t[1];
      return e.url || !r.injectChanges ? p.reloadBrowserSafe() : e.basename && e.ext && s.isBlacklisted(e) ? i.empty() : c.of(f.fileReload(e));
    }));
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var o = r(4),
      i = r(16),
      s = r(21),
      c = r(9),
      a = r(0),
      u = r(15),
      f = r(86),
      p = r(96);
  e.incomingFileReload = n;
}, function (t, e, r) {
  "use strict";

  function n(t, e) {
    return t.pipe(c.withLatestFrom(e.option$.pipe(o.pluck("logPrefix"))), a.mergeMap(function (t) {
      var e = t[0],
          r = t[1],
          n = r ? r + ": " : "";
      return i.of(u.setOptions(e), s.overlayInfo(n + "connected"));
    }));
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var o = r(6),
      i = r(9),
      s = r(14),
      c = r(0),
      a = r(15),
      u = r(53);
  e.incomingConnection = n;
}, function (t, e, r) {
  "use strict";

  function n(t) {
    return t.pipe(i.tap(function (t) {
      return console.log(t);
    }), o.ignoreElements());
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var o = r(11),
      i = r(5);
  e.incomingDisconnect = n;
}, function (t, e, r) {
  "use strict";

  function n(t) {
    return t.pipe(o.map(function (t) {
      return i.setOptions(t.options);
    }));
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var o = r(2),
      i = r(53);
  e.incomingOptionsSet = n;
}, function (t, e, r) {
  "use strict";

  function n(t) {
    for (var r, n; r = e.regex.exec(t);) {
      n = r[1];
    }

    if (n) return JSON.parse(n);
  }

  function o(t) {
    var r = function () {
      try {
        return n(t.name);
      } catch (t) {
        return {};
      }
    }();

    if (t.name = t.name.replace(e.regex, ""), r && r.bs && r.bs.hardReload && r.bs.scroll) {
      var o = r.bs.scroll,
          i = o.x,
          s = o.y;
      return f.of(y.setScroll(i, s), p.consoleDebug("[ScrollRestore] x = " + i + " y = " + s));
    }

    return u.empty();
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var i,
      s = r(22),
      c = r(8),
      a = r(13),
      u = r(16),
      f = r(9),
      p = r(14),
      l = r(0),
      h = r(2),
      d = r(84),
      y = r(83);
  e.PREFIX = "<<BS_START>>", e.SUFFIX = "<<BS_START>>", e.regex = new RegExp(e.PREFIX + "(.+?)" + e.SUFFIX, "g"), e.initWindowName = o, e.scrollRestoreHandlers$ = new a.BehaviorSubject((i = {}, i[c.EffectNames.PreBrowserReload] = function (t, r) {
    return t.pipe(l.withLatestFrom(r.window$, r.document$), h.map(function (t) {
      var r = t[1],
          n = t[2];
      return [r.name, e.PREFIX, JSON.stringify({
        bs: {
          hardReload: !0,
          scroll: s.getBrowserScrollPosition(r, n)
        }
      }), e.SUFFIX].join("");
    }), h.map(function (t) {
      return d.setWindowName(t);
    }));
  }, i));
}, function (t, e, r) {
  "use strict";

  function n(t, e, r, n) {
    return o.merge(c.getScrollStream(t, e, r, n), s.getClickStream(e, r, n), i.getFormInputStream(e, r, n), a.getFormTogglesStream(e, r, n));
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var o = r(38),
      i = r(171),
      s = r(173),
      c = r(174),
      a = r(175);
  e.initListeners = n;
}, function (t, e, r) {
  "use strict";

  function n(t, e, r) {
    var n = s.createTimedBooleanSwitch(e.pipe(a.filter(function (t) {
      return t[0] === o.IncomingSocketNames.Keyup;
    })));
    return r.pipe(l.skip(1), p.pluck("ghostMode", "forms", "inputs"), h.distinctUntilChanged(), d.switchMap(function (e) {
      return e ? v.fromEvent(t.body, "keyup", !0).pipe(f.map(function (t) {
        return t.target || t.srcElement;
      }), a.filter(function (t) {
        return "INPUT" === t.tagName || "TEXTAREA" === t.tagName;
      }), u.withLatestFrom(n), a.filter(function (t) {
        return t[1];
      }), f.map(function (t) {
        var e = t[0],
            r = i.getElementData(e),
            n = e.value;
        return c.outgoing(r, n);
      })) : y.empty();
    }));
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var o = r(10),
      i = r(22),
      s = r(21),
      c = r(95),
      a = r(4),
      u = r(0),
      f = r(2),
      p = r(6),
      l = r(39),
      h = r(40),
      d = r(20),
      y = r(16),
      v = r(41);
  e.getFormInputStream = n;
}, function (t, e, r) {
  "use strict";

  function n(t) {
    return !!t && "function" == typeof t.addListener && "function" == typeof t.removeListener;
  }

  function o(t) {
    return !!t && "function" == typeof t.on && "function" == typeof t.off;
  }

  function i(t) {
    return !!t && "[object NodeList]" === d.call(t);
  }

  function s(t) {
    return !!t && "[object HTMLCollection]" === d.call(t);
  }

  function c(t) {
    return !!t && "function" == typeof t.addEventListener && "function" == typeof t.removeEventListener;
  }

  var a = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      u = r(1),
      f = r(43),
      p = r(42),
      l = r(27),
      h = r(12),
      d = Object.prototype.toString,
      y = function (t) {
    function e(e, r, n, o) {
      t.call(this), this.sourceObj = e, this.eventName = r, this.selector = n, this.options = o;
    }

    return a(e, t), e.create = function (t, r, n, o) {
      return p.isFunction(n) && (o = n, n = void 0), new e(t, r, o, n);
    }, e.setupSubscription = function (t, r, a, u, f) {
      var p;
      if (i(t) || s(t)) for (var l = 0, d = t.length; l < d; l++) {
        e.setupSubscription(t[l], r, a, u, f);
      } else if (c(t)) {
        var y = t;
        t.addEventListener(r, a, f), p = function p() {
          return y.removeEventListener(r, a, f);
        };
      } else if (o(t)) {
        var v = t;
        t.on(r, a), p = function p() {
          return v.off(r, a);
        };
      } else {
        if (!n(t)) throw new TypeError("Invalid event target");
        var b = t;
        t.addListener(r, a), p = function p() {
          return b.removeListener(r, a);
        };
      }
      u.add(new h.Subscription(p));
    }, e.prototype._subscribe = function (t) {
      var r = this.sourceObj,
          n = this.eventName,
          o = this.options,
          i = this.selector,
          s = i ? function () {
        for (var e = [], r = 0; r < arguments.length; r++) {
          e[r - 0] = arguments[r];
        }

        var n = f.tryCatch(i).apply(void 0, e);
        n === l.errorObject ? t.error(l.errorObject.e) : t.next(n);
      } : function (e) {
        return t.next(e);
      };
      e.setupSubscription(r, n, s, t, o);
    }, e;
  }(u.Observable);

  e.FromEventObservable = y;
}, function (t, e, r) {
  "use strict";

  function n(t, e, r) {
    var n = o.createTimedBooleanSwitch(e.pipe(u.filter(function (t) {
      return t[0] === i.IncomingSocketNames.Click;
    })));
    return r.pipe(l.skip(1), p.pluck("ghostMode", "clicks"), h.distinctUntilChanged(), d.switchMap(function (e) {
      return e ? y.fromEvent(t, "click", !0).pipe(f.map(function (t) {
        return t.target;
      }), u.filter(function (e) {
        if ("LABEL" === e.tagName) {
          var r = e.getAttribute("for");
          if (r && t.getElementById(r)) return !1;
        }

        return !0;
      }), a.withLatestFrom(n), u.filter(function (t) {
        return t[1];
      }), f.map(function (t) {
        var e = t[0];
        return c.outgoing(s.getElementData(e));
      })) : v.empty();
    }));
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var o = r(21),
      i = r(10),
      s = r(22),
      c = r(94),
      a = r(0),
      u = r(4),
      f = r(2),
      p = r(6),
      l = r(39),
      h = r(40),
      d = r(20),
      y = r(41),
      v = r(16);
  e.getClickStream = n;
}, function (t, e, r) {
  "use strict";

  function n(t, e, r, n) {
    var b = o.createTimedBooleanSwitch(r.pipe(a.filter(function (t) {
      return t[0] === i.IncomingSocketNames.Scroll;
    }))),
        g = n.pipe(p.pluck("scrollElementMapping"), u.map(function (t) {
      return t.map(function (t) {
        return e.querySelector(t);
      });
    }));
    return n.pipe(y.skip(1), p.pluck("ghostMode", "scroll"), l.distinctUntilChanged(), h.switchMap(function (r) {
      return r ? v.fromEvent(e, "scroll", !0).pipe(u.map(function (t) {
        return t.target;
      }), f.withLatestFrom(b, g), a.filter(function (t) {
        var e = t[1];
        return Boolean(e);
      }), u.map(function (r) {
        var n = r[0],
            o = (r[1], r[2]);
        if (n === e) return c.outgoing(s.getScrollPosition(t, e), "document", 0);
        var i = e.getElementsByTagName(n.tagName),
            a = Array.prototype.indexOf.call(i || [], n);
        return c.outgoing(s.getScrollPositionForElement(n), n.tagName, a, o.indexOf(n));
      })) : d.empty();
    }));
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var o = r(21),
      i = r(10),
      s = r(22),
      c = r(85),
      a = r(4),
      u = r(2),
      f = r(0),
      p = r(6),
      l = r(40),
      h = r(20),
      d = r(16),
      y = r(39),
      v = r(41);
  e.getScrollStream = n;
}, function (t, e, r) {
  "use strict";

  function n(t, e, r) {
    var n = s.createTimedBooleanSwitch(e.pipe(a.filter(function (t) {
      return t[0] === o.IncomingSocketNames.InputToggle;
    })));
    return r.pipe(u.skip(1), f.pluck("ghostMode", "forms", "toggles"), p.distinctUntilChanged(), d.switchMap(function (e) {
      return e ? v.fromEvent(t, "change", !0).pipe(h.map(function (t) {
        return t.target || t.srcElement;
      }), a.filter(function (t) {
        return "SELECT" === t.tagName;
      }), l.withLatestFrom(n), a.filter(function (t) {
        return t[1];
      }), h.map(function (t) {
        var e = t[0],
            r = (t[1], i.getElementData(e));
        return c.outgoing(r, {
          type: e.type,
          checked: e.checked,
          value: e.value
        });
      })) : y.empty();
    }));
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var o = r(10),
      i = r(22),
      s = r(21),
      c = r(98),
      a = r(4),
      u = r(39),
      f = r(6),
      p = r(40),
      l = r(0),
      h = r(2),
      d = r(20),
      y = r(16),
      v = r(41);
  e.getFormTogglesStream = n;
}, function (t, e, r) {
  "use strict";

  function n(t, e, r, n) {
    return function (o) {
      return o.lift(new p(t, e, r, n));
    };
  }

  var o = this && this.__extends || function (t, e) {
    function r() {
      this.constructor = t;
    }

    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }

    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
  },
      i = r(3),
      s = r(12),
      c = r(1),
      a = r(37),
      u = r(177),
      f = r(179);

  e.groupBy = n;

  var p = function () {
    function t(t, e, r, n) {
      this.keySelector = t, this.elementSelector = e, this.durationSelector = r, this.subjectSelector = n;
    }

    return t.prototype.call = function (t, e) {
      return e.subscribe(new l(t, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
    }, t;
  }(),
      l = function (t) {
    function e(e, r, n, o, i) {
      t.call(this, e), this.keySelector = r, this.elementSelector = n, this.durationSelector = o, this.subjectSelector = i, this.groups = null, this.attemptedToUnsubscribe = !1, this.count = 0;
    }

    return o(e, t), e.prototype._next = function (t) {
      var e;

      try {
        e = this.keySelector(t);
      } catch (t) {
        return void this.error(t);
      }

      this._group(t, e);
    }, e.prototype._group = function (t, e) {
      var r = this.groups;
      r || (r = this.groups = "string" == typeof e ? new f.FastMap() : new u.Map());
      var n,
          o = r.get(e);
      if (this.elementSelector) try {
        n = this.elementSelector(t);
      } catch (t) {
        this.error(t);
      } else n = t;

      if (!o) {
        o = this.subjectSelector ? this.subjectSelector() : new a.Subject(), r.set(e, o);
        var i = new d(e, o, this);

        if (this.destination.next(i), this.durationSelector) {
          var s = void 0;

          try {
            s = this.durationSelector(new d(e, o));
          } catch (t) {
            return void this.error(t);
          }

          this.add(s.subscribe(new h(e, o, this)));
        }
      }

      o.closed || o.next(n);
    }, e.prototype._error = function (t) {
      var e = this.groups;
      e && (e.forEach(function (e, r) {
        e.error(t);
      }), e.clear()), this.destination.error(t);
    }, e.prototype._complete = function () {
      var t = this.groups;
      t && (t.forEach(function (t, e) {
        t.complete();
      }), t.clear()), this.destination.complete();
    }, e.prototype.removeGroup = function (t) {
      this.groups["delete"](t);
    }, e.prototype.unsubscribe = function () {
      this.closed || (this.attemptedToUnsubscribe = !0, 0 === this.count && t.prototype.unsubscribe.call(this));
    }, e;
  }(i.Subscriber),
      h = function (t) {
    function e(e, r, n) {
      t.call(this, r), this.key = e, this.group = r, this.parent = n;
    }

    return o(e, t), e.prototype._next = function (t) {
      this.complete();
    }, e.prototype._unsubscribe = function () {
      var t = this,
          e = t.parent,
          r = t.key;
      this.key = this.parent = null, e && e.removeGroup(r);
    }, e;
  }(i.Subscriber),
      d = function (t) {
    function e(e, r, n) {
      t.call(this), this.key = e, this.groupSubject = r, this.refCountSubscription = n;
    }

    return o(e, t), e.prototype._subscribe = function (t) {
      var e = new s.Subscription(),
          r = this,
          n = r.refCountSubscription,
          o = r.groupSubject;
      return n && !n.closed && e.add(new y(n)), e.add(o.subscribe(t)), e;
    }, e;
  }(c.Observable);

  e.GroupedObservable = d;

  var y = function (t) {
    function e(e) {
      t.call(this), this.parent = e, e.count++;
    }

    return o(e, t), e.prototype.unsubscribe = function () {
      var e = this.parent;
      e.closed || this.closed || (t.prototype.unsubscribe.call(this), e.count -= 1, 0 === e.count && e.attemptedToUnsubscribe && e.unsubscribe());
    }, e;
  }(s.Subscription);
}, function (t, e, r) {
  "use strict";

  var n = r(7),
      o = r(178);

  e.Map = n.root.Map || function () {
    return o.MapPolyfill;
  }();
}, function (t, e, r) {
  "use strict";

  var n = function () {
    function t() {
      this.size = 0, this._values = [], this._keys = [];
    }

    return t.prototype.get = function (t) {
      var e = this._keys.indexOf(t);

      return -1 === e ? void 0 : this._values[e];
    }, t.prototype.set = function (t, e) {
      var r = this._keys.indexOf(t);

      return -1 === r ? (this._keys.push(t), this._values.push(e), this.size++) : this._values[r] = e, this;
    }, t.prototype["delete"] = function (t) {
      var e = this._keys.indexOf(t);

      return -1 !== e && (this._values.splice(e, 1), this._keys.splice(e, 1), this.size--, !0);
    }, t.prototype.clear = function () {
      this._keys.length = 0, this._values.length = 0, this.size = 0;
    }, t.prototype.forEach = function (t, e) {
      for (var r = 0; r < this.size; r++) {
        t.call(e, this._values[r], this._keys[r]);
      }
    }, t;
  }();

  e.MapPolyfill = n;
}, function (t, e, r) {
  "use strict";

  var n = function () {
    function t() {
      this.values = {};
    }

    return t.prototype["delete"] = function (t) {
      return this.values[t] = null, !0;
    }, t.prototype.set = function (t, e) {
      return this.values[t] = e, this;
    }, t.prototype.get = function (t) {
      return this.values[t];
    }, t.prototype.forEach = function (t, e) {
      var r = this.values;

      for (var n in r) {
        r.hasOwnProperty(n) && null !== r[n] && t.call(e, r[n], n);
      }
    }, t.prototype.clear = function () {
      this.values = {};
    }, t;
  }();

  e.FastMap = n;
}]);
"use strict";

(function (window, document, bs, undefined) {
  var socket = bs.socket;
  var uiOptions = {
    bs: {}
  };
  socket.on("ui:connection", function (options) {
    uiOptions = options;
    bs.socket.emit("ui:history:connected", {
      href: window.location.href
    });
  });
  socket.on("ui:element:remove", function (data) {
    if (data.id) {
      var elem = document.getElementById(data.id);

      if (elem) {
        removeElement(elem);
      }
    }
  });
  socket.on("highlight", function () {
    var id = "__browser-sync-highlight__";
    var elem = document.getElementById(id);

    if (elem) {
      return removeElement(elem);
    }

    (function (e) {
      e.style.position = "fixed";
      e.style.zIndex = "1000";
      e.style.width = "100%";
      e.style.height = "100%";
      e.style.borderWidth = "5px";
      e.style.borderColor = "red";
      e.style.borderStyle = "solid";
      e.style.top = "0";
      e.style.left = "0";
      e.setAttribute("id", id);
      document.getElementsByTagName("body")[0].appendChild(e);
    })(document.createElement("div"));
  });
  socket.on("ui:element:add", function (data) {
    var elem = document.getElementById(data.id);

    if (!elem) {
      if (data.type === "css") {
        return addCss(data);
      }

      if (data.type === "js") {
        return addJs(data);
      }

      if (data.type === "dom") {
        return addDomNode(data);
      }
    }
  });
  bs.addDomNode = addDomNode;
  bs.addJs = addJs;
  bs.addCss = addJs;

  function addJs(data) {
    (function (e) {
      e.setAttribute("src", getAbsoluteUrl(data.src));
      e.setAttribute("id", data.id);
      document.getElementsByTagName("body")[0].appendChild(e);
    })(document.createElement("script"));
  }

  function addCss(data) {
    (function (e) {
      e.setAttribute("rel", "stylesheet");
      e.setAttribute("type", "text/css");
      e.setAttribute("id", data.id);
      e.setAttribute("media", "all");
      e.setAttribute("href", getAbsoluteUrl(data.src));
      document.getElementsByTagName("head")[0].appendChild(e);
    })(document.createElement("link"));
  }

  function addDomNode(data) {
    var elem = document.createElement(data.tagName);

    for (var attr in data.attrs) {
      elem.setAttribute(attr, data.attrs[attr]);
    }

    if (data.placement) {
      document.getElementsByTagName(data.placement)[0].appendChild(elem);
    } else {
      document.getElementsByTagName("body")[0].appendChild(elem);
    }

    return elem;
  }

  function removeElement(element) {
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }

  function getAbsoluteUrl(path) {
    if (path.match(/^h/)) {
      return path;
    }

    return [window.location.protocol, "//", getHost(), path].join("");
  }

  function getHost() {
    return uiOptions.bs.mode === "snippet" ? window.location.hostname + ":" + uiOptions.bs.port : window.location.host;
  }
})(window, document, ___browserSync___);

/***/ }),

/***/ 1:
/*!*******************************************!*\
  !*** multi ./resources/js/browserSync.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/valney/Projetos/rpg-companion-for-discord/resources/js/browserSync.js */"./resources/js/browserSync.js");


/***/ })

/******/ });