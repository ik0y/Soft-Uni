function novDom(input) {
    let tip = input[0];
    let broi = Number(input[1]);
    let budjet = Number(input[2]);
    let krainacena = 0
    let ostatuk = budjet - krainacena
    if (tip === "Roses") {
        if (broi > 80) {
            krainacena = (broi * 5) - (broi * 5) * 0.1
        } else if (broi <= 80) {
            krainacena = broi * 5
        }
    } else if (tip === "Dahlias") {
        if (broi > 90) {
            krainacena = (broi * 3.80) - (broi * 3.80) * 0.15
        } else if (broi <= 80) {
            krainacena = broi * 3.80
        }

    } else if (tip === "Tulips") {
        if (broi > 80) {
            krainacena = (broi * 2.80) - (broi * 2.80) * 0.15
        } else if (broi <= 80) {
            krainacena = broi * 2.80
        }
    } else if (tip === "Narcissus") {
        if (broi < 120) {
            krainacena = (broi * 3) + (broi * 3) * 0.15
        } else if (broi >= 120) {
            krainacena = broi * 3
        }
    } else if (tip === "Gladiolus") {
        if (broi < 80) {
            krainacena = (broi * 2.5) + (broi * 2.5) * 0.2
        } else if (broi >= 80) {
            krainacena = broi * 2.5
        }
    }
    let razlika = budjet - krainacena

    if (razlika <= 0) {
        console.log(`Not enough money, you need ${Math.abs(razlika.toFixed(2))} leva more `)
    } else {
        console.log(`Hey, you have a grat garden with ${broi} ${tip} and ${razlika.toFixed(2)} leva left.`)
    }

}
//novDom(["Narcissus" , "119" , "360"])