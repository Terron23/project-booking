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
    error1: "",
    error2: "",
    dateArr:[],
    timeSlot: [],
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

   timeSlot.push([<form key={timeSlot.length+1} className="form-inline col-md-12" onSubmit={this.handleTime}>         
 
   <div className="form-group mb-2">
   <DropDown options={this.handDays}

   name="days" 
   type="text" 
   label="Days of the Week"  />
        
    </div>

    <div className="form-group mb-2 mx-sm-3">
     
    <Input name="timeFrom" type="text" label="Start Time (EX: 9:30 AM)"  placeholder="Enter Start Time" />

        </div>
  
        <div className="form-group mb-2 mx-sm-3">
    
        <Input name="endTime" 
        type="text" label="End Time (EX: 9:30 PM)" 
         placeholder="Enter Time Finished" 
        
         />
        </div>
    

        <div className="form-group mb-2 mx-sm-3">
   <button className="btn btn-secondary mb-2" type="submit">Submit</button>
   </div>
               
           </form>])


  this.setState({timeSlot})

}

handleTime =(event)=>{
event.preventDefault();
let day = event.target.days.value
let endtime= event.target.endTime.value
let starttime = event.target.timeFrom.value

let dateArr = this.state.dateArr;

dateArr.push({starttime, endtime, day })
this.setState({dateArr, reveal:true})

}


handleSchedule =()=>{
    return this.state.dateArr.map(s =>{
        return(
                <div>
                    {`${s.day}: ${s.starttime} - ${s.endtime}`}
                    </div>

        )
    })
}

handleSubmit =  (event) => {
    event.preventDefault();
    
    let studioname = this.props.match.params.studioName
    let studioid = this.props.match.params.id
    let schedule = this.state.dateArr
    console.log(schedule)

   axios.post('/api/post-listing-time', {schedule, studioname, studioid})
   .then(res => {
       console.log(res.data)
       this.props.history.push('/confirmation')
   })
       

    
    }




  render() {
      if (!this.props.auth) {
          return ''
      }
  
    return (
    <div className="container">
  
   <Title header="Hours of Availibility" margin={0} />

    {this.state.timeSlot}
        {this.handleSchedule()}

     <a href="" onClick={this.handleDates}>Add Hours of Operation</a>
     {this.state.reveal ?
     <button className="btn btn-primary" onClick={this.handleSubmit}>Submit Schedule</button>
     : ""
     }
      </div>
     
    );
  }
}




function mapStateToProps({ studio, auth }) {
    return { studio, auth };
  }
  
  export default connect(mapStateToProps, { fetchUser })(Availibility);

