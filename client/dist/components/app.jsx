import React from 'react';
import $ from 'jquery';
import Search from './search.jsx';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      pokemon: ''
    }
  }

  handleOnChange(event) {
    this.setState({pokemon: event.target.value});
  }

  handleSearchClick(event){
    event.preventDefault();
    fetch('/search', {
      method: 'POST',
      body: JSON.stringify({pokemon: this.state.pokemon}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).catch(error => console.error('Error:', error))
    .then(response => this.handleDatabaseGet(this.state.pokemon));
  }

  handleDatabaseGet(pokemonName) {
  //   fetch('/search?pokemon=' + pokemonName, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }).then(data => console.log(data.json()))
  //   .catch(error => console.error('Error:', error))
  //   .then(response => console.log(response));
  // }
    $.get('/search?pokemon=' + pokemonName, (data) => {
      console.log(data);
    });
  }

  render() {
    return (
      <Search onClick={this.handleSearchClick.bind(this)} onChange={this.handleOnChange.bind(this)}/>
    );
  }
}

export default App