import { Component } from "react";

class Cardlist extends Component
{
    
    render(){
        const {people} = this.props;
        return( 
            <div>
            { people.map( (p) => {
              return (
                    <h1 key={p.id}>Hi {p.name}</h1>
                );
              }
            )
          }
          </div>
        );
    }
} 

export default Cardlist;