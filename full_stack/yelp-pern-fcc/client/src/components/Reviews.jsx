import React from 'react'
import StarRating from './StarRating'

function Reviews() {
  return (
    <div className="row row-cols-3 mb-2">
      <div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth: "30%", marginRight: "1rem"}}>
        <div className="card-header d-flex justify-content-between">
          <span>Jane</span>
          <span><StarRating rating={3.4}/></span>
        </div>
        <div className="card-body">
          <div className="card-text">
            This restaurant was awesome
          </div>
        </div>
      </div>
      <div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth: "30%", marginRight: "1rem"}}>
        <div className="card-header d-flex justify-content-between">
          <span>Jane</span>
          <span><StarRating rating={3.4}/></span>
        </div>
        <div className="card-body">
          <div className="card-text">
            This restaurant was awesome
          </div>
        </div>
      </div>
      <div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth: "30%", marginRight: "1rem"}}>
        <div className="card-header d-flex justify-content-between">
          <span>Jane</span>
          <span><StarRating rating={3.4}/></span>
        </div>
        <div className="card-body">
          <div className="card-text">
            This restaurant was awesome
          </div>
        </div>
      </div>
      <div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth: "30%", marginRight: "1rem"}}>
        <div className="card-header d-flex justify-content-between">
          <span>Jane</span>
          <span><StarRating rating={3.4}/></span>
        </div>
        <div className="card-body">
          <div className="card-text">
            This restaurant was awesome
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
