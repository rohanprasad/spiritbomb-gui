import React from "react";
import { connect } from "react-redux";
import util from "../../util.js";
import "./index.scss";

class Tile extends React.PureComponent {
  render() {
    const { name, totalSize, thumbnail } = this.props;
    return (
      <div className="tile">
        <div className="title">{name}</div>
        <div>
          <div>{util.getReadableSize(totalSize)}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store, ownProps) => {
  const fileList = [...store.fileReducer.filelist];
  let fileDetails;
  for (let ii = 0; ii < fileList.length; ++ii) {
    if (fileList[ii].id === ownProps.fileId) {
      fileDetails = fileList[ii];
    }
  }
  return {
    ...fileDetails
  };
};

const mapDispatchToProps = () => {
  return {};
};

const TileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tile);

export default TileContainer;
