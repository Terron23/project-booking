import React, { Component } from 'react';
import Schedule from '../Schedule';
import 'react-datetime/css/react-datetime.css'
import moment from 'moment'
import Title from '../assets/Title'
import FeaturedStudio from '../FeaturedStudios'
import MapContainer from '../assets/GoogleMap'
import {connect} from 'react-redux';
import {fetchLocation, fetchStudio} from '../../actions';
import Image from '../assets/Image';
import CardInfo from '../assets/CardInfo';
import axios from 'axios';


class StudioSearch extends Component {
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
  search: this.props.match.params.search.replace(/[^a-z0-9+]+/gi, ' '),
  location: this.props.match.params.location.replace(/[^a-z0-9+]+/gi, ' '),
  reveal: true,
  filterArr: "",
  longLat: []
}

  }

  componentDidMount(){
    let longLat =[]
    this.props.fetchLocation()
    this.props.fetchStudio()
 
      
  }


  featureType =()=>{

    let  filterArr=[...this.props.studio]
let search = filterArr 
  .sort((a, b)=>a.rating.length + b.rating.length)
  .sort((a, b)=>{
    if(this.state.filterArr==="low"){
      return  a.price - b.price
    }

    if(this.state.filterArr==="high"){
      return  b.price - a.price
    }

  })
  .filter((studio, i)=> i <= 2000)
  .filter(studio => {
   if(this.state.search === 'All' || this.state.search === ''){
     console.log("all for search", studio.studioType.length > 0)
   return studio.studioType.length > 0;
   }
   else{
   
    return studio.studioType.toLowerCase().match(this.state.search.toLowerCase())
   }
  })
  .filter(studio =>{
    if(this.state.location === 'All' || this.state.location === '' ){
      console.log("All fro location", studio.city.length > 0)
      return studio.city.length > 0
    }

  console.log("match should work", studio.city.toLowerCase().match(this.state.location.toLowerCase()), this.state.location.toLowerCase(), studio.city)
  return studio.city.toLowerCase().match(this.state.location.toLowerCase())

  })
  .map((studio)=>{
                return (
                  
                    
                  <div className={this.state.reveal? 'col-md-6': "col-lg-3 col-md-3 col-sm-12"} key={studio._id}>
                
                 
                      <Image 
                      src={`${studio.studioImage}`} alt={`${studio.studioName}`} />
                   
                    <CardInfo studioName={studio.studioName} 
                    price={studio.price} 
                    _id={studio._id} 
                    studioType={studio.studioType}
                    city={studio.city}
                    />
                   
                   
                  
                </div>)})


   return search


    }

 

handleTime =(e)=>{

  this.setState({time: e.target.value})
  
  console.log(this.state.time.split("T").pop())
  console.log(this.state.time.substring(this.state.time.indexOf("T"), 4))
  console.log(this.state.time)
  
  }


handleFilters =(filter)=>{
  if(filter === 'low') {
  this.setState({filterArr: filter})
  }
  else if(filter == 'high'){
    this.setState({filterArr: filter})
  }

  else {
    this.setState({filterArr: filter})
  }
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

viewMap =(e)=>{
e.preventDefault()
if(this.state.reveal){
  this.setState({reveal: false})
}
else{
  this.setState({reveal:true})
}
 

}

  render() {
    if(!this.props.studio || !this.props.locate){
      return 'Loading...'
    }
 
   console.log(this.props)
   console.log(this.state)
    return (<div className="container-fluid">
      {/* <MapContainer /> */}
  
     
   
   
     
    <div className="bg-light-gray">

      <div className="container-fluid" style={{marginTop:150}}>
      
      <Schedule
      search ={this.state.search}
      locate={this.state.location}
      time = {this.state.time}
      classProp={`btn btn-secondary btn-md`}
      buttonTitle={"Search"}
      handleSubmit ={this.handleAvailibility}
      />

<div className="container-fluid">
<hr />
<nav  className="navbar" >

{/* <ul class="navbar-nav" style={{paddingLeft: 20, paddingRight:20}}>    
<li class="nav-item dropdown">
      <a class="nav-item dropdown-toggle" id="navbardrop" data-toggle="dropdown">
 Distance
      </a>

      <div class="dropdown-menu">
      
        <a class="dropdown-item" onClick={()=>this.handleFilters('low')}>Venue</a>
        <a class="dropdown-item" onClick={()=>this.handleFilters('high')}>Distance</a>
      
      </div>
    </li>
    </ul> */}

<ul class="navbar-nav mr-auto">

    
<li class="nav-item dropdown">
      <a class="nav-item dropdown-toggle" id="navbardrop" data-toggle="dropdown">
     Sort by
      </a>
      <div class="dropdown-menu">
      
        <a class="dropdown-item" onClick={()=>this.handleFilters('low')}>Price (Low -> High)</a>
        <a class="dropdown-item" onClick={()=>this.handleFilters('high')}>Price (High -> Low)</a>
      
      </div>
    </li>
       
            </ul>

<ul className="navbar-nav ml-auto">
            <li class="nav-item">
            <button onClick={this.viewMap}>View Map</button>
            </li>
           
        </ul>

</nav>

<hr />  
</div>

{this.state.reveal === false ?
<div className="col-md-12">
  <FeaturedStudio featureType={this.featureType}
  
  />
  </div>
:

<div className="row">
<div className="col-md-6">
<FeaturedStudio featureType={this.featureType}/>
</div>
<div className="col-md-6">
<MapContainer /> 
</div> 
</div>}
     
        </div>
        </div>
      </div>
    );
  }
}



function mapStateToProps({locate, studio}) {
  return { locate , studio};
}

export default connect(mapStateToProps, {  fetchLocation, fetchStudio })(StudioSearch);



