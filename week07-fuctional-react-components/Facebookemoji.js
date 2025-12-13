import './App.css';
import React from 'react';
import Like from './Like.png';
import Love from './Love.png';
import happy from './happy.png';

class FacebookEmojiCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { number: 0 };
    this.increment = this.increment.bind(this);

    // determine which image to show
    if (this.props.type === "Love") this.pic = Love;
    else if (this.props.type === "Like") this.pic = Like;
    else if (this.props.type === "happy") this.pic = happy;
  }

  increment() {
    this.setState(prevState => ({
      number: prevState.number + 1
    }));
  }

  render() {
    return (
      <div>
        <h5>It is {this.state.number} {this.props.type}.</h5>

        <button onClick={this.increment}>
          <img src={this.pic} alt={this.props.type} style={{ width: "40px" }} />
          <b>{this.state.number}</b>
        </button>
      </div>
    );
  }
}

export default FacebookEmojiCounter;
