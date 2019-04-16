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
    timeSlot: [<form key={0} className="form-inline col-md-12" onSubmit={this.handleSubmit}>         
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
                
            </form>],
    error1: "",
    error2: ""
    
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

   timeSlot.push([<form key={timeSlot.length+1} className="form-inline col-md-12" onSubmit={this.handleSubmit}>         
 
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




handleSubmit = async (event) => {
    event.preventDefault();
    
    //console.log(files[0])
    
    let day = event.target.days.value
    let endtime= event.target.endTime.value
    let starttime = event.target.timeFrom.value
    let studioname = ''
    
    console.log(starttime, endtime, day, studioname)

  
    try{
  
      
        const response = await axios.post('/api/post-listing-time', {starttime, endtime, day , studioname})
        console.log(response)
    

    
  
    }
    catch(err){
    
    throw err;
    }
    
    }

  render() {
      if (!this.props.auth) {
          return ''
      }
  
    return (
    <div className="container-fluid site-section">
  
   <Title header="Hours of Availibility" margin={0} />

 {this.state.timeSlot}
 

     <a href="" onClick={this.handleDates}>Add Hours of Operation</a>
      </div>
     
    );
  }
}




function mapStateToProps({ studio, auth }) {
    return { studio, auth };
  }
  
  export default connect(mapStateToProps, { fetchUser })(Availibility);

