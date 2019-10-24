const superagent = require("superagent");

const baseUrl = "http://localhost:3001";

const getAllFiles = dispatch => {
  return function() {
    superagent
      .get(`${baseUrl}/files`)
      .set("accept", "json")
      .end((err, res) => {
        if (err) {
          console.log(err);
          dispatch({
            type: "SET_FILE_LIST",
            payload: []
          });
          return;
        }
        dispatch({
          type: "SET_FILE_LIST",
          payload: JSON.parse(res.text)
        });
      });
  };
};

export default {
  getAllFiles
};
