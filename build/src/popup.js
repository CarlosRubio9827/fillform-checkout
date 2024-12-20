document.getElementById("fillButton").addEventListener("click", () => {
  var frente = document.getElementById("frente");
  var producto = document.getElementById("producto");
  var email = document.getElementById("email");

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        files: [
          "./src/chance.min.js",
          "./src/app.js",
          "./src/generateDataPassenger.js",
          "./src/getElements.js",
          "./src/fillFormFields.js",
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
