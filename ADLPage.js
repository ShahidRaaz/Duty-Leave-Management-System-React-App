import './ADLPage.css'
import {useNavigate} from 'react-router-dom'
const ADLPage = () => {
    const navigate = useNavigate();
    const Submit = () => {
      // 👇️ redirect to /confirm page
      navigate('/Layout/CFMPage');
    }
  
    return (
      <div>
        <center>
          <div className="content" id="formpage">
            <h2 className="subheading">Form</h2>
                {/* <form id="form" > */}
                <form  id="form" onSubmit={Submit}>
                  
                <div className="flex-container">
                  <div className="flex-item l">
                  {/* <label for="ibox1" class="l1" className="label">Name of Seminar</label> */}
                  </div>
                  <div className="flex-item">
                  <input id='ibox1'className="ibox in" type={'text'} required placeholder='Name of Seminar' minLength={2} maxLength={10}/>
                  </div>
                </div>

                <div class="flex-container">
                  <div class="flex-item l">
                  {/* <label for="ibox1" id="l1" className="label">Date of Seminar</label> */}
                  </div>
                  <div class="flex-item">
                  <input id='ibox1'className="ibox in" type={'date'} required />
                  </div>
                </div>

                <div class="flex-container">
                  <div class="flex-item l ">
                  {/* <label for="ibox1" id="l1" className="label">Time of Seminar</label> */}
                  </div>
                  <div class="flex-item">
                  <input id='ibox1'className="ibox in" type={'time'} required/>
                  </div>
                </div>

                <div class="flex-container">
                  <div class="flex-item l">
                  {/* <label for="ibox1" id="l1" className="label">Seminar Code</label> */}
                  </div>
                  <div class="flex-item">
                  <input id='ibox1'className="ibox in" type={'text'} required placeholder='Seminar Code'minLength={5} maxLength={5}/>
                  </div>
                </div>

                <div class="flex-container">
                  <div class="flex-item l">
                  {/* <label for="ibox1" id="l1" className="label">Registration No </label> */}
                  </div>
                  <div class="flex-item">
                  <input id='ibox1'className="ibox in" type={'number'} required placeholder='Registration Number' minLength={7} maxLength={10}/>
                  </div>
                </div>

                <div class="flex-container">
                  <div class="flex-item l">
                  {/* <label for="ibox1" id="l1" className="label">Section</label> */}
                  </div>
                  <div class="flex-item">
                  <input id='ibox1'className="ibox in" type={'text'} required placeholder='Section' minLength={5} maxLength={5}/>
                  </div>
                </div>

                <div class="flex-container">
                  <div class="flex-item l">
                  {/* <label for="ibox1" id="l1" className="label">Group</label> */}
                  </div>
                  <div class="flex-item">
                  <input id='ibox1'className="ibox in" type={'text'} required placeholder='Group' minLength={1} maxLength={1} />
                  </div>
                </div>

                <div class="flex-container">
                  <div class="flex-item l">
                  {/* <label for="ibox1" id="l1" className="label">Roll No</label> */}
                  </div>
                  <div class="flex-item">
                  <input id='ibox1'className="ibox in" type={'text'} required placeholder='Roll Number' minLength={1} maxLength={2}/>
                  </div>
                </div>

                <div>
                  <button id="sb" className="lb">
                    {/* <span id="ll" onClick={Submit}>Submit</span>   */}
                    <span id="ll">Submit</span>
                  </button>
                </div>

                </form>
                </div>
                </center>
            </div>
      )
  };
  
  export default ADLPage;