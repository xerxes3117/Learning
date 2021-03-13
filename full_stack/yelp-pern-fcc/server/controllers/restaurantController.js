module.exports = function(app, db) {
  
  //Get all restaurants
  app.get('/api/v1/restaurants', async (req, res) => {
    try {
      const results = await db.query('select * from restaurants');
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
      const result = await db.query('select * from restaurants where id = $1', [req.params.id])
      res.status(200).json({
        status: 'success',
        data: {
          restaurant : result.rows.length > 0 ? result.rows[0] : 'No restaurant found with this id'
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
  app.delete("/api/v1/restaurants/:id", async (req, res) => {
    try {
      const result = await db.query('delete from restaurants where id = $1 returning *', [req.params.id]);
      res.status(204).json({
        status: result.rows.length > 0 ? 'success' : 'No restaurant found with this id'
      })
    } catch (error) {
      console.log(err)
    }
  })
}