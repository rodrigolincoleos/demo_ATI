import React, { Component } from 'react';
import '../Assets/CSS/CrearPrueba.css';
import PopUp from './Modal';



class CrearPrueba extends Component {

    render() {

        let Ingresar  =  [{

            btn: 'Nivel',
            onClick: 'mostrarnivel'
        }, {
            btn: 'Asignatura',
            onClick: 'mostrarasignatura'
        }, {
            btn: 'Materia',
            onClick: 'mostrarmateria'
        }, {
            btn: 'Rendicion',
            onClick: 'mostrarrendicion'
        }, {
            btn: 'Creacion',
            onClick: 'mostrarcreacion'
        }]

        let Preguntas  =  [{

            btn: 'Verdadero o falso',
            onClick: 'mostrvof'
        }, {
            btn: 'Alternativas',
            onClick: 'mostraralternativas'
        }, {
            btn: 'Desarrollo',
            onClick: 'mostrardesarrollo'
        }, {
            btn: 'Relacion',
            onClick: 'mostrarrelacion'
        }]

        let Escala  =  [{

            btn: 'Nota Maxima',
            onClick: 'mostranotamax'
        }, {
            btn: 'Nota Minima',
            onClick: 'mostranotamin'
        }, {
            btn: 'Nota Aprobacion',
            onClick: 'mostranotaaprov'
        }, {
            btn: 'Exigencia',
            onClick: 'mostrarexigencia'
        }, {
            btn: 'Puntaje',
            onClick: 'mostrarpuntaje'
        }, {
            btn: 'Incremento',
            onClick: 'mostrarincremento'
        }]


        return (

            

            <div id='crearPruebas'>

                <div>
                <nav id="ingresar" className='modulosprueba'>
                { 
                        
                        Ingresar.map((element, i)=> {

                            
                            console.log(element.btn + " " + element.onClick);

                            return (
                                <PopUp key={i} btn={element.btn} onclick={element.onClick}/>
                                

                             )
                             
                         })
                     }

                    </nav>
                </div>
                
                <div>
                <nav id="preguntas" className='modulosprueba'>

                { 
                        
                        Preguntas.map((element, i)=> {

                            
                            console.log(element.btn + " " + element.onClick);

                            return (
                                <PopUp key={i} btn={element.btn} onclick={element.onClick}/>
                                

                             )
                             
                         })
                     }

                    </nav>
                </div>
                
                <div>
                <nav id="escala" className='modulosprueba'>
                { 
                        
                        Escala.map((element, i)=> {

                            
                            console.log(element.btn + " " + element.onClick);

                            return (
                                <PopUp key={i} btn={element.btn} onclick={element.onClick}/>
                                

                             )
                             
                         })
                     }
                    </nav>
                </div>
                <div className='clearfix' />
            </div>
        );
    }

}

export default CrearPrueba;