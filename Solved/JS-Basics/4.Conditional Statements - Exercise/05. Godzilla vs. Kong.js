function action(input) {
    let budget = Number(input[0]);
    let people = Number(input[1]);
    let suitPrice = Number(input[2]);
    let decorPrice = (budget * 0.10);

    let suitsTotalPrice = (people * suitPrice);


    if (people >= 150) {
        suitsTotalPrice = (suitsTotalPrice - (suitsTotalPrice * 0.10));
    }

    let difference = budget - (decorPrice + suitsTotalPrice)


    if (decorPrice + suitsTotalPrice > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${Math.abs(budget - (decorPrice + suitsTotalPrice)).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${Math.abs(budget - (decorPrice + suitsTotalPrice)).toFixed(2)} leva left.`);
    }


}
action(["15437.62", "186", "57.99"])