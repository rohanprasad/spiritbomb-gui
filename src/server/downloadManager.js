const path = require("path");
const spiritBomb = require("spiritbomb");
const downloadPath = path.resolve(__dirname, "../../downloads");

const currentTasks = [];

const add = body => {
  currentTasks.push(
    spiritBomb({
      link: body.url,
      downloadPath,
      referrer: body.referrer,
      quiet: true
    })
  );
};

const getProgress = () => {
  const statusList = [];
  currentTasks.forEach(task => {
    statusList.push(task.getProgress());
  });
  return statusList;
};

module.exports = {
  add,
  getProgress
};
