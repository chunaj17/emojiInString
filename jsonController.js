const fs = require("fs");
const jsonController = (req, res) => {
  let { id, characters } = req.body;
  fs.readFile("./customer.json", "utf8", (err, jsonObj) => {
    if (err) {
      res.send("error occured while reading json", err);
    } else {
      try {
        let data = JSON.parse(jsonObj);
        if (data.hasOwnProperty(id)) {
          return res.send(" The data is already available");
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
          let stringify = JSON.stringify(readdata, null, 2);
          fs.writeFileSync("./customer.json", stringify);
        }
        res.status(200).send("data updated successfully");
      } catch (error) {
        res.send(error);
        console.log(error);
      }
    }
  });
};
module.exports = jsonController;
