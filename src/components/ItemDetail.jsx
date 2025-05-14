import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Books from './Types/Books'
import Character from './Types/Character'
import Planets from './Types/Planets'
import Ships from './Types/Ships'
import Species from './Types/Species'

export default function ItemDetail() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  let params = useParams()
  console.log(params.topic, params.id)

  const componentsMap = {
    books: <Books data={data}/>,
    characters: <Character data={data}/>,
    planets: <Planets data={data}/>,
    ships: <Ships data={data}/>,
    species: <Species data={data}/>
  }

  useEffect(() => {
    async function getData() {
      const response = await fetch(`http://127.0.0.1:5000/${params.topic}/${params.id}`)
      const result = await response.json()
      setData(result)
      setLoading(true)
      console.log(result)
    }
    getData()
  }, [params.topic, params.id])

  return (
    <div className='card'>
      <h2 className='card-title'>{ loading ? data.name : 'Loading...'}</h2>
      { loading 
        ? 
          componentsMap[params.topic]
        :
          <div></div>
      }
    </div>
  )
}
