function tekst(input) {
    let index = 0

    let command = input[index];
    index++

    while (command !== "Stop") {

        console.log(command)

        command = input[index]
        index++

    }





}
tekst(["Nakov", "Soft", "Sofia", "Bulgaria", "Stop", "tekt"])