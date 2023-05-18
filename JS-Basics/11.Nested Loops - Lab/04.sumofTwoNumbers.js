function sumofTwoNumbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magic = Number(input[2]);
    let isFound = false
    let a = 0
    let b = 0
    let comb = 0




    for (let x = start; x <= end; x++) {
        for (let y = start; y <= end; y++) {
            let sum = x + y

            comb += 1

            if (sum === magic) {
                a = x
                b = y
                isFound = true
                break;
            }


        }
        if (isFound) {
            break;
        }
    }

    if (isFound) {
        console.log(`Combination N:${comb} (${a} + ${b} = ${magic})`);
    } else {
        console.log(`${comb} combinations - neither equals ${magic}`)
    }


}
sumofTwoNumbers(["88", "888", "1000"])