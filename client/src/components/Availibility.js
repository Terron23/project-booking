import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios'
import { fetchUser } from '../actions';



class Availibility extends Component {
constructor(props){
super(props);
this.state ={
    alert: "d-none",
    dates: [],
}
}


componentDidMount(){
    this.props.fetchUser()
}


handleDates =(e)=>{
e.preventDefault()
   let dates = [...this.state.dates] 

   dates.push([<form key={dates.length+1} id="myForm" className="form-inline col-md-12" onSubmit={this.handleSubmit}>         
 
   <div className="form-group mb-2">
   <label>Days: </label> 
   <select  name={`hoursOfOperation`} className="dates form-control">
    <option>Sunday</option>
    <option>Monday</option>
    <option>Tuesday</option>
    <option>Wednesday</option>
    <option>Thursday</option>
    <option>Friday</option>
    <option>Saturday</option>
    </select>
    </div>

    <div className="form-group mb-2 mx-sm-3">
       <label>From:</label> <input name={`starttime`}  type="time" defaultValue="" className="timepicker dates no form-control" />
        </div>
  
        <div className="form-group mb-2 mx-sm-3">
        <label>To:</label> 
        <input name={`endtime`} type="time" defaultValue="" className="form-control timepicker dates"/>
        </div>

       
        <input name={`studioname`} type="text" value={this.props.match.params.studioName} className="d-none"/>
        

        <div className="form-group mb-2 mx-sm-3">
   <button className="btn btn-primary mb-2" type="submit">Submit</button>
   </div>
               
           </form>])


  this.setState({dates})

}


handleSubmit = async (event) => {
event.preventDefault();

//console.log(files[0])

let day = event.target.hoursOfOperation.value
let endtime= event.target.endtime.value.toString()
let starttime = event.target.starttime.value.toString()
let studioname = event.target.studioname.value


console.log(starttime, endtime, day, studioname)


try{
const response = await axios.post('/api/post-listing-time', {starttime, endtime, day , studioname})
console.log(response)
}
catch(err){

throw err;3
}

}

  render() {
      if (!this.props.auth) {
          return ''
      }
      const { auth } = this.props
    return (
    <div className="container-fluid site-section">
  
    <div className="container">
    <h3>Add Hours of Availibility</h3>
    <hr />
 
  {this.state.dates.map(dates=>{
      return dates
  })}

     <a href="" onClick={this.handleDates}>Add Hours of Operation</a>
      </div>
      </div>
    );
  }
}




function mapStateToProps({ studio, auth }) {
    return { studio, auth };
  }
  
  export default connect(mapStateToProps, { fetchUser })(Availibility);

