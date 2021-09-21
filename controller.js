const getRegEx = require("./regexMidware");
const emoji = require("node-emoji");
const alterController = (req, res) => {
  let data = req.body;
  //   last1 = arr[arr.length - 1].key.replace(
  //     arr[arr.length - 1].key,
  //     emoji.get("sunglasses")
  //   );
  //   last2 = arr[arr.length - 2].key.replace(
  //     arr[arr.length - 2].key,
  //     emoji.get("yum")
  //   );
  //   last3 = arr[arr.length - 3].key.replace(
  //     arr[arr.length - 3].key,
  //     emoji.get("stuck_out_tongue")
  //   );
  //   last4 = arr[arr.length - 4].key.replace(
  //     arr[arr.length - 4].key,
  //     emoji.get("joy")
  //   );
  //console.log(req);
  // let s = count(data.value);
  // let arr = sortObject(s);
  // char1 = arr[arr.length - 1].key;
  // char2 = arr[arr.length - 2].key;
  // char3 = arr[arr.length - 3].key;
  // char4 = arr[arr.length - 4].key;

  let a = data.value;
  const b = a
    .replace(getRegEx(req.char1), emoji.get("sunglasses"))
    .replace(getRegEx(req.char2), emoji.get("yum"))
    .replace(getRegEx(req.char3), emoji.get("stuck_out_tongue"))
    .replace(getRegEx(req.char4), emoji.get("joy"));
  res.send(`${b}`);
};

module.exports = alterController;
