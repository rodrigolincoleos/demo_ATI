import React, { Component } from 'react';
import '../Assets/CSS/Boton.css';
import { Button, FromGroup, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'

class PopUp extends Component {


    state = { abierto: false }


    abrirModal = () => { this.setState({ abierto: !this.state.abierto }) }
    guardar = () => { this.setState({ abierto: !this.state.abierto }) }



    render() {

        return (

            <>
                <div>
                    <div>

                        <Button id='btn2' onClick={this.abrirModal}>{this.props.btn}</Button>

                    </div>
                </div>

                <Modal isOpen={this.state.abierto}>
                    <ModalHeader>
                    {this.props.btn}
                    </ModalHeader>

                    <ModalBody>
                        body
                    </ModalBody>

                    <ModalFooter>
                        
                        <Button id='btn2' onClick={this.guardar}>Guardar</Button>
                        <Button id='btn2' onClick={this.abrirModal}>cerrar</Button>
                    </ModalFooter>


                </Modal>
            </>
        )
    }

}

export default PopUp;
