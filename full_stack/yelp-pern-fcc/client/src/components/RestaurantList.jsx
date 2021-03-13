import React from 'react'

function RestaurantList() {
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
          <tr>
            <td>Ama cafe</td>
            <td>Delhi</td>
            <td>$$$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-warning">Update</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <td>Ama cafe</td>
            <td>Delhi</td>
            <td>$$$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-warning">Update</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default RestaurantList
