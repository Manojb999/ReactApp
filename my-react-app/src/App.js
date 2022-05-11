
import { Component } from 'react';
import './App.css';
import Cardlist from './component/card-list/card-list.component';
import SearchBox from './component/search-box/search-box.component';
class App extends Component {
  constructor()
  {
    super();
    this.state = {
      people : [],
      searchField : ''
    };
    
  }

  OnSearchChange= (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(
      () => { return {searchField}}
    );
  }

  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then((users) =>this.setState(
      () => {
        return {people : users}
      },
    )
    );
  }

  render() {
    const {people,searchField} = this.state;
    const {OnSearchChange} = this;
    const filteredArray = people.filter(
      (person) => {
        return person.name.toLocaleLowerCase().includes(searchField)}
    );
    return (
      <div className="App">    
        <SearchBox OnSearchChange = {OnSearchChange} 
          placeholder = {'Search People'}
          className = {'Search-Box'}
        />
        <Cardlist people ={filteredArray}/>
      </div>
    );
  }
}

export default App;
