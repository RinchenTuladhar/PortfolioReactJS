import React from "react";
import "./../styles/panel.scss";

export default class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="panel">
        <div className="panel__title">
          <h1>{this.props.title}</h1>
        </div>
        <div className="panel__content">
          <p>{this.props.description}</p>
          {this.props.url && <a href={this.props.url}>View</a>}
        </div>
      </div>
    );
  }
}
