import React from 'react'
import '../User/Appliedjob.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Topbar from '../Topbar/Topbar';
import Sidebar from '../Topbar/Sidebar';
const Appliedjob = () => {
  return (
    <div className='jobrole-body'>
      <Topbar/>
      <Sidebar/>
      <div style={{padding:"1%"}}>
        <div className='job-role'>
            <p>Name: xyz</p>
            <p>Role: React Development</p>
            <p>Submitted on: 4-01-2024</p>
            <p>You have been selected for this role <FontAwesomeIcon icon={faSmile} /></p>
        </div>
        </div>
        <div style={{padding:"1%"}}>
        <div className='job-role'>
            <p>Name: xyz</p>
            <p>Role: Date Engineer</p>
            <p>Submitted on: 19-02-2024</p>
            <p>You are not selected for this role.Wish you the best luck in your future endeavors <FontAwesomeIcon icon={faSmile} /></p>
        </div>
        </div>
        <div style={{padding:"1%"}}>
        <div className='job-role'>
            <p>Name: xyz</p>
            <p>Role: Software Analyst</p>
            <p>Submitted on: 11-03-2024</p>
            <p>Pending <FontAwesomeIcon icon={faSpinner} /> </p>
        </div>
        </div>
    </div>
  )
}

export default Appliedjob