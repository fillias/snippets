function getDog(id) {
    console.log('getDog, id:', id);
    const dogs =['max', 'jack', 'lucky'];
    return new Promise((resolve, reject) => {
        setTimeout(e => {
            resolve(dogs[id]);
        }, 2000);
    }); 
}

function getBark (name) {
    return new Promise((resolve, reject) => {
        setTimeout(e => {
            resolve(`w${'o'.repeat(name.length)}f`); 
        }, 2000);
    }); 
}

function* doBark(dogId) {
    console.log('doBark, dogId', dogId);
    const dog = yield getDog(dogId);
    console.log('doBark, dog', dog);
    const bark = yield getBark(dog);
    console.log('doBark, bark', bark);

    return new Promise((resolve, reject) => {
        setTimeout(e => {
            resolve({dog, bark}); 
        }, 2000);
    }); 
}


const it = doBark(2);

it.next().value
    .then(dog => (it.next(dog).value))
    .then(bark => (it.next(bark).value))
    .then(e => console.log(e));


/*

function* getIterator (collection) {
    console.log('pusteno');
    let suffix ='x';

    for (let i=0; i< collection.length ; i++) {
        console.log('suffix', suffix);
        console.log('i',i);
        suffix = (yield collection[i] + suffix);
        console.log('suffix na konci loopu', suffix);
    }

    return collection[collection.length-1 + suffix];
}
console.log('--- const it ----');
const it = getIterator(['a', 'b', 'c']);

console.log('--- 1 ----');
console.log('prvni next:', it.next());

console.log('--- 2 ----');
console.log('druhy next:', it.next('_bla'));

console.log('--- 3 ----');
console.log('treti next:', it.next());

console.log('--- 4 ----');
console.log('ctvrty next:', it.next());

*/