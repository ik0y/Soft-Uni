function supply(input) {
    let himikal = Number(input[0]) * 5.80;
    let markeri = Number(input[1]) * 7.20;
    let preparat = Number(input[2]) * 1.20;
    let namalenie = Number(input[3]) / 100;
    let vsichkoSNamalenieto = (himikal + markeri + preparat) - ((himikal + markeri + preparat) * namalenie);
    console.log(vsichkoSNamalenieto)
}
supply(["2", "3", "4", "25"])