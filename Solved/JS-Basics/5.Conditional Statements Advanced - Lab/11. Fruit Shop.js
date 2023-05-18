function fruitShop(input) {
    let plod = input[0];
    let den = input[1];
    let qtt = Number(input[2]);

    if (den === "Monday" || den === "Tuesday" || den === "Wednesday" || den === "Thursday" || den === "Friday") {
        switch (plod) {
            case "banana": console.log((qtt * 2.50).toFixed(2)); break;
            case "apple": console.log((qtt * 1.20).toFixed(2)); break;
            case "orange": console.log((qtt * 0.85).toFixed(2)); break;
            case "grapefruit": console.log((qtt * 1.45).toFixed(2)); break;
            case "kiwi": console.log((qtt * 2.70).toFixed(2)); break;
            case "pineapple": console.log((qtt * 5.50).toFixed(2)); break;
            case "grapes": console.log((qtt * 3.85).toFixed(2)); break;
            default: console.log("error")
        }
    }
    else if (den === "Saturday" || den === "Sunday") {
        switch (plod) {
            case "banana": console.log((qtt * 2.70).toFixed(2)); break;
            case "apple": console.log((qtt * 1.25).toFixed(2)); break;
            case "orange": console.log((qtt * 0.90).toFixed(2)); break;
            case "grapefruit": console.log((qtt * 1.60).toFixed(2)); break;
            case "kiwi": console.log((qtt * 3.00).toFixed(2)); break;
            case "pineapple": console.log((qtt * 5.60).toFixed(2)); break;
            case "grapes": console.log((qtt * 4.20).toFixed(2)); break;
            default: console.log("error")
        }
    }
    else {
        console.log("error")
    }

}


