import React, { Component } from 'react';

import Character from './components/Character';

class App extends Component {
  constructor() {
    super()

    this.state = {
      characters: [],
    }
  }

  componentDidMount() {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then(reponse => reponse.json())
      .then(result => {
        // console.log(result)
        this.setState({ characters: result})
      })
    }
    
    render() {
      const { characters } = this.state
      console.log(this.state)
      return (
      <>
        <h1>Game of Throne</h1>
        {characters.map((character, index) => (
          <Character 
            key={index}
            characters={characters} 
            name={character.fullName} 
            title={character.title}
            image={character.imageUrl}
          />
        ))}
        
        {/* {this.state.characters.map(character => (
          <p key={character.name}>{character.name}</p>
        ))} */}
      
      </>
    );
  }
}

export default App;
