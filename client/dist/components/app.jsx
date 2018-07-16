import React from 'react';
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
    .then(response => console.log('Success:', response));
  }

  render() {
    return (
      <Search onClick={this.handleSearchClick.bind(this)} onChange={this.handleOnChange.bind(this)}/>
    );
  }
}

export default App