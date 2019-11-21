function check_jQuery() {
    if (window.jQuery) { 
        console.log('__3rd cube__ mam Jquery, startuju rovnou startCube()'); 
        startCube();
    } else {
        console.log('__3rd cube__ nemam Jquery, startuju loadJquery()'); 
        loadJquery();
    }
}

function loadJquery() {

    var load = (function() {
      // Function which returns a function: https://davidwalsh.name/javascript-functions
      function _load(tag) {
        return function(url) {
          // This promise will be used by Promise.all to determine success or failure
          return new Promise(function(resolve, reject) {
            var element = document.createElement(tag);
            var parent = 'body';
            var attr = 'src';

            // Important success and error for the promise
            element.onload = function() {
              resolve(url);
            };
            element.onerror = function() {
              reject(url);
            };

            // Need to set different attributes depending on tag type
            switch(tag) {
              case 'script':
                element.async = true;
                break;
              case 'link':
                element.type = 'text/css';
                element.rel = 'stylesheet';
                attr = 'href';
                parent = 'head';
            }

            // Inject into document to kick off loading
            element[attr] = url;
            document[parent].appendChild(element);
          });
        };
      }
      
      return {
        css: _load('link'),
        js: _load('script'),
        img: _load('img')
      }
    })();


    Promise.all([
        load.js('https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'),
        load.js(`https://i0.cz/reklama/bo/_stale_zdroje/sasicek.min.js?v2`)
        /* load co potrebujes
        load.css('nejaky_css.css'),
        load.img('img.png')
        */
      ]).then(function() {
        console.log('__3rd cube__ Promise, Jquery loadle, startuju startCube()'); 
        //startCube();
      }).catch(function(e) {
        console.log('___3rd cube Promise err: ' + e);
      });

}


function startCube () {
    console.log('__3rd cube__ starting Cube');
    console.log(jQuery);
}