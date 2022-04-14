import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class Classes extends React.Component {
    constructor() {
      super();
  
      this.state = {
        classes: [],
      };
    }

    componentDidMount() {
        axios
          .get(`http://localhost:4000/api/classes`)
          .then((res) => {
            const classes = res.data;
            this.setState({ classes: classes });
          })
          .catch((err) => console.log(err));
      }

      render() {
        return (
          <label>
              Subject, Teacher, Room#
              <select>
            {this.state.classes.map((classes, index) => {
              return <option id="class-select">{classes.name}, {classes.teacher}, {classes.room}</option>;
              
            })}
          </select>
          </label>
        );
      }
    }