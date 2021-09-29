function getRegEx(item) {
  let pattern = new RegExp(item, "g");
  return pattern;
}
module.exports = getRegEx;
