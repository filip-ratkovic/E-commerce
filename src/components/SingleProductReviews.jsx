import React, { useState } from 'react'

function SingleProductReviews({star, reviews}) {
    const whiteStar = "https://img.icons8.com/color/48/000000/star--v1.png";
    const goldStar = "https://img.icons8.com/fluency/48/000000/star.png";
    
  return (
    <div className="single-product-reviews">
    <img src={`${star>=0.5 ? goldStar : whiteStar}`}/>
    <img src={`${star>=1.5 ? goldStar : whiteStar}`}/>
    <img src={`${star>2.5 ? goldStar : whiteStar}`}/>
    <img src={`${star>3.5 ? goldStar : whiteStar}`}/>
    <img src={`${star>4.5 ? goldStar : whiteStar}`}/>
    <span id="reviews-text">  ({reviews} customer reviews)</span>
    </div>
  )
}

export default SingleProductReviews