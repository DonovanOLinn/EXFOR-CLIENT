import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'


export default function ItemList() {
    const [character, setCharacter] = useState([])
    const [loading, isLoading] = useState(true)
    console.log(character)

    useEffect(() => {
        async function getData() {
            const response = await fetch('http://127.0.0.1:5000/characters', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json()
            setCharacter(data)
            isLoading(false)
            console.log(data)
        }
        getData()
    }, [])


  return (
    <div>
        <div className="card">
            <h2>Skippy's Ship</h2>
            <p>Fastest monkey hauler in the galaxy.</p>
        </div>

        <div className="grid">
            <ItemCard />
        </div>

        <div>
            {loading ? <p>Nothing</p> : <p>{character[0].character_name}</p>}
        </div>
        <pre>
            {/* <code>{JSON.stringify(data, null, 2)}</code> */}
        </pre>

    </div>
  )
}
