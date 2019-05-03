import React, { Component } from "react";
import "./App.css";
import Cards from "../components/Cards";
import data from "../components/data/db.json";
import left from "../components/assets/left.png";
import right from "../components/assets/right.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: data.cards,
      start: 0,
      finish: 3,
      property: data.cards[0]
    };
  }

  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    this.setState({
      property: data.cards[newIndex + 3],
      start: this.state.finish,
      finish: this.state.finish + 3
    });
  };

  prevProperty = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: data.cards[newIndex - 3],
      finish: this.state.start,
      start: this.state.start - 3
    });
  };

  render() {
    const { property, start, finish } = this.state;

    return (
      <div className="page">
        <div className="page-wrapper">
          {data.cards.slice(start, finish).map((property, i) => (
            <div>
              <Cards
                key={i}
                name={property.title}
                subtitle={property.subtitle}
                text={property.text}
                image_url={property.image_url}
                href={property.href}
                is_liked={property.is_liked}
              />
            </div>
          ))}
        </div>
        <div className="nav">
          <button
            onClick={() => this.prevProperty()}
            disabled={property.index === 0}
          >
            <img className="btn-img" src={left} />
          </button>
          <button
            onClick={() => this.nextProperty()}
            disabled={property.index === data.cards.length - 1}
          >
            <img className="btn-img" src={right} />
          </button>
        </div>
      </div>
    );
  }
}
export default App;
