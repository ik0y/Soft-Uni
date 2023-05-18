function komision(input) {
    let grad = input[0];
    let prodajbi = Number(input[1]);
    if (prodajbi >= 0 && prodajbi <= 500) {
        switch (grad) {
            case "Sofia": console.log((prodajbi * 0.05).toFixed(2)); break;
            case "Varna": console.log((prodajbi * 0.045).toFixed(2)); break;
            case "Plovdiv": console.log((prodajbi * 0.055).toFixed(2)); break;
            default: console.log("error")
        }
    } else if (prodajbi >= 500 && prodajbi <= 1000) {
        switch (grad) {
            case "Sofia": console.log((prodajbi * 0.07).toFixed(2)); break;
            case "Varna": console.log((prodajbi * 0.075).toFixed(2)); break;
            case "Plovdiv": console.log((prodajbi * 0.08).toFixed(2)); break;
            default: console.log("error")
        }
    } else if (prodajbi >= 1000 && prodajbi <= 10000) {
        switch (grad) {
            case "Sofia": console.log((prodajbi * 0.08).toFixed(2)); break;
            case "Varna": console.log((prodajbi * 0.10).toFixed(2)); break;
            case "Plovdiv": console.log((prodajbi * 0.12).toFixed(2)); break;
            default: console.log("error")
        }
    } else if (prodajbi > 10000) {
        switch (grad) {
            case "Sofia": console.log((prodajbi * 0.12).toFixed(2)); break;
            case "Varna": console.log((prodajbi * 0.13).toFixed(2)); break;
            case "Plovdiv": console.log((prodajbi * 0.145).toFixed(2)); break;
            default: console.log("error")
        }
    } else {
        console.log("error")
    }
}