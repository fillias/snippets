/**
 * @file postscribe
 * @description Asynchronously write javascript, even with document.write.
 * @version v2.0.8
 * @see {@link https://krux.github.io/postscribe}
 * @license MIT
 * @author Derek Brans
 * @copyright 2016 Krux Digital, Inc
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["postscribe"] = factory();
	else
		root["postscribe"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _postscribe = __webpack_require__(1);
	
	var _postscribe2 = _interopRequireDefault(_postscribe);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	module.exports = _postscribe2['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = postscribe;
	
	var _writeStream = __webpack_require__(2);
	
	var _writeStream2 = _interopRequireDefault(_writeStream);
	
	var _utils = __webpack_require__(4);
	
	var utils = _interopRequireWildcard(_utils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * A function that intentionally does nothing.
	 */
	function doNothing() {}
	
	/**
	 * Available options and defaults.
	 *
	 * @type {Object}
	 */
	var OPTIONS = {
	  /**
	   * Called when an async script has loaded.
	   */
	  afterAsync: doNothing,
	
	  /**
	   * Called immediately before removing from the write queue.
	   */
	  afterDequeue: doNothing,
	
	  /**
	   * Called sync after a stream's first thread release.
	   */
	  afterStreamStart: doNothing,
	
	  /**
	   * Called after writing buffered document.write calls.
	   */
	  afterWrite: doNothing,
	
	  /**
	   * Allows disabling the autoFix feature of prescribe
	   */
	  autoFix: true,
	
	  /**
	   * Called immediately before adding to the write queue.
	   */
	  beforeEnqueue: doNothing,
	
	  /**
	   * Called before writing a token.
	   *
	   * @param {Object} tok The token
	   */
	  beforeWriteToken: function beforeWriteToken(tok) {
	    return tok;
	  },
	
	  /**
	   * Called before writing buffered document.write calls.
	   *
	   * @param {String} str The string
	   */
	  beforeWrite: function beforeWrite(str) {
	    return str;
	  },
	
	  /**
	   * Called when evaluation is finished.
	   */
	  done: doNothing,
	
	  /**
	   * Called when a write results in an error.
	   *
	   * @param {Error} e The error
	   */
	  error: function error(e) {
	    throw new Error(e.msg);
	  },
	
	
	  /**
	   * Whether to let scripts w/ async attribute set fall out of the queue.
	   */
	  releaseAsync: false
	};
	
	var nextId = 0;
	var queue = [];
	var active = null;
	
	function nextStream() {
	  var args = queue.shift();
	  if (args) {
	    var options = utils.last(args);
	
	    options.afterDequeue();
	    args.stream = runStream.apply(undefined, args);
	    options.afterStreamStart();
	  }
	}
	
	function runStream(el, html, options) {
	  active = new _writeStream2['default'](el, options);
	
	  // Identify this stream.
	  active.id = nextId++;
	  active.name = options.name || active.id;
	  postscribe.streams[active.name] = active;
	
	  // Override document.write.
	  var doc = el.ownerDocument;
	
	  var stash = {
	    close: doc.close,
	    open: doc.open,
	    write: doc.write,
	    writeln: doc.writeln
	  };
	
	  function _write(str) {
	    str = options.beforeWrite(str);
	    active.write(str);
	    options.afterWrite(str);
	  }
	
	  _extends(doc, {
	    close: doNothing,
	    open: doNothing,
	    write: function write() {
	      for (var _len = arguments.length, str = Array(_len), _key = 0; _key < _len; _key++) {
	        str[_key] = arguments[_key];
	      }
	
	      return _write(str.join(''));
	    },
	    writeln: function writeln() {
	      for (var _len2 = arguments.length, str = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        str[_key2] = arguments[_key2];
	      }
	
	      return _write(str.join('') + '\n');
	    }
	  });
	
	  // Override window.onerror
	  var oldOnError = active.win.onerror || doNothing;
	
	  // This works together with the try/catch around WriteStream::insertScript
	  // In modern browsers, exceptions in tag scripts go directly to top level
	  active.win.onerror = function (msg, url, line) {
	    options.error({ msg: msg + ' - ' + url + ': ' + line });
	    oldOnError.apply(active.win, [msg, url, line]);
	  };
	
	  // Write to the stream
	  active.write(html, function () {
	    // restore document.write
	    _extends(doc, stash);
	
	    // restore window.onerror
	    active.win.onerror = oldOnError;
	
	    options.done();
	    active = null;
	    nextStream();
	  });
	
	  return active;
	}
	
	function postscribe(el, html, options) {
	  if (utils.isFunction(options)) {
	    options = { done: options };
	  } else if (options === 'clear') {
	    queue = [];
	    active = null;
	    nextId = 0;
	    return;
	  }
	
	  options = utils.defaults(options, OPTIONS);
	
	  // id selector
	  if (/^#/.test(el)) {
	    el = window.document.getElementById(el.substr(1));
	  } else {
	    el = el.jquery ? el[0] : el;
	  }
	
	  var args = [el, html, options];
	
	  el.postscribe = {
	    cancel: function cancel() {
	      if (args.stream) {
	        args.stream.abort();
	      } else {
	        args[1] = doNothing;
	      }
	    }
	  };
	
	  options.beforeEnqueue(args);
	  queue.push(args);
	
	  if (!active) {
	    nextStream();
	  }
	
	  return el.postscribe;
	}
	
	_extends(postscribe, {
	  // Streams by name.
	  streams: {},
	  // Queue of streams.
	  queue: queue,
	  // Expose internal classes.
	  WriteStream: _writeStream2['default']
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _prescribe = __webpack_require__(3);
	
	var _prescribe2 = _interopRequireDefault(_prescribe);
	
	var _utils = __webpack_require__(4);
	
	var utils = _interopRequireWildcard(_utils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Turn on to debug how each chunk affected the DOM.
	 * @type {boolean}
	 */
	var DEBUG_CHUNK = false;
	
	/**
	 * Prefix for data attributes on DOM elements.
	 * @type {string}
	 */
	var BASEATTR = 'data-ps-';
	
	/**
	 * ID for the style proxy
	 * @type {string}
	 */
	var PROXY_STYLE = 'ps-style';
	
	/**
	 * ID for the script proxy
	 * @type {string}
	 */
	var PROXY_SCRIPT = 'ps-script';
	
	/**
	 * Get data attributes
	 *
	 * @param {Object} el The DOM element.
	 * @param {String} name The attribute name.
	 * @returns {String}
	 */
	function getData(el, name) {
	  var attr = BASEATTR + name;
	
	  var val = el.getAttribute(attr);
	
	  // IE 8 returns a number if it's a number
	  return !utils.existy(val) ? val : String(val);
	}
	
	/**
	 * Set data attributes
	 *
	 * @param {Object} el The DOM element.
	 * @param {String} name The attribute name.
	 * @param {null|*} value The attribute value.
	 */
	function setData(el, name) {
	  var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	
	  var attr = BASEATTR + name;
	
	  if (utils.existy(value) && value !== '') {
	    el.setAttribute(attr, value);
	  } else {
	    el.removeAttribute(attr);
	  }
	}
	
	/**
	 * Stream static html to an element, where "static html" denotes "html
	 * without scripts".
	 *
	 * This class maintains a *history of writes devoid of any attributes* or
	 * "proxy history".
	 *
	 * Injecting the proxy history into a temporary div has no side-effects,
	 * other than to create proxy elements for previously written elements.
	 *
	 * Given the `staticHtml` of a new write, a `tempDiv`'s innerHTML is set to
	 * `proxy_history + staticHtml`.
	 * The *structure* of `tempDiv`'s contents, (i.e., the placement of new nodes
	 * beside or inside of proxy elements), reflects the DOM structure that would
	 * have resulted if all writes had been squashed into a single write.
	 *
	 * For each descendent `node` of `tempDiv` whose parentNode is a *proxy*,
	 * `node` is appended to the corresponding *real* element within the DOM.
	 *
	 * Proxy elements are mapped to *actual* elements in the DOM by injecting a
	 * `data-id` attribute into each start tag in `staticHtml`.
	 *
	 */
	
	var WriteStream = function () {
	  /**
	   * Constructor.
	   *
	   * @param {Object} root The root element
	   * @param {?Object} options The options
	   */
	  function WriteStream(root) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    _classCallCheck(this, WriteStream);
	
	    this.root = root;
	    this.options = options;
	    this.doc = root.ownerDocument;
	    this.win = this.doc.defaultView || this.doc.parentWindow;
	    this.parser = new _prescribe2['default']('', { autoFix: options.autoFix });
	
	    // Actual elements by id.
	    this.actuals = [root];
	
	    // Embodies the "structure" of what's been written so far,
	    // devoid of attributes.
	    this.proxyHistory = '';
	
	    // Create a proxy of the root element.
	    this.proxyRoot = this.doc.createElement(root.nodeName);
	
	    this.scriptStack = [];
	    this.writeQueue = [];
	
	    setData(this.proxyRoot, 'proxyof', 0);
	  }
	
	  /**
	   * Writes the given strings.
	   *
	   * @param {...String} str The strings to write
	   */
	
	
	  WriteStream.prototype.write = function write() {
	    var _writeQueue;
	
	    (_writeQueue = this.writeQueue).push.apply(_writeQueue, arguments);
	
	    // Process writes
	    // When new script gets pushed or pending this will stop
	    // because new writeQueue gets pushed
	    while (!this.deferredRemote && this.writeQueue.length) {
	      var arg = this.writeQueue.shift();
	
	      if (utils.isFunction(arg)) {
	        this._callFunction(arg);
	      } else {
	        this._writeImpl(arg);
	      }
	    }
	  };
	
	  /**
	   * Calls the given function.
	   *
	   * @param {Function} fn The function to call
	   * @private
	   */
	
	
	  WriteStream.prototype._callFunction = function _callFunction(fn) {
	    var tok = { type: 'function', value: fn.name || fn.toString() };
	    this._onScriptStart(tok);
	    fn.call(this.win, this.doc);
	    this._onScriptDone(tok);
	  };
	
	  /**
	   * The write implementation
	   *
	   * @param {String} html The HTML to write.
	   * @private
	   */
	
	
	  WriteStream.prototype._writeImpl = function _writeImpl(html) {
	    this.parser.append(html);
	
	    var tok = void 0;
	    var script = void 0;
	    var style = void 0;
	    var tokens = [];
	
	    // stop if we see a script token
	    while ((tok = this.parser.readToken()) && !(script = utils.isScript(tok)) && !(style = utils.isStyle(tok))) {
	      tok = this.options.beforeWriteToken(tok);
	
	      if (tok) {
	        tokens.push(tok);
	      }
	    }
	
	    if (tokens.length > 0) {
	      this._writeStaticTokens(tokens);
	    }
	
	    if (script) {
	      this._handleScriptToken(tok);
	    }
	
	    if (style) {
	      this._handleStyleToken(tok);
	    }
	  };
	
	  /**
	   * Write contiguous non-script tokens (a chunk)
	   *
	   * @param {Array<Object>} tokens The tokens
	   * @returns {{tokens, raw, actual, proxy}|null}
	   * @private
	   */
	
	
	  WriteStream.prototype._writeStaticTokens = function _writeStaticTokens(tokens) {
	    var chunk = this._buildChunk(tokens);
	
	    if (!chunk.actual) {
	      // e.g., no tokens, or a noscript that got ignored
	      return null;
	    }
	
	    chunk.html = this.proxyHistory + chunk.actual;
	    this.proxyHistory += chunk.proxy;
	    this.proxyRoot.innerHTML = chunk.html;
	
	    if (DEBUG_CHUNK) {
	      chunk.proxyInnerHTML = this.proxyRoot.innerHTML;
	    }
	
	    this._walkChunk();
	
	    if (DEBUG_CHUNK) {
	      chunk.actualInnerHTML = this.root.innerHTML;
	    }
	
	    return chunk;
	  };
	
	  /**
	   * Build a chunk.
	   *
	   * @param {Array<Object>} tokens The tokens to use.
	   * @returns {{tokens: *, raw: string, actual: string, proxy: string}}
	   * @private
	   */
	
	
	  WriteStream.prototype._buildChunk = function _buildChunk(tokens) {
	    var nextId = this.actuals.length;
	
	    // The raw html of this chunk.
	    var raw = [];
	
	    // The html to create the nodes in the tokens (with id's injected).
	    var actual = [];
	
	    // Html that can later be used to proxy the nodes in the tokens.
	    var proxy = [];
	
	    var len = tokens.length;
	    for (var i = 0; i < len; i++) {
	      var tok = tokens[i];
	      var tokenRaw = tok.toString();
	
	      raw.push(tokenRaw);
	
	      if (tok.attrs) {
	        // tok.attrs <==> startTag or atomicTag or cursor
	        // Ignore noscript tags. They are atomic, so we don't have to worry about children.
	        if (!/^noscript$/i.test(tok.tagName)) {
	          var id = nextId++;
	
	          // Actual: inject id attribute: replace '>' at end of start tag with id attribute + '>'
	          actual.push(tokenRaw.replace(/(\/?>)/, ' ' + BASEATTR + 'id=' + id + ' $1'));
	
	          // Don't proxy scripts: they have no bearing on DOM structure.
	          if (tok.attrs.id !== PROXY_SCRIPT && tok.attrs.id !== PROXY_STYLE) {
	            // Proxy: strip all attributes and inject proxyof attribute
	            proxy.push(
	            // ignore atomic tags (e.g., style): they have no "structural" effect
	            tok.type === 'atomicTag' ? '' : '<' + tok.tagName + ' ' + BASEATTR + 'proxyof=' + id + (tok.unary ? ' />' : '>'));
	          }
	        }
	      } else {
	        // Visit any other type of token
	        // Actual: append.
	        actual.push(tokenRaw);
	
	        // Proxy: append endTags. Ignore everything else.
	        proxy.push(tok.type === 'endTag' ? tokenRaw : '');
	      }
	    }
	
	    return {
	      tokens: tokens,
	      raw: raw.join(''),
	      actual: actual.join(''),
	      proxy: proxy.join('')
	    };
	  };
	
	  /**
	   * Walk the chunks.
	   *
	   * @private
	   */
	
	
	  WriteStream.prototype._walkChunk = function _walkChunk() {
	    var node = void 0;
	    var stack = [this.proxyRoot];
	
	    // use shift/unshift so that children are walked in document order
	    while (utils.existy(node = stack.shift())) {
	      var isElement = node.nodeType === 1;
	      var isProxy = isElement && getData(node, 'proxyof');
	
	      // Ignore proxies
	      if (!isProxy) {
	        if (isElement) {
	          // New actual element: register it and remove the the id attr.
	          this.actuals[getData(node, 'id')] = node;
	          setData(node, 'id');
	        }
	
	        // Is node's parent a proxy?
	        var parentIsProxyOf = node.parentNode && getData(node.parentNode, 'proxyof');
	        if (parentIsProxyOf) {
	          // Move node under actual parent.
	          this.actuals[parentIsProxyOf].appendChild(node);
	        }
	      }
	
	      // prepend childNodes to stack
	      stack.unshift.apply(stack, utils.toArray(node.childNodes));
	    }
	  };
	
	  /**
	   * Handles Script tokens
	   *
	   * @param {Object} tok The token
	   */
	
	
	  WriteStream.prototype._handleScriptToken = function _handleScriptToken(tok) {
	    var _this = this;
	
	    var remainder = this.parser.clear();
	
	    if (remainder) {
	      // Write remainder immediately behind this script.
	      this.writeQueue.unshift(remainder);
	    }
	
	    tok.src = tok.attrs.src || tok.attrs.SRC;
	
	    tok = this.options.beforeWriteToken(tok);
	    if (!tok) {
	      // User has removed this token
	      return;
	    }
	
	    if (tok.src && this.scriptStack.length) {
	      // Defer this script until scriptStack is empty.
	      // Assumption 1: This script will not start executing until
	      // scriptStack is empty.
	      this.deferredRemote = tok;
	    } else {
	      this._onScriptStart(tok);
	    }
	
	    // Put the script node in the DOM.
	    this._writeScriptToken(tok, function () {
	      _this._onScriptDone(tok);
	    });
	  };
	
	  /**
	   * Handles style tokens
	   *
	   * @param {Object} tok The token
	   */
	
	
	  WriteStream.prototype._handleStyleToken = function _handleStyleToken(tok) {
	    var remainder = this.parser.clear();
	
	    if (remainder) {
	      // Write remainder immediately behind this style.
	      this.writeQueue.unshift(remainder);
	    }
	
	    tok.type = tok.attrs.type || tok.attrs.TYPE || 'text/css';
	
	    tok = this.options.beforeWriteToken(tok);
	
	    if (tok) {
	      // Put the style node in the DOM.
	      this._writeStyleToken(tok);
	    }
	
	    if (remainder) {
	      this.write();
	    }
	  };
	
	  /**
	   * Build a style and insert it into the DOM.
	   *
	   * @param {Object} tok The token
	   */
	
	
	  WriteStream.prototype._writeStyleToken = function _writeStyleToken(tok) {
	    var el = this._buildStyle(tok);
	
	    this._insertCursor(el, PROXY_STYLE);
	
	    // Set content
	    if (tok.content) {
	      if (el.styleSheet && !el.sheet) {
	        el.styleSheet.cssText = tok.content;
	      } else {
	        el.appendChild(this.doc.createTextNode(tok.content));
	      }
	    }
	  };
	
	  /**
	   * Build a style element from an atomic style token.
	   *
	   * @param {Object} tok The token
	   * @returns {Element}
	   */
	
	
	  WriteStream.prototype._buildStyle = function _buildStyle(tok) {
	    var el = this.doc.createElement(tok.tagName);
	
	    el.setAttribute('type', tok.type);
	
	    // Set attributes
	    utils.eachKey(tok.attrs, function (name, value) {
	      el.setAttribute(name, value);
	    });
	
	    return el;
	  };
	
	  /**
	   * Append a span to the stream. That span will act as a cursor
	   * (i.e. insertion point) for the element.
	   *
	   * @param {Object} el The element
	   * @param {string} which The type of proxy element
	   */
	
	
	  WriteStream.prototype._insertCursor = function _insertCursor(el, which) {
	    this._writeImpl('<span id="' + which + '"/>');
	
	    var cursor = this.doc.getElementById(which);
	
	    if (cursor) {
	      cursor.parentNode.replaceChild(el, cursor);
	    }
	  };
	
	  /**
	   * Called when a script is started.
	   *
	   * @param {Object} tok The token
	   * @private
	   */
	
	
	  WriteStream.prototype._onScriptStart = function _onScriptStart(tok) {
	    tok.outerWrites = this.writeQueue;
	    this.writeQueue = [];
	    this.scriptStack.unshift(tok);
	  };
	
	  /**
	   * Called when a script is done.
	   *
	   * @param {Object} tok The token
	   * @private
	   */
	
	
	  WriteStream.prototype._onScriptDone = function _onScriptDone(tok) {
	    // Pop script and check nesting.
	    if (tok !== this.scriptStack[0]) {
	      this.options.error({ msg: 'Bad script nesting or script finished twice' });
	      return;
	    }
	
	    this.scriptStack.shift();
	
	    // Append outer writes to queue and process them.
	    this.write.apply(this, tok.outerWrites);
	
	    // Check for pending remote
	
	    // Assumption 2: if remote_script1 writes remote_script2 then
	    // the we notice remote_script1 finishes before remote_script2 starts.
	    // I think this is equivalent to assumption 1
	    if (!this.scriptStack.length && this.deferredRemote) {
	      this._onScriptStart(this.deferredRemote);
	      this.deferredRemote = null;
	    }
	  };
	
	  /**
	   * Build a script and insert it into the DOM.
	   * Done is called once script has executed.
	   *
	   * @param {Object} tok The token
	   * @param {Function} done The callback when complete
	   */
	
	
	  WriteStream.prototype._writeScriptToken = function _writeScriptToken(tok, done) {
	    var el = this._buildScript(tok);
	    var asyncRelease = this._shouldRelease(el);
	    var afterAsync = this.options.afterAsync;
	
	    if (tok.src) {
	      // Fix for attribute "SRC" (capitalized). IE does not recognize it.
	      el.src = tok.src;
	      this._scriptLoadHandler(el, !asyncRelease ? function () {
	        done();
	        afterAsync();
	      } : afterAsync);
	    }
	
	    try {
	      this._insertCursor(el, PROXY_SCRIPT);
	      if (!el.src || asyncRelease) {
	        done();
	      }
	    } catch (e) {
	      this.options.error(e);
	      done();
	    }
	  };
	
	  /**
	   * Build a script element from an atomic script token.
	   *
	   * @param {Object} tok The token
	   * @returns {Element}
	   */
	
	
	  WriteStream.prototype._buildScript = function _buildScript(tok) {
	    var el = this.doc.createElement(tok.tagName);
	
	    // Set attributes
	    utils.eachKey(tok.attrs, function (name, value) {
	      el.setAttribute(name, value);
	    });
	
	    // Set content
	    if (tok.content) {
	      el.text = tok.content;
	    }
	
	    return el;
	  };
	
	  /**
	   * Setup the script load handler on an element.
	   *
	   * @param {Object} el The element
	   * @param {Function} done The callback
	   * @private
	   */
	
	
	  WriteStream.prototype._scriptLoadHandler = function _scriptLoadHandler(el, done) {
	    function cleanup() {
	      el = el.onload = el.onreadystatechange = el.onerror = null;
	    }
	
	    var error = this.options.error;
	
	    function success() {
	      cleanup();
	      if (done != null) {
	        done();
	      }
	      done = null;
	    }
	
	    function failure(err) {
	      cleanup();
	      error(err);
	      if (done != null) {
	        done();
	      }
	      done = null;
	    }
	
	    function reattachEventListener(el, evt) {
	      var handler = el['on' + evt];
	      if (handler != null) {
	        el['_on' + evt] = handler;
	      }
	    }
	
	    reattachEventListener(el, 'load');
	    reattachEventListener(el, 'error');
	
	    _extends(el, {
	      onload: function onload() {
	        if (el._onload) {
	          try {
	            el._onload.apply(this, Array.prototype.slice.call(arguments, 0));
	          } catch (err) {
	            failure({ msg: 'onload handler failed ' + err + ' @ ' + el.src });
	          }
	        }
	        success();
	      },
	      onerror: function onerror() {
	        if (el._onerror) {
	          try {
	            el._onerror.apply(this, Array.prototype.slice.call(arguments, 0));
	          } catch (err) {
	            failure({ msg: 'onerror handler failed ' + err + ' @ ' + el.src });
	            return;
	          }
	        }
	        failure({ msg: 'remote script failed ' + el.src });
	      },
	      onreadystatechange: function onreadystatechange() {
	        if (/^(loaded|complete)$/.test(el.readyState)) {
	          success();
	        }
	      }
	    });
	  };
	
	  /**
	   * Determines whether to release.
	   *
	   * @param {Object} el The element
	   * @returns {boolean}
	   * @private
	   */
	
	
	  WriteStream.prototype._shouldRelease = function _shouldRelease(el) {
	    var isScript = /^script$/i.test(el.nodeName);
	    return !isScript || !!(this.options.releaseAsync && el.src && el.hasAttribute('async'));
	  };
	
	  return WriteStream;
	}();
	
	exports['default'] = WriteStream;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file prescribe
	 * @description Tiny, forgiving HTML parser
	 * @version vundefined
	 * @see {@link https://github.com/krux/prescribe/}
	 * @license MIT
	 * @author Derek Brans
	 * @copyright 2016 Krux Digital, Inc
	 */
	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["Prescribe"] = factory();
		else
			root["Prescribe"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	
	
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var _HtmlParser = __webpack_require__(1);
	
		var _HtmlParser2 = _interopRequireDefault(_HtmlParser);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
		module.exports = _HtmlParser2['default'];
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		exports.__esModule = true;
	
		var _supports = __webpack_require__(2);
	
		var supports = _interopRequireWildcard(_supports);
	
		var _streamReaders = __webpack_require__(3);
	
		var streamReaders = _interopRequireWildcard(_streamReaders);
	
		var _fixedReadTokenFactory = __webpack_require__(6);
	
		var _fixedReadTokenFactory2 = _interopRequireDefault(_fixedReadTokenFactory);
	
		var _utils = __webpack_require__(5);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
		function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
		/**
		 * Detection regular expressions.
		 *
		 * Order of detection matters: detection of one can only
		 * succeed if detection of previous didn't
	
		 * @type {Object}
		 */
		var detect = {
		  comment: /^<!--/,
		  endTag: /^<\//,
		  atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
		  startTag: /^</,
		  chars: /^[^<]/
		};
	
		/**
		 * HtmlParser provides the capability to parse HTML and return tokens
		 * representing the tags and content.
		 */
	
		var HtmlParser = function () {
		  /**
		   * Constructor.
		   *
		   * @param {string} stream The initial parse stream contents.
		   * @param {Object} options The options
		   * @param {boolean} options.autoFix Set to true to automatically fix errors
		   */
		  function HtmlParser() {
		    var _this = this;
	
		    var stream = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
		    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
		    _classCallCheck(this, HtmlParser);
	
		    this.stream = stream;
	
		    var fix = false;
		    var fixedTokenOptions = {};
	
		    for (var key in supports) {
		      if (supports.hasOwnProperty(key)) {
		        if (options.autoFix) {
		          fixedTokenOptions[key + 'Fix'] = true; // !supports[key];
		        }
		        fix = fix || fixedTokenOptions[key + 'Fix'];
		      }
		    }
	
		    if (fix) {
		      this._readToken = (0, _fixedReadTokenFactory2['default'])(this, fixedTokenOptions, function () {
		        return _this._readTokenImpl();
		      });
		      this._peekToken = (0, _fixedReadTokenFactory2['default'])(this, fixedTokenOptions, function () {
		        return _this._peekTokenImpl();
		      });
		    } else {
		      this._readToken = this._readTokenImpl;
		      this._peekToken = this._peekTokenImpl;
		    }
		  }
	
		  /**
		   * Appends the given string to the parse stream.
		   *
		   * @param {string} str The string to append
		   */
	
	
		  HtmlParser.prototype.append = function append(str) {
		    this.stream += str;
		  };
	
		  /**
		   * Prepends the given string to the parse stream.
		   *
		   * @param {string} str The string to prepend
		   */
	
	
		  HtmlParser.prototype.prepend = function prepend(str) {
		    this.stream = str + this.stream;
		  };
	
		  /**
		   * The implementation of the token reading.
		   *
		   * @private
		   * @returns {?Token}
		   */
	
	
		  HtmlParser.prototype._readTokenImpl = function _readTokenImpl() {
		    var token = this._peekTokenImpl();
		    if (token) {
		      this.stream = this.stream.slice(token.length);
		      return token;
		    }
		  };
	
		  /**
		   * The implementation of token peeking.
		   *
		   * @returns {?Token}
		   */
	
	
		  HtmlParser.prototype._peekTokenImpl = function _peekTokenImpl() {
		    for (var type in detect) {
		      if (detect.hasOwnProperty(type)) {
		        if (detect[type].test(this.stream)) {
		          var token = streamReaders[type](this.stream);
	
		          if (token) {
		            if (token.type === 'startTag' && /script|style/i.test(token.tagName)) {
		              return null;
		            } else {
		              token.text = this.stream.substr(0, token.length);
		              return token;
		            }
		          }
		        }
		      }
		    }
		  };
	
		  /**
		   * The public token peeking interface.  Delegates to the basic token peeking
		   * or a version that performs fixups depending on the `autoFix` setting in
		   * options.
		   *
		   * @returns {object}
		   */
	
	
		  HtmlParser.prototype.peekToken = function peekToken() {
		    return this._peekToken();
		  };
	
		  /**
		   * The public token reading interface.  Delegates to the basic token reading
		   * or a version that performs fixups depending on the `autoFix` setting in
		   * options.
		   *
		   * @returns {object}
		   */
	
	
		  HtmlParser.prototype.readToken = function readToken() {
		    return this._readToken();
		  };
	
		  /**
		   * Read tokens and hand to the given handlers.
		   *
		   * @param {Object} handlers The handlers to use for the different tokens.
		   */
	
	
		  HtmlParser.prototype.readTokens = function readTokens(handlers) {
		    var tok = void 0;
		    while (tok = this.readToken()) {
		      // continue until we get an explicit "false" return
		      if (handlers[tok.type] && handlers[tok.type](tok) === false) {
		        return;
		      }
		    }
		  };
	
		  /**
		   * Clears the parse stream.
		   *
		   * @returns {string} The contents of the parse stream before clearing.
		   */
	
	
		  HtmlParser.prototype.clear = function clear() {
		    var rest = this.stream;
		    this.stream = '';
		    return rest;
		  };
	
		  /**
		   * Returns the rest of the parse stream.
		   *
		   * @returns {string} The contents of the parse stream.
		   */
	
	
		  HtmlParser.prototype.rest = function rest() {
		    return this.stream;
		  };
	
		  return HtmlParser;
		}();
	
		exports['default'] = HtmlParser;
	
	
		HtmlParser.tokenToString = function (tok) {
		  return tok.toString();
		};
	
		HtmlParser.escapeAttributes = function (attrs) {
		  var escapedAttrs = {};
	
		  for (var name in attrs) {
		    if (attrs.hasOwnProperty(name)) {
		      escapedAttrs[name] = (0, _utils.escapeQuotes)(attrs[name], null);
		    }
		  }
	
		  return escapedAttrs;
		};
	
		HtmlParser.supports = supports;
	
		for (var key in supports) {
		  if (supports.hasOwnProperty(key)) {
		    HtmlParser.browserHasFlaw = HtmlParser.browserHasFlaw || !supports[key] && key;
		  }
		}
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		'use strict';
	
		exports.__esModule = true;
		var tagSoup = false;
		var selfClose = false;
	
		var work = window.document.createElement('div');
	
		try {
		  var html = '<P><I></P></I>';
		  work.innerHTML = html;
		  exports.tagSoup = tagSoup = work.innerHTML !== html;
		} catch (e) {
		  exports.tagSoup = tagSoup = false;
		}
	
		try {
		  work.innerHTML = '<P><i><P></P></i></P>';
		  exports.selfClose = selfClose = work.childNodes.length === 2;
		} catch (e) {
		  exports.selfClose = selfClose = false;
		}
	
		work = null;
	
		exports.tagSoup = tagSoup;
		exports.selfClose = selfClose;
	
	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		exports.__esModule = true;
	
		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
		exports.comment = comment;
		exports.chars = chars;
		exports.startTag = startTag;
		exports.atomicTag = atomicTag;
		exports.endTag = endTag;
	
		var _tokens = __webpack_require__(4);
	
		/**
		 * Regular Expressions for parsing tags and attributes
		 *
		 * @type {Object}
		 */
		var REGEXES = {
		  startTag: /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
		  endTag: /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
		  attr: /(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,
		  fillAttr: /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i
		};
	
		/**
		 * Reads a comment token
		 *
		 * @param {string} stream The input stream
		 * @returns {CommentToken}
		 */
		function comment(stream) {
		  var index = stream.indexOf('-->');
		  if (index >= 0) {
		    return new _tokens.CommentToken(stream.substr(4, index - 1), index + 3);
		  }
		}
	
		/**
		 * Reads non-tag characters.
		 *
		 * @param {string} stream The input stream
		 * @returns {CharsToken}
		 */
		function chars(stream) {
		  var index = stream.indexOf('<');
		  return new _tokens.CharsToken(index >= 0 ? index : stream.length);
		}
	
		/**
		 * Reads start tag token.
		 *
		 * @param {string} stream The input stream
		 * @returns {StartTagToken}
		 */
		function startTag(stream) {
		  var endTagIndex = stream.indexOf('>');
		  if (endTagIndex !== -1) {
		    var match = stream.match(REGEXES.startTag);
		    if (match) {
		      var _ret = function () {
		        var attrs = {};
		        var booleanAttrs = {};
		        var rest = match[2];
	
		        match[2].replace(REGEXES.attr, function (match, name) {
		          if (!(arguments[2] || arguments[3] || arguments[4] || arguments[5])) {
		            attrs[name] = '';
		          } else if (arguments[5]) {
		            attrs[arguments[5]] = '';
		            booleanAttrs[arguments[5]] = true;
		          } else {
		            attrs[name] = arguments[2] || arguments[3] || arguments[4] || REGEXES.fillAttr.test(name) && name || '';
		          }
	
		          rest = rest.replace(match, '');
		        });
	
		        return {
		          v: new _tokens.StartTagToken(match[1], match[0].length, attrs, booleanAttrs, !!match[3], rest.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''))
		        };
		      }();
	
		      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
		    }
		  }
		}
	
		/**
		 * Reads atomic tag token.
		 *
		 * @param {string} stream The input stream
		 * @returns {AtomicTagToken}
		 */
		function atomicTag(stream) {
		  var start = startTag(stream);
		  if (start) {
		    var rest = stream.slice(start.length);
		    // for optimization, we check first just for the end tag
		    if (rest.match(new RegExp('<\/\\s*' + start.tagName + '\\s*>', 'i'))) {
		      // capturing the content is inefficient, so we do it inside the if
		      var match = rest.match(new RegExp('([\\s\\S]*?)<\/\\s*' + start.tagName + '\\s*>', 'i'));
		      if (match) {
		        return new _tokens.AtomicTagToken(start.tagName, match[0].length + start.length, start.attrs, start.booleanAttrs, match[1]);
		      }
		    }
		  }
		}
	
		/**
		 * Reads an end tag token.
		 *
		 * @param {string} stream The input stream
		 * @returns {EndTagToken}
		 */
		function endTag(stream) {
		  var match = stream.match(REGEXES.endTag);
		  if (match) {
		    return new _tokens.EndTagToken(match[1], match[0].length);
		  }
		}
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		exports.__esModule = true;
		exports.EndTagToken = exports.AtomicTagToken = exports.StartTagToken = exports.TagToken = exports.CharsToken = exports.CommentToken = exports.Token = undefined;
	
		var _utils = __webpack_require__(5);
	
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
		/**
		 * Token is a base class for all token types parsed.  Note we don't actually
		 * use intheritance due to IE8's non-existent ES5 support.
		 */
		var Token =
		/**
		 * Constructor.
		 *
		 * @param {string} type The type of the Token.
		 * @param {Number} length The length of the Token text.
		 */
		exports.Token = function Token(type, length) {
		  _classCallCheck(this, Token);
	
		  this.type = type;
		  this.length = length;
		  this.text = '';
		};
	
		/**
		 * CommentToken represents comment tags.
		 */
	
	
		var CommentToken = exports.CommentToken = function () {
		  /**
		   * Constructor.
		   *
		   * @param {string} content The content of the comment
		   * @param {Number} length The length of the Token text.
		   */
		  function CommentToken(content, length) {
		    _classCallCheck(this, CommentToken);
	
		    this.type = 'comment';
		    this.length = length || (content ? content.length : 0);
		    this.text = '';
		    this.content = content;
		  }
	
		  CommentToken.prototype.toString = function toString() {
		    return '<!--' + this.content;
		  };
	
		  return CommentToken;
		}();
	
		/**
		 * CharsToken represents non-tag characters.
		 */
	
	
		var CharsToken = exports.CharsToken = function () {
		  /**
		   * Constructor.
		   *
		   * @param {Number} length The length of the Token text.
		   */
		  function CharsToken(length) {
		    _classCallCheck(this, CharsToken);
	
		    this.type = 'chars';
		    this.length = length;
		    this.text = '';
		  }
	
		  CharsToken.prototype.toString = function toString() {
		    return this.text;
		  };
	
		  return CharsToken;
		}();
	
		/**
		 * TagToken is a base class for all tag-based Tokens.
		 */
	
	
		var TagToken = exports.TagToken = function () {
		  /**
		   * Constructor.
		   *
		   * @param {string} type The type of the token.
		   * @param {string} tagName The tag name.
		   * @param {Number} length The length of the Token text.
		   * @param {Object} attrs The dictionary of attributes and values
		   * @param {Object} booleanAttrs If an entry has 'true' then the attribute
		   *                              is a boolean attribute
		   */
		  function TagToken(type, tagName, length, attrs, booleanAttrs) {
		    _classCallCheck(this, TagToken);
	
		    this.type = type;
		    this.length = length;
		    this.text = '';
		    this.tagName = tagName;
		    this.attrs = attrs;
		    this.booleanAttrs = booleanAttrs;
		    this.unary = false;
		    this.html5Unary = false;
		  }
	
		  /**
		   * Formats the given token tag.
		   *
		   * @param {TagToken} tok The TagToken to format.
		   * @param {?string} [content=null] The content of the token.
		   * @returns {string} The formatted tag.
		   */
	
	
		  TagToken.formatTag = function formatTag(tok) {
		    var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	
		    var str = '<' + tok.tagName;
		    for (var key in tok.attrs) {
		      if (tok.attrs.hasOwnProperty(key)) {
		        str += ' ' + key;
	
		        var val = tok.attrs[key];
		        if (typeof tok.booleanAttrs === 'undefined' || typeof tok.booleanAttrs[key] === 'undefined') {
		          str += '="' + (0, _utils.escapeQuotes)(val) + '"';
		        }
		      }
		    }
	
		    if (tok.rest) {
		      str += ' ' + tok.rest;
		    }
	
		    if (tok.unary && !tok.html5Unary) {
		      str += '/>';
		    } else {
		      str += '>';
		    }
	
		    if (content !== undefined && content !== null) {
		      str += content + '</' + tok.tagName + '>';
		    }
	
		    return str;
		  };
	
		  return TagToken;
		}();
	
		/**
		 * StartTagToken represents a start token.
		 */
	
	
		var StartTagToken = exports.StartTagToken = function () {
		  /**
		   * Constructor.
		   *
		   * @param {string} tagName The tag name.
		   * @param {Number} length The length of the Token text
		   * @param {Object} attrs The dictionary of attributes and values
		   * @param {Object} booleanAttrs If an entry has 'true' then the attribute
		   *                              is a boolean attribute
		   * @param {boolean} unary True if the tag is a unary tag
		   * @param {string} rest The rest of the content.
		   */
		  function StartTagToken(tagName, length, attrs, booleanAttrs, unary, rest) {
		    _classCallCheck(this, StartTagToken);
	
		    this.type = 'startTag';
		    this.length = length;
		    this.text = '';
		    this.tagName = tagName;
		    this.attrs = attrs;
		    this.booleanAttrs = booleanAttrs;
		    this.html5Unary = false;
		    this.unary = unary;
		    this.rest = rest;
		  }
	
		  StartTagToken.prototype.toString = function toString() {
		    return TagToken.formatTag(this);
		  };
	
		  return StartTagToken;
		}();
	
		/**
		 * AtomicTagToken represents an atomic tag.
		 */
	
	
		var AtomicTagToken = exports.AtomicTagToken = function () {
		  /**
		   * Constructor.
		   *
		   * @param {string} tagName The name of the tag.
		   * @param {Number} length The length of the tag text.
		   * @param {Object} attrs The attributes.
		   * @param {Object} booleanAttrs If an entry has 'true' then the attribute
		   *                              is a boolean attribute
		   * @param {string} content The content of the tag.
		   */
		  function AtomicTagToken(tagName, length, attrs, booleanAttrs, content) {
		    _classCallCheck(this, AtomicTagToken);
	
		    this.type = 'atomicTag';
		    this.length = length;
		    this.text = '';
		    this.tagName = tagName;
		    this.attrs = attrs;
		    this.booleanAttrs = booleanAttrs;
		    this.unary = false;
		    this.html5Unary = false;
		    this.content = content;
		  }
	
		  AtomicTagToken.prototype.toString = function toString() {
		    return TagToken.formatTag(this, this.content);
		  };
	
		  return AtomicTagToken;
		}();
	
		/**
		 * EndTagToken represents an end tag.
		 */
	
	
		var EndTagToken = exports.EndTagToken = function () {
		  /**
		   * Constructor.
		   *
		   * @param {string} tagName The name of the tag.
		   * @param {Number} length The length of the tag text.
		   */
		  function EndTagToken(tagName, length) {
		    _classCallCheck(this, EndTagToken);
	
		    this.type = 'endTag';
		    this.length = length;
		    this.text = '';
		    this.tagName = tagName;
		  }
	
		  EndTagToken.prototype.toString = function toString() {
		    return '</' + this.tagName + '>';
		  };
	
		  return EndTagToken;
		}();
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
		'use strict';
	
		exports.__esModule = true;
		exports.escapeQuotes = escapeQuotes;
	
		/**
		 * Escape quotes in the given value.
		 *
		 * @param {string} value The value to escape.
		 * @param {string} [defaultValue=''] The default value to return if value is falsy.
		 * @returns {string}
		 */
		function escapeQuotes(value) {
		  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	
		  // There's no lookback in JS, so /(^|[^\\])"/ only matches the first of two `"`s.
		  // Instead, just match anything before a double-quote and escape if it's not already escaped.
		  return !value ? defaultValue : value.replace(/([^"]*)"/g, function (_, prefix) {
		    return (/\\/.test(prefix) ? prefix + '"' : prefix + '\\"'
		    );
		  });
		}
	
	/***/ },
	/* 6 */
	/***/ function(module, exports) {
	
		'use strict';
	
		exports.__esModule = true;
		exports['default'] = fixedReadTokenFactory;
		/**
		 * Empty Elements - HTML 4.01
		 *
		 * @type {RegExp}
		 */
		var EMPTY = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i;
	
		/**
		 * Elements that you can intentionally leave open (and which close themselves)
		 *
		 * @type {RegExp}
		 */
		var CLOSESELF = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;
	
		/**
		 * Corrects a token.
		 *
		 * @param {Token} tok The token to correct
		 * @returns {Token} The corrected token
		 */
		function correct(tok) {
		  if (tok && tok.type === 'startTag') {
		    tok.unary = EMPTY.test(tok.tagName) || tok.unary;
		    tok.html5Unary = !/\/>$/.test(tok.text);
		  }
		  return tok;
		}
	
		/**
		 * Peeks at the next token in the parser.
		 *
		 * @param {HtmlParser} parser The parser
		 * @param {Function} readTokenImpl The underlying readToken implementation
		 * @returns {Token} The next token
		 */
		function peekToken(parser, readTokenImpl) {
		  var tmp = parser.stream;
		  var tok = correct(readTokenImpl());
		  parser.stream = tmp;
		  return tok;
		}
	
		/**
		 * Closes the last token.
		 *
		 * @param {HtmlParser} parser The parser
		 * @param {Array<Token>} stack The stack
		 */
		function closeLast(parser, stack) {
		  var tok = stack.pop();
	
		  // prepend close tag to stream.
		  parser.prepend('</' + tok.tagName + '>');
		}
	
		/**
		 * Create a new token stack.
		 *
		 * @returns {Array<Token>}
		 */
		function newStack() {
		  var stack = [];
	
		  stack.last = function () {
		    return this[this.length - 1];
		  };
	
		  stack.lastTagNameEq = function (tagName) {
		    var last = this.last();
		    return last && last.tagName && last.tagName.toUpperCase() === tagName.toUpperCase();
		  };
	
		  stack.containsTagName = function (tagName) {
		    for (var i = 0, tok; tok = this[i]; i++) {
		      if (tok.tagName === tagName) {
		        return true;
		      }
		    }
		    return false;
		  };
	
		  return stack;
		}
	
		/**
		 * Return a readToken implementation that fixes input.
		 *
		 * @param {HtmlParser} parser The parser
		 * @param {Object} options Options for fixing
		 * @param {boolean} options.tagSoupFix True to fix tag soup scenarios
		 * @param {boolean} options.selfCloseFix True to fix self-closing tags
		 * @param {Function} readTokenImpl The underlying readToken implementation
		 * @returns {Function}
		 */
		function fixedReadTokenFactory(parser, options, readTokenImpl) {
		  var stack = newStack();
	
		  var handlers = {
		    startTag: function startTag(tok) {
		      var tagName = tok.tagName;
	
		      if (tagName.toUpperCase() === 'TR' && stack.lastTagNameEq('TABLE')) {
		        parser.prepend('<TBODY>');
		        prepareNextToken();
		      } else if (options.selfCloseFix && CLOSESELF.test(tagName) && stack.containsTagName(tagName)) {
		        if (stack.lastTagNameEq(tagName)) {
		          closeLast(parser, stack);
		        } else {
		          parser.prepend('</' + tok.tagName + '>');
		          prepareNextToken();
		        }
		      } else if (!tok.unary) {
		        stack.push(tok);
		      }
		    },
		    endTag: function endTag(tok) {
		      var last = stack.last();
		      if (last) {
		        if (options.tagSoupFix && !stack.lastTagNameEq(tok.tagName)) {
		          // cleanup tag soup
		          closeLast(parser, stack);
		        } else {
		          stack.pop();
		        }
		      } else if (options.tagSoupFix) {
		        // cleanup tag soup part 2: skip this token
		        readTokenImpl();
		        prepareNextToken();
		      }
		    }
		  };
	
		  function prepareNextToken() {
		    var tok = peekToken(parser, readTokenImpl);
		    if (tok && handlers[tok.type]) {
		      handlers[tok.type](tok);
		    }
		  }
	
		  return function fixedReadToken() {
		    prepareNextToken();
		    return correct(readTokenImpl());
		  };
		}
	
	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.existy = existy;
	exports.isFunction = isFunction;
	exports.each = each;
	exports.eachKey = eachKey;
	exports.defaults = defaults;
	exports.toArray = toArray;
	exports.last = last;
	exports.isTag = isTag;
	exports.isScript = isScript;
	exports.isStyle = isStyle;
	/**
	 * Determine if the thing is not undefined and not null.
	 *
	 * @param {*} thing The thing to test
	 * @returns {boolean} True if the thing is not undefined and not null.
	 */
	function existy(thing) {
	  return thing !== void 0 && thing !== null;
	}
	
	/**
	 * Is this a function?
	 *
	 * @param {*} x The variable to test
	 * @returns {boolean} True if the variable is a function
	 */
	function isFunction(x) {
	  return 'function' === typeof x;
	}
	
	/**
	 * Loop over each item in an array-like value.
	 *
	 * @param {Array<*>} arr The array to loop over
	 * @param {Function} fn The function to call
	 * @param {?Object} target The object to bind to the function
	 */
	function each(arr, fn, target) {
	  var i = void 0;
	  var len = arr && arr.length || 0;
	  for (i = 0; i < len; i++) {
	    fn.call(target, arr[i], i);
	  }
	}
	
	/**
	 * Loop over each key/value pair in a hash.
	 *
	 * @param {Object} obj The object
	 * @param {Function} fn The function to call
	 * @param {?Object} target The object to bind to the function
	 */
	function eachKey(obj, fn, target) {
	  for (var key in obj) {
	    if (obj.hasOwnProperty(key)) {
	      fn.call(target, key, obj[key]);
	    }
	  }
	}
	
	/**
	 * Set default options where some option was not specified.
	 *
	 * @param {Object} options The destination
	 * @param {Object} _defaults The defaults
	 * @returns {Object}
	 */
	function defaults(options, _defaults) {
	  options = options || {};
	  eachKey(_defaults, function (key, val) {
	    if (!existy(options[key])) {
	      options[key] = val;
	    }
	  });
	  return options;
	}
	
	/**
	 * Convert value (e.g., a NodeList) to an array.
	 *
	 * @param {*} obj The object
	 * @returns {Array<*>}
	 */
	function toArray(obj) {
	  try {
	    return Array.prototype.slice.call(obj);
	  } catch (e) {
	    var _ret = function () {
	      var ret = [];
	      each(obj, function (val) {
	        ret.push(val);
	      });
	      return {
	        v: ret
	      };
	    }();
	
	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }
	}
	
	/**
	 * Get the last item in an array
	 *
	 * @param {Array<*>} array The array
	 * @returns {*} The last item in the array
	 */
	function last(array) {
	  return array[array.length - 1];
	}
	
	/**
	 * Test if token is a script tag.
	 *
	 * @param {Object} tok The token
	 * @param {String} tag The tag name
	 * @returns {boolean} True if the token is a script tag
	 */
	function isTag(tok, tag) {
	  return !tok || !(tok.type === 'startTag' || tok.type === 'atomicTag') || !('tagName' in tok) ? !1 : !!~tok.tagName.toLowerCase().indexOf(tag);
	}
	
	/**
	 * Test if token is a script tag.
	 *
	 * @param {Object} tok The token
	 * @returns {boolean} True if the token is a script tag
	 */
	function isScript(tok) {
	  return isTag(tok, 'script');
	}
	
	/**
	 * Test if token is a style tag.
	 *
	 * @param {Object} tok The token
	 * @returns {boolean} True if the token is a style tag
	 */
	function isStyle(tok) {
	  return isTag(tok, 'style');
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=postscribe.js.map

(function() {
  var DisposableIframe, addEvent, content_pointer, entitize, ns, removeEvent,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  addEvent = function(obj, evt, callback) {
    if (obj.addEventListener) {
      return obj.addEventListener(evt, callback);
    } else if (obj.attachEvent) {
      return obj.attachEvent("on" + evt, callback);
    }
  };

  removeEvent = function(obj, evt, callback) {
    if (obj.removeEventListener) {
      return obj.removeEventListener(evt, callback, false);
    } else if (obj.detachEvent) {
      return obj.detachEvent("on" + evt, callback);
    }
  };

  entitize = function(html) {
    var character, code, i, result, ret, _i, _ref;
    ret = [];
    for (i = _i = 0, _ref = html.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
      code = html.charCodeAt(i);
      character = html.charAt(i);
      result = code < 128 ? character : "&#" + code + ";";
      ret.push(result);
    }
    return ret.join('');
  };

  content_pointer = 0;

  ns = '_disposable_iframe';

  if (window[ns] == null) {
    window[ns] = {
      callbacks: {},
      contents: {}
    };
  }

  DisposableIframe = (function() {
    DisposableIframe.prototype.default_options = {
      content: null,
      raw_content: false,
      entitize: false,
      url: null,
      target: null,
      width: 0,
      height: 0,
      passback_name: 'rubicon_passback',
      destroy_on_callback: false,
      attributes: {},
      fullscreen: false,
      callback: function() {},
      onload: function() {}
    };

    function DisposableIframe(options, callback) {
      var attributes, key, val, _ref;
      if (options == null) {
        options = {};
      }
      this.callback = callback != null ? callback : function() {};
      this.onloadListener = __bind(this.onloadListener, this);
      this.options = {};
      _ref = this.default_options;
      for (key in _ref) {
        val = _ref[key];
        this.options[key] = val;
      }
      for (key in options) {
        val = options[key];
        this.options[key] = val;
      }
      this.pointer = content_pointer++;
      attributes = this.getAttributes({
        frameborder: 0,
        width: this.options.width,
        height: this.options.height,
        src: this.options.url,
        allowFullscreen: this.options.fullscreen
      }, this.options.attributes);
      this.iframe = this.createIframe(attributes, this.options.target);
      this.setContent(this.options.content, this.options.passback_name, this.options.raw_content);
    }

    DisposableIframe.prototype.getAttributes = function(mainAttributes, moreAttributes) {
      var attributes, key, val;
      if (mainAttributes == null) {
        mainAttributes = {};
      }
      if (moreAttributes == null) {
        moreAttributes = {};
      }
      attributes = {};
      for (key in moreAttributes) {
        val = moreAttributes[key];
        attributes[key] = val;
      }
      for (key in mainAttributes) {
        val = mainAttributes[key];
        attributes[key] = val;
      }
      if ((attributes.frameborder != null) && (attributes.frameBorder == null)) {
        attributes.frameBorder = attributes.frameborder;
      }
      if (attributes.allowFullscreen) {
        attributes.mozAllowFullScreen = attributes.allowFullscreen;
        attributes.webkitAllowFullScreen = attributes.allowFullscreen;
      }
      return attributes;
    };

    DisposableIframe.prototype.createIframe = function(attributes, target) {
      var iframe, key, val;
      if (attributes == null) {
        attributes = {};
      }
      if (target == null) {
        target = document.body;
      }
      iframe = document.createElement('iframe');
      for (key in attributes) {
        val = attributes[key];
        if ((val != null) && val !== false) {
          iframe.setAttribute(key, val);
        }
      }
      if (attributes.src != null) {
        addEvent(iframe, 'load', this.onloadListener);
        this.setListener();
      }
      target.appendChild(iframe);
      return iframe;
    };

    DisposableIframe.prototype.onloadListener = function() {
      this.options.onload();
      return this.activateCallback('load');
    };

    DisposableIframe.prototype.setContent = function(content, passback_name, raw_content) {
      var html;
      if (passback_name == null) {
        passback_name = this.options.passback_name;
      }
      if (raw_content == null) {
        raw_content = this.options.raw_content;
      }
      if (content != null) {
        if (this.options.entitize) {
          content = entitize(content);
        }
        if (!raw_content) {
          html = "<html> <head> <meta charset='utf-8'> <script> var " + passback_name + " = window.parent." + ns + ".callbacks[" + this.pointer + "] </script> </head> <body>" + content + "</body> </html>";
        } else {
          html = content;
        }
        window[ns].contents[this.pointer] = html;
        removeEvent(this.iframe, 'load', this.onloadListener);
        addEvent(this.iframe, 'load', this.onloadListener);
        this.iframe.contentWindow.location.href = "javascript:parent." + ns + ".contents[" + this.pointer + "]";
        return this.setListener();
      }
    };

    DisposableIframe.prototype.setListener = function() {
      return window[ns].callbacks[this.pointer] = (function(_this) {
        return function(data) {
          return _this.handleSignal(data);
        };
      })(this);
    };

    DisposableIframe.prototype.handleSignal = function(data) {
      this.callback(data);
      if (this.options.destroy_on_callback) {
        return setTimeout(((function(_this) {
          return function() {
            return _this.destroy();
          };
        })(this)), 0);
      }
    };

    DisposableIframe.prototype.destroy = function() {
      if (this.iframe != null) {
        this.iframe.parentNode.removeChild(this.iframe);
      }
      this.iframe = null;
      return this.activateCallback('destroy');
    };

    DisposableIframe.prototype.resize = function(width, height) {
      this.iframe.width = width;
      this.iframe.height = height;
      return this.activateCallback('resize');
    };

    DisposableIframe.prototype.callFunction = function(name, args) {
      if (typeof this.iframe.contentWindow[name] === 'function') {
        this.iframe.contentWindow[name].apply(null, args);
        return this.activateCallback(name, 'iframe');
      }
    };

    DisposableIframe.prototype.activateCallback = function(event_type, scope) {
      var data, error;
      if (scope == null) {
        scope = 'parent';
      }
      data = {
        type: event_type,
        scope: scope,
        pointer: this.pointer
      };
      try {
        return this.options.callback(data);
      } catch (_error) {
        error = _error;
        return _sashec.logger("DisposableIframe[" + this.pointer + "] callback error - " + error);
      }
    };

    return DisposableIframe;

  })();

  if (window.DisposableIframe == null) {
    window.DisposableIframe = DisposableIframe;
  }

}).call(this);

(function() {
  var AdobeTagManager, Banner, Declaration, DeclarationSingleton, Group, NS, Position, Postscribe, QueueHandler, Serializator, UniqueId, activateCallbacks, addCustomRender, addEvent, consentData, cookieName, customRenders, delayLoading, delayedLoad, dtmDecorator, featureDetection, filterPositions, findPositionByHbId, getConsentData, getCustomRenders, getGroupById, getGroupsByElementId, getPositionsByElementId, getProtocol, getRandomNumber, injectProtocol, insertScript, insertScriptCode, isEmptyAd, loadPositions, logger, merge, once, optimizeTargets, queueDecorator, race, readConsentData, replaceDiacritics, serializeDecorator, setConsentData, setDelayLoading, setHbDatabyHbId, shouldDelayLoading, supportsDefineProperty, timeout,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    __slice = [].slice,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  if (this._sashec == null) {
    this._sashec = {};
  }

  NS = this._sashec;

  NS.ad_call_domain = '//a.centrum.cz';

  NS.customer_short_name = 'cent';

  NS.ad_groups = {};

  addEvent = function(obj, evt, callback) {
    if (obj.addEventListener) {
      return obj.addEventListener(evt, callback);
    } else if (obj.attachEvent) {
      return obj.attachEvent("on" + evt, callback);
    }
  };

  merge = function(object, overrides) {
    var key, result, val;
    if (object == null) {
      object = {};
    }
    if (overrides == null) {
      overrides = {};
    }
    result = {};
    for (key in object) {
      val = object[key];
      result[key] = val;
    }
    for (key in overrides) {
      val = overrides[key];
      result[key] = val;
    }
    return result;
  };

  NS.merge = merge;

  getGroupById = function(group_id) {
    if (group_id == null) {
      group_id = 'default';
    }
    if (NS.ad_groups[group_id] != null) {
      return NS.ad_groups[group_id];
    } else {
      return new Group({}, group_id);
    }
  };

  NS.getGroupById = getGroupById;

  getGroupsByElementId = function(element_id) {
    var group, group_id, result, _ref;
    result = [];
    if (element_id != null) {
      _ref = NS.ad_groups;
      for (group_id in _ref) {
        group = _ref[group_id];
        if (group.positions[element_id] != null) {
          result.push(group);
        }
      }
    }
    return result;
  };

  NS.getGroupsByElementId = getGroupsByElementId;

  getPositionsByElementId = function(element_id) {
    var group, group_id, result, _ref;
    result = [];
    if (element_id != null) {
      _ref = NS.ad_groups;
      for (group_id in _ref) {
        group = _ref[group_id];
        if (group.positions[element_id] != null) {
          result.push(group.positions[element_id]);
        }
      }
    }
    return result;
  };

  NS.getPositionsByElementId = getPositionsByElementId;

  getRandomNumber = function(range) {
    if (range == null) {
      range = 100000000;
    }
    return Math.floor(Math.random() * range);
  };

  NS.getRandomNumber = getRandomNumber;

  UniqueId = (function() {
    UniqueId.prototype.default_options = {
      min: 1,
      increment: 1
    };

    function UniqueId(options) {
      if (options == null) {
        options = {};
      }
      this.options = merge(this.default_options, options);
      this.current = this.options.min - this.options.increment;
    }

    UniqueId.prototype.get = function() {
      this.current += this.options.increment;
      return this.current;
    };

    return UniqueId;

  })();

  NS.uniqueId = new UniqueId();

  insertScript = function(url, charset) {
    if (charset == null) {
      charset = 'utf-8';
    }
    return document.write("<script type='text/javascript' src='" + url + "' charset='" + charset + "'></script>");
  };

  NS.insertScript = insertScript;

  insertScriptCode = function(code) {
    if (code == null) {
      code = '';
    }
    if (code) {
      return document.write("<script type='text/javascript'>" + code + "</script>");
    }
  };

  NS.insertScriptCode = insertScriptCode;

  optimizeTargets = function(group_targets, position_targets, separator) {
    var optimized_targets, target, _i, _len;
    if (group_targets == null) {
      group_targets = '';
    }
    if (position_targets == null) {
      position_targets = '';
    }
    if (separator == null) {
      separator = '/';
    }
    group_targets = group_targets.split(separator);
    position_targets = position_targets.split(separator);
    optimized_targets = [];
    for (_i = 0, _len = position_targets.length; _i < _len; _i++) {
      target = position_targets[_i];
      if (__indexOf.call(group_targets, target) < 0) {
        optimized_targets.push(target);
      }
    }
    return optimized_targets.join(separator);
  };

  NS.optimizeTargets = optimizeTargets;

  getProtocol = function(default_protocol) {
    var error, protocol, reg;
    if (default_protocol == null) {
      default_protocol = 'https:';
    }
    reg = /http[s]?:/;
    protocol = document.location.protocol;
    if (!reg.test(protocol)) {
      try {
        protocol = parent.document.location.protocol;
      } catch (_error) {
        error = _error;
        NS.logger("getProtocol cannot detect parent protocol due " + error);
      }
    }
    if (!reg.test(protocol)) {
      protocol = default_protocol;
      NS.logger("getProtocol set to default " + protocol + " value");
    }
    return protocol;
  };

  NS.getProtocol = getProtocol;

  injectProtocol = function(uri) {
    var protocol;
    if (uri == null) {
      uri = '';
    }
    if (0 === uri.indexOf('//')) {
      protocol = NS.getProtocol();
      uri = "" + protocol + uri;
    }
    return uri;
  };

  NS.injectProtocol = injectProtocol;

  loadPositions = function(options) {
    var default_options, position, position_targets, valid_positions, _i, _len;
    if (options == null) {
      options = {};
    }
    default_options = {
      positions: [],
      target: '',
      ad_call_domain: _sashec.ad_call_domain,
      customer_short_name: _sashec.customer_short_name
    };
    options = merge(default_options, options);
    valid_positions = _sashec.filterPositions(options.positions, function(position) {
      if (position.loading) {
        return false;
      }
      return true;
    });
    if (valid_positions.length === 0) {
      return false;
    }
    for (_i = 0, _len = valid_positions.length; _i < _len; _i++) {
      position = valid_positions[_i];
      position_targets = optimizeTargets(options.target, position.serialize());
      position.handleLoad();
      NS.Postscribe.addSlot(position_targets, position.getElementId(), position.unique_id, position.options.element, function(evt) {
        return NS.activateCallbacks(evt.target.elementId, evt.type);
      });
    }
    NS.Postscribe.fetchAds({
      domain: options.ad_call_domain,
      customer: options.customer_short_name,
      viewid: options.viewid,
      target: options.target
    });
    return true;
  };

  NS.loadPositions = loadPositions;

  isEmptyAd = function(element) {
    var link, link_fragments, _i, _len, _ref;
    if ((element == null) || /^\s*$/.test(element.innerHTML)) {
      return true;
    } else {
      _ref = element.getElementsByTagName('a');
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        link = _ref[_i];
        link_fragments = link.href.split(/\/|\?/);
        if (__indexOf.call(link_fragments, 'FCID=-4') >= 0) {
          return true;
        }
      }
    }
    return false;
  };

  NS.isEmptyAd = isEmptyAd;

  logger = function(error) {
    return typeof console !== "undefined" && console !== null ? typeof console.log === "function" ? console.log("SASHEC: " + error) : void 0 : void 0;
  };

  NS.logger = logger;

  activateCallbacks = function(element_id, event_type) {
    var data, element, error, group, group_id, is_empty_ad, position, _ref;
    element = document.getElementById(element_id);
    if (!element) {
      NS.logger("activateCallbacks cannot find element '" + element_id + "' in DOM");
      return;
    }
    is_empty_ad = isEmptyAd(element);
    _ref = NS.ad_groups;
    for (group_id in _ref) {
      group = _ref[group_id];
      position = group.positions[element_id];
      if (position != null) {
        if (event_type === 'insert') {
          position.loading = false;
        }
        data = {
          type: event_type,
          position: position,
          group: group,
          is_empty: is_empty_ad
        };
        try {
          group.options.callback(data);
        } catch (_error) {
          error = _error;
          NS.logger("Group callback error for element '" + element_id + "' - " + error);
        }
        try {
          position.options.callback(data);
        } catch (_error) {
          error = _error;
          NS.logger("Position callback error for element '" + element_id + "' - " + error);
        }
      }
    }
  };

  NS.activateCallbacks = activateCallbacks;

  replaceDiacritics = function(content) {
    var map, re, replacement;
    map = {
      'A': /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g,
      'AA': /[\uA732]/g,
      'AE': /[\u00C6\u01FC\u01E2]/g,
      'AO': /[\uA734]/g,
      'AU': /[\uA736]/g,
      'AV': /[\uA738\uA73A]/g,
      'AY': /[\uA73C]/g,
      'B': /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g,
      'C': /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g,
      'D': /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g,
      'DZ': /[\u01F1\u01C4]/g,
      'Dz': /[\u01F2\u01C5]/g,
      'E': /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g,
      'F': /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g,
      'G': /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g,
      'H': /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g,
      'I': /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g,
      'J': /[\u004A\u24BF\uFF2A\u0134\u0248]/g,
      'K': /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g,
      'L': /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g,
      'LJ': /[\u01C7]/g,
      'Lj': /[\u01C8]/g,
      'M': /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g,
      'N': /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g,
      'NJ': /[\u01CA]/g,
      'Nj': /[\u01CB]/g,
      'O': /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g,
      'OI': /[\u01A2]/g,
      'OO': /[\uA74E]/g,
      'OU': /[\u0222]/g,
      'P': /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g,
      'Q': /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g,
      'R': /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g,
      'S': /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g,
      'T': /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g,
      'TZ': /[\uA728]/g,
      'U': /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g,
      'V': /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g,
      'VY': /[\uA760]/g,
      'W': /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g,
      'X': /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g,
      'Y': /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g,
      'Z': /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g,
      'a': /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g,
      'aa': /[\uA733]/g,
      'ae': /[\u00E6\u01FD\u01E3]/g,
      'ao': /[\uA735]/g,
      'au': /[\uA737]/g,
      'av': /[\uA739\uA73B]/g,
      'ay': /[\uA73D]/g,
      'b': /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g,
      'c': /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g,
      'd': /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g,
      'dz': /[\u01F3\u01C6]/g,
      'e': /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g,
      'f': /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g,
      'g': /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g,
      'h': /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g,
      'hv': /[\u0195]/g,
      'i': /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g,
      'j': /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g,
      'k': /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g,
      'l': /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g,
      'lj': /[\u01C9]/g,
      'm': /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g,
      'n': /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g,
      'nj': /[\u01CC]/g,
      'o': /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g,
      'oi': /[\u01A3]/g,
      'ou': /[\u0223]/g,
      'oo': /[\uA74F]/g,
      'p': /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g,
      'q': /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g,
      'r': /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g,
      's': /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g,
      't': /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g,
      'tz': /[\uA729]/g,
      'u': /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g,
      'v': /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g,
      'vy': /[\uA761]/g,
      'w': /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g,
      'x': /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g,
      'y': /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g,
      'z': /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
    };
    for (replacement in map) {
      re = map[replacement];
      content = content.replace(re, replacement);
    }
    return content;
  };

  NS.replaceDiacritics = replaceDiacritics;

  Declaration = (function() {
    function Declaration() {}

    Declaration.prototype.base_url = NS.getProtocol() + '//r.i0.cz/';

    Declaration.prototype.params_order = ['url', 's', 'v', 'm', 'e', 'j'];

    Declaration.prototype.getParams = function(mega_tag) {
      if (mega_tag == null) {
        mega_tag = '';
      }
      return {
        m: encodeURIComponent(mega_tag),
        s: 'admon',
        v: '1',
        j: getRandomNumber()
      };
    };

    Declaration.prototype.constructLink = function(params, item) {
      var joined_params, key, pairs, _i, _len, _ref;
      if (params == null) {
        params = {};
      }
      if (item == null) {
        item = '';
      }
      pairs = [];
      _ref = this.params_order;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        key = _ref[_i];
        if (params[key] != null) {
          pairs.push("" + key + "=" + params[key]);
        }
      }
      joined_params = pairs.join('&');
      return "" + this.base_url + item + "?" + joined_params;
    };

    Declaration.prototype.getLink = function(meta_tag, url) {
      var params;
      if (meta_tag == null) {
        meta_tag = '';
      }
      if (url == null) {
        url = '';
      }
      params = this.getParams(meta_tag);
      params.url = encodeURIComponent(url);
      params.e = 'click';
      return this.constructLink(params);
    };

    Declaration.prototype.getImageUrl = function(meta_tag) {
      var params;
      if (meta_tag == null) {
        meta_tag = '';
      }
      params = this.getParams(meta_tag);
      params.e = 'view';
      return this.constructLink(params, 'l.gif');
    };

    Declaration.prototype.hit = function(meta_tag) {
      var image, url;
      if (meta_tag == null) {
        meta_tag = '';
      }
      url = this.getImageUrl(meta_tag);
      image = new Image();
      image.src = url;
      return image;
    };

    return Declaration;

  })();

  DeclarationSingleton = new Declaration();

  NS.Declaration = DeclarationSingleton;

  NS.getDeclarationLink = function() {
    return DeclarationSingleton.getLink.apply(DeclarationSingleton, arguments);
  };

  NS.getDeclarationImageSrc = function() {
    return DeclarationSingleton.getImageUrl.apply(DeclarationSingleton, arguments);
  };

  NS.hitDeclarationImage = function() {
    return DeclarationSingleton.hit.apply(DeclarationSingleton, arguments);
  };

  filterPositions = function(positions, filter_callback) {
    var position, result, _i, _len;
    if (positions == null) {
      positions = [];
    }
    if (filter_callback == null) {
      filter_callback = function() {};
    }
    result = [];
    for (_i = 0, _len = positions.length; _i < _len; _i++) {
      position = positions[_i];
      if (filter_callback(position)) {
        result.push(position);
      }
    }
    return result;
  };

  NS.filterPositions = filterPositions;

  findPositionByHbId = function(hbId) {
    var group, groupId, position, positionId, _ref, _ref1;
    _ref = NS.ad_groups;
    for (groupId in _ref) {
      group = _ref[groupId];
      _ref1 = group.positions;
      for (positionId in _ref1) {
        position = _ref1[positionId];
        if (position.options.hbId === hbId) {
          return position;
        }
      }
    }
    return null;
  };

  NS.findPositionByHbId = findPositionByHbId;

  setHbDatabyHbId = function(hbId, hbData) {
    var position;
    position = findPositionByHbId(hbId);
    if (position) {
      position.setHeaderBidding(hbData);
    }
    return position;
  };

  NS.setHbDatabyHbId = setHbDatabyHbId;

  NS.iframes = {};

  customRenders = [];

  getCustomRenders = function() {
    return customRenders;
  };

  addCustomRender = function(render) {
    if (typeof render === 'function') {
      customRenders.push(render);
    }
    return customRenders;
  };

  NS.getCustomRenders = getCustomRenders;

  NS.addCustomRender = addCustomRender;

  once = function(callback) {
    var called;
    called = false;
    return function() {
      if (called) {
        return;
      }
      called = true;
      return callback.apply(null, arguments);
    };
  };

  race = function(delay, callback) {
    var run, timeout;
    callback = once(callback);
    run = function() {
      var timeout;
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      return callback.apply(null, arguments);
    };
    timeout = setTimeout(run, delay);
    return run;
  };

  featureDetection = function() {
    var e;
    try {
      Object.defineProperty({}, 'x', {});
      return true;
    } catch (_error) {
      e = _error;
      return false;
    }
  };

  supportsDefineProperty = Object.defineProperty || featureDetection();

  NS.__decorate = function(target, property, decorator) {
    var decoratedDescriptor, descriptor;
    descriptor = Object.getOwnPropertyDescriptor(target, property);
    decoratedDescriptor = decorator(descriptor);
    if (supportsDefineProperty) {
      return Object.defineProperty(target, property, decoratedDescriptor);
    } else {
      return target[property] = decoratedDescriptor.value;
    }
  };

  consentData = null;

  timeout = 250;

  cookieName = 'euconsent';

  delayLoading = false;

  delayedLoad = [];

  getConsentData = function() {
    if (consentData) {
      return {
        gdpr: true,
        consent: consentData
      };
    } else {
      return null;
    }
  };

  setConsentData = function(response) {
    var callback, _i, _len;
    if (response == null) {
      response = {};
    }
    setDelayLoading(false);
    consentData = response.consentData || null;
    if (delayedLoad.length > 0) {
      for (_i = 0, _len = delayedLoad.length; _i < _len; _i++) {
        callback = delayedLoad[_i];
        callback();
      }
      return delayedLoad = [];
    }
  };

  readConsentData = function(callback) {
    var cookie, regex;
    if (callback == null) {
      callback = setConsentData;
    }
    regex = '(^|;)\\s*' + cookieName + '\\s*=\\s*([^;]+)';
    try {
      cookie = document.cookie.match(regex);
    } catch (_error) {
      return callback();
    }
    if (cookie) {
      return callback({
        consentData: cookie.pop()
      });
    }
    if (typeof window.__cmp !== 'function') {
      return callback();
    }
    callback = race(timeout, callback);
    setDelayLoading(true);
    return window.__cmp('getConsentData', null, callback);
  };

  shouldDelayLoading = function() {
    return delayLoading;
  };

  setDelayLoading = function(value, clear) {
    if (clear == null) {
      clear = false;
    }
    delayLoading = value;
    if (clear) {
      return delayedLoad = [];
    }
  };

  serializeDecorator = function(descriptor) {
    var original;
    original = descriptor.value;
    descriptor.value = function() {
      var args, data;
      data = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (data == null) {
        data = this.options;
      }
      data = merge(data, {
        targets: merge(data.targets || {}, getConsentData())
      });
      args.unshift(data);
      return original.apply(this, args);
    };
    return descriptor;
  };

  dtmDecorator = function(descriptor) {
    var original;
    original = descriptor.value;
    descriptor.value = function() {
      var returnValue;
      returnValue = original.apply(this, arguments);
      NS.insertScriptCode("_sashec.euConsent.readConsentData();");
      return returnValue;
    };
    return descriptor;
  };

  queueDecorator = function(descriptor) {
    var original;
    original = descriptor.value;
    descriptor.value = function(data) {
      var isLoadEvent;
      isLoadEvent = data[0] === 'loadAll';
      if (isLoadEvent && shouldDelayLoading()) {
        return delayedLoad.push((function(_this) {
          return function() {
            return original.call(_this, data);
          };
        })(this));
      } else {
        return original.call(this, data);
      }
    };
    return descriptor;
  };

  NS.euConsent = {
    timeout: timeout,
    cookieName: cookieName,
    getConsentData: getConsentData,
    setConsentData: setConsentData,
    readConsentData: readConsentData,
    serializeDecorator: serializeDecorator,
    dtmDecorator: dtmDecorator,
    queueDecorator: queueDecorator,
    setDelayLoading: setDelayLoading
  };

  NS.scrollAnchor = function(w, findElementFunction, emptyAdvertSize) {
    var debugState, findElement, getElementHeight, getElementHeightWithMargins, getInitState, getScrollY, handleEvent, handlePreEvent, state, switchAdvert;
    if (w == null) {
      w = window;
    }
    if (emptyAdvertSize == null) {
      emptyAdvertSize = 0;
    }
    getInitState = function() {
      return {
        scrollY: 0,
        oldAdvert: 0,
        newAdvert: 0
      };
    };
    state = getInitState();
    findElement = function(element) {
      return element;
    };
    if (findElementFunction) {
      findElement = findElementFunction;
    }
    getElementHeightWithMargins = function(elm) {
      var elmHeight, elmMargin;
      elmMargin = void 0;
      elmHeight = elm.clientHeight;
      if (document.all) {
        elmMargin = parseInt(elm.currentStyle.marginTop, 10) + parseInt(elm.currentStyle.marginBottom, 10);
      } else {
        elmMargin = parseInt(w.getComputedStyle(elm).marginTop) + parseInt(document.defaultView.getComputedStyle(elm).marginBottom);
      }
      return elmHeight + elmMargin;
    };
    switchAdvert = function(state) {
      w.scrollTo(0, state.scrollY - state.oldAdvert + state.newAdvert);
    };
    getScrollY = function() {
      return w.scrollY || w.pageYOffset || 0;
    };
    getElementHeight = function(evt, element, defaultHeight) {
      var elm;
      elm = findElement(element);
      if (elm.clientHeight === 0) {
        return defaultHeight;
      } else {
        return getElementHeightWithMargins(elm);
      }
    };
    handlePreEvent = function(oldState, oldAdvertHeight, scrollY) {
      return {
        scrollY: scrollY,
        oldAdvert: oldAdvertHeight,
        newAdvert: 0
      };
    };
    handleEvent = function(oldState, newAdvertHeight) {
      return {
        scrollY: oldState.scrollY,
        oldAdvert: oldState.oldAdvert,
        newAdvert: newAdvertHeight
      };
    };
    debugState = function(state, name) {
      name && console.groupCollapsed(name);
      console.log('Absolute screen y ' + state.scrollY);
      console.log('Height of old advert ' + state.oldAdvert);
      console.log('Height of new advert ' + state.newAdvert);
      return name && console.groupEnd(name);
    };

    /**
     * Suppress jumping of window during reloading of advert.
     * 1. Read height of advert to remove
     * 2. After advert removed scroll up together with window
     * 3. After load of new advert scroll down together with window
     *
     * @param evt
     */
    return function(evt, debug) {
      var element, elementHeight;
      element = evt.position.options.element;
      debug && console.groupCollapsed('sashec.scrollAnchor');
      elementHeight = getElementHeight(evt, element, emptyAdvertSize);
      switch (evt.type) {
        case 'precleanup':
        case 'preinsert':
          state = handlePreEvent(state, elementHeight, getScrollY());
          break;
        case 'cleanup':
        case 'insert':
          state = handleEvent(state, elementHeight);
          if (evt.position.loadCount > 1) {
            switchAdvert(state);
          }
          break;
        default:
          break;
      }
      debug && debugState(state, 'sashec.scrollAnchor.' + evt.type);
      debug && console.groupEnd('sashec.scrollAnchor');
    };
  };

  Group = (function() {
    Group.prototype.default_options = {
      site: '',
      area: '',
      keyword: [],
      targets: {},
      positions: {},
      viewid: _sashec.getRandomNumber(),
      callback: function() {}
    };

    Group.prototype.default_targets = {
      passback: 0
    };

    function Group(options, id) {
      var element_id, position, _ref;
      if (options == null) {
        options = {};
      }
      if (id == null) {
        id = 'default';
      }
      this.options = merge(this.default_options, options);
      this.options.targets = merge(this.default_targets, this.options.targets);
      this.positions = {};
      _ref = this.options.positions;
      for (element_id in _ref) {
        position = _ref[element_id];
        this.add(element_id, position);
      }
      NS.ad_groups[id] = this;
    }

    Group.prototype.add = function(element_id, options) {
      var default_position_options, position, position_options;
      if (element_id == null) {
        element_id = '';
      }
      if (options == null) {
        options = {};
      }
      default_position_options = {
        element: document.getElementById(element_id),
        site: this.options.site,
        area: this.options.area,
        viewid: this.options.viewid
      };
      position_options = merge(default_position_options, options);
      if (options.targets == null) {
        position_options.targets = this.options.targets;
      }
      if (options.keyword == null) {
        position_options.keyword = this.options.keyword;
      }
      position = new Position(position_options);
      this.positions[element_id] = position;
      return position;
    };

    Group.prototype.load = function(element_id) {
      var position;
      if (element_id == null) {
        element_id = '';
      }
      position = this.positions[element_id];
      if (position != null) {
        return position.load();
      } else {
        return false;
      }
    };

    Group.prototype.loadAll = function(options) {
      var id, position, positions, valid_positions, _ref;
      if (options == null) {
        options = {};
      }
      if (options.refreshViewId) {
        this.options.viewid = _sashec.getRandomNumber();
        _ref = this.positions;
        for (id in _ref) {
          position = _ref[id];
          position.setViewId(this.options.viewid);
        }
      }
      positions = (function() {
        var _ref1, _results;
        _ref1 = this.positions;
        _results = [];
        for (id in _ref1) {
          position = _ref1[id];
          _results.push(position);
        }
        return _results;
      }).call(this);
      valid_positions = _sashec.filterPositions(positions, function(position) {
        var result;
        result = true;
        if (position.options.load_on === 'manual') {
          result = false;
        }
        if (position.options.ignore_reload_all && position.isLoaded()) {
          result = false;
        }
        return result;
      });
      if (valid_positions.length > 0) {
        options = {
          positions: valid_positions,
          target: this.serialize(this.options),
          viewid: this.options.viewid
        };
        return _sashec.loadPositions(options);
      } else {
        return false;
      }
    };

    Group.prototype.serialize = function(data) {
      var serializator;
      if (data == null) {
        data = this.options;
      }
      serializator = new Serializator(data);
      return serializator.serialize();
    };

    Group.prototype.getPositionsByAsync = function(accept_async, positions) {
      var id, items, position;
      if (accept_async == null) {
        accept_async = true;
      }
      if (positions == null) {
        positions = this.positions;
      }
      if (!accept_async) {
        return [];
      }
      return items = (function() {
        var _results;
        _results = [];
        for (id in positions) {
          position = positions[id];
          _results.push(position);
        }
        return _results;
      })();
    };

    return Group;

  })();

  NS.__decorate(Group.prototype, 'serialize', NS.euConsent.serializeDecorator);

  NS.AdGroup = Group;

  Position = (function() {
    Position.prototype.default_options = {
      element: null,
      site: '',
      area: '',
      size: 'default',
      rtp: {
        acct: '10900',
        site: null,
        zones: [],
        size: null
      },
      headerBidding: null,
      keyword: [],
      targets: {},
      ignore_reload_all: false,
      load_on: 'auto',
      viewid: null,
      random: _sashec.getRandomNumber(),
      callback: function() {}
    };

    Position.prototype.default_targets = {
      passback: 0
    };

    Position.prototype.allowed_sizes = ['default', 'commercial', 'fullbanner', 'halfpage', 'leader', 'mediumrectangle', 'megaboard', 'partnersec', 'partnerweb', 'prannotation', 'prpromo', 'recommend', 'sky', 'square250', 'square300', 'sq3', 'mpu', 'strip', 'wallpaper', 'widesky', '300x100', '120x150', 'rectangle', 'video-overlay', 'video-preroll', 'video-postroll', 'video-logo', 'special1', 'special2', 'special3', 'special4', '79a', '91a', '92a', '21a', '11a', '79b', '91b', '92b', '93b', 'is'];

    function Position(options) {
      var rtp_data, rtp_result;
      if (options == null) {
        options = {};
      }
      this.loaded = 0;
      this.loadCount = 0;
      this.loading = false;
      this.options = merge(this.default_options, options);
      this.options.size = this.sanitizeSize(this.options.size);
      this.options.targets = this.sanitizeTargets(this.options.targets, this.options.pos);
      if (_sashec.rtp_data_bridge != null) {
        rtp_data = this.sanitizeRtpData(this.options.rtp);
        rtp_result = _sashec.rtp_data_bridge.get(rtp_data);
        this.options.targets = merge(this.options.targets, rtp_result);
      }
      this.unique_id = _sashec.uniqueId.get();
    }

    Position.prototype.load = function() {
      var options;
      if (!this.loading) {
        options = {
          positions: [this],
          viewid: this.options.viewid
        };
        return _sashec.loadPositions(options);
      }
      return false;
    };

    Position.prototype.loadSync = function() {
      var id;
      this.handleLoad();
      _sashec.insertScript(this.getUrl());
      id = this.getElementId();
      return _sashec.insertScriptCode("setTimeout(function() { _sashec.activateCallbacks('" + id + "', 'insert'); }, 0);");
    };

    Position.prototype.serialize = function(data) {
      var serializator;
      if (data == null) {
        data = this.options;
      }
      if (data.size == null) {
        data.size = this.getElementId(data.element);
      }
      serializator = new Serializator(data);
      return serializator.serialize();
    };

    Position.prototype.getElementId = function(element) {
      if (element == null) {
        element = this.options.element;
      }
      return element != null ? element.getAttribute('id') : void 0;
    };

    Position.prototype.getUrl = function(server_type) {
      var url;
      if (server_type == null) {
        server_type = 'jserver';
      }
      return url = [_sashec.ad_call_domain, _sashec.customer_short_name, server_type, "random=" + this.options.random, "viewid=" + this.options.viewid, this.serialize()].join('/');
    };

    Position.prototype.sanitizeSize = function(sizes) {
      var result, size, _i, _len;
      if (sizes == null) {
        sizes = this.options.size;
      }
      if (sizes == null) {
        return null;
      }
      if (typeof sizes === 'string') {
        sizes = [sizes];
      }
      result = [];
      for (_i = 0, _len = sizes.length; _i < _len; _i++) {
        size = sizes[_i];
        if (__indexOf.call(this.allowed_sizes, size) < 0) {
          size = this.default_options.size;
        }
        if (__indexOf.call(result, size) < 0) {
          result.push(size);
        }
      }
      if (sizes.toString() !== result.toString()) {
        _sashec.logger("Invalid size in [" + (sizes.toString()) + "]. Change it to [" + (result.toString()) + "].");
      }
      return result;
    };

    Position.prototype.sanitizeTargets = function(targets, pos) {
      if (targets == null) {
        targets = this.options.targets;
      }
      if (pos == null) {
        pos = this.options.pos;
      }
      targets = merge(this.default_targets, targets);
      if (pos != null) {
        targets.pos = pos;
      }
      return targets;
    };

    Position.prototype.handleLoad = function() {
      this.loaded = (new Date()).getTime();
      this.loading = true;
      this.loadCount++;
      return this.options.headerBidding = null;
    };

    Position.prototype.isLoaded = function() {
      return this.loaded > 0;
    };

    Position.prototype.sanitizeRtpData = function(data) {
      var allowed_properties, is_item_ok, item, property, result, zone, _i, _j, _len, _len1, _ref;
      if (data == null) {
        data = this.options.rtp;
      }
      allowed_properties = ['acct', 'site', 'zone', 'size'];
      result = [];
      if ((data != null ? data.zones : void 0) != null) {
        _ref = data.zones;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          zone = _ref[_i];
          item = {};
          is_item_ok = true;
          for (_j = 0, _len1 = allowed_properties.length; _j < _len1; _j++) {
            property = allowed_properties[_j];
            item[property] = zone[property] || data[property];
            if (item[property] == null) {
              is_item_ok = false;
            }
          }
          if (is_item_ok) {
            result.push(item);
          }
        }
      }
      return result;
    };

    Position.prototype.sanitizeRtpResults = function(data) {
      var current_cpm, current_tier, key, result, val;
      if (data == null) {
        data = {};
      }
      result = {
        r_tier: 0,
        r_cpm: 0,
        r_eligible: false,
        r_deals: []
      };
      for (key in data) {
        val = data[key];
        if (val.estimate != null) {
          current_tier = parseInt(val.estimate.tier);
          if (current_tier > result.r_tier) {
            result.r_tier = current_tier;
          }
          current_cpm = parseFloat(val.estimate.cpm);
          if (current_cpm > result.r_cpm) {
            result.r_cpm = current_cpm;
          }
        }
        if (val.pmp != null) {
          if (val.pmp.eligible) {
            result.r_eligible = true;
          }
          result.r_deals = result.r_deals.concat(val.pmp.deals);
        }
      }
      return result;
    };

    Position.prototype.setViewId = function(viewid) {
      return this.options.viewid = viewid;
    };

    Position.prototype.setHeaderBidding = function(bidData) {
      var allowed_properties, key, value;
      allowed_properties = {
        bid: true,
        bidTier: true,
        bidderCode: true
      };
      this.options.headerBidding = {};
      for (key in bidData) {
        value = bidData[key];
        if (allowed_properties[key]) {
          this.options.headerBidding[key] = bidData[key];
        }
      }
    };

    return Position;

  })();

  NS.__decorate(Position.prototype, 'serialize', NS.euConsent.serializeDecorator);

  NS.Position = Position;

  Postscribe = (function() {
    Postscribe.prototype.server = 'bserver/ball';

    Postscribe.prototype.stripChars = ['/', ' '];

    Postscribe.prototype.queue = [];

    Postscribe.prototype.activeQueue = {};

    Postscribe.prototype.postscribeOptions = {
      releaseAsync: false
    };

    function Postscribe() {
      this.stripSlashSpace = __bind(this.stripSlashSpace, this);
    }

    Postscribe.prototype.stripSlashSpace = function(string) {
      var _ref, _ref1;
      if (string == null) {
        string = '';
      }
      while (_ref = string.charAt(0), __indexOf.call(this.stripChars, _ref) >= 0) {
        string = string.substr(1);
      }
      while (_ref1 = string.slice(-1), __indexOf.call(this.stripChars, _ref1) >= 0) {
        string = string.slice(0, -1);
      }
      return string;
    };

    Postscribe.prototype.configureRequest = function(options) {
      var conf, default_conf;
      if (options == null) {
        options = {};
      }
      default_conf = {
        domain: NS.ad_call_domain,
        customer: NS.customer_short_name,
        viewid: 0,
        target: '',
        callback: function() {}
      };
      conf = NS.merge(default_conf, options);
      conf.domain = NS.injectProtocol(conf.domain);
      if (!conf.viewid) {
        conf.viewid = NS.getRandomNumber();
      }
      return conf;
    };

    Postscribe.prototype.addSlot = function(posTarget, elementId, uniqId, element, callback) {
      if (callback == null) {
        callback = function() {};
      }
      return this.queue.push({
        globalVar: "b" + uniqId,
        target: posTarget,
        elementId: elementId,
        element: element,
        uniqId: uniqId,
        callback: callback,
        code: null
      });
    };

    Postscribe.prototype.activateQueue = function(id, conf) {
      return this.activeQueue[id] = {
        conf: NS.merge({}, this.configureRequest(conf)),
        data: this.queue.splice(0, this.queue.length)
      };
    };

    Postscribe.prototype.buildScriptSrc = function(queue) {
      var conf;
      conf = queue.conf;
      return [conf.domain, conf.customer, this.server, "random=" + (NS.getRandomNumber()), "viewid=" + conf.viewid, conf.target].filter(Boolean).concat(queue.data.map(function(item) {
        return [item.globalVar, item.target].join('/');
      })).map(this.stripSlashSpace).join('/');
    };

    Postscribe.prototype.removeScript = function(script) {
      if (script && script.parentNode) {
        return script.parentNode.removeChild(script);
      }
    };

    Postscribe.prototype.renderOne = function(position) {
      var callback, customRender, error, output, _i, _len, _ref;
      callback = function(type) {
        return position.callback({
          target: position,
          type: type
        });
      };
      position.code = window[position.globalVar] || '';
      callback('precleanup');
      position.element.innerHTML = '';
      callback('cleanup');
      callback('preinsert');
      _ref = NS.getCustomRenders();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        customRender = _ref[_i];
        try {
          output = customRender(position, callback);
          if (output) {
            return callback('insert');
          }
        } catch (_error) {
          error = _error;
          NS.logger("customRender - error " + position.elementId + " bacause: " + error.message + " with code\n----\n" + position.code);
        }
      }
      return postscribe(position.element, position.code, NS.merge({
        done: function() {
          return callback('insert');
        },
        error: function(error) {
          callback('error');
          return NS.logger("Postscribe - error rendering " + position.elementId + " because: " + error.msg + " with code\n----\n" + position.code);
        }
      }, this.postscribeOptions));
    };

    Postscribe.prototype.renderPositions = function(script) {
      var pos, _i, _len, _ref;
      _ref = this.activeQueue[script.id].data;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        pos = _ref[_i];
        this.renderOne(pos);
      }
      this.activeQueue[script.id].conf.callback();
      return setTimeout(((function(_this) {
        return function() {
          return _this.removeScript(script);
        };
      })(this)), 10);
    };

    Postscribe.prototype.fetchAds = function(options) {
      var id, script, timestamp;
      if (options == null) {
        options = {};
      }
      timestamp = (new Date()).getTime();
      id = "bserver-" + timestamp;
      script = document.createElement("script");
      script.type = "text/javascript";
      script.id = id;
      script.charset = "utf-8";
      if (script.readyState) {
        script.onreadystatechange = (function(_this) {
          return function() {
            if (script.readyState === "loaded" || script.readyState === "complete") {
              script.onreadystatechange = null;
              return _this.renderPositions(script);
            }
          };
        })(this);
      } else {
        script.onload = (function(_this) {
          return function() {
            return _this.renderPositions(script);
          };
        })(this);
      }
      script.src = this.buildScriptSrc(this.activateQueue(id, options));
      return document.head.appendChild(script);
    };

    return Postscribe;

  })();

  NS.Postscribe = new Postscribe();

  Serializator = (function() {
    Serializator.prototype.default_options = {
      block_separator: '/',
      pair_separator: '=',
      multi_separator: ','
    };

    Serializator.prototype.properties_dictionary = {
      'size': 'size',
      'site': 'site',
      'area': 'area',
      'keyword': 'keyword'
    };

    function Serializator(data, options) {
      this.data = data != null ? data : {};
      if (options == null) {
        options = {};
      }
      this.options = merge(this.default_options, options);
    }

    Serializator.prototype.sanitize = function(value) {
      var item, _i, _len, _results;
      if (value != null) {
        switch (typeof value) {
          case 'number':
            return value.toString();
          case 'boolean':
            if (value === true) {
              return '1';
            } else {
              return '0';
            }
            break;
          case 'string':
            return encodeURIComponent(value);
          default:
            _results = [];
            for (_i = 0, _len = value.length; _i < _len; _i++) {
              item = value[_i];
              _results.push(this.sanitize(item));
            }
            return _results;
        }
      } else {
        return null;
      }
    };

    Serializator.prototype.serializeBlocks = function(blocks, separator) {
      var block, filtered_blocks, _i, _len;
      if (separator == null) {
        separator = this.options.block_separator;
      }
      if (blocks != null) {
        filtered_blocks = [];
        for (_i = 0, _len = blocks.length; _i < _len; _i++) {
          block = blocks[_i];
          if (block) {
            filtered_blocks.push(block);
          }
        }
        return filtered_blocks.join(separator);
      } else {
        return null;
      }
    };

    Serializator.prototype.serializePair = function(key, val, separator) {
      if (key == null) {
        key = '';
      }
      if (val == null) {
        val = '';
      }
      if (separator == null) {
        separator = this.options.pair_separator;
      }
      if ((key != null) && (val != null)) {
        key = key.toString();
        val = val.toString();
        if (key !== '' && val !== '') {
          return "" + key + separator + val;
        }
      }
      return null;
    };

    Serializator.prototype.serializeMulti = function(items, separator) {
      if (items == null) {
        items = [];
      }
      if (separator == null) {
        separator = this.options.multi_separator;
      }
      if (items != null) {
        if (typeof items === 'string') {
          items = [items];
        }
        return items.join(separator);
      } else {
        return null;
      }
    };

    Serializator.prototype.serializeSize = function(size, pair_separator, multi_separator) {
      var size_list;
      if (size == null) {
        size = this.data.size;
      }
      if (pair_separator == null) {
        pair_separator = this.options.pair_separator;
      }
      if (multi_separator == null) {
        multi_separator = this.options.multi_separator;
      }
      if ((size != null) && size.length > 0) {
        size_list = this.serializeMulti(size, multi_separator);
        return this.serializePair(this.properties_dictionary.size, size_list, pair_separator);
      } else {
        return null;
      }
    };

    Serializator.prototype.serializeSite = function(site, separator) {
      if (site == null) {
        site = this.data.site;
      }
      if (separator == null) {
        separator = this.options.pair_separator;
      }
      if ((site != null) && site !== '') {
        return this.serializePair(this.properties_dictionary.site, site, separator);
      } else {
        return null;
      }
    };

    Serializator.prototype.serializeArea = function(area, separator) {
      if (area == null) {
        area = this.data.area;
      }
      if (separator == null) {
        separator = this.options.pair_separator;
      }
      if ((area != null) && area !== '') {
        return this.serializePair(this.properties_dictionary.area, area, separator);
      } else {
        return null;
      }
    };

    Serializator.prototype.serializeKeyword = function(keyword, pair_separator, multi_separator, limit) {
      var cut_position, keyword_list;
      if (keyword == null) {
        keyword = this.data.keyword;
      }
      if (pair_separator == null) {
        pair_separator = this.options.pair_separator;
      }
      if (multi_separator == null) {
        multi_separator = this.options.multi_separator;
      }
      if (limit == null) {
        limit = 255;
      }
      if ((keyword != null) && keyword.length > 0) {
        keyword = this.sanitizeKeyword(keyword);
        keyword_list = this.serializeMulti(keyword, multi_separator);
        if (keyword_list.length > limit) {
          cut_position = keyword_list.lastIndexOf(multi_separator, limit);
          keyword_list = keyword_list.substring(0, cut_position);
        }
        return this.serializePair(this.properties_dictionary.keyword, keyword_list, pair_separator);
      } else {
        return null;
      }
    };

    Serializator.prototype.serializeTarget = function(key, val, separator) {
      if (separator == null) {
        separator = this.options.pair_separator;
      }
      if ((key != null) && (val != null) && key !== '' && val !== '') {
        return this.serializePair(key, val, separator);
      } else {
        return null;
      }
    };

    Serializator.prototype.serializeTargets = function(targets, block_separator, pair_separator, multi_separator) {
      var key, target_pairs, val, values;
      if (targets == null) {
        targets = this.data.targets;
      }
      if (block_separator == null) {
        block_separator = this.options.block_separator;
      }
      if (pair_separator == null) {
        pair_separator = this.options.pair_separator;
      }
      if (multi_separator == null) {
        multi_separator = this.options.multi_separator;
      }
      if ((targets != null) && typeof targets === 'object') {
        targets = this.sanitizeTargets(targets);
        target_pairs = (function() {
          var _results;
          _results = [];
          for (key in targets) {
            val = targets[key];
            values = this.serializeMulti(val, multi_separator);
            _results.push(this.serializePair(key, values, pair_separator));
          }
          return _results;
        }).call(this);
        return this.serializeBlocks(target_pairs, block_separator);
      } else {
        return null;
      }
    };

    Serializator.prototype.serialize = function(data, separator) {
      var blocks, item;
      if (data == null) {
        data = this.data;
      }
      if (separator == null) {
        separator = this.options.block_separator;
      }
      if (typeof data.size === 'string') {
        data.size = [data.size];
      }
      blocks = [this.serializeSite(data.site), this.serializeArea(data.area), this.serializeSize(data.size), this.serializeKeyword(data.keyword), this.serializeTargets(data.targets), this.serializeTargets(data.headerBidding || {})];
      blocks = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = blocks.length; _i < _len; _i++) {
          item = blocks[_i];
          if (item != null) {
            _results.push(item);
          }
        }
        return _results;
      })();
      return this.serializeBlocks(blocks, separator);
    };

    Serializator.prototype.sanitizeKeyword = function(keyword) {
      var item, result;
      if (keyword == null) {
        keyword = this.data.keyword || [];
      }
      if ((keyword != null) && keyword.length > 0) {
        result = (function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = keyword.length; _i < _len; _i++) {
            item = keyword[_i];
            if (typeof item === 'string') {
              item = item.toLowerCase();
              item = _sashec.replaceDiacritics(item);
              item = item.replace(/[^a-z0-9]/g, '-');
              item = item.replace(/-+/g, '-');
              item = item.replace(/^-|-$/g, '');
              item = this.sanitize(item);
              if (item === '') {
                item = null;
              }
            } else {
              item = null;
            }
            _results.push(item);
          }
          return _results;
        }).call(this);
        result = (function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = result.length; _i < _len; _i++) {
            item = result[_i];
            if (item != null) {
              _results.push(item);
            }
          }
          return _results;
        })();
        return result;
      } else {
        return null;
      }
    };

    Serializator.prototype.sanitizeTargets = function(targets) {
      var key, result, val;
      if (targets == null) {
        targets = this.data.targets;
      }
      if ((targets != null) && targets !== '' && targets !== {}) {
        result = {};
        for (key in targets) {
          val = targets[key];
          result[this.sanitize(key)] = this.sanitize(val);
        }
        return result;
      } else {
        return null;
      }
    };

    return Serializator;

  })();

  NS.Serializator = Serializator;

  AdobeTagManager = (function() {
    AdobeTagManager.prototype.url = {
      regular: '//assets.adobedtm.com/4beaca54604aa1db7a7d9296a08d83bee398e7fd/' + 'satelliteLib-a003dc427fcbca9cbed6b1243422062657b2a85b.js',
      debug: '//assets.adobedtm.com/4beaca54604aa1db7a7d9296a08d83bee398e7fd/' + 'satelliteLib-a003dc427fcbca9cbed6b1243422062657b2a85b-staging.js'
    };

    AdobeTagManager.prototype.inserted = false;

    AdobeTagManager.prototype.initialized = false;

    function AdobeTagManager() {}

    AdobeTagManager.prototype.insert = function(debug) {
      var re, url;
      if (debug == null) {
        debug = false;
      }
      if (!this.inserted) {
        re = /(\?|\&)debug-dtm=(1|true)(\&|$)/;
        if (re.test(document.location.search)) {
          debug = true;
        }
        url = debug ? this.url.debug : this.url.regular;
        _sashec.insertScript(url);
        return this.inserted = true;
      }
    };

    AdobeTagManager.prototype.init = function() {
      var e;
      if (!this.initialized) {
        try {
          _satellite.pageBottom();
        } catch (_error) {
          e = _error;
        }
        return this.initialized = true;
      }
    };

    return AdobeTagManager;

  })();

  NS.__decorate(AdobeTagManager.prototype, 'insert', NS.euConsent.dtmDecorator);

  NS.AdobeTagManager = new AdobeTagManager();

  Banner = (function() {
    Banner.prototype.default_options = {
      id: '',
      element: null,
      cache_interval: 300,
      url: '',
      name: '',
      disposable_iframe: null,
      callback: function() {},
      load_on: 'auto',
      loaded: false,
      onload: function(data) {
        var options;
        if (data == null) {
          data = {};
        }
        if (this.disposable_iframe != null) {
          this.disposable_iframe.setContent(data['data']);
        } else {
          options = {
            onload: (function(_this) {
              return function() {
                return _this.disposable_iframe.callFunction('iframeInit', [_this.disposable_iframe]);
              };
            })(this),
            raw_content: true,
            content: data['data'],
            target: this.element,
            callback: (function(_this) {
              return function() {
                return _this.callback.apply(_this, arguments);
              };
            })(this),
            entitize: true
          };
          this.disposable_iframe = new DisposableIframe(options);
        }
      }
    };

    Banner.prototype.banners = {};

    function Banner() {
      this.initEcohec();
    }

    Banner.prototype.add = function(element_id, options) {
      if (element_id == null) {
        element_id = '';
      }
      if (options == null) {
        options = {};
      }
      options = merge(this.default_options, options);
      options.id = element_id;
      options.element = document.getElementById(element_id);
      this.banners[element_id] = options;
      if (options.load_on === 'auto') {
        this.load(element_id);
      }
      return options;
    };

    Banner.prototype.getBannerById = function(element_id) {
      return this.banners[element_id];
    };

    Banner.prototype.getBannersByName = function(name) {
      var banner, id, result, _ref;
      result = [];
      _ref = this.banners;
      for (id in _ref) {
        banner = _ref[id];
        if (banner['name'] === name) {
          result.push(banner);
        }
      }
      return result;
    };

    Banner.prototype.initEcohec = function() {
      var setData;
      setData = (function(_this) {
        return function(data) {
          var banner, _i, _len, _ref;
          if (data == null) {
            data = {};
          }
          if (data['type'] === 'iframe') {
            _ref = _this.getBannersByName(data['name']);
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              banner = _ref[_i];
              banner.onload(data);
            }
          }
        };
      })(this);
      window._ecohec = window._ecohec || {};
      return window._ecohec.setData = window._ecohec.setData || setData;
    };

    Banner.prototype.appendScript = function(url, charset) {
      var body, script;
      if (charset == null) {
        charset = 'utf-8';
      }
      if (url != null) {
        script = document.createElement('script');
        script.src = url;
        script.charset = charset;
        script.async = true;
        body = document.getElementsByTagName('body');
        if (body[0]) {
          return body[0].appendChild(script);
        }
      }
    };

    Banner.prototype.cacheBurstUrl = function(url, cache_interval) {
      var burst;
      if (typeof cache_interval !== 'number') {
        return url;
      }
      burst = parseInt((new Date).getTime() / (cache_interval * 1000));
      if (url.indexOf('?') !== -1) {
        url += "&_=" + burst;
      } else {
        url += "?_=" + burst;
      }
      return url;
    };

    Banner.prototype.load = function(element_id) {
      var banner;
      banner = this.getBannerById(element_id);
      if (banner && banner['url']) {
        this.appendScript(this.cacheBurstUrl(banner['url'], banner.cache_interval));
      }
    };

    return Banner;

  })();

  NS.Banner = new Banner();

  QueueHandler = (function() {
    function QueueHandler(queue) {
      if (queue == null) {
        queue = window._sashec_queue || [];
      }
      this.scheduledHbTiers = null;
      this.scheduledLoadAll = null;
      this.handleQueue(queue);
      window._sashec_queue = this;
    }

    QueueHandler.prototype.scheduleLoadAll = function(timeout, data) {
      var loadAll;
      if (data == null) {
        data = [];
      }
      loadAll = (function(_this) {
        return function(hbTiers) {
          var id, value;
          if (hbTiers == null) {
            hbTiers = _this.scheduledHbTiers;
          }
          _this.scheduledLoadAll = null;
          _this.scheduledHbTiers = null;
          for (id in hbTiers) {
            value = hbTiers[id];
            _sashec.setHbDatabyHbId(id, value);
          }
          return _this.handleItem(['loadAll'].concat(data));
        };
      })(this);
      if (this.scheduledHbTiers) {
        return loadAll(this.scheduledHbTiers);
      } else {
        return this.scheduledLoadAll = race(timeout, loadAll);
      }
    };

    QueueHandler.prototype.handleItem = function(data) {
      var callback, element_id, group, group_id, is_group_id, options, _ref, _results;
      if (data == null) {
        data = [];
      }
      switch (data[0]) {
        case 'position':
          element_id = data[1];
          options = data[2];
          group_id = data[3];
          group = getGroupById(group_id);
          options.viewid = group.options.viewid;
          return group.add(element_id, options);
        case 'group':
          options = data[1];
          group_id = data[2];
          return new Group(options, group_id);
        case 'loadAll':
          is_group_id = !data[1] || typeof data[1] === 'string';
          group_id = is_group_id ? data[1] : void 0;
          options = is_group_id ? data[2] : data[1];
          if (group_id != null) {
            group = getGroupById(group_id);
            return group.loadAll(options);
          } else {
            _ref = NS.ad_groups;
            _results = [];
            for (group_id in _ref) {
              group = _ref[group_id];
              _results.push(group.loadAll(options));
            }
            return _results;
          }
          break;
        case 'loadAllReady':
          return this.scheduleLoadAll(data[1], data.slice(2));
        case 'loadAllHb':
          if (this.scheduledLoadAll) {
            return this.scheduledLoadAll(data[1]);
          } else {
            return this.scheduledHbTiers = data[1] || [];
          }
          break;
        case 'adobetag':
          switch (data[1]) {
            case 'insert':
              return _sashec.AdobeTagManager.insert();
            case 'init':
              return _sashec.AdobeTagManager.init();
            case 'auto':
              _sashec.AdobeTagManager.insert();
              return addEvent(window, 'load', function() {
                return _sashec.AdobeTagManager.init();
              });
          }
          break;
        case 'customRender':
          return NS.addCustomRender(data[1]);
        case 'banner':
          element_id = data[1];
          options = data[2];
          return NS.Banner.add(element_id, options);
        case 'custom':
          callback = data[1];
          if (callback != null) {
            return callback();
          }
      }
    };

    QueueHandler.prototype.handleQueue = function(queue) {
      var item, _results;
      if (queue == null) {
        queue = [];
      }
      _results = [];
      while (item = queue.shift()) {
        _results.push(this.handleItem(item));
      }
      return _results;
    };

    QueueHandler.prototype.push = function(data) {
      if (data == null) {
        data = [];
      }
      return this.handleItem(data);
    };

    return QueueHandler;

  })();

  NS.__decorate(QueueHandler.prototype, 'handleItem', NS.euConsent.queueDecorator);

  NS.QueueHandler = QueueHandler;

  new QueueHandler();

}).call(this);