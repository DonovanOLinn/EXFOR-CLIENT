import React from 'react'

export default function Planets({data}) {
  return (
    <div>
        <p><strong>Planet Nickname:</strong> {data.planet_nickname}</p>
    </div>
  )
}
