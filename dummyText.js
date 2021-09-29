const { readFile } = require("fs");
const emoji = require("node-emoji");
const emojiList = require("./emoji");
const getRegEx = require("./regex");
function dummyText(req, res, next) {
  let time = new Date();
  req.start = time.getMilliseconds();
  let { id, request } = req.body;
  readFile("./customer.json", "utf8", (err, jsonData) => {
    if (err) {
      console.log(err);
    } else {
      req.data = JSON.parse(jsonData);
      if (req.data.hasOwnProperty(id)) {
        let characters = req.data[`${id}`].characters;
        req.text = request;
        Object.values(characters).forEach((element) => {
          req.text = req.text.replace(
            getRegEx(element),
            emoji.get(emojiList[element])
          );
        });
        console.log(req.text);
        next();
      } else {
        res.send("id not found");
      }
    }
  });
}
module.exports = dummyText;
