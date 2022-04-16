import React from "react";




export default class Goals extends React.Component {
    constructor() {
      super();
      





      this.state = {
        goal: [],
      };
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
              Goals:
              <textarea value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>

        );
      }
    }