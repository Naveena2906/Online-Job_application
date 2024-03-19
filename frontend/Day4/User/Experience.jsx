import React from 'react'
import Topbar from '../Topbar/Topbar'
import { useNavigate } from 'react-router-dom'

const Experience = () => {
    const navigate=useNavigate();
    const handlesubmit=()=>{
      navigate("/user/applied");
    }
    const handleback=()=>{
        navigate("/user/skill");
    }
  return (
    <div>
        <Topbar/>
        <div className='personal1'>
        <div style={{padding:"1%"}}>Personal Info</div>
        <div style={{padding:"1%"}}>Education</div>
        <div style={{padding:"1%"}}>Skills</div>
        <div style={{padding:"1%"}}>Experience</div>
        </div>
        <div className='persign'>Experience</div>
        <div style={{marginLeft:"30%",padding:"1%"}}>
            <label>Company Name</label>
            <input type='text' placeholder='Enter Company Name' style={{marginLeft:"7%",border:"1px solid black",padding:"0.5%"}}/>
        </div>
        <div style={{marginLeft:"30%",padding:"1%"}}>
             <label>Position/Job Title</label>
             <input type='text' placeholder='Enter position/job title'  style={{marginLeft:"6%",border:"1px solid black",padding:"0.5%"}}/>
        </div>
        <div style={{marginLeft:"30%",padding:"1%"}}>
            <label >Duration</label>
            <input type='text' placeholder='Enter duration' style={{marginLeft:"11.8%",border:"1px solid black",padding:"0.5%"}} />
        </div>
       <div style={{marginLeft:"30%",padding:"1%"}}>
           <label >Skills Developed</label>
           <input rows='4' placeholder='Enter skills developed' style={{marginLeft:"7%",border:"1px solid black",padding:"0.5%"}}/>
       </div>
       <div>
            <button style={{marginLeft:"37%",marginTop:"3%",border:"1px solid blue",color:"white",width:"5%",padding:"0.5%",backgroundColor:"blue"}} onClick={handleback}>Back</button>
            <button style={{marginLeft:"25%",border:"1px solid blue",color:"white",width:"5%",padding:"0.5%",backgroundColor:"blue"}} onClick={handlesubmit} >Submit</button>
        </div>
    </div>
  )
}

export default Experience