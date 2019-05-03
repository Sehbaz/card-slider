import React, { Component } from "react";
import Cards from "../components/Cards";
import "./App.css";
import data from "../components/data/db.json";
import left from "../components/assets/left.png";
import right from "../components/assets/right.png";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: data.cards,
      s: 0,
      f: 3,
      property: data.cards[0]
    };
  }

  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    console.log(this.state.s, this.state.f);
    this.setState({
      property: data.cards[newIndex + 3],
      s: this.state.f,
      f: this.state.f + 3
    });
  };

  prevProperty = () => {
    const newIndex = this.state.property.index - 1;
    console.log(this.state.s, this.state.f);
    this.setState({
      property: data.cards[newIndex - 3],
      f: this.state.s,
      s: this.state.s - 3
    });
  };

  render() {
    const { property, s, f } = this.state;

    return (
      <div className="page">
        <div className="page-wrapper">
          {data.cards.slice(s, f).map((property, i) => (
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
