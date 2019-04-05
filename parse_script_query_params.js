
/* vytahnuti query params ze script src  
** kdyz je toto napriklad zavolano jako  <script src="test.js?testik=2&filip=3"></script>
tak v test.js mit tuto funkci:
*/
(function () {
    var scripts = document.getElementsByTagName('script');
    var myScript = scripts[scripts.length - 1];
    console.log(myScript);

    var queryString = myScript.src.replace(/^[^\?]+\??/, '');

    var params = parseQuery(queryString);

    function parseQuery(query) {
        var Params = new Object();
        if (!query) return Params; // return empty object
        var Pairs = query.split(/[;&]/);
        for (var i = 0; i < Pairs.length; i++) {
            var KeyVal = Pairs[i].split('=');
            if (!KeyVal || KeyVal.length != 2) continue;
            var key = unescape(KeyVal[0]);
            var val = unescape(KeyVal[1]);
            val = val.replace(/\+/g, ' ');
            Params[key] = val;
        }
        return Params;
    }
    console.log(params);
})();