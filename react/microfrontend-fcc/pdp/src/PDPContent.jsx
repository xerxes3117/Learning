import React, { useEffect, useState, useRef } from 'react'

import {getProductById, currency} from 'home/products'
import { useParams } from 'react-router';

import placeAddToCart from "addtocart/placeAddToCart"

export default function PDPContent() {
  const {id} = useParams();
  const [product, setProduct] = useState(null)

  useEffect(() => {
    if(id){
      getProductById(id).then(setProduct)
    } else {
      setProduct(null)
    }
  }, [id])

  useEffect(() => {
    if(addToCart.current){
      placeAddToCart(addToCart.current, product.id)
    }
  }, [product])

  const addToCart = useRef(null)

  if(!product) return null;
  
  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <div className="flex">
          <div className="font-bold text-3xl flex-grow">{product.name}</div>
          <div className="font-bold text-3xl flex-end">
            {currency.format(product.price)}
          </div>
        </div>
        <div ref={addToCart}></div>
        <div className="mt-10">{product.description}</div>
        <div className="mt-10">{product.longDescription}</div>
      </div>
    </div>
  )
}
