function countPassengers(frente) {
  let numberOfPassengers;
  if (frente == "bac") {
    numberOfPassengers = document.getElementsByClassName(
      "passenger-data__card"
    );
  } else if (frente == "destinoJet") {
    numberOfPassengers = document.querySelectorAll(
      ".passengers .passengerGeneric"
    );
  }
  return numberOfPassengers.length;
}

function fillForm(frente, producto, email) {
  const numberOfPassengers = countPassengers(frente);
  
  const passengersData = [];

  let dataPassengerElements = [];
  for (let i = 0; i < numberOfPassengers; i++) {
    passengersData.push(generateRandomPassengerData());
  }
  dataPassengerElements = getElements(numberOfPassengers, frente);
  fillFormFields(
    passengersData,
    dataPassengerElements,
    producto,
    frente,
    email
  );
}
