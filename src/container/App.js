import React, { Component } from "react";
import CardList from "../components/CardList";
import "./App.css";
import PostData from "../components/data/db.json";

import LeftArrow from "../components/LeftArrow";
import RightArrow from "../components/RightArrow";
class App extends Component {
  render() {
    return (
      <div className="main-body">
        <CardList data={PostData} />
        <LeftArrow />
        <RightArrow />
      </div>
    );
  }
}
export default App;
