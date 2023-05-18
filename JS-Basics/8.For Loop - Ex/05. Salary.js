function zaplata(input) {
    let tab = Number(input[0]);
    let sala = Number(input[1]);
    let globa = 0

    for (let i = 2; i < input.length; i++) {
        let open = input[i];

        switch (open) {
            case "Facebook": globa += 150; break;
            case "Instagram": globa += 100; break;
            case "Reddit": globa += 50; break;
        }
    }
    if (globa >= sala) {
        console.log("You have lost your salary.")
    } else {
        console.log(sala - globa)
    }



}
//zaplata(["3" , "500" , "Facebook" , "Dev.bg"])