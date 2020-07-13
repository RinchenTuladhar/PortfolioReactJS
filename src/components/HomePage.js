import React from "react";
import "./../styles/homepage.scss";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <div className="first-row">
          <div className="half-section">
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHS3zbfiftL0g/profile-displayphoto-shrink_200_200/0?e=1600300800&v=beta&t=NvtSeoJhbeQ7EVEJ17zOvq9TlJaEvqydlZe42bwCUZI" />
          </div>
          <div className="half-section">
            <h1>Hello, I'm Rinchen.</h1>
            <p>Experienced in Full-Stack Web Development.</p>
            <br />
            <ul>
              <li>
                <p>
                  <i class="fa fa-envelope" aria-hidden="true"></i>{" "}
                  rinchentul@gmail.com
                </p>
              </li>
              <li>
                <p>
                  <i class="fa fa-map-marker" aria-hidden="true"></i> United
                  Kingdom, Liverpool
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
