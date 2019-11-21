
/*  https://davidwalsh.name/essential-javascript-functions  */

// The debounce function can be a game-changer when it comes to event-fueled performance.  If you aren't using a debouncing function with a scroll, resize, key* event, you're probably doing it wrong.  Here's a debounce function to keep your code efficient:

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

// Usage
var myEfficientFn = debounce(function() {
	// All the taxing stuff you do
}, 250);
window.addEventListener('resize', myEfficientFn);


/********************************************** */

// poll
// As I mentioned with the debounce function, sometimes you don't get to plug into an event to signify a desired state -- if the event doesn't exist, you need to check for your desired state at intervals:
// The polling function
function poll(fn, timeout, interval) {
    var endTime = Number(new Date()) + (timeout || 2000);
    interval = interval || 100;

    var checkCondition = function(resolve, reject) {
        // If the condition is met, we're done! 
        var result = fn();
        if(result) {
            resolve(result);
        }
        // If the condition isn't met but the timeout hasn't elapsed, go again
        else if (Number(new Date()) < endTime) {
            setTimeout(checkCondition, interval, resolve, reject);
        }
        // Didn't match and too much time, reject!
        else {
            reject(new Error('timed out for ' + fn + ': ' + arguments));
        }
    };

    return new Promise(checkCondition);
}

// Usage:  ensure element is visible
poll(function() {
	return document.getElementById('lightbox').offsetWidth > 0;
}, 2000, 150).then(function() {
    // Polling done, now do something else!
}).catch(function() {
    // Polling timed out, handle the error!
});


/********************************************** */

// once
function once(fn, context) { 
	var result;

	return function() { 
		if(fn) {
			result = fn.apply(context || this, arguments);
			fn = null;
		}

		return result;
	};
}

// Usage
var canOnlyFireOnce = once(function() {
	console.log('Fired!');
});

canOnlyFireOnce(); // "Fired!"
canOnlyFireOnce(); // nada


/********************************************** */



// sheet insertRule
//We all know that we can grab a NodeList from a selector (via document.querySelectorAll) and give each of them a style, but what's more efficient is setting that style to a selector (like you do in a stylesheet):

var sheet = (function() {
	// Create the <style> tag
	var style = document.createElement('style');

	// Add a media (and/or media query) here if you'd like!
	// style.setAttribute('media', 'screen')
	// style.setAttribute('media', 'only screen and (max-width : 1024px)')

	// WebKit hack :(
	style.appendChild(document.createTextNode(''));

	// Add the <style> element to the page
	document.head.appendChild(style);

	return style.sheet;
})();

// Usage
sheet.insertRule("header { float: left; opacity: 0.8; }", 1);



/****************************************** */

// matchesSelector
// Oftentimes we validate input before moving forward; ensuring a truthy value, ensuring forms data is valid, etc.  But how often do we ensure an element qualifies for moving forward?  You can use a matchesSelector function to validate if an element is of a given selector match:

function matchesSelector(el, selector) {
	var p = Element.prototype;
	var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function(s) {
		return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
	};
	return f.call(el, selector);
}

// Usage
matchesSelector(document.getElementById('myDiv'), 'div.someSelector[some-attribute=true]')



/* entitze ************** */
var entitize = function(html) {
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

  console.log(entitize('žofinka ma hlad'));


  /*  Vazeny prumer ***************************************/

var a = [62, 67, 71, 74, 76, 77, 78, 79, 79, 80, 80, 81, 81, 82, 83, 84, 86, 89, 93, 98];

var b = [80, 81, 82, 83, 84, 85, 86, 87, 87, 88, 88, 89, 89, 89, 90, 90, 90, 90, 91, 91, 91, 92, 92, 93, 93, 94, 95, 96, 97, 98, 99, 100];

function getPrumer (vstup) {
    var soucet = vstup.reduce( (acc, currentvalue) => {
        return acc + currentvalue;
    });
    return soucet / vstup.length;
}

function getVazenyPrumer (vstup1, vstup2) {
    var prumer1 = getPrumer(vstup1);
    var prumer2 = getPrumer(vstup2);

    return (prumer1 * vstup1.length + prumer2 * vstup2.length) / (vstup1.length + vstup2.length) ;
}

console.log(getVazenyPrumer(a, b));


/*  get uniques from array */
function getUnique(arr) { 
    return arr.filter( (value, index, self) => { 
        return self.indexOf(value) === index;
    } );
}
