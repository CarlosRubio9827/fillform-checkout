function formatDate(date) {
  return date
    .split("/")
    .map((num) => (num.length === 1 ? "0" + num : num))
    .join("/");
}

function generateRandomPassengerData() {
  const chance = new Chance();
  const firstName = chance.first();
  const lastName = chance.last();
  const birthdate = formatDate(chance.birthday({ string: true }));
  const expirationDate = formatDate(
    chance.birthday({
      string: true,
      american: false,
      year: chance.year({ min: 2025, max: 2030 }),
    })
  );

  const randomUser = {
    firstName: firstName,
    lastName: lastName,
    gender: chance.gender(),
    birthdate: birthdate,
    email: firstName.toLowerCase() + lastName.toLowerCase() + "@ultragroup.com",
    phoneNumber: "315" + chance.integer({ min: 100000, max: 999999 }).toString(),
    country: "CO",
    address: chance.address(),
    documentType: "Passport",
    documentNumber: chance.integer({ min: 10000000, max: 99999999 }).toString(),
    expirationDate: expirationDate,
  };
  console.log("randomUser: ", randomUser);
  return randomUser;
}
