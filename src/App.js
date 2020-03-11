import React, { Component } from "react";
import Navbar from "./components/Navbar";
import pictures from "./pictures.json";
import GameContainer from "./components/GameContainer";

class App extends Component {
  state = {
    pictures
  };

  render() {
    return (
      <div>
        <Navbar />
        <GameContainer />
      </div>
    );
  }

}

export default App;
