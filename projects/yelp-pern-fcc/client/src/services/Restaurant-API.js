export const fetchRestaurantsAPI =  async () => {
  const response = await fetch('http://localhost:4002/api/v1/restaurants')
  return await response.json();
} 

export const fetchRestaurantAPI =  async (id) => {
  const response = await fetch('http://localhost:4002/api/v1/restaurants/' + id)
  return await response.json();
} 

/**
 * @todo : this is not working for default entry in price range (integer /string type issues????)
 * @todo : why do we stringify the restaurant while sending in body
 */
export const addRestaurantAPI =  async (restaurant) => {
  const response = await fetch('http://localhost:4002/api/v1/restaurants', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(restaurant)
  })
  return await response.json(); 
} 

/**
 * @Note : In return we don't do response.json() here because a status 204 response doesn't return anything in data
 */
export const deleteRestaurantAPI =  async (id) => {
  const response = await fetch('http://localhost:4002/api/v1/restaurants/' + id, {method: 'DELETE'})
  return await response; 
} 

 export const updateRestaurantAPI =  async (restaurant, id) => {
  const response = await fetch('http://localhost:4002/api/v1/restaurants/' + id, {
    method: 'PUT', 
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(restaurant)
  })
  return await response.json(); 
} 

export const addReviewAPI =  async (id, review) => {
  const response = await fetch(`http://localhost:4002/api/v1/restaurants/${id}/addReview`, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(review)
  })
  return await response.json(); 
} 