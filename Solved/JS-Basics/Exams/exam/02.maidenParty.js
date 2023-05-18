function maidenParty(input) {
    let priceParty = Number(input[0]);
    let loveWish = Number(input[1]);
    let waxRose = Number(input[2]);
    let keyHolder = Number(input[3]);
    let caric = Number(input[4]);
    let luck = Number(input[5]);

    let totalSum = loveWish * 0.60 + waxRose * 7.20 + keyHolder * 3.60 + caric * 18.20 + luck * 22
    let totalArticuls = loveWish + waxRose + keyHolder + caric + luck

    if (totalArticuls > 25) {
        totalSum *= 0.65
    }

    let hosting = totalSum * 0.1
    let win = totalSum - hosting
    let remainingMoney = win - priceParty



    if (remainingMoney > 0) {
        console.log(`Yes! ${remainingMoney.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(Math.abs(remainingMoney)).toFixed(2)} lv needed.`);
    }



}
maidenParty(["40.8",
    "20",
    "25",
    "30",
    "50",
    "10"])
console.log('====');
maidenParty(["320",
    "8",
    "2",
    "5",
    "5",
    "1"])
