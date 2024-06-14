const luckyNumber = 10;
let guess = Math.floor(Math.random() * 10);
while (guess != 10) {
    guess = Math.floor(Math.random() * 10);
    console.log("My lucky number is not: " + guess);
}
console.log("My lucky number is" + guess);