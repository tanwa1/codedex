const memeArray = [
  "https://i.imgur.com/bSi4xLb.png",
  "https://i.imgur.com/6y0G7N0.png",
  "https://i.imgur.com/LXnRao1.png",
  "https://i.imgur.com/Qqoxh1N.png",
  "https://i.imgur.com/Mef4Jsx.png",
  "https://i.chzbgr.com/full/10381671424/hFB1FDBF5/most-time-feeling-10-years-worth-trauma-and-repressed-emotions-at-slightest-emotional-provocation",
  "https://i.chzbgr.com/full/10381669888/h54A1B523/vibing-off-3-hours-sleep-and-400-mg-caffeine",
  "https://i.chzbgr.com/full/10381670400/h2958070B/open-camera-on-phone-and-turn-front-facing-2",
  "https://i.chzbgr.com/full/10381681408/h1790EC61/u-dont-really-know-ur-feeling-but-theres-alot-there-liveascentcltcom",
];
let captionsArray = [
  "Hello my darkness old friend",

  ,
  "I have come to talk with you again",
  "Because a vision softly creeping",
  "Left its seeds while I was sleeping",
  "And the vision that was planted in my brain",
  "Still remains, Within the sound of silence",
  "In restless dreams I walked alone",
  "Narrow streets of cobblestone",
  "'Neath the halo of a street lamp",
  "I turned my collar to the cold and damp",
  "When my eyes were stabbed by the flash of a neon light",
  "That split the night",
  "And touched the sound of silence",
];

let randomMeme = document.getElementById("random-meme");

let randomCaption = document.getElementById("random-caption");

let generatorButton = document.getElementById("generator-button");

generatorButton.addEventListener("click", function () {
  let randomIndex = Math.floor(Math.random() * memeArray.length);

  document.getElementById("random-meme").src = memeArray[randomIndex];

  document.getElementById("random-caption").innerText =
    captionsArray[randomIndex];

  console.log(randomIndex);
});

// document.getElementById(addEventListener("click", function () {
//     let randomIndex = Math.floor(Math.random() * captionsArray.length);

//     document.getElementById("random-meme").src = memeArray[randomIndex];

//     document.getElementById("random-caption").innerText =
//       captionsArray[randomIndex];
//   })
// );
