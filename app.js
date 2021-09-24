const express = require("express");
const dummyText = require("./dummyText");
const writeDummy = require("./writeDummy");
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
app.post("/text", filterReq, dummyText, writeDummy);
app.listen(6000, () => {
  console.log("server is listening on port 6000....");
});

//  route one
// get request requires{userid}
// goes to the customer.json checks wether the customer exists
// retrevies the characters under the userChar

// route 2
//... as route one
// returns the reqeusts in an array sorted by time
