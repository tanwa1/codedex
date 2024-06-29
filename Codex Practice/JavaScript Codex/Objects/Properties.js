const car = {
  model: "Tesla Model X",
  year: "June 22, 2012 ",
  color: "black",
  used: true,
};

if (car.used === true) {
  console.log(
    "I'm looking for a " + car.year + "" + car.model + " that is used"
  );
} else if (car.used === false) {
  console.log(
    "I'm looking for a " + car.year + " " + car.model + " that is new"
  );
} else {
  console.log("Undefined");
}
