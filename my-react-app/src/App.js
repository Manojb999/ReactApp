
import { Component } from 'react';
import './App.css';

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
    console.log(event.target.value)

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
      () => {
        console.log(this.state);
      }
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
        <input className='search-box' type='search' placeholder='Search Here'
         onChange={OnSearchChange}/>
        <header className="App-header">
          {filteredArray.map(
            (p) => {
              return (
                  <div key={p.id}>
                    <h1>Hi {p.name}</h1>
                  </div>
                );
              }
            )
          }
        </header>
      </div>
    );
  }
}

export default App;
