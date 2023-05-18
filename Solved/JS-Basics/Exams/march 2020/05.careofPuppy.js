function careofPuppy(input) {
    let food = Number(input[0]);
    let foodInGrams = food * 1000;
    let i = 1;
    let command = input[i];
    i++
    let eatenFood = 0
    let remainFood = 0


    while (command !== 'Adopted') {
        eatenFood += Number(command)


        command = input[i];
        i++

    }


    if (eatenFood > foodInGrams) {
        console.log(`Food is not enough. You need ${eatenFood - foodInGrams} grams more.`);
    } else {
        console.log(`Food is enough! Leftovers: ${foodInGrams - eatenFood} grams.`);
    }



}
careofPuppy(["4",
    "130",
    "345",
    "400",
    "180",
    "230",
    "120",
    "Adopted"])
console.log('====');
careofPuppy(["3",
    "1000",
    "1000",
    "1000",
    "Adopted"])
console.log('=======');
careofPuppy(["2",
    "999",
    "456",
    "999",
    "999",
    "123",
    "456",
    "Adopted"])
