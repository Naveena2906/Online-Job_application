import React from 'react'
import { useNavigate } from 'react-router-dom'

const Topbar = () => {
  const navigate=useNavigate();
  const handlelog=()=>
  {
    navigate("/l");
  }
  const handlesign=()=>{
    navigate("/s");
  }
  return (
    <div >
        <div style={{display:"flex",alignItems:"center",padding:"1.3%",position:"fixed",color:"white",backgroundColor:"rgb(30, 30, 240)",top:"0px",left: "0px",zIndex:"1",width:"100%"}}>
           <div style={{color:"white",marginLeft:"50%"}}>Jobs</div>
           <div style={{color:"white",marginLeft:"2%"}}>Companies</div>
           <div style={{color:"white",marginLeft:"2% "}}>Services</div>
           <div style={{color:"white",marginLeft:"22%",cursor:"pointer"}} onClick={handlelog}>Login</div>
           <div style={{color:"white",marginLeft:"2%",cursor:"pointer"}} onClick={handlesign}>Sign up</div>
        </div>
    </div>
  )
}

export default Topbar