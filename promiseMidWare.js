const { writeFileSync, readFile } = require("fs");
const promise = (req, res, next) => {
  let data = req.body;
  let p = new Promise((resolve, reject) => {
    writeFileSync("./data.txt", data.value);
    readFile("./data.txt", "utf8", (err, result) => {
      if (err) {
        reject(`<h1> data not writen on a file or empty data value`);
        return;
      } else {
        console.log(result);
        resolve(`<h1>this text  \'${result}\' has been writen on a file</h1>`);
      }
    });
  });
  p.then((message) => {
    res.send(message);
  }).catch((message) => {
    res.send(message);
  });
};
module.exports = promise;
