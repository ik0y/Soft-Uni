function changeBureau(input) {
    let bitcoin = Number(input[0]);
    let uan = Number(input[1]);
    let comiss = Number(input[2]) / 100


    let totalBitcoin = bitcoin * 1168
    let totalUan = uan * 0.264
    let totalMoneyEUR = (totalBitcoin + totalUan) / 1.95
    let finalMoneyEUR = totalMoneyEUR - (totalMoneyEUR * comiss)


    console.log(finalMoneyEUR.toFixed(2))

}
changeBureau(["1",
    "5",
    "5"])
console.log('==========');
changeBureau(["20",
    "5678",
    "2.4"])
