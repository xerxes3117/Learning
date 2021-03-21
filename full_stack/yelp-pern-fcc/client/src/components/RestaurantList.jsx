import React, {useEffect, useContext} from 'react'
import { RestaurantsContext } from '../context/RestaurantsContext';
import {fetchRestaurantsAPI, deleteRestaurantAPI} from '../services/Restaurant-API'
import {useHistory} from 'react-router-dom';

function RestaurantList() {

  const {restaurants, setRestaurants} = useContext(RestaurantsContext);
  let history = useHistory()

  useEffect(() => {
      const fetchRestaurants = async () => {
        try {
          const response = await fetchRestaurantsAPI();
          setRestaurants(response.data.restaurants);
        } catch (error) {
          console.error(error)
        }
      }

      fetchRestaurants();
  }, [])

  const deleteRestaurantHandler = async (e, id) => {
    e.stopPropagation()
    try {
      const response = await deleteRestaurantAPI(id)
      if(response.status === 204) {
        const updatedRestaurants = [...restaurants].filter(restaurant => restaurant.id !== id);
        setRestaurants(updatedRestaurants);
      }
    } catch (error) {
      console.error(error)
    }
  }

  const updateRestaurantHandler = async (e, id) => {
    e.stopPropagation()
    history.push(`/restaurants/${id}/update`);
  }

  const handleRestaurantSelect = (id) => {
    history.push(`/restaurants/${id}`);
  }

  return (
    <div className="list-group">
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope="col" style={{backgroundColor: "#0d6efd"}}>Restaurant</th>
            <th scope="col" style={{backgroundColor: "#0d6efd"}}>Location</th>
            <th scope="col" style={{backgroundColor: "#0d6efd"}}>Price Range</th>
            <th scope="col" style={{backgroundColor: "#0d6efd"}}>Ratings</th>
            <th scope="col" style={{backgroundColor: "#0d6efd"}}>Edit</th>
            <th scope="col" style={{backgroundColor: "#0d6efd"}}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants && restaurants.map(({id, name, location, price_range}) => (
            <tr key={id} onClick={() => handleRestaurantSelect(id)}>
              <td>{name}</td>
              <td>{location}</td>
              <td>{"$".repeat(price_range)}</td>
              <td>Rating</td>
              <td>
                <button className="btn btn-warning" onClick={(e) => updateRestaurantHandler(e, id)}>Update</button>
              </td>
              <td>
                <button className="btn btn-danger" onClick={(e) => deleteRestaurantHandler(e, id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RestaurantList
