let chineseYuan = 560;
let japaneseYen = 2455;
let southkorenWon  = 3280;

let yuanTOdollar = chineseYuan * 0.14;

let yenTOdollar = japaneseYen * 0.0072;

let wonTOdollar = southkorenWon * 0.00076;

const totalUSD = yuanTOdollar + yenTOdollar + wonTOdollar;

console.log("What do you have left in Yuan? " + chineseYuan);
console.log("What do you have left in Yen? " + japaneseYen);
console.log("What do you have left in Won? " + southkorenWon);
console.log("                                          ");
console.log("Yuan to Dollar: " + yuanTOdollar);
console.log("Yen to Dollar: " + yenTOdollar);
console.log("Won to Dollar: " + wonTOdollar);
console.log("                                          ");
console.log("Total amount: " + totalUSD);