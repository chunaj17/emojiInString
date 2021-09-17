const express = require("express");
const emoji = require("node-emoji");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.post("/emoji", (req, res) => {
  let data = req.body;
  if (data.value == null) {
    res.send("data is null");
  } else {
    let str = data.value;
    let a = str.replace(/o/g, emoji.get("confused"));
    res.send(a);
  }
});

app.listen(4000, () => {
  console.log("server is listening on port 4000....");
});
