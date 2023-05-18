function sum(input) {
    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);
    let totalTime = first + second + third;
    let minuti = Math.floor(totalTime / 60);
    let sec = (totalTime % 60);
    if (sec < 10) {
        console.log(`${minuti}:0${sec}`);
    }
    else { console.log(`${minuti}:${sec}`) };

}
sum(["50", "50", "49"])