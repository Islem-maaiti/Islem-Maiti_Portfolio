import React, { Component } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
import LoaderLogo from "../../components/Loader/LoaderLogo.js";

function AnimatedSplash(props) {
  return (
    <div className={`logo_wrapper ${props.fadeOut ? "fade-out" : ""}`}>
      <div className="screen" style={{ backgroundColor: props.theme.splashBg }}>
        <LoaderLogo id="logo" theme={props.theme} />
      </div>
    </div>
  );
}

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      fadeOut: false,
    };
  }

  componentDidMount() {
    // Déclenche le fondu après 3 secondes
    setTimeout(() => this.setState({ fadeOut: true }), 3000); // Délai réduit à 3 secondes
    this.id = setTimeout(() => this.setState({ redirect: true }), 3000); // Redirection après 4 secondes
  }

  componentWillUnmount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/home" />
    ) : (
      <AnimatedSplash theme={this.props.theme} fadeOut={this.state.fadeOut} />
    );
  }
}

export default Splash;
