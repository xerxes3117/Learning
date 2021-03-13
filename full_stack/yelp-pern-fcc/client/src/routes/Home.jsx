import React from 'react'
import AddRestaurant from '../components/AddRestaurant'
import Header from '../components/Header'
import RestaurantList from '../components/RestaurantList'

function Home() {
  return (
    <div style={{maxWidth: "80%", margin: "0 auto"}}>
      <Header />
      <AddRestaurant />
      <RestaurantList />
    </div>
  )
}

export default Home
