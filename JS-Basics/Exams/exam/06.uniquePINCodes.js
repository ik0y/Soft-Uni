function uniquePINCodes(input) {
    let firstDigit = Number(input[0]);
    let secDigit = Number(input[1]);
    let thirdDigit = Number(input[2]);

    let toPrint = ""


    for (let a = 1; a <= firstDigit; a++) {
        for (let b = 1; b <= secDigit; b++) {
            for (let c = 1; c <= thirdDigit; c++) {
                if (a % 2 == 0 && c % 2 == 0) {
                    if (b == 2 || b == 3 || b == 5 || b == 7) {
                        toPrint += a + ' ' + b + ' ' + c + ' ' + '\n'
                    }

                }
            }
        }
    }



    console.log(toPrint);




}
uniquePINCodes(["3",
    "5",
    "5"])
console.log('---');
uniquePINCodes(["8",
    "2",
    "8"])

