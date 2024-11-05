import React, { useContext } from 'react'
import { ApiContext } from '../contexts/ApiContext'

function Termek(props) {
    console.log(props);
    
    /*létre kell hozni egy terméket bootstrap card */
   
  return (
    <div className='col'>
        <div className='card h-70'>
            <div className='card-title'>
                    <h3>{props.termek.title}</h3>
                </div>
                <div className='card-body'>
                    <img src={props.termek.image} alt="" className='card-img-top' />
                </div>
                <div className="card-footer">
                    <h3>Ár: {props.termek.price} Ft</h3>
                    <button className='btn btn-dark'>Kattintas</button>
                </div> 
            </div>
    </div>
  )
}

export default Termek

/*  <div className='card-title'>
                <h3>{props.termek.title}</h3>
            </div>
            <div className='card-body'>
                <img src={props.termek.image} alt="" className='card-img-top' />
            </div>
            <div className="card-footer">
                <h3>Ár: {props.termek.price} Ft</h3>
            </div> 
*/