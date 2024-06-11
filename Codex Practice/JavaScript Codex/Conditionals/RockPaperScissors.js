document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('myButton').addEventListener('click', () => {
        let userInput = readInt("Choose between '0', '1', '2'");

let computerRandom = Math.floor(Math.random * 3);
let userRock0 = "Rock";
let userScissor1 = "Scissors";
let userPaper2 = "Paper"; 

if (userInput == 0 && computerRandom == 1) {
    console.log(
        "Player Picked:" + userRock0 + 
        "\n" +
        "Computer Picked: " + userScissor1 +
        "The player Won!"
    );
} 
else if(userInput == 1 && computerRandom == 2){
    console.log(
        "Player Picked:" + userScissor1 + 
        "\n" +
        "Computer Picked: " + userPaper2 +
        "The player Won!"
    );
}
else if(userInput == 2 && computerRandom == 0){
    console.log(
        "Player Picked:" + userPaper2 + 
        "\n" +
        "Computer Picked: " + userRock0 +
        "The player Won!"
    );
}
else if(computerRandom == 0 && userInput == 1){
    console.log(
        "Player Picked:" + userScissor1 + 
        "\n" +
        "Computer Picked: " + userPaper2 +
        "The player Won!"
    );
}
else if(computerRandom == 1 && userInput == 2){
    console.log(
        "Player Picked:" + userPaper2 + 
        "\n" +
        "Computer Picked: " + userRock0 +
        "The player Won!"
    );
}
else if(computerRandom == 2 && userInput == 0){
    console.log(
        "Player Picked:" + userPaper2 + 
        "\n" +
        "Computer Picked: " + userRock0 +
        "The player Won!"
    );
}
else{
    console.log("Error");
}
    });
});

