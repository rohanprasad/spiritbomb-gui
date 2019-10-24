import React from "react";
import { Provider } from "react-redux";

import store from "./store";

import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Fab from "./components/Fab";
import ModalContainer from "./components/Modal";
import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Sidebar />
        <Dashboard title="All documents" />
        <Fab />
        <ModalContainer />
      </div>
    </Provider>
  );
}

export default App;
