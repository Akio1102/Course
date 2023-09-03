const fs = require("fs");
const superagent = require("superagent");

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) reject("Not Found that file");
      resolve(data);
    });
  });
};

const appendFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(file, data, (err) => {
      if (err) reject("Not write that file");
      resolve("success");
    });
  });
};

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

getDogPic();
