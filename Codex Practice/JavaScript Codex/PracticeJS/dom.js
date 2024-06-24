const changeButton = document.getElementById("submit-button");

changeButton.addEventListener("click", function () {
  const changeText = document.getElementById("text");
  changeText.style.color = "green";
  changeButton.innerHTML = "One";
});

const showButton = document.getElementById("showButton");

showButton.addEventListener("click", function () {
  const changeText = document.getElementById("showParagraph");
  changeText.style.fontSize = "30px";

  const outPut = document.getElementById("textInput").value;
  changeText.textContent = outPut;
});

const clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", function () {
  const changeText = document.getElementById("showParagraph");
  const clearArea = document.getElementById("textInput");
  clearArea.textContent = " ";
  changeText.textContent = " ";
});
