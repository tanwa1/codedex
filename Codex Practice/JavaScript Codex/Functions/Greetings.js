const Greetings = () => {
  const randomNumber = Math.floor(Math.random() * 5);

  if (randomNumber == 1) {
    console.log("Hello Mother Fucker");
  } else if (randomNumber == 2) {
    console.log("G'day! mate");
  } else if (randomNumber == 3) {
    console.log("こんにちは！");
  } else if (randomNumber == 4) {
    console.log("Como estas");
  } else {
    console.log("Heya");
  }
};

Greetings();
Greetings();
Greetings();
