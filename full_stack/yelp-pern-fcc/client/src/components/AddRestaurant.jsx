import React, {useState, useContext} from 'react'
import {addRestaurantAPI} from '../services/Restaurant-API'
import {RestaurantsContext} from '../context/RestaurantsContext';

function AddRestaurant() {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [priceRange, setPriceRange] = useState(0)

  const {restaurants, setRestaurants} = useContext(RestaurantsContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    let restaurant = {name, location, price_range: priceRange}
    try {
      const resp = await addRestaurantAPI(restaurant)
      setRestaurants([...restaurants, resp.data.restaurant])
      console.log(resp)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="mb-4">
      <form action="">
        <div className="form-row" style={{display: "flex"}}>
          <div className="col" style={{marginRight: "10px"}}>
            <input type="text" placeholder="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="col" style={{marginRight: "10px"}}>
            <input type="text" placeholder="location" className="form-control" value={location} onChange={(e) => setLocation(e.target.value)}/>
          </div>
          <div className="col" style={{marginRight: "10px"}}>
            <select 
              className="custom-select mr-sm-2" 
              style={{width: "100%", height:"100%", border: "1px solid lightgrey"}} 
              value={priceRange} 
              onChange={(e) => setPriceRange(e.target.value)}>
                <option disabled>Price Range</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
                <option value="5">$$$$$</option>
            </select>
          </div>
          <button onClick={handleSubmit} className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  )
}

export default AddRestaurant 
