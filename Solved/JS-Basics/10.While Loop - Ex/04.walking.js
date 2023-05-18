function walking(input) {
    let goal = 10000;
    let index = 0;
    let command = input[index]
    index++
    let totalSteps = 0;
    let goingHomeStepsIndex = 1;
    let goingHomeSteps = 0

    let goalReached = false

    while (command !== "Going home") {
        let steps = Number(command)
        totalSteps += steps
        if (totalSteps >= goal) {
            goalReached = true
            break;
        }
        goingHomeStepsIndex++
        command = (input[index])
        index++

    }

    goingHomeSteps = Number(input[goingHomeStepsIndex])

    if (goalReached) {
        console.log("Goal reached! Good job!");
        console.log(`${totalSteps - goal} steps over the goal!`);
    }else if((goingHomeSteps + totalSteps) > goal){
        console.log("Goal reached! Good job!");
        console.log(`${goingHomeSteps + totalSteps - goal} steps over the goal!`);
        
    } else {
        console.log(`${Math.abs(goal - (totalSteps + goingHomeSteps))} more steps to reach goal.`);
    }

}
walking(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])