import React from "react";
import Constants from "../../consts";
import "./index.scss";

class Sidebar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentSelection: 0
    };
    this.ItemClickHandler = this.ItemClickHandler.bind(this);
  }
  ItemClickHandler(index) {
    this.setState({
      currentSelection: index
    });
  }
  render() {
    const navbarItems = Constants.navbarItems;
    const { currentSelection } = this.state;
    return (
      <div className="sidebar">
        <div>logo</div>
        {navbarItems.map((item, index) => {
          return (
            <div
              className={
                index === currentSelection
                  ? "sidebar-item selected"
                  : "sidebar-item"
              }
              onClick={() => {
                this.ItemClickHandler(index);
              }}
            >
              {item.title}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Sidebar;
