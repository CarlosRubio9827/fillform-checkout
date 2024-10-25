function getElements(passengersNumbers) {
  try {
    const elementosDePasajeros = [];

    for (let i = 0; i < passengersNumbers; i++) {
      const elementoDePasajero = getPassengerElement(i);
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

function getPassengerElement(index) {
  try {
    const formPassenger = document.querySelector(
      `#passengerForm_${index} div form`
    );
    const firstName = document.querySelector(`#firstName${index}`);
    const lastName = document.querySelector(`#lastName${index}`);
    const genderM = document.querySelector(`#gender0${index}`);
    const genderF = document.querySelector(`#gender1${index}`);
    const birthdate = document.querySelector(`#birthDate${index}`);
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
    const documentNumberFacturation = document.querySelector(`#documentNumber`);
    const phoneNumberFacturation = document.querySelector(`#phoneNumber`);
    const countryFacturation = document.querySelector(`#country`);
    const addressFacturation = document.querySelector(`#address`);

    return {
      firstName,
      lastName,
      genderM,
      genderF,
      birthdate,
      email,
      phoneNumber,
      country,
      address,
      documentType,
      documentNumber,
      expirationDate,
      expirationPassportDate,
      passportNumber,
      formPassenger,
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
  } catch (error) {
    throw new Error(
      `Ocurrio un error al obtener el elemento de pasajero: ${error}`
    );
  }
}
