import React, { Component } from 'react';
import '../Assets/CSS/Contenido.css';
import NvLnk from './Boton';

class Home extends Component {

    render() {

        let boton =

            [{

                btn: 'Crear Prueba',
                url: '/crearPrueba'
            }, {
                btn: 'Consultas',
                url: '/consultas'
            }, {
                btn: 'Entrevistas',
                url: '/entrevista'
            }, {
                btn: 'Conducta',
                url: '/conducta'
            }, {
                btn: 'Calificaciones',
                url: '/calificaciones'
            }, {
                btn: 'Notificaciones',
                url: '/notificaciones'
            }]

     

        return (

            <div className='contenido'>

                <section>
                    <h1>Home Profesor</h1>

                    <div className='botones'>

                        { 
                        
                           boton.map((element, i)=> {

                                return (

                                   
                                   <NvLnk btn={element.btn} url={element.url} key={i}/>

                                )
                                
                            })
                        }

                    </div>
                </section>

            </div>

        );
    }

}

export default Home;