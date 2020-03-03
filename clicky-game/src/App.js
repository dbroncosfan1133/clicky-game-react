import React, { Component } from "react";
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import pictures from "./pictures.json";

class App extends Component {
  state = {
    pictures
  };

  render() {
    return (
      <div>
        <Navbar />
        <Title />
        <Wrapper>
          {this.state.pictures.map(picture => (
            <PictureCard
              id={picture.id}
              image={picture.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }

}

export default App;
