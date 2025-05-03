import React from 'react'
import { useParams } from 'react-router-dom'

export default function ItemDetail() {

  let params = useParams()
  console.log(params.topic, params.id)

  return (
    <div className='card'>
      <h2 className='card-title'>Title</h2>
      <p className='card-description'>description</p>
    </div>
  )
}
