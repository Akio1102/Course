const fs = require("fs");
const http = require("http");
const url = require("url");

/* ------------------ Hello Worl ----------------*/

/* const hello = "Hello World";
console.log(hello);*/

/* ------------------ File ----------------*/

// Codigo Sincrono/Bloqueante
/* const text = fs.readFileSync("./txt/input.txt", "utf-8");

console.log(text);

const textOut = `De esto te ando hablando: ${text}\n Creado el ${Date.now()}`;

fs.writeFileSync("./txt/output.txt", textOut);

console.log("Archivo guardado"); */

// Codigo Asincrono/No-Bloqueante
/* fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  if (err) return console.log("Error!!");
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile("./txt/input.txt", "utf-8", (err, data3) => {
      console.log(data3);

      fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
        console.log("Se a escrito el texto final!");
      });
    });
  });
});

console.log("Will read File");*/

/* ------------------ Server ----------------*/

const replaceTemplate = (temp, produc) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g, produc.productName);
  output = output.replace(/{%IMAGE%}/g, produc.image);
  output = output.replace(/{%PRICE%}/g, produc.price);
  output = output.replace(/{%FROM%}/g, produc.from);
  output = output.replace(/{%NUTRIENTS%}/g, produc.nutrients);
  output = output.replace(/{%QUANTITY%}/g, produc.quantity);
  output = output.replace(/{%DESCRIPTION%}/g, produc.description);
  output = output.replace(/{%ID%}/g, produc.id);

  if (!produc.organic) {
    output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");
  }
  return output;
};

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf-8"
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  "utf-8"
);

const data = fs.readFileSync(`${__dirname}/db/data.json`, "utf-8");
const productData = JSON.parse(data);

const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(url.parse(req.url, true));
  const pathName = req.url;

  //Overview page
  if (pathName === "/" || pathName === "/overview") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });

    const cardsHtml = productData
      .map((element) => replaceTemplate(tempCard, element))
      .join("");
    const output = tempOverview.replace("{%PRODUCT_CARDS%}", cardsHtml);
    return res.end(output);
  }

  //Products page
  else if (pathName === "/product") {
    return res.end("This is the PRODUCT");
  }

  // API
  else if (pathName === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    return res.end(data);
  }

  //Not Found Page
  else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    return res.end("<h1>Page not found!</h1>");
  }

  /* res.end("Hello from the server"); */
});

server.listen(8000, "127.0.0.1", () => {
  console.log(`Listening to request on port 8000`);
});
