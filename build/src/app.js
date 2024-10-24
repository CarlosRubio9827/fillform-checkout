function countPassengers() {
  const numberOfPassengers = document.getElementsByClassName(
    "passenger-data__card"
  );
  console.log("numberofPassengers: ", numberOfPassengers);
  return numberOfPassengers.length;
}

function fillForm(frente, producto) {
  //   const xpathResult = document.evaluate(
  //     '//input[@name="search"]',
  //     document,
  //     null,
  //     XPathResult.FIRST_ORDERED_NODE_TYPE,
  //     null
  //   );
  //   const inputElement = xpathResult.singleNodeValue;

  //   // Comprobar si el elemento existe y agregar un valor
  //   if (inputElement) {
  //     inputElement.value = "Nuevo valor"; // Cambia 'Nuevo valor' por el texto que desees
  //   }
  //   document.body.style.backgroundColor = "lightblue"; // Cambia el color aquí
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
