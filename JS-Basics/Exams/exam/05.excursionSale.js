function excursionSale(input) {
    let seaPack = Number(input[0]);
    let mountainPack = Number(input[1]);

    let index = 2

    let command = input[index];
    index++

    let profit = 0
    let seaSold = false
    let mountainSold = false

    while (command !== 'Stop') {

        if (command === 'sea' && seaPack > 0) {


            profit += 680

            seaPack--

        } else if (command === 'mountain' && mountainPack > 0) {



            profit += 499

            mountainPack--

        }else if(seaPack === 0 && mountainPack === 0){
            console.log('Good job! Everything is sold.');
            break;
        }




        command = input[index];
        index++


    }

  


    console.log(`Profit: ${profit} leva.`);

}
excursionSale(["2",
    "2",
    "sea",
    "mountain",
    "sea",
    "sea",
    "mountain"])
console.log('------');
excursionSale(["6",
    "3",
    "sea",
    "mountain",
    "mountain",
    "mountain",
    "sea",
    "Stop"])
