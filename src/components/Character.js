import React from 'react'

class Character extends React.Component {
	render() {
    const {  
      name, 
      title, 
      image,
      handleFClick,
      handleUClick,
      index,
      isFavorite
    } = this.props

		return(
      <div className="card m-3" style={{width: "18rem"}}>
        <div style={{height:"13rem", overflow: "hidden"}}>
          <img src={image} className="card-img-top" />
        </div>
			  <div className="card-body text-center">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">{title}</p>
          {isFavorite ? (
            <button className="btn btn-outline-secondary" onClick={() => handleUClick(index)}>Remove from Favorites</button>
          ) : (
            <button className="btn btn-outline-danger mb-2" onClick={() => handleFClick(index)}>Add to Favorites</button>
          )}
        </div>
      </div>
		)
	}
}

export default Character