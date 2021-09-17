const count = require("./countMiddleWare");
const sortObject = require("./sortMidWare");
const emoji = require("node-emoji");
const filterMidWare = (req, res, next) => {
  let data = req.body;
  if (unwanted(data.value)) {
    // let s = count(data.value);
    // let arr = sortObject(s);
    // req.char1 = arr[arr.length - 1].key;
    // req.char2 = arr[arr.length - 2].key;
    // req.char3 = arr[arr.length - 3].key;
    // req.char4 = arr[arr.length - 4].key;
    // req.message = data.value;
    //res.send()params
    //console.log(count(data.value))
    next();
  } else {
    res.send(
      "<h1>Invalid entry</h1> <h2> Ur string contains a unwanted symbol or number</h2> "
    );
  }
};
function unwanted(checks) {
  let reg = /(^[a-z ]+$)/i;
  return reg.test(checks);
}
module.exports = filterMidWare;
