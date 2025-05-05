import React from 'react'

export default function Books({data}) {
  return (
    <div>
        <p>Author: <em>{data.author}</em></p>
        <p>Author Summary: {data.author_summary}</p>
        <p>Narrator: {data.narator}</p>
        <p>Next in series: {data.next}</p>
        <p>Release Date: {data.release_date}</p>
        <p>Run Time: {data.run_time}</p>
    </div>
  )
}
