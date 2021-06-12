import React from 'react';

import './form1.css'

class form1 extends React.Component{
  handleClick = (e)=>{
    console.log('le pico')
  }
  // handleSubmit= (e)=>{
  //   e.preventDefault();
  //   console.log('Se envio el formularios')
  //   console.log(this.state)
  // }

  render(){
    return (
     <div className="Form-container">
      <form onSubmit={this.props.onSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">
            <span>Nombre:</span>
            <input 
            onChange={this.props.onChange} 
            className="form-control" 
            name="nombre" id="nombre" 
            type="text" 
            value={this.props.formValues.nombre}/>
          </label>
          <label htmlFor="apellido">
            <span>Apellido:</span>
            <input onChange={this.props.onChange} className="form-control" id="apellido" name="apellido" type="text" value={this.props.formValues.apellido} />
          </label>
          <label htmlFor="email">
            <span>E-mail:</span>
            <input onChange={this.props.onChange} className="form-control" id="email" name="email" type="email" value={this.props.formValues.email} />
          </label>
          <label htmlFor="carrera">
            <span>Carrera:</span>
            <input onChange={this.props.onChange} className="form-control" id="carrera" name="carrera" type="text" value={this.props.formValues.carrera}/>
          </label>
          <label htmlFor="twitter">
            <span>Twitter:</span>
            <input onChange={this.props.onChange} className="form-control" id="twitter" name="twitter" type="text"  value={this.props.formValues.twitter}/>
          </label>
          <button onClick={this.handleClick} className="btn btn-primary">Registrar</button>

          {this.props.error && (
            <p>{this.props.error.message}</p>
          )}
        </div>
      </form>
     </div>
    )
  }
}
export default form1;