function fitnessCard(input) {
    let money = Number(input[0]);
    let gender = input[1];
    let age = Number(input[2]);
    let sport = input[3];
    let price = 0

    switch (sport) {

        case 'Gym':
            if (gender === 'm') {
                price += 42
            } else {
                price += 35
            }
            break;
        case 'Boxing':
            if (gender === 'm') {
                price += 41
            } else {
                price += 37
            }
            break;
        case 'Yoga':
            if (gender === 'm') {
                price += 45
            } else {
                price += 42
            }
            break;
        case 'Zumba':
            if (gender === 'm') {
                price += 34
            } else {
                price += 31
            }
            break;
        case 'Dances':
            if (gender === 'm') {
                price += 51
            } else {
                price += 53
            }
            break;
        case 'Pilates':
            if(gender === 'm'){
                price+=39
            }else{
                price+=37
            }
            break;
    }
    if(age <= 19){
      price =  price - (price * 0.2)
    }

    if(money > price){
        console.log(`You purchased a 1 month pass for ${sport}.`);
    }else{
        console.log(`You don't have enough money! You need $${(price - money).toFixed(2)} more.`);
    }





}
fitnessCard(["50",
    "m",
    "23",
    "Gym"])
console.log('====');
fitnessCard(["20",
    "f",
    "15",
    "Yoga"])
console.log('===');
fitnessCard(["10",
    "m",
    "50",
    "Pilates"])
