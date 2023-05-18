function agencyProfit(input) {
    let avioName = input[0];
    let adultTicket = Number(input[1]);
    let kidsTicket = Number(input[2]);
    let adultTicketPrice = Number(input[3]);
    let tax = Number(input[4]);
    let kitdTicketPrice = adultTicketPrice - adultTicketPrice * 0.7

    let totalTickets = adultTicket + kidsTicket
    let totalTax = tax * totalTickets
    let totalkidsPrice = kidsTicket * kitdTicketPrice
    let totalAdultPrice = adultTicket * adultTicketPrice
    let totalPrice = totalAdultPrice + totalkidsPrice + totalTax
    let profit = totalPrice * 0.2


    console.log(`The profit of your agency from ${avioName} tickets is ${profit.toFixed(2)} lv.`);


}
agencyProfit(["WizzAir",
    "15",
    "5",
    "120",
    "40"])
console.log('===');
agencyProfit(["Ryanair",
    "60",
    "23",
    "158.96",
    "39.12"])

