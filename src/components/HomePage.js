import React from "react";
import "./../styles/homepage.scss";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <div className="first-row">
          <div className="half-section">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQHS3zbfiftL0g/profile-displayphoto-shrink_200_200/0?e=1600300800&v=beta&t=NvtSeoJhbeQ7EVEJ17zOvq9TlJaEvqydlZe42bwCUZI"
              className="center"
            />
          </div>
          <div className="half-section">
            <h1>Hello, I'm Rinchen</h1>
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
        <div className="second-row">
          <div className="half-section">
            <h1>About Me</h1>
            <p>
              Hello I'm Rinchen. I am based in Liverpool and have 2 years
              experience in Web Development.
            </p>
            <br />
            <ul className="tags">
              <li>
                <a href="#" className="tag">
                  HTML
                </a>
              </li>
              <li>
                <a href="#" className="tag">
                  CSS
                </a>
              </li>
              <li>
                <a href="#" className="tag">
                  SASS
                </a>
              </li>
              <li>
                <a href="#" className="tag">
                  JavaScript
                </a>
              </li>
              <li>
                <a href="#" className="tag">
                  EmberJS
                </a>
              </li>
              <li>
                <a href="#" className="tag">
                  Ruby on Rails
                </a>
              </li>
              <li>
                <a href="#" className="tag">
                  PHP
                </a>
              </li>
            </ul>
          </div>
          <div className="half-section">
            <img src={process.env.PUBLIC_URL + "/images/macbook.jpg"} />
          </div>
        </div>
      </div>
    );
  }
}
