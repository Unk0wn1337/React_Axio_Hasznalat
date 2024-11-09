import { useContext } from "react";
import Vasarloter from "./components/Vasarloter";
import { ApiContext } from "./contexts/ApiContext";
import { kosarContext } from "./contexts/KosarContext";
import KosarTermekek from "./components/KosarTermekek";



function App() {
  const {termekLista}=useContext(ApiContext)
  const {kosarLista}=useContext(kosarContext)
  console.log(kosarLista);

  return (
    <div className="container">
      <header className="">
        <h1 className="center">FakeStore Webáruház</h1>
      </header>
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
    </div>
  );
}

export default App;
