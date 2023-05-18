function biletZaKino(input) {
    let den = input[0];

    if (den === "Monday" || den === "Tuesday" || den === "Friday") {
        console.log("12");
    } else if (den === "Wednesday" || den === "Thursday") {
        console.log("14")
    } else {
        console.log("16")
    }
}
