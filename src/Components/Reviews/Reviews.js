import React, { useState } from 'react';
import '../../hooks/ratingPoint'
import useRating from '../../hooks/ratingPoint';
import Ratings from '../rating/Ratings';


const Reviews = () => {
   const [rating, setRating] = useRating();


  return (
    <div className="mt-5">
      <h3>This is Review Pages</h3>

      <div className="rating-container">
        {rating.map((rating) => (
          <Ratings key={rating.name} rating={rating}></Ratings>
        ))}
        ;
      </div>

   
    </div>
  );
};

export default Reviews;