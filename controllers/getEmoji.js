const { readFile } = require("fs");
const emojiList = require("./emojiList");
const getEmoji = (req, res) => {
  res.status(200).send(emojiList);
};
module.exports = getEmoji;
