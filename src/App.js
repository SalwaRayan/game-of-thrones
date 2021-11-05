import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import Continents from './components/Continents';
import List from './components/List';
import Button from './components/Button';

class App extends Component {
  constructor() {
    super()

    this.state = {
      activeTab: "Characters",
      characters: [],
      favorites: [],
    }

    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleFavoriteClick = this.handleFavoriteClick.bind(this)
    this.handleUnfavoriteClick = this.handleUnfavoriteClick.bind(this)
  }

  handleButtonClick(tab) {
    this.setState({ activeTab: tab })
  }

  handleFavoriteClick(index) {
    const character = this.state.characters[index]
    this.setState({ favorites: [character, ...this.state.favorites]})
  }

  handleUnfavoriteClick(index) {
    const newFavoriteList = this.state.favorites

    newFavoriteList.splice(index, 1)
    this.setState({ favorites: newFavoriteList })
  }

  componentDidMount() {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then(reponse => reponse.json())
      .then(result => {
        // console.log(result)
        this.setState({ characters: result})
      })
      .catch((error) => {
        console.log(error)
      })
  }
    
    render() {
      const { characters, activeTab, favorites, } = this.state
     
      return (

        <div className="container">
          <h1>Game of Throne</h1>
          <Button 
            text="Characters"
            isSelected={activeTab === "Characters"}
            handleClick={this.handleButtonClick}
          />
          <Button 
            text="Favorites"
            isSelected={activeTab === "Favorites"}
            handleClick={this.handleButtonClick}
          />
          <Button 
            text="Continents"
            isSelected={activeTab === "Continents"}
            handleClick={this.handleButtonClick}
          />
          {activeTab === "Characters" && <List favorites={favorites} characters={characters} handleClick={this.handleFavoriteClick}/>}
          {activeTab === "Favorites" && <List favorites={favorites} characters={favorites} handleClick={this.handleUnfavoriteClick}/>}
          {activeTab === "Continents" && <Continents />}
        </div>
    );
  }
}

export default App;
