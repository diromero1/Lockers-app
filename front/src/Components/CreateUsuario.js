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

  render() {
    console.log("Rendering");
    return (
      <div className="App">
        <h1>Comments</h1>

        <div id="comments"></div>
        <form action="/usuarios/createUsuario" method="POST">
          Cedula
          <input type="cedula" name="cedula"/>
          Codigo
          <input type="codigo" name="codigo"/>
          Nombre
          <input type="nombre" name="nombre"/>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>

      </div>);   
  }
}

export default UsuarioList;