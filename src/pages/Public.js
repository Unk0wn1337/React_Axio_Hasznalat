import React from 'react'

import { useContext } from "react";
import Vasarloter from "../components/Vasarloter";
import { ApiContext } from "../contexts/ApiContext";
import { kosarContext } from "../contexts/KosarContext";
import KosarTermekek from "../components/KosarTermekek";



export default function Public() {
    const {termekLista}=useContext(ApiContext)
    const {kosarLista}=useContext(kosarContext)
    console.log(kosarLista);
  
    return (
    <main className="row">
    <aside className="col-lg-4">
      <h4>Kosár</h4>
      <KosarTermekek kosarLista={kosarLista}/>
    </aside>
  <article className="col-lg-8">
      <h4>Vasarloter</h4>
      <Vasarloter termekLista={termekLista} />
  </article>  
    </main>
  )
}
