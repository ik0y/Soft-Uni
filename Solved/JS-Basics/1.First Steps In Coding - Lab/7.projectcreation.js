function project(input) {
    let name = input[0];
    let broi = Number(input[1]);
    let hrs = broi * [3];
    console.log(`The architect ${name} will need ${hrs} hours to complete ${broi} project/s.`)
}
project(["Ivan", "3"])