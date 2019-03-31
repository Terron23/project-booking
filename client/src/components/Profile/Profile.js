import React, { Component } from 'react';
import {connect} from 'react-redux';
import Tabs from './Tabs'
import { fetchStudio, fetchUser, fetchBookings } from '../../actions';
import axios from 'axios'


const ProfileSideBar = ({name, email, studioname, view}) =>{
  return (<div class="">
  <div className="row user-profile">
  <div class="col-md-12">
    <div class="profile-sidebar">
      <div class="profile-userpic">
        <img src="https://www.monmouth.edu/university-advancement/wp-content/uploads/sites/237/2018/08/person-placeholder.jpg" 
        className="img-responsive" alt="" style={{"width": "200px"}}/>
       
      </div>

      <div class="profile-usertitle">
        <div class="profile-userInfo">
        <h5>{name}</h5>
        <h5> {studioname}</h5>
       <a href={`mailTo:${email}`} ><span className="icon-mail_outline"> {email}</span></a><br />
      
       <div className={`social ${view}`}>
       <form>
       <div className="form-group">
                    <label className="control-label">FaceBook</label>
      <input className="form-control"  placeholder="facebook" />
      </div>

  <div className="form-group">
                    <label className="control-label">Instagram</label>
      <input className="form-control"  placeholder="instagram" />
      </div>

        <div className="form-group">
                    <label className="control-label">Twitter</label>
      <input className="form-control"  placeholder="twitter" />
      </div>


        <div className="form-group">
                    <label className="control-label">Soundcloud</label>
      <input className="form-control"  placeholder="soundcloud" />
      </div>
         </form>
         </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>)
}


class Profile extends Component {
constructor(props){
  super();
  this.state={
    name:"",
    email:"",
    social:"",
    view: "d-none",
    booked: [],
  }
}

componentDidMount(){
//Need to refactor to redux but fuck it it works
  axios.get('/api/studioBooked').then(res=>{
   this.setState({booked: res.data});
  });;
 
}
 

handleStudioListed =()=>{
  let { studio } = this.props
  return studio.map(studio=>{

      return (
      <div>
      <div className="col-md-12">
    <div className="form-group">
                    <label className="control-label">Studio Name</label>
                  
          <input className="form-control" defaultValue={studio.studioName} />
          </div>
          <div className="form-group">
                    <label className="control-label">Studio Type</label>
      <input className="form-control"  defaultValue={studio.studioType} />
      </div>
      <div className="form-group">
                    <label className="control-label">City</label>
      <input className="form-control"  defaultValue={studio.city} />
      </div>
      <div className="form-group">
                    <label className="control-label">Region</label>
      <input className="form-control"  defaultValue={studio.region} />
      </div>
      <div className="form-group">
                    <label className="control-label">Price</label>
      <input className="form-control"  defaultValue={studio.price} />
      </div>
    
      </div>
      <hr />
      </div>)             
  })
}


handleUser=()=>{

  let {auth} = this.props
return (
  <div>
  <div className="col-md-12">
            
      <div className="form-group">
                <label className="control-label">Email</label>
  <input className="form-control"  defaultValue={auth.email} />
  </div>

     <div className="form-group">
                <label className="control-label">User Name</label>
  <input className="form-control"  defaultValue={auth.name} />
  </div>

  </div>
  <hr />
  </div>
 
 )


}

  handleApi =()=>{
    let { studio } = this.props
    {studio.map(studio=>{
  
      return this.setState({email: studio.email, name: studio.name})
    })}
   
    console.log(this.state.name)
  }

  handleVisits =(e)=>{
console.log()
  }


  render() {
    if(!this.props.studio || !this.props.auth) {return ''}
    let { studio, auth, } = this.props;
    let {name, email, view , booked} = this.state;
    console.log("Booked", this.props)
console.log(auth)
    return (
  <div className="container" style={{"marginTop": "50px"}}>
  <div className="row">
<div className="col-md-3">
<ProfileSideBar name={auth.name} email={auth.email} view={view} handleView={this.handleView} />

<hr />

</div>
<div className="col-md-9">
<Tabs studio={studio} studioListed={this.handleStudioListed()} userForm={this.handleUser()} booked={booked}/>
</div>
</div>
    </div>

    );
  }
}

function mapStateToProps({studio, auth, booked}){
  //State from reducers/index.js file  gets passed to header component as props
  return {studio, auth }
}

export default connect(mapStateToProps,  { fetchStudio , fetchUser })(Profile);

