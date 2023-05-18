function treking(input) {
    let grupi = Number(input[0]);
    let hora = 0;
    let musala = 0
    let montblan = 0
    let kili = 0
    let k2 = 0
    let everest = 0
    let obshtBroi = 0

    let musalaF = 0
    let montblanF = 0
    let kiliF = 0
    let k2F = 0
    let everestF = 0


    for (let i = 1; i <= grupi; i++) {
        let hora = Number(input[i]);
        obshtBroi += Number(input[i])
        if (hora <= 5) {
            musala += Number(input[i])
        } else if (hora <= 12) {
            montblan += Number(input[i])
        } else if (hora <= 25) {
            kili += Number(input[i])
        } else if (hora <= 40) {
            k2 += Number(input[i])
        } else {
            everest += Number(input[i])
        }
        musalaF = (musala / obshtBroi) * 100
        montblanF = (montblan / obshtBroi) * 100
        kiliF = (kili / obshtBroi) * 100
        k2F = (k2 / obshtBroi) * 100
        everestF = (everest / obshtBroi) * 100

    }

    console.log(`${musalaF.toFixed(2)}%`)
    console.log(`${(montblanF).toFixed(2)}%`)
    console.log(`${(kiliF).toFixed(2)}%`)
    console.log(`${(k2F).toFixed(2)}%`)
    console.log(`${(everestF).toFixed(2)}%`)
}
treking(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
