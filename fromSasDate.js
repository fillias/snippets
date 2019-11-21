function toDate (SASdate) {
    /* wokflow revenue report je datum ve formatu 02/19/2017 */
    if (SASdate) {
        var campaignDate = new Date();
        campaignDate.setFullYear(SASdate.slice(-4));
        console.log('year', SASdate.slice(-4));
        /* setMonth je zero-based */
        campaignDate.setMonth( parseInt(SASdate.slice(0,2)-1 ) );
        console.log('month', SASdate.slice(0,2));

        campaignDate.setUTCDate(SASdate.slice(3,5));       
        console.log('datum', SASdate.slice(3,5));

        return campaignDate;
      }

}

var dejt1 = toDate('02/21/2017');
console.log(dejt1.toUTCString());

var dejt2 = toDate('02/20/2017');
console.log(dejt2.toUTCString());

console.log(dejt1 > dejt2);