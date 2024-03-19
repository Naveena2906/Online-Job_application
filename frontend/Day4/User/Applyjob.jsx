import React from 'react'
import { useState } from 'react';
import '../User/Applyjob.css';
import { useNavigate } from 'react-router-dom';
import Topbar from '../Topbar/Topbar';
const Applyjob = () => {
    const navigate=useNavigate();
    const [workStatus, setWorkStatus] = useState('');
    // const [activeSection, setActiveSection] = useState('Personal Info');
    // const [defaultStatus, setDefaultStatus] = useState(true);
    const handleWorkStatusChange = (e) => {
        const newValue = e.target.value;
        if (workStatus === newValue) {
            setWorkStatus(''); 
           
        } else {
            setWorkStatus(newValue);
           
        }
    };
    
    const handlesubmitjob=()=>{
        navigate("/user/applied");
    }
    const handlenext=()=>{
        navigate("/user/education");
        // navigate(`/user/${nextSection.toLowerCase()}`); 
        setActiveSection(nextSection);
    }
  return (
    
        
    <div >
        <Topbar/>
        <div className='personal'>
        <div  style={{padding:"1%"}} className='text-blue-500'>Personal Info</div>
        <div style={{padding:"1%"}}>Education</div>
        <div  style={{padding:"1%"}}>Skills</div>
        <div  style={{padding:"1%"}}>Experience</div>
        </div>
        <div className='persign'>Personal Info</div>
        <div className='job-card1'>
            <label className='job'>First Name</label><br></br>
            <input className='job1' placeholder='First name'/>
            <label style={{marginLeft:"4%",width:"10%"}}>Last Name</label>
            <input className='job2' placeholder='Last name'/>
        </div>
        <div className='job-card1'>
            <label className='job'>Email</label><br></br>
            <input className='job1' placeholder='email'/>
            {/* <label style={{marginLeft:"5%",width:"10%"}}>Last Name</label>
            <input className='job2' placeholder='Last name'/> */}
        </div>
        <div className='job-card1'>
            <label className='job'>Password</label><br></br>
            <input className='job1' placeholder='Minimum 6 Characters'/>
            <label style={{marginLeft:"5%",width:"10%"}}>Address</label>
            <input className='job2' placeholder='present Address'/>
        </div>
        <div className='job-card1'>
            <label className='job'>Mobile Number</label><br></br>
            <input className='job1' placeholder='Enter your mobile number'/>
        </div>
        <div style={{padding:"1%"}}>
            {/* <button style={{marginLeft:"37%",marginTop:"3%",border:"1px solid blue",color:"white",width:"5%",padding:"0.5%",backgroundColor:"blue"}}>Back</button> */}
            <button style={{marginLeft:"56%",border:"1px solid blue",color:"white",width:"5%",padding:"0.5%",backgroundColor:"blue"}} onClick={handlenext}>Next</button>
        </div>
        {/* <div className='job-card1'>
            <label className='job'>Work Status</label><br></br>
            <label>
            <input className='jobs' type="radio" value="Experienced" checked={workStatus === "Experienced"}  onChange={handleWorkStatusChange}/>
            Experienced
             </label>
            <label>
           <input 
            type="radio" 
            value="Student" className='jobs' checked={workStatus === "Student"} 
            onChange={handleWorkStatusChange} 
          />
          Student
        </label>
        </div>
        {(workStatus === 'Student' || workStatus === 'Experienced') && (
                <div>
                    <div className='file1'>
                        <label >Upload Resume</label><br />
                        <input type='file' accept='".pdf,.doc,.docx' />
                    </div>
                </div>
            )}
            <div style={{padding:"4%"}}>
                <button style={{marginLeft:"39%",border:"1px solid blue",backgroundColor:"blue",color:"white",width:"13%",padding:"1%",borderRadius:"9%"}} onClick={handlesubmitjob}>Submit</button>
            </div> */}
    </div>
  )
}

export default Applyjob