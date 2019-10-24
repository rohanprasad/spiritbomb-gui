import React from "react";
import { connect } from "react-redux";
import io from "socket.io-client";
import Api from "../../api";
import TileView from "../TileView";
import ListView from "../ListView";
import "./index.scss";

class Dashboard extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.getFileList();
    const socket = io("http://localhost:3001");
    socket.on("progress", payload => {
      console.log(payload);
    });
  }
  renderContent() {
    const { display } = this.props;
    switch (display) {
      case "Tile":
        return <TileView />;
      case "List":
      default:
        return <ListView />;
    }
  }
  render() {
    const { title } = this.props;
    return <div className="dashboard">{this.renderContent()}</div>;
  }
}

const mapStateToProps = () => {
  return {
    display: "Tile"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFileList: Api.getAllFiles(dispatch)
  };
};

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default DashboardContainer;
