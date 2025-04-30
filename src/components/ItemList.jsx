import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'


export default function ItemList() {
    const [character, setCharacter] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getData() {
            const response = await fetch('http://127.0.0.1:5000/books', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json()
            setCharacter(data)
            setLoading(false)
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
            {loading ? <p>Nothing</p> : 
                character.map((val) => (
                    <li>
                        <ItemCard val={val}/>
                    </li>
                ))}
        </div>

        <div>
            {loading ? <p>Nothing</p> : 
            <pre>
                {/* {character.map((val, idx) => (
                    <li>
                        {val.character_id}
                        {val.character_name}
                    </li>
                ))} */}
                <code>{JSON.stringify(character, null, 2)}</code>
            </pre>}
        </div>
        <pre>
            {/* <code>{JSON.stringify(data, null, 2)}</code> */}
        </pre>

    </div>
  )
}
