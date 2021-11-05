import React, { Component } from 'react';

import Character from './Character';

class List extends Component {
  render() {
  const { 
    characters, 
    handleFClick, 
    handleUClick, 
    favorites } = this.props

    return (
      <div className="d-flex flex-wrap">
        {characters.map((character, index) => (
          <Character
            key={index}
            index={index}
            name={character.fullName} 
            title={character.title}
            image={character.imageUrl}
            handleFClick={handleFClick}
            handleUClick={handleUClick}
            isFavorite={favorites.find(favorite => favorite.fullName === character.fullName)}
          />
        ))}
      </div>
    );
  }
}

export default List;