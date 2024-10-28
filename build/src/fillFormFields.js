// Función para simular un evento de cambio después de modificar el valor del input
function triggerInputChange(element) {
  const inputEvent = new Event("input", { bubbles: true });
  // El atributo bubbles: true indica que el evento debe burbujear hacia arriba a través del DOM. Cuando un evento "burbujea", se propaga desde el elemento donde se originó hacia los elementos padre, permitiendo que otros controladores de eventos en esos elementos padres también puedan interceptarlo.
  element.dispatchEvent(inputEvent);

  const changeEvent = new Event("change", { bubbles: true });
  element.dispatchEvent(changeEvent);
}

function fillFormFields(data, elements, product, frente, email) {
  for (let i = 0; i < data.length; i++) {
    elements[i].firstName.value = data[i].firstName;
    elements[i].lastName.value = data[i].lastName;
    // if(frente == "bac"){
    elements[i].email.value = email || data[i].email;
    elements[i].phoneNumber.value = data[i].phoneNumber;
    triggerInputChange(elements[i].email);
    triggerInputChange(elements[i].phoneNumber);
    // }
    elements[i].documentType.value = "PP";
    elements[i].documentNumber.value = data[i].documentNumber;
    if (product != "activities") {
      elements[i].birthDate.value = data[i].birthdate;
      elements[i].expirationDate.value = data[i].expirationDate;

      triggerInputChange(elements[i].birthDate);
      triggerInputChange(elements[i].expirationDate);
    }
    // elements[i].nationality.value = data[i].country;
    if (product == "flights") {
      if (frente == "bac") {
        elements[i].nationality2[i].value = data[i].country;
        triggerInputChange(elements[i].nationality2[i]);
        elements[i].expirationPassportDate.value = data[i].expirationDate;
        triggerInputChange(elements[i].expirationPassportDate);
      } else if (frente == "destinoJet") {
        // elements[i].nationality[i].value = data[i].country;

        elements[i].nationality.click();
        // triggerInputChange(elements[i].nationality);
        const inputNationality = document.querySelector(
          `input[placeholder="Buscar" ][aria-label="multiselect-search"]`
        );
        console.log("inputNationality: ", inputNationality);
        inputNationality.value = "colombia";
        triggerInputChange(inputNationality);
        const optionNationality = document.querySelector(
          'li.multiselect-item-checkbox:has(input[aria-label="Colombia"])'
        );
        optionNationality.click();
        // triggerInputChange(optionNationality);
      }

      elements[i].passportNumber.value = data[i].documentNumber;
      triggerInputChange(elements[i].passportNumber);
    }

    triggerInputChange(elements[i].firstName);
    triggerInputChange(elements[i].lastName);
    triggerInputChange(elements[i].documentType);
    triggerInputChange(elements[i].documentNumber);
    // triggerInputChange(elements[i].nationality);
  }

  elements[0].addressFacturation.value = data[0].address;
  triggerInputChange(elements[0].addressFacturation);
  elements[0].nameFacturation.value = data[0].firstName;
  elements[0].lastNameFacturation.value = data[0].lastName;
  elements[0].documentTypeFacturation.value = "PP";
  elements[0].documentNumberFacturation.value = data[0].documentNumber;
  elements[0].phoneNumberFacturation.value = data[0].phoneNumber;
  if (frente == "bac") {
    elements[0].countryFacturation.value = data[0].country;
    triggerInputChange(elements[0].countryFacturation);
  } else if (frente == "destinoJet") {
    elements[0].titularNameTC.value = data[0].firstName;
    elements[0].titularLastNameTC.value = data[0].lastName;
    elements[0].titularDocumentTypeTC.value = "PP";
    elements[0].titularDocumentTC.value = data[0].documentNumber;
    elements[0].titularNumberTC.value = "411111111111111";
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
}
