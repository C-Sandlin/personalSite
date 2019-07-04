import React, { Component } from "react";
import { withRouter } from 'react-router'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import TopNav from "./TopNav"
import SideNav from "./SideNav"
import Main from "./Main"
import AboutMe from "./aboutMe"

export default class App extends Component {

  render() {
    return (
      <>
        <Route exact path="/" render={(props) => {
          return (
            <>
              <TopNav />
              {/* <SideNav /> */}
              <Main />
            </>)
        }}
        />
        <Route exact path="/aboutMe" render={(props) => {
          return (
            <>
              <TopNav />
              {/* <SideNav /> */}
              <AboutMe />
            </>)
        }}
        />
      </>
    )
  }
}

