const sortObject = require("./sortMidWare");

const countMiddleWare = (req, res, next) => {
  let data = req.body;
  req.counter = count(data.value);
  //   let arr = sortObject(counter);
  //   req.char1 = arr[arr.length - 1].key;
  //   req.char2 = arr[arr.length - 2].key;
  //   req.char3 = arr[arr.length - 3].key;
  //   req.char4 = arr[arr.length - 4].key;
  next();
  //console.log(counter);
};

function count(string) {
  var count = {};
  string
    .replace(/\s/g, "")
    .split("")
    .forEach((s) => {
      count[s] ? count[s]++ : (count[s] = 1);
    });
  return count;
}
module.exports = countMiddleWare;
