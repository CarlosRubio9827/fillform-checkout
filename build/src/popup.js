


document.getElementById("fillButton").addEventListener("click", () => {
  var frente = document.getElementById("frente");
  var producto = document.getElementById("producto");

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        files: ["./src/chance.min.js","./src/content.js", "./src/example.js"],
        // func: fillForm,
      },
      () => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: fillFormFromPopup,
          args: [frente.value, producto.value],
        });
      }
    );
  });
  window.close();
});

function fillFormFromPopup(frente, producto) {
    // Ejecutar desde popup, pero contenido en content.js
    console.log("Hola 3: ");
    fillForm(frente, producto);
  }
