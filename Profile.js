import pimg from './profile.jpg'
import './Profile.css'
import React from 'react';
class Profile extends React.Component{
  render(){
  return (
    <div className='box' id="Ppage">
    <center>
        <div className="flex-container2">
            <div className="flex-item2">
              <img alt="pp" src={pimg} className="ppic"/>
              <h2>Shaikh Shahid Raaz</h2>
              <h4 className='dt'>P132:B.Tech. (Computer Science & Engineering)(2020)</h4>
            </div>
        </div>
        <h2 className="sub-heading">Basic Details</h2>
        <div className="flex-container2">
            <div className="flex-item2">
                <h3>Father's Name</h3>
                <p className='dt'>Shaikh Mohammad Ahshan</p>
            </div>
            <div class="flex-item2">
              <h3>Mother's Name</h3>
              <p className='dt'>Abida Jaha</p>
            </div>
            <div className="flex-item2">
            <h3>Gender</h3>
            <p className='dt'>Male</p>
          </div>
        </div>
        <div class="flex-container2">
            <div className="flex-item2">
              <h3>Contact No</h3>
              <p className='dt'>8102960976</p>
            </div>
            <div className="flex-item2">
              <h3>Email</h3>
              <p className='dt'>rajshahid712@gmail.com</p>
            </div>
            <div className="flex-item2">
              <h3>Date of Birth</h3>
              <p className='dt'>13 Nov 2002</p>
            </div>
        </div>      
        <div className="flex-container2">
          <div className="flex-item2">
            <h3>Permanent Address</h3>
            <p className='dt'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          </div>
          <div className="flex-item2">
            <h3>Temporary Address</h3>
            <p className='dt'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
          </div>
        </div>
        <h1 className="sub-heading">Academics Details</h1>
        <div className="flex-container2">
          <div className="flex-item2">
            <h3>Program</h3>
            <p className='dt'>P132:B.Tech. (Computer Science & Engineering)(2020)</p>
          </div>
          <div className="flex-item2">
            <h3>Admission Session</h3>
            <p className='dt'>2020-21</p>
          </div>
          <div className="flex-item2">
            <h3>Batch</h3>
            <p className='dt'>2020</p>
          </div>
          <div className="flex-item2">
          <h3>Section</h3>
          <p className='dt'>K20ND</p>
          </div>
      </div>
</center>
</div>
  )
  };
}
  export default Profile;