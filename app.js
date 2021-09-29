const express = require("express");
const dummyText = require("./dummyText");
const writeDummy = require("./writeDummy");
const filterMidWare = require("./filterMidWare");
const countMiddleWare = require("./countMiddleWare");
const controller = require("./controller");
const sortMidWare = require("./sortMidWare");
const filterReq = require("./filterReq");
const jsonController = require("./jsonController");
const paramJson = require("./paramJson");
const idParam = require("./idParam");
const charReqParam = require("./charReqParam");
const getEmoji = require("./getEmoji");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//this route changes characters into emoji in a string based on there greatest reptitions in that string
app.post(
  "/api/v1/emoji",
  filterMidWare,
  countMiddleWare,
  sortMidWare,
  controller
);
/*this route accepts id and string from req body 
and change the strings into iterating characters 
and stores them into json file */
app.post("/api/v1/write", filterReq, jsonController);
/*this one below accepts id and request from req body 
n validates if the id exists in the json store 
n if the condition is true it changes all characters into emoji 
and store them into the josn under the id as request*/
app.post("/api/v1/dummyText", filterReq, dummyText, writeDummy);
/*this one below takes two params the id and characters 
first it validates the id and 
changes the characters with the params string 
that were previously stored in the json file 
and finally send response with each properties in the crossponding id Object */
app.get("/api/v1/changeChar/:id/requests/:characters", paramJson);
//retrun id object from json
app.get("/api/v1/getOnly/:id", idParam);
//returns characters or requests based on the parameter input from json
app.get("/api/v1/getOnly/:id/:value", charReqParam);
//returns characters with there crossponding emojis symbols
app.get("/api/v1/emojiList", getEmoji);
app.listen(6000, () => {
  console.log("server is listening on port 6000....");
});
