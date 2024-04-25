// import React from 'react'

import { useNavigate } from "react-router-dom"
import { UserNavbar } from "../../Navbar/UserNavbar"
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import './UserHome.css'
import homeimage from "../../assets/Job hunt-pana.png"
import homeimage2 from "../../assets/Cross-platform software-amico.png"
import { useEffect, useState } from "react"
import { getapplybyid, getjob, getuserdatabyid } from "../../Service/api"
import slogo from '../../Image/Account-rafiki.png'
import slogo1 from '../../Image/Interview-pana.png';
import slogo2 from '../../Image/Novelist writing-rafiki.png';

export const UserHome = () => {
  const navigate=useNavigate();
  const [totalJobs, setTotalJobs] = useState(0);
  const [totalCompany, setTotalCompany] = useState(0);
  const [totalApplication, setTotalApplication] = useState(0);
  const privacy = () => {
    navigate("/privacy");
  };
 const faq = () => {
    navigate("/faq");
  };
  const terms=()=>{
    navigate("/terms");
  }
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobRes = await getjob();
        const totalJobCount = jobRes.data.length;
        setTotalJobs(totalJobCount);
        const companies=new Set();
        for(var i=0;i<totalJobCount;i++)
        {
          companies.add(jobRes.data[i].orgname);
        }
        setTotalCompany(companies.size);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    }
    fetchJobs();
  }, []);
  const username=localStorage.getItem('username');
  useEffect(() => {
    const fetchJobApp = async () => {
      try {
        const userid=localStorage.getItem('userid')
        const jobApp = await getuserdatabyid(userid);
        const totalJobCount = jobApp.data.applications.length;
        setTotalApplication(totalJobCount);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    }
    fetchJobApp();
  }, []);
  return (
    <>
    <UserNavbar/>
    <div className="userhomebody">
      <div className="userhomecontent">
        <h1 className="text-2xl font-bold ml-[300px]">Welcome, {username} !</h1>
      </div>
      <div className="userhomebox ml-[-200px] mt-[50px]">
        <div className="total-jobs cursor-pointer " onClick={()=>{navigate('/viewjobs')}}>
          <h2 className="text-2xl font-semibold p-5">Total Jobs:</h2>
          <h3  className="text-2xl font-bold flex justify-center">{totalJobs}</h3>
        </div>
        <div className="totalapplied cursor-pointer"  onClick={()=>{navigate('/appliedjobs')}}>
          <h2 className="text-2xl font-semibold p-5">Jobs Applied:</h2>
          <h3 className="text-2xl font-bold flex justify-center">{totalApplication}</h3>
        </div>
        <div className="totalapplied cursor-pointer">
          <h2 className="text-2xl font-semibold p-5">Companies:</h2>
          <h3 className="text-2xl font-bold flex justify-center">{totalCompany}</h3>
        </div>
      </div>
      <div className="userhomeletter mt-[40px] ml-20">
        <h2 className="text-3xl font-bold font-mono">"Your talent determines what you can do."</h2>
        <h2 className="text-3xl font-bold font-serif mt-[30px] ml-[150px]">Explore the relevant Jobs</h2>
        <button className= " userhomebut1 mt-[40px] ml-[280px]" onClick={()=>{navigate('/viewjobs')}}>Explore </button>
      </div>
      
      <div style={{marginTop:"7%",border:"1px solid white", width:"80%"}}>
      {/* <div style={{backgroundColor:"white", height:"20vh", padding:"1%", fontWeight:"bold", fontSize:"22px", borderTopLeftRadius: "20px", borderTopRightRadius: "20px"}}>Services</div> */}
      <div style={{display: "flex", flexDirection: "row",cursor:"pointer"}}>
         <div style={{marginLeft:"-1%",marginTop:"-2%"}}>
            <div style={{flex: "1", display: "flex", alignItems: "center",borderRadius:"10px 10px 0 0px", justifyContent: "center", border:"1px solid", flexDirection:"row",marginTop:"-6%",width:"150%",height:"20vh"}}>
              <img style={{width:"56%", height:"15vh"}} src={slogo} alt="Service Logo" />
            </div>
            <div style={{border:"1px solid black", borderBottomRightRadius: "10px", borderBottomLeftRadius: "10px",height:"17vh",width:"150%",fontWeight:"bold"}}><div style={{marginLeft:"2%",padding:"3%",fontSize:"20px"}}>Premium Membership</div>
            <p style={{fontWeight:"normal",marginLeft:"4%",padding:"0.5%",fontSize:"17px"}}>Increase your Chances of getting Shortlisted</p></div>
         </div>
         <div style={{marginLeft:"20%",marginTop:"-2%"}}>
           <div style={{flex: "1", display: "flex", alignItems: "center",borderRadius:"10px 10px 0 0px", justifyContent: "center", border:"1px solid", flexDirection:"row",marginTop:"-6%",width:"110%",height:"20vh"}}>
             <img style={{width:"59%", height:"15vh"}} src={slogo2} alt="Service Logo" />
           </div>
           <div style={{border:"1px solid black",fontWeight:"bold", borderBottomRightRadius: "10px", borderBottomLeftRadius: "10px",height:"17vh",width:"110%"}}><div style={{marginLeft:"2%",padding:"3%",fontSize:"20px"}}>Placement Paper</div>
           <p style={{fontWeight:"normal",marginLeft:"4%",padding:"0.5%",fontSize:"17px"}}>Here is the chance you can learn,Practice & improve your Skills.</p></div>
         </div>
      <div style={{marginLeft:"12%",marginTop:"-2%"}}>
        <div style={{flex: "1", display: "flex", alignItems: "center",borderRadius:"10px 10px 0 0px", border:"1px solid", flexDirection:"row",marginTop:"-6%",width:"120%",height:"20vh"}}>
          <img style={{width:"54%", height:"17vh",marginLeft:"20%"}} src={slogo1} alt="Service Logo" />
        </div>
        <div style={{border:"1px solid black", fontWeight:"bold",borderBottomRightRadius: "10px", borderBottomLeftRadius: "10px",height:"17vh",width:"120%"}}><div style={{marginLeft:"2%",padding:"3%",fontSize:"20px"}}>Interview Grooming</div>
        <p style={{fontWeight:"normal",marginLeft:"6%",fontSize:"17px"}}>How to attend an interview,confidently? is there a secret?</p></div>
      </div>
      </div>
      </div>


      <div style={{marginTop:"5%",width:"90%"}}>
           <div style={{fontWeight:"bold",fontSize:"25px"}}>What makes CareerCraft better?</div>
        <div style={{display:"flex",flexDirection:"row",marginTop:"3%"}}>
        <div style={{marginLeft:"1%"}}>
          <div><img src="https://resources.workindia.in/employer/assets/illustrations/landing/simple-hiring.svg"/></div>
          <div style={{marginLeft:"22%",fontWeight:"bold",marginTop:"2%",fontSize:"20px"}}>Simple Hiring</div>
          <p style={{width:"60%",marginLeft:"10%"}}>Recieve calls from qualified candidates in under an hour of posting a job</p>
        </div>
        <div style={{marginLeft:"1%"}}>
          <div><img src="https://resources.workindia.in/employer/assets/illustrations/landing/intelligent-recommendations.svg"/></div>
          <div style={{marginLeft:"3%",fontWeight:"bold",marginTop:"2%",fontSize:"20px"}}>Intelligent Recommendations</div>
          <p style={{width:"60%",marginLeft:"10%"}}>Only the best candidates are recommended by our ML as per your requirement</p>
        </div>
        <div style={{marginLeft:"-1%"}}>
          <div><img src="https://resources.workindia.in/employer/assets/illustrations/landing/priority-support.svg"/></div>
          <div style={{marginLeft:"6%",fontWeight:"bold",marginTop:"4%",fontSize:"19px"}}>Priority Customer Support</div>
          <p style={{width:"60%",marginLeft:"13%"}}>Prioritized customer support for the paid plan users</p>
        </div>
        </div>
      </div>

    <div style={{marginTop:"5%"}}>
      <div style={{fontWeight:"bold",fontSize:"25px",marginLeft:"15%"}}>What can CareerCraft help with you?</div>
      <div style={{marginTop:"3%",fontSize:"20px",color:"blue"}}>Find your next job, effortlessely</div>
      <div style={{color:"blue"}}>______</div>
      <p style={{marginTop:"1%"}}>You deserve better than spammy job boards.</p>
      <p style={{marginTop:"1%",width:"55%"}}>In less than 5 mins, get matched to just the right opportunities you want. Connect with the actual hiring teams and get super fast responses back.</p>
      <button style={{color:"white",border:"1px solid blue",backgroundColor:"blue",width:"12%",borderRadius:"10px",padding:"0.5%",marginTop:"2%"}}>find jobs now</button>
      <button style={{color:"blue",border:"1px solid blue",width:"12%",borderRadius:"24px",padding:"0.5%",marginTop:"2%",marginLeft:"3%",marginBottom:"7%"}}>View jobs</button>
    </div>
    </div>
    <div style={{backgroundColor:"white",border:"1px solid black",height:"25vh"}}>
         <h2 style={{color:"black",marginLeft:"12%",padding:"1%"}}>Contact with Us</h2>        
         <div style={{width:"6%",color:"black",marginLeft:"13%",cursor:"pointer"}}><Link to={'https://www.instagram.com/accounts/login/?next=https%3A%2F%2Faccountscenter.instagram.com%2F%3F__coig_login%3D1'} style={{color:"black"}}><InstagramIcon/></Link></div>
         <div style={{width:"6%",color:"black",marginLeft:"15.6%",marginTop:"-1.8%",cursor:"pointer"}}><Link to={'https://www.facebook.com/login.php'} style={{color:"black"}}><FacebookIcon/></Link></div>
         <div style={{width:"6%",color:"black",marginLeft:"19%",marginTop:"-1.7%",cursor:"pointer"}}><Link to={'https://twitter.com/i/flow/login'} style={{color:"black"}}><TwitterIcon/></Link></div>
         <div style={{color:"black",marginTop:"4%"}}>
          <div style={{marginTop:"2%",marginLeft:"28%"}}>CareerCraft</div>
          <div style={{marginLeft:"35%",width:"28%",marginTop:"-2.5%"}}>All trademarks are the property of their respective owners All rights reserved © 2024 CareerCraft (India) Ltd.</div></div>
         <div style={{color:"black",marginTop:"-10.7%",marginLeft:"60%",cursor:"pointer"}} onClick={privacy}>Privacy Policy</div>
         <div style={{color:"black",marginTop:"-1.7%",marginLeft:"68%"}}>|</div>
         <div style={{color:"black",marginTop:"-1.5%",marginLeft:"70%",cursor:"pointer"}} onClick={terms}>Terms and Condition</div>
         <div style={{color:"black",marginTop:"-1.7%",marginLeft:"81%"}}>|</div>
         <div style={{color:"black",marginLeft:"83%",marginTop:"-1.5%",cursor:"pointer"}} onClick={faq}>FAQ's</div>
         </div>
    
    </>
  )
}
