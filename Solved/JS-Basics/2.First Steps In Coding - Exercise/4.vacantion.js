function chetene(input) {
    let broi = Number(input[0]);
    let stranici = Number(input[1]);
    let dni = Number(input[2]);
    let vreme = (broi / stranici) / dni
    console.log(vreme)
}
chetene(["432", "15", "4"])