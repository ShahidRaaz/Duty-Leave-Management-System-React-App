import { Outlet,Link } from 'react-router-dom';
import React from 'react';
import './CMFPage.css'
class CFMPage extends React.Component{
  render(){
    return (
      <div>
        <center>
        <div class="content" id="cfmbox">
          <p class="content fsm">
                Your Form is Submitted Successfully
            </p>
            <div className="lb" id="csb">  
                        <Link to="/Layout/DLSPage/PendingS" className='link' id="ch">
                        Check Status
                        </Link>
                        <Outlet/>
            </div>
        </div>
        </center>
      </div>
      
    )
    
  };
}
  export default CFMPage;