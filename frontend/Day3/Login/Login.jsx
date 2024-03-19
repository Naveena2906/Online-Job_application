import React from 'react'
// import slogo from '../Image/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg';
import '../Login/Login.css';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate=useNavigate();
  const handlesubmit=()=>{
    navigate("/user/dashboard");
  }
  return (
    <div className='loginup'>
        {/* <img style={{width:"38%",marginLeft:"170px",marginTop:"10%"}} src={slogo}/> */}
        <div className='loginform' >
         <div className='loginbody' >
            <div style={{marginLeft:"30%",padding:"3%",fontSize:"200%"}}><label>Login</label></div>
            <div className='login'><input className='log' placeholder='email' type='text'/></div>
            <div className='login'><input className='log' placeholder='password' type='text'/></div>
           <button style={{marginLeft:"6%",padding:"4%",border:"2px solid black",marginBottom:"6%",width:"90%",borderRadius:"6px",backgroundColor:"rgb(73, 73, 245)"}} onClick={handlesubmit}>Login</button>
        </div>
        </div>
    </div>
  )
}

export default Login