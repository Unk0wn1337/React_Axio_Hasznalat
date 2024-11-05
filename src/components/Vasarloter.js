import React from 'react'
import Termek from './Termek'

function Vasarloter(props) {

    /* Végigmapelünk a terméklistán*/
    return (
            <div className='row  cols-1 row-cols-sm-2 row-cols-md-3  g-4'>{
              props.termekLista.map(termek=>{
                return <Termek termek={termek} key={termek.id}/>
              })}
            </div>

  )
}

export default Vasarloter