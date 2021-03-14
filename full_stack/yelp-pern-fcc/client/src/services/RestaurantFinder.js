const fetchRestaurantsAPI =  async () => {
  const response = await fetch('http://localhost:4000/api/v1/restaurants')
  return await response.json();
} 

export default fetchRestaurantsAPI;