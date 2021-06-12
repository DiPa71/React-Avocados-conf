import React, { Children } from 'react'

import Modal from './Modal'
const Deletebadgmodal = (props) => {
  return <Modal isOpen={props.isOpen} onClose={props.onClose}> 
  <div>
    <h1>¿Seguro que desea borrar?</h1>
    <p>Estas apunto de borrar tu insignea ¿Estas seguro de querer hacer esto?</p>

    <div>
    </div>
  </div>
      <button onClick={props.onDelete}className="btn btn-danger mr-4">Borrar</button>
      <button onClick={props.onClose} className="btn btn-primary mr-4">Cancelar</button>
  </Modal>
}

export default Deletebadgmodal;
