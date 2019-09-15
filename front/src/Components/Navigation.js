import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <h1>Lockers-app</h1>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link to="/signin" className="nav-link">Sign In</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/crearReservacion" className="nav-link">Crear Reservacion</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/listaReservacion" className="nav-link">Reservaciones</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/listaLocker" className="nav-link">Lockers</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}