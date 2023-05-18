function excursion(input) {
    let people = Number(input[0]);
    let season = input[1];
    let price = 0

    if (season === 'spring') {
        if (people <= 5) {
            price = people * 50
        } else {
            price = people * 48
        }


    } else if (season === 'autumn') {
        if (people <= 5) {
            price = people * 60
        } else {
            price = people * 49.50
        }


    } else if (season === 'winter') {
        if (people <= 5) {
            price = people * 86
        } else {
            price = people * 85
        }



    } else if (season === 'summer') {
        if (people <= 5) {
            price = people * 48
        } else {
            price = people * 45
        }

    }
    if (price > 0) {

        if (season === 'summer') {
            console.log(`${(price * 0.85).toFixed(2)} leva.`);
        } else if (season === 'winter') {
            console.log(`${(price * 1.08).toFixed(2)} leva.`);
        } else {
            console.log(`${(price).toFixed(2)} leva.`);
        }
    }


}

excursion(["1",
    "summer"])
console.log('====');
excursion(["5",
    "spring"])
console.log('=====');
excursion(["15",
    "autumn"])

console.log('=======');
excursion(["20",
    "winter"])


