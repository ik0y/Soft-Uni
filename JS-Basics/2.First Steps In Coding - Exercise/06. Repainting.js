function repainting(input){
    let nailoin = (Number(input[0]) + 2) * 1.50;
    let boq = (Number(input[1]) + (Number(input[1]) * 0.1)) * 14.50;
    let razreditel = Number(input[2]) * 5;
    let torbichki = 0.4;
    let chasove = Number(input[3]);
    let materiali = nailoin + boq + razreditel + torbichki
    let total = ((materiali * 0.3) * chasove) + materiali
    console.log(total)
}
repainting(["10", "11", "4", "8"])