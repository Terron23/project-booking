import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'


const Tabs = ({oauth}) =>{
    return(

  
  <ul class="nav justify-content-center">
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#">Disabled</a>
    </li>
  </ul>


  )
  }

  export default Tabs
  