import React, { Component } from 'react';
import '../Assets/CSS/Calendario.css';
import Calendar from'react-calendar';


class Calendario extends Component {

    render() {

        return (
            
               <div id='calendario'>
                <aside>

                Calendario
<Calendar>S</Calendar>
                   

                </aside>
                <div className='clearfix'/>
                </div>
        );
    }

}

export default Calendario;