import React from 'react'
import StarRating from './StarRating'

function Reviews({reviews}) {
  return (
    <div className="row row-cols-3 mb-2">
      {
        reviews.map(({id, name, review_text, rating}) => (
          <div key={id} className="card text-white bg-primary mb-3 mr-4" style={{maxWidth: "30%", marginRight: "1rem"}}>
            <div className="card-header d-flex justify-content-between">
              <span>{name}</span>
              <span><StarRating rating={rating}/></span>
            </div>
            <div className="card-body">
              <div className="card-text">
                {review_text}
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Reviews
