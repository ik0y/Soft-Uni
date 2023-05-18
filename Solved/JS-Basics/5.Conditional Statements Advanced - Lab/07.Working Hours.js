function rabotnoVreme(input) {
    let chas = Number(input[0]);
    let den = input[1];
    if (chas >= 10 && chas <= 18) {
        if (den === "Monday" || den === "Tuesday" || den === "Wednesday" || den === "Thursday" || den === "Friday" || den === "Saturday") {
            console.log("open")
        } else {
            console.log("closed")
        }
    } else {
        console.log("closed")
    }

}