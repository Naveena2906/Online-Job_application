import '../Application/Application.css';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { Resume } from './Resume';
import { AdminTopbar } from '../Navbar/AdminTopbar';
import { AdminNavbar } from '../Navbar/AdminNavbar';

export const ApplicationReceived = () => {
  const [open, setOpen] = useState(false);

  const resume = () => {
    setOpen(!open);
  };

  return (
    <div>
      <AdminTopbar />
      <AdminNavbar />
      <div className="applicationbody">
        <h2 className="text-2xl font-bold" >Received Applications</h2>
        <div className="grid-container">
          <div className="grid-item" onClick={resume}>
            <h3>Naveena</h3>
            <p>Java Developer</p>
            <p>Shortlist<CheckIcon className="text-green-600 cursor-pointer" />
             Decline<CloseIcon className="text-red-600 cursor-pointer" /></p>
            <Resume isOpen={open} onClose={resume} />
          </div>
          <div className="grid-item" onClick={resume}>
            <h3>Jayaprakash</h3>
            <p>Python Developer</p>
            <p>Shortlist<CheckIcon className="text-green-600 cursor-pointer" />
             Decline<CloseIcon className="text-red-600 cursor-pointer" /></p>
            <Resume isOpen={open} onClose={resume} />
          </div>
          <div className="grid-item" onClick={resume}>
            <h3>Lingesh</h3>
            <p>React Developer</p>
            <p>Shortlist<CheckIcon className="text-green-600 cursor-pointer" />
             Decline<CloseIcon className="text-red-600 cursor-pointer" /></p>
            <Resume isOpen={open} onClose={resume} />
          </div>
          {/* Add more grid items as needed */}
        </div>
      </div>
    </div>
  );
};
