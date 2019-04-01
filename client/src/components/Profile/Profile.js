import React, { Component } from 'react';
import {connect} from 'react-redux';
import Tabs from './Tabs'
import { fetchStudio, fetchUser, fetchBookings } from '../../actions';
import axios from 'axios'
import StudioProfile from './StudioProfile'


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

      <div>
        
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
        <StudioProfile name={studio.name} phone={studio.phone}
        venue={studio.venue} address1={studio.address1} address2={studio.address2}
        postalcode={studio.postalCode} region = {studio.region}
        city={studio.city}
        email={studio.email}
        isListed = {studio.isListed}
        studioName = {studio.studioName}
        guest={studio.guest}
        price={studio.price}
        rules={studio.rules}
        studioType={studio.studioType}
        />
        <hr />
      </div>)           
  })
}

handleSubmit = async (e, form) =>{
  e.preventDefault()
  let username = e.target.username.value;
  let email = e.target.email.value;
  let twitter = e.target.twitter.value;
  let instagram = e.target.instagram.value;
  let facebook = e.target.facebook.value;

  console.log(form)
  alert("this works")

  try{
  if(form === 'users'){
  const res = axios.post('/api/update_user', {username, email, twitter, instagram, facebook,})
  }

  if(form === 'studios'){
    const res = axios.post('/api/update_user', {username, email, twitter, instagram, facebook,})
    }
}

  catch(err){
    throw err;
    }

}


handleUser=()=>{

  let {auth} = this.props
return (
  <div>
  <div className="col-md-12">
            <form onSubmit={(e)=>this.handleSubmit(e, 'users')}>
      <div className="form-group">
                <label className="control-label">Email</label>
  <input className="form-control"  name="email" defaultValue={auth.email} />
  </div>

     <div className="form-group">
                <label className="control-label">Profile Name</label>
  <input className="form-control"  name="username" defaultValue={auth.name} />
  </div>


     <div className="form-group">
                <label className="control-label">Instargam</label>
  <input className="form-control"  name="instagram" defaultValue="" />
  </div>

   <div className="form-group">
                <label className="control-label">FaceBook</label>
  <input className="form-control"  name="facebook" defaultValue="" />
  </div>

  <div className="form-group">
                <label className="control-label">Twitter</label>
  <input className="form-control"  name="twitter" defaultValue="" />
  </div>

  <div><button className="btn btn-primary" type="submit">Submit</button></div>
</form>
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
<ProfileSideBar name={auth.name} email={auth.email} view={view} handleView={this.handleView} social={auth.social} />

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

