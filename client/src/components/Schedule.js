


import React , {Component} from 'react';
import {connect} from 'react-redux';
import {fetchLocation} from '../actions';


class Schedule extends Component  {
constructor(props){
  super(props);
this.state={
  city: "",
  search:""
}
}
  
  componentDidMount(){
    this.props.fetchLocation()
  }

  render(){
    if(!this.props.locate){
      return ''
    }
    let {studioTypeFilter, time, handleTime, handleAvailibility, block, locate, classProp, buttonTitle} = this.props
   
  return(
  
      <div className='container'>
        <form onSubmit={handleAvailibility}>
  <div className="row">
  <div className="col-md-8 form-group">
      <input  name='search' style={styles.inputStyle} type="text" className="form-control input-lg" placeholder="Search" />
</div>

<div className="col-md-4 form-group">

      <input name="location" onChange={this.handleSchedule} style={styles.inputStyle}  defaultValue={locate} type="text" className="form-control input-lg"  />
</div>

      </div>
      <button type="submit" className={ !classProp ? `btn btn-secondary btn-xl rounded-pill mt-5`: classProp}>
      
      {!buttonTitle ? `Book`: buttonTitle}</button>
      </form>
  </div>)
  }
}

const styles ={
  inputStyle:{
  height: 50,
  }
}

  
function mapStateToProps({locate}) {
  return { locate };
}

export default connect(mapStateToProps, {  fetchLocation })(Schedule);




