import React, { Component } from "react";
import { withRouter } from 'react-router'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import TopNav from "./components/TopNav"
import SideNav from "./components/SideNav"
import Main from "./components/Main"
import AboutMe from "./components/aboutMe"

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

