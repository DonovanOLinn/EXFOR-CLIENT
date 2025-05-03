import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ItemCard({search, val}) {
  const navigate = useNavigate()


  return (
    <div className='card' onClick={() => navigate(`/${search}/${val.id}`)}>
      <h2 className='card-title'>{val.name}</h2>
      <img src={val.image} alt="Image Unavailable" />
      <p className='card-description'>{val.author_summary}</p>
  </div>
  )
}
