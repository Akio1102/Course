const fs = require("fs");
const superagent = require("superagent");

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject("Not Found that file");
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject("Not write that file");
      resolve("success");
    });
  });
};

const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    const res1 = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res2 = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res3 = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );

    const all = await Promise.all([res1, res2, res3]);
    const imgs = all.map((ele) => ele.body.message);
    console.log(imgs);

    await writeFilePro("dog-img.txt", imgs.join("\n"));
    console.log("Ramdon dog image saved to file");
  } catch (error) {
    console.log(error);
    throw err;
  }
  return "2: Ready";
};

(async () => {
  try {
    console.log("1: Will get dog pics!");
    const api = await getDogPic();
    console.log(api);
    console.log("3: Done getting dog pics!");
  } catch (error) {
    console.log(err);
  }
})();

// console.log("1: Will get dog pics!");
// getDogPic()
//   .then((x) => {
//     console.log(x);
//     console.log("3: Done getting dog pics!");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// readFilePro(`${__dirname}/dog.txt`)
//   .then((data) => {
//     console.log(`Breed: ${data}`);
//     return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//   })
//   .then((res) => {
//     console.log(res.body.message);
//     return writeFilePro("dog-img.txt", res.body.message);
//   })
//   .then(() => console.log("Ramdon dog image saved to file"))
//   .catch((err) => console.log(err));

/* fs.readFile((err, data) => {
    if (err) console.log(err);

    console.log(`Breed: ${data}`);

    superagent
        .get(`https://dog.ceo/api/breed/${data}/images/random`)
        .then(res => {
            console.log(res.body.message);

            fs.writeFile("dog-img.txt", res.body.message, err => {
                if (err) return console.log(err.message);
                console.log("Ramdon dog image saved to file");
            })
        })
        .catch(err => console.log(err))
}) */
