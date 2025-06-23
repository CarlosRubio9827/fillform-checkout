document.getElementById("addUser").addEventListener("click", () => {
  const containerAddUser = document.querySelector(".container-addUser");
  containerAddUser.classList.add("active");
  const containerFill = document.querySelector(".container-fill");
  containerFill.classList.add("inactive");
  const title = document.getElementById("title");
  title.innerHTML = "Agregar Usuario";

  const addUserButton = document.getElementById("addUser");
  addUserButton.classList.add("inactive");

  const cancelButton = document.getElementById("cancelButton");
  cancelButton.addEventListener("click", () => {
    containerAddUser.classList.remove("active");
    containerFill.classList.remove("inactive");
    title.innerHTML = "Llenar formulario";
    addUserButton.classList.remove("inactive");
  });
});

document.getElementById("fillButton").addEventListener("click", () => {
  var frente = document.getElementById("frente");
  var producto = document.getElementById("producto");
  var email = document.getElementById("email");

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        files: [
          "./src/content/chance.min.js",
          "./src/background/background.js",
          "./src/content/generateDataPassenger.js",
          "./src/content/getElements.js",
          "./src/content/fillFormFields.js",
        ],
      },
      () => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: fillFormFromPopup,
          args: [frente.value, producto.value, email.value],
        });
      }
    );
  });
  window.close();
});

function fillFormFromPopup(frente, producto, email) {
  fillForm(frente, producto, email);
}
