const { readFile } = require("fs");
const charactersParam = (req, res) => {
  let { id, value } = req.params;
  let time = new Date();
  let start = time.getMilliseconds();
  readFile("./customer.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      let jsonData = JSON.parse(data);
      if (jsonData.hasOwnProperty(id)) {
        let end = time.getMilliseconds();
        let elapsed = end - start;
        jsonData[id][value].time = `Time it took to response ${elapsed}`;
        jsonData[id][value].Date = `Request Date ${time}`;
        res.send(jsonData[id][value]);
      } else {
        let end = time.getMilliseconds();
        res.send(
          `char or id  not found!!! and  response took about :- ${
            end - start
          } Milliseconds`
        );
      }
    }
  });
};
module.exports = charactersParam;
