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
    {console.log(props)}
    {props.products.subject}
    <div>      <button onClick={() => { props.deleteProduct(props.products.id) }}>
        Event!
      </button></div>
  </p>
)
var link1;

const n=props=>(
<form>
    <div className="radio">
      <label>
        <input type="radio" value="G306 - Session Room" 
                      checked={this.state.selectedOption === 'option1'} 
                      onChange={this.handleOptionChange} />
        G306
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="G305 - Session Room" 
                      checked={this.state.selectedOption === 'option2'} 
                      onChange={this.handleOptionChange} />
        G305
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="G304 – Boardroom" 
                      checked={this.state.selectedOption === 'option3'} 
                      onChange={this.handleOptionChange} />
        G304
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="G303 - Media Production Space" 
                      checked={this.state.selectedOption === 'option1'} 
                      onChange={this.handleOptionChange} />
        G303
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="G206 - Multipurpose Room" 
                      checked={this.state.selectedOption === 'option2'} 
                      onChange={this.handleOptionChange} />
        G206
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="G204 – Boardroom" 
                      checked={this.state.selectedOption === 'option3'} 
                      onChange={this.handleOptionChange} />
        G204
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="G205 – Focus Group Control Room" 
                      checked={this.state.selectedOption === 'option1'} 
                      onChange={this.handleOptionChange} />
        G205
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="G105 - Focus Group Room" 
                      checked={this.state.selectedOption === 'G105 - Focus Group Room'} 
                      onChange={this.handleOptionChange} />
        G105
      </label>
    </div>
  </form>
)


export default class ProductList extends Component {
  constructor(props) {
    super(props);

    
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.deleteProduct=this.deleteProduct.bind(this);
    //  this.deleteProduct=this.deleteProduct.bind(this);
    this.state = {

      event: [],
      selectedOption: 'G105 - Focus Group Room'
    }    
  }

  Event()
{
  console.log("Hii")
}

  handleOptionChange(e)
  {
    this.setState({ selectedOption: e.target.value })
  }
  
  deleteProduct(id) {
    console.log(id);

    axios.delete("https://graph.microsoft.com/v1.0/me/calendars/"+link1+"/events/"+id, {
      headers: headers
    })
    .then(response => {
      // console.log(Object.keys(data))
     // this.setState({event: response.data})
      console.log("Deleted");
    })
  }

