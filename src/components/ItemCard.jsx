import React from 'react'

export default function ItemCard({val}) {
  return (
    <div className='card'>
      <h2 className='card-title'>{val.book_name}</h2>
      <img src={val.image} alt="Image Unavailable" />
      <p className='card-description'>{val.author_summary}</p>
  </div>
  )
}
