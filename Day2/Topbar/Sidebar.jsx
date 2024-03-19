// import React from 'react'
// import '../Topbar/Sidebar.css';
// import { useNavigate } from 'react-router-dom';
// const Sidebar = () => {
//     const navigate=useNavigate();
//     const viewjob=()=>{
//         navigate("/user/viewjob");
//     }
//     const viewapplyjob=()=>{
//         navigate("/user/applied");
//     }
//   return (
//     <div  className="sidebar d-flex-c">
//         <button style={{marginTop:"-170%"}} className="side">
//             Dashboard
//         </button>
//         <button style={{marginTop:"30%"}} className="side" onClick={viewjob}>
//             View Jobs
//         </button>
//         <button style={{marginTop:"30%"}} className="side" onClick={viewapplyjob}>
//             Applied Jobs
//         </button>
//     </div>
//   )
// }

// export default Sidebar

// import React, { useState } from 'react';
// import '../Topbar/Sidebar.css';
// import { useNavigate } from 'react-router-dom';

// const Sidebar = () => {
//     const navigate = useNavigate();
//     const [isOpen, setIsOpen] = useState(false); // State to track sidebar visibility

//     const toggleSidebar = () => {
//         setIsOpen(!isOpen); // Toggle sidebar visibility
//     };

//     const viewjob = () => {
//         navigate("/user/viewjob");
//     };

//     const viewapplyjob = () => {
//         navigate("/user/applied");
//     };

//     return (
//         <div className={`sidebar ${isOpen ? 'open' : ''} d-flex-c`}>
//             {/* Toggle button */}
//             <button className="toggle-btn" onClick={toggleSidebar}>
//                 |||
//             </button>
//             {/* Sidebar content */}
//             <button className="side" onClick={viewjob}>
//                 Dashboard
//             </button>
//             <button className="side" onClick={viewjob}>
//                 View Jobs
//             </button>
//             <button className="side" onClick={viewapplyjob}>
//                 Applied Jobs
//             </button>
//         </div>
//     );
// };

// export default Sidebar;

import React, { useState } from 'react';
import '../Topbar/Sidebar.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
const Sidebar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false); // State to track sidebar visibility

    const toggleSidebar = () => {
        setIsOpen(!isOpen); // Toggle sidebar visibility
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
            {/* Sidebar content */}
            {isOpen && (
                <div className="sidebar-content">
                    <div className="sidebar-button">
                    <button className="side" onClick={viewjob}>
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

