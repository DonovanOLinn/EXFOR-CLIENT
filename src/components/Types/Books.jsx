import React from 'react'

export default function Books({data}) {
  return (
    <div>
        <p><strong>Author</strong>: <em>{data.author.replace("_", " ")}</em></p>
        <p><strong>Author Summary:</strong> {data.author_summary}</p>
        <p><strong>Narrator:</strong> {data.narrator}</p>
        <p><strong>Next in series:</strong> {data.next}</p>
        <p><strong>Release Date:</strong> {data.release_date}</p>
        <p><strong>Run Time:</strong> {data.run_time}</p>
    </div>
  )
}
