import React from 'react'
import PageLoading from '../componentes/PageLoading'
import Pageerror from '../componentes/Pageerror'
import api from '../api'
import Badgeinfo from './badgeinfo'


class Badgeview extends React.Component{
  state={
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false
  }

  handleOpenModal= e =>{
    this.setState({modalIsOpen: true})
  }

  handleCloseModal= e =>{
    this.setState({modalIsOpen: false})
  }
  handleonDeleteBadge = async e =>{
    this.setState({loading: true, error: null})
    try{
      api.badges.remove(
        this.props.match.params.badgeId
      )
      this.props.history.push('/badges')

      this.setState({loading: true, error: null})
    }catch(err){
      this.setState({loading: false, error: err})

    }
  }
  componentDidMount(){
    this.fetchData()
  }

  fetchData = async () =>{
    this.setState({ loading: true, error: null })
    try{
      const data = await api.badges.read(
      this.props.match.params.badgeId)
      this.setState({ loading: false, data: data});
  }catch(err){
    this.setState({ loading: false, error: err })
  }
}
  render(){
    if(this.state.loading){
      return <PageLoading />
    }
    if(this.state.error){
      return <Pageerror error={this.state.error} />
    }
    return(
      <Badgeinfo onDelete={this.handleonDeleteBadge} onOpenModal={this.handleOpenModal} onCloseModal={this.handleCloseModal} modalIsOpen={this.state.modalIsOpen} badge={this.state.data}/>
    )
  }
}

export default Badgeview;