import React from "react";
import './textarea.css'
 


export default class TextArea extends React.Component {
    constructor() {
      super();
  
      this.state = {
        text: [],
      };
    }


    render() {
        return (
            <form className="notes" onSubmit={this.handleSubmit}>
          
            <label>
              <h1 className="note">Notes:</h1>
              <textarea value={this.state.value} onChange={this.handleChange} />
            </label>        
          </form>

        );
      }
    }


   