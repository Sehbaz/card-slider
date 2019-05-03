import React, { Component } from "react";
import Cards from "./Cards";
import "./CardList.css";

class CardList extends Component {
  render() {
    const { data } = this.props;
    var size = 3;

    return (
      <div>
        <div className="main">
          {data.cards.slice(0, size).map((data, i) => (
            <div>
              <Cards
                key={i}
                name={data.title}
                subtitle={data.subtitle}
                text={data.text}
                image_url={data.image_url}
                href={data.href}
                is_liked={data.is_liked}
              />
            </div>
          ))}
        </div>
        <div />
      </div>
    );
  }
}

export default CardList;
