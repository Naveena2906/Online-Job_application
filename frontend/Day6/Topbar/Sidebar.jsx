
import React, { useState } from 'react';
import '../Topbar/Sidebar.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
const Sidebar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false); 

    const toggleSidebar = () => {
        setIsOpen(!isOpen); 
    };

    const viewjob = () => {
        navigate("/user/viewjob");
    };

    const viewapplyjob = () => {
        navigate("/user/applied");
    };
    const handleout=()=>{
        navigate("/l");
    }

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            {/* Toggle button */}
            <div className="toggle-btn" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} />
            </div>
            {isOpen && (
                <div className="sidebar-content">
                    <div className="sidebar-button">
                    <button className="side" onClick={()=>navigate("/user/dashboard")}>
                        Dashboard
                    </button><br></br>
                    </div>
                    <div className="sidebar-button">
                    <button className="side1" onClick={viewjob}>
                        View Jobs
                    </button><br></br>
                    </div>
                    <div className="sidebar-button">
                    <button className="side2" onClick={viewapplyjob}>
                        Applied Jobs
                    </button>
                    </div>
                    <div style={{marginTop:"80%",marginLeft:"30%"}}>
                    <button style={{fontWeight:"bold"}} onClick={handleout}> <FontAwesomeIcon icon={faArrowRightFromBracket} />
                        Logout
                    </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;

