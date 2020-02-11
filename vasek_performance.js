//window.performance.getEntries().filter((item) => item.name.indexOf('adpod') != -1)


(function (w) {
    var path = 'https://mer.stdout.cz/l.gif?s=pramon&v=1&e=view&';
    var id = "b:vs:aktualnehp",
        site = "aktualnehp",
        typ = "listing";
    var getTime = function () {
        return new Date().getTime();
    };
    var now = getTime();
    var hasPerformance = !!w.performance;
    var hasPerformanceNow = hasPerformance && typeof w.performance.now === 'function';
    var getPerfTime = function () {
        return parseInt(
            hasPerformanceNow &&
            w.performance.now() ||
            (getTime() - now) ||
            0, 10);
    };
    var resource = '&bt=' + typ + '&bs=' + site + '&bi=' + id + '&br=' + (Math.floor(Math.random() * 1e9).toString(36));
    var hasBeacon = !!navigator.sendBeacon;
    w.bbxtrck = {
        leaderCheckInterval: 250,
        leaderTimeout: 50,
        startTime: now,
        perfTime: getPerfTime(),
        getPerfTime: getPerfTime,
        getTime: getTime,
        hasBeacon: hasBeacon,
        hasPerformance: hasPerformance,
        hasPerformanceNow: hasPerformanceNow,
        active: {
            dom: true,
            load: true,
            leader: true,
            resource: true,
            unload: true,
            bbxError: true,
            sasSpeed: true
        },
        setActive: function (state) {
            this.active = state || {};
        },
        used: {},
        track: function (name, params, repeat) {
            var src = this.getTrackUri(name, params, repeat);
            if (src) {
                var im = new Image();
                return im.src = src;
            }
        },
        getTrackUri: function (name, params, readOnly) {
            var tr = this.pramons[name];
            if (tr) {
                var uri = tr + '&nm=' + name + '&mt=' + now + '&bp=' + this.getPerfTime() + resource + (params || '');
                if (readOnly) {
                    return uri;
                }
                if (!this.used[name]) {
                    return this.used[name] = uri;
                }
            }
            return false;
        },
        id: id,
        site: site,
        type: typ,
        resource: resource,
        pramons: {
            visit: path + 't=B23dXNkT',
            resource: path + 't=NCxsF2PK',
            checkAB: 'https://r.i0.cz/l.gif?s=pramon&v=1&e=view&t=FMCmmHJY',
            dom: path + 't=HkF5SttR',
            unload: path + 't=MeAOkuJ5',
            load: path + 't=JKXHkjxM',
            expectedLeader: path + 't=Iwpkonva',
            noLeader: path + 't=DYeAXxOR',
            badLeader: path + 't=OBUBzbv8',
            successLeader: path + 't=B0SLOzJE',
            bbxError: path + 't=DbfxLMIf',
            sasSpeed: path + 't=Ki5E8aup'
        }
    };
    w.bbxtrck.track('visit');
    w.bbxtrck.track('checkAB');
})(window);