// Función para simular un evento de cambio después de modificar el valor del input
function triggerInputChange(element) {
  const inputEvent = new Event("input", { bubbles: true });
  // El atributo bubbles: true indica que el evento debe burbujear hacia arriba a través del DOM. Cuando un evento "burbujea", se propaga desde el elemento donde se originó hacia los elementos padre, permitiendo que otros controladores de eventos en esos elementos padres también puedan interceptarlo.
  element.dispatchEvent(inputEvent);
  console.log("trigger input event: ", element);

  const changeEvent = new Event("change", { bubbles: true });
  element.dispatchEvent(changeEvent);
  console.log("trigger change event: ", element);
}
const ProductTypes = {
  CARS: "cars",
  HOTELS: "hotels",
  ACTIVITIES: "activities",
  ASSISTANCES: "assistances",
};

function fillFormFields(data, elements, product, frente, email) {
  for (let i = 0; i < data.length; i++) {
    elements[i].firstName.value = data[i].firstName;
    triggerInputChange(elements[i].firstName);

    if (Object.values(ProductTypes).includes(product)) {
      elements[i].lastName.value = "Prueba";
      triggerInputChange(elements[i].lastName);
    } else {
      elements[i].lastName.value = data[i].lastName;
      triggerInputChange(elements[i].lastName);
    }
    elements[i].email.value = email || data[i].email;
    triggerInputChange(elements[i].email);
    elements[i].phoneNumber.value = data[i].phoneNumber;
    triggerInputChange(elements[i].phoneNumber);
    elements[i].documentType.value = "PP";
    triggerInputChange(elements[i].documentType);
    if (frente == "bac") {
      const documentNumber = document.querySelector(`#fieldDocumentNumber${i}`);
      documentNumber.value = data[i].documentNumber;
      triggerInputChange(documentNumber);
    } else {
      elements[i].documentNumber.value = data[i].documentNumber;
      triggerInputChange(elements[i].documentNumber);
    }

    if (product != "activities") {
      elements[i].birthDate.click();
      triggerInputChange(elements[i].birthDate);

      const yearElement = document.querySelector(
        `.ngb-dp-navigation-select select[title="Select year"]`
      );

      yearElement.value = data[i].birthdate.split("/")[2];
      triggerInputChange(yearElement);
      const dayElement = document.querySelector(
        `.ngb-dp-week .ngb-dp-day div:not(.text-muted)`
      );
      dayElement.click();
      triggerInputChange(dayElement);
    }
    console.log("Frente: ",frente)
    console.log("Product: ",product)
    if (!(frente == "destinoJet" && (product == "activities" || product == "hotels" || product == "assistances"))) {
      elements[i].expirationDate.click();
      triggerInputChange(elements[i].expirationDate);

      const yearElement2 = document.querySelector(
        `.ngb-dp-navigation-select select[title="Select year"]`
      );
      yearElement2.value = data[i].expirationDate.split("/")[2];
      triggerInputChange(yearElement2);

      const dayElement2 = document.querySelector(
        `.ngb-dp-week .ngb-dp-day div:not(.text-muted)`
      );
      dayElement2.click();
      triggerInputChange(dayElement2);
    }
    if (product == "flights") {
      if (frente == "bac") {
        elements[i].nationality2[i].value = data[i].country;
        triggerInputChange(elements[i].nationality2[i]);
        elements[i].expirationPassportDate.value = data[i].expirationDate;
        triggerInputChange(elements[i].expirationPassportDate);
      } else if (frente == "destinoJet") {
        elements[i].nationality.click();
        triggerInputChange(elements[i].nationality);
        const inputNationality = document.querySelectorAll(
          `input[placeholder="Buscar" ][aria-label="multiselect-search"]`
        );
        inputNationality[i].value = "colombia";
        triggerInputChange(inputNationality[i]);
        const optionNationality = document.querySelectorAll(
          'li.multiselect-item-checkbox:has(input[aria-label="Colombia"])'
        );
        optionNationality[i].click();
        triggerInputChange(optionNationality[i]);
      }

      elements[i].passportNumber.value = data[i].documentNumber;
      triggerInputChange(elements[i].passportNumber);
    }
  }
  if (frente == "destinoJet") {
    elements[0].cardSection[1].click();
    triggerInputChange(elements[0].cardSection[1]);
  }

  elements[0].addressFacturation.value = data[0].address;
  triggerInputChange(elements[0].addressFacturation);
  elements[0].nameFacturation.value = data[0].firstName;
  if (Object.values(ProductTypes).includes(product)) {
    elements[0].lastNameFacturation.value = "Prueba";
  } else {
    elements[0].lastNameFacturation.value = data[0].lastName;
  }
  elements[0].documentTypeFacturation.value = "PP";
  elements[0].documentNumberFacturation.value = data[0].documentNumber;
  elements[0].phoneNumberFacturation.value = data[0].phoneNumber;
  if (frente == "bac") {
    elements[0].countryFacturation.value = data[0].country;
    triggerInputChange(elements[0].countryFacturation);
  } else if (frente == "destinoJet") {
    elements[0].cardSection[2].click();
    triggerInputChange(elements[0].cardSection[2]);
    elements[0].titularNameTC.value = data[0].firstName;
    if (Object.values(ProductTypes).includes(product)) {
      elements[0].titularLastNameTC.value = "Prueba";
    } else {
      elements[0].titularLastNameTC.value = data[0].lastName;
    }
    elements[0].titularDocumentTypeTC.value = "PP";
    elements[0].titularDocumentTC.value = data[0].documentNumber;
    elements[0].titularNumberTC.value = "4111111111111111";
    elements[0].titularExpirationMonthTC.value = "12";
    elements[0].titularExpirationYearTC.value = "2025";
    elements[0].titularSecurityCodeTC.value = "123";
    elements[0].titularInstallmentsTC.value = "1";
    triggerInputChange(elements[0].titularNameTC);
    triggerInputChange(elements[0].titularLastNameTC);
    triggerInputChange(elements[0].titularDocumentTypeTC);
    triggerInputChange(elements[0].titularDocumentTC);
    triggerInputChange(elements[0].titularNumberTC);
    triggerInputChange(elements[0].titularExpirationMonthTC);
    triggerInputChange(elements[0].titularExpirationYearTC);
    triggerInputChange(elements[0].titularSecurityCodeTC);
    triggerInputChange(elements[0].titularInstallmentsTC);
  }

  triggerInputChange(elements[0].nameFacturation);
  triggerInputChange(elements[0].lastNameFacturation);
  triggerInputChange(elements[0].documentTypeFacturation);
  triggerInputChange(elements[0].documentNumberFacturation);
  triggerInputChange(elements[0].phoneNumberFacturation);
  console.log("Formulario llenado!");
}
