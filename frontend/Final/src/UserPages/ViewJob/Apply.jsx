// import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { UserNavbar } from '../../Navbar/UserNavbar'
import './Apply.css';
import { useEffect, useState } from 'react';
import { addapply, getapply, getjobbyid, getuserapply } from '../../Service/api';
import "react-toastify/dist/ReactToastify.css";
import {toast,ToastContainer } from 'react-toastify';
export const Apply = () => {
    const {id}=useParams();
    const navigate=useNavigate();
    const[apply,setApply]=useState({
        name:'',orgname:'',jobtitle:'',joblocation:'',jobtype:'',cgpa:'',jobexperience:'',dob:'',projects:'',jobdescription:'',resume:'',skills:[],jobid:id
    })


    const [job, setJob] = useState({
        orgname: '',
        jobtitle: '',
        joblocation: '',
        jobtype: '',
        jobpackage: '',
        jobexperience: '',
        jobdeadline: '',
        jobopenings: '',
        jobdescription: '',
        educationalrequirements: [],
        skills: []
    });


    const fetchjobid=async()=>{
    const res=await getjobbyid(id);
    console.log(res.data);
    setJob(res.data);

    setApply(prevState => ({
        ...prevState,
        jobtitle: res.data.jobtitle,
        orgname: res.data.orgname
    }));

}
    useEffect(()=>{
    if(id)
        fetchjobid();
    },[id])
    
    

    const handleChange=(e)=>{
        e.preventDefault();
        const { id, value, type, name, checked } = e.target;

        if (type === 'text' || type === 'date' || type === 'number') {
            setApply({ ...apply, [id]: value });
        } 
        else if (id === 'jobtype') {
            setApply({ ...apply, [id]: value });
        } 
        else if (type === 'checkbox') {
           if (name === 'skills') {
                const updatedSkills = checked ? [...apply.skills, value] : apply.skills.filter(skill => skill !== value);
                setApply({ ...apply, skills: updatedSkills });
            }
        }
        else if (type === 'file') {
            const file = e.target.files[0]; 
            setApply({ ...apply, resume: file }); 
        }
    }
    const userid=localStorage.getItem('userid');
    console.log(userid);
    const handleSubmit=async()=>{
        if(apply.name===''||apply.orgname===''||apply.jobtitle===''||apply.joblocation===''||apply.jobtype===''||apply.cgpa===''||apply.jobexperience===''||apply.dob===''||apply.projects===''||apply.jobdescription===''||apply.resume==='')
        {
            toast.error("Enter all fields")
        }
        else
        {
            const res = await addapply(apply,userid);
            console.log(res.data); 
            toast.success("Applied Successfully!");
            setTimeout(()=>{
                navigate('/appliedjobs')
            },3000)
        }
    }
  return (
    <>
     <ToastContainer
    position="top-right"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    />
        <UserNavbar/>
        <div className='applybody pt-[130px] ml-[230px]'>
        <h2 className='text-3xl font-bold ml-[400px] mb-[30px]'>{job.jobtitle}</h2>
        <div className="jobinput">
            <label>Full Name<span className="text-red-600">*</span></label>
            <input className="jobin"  type='text' id="name"   onChange={handleChange} placeholder="full Name"/>
        </div>
        <div className="jobinput ml-[560px] mt-[-110px]">
            <label>Title<span className="text-red-600">*</span></label>
            <input className="jobin" type='text' id="jobtitle" value={job.jobtitle} placeholder="Job Title"/>
        </div>
        <div className="jobinput">
            <label>Location<span className="text-red-600">*</span></label>
            <input className="jobin" type='text' id="joblocation"onChange={handleChange} placeholder="Job Location"/>
        </div>
        <div className="jobinput ml-[560px] mt-[-110px]">
            <label>Time<span className="text-red-600">*</span></label>
            <select name="job type" id="jobtype"onChange={handleChange}>
                <option value="part time">Part Time</option>
                <option value="full time">Full Time</option>
                <option value="internship">Internship</option>
            </select>
        </div>
        <div className="jobinput">
            <label>CGPA<span className="text-red-600">*</span></label>
            <input className="jobin" type='text' id="cgpa"onChange={handleChange} placeholder="CGPA"/>
        </div>
        <div className="jobinput ml-[560px] mt-[-110px]">
            <label>Experience<span className="text-red-600">*</span></label>
            <input className="jobin" type='text' id="jobexperience" onChange={handleChange}placeholder="Experience in years"/>
        </div>
        <div className="jobinput">
            <label>Date of Birth<span className="text-red-600">*</span></label>
            <input className="jobin" type='date' id="dob"onChange={handleChange} />
        </div>
        <div className="jobinput ml-[560px] mt-[-110px]">
            <label>Projects<span className="text-red-600" >*</span></label>
            <input className="jobin" type='text' id="projects"onChange={handleChange} placeholder="No. of projects"/>
        </div>
        <div className="jobinput w-[1000px] ">
            <label >Educational qualification<span className="text-red-600">*</span></label><br/>
            <select name="education" id="education"onChange={handleChange}>
                <option value="BE/BTECH">BE/BTECH</option>
                <option value="Bsc">BSc</option>
                <option value="ME/MTECH">ME/MTECH</option>
                <option value="Bcom">Bcom</option>
                <option value="MBA">MBA</option>
            </select>
        </div>
        <div className="jobinput w-[1000px]">
            <label>Skills known<span className="text-red-600">*</span></label><br/>
                    <div className="check p-2">
                        <input type="checkbox" name="skills" value="Java" className="ml-[35px]" onChange={handleChange} /> Java
                        <input type="checkbox" name="skills" value="C#" className="ml-[35px]" onChange={handleChange} /> C
                        <input type="checkbox" name="skills" value="C++" className="ml-[35px]" onChange={handleChange} /> C++
                        <input type="checkbox" name="skills" value="MySQL" className="ml-[35px]" onChange={handleChange} /> MySQL
                        <input type="checkbox" name="skills" value="ReactJS" className="ml-[35px]" onChange={handleChange} /> ReactJS
                        <input type="checkbox" name="skills" value="Spring Boot" className="ml-[35px]" onChange={handleChange} /> Spring Boot
                        <input type="checkbox" name="skills" value="AWS" className="ml-[35px]" onChange={handleChange} /> AWS
                        <input type="checkbox" name="skills" value="Python" className="ml-[35px]" onChange={handleChange} /> Python
                    </div>
        </div>
        
        {/* ['<div className="jobinput">
            <label>Resume<span className="text-red-600 pr-[20px]">*</span></label>
            <input type='file' id='resume' onChange={handleChange}/>
        </div>'] */}
        <div className="jobinput">
            <label>Resume<span className="text-red-600 pr-[20px]">*</span></label>
            <input className="jobin w-[800px] " type='text' id="resume" onChange={handleChange} placeholder="Enter gdrive link of your resume"/>
        </div>
        <div className="jobinput">
            <label>Description<span className="text-red-600">*</span></label>
            <input className="jobin w-[800px] " type='text' id="jobdescription"onChange={handleChange} placeholder="About yourself and why do want this position"/>
        </div>
        <div className="jobsubmit">
            <button className="jobbut" onClick={()=>{handleSubmit()}}>Submit</button>
        </div>
        <div className="jobnote">
            <h4>Note : The application that you posted will be now seen to the respective HR and the datas are secured</h4>
        </div>
        </div>
    </>
  )
}
