import React from 'react';
// import NavBar from '../componentes/nav';
import Badge from '../componentes/badge';
import PageLoading from '../componentes/PageLoading';
import Formindex from '../componentes/form1'
import api from '../api'

import nullavatar from '../img/nah.png';
import '../styles/badge.css'
class badgenew extends React.Component{
  state = {
    loading: false,
    error: null,
    form: {
      nombre: '',
      apellido: '',
      email: '',
      carrera: '',
      twitter: '',
      avatar:''
    },
  };

  handleChange = (e) =>{
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
  })
}
handleSubmit= async (e) =>{
  e.preventDefault()
  this.setState({loading: true, error: null})

try{
  await api.badges.create(this.state.form);
  this.setState({loading: false})

  this.props.history.push('/badges')
}catch(error){
  this.setState({loading: false, error: error})
}
}


render(){
  if(this.state.loading){
    return <PageLoading />
  }
  return(
    <React.Fragment>
    <div className="container">
      <div className="row">
        <div className="col-6">
          <Badge 
                nombre={this.state.form.nombre || 'Nombre'}
                apellido={this.state.form.apellido || 'Apellido'}
                twitter={this.state.form.twitter || 'Twitter'}
                carrera={this.state.form.carrera || 'Carrera'}
                email={this.state.form.email || 'no_mail'}
                avatar={nullavatar}/>
          {/* https://www.gravatar.com/avatar?d=identicon */}
        </div>
        <div className="col-6">
          <h3 className="tittle">Nuevo asistente</h3>
          <Formindex onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          formValues={this.state.form}
          error={this.state.error}></Formindex>
        </div>
      </div>
    </div>

    </React.Fragment>
  );
}

}
export default badgenew;