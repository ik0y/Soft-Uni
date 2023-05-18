function suitCasesLoad(input) {
    let space = Number(input[0]);
    index = 1;
    let command = input[index];
    index++
    let kufar = 0
    let occupiedSpace = 0
    let kufarCount = 0
    let full = false

    while (command !== 'End') {
        kufar = Number(command);

        occupiedSpace += kufar

        kufarCount++
        command = input[index];
        index++

        if (occupiedSpace >= space) {
            console.log("No more space!");
            console.log(`Statistic: ${kufarCount - 1} suitcases loaded.`);
            full = true
            break;
        }


    }
    if (!full) {

        console.log("Congratulations! All suitcases are loaded!");
        console.log(`Statistic: ${kufarCount} suitcases loaded.`);

    }

}

suitCasesLoad(["700.5",
    "180",
    "340.6",
    "126",
    "220"])
