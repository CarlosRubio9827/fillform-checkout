// Función para simular un evento de cambio después de modificar el valor del input
function triggerInputChange(element) {
  const inputEvent = new Event("input", { bubbles: true });
  // El atributo bubbles: true indica que el evento debe burbujear hacia arriba a través del DOM. Cuando un evento "burbujea", se propaga desde el elemento donde se originó hacia los elementos padre, permitiendo que otros controladores de eventos en esos elementos padres también puedan interceptarlo.
  element.dispatchEvent(inputEvent);

  const changeEvent = new Event("change", { bubbles: true });
  element.dispatchEvent(changeEvent);
}

function fillFormFields(data, elements, product) {
  console.log("Data: ", data);
  console.log("Elements: ", elements);
  for (let i = 0; i < data.length; i++) {
    console.log("Elements: =============", elements[i].firstName);
    // elements[i].formPassenger.autocomplete = "on";
    // elements[i].formPassenger.classList.remove(
    //   "ng-untouched",
    //   "ng-pristine",
    //   "ng-invalid"
    // );
    // elements[i].formPassenger.classList.add(
    //   "ng-dirty",
    //   "ng-touched",
    //   "ng-valid"
    // );

    // elements[i].firstName.classList.remove(
    //   "ng-invalid",
    //   "ng-untouched",
    //   "ng-pristine"
    // );

    // elements[i].firstName.classList.add(
    //   "ng-touched",
    //   "ng-dirty",
    //   "ng-valid"
    // );

    // elements[i].firstName.focus();
    elements[i].firstName.value = data[i].firstName;
    elements[i].lastName.value = data[i].lastName;
    elements[i].email.value = data[i].email;
    elements[i].documentType.value = "PP";
    elements[i].documentNumber.value = data[i].documentNumber;
    elements[i].phoneNumber.value = data[i].phoneNumber;
    elements[i].birthdate.value = data[i].birthdate;
    elements[i].expirationDate.value = data[i].expirationDate;
    // elements[i].nationality.value = data[i].country;
    if(product == "flights"){
      elements[i].nationality2[i].value = data[i].country;
      elements[i].passportNumber.value = data[i].documentNumber;
      elements[i].expirationPassportDate.value = data[i].expirationDate;
      triggerInputChange(elements[i].nationality2[i])
      triggerInputChange(elements[i].passportNumber);
      triggerInputChange(elements[i].expirationPassportDate);
      
    }

    triggerInputChange(elements[i].firstName);
    triggerInputChange(elements[i].lastName);
    triggerInputChange(elements[i].email);
    triggerInputChange(elements[i].documentType);
    triggerInputChange(elements[i].documentNumber);
    triggerInputChange(elements[i].phoneNumber);
    // triggerInputChange(elements[i].nationality);

    triggerInputChange(elements[i].birthdate);
    triggerInputChange(elements[i].expirationDate);
  }

  elements[0].nameFacturation.value = data[0].firstName;
  elements[0].lastNameFacturation.value = data[0].lastName;
  elements[0].documentTypeFacturation.value = "PP";
  elements[0].documentNumberFacturation.value = data[0].documentNumber;
  elements[0].phoneNumberFacturation.value = data[0].phoneNumber;
  elements[0].countryFacturation.value = data[0].country;
  elements[0].addressFacturation.value = data[0].address;

  triggerInputChange(elements[0].nameFacturation);
  triggerInputChange(elements[0].lastNameFacturation);
  triggerInputChange(elements[0].documentTypeFacturation);
  triggerInputChange(elements[0].documentNumberFacturation);
  triggerInputChange(elements[0].phoneNumberFacturation);
  triggerInputChange(elements[0].countryFacturation);
  triggerInputChange(elements[0].addressFacturation);
}
