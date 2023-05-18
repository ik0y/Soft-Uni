function rounding(a, b) {
    if (b > 15) {
        b = 15
    }
    let c = (a.toFixed(b));
    console.log(parseFloat(c));


}
rounding(10.5, 3)