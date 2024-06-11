let randomAQI = Math.floor(Math.random() * 300) + 1;

console.log(randomAQI);

if (randomAQI >= 0 &&  randomAQI <= 50) {
    console.log("Good");
} 
else if(randomAQI >= 51 && randomAQI <=  100){
    console.log("Moderate");
}
else if(randomAQI >= 101 && randomAQI <=  150){
    console.log("Unhealthy (Sensitive Groups)");
}
else if(randomAQI >= 151 && randomAQI <=  200){
    console.log("Unhealthy");
}
else if(randomAQI >= 201 && randomAQI <= 300){
    console.log("Very Unhealthy");
}
else{
    console.log("Hazardous");
}