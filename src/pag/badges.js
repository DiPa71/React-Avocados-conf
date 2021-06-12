import React from 'react'
// import Navbar from '../componentes/nav'
import Lista from '../componentes/Lista'
import '../styles/badges.css'
import { Link } from 'react-router-dom'
import api from '../api'
import PageLoading from '../componentes/PageLoading'
import Pageerror from '../componentes/Pageerror'



class Badges extends React.Component{
  state= {
    loading: true,
    error: null,
    data: undefined,
  }

  componentDidMount(){
    this.fetchData()

    this.intervalId = setInterval(this.fetchData, 50000)
}
componentWillUnmount(){
  clearInterval(this.intervalId)
}

fetchData = async () => {
  this.setState({loading: true, error: null})
  try{
    const data = await api.badges.list();
    this.setState({loading: false, data: data})
  }catch(error){
    this.setState({loading: false, error: error})
  }
}



render(){
  
  if(this.state.loading === true && !this.state.data){
    return(
      <div>
        <PageLoading />
      </div>
    );
  }
  if(this.state.error){
    return(
      <div>
        <Pageerror error={this.state.error}/>
      </div>
    )
  }
  return(
    <React.Fragment>
      <div className="Badge__container">
          <p>
            Puedes Hacer click en tu insignia para eliminar o editar tu informacion. ( La lista se actualiza cada 50 segundos )
          </p>
        <div className="Badge__buttons">
          <Link to="/badge/new" className="button-text">
            Nueva Insignia
          </Link>
        </div>
      </div>
    <div className="Badges__list">
      <div className="Badges__container">
        <Lista badges={this.state.data} />
        {this.state.loading && 'Loading...'}
      </div>
    </div>
    </React.Fragment>
    )
  }
}

export default Badges;