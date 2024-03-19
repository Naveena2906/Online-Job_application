import React from 'react'
import Topbar from '../Topbar/Topbar'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Skill = () => {
    const navigate=useNavigate();
    const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');

  const addSkill = () => {
    if (newSkill.trim() !== '') {
      setSkills([...skills, newSkill]);
      setNewSkill('');
    }
  };
  const handlenext=()=>{
    navigate("/user/experience");
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
        <div style={{padding:"1%"}}>Skills</div>
        <div style={{padding:"1%"}}>Experience</div>
        </div>
        <div className='persign'>Skills</div>
        <div style={{marginLeft:"30%",padding:"2%"}}>
            <label style={{marginLeft:"4%"}}>Skills </label>
            <input style={{border:"1px solid black",padding:"0.5%",borderRadius:"5px",marginLeft:"3%"}} placeholder='skills' value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}/>
            <button onClick={addSkill} style={{marginLeft:"4%"}}>Add</button>
        <br />
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        </div>
        <div style={{marginLeft:"30%",padding:"2%"}}>
            <label>Ceritifications </label>
            <input style={{border:"1px solid black",padding:"0.5%",borderRadius:"5px",marginLeft:"1%"}} placeholder='certificates'/>

        </div>
        <div>
        <button style={{marginLeft:"37%",marginTop:"3%",border:"1px solid blue",color:"white",width:"5%",padding:"0.5%",backgroundColor:"blue"}} onClick={handleback}>Back</button>
            <button style={{marginLeft:"25%",border:"1px solid blue",color:"white",width:"5%",padding:"0.5%",backgroundColor:"blue"}} onClick={handlenext} >Next</button>
        </div>
    </div>
  )
}

export default Skill