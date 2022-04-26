import React, { Component } from "react";
import Particles from "react-tsparticles";
import { Main } from "tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";

class Header extends Component {

  // customInit(main: Main) {
  //   // this adds the preset to tsParticles, you can safely use the
  //   loadLinksPreset(main);
  // }

  render() {
    if (!this.props.data) return null;

    const website = this.props.data.website;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    const options = {
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse"
          },
          resize: true
        },
      },
      preset: "links",
      density_auto: "true"
    };

    return (
      <header id="home">
        <Particles className="tsparticles" options={options} init={this.customInit} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" class="a umami--click--home" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" class="a umami--click--about" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" class="a umami--click--contact" href="#contact">
                Contact
              </a>
            </li>

            <li>
              <a className="smoothscroll" className="a umami--click--jobs" href="https://jobs.nomaze.de">
                Jobs
              </a>
            </li>

          </ul>
        </nav>

        <div className="row banner" >
          <div className="banner-text">
              <img className="hero-logo" src={process.env.PUBLIC_URL + "/images/logo.svg"} alt="Nomaze Logo" />
              <h1 className="responsive-headline">{name}</h1>
              <h3>{description}</h3>
            <hr />
              <ul className="social">
                <a href={website} class="a umami--click--demo" className="button btn project-btn">
                  <i className="fa fa-book"></i>Live Demo
                </a>
              </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>

      </header>
    );
  }
}

export default Header;
