import React from 'react'

class Character extends React.Component {
	render() {
    const { characters, name, title, image } = this.props

		return(
      <div>
        <img src={image} />
			  <p>{name}</p>
        <p>{title}</p>
      </div>
		)
	}
}

export default Character