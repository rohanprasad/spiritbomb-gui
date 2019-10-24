const mongoose = require("mongoose");

const dbName = "spiritbomb";
// TODO: Merge into same constants.
const partStatusEnum = [
  "part-download-starting",
  "part-download-running",
  "part-download-failed",
  "part-download-completed"
];
let isConnected = false;

const filePart = new mongoose.Schema({
  id: String,
  status: {
    type: String,
    enum: partStatusEnum,
    default: partStatusEnum[0]
  },
  attempts: Number
});

const fileSchema = new mongoose.Schema({
  id: String,
  downloadUrl: String,
  filename: String,
  referrer: String,
  partStatus: [filePart]
});

const File = mongoose.model("File", fileSchema);

mongoose
  .connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    isConnected = true;
  })
  .catch(error => {
    console.error("Connection to database failed: ", error);
  });

const AddFile = fileInfo => {
  const file = new File(fileInfo);
  file.save((err, file) => {
    if (err) {
      throw err;
    }
    console.log("Created new file with id: ", file.id);
  });
};

const GetAllFiles = cb => {
  File.find(cb);
};
