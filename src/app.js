function countPassengers() {
  const numberOfPassengers = document.getElementsByClassName(
    "passenger-data__card"
  );
  console.log("numberofPassengers: ", numberOfPassengers);
  return numberOfPassengers.length;
}

function fillForm(frente, producto) {
 
  if (frente == "bac") {
    const numberOfPassengers = countPassengers();
    const passengersData = [];

    let dataPassengerElements = [];
    for (let i = 0; i < numberOfPassengers; i++) {
      passengersData.push(generateRandomPassengerData());
      // let passengerElement = document.querySelector(`#passengerForm_${i}`);
      dataPassengerElements = getElements(numberOfPassengers);
    }

    console.log("Procutos:  =============",producto)

    fillFormFields(passengersData, dataPassengerElements, producto);
    console.log(dataPassengerElements);
    console.log(passengersData);

    // console.log(passengersElements[0].children[0].children[1]);
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