  handleFormSubmit=(formSubmitEvent) =>{
    formSubmitEvent.preventDefault();
  
    console.log('You have selected:', this.state.selectedOption);
    var cat=this.state.selectedOption;
    
    if (cat === "G306 - Session Room") {
      link1 = "AAMkAGU5OTZlNDk1LTJlNmUtNGY1Ny1iYmMwLTU1ZmIzM2ZhNmJlMwBGAAAAAACKGeDzotHGRajMauDc_qmOBwBqw_J8OsbUQLCfJtoX9jrqAAAAAAEGAABqw_J8OsbUQLCfJtoX9jrqAAAOEcbSAAA="
    }
    else if (cat === "G305 - Session Room") {
      link1 = "AAMkAGU5OTZlNDk1LTJlNmUtNGY1Ny1iYmMwLTU1ZmIzM2ZhNmJlMwBGAAAAAACKGeDzotHGRajMauDc_qmOBwBqw_J8OsbUQLCfJtoX9jrqAAAAAAEGAABqw_J8OsbUQLCfJtoX9jrqAAAOEcbTAAA=";
    }
    else if (cat === "G304 – Boardroom") {
      link1 = "AAMkAGU5OTZlNDk1LTJlNmUtNGY1Ny1iYmMwLTU1ZmIzM2ZhNmJlMwBGAAAAAACKGeDzotHGRajMauDc_qmOBwBqw_J8OsbUQLCfJtoX9jrqAAAAAAEGAABqw_J8OsbUQLCfJtoX9jrqAAAOEcbUAAA=";
    }
    else if (cat === "G303 - Media Production Space") {
      link1 = "AAMkAGU5OTZlNDk1LTJlNmUtNGY1Ny1iYmMwLTU1ZmIzM2ZhNmJlMwBGAAAAAACKGeDzotHGRajMauDc_qmOBwBqw_J8OsbUQLCfJtoX9jrqAAAAAAEGAABqw_J8OsbUQLCfJtoX9jrqAAAOEcbVAAA=";
    }
    else if (cat === "G206 - Multipurpose Room") {
      link1 = "AAMkAGU5OTZlNDk1LTJlNmUtNGY1Ny1iYmMwLTU1ZmIzM2ZhNmJlMwBGAAAAAACKGeDzotHGRajMauDc_qmOBwBqw_J8OsbUQLCfJtoX9jrqAAAAAAEGAABqw_J8OsbUQLCfJtoX9jrqAAAOEcbWAAA=";
    }
    else if (cat === "G204 – Boardroom") {
      link1 = "AAMkAGU5OTZlNDk1LTJlNmUtNGY1Ny1iYmMwLTU1ZmIzM2ZhNmJlMwBGAAAAAACKGeDzotHGRajMauDc_qmOBwBqw_J8OsbUQLCfJtoX9jrqAAAAAAEGAABqw_J8OsbUQLCfJtoX9jrqAAAOEcbXAAA=";
    }
    else if (cat === "G205 – Focus Group Control Room") {
      link1 = "AAMkAGU5OTZlNDk1LTJlNmUtNGY1Ny1iYmMwLTU1ZmIzM2ZhNmJlMwBGAAAAAACKGeDzotHGRajMauDc_qmOBwBqw_J8OsbUQLCfJtoX9jrqAAAAAAEGAABqw_J8OsbUQLCfJtoX9jrqAAAOEcbYAAA=";
    }
    else if (cat === "G105 - Focus Group Room") {
      link1 = "AAMkAGU5OTZlNDk1LTJlNmUtNGY1Ny1iYmMwLTU1ZmIzM2ZhNmJlMwBGAAAAAACKGeDzotHGRajMauDc_qmOBwBqw_J8OsbUQLCfJtoX9jrqAAAAAAEGAABqw_J8OsbUQLCfJtoX9jrqAAAOEcbZAAA=";
    }
    console.log(link1);
    axios.get('https://graph.microsoft.com/v1.0/me/calendars/'+link1+'/events', {
      headers: headers
    })
    .then(response => {
      // console.log(Object.keys(data))
      this.setState({event: response.data})
      console.log(this.state.event.value);
    })
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


  // axios.get('https://graph.microsoft.com/v1.0/me/calendars/AAMkAGU5OTZlNDk1LTJlNmUtNGY1Ny1iYmMwLTU1ZmIzM2ZhNmJlMwBGAAAAAACKGeDzotHGRajMauDc_qmOBwBqw_J8OsbUQLCfJtoX9jrqAAAAAAEGAABqw_J8OsbUQLCfJtoX9jrqAAAOEcbUAAA=/events', {
  //     headers: headers
  //   })
  //   .then(response => {
  //     // console.log(Object.keys(data))
  //     this.setState({event: response.data})
  //     console.log(this.state.event.value);
  //   })




      //   .then(res => setEvent(res.data));
      // .then(res =>{
      //  return res
      // } 
      //    res.data.value.map((cal) => {
      //   console.log(cal);
      //   return <Level product={cal} />;
      // })
      // );
      // console.log(res.data.value)
    // console.log(event)


  }

  Event(){

  }

  storelist() {
  return(  <form onSubmit={this.handleFormSubmit}>
        <div className="radio">
      <label>
        <input type="radio" value="G306 - Session Room" 
                      checked={this.state.selectedOption === 'G306 - Session Room'} 
                      onChange={this.handleOptionChange} />
        G306
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="G305 - Session Room" 
                      checked={this.state.selectedOption === 'G305 - Session Room'} 
                      onChange={this.handleOptionChange} />
        G305
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="G304 – Boardroom" 
                      checked={this.state.selectedOption === 'G304 – Boardroom'} 
                      onChange={this.handleOptionChange} />
        G304
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="G303 - Media Production Space" 
                      checked={this.state.selectedOption === 'G303 - Media Production Space'} 
                      onChange={this.handleOptionChange} />
        G303
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="G206 - Multipurpose Room" 
                      checked={this.state.selectedOption === 'G206 - Multipurpose Room'} 
                      onChange={this.handleOptionChange} />
        G206
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="G204 – Boardroom" 
                      checked={this.state.selectedOption === 'G204 – Boardroom'} 
                      onChange={this.handleOptionChange} />
        G204
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="G205 – Focus Group Control Room" 
                      checked={this.state.selectedOption === 'G205 – Focus Group Control Room'} 
                      onChange={this.handleOptionChange} />
        G205
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="G105 - Focus Group Room" 
                      checked={this.state.selectedOption === 'G105 - Focus Group Room'} 
                      onChange={this.handleOptionChange} />
        G105
      </label>
    </div>
    <button className="btn btn-default" type="submit">Save</button>
  </form>
  )
  }



