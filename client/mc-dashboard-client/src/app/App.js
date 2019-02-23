import React, { Component, Fragment } from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from '../components/services/ScrollToTop';
import LandingPage from '../components/pages/LandingPage';
import Nav from "../components/nav/Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <ScrollToTop>
            {/* <Fragment> */}
            {/* <Nav /> */}
            <Switch>
              <Route exact path='/' component={LandingPage} />
            </Switch>
            {/* </Fragment> */}
          </ScrollToTop>
        </Router>
      </div>
    );
  }
}

export default App;
