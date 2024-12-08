import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
// import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";

export default class Main extends Component {
  render() {
    return (
      <BrowserRouter basename="/Islem-Maiti_Portfolio"> {/* Corrected basename */}
        <Switch>
          <Route
            path="/"
            exact
            render={(props) =>
              settings.isSplash ? (
                <Splash {...props} theme={this.props.theme} />
              ) : (
                <Home {...props} theme={this.props.theme} />
              )
            }
          />
          <Route
            path="/Islem-Maiti_Portfolio/home" // Updated path
            render={(props) => <Home {...props} theme={this.props.theme} />}
          />
          <Route
            path="/Islem-Maiti_Portfolio/experience" // Updated path
            exact
            render={(props) => (
              <Experience {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/Islem-Maiti_Portfolio/education" // Updated path
            render={(props) => (
              <Education {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/Islem-Maiti_Portfolio/contact" // Updated path
            render={(props) => <Contact {...props} theme={this.props.theme} />}
          />
          {/* <Route
            path="/Islem-Maiti_Portfolio/opensource" // Updated path
            render={(props) => (
              <Opensource {...props} theme={this.props.theme} />
            )}
          /> */}

          {settings.isSplash && (
            <Route
              path="/Islem-Maiti_Portfolio/splash" // Updated path
              render={(props) => <Splash {...props} theme={this.props.theme} />}
            />
          )}

          <Route
            path="/Islem-Maiti_Portfolio/projects" // Updated path
            render={(props) => <Projects {...props} theme={this.props.theme} />}
          />
          <Route
            path="*"
            render={(props) => <Error404 {...props} theme={this.props.theme} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
