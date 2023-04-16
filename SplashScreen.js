import React from 'react';
import "./SplashScreen.css"
import aimg1 from './Logo.png'

class SplashScreen extends React.Component{
render(){
    return (
        <div>
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <center>
            <div className="content">
                <div className="splash-screen">
                <img alt="img1" id="i1" src={aimg1}/>
                </div>
                {/* <button class="lb" id="gsb">
                    <Link to="/Loginpage" className="ll" id='gsl'>
                        Getting Started
                    </Link>  
                </button> */}
            </div>
            </center>
        </div>
    )
}
}
export default SplashScreen;