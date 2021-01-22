import './App.css';
import Main from "./components/Main";
import { Link, Router } from "@reach/router"
import NewProduct from "./components/NewProcuct"


function App() {
  return (
    <div className="App">
      <h1>Welcome to the products page</h1>

      <Link className="btn btn-primary mb-3" to="/new" >Add a new Product</Link>
      <Link className="btn btn-secondary mb-3 ml-3" to="/" >Home</Link>

      <Router>
        <Main path="/"></Main>
        <NewProduct path="/new"></NewProduct>



      </Router>
    </div>
  );
}

export default App;
