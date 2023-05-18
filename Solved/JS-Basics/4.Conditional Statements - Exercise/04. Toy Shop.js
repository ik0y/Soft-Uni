function shop(input) {
    let ekskurziq = Number(input[0]);
    let puzel = Number(input[1]) * 2.60;
    let kukla = Number(input[2]) * 3;
    let meche = Number(input[3]) * 4.10;
    let minion = Number(input[4]) * 8.20;
    let kamion = Number(input[5]) * 2;
    let sum = puzel + kukla + meche + minion + kamion;

    let igrachkiTotal = (Number(input[1]) + Number(input[2]) + Number(input[3]) + Number(input[4]) + Number(input[5]))

    if (igrachkiTotal >= 50) {
        sumM = sum - (sum * 0.25);
     }else{ sumM = sum}
    let naem = sumM * 0.10;
    let pechalba = sumM - naem;
    let razlika = (pechalba - ekskurziq).toFixed(2);


    if (razlika > 0) {
        console.log(`Yes! ${razlika} lv left.`);
    } else {
        console.log(`Not enough money! ${Math.abs(razlika)} lv needed.`);
    }

}
shop(["320", "8", "2", "5", "5", "1"])