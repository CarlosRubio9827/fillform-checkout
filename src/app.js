function countPassengers() {
  const numberOfPassengers = document.getElementsByClassName(
    "passenger-data__card"
  );
  return numberOfPassengers.length;
}

function fillForm(frente, producto, email) {
  if (frente == "bac") {
    const numberOfPassengers = countPassengers();
    const passengersData = [];

    let dataPassengerElements = [];
    for (let i = 0; i < numberOfPassengers; i++) {
      passengersData.push(generateRandomPassengerData());
      // let passengerElement = document.querySelector(`#passengerForm_${i}`);
      dataPassengerElements = getElements(numberOfPassengers);
    }

    fillFormFields(passengersData, dataPassengerElements, producto, email);
  } else if (frente == "destinoJet") {
  } else {
    alert("Selecciona una opcion");
  }
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
