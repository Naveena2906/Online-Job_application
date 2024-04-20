import React from 'react'
import { useState } from 'react';
// import slogo from '../Image/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg';
import '../Login/Login.css';
import { useNavigate } from 'react-router-dom';
import { userlogin } from '../service/api';
const Login = () => {
  const navigate=useNavigate();
  const [login,setLogin]=useState({
    username:'',password:''
  })
  const handleChange=(e)=>{
    e.preventDefault();
    setLogin({...login,[e.target.id]:e.target.value});
  }
  const handlesubmit=async(e)=>{
    e.preventDefault();
    const res=await userlogin(login);
    console.log(res.data);
        console.log(res.status);
        console.log(res.data.role);
        localStorage.setItem('Token',res.data.token);
        localStorage.setItem('username',res.data.username);
        localStorage.setItem('useremail',res.data.email);
        localStorage.setItem('userid',res.data.uid);
        localStorage.setItem('userrole',res.data.role);
        localStorage.setItem('usermobile',res.data.mobilenum);
    // if(login.email==="naveena@gmail.com" && login.password==="naveena")
    // {
    //   navigate('/admin/home')
    // }
    // else
    // {
      navigate('/user/dashboard')
    // }
  }
  return (
    <div className='loginup'>
        {/* <img style={{width:"38%",marginLeft:"170px",marginTop:"10%"}} src={slogo}/> */}
        <div className='loginform' >
         <div className='loginbody' >
            <div style={{marginLeft:"30%",padding:"3%",fontSize:"200%"}}><label>Login</label></div>
            <div className='login'><input className='log' placeholder='username' id='username' onChange={handleChange} type='text'/></div>
            <div className='login'><input className='log' placeholder='password' id='password' onChange={handleChange} type='password'/></div>
           <button style={{marginLeft:"6%",padding:"4%",border:"2px solid black",marginBottom:"6%",width:"90%",borderRadius:"6px",backgroundColor:"rgb(73, 73, 245)"}} onClick={handlesubmit}>Login</button>
        </div>
        </div>
    </div>
  )
}

export default Login