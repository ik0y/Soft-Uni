function equalSumsEvenOddPosition(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let result = ''

    for (let curNum = startNum; curNum <= endNum; curNum++) {

        let evenSum = 0;
        let oddSum = 0;

        let currNumString = String(curNum);

        for (let i = 0; i < currNumString.length; i++) {
            let currDig = Number(currNumString[i]);

            if (i % 2 === 0) {
                evenSum += currDig
            } else {
                oddSum += currDig
            }


        }

        if (evenSum == oddSum) {
            result += currNumString + ' ';
        }

    }


    console.log(result);

}
equalSumsEvenOddPosition(["100000", "100050"])