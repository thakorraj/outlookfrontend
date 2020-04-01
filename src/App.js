import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/navbar.component"
import ProductList from "./components/product-list.component";
import OldComponent from "./components/old-component.component";
import OrderComponent from './components/order-list.component';

function App() {
    return (
        <Router>
            <Navbar/>
            <br/>
            <Route path="/yes" exact component={ProductList}/>
            <Route path="/no" component={OldComponent}/>
            <Route path="/orders" component={OrderComponent}/>
        </Router>
    );
}

export default App;
