import React from "react";




export default class TextArea extends React.Component {
    constructor() {
      super();
  
      this.state = {
        text: [],
      };
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
              Notes:
              <textarea value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>

        );
      }
    }


   