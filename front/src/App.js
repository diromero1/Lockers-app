import React, {Component} from "react";
import "./App.css";

class App extends Component {

  ComponentDidMount() {
    fetch("/api/getMessages")
      .then( res => console.log("Got data? ",res)); 
  }

  render() {
    console.log("Rendering");
    return (
      <div className="App">
        <h1>Comments</h1>
        <div id="comments"></div>
        <form action="/api/createMessage">
          <input type="text" id="comment"/>
        </form>
        <div>Made by Ivan</div>
      </div>);   
  }
}

export default App;
