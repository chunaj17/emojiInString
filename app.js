const express = require("express");
const promise = require("./promiseMidWare");
const { writeFileSync, readFile } = require("fs");
const filterMidWare = require("./filterMidWare");
const countMiddleWare = require("./countMiddleWare");
const controller = require("./controller");
const sortMidWare = require("./sortMidWare");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//app.use([filter,reg,counter,sorter])
app.use(express.urlencoded({ extended: false }));
app.get("/promise", filterMidWare, promise);
app.get("/json", filterMidWare, (req, res) => {
  let j = new Promise((resolve, reject) => {
    readFile("./data.json", "utf8", (req, res) => {});

    // Trail one code d
  });
});
app.post("/emoji", filterMidWare, countMiddleWare, sortMidWare, controller);
// function one  :  validation -> validates the string and checks if any unwanted charcters exist
// function two : sorts and compares -> hint (uses map for storing the characters and their respective count)
// if the hash map contains the character increament by one
// if the hash map doesnt contain the character set the character and set the value to one
// function three :replaces the top four to emoji ->
app.listen(6000, () => {
  console.log("server is listening on port 6000....");
});
