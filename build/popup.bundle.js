/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/



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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtQ0FBbUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maWxsZm9ybS1zbWFydGxpbmtzLy4vc3JjL3BvcHVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsbEJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHZhciBmcmVudGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyZW50ZVwiKTtcclxuICB2YXIgcHJvZHVjdG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3RvXCIpO1xyXG5cclxuICBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCAodGFicykgPT4ge1xyXG4gICAgXHJcbiAgICBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoXHJcbiAgICAgIHtcclxuICAgICAgICB0YXJnZXQ6IHsgdGFiSWQ6IHRhYnNbMF0uaWQgfSxcclxuICAgICAgICBmaWxlczogW1wiLi9zcmMvY2hhbmNlLm1pbi5qc1wiLFwiLi9zcmMvY29udGVudC5qc1wiLCBcIi4vc3JjL2V4YW1wbGUuanNcIl0sXHJcbiAgICAgICAgLy8gZnVuYzogZmlsbEZvcm0sXHJcbiAgICAgIH0sXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xyXG4gICAgICAgICAgdGFyZ2V0OiB7IHRhYklkOiB0YWJzWzBdLmlkIH0sXHJcbiAgICAgICAgICBmdW5jOiBmaWxsRm9ybUZyb21Qb3B1cCxcclxuICAgICAgICAgIGFyZ3M6IFtmcmVudGUudmFsdWUsIHByb2R1Y3RvLnZhbHVlXSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9KTtcclxuICB3aW5kb3cuY2xvc2UoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBmaWxsRm9ybUZyb21Qb3B1cChmcmVudGUsIHByb2R1Y3RvKSB7XHJcbiAgICAvLyBFamVjdXRhciBkZXNkZSBwb3B1cCwgcGVybyBjb250ZW5pZG8gZW4gY29udGVudC5qc1xyXG4gICAgY29uc29sZS5sb2coXCJIb2xhIDM6IFwiKTtcclxuICAgIGZpbGxGb3JtKGZyZW50ZSwgcHJvZHVjdG8pO1xyXG4gIH1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9