
    const userBirthMonth = "March"; 

/* You can change the month you were born in 
   If you want to get an error just initalize 
   anything as long as it's a string  wink* wink */

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

    let zodiacSigns = {
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

    let fortunes = [
        "You will have a great day!",
        "A surprise is waiting for you.",
        "Good news is on the way.",
        "You will achieve your goals.",
        "Someone special will bring joy to your life.",
        "Expect to make new friends.",
        "You will find what you have been seeking.",
        "Adventure is in your future.",
        "Success will come easily to you.",
        "Happiness is around the corner."
      ];
      
        let found = false;

      for (let index = 0; index < months.length; index++) {

        if (months[index] === userBirthMonth.toUpperCase()) {
            
            let exactMonth = months[index];
            let randFortuneIndex = Math.floor(Math.random() * fortunes.length);
            let randomFortune = fortunes[randFortuneIndex];

            console.log(zodiacSigns[exactMonth]);
            console.log("Your Fortune: " + randomFortune);
            found = true;
            break;
        }
        
      }
      if(!found) {
        console.log("Error");
    }

