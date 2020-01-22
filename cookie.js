function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}


function createCookie(name, value, expire) {
    // name je string, expire je date object   
    var expDate;
    if (!expire) {
        // expire default napr za 14 dnu
        expDate = new Date();
        expDate.setTime(expDate.getTime() + 14 * 86400000);
    } else {
        expDate = expire;
    }

    document.cookie = name + "=" + value + ("; expires=" + expDate.toUTCString()) + "; path=/";
}
