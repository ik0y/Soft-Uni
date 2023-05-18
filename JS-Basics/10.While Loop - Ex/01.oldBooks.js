function oldBooks(input) {
    let favouriteBook = input[0];
    let index = 1;
    let bookIsFound = false
    let nextNameBook = input[index]
    index++
    let bookCounter = 0
    while (nextNameBook !== "No More Books") {
        if (nextNameBook === favouriteBook) {
            bookIsFound = true
            break;
           bookIsFound = false
        }
        bookCounter += 1
        nextNameBook = input[index]
        index++

    }


    if (bookIsFound === false) {
        console.log("The book you search is not here!")
        console.log(`You checked ${bookCounter} books.`)
    } else if (bookIsFound === true) {
        console.log(`You checked ${bookCounter} books and found it.`)
    }
}   
    oldBooks(["The Spot",

        "Hunger Games",

        "Harry Potter",

        "Torronto",

        "Spotify",

        "No More Books"])