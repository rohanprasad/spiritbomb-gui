const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const bodyParser = require("body-parser");
const cors = require("cors");
const downloadManager = require("./downloadManager");

const fileManager = require("./fileManager");

const port = 3001;

app.use(cors());

app.get("/files", (req, res) => {
  res.send(JSON.stringify(fileManager.getMetaFiles()));
});

app.post("/add", bodyParser.json(), (req, res) => {
  console.log(req.body);
  downloadManager.add(req.body);
  res.sendStatus(200);
});

io.on("connection", socket => {
  setInterval(() => {
    socket.emit("progress", downloadManager.getProgress());
  }, 100);
});

http.listen(port, () => {
  console.log("Listening on ", port);
});
