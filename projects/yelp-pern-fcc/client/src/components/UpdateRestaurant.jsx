import React, {useState, useEffect} from 'react'
import {fetchRestaurantAPI, updateRestaurantAPI} from '../services/Restaurant-API'
import {useHistory, useParams} from 'react-router-dom';

export default function UpdateRestaurant() {
  const {id} = useParams()
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [priceRange, setPriceRange] = useState('')
  let history = useHistory()

  useEffect(() => {
    const fetchRestaurant = async (id) => {
      try {
        const response = await fetchRestaurantAPI(id);
        if(response.status === "success") {
          const {name, location, price_range} = response.data.restaurant;
          setName(name);
          setLocation(location);
          setPriceRange(price_range);
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchRestaurant(id);
  }, [])

  const updateRestaurantHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await updateRestaurantAPI({name, location, price_range: priceRange}, id);
      history.push('/');
    } catch (error) {
      console.error(error)
    }
  }
  
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
        <button className="btn btn-primary" onClick={updateRestaurantHandler}>Submit</button>
      </form>
    </div>
  )
}
