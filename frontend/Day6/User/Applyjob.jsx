import React from 'react'
import { useState } from 'react';
import '../User/Applyjob.css';
import { useNavigate } from 'react-router-dom';

import Topbar from '../Topbar/Topbar';
import { addjobs } from '../service/api';
const Applyjob = () => {
    const navigate=useNavigate();
    const[addjob,setAddjob]=useState({
        first_name:'',last_name:'',email:'',password:'',address:'',mobilenum:''
    });
    const handleChange=(e)=>{
        // e.preventDefault();
        setAddjob({...addjob,[e.target.id]:e.target.value});
      }

      const handlenext = async () => {
        for (const key in addjob) {
            if (!addjob[key]) {
                alert("Please fill in all fields.");
                return; // Stop execution if any field is empty
            }
        }
        const prod = await addjobs(addjob);
        console.log(prod.data);
        // navigate("/user/education");
        navigate("/user/education", { state: { addjobData: addjob } });
        // navigate(`/user/${nextSection.toLowerCase()}`); 
        // setActiveSection(nextSection);
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
            <input className='job1' id='first_name'onChange={handleChange} placeholder='First name' required/>
            <label style={{marginLeft:"4%",width:"10%"}}>Last Name</label>
            <input className='job2' id='last_name'onChange={handleChange} placeholder='Last name' required/>
        </div>
        <div className='job-card1'>
            <label className='job'>Email</label><br></br>
            <input className='job1' id='email' onChange={handleChange} placeholder='email' required/>
            {/* <label style={{marginLeft:"5%",width:"10%"}}>Last Name</label>
            <input className='job2' placeholder='Last name'/> */}
        </div>
        <div className='job-card1'>
            <label className='job'>Password</label><br></br>
            <input className='job1' id='password' onChange={handleChange} placeholder='Minimum 6 Characters' required/>
            <label style={{marginLeft:"5%",width:"10%"}}>Address</label>
            <input className='job2' id='address'onChange={handleChange} placeholder='present Address' required/>
        </div>
        <div className='job-card1'>
            <label className='job'>Mobile Number</label><br></br>
            <input className='job1' id='mobilenum' onChange={handleChange} placeholder='Enter your mobile number' required/>
        </div>
        <div style={{padding:"1%"}}>
            {/* <button style={{marginLeft:"37%",marginTop:"3%",border:"1px solid blue",color:"white",width:"5%",padding:"0.5%",backgroundColor:"blue"}}>Back</button> */}
            <button style={{marginLeft:"56%",border:"1px solid blue",color:"white",width:"5%",padding:"0.5%",backgroundColor:"blue"}} onClick={handlenext}>Next</button>
        </div>
    </div>
  )
}

export default Applyjob