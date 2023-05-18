function rekord(input) {
    let rekordVSekundi = Number(input[0]);
    let razstoqnieVMetri = Number(input[1]);
    let meturVSekunda = Number(input[2]);

    let prepluvane = razstoqnieVMetri * meturVSekunda
    let suprotivlenie = Math.floor(razstoqnieVMetri / 15)
    let zabavqne = (suprotivlenie * 12.5)
    let obshtoVreme = (prepluvane + (zabavqne))

    if (obshtoVreme < rekordVSekundi) {
        console.log(`Yes, he succeeded! The new world record is ${(obshtoVreme).toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(obshtoVreme - rekordVSekundi).toFixed(2)} seconds slower.`);

    }
}
rekord(["10464", "1500", "20"]);
rekord(["55555.67", "3017", "5.03"]);

