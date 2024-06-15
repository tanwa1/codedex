
const numFifty = 50;
for (let index = 2; index < numFifty; index++) {
   if (index % 2 == 1) {
     continue;
   } 
   else if (index == 42){
      console.log(index);
    break;
   }
   console.log(index);
}