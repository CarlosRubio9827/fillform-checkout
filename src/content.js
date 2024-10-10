

function countPassengers() {
  const numberOfPassengers = document.getElementsByClassName(
    "passenger-data__card"
  );
  console.log(generateRandomPassengerData());

  return numberOfPassengers.length;
}

function generatePassengerData() {}

function fillForm(frente, producto) {
  console.log(frente);
  console.log(producto);
  console.log("Faker fillform: ");
  
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
    countPassengers();
    console.log(countPassengers());
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
