import React, {Component} from 'react';
import {connect} from 'react-redux';



class  Footer extends Component  {  
constructor(props){
  super(props);
  this.state ={
newClass: "",
isActive: "",
  }
}



  render(){

    return (
        <footer class="page-footer font-small blue">

    
        <div class="footer-copyright text-center py-3">© 2018 Copyright:
          <a href=""> Privacy Policy</a>
        </div>
       
      
      </footer>
  
    )
    }
  }



    export default Footer;




