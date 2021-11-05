import React, { Component } from 'react';

class Continents extends Component {
  constructor() {
    super()

    this.state = {
      continents: [],
    }
  }
  
  componentDidMount() {
    fetch("https://thronesapi.com/api/v2/Continents")
      .then(reponse => reponse.json())
      .then(result => {
        // console.log(result)
        this.setState({ continents: result})
      })
  }
  
  render() {
    return (
      <div className="container my-3">
        {this.state.continents.map(continent => (
          <p>{continent.name}</p>
        ))}
      </div>
    );
  }
}

export default Continents;