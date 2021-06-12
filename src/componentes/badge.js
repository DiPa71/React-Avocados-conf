import React from 'react';
import './style.css';

class badge extends React.Component{
render(){
    return <div>
      <div className="badge-header">
        <h3>Tus datos</h3>
      </div>
      <div className="badge-contenedora_nombre">
        <img className="badge-contenedora_img" src={this.props.avatar} alt="Avatar"/>
        <h1>{this.props.nombre} <br/> {this.props.apellido}</h1>
      </div>
      <div className="badge-contenedorb">
        <p>
        {this.props.carrera}
        </p>
        <p>
          @{this.props.twitter}
        </p>
      </div>
      <div className="badge-footer">
        <p>#AvocadosConf.com</p>
      </div>
    </div>;
  }
}
export default badge;