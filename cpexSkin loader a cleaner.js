/*
 ECO DTM branding - testovaci cleanup verze
 Testing target *.aktualne.cz

 Providers:
   * CPEX Branding - @author Cpex - Original from https://cdn.cpex.cz/caf/v1/catch/eco.js
   * InhouseEco - @author Filip
   * R2B2 - reseno good enough i vudci passbackum
   * Others - Seznam/AdSense/CPExLeader - cistitelne beznym mechanismem

 @author: Vaclav Barta, cPEX, Jan Tobolka
 @date: 2019-06-07
 @version: 0.3
*/

var cpexSkinBaseLibPath = 'https://cdn.cpex.cz/skin/v2/base/economia/';
var cpexSkinJs = 'https://cdn.cpex.cz/skin/v2/cpex-skin.js';

var hostname = _satellite.getVar('pagehostname');
var libScript = '';
switch (true) {
  case (/centrum\.cz$/.test(hostname)):
    libScript = 'centrum_cz.js';
    break;
  case (/zena\.aktualne\.cz$/.test(hostname)):
    libScript = 'zena_cz.js';
    break;
  case (/aktualne\.cz$/.test(hostname)):
    libScript = 'aktualne_cz.js?v=2';
    break;
  case (/vybermiauto\.cz$/.test(hostname)):
    libScript = 'vybermiauto_cz.js';
    break;
  case (/vareni\.cz$/.test(hostname)):
    libScript = 'vareni_cz.js';
    break;
  case (/ihned\.cz$/.test(hostname)):
    libScript = 'ihned_cz.js';
    break;
}

if (libScript) {
  _satellite.loadScriptSync(cpexSkinBaseLibPath + libScript);
  _satellite.loadScriptSync(cpexSkinJs);
} else {
  _satellite.notify('CPEXSkin library for domain not found', 1);
}

// register rendering skin + reload cleanup into sashec
_sashec_queue.push(['customRender', function (position, callback) {
  _ecohec.leaderCleanerBuffer = _ecohec.leaderCleanerBuffer || [];

  var debug = _satellite.getQueryParam('cleaner-debug') === '1' || _satellite.settings.isStaging;

  var logger = function(msg, always) {
    (debug || always) && _satellite.notify("leaderCustomRender: " + msg, 1);
  }

  if (typeof position === 'undefined' && typeof position.code !== 'string') {
    logger("position.code is not string", 1);
    return false;
  }

  // chceme resit jen na size=leader nebo podmnozinu z size=leader,79a,91a,11a,21a
  var testLeader = /size=[^/]*?\b(leader|79a|91a|11a|21a)\b/;
  if (!testLeader.test(position.target || '')) {
    logger("skip - position is not Leader size " + position.target);
    return false;
  }
  logger("use - position Leader size " + position.target);
  debug && console.log('leaderCustomRender: position data', position);
  debug && console.log('leaderCustomRender: position settings', _sashec.getPositionsByElementId(position.elementId)[0]);

  // cleanup previous
  var clean;
  while (clean = _ecohec.leaderCleanerBuffer.pop()) {
    try {
      logger("cleanup function call: " + clean.toString());
      clean();
    } catch(e) {
      logger("cleanup error: " + e.message, 1);
    } 
  }

  var providers = []; // only for info
  var customRender = false;

  // cpexSkinObject
  if (/data-rp-size-id=([^"'\d]*['"]?)230\1[^\d]/i.test(position.code)) { // regex pro odchytavani cpex skinových reklam
    providers.push('CPEXSkin');
    if (typeof cpexSkinObject == 'undefined') {
      logger("cpexSkinObject not found", 1);
    } else if (
      typeof cpexSkinObject.renderSkinCreativeIntoIframe !== 'undefined' // testuje nove pridanou fci objektu
      && cpexSkinObject.renderSkinCreativeIntoIframe(position.code) // true - skin se (mohl vykreslit) vykreslil do iframu
    ) {
      logger("register cpexSkinObject.resetSkin()");
      _ecohec.leaderCleanerBuffer.push(function() {
        cpexSkinObject.resetSkin();
      });
      customRender = true;
    } else {
      logger("CPEXSkin not used", 1);
    }
  }

  // economia native fireplace
  if (/_ecohec\.ecoFireplaceCleaner/.test(position.code)) {
    providers.push('ecoFireplace');
    logger("detect ecoFireplace - register _ecohec.ecoFireplaceCleaner()");
    _ecohec.leaderCleanerBuffer.push(function() {
      _ecohec.ecoFireplaceCleaner();
    });
  }

  if (/src=(["'])(https?:)?\/\/trackad.cz\/get\/[^\/]+\/generic\/branding/.test(position.code)) {
    providers.push('r2b2');
    logger("detect r2b2 - register AdTrack.DOM.resetBranding()");
    _ecohec.leaderCleanerBuffer.push(function() {
      AdTrack && AdTrack.DOM && AdTrack.DOM.resetBranding && AdTrack.DOM.resetBranding();
    });
    logger("detect r2b2 - register possible passback _ecohec.ecoFireplaceCleaner()");
    _ecohec.leaderCleanerBuffer.push(function() {
      _ecohec.ecoFireplaceCleaner && _ecohec.ecoFireplaceCleaner();
    });
    logger("detect r2b2 - register possible passback cpexSkinObject.resetSkin()");
    _ecohec.leaderCleanerBuffer.push(function() {
      cpexSkinObject && cpexSkinObject.resetSkin && cpexSkinObject.resetSkin();
    });
  }

  if (/src=(["'])(https?:)?\/\/ssp\.imedia.cz\/static\/js\/ssp\.js/.test(position.code)) {
    providers.push('sklik');
  }

  if (/src=(["'])(https?:)?\/\/pagead2\.googlesyndication\.com\/pagead\/js\/adsbygoogle\.js/.test(position.code)) {
    providers.push('adsense');
  }

  if (providers.length == 0) {
    providers.push('noncategorized leader');
  }

  logger("providers detected in ads " + providers);
  customRender || logger("normal Leader creative handled with postscribe");
  return customRender;

}]);