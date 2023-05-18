function ski(input) {
    let dni = Number(input[0]);
    let room = input[1];
    let score = input[2];
    let noshtuvki = dni - 1
    let price = 0

    switch (room) {
        case "apartment": {
            if (dni < 10) {
                price = (noshtuvki * 25) * 0.70
            } else if (dni > 10 && dni < 15) {
                price = (noshtuvki * 25) * 0.65
            } else if (dni > 15) {
                price = (noshtuvki * 25) * 0.50
            }
            break;
        }
        case 'president apartment': {
            if (dni < 10) {
                price = (noshtuvki * 35) * 0.90
            } else if (dni > 10 && dni < 15) {
                price = (noshtuvki * 35) * 0.85
            } else if (dni > 15) {
                price = (noshtuvki * 35) * 0.80
            }
            break;
        }
        case 'room for one person': {
            price = noshtuvki * 18
        }
    }
    if (score === 'positive') {
        price = price + (price * 0.25)
    } else if (score === 'negative') {
        price = price - (price * 0.1)
    }



    console.log(price.toFixed(2))
}