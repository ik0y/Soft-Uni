function basket(input) {
    let godishno = Number(input[0])
    let kecove = godishno - (godishno * 0.4);
    let ekip = kecove - (kecove * 0.2);
    let topka = ekip * 0.25;
    let aks = topka * 0.2;
    let total = godishno + kecove + ekip + topka + aks;
    console.log(total)
}
basket(["365"])