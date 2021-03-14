import React, {useEffect, useContext} from 'react'
import { RestaurantsContext } from '../context/RestaurantsContext';
import fetchRestaurantsAPI from '../services/RestaurantFinder'

function RestaurantList() {

  const {restaurants, setRestaurants} = useContext(RestaurantsContext);

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
            <tr key={id}>
              <td>{name}</td>
              <td>{location}</td>
              <td>{"$".repeat(price_range)}</td>
              <td>Rating</td>
              <td>
                <button className="btn btn-warning">Update</button>
              </td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RestaurantList
