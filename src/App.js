import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }
  shouldComponentUpdate() {
    return false;
  }
  componentWillReceiveProps() {
    console.log("component will receive props");
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
  }
  componentWillUpdate() {
    console.log("component will update");
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }

changeColor = () => {
  this.setState({favoritecolor: "blue"});
}
  
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

export default App;
