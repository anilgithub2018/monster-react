import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/SearchBox/searchBox.component';
import './App.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '' 
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json();
    })
    .then(users => {
      this.setState( { monsters : users });
    }
    );
  }

  //arrow function defines the context for this
  handleChange = e => {
    this.setState( { searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className="App">
      <h1> Monsters </h1>
      <SearchBox placeholder='Search' handleChange={this.handleChange}/>
      <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
