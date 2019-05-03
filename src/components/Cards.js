import React, { Component } from "react";
import "./Cards.css";
import Like from "./assets/like.png";
import UnLike from "./assets/nolike.png";
import Man from "./assets/man.png";

class Cards extends Component {
  constructor() {
    super();
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render() {
    const { name, text, subtitle, href, image_url, is_liked } = this.props;

    return (
      <div className="card">
        <a href={href}>
          <div className="card-background">
            <img src={image_url} className="card-image" />
          </div>

          <div className="card-info">
            <div>
              {" "}
              <img src={Man} className="card-profile-image" />
            </div>
            <div className="card1">
              <h1>{name}</h1>
              <h2>{subtitle}</h2>
            </div>
          </div>

          <div className="card-desc">
            <p>{text}</p>
          </div>
        </a>
        <div className="like-button">
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? <img src={UnLike} /> : <img src={Like} />}
          </button>
        </div>
      </div>
    );
  }
}
export default Cards;
