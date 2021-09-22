const fs = require("fs");
const emoji = require("node-emoji");
const jsonEmoji = require("./emoji.json");
// const emojiJson = JSON.parse(jsonEmoji);
let jsonController = (req, res) => {
  let { id, characters } = req.body;
  fs.readFile("./customer.json", "utf8", (err, jsonObj) => {
    if (err) {
      res.send("error occured while reading json", err);
    } else {
      let data = JSON.parse(jsonObj);
      let parsed = "";
      let time = new Date();
      //   let parsed = characters.replace(/\s+/g).split("%");

      for (let i = 0, n = characters.length; i < n; i++) {
        // console.log(i);
        let c = characters.charAt(i).toLowerCase();
        // console.log(c);
        // parsed = characters.replace(c, emoji.get(c));
        if (emoji.get(c)) {
          parsed += emoji.get("smile");
        }
      }
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
