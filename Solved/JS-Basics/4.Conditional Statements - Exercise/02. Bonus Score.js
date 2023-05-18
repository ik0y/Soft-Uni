function bon(input) {
    let pts = Number(input[0]);
    let bonus = 0.0;

    if (pts <= 100) {
        bonus = 5;
    } else if (100 < pts && pts < 1000) {
        bonus = pts * 0.2;
    } else if (pts > 1000) {
        bonus = pts * 0.1;
    }
    if (pts % 2 === 0) {
        bonus += 1;
    } else if (pts % 10 === 5) {
        bonus += 2;
    }
    console.log(bonus)
    console.log(pts + bonus)
}
bon(["20"])