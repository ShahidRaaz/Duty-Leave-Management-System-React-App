import "./Help.css"
import eimg from "./gmail.png"
import pimg from "./phone.png"
import bimg from "./bug.png"
import React from 'react';
class Help extends React.Component{
  render(){
    return (
      <div>
        <center>
        <div className="content" id="formpage">
        <h1 className="heading">Contact Us</h1>
            <div className="flex-item2 pic">
              <img alt="pp" src={eimg} id="epic"/>
              <p>
              Email: rajshahid712@gmail.com
              </p>
            </div>
            <div className="flex-item2 pic">
              <img alt="pp" src={pimg} id="phpic"/>
              <p>
              Phone: +91 8102960976
              </p>
            </div>
            <h1 className="heading">Help</h1>
            <div className="flex-item2 pic">
              <img alt="pp" src={bimg} id="epic"/>
              <p><a href="mailto:rajshahid712@gmail.com" id="rb">Report Bug</a></p>
            </div>
        </div>
        </center>
      </div>
    )
  };
}
  export default Help;