function printAndSum(a, b) {
    let buffer = ''
    let sum = 0
    for (let i = a; i <= b; i++) {
        buffer += i + ' '
        sum += i
    }
    console.log(buffer);
    console.log(`Sum: ${sum}`);

}
printAndSum(0, 26)