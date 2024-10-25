/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
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
        // func: fillForm,
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
  // Ejecutar desde popup, pero contenido en content.js
  console.log("Hola 3: ");
  fillForm(frente, producto, email);
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0Esa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maWxsZm9ybS1zbWFydGxpbmtzLy4vc3JjL3BvcHVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsbEJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHZhciBmcmVudGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyZW50ZVwiKTtcclxuICB2YXIgcHJvZHVjdG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3RvXCIpO1xyXG4gIHZhciBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxcIik7XHJcblxyXG4gIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sICh0YWJzKSA9PiB7XHJcbiAgICBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoXHJcbiAgICAgIHtcclxuICAgICAgICB0YXJnZXQ6IHsgdGFiSWQ6IHRhYnNbMF0uaWQgfSxcclxuICAgICAgICBmaWxlczogW1xyXG4gICAgICAgICAgXCIuL3NyYy9jaGFuY2UubWluLmpzXCIsXHJcbiAgICAgICAgICBcIi4vc3JjL2FwcC5qc1wiLFxyXG4gICAgICAgICAgXCIuL3NyYy9nZW5lcmF0ZURhdGFQYXNzZW5nZXIuanNcIixcclxuICAgICAgICAgIFwiLi9zcmMvZ2V0RWxlbWVudHMuanNcIixcclxuICAgICAgICAgIFwiLi9zcmMvZmlsbEZvcm1GaWVsZHMuanNcIixcclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIGZ1bmM6IGZpbGxGb3JtLFxyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcclxuICAgICAgICAgIHRhcmdldDogeyB0YWJJZDogdGFic1swXS5pZCB9LFxyXG4gICAgICAgICAgZnVuYzogZmlsbEZvcm1Gcm9tUG9wdXAsXHJcbiAgICAgICAgICBhcmdzOiBbZnJlbnRlLnZhbHVlLCBwcm9kdWN0by52YWx1ZSwgZW1haWwudmFsdWVdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH0pO1xyXG4gIHdpbmRvdy5jbG9zZSgpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGZpbGxGb3JtRnJvbVBvcHVwKGZyZW50ZSwgcHJvZHVjdG8sIGVtYWlsKSB7XHJcbiAgLy8gRWplY3V0YXIgZGVzZGUgcG9wdXAsIHBlcm8gY29udGVuaWRvIGVuIGNvbnRlbnQuanNcclxuICBjb25zb2xlLmxvZyhcIkhvbGEgMzogXCIpO1xyXG4gIGZpbGxGb3JtKGZyZW50ZSwgcHJvZHVjdG8sIGVtYWlsKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=