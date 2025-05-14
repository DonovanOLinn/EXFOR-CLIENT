import React from 'react'

export default function Character({data}) {
  return (
    <div>
    <p><strong>Description:</strong> {data.description}</p>
    <p><strong>Sex:</strong> {data.sex}</p>
    <p><strong>Status:</strong> {data.status}</p>
    <p><strong>First Book Appearance:</strong> {data.first_book_appearance.name}</p>
    </div>
  )
}
