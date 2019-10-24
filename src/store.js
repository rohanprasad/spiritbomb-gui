import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import constants from "./consts";

const defaultFileReducerState = {
  filelist: []
};

const defaultListViewReducerState = {
  orderByKey: "name",
  orderByDirectionReverse: false
};

const defaultModalReducerState = {
  isOpen: false,
  contentKey: ""
};

function fileReducer(state = defaultFileReducerState, action) {
  switch (action.type) {
    case "SET_FILE_LIST":
      return {
        ...state,
        filelist: action.payload
      };
    default:
      return state;
  }
}

function listViewReducer(state = defaultListViewReducerState, action) {
  switch (action.type) {
    case "ORDER_BY":
      return {
        ...state,
        orderByKey: action.key,
        orderByDirectionReverse:
          state.orderByKey === action.key
            ? !state.orderByDirectionReverse
            : false
      };
    default:
      return state;
  }
}

function modalReducer(state = defaultModalReducerState, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        isOpen: true,
        contentKey: action.key
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        isOpen: false,
        contentKey: ""
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  fileReducer,
  listViewReducer,
  modalReducer
});

const store = createStore(
  rootReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

export default store;
