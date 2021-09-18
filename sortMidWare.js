const sortMidWare = (req, res, next) => {
  let arr = sortObject(req.counter);
  req.char1 = arr[arr.length - 1].key;
  req.char2 = arr[arr.length - 2].key;
  req.char3 = arr[arr.length - 3].key;
  req.char4 = arr[arr.length - 4].key;
  console.log(sortObject(req.counter));
  next();
};
function sortObject(obj) {
  var arr = [];
  Object.entries(obj).forEach((value) => {
    arr.push({
      key: value[0],
      value: value[1],
    });
    arr.sort(function (a, b) {
      return a.value - b.value;
    });
  });
  //arr.sort(function(a, b) { a.value.toLowerCase().localeCompare(b.value.toLowerCase()); }); //use this to sort as strings
  return arr; // returns array
}
module.exports = sortMidWare;
