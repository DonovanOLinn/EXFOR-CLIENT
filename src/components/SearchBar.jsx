import React, {useState} from 'react'

export default function SearchBar({setSearch}) {

  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(value)
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit' className='submit-button'>Submit</button>
      </form>
    </div>
  )
}
