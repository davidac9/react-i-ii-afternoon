import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data'

class App extends Component {
  constructor() {
    super()
    this.state = {
      id: 0
    }
    this.handleIdPlus = this.handleIdPlus.bind(this)
    this.handleIdMinus = this.handleIdMinus.bind(this)
  }
  handleIdPlus() {
    if (this.state.id < 24) {
    this.setState({
      id: ++this.state.id
      
    })
  }
  }
  handleIdMinus() {
    if (this.state.id > 0) {
      this.setState({
        id: --this.state.id
      })
    }
  }
  render() {
    let cowBoy = data.map((el) => {
      return el.name
    })

    let names = cowBoy.map((el) => {
      return <div>
        <h1>
          {el.first} {el.last}
        </h1>
      </div>

    })
    let things = data.map((el, i) => {
      
      return <div className="info">
        <p> From: {el.city}, {el.country}</p>
        <p> Job Title: {el.title}</p>
        <p> Employer: {el.employer}</p>
        <h4> Favorite Movies:</h4>
        <p>1. {el.favoriteMovies[0]} </p>
        <p>2. {el.favoriteMovies[1]} </p>
        <p>3. {el.favoriteMovies[2]} </p>

        </div>
    })
    
    return (
      <div className='app'>
      <header>
        Home
      </header>
      <div className='content-container'>
        <div className='content'>
          <h4 className='id'>
          {this.state.id + 1}/25
          </h4>
          {names[this.state.id]}
          {things[this.state.id]}
        </div>
      </div>
        <div className="buttons">
          <button onClick={this.handleIdMinus}>Previous</button>
          <button onClick={this.handleIdPlus}>Next</button>
        </div>
    </div>
  );
}
}

export default App;
