const { writeFile } = require("fs");
const writeDummy = (req, res, next) => {
  const { id, request } = req.body;
  let time = new Date();
  let result = req.text;
  let dataToBeSaved = {
    [`${time}`]: {
      id: time,
      result: result,
      request: request,
    },
  };
  let userData = req.data[`${id}`];
  let newDataToBeSaved = {};
  if (userData.hasOwnProperty("requests")) {
    newDataToBeSaved = { ...userData["requests"], ...dataToBeSaved };
  } else {
    newDataToBeSaved = { ...dataToBeSaved };
  }
  let newUserData = {
    ...userData,
    requests: {
      ...newDataToBeSaved,
    },
  };
  let newData = {
    ...req.data,
    [`${userData["id"]}`]: { ...newUserData },
  };
  let newRequest = JSON.stringify(newData, null, 2);
  writeFile("../customer.json", newRequest, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({
        msg: `data successfully written to the json file`,
        data: result
      })
    }
  });
};
module.exports = writeDummy;
