import React, { Component } from 'react';

 
 
class Input extends Component {
 constructor(props){
   super(props);
 }
  render() {
    console.log("input",this.props)
    return (<div className="form-group">
        <label htmlFor={this.props.label}>{this.props.label}</label>
        <input type={this.props.type} className="form-control"  name={this.props.name} 
        placeholder={this.props.placeholder} 
        onChange={this.props.handleChange}
        defaultValue={this.props.value}
        />
      </div>
    );
  }
}
 
export default Input;