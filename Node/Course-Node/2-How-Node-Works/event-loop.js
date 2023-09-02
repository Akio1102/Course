const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 4;

setTimeout(() => console.log("Timer 1 Finalizado"), 0);
setImmediate(() => console.log("Inmediato 1"));

fs.readFile("test-file.txt", () => {
  console.log("I/O Finished");
  console.log("----------------");

  setTimeout(() => console.log("Timer 2 Finalizado"), 0);
  setTimeout(() => console.log("Timer 3 Finalizado"), 3000);
  setImmediate(() => console.log("Inmediato 2"));
  3;

  process.nextTick(() => console.log("Process.nextTick"));

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypted");

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypted");

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypted");

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypted");

  //   crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  //     console.log(Date.now() - start, "Password encrypted");
  //   });
  //   crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  //     console.log(Date.now() - start, "Password encrypted");
  //   });
  //   crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  //     console.log(Date.now() - start, "Password encrypted");
  //   });
});

console.log("Hello from the top-level code");
