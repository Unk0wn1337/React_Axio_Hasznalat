
import Urlap from "./components/Urlap";
import Public from "./pages/Public";


function App() {
  

  return (
    <div className="container">
      <header className="">
        <h1 className="center">FakeStore Webáruház</h1>
      </header>
       {/* <Public/> */}
       <main>
          <Urlap></Urlap>
       </main>
    </div>
  );
}

export default App;
