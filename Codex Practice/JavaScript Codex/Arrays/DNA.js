let myDNA = [];

const dnaPieces = ["A", "C", "G", "T"];

for (let index = 0; index < 24; index++) {
  let index1 = Math.floor(Math.random() * dnaPieces.length);
  let index2 = Math.floor(Math.random() * dnaPieces.length);
  let index3 = Math.floor(Math.random() * dnaPieces.length);

  myDNA.push(dnaPieces[index1] + dnaPieces[index2] + dnaPieces[index3]);
}
console.log(myDNA);
