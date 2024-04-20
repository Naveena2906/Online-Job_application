import React, { useState, useEffect } from 'react';
import { getreview } from '../../service/api';
import { useNavigate } from 'react-router-dom';

const UserReview = () => {
    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate();

    const fetchReviews = async () => {
        try {
            const res = await getreview(); // Assuming getreview() returns the list of reviews
            setReviews(res.data);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    // const handleJob = () => {
    //     navigate("/user/applyjob");
    // };

    return (
        <div>
            <h1>User Reviews</h1>
            <div>
                {reviews.map((review) => (
                    <div key={review.id} className="review-card">
                        <p>Username: {review.username}</p>
                        <p>Email: {review.email}</p>
                        <p>Rating: {review.rating}</p>
                        <p>Date: {review.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserReview;
