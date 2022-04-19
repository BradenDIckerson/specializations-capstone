import React from "react";
import axios from "axios";
import './links.css';

export default class Links extends React.Component {
  constructor() {
    super();

    this.state = {
      links: [],
    };
  } 

  componentDidMount() {
    axios
      .get(`http://localhost:4000/api/links`)
      .then((res) => {
        const links = res.data;
        this.setState({ links: links });
      })
      .catch((err) => console.log(err));
  }


  render() {
    return (
     <label className="links"> 
       Helpful Links
       <select>
        {this.state.links.map((link, index) => {          
          return <option id="link-select">{link.name}, {link.link}</option>;
          
        })}
      </select>
      </label>
    );
  }
}
