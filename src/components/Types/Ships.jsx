import React from 'react'

export default function Ships({data}) {
  return (
    <div>
        <p><strong>Ship Name:</strong> {data.name}</p>
        <p><strong>Ship Type:</strong> {data.ship_type}</p>
        <p><strong>Status:</strong> {data.status}</p>
    </div>
  )
}
