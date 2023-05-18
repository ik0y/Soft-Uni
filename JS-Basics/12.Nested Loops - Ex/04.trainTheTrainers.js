function trainTheTrainers(input) {

    let juryCount = Number(input[0]);
    let namePresentation = input[1];
    let index = 2;

    let presentationCounter = 0;
    let totalGrades = 0;

    while (namePresentation != "Finish") {
        presentationCounter += 1;
        let counter = index;
        let currGrades = 0;
        for (let i = counter; i < counter + juryCount; i++) {
            index++;
            currGrades += Number(input[i]);
        }

        let averageGradePerPresentation = currGrades / juryCount;

        console.log(`${namePresentation} - ${averageGradePerPresentation.toFixed(2)}.`);

        totalGrades += averageGradePerPresentation;
        namePresentation = input[index];
        index++;
    }

    let totalGradesPrint = totalGrades / presentationCounter;
    console.log(`Student's final assessment is ${totalGradesPrint.toFixed(2)}.`);
}
trainTheTrainers(["2",

    "While-Loop",

    "6.00",

    "5.50",

    "For-Loop",

    "5.84",

    "5.66",

    "Finish"])

console.log('----------------------------');

trainTheTrainers(["3",

    "Arrays",

    "4.53",

    "5.23",

    "5.00",

    "Lists",

    "5.83",

    "6.00",

    "5.42",

    "Finish"])