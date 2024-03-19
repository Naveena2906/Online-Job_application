import React from 'react'
import Topbar from '../Topbar/Topbar'
import { useState } from 'react';
import '../User/Education.css';
import { useNavigate } from 'react-router-dom';
const Education = () => {
    const navigate=useNavigate();
    const [qualification, setQualification] = useState('');
    const handlequalificationChange = (e) => {
        setQualification(e.target.value);
    };
    const handlenext=()=>{
        navigate("/user/skill");
    }
    const handleback=()=>{
        navigate("/user/applyjob");
    }
  return (
    <div>
         <Topbar/>
        <div className='personal1'>
        <div style={{padding:"1%"}}>Personal Info</div>
        <div style={{padding:"1%"}}  className='text-blue-500'>Education</div>
        <div style={{padding:"1%"}}>Skills</div>
        <div style={{padding:"1%"}}>Experience</div>
        </div>
        <div className='persign'>Education</div>
        <div className='job-card1'>
            <label className='job'>Highest Qualification</label><br></br>
            <input type='radio' name='radiogroup' value='Student' checked={qualification === "Student"}  onChange={handlequalificationChange}  style={{marginLeft:"4%"}}/><label>Student</label><br></br>
            <input  type='radio' name='radiogroup' value='Employee' checked={qualification === "Employee"} style={{marginLeft:"4%"}} onChange={handlequalificationChange} /><label>Employee</label>
            {qualification === 'Student' && (
                <div>
                    <div style={{marginTop:"4%",marginLeft:"5%"}}>
                        <label >Cgpa  </label>
                        <input type='text' placeholder='current year cgpa' style={{border:"1px solid black"}}/><br></br><br></br>
                        <label>History of Arrear</label><br></br>
                        <input type='radio' name='arrear' placeholder='History of Arrear' style={{border:"1px solid black"}}/><label>Yes</label>
                        <input type='radio' name='arrear' placeholder='History of Arrear' style={{border:"1px solid black"}}/><label>No</label>
                        {/* <input type='file' accept='".pdf,.doc,.docx' /> */}
                    </div>
                </div>
            )}
            {qualification === 'Employee' && (
                <div>
                    <div style={{marginTop:"4%",marginLeft:"5%"}}>
                        <label >Upload Resume  </label><br/>
                        <input type='file' accept='".pdf,.doc,.docx' />
                    </div>
                </div>
            )}
        </div>
       
        <div>
            <button style={{marginLeft:"37%",marginTop:"3%",border:"1px solid blue",color:"white",width:"5%",padding:"0.5%",backgroundColor:"blue"}} onClick={handleback}>Back</button>
            <button style={{marginLeft:"25%",border:"1px solid blue",color:"white",width:"5%",padding:"0.5%",backgroundColor:"blue"}} onClick={handlenext} >Next</button>
        </div>
    </div>
  )
}

export default Education