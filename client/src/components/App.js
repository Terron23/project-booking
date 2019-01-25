import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import NavBar from './Nav'
import Hero from './hero'
import ListStudio from './ListStudio'
import SignUp from './SignUp'
import StudioSearch from './Studios/StudioSearch'
import SingleStudio from './Studios/SingleStudio'
import {connect} from 'react-redux'
import * as actions from '../actions'






 class App extends Component {

componentDidMount(){
  console.log(this.props.fetchUser())
  console.log(this.props.fetchStudio())

  }
  render() {
    return (
      <div className="container-fluid">
     <NavBar />

       <BrowserRouter>
       <div>

         <Route exact  path="/" component={Hero}/> 
         <Route path="/sign-up" component={SignUp} />
         <Route path="/post-studio" component={ListStudio} />
         <Route path="/search-studio" component={StudioSearch} />
         <Route path="/find-studio/:id" component={SingleStudio} />
         </div>
       </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App)
