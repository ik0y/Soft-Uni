function balance(input) {
    let index = 0
    let balance = 0

    let command = input[index];
    index++

    while (command !== "NoMoreMoney") {
        let money = Number(command);
        if (money < 0) {
            console.log("Invalid operation!");
            break;
        }
        balance += money;
        console.log(`Increase: ${money.toFixed(2)}`);

        command = input[index];
        index++
    }


    console.log(`Total: ${balance.toFixed(2)}`)


}
//balance([5,6,7,8,"NoMoreMoney"])