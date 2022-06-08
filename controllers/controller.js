const emoji = require("node-emoji");
const alterController = (req, res) => {
  let data = req.body;
  let stringFromReqBody = data.value;
  const emojiReplacedText = stringFromReqBody
    .replace(getRegEx(req.char1), emoji.get("sunglasses"))
    .replace(getRegEx(req.char2), emoji.get("yum"))
    .replace(getRegEx(req.char3), emoji.get("stuck_out_tongue"))
    .replace(getRegEx(req.char4), emoji.get("joy"));
  res.send(`${emojiReplacedText}`);
};
function getRegEx(item) {
  let pattern = new RegExp(item, "g");
  return pattern;
}
module.exports = { alterController, getRegEx };
