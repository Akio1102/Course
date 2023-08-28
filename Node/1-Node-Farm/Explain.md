# Contenido

1. **Node.js y npm: Una Introducción**

- [¿Qué es Node.js?](#¿qué-es-nodejs)
- [¿Qué es npm?](#¿qué-es-npm)

2. **Configuración Inicial**

- [Instalación de Node.js y npm.](#instalación-de-nodejs-y-npm)
- [Creación de un proyecto Node.js.](#creación-de-un-proyecto-nodejs)
- [Estructura básica de un proyecto.](#estructura-básica-de-un-proyecto)

3. **Gestión de Paquetes con npm**

- [Instalación de paquetes.](#instalación-de-paquetes)
- [Actualización y eliminación de paquetes.](#actualización-y-eliminación-de-paquetes)
- [Instalación global vs. local.](#instalación-global-vs-local)

4. **Fundamentos de Node.js sin Librerías Externas**

- [Módulo `http`](#módulo-http)
- [Módulo `url`](#módulo-url)
- [Módulo `fs` (File System)](#módulo-fs-file-system)
- [Ejemplo](#ejemplo)

## Node.js y npm: Una Introducción

### ¿Qué es Node.js?

Node.js es un entorno de tiempo de ejecución de JavaScript del lado del servidor, que permite ejecutar código JavaScript en el servidor. A diferencia de JavaScript en el navegador, Node.js puede realizar operaciones de E/S, como lectura/escritura de archivos y comunicación en red, lo que lo hace ideal para aplicaciones web y servidores.

### ¿Qué es npm?

npm (Node Package Manager) es el sistema de gestión de paquetes de Node.js. Permite descargar, instalar y administrar paquetes de terceros o propios esto facilitando el desarrollo.

## Configuración Inicial

### Instalación de Node.js y npm

Para usar Node.js y npm toca instalarlos localmente desde el siguiente enlace [node](https://nodejs.org/).

### Creación de un Proyecto Node.js

Desde una terminal entra en la carpeta donde desea iniciar el proyecto y ejecuta el siguiente comando el cual creara el archivo `package.json` el cual nos dara toda la informacion del proyecto

```bash
npm init -y
```

### Estructura Básica de un Proyecto

La estructura de un proyecto Node.js puede variar, pero una estructura básica puede ser:

| Nombre del Proyecto     |                                                        |
| ----------------------- | ------------------------------------------------------ |
| 📁 nombre-del-proyecto/ | Directorio principal del proyecto.                     |
| ├── 📄 package.json     | Archivo de configuración del proyecto en formato JSON. |
| ├── 📄 index.js         | Archivo JavaScript principal del proyecto.             |

## Gestión de Paquetes con npm

### Instalación de Paquetes

Con el siguiente comando se descarga el paquete que desea ser guardado como dependencia en `package.json`

```bash
npm install nombre-del-paquete
```

Se puede acortar el install solo poniendo i

```bash
npm i express
```

Con el siguiente lo instalamos en el proyecto y tambien nos genera el archivo `package-lock.json` el cual nos da una descripcion detallada de las versiones de los paquetes/dependencias que se estan utilizando

```bash
npm install
```

Tambien se puede ejecutar solo poniendo el i

```bash
npm i
```

### Actualización y Eliminación de Paquetes

Comando para actualizar un paquete a su última versión

```bash
npm update nombre-del-paquete
```

La forma de acortar el comando update es up

```bash
npm up nombre-del-paquete
```

Si desea actualizar todas las dependencias del proyecto ejecuta el siguiente comando

```bash
npm up
```

Si desea actualizar a una version en especifico ejecuta el siguiente comando

```bash
npm up nombre-del-paquete@version
```

Ejemplo

```bash
npm up nodemon@2.0.13
```

Para eliminar un paquete/dependencia

```bash
npm uninstall nombre-del-paquete
```

Se puede acortar el comando cambiando el uninstall por un

```bash
npm un nombre-del-paquete
```

### Instalación Global vs. Local

Los paquetes pueden instalarse globalmente para usar en todo el sistema o localmente en un proyecto específico. Agrega `-g` para instalación global en el equipo:

El siguiente comando instala de manera global nodemon

```bash
npm i -g nodemon
```

Principales diferencias

**Local:**

- Paquetes se almacenan en `node_modules`.
- Limitado a un proyecto.
- Registrado en `package.json`.
- Herramientas de línea de comandos no son globales.

**Global:**

- Paquetes se almacenan globalmente.
- Disponible en cualquier proyecto.
- No registrado en `package.json`.
- Herramientas de línea de comandos son globales.

**Elección:**

- Local para proyectos específicos.
- Global para herramientas compartidas.

La decisión depende de cómo manejar paquetes y herramientas en diferentes situaciones.

## Fundamentos de Node.js sin Librerías Externas

### Módulo `http`

El módulo `http` permite la creación de servidores web. Ejemplo de un servidor HTTP basico y se manejan las solicituds y respuestas:

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hola, mundo!</h1>");
});

server.listen(3000, () => {
  console.log(`Servidor en http://localhost:3000/`);
});
```

### Módulo url

El módulo url permite analizar y trabajar con URLs. Ejemplo de análisis de una URL:

```js
const url = require("url");
const myUrl = new URL("https://www.ejemplo.com/ruta/?parametro=valor");

console.log("Host:", myUrl.host);
console.log("Ruta:", myUrl.pathname);
console.log("Parámetros:", myUrl.searchParams);
```

### Módulo fs (File System)

El módulo fs permite interactuar con el sistema de archivos. Ejemplo de lectura de un archivo:

```js
const fs = require("fs");

fs.readFile("archivo.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

### Ejemplo

Este código establece un servidor HTTP simple donde se gestionan diversas rutas y proporciona respuestas específicas en función de la ruta solicitada. Al acceder a la ruta "/", se muestra una página de inicio. Cuando se accede a la ruta "/api", se envían datos JSON desde un archivo. Cualquier otra ruta conduce a una respuesta de "Página no encontrada", junto con un encabezado personalizado.

```js
const fs = require("fs");
const http = require("http");
const url = require("url");

const data = fs.readFileSync(`${__dirname}/db/data.json`, "utf-8");

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/") {
    return res.end("Esta es la Home Page");
  } else if (pathName === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    return res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    return res.end("<h1>Page not found!</h1>");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log(`Listening to request on port 3000`);
});
```
