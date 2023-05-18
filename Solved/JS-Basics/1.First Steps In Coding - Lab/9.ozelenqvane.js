function ozelenqvane(input) {
    let kvadrat = Number(input[0])
    let cenaKvadrat = Number([7.61])
    let otsupka = Number([0.18])
    let cqlDvor = kvadrat * cenaKvadrat
    let namalenie = cqlDvor * otsupka
    let final = cqlDvor - namalenie
    console.log(`The final price is: ${final} lv.`)
    console.log(`The discount is: ${namalenie} lv.`)
}
ozelenqvane(["150"])