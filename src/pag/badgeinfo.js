import React from 'react';
import Badge from '../componentes/badge';
import Deletebadgmodal from '../componentes/Deletebadgmodal'
import nullavatar from '../img/nah.png';
import {Link} from 'react-router-dom';

import '../styles/list.css'

const badgeinfo = (props) => {
  const badge = props.badge;
  return (
<div className="container">
      <div className="row">
        <div className="col-6">
          <Badge 
                nombre={badge.nombre || 'Nombre'}
                apellido={badge.apellido || 'Apellido'}
                twitter={badge.twitter || 'Twitter'}
                carrera={badge.carrera || 'Carrera'}
                email={badge.email || 'no_mail'}
                avatar={nullavatar}/>
        </div>
        <div className="col-6">
          <div>
          <Link className="btn btn-primary mb-4" to={`/badge/${badge.id}/edit`}>editar</Link>
          </div>
          <div>
          <button onClick={props.onOpenModal} className="btn btn-danger">eliminar</button>
          <Deletebadgmodal isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                  onDelete={props.onDelete}></Deletebadgmodal>
          </div>
        </div>
      </div>
</div>
  );
}

export default badgeinfo;
