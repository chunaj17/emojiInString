const { readFile } = require("fs");
const paramJson = (req, res, next) => {
  const time = new Date();
  const start = time.getMilliseconds();
  const { id, characters } = req.params;
  readFile("./customer.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      let jsonData = JSON.parse(data);
      if (jsonData.hasOwnProperty(id)) {
        let end = time.getMilliseconds();
        let elapsed = end - start;
        jsonData[id].time = `Time it took to response ${elapsed}`;
        jsonData[id].Date = `Request Date ${time}`;
        jsonData[id].characters = characters;
        res.send(jsonData[id]);
      } else {
        let end = time.getMilliseconds();
        res.send(
          `id not found!!! and  response took about :- ${
            end - start
          } Milliseconds`
        );
      }
    }
  });
};
module.exports = paramJson;
