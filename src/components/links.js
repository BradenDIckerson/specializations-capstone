import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';

export default class Links extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://localhost:4000/api/links`)
      .then(res => {
        const links = res.data;
        this.setState({ links });
      })
  }

  // const App = () => {
  //   return (
  //     <div>
  //       Hello
  //     </div>
  //   )
  // }

  // Rea/ctDOM.render(<App />, document.querySelector("#root"))


  render() {
    return (
      <ul>
        {
          this.state.links
            .map(links =>
              <li key={links.id}>{links.name}</li>
            )
        }
      </ul>
    )
  }
}