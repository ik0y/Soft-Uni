function number(input) {
    let chislo = Number(input[0]);
    if (chislo < 100) {
        console.log("Less than 100");
    }
    else if (chislo > 200) {
        console.log("Greater than 200");
    }
    else {
        console.log("Between 100 and 200");
    }

}
number(["2009"])