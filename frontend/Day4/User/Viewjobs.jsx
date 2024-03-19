import React from 'react'
import Topbar from '../Topbar/Topbar'
import Sidebar from '../Topbar/Sidebar'
import '../User/Viewjobs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
const Viewjobs = () => {
    const navigate=useNavigate();
    const handlejob=()=>{
        navigate("/user/applyjob");
    }
  return (
    <div>
        <Topbar/>
        <Sidebar/>
         <div className='job-container'>
        <div className='job-card'>
             <h1 className='h1job' >React Developer</h1>
             <h6 className='h6job'>Sketch Brahma Technologies</h6>
             <p className='h6job'><FontAwesomeIcon icon={faLocationDot} /> Coimbatore,Tamil Nadu,India(On-site) <FontAwesomeIcon icon={faBox} /> 0-3years</p>
             <p className='pjob'> As a Web Developer, You will strive to create visually appealing sites that feature user-friendly design and clear navigation.</p>
             <ul className='uljob'>
               <li>Proficiency in front-end development languages such as HTML, CSS, and JavaScript.</li>
               <li>Familiarity with databases (e.g., MySQL, MongoDB).</li>
             </ul>
             <button className='but' onClick={handlejob}>Apply</button>
        </div>
        <div className='job-card'>
             <h1 className='h1job' >Data Engineer</h1>
             <h6 className='h6job'>searcs</h6>
             <p className='h6job'><FontAwesomeIcon icon={faLocationDot} /> Coimbatore,Tamil Nadu,India(On-site) <FontAwesomeIcon icon={faBox} /> 2-3years</p>
             <p className='pjob'> Data Engineer identifies the business problem and translates these to data services and engineering outcomes. You will deliver data solutions that empower better decision making and flexibility of your solution that scales to respond to broader business questions.</p>
             <button className='but' onClick={handlejob}>Apply</button>
        </div>
        <div className='job-card'>
            <h1 className='h1job' >Technical Lead</h1>
            <h6 className='h6job'>Nokia</h6>
             <p className='h6job'><FontAwesomeIcon icon={faLocationDot} /> Chennai,Tamil Nadu,India <FontAwesomeIcon icon={faBox} /> 1-2years</p>
             <p className='pjob'> Accountable for quality and accuracy of own output.Responsible for contribution to teamwork.Errors may have impact on function/project/customer.Usually delivers results with a short-term, operational focus and limited impact on others</p>
             <button className='but' onClick={handlejob}>Apply</button>
        </div>
        <div className='job-card'>
            <h1 className='h1job' >Software Analyst</h1>
            <h6 className='h6job'>Bechtel</h6>
             <p className='h6job'><FontAwesomeIcon icon={faLocationDot} /> Mumbai,Tamil Nadu,India <FontAwesomeIcon icon={faBox} /> 2-5years</p>
             <p className='pjob'>We are looking for Developer with React JS, Node JS and Typescript skills on industry standard applications The candidate must have good hands-on experience on required technologies and Proficient in client communication. s/he should also have good analytical and Communication Skills. s/he should also have good knowledge of handling enterprise applications.</p>
             <button className='but' onClick={handlejob}>Apply</button>
        </div>
        <div className='job-card'>
            <h1 className='h1job' >C Developert</h1>
            <h6 className='h6job'>Hitachi Ltd</h6>
             <p className='h6job'><FontAwesomeIcon icon={faLocationDot} /> Mumbai,Tamil Nadu,India <FontAwesomeIcon icon={faBox} /> 5-9years</p>
             <p className='pjob'> Bachelors Degree in Computer Science, MIS or equivalent professional experience.Programming Languages: C, C++, C# (Some experience).Experienced in C development (structures, pointers, memory handling, etc).Excellent analytical & debugging skillsClear understanding and experience on algorithms and data structuresExperience: 5+ Years in C development. 1+ year in C# development</p>
             <button className='but' onClick={handlejob}>Apply</button>
        </div>
        <div className='job-card'>
            <h1 className='h1job' >Android Developer</h1>
            <h6 className='h6job'>Mclaren Strategic Ventures India</h6>
             <p className='h6job'><FontAwesomeIcon icon={faLocationDot} /> Hyderabad,Chechhai,Pune <FontAwesomeIcon icon={faBox} /> 0-3years</p>
             <p className='pjob'> We are seeking a talented Intermediate Android Developer to join our dynamic team.As an Android Developer, you will be responsible for developing innovative mobile applications for the Android platform.You will collaborate with cross-functional teams to define, design, and ship new features, ensuring the best possible performance, quality, and responsiveness of the applications.</p>
             <button className='but' onClick={handlejob}>Apply</button>
        </div>
      </div>
    </div>
  )
}

export default Viewjobs