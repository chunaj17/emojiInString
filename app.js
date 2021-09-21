const express = require("express");
const filterMidWare = require("./filterMidWare");
const countMiddleWare = require("./countMiddleWare");
const controller = require("./controller");
const sortMidWare = require("./sortMidWare");
const filterReq = require("./filterReq");
const jsonController = require("./jsonController");
const responseTime = require("response-time");
const app = express();
app.use(express.json());
app.use(responseTime());
app.use(express.urlencoded({ extended: false }));
app.post("/emoji", filterMidWare, countMiddleWare, sortMidWare, controller);
// function one  :  validation -> validates the string and checks if any unwanted charcters exist
// function two : sorts and compares -> hint (uses map for storing the characters and their respective count)
// if the hash map contains the character increament by one
// if the hash map doesnt contain the character set the character and set the value to one
// function three :replaces the top four to emoji ->
app.post("/", filterReq, jsonController);
app.listen(6000, () => {
  console.log("server is listening on port 6000....");
});
