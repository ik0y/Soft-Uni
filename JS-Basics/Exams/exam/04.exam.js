function exam(input) {
    let students = Number(input[0]);
    let topStudents = 0
    let dobri = 0
    let sredni = 0
    let slabi = 0
    let totalGrades = 0


    for (let g = 1; g <= students; g++) {
        let grades = Number(input[g])
        grades.toFixed(2)

        if (grades >= 5.00) {
            topStudents++

        } else if (grades >= 4.00 && grades <= 4.99) {
            dobri++
        } else if (grades >= 3.00 && grades <= 3.99) {
            sredni++
        } else if (grades < 3.00) {
            slabi++
        }


        totalGrades += grades
    }




    console.log(`Top students: ${((topStudents / students) * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((dobri / students) * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((sredni / students) * 100).toFixed(2)}%`);
    console.log(`Fail: ${((slabi / students) * 100).toFixed(2)}%`);
    console.log(`Average: ${((totalGrades / students).toFixed(2))}`);





}
exam(["10",
    "3.00",
    "2.99",
    "5.68",
    "3.01",
    "4",
    "4",
    "6.00",
    "4.50",
    "2.44",
    "5"])
console.log('===');
exam(["6",
    "2",
    "3",
    "4",
    "5",
    "6",
    "2.2"])
