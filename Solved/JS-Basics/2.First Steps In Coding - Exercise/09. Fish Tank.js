function fishtank(input) {
    let d = Number(input[0]);
    let sh = Number(input[1]);
    let v = Number(input[2]);
    let p = Number(input[3]) / 100;
    let obemLitri = (d * sh * v) / 1000;
    let nujniLitri = obemLitri * (1 - p);

    console.log(nujniLitri)
}
fishtank(["85", "75", "47", "17"])