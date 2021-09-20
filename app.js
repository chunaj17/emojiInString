const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json);
app.get("/", (req, res) => {
  let data = req.body;
  console.log(data);
  res.send(req.body);
});
app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
