const isEmpty = require("lodash.isempty");
const filterReq = (req, res, next) => {
  let data = req.body;
  //   console.log(Object.keys(data));
  if (isEmpty(Object.keys(data))) {
    res.send("Empty Object or check ur entry");
  } else {
    next();
  }
};
module.exports = filterReq;
