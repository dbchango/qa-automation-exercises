# qa-automation-exercises

A continuación se muestra la resolución de los ejercicios:

## Prueba E2E

Realizar una prueba funcional automatizada (Prueba E2E) de un flujo de compra en la página https://www.saucedemo.com/ que incluya:
- Autenticarse con el usuario: standard_user y password_sauce
- Agregar dos productos al carrito
- Visualizar el carrito

[VER EJERCICIO](./e2e-store-cypress/README.md)

## Prueba API

La página https://www.demoblaze.com/ proporciona la funcionalidad de registro (signup) y login.

Utilizando un software para pruebas de servicios REST) realizar una prueba de cada uno de estos servicios:

Signup: https://api.demoblaze.com/signup
Login: https://api.demoblaze.com/login
Identificar las entradas y capturar las salidas en cada uno de los siguientes casos:
- Crear un nuevo usuario en signup
- Intentar crear un usuario ya existente
- Usuario y password correcto en login
- Usuario y password incorrecto en login

[VER EJERCICIO](./api-auth-karate/README.md)