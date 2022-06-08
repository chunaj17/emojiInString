const filterReq = (req, res, next) => {
  let data = req.body;
  !data.hasOwnProperty("id")
    ? res.status(400).json({
        message: "plzz enter 'id' key  in reqbody json",
        data: {
          id: "values",
          characters: "values",
        },
      })
    : !data.hasOwnProperty("characters")
    ? res.status(400).json({
        message: "plzz enter 'characters' key in reqbody json",
        data: {
          id: "values",
          characters: "values",
        },
      })
    : data.id === ""
    ? res.status(400).json({
        message: "plzz enter id value in reqbody",
        data: {
          id: "values",
          characters: "values",
        },
      })
    : data.characters === ""
    ? res.status(400).json({
        message: "plzz enter characters value in reqbody",
        data: {
          id: "values",
          characters: "values",
        },
      })
    : next();
};
module.exports = filterReq;
