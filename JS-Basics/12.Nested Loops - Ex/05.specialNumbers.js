function specialNumbers(input) {
    let n = Number(input[0]);
    let buffer = ' '


    for (let curNum = 1111; curNum < 10000; curNum++) {
        let currNumString = String(curNum)

        for (let index = 0; index < 4; index++) {

            let divisor = Number(currNumString[index]);

            if (n % divisor !== 0) {
                break;

            }

            if (index === 3 ) {
                buffer += curNum + " ";
            }
        }

    }

    console.log(buffer);



}
specialNumbers(["3"])
console.log('---------');
specialNumbers(["11"])
console.log('-------------');
specialNumbers(["16"])