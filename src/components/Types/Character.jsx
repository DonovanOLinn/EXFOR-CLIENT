import React from 'react'

export default function Character({data}) {
  return (
    <div>
    <p>Description: {data.description}</p>
    <p>Sex: {data.sex}</p>
    <p>Status: {data.status}</p>
    <p>First Book Appearance: {data.first_book_appearance.name}</p>
    </div>
  )
}
