import React, { Component } from 'react';
import '../Assets/CSS/Header.css';
import logo from '../Assets/Imagenes/escudo.svg';
import {NavLink} from 'react-router-dom';
class Header extends Component {

    render() {

        return (
            <div id="header">
                
                <header className="Center">
                    <div id="logo">
                    <img src={logo} className="app-logo" alt="Logotipo"/>
                    <span id='brand'>Nombre Colegio</span>
                    </div>

                    <nav id="menu">
                    <ul>
                        <li> <NavLink to="/home">Home</NavLink></li>
                        <li> <NavLink to="#">boton1</NavLink></li>
                        <li> <NavLink to="#">boton2</NavLink></li>
                        <li> <NavLink to="/login">Login</NavLink></li>
                    </ul>
                    </nav>
                    <div className="clearfix"></div>
                </header>
            </div>
        );
    }

}

export default Header;
