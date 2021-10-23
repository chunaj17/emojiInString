const fs = require("fs");
const jsonController = (req, res) => {
  let { id, characters } = req.body;
  fs.readFile("../customer.json", "utf8", (err, jsonObj) => {
    if (err) {
      return res.status(404).json({
        msg: `error occurred will reading file....`,
        data: `${err}`
      });
    } else {
      try {
        let data = JSON.parse(jsonObj);
        if (data.hasOwnProperty(id)) {
          return res.status(200).json({ msg: `The data by id:${id} is already available` });
        } else {
          let toJson = {};
          let userData = characters.match(/[a-z]/gi);
          for (let i = 0; i < userData.length; i++) {
            toJson[`${userData[i]}`] = userData[i];
          }
          let newdata = {
            [`${id}`]: {
              id: `${id}`,
              characters: toJson,
            },
          };
          let readdata = { ...data, ...newdata };
          let stringified = JSON.stringifiy(readdata, null, 2);
          fs.writeFile("../customer.json", stringified, (err) => {
            if (err) {
              return res.status(404).json({
                msg: "error while writing the data",
                data: err
              })
            } else {
              res.status(200).json({ msg: "data updated successfully" });
            }
          });
        }
      } catch (error) {
        res.send(error);
        console.log(error);
      }
    }
  });
};
module.exports = jsonController;
