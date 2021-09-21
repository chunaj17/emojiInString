const fs = require("fs");
let jsonController = (req, res) => {
  let userJson = req.body;
  let id = userJson.id;
  let characters = userJson.characters;
  fs.readFile("./customer.json", "utf8", (err, jsonObj) => {
    if (err) {
      res.send("error occured while reading json", err);
    } else {
      let data = JSON.parse(jsonObj);
      let time = new Date();
      console.log(time.getSeconds());
      let parsed = characters.replace(characters.replace(/\s+/g).split("%"));
      console.log(parsed);
      if (data.hasOwnProperty(id)) {
        return res.send(" The data is already available");
      } else {
        let newdata = {
          [`${id}`]: {
            id: `${id}`,
            characters: `${characters}`,
          },
        };
        let readData = { ...data, ...newdata };
        let stringify = JSON.stringify(readData, null, 2);
        fs.writeFileSync("./customer.json", stringify);
      }
      res.status(200).send("data updated successfully");
    }
  });
};
module.exports = jsonController;
