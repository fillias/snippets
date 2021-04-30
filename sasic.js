(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global._sasic = {}));
  }(this, (function (exports) { 'use strict';
  
    function _typeof(obj) {
      "@babel/helpers - typeof";
  
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function (obj) {
          return typeof obj;
        };
      } else {
        _typeof = function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }
  
      return _typeof(obj);
    }
  
    function __rest(s, e) {
      var t = {};
  
      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }
  
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }
  
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
  
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
  
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
  
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
  
    function _isPlaceholder(a) {
      return a != null && _typeof(a) === 'object' && a['@@functional/placeholder'] === true;
    }
  
    /**
     * Optimized internal one-arity curry function.
     *
     * @private
     * @category Function
     * @param {Function} fn The function to curry.
     * @return {Function} The curried function.
     */
  
    function _curry1(fn) {
      return function f1(a) {
        if (arguments.length === 0 || _isPlaceholder(a)) {
          return f1;
        } else {
          return fn.apply(this, arguments);
        }
      };
    }
  
    /**
     * Optimized internal two-arity curry function.
     *
     * @private
     * @category Function
     * @param {Function} fn The function to curry.
     * @return {Function} The curried function.
     */
  
    function _curry2(fn) {
      return function f2(a, b) {
        switch (arguments.length) {
          case 0:
            return f2;
  
          case 1:
            return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
              return fn(a, _b);
            });
  
          default:
            return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
              return fn(_a, b);
            }) : _isPlaceholder(b) ? _curry1(function (_b) {
              return fn(a, _b);
            }) : fn(a, b);
        }
      };
    }
  
    /**
     * Private `concat` function to merge two array-like objects.
     *
     * @private
     * @param {Array|Arguments} [set1=[]] An array-like object.
     * @param {Array|Arguments} [set2=[]] An array-like object.
     * @return {Array} A new, merged array.
     * @example
     *
     *      _concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
     */
    function _concat(set1, set2) {
      set1 = set1 || [];
      set2 = set2 || [];
      var idx;
      var len1 = set1.length;
      var len2 = set2.length;
      var result = [];
      idx = 0;
  
      while (idx < len1) {
        result[result.length] = set1[idx];
        idx += 1;
      }
  
      idx = 0;
  
      while (idx < len2) {
        result[result.length] = set2[idx];
        idx += 1;
      }
  
      return result;
    }
  
    function _arity(n, fn) {
      /* eslint-disable no-unused-vars */
      switch (n) {
        case 0:
          return function () {
            return fn.apply(this, arguments);
          };
  
        case 1:
          return function (a0) {
            return fn.apply(this, arguments);
          };
  
        case 2:
          return function (a0, a1) {
            return fn.apply(this, arguments);
          };
  
        case 3:
          return function (a0, a1, a2) {
            return fn.apply(this, arguments);
          };
  
        case 4:
          return function (a0, a1, a2, a3) {
            return fn.apply(this, arguments);
          };
  
        case 5:
          return function (a0, a1, a2, a3, a4) {
            return fn.apply(this, arguments);
          };
  
        case 6:
          return function (a0, a1, a2, a3, a4, a5) {
            return fn.apply(this, arguments);
          };
  
        case 7:
          return function (a0, a1, a2, a3, a4, a5, a6) {
            return fn.apply(this, arguments);
          };
  
        case 8:
          return function (a0, a1, a2, a3, a4, a5, a6, a7) {
            return fn.apply(this, arguments);
          };
  
        case 9:
          return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
            return fn.apply(this, arguments);
          };
  
        case 10:
          return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
            return fn.apply(this, arguments);
          };
  
        default:
          throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
      }
    }
  
    /**
     * Internal curryN function.
     *
     * @private
     * @category Function
     * @param {Number} length The arity of the curried function.
     * @param {Array} received An array of arguments received thus far.
     * @param {Function} fn The function to curry.
     * @return {Function} The curried function.
     */
  
    function _curryN(length, received, fn) {
      return function () {
        var combined = [];
        var argsIdx = 0;
        var left = length;
        var combinedIdx = 0;
  
        while (combinedIdx < received.length || argsIdx < arguments.length) {
          var result;
  
          if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
            result = received[combinedIdx];
          } else {
            result = arguments[argsIdx];
            argsIdx += 1;
          }
  
          combined[combinedIdx] = result;
  
          if (!_isPlaceholder(result)) {
            left -= 1;
          }
  
          combinedIdx += 1;
        }
  
        return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
      };
    }
  
    /**
     * Returns a curried equivalent of the provided function, with the specified
     * arity. The curried function has two unusual capabilities. First, its
     * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
     * following are equivalent:
     *
     *   - `g(1)(2)(3)`
     *   - `g(1)(2, 3)`
     *   - `g(1, 2)(3)`
     *   - `g(1, 2, 3)`
     *
     * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
     * "gaps", allowing partial application of any combination of arguments,
     * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
     * the following are equivalent:
     *
     *   - `g(1, 2, 3)`
     *   - `g(_, 2, 3)(1)`
     *   - `g(_, _, 3)(1)(2)`
     *   - `g(_, _, 3)(1, 2)`
     *   - `g(_, 2)(1)(3)`
     *   - `g(_, 2)(1, 3)`
     *   - `g(_, 2)(_, 3)(1)`
     *
     * @func
     * @memberOf R
     * @since v0.5.0
     * @category Function
     * @sig Number -> (* -> a) -> (* -> a)
     * @param {Number} length The arity for the returned function.
     * @param {Function} fn The function to curry.
     * @return {Function} A new, curried function.
     * @see R.curry
     * @example
     *
     *      const sumArgs = (...args) => R.sum(args);
     *
     *      const curriedAddFourNumbers = R.curryN(4, sumArgs);
     *      const f = curriedAddFourNumbers(1, 2);
     *      const g = f(3);
     *      g(4); //=> 10
     */
  
    var curryN = /*#__PURE__*/_curry2(function curryN(length, fn) {
      if (length === 1) {
        return _curry1(fn);
      }
  
      return _arity(length, _curryN(length, [], fn));
    });
  
    /**
     * Optimized internal three-arity curry function.
     *
     * @private
     * @category Function
     * @param {Function} fn The function to curry.
     * @return {Function} The curried function.
     */
  
    function _curry3(fn) {
      return function f3(a, b, c) {
        switch (arguments.length) {
          case 0:
            return f3;
  
          case 1:
            return _isPlaceholder(a) ? f3 : _curry2(function (_b, _c) {
              return fn(a, _b, _c);
            });
  
          case 2:
            return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function (_a, _c) {
              return fn(_a, b, _c);
            }) : _isPlaceholder(b) ? _curry2(function (_b, _c) {
              return fn(a, _b, _c);
            }) : _curry1(function (_c) {
              return fn(a, b, _c);
            });
  
          default:
            return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function (_a, _b) {
              return fn(_a, _b, c);
            }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function (_a, _c) {
              return fn(_a, b, _c);
            }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function (_b, _c) {
              return fn(a, _b, _c);
            }) : _isPlaceholder(a) ? _curry1(function (_a) {
              return fn(_a, b, c);
            }) : _isPlaceholder(b) ? _curry1(function (_b) {
              return fn(a, _b, c);
            }) : _isPlaceholder(c) ? _curry1(function (_c) {
              return fn(a, b, _c);
            }) : fn(a, b, c);
        }
      };
    }
  
    /**
     * Tests whether or not an object is an array.
     *
     * @private
     * @param {*} val The object to test.
     * @return {Boolean} `true` if `val` is an array, `false` otherwise.
     * @example
     *
     *      _isArray([]); //=> true
     *      _isArray(null); //=> false
     *      _isArray({}); //=> false
     */
    var _isArray = Array.isArray || function _isArray(val) {
      return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
    };
  
    function _isTransformer(obj) {
      return obj != null && typeof obj['@@transducer/step'] === 'function';
    }
  
    /**
     * Returns a function that dispatches with different strategies based on the
     * object in list position (last argument). If it is an array, executes [fn].
     * Otherwise, if it has a function with one of the given method names, it will
     * execute that function (functor case). Otherwise, if it is a transformer,
     * uses transducer [xf] to return a new transformer (transducer case).
     * Otherwise, it will default to executing [fn].
     *
     * @private
     * @param {Array} methodNames properties to check for a custom implementation
     * @param {Function} xf transducer to initialize if object is transformer
     * @param {Function} fn default ramda implementation
     * @return {Function} A function that dispatches on object in list position
     */
  
    function _dispatchable(methodNames, xf, fn) {
      return function () {
        if (arguments.length === 0) {
          return fn();
        }
  
        var args = Array.prototype.slice.call(arguments, 0);
        var obj = args.pop();
  
        if (!_isArray(obj)) {
          var idx = 0;
  
          while (idx < methodNames.length) {
            if (typeof obj[methodNames[idx]] === 'function') {
              return obj[methodNames[idx]].apply(obj, args);
            }
  
            idx += 1;
          }
  
          if (_isTransformer(obj)) {
            var transducer = xf.apply(null, args);
            return transducer(obj);
          }
        }
  
        return fn.apply(this, arguments);
      };
    }
  
    var _xfBase = {
      init: function init() {
        return this.xf['@@transducer/init']();
      },
      result: function result(_result) {
        return this.xf['@@transducer/result'](_result);
      }
    };
  
    function _map(fn, functor) {
      var idx = 0;
      var len = functor.length;
      var result = Array(len);
  
      while (idx < len) {
        result[idx] = fn(functor[idx]);
        idx += 1;
      }
  
      return result;
    }
  
    function _isString(x) {
      return Object.prototype.toString.call(x) === '[object String]';
    }
  
    /**
     * Tests whether or not an object is similar to an array.
     *
     * @private
     * @category Type
     * @category List
     * @sig * -> Boolean
     * @param {*} x The object to test.
     * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
     * @example
     *
     *      _isArrayLike([]); //=> true
     *      _isArrayLike(true); //=> false
     *      _isArrayLike({}); //=> false
     *      _isArrayLike({length: 10}); //=> false
     *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
     */
  
    var _isArrayLike = /*#__PURE__*/_curry1(function isArrayLike(x) {
      if (_isArray(x)) {
        return true;
      }
  
      if (!x) {
        return false;
      }
  
      if (_typeof(x) !== 'object') {
        return false;
      }
  
      if (_isString(x)) {
        return false;
      }
  
      if (x.nodeType === 1) {
        return !!x.length;
      }
  
      if (x.length === 0) {
        return true;
      }
  
      if (x.length > 0) {
        return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
      }
  
      return false;
    });
  
    var XWrap = /*#__PURE__*/function () {
      function XWrap(fn) {
        this.f = fn;
      }
  
      XWrap.prototype['@@transducer/init'] = function () {
        throw new Error('init not implemented on XWrap');
      };
  
      XWrap.prototype['@@transducer/result'] = function (acc) {
        return acc;
      };
  
      XWrap.prototype['@@transducer/step'] = function (acc, x) {
        return this.f(acc, x);
      };
  
      return XWrap;
    }();
  
    function _xwrap(fn) {
      return new XWrap(fn);
    }
  
    /**
     * Creates a function that is bound to a context.
     * Note: `R.bind` does not provide the additional argument-binding capabilities of
     * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
     *
     * @func
     * @memberOf R
     * @since v0.6.0
     * @category Function
     * @category Object
     * @sig (* -> *) -> {*} -> (* -> *)
     * @param {Function} fn The function to bind to context
     * @param {Object} thisObj The context to bind `fn` to
     * @return {Function} A function that will execute in the context of `thisObj`.
     * @see R.partial
     * @example
     *
     *      const log = R.bind(console.log, console);
     *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
     *      // logs {a: 2}
     * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
     */
  
    var bind = /*#__PURE__*/_curry2(function bind(fn, thisObj) {
      return _arity(fn.length, function () {
        return fn.apply(thisObj, arguments);
      });
    });
  
    function _arrayReduce(xf, acc, list) {
      var idx = 0;
      var len = list.length;
  
      while (idx < len) {
        acc = xf['@@transducer/step'](acc, list[idx]);
  
        if (acc && acc['@@transducer/reduced']) {
          acc = acc['@@transducer/value'];
          break;
        }
  
        idx += 1;
      }
  
      return xf['@@transducer/result'](acc);
    }
  
    function _iterableReduce(xf, acc, iter) {
      var step = iter.next();
  
      while (!step.done) {
        acc = xf['@@transducer/step'](acc, step.value);
  
        if (acc && acc['@@transducer/reduced']) {
          acc = acc['@@transducer/value'];
          break;
        }
  
        step = iter.next();
      }
  
      return xf['@@transducer/result'](acc);
    }
  
    function _methodReduce(xf, acc, obj, methodName) {
      return xf['@@transducer/result'](obj[methodName](bind(xf['@@transducer/step'], xf), acc));
    }
  
    var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';
    function _reduce(fn, acc, list) {
      if (typeof fn === 'function') {
        fn = _xwrap(fn);
      }
  
      if (_isArrayLike(list)) {
        return _arrayReduce(fn, acc, list);
      }
  
      if (typeof list['fantasy-land/reduce'] === 'function') {
        return _methodReduce(fn, acc, list, 'fantasy-land/reduce');
      }
  
      if (list[symIterator] != null) {
        return _iterableReduce(fn, acc, list[symIterator]());
      }
  
      if (typeof list.next === 'function') {
        return _iterableReduce(fn, acc, list);
      }
  
      if (typeof list.reduce === 'function') {
        return _methodReduce(fn, acc, list, 'reduce');
      }
  
      throw new TypeError('reduce: list must be array or iterable');
    }
  
    var XMap = /*#__PURE__*/function () {
      function XMap(f, xf) {
        this.xf = xf;
        this.f = f;
      }
  
      XMap.prototype['@@transducer/init'] = _xfBase.init;
      XMap.prototype['@@transducer/result'] = _xfBase.result;
  
      XMap.prototype['@@transducer/step'] = function (result, input) {
        return this.xf['@@transducer/step'](result, this.f(input));
      };
  
      return XMap;
    }();
  
    var _xmap = /*#__PURE__*/_curry2(function _xmap(f, xf) {
      return new XMap(f, xf);
    });
  
    function _has(prop, obj) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }
  
    var toString = Object.prototype.toString;
  
    var _isArguments = /*#__PURE__*/function () {
      return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
        return toString.call(x) === '[object Arguments]';
      } : function _isArguments(x) {
        return _has('callee', x);
      };
    }();
  
    var hasEnumBug = ! /*#__PURE__*/{
      toString: null
    }.propertyIsEnumerable('toString');
    var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString']; // Safari bug
  
    var hasArgsEnumBug = /*#__PURE__*/function () {
  
      return arguments.propertyIsEnumerable('length');
    }();
  
    var contains = function contains(list, item) {
      var idx = 0;
  
      while (idx < list.length) {
        if (list[idx] === item) {
          return true;
        }
  
        idx += 1;
      }
  
      return false;
    };
    /**
     * Returns a list containing the names of all the enumerable own properties of
     * the supplied object.
     * Note that the order of the output array is not guaranteed to be consistent
     * across different JS platforms.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category Object
     * @sig {k: v} -> [k]
     * @param {Object} obj The object to extract properties from
     * @return {Array} An array of the object's own properties.
     * @see R.keysIn, R.values
     * @example
     *
     *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
     */
  
  
    var keys = typeof Object.keys === 'function' && !hasArgsEnumBug ? /*#__PURE__*/_curry1(function keys(obj) {
      return Object(obj) !== obj ? [] : Object.keys(obj);
    }) : /*#__PURE__*/_curry1(function keys(obj) {
      if (Object(obj) !== obj) {
        return [];
      }
  
      var prop, nIdx;
      var ks = [];
  
      var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
  
      for (prop in obj) {
        if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
          ks[ks.length] = prop;
        }
      }
  
      if (hasEnumBug) {
        nIdx = nonEnumerableProps.length - 1;
  
        while (nIdx >= 0) {
          prop = nonEnumerableProps[nIdx];
  
          if (_has(prop, obj) && !contains(ks, prop)) {
            ks[ks.length] = prop;
          }
  
          nIdx -= 1;
        }
      }
  
      return ks;
    });
  
    /**
     * Takes a function and
     * a [functor](https://github.com/fantasyland/fantasy-land#functor),
     * applies the function to each of the functor's values, and returns
     * a functor of the same shape.
     *
     * Ramda provides suitable `map` implementations for `Array` and `Object`,
     * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
     *
     * Dispatches to the `map` method of the second argument, if present.
     *
     * Acts as a transducer if a transformer is given in list position.
     *
     * Also treats functions as functors and will compose them together.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category List
     * @sig Functor f => (a -> b) -> f a -> f b
     * @param {Function} fn The function to be called on every element of the input `list`.
     * @param {Array} list The list to be iterated over.
     * @return {Array} The new list.
     * @see R.transduce, R.addIndex
     * @example
     *
     *      const double = x => x * 2;
     *
     *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
     *
     *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
     * @symb R.map(f, [a, b]) = [f(a), f(b)]
     * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
     * @symb R.map(f, functor_o) = functor_o.map(f)
     */
  
    var map = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['fantasy-land/map', 'map'], _xmap, function map(fn, functor) {
      switch (Object.prototype.toString.call(functor)) {
        case '[object Function]':
          return curryN(functor.length, function () {
            return fn.call(this, functor.apply(this, arguments));
          });
  
        case '[object Object]':
          return _reduce(function (acc, key) {
            acc[key] = fn(functor[key]);
            return acc;
          }, {}, keys(functor));
  
        default:
          return _map(fn, functor);
      }
    }));
  
    /**
     * Determine if the passed argument is an integer.
     *
     * @private
     * @param {*} n
     * @category Type
     * @return {Boolean}
     */
    var _isInteger = Number.isInteger || function _isInteger(n) {
      return n << 0 === n;
    };
  
    /**
     * Returns the nth element of the given list or string. If n is negative the
     * element at index length + n is returned.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category List
     * @sig Number -> [a] -> a | Undefined
     * @sig Number -> String -> String
     * @param {Number} offset
     * @param {*} list
     * @return {*}
     * @example
     *
     *      const list = ['foo', 'bar', 'baz', 'quux'];
     *      R.nth(1, list); //=> 'bar'
     *      R.nth(-1, list); //=> 'quux'
     *      R.nth(-99, list); //=> undefined
     *
     *      R.nth(2, 'abc'); //=> 'c'
     *      R.nth(3, 'abc'); //=> ''
     * @symb R.nth(-1, [a, b, c]) = c
     * @symb R.nth(0, [a, b, c]) = a
     * @symb R.nth(1, [a, b, c]) = b
     */
  
    var nth = /*#__PURE__*/_curry2(function nth(offset, list) {
      var idx = offset < 0 ? list.length + offset : offset;
      return _isString(list) ? list.charAt(idx) : list[idx];
    });
  
    /**
     * Retrieves the values at given paths of an object.
     *
     * @func
     * @memberOf R
     * @since v0.27.1
     * @category Object
     * @typedefn Idx = [String | Int]
     * @sig [Idx] -> {a} -> [a | Undefined]
     * @param {Array} pathsArray The array of paths to be fetched.
     * @param {Object} obj The object to retrieve the nested properties from.
     * @return {Array} A list consisting of values at paths specified by "pathsArray".
     * @see R.path
     * @example
     *
     *      R.paths([['a', 'b'], ['p', 0, 'q']], {a: {b: 2}, p: [{q: 3}]}); //=> [2, 3]
     *      R.paths([['a', 'b'], ['p', 'r']], {a: {b: 2}, p: [{q: 3}]}); //=> [2, undefined]
     */
  
    var paths = /*#__PURE__*/_curry2(function paths(pathsArray, obj) {
      return pathsArray.map(function (paths) {
        var val = obj;
        var idx = 0;
        var p;
  
        while (idx < paths.length) {
          if (val == null) {
            return;
          }
  
          p = paths[idx];
          val = _isInteger(p) ? nth(p, val) : val[p];
          idx += 1;
        }
  
        return val;
      });
    });
  
    /**
     * Retrieve the value at a given path.
     *
     * @func
     * @memberOf R
     * @since v0.2.0
     * @category Object
     * @typedefn Idx = String | Int
     * @sig [Idx] -> {a} -> a | Undefined
     * @param {Array} path The path to use.
     * @param {Object} obj The object to retrieve the nested property from.
     * @return {*} The data at `path`.
     * @see R.prop, R.nth
     * @example
     *
     *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
     *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
     *      R.path(['a', 'b', 0], {a: {b: [1, 2, 3]}}); //=> 1
     *      R.path(['a', 'b', -2], {a: {b: [1, 2, 3]}}); //=> 2
     */
  
    var path = /*#__PURE__*/_curry2(function path(pathAr, obj) {
      return paths([pathAr], obj)[0];
    });
  
    /**
     * Returns a single item by iterating through the list, successively calling
     * the iterator function and passing it an accumulator value and the current
     * value from the array, and then passing the result to the next call.
     *
     * The iterator function receives two values: *(acc, value)*. It may use
     * [`R.reduced`](#reduced) to shortcut the iteration.
     *
     * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
     * is *(value, acc)*.
     *
     * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
     * arrays), unlike the native `Array.prototype.reduce` method. For more details
     * on this behavior, see:
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
     *
     * Dispatches to the `reduce` method of the third argument, if present. When
     * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
     * shortcuting, as this is not implemented by `reduce`.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category List
     * @sig ((a, b) -> a) -> a -> [b] -> a
     * @param {Function} fn The iterator function. Receives two values, the accumulator and the
     *        current element from the array.
     * @param {*} acc The accumulator value.
     * @param {Array} list The list to iterate over.
     * @return {*} The final, accumulated value.
     * @see R.reduced, R.addIndex, R.reduceRight
     * @example
     *
     *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
     *      //          -               -10
     *      //         / \              / \
     *      //        -   4           -6   4
     *      //       / \              / \
     *      //      -   3   ==>     -3   3
     *      //     / \              / \
     *      //    -   2           -1   2
     *      //   / \              / \
     *      //  0   1            0   1
     *
     * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
     */
  
    var reduce = /*#__PURE__*/_curry3(_reduce);
  
    /**
     * Returns a new list containing the contents of the given list, followed by
     * the given element.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category List
     * @sig a -> [a] -> [a]
     * @param {*} el The element to add to the end of the new list.
     * @param {Array} list The list of elements to add a new item to.
     *        list.
     * @return {Array} A new list containing the elements of the old list followed by `el`.
     * @see R.prepend
     * @example
     *
     *      R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
     *      R.append('tests', []); //=> ['tests']
     *      R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
     */
  
    var append = /*#__PURE__*/_curry2(function append(el, list) {
      return _concat(list, [el]);
    });
  
    /**
     * Makes a shallow clone of an object, setting or overriding the specified
     * property with the given value. Note that this copies and flattens prototype
     * properties onto the new object as well. All non-primitive properties are
     * copied by reference.
     *
     * @func
     * @memberOf R
     * @since v0.8.0
     * @category Object
     * @sig String -> a -> {k: v} -> {k: v}
     * @param {String} prop The property name to set
     * @param {*} val The new value
     * @param {Object} obj The object to clone
     * @return {Object} A new object equivalent to the original except for the changed property.
     * @see R.dissoc, R.pick
     * @example
     *
     *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
     */
  
    var assoc = /*#__PURE__*/_curry3(function assoc(prop, val, obj) {
      var result = {};
  
      for (var p in obj) {
        result[p] = obj[p];
      }
  
      result[prop] = val;
      return result;
    });
  
    /**
     * Checks if the input value is `null` or `undefined`.
     *
     * @func
     * @memberOf R
     * @since v0.9.0
     * @category Type
     * @sig * -> Boolean
     * @param {*} x The value to test.
     * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
     * @example
     *
     *      R.isNil(null); //=> true
     *      R.isNil(undefined); //=> true
     *      R.isNil(0); //=> false
     *      R.isNil([]); //=> false
     */
  
    var isNil = /*#__PURE__*/_curry1(function isNil(x) {
      return x == null;
    });
  
    /**
     * Makes a shallow clone of an object, setting or overriding the nodes required
     * to create the given path, and placing the specific value at the tail end of
     * that path. Note that this copies and flattens prototype properties onto the
     * new object as well. All non-primitive properties are copied by reference.
     *
     * @func
     * @memberOf R
     * @since v0.8.0
     * @category Object
     * @typedefn Idx = String | Int
     * @sig [Idx] -> a -> {a} -> {a}
     * @param {Array} path the path to set
     * @param {*} val The new value
     * @param {Object} obj The object to clone
     * @return {Object} A new object equivalent to the original except along the specified path.
     * @see R.dissocPath
     * @example
     *
     *      R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
     *
     *      // Any missing or non-object keys in path will be overridden
     *      R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}
     */
  
    var assocPath = /*#__PURE__*/_curry3(function assocPath(path, val, obj) {
      if (path.length === 0) {
        return val;
      }
  
      var idx = path[0];
  
      if (path.length > 1) {
        var nextObj = !isNil(obj) && _has(idx, obj) ? obj[idx] : _isInteger(path[1]) ? [] : {};
        val = assocPath(Array.prototype.slice.call(path, 1), val, nextObj);
      }
  
      if (_isInteger(idx) && _isArray(obj)) {
        var arr = [].concat(obj);
        arr[idx] = val;
        return arr;
      } else {
        return assoc(idx, val, obj);
      }
    });
  
    /**
     * Returns a curried equivalent of the provided function. The curried function
     * has two unusual capabilities. First, its arguments needn't be provided one
     * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
     * following are equivalent:
     *
     *   - `g(1)(2)(3)`
     *   - `g(1)(2, 3)`
     *   - `g(1, 2)(3)`
     *   - `g(1, 2, 3)`
     *
     * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
     * "gaps", allowing partial application of any combination of arguments,
     * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
     * the following are equivalent:
     *
     *   - `g(1, 2, 3)`
     *   - `g(_, 2, 3)(1)`
     *   - `g(_, _, 3)(1)(2)`
     *   - `g(_, _, 3)(1, 2)`
     *   - `g(_, 2)(1)(3)`
     *   - `g(_, 2)(1, 3)`
     *   - `g(_, 2)(_, 3)(1)`
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category Function
     * @sig (* -> a) -> (* -> a)
     * @param {Function} fn The function to curry.
     * @return {Function} A new, curried function.
     * @see R.curryN, R.partial
     * @example
     *
     *      const addFourNumbers = (a, b, c, d) => a + b + c + d;
     *
     *      const curriedAddFourNumbers = R.curry(addFourNumbers);
     *      const f = curriedAddFourNumbers(1, 2);
     *      const g = f(3);
     *      g(4); //=> 10
     */
  
    var curry = /*#__PURE__*/_curry1(function curry(fn) {
      return curryN(fn.length, fn);
    });
  
    function _cloneRegExp(pattern) {
      return new RegExp(pattern.source, (pattern.global ? 'g' : '') + (pattern.ignoreCase ? 'i' : '') + (pattern.multiline ? 'm' : '') + (pattern.sticky ? 'y' : '') + (pattern.unicode ? 'u' : ''));
    }
  
    /**
     * Gives a single-word string description of the (native) type of a value,
     * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
     * attempt to distinguish user Object types any further, reporting them all as
     * 'Object'.
     *
     * @func
     * @memberOf R
     * @since v0.8.0
     * @category Type
     * @sig (* -> {*}) -> String
     * @param {*} val The value to test
     * @return {String}
     * @example
     *
     *      R.type({}); //=> "Object"
     *      R.type(1); //=> "Number"
     *      R.type(false); //=> "Boolean"
     *      R.type('s'); //=> "String"
     *      R.type(null); //=> "Null"
     *      R.type([]); //=> "Array"
     *      R.type(/[A-z]/); //=> "RegExp"
     *      R.type(() => {}); //=> "Function"
     *      R.type(undefined); //=> "Undefined"
     */
  
    var type = /*#__PURE__*/_curry1(function type(val) {
      return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
    });
  
    /**
     * Copies an object.
     *
     * @private
     * @param {*} value The value to be copied
     * @param {Array} refFrom Array containing the source references
     * @param {Array} refTo Array containing the copied source references
     * @param {Boolean} deep Whether or not to perform deep cloning.
     * @return {*} The copied value.
     */
  
    function _clone(value, refFrom, refTo, deep) {
      var copy = function copy(copiedValue) {
        var len = refFrom.length;
        var idx = 0;
  
        while (idx < len) {
          if (value === refFrom[idx]) {
            return refTo[idx];
          }
  
          idx += 1;
        }
  
        refFrom[idx + 1] = value;
        refTo[idx + 1] = copiedValue;
  
        for (var key in value) {
          copiedValue[key] = deep ? _clone(value[key], refFrom, refTo, true) : value[key];
        }
  
        return copiedValue;
      };
  
      switch (type(value)) {
        case 'Object':
          return copy({});
  
        case 'Array':
          return copy([]);
  
        case 'Date':
          return new Date(value.valueOf());
  
        case 'RegExp':
          return _cloneRegExp(value);
  
        default:
          return value;
      }
    }
  
    /**
     * Creates a deep copy of the value which may contain (nested) `Array`s and
     * `Object`s, `Number`s, `String`s, `Boolean`s and `Date`s. `Function`s are
     * assigned by reference rather than copied
     *
     * Dispatches to a `clone` method if present.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category Object
     * @sig {*} -> {*}
     * @param {*} value The object or array to clone
     * @return {*} A deeply cloned copy of `val`
     * @example
     *
     *      const objects = [{}, {}, {}];
     *      const objectsClone = R.clone(objects);
     *      objects === objectsClone; //=> false
     *      objects[0] === objectsClone[0]; //=> false
     */
  
    var clone = /*#__PURE__*/_curry1(function clone(value) {
      return value != null && typeof value.clone === 'function' ? value.clone() : _clone(value, [], [], true);
    });
  
    function _pipe(f, g) {
      return function () {
        return g.call(this, f.apply(this, arguments));
      };
    }
  
    /**
     * This checks whether a function has a [methodname] function. If it isn't an
     * array it will execute that function otherwise it will default to the ramda
     * implementation.
     *
     * @private
     * @param {Function} fn ramda implemtation
     * @param {String} methodname property to check for a custom implementation
     * @return {Object} Whatever the return value of the method is.
     */
  
    function _checkForMethod(methodname, fn) {
      return function () {
        var length = arguments.length;
  
        if (length === 0) {
          return fn();
        }
  
        var obj = arguments[length - 1];
        return _isArray(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
      };
    }
  
    /**
     * Returns the elements of the given list or string (or object with a `slice`
     * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
     *
     * Dispatches to the `slice` method of the third argument, if present.
     *
     * @func
     * @memberOf R
     * @since v0.1.4
     * @category List
     * @sig Number -> Number -> [a] -> [a]
     * @sig Number -> Number -> String -> String
     * @param {Number} fromIndex The start index (inclusive).
     * @param {Number} toIndex The end index (exclusive).
     * @param {*} list
     * @return {*}
     * @example
     *
     *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
     *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
     *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
     *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
     *      R.slice(0, 3, 'ramda');                     //=> 'ram'
     */
  
    var slice = /*#__PURE__*/_curry3( /*#__PURE__*/_checkForMethod('slice', function slice(fromIndex, toIndex, list) {
      return Array.prototype.slice.call(list, fromIndex, toIndex);
    }));
  
    /**
     * Returns all but the first element of the given list or string (or object
     * with a `tail` method).
     *
     * Dispatches to the `slice` method of the first argument, if present.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category List
     * @sig [a] -> [a]
     * @sig String -> String
     * @param {*} list
     * @return {*}
     * @see R.head, R.init, R.last
     * @example
     *
     *      R.tail([1, 2, 3]);  //=> [2, 3]
     *      R.tail([1, 2]);     //=> [2]
     *      R.tail([1]);        //=> []
     *      R.tail([]);         //=> []
     *
     *      R.tail('abc');  //=> 'bc'
     *      R.tail('ab');   //=> 'b'
     *      R.tail('a');    //=> ''
     *      R.tail('');     //=> ''
     */
  
    var tail = /*#__PURE__*/_curry1( /*#__PURE__*/_checkForMethod('tail', /*#__PURE__*/slice(1, Infinity)));
  
    /**
     * Performs left-to-right function composition. The first argument may have
     * any arity; the remaining arguments must be unary.
     *
     * In some libraries this function is named `sequence`.
     *
     * **Note:** The result of pipe is not automatically curried.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category Function
     * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
     * @param {...Function} functions
     * @return {Function}
     * @see R.compose
     * @example
     *
     *      const f = R.pipe(Math.pow, R.negate, R.inc);
     *
     *      f(3, 4); // -(3^4) + 1
     * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
     */
  
    function pipe() {
      if (arguments.length === 0) {
        throw new Error('pipe requires at least one argument');
      }
  
      return _arity(arguments[0].length, reduce(_pipe, arguments[0], tail(arguments)));
    }
  
    function _complement(f) {
      return function () {
        return !f.apply(this, arguments);
      };
    }
  
    function _filter(fn, list) {
      var idx = 0;
      var len = list.length;
      var result = [];
  
      while (idx < len) {
        if (fn(list[idx])) {
          result[result.length] = list[idx];
        }
  
        idx += 1;
      }
  
      return result;
    }
  
    function _isObject(x) {
      return Object.prototype.toString.call(x) === '[object Object]';
    }
  
    var XFilter = /*#__PURE__*/function () {
      function XFilter(f, xf) {
        this.xf = xf;
        this.f = f;
      }
  
      XFilter.prototype['@@transducer/init'] = _xfBase.init;
      XFilter.prototype['@@transducer/result'] = _xfBase.result;
  
      XFilter.prototype['@@transducer/step'] = function (result, input) {
        return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
      };
  
      return XFilter;
    }();
  
    var _xfilter = /*#__PURE__*/_curry2(function _xfilter(f, xf) {
      return new XFilter(f, xf);
    });
  
    /**
     * Takes a predicate and a `Filterable`, and returns a new filterable of the
     * same type containing the members of the given filterable which satisfy the
     * given predicate. Filterable objects include plain objects or any object
     * that has a filter method such as `Array`.
     *
     * Dispatches to the `filter` method of the second argument, if present.
     *
     * Acts as a transducer if a transformer is given in list position.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category List
     * @sig Filterable f => (a -> Boolean) -> f a -> f a
     * @param {Function} pred
     * @param {Array} filterable
     * @return {Array} Filterable
     * @see R.reject, R.transduce, R.addIndex
     * @example
     *
     *      const isEven = n => n % 2 === 0;
     *
     *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
     *
     *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
     */
  
    var filter = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['filter'], _xfilter, function (pred, filterable) {
      return _isObject(filterable) ? _reduce(function (acc, key) {
        if (pred(filterable[key])) {
          acc[key] = filterable[key];
        }
  
        return acc;
      }, {}, keys(filterable)) : // else
      _filter(pred, filterable);
    }));
  
    /**
     * The complement of [`filter`](#filter).
     *
     * Acts as a transducer if a transformer is given in list position. Filterable
     * objects include plain objects or any object that has a filter method such
     * as `Array`.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category List
     * @sig Filterable f => (a -> Boolean) -> f a -> f a
     * @param {Function} pred
     * @param {Array} filterable
     * @return {Array}
     * @see R.filter, R.transduce, R.addIndex
     * @example
     *
     *      const isOdd = (n) => n % 2 === 1;
     *
     *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
     *
     *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
     */
  
    var reject = /*#__PURE__*/_curry2(function reject(pred, filterable) {
      return filter(_complement(pred), filterable);
    });
  
    /**
     * Iterate over an input `object`, calling a provided function `fn` for each
     * key and value in the object.
     *
     * `fn` receives three argument: *(value, key, obj)*.
     *
     * @func
     * @memberOf R
     * @since v0.23.0
     * @category Object
     * @sig ((a, String, StrMap a) -> Any) -> StrMap a -> StrMap a
     * @param {Function} fn The function to invoke. Receives three argument, `value`, `key`, `obj`.
     * @param {Object} obj The object to iterate over.
     * @return {Object} The original object.
     * @example
     *
     *      const printKeyConcatValue = (value, key) => console.log(key + ':' + value);
     *      R.forEachObjIndexed(printKeyConcatValue, {x: 1, y: 2}); //=> {x: 1, y: 2}
     *      // logs x:1
     *      // logs y:2
     * @symb R.forEachObjIndexed(f, {x: a, y: b}) = {x: a, y: b}
     */
  
    var forEachObjIndexed = /*#__PURE__*/_curry2(function forEachObjIndexed(fn, obj) {
      var keyList = keys(obj);
      var idx = 0;
  
      while (idx < keyList.length) {
        var key = keyList[idx];
        fn(obj[key], key, obj);
        idx += 1;
      }
  
      return obj;
    });
  
    function _objectAssign(target) {
      if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }
  
      var output = Object(target);
      var idx = 1;
      var length = arguments.length;
  
      while (idx < length) {
        var source = arguments[idx];
  
        if (source != null) {
          for (var nextKey in source) {
            if (_has(nextKey, source)) {
              output[nextKey] = source[nextKey];
            }
          }
        }
  
        idx += 1;
      }
  
      return output;
    }
  
    var _objectAssign$1 = typeof Object.assign === 'function' ? Object.assign : _objectAssign;
  
    /**
     * Creates a new object with the own properties of the two provided objects. If
     * a key exists in both objects, the provided function is applied to the key
     * and the values associated with the key in each object, with the result being
     * used as the value associated with the key in the returned object.
     *
     * @func
     * @memberOf R
     * @since v0.19.0
     * @category Object
     * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
     * @param {Function} fn
     * @param {Object} l
     * @param {Object} r
     * @return {Object}
     * @see R.mergeDeepWithKey, R.merge, R.mergeWith
     * @example
     *
     *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
     *      R.mergeWithKey(concatValues,
     *                     { a: true, thing: 'foo', values: [10, 20] },
     *                     { b: true, thing: 'bar', values: [15, 35] });
     *      //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
     * @symb R.mergeWithKey(f, { x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: f('y', 2, 5), z: 3 }
     */
  
    var mergeWithKey = /*#__PURE__*/_curry3(function mergeWithKey(fn, l, r) {
      var result = {};
      var k;
  
      for (k in l) {
        if (_has(k, l)) {
          result[k] = _has(k, r) ? fn(k, l[k], r[k]) : l[k];
        }
      }
  
      for (k in r) {
        if (_has(k, r) && !_has(k, result)) {
          result[k] = r[k];
        }
      }
  
      return result;
    });
  
    /**
     * Creates a new object with the own properties of the two provided objects.
     * If a key exists in both objects:
     * - and both associated values are also objects then the values will be
     *   recursively merged.
     * - otherwise the provided function is applied to the key and associated values
     *   using the resulting value as the new value associated with the key.
     * If a key only exists in one object, the value will be associated with the key
     * of the resulting object.
     *
     * @func
     * @memberOf R
     * @since v0.24.0
     * @category Object
     * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
     * @param {Function} fn
     * @param {Object} lObj
     * @param {Object} rObj
     * @return {Object}
     * @see R.mergeWithKey, R.mergeDeepWith
     * @example
     *
     *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
     *      R.mergeDeepWithKey(concatValues,
     *                         { a: true, c: { thing: 'foo', values: [10, 20] }},
     *                         { b: true, c: { thing: 'bar', values: [15, 35] }});
     *      //=> { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}
     */
  
    var mergeDeepWithKey = /*#__PURE__*/_curry3(function mergeDeepWithKey(fn, lObj, rObj) {
      return mergeWithKey(function (k, lVal, rVal) {
        if (_isObject(lVal) && _isObject(rVal)) {
          return mergeDeepWithKey(fn, lVal, rVal);
        } else {
          return fn(k, lVal, rVal);
        }
      }, lObj, rObj);
    });
  
    /**
     * Creates a new object with the own properties of the first object merged with
     * the own properties of the second object. If a key exists in both objects:
     * - and both values are objects, the two values will be recursively merged
     * - otherwise the value from the second object will be used.
     *
     * @func
     * @memberOf R
     * @since v0.24.0
     * @category Object
     * @sig {a} -> {a} -> {a}
     * @param {Object} lObj
     * @param {Object} rObj
     * @return {Object}
     * @see R.merge, R.mergeDeepLeft, R.mergeDeepWith, R.mergeDeepWithKey
     * @example
     *
     *      R.mergeDeepRight({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
     *                       { age: 40, contact: { email: 'baa@example.com' }});
     *      //=> { name: 'fred', age: 40, contact: { email: 'baa@example.com' }}
     */
  
    var mergeDeepRight = /*#__PURE__*/_curry2(function mergeDeepRight(lObj, rObj) {
      return mergeDeepWithKey(function (k, lVal, rVal) {
        return rVal;
      }, lObj, rObj);
    });
  
    /**
     * Create a new object with the own properties of the first object merged with
     * the own properties of the second object. If a key exists in both objects,
     * the value from the second object will be used.
     *
     * @func
     * @memberOf R
     * @since v0.26.0
     * @category Object
     * @sig {k: v} -> {k: v} -> {k: v}
     * @param {Object} l
     * @param {Object} r
     * @return {Object}
     * @see R.mergeLeft, R.mergeDeepRight, R.mergeWith, R.mergeWithKey
     * @example
     *
     *      R.mergeRight({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
     *      //=> { 'name': 'fred', 'age': 40 }
     *
     *      const withDefaults = R.mergeRight({x: 0, y: 0});
     *      withDefaults({y: 2}); //=> {x: 0, y: 2}
     * @symb R.mergeRight(a, b) = {...a, ...b}
     */
  
    var mergeRight = /*#__PURE__*/_curry2(function mergeRight(l, r) {
      return _objectAssign$1({}, l, r);
    });
  
    exports.Action = void 0;
    (function (Action) {
        /**
         * @payload {@link PayloadConfig}
         */
        Action["config"] = "config";
        /**
         * **SASHEC Legacy**
         */
        Action["adobetag"] = "adobetag";
        /**
         * @payload {@link PayloadGroup}
         *
         * Register a group of ads with the same targeting. If name is not provided,
         * "default" groupId is used.
         */
        Action["group"] = "group";
        /**
         * @payload {@link PayloadTarget}
         *
         * Shared advertisement-relevant page information
         */
        Action["page"] = "page";
        /**
         * @payload {@link PayloadPosition}
         *
         * Register an ad position. If  group name is not provided, the position is
         * assigned to "default" group.
         */
        Action["position"] = "position";
        /**
         * @payload {@link PayloadLoadAll}
         *
         * Fetch and render all creatives of a group or of all groups if no group name
         * is provided.
         */
        Action["loadAll"] = "loadAll";
        /**
         * **SASHEC Legacy**
         */
        Action["loadAllReady"] = "loadAllReady";
        /**
         * **SASHEC Legacy**
         */
        Action["loadAllHb"] = "loadAllHb";
        Action["loadGroup"] = "loadGroup";
        /**
         * @payload {@link PayloadCustomRender}
         *
         * Register a customRender function, which is called before regular render.
         *
         * More customRender functions can be added this way, they are all executed in
         * series. If any of the customRender functions returns true, no other
         * customRenders nor regular renders are executed.
         */
        Action["customRender"] = "customRender";
        Action["banner"] = "banner";
        Action["custom"] = "custom";
        /**
         * @payload {@link PayloadDeferAfter}
         *
         * Pause (defer) execution of all actions until a certain action is dispatched or it timeouts.
         *
         * The expected action or action returned by onTimeout function is executed before all other
         * actions that arrived after the defer was activated.
         */
        Action["deferAfter"] = "deferAfter";
        /**
         * @payload {@link PayloadRenderGroup}
         */
        Action["renderGroup"] = "renderGroup";
        /**
         *
         * @payload {@link _PayloadRenderFinished}
         *
         * Internal action dispatched when rendering of single position is finished
         * ("done" postscribe callback)
         */
        Action["_renderFinished"] = "renderFinished";
    })(exports.Action || (exports.Action = {}));
  
    const ConsoleStyle = 'font-weight: bold; color: #047DC2';
    const SasicPrefix = 'SASIC';
    const customConsoleLog = (...text) => {
        {
            console.log(`%c${SasicPrefix}:`, ConsoleStyle, ...text);
        }
        return text;
    };
    const customConsoleWarn = (...text) => {
        console.warn(`%c${SasicPrefix}:`, ConsoleStyle, ...text);
        return text;
    };
    const customConsoleErr = (...text) => {
        console.error(`%c${SasicPrefix}:`, ConsoleStyle, ...text);
        return text;
    };
    const splitByFn = (evalFunction, targetArray) => targetArray.reduce((resultArray, item) => resultArray[evalFunction(item) ? 0 : 1].push(item), [[], []]);
    curry(splitByFn);
    const getGroup = (group, state) => path(['groups', group], state);
    /**
     * Return position from state, including its group options and targeting.
     */
    const getPositionFull = (groupId, elementId, state) => {
        const _a = getGroup(groupId, state), { positions, targets: groupTargets } = _a, GroupData = __rest(_a, ["positions", "targets"]);
        const position = positions[elementId];
        if (position) {
            const _b = position.options, { targets: positionTargets } = _b, positionOptions = __rest(_b, ["targets"]), positionData = __rest(position, ["options"]);
            return Object.assign(Object.assign(Object.assign({ elementId }, GroupData), positionData), { options: Object.assign(Object.assign({}, positionOptions), { targets: mergeRight(groupTargets, positionTargets) }) });
        }
        customConsoleWarn('Unable to find position', elementId, 'in group', groupId);
    };
    const stringifyValue = (value) => {
        if (value === null) {
            return 'null';
        }
        else if (value === undefined) {
            return 'undefined';
        }
        else if (typeof value === 'object') {
            return JSON.stringify(value);
        }
        return value.toString();
    };
    /**
     * Transform object to string
     * @param delimiter
     * @param assignmentOperator
     * @param targetObj - object determined to stringify
     */
    const flatStringify = (delimiter, assignmentOperator, targetObj) => {
        return Object.entries(targetObj).reduce((resultString, [key, value], index) => index === 0
            ? key.concat(assignmentOperator, stringifyValue(value))
            : resultString.concat(delimiter, key.concat(assignmentOperator, stringifyValue(value))), '');
    };
    const getRandomNumber = (range = 100000000) => {
        return Math.floor(Math.random() * range);
    };
    const getElement = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            return element;
        }
        customConsoleWarn(`Unable to find element for id "${elementId}"`);
    };
    const filterReloadPositions = (_a) => {
        var { positions } = _a, groupOptions = __rest(_a, ["positions"]);
        return (Object.assign(Object.assign({}, groupOptions), { positions: reject((position) => position.loadCount > 0 && position.options.ignoreReloadAll, positions) }));
    };
  
    const logToQueue = (event, data) => {
        try {
            if (typeof window._als_queue === 'undefined') {
                window._als_queue = [];
            }
            window._als_queue.push({
                event: `SASIC_${event}`,
                data: Object.assign({ time: Math.floor(performance.now()) }, data),
            });
        }
        catch (error) {
            customConsoleWarn('Unable to log ALS event', data, error);
        }
    };
    const loggableActions = {
        [exports.Action.position]: (action, payload) => {
            logToQueue(action, payload);
        },
        [exports.Action.loadGroup]: (action, { groupId }, state) => {
            const group = getGroup(groupId, state);
            if (group) {
                Object.entries(group.positions).forEach(([elementId]) => {
                    logToQueue(action, getPositionFull(groupId, elementId, state));
                });
            }
        },
        [exports.Action._renderFinished]: (action, { elementId, groupId }, state) => {
            logToQueue(action, getPositionFull(groupId, elementId, state));
        },
    };
    const logAdEvent = (action, payload, state) => {
        const logFn = loggableActions[action];
        logFn && logFn(action, payload, state);
    };
  
    exports.RenderStatus = void 0;
    (function (RenderStatus) {
        RenderStatus["requested"] = "requested";
        RenderStatus["sas_error"] = "sas_error";
        RenderStatus["success"] = "success";
        RenderStatus["postscribe_error"] = "postscribe_error";
        RenderStatus["empty"] = "empty";
        RenderStatus["timeout"] = "timeout";
    })(exports.RenderStatus || (exports.RenderStatus = {}));
    exports.RenderCallbackType = void 0;
    (function (RenderCallbackType) {
        /**
         * Called before previous content of target element is removed
         */
        RenderCallbackType["precleanup"] = "precleanup";
        /**
         * Called after previous content of target element is removed
         */
        RenderCallbackType["cleanup"] = "cleanup";
        /**
         * Called before running custom renders
         */
        RenderCallbackType["preinsert"] = "preinsert";
        /**
         * Called after successful custom render or in postscribe done callback
         */
        RenderCallbackType["insert"] = "insert";
    })(exports.RenderCallbackType || (exports.RenderCallbackType = {}));
  
    let store = {
        groups: {},
        customRenders: [],
        page: {
            viewId: getRandomNumber(),
        },
    };
    const defaultPositionOptions = { targets: {} };
    const appReducer = (state, action, payload) => {
        switch (action) {
            case exports.Action.config: {
                return mergeDeepRight(state, {
                    config: payload,
                });
            }
            case exports.Action.page: {
                return mergeDeepRight(state, {
                    page: payload,
                });
            }
            case exports.Action.group: {
                const { options, groupId } = payload;
                return mergeDeepRight(state, {
                    groups: { [groupId || 'default']: options },
                });
            }
            case exports.Action.position: {
                const { elementId, options, groupId } = payload;
                const mergedOptions = mergeRight(defaultPositionOptions, options);
                return mergeDeepRight(state, {
                    groups: {
                        [groupId || 'default']: {
                            positions: {
                                [elementId]: {
                                    options: mergedOptions,
                                    loadCount: 0,
                                },
                            },
                        },
                    },
                });
            }
            case exports.Action.loadGroup: {
                const { groupId = 'default' } = payload;
                const updatedPositions = map(assoc('renderStatus', exports.RenderStatus.requested), state.groups[groupId].positions);
                return mergeDeepRight(state, {
                    groups: {
                        [groupId]: {
                            positions: updatedPositions,
                        },
                    },
                });
            }
            case exports.Action.renderGroup: {
                const { groupId = 'default', elementsWithCode, } = payload;
                const groupPositions = clone(getGroup(groupId, state).positions);
                elementsWithCode.forEach(({ elementId, code }) => {
                    groupPositions[elementId].code = code;
                });
                return mergeDeepRight(state, {
                    groups: { [groupId]: { positions: groupPositions } },
                });
            }
            case exports.Action._renderFinished: {
                const { groupId = 'default', elementId, renderStatus, } = payload;
                const position = path(['groups', groupId, 'positions', elementId], state);
                const loadCount = position.loadCount + 1;
                return assocPath(['groups', groupId, 'positions', elementId], Object.assign(position, { loadCount, renderStatus }), state);
            }
            case exports.Action.customRender: {
                const customRender = payload;
                return Object.assign({}, state, {
                    customRenders: append(customRender, state.customRenders),
                });
            }
            default:
                customConsoleWarn('Action', action, 'did nothing.\nPayload:', payload);
                return state;
        }
    };
    const getState = () => {
        return store;
    };
    const updateState = (action, payload) => {
        const newState = appReducer(store, action, payload);
        customConsoleLog('CURRENT STATE', newState);
        store = newState;
        logAdEvent(action, payload, newState);
        return newState;
    };
    const get = (propertyPath) => path(propertyPath, getState());
  
    const logAction = (data) => {
        customConsoleLog('\nACTION', data[0], '\nPAYLOAD', data[1]);
        return data;
    };
  
    /**
     * Time in which the postscribe render should finish and call "done" callback.
     * The timeout does not stop the render, so it can finish later but Sasic
     * considers such Ad as timeout.
     * The value is estimated combination of 30s SAS timeout plus 15s as maximum for execution
     */
    const renderTimeout = 45000;
    const server = '/bserverj/ball';
  
    const collapseOptionTargets = (positionOptions) => {
        const { targets } = positionOptions;
        return Object.assign({
            size: positionOptions.size.toString(),
        }, targets, positionOptions.pos && { pos: positionOptions.pos });
    };
    const createUrl = (page, group, sasUrl) => {
        const { viewId, area, keyword, site, positions, targets } = Object.assign(Object.assign({}, page), group);
        const optionsQuery = flatStringify('/', '=', Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (viewId && { viewid: viewId })), (site && { site: site })), (area && { area: area })), ((keyword === null || keyword === void 0 ? void 0 : keyword.length) && { keyword: keyword.toString() })), targets));
        const positionsOptionsQuery = Object.values(positions)
            .map((position, index) => {
            const positionOptionsString = flatStringify('/', '=', collapseOptionTargets(position.options));
            return ['b' + (index + 1) + '/' + positionOptionsString];
        })
            .join('/');
        return (`${sasUrl}${server}/random=${getRandomNumber()}/${optionsQuery}/${positionsOptionsQuery}`);
    };
    const fetchAds = (page, group, sasUrl, modifyAdCallFns = []) => {
        const { positions } = group;
        let url = createUrl(page, group, sasUrl);
        modifyAdCallFns.forEach(modifyAdCallFn => {
            url = modifyAdCallFn(url);
        });
        return fetch(url)
            .then((response) => response.json())
            .then((result) => Object.keys(positions).map((elementId, index) => ({
            elementId,
            code: result[index],
        })));
    };
  
    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
  
    function getDefaultExportFromCjs (x) {
        return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }
  
    function createCommonjsModule(fn) {
      var module = { exports: {} };
        return fn(module, module.exports), module.exports;
    }
  
    var postscribe = createCommonjsModule(function (module, exports) {
      (function webpackUniversalModuleDefinition(root, factory) {
        module.exports = factory();
      })(commonjsGlobal, function () {
        return (
          /******/
          function (modules) {
            // webpackBootstrap
  
            /******/
            // The module cache
  
            /******/
            var installedModules = {};
            /******/
  
            /******/
            // The require function
  
            /******/
  
            function __webpack_require__(moduleId) {
              /******/
  
              /******/
              // Check if module is in cache
  
              /******/
              if (installedModules[moduleId])
                /******/
                return installedModules[moduleId].exports;
              /******/
  
              /******/
              // Create a new module (and put it into the cache)
  
              /******/
  
              var module = installedModules[moduleId] = {
                /******/
                exports: {},
  
                /******/
                id: moduleId,
  
                /******/
                loaded: false
                /******/
  
              };
              /******/
  
              /******/
              // Execute the module function
  
              /******/
  
              modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
              /******/
  
              /******/
              // Flag the module as loaded
  
              /******/
  
              module.loaded = true;
              /******/
  
              /******/
              // Return the exports of the module
  
              /******/
  
              return module.exports;
              /******/
            }
            /******/
  
            /******/
  
            /******/
            // expose the modules object (__webpack_modules__)
  
            /******/
  
  
            __webpack_require__.m = modules;
            /******/
  
            /******/
            // expose the module cache
  
            /******/
  
            __webpack_require__.c = installedModules;
            /******/
  
            /******/
            // __webpack_public_path__
  
            /******/
  
            __webpack_require__.p = "";
            /******/
  
            /******/
            // Load entry module and return exports
  
            /******/
  
            return __webpack_require__(0);
            /******/
          }(
          /************************************************************************/
  
          /******/
          [
          /* 0 */
  
          /***/
          function (module, exports, __webpack_require__) {
  
            var _postscribe = __webpack_require__(1);
  
            var _postscribe2 = _interopRequireDefault(_postscribe);
  
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : {
                'default': obj
              };
            }
  
            module.exports = _postscribe2['default'];
            /***/
          },
          /* 1 */
  
          /***/
          function (module, exports, __webpack_require__) {
  
            exports.__esModule = true;
  
            var _extends = Object.assign || function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
  
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
  
              return target;
            };
  
            exports['default'] = postscribe;
  
            var _writeStream = __webpack_require__(2);
  
            var _writeStream2 = _interopRequireDefault(_writeStream);
  
            var _utils = __webpack_require__(4);
  
            var utils = _interopRequireWildcard(_utils);
  
            function _interopRequireWildcard(obj) {
              if (obj && obj.__esModule) {
                return obj;
              } else {
                var newObj = {};
  
                if (obj != null) {
                  for (var key in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                  }
                }
  
                newObj['default'] = obj;
                return newObj;
              }
            }
  
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : {
                'default': obj
              };
            }
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
              active = new _writeStream2['default'](el, options); // Identify this stream.
  
              active.id = nextId++;
              active.name = options.name || active.id;
              postscribe.streams[active.name] = active; // Override document.write.
  
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
              }); // Override window.onerror
  
  
              var oldOnError = active.win.onerror || doNothing; // This works together with the try/catch around WriteStream::insertScript
              // In modern browsers, exceptions in tag scripts go directly to top level
  
              active.win.onerror = function (msg, url, line) {
                options.error({
                  msg: msg + ' - ' + url + ': ' + line
                });
                oldOnError.apply(active.win, [msg, url, line]);
              }; // Write to the stream
  
  
              active.write(html, function () {
                // restore document.write
                _extends(doc, stash); // restore window.onerror
  
  
                active.win.onerror = oldOnError;
                options.done();
                active = null;
                nextStream();
              });
              return active;
            }
  
            function postscribe(el, html, options) {
              if (utils.isFunction(options)) {
                options = {
                  done: options
                };
              } else if (options === 'clear') {
                queue = [];
                active = null;
                nextId = 0;
                return;
              }
  
              options = utils.defaults(options, OPTIONS); // id selector
  
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
            /***/
  
          },
          /* 2 */
  
          /***/
          function (module, exports, __webpack_require__) {
  
            exports.__esModule = true;
  
            var _extends = Object.assign || function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
  
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
  
              return target;
            };
  
            var _prescribe = __webpack_require__(3);
  
            var _prescribe2 = _interopRequireDefault(_prescribe);
  
            var _utils = __webpack_require__(4);
  
            var utils = _interopRequireWildcard(_utils);
  
            function _interopRequireWildcard(obj) {
              if (obj && obj.__esModule) {
                return obj;
              } else {
                var newObj = {};
  
                if (obj != null) {
                  for (var key in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                  }
                }
  
                newObj['default'] = obj;
                return newObj;
              }
            }
  
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : {
                'default': obj
              };
            }
  
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
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
              var val = el.getAttribute(attr); // IE 8 returns a number if it's a number
  
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
                this.parser = new _prescribe2['default']('', {
                  autoFix: options.autoFix
                }); // Actual elements by id.
  
                this.actuals = [root]; // Embodies the "structure" of what's been written so far,
                // devoid of attributes.
  
                this.proxyHistory = ''; // Create a proxy of the root element.
  
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
  
                (_writeQueue = this.writeQueue).push.apply(_writeQueue, arguments); // Process writes
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
                var tok = {
                  type: 'function',
                  value: fn.name || fn.toString()
                };
  
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
                var tokens = []; // stop if we see a script token
  
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
  
                this._walkChunk();
  
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
                var nextId = this.actuals.length; // The raw html of this chunk.
  
                var raw = []; // The html to create the nodes in the tokens (with id's injected).
  
                var actual = []; // Html that can later be used to proxy the nodes in the tokens.
  
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
                      var id = nextId++; // Actual: inject id attribute: replace '>' at end of start tag with id attribute + '>'
  
                      actual.push(tokenRaw.replace(/(\/?>)/, ' ' + BASEATTR + 'id=' + id + ' $1')); // Don't proxy scripts: they have no bearing on DOM structure.
  
                      if (tok.attrs.id !== PROXY_SCRIPT && tok.attrs.id !== PROXY_STYLE) {
                        // Proxy: strip all attributes and inject proxyof attribute
                        proxy.push( // ignore atomic tags (e.g., style): they have no "structural" effect
                        tok.type === 'atomicTag' ? '' : '<' + tok.tagName + ' ' + BASEATTR + 'proxyof=' + id + (tok.unary ? ' />' : '>'));
                      }
                    }
                  } else {
                    // Visit any other type of token
                    // Actual: append.
                    actual.push(tokenRaw); // Proxy: append endTags. Ignore everything else.
  
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
                var stack = [this.proxyRoot]; // use shift/unshift so that children are walked in document order
  
                while (utils.existy(node = stack.shift())) {
                  var isElement = node.nodeType === 1;
                  var isProxy = isElement && getData(node, 'proxyof'); // Ignore proxies
  
                  if (!isProxy) {
                    if (isElement) {
                      // New actual element: register it and remove the the id attr.
                      this.actuals[getData(node, 'id')] = node;
                      setData(node, 'id');
                    } // Is node's parent a proxy?
  
  
                    var parentIsProxyOf = node.parentNode && getData(node.parentNode, 'proxyof');
  
                    if (parentIsProxyOf) {
                      // Move node under actual parent.
                      this.actuals[parentIsProxyOf].appendChild(node);
                    }
                  } // prepend childNodes to stack
  
  
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
                } // Put the script node in the DOM.
  
  
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
  
                this._insertCursor(el, PROXY_STYLE); // Set content
  
  
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
                el.setAttribute('type', tok.type); // Set attributes
  
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
                  this.options.error({
                    msg: 'Bad script nesting or script finished twice'
                  });
                  return;
                }
  
                this.scriptStack.shift(); // Append outer writes to queue and process them.
  
                this.write.apply(this, tok.outerWrites); // Check for pending remote
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
                var el = this.doc.createElement(tok.tagName); // Set attributes
  
                utils.eachKey(tok.attrs, function (name, value) {
                  el.setAttribute(name, value);
                }); // Set content
  
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
                        failure({
                          msg: 'onload handler failed ' + err + ' @ ' + el.src
                        });
                      }
                    }
  
                    success();
                  },
                  onerror: function onerror() {
                    if (el._onerror) {
                      try {
                        el._onerror.apply(this, Array.prototype.slice.call(arguments, 0));
                      } catch (err) {
                        failure({
                          msg: 'onerror handler failed ' + err + ' @ ' + el.src
                        });
                        return;
                      }
                    }
  
                    failure({
                      msg: 'remote script failed ' + el.src
                    });
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
            /***/
          },
          /* 3 */
  
          /***/
          function (module, exports, __webpack_require__) {
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
              module.exports = factory();
            })(this, function () {
              return (
                /******/
                function (modules) {
                  // webpackBootstrap
  
                  /******/
                  // The module cache
  
                  /******/
                  var installedModules = {};
                  /******/
                  // The require function
  
                  /******/
  
                  function __webpack_require__(moduleId) {
                    /******/
                    // Check if module is in cache
  
                    /******/
                    if (installedModules[moduleId])
                      /******/
                      return installedModules[moduleId].exports;
                    /******/
                    // Create a new module (and put it into the cache)
  
                    /******/
  
                    var module = installedModules[moduleId] = {
                      /******/
                      exports: {},
  
                      /******/
                      id: moduleId,
  
                      /******/
                      loaded: false
                      /******/
  
                    };
                    /******/
                    // Execute the module function
  
                    /******/
  
                    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                    /******/
                    // Flag the module as loaded
  
                    /******/
  
                    module.loaded = true;
                    /******/
                    // Return the exports of the module
  
                    /******/
  
                    return module.exports;
                    /******/
                  }
                  /******/
                  // expose the modules object (__webpack_modules__)
  
                  /******/
  
  
                  __webpack_require__.m = modules;
                  /******/
                  // expose the module cache
  
                  /******/
  
                  __webpack_require__.c = installedModules;
                  /******/
                  // __webpack_public_path__
  
                  /******/
  
                  __webpack_require__.p = "";
                  /******/
                  // Load entry module and return exports
  
                  /******/
  
                  return __webpack_require__(0);
                  /******/
                }(
                /************************************************************************/
  
                /******/
                [
                /* 0 */
  
                /***/
                function (module, exports, __webpack_require__) {
  
                  var _HtmlParser = __webpack_require__(1);
  
                  var _HtmlParser2 = _interopRequireDefault(_HtmlParser);
  
                  function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                      'default': obj
                    };
                  }
  
                  module.exports = _HtmlParser2['default'];
                  /***/
                },
                /* 1 */
  
                /***/
                function (module, exports, __webpack_require__) {
  
                  exports.__esModule = true;
  
                  var _supports = __webpack_require__(2);
  
                  var supports = _interopRequireWildcard(_supports);
  
                  var _streamReaders = __webpack_require__(3);
  
                  var streamReaders = _interopRequireWildcard(_streamReaders);
  
                  var _fixedReadTokenFactory = __webpack_require__(6);
  
                  var _fixedReadTokenFactory2 = _interopRequireDefault(_fixedReadTokenFactory);
  
                  var _utils = __webpack_require__(5);
  
                  function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                      'default': obj
                    };
                  }
  
                  function _interopRequireWildcard(obj) {
                    if (obj && obj.__esModule) {
                      return obj;
                    } else {
                      var newObj = {};
  
                      if (obj != null) {
                        for (var key in obj) {
                          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                      }
  
                      newObj['default'] = obj;
                      return newObj;
                    }
                  }
  
                  function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                      throw new TypeError("Cannot call a class as a function");
                    }
                  }
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
                  /***/
  
                },
                /* 2 */
  
                /***/
                function (module, exports) {
  
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
                  /***/
                },
                /* 3 */
  
                /***/
                function (module, exports, __webpack_require__) {
  
                  exports.__esModule = true;
  
                  var _typeof$1 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
                    return _typeof(obj);
                  } : function (obj) {
                    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof(obj);
                  };
  
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
  
                        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof$1(_ret)) === "object") return _ret.v;
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
                      var rest = stream.slice(start.length); // for optimization, we check first just for the end tag
  
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
                  /***/
  
                },
                /* 4 */
  
                /***/
                function (module, exports, __webpack_require__) {
  
                  exports.__esModule = true;
                  exports.EndTagToken = exports.AtomicTagToken = exports.StartTagToken = exports.TagToken = exports.CharsToken = exports.CommentToken = exports.Token = undefined;
  
                  var _utils = __webpack_require__(5);
  
                  function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                      throw new TypeError("Cannot call a class as a function");
                    }
                  }
                  /**
                   * Token is a base class for all token types parsed.  Note we don't actually
                   * use intheritance due to IE8's non-existent ES5 support.
                   */
  
  
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
  
  
                  exports.CommentToken = function () {
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
  
  
                  exports.CharsToken = function () {
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
  
  
                  exports.StartTagToken = function () {
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
  
  
                  exports.AtomicTagToken = function () {
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
  
  
                  exports.EndTagToken = function () {
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
                  /***/
  
                },
                /* 5 */
  
                /***/
                function (module, exports) {
  
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
                    var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ''; // There's no lookback in JS, so /(^|[^\\])"/ only matches the first of two `"`s.
                    // Instead, just match anything before a double-quote and escape if it's not already escaped.
  
                    return !value ? defaultValue : value.replace(/([^"]*)"/g, function (_, prefix) {
                      return /\\/.test(prefix) ? prefix + '"' : prefix + '\\"';
                    });
                  }
                  /***/
  
                },
                /* 6 */
  
                /***/
                function (module, exports) {
  
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
                    var tok = stack.pop(); // prepend close tag to stream.
  
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
                  /***/
  
                }
                /******/
                ])
              );
            });
            /***/
          },
          /* 4 */
  
          /***/
          function (module, exports) {
  
            exports.__esModule = true;
  
            var _typeof$1 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
              return _typeof(obj);
            } : function (obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof(obj);
            };
  
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
  
                if ((typeof _ret === 'undefined' ? 'undefined' : _typeof$1(_ret)) === "object") return _ret.v;
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
            /***/
  
          }
          /******/
          ])
        );
      });
    });
    var postscribe$1 = /*@__PURE__*/getDefaultExportFromCjs(postscribe);
  
    const defaultOptions = {
        done: () => {
            return;
        },
        error: () => {
            return;
        },
        releaseAsync: true,
    };
    const cleanHtmlElement = (elementId) => {
        const element = getElement(elementId);
        if (element) {
            element.innerHTML = '';
        }
    };
    const safeCallback = (callback) => {
        try {
            callback();
        }
        catch (error) {
            customConsoleErr('Render callback error', error);
        }
    };
    const renderCallback = (group, position) => (type) => {
        const groupCallback = path(['callback'], group);
        const positionCallback = path(['options', 'callback'], position);
        const renderEvent = {
            type,
            group,
            position,
        };
        if (groupCallback)
            safeCallback(() => groupCallback(renderEvent));
        if (positionCallback)
            safeCallback(() => positionCallback(renderEvent));
    };
    const postscribeRender = (elementId, code, options = {}) => new Promise((resolve) => {
        const _a = mergeRight(defaultOptions, options), { done: optionsCallbackDone, error: optionsCallbackError } = _a, postscribeCallbacks = __rest(_a, ["done", "error"]);
        let result;
        setTimeout(() => {
            if (!result) {
                resolve(exports.RenderStatus.timeout);
            }
        }, renderTimeout);
        postscribe$1(`#${elementId}`, code, Object.assign({ done: () => {
                if (result !== exports.RenderStatus.postscribe_error) {
                    result = exports.RenderStatus.success;
                }
                optionsCallbackDone();
                resolve(result);
            }, error: (error) => {
                result = exports.RenderStatus.postscribe_error;
                customConsoleWarn('Postscribe render error for', elementId, error);
                optionsCallbackError(error);
            } }, postscribeCallbacks));
    });
    /**
     * Iterate over all custom render functions, if any of them returns true,
     * stop and return true
     */
    const runCustomRenders = (elementId, position, customRenders) => {
        return !!customRenders.find((customRenderFn) => {
            try {
                return customRenderFn(Object.assign(position, {
                    elementId,
                    target: `size=${position.options.size ? position.options.size.toString() : ''}`,
                }));
            }
            catch (error) {
                customConsoleWarn(`Custom render for element "${elementId}" failed: ${customRenderFn}`);
                return false;
            }
        });
    };
    const render = (elementId, position, customRenders, callback) => __awaiter(void 0, void 0, void 0, function* () {
        callback(exports.RenderCallbackType.precleanup);
        cleanHtmlElement(elementId);
        callback(exports.RenderCallbackType.cleanup);
        callback(exports.RenderCallbackType.preinsert);
        const usedCustomRender = yield runCustomRenders(elementId, position, customRenders);
        if (usedCustomRender) {
            callback(exports.RenderCallbackType.insert);
            return exports.RenderStatus.success;
        }
        return yield postscribeRender(elementId, position.code, {
            done: () => callback(exports.RenderCallbackType.insert),
        });
    });
  
    var ModulesAction;
    (function (ModulesAction) {
        ModulesAction["euConsentReady"] = "euConsentReady";
    })(ModulesAction || (ModulesAction = {}));
  
    const cookieNameV2 = 'eupubconsent-v2';
    const timeout = 2000;
    let euConsent;
    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        const expires = 'expires=' + d.toUTCString();
        document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
    }
    function updatePage(euConsent) {
        const payload = {
            targets: {
                gdpr: euConsent ? "1" : "0",
                consent: euConsent,
            }
        };
        dispatchInternal([exports.Action.page, payload]);
        dispatchExternal([ModulesAction.euConsentReady]);
    }
    const cmp = {
        init: function () {
            dispatchExternal([
                exports.Action.deferAfter,
                {
                    timeout,
                    deferAfterAction: ModulesAction.euConsentReady,
                },
            ]);
            // document.cookie can throw DOMException when running in sandboxed iframe
            try {
                // TODO: Remove after testing
                setCookie(cookieNameV2, 'nejakyNesmyslnyString', 5);
                const regex = '(^|;)\\s*' + cookieNameV2 + '\\s*=\\s*([^;]+)';
                const cookie = document.cookie.match(regex);
                if (cookie) {
                    euConsent = cookie.pop();
                    updatePage(euConsent);
                }
            }
            catch (error) {
                customConsoleLog('CMP is unable to ready cookie', error);
            }
            if (!euConsent && typeof __tcfapi === 'function') {
                __tcfapi('getTCData', 2, (response, status) => {
                    if (status === 'loaded') {
                        euConsent = response.tcString;
                        updatePage(euConsent);
                    }
                });
            }
            else {
                dispatchExternal([ModulesAction.euConsentReady]);
            }
        },
    };
  
    // We need to merge all modules from every module type, but if there is module with same name in same category
    // we want to ignore that module from secondaryModules and use the one from primaryModules
    function mergeModules(primaryModules, secondaryModules) {
        Object.keys(primaryModules).forEach((primaryModuleType) => {
            Object.keys(primaryModules[primaryModuleType]).forEach((primaryModuleName) => {
                if (secondaryModules[primaryModuleType] &&
                    Object.keys(secondaryModules[primaryModuleType])
                        .find((secondaryModuleName) => secondaryModuleName === primaryModuleName)) {
                    delete secondaryModules[primaryModuleType][primaryModuleName];
                }
            });
        });
        return mergeDeepRight(secondaryModules, primaryModules);
    }
  
    exports.modules = {};
    const defaultModules = {
        modifyAdCall: {},
        updatePage: {
            cmp
        }
    };
    function initModules(externalModules = {}) {
        addModules(mergeModules(externalModules, defaultModules));
    }
    function addModules(newModules) {
        Object.values(newModules.modifyAdCall).forEach(module => module.init());
        Object.values(newModules.updatePage).forEach(module => module.init());
        exports.modules = mergeModules(newModules, exports.modules);
    }
  
    let deferConf;
    let deferConditionIterator = 0;
    // TODO
    const isValidAction = (item) => Array.isArray(item) && typeof item[0] === 'string';
    function resolveDeferCondition(conditionId) {
        deferConf.conditions.splice(deferConf.conditions.findIndex(cond => cond.id === conditionId), 1);
        if (!deferConf.conditions.length) {
            resumeQueue();
        }
    }
    const activateDefer = ({ deferAfterAction, onTimeout, timeout, }) => {
        const conditionId = deferConditionIterator++;
        const deferTimeout = window.setTimeout(() => {
            onTimeout && dispatchInternal(onTimeout());
            resolveDeferCondition(conditionId);
        }, timeout);
        const newDeferCondition = {
            id: conditionId,
            expectAction: deferAfterAction,
            deferTimeout,
        };
        deferConf = {
            active: true,
            deferredActionsQueue: (deferConf === null || deferConf === void 0 ? void 0 : deferConf.deferredActionsQueue) || [],
            conditions: [...(deferConf === null || deferConf === void 0 ? void 0 : deferConf.conditions) || [], newDeferCondition]
        };
    };
    const resumeQueue = () => {
        deferConf.deferredActionsQueue.forEach(dispatchInternal);
        deferConf = null;
    };
    const deferAction = (item) => {
        const conditionsToResolve = deferConf.conditions.filter(({ expectAction }) => item[0] === expectAction);
        if (conditionsToResolve) {
            deferConf.deferredActionsQueue.unshift(item);
            conditionsToResolve.forEach(condition => {
                clearTimeout(condition.deferTimeout);
                resolveDeferCondition(condition.id);
            });
        }
        else if (item[0] === exports.Action.deferAfter) {
            activateDefer(item[1]);
        }
        else {
            customConsoleLog('DEFERING ACTION', item);
            deferConf.deferredActionsQueue.push(item);
        }
    };
    const loadAll = ({ options }) => {
        const groupIds = Object.keys(getState().groups);
        groupIds.forEach((groupId) => dispatchInternal([exports.Action.loadGroup, { groupId, options }]));
    };
    const loadGroup = (payload) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const newState = updateState(exports.Action.loadGroup, payload);
        const { groupId = 'default' } = payload;
        const state = getState();
        const groupData = filterReloadPositions(getGroup(groupId, newState));
        const sasUrl = (_a = state.config) === null || _a === void 0 ? void 0 : _a.sasUrl;
        if (!sasUrl) {
            throw new Error('SASIC: SasUrl is missing in config. Make sure you call setConfig or pass config into _sasic.init');
        }
        const modifyAdCallFns = (exports.modules === null || exports.modules === void 0 ? void 0 : exports.modules.modifyAdCall) ? Object.values(exports.modules.modifyAdCall)
            .map(module => module.modifyAdCall) : [];
        const elementsWithCode = yield fetchAds(state.page, groupData, sasUrl, modifyAdCallFns);
        dispatchInternal([exports.Action.renderGroup, { groupId, elementsWithCode }]);
    });
    const renderGroup = ({ groupId, elementsWithCode }) => {
        const newState = updateState(exports.Action.renderGroup, {
            groupId,
            elementsWithCode,
        });
        const group = filterReloadPositions(getGroup(groupId, newState));
        const positions = path(['positions'], group);
        const customRenders = path(['customRenders'], newState);
        forEachObjIndexed((position, elementId) => __awaiter(void 0, void 0, void 0, function* () {
            let result;
            if (position && position.code) {
                const callback = renderCallback(group, position);
                result = yield render(elementId, position, customRenders, callback);
            }
            else {
                customConsoleWarn('Nothing to render for position at', elementId, position);
                result = exports.RenderStatus.empty;
            }
            dispatchInternal([
                exports.Action._renderFinished,
                {
                    elementId,
                    groupId,
                    renderStatus: result,
                },
            ]);
        }), positions);
    };
    const handleItem = ([action, payload]) => {
        switch (action) {
            case exports.Action.loadAll:
                loadAll(payload);
                break;
            case exports.Action.loadGroup:
                loadGroup(payload);
                break;
            case exports.Action.deferAfter:
                activateDefer(payload);
                break;
            case exports.Action.renderGroup:
                renderGroup(payload);
                break;
            default:
                updateState(action, payload);
                break;
        }
    };
    /**
     * Dispatch action internally within another action
     * This action is not deferred
     */
    const dispatchInternal = (item) => {
        if (isValidAction(item)) {
            pipe(logAction, handleItem)(item);
        }
        else {
            customConsoleWarn('Invalid item pushed to sasic queue', item);
        }
    };
    /**
     * Dispatch an action from the page
     * This action can be deferred
     */
    const dispatchExternal = (item) => {
        if (deferConf && deferConf.active) {
            deferAction(item);
        }
        else {
            dispatchInternal(item);
        }
    };
  
    const setSasicQueue = () => {
        const _sasic_queue = window._sasic_queue || [];
        // dispatch already present
        while (_sasic_queue.length) {
            const item = _sasic_queue.shift();
            dispatchExternal(item);
        }
        _sasic_queue.push = (...items) => {
            items.forEach(dispatchExternal);
            return 0;
        };
        window._sasic_queue = _sasic_queue;
    };
    const setQueueObserver = () => {
        setSasicQueue();
    };
  
    const init = ({ config, modules = {}, enableQueueObserver, }) => {
        setConfig(config);
        initModules(modules);
        if (enableQueueObserver) {
            setQueueObserver();
        }
    };
    function setConfig(config) {
        dispatchInternal([exports.Action.config, config]);
    }
  
    exports.dispatch = dispatchExternal;
    exports.get = get;
    exports.init = init;
    exports.setConfig = setConfig;
  
    Object.defineProperty(exports, '__esModule', { value: true });
  
  })));