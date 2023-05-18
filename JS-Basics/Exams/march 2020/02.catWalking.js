function catWalking(input) {
    let minPerDay = Number(input[0]);
    let walkPerDay = Number(input[1]);
    let caloriesPerDayTaken = Number(input[2]);
    let burnedCaloriesPerMin = 5
    let totalBurnedPerDay = walkPerDay * minPerDay * burnedCaloriesPerMin
    let halfOfTakenCalories = caloriesPerDayTaken / 2

    if (totalBurnedPerDay >= halfOfTakenCalories) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalBurnedPerDay}.`);
    }else{
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalBurnedPerDay}.`);
    }

}

catWalking(["30",
    "3",
    "600"])
console.log('=======');
catWalking(["15",
    "2",
    "500"])
