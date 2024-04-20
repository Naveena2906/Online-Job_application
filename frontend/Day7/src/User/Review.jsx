import React, { useState } from 'react';
import axios from 'axios';
import { addreview } from '../service/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Topbar from '../Topbar/Topbar';
import Sidebar from '../Topbar/Sidebar';

const Review = () => {
    const [reviewData, setReviewData] = useState({
        username: '',
        email: '',
        rating: 0,
        date: new Date().toISOString().slice(0, 10) 
    });

    const handleChange = (e) => {
        setReviewData({ ...reviewData, [e.target.name]: e.target.value });
    };

    const handleRatingClick = (ratingValue) => {
        setReviewData({ ...reviewData, rating: ratingValue });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await addreview(reviewData);
            console.log(response.data);
            // Optionally, you can handle success or redirect to another page
        } catch (error) {
            console.error('Error adding review:', error);
            // Optionally, you can display an error message to the user
        }
    };

    return (
        <div >
            <Sidebar/>
            <Topbar/>
            <div style={{marginLeft:"40%",marginTop:"14%"}}>
            <h1 style={{fontSize:"30px"}}>Add Review</h1>
            <form onSubmit={handleSubmit}>
                <div style={{padding:"1%"}}>
                    <label htmlFor="username">Username</label>
                    <input style={{border:"1px solid black",marginLeft:"2%"}} type="text" id="username" name="username" onChange={handleChange} />
                </div>
                <div style={{padding:"1%"}}>
                    <label htmlFor="email">Email</label>
                    <input style={{border:"1px solid black",marginLeft:"5.8%"}} type="email" id="email" name="email" onChange={handleChange} />
                </div>
                <div style={{padding:"1%"}}>
                    <label>Rating</label>
                    {[...Array(5)].map((_, index) => (
                        <FontAwesomeIcon
                            key={index}
                            icon={faStar}
                            className={index < reviewData.rating ? 'star-filled' : 'star-empty'}
                            onClick={() => handleRatingClick(index + 1)}
                            style={{ marginLeft:"4.5%",cursor: 'pointer', color: index < reviewData.rating ? 'gold' : 'gray' }}
                        />
                    ))}
                </div>
                <div style={{padding:"1%"}}>
                    <label>Date</label>
                    <input style={{marginLeft:"6%"}} type="text" value={reviewData.date} disabled />
                </div>
                <button style={{marginLeft:"9%",marginTop:"4%"}} type="submit">Submit Review</button>
            </form>
        </div>
        </div>
    );
};

export default Review;
