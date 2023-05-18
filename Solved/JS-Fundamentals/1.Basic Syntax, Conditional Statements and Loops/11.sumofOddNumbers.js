function sumofOddNumbers(n) {

    let count = 0
    let sum = 0

    for (let i = 1; n !== count; i++) {
        if (i % 2 != 0) {
            count += 1
            sum += i
            console.log(i);

        }
    }

    console.log(`Sum: ${sum}`);
}
sumofOddNumbers(5)