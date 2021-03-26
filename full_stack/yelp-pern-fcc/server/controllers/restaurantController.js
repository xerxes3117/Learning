module.exports = function(app, db) {
  
  //Get all restaurants
  app.get('/api/v1/restaurants', async (req, res) => {
    try {
      const results = await db.query('select r1.*, trunc(avg(r2.rating), 2) as avg_rating, count(r2.rating) as total_reviews from restaurants r1 left join reviews r2 on r1.id = r2.restaurant_id group by r1.id');
      res.status(200).json({
        status: 'success',
        results: results.rows.length,
        data: {
          restaurants: results.rows
        }
      })
    } catch (err) {
      console.error(err)
    }
  })

  //Get a particular restaurant by id
  app.get('/api/v1/restaurants/:id', async (req, res) => {
    try {
      const restaurant = await db.query('select r1.*, trunc(avg(r2.rating), 2) as avg_rating, count(r2.rating) as total_reviews from restaurants r1 left join reviews r2 on r1.id = r2.restaurant_id where r1.id = $1 group by r1.id;', [req.params.id])
      const reviews = await db.query('select * from reviews where restaurant_id = $1', [req.params.id])

      res.status(200).json({
        status: restaurant.rows.length > 0 ? 'success' : 'not found',
        data: {
          restaurant : restaurant.rows.length > 0 ? restaurant.rows[0] : 'No restaurant found with this id',
          reviews: reviews.rows
        }
      })
    } catch (err) {
      console.log(err)
    }
  })

  //Create a new restaurant
  app.post('/api/v1/restaurants', async (req, res) => {
    try {
      const {name, location, price_range} = req.body;
      const results = await db.query('insert into restaurants (name, location, price_range) values($1, $2, $3) returning *', [name, location, price_range])

      res.status(201).json({
        status: 'success',
        data: {
          restaurant: results.rows[0]
        }
      })
    } catch(err) {
      console.log(err)
    }
  })

  //Update restaurant
  app.put('/api/v1/restaurants/:id', async (req, res) => {
    try {
      const {name, location, price_range} = req.body;
      const result = await db.query('update restaurants set name = $1, location = $2, price_range = $3 where id = $4 returning *', [name, location, price_range, req.params.id]);
      res.status(200).json({
        status: 'success',
        data: {
          restaurant: result.rows.length > 0 ? result.rows[0] : 'No restaurant found with this id'
        }
      })
    } catch (err) {
      console.log(err)
    }
  })

  //Delete restaurant
  /** 
   * Status 204 doesn't return any data to front end so unlike other apis we don't call .json() on line 75 here 
   */
  app.delete("/api/v1/restaurants/:id", async (req, res) => {
    try {
      const result = await db.query('delete from restaurants where id = $1 returning *', [req.params.id]);
      res.status(204).send()
    } catch (error) {
      console.log(error)
    }
  })
  
  app.post("/api/v1/restaurants/:id/addReview", async (req, res) => {
    try {
      const {name, review_text, rating} = req.body;
      const result = await db.query('insert into reviews (restaurant_id, name, review_text, rating) values($1, $2, $3, $4) returning *', [req.params.id, name, review_text, rating])
  
      res.status(201).json({
        status: 'success',
        data: result.rows[0]
      })
    } catch (error) {
      console.log(err)
    }
  })
}