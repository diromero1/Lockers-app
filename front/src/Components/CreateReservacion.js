import React, {Component} from "react";
import "../App.css";

import Comment from "../Comment.js";

class UsuarioList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [
      ]
    };
  }

  componentDidMount() {
    this.reloadData();
  }

  reloadData() {
    fetch("/usuarios/getUsuarios")
      .then( res => res.json())
      .then( data => {
        console.log("got data!", data);
        this.setState({
          comments: data
        })
      });    
  }

  renderComments() {
    return this.state.comments.map(
      (c, i) => { return <Comment key={i++} comment={c}>{c.text}</Comment> }
    );
  }

  render() {
    console.log("Rendering");
    return (
      <div className="App">
        <h1>Comments</h1>

        {this.renderComments()}

        <div id="comments"></div>
        <form action="/api/createMessage" method="POST">
          <input type="text" name="text"/>
        </form>
        <h2>Make a change in the world!</h2>
        <div>Made by Ivan</div>
      </div>);   
  }
}

export default UsuarioList;