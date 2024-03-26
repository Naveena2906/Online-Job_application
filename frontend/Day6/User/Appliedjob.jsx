import React from 'react';
import '../User/Appliedjob.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Topbar from '../Topbar/Topbar';
import Sidebar from '../Topbar/Sidebar';
import { useLocation } from 'react-router-dom';

const Appliedjob = () => {
  const location = useLocation();
  const { state } = location;
  // const { company_name, position, duration, skill_develop } = state.appliedData;

  console.log('Location State:', state); // Log the state object

  if (!state ||!state.appliedData) {
    console.log('No data available'); // Log when no data is available
    return (
      <div className='jobrole-body'>
        <Topbar />
        <Sidebar />
        <p>No data available</p>
      </div>
    );
  }

  // const { first_name, last_name, email, password, address, mobilenum } = state.addjobData;
  const { company_name, position, duration, skill_develop } = state.appliedData;

  return (
    <div className='jobrole-body'>
      <Topbar />
      <Sidebar />
      <div style={{ padding: '1%' }}>
        <div className='job-role'>
          {/* <p>First Name: {first_name}</p>
          <p>Last Name: {last_name}</p>
          <p>Email: {email}</p>
          <p>Password: {password}</p>
          <p>Address: {address}</p>
          <p>Mobile Number: {mobilenum}</p> */}
          <p>Name: {company_name}</p>
          <p>Position: {position}</p>
          <p>Duration: {duration}</p>
          <p>Skills Developed: {skill_develop}</p>
        </div>
      </div>
      <div style={{ padding: '1%' }}>
        <div className='job-role'>
          {/* <p>First Name: {first_name}</p>
          <p>Last Name: {last_name}</p>
          <p>Email: {email}</p>
          <p>Password: {password}</p>
          <p>Address: {address}</p>
          <p>Mobile Number: {mobilenum}</p> */}
          <p>Name: {company_name}</p>
          <p>Position: {position}</p>
          <p>Duration: {duration}</p>
          <p>Skills Developed: {skill_develop}</p>
        </div>
      </div>
    </div>
  );
};

export default Appliedjob;
