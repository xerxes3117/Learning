import React from 'react'
import {buyCake} from '../redux'
import {connect} from 'react-redux'

function CakeContainer({numberOfCakes, buyCake}) {
  return (
    <div>
       <h2>Number of Cakes - {numberOfCakes}</h2>      
       <button onClick={buyCake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = state => ({
  numberOfCakes: state.cake.numberOfCakes
})

const mapDispatchToProps = dispatch => ({
  buyCake: () => dispatch(buyCake())
})

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
