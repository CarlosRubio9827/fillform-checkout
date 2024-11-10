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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0Esa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maWxsZm9ybS1zbWFydGxpbmtzLy4vc3JjL3BvcHVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsbEJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHZhciBmcmVudGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyZW50ZVwiKTtcclxuICB2YXIgcHJvZHVjdG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3RvXCIpO1xyXG4gIHZhciBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxcIik7XHJcblxyXG4gIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sICh0YWJzKSA9PiB7XHJcbiAgICBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoXHJcbiAgICAgIHtcclxuICAgICAgICB0YXJnZXQ6IHsgdGFiSWQ6IHRhYnNbMF0uaWQgfSxcclxuICAgICAgICBmaWxlczogW1xyXG4gICAgICAgICAgXCIuL3NyYy9jaGFuY2UubWluLmpzXCIsXHJcbiAgICAgICAgICBcIi4vc3JjL2FwcC5qc1wiLFxyXG4gICAgICAgICAgXCIuL3NyYy9nZW5lcmF0ZURhdGFQYXNzZW5nZXIuanNcIixcclxuICAgICAgICAgIFwiLi9zcmMvZ2V0RWxlbWVudHMuanNcIixcclxuICAgICAgICAgIFwiLi9zcmMvZmlsbEZvcm1GaWVsZHMuanNcIixcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcclxuICAgICAgICAgIHRhcmdldDogeyB0YWJJZDogdGFic1swXS5pZCB9LFxyXG4gICAgICAgICAgZnVuYzogZmlsbEZvcm1Gcm9tUG9wdXAsXHJcbiAgICAgICAgICBhcmdzOiBbZnJlbnRlLnZhbHVlLCBwcm9kdWN0by52YWx1ZSwgZW1haWwudmFsdWVdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH0pO1xyXG4gIHdpbmRvdy5jbG9zZSgpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGZpbGxGb3JtRnJvbVBvcHVwKGZyZW50ZSwgcHJvZHVjdG8sIGVtYWlsKSB7XHJcbiAgZmlsbEZvcm0oZnJlbnRlLCBwcm9kdWN0bywgZW1haWwpO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==