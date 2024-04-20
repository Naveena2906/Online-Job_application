import { useState } from 'react'
import './App.css'
import Signup from '../src/Signup/Signup.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login/Login.jsx'
import Landing from './Landing/LandingPage/Landing.jsx'
// import User from './User/User.jsx'
import Viewjobs from './User/Viewjobs.jsx'
import Applyjob from './User/Applyjob.jsx'
import Appliedjob from './User/Appliedjob.jsx'
import Education from './User/Education.jsx'
import Skill from './User/Skill.jsx'
import Experience from './User/Experience.jsx'
// import AdminDashboard from './Admin/AdminDashboard.jsx'
// import { ApplicationReceived } from './Admin/Application/ApplicationReceived.jsx'
import Adminhome from './Admin/Home/Adminhome.jsx'
import { ApplicationReceived } from './Admin/Application/ApplicationReceived.jsx'
import { Jobs } from './Admin/Jobs/Jobs.jsx'
import { AddJob } from './Admin/AddJob/AddJob.jsx'
import Company from './User/Company.jsx'
import EditJobs from './Admin/Jobs/EditJobs.jsx'
import Privacy from './Landing/Privacy.jsx'
import Faq from './Landing/Faq/Faq.jsx'
import Terms from './Landing/Terms/Terms.jsx'
import Review from './User/Review.jsx'
import UserReview from './Admin/Userreview/UserReview.jsx'
import About from './Landing/About/About.jsx'
import { User } from './User/User.jsx'
import Team from './Landing/Team/Team.jsx'
import Contact from './Landing/Contact/Contact.jsx'
import Commit from './Landing/About/Commit.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}></Route>
          <Route path='/s' element={<Signup/>}></Route>
          <Route path='/l' element={<Login/>}></Route>
          <Route path='/user/dashboard' element={<User/>}></Route>
          <Route path='/user/viewjob' element={<Viewjobs/>}></Route>
          <Route path='/user/applyjob' element={<Applyjob/>}></Route>
          <Route path='/user/applied' element={<Appliedjob/>}></Route>
          <Route path='/user/education' element={<Education/>}></Route>
          <Route path='/user/skill' element={<Skill/>}></Route>
          <Route path='/user/experience' element={<Experience/>}></Route>
          <Route path='/admin/home' element={<Adminhome/>}></Route>
          <Route path='/addjob' element={<AddJob/>}></Route>
          <Route path='/application' element={<ApplicationReceived/>}></Route>
          <Route path='/jobs' element={<Jobs/>}></Route>
          <Route path='/company' element={<Company/>}></Route>
          <Route path='/editjob/:id' element={<EditJobs/>}/>
          <Route path='/privacy' element={<Privacy/>}/>
          <Route path='/f' element={<Faq/>}/>
          <Route path='/t' element={<Terms/>}/>
          <Route path='/r' element={<Review/>}/>
          <Route path='/review' element={<UserReview/>}/>
          <Route path='/a' element={<About/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/commit' element={<Commit/>}/>

        </Routes>
        </BrowserRouter>
        {/* <Signup/> */}
        </div>
    </>
  )
}

export default App
