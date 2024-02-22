(() => {
  window.didomiOnReady = window.didomiOnReady || [];
  window.didomiOnReady.push(function (Didomi) {
    const scr = document.createElement('script');
    scr.setAttribute(
      'src',
      `https://ad.doubleclick.net/ddm/trackimpj/N1138786.1272342ECONOMIA.CZ/B31306060.388501784;dc_trk_aid=579882964;dc_trk_cid=210261607;ord=${new Date().getTime()};dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=1;gdpr_consent=${
        Didomi.getUserStatus().consent_string
      };ltd=;dc_tdv=1?`
    );
    scr.setAttribute('attributionsrc', '');
    document.body.appendChild(scr);
  });
})();
