import React from 'react'
import Topbar from '../Topbar/Topbar'
import { useNavigate } from 'react-router-dom'
import { addexperiences } from '../service/api';
import { useState } from 'react';

const Experience = () => {
    const navigate=useNavigate();
    const [experience, setExperience] = useState({
      company_name:'',position:'',duration:'',skill_develop:''
    });
    const handleChange=(e)=>{
      e.preventDefault();
      setExperience({...experience,[e.target.id]:e.target.value});
    }
    const handlesubmit=async()=>{
      for (const key in experience) {
        if (experience.hasOwnProperty(key)) {
            if (!experience[key]) {
                alert("Please fill in all fields.");
                return; 
            }
        }
    }
      const prod=await addexperiences(experience);
      console.log(prod.data);
      navigate("/user/appliedjob", { state: {  experienceData: experience } });
      // navigate("/user/applied", { state: { appliedData: experience } });
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
        <div style={{padding:"1%"}} className='text-blue-500'>Experience</div>
        </div>
        <div className='persign'>Experience</div>
        <div style={{marginLeft:"30%",padding:"1%"}}>
            <label>Company Name</label>
            <input type='text' placeholder='Enter Company Name' id='company_name' onChange={handleChange} style={{marginLeft:"7%",border:"1px solid black",padding:"0.5%"}}/>
        </div>
        <div style={{marginLeft:"30%",padding:"1%"}}>
             <label>Position/Job Title</label>
             <input type='text' placeholder='Enter position/job title' id='position' onChange={handleChange} style={{marginLeft:"6%",border:"1px solid black",padding:"0.5%"}}/>
        </div>
        <div style={{marginLeft:"30%",padding:"1%"}}>
            <label >Duration</label>
            <input type='text' placeholder='Enter duration' id='duration' onChange={handleChange} style={{marginLeft:"11.8%",border:"1px solid black",padding:"0.5%"}} />
        </div>
       <div style={{marginLeft:"30%",padding:"1%"}}>
           <label >Skills Developed</label>
           <input rows='4' placeholder='Enter skills developed' id='skill_develop' onChange={handleChange} style={{marginLeft:"7%",border:"1px solid black",padding:"0.5%"}}/>
       </div>
       <div>
            <button style={{marginLeft:"37%",marginTop:"3%",border:"1px solid blue",color:"white",width:"5%",padding:"0.5%",backgroundColor:"blue"}} onClick={handleback}>Back</button>
            <button style={{marginLeft:"25%",border:"1px solid blue",color:"white",width:"5%",padding:"0.5%",backgroundColor:"blue"}} onClick={handlesubmit} >Submit</button>
        </div>
    </div>
  )
}

export default Experience