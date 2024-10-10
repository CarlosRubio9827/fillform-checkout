function generateRandomPassengerData() {
  const chance = new Chance();
  const firstName = chance.first();
  const lastName = chance.last();
  const randomUser = {
    firstName: firstName,
    lastName: lastName,
    gender: chance.gender(),
    birthdate: chance.birthday({ string: true }),
    email: firstName.toLowerCase() + lastName.toLowerCase() + "@ultragroup.com",
    phoneNumber: chance.phone({ formatted: false }),
    country: chance.country(),
    address: chance.address(),
    documentType: "Passport",
    documentNumber: chance
      .integer({ min: 100000000, max: 999999999 })
      .toString(),
    expirationDate: chance.birthday({
      string: true,
      year: chance.year({ min: 2024, max: 2030 }),
    }),
  };
  return randomUser;
}
