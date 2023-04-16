import './Loginpage.css'
import {useNavigate} from 'react-router-dom' //hook to get navigate to the page
import aimg1 from './Logo.png'
function LPage() {
    window.history.forward();
        function noBack() {
            window.history.forward();
        }
    const navigate = useNavigate();
    const handleSubmit = event => {
      event.preventDefault();
      navigate('/Layout/Dashboard');
    }
    return (
        <>
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
        <div class="content" id="loginpage">
            <center>
            <h1 id="Appname">Duty Leave Management System</h1>
            <img alt="img1" id="im1" src={aimg1}></img>
                <form onSubmit={handleSubmit} onClick={noBack} >
                    {/* <label for="ibox1" class="L">User ID</label>
                    <br/> */}
                    <input id='ibox1'className="ibox" type={'email'} required placeholder='Username'/>
                    <br/>
                    {/* <label for="ibox2" class="L">Password</label>
                    <br/> */}
                    <input id='ibox2' className="ibox" type={'password'} required placeholder='Password'/>
                    <br/>
                    <button className="lb">
                        <span id="ll">Log in</span>  
                    </button>
                </form>
                </center>
        </div>
        </>
    )
  }

export default LPage;