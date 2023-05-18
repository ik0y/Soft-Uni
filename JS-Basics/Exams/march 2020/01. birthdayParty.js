function birthdayParty(input) {
    let naemZala = Number(input[0]);

    let torta = 0
    let napitki = 0
    let animator = 0

    torta = naemZala * 0.2
    napitki = torta - (torta * 0.45)
    animator = naemZala / 3




    console.log(naemZala + torta + napitki + animator);

}
birthdayParty([2250])