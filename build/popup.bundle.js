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
        files: ["./src/chance.min.js","./src/app.js", "./src/generateDataPassenger.js", "./src/getElements.js", "./src/fillFormFields.js"],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtQ0FBbUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maWxsZm9ybS1zbWFydGxpbmtzLy4vc3JjL3BvcHVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsbEJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHZhciBmcmVudGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyZW50ZVwiKTtcclxuICB2YXIgcHJvZHVjdG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3RvXCIpO1xyXG5cclxuICBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCAodGFicykgPT4ge1xyXG4gICAgXHJcbiAgICBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoXHJcbiAgICAgIHtcclxuICAgICAgICB0YXJnZXQ6IHsgdGFiSWQ6IHRhYnNbMF0uaWQgfSxcclxuICAgICAgICBmaWxlczogW1wiLi9zcmMvY2hhbmNlLm1pbi5qc1wiLFwiLi9zcmMvYXBwLmpzXCIsIFwiLi9zcmMvZ2VuZXJhdGVEYXRhUGFzc2VuZ2VyLmpzXCIsIFwiLi9zcmMvZ2V0RWxlbWVudHMuanNcIiwgXCIuL3NyYy9maWxsRm9ybUZpZWxkcy5qc1wiXSxcclxuICAgICAgICAvLyBmdW5jOiBmaWxsRm9ybSxcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XHJcbiAgICAgICAgICB0YXJnZXQ6IHsgdGFiSWQ6IHRhYnNbMF0uaWQgfSxcclxuICAgICAgICAgIGZ1bmM6IGZpbGxGb3JtRnJvbVBvcHVwLFxyXG4gICAgICAgICAgYXJnczogW2ZyZW50ZS52YWx1ZSwgcHJvZHVjdG8udmFsdWVdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH0pO1xyXG4gIHdpbmRvdy5jbG9zZSgpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGZpbGxGb3JtRnJvbVBvcHVwKGZyZW50ZSwgcHJvZHVjdG8pIHtcclxuICAgIC8vIEVqZWN1dGFyIGRlc2RlIHBvcHVwLCBwZXJvIGNvbnRlbmlkbyBlbiBjb250ZW50LmpzXHJcbiAgICBjb25zb2xlLmxvZyhcIkhvbGEgMzogXCIpO1xyXG4gICAgZmlsbEZvcm0oZnJlbnRlLCBwcm9kdWN0byk7XHJcbiAgfVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=