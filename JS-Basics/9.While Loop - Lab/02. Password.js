function tekst(input) {
    let index = 0

    let name = input[index];
    index++
    let pass = input[index];
    index++
    let tempPass = input[index];
    index++

    while (pass !== tempPass) {

        tempPass = input[index]
        index++

    }
    console.log(`Welcome ${name}!`)




}
   tekst(["Gosho","1234","pass","Bulgaria","Stop","tekt", "2341" , "1242" ,"1234"])