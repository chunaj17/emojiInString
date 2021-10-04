const unwanted = require("./utils");
const filterMidWare = (req, res, next) => {
  let data = req.body;
  if (unwanted(data.value)) {
    next();
  } else {
    res.status(404).json({
      msg: "Ur string contains a unwanted symbol or number or  just no entry",
      data: "something like this string",
    });
  }
};

module.exports = filterMidWare;
