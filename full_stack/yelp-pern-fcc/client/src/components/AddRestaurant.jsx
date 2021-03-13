import React from 'react'

function AddRestaurant() {
  return (
    <div className="mb-4">
      <form action="">
        <div className="form-row" style={{display: "flex"}}>
          <div className="col" style={{marginRight: "10px"}}>
            <input type="text" placeholder="name" className="form-control"/>
          </div>
          <div className="col" style={{marginRight: "10px"}}>
            <input type="text" placeholder="location" className="form-control"/>
          </div>
          <div className="col" style={{marginRight: "10px"}}>
            <select name="" id="" className="custom-select mr-sm-2" style={{width: "100%", height:"100%", border: "1px solid lightgrey"}}>
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  )
}

export default AddRestaurant 
