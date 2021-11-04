import React, { Component } from 'react';

import Character from './Character';

class List extends Component {
  render() {
  const { characters, handleClick, favorites } = this.props

    return (
      <div className="d-flex flex-wrap">
        {characters.map((character, index) => (
          <Character
            key={index}
            index={index}
            name={character.fullName} 
            title={character.title}
            image={character.imageUrl}
            handleClick={handleClick}
            isFavorite={favorites.find(favorite => favorite.fullName === character.fullName)}
          />
        ))}
      </div>
    );
  }
}

export default List;