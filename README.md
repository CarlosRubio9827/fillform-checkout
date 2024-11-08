# FILL FORM SMARTLINKS
==========================

Este proyecto es una extensión de navegador que permite llenar formularios de manera automática.

## Descripción
---------------

La extensión utiliza la API de Chrome para interactuar con la página actual y llenar los campos del formulario. La extensión también incluye una interfaz de usuario para seleccionar el tipo de formulario que se desea llenar.

## Funcionalidades
-----------------

* Llena formularios de manera automática
* Interfaz de usuario para seleccionar el tipo de formulario que se desea llenar
* Compatible con Chrome

## Instalación
--------------

1. Clona el repositorio en tu máquina local
2. Abre la carpeta del proyecto en tu editor de código favorito
3. Ejecuta el comando `npm install` para instalar las dependencias
4. Ejecuta el comando `npm run build` para compilar el código
5. Carga la extensión en Chrome desde la carpeta `build` siguiendo las instrucciones de la documentación de la guía: [INSTALAR EXTENSIONES DESEMPAQUETADAS](https://davidpob99.github.io/blog/2017/08/20/instalar-extensiones-desempaquetadas.html#google-chrome---chromium)

## Uso
-----

1. Haz clic en el icono de la extensión en la barra de herramientas de Chrome
2. Selecciona el tipo de formulario que se desea llenar en la interfaz de usuario
3. Haz clic en el botón "Llenar" para llenar el formulario

## Código
---------

El código fuente de la extensión se encuentra en la carpeta `src`. La estructura del código es la siguiente:

* `popup.html`: archivo HTML que define la interfaz de usuario.
* `popup.js`: archivo JavaScript que maneja las interacciones en el contexto de la interfaz de usuario.
* `chance.min.js`: biblioteca utilizada para generar datos aleatorios.
* `style.css`: archivo de estilos que da formato y diseño a la interfaz de usuario.
* `app.js`: archivo principal de la extensión que coordina y organiza las llamadas a los diferentes módulos.
* `generateDataPassenger.js`: archivo que implementa la lógica para generar datos aleatorios de pasajeros.
* `getElements.js`: archivo que contiene la lógica para obtener elementos del DOM relacionados con los pasajeros.
* `fillFormFields.js`: archivo que maneja la lógica para completar automáticamente los campos del formulario.

## Contribuciones
--------------

Si deseas contribuir al proyecto, por favor sigue las siguientes instrucciones:

* Haz un fork del repositorio
* Crea una rama para tu contribución
* Realiza los cambios y haz un commit
* Haz un pull request para que se revisen tus cambios

## Licencia
---------

Este proyecto está licenciado bajo la licencia ISC.