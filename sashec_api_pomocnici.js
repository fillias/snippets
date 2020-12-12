
(function findAdCodeText(text) {
    var result = [];
    /* najdi v code reklamy nejaky text */
    for (var key in _sashec.Postscribe.activeQueue) {
        var data = _sashec.Postscribe.activeQueue[key].data;
        result.push(data.map(function (item) {
            if (item.code.match(text)) {
                item.MATCH = text;
            };
            return item;
        })); 
    }
    return result;
})('test snippet');