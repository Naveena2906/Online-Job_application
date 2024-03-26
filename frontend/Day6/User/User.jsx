import React from 'react'
import Topbar from '../Topbar/Topbar'
import Sidebar from '../Topbar/Sidebar'

const User = () => {
  return (
    <div>
        {/* cfvgbhjk */}
        <Topbar />
        <Sidebar/>
        <div style={{marginTop:"10%",marginLeft:"38%",fontWeight:"bold",fontSize:"40px"}}>Welcome!</div>
        <div style={{border:"1px solid black",width:"59%",marginLeft:"24%",height:"60vh",borderRadius:"27px",backgroundColor:"white"}}>
            <div style={{border:"1px solid black",width:"46%",marginLeft:"5%",marginTop:"5%",height:"18vh",borderRadius:"35px",height:"20vh"}}>
                  <div style={{fontSize:"200%",marginLeft:"13%"}}>Explore oportunities</div>
                  <p style={{marginLeft:"4%"}}>Find the latest job openings in various industries and roles.</p>
            </div>
            <div style={{border:"1px solid black",width:"43%",marginLeft:"54%",marginTop:"-16%",height:"18vh",borderRadius:"35px",height:"20vh"}}>
                 <div style={{fontSize:"200%",marginLeft:"13%"}}>Recommended Jobs</div>
                 <p style={{marginLeft:"4%"}}>Find the latest job openings in various industries and roles.</p>
            </div>
            <div style={{border:"1px solid black",width:"46%",marginLeft:"5%",marginTop:"5%",height:"18vh",borderRadius:"35px",height:"20vh"}}>
                <div style={{fontSize:"200%",marginLeft:"13%"}}>Recent Activities</div>
                <p style={{marginLeft:"4%"}}>Find the latest job openings in various industries and roles.</p>
            </div>
            <div style={{border:"1px solid black",width:"43%",marginLeft:"54%",marginTop:"-16%",height:"18vh",borderRadius:"35px",height:"20vh"}}>
            <div style={{fontSize:"200%",marginLeft:"13%"}}>Recent Activities</div>
            <p style={{marginLeft:"4%"}}>Find the latest job openings in various industries and roles.</p>
            </div>
        </div>
    </div>
  )
}

export default User