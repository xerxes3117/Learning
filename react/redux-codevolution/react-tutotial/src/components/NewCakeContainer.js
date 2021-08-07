import React, {useState} from 'react'
import {buyCake} from '../redux'
import {connect} from 'react-redux'

function NewCakeContainer({numberOfCakes, buyCake}) {

  const [number, setNumber] = useState(1)

  return (
    <div>
       <h2>Number of Cakes - {numberOfCakes}</h2>      
       <input type="text" value={number} onChange={e => setNumber(e.target.value)}/>
       <button onClick={() => buyCake(number)}>Buy {number} Cake</button>
    </div>
  )
}

const mapStateToProps = state => ({
  numberOfCakes: state.cake.numberOfCakes
})

const mapDispatchToProps = dispatch => ({
  buyCake: number => dispatch(buyCake(number))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
