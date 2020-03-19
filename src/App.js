import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/navbar.component"
import ProductList from "./components/product-list.component";
import CreateProduct from './components/create-product.component';
import EditProduct from './components/edit-product.component';

function App() {
  return (
    // <div className="App">
      <Router>
      {/* <div className="container"> */}

        <Navbar/>
        <br/>
        <Route path="/" exact component={ProductList}></Route>
        {/* <Route path="/storeList" exact component={StoreList}></Route> */}
        <Route path="/createProduct" component={CreateProduct} /> 
         <Route path="/editProduct/:id" component={EditProduct} />

        {/* <Route path="/editUser/:id" component={EditUser} />  */}

      {/* </div> */}
    </Router>
  );
}

export default App;
