function pcStore(input) {
    let cpu = Number(input[0]);
    let gpu = Number(input[1]);
    let ram = Number(input[2]);
    let ramCount = Number(input[3]);
    let discount = Number(input[4]);
    let dollar = 1.57
    let ramPrice = ramCount * ram
    let price = cpu + gpu
    let finalPriceUSD = (price - (price * discount)) + ramPrice
    let finalPrice = finalPriceUSD * dollar




   console.log(`Money needed - ${finalPrice.toFixed(2)} leva.`);

}
pcStore(["500",
    "200",
    "80",
    "2",
    "0.05"])
console.log('=====');
pcStore(["1200",
    "850",
    "120",
    "4",
    "0.1"])


