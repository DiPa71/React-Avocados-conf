import React from 'react'
import './loading.css'

export default function Pageerror(props) {
  return (
    <div>
      <center>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      <p className="error">{props.error.message}</p>
      </center>
    </div>
  )
}