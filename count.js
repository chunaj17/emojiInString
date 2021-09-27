let sam = {
  s: 1,
  what: "hello",
};
function count(string) {
  var count = {};
  string
    .replace(/\s/g, "")
    .split("")
    .forEach((s) => {
      count[s] ? count[s]++ : (count[s] = 1);
    });
  let replace = string.replace(/\s/g, "").split("");
  console.log(replace);
  return count;
}
let text = "";
let arr = ["sam", "heli", "mesk"];
arr.forEach((currValue, index) => {
  sam[currValue] ? sam[currValue]++ : (sam[currValue] = 1);
});
console.log(sam);
