function vacation(input) {
    let index = 0
    let needMoney = Number(input[index]);
    index++
    let currentMoney = Number(input[index]);
    index++
    let spendCounter = 0
    let isPossibleSaved = true;
    let dayCounter = 0
    while (needMoney > currentMoney) {
        let action = input[index];
        index++
        let tempMoney = Number(input[index]);
        index++
        dayCounter++

        switch (action) {
            case "spend":
                spendCounter++
                currentMoney -= tempMoney;
                if (currentMoney < 0) {
                    currentMoney = 0;
                }
                if (spendCounter === 5) {
                    isPossibleSaved = false;
                }
                break;

            case "save":
                spendCounter = 0;
                currentMoney += tempMoney;
                break;
        }
        if(!isPossibleSaved){
            break;
        }
    }
    if (isPossibleSaved) {
        console.log(`You saved the money for ${dayCounter} days.`);

    } else {
        console.log("You can't save the money.")
        console.log(`${dayCounter}`);
        

    }

}
vacation(["2000",

    "1000",

    "spend",

    "1200",

    "save",

    "2000"])
console.log("---------");

vacation(["110",

    "60",

    "spend",

    "10",

    "spend",

    "10",

    "spend",

    "10",

    "spend",

    "10",

    "spend",

    "10"])