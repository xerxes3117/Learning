import React, {useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom';
import {fetchRestaurantAPI} from '../services/Restaurant-API'
import { RestaurantsContext } from '../context/RestaurantsContext';
import StarRating from '../components/StarRating';
import Reviews from '../components/Reviews';

function RestaurantDetailpage() {
  const {id} = useParams();
  const {selectedRestaurant, setSelectedRestaurant} = useContext(RestaurantsContext);

  useEffect(() => {
    const fetchRestaurant = async (id) => {
      try {
        const response = await fetchRestaurantAPI(id);
        if(response.status === "success") {
          setSelectedRestaurant(response.data.restaurant)
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchRestaurant(id);
  }, [])

  return (
    <div>
      {selectedRestaurant && (
        <>
          <div className="mt-3">
            <Reviews />
          </div>
        </>
      )}
    </div>
  )
}

export default RestaurantDetailpage
