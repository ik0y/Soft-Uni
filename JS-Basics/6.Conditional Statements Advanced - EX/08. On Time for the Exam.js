function izpit(input) {
    let chasIzpit = Number(input[0]);
    let minutaIzpit = Number(input[1]);
    let chasOn = Number(input[2]);
    let minOn = Number(input[3]);

    let chasStart = chasIzpit * 60
    let startIzpitMinuti = chasStart + minutaIzpit
    let chasIdvane = chasOn * 60
    let idvaneMinuti = chasIdvane + minOn

    let podranqvane = startIzpitMinuti - idvaneMinuti
    let earlyH = podranqvane / 60
    let earlyM = podranqvane % 60
    let zabavqne = idvaneMinuti - startIzpitMinuti
    let zabavqneChas = (zabavqne / 60)
    let zabavqneMinuti = zabavqne % 60

    if (startIzpitMinuti < idvaneMinuti && zabavqneChas <= 0) {

        console.log(`Late ${zabavqneMinuti} minutes after the start`)
    } else if (startIzpitMinuti < idvaneMinuti && zabavqneChas > 0 && zabavqneMinuti < 10) {
        console.log(`Late ${Math.floor(zabavqneChas)}:0 ${zabavqneMinuti} minutes after the start`)
    } else if (startIzpitMinuti < idvaneMinuti && zabavqneChas > 0 && zabavqneMinuti > 10) {
        console.log(`Late ${Math.floor(zabavqneChas)}:${zabavqneMinuti} minutes after the start`)
    }
    else if (podranqvane >= 0 && podranqvane <= 30) {
        console.log("On Time")
    } else if (podranqvane > 30 && podranqvane < 60) {
        console.log(`Early ${podranqvane} minutes before the start`)
    } else if (podranqvane => 60) {
        console.log(`Early ${Math.floor(earlyH)}:${earlyM} hours before the start`)
    }

    //	console.log(podranqvane)
}
//izpit(["11" , "30" , "12" , "30"])