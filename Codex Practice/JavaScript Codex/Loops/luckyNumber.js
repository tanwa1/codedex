const luckyNumber = 10;
let guess = Math.floor(Math.random() * 10) + 1;
while (guess != luckyNumber) {
    console.log("My lucky number is not: " + guess);
    guess = Math.floor(Math.random() * 10) + 1;
}
console.log("My lucky number is " + guess);