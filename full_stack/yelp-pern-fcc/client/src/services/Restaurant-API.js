export const fetchRestaurantsAPI =  async () => {
  const response = await fetch('http://localhost:4000/api/v1/restaurants')
  return await response.json();
} 

export const fetchRestaurantAPI =  async (id) => {
  const response = await fetch('http://localhost:4000/api/v1/restaurants/' + id)
  return await response.json();
} 

/**
 * @todo : this is not working for default entry in price range (integer /string type issues????)
 */
export const addRestaurantAPI =  async (restaurant) => {
  const response = await fetch('http://localhost:4000/api/v1/restaurants', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(restaurant)
  })
  return await response.json(); 
} 

export const deleteRestaurantAPI =  async (id) => {
  const response = await fetch('http://localhost:4000/api/v1/restaurants/' + id, {method: 'DELETE'})
  return await response; //We don't/can't do response.json() here because a status 204 response (used in delete API) doesn't return anything in data
} 