import React from 'react'

export default function Species({data}) {
  return (
    <div>
        <p><strong>Species Name:</strong> {data.name}</p>
        <p><strong>Species Appearance:</strong> {data.appearance}</p>
        <p><strong>Species Patron:</strong> {data.patron}</p>
        <p><strong>Species Tech Level:</strong> {data.tech_level}</p>
        <p><strong>Species Nickname:</strong> {data.nickname}</p>
        <p><strong>Species Coalition:</strong> {data.coalition}</p>
    </div>
  )
}
