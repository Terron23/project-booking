


import React , {Component} from 'react';



class Schedule extends Component  {
constructor(props){
  super(props);
this.state={
  city: "",
}
}
  


  render(){
  
    let {studioTypeFilter, time, handleTime, handleAvailibility, block, locate, classProp, buttonTitle, search} = this.props
   console.log("Props", this.props)
  return(
  
      <div className='container'>
        <form onSubmit={handleAvailibility}>
  <div className="row">
  <div className="col-md-8 form-group">
      <input  name='search' style={styles.inputStyle} 
      type="text" className="form-control input-lg" 
      placeholder="Search" 
      defaultValue={search}
      />
</div>

<div className="col-md-4 form-group">

      <input name="location" onChange={this.handleSchedule} 
      style={styles.inputStyle}  
      defaultValue={locate} 
      type="text" className="form-control input-lg"  />
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

  


export default Schedule;




