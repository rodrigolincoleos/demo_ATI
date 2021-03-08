import React, { Component } from 'react';

import '../Assets/CSS/Buscar.css';

class Slider extends Component {

    render() {

        return (

            <div id="buscar" >


                <div id='buscarinput'>
                    <form>
                        <input type='text' name='search' />
                        <input type='submit' value='ir' id='btn-submit' />
                    </form>
                    <p>encuentra lo que buscas</p>
                </div>
                <div id="filter">

                    <label for="filto 1">Flitro 1: </label>

                    <select name="cars" id="cars">
                        
                        <option value="none">none</option>
                        <option value="nivel">Nivel</option>
                        <option value="alumno">alumno</option>
                        <option value="profesor">profesor</option>
                        <option value="cargo">cargo</option>
                        <option value="apoderado">apoderado</option>
                    </select>



                    

                </div>
            </div>

        );
    }

}

export default Slider;