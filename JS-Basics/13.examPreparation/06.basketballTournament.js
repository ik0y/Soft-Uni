function basketballTournament(input) {
    let index = 0
    let command = input[index];
    index++
    let counter = 0
    let winGames = 0
    let lostGames = 0
    let totalGames = 0

    while (command !== "End of tournaments") {
        let tornamentName = command;
        let gameNumber = Number(input[index]);

        index++



        for (let i = 0; i < gameNumber; i++) {
            let firstTeamResult = Number(input[index]);
            index++
            let secondTeamResult = Number(input[index]);
            index++
            counter++
            totalGames++

            if (firstTeamResult > secondTeamResult) {
                winGames++
                console.log(`Game ${counter} of tournament ${tornamentName}: win with ${firstTeamResult - secondTeamResult} points.`);
            } else {
                lostGames++
                console.log(`Game ${counter} of tournament ${tornamentName}: lost with ${secondTeamResult - firstTeamResult} points.`);
            }
        }


        counter = 0
        command = input[index];
        index++

    }
    
    console.log(`${((winGames / totalGames) * 100).toFixed(2)}% matches win`);
    console.log(`${((lostGames / totalGames) * 100).toFixed(2)}% matches lost`);



}
basketballTournament(["Dunkers",
    "2",
    "75",
    "65",
    "56",
    "73",
    "Fire Girls",
    "3",
    "67",
    "34",
    "83",
    "98",
    "66",
    "45",
    "End of tournaments"])
console.log('======');

basketballTournament(["Ballers",
    "3",
    "87",
    "63",
    "56",
    "65",
    "75",
    "64",
    "Sharks",
    "4",
    "64",
    "76",
    "65",
    "86",
    "68",
    "99",
    "45",
    "78",
    "End of tournaments"])
