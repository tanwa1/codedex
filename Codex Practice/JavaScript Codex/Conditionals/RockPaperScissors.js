document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('myButton').addEventListener('click', () => {
        let userInput = parseInt(prompt("Choose between '0' (Rock), '1' (Scissors), '2' (Paper)"));
       
        if (isNaN(userInput) || userInput < 0 || userInput > 2) {
            console.log("Invalid input! Please choose 0, 1, or 2.");
            return;
        }

        let computerRandom = Math.floor(Math.random() * 3);
        

        // 0 = Rock 
        // 1 = Scissors
        // 2 = Paper
        const choices = ["Rock", "Scissor", "Paper"];
        const userChoice = choices[userInput];
        const computerChoice = choices[computerRandom];

        if (userInput === 0 && computerRandom === 1 ||
            userInput === 1 && computerRandom === 2 ||
            userInput === 2 && computerRandom === 0) {
            console.log(
                "Player Picked:" + userChoice +
                "\n" +
                "Computer Picked: " + computerChoice +
                "\n" +
                "The player Won!"
            );
        }
        else if (computerRandom === 0 && userInput === 1 ||
                 computerRandom === 1 && userInput === 2 ||
                 computerRandom === 2 && userInput === 0) {

            console.log(
                "Computer Picked:" + computerChoice +
                "\n" +
                "Player Picked: " + userChoice +
                "\n" +
                "The computer Won!"
            );
        }
        else if (userInput === computerRandom) {
            console.log(
                "Player Picked: " + userChoice +
                "\n" +
                "Computer Picked: " + computerChoice +
                "\n" +
                "It's a tie!"
            );
        }
        else {
            console.log("Error");
        }
    });
});

