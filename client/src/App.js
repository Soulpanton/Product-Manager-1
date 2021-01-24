import './App.css';
import Main from "./components/Main";
import { Link, Router } from "@reach/router";
import NewProduct from "./components/NewProduct";
import ProductInfo from "./components/ProductInfo";


function App() {
  return (
    // this will show no matter what route cause it's not inside the router
    <div className="App">
      <h1>Welcome to the products page</h1>
      <Link className="btn btn-primary mb-3" to="/new" >Add a new Product</Link>
      <Link className="btn btn-secondary mb-3 ml-3" to="/" >Home</Link>

      {/* this will only show on the specific route on the path because its inside the <Router> */}
      <Router>
        <Main path="/"></Main>
        <NewProduct path="/new"></NewProduct>
        {/* finds the route with a variable passed and goes to the matching component */}
        <ProductInfo path="/products/:productId"></ProductInfo>
      </Router>
    </div>
  );
}

export default App;
