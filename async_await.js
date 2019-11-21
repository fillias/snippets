async function doBark(dogId) {
    const dog = await getDog(dogId);
    // tady se to zastavuje podobne jako yield v generatoru
    const bark = await getBark(dog);

    // pokud potrebujeme pustit vice async requestu najednou tak Promise.all 
    const all = await Promise.all([getDog(1), getBark('max')]);

    return {
        dog,
        bark,
        all
    };
}



const asyncFn = doBark(2);

asyncFn.then(res => {
    console.log(res);
});

function getDog(id) {
    console.log('getDog, id:', id);
    const dogs = ['max', 'jack', 'lucky'];
    return new Promise((resolve, reject) => {
        setTimeout(e => {
            resolve(dogs[id]);
        }, 2000);
    });
}

function getBark(name) {
    return new Promise((resolve, reject) => {
        setTimeout(e => {
            resolve(`w${'o'.repeat(name.length)}f`);
        }, 2000);
    });
}