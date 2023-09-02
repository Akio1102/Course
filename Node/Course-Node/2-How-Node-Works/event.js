const { log } = require("console");
const Eventemitter = require("events");
const http = require("http");

/* const myEmitter = new Eventemitter();*/

class Sales extends Eventemitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("There was a new ale!");
});

myEmitter.on("newSale", () => {
  console.log("Costumer name: Akio");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} in stock`);
});

myEmitter.emit("newSale", 10);

////////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received");
  console.log(req.url);
  res.end("Request received");
});

server.on("request", (req, res) => {
  console.log("Ahother request");
});

server.on("close", () => {
  console.log("Server close");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for request");
});
