/* hinte setsv */
(() => { 
    var consent = Didomi.getUserStatus().consent_string;
    var img = new Image();
    img.src = `https://a.centrum.cz/cent/SETSV/testing=null/gdpr=1/consent=${consent}`;
 })();



 /* hinte setsv */
(() => { 
    var consent = Didomi.getUserStatus().consent_string;
    var img = new Image();
    img.src = `https://a.centrum.cz/cent/SETSV/testing=filip/gdpr=1/consent=${consent}`;
 })();

 /* POZOR, pokud nechci prepsat puvodni hodnoty, tak pouzit testing=+hodnota */


