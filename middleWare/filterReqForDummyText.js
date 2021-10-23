const filterReqForDummyText = (req, res, next) => {
  let data = req.body;
  !data.hasOwnProperty("id")
    ? res.status(400).json({
        message: "plzz enter 'id' key  in reqbody json",
        data: {
          id: "values",
          request: "values",
        },
      })
    : !data.hasOwnProperty("request")
    ? res.status(400).json({
        message: "plzz enter 'request' key in reqbody json",
        data: {
          id: "values",
          request: "values",
        },
      })
    : data.id === ""
    ? res.status(400).json({
        message: "plzz enter id value in reqbody",
        data: {
          id: "values",
          request: "values",
        },
      })
    : data.request === ""
    ? res.status(400).json({
        message: "plzz enter request value in reqbody",
        data: {
          id: "values",
          request: "values",
        },
      })
    : next();
};
module.exports = filterReqForDummyText;
