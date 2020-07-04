import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import WrongData from "./pages/WrongData/WrongData";
import Main from "./pages/Main/Main";
import StickerPackForm from "./pages/StickerPackForm/StickerPackForm";

        class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/wrongdata" component={WrongData} />
          <Route exact path="/user/:userId" component={Main} />
          <Route exact path="/sticker/:stickerID" component={StickerPackForm} />
        </Switch>
      </div>
    );
    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}

export default App;
