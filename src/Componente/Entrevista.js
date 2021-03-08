import React, { Component } from 'react';
import '../Assets/CSS/Entrevista.css';


class Entrevista extends Component {

    render() {

        return (

            <div id='entrevista'>

                <div id="crearentrevista">

                    <h2>
                        Crear Entrevista
                    </h2>


                    <ul>
                        <li>Tema:

                            <select name='temas'>

                                <option value="academico">Academico</option>
                                <option value="conductual">Conductual</option>
                                <option value="convivencia">Convivencia</option>
                                <option value="otro">Otro</option>

                            </select>

                        </li>
                        <li>Relevancia:

                        <select name='temas'>

                                <option value="alta">Alta</option>
                                <option value="media">Media</option>
                                <option value="baja">baja</option>

                            </select>

                        </li>

                        <li>Fecha:

                            <input type='date'/>

                        </li>
                        <li>Asistentes:

                        <input type='text' value='nombre'/>
                        <input type='text'value='cargo'/>

                        </li>
                        <li>Titulo:

                        <input type='text' value='Titulo'/>

                        </li>
                        <li>Recordatorio:

                        <input type='date'/>
                        <input type='text' value='Contenido'/>

                        </li>

                    </ul>

                <button id='btn'>Crear</button>


                </div>

                <div id='notificacionentrevista'>

                    <h2>
                        Notificaciones
                    </h2>

                </div>

                

            </div>



        )

    }


}
export default Entrevista;