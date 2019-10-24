import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

import Button from "../Button";
import "./index.scss";

class CreateForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      downloadLink: ""
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.downloadClickHandler = this.downloadClickHandler.bind(this);
  }
  handleTextChange(event) {
    this.setState({
      downloadLink: event.target.value
    });
  }
  downloadClickHandler() {
    const { startDownload } = this.props;
    if (this.state.downloadLink) {
      startDownload(this.state.downloadLink);
    }
  }
  render() {
    const { downloadClickHandler, closeModal } = this.props;
    const { downloadLink } = this.state;
    return (
      <div className="dialog-box">
        <div className="dialog-box-header">
          <div className="close-btn" onClick={closeModal}>
            <FontAwesomeIcon icon={faTimesCircle} />
          </div>
          <div className="title">Create New</div>
        </div>
        <div className="dialog-box-content">
          <textarea
            type="text"
            onChange={this.handleTextChange}
            value={downloadLink}
          />
        </div>
        <div className="dialog-box-footer">
          <Button
            title="Download"
            onClickHandler={downloadClickHandler}
            isDisabled={downloadLink === ""}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => {
      dispatch({ type: "CLOSE_MODAL" });
    },
    startDownload: url => {
      dispatch({ type: "API_START_DOWNLOAD", link: url });
    }
  };
};

const CreateFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateForm);

export default CreateFormContainer;
