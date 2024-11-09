import React from 'react'
import Kosar from './Kosar'

function KosarTermekek(props) {
  return (
      <div>
     {props.kosarLista.map((kosarbanTermek, index) => {
      return <Kosar kosarbanTermek={kosarbanTermek} key={kosarbanTermek.id}/>
     })}
   
   </div>
   )
}

export default KosarTermekek