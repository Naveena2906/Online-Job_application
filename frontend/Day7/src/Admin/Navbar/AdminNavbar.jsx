
import '../Navbar/AdminNavbar.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
export const AdminNavbar = () => {
    const navigate=useNavigate();
    const [isOpen, setIsOpen] = useState(false); 
    const toggleSidebar = () => {
        setIsOpen(!isOpen); 
    };
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
         <div className="toggle-btn" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} />
            </div>
        {isOpen && (
                <div className="sidebar-content">
                    <div className="sidebar-button">
                      <button className="side" onClick={()=>navigate("/user/dashboard")}>
                        Dashboard
                      </button>
                    </div>
                    <div className='sidebar-button'>
                      <button className="side1"onClick={()=>{navigate('/addjob')}}>Add Jobs</button>
                    </div>
                    <div className='sidebar-button'>
                       <button className='side2' onClick={()=>{navigate('/application')}}> Applications</button>
                    </div>
                    <div className='sidebar-button'>
                       <button  className='side2' onClick={()=>{navigate('/jobs')}}>Jobs</button>
                   </div>
                    <div className='sidebar-button'>
                       <button  className='side2' onClick={()=>{navigate('/review')}}>UserReview</button>
                   </div>
                  <div className='sidebar-button'>
                       <button className='side2' onClick={()=>{navigate('/l')}}>Logout</button>
                  </div>
                </div>
            )}
        </div>
  )
}