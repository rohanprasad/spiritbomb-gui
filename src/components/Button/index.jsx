import React from "react";
import "./index.scss";

class Button extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, onClickHandler, customStyles } = this.props;
    return (
      <div className="button" style={customStyles} onClick={onClickHandler}>
        {title}
      </div>
    );
  }
}

export default Button;
