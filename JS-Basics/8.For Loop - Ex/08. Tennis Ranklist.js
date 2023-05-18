function grisho(input) {
    let turniri = Number(input[0]);
    let tochki = Number(input[1]);
    let a = 0
    let specheleni = 0
    for (let i = 2; i <= input.length; i++) {
        let result = input[i]

        switch (result) {
            case "F": ; a += 1200; break;
            case "SF": ; a += 720; break;
            case "W": ; a += 2000; specheleni += 1; break;
        }
    }
    let finalPoints = tochki + a



    console.log(`Final points: ${finalPoints}`)
    console.log(`Average points: ${Math.floor((finalPoints - tochki) / turniri)}`)
    console.log(`${(specheleni / turniri * 100).toFixed(2)}%`)
}
//grisho(["5" , "1400" , "F" , "SF" , "W" , "W" , "SF"])