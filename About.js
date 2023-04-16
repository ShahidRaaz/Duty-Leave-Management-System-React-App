import "./About.css"
import aimg from "./about.png"
import React from 'react';
class About extends React.Component{
  render(){
  return (
    <div>
      <center>
      <div className="content ab" id="formpage">
      <h1 className="heading">About DLMS</h1>
      <div className="box" id="aapp">
      <img alt="pp" src={aimg} id="epic"/>
      <p>
      This app allows students to apply for duty leave by providing their name, registration number, roll number, seminar name, seminar time, and seminar date. Students can apply for duty leave based on the events they have attended. The admin can then verify and approve or disapprove the leave requests. Students can check the status of their requests in the following sections: pending, approved, and rejected.
      </p>
      </div>
      </div>
      </center>
    </div>
  )
  };
}
  export default About;