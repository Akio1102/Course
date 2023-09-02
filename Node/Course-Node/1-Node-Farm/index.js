const fs = require("fs");
const http = require("http");
const url = require("url");
const slugify = require("slugify");

const replaceTemplate = require("./modules/replaceTemplate.js");

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

const slugs = productData.map((ele) =>
  slugify(ele.productName, { lower: true })
);
console.log(slugs);

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  //Overview page
  if (pathname === "/" || pathname === "/overview") {
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
  else if (pathname === "/product") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    const product = productData[query.id];
    const output = replaceTemplate(tempProduct, product);
    return res.end(output);
  }

  // API
  else if (pathname === "/api") {
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
