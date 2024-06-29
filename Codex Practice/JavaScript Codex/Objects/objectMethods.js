const pigAnimal = {
  name: "Bacon",
  type: "Pig",
  age: 5,
  pigSound: function () {
    console.log(
      pigAnimal.name +
        " is a " +
        pigAnimal.age +
        " year old " +
        pigAnimal.type +
        " that goes " +
        "Oink! Oink!"
    );
  },
};

const catAnimal = {
  name: "Clumsy",
  type: "Cat",
  age: 8,
  catSound: function () {
    console.log(
      catAnimal.name +
        " is a " +
        catAnimal.age +
        " year old " +
        catAnimal.type +
        " that goes " +
        "Meow! Meow!"
    );
  },
};

const dogAnimal = {
  name: "ToyToy",
  type: "Dog",
  age: 9,
  dogSound: function () {
    console.log(
      dogAnimal.name +
        " is a " +
        dogAnimal.age +
        " year old " +
        dogAnimal.type +
        " that goes " +
        "Wan! Wan!"
    );
  },
};

pigAnimal.pigSound();
catAnimal.catSound();
dogAnimal.dogSound();
