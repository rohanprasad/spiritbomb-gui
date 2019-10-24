import React from "react";
import { connect } from "react-redux";
import Tile from "../Tile";

class TileView extends React.PureComponent {
  render() {
    const { fileIds } = this.props;
    return (
      <div>
        {fileIds.map(fileId => {
          return <Tile fileId={fileId} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = store => {
  const fileList = [...store.fileReducer.filelist];
  return {
    fileIds: fileList.map(file => file.id)
  };
};

const TileViewContainer = connect(mapStateToProps)(TileView);

export default TileViewContainer;
