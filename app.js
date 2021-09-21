const express = require("express");
const fs = require("fs");
const filterMidWare = require("./filterMidWare");
const countMiddleWare = require("./countMiddleWare");
const controller = require("./controller");
const sortMidWare = require("./sortMidWare");
const filterReq = require("./filterReq");
const app = express();
app.use(express.json());
//app.use([filter,reg,counter,sorter])
app.use(express.urlencoded({ extended: false }));

app.post("/emoji", filterMidWare, countMiddleWare, sortMidWare, controller);
// function one  :  validation -> validates the string and checks if any unwanted charcters exist
// function two : sorts and compares -> hint (uses map for storing the characters and their respective count)
// if the hash map contains the character increament by one
// if the hash map doesnt contain the character set the character and set the value to one
// function three :replaces the top four to emoji ->
app.post("/", filterReq, (req, res) => {
  let userJson = req.body;
  fs.readFile("./customer.json", "utf8", (err, jsonObj) => {
    if (err) {
      res.send("error occured while reading json", err);
    } else {
      let data = JSON.parse(jsonObj);
      for (let i = 0; i < Object.keys(data).length; i++) {
        if (Object.keys(data)[i] === Object.keys(userJson)[0]) {
          return res.send(" The data is already available");
        } else {
          let readData = { ...data, ...userJson };
          let stringify = JSON.stringify(readData, null, 2);
          fs.writeFileSync("./customer.json", stringify);
          res.send("data updated success fully");
        }
      }
    }
  });
});
app.listen(6000, () => {
  console.log("server is listening on port 6000....");
});
