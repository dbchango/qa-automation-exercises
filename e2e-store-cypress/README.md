# e2e-store-cypress
Esta es una prueba E2E del flujo para la compra de dos items en la tienda www.saucedemo.com

# Prerrequisitos
- Node: v21.2.0
- Windows: 10/11
- npx: v10.2.3

# Instalación de dependencias
1. Para instalar las dependencias del proyecto nos ubicaremos en la raíz del mismo y ejecutaremos el comando:
```
npm install
```
2. Podremos ver que se agrega la carpeta "node_modules"

# Ejecución de las pruebas
1. Desde la raíz del proyecto ejecutaremos el siguiente comando para correr las pruebas:
```
npm run cypress:test
```
2. Ejecutaremos el siguiente comando para hacer merge de los reportes resultantes de la ejecución de la prueba:
```
npm run merge_reports
```
3. Ejecutaremos el siguiente comando para generar el reporte en .html
```
npm run report
```
4. Para revisar los reportes podemos ver que se generó un archivo con el nombre "mochawesome.html", se adjuntaron los resultados de una ejecución previa: [mochawesome1.html](./mochawesome1.html)
[CONCLUSIONES](./conclusiones.txt)

[REGRESAR](../README.md)
