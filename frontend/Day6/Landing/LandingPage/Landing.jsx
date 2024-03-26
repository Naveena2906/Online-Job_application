import React ,{useRef}from 'react'
import Topbar from '../../Topbar/Topbar'
// import slogo from '../Image/landimage.webp';
import '../LandingPage/Landing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
// import Business from '../Business/Business';
const Landing = () => {
  const navigate=useNavigate();
  const handlelog=()=>{
    navigate("/l");
  }
  const handlesign=()=>{
    navigate("/s");
  }
  const privacy = () => {
    navigate("/privacy");
  };
 const faq = () => {
    navigate("/f");
  };
  const terms=()=>{
    navigate("/t");
  }

  return (
    <div className='landbody'>
         {/* <Topbar /> */}
         {/* <div>
         </div> */}
      {/* <img style={{width:"50%",marginLeft:"60px",marginTop:"10%"}} src={slogo}/> */}
      <div>
      </div>
        <div className='land'>
          <div >
            <h1 style={{color:"white",fontSize:"200%"}}>Career<span style={{color:"blue"}}>Craft</span></h1>
        <h4 style={{color:"white",marginLeft:"60%",marginTop:"-2.5%"}}>Job</h4>
        <h4 style={{color:"white",marginTop:"-1.5%",marginLeft:"63%"}}>Companies</h4>
        <h4 style={{color:"white",marginTop:"-1.5%",marginLeft:"70%"}}>Services</h4>
        <h4 style={{color:"white",marginTop:"-1.5%",marginLeft:"80%",cursor:"pointer"}} onClick={handlelog}>Login</h4>
        <h4 style={{color:"white",marginTop:"-1.5%",marginLeft:"85%",cursor:"pointer"}} onClick={handlesign}>Signup</h4>
        </div>
        <h1 className='land-title'>FIND YOUR <br/><span>PERFECT JOB</span><br/>EASILY</h1>
        </div>
        {/* <div className='search-wrapper'>
          <div className='search-box'>
            <div className='search-card'> 
                <input placeholder='Job Title' className='search-input' style={{padding:"1%"}}/>
                <button className='search-but'>Search</button>
            </div>
          </div>
        </div> */}
        
        <div className='top-companies' style={{marginTop:"5%"}}>
        <h2 className='top-companies-heading' style={{marginLeft:'40%',fontWeight:"bold"}}>Top Companies Hiring</h2>
        <div className='top-companies-grid'>
          <div style={{width:"40%",height:"20vh",marginLeft:"54%",cursor:"pointer",borderRadius:"30px"}}><img src='https://tse2.mm.bing.net/th?id=OIP.YUe3v7q48jOwGNK792aFIQHaFu&pid=Api&P=0&h=180' style={{width:"20%",marginLeft:"40%"}}/><h4 style={{padding:"5%"}}> Bechtel</h4> 
          <div style={{marginLeft:"-5%"}}><FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />4.1  | 674 reviews</div>
          </div>
          <div style={{width:"40%",marginLeft:"20%",cursor:"pointer",borderRadius:"30px"}}><img src='https://tse2.mm.bing.net/th?id=OIP.tDAdUl2IlFkGgZ06q-qNZgHaHZ&pid=Api&P=0&h=180' style={{width:"20%",marginLeft:"40%"}}/><h4 style={{padding:"5%"}}>Micromax</h4>
          <div style={{marginLeft:"-5%"}}><FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}}/>3.7  | 617 reviews</div>
          </div>
          <div style={{width:"40%",marginLeft:"-7%",cursor:"pointer",borderRadius:"30px"}}><img src='https://tse4.mm.bing.net/th?id=OIP.L_pGUTPxVH923fM5YWe_YAAAAA&pid=Api&P=0&h=180' style={{width:"20%",marginLeft:"40%"}}/><h4 style={{padding:"5%"}}> Zydex</h4>
          <div style={{marginLeft:"-5%"}}><FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}}/>4.1  | 252 reviews</div>
          </div>
        </div>
      </div>
      <div className='top-companies1'>
         <h2 className='top-companies-heading1' style={{marginLeft:"36%",padding:"2%",fontWeight:"bold"}}>Stay Updated With out blogs</h2>
         <div className='top-companies-grid1' >
            <div style={{borderRadius:"15px"}}>
                 <div style={{marginLeft:"-52%",color:"blue",padding:"3%",fontSize:"25px"}}>1</div>
                <div style={{marginLeft:"-7%",fontWeight:"bold",padding:"5%",fontSize:"20px"}}> Create Your Free Account</div>
                 <div style={{marginLeft:"15%",width:"67%",textAlign:"left",fontSize:"18px"}}>All you need is your email address to create an account and start building your job post. </div>
            </div>
            <div style={{borderRadius:"15px"}}>
                 <div style={{marginLeft:"-52%",color:"blue",padding:"3%",fontSize:"25px"}}>2</div>
                <div style={{marginLeft:"-27%",fontWeight:"bold",padding:"5%",fontSize:"20px"}}> Build Your Career</div>
                 <div style={{marginLeft:"15%",width:"67%",textAlign:"left",fontSize:"18px"}}>All you need is your email address to create an account and start building your job post. </div>
            </div>
            <div style={{borderRadius:"15px"}}>
                 <div style={{marginLeft:"-52%",color:"blue",padding:"3%",fontSize:"25px"}}>3</div>
                <div style={{marginLeft:"-37%",fontWeight:"bold",padding:"5%",fontSize:"20px"}}> Apply for Job</div>
                 <div style={{marginLeft:"15%",width:"67%",textAlign:"left",fontSize:"18px"}}>After you apply your job, use our state-of-the-art tools to help you find dream talent. </div>
            </div>
        </div>
      </div>

      <div style={{marginLeft:"20%",padding:"4%"}}>
        <div style={{fontWeight:"bold",fontSize:"40px",width:"75%"}}>Save time and effort in your recruitment journey.</div>
        <div style={{padding:"4%",marginLeft:"-4.6%",width:"85%",fontSize:"25px"}}>Finding the best fit for the job shouldn’t be a full-time job. Indeed’s simple and powerful tools let you source, screen and hire faster.</div>
      </div>

      <div style={{width:"67%",marginLeft:"24%",height:"60vh",borderRadius:"27px",backgroundColor:"white",marginTop:"-5%",padding:"0.5%",marginLeft:"20%",boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)"}}>
            <div style={{width:"46%",marginLeft:"5%",marginTop:"5%",height:"18vh",borderRadius:"35px",height:"20vh"}}>
                 <img src='https://d34k7i5akwhqbd.cloudfront.net/allspark/static/images/visibility-aurora-01633a.svg' style={{width:"14%"}}/>
                  <div style={{fontSize:"200%",marginLeft:"19%",marginTop:"-17%"}}>Increased Visibility</div>
                  <p style={{marginLeft:"20%",width:"60%"}}>Find the latest job openings in various industries and roles.</p>
            </div>
            <div style={{width:"46%",marginLeft:"54%",marginTop:"-16%",height:"18vh",borderRadius:"35px",height:"20vh"}}>
                 <img src='https://d34k7i5akwhqbd.cloudfront.net/allspark/static/images/quality-aurora-6ce509.svg' style={{width:"14%"}}/>
                 <div style={{fontSize:"200%",marginLeft:"18%",marginTop:"-17%",width:"95%"}}>Attract Relevant Applicants</div>
                 <p style={{marginLeft:"19.5%"}}>Find the latest job openings in various industries and roles.</p>
            </div>
            <div style={{width:"46%",marginLeft:"5%",marginTop:"5%",height:"18vh",borderRadius:"35px",height:"20vh"}}>
              <img src='https://d34k7i5akwhqbd.cloudfront.net/allspark/static/images/find-aurora-785c22.svg' style={{width:"14%"}}/>
                <div style={{fontSize:"200%",marginLeft:"18%",marginTop:"-14%"}}>Verify Skills</div>
                <p style={{marginLeft:"19%"}}>Find the latest job openings in various industries and roles.</p>
            </div>
            <div style={{width:"43%",marginLeft:"54%",marginTop:"-16%",height:"18vh",borderRadius:"35px",height:"20vh"}}>
              <img src='https://d34k7i5akwhqbd.cloudfront.net/allspark/static/images/organize-aurora-dd7191.svg' style={{width:"14%"}}/>
            <div style={{fontSize:"200%",marginLeft:"18%",marginTop:"-15%"}}>Organized Recruiter</div>
            <p style={{marginLeft:"19%"}}>Find the latest job openings in various industries and roles.</p>
            </div>
            </div>

       <div className="h">
          <div className="h5">Jobs For You</div>
          <div className='down2'>
          <div className="h6">
            <img src="https://d2zxo3dbbqu73w.cloudfront.net/fwasset-live/39f7eef1/images/home-page/it_software.svg" />
          </div>
          <div className="h7">
            <img src="https://d2zxo3dbbqu73w.cloudfront.net/fwasset-live/39f7eef1/images/home-page/work_from_home.svg" />
          </div>
          <div className="h8">
            <img src="https://d2zxo3dbbqu73w.cloudfront.net/fwasset-live/39f7eef1/images/home-page/gov_jobs.svg" />
          </div>
          <div className="h9">
            <img src="https://d2zxo3dbbqu73w.cloudfront.net/fwasset-live/39f7eef1/images/home-page/part_time.svg" />
          </div>
          </div>
          <div className="down3">
          <div className="h10">Software</div>
          <div className="h11">Work from home</div>
          <div className="h12">Govt Jobs</div>
          <div className="h13">Part Time job</div>
          </div>
          <div className="h14">Feature Companies</div>
          
          <div className="h15">
            <img src="https://d2zxo3dbbqu73w.cloudfront.net/fwasset-live/39f7eef1/images/home-page/top_company_img_2.png" />
          </div>
        </div>

         <div style={{backgroundColor:"black",border:"2px solid black",height:"25vh"}}>
         <h2 style={{color:"white",marginLeft:"12%",padding:"1%"}}>Contact with Us</h2>        
         <div style={{width:"6%",color:"white",marginLeft:"13%",cursor:"pointer"}}><Link to={'https://www.instagram.com/accounts/login/?next=https%3A%2F%2Faccountscenter.instagram.com%2F%3F__coig_login%3D1'} style={{color:"white"}}><InstagramIcon/></Link></div>
         <div style={{width:"6%",color:"white",marginLeft:"15.6%",marginTop:"-1.8%",cursor:"pointer"}}><Link to={'https://www.facebook.com/login.php'} style={{color:"white"}}><FacebookIcon/></Link></div>
         <div style={{width:"6%",color:"white",marginLeft:"19%",marginTop:"-1.7%",cursor:"pointer"}}><Link to={'https://twitter.com/i/flow/login'} style={{color:"white"}}><TwitterIcon/></Link></div>
         <div style={{color:"white",marginTop:"4%"}}>
          <div style={{marginTop:"2%",marginLeft:"23%"}}>CareerCraft</div>
          <div style={{marginLeft:"30%",width:"28%",marginTop:"-2.5%"}}>All trademarks are the property of their respective owners All rights reserved © 2024 CareerCraft (India) Ltd.</div></div>
         <div style={{color:"white",marginTop:"-10.7%",marginLeft:"60%",cursor:"pointer"}} onClick={privacy}>Privacy Policy</div>
         <div style={{color:"white",marginTop:"-1.7%",marginLeft:"68%"}}>|</div>
         <div style={{color:"white",marginTop:"-1.5%",marginLeft:"70%",cursor:"pointer"}} onClick={terms}>Terms and Condition</div>
         <div style={{color:"white",marginTop:"-1.7%",marginLeft:"81%"}}>|</div>
         <div style={{color:"white",marginLeft:"83%",marginTop:"-1.5%",cursor:"pointer"}} onClick={faq}>FAQ's</div>
         </div>

    </div>

  )
}

export default Landing