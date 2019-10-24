import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

class Fab extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { openCreateJobModal } = this.props;
    return (
      <div className="add-fab" onClick={openCreateJobModal}>
        <FontAwesomeIcon icon={faPlus} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    openCreateJobModal: () => {
      dispatch({ type: "OPEN_MODAL", key: "create-job" });
    }
  };
};

const FabContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Fab);

export default FabContainer;
