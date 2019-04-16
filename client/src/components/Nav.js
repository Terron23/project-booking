import React, {Component} from 'react';
import {connect} from 'react-redux';



class  NavBar extends Component  {  
constructor(props){
  super(props);
  this.state ={
newClass: "",
isActive: "",
  }
}

componentDidMount() {
  window.addEventListener('scroll', this.handleScroll);
}

handleClick = (id) => {


  this.setState()

}

 renderContent(){
   switch(this.props.auth){
     case null:
     return 
     case false:
     return   [<a className="nav-link" href="/sign-up">Add Your Studio</a>,
    <a className="nav-link" href="/sign-up">Sign Up/Login</a>].map((value, i)=>{
       return (<li key={i} className="nav-item">{value}</li>)
     })
     default:
     return [<a href="/post-studio" className="nav-link">Add Your Studio</a>,
     <a href="/userprofile" className="nav-link">{this.props.auth.name}'s' Profile</a>,
    <a className="nav-link" href="/api/logout">Logout</a>].map((value, i)=>{
     return (<li key={i} className="nav-item">{value}</li>)
     })
   }
 }
 




  render(){
    return (
     

<nav  className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
<div className="container">
  <a className="navbar-brand" href="/">Book & GO</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarResponsive">
    <ul className="navbar-nav ml-auto">
    {/* <li className="nav-item"><a href="/search-studio" className="nav-link">Book A Session</a></li> */}
    {this.renderContent()}   
    </ul>
  </div>
</div>
</nav>
  
    )
    }
  }


    function mapStateToProps({auth}){
      //State from reducers/index.js file  gets passed to header component as props
      return {auth}
    }

    export default connect(mapStateToProps)(NavBar);




