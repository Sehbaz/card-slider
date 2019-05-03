import React, { Component } from "react";
import Cards from "../components/Cards";
import "./App.css";
import data from "../components/data/db.json";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: data.cards,
      property: data.cards[0],
      property1: data.cards[1],
      property2: data.cards[2]
    };
  }

  nextProperty = () => {
    const newIndex = this.state.property.index + 3;
    const newIndex2 = this.state.property1.index + 3;
    const newIndex3 = this.state.property2.index + 3;
    console.log(newIndex, newIndex2, newIndex3);
    this.setState({
      property: data.cards[newIndex],
      property2: data.cards[newIndex2],
      property3: data.cards[newIndex3]
    });
  };

  prevProperty = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: data.cards[newIndex]
    });
    console.log(newIndex);
  };

  render() {
    const { property, property1, property2 } = this.state;

    return (
      <div className="App">
        <button
          onClick={() => this.nextProperty()}
          disabled={property.index === data.cards.length - 1}
        >
          Next
        </button>
        <button
          onClick={() => this.prevProperty()}
          disabled={property.index === 0}
        >
          Prev
        </button>

        <div className="page">
          <Cards
            key={2}
            name={property.title}
            subtitle={property.subtitle}
            text={property.text}
            image_url={property.image_url}
            href={property.href}
            is_liked={property.is_liked}
          />
          <Cards
            key={1}
            name={property1.title}
            subtitle={property1.subtitle}
            text={property1.text}
            image_url={property1.image_url}
            href={property1.href}
            is_liked={property1.is_liked}
          />
          <Cards
            key={3}
            name={property2.title}
            subtitle={property2.subtitle}
            text={property2.text}
            image_url={property2.image_url}
            href={property2.href}
            is_liked={property2.is_liked}
          />
        </div>
      </div>
    );
  }
}
export default App;
