function tournamentofChristmas(input) {
    let days = Number(input[0]);
    let i = 1;
    let command = input[i];
    i++
    let totalVictory = 0
    let totalLose = 0
    let totalMoney = 0
    let money = 0
    let daysWon = 0

    for (let currDay = 1; currDay <= days; currDay++) {
        let totalGamesForTheDay = 0;
        let victoriesForTheDay = 0
        let losesForDay = 0
        let money = 0

        while (command !== 'Finish') {


            if (command == 'win') {

                victoriesForTheDay++
                totalGamesForTheDay++
                totalVictory++

                money += 20
            } else if (command == 'lose') {
                totalGamesForTheDay++
                losesForDay++
                totalLose++
            }



            command = input[i];
            i++
        }

        if (victoriesForTheDay > losesForDay) {
            money *= 1.1
        }
        totalMoney += money
        command = input[i];
        i++

    }
    if (totalVictory > totalLose) {
        totalMoney *= 1.2
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }


}
tournamentofChristmas(["2",
    "volleyball",
    "win",
    "football",
    "lose",
    "basketball",
    "win",
    "Finish",
    "golf",
    "win",
    "tennis",
    "win",
    "badminton",
    "win",
    "Finish"])
console.log('====');
tournamentofChristmas(["3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose", "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"])
