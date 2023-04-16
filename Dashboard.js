import './Dashboard.css'
import React from 'react';
import { Link } from 'react-router-dom';
import Stt from './Seminar TT';
class Dashboard extends React.Component{
  render() {
    return (
      <center>
        <div id="dashboard" className='box'>
                  <div>
                  <Stt/>
                  </div>
                  <div className='btns'>
                    <div className="lb b" id="adlb">  
                        <Link to="/Layout/ADLPage" className='link'>
                        Apply Duty Leave
                        </Link>
                    </div>
                    <div className="lb b" id="dlsb">  
                        <Link to="/Layout/DLSPage/AllS" className='link'>
                        Duty Leave Status
                        </Link>
                    </div>
                  </div>
        </div>
        </center>
      
    )
    
  };
}
  
  export default Dashboard;