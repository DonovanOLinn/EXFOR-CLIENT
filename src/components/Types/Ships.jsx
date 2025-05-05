import React from 'react'

export default function Ships({data}) {
  return (
    <div>
        <p>Ship Name: {data.name}</p>
        <p>Ship Type: {data.ship_type}</p>
        <p>Status: {data.status}</p>
    </div>
  )
}
