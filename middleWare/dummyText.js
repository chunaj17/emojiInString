const { readFile } = require("fs");
const emoji = require("node-emoji");
const emojiList = require("../controllers/emoji");
const { getRegEx } = require("../controllers/controller");
function dummyText(req, res, next) {
  let time = new Date();
  req.start = time.getMilliseconds();
  let { id, request } = req.body;
  readFile("../customer.json", "utf8", (err, jsonData) => {
    if (err) {
      return res.status(404).json({
        msg: `error occurred will reading file....`,
        data: `${err}`
      });
    } else {
      req.data = JSON.parse(jsonData)
      if (req.data.hasOwnProperty(id)) {
        let characters = req.data[`${id}`].characters;
        req.text = request;
        Object.values(characters).forEach((element) => {
          req.text = req.text.replace(
            getRegEx(element),
            emoji.get(emojiList[element.toLowerCase()])
          );
        });
        next();
      } else {
        res.status(404).json({ msg: `id:${id} not found` });
      }
    }
  });
}
module.exports = dummyText;
