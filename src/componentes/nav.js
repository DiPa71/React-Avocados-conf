import React from 'react';
import {Link} from 'react-router-dom'

import logo from '../img/avol.png';
import './nav.css'

class navBar extends React.Component{
  render(){
    return (
        <div className="nav-bar">
          <div className="container-fluid">
          <Link to={'/'} className="">
            <img src={logo} alt="" />
            <span className="font-weight-light">Avocadosnetwork</span>
            <span className="font-weight-bold">Conf</span>
            </Link>
          </div>
        </div>
    )
  }
}
export default navBar;