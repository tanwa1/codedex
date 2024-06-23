const characters = [
  "The Wally Watchers",
  "Wilma",
  "Fritz",
  "Wizard Whitebeard",
  "Odlaw",
  "Waldo",
  "Woof",
];

let waldoIndex = characters.indexOf("Waldo");

if (characters.includes("Waldo") === true) {
  console.log("Found Waldo at index" + characters.indexOf("Waldo"));
} else {
  console.log("Not Found");
}
