import React from 'react'
import Topbar from '../Topbar/Topbar'
import Sidebar from '../Topbar/Sidebar'
import '../User/Viewjobs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { getadminjob } from '../service/api';
import PlaceIcon from '@mui/icons-material/Place';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';

const Viewjobs = () => {
    const navigate=useNavigate();
    const[open,setOpen]=useState(false);
    const [jobs, setJobs] = useState([]);
  const openbox=()=>{
    setOpen(!open);
  }

    const fetchJobs = async () => {
      try {
        const res = await getadminjob();
        setJobs(res.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };
  
    useEffect(() => {
      fetchJobs();
    }, []);
    const handlejob=()=>{
        navigate("/user/applyjob");
    }

    const[selectedFilters,setSelectedFilters]=useState([]);

    const handleFilterChange = (e) => {
      const { value, checked } = e.target;
      if (checked) {
        setSelectedFilters([...selectedFilters, value]);
      } else {
        setSelectedFilters(selectedFilters.filter(filter => filter !== value));
      }
    }
  
    const filteredjobs = jobs.filter(job => {
      if (selectedFilters.length === 0) 
        return true; 
      const jobTitleLowerCase = job.jobtitle.toLowerCase();
      const jobLocationLowerCase = job.joblocation.toLowerCase();
      const selectedFiltersLowerCase = selectedFilters.map(filter => filter.toLowerCase());
      return selectedFiltersLowerCase.includes(jobTitleLowerCase) || selectedFiltersLowerCase.includes(jobLocationLowerCase);
    });
  
  //   if(filteredjobs.length==0)
  //   {
  // return (
  //   <div>
  //       <Topbar/>
  //       <Sidebar/>
  //       <div className="jobsbody mt-[100px] ml-[300px]">
  //       <h2 className='text-2xl font-bold ml-[200px]'>The List of jobs that you have posted</h2>
  //       <div className="job-grid mt-[50px] " style={{width:"130%"}}>
  //         {jobs.map((job) => (
  //           <div key={job.id} className="job-card">
  //             <h1>{job.jobtitle}</h1>
  //             <h4>{job.orgname}</h4>
  //             <p><FontAwesomeIcon icon={faLocationDot} /> {job.joblocation} <FontAwesomeIcon icon={faBox} /> {job.jobexperience}</p>
  //             <h5><strong>Openings:</strong> {job.jobopenings}</h5>
  //             <h3>{job.jobdescription}</h3>
  //             <button className='but' onClick={handlejob}>Apply</button>
  //             <div className="job-actions">
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //       <div style={{marginLeft:"80%",color:"black",marginTop:"-20%",fontSize:"200%",fontWeight:"bold"}}>Filters</div>
  //       <div style={{marginLeft:"82%",color:"black",fontSize:"150%"}}>Jobs</div>
  //       <div style={{width:"10%",marginLeft:"82%"}}>
  //         <div><input type='checkbox' onChange={handleFilterChange}/><label>React Developer</label></div>
  //         <div><input type='checkbox' onChange={handleFilterChange}/><label>Data Engineer</label></div>
  //         <div><input type='checkbox' onChange={handleFilterChange}/><label>Technical Lead</label></div>
  //         <div><input type='checkbox' onChange={handleFilterChange}/><label>C</label></div>
  //         <div><input type='checkbox' onChange={handleFilterChange}/><label>Android Developer</label></div>
  //       <h3 className='text-2xl font-semibold'>Location</h3>
  //         <label><input type="checkbox" onChange={handleFilterChange}  value="Coimbatore"/>Coimbatore</label>
  //         <label><input type="checkbox" onChange={handleFilterChange} value="Bangalore"/>Bangalore</label>
  //         <label><input type="checkbox" onChange={handleFilterChange}  value="Chennai"/>Chennai</label>
  //         <label><input type="checkbox" onChange={handleFilterChange}  value="Hyderabad"/>Hyderabad</label>
  //         <label><input type="checkbox" onChange={handleFilterChange}  value="Mumbai"/>Mumbai</label>
  //       </div>

  //   </div>
    
  // )
  //  }


  if(filteredjobs.length == 0)
    {
      return(
      <>
        <Topbar/>
        <Sidebar/>
        <div style={{marginLeft:"80%",color:"black",marginTop:"14%",fontSize:"200%",fontWeight:"bold"}}>Filters</div>
         <div style={{marginLeft:"82%",color:"black",fontSize:"150%",fontWeight:"bold"}}>Role</div>
         <div style={{width:"10%",marginLeft:"82%"}}>
         <div><label><input type="checkbox" onChange={handleFilterChange}  value="Web Development"/>Web Development</label></div>
         <div> <label><input type="checkbox" onChange={handleFilterChange}  value="HR Executive"/>HR Executive</label></div>
         <div> <label><input type="checkbox" onChange={handleFilterChange}  value="Data Engineer" />Data Engineer</label></div>
         <div> <label><input type="checkbox" onChange={handleFilterChange}  value="Full Stack Developer"/>Full Stack Developer</label></div>
         <div> <label><input type="checkbox" onChange={handleFilterChange}  value="Cloud Architect" />Cloud Architect</label></div>
         <div> <label><input type="checkbox" onChange={handleFilterChange}  value="Python Developer"/> Python Developer </label></div>
         <h3 style={{width:"10%",fontWeight:"bold"}}>Location</h3>
           <div><label><input type="checkbox" onChange={handleFilterChange}  value="Coimbatore"/>Coimbatore</label></div>
           <div><label><input type="checkbox" onChange={handleFilterChange} value="Bangalore"/>Bangalore</label></div>
           <div><label><input type="checkbox" onChange={handleFilterChange}  value="Chennai"/>Chennai</label></div>
           <div><label><input type="checkbox" onChange={handleFilterChange}  value="Hyderabad"/>Hyderabad</label></div>
           <div><label><input type="checkbox" onChange={handleFilterChange}  value="Mumbai"/>Mumbai</label></div>
         </div>
        <div className="viewjobbody">
          <h1 className='text-2xl font-bold flex justify-center ' style={{marginTop:"-20%"}}>Find Your Dream Job now</h1>
        </div>
    </>
      )
    }
    else{

  return (
    <>
       <Topbar/>
       <Sidebar/>
       <div style={{marginLeft:"80%",color:"black",marginTop:"14%",fontSize:"200%",fontWeight:"bold"}}>Filters</div>
         <div style={{marginLeft:"82%",color:"black",fontSize:"150%",fontWeight:"bold"}}>Role</div>
         <div style={{width:"10%",marginLeft:"82%"}}>
        <div><label><input type="checkbox" onChange={handleFilterChange}  value="Web Development"/>Web Development</label></div>
         <div><label><input type="checkbox" onChange={handleFilterChange}  value="HR Executive"/>HR Executive</label></div>
         <div><label><input type="checkbox" onChange={handleFilterChange}  value="Data Engineer" />Data Engineer</label></div>
         <div><label><input type="checkbox" onChange={handleFilterChange}  value="Full Stack Developer"/>Full Stack Developer</label></div>
         <div><label><input type="checkbox" onChange={handleFilterChange}  value="Cloud Architect" />Cloud Architect</label></div>
         <div><label><input type="checkbox" onChange={handleFilterChange}  value="Python Developer"/> Python Developer </label></div>
         <h3 style={{width:"10%",fontWeight:"bold"}}>Location</h3>
           <div><label><input type="checkbox" onChange={handleFilterChange}  value="Coimbatore"/>Coimbatore</label></div>
           <div><label><input type="checkbox" onChange={handleFilterChange} value="Bangalore"/>Bangalore</label></div>
           <div><label><input type="checkbox" onChange={handleFilterChange}  value="Chennai"/>Chennai</label></div>
           <div><label><input type="checkbox" onChange={handleFilterChange}  value="Hyderabad"/>Hyderabad</label></div>
           <div><label><input type="checkbox" onChange={handleFilterChange}  value="Mumbai"/>Mumbai</label></div>
         </div>
          <div className="jobsbody mt-[-450px] ml-[300px]">
         <h2 className='text-2xl font-bold ml-[200px]'>The List of jobs that you have posted</h2>
         <div className="job-grid mt-[50px] " style={{width:"100%"}}>
           {filteredjobs.map((job) => (
             <div key={job.id} onClick={openbox} className="job-card">
               <h1 >{job.jobtitle}</h1>
               <h4>{job.orgname}</h4>
               <p><FontAwesomeIcon icon={faLocationDot} /> {job.joblocation} <FontAwesomeIcon icon={faBox} /> {job.jobexperience}</p>
               <h5><strong>Openings:</strong> {job.jobopenings}</h5>
               <h3>{job.jobdescription}</h3>
               <button className='but' onClick={handlejob}>Apply</button>
               <div className="job-actions">
               </div>
             </div>
         ))}
       </div>
     </div>
    </>
  )
}
}

export default Viewjobs








