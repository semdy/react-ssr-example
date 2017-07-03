import React from 'react';
import Transmit from 'react-transmit';
import axios from 'axios';

class Hello extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    if (this.props.posts) {
      return (
        <div>
          {this.props.posts.data.map((post, i) => {
            return (
              <div key={i}>{post.title}</div>
            )
          })}
        </div>
      )
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default Transmit.createContainer(Hello, {
  // These must be set or else it would fail to render
  initialVariables: {},
  // Each fragment will be resolved into a prop
  fragments: {
    posts() {
      return axios.get("http://localhost:8000/blog").then((resp) => resp.data);
    }
  }
});