import React, {Component} from "react";
import "../App.css";
import Select from 'react-select'

import Comment from "../Comment.js";

class UsuarioList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lockers: []
    };
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

  /*renderComments() {
    return this.state.comments.map(
      (c, i) => { return <Comment key={i++} comment={c}>{c.text}</Comment> }
    );
  }*/

  componentDidMount(){
    fetch ('/lockers/getLockers').
    then(res => res.json()).
    then(lockers => this.setState({
      lockers: lockers
    }));
    this.reloadData();
  }

  render() {
    console.log("Rendering");
    return (
      <div className="App">
        <h1>Lockers disponibles</h1>

        <div id = "listaEdificios">
          <h4>Selecciona tu locker</h4>
          <Select id="edificios" options = {
            this.state.lockers.map(l => {return {value: l.numero, label: l.numero}})}/>

        </div>

        <div id="comments"></div>
        <form action="/api/createMessage" method="POST">
          <input type="text" name="text"/>
        </form>
        <h2>Make a change in the world!</h2>
      </div>);
  }
}

export default UsuarioList;