function getElements(passengersNumbers, frente) {
  try {
    const elementosDePasajeros = [];
console.log("getElements: ")
    console.log(passengersNumbers, frente);
    for (let i = 0; i < passengersNumbers; i++) {
      const elementoDePasajero = getPassengerElement(i, frente);
      elementosDePasajeros.push(elementoDePasajero);
    }

    return elementosDePasajeros;
  } catch (e) {
    throw new Error(
      "Ocurrio un error al obtener los elementos de los pasajeros: ",
      e
    );
  }
}

function getPassengerElement(index, frente) {
  try {

    console.log("getPassengerElement: ");
    console.log(index, frente);
    if (frente == "bac") {
      const firstName = document.querySelector(`#firstName${index}`);
      const lastName = document.querySelector(`#lastName${index}`);
      const genderM = document.querySelector(`#gender0${index}`);
      const genderF = document.querySelector(`#gender1${index}`);
      const birthDate = document.querySelector(`#birthDate${index}`);
      const email = document.querySelector(`#email${index}`);
      const phoneNumber = document.querySelector(`#phone${index}`);
      const country = document.querySelector(`#country`);
      const address = document.querySelector(`#address`);
      const documentType = document.querySelector(`#fieldDocumentType${index}`);
      const passportNumber = document.querySelector(`#passportNumber${index}`);
      const expirationDate = document.querySelector(`#expiredDate${index}`);
      const documentNumber = document.querySelector(
        `#fieldDocumentNumber${index}`
      );
      const expirationPassportDate = document.querySelector(
        `#expiredDatePassport${index}`
      );
      const nationality = document.querySelector(`#nationality`);
      const nationality2 = document.querySelectorAll(
        'select[formcontrolname="nationality"]'
      );

      const nameFacturation = document.querySelector(`#names`);
      const lastNameFacturation = document.querySelector(`#lastNames`);
      const documentTypeFacturation =
        document.querySelector(`#fieldDocumentType`);
      const documentNumberFacturation =
        document.querySelector(`#documentNumber`);
      const phoneNumberFacturation = document.querySelector(`#phoneNumber`);
      const countryFacturation = document.querySelector(`#country`);
      const addressFacturation = document.querySelector(`#address`);

      return {
        firstName,
        lastName,
        genderM,
        genderF,
        birthDate,
        email,
        phoneNumber,
        country,
        address,
        documentType,
        documentNumber,
        expirationDate,
        expirationPassportDate,
        passportNumber,
        nationality,
        nationality2,
        nameFacturation,
        lastNameFacturation,
        documentTypeFacturation,
        documentNumberFacturation,
        phoneNumberFacturation,
        countryFacturation,
        addressFacturation,
      };
    } else if (frente == "destinoJet") {

      const gender = document.querySelector(`#gender__${index}`);
      const firstName = document.querySelector(`#firstName__${index}`);
      const lastName = document.querySelector(`#lastName__${index}`);
      const documentType = document.querySelector(`#documentType__${index}`);
      const documentNumber = document.querySelector(
        `#documentNumber__${index}`
      );
      const birthDate = document.querySelector(`#birthDate__${index}`);
      const nationality = document.querySelectorAll(`#dropdown-select .multiselect-dropdown div span span`)[index];
      console.log("Nationality: ",nationality);
      const passportNumber = document.querySelector(`#passport__${index}`);
      const expirationDate = document.querySelector(
        `#expirationDate__${index}`
      );
      const email = document.querySelector(`#email`);
      const phoneNumber = document.querySelector(`#phoneNumber`);
      const nameFacturation = document.querySelector(`#name`);
      const lastNameFacturation = document.querySelector(`#lastName`);
      const documentTypeFacturation = document.querySelector(`#documentType`);
      const documentNumberFacturation =
        document.querySelector(`#documentNumber`);
      const addressFacturation = document.querySelector(`#address`);
      const phoneNumberFacturation = document.querySelector(`#phone-number`);
      const titularNameTC = document.querySelector(
        `input.credit-card__container-input[name="firstName"][formcontrolname="firstName"]`
      );
      const titularLastNameTC = document.querySelector(
        `input.credit-card__container-input[name="lastName"][formcontrolname="lastName"]`
      );
      const titularDocumentTypeTC = document.querySelector(
        `select.credit-card__container-dropdown--select[name="documentType"][formcontrolname="documentType"]`
      );
      const titularDocumentTC = document.querySelector(
        `input.credit-card__container-input[name="document"][formcontrolname="document"]`
      );
      const titularNumberTC = document.querySelector(
        `input.credit-card__container-input[name="number"][formcontrolname="number"]`
      );
      const titularExpirationMonthTC = document.querySelector(
        `select.credit-card__container-dropdown--select[name="expirationMonth"][formcontrolname="expirationMonth"]`
      );
      const titularExpirationYearTC = document.querySelector(
        `select.credit-card__container-dropdown--select[name="expirationYear"][formcontrolname="expirationYear"]`
      );
      const titularSecurityCodeTC = document.querySelector(
        `input.credit-card__container-input[name="securityCode"][formcontrolname="securityCode"]`
      );
      const titularInstallmentsTC = document.querySelector(
        `input.credit-card__container-input[name="installments"][formcontrolname="installments"]`
      );

      return {
        gender,
        firstName,
        lastName,
        documentType,
        documentNumber,
        birthDate,
        nationality,
        passportNumber,
        expirationDate,
        email,
        phoneNumber,
        nameFacturation,
        lastNameFacturation,
        documentTypeFacturation,
        documentNumberFacturation,
        addressFacturation,
        phoneNumberFacturation,
        titularNameTC,
        titularLastNameTC,
        titularDocumentTypeTC,
        titularDocumentTC,
        titularNumberTC,
        titularExpirationMonthTC,
        titularExpirationYearTC,
        titularSecurityCodeTC,
        titularInstallmentsTC,
      };
    }
  } catch (error) {
    throw new Error(
      `Ocurrio un error al obtener el elemento de pasajero: ${error}`
    );
  }
}
