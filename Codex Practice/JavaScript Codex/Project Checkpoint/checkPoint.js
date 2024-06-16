document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("myButton").addEventListener("click", () => {
    const userBirthMonth = prompt("What month were you born in?");

    const months = [
        "JANUARY",
        "FEBRUARY",
        "MARCH",
        "APRIL",
        "MAY",
        "JUNE",
        "JULY",
        "AUGUST",
        "SEPTEMBER",
        "OCTOBER",
        "NOVEMBER",
        "DECEMBER",
      ];


    const zodiacSigns = {
      "JANUARY": "Capricorn",
      "FEBRUARY": "Aquarius",
      "MARCH": "Pisces",
      "APRIL": "Aries",
      "MAY": "Taurus",
      "JUNE": "Gemini",
      "JULY": "Cancer",
      "AUGUST": "Leo",
      "SEPTEMBER": "Virgo",
      "OCTOBER": "Libra",
      "NOVEMBER": "Scorpio",
      "DECEMBER": "Sagittarius",
    };

    const randomIndex = Math.floor(Math.random() * months.length);
    const randomMonth = months[randomIndex];

    // if (randomMonth === userBirthMonth.toUpperCase()) {
    //   console.log(zodiacSigns[randomMonth]);
    //   console.log("Congrats");
    // } else {
    //     console.log("The random month was " + randomMonth + ". Try again!");
    // }

    for (let index = 0; index < months.length; index++) {
        if (randomMonth === userBirthMonth.toUpperCase()) {
            console.log(zodiacSigns[randomMonth]);
            console.log("Congrats");
          } else {
              console.log("The random month was " + randomMonth + ". Try again!");
          }
    }


  });
});
