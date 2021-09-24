const { writeFile } = require("fs");
const writeDummy = (req, res, next) => {
  const { id, request } = req.body;
  let time = Date.now();
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
    ...newUserData,
  };
  let newRequest = JSON.stringify(newData, null, 2);

  writeFile("./customer.json", newRequest, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("data successfully written to the json file");
    }
  });
};
module.exports = writeDummy;
