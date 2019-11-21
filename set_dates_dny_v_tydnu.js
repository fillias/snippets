//const now = new Date();
// date ve tvaru
// 1995-12-17T03:24:00
const now = new Date('2019-12-16T10:24:00');
console.log(now);

const w1Monday = now.getDay() === 1 ?  addDays(now, 7) : new Date( now.setDate(now.getDate() + (1 + 7 - now.getDay()) % 7) ) ;

const w1Sunday = addDays(w1Monday, 6);
const w2Monday = addDays(w1Sunday, 1);
const w2Sunday = addDays(w2Monday, 6);


console.log('w1Monday', w1Monday);
console.log(toSasDate(w1Monday));

console.log('w1Sunday', w1Sunday);
console.log(toSasDate(w1Sunday));

console.log('w2Monday', w2Monday);
console.log(toSasDate(w2Monday));

console.log('w2Sunday', w2Sunday);
console.log(toSasDate(w2Sunday, true));


function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function toSasDate(dateObj, encoding) {
    /* SAS reporty maji datum ve formatu 10/29/2018, pro API request je treba encodovat */
    const datum = dateObj.getDate() < 10 ? `0${dateObj.getDate()}` : dateObj.getDate();
    const mesic = (dateObj.getMonth() + 1) < 10 ? `0${dateObj.getMonth() + 1}` : dateObj.getMonth() + 1;
    let result = `${mesic}/${datum}/${dateObj.getFullYear()}`;

    return encoding === true ? encodeURIComponent(result) : result;
}