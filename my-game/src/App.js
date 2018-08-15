import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import characters from "./characters.json";
// import Navbar from "./components/Navbar";
import "./App.css";

//characterShuffle function goes here

// characterShuffle = () => {

// }

class App extends Component {
  state = {
    characters,
    currentScore: 0, 
    topScore: 0,
    wrongAnswer: "",
    clicked: []
  };

  handleClick = id => {
    console.log(id)
    if(this.state.clicked.indexOf(id) === -1) {
      console.log("id")
      console.log(id)
      this.handleIncrement();
      var joined = this.state.clicked.concat(id);
      this.setState({ clicked: joined })
      console.log("Clicky clicky");
    }
    console.log("Clicky clicky");
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore +1;
    this.setState({
      currentScore: newScore,
      wrongAnswer: ""
    });
    console.log("score")
    console.log(newScore)

  }

  

  render() {
    return (

      <Wrapper>
        {/* <Navbar
          title="Wizarding World Clicky Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          wrongAnswer={this.state.wrongAnswer}
        /> */}
        {/* <Title>Character List</Title> */}
        {this.state.characters.map(character => (
          <CharacterCard
            id={character.id}
            key={character.id}
            image={character.image}
            handleClick={this.handleClick}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

