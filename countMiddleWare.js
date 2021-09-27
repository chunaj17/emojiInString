const countMiddleWare = (req, res, next) => {
  let data = req.body;
  req.counter = count(data.value);
  next();
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
