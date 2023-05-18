function sumOfNumbers(input) {
    let total = Number(input[0])
    let i = 1;
    let num = Number(input[i])
    i++
    let sbor = 0


    while (total > sbor) {
        currentNumb = input[num]
        sbor += num
        num = Number(input[i])
        i++
    }
    console.log(sbor);
}
sumOfNumbers(["20", "1", "2", "3", "4", "5", "6"])