
async function results1() {
    let result1 = await new Promise(resolve => setTimeout(() => resolve('results1 - a'), 1000));
    // let result2 = await new Promise(resolve => setTimeout(() => resolve('results2 - a'), 1000));
    // tady se musi error vratit a handlovat az v Promise.all jinak to hazi chybu
    let result2 = await new Promise((resolve, reject) => setTimeout(()=> reject('results1 - chyba'), 2000)).catch(e => { return new Error(e)});
    return [result1, result2];
}


async function results2() {
    let result1 = await new Promise(resolve => setTimeout(() => resolve('results1 - a'), 1000));
    let result2 = await new Promise(resolve => setTimeout(() => resolve('results2 - b'), 1000));
    return [result1, result2];

}


async function getResults() {
    const res1 = await results1();
    const res2 = await results2();

    Promise.all([res1, res2]).then(vysledky => {
      vysledky.forEach(vysledek => {
        vysledek.forEach(res => {
            if (res instanceof Error) {
                throw res;
            }
        });
      });

      console.log(vysledky);
    })
    .catch(e => console.log('error', e));
}

getResults();