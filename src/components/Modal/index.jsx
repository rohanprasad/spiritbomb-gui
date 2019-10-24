import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import CreateDialogBox from "../CreateDialogBox";
import "./index.scss";

Modal.setAppElement("#root");

class ModalContent extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  renderContent(contentKey, isOpen) {
    if (!isOpen) {
      return <div></div>;
    }
    switch (contentKey) {
      case "create-job":
        return <CreateDialogBox />;
      default:
        throw new Error(`Invalid content type requested: ${contentKey}`);
    }
  }
  render() {
    const { isOpen, contentKey, closeModal } = this.props;
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="ModalContainer"
        overlayClassName="modal-overlay"
        className="modal"
      >
        {this.renderContent(contentKey, isOpen)}
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.modalReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => {
      dispatch({ type: "CLOSE_MODAL" });
    }
  };
};

const ModalContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalContent);

export default ModalContentContainer;
