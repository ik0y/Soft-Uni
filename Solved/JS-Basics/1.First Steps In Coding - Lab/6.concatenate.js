function concatenate(input) {
    let firstname = input[0];
    let lastName = input[1];
    let age = Number(input[2]);
    let town = input[3];
    console.log(`You are ${firstname} ${lastName}, a ${age}-years old person from ${town}.`)

}
concatenate(["Ivan", "Nikolov", "29", 'Varna'])