import React from 'react'
import '../User/Company.css';
const Company = ({title,rating,locaion}) => {
  return (
    <>
    <div className='company'>
      <div className="company1div">
        <div className="left">
            <img src="https://media.glassdoor.com/sql/4138/accenture-squareLogo-1709650590794.png" alt="" />
            <div className="">
              <h2>{title}</h2>
              <p>{rating}*</p>
            </div>
        </div>
        <div className="right">
            <div className="">
              <h2>1.7L</h2>
              <p>Review</p>
            </div>
            <div className="">
              <h2>89.5L</h2>
              <p>Salary</p>
            </div>
            <div className="">
              <h2>54.4L</h2>
              <p>Jobs</p>
            </div>
        </div>
      </div>

      <div className="company2div">
            <div className="">
              <h2>Location</h2>
              <p>{locaion}</p>
            </div>
            <div className="">
              <h2>Global Company Size</h2>
              <p>10000+ Employees</p>
            </div>
            <div className="">
              <h2>Industry</h2>
              <p>Business consulting</p>
            </div>
      </div>

      <div className="company3div">
        <h4>Description</h4>
<p>Accenture is a leading global professional services company that helps the world’s leading businesses, governments and other organizations build their digital core, optimize their operations, accelerate revenue .</p>
      </div>

    </div>
    </>

  )
}

export default Company