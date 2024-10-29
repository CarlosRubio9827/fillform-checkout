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
  // if (frente == "bac") {
  const passengersData = [];

  let dataPassengerElements = [];
  for (let i = 0; i < numberOfPassengers; i++) {
    passengersData.push(generateRandomPassengerData());
    // let passengerElement = document.querySelector(`#passengerForm_${i}`);
  }
  dataPassengerElements = getElements(numberOfPassengers, frente);
  fillFormFields(passengersData, dataPassengerElements, producto, frente, email);
  // } else if (frente == "destinoJet") {
  // } else {
  //   alert("Selecciona una opcion");
  // }
}

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.action === "fillForm") {
//     fillForm(request.frente, request.producto);
//   }
// });

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.action === "fillForm") {
//     fillForm(request.frente, request.producto);
//   }
// });
