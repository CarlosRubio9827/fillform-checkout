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
  fillForm(frente, producto, email);
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0Esa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlsbGZvcm0tc21hcnRsaW5rcy8uL3NyYy9wb3B1cC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbGxCdXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICB2YXIgZnJlbnRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcmVudGVcIik7XHJcbiAgdmFyIHByb2R1Y3RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0b1wiKTtcclxuICB2YXIgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsXCIpO1xyXG5cclxuICBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCAodGFicykgPT4ge1xyXG4gICAgY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KFxyXG4gICAgICB7XHJcbiAgICAgICAgdGFyZ2V0OiB7IHRhYklkOiB0YWJzWzBdLmlkIH0sXHJcbiAgICAgICAgZmlsZXM6IFtcclxuICAgICAgICAgIFwiLi9zcmMvY2hhbmNlLm1pbi5qc1wiLFxyXG4gICAgICAgICAgXCIuL3NyYy9hcHAuanNcIixcclxuICAgICAgICAgIFwiLi9zcmMvZ2VuZXJhdGVEYXRhUGFzc2VuZ2VyLmpzXCIsXHJcbiAgICAgICAgICBcIi4vc3JjL2dldEVsZW1lbnRzLmpzXCIsXHJcbiAgICAgICAgICBcIi4vc3JjL2ZpbGxGb3JtRmllbGRzLmpzXCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyBmdW5jOiBmaWxsRm9ybSxcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XHJcbiAgICAgICAgICB0YXJnZXQ6IHsgdGFiSWQ6IHRhYnNbMF0uaWQgfSxcclxuICAgICAgICAgIGZ1bmM6IGZpbGxGb3JtRnJvbVBvcHVwLFxyXG4gICAgICAgICAgYXJnczogW2ZyZW50ZS52YWx1ZSwgcHJvZHVjdG8udmFsdWUsIGVtYWlsLnZhbHVlXSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9KTtcclxuICB3aW5kb3cuY2xvc2UoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBmaWxsRm9ybUZyb21Qb3B1cChmcmVudGUsIHByb2R1Y3RvLCBlbWFpbCkge1xyXG4gIC8vIEVqZWN1dGFyIGRlc2RlIHBvcHVwLCBwZXJvIGNvbnRlbmlkbyBlbiBjb250ZW50LmpzXHJcbiAgZmlsbEZvcm0oZnJlbnRlLCBwcm9kdWN0bywgZW1haWwpO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==