function maxNumber(input) {
    let index = 0;
    let command = input[index];
    index++

    let maxNum = Number.MIN_SAFE_INTEGER;

    while (command !== "Stop") {
        let currentNumber = Number(command);

        command = input[index];
        index++
        if (currentNumber > maxNum) {
            maxNum = currentNumber;
        }

    }


    console.log(maxNum)

}
//maxNumber([2,3,4,5,6,7,8,9,12,31,42,352,"Stop",5424,342])