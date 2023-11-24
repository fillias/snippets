// https://www.sitepen.com/blog/the-basics-of-proxy
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

const target = [];

var createObservableArray = ({ target, listener }) => {
  const handler = {
    get(target, prop, receiver) {
      if (prop === 'push') {
        return function (value) {
          target.push(value);
          listener({ target, value, method: prop });
        };
      }
      if (prop === 'pop') {
        return function () {
          const value = target.pop();
          listener({ target, value, method: prop });
          return value;
        };
      }
      if (prop === 'shift') {
        return function () {
          const value = target.shift();
          listener({ target, value, method: prop });
          return value;
        };
      }
      if (prop === 'unshift') {
        return function (value) {
          target.unshift(value);
          listener({ target, value, method: prop });
          return value;
        };
      }
      if (prop === 'splice') {
        return function (...values) {
          target.splice(...values);
          listener({ target, value: values, method: prop });
        };
      }
      return Reflect.get(target, prop, receiver);
    },
  };
  return new Proxy(target, handler);
};

var listener = (results) => {
  console.log(results);
  if (typeof results.value[1] === 'function') {
    results.value[1]('baf');
  }
};

const list = createObservableArray({ target, listener });

list.push(1);

setTimeout(() => {
  list.push([
    'testfn',
    (x) => {
      console.log('x=', x);
    },
  ]);
}, 2000);
