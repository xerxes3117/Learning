import React from 'react'
import './Skeletons.css'

export const SkeletonElement = ({type}) => {

  const classes = `skeleton ${type}`;

  return (
    <div className={classes}></div>
  )
}
