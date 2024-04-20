import React from 'react'
import Topbar from '../Topbar/Topbar'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addskills } from '../service/api';
const Skill = () => {
    const navigate=useNavigate();
    const [skills, setSkills] = useState({
      skill: [], // Initialize as an empty array
      certification: ''
    });
  // const [newSkill, setNewSkill] = useState('');
  const handleChange=(e)=>{
    e.preventDefault();
    setSkills({...skills,[e.target.id]:e.target.value});
  }

  // const addSkill = () => {
  //   if (newSkill.trim() !== '') {
  //     setSkills(prevSkills => ({
  //       ...prevSkills,
  //       skill: [...prevSkills.skill, newSkill] // Append new skill to existing array of skills
  //     }));
  //     setNewSkill('');
  //   }
  // };
  const handlenext=async()=>{
    for (const key in skills) {
      if (skills.hasOwnProperty(key)) {
          if (!skills[key]) {
              alert("Please fill in all fields.");
              return; // Stop execution if any field is empty
          }
      }
  }
    const prod=await addskills(skills);
    console.log(prod.data);
    navigate("/user/experience", { state: { addjobData: addjob, educationData: qualification, skillData: skills } });
    // navigate("/user/experience");
  }
  const handleback=()=>{
    navigate("/user/education");
  }
  return (
    <div>
        <Topbar/>
        <div className='personal1'>
        <div style={{padding:"1%"}}>Personal Info</div>
        <div style={{padding:"1%"}}>Education</div>
        <div style={{padding:"1%"}} className='text-blue-500'>Skills</div>
        <div style={{padding:"1%"}}>Experience</div>
        </div>
        <div className='persign'>Skills</div>
        <div style={{marginLeft:"30%",padding:"2%"}}>
            <label style={{marginLeft:"4%"}}>Skills </label>
            <input style={{border:"1px solid black",padding:"0.5%",borderRadius:"5px",marginLeft:"3%"}} id='skill'  placeholder='skills' value={skills.skill}
          onChange={(e) => setSkills({...skills,skill:e.target.value})}/>
            {/* <button onClick={addSkill} style={{marginLeft:"4%"}}>Add</button> */}
        <br />
        </div>
        <div style={{marginLeft:"30%",padding:"2%"}}>
            <label>Ceritifications </label>
            <input style={{border:"1px solid black",padding:"0.5%",borderRadius:"5px",marginLeft:"1%"}} id='certification'  onChange={handleChange}  value={skills.certification}  placeholder='certificates'/>

        </div>
        <div>
        <button style={{marginLeft:"37%",marginTop:"3%",border:"1px solid blue",color:"white",width:"5%",padding:"0.5%",backgroundColor:"blue"}} onClick={handleback}>Back</button>
            <button style={{marginLeft:"25%",border:"1px solid blue",color:"white",width:"5%",padding:"0.5%",backgroundColor:"blue"}} onClick={handlenext} >Next</button>
        </div>
    </div>
  )
}

export default Skill