import React, {useState} from 'react'
import {useParams} from 'react-router-dom';

export default function UpdateRestaurant() {
  const {id} = useParams()
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [priceRange, setPriceRange] = useState(0)
  
  return (
    <div>
      <form action="">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input type="text" className="form-control" id="location" value={location} onChange={(e) => setLocation(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="price_range">Prince Range</label>
          <input type="number" className="form-control" id="price_range" value={priceRange} onChange={(e) => setPriceRange(e.target.value)}/>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
