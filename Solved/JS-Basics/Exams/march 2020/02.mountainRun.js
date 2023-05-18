function mountainRun(input) {
    let recordInSec = Number(input[0]);
    let distanceInMeter = Number(input[1]);
    let secPerMeter = Number(input[2]);
    let naklonDelay = Math.floor(distanceInMeter / 50)
    let delayInSec = naklonDelay * 30
    let totalTime = ((distanceInMeter * secPerMeter) + delayInSec)

    if (totalTime >= recordInSec) {
        console.log(`No! He was ${(totalTime - recordInSec).toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    }


}
mountainRun(['5554.36',
    '1340',
    '3.23'])
