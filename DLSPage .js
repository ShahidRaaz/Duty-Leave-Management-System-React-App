import { Outlet,NavLink } from 'react-router-dom';
import React from 'react';
import './DLSPage.css'
class DLSPage extends React.Component{
  render(){
    return (
      <div>
        <center>
        <div className="content" id="dlsbox">
        <nav id="sm" align="center">
        <NavLink to="/Layout/DLSPage/AllS" className='top' exact activeClassName="active">
          All
        </NavLink>
        <NavLink to="/Layout/DLSPage/PendingS" className='top' exact activeClassName="active">
          Pending
        </NavLink>
        <NavLink to="/Layout/DLSPage/ApprovedS" className='top' exact activeClassName="active">
            Approved
        </NavLink><NavLink to="/Layout/DLSPage/RejectedS" className='top' exact activeClassName="active">
            Rejected
        </NavLink>
        </nav>
        <Outlet/>
        </div>
        </center>
      </div>
    )
  };
  }
export default DLSPage;