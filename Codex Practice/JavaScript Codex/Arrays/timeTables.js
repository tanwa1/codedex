let multiple = 9;

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let index = 0; index < numbers.length; index++) {
    let times = multiple * index
    console.log([multiple] + " * " + [index] + " = " + times);
}