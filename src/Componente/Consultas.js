import React, { Component } from 'react';
import '../Assets/CSS/Consultas.css';
class Consultas extends Component {

    render() {

        return (
            <div id='consultas'>

                <h1>Historial de consultas</h1>

                <div className='consultas'>



                    <div id='historial'>

                        <ul>

                            <li>Fecha de creacion</li>
                            <li>dias sin respuesta</li>
                            <li>Autor</li>
                            <li>Motivo</li>
                            <li>Status</li>

                        </ul>

                    </div>

                    <div id='leerconsulta'>
                        
                        <h2>Titulo consulta</h2>
                        <div id='parrafo'>
                        <p>

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                        </p>

                        </div>
                        <h3>responder</h3>
                        <textarea>Escribe aquí tu respuesta</textarea>

                        <button type='submit'>enviar</button>
                    </div>

                   

                </div>

            </div>
        )
    }



}
export default Consultas