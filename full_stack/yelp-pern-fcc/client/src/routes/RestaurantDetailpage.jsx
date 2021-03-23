import React, {useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom';
import {fetchRestaurantAPI} from '../services/Restaurant-API'
import { RestaurantsContext } from '../context/RestaurantsContext';
import StarRating from '../components/StarRating';
import Reviews from '../components/Reviews';
import AddReview from '../components/AddReview';

function RestaurantDetailpage() {
  const {id} = useParams();
  const {selectedRestaurant, setSelectedRestaurant} = useContext(RestaurantsContext);

  useEffect(() => {
    const fetchRestaurant = async (id) => {
      try {
        const response = await fetchRestaurantAPI(id);
        console.log(response)
        if(response.status === "success") {
          setSelectedRestaurant(response.data)
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
          <h1 className="text-center display-1">{selectedRestaurant.restaurant.name}</h1>
          <div className="mt-3">
            <Reviews reviews={selectedRestaurant.reviews}/>
            <AddReview />
          </div>
        </>
      )}
    </div>
  )
}

export default RestaurantDetailpage
