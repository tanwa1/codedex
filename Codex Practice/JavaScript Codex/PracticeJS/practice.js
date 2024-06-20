function objectArray() {
  const dog = {};

  dog.Breed = "Askal";
  dog.Color = "White";
  dog.Age = 3;
  console.log(dog);
}

function addition(num1, num2) {
  return num1 + num2;
}

var num = 10;

function forLoop() {
  for (let index = 0; index < num; index++) {
    console.log(index);
  }
}

function pushNpop() {
  const popMethod = ["One", "Two", "Three", "Four"];

  console.log(popMethod);
  popMethod.push("Five");
  console.log(popMethod);
  popMethod.pop();
  console.log(popMethod);
}

function forLoopLength() {
  const dogBreed = ["Pitbull", "Askal", "Rotweiller", "Shih Tzu", "Chihuahua"];

  for (let index = 0; index < dogBreed.length; index++) {
    console.log(index);
  }
}

function objectTwo(parameter) {
     const userName = {
        Name: "Jephunneh",
        Age: 30,
        Occupation: 'Astronaut',
        Language: "Sugbu Bisdak",
        Address: "Japan Third Floor"
     }
     return userName[parameter]
  }

let userInput = "2";

switch (userInput.toLowerCase()) {
  case "1":
    objectArray();
    break;

  case "2":
    console.log(addition(1, 2));
    break;

  case "2":
    forLoop();
    break;

  case "2":
    forLoopLength();
    break;

    case "3":
    console.log(objectTwo("Language"));
    break;

  case "4":
    pushNpop();
  default:
    break;
}
