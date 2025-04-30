import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import SearchBar from './SearchBar'


export default function ItemList() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('books')

    useEffect(() => {
        async function getData() {
            const response = await fetch(`http://127.0.0.1:5000/${search}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json()
            setData(data)
            setLoading(false)
            console.log(data)
        }
        getData()
    }, [search])


  return (
    <div>
        <div className="card">
            <h2>Skippy's Ship</h2>
            <p>Fastest monkey hauler in the galaxy.</p>
        </div>

        <SearchBar setSearch={setSearch}/>

        <div className="grid">
            {loading ? <p>Nothing</p> : 
                data.map((val) => (
                    <li>
                        <ItemCard val={val}/>
                    </li>
                ))}
        </div>

        <div>
            {
                loading 
                    ? 
                <p>Nothing</p> 
                    : 
                <pre>
                    <code>{JSON.stringify(data, null, 2)}</code>
                </pre>
            }
        </div>

    </div>
  )
}
