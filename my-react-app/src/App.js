
import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
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
