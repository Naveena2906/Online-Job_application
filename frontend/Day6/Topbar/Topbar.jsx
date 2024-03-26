import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faUserPen } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Topbar = () => {
  const navigate=useNavigate();
  const [showCategories, setShowCategories] = useState(false);
  const [showCategorie, setShowCategorie] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const handleopen = () => {
    setShowProfile(!showProfile);
};
  const handlelog=()=>
  {
    navigate("/l");
  }
  const handlesign=()=>{
    navigate("/s");
  }
  const handlecompany=()=>{
    navigate("/company");
  }
  const handleCategoryClick = (category) => {
    console.log(`Navigating to ${category} jobs page`);
    // You can navigate to the specific category jobs page here
  }

  const categories = ['IT Jobs', 'Sales Jobs ', 'Marketing Jobs','Date Science Jobs','HR Jobs','Engineering Jobs']; 
  const jobsInDemand = [ 'Fresher Jobs', 'MNC Jobs','Remote Jobs','Work from Home Jobs','Walk-in Jobs','Part-time Jobs'];
  const category = ['Unicorn', 'MNC', 'StartUp','Product Based','Internet']; 
  const collection = [ 'Top Companies', 'IT Companies','Fintech Companies','Sponsored Companies','Featured Companies'];
  const service = ['Text Resume', 'Visual Resume', 'Resume Critique']; 
  const services = [ 'Jobs4U', 'Priority Applicant','Contact Us'];
  return (
    <div >
        <div style={{display:"flex",alignItems:"center",padding:"1.3%",position:"fixed",color:"white",backgroundColor:"rgb(30, 30, 240)",top:"0px",left: "0px",zIndex:"1",width:"100%"}} >
           <div style={{color:"white",marginLeft:"50%",cursor:"pointer"}}  onClick={() => setShowCategories(!showCategories)}>Jobs </div>
           {showCategories && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: '49%',
            backgroundColor: '#fff',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            color:"black",
            zIndex: 2,
            display:"grid",
            width:"30%",
            gridTemplateColumns: '50% 50%',
          }}>
            <div style={{ padding: '5px' }}>
            <div style={{ fontWeight: 'bold' }}>Popular Categories</div>
               {service.map((category, index) => (
                <div
                   key={index}
                   style={{ cursor: 'pointer' }}
                  onClick={() => handleCategoryClick(category)}
                 >
                   {category}
                 </div>
               ))}
             </div>
         
            <div style={{padding: '5px' }}>
            <div style={{ fontWeight: 'bold' }}>Jobs in Demand</div>
            {services.map((category, index) => (
              <div
                key={index}
                style={{ cursor: 'pointer'}}
                onClick={() => handleCategoryClick(category) }
              >
                {category}
              </div>
            ))}
          </div>
          </div>
          
        )}

           <div style={{color:"white",marginLeft:"2%",cursor:"pointer"}} onClick={() => setShowCategorie(!showCategorie)}>Companies</div>

           {showCategorie && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: '49%',
            backgroundColor: '#fff',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            color:"black",
            zIndex: 2,
            display:"grid",
            width:"30%",
            gridTemplateColumns: '50% 50%',
          }}>
            <div style={{ padding: '5px' }}>
            <div style={{ fontWeight: 'bold' }}>Explore Categories</div>
               {category.map((category, index) => (
                <div
                   key={index}
                   style={{ cursor: 'pointer' }}
                  onClick={() => handleCategoryClick(category)}
                 >
                   {category}
                 </div>
               ))}
             </div>
         
            <div style={{padding: '5px' }}>
            <div style={{ fontWeight: 'bold' }}>Explore Collections</div>
            {collection.map((category, index) => (
              <div
                key={index}
                style={{ cursor: 'pointer', fontWeight: category === 'Jobs in Demand' ? 'bold' : 'normal'}}
                onClick={() => handleCategoryClick(category) }
              >
                {category}
              </div>
            ))}
          </div>
          </div>
          
        )}

           <div style={{color:"white",marginLeft:"2% ",cursor:"pointer"}} onClick={() => setShowCategory(!showCategory)}>Services</div>
           {showCategory && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: '49%',
            backgroundColor: '#fff',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            color:"black",
            zIndex: 2,
            display:"grid",
            width:"30%",
            gridTemplateColumns: '50% 50%',
          }}>
            <div style={{ padding: '5px' }}>
            <div style={{ fontWeight: 'bold' }}>Resume Writing</div>
               {service.map((category, index) => (
                <div
                   key={index}
                   style={{ cursor: 'pointer' }}
                  onClick={() => handleCategoryClick(category)}
                 >
                   {category}
                 </div>
               ))}
             </div>
         
            <div style={{padding: '5px' }}>
            <div style={{ fontWeight: 'bold' }}>Find Jobs</div>
            {services.map((category, index) => (
              <div
                key={index}
                style={{ cursor: 'pointer', fontWeight: category === 'Jobs in Demand' ? 'bold' : 'normal'}}
                onClick={() => handleCategoryClick(category) }
              >
                {category}
              </div>
            ))}
          </div>
          </div>
          
        )}

            <input style={{marginLeft:"3%",width:"8%",padding:"0.5%",borderRadius:"6px"}} placeholder='search jobs'/>
            <div style={{marginLeft:"20%",cursor:"pointer"}} onClick={handleopen}><FontAwesomeIcon icon={faCircleUser} style={{fontSize:"200%"}} /></div>
            {showProfile && (
                <div style={{
                    position: 'absolute',
                    // top: 'calc(100% + 10px)',
                    top:'85%',
                    left: '92%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#fff',
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    color: 'black',
                    zIndex: 2,
                    width: '200px',
                }}>
                    {/* Add your profile settings options */}
                    <div style={{ cursor: 'pointer', marginBottom: '5px',fontSize:"120%" }}><FontAwesomeIcon icon={faUserPen} /> Edit Profile</div>
                    <div style={{ cursor: 'pointer', marginBottom: '5px',fontSize:"120%"  }}><FontAwesomeIcon icon={faLock} /> Change Password</div>
                    <div style={{ cursor: 'pointer', marginBottom: '5px' ,fontSize:"120%" }}><FontAwesomeIcon icon={faRightFromBracket} /> Logout</div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Topbar