
import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor()
  {
    super();
    this.state = {
      people : []
    };
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

  render(){
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='Search Here'
         onChange={(event) => {
           console.log(event.target.value)

           const filteredArray = this.state.people.filter(
             (person) => {return person.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())}
           );

           this.setState(
             () => {return {people : filteredArray}}
           );

         }}/>
        <header className="App-header">
          {this.state.people.map(
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
