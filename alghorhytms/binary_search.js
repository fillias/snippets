// najdi 33 v poli cisel, binary search muze byt pouzit pouze pokud je rada sorted

var numbers = [1,2,5,15,33,35,45,82,89, 113,211,235,333];


/*  moje reseni */
/*
function findNumber(num, list) {

    var arrLength = list.length;

    if ( num > list[arrLength] || (arrLength === 1 && list[0] != num) ) {
        console.log(`hledane cislo ${num} neexistuje`);
        return;
    }

    var arrA = list.slice(0, Math.floor(arrLength/2));
    var arrB = list.slice(Math.ceil(arrLength/2));
    

    console.log(arrA, arrB);

    if (num === arrB[0]) {
        console.log(`hotovo, ${num}`)
        return;
    }


    if (num < arrB[0]) {
        console.log('mensi');
        findNumber(num, arrA);
    } else {
        console.log('vetsi');
        findNumber(num, arrB);
    }

}
*/

findNumber(1133, numbers);