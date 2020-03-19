import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Order = props => (
    <tr>
      <td>{props.order.pname}</td>
       <td>{props.order.amount}</td>
      
      
      <td>
        <Link to={"/editProduct/"+props.product._id}>Edit</Link> | <a href="#" onClick={() => { props.deleteStore(props.product._id) }}>delete</a>
      </td>
    </tr>
  )

export default class ProductList extends Component
{
    constructor(props)
    {
     super(props);
    //  this.deleteProduct=this.deleteProduct.bind(this);
        this.state={
            product:[]
    
        };

    }
    componentDidMount(){
        axios.get('http://localhost:5000/api/products')
        .then(res=>{
            this.setState({
              product:res.data
            })
        })
        .catch((error)=>{
            console.log(error);
        });
       
        
    }
    deleteStore(id) {
      axios.delete('http://localhost:5000/api/products/'+id)
        .then(response => { console.log(response.data)});
  
      this.setState({
          //el is every element in exercise error so el._id will refer database id
          product: this.state.product.filter(el => el._id !== id)
      })
    }
    storelist()
    {
        return this.state.product.map(currentstore => {
            return <Product product={currentstore} deleteStore={this.deleteStore} key={currentstore._id}/>;
          })
    }
    render(){
        return(
            <div>
            <h3>All Stores</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                { this.storelist() }
              </tbody>
            </table>
          </div>
        )
    }
}