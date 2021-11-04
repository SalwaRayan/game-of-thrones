import React from 'react'

class Character extends React.Component {
	render() {
    const { characters, name, title, image } = this.props

		return(
      <div className="card m-3" style={{width: "18rem"}}>
        <img src={image} className="card-img-top"/>
			  <div className="card-body text-center">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">{title}</p>
        </div>
      </div>
		)
	}
}

export default Character