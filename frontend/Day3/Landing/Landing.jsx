import React ,{useRef}from 'react'
import Topbar from '../Topbar/Topbar'
// import slogo from '../Image/landimage.webp';
import '../Landing/Landing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Landing = () => {
  const topCompaniesRef = useRef(null);
  const cardWidth = 200; // Width of each company card
  const numVisibleCards = 5; // Number of visible cards at a time

  const scrollToNextBox = () => {
    if (topCompaniesRef.current) {
      // Calculate the distance to scroll
      const scrollDistance = cardWidth * numVisibleCards;

      // Scroll to the next set of cards
      topCompaniesRef.current.scrollBy({
        left: scrollDistance,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='landbody'>
         <Topbar />
         {/* <div>
         </div> */}
      {/* <img style={{width:"50%",marginLeft:"60px",marginTop:"10%"}} src={slogo}/> */}
        <div className='land'>
        <h1 className='land-title'>FIND YOUR <br/><span>PERFECT JOB</span><br/>EASILY</h1>
        </div>
        <div className='search-wrapper'>
          <div className='search-box'>
            <div className='search-card'> 
                <input placeholder='Job Title' className='search-input' style={{padding:"1%"}}/>
                <button className='search-but'>Search</button>
            </div>
          </div>
        </div>
        <div className='filter-box'>
          <div className='filter-dropdown'>
            <select className='filter-select'>
              <option>Job Level</option>
              <option>Entry</option>
              <option>Mid-Senior</option>
              {/* <option>Job Level</option> */}
            </select>
            <select className='filter-select'>
              <option>Job Function</option>
              <option>IT</option>
              <option>Management</option>
              <option>Education</option>
            </select>
            <select className='filter-select'>
              <option>Employement Type</option>
              <option>Internship</option>
              <option>Part Time</option>
              <option>Full Time</option>
            </select>
            <select className='filter-select'>
              <option>Locations</option>
              <option>Remote</option>
              <option>US</option>
              <option>India</option>
            </select>
            <select className='filter-select'>
              <option>Education</option>
              <option>High School</option>
              <option>Bachelor's Degree</option>
              <option>Master's Degree</option>
            </select>
          </div>
        </div>

       <div className='job-desc'>Top Companies Hiring Now</div>
       <div className='top-companies-scroll'>
        <div ref={topCompaniesRef} className='top-companies-container'>
          {[...Array(10)].map((_, index) => (
            <div key={index} className='company-card'>{`Company ${index + 1}`}</div>
          ))}
        </div>
        <div className='scroll-navigation' onClick={scrollToNextBox}>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
    </div>

  )
}

export default Landing