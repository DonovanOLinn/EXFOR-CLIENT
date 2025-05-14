import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header">
      <Link to='/' className='site-title-link' >
        <h1 className="site-title">Expeditionary Force Archive</h1>
      </Link>
      <p className="site-tagline">Curated by Skippy the Magnificent 🥜</p>
    </header>
  )
}
