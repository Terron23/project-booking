import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios'
import { fetchUser } from '../actions';
import DropDown from './assets/DropDown';
import Input from './assets/Input';
import Title from './assets/Title';



class Availibility extends Component {
constructor(props){
super(props);
this.state ={
    alert: "d-none",
    dates: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    timeSlot: [],
    dateArr:[],
    error1: "",
    error2: "",
    reveal: false,
    
}
}


componentDidMount(){
    this.props.fetchUser()
}

handDays =()=>{
    return this.state.dates.map((days,i)=>{
        return <option key={i}>{days}</option>
    })
}

handleDates =(e)=>{
e.preventDefault()
   let timeSlot = [...this.state.timeSlot] 

   timeSlot.push([<form key={timeSlot.length+1} className="col-md-12" onSubmit={this.handleSchedule}>         
 <div className="row">
   <div className="form-group col-md-3">
   <DropDown options={this.handDays}
   name="days" 
   type="text" 
   label="Days of the Week"  />
    </div>

    <div className="form-group col-md-3">
    <Input name="timeFrom" type="text" label="Start Time (EX: 9:30 AM)"  placeholder="Enter Start Time" />
        </div>
  
        <div className="form-group col-md-3">
        <Input name="endTime" 
        type="text" label="End Time (EX: 9:30 PM)" 
         placeholder="Enter Time Finished" 
         />
        </div>
        <div className="form-group col-md-3">
        <br />
   <button className="btn btn-secondary mb-2" type="submit">Submit</button>
   </div>
   </div>     
</form>])


  this.setState({timeSlot})

}

handleList=()=>{
    return this.state.dateArr.map((time, i)=>{
            return<div key={i}>{time.day}: {time.starttime} - {time.endtime}</div>
        })
}

handleSchedule= (event) =>{
    event.preventDefault();
    let day = event.target.days.value
    let endtime= event.target.endTime.value
    let starttime = event.target.timeFrom.value
    let dateArr =[...this.state.dateArr]
    console.log()
   dateArr.push({day, starttime, endtime});
  this.setState({dateArr, reveal:true})
}

handleSubmit = (event) => {
    event.preventDefault();
    let studioname = this.props.match.params.studioName
    let studioid = this.props.match.params.studioid

let schedule = this.state.dateArr
    axios.post('/api/post-listing-time', {schedule, studioname, studioid})
    .then(res => {
        console.log(this.props)
        console.log("sanity check")
        this.props.history.push('/confirmation')
    })
    this.props.history.push('/confirmation')
    
    }

  render() {
      if (!this.props.auth) {
          return ''
      }
  
    return (
    <div className="container">
   
   <Title header="Hours of Availibility"  />
   <div className="row">
   <div className="col-md-9">
      {this.state.timeSlot}
      <br />
      <div className="row">
      <div className="col-md-4">
     <button className={`btn btn-block btn-primary`} onClick={this.handleDates}>Add More Dates</button>
     </div>
     { this.state.reveal ?
      <div className="col-md-4">
      <button className={`btn btn-block btn-secondary`} onClick={this.handleSubmit}>Submit Schedule</button>
      </div>
     :""}
</div>
     </div>
  


<div className="col-md-3">
   {this.handleList()}
   </div>
      </div>

      </div>
   
    );
  }
}




function mapStateToProps({ studio, auth }) {
    return { studio, auth };
  }
  
  export default connect(mapStateToProps, { fetchUser })(Availibility);

