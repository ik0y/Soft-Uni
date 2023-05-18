function cinema(input) {
    let type = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);

    let ticketNumber = (rows * cols)
    let ticketPrice = 0
    if (type === "Premiere") {
        ticketPrice = ticketNumber * 12
    } else if (type === "Normal") {
        ticketPrice = ticketNumber * 7.50
    } else if (type === "Discount") {
        ticketPrice = ticketNumber * 5
    }


    console.log(`${ticketPrice.toFixed(2)} leva`)
}
// cinema(["Normal" , "21" , "13"])