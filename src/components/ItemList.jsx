import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import SearchBar from './SearchBar'


export default function ItemList() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('books')
    
    useEffect(() => {
        let url = `http://127.0.0.1:5000/${search}`
        async function getData() {

            const cached = localStorage.getItem(url)
            
            if (cached) {
                const { data, timestamp } = JSON.parse(cached);
                if (Date.now() - timestamp < 600000) { //Where 600000 = 10 minutes. 1000 ms * 60 seconds * 10 minutes
                    console.log('Serving from Cache: ', data)
                    setData(data)
                    return
                }
            }


            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const result = await response.json()
            localStorage.setItem(url, JSON.stringify({ data: result, timestamp: Date.now() }))
            setData(result)
            setLoading(false)
            console.log(result)
        }
        getData()
    }, [search])

  return (
    <div>
        <SearchBar setSearch={setSearch}/>
        <div className="grid">
            {!Array.isArray(data) ? <p>Nothing</p> : 
                data.map((val, idx) => (
                    <li key={val.id || idx}>
                        <ItemCard search={search} val={val}/>
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
