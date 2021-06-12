import React from 'react';
import './index.css'
import {Link} from 'react-router-dom'

function main(props){
  return (
    <React.Fragment>
      <div className="main_container">
        <p className="main_text">Te damos la bienvenida a AvocadosNetwork Conf, donde podrás estar al tanto de todos los temas que tomamos en la mesa redonda de las decisiones para que podamos abrir debate de temas con relación a la programación y el diseño.</p>
        <Link  to="/badge/new"><p className="mainbtn">¡Inscribete!</p></Link>
      </div>
      <div className="main_badg">
        <p className="main_badg_text">Aquí podrás estar monitoreando los temas que tocamos y podrás comentar tu opinión acerca de las conferencias que se realicen.</p>
      </div>
    </React.Fragment>
  )
}
export default main;