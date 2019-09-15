import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './Components/Navigation'
import UsuarioList from './Components/UsuarioList'
import CreateUsuario from './Components/CreateUsuario'
import LockerList from './Components/LockerList'
import CreateLocker from './Components/CreateLocker'
import ReservacionList from './Components/ReservacionList'
import CreateReservacion from './Components/CreateReservacion'

import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Route path="/signin" exact component={CreateUsuario} />
        <Route path="/crearReservacion" exact component={CreateReservacion} />
        <Route path="/listaReservacion" exact component={ReservacionList} />
        <Route path="/listaLocker" exact component={LockerList} />
      </div>
    </Router>
  );
}

export default App;
