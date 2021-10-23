const { readFile } = require("fs");
const charactersParam = (req, res) => {
  let { id, charOrReq } = req.params;
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
        jsonData[id][charOrReq].time = `Time it took to response ${elapsed}`;
        jsonData[id][charOrReq].Date = `Request Date ${time}`;
        res.status(200).send(jsonData[id][charOrReq]);
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
module.exports = charactersParam;
