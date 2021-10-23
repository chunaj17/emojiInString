const { readFile } = require("fs");
const idParam = (req, res) => {
  let { id } = req.params;
  let time = new Date();
  let start = time.getMilliseconds();
  readFile("../customer.json", "utf8", (err, data) => {
    if (err) {
      res.status(404).json({
        msg: `error while reading file...`,
        data: `${err}`
      }
      );
    } else {
      let jsonData = JSON.parse(data);
      if (jsonData.hasOwnProperty(id)) {
        let end = time.getMilliseconds();
        let elapsed = end - start;
        jsonData[id].time = `Time it took to response ${elapsed}`;
        jsonData[id].Date = `Request Date ${time}`;
        res.send(jsonData[id]);
      } else {
        let end = time.getMilliseconds();
        res.status(404).json({
          msg: `id:${id}  not found!!! and  response took about :- ${end - start
            } Milliseconds`
        }
        );
      }
    }
  });
};
module.exports = idParam;
