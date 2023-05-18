function depozit(input) {
    let depoziranaSuma = Number(input[0]);
    let srok = Number(input[1]);
    let lihva = Number(input[2]) / 100;
    let natrupanaLihva = depoziranaSuma * lihva;
    let mesechnaLihva = natrupanaLihva / 12;
    let obshtaSuma = depoziranaSuma + (srok * mesechnaLihva);
    console.log(obshtaSuma);
}
depozit(["2350", "6", "7"])