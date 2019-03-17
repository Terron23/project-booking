import React from 'react';
import SignUp from './SignUp'



const NotLoggedIn = ({oauth}) =>{
    return(

<div>
<div className="modal" id="notLogged">
  <div className="modal-dialog">
    <div className="modal-content">

   
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal">&times;</button>
      </div>

   
      <div className="modal-body  container-fluid">
      <SignUp />
      </div>

      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>

  </div>


  )
  }

  export default NotLoggedIn