import React, { Component } from 'react';
import {connect} from 'react-redux';
import Tabs from './Tabs'


const ProfileSideBar = ({name, email}) =>{
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
       <a href={`mailTo:${email}`} ><span className="icon-mail_outline"> {email}</span></a><br />
        </div>
      </div>
    </div>
  </div>
</div>
</div>)
}


class Profile extends Component {

  componentDidMount(){
    this.props.auth
  }


  render() {
    if(!this.props.auth) {return ''}
    let { auth } = this.props
    return (
  <div className="container" style={{"marginTop": "50px"}}>
  <div className="row">
<div className="col-md-3">
<ProfileSideBar name={auth.name} email={auth.email} />
<hr />

</div>
<div className="col-md-9">
<Tabs />
</div>
</div>
    </div>

    );
  }
}

function mapStateToProps({auth}){
  //State from reducers/index.js file  gets passed to header component as props
  return {auth}
}

export default connect(mapStateToProps)(Profile);