  onsubmit(){
    // if (cat === "G306 - Session Room") {
    //   link1 = "AAMkAGU5OTZlNDk1LTJlNmUtNGY1Ny1iYmMwLTU1ZmIzM2ZhNmJlMwBGAAAAAACKGeDzotHGRajMauDc_qmOBwBqw_J8OsbUQLCfJtoX9jrqAAAAAAEGAABqw_J8OsbUQLCfJtoX9jrqAAAOEcbSAAA="
    // }
    // else if (cat === "G305 - Session Room") {
    //   link1 = "AAMkAGU5OTZlNDk1LTJlNmUtNGY1Ny1iYmMwLTU1ZmIzM2ZhNmJlMwBGAAAAAACKGeDzotHGRajMauDc_qmOBwBqw_J8OsbUQLCfJtoX9jrqAAAAAAEGAABqw_J8OsbUQLCfJtoX9jrqAAAOEcbTAAA=";
    // }
    // else if (cat === "G304 – Boardroom") {
    //   link1 = "AAMkAGU5OTZlNDk1LTJlNmUtNGY1Ny1iYmMwLTU1ZmIzM2ZhNmJlMwBGAAAAAACKGeDzotHGRajMauDc_qmOBwBqw_J8OsbUQLCfJtoX9jrqAAAAAAEGAABqw_J8OsbUQLCfJtoX9jrqAAAOEcbUAAA=";
    // }
    // else if (cat === "G303 - Media Production Space") {
    //   link1 = "AAMkAGU5OTZlNDk1LTJlNmUtNGY1Ny1iYmMwLTU1ZmIzM2ZhNmJlMwBGAAAAAACKGeDzotHGRajMauDc_qmOBwBqw_J8OsbUQLCfJtoX9jrqAAAAAAEGAABqw_J8OsbUQLCfJtoX9jrqAAAOEcbVAAA=";
    // }
    // else if (cat === "G206 - Multipurpose Room") {
    //   link1 = "AAMkAGU5OTZlNDk1LTJlNmUtNGY1Ny1iYmMwLTU1ZmIzM2ZhNmJlMwBGAAAAAACKGeDzotHGRajMauDc_qmOBwBqw_J8OsbUQLCfJtoX9jrqAAAAAAEGAABqw_J8OsbUQLCfJtoX9jrqAAAOEcbWAAA=";
    // }
    // else if (cat === "G204 – Boardroom") {
    //   link1 = "AAMkAGU5OTZlNDk1LTJlNmUtNGY1Ny1iYmMwLTU1ZmIzM2ZhNmJlMwBGAAAAAACKGeDzotHGRajMauDc_qmOBwBqw_J8OsbUQLCfJtoX9jrqAAAAAAEGAABqw_J8OsbUQLCfJtoX9jrqAAAOEcbXAAA=";
    // }
    // else if (cat === "G205 – Focus Group Control Room") {
    //   link1 = "AAMkAGU5OTZlNDk1LTJlNmUtNGY1Ny1iYmMwLTU1ZmIzM2ZhNmJlMwBGAAAAAACKGeDzotHGRajMauDc_qmOBwBqw_J8OsbUQLCfJtoX9jrqAAAAAAEGAABqw_J8OsbUQLCfJtoX9jrqAAAOEcbYAAA=";
    // }
    // else if (cat === "G105 - Focus Group Room") {
    //   link1 = "AAMkAGU5OTZlNDk1LTJlNmUtNGY1Ny1iYmMwLTU1ZmIzM2ZhNmJlMwBGAAAAAACKGeDzotHGRajMauDc_qmOBwBqw_J8OsbUQLCfJtoX9jrqAAAAAAEGAABqw_J8OsbUQLCfJtoX9jrqAAAOEcbZAAA=";
    // }
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
        {/* {this.state.event.value.map((obj, i) => {
      return (
        <div>{console.log(obj.id)}</div>
         
        
      )})} */}
     
     
     {this.storelist()}
     {this.state.event.value!=undefined?this.state.event.value.map(data=><Level products={data} deleteProduct={this.deleteProduct}/>):console.log("Undefined")}
      {/* <form>
    <div className="radio">
      <label>
        <input type="radio" value="option1" 
                      checked={this.state.selectedOption === 'option1'} 
                      onChange={this.handleOptionChange} />
        Option 1
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="option2" 
                      checked={this.state.selectedOption === 'option2'} 
                      onChange={this.handleOptionChange} />
        Option 2
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="option3" 
                      checked={this.state.selectedOption === 'option3'} 
                      onChange={this.handleOptionChange} />
        Option 3
      </label>
    </div>
  </form> */}
  
 
      </div>



    )
  }
}