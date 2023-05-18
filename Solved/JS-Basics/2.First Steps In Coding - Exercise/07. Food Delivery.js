function food(input) {
    let pile = Number(input[0]) * 10.35;
    let riba = Number(input[1]) * 12.40;
    let veg = Number(input[2]) * 8.15;
    let desert = (pile + riba + veg) * 0.2;
    let dostavka = 2.50;
    let total = pile + riba + veg + desert + dostavka;
    console.log(total)
}
food(["2", "4", "3"])