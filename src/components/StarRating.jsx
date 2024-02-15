// StarRating.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import '../styles/StarRating.scss';

const StarRating = ({ rating }) => {
  const maxStars = 5;
  const filledStars = Math.floor((rating / 100) * maxStars);

  return (
    <div className="star-rating">
      {[...Array(maxStars)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={index < filledStars ? faStar : faStarRegular}
          className={index < filledStars ? 'star filled' : 'star'}
        />
      ))}
    </div>
  );
};

export default StarRating;
