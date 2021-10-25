'use strict';

function stockList(listOfArt, listOfCat){
    if (!listOfArt || !listOfCat) {return ''}
    let count;
    let counter;
    let answer = [];
    for (let i = 0; i < listOfCat.length; i++) {
        count = listOfCat[i];
        counter = 0;
        for (let i = 0; i < listOfArt.length; i++) {
            if (count == listOfArt[i][0]) {
                counter += parseInt(listOfArt[i].replace(/[a-z]/gi, ''));
            }
            if (i == listOfArt.length-1) {
                answer.push(`(${count} : ${counter})`)
            }
        }
    }
    return answer.join(' - ')
}
let b = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
let c = ["A", "B", "C", "W"]
console.log(stockList(b, c))



