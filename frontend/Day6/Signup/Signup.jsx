import React, { useState } from 'react'
// import slogo from '../Image/Job offers-amico.png';
import slogo from '../Image/Developer activity-bro.png';
import '../Signup/Signup.css';
import { useNavigate } from 'react-router-dom';
import Topbar from '../Topbar/Topbar';
import { userregister } from '../service/api';

const Signup = () => {
  const navigate=useNavigate();
  const [signup,setSignup]=useState({
    username:'',email:'',password:'',mobilenum:'',role:'USER'
  })
  const handleChange=(e)=>{
    e.preventDefault();
    setSignup({...signup,[e.target.id]:e.target.value})
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const res=await userregister(signup);
    console.log(res.data);
    // if((res.data)=="User registeration completed" && (res.status)=="200")
    //     {
          navigate("/l");
        // }
      }
  const handlelog=()=>
  {
    navigate("/l");
  }
  return (

    <div className='signuptotal'>
        <img style={{width:"38%",marginLeft:"-500px",marginTop:"2%"}} src={slogo}/>
      <div className='Signform' >
            <div className='top'>Sign up and apply for free</div>
         <div className='Signupbody' >
            <div className='signin'>
              <input className='sign' id='username' onChange={handleChange} placeholder='user_name' style={{padding:"4px"}}/>
            </div>
            {/* <div className='signin'>
              <input className='sign' placeholder='last_name' style={{padding:"4px"}}/>
            </div> */}
            <div className='signin'>
              <input className='sign' id='email' onChange={handleChange} placeholder='email' type='text'/>
            </div>
            <div className='signin'>
              <input className='sign' id='password' onChange={handleChange} placeholder='password' type='password'/>
            </div>
            <div className='signin'>
              <input className='sign' id='mobilenum' onChange={handleChange} placeholder='mobile_num' type='text'/>
            </div>
            <div style={{padding:"1%"}}>
              <input type='radio' name='radioGroup'  style={{marginLeft:"1%",cursor:"pointer"}}/><label>Student</label>
              <input type='radio' name='radioGroup'  style={{marginLeft:"5%",cursor:"pointer"}}/><label>Employee</label>
              {/* <input type='radio' name='radioGroup'  style={{marginLeft:"5%",cursor:"pointer"}}/><label>HR</label> */}
            </div>
          <div className="checkbox-container" style={{marginLeft:"-14%",width:"150%",padding:"10%"}}>
            <input type="checkbox" id="terms" name="terms"/> 
           {/* checked={isChecked}
          onChange={(event) => setIsChecked(event.target.checked)}  */}

            <label htmlFor="terms">By signing up,you agree to our Terms and Conditions</label>
          </div>
        <button className='but-sign' onClick={handleSubmit} >SignUp</button>
        <div  style={{marginLeft:"20%",padding:"2%",cursor:"pointer"}} onClick={handlelog}>Already Registered? Login</div>
        </div>
    </div>
     </div>
  )
}

export default Signup
