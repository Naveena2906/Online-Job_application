// import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import SearchIcon from '@mui/icons-material/Search';
import '../Navbar/UserNavbar.css';
import { useNavigate } from 'react-router-dom';
export const AdminTopbar = () => {
    const navigate=useNavigate();
  return (
    <div className="usernavbar h-[70px] fixed top-0 w-[100%] bg-blue-600">
        <div className="usernavicon mt-[20px] ml-[30px]" style={{fontWeight:"bold"}}>
        <h3><span></span > CarrerCraft</h3>
        </div>
        <div className="usernavright mt-[15px] ml-[300px]">
            {/* <div className="navtext ml-[700px] mt-[5px]" onClick={()=>{navigate('/l')}}>
                <h3>Logout</h3>
            </div> */}
        </div>
    </div>
  )
}