const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json);
app.get("/", (req, res) => {
  console.log(req.body);
});
app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
