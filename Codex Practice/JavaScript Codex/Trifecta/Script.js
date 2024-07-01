let lightIndex = 0;

function changeLight() {
  const redLIght = document.getElementById("red");
  const yellowLight = document.getElementById("yellow");
  const greenLight = document.getElementById("green");
  lightIndex = (lightIndex + 1) % 3;
  if (lightIndex === 0) {
    redLIght.style.backgroundColor = "red";
    yellowLight.style.backgroundColor = "";
    greenLight.style.backgroundColor = "";
  } else if (lightIndex === 1) {
    redLIght.style.backgroundColor = "";
    yellowLight.style.backgroundColor = "yellow";
    greenLight.style.backgroundColor = "";
  } else {
    redLIght.style.backgroundColor = "";
    yellowLight.style.backgroundColor = "";
    greenLight.style.backgroundColor = "green";
  }
}
