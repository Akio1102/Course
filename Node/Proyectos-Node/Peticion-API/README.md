# Peticion-API (DOG-CEO)

Este código está diseñado para obtener imágenes aleatorias de perros de diferentes razas y guardar las URL de las imágenes en un archivo de texto.

## Dependencias

- [Node.js](https://nodejs.org/): Un entorno de ejecución de JavaScript basado en el motor V8 de Chrome.
- [superagent](https://github.com/visionmedia/superagent): Una librería para realizar solicitudes HTTP.

## Funciones Principales

### `readFilePro(file)`

- **Descripción**: Lee el contenido de un archivo especificado de manera asíncrona y devuelve una promesa que resuelve con el contenido leído.
- **Parámetros**:
  - `file` (String): La ruta del archivo a leer.
- **Retorna**: Una promesa que resuelve con el contenido del archivo o se rechaza con un mensaje de error.

```js
const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) reject("Not Found that file");
      resolve(data);
    });
  });
};
```

### `appendFilePro(file, data)`

- **Descripción**: Agrega contenido al final de un archivo especificado de manera asíncrona y devuelve una promesa que indica si la operación fue exitosa.
- **Parámetros**:
  - `file` (String): La ruta del archivo al que se agregará el contenido.
  - `data` (String): El contenido que se agregará al archivo.
- **Retorna**: Una promesa que resuelve con "success" si la operación fue exitosa o se rechaza con un mensaje de error.

```js
const appendFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(file, data, (err) => {
      if (err) reject("Not write that file");
      resolve("success");
    });
  });
};
```

### `getDogPic()`

- **Descripción**: Obtiene imágenes aleatorias de perros de diferentes razas y guarda las URL de las imágenes en un archivo de texto llamado "dog-imgs.txt".
- **Proceso**:
  1. Lee el archivo "dog.txt" que contiene las razas de perros.
  2. Divide las razas en una matriz.
  3. Realiza una solicitud HTTP para obtener una imagen aleatoria de cada raza.
  4. Guarda las URL de las imágenes en el archivo "dog-imgs.txt".
- **Manejo de Errores**: Captura y muestra errores en caso de que ocurran durante el proceso.
- **Resultado**: Imprime un mensaje cuando todas las URL de perros se han guardado en "dog-imgs.txt".

```js
const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    const breeds = data.split(",");
    console.log(`Breeds: ${breeds}`);

    for (const element of breeds) {
      const res = await superagent.get(
        `https://dog.ceo/api/breed/${element}/images/random`
      );
      const imageUrl = res.body.message;
      console.log(`${imageUrl} saved`);
      await appendFilePro("dog-imgs.txt", `${imageUrl}\n`);
    }
    console.log("Todas las URL de perros estan en dog-imgs.txt");
  } catch (error) {
    console.log(error);
  }
};
```

## Ejecución

Para ejecutar el código, asegúrate de tener Node.js instalado y sigue estos pasos:

1. Abre una terminal en la ubicación del código.
2. Ejecuta el siguiente comando:

```shell
node index.js
```
