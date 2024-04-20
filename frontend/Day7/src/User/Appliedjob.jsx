import React, { useState, useEffect } from 'react';
import '../User/Appliedjob.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Topbar from '../Topbar/Topbar';
import Sidebar from '../Topbar/Sidebar';
import { useLocation } from 'react-router-dom';

const Appliedjob = () => {
  const location = useLocation();
  const { state } = location;
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        const response = await fetch('/api/appliedjobs', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setAppliedJobs(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching applied jobs:', error);
        setLoading(false);
      }
    };
    fetchAppliedJobs();
  }, []);

  if (loading) {
    return (
      <div className='jobrole-body'>
        <Topbar />
        <Sidebar />
        <FontAwesomeIcon icon={faSpinner} spin />
        <p>Loading...</p>
      </div>
    );
  }

  if (!state || !state.appliedData || appliedJobs.length === 0) {
    return (
      <div className='jobrole-body'>
        <Topbar />
        <Sidebar />
        <p>No applied jobs found</p>
      </div>
    );
  }

  return (
    <div className='jobrole-body'>
      <Topbar />
      <Sidebar />
      <div style={{ padding: '1%' }}>
        {appliedJobs.map(job => (
          <div key={job.id} className='job-role'>
            <p>Name: {job.company_name}</p>
            <p>Position: {job.position}</p>
            <p>Duration: {job.duration}</p>
            <p>Skills Developed: {job.skill_develop}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appliedjob;
