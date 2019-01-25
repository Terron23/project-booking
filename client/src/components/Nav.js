import React, {Component} from 'react';
import {connect} from 'react-redux';



class  NavBar extends Component  {  

 renderContent(){
   switch(this.props.auth){
     case null:
     return 
     case false:
     return   <li className="nav-item"><a className="nav-link" href="/sign-up">Sign Up/Login</a></li>
     default:
     return <li className="nav-item"><a className="nav-link" href="/api/logout">Logout</a></li>
   }
 }

  render(){

    return (
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <div className="container">
        <a className="navbar-brand" href="/">Studio Go</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="oi oi-menu"></span> Menu
        </button>
  
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active"><a href="/search-studio" className="nav-link">Book A Session</a></li>
            <li className="nav-item"><a href="/post-studio" className="nav-link">Add Your Studio</a></li>
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




