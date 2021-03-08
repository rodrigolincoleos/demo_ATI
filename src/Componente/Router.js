import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CrearPrueba from './CrearPrueba';
import Main from './Main';
import Header from './Header';
import Slider from './Slider';
import Consultas from './Consultas';
import Entrevista from './Entrevista';
import Log from './Log';

class Router extends Component {

    render() {
        return (

            <BrowserRouter >

                <Header/>
                <Slider />
                <Switch id='main'>

                    <Route exact path='/crearPrueba' component={CrearPrueba} />
                    <Route exact path='/home' component={Main} />
                    <Route exact path='/consultas' component={Consultas} />
                    <Route exact path='/entrevista' component={Entrevista} />
                    <Route exact path='/login' component={Log} />

                </Switch>

            </BrowserRouter>

        );
    }
}

export default Router;