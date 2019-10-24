import React from "react";
import { connect } from "react-redux";

import constants from "../../consts";
import "./index.scss";

class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.headerTitleClickHandler = this.headerTitleClickHandler.bind(this);
  }
  headerTitleClickHandler(keyname) {
    this.props.setOrderBy(keyname);
  }
  render() {
    const { fileList, orderByKey, orderByDirectionReverse } = this.props;
    return (
      <div className="listview">
        {constants.columnNames.map(item => {
          let itemClassName = "hidden";
          if (item.keyName === orderByKey) {
            itemClassName = "order-by";
            if (orderByDirectionReverse) {
              itemClassName += " reverse";
            }
          }
          return (
            <div
              className="listview-column title"
              onClick={() => {
                this.headerTitleClickHandler(item.keyName);
              }}
            >
              {item.displayText}
              <span className={itemClassName} />
            </div>
          );
        })}
        {fileList.map(item => (
          <div key={item.id}>
            <div key={`${item.id}-name`} className="listview-column">
              {item.name}
            </div>
            <div key={`${item.id}-type`} className="listview-column">
              {item.type}
            </div>
            <div key={`${item.id}-status`} className="listview-column">
              {item.status}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

function compare(first, second) {
  if (first < second) {
    return -1;
  } else if (first > second) {
    return 1;
  }
  return 0;
}

const mapStateToProps = state => {
  const { orderByKey, orderByDirectionReverse } = state.listViewReducer;
  const fileList = [...state.fileReducer.filelist];
  fileList.sort((first, second) => {
    let returnValue = compare(first[orderByKey], second[orderByKey]);
    if (orderByDirectionReverse) {
      return returnValue * -1;
    }
    return returnValue;
  });
  return {
    fileList,
    orderByKey,
    orderByDirectionReverse
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setOrderBy: key => dispatch({ type: "ORDER_BY", key })
  };
};

const ListViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListView);

export default ListViewContainer;
