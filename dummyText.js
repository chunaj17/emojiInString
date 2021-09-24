const { readFile, writeFile } = require("fs");
const emoji = require("node-emoji");
const emojiList = require("./emoji");
const getRegEx = require("./regexMidware");
function dummyText(req, res) {
  let { id, request } = req.body;
  readFile("./customer.json", "utf8", (err, jsonData) => {
    if (err) {
      console.log(err);
    } else {
      let data = JSON.parse(jsonData);
      if (data.hasOwnProperty(id)) {
        let characters = data[`${id}`].characters;
        let text = request;
        Object.values(characters).forEach((element) => {
          text = text.replace(getRegEx(element), emoji.get(emojiList[element]));
        });
        console.log(text);
        let time = Date.now();
        let result = text;

        let dataToBeSaved = {
          [`${time}`]: {
            id: time,
            result: result,
            request: request,
          },
        };
        let userData = data[`${id}`];
        let newDataToBeSaved = {};
        if (userData.hasOwnProperty("requests")) {
          newDataToBeSaved = { ...userData["requests"], ...dataToBeSaved };
        } else {
          newDataToBeSaved = { ...dataToBeSaved };
        }

        let newUserData = {
          ...userData,
          requests: {
            ...newDataToBeSaved,
          },
        };

        let newData = {
          ...data,
          ...newUserData,
        };

        let newRequest = JSON.stringify(newData, null, 2);

        writeFile("./customer.json", newRequest, (err) => {});

        res.status(201).send({ result: text });
      } else {
        res.send("id not found");
      }
    }
  });
}
module.exports = dummyText;
