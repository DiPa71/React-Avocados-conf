import React from 'react'
import './listyle.css'
import { Link } from 'react-router-dom'
import img from '../img/nah.png'
function useSearch(badges){
    const [ query , setquery ] = React.useState('');
    const [filter, setfilter] = React.useState(badges)
    React.useMemo(() =>{
      const result = badges.filter(badge =>{
      return `${badge.nombre} ${badge.apellido}`.toLowerCase().includes(query.toLowerCase());
    })
    setfilter(result)
  }, [badges, query])

  return {query, setquery, filter}
}

function Lista (props){
  const badges = props.badges
  
  const {setquery, filter, query} = useSearch(badges)
    if(filter.length === 0){
      return(
        <div>
          <div className="form-group search">
          <label>
            <span>Filtro:</span>
            <input onChange={(e) =>{
              setquery(e.target.value);
            }} value={query} type="text" className="form-control"/>
          </label>
        </div>
        <div className="empty-list">
          <h3>Lista esta vacia</h3>
          <Link to="/badge/new" className="">Crear nueva insignia</Link>
        </div>
        </div>
      )
    }
    return (
      <React.Fragment>
        <div className="form-group search">
          <label>
            <span>Filtro:</span>
            <input onChange={e =>{
              setquery(e.target.value);
            }} value={query} type="text" className="form-control"/>
          </label>
        </div>
      <ul className="list-unstyled">
      {filter.map(badges=>{
        return(
            <Link to={`/badge/${badges.id}`} style={{ textDecoration: 'none', color: 'black'}}>
          <li key={badges.id}>
            <img src={badges.avatar || img} alt="avatar" />
            <div className="list-info">
              <div>
                <p className="list-bold">Nombre:</p>
                <p>{badges.nombre} {badges.apellido}</p>
              </div>
              <div>
                <p className="list-bold">E-mail: </p>
                <p>{badges.email}</p>
              </div>
                <p className="list-bold">@{badges.twitter}</p>
            </div>
          </li>
            </Link>
        )
      })
      }
    </ul>
    </React.Fragment>
    )
  }

export default Lista;