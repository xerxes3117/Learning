import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './routes/Home'
import RestaurantDetailpage from './routes/RestaurantDetailpage'
import UpdatePage from './routes/UpdatePage'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/restaurants/:id/update" component={UpdatePage} />
        <Route exact path="/restaurants/:id" component={RestaurantDetailpage} />
      </Switch>
    </Router>
  )
}

export default App;