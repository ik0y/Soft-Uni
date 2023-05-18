function area(input) {
    let type = input[0];
    let size = Number(input[1]);
    let strana = Number(input[2]);
    if (type === "square") {
        let rezultat = size * size
        console.log(rezultat.toFixed(3));
    }
    else if (type === "rectangle") {
        let rezultatR = (size * strana);
        console.log(rezultatR.toFixed(3));
    }
    else if (type === "circle") {
        let rezultatC = (Math.PI * Math.pow(size, 2));
        console.log(rezultatC.toFixed(3));
    }
    else if (type === "triangle") {
        let rezultatT = ((size * strana) / 2);
        console.log(rezultatT.toFixed(3))
    }

}
area(["triangle", "4.5", "20"])