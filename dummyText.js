const { readFile } = require("fs");
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
        res.status(200).send("data is available");
        let characters = data[`${id}`].characters;
        let text = request;
        Object.values(characters).forEach((element) => {
          text = text.replace(getRegEx(element), emoji.get(emojiList[element]));
        });
        res.send(text);
        console.log(text);
        //console.log(Object.values(characters).length);
      } else {
        res.send();
      }
    }
  });
}
module.exports = dummyText;
