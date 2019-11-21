function toSasDate(dateObj) {
/* SAS reporty maji datum ve formatu 10/29/2018 */
    return `${dateObj.getMonth()+1}/${dateObj.getDate()}/${dateObj.getFullYear()}`;

}

var datum = new Date();

console.log(toSasDate(datum));