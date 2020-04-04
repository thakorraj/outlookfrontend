import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';

const cookies = new Cookies();


let a = 'Bearer ' + cookies.get('Token') + "";
console.log(a);
//let id="pateharshil737@gmail.com"
//let id="thakorraj1998@gmail.com"
const headers = {
  'Content-Type': 'application/json',
  'Authorization': a
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      // color: theme.palette.text.secondary,
    },
  }),
);

const Level = props => (
  <p>
    <Grid container spacing={3}>
        
    <Grid item xs={3}><Paper >{props.products.categories}</Paper></Grid>
    <Grid item xs={2}><Paper >{props.products.attendees[0].emailAddress.name}</Paper></Grid>
    <Grid item xs={2}><Paper >{props.products.attendees[0].emailAddress.address}</Paper></Grid>
    <Grid item xs={2}><Paper >{props.products.start.dateTime.substring(0,10)}</Paper></Grid>
    <Grid item xs={1}><Paper >{props.products.start.dateTime.substring(11,16)}</Paper></Grid>
    <Grid item xs={1}><Paper >{props.products.end.dateTime.substring(11,16)}</Paper></Grid>
<Grid item xs={1}><Paper ><Button type="submit" onClick={() => { props.deleteProduct(props.products.id) }} variant="contained" color="secondary" startIcon={<DeleteIcon />} >Delete Event</Button></Paper></Grid>
        <Grid item xs={2}>
          {/* <Paper >  <button onClick={() => { props.deleteProduct(props.products.id) }}> Event!</button> */}
          {/* <Paper><Button type="submit" onClick={() => { props.deleteProduct(props.products.id) }} variant="outlined" color="primary" >Save</Button></Paper> */}
        </Grid>
        </Grid>
     {console.log(props.products.attendees[0].emailAddress.address)}
    {/* {props.products.subject} 
    <div>      <button onClick={() => { props.deleteProduct(props.products.id) }}>
        Event!
      </button></div> */}
  </p>
)
var link1;
//const classes = useStyles();
class ProductList extends Component {
  
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
    console.log(e.target.value);
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

  Event(){

  }

  storelist() {
  return(  <form onSubmit={this.handleFormSubmit}>
        {/* <div className="radio">
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
    </div> */}
    <RadioGroup aria-label="Rooms" name="gender1" value={this.state.selectedOption} onChange={this.handleOptionChange}>
        <FormControlLabel value="G306 - Session Room" control={<Radio />} label="G306 - Session Room" />
        <FormControlLabel value="G305 - Session Room" control={<Radio />} label="G305 - Session Room" />
        <FormControlLabel value="G304 – Boardroom" control={<Radio />} label="G304 – Boardroom" />
        <FormControlLabel value="G303 - Media Production Space" disabled control={<Radio />} label="G303 - Media Production Space" />
        <FormControlLabel value="G206 - Multipurpose Room" control={<Radio />} label="G206 - Multipurpose Room" />
        <FormControlLabel value="G204 – Boardroom" control={<Radio />} label="G204 – Boardroom" />
        <FormControlLabel value="G205 – Focus Group Control Room" control={<Radio />} label="G205 – Focus Group Control Room" />
        <FormControlLabel value="G105 - Focus Group Room"  control={<Radio />} label="G105 - Focus Group Room" />
      </RadioGroup>

          <Button type="submit" variant="outlined" color="primary" >
          Save
        </Button>
  </form>
  )
  }
  


  render() {
    const {classes} = this.props;
    return (
      
      <div>
        <h3>All Events</h3>
        
      
     

     {this.storelist()}
     <Grid container spacing={3}>
     <Grid item xs={3}><Paper >Room No</Paper></Grid>
    <Grid item xs={2}><Paper >Name</Paper></Grid>
    <Grid item xs={2}><Paper >Email</Paper></Grid>
    <Grid item xs={2}><Paper >Date</Paper></Grid>
    <Grid item xs={1}><Paper >Start Time</Paper></Grid>
    <Grid item xs={1}><Paper >End Time</Paper></Grid>
    <Grid item xs={1}><Paper >Action</Paper></Grid>
    </Grid>
     {this.state.event.value!=undefined?this.state.event.value.map(data=><Level products={data} deleteProduct={this.deleteProduct}/>):console.log("Undefined")}
  
 
      </div>



    )
  }
}
export default withStyles(useStyles)(ProductList);