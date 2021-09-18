const count = require("./countMiddleWare");
const sortObject = require("./sortMidWare");
const emoji = require("node-emoji");
const filterMidWare = (req, res, next) => {
  let data = req.body;
  if (unwanted(data.value)) {
    next();
  } else {
    res.send(
      "<h1>Invalid entry</h1> <h2> Ur string contains a unwanted symbol or number or  just no entry</h2> "
    );
  }
};
function unwanted(checks) {
  let reg = /(^[a-z ]+$)/i;
  return reg.test(checks);
}
module.exports = filterMidWare;
