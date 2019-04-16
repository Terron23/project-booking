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
  state: "",
  search: this.props.location.state.search,
  location: this.props.location.state.location,
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
  let location = e.target.location.value;
  let search = e.target.search.value;
  // let time = e.target.calendar.value.split("T").pop()
  // let day = e.target.calendar.value.split("T").shift()
  // let m = moment(day, "YYYY-MM-DD");
  // let dow = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  // let guest = e.target.guest.value
  // let state = e.target.state.value;
  // console.log(time);
  //console.log(dow[m.day()]);

  // this.setState({
  //   filterStudioType: e.target.studioType.value, 
  //   time, day:dow[m.day()],
  // guest, location,
  // state,
  // })

  this.setState({location, search})
console.log(this.state.location)
}

handleChange =(e)=>{
  this.setState({search: e.target.search.value})
}

  render() {
 
   console.log(this.props)
   console.log(this.state)
    return (<div className="container-fluid">
      {/* <MapContainer /> */}
  
     <Title header='Book A Session' />
   
   
     
    <div className="bg-light-gray">

      <div className="container-fluid">
      
      <Schedule
      search ={this.state.search}
      locate={this.state.location}
      time = {this.state.time}
      classProp={`btn btn-secondary btn-lg`}
      buttonTitle="Search"
      handleSubmit ={this.handleAvailibility}
      />

<div className="container">
<hr />
<p>Filter </p>
<hr />  
</div>

<FeaturedStudio 
totalStudios={1000000} 
locate={this.state.location}
search={this.state.search}
/>
       
     
        </div>
        </div>
      </div>
    );
  }
}





