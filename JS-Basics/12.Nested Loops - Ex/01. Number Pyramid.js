function numberPyramid(input) {
    let n = Number(input[0]);
    let current = 1;
    let isBigger = false;
    let printCurrLine = ''
    
    for (let rows = 1; rows <= n; rows++) {
        for (let coll = 1; coll <= rows; coll++) {
            if (current > n) {
                isBigger = true;
                break;
            }
            printCurrLine += current + ' '
            current++
        }
        console.log(printCurrLine);
        printCurrLine = ''
        if (isBigger) {
            break;
        }

    }



}
numberPyramid([7])