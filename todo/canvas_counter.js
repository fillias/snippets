if (typeof (Ads) == "undefined" || !Ads.write) {
    var Ads = (new function () {
            this.povolen = false;
            this.Rollout = this.Sticky = this.Video = this.Overlayer = this.Overlayer2 = function (param) {
                if (window.console)
                    console.warn("Form\u00E1t vy\u0159azen.")
            };
            this.smepromo = this.selfpromo = this.articleSelfpromo = function () {};
            this.nonfocus = function () {
                if (!window.addEventListener)
                    return;
                var timeout;
                window.addEventListener("blur", function () {
                    clearTimeout(timeout);
                    timeout = setTimeout(function () {
                        if (document.activeElement && document.activeElement.tagName == "IFRAME")
                            return;
                        html.classes.add("nonfocus")
                    }, 160)
                }, false);
                window.addEventListener("focus", function () {
                    clearTimeout(timeout);
                    timeout = setTimeout(function () {
                        html.classes.remove("nonfocus")
                    }, 160)
                }, false)
            };
            this.klikaciBody = function (param) {
                html.classes.add("klikaci-body");
                if (document.body.offsetWidth > 1040)
                    html.classes.add("klikaci-body-siroke");
                if (!param.link && !param.callback)
                    return;
                var focusTime = -Infinity,
                    mouseDownTime = 0;
                var allowFocus = true;
                window.onfocus = function () {
                    if (allowFocus)
                        focusTime = new Date().getTime();
                    allowFocus = false
                };
                window.onblur = function () {
                    allowFocus = true
                };
                var downPosition = [0, 0];
                document.onmousedown = function (e) {
                    var event = window.event || e;
                    downPosition = [event.clientX, event.clientY];
                    mouseDownTime = new Date().getTime()
                };
                document.onclick = function (e) {
                    var misclick = (Math.abs(focusTime - mouseDownTime) < 300);
                    var event = window.event || e;
                    if (event.button == 2 || event.which > 1)
                        return true;
                    var target = event.srcElement || event.target;
                    if (!target) {
                        console.log("\ud83e\udd11 Branding: nejde zjistit, na co se kliklo!");
                        Log.ping(location.href, "reklama\x5fbranding\x5fnaruseni");
                        return
                    }
                    var dx = event.clientX - downPosition[0],
                        dy = event.clientY - downPosition[1];
                    if (dx * dx + dy * dy > 2500)
                        return;
                    if (target == this || /^m-bg-[123]$/.test(target.className) || target.id == "main" || target.id == "mainroll" || target.id == "mainroll-canvas" || target.id == "reklama-flash-body" || target.id == "f-lachtan" || target.id == "f-foot" || target.id == "foot2" || target.tagName == "BODY") {
                        if (misclick) {
                            Log.ping(location.href, "reklama\x5fbranding\x5fmisklik");
                            return true
                        }
                        Log.ping(location.href, "reklama\x5fbranding\x5fklik");
                        if (param.callback)
                            return param.callback(event);
                        var url = param.link;
                        if (param.oblasti) {
                            var x = event.clientX - window.innerWidth / 2;
                            var y = event.clientY + !(param.fixni || param.fixed) * (document.body.scrollTop + document.documentElement.scrollTop);
                            for (var i = 0; i < param.oblasti.length; i++) {
                                var oblast = param.oblasti[i];
                                if (oblast[0] < x && oblast[1] < y && oblast[2] > x && oblast[3] > y)
                                    url = oblast[4]
                            }
                        } else if (param.links) {
                            var x = event.clientX,
                                y = event.clientY;
                            for (var i = 0; i < param.links.length; i++) {
                                var rect = param.links[i].space.getBoundingClientRect();
                                if (rect.left < x && rect.right > x && rect.top < y && rect.bottom > y)
                                    url = param.links[i].link
                            }
                        }
                        ga(url, event.clientY);
                        window.open(url, param.target || "\x5fblank")
                    }
                };

                function ga(url, y) {
                    url = (function () {
                        var inputVariable = url.toLowerCase();
                        var table = [
                            ["c\\.imedia\\.cz", "Klik:Imedia"],
                            ["googleads\\.g\\.doubleclick\\.net", "Klik:Google"],
                            ["tpc\\.googlesyndication\\.com", "Klik:Google"],
                            ["go\\.idnes\\.bbelements\\.com", "Klik:BBmedia"]
                        ];
                        for (var i = 0, len = table.length; i < len; i++)
                            if ((new RegExp(table[i][0], "i")).test(inputVariable))
                                return table[i][1];
                        return url
                    })();
                    var value = Math.floor((y + (!(param.fixni || param.fixed) * (document.body.scrollTop + document.documentElement.scrollTop))) / 100) * 100;
                    window.dataLayer = window.dataLayer || [];
                    dataLayer.push({
                        "event": "ReklamaEvent",
                        "eventCategory": "Reklama",
                        "eventAction": (param.fixni || param.fixed) ? "BrandingFixed" : "BrandingScroll",
                        "eventLabel": value,
                        "eventValue": "0",
                        "eventInteraction": "false"
                    })
                }
            };
            this.supportMultipleBackground = function () {
                var temp = document.createElement("div").style;
                temp.cssText = "background:url(//:),url(//:),red url(//:)";
                return /(url\s*\(.*?){3}/.test(temp.background)
            };
            this.write = function (asyncParent, code) {
                if (asyncParent)
                    element(asyncParent).innerHTML = code;
                else
                    document.write(code)
            };
            var brandingImageRE = /\-\-([0-9ABCDEF]{6})([0-9]+)\.[^\.]+$/;
            this.branding = this.Branding = function (param) {
                if (!window.Helper)
                    Log.ping(location.href, "uniuklid\x5fbezpaticky\x5fbranding");
                Ads.ok = true;
                if (!Ads.supportMultipleBackground())
                    return;
                Ads.expandProperties(param);
                var code = [];
                code.push("<style id='branding-stylesheet'>");
                if ((param["main"] || "").endsWith("/"))
                    param["main"] = "";
                if ((param["body"] || "").endsWith("/"))
                    param["body"] = "";
                if (brandingImageRE.test(param["main"]))
                    param["main-height"] = parseInt(param["main"].match(brandingImageRE)[2]);
                if (param["body-color"] || param["pozadi"])
                    param["body-color"] = param["body-color"] || param["pozadi"];
                else if (brandingImageRE.test(param["body"] || param["main"]))
                    param["body-color"] = "#" + (param["body"] || param["main"]).match(brandingImageRE)[1];
                else
                    param["body-color"] = "#FFF";
                var offsetTop = (element("main") ? element("main").offsetTop : 0);
                param["main-height"] = (param["main-height"] || 0) + offsetTop;
                if (/safari/i.test(navigator.userAgent) && !/chrome/i.test(navigator.userAgent))
                    param["fixni-body"] = param["fixni-main"] = false;
                var fixed = param["fixni-body"] || param["fixni-main"];
                var code1200 = [];
                var backgrounds = [];
                if (param["body"]) {
                    backgrounds.push(param["body-color"] + " url('" + param["body"] + "') repeat-y " + (param["fixni-body"] ? "fixed" : "scroll") + " 50% " + param["main-height"] + "px");
                    code1200.push("html.klikaci-body body {background: 0} html.klikaci-body body:before, html.klikaci-body body:after {background:" + param["body-color"] + " url('" + param["body"] + "') repeat-y scroll 50% " + param["main-height"] + "px; " + (param["fixni-body"] ? "position: fixed; " : "") + "content: ''}")
                } else
                    backgrounds.push(param["body-color"] + (fixed ? " fixed" : ""));
                var dead = false;
                if (param["main"]) {
                    if (param["dvojity"] && ("pageYOffset" in window) && window.addEventListener) {
                        fixed = true;
                        code.unshift("<div id=\"mainroll\"></div>");
                        var mainrollBack = "url('" + param["main"] + "') repeat-y fixed 50% " + (offsetTop + "px");
                        if (param["dvojity"] === true || param["dvojity"] == "x" || param["dvojity"] == "y") {
                            var mouseC = 0;
                            var dirStyle = param["dvojity"] == "x" ? "right" : "bottom";
                            var dirSize = param["dvojity"] == "x" ? "innerWidth" : "innerHeight";
                            var dirOffset = param["dvojity"] == "x" ? window.innerWidth - document.documentElement.offsetWidth : 0;
                            var dirMouse = param["dvojity"] == "x" ? "clientX" : "clientY";
                            var mouseUpdate = function () {
                                element("mainroll").style[dirStyle] = window[dirSize] - dirOffset - mouseC + "px"
                            };
                            window.addEventListener("mousemove", function (event) {
                                if (dead)
                                    return;
                                mouseC = event[dirMouse];
                                mouseUpdate()
                            }, false);
                            Starter.scroll(mouseUpdate)
                        } else if (param["dvojity"] == "tahaci") {
                            code.unshift("<div id=\"branding-tahlo\"><div id=\"branding-tahlo-sipky\"></div></div>");
                            code.push("html.klikaci-body div#mainroll { right: 50% }");
                            Starter.add(function () {
                                if (dead)
                                    return;
                                var tahlo = element("branding-tahlo");
                                var mainroll = element("mainroll");
                                mainroll.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
                                var supportClipPath = (mainroll.style.clipPath != "");
                                setTimeout(function () {
                                    tahlo.classes.add("init")
                                }, 200);
                                var tx = 0,
                                    LIMIT = 200;
                                var actionPinged;

                                function update() {
                                    if (dead)
                                        return;
                                    tx = Math.min(Math.max(tx, -LIMIT), LIMIT);
                                    if (!actionPinged && Math.abs(tx) == LIMIT) {
                                        Ads.pingAction(param, "branding\x5fslide");
                                        actionPinged = true
                                    }
                                    tahlo.style.marginLeft = tx - 25 + "px";
                                    if (!supportClipPath)
                                        mainroll.style.right = (LIMIT - tx) / (2 * LIMIT / 100) + "%";
                                    else {
                                        mainroll.style.right = "0";
                                        var clipPart;
                                        if (tx > LIMIT / 2)
                                            clipPart = "100% " + (100 - 2 * (tx - LIMIT / 2) / (LIMIT / 100)) + "%, 100% 100%";
                                        else if (tx < -LIMIT / 2)
                                            clipPart = "0% " + (100 - 2 * (-tx - LIMIT / 2) / (LIMIT / 100)) + "%";
                                        else
                                            clipPart = (tx * 2 + LIMIT) / (2 * LIMIT / 100) + "% 100%";
                                        mainroll.style.clipPath = "polygon(" + (html.clientWidth / 2 + tx) + "px 160px, " + clipPart + ", 0% 100%, 0% 0%, " + (tx + LIMIT) / (2 * LIMIT / 100) + "% 0%)"
                                    }
                                }
                                var poprve = true;
                                tahlo.onmousedown = function (event) {
                                    tahlo.classes.add("hover");
                                    var x = event.clientX - tx;
                                    window.onmousemove = function (event) {
                                        tx = event.clientX - x;
                                        update()
                                    };
                                    window.onmouseup = function (event) {
                                        window.onmousemove = window.onmouseup = null;
                                        tahlo.classes.remove("hover")
                                    };
                                    if (poprve) {
                                        Log.ping(param["main"], "reklama\x5ftahaci");
                                        poprve = false
                                    }
                                    return false
                                };
                                Starter.resize(update)
                            })
                        } else if (param["dvojity"] == "stiraci") {
                            mainrollBack = "0";
                            var mainImage = document.createElement("img");
                            mainImage.onload = function () {
                                if (dead)
                                    return;
                                var width = mainImage.width;
                                var canvas = document.createElement("canvas");
                                canvas.id = "mainroll-canvas";
                                canvas.width = width;
                                canvas.height = mainImage.height;
                                canvas.style.cssText = "position: absolute; left: 50%; top: " + (offsetTop + "px") + "; margin-left: " + -width / 2 + "px";
                                element("mainroll").appendChild(canvas);
                                var context = canvas.getContext("2d");
                                context.drawImage(mainImage, 0, 0);
                                context.globalCompositeOperation = "destination-out";

                                function draw(x, y, size) {
                                    var radGrd = context.createRadialGradient(x, y, 0, x, y, size);
                                    radGrd.addColorStop(0, "rgba(0, 0, 0, 0.8)");
                                    radGrd.addColorStop(1, "rgba(0, 0, 0, 0)");
                                    context.fillStyle = radGrd;
                                    context.fillRect(x - size, y - size, size * 2, size * 2)
                                }
                                var counter = 0;
                                var counterActions = 100;

                                function melt(event) {
                                    if (dead)
                                        return;
                                    var x = event.clientX - canvas.offsetLeft;
                                    var y = event.clientY - canvas.offsetTop;
                                    var size = 40;
                                    if (y + pageYOffset > 240 && Math.abs(x - width / 2) < 515) {
                                        size += Math.random() * 20 - 5;
                                        var shake = Math.random() * 60;
                                        if (pageYOffset < 240 && y + pageYOffset - 240 < 500 - Math.abs(x - width / 2))
                                            y = 240 - pageYOffset - shake;
                                        else if (x < width / 2)
                                            x = width / 2 - 490 - shake;
                                        else
                                            x = width / 2 + 490 + shake
                                    } else {
                                        var t = +new Date;
                                        var dx = lastX - x,
                                            dy = lastY - y;
                                        var ds = dx * dx + dy * dy;
                                        if (ds > size * size && t - lastTime < 200) {
                                            var d = Math.sqrt(ds);
                                            for (var i = 0; i < d; i += size / 2) {
                                                draw(x + dx * i / d, y + dy * i / d, size)
                                            }
                                        }
                                        lastX = x;
                                        lastY = y;
                                        lastTime = t;
                                        counter++;
                                        if (counter > counterActions) {
                                            Ads.pingAction(param, "stirani\x5f" + {
                                                100: "start",
                                                400: "20",
                                                1000: "50",
                                                1500: "75",
                                                2000: "100"
                                            } [counterActions]);
                                            counterActions = {
                                                100: 400,
                                                400: 1000,
                                                1000: 1500,
                                                1500: 2000,
                                                2000: Infinity
                                            } [counterActions]
                                        }
                                        if (!(counter % 500))
                                            Log.ping(param["main"], "reklama\x5fstiraci\x5f" + counter)
                                    }
                                    draw(x, y, size)
                                }
                                var lastX = 500,
                                    lastY = 700,
                                    lastTime = 0;
                                window.addEventListener("mousemove", melt, false);
                                window.addEventListener("touchmove", function (event) {
                                    melt(event.touches[0])
                                }, false);
                                Ads.pingAction(param, "stirani\x5fready")
                            };
                            mainImage.src = param["main"]
                        } else {
                            var rollDir = param["dvojity"] > 0 ? "bottom" : "top";
                            Starter.scroll(function () {
                                if (dead)
                                    return;
                                element("mainroll").style[rollDir] = window.pageYOffset * Math.abs(param["dvojity"] / 100) + "px"
                            })
                        }
                        code.push("html.klikaci-body #mainroll {position:fixed; left: 0; top: 0; right: 0; bottom: 0; background: " + mainrollBack + "; cursor: pointer; -webkit-pointer-events: none; -moz-pointer-events: none; -ms-pointer-events: none; pointer-events: none}")
                    } else {
                        backgrounds.unshift("url('" + param["main"] + "') no-repeat " + (param["fixni-main"] ? "fixed" : "scroll") + " 50% " + (param["fixni-main"] ? offsetTop + "px" : "0"));
                        code1200.push("html.klikaci-body #main {background: url('" + param["main"] + "') no-repeat " + (param["fixni-main"] ? "fixed" : "scroll") + " 50% " + (param["fixni-main"] ? (offsetTop - 250) + "px" : "-250px") + "} html.klikaci-body #main:before, html.klikaci-body #main:after {background: url('" + param["main"] + "') no-repeat scroll 50% 0; " + (param["fixni-main"] ? "position: fixed; " : "") + "content: ''}")
                    }
                }
                code.push("html.klikaci-body body { background: " + backgrounds.join(",") + " } html.klikaci-body #main {background:0}");
                if (param["double-board"])
                    code.push(".ahead { height: 217px; }");
                else
                    Ads.ahead100();
                if (Unidata.layout == "1000/1200")
                    code.push("@media screen and (min-width:1440px) { " + code1200.join("\n") + " }");
                code.push("</style>");
                Ads.write(param.async, code.join("\n"));
                var klikaciParam = {
                    link: param["link"],
                    target: param["target"] || "\x5fblank",
                    fixni: fixed,
                    links: null
                };
                if (param["oblasti"])
                    klikaciParam.oblasti = param["oblasti"];
                if (!Storage.data.brandingCached)
                    Storage.data.brandingCached = [];
                if (param["main"] && Storage.data.brandingCached.indexOf(param["main"]) == -1) {
                    Storage.data.brandingCached.unshift(param["main"]);
                    if (Storage.data.brandingCached.length > 8)
                        Storage.data.brandingCached.length = 8;
                    Storage.update();
                    document.body.style.backgroundImage = "none";
                    Starter.add(function () {
                        document.body.style.backgroundImage = "";
                        Ads.klikaciBody(klikaciParam)
                    })
                } else {
                    Ads.klikaciBody(klikaciParam)
                }
                Ads.killBranding = function () {
                    dead = true;
                    var styleSheet = element("branding-stylesheet");
                    if (styleSheet && styleSheet.parentNode)
                        styleSheet.parentNode.innerHTML = "";
                    html.classes.remove("klikaci-body").remove("klikaci-body-siroke");
                    window.onfocus = window.onblur = document.onmousedown = document.onclick = null;
                    delete Ads.killBranding
                }
            };
            this.catalog = function (param) {
                if (!param.id)
                    param.id = uniqueId();
                Ads.write(param.async, "<div id=\"" + param.id + "\"></div>");
                Module.execute("Catalog", param)
            };
            this.scratchingBanner = function (param) {
                if (!param.id)
                    param.id = uniqueId();
                document.write("<div id=\"" + param.id + "\"></div>");
                Module.execute("ScratchingBanner", param)
            };
            this.mobilePeelOff = function (param) {
                if (!param.id)
                    param.id = uniqueId();
                document.write("<div id=\"" + param.id + "\"></div>");
                Module.execute("MobilePeelOff", param)
            };
            this.cpexSkinLinkPrefix = "";
            this.cpexSkinStoredObject = {};
            this.cpexSkin = function (skinObject) {
                if (!skinObject)
                    skinObject = Ads.cpexSkinStoredObject;
                if (skinObject.options.measurePixel) {
                    var temp = new Image();
                    temp.onerror = function () {
                        skinObject.logError("Chybn\u011B zadan\u00FD nebo nedostupn\u00FD measurePixel.")
                    };
                    temp.src = skinObject.options.measurePixel
                }
                var clickUrl = skinObject.options.clickURL;
                if (Ads.cpexSkinLinkPrefix)
                    clickUrl = Ads.cpexSkinLinkPrefix + clickUrl;
                new Ads.Branding({
                    "link": clickUrl,
                    "main": skinObject.options.creativeURL,
                    "fixni-main": true,
                    "pozadi": skinObject.options.backgroundColor,
                    "double-board": true
                });
                new Ads.StandardFlash({
                    "link": clickUrl,
                    "obrazek": "//1gr.cz/u/free.gif",
                    "rozmery": [998, 200]
                });
                Log.ping(location.href, "cpexskin\x5fshow")
            };
            this.initCpexSkin = function () {};
            window.cpexSkin = function (param) {
                Ads.cpexSkinStoredObject = param;
                window.cpexSkin = Ads.cpexSkin;
                if (localStorage.testnewritu) {
                    var s = document.createElement("script");
                    s.onload = function () {
                        cpexSkin()
                    };
                    s.src = "//1gr.cz/js/ad/cpex-skin.js";
                    document.getElementsByTagName("head")[0].appendChild(s)
                } else
                    document.write("<script src=\"//1gr.cz/js/ad/cpex-skin.js\"><\/script><script>cpexSkin()</script>")
            };
            window.CPExSkinObject = function (options) {
                Ads.cpexSkinStoredObject = {
                    options: options
                };
                window.cpexSkin = Ads.cpexSkin;
                if (localStorage.testnewritu) {
                    var s = document.createElement("script");
                    s.onload = function () {
                        Ads.cpexSkinStoredObject.logError = cpexSkinObject.logError;
                        cpexSkin()
                    };
                    s.src = "//1gr.cz/js/ad/cpex-skin.js";
                    document.getElementsByTagName("head")[0].appendChild(s)
                } else
                    document.write("<script src=\"//1gr.cz/js/ad/cpex-skin.js\"><\/script><script>Ads.cpexSkinStoredObject.logError = cpexSkinObject.logError; cpexSkin()</script>");
                throw new Error("\ud83d\ude31")
            };
            this.Adform = function (param) {
                if (!Object.defineProperty)
                    return;
                if (Ads.Adform.init)
                    Ads.Adform.init();
                if (param["druh"] == "branding") {
                    Ads.Adform.transforms.push(function (data) {
                        if (data.banner.tagId && data.banner.tagId != param["bn"])
                            return data;
                        if (data.banner.size.width < 1200)
                            return data;
                        if (param["link"])
                            data.clickUrl = param["link"] + data.clickUrl;
                        Ads.Branding({
                            "link": data.clickUrl,
                            "body": data.banner.url,
                            "body-color": "#FFF",
                            "target": data.banner.properties.landingTarget,
                            "double-board": true,
                            "fixni-body": true
                        });
                        if (param["zahodit"])
                            return;
                        data.isAdNoticeEnabled = false;
                        data.banner.size.width = param["rozmery"] ? param["rozmery"][0] : 998;
                        data.banner.size.height = param["rozmery"] ? param["rozmery"][1] : 200;
                        data.banner.url = "//1gr.cz/u/free.gif";
                        return data
                    })
                } else if (param["druh"] == "interscroller") {
                    Ads.Adform.transforms.push(function (data) {
                        if (data.banner.tagId && data.banner.tagId != param["bn"])
                            return data;
                        if (param["link"])
                            data.clickUrl = param["link"] + data.clickUrl;
                        Ads.Interscroller({
                            "link": data.clickUrl,
                            "obrazek": data.banner.url,
                            "vyska": param["vyska"]
                        });
                        if (param["zahodit"])
                            return;
                        if (data.externalScripts) {
                            if (data.externalScripts.before)
                                data.externalScripts.before.length = 0;
                            if (data.externalScripts.after)
                                data.externalScripts.after.length = 0
                        }
                        data.isAdNoticeEnabled = false;
                        data.banner.size.height = 1;
                        data.banner.size.width = 100;
                        data.banner.url = "//1gr.cz/u/free.gif";
                        return data
                    })
                }
                window.Adform = window.Adform || {};
                if (!Adform.ADFBannerParams)
                    Adform.ADFBannerParams = [];
                var origPush = Adform.ADFBannerParams.push;
                Adform.ADFBannerParams.push = function () {
                    if (Adform.ADFBannerData) {
                        Adform.ADFBannerData["URL"] = Adform.ADFBannerData["URL"].replace(/\d+$/, param["bn"]);
                        Adform.ADFBannerData["BN"] = param["bn"]
                    }
                    Adform.ADFBannerParams.push = origPush;
                    origPush.apply(this, arguments)
                };
                document.write("<script src=\"//track.adform.net/adfscript/?bn=0\"><\/script>");
                Log.pingUrl("//track.adform.net/adfscript/?bn=" + param["bn"])
            };
            this.Adform.transforms = [];
            this.Adform.init = function () {
                var banID;
                if (!window["ADFbanID"]) {
                    Object.defineProperty(window, "ADFbanID", {
                        configurable: true,
                        get: function () {
                            return banID
                        },
                        set: function (val) {
                            banID = val;
                            swapADF()
                        }
                    })
                } else
                    swapADF();

                function swapADF() {
                    var original = window.adfjsonbanners || [];
                    window.adfjsonbanners = {
                        push: function (data) {
                            window.adfjsonbanners = original;
                            for (var i = 0;
                                (i < Ads.Adform.transforms.length) && data; i++)
                                data = Ads.Adform.transforms[i](data);
                            if (data)
                                original.push(data)
                        }
                    }
                }
                delete Ads.Adform.init
            };

            function buildClickthruLink(base, link, param) {
                return base + (base.indexOf("?") > -1 ? "&" : "?") + "clickthru=" + encodeURIComponent(link) + "&clickTAG=" + encodeURIComponent(link) + (param || "")
            }

            function getBrandingBannerHTML(swf, link, size, transparent, target, mainLink) {
                if (!swf)
                    return "";
                if (swf.endsWith(".png") || swf.endsWith(".jpg"))
                    return getImageHTML(swf, (link == mainLink) ? null : link, size, target);
                else
                    return getFlashHTML(swf, link, size, transparent, target)
            };
            this.fragmentHTML = function (src, link, size, target) {
                if (!src)
                    return getImageHTML("//1gr.cz/u/free.gif", link, size, target || "\x5fblank");
                if (!/^(https?:)?\/\//.test(src)) {
                    if (/^V\d{6}_\d{6}_/.test(src))
                        return getVideoHTML("//servix.idnes.cz/media/video.aspx?idvideo=" + src + "&type=content", link, size, target || "\x5fblank");
                    return ""
                } else if (/\.(jpe?g|png|gif)([?#].*)?$/i.test(src))
                    return getImageHTML(src, link, size, target || "\x5fblank");
                else if (/\.(mpe?g|mp4|webm|ogv)([?#].*)?$/i.test(src))
                    return getVideoHTML(src, link, size, target || "\x5fblank");
                else if (/\.swf([?#].*)?$/i.test(src))
                    return getFlashHTML(src, link, size, true, target || "\x5fblank");
                else
                    return getIframeHTML(src, link, size)
            };

            function getVideoHTML(src, link, size, target) {
                var img = "<video src=\"" + src + "\" width=\"" + size[0] + "\" height=\"" + size[1] + "\" autoplay muted loop onmouseover=\"muted = false\" onmouseout=\"muted = true\" onerror=\"this.style.visibility = 'hidden'\">";
                if (!link)
                    return img;
                return "<a href=\"" + link + "\" target=\"" + (target || "\x5fself") + "\">" + img + "</a>"
            }

            function getImageHTML(src, link, size, target) {
                var img = "<img src=\"" + src + "\" width=\"" + size[0] + "\" height=\"" + size[1] + "\" border=\"0\" onerror=\"this.style.visibility = 'hidden'\">";
                if (!link)
                    return img;
                return "<a href=\"" + link + "\" target=\"" + (target || "\x5fself") + "\">" + img + "</a>"
            }

            function getIframeHTML(file, link, size) {
                var src = file + "#redir=" + encodeURIComponent(link);
                return "<iframe src=\"" + src.replace(/"/g, "&quot;") + "\" width=\"" + size[0] + "\" height=\"" + size[1] + "\" align=\"middle\" scrolling=\"no\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" allowtransparency=\"true\"></iframe>"
            }
            var bannerNo = 0;

            function getFlashHTML(swf, link, size, transparent, target) {
                if (!swf)
                    return "";
                swf = buildClickthruLink(swf, link);
                if (target)
                    swf += "&clickTarget=" + target;
                return "<embed id=\"" + uniqueId() + "\" src=\"" + swf + "\" type=\"application/x-shockwave-flash\" width=\"" + size[0] + "\" height=\"" + size[1] + "\" wmode=\"" + (transparent ? "transparent" : "window") + "\"" + " allowScriptAccess=\"always\">"
            }
            this.expandProperties = function (param) {
                if (!param["vlastnosti"])
                    return;
                var v = param["vlastnosti"].replace(/\s+/, " ").split(" ");
                for (var i = 0; i < v.length; i++) {
                    var p = v[i].indexOf("=");
                    if (p > -1) {
                        var h = v[i].substr(p + 1);
                        if (!isNaN(h))
                            h = Number(h);
                        else if (h == "false")
                            h = false;
                        else if (h == "null")
                            h = null;
                        param[v[i].substr(0, p)] = h
                    } else
                        param[v[i]] = true
                }
            };
            this.externalSticky = function (pozice, limit, delay) {
                if ((element("ads-sticky") || element("space-a") || element("c-4-sticky")) && pozice.startsWith("r") || location.href.match(/foto\.aspx.*ad=1/))
                    return;
                Misc.sticky({
                    element: (pozice || "r54.1.10.25"),
                    startOffset: 2,
                    endOffset: 28,
                    end: limit,
                    delay: delay || 1000,
                    plausibleHeight: 200,
                    defaultHeight: 600
                });
                if (!Math.floor(Math.random() * 100))
                    Log.ping(location.href, "uniuklid\x5fexternalSticky" + (pozice.startsWith("r") ? "R" : ""))
            };
            this.fixMozillaStickyRestart = function () {};
            this.StandardFlash = this.StandardBanner = function (param) {
                Ads.expandProperties(param);
                if (param["obrazek"].indexOf("n\u00E1zev souboru") > -1)
                    param["obrazek"] = "";
                Ads.selfpromo(param);
                Ads.write(param.async, Ads.fragmentHTML(param["soubor"] || param["obrazek"] || param["flash"], param["link"], param["rozmery"], param["target"]));
                if (param["rozmery"][0] == 998 && param["rozmery"][1] < 200)
                    Ads.ahead100();
                if (Ads.verzeFlashe < 7 && !param["obrazek"])
                    Log.ping(param["link"], "zmarena\x5fzobrazeni")
            };
            this.BrandingLayer = function (param) {
                var id = param["id"] || uniqueId();
                Ads.write(param.async, "<div style=\"height: 200px\" id=\"" + id + "\">" + Ads.fragmentHTML(param["soubor"], param["link"], param["rozmery"], param["target"]) + "</div>");
                if (param.full) {
                    setTimeout(function () {
                        var wrapper = element(id);
                        wrapper.firstChild.style = "display: block; margin: auto; width: " + param["rozmery"][0] + "px";
                        Starter.resize(function () {
                            var scale = Math.max(window.innerWidth / param["rozmery"][0], window.innerHeight / param["rozmery"][1]);
                            wrapper.style.cssText = "transform: scale(" + scale + "); transform-origin: 50% 0; position: fixed; top: 0; left: 0; width: 100%"
                        })();
                        var video = wrapper.getElementsByTagName("video")[0];
                        if (video) {
                            video.onmouseover = null;
                            video.loop = false
                        }
                    }, 200)
                }
            };
            var ilayerStyle = "<style>\n    .ads-ilayer { position: relative; z-index: 100; margin: auto }\n    .ads-ilayer iframe, .ads-ilayer a { position: absolute; -webkit-transition: 0.25s; -moz-transition: 0.25s; -o-transition: 0.25s; transition: 0.25s; left: 0; top: 0; z-index: 101 }\n    .ads-ilayer a video { background: #000 }\n    .ads-ilayer a, .ads-ilayer a img, .ads-ilayer a video { width: 100%; height: 100% }\n    .ads-ilayer canvas { position: absolute; left: 50%; top: 50%; margin: -50px; z-index: 102; -webkit-pointer-events: none; -moz-pointer-events: none; -ms-pointer-events: none; pointer-events: none }\n    .ads-ilayer-close { position: absolute; right: 0; top: 0; height: 1em; padding: 0 0.2em 0 0.3em; z-index: 102; background: #000; color: #fff; line-height: 1em; font-size: 2rem; text-align: center; cursor: default; border: 1px solid rgba(0,0,0,0.5); display: none; border-radius: 0 0 0 0.25em }\n    .ads-ilayer-close small { font-size: 40%; line-height: 2.5em; vertical-align: top }\n    .ads-ilayer-close:hover { color: #C00; background: #FFF }\n  </style>";
            this.Iframe = function (param) {
                Ads.ok = true;
                Ads.expandProperties(param);
                var id = param["id"] || uniqueId();
                var code = Ads.fragmentHTML(param["soubor"], param["link"], param["rozmery"], param["target"]);
                var smer = param["rozmery"][2];
                if (!smer)
                    return document.write(code);
                document.write(ilayerStyle + "<div id=\"" + id + "\" style=\"width: " + param["rozmery"][0] + "px; height: " + param["rozmery"][1] + "px; " + (param["style"] || "") + "\">" + code + "</div>");
                ilayerStyle = "";
                var num = document.createElement("canvas");
                if (!num.getContext || !window.requestAnimationFrame)
                    return;
                var wrapper = element(id);
                wrapper.classes.add("ads-ilayer");
                wrapper.appendChild(num);
                var iframe = wrapper.firstChild;
                var button = document.createElement("span");
                button.innerHTML = "<small>zav\u0159\xedt </small>\u00D7";
                button.className = "ads-ilayer-close";
                var firstClose = true;
                button.onclick = function () {
                    if (firstClose) {
                        firstClose = false;
                        Ads.pingAction(param, "ilayer\x5fclick\x5fclose")
                    }
                    close()
                };
                wrapper.appendChild(button);
                var offsetLeft = (param["rozmery"][0] - param["rozmery"][3]),
                    offsetTop = (param["rozmery"][1] - param["rozmery"][4]);
                var smerX = 1 - ((smer - 1) % 3) / 2,
                    smerY = Math.floor((smer - 1) / 3) / 2;
                button.style.right = (offsetLeft * (1 - smerX)) + "px";
                button.style.top = (offsetTop * smerY) + "px";
                num.width = num.height = 100;
                var context = num.getContext("2d");
                context.lineWidth = 2;
                context.lineJoin = "round";
                context.strokeStyle = "#FFF";
                var start;
                var out, outTimeout;
                wrapper.onmouseover = function (e) {
                    if (out) {
                        clearTimeout(outTimeout);
                        return
                    }
                    start = Date.now();
                    if (param["rozmery"][1] > param["rozmery"][0])
                        num.style.top = Math.min(Math.max(e.clientY - this.getBoundingClientRect().top, 50), param["rozmery"][1] - 50) + "px";
                    else
                        num.style.left = Math.min(Math.max(e.clientX - this.getBoundingClientRect().left, 50), param["rozmery"][0] - 50) + "px";
                    requestAnimationFrame(animation)
                };
                wrapper.onmouseout = function (e) {
                    start = null;
                    clearTimeout(outTimeout);
                    if (out)
                        outTimeout = setTimeout(function () {
                            if (firstClose) {
                                firstClose = false;
                                Ads.pingAction(param, "ilayer\x5fclose")
                            }
                            close()
                        }, 1000)
                };
                var timeout = 1800;

                function animation() {
                    context.clearRect(0, 0, 100, 100);
                    if (!start)
                        return;
                    var d = Math.min(Date.now() - start, timeout);
                    if (d == timeout)
                        return open();
                    var s = (0.5 + d / timeout) * Math.PI * 2;
                    context.beginPath();
                    context.moveTo(99, 50);
                    context.arc(50, 50, 49, 0, 2 * Math.PI);
                    context.strokeStyle = "rgba(128, 128, 128, 0.25)";
                    context.stroke();
                    context.beginPath();
                    context.moveTo(50, 50);
                    context.arc(50, 50, 48, s + (0.5) * Math.PI, Math.PI + (0.5) * Math.PI);
                    context.lineTo(50, 50);
                    context.fillStyle = "rgba(" + Math.round(34 + Math.max(d / timeout * 3000 / 10 - 150, 0)) + ", " + Math.round(34 - d / timeout * 3000 / 300) + ", " + Math.round(34 - d / timeout * 3000 / 300) + ", 0.9)";
                    context.fill();
                    context.strokeStyle = "#FFF";
                    context.stroke();
                    requestAnimationFrame(animation)
                }

                function close() {
                    setTimeout(function () {
                        out = false
                    }, 300);
                    button.style.display = "";
                    iframe.style.width = param["rozmery"][0] + "px";
                    iframe.style.height = param["rozmery"][1] + "px";
                    iframe.style.left = 0;
                    iframe.style.top = 0
                }
                var firstOpen = true;

                function open() {
                    out = true;
                    button.style.display = "block";
                    iframe.style.width = param["rozmery"][3] + "px";
                    iframe.style.height = param["rozmery"][4] + "px";
                    iframe.style.left = smerX * offsetLeft + "px";
                    iframe.style.top = smerY * offsetTop + "px";
                    if (firstOpen) {
                        firstOpen = false;
                        Ads.pingAction(param, "ilayer\x5fexpand");
                        Log.ping(param["soubor"], "reklama\x5filayer\x5fopen")
                    }
                }
                Log.ping(param["soubor"], "reklama\x5filayer\x5fview")
            };
            var popupStyle = "<style>\n    .ads-popup>div { background: #FFF; position: relative; display: inline-block; margin-top: 40px; margin-top: 2.5rem }\n    .ads-popup iframe, .ads-popup a { border: 0.5em solid #FFF; border-top: 0 }\n    .ads-popup a { display: block }\n    .ads-popup iframe, .ads-popup img { vertical-align: middle }\n    .ads-popup:before { content: ''; display: inline-block; height: 100%; vertical-align: middle }\n    .ads-popup { position: fixed; z-index: 5000; left: 0; top: 0; right: 0; bottom: 0; transition: 0.5s; -webkit-transition: 0.5s; background: rgba(0, 0, 0, 0.75); opacity: 0; text-align: center; pointer-events: none }\n    .ads-popup.show { opacity: 1; pointer-events: auto }\n    .ads-popup-head { position: relative; width: 50px; height: 14px; background: url('//1gr.cz/u/n4/r-head.gif') no-repeat; margin: 0.25em 0 0 0.5em }\n    .ads-popup-close { position: absolute; bottom: 100%; right: 0; height: 1em; padding: 0 0.2em 0 0.3em; z-index: 102; background: #FFF; color: #000; line-height: 1em; font-size: 36px; font-size: 2.25rem; text-align: center; float: right; cursor: default; border-radius: 0.25em 0.25em 0 0 }\n    .ads-popup-close small { font-size: 40%; line-height: 2.5em; vertical-align: top }\n    .ads-popup-close canvas { position: absolute; right: 100%; top: 50%; margin: -14px 3px; }\n    .ads-popup-close:hover { color: #FFF; background: #C00 }\n  </style>";
            var popupStop = false;
            this.Popup = this.Intersticial = function (param) {
                var num = document.createElement("canvas");
                if (!num.getContext || !window.requestAnimationFrame)
                    return;
                var id = uniqueId();
                if (param["rozmery"][0] > window.innerWidth * 0.9) {
                    param["rozmery"][1] *= window.innerWidth * 0.9 / param["rozmery"][0];
                    param["rozmery"][0] = window.innerWidth * 0.9
                }
                if (param["rozmery"][1] > window.innerHeight * 0.9) {
                    param["rozmery"][0] *= window.innerHeight * 0.9 / param["rozmery"][1];
                    param["rozmery"][1] = window.innerHeight * 0.9
                }
                if (param["soubor"])
                    var code = getIframeHTML(param["soubor"], param["link"], param["rozmery"]);
                else if (param["obrazek"])
                    code = getImageHTML(param["obrazek"], param["link"], param["rozmery"], "\x5fblank");
                this.popupInit = function (id) {
                    var wrapper = element(id);
                    var wrapperIn = wrapper.firstChild;
                    popupStop = true;
                    var button = document.createElement("span");
                    button.innerHTML = "<small>zav\u0159\xedt </small>\u00D7";
                    button.className = "ads-popup-close";
                    button.onclick = close;
                    wrapperIn.appendChild(button);
                    button.insertBefore(num, button.firstChild);
                    var size = 28;
                    num.width = num.height = size;
                    var context = num.getContext("2d");
                    context.fillStyle = "#FFF";
                    var timeout = (param["prodleva"] || param["cas-zobrazeni"] || 5) * 1000;
                    var start;

                    function animation() {
                        context.clearRect(0, 0, size, size);
                        var d = Math.min(Date.now() - start, timeout);
                        if (d == timeout)
                            return close();
                        var s = (0.5 + d / timeout) * Math.PI * 2;
                        context.beginPath();
                        context.moveTo(size / 2, size / 2);
                        context.arc(size / 2, size / 2, size / 2, s + (0.5) * Math.PI, Math.PI + (0.5) * Math.PI);
                        context.lineTo(size / 2, size / 2);
                        context.fill();
                        requestAnimationFrame(animation)
                    };
                    wrapper.onclick = function (e) {
                        if (e.target == this)
                            close()
                    };

                    function close() {
                        wrapper.classes.remove("show");
                        setTimeout(function () {
                            if (wrapper.parentNode)
                                wrapper.parentNode.removeChild(wrapper);
                            popupStop = false
                        }, 500)
                    }
                    setTimeout(function () {
                        wrapper.classes.add("show");
                        setTimeout(function () {
                            start = Date.now();
                            requestAnimationFrame(animation)
                        }, 500)
                    }, 50)
                };
                document.write(popupStyle + "<div id=\"" + id + "\" class=\"ads-popup\"><div><div class=\"ads-popup-head\"></div>" + code + "</div></div><script>Ads.popupInit(\"" + id + "\");<\/script>")
            };
            this.ahead100 = function () {
                var ahead = element("@#main .ahead");
                if (ahead)
                    ahead.style.height = "117px"
            };
            this.cookieLimit = function (param) {
                return false
            };
            this.SideVideo = function (param) {
                var id = uniqueId();
                var height = Math.min(1030 / 16 * 9, (window.innerHeight || 1000) - 229);
                Ads.Iframe({
                    "id": id,
                    "link": param["link"],
                    "style": "position: fixed; left: 50%; top: 229px; margin: 0 0 0 -803px",
                    "soubor": "//1gr.cz/js/ad/SideVideo.html#small=" + encodeURIComponent(param["video-male"]) + "&large=" + encodeURIComponent(param["video-velke"]) + "&direction=left",
                    "rozmery": [288, 162, 3, Math.ceil(height / 9 * 16 + 288), Math.ceil(height)],
                    "fcid": param["fcid"]
                });
                element(id).parentNode.style.position = "relative"
            };

            function uniqueId() {
                return "banner" + String(1000 + bannerNo++).substr(1)
            }
            this.uniqueId = uniqueId;
            this.interscroller = this.Interscroller = function (param) {
                var id = uniqueId();
                var height = param.vyska || 0.75;
                if (!param.pozadi) {
                    param.pozadi = param.obrazek;
                    delete param.obrazek
                }
                var styleForAnimation = '<style>@keyframes ios-interscroller-clipping-hack {from {top:0} to {top:0.01px;}}</style>';
                var background = "";
                if (/\.(jpe?g|png|gif)([?#].*)?$/i.test(param.pozadi))
                    background = styleForAnimation + "<div style=\"background: url('" + param.pozadi + "') no-repeat 50% 50%; background-size: cover; height: 100vh; width: 100%; left: 0; top: 0; position: fixed; animation: ios-interscroller-clipping-hack .1s infinite\"></div>";
                else if (/\.(mpe?g|mp4|webm|ogv)([?#].*)?$/i.test(param.pozadi))
                    background = "<video src=\"" + param.pozadi + "\" muted loop autoplay webkit-playsinline playsinline style=\"height: 100vh; width: 100%; left: 0; top: 0; position: fixed; object-fit: cover\"></video>";
                else if (/^V\d{6}_\d{6}_/.test(param.pozadi))
                    background = "<video src=\"//servix.idnes.cz/media/video.aspx?idvideo=" + param.pozadi + "&type=content\" muted loop autoplay webkit-playsinline playsinline style=\"height: 100vh; width: 100%; left: 0; top: 0; position: fixed; object-fit: cover\"></video>";
                else
                    background = "<iframe src=\"" + param.pozadi + "\" style=\"height: 100vh; width: 100%; left: 0; top: 0; position: fixed\"></iframe>";
                var foreground = param.obrazek ? "<img src=\"" + param.obrazek + "\" style=\"position: relative; z-index: 2; width: 100%\">" : "";
                Ads.write(param.async, "<a href=\"" + param["link"] + "\" id=\"" + id + "\" class=\"ads-interscroller\" target=\"" + (param.target || "\x5fblank") + "\" style=\"display: block; overflow: hidden; position: relative; height: " + (param.rozmery ? "0; padding-bottom: " + (param.rozmery[1] / param.rozmery[0] * 100).toFixed(2) + "%" : (height < 1 ? (height * 100).toFixed(1) + "vh" : height + "px")) + "; box-shadow: 0 0 7px 1px #666\"><div style=\"position: absolute; left: 0; top: 0; width: 100%; height: 100%; clip: rect(0px auto auto 0px)\">" + background + "</div>" + foreground + "</a>");
                if (param.neskryvat)
                    return;
                var banner;
                var resizeTimeout;
                var relevantWindow = window;
                try {
                    relevantWindow = top.window
                } catch (exc) {}

                function resize() {
                    clearTimeout(resizeTimeout);
                    if (!banner)
                        banner = element(id);
                    banner.style.display = (relevantWindow.innerWidth > relevantWindow.innerHeight) ? "none" : "block"
                }
                Starter.resize(function () {
                    clearTimeout(resizeTimeout);
                    resizeTimeout = setTimeout(resize, 100)
                });
                Starter.add(resize, true)
            };
            this.mobilniParalax = this.MobilniParalax = function (param) {
                var id = uniqueId();
                var height = param.vyska || 210;
                Ads.write(param.async, "<a id=\"" + id + "\" href=\"" + param["link"] + "\" target=\"" + (param.target || "\x5fblank") + "\" style=\"display: block; background: url('" + param.obrazek + "') no-repeat 50% 50%; background-size: cover; overflow: hidden; height: " + (height < 1 ? (height * 100).toFixed(1) + "vh" : height + "px") + "\"></a>");
                var underflow = 1.22;
                var banner;

                function roll() {
                    if (!banner)
                        banner = element(id);
                    var rect = banner.getBoundingClientRect();
                    var part = rect.top / (window.innerHeight - (height < 1 ? height * innerHeight : height));
                    banner.style.backgroundPosition = "50% " + Math.round((part * (1 + 2 * underflow) - underflow) * 1000) / 10 + "%"
                }
                Starter.scroll(roll);
                Starter.add(roll, true)
            };
            this.mobilniSticky = this.MobilniSticky = function (param) {
                if (document.cookies.read("nosticky"))
                    return;
                var schema = {
                    "light": {
                        color: "#FFF",
                        backdrop: "rgba(102, 102, 102, 0.8)",
                        background: "#000"
                    },
                    "dark": {
                        color: "#000",
                        backdrop: "rgba(153, 153, 153, 0.9)",
                        background: "#FFF"
                    }
                } [window.FX ? FX.vzhled.schema : "light"];
                var id = uniqueId();
                Ads.write(param.async, "<div id=\"" + id + "\" style=\"bottom: 0; display: none; z-index: 1000; position: fixed; background: " + schema.backdrop + "; text-align: center; opacity: 0; transition: transform 1s, opacity 1s; -webkit-transition: -webkit-transform 1s, opacity 1s; width: 100%; left: 0; padding-top: 3px; -webkit-transform: translateY(0); transform: translateY(0)\"></div>");
                var wrapper = element(id);
                if (!wrapper)
                    return;
                var visible = 0;
                try {
                    Ads.positionFromElement(wrapper).visible = function () {
                        return visible
                    }
                } catch (exc) {}
                var close = document.createElement("a");
                wrapper.appendChild(close);
                close.innerHTML = "Zav\u0159\xedt reklamu";
                close.style.cssText = "padding: 10px 10px 5px; color: " + schema.color + "; background: " + schema.backdrop + "; position: absolute; right: 0; bottom: 100%";
                close.onclick = function () {
                    wrapper.parentNode.removeChild(wrapper);
                    html.classes.remove("sticky-bottom");
                    document.body.style.paddingBottom = "";
                    document.cookies.write("nosticky", 1, new Date(+new Date() + (param.cookieMin || 90) * 6e4));
                    Ads.pingAction(param, "ilayer\x5fclick\x5fclose");
                    visible = 0
                };
                var link = document.createElement("a");
                link.href = param.link;
                link.target = param.target || "\x5fblank";
                link.style.cssText = "clear: both; color: " + schema.color + "; line-height: 1.5em; font-size: 110%; " + (param.obrazek ? "display: inline-block" : "display: block; padding: 0.4em 0.8em; background: " + schema.background);
                wrapper.appendChild(link);
                if (param.obrazek) {
                    var image = document.createElement("img");
                    image.style.cssText = "max-width: 100%; vertical-align: middle; max-height: 17vh";
                    image.onload = initSticky;
                    link.appendChild(image);
                    image.src = param.obrazek
                } else {
                    link.innerHTML = param.html;
                    Starter.add(initSticky)
                }

                function initSticky() {
                    wrapper.style.display = "";
                    var height = link.offsetHeight + close.offsetHeight;
                    wrapper.style.bottom = -height + "px";
                    document.body.style.paddingBottom = link.offsetHeight + "px";
                    var n = 0;
                    var interscroller = element("@.ads-interscroller");
                    window.addEventListener("scroll", function onscroll() {
                        if (interscroller && interscroller.getBoundingClientRect().bottom > 0)
                            return;
                        if (++n < 5)
                            return;
                        window.removeEventListener("scroll", onscroll, false);
                        wrapper.style.transform = wrapper.style.WebkitTransform = "translateY(" + -height + "px)";
                        wrapper.style.opacity = 1;
                        html.classes.add("sticky-bottom");
                        visible = 1;
                        if (Ads.visibilityCheck)
                            Ads.visibilityCheck()
                    }, false)
                }
            };
            this.Vignette = function (param) {
                var code = Ads.fragmentHTML(param["soubor"], param["link"], param["rozmery"], param["target"]);
                document.addEventListener("click", function onclick(event) {
                    var target = event.target;
                    while (target && target.tagName != "A")
                        target = target.parentNode;
                    if (!target)
                        return;
                    if (target.hostname == location.hostname) {
                        magic(target);
                        event.preventDefault();
                        document.removeEventListener("click", onclick, false)
                    }
                }, false);

                function magic(target) {
                    var link = document.createElement("a");
                    link.innerHTML = "P\u0159esko\u010Dit reklamu \u203A";
                    link.style.cssText = "position: absolute; right: 0; top: 0; background: #333; color: #FFF; font-size: 150%; line-height: 2em; padding: 0 0.5em; text-align: right;";
                    link.href = target.href;
                    link.onclick = function () {
                        location.replace(this.href);
                        return false
                    };
                    history.pushState({}, "Reklama", target.href);
                    var body = document.createElement("body");
                    body.style.cssText = "display: table-cell; vertical-align: middle; padding: 4em 0 0 0; background: #000;";
                    body.innerHTML = code;
                    body.appendChild(link);
                    var oldBody = document.body;
                    document.documentElement.removeChild(oldBody);
                    document.documentElement.appendChild(body);
                    window.onpopstate = function () {
                        document.documentElement.removeChild(body);
                        document.documentElement.appendChild(oldBody)
                    }
                }
            };
            this.Sow = function (param) {
                var supportsFixed = !navigator.userAgent.match(/android|ios|mobile/i) || navigator.userAgent.match(/windows/i);
                var id = uniqueId();
                var limit = param.limit || Math.min(1030, param.rozmery[0]);
                Ads.write(param.async, "<a id=\"" + id + "\" href=\"" + param["link"] + "\" target=\"" + (param.target || "\x5fblank") + "\" style=\"display: block; background: url('" + param.obrazek + "') no-repeat 50% 100%" + (supportsFixed ? " fixed" : "") + "; margin: auto; max-width: " + param.rozmery[0] + "px; height: " + param.rozmery[1] + "px\"></a>");
                var lastFix = true;
                var lastSize = param.rozmery[1];
                var ratio = limit / param.rozmery[1];
                Starter.resize(function () {
                    var size = Math.min(html.clientWidth, limit) / ratio;
                    if (lastSize == size)
                        return;
                    element(id).style.height = size + "px";
                    element(id).style.backgroundSize = "auto " + size + "px";
                    lastSize = size
                })();
                Starter.scroll(function () {
                    var banner = element(id);
                    var rect = banner.getBoundingClientRect();
                    if (supportsFixed) {
                        var fix = rect.bottom > (html.clientHeight);
                        if (lastFix == fix)
                            return;
                        banner.style.backgroundAttachment = fix ? "fixed" : ""
                    } else {
                        var fix = Math.max(Math.min(-rect.top + window.innerHeight - lastSize, 0), -lastSize);
                        if (lastFix == fix)
                            return;
                        banner.style.backgroundPosition = "50% " + fix + "px"
                    }
                    lastFix = fix
                })()
            };
            this.Native = function (param) {
                var position = Ads.positions[param["area"]];
                var template = position.nativeHTML;
                if (!template.trim())
                    template = param["template"];
                var imgs = [];
                for (var i = 0; i < param["obrazky"].length; i++) {
                    var obrazek = param["obrazky"][i];
                    var img = {
                        ratio: obrazek[0] / obrazek[1],
                        url: obrazek[2]
                    };
                    imgs.push(img)
                }
                var code = template.replace(/https?:\/\/[^)"';]+/g, function (m) {
                    var mi = m.match(/https?:\/\/1gr.cz\/u\/free\.gif[\?\#](\d+)[x;,](\d+)/i);
                    if (mi) {
                        var ratio = mi[1] / mi[2];
                        var minRd = Infinity;
                        var url;
                        for (var i = 0; i < imgs.length; i++) {
                            var rd = Math.abs(imgs[i].ratio - ratio);
                            if (rd < minRd) {
                                url = imgs[i].url;
                                minRd = rd
                            }
                        }
                        if (url)
                            return url;
                        return "https://1gr.cz/u/free.gif"
                    }
                    return param["link"]
                }).replace(/\{NADPIS[^\}]*\}/gi, param["nadpis"]).replace(/\{POPISEK[^\}]*\}/gi, param["popisek"]).replace(/ads\-mockup/g, "");
                position.parent.innerHTML = code
            };
            this.preroll = function (idostrova, parent, callback) {
                Ads.video(idostrova, "pouze", parent, callback)
            };
            this.video = function (idostrova, pozice, parent, callback) {
                Misc.video({
                    data: "//servix.idnes.cz/media/video.aspx?reklama=" + pozice + "&idostrova=" + idostrova,
                    ratio: 16 / 9,
                    writeTo: parent,
                    autostart: true,
                    onended: function () {
                        element(parent).innerHTML = "";
                        setTimeout(callback, 120)
                    }
                })
            };
            this.outstream = function (idostrova) {
                var id = "ad-outstream" + Math.floor(Math.random() * 100000);
                document.write("<div id=\"" + id + "\" style=\"height: 0; overflow: hidden; transition: 0.25s\"></div>");
                var loaded;
                var wrapper;
                Starter.scroll(function () {
                    if (loaded)
                        return;
                    wrapper = wrapper || element(id);
                    var rect = wrapper.getBoundingClientRect();
                    if (rect.top > window.innerHeight || rect.bottom < 0)
                        return;
                    var started;
                    Misc.video({
                        data: "//servix.idnes.cz/media/video.aspx?reklama=outstream&idostrova=" + idostrova,
                        ratio: 16 / 9,
                        initVolume: 0,
                        writeTo: id,
                        autostart: 3000,
                        dirty: "outstream",
                        onplay: function () {
                            if (started)
                                return;
                            wrapper.style.height = wrapper.scrollHeight + "px";
                            started = true
                        },
                        onended: function () {
                            if (!started) {
                                wrapper.innerHTML = "<iframe src=\"//servis.idnes.cz/reklama/zviratko.aspx?sekce=" + idostrova + "&pozice=76&html=iframe\" width=\"480\" height=\"300\" scrolling=\"no\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" allowtransparency=\"true\"></iframe>";
                                wrapper.style.height = "300px"
                            }
                        },
                        onrelated: function (param) {
                            if (!started)
                                return;
                            if (param && param.count)
                                return;
                            wrapper.style.height = 0;
                            setTimeout(function () {
                                wrapper.parentNode.removeChild(wrapper)
                            }, 300)
                        }
                    });
                    loaded = true
                })()
            };
            var outstreamStyle = "<style>\n    .ads-outstream { height: 0; overflow: hidden; transition: 0.25s; position: relative }\n    .ads-outstream toolbar { display: inline-block; width: auto; height: auto; top: 0.25em; left: 0.25em; z-index: 3 }\n    .ads-outstream toolbar *, .ads-outstream videoplayer a ~ skip { display: none }\n    .ads-outstream toggle.volume, .ads-outstream toggle.mute { display: block; cursor: default }\n    .ads-outstream related replay:after { left: 0.25em; top: 0.25em; margin: 0 }\n    .ads-outstream videoplayer.ended related replay:before { color: transparent; height: 100% }\n    .ads-outstream videoplayer.ended related replay:after { width: 3em; height: 3em }\n    .ads-outstream videoplayer.ended toolbar { display: none }\n    .ads-outstream-close { position: absolute; right: 0; top: 0; height: 1em; padding: 0 0.2em 0 0.3em; z-index: 102; background: #000; color: #fff; line-height: 1em; font-size: 2rem; text-align: center; cursor: default; border: 1px solid rgba(0,0,0,0.5); display: none; border-radius: 0 0 0 0.25em }\n    .ads-outstream-close small { font-size: 40%; line-height: 2.5em; vertical-align: top }\n    .ads-outstream-close:hover { color: #C00; background: #FFF }\n  </style>";
            this.outstreamSAS = function (timeout, passback) {
                var id = "ad-outstream" + Math.floor(Math.random() * 100000);
                document.write(outstreamStyle + "<div id=\"" + id + "\" class=\"ads-outstream\"></div>");
                outstreamStyle = "";
                var loaded;
                var wrapper;
                Starter.scroll(function () {
                    if (loaded)
                        return;
                    wrapper = wrapper || element(id);
                    var rect = wrapper.getBoundingClientRect();
                    if (rect.top > window.innerHeight || rect.bottom < 0)
                        return;
                    var button = document.createElement("span");
                    button.innerHTML = "<small>zav\u0159\xedt </small>\u00D7";
                    button.className = "ads-outstream-close";
                    button.onclick = close;
                    wrapper.appendChild(button);
                    var videoWrapper = document.createElement("div");
                    wrapper.appendChild(videoWrapper);

                    function close() {
                        timeout = 0;
                        wrapper.style.height = 0;
                        setTimeout(function () {
                            wrapper.parentNode.removeChild(wrapper)
                        }, 300)
                    }
                    var started;
                    Misc.video({
                        data: {
                            "items": [{
                                "type": "VAST2",
                                "sasCount": 1
                            }],
                            "skipTimeMax": 60
                        },
                        ratio: 16 / 9,
                        initVolume: 0,
                        writeTo: videoWrapper,
                        autostart: 3000,
                        dirty: "outstream",
                        onplay: function () {
                            if (started)
                                return;
                            wrapper.style.height = wrapper.scrollHeight + "px";
                            button.style.display = "block";
                            started = true
                        },
                        onended: function () {
                            if (!started)
                                timeout = 0;
                            if (isFinite(timeout))
                                setTimeout(function () {
                                    if (!passback)
                                        close();
                                    else {
                                        wrapper.style.height = "300px";
                                        button.style.display = "";
                                        wrapper.innerHTML = "";
                                        passback(id)
                                    }
                                }, timeout)
                        }
                    });
                    loaded = true
                })()
            };
            this.PRClanek = function (param) {
                if (!param.id)
                    param.id = uniqueId();
                document.write("<div id=\"" + param.id + "\"></div>");
                setTimeout(function () {
                    var wrapper = element(param.id);
                    Loader.load(DATA_ASPX + "type=prclanek&c=" + param["clanek"] + "&template=" + wrapper.parentNode.getAttribute("data-template"), function (html) {
                        wrapper.innerHTML = html;
                        var links = wrapper.getElementsByTagName("a");
                        for (var i = links.length - 1; i >= 0; i--)
                            links[i].href = param["link"] + links[i].href
                    })
                }, 20)
            };
            this.prokliky = function (param) {
                if (!param["link"])
                    return;
                var wrapper = element(param.obal);
                for (var i = 0, a; a = wrapper.getElementsByTagName("a")[i]; i++) {
                    a.href = param["link"] + a.href;
                    a.target = "\x5fblank"
                }
            };
            this.Cube = function (param) {
                if (!param.id)
                    param.id = uniqueId();
                document.write("<div id=\"" + param.id + "\"></div>");
                Module.execute("Cube", param)
            };
            this.Cascade = function (param) {
                if (!param.id)
                    param.id = uniqueId();
                document.write("<div id=\"" + param.id + "\"></div>");
                Module.execute("Cascade", param)
            };
            this.sklik = function (param) {
                if (!param.id)
                    param.id = "sklik" + Math.floor(Math.random() * 100000);
                document.write("<div id=\"" + param.id + "\"></div>");
                Module.execute("Sklik", param)
            };
            this.sklikSSP = function (param) {
                if (!param.id)
                    param.id = "sklik" + Math.floor(Math.random() * 100000);
                document.write("<div id=\"" + param.id + "\"></div>");
                Module.execute("SklikSSP", param)
            };
            this.ping = function (url) {
                if (!/^(?:https?:)?\/\//.test(url))
                    return;
                var url = url.replace(/\[timestamp\]/gi, +new Date);
                if (url.indexOf(" ") == -1)
                    return Log.pingUrl(url);
                var urls = url.split(" ");
                for (var i = 0; i < urls.length; i++)
                    Log.pingUrl(urls[i])
            };
            this.pingAction = function (param, action) {
                if (Ads.sasSite || param["fcid"] || param["area"])
                    Log.pingUrl(SAS_SERVER + "count/actname=" + action + (Ads.sasSite ? "/site=" + Ads.sasSite : "") + (param["area"] ? "/area=" + param["area"] : "") + (param["fcid"] ? "/fcid=" + param["fcid"] : ""))
            };
            this.zalogujAdform = function () {
                if (!window.Adform || !Adform.adRegister)
                    return;
                var i = 0;
                for (var n in Adform.adRegister) {
                    if (isNaN(n) || n.length < 4)
                        continue;
                    var ad = Adform.adRegister[n] && Adform.adRegister[n].adBox && Adform.adRegister[n].adBox["\x5fattributes"];
                    if (!ad)
                        continue;
                    (function (ad, n) {
                        setTimeout(function () {
                            Log.ping("http://1gr.cz/reklama/demo/izolovany-adform.html?bn=" + n, "adform\x5f" + ad.width + "x" + ad.height)
                        }, i * 500)
                    })(ad, n);
                    i++
                }
            };
            this.verzeFlashe = (function () {
                var status = document.cookies.read("flashver");
                if (status)
                    return status * 1;
                else {
                    var verze = Misc.verze("flash")[0];
                    if (verze) {
                        var chromej = navigator.userAgent.match(/Chrome\/(\d+)/);
                        if (chromej && chromej[1] >= 45) {
                            var ft = -verze;
                            document.cookies.write("flashver", ft, (new Date()).addDate(10000));
                            return ft
                        } else
                            Starter.add(function () {
                                Ads.flashTestCallback = function () {
                                    delete Ads.flashTestCallback
                                };
                                var embed = document.createElement("embed");
                                embed.type = "application/x-shockwave-flash";
                                embed.src = "//1gr.cz/swf/flashtest.swf?nazev=Ads.flashTestCallback";
                                embed.setAttribute("allowscriptaccess", "always");
                                embed.style.cssText = "position: fixed; left: -1000px; top: -1000px; width: 1px; height: 1px";
                                document.body.insertBefore(embed, document.body.firstChild);
                                setTimeout(function () {
                                    var ft = Ads.flashTestCallback ? -verze : verze;
                                    document.cookies.write("flashver", ft, (new Date()).addDate(10));
                                    Ads.verzeFlashe = ft
                                }, 2000)
                            })
                    } else
                        document.cookies.write("flashver", "0", (new Date()).addDate(10))
                }
                return Misc.verze("flash")[0]
            })();
            this.povolen = true
        }
        ());
    Ads.positions = {};
    Ads.bmone2 = function (param) {
        Log.ping(location.href, "uniuklid\x5fbmone2")
    };
    Ads.lazyLoad = function (ads) {
        for (var n in ads) {
            if (!Ads.positions[n] || !Ads.positions[n].parent) {
                delete ads[n];
                continue
            }
            Ads.positions[n].parent.style.display = "block"
        }
        var loadTimeout;

        function check() {
            for (var n in ads) {
                if ((ads[n] <= 1) ? (Ads.positions[n].visible() < ads[n]) : (Ads.positions[n].visible(ads[n]) <= 0))
                    continue;
                clearTimeout(loadTimeout);
                loadTimeout = setTimeout(function (n) {
                    return function () {
                        Ads.positions[n].refresh();
                        delete ads[n];
                        check()
                    }
                }(n), 500)
            }
        }
        Starter.add(function () {
            Starter.scroll(check);
            check()
        })
    };
    Ads.setPageTracker = function (id, nazev) {
        var div = element(id);
        if (div)
            div.onclick = function (e) {
                var event = e || window.event;
                var target = event.target || event.srcElement;
                while (target && target.tagName != "A")
                    target = target.parentNode;
                if (!target)
                    return true;
                pageTracker["\x5ftrackPageview"]("/odchozi/" + nazev + "/" + location.hostname);
                return true
            }
    };
    Ads.occidendum = [];
    setTimeout(Ads.zalogujAdform, 10000);
    if (window.getComputedStyle)
        setTimeout(function () {
            var e = element("@menu");
            if (e && parseInt(getComputedStyle(e, "").paddingLeft) > 20)
                Log.ping(location.href, "unicss\x5fchybi4")
        }, 5000);
    Ads.sasViewID = Math.floor(Math.random() * 9e7) + 1e7;
    Ads.loadSAS = function (param) {
        var parts = [];
        for (var n in param)
            parts.push(n);
        if (parts.length == 1)
            return;
        parts.sort(function (a, b) {
            return a.substr(1) - b.substr(1)
        });
        var urlParts = [SAS_SERVER + "bserverj"];
        for (var i = 0; i < parts.length; i++) {
            urlParts.push(parts[i]);
            if (parts[i] == "ball")
                urlParts.push("random=" + (Math.floor(Math.random() * 9e7) + 1e7));
            for (var n in param[parts[i]])
                urlParts.push(n + "=" + param[parts[i]][n])
        }
        var xhr = new XMLHttpRequest();
        xhr.open("GET", urlParts.join("/"), true);
        xhr.withCredentials = true;
        xhr.onreadystatechange = function () {
            if (xhr.readyState != 4 || xhr.status != 200)
                return;
            var data = JSON.parse(xhr.responseText);
            for (var i = 0; i < data.length; i++)
                (function (i) {
                    var bparam = param[parts[i + 1]];
                    var area = bparam.area;
                    var code = data[i];
                    var meta = code.match(/<!--SASF_FCID=(\d*) SASF_CAMPID=(\d*) SASF_PRODUCTID=(\d*)-->/);
                    if (meta) {
                        code = "<!-- spir.czMonS[20\x5fC" + meta[2] + "\x5f" + meta[3] + "\x5fCPT\x5f" + meta[1] + "] -->" + code + "<!-- spir.czMonE -->";
                        if (Ads.positions[area]) {
                            var fcid = +meta[1];
                            Ads.positions[area].fcid = fcid;
                            if (Ads.positions[area].reportView)
                                clearTimeout(Ads.positions[area].reportView.timeout);
                            var pingParts = [SAS_SERVER + "count/fcid=" + fcid + "/act=4"];
                            for (var n in param["ball"])
                                if (!bparam[n])
                                    pingParts.push(n + "=" + param["ball"][n]);
                            for (var n in bparam)
                                pingParts.push(n + "=" + bparam[n]);
                            Ads.positions[area].reportView = {
                                link: pingParts.join("/")
                            }
                        }
                    }
                    try {
                        element(area).innerHTML = "";
                        postscribe("#" + area, code, {
                            error: function (p) {
                                Log.ping(p.msg || location.href, "logsas_postscribe_fail")
                            }
                        })
                    } catch (exc) {
                        setTimeout(function () {
                            console.error("\ud83e\udd11 SAS: Vadn\u00FD k\u00F3d pro pozici " + area + ":\n" + code);
                            throw exc
                        }, 1)
                    }
                })(i);
            if (Ads.visibilityCheck)
                Ads.visibilityCheck()
        };
        xhr.send();
        if (Ads.sasPingUrl)
            Log.ping(urlParts.join("/"), "logsas_serve_url")
    };
    Ads.sasData = {};
    Ads.serve = function (param) {
        if (!window.Helper)
            Log.ping(location.href, "uniuklid\x5fbezpaticky\x5fadsserve");
        var previewSas = location.href.match(/[?#&](sas[^?=&]*)=(\w+)/);
        if (previewSas) {
            Ads.sasPreviewParam = param;
            document.write("<script src=\"https://generix.idnes.cz/reklama/" + previewSas[1] + ".aspx?creative=" + previewSas[2] + "\"><\/script>");
            return
        }
        var logId = (location.hostname == "www.expres.cz") ? "expres" : Unidata.ostrov;
        var slots = param.slots || param;
        var sasSlots = [];
        for (var i = 0; i < slots.length; i++) {
            if (!element(slots[i].id))
                continue;
            if (slots[i].provider == "bb")
                continue;
            if (!/^\d/.test(slots[i].id)) {
                try {
                    var sasCount = document.querySelectorAll("#" + slots[i].id).length;
                    if (sasCount > 1) {
                        console.warn("\ud83e\udd11 SAS: Ve str\u00E1nce je " + sasCount + "\u00D7 id=\"" + slots[i].id + "\".");
                        continue
                    }
                } catch (exc) {}
            }
            sasSlots.push(slots[i])
        }
        var sasData = {
            "ball": {
                "site": param.site || Unidata.rodina || "idnes"
            }
        };
        Ads.sasSite = param.site;
        sasData["ball"].viewid = Ads.sasViewID;
        if (param.section)
            sasData["ball"]["section"] = param.section;
        var keywords = Unidata.keywords && Unidata.keywords.length ? Unidata.keywords.slice(0) : [];
        if (Unidata.articleType)
            keywords.push(Unidata.articleType);
        var p = document.cookies.readDictionary("personalizace");
        keywords.push("user\x5f" + (p && p["PREMIUMstatus"] || 0));
        sasData["ball"]["oriskeywords"] = keywords.join(",");
        var euconsent = document.cookies.read("euconsent");
        if (euconsent) {
            sasData["ball"]["consent"] = euconsent;
            sasData["ball"]["gdpr"] = "1"
        }
        var segments = document.cookies.read("cpex2ibb");
        if (segments)
            sasData["ball"]["seg"] = segments.replace(/^[^=]+=|&.*/g, "").replace(/\:/g, ",");
        sasData["ball"]["ab"] = (Math.random() < 0.5 ? "a" : "b");
        if (window.innerWidth && window.innerHeight) {
            sasData["ball"]["dev_display_width"] = String(innerWidth).padLeft(4, "0");
            sasData["ball"]["dev_display_height"] = String(innerHeight).padLeft(4, "0")
        }
        Ads.sasData = sasData;
        Ads.visibilityCheck = visibilityCheck;
        if (sasSlots.length) {
            function reload() {
                console.log("\ud83e\udd11 SAS: Prob\u00EDh\u00E1 refresh pozice \u201E" + this.area + "\u201C.");
                this.clear();
                var sasParamOne = {
                    "ball": sasData["ball"]
                };
                sasParamOne["b" + this.position] = this.param;
                Ads.loadSAS(sasParamOne)
            }
            window.sasBiddingDone = function () {
                console.log("\ud83e\udd11 SAS: Vyvol\u00E1n sasBiddingDone po Ads.serve a sasBidding " + (window.sasBidding ? "je" : "nen\u00ED") + " napln\u011Bn\u00FD.");
                var sasParamBidding = {
                    "ball": sasData["ball"]
                };
                for (var i = 0; i < sasSlots.length; i++) {
                    var ad = Ads.positions[sasSlots[i]["position"]];
                    if (sasSlots[i]["bidding"] && window.sasBidding) {
                        sasSlots[i]["bidding"] = false;
                        if (sasBidding[sasSlots[i]["id"]])
                            for (var n in sasBidding[sasSlots[i]["id"]])
                                Ads.positions[sasSlots[i]["position"]].param[n] = sasBidding[sasSlots[i]["id"]][n];
                        sasParamBidding["b" + ad.position] = ad.param
                    }
                }
                Ads.loadSAS(sasParamBidding)
            };

            function clear() {
                this.parent.innerHTML = "";
                if (this.isBranding) {
                    if (Ads.killBranding)
                        Ads.killBranding();
                    if (window.AdTrack && AdTrack.DOM && AdTrack.DOM.resetBranding)
                        AdTrack.DOM.resetBranding()
                }
            }
            if (window.sasBidding)
                console.log("\ud83e\udd11 SAS: P\u0159i vol\u00E1n\u00ED Ads.serve u\u017E je sasBidding napln\u011Bn\u00FD.");
            for (var i = 0; i < sasSlots.length; i++) {
                var ad = {};
                ad.area = sasSlots[i]["id"];
                ad.style = "display:block";
                ad.parent = element(sasSlots[i]["id"]);
                ad.nativeHTML = ad.parent.innerHTML;
                ad.position = sasSlots[i]["position"];
                ad.isBranding = sasSlots[i]["branding"];
                ad.param = {
                    "size": sasSlots[i]["sas-size"],
                    "area": sasSlots[i]["id"]
                };
                if (sasSlots[i]["site"])
                    ad.param["site"] = sasSlots[i]["site"];
                if (sasSlots[i]["section"])
                    ad.param["section"] = sasSlots[i]["section"];
                if (sasSlots[i]["bidding"]) {
                    if (window.sasBidding && sasBidding[sasSlots[i]["id"]]) {
                        sasSlots[i]["bidding"] = false;
                        for (var n in sasBidding[sasSlots[i]["id"]])
                            ad.param[n] = sasBidding[sasSlots[i]["id"]][n]
                    } else
                        sasSlots[i]["postponed"] = true
                }
                ad.refresh = reload.bind(ad);
                ad.clear = clear;
                ad.visible = function (tolerance) {
                    try {
                        var rect = this.parent.getBoundingClientRect();
                        if ("width" in rect && !rect.width)
                            return 0
                    } catch (e) {
                        return 0
                    }
                    tolerance = tolerance || 0;
                    return Math.max(0, Math.min(rect.right, (window.innerWidth || document.documentElement.clientWidth) + tolerance) - Math.max(rect.left, -tolerance)) * Math.max(0, Math.min(rect.bottom, (window.innerHeight || document.documentElement.clientHeight) + tolerance) - Math.max(rect.top, -tolerance)) / ((rect.right - rect.left) || 1) / ((rect.bottom - rect.top) || 1)
                };
                ad.setVisibilityCallback = function (callback) {
                    if (this.reportView)
                        this.reportView.callback = callback;
                    else
                        setTimeout(callback, 1000)
                };
                if (!sasSlots[i]["postponed"]) {
                    sasData["b" + ad.position] = ad.param
                }
                Ads.positions[ad.position] = ad;
                Ads.positions[sasSlots[i]["id"]] = ad;
                if (sasSlots[i]["reload"]) {
                    var refreshInterval = setInterval(ad.refresh, sasSlots[i]["reload"] * 1000);
                    setTimeout(function () {
                        clearInterval(refreshInterval)
                    }, sasSlots[i]["reload"] * 10100)
                }
            }
            Ads.loadSAS(sasData)
        }
        Ads.getVASTLink = function (params) {
            var options = {
                "random": (Math.floor(Math.random() * 9e7) + 1e7)
            };
            for (var n in sasData["ball"])
                options[n] = sasData["ball"][n];
            for (var n in params)
                options[n] = params[n];
            var urlParts = [SAS_SERVER + "tserver/ball"];
            for (var n in options)
                urlParts.push(n + "=" + options[n]);
            return urlParts.join("/")
        };
        if (Starter.SASReady) {
            for (var i = 0; i < Starter.SASReady.length; i++)
                Starter.SASReady[i]();
            Starter.SASReady.length = 0
        }

        function visibilityCheck() {
            var tabVisible = !(document.hidden || document.mozHidden || document.webkitHidden);
            for (var i = 0; i < sasSlots.length; i++) {
                var ad = Ads.positions[sasSlots[i]["id"]];
                if (!ad || !ad.reportView)
                    continue;
                var inView = tabVisible && ad.visible() > 0.5;
                if (ad.reportView.current == inView)
                    continue;
                ad.reportView.current = inView;
                clearTimeout(ad.reportView.timeout);
                if (inView)
                    (function (ad) {
                        ad.reportView.timeout = setTimeout(function () {
                            Log.pingUrl(ad.reportView.link);
                            if (ad.reportView.callback)
                                ad.reportView.callback();
                            delete ad.reportView
                        }, 1000)
                    })(ad)
            }
        }
        Starter.scroll(visibilityCheck);
        Starter.resize(visibilityCheck);
        Starter.visibility(visibilityCheck);
        Starter.add(visibilityCheck)
    };
    Ads.positionFromElement = function (node) {
        if (typeof node == "string")
            node = element(node);
        for (var n in Ads.positions)
            if (Ads.positions[n].parent == node.parentNode || Ads.positions[n].parent == node.parentNode.parentNode)
                return Ads.positions[n]
    }
}
Ads.nonfocus();