import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
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
      <div className="container">
        <h1>Game of Throne</h1>
        <div className="d-flex flex-wrap">
          {characters.map((character, index) => (
            <Character 
              key={index}
              characters={characters} 
              name={character.fullName} 
              title={character.title}
              image={character.imageUrl}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
