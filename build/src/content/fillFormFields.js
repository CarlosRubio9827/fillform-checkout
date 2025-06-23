// Dispara eventos de input y change en un elemento
function triggerInputChange(element) {
  if (!element) return;
  element.dispatchEvent(new Event("input", { bubbles: true }));
  element.dispatchEvent(new Event("change", { bubbles: true }));
}

const ProductTypes = {
  CARS: "cars",
  HOTELS: "hotels",
  ACTIVITIES: "activities",
  ASSISTANCES: "assistances",
};

// Rellena un campo y dispara los eventos correspondientes
function setFieldValue(element, value) {
  if (element) {
    element.value = value;
    triggerInputChange(element);
  }
}

// Selecciona fecha usando los selectores del datepicker
function selectDate(dateString) {
  const [day, month, year] = dateString.split("/");
  const yearElement = document.querySelector('.ngb-dp-navigation-select select[title="Select year"]');
  if (yearElement) {
    yearElement.value = year;
    triggerInputChange(yearElement);
  }
  const dayElement = document.querySelector('.ngb-dp-week .ngb-dp-day div:not(.text-muted)');
  if (dayElement) {
    dayElement.click();
    triggerInputChange(dayElement);
  }
}

function fillPassengerFields(passenger, element, product, frente, email, index) {
  setFieldValue(element.firstName, passenger.firstName);

  // lastName: "Prueba" para algunos productos
  const lastNameValue = Object.values(ProductTypes).includes(product) ? "Prueba" : passenger.lastName;
  setFieldValue(element.lastName, lastNameValue);

  setFieldValue(element.email, email || passenger.email);
  setFieldValue(element.phoneNumber, passenger.phoneNumber);
  setFieldValue(element.documentType, "PP");

  // documentNumber: depende del frente
  if (frente === "bac") {
    const documentNumber = document.querySelector(`#fieldDocumentNumber${index}`);
    setFieldValue(documentNumber, passenger.documentNumber);
  } else {
    setFieldValue(element.documentNumber, passenger.documentNumber);
  }

  // Fecha de nacimiento
  if (product !== "activities") {
    if (element.birthDate) {
      element.birthDate.click();
      triggerInputChange(element.birthDate);
      selectDate(passenger.birthdate);
    }
  }

  // Fecha de expiración
  if (
    !(
      frente === "destinoJet" &&
      ["activities", "hotels", "assistances"].includes(product)
    )
  ) {
    if (element.expirationDate) {
      element.expirationDate.click();
      triggerInputChange(element.expirationDate);
      selectDate(passenger.expirationDate);
    }
  }

  // Campos específicos para vuelos
  if (product === "flights") {
    if (frente === "bac") {
      if (element.nationality2 && element.nationality2[index]) {
        setFieldValue(element.nationality2[index], passenger.country);
      }
      setFieldValue(element.expirationPassportDate, passenger.expirationDate);
    } else if (frente === "destinoJet") {
      if (element.nationality) {
        element.nationality.click();
        triggerInputChange(element.nationality);
        const inputNationality = document.querySelectorAll('input[placeholder="Buscar"][aria-label="multiselect-search"]');
        if (inputNationality[index]) {
          setFieldValue(inputNationality[index], "colombia");
        }
        const optionNationality = document.querySelectorAll('li.multiselect-item-checkbox:has(input[aria-label="Colombia"])');
        if (optionNationality[index]) {
          optionNationality[index].click();
          triggerInputChange(optionNationality[index]);
        }
      }
    }
    if (element.passportNumber) {
      setFieldValue(element.passportNumber, passenger.documentNumber);
    }
  }
}

function fillFacturationFields(element, passenger, product, frente) {
  setFieldValue(element.addressFacturation, passenger.address);
  setFieldValue(element.nameFacturation, passenger.firstName);

  const lastNameFactValue = Object.values(ProductTypes).includes(product) ? "Prueba" : passenger.lastName;
  setFieldValue(element.lastNameFacturation, lastNameFactValue);

  setFieldValue(element.documentTypeFacturation, "PP");
  setFieldValue(element.documentNumberFacturation, passenger.documentNumber);
  setFieldValue(element.phoneNumberFacturation, passenger.phoneNumber);

  if (frente === "bac") {
    setFieldValue(element.countryFacturation, passenger.country);
  } else if (frente === "destinoJet") {
    if (element.cardSection && element.cardSection[2]) {
      element.cardSection[2].click();
      triggerInputChange(element.cardSection[2]);
    }
    setFieldValue(element.titularNameTC, passenger.firstName);
    triggerInputChange(element.titularNameTC);
    // Aquí puedes descomentar y adaptar los campos de tarjeta si los necesitas
  }

  // Disparar eventos finales
  triggerInputChange(element.nameFacturation);
  triggerInputChange(element.lastNameFacturation);
  triggerInputChange(element.documentTypeFacturation);
  triggerInputChange(element.documentNumberFacturation);
  triggerInputChange(element.phoneNumberFacturation);
}

function fillFormFields(data, elements, product, frente, email) {
  for (let i = 0; i < data.length; i++) {
    fillPassengerFields(data[i], elements[i], product, frente, email, i);
  }

  if (frente === "destinoJet" && elements[0].cardSection && elements[0].cardSection[1]) {
    elements[0].cardSection[1].click();
    triggerInputChange(elements[0].cardSection[1]);
  }

  fillFacturationFields(elements[0], data[0], product, frente);
}
