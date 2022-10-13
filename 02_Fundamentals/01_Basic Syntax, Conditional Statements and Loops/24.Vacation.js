function vacation(numPeople, typeGroup, day) {
  let pricePerPerson = 0;
  let totalPrice = 0;
  if (typeGroup == "Students") {
    if (day == "Friday") {
      pricePerPerson = 8.45;
    } else if (day == "Saturday") {
      pricePerPerson = 9.8;
    } else if (day == "Sunday") {
      pricePerPerson = 10.46;
    }
    totalPrice = pricePerPerson * numPeople;
    if (numPeople >= 30) {
      totalPrice *= 0.85;
    }
  } else if (typeGroup == "Business") {
    if (day == "Friday") {
      pricePerPerson = 10.9;
    } else if (day == "Saturday") {
      pricePerPerson = 15.6;
    } else if (day == "Sunday") {
      pricePerPerson = 16;
    }
    if (numPeople >= 100) {
      numPeople -= 10;
    }
    totalPrice = pricePerPerson * numPeople;
  } else if (typeGroup == "Regular") {
    if (day == "Friday") {
      pricePerPerson = 15;
    } else if (day == "Saturday") {
      pricePerPerson = 20;
    } else if (day == "Sunday") {
      pricePerPerson = 22.5;
    }
    totalPrice = pricePerPerson * numPeople;
    if (10 <= numPeople && numPeople <= 20) {
      totalPrice *= 0.95;
    }
  }
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30, 'Students', 'Sunday');
