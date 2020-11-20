import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LoginApp from "./components/LoginApp/LoginApp";
import Board from "./containers/Board/Board";
library.add(faTrash);
library.add(faEdit);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={LoginApp} exact />
        <Route path="/Board" component={Board} />
      </Switch>
    </div>
  );
}

export default App;
