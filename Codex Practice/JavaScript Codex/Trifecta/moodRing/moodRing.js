let selectStone = document.getElementById("stone");

function howAreyou() {
  const randomNumber = Math.floor(Math.random() * 9) + 1;
  const randomNumberStr = randomNumber.toString();

  for (let i = 0; i < randomNumberStr.length; i++) {
    if (randomNumberStr[i] === "1") {
      document.getElementById("stone").style.backgroundColor = "red";
      break;
    } else if (randomNumberStr[i] === "2") {
      document.getElementById("stone").style.backgroundColor = "orange";
      break;
    } else if (randomNumberStr[i] === "3") {
      document.getElementById("stone").style.backgroundColor = "yellow";
      break;
    } else if (randomNumberStr[i] === "4") {
      document.getElementById("stone").style.backgroundColor = "green";
      break;
    } else if (randomNumberStr[i] === "5") {
      document.getElementById("stone").style.backgroundColor = "blue";
      break;
    } else if (randomNumberStr[i] === "6") {
      document.getElementById("stone").style.backgroundColor = "#4169e1";
      break;
    } else if (randomNumberStr[i] === "7") {
      document.getElementById("stone").style.backgroundColor = "#00008b";
      break;
    } else if (randomNumberStr[i] === "8") {
      document.getElementById("stone").style.backgroundColor = "purple";
      break;
    } else if (randomNumberStr[i] === "9") {
      document.getElementById("stone").style.backgroundColor = "black";
      break;
    } else {
      console.log("Error, Try again! :)");
    }
  }
}
