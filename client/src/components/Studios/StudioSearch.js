import React, { Component } from 'react';
import Schedule from '../Schedule';
import 'react-datetime/css/react-datetime.css'
import moment from 'moment'
import Title from '../assets/Title'
import FeaturedStudio from '../FeaturedStudios'
import MapContainer from '../assets/GoogleMap'




export default class StudioSearch extends Component {
  constructor(props){
    super(props);
this.state = {

  filterStudioType: "All",
  filterGuest: 0,
  zip: null,
  miles: '',
  time: "",
  day: "",
  availibility:[],
  guest: "",
  location:"",
  state: "",
}

  }



handleTime =(e)=>{

  this.setState({time: e.target.value})
  
  console.log(this.state.time.split("T").pop())
  console.log(this.state.time.substring(this.state.time.indexOf("T"), 4))
  console.log(this.state.time)
  
  }


handleAvailibility = (e) =>{
  e.preventDefault();
  
  let time = e.target.calendar.value.split("T").pop()
  let day = e.target.calendar.value.split("T").shift()
  let m = moment(day, "YYYY-MM-DD");
  let dow = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let guest = e.target.guest.value
  let location = e.target.location.value;
  let state = e.target.state.value;
  console.log(time);
  //console.log(dow[m.day()]);

  this.setState({
    filterStudioType: e.target.studioType.value, 
    time, day:dow[m.day()],
  guest, location,
  state,
  })
console.log(this.state.location)
}



  render() {
 
   console.log(this.props)
    return (<div className="container-fluid">
      {/* <MapContainer /> */}
  
     <Title header='Book A Session' />
   
   
     
    <div className="site-section bg-light">

      <div className="container-fluid-gallery">
      
      <Schedule
      studioTypeFilter={this.handleBooking}
      handleAvailibility={this.handleAvailibility}
      handleTime ={this.handleTime}
      time = {this.state.time}
      classProp={`btn btn-secondary btn-lg`}
      buttonTitle="Search"
      />
<div className="container">
<hr />
<p>Filter </p>
<hr />  
</div>

<FeaturedStudio totalStudios={1000000} />
       
     
        </div>
        </div>
      </div>
    );
  }
}





