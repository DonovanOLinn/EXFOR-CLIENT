import React from 'react'

export default function Species({data}) {
  return (
    <div>
        <p>Species Name: {data.name}</p>
        <p>Species Appearance: {data.appearance}</p>
        <p>Species Patron: {data.patron}</p>
        <p>Species Tech Level: {data.tech_level}</p>
        <p>Species Nickname: {data.nickname}</p>
        <p>Species Coalition: {data.coalition}</p>
    </div>
  )
}
