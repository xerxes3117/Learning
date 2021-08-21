import React, {useState, useContext} from 'react'
import {addReviewAPI} from '../services/Restaurant-API'
import {useParams, useHistory} from 'react-router-dom'

export default function AddReview() {
  const [name, setName] = useState('')
  const [review, setReview] = useState('')
  const [rating, setRating] = useState('Rating')
  const {id} = useParams()
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let resp = await addReviewAPI(id, {name, review_text: review, rating})
      history.go(0)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="mb-2">
      <form action="">
        <div className="form-row">
          <div className="form-group col-8">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Name" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="form-group col-4">
            <label htmlFor="rating">Rating</label>
            <select id="rating" className="custom-select" value={rating} onChange={(e) => setRating(e.target.value)}>
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="review">Review</label>
          <textarea id="review" className="form-control" value={review} onChange={(e) => setReview(e.target.value)}></textarea>
        </div>
        <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
