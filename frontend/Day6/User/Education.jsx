import React from 'react'
import Topbar from '../Topbar/Topbar'
import { useState } from 'react';
import '../User/Education.css';
import { useNavigate } from 'react-router-dom';
import { edujobs } from '../service/api';
const Education = () => {
    const navigate=useNavigate();
    const [qualification, setQualification] = useState({
       Student:'',Employee:''
    }); 
    const handlequalificationChange = (e) => {
        
        e.preventDefault();
        const { id } = e.target;
    if (id === 'Student') {
        setQualification({ ...qualification, Student: 'Student', Employee: '' ,qualificationType: 'Student' });
    } else if (id === 'Employee') {
        setQualification({ ...qualification, Employee: 'Employee', Student: '',qualificationType: 'Employee'  });
    }
    };
    
    const handlenext = async () => {
        const { Student, Employee, ...qualificationData } = qualification;
        try {
            const response = await edujobs(qualificationData);
            console.log(response.data);
            navigate("/user/skill", { state: { addjobData: addjob, educationData: qualification } });
            // navigate("/user/skill");
        } catch (error) {
            console.error("Error:", error);
        }
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
            <input type='radio' name='highestQualification' id='Student' onChange={handlequalificationChange}  style={{marginLeft:"4%"}}/><label>Student</label><br></br>
            <input  type='radio' name='highestQualification' id='Employee'  style={{marginLeft:"4%"}} onChange={handlequalificationChange} /><label>Employee</label>
            {qualification.Student==='Student' && (
                <div>
                    <div style={{marginTop:"4%",marginLeft:"5%"}}>
                        <label >Cgpa  </label>
                        <input type='text' placeholder='current year cgpa'value={qualification.cgpa} onChange={(e) => setQualification({ ...qualification, cgpa: e.target.value })}  style={{border:"1px solid black"}}/><br></br><br></br>
                        <label>History of Arrear</label><br></br>
                        <input type='radio' name='hasArrears' value='Yes' checked={qualification.hasArrears} onChange={(e) => setQualification({ ...qualification, hasArrears: true })} placeholder='History of Arrear' style={{border:"1px solid black"}}/><label>Yes</label>
                        <input type='radio' name='hasArrears'  value='No' checked={!qualification.hasArrears} onChange={(e) => setQualification({ ...qualification, hasArrears: false })} placeholder='History of Arrear' style={{border:"1px solid black"}}/><label>No</label><br/><br/>
                        <label >Upload Drive link  </label><br/>
                        <input placeholder='drive link' onChange={(e) => setQualification({ ...qualification, resumelink: e.target.value })} style={{ marginTop: "2%", marginLeft: "2%" }} />
                        <input/>
                    </div>
                </div>
            )}
            {qualification.Employee==='Employee' && (
                <div>
                    <div style={{marginTop:"4%",marginLeft:"5%"}}>
                        <label >Upload Drive Link</label><br/>
                        <input placeholder='drive link' onChange={(e) => setQualification({ ...qualification, resumelink: e.target.value })} style={{ marginTop: "2%", marginLeft: "2%" }} />
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