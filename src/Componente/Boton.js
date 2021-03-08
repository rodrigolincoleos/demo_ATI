import React, { Component } from 'react';
import '../Assets/CSS/Boton.css';
import { NavLink } from 'react-router-dom';


class NvLnk extends Component {

    render() {

        


        return (

            <div>

                <NavLink className='btn2'  to={this.props.url} >{this.props.btn} </NavLink>

            </div>
        );
    }


}

export default NvLnk;
