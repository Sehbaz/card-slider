import React, { Component } from "react";
import Cards from "./Cards";

class Slider extends Component {
  render() {
    const { data } = this.props;
    var size = 3;
    var i = data.cards.length;
    console.log(i);

    return (
      <div>
        <div className="main">
          {data.cards.slice(0, 3).map((data, i) => (
            <div>
              {console.log(data.id)}
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
export default Slider;
