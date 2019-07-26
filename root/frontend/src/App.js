import React from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'Default message here',
    };
  }

  render() {
    return (
      <a>{this.state.msg}</a>
    )
  }
}

export default App;
