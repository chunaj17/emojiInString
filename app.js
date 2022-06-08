const express = require("express");
const router = require("./routes/routes");
const app = express();
const port = 4000
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v3/", router)
app.listen(port, () => {
  console.log(`server is listening on port ${port}....`);
});
