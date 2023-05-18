function minNumber(input) {
    let index = 0;
    let command = input[index];
    index++

    let minNum = Number.MAX_SAFE_INTEGER;

    while (command !== "Stop") {
        let currentNumber = Number(command);

        command = input[index];
        index++
        if (currentNumber < minNum) {
            minNum = currentNumber;
        }

    }


    console.log(minNum)

}
//minNumber([2,3,4,5,6,7,8,9,12,31,42,352,"Stop",5424,342])