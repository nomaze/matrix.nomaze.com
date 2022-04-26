import React, { Component } from "react";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;

    return (
      <section id="about" >
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={process.env.PUBLIC_URL + "/images/jp.png"}
                alt="JP"
              />
              <img
                  className="profile-pic"
                  src={process.env.PUBLIC_URL + "/images/finn.png"}
                  alt="Finn"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About {name}</h2>
              <br></br>
              <p>Sep-Oct 2021: Started the project at Think.Make.Start</p>
              <p>Oct-Feb 2022: Business Development in UnternehmerTUM Academy of Innovators</p>
              <p>March-May 2022: UnternehmerTUM XPLORE</p>
            </div>
          </div>
      </section>
    );
  }
}

export default About;
