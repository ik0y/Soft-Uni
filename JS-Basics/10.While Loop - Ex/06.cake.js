function cake(input) {
    let index = 0;
    let w = Number(input[index]);
    index++
    let l = Number(input[index]);
    index++

    let command = input[index];
    index++
    let fullCake = w * l
    let noMoreCake = false

    while (command !== "STOP") {
        let piece = Number(command);
        fullCake -= piece;
        if(fullCake <= 0){
            noMoreCake = true
            break;
        }



        command = input[index]
        index++
    }



    if(noMoreCake){
        console.log(`No more cake left! You need ${Math.abs(fullCake)} pieces more.`);

    }else{
        console.log(`${fullCake} pieces are left.`);

    }
    

}
cake(["10",

    "10",

    "20",

    "20",

    "20",

    "20",

    "21"])

console.log("---------------");
cake(["10",

    "2",

    "2",

    "4",

    "6",

    "STOP"])