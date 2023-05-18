function histograma(input) {
    let broi = Number(input[0]);
    let range1 = 0;
    let range2 = 0;
    let range3 = 0;
    let range4 = 0;
    let range5 = 0;

    for (let i = 1; i <= broi; i++) {
        let curNum = Number(input[i])
        if (curNum < 200) {
            range1++;
        } else if (curNum < 400) {
            range2++;
        } else if (curNum < 600) {
            range3++;
        } else if (curNum < 800) {
            range4++
        } else {
            range5++
        }


    }
    let p1 = (range1 / broi) * 100
    let p2 = (range2 / broi) * 100
    let p3 = (range3 / broi) * 100
    let p4 = (range4 / broi) * 100
    let p5 = (range5 / broi) * 100

    console.log(`${p1.toFixed(2)}%`)
    console.log(`${p2.toFixed(2)}%`)
    console.log(`${p3.toFixed(2)}%`)
    console.log(`${p4.toFixed(2)}%`)
    console.log(`${p5.toFixed(2)}%`)
}
    //histograma(["3" , "1" , "2" , "999"])