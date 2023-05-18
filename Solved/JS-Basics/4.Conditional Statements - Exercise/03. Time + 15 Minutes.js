function chasMinuti(input) {
    let chas = Number(input[0]);
    let minuti = Number(input[1]);
    let probaC = chas % 24
    let minutesPlus15 = 15 + minuti % 60
    if (minutesPlus15 >= 60) {
        minutesPlus15 -= 60
        probaC += 1
        if (probaC >= 24) {
            probaC -= 24
        }
    }
    if (minutesPlus15 < 10) {
        console.log(`${probaC}:0${minutesPlus15}`)
    } else {
        console.log(`${probaC}:${minutesPlus15}`)
    }
}


chasMinuti(["12", "19"])