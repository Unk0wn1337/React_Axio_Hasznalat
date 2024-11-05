import { useContext } from "react";
import Kosar from "./components/Kosar";
import Vasarloter from "./components/Vasarloter";
import { ApiContext } from "./contexts/ApiContext";

function App() {
  const {termekLista}=useContext(ApiContext)

  return (
    <div className="container">
      <header className="">
        <h1>FakeStore Webáruház</h1>
      </header>
      <main className="row">
          <aside className="col-lg-4">
            <h4>Kosár</h4>
            <Kosar/>
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
