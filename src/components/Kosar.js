import React from 'react'



export default function Kosar(props) {
  console.log(props.kosarbanTermek.termek.id);
  
  return(
    <ul className="list-group list-group-flush border border-danger">
      <li className="list-group-item  border border-danger">{props.kosarbanTermek.termek.title} {props.kosarbanTermek.termek.price} Ft</li>
    </ul>
   
    
    // <div>anyad:
    //     <p>{props.kosarbanTermek.termek.id}</p>
    // </div>
    
  )
}
