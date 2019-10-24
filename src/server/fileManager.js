const chokidar = require("chokidar");
const path = require("path");
const fs = require("fs");

const downloadPath = path.resolve(__dirname, "../../downloads");

if (!fs.existsSync(downloadPath)) {
  fs.mkdirSync(downloadPath);
}

const readMetaFile = filename => {
  return JSON.parse(
    fs.readFileSync(path.resolve(downloadPath, filename), "utf-8")
  );
};

const watcher = chokidar.watch("./*.meta", {
  usePolling: true,
  interval: 100,
  cwd: downloadPath,
  depth: 0
});

const metaFiles = {};

const newFileHandler = (file, stat) => {
  const metaInfo = readMetaFile(file);
  metaFiles[metaInfo.fileName] = metaInfo;
};

const fileChangeHandler = (path, stat) => {
  // console.log("File change: ", path);
};

watcher.on("add", newFileHandler).on("change", fileChangeHandler);

const getDownloadedSize = statusMap => {
  let downloadedSize = 0;
  const parts = Object.keys(statusMap).length;
  for (let ii = 1; ii <= parts; ++ii) {
    if (
      statusMap[ii].status === "part-download-completed" &&
      statusMap[ii].size
    ) {
      downloadedSize += statusMap[ii].size || 0;
    }
  }
  return downloadedSize;
};

const getMetaFiles = () => {
  return Object.keys(metaFiles).map(id => {
    return {
      id,
      name: metaFiles[id].finalFilename,
      status: metaFiles[id].currentStatus || "queued",
      totalSize: metaFiles[id].contentLength,
      downloadedSize: getDownloadedSize(metaFiles[id].partStatus),
      downloadSpeed: 0
    };
  });
};

module.exports = {
  getMetaFiles
};
