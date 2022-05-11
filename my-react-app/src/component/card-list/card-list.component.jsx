import { Component } from "react";
import '../card-list/card-list.styles.css'
import '../card-list/card.styles.css'
class Cardlist extends Component
{
    
    render(){
        const {people} = this.props;
        return( 
            <div className="card-list">
            { people.map( (p) => {
              const {name,id,email} = p;
              return (
                  
                  <div className="card-container" key={id}>
                    <img
                      alt={`People ${name}`}
                      src = {`https://robohash.org/${id}?set=set2&size=180x180`}
                    />
                    <h2>{name}</h2>
                    <p>{email}</p>
                  </div>
                );
              }
            )
          }
          </div>
        );
    }
} 

export default Cardlist;