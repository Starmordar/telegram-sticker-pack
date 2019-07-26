import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import queryString from 'query-string';


class Home extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      msg: "defaut message"
    }
  }
  componentDidMount() {
    const userData = queryString.parse(window.location.search, { sort: false });
    console.log(userData);
    const auth = async () => {
      try {
        let res = await axios.get('/auth', { params: userData });

        console.log(res);
      } catch (e) {
        console.log(e);
      }
    };
    auth();

  }

  render() {
    return (
      <a>{this.state.msg}</a>
    )
  }
}

export default Home;