const { readFile } = require("fs");
const emojiList = require("./emojiList");
const getEmoji = (req, res) => {
  res.send(emojiList);
};
module.exports = getEmoji;
