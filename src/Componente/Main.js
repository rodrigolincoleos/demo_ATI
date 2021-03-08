



import React, { Component } from 'react';
import '../Assets/CSS/Main.css';
import Home from './Home';
import Calendario from '../Componente/Calendario';

class Main extends Component {

    render() {

        return (

            <div id='main'>
                
                <Home />
                <Calendario />
            </div>
        );
    }

}

export default Main;