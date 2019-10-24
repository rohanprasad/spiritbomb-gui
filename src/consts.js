const status = {
  queued: "Queued",
  running: "Running",
  completed: "Completed"
};

const columnNames = [
  {
    keyName: "name",
    displayText: "Name"
  },
  {
    keyName: "type",
    displayText: "Type"
  },
  {
    keyName: "size",
    displayText: "Size"
  },
  {
    keyName: "status",
    displayText: "Status"
  }
];

const constants = {
  navbarItems: [
    {
      title: "Downloading",
      logo: ""
    },
    {
      title: "Completed",
      logo: ""
    }
  ],
  mockItems: [
    {
      name: "mock1",
      id: "mock1",
      type: "document",
      status: status.queued
    },
    {
      name: "mock2",
      id: "mock2",
      type: "mp3",
      status: status.running
    },
    {
      name: "mock3",
      id: "mock3",
      type: "movie",
      status: status.completed
    }
  ],
  status,
  columnNames
};

export default constants;
