function cinemaTickets(input) {
    let kidTicket = 0;
    let standardTicket = 0;
    let studentTicket = 0;


    let index = 0;
    let command = input[index];
    index++

    while (command !== 'Finish') {
        let movieName = command

        let maxTicket = Number(input[index])
        index++

        let command1 = input[index];
        index++
        let soldTickets = 0

        while (command1 !== 'End') {

            let ticketType = command1
            soldTickets++

            if (ticketType === 'student') {
                studentTicket++
            } else if (ticketType === 'kid') {
                kidTicket++
            } else if (ticketType === 'standard') {
                standardTicket++
            }


            if (soldTickets == maxTicket) {

                break;
            }

            command1 = input[index];
            index++

        }

        let percentTaken = (soldTickets / maxTicket) * 100
        console.log(`${movieName} - ${percentTaken.toFixed(2)}% full.`);

        command = input[index];
        index++


    }
    let totalTickets = kidTicket + standardTicket + studentTicket
    let percentkid = (kidTicket / totalTickets) * 100
    let percentstudent = (studentTicket / totalTickets) * 100
    let percentstandard = (standardTicket / totalTickets) * 100

    console.log(`Total tickets: ${totalTickets}`)
    console.log(`${percentstudent.toFixed(2)}% student tickets.`);
    console.log(`${percentstandard.toFixed(2)}% standard tickets.`);
    console.log(`${percentkid.toFixed(2)}% kids tickets.`);

}
cinemaTickets(["The Matrix",

    "20",

    "student",

    "standard",

    "kid",

    "kid",

    "student",

    "student",

    "standard",

    "student",

    "End",

    "The Green Mile",

    "17",

    "student",

    "standard",

    "standard",

    "student",

    "standard",

    "student",

    "End",

    "Amadeus",

    "3",

    "standard",

    "standard",

    "standard",

    "Finish"])