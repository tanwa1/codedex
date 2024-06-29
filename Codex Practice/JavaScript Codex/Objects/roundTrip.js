const departTripTickets = {
  name: "Ran Maru",
  from: "Tokyo, Japan",
  to: "New York, USA",
  businessClass: false,
  leaveTime: 15,
  arriveTime: 24,
  upgrade() {
    if (this.businessClass === false) {
      console.log("Ticket Upgraded!");
    } else {
      console.log("Your ticket is already business class!");
    }
  },
  flightTime() {
    departTripTickets.businessClass = true;
    let flightTime = departTripTickets.arriveTime - departTripTickets.leaveTime;
    if (flightTime < 0) {
      flightTime = flightTime * -1;
    }

    console.log(
      departTripTickets.name +
        " came from: " +
        departTripTickets.from +
        "\nHis destination is: " +
        departTripTickets.to +
        "\nDoes he have a business class ticket?: " +
        departTripTickets.businessClass +
        "\nHe will leave in: " +
        departTripTickets.leaveTime +
        "\nAnd will arrive in " +
        departTripTickets.arriveTime +
        "\nHis travel time is: " +
        flightTime +
        " Hours"
    );
  },
};

const returnTripTickets = {
  name: "Ran Maru",
  from: "New York, USA",
  to: "Tokyo, Japan",
  businessClass: false,
  leaveTime: 24,
  arriveTime: 10,
  upgrade() {
    if (this.businessClass === true) {
      console.log("Your ticket is already business class!");
    } else {
      console.log(
        "You need to upgrade your ticket if you want Business Class Ticket."
      );
    }
  },
  flightTime() {
    let flightTime = returnTripTickets.arriveTime - returnTripTickets.leaveTime;
    if (flightTime < 0) {
      flightTime = flightTime * -1;
    }
    console.log(
      returnTripTickets.name +
        " came from: " +
        returnTripTickets.from +
        "\nHis destination is: " +
        returnTripTickets.to +
        "\nDoes he have a business class ticket?: " +
        returnTripTickets.businessClass +
        "\nHe will leave in: " +
        returnTripTickets.leaveTime +
        "\nAnd will arrive in " +
        returnTripTickets.arriveTime +
        "\nHis travel time is: " +
        flightTime +
        " Hours"
    );
  },
};

departTripTickets.upgrade();
departTripTickets.flightTime();
console.log(
  `---------------------------------------------------------------------------------`
);
returnTripTickets.upgrade();
returnTripTickets.flightTime();
