import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

let a = 'Bearer ' + cookies.get('Token') + "";
console.log(a);
//let id="pateharshil737@gmail.com"
//let id="thakorraj1998@gmail.com"
const headers = {
  'Content-Type': 'application/json',
  'Authorization': a
}


// const Order = props => (

//     <tr>
//       <td>{props.product}</td>
//        <td>{props.type}</td>


//     //   <td>
//     //     {/* <Link to={"/editProduct/"+props.product._id}>Edit</Link> | <a href="#" onClick={() => { props.deleteStore(props.product._id) }}>delete</a> */}
//     //   </td>
//      </tr>
//   )



const Level = props => (
  <p>
    {console.log(props.eve)}
     {props.eve}
  </p>
)

export default class ProductList extends Component {
  constructor(props) {
    super(props);



    //  this.deleteProduct=this.deleteProduct.bind(this);
    this.state = {

      event: [],

    };

  }
  // componentDidMount(){
  //   axios.get('https://graph.microsoft.com/v1.0/me/calendars/AAMkAGU5OTZlNDk1LTJlNmUtNGY1Ny1iYmMwLTU1ZmIzM2ZhNmJlMwBGAAAAAACKGeDzotHGRajMauDc_qmOBwBqw_J8OsbUQLCfJtoX9jrqAAAAAAEGAABqw_J8OsbUQLCfJtoX9jrqAAAOEcbUAAA=/events',{
  //     headers: headers
  //   })
  //     .then(res => setEvent(res.data));
  //     console.log(event);
  // //  this.deleteProduct=this.deleteProduct.bind(this);
  //     this.state={
  //         product:[]

  //     };

  // }
  componentDidMount() {


    axios.get('https://graph.microsoft.com/v1.0/me/calendars/AAMkAGU5OTZlNDk1LTJlNmUtNGY1Ny1iYmMwLTU1ZmIzM2ZhNmJlMwBGAAAAAACKGeDzotHGRajMauDc_qmOBwBqw_J8OsbUQLCfJtoX9jrqAAAAAAEGAABqw_J8OsbUQLCfJtoX9jrqAAAOEcbUAAA=/events', {
      headers: headers
    })
    .then(response => {
      this.setState({event: response.data})
      console.log(this.state.event);
    })
      //   .then(res => setEvent(res.data));
      // .then(res => res.data.value.map((cal) => {
      //   console.log(cal);
      //   return <Level product={cal} />;
      // }));
    // console.log(res.data.value)
    // console.log(event)


  }

  storelist() {
    return this.state.event.map(current => {
      return <Level eve={current}/>
    })
  }


  render() {
    return (
      <div>
        <h3>All Stores</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {/* console.log(this.state.event.value.map((cal) => { 
               console.log(cal);
             } */}
            {/*  */}
            {/* {console.log(this.state.event)} */}
            {/* {console.log(this.state.event.value[0].value[0].id)} */}
            {/* {Object.keys(this.state.event.value).map((obj, i) => {console.log(this.state.event.value[obj].id)})} */}
            {/* { this.storelist() }{this.state.event.map((event)=>console.log(event))} */}
            {/* {this.storeevent()}{this.storelist()} */}
          </tbody>
        </table>
        {/* {this.storelist()} */}
      </div>
    )
  }
}