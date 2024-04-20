// Jobs.jsx
import '../Jobs/Jobs.css';
import { AdminTopbar } from '../Navbar/AdminTopbar';
import { AdminNavbar } from '../Navbar/AdminNavbar';
import { useEffect, useState } from 'react';
import { deleteadminjob, getadminjob } from '../../service/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

export const Jobs = () => {
  const navigate=useNavigate();
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const res = await getadminjob();
      setJobs(res.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const edit=(job)=>{
    console.log(job);
    navigate(`/editjob/${job.id}`);
  }

  const handleDelete = async (job) => {
    try {
      const res = await deleteadminjob(job.id);
      console.log(res.data);
      if (res.data === 'deleted successfully') {
        fetchJobs();
      }
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  return (
    <>
      <AdminTopbar />
      <AdminNavbar />
      <div className="jobsbody mt-[100px] ml-[300px]">
        <h2 className='text-2xl font-bold ml-[200px]'>The List of jobs that you have posted</h2>
        <div className="job-grid mt-[50px]" >
          {jobs.map((job) => (
            <div key={job.id} className="job-card">
              <h1>{job.jobtitle}</h1>
              <h4>{job.orgname}</h4>
              <p><FontAwesomeIcon icon={faLocationDot} /> {job.joblocation} <FontAwesomeIcon icon={faBox} /> {job.jobexperience}</p>
              <h5><strong>Openings:</strong> {job.jobopenings}</h5>
              <h3>{job.jobdescription}</h3>
              <div className="job-actions">
                <EditIcon className='text-green-600 cursor-pointer' onClick={() => edit(job)} />
                <DeleteIcon className='text-red-600 cursor-pointer' onClick={() => handleDelete(job)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
